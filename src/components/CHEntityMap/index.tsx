/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import LocationMap from './LocationMap';
import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[LocationMap] Starting up...', 'color: #6366f1; font-weight: bold');

  return {
    render(context: any) {
      console.log('%c[LocationMap] Context:', 'color: #6366f1; font-weight: bold', context);

      root.render(
        <ThemeProvider theme={context.theme}>
          <LocationMap
            client={context.client}
            options={context.options}
            entity={context.entity}
          />
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}
