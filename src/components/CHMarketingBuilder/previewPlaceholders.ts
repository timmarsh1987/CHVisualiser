import { zoneValueKeyForZone } from './assetLayout';
import { DEFAULT_CYTIVA_LOGO_URL } from './brandAssets';
import { isLogoZone } from './zoneHelpers';
import type { Template, ZoneValue } from './types';

/** Preview defaults keyed by template zone id. */
export function buildPreviewZoneValues(template: Template): Record<string, ZoneValue> {
  const values: Record<string, ZoneValue> = {};

  for (const zone of template.zones) {
    const zoneKey = zoneValueKeyForZone(zone, template.zones);
    const entry: ZoneValue = { zoneKey };

    if (isLogoZone(zone)) {
      entry.imageAssetUrl = DEFAULT_CYTIVA_LOGO_URL;
      values[zone.id] = entry;
      continue;
    }

    switch (zone.zoneType) {
      case 'Text':
      case 'Heading':
      case 'CTA Button':
        entry.textValue = zone.zoneLabel || zone.zoneKey;
        break;
      case 'HTML':
        entry.htmlValue =
          zone.htmlDefaultContent?.trim() ||
          `<p style="margin:0;color:#666;">${zone.zoneLabel || zone.zoneKey}</p>`;
        break;
      case 'Image':
        entry.imageAssetUrl = `https://placehold.co/552x200/e8eef5/607d8b?text=${encodeURIComponent(
          zone.zoneLabel || 'Image'
        )}`;
        break;
      default:
        break;
    }

    values[zone.id] = entry;
  }

  return values;
}

/**
 * Merge user values (keyed by zone id) with preview placeholders.
 * Returns a map keyed by zone id for LivePreview / email render.
 */
export function mergeZoneValuesWithPreviewDefaults(
  template: Template,
  zoneValues: Record<string, ZoneValue>
): Record<string, ZoneValue> {
  const defaults = buildPreviewZoneValues(template);
  const merged: Record<string, ZoneValue> = { ...defaults };

  for (const zone of template.zones) {
    const zoneKey = zoneValueKeyForZone(zone, template.zones);
    const current = zoneValues[zone.id] ?? zoneValues[zoneKey] ?? zoneValues[zone.zoneKey];
    if (!current) continue;

    if (isLogoZone(zone)) {
      merged[zone.id] = {
        zoneKey,
        imageAssetUrl: current.imageAssetUrl?.trim()
          ? current.imageAssetUrl
          : defaults[zone.id]?.imageAssetUrl,
      };
      continue;
    }

    merged[zone.id] = {
      ...defaults[zone.id],
      ...current,
      zoneKey,
      textValue: current.textValue?.trim() ? current.textValue : defaults[zone.id]?.textValue,
      htmlValue: current.htmlValue?.trim() ? current.htmlValue : defaults[zone.id]?.htmlValue,
      imageAssetUrl: current.imageAssetUrl?.trim()
        ? current.imageAssetUrl
        : defaults[zone.id]?.imageAssetUrl,
    };
  }

  return merged;
}
