/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  DetectionCheckId,
  DetectionFinding,
  DetectionRegion,
  DetectionStatus,
  ImageDetectionReport,
} from './types';
import { DETECTION_CHECKS } from './types';

type RawResponse<T> = {
  isSuccessStatusCode?: boolean;
  statusCode?: number;
  content?: T;
};

type EntityPayload = {
  properties?: Record<string, unknown>;
  entitydefinition?: { href?: string };
  entityDefinition?: { href?: string };
  definition?: { href?: string };
};

const CHECK_IDS = new Set<DetectionCheckId>(DETECTION_CHECKS.map((check) => check.id));

function isDetectionStatus(value: unknown): value is DetectionStatus {
  return value === 'clear' || value === 'flagged';
}

function isCheckId(value: unknown): value is DetectionCheckId {
  return typeof value === 'string' && CHECK_IDS.has(value as DetectionCheckId);
}

function resolveDefinitionHref(payload: EntityPayload, fallbackDefinitionName?: string): string {
  const candidates = [payload.entitydefinition, payload.entityDefinition, payload.definition];

  for (const candidate of candidates) {
    if (candidate == null || typeof candidate !== 'object') {
      continue;
    }

    const href = candidate.href;
    if (typeof href === 'string' && href.trim()) {
      return normalizeDefinitionHref(href.trim());
    }
  }

  if (fallbackDefinitionName?.trim()) {
    return `/api/entitydefinitions/${fallbackDefinitionName.trim()}`;
  }

  throw new Error('Could not resolve entity definition for Content Hub update.');
}

function normalizeDefinitionHref(href: string): string {
  try {
    if (href.startsWith('/')) {
      return href;
    }
    const url = new URL(href);
    return `${url.pathname}${url.search}`;
  } catch {
    return href;
  }
}

function parseRegion(value: unknown): DetectionRegion | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return null;
  }

  const record = value as Record<string, unknown>;
  const asPercent = (entry: unknown) => {
    const number = Number(entry);
    if (!Number.isFinite(number)) {
      return null;
    }
    const scaled = number >= 0 && number <= 1 ? number * 100 : number;
    if (scaled < 0 || scaled > 100) {
      return null;
    }
    return scaled;
  };

  const x = asPercent(record.x);
  const y = asPercent(record.y);
  const width = asPercent(record.width);
  const height = asPercent(record.height);
  if (x == null || y == null || width == null || height == null || width < 2 || height < 2) {
    return null;
  }

  return {
    x,
    y,
    width: Math.min(width, 100 - x),
    height: Math.min(height, 100 - y),
  };
}

function parseFinding(value: unknown): DetectionFinding | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return null;
  }

  const record = value as Record<string, unknown>;
  if (!isCheckId(record.id)) {
    return null;
  }

  const definition = DETECTION_CHECKS.find((check) => check.id === record.id);
  const confidenceRaw = Number(record.confidence);
  const confidence = Number.isFinite(confidenceRaw)
    ? Math.max(0, Math.min(100, confidenceRaw))
    : 0;

  return {
    id: record.id,
    label:
      typeof record.label === 'string' && record.label.trim()
        ? record.label
        : definition?.label ?? record.id,
    detected: record.detected === true,
    confidence,
    summary: typeof record.summary === 'string' ? record.summary : '',
    regions: Array.isArray(record.regions)
      ? record.regions
          .map((entry) => parseRegion(entry))
          .filter((entry): entry is DetectionRegion => entry != null)
          .slice(0, 6)
      : [],
  };
}

export function parseDetectionReport(raw: unknown): ImageDetectionReport | null {
  let value = unwrapPropertyValue(raw);

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) {
      return null;
    }

    try {
      value = JSON.parse(trimmed);
    } catch {
      return null;
    }
  }

  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return null;
  }

  const record = value as Record<string, unknown>;
  if (!isDetectionStatus(record.status)) {
    const nested = unwrapPropertyValue(record);
    if (nested && nested !== value && typeof nested === 'object' && !Array.isArray(nested)) {
      return parseDetectionReport(nested);
    }
    return null;
  }

  const findings = Array.isArray(record.findings)
    ? record.findings
        .map((entry) => parseFinding(entry))
        .filter((entry): entry is DetectionFinding => entry != null)
    : [];

  const checksRun = Array.isArray(record.checksRun)
    ? record.checksRun.filter(isCheckId)
    : findings.map((finding) => finding.id);

  return {
    status: record.status,
    summary: typeof record.summary === 'string' ? record.summary : '',
    findings,
    checksRun,
    analyzedAt:
      typeof record.analyzedAt === 'string' && record.analyzedAt.trim()
        ? record.analyzedAt
        : new Date().toISOString(),
    imageAttached: typeof record.imageAttached === 'boolean' ? record.imageAttached : undefined,
    imageUploadError:
      typeof record.imageUploadError === 'string' ? record.imageUploadError : undefined,
  };
}

