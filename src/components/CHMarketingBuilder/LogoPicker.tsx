import React from 'react';
import { CYTIVA_LOGO_OPTIONS, resolveLogoAssetUrl } from './brandAssets';

interface LogoPickerProps {
  zoneKey: string;
  selectedUrl?: string;
  onChange: (zoneKey: string, imageAssetUrl: string) => void;
  compact?: boolean;
}

export default function LogoPicker({ zoneKey, selectedUrl, onChange, compact = false }: LogoPickerProps) {
  const activeUrl = resolveLogoAssetUrl(selectedUrl);

  return (
    <div className={`logo-picker${compact ? ' logo-picker-compact' : ''}`} role="radiogroup" aria-label="Choose logo">
      {CYTIVA_LOGO_OPTIONS.map((option) => {
        const isSelected = activeUrl === option.url;

        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            className={`logo-picker-option${isSelected ? ' logo-picker-option-selected' : ''}`}
            onClick={() => onChange(zoneKey, option.url)}
          >
            <span className="logo-picker-preview" style={{ background: option.previewBackground }}>
              <img src={option.url} alt="" className="logo-picker-image" />
            </span>
            <span className="logo-picker-label">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
