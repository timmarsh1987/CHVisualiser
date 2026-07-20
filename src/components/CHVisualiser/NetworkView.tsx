import React, { useMemo } from 'react';
import { LARGE_NETWORK_THRESHOLD, VIEW_HEIGHT, VIEW_WIDTH } from './constants';
import { getEntityConnections } from './entityConnections';
import { getEntityColor } from './entityStyle';
import {
  getArrowMarkers,
  getNodePosition,
} from './graphLayout';
import type { EntityDefinition, NetworkTransform } from './types';

interface NetworkViewProps {
  filteredDefinitions: EntityDefinition[];
  allDefinitions: EntityDefinition[];
  selectedEntity: EntityDefinition | null;
  focusedNode: EntityDefinition | null;
  highlightedPaths: Set<string>;
  networkTransform: NetworkTransform;
  nodePositions: Map<number, { x: number; y: number }>;
  isDragging: boolean;
  draggedNode: EntityDefinition | null;
  onEntityClick: (entity: EntityDefinition) => void;
  onReset: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onWheel: (event: React.WheelEvent) => void;
  onMouseDown: (event: React.MouseEvent) => void;
  onMouseMove: (event: React.MouseEvent) => void;
  onMouseUp: () => void;
  onNodeMouseDown: (event: React.MouseEvent, entity: EntityDefinition) => void;
}

interface NetworkEdge {
  key: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  highlighted: boolean;
  arrows: { start: string; end: string };
}

