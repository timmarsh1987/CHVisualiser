export type TrendEntity = {
  slug: string;
  name: string;
  type: string | null;
};

export type TrendSummary = {
  id: string;
  title: string;
  summary: string | null;
  source: string;
  sourceKey: string;
  watchName: string | null;
  period: string | null;
  score: number | null;
  status: string;
  username: string | null;
  userDisplayName: string | null;
  markedAt: string;
  updatedAt: string;
  workItemCount: number;
  analyzed: boolean;
  entities: TrendEntity[];
};

export type TrendEvidenceSignal = {
  id: string;
  source: string;
  title: string | null;
  url: string | null;
  content: string;
  publishedAt: string | null;
};

export type TrendRelatedTrend = {
  id: string;
  title: string;
  summary: string | null;
  sourceKey: string;
  watchName: string | null;
  score: number | null;
};

export type TrendIntelligence = {
  executive_summary: string;
  why_it_matters: string[];
  buyer_implications: string[];
  suggested_questions: string[];
  recommended_assets: string[];
  what_epam_should_do: {
    priority: 'High' | 'Medium' | 'Low';
    suggested_activities: string[];
  };
  generatedAt: string;
  signalCount: number;
  relatedTrendCount: number;
};

export type TrendDetail = {
  trend: TrendSummary;
  evidenceSignals: TrendEvidenceSignal[];
  relatedTrends: TrendRelatedTrend[];
  intelligence: TrendIntelligence | null;
};

export type SuggestedAction = {
  title: string;
  description: string;
};

export type ConfidenceScore = {
  score: number;
  sources: number;
  label: string;
};

export type AskHistorySummary = {
  id: string;
  question: string;
  askedAt: string;
  answeredAt: string | null;
  answerPreview: string | null;
  confidenceScore: number | null;
};

export type AskHistoryEntry = {
  id: string;
  question: string;
  askedAt: string;
  answeredAt: string | null;
  result: AskResult | null;
};

export type AskResult = {
  queryId: string;
  answer: string;
  evidenceSignals: TrendEvidenceSignal[];
  relatedTrends: TrendSummary[];
  relatedDocuments: Array<{
    id: string;
    chunkId: string;
    title: string;
    excerpt: string;
    url: string | null;
    source: string;
    type: string;
    typeLabel: string;
    publishedAt: string | null;
  }>;
  relatedWebsiteEvidence: Array<{
    id: string;
    chunkId: string;
    pageId: string;
    title: string | null;
    url: string;
    excerpt: string;
    sourceId: string;
    sourceName: string;
  }>;
  relatedEntities: Array<{
    id: string;
    name: string;
    slug: string;
    type: string | null;
    typeLabel: string;
    description: string | null;
    trendCount: number;
    documentCount: number;
  }>;
  suggestedActions: SuggestedAction[];
  confidence: ConfidenceScore;
};

export type GenerateContentResult = {
  workItemId: string;
  versionNumber: number;
  content: string;
  queryId: string;
};

export type AssetType =
  | 'blog'
  | 'linkedin'
  | 'pov'
  | 'client_brief'
  | 'gtm_idea'
  | 'opportunity_brief';

export const ASSET_TYPES: Array<{ id: AssetType; label: string }> = [
  { id: 'blog', label: 'Blog' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'pov', label: 'POV' },
  { id: 'client_brief', label: 'Client Brief' },
  { id: 'gtm_idea', label: 'GTM Idea' },
  { id: 'opportunity_brief', label: 'Opportunity Brief' },
];

export type IntentIntelligenceOptions = {
  apiBaseUrl: string;
  apiToken: string;
  initialTrendId?: string;
  defaultView?: 'trends' | 'ask' | 'sources';
  limit?: number;
  loadAllTrends?: boolean;
  entitySlug?: string;
};

export type PanelView = 'trends' | 'ask' | 'sources';

export type CrawlMode = 'sitemap-first' | 'link-crawl';

export type WebsiteSourceConfig = {
  maxPages: number;
  includePathPrefix?: string;
  excludePaths?: string[];
  crawlMode: CrawlMode;
  jsRendering?: boolean;
  industryTags?: string[];
};

export type SourceSummary = {
  id: string;
  name: string;
  type: string;
  baseUrl: string;
  status: string;
  crawlStatus: string;
  lastCrawledAt: string | null;
  pageCount: number;
  processedPageCount: number;
  maxPages: number;
  createdAt: string;
  updatedAt: string;
};

export type SourcePageSummary = {
  id: string;
  title: string | null;
  url: string;
  statusCode: number | null;
  crawledAt: string | null;
  processedAt: string | null;
  entityCount: number;
  chunkCount: number;
  linkCount: number;
  imageCount: number;
  isProcessed: boolean;
};

export type SourceDetail = {
  id: string;
  name: string;
  type: string;
  baseUrl: string;
  status: string;
  crawlStatus: string;
  config: WebsiteSourceConfig;
  lastCrawledAt: string | null;
  createdAt: string;
  updatedAt: string;
  pageCount: number;
  processedPageCount: number;
  failedPages: number;
  recentPages: Array<{
    id: string;
    title: string | null;
    url: string;
    statusCode: number | null;
    crawledAt: string | null;
    processedAt: string | null;
  }>;
  extractedEntities: Array<{
    id: string;
    name: string;
    slug: string;
    type: string | null;
    pageCount: number;
    trendCount: number;
  }>;
};

export type CrawlLogEntry = {
  at: string;
  url: string;
  status:
    | 'queued'
    | 'crawling'
    | 'crawled'
    | 'skipped'
    | 'failed'
    | 'completed'
    | 'cancelled';
  message: string;
};

export type CrawlJobStats = {
  urls: string[];
  processed: number;
  maxPages: number;
  succeeded: number;
  failed: number;
  skipped: number;
  log?: CrawlLogEntry[];
};

export type CrawlJob = {
  id: string;
  sourceId: string;
  status: string;
  stats: CrawlJobStats | null;
  startedAt: string | null;
  completedAt: string | null;
  error: string | null;
  createdAt: string;
};

export type CreateSourceInput = {
  name: string;
  baseUrl: string;
  maxPages?: number;
  includePathPrefix?: string;
  excludePaths?: string;
  crawlMode?: CrawlMode;
  jsRendering?: boolean;
  industryTags?: string;
};

export const CRAWL_MODES: Array<{ id: CrawlMode; label: string }> = [
  { id: 'sitemap-first', label: 'Sitemap first' },
  { id: 'link-crawl', label: 'Link crawl' },
];
