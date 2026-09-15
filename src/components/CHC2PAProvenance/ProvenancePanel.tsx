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

function manifestFromSummary(
  summary: Record<string, unknown> | null
): Record<string, unknown> | null {
  const latest = summary?.latest;
  if (!latest || typeof latest !== 'object' || Array.isArray(latest)) return null;
  const manifest = (latest as Record<string, unknown>).manifest;
  return manifest && typeof manifest === 'object' && !Array.isArray(manifest)
    ? (manifest as Record<string, unknown>)
    : null;
}

function signerFromManifest(manifest: Record<string, unknown> | null): string {
  const signature = manifest?.signatureInfo;
  if (signature && typeof signature === 'object' && !Array.isArray(signature)) {
    const issuer = (signature as Record<string, unknown>).issuer;
    if (typeof issuer === 'string' && issuer.trim()) return issuer.trim();
  }
  return 'Not declared';
}

function actionLabel(value: unknown): string | null {
  if (typeof value !== 'string' || !value.trim()) return null;
  const finalPart = value.trim().split(/[./]/).pop() ?? value;
  const words = finalPart
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .trim();
  return words ? words.charAt(0).toUpperCase() + words.slice(1) : null;
}

function actionsFromManifest(manifest: Record<string, unknown> | null): string[] {
  const rawAssertions = manifest?.assertions;
  const assertions = Array.isArray(rawAssertions) ? rawAssertions : [];
  const actions = new Set<string>();
  for (const value of assertions) {
    if (!value || typeof value !== 'object') continue;
    const assertion = value as Record<string, unknown>;
    if (typeof assertion.label !== 'string' || !assertion.label.startsWith('c2pa.actions')) {
      continue;
    }
    const data =
      assertion.data && typeof assertion.data === 'object'
        ? (assertion.data as Record<string, unknown>)
        : null;
    const rawActions = data?.actions;
    for (const item of Array.isArray(rawActions) ? rawActions : []) {
      if (!item || typeof item !== 'object') continue;
      const label = actionLabel((item as Record<string, unknown>).action);
      if (label) actions.add(label);
    }
  }
  return [...actions];
}

interface IngredientView {
  title: string;
  relationship: string;
  format: string;
}

function ingredientsFromManifest(
  manifest: Record<string, unknown> | null
): IngredientView[] {
  const values = manifest?.ingredients;
  if (!Array.isArray(values)) return [];
  return values.flatMap((value) => {
    if (!value || typeof value !== 'object') return [];
    const ingredient = value as Record<string, unknown>;
    const title =
      typeof ingredient.title === 'string' && ingredient.title.trim()
        ? ingredient.title.trim()
        : 'Untitled ingredient';
    return [{
      title,
      relationship:
        typeof ingredient.relationship === 'string'
          ? actionLabel(ingredient.relationship) ?? ingredient.relationship
          : 'Ingredient',
      format: typeof ingredient.format === 'string' ? ingredient.format : '',
    }];
  });
}

function manifestDate(
  manifest: Record<string, unknown> | null,
  fallback: string | null
): string {
  const signature = manifest?.signatureInfo;
  const raw =
    signature && typeof signature === 'object' && !Array.isArray(signature)
      ? (signature as Record<string, unknown>).time
      : null;
  return timestamp(typeof raw === 'string' ? raw : fallback);
}

function verifiedCopy(verified: boolean, hasManifest: boolean): string {
  if (verified) return 'Yes — credentials were found and passed validation.';
  if (hasManifest) return 'No — credentials were found but did not pass validation.';
  return 'No — no valid C2PA credentials were detected.';
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
  const manifest = manifestFromSummary(view.summary);
  const signer = signerFromManifest(manifest);
  const actions = actionsFromManifest(manifest);
  const ingredients = ingredientsFromManifest(manifest);
  const assetTitle = typeof manifest?.title === 'string' ? manifest.title : `Asset ${id ?? ''}`;

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
        <div className="ch-c2pa__brand">
          <span className="ch-c2pa__credentials-mark" aria-hidden="true">cr</span>
          <div>
            <h2>Content Credentials</h2>
            <p className="ch-c2pa__eyebrow">{assetTitle}</p>
          </div>
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

      <section className="ch-c2pa__provenance-graph" aria-label="Content provenance">
        {ingredients.length > 0 && (
          <div className="ch-c2pa__ingredients">
            {ingredients.map((ingredient, index) => (
              <article
                className="ch-c2pa__ingredient"
                key={`${ingredient.title}-${ingredient.relationship}-${index}`}
              >
                <span className="ch-c2pa__credentials-mark" aria-hidden="true">cr</span>
                <strong>{ingredient.title}</strong>
                <small>{ingredient.relationship}{ingredient.format ? ` · ${ingredient.format}` : ''}</small>
              </article>
            ))}
          </div>
        )}

        <article className={`ch-c2pa__credentials ${ingredients.length > 0 ? 'ch-c2pa__node--connected-above' : ''}`}>
          <div
            className={`ch-c2pa__trust ${
              view.provenanceVerified
                ? 'ch-c2pa__trust--verified'
                : hasManifest
                  ? 'ch-c2pa__trust--invalid'
                  : 'ch-c2pa__trust--none'
            }`}
          >
            <span aria-hidden="true">
              {view.provenanceVerified ? '✓' : hasManifest ? '!' : '–'}
            </span>
            {view.provenanceVerified
              ? 'Verified credentials'
              : hasManifest
                ? 'Credentials found, validation failed'
                : 'No credentials found'}
          </div>

          <dl className="ch-c2pa__credential-facts">
            <div>
              <dt>Verified manifest</dt>
              <dd>{verifiedCopy(view.provenanceVerified, hasManifest)}</dd>
            </div>
            <div>
              <dt>AI generated</dt>
              <dd>
                {view.aiGenerated
                  ? 'Yes — the manifest declares fully synthetic media.'
                  : 'No — the manifest does not declare fully synthetic media.'}
              </dd>
            </div>
            <div>
              <dt>AI edited</dt>
              <dd>
                {view.aiEdited
                  ? 'Yes — the manifest declares AI-assisted editing.'
                  : 'No — the manifest does not declare AI-assisted editing.'}
              </dd>
            </div>
            <div>
              <dt>Source tool</dt>
              <dd>
                {view.sourceTool
                  ? view.sourceTool
                  : 'Not declared by a valid manifest.'}
              </dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd>{manifestDate(manifest, view.checkedAt)}</dd>
            </div>
            <div>
              <dt>Edits and activity</dt>
              <dd>{actions.length > 0 ? actions.join(', ') : 'No actions declared'}</dd>
            </div>
            <div>
              <dt>Signed by</dt>
              <dd>{signer}</dd>
            </div>
          </dl>
        </article>

        <article className="ch-c2pa__current-asset ch-c2pa__node--connected-above">
          {view.previewUrl ? (
            <img src={view.previewUrl} alt="" />
          ) : (
            <div className="ch-c2pa__asset-placeholder">Current asset</div>
          )}
          <span className="ch-c2pa__credentials-mark" aria-hidden="true">cr</span>
          <strong>{assetTitle}</strong>
        </article>
      </section>

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
