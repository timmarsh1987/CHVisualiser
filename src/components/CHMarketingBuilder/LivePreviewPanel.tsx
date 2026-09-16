import React, { forwardRef, useMemo, useRef } from 'react';
import { useBrandKit } from './BrandKitContext';
import { mergeZoneValuesWithPreviewDefaults } from './previewPlaceholders';
import { renderEmailHtml } from './renderEmailHtml';
import { TemplateZoneRenderer } from './TemplateZoneRenderer';
import {
  buildFormatPreset,
  formatTemplateDimensions,
  resolveTemplateCanvasHeight,
  resolveTemplateCanvasWidth,
} from './templateDimensions';
import type { Template, ZoneValue } from './types';

const MIN_CANVAS_SIZE = 200;
const MAX_CANVAS_SIZE = 4000;

export type PreviewDimensionPatch = Pick<Template, 'canvasWidth' | 'canvasHeight' | 'formatPreset'>;

interface LivePreviewPanelProps {
  template: Template;
  zoneValues?: Record<string, ZoneValue>;
  layoutMode?: 'canvas' | 'stacked';
  onDimensionsChange?: (patch: PreviewDimensionPatch) => void;
}

interface PreviewResizeFrameProps {
  width: number;
  height: number;
  onChange: (next: { width: number; height: number }) => void;
  children: React.ReactNode;
}

function clampCanvasSize(value: number): number {
  return Math.min(MAX_CANVAS_SIZE, Math.max(MIN_CANVAS_SIZE, Math.round(value)));
}

function PreviewResizeFrame({ width, height, onChange, children }: PreviewResizeFrameProps) {
  const dragRef = useRef<{
    edge: 'right' | 'bottom';
    startX: number;
    startY: number;
    startWidth: number;
    startHeight: number;
  } | null>(null);

  const beginDrag = (edge: 'right' | 'bottom') => (event: React.PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      edge,
      startX: event.clientX,
      startY: event.clientY,
      startWidth: width,
      startHeight: height,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag) return;

    if (drag.edge === 'right') {
      onChange({
        width: clampCanvasSize(drag.startWidth + (event.clientX - drag.startX)),
        height: drag.startHeight,
      });
      return;
    }

    onChange({
      width: drag.startWidth,
      height: clampCanvasSize(drag.startHeight + (event.clientY - drag.startY)),
    });
  };

  const endDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
  };

  return (
    <div className="live-preview-resize-frame" style={{ width, height }}>
      <div className="live-preview-resize-content">{children}</div>
      <button
        type="button"
        className="live-preview-resize-handle live-preview-resize-handle-right"
        aria-label="Drag to change width"
        onPointerDown={beginDrag('right')}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      />
      <button
        type="button"
        className="live-preview-resize-handle live-preview-resize-handle-bottom"
        aria-label="Drag to change height"
        onPointerDown={beginDrag('bottom')}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      />
    </div>
  );
}

const LivePreviewPanel = forwardRef<HTMLDivElement, LivePreviewPanelProps>(function LivePreviewPanel(
  { template, zoneValues = {}, layoutMode = 'stacked', onDimensionsChange },
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
  const canResize = Boolean(onDimensionsChange);

  const handleResize = ({ width, height }: { width: number; height: number }) => {
    onDimensionsChange?.({
      canvasWidth: width,
      canvasHeight: height,
      formatPreset: buildFormatPreset(template.channelType, width, height) || template.formatPreset,
    });
  };

  if (sortedZones.length === 0) {
    return (
      <p className="template-admin-preview-empty">
        Add zones on the left to see a live preview here.
      </p>
    );
  }

  const canvasPreview = (
    <div
      ref={canvasRef}
      className="live-preview-canvas social-builder-canvas social-builder-canvas-fill"
      style={{
        width: canvasWidth,
        height: canvasHeight,
        position: 'relative',
        margin: canResize ? 0 : '0 auto',
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
  );

  if (template.channelType === 'Social' || template.channelType === 'Print' || layoutMode === 'canvas') {
    return (
      <div className="live-preview-canvas-wrap">
        <p className="live-preview-dimensions-badge" aria-label="Template dimensions">
          {dimensionsLabel}
        </p>
        {canResize ? (
          <PreviewResizeFrame width={canvasWidth} height={canvasHeight} onChange={handleResize}>
            {canvasPreview}
          </PreviewResizeFrame>
        ) : (
          canvasPreview
        )}
      </div>
    );
  }

  const emailPreview = (
    <iframe
      key={previewHtml}
      title="Live preview"
      srcDoc={previewHtml}
      className={`email-builder-preview-frame${canResize ? '' : ' email-builder-preview-frame-fill'}`}
      style={{
        width: canResize ? canvasWidth : undefined,
        height: canResize ? canvasHeight : undefined,
        minHeight: canResize ? undefined : canvasHeight,
      }}
    />
  );

  return (
    <div className="live-preview-email-wrap">
      <p className="live-preview-dimensions-badge" aria-label="Template dimensions">
        {dimensionsLabel}
      </p>
      {canResize ? (
        <PreviewResizeFrame width={canvasWidth} height={canvasHeight} onChange={handleResize}>
          {emailPreview}
        </PreviewResizeFrame>
      ) : (
        emailPreview
      )}
    </div>
  );
});

export default LivePreviewPanel;
