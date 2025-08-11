import React, { FC, useEffect, useState, useMemo } from 'react';
import { IEntity } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/base/entity';
import { ContentHubClient } from '@sitecore/sc-contenthub-webclient-sdk/dist/clients/content-hub-client';
import './index.css';

interface GraphViewerOptions {
  showGraphViewer?: boolean;
  entityId?: number;
  // Add other option fields as needed
}

interface GraphViewerProps {
  client: ContentHubClient;
  options: GraphViewerOptions;
  entity?: IEntity;
}

interface EntityDefinition {
  id: number;
  name: string;
  is_built_in?: boolean;
  is_taxonomy_item_definition?: boolean;
  relations: Array<{
    target: string;
    type: string;
    name?: string;
    role?: string;
    cardinality?: string;
    isTaxonomy?: boolean;
    isPath?: boolean;
    allowNavigation?: boolean;
    labels?: any;
    isReverse?: boolean;
  }>;
  properties?: Array<{
    name: string;
    type: string;
    contentType?: string;
    isMandatory?: boolean;
    isMultilanguage?: boolean;
    isMultivalue?: boolean;
    is_system_owned?: boolean;
    labels?: any;
    helptext?: any;
  }>;
  description?: string;
}

/**
 * Visualizes entity definitions as a connected grid similar to Contentful.
 */
