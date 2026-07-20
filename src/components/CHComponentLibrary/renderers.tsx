import React, { useState } from 'react';
import {
  ArrowLeft, Bookmark, CheckSquare, ChevronDown, Download, Filter, FolderOpen,
  Heart, Link2, MessageSquare, MoreHorizontal, Pencil, Plus, Search,
  SlidersHorizontal, Star, Upload, X,
} from 'lucide-react';
import type { ComponentKind } from './catalog';

function EntityDetailsPreview() {
  const [editing, setEditing] = useState(false);
  const [filename, setFilename] = useState('park-sky-external-component-test.jpg');
  const [title, setTitle] = useState('Park Sky');
  const [description, setDescription] = useState('Aerial view of the park at sunset.');

  const handleSave = () => setEditing(false);
  const handleCancel = () => setEditing(false);

  return (
    <div className="ch-detail-panels">
      <div className="ch-shadowed-panel">
        <div className="ch-panel-header">
          <h4>Overview</h4>
          {editing ? (
            <div className="ch-panel-header__actions">
              <button type="button" className="ch-btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button type="button" className="ch-btn-contained ch-btn-contained--compact" onClick={handleSave}>
                Save
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="ch-panel-header__action"
              aria-label="Edit"
              onClick={() => setEditing(true)}
            >
              <Pencil size={14} />
            </button>
          )}
        </div>
        <div className="ch-panel-body">
          {editing ? (
            <div className="ch-detail-group">
              <div className="ch-form-field">
                <label className="ch-form-label" htmlFor="ch-filename">Filename</label>
                <input
                  id="ch-filename"
                  className="ch-filled-input"
                  type="text"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                />
              </div>
              <div className="ch-form-field">
                <label className="ch-form-label" htmlFor="ch-title">Title</label>
                <input
                  id="ch-title"
                  className="ch-filled-input"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="ch-form-field">
                <label className="ch-form-label" htmlFor="ch-description">Description</label>
                <div className="ch-rich-text-field">
                  <div className="ch-rich-text-toolbar" aria-hidden="true">
                    <button type="button" className="ch-rich-text-btn"><strong>B</strong></button>
                    <button type="button" className="ch-rich-text-btn"><em>I</em></button>
                    <button type="button" className="ch-rich-text-btn">Link</button>
                  </div>
                  <textarea
                    id="ch-description"
                    className="ch-rich-text-area"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="ch-form-field">
                <span className="ch-form-label">Tags</span>
                <div className="ch-tag-list">
                  <span className="ch-tag-chip">Landscape</span>
                  <span className="ch-tag-chip">Photography</span>
                </div>
                <button type="button" className="ch-relation-add">
                  <Plus size={13} /> Add
                </button>
              </div>
            </div>
          ) : (
            <div className="ch-detail-group">
              <div className="ch-detail-field">
                <span className="ch-detail-field__label">Filename</span>
                <p className="ch-detail-field__value">{filename}</p>
              </div>
              <div className="ch-detail-field">
                <span className="ch-detail-field__label">Title</span>
                <p className="ch-detail-field__value">{title}</p>
              </div>
              <div className="ch-detail-field">
                <span className="ch-detail-field__label">Description</span>
                <p className="ch-detail-field__value">{description}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="ch-shadowed-panel">
        <div className="ch-panel-header">
          <h4>Image analysis</h4>
          {editing ? (
            <button type="button" className="ch-relation-add">
              <Plus size={13} /> Add
            </button>
          ) : null}
        </div>
        <div className="ch-panel-body">
          <div className="ch-tag-list">
            <span className="ch-tag-chip">Sky</span>
            <span className="ch-tag-chip">Tree</span>
            <span className="ch-tag-chip">Outdoor</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const R: Record<ComponentKind, () => React.ReactElement> = {
  container: () => (
    <div className="ch-container">
      <div className="ch-chip">Creation</div>
      <div className="ch-chip">Search</div>
    </div>
  ),
  divider: () => (
    <div className="ch-divider">
      <span>Section</span>
    </div>
  ),
  tabs: () => (
    <div className="ch-mui-tabs">
      <button type="button" className="ch-mui-tab active">System</button>
      <button type="button" className="ch-mui-tab">Rights</button>
      <button type="button" className="ch-mui-tab">Comments</button>
    </div>
  ),
  back: () => (
    <button type="button" className="ch-back-icon" aria-label="Back">
      <ArrowLeft size={16} />
    </button>
  ),
  title: () => <h2 className="ch-page-title">Park Sky</h2>,
  disableDeepZoom: () => (
    <div className="ch-toggle-row">
      <span>Deep zoom</span>
      <div className="ch-mui-switch off" role="switch" aria-checked={false} />
    </div>
  ),
  entityList: () => (
    <div>
      <h3 className="ch-section-header">Recent items</h3>
      <div className="ch-entity-grid">
        {['Test 123', 'US - Colorado', 'Field Study', 'Form No. 12'].map((label) => (
          <div key={label} className="ch-entity-card">
            <div className="ch-entity-card__image">{label}</div>
            <div className="ch-entity-card__title">{label}</div>
          </div>
        ))}
      </div>
    </div>
  ),
  entityDetails: () => <EntityDetailsPreview />,
  entityContent: () => (
    <div className="ch-tag-list">
      <span className="ch-tag-chip">Related press release</span>
      <span className="ch-tag-chip">Exhibition catalogue</span>
    </div>
  ),
  entityImage: () => (
    <div className="ch-detail-image" title="Show full-screen">
      <img src="https://placehold.co/400x280/E8F0FA/0066CC?text=Preview" alt="Entity preview" />
      <span className="ch-detail-image__hint">Show full-screen</span>
    </div>
  ),
  entityIndicators: () => (
    <div className="ch-tag-list">
      <span className="ch-tag-chip">Rights cleared</span>
      <span className="ch-tag-chip">Review due</span>
    </div>
  ),
  entityRenditions: () => (
    <div className="ch-shadowed-panel">
      <div className="ch-panel-header">
        <h3>Renditions</h3>
        <ChevronDown size={14} color="#68738d" />
      </div>
      <div className="ch-panel-body">
        <button type="button" className="ch-btn-outlined">
          <Plus size={13} /> Rendition
        </button>
        <table className="ch-rendition-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[
              ['Original', '2.4 MB'],
              ['Medium', '420 KB'],
              ['Thumbnail', '18 KB'],
            ].map(([name, size]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{size}</td>
                <td><Download size={12} color="#68738d" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
  entityComments: () => (
    <div className="ch-comments">
      <div className="ch-comment">
        <div className="ch-comment__avatar">RO</div>
        <div className="ch-comment__body">
          <strong>R. Osei</strong>
          <p>Can we confirm the loan return date?</p>
        </div>
      </div>
      <div className="ch-comment">
        <div className="ch-comment__avatar">KN</div>
        <div className="ch-comment__body">
          <strong>K. Novak</strong>
          <p>Confirmed for the 14th.</p>
        </div>
      </div>
    </div>
  ),
  entityRating: () => (
    <div className="ch-rating">
      {[1, 2, 3, 4].map((i) => (
        <Star key={i} size={14} fill="#0066cc" color="#0066cc" />
      ))}
      <Star size={14} color="#e5e8eb" />
      <span>4.0 (12 votes)</span>
    </div>
  ),
  entityHistory: () => (
    <div className="ch-shadowed-panel">
      <div className="ch-panel-header">
        <h3>All files</h3>
        <ChevronDown size={14} color="#68738d" />
      </div>
      <div className="ch-panel-body">
        <div className="ch-history-list">
          <div className="ch-history-item">
            <div className="ch-history-item__avatar">v3</div>
            <div className="ch-history-item__text">
              <strong>park-sky-external-component-test.jpg</strong>
              <span>Replaced · 19 Jun</span>
            </div>
          </div>
          <div className="ch-history-item">
            <div className="ch-history-item__avatar">v2</div>
            <div className="ch-history-item__text">
              <strong>park-sky-v2.jpg</strong>
              <span>Replaced · 2 Apr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  entityOperations: () => (
    <div className="ch-actions-bar">
      <button type="button" className="ch-btn-contained">
        <Download size={13} /> Download
      </button>
      <button type="button" className="ch-btn-icon-only" aria-label="Upload">
        <Upload size={16} />
      </button>
      <button type="button" className="ch-btn-icon-only" aria-label="Annotate">
        <MessageSquare size={16} />
      </button>
      <button type="button" className="ch-btn-icon-only" aria-label="Use direct link">
        <Link2 size={16} />
      </button>
      <button type="button" className="ch-btn-icon-only" aria-label="More actions">
        <MoreHorizontal size={16} />
      </button>
    </div>
  ),
  search: () => (
    <div className="ch-search-component">
      <div className="ch-search-filters">
        <div className="ch-search-tabs">
          <button type="button" className="ch-search-tab active">
            <Filter size={14} />
            Filters
          </button>
          <button type="button" className="ch-search-tab">
            <SlidersHorizontal size={14} />
            Advanced
          </button>
          <button type="button" className="ch-search-tab">
            <Heart size={14} />
            Saved
          </button>
        </div>
        <div className="ch-search-tabpanel">
          <div className="ch-facet-header">
            <h5>Usage rights</h5>
            <ChevronDown size={14} color="#68738d" />
          </div>
          <hr className="ch-hr" />
          <div className="ch-facet-header">
            <h5>Locations</h5>
          </div>
          <button type="button" className="ch-facet-item">London (12)</button>
          <button type="button" className="ch-facet-item">Paris (8)</button>
          <button type="button" className="ch-facet-item">New York (24)</button>
        </div>
      </div>
      <div className="ch-search-results">
        <div className="ch-search-results-header">
          <div className="ch-searchbar">
            <Search size={12} /> &quot;still life&quot;
          </div>
          <div className="ch-selection-actions">
            <button type="button" className="ch-text-btn">
              Select all
              <CheckSquare size={14} />
            </button>
            <button type="button" className="ch-icon-btn" aria-label="More options">
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
        <div className="ch-searchgrid">
          {['Study I', 'Form 12', 'Field III'].map((label) => (
            <div key={label} className="ch-searchcard">
              <div className="ch-searchcard-thumb">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  searchBox: () => (
    <div className="ch-searchbox-hero">
      <span className="ch-searchbox-hero__btn" aria-hidden="true">
        <Search size={14} />
      </span>
      <input
        className="ch-searchbox-hero__input"
        type="text"
        placeholder="Search Content Hub..."
        readOnly
      />
    </div>
  ),
  savedSearchGrid: () => (
    <div>
      <h3 className="ch-section-header">
        <a href="#saved">My saved searches</a>
      </h3>
      <div className="ch-tile-grid">
        <div className="ch-tile">
          <div className="ch-tile__icon"><Bookmark size={16} /></div>
          <div className="ch-tile__label">Available works</div>
          <div className="ch-tile__count">24 results</div>
        </div>
        <div className="ch-tile">
          <div className="ch-tile__icon"><FolderOpen size={16} /></div>
          <div className="ch-tile__label">On loan</div>
          <div className="ch-tile__count">8 results</div>
        </div>
        <div className="ch-tile">
          <div className="ch-tile__icon"><Bookmark size={16} /></div>
          <div className="ch-tile__label">New acquisitions</div>
          <div className="ch-tile__count">3 results</div>
        </div>
      </div>
    </div>
  ),
  selection: () => (
    <div>
      <div className="ch-selection-actions">
        <button type="button" className="ch-text-btn">
          Select all
          <CheckSquare size={14} />
        </button>
        <button type="button" className="ch-icon-btn" aria-label="Selection options">
          <ChevronDown size={14} />
        </button>
      </div>
      <p className="ch-selection-count">2 items selected · Add to collection</p>
    </div>
  ),
  creation: () => (
    <button type="button" className="ch-btn-primary">
      <Plus size={13} /> Create new asset
    </button>
  ),
  navigation: () => (
    <div className="ch-nav-pills">
      <button type="button" className="ch-nav-pill active">Assets</button>
      <button type="button" className="ch-nav-pill">Products</button>
      <button type="button" className="ch-nav-pill">Projects</button>
      <button type="button" className="ch-nav-pill">Collections</button>
    </div>
  ),
  modal: () => (
    <div className="ch-modal-preview">
      <div className="ch-modal-header">
        Linked page <X size={12} />
      </div>
      <div className="ch-modal-body">Content from the linked entity&apos;s page renders here.</div>
    </div>
  ),
  downloadOrder: () => (
    <div className="ch-orders">
      <div className="ch-order-card">
        <span className="ch-order-card__id">Order #4021</span>
        <span className="ch-order-card__meta">3 assets · 2 days ago</span>
      </div>
      <div className="ch-order-card">
        <span className="ch-order-card__id">Order #4018</span>
        <span className="ch-order-card__meta">1 asset · 1 week ago</span>
      </div>
    </div>
  ),
  chart: () => (
    <div className="ch-chart">
      <div className="ch-donut" />
      <div className="ch-chart-legend">
        <div><span className="dot blue" />Available 62%</div>
        <div><span className="dot navy" />On loan 24%</div>
        <div><span className="dot grey" />Sold 14%</div>
      </div>
    </div>
  ),
  chartFilter: () => (
    <div className="ch-chartfilter">
      {['7d', '30d', '90d'].map((r, i) => (
        <button key={r} type="button" className={i === 1 ? 'active' : ''}>{r}</button>
      ))}
    </div>
  ),
  ganttChart: () => (
    <div className="ch-gantt">
      <div className="ch-gantt-row">
        <span>Photography</span>
        <div className="ch-gantt-bar" style={{ width: '30%' }} />
      </div>
      <div className="ch-gantt-row">
        <span>Cataloguing</span>
        <div className="ch-gantt-bar" style={{ width: '55%', marginLeft: '20%' }} />
      </div>
      <div className="ch-gantt-row">
        <span>Publish</span>
        <div className="ch-gantt-bar" style={{ width: '20%', marginLeft: '70%' }} />
      </div>
    </div>
  ),
  whatsNew: () => (
    <div className="ch-whatsnew-feed">
      <div className="ch-whatsnew-item">
        <strong>AI-assisted search</strong> is now available in all portals.
      </div>
      <div className="ch-whatsnew-item">
        <strong>Bulk rights review</strong> shipped this week.
      </div>
      <div className="ch-whatsnew-dots" aria-hidden="true">
        <span className="active" />
        <span />
        <span />
      </div>
    </div>
  ),
  html: () => (
    <div className="ch-notice">
      Viewing room opens at 10:00. Please check in at reception.
    </div>
  ),
  external: () => (
    <div className="ch-external">External library embed (iframe)</div>
  ),
  massEditTable: () => (
    <table className="ch-table">
      <thead>
        <tr>
          <th><input type="checkbox" readOnly /></th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" checked readOnly /></td>
          <td>Untitled (Study)</td>
          <td>Available</td>
        </tr>
        <tr>
          <td><input type="checkbox" readOnly /></td>
          <td>Form No. 12</td>
          <td>On loan</td>
        </tr>
      </tbody>
    </table>
  ),
  stateMachineViewer: () => (
    <div className="ch-statemachine">
      <div className="ch-state done">Draft</div>
      <div className="ch-state-arrow">→</div>
      <div className="ch-state done">In review</div>
      <div className="ch-state-arrow">→</div>
      <div className="ch-state active">Published</div>
    </div>
  ),
};

export function ComponentRenderer({ kind }: { kind: ComponentKind }) {
  const Cmp = R[kind];
  if (!Cmp) {
    return <div className="ch-missing">No preview registered for &quot;{kind}&quot;</div>;
  }
  return <Cmp />;
}

