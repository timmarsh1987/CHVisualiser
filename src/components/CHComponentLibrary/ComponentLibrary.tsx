import React, { useState } from 'react';
import { BookOpen, LayoutTemplate } from 'lucide-react';
import './index.css';
import LibraryView from './LibraryView';
import PageBuilder from './PageBuilder';

type AppTab = 'library' | 'builder';

export interface ComponentLibraryProps {
  initialComponent?: string;
}

export default function ComponentLibrary({ initialComponent }: ComponentLibraryProps) {
  const [tab, setTab] = useState<AppTab>('library');

  return (
    <div className="ch-app">
      <nav className="ch-app-tabs" aria-label="Component library views">
        <button
          type="button"
          className={`ch-app-tab${tab === 'library' ? ' active' : ''}`}
          onClick={() => setTab('library')}
        >
          <BookOpen size={14} />
          Component Library
        </button>
        <button
          type="button"
          className={`ch-app-tab${tab === 'builder' ? ' active' : ''}`}
          onClick={() => setTab('builder')}
        >
          <LayoutTemplate size={14} />
          Page Builder
        </button>
      </nav>

      <div className="ch-root">
        {tab === 'library' ? (
          <LibraryView initialComponent={initialComponent} />
        ) : (
          <PageBuilder />
        )}
      </div>
    </div>
  );
}
