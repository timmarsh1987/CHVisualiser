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
  className = 'ch-image-detection__empty',
}: LoadingStateProps) {
  const wittyMessage = useRotatingLoadingMessage(active);

  return (
    <div className={className} role="status" aria-live="polite" aria-busy="true">
      <div className="ch-image-detection__loading">
        <div className="ch-image-detection__spinner" aria-hidden="true" />
        <p className="ch-image-detection__loading-label">{active ? wittyMessage : label}</p>
      </div>
    </div>
  );
}
