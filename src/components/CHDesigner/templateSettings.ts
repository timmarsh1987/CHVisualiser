import { createLayerId } from './document';
import { resolveCanvasPresetId } from './printPresets';
import type {
  DesignerDocument,
  DesignerSettings,
  DesignerTemplatePage,
  Layer,
  LayerRole,
  LayerSlot,
} from './types';

export interface SourceLayerClass {
  role: LayerRole;
  slot?: LayerSlot;
  option?: string;
  direction?: 'ltr' | 'rtl';
}

export function classifySourceLayer(name: string): SourceLayerClass {
  const trimmed = name.trim();
  if (/do not print/i.test(trimmed) || /(^|[^a-z])fpo([^a-z]|$)/i.test(trimmed)) {
    return { role: 'hidden' };
  }

  const brand = trimmed.match(/^(.*?)\s*\((lhs|rhs)\)\s*$/i);
  if (brand) {
    const option = brand[1].trim();
    if (option) {
      return {
        role: 'brand',
        slot: brand[2].toLowerCase() === 'rhs' ? 'rhs' : 'lhs',
        option,
      };
    }
  }

  if (/partner\s*logo\s*picker/i.test(trimmed)) {
    return { role: 'picker', slot: 'partnerLogo' };
  }
  if (/logo\s*picker/i.test(trimmed) || /^logo$/i.test(trimmed)) {
    return { role: 'picker', slot: 'logo' };
  }
  if (/picker/i.test(trimmed)) {
    return { role: 'picker', slot: 'image' };
  }
  if (/arabic/i.test(trimmed)) {
    return { role: 'text', direction: 'rtl' };
  }
  if (/customizable|\bcopy\b|english/i.test(trimmed)) {
    return { role: 'text' };
  }
  return { role: 'static' };
}

export function applySourceLayer(
  layer: Layer,
  source: { id: string; name: string } & SourceLayerClass
): void {
  layer.sourceLayerId = source.id;
  layer.sourceLayerName = source.name;
  layer.role = source.role;
  if (source.slot) layer.slot = source.slot;
  if (source.option) layer.option = source.option;
  if (source.direction) layer.direction = source.direction;

  const lockedRole = source.role === 'static' || source.role === 'hidden' || source.role === 'brand';
  if (lockedRole) {
    layer.locked = true;
    layer.editableContent = false;
    layer.allowTransform = false;
  } else if (source.role === 'text') {
    const editable = layer.type === 'text';
    layer.locked = !editable;
    layer.editableContent = editable;
    layer.allowTransform = false;
  } else if (source.role === 'picker') {
    const editable = layer.type === 'image';
    layer.locked = !editable;
    layer.editableContent = editable;
    layer.allowTransform = false;
  }

  if (source.role === 'brand' && source.option) {
    layer.name = source.option;
  } else if (source.role === 'picker') {
    layer.name =
      source.slot === 'partnerLogo' ? 'Partner logo' : source.slot === 'logo' ? 'Logo' : 'Image';
  }
}

/** Notes, FPO, and brand options that are not selected stay in the file but are not drawn. */
export function layerIsShown(layer: Layer, settings?: DesignerSettings): boolean {
  if (layer.visible === false) return false;
  if (!layer.role && !layer.sourceLayerName) return true;
  if (layer.role === 'hidden') return false;
  if (layer.role === 'brand' && layer.slot && layer.option) {
    const selected = settings?.brands?.[layer.slot];
    if (selected && selected !== layer.option) return false;
  }
  return true;
}

function nextPageName(pages: DesignerTemplatePage[]): string {
  let max = 0;
  for (const page of pages) {
    const match = /^Page (\d+)$/.exec(page.name.trim());
    if (match) max = Math.max(max, Number(match[1]));
  }
  return `Page ${Math.max(max + 1, pages.length + 1)}`;
}

function withPageList(doc: DesignerDocument): DesignerDocument {
  const synced = syncActiveTemplatePage(doc);
  if (synced.pages?.length && synced.activePageId) return synced;
  const id = createLayerId();
  return {
    ...synced,
    activePageId: id,
    pages: [
      {
        id,
        name: 'Page 1',
        width: synced.canvas.width,
        height: synced.canvas.height,
        layers: synced.layers.map((layer) => ({ ...layer })),
      },
    ],
  };
}

