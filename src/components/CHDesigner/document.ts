import epamBlack from '../CHImageComposer/logos/epam-black.png';
import { SOK_THEME } from './brand';
import type {
  DesignerDocument,
  DesignerField,
  DesignerFont,
  DesignerSettings,
  DesignerTemplatePage,
  Layer,
  LayerPageLayout,
  LayerRole,
  LayerSlot,
  LayerType,
} from './types';

function readOptionalBoolean(value: unknown): boolean | undefined {
  return typeof value === 'boolean' ? value : undefined;
}

function readOptionalNumber(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}

function parsePageLayouts(raw: unknown): Record<string, LayerPageLayout> | undefined {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined;
  const layouts: Record<string, LayerPageLayout> = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (!value || typeof value !== 'object') continue;
    const item = value as Record<string, unknown>;
    const x = Number(item.x);
    const y = Number(item.y);
    const width = Number(item.width);
    const height = Number(item.height);
    if (![x, y, width, height].every(Number.isFinite)) continue;
    layouts[key] = {
      x,
      y,
      width,
      height,
      pinLeft: item.pinLeft === true,
      pinRight: item.pinRight === true,
      pinTop: item.pinTop === true,
      pinBottom: item.pinBottom === true,
      marginTop: Number.isFinite(Number(item.marginTop)) ? Math.max(0, Number(item.marginTop)) : 0,
      marginRight: Number.isFinite(Number(item.marginRight)) ? Math.max(0, Number(item.marginRight)) : 0,
      marginBottom: Number.isFinite(Number(item.marginBottom)) ? Math.max(0, Number(item.marginBottom)) : 0,
      marginLeft: Number.isFinite(Number(item.marginLeft)) ? Math.max(0, Number(item.marginLeft)) : 0,
    };
  }
  return Object.keys(layouts).length > 0 ? layouts : undefined;
}

let layerSeq = 1;

export function createLayerId(): string {
  return `layer-${Date.now().toString(36)}-${layerSeq++}`;
}

export function defaultLayerForType(type: LayerType, at?: { x: number; y: number }): Layer {
  const x = at?.x ?? 80;
  const y = at?.y ?? 80;

  switch (type) {
    case 'frame':
      return {
        id: createLayerId(),
        type,
        name: 'Frame',
        x,
        y,
        width: 320,
        height: 240,
        visible: true,
        fill: '#ffffff',
        locked: false,
        allowTransform: false,
        editableContent: false,
      };
    case 'rect':
      return {
        id: createLayerId(),
        type,
        name: 'Rectangle',
        x,
        y,
        width: 160,
        height: 100,
        visible: true,
        fill: SOK_THEME.primary,
        locked: false,
        allowTransform: false,
        editableContent: false,
      };
    case 'text':
      return {
        id: createLayerId(),
        type,
        name: 'Text',
        x,
        y,
        width: 220,
        height: 48,
        visible: true,
        text: 'Double-click to edit',
        flowOverflow: true,
        fontSize: 20,
        color: '#1a1a1a',
        locked: false,
        allowTransform: false,
        editableContent: true,
      };
    case 'image':
      return {
        id: createLayerId(),
        type,
        name: 'Image',
        x,
        y,
        width: 200,
        height: 140,
        visible: true,
        fill: '#e8e6e1',
        src: '',
        locked: false,
        allowTransform: false,
        editableContent: true,
        objectFit: 'cover',
      };
    case 'group':
      return {
        id: createLayerId(),
        type,
        name: 'Group',
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        visible: true,
        locked: false,
      };
  }
}

export function nextGroupName(layers: Layer[]): string {
  const names = new Set(layers.map((layer) => layer.name));
  if (!names.has('Group')) return 'Group';
  let index = 2;
  while (names.has(`Group ${index}`)) index += 1;
  return `Group ${index}`;
}

/** The layer and every item nested inside it. */
export function layerBranchIds(layers: Layer[], rootId: string): string[] {
  const ids = [rootId];
  const walk = (parentId: string) => {
    for (const layer of layers) {
      if (layer.parentId !== parentId) continue;
      ids.push(layer.id);
      if (layer.type === 'group') walk(layer.id);
    }
  };
  walk(rootId);
  return ids;
}

