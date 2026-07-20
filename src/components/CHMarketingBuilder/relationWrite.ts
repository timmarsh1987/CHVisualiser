import {
  discoverRelationNames,
  getRelationHref,
  parseEntityIdFromHref,
} from './relationResolve';

type RelationWriteClient = {
  raw?: {
    getAsync?: <T>(url: string) => Promise<{
      isSuccessStatusCode?: boolean;
      content?: T;
      statusCode?: number;
    }>;
    putAsync?: <T>(url: string, body: unknown) => Promise<{
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

export function hrefFromLinkObject(value: unknown): string | undefined {
  if (typeof value === 'string' && value.trim()) return value.trim();
  if (value != null && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    if (typeof record.href === 'string' && record.href.trim()) return record.href.trim();
  }
  return undefined;
}

export function childHrefsFromRelationContent(content: unknown): string[] {
  if (content == null || typeof content !== 'object') return [];
  const record = content as Record<string, unknown>;
  const hrefs: string[] = [];

  if (Array.isArray(record.children)) {
    for (const child of record.children) {
      const href = hrefFromLinkObject(child);
      if (href) hrefs.push(href);
    }
  }

  const singleChild = hrefFromLinkObject(record.child);
  if (singleChild) hrefs.push(singleChild);

  return hrefs;
}

export function relationSelfHref(content: unknown, fallback?: string): string | undefined {
  if (content != null && typeof content === 'object') {
    const self = hrefFromLinkObject((content as Record<string, unknown>).self);
    if (self) return self;
  }
  return fallback;
}

export function entityHrefForRelation(entityId: string | number, relationHref?: string): string {
  if (relationHref) {
    const originMatch = relationHref.match(/^(https?:\/\/[^/]+)/i);
    if (originMatch) {
      return `${originMatch[1]}/api/entities/${entityId}`;
    }
  }
  return `/api/entities/${entityId}`;
}

export function relationEndpoint(
  entityId: string | number,
  relationName: string,
  relations?: Record<string, unknown>
): string {
  return getRelationHref(relations, relationName) ?? `/api/entities/${entityId}/relations/${relationName}`;
}

async function readRelationState(
  client: RelationWriteClient,
  entityId: string | number,
  relationName: string,
  relations?: Record<string, unknown>
): Promise<{ requestUrls: string[]; selfHref: string; childHrefs: string[] }> {
  const relationUrl = getRelationHref(relations, relationName);
  const constructedUrl = `/api/entities/${entityId}/relations/${relationName}`;
  const requestUrls = relationUrl
    ? [...new Set([relationUrl, constructedUrl])]
    : [constructedUrl];

  if (!client.raw?.getAsync || !relationUrl) {
    return { requestUrls, selfHref: relationUrl ?? constructedUrl, childHrefs: [] };
  }

  for (const url of [relationUrl]) {
    try {
      const response = await client.raw.getAsync<unknown>(url);
      if (!response.isSuccessStatusCode || response.content == null) continue;
      const childHrefs = childHrefsFromRelationContent(response.content);
      const selfHref = relationSelfHref(response.content, url) ?? url;
      return { requestUrls, selfHref, childHrefs };
    } catch {
      // Try the next URL shape.
    }
  }

  return { requestUrls, selfHref: relationUrl ?? constructedUrl, childHrefs: [] };
}

function buildChildrenRelationBody(selfHref: string, childHrefs: string[]): Record<string, unknown> {
  return {
    children: childHrefs.map((href) => ({ href })),
    self: { href: selfHref },
  };
}

async function putRelationBody(
  client: RelationWriteClient,
  urls: string[],
  body: Record<string, unknown>
): Promise<boolean> {
  if (!client.raw?.putAsync) return false;

  for (const url of [...new Set(urls)]) {
    try {
      const response = await client.raw.putAsync(url, body);
      if (response.isSuccessStatusCode) return true;
    } catch {
      // Try the next URL shape.
    }
  }

  return false;
}

export async function appendChildRelation(
  client: RelationWriteClient,
  parentEntityId: string | number,
  childEntityId: string | number,
  relationName: string,
  relations?: Record<string, unknown>
): Promise<boolean> {
  const state = await readRelationState(client, parentEntityId, relationName, relations);
  const childHref = entityHrefForRelation(childEntityId, state.selfHref);
  const childHrefs = [...state.childHrefs];

  if (!childHrefs.some((href) => parseEntityIdFromHref(href) === Number(childEntityId))) {
    childHrefs.push(childHref);
  }

  const body = buildChildrenRelationBody(state.selfHref, childHrefs);
  if (await putRelationBody(client, [...state.requestUrls, state.selfHref], body)) {
    return true;
  }

  if (client.raw?.postAsync) {
    for (const url of state.requestUrls) {
      try {
        const postChildren = await client.raw.postAsync(url, body);
        if (postChildren.isSuccessStatusCode) return true;

        const postChild = await client.raw.postAsync(url, { child: { href: childHref } });
        if (postChild.isSuccessStatusCode) return true;
      } catch {
        // Try the next URL shape.
      }
    }
  }

  return false;
}

export async function removeChildRelation(
  client: RelationWriteClient,
  parentEntityId: string | number,
  childEntityId: string | number,
  relationName: string,
  relations?: Record<string, unknown>
): Promise<boolean> {
  const state = await readRelationState(client, parentEntityId, relationName, relations);
  const childHrefs = state.childHrefs.filter(
    (href) => parseEntityIdFromHref(href) !== Number(childEntityId)
  );

  if (childHrefs.length === state.childHrefs.length) {
    return true;
  }

  const body = buildChildrenRelationBody(state.selfHref, childHrefs);
  return putRelationBody(client, [...state.requestUrls, state.selfHref], body);
}

export async function setParentRelation(
  client: RelationWriteClient,
  childEntityId: string | number,
  parentEntityId: string | number,
  relationName: string,
  childRelations?: Record<string, unknown>
): Promise<boolean> {
  const state = await readRelationState(client, childEntityId, relationName, childRelations);
  const parentHref = entityHrefForRelation(parentEntityId, state.selfHref);
  const body = {
    parent: { href: parentHref },
    self: { href: state.selfHref },
  };

  if (await putRelationBody(client, [...state.requestUrls, state.selfHref], body)) {
    return true;
  }

  if (client.raw?.postAsync) {
    for (const url of state.requestUrls) {
      try {
        const response = await client.raw.postAsync(url, body);
        if (response.isSuccessStatusCode) return true;

        const postParent = await client.raw.postAsync(url, { parent: { href: parentHref } });
        if (postParent.isSuccessStatusCode) return true;
      } catch {
        // Try the next URL shape.
      }
    }
  }

  return false;
}

export async function clearParentRelation(
  client: RelationWriteClient,
  childEntityId: string | number,
  parentEntityId: string | number,
  relationName: string,
  childRelations?: Record<string, unknown>
): Promise<boolean> {
  const state = await readRelationState(client, childEntityId, relationName, childRelations);
  const relationHref = getRelationHref(childRelations, relationName) ?? state.selfHref;

  if (client.raw?.getAsync && getRelationHref(childRelations, relationName)) {
    try {
      const response = await client.raw.getAsync<unknown>(relationHref);
      if (response.isSuccessStatusCode && response.content != null) {
        const currentParent = hrefFromLinkObject(
          (response.content as Record<string, unknown>).parent
        );
        if (!currentParent || parseEntityIdFromHref(currentParent) !== Number(parentEntityId)) {
          return true;
        }
      }
    } catch {
      // Continue with clear attempt.
    }
  }

  const body = {
    parent: null,
    self: { href: state.selfHref },
  };

  if (await putRelationBody(client, [...state.requestUrls, state.selfHref], body)) {
    return true;
  }

  return putRelationBody(client, [...state.requestUrls, state.selfHref], {
    self: { href: state.selfHref },
  });
}

export function collectRelationNameCandidates(
  preferredNames: string[],
  relations: Record<string, unknown> | undefined,
  pattern: RegExp
): string[] {
  const discovered = discoverRelationNames(relations, pattern);
  const withHref = discovered.filter((name) => Boolean(getRelationHref(relations, name)));
  return [...new Set([...withHref, ...preferredNames, ...discovered])];
}
