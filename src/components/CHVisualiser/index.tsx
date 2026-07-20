/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import GraphViewer from './GraphViewer';
import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);

  return {
    render(context: any) {
      root.render(
        <ThemeProvider theme={context.theme}>
          <GraphViewer
            client={context.client}
            options={context.options ?? {}}
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
