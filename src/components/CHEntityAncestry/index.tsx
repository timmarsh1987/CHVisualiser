/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Ancestry from './Ancestry';
import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';

const OptionsContext = React.createContext<any>(null);

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[Ancestry] Starting up...', 'color: #7F77DD; font-weight: bold');

  return {
    render(context: any) {
      console.log('%c[Ancestry] Context:', 'color: #7F77DD; font-weight: bold', context);
      console.log('%c[Ancestry] client:', 'color: #7F77DD; font-weight: bold', context.client);
      console.log('%c[Ancestry] options:', 'color: #7F77DD; font-weight: bold', context.options);
      console.log('%c[Ancestry] entity:', 'color: #7F77DD; font-weight: bold', context.entity);

      root.render(
        <ThemeProvider theme={context.theme}>
          <OptionsContext.Provider value={context.options}>
            <OptionsContext.Consumer>
              {(options) => (
                <Ancestry
                  client={context.client}
                  options={options}
                  entity={context.entity}
                />
              )}
            </OptionsContext.Consumer>
          </OptionsContext.Provider>
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}