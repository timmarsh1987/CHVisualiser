/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { logInfo } from './debugLog';
import MarketingBuilderPanel from './MarketingBuilderPanel';
import type { ContentHubIntegrationValue } from './contentHubIntegration';

function readIntegrationConfig(config: unknown): Pick<
  ContentHubIntegrationValue,
  'searchIdentifier' | 'selectionPoolIdentifier'
> {
  if (config == null) return {};

  const record =
    typeof config === 'string'
      ? (() => {
          try {
            return JSON.parse(config) as Record<string, unknown>;
          } catch {
            return null;
          }
        })()
      : typeof config === 'object' && !Array.isArray(config)
        ? (config as Record<string, unknown>)
        : null;

  if (!record) return {};

  return {
    searchIdentifier:
      typeof record.searchIdentifier === 'string' ? record.searchIdentifier.trim() : undefined,
    selectionPoolIdentifier:
      typeof record.selectionPoolIdentifier === 'string'
        ? record.selectionPoolIdentifier.trim()
        : undefined,
  };
}

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  logInfo('startup', 'CHMarketingBuilder initialised');

  return {
    async render(context: any) {
      const configKeys = context.config
        ? typeof context.config === 'string'
          ? 'json-string'
          : Object.keys(context.config).join(', ') || '(empty object)'
        : '(none)';
      logInfo(
        'context',
        `entityId=${context.entity?.systemProperties?.id ?? context.options?.entityId ?? 'n/a'}, config=${configKeys}`
      );

      const integrationConfig = readIntegrationConfig(context.config);

      root.render(
        <ThemeProvider theme={context.theme}>
          <MarketingBuilderPanel
            client={context.client}
            entity={context.entity}
            options={context.options}
            config={context.config}
            contentHubApi={context.api}
            searchIdentifier={integrationConfig.searchIdentifier}
            selectionPoolIdentifier={integrationConfig.selectionPoolIdentifier}
          />
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}
