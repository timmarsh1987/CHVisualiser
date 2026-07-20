import type { EntityPayload } from './entityMap';

export function resolveEntityDefinitionHref(
  payload: EntityPayload | Record<string, unknown>,
  fallbackDefinitionName?: string
): string {
  const record = payload as Record<string, unknown>;
  const candidates = [record.entitydefinition, record.entityDefinition, record.definition];

  for (const candidate of candidates) {
    if (candidate == null || typeof candidate !== 'object') continue;
    const href = (candidate as Record<string, unknown>).href;
    if (typeof href === 'string' && href.trim()) {
      return href.trim();
    }
  }

  if (fallbackDefinitionName?.trim()) {
    return `/api/entitydefinitions/${fallbackDefinitionName.trim()}`;
  }

  throw new Error('Could not resolve entity definition for Content Hub entity update.');
}

export function buildEntityPutBody(
  payload: EntityPayload | Record<string, unknown>,
  properties: Record<string, unknown>,
  fallbackDefinitionName?: string
): Record<string, unknown> {
  return {
    entitydefinition: {
      href: resolveEntityDefinitionHref(payload, fallbackDefinitionName),
    },
    properties,
  };
}
