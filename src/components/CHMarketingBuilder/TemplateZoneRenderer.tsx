import React from 'react';
import { getLogoPreviewBackground, resolveLogoAssetUrl } from './brandAssets';
import LogoPicker from './LogoPicker';
import ImagePicker from './ImagePicker';
import { useBrandColor, useBrandFont, useBrandKit } from './BrandKitContext';
import { DEFAULT_HEADING_LEVEL, PREVIEW_HEADING_FONT_SIZES } from './headingLevel';
import { sanitizeZoneHtml } from './sanitizeHtml';
import { mergeZoneLayoutStyle, zoneLayoutClassName } from './zoneLayout';
import { isLogoZone } from './zoneHelpers';
import type { TemplateZone, ZoneValue } from './types';

interface TemplateZoneRendererProps {
  zone: TemplateZone;
  templateId?: string;
  value?: ZoneValue;
  onChange: (zoneKey: string, value: ZoneValue) => void;
  adminMode?: boolean;
  hideLogoPicker?: boolean;
  layoutMode?: 'canvas' | 'stacked';
}

export function TemplateZoneRenderer({
  zone,
  templateId,
  value,
  onChange,
  adminMode = false,
  hideLogoPicker = false,
  layoutMode = 'canvas',
}: TemplateZoneRendererProps) {
  const brandKit = useBrandKit();
  const isEditable = adminMode || !zone.isLocked;

  // Canvas: absolute only when X/Y are set. Otherwise stay in flow and treat
  // zoneHeight as maxHeight so sizing does not create huge empty gaps or pin to 0,0.
  const hasCanvasPosition = zone.positionX !== undefined || zone.positionY !== undefined;
  const canvasStyle: React.CSSProperties =
    layoutMode === 'stacked'
      ? { position: 'relative', width: '100%' }
      : hasCanvasPosition
        ? {
            position: 'absolute',
            left: zone.positionX ?? 0,
            top: zone.positionY ?? 0,
            width: zone.zoneWidth,
            height: zone.zoneHeight,
            zIndex: zone.sortOrder,
            pointerEvents: isEditable ? 'auto' : 'none',
          }
        : {
            position: 'relative',
            width: zone.zoneWidth ?? '100%',
            maxHeight: zone.zoneHeight,
            zIndex: zone.sortOrder,
            pointerEvents: isEditable ? 'auto' : 'none',
          };

  const style = mergeZoneLayoutStyle(zone, canvasStyle, layoutMode);
  const layoutClass = zoneLayoutClassName(zone);
  const stackedClass = layoutMode === 'stacked' ? ' zone-stacked' : '';

  if (isLogoZone(zone)) {
    return (
      <LogoZoneDisplay
        style={style}
        layoutClass={layoutClass}
        stackedClass={stackedClass}
        zone={zone}
        brandKit={brandKit}
        layoutMode={layoutMode}
        value={value}
        onChange={onChange}
        adminMode={adminMode}
        hideLogoPicker={hideLogoPicker}
      />
    );
  }

  if (zone.isLocked && !adminMode) {
    return (
      <div style={style} className={`zone zone-locked${stackedClass} ${layoutClass}`} data-zone-key={zone.zoneKey}>
        <LockedZoneContent zone={zone} brandKit={brandKit} layoutMode={layoutMode} />
      </div>
    );
  }

  switch (zone.zoneType) {
    case 'Text':
      return (
        <TextZone
          style={style}
          layoutClass={layoutClass}
          zone={zone}
          value={value}
          onChange={onChange}
          layoutMode={layoutMode}
        />
      );

    case 'Heading':
      return (
        <HeadingZone
          style={style}
          layoutClass={layoutClass}
          zone={zone}
          value={value}
          onChange={onChange}
          layoutMode={layoutMode}
        />
      );

    case 'Image':
      return (
        <ImageZone
          style={style}
          layoutClass={layoutClass}
          stackedClass={stackedClass}
          zone={zone}
          templateId={templateId}
          value={value}
          onChange={onChange}
          adminMode={adminMode}
          hideImagePicker={hideLogoPicker}
          layoutMode={layoutMode}
        />
      );

    case 'CTA Button':
      return (
        <CtaZone
          style={style}
          layoutClass={layoutClass}
          zone={zone}
          value={value}
          onChange={onChange}
          layoutMode={layoutMode}
        />
      );

    case 'Background Color':
      return layoutMode === 'stacked' ? null : (
        <div
          style={{ ...style, backgroundColor: value?.colorValue ?? '#ffffff' }}
          className={`zone zone-background ${layoutClass}`}
          data-zone-key={zone.zoneKey}
        />
      );

    case 'Divider':
      return (
        <hr
          style={style}
          className={`zone zone-divider${stackedClass} ${layoutClass}`}
          data-zone-key={zone.zoneKey}
        />
      );

    case 'HTML':
      return (
        <HtmlZone style={style} layoutClass={layoutClass} zone={zone} value={value} onChange={onChange} />
      );

    default:
      return null;
  }
}

