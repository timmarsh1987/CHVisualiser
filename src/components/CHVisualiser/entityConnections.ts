import type { EntityDefinition } from './types';

export function getEntityConnections(
  entityDef: EntityDefinition,
  definitions: EntityDefinition[]
): EntityDefinition[] {
  const connections: EntityDefinition[] = [];
  const connectionTargets = new Set<string>();

  entityDef.relations.forEach((rel) => {
    const targetEntity = definitions.find(
      (def) => def.name === rel.target || def.id.toString() === rel.target
    );
    if (targetEntity && !connectionTargets.has(targetEntity.name)) {
      connections.push(targetEntity);
      connectionTargets.add(targetEntity.name);
    }
  });

  definitions.forEach((def) => {
    def.relations.forEach((rel) => {
      if (
        (rel.target === entityDef.name || rel.target === entityDef.id.toString()) &&
        !connectionTargets.has(def.name)
      ) {
        connections.push(def);
        connectionTargets.add(def.name);
      }
    });
  });

  return connections;
}

export function sortDefinitions(
  definitions: EntityDefinition[],
  searchTerm: string,
  sortOrder: 'name' | 'connections' | 'none',
  allDefinitions: EntityDefinition[]
): EntityDefinition[] {
  const term = searchTerm.toLowerCase();
  let filtered = definitions.filter((def) =>
    def.name.toLowerCase().includes(term)
  );

  switch (sortOrder) {
    case 'name':
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'connections':
      filtered = [...filtered].sort((a, b) => {
        const aCount = getEntityConnections(a, allDefinitions).length;
        const bCount = getEntityConnections(b, allDefinitions).length;
        return bCount - aCount;
      });
      break;
    default:
      break;
  }

  return filtered;
}
