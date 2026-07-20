import type { TemplateZone, ZoneType } from './types';

export function isLogoZone(zone: TemplateZone): boolean {
  if (zone.zoneType === 'Logo') return true;

  const key = (zone.zoneKey ?? '').trim().toLowerCase();
  const label = (zone.zoneLabel ?? '').trim().toLowerCase();
  return key === 'logo' || label === 'logo';
}

/** Fallback when EPAM.TemplateZone.zoneType is missing or still Text after a partial save. */
export function inferZoneTypeFromIdentity(zoneKey: string, zoneLabel: string): ZoneType | undefined {
  const key = (zoneKey ?? '').trim().toLowerCase();
  const label = (zoneLabel ?? '').trim().toLowerCase();

  if (key === 'logo' || label === 'logo') return 'Logo';
  if (key.includes('hero') || label.includes('hero') || key.includes('image') || label.includes('image')) {
    return 'Image';
  }
  if (key.includes('headline') || label.includes('headline') || key.includes('heading')) {
    return 'Heading';
  }
  if (key.includes('cta') || label.includes('cta') || label.includes('learn more') || label.includes('button')) {
    return 'CTA Button';
  }
  if (key.includes('divider')) return 'Divider';
  if (key.includes('background')) return 'Background Color';
  if (key.includes('html')) return 'HTML';
  return undefined;
}

export function resolveTemplateZoneType(
  rawZoneType: string | undefined,
  zoneKey: string,
  zoneLabel: string
): ZoneType {
  const normalized = (rawZoneType ?? '').trim();
  if (normalized) {
    const match = (
      [
        'Text',
        'Heading',
        'Image',
        'CTA Button',
        'Logo',
        'Background Color',
        'Divider',
        'HTML',
      ] as ZoneType[]
    ).find((entry) => entry.toLowerCase() === normalized.toLowerCase());
    if (match) return match;
  }

  return inferZoneTypeFromIdentity(zoneKey, zoneLabel) ?? 'Text';
}