export function createSeedDocument(): DesignerDocument {
  const frame = defaultLayerForType('frame', { x: 60, y: 50 });
  frame.name = 'Artboard';
  frame.width = 480;
  frame.height = 360;
  frame.fill = SOK_THEME.secondary;

  const logo = defaultLayerForType('image', { x: 120, y: 140 });
  logo.name = 'Logo';
  logo.width = 240;
  logo.height = 80;
  logo.src = epamBlack;
  logo.objectFit = 'contain';
  logo.fill = '#ffffff';
  logo.locked = true;

  return {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: SOK_THEME.background,
    },
    layers: [frame, logo],
  };
}

export function cloneDocument(doc: DesignerDocument): DesignerDocument {
  return JSON.parse(JSON.stringify(doc)) as DesignerDocument;
}

/** New ids for a paste. Text continuations stay linked only inside the copied set. */
export function duplicateLayers(layers: Layer[], offset = 0): Layer[] {
  const clones = JSON.parse(JSON.stringify(layers)) as Layer[];
  const idMap = new Map<string, string>();
  for (const layer of clones) {
    const nextId = createLayerId();
    idMap.set(layer.id, nextId);
    layer.id = nextId;
    if (!offset) continue;
    layer.x += offset;
    layer.y += offset;
    if (!layer.pageLayouts) continue;
    for (const layout of Object.values(layer.pageLayouts)) {
      layout.x += offset;
      layout.y += offset;
    }
  }
  for (const layer of clones) {
    if (layer.continuesFrom) {
      const mapped = idMap.get(layer.continuesFrom);
      if (mapped) layer.continuesFrom = mapped;
      else delete layer.continuesFrom;
    }
    if (layer.parentId) {
      const mapped = idMap.get(layer.parentId);
      if (mapped) layer.parentId = mapped;
      else delete layer.parentId;
    }
  }
  return clones;
}

const LAYER_ROLES = new Set<LayerRole>(['static', 'text', 'brand', 'picker', 'hidden']);
const LAYER_SLOTS = new Set<LayerSlot>(['lhs', 'rhs', 'image', 'logo', 'partnerLogo']);

