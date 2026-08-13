import {
  getRelationIdsFromSnapshot,
  idsFromRelationEntries,
  readRelatedPathLabel,
} from './relationResolve';
import type {
  BrandColor,
  BrandFont,
  BrandKit,
  ChannelType,
  EntityRelationRef,
  HeadingLevel,
  MarketingAsset,
  Template,
  TemplateZone,
  ZoneType,
  ZoneValue,
} from './types';
import { coerceHeadingLevel, DEFAULT_HEADING_LEVEL } from './headingLevel';
import {
  coerceContentAlignment,
  coerceOffsetDirection,
} from './zoneLayout';
import { resolveTemplateZoneType } from './zoneHelpers';
import {
  TEMPLATE_ALLOWED_ASSET_RELATION_NAMES,
  TEMPLATE_ZONE_ALLOWED_ASSET_RELATION_NAMES,
  ZONE_VALUE_SELECTED_ASSET_RELATION_NAMES,
} from './options';

type EntityPayload = {
  properties?: Record<string, unknown>;
  relations?: Record<string, unknown>;
  systemProperties?: { id?: number };
};

const CHANNEL_TYPES: ChannelType[] = ['Social', 'Email', 'Newsletter'];
const ZONE_TYPES: ZoneType[] = [
  'Text', 'Heading', 'Image', 'CTA Button', 'Logo', 'Background Color', 'Divider', 'HTML',
];

function readPropertyValue(value: unknown): unknown {
  if (value == null) return undefined;
  if (typeof value !== 'object' || Array.isArray(value)) return value;
  const record = value as Record<string, unknown>;
  if ('Invariant' in record) return record.Invariant;
  if (typeof record.identifier === 'string' && record.identifier.trim()) {
    return record.identifier;
  }
  const labels = record.labels ?? record.Labels;
  if (labels != null && typeof labels === 'object' && !Array.isArray(labels)) {
    for (const label of Object.values(labels as Record<string, unknown>)) {
      if (typeof label === 'string' && label.trim()) return label;
    }
  }
  const firstString = Object.values(record).find((entry) => typeof entry === 'string');
  return firstString ?? value;
}

function readStringProperty(properties: Record<string, unknown> | undefined, ...keys: string[]): string {
  if (!properties) return '';
  for (const key of keys) {
    const raw = readPropertyValue(properties[key]);
    if (raw == null) continue;
    const text = String(raw).trim();
    if (text) return text;
  }
  return '';
}

