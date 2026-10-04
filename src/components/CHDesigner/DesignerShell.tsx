import React, { useState } from 'react';
import DesignerCanvas from './DesignerCanvas';
import LayersPanel from './LayersPanel';
import PageStrip from './PageStrip';
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
  /** Entered magic-string values for end-user mode. */
  fieldValues?: Record<string, string>;
  onDocumentChange?: (document: DesignerDocument) => void;
  onInstanceChange?: (instance: DesignerInstanceDocument) => void;
  /** Optional status line under the toolbar (e.g. save state). */
  statusSlot?: React.ReactNode;
  statusClassName?: string;
  /** Floating save state, typically bottom-right. */
  saveStatus?: React.ReactNode;
}

const COLLAPSED_PANEL = 36;
const MIN_PANEL = 180;
const MAX_PANEL = 480;

function clampPanel(width: number): number {
  return Math.min(MAX_PANEL, Math.max(MIN_PANEL, Math.round(width)));
}

function startPanelResize(
  event: React.PointerEvent<HTMLDivElement>,
  startWidth: number,
  direction: 1 | -1,
  onWidth: (width: number) => void
) {
  event.preventDefault();
  const handle = event.currentTarget;
  const originX = event.clientX;
  handle.classList.add('chd-panel-resizer--active');
  try {
    handle.setPointerCapture(event.pointerId);
  } catch {
    // Pointer capture is unavailable for this event. Moves still update the width.
  }

  const move = (moveEvent: PointerEvent) => {
    onWidth(clampPanel(startWidth + direction * (moveEvent.clientX - originX)));
  };
  const stop = () => {
    handle.classList.remove('chd-panel-resizer--active');
    handle.removeEventListener('pointermove', move);
    handle.removeEventListener('pointerup', stop);
    handle.removeEventListener('pointercancel', stop);
  };
  handle.addEventListener('pointermove', move);
  handle.addEventListener('pointerup', stop);
  handle.addEventListener('pointercancel', stop);
}

export default function DesignerShell({
  mode = 'admin',
  document,
  templateDocument,
  templateId,
  fieldValues,
  onDocumentChange,
  onInstanceChange,
  statusSlot,
  statusClassName,
  saveStatus,
}: DesignerShellProps) {
  const [layersOpen, setLayersOpen] = useState(true);
  const [propertiesOpen, setPropertiesOpen] = useState(true);
  const [layersWidth, setLayersWidth] = useState(300);
  const [propertiesWidth, setPropertiesWidth] = useState(260);
  const providerProps: Omit<DesignerProviderProps, 'children'> = {
    mode,
    initialDocument: document,
    templateDocument,
    templateId,
    initialFieldValues: fieldValues,
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
        <div
          className={`chd-main${layersOpen ? '' : ' chd-main--layers-collapsed'}${propertiesOpen ? '' : ' chd-main--properties-collapsed'}`}
          style={{
            ['--chd-layers-width' as string]: `${layersOpen ? layersWidth : COLLAPSED_PANEL}px`,
            ['--chd-properties-width' as string]: `${propertiesOpen ? propertiesWidth : COLLAPSED_PANEL}px`,
          }}
        >
          <div className="chd-panel-slot">
            <LayersPanel collapsed={!layersOpen} onToggleCollapse={() => setLayersOpen((open) => !open)} />
            {layersOpen ? (
              <div
                className="chd-panel-resizer chd-panel-resizer--end"
                role="separator"
                aria-orientation="vertical"
                aria-label="Resize layers"
                onPointerDown={(event) => startPanelResize(event, layersWidth, 1, setLayersWidth)}
              />
            ) : null}
          </div>
          <div className="chd-stage">
            <DesignerCanvas />
            <PageStrip />
          </div>
          <div className="chd-panel-slot">
            <PropertiesPane
              collapsed={!propertiesOpen}
              onToggleCollapse={() => setPropertiesOpen((open) => !open)}
            />
            {propertiesOpen ? (
              <div
                className="chd-panel-resizer chd-panel-resizer--start"
                role="separator"
                aria-orientation="vertical"
                aria-label="Resize properties"
                onPointerDown={(event) =>
                  startPanelResize(event, propertiesWidth, -1, setPropertiesWidth)
                }
              />
            ) : null}
          </div>
        </div>
        {saveStatus}
      </div>
    </DesignerProvider>
  );
}
