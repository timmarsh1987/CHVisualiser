import { DEFAULT_HEADING_LEVEL } from './headingLevel';
import type { Template, TemplateZone, ZoneType, ZoneValue } from './types';

function toContentHubStringProperty(value: string): { Invariant: string } {
  return { Invariant: value };
}

function writeStringProperty(properties: Record<string, unknown>, name: string, value: string): void {
  properties[name] = toContentHubStringProperty(value);
}

function writeBooleanProperty(properties: Record<string, unknown>, name: string, value: boolean): void {
  properties[name] = value;
}

function writeNumberProperty(properties: Record<string, unknown>, name: string, value: number): void {
  if (Number.isNaN(value)) return;
  properties[name] = value;
}

function sanitizeOptionalNumber(value: number | undefined): number | undefined {
  if (value == null || Number.isNaN(value)) return undefined;
  return value;
}

function sanitizeOptionalString(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

/** Strip optional fields that are invalid for the zone's type before PUT. */
export function normalizeTemplateZoneForSave(zone: TemplateZone): TemplateZone {
  const normalized: TemplateZone = {
    ...zone,
    sortOrder: sanitizeOptionalNumber(zone.sortOrder) ?? 0,
    positionX: sanitizeOptionalNumber(zone.positionX),
    positionY: sanitizeOptionalNumber(zone.positionY),
    zoneWidth: sanitizeOptionalNumber(zone.zoneWidth),
    zoneHeight: sanitizeOptionalNumber(zone.zoneHeight),
    offsetPx: sanitizeOptionalNumber(zone.offsetPx),
    maxCharacterCount: sanitizeOptionalNumber(zone.maxCharacterCount),
    aspectRatioLock: sanitizeOptionalString(zone.aspectRatioLock),
    htmlDefaultContent: sanitizeOptionalString(zone.htmlDefaultContent),
  };

  switch (normalized.zoneType) {
    case 'Text':
      normalized.headingLevel = undefined;
      normalized.aspectRatioLock = undefined;
      normalized.htmlDefaultContent = undefined;
      normalized.htmlAllowUserOverride = undefined;
      break;
    case 'Heading':
      normalized.aspectRatioLock = undefined;
      normalized.htmlDefaultContent = undefined;
      normalized.htmlAllowUserOverride = undefined;
      if (!normalized.headingLevel) {
        normalized.headingLevel = DEFAULT_HEADING_LEVEL;
      }
      break;
    case 'Image':
      normalized.maxCharacterCount = undefined;
      normalized.headingLevel = undefined;
      normalized.htmlDefaultContent = undefined;
      normalized.htmlAllowUserOverride = undefined;
      break;
    case 'HTML':
      normalized.maxCharacterCount = undefined;
      normalized.headingLevel = undefined;
      normalized.aspectRatioLock = undefined;
      break;
    default:
      normalized.maxCharacterCount = undefined;
      normalized.headingLevel = undefined;
      normalized.aspectRatioLock = undefined;
      normalized.htmlDefaultContent = undefined;
      normalized.htmlAllowUserOverride = undefined;
      break;
  }

  return normalized;
}

/** UI patch when the admin changes zone type — clears incompatible optional fields. */
export function buildZoneTypeChangePatch(zone: TemplateZone, zoneType: ZoneType): Partial<TemplateZone> {
  const patch: Partial<TemplateZone> = { zoneType };

  if (zoneType === 'Heading') {
    patch.headingLevel = zone.headingLevel ?? DEFAULT_HEADING_LEVEL;
    patch.aspectRatioLock = undefined;
    patch.htmlDefaultContent = undefined;
    patch.htmlAllowUserOverride = undefined;
    return patch;
  }

  patch.headingLevel = undefined;

  if (zoneType === 'Text') {
    patch.aspectRatioLock = undefined;
    patch.htmlDefaultContent = undefined;
    patch.htmlAllowUserOverride = undefined;
    return patch;
  }

  if (zoneType === 'Image') {
    patch.maxCharacterCount = undefined;
    patch.htmlDefaultContent = undefined;
    patch.htmlAllowUserOverride = undefined;
    return patch;
  }

  if (zoneType === 'HTML') {
    patch.maxCharacterCount = undefined;
    patch.aspectRatioLock = undefined;
    return patch;
  }

  patch.maxCharacterCount = undefined;
  patch.aspectRatioLock = undefined;
  patch.htmlDefaultContent = undefined;
  patch.htmlAllowUserOverride = undefined;
  return patch;
}

/** Identity only — Title. Writing zoneKey as a property 500s on this CH instance. */
export function zoneValueToCreateProperties(value: ZoneValue): Record<string, unknown> {
  return {
    Title: toContentHubStringProperty(value.zoneKey),
  };
}

const ZONE_VALUE_CONTENT_ALIASES: Record<
  'textValue' | 'colorValue' | 'htmlValue' | 'linkUrl',
  string[]
> = {
  textValue: ['textValue', 'TextValue', 'text', 'content', 'zoneText', 'value'],
  colorValue: ['colorValue', 'ColorValue', 'color', 'hexValue'],
  htmlValue: ['htmlValue', 'HtmlValue', 'html', 'htmlContent'],
  linkUrl: ['linkUrl', 'LinkUrl', 'url', 'href', 'link'],
};

export function zoneValueContentProperties(value: ZoneValue): Record<string, unknown> {
  const properties: Record<string, unknown> = {};

  if (value.textValue !== undefined) writeStringProperty(properties, 'textValue', value.textValue);
  if (value.colorValue !== undefined) writeStringProperty(properties, 'colorValue', value.colorValue);
  if (value.htmlValue !== undefined) writeStringProperty(properties, 'htmlValue', value.htmlValue);
  if (value.linkUrl !== undefined) writeStringProperty(properties, 'linkUrl', value.linkUrl);
  // imageAssetId / imageAssetUrl are linked via relation — writing long signed URLs as
  // string properties commonly 500s on EPAM.MarketingAssetZoneValue.

  return properties;
}

/**
 * Map logical content fields onto definition property names (case-insensitive + aliases).
 * Returns empty when the definition has no matching string fields.
 */
export function resolveZoneValueContentPropertiesForDefinition(
  value: ZoneValue,
  definitionProperties: { name: string }[]
): Record<string, unknown> {
  if (definitionProperties.length === 0) {
    return zoneValueContentProperties(value);
  }

  const byShortName = new Map<string, string>();
  for (const entry of definitionProperties) {
    const short = entry.name.includes('.') ? (entry.name.split('.').pop() ?? entry.name) : entry.name;
    byShortName.set(entry.name.toLowerCase(), entry.name);
    byShortName.set(short.toLowerCase(), entry.name);
  }

  const properties: Record<string, unknown> = {};
  const fields: Array<{ key: keyof typeof ZONE_VALUE_CONTENT_ALIASES; value?: string }> = [
    { key: 'textValue', value: value.textValue },
    { key: 'colorValue', value: value.colorValue },
    { key: 'htmlValue', value: value.htmlValue },
    { key: 'linkUrl', value: value.linkUrl },
  ];

  for (const field of fields) {
    if (field.value === undefined) continue;
    for (const alias of ZONE_VALUE_CONTENT_ALIASES[field.key]) {
      const canonical = byShortName.get(alias.toLowerCase());
      if (!canonical) continue;
      // Skip Title — reserved for zoneKey identity on this definition.
      if (/^title$/i.test(canonical) || /\.Title$/i.test(canonical)) continue;
      writeStringProperty(properties, canonical, field.value);
      break;
    }
  }

  return properties;
}

export function zoneValueHasPersistableContent(value: ZoneValue): boolean {
  return Boolean(
    value.textValue?.trim() ||
      value.htmlValue?.trim() ||
      value.colorValue?.trim() ||
      value.linkUrl?.trim() ||
      value.imageAssetId?.trim() ||
      value.imageAssetUrl?.trim()
  );
}

export function zoneValueToProperties(value: ZoneValue): Record<string, unknown> {
  return {
    ...zoneValueToCreateProperties(value),
    ...zoneValueContentProperties(value),
  };
}

export function marketingAssetToProperties(asset: {
  isRawHtmlOverrideMA?: boolean;
  rawHtmlOverrideContent?: string;
  overrideReasonMA?: string;
  zoneLayoutJson?: string;
  designerInstanceJson?: string;
}): Record<string, unknown> {
  const properties: Record<string, unknown> = {};

  if (asset.isRawHtmlOverrideMA !== undefined) {
    properties.isRawHtmlOverrideMA = asset.isRawHtmlOverrideMA;
  }
  if (asset.rawHtmlOverrideContent !== undefined) {
    writeStringProperty(properties, 'rawHtmlOverrideContent', asset.rawHtmlOverrideContent);
  }
  if (asset.overrideReasonMA !== undefined) {
    writeStringProperty(properties, 'overrideReasonMA', asset.overrideReasonMA);
  }
  if (asset.zoneLayoutJson !== undefined) {
    writeStringProperty(properties, 'zoneLayoutJson', asset.zoneLayoutJson);
  }
  if (asset.designerInstanceJson !== undefined) {
    writeStringProperty(properties, 'designerInstanceJson', asset.designerInstanceJson);
  }

  return properties;
}

/** Minimal properties for POST /api/entities — only the template name. */
export function templateToCreateProperties(template: Template): Record<string, unknown> {
  const name = toContentHubStringProperty(template.templateName);
  return { templateName: name };
}

/** Scalar properties for PUT after create/update. channelType and formatPreset are relations, not properties. */
export function templateToProperties(template: Template): Record<string, unknown> {
  const properties: Record<string, unknown> = {};

  writeStringProperty(properties, 'templateName', template.templateName);

  if (template.canvasWidth !== undefined) writeNumberProperty(properties, 'canvasWidth', template.canvasWidth);
  if (template.canvasHeight !== undefined) writeNumberProperty(properties, 'canvasHeight', template.canvasHeight);
  if (template.designerDocumentJson !== undefined) {
    writeStringProperty(properties, 'designerDocumentJson', template.designerDocumentJson);
  }

  return properties;
}

/** Minimal properties for POST /api/entities on EPAM.TemplateZone. */
export function templateZoneToCreateProperties(zone: TemplateZone): Record<string, unknown> {
  return {
    zoneKey: toContentHubStringProperty(zone.zoneKey),
    zoneLabel: toContentHubStringProperty(zone.zoneLabel || zone.zoneKey),
  };
}

/** Identity fields for PUT — only properties that differ from the loaded entity. */
export function templateZoneIdentityProperties(
  zone: TemplateZone,
  existing?: TemplateZone
): Record<string, unknown> {
  if (!existing) {
    return templateZoneToCreateProperties(zone);
  }

  const properties: Record<string, unknown> = {};
  const label = sanitizeOptionalString(zone.zoneLabel) ?? zone.zoneKey;
  const existingLabel = sanitizeOptionalString(existing.zoneLabel) ?? existing.zoneKey;

  if (zone.zoneKey !== existing.zoneKey) {
    writeStringProperty(properties, 'zoneKey', zone.zoneKey);
  }
  if (label !== existingLabel) {
    writeStringProperty(properties, 'zoneLabel', label);
  }

  return properties;
}

export function templateZoneCoreProperties(zone: TemplateZone): Record<string, unknown> {
  const properties: Record<string, unknown> = {};

  writeStringProperty(properties, 'zoneType', zone.zoneType);
  writeBooleanProperty(properties, 'isLocked', zone.isLocked);
  writeNumberProperty(properties, 'sortOrder', zone.sortOrder);

  return properties;
}

/** Property PUT attempts for zone type — CH may expect Invariant, plain string, or alternate names. */
export function zoneTypePropertyWriteAttempts(
  zoneType: ZoneType,
  preferredPropertyNames?: string[]
): Record<string, unknown>[] {
  const names = [
    ...new Set(
      (preferredPropertyNames?.length ? preferredPropertyNames : []).concat([
        'zoneType',
        'ZoneType',
        'EPAM.zoneType',
        'zoneTypeMA',
      ])
    ),
  ];

  const attempts: Record<string, unknown>[] = [];
  for (const name of names) {
    attempts.push({ [name]: toContentHubStringProperty(zoneType) });
    attempts.push({ [name]: zoneType });
  }
  return attempts;
}

export function templateZoneFlagsProperties(
  zone: TemplateZone,
  existing?: TemplateZone
): Record<string, unknown> {
  const properties: Record<string, unknown> = {};
  if (!existing || zone.isLocked !== existing.isLocked) {
    writeBooleanProperty(properties, 'isLocked', zone.isLocked);
  }
  if (!existing || zone.sortOrder !== existing.sortOrder) {
    writeNumberProperty(properties, 'sortOrder', zone.sortOrder);
  }
  return properties;
}

export function templateZoneLayoutProperties(
  zone: TemplateZone,
  existing?: TemplateZone
): Record<string, unknown> {
  const properties: Record<string, unknown> = {};

  if (zone.positionX !== undefined && zone.positionX !== existing?.positionX) {
    writeNumberProperty(properties, 'positionX', zone.positionX);
  }
  if (zone.positionY !== undefined && zone.positionY !== existing?.positionY) {
    writeNumberProperty(properties, 'positionY', zone.positionY);
  }
  if (zone.zoneWidth !== undefined && zone.zoneWidth !== existing?.zoneWidth) {
    writeNumberProperty(properties, 'zoneWidth', zone.zoneWidth);
  }
  if (zone.zoneHeight !== undefined && zone.zoneHeight !== existing?.zoneHeight) {
    writeNumberProperty(properties, 'zoneHeight', zone.zoneHeight);
  }
  if (
    zone.contentAlignment !== undefined &&
    zone.contentAlignment !== existing?.contentAlignment
  ) {
    writeStringProperty(properties, 'contentAlignment', zone.contentAlignment);
  }
  if (
    zone.offsetDirection !== undefined &&
    zone.offsetDirection !== existing?.offsetDirection
  ) {
    writeStringProperty(properties, 'offsetDirection', zone.offsetDirection);
  }
  if (zone.offsetPx !== undefined && zone.offsetPx !== existing?.offsetPx) {
    writeNumberProperty(properties, 'offsetPx', zone.offsetPx);
  }

  return properties;
}

export function templateZoneOptionalProperties(
  zone: TemplateZone,
  existing?: TemplateZone
): Record<string, unknown> {
  const normalized = normalizeTemplateZoneForSave(zone);
  const properties: Record<string, unknown> = {};

  if (normalized.zoneType === 'Text' || normalized.zoneType === 'Heading') {
    if (
      normalized.maxCharacterCount !== undefined &&
      normalized.maxCharacterCount !== existing?.maxCharacterCount
    ) {
      writeNumberProperty(properties, 'maxCharacterCount', normalized.maxCharacterCount);
    }
  }
  if (
    normalized.zoneType === 'Heading' &&
    normalized.headingLevel !== undefined &&
    normalized.headingLevel !== existing?.headingLevel
  ) {
    writeStringProperty(properties, 'headingLevel', normalized.headingLevel);
  }
  if (normalized.zoneType === 'Image' && normalized.aspectRatioLock !== undefined) {
    if (normalized.aspectRatioLock !== sanitizeOptionalString(existing?.aspectRatioLock)) {
      writeStringProperty(properties, 'aspectRatioLock', normalized.aspectRatioLock);
    }
  }
  if (normalized.zoneType === 'HTML') {
    if (
      normalized.htmlDefaultContent !== undefined &&
      normalized.htmlDefaultContent !== sanitizeOptionalString(existing?.htmlDefaultContent)
    ) {
      writeStringProperty(properties, 'htmlDefaultContent', normalized.htmlDefaultContent);
    }
    if (
      normalized.htmlAllowUserOverride !== undefined &&
      normalized.htmlAllowUserOverride !== existing?.htmlAllowUserOverride
    ) {
      writeBooleanProperty(properties, 'htmlAllowUserOverride', normalized.htmlAllowUserOverride);
    }
  }

  return properties;
}

export function templateZoneSavableProperties(zone: TemplateZone): Record<string, unknown> {
  const normalized = normalizeTemplateZoneForSave(zone);
  return {
    ...templateZoneCoreProperties(normalized),
    ...templateZoneLayoutProperties(normalized),
    ...templateZoneOptionalProperties(normalized),
  };
}

export function templateZoneToProperties(zone: TemplateZone): Record<string, unknown> {
  const normalized = normalizeTemplateZoneForSave(zone);
  return {
    ...templateZoneToCreateProperties(normalized),
    ...templateZoneSavableProperties(normalized),
  };
}

export function zonesAreEquivalent(a: TemplateZone, b: TemplateZone): boolean {
  const normalizedA = normalizeTemplateZoneForSave(a);
  const normalizedB = normalizeTemplateZoneForSave(b);
  const labelA = sanitizeOptionalString(normalizedA.zoneLabel) ?? normalizedA.zoneKey;
  const labelB = sanitizeOptionalString(normalizedB.zoneLabel) ?? normalizedB.zoneKey;

  return (
    normalizedA.zoneKey === normalizedB.zoneKey &&
    labelA === labelB &&
    JSON.stringify(templateZoneSavableProperties(normalizedA)) ===
      JSON.stringify(templateZoneSavableProperties(normalizedB))
  );
}

export function isPersistedEntityId(id: string): boolean {
  return /^\d+$/.test(id);
}