function unwrapPropertyValue(value: unknown): unknown {
  if (value == null) {
    return undefined;
  }

  if (typeof value !== 'object' || Array.isArray(value)) {
    return value;
  }

  const record = value as Record<string, unknown>;

  if (isDetectionStatus(record.status)) {
    return value;
  }

  const preferredKeys = ['Invariant', 'invariant', '_value', 'value', 'en-US', 'en-us', 'en'];
  for (const key of preferredKeys) {
    if (key in record) {
      return unwrapPropertyValue(record[key]);
    }
  }

  return value;
}

function readPropertyFromEntity(entity: any, propertyName: string): unknown {
  if (!propertyName.trim()) {
    return undefined;
  }

  try {
    if (typeof entity?.getPropertyValue === 'function') {
      const fromSdk = entity.getPropertyValue(propertyName);
      if (fromSdk != null) {
        return fromSdk;
      }
    }
  } catch {
    // property may not exist on this definition
  }

  const properties = (entity?.properties ?? {}) as Record<string, unknown>;
  for (const [key, value] of Object.entries(properties)) {
    if (key.toLowerCase() === propertyName.toLowerCase()) {
      return value;
    }
  }

  return undefined;
}

export function readSavedDetectionReport(
  entity: any,
  propertyName: string
): ImageDetectionReport | null {
  return parseDetectionReport(readPropertyFromEntity(entity, propertyName));
}

function readPropertyFromRecord(
  properties: Record<string, unknown> | undefined,
  propertyName: string
): unknown {
  if (!properties || !propertyName.trim()) {
    return undefined;
  }

  for (const [key, value] of Object.entries(properties)) {
    if (key.toLowerCase() === propertyName.toLowerCase()) {
      return value;
    }
  }

  return undefined;
}

/**
 * Reads a saved report from the page entity, then from a full entity GET.
 * Content Hub page context often omits custom JSON members until they are loaded.
 */
export async function loadSavedDetectionReport(
  client: any,
  entity: any,
  propertyName: string
): Promise<ImageDetectionReport | null> {
  const fromPage = readSavedDetectionReport(entity, propertyName);
  if (fromPage) {
    return fromPage;
  }

  const entityId = String(entity?.systemProperties?.id ?? entity?.id ?? '').trim();
  if (!entityId || !client?.raw?.getAsync) {
    return null;
  }

  try {
    const response = (await client.raw.getAsync(
      `/api/entities/${entityId}`
    )) as RawResponse<EntityPayload>;

    if (!response.isSuccessStatusCode || !response.content) {
      return null;
    }

    return parseDetectionReport(
      readPropertyFromRecord(response.content.properties, propertyName)
    );
  } catch {
    return null;
  }
}

async function getEntityPayload(client: any, entityId: string): Promise<EntityPayload> {
  if (!client?.raw?.getAsync) {
    throw new Error('Content Hub client is not available.');
  }

  const response = (await client.raw.getAsync(
    `/api/entities/${entityId}`
  )) as RawResponse<EntityPayload>;

  if (!response.isSuccessStatusCode || !response.content) {
    throw new Error(
      `Could not load asset entity ${entityId} for saving (HTTP ${response.statusCode ?? 'unknown'}).`
    );
  }

  return response.content;
}

function looksMultilingual(value: unknown): boolean {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }

  const record = value as Record<string, unknown>;
  return (
    'Invariant' in record ||
    'invariant' in record ||
    'en-US' in record ||
    'en-us' in record
  );
}

function findExistingProperty(
  properties: Record<string, unknown> | undefined,
  propertyName: string
): unknown {
  if (!properties) {
    return undefined;
  }

  for (const [key, value] of Object.entries(properties)) {
    if (key.toLowerCase() === propertyName.toLowerCase()) {
      return value;
    }
  }

  return undefined;
}

function formatStringProperty(value: string, existing: unknown): unknown {
  if (looksMultilingual(existing)) {
    return { Invariant: value };
  }
  return value;
}

function extractErrorDetail(content: unknown): string {
  if (content == null) {
    return '';
  }

  if (typeof content === 'string') {
    const trimmed = content.trim();
    if (!trimmed) {
      return '';
    }
    if (trimmed.startsWith('<')) {
      return 'HTML error page from Content Hub';
    }
    return trimmed.slice(0, 300);
  }

  if (typeof content === 'object') {
    const record = content as Record<string, unknown>;
    const candidates = [record.Message, record.message, record.title, record.detail, record.error];
    for (const candidate of candidates) {
      if (typeof candidate === 'string' && candidate.trim()) {
        return candidate.trim();
      }
    }
    try {
      return JSON.stringify(content).slice(0, 300);
    } catch {
      return '';
    }
  }

  return '';
}

