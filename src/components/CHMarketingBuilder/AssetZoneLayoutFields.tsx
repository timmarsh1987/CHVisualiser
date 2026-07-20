import React from 'react';
import type { AssetZoneLayout } from './types';
import {
  CONTENT_ALIGNMENTS,
  DEFAULT_CONTENT_ALIGNMENT,
  DEFAULT_OFFSET_DIRECTION,
  OFFSET_DIRECTIONS,
} from './zoneLayout';

interface AssetZoneLayoutFieldsProps {
  layout: AssetZoneLayout;
  onChange: (patch: Partial<AssetZoneLayout>) => void;
  showPosition?: boolean;
  compact?: boolean;
}

export default function AssetZoneLayoutFields({
  layout,
  onChange,
  showPosition = false,
  compact = false,
}: AssetZoneLayoutFieldsProps) {
  return (
    <div className={`asset-zone-layout-fields${compact ? ' asset-zone-layout-fields-compact' : ''}`}>
      <div className="asset-zone-layout-grid">
        <label>
          Alignment
          <select
            value={layout.contentAlignment ?? DEFAULT_CONTENT_ALIGNMENT}
            onChange={(event) =>
              onChange({ contentAlignment: event.target.value as AssetZoneLayout['contentAlignment'] })
            }
          >
            {CONTENT_ALIGNMENTS.map((alignment) => (
              <option key={alignment} value={alignment}>
                {alignment}
              </option>
            ))}
          </select>
        </label>
        <label>
          Offset (px)
          <input
            type="number"
            min={0}
            value={layout.offsetPx ?? 0}
            onChange={(event) =>
              onChange({ offsetPx: Math.max(0, Number(event.target.value) || 0) })
            }
          />
        </label>
        <label>
          Direction
          <select
            value={layout.offsetDirection ?? DEFAULT_OFFSET_DIRECTION}
            onChange={(event) =>
              onChange({ offsetDirection: event.target.value as AssetZoneLayout['offsetDirection'] })
            }
          >
            {OFFSET_DIRECTIONS.map((direction) => (
              <option key={direction} value={direction}>
                {direction}
              </option>
            ))}
          </select>
        </label>
        <label>
          Sort order
          <input
            type="number"
            min={0}
            value={layout.sortOrder ?? 0}
            onChange={(event) => onChange({ sortOrder: Math.max(0, Number(event.target.value) || 0) })}
          />
        </label>
      </div>

      {showPosition && (
        <div className="asset-zone-layout-grid asset-zone-layout-grid-position">
          <label>
            X
            <input
              type="number"
              value={layout.positionX ?? ''}
              onChange={(event) =>
                onChange({
                  positionX: event.target.value === '' ? undefined : Number(event.target.value) || 0,
                })
              }
            />
          </label>
          <label>
            Y
            <input
              type="number"
              value={layout.positionY ?? ''}
              onChange={(event) =>
                onChange({
                  positionY: event.target.value === '' ? undefined : Number(event.target.value) || 0,
                })
              }
            />
          </label>
          <label>
            Width
            <input
              type="number"
              min={0}
              value={layout.zoneWidth ?? ''}
              onChange={(event) =>
                onChange({
                  zoneWidth: event.target.value ? Number(event.target.value) : undefined,
                })
              }
            />
          </label>
          <label>
            Height
            <input
              type="number"
              min={0}
              value={layout.zoneHeight ?? ''}
              onChange={(event) =>
                onChange({
                  zoneHeight: event.target.value ? Number(event.target.value) : undefined,
                })
              }
            />
          </label>
        </div>
      )}
    </div>
  );
}
