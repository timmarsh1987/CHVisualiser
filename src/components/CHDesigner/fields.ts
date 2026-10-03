import { cloneDocument, createLayerId } from './document';
import { syncActiveTemplatePage } from './templateSettings';
import { reflowTextStory } from './textFlow';
import type { DesignerDocument, DesignerField, Layer } from './types';

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
  const used = new Set(fields.map((field) => field.key));
  for (const layers of layerLists(copy)) {
    for (const layer of layers) {
      if (!canTakeField(layer)) continue;
      const label = fieldLabelFromText(layer.text, layer.name);
      const key = uniqueKey(slugFieldKey(label), used);
      const field: DesignerField = { id: `field-${createLayerId()}`, key, label };
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
 * Copy the document and replace each bound story with its entered value.
 * An empty value leaves the sample. Overflow then uses the existing text reflow.
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
      if (!layer.fieldId || layer.continuesFrom) continue;
      const value = filled[layer.fieldId];
      if (value === undefined || (layer.text || '') === value) continue;
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