type SaveOptions = {
  reportProperty: string;
  reportStorage?: 'json' | 'string';
  statusProperty?: string;
  analyzedAtProperty?: string;
  definitionName?: string;
};

function buildPropertyAttempts(
  report: ImageDetectionReport,
  options: SaveOptions,
  existingProperties: Record<string, unknown> | undefined
): Array<{ label: string; properties: Record<string, unknown> }> {
  const reportProperty = options.reportProperty.trim();
  const statusProperty = options.statusProperty?.trim();
  const analyzedAtProperty = options.analyzedAtProperty?.trim();
  const preferString = options.reportStorage === 'string';

  const existingReport = findExistingProperty(existingProperties, reportProperty);
  const existingStatus = statusProperty
    ? findExistingProperty(existingProperties, statusProperty)
    : undefined;
  const existingAnalyzedAt = analyzedAtProperty
    ? findExistingProperty(existingProperties, analyzedAtProperty)
    : undefined;

  const withCompanions = (
    reportValue: unknown,
    stringMode: 'plain' | 'invariant'
  ): Record<string, unknown> => {
    const properties: Record<string, unknown> = {
      [reportProperty]: reportValue,
    };

    if (statusProperty) {
      properties[statusProperty] =
        stringMode === 'invariant'
          ? { Invariant: report.status }
          : formatStringProperty(report.status, existingStatus);
    }

    if (analyzedAtProperty) {
      properties[analyzedAtProperty] =
        stringMode === 'invariant'
          ? { Invariant: report.analyzedAt }
          : formatStringProperty(report.analyzedAt, existingAnalyzedAt);
    }

    return properties;
  };

  const attempts: Array<{ label: string; properties: Record<string, unknown> }> = [];

  if (preferString) {
    attempts.push({
      label: 'report-string-plain',
      properties: { [reportProperty]: JSON.stringify(report) },
    });
    attempts.push({
      label: 'report-string-invariant',
      properties: { [reportProperty]: { Invariant: JSON.stringify(report) } },
    });
  } else {
    attempts.push({
      label: 'report-json-only',
      properties: { [reportProperty]: report },
    });
    attempts.push({
      label: 'report-json-with-plain-companions',
      properties: withCompanions(report, 'plain'),
    });
    attempts.push({
      label: 'report-json-invariant-object',
      properties: { [reportProperty]: { Invariant: report } },
    });
    attempts.push({
      label: 'report-json-stringified',
      properties: { [reportProperty]: JSON.stringify(report) },
    });
  }

  attempts.push({
    label: 'report-with-invariant-companions',
    properties: withCompanions(
      preferString ? { Invariant: JSON.stringify(report) } : report,
      'invariant'
    ),
  });

  if (!preferString && typeof existingReport === 'string') {
    attempts.unshift({
      label: 'report-match-existing-string',
      properties: { [reportProperty]: JSON.stringify(report) },
    });
  }

  return attempts;
}

export async function saveDetectionReportToEntity(
  client: any,
  entityId: string,
  report: ImageDetectionReport,
  options: SaveOptions
): Promise<void> {
  if (!client?.raw?.putAsync) {
    throw new Error('Content Hub client is not available for saving detection results.');
  }

  const reportProperty = options.reportProperty.trim();
  if (!reportProperty) {
    throw new Error('detectionReportProperty is not configured.');
  }

  const payload = await getEntityPayload(client, entityId);
  const definitionHref = resolveDefinitionHref(payload, options.definitionName);
  const attempts = buildPropertyAttempts(report, options, payload.properties);

  const errors: string[] = [];

  for (const attempt of attempts) {
    const body = {
      entitydefinition: {
        href: definitionHref,
      },
      properties: attempt.properties,
    };

    const response = (await client.raw.putAsync(
      `/api/entities/${entityId}`,
      body
    )) as RawResponse<unknown>;

    if (response.isSuccessStatusCode) {
      return;
    }

    const statusCode = response.statusCode ?? 'unknown';
    const detail = extractErrorDetail(response.content);
    errors.push(`${attempt.label} → HTTP ${statusCode}${detail ? ` (${detail})` : ''}`);
  }

  throw new Error(
    `Failed to save image detection report to Content Hub after ${attempts.length} attempts: ${errors.join('; ')}`
  );
}
