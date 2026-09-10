import type { ImageTransformOptions } from './types';

const NESTED_KEYS = ['config', 'settings', 'json', 'componentOptions'];

function toRecord(value: unknown): Record<string, unknown> | undefined {
  if (!value) return undefined;
  if (typeof value === 'string') {
    try {
      return toRecord(JSON.parse(value));
    } catch {
      return undefined;
    }
  }
  return typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

function pick(record: Record<string, unknown>, key: string): unknown {
  const entry = Object.entries(record).find(([name]) => name.toLowerCase() === key.toLowerCase());
  return entry?.[1];
}

function asString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed && !/^https?:\/\/your|^your[-_]|^optional-/i.test(trimmed)
    ? trimmed
    : undefined;
}

function asNumber(value: unknown): number | undefined {
  const number = Number(value);
  return Number.isFinite(number) ? number : undefined;
}

function parseSource(value: unknown): Partial<ImageTransformOptions> {
  const record = toRecord(value);
  if (!record) return {};

  let parsed: Partial<ImageTransformOptions> = {
    apiBaseUrl: asString(pick(record, 'apiBaseUrl')),
    apiToken: asString(pick(record, 'apiToken')),
    uploadConfiguration: asString(pick(record, 'uploadConfiguration')),
    createUploadUrl: asString(pick(record, 'createUploadUrl')),
    createUploadComponentId: asNumber(pick(record, 'createUploadComponentId')),
    requestTimeoutMs: asNumber(pick(record, 'requestTimeoutMs')),
  };

  for (const key of NESTED_KEYS) {
    if (record[key] != null) parsed = { ...parsed, ...parseSource(record[key]) };
  }
  return parsed;
}

export function parseImageTransformOptions(
  options: unknown,
  context?: Record<string, unknown>
): Partial<ImageTransformOptions> {
  return {
    ...parseSource(context?.config),
    ...parseSource(options),
    ...parseSource(context),
  };
}
