type RawClient = {
  raw?: {
    getAsync?: <T>(url: string) => Promise<{
      isSuccessStatusCode?: boolean;
      content?: T;
      statusCode?: number;
    }>;
  };
};

export function parseEntityIdFromHref(href: unknown): number | undefined {
  if (typeof href !== 'string' || !href.trim()) return undefined;
  const match = href.match(/\/entities\/(\d+)(?:\?|$|\/)/);
  if (!match) return undefined;
  const parsed = Number(match[1]);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export function idsFromRelationEntries(value: unknown): number[] {
  if (!Array.isArray(value)) return [];
  const ids: number[] = [];
  for (const entry of value) {
    if (typeof entry === 'number' && Number.isFinite(entry)) {
      ids.push(entry);
      continue;
    }
    if (entry == null || typeof entry !== 'object') continue;
    const record = entry as Record<string, unknown>;
    if (typeof record.id === 'number' && Number.isFinite(record.id)) {
      ids.push(record.id);
      continue;
    }
    if (typeof record.entityId === 'number' && Number.isFinite(record.entityId)) {
      ids.push(record.entityId);
      continue;
    }
    const fromHref = parseEntityIdFromHref(record.href) ?? parseEntityIdFromHref(record.entity);
    if (fromHref != null) ids.push(fromHref);
  }
  return ids;
}

export function idsFromRelationResponse(body: unknown): number[] {
  if (body == null || typeof body !== 'object') return [];

  const record = body as Record<string, unknown>;
  const directId = record.id ?? record.entityId;
  if (typeof directId === 'number' && Number.isFinite(directId)) {
    return [directId];
  }

  // Prefer parent for taxonomy-style relations (zoneType, channelType).
  // Child collections (allowed assets, etc.) typically have no parent.
  const parent = record.parent;
  if (parent != null && typeof parent === 'object') {
    const parentRecord = parent as Record<string, unknown>;
    const fromParentHref =
      parseEntityIdFromHref(parentRecord.href) ?? parseEntityIdFromHref(parentRecord.entity);
    if (fromParentHref != null) return [fromParentHref];
  }

  const fromParents = idsFromRelationEntries(record.parents);
  if (fromParents.length > 0) return fromParents;

  const fromChildren = idsFromRelationEntries(record.children);
  if (fromChildren.length > 0) return fromChildren;

  return [];
}

export function getRelationHref(
  relations: Record<string, unknown> | undefined,
  relationName: string
): string | undefined {
  if (!relations) return undefined;
  const entry = relations[relationName];
  if (entry == null) return undefined;

  if (typeof entry === 'string' && entry.trim()) {
    return entry.trim();
  }

  if (typeof entry === 'object' && !Array.isArray(entry)) {
    const record = entry as Record<string, unknown>;
    const href = record.href ?? record.self;
    if (typeof href === 'string' && href.trim()) {
      return href.trim();
    }
    if (href != null && typeof href === 'object') {
      const nested = (href as Record<string, unknown>).href;
      if (typeof nested === 'string' && nested.trim()) {
        return nested.trim();
      }
    }
  }

  return undefined;
}

export function getRelationIdsFromSnapshot(
  relations: Record<string, unknown> | undefined,
  ...relationNames: string[]
): number[] {
  if (!relations) return [];

  for (const relationName of relationNames) {
    const entry = relations[relationName];
    if (entry == null) continue;

    if (Array.isArray(entry)) {
      const ids = idsFromRelationEntries(entry);
      if (ids.length > 0) return ids;
      continue;
    }

    if (typeof entry === 'object') {
      const ids = idsFromRelationResponse(entry);
      if (ids.length > 0) return ids;
    }
  }

  return [];
}

export function discoverRelationNames(
  relations: Record<string, unknown> | undefined,
  pattern: RegExp
): string[] {
  if (!relations) return [];
  return Object.keys(relations).filter((name) => pattern.test(name));
}

export async function fetchRelationEntityIds(
  client: RawClient | null | undefined,
  entityId: string | number,
  relationName: string,
  relations?: Record<string, unknown>
): Promise<number[]> {
  const fromSnapshot = getRelationIdsFromSnapshot(relations, relationName);
  if (fromSnapshot.length > 0) return fromSnapshot;

  if (!client?.raw?.getAsync) return [];

  const relationHref = getRelationHref(relations, relationName);
  if (!relationHref) return [];

  try {
    const response = await client.raw.getAsync<unknown>(relationHref);
    if (!response.isSuccessStatusCode || response.content == null) {
      return [];
    }
    return idsFromRelationResponse(response.content);
  } catch {
    return [];
  }
}

export async function fetchFirstRelationEntityIds(
  client: RawClient | null | undefined,
  entityId: string | number,
  relations: Record<string, unknown> | undefined,
  relationNames: string[]
): Promise<{ ids: number[]; relationName?: string }> {
  const uniqueNames = [...new Set(relationNames)];
  for (const relationName of uniqueNames) {
    const ids = await fetchRelationEntityIds(client, entityId, relationName, relations);
    if (ids.length > 0) {
      return { ids, relationName };
    }
  }
  return { ids: [] };
}

export function readRelatedPathLabel(
  payload: Record<string, unknown>,
  pathName: string
): string {
  const relatedPaths = payload.related_paths;
  if (relatedPaths == null || typeof relatedPaths !== 'object') return '';

  const path = (relatedPaths as Record<string, unknown>)[pathName];
  if (!Array.isArray(path) || path.length === 0) return '';

  const firstGroup = path[0];
  if (!Array.isArray(firstGroup) || firstGroup.length === 0) return '';

  const entry = firstGroup[0];
  if (entry == null || typeof entry !== 'object') return '';

  const values = (entry as Record<string, unknown>).values;
  if (values == null || typeof values !== 'object' || Array.isArray(values)) return '';

  for (const value of Object.values(values as Record<string, unknown>)) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }

  return '';
}
