import { ContentHubClient } from '@sitecore/sc-contenthub-webclient-sdk/dist/clients/content-hub-client';
import { DEFAULT_PAGE_SIZE, MAX_PAGES_SAFETY } from './constants';
import { debugLog } from './debug';
import type { LoadingProgress } from './types';

export function getApiBaseUrl(client: ContentHubClient): string {
  const raw = client as unknown as { baseUrl?: string; url?: string };
  if (raw.baseUrl) return raw.baseUrl.replace(/\/$/, '');
  if (raw.url) return raw.url.replace(/\/$/, '');
  return window.location.origin;
}

function extractPageItems(pageData: unknown): unknown[] {
  if (Array.isArray(pageData)) return pageData;
  if (pageData && typeof pageData === 'object') {
    const record = pageData as Record<string, unknown>;
    if (Array.isArray(record.items)) return record.items;
    if (Array.isArray(record.content)) return record.content;
  }
  return [];
}

function extractTotalCount(pageData: unknown, fallback: number): number {
  if (!pageData || typeof pageData !== 'object') return fallback;
  const record = pageData as Record<string, unknown>;
  const total =
    record.totalItems ??
    record.total ??
    record.count ??
    record.totalCount ??
    record.total_items;
  return typeof total === 'number' ? total : fallback;
}

export async function fetchEntityDefinitionPages(
  client: ContentHubClient,
  options: {
    pageSize?: number;
    signal?: AbortSignal;
    onProgress?: (progress: LoadingProgress) => void;
  } = {}
): Promise<unknown[]> {
  const pageSize = options.pageSize ?? DEFAULT_PAGE_SIZE;
  const baseUrl = getApiBaseUrl(client);
  const allData: unknown[] = [];
  let page = 0;
  let totalItems = 0;
  let hasMore = true;

  while (hasMore && page < MAX_PAGES_SAFETY) {
    if (options.signal?.aborted) {
      throw new DOMException('Aborted', 'AbortError');
    }

    options.onProgress?.({
      current: allData.length,
      total: totalItems || allData.length + pageSize,
    });

    const pageParams = new URLSearchParams({
      skip: String(page * pageSize),
      take: String(pageSize),
    });
    const pageUrl = `${baseUrl}/api/entitydefinitions?${pageParams.toString()}`;
    debugLog('Fetching', pageUrl);

    const response = await fetch(pageUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      signal: options.signal,
    });

    if (!response.ok) {
      throw new Error(`Entity definitions request failed (${response.status})`);
    }

    const pageData = await response.json();
    const pageItems = extractPageItems(pageData);

    if (page === 0 || totalItems === 0) {
      totalItems = extractTotalCount(pageData, 0);
    }

    if (pageItems.length === 0) {
      hasMore = false;
    } else {
      allData.push(...pageItems);
      const reachedTotal = totalItems > 0 && allData.length >= totalItems;
      hasMore = !reachedTotal && pageItems.length === pageSize;
    }

    page++;
    options.onProgress?.({
      current: allData.length,
      total: totalItems || allData.length,
    });
  }

  debugLog(`Fetched ${allData.length} entity definition records`);
  return allData;
}

export function buildDefinitionEditUrl(
  definitionId: number,
  options?: { definitionEditPath?: string }
): string {
  if (options?.definitionEditPath) {
    return options.definitionEditPath.replace('{id}', String(definitionId));
  }
  const localeMatch = window.location.pathname.match(/^\/([a-z]{2}-[a-z]{2})\//i);
  const locale = localeMatch?.[1] ?? 'en-us';
  return `/${locale}/admin/definitionmgmt/detail/${definitionId}`;
}
