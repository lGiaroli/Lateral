import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const defaultDataPath = path.resolve(process.cwd(), 'server', 'data', 'demo-requests.json');

async function ensureDataFile(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });

  try {
    await readFile(filePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(filePath, '[]\n', 'utf8');
      return;
    }

    throw error;
  }
}

async function readEntries(filePath) {
  await ensureDataFile(filePath);
  const rawContent = await readFile(filePath, 'utf8');
  return JSON.parse(rawContent);
}

export function createDemoRequestStore(filePath = defaultDataPath) {
  let writeQueue = Promise.resolve();

  async function upsert(entry) {
    writeQueue = writeQueue.then(async () => {
      const currentEntries = await readEntries(filePath);
      const existingIndex = currentEntries.findIndex((currentEntry) => currentEntry.id === entry.id);

      if (existingIndex >= 0) {
        currentEntries[existingIndex] = entry;
      } else {
        currentEntries.unshift(entry);
      }

      await writeFile(filePath, `${JSON.stringify(currentEntries, null, 2)}\n`, 'utf8');
    });

    return writeQueue;
  }

  async function list({ limit } = {}) {
    await writeQueue;

    const currentEntries = await readEntries(filePath);
    return typeof limit === 'number' ? currentEntries.slice(0, limit) : currentEntries;
  }

  return {
    list,
    upsert,
    filePath,
  };
}
