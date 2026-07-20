import {
  enrichTemplateZoneType,
  syncTemplateZoneTypeRelation,
  warmZoneTypeTaxonomyFromZonePayloads,
  zonePayloadHasZoneTypeRelation,
} from './zoneTypeTaxonomy';
import {
  resolveZoneTypeStorage,
  usesZoneTypePropertyStorage,
  usesZoneTypeRelationStorage,
} from './zoneTypeStorage';
import {
  COLLECTION_ASSET_RELATION_NAMES,
  filterPickedAssets,
  mapEntityPayloadToPickedAsset,
  type PickedAsset,
} from './assetSearch';
import {
  createDummyAssetSearchResults,
  createDummyBrandKit,
  createDummyMarketingAsset,
  createDummyTemplate,
  DUMMY_BRAND_KIT_ID,
  DUMMY_TEMPLATE_ID,
  logFallback,
} from './fallbackData';
import { logInfo, logMissing, logResolved } from './debugLog';
import {
  isPersistedEntityId,
  marketingAssetToProperties,
  normalizeTemplateZoneForSave,
  templateToCreateProperties,
  templateToProperties,
  templateZoneFlagsProperties,
  templateZoneIdentityProperties,
  templateZoneLayoutProperties,
  templateZoneOptionalProperties,
  templateZoneToCreateProperties,
  zoneTypePropertyWriteAttempts,
  zonesAreEquivalent,
  resolveZoneValueContentPropertiesForDefinition,
  zoneValueContentProperties,
  zoneValueHasPersistableContent,
  zoneValueToCreateProperties,
} from './entityWrite';
import {
  discoverRelationNames,
  fetchFirstRelationEntityIds,
  fetchRelationEntityIds,
  getRelationHref,
  idsFromRelationResponse,
} from './relationResolve';
import {
  logTemplateRelationKeys,
  logZoneRelationKeys,
  fetchDefinitionProperties,
  resolveTemplateZoneLinkRelations,
} from './entityDefinitionResolve';
import { TEMPLATE_ZONE_INVERSE_RELATION_NAMES, TEMPLATE_ZONE_RELATION_NAMES } from './options';
import {
  appendChildRelation,
  clearParentRelation,
  collectRelationNameCandidates,
  removeChildRelation,
  setParentRelation,
} from './relationWrite';
import {
  getBrandKitColorIds,
  getBrandKitFontIds,
  getMarketingAssetZoneValueIds,
  getTemplateAllowedAssetIds,
  getTemplateZoneAllowedAssetIds,
  getZoneValueSelectedAssetIds,
  getTemplateZoneRelationIds,
  mapEntityToBrandColor,
  mapEntityToBrandFont,
  mapEntityToBrandKit,
  mapEntityToMarketingAsset,
  mapEntityToTemplate,
  mapEntityToTemplateZone,
  mapEntityToZoneValue,
  type EntityPayload,
} from './entityMap';
import type { BrandKit, ChannelType, MarketingAsset, Template, TemplateZone, ZoneType, ZoneValue } from './types';
import { buildEntityPutBody } from './entityPut';
import { buildDuplicateTemplate } from './templateDuplicate';
import {
  templateAllowedAssetRelationNames,
  zoneAllowedAssetRelationNames,
  zoneValueSelectedAssetRelationNames,
} from './zoneAssetRelations';

type RawResponse<T> = {
  isSuccessStatusCode?: boolean;
  content?: T;
  statusCode?: number;
};

type ChClient = {
  raw?: {
    getAsync: <T>(url: string) => Promise<RawResponse<T>>;
    putAsync?: <T>(url: string, body: unknown) => Promise<RawResponse<T>>;
    postAsync?: <T>(url: string, body: unknown) => Promise<RawResponse<T>>;
    deleteAsync?: <T>(url: string) => Promise<RawResponse<T>>;
  };
};

const DEFAULT_PROXY_BASE = '/api/content-hub';
export const DEFAULT_RENDER_EMAIL_API_URL = '/api/render-email-html';

let chClient: ChClient | null = null;
let proxyBase = DEFAULT_PROXY_BASE;

export function isRenderedOutputUploadEnabled(): boolean {
  const normalized = proxyBase.replace(/\/$/, '');
  return normalized !== DEFAULT_PROXY_BASE;
}

export function isDefaultRenderEmailApiUrl(url: string): boolean {
  const normalized = url.trim().replace(/\/$/, '');
  return !normalized || normalized === DEFAULT_RENDER_EMAIL_API_URL;
}

export function setContentHubClient(client: unknown) {
  chClient = client as ChClient;
}

export function setContentHubProxyBase(base: string) {
  proxyBase = base.replace(/\/$/, '') || DEFAULT_PROXY_BASE;
}

async function proxyRequest<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${proxyBase}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Content Hub API error (${response.status}): ${body}`);
  }

  return response.json();
}

async function getEntityPayload(entityId: string | number): Promise<EntityPayload> {
  if (!chClient?.raw?.getAsync) {
    throw new Error('Content Hub client is not available. This component must run inside Content Hub.');
  }

  const response = await chClient.raw.getAsync<EntityPayload>(`/api/entities/${entityId}`);
  if (!response.isSuccessStatusCode || !response.content) {
    throw new Error(`Content Hub API error (${response.statusCode ?? 'unknown'}) loading entity ${entityId}`);
  }

  return response.content;
}

async function loadRelatedEntities(entityIds: number[]): Promise<EntityPayload[]> {
  const uniqueIds = [...new Set(entityIds.filter((id) => Number.isFinite(id)))];
  if (uniqueIds.length === 0) return [];

  return Promise.all(
    uniqueIds.map(async (id) => {
      try {
        return await getEntityPayload(id);
      } catch (error) {
        logInfo(
          'related entity',
          `Skipped entity ${id}: ${error instanceof Error ? error.message : String(error)}`
        );
        // Keep index alignment for callers that zip payloads with ids.
        return { properties: {}, relations: {}, systemProperties: { id } };
      }
    })
  );
}

async function enrichTemplateRelations(templateId: string, template: Template, payload: EntityPayload): Promise<Template> {
  let brandKitId = template.brandKitId?.trim() ?? '';

  if (!brandKitId) {
    const brandKitIds = await fetchRelationEntityIds(
      chClient,
      templateId,
      'templateToBrandKit',
      payload.relations
    );
    if (brandKitIds[0] != null) {
      brandKitId = String(brandKitIds[0]);
      logResolved('brandKitId', `Resolved ${brandKitId} from templateToBrandKit on template ${templateId}`);
    } else {
      logMissing(
        'brandKitId',
        `No brand kit linked on template ${templateId}`,
        'Link templateToBrandKit on the template, or set brandKitId in External component Configuration.'
      );
    }
  }

  return {
    ...template,
    brandKitId,
    allowedAssetIds:
      template.allowedAssetIds && template.allowedAssetIds.length > 0
        ? template.allowedAssetIds
        : getTemplateAllowedAssetIds(payload).map(String),
  };
}

async function enrichTemplateZone(zone: TemplateZone, payload: EntityPayload): Promise<TemplateZone> {
  const assetIds = getTemplateZoneAllowedAssetIds(payload);
  if (assetIds.length > 0) {
    return { ...zone, allowedAssetIds: assetIds.map(String) };
  }

  // Legacy fallback: collection link on the zone.
  if (!getRelationHref(payload.relations, 'templateZoneToAllowedAssetCollection')) {
    return zone;
  }

  const collectionIds = await fetchRelationEntityIds(
    chClient,
    zone.id,
    'templateZoneToAllowedAssetCollection',
    payload.relations
  );
  if (collectionIds[0] != null) {
    return { ...zone, allowedAssetCollectionId: String(collectionIds[0]) };
  }
  return zone;
}

function templateZoneRelationCandidates(relations?: Record<string, unknown>): string[] {
  const discovered = discoverRelationNames(relations, /template.*zone/i);
  return [...new Set([...discovered, ...TEMPLATE_ZONE_RELATION_NAMES])];
}

async function queryEntityIdsByParentRelation(
  definitionName: string,
  parentRelationName: string,
  parentId: string
): Promise<number[]> {
  if (!chClient?.raw?.getAsync) return [];

  const query = encodeURIComponent(
    `Definition.Name=='${definitionName}' AND Parent('${parentRelationName}').Id==${parentId}`
  );

  try {
    const response = await chClient.raw.getAsync<{ items?: unknown[]; content?: unknown[] }>(
      `/api/entities/query?query=${query}`
    );
    if (!response.isSuccessStatusCode || !response.content) return [];

    const items = Array.isArray(response.content)
      ? response.content
      : Array.isArray((response.content as { items?: unknown[] }).items)
        ? (response.content as { items: unknown[] }).items
        : [];

    const ids: number[] = [];
    for (const item of items) {
      if (item == null || typeof item !== 'object') continue;
      const record = item as Record<string, unknown>;
      const systemId = record.systemProperties as Record<string, unknown> | undefined;
      const id = systemId?.id ?? record.id ?? record.entityId;
      if (typeof id === 'number' && Number.isFinite(id)) {
        ids.push(id);
      }
    }
    return ids;
  } catch {
    return [];
  }
}

const TEMPLATE_CHANNEL_TYPE_RELATIONS = ['channelType', 'ChannelType', 'EPAM.ChannelType'];
const TEMPLATE_FORMAT_PRESET_RELATIONS = ['formatPreset', 'FormatPreset', 'EPAM.FormatPreset'];

async function createTemplateEntity(template: Template): Promise<string> {
  if (!chClient?.raw?.postAsync) {
    throw new Error('Content Hub client is not available for creating templates.');
  }

  const createAttempts: Record<string, unknown>[] = [
    templateToCreateProperties(template),
    { Title: { Invariant: template.templateName } },
    { templateName: template.templateName },
  ];

  let newId: string | null = null;
  let lastStatus = 'unknown';

  for (const properties of createAttempts) {
    const response = await chClient.raw.postAsync<{ id?: number }>('/api/entities', {
      entitydefinition: {
        href: '/api/entitydefinitions/EPAM.Template',
      },
      properties,
    });

    if (response.isSuccessStatusCode && response.content?.id != null) {
      newId = String(response.content.id);
      break;
    }

    lastStatus = String(response.statusCode ?? 'unknown');
    logInfo('template create', `Create attempt failed (${lastStatus}) with keys: ${Object.keys(properties).join(', ')}`);
  }

  if (!newId) {
    throw new Error(
      `Failed to create template "${template.templateName}" (HTTP ${lastStatus}). ` +
        'Check Create permission on EPAM.Template and that templateName is a valid property.'
    );
  }

  const updateProperties = templateToProperties(template);
  if (Object.keys(updateProperties).length > 0) {
    try {
      await updateTemplateProperties(newId, updateProperties);
    } catch (error) {
      logInfo(
        'template create',
        `Template ${newId} created but optional property update failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  logResolved('template create', `Created EPAM.Template ${newId} (${template.templateName})`);
  return newId;
}

