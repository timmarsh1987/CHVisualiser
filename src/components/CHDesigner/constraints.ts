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

export { hasExplicitPins };

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

function readMargin(
  layer: Pick<Layer, 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'>,
  key: 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'
): number {
  const value = layer[key];
  return typeof value === 'number' && Number.isFinite(value) ? Math.max(0, value) : 0;
}

/** Stick the layer to its pinned edges using margins. */
export function applyEdgePins(
  layer: Layer,
  canvasWidth: number,
  canvasHeight: number
): { x: number; y: number; width: number; height: number } {
  const pins = resolveLayerPins(layer, canvasWidth, canvasHeight);
  const marginTop = readMargin(layer, 'marginTop');
  const marginRight = readMargin(layer, 'marginRight');
  const marginBottom = readMargin(layer, 'marginBottom');
  const marginLeft = readMargin(layer, 'marginLeft');

  let x = layer.x;
  let y = layer.y;
  let width = layer.width;
  let height = layer.height;

  if (pins.left && pins.right) {
    x = marginLeft;
    width = Math.max(MIN_LAYER_SIZE, canvasWidth - marginLeft - marginRight);
  } else if (pins.left) {
    x = marginLeft;
  } else if (pins.right) {
    x = canvasWidth - marginRight - width;
  }

  if (pins.top && pins.bottom) {
    y = marginTop;
    height = Math.max(MIN_LAYER_SIZE, canvasHeight - marginTop - marginBottom);
  } else if (pins.top) {
    y = marginTop;
  } else if (pins.bottom) {
    y = canvasHeight - marginBottom - height;
  }

  return { x, y, width, height };
}

export interface PlacedBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CanvasSnapGuide {
  axis: 'x' | 'y';
  /** Page position of the guide, in canvas pixels. */
  at: number;
}

/** How close the pointer must be, on screen, before a page guide catches the box. */
const SNAP_SCREEN_PX = 6;

function snapThreshold(zoom: number): number {
  return SNAP_SCREEN_PX / Math.max(zoom, 0.05);
}

function pageLines(size: number): number[] {
  return [0, size / 2, size];
}

interface EdgeSnap {
  start: number;
  size: number;
  jump: number;
  at: number;
}

function takeCloser(best: EdgeSnap | null, next: EdgeSnap, threshold: number): EdgeSnap | null {
  if (next.size < MIN_LAYER_SIZE) return best;
  if (Math.abs(next.jump) > threshold) return best;
  if (!best || Math.abs(next.jump) < Math.abs(best.jump)) return next;
  return best;
}

/** Snap one moving edge, or the box center, to a page edge or the page center. */
function snapMovingEdge(
  fixedStart: number,
  size: number,
  pageSize: number,
  moving: 'start' | 'end',
  threshold: number
): EdgeSnap | null {
  const end = fixedStart + size;
  const movingAt = moving === 'end' ? end : fixedStart;
  const mid = pageSize / 2;
  let best: EdgeSnap | null = null;

  for (const at of pageLines(pageSize)) {
    if (moving === 'end') {
      best = takeCloser(best, { start: fixedStart, size: at - fixedStart, jump: at - movingAt, at }, threshold);
    } else {
      best = takeCloser(best, { start: at, size: end - at, jump: at - movingAt, at }, threshold);
    }
  }

  if (moving === 'end') {
    const nextSize = 2 * (mid - fixedStart);
    best = takeCloser(best, { start: fixedStart, size: nextSize, jump: nextSize - size, at: mid }, threshold);
  } else {
    const nextStart = 2 * mid - end;
    best = takeCloser(
      best,
      { start: nextStart, size: end - nextStart, jump: nextStart - fixedStart, at: mid },
      threshold
    );
  }

  return best;
}

/**
 * Slide a box so its left, center, or right meets the page's left, center, or right,
 * and the same for the top and bottom.
 */
