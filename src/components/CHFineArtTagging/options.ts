import type { FineArtTaggingOptions } from './types';

const STRING_OPTION_KEYS = [
  'apiBaseUrl',
  'apiToken',
  'displayName',
  'nameProperty',
  'fileNameProperty',
  'descriptionProperty',
  'taggingReportProperty',
  'taggingReportStorage',
  'mustHaveTagsProperty',
  'niceToHaveTagsProperty',
  'taggingAnalyzedAtProperty',
] as const;

const NESTED_JSON_KEYS = ['config', 'settings', 'json', 'componentOptions'];

const PLACEHOLDER_PATTERNS = [
  /^optional-/i,
  /^your[-_]/i,
  /^https?:\/\/your/i,
  /^same-as-/i,
];

function isPlaceholderValue(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return true;
  }

  return PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(trimmed));
}

function isContentHubRuntimeOptions(value: unknown) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }

  const record = value as Record<string, unknown>;
  return (
    typeof record.setEntityId === 'function' ||
    typeof record.setCulture === 'function' ||
    ('entityId' in record && 'culture' in record && 'editingMode' in record)
  );
}

function coerceStringValue(value: unknown): string | undefined {
  if (value == null) {
    return undefined;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed || undefined;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const coerced = coerceStringValue(item);
      if (coerced) {
        return coerced;
      }
    }
    return undefined;
  }

  if (typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const preferredKeys = ['Invariant', 'invariant', '_value', 'value', 'en-US', 'en-us'];

    for (const key of preferredKeys) {
      if (key in record) {
        const coerced = coerceStringValue(record[key]);
        if (coerced) {
          return coerced;
        }
      }
    }
  }

  return undefined;
}

function pickOption(
  record: Record<string, unknown>,
  ...keys: string[]
): string | undefined {
  for (const key of keys) {
    for (const [entryKey, entryValue] of Object.entries(record)) {
      if (entryKey.toLowerCase() === key.toLowerCase()) {
        const coerced = coerceStringValue(entryValue);
        if (coerced && !isPlaceholderValue(coerced)) {
          return coerced;
        }
      }
    }
  }

  return undefined;
}

function pickMetadataProperties(record: Record<string, unknown>): string | undefined {
  for (const [entryKey, entryValue] of Object.entries(record)) {
    if (entryKey.toLowerCase() !== 'metadataproperties') {
      continue;
    }

    if (Array.isArray(entryValue)) {
      const values = entryValue
        .map((item) => coerceStringValue(item))
        .filter((item): item is string => Boolean(item));
      if (values.length > 0) {
        return values.join(', ');
      }
    }

    const coerced = coerceStringValue(entryValue);
    if (coerced && !isPlaceholderValue(coerced)) {
      return coerced;
    }
  }

  return undefined;
}

function normalizeOptionsRecord(
  record: Record<string, unknown>
): Partial<FineArtTaggingOptions> {
  const normalized: Partial<FineArtTaggingOptions> = {};

  for (const key of STRING_OPTION_KEYS) {
    const value = pickOption(record, key);
    if (!value) {
      continue;
    }

    if (key === 'taggingReportStorage') {
      normalized.taggingReportStorage = value === 'string' ? 'string' : 'json';
      continue;
    }

    normalized[key] = value;
  }

  const metadataProperties = pickMetadataProperties(record);
  if (metadataProperties) {
    normalized.metadataProperties = metadataProperties;
  }

  return normalized;
}

function mergeOptions(
  ...partials: Array<Partial<FineArtTaggingOptions> | undefined>
): Partial<FineArtTaggingOptions> {
  return partials.reduce<Partial<FineArtTaggingOptions>>((merged, partial) => {
    if (!partial) {
      return merged;
    }

    return {
      ...merged,
      ...Object.fromEntries(
        Object.entries(partial).filter(([, value]) => value != null && value !== '')
      ),
    };
  }, {});
}

function parseOptionsInput(input: unknown): Partial<FineArtTaggingOptions> | undefined {
  if (!input) {
    return undefined;
  }

  if (isContentHubRuntimeOptions(input)) {
    return undefined;
  }

  if (typeof input === 'string') {
    const trimmed = input.trim();
    if (!trimmed) {
      return undefined;
    }

    try {
      return parseOptionsInput(JSON.parse(trimmed));
    } catch {
      console.error(
        '[CHFineArtTagging] Options must be valid JSON when provided as a string.'
      );
      return undefined;
    }
  }

  if (typeof input !== 'object' || Array.isArray(input)) {
    return undefined;
  }

  const record = input as Record<string, unknown>;
  let normalized = normalizeOptionsRecord(record);

  for (const key of NESTED_JSON_KEYS) {
    const nested = record[key];
    if (typeof nested === 'string' && nested.trim()) {
      try {
        const parsed = parseOptionsInput(JSON.parse(nested));
        normalized = mergeOptions(normalized, parsed);
      } catch {
        // Ignore invalid nested JSON and keep flat options.
      }
    } else if (nested && typeof nested === 'object') {
      normalized = mergeOptions(normalized, parseOptionsInput(nested));
    }
  }

  return normalized;
}

export function parseComponentOptions(
  options: unknown,
  context?: Record<string, unknown>
): Partial<FineArtTaggingOptions> | undefined {
  const sources: unknown[] = [];

  if (context?.config != null) {
    sources.push(context.config);
  }

  if (options != null && !isContentHubRuntimeOptions(options)) {
    sources.push(options);
  }

  if (context) {
    sources.push(context);
  }

  const merged = mergeOptions(...sources.map((source) => parseOptionsInput(source)));

  return Object.keys(merged).length > 0 ? merged : undefined;
}

export function getOptionsDiagnostics(
  options: Partial<FineArtTaggingOptions> | undefined
) {
  const missing: string[] = [];

  if (!options?.apiBaseUrl?.trim()) {
    missing.push('apiBaseUrl');
  }

  if (!options?.apiToken?.trim()) {
    missing.push('apiToken');
  }

  return missing;
}

export function maskOptionsForLog(
  options: Partial<FineArtTaggingOptions> | undefined
) {
  if (!options) {
    return options;
  }

  return {
    ...options,
    apiToken: options.apiToken ? '[set]' : undefined,
  };
}

export function parseMetadataPropertyList(value: string | undefined): string[] {
  if (!value?.trim()) {
    return [];
  }

  return value
    .split(/[,;\n]/)
    .map((entry) => entry.trim())
    .filter(Boolean);
}
