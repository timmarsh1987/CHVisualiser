import { logInfo, logResolved } from './debugLog';
import {
  fetchDefinitionRelationsForAliases,
  type DefinitionRelation,
} from './entityDefinitionResolve';
import type { EntityPayload } from './entityMap';
import { resolveEntityDefinitionHref } from './entityPut';
import { TEMPLATE_ZONE_TYPE_RELATION_NAMES } from './options';
import {
  discoverRelationNames,
  fetchRelationEntityIds,
  getRelationHref,
  readRelatedPathLabel,
} from './relationResolve';
import { appendChildRelation, setParentRelation } from './relationWrite';
import { resolveTemplateZoneType } from './zoneHelpers';
import type { TemplateZone, ZoneType } from './types';

type RawClient = {
  raw?: {
    getAsync?: <T>(url: string) => Promise<{
      isSuccessStatusCode?: boolean;
      content?: T;
      statusCode?: number;
    }>;
    postAsync?: <T>(url: string, body: unknown) => Promise<{
      isSuccessStatusCode?: boolean;
      content?: T;
      statusCode?: number;
    }>;
  };
};

type GetEntityPayload = (entityId: string) => Promise<EntityPayload>;

const ZONE_DEFINITION_ALIASES = ['EPAM.TemplateZone', 'TemplateZone'];
const zoneTypeTaxonomyIdByType = new Map<ZoneType, string>();
let catalogDiscoveryStarted = false;
let catalogDiscoveryDone = false;
let zoneTypeDefinitionRelations: DefinitionRelation[] = [];

function readStringFromProperties(properties: Record<string, unknown>, ...keys: string[]): string {
  for (const key of keys) {
    const value = properties[key];
    if (value == null) continue;
    if (typeof value === 'string' && value.trim()) return value.trim();
    if (typeof value === 'object' && !Array.isArray(value)) {
      const record = value as Record<string, unknown>;
      if (typeof record.Invariant === 'string' && record.Invariant.trim()) {
        return record.Invariant.trim();
      }
      if (typeof record.identifier === 'string' && record.identifier.trim()) {
        return record.identifier.trim();
      }
      const labels = record.labels ?? record.Labels;
      if (labels != null && typeof labels === 'object' && !Array.isArray(labels)) {
        for (const label of Object.values(labels as Record<string, unknown>)) {
          if (typeof label === 'string' && label.trim()) return label.trim();
        }
      }
    }
  }
  return '';
}

export function readTaxonomyItemLabel(payload: EntityPayload): string {
  const properties = payload.properties ?? {};
  const payloadRecord = payload as Record<string, unknown>;
  const propertyKeys = Object.keys(properties);

  const preferred =
    readStringFromProperties(
      properties,
      'identifier',
      'Identifier',
      'zoneTypeName',
      'ZoneTypeName',
      'Title',
      'Name',
      'Label',
      'label'
    ) ||
    readRelatedPathLabel(payloadRecord, 'zoneType') ||
    readRelatedPathLabel(payloadRecord, 'ZoneType');

  if (preferred) return preferred;

  for (const key of propertyKeys) {
    const value = readStringFromProperties(properties, key);
    if (value) return value;
  }

  return '';
}

