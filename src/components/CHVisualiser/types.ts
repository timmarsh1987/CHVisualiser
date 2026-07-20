import { IEntity } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/base/entity';
import { ContentHubClient } from '@sitecore/sc-contenthub-webclient-sdk/dist/clients/content-hub-client';

export interface EntityRelation {
  target: string;
  type: string;
  name?: string;
  role?: string;
  cardinality?: string;
  isTaxonomy?: boolean;
  isPath?: boolean;
  allowNavigation?: boolean;
  labels?: Record<string, string>;
  isReverse?: boolean;
}

export interface EntityProperty {
  name: string;
  type: string;
  contentType?: string;
  isMandatory?: boolean;
  isMultilanguage?: boolean;
  isMultivalue?: boolean;
  is_system_owned?: boolean;
  labels?: Record<string, string>;
  helptext?: Record<string, string>;
}

export interface EntityDefinition {
  id: number;
  name: string;
  is_built_in?: boolean;
  is_taxonomy_item_definition?: boolean;
  relations: EntityRelation[];
  properties?: EntityProperty[];
  description?: string;
}

export interface GraphViewerOptions {
  showGraphViewer?: boolean;
  entityId?: number;
  definitionEditPath?: string;
  pageSize?: number;
}

export interface GraphViewerProps {
  client: ContentHubClient;
  options: GraphViewerOptions;
  entity?: IEntity;
}

export type SortOrder = 'name' | 'connections' | 'none';
export type ViewMode = 'grid' | 'network';

export interface NetworkTransform {
  x: number;
  y: number;
  scale: number;
}

export interface LoadingProgress {
  current: number;
  total: number;
}
