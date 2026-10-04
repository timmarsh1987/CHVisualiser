import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import DesignerShell from './src/components/CHDesigner/DesignerShell';
import { createSeedDocument } from './src/components/CHDesigner/document';
import { importIdmlFile } from './src/components/CHDesigner/idmlImport';
import type { DesignerDocument } from './src/components/CHDesigner/types';
import './src/components/CHDesigner/index.css';

function Preview() {
  const [document, setDocument] = useState<DesignerDocument | null>(null);
  const [status, setStatus] = useState('Loading IDML…');

  useEffect(() => {
    let cancelled = false;
    const params = new URLSearchParams(window.location.search);
    if (params.get('seed') === '1') {
      setDocument(createSeedDocument());
      setStatus('Seed document');
      return;
    }
    const file = params.get('file') || 'tmp-menu.idml';
    void fetch(`/${file}`)
      .then((response) => response.arrayBuffer())
      .then((buffer) => importIdmlFile(buffer))
      .then((result) => {
        if (cancelled) return;
        setDocument(result.document);
        const pages = result.document.pages?.length ?? 1;
        setStatus(
          `Imported ${pages} page${pages === 1 ? '' : 's'}. ${result.document.canvas.width} × ${result.document.canvas.height}`
        );
      })
      .catch((error: unknown) => {
        if (!cancelled) setStatus(error instanceof Error ? error.message : 'Could not read this IDML file.');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!document) return <pre style={{ padding: 24 }}>{status}</pre>;

  return (
    <>
      <div
        style={{
          position: 'absolute',
          zIndex: 40,
          left: 8,
          bottom: 8,
          background: 'rgba(255,255,255,0.94)',
          border: '1px solid #ccc',
          borderRadius: 6,
          padding: '4px 8px',
          font: '12px sans-serif',
        }}
      >
        {status}
      </div>
      <DesignerShell mode="admin" document={document} />
    </>
  );
}

createRoot(document.getElementById('root')!).render(<Preview />);
