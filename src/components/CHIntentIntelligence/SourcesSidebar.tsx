import React from 'react';

import type { SourceSummary } from './types';

type SourcesSidebarProps = {
  items: SourceSummary[];
  selectedId: string | null;
  loading: boolean;
  onSelect: (item: SourceSummary) => void;
  onAdd: () => void;
  onRefresh: () => void;
};

function formatDate(value: string | null) {
  if (!value) {
    return 'Never';
  }

  return new Date(value).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function crawlStatusLabel(status: string) {
  return status.replace(/_/g, ' ');
}

export function SourcesSidebar({
  items,
  selectedId,
  loading,
  onSelect,
  onAdd,
  onRefresh,
}: SourcesSidebarProps) {
  return (
    <aside className="ch-intent-intelligence__sidebar">
      <div className="ch-intent-intelligence__search ch-intent-intelligence__history-header">
        <div>
          <h2 className="ch-intent-intelligence__history-title">Website sources</h2>
          <p className="ch-intent-intelligence__trend-meta">
            Crawl competitor and partner sites for Ask evidence
          </p>
        </div>
        <button
          type="button"
          className="ch-intent-intelligence__button ch-intent-intelligence__button--secondary ch-intent-intelligence__history-refresh"
          onClick={onRefresh}
          disabled={loading}
        >
          Refresh
        </button>
      </div>

      <div className="ch-intent-intelligence__sidebar-actions">
        <button
          type="button"
          className="ch-intent-intelligence__button ch-intent-intelligence__button--primary"
          onClick={onAdd}
        >
          Add source
        </button>
      </div>

      <div className="ch-intent-intelligence__trend-list">
        {loading && items.length === 0 ? (
          <div className="ch-intent-intelligence__empty">Loading sources…</div>
        ) : items.length === 0 ? (
          <div className="ch-intent-intelligence__empty">
            No website sources yet. Add one to start crawling.
          </div>
        ) : (
          items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`ch-intent-intelligence__trend-item${
                selectedId === item.id ? ' ch-intent-intelligence__trend-item--selected' : ''
              }`}
              onClick={() => onSelect(item)}
            >
              <p className="ch-intent-intelligence__trend-title">{item.name}</p>
              <p className="ch-intent-intelligence__trend-meta">{item.baseUrl}</p>
              <div className="ch-intent-intelligence__trend-meta" style={{ marginTop: 6 }}>
                <span className="ch-intent-intelligence__badge ch-intent-intelligence__badge--status">
                  {crawlStatusLabel(item.crawlStatus)}
                </span>
                <span className="ch-intent-intelligence__badge ch-intent-intelligence__badge--analyzed">
                  {item.pageCount}/{item.maxPages} pages
                </span>
              </div>
              <p className="ch-intent-intelligence__trend-meta" style={{ marginTop: 4 }}>
                Last crawled {formatDate(item.lastCrawledAt)}
              </p>
            </button>
          ))
        )}
      </div>
    </aside>
  );
}
