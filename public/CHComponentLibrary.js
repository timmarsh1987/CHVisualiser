(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('.ch-app{--primary: #0066cc;--primary-soft: #e8f0fa;--primary-hover: #f0f6fc;--ink: #1e293b;--paper: #f7f9fa;--surface: #ffffff;--surface-subtle: #fafbfc;--line: #e5e8eb;--line-subtle: #f1f3f4;--muted: #68738d;--green: #1f9d6f;--amber: #b8860a;--danger: #b3261e;--shadow-sm: 0 1px 3px rgba(0, 0, 0, .06);--shadow-md: 0 2px 8px rgba(0, 0, 0, .08);--shadow-card: 0 5px 10px rgba(0, 0, 0, .08), 0 1px 2px rgba(0, 0, 0, .06);--radius-sm: 4px;--radius-md: 6px;--radius-lg: 8px;--panel-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);--tag-bg: rgba(0, 0, 0, .06);--tag-fg: rgba(0, 0, 0, .78);display:flex;flex-direction:column;height:660px;border:1px solid var(--line);border-radius:8px;overflow:hidden;background:var(--paper);font-family:Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Inter,sans-serif;font-size:12px;color:var(--ink)}.ch-app-tabs{display:flex;gap:0;background:var(--surface);border-bottom:1px solid var(--line);flex-shrink:0}.ch-app-tab{display:inline-flex;align-items:center;gap:6px;padding:10px 16px;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-1px;font-size:12px;font-weight:500;color:var(--muted);cursor:pointer;transition:color .12s ease,background .12s ease,border-color .12s ease}.ch-app-tab:hover{color:var(--ink);background:var(--primary-hover)}.ch-app-tab.active{color:var(--primary);border-bottom-color:var(--primary);background:var(--surface)}.ch-root{color:var(--ink);display:flex;flex:1;min-height:0;overflow:hidden;background:var(--paper)}.ch-sidebar{width:260px;background:var(--surface);border-right:1px solid var(--line);display:flex;flex-direction:column;flex-shrink:0}.ch-sidebar-header{padding:16px 16px 12px;border-bottom:1px solid var(--line);background:var(--surface-subtle)}.ch-sidebar-header h1{font-size:14px;font-weight:600;margin:0 0 2px;color:var(--ink)}.ch-sidebar-header span{font-size:11px;color:var(--muted)}.ch-sidebar-search{margin:12px 12px 4px;display:flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--line);border-radius:6px;padding:7px 10px}.ch-sidebar-search input{background:none;border:none;outline:none;color:var(--ink);font-size:12px;width:100%}.ch-sidebar-search input::placeholder{color:var(--muted)}.ch-list{overflow-y:auto;padding:4px 0 12px;flex:1}.ch-cat-label{font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);padding:12px 16px 4px;font-weight:600}.ch-item{width:calc(100% - 16px);margin:1px 8px;text-align:left;background:none;border:none;color:var(--ink);font-size:13px;padding:8px 12px;cursor:pointer;border-radius:6px;transition:background .12s ease}.ch-item:hover{background:var(--primary-hover)}.ch-item.active{background:var(--primary-soft);color:var(--primary);font-weight:500}.ch-main{flex:1;display:flex;flex-direction:column;min-width:0;background:var(--surface)}.ch-page-header{display:flex;align-items:flex-start;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--line);background:var(--surface);gap:16px}.ch-page-header-title{margin:0;font-size:20px;font-weight:600;line-height:1.25;color:var(--ink)}.ch-page-header-desc{font-size:12px;color:var(--muted);margin:4px 0 0;max-width:480px;line-height:1.45}.ch-page-header-right{display:flex;flex-direction:column;gap:8px;align-items:flex-end;flex-shrink:0}.ch-row2{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.ch-select{border:1px solid var(--line);border-radius:6px;font-size:12px;padding:6px 10px;color:var(--ink);background:var(--surface)}.ch-size-toggle,.ch-view-toggle{display:flex;border:1px solid var(--line);border-radius:6px;overflow:hidden;background:var(--surface)}.ch-size-toggle button,.ch-view-toggle button{display:flex;align-items:center;gap:4px;background:var(--surface);border:none;padding:6px 10px;font-size:11px;color:var(--muted);cursor:pointer;border-right:1px solid var(--line)}.ch-size-toggle button:last-child,.ch-view-toggle button:last-child{border-right:none}.ch-size-toggle button.active,.ch-view-toggle button.active{background:var(--primary-soft);color:var(--primary);font-weight:600}.ch-canvas-wrap{flex:1;overflow:auto;padding:20px;display:flex;justify-content:center;align-items:flex-start;background:var(--paper)}.ch-frame-label{font-size:10px;color:var(--muted);text-align:center;margin-bottom:6px}.ch-frame{background:var(--surface);border:1px solid var(--line);box-shadow:0 1px 3px #0000000f;transition:width .2s ease;padding:14px;border-radius:4px}.ch-row{display:grid;grid-template-columns:repeat(12,1fr);gap:10px}.ch-slot{position:relative;border:1px dashed var(--primary);border-radius:4px;background:var(--surface);padding:12px;min-height:60px}.ch-slot-tag{position:absolute;top:-9px;left:8px;background:var(--primary);color:#fff;font-size:9px;font-weight:600;padding:1px 6px;border-radius:3px}.ch-slot-empty{border-style:dashed;border-color:var(--line);display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:10.5px}.ch-code-panel{flex:1;overflow:auto;padding:16px 20px;background:var(--paper)}.ch-code-panel pre{color:var(--ink);font-size:11px;line-height:1.6;font-family:ui-monospace,JetBrains Mono,Menlo,monospace;margin:0;background:var(--surface);border:1px solid var(--line);border-radius:6px;padding:12px}.ch-assumption{display:flex;gap:8px;align-items:flex-start;background:#fffbeb;border:1px solid #fde68a;color:#92400e;font-size:11px;padding:8px 12px;margin:0 0 12px;border-radius:6px}.ch-hr{border:none;border-top:1px solid var(--line);margin:8px 0}.ch-text-btn{display:inline-flex;align-items:center;gap:6px;background:none;border:none;color:var(--ink);font-size:12px;padding:6px 8px;cursor:pointer;border-radius:4px}.ch-text-btn:hover{background:var(--primary-hover)}.ch-icon-btn{display:inline-flex;align-items:center;justify-content:center;background:none;border:none;color:var(--muted);padding:4px;border-radius:4px;cursor:pointer}.ch-facet-header{display:flex;align-items:center;justify-content:space-between;padding:4px 0}.ch-facet-header h5{margin:0;font-size:13px;font-weight:600;color:var(--ink)}.ch-facet-item{display:block;width:100%;text-align:left;background:none;border:none;padding:8px 10px;font-size:12px;color:var(--ink);border-radius:6px;cursor:pointer}.ch-facet-item:hover{background:var(--primary-hover)}.ch-container{display:flex;gap:8px}.ch-chip{background:var(--primary-soft);color:var(--primary);font-size:11px;padding:4px 10px;border-radius:16px}.ch-chiprow{display:flex;gap:8px;flex-wrap:wrap}.ch-divider{border-top:1px solid var(--line);margin-top:10px;position:relative}.ch-divider span{position:absolute;top:-8px;left:0;background:var(--surface);padding-right:8px;font-size:10.5px;color:var(--muted)}.ch-mui-tabs{display:flex;border-bottom:1px solid var(--line)}.ch-mui-tab{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;background:none;border:none;padding:10px 8px;font-size:12px;color:var(--muted);cursor:pointer;position:relative;border-bottom:2px solid transparent;margin-bottom:-1px}.ch-mui-tab.active{color:var(--primary);font-weight:500;border-bottom-color:var(--primary)}.ch-back{display:inline-flex;align-items:center;gap:5px;background:var(--surface);border:1px solid var(--line);border-radius:6px;padding:6px 12px;font-size:12px;color:var(--ink);cursor:pointer}.ch-page-title{margin:0;font-size:20px;font-weight:600;line-height:1.25;color:var(--ink)}.ch-toggle-row{display:flex;justify-content:space-between;align-items:center}.ch-toggle{width:32px;height:18px;border-radius:10px;background:var(--line)}.ch-table{width:100%;border-collapse:collapse}.ch-table th{text-align:left;font-size:11px;font-weight:600;color:var(--muted);border-bottom:1px solid var(--line);padding:8px 10px;background:var(--surface-subtle)}.ch-table td{font-size:12px;padding:8px 10px;border-bottom:1px solid var(--line-subtle)}.ch-badge{background:var(--primary-soft);color:var(--primary);font-size:10px;padding:2px 8px;border-radius:12px;font-weight:500}.ch-badge.amber{background:#fff3d6;color:var(--amber)}.ch-proplist{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:0}.ch-proplist div{display:flex;justify-content:space-between;border-bottom:1px solid var(--line-subtle);padding-bottom:4px}.ch-proplist dt{color:var(--muted);font-size:11px}.ch-proplist dd{margin:0;font-size:11px;font-weight:500}.ch-imagebox img{width:100%;border-radius:4px;display:block;border:1px solid var(--line)}.ch-imagebox span{font-size:10px;color:var(--muted);margin-top:4px;display:block}.ch-indicator{font-size:10.5px;padding:3px 8px;border-radius:4px}.ch-indicator.green{background:#e4f6ed;color:var(--green)}.ch-indicator.amber{background:#fff3d6;color:var(--amber)}.ch-renditions{display:flex;flex-direction:column;gap:6px}.ch-rendition-row{display:flex;justify-content:space-between;align-items:center;border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:11px}.ch-comments{display:flex;flex-direction:column;gap:8px}.ch-comment p{margin:2px 0 0;font-size:11px;color:var(--muted)}.ch-rating{display:flex;align-items:center;gap:3px}.ch-rating span{margin-left:6px;font-size:11px;color:var(--muted)}.ch-timeline{display:flex;flex-direction:column;gap:6px;font-size:11px}.ch-timeline em{color:var(--primary);font-style:normal;font-weight:600}.ch-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--primary);margin-right:6px}.ch-opsrow{display:flex;gap:6px;flex-wrap:wrap}.ch-op{border:1px solid var(--line);background:var(--surface);border-radius:6px;padding:6px 12px;font-size:11px;cursor:pointer}.ch-op:hover{background:var(--primary-hover)}.ch-op.danger{color:var(--danger);border-color:#fecaca}.ch-search-component{display:flex;gap:0;min-height:200px;border:1px solid var(--line);border-radius:4px;overflow:hidden}.ch-search-filters{width:38%;min-width:140px;border-right:1px solid var(--line);background:var(--surface);display:flex;flex-direction:column}.ch-search-tabs{display:flex;border-bottom:1px solid var(--line)}.ch-search-tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;background:none;border:none;padding:10px 4px;font-size:10px;color:var(--muted);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px}.ch-search-tab.active{color:var(--primary);border-bottom-color:var(--primary)}.ch-search-tabpanel{padding:10px 12px;overflow-y:auto;flex:1}.ch-search-results{flex:1;padding:10px 12px;background:var(--paper);min-width:0}.ch-search-results-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px;flex-wrap:wrap}.ch-searchbar{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:11px;color:var(--muted);background:var(--surface)}.ch-searchbar.wide{width:100%}.ch-searchgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.ch-searchcard{aspect-ratio:1;background:var(--surface);border:1px solid var(--line);border-radius:4px;overflow:hidden;cursor:pointer;transition:box-shadow .12s ease}.ch-searchcard:hover{box-shadow:0 2px 8px #00000014}.ch-searchcard-thumb{width:100%;height:100%;background:linear-gradient(135deg,#e8f0fa 0%,#f1f5f9 100%);display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:9px}.ch-selection-actions{display:flex;align-items:center;gap:4px}.ch-selection-count{font-size:11px;color:var(--muted);margin-top:8px}.ch-btn-primary{display:inline-flex;align-items:center;gap:6px;background:var(--primary);color:#fff;border:none;border-radius:6px;padding:8px 14px;font-size:12px;font-weight:500;cursor:pointer}.ch-btn-primary:hover{filter:brightness(1.05)}.ch-navrow{display:flex;gap:6px;flex-wrap:wrap}.ch-navbtn{border:1px solid var(--line);background:var(--surface);border-radius:6px;padding:6px 12px;font-size:11px;cursor:pointer}.ch-navbtn:hover{background:var(--primary-hover)}.ch-modal-preview{border:1px solid var(--line);border-radius:6px;overflow:hidden;box-shadow:0 4px 16px #0000001f}.ch-modal-header{display:flex;justify-content:space-between;align-items:center;background:var(--surface-subtle);border-bottom:1px solid var(--line);color:var(--ink);padding:10px 12px;font-size:12px;font-weight:500}.ch-modal-body{padding:12px;font-size:11px;color:var(--muted);background:var(--surface)}.ch-orders{display:flex;flex-direction:column;gap:6px}.ch-order{display:flex;justify-content:space-between;border-bottom:1px solid var(--line-subtle);padding-bottom:6px;font-size:11px}.ch-chart{display:flex;align-items:center;gap:14px}.ch-donut{width:56px;height:56px;border-radius:50%;background:conic-gradient(var(--primary) 0% 62%,#475569 62% 86%,var(--line) 86% 100%)}.ch-chart-legend{font-size:10.5px;display:flex;flex-direction:column;gap:4px}.ch-chart-legend .dot{display:inline-block;width:8px;height:8px;border-radius:2px;margin-right:5px}.dot.blue{background:var(--primary)}.dot.navy{background:#475569}.dot.grey{background:var(--line)}.ch-chartfilter{display:flex;gap:4px}.ch-chartfilter button{border:1px solid var(--line);background:var(--surface);padding:5px 10px;border-radius:6px;font-size:10.5px;cursor:pointer}.ch-chartfilter button.active{background:var(--primary-soft);color:var(--primary);border-color:var(--primary)}.ch-gantt{display:flex;flex-direction:column;gap:8px}.ch-gantt-row{display:flex;align-items:center;gap:8px;font-size:10.5px}.ch-gantt-row span{width:70px;flex-shrink:0;color:var(--muted)}.ch-gantt-bar{height:8px;background:var(--primary);border-radius:4px}.ch-whatsnew{display:flex;flex-direction:column;gap:6px}.ch-feeditem{font-size:11px;border-left:2px solid var(--primary);padding-left:8px}.ch-htmlblock{background:var(--ink);color:#e2e8f0;font-size:10.5px;padding:10px;border-radius:6px;font-family:ui-monospace,monospace}.ch-external{border:1px dashed var(--line);border-radius:6px;padding:24px;text-align:center;color:var(--muted);font-size:11px;background:var(--surface-subtle)}.ch-statemachine{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.ch-state{font-size:10.5px;padding:4px 10px;border-radius:16px;background:var(--line-subtle);color:var(--muted)}.ch-state.done{background:var(--primary-soft);color:var(--primary)}.ch-state.active{background:var(--primary);color:#fff;font-weight:600}.ch-state-arrow{color:var(--muted);font-size:11px}.ch-missing{color:var(--danger)}.ch-section-header{margin:0 0 10px;font-size:14px;font-weight:600;color:var(--ink)}.ch-section-header a{color:var(--primary);text-decoration:none}.ch-section-header a:hover{text-decoration:underline}.ch-searchbox-hero{max-width:580px;margin:0 auto;display:flex;align-items:stretch;border:1px solid var(--line);border-radius:var(--radius-md);background:var(--surface);overflow:hidden;box-shadow:var(--shadow-sm)}.ch-searchbox-hero__btn{display:flex;align-items:center;justify-content:center;padding:0 12px;color:var(--muted);border-right:1px solid var(--line);background:var(--surface-subtle);flex-shrink:0}.ch-searchbox-hero__input{flex:1;border:none;outline:none;padding:10px 12px;font-size:13px;color:var(--ink);background:var(--surface)}.ch-searchbox-hero__input::placeholder{color:var(--muted)}.ch-entity-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.ch-entity-card{border:1px solid var(--line);border-radius:var(--radius-sm);overflow:hidden;background:var(--surface);box-shadow:var(--shadow-sm);transition:box-shadow .15s ease,transform .15s ease;cursor:pointer}.ch-entity-card:hover{box-shadow:var(--shadow-card);transform:translateY(-1px)}.ch-entity-card__image{aspect-ratio:1;background:linear-gradient(135deg,#e8f0fa 0%,#f1f5f9 100%);display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:9px;overflow:hidden}.ch-entity-card__image img{width:100%;height:100%;object-fit:cover}.ch-entity-card__title{padding:8px 10px;font-size:11px;font-weight:600;color:var(--ink);border-top:1px solid var(--line-subtle);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ch-tile-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.ch-tile{border:1px solid var(--line);border-radius:var(--radius-md);padding:12px;background:var(--surface);text-align:center;cursor:pointer;transition:background .12s ease,box-shadow .12s ease}.ch-tile:hover{background:var(--primary-hover);box-shadow:var(--shadow-sm)}.ch-tile__icon{color:var(--primary);margin-bottom:6px}.ch-tile__label{font-size:11px;font-weight:500;color:var(--ink)}.ch-tile__count{font-size:10px;color:var(--muted);margin-top:2px}.ch-empty-state{text-align:center;padding:16px;border:1px solid var(--line);border-radius:var(--radius-md);background:var(--surface-subtle);color:var(--muted);font-size:11px}.ch-btn-outlined{display:inline-flex;align-items:center;gap:6px;background:var(--surface);color:var(--primary);border:1px solid var(--primary);border-radius:var(--radius-md);padding:7px 14px;font-size:12px;font-weight:500;cursor:pointer}.ch-btn-outlined:hover{background:var(--primary-hover)}.ch-btn-text{display:inline-flex;align-items:center;gap:6px;background:none;border:none;color:var(--primary);font-size:12px;font-weight:500;padding:6px 8px;cursor:pointer;border-radius:var(--radius-sm)}.ch-btn-text:hover{background:var(--primary-hover)}.ch-btn-text.danger{color:var(--danger)}.ch-mui-switch{width:36px;height:20px;border-radius:10px;background:var(--line);position:relative;flex-shrink:0;transition:background .15s ease}.ch-mui-switch.on{background:var(--primary)}.ch-mui-switch:after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 2px #0003;transition:left .15s ease}.ch-mui-switch.on:after{left:18px}.ch-proplist-stacked{display:flex;flex-direction:column;gap:10px;margin:0}.ch-proplist-stacked div{display:flex;flex-direction:column;gap:2px;padding-bottom:8px;border-bottom:1px solid var(--line-subtle)}.ch-proplist-stacked dt{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:var(--muted)}.ch-proplist-stacked dd{margin:0;font-size:12px;color:var(--ink)}.ch-comment{display:flex;gap:8px;padding:8px 0;border-bottom:1px solid var(--line-subtle)}.ch-comment:last-child{border-bottom:none}.ch-comment__avatar{width:24px;height:24px;border-radius:50%;background:var(--primary-soft);color:var(--primary);font-size:10px;font-weight:600;display:flex;align-items:center;justify-content:center;flex-shrink:0}.ch-comment__body strong{font-size:11px;color:var(--ink)}.ch-comment__body p{margin:2px 0 0;font-size:11px;color:var(--muted)}.ch-nav-pills{display:flex;gap:4px;flex-wrap:wrap}.ch-nav-pill{border:1px solid var(--line);background:var(--surface);border-radius:var(--radius-md);padding:7px 14px;font-size:12px;color:var(--ink);cursor:pointer;transition:background .12s ease,border-color .12s ease}.ch-nav-pill:hover{background:var(--primary-hover);border-color:var(--primary);color:var(--primary)}.ch-nav-pill.active{background:var(--primary-soft);border-color:var(--primary);color:var(--primary);font-weight:500}.ch-order-card{display:flex;justify-content:space-between;align-items:center;border:1px solid var(--line);border-radius:var(--radius-md);padding:8px 12px;font-size:11px;background:var(--surface)}.ch-order-card:hover{background:var(--primary-hover)}.ch-order-card__id{font-weight:600;color:var(--ink)}.ch-order-card__meta{color:var(--muted)}.ch-whatsnew-feed{display:flex;flex-direction:column;gap:0;border:1px solid var(--line);border-radius:var(--radius-md);overflow:hidden}.ch-whatsnew-item{padding:10px 12px;border-bottom:1px solid var(--line-subtle);background:var(--surface);font-size:11px}.ch-whatsnew-item:last-child{border-bottom:none}.ch-whatsnew-item:hover{background:var(--primary-hover)}.ch-whatsnew-item strong{color:var(--primary)}.ch-whatsnew-dots{display:flex;justify-content:center;gap:4px;padding:8px;background:var(--surface-subtle)}.ch-whatsnew-dots span{width:6px;height:6px;border-radius:50%;background:var(--line)}.ch-whatsnew-dots span.active{background:var(--primary)}.ch-notice{background:var(--primary-soft);border:1px solid #c5daf0;color:var(--ink);font-size:11px;padding:10px 12px;border-radius:var(--radius-md);line-height:1.5}.ch-table input[type=checkbox]{accent-color:var(--primary)}.ch-table tr:hover td{background:var(--primary-hover)}.ch-shadowed-panel{border:1px solid var(--line);border-radius:var(--radius-md);background:var(--surface);box-shadow:var(--panel-shadow);overflow:hidden}.ch-panel-header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--line-subtle);background:var(--surface)}.ch-panel-header h3,.ch-panel-header h4{margin:0;font-size:13px;font-weight:600;color:var(--ink)}.ch-panel-header__action{display:inline-flex;align-items:center;justify-content:center;background:none;border:none;color:var(--muted);padding:4px;border-radius:var(--radius-sm);cursor:pointer}.ch-panel-header__action:hover{background:var(--primary-hover);color:var(--primary)}.ch-panel-body{padding:10px 12px}.ch-detail-group{display:flex;flex-direction:column;gap:10px}.ch-detail-field{display:flex;flex-direction:column;gap:2px}.ch-detail-field__label{font-size:11px;font-weight:500;color:var(--muted)}.ch-detail-field__value{margin:0;font-size:12px;color:var(--ink);word-break:break-word}.ch-tag-list{display:flex;flex-wrap:wrap;gap:6px}.ch-tag-chip{display:inline-flex;align-items:center;background:var(--tag-bg);color:var(--tag-fg);font-size:11px;padding:3px 8px;border-radius:var(--radius-sm)}.ch-actions-bar{display:flex;align-items:center;gap:4px;flex-wrap:wrap}.ch-btn-contained{display:inline-flex;align-items:center;gap:6px;background:var(--primary);color:#fff;border:none;border-radius:var(--radius-md);padding:7px 14px;font-size:12px;font-weight:500;cursor:pointer}.ch-btn-contained:hover{filter:brightness(1.05)}.ch-btn-icon-only{display:inline-flex;align-items:center;justify-content:center;background:none;border:none;color:var(--muted);padding:7px;border-radius:var(--radius-sm);cursor:pointer}.ch-btn-icon-only:hover{background:var(--primary-hover);color:var(--primary)}.ch-detail-image{position:relative;border:1px solid var(--line);border-radius:var(--radius-sm);overflow:hidden;cursor:pointer;background:var(--surface-subtle)}.ch-detail-image img{width:100%;display:block;object-fit:cover;border:none;border-radius:0}.ch-detail-image__hint{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0);color:transparent;font-size:11px;transition:background .15s ease,color .15s ease}.ch-detail-image:hover .ch-detail-image__hint{background:rgba(0,0,0,.35);color:#fff}.ch-history-list{display:flex;flex-direction:column}.ch-history-item{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--line-subtle);font-size:11px}.ch-history-item:last-child{border-bottom:none}.ch-history-item__avatar{width:32px;height:32px;border-radius:var(--radius-sm);background:linear-gradient(135deg,#e8f0fa 0%,#f1f5f9 100%);flex-shrink:0;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:9px;overflow:hidden}.ch-history-item__text strong{display:block;color:var(--ink);font-weight:500}.ch-history-item__text span{color:var(--muted);font-size:10px}.ch-rendition-table{width:100%;border-collapse:collapse;margin-top:8px}.ch-rendition-table th{text-align:left;font-size:10px;font-weight:600;color:var(--muted);padding:6px 8px;border-bottom:1px solid var(--line)}.ch-rendition-table td{font-size:11px;padding:7px 8px;border-bottom:1px solid var(--line-subtle)}.ch-rendition-table tr:last-child td{border-bottom:none}.ch-accordion-header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;cursor:pointer;background:var(--surface);border:none;width:100%;text-align:left;font-size:13px;font-weight:600;color:var(--ink)}.ch-accordion-header:hover{background:var(--primary-hover)}.ch-back-icon{display:inline-flex;align-items:center;justify-content:center;background:none;border:none;color:var(--muted);padding:6px;border-radius:var(--radius-sm);cursor:pointer}.ch-back-icon:hover{background:var(--primary-hover);color:var(--primary)}.ch-detail-panels{display:flex;flex-direction:column;gap:10px}.ch-panel-header__actions{display:flex;align-items:center;gap:4px}.ch-btn-cancel{display:inline-flex;align-items:center;background:none;border:none;color:var(--ink);font-size:12px;font-weight:500;padding:6px 10px;border-radius:var(--radius-sm);cursor:pointer}.ch-btn-cancel:hover{background:var(--primary-hover)}.ch-btn-contained--compact{padding:6px 12px;font-size:11px}.ch-form-field{display:flex;flex-direction:column;gap:4px}.ch-form-label{font-size:11px;font-weight:500;color:var(--muted)}.ch-filled-input{width:100%;box-sizing:border-box;background:rgba(0,0,0,.04);border:none;border-bottom:1px solid rgba(0,0,0,.18);border-radius:var(--radius-sm) var(--radius-sm) 0 0;padding:10px 12px;font-size:12px;color:var(--ink);font-family:inherit;transition:background .15s ease,border-color .15s ease}.ch-filled-input:hover{background:rgba(0,0,0,.06)}.ch-filled-input:focus{outline:none;background:rgba(0,102,204,.06);border-bottom-color:var(--primary)}.ch-rich-text-field{border:1px solid var(--line-subtle);border-radius:var(--radius-sm);overflow:hidden;background:var(--surface)}.ch-rich-text-toolbar{display:flex;align-items:center;gap:2px;padding:4px 6px;border-bottom:1px solid var(--line-subtle);background:var(--surface-subtle)}.ch-rich-text-btn{background:none;border:none;color:var(--muted);font-size:11px;padding:3px 6px;border-radius:var(--radius-sm);cursor:pointer}.ch-rich-text-btn:hover{background:var(--primary-hover);color:var(--primary)}.ch-rich-text-area{display:block;width:100%;box-sizing:border-box;min-height:72px;padding:8px 12px;background:rgba(0,0,0,.04);border:none;border-radius:0;font-size:12px;color:var(--ink);font-family:inherit;line-height:1.45;resize:vertical}.ch-rich-text-area:focus{outline:none;background:rgba(0,102,204,.06)}.ch-relation-add{display:inline-flex;align-items:center;gap:4px;background:none;border:none;color:var(--primary);font-size:12px;font-weight:500;padding:4px 0;cursor:pointer;align-self:flex-start}.ch-relation-add:hover{text-decoration:underline}.ch-pb{display:flex;flex:1;min-width:0;min-height:0}.ch-pb-palette{width:30%;min-width:200px;max-width:360px;display:flex;flex-direction:column;border-right:1px solid var(--line);background:var(--surface);flex-shrink:0}.ch-pb-palette-header{padding:14px 14px 10px;border-bottom:1px solid var(--line);background:var(--surface-subtle)}.ch-pb-palette-header h2{margin:0;font-size:13px;font-weight:600;color:var(--ink)}.ch-pb-palette-header span{font-size:11px;color:var(--muted)}.ch-pb-palette-scroll{flex:1;overflow-y:auto;padding:4px 0 16px}.ch-pb-palette-group{margin-bottom:4px}.ch-pb-palette-item{margin:6px 10px;border:1px solid var(--line);border-radius:var(--radius-md);background:var(--surface);cursor:grab;overflow:hidden;transition:border-color .12s ease,box-shadow .12s ease}.ch-pb-palette-item:hover{border-color:var(--primary);box-shadow:var(--shadow-sm)}.ch-pb-palette-item:active{cursor:grabbing}.ch-pb-palette-item__label{display:flex;align-items:center;gap:4px;padding:6px 10px;font-size:11px;font-weight:600;color:var(--ink);background:var(--surface-subtle);border-bottom:1px solid var(--line-subtle)}.ch-pb-palette-item__grip{color:var(--muted);flex-shrink:0}.ch-pb-palette-item__preview{padding:8px 10px;max-height:140px;overflow:hidden;pointer-events:none;background:var(--paper)}.ch-pb-canvas-area{flex:1;display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--surface)}.ch-pb-toolbar{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:12px 16px;border-bottom:1px solid var(--line);flex-shrink:0}.ch-pb-toolbar__title{margin:0;font-size:16px;font-weight:600;color:var(--ink)}.ch-pb-toolbar__hint{margin:2px 0 0;font-size:11px;color:var(--muted)}.ch-pb-toolbar__actions{display:flex;gap:6px;flex-shrink:0}.ch-pb-btn{display:inline-flex;align-items:center;gap:5px;padding:6px 10px;font-size:11px;font-weight:500;color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-md);cursor:pointer}.ch-pb-btn:hover{background:var(--primary-hover);border-color:var(--primary);color:var(--primary)}.ch-pb-btn--danger:hover{color:var(--danger);border-color:#fecaca;background:#fef2f2}.ch-pb-canvas{position:relative;flex:1;overflow:auto;margin:16px;min-height:0;background:var(--paper);border:2px dashed var(--line);border-radius:var(--radius-md);transition:border-color .15s ease,background .15s ease}.ch-pb-canvas--drag-over{border-color:var(--primary);background:var(--primary-soft)}.ch-pb-canvas-empty{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:13px;pointer-events:none;text-align:center;padding:24px}.ch-pb-placed{position:absolute;display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-sm);box-shadow:var(--shadow-sm);overflow:hidden;z-index:1}.ch-pb-placed--selected{border-color:var(--primary);box-shadow:0 0 0 2px #06c3,var(--shadow-md);z-index:2}.ch-pb-placed__bar{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:4px 6px 4px 8px;background:var(--surface-subtle);border-bottom:1px solid var(--line-subtle);font-size:10px;font-weight:600;color:var(--muted);cursor:grab;flex-shrink:0;-webkit-user-select:none;user-select:none}.ch-pb-placed__bar:active{cursor:grabbing}.ch-pb-placed__remove{display:inline-flex;align-items:center;justify-content:center;padding:2px;background:none;border:none;color:var(--muted);border-radius:var(--radius-sm);cursor:pointer}.ch-pb-placed__remove:hover{background:var(--primary-hover);color:var(--danger)}.ch-pb-placed__body{flex:1;overflow:auto;padding:8px;min-height:0}.ch-pb-placed__resize{position:absolute;right:0;bottom:0;width:14px;height:14px;cursor:nwse-resize;background:linear-gradient(135deg,transparent 50%,var(--primary) 50%);border-bottom-right-radius:var(--radius-sm);opacity:.6}.ch-pb-placed--selected .ch-pb-placed__resize{opacity:1}')),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function bf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i && Object.defineProperty(e, l, i.get ? i : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Kf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rc = { exports: {} }, Ql = {}, lc = { exports: {} }, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr = Symbol.for("react.element"), Qf = Symbol.for("react.portal"), Gf = Symbol.for("react.fragment"), Xf = Symbol.for("react.strict_mode"), Yf = Symbol.for("react.profiler"), Zf = Symbol.for("react.provider"), qf = Symbol.for("react.context"), Jf = Symbol.for("react.forward_ref"), ep = Symbol.for("react.suspense"), tp = Symbol.for("react.memo"), np = Symbol.for("react.lazy"), Ss = Symbol.iterator;
function rp(e) {
  return e === null || typeof e != "object" ? null : (e = Ss && e[Ss] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ic = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, oc = Object.assign, ac = {};
function Rn(e, t, n) {
  this.props = e, this.context = t, this.refs = ac, this.updater = n || ic;
}
Rn.prototype.isReactComponent = {};
Rn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sc() {
}
sc.prototype = Rn.prototype;
function ca(e, t, n) {
  this.props = e, this.context = t, this.refs = ac, this.updater = n || ic;
}
var da = ca.prototype = new sc();
da.constructor = ca;
oc(da, Rn.prototype);
da.isPureReactComponent = !0;
var xs = Array.isArray, uc = Object.prototype.hasOwnProperty, fa = { current: null }, cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null)
    for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      uc.call(t, r) && !cc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1)
    l.children = n;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
      l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: Tr, type: e, key: i, ref: o, props: l, _owner: fa.current };
}
function lp(e, t) {
  return { $$typeof: Tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function pa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function ip(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Cs = /\/+/g;
function Mi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ip("" + e.key) : t.toString(36);
}
function rl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null)
    o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Tr:
          case Qf:
            o = !0;
        }
    }
  if (o)
    return o = e, l = l(o), e = r === "" ? "." + Mi(o, 0) : r, xs(l) ? (n = "", e != null && (n = e.replace(Cs, "$&/") + "/"), rl(l, t, n, "", function(c) {
      return c;
    })) : l != null && (pa(l) && (l = lp(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Cs, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", xs(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + Mi(i, a);
      o += rl(i, t, n, s, l);
    }
  else if (s = rp(e), typeof s == "function")
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, s = r + Mi(i, a++), o += rl(i, t, n, s, l);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function jr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return rl(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function op(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var xe = { current: null }, ll = { transition: null }, ap = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: ll, ReactCurrentOwner: fa };
function fc() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = { map: jr, forEach: function(e, t, n) {
  jr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return jr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return jr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!pa(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
I.Component = Rn;
I.Fragment = Gf;
I.Profiler = Yf;
I.PureComponent = ca;
I.StrictMode = Xf;
I.Suspense = ep;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ap;
I.act = fc;
I.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = oc({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = fa.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (s in t)
      uc.call(t, s) && !cc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++)
      a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Tr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
I.createContext = function(e) {
  return e = { $$typeof: qf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Zf, _context: e }, e.Consumer = e;
};
I.createElement = dc;
I.createFactory = function(e) {
  var t = dc.bind(null, e);
  return t.type = e, t;
};
I.createRef = function() {
  return { current: null };
};
I.forwardRef = function(e) {
  return { $$typeof: Jf, render: e };
};
I.isValidElement = pa;
I.lazy = function(e) {
  return { $$typeof: np, _payload: { _status: -1, _result: e }, _init: op };
};
I.memo = function(e, t) {
  return { $$typeof: tp, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function(e) {
  var t = ll.transition;
  ll.transition = {};
  try {
    e();
  } finally {
    ll.transition = t;
  }
};
I.unstable_act = fc;
I.useCallback = function(e, t) {
  return xe.current.useCallback(e, t);
};
I.useContext = function(e) {
  return xe.current.useContext(e);
};
I.useDebugValue = function() {
};
I.useDeferredValue = function(e) {
  return xe.current.useDeferredValue(e);
};
I.useEffect = function(e, t) {
  return xe.current.useEffect(e, t);
};
I.useId = function() {
  return xe.current.useId();
};
I.useImperativeHandle = function(e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function(e, t) {
  return xe.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function(e, t) {
  return xe.current.useLayoutEffect(e, t);
};
I.useMemo = function(e, t) {
  return xe.current.useMemo(e, t);
};
I.useReducer = function(e, t, n) {
  return xe.current.useReducer(e, t, n);
};
I.useRef = function(e) {
  return xe.current.useRef(e);
};
I.useState = function(e) {
  return xe.current.useState(e);
};
I.useSyncExternalStore = function(e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function() {
  return xe.current.useTransition();
};
I.version = "18.3.1";
lc.exports = I;
var z = lc.exports;
const sp = /* @__PURE__ */ Kf(z), co = /* @__PURE__ */ bf({
  __proto__: null,
  default: sp
}, [z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up = z, cp = Symbol.for("react.element"), dp = Symbol.for("react.fragment"), fp = Object.prototype.hasOwnProperty, pp = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, hp = { key: !0, ref: !0, __self: !0, __source: !0 };
function pc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t)
    fp.call(t, r) && !hp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: cp, type: e, key: i, ref: o, props: l, _owner: pp.current };
}
Ql.Fragment = dp;
Ql.jsx = pc;
Ql.jsxs = pc;
rc.exports = Ql;
var ha = rc.exports;
const mp = ha.Fragment, u = ha.jsx, g = ha.jsxs;
var hc = { exports: {} }, De = {}, mc = { exports: {} }, yc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(T, R) {
    var M = T.length;
    T.push(R);
    e:
      for (; 0 < M; ) {
        var q = M - 1 >>> 1, oe = T[q];
        if (0 < l(oe, R))
          T[q] = R, T[M] = oe, M = q;
        else
          break e;
      }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0)
      return null;
    var R = T[0], M = T.pop();
    if (M !== R) {
      T[0] = M;
      e:
        for (var q = 0, oe = T.length, Ar = oe >>> 1; q < Ar; ) {
          var jt = 2 * (q + 1) - 1, Ri = T[jt], Ut = jt + 1, Fr = T[Ut];
          if (0 > l(Ri, M))
            Ut < oe && 0 > l(Fr, Ri) ? (T[q] = Fr, T[Ut] = M, q = Ut) : (T[q] = Ri, T[jt] = M, q = jt);
          else if (Ut < oe && 0 > l(Fr, M))
            T[q] = Fr, T[Ut] = M, q = Ut;
          else
            break e;
        }
    }
    return R;
  }
  function l(T, R) {
    var M = T.sortIndex - R.sortIndex;
    return M !== 0 ? M : T.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, a = o.now();
    e.unstable_now = function() {
      return o.now() - a;
    };
  }
  var s = [], c = [], m = 1, y = null, h = 3, S = !1, k = !1, w = !1, E = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(T) {
    for (var R = n(c); R !== null; ) {
      if (R.callback === null)
        r(c);
      else if (R.startTime <= T)
        r(c), R.sortIndex = R.expirationTime, t(s, R);
      else
        break;
      R = n(c);
    }
  }
  function v(T) {
    if (w = !1, f(T), !k)
      if (n(s) !== null)
        k = !0, Li(x);
      else {
        var R = n(c);
        R !== null && Oi(v, R.startTime - T);
      }
  }
  function x(T, R) {
    k = !1, w && (w = !1, p(L), L = -1), S = !0;
    var M = h;
    try {
      for (f(R), y = n(s); y !== null && (!(y.expirationTime > R) || T && !ie()); ) {
        var q = y.callback;
        if (typeof q == "function") {
          y.callback = null, h = y.priorityLevel;
          var oe = q(y.expirationTime <= R);
          R = e.unstable_now(), typeof oe == "function" ? y.callback = oe : y === n(s) && r(s), f(R);
        } else
          r(s);
        y = n(s);
      }
      if (y !== null)
        var Ar = !0;
      else {
        var jt = n(c);
        jt !== null && Oi(v, jt.startTime - R), Ar = !1;
      }
      return Ar;
    } finally {
      y = null, h = M, S = !1;
    }
  }
  var _ = !1, C = null, L = -1, B = 5, O = -1;
  function ie() {
    return !(e.unstable_now() - O < B);
  }
  function Dn() {
    if (C !== null) {
      var T = e.unstable_now();
      O = T;
      var R = !0;
      try {
        R = C(!0, T);
      } finally {
        R ? An() : (_ = !1, C = null);
      }
    } else
      _ = !1;
  }
  var An;
  if (typeof d == "function")
    An = function() {
      d(Dn);
    };
  else if (typeof MessageChannel < "u") {
    var ks = new MessageChannel(), Vf = ks.port2;
    ks.port1.onmessage = Dn, An = function() {
      Vf.postMessage(null);
    };
  } else
    An = function() {
      E(Dn, 0);
    };
  function Li(T) {
    C = T, _ || (_ = !0, An());
  }
  function Oi(T, R) {
    L = E(function() {
      T(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    k || S || (k = !0, Li(x));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(T) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = h;
    }
    var M = h;
    h = R;
    try {
      return T();
    } finally {
      h = M;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, R) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var M = h;
    h = T;
    try {
      return R();
    } finally {
      h = M;
    }
  }, e.unstable_scheduleCallback = function(T, R, M) {
    var q = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? q + M : q) : M = q, T) {
      case 1:
        var oe = -1;
        break;
      case 2:
        oe = 250;
        break;
      case 5:
        oe = 1073741823;
        break;
      case 4:
        oe = 1e4;
        break;
      default:
        oe = 5e3;
    }
    return oe = M + oe, T = { id: m++, callback: R, priorityLevel: T, startTime: M, expirationTime: oe, sortIndex: -1 }, M > q ? (T.sortIndex = M, t(c, T), n(s) === null && T === n(c) && (w ? (p(L), L = -1) : w = !0, Oi(v, M - q))) : (T.sortIndex = oe, t(s, T), k || S || (k = !0, Li(x))), T;
  }, e.unstable_shouldYield = ie, e.unstable_wrapCallback = function(T) {
    var R = h;
    return function() {
      var M = h;
      h = R;
      try {
        return T.apply(this, arguments);
      } finally {
        h = M;
      }
    };
  };
})(yc);
mc.exports = yc;
var yp = mc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp = z, $e = yp;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var vc = /* @__PURE__ */ new Set(), sr = {};
function Jt(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (sr[e] = t, e = 0; e < t.length; e++)
    vc.add(t[e]);
}
var pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fo = Object.prototype.hasOwnProperty, gp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ns = {}, Es = {};
function wp(e) {
  return fo.call(Es, e) ? !0 : fo.call(Ns, e) ? !1 : gp.test(e) ? Es[e] = !0 : (Ns[e] = !0, !1);
}
function kp(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Sp(e, t, n, r) {
  if (t === null || typeof t > "u" || kp(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ce(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  he[e] = new Ce(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  he[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  he[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  he[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  he[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  he[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  he[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  he[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  he[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ma = /[\-:]([a-z])/g;
function ya(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ma,
    ya
  );
  he[t] = new Ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ma, ya);
  he[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ma, ya);
  he[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  he[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  he[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function va(e, t, n, r) {
  var l = he.hasOwnProperty(t) ? he[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sp(t, n, l, r) && (n = null), r || l === null ? wp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ur = Symbol.for("react.element"), rn = Symbol.for("react.portal"), ln = Symbol.for("react.fragment"), ga = Symbol.for("react.strict_mode"), po = Symbol.for("react.profiler"), gc = Symbol.for("react.provider"), wc = Symbol.for("react.context"), wa = Symbol.for("react.forward_ref"), ho = Symbol.for("react.suspense"), mo = Symbol.for("react.suspense_list"), ka = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), kc = Symbol.for("react.offscreen"), _s = Symbol.iterator;
function Fn(e) {
  return e === null || typeof e != "object" ? null : (e = _s && e[_s] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Ii;
function Gn(e) {
  if (Ii === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ii = t && t[1] || "";
    }
  return `
` + Ii + e;
}
var $i = !1;
function Di(e, t) {
  if (!e || $i)
    return "";
  $i = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, a = i.length - 1; 1 <= o && 0 <= a && l[o] !== i[a]; )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if (o--, a--, 0 > a || l[o] !== i[a]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    $i = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Gn(e) : "";
}
function xp(e) {
  switch (e.tag) {
    case 5:
      return Gn(e.type);
    case 16:
      return Gn("Lazy");
    case 13:
      return Gn("Suspense");
    case 19:
      return Gn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Di(e.type, !1), e;
    case 11:
      return e = Di(e.type.render, !1), e;
    case 1:
      return e = Di(e.type, !0), e;
    default:
      return "";
  }
}
function yo(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case ln:
      return "Fragment";
    case rn:
      return "Portal";
    case po:
      return "Profiler";
    case ga:
      return "StrictMode";
    case ho:
      return "Suspense";
    case mo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case wc:
        return (e.displayName || "Context") + ".Consumer";
      case gc:
        return (e._context.displayName || "Context") + ".Provider";
      case wa:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ka:
        return t = e.displayName || null, t !== null ? t : yo(e.type) || "Memo";
      case kt:
        t = e._payload, e = e._init;
        try {
          return yo(e(t));
        } catch {
        }
    }
  return null;
}
function Cp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return yo(t);
    case 8:
      return t === ga ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function It(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Sc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Np(e) {
  var t = Sc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Br(e) {
  e._valueTracker || (e._valueTracker = Np(e));
}
function xc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Sc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function wl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vo(e, t) {
  var n = t.checked;
  return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ps(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = It(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Cc(e, t) {
  t = t.checked, t != null && va(e, "checked", t, !1);
}
function go(e, t) {
  Cc(e, t);
  var n = It(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? wo(e, t.type, n) : t.hasOwnProperty("defaultValue") && wo(e, t.type, It(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ts(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function wo(e, t, n) {
  (t !== "number" || wl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function yn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ko(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(N(91));
  return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function zs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(N(92));
      if (Xn(n)) {
        if (1 < n.length)
          throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: It(n) };
}
function Nc(e, t) {
  var n = It(t.value), r = It(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ls(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ec(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function So(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ec(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Hr, _c = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Hr = Hr || document.createElement("div"), Hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Hr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Ep = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function(e) {
  Ep.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), qn[t] = qn[e];
  });
});
function Pc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px";
}
function Tc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Pc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var _p = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xo(e, t) {
  if (t) {
    if (_p[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(N(62));
  }
}
function Co(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var No = null;
function Sa(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Eo = null, vn = null, gn = null;
function Os(e) {
  if (e = Or(e)) {
    if (typeof Eo != "function")
      throw Error(N(280));
    var t = e.stateNode;
    t && (t = ql(t), Eo(e.stateNode, e.type, t));
  }
}
function zc(e) {
  vn ? gn ? gn.push(e) : gn = [e] : vn = e;
}
function Lc() {
  if (vn) {
    var e = vn, t = gn;
    if (gn = vn = null, Os(e), t)
      for (e = 0; e < t.length; e++)
        Os(t[e]);
  }
}
function Oc(e, t) {
  return e(t);
}
function Rc() {
}
var Ai = !1;
function Mc(e, t, n) {
  if (Ai)
    return e(t, n);
  Ai = !0;
  try {
    return Oc(e, t, n);
  } finally {
    Ai = !1, (vn !== null || gn !== null) && (Rc(), Lc());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ql(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(N(231, t, typeof n));
  return n;
}
var _o = !1;
if (pt)
  try {
    var jn = {};
    Object.defineProperty(jn, "passive", { get: function() {
      _o = !0;
    } }), window.addEventListener("test", jn, jn), window.removeEventListener("test", jn, jn);
  } catch {
    _o = !1;
  }
function Pp(e, t, n, r, l, i, o, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Jn = !1, kl = null, Sl = !1, Po = null, Tp = { onError: function(e) {
  Jn = !0, kl = e;
} };
function zp(e, t, n, r, l, i, o, a, s) {
  Jn = !1, kl = null, Pp.apply(Tp, arguments);
}
function Lp(e, t, n, r, l, i, o, a, s) {
  if (zp.apply(this, arguments), Jn) {
    if (Jn) {
      var c = kl;
      Jn = !1, kl = null;
    } else
      throw Error(N(198));
    Sl || (Sl = !0, Po = c);
  }
}
function en(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ic(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Rs(e) {
  if (en(e) !== e)
    throw Error(N(188));
}
function Op(e) {
  var t = e.alternate;
  if (!t) {
    if (t = en(e), t === null)
      throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n)
          return Rs(l), e;
        if (i === r)
          return Rs(l), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return)
      n = l, r = i;
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          o = !0, n = l, r = i;
          break;
        }
        if (a === r) {
          o = !0, r = l, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            o = !0, n = i, r = l;
            break;
          }
          if (a === r) {
            o = !0, r = i, n = l;
            break;
          }
          a = a.sibling;
        }
        if (!o)
          throw Error(N(189));
      }
    }
    if (n.alternate !== r)
      throw Error(N(190));
  }
  if (n.tag !== 3)
    throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function $c(e) {
  return e = Op(e), e !== null ? Dc(e) : null;
}
function Dc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Dc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Ac = $e.unstable_scheduleCallback, Ms = $e.unstable_cancelCallback, Rp = $e.unstable_shouldYield, Mp = $e.unstable_requestPaint, J = $e.unstable_now, Ip = $e.unstable_getCurrentPriorityLevel, xa = $e.unstable_ImmediatePriority, Fc = $e.unstable_UserBlockingPriority, xl = $e.unstable_NormalPriority, $p = $e.unstable_LowPriority, jc = $e.unstable_IdlePriority, Gl = null, it = null;
function Dp(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(Gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Ze = Math.clz32 ? Math.clz32 : jp, Ap = Math.log, Fp = Math.LN2;
function jp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ap(e) / Fp | 0) | 0;
}
var Wr = 64, Vr = 4194304;
function Yn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Cl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? r = Yn(a) : (i &= o, i !== 0 && (r = Yn(i)));
  } else
    o = n & ~l, o !== 0 ? r = Yn(o) : i !== 0 && (r = Yn(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Ze(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Up(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Bp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Ze(i), a = 1 << o, s = l[o];
    s === -1 ? (!(a & n) || a & r) && (l[o] = Up(a, t)) : s <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function To(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Uc() {
  var e = Wr;
  return Wr <<= 1, !(Wr & 4194240) && (Wr = 64), e;
}
function Fi(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function zr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function Hp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ze(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Ca(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var F = 0;
function Bc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Hc, Na, Wc, Vc, bc, zo = !1, br = [], _t = null, Pt = null, Tt = null, dr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map(), xt = [], Wp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Is(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      Tt = null;
      break;
    case "pointerover":
    case "pointerout":
      dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Or(t), t !== null && Na(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Vp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return _t = Un(_t, e, t, n, r, l), !0;
    case "dragenter":
      return Pt = Un(Pt, e, t, n, r, l), !0;
    case "mouseover":
      return Tt = Un(Tt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return dr.set(i, Un(dr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, fr.set(i, Un(fr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Kc(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = en(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ic(n), t !== null) {
          e.blockedOn = t, bc(e.priority, function() {
            Wc(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function il(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      No = r, n.target.dispatchEvent(r), No = null;
    } else
      return t = Or(n), t !== null && Na(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function $s(e, t, n) {
  il(e) && n.delete(t);
}
function bp() {
  zo = !1, _t !== null && il(_t) && (_t = null), Pt !== null && il(Pt) && (Pt = null), Tt !== null && il(Tt) && (Tt = null), dr.forEach($s), fr.forEach($s);
}
function Bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, zo || (zo = !0, $e.unstable_scheduleCallback($e.unstable_NormalPriority, bp)));
}
function pr(e) {
  function t(l) {
    return Bn(l, e);
  }
  if (0 < br.length) {
    Bn(br[0], e);
    for (var n = 1; n < br.length; n++) {
      var r = br[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (_t !== null && Bn(_t, e), Pt !== null && Bn(Pt, e), Tt !== null && Bn(Tt, e), dr.forEach(t), fr.forEach(t), n = 0; n < xt.length; n++)
    r = xt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xt.length && (n = xt[0], n.blockedOn === null); )
    Kc(n), n.blockedOn === null && xt.shift();
}
var wn = gt.ReactCurrentBatchConfig, Nl = !0;
function Kp(e, t, n, r) {
  var l = F, i = wn.transition;
  wn.transition = null;
  try {
    F = 1, Ea(e, t, n, r);
  } finally {
    F = l, wn.transition = i;
  }
}
function Qp(e, t, n, r) {
  var l = F, i = wn.transition;
  wn.transition = null;
  try {
    F = 4, Ea(e, t, n, r);
  } finally {
    F = l, wn.transition = i;
  }
}
function Ea(e, t, n, r) {
  if (Nl) {
    var l = Lo(e, t, n, r);
    if (l === null)
      Gi(e, t, r, El, n), Is(e, r);
    else if (Vp(l, e, t, n, r))
      r.stopPropagation();
    else if (Is(e, r), t & 4 && -1 < Wp.indexOf(e)) {
      for (; l !== null; ) {
        var i = Or(l);
        if (i !== null && Hc(i), i = Lo(e, t, n, r), i === null && Gi(e, t, r, El, n), i === l)
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else
      Gi(e, t, r, null, n);
  }
}
var El = null;
function Lo(e, t, n, r) {
  if (El = null, e = Sa(r), e = Wt(e), e !== null)
    if (t = en(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ic(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return El = e, null;
}
function Qc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ip()) {
        case xa:
          return 1;
        case Fc:
          return 4;
        case xl:
        case $p:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nt = null, _a = null, ol = null;
function Gc() {
  if (ol)
    return ol;
  var e, t = _a, n = t.length, r, l = "value" in Nt ? Nt.value : Nt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
    ;
  return ol = l.slice(e, 1 < r ? 1 - r : void 0);
}
function al(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Kr() {
  return !0;
}
function Ds() {
  return !1;
}
function Ae(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Kr : Ds, this.isPropagationStopped = Ds, this;
  }
  return G(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Kr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Kr);
  }, persist: function() {
  }, isPersistent: Kr }), t;
}
var Mn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Pa = Ae(Mn), Lr = G({}, Mn, { view: 0, detail: 0 }), Gp = Ae(Lr), ji, Ui, Hn, Xl = G({}, Lr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ta, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (ji = e.screenX - Hn.screenX, Ui = e.screenY - Hn.screenY) : Ui = ji = 0, Hn = e), ji);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ui;
} }), As = Ae(Xl), Xp = G({}, Xl, { dataTransfer: 0 }), Yp = Ae(Xp), Zp = G({}, Lr, { relatedTarget: 0 }), Bi = Ae(Zp), qp = G({}, Mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = Ae(qp), eh = G({}, Mn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), th = Ae(eh), nh = G({}, Mn, { data: 0 }), Fs = Ae(nh), rh = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, lh = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, ih = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function oh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ih[e]) ? !!t[e] : !1;
}
function Ta() {
  return oh;
}
var ah = G({}, Lr, { key: function(e) {
  if (e.key) {
    var t = rh[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = al(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ta, charCode: function(e) {
  return e.type === "keypress" ? al(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? al(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), sh = Ae(ah), uh = G({}, Xl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), js = Ae(uh), ch = G({}, Lr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ta }), dh = Ae(ch), fh = G({}, Mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ph = Ae(fh), hh = G({}, Xl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), mh = Ae(hh), yh = [9, 13, 27, 32], za = pt && "CompositionEvent" in window, er = null;
pt && "documentMode" in document && (er = document.documentMode);
var vh = pt && "TextEvent" in window && !er, Xc = pt && (!za || er && 8 < er && 11 >= er), Us = String.fromCharCode(32), Bs = !1;
function Yc(e, t) {
  switch (e) {
    case "keyup":
      return yh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Zc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function gh(e, t) {
  switch (e) {
    case "compositionend":
      return Zc(t);
    case "keypress":
      return t.which !== 32 ? null : (Bs = !0, Us);
    case "textInput":
      return e = t.data, e === Us && Bs ? null : e;
    default:
      return null;
  }
}
function wh(e, t) {
  if (on)
    return e === "compositionend" || !za && Yc(e, t) ? (e = Gc(), ol = _a = Nt = null, on = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Xc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kh[e.type] : t === "textarea";
}
function qc(e, t, n, r) {
  zc(r), t = _l(t, "onChange"), 0 < t.length && (n = new Pa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var tr = null, hr = null;
function Sh(e) {
  ud(e, 0);
}
function Yl(e) {
  var t = un(e);
  if (xc(t))
    return e;
}
function xh(e, t) {
  if (e === "change")
    return t;
}
var Jc = !1;
if (pt) {
  var Hi;
  if (pt) {
    var Wi = "oninput" in document;
    if (!Wi) {
      var Ws = document.createElement("div");
      Ws.setAttribute("oninput", "return;"), Wi = typeof Ws.oninput == "function";
    }
    Hi = Wi;
  } else
    Hi = !1;
  Jc = Hi && (!document.documentMode || 9 < document.documentMode);
}
function Vs() {
  tr && (tr.detachEvent("onpropertychange", ed), hr = tr = null);
}
function ed(e) {
  if (e.propertyName === "value" && Yl(hr)) {
    var t = [];
    qc(t, hr, e, Sa(e)), Mc(Sh, t);
  }
}
function Ch(e, t, n) {
  e === "focusin" ? (Vs(), tr = t, hr = n, tr.attachEvent("onpropertychange", ed)) : e === "focusout" && Vs();
}
function Nh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yl(hr);
}
function Eh(e, t) {
  if (e === "click")
    return Yl(t);
}
function _h(e, t) {
  if (e === "input" || e === "change")
    return Yl(t);
}
function Ph(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : Ph;
function mr(e, t) {
  if (Je(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!fo.call(t, l) || !Je(e[l], t[l]))
      return !1;
  }
  return !0;
}
function bs(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Ks(e, t) {
  var n = bs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = bs(n);
  }
}
function td(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? td(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function nd() {
  for (var e = window, t = wl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = wl(e.document);
  }
  return t;
}
function La(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Th(e) {
  var t = nd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && td(n.ownerDocument.documentElement, n)) {
    if (r !== null && La(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ks(n, i);
        var o = Ks(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var zh = pt && "documentMode" in document && 11 >= document.documentMode, an = null, Oo = null, nr = null, Ro = !1;
function Qs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ro || an == null || an !== wl(r) || (r = an, "selectionStart" in r && La(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), nr && mr(nr, r) || (nr = r, r = _l(Oo, "onSelect"), 0 < r.length && (t = new Pa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = an)));
}
function Qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var sn = { animationend: Qr("Animation", "AnimationEnd"), animationiteration: Qr("Animation", "AnimationIteration"), animationstart: Qr("Animation", "AnimationStart"), transitionend: Qr("Transition", "TransitionEnd") }, Vi = {}, rd = {};
pt && (rd = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
function Zl(e) {
  if (Vi[e])
    return Vi[e];
  if (!sn[e])
    return e;
  var t = sn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in rd)
      return Vi[e] = t[n];
  return e;
}
var ld = Zl("animationend"), id = Zl("animationiteration"), od = Zl("animationstart"), ad = Zl("transitionend"), sd = /* @__PURE__ */ new Map(), Gs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dt(e, t) {
  sd.set(e, t), Jt(t, [e]);
}
for (var bi = 0; bi < Gs.length; bi++) {
  var Ki = Gs[bi], Lh = Ki.toLowerCase(), Oh = Ki[0].toUpperCase() + Ki.slice(1);
  Dt(Lh, "on" + Oh);
}
Dt(ld, "onAnimationEnd");
Dt(id, "onAnimationIteration");
Dt(od, "onAnimationStart");
Dt("dblclick", "onDoubleClick");
Dt("focusin", "onFocus");
Dt("focusout", "onBlur");
Dt(ad, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
Jt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Jt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function Xs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Lp(r, t, void 0, e), e.currentTarget = null;
}
function ud(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o], s = a.instance, c = a.currentTarget;
          if (a = a.listener, s !== i && l.isPropagationStopped())
            break e;
          Xs(l, a, c), i = s;
        }
      else
        for (o = 0; o < r.length; o++) {
          if (a = r[o], s = a.instance, c = a.currentTarget, a = a.listener, s !== i && l.isPropagationStopped())
            break e;
          Xs(l, a, c), i = s;
        }
    }
  }
  if (Sl)
    throw e = Po, Sl = !1, Po = null, e;
}
function W(e, t) {
  var n = t[Ao];
  n === void 0 && (n = t[Ao] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (cd(t, e, 2, !1), n.add(r));
}
function Qi(e, t, n) {
  var r = 0;
  t && (r |= 4), cd(n, e, r, t);
}
var Gr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Gr]) {
    e[Gr] = !0, vc.forEach(function(n) {
      n !== "selectionchange" && (Rh.has(n) || Qi(n, !1, e), Qi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gr] || (t[Gr] = !0, Qi("selectionchange", !1, t));
  }
}
function cd(e, t, n, r) {
  switch (Qc(t)) {
    case 1:
      var l = Kp;
      break;
    case 4:
      l = Qp;
      break;
    default:
      l = Ea;
  }
  n = l.bind(null, t, n, e), l = void 0, !_o || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Gi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var a = r.stateNode.containerInfo;
          if (a === l || a.nodeType === 8 && a.parentNode === l)
            break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              o = o.return;
            }
          for (; a !== null; ) {
            if (o = Wt(a), o === null)
              return;
            if (s = o.tag, s === 5 || s === 6) {
              r = i = o;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
  Mc(function() {
    var c = i, m = Sa(n), y = [];
    e: {
      var h = sd.get(e);
      if (h !== void 0) {
        var S = Pa, k = e;
        switch (e) {
          case "keypress":
            if (al(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            S = sh;
            break;
          case "focusin":
            k = "focus", S = Bi;
            break;
          case "focusout":
            k = "blur", S = Bi;
            break;
          case "beforeblur":
          case "afterblur":
            S = Bi;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = As;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Yp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = dh;
            break;
          case ld:
          case id:
          case od:
            S = Jp;
            break;
          case ad:
            S = ph;
            break;
          case "scroll":
            S = Gp;
            break;
          case "wheel":
            S = mh;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = th;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = js;
        }
        var w = (t & 4) !== 0, E = !w && e === "scroll", p = w ? h !== null ? h + "Capture" : null : h;
        w = [];
        for (var d = c, f; d !== null; ) {
          f = d;
          var v = f.stateNode;
          if (f.tag === 5 && v !== null && (f = v, p !== null && (v = cr(d, p), v != null && w.push(vr(d, v, f)))), E)
            break;
          d = d.return;
        }
        0 < w.length && (h = new S(h, k, null, n, m), y.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", h && n !== No && (k = n.relatedTarget || n.fromElement) && (Wt(k) || k[ht]))
          break e;
        if ((S || h) && (h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (k = n.relatedTarget || n.toElement, S = c, k = k ? Wt(k) : null, k !== null && (E = en(k), k !== E || k.tag !== 5 && k.tag !== 6) && (k = null)) : (S = null, k = c), S !== k)) {
          if (w = As, v = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = js, v = "onPointerLeave", p = "onPointerEnter", d = "pointer"), E = S == null ? h : un(S), f = k == null ? h : un(k), h = new w(v, d + "leave", S, n, m), h.target = E, h.relatedTarget = f, v = null, Wt(m) === c && (w = new w(p, d + "enter", k, n, m), w.target = f, w.relatedTarget = E, v = w), E = v, S && k)
            t: {
              for (w = S, p = k, d = 0, f = w; f; f = tn(f))
                d++;
              for (f = 0, v = p; v; v = tn(v))
                f++;
              for (; 0 < d - f; )
                w = tn(w), d--;
              for (; 0 < f - d; )
                p = tn(p), f--;
              for (; d--; ) {
                if (w === p || p !== null && w === p.alternate)
                  break t;
                w = tn(w), p = tn(p);
              }
              w = null;
            }
          else
            w = null;
          S !== null && Ys(y, h, S, w, !1), k !== null && E !== null && Ys(y, E, k, w, !0);
        }
      }
      e: {
        if (h = c ? un(c) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file")
          var x = xh;
        else if (Hs(h))
          if (Jc)
            x = _h;
          else {
            x = Nh;
            var _ = Ch;
          }
        else
          (S = h.nodeName) && S.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (x = Eh);
        if (x && (x = x(e, c))) {
          qc(y, x, n, m);
          break e;
        }
        _ && _(e, h, c), e === "focusout" && (_ = h._wrapperState) && _.controlled && h.type === "number" && wo(h, "number", h.value);
      }
      switch (_ = c ? un(c) : window, e) {
        case "focusin":
          (Hs(_) || _.contentEditable === "true") && (an = _, Oo = c, nr = null);
          break;
        case "focusout":
          nr = Oo = an = null;
          break;
        case "mousedown":
          Ro = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ro = !1, Qs(y, n, m);
          break;
        case "selectionchange":
          if (zh)
            break;
        case "keydown":
        case "keyup":
          Qs(y, n, m);
      }
      var C;
      if (za)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        on ? Yc(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (Xc && n.locale !== "ko" && (on || L !== "onCompositionStart" ? L === "onCompositionEnd" && on && (C = Gc()) : (Nt = m, _a = "value" in Nt ? Nt.value : Nt.textContent, on = !0)), _ = _l(c, L), 0 < _.length && (L = new Fs(L, e, null, n, m), y.push({ event: L, listeners: _ }), C ? L.data = C : (C = Zc(n), C !== null && (L.data = C)))), (C = vh ? gh(e, n) : wh(e, n)) && (c = _l(c, "onBeforeInput"), 0 < c.length && (m = new Fs("onBeforeInput", "beforeinput", null, n, m), y.push({ event: m, listeners: c }), m.data = C));
    }
    ud(y, t);
  });
}
function vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _l(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = cr(e, n), i != null && r.unshift(vr(e, i, l)), i = cr(e, t), i != null && r.push(vr(e, i, l))), e = e.return;
  }
  return r;
}
function tn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ys(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n, s = a.alternate, c = a.stateNode;
    if (s !== null && s === r)
      break;
    a.tag === 5 && c !== null && (a = c, l ? (s = cr(n, i), s != null && o.unshift(vr(n, s, a))) : l || (s = cr(n, i), s != null && o.push(vr(n, s, a)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Mh = /\r\n?/g, Ih = /\u0000|\uFFFD/g;
function Zs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Mh, `
`).replace(Ih, "");
}
function Xr(e, t, n) {
  if (t = Zs(t), Zs(e) !== t && n)
    throw Error(N(425));
}
function Pl() {
}
var Mo = null, Io = null;
function $o(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Do = typeof setTimeout == "function" ? setTimeout : void 0, $h = typeof clearTimeout == "function" ? clearTimeout : void 0, qs = typeof Promise == "function" ? Promise : void 0, Dh = typeof queueMicrotask == "function" ? queueMicrotask : typeof qs < "u" ? function(e) {
  return qs.resolve(null).then(e).catch(Ah);
} : Do;
function Ah(e) {
  setTimeout(function() {
    throw e;
  });
}
function Xi(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), pr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  pr(t);
}
function zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Js(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var In = Math.random().toString(36).slice(2), lt = "__reactFiber$" + In, gr = "__reactProps$" + In, ht = "__reactContainer$" + In, Ao = "__reactEvents$" + In, Fh = "__reactListeners$" + In, jh = "__reactHandles$" + In;
function Wt(e) {
  var t = e[lt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ht] || n[lt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Js(e); e !== null; ) {
          if (n = e[lt])
            return n;
          e = Js(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Or(e) {
  return e = e[lt] || e[ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function un(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(N(33));
}
function ql(e) {
  return e[gr] || null;
}
var Fo = [], cn = -1;
function At(e) {
  return { current: e };
}
function V(e) {
  0 > cn || (e.current = Fo[cn], Fo[cn] = null, cn--);
}
function H(e, t) {
  cn++, Fo[cn] = e.current, e.current = t;
}
var $t = {}, we = At($t), _e = At(!1), Gt = $t;
function En(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return $t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n)
    l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Pe(e) {
  return e = e.childContextTypes, e != null;
}
function Tl() {
  V(_e), V(we);
}
function eu(e, t, n) {
  if (we.current !== $t)
    throw Error(N(168));
  H(we, t), H(_e, n);
}
function dd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(N(108, Cp(e) || "Unknown", l));
  return G({}, n, r);
}
function zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $t, Gt = we.current, H(we, e), H(_e, _e.current), !0;
}
function tu(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(N(169));
  n ? (e = dd(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, V(_e), V(we), H(we, e)) : V(_e), H(_e, n);
}
var ut = null, Jl = !1, Yi = !1;
function fd(e) {
  ut === null ? ut = [e] : ut.push(e);
}
function Uh(e) {
  Jl = !0, fd(e);
}
function Ft() {
  if (!Yi && ut !== null) {
    Yi = !0;
    var e = 0, t = F;
    try {
      var n = ut;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ut = null, Jl = !1;
    } catch (l) {
      throw ut !== null && (ut = ut.slice(e + 1)), Ac(xa, Ft), l;
    } finally {
      F = t, Yi = !1;
    }
  }
  return null;
}
var dn = [], fn = 0, Ll = null, Ol = 0, je = [], Ue = 0, Xt = null, ct = 1, dt = "";
function Bt(e, t) {
  dn[fn++] = Ol, dn[fn++] = Ll, Ll = e, Ol = t;
}
function pd(e, t, n) {
  je[Ue++] = ct, je[Ue++] = dt, je[Ue++] = Xt, Xt = e;
  var r = ct;
  e = dt;
  var l = 32 - Ze(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Ze(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, ct = 1 << 32 - Ze(t) + l | n << l | r, dt = i + e;
  } else
    ct = 1 << i | n << l | r, dt = e;
}
function Oa(e) {
  e.return !== null && (Bt(e, 1), pd(e, 1, 0));
}
function Ra(e) {
  for (; e === Ll; )
    Ll = dn[--fn], dn[fn] = null, Ol = dn[--fn], dn[fn] = null;
  for (; e === Xt; )
    Xt = je[--Ue], je[Ue] = null, dt = je[--Ue], je[Ue] = null, ct = je[--Ue], je[Ue] = null;
}
var Me = null, Re = null, b = !1, Ye = null;
function hd(e, t) {
  var n = He(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function nu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, Re = zt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Xt !== null ? { id: ct, overflow: dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function jo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Uo(e) {
  if (b) {
    var t = Re;
    if (t) {
      var n = t;
      if (!nu(e, t)) {
        if (jo(e))
          throw Error(N(418));
        t = zt(n.nextSibling);
        var r = Me;
        t && nu(e, t) ? hd(r, n) : (e.flags = e.flags & -4097 | 2, b = !1, Me = e);
      }
    } else {
      if (jo(e))
        throw Error(N(418));
      e.flags = e.flags & -4097 | 2, b = !1, Me = e;
    }
  }
}
function ru(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Me = e;
}
function Yr(e) {
  if (e !== Me)
    return !1;
  if (!b)
    return ru(e), b = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps)), t && (t = Re)) {
    if (jo(e))
      throw md(), Error(N(418));
    for (; t; )
      hd(e, t), t = zt(t.nextSibling);
  }
  if (ru(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = zt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else
    Re = Me ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function md() {
  for (var e = Re; e; )
    e = zt(e.nextSibling);
}
function _n() {
  Re = Me = null, b = !1;
}
function Ma(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
var Bh = gt.ReactCurrentBatchConfig;
function Wn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(N(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var a = l.refs;
        o === null ? delete a[i] : a[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(N(284));
    if (!n._owner)
      throw Error(N(290, e));
  }
  return e;
}
function Zr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function lu(e) {
  var t = e._init;
  return t(e._payload);
}
function yd(e) {
  function t(p, d) {
    if (e) {
      var f = p.deletions;
      f === null ? (p.deletions = [d], p.flags |= 16) : f.push(d);
    }
  }
  function n(p, d) {
    if (!e)
      return null;
    for (; d !== null; )
      t(p, d), d = d.sibling;
    return null;
  }
  function r(p, d) {
    for (p = /* @__PURE__ */ new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), d = d.sibling;
    return p;
  }
  function l(p, d) {
    return p = Mt(p, d), p.index = 0, p.sibling = null, p;
  }
  function i(p, d, f) {
    return p.index = f, e ? (f = p.alternate, f !== null ? (f = f.index, f < d ? (p.flags |= 2, d) : f) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, d, f, v) {
    return d === null || d.tag !== 6 ? (d = ro(f, p.mode, v), d.return = p, d) : (d = l(d, f), d.return = p, d);
  }
  function s(p, d, f, v) {
    var x = f.type;
    return x === ln ? m(p, d, f.props.children, v, f.key) : d !== null && (d.elementType === x || typeof x == "object" && x !== null && x.$$typeof === kt && lu(x) === d.type) ? (v = l(d, f.props), v.ref = Wn(p, d, f), v.return = p, v) : (v = hl(f.type, f.key, f.props, null, p.mode, v), v.ref = Wn(p, d, f), v.return = p, v);
  }
  function c(p, d, f, v) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== f.containerInfo || d.stateNode.implementation !== f.implementation ? (d = lo(f, p.mode, v), d.return = p, d) : (d = l(d, f.children || []), d.return = p, d);
  }
  function m(p, d, f, v, x) {
    return d === null || d.tag !== 7 ? (d = Qt(f, p.mode, v, x), d.return = p, d) : (d = l(d, f), d.return = p, d);
  }
  function y(p, d, f) {
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return d = ro("" + d, p.mode, f), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ur:
          return f = hl(d.type, d.key, d.props, null, p.mode, f), f.ref = Wn(p, null, d), f.return = p, f;
        case rn:
          return d = lo(d, p.mode, f), d.return = p, d;
        case kt:
          var v = d._init;
          return y(p, v(d._payload), f);
      }
      if (Xn(d) || Fn(d))
        return d = Qt(d, p.mode, f, null), d.return = p, d;
      Zr(p, d);
    }
    return null;
  }
  function h(p, d, f, v) {
    var x = d !== null ? d.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return x !== null ? null : a(p, d, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ur:
          return f.key === x ? s(p, d, f, v) : null;
        case rn:
          return f.key === x ? c(p, d, f, v) : null;
        case kt:
          return x = f._init, h(
            p,
            d,
            x(f._payload),
            v
          );
      }
      if (Xn(f) || Fn(f))
        return x !== null ? null : m(p, d, f, v, null);
      Zr(p, f);
    }
    return null;
  }
  function S(p, d, f, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return p = p.get(f) || null, a(d, p, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ur:
          return p = p.get(v.key === null ? f : v.key) || null, s(d, p, v, x);
        case rn:
          return p = p.get(v.key === null ? f : v.key) || null, c(d, p, v, x);
        case kt:
          var _ = v._init;
          return S(p, d, f, _(v._payload), x);
      }
      if (Xn(v) || Fn(v))
        return p = p.get(f) || null, m(d, p, v, x, null);
      Zr(d, v);
    }
    return null;
  }
  function k(p, d, f, v) {
    for (var x = null, _ = null, C = d, L = d = 0, B = null; C !== null && L < f.length; L++) {
      C.index > L ? (B = C, C = null) : B = C.sibling;
      var O = h(p, C, f[L], v);
      if (O === null) {
        C === null && (C = B);
        break;
      }
      e && C && O.alternate === null && t(p, C), d = i(O, d, L), _ === null ? x = O : _.sibling = O, _ = O, C = B;
    }
    if (L === f.length)
      return n(p, C), b && Bt(p, L), x;
    if (C === null) {
      for (; L < f.length; L++)
        C = y(p, f[L], v), C !== null && (d = i(C, d, L), _ === null ? x = C : _.sibling = C, _ = C);
      return b && Bt(p, L), x;
    }
    for (C = r(p, C); L < f.length; L++)
      B = S(C, p, L, f[L], v), B !== null && (e && B.alternate !== null && C.delete(B.key === null ? L : B.key), d = i(B, d, L), _ === null ? x = B : _.sibling = B, _ = B);
    return e && C.forEach(function(ie) {
      return t(p, ie);
    }), b && Bt(p, L), x;
  }
  function w(p, d, f, v) {
    var x = Fn(f);
    if (typeof x != "function")
      throw Error(N(150));
    if (f = x.call(f), f == null)
      throw Error(N(151));
    for (var _ = x = null, C = d, L = d = 0, B = null, O = f.next(); C !== null && !O.done; L++, O = f.next()) {
      C.index > L ? (B = C, C = null) : B = C.sibling;
      var ie = h(p, C, O.value, v);
      if (ie === null) {
        C === null && (C = B);
        break;
      }
      e && C && ie.alternate === null && t(p, C), d = i(ie, d, L), _ === null ? x = ie : _.sibling = ie, _ = ie, C = B;
    }
    if (O.done)
      return n(
        p,
        C
      ), b && Bt(p, L), x;
    if (C === null) {
      for (; !O.done; L++, O = f.next())
        O = y(p, O.value, v), O !== null && (d = i(O, d, L), _ === null ? x = O : _.sibling = O, _ = O);
      return b && Bt(p, L), x;
    }
    for (C = r(p, C); !O.done; L++, O = f.next())
      O = S(C, p, L, O.value, v), O !== null && (e && O.alternate !== null && C.delete(O.key === null ? L : O.key), d = i(O, d, L), _ === null ? x = O : _.sibling = O, _ = O);
    return e && C.forEach(function(Dn) {
      return t(p, Dn);
    }), b && Bt(p, L), x;
  }
  function E(p, d, f, v) {
    if (typeof f == "object" && f !== null && f.type === ln && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ur:
          e: {
            for (var x = f.key, _ = d; _ !== null; ) {
              if (_.key === x) {
                if (x = f.type, x === ln) {
                  if (_.tag === 7) {
                    n(p, _.sibling), d = l(_, f.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (_.elementType === x || typeof x == "object" && x !== null && x.$$typeof === kt && lu(x) === _.type) {
                  n(p, _.sibling), d = l(_, f.props), d.ref = Wn(p, _, f), d.return = p, p = d;
                  break e;
                }
                n(p, _);
                break;
              } else
                t(p, _);
              _ = _.sibling;
            }
            f.type === ln ? (d = Qt(f.props.children, p.mode, v, f.key), d.return = p, p = d) : (v = hl(f.type, f.key, f.props, null, p.mode, v), v.ref = Wn(p, d, f), v.return = p, p = v);
          }
          return o(p);
        case rn:
          e: {
            for (_ = f.key; d !== null; ) {
              if (d.key === _)
                if (d.tag === 4 && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  n(p, d.sibling), d = l(d, f.children || []), d.return = p, p = d;
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else
                t(p, d);
              d = d.sibling;
            }
            d = lo(f, p.mode, v), d.return = p, p = d;
          }
          return o(p);
        case kt:
          return _ = f._init, E(p, d, _(f._payload), v);
      }
      if (Xn(f))
        return k(p, d, f, v);
      if (Fn(f))
        return w(p, d, f, v);
      Zr(p, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, d !== null && d.tag === 6 ? (n(p, d.sibling), d = l(d, f), d.return = p, p = d) : (n(p, d), d = ro(f, p.mode, v), d.return = p, p = d), o(p)) : n(p, d);
  }
  return E;
}
var Pn = yd(!0), vd = yd(!1), Rl = At(null), Ml = null, pn = null, Ia = null;
function $a() {
  Ia = pn = Ml = null;
}
function Da(e) {
  var t = Rl.current;
  V(Rl), e._currentValue = t;
}
function Bo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function kn(e, t) {
  Ml = e, Ia = pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ee = !0), e.firstContext = null);
}
function Ve(e) {
  var t = e._currentValue;
  if (Ia !== e)
    if (e = { context: e, memoizedValue: t, next: null }, pn === null) {
      if (Ml === null)
        throw Error(N(308));
      pn = e, Ml.dependencies = { lanes: 0, firstContext: e };
    } else
      pn = pn.next = e;
  return t;
}
var Vt = null;
function Aa(e) {
  Vt === null ? Vt = [e] : Vt.push(e);
}
function gd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Aa(t)) : (n.next = l.next, l.next = n), t.interleaved = n, mt(e, r);
}
function mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var St = !1;
function Fa(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Lt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, $ & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, mt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Aa(r)) : (t.next = l.next, l.next = t), r.interleaved = t, mt(e, n);
}
function sl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ca(e, n);
  }
}
function iu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else
      l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Il(e, t, n, r) {
  var l = e.updateQueue;
  St = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a, c = s.next;
    s.next = null, o === null ? i = c : o.next = c, o = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, a = m.lastBaseUpdate, a !== o && (a === null ? m.firstBaseUpdate = c : a.next = c, m.lastBaseUpdate = s));
  }
  if (i !== null) {
    var y = l.baseState;
    o = 0, m = c = s = null, a = i;
    do {
      var h = a.lane, S = a.eventTime;
      if ((r & h) === h) {
        m !== null && (m = m.next = {
          eventTime: S,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var k = e, w = a;
          switch (h = t, S = n, w.tag) {
            case 1:
              if (k = w.payload, typeof k == "function") {
                y = k.call(S, y, h);
                break e;
              }
              y = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = w.payload, h = typeof k == "function" ? k.call(S, y, h) : k, h == null)
                break e;
              y = G({}, y, h);
              break e;
            case 2:
              St = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [a] : h.push(a));
      } else
        S = { eventTime: S, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, m === null ? (c = m = S, s = y) : m = m.next = S, o |= h;
      if (a = a.next, a === null) {
        if (a = l.shared.pending, a === null)
          break;
        h = a, a = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (1);
    if (m === null && (s = y), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else
      i === null && (l.shared.lanes = 0);
    Zt |= o, e.lanes = o, e.memoizedState = y;
  }
}
function ou(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var Rr = {}, ot = At(Rr), wr = At(Rr), kr = At(Rr);
function bt(e) {
  if (e === Rr)
    throw Error(N(174));
  return e;
}
function ja(e, t) {
  switch (H(kr, t), H(wr, e), H(ot, Rr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : So(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = So(t, e);
  }
  V(ot), H(ot, t);
}
function Tn() {
  V(ot), V(wr), V(kr);
}
function kd(e) {
  bt(kr.current);
  var t = bt(ot.current), n = So(t, e.type);
  t !== n && (H(wr, e), H(ot, n));
}
function Ua(e) {
  wr.current === e && (V(ot), V(wr));
}
var K = At(0);
function $l(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Zi = [];
function Ba() {
  for (var e = 0; e < Zi.length; e++)
    Zi[e]._workInProgressVersionPrimary = null;
  Zi.length = 0;
}
var ul = gt.ReactCurrentDispatcher, qi = gt.ReactCurrentBatchConfig, Yt = 0, Q = null, re = null, ae = null, Dl = !1, rr = !1, Sr = 0, Hh = 0;
function me() {
  throw Error(N(321));
}
function Ha(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n]))
      return !1;
  return !0;
}
function Wa(e, t, n, r, l, i) {
  if (Yt = i, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ul.current = e === null || e.memoizedState === null ? Kh : Qh, e = n(r, l), rr) {
    i = 0;
    do {
      if (rr = !1, Sr = 0, 25 <= i)
        throw Error(N(301));
      i += 1, ae = re = null, t.updateQueue = null, ul.current = Gh, e = n(r, l);
    } while (rr);
  }
  if (ul.current = Al, t = re !== null && re.next !== null, Yt = 0, ae = re = Q = null, Dl = !1, t)
    throw Error(N(300));
  return e;
}
function Va() {
  var e = Sr !== 0;
  return Sr = 0, e;
}
function tt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ae === null ? Q.memoizedState = ae = e : ae = ae.next = e, ae;
}
function be() {
  if (re === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = re.next;
  var t = ae === null ? Q.memoizedState : ae.next;
  if (t !== null)
    ae = t, re = e;
  else {
    if (e === null)
      throw Error(N(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, ae === null ? Q.memoizedState = ae = e : ae = ae.next = e;
  }
  return ae;
}
function xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ji(e) {
  var t = be(), n = t.queue;
  if (n === null)
    throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = re, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var a = o = null, s = null, c = i;
    do {
      var m = c.lane;
      if ((Yt & m) === m)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var y = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (a = s = y, o = r) : s = s.next = y, Q.lanes |= m, Zt |= m;
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? o = r : s.next = a, Je(r, t.memoizedState) || (Ee = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, Q.lanes |= i, Zt |= i, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eo(e) {
  var t = be(), n = t.queue;
  if (n === null)
    throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Je(i, t.memoizedState) || (Ee = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Sd() {
}
function xd(e, t) {
  var n = Q, r = be(), l = t(), i = !Je(r.memoizedState, l);
  if (i && (r.memoizedState = l, Ee = !0), r = r.queue, ba(Ed.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ae !== null && ae.memoizedState.tag & 1) {
    if (n.flags |= 2048, Cr(9, Nd.bind(null, n, r, l, t), void 0, null), se === null)
      throw Error(N(349));
    Yt & 30 || Cd(n, t, l);
  }
  return l;
}
function Cd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Nd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, _d(t) && Pd(e);
}
function Ed(e, t, n) {
  return n(function() {
    _d(t) && Pd(e);
  });
}
function _d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Pd(e) {
  var t = mt(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function au(e) {
  var t = tt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = bh.bind(null, Q, e), [t.memoizedState, e];
}
function Cr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Td() {
  return be().memoizedState;
}
function cl(e, t, n, r) {
  var l = tt();
  Q.flags |= e, l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ei(e, t, n, r) {
  var l = be();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (re !== null) {
    var o = re.memoizedState;
    if (i = o.destroy, r !== null && Ha(r, o.deps)) {
      l.memoizedState = Cr(t, n, i, r);
      return;
    }
  }
  Q.flags |= e, l.memoizedState = Cr(1 | t, n, i, r);
}
function su(e, t) {
  return cl(8390656, 8, e, t);
}
function ba(e, t) {
  return ei(2048, 8, e, t);
}
function zd(e, t) {
  return ei(4, 2, e, t);
}
function Ld(e, t) {
  return ei(4, 4, e, t);
}
function Od(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Rd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ei(4, 4, Od.bind(null, t, e), n);
}
function Ka() {
}
function Md(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ha(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Id(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ha(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function $d(e, t, n) {
  return Yt & 21 ? (Je(n, t) || (n = Uc(), Q.lanes |= n, Zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ee = !0), e.memoizedState = n);
}
function Wh(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = qi.transition;
  qi.transition = {};
  try {
    e(!1), t();
  } finally {
    F = n, qi.transition = r;
  }
}
function Dd() {
  return be().memoizedState;
}
function Vh(e, t, n) {
  var r = Rt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ad(e))
    Fd(t, n);
  else if (n = gd(e, t, n, r), n !== null) {
    var l = Se();
    qe(n, e, r, l), jd(n, t, r);
  }
}
function bh(e, t, n) {
  var r = Rt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ad(e))
    Fd(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var o = t.lastRenderedState, a = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = a, Je(a, o)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Aa(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = gd(e, t, l, r), n !== null && (l = Se(), qe(n, e, r, l), jd(n, t, r));
  }
}
function Ad(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function Fd(e, t) {
  rr = Dl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function jd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ca(e, n);
  }
}
var Al = { readContext: Ve, useCallback: me, useContext: me, useEffect: me, useImperativeHandle: me, useInsertionEffect: me, useLayoutEffect: me, useMemo: me, useReducer: me, useRef: me, useState: me, useDebugValue: me, useDeferredValue: me, useTransition: me, useMutableSource: me, useSyncExternalStore: me, useId: me, unstable_isNewReconciler: !1 }, Kh = { readContext: Ve, useCallback: function(e, t) {
  return tt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ve, useEffect: su, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, cl(
    4194308,
    4,
    Od.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return cl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return cl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = tt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = tt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Vh.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = tt();
  return e = { current: e }, t.memoizedState = e;
}, useState: au, useDebugValue: Ka, useDeferredValue: function(e) {
  return tt().memoizedState = e;
}, useTransition: function() {
  var e = au(!1), t = e[0];
  return e = Wh.bind(null, e[1]), tt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Q, l = tt();
  if (b) {
    if (n === void 0)
      throw Error(N(407));
    n = n();
  } else {
    if (n = t(), se === null)
      throw Error(N(349));
    Yt & 30 || Cd(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, su(Ed.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Cr(9, Nd.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = tt(), t = se.identifierPrefix;
  if (b) {
    var n = dt, r = ct;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Hh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Qh = {
  readContext: Ve,
  useCallback: Md,
  useContext: Ve,
  useEffect: ba,
  useImperativeHandle: Rd,
  useInsertionEffect: zd,
  useLayoutEffect: Ld,
  useMemo: Id,
  useReducer: Ji,
  useRef: Td,
  useState: function() {
    return Ji(xr);
  },
  useDebugValue: Ka,
  useDeferredValue: function(e) {
    var t = be();
    return $d(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = Ji(xr)[0], t = be().memoizedState;
    return [e, t];
  },
  useMutableSource: Sd,
  useSyncExternalStore: xd,
  useId: Dd,
  unstable_isNewReconciler: !1
}, Gh = { readContext: Ve, useCallback: Md, useContext: Ve, useEffect: ba, useImperativeHandle: Rd, useInsertionEffect: zd, useLayoutEffect: Ld, useMemo: Id, useReducer: eo, useRef: Td, useState: function() {
  return eo(xr);
}, useDebugValue: Ka, useDeferredValue: function(e) {
  var t = be();
  return re === null ? t.memoizedState = e : $d(t, re.memoizedState, e);
}, useTransition: function() {
  var e = eo(xr)[0], t = be().memoizedState;
  return [e, t];
}, useMutableSource: Sd, useSyncExternalStore: xd, useId: Dd, unstable_isNewReconciler: !1 };
function Ge(e, t) {
  if (e && e.defaultProps) {
    t = G({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ho(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ti = { isMounted: function(e) {
  return (e = e._reactInternals) ? en(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = Rt(e), i = ft(r, l);
  i.payload = t, n != null && (i.callback = n), t = Lt(e, i, l), t !== null && (qe(t, e, l, r), sl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = Rt(e), i = ft(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Lt(e, i, l), t !== null && (qe(t, e, l, r), sl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Se(), r = Rt(e), l = ft(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Lt(e, l, r), t !== null && (qe(t, e, r, n), sl(t, e, r));
} };
function uu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !mr(n, r) || !mr(l, i) : !0;
}
function Ud(e, t, n) {
  var r = !1, l = $t, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ve(i) : (l = Pe(t) ? Gt : we.current, r = t.contextTypes, i = (r = r != null) ? En(e, l) : $t), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ti, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function cu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ti.enqueueReplaceState(t, t.state, null);
}
function Wo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Fa(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ve(i) : (i = Pe(t) ? Gt : we.current, l.context = En(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ho(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ti.enqueueReplaceState(l, l.state, null), Il(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t) {
  try {
    var n = "", r = t;
    do
      n += xp(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function to(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Xh = typeof WeakMap == "function" ? WeakMap : Map;
function Bd(e, t, n) {
  n = ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    jl || (jl = !0, ea = r), Vo(e, t);
  }, n;
}
function Hd(e, t, n) {
  n = ft(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Vo(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Vo(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function du(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = um.bind(null, e, t, n), t.then(e, e));
}
function fu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ft(-1, 1), t.tag = 2, Lt(n, t, 1))), n.lanes |= 1), e);
}
var Yh = gt.ReactCurrentOwner, Ee = !1;
function ke(e, t, n, r) {
  t.child = e === null ? vd(t, null, n, r) : Pn(t, e.child, n, r);
}
function hu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return kn(t, l), r = Wa(e, t, n, r, i, l), n = Va(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, yt(e, t, l)) : (b && n && Oa(t), t.flags |= 1, ke(e, t, r, l), t.child);
}
function mu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !es(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Wd(e, t, i, r, l)) : (e = hl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : mr, n(o, r) && e.ref === t.ref)
      return yt(e, t, l);
  }
  return t.flags |= 1, e = Mt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (mr(i, r) && e.ref === t.ref)
      if (Ee = !1, t.pendingProps = r = i, (e.lanes & l) !== 0)
        e.flags & 131072 && (Ee = !0);
      else
        return t.lanes = e.lanes, yt(e, t, l);
  }
  return bo(e, t, n, r, l);
}
function Vd(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, H(mn, Le), Le |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, H(mn, Le), Le |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, H(mn, Le), Le |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, H(mn, Le), Le |= r;
  return ke(e, t, l, n), t.child;
}
function bd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function bo(e, t, n, r, l) {
  var i = Pe(n) ? Gt : we.current;
  return i = En(t, i), kn(t, l), n = Wa(e, t, n, r, i, l), r = Va(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, yt(e, t, l)) : (b && r && Oa(t), t.flags |= 1, ke(e, t, n, l), t.child);
}
function yu(e, t, n, r, l) {
  if (Pe(n)) {
    var i = !0;
    zl(t);
  } else
    i = !1;
  if (kn(t, l), t.stateNode === null)
    dl(e, t), Ud(t, n, r), Wo(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, a = t.memoizedProps;
    o.props = a;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ve(c) : (c = Pe(n) ? Gt : we.current, c = En(t, c));
    var m = n.getDerivedStateFromProps, y = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    y || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || s !== c) && cu(t, o, r, c), St = !1;
    var h = t.memoizedState;
    o.state = h, Il(t, r, o, l), s = t.memoizedState, a !== r || h !== s || _e.current || St ? (typeof m == "function" && (Ho(t, n, m, r), s = t.memoizedState), (a = St || uu(t, n, a, r, h, s, c)) ? (y || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, wd(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Ge(t.type, a), o.props = c, y = t.pendingProps, h = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ve(s) : (s = Pe(n) ? Gt : we.current, s = En(t, s));
    var S = n.getDerivedStateFromProps;
    (m = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== y || h !== s) && cu(t, o, r, s), St = !1, h = t.memoizedState, o.state = h, Il(t, r, o, l);
    var k = t.memoizedState;
    a !== y || h !== k || _e.current || St ? (typeof S == "function" && (Ho(t, n, S, r), k = t.memoizedState), (c = St || uu(t, n, c, r, h, k, s) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ko(e, t, n, r, i, l);
}
function Ko(e, t, n, r, l, i) {
  bd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o)
    return l && tu(t, n, !1), yt(e, t, i);
  r = t.stateNode, Yh.current = t;
  var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Pn(t, e.child, null, i), t.child = Pn(t, null, a, i)) : ke(e, t, a, i), t.memoizedState = r.state, l && tu(t, n, !0), t.child;
}
function Kd(e) {
  var t = e.stateNode;
  t.pendingContext ? eu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && eu(e, t.context, !1), ja(e, t.containerInfo);
}
function vu(e, t, n, r, l) {
  return _n(), Ma(l), t.flags |= 256, ke(e, t, n, r), t.child;
}
var Qo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Go(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qd(e, t, n) {
  var r = t.pendingProps, l = K.current, i = !1, o = (t.flags & 128) !== 0, a;
  if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), H(K, l & 1), e === null)
    return Uo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = li(o, r, 0, null), e = Qt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Go(n), t.memoizedState = Qo, e) : Qa(t, o));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null))
    return Zh(e, t, o, r, a, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, a = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Mt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = Mt(a, i) : (i = Qt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Go(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Qo, r;
  }
  return i = e.child, e = i.sibling, r = Mt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Qa(e, t) {
  return t = li({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function qr(e, t, n, r) {
  return r !== null && Ma(r), Pn(t, e.child, null, n), e = Qa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Zh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = to(Error(N(422))), qr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = li({ mode: "visible", children: r.children }, l, 0, null), i = Qt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Pn(t, e.child, null, o), t.child.memoizedState = Go(o), t.memoizedState = Qo, i);
  if (!(t.mode & 1))
    return qr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(N(419)), r = to(i, r, void 0), qr(e, t, o, r);
  }
  if (a = (o & e.childLanes) !== 0, Ee || a) {
    if (r = se, r !== null) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, mt(e, l), qe(r, e, l, -1));
    }
    return Ja(), r = to(Error(N(421))), qr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Re = zt(l.nextSibling), Me = t, b = !0, Ye = null, e !== null && (je[Ue++] = ct, je[Ue++] = dt, je[Ue++] = Xt, ct = e.id, dt = e.overflow, Xt = t), t = Qa(t, r.children), t.flags |= 4096, t);
}
function gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bo(e.return, t, n);
}
function no(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Gd(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ke(e, t, r.children, n), r = K.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && gu(e, n, t);
          else if (e.tag === 19)
            gu(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (H(K, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && $l(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), no(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && $l(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        no(t, !0, n, null, i);
        break;
      case "together":
        no(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function dl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function yt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Zt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function qh(e, t, n) {
  switch (t.tag) {
    case 3:
      Kd(t), _n();
      break;
    case 5:
      kd(t);
      break;
    case 1:
      Pe(t.type) && zl(t);
      break;
    case 4:
      ja(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      H(Rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (H(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qd(e, t, n) : (H(K, K.current & 1), e = yt(e, t, n), e !== null ? e.sibling : null);
      H(K, K.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Gd(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), H(K, K.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Vd(e, t, n);
  }
  return yt(e, t, n);
}
var Xd, Xo, Yd, Zd;
Xd = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Xo = function() {
};
Yd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, bt(ot.current);
    var i = null;
    switch (n) {
      case "input":
        l = vo(e, l), r = vo(e, r), i = [];
        break;
      case "select":
        l = G({}, l, { value: void 0 }), r = G({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = ko(e, l), r = ko(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Pl);
    }
    xo(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (o in a)
            a.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (sr.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (a = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== a && (s != null || a != null))
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
            for (o in s)
              s.hasOwnProperty(o) && a[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
          } else
            n || (i || (i = []), i.push(
              c,
              n
            )), n = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (sr.hasOwnProperty(c) ? (s != null && c === "onScroll" && W("scroll", e), i || a === s || (i = [])) : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Zd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vn(e, t) {
  if (!b)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Jh(e, t, n) {
  var r = t.pendingProps;
  switch (Ra(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ye(t), null;
    case 1:
      return Pe(t.type) && Tl(), ye(t), null;
    case 3:
      return r = t.stateNode, Tn(), V(_e), V(we), Ba(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Yr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (ra(Ye), Ye = null))), Xo(e, t), ye(t), null;
    case 5:
      Ua(t);
      var l = bt(kr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Yd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(N(166));
          return ye(t), null;
        }
        if (e = bt(ot.current), Yr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[lt] = t, r[gr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Zn.length; l++)
                W(Zn[l], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W(
                "error",
                r
              ), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              Ps(r, i), W("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, W("invalid", r);
              break;
            case "textarea":
              zs(r, i), W("invalid", r);
          }
          xo(n, i), l = null;
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Xr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Xr(
                r.textContent,
                a,
                e
              ), l = ["children", "" + a]) : sr.hasOwnProperty(o) && a != null && o === "onScroll" && W("scroll", r);
            }
          switch (n) {
            case "input":
              Br(r), Ts(r, i, !0);
              break;
            case "textarea":
              Br(r), Ls(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Pl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ec(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[lt] = t, e[gr] = r, Xd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Co(n, r), n) {
              case "dialog":
                W("cancel", e), W("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Zn.length; l++)
                  W(Zn[l], e);
                l = r;
                break;
              case "source":
                W("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                W(
                  "error",
                  e
                ), W("load", e), l = r;
                break;
              case "details":
                W("toggle", e), l = r;
                break;
              case "input":
                Ps(e, r), l = vo(e, r), W("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = G({}, r, { value: void 0 }), W("invalid", e);
                break;
              case "textarea":
                zs(e, r), l = ko(e, r), W("invalid", e);
                break;
              default:
                l = r;
            }
            xo(n, l), a = l;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style" ? Tc(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && _c(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && ur(e, s) : typeof s == "number" && ur(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (sr.hasOwnProperty(i) ? s != null && i === "onScroll" && W("scroll", e) : s != null && va(e, i, s, o));
              }
            switch (n) {
              case "input":
                Br(e), Ts(e, r, !1);
                break;
              case "textarea":
                Br(e), Ls(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? yn(e, !!r.multiple, i, !1) : r.defaultValue != null && yn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Pl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null)
        Zd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(N(166));
        if (n = bt(kr.current), bt(ot.current), Yr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[lt] = t, (i = r.nodeValue !== n) && (e = Me, e !== null))
            switch (e.tag) {
              case 3:
                Xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[lt] = t, t.stateNode = r;
      }
      return ye(t), null;
    case 13:
      if (V(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (b && Re !== null && t.mode & 1 && !(t.flags & 128))
          md(), _n(), t.flags |= 98560, i = !1;
        else if (i = Yr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(N(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(N(317));
            i[lt] = t;
          } else
            _n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ye(t), i = !1;
        } else
          Ye !== null && (ra(Ye), Ye = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? le === 0 && (le = 3) : Ja())), t.updateQueue !== null && (t.flags |= 4), ye(t), null);
    case 4:
      return Tn(), Xo(e, t), e === null && yr(t.stateNode.containerInfo), ye(t), null;
    case 10:
      return Da(t.type._context), ye(t), null;
    case 17:
      return Pe(t.type) && Tl(), ye(t), null;
    case 19:
      if (V(K), i = t.memoizedState, i === null)
        return ye(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
        if (r)
          Vn(i, !1);
        else {
          if (le !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (o = $l(e), o !== null) {
                for (t.flags |= 128, Vn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return H(K, K.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && J() > Ln && (t.flags |= 128, r = !0, Vn(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = $l(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !b)
              return ye(t), null;
          } else
            2 * J() - i.renderingStartTime > Ln && n !== 1073741824 && (t.flags |= 128, r = !0, Vn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = J(), t.sibling = null, n = K.current, H(K, r ? n & 1 | 2 : n & 1), t) : (ye(t), null);
    case 22:
    case 23:
      return qa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Le & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function em(e, t) {
  switch (Ra(t), t.tag) {
    case 1:
      return Pe(t.type) && Tl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Tn(), V(_e), V(we), Ba(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ua(t), null;
    case 13:
      if (V(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(N(340));
        _n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return V(K), null;
    case 4:
      return Tn(), null;
    case 10:
      return Da(t.type._context), null;
    case 22:
    case 23:
      return qa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jr = !1, ge = !1, tm = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else
      n.current = null;
}
function Yo(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var wu = !1;
function nm(e, t) {
  if (Mo = Nl, e = nd(), La(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, a = -1, s = -1, c = 0, m = 0, y = e, h = null;
          t:
            for (; ; ) {
              for (var S; y !== n || l !== 0 && y.nodeType !== 3 || (a = o + l), y !== i || r !== 0 && y.nodeType !== 3 || (s = o + r), y.nodeType === 3 && (o += y.nodeValue.length), (S = y.firstChild) !== null; )
                h = y, y = S;
              for (; ; ) {
                if (y === e)
                  break t;
                if (h === n && ++c === l && (a = o), h === i && ++m === r && (s = o), (S = y.nextSibling) !== null)
                  break;
                y = h, h = y.parentNode;
              }
              y = S;
            }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Io = { focusedElem: e, selectionRange: n }, Nl = !1, P = t; P !== null; )
    if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, P = e;
    else
      for (; P !== null; ) {
        t = P;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var w = k.memoizedProps, E = k.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ge(t.type, w), E);
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (v) {
          Z(t, t.return, v);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, P = e;
          break;
        }
        P = t.return;
      }
  return k = wu, wu = !1, k;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Yo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ni(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Zo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function qd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, qd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[lt], delete t[gr], delete t[Ao], delete t[Fh], delete t[jh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Jd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ku(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jd(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function qo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Pl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (qo(e, t, n), e = e.sibling; e !== null; )
      qo(e, t, n), e = e.sibling;
}
function Jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Jo(e, t, n), e = e.sibling; e !== null; )
      Jo(e, t, n), e = e.sibling;
}
var ce = null, Xe = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; )
    ef(e, t, n), n = n.sibling;
}
function ef(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(Gl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ge || hn(n, t);
    case 6:
      var r = ce, l = Xe;
      ce = null, wt(e, t, n), ce = r, Xe = l, ce !== null && (Xe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null && (Xe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? Xi(e.parentNode, n) : e.nodeType === 1 && Xi(e, n), pr(e)) : Xi(ce, n.stateNode));
      break;
    case 4:
      r = ce, l = Xe, ce = n.stateNode.containerInfo, Xe = !0, wt(e, t, n), ce = r, Xe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Yo(n, t, o), l = l.next;
        } while (l !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (!ge && (hn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Z(n, t, a);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, wt(e, t, n), ge = r) : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function Su(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tm()), t.forEach(function(r) {
      var l = dm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, a = o;
        e:
          for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                ce = a.stateNode, Xe = !1;
                break e;
              case 3:
                ce = a.stateNode.containerInfo, Xe = !0;
                break e;
              case 4:
                ce = a.stateNode.containerInfo, Xe = !0;
                break e;
            }
            a = a.return;
          }
        if (ce === null)
          throw Error(N(160));
        ef(i, o, l), ce = null, Xe = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        Z(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      tf(t, e), t = t.sibling;
}
function tf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Qe(t, e), et(e), r & 4) {
        try {
          lr(3, e, e.return), ni(3, e);
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          lr(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      Qe(t, e), et(e), r & 512 && n !== null && hn(n, n.return);
      break;
    case 5:
      if (Qe(t, e), et(e), r & 512 && n !== null && hn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          ur(l, "");
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, a = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && Cc(l, i), Co(a, o);
            var c = Co(a, i);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o], y = s[o + 1];
              m === "style" ? Tc(l, y) : m === "dangerouslySetInnerHTML" ? _c(l, y) : m === "children" ? ur(l, y) : va(l, m, y, c);
            }
            switch (a) {
              case "input":
                go(l, i);
                break;
              case "textarea":
                Nc(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null ? yn(l, !!i.multiple, S, !1) : h !== !!i.multiple && (i.defaultValue != null ? yn(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : yn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[gr] = i;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if (Qe(t, e), et(e), r & 4) {
        if (e.stateNode === null)
          throw Error(N(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Qe(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          pr(t.containerInfo);
        } catch (w) {
          Z(e, e.return, w);
        }
      break;
    case 4:
      Qe(t, e), et(e);
      break;
    case 13:
      Qe(t, e), et(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Ya = J())), r & 4 && Su(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (c = ge) || m, Qe(t, e), ge = c) : Qe(t, e), et(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1)
          for (P = e, m = e.child; m !== null; ) {
            for (y = P = m; P !== null; ) {
              switch (h = P, S = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lr(4, h, h.return);
                  break;
                case 1:
                  hn(h, h.return);
                  var k = h.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                    } catch (w) {
                      Z(r, n, w);
                    }
                  }
                  break;
                case 5:
                  hn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Cu(y);
                    continue;
                  }
              }
              S !== null ? (S.return = h, P = S) : Cu(y);
            }
            m = m.sibling;
          }
        e:
          for (m = null, y = e; ; ) {
            if (y.tag === 5) {
              if (m === null) {
                m = y;
                try {
                  l = y.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = y.stateNode, s = y.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = Pc("display", o));
                } catch (w) {
                  Z(e, e.return, w);
                }
              }
            } else if (y.tag === 6) {
              if (m === null)
                try {
                  y.stateNode.nodeValue = c ? "" : y.memoizedProps;
                } catch (w) {
                  Z(e, e.return, w);
                }
            } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
              y.child.return = y, y = y.child;
              continue;
            }
            if (y === e)
              break e;
            for (; y.sibling === null; ) {
              if (y.return === null || y.return === e)
                break e;
              m === y && (m = null), y = y.return;
            }
            m === y && (m = null), y.sibling.return = y.return, y = y.sibling;
          }
      }
      break;
    case 19:
      Qe(t, e), et(e), r & 4 && Su(e);
      break;
    case 21:
      break;
    default:
      Qe(
        t,
        e
      ), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ur(l, ""), r.flags &= -33);
          var i = ku(e);
          Jo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, a = ku(e);
          qo(e, a, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      Z(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rm(e, t, n) {
  P = e, nf(e);
}
function nf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Jr;
      if (!o) {
        var a = l.alternate, s = a !== null && a.memoizedState !== null || ge;
        a = Jr;
        var c = ge;
        if (Jr = o, (ge = s) && !c)
          for (P = l; P !== null; )
            o = P, s = o.child, o.tag === 22 && o.memoizedState !== null ? Nu(l) : s !== null ? (s.return = o, P = s) : Nu(l);
        for (; i !== null; )
          P = i, nf(i), i = i.sibling;
        P = l, Jr = a, ge = c;
      }
      xu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? (i.return = l, P = i) : xu(e);
  }
}
function xu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || ni(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && ou(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ou(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var y = m.dehydrated;
                    y !== null && pr(y);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        ge || t.flags & 512 && Zo(t);
      } catch (h) {
        Z(t, t.return, h);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Cu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Nu(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ni(4, t);
          } catch (s) {
            Z(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Z(t, l, s);
            }
          }
          var i = t.return;
          try {
            Zo(t);
          } catch (s) {
            Z(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Zo(t);
          } catch (s) {
            Z(t, o, s);
          }
      }
    } catch (s) {
      Z(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, P = a;
      break;
    }
    P = t.return;
  }
}
var lm = Math.ceil, Fl = gt.ReactCurrentDispatcher, Ga = gt.ReactCurrentOwner, We = gt.ReactCurrentBatchConfig, $ = 0, se = null, ne = null, fe = 0, Le = 0, mn = At(0), le = 0, Nr = null, Zt = 0, ri = 0, Xa = 0, ir = null, Ne = null, Ya = 0, Ln = 1 / 0, st = null, jl = !1, ea = null, Ot = null, el = !1, Et = null, Ul = 0, or = 0, ta = null, fl = -1, pl = 0;
function Se() {
  return $ & 6 ? J() : fl !== -1 ? fl : fl = J();
}
function Rt(e) {
  return e.mode & 1 ? $ & 2 && fe !== 0 ? fe & -fe : Bh.transition !== null ? (pl === 0 && (pl = Uc()), pl) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qc(e.type)), e) : 1;
}
function qe(e, t, n, r) {
  if (50 < or)
    throw or = 0, ta = null, Error(N(185));
  zr(e, n, r), (!($ & 2) || e !== se) && (e === se && (!($ & 2) && (ri |= n), le === 4 && Ct(e, fe)), Te(e, r), n === 1 && $ === 0 && !(t.mode & 1) && (Ln = J() + 500, Jl && Ft()));
}
function Te(e, t) {
  var n = e.callbackNode;
  Bp(e, t);
  var r = Cl(e, e === se ? fe : 0);
  if (r === 0)
    n !== null && Ms(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ms(n), t === 1)
      e.tag === 0 ? Uh(Eu.bind(null, e)) : fd(Eu.bind(null, e)), Dh(function() {
        !($ & 6) && Ft();
      }), n = null;
    else {
      switch (Bc(r)) {
        case 1:
          n = xa;
          break;
        case 4:
          n = Fc;
          break;
        case 16:
          n = xl;
          break;
        case 536870912:
          n = jc;
          break;
        default:
          n = xl;
      }
      n = df(n, rf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function rf(e, t) {
  if (fl = -1, pl = 0, $ & 6)
    throw Error(N(327));
  var n = e.callbackNode;
  if (Sn() && e.callbackNode !== n)
    return null;
  var r = Cl(e, e === se ? fe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Bl(e, r);
  else {
    t = r;
    var l = $;
    $ |= 2;
    var i = of();
    (se !== e || fe !== t) && (st = null, Ln = J() + 500, Kt(e, t));
    do
      try {
        am();
        break;
      } catch (a) {
        lf(e, a);
      }
    while (1);
    $a(), Fl.current = i, $ = l, ne !== null ? t = 0 : (se = null, fe = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (l = To(e), l !== 0 && (r = l, t = na(e, l))), t === 1)
      throw n = Nr, Kt(e, 0), Ct(e, r), Te(e, J()), n;
    if (t === 6)
      Ct(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !im(l) && (t = Bl(e, r), t === 2 && (i = To(e), i !== 0 && (r = i, t = na(e, i))), t === 1))
        throw n = Nr, Kt(e, 0), Ct(e, r), Te(e, J()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Ht(e, Ne, st);
          break;
        case 3:
          if (Ct(e, r), (r & 130023424) === r && (t = Ya + 500 - J(), 10 < t)) {
            if (Cl(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Do(Ht.bind(null, e, Ne, st), t);
            break;
          }
          Ht(e, Ne, st);
          break;
        case 4:
          if (Ct(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ze(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * lm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Do(Ht.bind(null, e, Ne, st), r);
            break;
          }
          Ht(e, Ne, st);
          break;
        case 5:
          Ht(e, Ne, st);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Te(e, J()), e.callbackNode === n ? rf.bind(null, e) : null;
}
function na(e, t) {
  var n = ir;
  return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = Bl(e, t), e !== 2 && (t = Ne, Ne = n, t !== null && ra(t)), e;
}
function ra(e) {
  Ne === null ? Ne = e : Ne.push.apply(Ne, e);
}
function im(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!Je(i(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Ct(e, t) {
  for (t &= ~Xa, t &= ~ri, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Eu(e) {
  if ($ & 6)
    throw Error(N(327));
  Sn();
  var t = Cl(e, 0);
  if (!(t & 1))
    return Te(e, J()), null;
  var n = Bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = To(e);
    r !== 0 && (t = r, n = na(e, r));
  }
  if (n === 1)
    throw n = Nr, Kt(e, 0), Ct(e, t), Te(e, J()), n;
  if (n === 6)
    throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ht(e, Ne, st), Te(e, J()), null;
}
function Za(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    $ = n, $ === 0 && (Ln = J() + 500, Jl && Ft());
  }
}
function qt(e) {
  Et !== null && Et.tag === 0 && !($ & 6) && Sn();
  var t = $;
  $ |= 1;
  var n = We.transition, r = F;
  try {
    if (We.transition = null, F = 1, e)
      return e();
  } finally {
    F = r, We.transition = n, $ = t, !($ & 6) && Ft();
  }
}
function qa() {
  Le = mn.current, V(mn);
}
function Kt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, $h(n)), ne !== null)
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch (Ra(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Tl();
          break;
        case 3:
          Tn(), V(_e), V(we), Ba();
          break;
        case 5:
          Ua(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          V(K);
          break;
        case 19:
          V(K);
          break;
        case 10:
          Da(r.type._context);
          break;
        case 22:
        case 23:
          qa();
      }
      n = n.return;
    }
  if (se = e, ne = e = Mt(e.current, null), fe = Le = t, le = 0, Nr = null, Xa = ri = Zt = 0, Ne = ir = null, Vt !== null) {
    for (t = 0; t < Vt.length; t++)
      if (n = Vt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
    Vt = null;
  }
  return e;
}
function lf(e, t) {
  do {
    var n = ne;
    try {
      if ($a(), ul.current = Al, Dl) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Dl = !1;
      }
      if (Yt = 0, ae = re = Q = null, rr = !1, Sr = 0, Ga.current = null, n === null || n.return === null) {
        le = 1, Nr = t, ne = null;
        break;
      }
      e: {
        var i = e, o = n.return, a = n, s = t;
        if (t = fe, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = a, y = m.tag;
          if (!(m.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var h = m.alternate;
            h ? (m.updateQueue = h.updateQueue, m.memoizedState = h.memoizedState, m.lanes = h.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var S = fu(o);
          if (S !== null) {
            S.flags &= -257, pu(S, o, a, i, t), S.mode & 1 && du(i, c, t), t = S, s = c;
            var k = t.updateQueue;
            if (k === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else
              k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              du(i, c, t), Ja();
              break e;
            }
            s = Error(N(426));
          }
        } else if (b && a.mode & 1) {
          var E = fu(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), pu(E, o, a, i, t), Ma(zn(s, a));
            break e;
          }
        }
        i = s = zn(s, a), le !== 4 && (le = 2), ir === null ? ir = [i] : ir.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Bd(i, s, t);
              iu(i, p);
              break e;
            case 1:
              a = s;
              var d = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Ot === null || !Ot.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = Hd(i, a, t);
                iu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      sf(n);
    } catch (x) {
      t = x, ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function of() {
  var e = Fl.current;
  return Fl.current = Al, e === null ? Al : e;
}
function Ja() {
  (le === 0 || le === 3 || le === 2) && (le = 4), se === null || !(Zt & 268435455) && !(ri & 268435455) || Ct(se, fe);
}
function Bl(e, t) {
  var n = $;
  $ |= 2;
  var r = of();
  (se !== e || fe !== t) && (st = null, Kt(e, t));
  do
    try {
      om();
      break;
    } catch (l) {
      lf(e, l);
    }
  while (1);
  if ($a(), $ = n, Fl.current = r, ne !== null)
    throw Error(N(261));
  return se = null, fe = 0, le;
}
function om() {
  for (; ne !== null; )
    af(ne);
}
function am() {
  for (; ne !== null && !Rp(); )
    af(ne);
}
function af(e) {
  var t = cf(e.alternate, e, Le);
  e.memoizedProps = e.pendingProps, t === null ? sf(e) : ne = t, Ga.current = null;
}
function sf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = em(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, ne = null;
        return;
      }
    } else if (n = Jh(n, t, Le), n !== null) {
      ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Ht(e, t, n) {
  var r = F, l = We.transition;
  try {
    We.transition = null, F = 1, sm(e, t, n, r);
  } finally {
    We.transition = l, F = r;
  }
  return null;
}
function sm(e, t, n, r) {
  do
    Sn();
  while (Et !== null);
  if ($ & 6)
    throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Hp(e, i), e === se && (ne = se = null, fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || el || (el = !0, df(xl, function() {
    return Sn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = We.transition, We.transition = null;
    var o = F;
    F = 1;
    var a = $;
    $ |= 4, Ga.current = null, nm(e, n), tf(n, e), Th(Io), Nl = !!Mo, Io = Mo = null, e.current = n, rm(n), Mp(), $ = a, F = o, We.transition = i;
  } else
    e.current = n;
  if (el && (el = !1, Et = e, Ul = l), i = e.pendingLanes, i === 0 && (Ot = null), Dp(n.stateNode), Te(e, J()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (jl)
    throw jl = !1, e = ea, ea = null, e;
  return Ul & 1 && e.tag !== 0 && Sn(), i = e.pendingLanes, i & 1 ? e === ta ? or++ : (or = 0, ta = e) : or = 0, Ft(), null;
}
function Sn() {
  if (Et !== null) {
    var e = Bc(Ul), t = We.transition, n = F;
    try {
      if (We.transition = null, F = 16 > e ? 16 : e, Et === null)
        var r = !1;
      else {
        if (e = Et, Et = null, Ul = 0, $ & 6)
          throw Error(N(331));
        var l = $;
        for ($ |= 4, P = e.current; P !== null; ) {
          var i = P, o = i.child;
          if (P.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (P = c; P !== null; ) {
                  var m = P;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, m, i);
                  }
                  var y = m.child;
                  if (y !== null)
                    y.return = m, P = y;
                  else
                    for (; P !== null; ) {
                      m = P;
                      var h = m.sibling, S = m.return;
                      if (qd(m), m === c) {
                        P = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = S, P = h;
                        break;
                      }
                      P = S;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var E = w.sibling;
                    w.sibling = null, w = E;
                  } while (w !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null)
            o.return = i, P = o;
          else
            e:
              for (; P !== null; ) {
                if (i = P, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(9, i, i.return);
                  }
                var p = i.sibling;
                if (p !== null) {
                  p.return = i.return, P = p;
                  break e;
                }
                P = i.return;
              }
        }
        var d = e.current;
        for (P = d; P !== null; ) {
          o = P;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null)
            f.return = o, P = f;
          else
            e:
              for (o = d; P !== null; ) {
                if (a = P, a.flags & 2048)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ni(9, a);
                    }
                  } catch (x) {
                    Z(a, a.return, x);
                  }
                if (a === o) {
                  P = null;
                  break e;
                }
                var v = a.sibling;
                if (v !== null) {
                  v.return = a.return, P = v;
                  break e;
                }
                P = a.return;
              }
        }
        if ($ = l, Ft(), it && typeof it.onPostCommitFiberRoot == "function")
          try {
            it.onPostCommitFiberRoot(Gl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      F = n, We.transition = t;
    }
  }
  return !1;
}
function _u(e, t, n) {
  t = zn(n, t), t = Bd(e, t, 1), e = Lt(e, t, 1), t = Se(), e !== null && (zr(e, 1, t), Te(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3)
    _u(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _u(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r))) {
          e = zn(n, e), e = Hd(t, e, 1), t = Lt(t, e, 1), e = Se(), t !== null && (zr(t, 1, e), Te(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function um(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, se === e && (fe & n) === n && (le === 4 || le === 3 && (fe & 130023424) === fe && 500 > J() - Ya ? Kt(e, 0) : Xa |= n), Te(e, t);
}
function uf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Vr, Vr <<= 1, !(Vr & 130023424) && (Vr = 4194304)) : t = 1);
  var n = Se();
  e = mt(e, t), e !== null && (zr(e, t, n), Te(e, n));
}
function cm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), uf(e, n);
}
function dm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), uf(e, n);
}
var cf;
cf = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current)
      Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ee = !1, qh(e, t, n);
      Ee = !!(e.flags & 131072);
    }
  else
    Ee = !1, b && t.flags & 1048576 && pd(t, Ol, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      dl(e, t), e = t.pendingProps;
      var l = En(t, we.current);
      kn(t, n), l = Wa(null, t, r, e, l, n);
      var i = Va();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (i = !0, zl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Fa(t), l.updater = ti, t.stateNode = l, l._reactInternals = t, Wo(t, r, e, n), t = Ko(null, t, r, !0, i, n)) : (t.tag = 0, b && i && Oa(t), ke(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (dl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = pm(r), e = Ge(r, e), l) {
          case 0:
            t = bo(null, t, r, e, n);
            break e;
          case 1:
            t = yu(null, t, r, e, n);
            break e;
          case 11:
            t = hu(null, t, r, e, n);
            break e;
          case 14:
            t = mu(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(N(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), bo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), yu(e, t, r, l, n);
    case 3:
      e: {
        if (Kd(t), e === null)
          throw Error(N(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, wd(e, t), Il(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = zn(Error(N(423)), t), t = vu(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = zn(Error(N(424)), t), t = vu(e, t, r, n, l);
            break e;
          } else
            for (Re = zt(t.stateNode.containerInfo.firstChild), Me = t, b = !0, Ye = null, n = vd(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (_n(), r === l) {
            t = yt(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return kd(t), e === null && Uo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, $o(r, l) ? o = null : i !== null && $o(r, i) && (t.flags |= 32), bd(e, t), ke(e, t, o, n), t.child;
    case 6:
      return e === null && Uo(t), null;
    case 13:
      return Qd(e, t, n);
    case 4:
      return ja(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pn(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), hu(e, t, r, l, n);
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, H(Rl, r._currentValue), r._currentValue = o, i !== null)
          if (Je(i.value, o)) {
            if (i.children === l.children && !_e.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      s = ft(-1, n & -n), s.tag = 2;
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
                      }
                    }
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Bo(
                      i.return,
                      n,
                      t
                    ), a.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10)
                o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (o = i.return, o === null)
                  throw Error(N(341));
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Bo(o, n, t), o = i.sibling;
              } else
                o = i.child;
              if (o !== null)
                o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (i = o.sibling, i !== null) {
                    i.return = o.return, o = i;
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ke(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, kn(t, n), l = Ve(l), r = r(l), t.flags |= 1, ke(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ge(r, t.pendingProps), l = Ge(r.type, l), mu(e, t, r, l, n);
    case 15:
      return Wd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), dl(e, t), t.tag = 1, Pe(r) ? (e = !0, zl(t)) : e = !1, kn(t, n), Ud(t, r, l), Wo(t, r, l, n), Ko(null, t, r, !0, e, n);
    case 19:
      return Gd(e, t, n);
    case 22:
      return Vd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function df(e, t) {
  return Ac(e, t);
}
function fm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function He(e, t, n, r) {
  return new fm(e, t, n, r);
}
function es(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function pm(e) {
  if (typeof e == "function")
    return es(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === wa)
      return 11;
    if (e === ka)
      return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function hl(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function")
    es(e) && (o = 1);
  else if (typeof e == "string")
    o = 5;
  else
    e:
      switch (e) {
        case ln:
          return Qt(n.children, l, i, t);
        case ga:
          o = 8, l |= 8;
          break;
        case po:
          return e = He(12, n, t, l | 2), e.elementType = po, e.lanes = i, e;
        case ho:
          return e = He(13, n, t, l), e.elementType = ho, e.lanes = i, e;
        case mo:
          return e = He(19, n, t, l), e.elementType = mo, e.lanes = i, e;
        case kc:
          return li(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gc:
                o = 10;
                break e;
              case wc:
                o = 9;
                break e;
              case wa:
                o = 11;
                break e;
              case ka:
                o = 14;
                break e;
              case kt:
                o = 16, r = null;
                break e;
            }
          throw Error(N(130, e == null ? e : typeof e, ""));
      }
  return t = He(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Qt(e, t, n, r) {
  return e = He(7, e, r, t), e.lanes = n, e;
}
function li(e, t, n, r) {
  return e = He(22, e, r, t), e.elementType = kc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ro(e, t, n) {
  return e = He(6, e, null, t), e.lanes = n, e;
}
function lo(e, t, n) {
  return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function hm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fi(0), this.expirationTimes = Fi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ts(e, t, n, r, l, i, o, a, s) {
  return e = new hm(e, t, n, a, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = He(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fa(i), e;
}
function mm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: rn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ff(e) {
  if (!e)
    return $t;
  e = e._reactInternals;
  e: {
    if (en(e) !== e || e.tag !== 1)
      throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n))
      return dd(e, n, t);
  }
  return t;
}
function pf(e, t, n, r, l, i, o, a, s) {
  return e = ts(n, r, !0, e, l, i, o, a, s), e.context = ff(null), n = e.current, r = Se(), l = Rt(n), i = ft(r, l), i.callback = t ?? null, Lt(n, i, l), e.current.lanes = l, zr(e, l, r), Te(e, r), e;
}
function ii(e, t, n, r) {
  var l = t.current, i = Se(), o = Rt(l);
  return n = ff(n), t.context === null ? t.context = n : t.pendingContext = n, t = ft(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Lt(l, t, o), e !== null && (qe(e, l, o, i), sl(e, l, o)), o;
}
function Hl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ns(e, t) {
  Pu(e, t), (e = e.alternate) && Pu(e, t);
}
function ym() {
  return null;
}
var hf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function rs(e) {
  this._internalRoot = e;
}
oi.prototype.render = rs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(N(409));
  ii(e, t, null, null);
};
oi.prototype.unmount = rs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qt(function() {
      ii(null, e, null, null);
    }), t[ht] = null;
  }
};
function oi(e) {
  this._internalRoot = e;
}
oi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Vc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++)
      ;
    xt.splice(n, 0, e), n === 0 && Kc(e);
  }
};
function ls(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ai(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Tu() {
}
function vm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = Hl(o);
        i.call(c);
      };
    }
    var o = pf(t, r, e, 0, null, !1, !1, "", Tu);
    return e._reactRootContainer = o, e[ht] = o.current, yr(e.nodeType === 8 ? e.parentNode : e), qt(), o;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = Hl(s);
      a.call(c);
    };
  }
  var s = ts(e, 0, !1, null, null, !1, !1, "", Tu);
  return e._reactRootContainer = s, e[ht] = s.current, yr(e.nodeType === 8 ? e.parentNode : e), qt(function() {
    ii(t, s, n, r);
  }), s;
}
function si(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function() {
        var s = Hl(o);
        a.call(s);
      };
    }
    ii(t, o, e, l);
  } else
    o = vm(n, t, e, l, r);
  return Hl(o);
}
Hc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Yn(t.pendingLanes);
        n !== 0 && (Ca(t, n | 1), Te(t, J()), !($ & 6) && (Ln = J() + 500, Ft()));
      }
      break;
    case 13:
      qt(function() {
        var r = mt(e, 1);
        if (r !== null) {
          var l = Se();
          qe(r, e, 1, l);
        }
      }), ns(e, 1);
  }
};
Na = function(e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = Se();
      qe(t, e, 134217728, n);
    }
    ns(e, 134217728);
  }
};
Wc = function(e) {
  if (e.tag === 13) {
    var t = Rt(e), n = mt(e, t);
    if (n !== null) {
      var r = Se();
      qe(n, e, t, r);
    }
    ns(e, t);
  }
};
Vc = function() {
  return F;
};
bc = function(e, t) {
  var n = F;
  try {
    return F = e, t();
  } finally {
    F = n;
  }
};
Eo = function(e, t, n) {
  switch (t) {
    case "input":
      if (go(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ql(r);
            if (!l)
              throw Error(N(90));
            xc(r), go(r, l);
          }
        }
      }
      break;
    case "textarea":
      Nc(e, n);
      break;
    case "select":
      t = n.value, t != null && yn(e, !!n.multiple, t, !1);
  }
};
Oc = Za;
Rc = qt;
var gm = { usingClientEntryPoint: !1, Events: [Or, un, ql, zc, Lc, Za] }, bn = { findFiberByHostInstance: Wt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wm = { bundleType: bn.bundleType, version: bn.version, rendererPackageName: bn.rendererPackageName, rendererConfig: bn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = $c(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: bn.findFiberByHostInstance || ym, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!tl.isDisabled && tl.supportsFiber)
    try {
      Gl = tl.inject(wm), it = tl;
    } catch {
    }
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gm;
De.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ls(t))
    throw Error(N(200));
  return mm(e, t, null, n);
};
De.createRoot = function(e, t) {
  if (!ls(e))
    throw Error(N(299));
  var n = !1, r = "", l = hf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ts(e, 1, !1, null, null, n, !1, r, l), e[ht] = t.current, yr(e.nodeType === 8 ? e.parentNode : e), new rs(t);
};
De.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = $c(t), e = e === null ? null : e.stateNode, e;
};
De.flushSync = function(e) {
  return qt(e);
};
De.hydrate = function(e, t, n) {
  if (!ai(t))
    throw Error(N(200));
  return si(null, e, t, !0, n);
};
De.hydrateRoot = function(e, t, n) {
  if (!ls(e))
    throw Error(N(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = hf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = pf(t, null, e, 1, n ?? null, l, !1, i, o), e[ht] = t.current, yr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new oi(t);
};
De.render = function(e, t, n) {
  if (!ai(t))
    throw Error(N(200));
  return si(null, e, t, !1, n);
};
De.unmountComponentAtNode = function(e) {
  if (!ai(e))
    throw Error(N(40));
  return e._reactRootContainer ? (qt(function() {
    si(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ht] = null;
    });
  }), !0) : !1;
};
De.unstable_batchedUpdates = Za;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ai(n))
    throw Error(N(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(N(38));
  return si(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function mf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf);
    } catch (e) {
      console.error(e);
    }
}
mf(), hc.exports = De;
var km = hc.exports, yf, zu = km;
yf = zu.createRoot, zu.hydrateRoot;
function Sm(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Lu = "$$material";
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pe.apply(null, arguments);
}
function ui(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1)
        continue;
      n[r] = e[r];
    }
  return n;
}
var xm = !1;
function Cm(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Nm(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Em = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(l) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(l, i), r.tags.push(l);
    }, this.isSpeedy = n.speedy === void 0 ? !xm : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Nm(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Cm(l);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      l.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var l;
      return (l = r.parentNode) == null ? void 0 : l.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ve = "-ms-", Wl = "-moz-", D = "-webkit-", vf = "comm", is = "rule", os = "decl", _m = "@import", gf = "@keyframes", Pm = "@layer", Tm = Math.abs, ci = String.fromCharCode, zm = Object.assign;
function Lm(e, t) {
  return de(e, 0) ^ 45 ? (((t << 2 ^ de(e, 0)) << 2 ^ de(e, 1)) << 2 ^ de(e, 2)) << 2 ^ de(e, 3) : 0;
}
function wf(e) {
  return e.trim();
}
function Om(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function A(e, t, n) {
  return e.replace(t, n);
}
function la(e, t) {
  return e.indexOf(t);
}
function de(e, t) {
  return e.charCodeAt(t) | 0;
}
function Er(e, t, n) {
  return e.slice(t, n);
}
function nt(e) {
  return e.length;
}
function as(e) {
  return e.length;
}
function nl(e, t) {
  return t.push(e), e;
}
function Rm(e, t) {
  return e.map(t).join("");
}
var di = 1, On = 1, kf = 0, ze = 0, te = 0, $n = "";
function fi(e, t, n, r, l, i, o) {
  return { value: e, root: t, parent: n, type: r, props: l, children: i, line: di, column: On, length: o, return: "" };
}
function Kn(e, t) {
  return zm(fi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Mm() {
  return te;
}
function Im() {
  return te = ze > 0 ? de($n, --ze) : 0, On--, te === 10 && (On = 1, di--), te;
}
function Ie() {
  return te = ze < kf ? de($n, ze++) : 0, On++, te === 10 && (On = 1, di++), te;
}
function at() {
  return de($n, ze);
}
function ml() {
  return ze;
}
function Mr(e, t) {
  return Er($n, e, t);
}
function _r(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Sf(e) {
  return di = On = 1, kf = nt($n = e), ze = 0, [];
}
function xf(e) {
  return $n = "", e;
}
function yl(e) {
  return wf(Mr(ze - 1, ia(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $m(e) {
  for (; (te = at()) && te < 33; )
    Ie();
  return _r(e) > 2 || _r(te) > 3 ? "" : " ";
}
function Dm(e, t) {
  for (; --t && Ie() && !(te < 48 || te > 102 || te > 57 && te < 65 || te > 70 && te < 97); )
    ;
  return Mr(e, ml() + (t < 6 && at() == 32 && Ie() == 32));
}
function ia(e) {
  for (; Ie(); )
    switch (te) {
      case e:
        return ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ia(te);
        break;
      case 40:
        e === 41 && ia(e);
        break;
      case 92:
        Ie();
        break;
    }
  return ze;
}
function Am(e, t) {
  for (; Ie() && e + te !== 47 + 10; )
    if (e + te === 42 + 42 && at() === 47)
      break;
  return "/*" + Mr(t, ze - 1) + "*" + ci(e === 47 ? e : Ie());
}
function Fm(e) {
  for (; !_r(at()); )
    Ie();
  return Mr(e, ze);
}
function jm(e) {
  return xf(vl("", null, null, null, [""], e = Sf(e), 0, [0], e));
}
function vl(e, t, n, r, l, i, o, a, s) {
  for (var c = 0, m = 0, y = o, h = 0, S = 0, k = 0, w = 1, E = 1, p = 1, d = 0, f = "", v = l, x = i, _ = r, C = f; E; )
    switch (k = d, d = Ie()) {
      case 40:
        if (k != 108 && de(C, y - 1) == 58) {
          la(C += A(yl(d), "&", "&\f"), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += yl(d);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += $m(k);
        break;
      case 92:
        C += Dm(ml() - 1, 7);
        continue;
      case 47:
        switch (at()) {
          case 42:
          case 47:
            nl(Um(Am(Ie(), ml()), t, n), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * w:
        a[c++] = nt(C) * p;
      case 125 * w:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            E = 0;
          case 59 + m:
            p == -1 && (C = A(C, /\f/g, "")), S > 0 && nt(C) - y && nl(S > 32 ? Ru(C + ";", r, n, y - 1) : Ru(A(C, " ", "") + ";", r, n, y - 2), s);
            break;
          case 59:
            C += ";";
          default:
            if (nl(_ = Ou(C, t, n, c, m, l, a, f, v = [], x = [], y), i), d === 123)
              if (m === 0)
                vl(C, t, _, _, v, i, y, a, x);
              else
                switch (h === 99 && de(C, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    vl(e, _, _, r && nl(Ou(e, _, _, 0, 0, l, a, f, l, v = [], y), x), l, x, y, a, r ? v : x);
                    break;
                  default:
                    vl(C, _, _, _, [""], x, 0, a, x);
                }
        }
        c = m = S = 0, w = p = 1, f = C = "", y = o;
        break;
      case 58:
        y = 1 + nt(C), S = k;
      default:
        if (w < 1) {
          if (d == 123)
            --w;
          else if (d == 125 && w++ == 0 && Im() == 125)
            continue;
        }
        switch (C += ci(d), d * w) {
          case 38:
            p = m > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            a[c++] = (nt(C) - 1) * p, p = 1;
            break;
          case 64:
            at() === 45 && (C += yl(Ie())), h = at(), m = y = nt(f = C += Fm(ml())), d++;
            break;
          case 45:
            k === 45 && nt(C) == 2 && (w = 0);
        }
    }
  return i;
}
function Ou(e, t, n, r, l, i, o, a, s, c, m) {
  for (var y = l - 1, h = l === 0 ? i : [""], S = as(h), k = 0, w = 0, E = 0; k < r; ++k)
    for (var p = 0, d = Er(e, y + 1, y = Tm(w = o[k])), f = e; p < S; ++p)
      (f = wf(w > 0 ? h[p] + " " + d : A(d, /&\f/g, h[p]))) && (s[E++] = f);
  return fi(e, t, n, l === 0 ? is : a, s, c, m);
}
function Um(e, t, n) {
  return fi(e, t, n, vf, ci(Mm()), Er(e, 2, -2), 0);
}
function Ru(e, t, n, r) {
  return fi(e, t, n, os, Er(e, 0, r), Er(e, r + 1, -1), r);
}
function xn(e, t) {
  for (var n = "", r = as(e), l = 0; l < r; l++)
    n += t(e[l], l, e, t) || "";
  return n;
}
function Bm(e, t, n, r) {
  switch (e.type) {
    case Pm:
      if (e.children.length)
        break;
    case _m:
    case os:
      return e.return = e.return || e.value;
    case vf:
      return "";
    case gf:
      return e.return = e.value + "{" + xn(e.children, r) + "}";
    case is:
      e.value = e.props.join(",");
  }
  return nt(n = xn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Hm(e) {
  var t = as(e);
  return function(n, r, l, i) {
    for (var o = "", a = 0; a < t; a++)
      o += e[a](n, r, l, i) || "";
    return o;
  };
}
function Wm(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Cf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Vm = function(t, n, r) {
  for (var l = 0, i = 0; l = i, i = at(), l === 38 && i === 12 && (n[r] = 1), !_r(i); )
    Ie();
  return Mr(t, ze);
}, bm = function(t, n) {
  var r = -1, l = 44;
  do
    switch (_r(l)) {
      case 0:
        l === 38 && at() === 12 && (n[r] = 1), t[r] += Vm(ze - 1, n, r);
        break;
      case 2:
        t[r] += yl(l);
        break;
      case 4:
        if (l === 44) {
          t[++r] = at() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ci(l);
    }
  while (l = Ie());
  return t;
}, Km = function(t, n) {
  return xf(bm(Sf(t), n));
}, Mu = /* @__PURE__ */ new WeakMap(), Qm = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, l = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Mu.get(r)) && !l) {
      Mu.set(t, !0);
      for (var i = [], o = Km(n, i), a = r.props, s = 0, c = 0; s < o.length; s++)
        for (var m = 0; m < a.length; m++, c++)
          t.props[c] = i[s] ? o[s].replace(/&\f/g, a[m]) : a[m] + " " + o[s];
    }
  }
}, Gm = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Nf(e, t) {
  switch (Lm(e, t)) {
    case 5103:
      return D + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return D + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return D + e + Wl + e + ve + e + e;
    case 6828:
    case 4268:
      return D + e + ve + e + e;
    case 6165:
      return D + e + ve + "flex-" + e + e;
    case 5187:
      return D + e + A(e, /(\w+).+(:[^]+)/, D + "box-$1$2" + ve + "flex-$1$2") + e;
    case 5443:
      return D + e + ve + "flex-item-" + A(e, /flex-|-self/, "") + e;
    case 4675:
      return D + e + ve + "flex-line-pack" + A(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return D + e + ve + A(e, "shrink", "negative") + e;
    case 5292:
      return D + e + ve + A(e, "basis", "preferred-size") + e;
    case 6060:
      return D + "box-" + A(e, "-grow", "") + D + e + ve + A(e, "grow", "positive") + e;
    case 4554:
      return D + A(e, /([^-])(transform)/g, "$1" + D + "$2") + e;
    case 6187:
      return A(A(A(e, /(zoom-|grab)/, D + "$1"), /(image-set)/, D + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return A(e, /(image-set\([^]*)/, D + "$1$`$1");
    case 4968:
      return A(A(e, /(.+:)(flex-)?(.*)/, D + "box-pack:$3" + ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + D + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return A(e, /(.+)-inline(.+)/, D + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (nt(e) - 1 - t > 6)
        switch (de(e, t + 1)) {
          case 109:
            if (de(e, t + 4) !== 45)
              break;
          case 102:
            return A(e, /(.+:)(.+)-([^]+)/, "$1" + D + "$2-$3$1" + Wl + (de(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~la(e, "stretch") ? Nf(A(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (de(e, t + 1) !== 115)
        break;
    case 6444:
      switch (de(e, nt(e) - 3 - (~la(e, "!important") && 10))) {
        case 107:
          return A(e, ":", ":" + D) + e;
        case 101:
          return A(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + D + (de(e, 14) === 45 ? "inline-" : "") + "box$3$1" + D + "$2$3$1" + ve + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (de(e, t + 11)) {
        case 114:
          return D + e + ve + A(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return D + e + ve + A(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return D + e + ve + A(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return D + e + ve + e + e;
  }
  return e;
}
var Xm = function(t, n, r, l) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case os:
        t.return = Nf(t.value, t.length);
        break;
      case gf:
        return xn([Kn(t, {
          value: A(t.value, "@", "@" + D)
        })], l);
      case is:
        if (t.length)
          return Rm(t.props, function(i) {
            switch (Om(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return xn([Kn(t, {
                  props: [A(i, /:(read-\w+)/, ":" + Wl + "$1")]
                })], l);
              case "::placeholder":
                return xn([Kn(t, {
                  props: [A(i, /:(plac\w+)/, ":" + D + "input-$1")]
                }), Kn(t, {
                  props: [A(i, /:(plac\w+)/, ":" + Wl + "$1")]
                }), Kn(t, {
                  props: [A(i, /:(plac\w+)/, ve + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, Ym = [Xm], Zm = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(w) {
      var E = w.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var l = t.stylisPlugins || Ym, i = {}, o, a = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(w) {
      for (var E = w.getAttribute("data-emotion").split(" "), p = 1; p < E.length; p++)
        i[E[p]] = !0;
      a.push(w);
    }
  );
  var s, c = [Qm, Gm];
  {
    var m, y = [Bm, Wm(function(w) {
      m.insert(w);
    })], h = Hm(c.concat(l, y)), S = function(E) {
      return xn(jm(E), h);
    };
    s = function(E, p, d, f) {
      m = d, S(E ? E + "{" + p.styles + "}" : p.styles), f && (k.inserted[p.name] = !0);
    };
  }
  var k = {
    key: n,
    sheet: new Em({
      key: n,
      container: o,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: s
  };
  return k.sheet.hydrate(a), k;
}, Ef = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue = typeof Symbol == "function" && Symbol.for, ss = ue ? Symbol.for("react.element") : 60103, us = ue ? Symbol.for("react.portal") : 60106, pi = ue ? Symbol.for("react.fragment") : 60107, hi = ue ? Symbol.for("react.strict_mode") : 60108, mi = ue ? Symbol.for("react.profiler") : 60114, yi = ue ? Symbol.for("react.provider") : 60109, vi = ue ? Symbol.for("react.context") : 60110, cs = ue ? Symbol.for("react.async_mode") : 60111, gi = ue ? Symbol.for("react.concurrent_mode") : 60111, wi = ue ? Symbol.for("react.forward_ref") : 60112, ki = ue ? Symbol.for("react.suspense") : 60113, qm = ue ? Symbol.for("react.suspense_list") : 60120, Si = ue ? Symbol.for("react.memo") : 60115, xi = ue ? Symbol.for("react.lazy") : 60116, Jm = ue ? Symbol.for("react.block") : 60121, ey = ue ? Symbol.for("react.fundamental") : 60117, ty = ue ? Symbol.for("react.responder") : 60118, ny = ue ? Symbol.for("react.scope") : 60119;
function Fe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ss:
        switch (e = e.type, e) {
          case cs:
          case gi:
          case pi:
          case mi:
          case hi:
          case ki:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case vi:
              case wi:
              case xi:
              case Si:
              case yi:
                return e;
              default:
                return t;
            }
        }
      case us:
        return t;
    }
  }
}
function _f(e) {
  return Fe(e) === gi;
}
j.AsyncMode = cs;
j.ConcurrentMode = gi;
j.ContextConsumer = vi;
j.ContextProvider = yi;
j.Element = ss;
j.ForwardRef = wi;
j.Fragment = pi;
j.Lazy = xi;
j.Memo = Si;
j.Portal = us;
j.Profiler = mi;
j.StrictMode = hi;
j.Suspense = ki;
j.isAsyncMode = function(e) {
  return _f(e) || Fe(e) === cs;
};
j.isConcurrentMode = _f;
j.isContextConsumer = function(e) {
  return Fe(e) === vi;
};
j.isContextProvider = function(e) {
  return Fe(e) === yi;
};
j.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ss;
};
j.isForwardRef = function(e) {
  return Fe(e) === wi;
};
j.isFragment = function(e) {
  return Fe(e) === pi;
};
j.isLazy = function(e) {
  return Fe(e) === xi;
};
j.isMemo = function(e) {
  return Fe(e) === Si;
};
j.isPortal = function(e) {
  return Fe(e) === us;
};
j.isProfiler = function(e) {
  return Fe(e) === mi;
};
j.isStrictMode = function(e) {
  return Fe(e) === hi;
};
j.isSuspense = function(e) {
  return Fe(e) === ki;
};
j.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === pi || e === gi || e === mi || e === hi || e === ki || e === qm || typeof e == "object" && e !== null && (e.$$typeof === xi || e.$$typeof === Si || e.$$typeof === yi || e.$$typeof === vi || e.$$typeof === wi || e.$$typeof === ey || e.$$typeof === ty || e.$$typeof === ny || e.$$typeof === Jm);
};
j.typeOf = Fe;
Ef.exports = j;
var ry = Ef.exports, Pf = ry, ly = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, iy = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Tf = {};
Tf[Pf.ForwardRef] = ly;
Tf[Pf.Memo] = iy;
var oy = !0;
function zf(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(l) {
    e[l] !== void 0 ? t.push(e[l] + ";") : l && (r += l + " ");
  }), r;
}
var ds = function(t, n, r) {
  var l = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  oy === !1) && t.registered[l] === void 0 && (t.registered[l] = n.styles);
}, fs = function(t, n, r) {
  ds(t, n, r);
  var l = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + l : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ay(e) {
  for (var t = 0, n, r = 0, l = e.length; l >= 4; ++r, l -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (l) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var sy = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, uy = !1, cy = /[A-Z]|^ms/g, dy = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Lf = function(t) {
  return t.charCodeAt(1) === 45;
}, Iu = function(t) {
  return t != null && typeof t != "boolean";
}, io = /* @__PURE__ */ Cf(function(e) {
  return Lf(e) ? e : e.replace(cy, "-$&").toLowerCase();
}), $u = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(dy, function(r, l, i) {
          return rt = {
            name: l,
            styles: i,
            next: rt
          }, l;
        });
  }
  return sy[t] !== 1 && !Lf(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, fy = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Pr(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var l = n;
      if (l.anim === 1)
        return rt = {
          name: l.name,
          styles: l.styles,
          next: rt
        }, l.name;
      var i = n;
      if (i.styles !== void 0) {
        var o = i.next;
        if (o !== void 0)
          for (; o !== void 0; )
            rt = {
              name: o.name,
              styles: o.styles,
              next: rt
            }, o = o.next;
        var a = i.styles + ";";
        return a;
      }
      return py(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = rt, c = n(e);
        return rt = s, Pr(e, t, c);
      }
      break;
    }
  }
  var m = n;
  if (t == null)
    return m;
  var y = t[m];
  return y !== void 0 ? y : m;
}
function py(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var l = 0; l < n.length; l++)
      r += Pr(e, t, n[l]) + ";";
  else
    for (var i in n) {
      var o = n[i];
      if (typeof o != "object") {
        var a = o;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Iu(a) && (r += io(i) + ":" + $u(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && uy)
          throw new Error(fy);
        if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
          for (var s = 0; s < o.length; s++)
            Iu(o[s]) && (r += io(i) + ":" + $u(i, o[s]) + ";");
        else {
          var c = Pr(e, t, o);
          switch (i) {
            case "animation":
            case "animationName": {
              r += io(i) + ":" + c + ";";
              break;
            }
            default:
              r += i + "{" + c + "}";
          }
        }
      }
    }
  return r;
}
var Du = /label:\s*([^\s;{]+)\s*(;|$)/g, rt;
function Ci(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, l = "";
  rt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, l += Pr(n, t, i);
  else {
    var o = i;
    l += o[0];
  }
  for (var a = 1; a < e.length; a++)
    if (l += Pr(n, t, e[a]), r) {
      var s = i;
      l += s[a];
    }
  Du.lastIndex = 0;
  for (var c = "", m; (m = Du.exec(l)) !== null; )
    c += "-" + m[1];
  var y = ay(l) + c;
  return {
    name: y,
    styles: l,
    next: rt
  };
}
var hy = function(t) {
  return t();
}, Of = co["useInsertionEffect"] ? co["useInsertionEffect"] : !1, Rf = Of || hy, Au = Of || z.useLayoutEffect, my = !1, Mf = /* @__PURE__ */ z.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Zm({
    key: "css"
  }) : null
);
Mf.Provider;
var ps = function(t) {
  return /* @__PURE__ */ z.forwardRef(function(n, r) {
    var l = z.useContext(Mf);
    return t(n, l, r);
  });
}, Ir = /* @__PURE__ */ z.createContext({}), hs = {}.hasOwnProperty, oa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", yy = function(t, n) {
  var r = {};
  for (var l in n)
    hs.call(n, l) && (r[l] = n[l]);
  return r[oa] = t, r;
}, vy = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return ds(n, r, l), Rf(function() {
    return fs(n, r, l);
  }), null;
}, gy = /* @__PURE__ */ ps(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var l = e[oa], i = [r], o = "";
  typeof e.className == "string" ? o = zf(t.registered, i, e.className) : e.className != null && (o = e.className + " ");
  var a = Ci(i, void 0, z.useContext(Ir));
  o += t.key + "-" + a.name;
  var s = {};
  for (var c in e)
    hs.call(e, c) && c !== "css" && c !== oa && !my && (s[c] = e[c]);
  return s.className = o, n && (s.ref = n), /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(vy, {
    cache: t,
    serialized: a,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ z.createElement(l, s));
}), wy = gy, oo = { exports: {} }, Fu;
function ky() {
  return Fu || (Fu = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var l = arguments[r];
          for (var i in l)
            ({}).hasOwnProperty.call(l, i) && (n[i] = l[i]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(oo)), oo.exports;
}
ky();
var ju = function(t, n) {
  var r = arguments;
  if (n == null || !hs.call(n, "css"))
    return z.createElement.apply(void 0, r);
  var l = r.length, i = new Array(l);
  i[0] = wy, i[1] = yy(t, n);
  for (var o = 2; o < l; o++)
    i[o] = r[o];
  return z.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ju || (ju = {}));
var Sy = /* @__PURE__ */ ps(function(e, t) {
  var n = e.styles, r = Ci([n], void 0, z.useContext(Ir)), l = z.useRef();
  return Au(function() {
    var i = t.key + "-global", o = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, s = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (o.before = t.sheet.tags[0]), s !== null && (a = !0, s.setAttribute("data-emotion", i), o.hydrate([s])), l.current = [o, a], function() {
      o.flush();
    };
  }, [t]), Au(function() {
    var i = l.current, o = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && fs(t, r.next, !0), o.tags.length) {
      var s = o.tags[o.tags.length - 1].nextElementSibling;
      o.before = s, o.flush();
    }
    t.insert("", r, o, !1);
  }, [t, r.name]), null;
}), xy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Cy = /* @__PURE__ */ Cf(
  function(e) {
    return xy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ny = !1, Ey = Cy, _y = function(t) {
  return t !== "theme";
}, Uu = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Ey : _y;
}, Bu = function(t, n, r) {
  var l;
  if (n) {
    var i = n.shouldForwardProp;
    l = t.__emotion_forwardProp && i ? function(o) {
      return t.__emotion_forwardProp(o) && i(o);
    } : i;
  }
  return typeof l != "function" && r && (l = t.__emotion_forwardProp), l;
}, Py = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return ds(n, r, l), Rf(function() {
    return fs(n, r, l);
  }), null;
}, Ty = function e(t, n) {
  var r = t.__emotion_real === t, l = r && t.__emotion_base || t, i, o;
  n !== void 0 && (i = n.label, o = n.target);
  var a = Bu(t, n, r), s = a || Uu(l), c = !s("as");
  return function() {
    var m = arguments, y = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && y.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      y.push.apply(y, m);
    else {
      var h = m[0];
      y.push(h[0]);
      for (var S = m.length, k = 1; k < S; k++)
        y.push(m[k], h[k]);
    }
    var w = ps(function(E, p, d) {
      var f = c && E.as || l, v = "", x = [], _ = E;
      if (E.theme == null) {
        _ = {};
        for (var C in E)
          _[C] = E[C];
        _.theme = z.useContext(Ir);
      }
      typeof E.className == "string" ? v = zf(p.registered, x, E.className) : E.className != null && (v = E.className + " ");
      var L = Ci(y.concat(x), p.registered, _);
      v += p.key + "-" + L.name, o !== void 0 && (v += " " + o);
      var B = c && a === void 0 ? Uu(f) : s, O = {};
      for (var ie in E)
        c && ie === "as" || B(ie) && (O[ie] = E[ie]);
      return O.className = v, d && (O.ref = d), /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(Py, {
        cache: p,
        serialized: L,
        isStringTag: typeof f == "string"
      }), /* @__PURE__ */ z.createElement(f, O));
    });
    return w.displayName = i !== void 0 ? i : "Styled(" + (typeof l == "string" ? l : l.displayName || l.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = l, w.__emotion_styles = y, w.__emotion_forwardProp = a, Object.defineProperty(w, "toString", {
      value: function() {
        return o === void 0 && Ny ? "NO_COMPONENT_SELECTOR" : "." + o;
      }
    }), w.withComponent = function(E, p) {
      var d = e(E, pe({}, n, p, {
        shouldForwardProp: Bu(w, p, !0)
      }));
      return d.apply(void 0, y);
    }, w;
  };
}, zy = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Hu = Ty.bind(null);
zy.forEach(function(e) {
  Hu[e] = Hu(e);
});
function Ly(e) {
  return e == null || Object.keys(e).length === 0;
}
function Oy(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ u(Sy, {
    styles: typeof t == "function" ? (l) => t(Ly(l) ? n : l) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Wu = [];
function Ry(e) {
  return Wu[0] = e, Ci(Wu);
}
function nn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function If(e) {
  if (/* @__PURE__ */ z.isValidElement(e) || !nn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = If(e[n]);
  }), t;
}
function Vl(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? pe({}, e) : e;
  return nn(e) && nn(t) && Object.keys(t).forEach((l) => {
    /* @__PURE__ */ z.isValidElement(t[l]) ? r[l] = t[l] : nn(t[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, l) && nn(e[l]) ? r[l] = Vl(e[l], t[l], n) : n.clone ? r[l] = nn(t[l]) ? If(t[l]) : t[l] : r[l] = t[l];
  }), r;
}
const My = ["values", "unit", "step"], Iy = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => pe({}, n, {
    [r.key]: r.val
  }), {});
};
function $y(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, l = ui(e, My), i = Iy(t), o = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function s(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function c(h, S) {
    const k = o.indexOf(S);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(k !== -1 && typeof t[o[k]] == "number" ? t[o[k]] : S) - r / 100}${n})`;
  }
  function m(h) {
    return o.indexOf(h) + 1 < o.length ? c(h, o[o.indexOf(h) + 1]) : a(h);
  }
  function y(h) {
    const S = o.indexOf(h);
    return S === 0 ? a(o[1]) : S === o.length - 1 ? s(o[S]) : c(h, o[o.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return pe({
    keys: o,
    values: i,
    up: a,
    down: s,
    between: c,
    only: m,
    not: y,
    unit: n
  }, l);
}
const Dy = {
  borderRadius: 4
}, Ay = Dy;
function ar(e, t) {
  return t ? Vl(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ms = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Vu = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ms[e]}px)`
};
function vt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Vu;
    return t.reduce((o, a, s) => (o[i.up(i.keys[s])] = n(t[s]), o), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Vu;
    return Object.keys(t).reduce((o, a) => {
      if (Object.keys(i.values || ms).indexOf(a) !== -1) {
        const s = i.up(a);
        o[s] = n(t[a], a);
      } else {
        const s = a;
        o[s] = t[s];
      }
      return o;
    }, {});
  }
  return n(t);
}
function Fy(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, l) => {
    const i = e.up(l);
    return r[i] = {}, r;
  }, {})) || {};
}
function bu(e, t) {
  return e.reduce((n, r) => {
    const l = n[r];
    return (!l || Object.keys(l).length === 0) && delete n[r], n;
  }, t);
}
function $f(e) {
  if (typeof e != "string")
    throw new Error(Sm(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ni(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((l, i) => l && l[i] ? l[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, l) => r && r[l] != null ? r[l] : null, e);
}
function bl(e, t, n, r = n) {
  let l;
  return typeof e == "function" ? l = e(n) : Array.isArray(e) ? l = e[n] || r : l = Ni(e, n) || r, t && (l = t(l, r, e)), l;
}
function ee(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: l
  } = e, i = (o) => {
    if (o[t] == null)
      return null;
    const a = o[t], s = o.theme, c = Ni(s, r) || {};
    return vt(o, a, (y) => {
      let h = bl(c, l, y);
      return y === h && typeof y == "string" && (h = bl(c, l, `${t}${y === "default" ? "" : $f(y)}`, y)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function jy(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Uy = {
  m: "margin",
  p: "padding"
}, By = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ku = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Hy = jy((e) => {
  if (e.length > 2)
    if (Ku[e])
      e = Ku[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Uy[t], l = By[n] || "";
  return Array.isArray(l) ? l.map((i) => r + i) : [r + l];
}), ys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], vs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ys, ...vs];
function $r(e, t, n, r) {
  var l;
  const i = (l = Ni(e, t, !1)) != null ? l : n;
  return typeof i == "number" ? (o) => typeof o == "string" ? o : i * o : Array.isArray(i) ? (o) => typeof o == "string" ? o : i[o] : typeof i == "function" ? i : () => {
  };
}
function Df(e) {
  return $r(e, "spacing", 8);
}
function Dr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Wy(e, t) {
  return (n) => e.reduce((r, l) => (r[l] = Dr(t, n), r), {});
}
function Vy(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const l = Hy(n), i = Wy(l, r), o = e[n];
  return vt(e, o, i);
}
function Af(e, t) {
  const n = Df(e.theme);
  return Object.keys(e).map((r) => Vy(e, t, r, n)).reduce(ar, {});
}
function X(e) {
  return Af(e, ys);
}
X.propTypes = {};
X.filterProps = ys;
function Y(e) {
  return Af(e, vs);
}
Y.propTypes = {};
Y.filterProps = vs;
function by(e = 8) {
  if (e.mui)
    return e;
  const t = Df({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const o = t(i);
    return typeof o == "number" ? `${o}px` : o;
  }).join(" ");
  return n.mui = !0, n;
}
function Ei(...e) {
  const t = e.reduce((r, l) => (l.filterProps.forEach((i) => {
    r[i] = l;
  }), r), {}), n = (r) => Object.keys(r).reduce((l, i) => t[i] ? ar(l, t[i](r)) : l, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, l) => r.concat(l.filterProps), []), n;
}
function Be(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ke(e, t) {
  return ee({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ky = Ke("border", Be), Qy = Ke("borderTop", Be), Gy = Ke("borderRight", Be), Xy = Ke("borderBottom", Be), Yy = Ke("borderLeft", Be), Zy = Ke("borderColor"), qy = Ke("borderTopColor"), Jy = Ke("borderRightColor"), e1 = Ke("borderBottomColor"), t1 = Ke("borderLeftColor"), n1 = Ke("outline", Be), r1 = Ke("outlineColor"), _i = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = $r(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Dr(t, r)
    });
    return vt(e, e.borderRadius, n);
  }
  return null;
};
_i.propTypes = {};
_i.filterProps = ["borderRadius"];
Ei(Ky, Qy, Gy, Xy, Yy, Zy, qy, Jy, e1, t1, _i, n1, r1);
const Pi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = $r(e.theme, "spacing", 8), n = (r) => ({
      gap: Dr(t, r)
    });
    return vt(e, e.gap, n);
  }
  return null;
};
Pi.propTypes = {};
Pi.filterProps = ["gap"];
const Ti = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = $r(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Dr(t, r)
    });
    return vt(e, e.columnGap, n);
  }
  return null;
};
Ti.propTypes = {};
Ti.filterProps = ["columnGap"];
const zi = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = $r(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Dr(t, r)
    });
    return vt(e, e.rowGap, n);
  }
  return null;
};
zi.propTypes = {};
zi.filterProps = ["rowGap"];
const l1 = ee({
  prop: "gridColumn"
}), i1 = ee({
  prop: "gridRow"
}), o1 = ee({
  prop: "gridAutoFlow"
}), a1 = ee({
  prop: "gridAutoColumns"
}), s1 = ee({
  prop: "gridAutoRows"
}), u1 = ee({
  prop: "gridTemplateColumns"
}), c1 = ee({
  prop: "gridTemplateRows"
}), d1 = ee({
  prop: "gridTemplateAreas"
}), f1 = ee({
  prop: "gridArea"
});
Ei(Pi, Ti, zi, l1, i1, o1, a1, s1, u1, c1, d1, f1);
function Cn(e, t) {
  return t === "grey" ? t : e;
}
const p1 = ee({
  prop: "color",
  themeKey: "palette",
  transform: Cn
}), h1 = ee({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Cn
}), m1 = ee({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Cn
});
Ei(p1, h1, m1);
function Oe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const y1 = ee({
  prop: "width",
  transform: Oe
}), gs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, l;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ms[n];
      return i ? ((l = e.theme) == null || (l = l.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Oe(n)
      };
    };
    return vt(e, e.maxWidth, t);
  }
  return null;
};
gs.filterProps = ["maxWidth"];
const v1 = ee({
  prop: "minWidth",
  transform: Oe
}), g1 = ee({
  prop: "height",
  transform: Oe
}), w1 = ee({
  prop: "maxHeight",
  transform: Oe
}), k1 = ee({
  prop: "minHeight",
  transform: Oe
});
ee({
  prop: "size",
  cssProperty: "width",
  transform: Oe
});
ee({
  prop: "size",
  cssProperty: "height",
  transform: Oe
});
const S1 = ee({
  prop: "boxSizing"
});
Ei(y1, gs, v1, g1, w1, k1, S1);
const x1 = {
  // borders
  border: {
    themeKey: "borders",
    transform: Be
  },
  borderTop: {
    themeKey: "borders",
    transform: Be
  },
  borderRight: {
    themeKey: "borders",
    transform: Be
  },
  borderBottom: {
    themeKey: "borders",
    transform: Be
  },
  borderLeft: {
    themeKey: "borders",
    transform: Be
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Be
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: _i
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Cn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Cn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Cn
  },
  // spacing
  p: {
    style: Y
  },
  pt: {
    style: Y
  },
  pr: {
    style: Y
  },
  pb: {
    style: Y
  },
  pl: {
    style: Y
  },
  px: {
    style: Y
  },
  py: {
    style: Y
  },
  padding: {
    style: Y
  },
  paddingTop: {
    style: Y
  },
  paddingRight: {
    style: Y
  },
  paddingBottom: {
    style: Y
  },
  paddingLeft: {
    style: Y
  },
  paddingX: {
    style: Y
  },
  paddingY: {
    style: Y
  },
  paddingInline: {
    style: Y
  },
  paddingInlineStart: {
    style: Y
  },
  paddingInlineEnd: {
    style: Y
  },
  paddingBlock: {
    style: Y
  },
  paddingBlockStart: {
    style: Y
  },
  paddingBlockEnd: {
    style: Y
  },
  m: {
    style: X
  },
  mt: {
    style: X
  },
  mr: {
    style: X
  },
  mb: {
    style: X
  },
  ml: {
    style: X
  },
  mx: {
    style: X
  },
  my: {
    style: X
  },
  margin: {
    style: X
  },
  marginTop: {
    style: X
  },
  marginRight: {
    style: X
  },
  marginBottom: {
    style: X
  },
  marginLeft: {
    style: X
  },
  marginX: {
    style: X
  },
  marginY: {
    style: X
  },
  marginInline: {
    style: X
  },
  marginInlineStart: {
    style: X
  },
  marginInlineEnd: {
    style: X
  },
  marginBlock: {
    style: X
  },
  marginBlockStart: {
    style: X
  },
  marginBlockEnd: {
    style: X
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Pi
  },
  rowGap: {
    style: zi
  },
  columnGap: {
    style: Ti
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Oe
  },
  maxWidth: {
    style: gs
  },
  minWidth: {
    transform: Oe
  },
  height: {
    transform: Oe
  },
  maxHeight: {
    transform: Oe
  },
  minHeight: {
    transform: Oe
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Ff = x1;
function C1(...e) {
  const t = e.reduce((r, l) => r.concat(Object.keys(l)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function N1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function E1() {
  function e(n, r, l, i) {
    const o = {
      [n]: r,
      theme: l
    }, a = i[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: s = n,
      themeKey: c,
      transform: m,
      style: y
    } = a;
    if (r == null)
      return null;
    if (c === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = Ni(l, c) || {};
    return y ? y(o) : vt(o, r, (k) => {
      let w = bl(h, m, k);
      return k === w && typeof k == "string" && (w = bl(h, m, `${n}${k === "default" ? "" : $f(k)}`, k)), s === !1 ? w : {
        [s]: w
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: l,
      theme: i = {},
      nested: o
    } = n || {};
    if (!l)
      return null;
    const a = (r = i.unstable_sxConfig) != null ? r : Ff;
    function s(c) {
      let m = c;
      if (typeof c == "function")
        m = c(i);
      else if (typeof c != "object")
        return c;
      if (!m)
        return null;
      const y = Fy(i.breakpoints), h = Object.keys(y);
      let S = y;
      return Object.keys(m).forEach((k) => {
        const w = N1(m[k], i);
        if (w != null)
          if (typeof w == "object")
            if (a[k])
              S = ar(S, e(k, w, i, a));
            else {
              const E = vt({
                theme: i
              }, w, (p) => ({
                [k]: p
              }));
              C1(E, w) ? S[k] = t({
                sx: w,
                theme: i,
                nested: !0
              }) : S = ar(S, E);
            }
          else
            S = ar(S, e(k, w, i, a));
      }), !o && i.modularCssLayers ? {
        "@layer sx": bu(h, S)
      } : bu(h, S);
    }
    return Array.isArray(l) ? l.map(s) : s(l);
  }
  return t;
}
const jf = E1();
jf.filterProps = ["sx"];
const _1 = jf;
function P1(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const T1 = ["breakpoints", "palette", "spacing", "shape"];
function z1(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: l,
    shape: i = {}
  } = e, o = ui(e, T1), a = $y(n), s = by(l);
  let c = Vl({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: pe({
      mode: "light"
    }, r),
    spacing: s,
    shape: pe({}, Ay, i)
  }, o);
  return c.applyStyles = P1, c = t.reduce((m, y) => Vl(m, y), c), c.unstable_sxConfig = pe({}, Ff, o == null ? void 0 : o.unstable_sxConfig), c.unstable_sx = function(y) {
    return _1({
      sx: y,
      theme: this
    });
  }, c;
}
function L1(e) {
  return Object.keys(e).length === 0;
}
function ws(e = null) {
  const t = z.useContext(Ir);
  return !t || L1(t) ? e : t;
}
const O1 = z1();
function R1(e = O1) {
  return ws(e);
}
function ao(e) {
  const t = Ry(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function M1({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = R1(n), l = t && r[t] || r;
  let i = typeof e == "function" ? e(l) : e;
  return l.modularCssLayers && (Array.isArray(i) ? i = i.map((o) => ao(typeof o == "function" ? o(l) : o)) : i = ao(i)), /* @__PURE__ */ u(Oy, {
    styles: i
  });
}
const I1 = typeof window < "u" ? z.useLayoutEffect : z.useEffect, $1 = I1;
let Qu = 0;
function D1(e) {
  const [t, n] = z.useState(e), r = e || t;
  return z.useEffect(() => {
    t == null && (Qu += 1, n(`mui-${Qu}`));
  }, [t]), r;
}
const Gu = co["useId".toString()];
function A1(e) {
  if (Gu !== void 0) {
    const t = Gu();
    return e ?? t;
  }
  return D1(e);
}
const F1 = /* @__PURE__ */ z.createContext(null), Uf = F1;
function Bf() {
  return z.useContext(Uf);
}
const j1 = typeof Symbol == "function" && Symbol.for, U1 = j1 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function B1(e, t) {
  return typeof t == "function" ? t(e) : pe({}, e, t);
}
function H1(e) {
  const {
    children: t,
    theme: n
  } = e, r = Bf(), l = z.useMemo(() => {
    const i = r === null ? n : B1(r, n);
    return i != null && (i[U1] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ u(Uf.Provider, {
    value: l,
    children: t
  });
}
const W1 = ["value"], V1 = /* @__PURE__ */ z.createContext();
function b1(e) {
  let {
    value: t
  } = e, n = ui(e, W1);
  return /* @__PURE__ */ u(V1.Provider, pe({
    value: t ?? !0
  }, n));
}
const K1 = /* @__PURE__ */ z.createContext(void 0);
function Q1({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ u(K1.Provider, {
    value: e,
    children: t
  });
}
function G1(e) {
  const t = ws(), n = A1() || "", {
    modularCssLayers: r
  } = e;
  let l = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? l = "" : typeof r == "string" ? l = r.replace(/mui(?!\.)/g, l) : l = `@layer ${l};`, $1(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const o = i.firstChild;
    if (l) {
      var a;
      if (o && (a = o.hasAttribute) != null && a.call(o, "data-mui-layer-order") && o.getAttribute("data-mui-layer-order") === n)
        return;
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", n), c.textContent = l, i.prepend(c);
    } else {
      var s;
      (s = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || s.remove();
    }
  }, [l, n]), l ? /* @__PURE__ */ u(M1, {
    styles: l
  }) : null;
}
const Xu = {};
function Yu(e, t, n, r = !1) {
  return z.useMemo(() => {
    const l = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(l), o = e ? pe({}, t, {
        [e]: i
      }) : i;
      return r ? () => o : o;
    }
    return e ? pe({}, t, {
      [e]: n
    }) : pe({}, t, n);
  }, [e, t, n, r]);
}
function X1(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, l = ws(Xu), i = Bf() || Xu, o = Yu(r, l, n), a = Yu(r, i, n, !0), s = o.direction === "rtl", c = G1(o);
  return /* @__PURE__ */ u(H1, {
    theme: a,
    children: /* @__PURE__ */ u(Ir.Provider, {
      value: o,
      children: /* @__PURE__ */ u(b1, {
        value: s,
        children: /* @__PURE__ */ g(Q1, {
          value: o == null ? void 0 : o.components,
          children: [c, t]
        })
      })
    })
  });
}
const Y1 = ["theme"];
function Z1(e) {
  let {
    theme: t
  } = e, n = ui(e, Y1);
  const r = t[Lu];
  let l = r || t;
  return typeof t != "function" && (r && !r.vars ? l = pe({}, r, {
    vars: null
  }) : t && !t.vars && (l = pe({}, t, {
    vars: null
  }))), /* @__PURE__ */ u(X1, pe({}, n, {
    themeId: r ? Lu : void 0,
    theme: l
  }));
}
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Hf = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var J1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ev = z.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: l = "",
    children: i,
    iconNode: o,
    ...a
  }, s) => z.createElement(
    "svg",
    {
      ref: s,
      ...J1,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Hf("lucide", l),
      ...a
    },
    [
      ...o.map(([c, m]) => z.createElement(c, m)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = (e, t) => {
  const n = z.forwardRef(
    ({ className: r, ...l }, i) => z.createElement(ev, {
      ref: i,
      iconNode: t,
      className: Hf(`lucide-${q1(e)}`, r),
      ...l
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tv = U("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nv = U("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zu = U("Bookmark", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = U("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rv = U("CodeXml", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qu = U("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lv = U("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iv = U("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ov = U("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const av = U("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sv = U("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uv = U("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cv = U("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dv = U("LayoutTemplate", [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fv = U("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pv = U("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hv = U("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mv = U("Pencil", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = U("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = U("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yv = U("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vv = U("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ju = U("SquareCheckBig", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = U("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gv = U("Tablet", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wv = U("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kv = U("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = U("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Wf = [
  "Layout & organization",
  "Data & entity display",
  "Search & discovery",
  "Actions & creation",
  "Visualization & reporting",
  "Advanced & system"
], gl = [
  { name: "Container", group: "Layout & organization", kind: "container", desc: "Holds other components, nested by default. Used to build compound sections like a subtitles panel." },
  { name: "Divider", group: "Layout & organization", kind: "divider", desc: "A visual separation line between components on a page, with an optional title." },
  { name: "Tabs", group: "Layout & organization", kind: "tabs", desc: "Organizes content across tabs. Each tab behaves like its own page and can hold its own layout." },
  { name: "Back", group: "Layout & organization", kind: "back", desc: "A back button that returns the user to the previously visited page or the parent page." },
  { name: "Title", group: "Layout & organization", kind: "title", desc: "Sets the page title or entity header." },
  { name: "Disable deep zoom", group: "Layout & organization", kind: "disableDeepZoom", desc: "Turns off deep zoom on an inline preview, for a Search component or the entity image viewer." },
  { name: "Entity list", group: "Data & entity display", kind: "entityList", desc: "Displays a collection of entities matching specific criteria." },
  { name: "Entity details", group: "Data & entity display", kind: "entityDetails", desc: "Customises which properties and relations are shown for an entity." },
  { name: "Entity content", group: "Data & entity display", kind: "entityContent", desc: "Includes related content inline on a page." },
  { name: "Entity image", group: "Data & entity display", kind: "entityImage", desc: "Displays a rendition of an entity's image." },
  { name: "Entity indicators", group: "Data & entity display", kind: "entityIndicators", desc: "Highlights key data as configurable indicators when a condition on a field is met." },
  { name: "Entity renditions", group: "Data & entity display", kind: "entityRenditions", desc: "Lists an entity's available renditions (original, medium, thumbnail) with quick download." },
  { name: "Entity comments", group: "Data & entity display", kind: "entityComments", desc: "Adds a discussion panel to a page for user comments." },
  { name: "Entity rating", group: "Data & entity display", kind: "entityRating", desc: "Lets users rate content, showing the average and the count per score." },
  { name: "Entity history", group: "Data & entity display", kind: "entityHistory", desc: "Shows the file history of an asset." },
  { name: "Entity operations", group: "Data & entity display", kind: "entityOperations", desc: "Defines which operations are available from an entity's detail page." },
  { name: "Search", group: "Search & discovery", kind: "search", desc: "Customises search results, including which fields display and their look and feel." },
  { name: "Search box", group: "Search & discovery", kind: "searchBox", desc: "A search tile that lets a user run a search directly from the page." },
  { name: "Saved Search Grid", group: "Search & discovery", kind: "savedSearchGrid", desc: "Displays the results of a saved search on the page." },
  { name: "Selection", group: "Search & discovery", kind: "selection", desc: "Lets users build a selection of entities and run custom actions against it." },
  { name: "Creation", group: "Actions & creation", kind: "creation", desc: "Lets users create new entities directly from the page." },
  { name: "Navigation", group: "Actions & creation", kind: "navigation", desc: "A button with redirection links to any portal page in Content Hub." },
  { name: "Modal", group: "Actions & creation", kind: "modal", desc: "Links out to another page's content, shown in an overlay." },
  { name: "Download order", group: "Actions & creation", kind: "downloadOrder", desc: "Shows the user's most recent download orders." },
  { name: "Chart", group: "Visualization & reporting", kind: "chart", desc: "Visualises event data as a number, pie, or donut chart." },
  { name: "Chart filter", group: "Visualization & reporting", kind: "chartFilter", desc: "Adds a time dimension to a chart. Defaults to the last 30 days." },
  { name: "Gantt chart", group: "Visualization & reporting", kind: "ganttChart", desc: "A timeline view for a project, showing stages and tasks." },
  { name: "What's New", group: "Visualization & reporting", kind: "whatsNew", desc: "Adds a feed of recent platform updates to a page." },
  { name: "HTML", group: "Advanced & system", kind: "html", desc: "Inserts custom HTML into a page, editable via the interface or a source editor." },
  { name: "External", group: "Advanced & system", kind: "external", desc: "Embeds an external library inside a Content Hub portal page." },
  { name: "Mass edit table", group: "Advanced & system", kind: "massEditTable", desc: "Adds a mass-edit table for bulk changes across records." },
  { name: "StateMachine Viewer", group: "Advanced & system", kind: "stateMachineViewer", desc: "Shows an entity's status within its associated state flow." }
], so = [
  { id: "1", label: "1 column", cols: [12] },
  { id: "2-equal", label: "2 columns (6/6)", cols: [6, 6] },
  { id: "3-equal", label: "3 columns (4/4/4)", cols: [4, 4, 4] },
  { id: "8-4", label: "2 columns (8/4)", cols: [8, 4] },
  { id: "4-8", label: "2 columns (4/8)", cols: [4, 8] }
], uo = [
  { id: "desktop", label: "Desktop", width: 1280 },
  { id: "tablet", label: "Tablet", width: 768 },
  { id: "mobile", label: "Mobile", width: 375 }
];
function Sv() {
  const [e, t] = z.useState(!1), [n, r] = z.useState("park-sky-external-component-test.jpg"), [l, i] = z.useState("Park Sky"), [o, a] = z.useState("Aerial view of the park at sunset.");
  return /* @__PURE__ */ g("div", { className: "ch-detail-panels", children: [
    /* @__PURE__ */ g("div", { className: "ch-shadowed-panel", children: [
      /* @__PURE__ */ g("div", { className: "ch-panel-header", children: [
        /* @__PURE__ */ u("h4", { children: "Overview" }),
        e ? /* @__PURE__ */ g("div", { className: "ch-panel-header__actions", children: [
          /* @__PURE__ */ u("button", { type: "button", className: "ch-btn-cancel", onClick: () => t(!1), children: "Cancel" }),
          /* @__PURE__ */ u("button", { type: "button", className: "ch-btn-contained ch-btn-contained--compact", onClick: () => t(!1), children: "Save" })
        ] }) : /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            className: "ch-panel-header__action",
            "aria-label": "Edit",
            onClick: () => t(!0),
            children: /* @__PURE__ */ u(mv, { size: 14 })
          }
        )
      ] }),
      /* @__PURE__ */ u("div", { className: "ch-panel-body", children: e ? /* @__PURE__ */ g("div", { className: "ch-detail-group", children: [
        /* @__PURE__ */ g("div", { className: "ch-form-field", children: [
          /* @__PURE__ */ u("label", { className: "ch-form-label", htmlFor: "ch-filename", children: "Filename" }),
          /* @__PURE__ */ u(
            "input",
            {
              id: "ch-filename",
              className: "ch-filled-input",
              type: "text",
              value: n,
              onChange: (m) => r(m.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: "ch-form-field", children: [
          /* @__PURE__ */ u("label", { className: "ch-form-label", htmlFor: "ch-title", children: "Title" }),
          /* @__PURE__ */ u(
            "input",
            {
              id: "ch-title",
              className: "ch-filled-input",
              type: "text",
              value: l,
              onChange: (m) => i(m.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: "ch-form-field", children: [
          /* @__PURE__ */ u("label", { className: "ch-form-label", htmlFor: "ch-description", children: "Description" }),
          /* @__PURE__ */ g("div", { className: "ch-rich-text-field", children: [
            /* @__PURE__ */ g("div", { className: "ch-rich-text-toolbar", "aria-hidden": "true", children: [
              /* @__PURE__ */ u("button", { type: "button", className: "ch-rich-text-btn", children: /* @__PURE__ */ u("strong", { children: "B" }) }),
              /* @__PURE__ */ u("button", { type: "button", className: "ch-rich-text-btn", children: /* @__PURE__ */ u("em", { children: "I" }) }),
              /* @__PURE__ */ u("button", { type: "button", className: "ch-rich-text-btn", children: "Link" })
            ] }),
            /* @__PURE__ */ u(
              "textarea",
              {
                id: "ch-description",
                className: "ch-rich-text-area",
                value: o,
                onChange: (m) => a(m.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ g("div", { className: "ch-form-field", children: [
          /* @__PURE__ */ u("span", { className: "ch-form-label", children: "Tags" }),
          /* @__PURE__ */ g("div", { className: "ch-tag-list", children: [
            /* @__PURE__ */ u("span", { className: "ch-tag-chip", children: "Landscape" }),
            /* @__PURE__ */ u("span", { className: "ch-tag-chip", children: "Photography" })
          ] }),
          /* @__PURE__ */ g("button", { type: "button", className: "ch-relation-add", children: [
            /* @__PURE__ */ u(Kl, { size: 13 }),
            " Add"
          ] })
        ] })
      ] }) : /* @__PURE__ */ g("div", { className: "ch-detail-group", children: [
        /* @__PURE__ */ g("div", { className: "ch-detail-field", children: [
          /* @__PURE__ */ u("span", { className: "ch-detail-field__label", children: "Filename" }),
          /* @__PURE__ */ u("p", { className: "ch-detail-field__value", children: n })
        ] }),
        /* @__PURE__ */ g("div", { className: "ch-detail-field", children: [
          /* @__PURE__ */ u("span", { className: "ch-detail-field__label", children: "Title" }),
          /* @__PURE__ */ u("p", { className: "ch-detail-field__value", children: l })
        ] }),
        /* @__PURE__ */ g("div", { className: "ch-detail-field", children: [
          /* @__PURE__ */ u("span", { className: "ch-detail-field__label", children: "Description" }),
          /* @__PURE__ */ u("p", { className: "ch-detail-field__value", children: o })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ g("div", { className: "ch-shadowed-panel", children: [
      /* @__PURE__ */ g("div", { className: "ch-panel-header", children: [
        /* @__PURE__ */ u("h4", { children: "Image analysis" }),
        e ? /* @__PURE__ */ g("button", { type: "button", className: "ch-relation-add", children: [
          /* @__PURE__ */ u(Kl, { size: 13 }),
          " Add"
        ] }) : null
      ] }),
      /* @__PURE__ */ u("div", { className: "ch-panel-body", children: /* @__PURE__ */ g("div", { className: "ch-tag-list", children: [
        /* @__PURE__ */ u("span", { className: "ch-tag-chip", children: "Sky" }),
        /* @__PURE__ */ u("span", { className: "ch-tag-chip", children: "Tree" }),
        /* @__PURE__ */ u("span", { className: "ch-tag-chip", children: "Outdoor" })
      ] }) })
    ] })
  ] });
}
const xv = {
  container: () => /* @__PURE__ */ g("div", { className: "ch-container", children: [
    /* @__PURE__ */ u("div", { className: "ch-chip", children: "Creation" }),
    /* @__PURE__ */ u("div", { className: "ch-chip", children: "Search" })
  ] }),
  divider: () => /* @__PURE__ */ u("div", { className: "ch-divider", children: /* @__PURE__ */ u("span", { children: "Section" }) }),
  tabs: () => /* @__PURE__ */ g("div", { className: "ch-mui-tabs", children: [
    /* @__PURE__ */ u("button", { type: "button", className: "ch-mui-tab active", children: "System" }),
    /* @__PURE__ */ u("button", { type: "button", className: "ch-mui-tab", children: "Rights" }),
    /* @__PURE__ */ u("button", { type: "button", className: "ch-mui-tab", children: "Comments" })
  ] }),
  back: () => /* @__PURE__ */ u("button", { type: "button", className: "ch-back-icon", "aria-label": "Back", children: /* @__PURE__ */ u(tv, { size: 16 }) }),
  title: () => /* @__PURE__ */ u("h2", { className: "ch-page-title", children: "Park Sky" }),
  disableDeepZoom: () => /* @__PURE__ */ g("div", { className: "ch-toggle-row", children: [
    /* @__PURE__ */ u("span", { children: "Deep zoom" }),
    /* @__PURE__ */ u("div", { className: "ch-mui-switch off", role: "switch", "aria-checked": !1 })
  ] }),
  entityList: () => /* @__PURE__ */ g("div", { children: [
    /* @__PURE__ */ u("h3", { className: "ch-section-header", children: "Recent items" }),
    /* @__PURE__ */ u("div", { className: "ch-entity-grid", children: ["Test 123", "US - Colorado", "Field Study", "Form No. 12"].map((e) => /* @__PURE__ */ g("div", { className: "ch-entity-card", children: [
      /* @__PURE__ */ u("div", { className: "ch-entity-card__image", children: e }),
      /* @__PURE__ */ u("div", { className: "ch-entity-card__title", children: e })
    ] }, e)) })
  ] }),
  entityDetails: () => /* @__PURE__ */ u(Sv, {}),
  entityContent: () => /* @__PURE__ */ g("div", { className: "ch-tag-list", children: [
    /* @__PURE__ */ u("span", { className: "ch-tag-chip", children: "Related press release" }),
    /* @__PURE__ */ u("span", { className: "ch-tag-chip", children: "Exhibition catalogue" })
  ] }),
  entityImage: () => /* @__PURE__ */ g("div", { className: "ch-detail-image", title: "Show full-screen", children: [
    /* @__PURE__ */ u("img", { src: "https://placehold.co/400x280/E8F0FA/0066CC?text=Preview", alt: "Entity preview" }),
    /* @__PURE__ */ u("span", { className: "ch-detail-image__hint", children: "Show full-screen" })
  ] }),
  entityIndicators: () => /* @__PURE__ */ g("div", { className: "ch-tag-list", children: [
    /* @__PURE__ */ u("span", { className: "ch-tag-chip", children: "Rights cleared" }),
    /* @__PURE__ */ u("span", { className: "ch-tag-chip", children: "Review due" })
  ] }),
  entityRenditions: () => /* @__PURE__ */ g("div", { className: "ch-shadowed-panel", children: [
    /* @__PURE__ */ g("div", { className: "ch-panel-header", children: [
      /* @__PURE__ */ u("h3", { children: "Renditions" }),
      /* @__PURE__ */ u(Qn, { size: 14, color: "#68738d" })
    ] }),
    /* @__PURE__ */ g("div", { className: "ch-panel-body", children: [
      /* @__PURE__ */ g("button", { type: "button", className: "ch-btn-outlined", children: [
        /* @__PURE__ */ u(Kl, { size: 13 }),
        " Rendition"
      ] }),
      /* @__PURE__ */ g("table", { className: "ch-rendition-table", children: [
        /* @__PURE__ */ u("thead", { children: /* @__PURE__ */ g("tr", { children: [
          /* @__PURE__ */ u("th", { children: "Name" }),
          /* @__PURE__ */ u("th", { children: "Size" }),
          /* @__PURE__ */ u("th", {})
        ] }) }),
        /* @__PURE__ */ u("tbody", { children: [
          ["Original", "2.4 MB"],
          ["Medium", "420 KB"],
          ["Thumbnail", "18 KB"]
        ].map(([e, t]) => /* @__PURE__ */ g("tr", { children: [
          /* @__PURE__ */ u("td", { children: e }),
          /* @__PURE__ */ u("td", { children: t }),
          /* @__PURE__ */ u("td", { children: /* @__PURE__ */ u(qu, { size: 12, color: "#68738d" }) })
        ] }, e)) })
      ] })
    ] })
  ] }),
  entityComments: () => /* @__PURE__ */ g("div", { className: "ch-comments", children: [
    /* @__PURE__ */ g("div", { className: "ch-comment", children: [
      /* @__PURE__ */ u("div", { className: "ch-comment__avatar", children: "RO" }),
      /* @__PURE__ */ g("div", { className: "ch-comment__body", children: [
        /* @__PURE__ */ u("strong", { children: "R. Osei" }),
        /* @__PURE__ */ u("p", { children: "Can we confirm the loan return date?" })
      ] })
    ] }),
    /* @__PURE__ */ g("div", { className: "ch-comment", children: [
      /* @__PURE__ */ u("div", { className: "ch-comment__avatar", children: "KN" }),
      /* @__PURE__ */ g("div", { className: "ch-comment__body", children: [
        /* @__PURE__ */ u("strong", { children: "K. Novak" }),
        /* @__PURE__ */ u("p", { children: "Confirmed for the 14th." })
      ] })
    ] })
  ] }),
  entityRating: () => /* @__PURE__ */ g("div", { className: "ch-rating", children: [
    [1, 2, 3, 4].map((e) => /* @__PURE__ */ u(ec, { size: 14, fill: "#0066cc", color: "#0066cc" }, e)),
    /* @__PURE__ */ u(ec, { size: 14, color: "#e5e8eb" }),
    /* @__PURE__ */ u("span", { children: "4.0 (12 votes)" })
  ] }),
  entityHistory: () => /* @__PURE__ */ g("div", { className: "ch-shadowed-panel", children: [
    /* @__PURE__ */ g("div", { className: "ch-panel-header", children: [
      /* @__PURE__ */ u("h3", { children: "All files" }),
      /* @__PURE__ */ u(Qn, { size: 14, color: "#68738d" })
    ] }),
    /* @__PURE__ */ u("div", { className: "ch-panel-body", children: /* @__PURE__ */ g("div", { className: "ch-history-list", children: [
      /* @__PURE__ */ g("div", { className: "ch-history-item", children: [
        /* @__PURE__ */ u("div", { className: "ch-history-item__avatar", children: "v3" }),
        /* @__PURE__ */ g("div", { className: "ch-history-item__text", children: [
          /* @__PURE__ */ u("strong", { children: "park-sky-external-component-test.jpg" }),
          /* @__PURE__ */ u("span", { children: "Replaced · 19 Jun" })
        ] })
      ] }),
      /* @__PURE__ */ g("div", { className: "ch-history-item", children: [
        /* @__PURE__ */ u("div", { className: "ch-history-item__avatar", children: "v2" }),
        /* @__PURE__ */ g("div", { className: "ch-history-item__text", children: [
          /* @__PURE__ */ u("strong", { children: "park-sky-v2.jpg" }),
          /* @__PURE__ */ u("span", { children: "Replaced · 2 Apr" })
        ] })
      ] })
    ] }) })
  ] }),
  entityOperations: () => /* @__PURE__ */ g("div", { className: "ch-actions-bar", children: [
    /* @__PURE__ */ g("button", { type: "button", className: "ch-btn-contained", children: [
      /* @__PURE__ */ u(qu, { size: 13 }),
      " Download"
    ] }),
    /* @__PURE__ */ u("button", { type: "button", className: "ch-btn-icon-only", "aria-label": "Upload", children: /* @__PURE__ */ u(kv, { size: 16 }) }),
    /* @__PURE__ */ u("button", { type: "button", className: "ch-btn-icon-only", "aria-label": "Annotate", children: /* @__PURE__ */ u(pv, { size: 16 }) }),
    /* @__PURE__ */ u("button", { type: "button", className: "ch-btn-icon-only", "aria-label": "Use direct link", children: /* @__PURE__ */ u(fv, { size: 16 }) }),
    /* @__PURE__ */ u("button", { type: "button", className: "ch-btn-icon-only", "aria-label": "More actions", children: /* @__PURE__ */ u(lv, { size: 16 }) })
  ] }),
  search: () => /* @__PURE__ */ g("div", { className: "ch-search-component", children: [
    /* @__PURE__ */ g("div", { className: "ch-search-filters", children: [
      /* @__PURE__ */ g("div", { className: "ch-search-tabs", children: [
        /* @__PURE__ */ g("button", { type: "button", className: "ch-search-tab active", children: [
          /* @__PURE__ */ u(iv, { size: 14 }),
          "Filters"
        ] }),
        /* @__PURE__ */ g("button", { type: "button", className: "ch-search-tab", children: [
          /* @__PURE__ */ u(yv, { size: 14 }),
          "Advanced"
        ] }),
        /* @__PURE__ */ g("button", { type: "button", className: "ch-search-tab", children: [
          /* @__PURE__ */ u(sv, { size: 14 }),
          "Saved"
        ] })
      ] }),
      /* @__PURE__ */ g("div", { className: "ch-search-tabpanel", children: [
        /* @__PURE__ */ g("div", { className: "ch-facet-header", children: [
          /* @__PURE__ */ u("h5", { children: "Usage rights" }),
          /* @__PURE__ */ u(Qn, { size: 14, color: "#68738d" })
        ] }),
        /* @__PURE__ */ u("hr", { className: "ch-hr" }),
        /* @__PURE__ */ u("div", { className: "ch-facet-header", children: /* @__PURE__ */ u("h5", { children: "Locations" }) }),
        /* @__PURE__ */ u("button", { type: "button", className: "ch-facet-item", children: "London (12)" }),
        /* @__PURE__ */ u("button", { type: "button", className: "ch-facet-item", children: "Paris (8)" }),
        /* @__PURE__ */ u("button", { type: "button", className: "ch-facet-item", children: "New York (24)" })
      ] })
    ] }),
    /* @__PURE__ */ g("div", { className: "ch-search-results", children: [
      /* @__PURE__ */ g("div", { className: "ch-search-results-header", children: [
        /* @__PURE__ */ g("div", { className: "ch-searchbar", children: [
          /* @__PURE__ */ u(aa, { size: 12 }),
          ' "still life"'
        ] }),
        /* @__PURE__ */ g("div", { className: "ch-selection-actions", children: [
          /* @__PURE__ */ g("button", { type: "button", className: "ch-text-btn", children: [
            "Select all",
            /* @__PURE__ */ u(Ju, { size: 14 })
          ] }),
          /* @__PURE__ */ u("button", { type: "button", className: "ch-icon-btn", "aria-label": "More options", children: /* @__PURE__ */ u(Qn, { size: 14 }) })
        ] })
      ] }),
      /* @__PURE__ */ u("div", { className: "ch-searchgrid", children: ["Study I", "Form 12", "Field III"].map((e) => /* @__PURE__ */ u("div", { className: "ch-searchcard", children: /* @__PURE__ */ u("div", { className: "ch-searchcard-thumb", children: e }) }, e)) })
    ] })
  ] }),
  searchBox: () => /* @__PURE__ */ g("div", { className: "ch-searchbox-hero", children: [
    /* @__PURE__ */ u("span", { className: "ch-searchbox-hero__btn", "aria-hidden": "true", children: /* @__PURE__ */ u(aa, { size: 14 }) }),
    /* @__PURE__ */ u(
      "input",
      {
        className: "ch-searchbox-hero__input",
        type: "text",
        placeholder: "Search Content Hub...",
        readOnly: !0
      }
    )
  ] }),
  savedSearchGrid: () => /* @__PURE__ */ g("div", { children: [
    /* @__PURE__ */ u("h3", { className: "ch-section-header", children: /* @__PURE__ */ u("a", { href: "#saved", children: "My saved searches" }) }),
    /* @__PURE__ */ g("div", { className: "ch-tile-grid", children: [
      /* @__PURE__ */ g("div", { className: "ch-tile", children: [
        /* @__PURE__ */ u("div", { className: "ch-tile__icon", children: /* @__PURE__ */ u(Zu, { size: 16 }) }),
        /* @__PURE__ */ u("div", { className: "ch-tile__label", children: "Available works" }),
        /* @__PURE__ */ u("div", { className: "ch-tile__count", children: "24 results" })
      ] }),
      /* @__PURE__ */ g("div", { className: "ch-tile", children: [
        /* @__PURE__ */ u("div", { className: "ch-tile__icon", children: /* @__PURE__ */ u(ov, { size: 16 }) }),
        /* @__PURE__ */ u("div", { className: "ch-tile__label", children: "On loan" }),
        /* @__PURE__ */ u("div", { className: "ch-tile__count", children: "8 results" })
      ] }),
      /* @__PURE__ */ g("div", { className: "ch-tile", children: [
        /* @__PURE__ */ u("div", { className: "ch-tile__icon", children: /* @__PURE__ */ u(Zu, { size: 16 }) }),
        /* @__PURE__ */ u("div", { className: "ch-tile__label", children: "New acquisitions" }),
        /* @__PURE__ */ u("div", { className: "ch-tile__count", children: "3 results" })
      ] })
    ] })
  ] }),
  selection: () => /* @__PURE__ */ g("div", { children: [
    /* @__PURE__ */ g("div", { className: "ch-selection-actions", children: [
      /* @__PURE__ */ g("button", { type: "button", className: "ch-text-btn", children: [
        "Select all",
        /* @__PURE__ */ u(Ju, { size: 14 })
      ] }),
      /* @__PURE__ */ u("button", { type: "button", className: "ch-icon-btn", "aria-label": "Selection options", children: /* @__PURE__ */ u(Qn, { size: 14 }) })
    ] }),
    /* @__PURE__ */ u("p", { className: "ch-selection-count", children: "2 items selected · Add to collection" })
  ] }),
  creation: () => /* @__PURE__ */ g("button", { type: "button", className: "ch-btn-primary", children: [
    /* @__PURE__ */ u(Kl, { size: 13 }),
    " Create new asset"
  ] }),
  navigation: () => /* @__PURE__ */ g("div", { className: "ch-nav-pills", children: [
    /* @__PURE__ */ u("button", { type: "button", className: "ch-nav-pill active", children: "Assets" }),
    /* @__PURE__ */ u("button", { type: "button", className: "ch-nav-pill", children: "Products" }),
    /* @__PURE__ */ u("button", { type: "button", className: "ch-nav-pill", children: "Projects" }),
    /* @__PURE__ */ u("button", { type: "button", className: "ch-nav-pill", children: "Collections" })
  ] }),
  modal: () => /* @__PURE__ */ g("div", { className: "ch-modal-preview", children: [
    /* @__PURE__ */ g("div", { className: "ch-modal-header", children: [
      "Linked page ",
      /* @__PURE__ */ u(sa, { size: 12 })
    ] }),
    /* @__PURE__ */ u("div", { className: "ch-modal-body", children: "Content from the linked entity's page renders here." })
  ] }),
  downloadOrder: () => /* @__PURE__ */ g("div", { className: "ch-orders", children: [
    /* @__PURE__ */ g("div", { className: "ch-order-card", children: [
      /* @__PURE__ */ u("span", { className: "ch-order-card__id", children: "Order #4021" }),
      /* @__PURE__ */ u("span", { className: "ch-order-card__meta", children: "3 assets · 2 days ago" })
    ] }),
    /* @__PURE__ */ g("div", { className: "ch-order-card", children: [
      /* @__PURE__ */ u("span", { className: "ch-order-card__id", children: "Order #4018" }),
      /* @__PURE__ */ u("span", { className: "ch-order-card__meta", children: "1 asset · 1 week ago" })
    ] })
  ] }),
  chart: () => /* @__PURE__ */ g("div", { className: "ch-chart", children: [
    /* @__PURE__ */ u("div", { className: "ch-donut" }),
    /* @__PURE__ */ g("div", { className: "ch-chart-legend", children: [
      /* @__PURE__ */ g("div", { children: [
        /* @__PURE__ */ u("span", { className: "dot blue" }),
        "Available 62%"
      ] }),
      /* @__PURE__ */ g("div", { children: [
        /* @__PURE__ */ u("span", { className: "dot navy" }),
        "On loan 24%"
      ] }),
      /* @__PURE__ */ g("div", { children: [
        /* @__PURE__ */ u("span", { className: "dot grey" }),
        "Sold 14%"
      ] })
    ] })
  ] }),
  chartFilter: () => /* @__PURE__ */ u("div", { className: "ch-chartfilter", children: ["7d", "30d", "90d"].map((e, t) => /* @__PURE__ */ u("button", { type: "button", className: t === 1 ? "active" : "", children: e }, e)) }),
  ganttChart: () => /* @__PURE__ */ g("div", { className: "ch-gantt", children: [
    /* @__PURE__ */ g("div", { className: "ch-gantt-row", children: [
      /* @__PURE__ */ u("span", { children: "Photography" }),
      /* @__PURE__ */ u("div", { className: "ch-gantt-bar", style: { width: "30%" } })
    ] }),
    /* @__PURE__ */ g("div", { className: "ch-gantt-row", children: [
      /* @__PURE__ */ u("span", { children: "Cataloguing" }),
      /* @__PURE__ */ u("div", { className: "ch-gantt-bar", style: { width: "55%", marginLeft: "20%" } })
    ] }),
    /* @__PURE__ */ g("div", { className: "ch-gantt-row", children: [
      /* @__PURE__ */ u("span", { children: "Publish" }),
      /* @__PURE__ */ u("div", { className: "ch-gantt-bar", style: { width: "20%", marginLeft: "70%" } })
    ] })
  ] }),
  whatsNew: () => /* @__PURE__ */ g("div", { className: "ch-whatsnew-feed", children: [
    /* @__PURE__ */ g("div", { className: "ch-whatsnew-item", children: [
      /* @__PURE__ */ u("strong", { children: "AI-assisted search" }),
      " is now available in all portals."
    ] }),
    /* @__PURE__ */ g("div", { className: "ch-whatsnew-item", children: [
      /* @__PURE__ */ u("strong", { children: "Bulk rights review" }),
      " shipped this week."
    ] }),
    /* @__PURE__ */ g("div", { className: "ch-whatsnew-dots", "aria-hidden": "true", children: [
      /* @__PURE__ */ u("span", { className: "active" }),
      /* @__PURE__ */ u("span", {}),
      /* @__PURE__ */ u("span", {})
    ] })
  ] }),
  html: () => /* @__PURE__ */ u("div", { className: "ch-notice", children: "Viewing room opens at 10:00. Please check in at reception." }),
  external: () => /* @__PURE__ */ u("div", { className: "ch-external", children: "External library embed (iframe)" }),
  massEditTable: () => /* @__PURE__ */ g("table", { className: "ch-table", children: [
    /* @__PURE__ */ u("thead", { children: /* @__PURE__ */ g("tr", { children: [
      /* @__PURE__ */ u("th", { children: /* @__PURE__ */ u("input", { type: "checkbox", readOnly: !0 }) }),
      /* @__PURE__ */ u("th", { children: "Name" }),
      /* @__PURE__ */ u("th", { children: "Status" })
    ] }) }),
    /* @__PURE__ */ g("tbody", { children: [
      /* @__PURE__ */ g("tr", { children: [
        /* @__PURE__ */ u("td", { children: /* @__PURE__ */ u("input", { type: "checkbox", checked: !0, readOnly: !0 }) }),
        /* @__PURE__ */ u("td", { children: "Untitled (Study)" }),
        /* @__PURE__ */ u("td", { children: "Available" })
      ] }),
      /* @__PURE__ */ g("tr", { children: [
        /* @__PURE__ */ u("td", { children: /* @__PURE__ */ u("input", { type: "checkbox", readOnly: !0 }) }),
        /* @__PURE__ */ u("td", { children: "Form No. 12" }),
        /* @__PURE__ */ u("td", { children: "On loan" })
      ] })
    ] })
  ] }),
  stateMachineViewer: () => /* @__PURE__ */ g("div", { className: "ch-statemachine", children: [
    /* @__PURE__ */ u("div", { className: "ch-state done", children: "Draft" }),
    /* @__PURE__ */ u("div", { className: "ch-state-arrow", children: "→" }),
    /* @__PURE__ */ u("div", { className: "ch-state done", children: "In review" }),
    /* @__PURE__ */ u("div", { className: "ch-state-arrow", children: "→" }),
    /* @__PURE__ */ u("div", { className: "ch-state active", children: "Published" })
  ] })
};
function ua({ kind: e }) {
  const t = xv[e];
  return t ? /* @__PURE__ */ u(t, {}) : /* @__PURE__ */ g("div", { className: "ch-missing", children: [
    'No preview registered for "',
    e,
    '"'
  ] });
}
const Cv = {
  desktop: hv,
  tablet: gv,
  mobile: vv
};
function Nv({ initialComponent: e }) {
  const t = gl.find((E) => E.name === e) ?? gl[6], [n, r] = z.useState(t), [l, i] = z.useState("desktop"), [o, a] = z.useState("canvas"), [s, c] = z.useState(""), [m, y] = z.useState("1"), h = z.useMemo(() => {
    const E = gl.filter(
      (p) => p.name.toLowerCase().includes(s.toLowerCase()) || p.group.toLowerCase().includes(s.toLowerCase())
    );
    return Wf.map((p) => ({
      group: p,
      items: E.filter((d) => d.group === p)
    })).filter((p) => p.items.length > 0);
  }, [s]), S = uo.find((E) => E.id === l) ?? uo[0], k = so.find((E) => E.id === m) ?? so[0], w = {
    componentType: n.name,
    rowSettings: {
      width: "full",
      columnLayout: k.label,
      responsiveness: { override: S.label }
    }
  };
  return /* @__PURE__ */ g(mp, { children: [
    /* @__PURE__ */ g("aside", { className: "ch-sidebar", children: [
      /* @__PURE__ */ g("div", { className: "ch-sidebar-header", children: [
        /* @__PURE__ */ u("h1", { children: "Content Hub Component Library" }),
        /* @__PURE__ */ u("span", { children: "OOTB page components" })
      ] }),
      /* @__PURE__ */ g("div", { className: "ch-sidebar-search", children: [
        /* @__PURE__ */ u(aa, { size: 14, color: "#68738d" }),
        /* @__PURE__ */ u(
          "input",
          {
            placeholder: "Search components...",
            value: s,
            onChange: (E) => c(E.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ u("div", { className: "ch-list", children: h.map(({ group: E, items: p }) => /* @__PURE__ */ g("div", { children: [
        /* @__PURE__ */ u("div", { className: "ch-cat-label", children: E }),
        p.map((d) => /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            className: `ch-item ${n.name === d.name ? "active" : ""}`,
            onClick: () => r(d),
            children: d.name
          },
          d.name
        ))
      ] }, E)) })
    ] }),
    /* @__PURE__ */ g("main", { className: "ch-main", children: [
      /* @__PURE__ */ g("header", { className: "ch-page-header", children: [
        /* @__PURE__ */ g("div", { children: [
          /* @__PURE__ */ u("h2", { className: "ch-page-header-title", children: n.name }),
          /* @__PURE__ */ u("p", { className: "ch-page-header-desc", children: n.desc })
        ] }),
        /* @__PURE__ */ g("div", { className: "ch-page-header-right", children: [
          /* @__PURE__ */ g("div", { className: "ch-row2", children: [
            /* @__PURE__ */ u(
              "select",
              {
                className: "ch-select",
                value: m,
                onChange: (E) => y(E.target.value),
                children: so.map((E) => /* @__PURE__ */ u("option", { value: E.id, children: E.label }, E.id))
              }
            ),
            /* @__PURE__ */ g("div", { className: "ch-view-toggle", children: [
              /* @__PURE__ */ g(
                "button",
                {
                  type: "button",
                  className: o === "canvas" ? "active" : "",
                  onClick: () => a("canvas"),
                  children: [
                    /* @__PURE__ */ u(cv, { size: 11 }),
                    " Canvas"
                  ]
                }
              ),
              /* @__PURE__ */ g(
                "button",
                {
                  type: "button",
                  className: o === "code" ? "active" : "",
                  onClick: () => a("code"),
                  children: [
                    /* @__PURE__ */ u(rv, { size: 11 }),
                    " Row settings"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u("div", { className: "ch-size-toggle", children: uo.map((E) => {
            const p = Cv[E.id];
            return /* @__PURE__ */ g(
              "button",
              {
                type: "button",
                className: l === E.id ? "active" : "",
                onClick: () => i(E.id),
                children: [
                  /* @__PURE__ */ u(p, { size: 11 }),
                  " ",
                  E.label
                ]
              },
              E.id
            );
          }) })
        ] })
      ] }),
      o === "canvas" ? /* @__PURE__ */ u("div", { className: "ch-canvas-wrap", children: /* @__PURE__ */ g("div", { style: { width: S.width, maxWidth: "100%" }, children: [
        /* @__PURE__ */ g("div", { className: "ch-frame-label", children: [
          S.label,
          " · responsiveness override · ",
          S.width,
          "px"
        ] }),
        /* @__PURE__ */ u("div", { className: "ch-frame", children: /* @__PURE__ */ u("div", { className: "ch-row", children: k.cols.map((E, p) => /* @__PURE__ */ u(
          "div",
          {
            className: `ch-slot ${p !== 0 ? "ch-slot-empty" : ""}`,
            style: { gridColumn: `span ${E}` },
            children: p === 0 ? /* @__PURE__ */ g(z.Fragment, { children: [
              /* @__PURE__ */ u("span", { className: "ch-slot-tag", children: n.name }),
              /* @__PURE__ */ u(ua, { kind: n.kind })
            ] }) : "empty column"
          },
          p
        )) }) })
      ] }) }) : /* @__PURE__ */ g("div", { className: "ch-code-panel", children: [
        /* @__PURE__ */ g("div", { className: "ch-assumption", children: [
          /* @__PURE__ */ u(uv, { size: 13, style: { marginTop: 1, flexShrink: 0 } }),
          /* @__PURE__ */ u("span", { children: "This mirrors the real Row settings model (Row width, Column layout, Responsiveness override), not a fabricated data contract. It doesn't represent a documented public API response, Content Hub's page configuration isn't exposed that way." })
        ] }),
        /* @__PURE__ */ u("pre", { children: JSON.stringify(w, null, 2) })
      ] })
    ] })
  ] });
}
const tc = "application/x-ch-component-kind", nc = 300, Ev = 180, _v = 100, Pv = 60;
let Tv = 1;
function zv() {
  return `pb-${Tv++}`;
}
function Lv(e) {
  try {
    const t = JSON.parse(e);
    return !t.kind || !t.name ? null : t;
  } catch {
    return null;
  }
}
function Ov() {
  const [e, t] = z.useState([]), [n, r] = z.useState(null), [l, i] = z.useState(null), [o, a] = z.useState(!1), s = z.useRef(null), c = z.useCallback((f, v, x, _) => {
    const C = {
      id: zv(),
      kind: f,
      name: v,
      x: Math.max(0, x),
      y: Math.max(0, _),
      width: nc,
      height: Ev
    };
    t((L) => [...L, C]), r(C.id);
  }, []), m = z.useCallback(() => {
    n && (t((f) => f.filter((v) => v.id !== n)), r(null));
  }, [n]), y = z.useCallback(() => {
    t([]), r(null);
  }, []), h = (f, v, x) => {
    x.dataTransfer.setData(tc, JSON.stringify({ kind: f, name: v })), x.dataTransfer.effectAllowed = "copy";
  }, S = (f) => {
    f.preventDefault(), f.dataTransfer.dropEffect = "copy", a(!0);
  }, k = (f) => {
    f.currentTarget === f.target && a(!1);
  }, w = (f) => {
    f.preventDefault(), a(!1);
    const v = f.dataTransfer.getData(tc);
    if (!v || !s.current)
      return;
    const x = Lv(v);
    if (!x)
      return;
    const _ = s.current.getBoundingClientRect(), C = s.current.scrollLeft, L = s.current.scrollTop, B = f.clientX - _.left + C - nc / 2, O = f.clientY - _.top + L - 16;
    c(x.kind, x.name, B, O);
  }, E = (f, v) => {
    v.stopPropagation();
    const x = e.find((_) => _.id === f);
    x && (r(f), i({
      type: "move",
      id: f,
      startX: v.clientX,
      startY: v.clientY,
      origX: x.x,
      origY: x.y
    }), v.currentTarget.setPointerCapture(v.pointerId));
  }, p = (f, v) => {
    v.stopPropagation();
    const x = e.find((_) => _.id === f);
    x && (r(f), i({
      type: "resize",
      id: f,
      startX: v.clientX,
      startY: v.clientY,
      origW: x.width,
      origH: x.height
    }), v.currentTarget.setPointerCapture(v.pointerId));
  };
  z.useEffect(() => {
    if (!l)
      return;
    const f = (x) => {
      t(
        (_) => _.map((C) => {
          if (C.id !== l.id)
            return C;
          if (l.type === "move") {
            const O = x.clientX - l.startX, ie = x.clientY - l.startY;
            return {
              ...C,
              x: Math.max(0, l.origX + O),
              y: Math.max(0, l.origY + ie)
            };
          }
          const L = x.clientX - l.startX, B = x.clientY - l.startY;
          return {
            ...C,
            width: Math.max(_v, l.origW + L),
            height: Math.max(Pv, l.origH + B)
          };
        })
      );
    }, v = () => i(null);
    return window.addEventListener("pointermove", f), window.addEventListener("pointerup", v), () => {
      window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", v);
    };
  }, [l]), z.useEffect(() => {
    const f = (v) => {
      if ((v.key === "Delete" || v.key === "Backspace") && n) {
        const x = v.target.tagName;
        if (x === "INPUT" || x === "TEXTAREA")
          return;
        v.preventDefault(), m();
      }
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [n, m]);
  const d = Wf.map((f) => ({
    group: f,
    items: gl.filter((v) => v.group === f)
  }));
  return /* @__PURE__ */ g("div", { className: "ch-pb", children: [
    /* @__PURE__ */ g("aside", { className: "ch-pb-palette", children: [
      /* @__PURE__ */ g("div", { className: "ch-pb-palette-header", children: [
        /* @__PURE__ */ u("h2", { children: "Components" }),
        /* @__PURE__ */ u("span", { children: "Drag onto the page" })
      ] }),
      /* @__PURE__ */ u("div", { className: "ch-pb-palette-scroll", children: d.map(({ group: f, items: v }) => /* @__PURE__ */ g("div", { className: "ch-pb-palette-group", children: [
        /* @__PURE__ */ u("div", { className: "ch-cat-label", children: f }),
        v.map((x) => /* @__PURE__ */ g(
          "div",
          {
            className: "ch-pb-palette-item",
            draggable: !0,
            onDragStart: (_) => h(x.kind, x.name, _),
            children: [
              /* @__PURE__ */ g("div", { className: "ch-pb-palette-item__label", children: [
                /* @__PURE__ */ u(av, { size: 12, className: "ch-pb-palette-item__grip" }),
                x.name
              ] }),
              /* @__PURE__ */ u("div", { className: "ch-pb-palette-item__preview", children: /* @__PURE__ */ u(ua, { kind: x.kind }) })
            ]
          },
          x.name
        ))
      ] }, f)) })
    ] }),
    /* @__PURE__ */ g("main", { className: "ch-pb-canvas-area", children: [
      /* @__PURE__ */ g("header", { className: "ch-pb-toolbar", children: [
        /* @__PURE__ */ g("div", { children: [
          /* @__PURE__ */ u("h2", { className: "ch-pb-toolbar__title", children: "Page builder" }),
          /* @__PURE__ */ u("p", { className: "ch-pb-toolbar__hint", children: "Drop components, drag to reposition, resize from the corner handle" })
        ] }),
        /* @__PURE__ */ g("div", { className: "ch-pb-toolbar__actions", children: [
          n ? /* @__PURE__ */ g("button", { type: "button", className: "ch-pb-btn", onClick: m, children: [
            /* @__PURE__ */ u(sa, { size: 13 }),
            " Remove"
          ] }) : null,
          e.length > 0 ? /* @__PURE__ */ g("button", { type: "button", className: "ch-pb-btn ch-pb-btn--danger", onClick: y, children: [
            /* @__PURE__ */ u(wv, { size: 13 }),
            " Clear page"
          ] }) : null
        ] })
      ] }),
      /* @__PURE__ */ g(
        "div",
        {
          ref: s,
          className: `ch-pb-canvas${o ? " ch-pb-canvas--drag-over" : ""}`,
          onDragOver: S,
          onDragLeave: k,
          onDrop: w,
          onClick: () => r(null),
          children: [
            e.length === 0 ? /* @__PURE__ */ u("div", { className: "ch-pb-canvas-empty", children: "Drag components from the left panel onto this page" }) : null,
            e.map((f) => /* @__PURE__ */ g(
              "div",
              {
                className: `ch-pb-placed${n === f.id ? " ch-pb-placed--selected" : ""}`,
                style: {
                  left: f.x,
                  top: f.y,
                  width: f.width,
                  height: f.height
                },
                onClick: (v) => {
                  v.stopPropagation(), r(f.id);
                },
                children: [
                  /* @__PURE__ */ g(
                    "div",
                    {
                      className: "ch-pb-placed__bar",
                      onPointerDown: (v) => E(f.id, v),
                      children: [
                        /* @__PURE__ */ u("span", { children: f.name }),
                        /* @__PURE__ */ u(
                          "button",
                          {
                            type: "button",
                            className: "ch-pb-placed__remove",
                            "aria-label": `Remove ${f.name}`,
                            onPointerDown: (v) => v.stopPropagation(),
                            onClick: (v) => {
                              v.stopPropagation(), r(f.id), m();
                            },
                            children: /* @__PURE__ */ u(sa, { size: 11 })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ u("div", { className: "ch-pb-placed__body", children: /* @__PURE__ */ u(ua, { kind: f.kind }) }),
                  /* @__PURE__ */ u(
                    "div",
                    {
                      className: "ch-pb-placed__resize",
                      onPointerDown: (v) => p(f.id, v),
                      "aria-hidden": "true"
                    }
                  )
                ]
              },
              f.id
            ))
          ]
        }
      )
    ] })
  ] });
}
function Rv({ initialComponent: e }) {
  const [t, n] = z.useState("library");
  return /* @__PURE__ */ g("div", { className: "ch-app", children: [
    /* @__PURE__ */ g("nav", { className: "ch-app-tabs", "aria-label": "Component library views", children: [
      /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          className: `ch-app-tab${t === "library" ? " active" : ""}`,
          onClick: () => n("library"),
          children: [
            /* @__PURE__ */ u(nv, { size: 14 }),
            "Component Library"
          ]
        }
      ),
      /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          className: `ch-app-tab${t === "builder" ? " active" : ""}`,
          onClick: () => n("builder"),
          children: [
            /* @__PURE__ */ u(dv, { size: 14 }),
            "Page Builder"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ u("div", { className: "ch-root", children: t === "library" ? /* @__PURE__ */ u(Nv, { initialComponent: e }) : /* @__PURE__ */ u(Ov, {}) })
  ] });
}
function Mv(e, t) {
  let n = null;
  return {
    render(r) {
      var l;
      n || (n = yf(e)), n.render(
        /* @__PURE__ */ u(Z1, { theme: r == null ? void 0 : r.theme, children: /* @__PURE__ */ u(Rv, { initialComponent: (l = r == null ? void 0 : r.config) == null ? void 0 : l.initialComponent }) })
      );
    },
    unmount() {
      n == null || n.unmount(), n = null;
    }
  };
}
export {
  Mv as default
};
