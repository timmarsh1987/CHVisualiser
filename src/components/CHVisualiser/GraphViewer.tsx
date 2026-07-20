/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getDefinitionName } from '../../utils/entityDomain';
import { fetchEntityDefinitionPages } from './api';
import EntityDetailPanel from './EntityDetailPanel';
import EntityGridView from './EntityGridView';
import EntitySidebar from './EntitySidebar';
import NetworkView from './NetworkView';
import { sortDefinitions, getEntityConnections } from './entityConnections';
import { parseEntityDefinitions } from './entityDefinitions';
import {
  arrangeConnectedNodesInCircle,
  calculateInitialPosition,
  getNodePosition,
  resolveCollisionsOnDrop,
  resolveInitialOverlaps,
} from './graphLayout';
import type {
  EntityDefinition,
  GraphViewerProps,
  LoadingProgress,
  NetworkTransform,
  SortOrder,
  ViewMode,
} from './types';
import './index.css';

const GraphViewer: React.FC<GraphViewerProps> = ({ client, options, entity }) => {
  const [definitions, setDefinitions] = useState<EntityDefinition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEntity, setSelectedEntity] = useState<EntityDefinition | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingProgress, setLoadingProgress] = useState<LoadingProgress>({ current: 0, total: 0 });
  const [viewMode, setViewMode] = useState<ViewMode>('network');
  const [networkTransform, setNetworkTransform] = useState<NetworkTransform>({
    x: 0,
    y: 0,
    scale: 1,
  });
  const [highlightedPaths, setHighlightedPaths] = useState<Set<string>>(new Set());
  const [focusedNode, setFocusedNode] = useState<EntityDefinition | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [nodePositions, setNodePositions] = useState<Map<number, { x: number; y: number }>>(
    new Map()
  );
  const [draggedNode, setDraggedNode] = useState<EntityDefinition | null>(null);

  const filteredDefinitions = useMemo(
    () => sortDefinitions(definitions, searchTerm, sortOrder, definitions),
    [definitions, searchTerm, sortOrder]
  );

  useEffect(() => {
    const controller = new AbortController();
    let mounted = true;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const raw = await fetchEntityDefinitionPages(client, {
          pageSize: options.pageSize,
          signal: controller.signal,
          onProgress: (progress) => {
            if (mounted) setLoadingProgress(progress);
          },
        });

        if (!mounted) return;

        const parsed = parseEntityDefinitions(raw);
        if (parsed.length === 0) {
          throw new Error('No entity definitions found');
        }

        setDefinitions(parsed);
        setLoading(false);
      } catch (err) {
        if (!mounted || (err instanceof DOMException && err.name === 'AbortError')) return;
        setError(
          `Failed to load entity definitions: ${
            err instanceof Error ? err.message : String(err)
          }`
        );
        setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, [client, options.pageSize]);

  useEffect(() => {
    if (definitions.length === 0 || nodePositions.size > 0) return;

    const initialPositions = new Map<number, { x: number; y: number }>();
    definitions.forEach((entityDef) => {
      initialPositions.set(
        entityDef.id,
        calculateInitialPosition(entityDef, definitions)
      );
    });
    setNodePositions(resolveInitialOverlaps(initialPositions));
  }, [definitions, nodePositions.size]);

  const focusDefinition = useCallback(
    (entityDef: EntityDefinition | null) => {
      if (!entityDef) return;
      setSelectedEntity(entityDef);
      scrollEntityIntoView(entityDef.id);
    },
    []
  );

  useEffect(() => {
    if (definitions.length === 0) return;

    const targetId = options.entityId ?? entity?.id;
    if (typeof targetId === 'number') {
      const match = definitions.find((d) => d.id === targetId);
      if (match) {
        focusDefinition(match);
        return;
      }
    }

    if (entity) {
      const definitionName = getDefinitionName(entity);
      const match = definitions.find((d) => d.name === definitionName);
      if (match) focusDefinition(match);
    }
  }, [definitions, options.entityId, entity, focusDefinition]);

  const centerNodeInView = useCallback(
    (entityDef: EntityDefinition) => {
      if (viewMode !== 'network') return;
      const nodePos = getNodePosition(entityDef, filteredDefinitions, nodePositions);
      setNetworkTransform((prev) => ({
        ...prev,
        x: 600 - nodePos.x * prev.scale,
        y: 400 - nodePos.y * prev.scale,
      }));
    },
    [viewMode, filteredDefinitions, nodePositions]
  );

  const handleEntityClick = useCallback(
    (entityDef: EntityDefinition) => {
      if (selectedEntity?.id === entityDef.id) {
        setSelectedEntity(null);
        setFocusedNode(null);
        setHighlightedPaths(new Set());
        return;
      }

      setSelectedEntity(entityDef);
      scrollEntityIntoView(entityDef.id);

      if (viewMode === 'network') {
        setFocusedNode(entityDef);
        const connections = getEntityConnections(entityDef, definitions);
        const pathIds = new Set<string>();
        connections.forEach((connected) => {
          pathIds.add(`${entityDef.id}-${connected.id}`);
          pathIds.add(`${connected.id}-${entityDef.id}`);
        });
        setHighlightedPaths(pathIds);

        const centerPos = getNodePosition(entityDef, filteredDefinitions, nodePositions);
        setNodePositions((prev) =>
          arrangeConnectedNodesInCircle(entityDef, connections, centerPos, prev)
        );
        setTimeout(() => centerNodeInView(entityDef), 50);
      }
    },
    [
      selectedEntity,
      viewMode,
      definitions,
      filteredDefinitions,
      nodePositions,
      centerNodeInView,
    ]
  );

  const scrollEntityIntoView = (entityId: number) => {
    setTimeout(() => {
      const el = document.querySelector(`[data-entity-id="${entityId}"]`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const resetNetworkView = () => {
    setNetworkTransform({ x: 0, y: 0, scale: 1 });
    setFocusedNode(null);
    setHighlightedPaths(new Set());
    setSelectedEntity(null);
  };

  const handleMouseWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? 0.9 : 1.1;
    const rect = (event.currentTarget as Element).getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const worldX = (mouseX - networkTransform.x) / networkTransform.scale;
    const worldY = (mouseY - networkTransform.y) / networkTransform.scale;
    const newScale = Math.max(0.3, Math.min(3, networkTransform.scale * delta));
    setNetworkTransform({
      x: mouseX - worldX * newScale,
      y: mouseY - worldY * newScale,
      scale: newScale,
    });
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    const target = event.target as Element;
    if (target.tagName === 'svg' || target.classList.contains('network-svg')) {
      setIsDragging(true);
      setDragStart({ x: event.clientX, y: event.clientY });
      event.preventDefault();
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (draggedNode) {
      const deltaX = (event.clientX - dragStart.x) / networkTransform.scale;
      const deltaY = (event.clientY - dragStart.y) / networkTransform.scale;
      const currentPos = getNodePosition(draggedNode, filteredDefinitions, nodePositions);
      setNodePositions((prev) =>
        new Map(prev).set(draggedNode.id, {
          x: currentPos.x + deltaX,
          y: currentPos.y + deltaY,
        })
      );
      setDragStart({ x: event.clientX, y: event.clientY });
      return;
    }

    if (!isDragging) return;
    const deltaX = event.clientX - dragStart.x;
    const deltaY = event.clientY - dragStart.y;
    setNetworkTransform((prev) => ({
      ...prev,
      x: prev.x + deltaX,
      y: prev.y + deltaY,
    }));
    setDragStart({ x: event.clientX, y: event.clientY });
    event.preventDefault();
  };

  const handleMouseUp = () => {
    if (draggedNode) {
      const droppedPosition = getNodePosition(draggedNode, filteredDefinitions, nodePositions);
      setNodePositions(resolveCollisionsOnDrop(droppedPosition, draggedNode.id, nodePositions));
    }
    setIsDragging(false);
    setDraggedNode(null);
  };

  const handleNodeMouseDown = (event: React.MouseEvent, entityDef: EntityDefinition) => {
    event.stopPropagation();
    setDraggedNode(entityDef);
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  if (loading) {
    return (
      <div className="ch-visualiser">
        <div className="graph-loading">
          <div>Loading entity definitions…</div>
          {loadingProgress.total > 0 && (
            <div className="loading-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(loadingProgress.current / loadingProgress.total) * 100}%`,
                  }}
                />
              </div>
              <div className="progress-text">
                {loadingProgress.current} of {loadingProgress.total} loaded
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ch-visualiser">
        <div className="graph-error" role="alert">
          <p>{error}</p>
          <button
            type="button"
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ch-visualiser">
      <div className="contentful-layout three-column">
        <EntitySidebar
          definitions={definitions}
          filteredDefinitions={filteredDefinitions}
          selectedEntity={selectedEntity}
          searchTerm={searchTerm}
          sortOrder={sortOrder}
          onSearchChange={setSearchTerm}
          onSortChange={setSortOrder}
          onEntityClick={handleEntityClick}
        />

        <div className="main-content">
          <div className="content-header">
            <h2>Entity relationship map</h2>
            <div className="header-controls">
              <div className="view-toggle" role="tablist" aria-label="View mode">
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === 'grid'}
                  className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  Grid
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === 'network'}
                  className={`view-button ${viewMode === 'network' ? 'active' : ''}`}
                  onClick={() => setViewMode('network')}
                >
                  Network
                </button>
              </div>
              <div className="header-info">{definitions.length} definitions loaded</div>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <EntityGridView
              definitions={filteredDefinitions}
              allDefinitions={definitions}
              selectedEntity={selectedEntity}
              onEntityClick={handleEntityClick}
            />
          ) : (
            <NetworkView
              filteredDefinitions={filteredDefinitions}
              allDefinitions={definitions}
              selectedEntity={selectedEntity}
              focusedNode={focusedNode}
              highlightedPaths={highlightedPaths}
              networkTransform={networkTransform}
              nodePositions={nodePositions}
              isDragging={isDragging}
              draggedNode={draggedNode}
              onEntityClick={handleEntityClick}
              onReset={resetNetworkView}
              onZoomIn={() =>
                setNetworkTransform((prev) => ({
                  ...prev,
                  scale: Math.min(prev.scale * 1.3, 3),
                }))
              }
              onZoomOut={() =>
                setNetworkTransform((prev) => ({
                  ...prev,
                  scale: Math.max(prev.scale / 1.3, 0.3),
                }))
              }
              onWheel={handleMouseWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onNodeMouseDown={handleNodeMouseDown}
            />
          )}
        </div>

        <EntityDetailPanel
          definitions={definitions}
          selectedEntity={selectedEntity}
          options={options}
          onEntityClick={handleEntityClick}
        />
      </div>
    </div>
  );
};

export default GraphViewer;
