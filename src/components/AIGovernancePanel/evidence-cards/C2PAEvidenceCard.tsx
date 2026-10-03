import React, { useEffect, useRef } from 'react';
import { CredentialsPanel } from '../../C2PACredentialsWidget/CredentialsPanel';
import {
  useC2PAManifest,
  type C2PAManifestRequest,
} from '../../C2PACredentialsWidget/useC2PAManifest';
import type { C2PAEvidenceData, EvidenceRecord, VerificationStatus } from '../types';
import { Section } from './Section';

interface C2PAEvidenceCardProps {
  evidence?: EvidenceRecord;
  mode: 'stored' | 'collector';
  request?: C2PAManifestRequest | null;
  onCaptured?: (input: {
    evidenceSource: string;
    confidenceScore: number | null;
    verificationStatus: VerificationStatus;
    evidenceData: C2PAEvidenceData;
  }) => Promise<void>;
}

function verificationStatusFor(manifest: {
  verified: boolean;
  hasManifest: boolean;
}): VerificationStatus {
  if (manifest.verified) return 'verified';
  if (manifest.hasManifest) return 'invalid';
  return 'notApplicable';
}

export function C2PAEvidenceCard({
  evidence,
  mode,
  request,
  onCaptured,
}: C2PAEvidenceCardProps) {
  const { manifest, loading, error, ready } = useC2PAManifest(
    mode === 'collector' ? request ?? null : null
  );
  const savedRef = useRef(false);

  useEffect(() => {
    if (mode !== 'collector' || !onCaptured || loading || error || !ready || !manifest) return;
    if (savedRef.current) return;

    savedRef.current = true;
    const data: C2PAEvidenceData = {
      hasManifest: Boolean(manifest.hasManifest),
      claimGenerator: manifest.claimGenerator,
      ingredients: manifest.ingredients,
      raw: manifest.raw ?? manifest,
    };

    void onCaptured({
      evidenceSource: 'content-hub',
      confidenceScore: null,
      verificationStatus: verificationStatusFor(manifest),
      evidenceData: data,
    }).catch(() => {
      savedRef.current = false;
    });
  }, [mode, onCaptured, loading, error, ready, manifest]);

  if (mode === 'stored' && evidence) {
    const data = (evidence.evidenceData ?? {}) as C2PAEvidenceData;
    return (
      <>
        <Section title="Manifest">
          <p>{data.hasManifest ? 'Present' : 'Not present'}</p>
        </Section>
        {data.claimGenerator ? (
          <Section title="Claim generator">
            <p>{data.claimGenerator}</p>
          </Section>
        ) : null}
      </>
    );
  }

  return (
    <CredentialsPanel
      embedded
      manifest={manifest}
      loading={loading}
      error={error}
      ready={ready}
    />
  );
}
