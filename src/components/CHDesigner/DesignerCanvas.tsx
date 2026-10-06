import React, { useEffect, useRef, useState } from 'react';
import { clampBoxToPins } from './constraints';
import { layerFontIsLoaded, missingFontNames } from './fontFiles';
import { clamp, fitPageInView, revealBoxInView, screenDeltaToCanvas, zoomAroundPoint, type ViewBox } from './coords';
import LayerNode from './LayerNode';
import { layerAllowsTransform, layerIsDrawn, layerIsSelectable } from './policy';
import {
  useDesignerAction,
  useDesignerMode,
  useOutputDocument,
  useSelection,
  useViewport,
} from './store';
import { MAX_ZOOM, MIN_LAYER_SIZE, MIN_ZOOM, type Layer } from './types';

type Interaction =
  | {
      kind: 'pan';
      startX: number;
      startY: number;
      origPanX: number;
      origPanY: number;
      /** A click with no drag clears the selection. A drag pans immediately when false. */
      clearOnClick: boolean;
      immediate: boolean;
    }
  | {
      kind: 'move';
      ids: string[];
      startX: number;
      startY: number;
      origins: Record<string, Layer>;
      canvasWidth: number;
      canvasHeight: number;
    }
  | {
      kind: 'resize';
      id: string;
      layer: Layer;
      startX: number;
      startY: number;
      origX: number;
      origY: number;
      origW: number;
      origH: number;
      canvasWidth: number;
      canvasHeight: number;
      handle: ResizeHandle;
    };

type ResizeHandle = 'nw' | 'ne' | 'sw' | 'se';

const HANDLES: ResizeHandle[] = ['nw', 'ne', 'sw', 'se'];

