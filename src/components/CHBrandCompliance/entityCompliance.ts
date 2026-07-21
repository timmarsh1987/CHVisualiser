/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComplianceReport, ComplianceStatus } from './types';

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

function isComplianceStatus(value: unknown): value is ComplianceStatus {
  return value === 'pass' || value === 'warning' || value === 'fail';
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

/** Content Hub accepts relative definition hrefs more reliably than absolute URLs. */
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

export function parseComplianceReport(raw: unknown): ComplianceReport | null {
  // JSON member properties are usually the object itself.
  // String members may be culture-wrapped ("Invariant") or a JSON string.
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
  if (!isComplianceStatus(record.status)) {
    // Some tenants wrap JSON in { Invariant: { ...report } }
    const nested = unwrapPropertyValue(record);
    if (nested && nested !== value && typeof nested === 'object' && !Array.isArray(nested)) {
      return parseComplianceReport(nested);
    }
    return null;
  }

  const scoreRaw = Number(record.score);
  const issues = Array.isArray(record.issues)
    ? record.issues.filter((issue) => issue && typeof issue === 'object')
    : [];

  return {
    status: record.status,
    score: Number.isFinite(scoreRaw) ? Math.max(0, Math.min(100, scoreRaw)) : 0,
    summary: typeof record.summary === 'string' ? record.summary : '',
    issues: issues as ComplianceReport['issues'],
    passedChecks: Array.isArray(record.passedChecks)
      ? record.passedChecks.filter((entry): entry is string => typeof entry === 'string')
      : [],
    analyzedAt:
      typeof record.analyzedAt === 'string' && record.analyzedAt.trim()
        ? record.analyzedAt
        : new Date().toISOString(),
    imageAttached: typeof record.imageAttached === 'boolean' ? record.imageAttached : undefined,
    imageUploadError:
      typeof record.imageUploadError === 'string' ? record.imageUploadError : undefined,
  };
}

/**
 * Unwrap culture wrappers without treating a report object as culture data.
 */
function unwrapPropertyValue(value: unknown): unknown {
  if (value == null) {
    return undefined;
  }

  if (typeof value !== 'object' || Array.isArray(value)) {
    return value;
  }

  const record = value as Record<string, unknown>;

  // Already looks like a compliance report — keep as-is
  if (isComplianceStatus(record.status)) {
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

export function readSavedComplianceReport(
  entity: any,
  propertyName: string
): ComplianceReport | null {
  return parseComplianceReport(readPropertyFromEntity(entity, propertyName));
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
  // Non-multilingual String members expect a bare string (Invariant wrappers often 500).
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
  scoreProperty?: string;
  analyzedAtProperty?: string;
  definitionName?: string;
};

function buildPropertyAttempts(
  report: ComplianceReport,
  options: SaveOptions,
  existingProperties: Record<string, unknown> | undefined
): Array<{ label: string; properties: Record<string, unknown> }> {
  const reportProperty = options.reportProperty.trim();
  const statusProperty = options.statusProperty?.trim();
  const scoreProperty = options.scoreProperty?.trim();
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

    if (scoreProperty) {
      properties[scoreProperty] = report.score;
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
    // JSON member: object only first (most common cause of companion-field 500s)
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

  // If an existing value shape is multilingual string JSON, try matching that early.
  if (!preferString && typeof existingReport === 'string') {
    attempts.unshift({
      label: 'report-match-existing-string',
      properties: { [reportProperty]: JSON.stringify(report) },
    });
  }

  return attempts;
}

/**
 * Saves the full compliance report onto the asset entity.
 * Tries several Content Hub property encodings because JSON/String/multilingual
 * members reject mismatched shapes with HTTP 500.
 */
export async function saveComplianceReportToEntity(
  client: any,
  entityId: string,
  report: ComplianceReport,
  options: SaveOptions
): Promise<void> {
  if (!client?.raw?.putAsync) {
    throw new Error('Content Hub client is not available for saving compliance results.');
  }

  const reportProperty = options.reportProperty.trim();
  if (!reportProperty) {
    throw new Error('complianceReportProperty is not configured.');
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
    errors.push(
      `${attempt.label} → HTTP ${statusCode}${detail ? ` (${detail})` : ''}`
    );
  }

  throw new Error(
    `Failed to save compliance report to Content Hub after ${attempts.length} attempts: ${errors.join('; ')}`
  );
}
