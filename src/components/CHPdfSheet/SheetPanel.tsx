import React, { useEffect, useState } from 'react';
import { Alert, Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import type { Template } from '../../../pdf-builder/packages/render-core/src/browser';
import {
  dataFromEntity,
  listPdfTemplates,
  loadEntityData,
  loadPdfTemplate,
  pageEntityId,
  saveGeneratedPdf,
  type HubClient,
} from '../CHPdfTemplate/hub';
import { readTemplate, renderTemplate } from '../CHPdfTemplate/renderClient';

type SheetProps = {
  client: HubClient;
  entity?: unknown;
  options?: unknown;
};

export default function SheetPanel({ client, entity, options }: SheetProps) {
  const [templates, setTemplates] = useState<Array<{ id: number; name: string }>>([]);
  const [templateId, setTemplateId] = useState<number | ''>('');
  const [template, setTemplate] = useState<Template | null>(null);
  const [data, setData] = useState<Record<string, unknown>>({});
  const [previewUrl, setPreviewUrl] = useState('');
  const [fileName, setFileName] = useState('product.pdf');
  const [status, setStatus] = useState('Loading PDF templates...');
  const [error, setError] = useState('');
  const [bytes, setBytes] = useState<Uint8Array | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const listed = await listPdfTemplates(client);
        if (cancelled) return;
        setTemplates(listed.map((item) => ({ id: item.id, name: item.name })));
        const entityId = pageEntityId(entity, options);
        const product = entityId != null ? await loadEntityData(client, entityId) : dataFromEntity(entity);
        if (cancelled) return;
        setData(product);
        const productName = typeof product.ProductName === 'string' ? product.ProductName : 'product';
        setFileName(`${productName}.pdf`);
        setStatus(listed.length > 0 ? 'Choose a template.' : 'No PDF templates have been saved yet.');
        if (listed[0]) setTemplateId(listed[0].id);
      } catch (loadError) {
        if (!cancelled) setError(loadError instanceof Error ? loadError.message : 'Could not load templates.');
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [client, entity, options]);

  useEffect(() => {
    if (templateId === '') return;
    let cancelled = false;
    const load = async () => {
      const saved = await loadPdfTemplate(client, templateId);
      if (cancelled) return;
      setTemplate(readTemplate(saved.json, saved.name));
    };
    void load().catch((loadError: unknown) => {
      if (!cancelled) setError(loadError instanceof Error ? loadError.message : 'Could not open that template.');
    });
    return () => {
      cancelled = true;
    };
  }, [client, templateId]);

  useEffect(() => {
    if (!template) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      void renderTemplate(template, data).then((nextBytes) => {
        if (cancelled) return;
        setBytes(nextBytes);
        const copy = new ArrayBuffer(nextBytes.byteLength);
        new Uint8Array(copy).set(nextBytes);
        const url = URL.createObjectURL(new Blob([copy], { type: 'application/pdf' }));
        setPreviewUrl((current) => {
          if (current) URL.revokeObjectURL(current);
          return url;
        });
        setStatus('PDF generated from the product on this page.');
      }).catch((renderError: unknown) => {
        if (!cancelled) setError(renderError instanceof Error ? renderError.message : 'Could not generate the PDF.');
      });
    }, 300);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [template, data]);

  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Typography variant="h6">Product PDF</Typography>
      <Typography variant="body2">
        Choose a saved template. The PDF is filled from this product, then you can download it or save it as an asset.
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}
      <TextField
        select
        label="Template"
        value={templateId}
        onChange={(event) => setTemplateId(Number(event.target.value))}
      >
        {templates.map((item) => (
          <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
        ))}
      </TextField>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          disabled={!previewUrl}
          href={previewUrl || undefined}
          download={fileName}
          component="a"
        >
          Generate
        </Button>
        <Button
          variant="contained"
          disabled={!bytes}
          onClick={() => {
            if (!bytes) return;
            void saveGeneratedPdf(client, fileName, bytes)
              .then((assetId) => {
                setStatus(`Saved as asset ${assetId}.`);
                setError('');
              })
              .catch((saveError: unknown) => {
                setError(saveError instanceof Error ? saveError.message : 'Could not save the PDF.');
              });
          }}
        >
          Save
        </Button>
      </Stack>
      {status ? <Typography variant="body2">{status}</Typography> : null}
      {previewUrl ? (
        <iframe title="Generated PDF" src={previewUrl} style={{ width: '100%', minHeight: 720, border: 0, background: '#d5d5d5' }} />
      ) : null}
    </Stack>
  );
}
