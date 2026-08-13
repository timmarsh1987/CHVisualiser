import React from 'react';
import DesignerCanvas from './DesignerCanvas';
import LayersPanel from './LayersPanel';
import PropertiesPane from './PropertiesPane';
import { DesignerProvider, type DesignerProviderProps } from './store';
import Toolbar from './Toolbar';
import type { DesignerDocument, DesignerInstanceDocument, DesignerMode } from './types';

export interface DesignerShellProps {
  mode?: DesignerMode;
  /** Canvas document (merged for endUser). */
  document?: DesignerDocument;
  /** Template-only baseline for endUser override diffs. */
  templateDocument?: DesignerDocument;
  templateId?: string;
  onDocumentChange?: (document: DesignerDocument) => void;
  onInstanceChange?: (instance: DesignerInstanceDocument) => void;
  /** Optional status line under the toolbar (e.g. save state). */
  statusSlot?: React.ReactNode;
  statusClassName?: string;
}

export default function DesignerShell({
  mode = 'admin',
  document,
  templateDocument,
  templateId,
  onDocumentChange,
  onInstanceChange,
  statusSlot,
  statusClassName,
}: DesignerShellProps) {
  const providerProps: Omit<DesignerProviderProps, 'children'> = {
    mode,
    initialDocument: document,
    templateDocument,
    templateId,
    onDocumentChange,
    onInstanceChange,
  };

  return (
    <DesignerProvider {...providerProps}>
      <div className={`chd-root${mode === 'endUser' ? ' chd-root--end-user' : ''}`}>
        <Toolbar />
        {statusSlot ? (
          <div className={`chd-status-bar${statusClassName ? ` ${statusClassName}` : ''}`}>
            {statusSlot}
          </div>
        ) : null}
        <div className="chd-main">
          <LayersPanel />
          <DesignerCanvas />
          <PropertiesPane />
        </div>
      </div>
    </DesignerProvider>
  );
}
