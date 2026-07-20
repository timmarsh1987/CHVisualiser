import type { EntityDefinition, EntityProperty, EntityRelation } from './types';
import { debugLog } from './debug';

function targetNameFromHref(href: string): string {
  const urlParts = href.split('/');
  return urlParts[urlParts.length - 1] ?? '';
}

export function parseEntityDefinitions(rawData: unknown[]): EntityDefinition[] {
  const entityDefinitions: EntityDefinition[] = [];

  rawData.forEach((item, index) => {
    if (!item || typeof item !== 'object') return;

    const def = item as Record<string, unknown>;
    const entityDef: EntityDefinition = {
      id: (def.id as number) ?? (def.Id as number) ?? index,
      name:
        (def.name as string) ??
        (def.Name as string) ??
        (def.identifier as string) ??
        (def.Identifier as string) ??
        `Definition ${(def.id as number) ?? index}`,
      is_built_in: Boolean(def.is_built_in),
      is_taxonomy_item_definition: Boolean(def.is_taxonomy_item_definition),
      relations: [],
      properties: [],
      description: (def.description as string) ?? (def.Description as string) ?? '',
    };

    const memberGroups = def.member_groups;
    if (Array.isArray(memberGroups)) {
      memberGroups.forEach((group) => {
        if (!group || typeof group !== 'object') return;
        const members = (group as Record<string, unknown>).members;
        if (!Array.isArray(members)) return;

        members.forEach((member) => {
          if (!member || typeof member !== 'object') return;
          const m = member as Record<string, unknown>;

          if (m.type === 'Relation' && m.associated_entitydefinition) {
            const associated = m.associated_entitydefinition as { href?: string };
            const href = associated.href ?? '';
            const targetName = href ? targetNameFromHref(href) : '';

            const relation: EntityRelation = {
              target: targetName,
              type: `${m.role ?? 'unknown'}-${m.cardinality ?? 'unknown'}`,
              name: m.name as string | undefined,
              role: m.role as string | undefined,
              cardinality: m.cardinality as string | undefined,
              isTaxonomy: Boolean(m.is_taxonomy_relation),
              isPath: Boolean(m.is_path_relation),
              allowNavigation: Boolean(m.allow_navigation),
              labels: (m.labels as Record<string, string>) ?? {},
            };
            entityDef.relations.push(relation);
          } else if (m.type !== 'Relation') {
            const property: EntityProperty = {
              name: m.name as string,
              type: m.type as string,
              contentType: m.content_type as string | undefined,
              isMandatory: Boolean(m.is_mandatory),
              isMultilanguage: Boolean(m.is_multilanguage),
              isMultivalue: Boolean(m.is_multivalue),
              is_system_owned: Boolean(m.is_system_owned),
              labels: (m.labels as Record<string, string>) ?? {},
              helptext: (m.helptext as Record<string, string>) ?? {},
            };
            entityDef.properties?.push(property);
          }
        });
      });
    }

    entityDefinitions.push(entityDef);
  });

  entityDefinitions.forEach((entityDef) => {
    entityDef.relations.forEach((relation) => {
      const targetEntity = entityDefinitions.find(
        (def) =>
          def.name === relation.target ||
          def.name.endsWith(relation.target) ||
          relation.target.endsWith(def.name)
      );
      if (targetEntity) {
        relation.target = targetEntity.name;
      }
    });
  });

  debugLog(`Parsed ${entityDefinitions.length} entity definitions`);
  return entityDefinitions;
}
