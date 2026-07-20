/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import ArticheckPanel from './ArticheckPanel';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[ArticheckPanel] Starting up...', 'color: #1D9E75; font-weight: bold');

  return {
    render(context: any) {
      console.log('%c[ArticheckPanel] Context:', 'color: #1D9E75; font-weight: bold', context);

      root.render(
        <ThemeProvider theme={context.theme}>
          <ArticheckPanel
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
