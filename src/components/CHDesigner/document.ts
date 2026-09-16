import { SOK_LOGO_URL, SOK_THEME } from './brand';
import type { DesignerDocument, Layer, LayerType } from './types';

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
      };
  }
}

export function createSeedDocument(): DesignerDocument {
  const frame = defaultLayerForType('frame', { x: 60, y: 50 });
  frame.name = 'Artboard';
  frame.width = 480;
  frame.height = 360;
  frame.fill = SOK_THEME.secondary;

  const logo = defaultLayerForType('image', { x: 120, y: 130 });
  logo.name = 'SOK logo';
  logo.width = 240;
  logo.height = 80;
  logo.src = SOK_LOGO_URL;
  logo.fill = SOK_THEME.secondary;
  logo.locked = true;

  const text = defaultLayerForType('text', { x: 120, y: 230 });
  text.text = 'S Group';
  text.fontSize = 22;
  text.color = SOK_THEME.primary;
  text.width = 240;
  text.height = 36;
  text.editableContent = true;

  return {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: SOK_THEME.background,
    },
    layers: [frame, logo, text],
  };
}

export function cloneDocument(doc: DesignerDocument): DesignerDocument {
  return JSON.parse(JSON.stringify(doc)) as DesignerDocument;
}

export function parseDesignerDocument(raw: unknown): DesignerDocument | null {
  if (!raw || typeof raw !== 'object') return null;
  const record = raw as Record<string, unknown>;
  if (record.version !== 1) return null;
  if (!record.canvas || typeof record.canvas !== 'object') return null;
  if (!Array.isArray(record.layers)) return null;

  const canvas = record.canvas as Record<string, unknown>;
  const width = Number(canvas.width);
  const height = Number(canvas.height);
  if (!Number.isFinite(width) || !Number.isFinite(height)) return null;

  const layers: Layer[] = [];
  for (const item of record.layers) {
    if (!item || typeof item !== 'object') continue;
    const layer = item as Record<string, unknown>;
    const type = layer.type;
    if (type !== 'frame' && type !== 'rect' && type !== 'text' && type !== 'image') continue;
    const id = typeof layer.id === 'string' ? layer.id : createLayerId();
    const name = typeof layer.name === 'string' ? layer.name : type;
    const x = Number(layer.x);
    const y = Number(layer.y);
    const w = Number(layer.width);
    const h = Number(layer.height);
    if (![x, y, w, h].every(Number.isFinite)) continue;

    const parsed: Layer = {
      id,
      type,
      name,
      x,
      y,
      width: w,
      height: h,
      rotation: typeof layer.rotation === 'number' ? layer.rotation : undefined,
      visible: layer.visible !== false,
      locked: Boolean(layer.locked),
      allowTransform: Boolean(layer.allowTransform),
      fill: typeof layer.fill === 'string' ? layer.fill : undefined,
      text: typeof layer.text === 'string' ? layer.text : undefined,
      fontSize: typeof layer.fontSize === 'number' ? layer.fontSize : undefined,
      color: typeof layer.color === 'string' ? layer.color : undefined,
      src: typeof layer.src === 'string' ? layer.src : undefined,
    };

    if (typeof layer.editableContent === 'boolean') {
      parsed.editableContent = layer.editableContent;
    } else {
      parsed.editableContent = type === 'text' || type === 'image';
    }

    layers.push(parsed);
  }

  return {
    version: 1,
    canvas: {
      width,
      height,
      background: typeof canvas.background === 'string' ? canvas.background : undefined,
    },
    layers,
  };
}