const GraphViewer: FC<GraphViewerProps> = ({ client, options, entity }) => {
  const [definitions, setDefinitions] = useState<EntityDefinition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEntity, setSelectedEntity] = useState<EntityDefinition | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDetailPanel, setShowDetailPanel] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState({ current: 0, total: 0 });
  const [viewMode, setViewMode] = useState<'grid' | 'network'>('network');
  const [networkTransform, setNetworkTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [highlightedPaths, setHighlightedPaths] = useState<Set<string>>(new Set());
  const [focusedNode, setFocusedNode] = useState<EntityDefinition | null>(null);
  const [sortOrder, setSortOrder] = useState<'name' | 'connections' | 'none'>('none');
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [nodePositions, setNodePositions] = useState<Map<number, { x: number; y: number }>>(new Map());
  const [draggedNode, setDraggedNode] = useState<EntityDefinition | null>(null);

  // Filter and sort entities based on search and sort order
  const filteredAndSortedDefinitions = useMemo(() => {
    let filtered = definitions.filter(def =>
      def.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortOrder) {
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'connections':
        filtered = filtered.sort((a, b) => {
          const aConnections = getEntityConnections(a).length;
          const bConnections = getEntityConnections(b).length;
          return bConnections - aConnections; // Descending order
        });
        break;
      default:
        // Keep original order
        break;
    }

    return filtered;
  }, [definitions, searchTerm, sortOrder]);

  // Fetch entity definitions on mount
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    
    const fetchEntityDefinitions = async () => {
      try {
        console.log("Fetching all entity definitions using batched requests...");
        
        // Start with fetching in batches of 25
        const allDefinitions = await fetchAllPages();
        
        if (mounted && allDefinitions.length > 0) {
          console.log(`Successfully loaded ${allDefinitions.length} entity definitions`);
          setDefinitions(allDefinitions);
          setLoading(false);
        } else {
          throw new Error("No entity definitions found");
        }
        
      } catch (err) {
        console.error('Error fetching entity definitions:', err);
        if (mounted) {
          setError(`Failed to load entity definitions: ${err instanceof Error ? err.message : String(err)}. Check console for details.`);
          setLoading(false);
        }
      }
    };

    // Helper function to fetch all pages in batches of 25
    const fetchAllPages = async (): Promise<EntityDefinition[]> => {
      const allData: any[] = [];
      let page = 0;
      let hasMore = true;
      let totalItems = 0; // Will be set from first API response
      const baseUrl = window.location.origin;
      
      while (hasMore && page < 20) { // Safety limit of 20 pages (500 items max)
        try {
          // Update progress with actual total once we have it
          setLoadingProgress({ current: allData.length, total: totalItems || allData.length + 25 });
          
          const pageParams = new URLSearchParams({
            'skip': (page * 25).toString(),
            'take': '25'
          });
          
          const pageUrl = `${baseUrl}/api/entitydefinitions?${pageParams.toString()}`;
          console.log(`Fetching page ${page + 1}: ${pageUrl}`);
          
          const response = await fetch(pageUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
          });
          
          if (!response.ok) {
            console.warn(`Page ${page + 1} failed with status: ${response.status}`);
            break;
          }
          
          const pageData = await response.json();
          console.log(`Page ${page + 1} raw data:`, pageData);
          
          let pageItems = [];
          
          if (Array.isArray(pageData)) {
            pageItems = pageData;
          } else if (pageData.items) {
            pageItems = pageData.items;
          } else if (pageData.content && Array.isArray(pageData.content)) {
            pageItems = pageData.content;
          }
          
          // Extract total count from any page response
          if (pageData.totalItems !== undefined) {
            totalItems = pageData.totalItems;
            console.log(`📊 Total items from API: ${totalItems}`);
          } else if (pageData.total !== undefined) {
            totalItems = pageData.total;
            console.log(`📊 Total items from API (total): ${totalItems}`);
          } else if (pageData.count !== undefined) {
            totalItems = pageData.count;
            console.log(`📊 Total items from API (count): ${totalItems}`);
          } else if (pageData.totalCount !== undefined) {
            totalItems = pageData.totalCount;
            console.log(`📊 Total items from API (totalCount): ${totalItems}`);
          } else if (pageData.total_items !== undefined) {
            totalItems = pageData.total_items;
            console.log(`📊 Total items from API (total_items): ${totalItems}`);
          } else if (page === 0 && totalItems === 0) {
            // Only apply fallback estimation on first page if no total found yet
            console.warn('⚠️ No total count found in API response, using fallback estimation');
            totalItems = pageItems.length * 4; // Rough estimate based on first page
          }
          
          if (pageItems.length === 0) {
            console.log(`Page ${page + 1}: No items found, stopping pagination`);
            hasMore = false;
          } else {
            allData.push(...pageItems);
            console.log(`Page ${page + 1}: Got ${pageItems.length} items, total so far: ${allData.length}/${totalItems}`);
            
            if (pageItems.length < 25) {
              console.log(`Page ${page + 1}: Got less than 25 items, this is the last page`);
              hasMore = false;
            }
          }
          
          page++;
          
          // Small delay to avoid overwhelming the server
          await new Promise(resolve => setTimeout(resolve, 100));
          
        } catch (err) {
          console.error(`Error fetching page ${page + 1}:`, err);
          break;
        }
      }
      
      console.log(`Fetched total of ${allData.length} raw items across ${page} pages (API total: ${totalItems})`);
      
      // Process the collected data
      const processedDefinitions = await processEntityDefinitions(allData);
      return processedDefinitions;
    };

    // Helper function to process entity definitions data and load relations
    const processEntityDefinitions = async (rawData: any[]): Promise<EntityDefinition[]> => {
      console.log("Processing entity definitions data:", rawData.length, "items");
      
      const entityDefinitions: EntityDefinition[] = [];
      
      for (let i = 0; i < rawData.length; i++) {
        const def = rawData[i];
        console.log(`Processing item ${i + 1}/${rawData.length}:`, def);
        
        // Skip if the item doesn't look like an entity definition
        if (!def || typeof def !== 'object') {
          console.warn(`Skipping invalid item at index ${i}:`, def);
          continue;
        }
        
        // Extract basic entity definition properties
        const entityDef: EntityDefinition = {
          id: def.id || def.Id || i,
          name: def.name || def.Name || def.identifier || def.Identifier || `Definition ${def.id || def.Id || i}`,
          is_built_in: def.is_built_in || false,
          is_taxonomy_item_definition: def.is_taxonomy_item_definition || false,
          relations: [],
          properties: [],
          description: def.description || def.Description || ''
        };
        
        // Extract properties from member_groups
        if (def.member_groups && Array.isArray(def.member_groups)) {
          def.member_groups.forEach((group: any) => {
            if (group.members && Array.isArray(group.members)) {
              group.members.forEach((member: any) => {
                if (member.type === 'Relation' && member.associated_entitydefinition) {
                  // Extract entity definition name from href
                  const href = member.associated_entitydefinition.href;
                  let targetName = '';
                  
                  if (href) {
                    // Extract the entity definition name from the URL
                    // href format: "https://demo.sitecoresandbox.cloud/api/entitydefinitions/DocumentType"
                    const urlParts = href.split('/');
                    targetName = urlParts[urlParts.length - 1];
                  }
                  
                  const relation = {
                    target: targetName,
                    type: `${member.role || 'unknown'}-${member.cardinality || 'unknown'}`,
                    name: member.name,
                    role: member.role,
                    cardinality: member.cardinality,
                    isTaxonomy: member.is_taxonomy_relation || false,
                    isPath: member.is_path_relation || false,
                    allowNavigation: member.allow_navigation || false,
                    labels: member.labels || {}
                  };
                  
                  entityDef.relations.push(relation);
                  console.log(`Found relation: ${entityDef.name} -> ${targetName} (${member.role}, ${member.cardinality})`);
                } else if (member.type !== 'Relation') {
                  // Add non-relation members as properties
                  entityDef.properties?.push({
                    name: member.name,
                    type: member.type,
                    contentType: member.content_type,
                    isMandatory: member.is_mandatory || false,
                    isMultilanguage: member.is_multilanguage || false,
                    isMultivalue: member.is_multivalue || false,
                    is_system_owned: member.is_system_owned || false,
                    labels: member.labels || {},
                    helptext: member.helptext || {}
                  });
                }
              });
            }
          });
        }
        
        console.log(`Entity ${entityDef.name} has ${entityDef.relations.length} relations and ${entityDef.properties?.length || 0} properties`);
        
        entityDefinitions.push(entityDef);
        
        // Update progress
        setLoadingProgress({ 
          current: i + 1, 
          total: rawData.length 
        });
      }
      
      console.log(`Processed ${entityDefinitions.length} entity definitions with relations`);
      
      // Post-process to create cross-references and clean up target names
      entityDefinitions.forEach(entityDef => {
        // Clean up relations and find reverse relationships
        entityDef.relations.forEach(relation => {
          // Find the actual entity definition that matches this relation target
          const targetEntity = entityDefinitions.find(def => 
            def.name === relation.target || 
            def.name.endsWith(relation.target) ||
            relation.target.endsWith(def.name)
          );
          
          if (targetEntity) {
            relation.target = targetEntity.name; // Use the full name
            
            // Add reverse relation if not already present
            const reverseRelationType = relation.role === 'Parent' ? 'Child' : 'Parent';
            const reverseCardinality = relation.cardinality === 'OneToMany' ? 'ManyToOne' : 
                                      relation.cardinality === 'ManyToOne' ? 'OneToMany' :
                                      relation.cardinality;
            
            const alreadyHasReverse = targetEntity.relations.some(rel => 
              rel.target === entityDef.name && rel.name === relation.name
            );
            
            if (!alreadyHasReverse) {
              targetEntity.relations.push({
                target: entityDef.name,
                type: `${reverseRelationType}-${reverseCardinality}`,
                name: relation.name,
                role: reverseRelationType,
                cardinality: reverseCardinality,
                isTaxonomy: relation.isTaxonomy,
                isPath: relation.isPath,
                allowNavigation: relation.allowNavigation,
                labels: relation.labels,
                isReverse: true
              });
            }
          }
        });
      });
      
      return entityDefinitions;
    };

    fetchEntityDefinitions();
    return () => { mounted = false; };
  }, [client]);

  // Initialize all node positions when definitions load
  useEffect(() => {
    if (definitions.length > 0 && nodePositions.size === 0) {
      console.log(`🚀 Initializing positions for ${definitions.length} nodes...`);
      const initialPositions = new Map<number, { x: number; y: number }>();
      
      definitions.forEach(entity => {
        const position = calculateInitialPosition(entity, definitions);
        initialPositions.set(entity.id, position);
        console.log(`📍 Node ${entity.id} (${entity.name}) initialized at:`, position);
      });
      
      setNodePositions(initialPositions);
      console.log(`✅ All ${initialPositions.size} node positions initialized`);
    }
  }, [definitions]);

  // Helper function to calculate initial positions (separate from the memoized one)
  const calculateInitialPosition = (entity: EntityDefinition, allEntities: EntityDefinition[]): { x: number; y: number } => {
    const index = allEntities.findIndex(e => e.id === entity.id);
    const total = allEntities.length;
    
    const viewWidth = 1200;
    const viewHeight = 800;
    
    if (total === 1) {
      return { x: viewWidth / 2, y: viewHeight / 2 };
    }
    
    // More compact initial positioning
    const cols = Math.ceil(Math.sqrt(total * 1.5));
    const rows = Math.ceil(total / cols);
    const col = index % cols;
    const row = Math.floor(index / cols);
    // Reduced spacing for a tighter layout
    const spacing = Math.min(180, Math.max(100, viewWidth / cols));
    // Start from a corner instead of center for more area usage
    const startX = 150; // Left margin
    const startY = 150; // Top margin
    const x = startX + col * spacing;
    const y = startY + row * spacing;
    // More randomization for natural spread
    const randomSeed = entity.id % 1000;
    const offsetX = (randomSeed % 60) - 30; // Increased randomness
    const offsetY = ((randomSeed * 7) % 60) - 30;
    return {
      x: Math.max(80, Math.min(viewWidth - 80, x + offsetX)),
      y: Math.max(80, Math.min(viewHeight - 80, y + offsetY))
    };
  };
  const getEntityConnections = useMemo(() => {
    const connectionsCache = new Map<number, EntityDefinition[]>();
    
    return (entityDef: EntityDefinition) => {
      if (connectionsCache.has(entityDef.id)) {
        return connectionsCache.get(entityDef.id)!;
      }
      
      const connections: EntityDefinition[] = [];
      const connectionTargets = new Set<string>();
      
      // Direct relations from this entity
      entityDef.relations.forEach(rel => {
        const targetEntity = definitions.find(def => 
          def.name === rel.target || def.id.toString() === rel.target
        );
        if (targetEntity && !connectionTargets.has(targetEntity.name)) {
          connections.push(targetEntity);
          connectionTargets.add(targetEntity.name);
        }
      });
      
      // Reverse relations (entities pointing to this one) - optimized but not limited
      definitions.forEach(def => {
        def.relations.slice(0, 5).forEach(rel => {
          if ((rel.target === entityDef.name || rel.target === entityDef.id.toString()) && 
              !connectionTargets.has(def.name)) {
            connections.push(def);
            connectionTargets.add(def.name);
          }
        });
      });
      
      connectionsCache.set(entityDef.id, connections);
      return connections;
    };
  }, [definitions]);

  // Helper function to center a node in the network view
  const centerNodeInView = (entityDef: EntityDefinition) => {
    if (viewMode !== 'network') return;
    const nodePos = getNodePosition(entityDef, filteredAndSortedDefinitions);
    const centerX = 600; // SVG center X
    const centerY = 400; // SVG center Y
    setNetworkTransform(prev => ({
      ...prev,
      x: centerX - nodePos.x * prev.scale,
      y: centerY - nodePos.y * prev.scale,
    }));
  };

  // Helper function to arrange directly connected nodes in a circle around the selected node
  const arrangeConnectedNodesInCircle = (centerEntity: EntityDefinition) => {
    const centerPos = getNodePosition(centerEntity, filteredAndSortedDefinitions);
    const connectedNodes = getEntityConnections(centerEntity);
    const N = connectedNodes.length;
    if (N === 0) return;

    // Reduce the base radius for a more compact circle
    const baseRadius = 180;
    const dynamicRadius = baseRadius + Math.max(0, N - 12) * 16;

    const updatedPositions = new Map(nodePositions);

    // SVG bounds for original viewBox
    const minX = 40, maxX = 1200 - 40;
    const minY = 40, maxY = 800 - 40;

    connectedNodes.forEach((entity, i) => {
      const angle = (2 * Math.PI * i) / N;
      let newX = centerPos.x + dynamicRadius * Math.cos(angle);
      let newY = centerPos.y + dynamicRadius * Math.sin(angle);

      // Clamp to SVG bounds
      newX = Math.max(minX, Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));

      updatedPositions.set(entity.id, { x: newX, y: newY });
    });

    setNodePositions(updatedPositions);
  };

  const handleEntityClick = (entityDef: EntityDefinition) => {
    // If clicking the same entity, deselect it
    if (selectedEntity?.id === entityDef.id) {
      setSelectedEntity(null);
      setFocusedNode(null);
      setHighlightedPaths(new Set());
      return;
    }

    // Select the new entity
    setSelectedEntity(entityDef);
    setShowDetailPanel(true);
    
    // Scroll the entity into view in the sidebar
    scrollEntityIntoView(entityDef.id);
    
    // If in network view, also highlight connections and center node
    if (viewMode === 'network') {
      setFocusedNode(entityDef);
      const connections = getEntityConnections(entityDef);
      const pathIds = new Set<string>();
      
      connections.forEach(connectedEntity => {
        pathIds.add(`${entityDef.id}-${connectedEntity.id}`);
        pathIds.add(`${connectedEntity.id}-${entityDef.id}`);
      });
      
      setHighlightedPaths(pathIds);
      centerNodeInView(entityDef); // Center the node in the view
      arrangeConnectedNodesInCircle(entityDef); // Arrange connected nodes in a circle
    }
  };

  // Function to scroll entity into view in sidebar
  const scrollEntityIntoView = (entityId: number) => {
    setTimeout(() => {
      const entityElement = document.querySelector(`[data-entity-id="${entityId}"]`);
      if (entityElement) {
        entityElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  };

  // Make background click a no-op so it doesn't deselect
  const handleBackgroundClick = (event: React.MouseEvent) => {
    // Do nothing
  };

  const handleNetworkNodeClick = (entityDef: EntityDefinition) => {
    // Always select the entity when clicking in network view
    handleEntityClick(entityDef);
  };

  const resetNetworkView = () => {
    setNetworkTransform({ x: 0, y: 0, scale: 1 });
    setFocusedNode(null);
    setHighlightedPaths(new Set());
  };

  const zoomIn = () => {
    setNetworkTransform(prev => ({
      ...prev,
      scale: Math.min(prev.scale * 1.3, 3)
    }));
  };

  const zoomOut = () => {
    setNetworkTransform(prev => ({
      ...prev,
      scale: Math.max(prev.scale / 1.3, 0.3)
    }));
  };

  const handleMouseWheel = (event: React.WheelEvent) => {
    const delta = event.deltaY > 0 ? 0.9 : 1.1;
    const rect = (event.currentTarget as Element).getBoundingClientRect();
    
    // Get mouse position relative to the SVG
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    // Convert to world coordinates
    const worldX = (mouseX - networkTransform.x) / networkTransform.scale;
    const worldY = (mouseY - networkTransform.y) / networkTransform.scale;
    
    const newScale = Math.max(0.3, Math.min(3, networkTransform.scale * delta));
    
    // Calculate new transform to keep the cursor point fixed
    const newX = mouseX - worldX * newScale;
    const newY = mouseY - worldY * newScale;
    
    setNetworkTransform({
      x: newX,
      y: newY,
      scale: newScale
    });
    
    console.log(`🔍 Zoom: ${(newScale * 100).toFixed(0)}% at cursor (${mouseX.toFixed(0)}, ${mouseY.toFixed(0)})`);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    // Only start dragging if clicking on the SVG background (not on nodes)
    if ((event.target as Element).tagName === 'svg' || (event.target as Element).classList.contains('network-svg')) {
      setIsDragging(true);
      setDragStart({ x: event.clientX, y: event.clientY });
      event.preventDefault();
    }
  };

  // Enhanced collision avoidance that moves other nodes away
  const resolveCollisionsOnDrop = (droppedPosition: { x: number; y: number }, droppedEntityId: number): Map<number, { x: number; y: number }> => {
    const nodeRadius = 30;
    const minDistance = nodeRadius * 2.5;
    const newPositions = new Map(nodePositions);
    
    console.log(`🎯 COLLISION CHECK: Dropping node ${droppedEntityId} at position:`, droppedPosition);
    console.log(`📊 Current positions before collision check:`, Array.from(nodePositions.entries()));
    
    // Set the dropped node's position first
    newPositions.set(droppedEntityId, droppedPosition);
    
    // Find all nodes that collide with the dropped node
    const collidingNodes: Array<{ id: number; pos: { x: number; y: number }; distance: number }> = [];
    
    for (const [otherId, otherPos] of newPositions.entries()) {
      if (otherId === droppedEntityId) continue;
      
      const dx = droppedPosition.x - otherPos.x;
      const dy = droppedPosition.y - otherPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      console.log(`🔍 Checking collision with node ${otherId}: distance=${distance.toFixed(2)}, minDistance=${minDistance}`);
      
      if (distance < minDistance) {
        collidingNodes.push({ id: otherId, pos: otherPos, distance });
        console.log(`💥 COLLISION DETECTED with node ${otherId}! Distance: ${distance.toFixed(2)}`);
      }
    }
    
    if (collidingNodes.length === 0) {
      console.log(`✅ No collisions detected for node ${droppedEntityId}`);
      return newPositions;
    }
    
    console.log(`🚨 Found ${collidingNodes.length} colliding nodes:`, collidingNodes.map(n => n.id));
    
    // Move colliding nodes away from the dropped node
    collidingNodes.forEach(({ id: collidingId, pos: collidingPos, distance }) => {
      const dx = collidingPos.x - droppedPosition.x;
      const dy = collidingPos.y - droppedPosition.y;
      
      if (distance === 0) {
        // If nodes are exactly on top of each other, move in a random direction
        const angle = Math.random() * Math.PI * 2;
        const pushDistance = minDistance + 10;
        const newPos = {
          x: droppedPosition.x + Math.cos(angle) * pushDistance,
          y: droppedPosition.y + Math.sin(angle) * pushDistance
        };
        
        // Keep within bounds
        newPos.x = Math.max(80, Math.min(1120, newPos.x));
        newPos.y = Math.max(80, Math.min(720, newPos.y));
        
        newPositions.set(collidingId, newPos);
        console.log(`📍 Moved overlapping node ${collidingId} randomly to:`, newPos);
      } else {
        // Calculate push-away vector
        const angle = Math.atan2(dy, dx);
        const pushDistance = minDistance - distance + 15; // Increased buffer
        
        const newPos = {
          x: collidingPos.x + Math.cos(angle) * pushDistance,
          y: collidingPos.y + Math.sin(angle) * pushDistance
        };
        
        // Keep within bounds
        newPos.x = Math.max(80, Math.min(1120, newPos.x));
        newPos.y = Math.max(80, Math.min(720, newPos.y));
        
        newPositions.set(collidingId, newPos);
        console.log(`⬅️ Pushed node ${collidingId} away from (${collidingPos.x.toFixed(1)}, ${collidingPos.y.toFixed(1)}) to (${newPos.x.toFixed(1)}, ${newPos.y.toFixed(1)})`);
      }
    });
    
    // Check if any moved nodes now collide with other nodes and resolve recursively
    let hasNewCollisions = true;
    let iterations = 0;
    const maxIterations = 15; // Increased iterations
    
    while (hasNewCollisions && iterations < maxIterations) {
      hasNewCollisions = false;
      iterations++;
      console.log(`🔄 Collision resolution iteration ${iterations}...`);
      
      for (const movedNodeId of collidingNodes.map(n => n.id)) {
        const movedNodePos = newPositions.get(movedNodeId);
        if (!movedNodePos) continue;
        
        for (const [otherId, otherPos] of newPositions.entries()) {
          if (otherId === movedNodeId || otherId === droppedEntityId) continue;
          
          const dx = movedNodePos.x - otherPos.x;
          const dy = movedNodePos.y - otherPos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < minDistance) {
            // Move the other node away
            const angle = Math.atan2(-dy, -dx); // Push in opposite direction
            const pushDistance = minDistance - distance + 10;
            
            const newPos = {
              x: otherPos.x + Math.cos(angle) * pushDistance,
              y: otherPos.y + Math.sin(angle) * pushDistance
            };
            
            // Keep within bounds
            newPos.x = Math.max(80, Math.min(1120, newPos.x));
            newPos.y = Math.max(80, Math.min(720, newPos.y));
            
            newPositions.set(otherId, newPos);
            hasNewCollisions = true;
            console.log(`🔗 Secondary collision: moved node ${otherId} to avoid node ${movedNodeId}`);
          }
        }
      }
    }
    
    console.log(`✨ Collision resolution complete after ${iterations} iterations`);
    console.log(`📊 Final positions:`, Array.from(newPositions.entries()));
    
    return newPositions;
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (draggedNode) {
      // Handle node dragging
      handleNodeDrag(event);
      return;
    }
    
    if (!isDragging) return;
    
    // Handle canvas dragging
    const deltaX = event.clientX - dragStart.x;
    const deltaY = event.clientY - dragStart.y;
    
    setNetworkTransform(prev => ({
      ...prev,
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }));
    
    setDragStart({ x: event.clientX, y: event.clientY });
    event.preventDefault();
  };

  const handleMouseUp = () => {
    if (draggedNode) {
      // Apply collision resolution when dropping a node
      const droppedPosition = getNodePosition(draggedNode, filteredAndSortedDefinitions);
      const resolvedPositions = resolveCollisionsOnDrop(droppedPosition, draggedNode.id);
      
      // Update our nodePositions state with all the resolved positions
      setNodePositions(resolvedPositions);
      console.log(`🎯 Node ${draggedNode.name} dropped, all ${resolvedPositions.size} positions updated`);
    }
    
    setIsDragging(false);
    setDraggedNode(null);
  };

  // Node dragging handlers
  const handleNodeMouseDown = (event: React.MouseEvent, entityDef: EntityDefinition) => {
    event.stopPropagation();
    setDraggedNode(entityDef);
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleNodeDrag = (event: React.MouseEvent) => {
    if (!draggedNode) return;
    
    const deltaX = (event.clientX - dragStart.x) / networkTransform.scale;
    const deltaY = (event.clientY - dragStart.y) / networkTransform.scale;
    
    const currentPos = getNodePosition(draggedNode, filteredAndSortedDefinitions);
    const newPosition = {
      x: currentPos.x + deltaX,
      y: currentPos.y + deltaY
    };
    
    // No boundary restrictions during drag - allow full freedom
    console.log(`🖱️ Dragging node ${draggedNode.name} to:`, newPosition);
    
    // Just update position during drag, collision resolution happens on drop
    setNodePositions(prev => new Map(prev).set(draggedNode.id, newPosition));
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const closeDetailPanel = () => {
    // Don't allow closing the detail panel - it should always be visible
    // setShowDetailPanel(false);
    // setSelectedEntity(null);
  };

  // Helper function to get entity color based on type
  const getEntityColor = (entity: EntityDefinition) => {
    if (entity.is_taxonomy_item_definition) {
      return '#ffc107'; // Yellow for taxonomy
    } else if (entity.is_built_in) {
      return '#28a745'; // Green for built-in
    } else {
      return '#dc3545'; // Red for custom
    }
  };

  // Helper function to get entity type label
  const getEntityTypeLabel = (entity: EntityDefinition) => {
    if (entity.is_taxonomy_item_definition) return 'Taxonomy';
    if (entity.is_built_in) return 'Built In';
    return 'Custom';
  };

  // Helper function to find entity by name
  const findEntityByName = (entityName: string): EntityDefinition | undefined => {
    return definitions.find(def => def.name === entityName);
  };

  const getNodePosition = useMemo(() => {
    const positionCache = new Map<string, { x: number; y: number }>();
    
    return (entity: EntityDefinition, allEntities: EntityDefinition[]) => {
      // Check if we have a custom dragged position first
      if (nodePositions.has(entity.id)) {
        return nodePositions.get(entity.id)!;
      }
      
      const cacheKey = `${entity.id}-${allEntities.length}`;
      if (positionCache.has(cacheKey)) {
        return positionCache.get(cacheKey)!;
      }
      
      const index = allEntities.findIndex(e => e.id === entity.id);
      const total = allEntities.length;
      
      const viewWidth = 1200;
      const viewHeight = 800;
      
      if (total === 1) {
        const position = { x: viewWidth / 2, y: viewHeight / 2 };
        positionCache.set(cacheKey, position);
        return position;
      }
      
      // More spread out initial positioning
      const cols = Math.ceil(Math.sqrt(total * 1.8)); // Increased spread factor
      const rows = Math.ceil(total / cols);
      
      const col = index % cols;
      const row = Math.floor(index / cols);
      
      // Increased spacing for better distribution
      const spacing = Math.min(180, Math.max(120, viewWidth / cols));
      const gridWidth = (cols - 1) * spacing;
      const gridHeight = (rows - 1) * spacing;
      
      // Start from a corner instead of center for more area usage
      const startX = 150; // Left margin
      const startY = 150; // Top margin
      
      const x = startX + col * spacing;
      const y = startY + row * spacing;
      
      // More randomization for natural spread
      const randomSeed = entity.id % 1000;
      const offsetX = (randomSeed % 60) - 30; // Increased randomness
      const offsetY = ((randomSeed * 7) % 60) - 30;
      
      const position = {
        x: Math.max(80, Math.min(viewWidth - 80, x + offsetX)),
        y: Math.max(80, Math.min(viewHeight - 80, y + offsetY))
      };
      
      positionCache.set(cacheKey, position);
      return position;
    };
  }, [definitions, nodePositions]);

  if (loading) {
    return (
      <div className="graph-loading">
        <div>Loading entity definitions...</div>
        {loadingProgress.total > 0 && (
          <div className="loading-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(loadingProgress.current / loadingProgress.total) * 100}%` }}
              ></div>
            </div>
            <div className="progress-text">
              {loadingProgress.current} of {loadingProgress.total} loaded
            </div>
          </div>
        )}
      </div>
    );
  }
  
  if (error) return <div className="graph-error">{error}</div>;

  return (
    <div className="contentful-layout three-column">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-title-section">
            <h3>Content Types</h3>
            {/* Color Legend */}
            <div className="color-legend">
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#28a745' }}></div>
                <span>Built In</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#dc3545' }}></div>
                <span>Custom</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#ffc107' }}></div>
                <span>Taxonomy</span>
              </div>
            </div>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search content types"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="entity-count">
            {filteredAndSortedDefinitions.length} of {definitions.length} content types
          </div>
          <div className="sort-controls">
            <label className="sort-label">Sort by:</label>
            <select 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value as 'name' | 'connections' | 'none')}
              className="sort-select"
            >
              <option value="none">Default</option>
              <option value="name">Name (A-Z)</option>
              <option value="connections">Connections (Most first)</option>
            </select>
          </div>
        </div>
        
        <div className="entity-list">
          {filteredAndSortedDefinitions.map((def: EntityDefinition) => (
            <div 
              key={def.id} 
              data-entity-id={def.id}
              className={`entity-item ${selectedEntity?.id === def.id ? 'selected' : ''}`}
              onClick={() => handleEntityClick(def)}
            >
              <div 
                className="entity-icon-circle"
                style={{ backgroundColor: getEntityColor(def) }}
              >
              </div>
              <div className="entity-info">
                <div className="entity-name">{def.name}</div>
                <div className="entity-meta">
                  <span>{Array.isArray(def.relations) ? def.relations.length : 0} relations</span>
                  <span className="entity-type-label" style={{ color: getEntityColor(def) }}>
                    {getEntityTypeLabel(def)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area - Grid or Network */}
      <div className="main-content">
        <div className="content-header">
          <h2>Entity Relationship Map</h2>
          <div className="header-controls">
            <div className="view-toggle">
              <button 
                className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                📊 Grid View
              </button>
              <button 
                className={`view-button ${viewMode === 'network' ? 'active' : ''}`}
                onClick={() => setViewMode('network')}
              >
                🔗 Network View
              </button>
            </div>
            <div className="header-info">
              {definitions.length} entity definitions loaded
            </div>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="entity-grid" onClick={handleBackgroundClick}>
            {filteredAndSortedDefinitions.map((def: EntityDefinition) => {
              const connections = getEntityConnections(def);
              const entityColor = getEntityColor(def);
              return (
                <div 
                  key={def.id} 
                  className={`grid-entity-node ${selectedEntity?.id === def.id ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEntityClick(def);
                  }}
                  style={{ borderColor: entityColor }}
                >
                  <div className="entity-icon" style={{ color: entityColor }}>📄</div>
                  <div className="entity-name">{def.name}</div>
                  <div className="entity-connections">
                    {connections.length} connections
                  </div>
                  
                  {/* Connection lines to related entities */}
                  {connections.slice(0, 3).map((connectedEntity, index) => (
                    <div 
                      key={connectedEntity.id} 
                      className={`connection-indicator connection-${index}`}
                      title={`Connected to ${connectedEntity.name}`}
                    ></div>
                  ))}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="network-view">
            <div className="network-controls">
              <div className="network-info">
                Network View: {filteredAndSortedDefinitions.length} nodes, {
                  filteredAndSortedDefinitions.reduce((total: number, def: EntityDefinition) => 
                    total + getEntityConnections(def).length, 0
                  )} connections
                {focusedNode && (
                  <span className="focused-info"> | Focused: {focusedNode.name}</span>
                )}
              </div>
              <div className="network-zoom-controls">
                <button className="zoom-btn" onClick={zoomOut} title="Zoom Out">−</button>
                <span className="zoom-level">{Math.round(networkTransform.scale * 100)}%</span>
                <button className="zoom-btn" onClick={zoomIn} title="Zoom In">+</button>
                <button className="reset-btn" onClick={resetNetworkView} title="Reset View">
                  🔄 Reset
                </button>
              </div>
              {filteredAndSortedDefinitions.length > 100 && (
                <div className="performance-warning">
                  ⚠️ Large network with {filteredAndSortedDefinitions.length} nodes - use search to filter for better performance
                </div>
              )}
            </div>
            <div 
              className={`network-container ${isDragging || draggedNode ? 'dragging' : ''}`}
              onWheel={handleMouseWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onClick={handleBackgroundClick}
            >
              <svg className="network-svg" width="100%" height="100%" viewBox="0 0 1200 800">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                   refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#b0bec5" />
                  </marker>
                  <marker id="arrowhead-highlight" markerWidth="10" markerHeight="7" 
                   refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#2c5aa0" />
                  </marker>
                </defs>
                
                <g transform={`translate(${networkTransform.x}, ${networkTransform.y}) scale(${networkTransform.scale})`}>
                  {/* Render connections first (so they appear behind nodes) */}
                  {/* Track rendered connections globally to avoid duplicate/bidirectional lines */}
                  {(() => {
                    const renderedConnections = new Set<string>();
                    return filteredAndSortedDefinitions.map((def: EntityDefinition) => {
                      const connections = getEntityConnections(def);
                      const sourcePos = getNodePosition(def, filteredAndSortedDefinitions);
                      // Limit connections rendered per node to improve performance
                      return connections.slice(0, 4).map((connectedDef, index) => {
                        const connectionKey = `${def.id}->${connectedDef.id}`;
                        const reverseKey = `${connectedDef.id}->${def.id}`;
                        if (renderedConnections.has(connectionKey) || renderedConnections.has(reverseKey)) {
                          return null; // Already rendered this connection in one direction
                        }
                        renderedConnections.add(connectionKey);
                        const targetPos = getNodePosition(connectedDef, filteredAndSortedDefinitions);
                        const connectionId = `${def.id}-${connectedDef.id}`;
                        // Only render connection if both nodes are in filtered list
                        const targetInFiltered = filteredAndSortedDefinitions.find((d: EntityDefinition) => d.id === connectedDef.id);
                        if (!targetInFiltered) return null;
                        // Find the relation from def to connectedDef
                        const relation = def.relations.find(rel => {
                          // Try to match by name or id
                          return (rel.target === connectedDef.name || rel.target === connectedDef.id.toString());
                        });
                        // Determine direction based on relation.role
                        let startX = sourcePos.x, startY = sourcePos.y, endX = targetPos.x, endY = targetPos.y;
                        if (relation) {
                          if (relation.role === 'Parent') {
                            // Arrow from child (def) to parent (connectedDef)
                            startX = sourcePos.x;
                            startY = sourcePos.y;
                            endX = targetPos.x;
                            endY = targetPos.y;
                          } else if (relation.role === 'Child') {
                            // Arrow from parent (def) to child (connectedDef)
                            startX = sourcePos.x;
                            startY = sourcePos.y;
                            endX = targetPos.x;
                            endY = targetPos.y;
                          } // else, default direction
                        }
                        // Calculate line endpoints to stop at node edges
                        const dx = endX - startX;
                        const dy = endY - startY;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 20) return null; // Allow shorter lines
                        const nodeRadius = 30;
                        const factor = (distance - nodeRadius) / distance;
                        const adjStartX = startX + dx * (nodeRadius / distance);
                        const adjStartY = startY + dy * (nodeRadius / distance);
                        const adjEndX = startX + dx * factor;
                        const adjEndY = startY + dy * factor;
                        // Check if this connection should be highlighted
                        const isHighlighted = highlightedPaths.has(connectionId);
                        const isConnectedToFocused = focusedNode && 
                          (def.id === focusedNode.id || connectedDef.id === focusedNode.id);
                        const isConnectedToSelected = selectedEntity &&
                          (def.id === selectedEntity.id || connectedDef.id === selectedEntity.id);
                        return (
                          <line
                            key={`${connectionId}-${index}`}
                            x1={adjStartX}
                            y1={adjStartY}
                            x2={adjEndX}
                            y2={adjEndY}
                            className={`connection-line ${isHighlighted || isConnectedToSelected ? 'highlighted' : ''} ${focusedNode && !isConnectedToFocused ? 'dimmed' : ''}`}
                            strokeWidth={isHighlighted || isConnectedToSelected ? "3" : "1"}
                            stroke={isHighlighted || isConnectedToSelected ? "#2c5aa0" : "#b0bec5"}
                            strokeOpacity={isHighlighted || isConnectedToSelected ? "0.8" : (focusedNode && !isConnectedToFocused ? "0.1" : "0.3")}
                            markerEnd={isHighlighted || isConnectedToSelected ? "url(#arrowhead-highlight)" : "url(#arrowhead)"}
                          />
                        );
                      });
                    });
                  })()}
                  
                  {/* Render nodes */}
                  {filteredAndSortedDefinitions.map((def: EntityDefinition) => {
                    const connections = getEntityConnections(def);
                    const position = getNodePosition(def, filteredAndSortedDefinitions);
                    const nodeRadius = 20 + Math.min(connections.length, 10);
                    const entityColor = getEntityColor(def);
                    
                    const isFocused = focusedNode?.id === def.id;
                    const isSelected = selectedEntity?.id === def.id;
                    const isConnectedToFocused = focusedNode && 
                      getEntityConnections(focusedNode).some(conn => conn.id === def.id);
                    const isConnectedToSelected = selectedEntity &&
                      getEntityConnections(selectedEntity).some(conn => conn.id === def.id);
                    const isDimmed = focusedNode && !isFocused && !isConnectedToFocused;
                    
                    return (
                      <g key={def.id} className="network-node-group">
                        {/* Node circle */}
                        <circle
                          cx={position.x}
                          cy={position.y}
                          r={nodeRadius}
                          className={`network-node ${isSelected ? 'selected' : ''} ${isFocused ? 'focused' : ''} ${isConnectedToSelected ? 'connected-to-selected' : ''} ${isDimmed ? 'dimmed' : ''}`}
                          fill={isSelected ? entityColor : 'white'}
                          stroke={entityColor}
                          strokeWidth={isSelected ? 4 : 2.5}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNetworkNodeClick(def);
                          }}
                          onDoubleClick={(e) => {
                            e.stopPropagation();
                            handleEntityClick(def);
                          }}
                          onMouseDown={(e) => handleNodeMouseDown(e, def)}
                          style={{ cursor: draggedNode?.id === def.id ? 'grabbing' : 'grab' }}
                        />
                        
                        {/* Connection count */}
                        <text
                          x={position.x}
                          y={position.y + 3}
                          className={`network-count ${isDimmed ? 'dimmed' : ''}`}
                          textAnchor="middle"
                          fill={isSelected ? 'white' : entityColor}
                          onClick={() => handleNetworkNodeClick(def)}
                          onMouseDown={(e) => handleNodeMouseDown(e, def)}
                          style={{ pointerEvents: 'none' }}
                        >
                          {connections.length}
                        </text>
                        
                        {/* Node label */}
                        <text
                          x={position.x}
                          y={position.y + nodeRadius + 12}
                          className={`network-label ${isDimmed ? 'dimmed' : ''}`}
                          textAnchor="middle"
                          fill={entityColor}
                          onClick={() => handleNetworkNodeClick(def)}
                          style={{ pointerEvents: 'none' }}
                        >
                          {def.name.length > 12 ? def.name.substring(0, 9) + '...' : def.name}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Right Detail Panel - Always visible */}
      <div className="detail-panel">
        <div className="detail-header">
          <div className="detail-title-section">
            {selectedEntity && selectedEntity.is_taxonomy_item_definition && (
              <span className="taxonomy-badge">Taxonomy</span>
            )}
            <h3>{selectedEntity ? selectedEntity.name : 'Select an Entity'}</h3>
          </div>
          <div className="detail-header-actions">
            {selectedEntity && selectedEntity.is_built_in && (
              <span className="built-in-badge">Built In</span>
            )}
            {selectedEntity && !selectedEntity.is_built_in && (
              <span className="custom-badge">Custom</span>
            )}
            {selectedEntity && (
              <button 
                className="edit-button"
                onClick={() => {
                  const editUrl = `/en-us/admin/definitionmgmt/detail/${selectedEntity.id}`;
                  window.open(editUrl, '_blank');
                }}
                title="Edit Entity Definition"
              >
                ✏️ Edit
              </button>
            )}
          </div>
        </div>
        
        <div className="detail-content">
          {selectedEntity ? (
            <>
              <div className="detail-section">
                <h4>Basic Information</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <label>ID:</label>
                    <span>{selectedEntity.id}</span>
                  </div>
                  <div className="info-item">
                    <label>Name:</label>
                    <span>{selectedEntity.name}</span>
                  </div>
                  {selectedEntity.description && (
                    <div className="info-item">
                      <label>Description:</label>
                      <span>{selectedEntity.description}</span>
                    </div>
                  )}
                </div>
              </div>

              {selectedEntity.properties && selectedEntity.properties.length > 0 && (
                <div className="detail-section">
                  <h4>Properties ({selectedEntity.properties.length})</h4>
                  <div className="properties-list">
                    {selectedEntity.properties.map((prop, index) => (
                      <div key={index} className="property-item">
                        <span className="property-name">
                          {prop.name}
                          {prop.is_system_owned && <span className="system-owned-icon">🔒</span>}
                        </span>
                        <span className="property-type">{prop.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedEntity.relations && selectedEntity.relations.length > 0 && (
                <div className="detail-section">
                  <h4>Relations ({selectedEntity.relations.length})</h4>
                  <div className="relations-list">
                    {selectedEntity.relations.map((rel, index) => (
                      <div key={index} className="relation-item">
                        <span className="relation-type">
                          {rel.role && rel.cardinality ? `${rel.role} (${rel.cardinality})` : rel.type}
                        </span>
                        {/* Parent/Child/Recursive icons */}
                        {rel.role === 'Parent' && (
                          <span className="relation-badge parent" title="Parent">⬆️</span>
                        )}
                        {rel.role === 'Child' && (
                          <span className="relation-badge child" title="Child">⬇️</span>
                        )}
                        {rel.target === selectedEntity?.name && (
                          <span className="relation-badge recursive" title="Recursive">●</span>
                        )}
                        <span className="relation-arrow">→</span>
                        <span className="relation-target">{rel.target}</span>
                        {rel.name && <span className="relation-name">({rel.name})</span>}
                        {rel.isTaxonomy && <span className="relation-badge taxonomy">Taxonomy</span>}
                        {rel.isPath && <span className="relation-badge path">Path</span>}
                        {rel.isReverse && <span className="relation-badge reverse">Reverse</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="detail-section">
                <h4>Connected Entities</h4>
                <div className="connected-entities-list">
                  {getEntityConnections(selectedEntity).map((connectedEntity) => {
                    const entityColor = getEntityColor(connectedEntity);
                    return (
                      <div 
                        key={connectedEntity.id} 
                        className="connected-entity-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEntityClick(connectedEntity);
                        }}
                      >
                        <div 
                          className="entity-icon-circle"
                          style={{ backgroundColor: entityColor }}
                        ></div>
                        <span>{connectedEntity.name}</span>
                      </div>
                    );
                  })}
                  {getEntityConnections(selectedEntity).length === 0 && (
                    <div className="no-connections">No connected entities found</div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="no-selection">
              <div className="no-selection-icon">📄</div>
              <p>Select an entity from the list or network view to see its details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(GraphViewer);