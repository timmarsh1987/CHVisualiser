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
  className = 'ch-intent-intelligence__empty',
}: LoadingStateProps) {
  const wittyMessage = useRotatingLoadingMessage(active);

  return (
    <div className={className} role="status" aria-live="polite" aria-busy="true">
      <div className="ch-intent-intelligence__loading">
        <div className="ch-intent-intelligence__spinner" aria-hidden="true" />
        <p className="ch-intent-intelligence__loading-label">{active ? wittyMessage : label}</p>
      </div>
    </div>
  );
}

export function InlineSpinner({ label }: { label?: string }) {
  return (
    <span className="ch-intent-intelligence__inline-loading">
      <span className="ch-intent-intelligence__spinner ch-intent-intelligence__spinner--small" aria-hidden="true" />
      {label ? <span>{label}</span> : null}
    </span>
  );
}
