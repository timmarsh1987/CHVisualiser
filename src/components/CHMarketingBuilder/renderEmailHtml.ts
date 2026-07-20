import { CYTIVA_FONT_STACK, CYTIVA_THEME, getLogoPreviewBackground, resolveLogoAssetUrl } from './brandAssets';
import { resolveTemplateCanvasWidth } from './templateDimensions';
import { sanitizeZoneHtml } from './sanitizeHtml';
import { DEFAULT_HEADING_LEVEL, EMAIL_HEADING_FONT_SIZES } from './headingLevel';
import {
  getEmailButtonWrapperStyle,
  getEmailImageStyle,
  getEmailZoneCellAlign,
  getEmailZoneCellStyle,
} from './zoneLayout';
import { isLogoZone } from './zoneHelpers';
import type { BrandKit, Template, TemplateZone, ZoneValue } from './types';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function colorFor(brandKit: BrandKit, usage: BrandKit['colors'][number]['colorUsageType'], fallback: string): string {
  return brandKit.colors.find((entry) => entry.colorUsageType === usage)?.hexValue ?? fallback;
}

function fontFor(brandKit: BrandKit, usage: BrandKit['fonts'][number]['fontUsageType'], fallback: string): string {
  return brandKit.fonts.find((entry) => entry.fontUsageType === usage)?.fontFamily ?? fallback;
}

function isHeadlineZone(zone: TemplateZone): boolean {
  const key = zone.zoneKey.toLowerCase();
  const label = zone.zoneLabel.toLowerCase();
  return key.includes('headline') || label.includes('headline');
}

function renderZoneRow(zone: TemplateZone, value: ZoneValue | undefined, brandKit: BrandKit): string {
  const cellAlign = getEmailZoneCellAlign(zone);
  const cellStyle = getEmailZoneCellStyle(zone);

  if (isLogoZone(zone)) {
    const logoStyle = getEmailZoneCellStyle(zone, 'padding-top:24px;padding-bottom:16px;');
    const logoSource = value?.imageAssetUrl ?? brandKit.logoAssetUrl;
    const logoUrl = resolveLogoAssetUrl(logoSource);
    const previewBackground = getLogoPreviewBackground(logoSource);
    const cellBackground = previewBackground ? `background-color:${previewBackground};` : '';
    return `<tr>
      <td align="${cellAlign}" style="${logoStyle}${cellBackground}">
        <img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(brandKit.brandKitName)}" width="200" style="display:inline-block;max-width:200px;height:auto;border:0;" />
      </td>
    </tr>`;
  }

  switch (zone.zoneType) {
    case 'Text': {
      const text = value?.textValue?.trim();
      if (!text) return '';
      const headline = isHeadlineZone(zone);
      const fontFamily = fontFor(brandKit, headline ? 'Heading' : 'Body', CYTIVA_FONT_STACK);
      const fontSize = headline ? '28px' : '16px';
      const fontWeight = headline ? 'bold' : 'normal';
      const color = colorFor(brandKit, 'Secondary', CYTIVA_THEME.secondary);
      return `<tr>
        <td align="${cellAlign}" style="${cellStyle}font-family:${fontFamily};font-size:${fontSize};font-weight:${fontWeight};color:${color};line-height:1.5;">
          ${escapeHtml(text)}
        </td>
      </tr>`;
    }

    case 'Heading': {
      const text = value?.textValue?.trim();
      if (!text) return '';
      const level = zone.headingLevel ?? DEFAULT_HEADING_LEVEL;
      const fontFamily = fontFor(brandKit, 'Heading', CYTIVA_FONT_STACK);
      const fontSize = EMAIL_HEADING_FONT_SIZES[level];
      const color = colorFor(brandKit, 'Secondary', CYTIVA_THEME.secondary);
      const tag = level.toLowerCase();
      return `<tr>
        <td align="${cellAlign}" style="${cellStyle}">
          <${tag} style="margin:0;font-family:${fontFamily};font-size:${fontSize};font-weight:700;color:${color};line-height:1.25;">
            ${escapeHtml(text)}
          </${tag}>
        </td>
      </tr>`;
    }

    case 'Image': {
      const src = value?.imageAssetUrl?.trim();
      if (!src) return '';
      const imageTag = `<img src="${escapeHtml(src)}" alt="${escapeHtml(zone.zoneLabel)}" width="552" style="${getEmailImageStyle(zone)}" />`;
      const link = value?.linkUrl?.trim();
      const inner = link
        ? `<a href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">${imageTag}</a>`
        : imageTag;
      return `<tr><td align="${cellAlign}" style="${cellStyle}">${inner}</td></tr>`;
    }

    case 'CTA Button': {
      const text = value?.textValue?.trim();
      if (!text) return '';
      const href = value?.linkUrl?.trim() || '#';
      const background = colorFor(brandKit, 'Accent', CYTIVA_THEME.accent);
      const fontFamily = fontFor(brandKit, 'CTA', CYTIVA_FONT_STACK);
      return `<tr>
        <td align="${cellAlign}" style="${getEmailZoneCellStyle(zone, 'padding-bottom:32px;')}">
          <a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" style="${getEmailButtonWrapperStyle()}background-color:${background};color:#ffffff;font-family:${fontFamily};font-size:16px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:4px;">
            ${escapeHtml(text)}
          </a>
        </td>
      </tr>`;
    }

    case 'HTML': {
      const rawHtml = zone.isLocked
        ? zone.htmlDefaultContent
        : (value?.htmlValue ?? zone.htmlDefaultContent);
      const html = sanitizeZoneHtml(rawHtml);
      if (!html) return '';
      return `<tr><td align="${cellAlign}" style="${cellStyle}font-family:Arial,sans-serif;font-size:16px;line-height:1.5;color:#333333;">${html}</td></tr>`;
    }

    case 'Divider':
      return `<tr><td align="${cellAlign}" style="${cellStyle}"><hr style="border:none;border-top:1px solid #e0e0e0;margin:0;" /></td></tr>`;

    case 'Background Color':
      return '';

    default:
      return '';
  }
}

export function renderEmailHtml(
  template: Template,
  zoneValues: Record<string, ZoneValue>,
  brandKit: BrandKit
): string {
  const outerBackground = colorFor(brandKit, 'Background', CYTIVA_THEME.background);
  const cardBackground = '#ffffff';
  const contentWidth = resolveTemplateCanvasWidth(template);
  const rows = template.zones
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((zone) => renderZoneRow(zone, zoneValues[zone.id] ?? zoneValues[zone.zoneKey], brandKit))
    .filter(Boolean)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(template.templateName)}</title>
</head>
<body style="margin:0;padding:0;background-color:${outerBackground};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${outerBackground};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="${contentWidth}" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:${contentWidth}px;background-color:${cardBackground};border-collapse:collapse;">
          ${rows}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
