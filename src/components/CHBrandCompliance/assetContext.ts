/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AssetMetadataEntry, BrandComplianceAsset, BrandComplianceOptions } from './types';
import { parseMetadataPropertyList } from './options';

const RENDITION_PRIORITY = [
  'preview',
  'thumbnail',
  'bigthumbnail',
  'thumbnail_cropped',
  'downloadPreview',
] as const;

const DEFAULT_NAME_PROPERTIES = ['FileName', 'fileName', 'Title', 'title', 'Name', 'name'];
const DEFAULT_FILE_NAME_PROPERTIES = ['FileName', 'fileName'];
const DEFAULT_DESCRIPTION_PROPERTIES = [
  'Description',
  'description',
  'AssetDescription',
  'Summary',
  'summary',
];

function hrefToString(href: unknown): string | undefined {
  if (typeof href === 'string' && href.trim()) {
    return href.trim();
  }

  if (href != null && typeof href === 'object') {
    const nested = (href as { href?: unknown }).href;
    if (typeof nested === 'string' && nested.trim()) {
      return nested.trim();
    }
  }

  return undefined;
}

function readPropertyValue(value: unknown): unknown {
  if (value == null) {
    return undefined;
  }

  if (typeof value !== 'object' || Array.isArray(value)) {
    return value;
  }

  const record = value as Record<string, unknown>;
  if ('Invariant' in record) {
    return record.Invariant;
  }

  const firstString = Object.values(record).find((entry) => typeof entry === 'string');
  return firstString ?? value;
}

function readStringProperty(
  properties: Record<string, unknown> | undefined,
  keys: string[]
): string {
  if (!properties) {
    return '';
  }

  for (const key of keys) {
    const raw = readPropertyValue(properties[key]);
    if (raw == null) {
      continue;
    }

    const text = String(raw).trim();
    if (text) {
      return text;
    }
  }

  return '';
}

function getPreviewFromRenditions(renditions: unknown): string | undefined {
  if (renditions == null || typeof renditions !== 'object') {
    return undefined;
  }

  const record = renditions as Record<string, unknown>;
  for (const name of RENDITION_PRIORITY) {
    const items = record[name];
    if (!Array.isArray(items) || items.length === 0) {
      continue;
    }

    const url = hrefToString(items[0]?.href ?? items[0]);
    if (url) {
      return url;
    }
  }

  return undefined;
}

function getPreviewFromEntity(entity: any): string | undefined {
  for (const name of RENDITION_PRIORITY) {
    try {
      const rendition = entity?.getRendition?.(name);
      const url = hrefToString(rendition?.items?.[0]?.href);
      if (url) {
        return url;
      }
    } catch {
      // rendition not loaded
    }
  }

  if (Array.isArray(entity?.renditions)) {
    for (const name of RENDITION_PRIORITY) {
      const rendition = entity.renditions.find((entry: any) => entry?.name === name);
      const url = hrefToString(rendition?.items?.[0]?.href);
      if (url) {
        return url;
      }
    }
  }

  const fromRaw = getPreviewFromRenditions(entity?.renditions);
  if (fromRaw) {
    return fromRaw;
  }

  try {
    const link = entity?.getPublicLink?.('preview') ?? entity?.getPublicLink?.('thumbnail');
    return typeof link === 'string' ? link : undefined;
  } catch {
    return undefined;
  }
}

async function resolvePreviewUrl(client: any, entity: any, entityId: string): Promise<string | undefined> {
  const direct = getPreviewFromEntity(entity);
  if (direct) {
    return direct;
  }

  if (!client?.raw?.getAsync) {
    return undefined;
  }

  try {
    const response = await client.raw.getAsync(`/api/entities/${entityId}`);

    if (response.isSuccessStatusCode && response.content) {
      return getPreviewFromRenditions(response.content.renditions);
    }
  } catch {
    // ignore fetch errors
  }

  return undefined;
}

function buildMetadata(
  properties: Record<string, unknown> | undefined,
  configuredKeys: string[]
): AssetMetadataEntry[] {
  if (!properties) {
    return [];
  }

  const keys = configuredKeys.length > 0 ? configuredKeys : Object.keys(properties).slice(0, 12);

  return keys
    .map((key) => {
      const raw = readPropertyValue(properties[key]);
      if (raw == null) {
        return null;
      }

      const value = String(raw).trim();
      if (!value) {
        return null;
      }

      return { key, value };
    })
    .filter((entry): entry is AssetMetadataEntry => entry != null);
}

export async function resolveAssetContext(
  client: any,
  entity: any,
  options: BrandComplianceOptions
): Promise<BrandComplianceAsset | null> {
  const entityId = String(entity?.systemProperties?.id ?? entity?.id ?? '').trim();

  if (!entityId) {
    return null;
  }

  const properties = (entity?.properties ?? {}) as Record<string, unknown>;
  const nameKeys = options.nameProperty
    ? [options.nameProperty]
    : DEFAULT_NAME_PROPERTIES;
  const fileNameKeys = options.fileNameProperty
    ? [options.fileNameProperty]
    : DEFAULT_FILE_NAME_PROPERTIES;
  const descriptionKeys = options.descriptionProperty
    ? [options.descriptionProperty]
    : DEFAULT_DESCRIPTION_PROPERTIES;
  const metadataKeys = parseMetadataPropertyList(options.metadataProperties);

  const previewUrl = await resolvePreviewUrl(client, entity, entityId);
  const name =
    readStringProperty(properties, nameKeys) ||
    readStringProperty(properties, fileNameKeys) ||
    `Asset ${entityId}`;

  return {
    id: entityId,
    name,
    fileName: readStringProperty(properties, fileNameKeys) || undefined,
    mimeType:
      readStringProperty(properties, ['MimeType', 'mimeType', 'ContentType', 'contentType']) ||
      undefined,
    description: readStringProperty(properties, descriptionKeys) || undefined,
    previewUrl,
    definition:
      readStringProperty(properties, ['Definition', 'definition']) ||
      String(entity?.definition?.name ?? entity?.definitionName ?? '').trim() ||
      undefined,
    metadata: buildMetadata(properties, metadataKeys),
  };
}
