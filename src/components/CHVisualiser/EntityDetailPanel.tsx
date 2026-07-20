import React from 'react';
import { buildDefinitionEditUrl } from './api';
import { getEntityConnections } from './entityConnections';
import { getEntityColor } from './entityStyle';
import type { EntityDefinition, GraphViewerOptions } from './types';

interface EntityDetailPanelProps {
  definitions: EntityDefinition[];
  selectedEntity: EntityDefinition | null;
  options: GraphViewerOptions;
  onEntityClick: (entity: EntityDefinition) => void;
}

const EntityDetailPanel: React.FC<EntityDetailPanelProps> = ({
  definitions,
  selectedEntity,
  options,
  onEntityClick,
}) => (
  <div className="detail-panel">
    <div className="detail-header">
      <div className="detail-title-section">
        {selectedEntity?.is_taxonomy_item_definition && (
          <span className="taxonomy-badge">Taxonomy</span>
        )}
        <h3>{selectedEntity ? selectedEntity.name : 'Select an entity definition'}</h3>
      </div>
      <div className="detail-header-actions">
        {selectedEntity?.is_built_in && <span className="built-in-badge">Built-in</span>}
        {selectedEntity && !selectedEntity.is_built_in && (
          <span className="custom-badge">Custom</span>
        )}
        {selectedEntity && (
          <button
            type="button"
            className="edit-button"
            onClick={() => {
              window.open(buildDefinitionEditUrl(selectedEntity.id, options), '_blank');
            }}
            title="Edit entity definition"
            aria-label="Edit entity definition"
          >
            Edit
          </button>
        )}
      </div>
    </div>

    <div className="detail-content">
      {selectedEntity ? (
        <>
          <div className="detail-section">
            <h4>Basic information</h4>
            <div className="info-grid">
              <div className="info-item">
                <label>ID</label>
                <span>{selectedEntity.id}</span>
              </div>
              <div className="info-item">
                <label>Name</label>
                <span>{selectedEntity.name}</span>
              </div>
              {selectedEntity.description && (
                <div className="info-item">
                  <label>Description</label>
                  <span>{selectedEntity.description}</span>
                </div>
              )}
            </div>
          </div>

          {selectedEntity.properties && selectedEntity.properties.length > 0 && (
            <div className="detail-section">
              <h4>Properties ({selectedEntity.properties.length})</h4>
              <div className="properties-list">
                {selectedEntity.properties.map((prop) => (
                  <div key={prop.name} className="property-item">
                    <span className="property-name">
                      {prop.name}
                      {prop.is_system_owned && (
                        <span className="system-owned-icon" title="System owned">
                          *
                        </span>
                      )}
                    </span>
                    <span className="property-type">{prop.type}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedEntity.relations.length > 0 && (
            <div className="detail-section">
              <h4>Relations ({selectedEntity.relations.length})</h4>
              <div className="relations-list">
                {selectedEntity.relations.map((rel, index) => (
                  <div key={`${rel.name ?? rel.target}-${index}`} className="relation-item">
                    <span className="relation-type">
                      {rel.role && rel.cardinality
                        ? `${rel.role} (${rel.cardinality})`
                        : rel.type}
                    </span>
                    {rel.role === 'Parent' && (
                      <span className="relation-badge parent" title="Parent">
                        Parent
                      </span>
                    )}
                    {rel.role === 'Child' && (
                      <span className="relation-badge child" title="Child">
                        Child
                      </span>
                    )}
                    {rel.target === selectedEntity.name && (
                      <span className="relation-badge recursive" title="Recursive">
                        Recursive
                      </span>
                    )}
                    <span className="relation-arrow" aria-hidden="true">
                      →
                    </span>
                    <span className="relation-target">{rel.target}</span>
                    {rel.name && <span className="relation-name">({rel.name})</span>}
                    {rel.isTaxonomy && <span className="relation-badge taxonomy">Taxonomy</span>}
                    {rel.isPath && <span className="relation-badge path">Path</span>}
                    {rel.isReverse && <span className="relation-badge reverse">Inferred</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="detail-section">
            <h4>Connected definitions</h4>
            <div className="connected-entities-list">
              {getEntityConnections(selectedEntity, definitions).map((connectedEntity) => (
                <div
                  key={connectedEntity.id}
                  className="connected-entity-item"
                  onClick={() => onEntityClick(connectedEntity)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onEntityClick(connectedEntity);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className="entity-icon-circle"
                    style={{ backgroundColor: getEntityColor(connectedEntity) }}
                  />
                  <span>{connectedEntity.name}</span>
                </div>
              ))}
              {getEntityConnections(selectedEntity, definitions).length === 0 && (
                <div className="no-connections">No connected definitions found</div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="no-selection">
          <div className="no-selection-icon" aria-hidden="true">
            ◇
          </div>
          <p>Select a definition from the list or network view to see its details.</p>
        </div>
      )}
    </div>
  </div>
);

export default EntityDetailPanel;
