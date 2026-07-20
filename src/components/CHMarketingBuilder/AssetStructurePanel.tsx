import React, { useMemo, useState } from 'react';
import AssetZoneLayoutFields from './AssetZoneLayoutFields';
import {
  applyLayoutToZone,
  layoutKeyForZone,
  serializeZoneLayoutJson,
  zoneValueKeyForZone,
} from './assetLayout';
import { TemplateZoneRenderer } from './TemplateZoneRenderer';
import type { AssetZoneLayout, AssetZoneLayoutMap, Template, TemplateZone, ZoneValue } from './types';

interface AssetStructurePanelProps {
  template: Template;
  zoneLayouts: AssetZoneLayoutMap;
  /** Zone values keyed by template zone id (not zoneKey). */
  zoneValues: Record<string, ZoneValue>;
  layoutMode: 'canvas' | 'stacked';
  onLayoutChange: (layoutKey: string, patch: Partial<AssetZoneLayout>) => void;
  onZoneValueChange: (zoneId: string, value: ZoneValue) => void;
}

export default function AssetStructurePanel({
  template,
  zoneLayouts,
  zoneValues,
  layoutMode,
  onLayoutChange,
  onZoneValueChange,
}: AssetStructurePanelProps) {
  const [expandedZoneId, setExpandedZoneId] = useState<string | null>(template.zones[0]?.id ?? null);

  const hasDuplicateZoneKeys = useMemo(() => {
    const seen = new Set<string>();
    for (const zone of template.zones) {
      if (seen.has(zone.zoneKey)) return true;
      seen.add(zone.zoneKey);
    }
    return false;
  }, [template.zones]);

  const sortedZones = useMemo(
    () =>
      [...template.zones]
        .map((zone) => {
          const key = layoutKeyForZone(zone, template.zones);
          const layout = key === zone.zoneKey ? zoneLayouts[zone.zoneKey] : zoneLayouts[key];
          return applyLayoutToZone(zone, layout);
        })
        .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id)),
    [template.zones, zoneLayouts]
  );

  const layoutJsonPreview = useMemo(() => serializeZoneLayoutJson(zoneLayouts), [zoneLayouts]);

  const renderZoneRow = (zone: TemplateZone) => {
    const isExpanded = expandedZoneId === zone.id;
    const layoutKey = layoutKeyForZone(zone, template.zones);
    const contentZone = template.zones.find((candidate) => candidate.id === zone.id) ?? zone;
    const valueKey = zoneValueKeyForZone(contentZone, template.zones);

    return (
      <div key={zone.id} className="asset-zone-structure-row">
        <button
          type="button"
          className="asset-zone-structure-header"
          onClick={() => setExpandedZoneId((current) => (current === zone.id ? null : zone.id))}
          aria-expanded={isExpanded}
        >
          <span className="asset-zone-structure-title">{zone.zoneLabel || zone.zoneKey}</span>
          <span className="asset-zone-structure-type">{zone.zoneType}</span>
          <span className="asset-zone-structure-chevron">{isExpanded ? '▾' : '▸'}</span>
        </button>

        {isExpanded && (
          <div className="asset-zone-structure-body">
            <div className="asset-zone-structure-content">
              <p className="asset-zone-structure-content-label">Content</p>
              {hasDuplicateZoneKeys && (
                <p className="asset-zone-structure-key-hint">
                  Zone key: <code>{valueKey}</code>
                </p>
              )}
              <TemplateZoneRenderer
                zone={{ ...contentZone, zoneKey: valueKey }}
                templateId={template.id}
                value={zoneValues[contentZone.id]}
                onChange={(_zoneKey, value) =>
                  onZoneValueChange(contentZone.id, { ...value, zoneKey: valueKey })
                }
                layoutMode="stacked"
              />
              <AssetZoneLayoutFields
                key={layoutKey}
                layout={
                  (layoutKey === zone.zoneKey
                    ? zoneLayouts[zone.zoneKey]
                    : zoneLayouts[layoutKey]) ?? {}
                }
                onChange={(patch) => onLayoutChange(layoutKey, patch)}
                showPosition={layoutMode === 'canvas'}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="asset-structure-panel">
      <p className="asset-structure-panel-hint">
        Expand a zone to edit position, alignment, and content. Layout is saved as JSON on this marketing asset.
      </p>
      {hasDuplicateZoneKeys && (
        <p className="asset-zone-structure-warning">
          Some zones share the same zone key. Edit each zone&apos;s key in Template setup so content stays
          independent after save.
        </p>
      )}

      <div className="asset-zone-structure-list">{sortedZones.map(renderZoneRow)}</div>

      <details className="asset-layout-json-preview">
        <summary>Layout JSON (saved on marketing asset)</summary>
        <pre>{layoutJsonPreview}</pre>
      </details>
    </div>
  );
}
