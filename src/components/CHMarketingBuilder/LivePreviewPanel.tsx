import React, { forwardRef, useMemo } from 'react';
import { useBrandKit } from './BrandKitContext';
import { mergeZoneValuesWithPreviewDefaults } from './previewPlaceholders';
import { renderEmailHtml } from './renderEmailHtml';
import { TemplateZoneRenderer } from './TemplateZoneRenderer';
import {
  formatTemplateDimensions,
  resolveTemplateCanvasHeight,
  resolveTemplateCanvasWidth,
} from './templateDimensions';
import type { Template, ZoneValue } from './types';

interface LivePreviewPanelProps {
  template: Template;
  zoneValues?: Record<string, ZoneValue>;
  layoutMode?: 'canvas' | 'stacked';
}

const LivePreviewPanel = forwardRef<HTMLDivElement, LivePreviewPanelProps>(function LivePreviewPanel(
  { template, zoneValues = {}, layoutMode = 'stacked' },
  canvasRef
) {
  const brandKit = useBrandKit();

  const sortedZones = useMemo(
    () => [...template.zones].sort((a, b) => a.sortOrder - b.sortOrder),
    [template.zones]
  );

  const resolvedZoneValues = useMemo(
    () => mergeZoneValuesWithPreviewDefaults(template, zoneValues),
    [template, zoneValues]
  );

  const previewHtml = useMemo(
    () => renderEmailHtml(template, resolvedZoneValues, brandKit),
    [brandKit, resolvedZoneValues, template]
  );

  const dimensionsLabel = formatTemplateDimensions(template);
  const canvasWidth = resolveTemplateCanvasWidth(template);
  const canvasHeight = resolveTemplateCanvasHeight(template);

  if (sortedZones.length === 0) {
    return (
      <p className="template-admin-preview-empty">
        Add zones on the left to see a live preview here.
      </p>
    );
  }

  if (template.channelType === 'Social' || layoutMode === 'canvas') {
    return (
      <div className="live-preview-canvas-wrap">
        <p className="live-preview-dimensions-badge" aria-label="Template dimensions">
          {dimensionsLabel}
        </p>
        <div
          ref={canvasRef}
          className="live-preview-canvas social-builder-canvas social-builder-canvas-fill"
          style={{
            width: canvasWidth,
            height: canvasHeight,
            position: 'relative',
            margin: '0 auto',
          }}
        >
          {sortedZones.map((zone) => (
            <TemplateZoneRenderer
              key={`${zone.id}-${zone.sortOrder}-${zone.positionX}-${zone.positionY}-${zone.contentAlignment}-${zone.offsetPx}`}
              zone={zone}
              templateId={template.id}
              value={resolvedZoneValues[zone.id] ?? resolvedZoneValues[zone.zoneKey]}
              onChange={() => undefined}
              layoutMode="canvas"
              hideLogoPicker
              adminMode
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="live-preview-email-wrap">
      <p className="live-preview-dimensions-badge" aria-label="Template dimensions">
        {dimensionsLabel}
      </p>
      <iframe
        key={previewHtml}
        title="Live preview"
        srcDoc={previewHtml}
        className="email-builder-preview-frame email-builder-preview-frame-fill"
        style={{ minHeight: canvasHeight }}
      />
    </div>
  );
});

export default LivePreviewPanel;
