import React, { useEffect, useRef, useState } from 'react';
import epamWhite from '../CHImageComposer/logos/epam-white.png';
import { fillLayerToCanvas } from './constraints';
import { importFigmaUrl } from './figmaSourceImport';
import { fontsFromFiles } from './fontFiles';
import { importIdmlFile } from './idmlImport';
import { importPsdFile } from './psdImport';
import { pinLayerInPlace } from './pageLayout';
import BatchMenu from './BatchMenu';
import CopyMenu from './CopyMenu';
import GenerateMenu from './GenerateMenu';
import {
  CANVAS_PRESET_GROUPS,
  CANVAS_PRESETS,
  findCanvasPreset,
  resolveCanvasPresetId,
} from './printPresets';
import { useDesignerAction, useDesignerApi, useDesignerDocument, useSelection, useViewport } from './store';
import { brandChoices } from './templateSettings';
import { MAX_ZOOM, MIN_ZOOM, type DesignerDocument, type LayerType } from './types';

const ADDABLE: { type: LayerType; label: string }[] = [
  { type: 'frame', label: 'Frame' },
  { type: 'rect', label: 'Rect' },
  { type: 'text', label: 'Text' },
  { type: 'image', label: 'Image' },
];

export default function Toolbar() {
  const dispatch = useDesignerAction();
  const selection = useSelection();
  const viewport = useViewport();
  const canvasDocument = useDesignerDocument();
  const { mode, canUndo, canRedo, exportDocument, importDocumentJson } = useDesignerApi();
  const fileRef = useRef<HTMLInputElement>(null);
  const idmlRef = useRef<HTMLInputElement>(null);
  const psdRef = useRef<HTMLInputElement>(null);
  const fontRef = useRef<HTMLInputElement>(null);
  const transferRef = useRef<HTMLDivElement>(null);
  const [transferOpen, setTransferOpen] = useState(false);
  const isAdmin = mode === 'admin';
  const modeLabel = mode === 'admin' ? 'Admin' : mode === 'publication' ? 'Publication' : 'Edit';
  const presetId = resolveCanvasPresetId(
    canvasDocument.canvas.width,
    canvasDocument.canvas.height,
    canvasDocument.canvas.presetId
  );
  const templatePages = canvasDocument.pages ?? [];
  const brands = brandChoices(canvasDocument);
  const showTemplateSettings = templatePages.length > 1 || brands.length > 0;

  useEffect(() => {
    if (!transferOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (transferRef.current && !transferRef.current.contains(event.target as Node)) {
        setTransferOpen(false);
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [transferOpen]);

  const handleExport = () => {
    setTransferOpen(false);
    const doc = exportDocument();
    const blob = new Blob([JSON.stringify(doc, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement('a');
    a.href = url;
    a.download = 'chdesigner-document.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = async (file: File | null) => {
    if (!file) return;
    const text = await file.text();
    const ok = importDocumentJson(text);
    if (!ok) {
      window.alert('Could not import document. Expected CHDesigner JSON (version 1).');
    }
  };

  const handleImportIndesign = async (file: File | null) => {
    if (!file) return;
    const name = file.name.toLowerCase();
    if (name.endsWith('.indd')) {
      window.alert(
        'InDesign’s native .indd file can’t be read here. In InDesign, choose File → Save As and pick InDesign CS4 or later (IDML), then import that file.'
      );
      return;
    }
    if (!name.endsWith('.idml')) {
      window.alert('Could not read this IDML file.');
      return;
    }
    try {
      const result = await importIdmlFile(await file.arrayBuffer());
      const ok = importDocumentJson(JSON.stringify(keepLoadedFonts(result.document)));
      if (!ok) {
        window.alert('Could not read this IDML file.');
      }
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Could not read this IDML file.');
    }
  };

  const keepLoadedFonts = (document: DesignerDocument): DesignerDocument => {
    const fonts = canvasDocument.settings?.fonts;
    if (!fonts?.length) return document;
    return {
      ...document,
      settings: { ...document.settings, brands: document.settings?.brands ?? {}, fonts },
    };
  };

  const importProduced = (documentJson: string, failure: string) => {
    const ok = importDocumentJson(documentJson);
    if (!ok) window.alert(failure);
  };

  const handleImportPhotoshop = async (file: File | null) => {
    if (!file) return;
    const name = file.name.toLowerCase();
    if (!name.endsWith('.psd') && !name.endsWith('.psb')) {
      window.alert('Choose a Photoshop .psd file.');
      return;
    }
    try {
      const result = await importPsdFile(await file.arrayBuffer());
      importProduced(JSON.stringify(keepLoadedFonts(result.document)), 'Could not read this Photoshop file.');
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Could not read this Photoshop file.');
    }
  };

  const handleImportFigma = async () => {
    const url = window.prompt(
      'Paste a Figma frame link. In Figma, right-click the frame and choose Copy link.'
    );
    if (!url?.trim()) return;
    try {
      const result = await importFigmaUrl(url.trim());
      importProduced(JSON.stringify(keepLoadedFonts(result.document)), 'Could not read this Figma frame.');
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Could not read this Figma frame.');
    }
  };

  const handleAddFonts = async (list: FileList | null) => {
    if (!list?.length) return;
    try {
      const fonts = await fontsFromFiles([...list]);
      if (fonts.length === 0) {
        window.alert('Choose an .otf or .ttf font file.');
        return;
      }
      dispatch({ type: 'ADD_FONTS', fonts });
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Could not read this font file.');
    }
  };

  const handlePresetChange = (id: string) => {
    const preset = findCanvasPreset(id);
    if (!preset) return;
    dispatch({
      type: 'SET_CANVAS_SIZE',
      width: preset.width,
      height: preset.height,
      presetId: preset.id,
    });
  };

  const handlePinInPlace = () => {
    const selected = canvasDocument.layers.filter((layer) => selection.includes(layer.id));
    for (const layer of selected) {
      dispatch({
        type: 'UPDATE_LAYER',
        id: layer.id,
        patch: pinLayerInPlace(layer, canvasDocument.canvas.width, canvasDocument.canvas.height),
      });
    }
  };

  const handleFillPage = () => {
    const selected = canvasDocument.layers.filter((layer) => selection.includes(layer.id));
    for (const layer of selected) {
      dispatch({
        type: 'UPDATE_LAYER',
        id: layer.id,
        patch: fillLayerToCanvas(layer, canvasDocument.canvas.width, canvasDocument.canvas.height),
      });
    }
  };

  return (
    <header className="chd-toolbar">
      <div className="chd-toolbar-brand">
        <span className="chd-toolbar-logo-wrap">
          <img className="chd-toolbar-logo" src={epamWhite} alt="EPAM" />
        </span>
        <span className="chd-toolbar-mode">{modeLabel}</span>
      </div>

      {showTemplateSettings ? (
        <div className="chd-toolbar-group">
          {templatePages.length > 1 ? (
            <label className="chd-toolbar-field">
              <span>Page</span>
              <select
                className="chd-toolbar-select"
                value={canvasDocument.activePageId || templatePages[0].id}
                onChange={(event) =>
                  dispatch({ type: 'SET_TEMPLATE_PAGE', pageId: event.target.value })
                }
              >
                {templatePages.map((page) => (
                  <option key={page.id} value={page.id}>
                    {page.name}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
          {brands.map((brand) => (
            <label key={brand.slot} className="chd-toolbar-field">
              <span>{brand.label}</span>
              <select
                className="chd-toolbar-select"
                value={canvasDocument.settings?.brands?.[brand.slot] || brand.options[0]}
                onChange={(event) =>
                  dispatch({
                    type: 'SET_BRAND_OPTION',
                    slot: brand.slot,
                    option: event.target.value,
                  })
                }
              >
                {brand.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      ) : null}

      {isAdmin ? (
        <div className="chd-toolbar-group">
          {ADDABLE.map((item) => (
            <button
              key={item.type}
              type="button"
              className="chd-btn"
              onClick={() => dispatch({ type: 'ADD_LAYER', layerType: item.type })}
            >
              + {item.label}
            </button>
          ))}
        </div>
      ) : null}

      {isAdmin ? (
        <div className="chd-toolbar-group">
          <label className="chd-toolbar-field">
            <span>{templatePages.length > 1 ? 'Size' : 'Page'}</span>
            <select
              className="chd-toolbar-select"
              value={presetId}
              onChange={(event) => handlePresetChange(event.target.value)}
            >
              {presetId === 'custom' ? <option value="custom">Custom</option> : null}
              {CANVAS_PRESET_GROUPS.map((group) => (
                <optgroup key={group.id} label={group.label}>
                  {CANVAS_PRESETS.filter((preset) => preset.group === group.id).map((preset) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          <span className="chd-toolbar-size">
            {Math.round(canvasDocument.canvas.width)} × {Math.round(canvasDocument.canvas.height)}
          </span>
          <button type="button" className="chd-btn" onClick={() => dispatch({ type: 'ADD_TEMPLATE_PAGE' })}>
            Add page
          </button>
          <button
            type="button"
            className="chd-btn"
            disabled={templatePages.length < 2}
            onClick={() => dispatch({ type: 'REMOVE_TEMPLATE_PAGE' })}
          >
            Remove page
          </button>
          <button
            type="button"
            className="chd-btn"
            disabled={selection.length === 0}
            onClick={handlePinInPlace}
          >
            Pin to page
          </button>
          <button
            type="button"
            className="chd-btn"
            disabled={selection.length === 0}
            onClick={handleFillPage}
          >
            Fill page
          </button>
        </div>
      ) : null}

      {isAdmin ? (
        <div className="chd-toolbar-group">
          <CopyMenu />
        </div>
      ) : null}

      <div className="chd-toolbar-group">
        <button
          type="button"
          className="chd-btn"
          disabled={!canUndo}
          onClick={() => dispatch({ type: 'UNDO' })}
        >
          Undo
        </button>
        <button
          type="button"
          className="chd-btn"
          disabled={!canRedo}
          onClick={() => dispatch({ type: 'REDO' })}
        >
          Redo
        </button>
      </div>

      <div className="chd-toolbar-group">
        <GenerateMenu />
        <BatchMenu />
        <div className="chd-zoom-controls">
          <button
            type="button"
            className="chd-btn chd-zoom-btn"
            title="Zoom out"
            aria-label="Zoom out"
            disabled={viewport.zoom <= MIN_ZOOM + 0.001}
            onClick={() => dispatch({ type: 'ZOOM_BY', factor: 1 / 1.2 })}
          >
            −
          </button>
          <button
            type="button"
            className="chd-btn chd-zoom-label"
            title="Fit page to the screen"
            onClick={() => dispatch({ type: 'ZOOM_RESET' })}
          >
            {Math.round(viewport.zoom * 100)}%
          </button>
          <button
            type="button"
            className="chd-btn chd-zoom-btn"
            title="Zoom in"
            aria-label="Zoom in"
            disabled={viewport.zoom >= MAX_ZOOM - 0.001}
            onClick={() => dispatch({ type: 'ZOOM_BY', factor: 1.2 })}
          >
            +
          </button>
        </div>
        {isAdmin ? (
          <>
            <div className="chd-generate" ref={transferRef}>
              <button
                type="button"
                className="chd-btn"
                aria-expanded={transferOpen}
                aria-haspopup="menu"
                onClick={() => setTransferOpen((current) => !current)}
              >
                Import/Export
              </button>
              {transferOpen ? (
                <div className="chd-generate-menu" role="menu">
                  <button type="button" role="menuitem" className="chd-generate-option" onClick={handleExport}>
                    <strong>Export JSON</strong>
                    <span>Download this document</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="chd-generate-option"
                    onClick={() => {
                      setTransferOpen(false);
                      fileRef.current?.click();
                    }}
                  >
                    <strong>Import</strong>
                    <span>CHDesigner JSON</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="chd-generate-option"
                    onClick={() => {
                      setTransferOpen(false);
                      idmlRef.current?.click();
                    }}
                  >
                    <strong>Import InDesign</strong>
                    <span>IDML file</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="chd-generate-option"
                    onClick={() => {
                      setTransferOpen(false);
                      psdRef.current?.click();
                    }}
                  >
                    <strong>Import Photoshop</strong>
                    <span>PSD file</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="chd-generate-option"
                    onClick={() => {
                      setTransferOpen(false);
                      void handleImportFigma();
                    }}
                  >
                    <strong>Import Figma</strong>
                    <span>Frame link</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="chd-generate-option"
                    onClick={() => {
                      setTransferOpen(false);
                      fontRef.current?.click();
                    }}
                  >
                    <strong>Add fonts</strong>
                    <span>OTF or TTF</span>
                  </button>
                </div>
              ) : null}
            </div>
            <button type="button" className="chd-btn" onClick={() => dispatch({ type: 'ADD_MAGIC_STRINGS' })}>
              Add magic strings
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="chd-file-input"
              onChange={(e) => {
                void handleImportFile(e.target.files?.[0] ?? null);
                e.target.value = '';
              }}
            />
            <input
              ref={idmlRef}
              type="file"
              accept=".idml,.indd"
              className="chd-file-input"
              onChange={(e) => {
                void handleImportIndesign(e.target.files?.[0] ?? null);
                e.target.value = '';
              }}
            />
            <input
              ref={fontRef}
              type="file"
              accept=".otf,.ttf,.woff,.woff2,font/otf,font/ttf,font/woff,font/woff2"
              multiple
              className="chd-file-input"
              onChange={(e) => {
                void handleAddFonts(e.target.files);
                e.target.value = '';
              }}
            />
            <input
              ref={psdRef}
              type="file"
              accept=".psd,.psb"
              className="chd-file-input"
              onChange={(e) => {
                void handleImportPhotoshop(e.target.files?.[0] ?? null);
                e.target.value = '';
              }}
            />
          </>
        ) : null}
      </div>
    </header>
  );
}
