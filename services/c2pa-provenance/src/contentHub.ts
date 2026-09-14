import { createWriteStream } from 'node:fs';
import { rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { extname, join } from 'node:path';
import { Readable, Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { randomUUID } from 'node:crypto';
import type { AppConfig } from './config.js';
import { contentHubFetch } from './contentHubAuth.js';
import type {
  ContentHubAsset,
  ProvenanceCheckSummary,
  ProvenanceResult,
  ProvenanceSummary,
} from './types.js';

function absoluteUrl(baseUrl: string, href: string): string {
  return new URL(href, `${baseUrl}/`).toString();
}

function errorBody(value: string): string {
  return value.replace(/\s+/g, ' ').trim().slice(0, 500);
}

async function responseError(prefix: string, response: Response): Promise<Error> {
  return new Error(`${prefix}: HTTP ${response.status} ${errorBody(await response.text())}`);
}

export async function getAsset(
  config: AppConfig['contentHub'],
  assetId: string
): Promise<ContentHubAsset> {
  const response = await contentHubFetch(config, `/api/entities/${encodeURIComponent(assetId)}`);
  if (!response.ok) throw await responseError(`Could not load asset ${assetId}`, response);
  const asset = (await response.json()) as ContentHubAsset;
  asset.id = String(asset.id ?? assetId);
  return asset;
}

function hrefValue(value: unknown): string | null {
  if (typeof value === 'string' && value.trim()) return value.trim();
  if (value && typeof value === 'object') {
    const href = (value as Record<string, unknown>).href;
    if (typeof href === 'string' && href.trim()) return href.trim();
  }
  return null;
}

function renditionHref(renditions: unknown, names: string[]): string | null {
  if (!renditions || typeof renditions !== 'object') return null;
  const values = renditions as Record<string, unknown>;

  for (const name of names) {
    const rendition = values[name];
    const entries = Array.isArray(rendition)
      ? rendition
      : rendition && typeof rendition === 'object' &&
          Array.isArray((rendition as Record<string, unknown>).items)
        ? ((rendition as Record<string, unknown>).items as unknown[])
        : [rendition];
    for (const entry of entries) {
      const href = hrefValue(entry);
      if (href) return href;
    }
  }
  return null;
}

function propertyText(value: unknown): string | undefined {
  if (typeof value === 'string' && value.trim()) return value.trim();
  if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
  const record = value as Record<string, unknown>;
  for (const key of ['Invariant', 'invariant', '_value', 'value']) {
    const nested = propertyText(record[key]);
    if (nested) return nested;
  }
  return undefined;
}

function fileNameFromAsset(asset: ContentHubAsset): string | undefined {
  const properties = asset.properties ?? {};
  for (const name of ['FileName', 'fileName', 'Filename', 'filename']) {
    const value = propertyText(properties[name]);
    if (value) return value;
  }
  return undefined;
}

function mimeTypeFromFileName(fileName?: string): string | undefined {
  if (/\.jpe?g$/i.test(fileName ?? '')) return 'image/jpeg';
  if (/\.png$/i.test(fileName ?? '')) return 'image/png';
  if (/\.webp$/i.test(fileName ?? '')) return 'image/webp';
  if (/\.gif$/i.test(fileName ?? '')) return 'image/gif';
  if (/\.tiff?$/i.test(fileName ?? '')) return 'image/tiff';
  if (/\.avif$/i.test(fileName ?? '')) return 'image/avif';
  return undefined;
}

function normalizeMimeType(value?: string | null): string | undefined {
  const normalized = value?.split(';', 1)[0].trim().toLowerCase();
  if (!normalized) return undefined;
  return normalized === 'image/jpg' ? 'image/jpeg' : normalized;
}

function mimeTypeFromAsset(asset: ContentHubAsset): string | undefined {
  const properties = asset.properties ?? {};
  for (const name of ['MimeType', 'mimeType', 'ContentType', 'contentType']) {
    const value = propertyText(properties[name]);
    if (value) return normalizeMimeType(value);
  }
  return mimeTypeFromFileName(fileNameFromAsset(asset));
}

function fileNameFromDisposition(value: string | null): string | undefined {
  if (!value) return undefined;
  const encoded = value.match(/filename\*=UTF-8''([^;]+)/i)?.[1];
  if (encoded) {
    try {
      return decodeURIComponent(encoded.replace(/^"|"$/g, ''));
    } catch {
      return encoded;
    }
  }
  return value.match(/filename="?([^";]+)"?/i)?.[1]?.trim();
}

function fileSuffix(url: string, mimeType?: string, fileName?: string): string {
  const pathname = new URL(url).pathname;
  const extension = extname(pathname) || extname(fileName ?? '');
  if (extension && extension.length <= 10) return extension;
  const byMime: Record<string, string> = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp',
    'image/gif': '.gif',
    'image/tiff': '.tif',
    'image/avif': '.avif',
  };
  return byMime[mimeType?.toLowerCase() ?? ''] ?? '.img';
}

