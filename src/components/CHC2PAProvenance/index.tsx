/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import ProvenancePanel from './ProvenancePanel';
import { parseC2PAProvenanceOptions } from './options';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  return {
    render(context: any) {
      root.render(
        <ThemeProvider theme={context.theme}>
          <ProvenancePanel
            client={context.client}
            entity={context.entity}
            options={parseC2PAProvenanceOptions(context.options, context)}
          />
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}
