/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { triggerProvenanceCheck } from './api';
import { assetId, loadAsset, mapProvenanceView } from './data';
import type { C2PAProvenanceOptions, ProvenanceView } from './types';
import './styles.css';

interface Props {
  client?: any;
  entity?: any;
  options: Partial<C2PAProvenanceOptions>;
}

function timestamp(value: string | null): string {
  if (!value) return 'Not checked';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
}

function historyCount(summary: Record<string, unknown> | null): number {
  const history = summary?.history;
  return Array.isArray(history) ? history.length : 0;
}

function provenanceFound(summary: Record<string, unknown> | null): boolean {
  const latest = summary?.latest;
  return Boolean(
    latest &&
      typeof latest === 'object' &&
      !Array.isArray(latest) &&
      (latest as Record<string, unknown>).provenanceFound === true
  );
}

export default function ProvenancePanel({ client, entity, options }: Props) {
  const id = useMemo(() => assetId(entity), [entity]);
  const configured = useMemo<C2PAProvenanceOptions | null>(() => {
    const apiBaseUrl = options.apiBaseUrl?.trim();
    const apiToken = options.apiToken?.trim();
    if (!apiBaseUrl || !apiToken) return null;
    return {
      apiBaseUrl,
      apiToken,
      requestTimeoutMs: Math.max(30_000, options.requestTimeoutMs ?? 300_000),
    };
  }, [options]);
  const [view, setView] = useState<ProvenanceView>(() => mapProvenanceView(entity));
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const hasManifest = provenanceFound(view.summary);

  const refresh = useCallback(async () => {
    if (!id) return;
    const current = await loadAsset(client, id);
    setView(mapProvenanceView(current));
  }, [client, id]);

  useEffect(() => {
    setView(mapProvenanceView(entity));
    if (id && client?.raw?.getAsync) {
      void refresh().catch(() => {
        // The component context remains a usable fallback.
      });
    }
  }, [client, entity, id, refresh]);

  const check = useCallback(async () => {
    if (!id || !configured) return;
    setChecking(true);
    setError('');
    setNotice('');
    try {
      await triggerProvenanceCheck(id, configured);
      await refresh();
      setNotice('Provenance check completed and the asset was updated.');
    } catch (checkError) {
      setError(checkError instanceof Error ? checkError.message : 'Provenance check failed.');
    } finally {
      setChecking(false);
    }
  }, [configured, id, refresh]);

  if (!id) {
    return <div className="ch-c2pa ch-c2pa--error">Open this component on an asset detail page.</div>;
  }

  return (
    <section className="ch-c2pa">
      <header className="ch-c2pa__header">
        <div>
          <p className="ch-c2pa__eyebrow">Content authenticity</p>
          <h2>C2PA provenance</h2>
        </div>
        <button
          type="button"
          className="ch-c2pa__button"
          disabled={checking || !configured}
          onClick={() => void check()}
        >
          {checking ? 'Checking…' : 'Check provenance'}
        </button>
      </header>

      {!configured && (
        <p className="ch-c2pa__message ch-c2pa__message--error">
          Configure apiBaseUrl and apiToken on this external component.
        </p>
      )}
      {error && <p className="ch-c2pa__message ch-c2pa__message--error">{error}</p>}
      {notice && <p className="ch-c2pa__message ch-c2pa__message--success">{notice}</p>}

      <div className="ch-c2pa__grid">
        <article
          className={
            view.provenanceVerified
              ? 'ch-c2pa__card ch-c2pa__card--positive'
              : hasManifest
                ? 'ch-c2pa__card ch-c2pa__card--negative'
                : 'ch-c2pa__card ch-c2pa__card--neutral'
          }
        >
          <span>Verified manifest</span>
          <strong>{view.provenanceVerified ? 'Yes' : 'No'}</strong>
          <small>
            {view.provenanceVerified
              ? 'C2PA credentials were found and passed validation.'
              : hasManifest
                ? 'C2PA credentials were found but did not pass validation.'
                : 'No valid C2PA credentials were detected.'}
          </small>
        </article>
        <article className={`ch-c2pa__card ${view.aiGenerated ? 'ch-c2pa__card--ai' : 'ch-c2pa__card--neutral'}`}>
          <span>AI generated</span>
          <strong>{view.aiGenerated ? 'Yes' : 'No'}</strong>
          <small>
            {view.aiGenerated
              ? 'The manifest declares fully synthetic media.'
              : 'The manifest does not declare fully synthetic media.'}
          </small>
        </article>
        <article className={`ch-c2pa__card ${view.aiEdited ? 'ch-c2pa__card--ai' : 'ch-c2pa__card--neutral'}`}>
          <span>AI edited</span>
          <strong>{view.aiEdited ? 'Yes' : 'No'}</strong>
          <small>
            {view.aiEdited
              ? 'The manifest declares AI-assisted editing.'
              : 'The manifest does not declare AI-assisted editing.'}
          </small>
        </article>
        <article className={`ch-c2pa__card ${view.sourceTool ? 'ch-c2pa__card--positive' : 'ch-c2pa__card--neutral'}`}>
          <span>Source tool</span>
          <strong>{view.sourceTool ?? 'Not declared'}</strong>
          <small>
            {view.sourceTool
              ? 'Claim generator recorded in the C2PA manifest.'
              : 'No source application was declared by a valid manifest.'}
          </small>
        </article>
      </div>

      <div className="ch-c2pa__meta">
        <span>Last checked: {timestamp(view.checkedAt)}</span>
        <span>Stored checks: {historyCount(view.summary)}</span>
      </div>

      {view.summary && (
        <details className="ch-c2pa__details">
          <summary>View stored C2PA summary</summary>
          <pre>{JSON.stringify(view.summary, null, 2)}</pre>
        </details>
      )}
    </section>
  );
}
