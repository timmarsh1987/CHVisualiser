/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AssetMetadataEntry, FineArtAsset, FineArtTaggingOptions } from './types';
import { parseMetadataPropertyList } from './options';

const RENDITION_PRIORITY = [
  'preview',
  'thumbnail',
  'bigthumbnail',
  'thumbnail_cropped',
  'downloadPreview',
] as const;

const DEFAULT_NAME_PROPERTIES = [
  'ArtworkTitle',
  'Title',
  'title',
  'FileName',
  'fileName',
  'Name',
  'name',
];
const DEFAULT_FILE_NAME_PROPERTIES = ['FileName', 'fileName'];
const DEFAULT_DESCRIPTION_PROPERTIES = [
  'ArtworkDescription',
  'Description',
  'description',
  'AssetDescription',
  'Summary',
  'summary',
];

/** Catalog fields sent to CodeMie unless metadataProperties overrides the list */
const DEFAULT_ARTWORK_METADATA_PROPERTIES = [
  'ArtworkTitle',
  'ArtworkDescription',
  'DimensionUnframed',
  'DimensionFramed',
  'ArtWidth',
  'ArtHeight',
  'ArtDepth',
  'ArtLength',
  'ArtDiameter',
  'ArtworkHasFrame',
  'ArtworkWeight',
];

const RELATED_PATH_RELATIONS = [
  { relation: 'ArtistsWorks', key: 'Artist' },
  { relation: 'ArtworkMedium', key: 'Medium' },
  { relation: 'ArtworkYear', key: 'Year' },
  { relation: 'ExhibitionToArtwork', key: 'Exhibition' },
] as const;

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
  const preferredKeys = [
    'Invariant',
    'invariant',
    '_value',
    'value',
    'en-US',
    'en-us',
    'en',
  ];

  for (const key of preferredKeys) {
    if (key in record) {
      const nested = readPropertyValue(record[key]);
      if (nested != null && typeof nested !== 'object') {
        return nested;
      }
    }
  }

  const firstPrimitive = Object.values(record).find(
    (entry) =>
      (typeof entry === 'string' && entry.trim()) ||
      typeof entry === 'number' ||
      typeof entry === 'boolean'
  );

  return firstPrimitive;
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
    if (raw == null || typeof raw === 'object') {
      continue;
    }

    const text = String(raw).trim();
    if (text && text !== '[object Object]') {
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

function coerceDisplayString(value: unknown): string {
  if (value == null) {
    return '';
  }

  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    const text = String(value).trim();
    return text === '[object Object]' ? '' : text;
  }

  if (typeof value === 'object') {
    const nested = readPropertyValue(value);
    if (nested != null && nested !== value) {
      return coerceDisplayString(nested);
    }
  }

  return '';
}

function buildMetadata(
  properties: Record<string, unknown> | undefined,
  configuredKeys: string[]
): AssetMetadataEntry[] {
  if (!properties) {
    return [];
  }

  const keys =
    configuredKeys.length > 0 ? configuredKeys : DEFAULT_ARTWORK_METADATA_PROPERTIES;

  return keys
    .map((key) => {
      const value = coerceDisplayString(readPropertyValue(properties[key]));
      if (!value) {
        return null;
      }

      return { key, value };
    })
    .filter((entry): entry is AssetMetadataEntry => entry != null);
}

function cultureLabel(values: unknown): string {
  if (values == null) {
    return '';
  }

  if (typeof values === 'string' || typeof values === 'number' || typeof values === 'boolean') {
    return String(values).trim();
  }

  if (typeof values !== 'object' || Array.isArray(values)) {
    return '';
  }

  const record = values as Record<string, unknown>;
  const preferredKeys = ['en-US', 'en-us', 'Invariant', 'invariant', 'en'];
  for (const key of preferredKeys) {
    const value = coerceDisplayString(record[key]);
    if (value) {
      return value;
    }
  }

  for (const value of Object.values(record)) {
    const text = coerceDisplayString(value);
    if (text) {
      return text;
    }
  }

  return '';
}

/**
 * Flatten Content Hub related_paths into unique labels (leaf-first, then parents).
 */
function labelsFromRelatedPath(relatedPaths: unknown, relationName: string): string[] {
  if (relatedPaths == null || typeof relatedPaths !== 'object') {
    return [];
  }

  const paths = (relatedPaths as Record<string, unknown>)[relationName];
  if (!Array.isArray(paths)) {
    return [];
  }

  const labels: string[] = [];
  const seen = new Set<string>();

  for (const path of paths) {
    if (!Array.isArray(path) || path.length === 0) {
      continue;
    }

    // Prefer the most specific node (last), then include parents if useful
    for (let index = path.length - 1; index >= 0; index -= 1) {
      const node = path[index];
      if (!node || typeof node !== 'object') {
        continue;
      }

      const label = cultureLabel((node as { values?: unknown }).values);
      if (!label) {
        continue;
      }

      const key = label.toLowerCase();
      if (seen.has(key)) {
        continue;
      }

      seen.add(key);
      labels.push(label);
    }
  }

  return labels;
}