function parseLayer(item: unknown): Layer | null {
  if (!item || typeof item !== 'object') return null;
  const layer = item as Record<string, unknown>;
  const type = layer.type;
  if (type !== 'frame' && type !== 'rect' && type !== 'text' && type !== 'image' && type !== 'group') {
    return null;
  }
  const isGroup = type === 'group';
  const id = typeof layer.id === 'string' ? layer.id : createLayerId();
  const name = typeof layer.name === 'string' ? layer.name : type;
  const x = Number(layer.x);
  const y = Number(layer.y);
  const w = Number(layer.width);
  const h = Number(layer.height);
  if (!isGroup && ![x, y, w, h].every(Number.isFinite)) return null;

  const parsed: Layer = {
    id,
    type,
    name,
    x: isGroup ? 0 : x,
    y: isGroup ? 0 : y,
    width: isGroup ? 1 : w,
    height: isGroup ? 1 : h,
    rotation: typeof layer.rotation === 'number' ? layer.rotation : undefined,
    visible: layer.visible !== false,
    locked: Boolean(layer.locked),
    lockToCanvas: layer.lockToCanvas === true ? true : undefined,
    allowTransform: Boolean(layer.allowTransform),
    fill: typeof layer.fill === 'string' ? layer.fill : undefined,
    stroke: typeof layer.stroke === 'string' ? layer.stroke : undefined,
    strokeWidth: readOptionalNumber(layer.strokeWidth),
    text: typeof layer.text === 'string' ? layer.text : undefined,
    flowText: typeof layer.flowText === 'string' ? layer.flowText : undefined,
    flowOverflow: readOptionalBoolean(layer.flowOverflow),
    continuesFrom: typeof layer.continuesFrom === 'string' ? layer.continuesFrom : undefined,
    fontSize: typeof layer.fontSize === 'number' ? layer.fontSize : undefined,
    fontFamily: typeof layer.fontFamily === 'string' && layer.fontFamily.trim() ? layer.fontFamily : undefined,
    fontWeight: readOptionalNumber(layer.fontWeight),
    fontStyle: layer.fontStyle === 'italic' || layer.fontStyle === 'normal' ? layer.fontStyle : undefined,
    align:
      layer.align === 'left' || layer.align === 'middle' || layer.align === 'right'
        ? layer.align
        : layer.align === 'center'
          ? 'middle'
          : undefined,
    dynamicSize: readOptionalBoolean(layer.dynamicSize),
    color: typeof layer.color === 'string' ? layer.color : undefined,
    src: typeof layer.src === 'string' ? layer.src : undefined,
    pinLeft: readOptionalBoolean(layer.pinLeft),
    pinRight: readOptionalBoolean(layer.pinRight),
    pinTop: readOptionalBoolean(layer.pinTop),
    pinBottom: readOptionalBoolean(layer.pinBottom),
    marginTop: readOptionalNumber(layer.marginTop),
    marginRight: readOptionalNumber(layer.marginRight),
    marginBottom: readOptionalNumber(layer.marginBottom),
    marginLeft: readOptionalNumber(layer.marginLeft),
    pageLayouts: parsePageLayouts(layer.pageLayouts),
    objectFit: layer.objectFit === 'contain' || layer.objectFit === 'cover' ? layer.objectFit : undefined,
    sourceLayerId: typeof layer.sourceLayerId === 'string' ? layer.sourceLayerId : undefined,
    sourceLayerName: typeof layer.sourceLayerName === 'string' ? layer.sourceLayerName : undefined,
    role: typeof layer.role === 'string' && LAYER_ROLES.has(layer.role as LayerRole) ? (layer.role as LayerRole) : undefined,
    slot: typeof layer.slot === 'string' && LAYER_SLOTS.has(layer.slot as LayerSlot) ? (layer.slot as LayerSlot) : undefined,
    option: typeof layer.option === 'string' ? layer.option : undefined,
    direction: layer.direction === 'rtl' || layer.direction === 'ltr' ? layer.direction : undefined,
    fieldId: typeof layer.fieldId === 'string' && layer.fieldId ? layer.fieldId : undefined,
    parentId:
      typeof layer.parentId === 'string' && layer.parentId && layer.parentId !== id
        ? layer.parentId
        : undefined,
  };

  if (typeof layer.editableContent === 'boolean') {
    parsed.editableContent = layer.editableContent;
  } else {
    parsed.editableContent = type === 'text' || type === 'image';
  }

  return parsed;
}

function parseLayers(raw: unknown): Layer[] {
  if (!Array.isArray(raw)) return [];
  const layers: Layer[] = [];
  for (const item of raw) {
    const layer = parseLayer(item);
    if (layer) layers.push(layer);
  }
  return layers;
}

function parseTemplatePages(raw: unknown): DesignerTemplatePage[] | undefined {
  if (!Array.isArray(raw)) return undefined;
  const pages: DesignerTemplatePage[] = [];
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue;
    const page = item as Record<string, unknown>;
    const width = Number(page.width);
    const height = Number(page.height);
    if (!Number.isFinite(width) || !Number.isFinite(height)) continue;
    const id = typeof page.id === 'string' && page.id ? page.id : createLayerId();
    const name = typeof page.name === 'string' && page.name ? page.name : `Page ${pages.length + 1}`;
    pages.push({ id, name, width, height, layers: parseLayers(page.layers) });
  }
  return pages.length > 0 ? pages : undefined;
}

