import React, { useState } from 'react';
import SavingStatusMessage from './SavingStatusMessage';
import type { MarketingAsset } from './types';

interface EjectToHtmlButtonProps {
  marketingAsset: MarketingAsset;
  userHasOverridePermission: boolean;
  onEject: (reason: string) => void | Promise<void>;
}

export function EjectToHtmlButton({ marketingAsset, userHasOverridePermission, onEject }: EjectToHtmlButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [reason, setReason] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!userHasOverridePermission || marketingAsset.isRawHtmlOverrideMA) return null;

  return (
    <>
      <button type="button" className="eject-button" onClick={() => setShowConfirm(true)}>
        Eject to raw HTML
      </button>

      {showConfirm && (
        <div className="eject-modal-backdrop" onClick={() => setShowConfirm(false)}>
          <div className="eject-modal" onClick={(e) => e.stopPropagation()}>
            <h3>This removes brand-lock protection for this asset</h3>
            <p>
              Locked elements (logo, colours, fonts) can be edited freely once ejected. This applies to this
              asset only, not the template, and cannot be undone for this asset. A reason is required and will
              appear on the governance report.
            </p>
            <textarea
              placeholder="Why does this asset need raw HTML?"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              autoFocus
            />
            <div className="eject-modal-actions">
              <button type="button" onClick={() => setShowConfirm(false)}>Cancel</button>
              <button
                type="button"
                className="eject-confirm"
                disabled={!reason.trim() || submitting}
                onClick={async () => {
                  setSubmitting(true);
                  try {
                    await onEject(reason.trim());
                    setShowConfirm(false);
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                Confirm eject
              </button>
            </div>
            <SavingStatusMessage active={submitting} className="eject-saving" />
          </div>
        </div>
      )}
    </>
  );
}
