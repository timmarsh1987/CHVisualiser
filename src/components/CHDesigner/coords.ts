import type { ViewportState } from './types';

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

/** Scale a screen-space delta into canvas units. */
export function screenDeltaToCanvas(
  dx: number,
  dy: number,
  zoom: number
): { dx: number; dy: number } {
  return { dx: dx / zoom, dy: dy / zoom };
}
