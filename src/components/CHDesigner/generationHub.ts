import { getAssetPreviewFromRenditions } from '../CHMarketingBuilder/assetSearch';
import {
  entityIdFrom,
  loadEntityData,
  loadProductFields,
  saveGeneratedPdf,
  type CatalogField,
  type HubClient,
} from '../CHPdfTemplate/hub';
import {
  assetIdFromImageCell,
  fieldKind,
  productLabelFromData,
  suggestFieldSource,
  valuesForProduct,
  type GenerationRow,
} from './fields';
import type { DesignerField } from './types';

export interface ProductHit {
  id: number;
  label: string;
}

const PRODUCT_DEFINITION = 'M.PCM.Product';

export function generationClient(client: unknown): HubClient | null {
  if (!client || typeof client !== 'object') return null;
  const raw = (client as HubClient).raw;
  if (!raw?.getAsync) return null;
  return client as HubClient;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function itemsFrom(content: unknown): unknown[] {
  if (Array.isArray(content)) return content;
  const record = asRecord(content);
  if (!record) return [];
  if (Array.isArray(record.items)) return record.items;
  const nested = asRecord(record.content);
  if (nested && Array.isArray(nested.items)) return nested.items;
  return [];
}

function hitData(item: unknown): Record<string, unknown> {
  const record = asRecord(item) ?? {};
  const properties = asRecord(record.properties) ?? {};
  const data: Record<string, unknown> = {};
  if (typeof record.identifier === 'string') data.identifier = record.identifier;
  for (const [key, value] of Object.entries(properties)) data[key] = value;
  return data;
}

function hrefOf(value: unknown): string {
  if (typeof value === 'string') return value;
  const record = asRecord(value);
  if (!record) return '';
  if (typeof record.href === 'string') return record.href;
  return '';
}

function renditionUrl(entity: unknown): string {
  const record = asRecord(entity) ?? {};
  const nested = asRecord(record.content) ?? record;
  const named = getAssetPreviewFromRenditions(nested.renditions);
  if (named) return named;
  const renditions = nested.renditions;
  const names = ['preview', 'thumbnail', 'downloadOriginal', 'original'];
  if (renditions && typeof renditions === 'object' && !Array.isArray(renditions)) {
    const bag = renditions as Record<string, unknown>;
    for (const name of names) {
      const entry = bag[name];
      const href = hrefOf(Array.isArray(entry) ? entry[0] : entry);
      if (href) return href;
    }
  }
  if (Array.isArray(renditions)) {
    for (const name of names) {
      const hit = renditions.find((item) => asRecord(item)?.name === name);
      const href = hrefOf(asRecord(hit)?.href ?? hit);
      if (href) return href;
    }
  }
  return '';
}

function relationHrefs(content: unknown, side: 'children' | 'parents'): string[] {
  const record = asRecord(content) ?? {};
  const nested = asRecord(record.content) ?? record;
  const list = nested[side];
  if (!Array.isArray(list)) return [];
  return list.map((item) => hrefOf(item)).filter(Boolean);
}

function entityHref(id: number, sample?: string): string {
  const origin = sample?.match(/^https?:\/\/[^/]+/i)?.[0];
  if (origin) return `${origin}/api/entities/${id}`;
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}/api/entities/${id}`;
  }
  return `/api/entities/${id}`;
}

async function getJson(client: HubClient, url: string): Promise<{ ok: boolean; status?: number; content?: unknown }> {
  const getAsync = client.raw?.getAsync;
  if (!getAsync) return { ok: false };
  const response = await getAsync(url);
  return {
    ok: response.isSuccessStatusCode === true,
    status: response.statusCode,
    content: response.content,
  };
}

export async function searchProducts(client: HubClient, query: string): Promise<ProductHit[]> {
  const text = query.trim();
  const url = text
    ? `/api/entities/search?query=${encodeURIComponent(text)}&definitionNames=${PRODUCT_DEFINITION}&take=20`
    : `/api/entities/query?query=${encodeURIComponent(`Definition.Name=='${PRODUCT_DEFINITION}'`)}&take=20`;
  const response = await getJson(client, url);
  if (!response.ok) {
    throw new Error(`Could not search products (${response.status ?? 'unknown'}).`);
  }
  const hits: ProductHit[] = [];
  for (const item of itemsFrom(response.content)) {
    const record = asRecord(item);
    const id = entityIdFrom(item) ?? entityIdFrom(record?.entityId) ?? entityIdFrom(record?.entity);
    if (!id || hits.some((hit) => hit.id === id)) continue;
    const label = productLabelFromData(hitData(item)) || `Product ${id}`;
    hits.push({ id, label });
  }
  return hits;
}

export async function loadProductCatalog(client: HubClient): Promise<CatalogField[]> {
  return loadProductFields(client);
}

async function assetPreviewUrl(client: HubClient, assetId: number): Promise<string> {
  const response = await getJson(client, `/api/entities/${assetId}`);
  if (!response.ok) return '';
  return renditionUrl(response.content);
}

async function relatedAssetUrl(client: HubClient, productId: number, relationName: string): Promise<string> {
  const response = await getJson(
    client,
    `/api/entities/${productId}/relations/${encodeURIComponent(relationName)}`
  );
  if (!response.ok) return '';
  const href = relationHrefs(response.content, 'children')[0] || relationHrefs(response.content, 'parents')[0];
  const assetId = entityIdFrom(href);
  if (!assetId) return '';
  return assetPreviewUrl(client, assetId);
}

export async function buildProductRows(
  client: HubClient,
  products: ProductHit[],
  fields: DesignerField[],
  catalog: CatalogField[]
): Promise<GenerationRow[]> {
  const rows: GenerationRow[] = [];
  for (const product of products) {
    const data = await loadEntityData(client, product.id);
    const images: Record<string, string> = {};
    for (const field of fields) {
      if (fieldKind(field) !== 'image') continue;
      const path = field.source?.path?.trim() || suggestFieldSource(field, catalog);
      if (!path) continue;
      const url = await relatedAssetUrl(client, product.id, path);
      if (url) images[field.id] = url;
    }
    rows.push({
      id: `product-${product.id}`,
      label: productLabelFromData(data) || product.label,
      source: 'product',
      productId: product.id,
      values: valuesForProduct(fields, data, catalog, images),
    });
  }
  return rows;
}

export async function hydrateCsvImageFields(
  client: HubClient | null,
  fields: DesignerField[],
  rows: GenerationRow[]
): Promise<GenerationRow[]> {
  const imageFields = fields.filter((field) => fieldKind(field) === 'image');
  if (!client || imageFields.length === 0) return rows;
  return Promise.all(
    rows.map(async (row) => {
      const values = { ...row.values };
      for (const field of imageFields) {
        const raw = values[field.id];
        if (!raw) continue;
        const assetId = assetIdFromImageCell(raw);
        if (!assetId) continue;
        const url = await assetPreviewUrl(client, assetId);
        if (url) values[field.id] = url;
      }
      return { ...row, values };
    })
  );
}

export function outputRelationName(fields: DesignerField[], catalog: CatalogField[]): string | undefined {
  for (const field of fields) {
    if (fieldKind(field) !== 'image') continue;
    const path = field.source?.path?.trim();
    if (!path) continue;
    const member = catalog.find((item) => item.path === path);
    if (!member || member.kind === 'relation' || member.kind === 'image') return path;
  }
  return catalog.find((item) => item.kind === 'relation' && /asset|image|picture|photo/i.test(item.path))?.path;
}

export async function saveGeneratedFile(
  client: HubClient,
  fileName: string,
  blob: Blob,
  title: string
): Promise<number> {
  const id = await saveGeneratedPdf(client, fileName, new Uint8Array(await blob.arrayBuffer()));
  if (!client.raw?.putAsync) return id;
  try {
    await client.raw.putAsync(`/api/entities/${id}`, {
      properties: { Title: { Invariant: title } },
    });
  } catch {
    // The file name already identifies the output when Title cannot be written.
  }
  return id;
}

/** Append the new asset beside the product's existing related assets. A failed link still leaves the asset saved. */
export async function linkAssetToProduct(
  client: HubClient,
  productId: number,
  assetId: number,
  relationName: string
): Promise<boolean> {
  if (!client.raw?.getAsync || !client.raw.postAsync || !relationName) return false;
  try {
    const url = `/api/entities/${productId}/relations/${encodeURIComponent(relationName)}`;
    const current = await client.raw.getAsync(url);
    if (!current.isSuccessStatusCode) return false;
    const record = asRecord(current.content) ?? {};
    const nested = asRecord(record.content) ?? record;
    if (!Array.isArray(nested.children) && !Array.isArray(nested.parents)) return false;
    const children = relationHrefs(nested, 'children');
    const parents = relationHrefs(nested, 'parents');
    const known = [...children, ...parents];
    if (known.some((href) => entityIdFrom(href) === assetId)) return true;
    const side = parents.length > 0 && children.length === 0 ? 'parents' : 'children';
    const existing = side === 'parents' ? parents : children;
    const next = [...existing, entityHref(assetId, existing[0] || known[0])];
    const posted = await client.raw.postAsync(url, {
      [side]: next.map((href) => ({ href })),
    });
    return posted.isSuccessStatusCode === true;
  } catch {
    return false;
  }
}

export function assetTitle(label: string, templateId: string | undefined): string {
  const name = label.trim() || 'Generated asset';
  return templateId ? `${name} (template ${templateId})` : name;
}