async function resolveReferenceTemplateForChannel(
  brandKitId: string,
  channelType: ChannelType,
  sourceTemplateId: string
): Promise<string | undefined> {
  const source = await getTemplate(sourceTemplateId);
  if (source.channelType === channelType) {
    return sourceTemplateId;
  }

  const siblings = await listTemplatesForBrandKit(brandKitId);
  return siblings.find((entry) => entry.channelType === channelType)?.id;
}

async function linkRelationFromReference(
  templateId: string,
  referenceTemplateId: string,
  relationCandidates: string[],
  logLabel: string
): Promise<void> {
  const refPayload = await getEntityPayload(referenceTemplateId);

  for (const relationName of relationCandidates) {
    const targetIds = await fetchRelationEntityIds(
      chClient,
      referenceTemplateId,
      relationName,
      refPayload.relations
    );
    if (targetIds[0] == null) continue;

    const linked = await setParentRelation(
      chClient,
      templateId,
      String(targetIds[0]),
      relationCandidates[0]
    );
    if (linked) {
      logResolved('template taxonomy', `Linked ${logLabel} on template ${templateId} from template ${referenceTemplateId}`);
      return;
    }
  }

  logMissing(
    'template taxonomy',
    `Could not link ${logLabel} on template ${templateId} from reference ${referenceTemplateId}`,
    `Set ${logLabel} on the template in Content Hub.`
  );
}

async function linkTemplateTaxonomyFromReference(
  templateId: string,
  channelType: ChannelType,
  brandKitId: string,
  sourceTemplateId: string
): Promise<void> {
  if (!brandKitId?.trim()) return;

  const referenceTemplateId = await resolveReferenceTemplateForChannel(
    brandKitId,
    channelType,
    sourceTemplateId
  );
  if (!referenceTemplateId) {
    logMissing(
      'template taxonomy',
      `No ${channelType} template in brand kit ${brandKitId} to copy channelType/formatPreset from`,
      'Link channelType and formatPreset on the new template in Content Hub.'
    );
    return;
  }

  await linkRelationFromReference(
    templateId,
    referenceTemplateId,
    TEMPLATE_CHANNEL_TYPE_RELATIONS,
    'channelType'
  );
  await linkRelationFromReference(
    templateId,
    referenceTemplateId,
    TEMPLATE_FORMAT_PRESET_RELATIONS,
    'formatPreset'
  );
}

async function linkTemplateToBrandKit(templateId: string, brandKitId: string): Promise<void> {
  if (!brandKitId?.trim()) return;

  const linked = await setParentRelation(chClient, templateId, brandKitId, 'templateToBrandKit');
  if (linked) {
    logResolved('template brand kit', `Linked template ${templateId} to brand kit ${brandKitId}`);
    return;
  }

  const appended = await appendChildRelation(chClient, brandKitId, templateId, 'brandKitToTemplate');
  if (appended) {
    logResolved('template brand kit', `Linked brand kit ${brandKitId} to template ${templateId}`);
    return;
  }

  logMissing(
    'template brand kit',
    `Could not link template ${templateId} to brand kit ${brandKitId}`,
    'Link templateToBrandKit on the template in Content Hub.'
  );
}

async function listTemplatesForBrandKit(brandKitId: string): Promise<Template[]> {
  if (!brandKitId?.trim() || brandKitId === DUMMY_BRAND_KIT_ID) {
    return [];
  }

  let templateIds: number[] = [];

  for (const relationName of [
    'templateToBrandKit',
    'TemplateToBrandKit',
    'EPAM.TemplateToBrandKit',
  ]) {
    templateIds = await queryEntityIdsByParentRelation('EPAM.Template', relationName, brandKitId);
    if (templateIds.length > 0) break;
  }

  if (templateIds.length === 0) {
    try {
      const brandKitPayload = await getEntityPayload(brandKitId);
      templateIds = await fetchRelationEntityIds(
        chClient,
        brandKitId,
        'brandKitToTemplate',
        brandKitPayload.relations
      );
    } catch {
      templateIds = [];
    }
  }

  const uniqueIds = [...new Set(templateIds)];
  if (uniqueIds.length === 0) {
    return [];
  }

  const templates = await Promise.all(uniqueIds.map((id) => getTemplate(String(id))));
  return templates.sort((a, b) => a.templateName.localeCompare(b.templateName));
}

async function duplicateTemplate(
  sourceTemplateId: string,
  targetChannelType: ChannelType,
  templateName?: string
): Promise<Template> {
  const source = await getTemplate(sourceTemplateId);
  const draft = buildDuplicateTemplate(source, targetChannelType, templateName);
  const newTemplateId = await createTemplateEntity(draft);

  if (draft.brandKitId) {
    await linkTemplateToBrandKit(newTemplateId, draft.brandKitId);
    await linkTemplateTaxonomyFromReference(
      newTemplateId,
      draft.channelType,
      draft.brandKitId,
      sourceTemplateId
    );
  }

  const saved = await saveTemplate({ ...draft, id: newTemplateId }, []);
  await linkAllowedAssetsToTemplate(saved.id, source.allowedAssetIds ?? []);
  logResolved(
    'template duplicate',
    `Created template ${saved.id} (${saved.templateName}) from ${sourceTemplateId} as ${targetChannelType}`
  );
  return saved;
}

/** Create a new template (e.g. from Figma import) and optionally copy taxonomy from a source template. */
async function createTemplate(
  draft: Omit<Template, 'id'> & { id?: string },
  taxonomySourceTemplateId?: string
): Promise<Template> {
  const templateDraft: Template = {
    ...draft,
    id: draft.id?.trim() || '',
    zones: draft.zones ?? [],
  };

  const newTemplateId = await createTemplateEntity(templateDraft);

  if (templateDraft.brandKitId) {
    await linkTemplateToBrandKit(newTemplateId, templateDraft.brandKitId);
    if (taxonomySourceTemplateId?.trim()) {
      await linkTemplateTaxonomyFromReference(
        newTemplateId,
        templateDraft.channelType,
        templateDraft.brandKitId,
        taxonomySourceTemplateId
      );
    }
  }

  const saved = await saveTemplate({ ...templateDraft, id: newTemplateId }, []);
  await linkAllowedAssetsToTemplate(saved.id, templateDraft.allowedAssetIds ?? []);
  logResolved(
    'template create',
    `Created template ${saved.id} (${saved.templateName}) with ${saved.zones.length} zone(s)`
  );
  return saved;
}

async function linkMarketingAssetToTemplate(marketingAssetId: string, templateId: string): Promise<void> {
  const payload = await getEntityPayload(marketingAssetId);
  const relationNames = [
    'marketingAssetToTemplate',
    'MarketingAssetToTemplate',
    'EPAM.MarketingAssetToTemplate',
  ];

  const existingIds = await fetchRelationEntityIds(chClient, marketingAssetId, relationNames[0], payload.relations);

  for (const existingId of existingIds) {
    if (String(existingId) === templateId) continue;
    for (const relationName of relationNames) {
      await removeChildRelation(chClient, marketingAssetId, existingId, relationName, payload.relations);
    }
  }

  let linked = false;
  for (const relationName of relationNames) {
    if (await appendChildRelation(chClient, marketingAssetId, templateId, relationName, payload.relations)) {
      linked = true;
      break;
    }
  }

  if (!linked) {
    throw new Error(
      `Could not link template ${templateId} to marketing asset ${marketingAssetId}. Check marketingAssetToTemplate relation permissions.`
    );
  }

  logResolved('marketing asset template', `Linked marketing asset ${marketingAssetId} to template ${templateId}`);
}

async function queryTemplateZoneIdsByParent(
  templateId: string,
  parentRelationName: string
): Promise<number[]> {
  if (!chClient?.raw?.getAsync) return [];

  const query = encodeURIComponent(
    `Definition.Name=='EPAM.TemplateZone' AND Parent('${parentRelationName}').Id==${templateId}`
  );

  try {
    const response = await chClient.raw.getAsync<{ items?: unknown[]; content?: unknown[] }>(
      `/api/entities/query?query=${query}`
    );
    if (!response.isSuccessStatusCode || !response.content) return [];

    const items = Array.isArray(response.content)
      ? response.content
      : Array.isArray((response.content as { items?: unknown[] }).items)
        ? (response.content as { items: unknown[] }).items
        : [];

    const ids: number[] = [];
    for (const item of items) {
      if (item == null || typeof item !== 'object') continue;
      const record = item as Record<string, unknown>;
      const systemId = record.systemProperties as Record<string, unknown> | undefined;
      const id = systemId?.id ?? record.id ?? record.entityId;
      if (typeof id === 'number' && Number.isFinite(id)) {
        ids.push(id);
      }
    }
    return ids;
  } catch {
    return [];
  }
}

