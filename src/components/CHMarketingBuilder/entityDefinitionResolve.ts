import type { EntityPayload } from './entityMap';
import { discoverRelationNames, getRelationHref } from './relationResolve';
import { TEMPLATE_ZONE_INVERSE_RELATION_NAMES } from './options';

type DefinitionClient = {
  raw?: {
    getAsync?: <T>(url: string) => Promise<{
      isSuccessStatusCode?: boolean;
      content?: T;
      statusCode?: number;
    }>;
  };
};

export type DefinitionRelation = {
  name: string;
  role?: string;
  target?: string;
};

const definitionRelationCache = new Map<string, DefinitionRelation[]>();
const TEMPLATE_DEFINITION_NAMES = ['EPAM.Template', 'Template'];
const ZONE_DEFINITION_NAMES = ['EPAM.TemplateZone', 'TemplateZone'];

function targetNameFromHref(href: string): string {
  const parts = href.split('/');
  return parts[parts.length - 1] ?? '';
}

function unwrapDefinitionPayload(payload: unknown): Record<string, unknown> | null {
  if (payload == null || typeof payload !== 'object') return null;
  const record = payload as Record<string, unknown>;

  if (Array.isArray(record.member_groups)) {
    return record;
  }

  const nested = record.content;
  if (nested != null && typeof nested === 'object' && !Array.isArray(nested)) {
    return nested as Record<string, unknown>;
  }

  if (Array.isArray(record.items) && record.items[0] != null && typeof record.items[0] === 'object') {
    return record.items[0] as Record<string, unknown>;
  }

  return record;
}

export type DefinitionProperty = {
  name: string;
  type: string;
  isMandatory?: boolean;
};

export function parseDefinitionProperties(payload: unknown): DefinitionProperty[] {
  const record = unwrapDefinitionPayload(payload);
  if (!record) return [];

  const properties: DefinitionProperty[] = [];
  const memberGroups = record.member_groups;
  if (!Array.isArray(memberGroups)) return properties;

  for (const group of memberGroups) {
    if (group == null || typeof group !== 'object') continue;
    const members = (group as Record<string, unknown>).members;
    if (!Array.isArray(members)) continue;

    for (const member of members) {
      if (member == null || typeof member !== 'object') continue;
      const entry = member as Record<string, unknown>;
      if (entry.type === 'Relation') continue;

      const name = typeof entry.name === 'string' ? entry.name.trim() : '';
      if (!name) continue;

      properties.push({
        name,
        type: typeof entry.type === 'string' ? entry.type : 'Unknown',
        isMandatory: Boolean(entry.is_mandatory),
      });
    }
  }

  return properties;
}

export async function fetchDefinitionProperties(
  client: DefinitionClient | null | undefined,
  definitionName: string
): Promise<DefinitionProperty[]> {
  if (!client?.raw?.getAsync) return [];

  const urls = [
    `/api/entitydefinitions/${definitionName}?include=member_groups`,
    `/api/entitydefinitions/${definitionName}`,
    `/api/entitydefinitions/${encodeURIComponent(definitionName)}`,
  ];

  for (const url of urls) {
    try {
      const response = await client.raw.getAsync<unknown>(url);
      if (!response.isSuccessStatusCode || response.content == null) continue;
      const parsed = parseDefinitionProperties(response.content);
      if (parsed.length > 0) {
        return parsed;
      }
    } catch {
      // Try the next definition URL shape.
    }
  }

  return [];
}

