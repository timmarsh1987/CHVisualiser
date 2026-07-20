import React, { useState } from 'react';

import { InlineSpinner } from './LoadingState';
import type { CrawlMode, IntentIntelligenceOptions } from './types';
import { CRAWL_MODES } from './types';
import { createSource } from './api';

type CreateSourceFormProps = {
  config: IntentIntelligenceOptions;
  onCreated: (sourceId: string) => void;
  onCancel: () => void;
};

export function CreateSourceForm({ config, onCreated, onCancel }: CreateSourceFormProps) {
  const [name, setName] = useState('');
  const [baseUrl, setBaseUrl] = useState('');
  const [maxPages, setMaxPages] = useState(50);
  const [includePathPrefix, setIncludePathPrefix] = useState('');
  const [excludePaths, setExcludePaths] = useState('');
  const [crawlMode, setCrawlMode] = useState<CrawlMode>('sitemap-first');
  const [jsRendering, setJsRendering] = useState(false);
  const [industryTags, setIndustryTags] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const source = await createSource(config, {
        name,
        baseUrl,
        maxPages,
        includePathPrefix: includePathPrefix || undefined,
        excludePaths: excludePaths || undefined,
        crawlMode,
        jsRendering,
        industryTags: industryTags || undefined,
      });

      onCreated(source.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create source.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="ch-intent-intelligence__panel">
      <div className="ch-intent-intelligence__ask-toolbar">
        <h3 className="ch-intent-intelligence__panel-title">Add website source</h3>
        <button
          type="button"
          className="ch-intent-intelligence__button ch-intent-intelligence__button--secondary"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>

      <form className="ch-intent-intelligence__form" onSubmit={(event) => void handleSubmit(event)}>
        <label className="ch-intent-intelligence__field">
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Company marketing site"
            required
            disabled={submitting}
          />
        </label>

        <label className="ch-intent-intelligence__field">
          <span>Website URL</span>
          <input
            type="url"
            value={baseUrl}
            onChange={(event) => setBaseUrl(event.target.value)}
            placeholder="https://example.com"
            required
            disabled={submitting}
          />
        </label>

        <label className="ch-intent-intelligence__field">
          <span>Max pages</span>
          <input
            type="number"
            min={1}
            max={500}
            value={maxPages}
            onChange={(event) => setMaxPages(Number(event.target.value))}
            disabled={submitting}
          />
        </label>

        <label className="ch-intent-intelligence__field">
          <span>Include path prefix (optional)</span>
          <input
            type="text"
            value={includePathPrefix}
            onChange={(event) => setIncludePathPrefix(event.target.value)}
            placeholder="/blog"
            disabled={submitting}
          />
        </label>

        <label className="ch-intent-intelligence__field">
          <span>Exclude paths (optional)</span>
          <textarea
            rows={3}
            value={excludePaths}
            onChange={(event) => setExcludePaths(event.target.value)}
            placeholder="/admin, /login"
            disabled={submitting}
          />
        </label>

        <label className="ch-intent-intelligence__field">
          <span>Crawl mode</span>
          <select
            value={crawlMode}
            onChange={(event) => setCrawlMode(event.target.value as CrawlMode)}
            disabled={submitting}
          >
            {CRAWL_MODES.map((mode) => (
              <option key={mode.id} value={mode.id}>
                {mode.label}
              </option>
            ))}
          </select>
        </label>

        <label className="ch-intent-intelligence__checkbox">
          <input
            type="checkbox"
            checked={jsRendering}
            onChange={(event) => setJsRendering(event.target.checked)}
            disabled={submitting}
          />
          <span>Use JS rendering when configured on the server</span>
        </label>

        <label className="ch-intent-intelligence__field">
          <span>Industry tags (optional, comma-separated)</span>
          <input
            type="text"
            value={industryTags}
            onChange={(event) => setIndustryTags(event.target.value)}
            placeholder="logistics, shipping"
            disabled={submitting}
          />
        </label>

        {error ? <p className="ch-intent-intelligence__error">{error}</p> : null}

        <div className="ch-intent-intelligence__actions">
          <button
            type="submit"
            className="ch-intent-intelligence__button ch-intent-intelligence__button--primary"
            disabled={submitting || !name.trim() || !baseUrl.trim()}
          >
            {submitting ? <InlineSpinner label="Creating…" /> : 'Create source'}
          </button>
        </div>
      </form>
    </div>
  );
}
