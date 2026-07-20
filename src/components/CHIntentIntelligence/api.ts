import type {
  AskHistoryEntry,
  AskHistorySummary,
  AskResult,
  CreateSourceInput,
  CrawlJob,
  CrawlJobStats,
  GenerateContentResult,
  IntentIntelligenceOptions,
  SourceDetail,
  SourcePageSummary,
  SourceSummary,
  TrendDetail,
  TrendSummary,
} from './types';

type TrendListFilters = { q?: string; limit?: number; all?: boolean };

type TrendsCacheEntry = {
  trends: TrendSummary[];
  fetchedAt: number;
};

const trendsCache = new Map<string, TrendsCacheEntry>();
const inFlightTrends = new Map<string, Promise<TrendSummary[]>>();

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/$/, '');
}

function trendsCacheKey(
  options: IntentIntelligenceOptions,
  filters: TrendListFilters = {}
) {
  return JSON.stringify({
    base: normalizeBaseUrl(options.apiBaseUrl),
    token: options.apiToken,
    q: filters.q?.trim() ?? '',
    limit: filters.limit ?? null,
    all: filters.all !== false && !filters.limit,
  });
}

export function getCachedTrends(
  options: IntentIntelligenceOptions,
  filters: TrendListFilters = {}
): TrendSummary[] | null {
  const entry = trendsCache.get(trendsCacheKey(options, filters));
  return entry?.trends ?? null;
}

export function prefetchTrends(
  options: IntentIntelligenceOptions,
  filters: TrendListFilters = {}
) {
  return fetchTrends(options, filters);
}

async function embedRequest<T>(
  options: IntentIntelligenceOptions,
  path: string,
  init?: RequestInit
): Promise<T> {
  const url = `${normalizeBaseUrl(options.apiBaseUrl)}${path}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${options.apiToken}`,
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  });

  const payload = (await response.json()) as T & { error?: string };

  if (!response.ok) {
    throw new Error(payload.error ?? `Request failed (${response.status})`);
  }

  return payload;
}

export async function fetchTrends(
  options: IntentIntelligenceOptions,
  filters: TrendListFilters = {}
): Promise<TrendSummary[]> {
  const cacheKey = trendsCacheKey(options, filters);
  const existing = inFlightTrends.get(cacheKey);

  if (existing) {
    return existing;
  }

  const request = (async () => {
    const params = new URLSearchParams();

    if (filters.q?.trim()) {
      params.set('q', filters.q.trim());
    }

    if (filters.limit) {
      params.set('limit', String(filters.limit));
    } else if (filters.all !== false) {
      params.set('all', 'true');
    }

    const query = params.toString();
    const path = `/api/embed/trends${query ? `?${query}` : ''}`;
    const response = await embedRequest<{ trends: TrendSummary[] }>(options, path);
    trendsCache.set(cacheKey, {
      trends: response.trends,
      fetchedAt: Date.now(),
    });
    return response.trends;
  })();

  inFlightTrends.set(cacheKey, request);

  try {
    return await request;
  } finally {
    inFlightTrends.delete(cacheKey);
  }
}

export async function fetchTrendDetail(
  options: IntentIntelligenceOptions,
  trendId: string
): Promise<TrendDetail> {
  return embedRequest<TrendDetail>(options, `/api/embed/trends/${trendId}`);
}

export async function analyzeTrend(
  options: IntentIntelligenceOptions,
  trendId: string
): Promise<TrendDetail['intelligence']> {
  const response = await embedRequest<{ intelligence: TrendDetail['intelligence'] }>(
    options,
    `/api/embed/trends/${trendId}/analyze`,
    { method: 'POST' }
  );
  return response.intelligence;
}

export async function generateTrendContent(
  options: IntentIntelligenceOptions,
  trendId: string,
  question: string,
  assetType: string
): Promise<GenerateContentResult> {
  const response = await embedRequest<{ data: GenerateContentResult }>(
    options,
    `/api/embed/trends/${trendId}/generate`,
    {
      method: 'POST',
      body: JSON.stringify({ question, assetType }),
    }
  );
  return response.data;
}

