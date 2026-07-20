import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface ContentHubSearchApi {
  addFilters: (searchIdentifier: string, filters: unknown[]) => void;
  updateQuery: (searchIdentifier: string, query: string) => void;
  updateFullTextFilter: (searchIdentifier: string, text: string) => void;
  clearFullTextFilter: (searchIdentifier: string) => void;
  getEventSearchIdentifier: (searchIdentifier: string) => string;
}

export interface ContentHubSelectionApi {
  addToSelection: (ids: number[], selectionPoolIdentifier: string, subPoolId?: number) => void;
  removeFromSelection: (ids: number[], selectionPoolIdentifier: string, subPoolId?: number) => void;
  clearSelection: (
    selectionPoolIdentifier: string,
    subPoolId?: number,
    definitionNames?: string[]
  ) => void;
}

export interface ContentHubNotifierApi {
  notifySuccess: (message: string) => void;
  notifyError: (message: string) => void;
  notifyWarning: (message: string) => void;
  notifyInfo: (message: string) => void;
}

export interface ContentHubIntegrationValue {
  searchIdentifier?: string;
  selectionPoolIdentifier?: string;
  search?: ContentHubSearchApi;
  selection?: ContentHubSelectionApi;
  notifier?: ContentHubNotifierApi;
}

const ContentHubIntegrationContext = createContext<ContentHubIntegrationValue>({});

export function ContentHubIntegrationProvider({
  value,
  children,
}: {
  value: ContentHubIntegrationValue;
  children: React.ReactNode;
}) {
  const memoized = useMemo(
    () => value,
    [
      value.searchIdentifier,
      value.selectionPoolIdentifier,
      value.search,
      value.selection,
      value.notifier,
    ]
  );

  return (
    <ContentHubIntegrationContext.Provider value={memoized}>
      {children}
    </ContentHubIntegrationContext.Provider>
  );
}

export function useContentHubIntegration(): ContentHubIntegrationValue {
  return useContext(ContentHubIntegrationContext);
}

type SearchFinishedDetail = {
  searchIdentifier: string;
  fullText: string;
  ids: number[];
};

export function useContentHubSearchResults(): {
  resultIds: number[];
  fullText: string;
  hasSearchIntegration: boolean;
} {
  const { searchIdentifier, search } = useContentHubIntegration();
  const [resultIds, setResultIds] = useState<number[]>([]);
  const [fullText, setFullText] = useState('');

  useEffect(() => {
    if (!searchIdentifier || !search?.getEventSearchIdentifier) {
      setResultIds([]);
      setFullText('');
      return;
    }

    const expectedIdentifier = search.getEventSearchIdentifier(searchIdentifier);

    const onSearchFinished = (event: Event) => {
      const detail = (event as CustomEvent<SearchFinishedDetail>).detail;
      if (!detail || detail.searchIdentifier !== expectedIdentifier) return;
      setResultIds(Array.isArray(detail.ids) ? detail.ids : []);
      setFullText(detail.fullText ?? '');
    };

    window.addEventListener('SEARCH_FINISHED', onSearchFinished);
    return () => window.removeEventListener('SEARCH_FINISHED', onSearchFinished);
  }, [search, searchIdentifier]);

  useEffect(() => {
    if (!searchIdentifier || !search?.addFilters) return;

    try {
      search.addFilters(searchIdentifier, [
        {
          definition: 'M.Asset',
          hidden: false,
          multi: false,
          visible: true,
        },
      ]);
    } catch {
      // Search component may not be on this page yet.
    }
  }, [search, searchIdentifier]);

  return {
    resultIds,
    fullText,
    hasSearchIntegration: Boolean(searchIdentifier && search),
  };
}
