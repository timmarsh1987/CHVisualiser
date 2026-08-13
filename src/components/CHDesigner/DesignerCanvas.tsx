import React, { useEffect, useRef, useState } from 'react';
import { clamp, screenDeltaToCanvas } from './coords';
import LayerNode from './LayerNode';
import { layerAllowsTransform, layerIsSelectable } from './policy';
import {
  useDesignerAction,
  useDesignerDocument,
  useDesignerMode,
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
    }
  | {
      kind: 'move';
      ids: string[];
      startX: number;
      startY: number;
      origins: Record<string, { x: number; y: number }>;
    }
  | {
      kind: 'resize';
      id: string;
      startX: number;
      startY: number;
      origX: number;
      origY: number;
      origW: number;
      origH: number;
      handle: ResizeHandle;
    };

type ResizeHandle = 'nw' | 'ne' | 'sw' | 'se';

const HANDLES: ResizeHandle[] = ['nw', 'ne', 'sw', 'se'];

export default function DesignerCanvas() {
  const document = useDesignerDocument();
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
        dispatch({
          type: 'PAN_SET',
          panX: interaction.origPanX + (e.clientX - interaction.startX),
          panY: interaction.origPanY + (e.clientY - interaction.startY),
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
          dispatch({
            type: 'UPDATE_LAYER',
            id,
            patch: { x: origin.x + dx, y: origin.y + dy },
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

      dispatch({
        type: 'UPDATE_LAYER',
        id: interaction.id,
        patch: { x: nextX, y: nextY, width: nextW, height: nextH },
        pushHistory: false,
      });
    };

    const onUp = () => {
      if (interaction.kind === 'move' || interaction.kind === 'resize') {
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

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const nextZoom = clamp(viewport.zoom * (e.deltaY < 0 ? 1.08 : 0.92), MIN_ZOOM, MAX_ZOOM);
    dispatch({ type: 'ZOOM_SET', zoom: nextZoom });
  };

  const beginPan = (e: React.PointerEvent) => {
    setInteraction({
      kind: 'pan',
      startX: e.clientX,
      startY: e.clientY,
      origPanX: viewport.panX,
      origPanY: viewport.panY,
    });
  };

  const handleViewportPointerDown = (e: React.PointerEvent) => {
    if (e.button === 1 || (e.button === 0 && spaceDown)) {
      e.preventDefault();
      beginPan(e);
      return;
    }
    if (e.button !== 0) return;
    dispatch({ type: 'UNSELECT_ALL' });
  };

  const handleLayerSelect = (layer: Layer, e: React.PointerEvent) => {
    if (!layerIsSelectable(layer, mode)) return;
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
    if (!canTransformLayer(layer) || spaceDown) return;
    const ids = selection.includes(layer.id) ? selection : [layer.id];
    if (!selection.includes(layer.id)) {
      dispatch({ type: 'SELECT', ids: [layer.id] });
    }
    const origins: Record<string, { x: number; y: number }> = {};
    for (const id of ids) {
      const found = document.layers.find((l) => l.id === id);
      if (found && canTransformLayer(found)) {
        origins[id] = { x: found.x, y: found.y };
      }
    }
    if (Object.keys(origins).length === 0) return;
    setInteraction({
      kind: 'move',
      ids: Object.keys(origins),
      startX: e.clientX,
      startY: e.clientY,
      origins,
    });
  };

  const handleResizeStart = (layer: Layer, handle: ResizeHandle, e: React.PointerEvent) => {
    e.stopPropagation();
    if (!canTransformLayer(layer)) return;
    dispatch({ type: 'SELECT', ids: [layer.id] });
    setInteraction({
      kind: 'resize',
      id: layer.id,
      startX: e.clientX,
      startY: e.clientY,
      origX: layer.x,
      origY: layer.y,
      origW: layer.width,
      origH: layer.height,
      handle,
    });
  };

  const selectedLayers = document.layers.filter((l) => selection.includes(l.id) && l.visible);
  const primary = selectedLayers.length === 1 ? selectedLayers[0] : null;
  const showHandles = primary ? canTransformLayer(primary) : false;

  return (
    <div
      className={`chd-viewport${spaceDown ? ' chd-viewport--panning' : ''}`}
      onWheel={onWheel}
      onPointerDown={handleViewportPointerDown}
    >
      <div
        className="chd-world"
        style={{
          transform: `translate(${viewport.panX}px, ${viewport.panY}px) scale(${viewport.zoom})`,
        }}
      >
        <div
          className="chd-artboard"
          style={{
            width: document.canvas.width,
            height: document.canvas.height,
            background: document.canvas.background || '#eceae4',
          }}
          onPointerDown={(e) => {
            if (e.button !== 0 || spaceDown) return;
            e.stopPropagation();
            dispatch({ type: 'UNSELECT_ALL' });
          }}
        >
          {document.layers.map((layer) => (
            <LayerNode
              key={layer.id}
              layer={layer}
              selected={selection.includes(layer.id)}
              onSelect={(e) => handleLayerSelect(layer, e)}
              onMoveStart={(e) => handleMoveStart(layer, e)}
            />
          ))}

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

      <div className="chd-viewport-hint">
        Scroll to zoom · Space+drag to pan · Shift+click multi-select
      </div>
    </div>
  );
}
