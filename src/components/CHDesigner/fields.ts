import { cloneDocument, createLayerId } from './document';
import { syncActiveTemplatePage } from './templateSettings';
import { reflowTextStory } from './textFlow';
import type { DesignerDocument, DesignerField, DesignerFieldKind, Layer } from './types';

export function magicStringFor(field: Pick<DesignerField, 'key'>): string {
  return `{{${field.key}}}`;
}

export function fieldLabelFromText(text: string | undefined, fallback = 'Text'): string {
  const line = (text ?? '')
    .split('\n')
    .map((part) => part.trim())
    .find(Boolean);
  const source = line || fallback.trim() || 'Text';
  return source.length > 40 ? `${source.slice(0, 40)}…` : source;
}

export function slugFieldKey(label: string): string {
  const slug = label
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 40);
  return slug || 'text';
}

function uniqueKey(base: string, used: Set<string>): string {
  if (!used.has(base)) {
    used.add(base);
    return base;
  }
  let index = 2;
  while (used.has(`${base}_${index}`)) index += 1;
  const key = `${base}_${index}`;
  used.add(key);
  return key;
}

function canTakeField(layer: Layer): boolean {
  if (layer.type !== 'text' || layer.continuesFrom || layer.fieldId) return false;
  if (layer.role === 'static' || layer.role === 'brand' || layer.role === 'hidden' || layer.role === 'picker') {
    return false;
  }
  if (layer.locked) return false;
  if (layer.editableContent === false) return false;
  return true;
}

function layerLists(doc: DesignerDocument): Layer[][] {
  if (doc.pages?.length) return doc.pages.map((page) => page.layers);
  return [doc.layers];
}

/** Give each editable text frame its own field. Sample copy is left on the layer. */
export function assignMagicStrings(doc: DesignerDocument): DesignerDocument {
  const synced = syncActiveTemplatePage(doc);
  const needsField = layerLists(synced).some((layers) => layers.some(canTakeField));
  if (!needsField) return doc;

  const copy = syncActiveTemplatePage(cloneDocument(doc));
  const fields = [...(copy.fields ?? [])];
  for (const layers of layerLists(copy)) {
    for (const layer of layers) {
      if (!canTakeField(layer)) continue;
      const label = fieldLabelFromText(layer.text, layer.name);
      const field = createDesignerField(fields, label, 'text');
      fields.push(field);
      layer.fieldId = field.id;
    }
  }
  copy.fields = fields;
  return copy;
}

function filledValues(values: Record<string, string> | undefined): Record<string, string> | null {
  if (!values) return null;
  const filled: Record<string, string> = {};
  for (const [id, value] of Object.entries(values)) {
    if (typeof value === 'string' && value.trim()) filled[id] = value;
  }
  return Object.keys(filled).length > 0 ? filled : null;
}

/**
 * Copy the document and replace each bound story or image with its entered value.
 * An empty value leaves the sample. Text overflow then uses the existing reflow.
 */
export function resolveFieldText(
  doc: DesignerDocument,
  values: Record<string, string> | undefined
): DesignerDocument {
  const filled = filledValues(values);
  if (!filled) return doc;

  const copy = syncActiveTemplatePage(cloneDocument(doc));
  const touched: string[] = [];
  for (const layers of layerLists(copy)) {
    for (const layer of layers) {
      if (!layer.fieldId) continue;
      const value = filled[layer.fieldId];
      if (value === undefined) continue;
      if (layer.type === 'image') {
        if ((layer.src || '') !== value) layer.src = value;
        continue;
      }
      if (layer.continuesFrom || (layer.text || '') === value) continue;
      layer.text = value;
      touched.push(layer.id);
    }
  }

  let next = copy;
  for (const id of touched) {
    next = reflowTextStory(next, id);
  }
  return next;
}

export interface BatchCsv {
  rows: Record<string, string>[];
  unmatched: string[];
}

export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let quoted = false;
  const source = text.replace(/^\uFEFF/, '');
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (char === '"') {
        if (source[index + 1] === '"') {
          cell += '"';
          index += 1;
        } else {
          quoted = false;
        }
      } else {
        cell += char;
      }
      continue;
    }
    if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(cell);
      cell = '';
    } else if (char === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else if (char !== '\r') {
      cell += char;
    }
  }
  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((entry) => entry.some((value) => value.trim() !== ''));
}

/** Header cells match a field label, key, or `{{key}}`. Empty cells keep the sample. */
export function parseBatchCsv(csv: string, fields: DesignerField[]): BatchCsv {
  const table = parseCsv(csv);
  if (table.length === 0) return { rows: [], unmatched: [] };
  const header = table[0].map((cell) => cell.trim());
  const unmatched: string[] = [];
  const columns: { index: number; fieldId: string }[] = [];
  header.forEach((name, index) => {
    if (!name) return;
    const needle = name.toLowerCase();
    const field = fields.find(
      (item) =>
        item.label.toLowerCase() === needle ||
        item.key.toLowerCase() === needle ||
        magicStringFor(item).toLowerCase() === needle
    );
    if (!field) unmatched.push(name);
    else columns.push({ index, fieldId: field.id });
  });
  const rows = table.slice(1).map((cells) => {
    const values: Record<string, string> = {};
    for (const column of columns) {
      const value = cells[column.index] ?? '';
      if (value.trim()) values[column.fieldId] = value;
    }
    return values;
  });
  return { rows, unmatched };
}

