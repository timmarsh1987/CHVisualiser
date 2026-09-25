/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { generateImage } from './api';
import { resolveImageAsset } from './assetContext';
import {
  uploadGeneratedImage,
  type ImageUploadMode,
} from './contentHubUpload';
import type {
  GeneratedImage,
  ImageAssetContext,
  ImageTransformOptions,
} from './types';
import './index.css';

type Props = {
  client?: any;
  entity?: any;
  options: Partial<ImageTransformOptions>;
};

function message(error: unknown): string {
  return error instanceof Error ? error.message : 'Something went wrong. Please try again.';
}

export default function ImageTransformPanel({ client, entity, options }: Props) {
  const [asset, setAsset] = useState<ImageAssetContext | null>(null);
  const [loadingAsset, setLoadingAsset] = useState(true);
  const [prompt, setPrompt] = useState('');
  const [generated, setGenerated] = useState<GeneratedImage | null>(null);
  const [generating, setGenerating] = useState(false);
  const [applyingMode, setApplyingMode] = useState<ImageUploadMode | null>(null);
  const [error, setError] = useState('');
  const applying = applyingMode != null;

  const resolvedOptions = useMemo<ImageTransformOptions | null>(() => {
    const apiBaseUrl = options.apiBaseUrl?.trim();
    if (!apiBaseUrl) return null;
    return {
      apiBaseUrl,
      apiToken: options.apiToken?.trim(),
      uploadConfiguration: options.uploadConfiguration?.trim() || 'AssetUploadConfiguration',
      requestTimeoutMs: Math.max(165_000, options.requestTimeoutMs ?? 165_000),
    };
  }, [options]);

  useEffect(() => {
    let active = true;
    setLoadingAsset(true);
    resolveImageAsset(client, entity)
      .then((value) => {
        if (active) setAsset(value);
      })
      .finally(() => {
        if (active) setLoadingAsset(false);
      });
    return () => {
      active = false;
    };
  }, [client, entity]);

  useEffect(
    () => () => {
      if (generated) URL.revokeObjectURL(generated.objectUrl);
    },
    [generated]
  );

  const discard = useCallback(() => {
    if (generated) URL.revokeObjectURL(generated.objectUrl);
    setGenerated(null);
    setError('');
  }, [generated]);

  const generate = useCallback(async () => {
    if (!asset || !resolvedOptions || !prompt.trim()) return;
    setGenerating(true);
    setError('');
    if (generated) URL.revokeObjectURL(generated.objectUrl);
    setGenerated(null);

    try {
      setGenerated(
        await generateImage(
          asset.sourceUrl,
          prompt.trim(),
          resolvedOptions
        )
      );
    } catch (generationError) {
      setError(message(generationError));
    } finally {
      setGenerating(false);
    }
  }, [asset, generated, prompt, resolvedOptions]);

  const upload = useCallback(async (mode: ImageUploadMode) => {
    if (!asset || !generated || !resolvedOptions) return;
    setApplyingMode(mode);
    setError('');
    try {
      const uploadedAssetId = await uploadGeneratedImage(
        client,
        asset,
        generated,
        resolvedOptions,
        mode
      );
      if (mode === 'version' && !generated.isCutout) {
        window.location.reload();
      } else if (generated.isCutout && resolvedOptions.cutoutOutputMode === 'newVersion') {
        window.location.reload();
      } else {
        window.location.assign(`/en-us/asset/${uploadedAssetId}`);
      }
    } catch (uploadError) {
      setError(message(uploadError));
    } finally {
      setApplyingMode(null);
    }
  }, [asset, client, generated, resolvedOptions]);

  if (!resolvedOptions) {
    return (
      <section className="ch-image-transform">
        <div className="ch-image-transform__notice ch-image-transform__notice--error">
          Configure <code>apiBaseUrl</code> for this external component.
        </div>
      </section>
    );
  }

  if (loadingAsset) {
    return (
      <section className="ch-image-transform ch-image-transform--center">
        <span className="ch-image-transform__spinner" aria-hidden="true" />
        <p>Loading image…</p>
      </section>
    );
  }

  if (!asset) {
    return (
      <section className="ch-image-transform">
        <div className="ch-image-transform__notice ch-image-transform__notice--error">
          This component needs an image asset with an accessible preview and download rendition.
        </div>
      </section>
    );
  }

  return (
    <section className="ch-image-transform">
      <header className="ch-image-transform__header">
        <h2>Transform image</h2>
      </header>

      <div className={`ch-image-transform__images${generated ? ' ch-image-transform__images--split' : ''}`}>
        <figure>
          <span>Before</span>
          <img src={asset.previewUrl} alt={`Current version of ${asset.name}`} />
        </figure>
        {generated ? (
          <figure className="ch-image-transform__images-after">
            <span>After</span>
            <img src={generated.objectUrl} alt={generated.altText || `Generated version of ${asset.name}`} />
          </figure>
        ) : null}
      </div>

      <div className="ch-image-transform__controls">
        <label htmlFor="ch-image-transform-prompt">Describe the new image</label>
        <textarea
          id="ch-image-transform-prompt"
          value={prompt}
          maxLength={1024}
          rows={4}
          disabled={generating || applying}
          placeholder="For example: Remove the background, or reimagine this scene at sunset with warm cinematic lighting"
          onChange={(event) => setPrompt(event.target.value)}
        />

        {generating ? (
          <div className="ch-image-transform__working" role="status">
            <span className="ch-image-transform__spinner" aria-hidden="true" />
            <span>Generating with Seedream. Complex edits can take up to two minutes.</span>
          </div>
        ) : null}
        {error ? <div className="ch-image-transform__notice ch-image-transform__notice--error">{error}</div> : null}
        <div className="ch-image-transform__actions">
          {generated ? (
            <>
              <button type="button" className="ch-image-transform__button" disabled={applying} onClick={() => upload('version')}>
                {applyingMode === 'version' ? 'Creating version…' : 'Create version'}
              </button>
              <button type="button" className="ch-image-transform__button ch-image-transform__button--secondary" disabled={applying} onClick={() => upload('new-asset')}>
                {applyingMode === 'new-asset' ? 'Creating asset…' : 'Create as new asset'}
              </button>
              <button type="button" className="ch-image-transform__button ch-image-transform__button--secondary" disabled={applying} onClick={discard}>
                Discard and try again
              </button>
            </>
          ) : (
            <button type="button" className="ch-image-transform__button" disabled={!prompt.trim() || generating} onClick={generate}>
              {generating ? 'Generating…' : 'Generate'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
