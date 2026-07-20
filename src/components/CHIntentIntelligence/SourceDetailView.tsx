import React, { useCallback, useEffect, useState } from 'react';

import { fetchSourceDetail, fetchSourcePages } from './api';
import { InlineSpinner } from './LoadingState';
import { SourceCrawlPanel } from './SourceCrawlPanel';
import type { IntentIntelligenceOptions, SourceDetail, SourcePageSummary } from './types';

type SourceDetailViewProps = {
  config: IntentIntelligenceOptions;
  sourceId: string;
  onSourceUpdated?: () => void;
};

function formatDate(value: string | null) {
  if (!value) {
    return '—';
  }

  return new Date(value).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function progressPercent(pageCount: number, processedPageCount: number, maxPages: number) {
  const crawled =
    maxPages > 0 ? Math.min(100, Math.round((pageCount / maxPages) * 100)) : 0;
  const processed =
    pageCount > 0 ? Math.round((processedPageCount / pageCount) * 100) : 0;

  return { crawled, processed };
}

export function SourceDetailView({ config, sourceId, onSourceUpdated }: SourceDetailViewProps) {
  const [source, setSource] = useState<SourceDetail | null>(null);
  const [pages, setPages] = useState<SourcePageSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingPages, setLoadingPages] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshSource = useCallback(async () => {
    try {
      const detail = await fetchSourceDetail(config, sourceId);
      setSource(detail);
      onSourceUpdated?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load source.');
    }
  }, [config, sourceId, onSourceUpdated]);

  const refreshPages = useCallback(async () => {
    setLoadingPages(true);

    try {
      const rows = await fetchSourcePages(config, sourceId);
      setPages(rows);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load pages.');
    } finally {
      setLoadingPages(false);
    }
  }, [config, sourceId]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setSource(null);
    setPages([]);

    void (async () => {
      try {
        const detail = await fetchSourceDetail(config, sourceId);
        setSource(detail);
        const rows = await fetchSourcePages(config, sourceId);
        setPages(rows);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load source.');
      } finally {
        setLoading(false);
      }
    })();
  }, [config, sourceId]);

  if (loading) {
    return (
      <div className="ch-intent-intelligence__empty">
        <InlineSpinner label="Loading source…" />
      </div>
    );
  }

  if (error && !source) {
    return <div className="ch-intent-intelligence__empty">{error}</div>;
  }

  if (!source) {
    return <div className="ch-intent-intelligence__empty">Source not found.</div>;
  }

  const { crawled, processed } = progressPercent(
    source.pageCount,
    source.processedPageCount,
    source.config.maxPages
  );

  return (
    <div className="ch-intent-intelligence__source-detail">
      <div className="ch-intent-intelligence__panel">
        <h3 className="ch-intent-intelligence__panel-title">{source.name}</h3>
        <p className="ch-intent-intelligence__trend-meta" style={{ margin: '0 0 12px' }}>
          <a href={source.baseUrl} target="_blank" rel="noreferrer">
            {source.baseUrl}
          </a>
        </p>

        <div className="ch-intent-intelligence__stats-grid">
          <div className="ch-intent-intelligence__stat">
            <p className="ch-intent-intelligence__trend-meta">Crawl status</p>
            <p className="ch-intent-intelligence__stat-value">{source.crawlStatus.replace(/_/g, ' ')}</p>
          </div>
          <div className="ch-intent-intelligence__stat">
            <p className="ch-intent-intelligence__trend-meta">Pages crawled</p>
            <p className="ch-intent-intelligence__stat-value">
              {source.pageCount}/{source.config.maxPages} ({crawled}%)
            </p>
          </div>
          <div className="ch-intent-intelligence__stat">
            <p className="ch-intent-intelligence__trend-meta">Pages processed</p>
            <p className="ch-intent-intelligence__stat-value">
              {source.processedPageCount}/{source.pageCount} ({processed}%)
            </p>
          </div>
          <div className="ch-intent-intelligence__stat">
            <p className="ch-intent-intelligence__trend-meta">Last crawled</p>
            <p className="ch-intent-intelligence__stat-value">{formatDate(source.lastCrawledAt)}</p>
          </div>
        </div>

        {source.config.industryTags?.length ? (
          <div style={{ marginTop: 12 }}>
            <p className="ch-intent-intelligence__trend-meta">Industry tags</p>
            <div className="ch-intent-intelligence__tag-list">
              {source.config.industryTags.map((tag) => (
                <span key={tag} className="ch-intent-intelligence__badge ch-intent-intelligence__badge--analyzed">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <SourceCrawlPanel
        config={config}
        sourceId={sourceId}
        onStepComplete={() => {
          void refreshSource();
          void refreshPages();
        }}
        onComplete={() => {
          void refreshSource();
          void refreshPages();
        }}
      />

      <div className="ch-intent-intelligence__panel">
        <div className="ch-intent-intelligence__ask-toolbar">
          <h3 className="ch-intent-intelligence__panel-title">Pages</h3>
          <button
            type="button"
            className="ch-intent-intelligence__button ch-intent-intelligence__button--secondary"
            onClick={() => void refreshPages()}
            disabled={loadingPages}
          >
            {loadingPages ? 'Refreshing…' : 'Refresh pages'}
          </button>
        </div>

        {pages.length === 0 ? (
          <p className="ch-intent-intelligence__trend-meta">
            No pages yet. Run a crawl to discover content.
          </p>
        ) : (
          <div className="ch-intent-intelligence__page-list">
            {pages.slice(0, 25).map((page) => (
              <div key={page.id} className="ch-intent-intelligence__page-row">
                <div>
                  <p className="ch-intent-intelligence__page-title">
                    {page.title ?? 'Untitled page'}
                  </p>
                  <a
                    className="ch-intent-intelligence__page-url"
                    href={page.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {page.url}
                  </a>
                </div>
                <div className="ch-intent-intelligence__page-meta">
                  <span className="ch-intent-intelligence__badge ch-intent-intelligence__badge--status">
                    {page.isProcessed ? 'Processed' : 'Pending'}
                  </span>
                  {page.statusCode ? (
                    <span className="ch-intent-intelligence__badge ch-intent-intelligence__badge--analyzed">
                      HTTP {page.statusCode}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
            {pages.length > 25 ? (
              <p className="ch-intent-intelligence__trend-meta">
                Showing 25 of {pages.length} pages.
              </p>
            ) : null}
          </div>
        )}
      </div>

      {source.extractedEntities.length > 0 ? (
        <div className="ch-intent-intelligence__panel">
          <h3 className="ch-intent-intelligence__panel-title">Extracted entities</h3>
          <div className="ch-intent-intelligence__entity-list">
            {source.extractedEntities.map((entity) => (
              <div key={entity.id} className="ch-intent-intelligence__entity-row">
                <span className="ch-intent-intelligence__entity-name">{entity.name}</span>
                <span className="ch-intent-intelligence__trend-meta">
                  {entity.pageCount} page{entity.pageCount === 1 ? '' : 's'}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {error ? <p className="ch-intent-intelligence__error">{error}</p> : null}
    </div>
  );
}
