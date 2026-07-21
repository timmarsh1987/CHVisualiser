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
      return href.trim();
    }
  }

  if (fallbackDefinitionName?.trim()) {
    return `/api/entitydefinitions/${fallbackDefinitionName.trim()}`;
  }

  throw new Error('Could not resolve entity definition for Content Hub update.');
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

/**
 * Saves the full compliance report onto the asset entity.
 * Default storage is a Content Hub **JSON** member (object).
 * Set reportStorage to "string" if the member is a long-text String type instead.
 */
export async function saveComplianceReportToEntity(
  client: any,
  entityId: string,
  report: ComplianceReport,
  options: {
    reportProperty: string;
    reportStorage?: 'json' | 'string';
    statusProperty?: string;
    scoreProperty?: string;
    analyzedAtProperty?: string;
    definitionName?: string;
  }
): Promise<void> {
  if (!client?.raw?.putAsync) {
    throw new Error('Content Hub client is not available for saving compliance results.');
  }

  const reportProperty = options.reportProperty.trim();
  if (!reportProperty) {
    throw new Error('complianceReportProperty is not configured.');
  }

  const payload = await getEntityPayload(client, entityId);
  const storage = options.reportStorage === 'string' ? 'string' : 'json';

  const properties: Record<string, unknown> = {
    [reportProperty]:
      storage === 'string' ? { Invariant: JSON.stringify(report) } : report,
  };

  if (options.statusProperty?.trim()) {
    properties[options.statusProperty.trim()] = { Invariant: report.status };
  }

  if (options.scoreProperty?.trim()) {
    properties[options.scoreProperty.trim()] = report.score;
  }

  if (options.analyzedAtProperty?.trim()) {
    properties[options.analyzedAtProperty.trim()] = { Invariant: report.analyzedAt };
  }

  const body = {
    entitydefinition: {
      href: resolveDefinitionHref(payload, options.definitionName),
    },
    properties,
  };

  const response = (await client.raw.putAsync(
    `/api/entities/${entityId}`,
    body
  )) as RawResponse<unknown>;

  if (response.isSuccessStatusCode) {
    return;
  }

  const statusCode = response.statusCode ?? 'unknown';
  const detail =
    response.content != null && typeof response.content === 'object'
      ? String((response.content as Record<string, unknown>).Message ?? '')
      : '';

  throw new Error(
    `Failed to save compliance report to Content Hub (HTTP ${statusCode})${
      detail ? `: ${detail}` : ''
    }`
  );
}