export function appendBlankTemplatePage(doc: DesignerDocument): DesignerDocument {
  const base = withPageList(doc);
  const pages = base.pages ?? [];
  const page: DesignerTemplatePage = {
    id: createLayerId(),
    name: nextPageName(pages),
    width: base.canvas.width,
    height: base.canvas.height,
    layers: [],
  };
  return { ...base, pages: [...pages, page] };
}

export function addTemplatePage(doc: DesignerDocument): DesignerDocument {
  const base = withPageList(doc);
  const pages = base.pages ?? [];
  const page: DesignerTemplatePage = {
    id: createLayerId(),
    name: nextPageName(pages),
    width: base.canvas.width,
    height: base.canvas.height,
    layers: [],
  };
  return {
    ...base,
    pages: [...pages, page],
    activePageId: page.id,
    canvas: {
      ...base.canvas,
      width: page.width,
      height: page.height,
      presetId: resolveCanvasPresetId(page.width, page.height),
    },
    layers: [],
  };
}

export function removeActiveTemplatePage(doc: DesignerDocument): DesignerDocument | null {
  const synced = syncActiveTemplatePage(doc);
  if (!synced.pages || synced.pages.length < 2 || !synced.activePageId) return null;
  const index = synced.pages.findIndex((page) => page.id === synced.activePageId);
  if (index < 0) return null;
  const pages = synced.pages.filter((page) => page.id !== synced.activePageId);
  const nextPage = pages[Math.min(index, pages.length - 1)];
  return {
    ...synced,
    pages,
    activePageId: nextPage.id,
    canvas: {
      ...synced.canvas,
      width: nextPage.width,
      height: nextPage.height,
      presetId: resolveCanvasPresetId(nextPage.width, nextPage.height),
    },
    layers: nextPage.layers.map((layer) => ({ ...layer })),
  };
}

export function syncActiveTemplatePage(doc: DesignerDocument): DesignerDocument {
  if (!doc.pages?.length || !doc.activePageId) return doc;
  return {
    ...doc,
    pages: doc.pages.map((page) =>
      page.id === doc.activePageId
        ? { ...page, width: doc.canvas.width, height: doc.canvas.height, layers: doc.layers }
        : page
    ),
  };
}

export interface BrandChoice {
  slot: 'lhs' | 'rhs';
  label: string;
  options: string[];
}

export function brandChoices(doc: DesignerDocument): BrandChoice[] {
  const collected = new Map<'lhs' | 'rhs', string[]>();
  const visit = (layer: Layer) => {
    if (layer.role !== 'brand' || (layer.slot !== 'lhs' && layer.slot !== 'rhs') || !layer.option) {
      return;
    }
    const list = collected.get(layer.slot) ?? [];
    if (!list.includes(layer.option)) list.push(layer.option);
    collected.set(layer.slot, list);
  };
  const pages = doc.pages ?? [];
  if (pages.length > 0) {
    for (const page of pages) {
      for (const layer of page.layers) visit(layer);
    }
  } else {
    for (const layer of doc.layers) visit(layer);
  }

  return (['lhs', 'rhs'] as const)
    .filter((slot) => (collected.get(slot)?.length ?? 0) > 0)
    .map((slot) => ({
      slot,
      label: slot === 'lhs' ? 'Left brand' : 'Right brand',
      options: collected.get(slot) ?? [],
    }));
}

export function defaultBrandSettings(
  layers: Array<{ visible: boolean; role: LayerRole; slot?: LayerSlot; option?: string }>
): Record<string, string> {
  const brands: Record<string, string> = {};
  const fallback: Record<string, string> = {};
  for (const layer of layers) {
    if (layer.role !== 'brand' || (layer.slot !== 'lhs' && layer.slot !== 'rhs') || !layer.option) {
      continue;
    }
    if (!fallback[layer.slot]) fallback[layer.slot] = layer.option;
    if (layer.visible) brands[layer.slot] = layer.option;
  }
  for (const [slot, option] of Object.entries(fallback)) {
    if (!brands[slot]) brands[slot] = option;
  }
  return brands;
}