function readNumberProperty(properties: Record<string, unknown> | undefined, ...keys: string[]): number | undefined {
  if (!properties) return undefined;
  for (const key of keys) {
    const raw = readPropertyValue(properties[key]);
    if (typeof raw === 'number' && Number.isFinite(raw)) return raw;
    if (typeof raw === 'string') {
      const parsed = Number(raw);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return undefined;
}

function readBooleanProperty(properties: Record<string, unknown> | undefined, ...keys: string[]): boolean {
  if (!properties) return false;
  for (const key of keys) {
    const raw = readPropertyValue(properties[key]);
    if (typeof raw === 'boolean') return raw;
    if (typeof raw === 'string') {
      const normalized = raw.trim().toLowerCase();
      if (normalized === 'true' || normalized === '1') return true;
      if (normalized === 'false' || normalized === '0') return false;
    }
  }
  return false;
}

function relationIds(relations: Record<string, unknown> | undefined, ...names: string[]): number[] {
  const fromSnapshot = getRelationIdsFromSnapshot(relations, ...names);
  if (fromSnapshot.length > 0) return fromSnapshot;
  if (!relations) return [];
  for (const name of names) {
    const value = relations[name];
    if (!Array.isArray(value)) continue;
    const ids = idsFromRelationEntries(value);
    if (ids.length > 0) return ids;
  }
  return [];
}

function relationIdsByPattern(relations: Record<string, unknown> | undefined, pattern: RegExp): number[] {
  if (!relations) return [];
  for (const [name, value] of Object.entries(relations)) {
    if (!pattern.test(name) || !Array.isArray(value)) continue;
    const ids = value
      .map((entry) => (typeof entry === 'number' ? entry : undefined))
      .filter((entry): entry is number => typeof entry === 'number');
    if (ids.length > 0) return ids;
  }
  return [];
}

function coerceChannelType(value: string): ChannelType {
  const normalized = value.trim().toLowerCase();
  if (normalized.includes('email')) return 'Email';
  if (normalized.includes('newsletter')) return 'Newsletter';
  return 'Social';
}

function coerceZoneType(value: string): ZoneType {
  const match = ZONE_TYPES.find((zoneType) => zoneType.toLowerCase() === value.trim().toLowerCase());
  return match ?? 'Text';
}

function readHeadingLevel(properties: Record<string, unknown> | undefined): HeadingLevel | undefined {
  const value = readStringProperty(properties, 'EPAM.headingLevel', 'headingLevel');
  return value ? coerceHeadingLevel(value) : undefined;
}

function readContentAlignment(properties: Record<string, unknown> | undefined) {
  const value = readStringProperty(properties, 'EPAM.contentAlignment', 'contentAlignment');
  return value ? coerceContentAlignment(value) : undefined;
}

function readOffsetDirection(properties: Record<string, unknown> | undefined) {
  const value = readStringProperty(properties, 'EPAM.offsetDirection', 'offsetDirection');
  return value ? coerceOffsetDirection(value) : undefined;
}

function toRelationRef(id: number | string, name = ''): EntityRelationRef {
  return { id: String(id), name: name || String(id) };
}

export function mapEntityToTemplate(entityId: string | number, payload: EntityPayload, zones: TemplateZone[] = []): Template {
  const properties = payload.properties ?? {};
  const relations = payload.relations ?? {};
  const payloadRecord = payload as Record<string, unknown>;
  const channelTypeRaw =
    readStringProperty(properties, 'EPAM.channelType', 'channelType') ||
    readStringProperty(properties, 'EPAM.channelTypeMA', 'channelTypeMA') ||
    readRelatedPathLabel(payloadRecord, 'channelType');

  const brandKitFromProperty = readStringProperty(properties, 'EPAM.brandKitId', 'brandKitId');
  const brandKitFromRelation = relationIds(
    relations,
    'templateToBrandKit',
    'TemplateToBrandKit',
    'EPAM.TemplateToBrandKit',
    'marketingTemplateToBrandKit'
  )[0];

  return {
    id: String(entityId),
    templateName: readStringProperty(properties, 'EPAM.templateName', 'templateName', 'Title') || `Template ${entityId}`,
    channelType: CHANNEL_TYPES.includes(channelTypeRaw as ChannelType)
      ? (channelTypeRaw as ChannelType)
      : coerceChannelType(channelTypeRaw),
    formatPreset:
      readStringProperty(properties, 'EPAM.formatPreset', 'formatPreset') ||
      readRelatedPathLabel(payloadRecord, 'formatPreset') ||
      '',
    canvasWidth: readNumberProperty(properties, 'EPAM.canvasWidth', 'canvasWidth'),
    canvasHeight: readNumberProperty(properties, 'EPAM.canvasHeight', 'canvasHeight'),
    brandKitId: brandKitFromProperty || (brandKitFromRelation != null ? String(brandKitFromRelation) : ''),
    zones,
    allowedAssetIds: getTemplateAllowedAssetIds(payload).map(String),
    designerDocumentJson:
      readStringProperty(
        properties,
        'EPAM.designerDocumentJson',
        'designerDocumentJson',
        'DesignerDocumentJson'
      ) || undefined,
  };
}

export function mapEntityToTemplateZone(entityId: string | number, payload: EntityPayload): TemplateZone {
  const properties = payload.properties ?? {};
  const payloadRecord = payload as Record<string, unknown>;
  const zoneKey = readStringProperty(properties, 'EPAM.zoneKey', 'zoneKey') || `zone-${entityId}`;
  const zoneLabel =
    readStringProperty(properties, 'EPAM.zoneLabel', 'zoneLabel', 'Title') || `Zone ${entityId}`;
  const zoneTypeRaw =
    readStringProperty(properties, 'EPAM.zoneType', 'zoneType', 'ZoneType', 'zoneTypeMA', 'ZoneTypeMA') ||
    readRelatedPathLabel(payloadRecord, 'zoneType') ||
    readRelatedPathLabel(payloadRecord, 'ZoneType') ||
    readRelatedPathLabel(payloadRecord, 'EPAM.ZoneType') ||
    readRelatedPathLabel(payloadRecord, 'zoneTypeMA');
  const zoneType = resolveTemplateZoneType(zoneTypeRaw, zoneKey, zoneLabel);
  const headingLevel = readHeadingLevel(properties) ?? (zoneType === 'Heading' ? DEFAULT_HEADING_LEVEL : undefined);

  return {
    id: String(entityId),
    zoneKey,
    zoneLabel,
    zoneType,
    isLocked: readBooleanProperty(properties, 'EPAM.isLocked', 'isLocked'),
    sortOrder: readNumberProperty(properties, 'EPAM.sortOrder', 'sortOrder') ?? 0,
    positionX: readNumberProperty(properties, 'EPAM.positionX', 'positionX'),
    positionY: readNumberProperty(properties, 'EPAM.positionY', 'positionY'),
    zoneWidth: readNumberProperty(properties, 'EPAM.zoneWidth', 'zoneWidth'),
    zoneHeight: readNumberProperty(properties, 'EPAM.zoneHeight', 'zoneHeight'),
    maxCharacterCount: readNumberProperty(properties, 'EPAM.maxCharacterCount', 'maxCharacterCount'),
    headingLevel,
    contentAlignment: readContentAlignment(properties),
    offsetDirection: readOffsetDirection(properties),
    offsetPx: readNumberProperty(properties, 'EPAM.offsetPx', 'offsetPx'),
    aspectRatioLock: readStringProperty(properties, 'EPAM.aspectRatioLock', 'aspectRatioLock') || undefined,
    htmlDefaultContent: readStringProperty(properties, 'EPAM.htmlDefaultContent', 'htmlDefaultContent') || undefined,
    htmlAllowUserOverride: readBooleanProperty(properties, 'EPAM.htmlAllowUserOverride', 'htmlAllowUserOverride'),
    allowedAssetIds: getTemplateZoneAllowedAssetIds(payload).map(String),
    allowedAssetCollectionId:
      readStringProperty(properties, 'EPAM.allowedAssetCollectionId', 'allowedAssetCollectionId') || undefined,
  };
}

export function mapEntityToZoneValue(entityId: string | number, payload: EntityPayload): ZoneValue {
  const properties = payload.properties ?? {};
  const selectedAssetIds = getZoneValueSelectedAssetIds(payload);
  const relatedAssetId = selectedAssetIds[0] != null ? String(selectedAssetIds[0]) : undefined;

  return {
    id: String(entityId),
    zoneKey:
      readStringProperty(properties, 'EPAM.zoneKey', 'zoneKey', 'Title') || `zone-${entityId}`,
    textValue: readStringProperty(properties, 'EPAM.textValue', 'textValue') || undefined,
    colorValue: readStringProperty(properties, 'EPAM.colorValue', 'colorValue') || undefined,
    htmlValue: readStringProperty(properties, 'EPAM.htmlValue', 'htmlValue') || undefined,
    imageAssetId:
      readStringProperty(properties, 'EPAM.imageAssetId', 'imageAssetId') || relatedAssetId || undefined,
    imageAssetUrl: readStringProperty(properties, 'EPAM.imageAssetUrl', 'imageAssetUrl') || undefined,
    linkUrl: readStringProperty(properties, 'EPAM.linkUrl', 'linkUrl') || undefined,
  };
}

export function mapEntityToMarketingAsset(
  entityId: string | number,
  payload: EntityPayload,
  zoneValues: ZoneValue[] = []
): MarketingAsset {
  const properties = payload.properties ?? {};
  const relations = payload.relations ?? {};
  const templateId =
    readStringProperty(properties, 'EPAM.templateId', 'templateId') ||
    String(
      relationIds(
        relations,
        'marketingAssetToTemplate',
        'MarketingAssetToTemplate',
        'EPAM.MarketingAssetToTemplate'
      )[0] ?? ''
    );

  return {
    id: String(entityId),
    assetName: readStringProperty(properties, 'EPAM.assetName', 'assetName', 'Title') || `Asset ${entityId}`,
    channelTypeMA: toRelationRef(
      relationIds(relations, 'channelTypeMA', 'ChannelTypeMA')[0] ?? 'channel',
      readStringProperty(properties, 'EPAM.channelTypeMA', 'channelTypeMA') || 'Channel'
    ),
    formatPresetMA: toRelationRef(
      relationIds(relations, 'formatPresetMA', 'FormatPresetMA')[0] ?? 'format',
      readStringProperty(properties, 'EPAM.formatPresetMA', 'formatPresetMA') || 'Format'
    ),
    outputFormatMA: toRelationRef(
      relationIds(relations, 'outputFormatMA', 'OutputFormatMA')[0] ?? 'output',
      readStringProperty(properties, 'EPAM.outputFormatMA', 'outputFormatMA') || 'Output'
    ),
    templateId,
    isRawHtmlOverrideMA: readBooleanProperty(properties, 'EPAM.isRawHtmlOverrideMA', 'isRawHtmlOverrideMA'),
    rawHtmlOverrideContent:
      readStringProperty(properties, 'EPAM.rawHtmlOverrideContent', 'rawHtmlOverrideContent') || undefined,
    overrideReasonMA: readStringProperty(properties, 'EPAM.overrideReasonMA', 'overrideReasonMA') || undefined,
    zoneLayoutJson:
      readStringProperty(properties, 'EPAM.zoneLayoutJson', 'zoneLayoutJson', 'builderLayoutJson') || undefined,
    designerInstanceJson:
      readStringProperty(
        properties,
        'EPAM.designerInstanceJson',
        'designerInstanceJson',
        'DesignerInstanceJson'
      ) || undefined,
    zoneValues,
    renderedOutputAssetId:
      readStringProperty(properties, 'EPAM.renderedOutputAssetId', 'renderedOutputAssetId') ||
      String(relationIds(relations, 'marketingAssetToRenderedOutput')[0] ?? '') ||
      undefined,
  };
}

export function mapEntityToBrandKit(
  entityId: string | number,
  payload: EntityPayload,
  colors: BrandColor[] = [],
  fonts: BrandFont[] = []
): BrandKit {
  const properties = payload.properties ?? {};
  return {
    id: String(entityId),
    brandKitName: readStringProperty(properties, 'EPAM.brandKitName', 'brandKitName', 'Title') || `Brand kit ${entityId}`,
    logoAssetUrl: readStringProperty(properties, 'EPAM.logoAssetUrl', 'logoAssetUrl'),
    colors,
    fonts,
  };
}

export function getTemplateAllowedAssetIds(payload: EntityPayload): number[] {
  const fromNamed = relationIds(payload.relations, ...TEMPLATE_ALLOWED_ASSET_RELATION_NAMES);
  const fromPattern: number[] = [];

  if (payload.relations) {
    for (const [name, value] of Object.entries(payload.relations)) {
      if (!/template.*asset|allowed.*asset/i.test(name) || /collection|zone/i.test(name)) continue;
      if (!Array.isArray(value)) continue;
      fromPattern.push(...idsFromRelationEntries(value));
    }
  }

  return [...new Set([...fromNamed, ...fromPattern])];
}

export function getZoneValueSelectedAssetIds(payload: EntityPayload): number[] {
  const fromNamed = relationIds(payload.relations, ...ZONE_VALUE_SELECTED_ASSET_RELATION_NAMES);
  const fromPattern: number[] = [];

  if (payload.relations) {
    for (const [name, value] of Object.entries(payload.relations)) {
      if (!/selected.*asset|zonevalue.*asset/i.test(name) || /collection/i.test(name)) continue;
      if (!Array.isArray(value)) continue;
      fromPattern.push(...idsFromRelationEntries(value));
    }
  }

  return [...new Set([...fromNamed, ...fromPattern])];
}

export function getTemplateZoneAllowedAssetIds(payload: EntityPayload): number[] {
  const fromNamed = relationIds(payload.relations, ...TEMPLATE_ZONE_ALLOWED_ASSET_RELATION_NAMES);
  const fromPattern: number[] = [];

  if (payload.relations) {
    for (const [name, value] of Object.entries(payload.relations)) {
      if (!/allowed.*asset|zone.*asset/i.test(name) || /collection/i.test(name)) continue;
      if (!Array.isArray(value)) continue;
      fromPattern.push(...idsFromRelationEntries(value));
    }
  }

  return [...new Set([...fromNamed, ...fromPattern])];
}

export function getTemplateZoneRelationIds(payload: EntityPayload): number[] {
  return [...new Set([
    ...relationIds(
      payload.relations,
      'templateToZone',
      'templateToTemplateZone',
      'TemplateToTemplateZone',
      'EPAM.TemplateToTemplateZone',
      'templateToEPAM.TemplateZone'
    ),
    ...relationIdsByPattern(payload.relations, /template.*zone/i),
  ])];
}

export function getMarketingAssetZoneValueIds(payload: EntityPayload): number[] {
  return [...new Set([
    ...relationIds(
      payload.relations,
      'marketingAssetToZoneValue',
      'MarketingAssetToZoneValue',
      'EPAM.MarketingAssetToZoneValue'
    ),
    ...relationIdsByPattern(payload.relations, /zonevalue/i),
  ])];
}

export function mapEntityToBrandColor(entityId: string | number, payload: EntityPayload): BrandColor {
  const properties = payload.properties ?? {};
  const usage = readStringProperty(properties, 'EPAM.colorUsageType', 'colorUsageType') || 'Primary';
  return {
    colorName: readStringProperty(properties, 'EPAM.colorName', 'colorName') || `Color ${entityId}`,
    hexValue: readStringProperty(properties, 'EPAM.hexValue', 'hexValue') || '#000000',
    colorUsageType: usage as BrandColor['colorUsageType'],
  };
}

export function mapEntityToBrandFont(entityId: string | number, payload: EntityPayload): BrandFont {
  const properties = payload.properties ?? {};
  const usage = readStringProperty(properties, 'EPAM.fontUsageType', 'fontUsageType') || 'Body';
  const weight = readStringProperty(properties, 'EPAM.fontWeight', 'fontWeight') || 'Regular';
  return {
    fontFamily: readStringProperty(properties, 'EPAM.fontFamily', 'fontFamily') || 'sans-serif',
    fontWeight: weight as BrandFont['fontWeight'],
    fontUsageType: usage as BrandFont['fontUsageType'],
  };
}

export function getBrandKitColorIds(payload: EntityPayload): number[] {
  return relationIds(
    payload.relations,
    'brandKitToColor',
    'BrandKitToColor',
    'brandKitToBrandColor'
  ).concat(relationIdsByPattern(payload.relations, /color/i));
}

export function getBrandKitFontIds(payload: EntityPayload): number[] {
  return relationIds(
    payload.relations,
    'brandKitToFont',
    'BrandKitToFont',
    'brandKitToBrandFont'
  ).concat(relationIdsByPattern(payload.relations, /font/i));
}

export type { EntityPayload };
