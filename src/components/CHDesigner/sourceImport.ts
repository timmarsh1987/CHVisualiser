import { createLayerId } from './document';
import { assignMagicStrings } from './fields';
import { resolveCanvasPresetId } from './printPresets';
import {
  applySourceLayer,
  classifySourceLayer,
  defaultBrandSettings,
  type SourceLayerClass,
} from './templateSettings';
import type { DesignerDocument, DesignerTemplatePage, Layer, LayerType, TextAlign } from './types';

export interface SourceImportResult {
  document: DesignerDocument;
  pageCount: number;
}

type NamedSource = { id: string; name: string } & SourceLayerClass;

export function importedLayer(
  type: LayerType,
  name: string,
  box: { x: number; y: number; width: number; height: number },
  parentId?: string
): Layer {
  const layer: Layer = {
    id: createLayerId(),
    type,
    name: name.trim() || type,
    x: Math.round(box.x),
    y: Math.round(box.y),
    width: Math.max(1, Math.round(box.width)),
    height: Math.max(1, Math.round(box.height)),
    visible: true,
    locked: false,
    allowTransform: false,
    editableContent: type === 'text' || type === 'image',
  };
  if (parentId) layer.parentId = parentId;
  return layer;
}

/** Brand, picker, and copy names keep the same meaning as an InDesign import. */
export function namedSource(name: string): NamedSource | null {
  const classified = classifySourceLayer(name);
  if (classified.role === 'static' && !classified.direction) return null;
  return { id: name, name, ...classified };
}

export function applyImportedName(layer: Layer, name: string, inherited?: NamedSource | null): void {
  const source = namedSource(name) ?? inherited ?? null;
  if (source) applySourceLayer(layer, source);
}

export function textAlignFrom(value: string | undefined): TextAlign | undefined {
  const align = (value || '').toLowerCase();
  if (align === 'center' || align === 'middle' || align === 'justify-center') return 'middle';
  if (align === 'right' || align === 'justify-right') return 'right';
  if (align === 'left' || align === 'justify-left' || align === 'justify-all') return 'left';
  return undefined;
}

export function buildImportedDocument(pages: DesignerTemplatePage[]): DesignerDocument {
  if (pages.length === 0) {
    throw new Error('This file has no pages to import.');
  }
  const active = pages[0];
  const brands = defaultBrandSettings(
    pages.flatMap((page) =>
      page.layers.map((layer) => ({
        visible: layer.visible,
        role: layer.role ?? 'static',
        slot: layer.slot,
        option: layer.option,
      }))
    )
  );
  const document: DesignerDocument = {
    version: 1,
    canvas: {
      width: active.width,
      height: active.height,
      background: '#ffffff',
      presetId: resolveCanvasPresetId(active.width, active.height),
    },
    layers: active.layers,
    pages,
    activePageId: active.id,
  };
  if (Object.keys(brands).length > 0) {
    document.settings = { brands };
  }
  return assignMagicStrings(document);
}
