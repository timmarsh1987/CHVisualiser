import { MAX_ZOOM, MIN_ZOOM, type ViewportState } from './types';

/** Space left around a fitted page or a revealed layer. */
export const VIEWPORT_GAP = 48;

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** Convert a client (screen) point to canvas coordinates. */
export function screenToCanvas(
  clientX: number,
  clientY: number,
  viewportRect: DOMRect,
  viewport: ViewportState
): { x: number; y: number } {
  return {
    x: (clientX - viewportRect.left - viewport.panX) / viewport.zoom,
    y: (clientY - viewportRect.top - viewport.panY) / viewport.zoom,
  };
}

/** Keep the canvas point under a screen anchor fixed while zoom changes. */
export function zoomAroundPoint(
  viewport: Pick<ViewportState, 'zoom' | 'panX' | 'panY'>,
  nextZoom: number,
  anchorX: number,
  anchorY: number
): Pick<ViewportState, 'zoom' | 'panX' | 'panY'> {
  const zoom = clamp(nextZoom, MIN_ZOOM, MAX_ZOOM);
  const safeZoom = viewport.zoom > 0 ? viewport.zoom : 1;
  const canvasX = (anchorX - viewport.panX) / safeZoom;
  const canvasY = (anchorY - viewport.panY) / safeZoom;
  return {
    zoom,
    panX: anchorX - canvasX * zoom,
    panY: anchorY - canvasY * zoom,
  };
}

/** Scale a screen-space delta into canvas units. */
export function screenDeltaToCanvas(
  dx: number,
  dy: number,
  zoom: number
): { dx: number; dy: number } {
  return { dx: dx / zoom, dy: dy / zoom };
}

export interface ViewBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Scale and center a page so it fills the stage and keeps a gap on every side. */
export function fitPageInView(
  pageWidth: number,
  pageHeight: number,
  viewWidth: number,
  viewHeight: number,
  gap = VIEWPORT_GAP
): Pick<ViewportState, 'zoom' | 'panX' | 'panY'> {
  const availW = Math.max(1, viewWidth - gap * 2);
  const availH = Math.max(1, viewHeight - gap * 2);
  const zoom = clamp(
    Math.min(availW / Math.max(pageWidth, 1), availH / Math.max(pageHeight, 1)),
    MIN_ZOOM,
    MAX_ZOOM
  );
  return {
    zoom,
    panX: (viewWidth - pageWidth * zoom) / 2,
    panY: (viewHeight - pageHeight * zoom) / 2,
  };
}

/**
 * Pan, and zoom out only when needed, so a layer box sits fully inside the stage.
 * A box that is already inside the gap is left where it is.
 */
export function revealBoxInView(
  box: ViewBox,
  viewport: Pick<ViewportState, 'zoom' | 'panX' | 'panY'>,
  viewWidth: number,
  viewHeight: number,
  gap = VIEWPORT_GAP
): Pick<ViewportState, 'zoom' | 'panX' | 'panY'> {
  const availW = Math.max(1, viewWidth - gap * 2);
  const availH = Math.max(1, viewHeight - gap * 2);
  let zoom = viewport.zoom;
  if (box.width * zoom > availW || box.height * zoom > availH) {
    zoom = clamp(
      Math.min(availW / Math.max(box.width, 1), availH / Math.max(box.height, 1)),
      MIN_ZOOM,
      viewport.zoom
    );
  }

  if (zoom !== viewport.zoom) {
    return {
      zoom,
      panX: (viewWidth - box.width * zoom) / 2 - box.x * zoom,
      panY: (viewHeight - box.height * zoom) / 2 - box.y * zoom,
    };
  }

  let panX = viewport.panX;
  let panY = viewport.panY;
  const left = panX + box.x * zoom;
  const top = panY + box.y * zoom;
  const right = left + box.width * zoom;
  const bottom = top + box.height * zoom;

  if (left < gap) panX += gap - left;
  else if (right > viewWidth - gap) panX -= right - (viewWidth - gap);

  if (top < gap) panY += gap - top;
  else if (bottom > viewHeight - gap) panY -= bottom - (viewHeight - gap);

  return { zoom, panX, panY };
}