function resolveDefinitionName(entity: any): string {
  const fromProperty = coerceDisplayString(entity?.definition?.name);
  if (fromProperty) {
    return fromProperty;
  }

  const fromDefinitionName = coerceDisplayString(entity?.definitionName);
  if (fromDefinitionName) {
    return fromDefinitionName;
  }

  if (typeof entity?.definition === 'string') {
    return entity.definition.trim();
  }

  return '';
}

async function loadEntitySnapshot(
  client: any,
  entity: any,
  entityId: string
): Promise<{
  properties: Record<string, unknown>;
  relatedPaths: unknown;
  renditions: unknown;
}> {
  let properties = { ...((entity?.properties ?? {}) as Record<string, unknown>) };
  let relatedPaths = entity?.related_paths ?? entity?.relatedPaths;
  let renditions = entity?.renditions;

  const needsRelatedPaths = RELATED_PATH_RELATIONS.some(
    ({ relation }) => labelsFromRelatedPath(relatedPaths, relation).length === 0
  );

  if ((!relatedPaths || needsRelatedPaths) && client?.raw?.getAsync) {
    try {
      const response = await client.raw.getAsync(`/api/entities/${entityId}`);
      if (response.isSuccessStatusCode && response.content) {
        const content = response.content as Record<string, unknown>;
        const remoteProperties =
          content.properties && typeof content.properties === 'object'
            ? (content.properties as Record<string, unknown>)
            : {};
        properties = { ...remoteProperties, ...properties };
        relatedPaths = content.related_paths ?? content.relatedPaths ?? relatedPaths;
        renditions = content.renditions ?? renditions;
      }
    } catch {
      // Keep page entity snapshot
    }
  }

  return { properties, relatedPaths, renditions };
}

export async function resolveAssetContext(
  client: any,
  entity: any,
  options: FineArtTaggingOptions
): Promise<FineArtAsset | null> {
  const entityId = String(entity?.systemProperties?.id ?? entity?.id ?? '').trim();

  if (!entityId) {
    return null;
  }

  const { properties, relatedPaths, renditions } = await loadEntitySnapshot(
    client,
    entity,
    entityId
  );

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

  // Prefer page-entity preview helpers, then remote renditions from snapshot
  let previewUrl = await resolvePreviewUrl(client, entity, entityId);
  if (!previewUrl) {
    previewUrl = getPreviewFromRenditions(renditions);
  }

  const title =
    readStringProperty(properties, ['ArtworkTitle', 'Title', 'title']) || undefined;
  const description = readStringProperty(properties, descriptionKeys) || undefined;
  const dimensions =
    readStringProperty(properties, ['DimensionUnframed', 'DimensionFramed']) ||
    undefined;

  const artists = labelsFromRelatedPath(relatedPaths, 'ArtistsWorks');
  const mediums = labelsFromRelatedPath(relatedPaths, 'ArtworkMedium');
  const years = labelsFromRelatedPath(relatedPaths, 'ArtworkYear');
  const exhibitions = labelsFromRelatedPath(relatedPaths, 'ExhibitionToArtwork');

  const metadata = buildMetadata(properties, metadataKeys);

  for (const { relation, key } of RELATED_PATH_RELATIONS) {
    const labels = labelsFromRelatedPath(relatedPaths, relation);
    if (labels.length === 0) {
      continue;
    }

    // Avoid duplicating if already present from property list
    if (metadata.some((entry) => entry.key.toLowerCase() === key.toLowerCase())) {
      continue;
    }

    metadata.push({ key, value: labels.join(' › ') });
  }

  const name =
    readStringProperty(properties, nameKeys) ||
    title ||
    readStringProperty(properties, fileNameKeys) ||
    `Asset ${entityId}`;

  return {
    id: entityId,
    name,
    title,
    fileName: readStringProperty(properties, fileNameKeys) || undefined,
    mimeType:
      readStringProperty(properties, ['MimeType', 'mimeType', 'ContentType', 'contentType']) ||
      undefined,
    description,
    artist: artists.length > 0 ? artists.join(', ') : undefined,
    medium: mediums.length > 0 ? mediums.join(' › ') : undefined,
    year: years.length > 0 ? years.join(', ') : undefined,
    exhibitions: exhibitions.length > 0 ? exhibitions : undefined,
    dimensions,
    previewUrl,
    definition:
      readStringProperty(properties, ['Definition', 'definition']) ||
      resolveDefinitionName(entity) ||
      undefined,
    metadata,
  };
}
