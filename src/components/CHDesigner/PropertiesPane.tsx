import React, { useRef, useState } from 'react';
import { AssetPicker } from '../CHMarketingBuilder/AssetPicker';
import { clampBoxToPins, fillLayerToCanvas } from './constraints';
import { normalizeRotation } from './coords';
import { fontsFromFiles, layerFontIsLoaded, layerUsesFont } from './fontFiles';
import { pinLayerInPlace, setLayerMargin, toggleLayerPin, type MarginKey, type PinKey } from './pageLayout';
import { magicStringFor } from './fields';
import { defaultEditableContent, layerAllowsContentEdit, layerAllowsTransform } from './policy';
import { syncActiveTemplatePage } from './templateSettings';
import {
  useDesignerAction,
  useDesignerDocument,
  useDesignerMode,
  useFieldValues,
  useLayers,
  useSelection,
} from './store';
import { layerTextAlign, storySource } from './textFlow';
import type { DesignerDocument, DesignerFont, Layer, TextAlign } from './types';

function FontField({
  value,
  weight,
  style,
  fonts,
  disabled,
  onChange,
}: {
  value?: string;
  weight?: number;
  style?: 'normal' | 'italic';
  fonts: DesignerFont[];
  disabled?: boolean;
  onChange: (font: DesignerFont | null) => void;
}) {
  const match =
    fonts.find((font) => font.postScriptName === value) ??
    fonts.find((font) => font.family === value && font.weight === (weight || font.weight) && font.style === (style || 'normal')) ??
    fonts.find((font) => font.family === value);
  const known = Boolean(match) || fonts.some((font) => font.postScriptName === value || font.family === value);
  return (
    <label className="chd-field">
      <span>Font</span>
      <select
        disabled={disabled}
        value={match?.postScriptName || value || ''}
        onChange={(event) => {
          const next = event.target.value;
          if (!next) {
            onChange(null);
            return;
          }
          onChange(
            fonts.find((font) => font.postScriptName === next) ?? {
              id: next,
              family: next,
              postScriptName: next,
              weight: 400,
              style: 'normal',
              dataUrl: '',
            }
          );
        }}
      >
        <option value="">Georgia</option>
        {fonts.map((font) => (
          <option key={font.id} value={font.postScriptName}>
            {font.postScriptName === font.family ? font.family : `${font.family} (${font.postScriptName})`}
          </option>
        ))}
        {value && !known ? <option value={value}>{value}</option> : null}
      </select>
    </label>
  );
}

