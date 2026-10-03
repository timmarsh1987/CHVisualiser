import type { DetectionCheckId, DetectionSelection, ImageDetectionOptions } from './types';
import { DETECTION_CHECKS } from './types';

const STRING_OPTION_KEYS = [
  'apiBaseUrl',
  'apiToken',
  'nameProperty',
  'fileNameProperty',
  'descriptionProperty',
  'detectionReportProperty',
  'detectionStatusProperty',
  'detectionAnalyzedAtProperty',
] as const;

const BOOLEAN_OPTION_KEYS = [
  'detectMinors',
  'detectAnimals',
  'detectCulturalSensitive',
  'detectFirearmsOffensive',
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

function coerceBooleanValue(value: unknown): boolean | undefined {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'number') {
    if (value === 1) return true;
    if (value === 0) return false;
    return undefined;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim().toLowerCase();
    if (trimmed === 'true' || trimmed === 'yes' || trimmed === '1') return true;
    if (trimmed === 'false' || trimmed === 'no' || trimmed === '0') return false;
    return undefined;
  }

  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const record = value as Record<string, unknown>;
    const preferredKeys = ['Invariant', 'invariant', '_value', 'value', 'en-US', 'en-us'];
    for (const key of preferredKeys) {
      if (key in record) {
        const coerced = coerceBooleanValue(record[key]);
        if (coerced != null) {
          return coerced;
        }
      }
    }
  }

  return undefined;
}

function pickOption(record: Record<string, unknown>, ...keys: string[]): string | undefined {
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

function pickBoolean(record: Record<string, unknown>, key: string): boolean | undefined {
  for (const [entryKey, entryValue] of Object.entries(record)) {
    if (entryKey.toLowerCase() === key.toLowerCase()) {
      return coerceBooleanValue(entryValue);
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

function normalizeOptionsRecord(record: Record<string, unknown>): Partial<ImageDetectionOptions> {
  const normalized: Partial<ImageDetectionOptions> = {};

  for (const key of STRING_OPTION_KEYS) {
    const value = pickOption(record, key);
    if (value) {
      normalized[key] = value;
    }
  }

  for (const key of BOOLEAN_OPTION_KEYS) {
    const value = pickBoolean(record, key);
    if (value != null) {
      normalized[key] = value;
    }
  }

  const reportStorage = pickOption(record, 'detectionReportStorage');
  if (reportStorage) {
    normalized.detectionReportStorage =
      reportStorage.trim().toLowerCase() === 'string' ? 'string' : 'json';
  }

  const metadataProperties = pickMetadataProperties(record);
  if (metadataProperties) {
    normalized.metadataProperties = metadataProperties;
  }

  return normalized;
}

function mergeOptions(
  ...partials: Array<Partial<ImageDetectionOptions> | undefined>
): Partial<ImageDetectionOptions> {
  return partials.reduce<Partial<ImageDetectionOptions>>((merged, partial) => {
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

function parseOptionsInput(input: unknown): Partial<ImageDetectionOptions> | undefined {
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
      console.error('[CHImageDetection] Options must be valid JSON when provided as a string.');
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
): Partial<ImageDetectionOptions> | undefined {
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

export function getOptionsDiagnostics(options: Partial<ImageDetectionOptions> | undefined) {
  const missing: string[] = [];

  if (!options?.apiBaseUrl?.trim()) {
    missing.push('apiBaseUrl');
  }

  if (!options?.apiToken?.trim()) {
    missing.push('apiToken');
  }

  return missing;
}

export function maskOptionsForLog(options: Partial<ImageDetectionOptions> | undefined) {
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

export function defaultDetectionSelection(
  options: Partial<ImageDetectionOptions> | null | undefined
): DetectionSelection {
  const selection = {} as DetectionSelection;

  for (const check of DETECTION_CHECKS) {
    selection[check.id] = options?.[check.optionKey] !== false;
  }

  return selection;
}

export function selectedCheckIds(selection: DetectionSelection): DetectionCheckId[] {
  return DETECTION_CHECKS.filter((check) => selection[check.id]).map((check) => check.id);
}

const NON_IMAGE_EXTENSION =
  /\.(pdf|docx?|pptx?|xlsx?|mp4|mov|avi|mkv|webm|mp3|wav|zip|txt|html?)$/i;
const IMAGE_EXTENSION = /\.(jpe?g|png|gif|webp|tiff?|bmp|heic|heif|svg)$/i;

/** True when the asset is clearly not an image. Unknown types are allowed. */
export function isClearlyNonImageAsset(asset: {
  mimeType?: string;
  fileName?: string;
}): boolean {
  const mime = (asset.mimeType || '').toLowerCase();
  const name = (asset.fileName || '').toLowerCase();

  if (mime.startsWith('image/') || IMAGE_EXTENSION.test(name)) {
    return false;
  }

  if (
    mime.startsWith('video/') ||
    mime.startsWith('audio/') ||
    mime.startsWith('application/') ||
    mime.startsWith('text/') ||
    NON_IMAGE_EXTENSION.test(name)
  ) {
    return true;
  }

  return false;
}
