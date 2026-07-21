/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';

import FineArtTaggingPanel from './FineArtTaggingPanel';
import { maskOptionsForLog, parseComponentOptions } from './options';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[CHFineArtTagging] Starting up...', 'color: #0B5CAB; font-weight: bold');

  return {
    render(context: any) {
      const options = parseComponentOptions(context?.options, context);
      console.log(
        '%c[CHFineArtTagging] context keys:',
        'color: #0B5CAB; font-weight: bold',
        Object.keys(context ?? {})
      );
      console.log(
        '%c[CHFineArtTagging] parsed options:',
        'color: #0B5CAB; font-weight: bold',
        maskOptionsForLog(options)
      );

      root.render(
        <ThemeProvider theme={context.theme}>
          <FineArtTaggingPanel
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
