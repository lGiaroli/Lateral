import { Resend } from 'resend';

function getEnvValue(name) {
  const value = process.env[name]?.trim();
  return value ? value : '';
}

function parseRecipientList(value) {
  return value
    .split(',')
    .map((recipient) => recipient.trim())
    .filter(Boolean);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderTextField(label, value) {
  const normalizedValue = value && value.length > 0 ? value : 'Not provided';
  return `${label}: ${normalizedValue}`;
}

function buildTextMessage(entry) {
  return [
    'New demo request',
    '',
    renderTextField('Name', entry.name),
    renderTextField('Company', entry.company),
    renderTextField('Email', entry.email),
    renderTextField('Team', entry.team),
    renderTextField('Message', entry.message),
    renderTextField('Source path', entry.sourcePath),
    renderTextField('Submitted at', entry.createdAt),
  ].join('\n');
}

function buildHtmlMessage(entry) {
  const fields = [
    ['Name', entry.name],
    ['Company', entry.company],
    ['Email', entry.email],
    ['Team', entry.team],
    ['Message', entry.message],
    ['Source path', entry.sourcePath],
    ['Submitted at', entry.createdAt],
  ];

  const rows = fields
    .map(([label, value]) => {
      const normalizedValue =
        value && value.length > 0
          ? escapeHtml(value).replace(/\n/g, '<br />')
          : '<em>Not provided</em>';

      return `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;">${normalizedValue}</td></tr>`;
    })
    .join('');

  return `<div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;"><h1 style="font-size:20px;margin-bottom:16px;">New demo request</h1><table style="border-collapse:collapse;border:1px solid #e5e7eb;">${rows}</table></div>`;
}

export function createLeadMailer() {
  const provider = 'resend';
  const apiKey = getEnvValue('RESEND_API_KEY');
  const from = getEnvValue('RESEND_FROM_EMAIL');
  const to = parseRecipientList(getEnvValue('SALES_LEADS_TO_EMAIL'));
  const subjectPrefix = getEnvValue('LEAD_EMAIL_SUBJECT_PREFIX') || 'New demo request';
  const isEnabled = Boolean(apiKey && from && to.length > 0);
  const client = isEnabled ? new Resend(apiKey) : null;

  return {
    getStatus() {
      return {
        provider,
        enabled: isEnabled,
        recipientsConfigured: to.length,
        fromConfigured: Boolean(from),
        missing:
          isEnabled
            ? []
            : [
                !apiKey ? 'RESEND_API_KEY' : null,
                !from ? 'RESEND_FROM_EMAIL' : null,
                to.length === 0 ? 'SALES_LEADS_TO_EMAIL' : null,
              ].filter(Boolean),
      };
    },
    async sendDemoRequestNotification(entry) {
      if (!isEnabled || !client) {
        return {
          status: 'skipped',
          provider,
          message: 'Email delivery is not configured for this environment.',
        };
      }

      const subject = `${subjectPrefix}: ${entry.name} @ ${entry.company}`;

      try {
        const { data, error } = await client.emails.send({
          from,
          to,
          replyTo: entry.email,
          subject,
          text: buildTextMessage(entry),
          html: buildHtmlMessage(entry),
        });

        if (error) {
          return {
            status: 'failed',
            provider,
            message: error.message ?? 'Resend did not accept the email.',
          };
        }

        return {
          status: 'sent',
          provider,
          emailId: data?.id ?? null,
        };
      } catch (error) {
        return {
          status: 'failed',
          provider,
          message: error instanceof Error ? error.message : 'Unexpected email delivery failure.',
        };
      }
    },
  };
}
