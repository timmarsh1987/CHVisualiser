import React from 'react';
import { fontFamilyStack } from './fontFiles';
import { cssTextAlign, displayedText, layerTextAlign } from './textFlow';
import type { Layer } from './types';

interface LayerNodeProps {
  layer: Layer;
  selected: boolean;
  onSelect?: (e: React.PointerEvent) => void;
  onMoveStart?: (e: React.PointerEvent) => void;
  /** The layer asks for a face that has not been added. */
  missingFont?: boolean;
  /** Static render for page thumbnails. */
  preview?: boolean;
  /** Fill a parent frame. The parent owns position, rotation, and pointer input. */
  embedded?: boolean;
}

export default function LayerNode({
  layer,
  selected,
  onSelect,
  onMoveStart,
  missingFont = false,
  preview = false,
  embedded = false,
}: LayerNodeProps) {
  if (!layer.visible) return null;

  const paint = layerPaint(layer);
  const style: React.CSSProperties = embedded
    ? { inset: 0 }
    : {
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
          style={{ background: paint.background, border: paint.border }}
        />
      );
      break;
    case 'rect':
      body = (
        <div
          className="chd-layer-rect"
          style={{ background: paint.background, border: paint.border }}
        />
      );
      break;
    case 'text':
      body = (
        <div
          className={`chd-layer-text${layer.direction === 'rtl' ? ' chd-layer-text--rtl' : ''}`}
          style={{
            color: layer.color || '#1a1a1a',
            background: paint.background,
            border: paint.border,
            boxSizing: 'border-box',
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
          style={{ background: paint.background, border: paint.border, boxSizing: 'border-box' }}
          src={layer.src}
          alt={layer.name}
          draggable={false}
        />
      ) : (
        <div className="chd-layer-image-placeholder" style={{ background: paint.background, border: paint.border, boxSizing: 'border-box' }}>
          {layer.name || 'Image'}
        </div>
      );
      break;
  }

  const fontWarning =
    missingFont && layer.type === 'text' ? (
      <span
        className="chd-layer-font-warning"
        title={`Missing font: ${layer.fontFamily}`}
        aria-label={`Missing font: ${layer.fontFamily}`}
      >
        !
      </span>
    ) : null;

  if (preview || embedded) {
    return (
      <div
        className={`chd-layer${embedded && layer.locked ? ' chd-layer--locked' : ''}`}
        style={style}
        data-layer-id={layer.id}
      >
        {body}
        {embedded ? fontWarning : null}
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
        onSelect?.(e);
        if (!layer.locked) onMoveStart?.(e);
      }}
    >
      {body}
      {fontWarning}
    </div>
  );
}

function paintOn(value: string | undefined): boolean {
  if (!value) return false;
  const paint = value.trim().toLowerCase();
  return paint !== 'transparent' && paint !== 'none';
}

function layerPaint(layer: Layer): { background: string; border?: string } {
  let background = 'transparent';
  if (paintOn(layer.fill)) background = layer.fill as string;
  else if (!layer.fill && layer.type === 'frame') background = '#ffffff';
  else if (!layer.fill && layer.type === 'rect') background = '#888780';
  else if (!layer.fill && layer.type === 'image' && !layer.src) background = '#e8e6e1';
  const width = layer.strokeWidth ?? 1;
  const border = paintOn(layer.stroke) && width > 0 ? `${width}px solid ${layer.stroke}` : undefined;
  return { background, border };
}