export function parseDefinitionRelations(payload: unknown): DefinitionRelation[] {
  const record = unwrapDefinitionPayload(payload);
  if (!record) return [];

  const relations: DefinitionRelation[] = [];
  const memberGroups = record.member_groups;
  if (!Array.isArray(memberGroups)) return relations;

  for (const group of memberGroups) {
    if (group == null || typeof group !== 'object') continue;
    const members = (group as Record<string, unknown>).members;
    if (!Array.isArray(members)) continue;

    for (const member of members) {
      if (member == null || typeof member !== 'object') continue;
      const entry = member as Record<string, unknown>;
      if (entry.type !== 'Relation') continue;

      const associated = entry.associated_entitydefinition as { href?: string } | undefined;
      const href = associated?.href ?? '';
      const name = typeof entry.name === 'string' ? entry.name.trim() : '';
      if (!name) continue;

      relations.push({
        name,
        role: typeof entry.role === 'string' ? entry.role : undefined,
        target: href ? targetNameFromHref(href) : undefined,
      });
    }
  }

  return relations;
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

async function fetchDefinitionByName(
  client: DefinitionClient | null | undefined,
  definitionName: string
): Promise<DefinitionRelation[]> {
  if (!client?.raw?.getAsync) return [];

  const urls = [
    `/api/entitydefinitions/${definitionName}`,
    `/api/entitydefinitions/${definitionName}?include=member_groups`,
    `/api/entitydefinitions/${encodeURIComponent(definitionName)}`,
  ];

  for (const url of urls) {
    try {
      const response = await client.raw.getAsync<unknown>(url);
      if (!response.isSuccessStatusCode || response.content == null) continue;
      const parsed = parseDefinitionRelations(response.content);
      if (parsed.length > 0) {
        return parsed;
      }
    } catch {
      // Try the next definition URL shape.
    }
  }

  return [];
}

export async function fetchDefinitionRelations(
  client: DefinitionClient | null | undefined,
  definitionName: string
): Promise<DefinitionRelation[]> {
  const cached = definitionRelationCache.get(definitionName);
  if (cached) return cached;

  const parsed = await fetchDefinitionByName(client, definitionName);
  definitionRelationCache.set(definitionName, parsed);
  return parsed;
}

export async function fetchDefinitionRelationsForAliases(
  client: DefinitionClient | null | undefined,
  aliases: string[]
): Promise<DefinitionRelation[]> {
  for (const alias of aliases) {
    const relations = await fetchDefinitionRelations(client, alias);
    if (relations.length > 0) {
      return relations;
    }
  }
  return [];
}

async function discoverZoneParentRelationsFromSample(
  client: DefinitionClient | null | undefined
): Promise<string[]> {
  if (!client?.raw?.getAsync) return [];

  const query = encodeURIComponent("Definition.Name=='EPAM.TemplateZone'");
  const queryUrls = [
    `/api/entities/query?query=${query}&take=1`,
    `/api/entities/query?query=${query}&pageSize=1`,
  ];

  for (const url of queryUrls) {
    try {
      const response = await client.raw.getAsync<unknown>(url);
      if (!response.isSuccessStatusCode || response.content == null) continue;

      const ids = parseEntityIdsFromQuery(response.content);
      if (ids.length === 0) continue;

      const entityResponse = await client.raw.getAsync<EntityPayload>(`/api/entities/${ids[0]}`);
      if (!entityResponse.isSuccessStatusCode || !entityResponse.content?.relations) continue;

      return discoverRelationNames(entityResponse.content.relations, /template/i).filter(
        (name) => !/collection|asset/i.test(name)
      );
    } catch {
      // Try the next query URL shape.
    }
  }

  return [];
}

function matchesTarget(target: string | undefined, pattern: RegExp): boolean {
  return Boolean(target && pattern.test(target));
}

function isTemplateTarget(target: string | undefined): boolean {
  return matchesTarget(target, /(^|\.)Template$/i) && !matchesTarget(target, /TemplateZone/i);
}

export async function resolveTemplateZoneLinkRelations(
  client: DefinitionClient | null | undefined,
  templateRelations?: Record<string, unknown>
): Promise<{ templateChildRelations: string[]; zoneParentRelations: string[] }> {
  const [templateDefinitionRelations, zoneDefinitionRelations, sampleParentRelations] =
    await Promise.all([
      fetchDefinitionRelationsForAliases(client, TEMPLATE_DEFINITION_NAMES),
      fetchDefinitionRelationsForAliases(client, ZONE_DEFINITION_NAMES),
      discoverZoneParentRelationsFromSample(client),
    ]);

  const childFromDefinition = templateDefinitionRelations
    .filter((relation) => matchesTarget(relation.target, /TemplateZone/i))
    .map((relation) => relation.name);

  const parentFromDefinition = zoneDefinitionRelations
    .filter((relation) => isTemplateTarget(relation.target))
    .map((relation) => relation.name);

  const childFromEntity = discoverRelationNames(templateRelations, /zone/i).filter((name) =>
    Boolean(getRelationHref(templateRelations, name))
  );

  const templateChildRelations = [
    ...new Set([
      ...childFromEntity,
      ...childFromDefinition,
      ...discoverRelationNames(templateRelations, /zone/i),
    ]),
  ];

  const zoneParentRelations = [
    ...new Set([
      ...sampleParentRelations,
      ...parentFromDefinition,
      ...TEMPLATE_ZONE_INVERSE_RELATION_NAMES,
    ]),
  ];

  if (
    templateChildRelations.length === 0 &&
    zoneParentRelations.length === TEMPLATE_ZONE_INVERSE_RELATION_NAMES.length
  ) {
    console.info(
      '%c[CHMarketingBuilder] INFO template zone relations:',
      'color: #1565c0; font-weight: bold',
      'No template↔zone relation found on EPAM.Template or EPAM.TemplateZone. ' +
        'Create a Parent relation on EPAM.TemplateZone pointing to EPAM.Template in Content Hub Model.'
    );
  } else if (zoneParentRelations.length > 0 || templateChildRelations.length > 0) {
    console.info(
      '%c[CHMarketingBuilder] INFO template zone relations:',
      'color: #1565c0; font-weight: bold',
      [
        templateChildRelations.length > 0
          ? `template child: ${templateChildRelations.join(', ')}`
          : null,
        zoneParentRelations.length > 0 ? `zone parent: ${zoneParentRelations.join(', ')}` : null,
      ]
        .filter(Boolean)
        .join(' | ')
    );
  }

  return { templateChildRelations, zoneParentRelations };
}

export function logTemplateRelationKeys(templateId: string, payload: EntityPayload): void {
  const relationKeys = Object.keys(payload.relations ?? {});
  if (relationKeys.length === 0) return;
  console.info(
    `%c[CHMarketingBuilder] INFO template ${templateId} relations:`,
    'color: #1565c0; font-weight: bold',
    relationKeys.join(', ')
  );
}

export function logZoneRelationKeys(zoneId: string, payload: EntityPayload): void {
  const relationKeys = Object.keys(payload.relations ?? {});
  if (relationKeys.length === 0) return;
  console.info(
    `%c[CHMarketingBuilder] INFO zone ${zoneId} relations:`,
    'color: #1565c0; font-weight: bold',
    relationKeys.join(', ')
  );
}