const NetworkView: React.FC<NetworkViewProps> = ({
  filteredDefinitions,
  allDefinitions,
  selectedEntity,
  focusedNode,
  highlightedPaths,
  networkTransform,
  nodePositions,
  isDragging,
  draggedNode,
  onEntityClick,
  onReset,
  onZoomIn,
  onZoomOut,
  onWheel,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onNodeMouseDown,
}) => {
  const connectionCount = useMemo(
    () =>
      filteredDefinitions.reduce(
        (total, def) => total + getEntityConnections(def, allDefinitions).length,
        0
      ),
    [filteredDefinitions, allDefinitions]
  );

  const edges = useMemo(() => {
    const renderedConnections = new Set<string>();
    const result: NetworkEdge[] = [];
    const nodeRadius = 30;

    filteredDefinitions.forEach((def) => {
      const connections = getEntityConnections(def, allDefinitions);
      const sourcePos = getNodePosition(def, filteredDefinitions, nodePositions);

      connections.forEach((connectedDef) => {
        const connectionKey = `${def.id}->${connectedDef.id}`;
        const reverseKey = `${connectedDef.id}->${def.id}`;
        const relation = def.relations.find(
          (rel) => rel.target === connectedDef.name || rel.target === connectedDef.id.toString()
        );
        const isManyToMany = relation?.cardinality === 'ManyToMany';

        if (
          !isManyToMany &&
          (renderedConnections.has(connectionKey) || renderedConnections.has(reverseKey))
        ) {
          return;
        }
        if (!isManyToMany) {
          renderedConnections.add(connectionKey);
        }

        if (!filteredDefinitions.some((d) => d.id === connectedDef.id)) return;

        const targetPos = getNodePosition(connectedDef, filteredDefinitions, nodePositions);
        const dx = targetPos.x - sourcePos.x;
        const dy = targetPos.y - sourcePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 20) return;

        const factor = (distance - nodeRadius) / distance;
        const adjStartX = sourcePos.x + (dx * nodeRadius) / distance;
        const adjStartY = sourcePos.y + (dy * nodeRadius) / distance;
        const adjEndX = sourcePos.x + dx * factor;
        const adjEndY = sourcePos.y + dy * factor;

        const connectionId = `${def.id}-${connectedDef.id}`;
        const isConnectedToFocused = Boolean(
          focusedNode && (def.id === focusedNode.id || connectedDef.id === focusedNode.id)
        );
        const isConnectedToSelected = Boolean(
          selectedEntity &&
            (def.id === selectedEntity.id || connectedDef.id === selectedEntity.id)
        );
        if (focusedNode && !isConnectedToFocused) return;

        const highlighted =
          highlightedPaths.has(connectionId) || isConnectedToSelected;

        result.push({
          key: connectionId,
          x1: adjStartX,
          y1: adjStartY,
          x2: adjEndX,
          y2: adjEndY,
          highlighted,
          arrows: getArrowMarkers(relation?.cardinality, highlighted),
        });
      });
    });

    return result;
  }, [
    filteredDefinitions,
    allDefinitions,
    nodePositions,
    focusedNode,
    selectedEntity,
    highlightedPaths,
  ]);

  return (
    <div className="network-view">
      <div className="network-controls">
        <div className="network-info">
          Network view: {filteredDefinitions.length} nodes, {connectionCount} connections
          {focusedNode && (
            <span className="focused-info"> | Focused: {focusedNode.name}</span>
          )}
        </div>
        <div className="network-zoom-controls">
          <button
            type="button"
            className="zoom-btn"
            onClick={onZoomOut}
            title="Zoom out"
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="zoom-level">{Math.round(networkTransform.scale * 100)}%</span>
          <button
            type="button"
            className="zoom-btn"
            onClick={onZoomIn}
            title="Zoom in"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            className="reset-btn"
            onClick={onReset}
            title="Reset view"
            aria-label="Reset view"
          >
            Reset
          </button>
        </div>
        {filteredDefinitions.length > LARGE_NETWORK_THRESHOLD && (
          <div className="performance-warning" role="status">
            Large network ({filteredDefinitions.length} nodes) — use search to filter for better
            performance
          </div>
        )}
      </div>
      <div
        className={`network-container ${isDragging || draggedNode ? 'dragging' : ''}`}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <svg
          className="network-svg"
          width="100%"
          height="100%"
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          role="img"
          aria-label="Entity definition relationship network"
        >
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#b0bec5" />
            </marker>
            <marker
              id="arrowhead-highlight"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#2c5aa0" />
            </marker>
            <marker
              id="arrowhead-reverse"
              markerWidth="10"
              markerHeight="7"
              refX="1"
              refY="3.5"
              orient="auto"
            >
              <polygon points="10 0, 0 3.5, 10 7" fill="#b0bec5" />
            </marker>
            <marker
              id="arrowhead-reverse-highlight"
              markerWidth="10"
              markerHeight="7"
              refX="1"
              refY="3.5"
              orient="auto"
            >
              <polygon points="10 0, 0 3.5, 10 7" fill="#2c5aa0" />
            </marker>
          </defs>

          <g
            transform={`translate(${networkTransform.x}, ${networkTransform.y}) scale(${networkTransform.scale})`}
          >
            {edges.map((edge) => (
              <line
                key={edge.key}
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                className={`connection-line ${edge.highlighted ? 'highlighted' : ''}`}
                strokeWidth={edge.highlighted ? '3' : '1'}
                stroke={edge.highlighted ? '#2c5aa0' : '#b0bec5'}
                strokeOpacity={edge.highlighted ? '0.8' : '0.3'}
                markerStart={edge.arrows.start}
                markerEnd={edge.arrows.end}
              />
            ))}

            {filteredDefinitions.map((def) => {
              const connections = getEntityConnections(def, allDefinitions);
              const position = getNodePosition(def, filteredDefinitions, nodePositions);
              const nodeRadius = 20 + Math.min(connections.length, 10);
              const entityColor = getEntityColor(def);
              const isFocused = focusedNode?.id === def.id;
              const isSelected = selectedEntity?.id === def.id;
              const isConnectedToFocused = Boolean(
                focusedNode &&
                  getEntityConnections(focusedNode, allDefinitions).some((c) => c.id === def.id)
              );
              const shouldHide = Boolean(focusedNode && !isFocused && !isConnectedToFocused);

              return (
                <g key={def.id} className="network-node-group">
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r={nodeRadius}
                    className={`network-node ${isSelected ? 'selected' : ''} ${isFocused ? 'focused' : ''} ${shouldHide ? 'hidden' : ''}`}
                    fill={isSelected ? entityColor : 'white'}
                    stroke={entityColor}
                    strokeWidth={isSelected ? 4 : 2.5}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEntityClick(def);
                    }}
                    onMouseDown={(e) => onNodeMouseDown(e, def)}
                    style={{ cursor: draggedNode?.id === def.id ? 'grabbing' : 'grab' }}
                  />
                  <text
                    x={position.x}
                    y={position.y + 3}
                    className={`network-count ${shouldHide ? 'hidden' : ''}`}
                    textAnchor="middle"
                    fill={isSelected ? 'white' : entityColor}
                    style={{ pointerEvents: 'none' }}
                  >
                    {connections.length}
                  </text>
                  <text
                    x={position.x}
                    y={position.y + nodeRadius + 12}
                    className={`network-label ${shouldHide ? 'hidden' : ''}`}
                    textAnchor="middle"
                    fill={entityColor}
                    style={{ pointerEvents: 'none' }}
                  >
                    {def.name.length > 12 ? `${def.name.substring(0, 9)}...` : def.name}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default NetworkView;
