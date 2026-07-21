/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { resolveAssetContext } from './assetContext';
import { analyzeFineArtTagging } from './api';
import {
  readSavedFineArtTaggingReport,
  saveFineArtTaggingReportToEntity,
} from './entityTagging';
import { LoadingState } from './LoadingState';
import { getOptionsDiagnostics } from './options';
import type {
  FineArtAsset,
  FineArtTaggingOptions,
  FineArtTaggingReport,
  StyleMovementHypothesis,
  TagGroup,
} from './types';
import './index.css';

const DEFAULT_REPORT_PROPERTY = 'FineArtTaggingReport';

interface FineArtTaggingPanelProps {
  client?: any;
  entity?: any;
  options?: Partial<FineArtTaggingOptions>;
}

function resolveOptions(
  options: Partial<FineArtTaggingOptions> | undefined
): FineArtTaggingOptions | null {
  const apiBaseUrl = options?.apiBaseUrl?.trim();
  const apiToken = options?.apiToken?.trim();

  if (!apiBaseUrl || !apiToken) {
    return null;
  }

  return {
    apiBaseUrl,
    apiToken,
    displayName: options?.displayName?.trim() || 'Fine Art',
    nameProperty: options?.nameProperty?.trim(),
    fileNameProperty: options?.fileNameProperty?.trim(),
    descriptionProperty: options?.descriptionProperty?.trim(),
    metadataProperties: options?.metadataProperties?.trim(),
    taggingReportProperty:
      options?.taggingReportProperty?.trim() || DEFAULT_REPORT_PROPERTY,
    taggingReportStorage:
      options?.taggingReportStorage?.trim() === 'string' ? 'string' : 'json',
    mustHaveTagsProperty: options?.mustHaveTagsProperty?.trim(),
    niceToHaveTagsProperty: options?.niceToHaveTagsProperty?.trim(),
    taggingAnalyzedAtProperty: options?.taggingAnalyzedAtProperty?.trim(),
  };
}

