import React from 'react';
import type { C2PAManifestSummary } from './c2paSummary';

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="c2pa-section">
      <h4 className="c2pa-section__title">{title}</h4>
      <div className="c2pa-section__body">{children}</div>
    </section>
  );
}

export interface CredentialsPanelProps {
  manifest: C2PAManifestSummary | null;
  loading?: boolean;
  error?: string | null;
  /** True once a stored provenance check has been read from the asset. */
  ready?: boolean;
  /** When true, omit outer border/header so the panel nests inside EvidenceTab cards. */
  embedded?: boolean;
}

function formatCheckedAt(value: string | undefined): string | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
}

export function CredentialsPanel({
  manifest,
  loading,
  error,
  ready = false,
  embedded = false,
}: CredentialsPanelProps) {
  const checkedAt = formatCheckedAt(manifest?.checkedAt);
  const body = (
    <>
      {loading && <p className="c2pa-muted">Reading the stored C2PA summary…</p>}
      {!loading && error && <p className="c2pa-error">{error}</p>}
      {!loading && !error && !ready && (
        <p className="c2pa-muted">
          No C2PA summary is stored on this asset yet. Run a provenance check so Content Hub can
          save SC.Asset.C2PA.Summary.
        </p>
      )}
      {!loading && !error && ready && manifest && !manifest.hasManifest && (
        <p className="c2pa-muted">
          This asset was checked{checkedAt ? ` on ${checkedAt}` : ''} and has no C2PA Content
          Credentials.
        </p>
      )}
      {!loading && manifest?.hasManifest && (
        <>
          <Section title="Validation">
            <p>{manifest.verified ? 'Verified' : 'Found, validation failed'}</p>
          </Section>
          <Section title="Claim generator">
            <p>{manifest.claimGenerator || '—'}</p>
          </Section>
          {manifest.title ? (
            <Section title="Title">
              <p>{manifest.title}</p>
            </Section>
          ) : null}
          <Section title="Ingredients">
            <p>{manifest.ingredients?.length ?? 0} ingredient(s)</p>
          </Section>
          {checkedAt ? (
            <Section title="Checked">
              <p>{checkedAt}</p>
            </Section>
          ) : null}
        </>
      )}
    </>
  );

  if (embedded) {
    return <div className="c2pa-credentials c2pa-credentials--embedded">{body}</div>;
  }

  return (
    <div className="c2pa-credentials">
      <header className="c2pa-credentials__header">
        <p className="c2pa-credentials__eyebrow">Content authenticity</p>
        <h3 className="c2pa-credentials__title">Content Credentials</h3>
      </header>
      <div className="c2pa-credentials__body">{body}</div>
    </div>
  );
}

export default CredentialsPanel;