function LogoZoneDisplay({
  style,
  layoutClass,
  stackedClass,
  zone,
  brandKit,
  layoutMode,
  value,
  onChange,
  adminMode,
  hideLogoPicker = false,
}: {
  style: React.CSSProperties;
  layoutClass: string;
  stackedClass: string;
  zone: TemplateZone;
  brandKit: ReturnType<typeof useBrandKit>;
  layoutMode: 'canvas' | 'stacked';
  value?: ZoneValue;
  onChange: TemplateZoneRendererProps['onChange'];
  adminMode: boolean;
  hideLogoPicker?: boolean;
}) {
  const selectedUrl = resolveLogoAssetUrl(value?.imageAssetUrl ?? brandKit.logoAssetUrl);
  const previewBackground = getLogoPreviewBackground(value?.imageAssetUrl ?? brandKit.logoAssetUrl);
  const showPicker = !adminMode && !hideLogoPicker;

  return (
    <div style={style} className={`zone zone-logo${stackedClass} ${layoutClass}`} data-zone-key={zone.zoneKey}>
      {showPicker ? (
        <LogoPicker
          zoneKey={zone.zoneKey}
          selectedUrl={value?.imageAssetUrl}
          compact={layoutMode === 'stacked'}
          onChange={(zoneKey, imageAssetUrl) =>
            onChange(zoneKey, { zoneKey, imageAssetUrl })
          }
        />
      ) : (
        <span
          className="zone-logo-preview-frame"
          style={previewBackground ? { background: previewBackground } : undefined}
        >
          <img
            src={selectedUrl}
            alt={`${brandKit.brandKitName} logo`}
            className="zone-logo-image"
            style={{ maxWidth: '100%', height: layoutMode === 'stacked' ? 64 : '100%', objectFit: 'contain' }}
          />
        </span>
      )}
    </div>
  );
}

function LockedZoneContent({
  zone,
  brandKit,
  layoutMode,
}: {
  zone: TemplateZone;
  brandKit: ReturnType<typeof useBrandKit>;
  layoutMode: 'canvas' | 'stacked';
}) {
  if (zone.zoneType === 'Background Color') {
    const accent = brandKit.colors.find((c) => c.colorUsageType === 'Primary')?.hexValue;
    return <div style={{ width: '100%', height: '100%', backgroundColor: accent }} />;
  }
  if (zone.zoneType === 'HTML') {
    const html = sanitizeZoneHtml(zone.htmlDefaultContent);
    return html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : null;
  }
  if (zone.zoneType === 'Image') {
    return (
      <div className="zone-image-placeholder zone-image-placeholder-locked">
        Image zone — unlock in template setup to change the image here.
      </div>
    );
  }
  return null;
}

function ImageZone({
  style,
  layoutClass,
  stackedClass,
  zone,
  templateId,
  value,
  onChange,
  adminMode,
  hideImagePicker = false,
  layoutMode = 'canvas',
}: {
  style: React.CSSProperties;
  layoutClass: string;
  stackedClass: string;
  zone: TemplateZone;
  templateId?: string;
  value?: ZoneValue;
  onChange: TemplateZoneRendererProps['onChange'];
  adminMode: boolean;
  hideImagePicker?: boolean;
  layoutMode?: 'canvas' | 'stacked';
}) {
  const showPicker = !adminMode && !hideImagePicker;

  return (
    <div style={style} className={`zone zone-image${stackedClass} ${layoutClass}`} data-zone-key={zone.zoneKey}>
      {showPicker ? (
        <ImagePicker
          zoneKey={zone.zoneKey}
          zone={zone}
          templateId={templateId}
          selectedAssetId={value?.imageAssetId}
          selectedUrl={value?.imageAssetUrl}
          compact={stackedClass.includes('stacked')}
          onChange={(zoneKey, asset) =>
            onChange(zoneKey, {
              zoneKey,
              imageAssetId: asset.id,
              imageAssetUrl: asset.imageAssetUrl,
            })
          }
        />
      ) : value?.imageAssetUrl ? (
        <img
          src={value.imageAssetUrl}
          alt={zone.zoneLabel}
          className="zone-image-preview"
          style={
            layoutMode === 'canvas' || zone.zoneHeight != null || zone.zoneWidth != null
              ? { width: '100%', height: '100%', maxHeight: 'none', objectFit: 'contain' }
              : undefined
          }
        />
      ) : (
        <div className="zone-image-placeholder">{zone.zoneLabel}</div>
      )}
    </div>
  );
}

