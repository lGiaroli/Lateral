import 'dotenv/config';
import crypto from 'node:crypto';
import { access } from 'node:fs/promises';
import path from 'node:path';
import express from 'express';
import { z } from 'zod';
import { createDemoRequestStore } from './demoRequestStore.js';
import { createLeadMailer } from './leadMailer.js';

const app = express();
const apiPort = Number.parseInt(process.env.PORT ?? '8787', 10);
const distPath = path.resolve(process.cwd(), 'dist');
const store = createDemoRequestStore();
const leadMailer = createLeadMailer();

const demoRequestSchema = z.object({
  name: z.string().min(1).max(120),
  company: z.string().min(1).max(120),
  email: z.email().max(254),
  team: z.string().max(120).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  sourcePath: z.string().max(200).optional().default('/demo'),
  website: z.string().max(0).optional().default(''),
});
const demoRequestListQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(200).default(50),
});

function getClientIp(request) {
  const forwardedFor = request.headers['x-forwarded-for'];

  if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
    return forwardedFor.split(',')[0].trim();
  }

  return request.socket.remoteAddress ?? 'unknown';
}

function isLocalRequest(request) {
  if (process.env.ENABLE_LOCAL_LEAD_REVIEW === 'true') {
    return true;
  }

  if (process.env.NODE_ENV === 'production') {
    return false;
  }

  const ip = getClientIp(request).replace(/^::ffff:/, '').toLowerCase();

  if (ip === '::1' || ip === '127.0.0.1' || ip === 'localhost') {
    return true;
  }

  if (ip.startsWith('10.') || ip.startsWith('192.168.')) {
    return true;
  }

  if (ip.startsWith('172.')) {
    const secondOctet = Number.parseInt(ip.split('.')[1] ?? '', 10);
    return secondOctet >= 16 && secondOctet <= 31;
  }

  return ip.startsWith('fc') || ip.startsWith('fd') || ip.startsWith('fe80:');
}

function stripControlCharacters(value) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
}

function stripHtml(value) {
  return value.replace(/<[^>]*>/g, ' ');
}

function sanitizeSingleLine(value) {
  return stripControlCharacters(stripHtml(value))
    .normalize('NFKC')
    .replace(/\s+/g, ' ')
    .trim();
}

