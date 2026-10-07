/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { resolveAssetContext } from './assetContext';
import { analyzeImageDetection } from './api';
import { loadSavedDetectionReport, saveDetectionReportToEntity } from './entityDetection';
import { LoadingState } from './LoadingState';
import {
  defaultDetectionSelection,
  getOptionsDiagnostics,
  isClearlyNonImageAsset,
  selectedCheckIds,
} from './options';
import {
  DETECTION_CHECKS,
  type DetectionCheckId,
  type DetectionFinding,
  type DetectionSelection,
  type ImageDetectionAsset,
  type ImageDetectionOptions,
  type ImageDetectionReport,
} from './types';
import './index.css';

const DEFAULT_REPORT_PROPERTY = 'ImageDetectionReport';

interface ImageDetectionPanelProps {
  client?: any;
  entity?: any;
  options?: Partial<ImageDetectionOptions>;
}

function resolveOptions(
  options: Partial<ImageDetectionOptions> | undefined
): ImageDetectionOptions | null {
  const apiBaseUrl = options?.apiBaseUrl?.trim();
  const apiToken = options?.apiToken?.trim();

  if (!apiBaseUrl || !apiToken) {
    return null;
  }

  return {
    apiBaseUrl,
    apiToken,
    detectMinors: options?.detectMinors,
    detectAnimals: options?.detectAnimals,
    detectCulturalSensitive: options?.detectCulturalSensitive,
    detectFirearmsOffensive: options?.detectFirearmsOffensive,
    detectWhatYouSee: options?.detectWhatYouSee,
    detectMedical: options?.detectMedical,
    detectLogos: options?.detectLogos,
    detectNudityGraphic: options?.detectNudityGraphic,
    showOverlay: options?.showOverlay !== false,
    nameProperty: options?.nameProperty?.trim(),
    fileNameProperty: options?.fileNameProperty?.trim(),
    descriptionProperty: options?.descriptionProperty?.trim(),
    metadataProperties: options?.metadataProperties?.trim(),
    detectionReportProperty: options?.detectionReportProperty?.trim() || DEFAULT_REPORT_PROPERTY,
    detectionReportStorage: options?.detectionReportStorage?.trim() === 'string' ? 'string' : 'json',
    detectionStatusProperty: options?.detectionStatusProperty?.trim(),
    detectionAnalyzedAtProperty: options?.detectionAnalyzedAtProperty?.trim(),
  };
}

