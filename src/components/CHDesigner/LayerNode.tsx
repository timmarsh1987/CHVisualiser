import React from 'react';
import type { Layer } from './types';

interface LayerNodeProps {
  layer: Layer;
  selected: boolean;
  onSelect: (e: React.PointerEvent) => void;
  onMoveStart: (e: React.PointerEvent) => void;
  onUnlock?: () => void;
}

export default function LayerNode({
  layer,
  selected,
  onSelect,
  onMoveStart,
  onUnlock,
}: LayerNodeProps) {
  if (!layer.visible) return null;

  const style: React.CSSProperties = {
    left: layer.x,
    top: layer.y,
    width: layer.width,
    height: layer.height,
    transform: layer.rotation ? `rotate(${layer.rotation}deg)` : undefined,
  };

  let body: React.ReactNode = null;

  switch (layer.type) {
    case 'frame':
      body = (
        <div
          className="chd-layer-frame"
          style={{ background: layer.fill || '#ffffff' }}
        />
      );
      break;
    case 'rect':
      body = (
        <div
          className="chd-layer-rect"
          style={{ background: layer.fill || '#888780' }}
        />
      );
      break;
    case 'text':
      body = (
        <div
          className="chd-layer-text"
          style={{
            color: layer.color || '#1a1a1a',
            fontSize: layer.fontSize || 16,
          }}
        >
          {layer.text || ''}
        </div>
      );
      break;
    case 'image':
      body = layer.src ? (
        <img
          className={`chd-layer-image${layer.objectFit === 'contain' || /logo/i.test(layer.name) ? ' chd-layer-image--contain' : ''}`}
          src={layer.src}
          alt={layer.name}
          draggable={false}
        />
      ) : (
        <div className="chd-layer-image-placeholder" style={{ background: layer.fill || '#e8e6e1' }}>
          {layer.name || 'Image'}
        </div>
      );
      break;
  }

  return (
    <div
      className={`chd-layer${selected ? ' chd-layer--selected' : ''}${layer.locked ? ' chd-layer--locked' : ''}`}
      style={style}
      data-layer-id={layer.id}
      onPointerDown={(e) => {
        if (e.button !== 0) return;
        e.stopPropagation();
        onSelect(e);
        if (!layer.locked) onMoveStart(e);
      }}
    >
      {body}
      {layer.locked ? (
        <button
          type="button"
          className="chd-layer-lock"
          title="Double-click to unlock"
          aria-label="Locked. Double-click to unlock"
          onPointerDown={(e) => {
            e.stopPropagation();
          }}
          onDoubleClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onUnlock?.();
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
        </button>
      ) : null}
    </div>
  );
}
