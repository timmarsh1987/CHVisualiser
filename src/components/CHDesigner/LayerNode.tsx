import React from 'react';
import { fontFamilyStack } from './fontFiles';
import { cssTextAlign, displayedText, layerTextAlign } from './textFlow';
import type { Layer } from './types';

interface LayerNodeProps {
  layer: Layer;
  selected: boolean;
  onSelect: (e: React.PointerEvent) => void;
  onMoveStart: (e: React.PointerEvent) => void;
  /** The layer asks for a face that has not been added. */
  missingFont?: boolean;
  /** Static render for page thumbnails. */
  preview?: boolean;
}

export default function LayerNode({
  layer,
  selected,
  onSelect,
  onMoveStart,
  missingFont = false,
  preview = false,
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
          className={`chd-layer-text${layer.direction === 'rtl' ? ' chd-layer-text--rtl' : ''}`}
          style={{
            color: layer.color || '#1a1a1a',
            fontSize: layer.fontSize || 16,
            fontFamily: fontFamilyStack(layer.fontFamily),
            fontWeight: layer.fontWeight,
            fontStyle: layer.fontStyle,
            textAlign: cssTextAlign(layerTextAlign(layer)),
            direction: layer.direction === 'rtl' ? 'rtl' : undefined,
          }}
        >
          <span>{displayedText(layer)}</span>
        </div>
      );
      break;
    case 'image':
      body = layer.src ? (
        <img
          className={`chd-layer-image${layer.objectFit === 'contain' || /logo/i.test(layer.name) ? ' chd-layer-image--contain' : ''}`}
          style={{ background: layer.fill || 'transparent' }}
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

  if (preview) {
    return (
      <div className="chd-layer" style={style} data-layer-id={layer.id}>
        {body}
      </div>
    );
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
      {missingFont && layer.type === 'text' ? (
        <span
          className="chd-layer-font-warning"
          title={`Missing font: ${layer.fontFamily}`}
          aria-label={`Missing font: ${layer.fontFamily}`}
        >
          !
        </span>
      ) : null}
    </div>
  );
}
