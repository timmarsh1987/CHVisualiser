/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import IntentIntelligencePanel from './IntentIntelligencePanel';
import { prefetchAskHistory, prefetchSources, prefetchTrends } from './api';
import { maskOptionsForLog, parseComponentOptions } from './options';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[CHIntentIntelligence] Starting up...', 'color: #7F77DD; font-weight: bold');

  return {
    render(context: any) {
      const options = parseComponentOptions(context?.options, context);
      console.log('%c[CHIntentIntelligence] context keys:', 'color: #7F77DD; font-weight: bold', Object.keys(context ?? {}));
      console.log('%c[CHIntentIntelligence] context.config:', 'color: #7F77DD; font-weight: bold', context?.config);
      console.log('%c[CHIntentIntelligence] parsed options:', 'color: #7F77DD; font-weight: bold', maskOptionsForLog(options));

      if (options?.apiBaseUrl?.trim() && options?.apiToken?.trim()) {
        void prefetchTrends({
          apiBaseUrl: options.apiBaseUrl.trim(),
          apiToken: options.apiToken.trim(),
          initialTrendId: options.initialTrendId,
          defaultView: options.defaultView ?? 'trends',
          limit: options.limit,
          loadAllTrends: options.loadAllTrends !== false,
          entitySlug: options.entitySlug,
        });
        void prefetchAskHistory({
          apiBaseUrl: options.apiBaseUrl.trim(),
          apiToken: options.apiToken.trim(),
          initialTrendId: options.initialTrendId,
          defaultView: options.defaultView ?? 'trends',
          limit: options.limit,
          loadAllTrends: options.loadAllTrends !== false,
          entitySlug: options.entitySlug,
        });
        void prefetchSources({
          apiBaseUrl: options.apiBaseUrl.trim(),
          apiToken: options.apiToken.trim(),
          initialTrendId: options.initialTrendId,
          defaultView: options.defaultView ?? 'trends',
          limit: options.limit,
          loadAllTrends: options.loadAllTrends !== false,
          entitySlug: options.entitySlug,
        });
      }

      root.render(
        <ThemeProvider theme={context.theme}>
          <IntentIntelligencePanel
            client={context.client}
            entity={context.entity}
            options={options}
          />
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}