class ByteLimit extends Transform {
  private bytes = 0;
  constructor(private readonly maxBytes: number) {
    super();
  }
  override _transform(chunk: Buffer, _encoding: BufferEncoding, callback: (error?: Error | null, data?: Buffer) => void): void {
    this.bytes += chunk.length;
    callback(
      this.bytes > this.maxBytes
        ? new Error(`Asset exceeds MAX_FILE_BYTES (${this.maxBytes}).`)
        : null,
      chunk
    );
  }
}

export interface DownloadedAsset {
  asset: ContentHubAsset;
  path: string;
  mimeType?: string;
}

async function delay(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function downloadOriginalWithRetry(
  config: AppConfig,
  assetId: string
): Promise<DownloadedAsset> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= config.fileFetchAttempts; attempt += 1) {
    let temporaryPath: string | undefined;
    try {
      const asset = await getAsset(config.contentHub, assetId);
      const href = renditionHref(asset.renditions, config.contentHub.originalRenditionNames);
      if (!href) throw new Error(`Original rendition is not available for asset ${assetId}.`);

      let mimeType = mimeTypeFromAsset(asset);
      if (mimeType && !mimeType.toLowerCase().startsWith('image/')) {
        throw new Error(`Unsupported asset type ${mimeType}; only images are supported.`);
      }

      const url = absoluteUrl(config.contentHub.baseUrl, href);
      const response = await contentHubFetch(config.contentHub, url, {
        headers: { Accept: 'application/octet-stream' },
      });
      if (!response.ok || !response.body) {
        throw await responseError(`Could not download original for asset ${assetId}`, response);
      }

      const responseMimeType = normalizeMimeType(response.headers.get('content-type'));
      if (!mimeType && responseMimeType?.startsWith('image/')) {
        mimeType = responseMimeType;
      }
      const fileName =
        fileNameFromAsset(asset) ??
        fileNameFromDisposition(response.headers.get('content-disposition'));
      temporaryPath = join(
        tmpdir(),
        `c2pa-${randomUUID()}${fileSuffix(url, mimeType, fileName)}`
      );
      await pipeline(
        Readable.fromWeb(response.body as import('node:stream/web').ReadableStream),
        new ByteLimit(config.maxFileBytes),
        createWriteStream(temporaryPath)
      );
      const downloaded = await stat(temporaryPath);
      if (downloaded.size === 0) throw new Error(`Downloaded file for asset ${assetId} is empty.`);
      return { asset, path: temporaryPath, mimeType };
    } catch (error) {
      lastError = error;
      if (temporaryPath) await rm(temporaryPath, { force: true });
      if (attempt < config.fileFetchAttempts) {
        await delay(config.fileFetchBaseDelayMs * 2 ** (attempt - 1));
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

function definitionHref(asset: ContentHubAsset): string | undefined {
  for (const name of ['entitydefinition', 'entityDefinition', 'definition']) {
    const href = hrefValue(asset[name]);
    if (href) return href;
  }
  return undefined;
}

export async function updateAssetProvenance(
  config: AppConfig['contentHub'],
  asset: ContentHubAsset,
  result: ProvenanceResult,
  checkedAt: Date,
  webhookEventId: string | null,
  historyLimit: number
): Promise<void> {
  const summary = buildProvenanceSummary(
    asset.properties?.['SC.Asset.C2PA.Summary'],
    result,
    checkedAt,
    webhookEventId,
    historyLimit
  );
  const properties = {
    'EPAM.aiGenerated': result.aiGenerated,
    'EPAM.aiEdited': result.aiEdited,
    'EPAM.aiSourceTool': result.sourceTool,
    'EPAM.provenanceVerified': result.provenanceVerified,
    'EPAM.provenanceCheckedAt': checkedAt.toISOString(),
    'SC.Asset.C2PA.Summary': summary,
  };
  const payload: Record<string, unknown> = { properties };
  const definition = definitionHref(asset);
  if (definition) payload.entitydefinition = { href: definition };

  const response = await contentHubFetch(
    config,
    `/api/entities/${encodeURIComponent(asset.id)}`,
    {
      method: config.updateMethod,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );
  if (!response.ok) throw await responseError(`Content Hub update failed for ${asset.id}`, response);
}

function readableManifest(rawManifest: unknown): unknown | null {
  if (!rawManifest || typeof rawManifest !== 'object') return null;
  const store = rawManifest as Record<string, unknown>;
  const active =
    store.active_manifest && typeof store.active_manifest === 'object'
      ? (store.active_manifest as Record<string, unknown>)
      : null;
  if (!active) return null;

  const assertions = Array.isArray(active.assertions)
    ? active.assertions.map((value) => {
        const assertion =
          value && typeof value === 'object'
            ? (value as Record<string, unknown>)
            : {};
        return { label: assertion.label, data: assertion.data };
      })
    : [];
  const ingredients = Array.isArray(active.ingredients)
    ? active.ingredients.map((value) => {
        const ingredient =
          value && typeof value === 'object'
            ? (value as Record<string, unknown>)
            : {};
        return {
          title: ingredient.title,
          format: ingredient.format,
          relationship: ingredient.relationship,
          validationStatus: ingredient.validation_status,
        };
      })
    : [];

  return {
    label: active.label,
    title: active.title,
    format: active.format,
    claimGenerator: active.claim_generator,
    signatureInfo: active.signature_info,
    assertions,
    ingredients,
  };
}

function parseExistingSummary(value: unknown): ProvenanceSummary | null {
  const unwrapped = unwrap(value);
  if (typeof unwrapped === 'string') {
    try {
      return parseExistingSummary(JSON.parse(unwrapped));
    } catch {
      return null;
    }
  }
  if (!unwrapped || typeof unwrapped !== 'object' || Array.isArray(unwrapped)) return null;
  const record = unwrapped as Partial<ProvenanceSummary>;
  return record.schemaVersion === 1 && Array.isArray(record.history)
    ? (record as ProvenanceSummary)
    : null;
}

export function buildProvenanceSummary(
  existingValue: unknown,
  result: ProvenanceResult,
  checkedAt: Date,
  webhookEventId: string | null,
  historyLimit: number
): ProvenanceSummary {
  const entry: ProvenanceCheckSummary = {
    checkedAt: checkedAt.toISOString(),
    provenanceFound: result.rawManifest != null,
    provenanceVerified: result.provenanceVerified,
    aiGenerated: result.aiGenerated,
    aiEdited: result.aiEdited,
    sourceTool: result.sourceTool,
    digitalSourceTypes: result.digitalSourceTypes,
    validationErrors: result.validationErrors,
    manifest: readableManifest(result.rawManifest),
    webhookEventId,
  };
  const existing = parseExistingSummary(existingValue);
  return {
    schemaVersion: 1,
    latest: entry,
    history: [entry, ...(existing?.history ?? [])].slice(0, historyLimit),
  };
}

function unwrap(value: unknown): unknown {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return value;
  const record = value as Record<string, unknown>;
  for (const name of ['Invariant', 'invariant', '_value', 'value']) {
    if (name in record) return unwrap(record[name]);
  }
  return value;
}

export function wasRecentlyChecked(
  asset: ContentHubAsset,
  now: Date,
  windowSeconds: number
): boolean {
  const value = unwrap(asset.properties?.['EPAM.provenanceCheckedAt']);
  if (typeof value !== 'string') return false;
  const checkedAt = Date.parse(value);
  return Number.isFinite(checkedAt) && now.getTime() - checkedAt >= 0 &&
    now.getTime() - checkedAt < windowSeconds * 1000;
}
