import React, { useEffect, useRef, useState } from 'react';
import {
  canvasGuidesForBox,
  constrainPlacedBox,
  snapMoveToCanvas,
  snapResizeToCanvas,
  type CanvasSnapGuide,
  type PlacedBox,
} from './constraints';
import { layerFontIsLoaded, missingFontNames } from './fontFiles';
import { clamp, fitPageInView, normalizeRotation, revealBoxEdgeInView, revealBoxInView, screenDeltaToCanvas, screenToCanvas, zoomAroundPoint, type ViewBox } from './coords';
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
    }
  | {
      kind: 'rotate';
      id: string;
      centerX: number;
      centerY: number;
      origRotation: number;
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
  const [snapGuides, setSnapGuides] = useState<CanvasSnapGuide[]>([]);
  const [spaceDown, setSpaceDown] = useState(false);
  const viewportStateRef = useRef(viewport);
  viewportStateRef.current = viewport;
  const documentRef = useRef(document);
  documentRef.current = document;
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const viewportElRef = useRef<HTMLDivElement>(null);
  const interactionRef = useRef<Interaction | null>(null);
  const didFitRef = useRef(false);
  const panMovedRef = useRef(false);
  const rotateRef = useRef({ last: 0, accum: 0 });
  const movedBoxesRef = useRef<Record<string, PlacedBox>>({});
  const onWheelRef = useRef<(event: WheelEvent) => void>(() => undefined);

  const applyViewRef = useRef<(next: { zoom: number; panX: number; panY: number }) => void>(() => undefined);
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
  applyViewRef.current = applyView;

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
    const doc = documentRef.current;
    const chosen = doc.layers.filter(
      (layer) => selection.includes(layer.id) && layerIsDrawn(layer, doc.settings)
    );
    if (chosen.length === 0) return;
    const rect = el.getBoundingClientRect();
    if (rect.width < 8 || rect.height < 8) return;
    const base = justFitted
      ? fitPageInView(doc.canvas.width, doc.canvas.height, rect.width, rect.height)
      : viewportStateRef.current;
    const box = unionBox(chosen);
    const missesPage = layerMissesPage(box, doc.canvas.width, doc.canvas.height);
    applyView(
      missesPage
        ? revealBoxEdgeInView(box, base, rect.width, rect.height)
        : revealBoxInView(box, base, rect.width, rect.height)
    );
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
    const onMove = (e: PointerEvent) => {
      const interaction = interactionRef.current;
      if (!interaction) return;
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

      if (interaction.kind === 'move') {
        const { dx, dy } = screenDeltaToCanvas(
          e.clientX - interaction.startX,
          e.clientY - interaction.startY,
          zoom
        );
        const moving: { id: string; origin: Layer; box: PlacedBox }[] = [];
        for (const id of interaction.ids) {
          const origin = interaction.origins[id];
          if (!origin) continue;
          moving.push({
            id,
            origin,
            box: { x: origin.x + dx, y: origin.y + dy, width: origin.width, height: origin.height },
          });
        }
        if (moving.length === 0) return;
        const group = boundsOf(moving.map((item) => item.box));
        const snapped = snapMoveToCanvas(group, interaction.canvasWidth, interaction.canvasHeight, zoom);
        const shiftX = snapped.x - group.x;
        const shiftY = snapped.y - group.y;
        const placed: PlacedBox[] = [];
        for (const item of moving) {
          const next = constrainPlacedBox(
            {
              x: item.box.x + shiftX,
              y: item.box.y + shiftY,
              width: item.box.width,
              height: item.box.height,
            },
            item.origin,
            interaction.canvasWidth,
            interaction.canvasHeight,
            'move'
          );
          placed.push(next);
          movedBoxesRef.current[item.id] = next;
          dispatch({
            type: 'UPDATE_LAYER',
            id: item.id,
            patch: next,
            pushHistory: false,
          });
        }
        setSnapGuides(canvasGuidesForBox(boundsOf(placed), interaction.canvasWidth, interaction.canvasHeight));
        return;
      }

      if (interaction.kind === 'resize') {
      const { dx, dy } = screenDeltaToCanvas(
        e.clientX - interaction.startX,
        e.clientY - interaction.startY,
        zoom
      );
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

      const snapped = snapResizeToCanvas(
        { x: nextX, y: nextY, width: nextW, height: nextH },
        interaction.canvasWidth,
        interaction.canvasHeight,
        zoom,
        interaction.handle
      );
      const resized = constrainPlacedBox(
        snapped,
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
      setSnapGuides(canvasGuidesForBox(resized, interaction.canvasWidth, interaction.canvasHeight));
      return;
      }

      const viewportEl = viewportElRef.current;
      if (!viewportEl) return;
      const point = screenToCanvas(
        e.clientX,
        e.clientY,
        viewportEl.getBoundingClientRect(),
        viewportStateRef.current
      );
      const angle = Math.atan2(point.y - interaction.centerY, point.x - interaction.centerX);
      let step = ((angle - rotateRef.current.last) * 180) / Math.PI;
      if (step > 180) step -= 360;
      if (step < -180) step += 360;
      rotateRef.current.last = angle;
      rotateRef.current.accum += step;
      let degrees = interaction.origRotation + rotateRef.current.accum;
      if (e.shiftKey) degrees = Math.round(degrees / 15) * 15;
      const rotation = normalizeRotation(degrees);
      dispatch({
        type: 'UPDATE_LAYER',
        id: interaction.id,
        patch: { rotation: rotation || undefined },
        pushHistory: false,
      });
    };

    const onUp = () => {
      const interaction = interactionRef.current;
      if (!interaction) return;
      if (interaction.kind === 'pan' && interaction.clearOnClick && !panMovedRef.current) {
        dispatch({ type: 'UNSELECT_ALL' });
      } else if (interaction.kind === 'move' || interaction.kind === 'resize' || interaction.kind === 'rotate') {
        dispatch({ type: 'COMMIT' });
        if (interaction.kind === 'move') {
          const missed = interaction.ids
            .map((id) => movedBoxesRef.current[id])
            .filter(
              (box): box is PlacedBox =>
                Boolean(box) && layerMissesPage(box, interaction.canvasWidth, interaction.canvasHeight)
            );
          const el = viewportElRef.current;
          if (missed.length > 0 && el) {
            const rect = el.getBoundingClientRect();
            const view = revealBoxEdgeInView(boundsOf(missed), viewportStateRef.current, rect.width, rect.height);
            window.setTimeout(() => applyViewRef.current(view), 0);
          }
          movedBoxesRef.current = {};
        }
      }
      interactionRef.current = null;
      setInteraction(null);
      setSnapGuides([]);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [dispatch]);

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

  const beginGesture = (next: Interaction) => {
    interactionRef.current = next;
    setInteraction(next);
  };

  const beginPan = (e: React.PointerEvent, clearOnClick: boolean, immediate: boolean) => {
    panMovedRef.current = immediate;
    beginGesture({
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
    if (mode === 'admin' || mode === 'publication') return !layer.locked;
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
    beginGesture({
      kind: 'move',
      ids: Object.keys(origins),
      startX: e.clientX,
      startY: e.clientY,
      origins,
      canvasWidth: document.canvas.width,
      canvasHeight: document.canvas.height,
    });
  };

  const handleRotateStart = (layer: Layer, e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!canTransformLayer(layer)) return;
    const viewportEl = viewportElRef.current;
    if (!viewportEl) return;
    const point = screenToCanvas(e.clientX, e.clientY, viewportEl.getBoundingClientRect(), viewport);
    const centerX = layer.x + layer.width / 2;
    const centerY = layer.y + layer.height / 2;
    rotateRef.current = {
      last: Math.atan2(point.y - centerY, point.x - centerX),
      accum: 0,
    };
    dispatch({ type: 'SELECT', ids: [layer.id] });
    beginGesture({
      kind: 'rotate',
      id: layer.id,
      centerX,
      centerY,
      origRotation: layer.rotation ?? 0,
    });
  };

  const handleResizeStart = (layer: Layer, handle: ResizeHandle, e: React.PointerEvent) => {
    e.stopPropagation();
    if (!canTransformLayer(layer)) return;
    dispatch({ type: 'SELECT', ids: [layer.id] });
    beginGesture({
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
  const pageWidth = document.canvas.width;
  const pageHeight = document.canvas.height;
  const drawnLayers = document.layers.filter((layer) => layerIsDrawn(layer, document.settings));
  const offCanvasLayers = drawnLayers.filter((layer) => layerOverflowsPage(layer, pageWidth, pageHeight));
  const selectedLayers = drawnLayers.filter((layer) => selection.includes(layer.id));
  const primary = selectedLayers.length === 1 ? selectedLayers[0] : null;
  const showHandles = primary ? canTransformLayer(primary) : false;

  const handleOffCanvasPointerDown = (layer: Layer, event: React.PointerEvent) => {
    if (event.button !== 0) return;
    if (!layerIsSelectable(layer, mode, document.settings)) return;
    event.stopPropagation();
    handleLayerSelect(layer, event);
    if (!layer.locked) handleMoveStart(layer, event);
  };

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
        <div className="chd-offcanvas">
          {offCanvasLayers.map((layer) => (
            <div
              key={layer.id}
              className={`chd-offcanvas-hit${layer.locked ? ' chd-offcanvas-hit--locked' : ''}`}
              data-chd-offcanvas={layer.id}
              title={layer.name || 'Off page'}
              style={{
                left: layer.x,
                top: layer.y,
                width: layer.width,
                height: layer.height,
                transform: layer.rotation ? `rotate(${layer.rotation}deg)` : undefined,
              }}
              onPointerDown={(event) => handleOffCanvasPointerDown(layer, event)}
            >
              <LayerNode
                layer={layer}
                embedded
                selected={false}
                missingFont={!layerFontIsLoaded(layer, loadedFonts)}
              />
            </div>
          ))}
        </div>
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
            {drawnLayers.map((layer) => (
              <LayerNode
                key={layer.id}
                layer={layer}
                selected={selection.includes(layer.id)}
                missingFont={!layerFontIsLoaded(layer, loadedFonts)}
                onSelect={(e) => handleLayerSelect(layer, e)}
                onMoveStart={(e) => handleMoveStart(layer, e)}
              />
            ))}
          </div>
        </div>
        </div>
      </div>

      <div className="chd-selection-overlay">
        {snapGuides.map((guide) => (
          <div
            key={`${guide.axis}:${guide.at}`}
            className={`chd-snap-guide chd-snap-guide--${guide.axis}`}
            style={guideStyle(guide, document.canvas.width, document.canvas.height, viewport)}
          />
        ))}
        {offCanvasLayers.map((layer) => {
          const selected = selection.includes(layer.id);
          const misses = layerMissesPage(layer, pageWidth, pageHeight);
          const passive = Boolean(layer.rotation);
          return (
            <div
              key={`off-${layer.id}`}
              className={`chd-offcanvas-outline${selected ? ' chd-offcanvas-outline--selected' : ''}${
                layer.locked ? ' chd-offcanvas-outline--locked' : ''
              }${passive ? ' chd-offcanvas-outline--passive' : ''}`}
              style={{
                ...layerBoxStyle(layer, viewport),
                clipPath: offCanvasClipPath(layer, pageWidth, pageHeight, viewport.zoom),
              }}
              onPointerDown={passive ? undefined : (event) => handleOffCanvasPointerDown(layer, event)}
            >
              {misses ? (
                <span className={`chd-offcanvas-label chd-offcanvas-label--${offCanvasLabelSide(layer, pageWidth, pageHeight)}`}>
                  {layer.name || 'Off page'}
                </span>
              ) : null}
            </div>
          );
        })}
        {document.layers
          .filter((layer) => layer.locked && layerIsDrawn(layer, document.settings))
          .map((layer) => (
            <div key={`lock-${layer.id}`} className="chd-lock-anchor" style={layerBoxStyle(layer, viewport)}>
              <span
                className={`chd-layer-lock${mode === 'admin' ? '' : ' chd-layer-lock--fixed'}`}
                role="img"
                title={mode === 'admin' ? 'Double-click to unlock' : 'Locked'}
                aria-label={mode === 'admin' ? 'Locked. Double-click to unlock' : 'Locked'}
                onPointerDown={(event) => event.stopPropagation()}
                onDoubleClick={(event) => {
                  if (mode !== 'admin') return;
                  event.preventDefault();
                  event.stopPropagation();
                  dispatch({ type: 'UPDATE_LAYER', id: layer.id, patch: { locked: false } });
                }}
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <rect x="2" y="5.5" width="8" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
                  <path
                    d="M4 5.5V3.8a2 2 0 0 1 4 0v1.7"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          ))}
        {showHandles && primary ? (
          <div className="chd-selection-box" style={layerBoxStyle(primary, viewport)}>
            <div className="chd-rotate-stem" />
            <div
              className="chd-handle chd-handle--rotate"
              role="button"
              aria-label="Rotate"
              title="Rotate"
              onPointerDown={(e) => handleRotateStart(primary, e)}
            />
            {HANDLES.map((handle) => (
              <div
                key={handle}
                className={`chd-handle chd-handle--${handle}`}
                role="button"
                aria-label={`Scale from ${handle}`}
                onPointerDown={(e) => handleResizeStart(primary, handle, e)}
              />
            ))}
          </div>
        ) : primary ? (
          <div className="chd-selection-outline" style={layerBoxStyle(primary, viewport)} />
        ) : null}

        {selectedLayers.length > 1
          ? selectedLayers.map((layer) => (
              <div
                key={`sel-${layer.id}`}
                className="chd-selection-outline"
                style={layerBoxStyle(layer, viewport)}
              />
            ))
          : null}
      </div>

      <div className="chd-viewport-hint">
        Drag the page to move · Scroll or +/− to zoom · Shift+click multi-select
      </div>
    </div>
  );
}

function boundsOf(boxes: PlacedBox[]): PlacedBox {
  let x0 = Infinity;
  let y0 = Infinity;
  let x1 = -Infinity;
  let y1 = -Infinity;
  for (const box of boxes) {
    x0 = Math.min(x0, box.x);
    y0 = Math.min(y0, box.y);
    x1 = Math.max(x1, box.x + box.width);
    y1 = Math.max(y1, box.y + box.height);
  }
  return { x: x0, y: y0, width: Math.max(1, x1 - x0), height: Math.max(1, y1 - y0) };
}

function guideStyle(
  guide: CanvasSnapGuide,
  canvasWidth: number,
  canvasHeight: number,
  viewport: { zoom: number; panX: number; panY: number }
): React.CSSProperties {
  const zoom = viewport.zoom;
  if (guide.axis === 'x') {
    return {
      left: viewport.panX + guide.at * zoom,
      top: viewport.panY,
      height: canvasHeight * zoom,
    };
  }
  return {
    left: viewport.panX,
    top: viewport.panY + guide.at * zoom,
    width: canvasWidth * zoom,
  };
}

function layerBoxStyle(
  layer: Layer,
  viewport: { zoom: number; panX: number; panY: number }
): React.CSSProperties {
  const zoom = viewport.zoom;
  return {
    left: viewport.panX + layer.x * zoom,
    top: viewport.panY + layer.y * zoom,
    width: layer.width * zoom,
    height: layer.height * zoom,
    transform: layer.rotation ? `rotate(${layer.rotation}deg)` : undefined,
  };
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

function layerOverflowsPage(
  layer: { x: number; y: number; width: number; height: number },
  pageWidth: number,
  pageHeight: number
): boolean {
  return (
    layer.x < -0.5 ||
    layer.y < -0.5 ||
    layer.x + layer.width > pageWidth + 0.5 ||
    layer.y + layer.height > pageHeight + 0.5
  );
}

function layerMissesPage(
  layer: { x: number; y: number; width: number; height: number },
  pageWidth: number,
  pageHeight: number
): boolean {
  return (
    layer.x + layer.width <= 0.5 ||
    layer.y + layer.height <= 0.5 ||
    layer.x >= pageWidth - 0.5 ||
    layer.y >= pageHeight - 0.5
  );
}

/** Put the name on the edge nearest the page, which is the part brought back into view. */
function offCanvasLabelSide(
  layer: { x: number; y: number; width: number; height: number },
  pageWidth: number,
  pageHeight: number
): 'start' | 'end' | 'below' {
  if (layer.x + layer.width <= 0.5) return 'end';
  if (layer.x >= pageWidth - 0.5) return 'start';
  if (layer.y + layer.height <= 0.5) return 'below';
  if (layer.y >= pageHeight - 0.5) return 'start';
  return 'start';
}

/** Clip the on-page part out of an off-canvas outline. Rotated boxes keep the full frame. */
function offCanvasClipPath(
  layer: Layer,
  pageWidth: number,
  pageHeight: number,
  zoom: number
): string | undefined {
  if (layer.rotation) return undefined;
  const width = layer.width * zoom;
  const height = layer.height * zoom;
  if (width <= 0 || height <= 0) return undefined;
  const pageX = -layer.x * zoom;
  const pageY = -layer.y * zoom;
  const holeLeft = Math.max(0, pageX);
  const holeTop = Math.max(0, pageY);
  const holeRight = Math.min(width, pageX + pageWidth * zoom);
  const holeBottom = Math.min(height, pageY + pageHeight * zoom);
  if (holeLeft >= holeRight - 0.5 || holeTop >= holeBottom - 0.5) return undefined;
  return `polygon(evenodd, 0 0, ${width}px 0, ${width}px ${height}px, 0 ${height}px, ${holeLeft}px ${holeTop}px, ${holeLeft}px ${holeBottom}px, ${holeRight}px ${holeBottom}px, ${holeRight}px ${holeTop}px)`;
}