export async function submitQuestion(
  options: IntentIntelligenceOptions,
  question: string,
  context?: { trendId?: string; entitySlug?: string }
): Promise<AskResult> {
  const response = await embedRequest<{ data: AskResult }>(options, '/api/embed/ask', {
    method: 'POST',
    body: JSON.stringify({
      question,
      trendId: context?.trendId,
      entitySlug: context?.entitySlug,
    }),
  });
  return response.data;
}

export async function fetchAskHistory(
  options: IntentIntelligenceOptions,
  limit = 30
): Promise<AskHistorySummary[]> {
  const params = new URLSearchParams();

  if (limit) {
    params.set('limit', String(limit));
  }

  const query = params.toString();
  const response = await embedRequest<{ history: AskHistorySummary[] }>(
    options,
    `/api/embed/ask/history${query ? `?${query}` : ''}`
  );

  return response.history;
}

export async function fetchAskById(
  options: IntentIntelligenceOptions,
  askId: string
): Promise<AskHistoryEntry> {
  const response = await embedRequest<{ entry: AskHistoryEntry }>(
    options,
    `/api/embed/ask/${askId}`
  );

  return response.entry;
}

export function prefetchAskHistory(options: IntentIntelligenceOptions, limit = 30) {
  return fetchAskHistory(options, limit);
}

export async function fetchSources(
  options: IntentIntelligenceOptions
): Promise<SourceSummary[]> {
  const response = await embedRequest<{ sources: SourceSummary[] }>(
    options,
    '/api/embed/sources'
  );

  return response.sources;
}

export function prefetchSources(options: IntentIntelligenceOptions) {
  return fetchSources(options);
}

export async function fetchSourceDetail(
  options: IntentIntelligenceOptions,
  sourceId: string
): Promise<SourceDetail> {
  const response = await embedRequest<{ source: SourceDetail }>(
    options,
    `/api/embed/sources/${sourceId}`
  );

  return response.source;
}

export async function fetchSourcePages(
  options: IntentIntelligenceOptions,
  sourceId: string
): Promise<SourcePageSummary[]> {
  const response = await embedRequest<{ pages: SourcePageSummary[] }>(
    options,
    `/api/embed/sources/${sourceId}/pages`
  );

  return response.pages;
}

export async function createSource(
  options: IntentIntelligenceOptions,
  input: CreateSourceInput
): Promise<SourceDetail> {
  const response = await embedRequest<{ source: SourceDetail }>(options, '/api/embed/sources', {
    method: 'POST',
    body: JSON.stringify(input),
  });

  return response.source;
}

export async function fetchCrawlStatus(
  options: IntentIntelligenceOptions,
  sourceId: string
): Promise<CrawlJob | null> {
  const response = await embedRequest<{ job: CrawlJob | null }>(
    options,
    `/api/embed/sources/${sourceId}/crawl`
  );

  return response.job;
}

export async function startSourceCrawl(
  options: IntentIntelligenceOptions,
  sourceId: string
): Promise<{ jobId: string; done: boolean; urls: string[]; pendingCount: number; skippedCount: number }> {
  const response = await embedRequest<{
    data: {
      jobId: string;
      done: boolean;
      urls: string[];
      pendingCount: number;
      skippedCount: number;
    };
  }>(options, `/api/embed/sources/${sourceId}/crawl`, { method: 'POST' });

  return response.data;
}

export async function stepSourceCrawl(
  options: IntentIntelligenceOptions,
  sourceId: string,
  jobId?: string
): Promise<{ done: boolean; stats: CrawlJobStats | null; cancelled?: boolean }> {
  const response = await embedRequest<{
    data: { done: boolean; stats: CrawlJobStats | null; cancelled?: boolean };
  }>(options, `/api/embed/sources/${sourceId}/crawl/step`, {
    method: 'POST',
    body: JSON.stringify(jobId ? { jobId } : {}),
  });

  return response.data;
}

export async function cancelSourceCrawl(
  options: IntentIntelligenceOptions,
  sourceId: string,
  jobId?: string
): Promise<{ cancelled: boolean; stats?: CrawlJobStats | null }> {
  const response = await embedRequest<{
    data: { cancelled: boolean; stats?: CrawlJobStats | null };
  }>(options, `/api/embed/sources/${sourceId}/crawl/cancel`, {
    method: 'POST',
    body: JSON.stringify(jobId ? { jobId } : {}),
  });

  return response.data;
}