export function fieldKind(field: Pick<DesignerField, 'kind'>): DesignerFieldKind {
  return field.kind === 'image' ? 'image' : 'text';
}

export function createDesignerField(
  existing: DesignerField[],
  label: string,
  kind: DesignerFieldKind
): DesignerField {
  const used = new Set(existing.map((field) => field.key));
  const safeLabel = label.trim() || (kind === 'image' ? 'Image' : 'Text');
  const field: DesignerField = {
    id: `field-${createLayerId()}`,
    key: uniqueKey(slugFieldKey(safeLabel), used),
    label: safeLabel,
  };
  if (kind === 'image') field.kind = 'image';
  return field;
}

export interface FieldCatalogEntry {
  id: string;
  label: string;
  kind: string;
  path: string;
}

function compactName(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/** Suggested product member when the field has no stored mapping yet. */
export function suggestFieldSource(field: DesignerField, catalog: FieldCatalogEntry[]): string | undefined {
  if (field.source) return field.source.path.trim() || undefined;
  const needles = [field.key, field.label].map(compactName).filter((name) => name.length > 1);
  const image = fieldKind(field) === 'image';
  const pool = catalog.filter((entry) =>
    image ? entry.kind === 'relation' || entry.kind === 'image' : entry.kind !== 'relation'
  );
  const hit = pool.find((entry) => {
    const names = [entry.id, entry.label, entry.path].map(compactName);
    return names.some((name) => needles.includes(name));
  });
  return hit?.path;
}

/** Text stored on a product property, including option lists and localized bags. */
export function propertyText(value: unknown): string {
  if (value == null) return '';
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) {
    return value
      .map((item) => propertyText(item))
      .filter(Boolean)
      .join(', ');
  }
  if (typeof value !== 'object') return '';
  const record = value as Record<string, unknown>;
  if (typeof record.Invariant === 'string' && record.Invariant.trim()) return record.Invariant.trim();
  if (typeof record.invariant === 'string' && record.invariant.trim()) return record.invariant.trim();
  const labels = record.labels ?? record.Labels;
  if (labels && typeof labels === 'object' && !Array.isArray(labels)) {
    const first = Object.values(labels as Record<string, unknown>).find(
      (item) => typeof item === 'string' && item.trim()
    );
    if (typeof first === 'string') return first.trim();
  }
  for (const key of ['en-US', 'en-us', 'value', 'Value']) {
    const text = record[key];
    if (typeof text === 'string' && text.trim()) return text.trim();
  }
  if (typeof record.identifier === 'string' && record.identifier.trim() && !record.href) {
    return record.identifier.trim();
  }
  const firstString = Object.values(record).find((item) => typeof item === 'string' && item.trim());
  if (typeof firstString === 'string' && !firstString.includes('/api/')) return firstString.trim();
  return '';
}

export function valuesForProduct(
  fields: DesignerField[],
  data: Record<string, unknown>,
  catalog: FieldCatalogEntry[],
  images: Record<string, string>
): Record<string, string> {
  const values: Record<string, string> = {};
  for (const field of fields) {
    if (fieldKind(field) === 'image') {
      const image = images[field.id];
      if (image?.trim()) values[field.id] = image.trim();
      continue;
    }
    const path = field.source?.path?.trim() || suggestFieldSource(field, catalog);
    if (!path) continue;
    const text = propertyText(data[path]);
    if (text) values[field.id] = text;
  }
  return values;
}

export interface GenerationRow {
  id: string;
  label: string;
  source: 'product' | 'csv';
  productId?: number;
  values: Record<string, string>;
}

export function isDirectImageValue(value: string): boolean {
  return /^(https?:|data:image\/)/i.test(value.trim());
}

/** A CSV image cell that points at a Content Hub asset rather than a URL. */
export function assetIdFromImageCell(value: string): number | null {
  const trimmed = value.trim();
  if (/^\d+$/.test(trimmed)) {
    const id = Number(trimmed);
    return Number.isSafeInteger(id) && id > 0 ? id : null;
  }
  const match = trimmed.match(/\/api\/entities\/(\d+)/i);
  if (!match) return null;
  const id = Number(match[1]);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

export function rowsFromBatchCsv(parsed: BatchCsv, idPrefix: string): GenerationRow[] {
  return parsed.rows.map((values, index) => {
    const text = Object.values(values).find((value) => value.trim() && !isDirectImageValue(value));
    return {
      id: `${idPrefix}-${index + 1}`,
      label: (text || `Row ${index + 1}`).trim().slice(0, 80),
      source: 'csv',
      values,
    };
  });
}

export function generationFileStem(row: Pick<GenerationRow, 'label' | 'productId'>, templateId?: string): string {
  const slug = slugFieldKey(row.label).replace(/_/g, '-');
  const parts = [slug || 'output'];
  if (templateId) parts.push(`t${templateId}`);
  if (row.productId) parts.push(`p${row.productId}`);
  return parts.join('-').slice(0, 90);
}

const PRODUCT_LABEL_KEYS = ['ProductName', 'ProductLabel', 'Title', 'Name', 'DisplayName', 'identifier'];

export function productLabelFromData(data: Record<string, unknown>): string {
  for (const key of PRODUCT_LABEL_KEYS) {
    const text = propertyText(data[key]);
    if (text) return text.slice(0, 80);
  }
  return '';
}
