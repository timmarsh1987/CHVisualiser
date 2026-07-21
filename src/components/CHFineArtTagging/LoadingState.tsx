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
  className = 'ch-fine-art-tagging__empty',
}: LoadingStateProps) {
  const wittyMessage = useRotatingLoadingMessage(active);

  return (
    <div className={className} role="status" aria-live="polite" aria-busy="true">
      <div className="ch-fine-art-tagging__loading">
        <div className="ch-fine-art-tagging__spinner" aria-hidden="true" />
        <p className="ch-fine-art-tagging__loading-label">{active ? wittyMessage : label}</p>
      </div>
    </div>
  );
}
