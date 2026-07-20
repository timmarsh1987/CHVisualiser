import React from 'react';

interface TemplateZoneEditToggleProps {
  isEditing: boolean;
  zoneCount: number;
  onToggle: () => void;
}

export default function TemplateZoneEditToggle({
  isEditing,
  zoneCount,
  onToggle,
}: TemplateZoneEditToggleProps) {
  return (
    <div className="marketing-builder-toolbar">
      <button
        type="button"
        className={`template-zone-edit-toggle${isEditing ? ' template-zone-edit-toggle-active' : ''}`}
        onClick={onToggle}
        aria-pressed={isEditing}
      >
        {isEditing ? 'Back to asset builder' : 'Edit Template'}
      </button>
      <span className="marketing-builder-toolbar-meta">
        {isEditing
          ? `Editing template ${zoneCount} zone${zoneCount === 1 ? '' : 's'}`
          : `Template has ${zoneCount} zone${zoneCount === 1 ? '' : 's'}`}
      </span>
    </div>
  );
}