export function snapMoveToCanvas(
  box: PlacedBox,
  canvasWidth: number,
  canvasHeight: number,
  zoom: number
): PlacedBox {
  const threshold = snapThreshold(zoom);
  let { x, y, width, height } = box;

  let bestX: { delta: number } | null = null;
  const xPairs: Array<[number, number]> = [
    [x, 0],
    [x + width / 2, canvasWidth / 2],
    [x + width, canvasWidth],
  ];
  for (const [anchor, at] of xPairs) {
    const delta = at - anchor;
    if (Math.abs(delta) > threshold) continue;
    if (!bestX || Math.abs(delta) < Math.abs(bestX.delta)) bestX = { delta };
  }
  if (bestX) x += bestX.delta;

  let bestY: { delta: number } | null = null;
  const yPairs: Array<[number, number]> = [
    [y, 0],
    [y + height / 2, canvasHeight / 2],
    [y + height, canvasHeight],
  ];
  for (const [anchor, at] of yPairs) {
    const delta = at - anchor;
    if (Math.abs(delta) > threshold) continue;
    if (!bestY || Math.abs(delta) < Math.abs(bestY.delta)) bestY = { delta };
  }
  if (bestY) y += bestY.delta;

  return { x, y, width, height };
}

/** Snap the edges being scaled to the page edges or the page center. The opposite edge stays put. */
export function snapResizeToCanvas(
  box: PlacedBox,
  canvasWidth: number,
  canvasHeight: number,
  zoom: number,
  handle: 'nw' | 'ne' | 'sw' | 'se'
): PlacedBox {
  const threshold = snapThreshold(zoom);
  let { x, y, width, height } = box;
  const freeLeft = handle.includes('w');
  const freeTop = handle.includes('n');

  const horizontal = snapMovingEdge(x, width, canvasWidth, freeLeft ? 'start' : 'end', threshold);
  if (horizontal) {
    x = horizontal.start;
    width = horizontal.size;
  }

  const vertical = snapMovingEdge(y, height, canvasHeight, freeTop ? 'start' : 'end', threshold);
  if (vertical) {
    y = vertical.start;
    height = vertical.size;
  }

  return { x, y, width, height };
}

/** Guides for a box that is already sitting on a page edge or the page center. */
export function canvasGuidesForBox(
  box: PlacedBox,
  canvasWidth: number,
  canvasHeight: number
): CanvasSnapGuide[] {
  const guides: CanvasSnapGuide[] = [];
  const aligned = (value: number, at: number) => Math.abs(value - at) <= 0.5;
  for (const at of pageLines(canvasWidth)) {
    if (aligned(box.x, at) || aligned(box.x + box.width / 2, at) || aligned(box.x + box.width, at)) {
      guides.push({ axis: 'x', at });
    }
  }
  for (const at of pageLines(canvasHeight)) {
    if (aligned(box.y, at) || aligned(box.y + box.height / 2, at) || aligned(box.y + box.height, at)) {
      guides.push({ axis: 'y', at });
    }
  }
  return guides;
}

type PinMargins = Pick<
  Layer,
  'pinLeft' | 'pinRight' | 'pinTop' | 'pinBottom' | 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'
>;

/** Keep a box from crossing a pinned page edge. Opposite pins lock that axis to the margins. */
export function clampBoxToPins(
  box: PlacedBox,
  layer: PinMargins,
  canvasWidth: number,
  canvasHeight: number,
  mode: 'move' | 'resize'
): PlacedBox {
  const left = layer.pinLeft === true;
  const right = layer.pinRight === true;
  const top = layer.pinTop === true;
  const bottom = layer.pinBottom === true;
  const marginLeft = readMargin(layer, 'marginLeft');
  const marginRight = readMargin(layer, 'marginRight');
  const marginTop = readMargin(layer, 'marginTop');
  const marginBottom = readMargin(layer, 'marginBottom');

  let { x, y, width, height } = box;

  if (left && right) {
    x = marginLeft;
    width = Math.max(MIN_LAYER_SIZE, canvasWidth - marginLeft - marginRight);
  } else if (mode === 'move') {
    if (left) x = Math.max(marginLeft, x);
    if (right) x = Math.min(x, canvasWidth - marginRight - width);
  } else {
    if (left && x < marginLeft) {
      width = Math.max(MIN_LAYER_SIZE, width - (marginLeft - x));
      x = marginLeft;
    }
    if (right && x + width > canvasWidth - marginRight) {
      width = Math.max(MIN_LAYER_SIZE, canvasWidth - marginRight - x);
    }
  }

  if (top && bottom) {
    y = marginTop;
    height = Math.max(MIN_LAYER_SIZE, canvasHeight - marginTop - marginBottom);
  } else if (mode === 'move') {
    if (top) y = Math.max(marginTop, y);
    if (bottom) y = Math.min(y, canvasHeight - marginBottom - height);
  } else {
    if (top && y < marginTop) {
      height = Math.max(MIN_LAYER_SIZE, height - (marginTop - y));
      y = marginTop;
    }
    if (bottom && y + height > canvasHeight - marginBottom) {
      height = Math.max(MIN_LAYER_SIZE, canvasHeight - marginBottom - y);
    }
  }

  return { x, y, width, height };
}

