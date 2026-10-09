import React, { useEffect, useRef, useState } from 'react';
import DesignerCanvas from './DesignerCanvas';
import { registerDesignerFonts, unregisterDesignerFont } from './fontFiles';
import LayersPanel, { LeftSectionProvider } from './LayersPanel';
import PageStrip from './PageStrip';
import PropertiesPane from './PropertiesPane';
import {
  DesignerProvider,
  useDesignerDocument,
  useSelection,
  type DesignerProviderProps,
} from './store';
import Toolbar from './Toolbar';
import type { DesignerDocument, DesignerFont, DesignerInstanceDocument, DesignerMode } from './types';

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

function FontRegistry() {
  const document = useDesignerDocument();
  const fonts = document.settings?.fonts;
  const previous = useRef<DesignerFont[]>([]);
  useEffect(() => {
    const list = fonts ?? [];
    const removed = previous.current.filter((font) => !list.some((item) => item.id === font.id));
    for (const font of removed) unregisterDesignerFont(font, list);
    previous.current = list;
    if (list.length > 0) void registerDesignerFonts(list);
  }, [fonts]);
  return null;
}

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

function ShellBody({
  mode,
  publication,
  layersOpen,
  setLayersOpen,
  propertiesOpen,
  setPropertiesOpen,
  layersWidth,
  setLayersWidth,
  propertiesWidth,
  setPropertiesWidth,
  statusSlot,
  statusClassName,
  saveStatus,
}: {
  mode: DesignerShellProps['mode'];
  publication: boolean;
  layersOpen: boolean;
  setLayersOpen: React.Dispatch<React.SetStateAction<boolean>>;
  propertiesOpen: boolean;
  setPropertiesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  layersWidth: number;
  setLayersWidth: React.Dispatch<React.SetStateAction<number>>;
  propertiesWidth: number;
  setPropertiesWidth: React.Dispatch<React.SetStateAction<number>>;
  statusSlot?: React.ReactNode;
  statusClassName?: string;
  saveStatus?: React.ReactNode;
}) {
  const selection = useSelection();
  const selectionKey = selection.join('\n');
  const [hiddenFor, setHiddenFor] = useState('');
  const openedBySelection = publication && selectionKey !== '' && hiddenFor !== selectionKey;
  const showProperties = propertiesOpen || openedBySelection;

  return (
    <div
      className={`chd-root${mode === 'endUser' ? ' chd-root--end-user' : ''}${
        publication ? ' chd-root--publication' : ''
      }`}
    >
      <Toolbar />
      {statusSlot ? (
        <div className={`chd-status-bar${statusClassName ? ` ${statusClassName}` : ''}`}>
          {statusSlot}
        </div>
      ) : null}
      <div
        className={`chd-main${layersOpen ? '' : ' chd-main--layers-collapsed'}${showProperties ? '' : ' chd-main--properties-collapsed'}`}
        style={{
          ['--chd-layers-width' as string]: `${layersOpen ? layersWidth : COLLAPSED_PANEL}px`,
          ['--chd-properties-width' as string]: `${showProperties ? propertiesWidth : COLLAPSED_PANEL}px`,
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
            collapsed={!showProperties}
            onToggleCollapse={() => {
              if (showProperties) {
                setPropertiesOpen(false);
                if (publication) setHiddenFor(selectionKey);
                return;
              }
              setHiddenFor('');
              setPropertiesOpen(true);
            }}
          />
          {showProperties ? (
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
  );
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
  const publication = mode === 'publication';
  const [layersOpen, setLayersOpen] = useState(!publication);
  const [propertiesOpen, setPropertiesOpen] = useState(!publication);
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
      <LeftSectionProvider>
      <FontRegistry />
      <ShellBody
        mode={mode}
        publication={publication}
        layersOpen={layersOpen}
        setLayersOpen={setLayersOpen}
        propertiesOpen={propertiesOpen}
        setPropertiesOpen={setPropertiesOpen}
        layersWidth={layersWidth}
        setLayersWidth={setLayersWidth}
        propertiesWidth={propertiesWidth}
        setPropertiesWidth={setPropertiesWidth}
        statusSlot={statusSlot}
        statusClassName={statusClassName}
        saveStatus={saveStatus}
      />
      </LeftSectionProvider>
    </DesignerProvider>
  );
}
