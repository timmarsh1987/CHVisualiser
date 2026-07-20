import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GripVertical, Trash2, X } from 'lucide-react';
import { CATALOG, GROUPS, type ComponentKind } from './catalog';
import { ComponentRenderer } from './renderers';

const DRAG_KIND = 'application/x-ch-component-kind';
const DEFAULT_WIDTH = 300;
const DEFAULT_HEIGHT = 180;
const MIN_WIDTH = 100;
const MIN_HEIGHT = 60;

interface PlacedItem {
  id: string;
  kind: ComponentKind;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

type Interaction =
  | { type: 'move'; id: string; startX: number; startY: number; origX: number; origY: number }
  | { type: 'resize'; id: string; startX: number; startY: number; origW: number; origH: number };

let nextId = 1;
function genId() {
  return `pb-${nextId++}`;
}

function parseDragPayload(raw: string): { kind: ComponentKind; name: string } | null {
  try {
    const data = JSON.parse(raw) as { kind: ComponentKind; name: string };
    if (!data.kind || !data.name) return null;
    return data;
  } catch {
    return null;
  }
}

export default function PageBuilder() {
  const [items, setItems] = useState<PlacedItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [interaction, setInteraction] = useState<Interaction | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const addItem = useCallback((kind: ComponentKind, name: string, x: number, y: number) => {
    const item: PlacedItem = {
      id: genId(),
      kind,
      name,
      x: Math.max(0, x),
      y: Math.max(0, y),
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT,
    };
    setItems((prev) => [...prev, item]);
    setSelectedId(item.id);
  }, []);

  const removeSelected = useCallback(() => {
    if (!selectedId) return;
    setItems((prev) => prev.filter((i) => i.id !== selectedId));
    setSelectedId(null);
  }, [selectedId]);

  const clearCanvas = useCallback(() => {
    setItems([]);
    setSelectedId(null);
  }, []);

  const handlePaletteDragStart = (kind: ComponentKind, name: string, e: React.DragEvent) => {
    e.dataTransfer.setData(DRAG_KIND, JSON.stringify({ kind, name }));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleCanvasDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDragOver(true);
  };

  const handleCanvasDragLeave = (e: React.DragEvent) => {
    if (e.currentTarget === e.target) setDragOver(false);
  };

  const handleCanvasDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const raw = e.dataTransfer.getData(DRAG_KIND);
    if (!raw || !canvasRef.current) return;
    const payload = parseDragPayload(raw);
    if (!payload) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const scrollLeft = canvasRef.current.scrollLeft;
    const scrollTop = canvasRef.current.scrollTop;
    const x = e.clientX - rect.left + scrollLeft - DEFAULT_WIDTH / 2;
    const y = e.clientY - rect.top + scrollTop - 16;
    addItem(payload.kind, payload.name, x, y);
  };

  const startMove = (id: string, e: React.PointerEvent) => {
    e.stopPropagation();
    const item = items.find((i) => i.id === id);
    if (!item) return;
    setSelectedId(id);
    setInteraction({
      type: 'move',
      id,
      startX: e.clientX,
      startY: e.clientY,
      origX: item.x,
      origY: item.y,
    });
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const startResize = (id: string, e: React.PointerEvent) => {
    e.stopPropagation();
    const item = items.find((i) => i.id === id);
    if (!item) return;
    setSelectedId(id);
    setInteraction({
      type: 'resize',
      id,
      startX: e.clientX,
      startY: e.clientY,
      origW: item.width,
      origH: item.height,
    });
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  useEffect(() => {
    if (!interaction) return;

    const onMove = (e: PointerEvent) => {
      setItems((prev) =>
        prev.map((item) => {
          if (item.id !== interaction.id) return item;
          if (interaction.type === 'move') {
            const dx = e.clientX - interaction.startX;
            const dy = e.clientY - interaction.startY;
            return {
              ...item,
              x: Math.max(0, interaction.origX + dx),
              y: Math.max(0, interaction.origY + dy),
            };
          }
          const dw = e.clientX - interaction.startX;
          const dh = e.clientY - interaction.startY;
          return {
            ...item,
            width: Math.max(MIN_WIDTH, interaction.origW + dw),
            height: Math.max(MIN_HEIGHT, interaction.origH + dh),
          };
        })
      );
    };

    const onUp = () => setInteraction(null);

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [interaction]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId) {
        const tag = (e.target as HTMLElement).tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        e.preventDefault();
        removeSelected();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedId, removeSelected]);

  const grouped = GROUPS.map((g) => ({
    group: g,
    items: CATALOG.filter((c) => c.group === g),
  }));

  return (
    <div className="ch-pb">
      <aside className="ch-pb-palette">
        <div className="ch-pb-palette-header">
          <h2>Components</h2>
          <span>Drag onto the page</span>
        </div>
        <div className="ch-pb-palette-scroll">
          {grouped.map(({ group, items }) => (
            <div key={group} className="ch-pb-palette-group">
              <div className="ch-cat-label">{group}</div>
              {items.map((entry) => (
                <div
                  key={entry.name}
                  className="ch-pb-palette-item"
                  draggable
                  onDragStart={(e) => handlePaletteDragStart(entry.kind, entry.name, e)}
                >
                  <div className="ch-pb-palette-item__label">
                    <GripVertical size={12} className="ch-pb-palette-item__grip" />
                    {entry.name}
                  </div>
                  <div className="ch-pb-palette-item__preview">
                    <ComponentRenderer kind={entry.kind} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </aside>

      <main className="ch-pb-canvas-area">
        <header className="ch-pb-toolbar">
          <div>
            <h2 className="ch-pb-toolbar__title">Page builder</h2>
            <p className="ch-pb-toolbar__hint">
              Drop components, drag to reposition, resize from the corner handle
            </p>
          </div>
          <div className="ch-pb-toolbar__actions">
            {selectedId ? (
              <button type="button" className="ch-pb-btn" onClick={removeSelected}>
                <X size={13} /> Remove
              </button>
            ) : null}
            {items.length > 0 ? (
              <button type="button" className="ch-pb-btn ch-pb-btn--danger" onClick={clearCanvas}>
                <Trash2 size={13} /> Clear page
              </button>
            ) : null}
          </div>
        </header>

        <div
          ref={canvasRef}
          className={`ch-pb-canvas${dragOver ? ' ch-pb-canvas--drag-over' : ''}`}
          onDragOver={handleCanvasDragOver}
          onDragLeave={handleCanvasDragLeave}
          onDrop={handleCanvasDrop}
          onClick={() => setSelectedId(null)}
        >
          {items.length === 0 ? (
            <div className="ch-pb-canvas-empty">
              Drag components from the left panel onto this page
            </div>
          ) : null}

          {items.map((item) => (
            <div
              key={item.id}
              className={`ch-pb-placed${selectedId === item.id ? ' ch-pb-placed--selected' : ''}`}
              style={{
                left: item.x,
                top: item.y,
                width: item.width,
                height: item.height,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(item.id);
              }}
            >
              <div
                className="ch-pb-placed__bar"
                onPointerDown={(e) => startMove(item.id, e)}
              >
                <span>{item.name}</span>
                <button
                  type="button"
                  className="ch-pb-placed__remove"
                  aria-label={`Remove ${item.name}`}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(item.id);
                    removeSelected();
                  }}
                >
                  <X size={11} />
                </button>
              </div>
              <div className="ch-pb-placed__body">
                <ComponentRenderer kind={item.kind} />
              </div>
              <div
                className="ch-pb-placed__resize"
                onPointerDown={(e) => startResize(item.id, e)}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
