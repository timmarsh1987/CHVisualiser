import {
  fetchDefinitionProperties,
  fetchDefinitionRelationsForAliases,
  type DefinitionProperty,
} from './entityDefinitionResolve';

type DefinitionClient = Parameters<typeof fetchDefinitionProperties>[0];

const ZONE_DEFINITION_ALIASES = ['EPAM.TemplateZone', 'TemplateZone'];

export type ZoneTypeStorageMode = 'property' | 'relation' | 'both' | 'unknown';

export type ZoneTypeStorageContext = {
  mode: ZoneTypeStorageMode;
  propertyNames: string[];
  relationNames: string[];
};

let cachedContext: ZoneTypeStorageContext | null = null;

function isZoneTypePropertyName(name: string): boolean {
  return /zone.?type/i.test(name);
}

function isZoneTypeRelationName(name: string): boolean {
  return /zone.?type/i.test(name);
}

function propertyNamesFromDefinition(properties: DefinitionProperty[]): string[] {
  return properties.filter((entry) => isZoneTypePropertyName(entry.name)).map((entry) => entry.name);
}

export async function resolveZoneTypeStorage(
  client: DefinitionClient | null | undefined
): Promise<ZoneTypeStorageContext> {
  if (cachedContext) return cachedContext;

  const [properties, relations] = await Promise.all([
    fetchDefinitionProperties(client, ZONE_DEFINITION_ALIASES[0]).then(async (parsed) => {
      if (parsed.length > 0) return parsed;
      return fetchDefinitionProperties(client, ZONE_DEFINITION_ALIASES[1]);
    }),
    fetchDefinitionRelationsForAliases(client, ZONE_DEFINITION_ALIASES),
  ]);

  const propertyNames = propertyNamesFromDefinition(properties);
  const relationNames = relations
    .filter((relation) => isZoneTypeRelationName(relation.name))
    .map((relation) => relation.name);

  let mode: ZoneTypeStorageMode = 'unknown';
  if (propertyNames.length > 0 && relationNames.length === 0) {
    mode = 'property';
  } else if (relationNames.length > 0 && propertyNames.length === 0) {
    mode = 'relation';
  } else if (propertyNames.length > 0 && relationNames.length > 0) {
    mode = 'both';
  }

  cachedContext = {
    mode,
    propertyNames:
      propertyNames.length > 0
        ? propertyNames
        : ['zoneType', 'ZoneType', 'EPAM.zoneType', 'zoneTypeMA'],
    relationNames,
  };

  return cachedContext;
}

export function usesZoneTypePropertyStorage(context: ZoneTypeStorageContext): boolean {
  return context.mode === 'property' || context.mode === 'both' || context.mode === 'unknown';
}

export function usesZoneTypeRelationStorage(context: ZoneTypeStorageContext): boolean {
  return context.mode === 'relation' || context.mode === 'both';
}
