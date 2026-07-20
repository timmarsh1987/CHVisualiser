/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import SalesforceArtworkPanel from './SalesforceArtworkPanel';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[SalesforceArtworkPanel] Starting up...', 'color: #1D9E75; font-weight: bold');

  return {
    render(context: any) {
      console.log('%c[SalesforceArtworkPanel] Context:', 'color: #1D9E75; font-weight: bold', context);

      root.render(
        <ThemeProvider theme={context.theme}>
          <SalesforceArtworkPanel
            client={context.client}
            entity={context.entity}
            options={context.options}
          />
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}
