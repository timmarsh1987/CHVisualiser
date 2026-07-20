import React from 'react';
import { getEntityColor, getEntityTypeLabel } from './entityStyle';
import type { EntityDefinition, SortOrder } from './types';

interface EntitySidebarProps {
  definitions: EntityDefinition[];
  filteredDefinitions: EntityDefinition[];
  selectedEntity: EntityDefinition | null;
  searchTerm: string;
  sortOrder: SortOrder;
  onSearchChange: (value: string) => void;
  onSortChange: (order: SortOrder) => void;
  onEntityClick: (entity: EntityDefinition) => void;
}

const EntitySidebar: React.FC<EntitySidebarProps> = ({
  definitions,
  filteredDefinitions,
  selectedEntity,
  searchTerm,
  sortOrder,
  onSearchChange,
  onSortChange,
  onEntityClick,
}) => (
  <div className="sidebar">
    <div className="sidebar-header">
      <div className="sidebar-title-section">
        <h3>Entity definitions</h3>
        <div className="color-legend" aria-label="Entity type legend">
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#28a745' }} />
            <span>Built-in</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#dc3545' }} />
            <span>Custom</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#7F77DD' }} />
            <span>Taxonomy</span>
          </div>
        </div>
      </div>
      <div className="search-container">
        <label className="visually-hidden" htmlFor="ch-visualiser-search">
          Search entity definitions
        </label>
        <input
          id="ch-visualiser-search"
          type="search"
          placeholder="Search definitions"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="entity-count">
        {filteredDefinitions.length} of {definitions.length} definitions
      </div>
      <div className="sort-controls">
        <label className="sort-label" htmlFor="ch-visualiser-sort">
          Sort by
        </label>
        <select
          id="ch-visualiser-sort"
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value as SortOrder)}
          className="sort-select"
        >
          <option value="none">Default</option>
          <option value="name">Name (A-Z)</option>
          <option value="connections">Connections (most first)</option>
        </select>
      </div>
      {filteredDefinitions.length === 0 && definitions.length > 0 && (
        <p className="empty-search" role="status">
          No definitions match your search.
        </p>
      )}
    </div>
    <div className="entity-list" role="listbox" aria-label="Entity definitions">
      {filteredDefinitions.map((def) => (
        <div
          key={def.id}
          data-entity-id={def.id}
          role="option"
          aria-selected={selectedEntity?.id === def.id}
          className={`entity-item ${selectedEntity?.id === def.id ? 'selected' : ''}`}
          onClick={() => onEntityClick(def)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onEntityClick(def);
            }
          }}
          tabIndex={0}
        >
          <div
            className="entity-icon-circle"
            style={{ backgroundColor: getEntityColor(def) }}
          />
          <div className="entity-info">
            <div className="entity-name">{def.name}</div>
            <div className="entity-meta">
              <span>{def.relations.length} relations</span>
              <span className="entity-type-label" style={{ color: getEntityColor(def) }}>
                {getEntityTypeLabel(def)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EntitySidebar;
