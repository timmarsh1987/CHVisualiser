import type { BuilderMode, MarketingBuilderOptions } from './types';
import { getRelationIdsFromSnapshot } from './relationResolve';

const BUILDER_MODES: BuilderMode[] = ['social', 'email', 'admin'];

export const TEMPLATE_ZONE_RELATION_NAMES = [
  'templateToZone',
  'templateToTemplateZone',
  'TemplateToZone',
  'TemplateToTemplateZone',
  'EPAM.TemplateToZone',
  'EPAM.TemplateToTemplateZone',
  'templateToEPAM.TemplateZone',
  'EPAM.TemplateZone',
  'TemplateZone',
];

export const TEMPLATE_ZONE_INVERSE_RELATION_NAMES = [
  'templateZoneToTemplate',
  'zoneToTemplate',
  'TemplateZoneToTemplate',
  'EPAM.TemplateZoneToTemplate',
  'EPAM.TemplateToTemplateZone',
  'templateToTemplate',
];

export const TEMPLATE_RELATION_KEYS = [
  'marketingAssetToTemplate',
  'MarketingAssetToTemplate',
  'EPAM.MarketingAssetToTemplate',
];

/** Child relation on EPAM.TemplateZone pointing to approved M.Asset entities. */
export const TEMPLATE_ZONE_ALLOWED_ASSET_RELATION_NAMES = [
  'templateZoneToAllowedAsset',
  'TemplateZoneToAllowedAsset',
  'EPAM.TemplateZoneToAllowedAsset',
  'templateZoneToAsset',
  'TemplateZoneToAsset',
  'EPAM.TemplateZoneToAsset',
];

/** Child relation on EPAM.Template — general asset pool available to every zone. */
export const TEMPLATE_ALLOWED_ASSET_RELATION_NAMES = [
  'templateToAllowedAsset',
  'TemplateToAllowedAsset',
  'EPAM.TemplateToAllowedAsset',
  'templateToAsset',
  'TemplateToAsset',
  'EPAM.TemplateToAsset',
];

/** Taxonomy relation on EPAM.TemplateZone for the zone type (Logo, Image, Text, …). */
export const TEMPLATE_ZONE_TYPE_RELATION_NAMES = [
  'zoneType',
  'ZoneType',
  'EPAM.ZoneType',
  'templateZoneType',
  'TemplateZoneType',
  'EPAM.TemplateZoneType',
];

/** Relation on EPAM.MarketingAssetZoneValue for the user-selected M.Asset. */
export const ZONE_VALUE_SELECTED_ASSET_RELATION_NAMES = [
  'zoneValueToSelectedAsset',
  'ZoneValueToSelectedAsset',
  'EPAM.MarketingAssetZoneValueToSelectedAsset',
  'marketingAssetZoneValueToSelectedAsset',
  'zoneValueToAsset',
  'ZoneValueToAsset',
];

function readPropertyString(val: unknown): string | undefined {
  if (typeof val === 'string') {
    const trimmed = val.trim();
    return trimmed || undefined;
  }
  if (val != null && typeof val === 'object' && !Array.isArray(val)) {
    const record = val as Record<string, unknown>;
    if (typeof record.Invariant === 'string' && record.Invariant.trim()) {
      return record.Invariant.trim();
    }
    for (const value of Object.values(record)) {
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }
    }
  }
  if (typeof val === 'number' && Number.isFinite(val)) {
    return String(val);
  }
  return undefined;
}

function coerceEntityId(value: unknown): string | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return String(value);
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed || undefined;
  }
  return undefined;
}

function getEntitySystemId(entity: unknown): string | undefined {
  if (!entity || typeof entity !== 'object') {
    return undefined;
  }

  const record = entity as Record<string, unknown>;
  const systemProperties =
    record.systemProperties && typeof record.systemProperties === 'object'
      ? (record.systemProperties as Record<string, unknown>)
      : null;

  return coerceEntityId(systemProperties?.id) || coerceEntityId(record.id);
}

function findPropertyByPattern(entity: unknown, pattern: RegExp): string | undefined {
  if (!entity || typeof entity !== 'object') {
    return undefined;
  }

  const properties = (entity as Record<string, unknown>).properties;
  if (!properties || typeof properties !== 'object') {
    return undefined;
  }

  for (const [key, value] of Object.entries(properties as Record<string, unknown>)) {
    if (!pattern.test(key)) continue;
    const parsed = readPropertyString(value);
    if (parsed) return parsed;
  }

  return undefined;
}

function getEntityProperty(entity: unknown, ...keys: string[]): string | undefined {
  if (!entity || typeof entity !== 'object') {
    return undefined;
  }

  const record = entity as Record<string, unknown>;

  if (typeof record.getPropertyValue === 'function') {
    for (const key of keys) {
      try {
        const value = readPropertyString(
          (record.getPropertyValue as (name: string) => unknown)(key)
        );
        if (value) return value;
      } catch {
        // property not on this definition
      }
    }
  }

  const properties =
    record.properties && typeof record.properties === 'object'
      ? (record.properties as Record<string, unknown>)
      : null;

  for (const key of keys) {
    const fromProperties = readPropertyString(properties?.[key]);
    if (fromProperties) return fromProperties;
    const direct = readPropertyString(record[key]);
    if (direct) return direct;
  }

  return undefined;
}

