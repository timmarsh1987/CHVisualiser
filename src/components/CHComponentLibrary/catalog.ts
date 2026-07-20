/* ============================================================
   SOURCE OF TRUTH
   Component list, groupings and row/column/responsiveness
   mechanics are drawn from doc.sitecore.com/ch (Page components,
   Add rows to a page, Organize components on a page).
   The 6 functional groups below are MY OWN browsing taxonomy,
   not Sitecore's.
   ============================================================ */

export const GROUPS = [
  'Layout & organization',
  'Data & entity display',
  'Search & discovery',
  'Actions & creation',
  'Visualization & reporting',
  'Advanced & system',
] as const;

export type ComponentKind =
  | 'container'
  | 'divider'
  | 'tabs'
  | 'back'
  | 'title'
  | 'disableDeepZoom'
  | 'entityList'
  | 'entityDetails'
  | 'entityContent'
  | 'entityImage'
  | 'entityIndicators'
  | 'entityRenditions'
  | 'entityComments'
  | 'entityRating'
  | 'entityHistory'
  | 'entityOperations'
  | 'search'
  | 'searchBox'
  | 'savedSearchGrid'
  | 'selection'
  | 'creation'
  | 'navigation'
  | 'modal'
  | 'downloadOrder'
  | 'chart'
  | 'chartFilter'
  | 'ganttChart'
  | 'whatsNew'
  | 'html'
  | 'external'
  | 'massEditTable'
  | 'stateMachineViewer';

export interface CatalogEntry {
  name: string;
  group: (typeof GROUPS)[number];
  kind: ComponentKind;
  desc: string;
}

export const CATALOG: CatalogEntry[] = [
  { name: 'Container', group: 'Layout & organization', kind: 'container', desc: 'Holds other components, nested by default. Used to build compound sections like a subtitles panel.' },
  { name: 'Divider', group: 'Layout & organization', kind: 'divider', desc: 'A visual separation line between components on a page, with an optional title.' },
  { name: 'Tabs', group: 'Layout & organization', kind: 'tabs', desc: 'Organizes content across tabs. Each tab behaves like its own page and can hold its own layout.' },
  { name: 'Back', group: 'Layout & organization', kind: 'back', desc: 'A back button that returns the user to the previously visited page or the parent page.' },
  { name: 'Title', group: 'Layout & organization', kind: 'title', desc: 'Sets the page title or entity header.' },
  { name: 'Disable deep zoom', group: 'Layout & organization', kind: 'disableDeepZoom', desc: 'Turns off deep zoom on an inline preview, for a Search component or the entity image viewer.' },
  { name: 'Entity list', group: 'Data & entity display', kind: 'entityList', desc: 'Displays a collection of entities matching specific criteria.' },
  { name: 'Entity details', group: 'Data & entity display', kind: 'entityDetails', desc: 'Customises which properties and relations are shown for an entity.' },
  { name: 'Entity content', group: 'Data & entity display', kind: 'entityContent', desc: 'Includes related content inline on a page.' },
  { name: 'Entity image', group: 'Data & entity display', kind: 'entityImage', desc: "Displays a rendition of an entity's image." },
  { name: 'Entity indicators', group: 'Data & entity display', kind: 'entityIndicators', desc: 'Highlights key data as configurable indicators when a condition on a field is met.' },
  { name: 'Entity renditions', group: 'Data & entity display', kind: 'entityRenditions', desc: "Lists an entity's available renditions (original, medium, thumbnail) with quick download." },
  { name: 'Entity comments', group: 'Data & entity display', kind: 'entityComments', desc: 'Adds a discussion panel to a page for user comments.' },
  { name: 'Entity rating', group: 'Data & entity display', kind: 'entityRating', desc: 'Lets users rate content, showing the average and the count per score.' },
  { name: 'Entity history', group: 'Data & entity display', kind: 'entityHistory', desc: 'Shows the file history of an asset.' },
  { name: 'Entity operations', group: 'Data & entity display', kind: 'entityOperations', desc: "Defines which operations are available from an entity's detail page." },
  { name: 'Search', group: 'Search & discovery', kind: 'search', desc: 'Customises search results, including which fields display and their look and feel.' },
  { name: 'Search box', group: 'Search & discovery', kind: 'searchBox', desc: 'A search tile that lets a user run a search directly from the page.' },
  { name: 'Saved Search Grid', group: 'Search & discovery', kind: 'savedSearchGrid', desc: 'Displays the results of a saved search on the page.' },
  { name: 'Selection', group: 'Search & discovery', kind: 'selection', desc: 'Lets users build a selection of entities and run custom actions against it.' },
  { name: 'Creation', group: 'Actions & creation', kind: 'creation', desc: 'Lets users create new entities directly from the page.' },
  { name: 'Navigation', group: 'Actions & creation', kind: 'navigation', desc: 'A button with redirection links to any portal page in Content Hub.' },
  { name: 'Modal', group: 'Actions & creation', kind: 'modal', desc: 'Links out to another page\'s content, shown in an overlay.' },
  { name: 'Download order', group: 'Actions & creation', kind: 'downloadOrder', desc: "Shows the user's most recent download orders." },
  { name: 'Chart', group: 'Visualization & reporting', kind: 'chart', desc: 'Visualises event data as a number, pie, or donut chart.' },
  { name: 'Chart filter', group: 'Visualization & reporting', kind: 'chartFilter', desc: 'Adds a time dimension to a chart. Defaults to the last 30 days.' },
  { name: 'Gantt chart', group: 'Visualization & reporting', kind: 'ganttChart', desc: 'A timeline view for a project, showing stages and tasks.' },
  { name: "What's New", group: 'Visualization & reporting', kind: 'whatsNew', desc: 'Adds a feed of recent platform updates to a page.' },
  { name: 'HTML', group: 'Advanced & system', kind: 'html', desc: 'Inserts custom HTML into a page, editable via the interface or a source editor.' },
  { name: 'External', group: 'Advanced & system', kind: 'external', desc: 'Embeds an external library inside a Content Hub portal page.' },
  { name: 'Mass edit table', group: 'Advanced & system', kind: 'massEditTable', desc: 'Adds a mass-edit table for bulk changes across records.' },
  { name: 'StateMachine Viewer', group: 'Advanced & system', kind: 'stateMachineViewer', desc: "Shows an entity's status within its associated state flow." },
];

export const COLUMN_LAYOUTS = [
  { id: '1', label: '1 column', cols: [12] },
  { id: '2-equal', label: '2 columns (6/6)', cols: [6, 6] },
  { id: '3-equal', label: '3 columns (4/4/4)', cols: [4, 4, 4] },
  { id: '8-4', label: '2 columns (8/4)', cols: [8, 4] },
  { id: '4-8', label: '2 columns (4/8)', cols: [4, 8] },
] as const;

export const DEVICES = [
  { id: 'desktop' as const, label: 'Desktop', width: 1280 },
  { id: 'tablet' as const, label: 'Tablet', width: 768 },
  { id: 'mobile' as const, label: 'Mobile', width: 375 },
] as const;

export type DeviceId = (typeof DEVICES)[number]['id'];
