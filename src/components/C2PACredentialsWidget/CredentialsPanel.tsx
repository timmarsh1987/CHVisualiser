/**
 * PLACEHOLDER CredentialsPanel — match this Section / card structure in
 * AIGovernancePanel evidence cards. Replace with the real widget when available.
 */
import React from 'react';

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
  manifest: {
    hasManifest: boolean;
    claimGenerator?: string;
    title?: string;
    ingredients?: unknown[];
    assertions?: unknown[];
  } | null;
  loading?: boolean;
  error?: string | null;
  /** When true, omit outer border/header so the panel nests inside EvidenceTab cards. */
  embedded?: boolean;
}

export function CredentialsPanel({
  manifest,
  loading,
  error,
  embedded = false,
}: CredentialsPanelProps) {
  const body = (
    <>
      {loading && <p className="c2pa-muted">Reading Content Credentials…</p>}
      {!loading && error && <p className="c2pa-error">{error}</p>}
      {!loading && !error && manifest && !manifest.hasManifest && (
        <p className="c2pa-muted">No C2PA Content Credentials found on this asset.</p>
      )}
      {!loading && manifest?.hasManifest && (
        <>
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
