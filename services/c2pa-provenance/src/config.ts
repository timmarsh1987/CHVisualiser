export interface AppConfig {
  contentHub: {
    baseUrl: string;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    scope?: string;
    audience?: string;
    originalRenditionNames: string[];
    updateMethod: 'PATCH' | 'PUT';
  };
  maxFileBytes: number;
  fileFetchAttempts: number;
  fileFetchBaseDelayMs: number;
  dedupWindowSeconds: number;
  summaryHistoryLimit: number;
}

function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function positiveInteger(name: string, fallback: number): number {
  const raw = process.env[name]?.trim();
  if (!raw) return fallback;
  const value = Number(raw);
  if (!Number.isSafeInteger(value) || value <= 0) {
    throw new Error(`${name} must be a positive integer.`);
  }
  return value;
}

export function getConfig(): AppConfig {
  const scope = process.env.CH_OAUTH_SCOPE?.trim();
  const audience = process.env.CH_OAUTH_AUDIENCE?.trim();
  const updateMethod = (process.env.CH_ENTITY_UPDATE_METHOD ?? 'PUT').toUpperCase();
  if (updateMethod !== 'PATCH' && updateMethod !== 'PUT') {
    throw new Error('CH_ENTITY_UPDATE_METHOD must be PATCH or PUT.');
  }

  return {
    contentHub: {
      baseUrl: required('CH_BASE_URL').replace(/\/+$/, ''),
      tokenUrl: required('CH_TOKEN_URL'),
      clientId: required('CH_CLIENT_ID'),
      clientSecret: required('CH_CLIENT_SECRET'),
      scope: scope || undefined,
      audience: audience || undefined,
      originalRenditionNames: (process.env.CH_ORIGINAL_RENDITIONS ?? 'downloadOriginal,original,download')
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean),
      updateMethod,
    },
    maxFileBytes: positiveInteger('MAX_FILE_BYTES', 50 * 1024 * 1024),
    fileFetchAttempts: positiveInteger('FILE_FETCH_ATTEMPTS', 5),
    fileFetchBaseDelayMs: positiveInteger('FILE_FETCH_BASE_DELAY_MS', 500),
    dedupWindowSeconds: positiveInteger('WEBHOOK_DEDUP_WINDOW_SECONDS', 60),
    summaryHistoryLimit: positiveInteger('SUMMARY_HISTORY_LIMIT', 50),
  };
}
