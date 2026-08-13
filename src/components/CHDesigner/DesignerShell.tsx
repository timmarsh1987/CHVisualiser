import React from 'react';
import DesignerCanvas from './DesignerCanvas';
import LayersPanel from './LayersPanel';
import PropertiesPane from './PropertiesPane';
import { DesignerProvider } from './store';
import Toolbar from './Toolbar';

export default function DesignerShell() {
  return (
    <DesignerProvider>
      <div className="chd-root">
        <Toolbar />
        <div className="chd-main">
          <LayersPanel />
          <DesignerCanvas />
          <PropertiesPane />
        </div>
      </div>
    </DesignerProvider>
  );
}
