import React from 'react';

interface ZoneDeleteButtonProps {
  zoneLabel: string;
  onDelete: () => void;
  className?: string;
}

export default function ZoneDeleteButton({ zoneLabel, onDelete, className = '' }: ZoneDeleteButtonProps) {
  return (
    <button
      type="button"
      className={`zone-list-delete${className ? ` ${className}` : ''}`}
      aria-label={`Delete zone ${zoneLabel}`}
      title="Delete zone"
      onClick={(event) => {
        event.stopPropagation();
        onDelete();
      }}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v9h-2V9zm4 0h2v9h-2V9zM7 9h2v9H7V9z"
        />
      </svg>
    </button>
  );
}
