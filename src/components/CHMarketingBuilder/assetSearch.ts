import type { EntityPayload } from './entityMap';

export interface PickedAsset {
  id: string;
  name: string;
  thumbnailUrl: string;
  previewUrl?: string;
}

const RENDITION_PRIORITY = [
  'preview',
  'thumbnail',
  'bigthumbnail',
  'thumbnail_cropped',
  'downloadPreview',
] as const;

export const COLLECTION_ASSET_RELATION_NAMES = [
  'AssetCollectionToAsset',
  'M.AssetCollectionToAsset',
  'collectionToAsset',
  'assetCollectionToAsset',
  'CollectionToAsset',
];

function hrefToString(href: unknown): string | undefined {
  if (typeof href === 'string' && href.trim()) return href.trim();
  if (href != null && typeof href === 'object') {
    const nested = (href as { href?: unknown }).href;
    if (typeof nested === 'string' && nested.trim()) return nested.trim();
  }
  return undefined;
}

function readPropertyValue(value: unknown): unknown {
  if (value == null) return undefined;
  if (typeof value !== 'object' || Array.isArray(value)) return value;
  const record = value as Record<string, unknown>;
  if ('Invariant' in record) return record.Invariant;
  const firstString = Object.values(record).find((entry) => typeof entry === 'string');
  return firstString ?? value;
}

function readStringProperty(properties: Record<string, unknown> | undefined, ...keys: string[]): string {
  if (!properties) return '';
  for (const key of keys) {
    const raw = readPropertyValue(properties[key]);
    if (raw == null) continue;
    const text = String(raw).trim();
    if (text) return text;
  }
  return '';
}

export function getAssetPreviewFromRenditions(renditions: unknown): string | undefined {
  if (renditions == null || typeof renditions !== 'object') return undefined;

  const record = renditions as Record<string, unknown>;
  for (const name of RENDITION_PRIORITY) {
    const items = record[name];
    if (!Array.isArray(items) || items.length === 0) continue;
    const url = hrefToString(items[0]?.href ?? items[0]);
    if (url) return url;
  }

  return undefined;
}

export function mapEntityPayloadToPickedAsset(entityId: string | number, payload: EntityPayload): PickedAsset | null {
  const properties = payload.properties ?? {};
  const thumbnailUrl = getAssetPreviewFromRenditions(payload.renditions);
  if (!thumbnailUrl) return null;

  const name =
    readStringProperty(properties, 'FileName', 'fileName', 'Title', 'title', 'Name', 'name') ||
    `Asset ${entityId}`;

  return {
    id: String(entityId),
    name,
    thumbnailUrl,
    previewUrl: thumbnailUrl,
  };
}

export function filterPickedAssets(assets: PickedAsset[], query?: string): PickedAsset[] {
  if (!query?.trim()) return assets;
  const normalized = query.trim().toLowerCase();
  return assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(normalized) || asset.id.toLowerCase().includes(normalized)
  );
}
