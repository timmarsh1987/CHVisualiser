/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ConciseVisualAnalysis,
  FineArtTaggingReport,
  MediumFormatCues,
  StyleMovementHypothesis,
  TagGroup,
  TagPack,
} from './types';

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

function asString(value: unknown): string {
  if (value == null) {
    return '';
  }
  if (typeof value === 'string') {
    return value.trim();
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  return '';
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.map((entry) => asString(entry)).filter(Boolean);
}

function looksLikeTaggingReport(record: Record<string, unknown>): boolean {
  return (
    (record.tag_pack != null && typeof record.tag_pack === 'object') ||
    (record.suggested_tags_grouped != null && typeof record.suggested_tags_grouped === 'object') ||
    (record.concise_visual_analysis != null && typeof record.concise_visual_analysis === 'object')
  );
}

function normalizeVisualAnalysis(raw: unknown): ConciseVisualAnalysis {
  const record =
    raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {};

  return {
    subject_matter: asString(record.subject_matter),
    setting: asString(record.setting),
    dominant_colors: asStringArray(record.dominant_colors),
    lighting: asString(record.lighting),
    texture_mark_making: asString(record.texture_mark_making),
    line_quality: asString(record.line_quality),
    perspective_space: asString(record.perspective_space),
    composition: asString(record.composition),
  };
}

function normalizeMediumCues(raw: unknown): MediumFormatCues {
  const record =
    raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {};

  return {
    likely_medium: asString(record.likely_medium),
    evidence: asString(record.evidence),
  };
}

function normalizeHypotheses(raw: unknown): StyleMovementHypothesis[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .filter((entry) => entry && typeof entry === 'object')
    .map((entry) => {
      const item = entry as Record<string, unknown>;
      const confidenceRaw = Number(item.confidence);
      return {
        label: asString(item.label),
        confidence: Number.isFinite(confidenceRaw)
          ? Math.max(0, Math.min(1, confidenceRaw))
          : 0,
        evidence: asString(item.evidence),
      };
    })
    .filter((entry) => entry.label);
}

function normalizeTagGroup(raw: unknown): TagGroup {
  const record =
    raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {};

  return {
    tags: asStringArray(record.tags),
    rationale: asString(record.rationale),
  };
}

function normalizeGroupedTags(raw: unknown): Record<string, TagGroup> {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return {};
  }

  const result: Record<string, TagGroup> = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    const group = normalizeTagGroup(value);
    if (group.tags.length > 0 || group.rationale) {
      result[key] = group;
    }
  }
  return result;
}

function normalizeTagPack(raw: unknown): TagPack {
  const record =
    raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {};

  return {
    must_have: asStringArray(record.must_have),
    nice_to_have: asStringArray(record.nice_to_have),
  };
}

export function parseFineArtTaggingReport(raw: unknown): FineArtTaggingReport | null {
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

  // CodeMie may return { artworks: [...] } — unwrap first matching entry
  if (Array.isArray(record.artworks) && record.artworks.length > 0) {
    const first = record.artworks.find(
      (entry) => entry && typeof entry === 'object'
    );
    if (first) {
      return parseFineArtTaggingReport(first);
    }
  }

  if (!looksLikeTaggingReport(record)) {
    const nested = unwrapPropertyValue(record);
    if (nested && nested !== value && typeof nested === 'object' && !Array.isArray(nested)) {
      return parseFineArtTaggingReport(nested);
    }
    return null;
  }

  return {
    file_name: asString(record.file_name) || undefined,
    concise_visual_analysis: normalizeVisualAnalysis(record.concise_visual_analysis),
    medium_format_cues: normalizeMediumCues(record.medium_format_cues),
    style_movement_hypotheses: normalizeHypotheses(record.style_movement_hypotheses),
    suggested_tags_grouped: normalizeGroupedTags(record.suggested_tags_grouped),
    tag_pack: normalizeTagPack(record.tag_pack),
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

  if (looksLikeTaggingReport(record) || Array.isArray(record.artworks)) {
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

export function readSavedFineArtTaggingReport(
  entity: any,
  propertyName: string
): FineArtTaggingReport | null {
  return parseFineArtTaggingReport(readPropertyFromEntity(entity, propertyName));
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
 * Saves the full fine-art tagging report onto the asset entity.
 * Default storage is a Content Hub **JSON** member (object).
 * Set reportStorage to "string" if the member is a long-text String type instead.
 */
export async function saveFineArtTaggingReportToEntity(
  client: any,
  entityId: string,
  report: FineArtTaggingReport,
  options: {
    reportProperty: string;
    reportStorage?: 'json' | 'string';
    mustHaveTagsProperty?: string;
    niceToHaveTagsProperty?: string;
    analyzedAtProperty?: string;
    definitionName?: string;
  }
): Promise<void> {
  if (!client?.raw?.putAsync) {
    throw new Error('Content Hub client is not available for saving tagging results.');
  }

  const reportProperty = options.reportProperty.trim();
  if (!reportProperty) {
    throw new Error('taggingReportProperty is not configured.');
  }

  const payload = await getEntityPayload(client, entityId);
  const storage = options.reportStorage === 'string' ? 'string' : 'json';

  const properties: Record<string, unknown> = {
    [reportProperty]:
      storage === 'string' ? { Invariant: JSON.stringify(report) } : report,
  };

  if (options.mustHaveTagsProperty?.trim()) {
    properties[options.mustHaveTagsProperty.trim()] = {
      Invariant: report.tag_pack.must_have.join(', '),
    };
  }

  if (options.niceToHaveTagsProperty?.trim()) {
    properties[options.niceToHaveTagsProperty.trim()] = {
      Invariant: report.tag_pack.nice_to_have.join(', '),
    };
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
    `Failed to save fine-art tagging report to Content Hub (HTTP ${statusCode})${
      detail ? `: ${detail}` : ''
    }`
  );
}
