/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';

import BrandCompliancePanel from './BrandCompliancePanel';
import { maskOptionsForLog, parseComponentOptions } from './options';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[CHBrandCompliance] Starting up...', 'color: #0B5CAB; font-weight: bold');

  return {
    render(context: any) {
      const options = parseComponentOptions(context?.options, context);
      console.log(
        '%c[CHBrandCompliance] context keys:',
        'color: #0B5CAB; font-weight: bold',
        Object.keys(context ?? {})
      );
      console.log(
        '%c[CHBrandCompliance] parsed options:',
        'color: #0B5CAB; font-weight: bold',
        maskOptionsForLog(options)
      );

      root.render(
        <ThemeProvider theme={context.theme}>
          <BrandCompliancePanel
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
