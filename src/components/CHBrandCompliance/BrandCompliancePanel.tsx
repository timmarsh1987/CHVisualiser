/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { resolveAssetContext } from './assetContext';
import { analyzeBrandCompliance } from './api';
import { LoadingState } from './LoadingState';
import { getOptionsDiagnostics } from './options';
import type {
  BrandComplianceAsset,
  BrandComplianceOptions,
  ComplianceIssue,
  ComplianceReport,
} from './types';
import './index.css';

interface BrandCompliancePanelProps {
  client?: any;
  entity?: any;
  options?: Partial<BrandComplianceOptions>;
}

function resolveOptions(
  options: Partial<BrandComplianceOptions> | undefined
): BrandComplianceOptions | null {
  const apiBaseUrl = options?.apiBaseUrl?.trim();
  const apiToken = options?.apiToken?.trim();

  if (!apiBaseUrl || !apiToken) {
    return null;
  }

  return {
    apiBaseUrl,
    apiToken,
    brandName: options?.brandName?.trim() || 'Cytiva',
    brandGuidelines: options?.brandGuidelines?.trim(),
    nameProperty: options?.nameProperty?.trim(),
    fileNameProperty: options?.fileNameProperty?.trim(),
    descriptionProperty: options?.descriptionProperty?.trim(),
    metadataProperties: options?.metadataProperties?.trim(),
  };
}

function formatDate(value: string) {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function statusLabel(status: ComplianceReport['status']) {
  switch (status) {
    case 'pass':
      return 'Compliant';
    case 'warning':
      return 'Needs review';
    case 'fail':
      return 'Non-compliant';
    default:
      return status;
  }
}

function severityLabel(severity: ComplianceIssue['severity']) {
  switch (severity) {
    case 'critical':
      return 'Critical';
    case 'major':
      return 'Major';
    case 'minor':
      return 'Minor';
    default:
      return severity;
  }
}

function ScoreRing({ score, status }: { score: number; status: ComplianceReport['status'] }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(100, score));
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={`ch-brand-compliance__score ch-brand-compliance__score--${status}`}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className="ch-brand-compliance__score-track" cx="50" cy="50" r={radius} />
        <circle
          className="ch-brand-compliance__score-progress"
          cx="50"
          cy="50"
          r={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="ch-brand-compliance__score-value">
        <strong>{Math.round(score)}</strong>
        <span>score</span>
      </div>
    </div>
  );
}

function IssueCard({ issue }: { issue: ComplianceIssue }) {
  return (
    <article className={`ch-brand-compliance__issue ch-brand-compliance__issue--${issue.severity}`}>
      <div className="ch-brand-compliance__issue-header">
        <span className="ch-brand-compliance__badge">{severityLabel(issue.severity)}</span>
        <span className="ch-brand-compliance__badge ch-brand-compliance__badge--muted">
          {issue.category}
        </span>
      </div>
      <h4 className="ch-brand-compliance__issue-title">{issue.title}</h4>
      <p className="ch-brand-compliance__issue-copy">{issue.description}</p>
      {issue.recommendation ? (
        <p className="ch-brand-compliance__issue-recommendation">
          <strong>Recommendation:</strong> {issue.recommendation}
        </p>
      ) : null}
    </article>
  );
}