function HeadingZone({
  style, layoutClass, zone, value, onChange, layoutMode,
}: { style: React.CSSProperties; layoutClass: string; zone: TemplateZone; value?: ZoneValue; onChange: TemplateZoneRendererProps['onChange']; layoutMode: 'canvas' | 'stacked' }) {
  const headingFont = useBrandFont('Heading');
  const textColor = useBrandColor('Secondary');
  const level = zone.headingLevel ?? DEFAULT_HEADING_LEVEL;

  return (
    <div
      style={{
        ...style,
        fontFamily: headingFont,
        fontSize: PREVIEW_HEADING_FONT_SIZES[level],
        fontWeight: 700,
        lineHeight: 1.25,
        color: textColor,
      }}
      className={`zone zone-heading${layoutMode === 'stacked' ? ' zone-stacked' : ''} ${layoutClass}${value?.textValue ? '' : ' zone-text-empty'}`}
      data-zone-key={zone.zoneKey}
      data-heading-level={level}
      data-placeholder={zone.zoneLabel}
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => {
        const text = e.currentTarget.innerText;
        if (zone.maxCharacterCount && text.length > zone.maxCharacterCount) {
          e.currentTarget.innerText = value?.textValue ?? '';
          return;
        }
        onChange(zone.zoneKey, { zoneKey: zone.zoneKey, textValue: text });
      }}
    >
      {value?.textValue ?? ''}
    </div>
  );
}

function TextZone({
  style, layoutClass, zone, value, onChange, layoutMode,
}: { style: React.CSSProperties; layoutClass: string; zone: TemplateZone; value?: ZoneValue; onChange: TemplateZoneRendererProps['onChange']; layoutMode: 'canvas' | 'stacked' }) {
  const headingFont = useBrandFont('Heading');
  const bodyFont = useBrandFont('Body');
  const textColor = useBrandColor('Secondary');
  const font = (zone.zoneLabel ?? '').toLowerCase().includes('headline') ? headingFont : bodyFont;

  return (
    <div
      style={{
        ...style,
        fontFamily: font,
        fontSize: layoutMode === 'stacked' ? undefined : '16px',
        lineHeight: 1.5,
        color: textColor,
      }}
      className={`zone zone-text${layoutMode === 'stacked' ? ' zone-stacked' : ''} ${layoutClass}${value?.textValue ? '' : ' zone-text-empty'}`}
      data-zone-key={zone.zoneKey}
      data-placeholder={zone.zoneLabel}
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => {
        const text = e.currentTarget.innerText;
        if (zone.maxCharacterCount && text.length > zone.maxCharacterCount) {
          e.currentTarget.innerText = value?.textValue ?? '';
          return;
        }
        onChange(zone.zoneKey, { zoneKey: zone.zoneKey, textValue: text });
      }}
    >
      {value?.textValue ?? ''}
    </div>
  );
}

function CtaZone({
  style, layoutClass, zone, value, onChange, layoutMode,
}: { style: React.CSSProperties; layoutClass: string; zone: TemplateZone; value?: ZoneValue; onChange: TemplateZoneRendererProps['onChange']; layoutMode: 'canvas' | 'stacked' }) {
  const accent = useBrandColor('Accent');
  const ctaFont = useBrandFont('CTA');

  return (
    <div style={style} className={`zone zone-cta${layoutMode === 'stacked' ? ' zone-stacked' : ''} ${layoutClass}`} data-zone-key={zone.zoneKey}>
      <button
        type="button"
        className="zone-cta-button"
        style={{ backgroundColor: accent, fontFamily: ctaFont, border: 'none', borderRadius: 4, padding: '10px 20px', color: '#fff' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onChange(zone.zoneKey, { ...value, zoneKey: zone.zoneKey, textValue: e.currentTarget.innerText })}
      >
        {value?.textValue ?? zone.zoneLabel}
      </button>
    </div>
  );
}

function HtmlZone({
  style, layoutClass, zone, value, onChange,
}: { style: React.CSSProperties; layoutClass: string; zone: TemplateZone; value?: ZoneValue; onChange: TemplateZoneRendererProps['onChange'] }) {
  if (!zone.htmlAllowUserOverride) {
    return (
      <div
        style={style}
        className={`zone zone-html zone-html-locked ${layoutClass}`}
        data-zone-key={zone.zoneKey}
        dangerouslySetInnerHTML={{ __html: sanitizeZoneHtml(zone.htmlDefaultContent) }}
      />
    );
  }

  return (
    <div style={style} className={`zone zone-html ${layoutClass}`}>
      <textarea
        className="zone-html-editor"
        defaultValue={value?.htmlValue ?? zone.htmlDefaultContent ?? ''}
        onBlur={(e) => onChange(zone.zoneKey, { zoneKey: zone.zoneKey, htmlValue: e.target.value })}
      />
      <div
        className="zone-html-preview"
        dangerouslySetInnerHTML={{ __html: sanitizeZoneHtml(value?.htmlValue ?? zone.htmlDefaultContent) }}
      />
    </div>
  );
}