function NumberField({
  label,
  value,
  onChange,
  disabled,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  disabled?: boolean;
}) {
  return (
    <label className="chd-field">
      <span>{label}</span>
      <input
        type="number"
        disabled={disabled}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

const ALIGNMENTS: { id: TextAlign; label: string }[] = [
  { id: 'left', label: 'Left' },
  { id: 'middle', label: 'Middle' },
  { id: 'right', label: 'Right' },
];

function ChoiceField<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { id: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <div className="chd-field">
      <span>{label}</span>
      <div className="chd-align" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`chd-align-btn${value === option.id ? ' chd-align-btn--active' : ''}`}
            aria-pressed={value === option.id}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function missingFonts(document: DesignerDocument): { name: string; layers: number; pages: number }[] {
  const fonts = document.settings?.fonts ?? [];
  const synced = syncActiveTemplatePage(document);
  const pages = synced.pages?.length
    ? synced.pages
    : [{ id: synced.activePageId || 'page', layers: synced.layers }];
  const counts = new Map<string, { layers: number; pages: number }>();
  for (const page of pages) {
    const seen = new Set<string>();
    for (const layer of page.layers) {
      if (layer.type !== 'text') continue;
      const name = layer.fontFamily?.trim();
      if (!name || layerFontIsLoaded(layer, fonts)) continue;
      const current = counts.get(name) ?? { layers: 0, pages: 0 };
      current.layers += 1;
      if (!seen.has(name)) {
        current.pages += 1;
        seen.add(name);
      }
      counts.set(name, current);
    }
  }
  return [...counts.entries()].map(([name, usage]) => ({ name, ...usage }));
}

function fontCut(font: DesignerFont): string {
  const weight =
    font.weight >= 800 ? 'Black' : font.weight >= 700 ? 'Bold' : font.weight >= 600 ? 'Semibold' : font.weight >= 500 ? 'Medium' : font.weight > 0 && font.weight <= 300 ? 'Light' : '';
  return [weight, font.style === 'italic' ? 'Italic' : ''].filter(Boolean).join(' ');
}

function fontTitle(font: DesignerFont, fonts: DesignerFont[]): string {
  const cut = fontCut(font);
  const base = cut ? `${font.family} ${cut}` : font.family;
  const twins = fonts.filter((item) => {
    const itemCut = fontCut(item);
    return (itemCut ? `${item.family} ${itemCut}` : item.family) === base;
  });
  return twins.length > 1 ? `${base} (${font.postScriptName})` : base;
}

function fontUsage(document: DesignerDocument, font: DesignerFont, fonts: DesignerFont[]): { layers: number; pages: number } {
  const synced = syncActiveTemplatePage(document);
  const pages = synced.pages?.length
    ? synced.pages
    : [{ id: synced.activePageId || 'page', layers: synced.layers }];
  let layers = 0;
  let pageCount = 0;
  for (const page of pages) {
    const onPage = page.layers.filter((layer) => layerUsesFont(layer, font, fonts)).length;
    layers += onPage;
    if (onPage > 0) pageCount += 1;
  }
  return { layers, pages: pageCount };
}

function usageLine(layers: number, pages: number): string {
  return `${layers} ${layers === 1 ? 'usage' : 'usages'} on ${pages} ${pages === 1 ? 'page' : 'pages'}`;
}

function FontManager({ document }: { document: DesignerDocument }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDesignerAction();
  const fileRef = useRef<HTMLInputElement>(null);
  const fonts = document.settings?.fonts ?? [];
  const missing = missingFonts(document);

  const upload = async (list: FileList | null) => {
    if (!list?.length) return;
    try {
      const next = await fontsFromFiles([...list]);
      if (next.length === 0) {
        window.alert('Choose an .otf or .ttf font file.');
        return;
      }
      dispatch({ type: 'ADD_FONTS', fonts: next });
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Could not read this font file.');
    }
  };

  return (
    <section className="chd-font-manager">
      <button
        type="button"
        className="chd-font-manager-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="chd-font-manager-heading">
          <span>Fonts</span>
          {!open && missing.length > 0 ? (
            <span className="chd-font-missing-chip">
              <span className="chd-missing-fonts-mark" aria-hidden="true">!</span>
              Missing fonts
            </span>
          ) : null}
        </span>
        <span aria-hidden="true">{open ? '▾' : '▸'}</span>
      </button>
      {open ? (
        <div className="chd-font-manager-body">
          {missing.length > 0 ? (
            <div className="chd-font-missing" role="status">
              <p className="chd-font-missing-title">
                <span className="chd-missing-fonts-mark" aria-hidden="true">!</span>
                Missing fonts
              </p>
              <ul className="chd-font-missing-list">
                {missing.map((item) => (
                  <li key={item.name} className="chd-font-replace-row">
                    <span>
                      {item.name} - {usageLine(item.layers, item.pages)}
                    </span>
                    <label className="chd-field chd-font-replace">
                      <span>Replace with</span>
                      <select
                        value=""
                        aria-label={`Replace ${item.name}`}
                        onChange={(event) => {
                          const next = event.target.value;
                          if (!next) return;
                          if (next === 'georgia') {
                            dispatch({ type: 'REPLACE_FONT', from: item.name, font: null });
                            return;
                          }
                          const font = fonts.find((face) => face.postScriptName === next);
                          if (font) dispatch({ type: 'REPLACE_FONT', from: item.name, font });
                        }}
                      >
                        <option value="">Choose a font</option>
                        <option value="georgia">Georgia</option>
                        {fonts.map((font) => (
                          <option key={font.id} value={font.postScriptName}>
                            {fontTitle(font, fonts)}
                          </option>
                        ))}
                      </select>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <button type="button" className="chd-btn" onClick={() => fileRef.current?.click()}>
            Upload font
          </button>
          <input
            ref={fileRef}
            type="file"
            accept=".otf,.ttf,.woff,.woff2,font/otf,font/ttf,font/woff,font/woff2"
            multiple
            className="chd-file-input"
            onChange={(event) => {
              void upload(event.target.files);
              event.target.value = '';
            }}
          />
          {fonts.length === 0 ? (
            <p className="chd-font-empty">No fonts added.</p>
          ) : (
            <ul className="chd-font-list">
              {fonts.map((font) => {
                const title = fontTitle(font, fonts);
                const usage = fontUsage(document, font, fonts);
                return (
                  <li key={font.id} className="chd-font-row">
                    <span className="chd-font-usage">
                      {title} - {usageLine(usage.layers, usage.pages)}
                    </span>
                    <button
                      type="button"
                      className="chd-btn chd-font-remove"
                      aria-label={`Remove ${title}`}
                      onClick={() => dispatch({ type: 'REMOVE_FONT', id: font.id })}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ) : null}
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="chd-prop-section">
      <h3 className="chd-prop-section-title">{title}</h3>
      {children}
    </section>
  );
}

export default function PropertiesPane({
  collapsed = false,
  onToggleCollapse,
}: {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}) {
  const layers = useLayers();
  const fieldValues = useFieldValues();
  const selection = useSelection();
  const dispatch = useDesignerAction();
  const mode = useDesignerMode();
  const document = useDesignerDocument();
  const isAdmin = mode === 'admin';
  const isPublication = mode === 'publication';

  const selected = layers.filter((l) => selection.includes(l.id));
  const layer: Layer | null = selected.length === 1 ? selected[0] : null;

  const patch = (partial: Partial<Layer>) => {
    if (!layer) return;
    dispatch({ type: 'UPDATE_LAYER', id: layer.id, patch: partial });
  };

  const canTransform = layer ? (isAdmin ? !layer.locked : layerAllowsTransform(layer)) : false;
  const canEditContent = layer ? (isAdmin ? !layer.locked : layerAllowsContentEdit(layer)) : false;
  const story = layer?.type === 'text' ? storySource(document, layer) : null;
  const field = story?.fieldId ? document.fields?.find((item) => item.id === story.fieldId) : undefined;

  return (
    <aside
      className={`chd-panel chd-properties-panel${collapsed ? ' chd-panel--collapsed' : ''}`}
      aria-label="Properties"
    >
      <div className="chd-panel-header">
        {collapsed ? <span className="chd-panel-rail-label">Properties</span> : <span>Properties</span>}
        {onToggleCollapse ? (
          <button
            type="button"
            className="chd-panel-toggle"
            aria-expanded={!collapsed}
            aria-label={collapsed ? 'Expand properties' : 'Collapse properties'}
            onClick={onToggleCollapse}
          >
            {collapsed ? '‹' : '›'}
          </button>
        ) : null}
      </div>

      {collapsed ? null : (
        <>
      {!layer ? (
        <p className="chd-panel-empty">
          {selected.length > 1 ? `${selected.length} layers selected` : 'Select a layer'}
        </p>
      ) : (
        <div className="chd-properties-body">
          <Section title="Name">
            <div className={isAdmin && layer.type === 'text' ? 'chd-field-row' : undefined}>
              {isAdmin ? (
                <label className="chd-field">
                  <span>Name</span>
                  <input
                    type="text"
                    value={layer.name}
                    onChange={(e) => patch({ name: e.target.value })}
                  />
                </label>
              ) : (
                <div className="chd-field">
                  <span>Layer</span>
                  <strong>{layer.name}</strong>
                </div>
              )}
              {isAdmin && layer.type === 'text' ? (
                <NumberField
                  label="Size"
                  value={layer.fontSize ?? 16}
                  disabled={!canEditContent}
                  onChange={(fontSize) => patch({ fontSize })}
                />
              ) : null}
            </div>
            {isAdmin && layer.type === 'text' ? (
              <FontField
                value={layer.fontFamily}
                weight={layer.fontWeight}
                style={layer.fontStyle}
                fonts={document.settings?.fonts ?? []}
                disabled={!canEditContent}
                onChange={(font) =>
                  patch({
                    fontFamily: font?.postScriptName,
                    fontWeight: font?.weight,
                    fontStyle: font?.style,
                  })
                }
              />
            ) : null}
            {isAdmin && layer.type === 'text' && !layerFontIsLoaded(layer, document.settings?.fonts ?? []) ? (
              <p className="chd-field-hint chd-field-hint--warning">
                <span className="chd-missing-fonts-mark" aria-hidden="true">!</span>
                Missing fonts
              </p>
            ) : null}
            {isAdmin && layer.type === 'text' ? (
              <>
                <label className="chd-field chd-field-checkbox">
                  <input
                    type="checkbox"
                    checked={Boolean(layer.dynamicSize)}
                    onChange={(e) => patch({ dynamicSize: e.target.checked })}
                  />
                  <span>Dynamic size</span>
                </label>
                <p className="chd-field-hint">Type fits this box, and grows or shrinks when the box is scaled.</p>
              </>
            ) : null}
            {isAdmin ? (
              <label className="chd-field chd-field-checkbox">
                <input
                  type="checkbox"
                  checked={Boolean(layer.locked)}
                  onChange={(e) => {
                    if (layer.type === 'group') {
                      dispatch({ type: 'SET_BRANCH', id: layer.id, locked: e.target.checked });
                      return;
                    }
                    patch({ locked: e.target.checked });
                  }}
                />
                <span>Locked</span>
              </label>
            ) : null}
            {layer.type === 'group' ? (
              <p className="chd-field-hint">
                Show, hide, and lock on this group apply to every item inside it.
              </p>
            ) : null}
          </Section>

          {layer.type === 'group' ? null : (
          <>
          {!isPublication ? (
          <Section title="Placement">
            <div className="chd-field-row">
              <NumberField
                label="X"
                value={Math.round(layer.x)}
                disabled={!canTransform}
                onChange={(x) =>
                  patch(
                    clampBoxToPins(
                      { x, y: layer.y, width: layer.width, height: layer.height },
                      layer,
                      document.canvas.width,
                      document.canvas.height,
                      'move'
                    )
                  )
                }
              />
              <NumberField
                label="Y"
                value={Math.round(layer.y)}
                disabled={!canTransform}
                onChange={(y) =>
                  patch(
                    clampBoxToPins(
                      { x: layer.x, y, width: layer.width, height: layer.height },
                      layer,
                      document.canvas.width,
                      document.canvas.height,
                      'move'
                    )
                  )
                }
              />
            </div>
          </Section>
          ) : null}

          {!isPublication ? (
          <Section title="Dimensions">
            <div className="chd-field-row">
              <NumberField
                label="W"
                value={Math.round(layer.width)}
                disabled={!canTransform}
                onChange={(width) =>
                  patch(
                    clampBoxToPins(
                      { x: layer.x, y: layer.y, width, height: layer.height },
                      layer,
                      document.canvas.width,
                      document.canvas.height,
                      'resize'
                    )
                  )
                }
              />
              <NumberField
                label="H"
                value={Math.round(layer.height)}
                disabled={!canTransform}
                onChange={(height) =>
                  patch(
                    clampBoxToPins(
                      { x: layer.x, y: layer.y, width: layer.width, height },
                      layer,
                      document.canvas.width,
                      document.canvas.height,
                      'resize'
                    )
                  )
                }
              />
            </div>
            <NumberField
              label="Rotation"
              value={Math.round(layer.rotation ?? 0)}
              disabled={!canTransform}
              onChange={(rotation) => {
                const next = normalizeRotation(rotation);
                patch({ rotation: next || undefined });
              }}
            />
          </Section>
          ) : null}

          {!isPublication &&
            canEditContent &&
            (layer.type === 'frame' || layer.type === 'rect' || layer.type === 'image') && (
              <Section title="Fill">
                <label className="chd-field">
                  <span>Fill</span>
                  <input
                    type="color"
                    value={layer.fill && /^#/.test(layer.fill) ? layer.fill : '#888780'}
                    onChange={(e) => patch({ fill: e.target.value })}
                  />
                </label>
              </Section>
            )}

          {isAdmin && layer.type === 'text' && (
            <Section title="Text">
              <label className="chd-field">
                <span>Text</span>
                <textarea
                  rows={4}
                  value={story?.text || ''}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_LAYER',
                      id: story?.id || layer.id,
                      patch: { text: e.target.value },
                    })
                  }
                />
              </label>
              <ChoiceField
                label="Align"
                value={layerTextAlign(story || layer)}
                options={ALIGNMENTS}
                onChange={(align) =>
                  dispatch({
                    type: 'UPDATE_LAYER',
                    id: story?.id || layer.id,
                    patch: { align },
                  })
                }
              />
              <label className="chd-field chd-field-checkbox">
                <input
                  type="checkbox"
                  checked={Boolean(story?.flowOverflow)}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_LAYER',
                      id: story?.id || layer.id,
                      patch: { flowOverflow: e.target.checked },
                    })
                  }
                />
                <span>Continue on next page</span>
              </label>
              <p className="chd-field-hint">
                {layer.continuesFrom
                  ? 'This frame continues the story from the previous page.'
                  : 'Text that does not fit this box continues at the top of the next page.'}
              </p>
              <label className="chd-field">
                <span>Color</span>
                <input
                  type="color"
                  value={layer.color && /^#/.test(layer.color) ? layer.color : '#1a1a1a'}
                  onChange={(e) => patch({ color: e.target.value })}
                />
              </label>
            </Section>
          )}

          {isAdmin && layer.type === 'text' && (
            <Section title="Magic string">
              {layer.continuesFrom ? (
                <p className="chd-field-hint">
                  {field
                    ? `This frame continues ${magicStringFor(field)}.`
                    : 'This frame continues the story from the previous page.'}
                </p>
              ) : (
                <>
                  <label className="chd-field">
                    <span>Field</span>
                    <select
                      value={story?.fieldId || ''}
                      onChange={(e) =>
                        dispatch({
                          type: 'SET_LAYER_FIELD',
                          layerId: story?.id || layer.id,
                          fieldId: e.target.value || null,
                        })
                      }
                    >
                      <option value="">None</option>
                      {(document.fields ?? [])
                        .filter((item) => item.kind !== 'image')
                        .map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.label} ({magicStringFor(item)})
                          </option>
                        ))}
                    </select>
                  </label>
                  {field ? (
                    <>
                      <label className="chd-field">
                        <span>Label</span>
                        <input
                          type="text"
                          value={field.label}
                          onChange={(e) =>
                            dispatch({
                              type: 'SET_FIELD_LABEL',
                              fieldId: field.id,
                              label: e.target.value,
                            })
                          }
                        />
                      </label>
                      <label className="chd-field">
                        <span>Magic string</span>
                        <input type="text" readOnly value={magicStringFor(field)} />
                      </label>
                    </>
                  ) : (
                    <p className="chd-field-hint">
                      Use Add magic strings to create a field. The sample copy stays on the page.
                    </p>
                  )}
                </>
              )}
            </Section>
          )}

          {!isAdmin && canEditContent && layer.type === 'text' && field && (
            <Section title="Text">
              <label className="chd-field">
                <span>{field.label}</span>
                <textarea
                  rows={4}
                  value={fieldValues[field.id] ?? ''}
                  placeholder={story?.text || ''}
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_FIELD_VALUE',
                      fieldId: field.id,
                      value: e.target.value,
                    })
                  }
                />
              </label>
              <p className="chd-field-hint">
                {isPublication
                  ? 'Leave this empty to keep the sample copy.'
                  : `${magicStringFor(field)}. Leave this empty to keep the sample copy.`}
              </p>
              <label className="chd-field">
                <span>Color</span>
                <input
                  type="color"
                  value={layer.color && /^#/.test(layer.color) ? layer.color : '#1a1a1a'}
                  onChange={(e) => patch({ color: e.target.value })}
                />
              </label>
            </Section>
          )}

          {!isAdmin && canEditContent && layer.type === 'text' && !field && (
            <Section title="Text">
              <label className="chd-field">
                <span>Text</span>
                <textarea
                  rows={4}
                  value={story?.text || ''}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_LAYER',
                      id: story?.id || layer.id,
                      patch: { text: e.target.value },
                    })
                  }
                />
              </label>
              <label className="chd-field">
                <span>Color</span>
                <input
                  type="color"
                  value={layer.color && /^#/.test(layer.color) ? layer.color : '#1a1a1a'}
                  onChange={(e) => patch({ color: e.target.value })}
                />
              </label>
            </Section>
          )}

          {canEditContent && layer.type === 'image' && (
            <Section title="Image">
              {isAdmin ? (
                <>
                  <label className="chd-field">
                    <span>Generation field</span>
                    <select
                      value={layer.fieldId || ''}
                      onChange={(e) =>
                        dispatch({
                          type: 'SET_LAYER_FIELD',
                          layerId: layer.id,
                          fieldId: e.target.value || null,
                        })
                      }
                    >
                      <option value="">None</option>
                      {(document.fields ?? [])
                        .filter((item) => item.kind === 'image')
                        .map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.label} ({magicStringFor(item)})
                          </option>
                        ))}
                    </select>
                  </label>
                  {layer.fieldId ? (
                    <p className="chd-field-hint">
                      A generation row replaces this image. The picture on the page stays as the sample.
                    </p>
                  ) : (
                    <button
                      type="button"
                      className="chd-btn"
                      onClick={() =>
                        dispatch({
                          type: 'ADD_FIELD',
                          kind: 'image',
                          label: layer.name || 'Image',
                          layerId: layer.id,
                        })
                      }
                    >
                      Create image field
                    </button>
                  )}
                </>
              ) : null}
              <div className="chd-image-source">
                <span>Image</span>
                <AssetPicker
                  overlay
                  compact
                  triggerLabel={layer.src ? 'Choose from Content Hub' : 'Choose image'}
                  onSelect={(asset) => {
                    const src = asset.previewUrl || asset.thumbnailUrl;
                    if (src) patch({ src });
                  }}
                />
              </div>
              <label className="chd-field">
                <span>Image URL</span>
                <input
                  type="url"
                  placeholder="https://…"
                  value={layer.src || ''}
                  onChange={(e) => patch({ src: e.target.value })}
                />
              </label>
              <label className="chd-field">
                <span>Fit</span>
                <select
                  value={layer.objectFit || 'cover'}
                  onChange={(e) => patch({ objectFit: e.target.value as Layer['objectFit'] })}
                >
                  <option value="cover">Cover — fill page, keep photo ratio</option>
                  <option value="contain">Contain — whole photo, may letterbox</option>
                </select>
              </label>
            </Section>
          )}

          {isAdmin ? (
            <>
            <Section title="Page">
              <div className="chd-field chd-pin-field">
                <span>Pin to page</span>
                <div className="chd-pin-grid">
                  {(['pinTop', 'pinLeft', 'pinRight', 'pinBottom'] as const).map((key) => {
                    const labels: Record<PinKey, string> = {
                      pinTop: 'Top',
                      pinLeft: 'Left',
                      pinRight: 'Right',
                      pinBottom: 'Bottom',
                    };
                    return (
                      <label key={key} className="chd-field-checkbox">
                        <input
                          type="checkbox"
                          checked={layer[key] === true}
                          onChange={(e) =>
                            patch(
                              toggleLayerPin(
                                layer,
                                key,
                                e.target.checked,
                                document.canvas.width,
                                document.canvas.height
                              )
                            )
                          }
                        />
                        <span>{labels[key]}</span>
                      </label>
                    );
                  })}
                </div>
                <p className="chd-field-hint">
                  A pinned side stays inside the page. Dragging stops at that edge, and the margin is
                  the gap kept from it. Pin left and right together to stretch the width; pin top and
                  bottom to stretch the height.
                </p>
              </div>
              <div className="chd-field">
                <span>Margins</span>
                <div className="chd-pin-grid">
                  {(
                    [
                      ['marginTop', 'Top'],
                      ['marginLeft', 'Left'],
                      ['marginRight', 'Right'],
                      ['marginBottom', 'Bottom'],
                    ] as const
                  ).map(([key, label]) => (
                    <NumberField
                      key={key}
                      label={label}
                      value={Math.round(typeof layer[key] === 'number' ? layer[key]! : 0)}
                      onChange={(value) =>
                        patch(
                          setLayerMargin(
                            layer,
                            key as MarginKey,
                            value,
                            document.canvas.width,
                            document.canvas.height
                          )
                        )
                      }
                    />
                  ))}
                </div>
                <p className="chd-field-hint">
                  Margins are stored per page size. Change page, then adjust; use Push to all pages
                  to copy this layout to every preset.
                </p>
              </div>
              <button
                type="button"
                className="chd-btn"
                onClick={() => patch(pinLayerInPlace(layer, document.canvas.width, document.canvas.height))}
              >
                Pin in place
              </button>
              <button
                type="button"
                className="chd-btn"
                onClick={() =>
                  dispatch({ type: 'PUSH_LAYER_TO_ALL_PAGES', id: layer.id })
                }
              >
                Push to all pages
              </button>
              <button
                type="button"
                className="chd-btn"
                onClick={() =>
                  patch(fillLayerToCanvas(layer, document.canvas.width, document.canvas.height))
                }
              >
                Fill page
              </button>
            </Section>
            <Section title="End user">
              <label className="chd-field chd-field-checkbox">
                <input
                  type="checkbox"
                  checked={Boolean(layer.allowTransform)}
                  onChange={(e) => patch({ allowTransform: e.target.checked })}
                />
                <span>Allow transform (end user)</span>
              </label>
              <label className="chd-field chd-field-checkbox">
                <input
                  type="checkbox"
                  checked={defaultEditableContent(layer)}
                  onChange={(e) => patch({ editableContent: e.target.checked })}
                />
                <span>Editable content (end user)</span>
              </label>
            </Section>
            </>
          ) : null}
          </>
          )}
        </div>
      )}
      {isAdmin ? <FontManager document={document} /> : null}
        </>
      )}
    </aside>
  );
}