/**
 * Keep a box on the page.
 * Move slides it until an edge meets the canvas. Resize stops the edge being dragged.
 */
export function clampBoxInsideCanvas(
  box: PlacedBox,
  canvasWidth: number,
  canvasHeight: number,
  mode: 'move' | 'resize'
): PlacedBox {
  const pageWidth = Math.max(0, canvasWidth);
  const pageHeight = Math.max(0, canvasHeight);

  if (mode === 'move') {
    const width = Math.min(Math.max(0, box.width), pageWidth);
    const height = Math.min(Math.max(0, box.height), pageHeight);
    return {
      x: Math.min(Math.max(0, box.x), Math.max(0, pageWidth - width)),
      y: Math.min(Math.max(0, box.y), Math.max(0, pageHeight - height)),
      width,
      height,
    };
  }

  let x = box.x;
  let y = box.y;
  let width = box.width;
  let height = box.height;

  if (x < 0) {
    width += x;
    x = 0;
  }
  if (y < 0) {
    height += y;
    y = 0;
  }
  if (x + width > pageWidth) width = pageWidth - x;
  if (y + height > pageHeight) height = pageHeight - y;

  if (pageWidth >= MIN_LAYER_SIZE) width = Math.max(MIN_LAYER_SIZE, width);
  if (pageHeight >= MIN_LAYER_SIZE) height = Math.max(MIN_LAYER_SIZE, height);

  if (x + width > pageWidth) x = Math.max(0, pageWidth - width);
  if (y + height > pageHeight) y = Math.max(0, pageHeight - height);
  if (width > pageWidth) {
    x = 0;
    width = pageWidth;
  }
  if (height > pageHeight) {
    y = 0;
    height = pageHeight;
  }

  return { x, y, width, height };
}

type PlacedLayer = PinMargins & { lockToCanvas?: boolean };

/** Pins first, then keep the box on the page when the layer is locked to the canvas. */
export function constrainPlacedBox(
  box: PlacedBox,
  layer: PlacedLayer,
  canvasWidth: number,
  canvasHeight: number,
  mode: 'move' | 'resize'
): PlacedBox {
  const pinned = clampBoxToPins(box, layer, canvasWidth, canvasHeight, mode);
  if (layer.lockToCanvas !== true) return pinned;
  return clampBoxInsideCanvas(pinned, canvasWidth, canvasHeight, mode);
}

/** Pull a locked layer fully onto the page. Other layers are unchanged. */
export function keepLockedLayerOnCanvas(layer: Layer, canvasWidth: number, canvasHeight: number): Layer {
  if (layer.lockToCanvas !== true || layer.type === 'group') return layer;
  return {
    ...layer,
    ...clampBoxInsideCanvas(
      { x: layer.x, y: layer.y, width: layer.width, height: layer.height },
      canvasWidth,
      canvasHeight,
      'move'
    ),
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

  if (hasExplicitPins(layer)) {
    return keepLockedLayerOnCanvas(
      {
        ...layer,
        ...applyEdgePins(layer, to.width, to.height),
      },
      to.width,
      to.height
    );
  }

  const pins = resolveLayerPins(layer, from.width, from.height);
  const xAxis = remapAxis(layer.x, layer.width, from.width, to.width, pins.left, pins.right);
  const yAxis = remapAxis(layer.y, layer.height, from.height, to.height, pins.top, pins.bottom);
  const fullBleed = pins.left && pins.right && pins.top && pins.bottom;

  return keepLockedLayerOnCanvas(
    {
      ...layer,
      x: xAxis.start,
      y: yAxis.start,
      width: xAxis.size,
      height: yAxis.size,
      objectFit: layer.objectFit ?? (fullBleed && layer.type === 'image' ? 'cover' : layer.objectFit),
    },
    to.width,
    to.height
  );
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
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    objectFit: layer.type === 'image' ? layer.objectFit ?? 'cover' : layer.objectFit,
  };
}
