import React from 'react';
import { useRotatingSavingMessage, type SavingMessageVariant } from './saving-messages';

interface SavingStatusMessageProps {
  active: boolean;
  variant?: SavingMessageVariant;
  className?: string;
}

export default function SavingStatusMessage({
  active,
  variant = 'active',
  className,
}: SavingStatusMessageProps) {
  const message = useRotatingSavingMessage(active, variant);

  if (!active) {
    return null;
  }

  return (
    <p
      className={`saving-status-message${className ? ` ${className}` : ''}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </p>
  );
}