export default function BrandCompliancePanel({
  client,
  entity,
  options,
}: BrandCompliancePanelProps) {
  const resolvedOptions = useMemo(() => resolveOptions(options), [options]);
  const missingOptions = useMemo(() => getOptionsDiagnostics(options), [options]);

  const [asset, setAsset] = useState<BrandComplianceAsset | null>(null);
  const [assetLoading, setAssetLoading] = useState(false);
  const [assetError, setAssetError] = useState<string | null>(null);

  const [report, setReport] = useState<ComplianceReport | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  useEffect(() => {
    if (!resolvedOptions) {
      setAsset(null);
      return undefined;
    }

    let cancelled = false;

    const loadAsset = async () => {
      setAssetLoading(true);
      setAssetError(null);

      try {
        const nextAsset = await resolveAssetContext(client, entity, resolvedOptions);
        if (!cancelled) {
          setAsset(nextAsset);
          if (!nextAsset) {
            setAssetError('No asset entity found on this page.');
          }
        }
      } catch (error) {
        if (!cancelled) {
          setAsset(null);
          setAssetError(
            error instanceof Error ? error.message : 'Could not load asset context.'
          );
        }
      } finally {
        if (!cancelled) {
          setAssetLoading(false);
        }
      }
    };

    void loadAsset();

    return () => {
      cancelled = true;
    };
  }, [client, entity, resolvedOptions]);

  const runAnalysis = useCallback(async () => {
    if (!resolvedOptions || !asset) {
      return;
    }

    setAnalyzing(true);
    setAnalysisError(null);

    try {
      const nextReport = await analyzeBrandCompliance(resolvedOptions, {
        asset,
        options: {
          brandName: resolvedOptions.brandName,
          brandGuidelines: resolvedOptions.brandGuidelines,
        },
      });
      setReport(nextReport);
    } catch (error) {
      setAnalysisError(
        error instanceof Error ? error.message : 'Brand compliance analysis failed.'
      );
    } finally {
      setAnalyzing(false);
    }
  }, [asset, resolvedOptions]);

  if (!resolvedOptions) {
    return (
      <div className="ch-brand-compliance">
        <header className="ch-brand-compliance__header">
          <div>
            <p className="ch-brand-compliance__eyebrow">Cytiva DAM</p>
            <h2 className="ch-brand-compliance__title">Brand Compliance Manager</h2>
          </div>
        </header>
        <div className="ch-brand-compliance__body">
          <div className="ch-brand-compliance__empty">
            <h3>Configuration required</h3>
            <p>
              Add <code>apiBaseUrl</code> and <code>apiToken</code> to the component config in
              Content Hub.
            </p>
            {missingOptions.length > 0 ? (
              <p className="ch-brand-compliance__hint">Missing: {missingOptions.join(', ')}</p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ch-brand-compliance">
      <header className="ch-brand-compliance__header">
        <div>
          <p className="ch-brand-compliance__eyebrow">{resolvedOptions.brandName} DAM</p>
          <h2 className="ch-brand-compliance__title">Brand Compliance Manager</h2>
        </div>
        <button
          type="button"
          className="ch-brand-compliance__primary-button"
          onClick={() => void runAnalysis()}
          disabled={!asset || analyzing || assetLoading}
        >
          {analyzing ? 'Analyzing…' : 'Run compliance check'}
        </button>
      </header>

      <div className="ch-brand-compliance__body">
        <section className="ch-brand-compliance__column ch-brand-compliance__column--results">
          {assetLoading ? <LoadingState active label="Loading…" /> : null}

          {!assetLoading && assetError ? (
            <div className="ch-brand-compliance__empty ch-brand-compliance__empty--error">
              <h3>Asset unavailable</h3>
              <p>{assetError}</p>
            </div>
          ) : null}

          {!assetLoading && !assetError && analyzing ? (
            <LoadingState active label="Analyzing…" />
          ) : null}

          {!assetLoading && !assetError && !analyzing && analysisError ? (
            <div className="ch-brand-compliance__empty ch-brand-compliance__empty--error">
              <h3>Analysis failed</h3>
              <p>{analysisError}</p>
            </div>
          ) : null}

          {!assetLoading && !assetError && !analyzing && !analysisError && !report ? (
            <div className="ch-brand-compliance__empty">
              <h3>Ready to review</h3>
              <p>Click <strong>Run compliance check</strong> to analyze this asset.</p>
            </div>
          ) : null}

          {!analyzing && report ? (
            <div className="ch-brand-compliance__report">
              <div className="ch-brand-compliance__report-header">
                <ScoreRing score={report.score} status={report.status} />
                <div className="ch-brand-compliance__report-copy">
                  <span
                    className={`ch-brand-compliance__status ch-brand-compliance__status--${report.status}`}
                  >
                    {statusLabel(report.status)}
                  </span>
                  <p className="ch-brand-compliance__report-summary">{report.summary}</p>
                  <p className="ch-brand-compliance__report-meta">
                    Analyzed {formatDate(report.analyzedAt)}
                    {report.imageAttached
                      ? ' · Visual review included'
                      : report.imageUploadError
                        ? ' · Metadata only (image unavailable)'
                        : ''}
                  </p>
                </div>
              </div>

              {report.passedChecks.length > 0 ? (
                <div className="ch-brand-compliance__panel">
                  <h3 className="ch-brand-compliance__panel-title">Passed checks</h3>
                  <ul className="ch-brand-compliance__passed-list">
                    {report.passedChecks.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="ch-brand-compliance__panel">
                <h3 className="ch-brand-compliance__panel-title">
                  Issues ({report.issues.length})
                </h3>
                {report.issues.length === 0 ? (
                  <p className="ch-brand-compliance__hint">No issues reported.</p>
                ) : (
                  <div className="ch-brand-compliance__issue-list">
                    {report.issues.map((issue) => (
                      <IssueCard key={issue.id} issue={issue} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