function formatDate(value: string) {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function formatConfidence(confidence: number) {
  return `${Math.round(confidence * 100)}%`;
}

function TagList({ tags, variant }: { tags: string[]; variant?: 'must' | 'nice' }) {
  if (tags.length === 0) {
    return <p className="ch-fine-art-tagging__hint">None</p>;
  }

  return (
    <ul className="ch-fine-art-tagging__tag-list">
      {tags.map((tag) => (
        <li
          key={tag}
          className={
            variant
              ? `ch-fine-art-tagging__tag ch-fine-art-tagging__tag--${variant}`
              : 'ch-fine-art-tagging__tag'
          }
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function HypothesisCard({ hypothesis }: { hypothesis: StyleMovementHypothesis }) {
  return (
    <article className="ch-fine-art-tagging__hypothesis">
      <div className="ch-fine-art-tagging__hypothesis-header">
        <h4 className="ch-fine-art-tagging__hypothesis-label">{hypothesis.label}</h4>
        <span className="ch-fine-art-tagging__badge">
          {formatConfidence(hypothesis.confidence)}
        </span>
      </div>
      {hypothesis.evidence ? (
        <p className="ch-fine-art-tagging__hypothesis-evidence">{hypothesis.evidence}</p>
      ) : null}
    </article>
  );
}

function TagGroupCard({ name, group }: { name: string; group: TagGroup }) {
  return (
    <article className="ch-fine-art-tagging__group">
      <h4 className="ch-fine-art-tagging__group-title">{name}</h4>
      <TagList tags={group.tags} />
      {group.rationale ? (
        <p className="ch-fine-art-tagging__group-rationale">{group.rationale}</p>
      ) : null}
    </article>
  );
}

function AnalysisField({ label, value }: { label: string; value: string }) {
  if (!value) {
    return null;
  }

  return (
    <div className="ch-fine-art-tagging__analysis-field">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function FineArtTaggingPanel({
  client,
  entity,
  options,
}: FineArtTaggingPanelProps) {
  const resolvedOptions = useMemo(() => resolveOptions(options), [options]);
  const missingOptions = useMemo(() => getOptionsDiagnostics(options), [options]);

  const [asset, setAsset] = useState<FineArtAsset | null>(null);
  const [assetLoading, setAssetLoading] = useState(false);
  const [assetError, setAssetError] = useState<string | null>(null);

  const [report, setReport] = useState<FineArtTaggingReport | null>(null);
  const [reportSource, setReportSource] = useState<'saved' | 'fresh' | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveError, setSaveError] = useState<string | null>(null);

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

        const saved = readSavedFineArtTaggingReport(
          entity,
          resolvedOptions.taggingReportProperty || DEFAULT_REPORT_PROPERTY
        );

        if (saved) {
          setReport(saved);
          setReportSource('saved');
        } else {
          setReport(null);
          setReportSource(null);
        }
      } catch (error) {
        if (!cancelled) {
          setAsset(null);
          setReport(null);
          setReportSource(null);
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
    setSaveState('idle');
    setSaveError(null);

    try {
      const nextReport = await analyzeFineArtTagging(resolvedOptions, {
        asset,
        options: {
          displayName: resolvedOptions.displayName,
        },
      });

      setReport(nextReport);
      setReportSource('fresh');

      setSaveState('saving');
      try {
        await saveFineArtTaggingReportToEntity(client, asset.id, nextReport, {
          reportProperty:
            resolvedOptions.taggingReportProperty || DEFAULT_REPORT_PROPERTY,
          reportStorage: resolvedOptions.taggingReportStorage,
          mustHaveTagsProperty: resolvedOptions.mustHaveTagsProperty,
          niceToHaveTagsProperty: resolvedOptions.niceToHaveTagsProperty,
          analyzedAtProperty: resolvedOptions.taggingAnalyzedAtProperty,
          definitionName: asset.definition,
        });
        setSaveState('saved');
      } catch (error) {
        setSaveState('error');
        setSaveError(
          error instanceof Error
            ? error.message
            : 'Could not save tagging report to Content Hub.'
        );
      }
    } catch (error) {
      setAnalysisError(
        error instanceof Error ? error.message : 'Fine-art tagging analysis failed.'
      );
    } finally {
      setAnalyzing(false);
    }
  }, [asset, client, resolvedOptions]);

  const groupedEntries = useMemo(() => {
    if (!report) {
      return [];
    }
    return Object.entries(report.suggested_tags_grouped);
  }, [report]);

  if (!resolvedOptions) {
    return (
      <div className="ch-fine-art-tagging">
        <header className="ch-fine-art-tagging__header">
          <div>
            <p className="ch-fine-art-tagging__eyebrow">DAM</p>
            <h2 className="ch-fine-art-tagging__title">Fine Art Tagging Analyst</h2>
          </div>
        </header>
        <div className="ch-fine-art-tagging__body">
          <div className="ch-fine-art-tagging__empty">
            <h3>Configuration required</h3>
            <p>
              Add <code>apiBaseUrl</code> and <code>apiToken</code> to the component config in
              Content Hub.
            </p>
            {missingOptions.length > 0 ? (
              <p className="ch-fine-art-tagging__hint">Missing: {missingOptions.join(', ')}</p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ch-fine-art-tagging">
      <header className="ch-fine-art-tagging__header">
        <div>
          <p className="ch-fine-art-tagging__eyebrow">{resolvedOptions.displayName} DAM</p>
          <h2 className="ch-fine-art-tagging__title">Fine Art Tagging Analyst</h2>
        </div>
        <button
          type="button"
          className="ch-fine-art-tagging__primary-button"
          onClick={() => void runAnalysis()}
          disabled={!asset || analyzing || assetLoading}
        >
          {analyzing ? 'Analyzing…' : report ? 'Re-run tagging analysis' : 'Run tagging analysis'}
        </button>
      </header>

      <div className="ch-fine-art-tagging__body">
        <section className="ch-fine-art-tagging__column ch-fine-art-tagging__column--results">
          {assetLoading ? <LoadingState active label="Loading…" /> : null}

          {!assetLoading && assetError ? (
            <div className="ch-fine-art-tagging__empty ch-fine-art-tagging__empty--error">
              <h3>Asset unavailable</h3>
              <p>{assetError}</p>
            </div>
          ) : null}

          {!assetLoading && !assetError && analyzing ? (
            <LoadingState active label="Analyzing…" />
          ) : null}

          {!assetLoading && !assetError && !analyzing && analysisError ? (
            <div className="ch-fine-art-tagging__empty ch-fine-art-tagging__empty--error">
              <h3>Analysis failed</h3>
              <p>{analysisError}</p>
            </div>
          ) : null}

          {!assetLoading && !assetError && !analyzing && !analysisError && !report ? (
            <div className="ch-fine-art-tagging__empty">
              <h3>Ready to tag</h3>
              <p>
                Click <strong>Run tagging analysis</strong> to analyze this artwork.
              </p>
            </div>
          ) : null}

          {!analyzing && report ? (
            <div className="ch-fine-art-tagging__report">
              <div className="ch-fine-art-tagging__report-header">
                <div className="ch-fine-art-tagging__report-copy">
                  <span className="ch-fine-art-tagging__status">Tag pack ready</span>
                  {report.file_name ? (
                    <p className="ch-fine-art-tagging__file-name">{report.file_name}</p>
                  ) : null}
                  <p className="ch-fine-art-tagging__report-meta">
                    {reportSource === 'saved' ? 'Saved result · ' : ''}
                    Analyzed {formatDate(report.analyzedAt)}
                    {report.imageAttached
                      ? ' · Visual review included'
                      : report.imageUploadError
                        ? ' · Metadata only (image unavailable)'
                        : ''}
                  </p>
                  {saveState === 'saving' ? (
                    <p className="ch-fine-art-tagging__report-meta">Saving to Content Hub…</p>
                  ) : null}
                  {saveState === 'saved' ? (
                    <p className="ch-fine-art-tagging__report-meta ch-fine-art-tagging__report-meta--ok">
                      Saved to asset
                    </p>
                  ) : null}
                  {saveState === 'error' && saveError ? (
                    <p className="ch-fine-art-tagging__report-meta ch-fine-art-tagging__report-meta--error">
                      Analysis succeeded, but save failed: {saveError}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="ch-fine-art-tagging__panel">
                <h3 className="ch-fine-art-tagging__panel-title">Must-have tags</h3>
                <TagList tags={report.tag_pack.must_have} variant="must" />
              </div>

              <div className="ch-fine-art-tagging__panel">
                <h3 className="ch-fine-art-tagging__panel-title">Nice-to-have tags</h3>
                <TagList tags={report.tag_pack.nice_to_have} variant="nice" />
              </div>

              {report.medium_format_cues.likely_medium ||
              report.medium_format_cues.evidence ? (
                <div className="ch-fine-art-tagging__panel">
                  <h3 className="ch-fine-art-tagging__panel-title">Medium / format</h3>
                  {report.medium_format_cues.likely_medium ? (
                    <p className="ch-fine-art-tagging__medium">
                      {report.medium_format_cues.likely_medium}
                    </p>
                  ) : null}
                  {report.medium_format_cues.evidence ? (
                    <p className="ch-fine-art-tagging__hint">
                      {report.medium_format_cues.evidence}
                    </p>
                  ) : null}
                </div>
              ) : null}

              {report.style_movement_hypotheses.length > 0 ? (
                <div className="ch-fine-art-tagging__panel">
                  <h3 className="ch-fine-art-tagging__panel-title">
                    Style / movement ({report.style_movement_hypotheses.length})
                  </h3>
                  <div className="ch-fine-art-tagging__hypothesis-list">
                    {report.style_movement_hypotheses.map((hypothesis) => (
                      <HypothesisCard key={hypothesis.label} hypothesis={hypothesis} />
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="ch-fine-art-tagging__panel">
                <h3 className="ch-fine-art-tagging__panel-title">Visual analysis</h3>
                <dl className="ch-fine-art-tagging__analysis">
                  <AnalysisField
                    label="Subject"
                    value={report.concise_visual_analysis.subject_matter}
                  />
                  <AnalysisField
                    label="Setting"
                    value={report.concise_visual_analysis.setting}
                  />
                  <AnalysisField
                    label="Colors"
                    value={report.concise_visual_analysis.dominant_colors.join('; ')}
                  />
                  <AnalysisField
                    label="Lighting"
                    value={report.concise_visual_analysis.lighting}
                  />
                  <AnalysisField
                    label="Texture"
                    value={report.concise_visual_analysis.texture_mark_making}
                  />
                  <AnalysisField
                    label="Line"
                    value={report.concise_visual_analysis.line_quality}
                  />
                  <AnalysisField
                    label="Space"
                    value={report.concise_visual_analysis.perspective_space}
                  />
                  <AnalysisField
                    label="Composition"
                    value={report.concise_visual_analysis.composition}
                  />
                </dl>
              </div>

              {groupedEntries.length > 0 ? (
                <div className="ch-fine-art-tagging__panel">
                  <h3 className="ch-fine-art-tagging__panel-title">
                    Suggested tags by group ({groupedEntries.length})
                  </h3>
                  <div className="ch-fine-art-tagging__group-list">
                    {groupedEntries.map(([name, group]) => (
                      <TagGroupCard key={name} name={name} group={group} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