async function getTemplate(templateId: string): Promise<Template> {
  const payload = await getEntityPayload(templateId);
  logTemplateRelationKeys(templateId, payload);

  let zoneIds = [...new Set(getTemplateZoneRelationIds(payload))];

  if (zoneIds.length === 0) {
    const relationNames = templateZoneRelationCandidates(payload.relations);
    const linked = await fetchFirstRelationEntityIds(
      chClient,
      templateId,
      payload.relations,
      relationNames.filter((name) => getRelationHref(payload.relations, name))
    );
    zoneIds = linked.ids;
    if (linked.relationName) {
      logResolved('template zones', `Found zones via relation ${linked.relationName}`);
    }
  }

  if (zoneIds.length === 0) {
    const { templateChildRelations, zoneParentRelations } = await resolveTemplateZoneLinkRelations(
      chClient,
      payload.relations
    );

    for (const parentRelationName of zoneParentRelations) {
      const queried = await queryTemplateZoneIdsByParent(templateId, parentRelationName);
      if (queried.length > 0) {
        zoneIds = queried;
        logResolved(
          'template zones',
          `Found ${queried.length} zone(s) via parent query on ${parentRelationName}`
        );
        break;
      }
    }

    if (zoneIds.length === 0 && templateChildRelations.length > 0) {
      const linked = await fetchFirstRelationEntityIds(
        chClient,
        templateId,
        payload.relations,
        templateChildRelations.filter((name) => getRelationHref(payload.relations, name))
      );
      zoneIds = linked.ids;
      if (linked.relationName) {
        logResolved('template zones', `Found zones via relation ${linked.relationName}`);
      }
    }
  }

  let zones: TemplateZone[] = [];

  if (zoneIds.length > 0) {
    try {
      const zonePayloads = await loadRelatedEntities(zoneIds);
      await warmZoneTypeTaxonomyFromZonePayloads(chClient, getEntityPayload, zonePayloads);
      zones = await Promise.all(
        zonePayloads.map(async (zonePayload, index) => {
          const mapped = mapEntityToTemplateZone(zoneIds[index], zonePayload);
          const withAssets = await enrichTemplateZone(mapped, zonePayload);
          return enrichTemplateZoneType(chClient, getEntityPayload, withAssets, zonePayload);
        })
      );
    } catch (error) {
      logInfo(
        'template zones',
        `Could not load zones for template ${templateId}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      zones = [];
    }
  }

  const template = await enrichTemplateRelations(
    templateId,
    mapEntityToTemplate(templateId, payload, zones),
    payload
  );

  if (zones.length > 0) {
    logResolved('template zones', `Loaded ${zones.length} zone(s) for template ${templateId}`);
    return template;
  }

  logMissing(
    'template zones',
    `Template ${templateId} has no linked zones yet`,
    'This is normal for a new template. Use "Edit Template Zones" to add zones, or link EPAM.TemplateZone entities in Content Hub. ' +
      'Zones link via a Parent relation on EPAM.TemplateZone → EPAM.Template (not on the template entity itself).'
  );
  return template;
}

async function getMarketingAsset(assetId: string): Promise<MarketingAsset> {
  const payload = await getEntityPayload(assetId);
  let zoneValueIds = [...new Set(getMarketingAssetZoneValueIds(payload))];

  if (zoneValueIds.length === 0) {
    zoneValueIds = await fetchRelationEntityIds(
      chClient,
      assetId,
      'marketingAssetToZoneValue',
      payload.relations
    );
  }

  let zoneValues: import('./types').ZoneValue[] = [];

  if (zoneValueIds.length > 0) {
    try {
      const zoneValuePayloads = await loadRelatedEntities(zoneValueIds);
      zoneValues = await Promise.all(
        zoneValuePayloads.map(async (zonePayload, index) =>
          enrichZoneValue(zoneValueIds[index], mapEntityToZoneValue(zoneValueIds[index], zonePayload), zonePayload)
        )
      );
      logResolved('zone values', `Loaded ${zoneValues.length} zone value(s) for asset ${assetId}`);
    } catch (error) {
      logInfo(
        'zone values',
        `Could not load zone values for asset ${assetId}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      zoneValues = [];
    }
  } else {
    logMissing(
      'zone values',
      `Marketing asset ${assetId} has no marketingAssetToZoneValue relations yet`,
      'Zone values will be created when you click Save and render HTML.'
    );
  }

  let asset = mapEntityToMarketingAsset(assetId, payload, zoneValues);
  if (!asset.templateId?.trim()) {
    const templateIds = await fetchRelationEntityIds(
      chClient,
      assetId,
      'marketingAssetToTemplate',
      payload.relations
    );
    if (templateIds[0] != null) {
      asset = { ...asset, templateId: String(templateIds[0]) };
    }
  }

  return asset;
}

async function getBrandKit(brandKitId: string): Promise<BrandKit> {
  if (!brandKitId?.trim() || brandKitId === DUMMY_BRAND_KIT_ID) {
    logFallback(
      'brand kit',
      'No brand kit id resolved',
      'Link templateToBrandKit on the template or set brandKitId in Configuration.'
    );
    return withResolvedBrandKit(createDummyBrandKit(brandKitId || DUMMY_BRAND_KIT_ID));
  }

  try {
    const payload = await getEntityPayload(brandKitId);
    const colorIds = [...new Set(getBrandKitColorIds(payload))];
    const fontIds = [...new Set(getBrandKitFontIds(payload))];
    const [colorPayloads, fontPayloads] = await Promise.all([
      loadRelatedEntities(colorIds),
      loadRelatedEntities(fontIds),
    ]);

    const colors = colorPayloads.map((colorPayload, index) =>
      mapEntityToBrandColor(colorIds[index], colorPayload)
    );

    const fonts = fontPayloads.map((fontPayload, index) =>
      mapEntityToBrandFont(fontIds[index], fontPayload)
    );

    const brandKit = mapEntityToBrandKit(brandKitId, payload, colors, fonts);
    if (!brandKit.logoAssetUrl && colors.length === 0 && fonts.length === 0) {
      logFallback(
        'brand kit',
        `Brand kit ${brandKitId} (${brandKit.brandKitName}) has no colors, fonts, or logo linked`,
        'Add brandKitToColor / brandKitToFont relations and a logo asset on the brand kit.'
      );
      return withResolvedBrandKit(createDummyBrandKit(brandKitId));
    }

    if (colors.length === 0) {
      logMissing('brand kit colors', `Brand kit ${brandKitId} has no colors linked`, 'Link colors via brandKitToColor.');
    } else {
      logResolved('brand kit colors', `Loaded ${colors.length} color(s) for brand kit ${brandKitId}`);
    }

    if (fonts.length === 0) {
      logMissing('brand kit fonts', `Brand kit ${brandKitId} has no fonts linked`, 'Link fonts via brandKitToFont.');
    } else {
      logResolved('brand kit fonts', `Loaded ${fonts.length} font(s) for brand kit ${brandKitId}`);
    }

    if (!brandKit.logoAssetUrl) {
      logMissing('brand kit logo', `Brand kit ${brandKitId} has no logo asset`, 'Set logoAssetUrl on the brand kit entity.');
    }

    return withResolvedBrandKit({
      ...createDummyBrandKit(brandKitId),
      ...brandKit,
      colors: colors.length > 0 ? colors : createDummyBrandKit(brandKitId).colors,
      fonts: fonts.length > 0 ? fonts : createDummyBrandKit(brandKitId).fonts,
    });
  } catch (error) {
    logFallback('brand kit', error, `Could not load brand kit entity ${brandKitId}.`);
    return withResolvedBrandKit(createDummyBrandKit(brandKitId));
  }
}

function templatePropertiesChanged(template: Template, payload: EntityPayload): boolean {
  const existing = mapEntityToTemplate(template.id, payload, template.zones);
  return (
    existing.templateName !== template.templateName ||
    existing.canvasWidth !== template.canvasWidth ||
    existing.canvasHeight !== template.canvasHeight
  );
}

async function putEntityProperties(
  entityId: string,
  properties: Record<string, unknown>,
  contextLabel: string,
  definitionNameHint?: string
): Promise<boolean> {
  if (!chClient?.raw?.putAsync) {
    throw new Error(`Content Hub client is not available for saving ${contextLabel}.`);
  }

  if (Object.keys(properties).length === 0) {
    return true;
  }

  const payload = await getEntityPayload(entityId);
  const body = buildEntityPutBody(payload, properties, definitionNameHint);

  const response = await chClient.raw.putAsync(`/api/entities/${entityId}`, body);
  if (response.isSuccessStatusCode) {
    return true;
  }

  const statusCode = response.statusCode ?? 'unknown';
  const responseDetail =
    response.content != null && typeof response.content === 'object'
      ? String((response.content as Record<string, unknown>).Message ?? '')
      : '';
  const detailSuffix = responseDetail ? `: ${responseDetail}` : '';

  if (statusCode === 403 || statusCode === 401) {
    logMissing(
      contextLabel,
      `Permission denied (${statusCode}) updating entity ${entityId}${detailSuffix}`,
      'Grant update permission on this entity definition for your role.'
    );
    return false;
  }

  throw new Error(
    `Content Hub API error (${statusCode}) saving ${contextLabel} on entity ${entityId}${detailSuffix}`
  );
}

async function updateTemplateProperties(templateId: string, properties: Record<string, unknown>): Promise<boolean> {
  return putEntityProperties(templateId, properties, 'template properties', 'EPAM.Template');
}

async function saveTemplate(template: Template, previousZones: TemplateZone[] = []): Promise<Template> {
  if (!chClient?.raw?.postAsync) {
    throw new Error('Content Hub client is not available for saving template zones.');
  }

  const templatePayload = await getEntityPayload(template.id);

  if (templatePropertiesChanged(template, templatePayload)) {
    const saved = await updateTemplateProperties(template.id, templateToProperties(template));
    if (saved) {
      logResolved('template properties', `Saved properties on template ${template.id}`);
    } else {
      logInfo(
        'template properties',
        `Skipped property update on template ${template.id}; continuing with zone save.`
      );
    }
  }

  const linkRelations = await resolveTemplateZoneLinkRelations(chClient, templatePayload.relations);
  const zoneRelationName = resolveTemplateZoneRelationName(
    templatePayload.relations,
    linkRelations.templateChildRelations
  );
  const savedZones: TemplateZone[] = [];
  const zoneIdsToUnlink = new Set<string>();

  for (const baselineZone of previousZones) {
    const stillPresent = template.zones.some((zone) => zone.id === baselineZone.id);
    if (!stillPresent && isPersistedEntityId(baselineZone.id)) {
      zoneIdsToUnlink.add(baselineZone.id);
    }
  }

  const sortedZones = [...template.zones].sort((a, b) => a.sortOrder - b.sortOrder);

  for (const zone of sortedZones) {
    const baselineZone = previousZones.find((candidate) => candidate.id === zone.id);
    const zoneChanged = !baselineZone || !zonesAreEquivalent(zone, baselineZone);

    if (!zoneChanged) {
      savedZones.push(zone);
      continue;
    }

    if (isPersistedEntityId(zone.id)) {
      await updateTemplateZoneEntity(zone.id, zone);
      savedZones.push(zone);
      continue;
    }

    const zoneId = await createTemplateZoneEntity(zone);
    await linkTemplateToZone(
      template.id,
      zoneId,
      zoneRelationName,
      templatePayload.relations,
      linkRelations
    );

    savedZones.push({ ...zone, id: zoneId });
    logResolved('template zone', `Created EPAM.TemplateZone ${zoneId} (${zone.zoneKey}) and linked to template ${template.id}`);
  }

  for (const zoneId of zoneIdsToUnlink) {
    await unlinkTemplateFromZone(template.id, zoneId, zoneRelationName, templatePayload.relations);
  }

  logResolved('template zones', `Saved ${savedZones.length} template zone(s) on template ${template.id}`);
  return { ...template, zones: savedZones };
}

function resolveTemplateZoneRelationName(
  relations?: Record<string, unknown>,
  definitionChildRelations: string[] = []
): string {
  const candidates = [
    ...definitionChildRelations,
    ...templateZoneRelationCandidates(relations),
  ];
  for (const name of candidates) {
    if (getRelationHref(relations, name)) {
      return name;
    }
  }
  return definitionChildRelations[0] ?? TEMPLATE_ZONE_RELATION_NAMES[0];
}

async function linkTemplateToZone(
  templateId: string,
  zoneId: string,
  relationName: string,
  templateRelations?: Record<string, unknown>,
  linkRelations?: { templateChildRelations: string[]; zoneParentRelations: string[] }
): Promise<void> {
  const resolved =
    linkRelations ??
    (await resolveTemplateZoneLinkRelations(chClient, templateRelations));

  let zoneRelations: Record<string, unknown> | undefined;
  try {
    const zonePayload = await getEntityPayload(zoneId);
    zoneRelations = zonePayload.relations;
    logZoneRelationKeys(zoneId, zonePayload);
  } catch {
    zoneRelations = undefined;
  }

  const zoneEntityParentNames = discoverRelationNames(zoneRelations, /template/i).filter(
    (name) => !/collection|asset/i.test(name)
  );

  const inverseNames = collectRelationNameCandidates(
    [...zoneEntityParentNames, ...resolved.zoneParentRelations, ...TEMPLATE_ZONE_INVERSE_RELATION_NAMES],
    zoneRelations,
    /zone.*template|template/i
  );

  for (const name of inverseNames) {
    const linked = await setParentRelation(chClient, zoneId, templateId, name, zoneRelations);
    if (linked) {
      logResolved('template zone link', `Linked zone ${zoneId} to template ${templateId} via parent relation ${name}`);
      return;
    }
  }

  const childNamesWithHref = collectRelationNameCandidates(
    [relationName, ...resolved.templateChildRelations, ...TEMPLATE_ZONE_RELATION_NAMES],
    templateRelations,
    /template.*zone/i
  ).filter((name) => Boolean(getRelationHref(templateRelations, name)));

  for (const name of childNamesWithHref) {
    const linked = await appendChildRelation(chClient, templateId, zoneId, name, templateRelations);
    if (linked) {
      logResolved('template zone link', `Linked zone ${zoneId} to template ${templateId} via child relation ${name}`);
      return;
    }
  }

  const childNamesFromDefinition = collectRelationNameCandidates(
    [relationName, ...resolved.templateChildRelations, ...TEMPLATE_ZONE_RELATION_NAMES],
    templateRelations,
    /template.*zone/i
  ).filter((name) => !getRelationHref(templateRelations, name));

  for (const name of childNamesFromDefinition) {
    const linked = await appendChildRelation(chClient, templateId, zoneId, name, templateRelations);
    if (linked) {
      logResolved(
        'template zone link',
        `Linked zone ${zoneId} to template ${templateId} via definition child relation ${name}`
      );
      return;
    }
  }

  throw new Error(
    `Could not link zone ${zoneId} to template ${templateId}. ` +
      `Tried parent relations: ${inverseNames.join(', ') || '(none from definition)'}; ` +
      `child relations: ${[...childNamesWithHref, ...childNamesFromDefinition].join(', ') || '(none)'}. ` +
      'Confirm EPAM.TemplateZone has a parent relation to EPAM.Template in Content Hub.'
  );
}

async function putEntityPropertiesOptional(
  entityId: string,
  properties: Record<string, unknown>,
  contextLabel: string
): Promise<boolean> {
  if (Object.keys(properties).length === 0) {
    return true;
  }

  try {
    return await putEntityProperties(entityId, properties, contextLabel);
  } catch (error) {
    logInfo(
      contextLabel,
      `Optional property update skipped for entity ${entityId}: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    return false;
  }
}

async function readPersistedTemplateZoneType(
  zoneId: string,
  zoneKey: string,
  zoneLabel: string
): Promise<ZoneType> {
  const payload = await getEntityPayload(zoneId);
  const mapped = mapEntityToTemplateZone(zoneId, payload);
  const enriched = await enrichTemplateZoneType(chClient, getEntityPayload, mapped, payload);
  return enriched.zoneType;
}

async function persistTemplateZoneType(
  zoneId: string,
  zone: TemplateZone,
  payload: EntityPayload
): Promise<boolean> {
  const normalized = normalizeTemplateZoneForSave(zone);
  const storage = await resolveZoneTypeStorage(chClient);
  const hasZoneTypeRelation = zonePayloadHasZoneTypeRelation(payload);
  const preferRelation =
    hasZoneTypeRelation || usesZoneTypeRelationStorage(storage);

  const tryPropertyWrites = async (): Promise<boolean> => {
    for (const properties of zoneTypePropertyWriteAttempts(
      normalized.zoneType,
      storage.propertyNames
    )) {
      await putEntityPropertiesOptional(zoneId, properties, 'template zone type');
      const persisted = await readPersistedTemplateZoneType(
        zoneId,
        normalized.zoneKey,
        normalized.zoneLabel
      );
      if (persisted === normalized.zoneType) {
        logResolved(
          'template zone type',
          `Persisted "${normalized.zoneType}" on zone ${zoneId} via property ${Object.keys(properties).join(', ')}`
        );
        return true;
      }
    }
    return false;
  };

  if (preferRelation) {
    const linked = await syncTemplateZoneTypeRelation(
      chClient,
      getEntityPayload,
      zoneId,
      normalized.zoneType,
      payload
    );

    const persistedAfterRelation = await readPersistedTemplateZoneType(
      zoneId,
      normalized.zoneKey,
      normalized.zoneLabel
    );
    if (persistedAfterRelation === normalized.zoneType) {
      return true;
    }
    if (linked) {
      logInfo(
        'template zone type',
        `Relation link reported success for zone ${zoneId} but reload still reads "${persistedAfterRelation}".`
      );
    }
  }

  if (!hasZoneTypeRelation && usesZoneTypePropertyStorage(storage)) {
    if (await tryPropertyWrites()) {
      return true;
    }
  }

  const persisted = await readPersistedTemplateZoneType(
    zoneId,
    normalized.zoneKey,
    normalized.zoneLabel
  );
  logInfo(
    'template zone type',
    `Zone ${zoneId} (${normalized.zoneKey}) still reads as "${persisted}" after save; expected "${normalized.zoneType}".`
  );
  return persisted === normalized.zoneType;
}

async function applyTemplateZoneProperties(zoneId: string, zone: TemplateZone): Promise<void> {
  const normalized = normalizeTemplateZoneForSave(zone);
  const payload = await getEntityPayload(zoneId);
  const existingZone = mapEntityToTemplateZone(zoneId, payload);

  const identityProps = templateZoneIdentityProperties(normalized, existingZone);
  if (Object.keys(identityProps).length > 0) {
    const identitySaved = await putEntityPropertiesOptional(zoneId, identityProps, 'template zone identity');
    if (!identitySaved && identityProps.zoneLabel != null) {
      const label = normalized.zoneLabel || normalized.zoneKey;
      await putEntityPropertiesOptional(
        zoneId,
        { Title: { Invariant: label } },
        'template zone title'
      );
    }
  }

  const typeSaved = await persistTemplateZoneType(zoneId, normalized, payload);
  const flagsSaved = await putEntityPropertiesOptional(
    zoneId,
    templateZoneFlagsProperties(normalized, existingZone),
    'template zone flags'
  );

  if (!typeSaved && !flagsSaved) {
    throw new Error(
      `Could not save zone type "${normalized.zoneType}" on template zone ${zoneId} (${normalized.zoneKey}).`
    );
  }

  if (!typeSaved) {
    logInfo(
      'template zone type',
      `Zone flags saved on ${zoneId}, but zone type "${normalized.zoneType}" may not have persisted in Content Hub.`
    );
  }

  const layoutProps = templateZoneLayoutProperties(normalized, existingZone);
  if (Object.keys(layoutProps).length > 0) {
    await putEntityPropertiesOptional(zoneId, layoutProps, 'template zone layout');
  }
  const optionalProps = templateZoneOptionalProperties(normalized, existingZone);
  if (Object.keys(optionalProps).length > 0) {
    await putEntityPropertiesOptional(zoneId, optionalProps, 'template zone optional');
  }
}

async function updateTemplateZoneEntity(zoneId: string, zone: TemplateZone): Promise<void> {
  try {
    await applyTemplateZoneProperties(zoneId, zone);
  } catch (error) {
    throw new Error(
      `Permission denied updating template zone ${zoneId} (${zone.zoneKey}). Grant Update on EPAM.TemplateZone. ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
  logResolved('template zone', `Updated EPAM.TemplateZone ${zoneId} (${zone.zoneKey}, type ${zone.zoneType})`);
}

async function createTemplateZoneEntity(zone: TemplateZone): Promise<string> {
  const createAttempts: Record<string, unknown>[] = [
    templateZoneToCreateProperties(zone),
    {
      zoneKey: zone.zoneKey,
      zoneLabel: zone.zoneLabel || zone.zoneKey,
    },
    { Title: { Invariant: zone.zoneLabel || zone.zoneKey } },
  ];

  let newId: string | null = null;
  let lastStatus = 'unknown';

  for (const properties of createAttempts) {
    const response = await chClient!.raw!.postAsync<{ id?: number }>('/api/entities', {
      entitydefinition: {
        href: '/api/entitydefinitions/EPAM.TemplateZone',
      },
      properties,
    });

    if (response.isSuccessStatusCode && response.content?.id != null) {
      newId = String(response.content.id);
      break;
    }

    lastStatus = String(response.statusCode ?? 'unknown');
    logInfo(
      'template zone create',
      `Create attempt failed (${lastStatus}) for ${zone.zoneKey} with keys: ${Object.keys(properties).join(', ')}`
    );
  }

  if (!newId) {
    throw new Error(
      `Failed to create template zone ${zone.zoneKey} (HTTP ${lastStatus}). ` +
        'Check Create permission on EPAM.TemplateZone.'
    );
  }

  try {
    await applyTemplateZoneProperties(newId, zone);
  } catch (error) {
    logInfo(
      'template zone create',
      `Zone ${newId} (${zone.zoneKey}) created but property update failed: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }

  return newId;
}

async function unlinkTemplateFromZone(
  templateId: string,
  zoneId: string,
  relationName: string,
  templateRelations?: Record<string, unknown>
): Promise<void> {
  const linkRelations = await resolveTemplateZoneLinkRelations(chClient, templateRelations);

  let zoneRelations: Record<string, unknown> | undefined;
  try {
    const zonePayload = await getEntityPayload(zoneId);
    zoneRelations = zonePayload.relations;
  } catch {
    zoneRelations = undefined;
  }

  const inverseNames = collectRelationNameCandidates(
    [...linkRelations.zoneParentRelations, ...TEMPLATE_ZONE_INVERSE_RELATION_NAMES],
    zoneRelations,
    /zone.*template/i
  );

  for (const name of inverseNames) {
    const cleared = await clearParentRelation(chClient, zoneId, templateId, name, zoneRelations);
    if (cleared) {
      logResolved('template zone unlink', `Cleared parent ${templateId} from zone ${zoneId} via ${name}`);
      return;
    }
  }

  const relationNames = collectRelationNameCandidates(
    [relationName, ...linkRelations.templateChildRelations, ...TEMPLATE_ZONE_RELATION_NAMES],
    templateRelations,
    /template.*zone/i
  ).filter((name) => Boolean(getRelationHref(templateRelations, name)));

  for (const name of relationNames) {
    const removed = await removeChildRelation(chClient, templateId, zoneId, name, templateRelations);
    if (removed) {
      logResolved('template zone unlink', `Removed zone ${zoneId} from template ${templateId} via ${name}`);
      return;
    }
  }

  logMissing(
    'template zone unlink',
    `Could not remove zone ${zoneId} from template ${templateId}`,
    'The new zone was created and linked, but the previous zone link may need to be removed manually in Content Hub.'
  );
}

async function enrichZoneValue(
  zoneValueId: string | number,
  value: ZoneValue,
  payload: EntityPayload
): Promise<ZoneValue> {
  const relatedAssetIds = getZoneValueSelectedAssetIds(payload);
  const imageAssetId =
    value.imageAssetId || (relatedAssetIds[0] != null ? String(relatedAssetIds[0]) : undefined);

  if (!imageAssetId) {
    return value;
  }

  if (value.imageAssetUrl?.trim()) {
    return { ...value, imageAssetId };
  }

  try {
    const assetPayload = await getEntityPayload(imageAssetId);
    const picked = mapEntityPayloadToPickedAsset(imageAssetId, assetPayload);
    if (picked) {
      return {
        ...value,
        imageAssetId,
        imageAssetUrl: picked.previewUrl ?? picked.thumbnailUrl,
      };
    }
  } catch {
    // Keep property-only values when the related asset cannot be loaded.
  }

  return { ...value, imageAssetId };
}

async function loadAllowedAssetsForTemplate(templateId: string): Promise<PickedAsset[]> {
  const payload = await getEntityPayload(templateId);
  const relationNames = templateAllowedAssetRelationNames(payload.relations);
  const linked = await fetchFirstRelationEntityIds(
    chClient,
    templateId,
    payload.relations,
    relationNames
  );

  if (linked.ids.length === 0) {
    return [];
  }

  const payloads = await loadRelatedEntities(linked.ids);
  return payloads
    .map((assetPayload, index) => mapEntityPayloadToPickedAsset(linked.ids[index], assetPayload))
    .filter((asset): asset is PickedAsset => asset != null);
}

async function addAllowedAssetToTemplate(templateId: string, assetId: string): Promise<boolean> {
  const normalizedTemplateId = templateId.trim();
  const normalizedAssetId = assetId.trim();
  if (!normalizedTemplateId || !normalizedAssetId) return false;

  const payload = await getEntityPayload(normalizedTemplateId);
  const relationNames = templateAllowedAssetRelationNames(payload.relations);

  for (const relationName of relationNames) {
    const linked = await appendChildRelation(
      chClient,
      normalizedTemplateId,
      normalizedAssetId,
      relationName,
      payload.relations
    );
    if (linked) {
      logResolved(
        'template allowed asset',
        `Linked asset ${normalizedAssetId} to template ${normalizedTemplateId} via ${relationName}`
      );
      return true;
    }
  }

  if (chClient?.raw?.postAsync) {
    for (const relationName of relationNames) {
      const response = await chClient.raw.postAsync(
        `/api/entities/${normalizedTemplateId}/relations/${relationName}`,
        { child: { href: `/api/entities/${normalizedAssetId}` } }
      );
      if (response.isSuccessStatusCode) {
        logResolved(
          'template allowed asset',
          `Linked asset ${normalizedAssetId} to template ${normalizedTemplateId} via ${relationName}`
        );
        return true;
      }
    }
  }

  logMissing(
    'template allowed asset',
    `Could not link asset ${normalizedAssetId} to template ${normalizedTemplateId}`,
    'Create a child relation on EPAM.Template to M.Asset (e.g. templateToAllowedAsset).'
  );
  return false;
}

async function removeAllowedAssetFromTemplate(templateId: string, assetId: string): Promise<boolean> {
  const normalizedTemplateId = templateId.trim();
  const normalizedAssetId = assetId.trim();
  if (!normalizedTemplateId || !normalizedAssetId) return false;

  const payload = await getEntityPayload(normalizedTemplateId);
  const relationNames = templateAllowedAssetRelationNames(payload.relations);

  for (const relationName of relationNames) {
    const removed = await removeChildRelation(
      chClient,
      normalizedTemplateId,
      normalizedAssetId,
      relationName,
      payload.relations
    );
    if (removed) {
      logResolved(
        'template allowed asset',
        `Removed asset ${normalizedAssetId} from template ${normalizedTemplateId} via ${relationName}`
      );
      return true;
    }
  }

  return false;
}

async function linkAllowedAssetsToTemplate(templateId: string, assetIds: string[] = []): Promise<void> {
  const uniqueIds = [...new Set(assetIds.map((id) => id.trim()).filter(Boolean))];
  if (uniqueIds.length === 0) return;

  const existing = await loadAllowedAssetsForTemplate(templateId);
  const existingIds = new Set(existing.map((asset) => asset.id));

  for (const assetId of uniqueIds) {
    if (existingIds.has(assetId)) continue;
    await addAllowedAssetToTemplate(templateId, assetId);
  }
}

async function getZoneValueSelectedAssetIdsFromEntity(zoneValueId: string): Promise<string[]> {
  const payload = await getEntityPayload(zoneValueId);
  return getZoneValueSelectedAssetIds(payload).map(String);
}

type SelectedAssetLinkMode = 'parent' | 'child';

let cachedZoneValueSelectedAssetLink: { name: string; mode: SelectedAssetLinkMode } | null = null;

async function linkSelectedAssetToZoneValue(zoneValueId: string, assetId: string): Promise<boolean> {
  const normalizedZoneValueId = zoneValueId.trim();
  const normalizedAssetId = assetId.trim();
  if (!normalizedZoneValueId || !normalizedAssetId) return false;

  const payload = await getEntityPayload(normalizedZoneValueId);
  const discovered = zoneValueSelectedAssetRelationNames(payload.relations);
  const presentOnEntity = discovered.filter((name) => Boolean(getRelationHref(payload.relations, name)));
  const preferred = cachedZoneValueSelectedAssetLink?.name;
  const relationNames = [
    ...new Set(
      [
        preferred,
        ...presentOnEntity,
        // Prefer the known-good name before spraying aliases that 404.
        'zoneValueToSelectedAsset',
        ...discovered,
      ].filter((name): name is string => Boolean(name))
    ),
  ].slice(0, preferred || presentOnEntity.length > 0 ? 3 : 4);

  const existingIds = await getZoneValueSelectedAssetIdsFromEntity(normalizedZoneValueId);

  for (const existingId of existingIds) {
    if (existingId === normalizedAssetId) continue;
    for (const relationName of relationNames) {
      await removeChildRelation(
        chClient,
        normalizedZoneValueId,
        existingId,
        relationName,
        payload.relations
      );
      await clearParentRelation(
        chClient,
        normalizedZoneValueId,
        existingId,
        relationName,
        payload.relations
      );
    }
  }

  if (existingIds.includes(normalizedAssetId)) {
    return true;
  }

  // This relation is Parent→Asset on the zone value (child PUT returns 403).
  const modes: SelectedAssetLinkMode[] =
    cachedZoneValueSelectedAssetLink?.mode === 'child' ? ['child', 'parent'] : ['parent', 'child'];

  for (const mode of modes) {
    for (const relationName of relationNames) {
      const linked =
        mode === 'parent'
          ? await setParentRelation(
              chClient,
              normalizedZoneValueId,
              normalizedAssetId,
              relationName,
              payload.relations
            )
          : await appendChildRelation(
              chClient,
              normalizedZoneValueId,
              normalizedAssetId,
              relationName,
              payload.relations
            );
      if (!linked) continue;

      cachedZoneValueSelectedAssetLink = { name: relationName, mode };
      logResolved(
        'zone value selected asset',
        `Linked asset ${normalizedAssetId} to zone value ${normalizedZoneValueId} via ${relationName} (${mode})`
      );
      return true;
    }
  }

  logMissing(
    'zone value selected asset',
    `Could not link asset ${normalizedAssetId} to zone value ${normalizedZoneValueId}`,
    'Create a relation on EPAM.MarketingAssetZoneValue to M.Asset (e.g. zoneValueToSelectedAsset).'
  );
  return false;
}

async function syncZoneValueSelectedAsset(zoneValueId: string, value: ZoneValue): Promise<void> {
  if (!value.imageAssetId?.trim()) return;
  await linkSelectedAssetToZoneValue(zoneValueId, value.imageAssetId);
}

async function loadAllowedAssetsForZone(zoneId: string): Promise<PickedAsset[]> {
  const payload = await getEntityPayload(zoneId);
  const relationNames = zoneAllowedAssetRelationNames(payload.relations);
  const linked = await fetchFirstRelationEntityIds(
    chClient,
    zoneId,
    payload.relations,
    relationNames
  );

  if (linked.ids.length === 0) {
    return [];
  }

  const payloads = await loadRelatedEntities(linked.ids);
  return payloads
    .map((assetPayload, index) => mapEntityPayloadToPickedAsset(linked.ids[index], assetPayload))
    .filter((asset): asset is PickedAsset => asset != null);
}

async function addAllowedAssetToZone(zoneId: string, assetId: string): Promise<boolean> {
  const normalizedZoneId = zoneId.trim();
  const normalizedAssetId = assetId.trim();
  if (!normalizedZoneId || !normalizedAssetId) return false;

  const payload = await getEntityPayload(normalizedZoneId);
  const relationNames = zoneAllowedAssetRelationNames(payload.relations);

  for (const relationName of relationNames) {
    const linked = await appendChildRelation(
      chClient,
      normalizedZoneId,
      normalizedAssetId,
      relationName,
      payload.relations
    );
    if (linked) {
      logResolved(
        'zone allowed asset',
        `Linked asset ${normalizedAssetId} to zone ${normalizedZoneId} via ${relationName}`
      );
      return true;
    }
  }

  if (chClient?.raw?.postAsync) {
    for (const relationName of relationNames) {
      const response = await chClient.raw.postAsync(
        `/api/entities/${normalizedZoneId}/relations/${relationName}`,
        { child: { href: `/api/entities/${normalizedAssetId}` } }
      );
      if (response.isSuccessStatusCode) {
        logResolved(
          'zone allowed asset',
          `Linked asset ${normalizedAssetId} to zone ${normalizedZoneId} via ${relationName}`
        );
        return true;
      }
    }
  }

  logMissing(
    'zone allowed asset',
    `Could not link asset ${normalizedAssetId} to zone ${normalizedZoneId}`,
    'Create a child relation on EPAM.TemplateZone to M.Asset (e.g. templateZoneToAllowedAsset).'
  );
  return false;
}

async function removeAllowedAssetFromZone(zoneId: string, assetId: string): Promise<boolean> {
  const normalizedZoneId = zoneId.trim();
  const normalizedAssetId = assetId.trim();
  if (!normalizedZoneId || !normalizedAssetId) return false;

  const payload = await getEntityPayload(normalizedZoneId);
  const relationNames = zoneAllowedAssetRelationNames(payload.relations);

  for (const relationName of relationNames) {
    const removed = await removeChildRelation(
      chClient,
      normalizedZoneId,
      normalizedAssetId,
      relationName,
      payload.relations
    );
    if (removed) {
      logResolved(
        'zone allowed asset',
        `Removed asset ${normalizedAssetId} from zone ${normalizedZoneId} via ${relationName}`
      );
      return true;
    }
  }

  return false;
}

async function linkAllowedAssetsToZone(zoneId: string, assetIds: string[] = []): Promise<void> {
  const uniqueIds = [...new Set(assetIds.map((id) => id.trim()).filter(Boolean))];
  if (uniqueIds.length === 0) return;

  const existing = await loadAllowedAssetsForZone(zoneId);
  const existingIds = new Set(existing.map((asset) => asset.id));

  for (const assetId of uniqueIds) {
    if (existingIds.has(assetId)) continue;
    await addAllowedAssetToZone(zoneId, assetId);
  }
}

async function linkZoneToAllowedCollection(zoneId: string, collectionId?: string): Promise<void> {
  if (!collectionId?.trim()) return;

  const linked = await appendChildRelation(
    chClient,
    zoneId,
    collectionId.trim(),
    'templateZoneToAllowedAssetCollection'
  );

  if (!linked && chClient?.raw?.postAsync) {
    const response = await chClient.raw.postAsync(
      `/api/entities/${zoneId}/relations/templateZoneToAllowedAssetCollection`,
      { child: { href: `/api/entities/${collectionId.trim()}` } }
    );
    if (!response.isSuccessStatusCode) {
      logMissing(
        'templateZoneToAllowedAssetCollection link',
        `Could not link collection ${collectionId} to zone ${zoneId}`,
        'Set templateZoneToAllowedAssetCollection on the zone manually in Content Hub.'
      );
    }
  }
}

async function loadAssetsFromCollection(collectionId: string): Promise<PickedAsset[]> {
  const payload = await getEntityPayload(collectionId);
  const relationNames = [
    ...new Set([
      ...COLLECTION_ASSET_RELATION_NAMES,
      ...discoverRelationNames(payload.relations, /asset/i),
    ]),
  ].filter((name) => getRelationHref(payload.relations, name));

  const linked = await fetchFirstRelationEntityIds(
    chClient,
    collectionId,
    payload.relations,
    relationNames
  );

  if (linked.ids.length === 0) {
    return [];
  }

  const payloads = await loadRelatedEntities(linked.ids);
  return payloads
    .map((assetPayload, index) => mapEntityPayloadToPickedAsset(linked.ids[index], assetPayload))
    .filter((asset): asset is PickedAsset => asset != null);
}

function extractSearchResultIds(body: unknown): number[] {
  if (!body || typeof body !== 'object') return [];

  const record = body as Record<string, unknown>;
  const candidates = [record.items, record.content, record.children, record.results];
  const ids: number[] = [];

  for (const candidate of candidates) {
    if (!Array.isArray(candidate)) continue;
    for (const item of candidate) {
      if (typeof item === 'number' && Number.isFinite(item)) {
        ids.push(item);
        continue;
      }
      if (!item || typeof item !== 'object') continue;
      const entry = item as Record<string, unknown>;
      const systemId = (entry.systemProperties as { id?: number } | undefined)?.id;
      const directId = entry.id ?? entry.entityId ?? systemId;
      if (typeof directId === 'number' && Number.isFinite(directId)) {
        ids.push(directId);
      }
    }
  }

  if (ids.length > 0) {
    return [...new Set(ids)];
  }

  return [...new Set(idsFromRelationResponse(body))];
}

async function searchContentHubAssets(query?: string): Promise<PickedAsset[]> {
  if (!chClient?.raw?.getAsync) return [];

  const searchText = query?.trim() || '*';
  const searchUrls = [
    `/api/entities/search?query=${encodeURIComponent(searchText)}&definitionNames=M.Asset&take=48`,
    `/api/entities/search?fullText=${encodeURIComponent(searchText)}&definitionNames=M.Asset&take=48`,
  ];

  for (const url of searchUrls) {
    try {
      const response = await chClient.raw.getAsync<unknown>(url);
      if (!response.isSuccessStatusCode || response.content == null) continue;

      const ids = extractSearchResultIds(response.content).slice(0, 48);
      if (ids.length === 0) continue;

      const payloads = await loadRelatedEntities(ids);
      const assets = payloads
        .map((assetPayload, index) => mapEntityPayloadToPickedAsset(ids[index], assetPayload))
        .filter((asset): asset is PickedAsset => asset != null);

      if (assets.length > 0) {
        logResolved('asset search', `Found ${assets.length} Content Hub asset(s) via search`);
        return assets;
      }
    } catch {
      // Try the next search URL shape.
    }
  }

  return [];
}

async function searchAssets(options?: { collectionId?: string; query?: string }): Promise<PickedAsset[]> {
  const collectionId = options?.collectionId?.trim();
  const query = options?.query;

  if (chClient?.raw?.getAsync) {
    try {
      if (collectionId) {
        const collectionAssets = filterPickedAssets(await loadAssetsFromCollection(collectionId), query);
        if (collectionAssets.length > 0) {
          logResolved(
            'asset search',
            `Loaded ${collectionAssets.length} asset(s) from collection ${collectionId}`
          );
          return collectionAssets;
        }
        logMissing(
          'asset search',
          `No assets found in collection ${collectionId}`,
          'Verify AssetCollectionToAsset links or try Image URL.'
        );
      } else {
        const searchedAssets = filterPickedAssets(await searchContentHubAssets(query), query);
        if (searchedAssets.length > 0) {
          return searchedAssets;
        }
      }
    } catch (error) {
      logMissing('asset search', error, 'Falling back to proxy or demo assets.');
    }
  }

  if (collectionId) {
    try {
      const proxyResults = await proxyRequest<PickedAsset[]>(
        `/assets/search?collectionId=${collectionId}${query ? `&q=${encodeURIComponent(query)}` : ''}`
      );
      if (proxyResults.length > 0) {
        return proxyResults;
      }
    } catch (error) {
      logFallback('asset search', error);
    }
  }

  logFallback('asset search', 'Using demo asset results');
  return createDummyAssetSearchResults(query);
}

async function getAssetsByIds(ids: Array<string | number>): Promise<PickedAsset[]> {
  const numericIds = [
    ...new Set(
      ids
        .map((id) => Number(id))
        .filter((id) => Number.isFinite(id) && id > 0)
    ),
  ];

  if (numericIds.length === 0 || !chClient?.raw?.getAsync) {
    return [];
  }

  const payloads = await loadRelatedEntities(numericIds);
  return payloads
    .map((payload, index) => mapEntityPayloadToPickedAsset(numericIds[index], payload))
    .filter((asset): asset is PickedAsset => asset != null);
}

async function addAssetToCollection(collectionId: string, assetId: string): Promise<boolean> {
  const normalizedCollectionId = collectionId.trim();
  const normalizedAssetId = assetId.trim();
  if (!normalizedCollectionId || !normalizedAssetId) return false;

  const payload = await getEntityPayload(normalizedCollectionId);
  const relationNames = [
    ...new Set([
      ...COLLECTION_ASSET_RELATION_NAMES,
      ...discoverRelationNames(payload.relations, /asset/i),
      'AssetCollectionToAsset',
      'M.AssetCollectionToAsset',
    ]),
  ];

  for (const relationName of relationNames) {
    const linked = await appendChildRelation(
      chClient,
      normalizedCollectionId,
      normalizedAssetId,
      relationName,
      payload.relations
    );
    if (linked) {
      logResolved(
        'asset collection',
        `Linked asset ${normalizedAssetId} to collection ${normalizedCollectionId} via ${relationName}`
      );
      return true;
    }
  }

  if (chClient?.raw?.postAsync) {
    for (const relationName of relationNames) {
      const response = await chClient.raw.postAsync(
        `/api/entities/${normalizedCollectionId}/relations/${relationName}`,
        { child: { href: `/api/entities/${normalizedAssetId}` } }
      );
      if (response.isSuccessStatusCode) {
        logResolved(
          'asset collection',
          `Linked asset ${normalizedAssetId} to collection ${normalizedCollectionId} via ${relationName}`
        );
        return true;
      }
    }
  }

  logMissing(
    'asset collection',
    `Could not add asset ${normalizedAssetId} to collection ${normalizedCollectionId}`,
    'Verify AssetCollectionToAsset exists on the collection definition.'
  );
  return false;
}

async function removeAssetFromCollection(collectionId: string, assetId: string): Promise<boolean> {
  const normalizedCollectionId = collectionId.trim();
  const normalizedAssetId = assetId.trim();
  if (!normalizedCollectionId || !normalizedAssetId) return false;

  const payload = await getEntityPayload(normalizedCollectionId);
  const relationNames = [
    ...new Set([
      ...COLLECTION_ASSET_RELATION_NAMES,
      ...discoverRelationNames(payload.relations, /asset/i),
      'AssetCollectionToAsset',
      'M.AssetCollectionToAsset',
    ]),
  ];

  for (const relationName of relationNames) {
    const removed = await removeChildRelation(
      chClient,
      normalizedCollectionId,
      normalizedAssetId,
      relationName,
      payload.relations
    );
    if (removed) {
      logResolved(
        'asset collection',
        `Removed asset ${normalizedAssetId} from collection ${normalizedCollectionId} via ${relationName}`
      );
      return true;
    }
  }

  return false;
}

async function updateMarketingAssetProperties(
  assetId: string,
  properties: Record<string, unknown>
): Promise<boolean> {
  return putEntityProperties(assetId, properties, 'marketing asset properties', 'EPAM.MarketingAsset');
}

const ZONE_VALUE_DEFINITION_NAMES = ['EPAM.MarketingAssetZoneValue', 'MarketingAssetZoneValue'];

function extractResponseMessage(content: unknown): string {
  if (content == null || typeof content !== 'object') return '';
  const record = content as Record<string, unknown>;
  const message = record.Message ?? record.message ?? record.error;
  return typeof message === 'string' ? message.trim() : '';
}

function extractCreatedEntityId(content: unknown): string | null {
  if (content == null || typeof content !== 'object') return null;
  const record = content as Record<string, unknown>;

  const directId = record.id;
  if (typeof directId === 'number' && Number.isFinite(directId)) return String(directId);
  if (typeof directId === 'string' && /^\d+$/.test(directId.trim())) return directId.trim();

  const systemId = record.systemProperties as Record<string, unknown> | undefined;
  if (typeof systemId?.id === 'number' && Number.isFinite(systemId.id)) {
    return String(systemId.id);
  }

  return null;
}

function definitionPropertyNames(definitionProperties: { name: string }[]): Set<string> {
  const names = new Set<string>();
  for (const entry of definitionProperties) {
    names.add(entry.name);
    const shortName = entry.name.includes('.') ? entry.name.split('.').pop() : entry.name;
    if (shortName) names.add(shortName);
  }
  return names;
}

function filterPropertiesForDefinition(
  properties: Record<string, unknown>,
  definitionProperties: { name: string }[]
): Record<string, unknown> {
  if (definitionProperties.length === 0) return properties;

  const allowed = definitionPropertyNames(definitionProperties);
  const filtered: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(properties)) {
    if (!allowed.has(key)) continue;
    const canonical =
      definitionProperties.find((entry) => entry.name === key)?.name ??
      definitionProperties.find((entry) => entry.name.endsWith(`.${key}`) || entry.name.split('.').pop() === key)
        ?.name ??
      key;
    filtered[canonical] = value;
  }

  return filtered;
}

async function applyZoneValueProperties(zoneValueId: string, value: ZoneValue): Promise<void> {
  const definitionProperties = await fetchDefinitionProperties(chClient, ZONE_VALUE_DEFINITION_NAMES[0]);

  // Title only — zoneKey property writes 500 on this Content Hub model.
  await putEntityPropertiesOptional(
    zoneValueId,
    zoneValueToCreateProperties(value),
    'zone value title'
  );

  const rawContent = zoneValueContentProperties(value);
  if (Object.keys(rawContent).length > 0) {
    const contentProps = resolveZoneValueContentPropertiesForDefinition(value, definitionProperties);
    if (Object.keys(contentProps).length > 0) {
      const saved = await putEntityPropertiesOptional(zoneValueId, contentProps, 'zone value content');
      if (!saved) {
        // Retry as plain strings (some CH string fields reject Invariant wrappers).
        const plain: Record<string, unknown> = {};
        for (const [key, wrapped] of Object.entries(contentProps)) {
          if (
            wrapped != null &&
            typeof wrapped === 'object' &&
            !Array.isArray(wrapped) &&
            typeof (wrapped as { Invariant?: unknown }).Invariant === 'string'
          ) {
            plain[key] = (wrapped as { Invariant: string }).Invariant;
          } else {
            plain[key] = wrapped;
          }
        }
        await putEntityPropertiesOptional(zoneValueId, plain, 'zone value content plain');
      }
    } else {
      logInfo(
        'zone value content',
        `No matching content properties on EPAM.MarketingAssetZoneValue for zone ${value.zoneKey} ` +
          `(definition has: ${definitionProperties.map((entry) => entry.name).join(', ') || '(none)'}). ` +
          'Text/html will persist via zoneLayoutJson fallback.'
      );
    }
  }

  await syncZoneValueSelectedAsset(zoneValueId, value);
}

async function createZoneValueEntity(value: ZoneValue): Promise<string> {
  if (!chClient?.raw?.postAsync) {
    throw new Error('Content Hub client is not available for creating zone values.');
  }

  // Title-only create — including zoneKey causes HTTP 500 on this instance.
  const createAttempts: Record<string, unknown>[] = [
    { Title: { Invariant: value.zoneKey } },
    { Title: value.zoneKey },
    {},
  ];

  let newId: string | null = null;
  let lastStatus = 'unknown';
  let lastMessage = '';

  for (const definitionName of ZONE_VALUE_DEFINITION_NAMES) {
    for (const properties of createAttempts) {
      const response = await chClient.raw.postAsync<unknown>('/api/entities', {
        entitydefinition: {
          href: `/api/entitydefinitions/${definitionName}`,
        },
        properties,
      });

      const createdId = extractCreatedEntityId(response.content);
      if (response.isSuccessStatusCode && createdId) {
        newId = createdId;
        logResolved(
          'zone value create',
          `Created ${definitionName} ${createdId} for ${value.zoneKey} with keys: ${Object.keys(properties).join(', ') || '(none)'}`
        );
        break;
      }

      lastStatus = String(response.statusCode ?? 'unknown');
      lastMessage = extractResponseMessage(response.content);
      logInfo(
        'zone value create',
        `Create attempt failed (${lastStatus}) for ${value.zoneKey} on ${definitionName} with keys: ${Object.keys(properties).join(', ') || '(none)'}${lastMessage ? ` — ${lastMessage}` : ''}`
      );
    }

    if (newId) break;
  }

  if (!newId) {
    throw new Error(
      `Failed to create zone value for "${value.zoneKey}" (HTTP ${lastStatus})` +
        `${lastMessage ? `: ${lastMessage}` : ''}. ` +
        'Check Create permission on EPAM.MarketingAssetZoneValue.'
    );
  }

  try {
    await applyZoneValueProperties(newId, value);
  } catch (error) {
    logInfo(
      'zone value create',
      `Zone value ${newId} (${value.zoneKey}) created but property update failed: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }

  return newId;
}

async function updateZoneValueEntity(value: ZoneValue): Promise<void> {
  if (!value.id) {
    throw new Error(`Zone value for ${value.zoneKey} has no entity id.`);
  }

  try {
    await applyZoneValueProperties(value.id, value);
    logResolved('zone value', `Updated EPAM.MarketingAssetZoneValue ${value.id} (${value.zoneKey})`);
  } catch (error) {
    throw new Error(
      `Failed to update zone value ${value.id} (${value.zoneKey}). Grant Update on EPAM.MarketingAssetZoneValue. ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

async function linkZoneValueToMarketingAsset(
  marketingAssetId: string,
  zoneValueId: string,
  marketingAssetRelations?: Record<string, unknown>
): Promise<void> {
  const relationNames = [
    ...discoverRelationNames(marketingAssetRelations, /zonevalue/i),
    'marketingAssetToZoneValue',
    'MarketingAssetToZoneValue',
    'EPAM.MarketingAssetToZoneValue',
  ];

  for (const relationName of [...new Set(relationNames)]) {
    const linked = await appendChildRelation(
      chClient,
      marketingAssetId,
      zoneValueId,
      relationName,
      marketingAssetRelations
    );
    if (linked) return;
  }

  if (!chClient?.raw?.postAsync) {
    throw new Error('Content Hub client is not available for linking zone values.');
  }

  for (const relationName of [...new Set(relationNames)]) {
    const response = await chClient.raw.postAsync(
      `/api/entities/${marketingAssetId}/relations/${relationName}`,
      {
        child: { href: `/api/entities/${zoneValueId}` },
      }
    );

    if (response.isSuccessStatusCode) {
      return;
    }
  }

  logMissing(
    'marketingAssetToZoneValue link',
    `Could not link zone value ${zoneValueId} to asset ${marketingAssetId}`,
    'The zone value entity was saved but the relation link may need to be created manually.'
  );
}

async function saveMarketingAssetZoneValues(
  marketingAssetId: string,
  zoneValues: ZoneValue[]
): Promise<ZoneValue[]> {
  const assetPayload = await getEntityPayload(marketingAssetId);
  const existingIds = [...new Set(getMarketingAssetZoneValueIds(assetPayload))];
  const existingByZoneKey = new Map<string, ZoneValue>();

  if (existingIds.length > 0) {
    const payloads = await loadRelatedEntities(existingIds);
    for (let index = 0; index < existingIds.length; index += 1) {
      const mapped = mapEntityToZoneValue(existingIds[index], payloads[index]);
      if (!existingByZoneKey.has(mapped.zoneKey)) {
        existingByZoneKey.set(mapped.zoneKey, mapped);
      }
    }
  }

  const saved: ZoneValue[] = [];
  const seenKeys = new Set<string>();

  for (const value of zoneValues) {
    if (!value.zoneKey?.trim() || seenKeys.has(value.zoneKey)) continue;
    if (!zoneValueHasPersistableContent(value)) {
      logInfo('zone value save', `Skipped empty zone value for ${value.zoneKey}`);
      continue;
    }
    seenKeys.add(value.zoneKey);

    const existing = value.id
      ? value
      : existingByZoneKey.get(value.zoneKey);
    const toSave = existing?.id ? { ...value, id: existing.id } : { ...value, id: undefined };

    if (toSave.id) {
      await updateZoneValueEntity(toSave);
      saved.push(toSave);
      continue;
    }

    const newId = await createZoneValueEntity(toSave);
    const persisted = { ...toSave, id: newId };
    await linkZoneValueToMarketingAsset(marketingAssetId, newId, assetPayload.relations);
    saved.push(persisted);
  }

  logResolved('zone values', `Saved ${saved.length} EPAM.MarketingAssetZoneValue record(s)`);
  return saved;
}

async function updateMarketingAsset(asset: MarketingAsset): Promise<MarketingAsset> {
  const properties = marketingAssetToProperties(asset);
  if (Object.keys(properties).length === 0) {
    return asset;
  }

  const saved = await updateMarketingAssetProperties(asset.id, properties);
  if (!saved) {
    throw new Error(
      `Could not save marketing asset ${asset.id}. Grant Update on EPAM.MarketingAsset and ensure properties such as zoneLayoutJson exist on the definition.`
    );
  }

  logResolved('marketing asset properties', `Saved properties on marketing asset ${asset.id}`);
  return asset;
}

export const contentHubApi = {
  getTemplate,
  listTemplatesForBrandKit,
  duplicateTemplate,
  createTemplate,
  linkMarketingAssetToTemplate,
  listTemplates: async (channelType?: string) => {
    try {
      return await proxyRequest<Template[]>(`/entities/EPAM.Template${channelType ? `?channelType=${channelType}` : ''}`);
    } catch (error) {
      logFallback('template list', error);
      return [createDummyTemplate(DUMMY_TEMPLATE_ID)];
    }
  },
  saveTemplate,
  getBrandKit,
  getMarketingAsset,
  createMarketingAsset: async (asset: Omit<MarketingAsset, 'id'>) => {
    try {
      return await proxyRequest<MarketingAsset>('/entities/EPAM.MarketingAsset', {
        method: 'POST',
        body: JSON.stringify(asset),
      });
    } catch (error) {
      logFallback('marketing asset create', error);
      return createDummyMarketingAsset('dummy-asset', asset.templateId || DUMMY_TEMPLATE_ID);
    }
  },
  updateMarketingAsset,
  saveMarketingAssetZoneValues,
  updateMarketingAssetProperties,
  uploadRenderedOutput: async (assetId: string, file: Blob, fileName: string) => {
    if (!isRenderedOutputUploadEnabled()) {
      logInfo(
        'rendered output upload',
        `Skipped upload for ${fileName} — no asset upload proxy is configured on this Content Hub instance.`
      );
      return { skipped: true, fileName, assetId };
    }

    try {
      const formData = new FormData();
      formData.append('file', file, fileName);
      formData.append('linkToEntity', 'EPAM.MarketingAsset');
      formData.append('linkToEntityId', assetId);
      formData.append('relationName', 'marketingAssetToRenderedOutput');

      const response = await fetch(`${proxyBase}/assets/upload`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error(`Asset upload failed (${response.status})`);
      return response.json();
    } catch (error) {
      logFallback('rendered output upload', error);
      return { skipped: true, fileName, assetId };
    }
  },
  searchAssets,
  searchAssetsInCollection: async (collectionId: string, query?: string) =>
    searchAssets({ collectionId, query }),
  getCollectionAssets: loadAssetsFromCollection,
  getZoneAllowedAssets: loadAllowedAssetsForZone,
  getTemplateAllowedAssets: loadAllowedAssetsForTemplate,
  getAssetsByIds,
  addAssetToCollection,
  removeAssetFromCollection,
  addAllowedAssetToTemplate,
  removeAllowedAssetFromTemplate,
  addAllowedAssetToZone,
  removeAllowedAssetFromZone,
};
