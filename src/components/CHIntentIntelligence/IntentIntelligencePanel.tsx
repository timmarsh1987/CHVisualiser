/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  analyzeTrend,
  fetchAskById,
  fetchAskHistory,
  fetchSources,
  fetchTrendDetail,
  fetchTrends,
  generateTrendContent,
  getCachedTrends,
  submitQuestion,
} from './api';
import { AskHistorySidebar } from './AskHistorySidebar';
import { CreateSourceForm } from './CreateSourceForm';
import { InlineSpinner, LoadingState } from './LoadingState';
import { SourceDetailView } from './SourceDetailView';
import { SourcesSidebar } from './SourcesSidebar';
import type {
  AskHistorySummary,
  AskResult,
  AssetType,
  IntentIntelligenceOptions,
  PanelView,
  SourceSummary,
  TrendDetail,
  TrendSummary,
} from './types';
import { ASSET_TYPES } from './types';
import { getOptionsDiagnostics } from './options';
import './index.css';

interface IntentIntelligencePanelProps {
  client?: any;
  options?: Partial<IntentIntelligenceOptions>;
  entity?: any;
}

function formatSourceKey(sourceKey: string) {
  return sourceKey.replace(/_/g, ' ');
}

function formatDate(value: string) {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function resolveOptions(
  options: Partial<IntentIntelligenceOptions> | undefined
): IntentIntelligenceOptions | null {
  const apiBaseUrl = options?.apiBaseUrl?.trim();
  const apiToken = options?.apiToken?.trim();

  if (!apiBaseUrl || !apiToken) {
    return null;
  }

  return {
    apiBaseUrl,
    apiToken,
    initialTrendId: options?.initialTrendId,
    defaultView: options?.defaultView ?? 'trends',
    limit: options?.limit,
    loadAllTrends: options?.loadAllTrends !== false,
    entitySlug: options?.entitySlug,
  };
}

function TrendListItem({
  trend,
  selected,
  onSelect,
}: {
  trend: TrendSummary;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={`ch-intent-intelligence__trend-item${
        selected ? ' ch-intent-intelligence__trend-item--selected' : ''
      }`}
      onClick={onSelect}
    >
      <p className="ch-intent-intelligence__trend-title">{trend.title}</p>
      {trend.summary ? (
        <p className="ch-intent-intelligence__trend-meta">{trend.summary.slice(0, 120)}</p>
      ) : null}
      <div className="ch-intent-intelligence__trend-meta" style={{ marginTop: 6 }}>
        {trend.analyzed ? (
          <span className="ch-intent-intelligence__badge ch-intent-intelligence__badge--analyzed">
            Analyzed
          </span>
        ) : null}
        <span className="ch-intent-intelligence__badge ch-intent-intelligence__badge--status">
          {formatSourceKey(trend.sourceKey)}
        </span>
      </div>
    </button>
  );
}

function AskResultPanel({ result }: { result: AskResult }) {
  return (
    <div className="ch-intent-intelligence__panel">
      <h3 className="ch-intent-intelligence__panel-title">Answer</h3>
      <p className="ch-intent-intelligence__answer">{result.answer}</p>

      <div style={{ marginTop: 16 }}>
        <h3 className="ch-intent-intelligence__panel-title">Evidence summary</h3>
        <p className="ch-intent-intelligence__trend-meta">
          {result.evidenceSignals.length} signals · {result.relatedTrends.length} trends ·{' '}
          {result.relatedDocuments.length} documents · {result.relatedEntities.length} entities ·{' '}
          Confidence {Math.round(result.confidence.score * 100)}%
        </p>
      </div>

      {result.suggestedActions.length > 0 ? (
        <div style={{ marginTop: 16 }}>
          <h3 className="ch-intent-intelligence__panel-title">Suggested actions</h3>
          <ul className="ch-intent-intelligence__list">
            {result.suggestedActions.map((action) => (
              <li key={action.title}>
                <strong>{action.title}</strong> — {action.description}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function TrendDetailPanel({
  detail,
  loading,
  analyzing,
  generating,
  error,
  question,
  assetType,
  generatedContent,
  onAnalyze,
  onQuestionChange,
  onAssetTypeChange,
  onGenerate,
  onAskAboutTrend,
}: {
  detail: TrendDetail;
  loading: boolean;
  analyzing: boolean;
  generating: boolean;
  error: string | null;
  question: string;
  assetType: AssetType;
  generatedContent: string | null;
  onAnalyze: () => void;
  onQuestionChange: (value: string) => void;
  onAssetTypeChange: (value: AssetType) => void;
  onGenerate: () => void;
  onAskAboutTrend: () => void;
}) {
  const { trend, intelligence, evidenceSignals, relatedTrends } = detail;
  const suggestedQuestions =
    intelligence?.suggested_questions ?? [
      `What should we communicate about ${trend.title} to enterprise buyers?`,
      `What pursuit angle should we take on ${trend.title}?`,
    ];

  return (
    <div>
      <div className="ch-intent-intelligence__panel">
        <h2 style={{ margin: '0 0 8px', fontSize: 20 }}>{trend.title}</h2>
        {trend.summary ? (
          <p style={{ margin: '0 0 12px', lineHeight: 1.6 }}>{trend.summary}</p>
        ) : null}
        <div className="ch-intent-intelligence__trend-meta">
          {trend.source} · {trend.status} · {formatDate(trend.markedAt)}
        </div>
        <div className="ch-intent-intelligence__actions">
          <button
            type="button"
            className="ch-intent-intelligence__button ch-intent-intelligence__button--secondary"
            onClick={onAskAboutTrend}
          >
            Ask about this trend
          </button>
          <button
            type="button"
            className="ch-intent-intelligence__button ch-intent-intelligence__button--secondary"
            disabled={analyzing || loading}
            onClick={onAnalyze}
          >
            {analyzing ? 'Analyzing…' : intelligence ? 'Refresh analysis' : 'Analyze trend'}
          </button>
        </div>
      </div>

      {intelligence ? (
        <div className="ch-intent-intelligence__panel">
          <h3 className="ch-intent-intelligence__panel-title">Trend intelligence</h3>
          <p style={{ lineHeight: 1.7 }}>{intelligence.executive_summary}</p>
          <p className="ch-intent-intelligence__trend-meta" style={{ marginTop: 8 }}>
            Generated {formatDate(intelligence.generatedAt)} · {intelligence.signalCount} signals ·{' '}
            {intelligence.relatedTrendCount} related trends
          </p>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}>
            <div>
              <h4 className="ch-intent-intelligence__panel-title">Why it matters</h4>
              <ul className="ch-intent-intelligence__list">
                {intelligence.why_it_matters.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="ch-intent-intelligence__panel-title">Buyer implications</h4>
              <ul className="ch-intent-intelligence__list">
                {intelligence.buyer_implications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      <div className="ch-intent-intelligence__panel">
        <h3 className="ch-intent-intelligence__panel-title">Create from question</h3>
        <p className="ch-intent-intelligence__trend-meta" style={{ marginBottom: 12 }}>
          Ask a question, generate an asset with CodeMie, and save it as a work item version.
        </p>
        <textarea
          className="ch-intent-intelligence__textarea"
          value={question}
          onChange={(event) => onQuestionChange(event.target.value)}
        />
        <div className="ch-intent-intelligence__chip-row">
          {suggestedQuestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              className={`ch-intent-intelligence__chip${
                question === suggestion ? ' ch-intent-intelligence__chip--selected' : ''
              }`}
              onClick={() => onQuestionChange(suggestion)}
            >
              {suggestion.slice(0, 80)}
              {suggestion.length > 80 ? '…' : ''}
            </button>
          ))}
        </div>
        <fieldset style={{ border: 'none', padding: 0, margin: '12px 0 0' }}>
          <legend className="ch-intent-intelligence__panel-title">Asset type</legend>
          <div className="ch-intent-intelligence__chip-row">
            {ASSET_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                className={`ch-intent-intelligence__chip${
                  assetType === type.id ? ' ch-intent-intelligence__chip--selected' : ''
                }`}
                onClick={() => onAssetTypeChange(type.id)}
              >
                {type.label}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="ch-intent-intelligence__actions">
          <button
            type="button"
            className="ch-intent-intelligence__button ch-intent-intelligence__button--primary"
            disabled={generating || !question.trim()}
            onClick={onGenerate}
          >
            {generating ? 'Generating…' : 'Generate and save version'}
          </button>
        </div>
        {generatedContent ? (
          <div className="ch-intent-intelligence__generated">{generatedContent}</div>
        ) : null}
      </div>

      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <div className="ch-intent-intelligence__panel">
          <h3 className="ch-intent-intelligence__panel-title">Evidence signals ({evidenceSignals.length})</h3>
          {evidenceSignals.length === 0 ? (
            <p className="ch-intent-intelligence__trend-meta">No signals found.</p>
          ) : (
            <ul className="ch-intent-intelligence__list" style={{ listStyle: 'none', padding: 0 }}>
              {evidenceSignals.slice(0, 5).map((signal) => (
                <li key={signal.id} style={{ marginBottom: 12 }}>
                  <strong>{signal.title ?? 'Untitled signal'}</strong>
                  <p className="ch-intent-intelligence__trend-meta">{signal.content.slice(0, 180)}…</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="ch-intent-intelligence__panel">
          <h3 className="ch-intent-intelligence__panel-title">Related trends ({relatedTrends.length})</h3>
          {relatedTrends.length === 0 ? (
            <p className="ch-intent-intelligence__trend-meta">No related trends found.</p>
          ) : (
            <ul className="ch-intent-intelligence__list">
              {relatedTrends.map((related) => (
                <li key={related.id}>{related.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {error ? <p className="ch-intent-intelligence__error">{error}</p> : null}
    </div>
  );
}

const IntentIntelligencePanel: React.FC<IntentIntelligencePanelProps> = ({ options }) => {
  const config = useMemo(() => resolveOptions(options), [options]);
  const initialTrendFilters = useMemo(
    () => ({
      limit: config?.limit,
      all: config?.loadAllTrends !== false && !config?.limit,
    }),
    [config]
  );
  const initialCachedTrends = useMemo(
    () => (config ? getCachedTrends(config, initialTrendFilters) : null),
    [config, initialTrendFilters]
  );

  const [view, setView] = useState<PanelView>(config?.defaultView ?? 'trends');
  const [trends, setTrends] = useState<TrendSummary[]>(initialCachedTrends ?? []);
  const [selectedTrendId, setSelectedTrendId] = useState<string | null>(
    config?.initialTrendId ?? initialCachedTrends?.[0]?.id ?? null
  );
  const [trendDetail, setTrendDetail] = useState<TrendDetail | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loadingTrends, setLoadingTrends] = useState(!initialCachedTrends);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [asking, setAsking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createQuestion, setCreateQuestion] = useState('');
  const [assetType, setAssetType] = useState<AssetType>('blog');
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [askQuestion, setAskQuestion] = useState('');
  const [askResult, setAskResult] = useState<AskResult | null>(null);
  const [askTrendId, setAskTrendId] = useState<string | null>(null);
  const [askHistory, setAskHistory] = useState<AskHistorySummary[]>([]);
  const [selectedAskId, setSelectedAskId] = useState<string | null>(null);
  const [loadingAskHistory, setLoadingAskHistory] = useState(false);
  const [loadingAskDetail, setLoadingAskDetail] = useState(false);
  const [detailLoadedForId, setDetailLoadedForId] = useState<string | null>(null);
  const [sources, setSources] = useState<SourceSummary[]>([]);
  const [selectedSourceId, setSelectedSourceId] = useState<string | null>(null);
  const [showCreateSource, setShowCreateSource] = useState(false);
  const [loadingSources, setLoadingSources] = useState(false);

  const loadTrends = useCallback(async () => {
    if (!config) return;

    const filters = {
      q: searchQuery,
      limit: config.limit,
      all: config.loadAllTrends && !config.limit,
    };
    const cached = getCachedTrends(config, filters);

    if (cached) {
      setTrends(cached);
      setLoadingTrends(false);
    } else {
      setLoadingTrends(true);
    }

    setError(null);

    try {
      const rows = await fetchTrends(config, filters);
      setTrends(rows);

      setSelectedTrendId((current) => {
        if (current && rows.some((row) => row.id === current)) {
          return current;
        }
        if (config.initialTrendId && rows.some((row) => row.id === config.initialTrendId)) {
          return config.initialTrendId;
        }
        return rows[0]?.id ?? null;
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load trends.');
    } finally {
      setLoadingTrends(false);
    }
  }, [config, searchQuery]);

  const loadTrendDetail = useCallback(
    async (trendId: string) => {
      if (!config) return;

      setLoadingDetail(true);
      setError(null);

      try {
        const detail = await fetchTrendDetail(config, trendId);
        setTrendDetail(detail);
        setDetailLoadedForId(trendId);
        setCreateQuestion(
          detail.intelligence?.suggested_questions?.[0] ??
            `What should we communicate about ${detail.trend.title} to enterprise buyers?`
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load trend.');
        setTrendDetail(null);
      } finally {
        setLoadingDetail(false);
      }
    },
    [config]
  );

  const loadAskHistory = useCallback(async () => {
    if (!config) return;

    setLoadingAskHistory(true);

    try {
      const rows = await fetchAskHistory(config, 30);
      setAskHistory(rows);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load ask history.');
    } finally {
      setLoadingAskHistory(false);
    }
  }, [config]);

  const loadSources = useCallback(async () => {
    if (!config) return;

    setLoadingSources(true);

    try {
      const rows = await fetchSources(config);
      setSources(rows);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load sources.');
    } finally {
      setLoadingSources(false);
    }
  }, [config]);

  useEffect(() => {
    void loadTrends();
  }, [loadTrends]);

  useEffect(() => {
    if (config) {
      void loadAskHistory();
      void loadSources();
    }
  }, [config, loadAskHistory, loadSources]);

  useEffect(() => {
    if (!selectedTrendId || view !== 'trends') {
      return;
    }

    if (detailLoadedForId === selectedTrendId && trendDetail?.trend.id === selectedTrendId) {
      return;
    }

    void loadTrendDetail(selectedTrendId);
  }, [selectedTrendId, view, loadTrendDetail, detailLoadedForId, trendDetail?.trend.id]);

  async function handleAnalyze() {
    if (!config || !selectedTrendId) return;

    setAnalyzing(true);
    setError(null);

    try {
      const intelligence = await analyzeTrend(config, selectedTrendId);
      setTrendDetail((current) =>
        current ? { ...current, intelligence, trend: { ...current.trend, analyzed: true } } : current
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze trend.');
    } finally {
      setAnalyzing(false);
    }
  }

  async function handleGenerate() {
    if (!config || !selectedTrendId || !createQuestion.trim()) return;

    setGenerating(true);
    setError(null);
    setGeneratedContent(null);

    try {
      const result = await generateTrendContent(
        config,
        selectedTrendId,
        createQuestion,
        assetType
      );
      setGeneratedContent(result.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate content.');
    } finally {
      setGenerating(false);
    }
  }

  async function handleAsk() {
    if (!config || !askQuestion.trim()) return;

    setAsking(true);
    setError(null);
    setSelectedAskId(null);

    try {
      const result = await submitQuestion(config, askQuestion, {
        trendId: askTrendId ?? undefined,
        entitySlug: config.entitySlug,
      });
      setAskResult(result);
      setSelectedAskId(result.queryId);
      void loadAskHistory();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to ask question.');
      setAskResult(null);
    } finally {
      setAsking(false);
    }
  }

  async function handleSelectAskHistory(item: AskHistorySummary) {
    if (!config) return;

    setSelectedAskId(item.id);
    setAskQuestion(item.question);
    setError(null);

    if (!item.answeredAt) {
      setAskResult(null);
      return;
    }

    setLoadingAskDetail(true);

    try {
      const entry = await fetchAskById(config, item.id);
      setAskResult(entry.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load previous answer.');
      setAskResult(null);
    } finally {
      setLoadingAskDetail(false);
    }
  }

  function handleNewQuestion() {
    setSelectedAskId(null);
    setAskQuestion('');
    setAskResult(null);
    setAskTrendId(null);
    setError(null);
  }

  function handleSelectSource(item: SourceSummary) {
    setSelectedSourceId(item.id);
    setShowCreateSource(false);
    setError(null);
  }

  function handleSourceCreated(sourceId: string) {
    setShowCreateSource(false);
    setSelectedSourceId(sourceId);
    void loadSources();
  }

  function handleAskAboutTrend() {
    if (!trendDetail) return;
    setAskTrendId(trendDetail.trend.id);
    setAskQuestion(
      trendDetail.intelligence?.suggested_questions?.[0] ??
        `What should we communicate about ${trendDetail.trend.title}?`
    );
    setView('ask');
  }

  if (!config) {
    const missing = getOptionsDiagnostics(options);
    return (
      <div className="ch-intent-intelligence">
        <div className="ch-intent-intelligence__empty" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <div style={{ maxWidth: 520 }}>
            <p style={{ margin: '0 0 12px', fontWeight: 600 }}>
              Intent Intelligence is not configured yet.
            </p>
            {missing.length > 0 ? (
              <p style={{ margin: '0 0 12px' }}>
                Missing required option{missing.length === 1 ? '' : 's'}:{' '}
                <code>{missing.join(', ')}</code>
              </p>
            ) : null}
            <p style={{ margin: '0 0 12px' }}>
              If values are set in Content Hub, open the browser console and check{' '}
              <code>[CHIntentIntelligence] parsed options</code>. The option names must be exactly{' '}
              <code>apiBaseUrl</code> and <code>apiToken</code>.
            </p>
            <p style={{ margin: '0 0 12px' }}>
              Use separate static option bindings, or one JSON option named <code>config</code>.
            </p>
            <pre
              style={{
                margin: 0,
                padding: 12,
                borderRadius: 8,
                background: '#f4f4f5',
                fontSize: 12,
                lineHeight: 1.5,
                overflow: 'auto',
              }}
            >
{`{
  "apiBaseUrl": "https://your-intent-app.vercel.app",
  "apiToken": "same-as-INTENT_EMBED_API_SECRET"
}`}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ch-intent-intelligence">
      <header className="ch-intent-intelligence__header">
        <h1 className="ch-intent-intelligence__title">
          Intent Intelligence
          {trends.length > 0 ? (
            <span className="ch-intent-intelligence__trend-meta" style={{ marginLeft: 8 }}>
              ({trends.length} trend{trends.length === 1 ? '' : 's'})
            </span>
          ) : null}
        </h1>
        <div className="ch-intent-intelligence__tabs">
          <button
            type="button"
            className={`ch-intent-intelligence__tab${
              view === 'trends' ? ' ch-intent-intelligence__tab--active' : ''
            }`}
            onClick={() => setView('trends')}
          >
            Trends
          </button>
          <button
            type="button"
            className={`ch-intent-intelligence__tab${
              view === 'ask' ? ' ch-intent-intelligence__tab--active' : ''
            }`}
            onClick={() => setView('ask')}
          >
            Ask
          </button>
          <button
            type="button"
            className={`ch-intent-intelligence__tab${
              view === 'sources' ? ' ch-intent-intelligence__tab--active' : ''
            }`}
            onClick={() => setView('sources')}
          >
            Sources
          </button>
        </div>
      </header>

      {view === 'sources' ? (
        <div className="ch-intent-intelligence__body">
          <SourcesSidebar
            items={sources}
            selectedId={selectedSourceId}
            loading={loadingSources}
            onSelect={handleSelectSource}
            onAdd={() => {
              setShowCreateSource(true);
              setSelectedSourceId(null);
              setError(null);
            }}
            onRefresh={() => void loadSources()}
          />

          <main className="ch-intent-intelligence__main">
            {showCreateSource && config ? (
              <CreateSourceForm
                config={config}
                onCreated={handleSourceCreated}
                onCancel={() => setShowCreateSource(false)}
              />
            ) : selectedSourceId && config ? (
              <SourceDetailView
                config={config}
                sourceId={selectedSourceId}
                onSourceUpdated={() => void loadSources()}
              />
            ) : (
              <div className="ch-intent-intelligence__empty">
                Select a source from the list or add a new website to crawl.
              </div>
            )}
            {error && view === 'sources' ? (
              <p className="ch-intent-intelligence__error">{error}</p>
            ) : null}
          </main>
        </div>
      ) : view === 'trends' ? (
        <div className="ch-intent-intelligence__body">
          <aside className="ch-intent-intelligence__sidebar">
            <div className="ch-intent-intelligence__search">
              <input
                type="search"
                placeholder="Search trends…"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    void loadTrends();
                  }
                }}
                style={{
                  width: '100%',
                  border: '1px solid #e4e4e7',
                  borderRadius: 8,
                  padding: '8px 12px',
                  fontSize: 13,
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div className="ch-intent-intelligence__trend-list">
              {loadingTrends && trends.length === 0 ? (
                <LoadingState active={false} label="Loading trends…" />
              ) : trends.length === 0 ? (
                <div className="ch-intent-intelligence__empty">No trends found.</div>
              ) : (
                trends.map((trend) => (
                  <TrendListItem
                    key={trend.id}
                    trend={trend}
                    selected={trend.id === selectedTrendId}
                    onSelect={() => setSelectedTrendId(trend.id)}
                  />
                ))
              )}
            </div>
          </aside>

          <main className="ch-intent-intelligence__main">
            {loadingDetail && !trendDetail ? (
              <LoadingState active={false} label="Loading trend…" />
            ) : trendDetail ? (
              <TrendDetailPanel
                detail={trendDetail}
                loading={loadingDetail}
                analyzing={analyzing}
                generating={generating}
                error={error}
                question={createQuestion}
                assetType={assetType}
                generatedContent={generatedContent}
                onAnalyze={() => void handleAnalyze()}
                onQuestionChange={setCreateQuestion}
                onAssetTypeChange={setAssetType}
                onGenerate={() => void handleGenerate()}
                onAskAboutTrend={handleAskAboutTrend}
              />
            ) : (
              <div className="ch-intent-intelligence__empty">Select a trend to view details.</div>
            )}
          </main>
        </div>
      ) : (
        <div className="ch-intent-intelligence__body">
          <AskHistorySidebar
            items={askHistory}
            selectedId={selectedAskId}
            loading={loadingAskHistory}
            onSelect={(item) => void handleSelectAskHistory(item)}
            onRefresh={() => void loadAskHistory()}
          />

          <main className="ch-intent-intelligence__main">
            {askTrendId && trendDetail?.trend.id === askTrendId ? (
              <div className="ch-intent-intelligence__panel">
                <h3 className="ch-intent-intelligence__panel-title">Trend context</h3>
                <p style={{ margin: 0, fontWeight: 600 }}>{trendDetail.trend.title}</p>
                <button
                  type="button"
                  className="ch-intent-intelligence__button ch-intent-intelligence__button--secondary"
                  style={{ marginTop: 8 }}
                  onClick={() => setAskTrendId(null)}
                >
                  Clear trend context
                </button>
              </div>
            ) : null}

            <div className="ch-intent-intelligence__panel">
              <div className="ch-intent-intelligence__ask-toolbar">
                <h3 className="ch-intent-intelligence__panel-title">Your question</h3>
                <button
                  type="button"
                  className="ch-intent-intelligence__button ch-intent-intelligence__button--secondary"
                  onClick={handleNewQuestion}
                >
                  New question
                </button>
              </div>
              <textarea
                className="ch-intent-intelligence__textarea"
                value={askQuestion}
                onChange={(event) => setAskQuestion(event.target.value)}
                placeholder="Ask about trends, entities, competitors, or signals…"
                disabled={asking}
              />
              <div className="ch-intent-intelligence__actions">
                <button
                  type="button"
                  className="ch-intent-intelligence__button ch-intent-intelligence__button--primary"
                  disabled={asking || !askQuestion.trim()}
                  onClick={() => void handleAsk()}
                >
                  {asking ? <InlineSpinner label="Asking…" /> : 'Ask'}
                </button>
              </div>
              {error ? <p className="ch-intent-intelligence__error">{error}</p> : null}
            </div>

            {asking ? (
              <LoadingState active className="ch-intent-intelligence__loading-panel" />
            ) : loadingAskDetail ? (
              <LoadingState active={false} label="Loading previous answer…" className="ch-intent-intelligence__loading-panel" />
            ) : askResult ? (
              <AskResultPanel result={askResult} />
            ) : (
              <div className="ch-intent-intelligence__empty">
                Submit a question or pick one from the history on the left.
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
};

export default IntentIntelligencePanel;