export default function DesignerCanvas() {
  const document = useOutputDocument();
  const selection = useSelection();
  const viewport = useViewport();
  const dispatch = useDesignerAction();
  const mode = useDesignerMode();
  const [interaction, setInteraction] = useState<Interaction | null>(null);
  const [spaceDown, setSpaceDown] = useState(false);
  const viewportStateRef = useRef(viewport);
  viewportStateRef.current = viewport;
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const viewportElRef = useRef<HTMLDivElement>(null);
  const interactionRef = useRef<Interaction | null>(null);
  interactionRef.current = interaction;
  const didFitRef = useRef(false);
  const panMovedRef = useRef(false);
  const onWheelRef = useRef<(event: WheelEvent) => void>(() => undefined);

  const applyView = (next: { zoom: number; panX: number; panY: number }) => {
    const current = viewportStateRef.current;
    if (
      Math.abs(current.zoom - next.zoom) < 0.001 &&
      Math.abs(current.panX - next.panX) < 0.5 &&
      Math.abs(current.panY - next.panY) < 0.5
    ) {
      return;
    }
    dispatch({ type: 'VIEWPORT_SET', ...next });
  };

  useEffect(() => {
    const el = viewportElRef.current;
    if (!el) return;
    const fit = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width < 8 || rect.height < 8) return;
      dispatch({ type: 'STAGE_SIZE', width: rect.width, height: rect.height });
      if (interactionRef.current) return;
      applyView(fitPageInView(document.canvas.width, document.canvas.height, rect.width, rect.height));
    };
    didFitRef.current = true;
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
    // applyView reads the latest viewport from a ref.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.canvas.width, document.canvas.height, document.activePageId, viewport.fitNonce, dispatch]);

  const selectionKey = selection.join('\n');
  useEffect(() => {
    const justFitted = didFitRef.current;
    didFitRef.current = false;
    if (interactionRef.current || selection.length === 0) return;
    const el = viewportElRef.current;
    if (!el) return;
    const chosen = document.layers.filter(
      (layer) => selection.includes(layer.id) && layerIsDrawn(layer, document.settings)
    );
    if (chosen.length === 0) return;
    const rect = el.getBoundingClientRect();
    if (rect.width < 8 || rect.height < 8) return;
    const base = justFitted
      ? fitPageInView(document.canvas.width, document.canvas.height, rect.width, rect.height)
      : viewportStateRef.current;
    applyView(revealBoxInView(unionBox(chosen), base, rect.width, rect.height));
    // A page fit in this same commit wins unless the chosen box sits outside that fitted page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionKey]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setSpaceDown(true);
      }
      if (
        modeRef.current === 'admin' &&
        (e.key === 'Delete' || e.key === 'Backspace') &&
        selection.length > 0
      ) {
        const tag = (e.target as HTMLElement).tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        e.preventDefault();
        dispatch({ type: 'DELETE_LAYERS' });
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.shiftKey) {
        e.preventDefault();
        dispatch({ type: 'UNDO' });
      }
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'y' || (e.key.toLowerCase() === 'z' && e.shiftKey))) {
        e.preventDefault();
        dispatch({ type: 'REDO' });
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') setSpaceDown(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [dispatch, selection.length]);

  useEffect(() => {
    if (!interaction) return;

    const onMove = (e: PointerEvent) => {
      const zoom = viewportStateRef.current.zoom;
      if (interaction.kind === 'pan') {
        const dx = e.clientX - interaction.startX;
        const dy = e.clientY - interaction.startY;
        if (!interaction.immediate && !panMovedRef.current && Math.hypot(dx, dy) <= 3) return;
        panMovedRef.current = true;
        dispatch({
          type: 'PAN_SET',
          panX: interaction.origPanX + dx,
          panY: interaction.origPanY + dy,
        });
        return;
      }

      const { dx, dy } = screenDeltaToCanvas(
        e.clientX - interaction.startX,
        e.clientY - interaction.startY,
        zoom
      );

      if (interaction.kind === 'move') {
        for (const id of interaction.ids) {
          const origin = interaction.origins[id];
          if (!origin) continue;
          const next = clampBoxToPins(
            { x: origin.x + dx, y: origin.y + dy, width: origin.width, height: origin.height },
            origin,
            interaction.canvasWidth,
            interaction.canvasHeight,
            'move'
          );
          dispatch({
            type: 'UPDATE_LAYER',
            id,
            patch: next,
            pushHistory: false,
          });
        }
        return;
      }

      // resize
      let nextX = interaction.origX;
      let nextY = interaction.origY;
      let nextW = interaction.origW;
      let nextH = interaction.origH;

      if (interaction.handle.includes('e')) {
        nextW = Math.max(MIN_LAYER_SIZE, interaction.origW + dx);
      }
      if (interaction.handle.includes('s')) {
        nextH = Math.max(MIN_LAYER_SIZE, interaction.origH + dy);
      }
      if (interaction.handle.includes('w')) {
        nextW = Math.max(MIN_LAYER_SIZE, interaction.origW - dx);
        nextX = interaction.origX + (interaction.origW - nextW);
      }
      if (interaction.handle.includes('n')) {
        nextH = Math.max(MIN_LAYER_SIZE, interaction.origH - dy);
        nextY = interaction.origY + (interaction.origH - nextH);
      }

      const resized = clampBoxToPins(
        { x: nextX, y: nextY, width: nextW, height: nextH },
        interaction.layer,
        interaction.canvasWidth,
        interaction.canvasHeight,
        'resize'
      );

      dispatch({
        type: 'UPDATE_LAYER',
        id: interaction.id,
        patch: resized,
        pushHistory: false,
      });
    };

    const onUp = () => {
      if (interaction.kind === 'pan' && interaction.clearOnClick && !panMovedRef.current) {
        dispatch({ type: 'UNSELECT_ALL' });
      } else if (interaction.kind === 'move' || interaction.kind === 'resize') {
        dispatch({ type: 'COMMIT' });
      }
      setInteraction(null);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [interaction, dispatch]);

  onWheelRef.current = (event: WheelEvent) => {
    const el = viewportElRef.current;
    if (!el) return;
    const current = viewportStateRef.current;
    const rect = el.getBoundingClientRect();
    const nextZoom = clamp(current.zoom * (event.deltaY < 0 ? 1.08 : 0.92), MIN_ZOOM, MAX_ZOOM);
    applyView(
      zoomAroundPoint(current, nextZoom, event.clientX - rect.left, event.clientY - rect.top)
    );
  };

  useEffect(() => {
    const el = viewportElRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      onWheelRef.current(event);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const beginPan = (e: React.PointerEvent, clearOnClick: boolean, immediate: boolean) => {
    panMovedRef.current = immediate;
    setInteraction({
      kind: 'pan',
      startX: e.clientX,
      startY: e.clientY,
      origPanX: viewport.panX,
      origPanY: viewport.panY,
      clearOnClick,
      immediate,
    });
  };

  const handleViewportPointerDown = (e: React.PointerEvent) => {
    if (e.button === 1 || (e.button === 0 && spaceDown)) {
      e.preventDefault();
      beginPan(e, false, true);
      return;
    }
    if (e.button !== 0) return;
    beginPan(e, true, false);
  };

  const handleLayerSelect = (layer: Layer, e: React.PointerEvent) => {
    if (!layerIsSelectable(layer, mode, document.settings)) return;
    dispatch({
      type: 'SELECT',
      ids: [layer.id],
      additive: e.shiftKey,
    });
  };

  const canTransformLayer = (layer: Layer) => {
    if (mode === 'admin') return !layer.locked;
    return layerAllowsTransform(layer);
  };

  const handleMoveStart = (layer: Layer, e: React.PointerEvent) => {
    if (spaceDown) {
      beginPan(e, false, true);
      return;
    }
    if (!canTransformLayer(layer)) return;
    const ids = selection.includes(layer.id) ? selection : [layer.id];
    if (!selection.includes(layer.id)) {
      dispatch({ type: 'SELECT', ids: [layer.id] });
    }
    const origins: Record<string, Layer> = {};
    for (const id of ids) {
      const found = document.layers.find((l) => l.id === id);
      if (found && canTransformLayer(found)) {
        origins[id] = found;
      }
    }
    if (Object.keys(origins).length === 0) return;
    setInteraction({
      kind: 'move',
      ids: Object.keys(origins),
      startX: e.clientX,
      startY: e.clientY,
      origins,
      canvasWidth: document.canvas.width,
      canvasHeight: document.canvas.height,
    });
  };

  const handleResizeStart = (layer: Layer, handle: ResizeHandle, e: React.PointerEvent) => {
    e.stopPropagation();
    if (!canTransformLayer(layer)) return;
    dispatch({ type: 'SELECT', ids: [layer.id] });
    setInteraction({
      kind: 'resize',
      id: layer.id,
      layer,
      startX: e.clientX,
      startY: e.clientY,
      origX: layer.x,
      origY: layer.y,
      origW: layer.width,
      origH: layer.height,
      canvasWidth: document.canvas.width,
      canvasHeight: document.canvas.height,
      handle,
    });
  };

  const loadedFonts = document.settings?.fonts ?? [];
  const missingFonts = missingFontNames(document.layers, loadedFonts);
  const selectedLayers = document.layers.filter(
    (l) => selection.includes(l.id) && layerIsDrawn(l, document.settings)
  );
  const primary = selectedLayers.length === 1 ? selectedLayers[0] : null;
  const showHandles = primary ? canTransformLayer(primary) : false;

  return (
      <div
        ref={viewportElRef}
        className={`chd-viewport${interaction?.kind === 'pan' ? ' chd-viewport--panning' : ''}`}
        onPointerDown={handleViewportPointerDown}
      >
      {missingFonts.length > 0 ? (
        <div className="chd-missing-fonts" role="status">
          <span className="chd-missing-fonts-mark" aria-hidden="true">!</span>
          <span>Missing fonts</span>
          <span className="chd-missing-fonts-names">{missingFonts.join(', ')}</span>
        </div>
      ) : null}
      <div
        className="chd-world"
        style={{ transform: `translate(${viewport.panX}px, ${viewport.panY}px)` }}
      >
        <div className="chd-world-zoom" style={{ zoom: viewport.zoom }}>
        <div
          className="chd-artboard"
          data-chd-artboard="true"
          style={{
            width: document.canvas.width,
            height: document.canvas.height,
            background: document.canvas.background || '#eceae4',
          }}
          onPointerDown={(e) => {
            if (e.button === 1 || (e.button === 0 && spaceDown)) return;
            if (e.button !== 0) return;
            e.stopPropagation();
            beginPan(e, true, false);
          }}
        >
          <div className="chd-artboard-clip">
            <div className="chd-artboard-page" />
            {document.layers.filter((layer) => layerIsDrawn(layer, document.settings)).map((layer) => (
              <LayerNode
                key={layer.id}
                layer={layer}
                selected={selection.includes(layer.id)}
                missingFont={!layerFontIsLoaded(layer, loadedFonts)}
                onSelect={(e) => handleLayerSelect(layer, e)}
                onMoveStart={(e) => handleMoveStart(layer, e)}
                onUnlock={
                  mode === 'admin'
                    ? () => dispatch({ type: 'UPDATE_LAYER', id: layer.id, patch: { locked: false } })
                    : undefined
                }
              />
            ))}
          </div>

          {showHandles && primary ? (
            <div
              className="chd-selection-box"
              style={{
                left: primary.x,
                top: primary.y,
                width: primary.width,
                height: primary.height,
              }}
            >
              {HANDLES.map((handle) => (
                <div
                  key={handle}
                  className={`chd-handle chd-handle--${handle}`}
                  onPointerDown={(e) => handleResizeStart(primary, handle, e)}
                />
              ))}
            </div>
          ) : primary ? (
            <div
              className="chd-selection-outline"
              style={{
                left: primary.x,
                top: primary.y,
                width: primary.width,
                height: primary.height,
              }}
            />
          ) : null}

          {selectedLayers.length > 1
            ? selectedLayers.map((layer) => (
                <div
                  key={`sel-${layer.id}`}
                  className="chd-selection-outline"
                  style={{
                    left: layer.x,
                    top: layer.y,
                    width: layer.width,
                    height: layer.height,
                  }}
                />
              ))
            : null}
        </div>
        </div>
      </div>

      <div className="chd-viewport-hint">
        Drag the page to move · Scroll or +/− to zoom · Shift+click multi-select
      </div>
    </div>
  );
}

function unionBox(layers: Layer[]): ViewBox {
  let x0 = Infinity;
  let y0 = Infinity;
  let x1 = -Infinity;
  let y1 = -Infinity;
  for (const layer of layers) {
    x0 = Math.min(x0, layer.x);
    y0 = Math.min(y0, layer.y);
    x1 = Math.max(x1, layer.x + layer.width);
    y1 = Math.max(y1, layer.y + layer.height);
  }
  return { x: x0, y: y0, width: Math.max(1, x1 - x0), height: Math.max(1, y1 - y0) };
}
