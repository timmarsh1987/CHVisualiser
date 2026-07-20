import { NODE_RADIUS, VIEW_HEIGHT, VIEW_WIDTH } from './constants';
import type { EntityDefinition } from './types';

const MIN_NODE_DISTANCE = NODE_RADIUS * 2.8;

export function calculateInitialPosition(
  entity: EntityDefinition,
  allEntities: EntityDefinition[]
): { x: number; y: number } {
  const index = allEntities.findIndex((e) => e.id === entity.id);
  const total = allEntities.length;
  const minDistance = NODE_RADIUS * 2.5;

  if (total === 1) {
    return { x: VIEW_WIDTH / 2, y: VIEW_HEIGHT / 2 };
  }

  let position: { x: number; y: number };

  if (index < total * 0.6) {
    const spiralRadius = 80 + index * 20;
    const spiralAngle = index * 0.8;
    position = {
      x: VIEW_WIDTH / 2 + spiralRadius * Math.cos(spiralAngle),
      y: VIEW_HEIGHT / 2 + spiralRadius * Math.sin(spiralAngle),
    };
  } else if (index < total * 0.9) {
    const gridIndex = index - Math.floor(total * 0.6);
    const cols = Math.ceil(Math.sqrt(total * 0.4));
    const col = gridIndex % cols;
    const row = Math.floor(gridIndex / cols);
    const spacing = Math.max(minDistance * 1.3, 200);
    position = {
      x: 150 + col * spacing,
      y: 150 + row * spacing,
    };
  } else {
    const cornerIndex = index - Math.floor(total * 0.9);
    const corners = [
      { x: 100, y: 100 },
      { x: VIEW_WIDTH - 100, y: 100 },
      { x: 100, y: VIEW_HEIGHT - 100 },
      { x: VIEW_WIDTH - 100, y: VIEW_HEIGHT - 100 },
    ];
    const corner = corners[cornerIndex % corners.length];
    const offset = Math.floor(cornerIndex / corners.length) * 80;
    position = {
      x: corner.x + (cornerIndex % 2 === 0 ? offset : -offset),
      y: corner.y + (cornerIndex % 2 === 1 ? offset : -offset),
    };
  }

  position.x = Math.max(100, Math.min(VIEW_WIDTH - 100, position.x));
  position.y = Math.max(100, Math.min(VIEW_HEIGHT - 100, position.y));

  const randomOffset = 15;
  position.x += (Math.random() - 0.5) * randomOffset;
  position.y += (Math.random() - 0.5) * randomOffset;

  position.x = Math.max(100, Math.min(VIEW_WIDTH - 100, position.x));
  position.y = Math.max(100, Math.min(VIEW_HEIGHT - 100, position.y));

  return position;
}

export function resolveInitialOverlaps(
  positions: Map<number, { x: number; y: number }>
): Map<number, { x: number; y: number }> {
  const resolvedPositions = new Map(positions);
  let hasOverlaps = true;
  let iterations = 0;
  const maxIterations = 30;

  while (hasOverlaps && iterations < maxIterations) {
    hasOverlaps = false;
    iterations++;

    for (const [id1, pos1] of resolvedPositions.entries()) {
      for (const [id2, pos2] of resolvedPositions.entries()) {
        if (id1 >= id2) continue;

        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MIN_NODE_DISTANCE) {
          hasOverlaps = true;
          const angle = Math.atan2(dy, dx);
          const pushDistance = (MIN_NODE_DISTANCE - distance) / 2 + 15;

          const newPos1 = {
            x: Math.max(80, Math.min(1120, pos1.x + Math.cos(angle) * pushDistance)),
            y: Math.max(80, Math.min(720, pos1.y + Math.sin(angle) * pushDistance)),
          };
          const newPos2 = {
            x: Math.max(80, Math.min(1120, pos2.x - Math.cos(angle) * pushDistance)),
            y: Math.max(80, Math.min(720, pos2.y - Math.sin(angle) * pushDistance)),
          };

          resolvedPositions.set(id1, newPos1);
          resolvedPositions.set(id2, newPos2);
        }
      }
    }
  }

  return resolvedPositions;
}

export function getNodePosition(
  entity: EntityDefinition,
  allEntities: EntityDefinition[],
  nodePositions: Map<number, { x: number; y: number }>
): { x: number; y: number } {
  const stored = nodePositions.get(entity.id);
  if (stored) return stored;

  const index = allEntities.findIndex((e) => e.id === entity.id);
  const total = allEntities.length;

  if (total === 1) {
    return { x: VIEW_WIDTH / 2, y: VIEW_HEIGHT / 2 };
  }

  const cols = Math.ceil(Math.sqrt(total * 1.8));
  const col = index % cols;
  const row = Math.floor(index / cols);
  const spacing = Math.min(180, Math.max(120, VIEW_WIDTH / cols));
  const startX = 150;
  const startY = 150;
  const x = startX + col * spacing;
  const y = startY + row * spacing;
  const randomSeed = entity.id % 1000;
  const offsetX = (randomSeed % 60) - 30;
  const offsetY = ((randomSeed * 7) % 60) - 30;

  return {
    x: Math.max(80, Math.min(VIEW_WIDTH - 80, x + offsetX)),
    y: Math.max(80, Math.min(VIEW_HEIGHT - 80, y + offsetY)),
  };
}