function formatDate(value: string) {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function isDescribeFinding(finding: DetectionFinding) {
  return DETECTION_CHECKS.find((check) => check.id === finding.id)?.kind === 'describe';
}

function reportHasFlagCheck(report: ImageDetectionReport) {
  return report.findings.some((finding) => !isDescribeFinding(finding));
}

function statusLabel(report: ImageDetectionReport) {
  if (!reportHasFlagCheck(report)) {
    return 'Reviewed';
  }
  return report.status === 'flagged' ? 'Flagged' : 'Clear';
}

function statusClass(report: ImageDetectionReport) {
  if (!reportHasFlagCheck(report)) {
    return 'reviewed';
  }
  return report.status;
}

type PillTone = 'clear' | 'flagged' | 'unchecked' | 'describe';

function pillTone(checkId: DetectionCheckId, report: ImageDetectionReport): PillTone {
  if (!report.checksRun.includes(checkId)) {
    return 'unchecked';
  }

  const definition = DETECTION_CHECKS.find((check) => check.id === checkId);
  if (definition?.kind === 'describe') {
    return 'describe';
  }

  const finding = report.findings.find((entry) => entry.id === checkId);
  return finding?.detected ? 'flagged' : 'clear';
}

function pillLabel(tone: PillTone) {
  switch (tone) {
    case 'flagged':
      return 'Detected';
    case 'clear':
      return 'Clear';
    case 'describe':
      return 'Described';
    default:
      return 'Not checked';
  }
}

function FindingCard({
  finding,
  highlighted,
}: {
  finding: DetectionFinding;
  highlighted: boolean;
}) {
  if (isDescribeFinding(finding)) {
    return (
      <article
        id={`ch-id-finding-${finding.id}`}
        className={`ch-image-detection__finding ch-image-detection__finding--describe${
          highlighted ? ' ch-image-detection__finding--highlight' : ''
        }`}
      >
        <div className="ch-image-detection__finding-header">
          <h4 className="ch-image-detection__finding-title">{finding.label}</h4>
          <span className="ch-image-detection__badge ch-image-detection__badge--muted">
            Description
          </span>
        </div>
        {finding.summary ? (
          <p className="ch-image-detection__finding-copy">{finding.summary}</p>
        ) : null}
      </article>
    );
  }

  return (
    <article
      id={`ch-id-finding-${finding.id}`}
      className={`ch-image-detection__finding ch-image-detection__finding--${
        finding.detected ? 'flagged' : 'clear'
      }${highlighted ? ' ch-image-detection__finding--highlight' : ''}`}
    >
      <div className="ch-image-detection__finding-header">
        <h4 className="ch-image-detection__finding-title">{finding.label}</h4>
        <span
          className={`ch-image-detection__badge ${
            finding.detected ? '' : 'ch-image-detection__badge--clear'
          }`}
        >
          {finding.detected ? 'Detected' : 'Not detected'}
        </span>
        <span className="ch-image-detection__badge ch-image-detection__badge--muted">
          {Math.round(finding.confidence)}% confidence
        </span>
      </div>
      {finding.summary ? <p className="ch-image-detection__finding-copy">{finding.summary}</p> : null}
    </article>
  );
}

export default function ImageDetectionPanel({ client, entity, options }: ImageDetectionPanelProps) {
  const resolvedOptions = useMemo(() => resolveOptions(options), [options]);
  const missingOptions = useMemo(() => getOptionsDiagnostics(options), [options]);

  const [asset, setAsset] = useState<ImageDetectionAsset | null>(null);
  const [assetLoading, setAssetLoading] = useState(false);
  const [assetError, setAssetError] = useState<string | null>(null);

  const [report, setReport] = useState<ImageDetectionReport | null>(null);
  const [reportSource, setReportSource] = useState<'saved' | 'fresh' | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveError, setSaveError] = useState<string | null>(null);
  const [selection, setSelection] = useState<DetectionSelection>(() =>
    defaultDetectionSelection(options)
  );
  const [checksOpen, setChecksOpen] = useState(false);
  const [findingsOpen, setFindingsOpen] = useState(false);
  const [overlayOn, setOverlayOn] = useState(true);
  const [highlightedId, setHighlightedId] = useState<DetectionCheckId | null>(null);

  const defaultSelectionKey = DETECTION_CHECKS.map(
    (check) => `${check.id}:${String((resolvedOptions ?? options)?.[check.optionKey])}`
  ).join('|');

  useEffect(() => {
    setSelection(defaultDetectionSelection(resolvedOptions ?? options));
  }, [defaultSelectionKey]);

  useEffect(() => {
    setOverlayOn(resolvedOptions?.showOverlay !== false);
  }, [resolvedOptions?.showOverlay]);

  useEffect(() => {
    if (!resolvedOptions) {
      setAsset(null);
      setReport(null);
      setReportSource(null);
      return undefined;
    }

    let cancelled = false;

    const loadAsset = async () => {
      setAssetLoading(true);
      setAssetError(null);
      setSaveState('idle');
      setSaveError(null);

      try {
        const nextAsset = await resolveAssetContext(client, entity, resolvedOptions);
        if (cancelled) {
          return;
        }

        setAsset(nextAsset);
        if (!nextAsset) {
          setAssetError('No asset entity found on this page.');
          setReport(null);
          setReportSource(null);
          return;
        }

        const saved = await loadSavedDetectionReport(
          client,
          entity,
          resolvedOptions.detectionReportProperty || DEFAULT_REPORT_PROPERTY
        );

        if (cancelled) {
          return;
        }

        if (saved) {
          setReport(saved);
          setReportSource('saved');
          if (saved.checksRun.length > 0) {
            setSelection((current) => {
              const next = { ...current };
              for (const check of DETECTION_CHECKS) {
                next[check.id] = saved.checksRun.includes(check.id);
              }
              return next;
            });
          }
        } else {
          setReport(null);
          setReportSource(null);
        }
      } catch (error) {
        if (!cancelled) {
          setAsset(null);
          setReport(null);
          setReportSource(null);
          setAssetError(error instanceof Error ? error.message : 'Could not load asset context.');
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

  const checks = useMemo(() => selectedCheckIds(selection), [selection]);
  const allChecked = DETECTION_CHECKS.every((check) => selection[check.id]);
  const nonImage = asset ? isClearlyNonImageAsset(asset) : false;

  const toggleAll = () => {
    const next = !allChecked;
    const updated = {} as DetectionSelection;
    for (const check of DETECTION_CHECKS) {
      updated[check.id] = next;
    }
    setSelection(updated);
  };

  const toggleCheck = (id: DetectionCheckId) => {
    setSelection((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  const runAnalysis = useCallback(async () => {
    if (!resolvedOptions || !asset || checks.length === 0 || isClearlyNonImageAsset(asset)) {
      return;
    }

    setAnalyzing(true);
    setAnalysisError(null);
    setSaveState('idle');
    setSaveError(null);

    try {
      const nextReport = await analyzeImageDetection(resolvedOptions, {
        asset,
        checks,
      });

      setReport(nextReport);
      setReportSource('fresh');

      setSaveState('saving');
      try {
        await saveDetectionReportToEntity(client, asset.id, nextReport, {
          reportProperty: resolvedOptions.detectionReportProperty || DEFAULT_REPORT_PROPERTY,
          reportStorage: resolvedOptions.detectionReportStorage,
          statusProperty: resolvedOptions.detectionStatusProperty,
          analyzedAtProperty: resolvedOptions.detectionAnalyzedAtProperty,
          definitionName: asset.definition,
        });
        setSaveState('saved');
      } catch (error) {
        setSaveState('error');
        setSaveError(
          error instanceof Error
            ? error.message
            : 'Could not save detection report to Content Hub.'
        );
      }
    } catch (error) {
      setAnalysisError(error instanceof Error ? error.message : 'Image detection failed.');
    } finally {
      setAnalyzing(false);
    }
  }, [asset, checks, client, resolvedOptions]);

  if (!resolvedOptions) {
    return (
      <div className="ch-image-detection">
        <header className="ch-image-detection__header">
          <div>
            <p className="ch-image-detection__eyebrow">Content Hub</p>
            <h2 className="ch-image-detection__title">Image detection</h2>
          </div>
        </header>
        <div className="ch-image-detection__body">
          <div className="ch-image-detection__empty">
            <h3>Configuration required</h3>
            <p>
              Add <code>apiBaseUrl</code> and <code>apiToken</code> to the component config in
              Content Hub.
            </p>
            {missingOptions.length > 0 ? (
              <p className="ch-image-detection__hint">Missing: {missingOptions.join(', ')}</p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ch-image-detection">
      <header className="ch-image-detection__header">
        <div>
          <p className="ch-image-detection__eyebrow">Content Hub</p>
          <h2 className="ch-image-detection__title">Image detection</h2>
        </div>

        <details
          className="ch-image-detection__disclosure"
          open={checksOpen}
          onToggle={(event) => setChecksOpen(event.currentTarget.open)}
        >
          <summary className="ch-image-detection__summary">
            Checks
            <span>{checks.length} selected</span>
          </summary>
          <fieldset className="ch-image-detection__checks" disabled={analyzing || assetLoading}>
            <label className="ch-image-detection__check ch-image-detection__check--all">
              <input type="checkbox" checked={allChecked} onChange={toggleAll} />
              <span>All</span>
            </label>
            {DETECTION_CHECKS.map((check) => (
              <label key={check.id} className="ch-image-detection__check">
                <input
                  type="checkbox"
                  checked={selection[check.id]}
                  onChange={() => toggleCheck(check.id)}
                />
                <span>
                  {check.label}
                  <small>{check.description}</small>
                </span>
              </label>
            ))}
          </fieldset>
        </details>

        <button
          type="button"
          className="ch-image-detection__primary-button"
          onClick={() => void runAnalysis()}
          disabled={!asset || analyzing || assetLoading || checks.length === 0 || nonImage}
        >
          {analyzing ? 'Analyzing…' : report ? 'Re-run detection' : 'Analyze image'}
        </button>
        {checks.length === 0 ? (
          <p className="ch-image-detection__hint">Select at least one check.</p>
        ) : null}
      </header>

      <div className="ch-image-detection__body">
        <section className="ch-image-detection__column">
          {asset && !assetLoading && !nonImage && (asset.previewUrl || asset.fileUrl) ? (
            <figure className="ch-image-detection__figure">
              <div className="ch-image-detection__frame">
                <img src={asset.previewUrl || asset.fileUrl} alt={asset.name} />
                {overlayOn && resolvedOptions.showOverlay !== false && report
                  ? report.findings.flatMap((finding) =>
                      finding.detected
                        ? (finding.regions ?? []).map((region, index) => (
                            <span
                              key={`${finding.id}-${index}`}
                              className="ch-image-detection__mark"
                              style={{
                                left: `${region.x}%`,
                                top: `${region.y}%`,
                                width: `${region.width}%`,
                                height: `${region.height}%`,
                              }}
                            >
                              <span className="ch-image-detection__mark-label">
                                {DETECTION_CHECKS.find((check) => check.id === finding.id)
                                  ?.shortLabel ?? finding.label}
                              </span>
                            </span>
                          ))
                        : []
                    )
                  : null}
              </div>
              <figcaption className="ch-image-detection__caption">{asset.name}</figcaption>
              {report && resolvedOptions.showOverlay !== false ? (
                <label className="ch-image-detection__overlay-toggle">
                  <input
                    type="checkbox"
                    checked={overlayOn}
                    onChange={(event) => setOverlayOn(event.target.checked)}
                  />
                  Show marks on image
                </label>
              ) : null}
              {report && overlayOn && resolvedOptions.showOverlay !== false ? (
                <p className="ch-image-detection__hint">
                  {report.findings.some((finding) => (finding.regions?.length ?? 0) > 0)
                    ? 'Marks are approximate.'
                    : 'No location marks for this result.'}
                </p>
              ) : null}
            </figure>
          ) : null}

          {assetLoading ? <LoadingState active label="Loading…" /> : null}

          {!assetLoading && assetError ? (
            <div className="ch-image-detection__empty ch-image-detection__empty--error">
              <h3>Asset unavailable</h3>
              <p>{assetError}</p>
            </div>
          ) : null}

          {!assetLoading && !assetError && nonImage ? (
            <div className="ch-image-detection__empty ch-image-detection__empty--error">
              <h3>Image required</h3>
              <p>Image detection runs on image assets. This file is not an image.</p>
            </div>
          ) : null}

          {!assetLoading && !assetError && !nonImage && analyzing ? (
            <LoadingState active label="Analyzing…" />
          ) : null}

          {!assetLoading && !assetError && !nonImage && !analyzing && analysisError ? (
            <div className="ch-image-detection__empty ch-image-detection__empty--error">
              <h3>Analysis failed</h3>
              <p>{analysisError}</p>
            </div>
          ) : null}

          {!assetLoading && !assetError && !nonImage && !analyzing && !analysisError && !report ? (
            <div className="ch-image-detection__empty">
              <h3>Ready to analyze</h3>
              <p>
                Choose the checks above, then click <strong>Analyze image</strong>.
              </p>
            </div>
          ) : null}

          {!analyzing && !nonImage && report ? (
            <div className="ch-image-detection__report">
              <div className="ch-image-detection__report-header">
                <span
                  className={`ch-image-detection__status ch-image-detection__status--${statusClass(report)}`}
                >
                  {statusLabel(report)}
                </span>
                <p className="ch-image-detection__report-summary">{report.summary}</p>
                <p className="ch-image-detection__report-meta">
                  {reportSource === 'saved' ? 'Saved result · ' : ''}
                  Analyzed {formatDate(report.analyzedAt)}
                  {report.imageAttached
                    ? ' · Visual review included'
                    : report.imageUploadError
                      ? ' · Image unavailable'
                      : ''}
                </p>
                {saveState === 'saving' ? (
                  <p className="ch-image-detection__report-meta">Saving to Content Hub…</p>
                ) : null}
                {saveState === 'saved' ? (
                  <p className="ch-image-detection__report-meta ch-image-detection__report-meta--ok">
                    Saved to asset
                  </p>
                ) : null}
                {saveState === 'error' && saveError ? (
                  <p className="ch-image-detection__report-meta ch-image-detection__report-meta--error">
                    Analysis succeeded, but save failed: {saveError}
                  </p>
                ) : null}
              </div>

              <div className="ch-image-detection__pills" role="list" aria-label="Check results">
                {DETECTION_CHECKS.map((check) => {
                  const tone = pillTone(check.id, report);
                  return (
                    <button
                      key={check.id}
                      type="button"
                      role="listitem"
                      className={`ch-image-detection__pill ch-image-detection__pill--${tone}${
                        highlightedId === check.id ? ' ch-image-detection__pill--active' : ''
                      }`}
                      aria-label={`${check.shortLabel}, ${pillLabel(tone)}`}
                      onClick={() => {
                        setHighlightedId(check.id);
                        setFindingsOpen(true);
                        window.setTimeout(() => {
                          document
                            .getElementById(`ch-id-finding-${check.id}`)
                            ?.scrollIntoView({ block: 'nearest' });
                        }, 0);
                      }}
                    >
                      {check.shortLabel}
                    </button>
                  );
                })}
              </div>

              <details
                className="ch-image-detection__disclosure"
                open={findingsOpen}
                onToggle={(event) => setFindingsOpen(event.currentTarget.open)}
              >
                <summary className="ch-image-detection__summary">
                  Findings
                  <span>{report.findings.length}</span>
                </summary>
                <div className="ch-image-detection__finding-list">
                  {report.findings.map((finding) => (
                    <FindingCard
                      key={finding.id}
                      finding={finding}
                      highlighted={highlightedId === finding.id}
                    />
                  ))}
                </div>
              </details>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
