import { CANVAS_PRESETS, resolveCanvasPresetId } from './printPresets';
import { applyEdgePins, hasExplicitPins, remapLayerToCanvas } from './constraints';
import type { DesignerCanvasSize, DesignerDocument, Layer, LayerPageLayout } from './types';

export type PinKey = 'pinTop' | 'pinLeft' | 'pinRight' | 'pinBottom';
export type MarginKey = 'marginTop' | 'marginLeft' | 'marginRight' | 'marginBottom';

export function pageLayoutKey(canvas: Pick<DesignerCanvasSize, 'width' | 'height' | 'presetId'>): string {
  const id = resolveCanvasPresetId(canvas.width, canvas.height, canvas.presetId);
  if (id !== 'custom') return id;
  return `${Math.round(canvas.width)}x${Math.round(canvas.height)}`;
}

export function readMargin(layer: Layer, key: MarginKey): number {
  const value = layer[key];
  return typeof value === 'number' && Number.isFinite(value) ? Math.max(0, value) : 0;
}

export function snapshotPageLayout(layer: Layer): LayerPageLayout {
  return {
    x: layer.x,
    y: layer.y,
    width: layer.width,
    height: layer.height,
    pinLeft: layer.pinLeft === true,
    pinRight: layer.pinRight === true,
    pinTop: layer.pinTop === true,
    pinBottom: layer.pinBottom === true,
    marginTop: readMargin(layer, 'marginTop'),
    marginRight: readMargin(layer, 'marginRight'),
    marginBottom: readMargin(layer, 'marginBottom'),
    marginLeft: readMargin(layer, 'marginLeft'),
  };
}

export function applyPageLayout(layout: LayerPageLayout): Partial<Layer> {
  return { ...layout };
}

function withCurrentPageSnapshot(layer: Layer, canvas: DesignerCanvasSize): Layer {
  const key = pageLayoutKey(canvas);
  return {
    ...layer,
    pageLayouts: {
      ...layer.pageLayouts,
      [key]: snapshotPageLayout(layer),
    },
  };
}

export function persistCurrentPageLayout(layer: Layer, canvas: DesignerCanvasSize): Layer {
  return withCurrentPageSnapshot(layer, canvas);
}

export function toggleLayerPin(
  layer: Layer,
  key: PinKey,
  enabled: boolean,
  canvasWidth: number,
  canvasHeight: number
): Partial<Layer> {
  const pins = {
    pinTop: layer.pinTop === true,
    pinLeft: layer.pinLeft === true,
    pinRight: layer.pinRight === true,
    pinBottom: layer.pinBottom === true,
    [key]: enabled,
  };
  const next: Layer = { ...layer, ...pins };
  return {
    ...pins,
    ...applyEdgePins(next, canvasWidth, canvasHeight),
  };
}

export function setLayerMargin(
  layer: Layer,
  key: MarginKey,
  value: number,
  canvasWidth: number,
  canvasHeight: number
): Partial<Layer> {
  const margin = Math.max(0, Number.isFinite(value) ? value : 0);
  const next: Layer = { ...layer, [key]: margin };
  if (!hasExplicitPins(next)) {
    return { [key]: margin };
  }
  return {
    [key]: margin,
    ...applyEdgePins(next, canvasWidth, canvasHeight),
  };
}

export function pinLayerInPlace(layer: Layer, canvasWidth: number, canvasHeight: number): Partial<Layer> {
  return {
    pinLeft: true,
    pinTop: true,
    pinRight: false,
    pinBottom: false,
    marginLeft: Math.max(0, layer.x),
    marginTop: Math.max(0, layer.y),
    marginRight: Math.max(0, canvasWidth - layer.x - layer.width),
    marginBottom: Math.max(0, canvasHeight - layer.y - layer.height),
  };
}

export function pushLayerToAllPages(layer: Layer, canvas: DesignerCanvasSize): Partial<Layer> {
  const current = snapshotPageLayout(layer);
  const pageLayouts: Record<string, LayerPageLayout> = { ...(layer.pageLayouts ?? {}) };
  pageLayouts[pageLayoutKey(canvas)] = current;

  const sizes = [
    ...CANVAS_PRESETS.map((preset) => ({
      key: preset.id,
      width: preset.width,
      height: preset.height,
    })),
    { key: pageLayoutKey(canvas), width: canvas.width, height: canvas.height },
  ];

  const seen = new Set<string>();
  for (const size of sizes) {
    if (seen.has(size.key)) continue;
    seen.add(size.key);
    const box = applyEdgePins({ ...layer, ...current }, size.width, size.height);
    pageLayouts[size.key] = {
      ...current,
      ...box,
    };
  }

  const live = applyEdgePins({ ...layer, ...current }, canvas.width, canvas.height);
  return {
    ...current,
    ...live,
    pageLayouts,
  };
}

export function switchDocumentPage(
  document: DesignerDocument,
  width: number,
  height: number,
  presetId?: string
): DesignerDocument {
  const from = document.canvas;
  if (from.width === width && from.height === height && (!presetId || from.presetId === presetId)) {
    return document;
  }

  const fromKey = pageLayoutKey(from);
  const toCanvas: DesignerCanvasSize = {
    ...from,
    width,
    height,
    presetId,
  };
  const toKey = pageLayoutKey(toCanvas);

  return {
    ...document,
    canvas: toCanvas,
    layers: document.layers.map((layer) => {
      const pageLayouts = {
        ...layer.pageLayouts,
        [fromKey]: snapshotPageLayout(layer),
      };
      const saved = pageLayouts[toKey];
      if (saved) {
        return {
          ...layer,
          ...applyPageLayout(saved),
          pageLayouts,
        };
      }

      const remapped = hasExplicitPins(layer)
        ? { ...layer, ...applyEdgePins(layer, width, height) }
        : remapLayerToCanvas(layer, from, { width, height });

      pageLayouts[toKey] = snapshotPageLayout(remapped);
      return { ...remapped, pageLayouts };
    }),
  };
}
