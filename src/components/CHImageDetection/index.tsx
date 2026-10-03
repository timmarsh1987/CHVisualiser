/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';

import ImageDetectionPanel from './ImageDetectionPanel';
import { maskOptionsForLog, parseComponentOptions } from './options';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[CHImageDetection] Starting up...', 'color: #0B5CAB; font-weight: bold');

  return {
    render(context: any) {
      const options = parseComponentOptions(context?.options, context);
      console.log(
        '%c[CHImageDetection] context keys:',
        'color: #0B5CAB; font-weight: bold',
        Object.keys(context ?? {})
      );
      console.log(
        '%c[CHImageDetection] parsed options:',
        'color: #0B5CAB; font-weight: bold',
        maskOptionsForLog(options)
      );

      root.render(
        <ThemeProvider theme={context.theme}>
          <ImageDetectionPanel client={context.client} entity={context.entity} options={options} />
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}
