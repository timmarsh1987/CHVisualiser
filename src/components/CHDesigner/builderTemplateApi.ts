import type { DesignerDocument } from './types';
import { createSeedDocument, parseDesignerDocument } from './document';

export const BUILDER_TEMPLATE_DEFINITION = 'EPAM.BuilderTemplate';
export const DESIGNER_DOCUMENT_PROPERTY = 'designerDocumentJson';

export type ContentHubRawClient = {
  raw?: {
    getAsync?: (url: string) => Promise<{
      isSuccessStatusCode?: boolean;
      statusCode?: number;
      content?: unknown;
    }>;
    putAsync?: (
      url: string,
      body: unknown
    ) => Promise<{
      isSuccessStatusCode?: boolean;
      statusCode?: number;
      content?: unknown;
    }>;
  };
};

type EntityPayload = {
  properties?: Record<string, unknown>;
  entitydefinition?: { href?: string };
  entityDefinition?: { href?: string };
  systemProperties?: { id?: number | string };
};

function coerceId(value: unknown): string | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  if (typeof value === 'string' && value.trim()) return value.trim();
  return undefined;
}

export function resolveBuilderTemplateId(entity?: unknown, options?: unknown): string | undefined {
  const optionRecord =
    options && typeof options === 'object' && !Array.isArray(options)
      ? (options as Record<string, unknown>)
      : {};

  const fromOptions =
    coerceId(optionRecord.templateId) ||
    coerceId(optionRecord.entityId) ||
    coerceId(optionRecord.builderTemplateId);
  if (fromOptions) return fromOptions;

  if (!entity || typeof entity !== 'object') return undefined;
  const record = entity as Record<string, unknown>;
  const system =
    record.systemProperties && typeof record.systemProperties === 'object'
      ? (record.systemProperties as Record<string, unknown>)
      : undefined;

  return coerceId(system?.id) || coerceId(record.id);
}

function unwrapEntity(content: unknown): EntityPayload {
  if (!content || typeof content !== 'object') return {};
  const record = content as Record<string, unknown>;
  if (record.properties && typeof record.properties === 'object') {
    return record as EntityPayload;
  }
  const nested = record.content;
  if (nested && typeof nested === 'object') {
    return nested as EntityPayload;
  }
  return record as EntityPayload;
}

function readStringValue(value: unknown): string | undefined {
  if (typeof value === 'string' && value.trim()) return value;
  if (!value || typeof value !== 'object') return undefined;
  const record = value as Record<string, unknown>;
  for (const key of ['Invariant', 'invariant', 'value', 'Value', 'en-US', 'en-us']) {
    const nested = record[key];
    if (typeof nested === 'string' && nested.trim()) return nested;
  }
  return undefined;
}

function readDesignerDocumentJson(properties: Record<string, unknown> | undefined): string | undefined {
  if (!properties) return undefined;
  for (const key of [DESIGNER_DOCUMENT_PROPERTY, `EPAM.${DESIGNER_DOCUMENT_PROPERTY}`]) {
    const text = readStringValue(properties[key]);
    if (text) return text;
  }
  return undefined;
}

function parseLoadedDocument(raw: string | undefined): DesignerDocument | null {
  if (!raw?.trim()) return null;
  try {
    const parsed = parseDesignerDocument(JSON.parse(raw));
    return parsed;
  } catch {
    return null;
  }
}

function definitionHref(payload: EntityPayload): string {
  const href = payload.entitydefinition?.href || payload.entityDefinition?.href;
  if (typeof href === 'string' && href.trim()) return href.trim();
  return `/api/entitydefinitions/${BUILDER_TEMPLATE_DEFINITION}`;
}

function errorDetail(content: unknown): string {
  if (!content || typeof content !== 'object') return '';
  const record = content as Record<string, unknown>;
  const message = record.Message ?? record.message ?? record.title;
  return typeof message === 'string' && message.trim() ? `: ${message}` : '';
}

async function getEntityPayload(client: ContentHubRawClient, entityId: string): Promise<EntityPayload> {
  if (!client.raw?.getAsync) {
    throw new Error('Content Hub client is not available. Open this designer on an EPAM.BuilderTemplate page.');
  }
  const response = await client.raw.getAsync(`/api/entities/${entityId}`);
  if (!response.isSuccessStatusCode || response.content == null) {
    throw new Error(
      `Could not load EPAM.BuilderTemplate ${entityId} (${response.statusCode ?? 'unknown'}).`
    );
  }
  return unwrapEntity(response.content);
}

export async function loadBuilderTemplateDocument(
  client: ContentHubRawClient,
  entityId: string
): Promise<{ document: DesignerDocument; createdDefault: boolean }> {
  const payload = await getEntityPayload(client, entityId);
  const parsed = parseLoadedDocument(readDesignerDocumentJson(payload.properties));
  if (parsed) {
    return { document: parsed, createdDefault: false };
  }
  return { document: createSeedDocument(), createdDefault: true };
}

export async function saveBuilderTemplateDocument(
  client: ContentHubRawClient,
  entityId: string,
  document: DesignerDocument
): Promise<void> {
  if (!client.raw?.putAsync) {
    throw new Error('Content Hub client is not available for saving EPAM.BuilderTemplate.');
  }

  const payload = await getEntityPayload(client, entityId);
  const json = JSON.stringify(document);
  const href = definitionHref(payload);
  const attempts: Array<{ label: string; properties: Record<string, unknown> }> = [
    { label: 'invariant', properties: { [DESIGNER_DOCUMENT_PROPERTY]: { Invariant: json } } },
    { label: 'plain', properties: { [DESIGNER_DOCUMENT_PROPERTY]: json } },
    {
      label: 'epam-invariant',
      properties: { [`EPAM.${DESIGNER_DOCUMENT_PROPERTY}`]: { Invariant: json } },
    },
  ];

  const errors: string[] = [];
  for (const attempt of attempts) {
    const response = await client.raw.putAsync(`/api/entities/${entityId}`, {
      entitydefinition: { href },
      properties: attempt.properties,
    });
    if (response.isSuccessStatusCode) return;
    errors.push(`${attempt.label} → HTTP ${response.statusCode ?? 'unknown'}${errorDetail(response.content)}`);
  }

  throw new Error(
    `Could not save designerDocumentJson on EPAM.BuilderTemplate ${entityId}. ${errors.join('; ')}`
  );
}