function sanitizeMultiLine(value) {
  return stripControlCharacters(stripHtml(value))
    .normalize('NFKC')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function createRateLimiter({ windowMs, maxRequests }) {
  const buckets = new Map();

  return (request, response, next) => {
    const key = `${request.method}:${request.path}:${getClientIp(request)}`;
    const now = Date.now();
    const current = buckets.get(key);

    if (!current || current.resetAt <= now) {
      buckets.set(key, {
        count: 1,
        resetAt: now + windowMs,
      });

      response.setHeader('RateLimit-Limit', String(maxRequests));
      response.setHeader('RateLimit-Remaining', String(maxRequests - 1));
      response.setHeader('RateLimit-Reset', String(Math.ceil(windowMs / 1000)));
      next();
      return;
    }

    if (current.count >= maxRequests) {
      const retryAfterSeconds = Math.max(1, Math.ceil((current.resetAt - now) / 1000));
      response.setHeader('Retry-After', String(retryAfterSeconds));
      response.setHeader('RateLimit-Limit', String(maxRequests));
      response.setHeader('RateLimit-Remaining', '0');
      response.setHeader('RateLimit-Reset', String(retryAfterSeconds));
      response.status(429).json({
        ok: false,
        error: {
          code: 'rate_limited',
          message: 'Too many demo requests from this connection. Please try again shortly.',
        },
      });
      return;
    }

    current.count += 1;
    response.setHeader('RateLimit-Limit', String(maxRequests));
    response.setHeader('RateLimit-Remaining', String(maxRequests - current.count));
    response.setHeader(
      'RateLimit-Reset',
      String(Math.max(1, Math.ceil((current.resetAt - now) / 1000))),
    );
    next();
  };
}

app.disable('x-powered-by');
app.use(express.json({ limit: '16kb' }));

app.get('/api/health', (_request, response) => {
  response.json({
    ok: true,
    data: {
      status: 'healthy',
      mailer: leadMailer.getStatus(),
      localLeadReview: {
        enabled: process.env.NODE_ENV !== 'production' || process.env.ENABLE_LOCAL_LEAD_REVIEW === 'true',
        path: '/api/demo-requests',
      },
    },
  });
});

app.get('/api/demo-requests', async (request, response, next) => {
  try {
    if (!isLocalRequest(request)) {
      response.status(403).json({
        ok: false,
        error: {
          code: 'local_review_only',
          message: 'Lead review is only available from local or explicitly enabled environments.',
        },
      });
      return;
    }

    const { limit } = demoRequestListQuerySchema.parse({
      limit: request.query.limit ?? 50,
    });
    const entries = await store.list({ limit });

    response.json({
      ok: true,
      data: {
        count: entries.length,
        items: entries,
      },
    });
  } catch (error) {
    next(error);
  }
});

app.post(
  '/api/demo-requests',
  createRateLimiter({ windowMs: 15 * 60 * 1000, maxRequests: 5 }),
  async (request, response, next) => {
    try {
      const rawPayload = demoRequestSchema.parse({
        name: request.body?.name ?? '',
        company: request.body?.company ?? '',
        email: request.body?.email ?? '',
        team: request.body?.team ?? '',
        message: request.body?.message ?? '',
        sourcePath: request.body?.sourcePath ?? '/demo',
        website: request.body?.website ?? '',
      });

      const payload = {
        name: sanitizeSingleLine(rawPayload.name),
        company: sanitizeSingleLine(rawPayload.company),
        email: sanitizeSingleLine(rawPayload.email).toLowerCase(),
        team: sanitizeSingleLine(rawPayload.team),
        message: sanitizeMultiLine(rawPayload.message),
        sourcePath: sanitizeSingleLine(rawPayload.sourcePath) || '/demo',
      };

      const refinedPayload = demoRequestSchema.omit({ website: true }).parse(payload);

      const entry = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        name: refinedPayload.name,
        company: refinedPayload.company,
        email: refinedPayload.email,
        team: refinedPayload.team,
        message: refinedPayload.message,
        sourcePath: refinedPayload.sourcePath,
        userAgent: request.get('user-agent') ?? '',
      };

      await store.upsert({
        ...entry,
        delivery: {
          status: 'pending',
          provider: leadMailer.getStatus().provider,
        },
      });

      const delivery = await leadMailer.sendDemoRequestNotification(entry);

      await store.upsert({
        ...entry,
        delivery,
      });

      if (delivery.status !== 'sent') {
        console.warn('[demo-requests] lead saved but email not fully delivered', {
          requestId: entry.id,
          delivery,
        });
      }

      response.status(delivery.status === 'sent' ? 201 : 202).json({
        ok: true,
        data: {
          requestId: entry.id,
          receivedAt: entry.createdAt,
          delivery,
        },
      });
    } catch (error) {
      next(error);
    }
  },
);

app.use((error, _request, response, next) => {
  if (response.headersSent) {
    next(error);
    return;
  }

  if (error instanceof z.ZodError) {
    response.status(400).json({
      ok: false,
      error: {
        code: 'invalid_demo_request',
        message: 'Please review the demo request fields and try again.',
        fields: error.issues.map((issue) => ({
          field: issue.path.join('.') || 'form',
          message: issue.message,
        })),
      },
    });
    return;
  }

  if (error instanceof SyntaxError && 'body' in error) {
    response.status(400).json({
      ok: false,
      error: {
        code: 'invalid_json',
        message: 'The request body must be valid JSON.',
      },
    });
    return;
  }

  console.error('[demo-requests]', error);
  response.status(500).json({
    ok: false,
    error: {
      code: 'internal_error',
      message: 'We could not save your demo request right now. Please try again in a moment.',
    },
  });
});

async function startServer() {
  let hasDist = true;

  try {
    await access(distPath);
  } catch {
    hasDist = false;
  }

  if (hasDist) {
    app.use(express.static(distPath));
    app.get(/^(?!\/api\/).*/, (request, response) => {
      response.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(apiPort, () => {
    console.log(`Lead API listening on http://localhost:${apiPort}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server', error);
  process.exitCode = 1;
});
