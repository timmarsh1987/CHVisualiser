import type { CSSProperties } from 'react';
import type { ContentAlignment, OffsetDirection, TemplateZone } from './types';

export const CONTENT_ALIGNMENTS: ContentAlignment[] = ['Left', 'Center', 'Right'];
export const OFFSET_DIRECTIONS: OffsetDirection[] = ['Top', 'Right', 'Bottom', 'Left'];

export const DEFAULT_CONTENT_ALIGNMENT: ContentAlignment = 'Left';
export const DEFAULT_OFFSET_DIRECTION: OffsetDirection = 'Top';

export function coerceContentAlignment(value: string | undefined): ContentAlignment {
  const normalized = value?.trim().toLowerCase();
  if (normalized === 'center') return 'Center';
  if (normalized === 'right') return 'Right';
  return 'Left';
}

export function coerceOffsetDirection(value: string | undefined): OffsetDirection {
  const normalized = value?.trim().toLowerCase();
  if (normalized === 'right') return 'Right';
  if (normalized === 'bottom') return 'Bottom';
  if (normalized === 'left') return 'Left';
  return 'Top';
}

export function mergeZoneLayoutStyle(
  zone: TemplateZone,
  baseStyle: CSSProperties = {},
  layoutMode: 'canvas' | 'stacked' = 'stacked'
): CSSProperties {
  const alignment = zone.contentAlignment ?? DEFAULT_CONTENT_ALIGNMENT;
  const offset = Math.max(0, zone.offsetPx ?? 0);
  const direction = zone.offsetDirection ?? DEFAULT_OFFSET_DIRECTION;

  const style: CSSProperties = {
    ...baseStyle,
    textAlign: alignment.toLowerCase() as 'left' | 'center' | 'right',
  };

  if (layoutMode === 'stacked' && style.width == null) {
    style.width = '100%';
  }

  if (offset > 0) {
    const marginKey = {
      Top: 'marginTop',
      Right: 'marginRight',
      Bottom: 'marginBottom',
      Left: 'marginLeft',
    }[direction] as keyof CSSProperties;
    style[marginKey] = offset;
  }

  return style;
}

export function zoneLayoutClassName(zone: TemplateZone): string {
  const alignment = (zone.contentAlignment ?? DEFAULT_CONTENT_ALIGNMENT).toLowerCase();
  return `zone-layout-${alignment}`;
}

function emailPaddingForZone(zone: TemplateZone): {
  top: number;
  right: number;
  bottom: number;
  left: number;
} {
  const padding = { top: 16, right: 24, bottom: 16, left: 24 };
  const offset = Math.max(0, zone.offsetPx ?? 0);
  if (offset <= 0) return padding;

  const direction = zone.offsetDirection ?? DEFAULT_OFFSET_DIRECTION;
  if (direction === 'Top') padding.top += offset;
  if (direction === 'Right') padding.right += offset;
  if (direction === 'Bottom') padding.bottom += offset;
  if (direction === 'Left') padding.left += offset;
  return padding;
}

export function getEmailZoneCellStyle(zone: TemplateZone, extraStyle = ''): string {
  const alignment = (zone.contentAlignment ?? DEFAULT_CONTENT_ALIGNMENT).toLowerCase();
  const padding = emailPaddingForZone(zone);
  return `padding:${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px;text-align:${alignment};${extraStyle}`;
}

export function getEmailZoneCellAlign(zone: TemplateZone): 'left' | 'center' | 'right' {
  return (zone.contentAlignment ?? DEFAULT_CONTENT_ALIGNMENT).toLowerCase() as 'left' | 'center' | 'right';
}

export function getEmailImageStyle(zone: TemplateZone): string {
  const alignment = zone.contentAlignment ?? DEFAULT_CONTENT_ALIGNMENT;
  const base = 'display:block;width:100%;max-width:552px;height:auto;border:0;';
  if (alignment === 'Center') return `${base}margin:0 auto;`;
  if (alignment === 'Right') return `${base}margin-left:auto;margin-right:0;`;
  return `${base}margin:0;`;
}

export function getEmailButtonWrapperStyle(): string {
  return 'display:inline-block;';
}