export function resolveCollisionsOnDrop(
  droppedPosition: { x: number; y: number },
  droppedEntityId: number,
  nodePositions: Map<number, { x: number; y: number }>
): Map<number, { x: number; y: number }> {
  const newPositions = new Map(nodePositions);
  newPositions.set(droppedEntityId, droppedPosition);

  const collidingNodes: Array<{ id: number; pos: { x: number; y: number }; distance: number }> =
    [];

  for (const [otherId, otherPos] of newPositions.entries()) {
    if (otherId === droppedEntityId) continue;
    const dx = droppedPosition.x - otherPos.x;
    const dy = droppedPosition.y - otherPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < MIN_NODE_DISTANCE) {
      collidingNodes.push({ id: otherId, pos: otherPos, distance });
    }
  }

  collidingNodes.forEach(({ id: collidingId, pos: collidingPos, distance }) => {
    const dx = collidingPos.x - droppedPosition.x;
    const dy = collidingPos.y - droppedPosition.y;

    if (distance === 0) {
      const angle = Math.random() * Math.PI * 2;
      const pushDistance = MIN_NODE_DISTANCE + 20;
      newPositions.set(collidingId, {
        x: Math.max(80, Math.min(1120, droppedPosition.x + Math.cos(angle) * pushDistance)),
        y: Math.max(80, Math.min(720, droppedPosition.y + Math.sin(angle) * pushDistance)),
      });
      return;
    }

    const angle = Math.atan2(dy, dx);
    const pushDistance = MIN_NODE_DISTANCE - distance + 25;
    newPositions.set(collidingId, {
      x: Math.max(80, Math.min(1120, collidingPos.x + Math.cos(angle) * pushDistance)),
      y: Math.max(80, Math.min(720, collidingPos.y + Math.sin(angle) * pushDistance)),
    });
  });

  let hasNewCollisions = true;
  let iterations = 0;

  while (hasNewCollisions && iterations < 20) {
    hasNewCollisions = false;
    iterations++;

    for (const movedNodeId of collidingNodes.map((n) => n.id)) {
      const movedNodePos = newPositions.get(movedNodeId);
      if (!movedNodePos) continue;

      for (const [otherId, otherPos] of newPositions.entries()) {
        if (otherId === movedNodeId || otherId === droppedEntityId) continue;

        const dx = movedNodePos.x - otherPos.x;
        const dy = movedNodePos.y - otherPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MIN_NODE_DISTANCE) {
          const angle = Math.atan2(-dy, -dx);
          const pushDistance = MIN_NODE_DISTANCE - distance + 20;
          newPositions.set(otherId, {
            x: Math.max(80, Math.min(1120, otherPos.x + Math.cos(angle) * pushDistance)),
            y: Math.max(80, Math.min(720, otherPos.y + Math.sin(angle) * pushDistance)),
          });
          hasNewCollisions = true;
        }
      }
    }
  }

  return newPositions;
}

export function arrangeConnectedNodesInCircle(
  centerEntity: EntityDefinition,
  connectedNodes: EntityDefinition[],
  centerPos: { x: number; y: number },
  nodePositions: Map<number, { x: number; y: number }>
): Map<number, { x: number; y: number }> {
  const updatedPositions = new Map(nodePositions);
  const count = connectedNodes.length;
  if (count === 0) return updatedPositions;

  const baseRadius = 160;
  const dynamicRadius = baseRadius + Math.max(0, count - 8) * 20;
  const minX = 40;
  const maxX = VIEW_WIDTH - 40;
  const minY = 40;
  const maxY = VIEW_HEIGHT - 40;
  const startAngle = -Math.PI / 2;
  const minDistance = NODE_RADIUS * 2.8;

  const newPositions: Array<{ entity: EntityDefinition; x: number; y: number }> =
    connectedNodes.map((entity, i) => {
      const angle = startAngle + (2 * Math.PI * i) / count;
      return {
        entity,
        x: Math.max(minX, Math.min(maxX, centerPos.x + dynamicRadius * Math.cos(angle))),
        y: Math.max(minY, Math.min(maxY, centerPos.y + dynamicRadius * Math.sin(angle))),
      };
    });

  let hasOverlaps = true;
  let iterations = 0;

  while (hasOverlaps && iterations < 15) {
    hasOverlaps = false;
    iterations++;
    for (let i = 0; i < newPositions.length; i++) {
      for (let j = i + 1; j < newPositions.length; j++) {
        const pos1 = newPositions[i];
        const pos2 = newPositions[j];
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
          hasOverlaps = true;
          const angle = Math.atan2(dy, dx);
          const pushDistance = (minDistance - distance) / 2 + 10;
          pos1.x = Math.max(minX, Math.min(maxX, pos1.x + Math.cos(angle) * pushDistance));
          pos1.y = Math.max(minY, Math.min(maxY, pos1.y + Math.sin(angle) * pushDistance));
          pos2.x = Math.max(minX, Math.min(maxX, pos2.x - Math.cos(angle) * pushDistance));
          pos2.y = Math.max(minY, Math.min(maxY, pos2.y - Math.sin(angle) * pushDistance));
        }
      }
    }
  }

  newPositions.forEach(({ entity, x, y }) => {
    updatedPositions.set(entity.id, { x, y });
  });

  return updatedPositions;
}

export function getArrowMarkers(
  cardinality: string | undefined,
  isHighlighted: boolean
): { start: string; end: string } {
  const highlightSuffix = isHighlighted ? '-highlight' : '';

  switch (cardinality) {
    case 'OneToOne':
      return { start: '', end: '' };
    case 'OneToMany':
      return { start: '', end: `url(#arrowhead${highlightSuffix})` };
    case 'ManyToOne':
      return { start: `url(#arrowhead-reverse${highlightSuffix})`, end: '' };
    case 'ManyToMany':
      return {
        start: `url(#arrowhead-reverse${highlightSuffix})`,
        end: `url(#arrowhead${highlightSuffix})`,
      };
    default:
      return { start: '', end: `url(#arrowhead${highlightSuffix})` };
  }
}
