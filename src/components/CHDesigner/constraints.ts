import { MIN_LAYER_SIZE, type DesignerDocument, type Layer } from './types';

export const EDGE_EPSILON = 8;

export interface LayerPins {
  left: boolean;
  right: boolean;
  top: boolean;
  bottom: boolean;
}

function near(value: number, target: number): boolean {
  return Math.abs(value - target) <= EDGE_EPSILON;
}

function pinValue(explicit: boolean | undefined, inferred: boolean): boolean {
  if (explicit === true) return true;
  if (explicit === false) return false;
  return inferred;
}

function hasExplicitPins(
  layer: Pick<Layer, 'pinLeft' | 'pinRight' | 'pinTop' | 'pinBottom'>
): boolean {
  return (
    typeof layer.pinLeft === 'boolean' ||
    typeof layer.pinRight === 'boolean' ||
    typeof layer.pinTop === 'boolean' ||
    typeof layer.pinBottom === 'boolean'
  );
}

export function resolveLayerPins(
  layer: Pick<Layer, 'x' | 'y' | 'width' | 'height' | 'pinLeft' | 'pinRight' | 'pinTop' | 'pinBottom'>,
  canvasWidth: number,
  canvasHeight: number
): LayerPins {
  if (hasExplicitPins(layer)) {
    return {
      left: layer.pinLeft === true,
      right: layer.pinRight === true,
      top: layer.pinTop === true,
      bottom: layer.pinBottom === true,
    };
  }
  return {
    left: pinValue(layer.pinLeft, near(layer.x, 0)),
    right: pinValue(layer.pinRight, near(layer.x + layer.width, canvasWidth)),
    top: pinValue(layer.pinTop, near(layer.y, 0)),
    bottom: pinValue(layer.pinBottom, near(layer.y + layer.height, canvasHeight)),
  };
}

/** Keep the layer at its current x/y/size when the page size changes. */
export function pinLayerInPlace(): Partial<Layer> {
  return {
    pinLeft: true,
    pinTop: true,
    pinRight: false,
    pinBottom: false,
  };
}

export function isFullBleed(
  layer: Pick<Layer, 'x' | 'y' | 'width' | 'height' | 'pinLeft' | 'pinRight' | 'pinTop' | 'pinBottom'>,
  canvasWidth: number,
  canvasHeight: number
): boolean {
  const pins = resolveLayerPins(layer, canvasWidth, canvasHeight);
  return pins.left && pins.right && pins.top && pins.bottom;
}

function remapAxis(
  start: number,
  size: number,
  from: number,
  to: number,
  pinStart: boolean,
  pinEnd: boolean
): { start: number; size: number } {
  const startInset = start;
  const endInset = from - start - size;

  if (pinStart && pinEnd) {
    const nextStart = startInset;
    const nextSize = Math.max(MIN_LAYER_SIZE, to - startInset - endInset);
    return { start: nextStart, size: nextSize };
  }

  if (pinStart) {
    return { start: startInset, size };
  }

  if (pinEnd) {
    const nextSize = size;
    return { start: Math.max(0, to - endInset - nextSize), size: nextSize };
  }

  const scale = from === 0 ? 1 : to / from;
  return {
    start: start * scale,
    size: Math.max(MIN_LAYER_SIZE, size * scale),
  };
}

export function remapLayerToCanvas(
  layer: Layer,
  from: { width: number; height: number },
  to: { width: number; height: number }
): Layer {
  if (from.width === to.width && from.height === to.height) return layer;

  const pins = resolveLayerPins(layer, from.width, from.height);
  const xAxis = remapAxis(layer.x, layer.width, from.width, to.width, pins.left, pins.right);
  const yAxis = remapAxis(layer.y, layer.height, from.height, to.height, pins.top, pins.bottom);
  const fullBleed = pins.left && pins.right && pins.top && pins.bottom;

  return {
    ...layer,
    x: xAxis.start,
    y: yAxis.start,
    width: xAxis.size,
    height: yAxis.size,
    objectFit: layer.objectFit ?? (fullBleed && layer.type === 'image' ? 'cover' : layer.objectFit),
  };
}

export function remapDocumentCanvas(
  document: DesignerDocument,
  width: number,
  height: number,
  presetId?: string
): DesignerDocument {
  const from = { width: document.canvas.width, height: document.canvas.height };
  const to = { width, height };
  return {
    ...document,
    canvas: {
      ...document.canvas,
      width,
      height,
      presetId,
    },
    layers: document.layers.map((layer) => remapLayerToCanvas(layer, from, to)),
  };
}

export function fillLayerToCanvas(layer: Layer, canvasWidth: number, canvasHeight: number): Partial<Layer> {
  return {
    x: 0,
    y: 0,
    width: canvasWidth,
    height: canvasHeight,
    pinLeft: true,
    pinRight: true,
    pinTop: true,
    pinBottom: true,
    objectFit: layer.type === 'image' ? layer.objectFit ?? 'cover' : layer.objectFit,
  };
}
