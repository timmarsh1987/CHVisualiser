import React from 'react';

import type { AskHistorySummary } from './types';

type AskHistorySidebarProps = {
  items: AskHistorySummary[];
  selectedId: string | null;
  loading: boolean;
  onSelect: (item: AskHistorySummary) => void;
  onRefresh: () => void;
};

function formatAskDate(value: string) {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function confidenceLabel(score: number | null) {
  if (score == null) {
    return null;
  }

  if (score >= 0.7) {
    return 'High confidence';
  }

  if (score >= 0.4) {
    return 'Medium confidence';
  }

  return 'Low confidence';
}

export function AskHistorySidebar({
  items,
  selectedId,
  loading,
  onSelect,
  onRefresh,
}: AskHistorySidebarProps) {
  return (
    <aside className="ch-intent-intelligence__sidebar">
      <div className="ch-intent-intelligence__search ch-intent-intelligence__history-header">
        <div>
          <h2 className="ch-intent-intelligence__history-title">Previous questions</h2>
          <p className="ch-intent-intelligence__trend-meta">
            Shared workspace history from Intent Intelligence
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

      <div className="ch-intent-intelligence__trend-list">
        {loading && items.length === 0 ? (
          <div className="ch-intent-intelligence__empty">Loading history…</div>
        ) : items.length === 0 ? (
          <div className="ch-intent-intelligence__empty">
            No questions yet. Ask something to start building history.
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
              <p className="ch-intent-intelligence__trend-title">{item.question}</p>
              {item.answerPreview ? (
                <p className="ch-intent-intelligence__trend-meta">{item.answerPreview}</p>
              ) : (
                <p className="ch-intent-intelligence__trend-meta">No answer saved</p>
              )}
              <div className="ch-intent-intelligence__trend-meta" style={{ marginTop: 6 }}>
                <span className="ch-intent-intelligence__badge ch-intent-intelligence__badge--status">
                  {formatAskDate(item.askedAt)}
                </span>
                {confidenceLabel(item.confidenceScore) ? (
                  <span className="ch-intent-intelligence__badge ch-intent-intelligence__badge--analyzed">
                    {confidenceLabel(item.confidenceScore)}
                  </span>
                ) : null}
              </div>
            </button>
          ))
        )}
      </div>
    </aside>
  );
}