function parseFont(item: unknown): DesignerFont | null {
  if (!item || typeof item !== 'object') return null;
  const font = item as Record<string, unknown>;
  const family = typeof font.family === 'string' ? font.family.trim() : '';
  const postScriptName = typeof font.postScriptName === 'string' ? font.postScriptName.trim() : '';
  const dataUrl = typeof font.dataUrl === 'string' ? font.dataUrl : '';
  if (!family || !postScriptName || !dataUrl.startsWith('data:')) return null;
  const weight = Number(font.weight);
  return {
    id: typeof font.id === 'string' && font.id ? font.id : `font-${family}`,
    family,
    postScriptName,
    weight: Number.isFinite(weight) && weight >= 1 && weight <= 1000 ? weight : 400,
    style: font.style === 'italic' ? 'italic' : 'normal',
    dataUrl,
  };
}

function parseSettings(raw: unknown): DesignerSettings | undefined {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined;
  const record = raw as Record<string, unknown>;
  const brands: Record<string, string> = {};
  if (record.brands && typeof record.brands === 'object' && !Array.isArray(record.brands)) {
    for (const [slot, option] of Object.entries(record.brands as Record<string, unknown>)) {
      if (typeof option === 'string' && option) brands[slot] = option;
    }
  }
  const fonts = Array.isArray(record.fonts)
    ? record.fonts.map(parseFont).filter((font): font is DesignerFont => font != null)
    : [];
  if (Object.keys(brands).length === 0 && fonts.length === 0) return undefined;
  const settings: DesignerSettings = { brands };
  if (fonts.length > 0) settings.fonts = fonts;
  return settings;
}

function parseFields(raw: unknown): DesignerField[] | undefined {
  if (!Array.isArray(raw)) return undefined;
  const fields: DesignerField[] = [];
  const keys = new Set<string>();
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue;
    const field = item as Record<string, unknown>;
    if (typeof field.id !== 'string' || !field.id) continue;
    if (typeof field.key !== 'string' || !field.key || keys.has(field.key)) continue;
    if (typeof field.label !== 'string' || !field.label) continue;
    keys.add(field.key);
    const parsed: DesignerField = { id: field.id, key: field.key, label: field.label };
    if (field.kind === 'image') parsed.kind = 'image';
    if (field.source && typeof field.source === 'object' && !Array.isArray(field.source)) {
      const path = (field.source as Record<string, unknown>).path;
      if (typeof path === 'string') parsed.source = { path: path.trim() };
    }
    if (typeof field.csvColumn === 'string') parsed.csvColumn = field.csvColumn.trim();
    fields.push(parsed);
  }
  return fields.length > 0 ? fields : undefined;
}

export function parseDesignerDocument(raw: unknown): DesignerDocument | null {
  if (!raw || typeof raw !== 'object') return null;
  const record = raw as Record<string, unknown>;
  if (record.version !== 1) return null;
  if (!record.canvas || typeof record.canvas !== 'object') return null;
  if (!Array.isArray(record.layers)) return null;

  const canvas = record.canvas as Record<string, unknown>;
  let width = Number(canvas.width);
  let height = Number(canvas.height);
  if (!Number.isFinite(width) || !Number.isFinite(height)) return null;

  const layers = parseLayers(record.layers);
  const pages = parseTemplatePages(record.pages);
  let activePageId = typeof record.activePageId === 'string' ? record.activePageId : undefined;
  if (pages?.length) {
    if (!activePageId || !pages.some((page) => page.id === activePageId)) {
      activePageId = pages[0].id;
    }
    const active = pages.find((page) => page.id === activePageId);
    if (active && layers.length > 0) {
      active.layers = layers;
      active.width = width;
      active.height = height;
    } else if (active && layers.length === 0 && active.layers.length > 0) {
      layers.push(...active.layers);
      width = active.width;
      height = active.height;
    }
  }

  const document: DesignerDocument = {
    version: 1,
    canvas: {
      width,
      height,
      background: typeof canvas.background === 'string' ? canvas.background : undefined,
      presetId: typeof canvas.presetId === 'string' ? canvas.presetId : undefined,
    },
    layers,
  };
  if (pages) {
    document.pages = pages;
    document.activePageId = activePageId;
  }
  const settings = parseSettings(record.settings);
  if (settings) document.settings = settings;
  const fields = parseFields(record.fields);
  if (fields) document.fields = fields;
  return document;
}
