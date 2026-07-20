import React from 'react';

import { useRotatingLoadingMessage } from './loading-messages';

type LoadingStateProps = {
  active: boolean;
  label?: string;
  className?: string;
};

export function LoadingState({
  active,
  label = 'Loading…',
  className = 'ch-brand-compliance__empty',
}: LoadingStateProps) {
  const wittyMessage = useRotatingLoadingMessage(active);

  return (
    <div className={className} role="status" aria-live="polite" aria-busy="true">
      <div className="ch-brand-compliance__loading">
        <div className="ch-brand-compliance__spinner" aria-hidden="true" />
        <p className="ch-brand-compliance__loading-label">{active ? wittyMessage : label}</p>
      </div>
    </div>
  );
}

export function InlineSpinner({ label }: { label?: string }) {
  return (
    <span className="ch-brand-compliance__inline-loading">
      <span
        className="ch-brand-compliance__spinner ch-brand-compliance__spinner--small"
        aria-hidden="true"
      />
      {label ? <span>{label}</span> : null}
    </span>
  );
}
