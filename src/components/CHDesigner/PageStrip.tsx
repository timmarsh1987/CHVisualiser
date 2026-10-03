import React from 'react';
import LayerNode from './LayerNode';
import { layerIsShown } from './policy';
import { useDesignerAction, useOutputDocument } from './store';
import type { DesignerDocument, DesignerTemplatePage, Layer } from './types';

const THUMB_MAX_WIDTH = 104;
const THUMB_MAX_HEIGHT = 72;

function pagesOf(document: DesignerDocument): DesignerTemplatePage[] {
  if (document.pages?.length) {
    return document.pages.map((page) =>
      page.id === document.activePageId
        ? {
            ...page,
            width: document.canvas.width,
            height: document.canvas.height,
            layers: document.layers,
          }
        : page
    );
  }
  return [
    {
      id: 'current',
      name: 'Page 1',
      width: document.canvas.width,
      height: document.canvas.height,
      layers: document.layers,
    },
  ];
}

function PageThumb({
  page,
  selected,
  onSelect,
}: {
  page: DesignerTemplatePage;
  selected: boolean;
  onSelect: () => void;
}) {
  const document = useOutputDocument();
  const scale = Math.min(THUMB_MAX_WIDTH / page.width, THUMB_MAX_HEIGHT / page.height);
  const shown = page.layers.filter((layer) => layerIsShown(layer, document.settings));

  return (
    <button
      type="button"
      className={`chd-page-thumb${selected ? ' chd-page-thumb--active' : ''}`}
      aria-pressed={selected}
      onClick={onSelect}
    >
      <span
        className="chd-page-thumb-frame"
        style={{ width: Math.round(page.width * scale), height: Math.round(page.height * scale) }}
      >
        <span
          className="chd-page-thumb-art"
          style={{
            width: page.width,
            height: page.height,
            transform: `scale(${scale})`,
            background: document.canvas.background || '#ffffff',
          }}
        >
          {shown.map((layer: Layer) => (
            <LayerNode
              key={layer.id}
              layer={layer}
              selected={false}
              preview
              onSelect={() => undefined}
              onMoveStart={() => undefined}
            />
          ))}
        </span>
      </span>
      <span className="chd-page-thumb-name">{page.name}</span>
    </button>
  );
}

export default function PageStrip() {
  const document = useOutputDocument();
  const dispatch = useDesignerAction();
  const pages = pagesOf(document);
  const activeId = document.activePageId || pages[0]?.id;

  return (
    <div className="chd-page-strip" role="tablist" aria-label="Pages">
      {pages.map((page) => (
        <PageThumb
          key={page.id}
          page={page}
          selected={page.id === activeId}
          onSelect={() => {
            if (page.id === activeId || page.id === 'current') return;
            dispatch({ type: 'SET_TEMPLATE_PAGE', pageId: page.id });
          }}
        />
      ))}
    </div>
  );
}
