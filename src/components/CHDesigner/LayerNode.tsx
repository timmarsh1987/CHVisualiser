import React from 'react';
import type { Layer } from './types';

interface LayerNodeProps {
  layer: Layer;
  selected: boolean;
  onSelect: (e: React.PointerEvent) => void;
  onMoveStart: (e: React.PointerEvent) => void;
}

export default function LayerNode({ layer, selected, onSelect, onMoveStart }: LayerNodeProps) {
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
        <img className="chd-layer-image" src={layer.src} alt={layer.name} draggable={false} />
      ) : (
        <div className="chd-layer-image-placeholder" style={{ background: layer.fill || '#e8e6e1' }}>
          Image
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
    </div>
  );
}
