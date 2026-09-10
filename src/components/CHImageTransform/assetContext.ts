/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ImageAssetContext } from './types';

// Keep this aligned with CHBrandCompliance: image analysis and transforms use
// the signed, web-friendly preview rendition rather than the original master.
const PREVIEW_NAMES = [
  'preview',
  'thumbnail',
  'bigthumbnail',
  'thumbnail_cropped',
  'downloadPreview',
  'medium',
];

function text(value: unknown): string {
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    for (const key of ['Invariant', 'invariant', '_value', 'value', 'en-US', 'en']) {
      const nested = text(record[key]);
      if (nested) return nested;
    }
  }
  return '';
}

function property(entity: any, names: string[]): string {
  for (const name of names) {
    const value = text(entity?.properties?.[name]);
    if (value) return value;
  }
  return '';
}

function href(value: any): string {
  return text(value?.href ?? value);
}

function fromEntity(entity: any, names: string[]): string {
  for (const name of names) {
    try {
      const value = href(entity?.getRendition?.(name)?.items?.[0]);
      if (value) return value;
    } catch {
      // The rendition was not included in this component context.
    }
  }

  for (const name of names) {
    const rendition = Array.isArray(entity?.renditions)
      ? entity.renditions.find((item: any) => item?.name === name)
      : entity?.renditions?.[name];
    const value = href(rendition?.items?.[0] ?? rendition?.[0]);
    if (value) return value;
  }
  return '';
}

function fromPayload(payload: any, names: string[]): string {
  for (const name of names) {
    const value = href(payload?.renditions?.[name]?.[0]);
    if (value) return value;
  }
  return '';
}

export async function resolveImageAsset(client: any, entity: any): Promise<ImageAssetContext | null> {
  const id = text(entity?.systemProperties?.id ?? entity?.id);
  if (!id) return null;

  let previewUrl = fromEntity(entity, PREVIEW_NAMES);

  if (!previewUrl && client?.raw?.getAsync) {
    try {
      const response = await client.raw.getAsync(`/api/entities/${id}`);
      if (response?.isSuccessStatusCode) {
        previewUrl ||= fromPayload(response.content, PREVIEW_NAMES);
      }
    } catch {
      // The panel below reports a missing image when no rendition can be resolved.
    }
  }

  const fileName =
    property(entity, ['FileName', 'fileName']) || `asset-${id}.jpg`;
  const mimeType =
    property(entity, ['MimeType', 'mimeType', 'ContentType']) || 'image/jpeg';
  const name =
    property(entity, ['Title', 'title', 'Name', 'name']) || fileName;

  if (!previewUrl || !mimeType.toLowerCase().startsWith('image/')) {
    return null;
  }

  return {
    id,
    name,
    fileName,
    mimeType,
    previewUrl,
    sourceUrl: previewUrl,
  };
}
