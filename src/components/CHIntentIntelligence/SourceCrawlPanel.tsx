import React, { useEffect, useRef, useState } from 'react';

import {
  cancelSourceCrawl,
  fetchCrawlStatus,
  startSourceCrawl,
  stepSourceCrawl,
} from './api';
import { InlineSpinner } from './LoadingState';
import type { CrawlJobStats, CrawlLogEntry, IntentIntelligenceOptions } from './types';

type SourceCrawlPanelProps = {
  config: IntentIntelligenceOptions;
  sourceId: string;
  onStepComplete?: () => void;
  onComplete?: () => void;
};

const statusStyles: Record<CrawlLogEntry['status'], string> = {
  queued: 'ch-intent-intelligence__log-status--queued',
  crawling: 'ch-intent-intelligence__log-status--crawling',
  crawled: 'ch-intent-intelligence__log-status--crawled',
  skipped: 'ch-intent-intelligence__log-status--skipped',
  failed: 'ch-intent-intelligence__log-status--failed',
  completed: 'ch-intent-intelligence__log-status--completed',
  cancelled: 'ch-intent-intelligence__log-status--cancelled',
};

function formatLogTime(value: string) {
  return new Date(value).toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

export function SourceCrawlPanel({
  config,
  sourceId,
  onStepComplete,
  onComplete,
}: SourceCrawlPanelProps) {
  const logRef = useRef<HTMLDivElement>(null);
  const cancelledRef = useRef(false);
  const [running, setRunning] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const [stats, setStats] = useState<CrawlJobStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [stats?.log?.length]);

  useEffect(() => {
    void (async () => {
      try {
        const job = await fetchCrawlStatus(config, sourceId);

        if (
          job &&
          (job.status === 'queued' || job.status === 'running') &&
          job.stats
        ) {
          setJobId(job.id);
          setStats(job.stats);
        }
      } catch {
        // Ignore initial status errors; user can start manually.
      }
    })();
  }, [config, sourceId]);

  async function handleCancel() {
    if (!running) {
      return;
    }

    cancelledRef.current = true;

    try {
      const result = await cancelSourceCrawl(config, sourceId, jobId ?? undefined);

      if (result.stats) {
        setStats(result.stats);
      }

      setCancelled(true);
      setRunning(false);
      onComplete?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to cancel crawl.');
    }
  }

  async function runCrawl(existingJobId?: string) {
    cancelledRef.current = false;
    setCancelled(false);
    setRunning(true);
    setError(null);

    try {
      let activeJobId = existingJobId ?? jobId ?? undefined;

      if (!activeJobId) {
        const start = await startSourceCrawl(config, sourceId);

        if (cancelledRef.current) {
          return;
        }

        activeJobId = start.jobId;
        setJobId(activeJobId);

        if (start.done) {
          const status = await fetchCrawlStatus(config, sourceId);

          if (status?.stats) {
            setStats(status.stats);
          }

          setRunning(false);
          onComplete?.();
          return;
        }
      }

      let done = false;

      while (!done && !cancelledRef.current) {
        const step = await stepSourceCrawl(config, sourceId, activeJobId);

        if (cancelledRef.current) {
          break;
        }

        if (step.stats) {
          setStats(step.stats);
        }

        onStepComplete?.();

        if (step.cancelled) {
          setCancelled(true);
          done = true;
          break;
        }

        done = step.done;
      }

      onComplete?.();
    } catch (crawlError) {
      if (!cancelledRef.current) {
        setError(
          crawlError instanceof Error ? crawlError.message : 'Crawl failed unexpectedly.'
        );
      }
    } finally {
      setRunning(false);
    }
  }

  const total = stats?.urls.length ?? 0;
  const processed = stats?.processed ?? 0;
  const progress = total > 0 ? Math.round((processed / total) * 100) : 0;

  return (
    <div className="ch-intent-intelligence__panel">
      <div className="ch-intent-intelligence__ask-toolbar">
        <div>
          <h3 className="ch-intent-intelligence__panel-title">Crawl</h3>
          <p className="ch-intent-intelligence__trend-meta" style={{ margin: '4px 0 0' }}>
            Discover and fetch pages from this website.
          </p>
        </div>
        <div className="ch-intent-intelligence__actions" style={{ margin: 0 }}>
          {running ? (
            <button
              type="button"
              className="ch-intent-intelligence__button ch-intent-intelligence__button--danger"
              onClick={() => void handleCancel()}
            >
              Cancel
            </button>
          ) : null}
          <button
            type="button"
            className="ch-intent-intelligence__button ch-intent-intelligence__button--primary"
            disabled={running}
            onClick={() => void runCrawl()}
          >
            {running ? <InlineSpinner label="Crawling…" /> : 'Crawl now'}
          </button>
        </div>
      </div>

      {stats ? (
        <div className="ch-intent-intelligence__stats-grid">
          {[
            { label: 'Progress', value: `${processed}/${total}` },
            { label: 'Crawled', value: String(stats.succeeded) },
            { label: 'Skipped', value: String(stats.skipped) },
            { label: 'Failed', value: String(stats.failed) },
          ].map((item) => (
            <div key={item.label} className="ch-intent-intelligence__stat">
              <p className="ch-intent-intelligence__trend-meta">{item.label}</p>
              <p className="ch-intent-intelligence__stat-value">{item.value}</p>
            </div>
          ))}
        </div>
      ) : null}

      {total > 0 ? (
        <div className="ch-intent-intelligence__progress">
          <div
            className="ch-intent-intelligence__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      ) : null}

      {cancelled ? (
        <p className="ch-intent-intelligence__notice">Crawl cancelled. Pages fetched so far were kept.</p>
      ) : null}

      {error ? <p className="ch-intent-intelligence__error">{error}</p> : null}

      <div ref={logRef} className="ch-intent-intelligence__crawl-log">
        {!stats?.log?.length ? (
          <p className="ch-intent-intelligence__trend-meta">No crawl output yet. Click Crawl now to start.</p>
        ) : (
          <ul className="ch-intent-intelligence__crawl-log-list">
            {stats.log.map((entry, index) => (
              <li key={`${entry.at}-${index}`}>
                <span className="ch-intent-intelligence__log-time">{formatLogTime(entry.at)}</span>{' '}
                <span className={`ch-intent-intelligence__log-status ${statusStyles[entry.status]}`}>
                  {entry.status}
                </span>{' '}
                <span>{entry.message}</span>
                {entry.url &&
                entry.status !== 'queued' &&
                entry.status !== 'completed' &&
                entry.status !== 'cancelled' ? (
                  <div className="ch-intent-intelligence__log-url">{entry.url}</div>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
