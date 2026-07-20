import React from 'react';
import { getEntityConnections } from './entityConnections';
import { getEntityColor } from './entityStyle';
import type { EntityDefinition } from './types';

interface EntityGridViewProps {
  definitions: EntityDefinition[];
  allDefinitions: EntityDefinition[];
  selectedEntity: EntityDefinition | null;
  onEntityClick: (entity: EntityDefinition) => void;
}

const EntityGridView: React.FC<EntityGridViewProps> = ({
  definitions,
  allDefinitions,
  selectedEntity,
  onEntityClick,
}) => (
  <div className="entity-grid">
    {definitions.map((def) => {
      const connections = getEntityConnections(def, allDefinitions);
      const entityColor = getEntityColor(def);
      return (
        <div
          key={def.id}
          className={`grid-entity-node ${selectedEntity?.id === def.id ? 'selected' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onEntityClick(def);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onEntityClick(def);
            }
          }}
          role="button"
          tabIndex={0}
          style={{ borderColor: entityColor }}
        >
          <div className="entity-icon" style={{ color: entityColor }} aria-hidden="true">
            ◇
          </div>
          <div className="entity-name">{def.name}</div>
          <div className="entity-connections">
            {connections.length} connection{connections.length === 1 ? '' : 's'}
          </div>
        </div>
      );
    })}
  </div>
);

export default EntityGridView;