function rememberTaxonomyMapping(label: string, entityId: string | number): void {
  const normalized = label.trim();
  if (!normalized || !entityId) return;

  const exact = (
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

  if (!exact) {
    // Also accept identifiers like "cta_button", "backgroundColor", "CTAButton"
    const compact = normalized.toLowerCase().replace(/[\s_-]+/g, '');
    const compactMatch = (
      [
        ['text', 'Text'],
        ['heading', 'Heading'],
        ['image', 'Image'],
        ['ctabutton', 'CTA Button'],
        ['cta', 'CTA Button'],
        ['logo', 'Logo'],
        ['backgroundcolor', 'Background Color'],
        ['background', 'Background Color'],
        ['divider', 'Divider'],
        ['html', 'HTML'],
      ] as [string, ZoneType][]
    ).find(([key]) => key === compact)?.[1];

    if (!compactMatch) return;
    if (!zoneTypeTaxonomyIdByType.has(compactMatch)) {
      zoneTypeTaxonomyIdByType.set(compactMatch, String(entityId));
      logInfo(
        'template zone type',
        `Mapped taxonomy ${entityId} → "${compactMatch}" (from "${label}")`
      );
    }
    return;
  }

  if (!zoneTypeTaxonomyIdByType.has(exact)) {
    zoneTypeTaxonomyIdByType.set(exact, String(entityId));
    logInfo('template zone type', `Mapped taxonomy ${entityId} → "${exact}" (from "${label}")`);
  }
}

function collectZoneTypeRelationNames(relations?: Record<string, unknown>): string[] {
  const fromDefinition = zoneTypeDefinitionRelations.map((relation) => relation.name);
  return [
    ...new Set([
      ...fromDefinition,
      ...TEMPLATE_ZONE_TYPE_RELATION_NAMES,
      ...discoverRelationNames(relations, /zone.?type/i),
    ]),
  ];
}

export function zonePayloadHasZoneTypeRelation(payload: EntityPayload): boolean {
  return collectZoneTypeRelationNames(payload.relations).some((name) =>
    Boolean(payload.relations?.[name])
  );
}

function parseEntityIdsFromQuery(payload: unknown): number[] {
  if (payload == null) return [];

  const items = Array.isArray(payload)
    ? payload
    : Array.isArray((payload as { items?: unknown[] }).items)
      ? (payload as { items: unknown[] }).items
      : Array.isArray((payload as { content?: unknown[] }).content)
        ? (payload as { content: unknown[] }).content
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
}

function definitionNameFromEntity(payload: EntityPayload): string {
  try {
    const href = resolveEntityDefinitionHref(payload);
    const match = href.match(/\/entitydefinitions\/([^/?#]+)/i);
    return match?.[1] ? decodeURIComponent(match[1]) : '';
  } catch {
    return '';
  }
}

async function loadTaxonomyItemsForDefinition(
  client: RawClient,
  getEntityPayload: GetEntityPayload,
  definitionName: string
): Promise<number> {
  const query = encodeURIComponent(`Definition.Name=='${definitionName}'`);
  const queryUrls = [
    `/api/entities/query?query=${query}&take=100`,
    `/api/entities/query?query=${query}&pageSize=100`,
  ];

  for (const url of queryUrls) {
    try {
      const response = await client.raw.getAsync<unknown>(url);
      if (!response.isSuccessStatusCode || response.content == null) continue;

      const ids = parseEntityIdsFromQuery(response.content);
      for (const id of ids) {
        const payload = await getEntityPayload(String(id));
        const label = readTaxonomyItemLabel(payload);
        if (label) rememberTaxonomyMapping(label, id);
      }
      if (ids.length > 0) {
        logResolved(
          'template zone type',
          `Loaded ${ids.length} taxonomy item(s) from ${definitionName}; mapped ${zoneTypeTaxonomyIdByType.size} zone type(s)`
        );
        return ids.length;
      }
    } catch {
      // Try the next query URL shape.
    }
  }

  return 0;
}

async function harvestFromZonePayload(
  client: RawClient,
  getEntityPayload: GetEntityPayload,
  zonePayload: EntityPayload
): Promise<string | undefined> {
  const relationNames = collectZoneTypeRelationNames(zonePayload.relations);
  for (const relationName of relationNames) {
    const ids = await fetchRelationEntityIds(client, '', relationName, zonePayload.relations);
    if (ids[0] == null) continue;

    const typePayload = await getEntityPayload(String(ids[0]));
    const label = readTaxonomyItemLabel(typePayload);
    if (label) rememberTaxonomyMapping(label, ids[0]);
    return definitionNameFromEntity(typePayload) || undefined;
  }
  return undefined;
}

async function ensureDefinitionRelations(client: RawClient | null | undefined): Promise<void> {
  if (zoneTypeDefinitionRelations.length > 0 || !client) return;
  const relations = await fetchDefinitionRelationsForAliases(client, ZONE_DEFINITION_ALIASES);
  zoneTypeDefinitionRelations = relations.filter((relation) => /zone.?type/i.test(relation.name));
}

/**
 * Discover zone-type taxonomy IDs by reading existing TemplateZone → zoneType links,
 * then loading the full taxonomy definition once we know its name.
 */
async function discoverZoneTypeTaxonomyCatalog(
  client: RawClient | null | undefined,
  getEntityPayload: GetEntityPayload
): Promise<void> {
  if (catalogDiscoveryDone || !client?.raw?.getAsync) return;
  if (catalogDiscoveryStarted) return;
  catalogDiscoveryStarted = true;

  await ensureDefinitionRelations(client);

  let taxonomyDefinitionName =
    zoneTypeDefinitionRelations.find((relation) => relation.target?.trim())?.target ?? '';

  const zoneQueries = [
    encodeURIComponent("Definition.Name=='EPAM.TemplateZone'"),
    encodeURIComponent("Definition.Name=='TemplateZone'"),
  ];

  for (const query of zoneQueries) {
    for (const url of [
      `/api/entities/query?query=${query}&take=40`,
      `/api/entities/query?query=${query}&pageSize=40`,
    ]) {
      try {
        const response = await client.raw.getAsync<unknown>(url);
        if (!response.isSuccessStatusCode || response.content == null) continue;

        const zoneIds = parseEntityIdsFromQuery(response.content);
        for (const zoneId of zoneIds) {
          const zonePayload = await getEntityPayload(String(zoneId));
          const foundDefinition = await harvestFromZonePayload(client, getEntityPayload, zonePayload);
          if (foundDefinition && !taxonomyDefinitionName) {
            taxonomyDefinitionName = foundDefinition;
          }
        }

        if (zoneIds.length > 0) break;
      } catch {
        // Try next URL.
      }
    }
    if (zoneTypeTaxonomyIdByType.size > 0) break;
  }

  if (taxonomyDefinitionName) {
    await loadTaxonomyItemsForDefinition(client, getEntityPayload, taxonomyDefinitionName);
  }

  catalogDiscoveryDone = true;
  logInfo(
    'template zone type',
    `Taxonomy catalog ready: ${[...zoneTypeTaxonomyIdByType.entries()]
      .map(([type, id]) => `${type}=${id}`)
      .join(', ') || '(empty)'}`
  );
}

export async function warmZoneTypeTaxonomyFromZonePayloads(
  client: RawClient | null | undefined,
  getEntityPayload: GetEntityPayload,
  zonePayloads: EntityPayload[]
): Promise<void> {
  await ensureDefinitionRelations(client);

  for (const payload of zonePayloads) {
    await harvestFromZonePayload(client as RawClient, getEntityPayload, payload);
  }

  if (zoneTypeTaxonomyIdByType.size === 0) {
    await discoverZoneTypeTaxonomyCatalog(client, getEntityPayload);
  }
}

async function resolveZoneTypeTaxonomyEntityId(
  client: RawClient | null | undefined,
  getEntityPayload: GetEntityPayload,
  zoneType: ZoneType
): Promise<string | undefined> {
  const cached = zoneTypeTaxonomyIdByType.get(zoneType);
  if (cached) return cached;

  await discoverZoneTypeTaxonomyCatalog(client, getEntityPayload);
  return zoneTypeTaxonomyIdByType.get(zoneType);
}

/**
 * Content Hub relation roles on the zone definition:
 * - Child  → zone points at a parent taxonomy item → setParentRelation
 * - Parent → zone owns taxonomy children → appendChildRelation
 * Taxonomy fields like zoneType / channelType are almost always Child→Parent.
 */
function relationUsesParentWrite(relationName: string): boolean {
  const definition = zoneTypeDefinitionRelations.find((relation) => relation.name === relationName);
  const role = definition?.role?.toLowerCase();
  if (role === 'parent') return false;
  return true;
}

async function readLinkedZoneTypeAfterWrite(
  client: RawClient | null | undefined,
  getEntityPayload: GetEntityPayload,
  zoneId: string,
  relationName: string
): Promise<ZoneType | undefined> {
  if (!client?.raw?.getAsync) return undefined;

  // Always hit the relation endpoint after a write — entity snapshots can lag.
  const relationHref = `/api/entities/${zoneId}/relations/${relationName}`;
  const ids = await fetchRelationEntityIds(client, zoneId, relationName, {
    [relationName]: { href: relationHref },
  });

  if (ids[0] == null) return undefined;

  const typePayload = await getEntityPayload(String(ids[0]));
  const label = readTaxonomyItemLabel(typePayload);
  if (!label) return undefined;

  rememberTaxonomyMapping(label, ids[0]);
  return resolveTemplateZoneType(label, '', '');
}

async function linkZoneToTaxonomy(
  client: RawClient | null | undefined,
  getEntityPayload: GetEntityPayload,
  zoneId: string,
  taxonomyId: string,
  zoneType: ZoneType,
  relationName: string,
  payload: EntityPayload
): Promise<boolean> {
  const attempts: Array<{ label: string; run: () => Promise<boolean> }> = relationUsesParentWrite(
    relationName
  )
    ? [
        {
          label: 'parent',
          run: () => setParentRelation(client, zoneId, taxonomyId, relationName, payload.relations),
        },
        {
          label: 'child',
          run: () => appendChildRelation(client, zoneId, taxonomyId, relationName, payload.relations),
        },
      ]
    : [
        {
          label: 'child',
          run: () => appendChildRelation(client, zoneId, taxonomyId, relationName, payload.relations),
        },
        {
          label: 'parent',
          run: () => setParentRelation(client, zoneId, taxonomyId, relationName, payload.relations),
        },
      ];

  for (const attempt of attempts) {
    const linked = await attempt.run();
    if (!linked) continue;

    const verified = await readLinkedZoneTypeAfterWrite(
      client,
      getEntityPayload,
      zoneId,
      relationName
    );

    if (verified === zoneType) {
      logResolved(
        'template zone type',
        `Linked zone ${zoneId} to taxonomy ${taxonomyId} (${zoneType}) via ${attempt.label} ${relationName}`
      );
      return true;
    }

    logInfo(
      'template zone type',
      `${attempt.label} write for zone ${zoneId} → taxonomy ${taxonomyId} returned OK but read-back is "${verified ?? '(none)'}" (expected "${zoneType}")`
    );
  }

  if (client?.raw?.postAsync) {
    const parentBody = { parent: { href: `/api/entities/${taxonomyId}` } };
    const response = await client.raw.postAsync(
      `/api/entities/${zoneId}/relations/${relationName}`,
      parentBody
    );
    if (response.isSuccessStatusCode) {
      const verified = await readLinkedZoneTypeAfterWrite(
        client,
        getEntityPayload,
        zoneId,
        relationName
      );
      if (verified === zoneType) {
        logResolved(
          'template zone type',
          `Linked zone ${zoneId} to taxonomy ${taxonomyId} (${zoneType}) via POST parent ${relationName}`
        );
        return true;
      }
    }
  }

  return false;
}

export async function readTemplateZoneTypeFromRelations(
  client: RawClient | null | undefined,
  getEntityPayload: GetEntityPayload,
  zone: TemplateZone,
  payload: EntityPayload
): Promise<ZoneType | undefined> {
  const relationNames = collectZoneTypeRelationNames(payload.relations);

  for (const relationName of relationNames) {
    // Only probe relations that exist on the entity — inventing URLs causes noisy 404s.
    const href = getRelationHref(payload.relations, relationName);
    if (!href) continue;

    const ids = await fetchRelationEntityIds(client, zone.id, relationName, {
      [relationName]: { href },
    });
    if (ids[0] == null) continue;

    const typePayload = await getEntityPayload(String(ids[0]));
    const label = readTaxonomyItemLabel(typePayload);
    if (!label) continue;

    rememberTaxonomyMapping(label, ids[0]);
    return resolveTemplateZoneType(label, zone.zoneKey, zone.zoneLabel);
  }

  return undefined;
}

export async function enrichTemplateZoneType(
  client: RawClient | null | undefined,
  getEntityPayload: GetEntityPayload,
  zone: TemplateZone,
  payload: EntityPayload
): Promise<TemplateZone> {
  const fromRelation = await readTemplateZoneTypeFromRelations(client, getEntityPayload, zone, payload);
  if (fromRelation) {
    return { ...zone, zoneType: fromRelation };
  }
  return zone;
}

export async function syncTemplateZoneTypeRelation(
  client: RawClient | null | undefined,
  getEntityPayload: GetEntityPayload,
  zoneId: string,
  zoneType: ZoneType,
  payload: EntityPayload
): Promise<boolean> {
  await ensureDefinitionRelations(client);

  const taxonomyId = await resolveZoneTypeTaxonomyEntityId(client, getEntityPayload, zoneType);
  if (!taxonomyId) {
    const relationKeys = Object.keys(payload.relations ?? {}).join(', ') || '(none)';
    const known = [...zoneTypeTaxonomyIdByType.keys()].join(', ') || '(none)';
    logInfo(
      'template zone type',
      `No taxonomy item found for zone type "${zoneType}" on zone ${zoneId}. Known types: ${known}. Zone relations: ${relationKeys}.`
    );
    return false;
  }

  const relationNames = collectZoneTypeRelationNames(payload.relations);
  for (const relationName of relationNames) {
    const linked = await linkZoneToTaxonomy(
      client,
      getEntityPayload,
      zoneId,
      taxonomyId,
      zoneType,
      relationName,
      payload
    );
    if (linked) return true;
  }

  logInfo(
    'template zone type',
    `Could not link zone ${zoneId} to taxonomy ${taxonomyId} (${zoneType}). Tried relations: ${relationNames.join(', ') || '(none)'}`
  );
  return false;
}