function getRelationEntityId(entity: unknown, ...relationNames: string[]): string | undefined {
  if (!entity || typeof entity !== 'object') {
    return undefined;
  }

  const relations = (entity as Record<string, unknown>).relations;
  if (!relations || typeof relations !== 'object') {
    return undefined;
  }

  const ids = getRelationIdsFromSnapshot(relations as Record<string, unknown>, ...relationNames);
  if (ids[0] != null) {
    return String(ids[0]);
  }

  return undefined;
}

function coerceBoolean(value: unknown): boolean | undefined {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'true' || normalized === '1' || normalized === 'yes') return true;
    if (normalized === 'false' || normalized === '0' || normalized === 'no') return false;
  }
  return undefined;
}

function coerceBuilderMode(value: unknown): BuilderMode | undefined {
  if (typeof value !== 'string') return undefined;
  const normalized = value.trim().toLowerCase() as BuilderMode;
  return BUILDER_MODES.includes(normalized) ? normalized : undefined;
}

function readOption(options: unknown, key: keyof MarketingBuilderOptions): unknown {
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    return undefined;
  }
  return (options as Record<string, unknown>)[key];
}

function readConfiguredBoolean(
  key: string,
  options?: unknown,
  config?: unknown
): boolean | undefined {
  const fromOptions = readOption(options, key as keyof MarketingBuilderOptions);
  const optionBoolean = coerceBoolean(fromOptions);
  if (optionBoolean !== undefined) return optionBoolean;

  const normalizedConfig = normalizeConfig(config);
  if (!normalizedConfig) return undefined;

  return coerceBoolean(normalizedConfig[key]);
}

function normalizeConfig(config: unknown): Record<string, unknown> | undefined {
  if (config == null) return undefined;

  if (typeof config === 'string') {
    const trimmed = config.trim();
    if (!trimmed) return undefined;
    try {
      const parsed = JSON.parse(trimmed) as unknown;
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      return undefined;
    }
    return undefined;
  }

  if (typeof config === 'object' && !Array.isArray(config)) {
    return config as Record<string, unknown>;
  }

  return undefined;
}

function readConfiguredString(
  key: string,
  options?: unknown,
  config?: unknown
): string | undefined {
  const fromOptions = readOption(options, key as keyof MarketingBuilderOptions);
  const optionString = readPropertyString(fromOptions);
  if (optionString) return optionString;

  const normalizedConfig = normalizeConfig(config);
  if (!normalizedConfig) return undefined;

  return readPropertyString(normalizedConfig[key]);
}

export function parseMarketingBuilderOptions(
  options: unknown,
  entity?: unknown,
  config?: unknown
): MarketingBuilderOptions {
  const builderMode =
    coerceBuilderMode(readOption(options, 'builderMode')) ??
    coerceBuilderMode(readConfiguredString('builderMode', options, config));

  const templateId =
    readConfiguredString('templateId', options, config) ||
    getRelationEntityId(entity, 'marketingAssetToTemplate');

  const marketingAssetId = getEntitySystemId(entity);

  return {
    builderMode,
    brandKitId: readConfiguredString('brandKitId', options, config),
    templateId,
    marketingAssetId,
    userHasOverridePermission:
      readConfiguredBoolean('userHasOverridePermission', options, config) ?? false,
    allowTemplateZoneEditing:
      readConfiguredBoolean('allowTemplateZoneEditing', options, config) ?? false,
    renderEmailApiUrl:
      readConfiguredString('renderEmailApiUrl', options, config) ||
      '/api/render-email-html',
    contentHubProxyBase:
      readConfiguredString('contentHubProxyBase', options, config) ||
      '/api/content-hub',
    html2canvasCdnUrl: readConfiguredString('html2canvasCdnUrl', options, config),
    figmaImportApiUrl:
      readConfiguredString('figmaImportApiUrl', options, config) || '/api/figma/import',
    figmaImportApiToken: readConfiguredString('figmaImportApiToken', options, config),
    searchIdentifier: readConfiguredString('searchIdentifier', options, config),
    selectionPoolIdentifier: readConfiguredString('selectionPoolIdentifier', options, config),
  };
}

export function describeMissingTemplateId(entity?: unknown, config?: unknown): string {
  if (entity && typeof entity === 'object') {
    const relations = (entity as Record<string, unknown>).relations;
    if (relations && typeof relations === 'object') {
      const templateRelation = (relations as Record<string, unknown>).marketingAssetToTemplate;
      if (Array.isArray(templateRelation) && templateRelation.length === 0) {
        return 'This marketing asset has no template linked yet. Set the marketingAssetToTemplate relation on this record in Content Hub, or set templateId in the External component Configuration.';
      }
    }
  }

  if (!config || typeof config !== 'object' || Array.isArray(config) || Object.keys(config).length === 0) {
    return 'templateId could not be resolved from this entity. Set templateId in Manage > Pages > EPAM.MarketingAsset details page > External component > Configuration, or link a template to the marketing asset.';
  }

  return 'templateId is required. Set it in component Configuration or link a template to this marketing asset.';
}

export function resolveBuilderMode(
  options: MarketingBuilderOptions,
  channelType?: string
): BuilderMode {
  if (options.builderMode) {
    return options.builderMode;
  }

  const normalized = channelType?.trim().toLowerCase();
  if (normalized === 'email' || normalized === 'newsletter') {
    return 'email';
  }

  return 'social';
}
