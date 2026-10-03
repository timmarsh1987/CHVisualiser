(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.marketing-builder{--mb-primary: #00a651;--mb-primary-hover: #1db86a;--mb-primary-active: #008a44;--mb-primary-soft: #e6f7ed;--mb-primary-border: #8fd4a8;--mb-accent: #00a651;--mb-text: #000000;--mb-muted: #6b716e;--mb-background: #f4f7f5;--mb-surface: #ffffff;--mb-border: #e2e8e4;--mb-font: Arial, Helvetica, sans-serif;font-family:var(--mb-font);color:var(--mb-text);display:flex;flex-direction:column;min-height:calc(100dvh - 12px);height:100%}.marketing-builder .chd-root{flex:1 1 auto;min-height:0;height:auto}.marketing-builder-status{padding:16px;font-size:14px;color:#555}.marketing-builder-error{color:#b71c1c}.email-builder-editor{max-width:none;margin:0;border:none;padding:0;background:transparent}.builder-split{display:flex;gap:16px;align-items:stretch;min-height:72vh}.builder-split-panel{flex:1 1 50%;min-width:0;display:flex;flex-direction:column;border:1px solid #e0e0e0;border-radius:6px;background:#fff;overflow:hidden}.builder-split-heading{margin:0;padding:12px 16px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;border-bottom:1px solid #ececec;background:#fafafa}.builder-split-structure-body,.builder-split-preview-body{flex:1;min-height:0;display:flex;flex-direction:column}.builder-split-structure-body{overflow:auto;padding:16px}.builder-split-preview-body{overflow:auto;padding:16px;background:var(--mb-background)}.template-admin-structure{display:flex;flex-direction:column;gap:16px;min-height:100%}.template-admin-structure-grid{display:grid;grid-template-columns:minmax(180px,220px) minmax(0,1fr);gap:16px;align-items:start}.template-admin-structure-actions{margin-top:auto;padding-top:12px;border-top:1px solid #ececec}.template-admin-autosave-status{margin:0;font-size:12px;color:#666}.template-admin-autosave-status-saved{color:#2e7d32}.template-admin-autosave-status:not(.template-admin-autosave-status-saved):not(.template-admin-autosave-status-error){color:var(--mb-primary, #00755f);font-style:italic}.template-admin-autosave-status-error{color:#c62828}.saving-status-message{margin:8px 0 0;font-size:12px;line-height:1.45;color:var(--mb-primary, #00755f);font-style:italic;animation:saving-status-fade .35s ease}@keyframes saving-status-fade{0%{opacity:0}to{opacity:1}}.template-properties-form{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-properties-form h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-properties-form label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-properties-form input,.template-properties-form select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-properties-meta{margin:0;font-size:11px;color:#888}.template-dimensions-section{margin-top:4px;padding-top:12px;border-top:1px solid #ececec}.template-dimensions-heading{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:10px}.template-dimensions-heading h5{margin:0;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#666}.template-dimensions-summary{font-size:11px;font-weight:600;color:var(--mb-primary, #00755f);white-space:nowrap}.template-dimension-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.template-dimensions-hint{margin:0 0 4px;font-size:11px;line-height:1.4;color:#888}.live-preview-canvas-wrap,.live-preview-email-wrap{display:flex;flex-direction:column;gap:8px;height:100%}.live-preview-resize-frame{position:relative;flex:0 0 auto;max-width:100%;box-sizing:content-box}.live-preview-resize-content{width:100%;height:100%;overflow:hidden}.live-preview-resize-content .live-preview-canvas,.live-preview-resize-content .email-builder-preview-frame{width:100%!important;height:100%!important;min-height:0;margin:0;display:block}.live-preview-resize-handle{position:absolute;z-index:2;padding:0;border:none;background:var(--mb-primary);opacity:.35;touch-action:none;-webkit-user-select:none;user-select:none}.live-preview-resize-handle:hover,.live-preview-resize-handle:focus-visible{opacity:.85}.live-preview-resize-handle-right{top:0;right:-8px;width:8px;height:100%;cursor:ew-resize;border-radius:0 4px 4px 0}.live-preview-resize-handle-bottom{left:0;bottom:-8px;width:100%;height:8px;cursor:ns-resize;border-radius:0 0 4px 4px}.live-preview-dimensions-badge{margin:0;align-self:center;padding:4px 10px;border-radius:999px;background:var(--mb-primary-soft, #e4f7f4);color:var(--mb-primary, #00755f);font-size:11px;font-weight:600;letter-spacing:.02em}.template-admin-preview-canvas-fill{flex:1;min-height:100%;margin:0}.live-preview-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text,.live-preview-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text{font-size:16px;line-height:1.5}.live-preview-canvas .zone-text-empty:empty:before,.live-preview-canvas .zone-heading.zone-text-empty:empty:before{color:var(--mb-muted, #717171);font-style:italic}.template-admin-preview-empty{margin:0;padding:24px;text-align:center;color:#888;font-size:13px}.email-builder-structure{display:flex;flex-direction:column;gap:12px}.email-builder-override-structure{display:flex;flex-direction:column;gap:12px;min-height:100%}.email-builder-override-structure .raw-html-editor{flex:1;min-height:420px}.email-builder-zone-row{margin-bottom:12px}.zone-stacked{min-height:48px}.zone-stacked.zone-image{min-height:180px}.asset-zone-structure-content .zone-logo{padding:8px 0}.zone-logo-placeholder{display:inline-flex;align-items:center;justify-content:center;min-width:120px;min-height:48px;padding:10px 20px;border:1px solid var(--mb-border);border-radius:4px;background:var(--mb-surface);color:var(--mb-muted);font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.logo-picker{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.logo-picker-compact{gap:8px}.logo-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.logo-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.logo-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.logo-picker-preview{display:flex;align-items:center;justify-content:center;min-height:56px;padding:8px;border-radius:4px;background:#f7f7f7}.logo-picker-image{display:block;max-width:100%;max-height:48px;width:auto;height:auto;object-fit:contain}.image-picker{display:flex;flex-direction:column;gap:10px}.image-picker-compact .image-picker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.image-picker-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.image-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.image-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.image-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.image-picker-preview{display:flex;align-items:center;justify-content:center;min-height:72px;padding:8px;border-radius:4px;background:#f7f7f7;overflow:hidden}.image-picker-image{max-width:100%;max-height:72px;object-fit:contain}.image-picker-label{font-size:11px;color:#424242;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.image-picker-hint,.image-picker-loading,.image-picker-error{font-size:12px;color:#666}.image-picker-error{color:#c62828}.image-picker-hint,.image-picker-loading{margin:0 0 10px;line-height:1.45}.image-picker-selected-preview{margin-bottom:10px}.image-picker-selected-image{display:block;max-width:100%;max-height:160px;border-radius:6px;border:1px solid #ddd;object-fit:contain}.image-picker-footer{display:flex;justify-content:flex-start}.image-picker-url-toggle,.image-picker-url-apply{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:6px 10px;font-size:12px;cursor:pointer}.image-picker-url-form{display:flex;gap:8px}.image-picker-url-input{flex:1;padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection{display:flex;flex-direction:column;gap:12px;padding:12px;border:1px solid var(--mb-border, #e8e8e8);border-radius:8px;background:#fafafa}.template-zone-asset-collection-title{margin:0;font-size:14px}.template-zone-asset-collection-intro,.template-zone-asset-collection-hint,.template-zone-asset-collection-empty,.template-zone-asset-collection-error{margin:0;font-size:12px;color:#666;line-height:1.45}.template-zone-asset-collection-error{color:#c62828}.template-zone-asset-collection-field{display:flex;flex-direction:column;gap:6px;font-size:12px}.template-zone-asset-collection-field input{padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection-section{display:flex;flex-direction:column;gap:8px}.template-zone-asset-collection-section-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.template-zone-asset-collection-section-header h5{margin:0;font-size:13px}.template-zone-asset-collection-status{font-size:11px;color:#888}.template-zone-asset-collection-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px}.template-zone-asset-card{display:flex;flex-direction:column;gap:6px;padding:8px;border:1px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff}.template-zone-asset-card img{width:100%;height:72px;object-fit:cover;border-radius:4px;background:#f2f2f2}.template-zone-asset-card span{font-size:11px;color:#424242;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.template-zone-asset-add,.template-zone-asset-remove{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:5px 8px;font-size:11px;cursor:pointer}.template-zone-asset-add:disabled{opacity:.55;cursor:not-allowed}.zone-image-placeholder{padding:16px;border:1px dashed #ccc;border-radius:6px;color:#888;font-size:12px;text-align:center}.logo-picker-label{font-size:11px;font-weight:600;color:var(--mb-text, #18181b)}.zone-stacked-logo{padding:8px 0;text-align:center}.zone-stacked.zone-text{font-size:18px;line-height:1.4;padding:8px 0}.zone-stacked.zone-heading{line-height:1.25;padding:8px 0}.zone-heading[data-heading-level=H1]{font-size:2rem}.zone-heading[data-heading-level=H2]{font-size:1.75rem}.zone-heading[data-heading-level=H3]{font-size:1.5rem}.zone-heading[data-heading-level=H4]{font-size:1.25rem}.zone-heading[data-heading-level=H5]{font-size:1.125rem}.zone-heading[data-heading-level=H6]{font-size:1rem}.zone-text-empty:empty:before{content:attr(data-placeholder);color:#999}.zone-stacked.zone-cta{padding:12px 0}.template-setup-panel{display:flex;flex-direction:column;gap:16px}.template-setup-tools{border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa;padding:0}.template-setup-tools>summary{cursor:pointer;list-style:none;padding:12px 16px;font-size:14px;font-weight:600;color:var(--mb-text)}.template-setup-tools>summary::-webkit-details-marker{display:none}.template-setup-tools>summary:before{content:"▸";display:inline-block;margin-right:8px;color:#57606a}.template-setup-tools[open]>summary:before{content:"▾"}.template-setup-tools-body{display:flex;flex-direction:column;gap:12px;padding:0 16px 16px}.template-setup-tools .figma-import-panel,.template-setup-tools .template-duplicate-panel{margin-bottom:0}.figma-import-panel{margin-bottom:16px;padding:14px 16px;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa}.figma-import-panel h4{margin:0 0 8px;font-size:14px;font-weight:600}.figma-import-hint{margin:0 0 12px;font-size:12px;color:#57606a;line-height:1.45}.figma-import-hint code{font-size:11px}.figma-import-panel label{display:flex;flex-direction:column;gap:4px;margin-bottom:10px;font-size:12px;font-weight:500}.figma-import-panel input[type=text],.figma-import-panel input:not([type]){padding:6px 8px;border:1px solid #d0d7de;border-radius:4px;font-size:13px}.figma-import-button{margin-right:8px;margin-bottom:8px;padding:6px 12px;border:1px solid #d0d7de;border-radius:4px;background:#fff;font-size:13px;cursor:pointer}.figma-import-button:disabled{opacity:.55;cursor:not-allowed}.figma-import-button-primary{background:#1565c0;border-color:#1565c0;color:#fff}.figma-import-preview{margin-top:10px;padding-top:10px;border-top:1px solid #d8dee4}.figma-import-preview-meta{margin:0 0 8px;font-size:12px}.figma-import-zone-list{margin:0 0 10px;padding-left:18px;font-size:12px;line-height:1.5}.figma-import-warning{margin:0 0 8px;font-size:12px;color:#9a3412}.figma-import-checkbox{flex-direction:row!important;align-items:center;gap:8px!important;font-weight:400!important}.figma-import-checkbox input{margin:0}.figma-import-message{margin:8px 0 0;font-size:12px;color:#1a7f37}.figma-import-error{margin-top:8px}.figma-import-saving{margin:8px 0}.template-duplicate-panel{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-duplicate-panel h4{margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-duplicate-hint{margin:0 0 12px;font-size:12px;color:#666;line-height:1.45}.template-duplicate-panel label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-duplicate-panel input,.template-duplicate-panel select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-duplicate-button{margin-top:4px;background:var(--mb-primary, #00755f);color:#fff;border:none;padding:8px 14px;border-radius:4px;cursor:pointer;font-size:13px}.template-duplicate-button:disabled{opacity:.6;cursor:not-allowed}.template-duplicate-message{margin:10px 0 0;font-size:12px;color:#2e7d32;line-height:1.4}.template-duplicate-error{margin:8px 0 0;font-size:12px}.template-selector{margin-bottom:16px;padding:12px;border:1px solid #e8e8e8;border-radius:6px;background:#fcfcfc}.template-selector-label{display:block;margin:0;font-size:12px;color:#555}.template-selector-label select{display:block;width:100%;margin-top:6px;padding:8px 10px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px;background:#fff}.template-selector-hint,.template-selector-status{margin:8px 0 0;font-size:12px;color:#666;line-height:1.4}.template-selector-error{margin:8px 0 0;font-size:12px}.marketing-builder-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;padding:0 4px}.marketing-builder-toolbar-main{display:flex;align-items:center;gap:12px;min-width:0}.marketing-builder-editing-template{font-size:14px;font-weight:600;color:var(--mb-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.marketing-builder-tab-bar{flex-wrap:wrap}.marketing-builder-tabs{display:inline-flex;border:1px solid #d0d0d0;border-radius:6px;overflow:hidden;background:#fff}.marketing-builder-tab{border:none;background:transparent;color:#555;padding:8px 16px;cursor:pointer;font-size:14px;font-weight:500}.marketing-builder-tab+.marketing-builder-tab{border-left:1px solid #d0d0d0}.marketing-builder-tab:hover{background:#f5f5f5}.marketing-builder-tab-active{background:var(--mb-primary);color:#fff}.marketing-builder-tab-active:hover{background:var(--mb-primary-active)}.template-zone-edit-toggle{background:#fff;color:var(--mb-primary);border:1px solid var(--mb-primary);padding:8px 16px;border-radius:4px;cursor:pointer;font-size:14px;font-weight:500}.template-zone-edit-toggle:hover{background:var(--mb-primary-soft)}.template-zone-edit-toggle-active{background:var(--mb-primary);color:#fff}.template-zone-edit-toggle-active:hover{background:var(--mb-primary-active)}.marketing-builder-toolbar-meta{font-size:13px;color:#666}.template-empty-message{border:1px dashed #d0d0d0;border-radius:6px;background:#fafafa;text-align:center}.template-setup-message code{font-size:12px;background:#f5f5f5;padding:2px 4px;border-radius:3px}.email-builder-error{margin-top:8px;padding:8px 12px}.email-builder-actions{display:flex;gap:12px;margin-top:8px;justify-content:flex-end;flex-wrap:wrap}.email-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.email-builder-save:disabled{opacity:.6;cursor:not-allowed}.email-builder-preview{max-width:600px;margin:24px auto 0}.email-builder-preview-label{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;margin-bottom:8px}.email-builder-preview-frame{width:100%;height:500px;border:1px solid #e0e0e0}.email-builder-preview-frame-fill{width:100%;height:100%;min-height:520px;border:1px solid #e0e0e0;background:#fff}.raw-html-editor{width:100%;min-height:400px;font-family:monospace;font-size:13px;padding:12px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.social-builder-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);margin:0 auto;overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text,.social-builder-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text{font-size:16px;line-height:1.5}.asset-zone-structure-content .zone-text,.asset-zone-structure-content .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.asset-zone-structure-content .zone-text{font-size:16px;line-height:1.5}.social-builder-canvas-fill{width:100%;max-width:100%}.social-builder-structure{display:flex;flex-direction:column;gap:12px}.social-builder-error{margin-top:8px;padding:8px 12px}.asset-structure-panel{display:flex;flex-direction:column;gap:12px}.asset-structure-panel-hint{margin:0;font-size:12px;color:#777;line-height:1.5}.asset-zone-structure-warning{margin:0;padding:8px 10px;font-size:12px;line-height:1.4;color:#9a3412;background:#fff7ed;border:1px solid #fed7aa;border-radius:4px}.asset-zone-structure-key-hint{margin:0 0 8px;font-size:12px;color:#777}.asset-zone-structure-key-hint code{font-size:11px}.asset-zone-structure-list{display:flex;flex-direction:column;gap:8px}.asset-zone-structure-row{border:1px solid #e4e4e4;border-radius:6px;overflow:hidden;background:#fff}.asset-zone-structure-header{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;border:none;background:#fafafa;cursor:pointer;text-align:left}.asset-zone-structure-header:hover{background:#f3f3f3}.asset-zone-structure-title{font-weight:600;font-size:13px;color:#333}.asset-zone-structure-type{font-size:11px;color:#888}.asset-zone-structure-chevron{margin-left:auto;color:#888;font-size:12px}.asset-zone-structure-body{padding:12px;border-top:1px solid #ececec;display:flex;flex-direction:column;gap:12px}.asset-zone-structure-content-label{margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#888}.asset-zone-structure-content .asset-zone-layout-fields{margin-top:12px;padding-top:12px;border-top:1px solid #ececec}.asset-structure-panel .asset-zone-layout-grid,.template-admin-properties .asset-zone-layout-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.asset-zone-layout-fields{padding-top:4px;border-top:1px solid #ececec}.asset-zone-layout-fields label{display:block;margin-bottom:0;font-size:11px;color:#666}.asset-zone-layout-fields input,.asset-zone-layout-fields select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:12px}.asset-zone-layout-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.asset-zone-layout-grid-position{margin-top:8px;grid-template-columns:repeat(4,minmax(0,1fr))}.asset-layout-json-preview{border:1px dashed #d0d0d0;border-radius:6px;padding:8px 12px;background:#fafafa}.asset-layout-json-preview summary{cursor:pointer;font-size:12px;color:#666}.asset-layout-json-preview pre{margin:10px 0 0;padding:10px;background:#fff;border:1px solid #ececec;border-radius:4px;font-size:11px;line-height:1.4;overflow:auto;max-height:220px}.social-builder-actions{display:flex;gap:12px;margin-top:16px;justify-content:flex-end;flex-wrap:wrap}.social-builder-actions .saving-status-message,.email-builder-actions .saving-status-message{flex-basis:100%;text-align:right;margin-top:0}.social-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.social-builder-save:disabled{opacity:.6;cursor:not-allowed}.override-banner{background:#fff4e5;border:1px solid #ffb74d;color:#7a4a00;padding:8px 12px;border-radius:4px;font-size:13px;margin-bottom:12px}.template-admin-zone-list,.template-admin-properties{border:1px solid #e0e0e0;border-radius:6px;padding:12px}.template-admin-zone-list h4,.template-admin-properties h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.zone-list-hint,.zone-sort-hint{margin:-4px 0 10px;font-size:11px;color:#888}.zone-layout-fields{margin:12px 0 0;padding-top:12px;border-top:1px solid #ececec}.zone-layout-fields h5{display:none}.zone-layout-center .zone-image-preview,.zone-layout-center .zone-logo-placeholder{display:block;margin-left:auto;margin-right:auto}.zone-layout-right .zone-image-preview,.zone-layout-right .zone-logo-placeholder{display:block;margin-left:auto;margin-right:0}.zone-layout-center .zone-cta-button,.zone-layout-right .zone-cta-button{display:inline-block}.zone-cta-button{cursor:text}.zone-image-collection-hint{margin:-4px 0 10px;font-size:11px;color:#888;line-height:1.4}.zone-list-item{display:flex;align-items:flex-start;gap:8px;width:100%;text-align:left;background:none;border:1px solid transparent;border-radius:4px;padding:8px;margin-bottom:4px;cursor:pointer;-webkit-user-select:none;user-select:none}.zone-list-delete{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin-top:1px;padding:0;border:none;border-radius:4px;background:transparent;color:#999;cursor:pointer}.zone-list-delete:hover{background:#ffebee;color:#d32f2f}.zone-list-delete:focus-visible{outline:2px solid var(--mb-primary);outline-offset:1px}.zone-list-item:active{cursor:grabbing}.zone-list-item-content{display:flex;flex-direction:column;align-items:flex-start;min-width:0;flex:1}.zone-list-drag-handle{color:#aaa;font-size:12px;line-height:1;padding-top:2px;cursor:grab}.zone-list-item-dragging{opacity:.45}.zone-list-item-drag-over{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item:hover{background:#f5f5f5}.zone-list-item-active{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item-type{font-size:11px;color:#888}.zone-list-item-lock{font-size:10px;color:#d32f2f;text-transform:uppercase}.zone-list-add{width:100%;border:1px dashed #b0b0b0;background:none;padding:8px;border-radius:4px;cursor:pointer;color:#555;margin-bottom:4px}.zone-list-starter{border-color:var(--mb-primary);color:var(--mb-primary)}.template-admin-properties label{display:block;margin-bottom:10px;font-size:12px;color:#555}.zone-image-selected{display:flex;flex-direction:column;gap:8px;width:100%}.zone-image-preview{width:100%;max-height:280px;object-fit:cover;border-radius:4px;border:1px solid #e0e0e0}.social-builder-canvas .zone-image-preview{width:100%;height:100%;max-height:none;object-fit:contain;border-radius:0;border:0}.zone-image-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.zone-image-clear{border:1px solid #d32f2f;background:#fff;color:#d32f2f;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker{position:relative}.asset-picker-compact .asset-picker-trigger{padding:6px 10px;font-size:12px}.asset-picker-mode-tabs{display:flex;gap:4px;margin-bottom:10px}.asset-picker-mode-tab{flex:1;border:1px solid #d0d0d0;background:#fafafa;color:#555;padding:6px 8px;border-radius:4px;cursor:pointer;font-size:12px}.asset-picker-mode-tab-active{border-color:var(--mb-primary);background:var(--mb-primary-soft);color:var(--mb-primary-active)}.asset-picker-url-form label{display:block;margin-bottom:8px;font-size:12px;color:#555}.asset-picker-url-apply{width:100%;border:none;background:var(--mb-primary);color:#fff;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker-url-apply:disabled{opacity:.6;cursor:not-allowed}.asset-picker-loading,.asset-picker-error{font-size:12px;margin-bottom:8px}.asset-picker-error{color:#b71c1c}.template-admin-properties input,.template-admin-properties select,.template-admin-properties textarea{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.checkbox-label{display:flex!important;align-items:center;gap:6px}.checkbox-label input{width:auto!important;margin:0!important}.position-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.zone-remove{background:none;border:1px solid #d32f2f;color:#d32f2f;padding:6px 12px;border-radius:4px;cursor:pointer;margin-top:8px}.no-zone-selected{color:#888;font-size:13px}.template-admin-preview-canvas{border:1px solid #eee;background:#fafafa;margin-bottom:12px;overflow:hidden}.template-admin-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;width:100%;max-width:280px}.template-admin-save:disabled{opacity:.6;cursor:not-allowed}.template-admin-save-error{margin:8px 0 0;font-size:13px}.zone{box-sizing:border-box}.zone-locked{outline:1px dashed transparent}.zone-text{outline:1px dashed transparent;cursor:text}.zone-text:hover{outline-color:#c9c9c9}.zone-text:focus{outline:1px solid var(--mb-primary);outline-offset:2px}.zone-image{background-color:#f5f5f5;display:flex;align-items:center;justify-content:center;overflow:hidden}.zone-cta button{cursor:pointer;font-size:14px}.zone-html-editor{width:100%;min-height:80px;font-family:monospace;font-size:12px;padding:8px;border:1px solid #d0d0d0;border-radius:4px}.zone-html-preview{margin-top:8px;border:1px dashed #d0d0d0;padding:8px}.zone-html-locked{pointer-events:none}.asset-picker-trigger{border:1px dashed #b0b0b0;background:transparent;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px;color:#555}.asset-picker-panel{position:absolute;z-index:10;background:#fff;border:1px solid #d0d0d0;border-radius:6px;box-shadow:0 4px 16px #0000001f;padding:12px;width:320px}.asset-picker-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;display:flex;align-items:center;justify-content:center;padding:24px}.asset-picker-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;border:none;padding:0;background:rgba(0,0,0,.4);cursor:pointer}.asset-picker-panel-overlay{position:relative;z-index:1;width:min(720px,100%);max-height:min(80vh,720px);overflow:auto}.asset-picker-panel-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.asset-picker-close{border:1px solid #d0d0d0;background:#fff;border-radius:4px;padding:4px 10px;cursor:pointer;font-size:12px}.template-allowed-assets .asset-picker{margin-bottom:12px}.asset-picker-search{width:100%;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;margin-bottom:8px}.asset-picker-hint{font-size:12px;color:#888;margin-bottom:8px}.asset-picker-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-height:240px;overflow-y:auto}.asset-picker-panel-overlay .asset-picker-grid{grid-template-columns:repeat(4,1fr);max-height:420px}.asset-picker-thumb{border:none;background:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;font-size:11px}.asset-picker-thumb img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px}.asset-picker-empty{font-size:12px;color:#888;padding:8px}.eject-button{background:transparent;border:1px solid #d32f2f;color:#d32f2f;padding:10px 16px;border-radius:4px;cursor:pointer;font-size:13px}.eject-modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;z-index:100}.eject-modal{background:#fff;border-radius:8px;padding:24px;width:420px;max-width:90vw}.eject-modal h3{margin:0 0 8px;font-size:16px;color:#b71c1c}.eject-modal p{font-size:13px;color:#555;line-height:1.5}.eject-modal textarea{width:100%;min-height:70px;margin:12px 0;padding:8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.eject-modal-actions{display:flex;justify-content:flex-end;gap:8px}.eject-confirm{background:#d32f2f;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer}.eject-confirm:disabled{opacity:.5;cursor:not-allowed}.designer-create-banner{margin:12px 0 16px;padding:12px 14px;border:.5px solid #d3d1c7;border-radius:8px;background:#f8f7f4;display:flex;flex-direction:column;gap:10px;align-items:flex-start}.designer-create-banner p{margin:0;font-size:13px;color:#2c2c2a}.designer-asset-builder{display:flex;flex-direction:column;gap:8px;flex:1 1 auto;min-height:0}.designer-asset-builder .chd-root{flex:1 1 auto;min-height:0;height:auto}.designer-asset-builder-actions{display:flex;align-items:center;gap:10px}.chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:100%;min-height:calc(100dvh - 12px);box-sizing:border-box;position:relative;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:0;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;background:#000000;border-radius:4px;padding:5px 8px;line-height:0}.chd-toolbar-logo{display:block;height:16px;width:auto}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-boot-status,.chd-boot-error{margin:auto;padding:24px;max-width:480px;font-size:13px;line-height:1.45;color:var(--chd-muted)}.chd-boot-error{color:#a32d2d}.chd-save-status{position:absolute;right:12px;bottom:12px;z-index:30;max-width:min(360px,calc(100% - 24px));padding:6px 10px;border-radius:999px;font-size:11px;line-height:1.3;background:rgba(255,255,255,.94);border:.5px solid var(--chd-border);color:var(--chd-muted);box-shadow:0 4px 16px #00000014;pointer-events:none}.chd-save-status--pending{color:#8a6d1d}.chd-save-status--saving,.chd-save-status--loading{color:#355f8a}.chd-save-status--saved{color:#1d6b4f}.chd-save-status--error{color:#a32d2d;pointer-events:auto}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-btn--accent{background:var(--chd-accent);border-color:var(--chd-accent);color:#fff}.chd-btn--accent:hover:not(:disabled){background:#1db86a;border-color:#1db86a;color:#fff}.chd-generate{position:relative;display:flex;align-items:center;gap:8px}.chd-generate-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:40;min-width:180px;padding:4px;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 24px #0000001f}.chd-generate-option{display:flex;flex-direction:column;align-items:flex-start;gap:1px;width:100%;border:none;background:transparent;text-align:left;padding:8px 10px;border-radius:6px;cursor:pointer;color:var(--chd-text);font:inherit}.chd-generate-option span{font-size:11px;color:var(--chd-muted)}.chd-generate-option:hover:not(:disabled){background:#e8f6ee}.chd-batch{position:relative}.chd-batch-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:40;width:280px;display:flex;flex-direction:column;align-items:stretch;gap:8px;padding:10px;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 24px #0000001f}.chd-batch-stage{position:fixed;left:-20000px;top:0;pointer-events:none}.chd-generate-error{font-size:11px;color:#a32d2d;white-space:nowrap}.chd-artboard--capturing{overflow:hidden}.chd-artboard--capturing .chd-selection-box,.chd-artboard--capturing .chd-selection-outline,.chd-artboard--capturing .chd-handle,.chd-artboard--capturing .chd-layer-lock,.chd-artboard--capturing .chd-artboard-page{display:none!important}.chd-toolbar-field{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--chd-muted)}.chd-toolbar-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;max-width:220px}.chd-file-input{display:none}.chd-toolbar-size{font-size:11px;color:var(--chd-muted);white-space:nowrap}.chd-field.chd-pin-field{gap:14px}.chd-pin-field .chd-pin-grid{margin-top:0}.chd-pin-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;margin-top:4px}.chd-field-hint{margin:6px 0 0;font-size:11px;color:var(--chd-muted);line-height:1.35}.chd-main{display:grid;grid-template-columns:var(--chd-layers-width, 220px) minmax(0,1fr) var(--chd-properties-width, 260px);flex:1;min-height:0}.chd-panel-slot{position:relative;display:flex;flex-direction:column;min-width:0;min-height:0}.chd-panel-slot>.chd-panel{flex:1;min-height:0}.chd-panel-resizer{position:absolute;top:0;bottom:0;width:6px;z-index:4;cursor:col-resize;touch-action:none}.chd-panel-resizer--end{right:-3px}.chd-panel-resizer--start{left:-3px}.chd-panel-resizer:hover,.chd-panel-resizer--active{background:var(--chd-accent)}.chd-stage{display:flex;flex-direction:column;min-width:0;min-height:0}.chd-stage .chd-viewport{flex:1}.chd-panel-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:#fff;color:var(--chd-text);border-radius:6px;width:22px;height:22px;padding:0;line-height:1;cursor:pointer;flex:none}.chd-panel-toggle:hover{background:#f4f7f5}.chd-panel--collapsed .chd-panel-header{flex-direction:column;justify-content:flex-start;height:100%;padding:8px 4px;border-bottom:none}.chd-panel-rail-label{writing-mode:vertical-rl;transform:rotate(180deg);font-size:11px;letter-spacing:.04em}.chd-page-strip{display:flex;gap:8px;overflow-x:auto;flex:none;padding:8px 10px;background:#fff;border-top:.5px solid var(--chd-border)}.chd-page-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;flex-direction:column;align-items:center;gap:4px;border:.5px solid transparent;background:transparent;border-radius:6px;padding:4px;cursor:pointer;color:var(--chd-muted);font:inherit;flex:none}.chd-page-thumb--active{border-color:var(--chd-accent);color:var(--chd-text);background:#e8f6ee}.chd-page-thumb-frame{position:relative;overflow:hidden;background:#fff;box-shadow:0 0 0 1px #0000001f}.chd-page-thumb-art{position:absolute;left:0;top:0;transform-origin:top left;pointer-events:none}.chd-page-thumb-name{max-width:104px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4;flex:none}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layers-panel--admin .chd-layer-list-item{grid-template-columns:auto 1fr auto auto auto}.chd-layer-list-item--dragging{opacity:.45}.chd-layer-list-item--drag-over{outline:1px solid var(--chd-accent);background:#e8f6ee}.chd-layer-drag-handle{color:var(--chd-muted);font-size:11px;line-height:1;padding:0 4px;cursor:grab;-webkit-user-select:none;user-select:none}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{display:flex;flex-direction:column;overflow:auto;flex:1}.chd-prop-section{display:flex;flex-direction:column;gap:8px;padding:10px 12px;border-bottom:.5px solid var(--chd-border)}.chd-prop-section-title{margin:0;font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--chd-muted)}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{display:flex;flex-direction:row;align-items:center;gap:10px;color:var(--chd-text)}.chd-field-checkbox input,.chd-field .chd-field-checkbox input[type=checkbox]{width:16px;height:16px;margin:0;padding:0;border:none;flex:none;accent-color:var(--chd-accent)}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:#cfcbc3;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:visible}.chd-artboard-page{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;box-shadow:0 0 0 1px #00000014}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-lock{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;left:3px;top:3px;z-index:6;display:flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:4px;background:rgba(255,255,255,.92);border:.5px solid var(--chd-border);color:var(--chd-text);pointer-events:auto;cursor:pointer;padding:0;box-shadow:0 1px 2px #0000001f}.chd-layer-lock svg{display:block}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-text--rtl{text-align:right}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main,.chd-main--layers-collapsed,.chd-main--properties-collapsed,.chd-main--layers-collapsed.chd-main--properties-collapsed{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-main--layers-collapsed,.chd-main--layers-collapsed.chd-main--properties-collapsed{grid-template-rows:36px minmax(280px,1fr) 200px}.chd-main--properties-collapsed{grid-template-rows:160px minmax(280px,1fr) 36px}.chd-main--layers-collapsed.chd-main--properties-collapsed{grid-template-rows:36px minmax(280px,1fr) 36px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}.chd-panel-resizer{display:none}}.chd-image-source{display:flex;flex-direction:column;gap:8px;font-size:11px;color:var(--chd-muted)}.chd-root .asset-picker{position:relative}.chd-root .asset-picker-trigger{width:100%;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:6px 8px;font-size:12px;cursor:pointer}.chd-root .asset-picker-trigger:hover:not(:disabled){background:#fff}.chd-root .asset-picker-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;display:flex;align-items:center;justify-content:center;padding:24px}.chd-root .asset-picker-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;border:none;padding:0;background:rgba(0,0,0,.4);cursor:pointer}.chd-root .asset-picker-panel-overlay{position:relative;z-index:1;width:min(720px,100%);max-height:min(80vh,720px);overflow:auto;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 28px #00000029;padding:12px}.chd-root .asset-picker-panel-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.chd-root .asset-picker-close,.chd-root .asset-picker-mode-tab,.chd-root .asset-picker-url-apply{border:.5px solid var(--chd-border);background:#fff;border-radius:6px;padding:6px 10px;cursor:pointer;font-size:12px;color:var(--chd-text)}.chd-root .asset-picker-mode-tabs{display:flex;gap:4px;margin-bottom:10px}.chd-root .asset-picker-mode-tab{flex:1}.chd-root .asset-picker-mode-tab-active,.chd-root .asset-picker-url-apply{background:var(--chd-accent);border-color:var(--chd-accent);color:#fff}.chd-root .asset-picker-url-apply:disabled{opacity:.6;cursor:not-allowed}.chd-root .asset-picker-url-form label{display:block;margin-bottom:8px;font-size:12px;color:var(--chd-muted)}.chd-root .asset-picker-search{width:100%;padding:6px 8px;border:.5px solid var(--chd-border);border-radius:6px;margin-bottom:8px;font:inherit;color:var(--chd-text);background:#fff}.chd-root .asset-picker-hint,.chd-root .asset-picker-loading,.chd-root .asset-picker-empty{font-size:12px;color:var(--chd-muted);margin-bottom:8px}.chd-root .asset-picker-error{font-size:12px;color:#a32d2d;margin-bottom:8px}.chd-root .asset-picker-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-height:420px;overflow-y:auto}.chd-root .asset-picker-thumb{border:none;background:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;color:var(--chd-text)}.chd-root .asset-picker-thumb img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px;background:#f4f7f5}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function i0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function s0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ch = { exports: {} }, pl = {}, Th = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us = Symbol.for("react.element"), a0 = Symbol.for("react.portal"), l0 = Symbol.for("react.fragment"), c0 = Symbol.for("react.strict_mode"), u0 = Symbol.for("react.profiler"), d0 = Symbol.for("react.provider"), f0 = Symbol.for("react.context"), p0 = Symbol.for("react.forward_ref"), m0 = Symbol.for("react.suspense"), A0 = Symbol.for("react.memo"), h0 = Symbol.for("react.lazy"), Xp = Symbol.iterator;
function g0(e) {
  return e === null || typeof e != "object" ? null : (e = Xp && e[Xp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Eh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, kh = Object.assign, bh = {};
function Go(e, t, n) {
  this.props = e, this.context = t, this.refs = bh, this.updater = n || Eh;
}
Go.prototype.isReactComponent = {};
Go.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Go.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Sh() {
}
Sh.prototype = Go.prototype;
function Ud(e, t, n) {
  this.props = e, this.context = t, this.refs = bh, this.updater = n || Eh;
}
var jd = Ud.prototype = new Sh();
jd.constructor = Ud;
kh(jd, Go.prototype);
jd.isPureReactComponent = !0;
var Wp = Array.isArray, Ph = Object.prototype.hasOwnProperty, Gd = { current: null }, Nh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dh(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Ph.call(t, r) && !Nh.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1)
    o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++)
      l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
      o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: us, type: e, key: i, ref: s, props: o, _owner: Gd.current };
}
function y0(e, t) {
  return { $$typeof: us, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Kd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === us;
}
function v0(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Vp = /\/+/g;
function Nc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? v0("" + e.key) : t.toString(36);
}
function ua(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null)
    s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case us:
          case a0:
            s = !0;
        }
    }
  if (s)
    return s = e, o = o(s), e = r === "" ? "." + Nc(s, 0) : r, Wp(o) ? (n = "", e != null && (n = e.replace(Vp, "$&/") + "/"), ua(o, t, n, "", function(c) {
      return c;
    })) : o != null && (Kd(o) && (o = y0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Vp, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Wp(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Nc(i, a);
      s += ua(i, t, n, l, o);
    }
  else if (l = g0(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, l = r + Nc(i, a++), s += ua(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Os(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return ua(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function w0(e) {
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
var At = { current: null }, da = { transition: null }, C0 = { ReactCurrentDispatcher: At, ReactCurrentBatchConfig: da, ReactCurrentOwner: Gd };
function xh() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: Os, forEach: function(e, t, n) {
  Os(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Os(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Os(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Kd(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = Go;
re.Fragment = l0;
re.Profiler = u0;
re.PureComponent = Ud;
re.StrictMode = c0;
re.Suspense = m0;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C0;
re.act = xh;
re.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = kh({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Gd.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (l in t)
      Ph.call(t, l) && !Nh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++)
      a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: us, type: e.type, key: o, ref: i, props: r, _owner: s };
};
re.createContext = function(e) {
  return e = { $$typeof: f0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: d0, _context: e }, e.Consumer = e;
};
re.createElement = Dh;
re.createFactory = function(e) {
  var t = Dh.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: p0, render: e };
};
re.isValidElement = Kd;
re.lazy = function(e) {
  return { $$typeof: h0, _payload: { _status: -1, _result: e }, _init: w0 };
};
re.memo = function(e, t) {
  return { $$typeof: A0, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = da.transition;
  da.transition = {};
  try {
    e();
  } finally {
    da.transition = t;
  }
};
re.unstable_act = xh;
re.useCallback = function(e, t) {
  return At.current.useCallback(e, t);
};
re.useContext = function(e) {
  return At.current.useContext(e);
};
re.useDebugValue = function() {
};
re.useDeferredValue = function(e) {
  return At.current.useDeferredValue(e);
};
re.useEffect = function(e, t) {
  return At.current.useEffect(e, t);
};
re.useId = function() {
  return At.current.useId();
};
re.useImperativeHandle = function(e, t, n) {
  return At.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function(e, t) {
  return At.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function(e, t) {
  return At.current.useLayoutEffect(e, t);
};
re.useMemo = function(e, t) {
  return At.current.useMemo(e, t);
};
re.useReducer = function(e, t, n) {
  return At.current.useReducer(e, t, n);
};
re.useRef = function(e) {
  return At.current.useRef(e);
};
re.useState = function(e) {
  return At.current.useState(e);
};
re.useSyncExternalStore = function(e, t, n) {
  return At.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function() {
  return At.current.useTransition();
};
re.version = "18.3.1";
Th.exports = re;
var C = Th.exports;
const T0 = /* @__PURE__ */ s0(C), Cu = /* @__PURE__ */ i0({
  __proto__: null,
  default: T0
}, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var E0 = C, k0 = Symbol.for("react.element"), b0 = Symbol.for("react.fragment"), S0 = Object.prototype.hasOwnProperty, P0 = E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bh(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    S0.call(t, r) && !N0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: k0, type: e, key: i, ref: s, props: o, _owner: P0.current };
}
pl.Fragment = b0;
pl.jsx = Bh;
pl.jsxs = Bh;
Ch.exports = pl;
var Yd = Ch.exports;
const Ze = Yd.Fragment, d = Yd.jsx, E = Yd.jsxs;
var Oh = { exports: {} }, Ot = {}, Ih = { exports: {} }, zh = {};
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
  function t(G, V) {
    var b = G.length;
    G.push(V);
    e:
      for (; 0 < b; ) {
        var I = b - 1 >>> 1, W = G[I];
        if (0 < o(W, V))
          G[I] = V, G[b] = W, b = I;
        else
          break e;
      }
  }
  function n(G) {
    return G.length === 0 ? null : G[0];
  }
  function r(G) {
    if (G.length === 0)
      return null;
    var V = G[0], b = G.pop();
    if (b !== V) {
      G[0] = b;
      e:
        for (var I = 0, W = G.length, pe = W >>> 1; I < pe; ) {
          var z = 2 * (I + 1) - 1, J = G[z], we = z + 1, M = G[we];
          if (0 > o(J, b))
            we < W && 0 > o(M, J) ? (G[I] = M, G[we] = b, I = we) : (G[I] = J, G[z] = b, I = z);
          else if (we < W && 0 > o(M, b))
            G[I] = M, G[we] = b, I = we;
          else
            break e;
        }
    }
    return V;
  }
  function o(G, V) {
    var b = G.sortIndex - V.sortIndex;
    return b !== 0 ? b : G.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var l = [], c = [], u = 1, f = null, m = 3, y = !1, g = !1, v = !1, N = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(G) {
    for (var V = n(c); V !== null; ) {
      if (V.callback === null)
        r(c);
      else if (V.startTime <= G)
        r(c), V.sortIndex = V.expirationTime, t(l, V);
      else
        break;
      V = n(c);
    }
  }
  function P(G) {
    if (v = !1, h(G), !g)
      if (n(l) !== null)
        g = !0, _(O);
      else {
        var V = n(c);
        V !== null && oe(P, V.startTime - G);
      }
  }
  function O(G, V) {
    g = !1, v && (v = !1, p(S), S = -1), y = !0;
    var b = m;
    try {
      for (h(V), f = n(l); f !== null && (!(f.expirationTime > V) || G && !L()); ) {
        var I = f.callback;
        if (typeof I == "function") {
          f.callback = null, m = f.priorityLevel;
          var W = I(f.expirationTime <= V);
          V = e.unstable_now(), typeof W == "function" ? f.callback = W : f === n(l) && r(l), h(V);
        } else
          r(l);
        f = n(l);
      }
      if (f !== null)
        var pe = !0;
      else {
        var z = n(c);
        z !== null && oe(P, z.startTime - V), pe = !1;
      }
      return pe;
    } finally {
      f = null, m = b, y = !1;
    }
  }
  var k = !1, T = null, S = -1, H = 5, D = -1;
  function L() {
    return !(e.unstable_now() - D < H);
  }
  function x() {
    if (T !== null) {
      var G = e.unstable_now();
      D = G;
      var V = !0;
      try {
        V = T(!0, G);
      } finally {
        V ? K() : (k = !1, T = null);
      }
    } else
      k = !1;
  }
  var K;
  if (typeof A == "function")
    K = function() {
      A(x);
    };
  else if (typeof MessageChannel < "u") {
    var ve = new MessageChannel(), se = ve.port2;
    ve.port1.onmessage = x, K = function() {
      se.postMessage(null);
    };
  } else
    K = function() {
      N(x, 0);
    };
  function _(G) {
    T = G, k || (k = !0, K());
  }
  function oe(G, V) {
    S = N(function() {
      G(e.unstable_now());
    }, V);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(G) {
    G.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, _(O));
  }, e.unstable_forceFrameRate = function(G) {
    0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < G ? Math.floor(1e3 / G) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(G) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var V = 3;
        break;
      default:
        V = m;
    }
    var b = m;
    m = V;
    try {
      return G();
    } finally {
      m = b;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(G, V) {
    switch (G) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        G = 3;
    }
    var b = m;
    m = G;
    try {
      return V();
    } finally {
      m = b;
    }
  }, e.unstable_scheduleCallback = function(G, V, b) {
    var I = e.unstable_now();
    switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? I + b : I) : b = I, G) {
      case 1:
        var W = -1;
        break;
      case 2:
        W = 250;
        break;
      case 5:
        W = 1073741823;
        break;
      case 4:
        W = 1e4;
        break;
      default:
        W = 5e3;
    }
    return W = b + W, G = { id: u++, callback: V, priorityLevel: G, startTime: b, expirationTime: W, sortIndex: -1 }, b > I ? (G.sortIndex = b, t(c, G), n(l) === null && G === n(c) && (v ? (p(S), S = -1) : v = !0, oe(P, b - I))) : (G.sortIndex = W, t(l, G), g || y || (g = !0, _(O))), G;
  }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(G) {
    var V = m;
    return function() {
      var b = m;
      m = V;
      try {
        return G.apply(this, arguments);
      } finally {
        m = b;
      }
    };
  };
})(zh);
Ih.exports = zh;
var D0 = Ih.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x0 = C, Bt = D0;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Lh = /* @__PURE__ */ new Set(), Ii = {};
function Ur(e, t) {
  Do(e, t), Do(e + "Capture", t);
}
function Do(e, t) {
  for (Ii[e] = t, e = 0; e < t.length; e++)
    Lh.add(t[e]);
}
var In = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Tu = Object.prototype.hasOwnProperty, B0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Jp = {}, qp = {};
function O0(e) {
  return Tu.call(qp, e) ? !0 : Tu.call(Jp, e) ? !1 : B0.test(e) ? qp[e] = !0 : (Jp[e] = !0, !1);
}
function I0(e, t, n, r) {
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
function z0(e, t, n, r) {
  if (t === null || typeof t > "u" || I0(e, t, n, r))
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
function ht(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var nt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  nt[e] = new ht(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  nt[t] = new ht(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  nt[e] = new ht(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  nt[e] = new ht(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  nt[e] = new ht(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  nt[e] = new ht(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  nt[e] = new ht(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  nt[e] = new ht(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  nt[e] = new ht(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zd = /[\-:]([a-z])/g;
function Xd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Zd,
    Xd
  );
  nt[t] = new ht(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Zd, Xd);
  nt[t] = new ht(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Zd, Xd);
  nt[t] = new ht(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  nt[e] = new ht(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
nt.xlinkHref = new ht("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  nt[e] = new ht(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wd(e, t, n, r) {
  var o = nt.hasOwnProperty(t) ? nt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (z0(t, n, o, r) && (n = null), r || o === null ? O0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Fn = x0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Is = Symbol.for("react.element"), so = Symbol.for("react.portal"), ao = Symbol.for("react.fragment"), Vd = Symbol.for("react.strict_mode"), Eu = Symbol.for("react.profiler"), Mh = Symbol.for("react.provider"), Rh = Symbol.for("react.context"), Jd = Symbol.for("react.forward_ref"), ku = Symbol.for("react.suspense"), bu = Symbol.for("react.suspense_list"), qd = Symbol.for("react.memo"), Zn = Symbol.for("react.lazy"), Hh = Symbol.for("react.offscreen"), _p = Symbol.iterator;
function ti(e) {
  return e === null || typeof e != "object" ? null : (e = _p && e[_p] || e["@@iterator"], typeof e == "function" ? e : null);
}
var De = Object.assign, Dc;
function mi(e) {
  if (Dc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Dc = t && t[1] || "";
    }
  return `
` + Dc + e;
}
var xc = !1;
function Bc(e, t) {
  if (!e || xc)
    return "";
  xc = !0;
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
      for (var o = c.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if (s--, a--, 0 > a || o[s] !== i[a]) {
                var l = `
` + o[s].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    xc = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? mi(e) : "";
}
function L0(e) {
  switch (e.tag) {
    case 5:
      return mi(e.type);
    case 16:
      return mi("Lazy");
    case 13:
      return mi("Suspense");
    case 19:
      return mi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Bc(e.type, !1), e;
    case 11:
      return e = Bc(e.type.render, !1), e;
    case 1:
      return e = Bc(e.type, !0), e;
    default:
      return "";
  }
}
function Su(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case ao:
      return "Fragment";
    case so:
      return "Portal";
    case Eu:
      return "Profiler";
    case Vd:
      return "StrictMode";
    case ku:
      return "Suspense";
    case bu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Rh:
        return (e.displayName || "Context") + ".Consumer";
      case Mh:
        return (e._context.displayName || "Context") + ".Provider";
      case Jd:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case qd:
        return t = e.displayName || null, t !== null ? t : Su(e.type) || "Memo";
      case Zn:
        t = e._payload, e = e._init;
        try {
          return Su(e(t));
        } catch {
        }
    }
  return null;
}
function M0(e) {
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
      return Su(t);
    case 8:
      return t === Vd ? "StrictMode" : "Mode";
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
function fr(e) {
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
function Fh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function R0(e) {
  var t = Fh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function zs(e) {
  e._valueTracker || (e._valueTracker = R0(e));
}
function Qh(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Fh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Da(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pu(e, t) {
  var n = t.checked;
  return De({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function $p(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = fr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Uh(e, t) {
  t = t.checked, t != null && Wd(e, "checked", t, !1);
}
function Nu(e, t) {
  Uh(e, t);
  var n = fr(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Du(e, t.type, n) : t.hasOwnProperty("defaultValue") && Du(e, t.type, fr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function em(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Du(e, t, n) {
  (t !== "number" || Da(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ai = Array.isArray;
function Co(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + fr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function xu(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return De({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function tm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(F(92));
      if (Ai(n)) {
        if (1 < n.length)
          throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: fr(n) };
}
function jh(e, t) {
  var n = fr(t.value), r = fr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function nm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Gh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ls, Kh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Ls = Ls || document.createElement("div"), Ls.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ls.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function zi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ci = {
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
}, H0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ci).forEach(function(e) {
  H0.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ci[t] = Ci[e];
  });
});
function Yh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ci.hasOwnProperty(e) && Ci[e] ? ("" + t).trim() : t + "px";
}
function Zh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Yh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var F0 = De({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ou(e, t) {
  if (t) {
    if (F0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(F(62));
  }
}
function Iu(e, t) {
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
var zu = null;
function _d(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Lu = null, To = null, Eo = null;
function rm(e) {
  if (e = ps(e)) {
    if (typeof Lu != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = yl(t), Lu(e.stateNode, e.type, t));
  }
}
function Xh(e) {
  To ? Eo ? Eo.push(e) : Eo = [e] : To = e;
}
function Wh() {
  if (To) {
    var e = To, t = Eo;
    if (Eo = To = null, rm(e), t)
      for (e = 0; e < t.length; e++)
        rm(t[e]);
  }
}
function Vh(e, t) {
  return e(t);
}
function Jh() {
}
var Oc = !1;
function qh(e, t, n) {
  if (Oc)
    return e(t, n);
  Oc = !0;
  try {
    return Vh(e, t, n);
  } finally {
    Oc = !1, (To !== null || Eo !== null) && (Jh(), Wh());
  }
}
function Li(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = yl(n);
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
    throw Error(F(231, t, typeof n));
  return n;
}
var Mu = !1;
if (In)
  try {
    var ni = {};
    Object.defineProperty(ni, "passive", { get: function() {
      Mu = !0;
    } }), window.addEventListener("test", ni, ni), window.removeEventListener("test", ni, ni);
  } catch {
    Mu = !1;
  }
function Q0(e, t, n, r, o, i, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Ti = !1, xa = null, Ba = !1, Ru = null, U0 = { onError: function(e) {
  Ti = !0, xa = e;
} };
function j0(e, t, n, r, o, i, s, a, l) {
  Ti = !1, xa = null, Q0.apply(U0, arguments);
}
function G0(e, t, n, r, o, i, s, a, l) {
  if (j0.apply(this, arguments), Ti) {
    if (Ti) {
      var c = xa;
      Ti = !1, xa = null;
    } else
      throw Error(F(198));
    Ba || (Ba = !0, Ru = c);
  }
}
function jr(e) {
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
function _h(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function om(e) {
  if (jr(e) !== e)
    throw Error(F(188));
}
function K0(e) {
  var t = e.alternate;
  if (!t) {
    if (t = jr(e), t === null)
      throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n)
          return om(o), e;
        if (i === r)
          return om(o), t;
        i = i.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (a === r) {
          s = !0, r = o, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!s)
          throw Error(F(189));
      }
    }
    if (n.alternate !== r)
      throw Error(F(190));
  }
  if (n.tag !== 3)
    throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function $h(e) {
  return e = K0(e), e !== null ? eg(e) : null;
}
function eg(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = eg(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var tg = Bt.unstable_scheduleCallback, im = Bt.unstable_cancelCallback, Y0 = Bt.unstable_shouldYield, Z0 = Bt.unstable_requestPaint, ze = Bt.unstable_now, X0 = Bt.unstable_getCurrentPriorityLevel, $d = Bt.unstable_ImmediatePriority, ng = Bt.unstable_UserBlockingPriority, Oa = Bt.unstable_NormalPriority, W0 = Bt.unstable_LowPriority, rg = Bt.unstable_IdlePriority, ml = null, wn = null;
function V0(e) {
  if (wn && typeof wn.onCommitFiberRoot == "function")
    try {
      wn.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var on = Math.clz32 ? Math.clz32 : _0, J0 = Math.log, q0 = Math.LN2;
function _0(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (J0(e) / q0 | 0) | 0;
}
var Ms = 64, Rs = 4194304;
function hi(e) {
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
function Ia(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = hi(a) : (i &= s, i !== 0 && (r = hi(i)));
  } else
    s = n & ~o, s !== 0 ? r = hi(s) : i !== 0 && (r = hi(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - on(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function $0(e, t) {
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
function eC(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - on(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = $0(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function Hu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function og() {
  var e = Ms;
  return Ms <<= 1, !(Ms & 4194240) && (Ms = 64), e;
}
function Ic(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function ds(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - on(t), e[t] = n;
}
function tC(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - on(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function ef(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - on(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var he = 0;
function ig(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var sg, tf, ag, lg, cg, Fu = !1, Hs = [], nr = null, rr = null, or = null, Mi = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), Wn = [], nC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function sm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nr = null;
      break;
    case "dragenter":
    case "dragleave":
      rr = null;
      break;
    case "mouseover":
    case "mouseout":
      or = null;
      break;
    case "pointerover":
    case "pointerout":
      Mi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ri.delete(t.pointerId);
  }
}
function ri(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ps(t), t !== null && tf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function rC(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return nr = ri(nr, e, t, n, r, o), !0;
    case "dragenter":
      return rr = ri(rr, e, t, n, r, o), !0;
    case "mouseover":
      return or = ri(or, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Mi.set(i, ri(Mi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ri.set(i, ri(Ri.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function ug(e) {
  var t = Pr(e.target);
  if (t !== null) {
    var n = jr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = _h(n), t !== null) {
          e.blockedOn = t, cg(e.priority, function() {
            ag(n);
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
function fa(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      zu = r, n.target.dispatchEvent(r), zu = null;
    } else
      return t = ps(n), t !== null && tf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function am(e, t, n) {
  fa(e) && n.delete(t);
}
function oC() {
  Fu = !1, nr !== null && fa(nr) && (nr = null), rr !== null && fa(rr) && (rr = null), or !== null && fa(or) && (or = null), Mi.forEach(am), Ri.forEach(am);
}
function oi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Fu || (Fu = !0, Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority, oC)));
}
function Hi(e) {
  function t(o) {
    return oi(o, e);
  }
  if (0 < Hs.length) {
    oi(Hs[0], e);
    for (var n = 1; n < Hs.length; n++) {
      var r = Hs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (nr !== null && oi(nr, e), rr !== null && oi(rr, e), or !== null && oi(or, e), Mi.forEach(t), Ri.forEach(t), n = 0; n < Wn.length; n++)
    r = Wn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wn.length && (n = Wn[0], n.blockedOn === null); )
    ug(n), n.blockedOn === null && Wn.shift();
}
var ko = Fn.ReactCurrentBatchConfig, za = !0;
function iC(e, t, n, r) {
  var o = he, i = ko.transition;
  ko.transition = null;
  try {
    he = 1, nf(e, t, n, r);
  } finally {
    he = o, ko.transition = i;
  }
}
function sC(e, t, n, r) {
  var o = he, i = ko.transition;
  ko.transition = null;
  try {
    he = 4, nf(e, t, n, r);
  } finally {
    he = o, ko.transition = i;
  }
}
function nf(e, t, n, r) {
  if (za) {
    var o = Qu(e, t, n, r);
    if (o === null)
      Gc(e, t, r, La, n), sm(e, r);
    else if (rC(o, e, t, n, r))
      r.stopPropagation();
    else if (sm(e, r), t & 4 && -1 < nC.indexOf(e)) {
      for (; o !== null; ) {
        var i = ps(o);
        if (i !== null && sg(i), i = Qu(e, t, n, r), i === null && Gc(e, t, r, La, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Gc(e, t, r, null, n);
  }
}
var La = null;
function Qu(e, t, n, r) {
  if (La = null, e = _d(r), e = Pr(e), e !== null)
    if (t = jr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = _h(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return La = e, null;
}
function dg(e) {
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
      switch (X0()) {
        case $d:
          return 1;
        case ng:
          return 4;
        case Oa:
        case W0:
          return 16;
        case rg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qn = null, rf = null, pa = null;
function fg() {
  if (pa)
    return pa;
  var e, t = rf, n = t.length, r, o = "value" in qn ? qn.value : qn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ;
  return pa = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ma(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Fs() {
  return !0;
}
function lm() {
  return !1;
}
function It(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Fs : lm, this.isPropagationStopped = lm, this;
  }
  return De(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fs);
  }, persist: function() {
  }, isPersistent: Fs }), t;
}
var Ko = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, of = It(Ko), fs = De({}, Ko, { view: 0, detail: 0 }), aC = It(fs), zc, Lc, ii, Al = De({}, fs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ii && (ii && e.type === "mousemove" ? (zc = e.screenX - ii.screenX, Lc = e.screenY - ii.screenY) : Lc = zc = 0, ii = e), zc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Lc;
} }), cm = It(Al), lC = De({}, Al, { dataTransfer: 0 }), cC = It(lC), uC = De({}, fs, { relatedTarget: 0 }), Mc = It(uC), dC = De({}, Ko, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fC = It(dC), pC = De({}, Ko, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mC = It(pC), AC = De({}, Ko, { data: 0 }), um = It(AC), hC = {
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
}, gC = {
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
}, yC = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yC[e]) ? !!t[e] : !1;
}
function sf() {
  return vC;
}
var wC = De({}, fs, { key: function(e) {
  if (e.key) {
    var t = hC[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = ma(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gC[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sf, charCode: function(e) {
  return e.type === "keypress" ? ma(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ma(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), CC = It(wC), TC = De({}, Al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dm = It(TC), EC = De({}, fs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sf }), kC = It(EC), bC = De({}, Ko, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), SC = It(bC), PC = De({}, Al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), NC = It(PC), DC = [9, 13, 27, 32], af = In && "CompositionEvent" in window, Ei = null;
In && "documentMode" in document && (Ei = document.documentMode);
var xC = In && "TextEvent" in window && !Ei, pg = In && (!af || Ei && 8 < Ei && 11 >= Ei), fm = String.fromCharCode(32), pm = !1;
function mg(e, t) {
  switch (e) {
    case "keyup":
      return DC.indexOf(t.keyCode) !== -1;
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
function Ag(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var lo = !1;
function BC(e, t) {
  switch (e) {
    case "compositionend":
      return Ag(t);
    case "keypress":
      return t.which !== 32 ? null : (pm = !0, fm);
    case "textInput":
      return e = t.data, e === fm && pm ? null : e;
    default:
      return null;
  }
}
function OC(e, t) {
  if (lo)
    return e === "compositionend" || !af && mg(e, t) ? (e = fg(), pa = rf = qn = null, lo = !1, e) : null;
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
      return pg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var IC = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function mm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!IC[e.type] : t === "textarea";
}
function hg(e, t, n, r) {
  Xh(r), t = Ma(t, "onChange"), 0 < t.length && (n = new of("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ki = null, Fi = null;
function zC(e) {
  Pg(e, 0);
}
function hl(e) {
  var t = fo(e);
  if (Qh(t))
    return e;
}
function LC(e, t) {
  if (e === "change")
    return t;
}
var gg = !1;
if (In) {
  var Rc;
  if (In) {
    var Hc = "oninput" in document;
    if (!Hc) {
      var Am = document.createElement("div");
      Am.setAttribute("oninput", "return;"), Hc = typeof Am.oninput == "function";
    }
    Rc = Hc;
  } else
    Rc = !1;
  gg = Rc && (!document.documentMode || 9 < document.documentMode);
}
function hm() {
  ki && (ki.detachEvent("onpropertychange", yg), Fi = ki = null);
}
function yg(e) {
  if (e.propertyName === "value" && hl(Fi)) {
    var t = [];
    hg(t, Fi, e, _d(e)), qh(zC, t);
  }
}
function MC(e, t, n) {
  e === "focusin" ? (hm(), ki = t, Fi = n, ki.attachEvent("onpropertychange", yg)) : e === "focusout" && hm();
}
function RC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return hl(Fi);
}
function HC(e, t) {
  if (e === "click")
    return hl(t);
}
function FC(e, t) {
  if (e === "input" || e === "change")
    return hl(t);
}
function QC(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var an = typeof Object.is == "function" ? Object.is : QC;
function Qi(e, t) {
  if (an(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Tu.call(t, o) || !an(e[o], t[o]))
      return !1;
  }
  return !0;
}
function gm(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ym(e, t) {
  var n = gm(e);
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
    n = gm(n);
  }
}
function vg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function wg() {
  for (var e = window, t = Da(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Da(e.document);
  }
  return t;
}
function lf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function UC(e) {
  var t = wg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && vg(n.ownerDocument.documentElement, n)) {
    if (r !== null && lf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = ym(n, i);
        var s = ym(
          n,
          r
        );
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var jC = In && "documentMode" in document && 11 >= document.documentMode, co = null, Uu = null, bi = null, ju = !1;
function vm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ju || co == null || co !== Da(r) || (r = co, "selectionStart" in r && lf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), bi && Qi(bi, r) || (bi = r, r = Ma(Uu, "onSelect"), 0 < r.length && (t = new of("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = co)));
}
function Qs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var uo = { animationend: Qs("Animation", "AnimationEnd"), animationiteration: Qs("Animation", "AnimationIteration"), animationstart: Qs("Animation", "AnimationStart"), transitionend: Qs("Transition", "TransitionEnd") }, Fc = {}, Cg = {};
In && (Cg = document.createElement("div").style, "AnimationEvent" in window || (delete uo.animationend.animation, delete uo.animationiteration.animation, delete uo.animationstart.animation), "TransitionEvent" in window || delete uo.transitionend.transition);
function gl(e) {
  if (Fc[e])
    return Fc[e];
  if (!uo[e])
    return e;
  var t = uo[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Cg)
      return Fc[e] = t[n];
  return e;
}
var Tg = gl("animationend"), Eg = gl("animationiteration"), kg = gl("animationstart"), bg = gl("transitionend"), Sg = /* @__PURE__ */ new Map(), wm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function hr(e, t) {
  Sg.set(e, t), Ur(t, [e]);
}
for (var Qc = 0; Qc < wm.length; Qc++) {
  var Uc = wm[Qc], GC = Uc.toLowerCase(), KC = Uc[0].toUpperCase() + Uc.slice(1);
  hr(GC, "on" + KC);
}
hr(Tg, "onAnimationEnd");
hr(Eg, "onAnimationIteration");
hr(kg, "onAnimationStart");
hr("dblclick", "onDoubleClick");
hr("focusin", "onFocus");
hr("focusout", "onBlur");
hr(bg, "onTransitionEnd");
Do("onMouseEnter", ["mouseout", "mouseover"]);
Do("onMouseLeave", ["mouseout", "mouseover"]);
Do("onPointerEnter", ["pointerout", "pointerover"]);
Do("onPointerLeave", ["pointerout", "pointerover"]);
Ur("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ur("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ur("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ur("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ur("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), YC = new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));
function Cm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, G0(r, t, void 0, e), e.currentTarget = null;
}
function Pg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s], l = a.instance, c = a.currentTarget;
          if (a = a.listener, l !== i && o.isPropagationStopped())
            break e;
          Cm(o, a, c), i = l;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (a = r[s], l = a.instance, c = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped())
            break e;
          Cm(o, a, c), i = l;
        }
    }
  }
  if (Ba)
    throw e = Ru, Ba = !1, Ru = null, e;
}
function ke(e, t) {
  var n = t[Xu];
  n === void 0 && (n = t[Xu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ng(t, e, 2, !1), n.add(r));
}
function jc(e, t, n) {
  var r = 0;
  t && (r |= 4), Ng(n, e, r, t);
}
var Us = "_reactListening" + Math.random().toString(36).slice(2);
function Ui(e) {
  if (!e[Us]) {
    e[Us] = !0, Lh.forEach(function(n) {
      n !== "selectionchange" && (YC.has(n) || jc(n, !1, e), jc(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Us] || (t[Us] = !0, jc("selectionchange", !1, t));
  }
}
function Ng(e, t, n, r) {
  switch (dg(t)) {
    case 1:
      var o = iC;
      break;
    case 4:
      o = sC;
      break;
    default:
      o = nf;
  }
  n = o.bind(null, t, n, e), o = void 0, !Mu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Gc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var a = r.stateNode.containerInfo;
          if (a === o || a.nodeType === 8 && a.parentNode === o)
            break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var l = s.tag;
              if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                return;
              s = s.return;
            }
          for (; a !== null; ) {
            if (s = Pr(a), s === null)
              return;
            if (l = s.tag, l === 5 || l === 6) {
              r = i = s;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
  qh(function() {
    var c = i, u = _d(n), f = [];
    e: {
      var m = Sg.get(e);
      if (m !== void 0) {
        var y = of, g = e;
        switch (e) {
          case "keypress":
            if (ma(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = CC;
            break;
          case "focusin":
            g = "focus", y = Mc;
            break;
          case "focusout":
            g = "blur", y = Mc;
            break;
          case "beforeblur":
          case "afterblur":
            y = Mc;
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
            y = cm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = cC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = kC;
            break;
          case Tg:
          case Eg:
          case kg:
            y = fC;
            break;
          case bg:
            y = SC;
            break;
          case "scroll":
            y = aC;
            break;
          case "wheel":
            y = NC;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = mC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = dm;
        }
        var v = (t & 4) !== 0, N = !v && e === "scroll", p = v ? m !== null ? m + "Capture" : null : m;
        v = [];
        for (var A = c, h; A !== null; ) {
          h = A;
          var P = h.stateNode;
          if (h.tag === 5 && P !== null && (h = P, p !== null && (P = Li(A, p), P != null && v.push(ji(A, P, h)))), N)
            break;
          A = A.return;
        }
        0 < v.length && (m = new y(m, g, null, n, u), f.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== zu && (g = n.relatedTarget || n.fromElement) && (Pr(g) || g[zn]))
          break e;
        if ((y || m) && (m = u.window === u ? u : (m = u.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = c, g = g ? Pr(g) : null, g !== null && (N = jr(g), g !== N || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = c), y !== g)) {
          if (v = cm, P = "onMouseLeave", p = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (v = dm, P = "onPointerLeave", p = "onPointerEnter", A = "pointer"), N = y == null ? m : fo(y), h = g == null ? m : fo(g), m = new v(P, A + "leave", y, n, u), m.target = N, m.relatedTarget = h, P = null, Pr(u) === c && (v = new v(p, A + "enter", g, n, u), v.target = h, v.relatedTarget = N, P = v), N = P, y && g)
            t: {
              for (v = y, p = g, A = 0, h = v; h; h = $r(h))
                A++;
              for (h = 0, P = p; P; P = $r(P))
                h++;
              for (; 0 < A - h; )
                v = $r(v), A--;
              for (; 0 < h - A; )
                p = $r(p), h--;
              for (; A--; ) {
                if (v === p || p !== null && v === p.alternate)
                  break t;
                v = $r(v), p = $r(p);
              }
              v = null;
            }
          else
            v = null;
          y !== null && Tm(f, m, y, v, !1), g !== null && N !== null && Tm(f, N, g, v, !0);
        }
      }
      e: {
        if (m = c ? fo(c) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file")
          var O = LC;
        else if (mm(m))
          if (gg)
            O = FC;
          else {
            O = RC;
            var k = MC;
          }
        else
          (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (O = HC);
        if (O && (O = O(e, c))) {
          hg(f, O, n, u);
          break e;
        }
        k && k(e, m, c), e === "focusout" && (k = m._wrapperState) && k.controlled && m.type === "number" && Du(m, "number", m.value);
      }
      switch (k = c ? fo(c) : window, e) {
        case "focusin":
          (mm(k) || k.contentEditable === "true") && (co = k, Uu = c, bi = null);
          break;
        case "focusout":
          bi = Uu = co = null;
          break;
        case "mousedown":
          ju = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ju = !1, vm(f, n, u);
          break;
        case "selectionchange":
          if (jC)
            break;
        case "keydown":
        case "keyup":
          vm(f, n, u);
      }
      var T;
      if (af)
        e: {
          switch (e) {
            case "compositionstart":
              var S = "onCompositionStart";
              break e;
            case "compositionend":
              S = "onCompositionEnd";
              break e;
            case "compositionupdate":
              S = "onCompositionUpdate";
              break e;
          }
          S = void 0;
        }
      else
        lo ? mg(e, n) && (S = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
      S && (pg && n.locale !== "ko" && (lo || S !== "onCompositionStart" ? S === "onCompositionEnd" && lo && (T = fg()) : (qn = u, rf = "value" in qn ? qn.value : qn.textContent, lo = !0)), k = Ma(c, S), 0 < k.length && (S = new um(S, e, null, n, u), f.push({ event: S, listeners: k }), T ? S.data = T : (T = Ag(n), T !== null && (S.data = T)))), (T = xC ? BC(e, n) : OC(e, n)) && (c = Ma(c, "onBeforeInput"), 0 < c.length && (u = new um("onBeforeInput", "beforeinput", null, n, u), f.push({ event: u, listeners: c }), u.data = T));
    }
    Pg(f, t);
  });
}
function ji(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ma(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Li(e, n), i != null && r.unshift(ji(e, i, o)), i = Li(e, t), i != null && r.push(ji(e, i, o))), e = e.return;
  }
  return r;
}
function $r(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, c = a.stateNode;
    if (l !== null && l === r)
      break;
    a.tag === 5 && c !== null && (a = c, o ? (l = Li(n, i), l != null && s.unshift(ji(n, l, a))) : o || (l = Li(n, i), l != null && s.push(ji(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ZC = /\r\n?/g, XC = /\u0000|\uFFFD/g;
function Em(e) {
  return (typeof e == "string" ? e : "" + e).replace(ZC, `
`).replace(XC, "");
}
function js(e, t, n) {
  if (t = Em(t), Em(e) !== t && n)
    throw Error(F(425));
}
function Ra() {
}
var Gu = null, Ku = null;
function Yu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Zu = typeof setTimeout == "function" ? setTimeout : void 0, WC = typeof clearTimeout == "function" ? clearTimeout : void 0, km = typeof Promise == "function" ? Promise : void 0, VC = typeof queueMicrotask == "function" ? queueMicrotask : typeof km < "u" ? function(e) {
  return km.resolve(null).then(e).catch(JC);
} : Zu;
function JC(e) {
  setTimeout(function() {
    throw e;
  });
}
function Kc(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Hi(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Hi(t);
}
function ir(e) {
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
function bm(e) {
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
var Yo = Math.random().toString(36).slice(2), vn = "__reactFiber$" + Yo, Gi = "__reactProps$" + Yo, zn = "__reactContainer$" + Yo, Xu = "__reactEvents$" + Yo, qC = "__reactListeners$" + Yo, _C = "__reactHandles$" + Yo;
function Pr(e) {
  var t = e[vn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zn] || n[vn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = bm(e); e !== null; ) {
          if (n = e[vn])
            return n;
          e = bm(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ps(e) {
  return e = e[vn] || e[zn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function fo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33));
}
function yl(e) {
  return e[Gi] || null;
}
var Wu = [], po = -1;
function gr(e) {
  return { current: e };
}
function be(e) {
  0 > po || (e.current = Wu[po], Wu[po] = null, po--);
}
function Ee(e, t) {
  po++, Wu[po] = e.current, e.current = t;
}
var pr = {}, ct = gr(pr), wt = gr(!1), zr = pr;
function xo(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return pr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ct(e) {
  return e = e.childContextTypes, e != null;
}
function Ha() {
  be(wt), be(ct);
}
function Sm(e, t, n) {
  if (ct.current !== pr)
    throw Error(F(168));
  Ee(ct, t), Ee(wt, n);
}
function Dg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(F(108, M0(e) || "Unknown", o));
  return De({}, n, r);
}
function Fa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pr, zr = ct.current, Ee(ct, e), Ee(wt, wt.current), !0;
}
function Pm(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = Dg(e, t, zr), r.__reactInternalMemoizedMergedChildContext = e, be(wt), be(ct), Ee(ct, e)) : be(wt), Ee(wt, n);
}
var Pn = null, vl = !1, Yc = !1;
function xg(e) {
  Pn === null ? Pn = [e] : Pn.push(e);
}
function $C(e) {
  vl = !0, xg(e);
}
function yr() {
  if (!Yc && Pn !== null) {
    Yc = !0;
    var e = 0, t = he;
    try {
      var n = Pn;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Pn = null, vl = !1;
    } catch (o) {
      throw Pn !== null && (Pn = Pn.slice(e + 1)), tg($d, yr), o;
    } finally {
      he = t, Yc = !1;
    }
  }
  return null;
}
var mo = [], Ao = 0, Qa = null, Ua = 0, Mt = [], Rt = 0, Lr = null, xn = 1, Bn = "";
function kr(e, t) {
  mo[Ao++] = Ua, mo[Ao++] = Qa, Qa = e, Ua = t;
}
function Bg(e, t, n) {
  Mt[Rt++] = xn, Mt[Rt++] = Bn, Mt[Rt++] = Lr, Lr = e;
  var r = xn;
  e = Bn;
  var o = 32 - on(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - on(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, xn = 1 << 32 - on(t) + o | n << o | r, Bn = i + e;
  } else
    xn = 1 << i | n << o | r, Bn = e;
}
function cf(e) {
  e.return !== null && (kr(e, 1), Bg(e, 1, 0));
}
function uf(e) {
  for (; e === Qa; )
    Qa = mo[--Ao], mo[Ao] = null, Ua = mo[--Ao], mo[Ao] = null;
  for (; e === Lr; )
    Lr = Mt[--Rt], Mt[Rt] = null, Bn = Mt[--Rt], Mt[Rt] = null, xn = Mt[--Rt], Mt[Rt] = null;
}
var Dt = null, Nt = null, Se = !1, en = null;
function Og(e, t) {
  var n = Ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Nm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Dt = e, Nt = ir(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Dt = e, Nt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Lr !== null ? { id: xn, overflow: Bn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Dt = e, Nt = null, !0) : !1;
    default:
      return !1;
  }
}
function Vu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ju(e) {
  if (Se) {
    var t = Nt;
    if (t) {
      var n = t;
      if (!Nm(e, t)) {
        if (Vu(e))
          throw Error(F(418));
        t = ir(n.nextSibling);
        var r = Dt;
        t && Nm(e, t) ? Og(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, Dt = e);
      }
    } else {
      if (Vu(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2, Se = !1, Dt = e;
    }
  }
}
function Dm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Dt = e;
}
function Gs(e) {
  if (e !== Dt)
    return !1;
  if (!Se)
    return Dm(e), Se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yu(e.type, e.memoizedProps)), t && (t = Nt)) {
    if (Vu(e))
      throw Ig(), Error(F(418));
    for (; t; )
      Og(e, t), t = ir(t.nextSibling);
  }
  if (Dm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Nt = ir(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Nt = null;
    }
  } else
    Nt = Dt ? ir(e.stateNode.nextSibling) : null;
  return !0;
}
function Ig() {
  for (var e = Nt; e; )
    e = ir(e.nextSibling);
}
function Bo() {
  Nt = Dt = null, Se = !1;
}
function df(e) {
  en === null ? en = [e] : en.push(e);
}
var eT = Fn.ReactCurrentBatchConfig;
function si(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(F(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, e));
  }
  return e;
}
function Ks(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function xm(e) {
  var t = e._init;
  return t(e._payload);
}
function zg(e) {
  function t(p, A) {
    if (e) {
      var h = p.deletions;
      h === null ? (p.deletions = [A], p.flags |= 16) : h.push(A);
    }
  }
  function n(p, A) {
    if (!e)
      return null;
    for (; A !== null; )
      t(p, A), A = A.sibling;
    return null;
  }
  function r(p, A) {
    for (p = /* @__PURE__ */ new Map(); A !== null; )
      A.key !== null ? p.set(A.key, A) : p.set(A.index, A), A = A.sibling;
    return p;
  }
  function o(p, A) {
    return p = cr(p, A), p.index = 0, p.sibling = null, p;
  }
  function i(p, A, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < A ? (p.flags |= 2, A) : h) : (p.flags |= 2, A)) : (p.flags |= 1048576, A);
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, A, h, P) {
    return A === null || A.tag !== 6 ? (A = _c(h, p.mode, P), A.return = p, A) : (A = o(A, h), A.return = p, A);
  }
  function l(p, A, h, P) {
    var O = h.type;
    return O === ao ? u(p, A, h.props.children, P, h.key) : A !== null && (A.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Zn && xm(O) === A.type) ? (P = o(A, h.props), P.ref = si(p, A, h), P.return = p, P) : (P = Ca(h.type, h.key, h.props, null, p.mode, P), P.ref = si(p, A, h), P.return = p, P);
  }
  function c(p, A, h, P) {
    return A === null || A.tag !== 4 || A.stateNode.containerInfo !== h.containerInfo || A.stateNode.implementation !== h.implementation ? (A = $c(h, p.mode, P), A.return = p, A) : (A = o(A, h.children || []), A.return = p, A);
  }
  function u(p, A, h, P, O) {
    return A === null || A.tag !== 7 ? (A = Or(h, p.mode, P, O), A.return = p, A) : (A = o(A, h), A.return = p, A);
  }
  function f(p, A, h) {
    if (typeof A == "string" && A !== "" || typeof A == "number")
      return A = _c("" + A, p.mode, h), A.return = p, A;
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case Is:
          return h = Ca(A.type, A.key, A.props, null, p.mode, h), h.ref = si(p, null, A), h.return = p, h;
        case so:
          return A = $c(A, p.mode, h), A.return = p, A;
        case Zn:
          var P = A._init;
          return f(p, P(A._payload), h);
      }
      if (Ai(A) || ti(A))
        return A = Or(A, p.mode, h, null), A.return = p, A;
      Ks(p, A);
    }
    return null;
  }
  function m(p, A, h, P) {
    var O = A !== null ? A.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return O !== null ? null : a(p, A, "" + h, P);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Is:
          return h.key === O ? l(p, A, h, P) : null;
        case so:
          return h.key === O ? c(p, A, h, P) : null;
        case Zn:
          return O = h._init, m(
            p,
            A,
            O(h._payload),
            P
          );
      }
      if (Ai(h) || ti(h))
        return O !== null ? null : u(p, A, h, P, null);
      Ks(p, h);
    }
    return null;
  }
  function y(p, A, h, P, O) {
    if (typeof P == "string" && P !== "" || typeof P == "number")
      return p = p.get(h) || null, a(A, p, "" + P, O);
    if (typeof P == "object" && P !== null) {
      switch (P.$$typeof) {
        case Is:
          return p = p.get(P.key === null ? h : P.key) || null, l(A, p, P, O);
        case so:
          return p = p.get(P.key === null ? h : P.key) || null, c(A, p, P, O);
        case Zn:
          var k = P._init;
          return y(p, A, h, k(P._payload), O);
      }
      if (Ai(P) || ti(P))
        return p = p.get(h) || null, u(A, p, P, O, null);
      Ks(A, P);
    }
    return null;
  }
  function g(p, A, h, P) {
    for (var O = null, k = null, T = A, S = A = 0, H = null; T !== null && S < h.length; S++) {
      T.index > S ? (H = T, T = null) : H = T.sibling;
      var D = m(p, T, h[S], P);
      if (D === null) {
        T === null && (T = H);
        break;
      }
      e && T && D.alternate === null && t(p, T), A = i(D, A, S), k === null ? O = D : k.sibling = D, k = D, T = H;
    }
    if (S === h.length)
      return n(p, T), Se && kr(p, S), O;
    if (T === null) {
      for (; S < h.length; S++)
        T = f(p, h[S], P), T !== null && (A = i(T, A, S), k === null ? O = T : k.sibling = T, k = T);
      return Se && kr(p, S), O;
    }
    for (T = r(p, T); S < h.length; S++)
      H = y(T, p, S, h[S], P), H !== null && (e && H.alternate !== null && T.delete(H.key === null ? S : H.key), A = i(H, A, S), k === null ? O = H : k.sibling = H, k = H);
    return e && T.forEach(function(L) {
      return t(p, L);
    }), Se && kr(p, S), O;
  }
  function v(p, A, h, P) {
    var O = ti(h);
    if (typeof O != "function")
      throw Error(F(150));
    if (h = O.call(h), h == null)
      throw Error(F(151));
    for (var k = O = null, T = A, S = A = 0, H = null, D = h.next(); T !== null && !D.done; S++, D = h.next()) {
      T.index > S ? (H = T, T = null) : H = T.sibling;
      var L = m(p, T, D.value, P);
      if (L === null) {
        T === null && (T = H);
        break;
      }
      e && T && L.alternate === null && t(p, T), A = i(L, A, S), k === null ? O = L : k.sibling = L, k = L, T = H;
    }
    if (D.done)
      return n(
        p,
        T
      ), Se && kr(p, S), O;
    if (T === null) {
      for (; !D.done; S++, D = h.next())
        D = f(p, D.value, P), D !== null && (A = i(D, A, S), k === null ? O = D : k.sibling = D, k = D);
      return Se && kr(p, S), O;
    }
    for (T = r(p, T); !D.done; S++, D = h.next())
      D = y(T, p, S, D.value, P), D !== null && (e && D.alternate !== null && T.delete(D.key === null ? S : D.key), A = i(D, A, S), k === null ? O = D : k.sibling = D, k = D);
    return e && T.forEach(function(x) {
      return t(p, x);
    }), Se && kr(p, S), O;
  }
  function N(p, A, h, P) {
    if (typeof h == "object" && h !== null && h.type === ao && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Is:
          e: {
            for (var O = h.key, k = A; k !== null; ) {
              if (k.key === O) {
                if (O = h.type, O === ao) {
                  if (k.tag === 7) {
                    n(p, k.sibling), A = o(k, h.props.children), A.return = p, p = A;
                    break e;
                  }
                } else if (k.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Zn && xm(O) === k.type) {
                  n(p, k.sibling), A = o(k, h.props), A.ref = si(p, k, h), A.return = p, p = A;
                  break e;
                }
                n(p, k);
                break;
              } else
                t(p, k);
              k = k.sibling;
            }
            h.type === ao ? (A = Or(h.props.children, p.mode, P, h.key), A.return = p, p = A) : (P = Ca(h.type, h.key, h.props, null, p.mode, P), P.ref = si(p, A, h), P.return = p, p = P);
          }
          return s(p);
        case so:
          e: {
            for (k = h.key; A !== null; ) {
              if (A.key === k)
                if (A.tag === 4 && A.stateNode.containerInfo === h.containerInfo && A.stateNode.implementation === h.implementation) {
                  n(p, A.sibling), A = o(A, h.children || []), A.return = p, p = A;
                  break e;
                } else {
                  n(p, A);
                  break;
                }
              else
                t(p, A);
              A = A.sibling;
            }
            A = $c(h, p.mode, P), A.return = p, p = A;
          }
          return s(p);
        case Zn:
          return k = h._init, N(p, A, k(h._payload), P);
      }
      if (Ai(h))
        return g(p, A, h, P);
      if (ti(h))
        return v(p, A, h, P);
      Ks(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, A !== null && A.tag === 6 ? (n(p, A.sibling), A = o(A, h), A.return = p, p = A) : (n(p, A), A = _c(h, p.mode, P), A.return = p, p = A), s(p)) : n(p, A);
  }
  return N;
}
var Oo = zg(!0), Lg = zg(!1), ja = gr(null), Ga = null, ho = null, ff = null;
function pf() {
  ff = ho = Ga = null;
}
function mf(e) {
  var t = ja.current;
  be(ja), e._currentValue = t;
}
function qu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function bo(e, t) {
  Ga = e, ff = ho = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (vt = !0), e.firstContext = null);
}
function Kt(e) {
  var t = e._currentValue;
  if (ff !== e)
    if (e = { context: e, memoizedValue: t, next: null }, ho === null) {
      if (Ga === null)
        throw Error(F(308));
      ho = e, Ga.dependencies = { lanes: 0, firstContext: e };
    } else
      ho = ho.next = e;
  return t;
}
var Nr = null;
function Af(e) {
  Nr === null ? Nr = [e] : Nr.push(e);
}
function Mg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Af(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ln(e, r);
}
function Ln(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Xn = !1;
function hf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Rg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function On(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function sr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, ce & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ln(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Af(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ln(e, n);
}
function Aa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ef(e, n);
  }
}
function Bm(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ka(e, t, n, r) {
  var o = e.updateQueue;
  Xn = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, c = l.next;
    l.next = null, s === null ? i = c : s.next = c, s = l;
    var u = e.alternate;
    u !== null && (u = u.updateQueue, a = u.lastBaseUpdate, a !== s && (a === null ? u.firstBaseUpdate = c : a.next = c, u.lastBaseUpdate = l));
  }
  if (i !== null) {
    var f = o.baseState;
    s = 0, u = c = l = null, a = i;
    do {
      var m = a.lane, y = a.eventTime;
      if ((r & m) === m) {
        u !== null && (u = u.next = {
          eventTime: y,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var g = e, v = a;
          switch (m = t, y = n, v.tag) {
            case 1:
              if (g = v.payload, typeof g == "function") {
                f = g.call(y, f, m);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = v.payload, m = typeof g == "function" ? g.call(y, f, m) : g, m == null)
                break e;
              f = De({}, f, m);
              break e;
            case 2:
              Xn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [a] : m.push(a));
      } else
        y = { eventTime: y, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, u === null ? (c = u = y, l = f) : u = u.next = y, s |= m;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null)
          break;
        m = a, a = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (1);
    if (u === null && (l = f), o.baseState = l, o.firstBaseUpdate = c, o.lastBaseUpdate = u, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    Rr |= s, e.lanes = s, e.memoizedState = f;
  }
}
function Om(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(F(191, o));
        o.call(r);
      }
    }
}
var ms = {}, Cn = gr(ms), Ki = gr(ms), Yi = gr(ms);
function Dr(e) {
  if (e === ms)
    throw Error(F(174));
  return e;
}
function gf(e, t) {
  switch (Ee(Yi, t), Ee(Ki, e), Ee(Cn, ms), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bu(t, e);
  }
  be(Cn), Ee(Cn, t);
}
function Io() {
  be(Cn), be(Ki), be(Yi);
}
function Hg(e) {
  Dr(Yi.current);
  var t = Dr(Cn.current), n = Bu(t, e.type);
  t !== n && (Ee(Ki, e), Ee(Cn, n));
}
function yf(e) {
  Ki.current === e && (be(Cn), be(Ki));
}
var Pe = gr(0);
function Ya(e) {
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
var Zc = [];
function vf() {
  for (var e = 0; e < Zc.length; e++)
    Zc[e]._workInProgressVersionPrimary = null;
  Zc.length = 0;
}
var ha = Fn.ReactCurrentDispatcher, Xc = Fn.ReactCurrentBatchConfig, Mr = 0, Ne = null, Ue = null, Ye = null, Za = !1, Si = !1, Zi = 0, tT = 0;
function ot() {
  throw Error(F(321));
}
function wf(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!an(e[n], t[n]))
      return !1;
  return !0;
}
function Cf(e, t, n, r, o, i) {
  if (Mr = i, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ha.current = e === null || e.memoizedState === null ? iT : sT, e = n(r, o), Si) {
    i = 0;
    do {
      if (Si = !1, Zi = 0, 25 <= i)
        throw Error(F(301));
      i += 1, Ye = Ue = null, t.updateQueue = null, ha.current = aT, e = n(r, o);
    } while (Si);
  }
  if (ha.current = Xa, t = Ue !== null && Ue.next !== null, Mr = 0, Ye = Ue = Ne = null, Za = !1, t)
    throw Error(F(300));
  return e;
}
function Tf() {
  var e = Zi !== 0;
  return Zi = 0, e;
}
function hn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ye === null ? Ne.memoizedState = Ye = e : Ye = Ye.next = e, Ye;
}
function Yt() {
  if (Ue === null) {
    var e = Ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Ue.next;
  var t = Ye === null ? Ne.memoizedState : Ye.next;
  if (t !== null)
    Ye = t, Ue = e;
  else {
    if (e === null)
      throw Error(F(310));
    Ue = e, e = { memoizedState: Ue.memoizedState, baseState: Ue.baseState, baseQueue: Ue.baseQueue, queue: Ue.queue, next: null }, Ye === null ? Ne.memoizedState = Ye = e : Ye = Ye.next = e;
  }
  return Ye;
}
function Xi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wc(e) {
  var t = Yt(), n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Ue, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null, l = null, c = i;
    do {
      var u = c.lane;
      if ((Mr & u) === u)
        l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        l === null ? (a = l = f, s = r) : l = l.next = f, Ne.lanes |= u, Rr |= u;
      }
      c = c.next;
    } while (c !== null && c !== i);
    l === null ? s = r : l.next = a, an(r, t.memoizedState) || (vt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ne.lanes |= i, Rr |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vc(e) {
  var t = Yt(), n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    an(i, t.memoizedState) || (vt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Fg() {
}
function Qg(e, t) {
  var n = Ne, r = Yt(), o = t(), i = !an(r.memoizedState, o);
  if (i && (r.memoizedState = o, vt = !0), r = r.queue, Ef(Gg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ye !== null && Ye.memoizedState.tag & 1) {
    if (n.flags |= 2048, Wi(9, jg.bind(null, n, r, o, t), void 0, null), Xe === null)
      throw Error(F(349));
    Mr & 30 || Ug(n, t, o);
  }
  return o;
}
function Ug(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function jg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Kg(t) && Yg(e);
}
function Gg(e, t, n) {
  return n(function() {
    Kg(t) && Yg(e);
  });
}
function Kg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !an(e, n);
  } catch {
    return !0;
  }
}
function Yg(e) {
  var t = Ln(e, 1);
  t !== null && sn(t, e, 1, -1);
}
function Im(e) {
  var t = hn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: e }, t.queue = e, e = e.dispatch = oT.bind(null, Ne, e), [t.memoizedState, e];
}
function Wi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Zg() {
  return Yt().memoizedState;
}
function ga(e, t, n, r) {
  var o = hn();
  Ne.flags |= e, o.memoizedState = Wi(1 | t, n, void 0, r === void 0 ? null : r);
}
function wl(e, t, n, r) {
  var o = Yt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ue !== null) {
    var s = Ue.memoizedState;
    if (i = s.destroy, r !== null && wf(r, s.deps)) {
      o.memoizedState = Wi(t, n, i, r);
      return;
    }
  }
  Ne.flags |= e, o.memoizedState = Wi(1 | t, n, i, r);
}
function zm(e, t) {
  return ga(8390656, 8, e, t);
}
function Ef(e, t) {
  return wl(2048, 8, e, t);
}
function Xg(e, t) {
  return wl(4, 2, e, t);
}
function Wg(e, t) {
  return wl(4, 4, e, t);
}
function Vg(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Jg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wl(4, 4, Vg.bind(null, t, e), n);
}
function kf() {
}
function qg(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function _g(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function $g(e, t, n) {
  return Mr & 21 ? (an(n, t) || (n = og(), Ne.lanes |= n, Rr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, vt = !0), e.memoizedState = n);
}
function nT(e, t) {
  var n = he;
  he = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Xc.transition;
  Xc.transition = {};
  try {
    e(!1), t();
  } finally {
    he = n, Xc.transition = r;
  }
}
function ey() {
  return Yt().memoizedState;
}
function rT(e, t, n) {
  var r = lr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ty(e))
    ny(t, n);
  else if (n = Mg(e, t, n, r), n !== null) {
    var o = mt();
    sn(n, e, r, o), ry(n, t, r);
  }
}
function oT(e, t, n) {
  var r = lr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ty(e))
    ny(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var s = t.lastRenderedState, a = i(s, n);
        if (o.hasEagerState = !0, o.eagerState = a, an(a, s)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Af(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Mg(e, t, o, r), n !== null && (o = mt(), sn(n, e, r, o), ry(n, t, r));
  }
}
function ty(e) {
  var t = e.alternate;
  return e === Ne || t !== null && t === Ne;
}
function ny(e, t) {
  Si = Za = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ry(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ef(e, n);
  }
}
var Xa = { readContext: Kt, useCallback: ot, useContext: ot, useEffect: ot, useImperativeHandle: ot, useInsertionEffect: ot, useLayoutEffect: ot, useMemo: ot, useReducer: ot, useRef: ot, useState: ot, useDebugValue: ot, useDeferredValue: ot, useTransition: ot, useMutableSource: ot, useSyncExternalStore: ot, useId: ot, unstable_isNewReconciler: !1 }, iT = { readContext: Kt, useCallback: function(e, t) {
  return hn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Kt, useEffect: zm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ga(
    4194308,
    4,
    Vg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ga(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ga(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = hn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = hn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = rT.bind(null, Ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = hn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Im, useDebugValue: kf, useDeferredValue: function(e) {
  return hn().memoizedState = e;
}, useTransition: function() {
  var e = Im(!1), t = e[0];
  return e = nT.bind(null, e[1]), hn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ne, o = hn();
  if (Se) {
    if (n === void 0)
      throw Error(F(407));
    n = n();
  } else {
    if (n = t(), Xe === null)
      throw Error(F(349));
    Mr & 30 || Ug(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, zm(Gg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Wi(9, jg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = hn(), t = Xe.identifierPrefix;
  if (Se) {
    var n = Bn, r = xn;
    n = (r & ~(1 << 32 - on(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = tT++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, sT = {
  readContext: Kt,
  useCallback: qg,
  useContext: Kt,
  useEffect: Ef,
  useImperativeHandle: Jg,
  useInsertionEffect: Xg,
  useLayoutEffect: Wg,
  useMemo: _g,
  useReducer: Wc,
  useRef: Zg,
  useState: function() {
    return Wc(Xi);
  },
  useDebugValue: kf,
  useDeferredValue: function(e) {
    var t = Yt();
    return $g(t, Ue.memoizedState, e);
  },
  useTransition: function() {
    var e = Wc(Xi)[0], t = Yt().memoizedState;
    return [e, t];
  },
  useMutableSource: Fg,
  useSyncExternalStore: Qg,
  useId: ey,
  unstable_isNewReconciler: !1
}, aT = { readContext: Kt, useCallback: qg, useContext: Kt, useEffect: Ef, useImperativeHandle: Jg, useInsertionEffect: Xg, useLayoutEffect: Wg, useMemo: _g, useReducer: Vc, useRef: Zg, useState: function() {
  return Vc(Xi);
}, useDebugValue: kf, useDeferredValue: function(e) {
  var t = Yt();
  return Ue === null ? t.memoizedState = e : $g(t, Ue.memoizedState, e);
}, useTransition: function() {
  var e = Vc(Xi)[0], t = Yt().memoizedState;
  return [e, t];
}, useMutableSource: Fg, useSyncExternalStore: Qg, useId: ey, unstable_isNewReconciler: !1 };
function _t(e, t) {
  if (e && e.defaultProps) {
    t = De({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function _u(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : De({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cl = { isMounted: function(e) {
  return (e = e._reactInternals) ? jr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = mt(), o = lr(e), i = On(r, o);
  i.payload = t, n != null && (i.callback = n), t = sr(e, i, o), t !== null && (sn(t, e, o, r), Aa(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = mt(), o = lr(e), i = On(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = sr(e, i, o), t !== null && (sn(t, e, o, r), Aa(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = mt(), r = lr(e), o = On(n, r);
  o.tag = 2, t != null && (o.callback = t), t = sr(e, o, r), t !== null && (sn(t, e, r, n), Aa(t, e, r));
} };
function Lm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Qi(n, r) || !Qi(o, i) : !0;
}
function oy(e, t, n) {
  var r = !1, o = pr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Kt(i) : (o = Ct(t) ? zr : ct.current, r = t.contextTypes, i = (r = r != null) ? xo(e, o) : pr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Mm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
}
function $u(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, hf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Kt(i) : (i = Ct(t) ? zr : ct.current, o.context = xo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (_u(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Cl.enqueueReplaceState(o, o.state, null), Ka(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function zo(e, t) {
  try {
    var n = "", r = t;
    do
      n += L0(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Jc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ed(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var lT = typeof WeakMap == "function" ? WeakMap : Map;
function iy(e, t, n) {
  n = On(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Va || (Va = !0, ud = r), ed(e, t);
  }, n;
}
function sy(e, t, n) {
  n = On(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      ed(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    ed(e, t), typeof r != "function" && (ar === null ? ar = /* @__PURE__ */ new Set([this]) : ar.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Rm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lT();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = TT.bind(null, e, t, n), t.then(e, e));
}
function Hm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, sr(n, t, 1))), n.lanes |= 1), e);
}
var cT = Fn.ReactCurrentOwner, vt = !1;
function pt(e, t, n, r) {
  t.child = e === null ? Lg(t, null, n, r) : Oo(t, e.child, n, r);
}
function Qm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return bo(t, o), r = Cf(e, t, n, r, i, o), n = Tf(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Mn(e, t, o)) : (Se && n && cf(t), t.flags |= 1, pt(e, t, r, o), t.child);
}
function Um(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Of(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ay(e, t, i, r, o)) : (e = Ca(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Qi, n(s, r) && e.ref === t.ref)
      return Mn(e, t, o);
  }
  return t.flags |= 1, e = cr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ay(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Qi(i, r) && e.ref === t.ref)
      if (vt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (vt = !0);
      else
        return t.lanes = e.lanes, Mn(e, t, o);
  }
  return td(e, t, n, r, o);
}
function ly(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ee(yo, bt), bt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ee(yo, bt), bt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ee(yo, bt), bt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ee(yo, bt), bt |= r;
  return pt(e, t, o, n), t.child;
}
function cy(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function td(e, t, n, r, o) {
  var i = Ct(n) ? zr : ct.current;
  return i = xo(t, i), bo(t, o), n = Cf(e, t, n, r, i, o), r = Tf(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Mn(e, t, o)) : (Se && r && cf(t), t.flags |= 1, pt(e, t, n, o), t.child);
}
function jm(e, t, n, r, o) {
  if (Ct(n)) {
    var i = !0;
    Fa(t);
  } else
    i = !1;
  if (bo(t, o), t.stateNode === null)
    ya(e, t), oy(t, n, r), $u(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Kt(c) : (c = Ct(n) ? zr : ct.current, c = xo(t, c));
    var u = n.getDerivedStateFromProps, f = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && Mm(t, s, r, c), Xn = !1;
    var m = t.memoizedState;
    s.state = m, Ka(t, r, s, o), l = t.memoizedState, a !== r || m !== l || wt.current || Xn ? (typeof u == "function" && (_u(t, n, u, r), l = t.memoizedState), (a = Xn || Lm(t, n, a, r, m, l, c)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = c, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Rg(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : _t(t.type, a), s.props = c, f = t.pendingProps, m = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Kt(l) : (l = Ct(n) ? zr : ct.current, l = xo(t, l));
    var y = n.getDerivedStateFromProps;
    (u = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || m !== l) && Mm(t, s, r, l), Xn = !1, m = t.memoizedState, s.state = m, Ka(t, r, s, o);
    var g = t.memoizedState;
    a !== f || m !== g || wt.current || Xn ? (typeof y == "function" && (_u(t, n, y, r), g = t.memoizedState), (c = Xn || Lm(t, n, c, r, m, g, l) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return nd(e, t, n, r, i, o);
}
function nd(e, t, n, r, o, i) {
  cy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return o && Pm(t, n, !1), Mn(e, t, i);
  r = t.stateNode, cT.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Oo(t, e.child, null, i), t.child = Oo(t, null, a, i)) : pt(e, t, a, i), t.memoizedState = r.state, o && Pm(t, n, !0), t.child;
}
function uy(e) {
  var t = e.stateNode;
  t.pendingContext ? Sm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sm(e, t.context, !1), gf(e, t.containerInfo);
}
function Gm(e, t, n, r, o) {
  return Bo(), df(o), t.flags |= 256, pt(e, t, n, r), t.child;
}
var rd = { dehydrated: null, treeContext: null, retryLane: 0 };
function od(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dy(e, t, n) {
  var r = t.pendingProps, o = Pe.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ee(Pe, o & 1), e === null)
    return Ju(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = kl(s, r, 0, null), e = Or(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = od(n), t.memoizedState = rd, e) : bf(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return uT(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = cr(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = cr(a, i) : (i = Or(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? od(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = rd, r;
  }
  return i = e.child, e = i.sibling, r = cr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function bf(e, t) {
  return t = kl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ys(e, t, n, r) {
  return r !== null && df(r), Oo(t, e.child, null, n), e = bf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function uT(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Jc(Error(F(422))), Ys(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = kl({ mode: "visible", children: r.children }, o, 0, null), i = Or(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Oo(t, e.child, null, s), t.child.memoizedState = od(s), t.memoizedState = rd, i);
  if (!(t.mode & 1))
    return Ys(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(F(419)), r = Jc(i, r, void 0), Ys(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, vt || a) {
    if (r = Xe, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Ln(e, o), sn(r, e, o, -1));
    }
    return Bf(), r = Jc(Error(F(421))), Ys(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ET.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Nt = ir(o.nextSibling), Dt = t, Se = !0, en = null, e !== null && (Mt[Rt++] = xn, Mt[Rt++] = Bn, Mt[Rt++] = Lr, xn = e.id, Bn = e.overflow, Lr = t), t = bf(t, r.children), t.flags |= 4096, t);
}
function Km(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qu(e.return, t, n);
}
function qc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function fy(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (pt(e, t, r.children, n), r = Pe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Km(e, n, t);
          else if (e.tag === 19)
            Km(e, n, t);
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
  if (Ee(Pe, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Ya(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), qc(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ya(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        qc(t, !0, n, null, i);
        break;
      case "together":
        qc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ya(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Mn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Rr |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, n = cr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = cr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function dT(e, t, n) {
  switch (t.tag) {
    case 3:
      uy(t), Bo();
      break;
    case 5:
      Hg(t);
      break;
    case 1:
      Ct(t.type) && Fa(t);
      break;
    case 4:
      gf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ee(ja, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ee(Pe, Pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? dy(e, t, n) : (Ee(Pe, Pe.current & 1), e = Mn(e, t, n), e !== null ? e.sibling : null);
      Ee(Pe, Pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return fy(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ee(Pe, Pe.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ly(e, t, n);
  }
  return Mn(e, t, n);
}
var py, id, my, Ay;
py = function(e, t) {
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
id = function() {
};
my = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Dr(Cn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Pu(e, o), r = Pu(e, r), i = [];
        break;
      case "select":
        o = De({}, o, { value: void 0 }), r = De({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = xu(e, o), r = xu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ra);
    }
    Ou(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (s in a)
            a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ii.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (a = o != null ? o[c] : void 0, r.hasOwnProperty(c) && l !== a && (l != null || a != null))
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
            for (s in l)
              l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
          } else
            n || (i || (i = []), i.push(
              c,
              n
            )), n = l;
        else
          c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ii.hasOwnProperty(c) ? (l != null && c === "onScroll" && ke("scroll", e), i || a === l || (i = [])) : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ay = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ai(e, t) {
  if (!Se)
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
function it(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function fT(e, t, n) {
  var r = t.pendingProps;
  switch (uf(t), t.tag) {
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
      return it(t), null;
    case 1:
      return Ct(t.type) && Ha(), it(t), null;
    case 3:
      return r = t.stateNode, Io(), be(wt), be(ct), vf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, en !== null && (pd(en), en = null))), id(e, t), it(t), null;
    case 5:
      yf(t);
      var o = Dr(Yi.current);
      if (n = t.type, e !== null && t.stateNode != null)
        my(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return it(t), null;
        }
        if (e = Dr(Cn.current), Gs(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[vn] = t, r[Gi] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < gi.length; o++)
                ke(gi[o], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke(
                "error",
                r
              ), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              $p(r, i), ke("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ke("invalid", r);
              break;
            case "textarea":
              tm(r, i), ke("invalid", r);
          }
          Ou(n, i), o = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && js(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && js(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : Ii.hasOwnProperty(s) && a != null && s === "onScroll" && ke("scroll", r);
            }
          switch (n) {
            case "input":
              zs(r), em(r, i, !0);
              break;
            case "textarea":
              zs(r), nm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ra);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Gh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[vn] = t, e[Gi] = r, py(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Iu(n, r), n) {
              case "dialog":
                ke("cancel", e), ke("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < gi.length; o++)
                  ke(gi[o], e);
                o = r;
                break;
              case "source":
                ke("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  e
                ), ke("load", e), o = r;
                break;
              case "details":
                ke("toggle", e), o = r;
                break;
              case "input":
                $p(e, r), o = Pu(e, r), ke("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = De({}, r, { value: void 0 }), ke("invalid", e);
                break;
              case "textarea":
                tm(e, r), o = xu(e, r), ke("invalid", e);
                break;
              default:
                o = r;
            }
            Ou(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? Zh(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Kh(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && zi(e, l) : typeof l == "number" && zi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ii.hasOwnProperty(i) ? l != null && i === "onScroll" && ke("scroll", e) : l != null && Wd(e, i, l, s));
              }
            switch (n) {
              case "input":
                zs(e), em(e, r, !1);
                break;
              case "textarea":
                zs(e), nm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Co(e, !!r.multiple, i, !1) : r.defaultValue != null && Co(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ra);
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
      return it(t), null;
    case 6:
      if (e && t.stateNode != null)
        Ay(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = Dr(Yi.current), Dr(Cn.current), Gs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vn] = t, (i = r.nodeValue !== n) && (e = Dt, e !== null))
            switch (e.tag) {
              case 3:
                js(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && js(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vn] = t, t.stateNode = r;
      }
      return it(t), null;
    case 13:
      if (be(Pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Se && Nt !== null && t.mode & 1 && !(t.flags & 128))
          Ig(), Bo(), t.flags |= 98560, i = !1;
        else if (i = Gs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(F(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(F(317));
            i[vn] = t;
          } else
            Bo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          it(t), i = !1;
        } else
          en !== null && (pd(en), en = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Pe.current & 1 ? je === 0 && (je = 3) : Bf())), t.updateQueue !== null && (t.flags |= 4), it(t), null);
    case 4:
      return Io(), id(e, t), e === null && Ui(t.stateNode.containerInfo), it(t), null;
    case 10:
      return mf(t.type._context), it(t), null;
    case 17:
      return Ct(t.type) && Ha(), it(t), null;
    case 19:
      if (be(Pe), i = t.memoizedState, i === null)
        return it(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r)
          ai(i, !1);
        else {
          if (je !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = Ya(e), s !== null) {
                for (t.flags |= 128, ai(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Ee(Pe, Pe.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && ze() > Lo && (t.flags |= 128, r = !0, ai(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ya(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ai(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Se)
              return it(t), null;
          } else
            2 * ze() - i.renderingStartTime > Lo && n !== 1073741824 && (t.flags |= 128, r = !0, ai(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ze(), t.sibling = null, n = Pe.current, Ee(Pe, r ? n & 1 | 2 : n & 1), t) : (it(t), null);
    case 22:
    case 23:
      return xf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? bt & 1073741824 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : it(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function pT(e, t) {
  switch (uf(t), t.tag) {
    case 1:
      return Ct(t.type) && Ha(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Io(), be(wt), be(ct), vf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return yf(t), null;
    case 13:
      if (be(Pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(F(340));
        Bo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return be(Pe), null;
    case 4:
      return Io(), null;
    case 10:
      return mf(t.type._context), null;
    case 22:
    case 23:
      return xf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zs = !1, lt = !1, mT = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
function go(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ie(e, t, r);
      }
    else
      n.current = null;
}
function sd(e, t, n) {
  try {
    n();
  } catch (r) {
    Ie(e, t, r);
  }
}
var Ym = !1;
function AT(e, t) {
  if (Gu = za, e = wg(), lf(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0, a = -1, l = -1, c = 0, u = 0, f = e, m = null;
          t:
            for (; ; ) {
              for (var y; f !== n || o !== 0 && f.nodeType !== 3 || (a = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (y = f.firstChild) !== null; )
                m = f, f = y;
              for (; ; ) {
                if (f === e)
                  break t;
                if (m === n && ++c === o && (a = s), m === i && ++u === r && (l = s), (y = f.nextSibling) !== null)
                  break;
                f = m, m = f.parentNode;
              }
              f = y;
            }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Ku = { focusedElem: e, selectionRange: n }, za = !1, Y = t; Y !== null; )
    if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, Y = e;
    else
      for (; Y !== null; ) {
        t = Y;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps, N = g.memoizedState, p = t.stateNode, A = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : _t(t.type, v), N);
                  p.__reactInternalSnapshotBeforeUpdate = A;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (P) {
          Ie(t, t.return, P);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, Y = e;
          break;
        }
        Y = t.return;
      }
  return g = Ym, Ym = !1, g;
}
function Pi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && sd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Tl(e, t) {
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
function ad(e) {
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
function hy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, hy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vn], delete t[Gi], delete t[Xu], delete t[qC], delete t[_C])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function gy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zm(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || gy(e.return))
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
function ld(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ra));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ld(e, t, n), e = e.sibling; e !== null; )
      ld(e, t, n), e = e.sibling;
}
function cd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (cd(e, t, n), e = e.sibling; e !== null; )
      cd(e, t, n), e = e.sibling;
}
var qe = null, $t = !1;
function Gn(e, t, n) {
  for (n = n.child; n !== null; )
    yy(e, t, n), n = n.sibling;
}
function yy(e, t, n) {
  if (wn && typeof wn.onCommitFiberUnmount == "function")
    try {
      wn.onCommitFiberUnmount(ml, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      lt || go(n, t);
    case 6:
      var r = qe, o = $t;
      qe = null, Gn(e, t, n), qe = r, $t = o, qe !== null && ($t ? (e = qe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : qe.removeChild(n.stateNode));
      break;
    case 18:
      qe !== null && ($t ? (e = qe, n = n.stateNode, e.nodeType === 8 ? Kc(e.parentNode, n) : e.nodeType === 1 && Kc(e, n), Hi(e)) : Kc(qe, n.stateNode));
      break;
    case 4:
      r = qe, o = $t, qe = n.stateNode.containerInfo, $t = !0, Gn(e, t, n), qe = r, $t = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!lt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && sd(n, t, s), o = o.next;
        } while (o !== r);
      }
      Gn(e, t, n);
      break;
    case 1:
      if (!lt && (go(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Ie(n, t, a);
        }
      Gn(e, t, n);
      break;
    case 21:
      Gn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (lt = (r = lt) || n.memoizedState !== null, Gn(e, t, n), lt = r) : Gn(e, t, n);
      break;
    default:
      Gn(e, t, n);
  }
}
function Xm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mT()), t.forEach(function(r) {
      var o = kT.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Jt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, s = t, a = s;
        e:
          for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                qe = a.stateNode, $t = !1;
                break e;
              case 3:
                qe = a.stateNode.containerInfo, $t = !0;
                break e;
              case 4:
                qe = a.stateNode.containerInfo, $t = !0;
                break e;
            }
            a = a.return;
          }
        if (qe === null)
          throw Error(F(160));
        yy(i, s, o), qe = null, $t = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (c) {
        Ie(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      vy(t, e), t = t.sibling;
}
function vy(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Jt(t, e), pn(e), r & 4) {
        try {
          Pi(3, e, e.return), Tl(3, e);
        } catch (v) {
          Ie(e, e.return, v);
        }
        try {
          Pi(5, e, e.return);
        } catch (v) {
          Ie(e, e.return, v);
        }
      }
      break;
    case 1:
      Jt(t, e), pn(e), r & 512 && n !== null && go(n, n.return);
      break;
    case 5:
      if (Jt(t, e), pn(e), r & 512 && n !== null && go(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          zi(o, "");
        } catch (v) {
          Ie(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && Uh(o, i), Iu(a, s);
            var c = Iu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s], f = l[s + 1];
              u === "style" ? Zh(o, f) : u === "dangerouslySetInnerHTML" ? Kh(o, f) : u === "children" ? zi(o, f) : Wd(o, u, f, c);
            }
            switch (a) {
              case "input":
                Nu(o, i);
                break;
              case "textarea":
                jh(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null ? Co(o, !!i.multiple, y, !1) : m !== !!i.multiple && (i.defaultValue != null ? Co(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Co(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Gi] = i;
          } catch (v) {
            Ie(e, e.return, v);
          }
      }
      break;
    case 6:
      if (Jt(t, e), pn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(F(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          Ie(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Jt(t, e), pn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Hi(t.containerInfo);
        } catch (v) {
          Ie(e, e.return, v);
        }
      break;
    case 4:
      Jt(t, e), pn(e);
      break;
    case 13:
      Jt(t, e), pn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Nf = ze())), r & 4 && Xm(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (lt = (c = lt) || u, Jt(t, e), lt = c) : Jt(t, e), pn(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1)
          for (Y = e, u = e.child; u !== null; ) {
            for (f = Y = u; Y !== null; ) {
              switch (m = Y, y = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pi(4, m, m.return);
                  break;
                case 1:
                  go(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (v) {
                      Ie(r, n, v);
                    }
                  }
                  break;
                case 5:
                  go(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Vm(f);
                    continue;
                  }
              }
              y !== null ? (y.return = m, Y = y) : Vm(f);
            }
            u = u.sibling;
          }
        e:
          for (u = null, f = e; ; ) {
            if (f.tag === 5) {
              if (u === null) {
                u = f;
                try {
                  o = f.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Yh("display", s));
                } catch (v) {
                  Ie(e, e.return, v);
                }
              }
            } else if (f.tag === 6) {
              if (u === null)
                try {
                  f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                } catch (v) {
                  Ie(e, e.return, v);
                }
            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
            if (f === e)
              break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e)
                break e;
              u === f && (u = null), f = f.return;
            }
            u === f && (u = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      Jt(t, e), pn(e), r & 4 && Xm(e);
      break;
    case 21:
      break;
    default:
      Jt(
        t,
        e
      ), pn(e);
  }
}
function pn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (zi(o, ""), r.flags &= -33);
          var i = Zm(e);
          cd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Zm(e);
          ld(e, a, s);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      Ie(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hT(e, t, n) {
  Y = e, wy(e);
}
function wy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var o = Y, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Zs;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || lt;
        a = Zs;
        var c = lt;
        if (Zs = s, (lt = l) && !c)
          for (Y = o; Y !== null; )
            s = Y, l = s.child, s.tag === 22 && s.memoizedState !== null ? Jm(o) : l !== null ? (l.return = s, Y = l) : Jm(o);
        for (; i !== null; )
          Y = i, wy(i), i = i.sibling;
        Y = o, Zs = a, lt = c;
      }
      Wm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, Y = i) : Wm(e);
  }
}
function Wm(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              lt || Tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !lt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : _t(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Om(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Om(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && Hi(f);
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
              throw Error(F(163));
          }
        lt || t.flags & 512 && ad(t);
      } catch (m) {
        Ie(t, t.return, m);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Y = n;
      break;
    }
    Y = t.return;
  }
}
function Vm(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Y = n;
      break;
    }
    Y = t.return;
  }
}
function Jm(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Tl(4, t);
          } catch (l) {
            Ie(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ie(t, o, l);
            }
          }
          var i = t.return;
          try {
            ad(t);
          } catch (l) {
            Ie(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ad(t);
          } catch (l) {
            Ie(t, s, l);
          }
      }
    } catch (l) {
      Ie(t, t.return, l);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, Y = a;
      break;
    }
    Y = t.return;
  }
}
var gT = Math.ceil, Wa = Fn.ReactCurrentDispatcher, Sf = Fn.ReactCurrentOwner, Gt = Fn.ReactCurrentBatchConfig, ce = 0, Xe = null, He = null, et = 0, bt = 0, yo = gr(0), je = 0, Vi = null, Rr = 0, El = 0, Pf = 0, Ni = null, yt = null, Nf = 0, Lo = 1 / 0, bn = null, Va = !1, ud = null, ar = null, Xs = !1, _n = null, Ja = 0, Di = 0, dd = null, va = -1, wa = 0;
function mt() {
  return ce & 6 ? ze() : va !== -1 ? va : va = ze();
}
function lr(e) {
  return e.mode & 1 ? ce & 2 && et !== 0 ? et & -et : eT.transition !== null ? (wa === 0 && (wa = og()), wa) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : dg(e.type)), e) : 1;
}
function sn(e, t, n, r) {
  if (50 < Di)
    throw Di = 0, dd = null, Error(F(185));
  ds(e, n, r), (!(ce & 2) || e !== Xe) && (e === Xe && (!(ce & 2) && (El |= n), je === 4 && Vn(e, et)), Tt(e, r), n === 1 && ce === 0 && !(t.mode & 1) && (Lo = ze() + 500, vl && yr()));
}
function Tt(e, t) {
  var n = e.callbackNode;
  eC(e, t);
  var r = Ia(e, e === Xe ? et : 0);
  if (r === 0)
    n !== null && im(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && im(n), t === 1)
      e.tag === 0 ? $C(qm.bind(null, e)) : xg(qm.bind(null, e)), VC(function() {
        !(ce & 6) && yr();
      }), n = null;
    else {
      switch (ig(r)) {
        case 1:
          n = $d;
          break;
        case 4:
          n = ng;
          break;
        case 16:
          n = Oa;
          break;
        case 536870912:
          n = rg;
          break;
        default:
          n = Oa;
      }
      n = Ny(n, Cy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Cy(e, t) {
  if (va = -1, wa = 0, ce & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (So() && e.callbackNode !== n)
    return null;
  var r = Ia(e, e === Xe ? et : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = qa(e, r);
  else {
    t = r;
    var o = ce;
    ce |= 2;
    var i = Ey();
    (Xe !== e || et !== t) && (bn = null, Lo = ze() + 500, Br(e, t));
    do
      try {
        wT();
        break;
      } catch (a) {
        Ty(e, a);
      }
    while (1);
    pf(), Wa.current = i, ce = o, He !== null ? t = 0 : (Xe = null, et = 0, t = je);
  }
  if (t !== 0) {
    if (t === 2 && (o = Hu(e), o !== 0 && (r = o, t = fd(e, o))), t === 1)
      throw n = Vi, Br(e, 0), Vn(e, r), Tt(e, ze()), n;
    if (t === 6)
      Vn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !yT(o) && (t = qa(e, r), t === 2 && (i = Hu(e), i !== 0 && (r = i, t = fd(e, i))), t === 1))
        throw n = Vi, Br(e, 0), Vn(e, r), Tt(e, ze()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          br(e, yt, bn);
          break;
        case 3:
          if (Vn(e, r), (r & 130023424) === r && (t = Nf + 500 - ze(), 10 < t)) {
            if (Ia(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              mt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Zu(br.bind(null, e, yt, bn), t);
            break;
          }
          br(e, yt, bn);
          break;
        case 4:
          if (Vn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - on(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = ze() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gT(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Zu(br.bind(null, e, yt, bn), r);
            break;
          }
          br(e, yt, bn);
          break;
        case 5:
          br(e, yt, bn);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Tt(e, ze()), e.callbackNode === n ? Cy.bind(null, e) : null;
}
function fd(e, t) {
  var n = Ni;
  return e.current.memoizedState.isDehydrated && (Br(e, t).flags |= 256), e = qa(e, t), e !== 2 && (t = yt, yt = n, t !== null && pd(t)), e;
}
function pd(e) {
  yt === null ? yt = e : yt.push.apply(yt, e);
}
function yT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!an(i(), o))
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
function Vn(e, t) {
  for (t &= ~Pf, t &= ~El, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - on(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function qm(e) {
  if (ce & 6)
    throw Error(F(327));
  So();
  var t = Ia(e, 0);
  if (!(t & 1))
    return Tt(e, ze()), null;
  var n = qa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hu(e);
    r !== 0 && (t = r, n = fd(e, r));
  }
  if (n === 1)
    throw n = Vi, Br(e, 0), Vn(e, t), Tt(e, ze()), n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, br(e, yt, bn), Tt(e, ze()), null;
}
function Df(e, t) {
  var n = ce;
  ce |= 1;
  try {
    return e(t);
  } finally {
    ce = n, ce === 0 && (Lo = ze() + 500, vl && yr());
  }
}
function Hr(e) {
  _n !== null && _n.tag === 0 && !(ce & 6) && So();
  var t = ce;
  ce |= 1;
  var n = Gt.transition, r = he;
  try {
    if (Gt.transition = null, he = 1, e)
      return e();
  } finally {
    he = r, Gt.transition = n, ce = t, !(ce & 6) && yr();
  }
}
function xf() {
  bt = yo.current, be(yo);
}
function Br(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, WC(n)), He !== null)
    for (n = He.return; n !== null; ) {
      var r = n;
      switch (uf(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ha();
          break;
        case 3:
          Io(), be(wt), be(ct), vf();
          break;
        case 5:
          yf(r);
          break;
        case 4:
          Io();
          break;
        case 13:
          be(Pe);
          break;
        case 19:
          be(Pe);
          break;
        case 10:
          mf(r.type._context);
          break;
        case 22:
        case 23:
          xf();
      }
      n = n.return;
    }
  if (Xe = e, He = e = cr(e.current, null), et = bt = t, je = 0, Vi = null, Pf = El = Rr = 0, yt = Ni = null, Nr !== null) {
    for (t = 0; t < Nr.length; t++)
      if (n = Nr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = o, r.next = s;
        }
        n.pending = r;
      }
    Nr = null;
  }
  return e;
}
function Ty(e, t) {
  do {
    var n = He;
    try {
      if (pf(), ha.current = Xa, Za) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Za = !1;
      }
      if (Mr = 0, Ye = Ue = Ne = null, Si = !1, Zi = 0, Sf.current = null, n === null || n.return === null) {
        je = 1, Vi = t, He = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = et, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var c = l, u = a, f = u.tag;
          if (!(u.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = u.alternate;
            m ? (u.updateQueue = m.updateQueue, u.memoizedState = m.memoizedState, u.lanes = m.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var y = Hm(s);
          if (y !== null) {
            y.flags &= -257, Fm(y, s, a, i, t), y.mode & 1 && Rm(i, c, t), t = y, l = c;
            var g = t.updateQueue;
            if (g === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else
              g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Rm(i, c, t), Bf();
              break e;
            }
            l = Error(F(426));
          }
        } else if (Se && a.mode & 1) {
          var N = Hm(s);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256), Fm(N, s, a, i, t), df(zo(l, a));
            break e;
          }
        }
        i = l = zo(l, a), je !== 4 && (je = 2), Ni === null ? Ni = [i] : Ni.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = iy(i, l, t);
              Bm(i, p);
              break e;
            case 1:
              a = l;
              var A = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof A.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (ar === null || !ar.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var P = sy(i, a, t);
                Bm(i, P);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      by(n);
    } catch (O) {
      t = O, He === n && n !== null && (He = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ey() {
  var e = Wa.current;
  return Wa.current = Xa, e === null ? Xa : e;
}
function Bf() {
  (je === 0 || je === 3 || je === 2) && (je = 4), Xe === null || !(Rr & 268435455) && !(El & 268435455) || Vn(Xe, et);
}
function qa(e, t) {
  var n = ce;
  ce |= 2;
  var r = Ey();
  (Xe !== e || et !== t) && (bn = null, Br(e, t));
  do
    try {
      vT();
      break;
    } catch (o) {
      Ty(e, o);
    }
  while (1);
  if (pf(), ce = n, Wa.current = r, He !== null)
    throw Error(F(261));
  return Xe = null, et = 0, je;
}
function vT() {
  for (; He !== null; )
    ky(He);
}
function wT() {
  for (; He !== null && !Y0(); )
    ky(He);
}
function ky(e) {
  var t = Py(e.alternate, e, bt);
  e.memoizedProps = e.pendingProps, t === null ? by(e) : He = t, Sf.current = null;
}
function by(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = pT(n, t), n !== null) {
        n.flags &= 32767, He = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        je = 6, He = null;
        return;
      }
    } else if (n = fT(n, t, bt), n !== null) {
      He = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      He = t;
      return;
    }
    He = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function br(e, t, n) {
  var r = he, o = Gt.transition;
  try {
    Gt.transition = null, he = 1, CT(e, t, n, r);
  } finally {
    Gt.transition = o, he = r;
  }
  return null;
}
function CT(e, t, n, r) {
  do
    So();
  while (_n !== null);
  if (ce & 6)
    throw Error(F(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(F(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (tC(e, i), e === Xe && (He = Xe = null, et = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xs || (Xs = !0, Ny(Oa, function() {
    return So(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Gt.transition, Gt.transition = null;
    var s = he;
    he = 1;
    var a = ce;
    ce |= 4, Sf.current = null, AT(e, n), vy(n, e), UC(Ku), za = !!Gu, Ku = Gu = null, e.current = n, hT(n), Z0(), ce = a, he = s, Gt.transition = i;
  } else
    e.current = n;
  if (Xs && (Xs = !1, _n = e, Ja = o), i = e.pendingLanes, i === 0 && (ar = null), V0(n.stateNode), Tt(e, ze()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Va)
    throw Va = !1, e = ud, ud = null, e;
  return Ja & 1 && e.tag !== 0 && So(), i = e.pendingLanes, i & 1 ? e === dd ? Di++ : (Di = 0, dd = e) : Di = 0, yr(), null;
}
function So() {
  if (_n !== null) {
    var e = ig(Ja), t = Gt.transition, n = he;
    try {
      if (Gt.transition = null, he = 16 > e ? 16 : e, _n === null)
        var r = !1;
      else {
        if (e = _n, _n = null, Ja = 0, ce & 6)
          throw Error(F(331));
        var o = ce;
        for (ce |= 4, Y = e.current; Y !== null; ) {
          var i = Y, s = i.child;
          if (Y.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (Y = c; Y !== null; ) {
                  var u = Y;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pi(8, u, i);
                  }
                  var f = u.child;
                  if (f !== null)
                    f.return = u, Y = f;
                  else
                    for (; Y !== null; ) {
                      u = Y;
                      var m = u.sibling, y = u.return;
                      if (hy(u), u === c) {
                        Y = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = y, Y = m;
                        break;
                      }
                      Y = y;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var N = v.sibling;
                    v.sibling = null, v = N;
                  } while (v !== null);
                }
              }
              Y = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null)
            s.return = i, Y = s;
          else
            e:
              for (; Y !== null; ) {
                if (i = Y, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pi(9, i, i.return);
                  }
                var p = i.sibling;
                if (p !== null) {
                  p.return = i.return, Y = p;
                  break e;
                }
                Y = i.return;
              }
        }
        var A = e.current;
        for (Y = A; Y !== null; ) {
          s = Y;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null)
            h.return = s, Y = h;
          else
            e:
              for (s = A; Y !== null; ) {
                if (a = Y, a.flags & 2048)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tl(9, a);
                    }
                  } catch (O) {
                    Ie(a, a.return, O);
                  }
                if (a === s) {
                  Y = null;
                  break e;
                }
                var P = a.sibling;
                if (P !== null) {
                  P.return = a.return, Y = P;
                  break e;
                }
                Y = a.return;
              }
        }
        if (ce = o, yr(), wn && typeof wn.onPostCommitFiberRoot == "function")
          try {
            wn.onPostCommitFiberRoot(ml, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      he = n, Gt.transition = t;
    }
  }
  return !1;
}
function _m(e, t, n) {
  t = zo(n, t), t = iy(e, t, 1), e = sr(e, t, 1), t = mt(), e !== null && (ds(e, 1, t), Tt(e, t));
}
function Ie(e, t, n) {
  if (e.tag === 3)
    _m(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _m(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ar === null || !ar.has(r))) {
          e = zo(n, e), e = sy(t, e, 1), t = sr(t, e, 1), e = mt(), t !== null && (ds(t, 1, e), Tt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function TT(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = mt(), e.pingedLanes |= e.suspendedLanes & n, Xe === e && (et & n) === n && (je === 4 || je === 3 && (et & 130023424) === et && 500 > ze() - Nf ? Br(e, 0) : Pf |= n), Tt(e, t);
}
function Sy(e, t) {
  t === 0 && (e.mode & 1 ? (t = Rs, Rs <<= 1, !(Rs & 130023424) && (Rs = 4194304)) : t = 1);
  var n = mt();
  e = Ln(e, t), e !== null && (ds(e, t, n), Tt(e, n));
}
function ET(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Sy(e, n);
}
function kT(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), Sy(e, n);
}
var Py;
Py = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || wt.current)
      vt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return vt = !1, dT(e, t, n);
      vt = !!(e.flags & 131072);
    }
  else
    vt = !1, Se && t.flags & 1048576 && Bg(t, Ua, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ya(e, t), e = t.pendingProps;
      var o = xo(t, ct.current);
      bo(t, n), o = Cf(null, t, r, e, o, n);
      var i = Tf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ct(r) ? (i = !0, Fa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, hf(t), o.updater = Cl, t.stateNode = o, o._reactInternals = t, $u(t, r, e, n), t = nd(null, t, r, !0, i, n)) : (t.tag = 0, Se && i && cf(t), pt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ya(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = ST(r), e = _t(r, e), o) {
          case 0:
            t = td(null, t, r, e, n);
            break e;
          case 1:
            t = jm(null, t, r, e, n);
            break e;
          case 11:
            t = Qm(null, t, r, e, n);
            break e;
          case 14:
            t = Um(null, t, r, _t(r.type, e), n);
            break e;
        }
        throw Error(F(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), td(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), jm(e, t, r, o, n);
    case 3:
      e: {
        if (uy(t), e === null)
          throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Rg(e, t), Ka(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = zo(Error(F(423)), t), t = Gm(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = zo(Error(F(424)), t), t = Gm(e, t, r, n, o);
            break e;
          } else
            for (Nt = ir(t.stateNode.containerInfo.firstChild), Dt = t, Se = !0, en = null, n = Lg(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Bo(), r === o) {
            t = Mn(e, t, n);
            break e;
          }
          pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Hg(t), e === null && Ju(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Yu(r, o) ? s = null : i !== null && Yu(r, i) && (t.flags |= 32), cy(e, t), pt(e, t, s, n), t.child;
    case 6:
      return e === null && Ju(t), null;
    case 13:
      return dy(e, t, n);
    case 4:
      return gf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Oo(t, null, r, n) : pt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), Qm(e, t, r, o, n);
    case 7:
      return pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ee(ja, r._currentValue), r._currentValue = s, i !== null)
          if (an(i.value, s)) {
            if (i.children === o.children && !wt.current) {
              t = Mn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      l = On(-1, n & -n), l.tag = 2;
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), qu(
                      i.return,
                      n,
                      t
                    ), a.lanes |= n;
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10)
                s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (s = i.return, s === null)
                  throw Error(F(341));
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), qu(s, n, t), s = i.sibling;
              } else
                s = i.child;
              if (s !== null)
                s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (i = s.sibling, i !== null) {
                    i.return = s.return, s = i;
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        pt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, bo(t, n), o = Kt(o), r = r(o), t.flags |= 1, pt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = _t(r, t.pendingProps), o = _t(r.type, o), Um(e, t, r, o, n);
    case 15:
      return ay(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), ya(e, t), t.tag = 1, Ct(r) ? (e = !0, Fa(t)) : e = !1, bo(t, n), oy(t, r, o), $u(t, r, o, n), nd(null, t, r, !0, e, n);
    case 19:
      return fy(e, t, n);
    case 22:
      return ly(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Ny(e, t) {
  return tg(e, t);
}
function bT(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ut(e, t, n, r) {
  return new bT(e, t, n, r);
}
function Of(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ST(e) {
  if (typeof e == "function")
    return Of(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Jd)
      return 11;
    if (e === qd)
      return 14;
  }
  return 2;
}
function cr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ca(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function")
    Of(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case ao:
          return Or(n.children, o, i, t);
        case Vd:
          s = 8, o |= 8;
          break;
        case Eu:
          return e = Ut(12, n, t, o | 2), e.elementType = Eu, e.lanes = i, e;
        case ku:
          return e = Ut(13, n, t, o), e.elementType = ku, e.lanes = i, e;
        case bu:
          return e = Ut(19, n, t, o), e.elementType = bu, e.lanes = i, e;
        case Hh:
          return kl(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Mh:
                s = 10;
                break e;
              case Rh:
                s = 9;
                break e;
              case Jd:
                s = 11;
                break e;
              case qd:
                s = 14;
                break e;
              case Zn:
                s = 16, r = null;
                break e;
            }
          throw Error(F(130, e == null ? e : typeof e, ""));
      }
  return t = Ut(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Or(e, t, n, r) {
  return e = Ut(7, e, r, t), e.lanes = n, e;
}
function kl(e, t, n, r) {
  return e = Ut(22, e, r, t), e.elementType = Hh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function _c(e, t, n) {
  return e = Ut(6, e, null, t), e.lanes = n, e;
}
function $c(e, t, n) {
  return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function PT(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ic(0), this.expirationTimes = Ic(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ic(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function If(e, t, n, r, o, i, s, a, l) {
  return e = new PT(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, hf(i), e;
}
function NT(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: so, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Dy(e) {
  if (!e)
    return pr;
  e = e._reactInternals;
  e: {
    if (jr(e) !== e || e.tag !== 1)
      throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ct(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ct(n))
      return Dg(e, n, t);
  }
  return t;
}
function xy(e, t, n, r, o, i, s, a, l) {
  return e = If(n, r, !0, e, o, i, s, a, l), e.context = Dy(null), n = e.current, r = mt(), o = lr(n), i = On(r, o), i.callback = t ?? null, sr(n, i, o), e.current.lanes = o, ds(e, o, r), Tt(e, r), e;
}
function bl(e, t, n, r) {
  var o = t.current, i = mt(), s = lr(o);
  return n = Dy(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = sr(o, t, s), e !== null && (sn(e, o, s, i), Aa(e, o, s)), s;
}
function _a(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $m(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zf(e, t) {
  $m(e, t), (e = e.alternate) && $m(e, t);
}
function DT() {
  return null;
}
var By = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Lf(e) {
  this._internalRoot = e;
}
Sl.prototype.render = Lf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  bl(e, t, null, null);
};
Sl.prototype.unmount = Lf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hr(function() {
      bl(null, e, null, null);
    }), t[zn] = null;
  }
};
function Sl(e) {
  this._internalRoot = e;
}
Sl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = lg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++)
      ;
    Wn.splice(n, 0, e), n === 0 && ug(e);
  }
};
function Mf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Pl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function eA() {
}
function xT(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = _a(s);
        i.call(c);
      };
    }
    var s = xy(t, r, e, 0, null, !1, !1, "", eA);
    return e._reactRootContainer = s, e[zn] = s.current, Ui(e.nodeType === 8 ? e.parentNode : e), Hr(), s;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = _a(l);
      a.call(c);
    };
  }
  var l = If(e, 0, !1, null, null, !1, !1, "", eA);
  return e._reactRootContainer = l, e[zn] = l.current, Ui(e.nodeType === 8 ? e.parentNode : e), Hr(function() {
    bl(t, l, n, r);
  }), l;
}
function Nl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = _a(s);
        a.call(l);
      };
    }
    bl(t, s, e, o);
  } else
    s = xT(n, t, e, o, r);
  return _a(s);
}
sg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hi(t.pendingLanes);
        n !== 0 && (ef(t, n | 1), Tt(t, ze()), !(ce & 6) && (Lo = ze() + 500, yr()));
      }
      break;
    case 13:
      Hr(function() {
        var r = Ln(e, 1);
        if (r !== null) {
          var o = mt();
          sn(r, e, 1, o);
        }
      }), zf(e, 1);
  }
};
tf = function(e) {
  if (e.tag === 13) {
    var t = Ln(e, 134217728);
    if (t !== null) {
      var n = mt();
      sn(t, e, 134217728, n);
    }
    zf(e, 134217728);
  }
};
ag = function(e) {
  if (e.tag === 13) {
    var t = lr(e), n = Ln(e, t);
    if (n !== null) {
      var r = mt();
      sn(n, e, t, r);
    }
    zf(e, t);
  }
};
lg = function() {
  return he;
};
cg = function(e, t) {
  var n = he;
  try {
    return he = e, t();
  } finally {
    he = n;
  }
};
Lu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Nu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = yl(r);
            if (!o)
              throw Error(F(90));
            Qh(r), Nu(r, o);
          }
        }
      }
      break;
    case "textarea":
      jh(e, n);
      break;
    case "select":
      t = n.value, t != null && Co(e, !!n.multiple, t, !1);
  }
};
Vh = Df;
Jh = Hr;
var BT = { usingClientEntryPoint: !1, Events: [ps, fo, yl, Xh, Wh, Df] }, li = { findFiberByHostInstance: Pr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, OT = { bundleType: li.bundleType, version: li.version, rendererPackageName: li.rendererPackageName, rendererConfig: li.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Fn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = $h(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: li.findFiberByHostInstance || DT, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ws.isDisabled && Ws.supportsFiber)
    try {
      ml = Ws.inject(OT), wn = Ws;
    } catch {
    }
}
Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BT;
Ot.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mf(t))
    throw Error(F(200));
  return NT(e, t, null, n);
};
Ot.createRoot = function(e, t) {
  if (!Mf(e))
    throw Error(F(299));
  var n = !1, r = "", o = By;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = If(e, 1, !1, null, null, n, !1, r, o), e[zn] = t.current, Ui(e.nodeType === 8 ? e.parentNode : e), new Lf(t);
};
Ot.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = $h(t), e = e === null ? null : e.stateNode, e;
};
Ot.flushSync = function(e) {
  return Hr(e);
};
Ot.hydrate = function(e, t, n) {
  if (!Pl(t))
    throw Error(F(200));
  return Nl(null, e, t, !0, n);
};
Ot.hydrateRoot = function(e, t, n) {
  if (!Mf(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = By;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = xy(t, null, e, 1, n ?? null, o, !1, i, s), e[zn] = t.current, Ui(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Sl(t);
};
Ot.render = function(e, t, n) {
  if (!Pl(t))
    throw Error(F(200));
  return Nl(null, e, t, !1, n);
};
Ot.unmountComponentAtNode = function(e) {
  if (!Pl(e))
    throw Error(F(40));
  return e._reactRootContainer ? (Hr(function() {
    Nl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zn] = null;
    });
  }), !0) : !1;
};
Ot.unstable_batchedUpdates = Df;
Ot.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Pl(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return Nl(e, t, n, !1, r);
};
Ot.version = "18.3.1-next-f1338f8080-20240426";
function Oy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oy);
    } catch (e) {
      console.error(e);
    }
}
Oy(), Oh.exports = Ot;
var IT = Oh.exports, Iy, tA = IT;
Iy = tA.createRoot, tA.hydrateRoot;
function zT(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const nA = "$$material";
function tt() {
  return tt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tt.apply(null, arguments);
}
function Dl(e, t) {
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
var LT = !1;
function MT(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function RT(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var HT = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !LT : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(RT(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = MT(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), st = "-ms-", $a = "-moz-", me = "-webkit-", zy = "comm", Rf = "rule", Hf = "decl", FT = "@import", Ly = "@keyframes", QT = "@layer", UT = Math.abs, xl = String.fromCharCode, jT = Object.assign;
function GT(e, t) {
  return _e(e, 0) ^ 45 ? (((t << 2 ^ _e(e, 0)) << 2 ^ _e(e, 1)) << 2 ^ _e(e, 2)) << 2 ^ _e(e, 3) : 0;
}
function My(e) {
  return e.trim();
}
function KT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ae(e, t, n) {
  return e.replace(t, n);
}
function md(e, t) {
  return e.indexOf(t);
}
function _e(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ji(e, t, n) {
  return e.slice(t, n);
}
function gn(e) {
  return e.length;
}
function Ff(e) {
  return e.length;
}
function Vs(e, t) {
  return t.push(e), e;
}
function YT(e, t) {
  return e.map(t).join("");
}
var Bl = 1, Mo = 1, Ry = 0, Et = 0, Re = 0, Zo = "";
function Ol(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Bl, column: Mo, length: s, return: "" };
}
function ci(e, t) {
  return jT(Ol("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ZT() {
  return Re;
}
function XT() {
  return Re = Et > 0 ? _e(Zo, --Et) : 0, Mo--, Re === 10 && (Mo = 1, Bl--), Re;
}
function xt() {
  return Re = Et < Ry ? _e(Zo, Et++) : 0, Mo++, Re === 10 && (Mo = 1, Bl++), Re;
}
function Tn() {
  return _e(Zo, Et);
}
function Ta() {
  return Et;
}
function As(e, t) {
  return Ji(Zo, e, t);
}
function qi(e) {
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
function Hy(e) {
  return Bl = Mo = 1, Ry = gn(Zo = e), Et = 0, [];
}
function Fy(e) {
  return Zo = "", e;
}
function Ea(e) {
  return My(As(Et - 1, Ad(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function WT(e) {
  for (; (Re = Tn()) && Re < 33; )
    xt();
  return qi(e) > 2 || qi(Re) > 3 ? "" : " ";
}
function VT(e, t) {
  for (; --t && xt() && !(Re < 48 || Re > 102 || Re > 57 && Re < 65 || Re > 70 && Re < 97); )
    ;
  return As(e, Ta() + (t < 6 && Tn() == 32 && xt() == 32));
}
function Ad(e) {
  for (; xt(); )
    switch (Re) {
      case e:
        return Et;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ad(Re);
        break;
      case 40:
        e === 41 && Ad(e);
        break;
      case 92:
        xt();
        break;
    }
  return Et;
}
function JT(e, t) {
  for (; xt() && e + Re !== 47 + 10; )
    if (e + Re === 42 + 42 && Tn() === 47)
      break;
  return "/*" + As(t, Et - 1) + "*" + xl(e === 47 ? e : xt());
}
function qT(e) {
  for (; !qi(Tn()); )
    xt();
  return As(e, Et);
}
function _T(e) {
  return Fy(ka("", null, null, null, [""], e = Hy(e), 0, [0], e));
}
function ka(e, t, n, r, o, i, s, a, l) {
  for (var c = 0, u = 0, f = s, m = 0, y = 0, g = 0, v = 1, N = 1, p = 1, A = 0, h = "", P = o, O = i, k = r, T = h; N; )
    switch (g = A, A = xt()) {
      case 40:
        if (g != 108 && _e(T, f - 1) == 58) {
          md(T += Ae(Ea(A), "&", "&\f"), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Ea(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += WT(g);
        break;
      case 92:
        T += VT(Ta() - 1, 7);
        continue;
      case 47:
        switch (Tn()) {
          case 42:
          case 47:
            Vs($T(JT(xt(), Ta()), t, n), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * v:
        a[c++] = gn(T) * p;
      case 125 * v:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            N = 0;
          case 59 + u:
            p == -1 && (T = Ae(T, /\f/g, "")), y > 0 && gn(T) - f && Vs(y > 32 ? oA(T + ";", r, n, f - 1) : oA(Ae(T, " ", "") + ";", r, n, f - 2), l);
            break;
          case 59:
            T += ";";
          default:
            if (Vs(k = rA(T, t, n, c, u, o, a, h, P = [], O = [], f), i), A === 123)
              if (u === 0)
                ka(T, t, k, k, P, i, f, a, O);
              else
                switch (m === 99 && _e(T, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ka(e, k, k, r && Vs(rA(e, k, k, 0, 0, o, a, h, o, P = [], f), O), o, O, f, a, r ? P : O);
                    break;
                  default:
                    ka(T, k, k, k, [""], O, 0, a, O);
                }
        }
        c = u = y = 0, v = p = 1, h = T = "", f = s;
        break;
      case 58:
        f = 1 + gn(T), y = g;
      default:
        if (v < 1) {
          if (A == 123)
            --v;
          else if (A == 125 && v++ == 0 && XT() == 125)
            continue;
        }
        switch (T += xl(A), A * v) {
          case 38:
            p = u > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            a[c++] = (gn(T) - 1) * p, p = 1;
            break;
          case 64:
            Tn() === 45 && (T += Ea(xt())), m = Tn(), u = f = gn(h = T += qT(Ta())), A++;
            break;
          case 45:
            g === 45 && gn(T) == 2 && (v = 0);
        }
    }
  return i;
}
function rA(e, t, n, r, o, i, s, a, l, c, u) {
  for (var f = o - 1, m = o === 0 ? i : [""], y = Ff(m), g = 0, v = 0, N = 0; g < r; ++g)
    for (var p = 0, A = Ji(e, f + 1, f = UT(v = s[g])), h = e; p < y; ++p)
      (h = My(v > 0 ? m[p] + " " + A : Ae(A, /&\f/g, m[p]))) && (l[N++] = h);
  return Ol(e, t, n, o === 0 ? Rf : a, l, c, u);
}
function $T(e, t, n) {
  return Ol(e, t, n, zy, xl(ZT()), Ji(e, 2, -2), 0);
}
function oA(e, t, n, r) {
  return Ol(e, t, n, Hf, Ji(e, 0, r), Ji(e, r + 1, -1), r);
}
function Po(e, t) {
  for (var n = "", r = Ff(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function eE(e, t, n, r) {
  switch (e.type) {
    case QT:
      if (e.children.length)
        break;
    case FT:
    case Hf:
      return e.return = e.return || e.value;
    case zy:
      return "";
    case Ly:
      return e.return = e.value + "{" + Po(e.children, r) + "}";
    case Rf:
      e.value = e.props.join(",");
  }
  return gn(n = Po(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function tE(e) {
  var t = Ff(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function nE(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Qy(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var rE = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Tn(), o === 38 && i === 12 && (n[r] = 1), !qi(i); )
    xt();
  return As(t, Et);
}, oE = function(t, n) {
  var r = -1, o = 44;
  do
    switch (qi(o)) {
      case 0:
        o === 38 && Tn() === 12 && (n[r] = 1), t[r] += rE(Et - 1, n, r);
        break;
      case 2:
        t[r] += Ea(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Tn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += xl(o);
    }
  while (o = xt());
  return t;
}, iE = function(t, n) {
  return Fy(oE(Hy(t), n));
}, iA = /* @__PURE__ */ new WeakMap(), sE = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !iA.get(r)) && !o) {
      iA.set(t, !0);
      for (var i = [], s = iE(n, i), a = r.props, l = 0, c = 0; l < s.length; l++)
        for (var u = 0; u < a.length; u++, c++)
          t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + " " + s[l];
    }
  }
}, aE = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Uy(e, t) {
  switch (GT(e, t)) {
    case 5103:
      return me + "print-" + e + e;
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
      return me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return me + e + $a + e + st + e + e;
    case 6828:
    case 4268:
      return me + e + st + e + e;
    case 6165:
      return me + e + st + "flex-" + e + e;
    case 5187:
      return me + e + Ae(e, /(\w+).+(:[^]+)/, me + "box-$1$2" + st + "flex-$1$2") + e;
    case 5443:
      return me + e + st + "flex-item-" + Ae(e, /flex-|-self/, "") + e;
    case 4675:
      return me + e + st + "flex-line-pack" + Ae(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return me + e + st + Ae(e, "shrink", "negative") + e;
    case 5292:
      return me + e + st + Ae(e, "basis", "preferred-size") + e;
    case 6060:
      return me + "box-" + Ae(e, "-grow", "") + me + e + st + Ae(e, "grow", "positive") + e;
    case 4554:
      return me + Ae(e, /([^-])(transform)/g, "$1" + me + "$2") + e;
    case 6187:
      return Ae(Ae(Ae(e, /(zoom-|grab)/, me + "$1"), /(image-set)/, me + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ae(e, /(image-set\([^]*)/, me + "$1$`$1");
    case 4968:
      return Ae(Ae(e, /(.+:)(flex-)?(.*)/, me + "box-pack:$3" + st + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + me + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ae(e, /(.+)-inline(.+)/, me + "$1$2") + e;
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
      if (gn(e) - 1 - t > 6)
        switch (_e(e, t + 1)) {
          case 109:
            if (_e(e, t + 4) !== 45)
              break;
          case 102:
            return Ae(e, /(.+:)(.+)-([^]+)/, "$1" + me + "$2-$3$1" + $a + (_e(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~md(e, "stretch") ? Uy(Ae(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (_e(e, t + 1) !== 115)
        break;
    case 6444:
      switch (_e(e, gn(e) - 3 - (~md(e, "!important") && 10))) {
        case 107:
          return Ae(e, ":", ":" + me) + e;
        case 101:
          return Ae(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + me + (_e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + me + "$2$3$1" + st + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_e(e, t + 11)) {
        case 114:
          return me + e + st + Ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return me + e + st + Ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return me + e + st + Ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return me + e + st + e + e;
  }
  return e;
}
var lE = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Hf:
        t.return = Uy(t.value, t.length);
        break;
      case Ly:
        return Po([ci(t, {
          value: Ae(t.value, "@", "@" + me)
        })], o);
      case Rf:
        if (t.length)
          return YT(t.props, function(i) {
            switch (KT(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Po([ci(t, {
                  props: [Ae(i, /:(read-\w+)/, ":" + $a + "$1")]
                })], o);
              case "::placeholder":
                return Po([ci(t, {
                  props: [Ae(i, /:(plac\w+)/, ":" + me + "input-$1")]
                }), ci(t, {
                  props: [Ae(i, /:(plac\w+)/, ":" + $a + "$1")]
                }), ci(t, {
                  props: [Ae(i, /:(plac\w+)/, st + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, cE = [lE], uE = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var N = v.getAttribute("data-emotion");
      N.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || cE, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var N = v.getAttribute("data-emotion").split(" "), p = 1; p < N.length; p++)
        i[N[p]] = !0;
      a.push(v);
    }
  );
  var l, c = [sE, aE];
  {
    var u, f = [eE, nE(function(v) {
      u.insert(v);
    })], m = tE(c.concat(o, f)), y = function(N) {
      return Po(_T(N), m);
    };
    l = function(N, p, A, h) {
      u = A, y(N ? N + "{" + p.styles + "}" : p.styles), h && (g.inserted[p.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new HT({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(a), g;
}, jy = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve = typeof Symbol == "function" && Symbol.for, Qf = Ve ? Symbol.for("react.element") : 60103, Uf = Ve ? Symbol.for("react.portal") : 60106, Il = Ve ? Symbol.for("react.fragment") : 60107, zl = Ve ? Symbol.for("react.strict_mode") : 60108, Ll = Ve ? Symbol.for("react.profiler") : 60114, Ml = Ve ? Symbol.for("react.provider") : 60109, Rl = Ve ? Symbol.for("react.context") : 60110, jf = Ve ? Symbol.for("react.async_mode") : 60111, Hl = Ve ? Symbol.for("react.concurrent_mode") : 60111, Fl = Ve ? Symbol.for("react.forward_ref") : 60112, Ql = Ve ? Symbol.for("react.suspense") : 60113, dE = Ve ? Symbol.for("react.suspense_list") : 60120, Ul = Ve ? Symbol.for("react.memo") : 60115, jl = Ve ? Symbol.for("react.lazy") : 60116, fE = Ve ? Symbol.for("react.block") : 60121, pE = Ve ? Symbol.for("react.fundamental") : 60117, mE = Ve ? Symbol.for("react.responder") : 60118, AE = Ve ? Symbol.for("react.scope") : 60119;
function zt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Qf:
        switch (e = e.type, e) {
          case jf:
          case Hl:
          case Il:
          case Ll:
          case zl:
          case Ql:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Rl:
              case Fl:
              case jl:
              case Ul:
              case Ml:
                return e;
              default:
                return t;
            }
        }
      case Uf:
        return t;
    }
  }
}
function Gy(e) {
  return zt(e) === Hl;
}
ye.AsyncMode = jf;
ye.ConcurrentMode = Hl;
ye.ContextConsumer = Rl;
ye.ContextProvider = Ml;
ye.Element = Qf;
ye.ForwardRef = Fl;
ye.Fragment = Il;
ye.Lazy = jl;
ye.Memo = Ul;
ye.Portal = Uf;
ye.Profiler = Ll;
ye.StrictMode = zl;
ye.Suspense = Ql;
ye.isAsyncMode = function(e) {
  return Gy(e) || zt(e) === jf;
};
ye.isConcurrentMode = Gy;
ye.isContextConsumer = function(e) {
  return zt(e) === Rl;
};
ye.isContextProvider = function(e) {
  return zt(e) === Ml;
};
ye.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qf;
};
ye.isForwardRef = function(e) {
  return zt(e) === Fl;
};
ye.isFragment = function(e) {
  return zt(e) === Il;
};
ye.isLazy = function(e) {
  return zt(e) === jl;
};
ye.isMemo = function(e) {
  return zt(e) === Ul;
};
ye.isPortal = function(e) {
  return zt(e) === Uf;
};
ye.isProfiler = function(e) {
  return zt(e) === Ll;
};
ye.isStrictMode = function(e) {
  return zt(e) === zl;
};
ye.isSuspense = function(e) {
  return zt(e) === Ql;
};
ye.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Il || e === Hl || e === Ll || e === zl || e === Ql || e === dE || typeof e == "object" && e !== null && (e.$$typeof === jl || e.$$typeof === Ul || e.$$typeof === Ml || e.$$typeof === Rl || e.$$typeof === Fl || e.$$typeof === pE || e.$$typeof === mE || e.$$typeof === AE || e.$$typeof === fE);
};
ye.typeOf = zt;
jy.exports = ye;
var hE = jy.exports, Ky = hE, gE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, yE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Yy = {};
Yy[Ky.ForwardRef] = gE;
Yy[Ky.Memo] = yE;
var vE = !0;
function Zy(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Gf = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  vE === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Kf = function(t, n, r) {
  Gf(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function wE(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
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
var CE = {
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
}, TE = !1, EE = /[A-Z]|^ms/g, kE = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Xy = function(t) {
  return t.charCodeAt(1) === 45;
}, sA = function(t) {
  return t != null && typeof t != "boolean";
}, eu = /* @__PURE__ */ Qy(function(e) {
  return Xy(e) ? e : e.replace(EE, "-$&").toLowerCase();
}), aA = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(kE, function(r, o, i) {
          return yn = {
            name: o,
            styles: i,
            next: yn
          }, o;
        });
  }
  return CE[t] !== 1 && !Xy(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, bE = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function _i(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return yn = {
          name: o.name,
          styles: o.styles,
          next: yn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            yn = {
              name: s.name,
              styles: s.styles,
              next: yn
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return SE(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = yn, c = n(e);
        return yn = l, _i(e, t, c);
      }
      break;
    }
  }
  var u = n;
  if (t == null)
    return u;
  var f = t[u];
  return f !== void 0 ? f : u;
}
function SE(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += _i(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : sA(a) && (r += eu(i) + ":" + aA(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && TE)
          throw new Error(bE);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            sA(s[l]) && (r += eu(i) + ":" + aA(i, s[l]) + ";");
        else {
          var c = _i(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += eu(i) + ":" + c + ";";
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
var lA = /label:\s*([^\s;{]+)\s*(;|$)/g, yn;
function Gl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  yn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += _i(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += _i(n, t, e[a]), r) {
      var l = i;
      o += l[a];
    }
  lA.lastIndex = 0;
  for (var c = "", u; (u = lA.exec(o)) !== null; )
    c += "-" + u[1];
  var f = wE(o) + c;
  return {
    name: f,
    styles: o,
    next: yn
  };
}
var PE = function(t) {
  return t();
}, Wy = Cu["useInsertionEffect"] ? Cu["useInsertionEffect"] : !1, Vy = Wy || PE, cA = Wy || C.useLayoutEffect, NE = !1, Jy = /* @__PURE__ */ C.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ uE({
    key: "css"
  }) : null
);
Jy.Provider;
var Yf = function(t) {
  return /* @__PURE__ */ C.forwardRef(function(n, r) {
    var o = C.useContext(Jy);
    return t(n, o, r);
  });
}, hs = /* @__PURE__ */ C.createContext({}), Zf = {}.hasOwnProperty, hd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", DE = function(t, n) {
  var r = {};
  for (var o in n)
    Zf.call(n, o) && (r[o] = n[o]);
  return r[hd] = t, r;
}, xE = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Gf(n, r, o), Vy(function() {
    return Kf(n, r, o);
  }), null;
}, BE = /* @__PURE__ */ Yf(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[hd], i = [r], s = "";
  typeof e.className == "string" ? s = Zy(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = Gl(i, void 0, C.useContext(hs));
  s += t.key + "-" + a.name;
  var l = {};
  for (var c in e)
    Zf.call(e, c) && c !== "css" && c !== hd && !NE && (l[c] = e[c]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(xE, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ C.createElement(o, l));
}), OE = BE, tu = { exports: {} }, uA;
function IE() {
  return uA || (uA = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var o = arguments[r];
          for (var i in o)
            ({}).hasOwnProperty.call(o, i) && (n[i] = o[i]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(tu)), tu.exports;
}
IE();
var dA = function(t, n) {
  var r = arguments;
  if (n == null || !Zf.call(n, "css"))
    return C.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = OE, i[1] = DE(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return C.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(dA || (dA = {}));
var zE = /* @__PURE__ */ Yf(function(e, t) {
  var n = e.styles, r = Gl([n], void 0, C.useContext(hs)), o = C.useRef();
  return cA(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), cA(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Kf(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
}), LE = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ME = /* @__PURE__ */ Qy(
  function(e) {
    return LE.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), RE = !1, HE = ME, FE = function(t) {
  return t !== "theme";
}, fA = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? HE : FE;
}, pA = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, QE = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Gf(n, r, o), Vy(function() {
    return Kf(n, r, o);
  }), null;
}, UE = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = pA(t, n, r), l = a || fA(o), c = !l("as");
  return function() {
    var u = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      f.push.apply(f, u);
    else {
      var m = u[0];
      f.push(m[0]);
      for (var y = u.length, g = 1; g < y; g++)
        f.push(u[g], m[g]);
    }
    var v = Yf(function(N, p, A) {
      var h = c && N.as || o, P = "", O = [], k = N;
      if (N.theme == null) {
        k = {};
        for (var T in N)
          k[T] = N[T];
        k.theme = C.useContext(hs);
      }
      typeof N.className == "string" ? P = Zy(p.registered, O, N.className) : N.className != null && (P = N.className + " ");
      var S = Gl(f.concat(O), p.registered, k);
      P += p.key + "-" + S.name, s !== void 0 && (P += " " + s);
      var H = c && a === void 0 ? fA(h) : l, D = {};
      for (var L in N)
        c && L === "as" || H(L) && (D[L] = N[L]);
      return D.className = P, A && (D.ref = A), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(QE, {
        cache: p,
        serialized: S,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ C.createElement(h, D));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = f, v.__emotion_forwardProp = a, Object.defineProperty(v, "toString", {
      value: function() {
        return s === void 0 && RE ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), v.withComponent = function(N, p) {
      var A = e(N, tt({}, n, p, {
        shouldForwardProp: pA(v, p, !0)
      }));
      return A.apply(void 0, f);
    }, v;
  };
}, jE = [
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
], mA = UE.bind(null);
jE.forEach(function(e) {
  mA[e] = mA(e);
});
function GE(e) {
  return e == null || Object.keys(e).length === 0;
}
function KE(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ d(zE, {
    styles: typeof t == "function" ? (o) => t(GE(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const AA = [];
function YE(e) {
  return AA[0] = e, Gl(AA);
}
function oo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function qy(e) {
  if (/* @__PURE__ */ C.isValidElement(e) || !oo(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = qy(e[n]);
  }), t;
}
function el(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? tt({}, e) : e;
  return oo(e) && oo(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ C.isValidElement(t[o]) ? r[o] = t[o] : oo(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && oo(e[o]) ? r[o] = el(e[o], t[o], n) : n.clone ? r[o] = oo(t[o]) ? qy(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const ZE = ["values", "unit", "step"], XE = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => tt({}, n, {
    [r.key]: r.val
  }), {});
};
function WE(e) {
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
  } = e, o = Dl(e, ZE), i = XE(t), s = Object.keys(i);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function c(m, y) {
    const g = s.indexOf(y);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : y) - r / 100}${n})`;
  }
  function u(m) {
    return s.indexOf(m) + 1 < s.length ? c(m, s[s.indexOf(m) + 1]) : a(m);
  }
  function f(m) {
    const y = s.indexOf(m);
    return y === 0 ? a(s[1]) : y === s.length - 1 ? l(s[y]) : c(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return tt({
    keys: s,
    values: i,
    up: a,
    down: l,
    between: c,
    only: u,
    not: f,
    unit: n
  }, o);
}
const VE = {
  borderRadius: 4
}, JE = VE;
function xi(e, t) {
  return t ? el(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Xf = {
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
}, hA = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Xf[e]}px)`
};
function Rn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || hA;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || hA;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Xf).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function qE(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function gA(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function _y(e) {
  if (typeof e != "string")
    throw new Error(zT(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Kl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function tl(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Kl(e, n) || r, t && (o = t(o, r, e)), o;
}
function Le(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, c = Kl(l, r) || {};
    return Rn(s, a, (f) => {
      let m = tl(c, o, f);
      return f === m && typeof f == "string" && (m = tl(c, o, `${t}${f === "default" ? "" : _y(f)}`, f)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function _E(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const $E = {
  m: "margin",
  p: "padding"
}, e1 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, yA = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, t1 = _E((e) => {
  if (e.length > 2)
    if (yA[e])
      e = yA[e];
    else
      return [e];
  const [t, n] = e.split(""), r = $E[t], o = e1[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Wf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Vf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Wf, ...Vf];
function gs(e, t, n, r) {
  var o;
  const i = (o = Kl(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function $y(e) {
  return gs(e, "spacing", 8);
}
function ys(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function n1(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = ys(t, n), r), {});
}
function r1(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = t1(n), i = n1(o, r), s = e[n];
  return Rn(e, s, i);
}
function ev(e, t) {
  const n = $y(e.theme);
  return Object.keys(e).map((r) => r1(e, t, r, n)).reduce(xi, {});
}
function Be(e) {
  return ev(e, Wf);
}
Be.propTypes = {};
Be.filterProps = Wf;
function Oe(e) {
  return ev(e, Vf);
}
Oe.propTypes = {};
Oe.filterProps = Vf;
function o1(e = 8) {
  if (e.mui)
    return e;
  const t = $y({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function Yl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? xi(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Ht(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Zt(e, t) {
  return Le({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const i1 = Zt("border", Ht), s1 = Zt("borderTop", Ht), a1 = Zt("borderRight", Ht), l1 = Zt("borderBottom", Ht), c1 = Zt("borderLeft", Ht), u1 = Zt("borderColor"), d1 = Zt("borderTopColor"), f1 = Zt("borderRightColor"), p1 = Zt("borderBottomColor"), m1 = Zt("borderLeftColor"), A1 = Zt("outline", Ht), h1 = Zt("outlineColor"), Zl = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = gs(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: ys(t, r)
    });
    return Rn(e, e.borderRadius, n);
  }
  return null;
};
Zl.propTypes = {};
Zl.filterProps = ["borderRadius"];
Yl(i1, s1, a1, l1, c1, u1, d1, f1, p1, m1, Zl, A1, h1);
const Xl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = gs(e.theme, "spacing", 8), n = (r) => ({
      gap: ys(t, r)
    });
    return Rn(e, e.gap, n);
  }
  return null;
};
Xl.propTypes = {};
Xl.filterProps = ["gap"];
const Wl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = gs(e.theme, "spacing", 8), n = (r) => ({
      columnGap: ys(t, r)
    });
    return Rn(e, e.columnGap, n);
  }
  return null;
};
Wl.propTypes = {};
Wl.filterProps = ["columnGap"];
const Vl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = gs(e.theme, "spacing", 8), n = (r) => ({
      rowGap: ys(t, r)
    });
    return Rn(e, e.rowGap, n);
  }
  return null;
};
Vl.propTypes = {};
Vl.filterProps = ["rowGap"];
const g1 = Le({
  prop: "gridColumn"
}), y1 = Le({
  prop: "gridRow"
}), v1 = Le({
  prop: "gridAutoFlow"
}), w1 = Le({
  prop: "gridAutoColumns"
}), C1 = Le({
  prop: "gridAutoRows"
}), T1 = Le({
  prop: "gridTemplateColumns"
}), E1 = Le({
  prop: "gridTemplateRows"
}), k1 = Le({
  prop: "gridTemplateAreas"
}), b1 = Le({
  prop: "gridArea"
});
Yl(Xl, Wl, Vl, g1, y1, v1, w1, C1, T1, E1, k1, b1);
function No(e, t) {
  return t === "grey" ? t : e;
}
const S1 = Le({
  prop: "color",
  themeKey: "palette",
  transform: No
}), P1 = Le({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: No
}), N1 = Le({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: No
});
Yl(S1, P1, N1);
function St(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const D1 = Le({
  prop: "width",
  transform: St
}), Jf = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Xf[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: St(n)
      };
    };
    return Rn(e, e.maxWidth, t);
  }
  return null;
};
Jf.filterProps = ["maxWidth"];
const x1 = Le({
  prop: "minWidth",
  transform: St
}), B1 = Le({
  prop: "height",
  transform: St
}), O1 = Le({
  prop: "maxHeight",
  transform: St
}), I1 = Le({
  prop: "minHeight",
  transform: St
});
Le({
  prop: "size",
  cssProperty: "width",
  transform: St
});
Le({
  prop: "size",
  cssProperty: "height",
  transform: St
});
const z1 = Le({
  prop: "boxSizing"
});
Yl(D1, Jf, x1, B1, O1, I1, z1);
const L1 = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ht
  },
  borderTop: {
    themeKey: "borders",
    transform: Ht
  },
  borderRight: {
    themeKey: "borders",
    transform: Ht
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ht
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ht
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
    transform: Ht
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Zl
  },
  // palette
  color: {
    themeKey: "palette",
    transform: No
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: No
  },
  backgroundColor: {
    themeKey: "palette",
    transform: No
  },
  // spacing
  p: {
    style: Oe
  },
  pt: {
    style: Oe
  },
  pr: {
    style: Oe
  },
  pb: {
    style: Oe
  },
  pl: {
    style: Oe
  },
  px: {
    style: Oe
  },
  py: {
    style: Oe
  },
  padding: {
    style: Oe
  },
  paddingTop: {
    style: Oe
  },
  paddingRight: {
    style: Oe
  },
  paddingBottom: {
    style: Oe
  },
  paddingLeft: {
    style: Oe
  },
  paddingX: {
    style: Oe
  },
  paddingY: {
    style: Oe
  },
  paddingInline: {
    style: Oe
  },
  paddingInlineStart: {
    style: Oe
  },
  paddingInlineEnd: {
    style: Oe
  },
  paddingBlock: {
    style: Oe
  },
  paddingBlockStart: {
    style: Oe
  },
  paddingBlockEnd: {
    style: Oe
  },
  m: {
    style: Be
  },
  mt: {
    style: Be
  },
  mr: {
    style: Be
  },
  mb: {
    style: Be
  },
  ml: {
    style: Be
  },
  mx: {
    style: Be
  },
  my: {
    style: Be
  },
  margin: {
    style: Be
  },
  marginTop: {
    style: Be
  },
  marginRight: {
    style: Be
  },
  marginBottom: {
    style: Be
  },
  marginLeft: {
    style: Be
  },
  marginX: {
    style: Be
  },
  marginY: {
    style: Be
  },
  marginInline: {
    style: Be
  },
  marginInlineStart: {
    style: Be
  },
  marginInlineEnd: {
    style: Be
  },
  marginBlock: {
    style: Be
  },
  marginBlockStart: {
    style: Be
  },
  marginBlockEnd: {
    style: Be
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
    style: Xl
  },
  rowGap: {
    style: Vl
  },
  columnGap: {
    style: Wl
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
    transform: St
  },
  maxWidth: {
    style: Jf
  },
  minWidth: {
    transform: St
  },
  height: {
    transform: St
  },
  maxHeight: {
    transform: St
  },
  minHeight: {
    transform: St
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
}, tv = L1;
function M1(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function R1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function H1() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, a = i[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: l = n,
      themeKey: c,
      transform: u,
      style: f
    } = a;
    if (r == null)
      return null;
    if (c === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Kl(o, c) || {};
    return f ? f(s) : Rn(s, r, (g) => {
      let v = tl(m, u, g);
      return g === v && typeof g == "string" && (v = tl(m, u, `${n}${g === "default" ? "" : _y(g)}`, g)), l === !1 ? v : {
        [l]: v
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {},
      nested: s
    } = n || {};
    if (!o)
      return null;
    const a = (r = i.unstable_sxConfig) != null ? r : tv;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const f = qE(i.breakpoints), m = Object.keys(f);
      let y = f;
      return Object.keys(u).forEach((g) => {
        const v = R1(u[g], i);
        if (v != null)
          if (typeof v == "object")
            if (a[g])
              y = xi(y, e(g, v, i, a));
            else {
              const N = Rn({
                theme: i
              }, v, (p) => ({
                [g]: p
              }));
              M1(N, v) ? y[g] = t({
                sx: v,
                theme: i,
                nested: !0
              }) : y = xi(y, N);
            }
          else
            y = xi(y, e(g, v, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": gA(m, y)
      } : gA(m, y);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const nv = H1();
nv.filterProps = ["sx"];
const F1 = nv;
function Q1(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const U1 = ["breakpoints", "palette", "spacing", "shape"];
function j1(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = Dl(e, U1), a = WE(n), l = o1(o);
  let c = el({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: tt({
      mode: "light"
    }, r),
    spacing: l,
    shape: tt({}, JE, i)
  }, s);
  return c.applyStyles = Q1, c = t.reduce((u, f) => el(u, f), c), c.unstable_sxConfig = tt({}, tv, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(f) {
    return F1({
      sx: f,
      theme: this
    });
  }, c;
}
function G1(e) {
  return Object.keys(e).length === 0;
}
function qf(e = null) {
  const t = C.useContext(hs);
  return !t || G1(t) ? e : t;
}
const K1 = j1();
function Y1(e = K1) {
  return qf(e);
}
function nu(e) {
  const t = YE(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Z1({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Y1(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => nu(typeof s == "function" ? s(o) : s)) : i = nu(i)), /* @__PURE__ */ d(KE, {
    styles: i
  });
}
const X1 = typeof window < "u" ? C.useLayoutEffect : C.useEffect, W1 = X1;
let vA = 0;
function V1(e) {
  const [t, n] = C.useState(e), r = e || t;
  return C.useEffect(() => {
    t == null && (vA += 1, n(`mui-${vA}`));
  }, [t]), r;
}
const wA = Cu["useId".toString()];
function J1(e) {
  if (wA !== void 0) {
    const t = wA();
    return e ?? t;
  }
  return V1(e);
}
const q1 = /* @__PURE__ */ C.createContext(null), rv = q1;
function ov() {
  return C.useContext(rv);
}
const _1 = typeof Symbol == "function" && Symbol.for, $1 = _1 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ek(e, t) {
  return typeof t == "function" ? t(e) : tt({}, e, t);
}
function tk(e) {
  const {
    children: t,
    theme: n
  } = e, r = ov(), o = C.useMemo(() => {
    const i = r === null ? n : ek(r, n);
    return i != null && (i[$1] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ d(rv.Provider, {
    value: o,
    children: t
  });
}
const nk = ["value"], rk = /* @__PURE__ */ C.createContext();
function ok(e) {
  let {
    value: t
  } = e, n = Dl(e, nk);
  return /* @__PURE__ */ d(rk.Provider, tt({
    value: t ?? !0
  }, n));
}
const ik = /* @__PURE__ */ C.createContext(void 0);
function sk({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ d(ik.Provider, {
    value: e,
    children: t
  });
}
function ak(e) {
  const t = qf(), n = J1() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, W1(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const s = i.firstChild;
    if (o) {
      var a;
      if (s && (a = s.hasAttribute) != null && a.call(s, "data-mui-layer-order") && s.getAttribute("data-mui-layer-order") === n)
        return;
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", n), c.textContent = o, i.prepend(c);
    } else {
      var l;
      (l = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || l.remove();
    }
  }, [o, n]), o ? /* @__PURE__ */ d(Z1, {
    styles: o
  }) : null;
}
const CA = {};
function TA(e, t, n, r = !1) {
  return C.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? tt({}, t, {
        [e]: i
      }) : i;
      return r ? () => s : s;
    }
    return e ? tt({}, t, {
      [e]: n
    }) : tt({}, t, n);
  }, [e, t, n, r]);
}
function lk(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = qf(CA), i = ov() || CA, s = TA(r, o, n), a = TA(r, i, n, !0), l = s.direction === "rtl", c = ak(s);
  return /* @__PURE__ */ d(tk, {
    theme: a,
    children: /* @__PURE__ */ d(hs.Provider, {
      value: s,
      children: /* @__PURE__ */ d(ok, {
        value: l,
        children: /* @__PURE__ */ E(sk, {
          value: s == null ? void 0 : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const ck = ["theme"];
function uk(e) {
  let {
    theme: t
  } = e, n = Dl(e, ck);
  const r = t[nA];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = tt({}, r, {
    vars: null
  }) : t && !t.vars && (o = tt({}, t, {
    vars: null
  }))), /* @__PURE__ */ d(lk, tt({}, n, {
    themeId: r ? nA : void 0,
    theme: o
  }));
}
const gd = "[CHMarketingBuilder]", dk = {
  info: "color:#1565c0;font-weight:bold",
  resolved: "color:#2e7d32;font-weight:bold",
  missing: "color:#e65100;font-weight:bold",
  fallback: "color:#f57c00;font-weight:bold",
  error: "color:#c62828;font-weight:bold"
}, iv = {
  info: "INFO",
  resolved: "OK",
  missing: "MISSING",
  fallback: "FALLBACK",
  error: "ERROR"
};
let Bi = [];
function fk(e) {
  return e instanceof Error ? e.message : e == null ? "" : String(e);
}
function pk(e, t, n, r) {
  const o = iv[e], i = dk[e];
  console.log(r ? `%c${gd} %c${o}%c ${t}: ${n}
  → ${r}` : `%c${gd} %c${o}%c ${t}: ${n}`, "font-weight:bold", i, "color:inherit");
}
function mk() {
  Bi = [];
}
function vs(e, t, n, r) {
  const o = fk(n);
  Bi.push({ level: e, resource: t, detail: o, hint: r }), pk(e, t, o, r);
}
function ge(e, t) {
  vs("info", e, t);
}
function q(e, t) {
  vs("resolved", e, t);
}
function We(e, t, n) {
  vs("missing", e, t, n);
}
function Ak(e, t, n) {
  vs("fallback", e, t, n);
}
function Nn(e, t, n) {
  vs("error", e, t, n);
}
function EA(e) {
  const t = Bi.filter((n) => n.level !== "resolved" && n.level !== "info");
  console.groupCollapsed(
    `%c${gd} Load summary — ${e.builderMode} builder (${t.length} note${t.length === 1 ? "" : "s"})`,
    "color:#1565c0;font-weight:bold"
  ), console.table({
    "Builder mode": e.builderMode,
    Template: e.templateName ? `${e.templateName} (${e.templateId})` : e.templateId,
    "Marketing asset": e.marketingAssetId,
    "Brand kit": e.brandKitId,
    Channel: e.channelType,
    Zones: e.zoneCount,
    "Zone values": e.zoneValueCount,
    "Dummy template": e.usedDummyTemplate ? "yes" : "no",
    "Dummy brand kit": e.usedDummyBrandKit ? "yes" : "no",
    "Dummy zones": e.usedDummyZones ? "yes" : "no"
  }), Bi.length > 0 && console.table(
    Bi.map((n) => ({
      Level: iv[n.level],
      Resource: n.resource,
      Detail: n.detail,
      Hint: n.hint ?? ""
    }))
  ), console.groupEnd();
}
function Fr(e) {
  if (typeof e != "string" || !e.trim())
    return;
  const t = e.match(/\/entities\/(\d+)(?:\?|$|\/)/);
  if (!t)
    return;
  const n = Number(t[1]);
  return Number.isFinite(n) ? n : void 0;
}
function Qr(e) {
  if (!Array.isArray(e))
    return [];
  const t = [];
  for (const n of e) {
    if (typeof n == "number" && Number.isFinite(n)) {
      t.push(n);
      continue;
    }
    if (n == null || typeof n != "object")
      continue;
    const r = n;
    if (typeof r.id == "number" && Number.isFinite(r.id)) {
      t.push(r.id);
      continue;
    }
    if (typeof r.entityId == "number" && Number.isFinite(r.entityId)) {
      t.push(r.entityId);
      continue;
    }
    const o = Fr(r.href) ?? Fr(r.entity);
    o != null && t.push(o);
  }
  return t;
}
function Jl(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = t.id ?? t.entityId;
  if (typeof n == "number" && Number.isFinite(n))
    return [n];
  const r = t.parent;
  if (r != null && typeof r == "object") {
    const s = r, a = Fr(s.href) ?? Fr(s.entity);
    if (a != null)
      return [a];
  }
  const o = Qr(t.parents);
  if (o.length > 0)
    return o;
  const i = Qr(t.children);
  return i.length > 0 ? i : [];
}
function ut(e, t) {
  if (!e)
    return;
  const n = e[t];
  if (n != null) {
    if (typeof n == "string" && n.trim())
      return n.trim();
    if (typeof n == "object" && !Array.isArray(n)) {
      const r = n, o = r.href ?? r.self;
      if (typeof o == "string" && o.trim())
        return o.trim();
      if (o != null && typeof o == "object") {
        const i = o.href;
        if (typeof i == "string" && i.trim())
          return i.trim();
      }
    }
  }
}
function _f(e, ...t) {
  if (!e)
    return [];
  for (const n of t) {
    const r = e[n];
    if (r != null) {
      if (Array.isArray(r)) {
        const o = Qr(r);
        if (o.length > 0)
          return o;
        continue;
      }
      if (typeof r == "object") {
        const o = Jl(r);
        if (o.length > 0)
          return o;
      }
    }
  }
  return [];
}
function kt(e, t) {
  return e ? Object.keys(e).filter((n) => t.test(n)) : [];
}
async function ln(e, t, n, r) {
  var s;
  const o = _f(r, n);
  if (o.length > 0)
    return o;
  if (!((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    return [];
  const i = ut(r, n);
  if (!i)
    return [];
  try {
    const a = await e.raw.getAsync(i);
    return !a.isSuccessStatusCode || a.content == null ? [] : Jl(a.content);
  } catch {
    return [];
  }
}
async function $i(e, t, n, r) {
  const o = [...new Set(r)];
  for (const i of o) {
    const s = await ln(e, t, i, n);
    if (s.length > 0)
      return { ids: s, relationName: i };
  }
  return { ids: [] };
}
function $n(e, t) {
  const n = e.related_paths;
  if (n == null || typeof n != "object")
    return "";
  const r = n[t];
  if (!Array.isArray(r) || r.length === 0)
    return "";
  const o = r[0];
  if (!Array.isArray(o) || o.length === 0)
    return "";
  const i = o[0];
  if (i == null || typeof i != "object")
    return "";
  const s = i.values;
  if (s == null || typeof s != "object" || Array.isArray(s))
    return "";
  for (const a of Object.values(s))
    if (typeof a == "string" && a.trim())
      return a.trim();
  return "";
}
const hk = ["social", "email", "admin"], es = [
  "templateToZone",
  "templateToTemplateZone",
  "TemplateToZone",
  "TemplateToTemplateZone",
  "EPAM.TemplateToZone",
  "EPAM.TemplateToTemplateZone",
  "templateToEPAM.TemplateZone",
  "EPAM.TemplateZone",
  "TemplateZone"
], nl = [
  "templateZoneToTemplate",
  "zoneToTemplate",
  "TemplateZoneToTemplate",
  "EPAM.TemplateZoneToTemplate",
  "EPAM.TemplateToTemplateZone",
  "templateToTemplate"
], gk = [
  "marketingAssetToTemplate",
  "MarketingAssetToTemplate",
  "EPAM.MarketingAssetToTemplate"
], sv = [
  "templateZoneToAllowedAsset",
  "TemplateZoneToAllowedAsset",
  "EPAM.TemplateZoneToAllowedAsset",
  "templateZoneToAsset",
  "TemplateZoneToAsset",
  "EPAM.TemplateZoneToAsset"
], av = [
  "templateToAllowedAsset",
  "TemplateToAllowedAsset",
  "EPAM.TemplateToAllowedAsset",
  "templateToAsset",
  "TemplateToAsset",
  "EPAM.TemplateToAsset"
], yk = [
  "zoneType",
  "ZoneType",
  "EPAM.ZoneType",
  "templateZoneType",
  "TemplateZoneType",
  "EPAM.TemplateZoneType"
], lv = [
  "zoneValueToSelectedAsset",
  "ZoneValueToSelectedAsset",
  "EPAM.MarketingAssetZoneValueToSelectedAsset",
  "marketingAssetZoneValueToSelectedAsset",
  "zoneValueToAsset",
  "ZoneValueToAsset"
];
function kA(e) {
  if (typeof e == "string")
    return e.trim() || void 0;
  if (e != null && typeof e == "object" && !Array.isArray(e)) {
    const t = e;
    if (typeof t.Invariant == "string" && t.Invariant.trim())
      return t.Invariant.trim();
    for (const n of Object.values(t))
      if (typeof n == "string" && n.trim())
        return n.trim();
  }
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
}
function bA(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
  if (typeof e == "string")
    return e.trim() || void 0;
}
function cv(e) {
  if (!e || typeof e != "object")
    return;
  const t = e, n = t.systemProperties && typeof t.systemProperties == "object" ? t.systemProperties : null;
  return bA(n == null ? void 0 : n.id) || bA(t.id);
}
function vk(e, ...t) {
  if (!e || typeof e != "object")
    return;
  const n = e.relations;
  if (!n || typeof n != "object")
    return;
  const r = _f(n, ...t);
  if (r[0] != null)
    return String(r[0]);
}
function SA(e) {
  if (!(e != null && e.trim()) || !/^\d+$/.test(e.trim()))
    return;
  const t = Number(e.trim());
  return Number.isFinite(t) && t > 0 ? t : void 0;
}
function PA(e) {
  if (typeof e == "boolean")
    return e;
  if (typeof e == "string") {
    const t = e.trim().toLowerCase();
    if (t === "true" || t === "1" || t === "yes")
      return !0;
    if (t === "false" || t === "0" || t === "no")
      return !1;
  }
}
function NA(e) {
  if (typeof e != "string")
    return;
  const t = e.trim().toLowerCase();
  return hk.includes(t) ? t : void 0;
}
function $f(e, t) {
  if (!(!e || typeof e != "object" || Array.isArray(e)))
    return e[t];
}
function DA(e, t, n) {
  const r = $f(t, e), o = PA(r);
  if (o !== void 0)
    return o;
  const i = uv(n);
  if (i)
    return PA(i[e]);
}
function uv(e) {
  if (e != null) {
    if (typeof e == "string") {
      const t = e.trim();
      if (!t)
        return;
      try {
        const n = JSON.parse(t);
        if (n && typeof n == "object" && !Array.isArray(n))
          return n;
      } catch {
        return;
      }
      return;
    }
    if (typeof e == "object" && !Array.isArray(e))
      return e;
  }
}
function gt(e, t, n) {
  const r = $f(t, e), o = kA(r);
  if (o)
    return o;
  const i = uv(n);
  if (i)
    return kA(i[e]);
}
function wk(e, t, n) {
  const r = NA($f(e, "builderMode")) ?? NA(gt("builderMode", e, n)), o = gt("templateId", e, n) || vk(t, "marketingAssetToTemplate"), i = cv(t);
  return {
    builderMode: r,
    brandKitId: gt("brandKitId", e, n),
    templateId: o,
    marketingAssetId: i,
    userHasOverridePermission: DA("userHasOverridePermission", e, n) ?? !1,
    allowTemplateZoneEditing: DA("allowTemplateZoneEditing", e, n) ?? !1,
    renderEmailApiUrl: gt("renderEmailApiUrl", e, n) || "/api/render-email-html",
    contentHubProxyBase: gt("contentHubProxyBase", e, n) || "/api/content-hub",
    html2canvasCdnUrl: gt("html2canvasCdnUrl", e, n),
    figmaImportApiUrl: gt("figmaImportApiUrl", e, n) || "/api/figma/import",
    figmaImportApiToken: gt("figmaImportApiToken", e, n),
    designerDocumentProperty: gt("designerDocumentProperty", e, n),
    designerInstanceProperty: gt("designerInstanceProperty", e, n),
    searchIdentifier: gt("searchIdentifier", e, n),
    searchComponentId: SA(gt("searchComponentId", e, n)) ?? SA(gt("searchIdentifier", e, n)),
    selectionPoolIdentifier: gt("selectionPoolIdentifier", e, n)
  };
}
function ur() {
  return "An entity ID is needed. Save this record in Content Hub first, then reload the page.";
}
function Ck(e, t) {
  if (!cv(e))
    return ur();
  if (e && typeof e == "object") {
    const n = e.relations;
    if (n && typeof n == "object") {
      const r = n.marketingAssetToTemplate;
      if (Array.isArray(r) && r.length === 0)
        return "This marketing asset has no template linked yet. Set the marketingAssetToTemplate relation on this record in Content Hub, or set templateId in the External component Configuration.";
    }
  }
  return !t || typeof t != "object" || Array.isArray(t) || Object.keys(t).length === 0 ? "templateId could not be resolved from this entity. Set templateId in Manage > Pages > EPAM.MarketingAsset details page > External component > Configuration, or link a template to the marketing asset." : "templateId is required. Set it in component Configuration or link a template to this marketing asset.";
}
function xA(e, t) {
  if (e.builderMode)
    return e.builderMode;
  const n = t == null ? void 0 : t.trim().toLowerCase();
  return n === "email" || n === "newsletter" ? "email" : "social";
}
const BA = /* @__PURE__ */ new Map(), Tk = ["EPAM.Template", "Template"], Ek = ["EPAM.TemplateZone", "TemplateZone"];
function kk(e) {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
}
function dv(e) {
  if (e == null || typeof e != "object")
    return null;
  const t = e;
  if (Array.isArray(t.member_groups))
    return t;
  const n = t.content;
  return n != null && typeof n == "object" && !Array.isArray(n) ? n : Array.isArray(t.items) && t.items[0] != null && typeof t.items[0] == "object" ? t.items[0] : t;
}
function bk(e) {
  const t = dv(e);
  if (!t)
    return [];
  const n = [], r = t.member_groups;
  if (!Array.isArray(r))
    return n;
  for (const o of r) {
    if (o == null || typeof o != "object")
      continue;
    const i = o.members;
    if (Array.isArray(i))
      for (const s of i) {
        if (s == null || typeof s != "object")
          continue;
        const a = s;
        if (a.type === "Relation")
          continue;
        const l = typeof a.name == "string" ? a.name.trim() : "";
        l && n.push({
          name: l,
          type: typeof a.type == "string" ? a.type : "Unknown",
          isMandatory: !!a.is_mandatory
        });
      }
  }
  return n;
}
async function rl(e, t) {
  var r;
  if (!((r = e == null ? void 0 : e.raw) != null && r.getAsync))
    return [];
  const n = [
    `/api/entitydefinitions/${t}?include=member_groups`,
    `/api/entitydefinitions/${t}`,
    `/api/entitydefinitions/${encodeURIComponent(t)}`
  ];
  for (const o of n)
    try {
      const i = await e.raw.getAsync(o);
      if (!i.isSuccessStatusCode || i.content == null)
        continue;
      const s = bk(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
function Sk(e) {
  const t = dv(e);
  if (!t)
    return [];
  const n = [], r = t.member_groups;
  if (!Array.isArray(r))
    return n;
  for (const o of r) {
    if (o == null || typeof o != "object")
      continue;
    const i = o.members;
    if (Array.isArray(i))
      for (const s of i) {
        if (s == null || typeof s != "object")
          continue;
        const a = s;
        if (a.type !== "Relation")
          continue;
        const l = a.associated_entitydefinition, c = (l == null ? void 0 : l.href) ?? "", u = typeof a.name == "string" ? a.name.trim() : "";
        u && n.push({
          name: u,
          role: typeof a.role == "string" ? a.role : void 0,
          target: c ? kk(c) : void 0
        });
      }
  }
  return n;
}
function Pk(e) {
  if (e == null)
    return [];
  const t = Array.isArray(e) ? e : Array.isArray(e.items) ? e.items : Array.isArray(e.content) ? e.content : [], n = [];
  for (const r of t) {
    if (r == null || typeof r != "object")
      continue;
    const o = r, i = o.systemProperties, s = (i == null ? void 0 : i.id) ?? o.id ?? o.entityId;
    typeof s == "number" && Number.isFinite(s) && n.push(s);
  }
  return n;
}
async function Nk(e, t) {
  var r;
  if (!((r = e == null ? void 0 : e.raw) != null && r.getAsync))
    return [];
  const n = [
    `/api/entitydefinitions/${t}`,
    `/api/entitydefinitions/${t}?include=member_groups`,
    `/api/entitydefinitions/${encodeURIComponent(t)}`
  ];
  for (const o of n)
    try {
      const i = await e.raw.getAsync(o);
      if (!i.isSuccessStatusCode || i.content == null)
        continue;
      const s = Sk(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
async function Dk(e, t) {
  const n = BA.get(t);
  if (n)
    return n;
  const r = await Nk(e, t);
  return BA.set(t, r), r;
}
async function ol(e, t) {
  for (const n of t) {
    const r = await Dk(e, n);
    if (r.length > 0)
      return r;
  }
  return [];
}
async function xk(e) {
  var r, o;
  if (!((r = e == null ? void 0 : e.raw) != null && r.getAsync))
    return [];
  const t = encodeURIComponent("Definition.Name=='EPAM.TemplateZone'"), n = [
    `/api/entities/query?query=${t}&take=1`,
    `/api/entities/query?query=${t}&pageSize=1`
  ];
  for (const i of n)
    try {
      const s = await e.raw.getAsync(i);
      if (!s.isSuccessStatusCode || s.content == null)
        continue;
      const a = Pk(s.content);
      if (a.length === 0)
        continue;
      const l = await e.raw.getAsync(`/api/entities/${a[0]}`);
      if (!l.isSuccessStatusCode || !((o = l.content) != null && o.relations))
        continue;
      return kt(l.content.relations, /template/i).filter(
        (c) => !/collection|asset/i.test(c)
      );
    } catch {
    }
  return [];
}
function yd(e, t) {
  return !!(e && t.test(e));
}
function Bk(e) {
  return yd(e, /(^|\.)Template$/i) && !yd(e, /TemplateZone/i);
}
async function ql(e, t) {
  const [n, r, o] = await Promise.all([
    ol(e, Tk),
    ol(e, Ek),
    xk(e)
  ]), i = n.filter((u) => yd(u.target, /TemplateZone/i)).map((u) => u.name), s = r.filter((u) => Bk(u.target)).map((u) => u.name), a = kt(t, /zone/i).filter(
    (u) => !!ut(t, u)
  ), l = [
    .../* @__PURE__ */ new Set([
      ...a,
      ...i,
      ...kt(t, /zone/i)
    ])
  ], c = [
    .../* @__PURE__ */ new Set([
      ...o,
      ...s,
      ...nl
    ])
  ];
  return l.length === 0 && c.length === nl.length ? console.info(
    "%c[CHMarketingBuilder] INFO template zone relations:",
    "color: #1565c0; font-weight: bold",
    "No template↔zone relation found on EPAM.Template or EPAM.TemplateZone. Create a Parent relation on EPAM.TemplateZone pointing to EPAM.Template in Content Hub Model."
  ) : (c.length > 0 || l.length > 0) && console.info(
    "%c[CHMarketingBuilder] INFO template zone relations:",
    "color: #1565c0; font-weight: bold",
    [
      l.length > 0 ? `template child: ${l.join(", ")}` : null,
      c.length > 0 ? `zone parent: ${c.join(", ")}` : null
    ].filter(Boolean).join(" | ")
  ), { templateChildRelations: l, zoneParentRelations: c };
}
function Ok(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO template ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function Ik(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO zone ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function ep(e, t) {
  const n = e, r = [n.entitydefinition, n.entityDefinition, n.definition];
  for (const o of r) {
    if (o == null || typeof o != "object")
      continue;
    const i = o.href;
    if (typeof i == "string" && i.trim())
      return i.trim();
  }
  if (t != null && t.trim())
    return `/api/entitydefinitions/${t.trim()}`;
  throw new Error("Could not resolve entity definition for Content Hub entity update.");
}
function zk(e, t, n) {
  return {
    entitydefinition: {
      href: ep(e, n)
    },
    properties: t
  };
}
function il(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e;
    if (typeof t.href == "string" && t.href.trim())
      return t.href.trim();
  }
}
function Lk(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = [];
  if (Array.isArray(t.children))
    for (const o of t.children) {
      const i = il(o);
      i && n.push(i);
    }
  const r = il(t.child);
  return r && n.push(r), n;
}
function Mk(e, t) {
  if (e != null && typeof e == "object") {
    const n = il(e.self);
    if (n)
      return n;
  }
  return t;
}
function fv(e, t) {
  if (t) {
    const n = t.match(/^(https?:\/\/[^/]+)/i);
    if (n)
      return `${n[1]}/api/entities/${e}`;
  }
  return `/api/entities/${e}`;
}
async function _l(e, t, n, r) {
  var a;
  const o = ut(r, n), i = `/api/entities/${t}/relations/${n}`, s = o ? [.../* @__PURE__ */ new Set([o, i])] : [i];
  if (!((a = e.raw) != null && a.getAsync) || !o)
    return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
  for (const l of [o])
    try {
      const c = await e.raw.getAsync(l);
      if (!c.isSuccessStatusCode || c.content == null)
        continue;
      const u = Lk(c.content), f = Mk(c.content, l) ?? l;
      return { requestUrls: s, selfHref: f, childHrefs: u };
    } catch {
    }
  return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
}
function pv(e, t) {
  return {
    children: t.map((n) => ({ href: n })),
    self: { href: e }
  };
}
async function ts(e, t, n) {
  var r;
  if (!((r = e.raw) != null && r.putAsync))
    return !1;
  for (const o of [...new Set(t)])
    try {
      if ((await e.raw.putAsync(o, n)).isSuccessStatusCode)
        return !0;
    } catch {
    }
  return !1;
}
async function cn(e, t, n, r, o) {
  var c;
  const i = await _l(e, t, r, o), s = fv(n, i.selfHref), a = [...i.childHrefs];
  a.some((u) => Fr(u) === Number(n)) || a.push(s);
  const l = pv(i.selfHref, a);
  if (await ts(e, [...i.requestUrls, i.selfHref], l))
    return !0;
  if ((c = e.raw) != null && c.postAsync)
    for (const u of i.requestUrls)
      try {
        if ((await e.raw.postAsync(u, l)).isSuccessStatusCode || (await e.raw.postAsync(u, { child: { href: s } })).isSuccessStatusCode)
          return !0;
      } catch {
      }
  return !1;
}
async function Xo(e, t, n, r, o) {
  const i = await _l(e, t, r, o), s = i.childHrefs.filter(
    (l) => Fr(l) !== Number(n)
  );
  if (s.length === i.childHrefs.length)
    return !0;
  const a = pv(i.selfHref, s);
  return ts(e, [...i.requestUrls, i.selfHref], a);
}
async function Ro(e, t, n, r, o) {
  var l;
  const i = await _l(e, t, r, o), s = fv(n, i.selfHref), a = {
    parent: { href: s },
    self: { href: i.selfHref }
  };
  if (await ts(e, [...i.requestUrls, i.selfHref], a))
    return !0;
  if ((l = e.raw) != null && l.postAsync)
    for (const c of i.requestUrls)
      try {
        if ((await e.raw.postAsync(c, a)).isSuccessStatusCode || (await e.raw.postAsync(c, { parent: { href: s } })).isSuccessStatusCode)
          return !0;
      } catch {
      }
  return !1;
}
async function mv(e, t, n, r, o) {
  var l;
  const i = await _l(e, t, r, o), s = ut(o, r) ?? i.selfHref;
  if ((l = e.raw) != null && l.getAsync && ut(o, r))
    try {
      const c = await e.raw.getAsync(s);
      if (c.isSuccessStatusCode && c.content != null) {
        const u = il(
          c.content.parent
        );
        if (!u || Fr(u) !== Number(n))
          return !0;
      }
    } catch {
    }
  const a = {
    parent: null,
    self: { href: i.selfHref }
  };
  return await ts(e, [...i.requestUrls, i.selfHref], a) ? !0 : ts(e, [...i.requestUrls, i.selfHref], {
    self: { href: i.selfHref }
  });
}
function Oi(e, t, n) {
  const r = kt(t, n), o = r.filter((i) => !!ut(t, i));
  return [.../* @__PURE__ */ new Set([...o, ...e, ...r])];
}
function $l(e) {
  if (e.zoneType === "Logo")
    return !0;
  const t = (e.zoneKey ?? "").trim().toLowerCase(), n = (e.zoneLabel ?? "").trim().toLowerCase();
  return t === "logo" || n === "logo";
}
function Rk(e, t) {
  const n = (e ?? "").trim().toLowerCase(), r = (t ?? "").trim().toLowerCase();
  if (n === "logo" || r === "logo")
    return "Logo";
  if (n.includes("hero") || r.includes("hero") || n.includes("image") || r.includes("image"))
    return "Image";
  if (n.includes("headline") || r.includes("headline") || n.includes("heading"))
    return "Heading";
  if (n.includes("cta") || r.includes("cta") || r.includes("learn more") || r.includes("button"))
    return "CTA Button";
  if (n.includes("divider"))
    return "Divider";
  if (n.includes("background"))
    return "Background Color";
  if (n.includes("html"))
    return "HTML";
}
function tp(e, t, n) {
  const r = (e ?? "").trim();
  if (r) {
    const o = [
      "Text",
      "Heading",
      "Image",
      "CTA Button",
      "Logo",
      "Background Color",
      "Divider",
      "HTML"
    ].find((i) => i.toLowerCase() === r.toLowerCase());
    if (o)
      return o;
  }
  return Rk(t, n) ?? "Text";
}
const Hk = ["EPAM.TemplateZone", "TemplateZone"], nn = /* @__PURE__ */ new Map();
let OA = !1, IA = !1, ns = [];
function zA(e, ...t) {
  for (const n of t) {
    const r = e[n];
    if (r != null) {
      if (typeof r == "string" && r.trim())
        return r.trim();
      if (typeof r == "object" && !Array.isArray(r)) {
        const o = r;
        if (typeof o.Invariant == "string" && o.Invariant.trim())
          return o.Invariant.trim();
        if (typeof o.identifier == "string" && o.identifier.trim())
          return o.identifier.trim();
        const i = o.labels ?? o.Labels;
        if (i != null && typeof i == "object" && !Array.isArray(i)) {
          for (const s of Object.values(i))
            if (typeof s == "string" && s.trim())
              return s.trim();
        }
      }
    }
  }
  return "";
}
function ec(e) {
  const t = e.properties ?? {}, n = e, r = Object.keys(t), o = zA(
    t,
    "identifier",
    "Identifier",
    "zoneTypeName",
    "ZoneTypeName",
    "Title",
    "Name",
    "Label",
    "label"
  ) || $n(n, "zoneType") || $n(n, "ZoneType");
  if (o)
    return o;
  for (const i of r) {
    const s = zA(t, i);
    if (s)
      return s;
  }
  return "";
}
function tc(e, t) {
  var o;
  const n = e.trim();
  if (!n || !t)
    return;
  const r = [
    "Text",
    "Heading",
    "Image",
    "CTA Button",
    "Logo",
    "Background Color",
    "Divider",
    "HTML"
  ].find((i) => i.toLowerCase() === n.toLowerCase());
  if (!r) {
    const i = n.toLowerCase().replace(/[\s_-]+/g, ""), s = (o = [
      ["text", "Text"],
      ["heading", "Heading"],
      ["image", "Image"],
      ["ctabutton", "CTA Button"],
      ["cta", "CTA Button"],
      ["logo", "Logo"],
      ["backgroundcolor", "Background Color"],
      ["background", "Background Color"],
      ["divider", "Divider"],
      ["html", "HTML"]
    ].find(([a]) => a === i)) == null ? void 0 : o[1];
    if (!s)
      return;
    nn.has(s) || (nn.set(s, String(t)), ge(
      "template zone type",
      `Mapped taxonomy ${t} → "${s}" (from "${e}")`
    ));
    return;
  }
  nn.has(r) || (nn.set(r, String(t)), ge("template zone type", `Mapped taxonomy ${t} → "${r}" (from "${e}")`));
}
function nc(e) {
  const t = ns.map((n) => n.name);
  return [
    .../* @__PURE__ */ new Set([
      ...t,
      ...yk,
      ...kt(e, /zone.?type/i)
    ])
  ];
}
function Fk(e) {
  return nc(e.relations).some(
    (t) => {
      var n;
      return !!((n = e.relations) != null && n[t]);
    }
  );
}
function Av(e) {
  if (e == null)
    return [];
  const t = Array.isArray(e) ? e : Array.isArray(e.items) ? e.items : Array.isArray(e.content) ? e.content : [], n = [];
  for (const r of t) {
    if (r == null || typeof r != "object")
      continue;
    const o = r, i = o.systemProperties, s = (i == null ? void 0 : i.id) ?? o.id ?? o.entityId;
    typeof s == "number" && Number.isFinite(s) && n.push(s);
  }
  return n;
}
function Qk(e) {
  try {
    const n = ep(e).match(/\/entitydefinitions\/([^/?#]+)/i);
    return n != null && n[1] ? decodeURIComponent(n[1]) : "";
  } catch {
    return "";
  }
}
async function Uk(e, t, n) {
  const r = e.raw;
  if (!(r != null && r.getAsync))
    return 0;
  const o = encodeURIComponent(`Definition.Name=='${n}'`), i = [
    `/api/entities/query?query=${o}&take=100`,
    `/api/entities/query?query=${o}&pageSize=100`
  ];
  for (const s of i)
    try {
      const a = await r.getAsync(s);
      if (!a.isSuccessStatusCode || a.content == null)
        continue;
      const l = Av(a.content);
      for (const c of l) {
        const u = await t(String(c)), f = ec(u);
        f && tc(f, c);
      }
      if (l.length > 0)
        return q(
          "template zone type",
          `Loaded ${l.length} taxonomy item(s) from ${n}; mapped ${nn.size} zone type(s)`
        ), l.length;
    } catch {
    }
  return 0;
}
async function hv(e, t, n) {
  const r = nc(n.relations);
  for (const o of r) {
    const i = await ln(e, "", o, n.relations);
    if (i[0] == null)
      continue;
    const s = await t(String(i[0])), a = ec(s);
    return a && tc(a, i[0]), Qk(s) || void 0;
  }
}
async function np(e) {
  if (ns.length > 0 || !e)
    return;
  ns = (await ol(e, Hk)).filter((n) => /zone.?type/i.test(n.name));
}
async function gv(e, t) {
  var o, i;
  if (IA || !((o = e == null ? void 0 : e.raw) != null && o.getAsync) || OA)
    return;
  OA = !0, await np(e);
  let n = ((i = ns.find((s) => {
    var a;
    return (a = s.target) == null ? void 0 : a.trim();
  })) == null ? void 0 : i.target) ?? "";
  const r = [
    encodeURIComponent("Definition.Name=='EPAM.TemplateZone'"),
    encodeURIComponent("Definition.Name=='TemplateZone'")
  ];
  for (const s of r) {
    for (const a of [
      `/api/entities/query?query=${s}&take=40`,
      `/api/entities/query?query=${s}&pageSize=40`
    ])
      try {
        const l = await e.raw.getAsync(a);
        if (!l.isSuccessStatusCode || l.content == null)
          continue;
        const c = Av(l.content);
        for (const u of c) {
          const f = await t(String(u)), m = await hv(e, t, f);
          m && !n && (n = m);
        }
        if (c.length > 0)
          break;
      } catch {
      }
    if (nn.size > 0)
      break;
  }
  n && await Uk(e, t, n), IA = !0, ge(
    "template zone type",
    `Taxonomy catalog ready: ${[...nn.entries()].map(([s, a]) => `${s}=${a}`).join(", ") || "(empty)"}`
  );
}
async function jk(e, t, n) {
  await np(e);
  for (const r of n)
    await hv(e, t, r);
  nn.size === 0 && await gv(e, t);
}
async function Gk(e, t, n) {
  const r = nn.get(n);
  return r || (await gv(e, t), nn.get(n));
}
function Kk(e) {
  var r;
  const t = ns.find((o) => o.name === e);
  return ((r = t == null ? void 0 : t.role) == null ? void 0 : r.toLowerCase()) !== "parent";
}
async function LA(e, t, n, r) {
  var l;
  if (!((l = e == null ? void 0 : e.raw) != null && l.getAsync))
    return;
  const o = `/api/entities/${n}/relations/${r}`, i = await ln(e, n, r, {
    [r]: { href: o }
  });
  if (i[0] == null)
    return;
  const s = await t(String(i[0])), a = ec(s);
  if (a)
    return tc(a, i[0]), tp(a, "", "");
}
async function Yk(e, t, n, r, o, i, s) {
  var c;
  if (!e)
    return !1;
  const a = e, l = Kk(
    i
  ) ? [
    {
      label: "parent",
      run: () => Ro(a, n, r, i, s.relations)
    },
    {
      label: "child",
      run: () => cn(a, n, r, i, s.relations)
    }
  ] : [
    {
      label: "child",
      run: () => cn(a, n, r, i, s.relations)
    },
    {
      label: "parent",
      run: () => Ro(a, n, r, i, s.relations)
    }
  ];
  for (const u of l) {
    if (!await u.run())
      continue;
    const m = await LA(
      e,
      t,
      n,
      i
    );
    if (m === o)
      return q(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via ${u.label} ${i}`
      ), !0;
    ge(
      "template zone type",
      `${u.label} write for zone ${n} → taxonomy ${r} returned OK but read-back is "${m ?? "(none)"}" (expected "${o}")`
    );
  }
  if ((c = e == null ? void 0 : e.raw) != null && c.postAsync) {
    const u = { parent: { href: `/api/entities/${r}` } };
    if ((await e.raw.postAsync(
      `/api/entities/${n}/relations/${i}`,
      u
    )).isSuccessStatusCode && await LA(
      e,
      t,
      n,
      i
    ) === o)
      return q(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via POST parent ${i}`
      ), !0;
  }
  return !1;
}
async function Zk(e, t, n, r) {
  const o = nc(r.relations);
  for (const i of o) {
    const s = ut(r.relations, i);
    if (!s)
      continue;
    const a = await ln(e, n.id, i, {
      [i]: { href: s }
    });
    if (a[0] == null)
      continue;
    const l = await t(String(a[0])), c = ec(l);
    if (c)
      return tc(c, a[0]), tp(c, n.zoneKey, n.zoneLabel);
  }
}
async function yv(e, t, n, r) {
  const o = await Zk(e, t, n, r);
  return o ? { ...n, zoneType: o } : n;
}
async function Xk(e, t, n, r, o) {
  await np(e);
  const i = await Gk(e, t, r);
  if (!i) {
    const a = Object.keys(o.relations ?? {}).join(", ") || "(none)", l = [...nn.keys()].join(", ") || "(none)";
    return ge(
      "template zone type",
      `No taxonomy item found for zone type "${r}" on zone ${n}. Known types: ${l}. Zone relations: ${a}.`
    ), !1;
  }
  const s = nc(o.relations);
  for (const a of s)
    if (await Yk(
      e,
      t,
      n,
      i,
      r,
      a,
      o
    ))
      return !0;
  return ge(
    "template zone type",
    `Could not link zone ${n} to taxonomy ${i} (${r}). Tried relations: ${s.join(", ") || "(none)"}`
  ), !1;
}
const ru = ["EPAM.TemplateZone", "TemplateZone"];
let Js = null;
function Wk(e) {
  return /zone.?type/i.test(e);
}
function Vk(e) {
  return /zone.?type/i.test(e);
}
function Jk(e) {
  return e.filter((t) => Wk(t.name)).map((t) => t.name);
}
async function qk(e) {
  if (Js)
    return Js;
  const [t, n] = await Promise.all([
    rl(e, ru[0]).then(async (s) => s.length > 0 ? s : rl(e, ru[1])),
    ol(e, ru)
  ]), r = Jk(t), o = n.filter((s) => Vk(s.name)).map((s) => s.name);
  let i = "unknown";
  return r.length > 0 && o.length === 0 ? i = "property" : o.length > 0 && r.length === 0 ? i = "relation" : r.length > 0 && o.length > 0 && (i = "both"), Js = {
    mode: i,
    propertyNames: r.length > 0 ? r : ["zoneType", "ZoneType", "EPAM.zoneType", "zoneTypeMA"],
    relationNames: o
  }, Js;
}
function _k(e) {
  return e.mode === "property" || e.mode === "both" || e.mode === "unknown";
}
function $k(e) {
  return e.mode === "relation" || e.mode === "both";
}
const eb = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], rp = [
  "AssetCollectionToAsset",
  "M.AssetCollectionToAsset",
  "collectionToAsset",
  "assetCollectionToAsset",
  "CollectionToAsset"
];
function ba(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function tb(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  return "Invariant" in t ? t.Invariant : Object.values(t).find((r) => typeof r == "string") ?? e;
}
function vv(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = tb(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function wv(e) {
  var n;
  if (e == null || typeof e != "object")
    return;
  const t = e;
  for (const r of eb) {
    const o = t[r];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const i = ba(((n = o[0]) == null ? void 0 : n.href) ?? o[0]);
    if (i)
      return i;
  }
}
function nb(e) {
  var r;
  const t = (r = e.systemProperties) == null ? void 0 : r.id, n = e.id ?? e.entityId ?? t;
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  if (typeof n == "string" && n.trim())
    return n.trim();
}
function rb(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e, n = nb(t);
  if (n == null)
    return null;
  const r = t.properties ?? t.fields, o = wv(t.renditions) ?? ba(t.thumbnailUrl) ?? ba(t.previewUrl) ?? ba(t.thumbnail);
  if (!o)
    return null;
  const i = vv(r, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${n}`;
  return {
    id: String(n),
    name: i,
    thumbnailUrl: o,
    previewUrl: o
  };
}
function Wo(e, t) {
  const n = t.properties ?? {}, r = wv(t.renditions);
  if (!r)
    return null;
  const o = vv(n, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${e}`;
  return {
    id: String(e),
    name: o,
    thumbnailUrl: r,
    previewUrl: r
  };
}
function MA(e, t) {
  if (!(t != null && t.trim()))
    return e;
  const n = t.trim().toLowerCase();
  return e.filter(
    (r) => r.name.toLowerCase().includes(n) || r.id.toLowerCase().includes(n)
  );
}
const vd = "https://ws.overcasthq.com/wp-content/uploads/2025/05/sok_logo.png", ob = "https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58", ib = "https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png", sb = [
  {
    id: "color",
    label: "Full color",
    url: vd,
    previewBackground: "#f7f7f7"
  },
  {
    id: "dark",
    label: "Dark background",
    url: `${vd}#dark`,
    previewBackground: "#000000"
  }
], wd = vd, xr = "Arial, Helvetica, sans-serif", tn = {
  primary: "#00a651",
  primaryHover: "#1db86a",
  primaryActive: "#008a44",
  secondary: "#000000",
  accent: "#00a651",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  muted: "#6b716e",
  primarySoft: "#e6f7ed",
  primaryBorder: "#8fd4a8"
}, Cv = [
  { colorName: "Primary", hexValue: tn.primary, colorUsageType: "Primary" },
  { colorName: "Secondary", hexValue: tn.secondary, colorUsageType: "Secondary" },
  { colorName: "Accent", hexValue: tn.accent, colorUsageType: "Accent" },
  { colorName: "Background", hexValue: tn.background, colorUsageType: "Background" }
], Tv = [
  { fontFamily: xr, fontWeight: "Bold", fontUsageType: "Heading" },
  { fontFamily: xr, fontWeight: "Regular", fontUsageType: "Body" },
  { fontFamily: xr, fontWeight: "Medium", fontUsageType: "CTA" }
];
function ab(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t || t === ob || t === ib || /cytiva/i.test(t))
    return wd;
  const n = sb.find((r) => r.url === t || r.id === t);
  return n ? n.url : t;
}
function yi(e) {
  var t;
  return {
    ...e,
    brandKitName: ((t = e.brandKitName) == null ? void 0 : t.trim()) || "SOK",
    logoAssetUrl: ab(e.logoAssetUrl),
    colors: Cv,
    fonts: Tv
  };
}
function lb(e) {
  return yi({
    id: e,
    brandKitName: "SOK",
    logoAssetUrl: wd,
    colors: Cv,
    fonts: Tv
  });
}
function rc(e, t) {
  return {
    width: Math.round(e / 25.4 * 96),
    height: Math.round(t / 25.4 * 96)
  };
}
function qs(e, t) {
  return {
    width: Math.round(e * 96),
    height: Math.round(t * 96)
  };
}
const _s = rc(210, 297), $s = rc(297, 420), ea = rc(148, 210), ws = [
  { id: "a4-portrait", group: "print", label: "A4 portrait", width: _s.width, height: _s.height },
  { id: "a4-landscape", group: "print", label: "A4 landscape", width: _s.height, height: _s.width },
  { id: "a3-portrait", group: "print", label: "A3 portrait", width: $s.width, height: $s.height },
  { id: "a3-landscape", group: "print", label: "A3 landscape", width: $s.height, height: $s.width },
  { id: "a5-portrait", group: "print", label: "A5 portrait", width: ea.width, height: ea.height },
  { id: "a5-landscape", group: "print", label: "A5 landscape", width: ea.height, height: ea.width },
  { id: "letter-portrait", group: "print", label: "Letter portrait", ...qs(8.5, 11) },
  { id: "letter-landscape", group: "print", label: "Letter landscape", ...qs(11, 8.5) },
  { id: "tabloid-portrait", group: "print", label: "Tabloid portrait", ...qs(11, 17) },
  { id: "tabloid-landscape", group: "print", label: "Tabloid landscape", ...qs(17, 11) },
  {
    id: "business-card",
    group: "print",
    label: "Business card",
    ...rc(85, 55)
  },
  { id: "1080-square", group: "social", label: "Square 1080", width: 1080, height: 1080 },
  { id: "1080-story", group: "social", label: "Story 1080 × 1920", width: 1080, height: 1920 },
  { id: "1080-portrait", group: "social", label: "Portrait 1080 × 1350", width: 1080, height: 1350 },
  { id: "1200-link", group: "social", label: "Link post 1200 × 628", width: 1200, height: 628 }
], cb = [
  { id: "print", label: "Print" },
  { id: "social", label: "Social" }
];
function Cd(e) {
  return ws.find((t) => t.id === e);
}
function Vo(e, t, n) {
  if (n && Cd(n)) {
    const o = Cd(n);
    if (o.width === e && o.height === t)
      return o.id;
  }
  const r = ws.find((o) => o.width === e && o.height === t);
  return (r == null ? void 0 : r.id) ?? "custom";
}
const op = [
  {
    id: "1080-square",
    label: "Square — 1080 × 1080",
    width: 1080,
    height: 1080,
    formatPreset: "1080x1080"
  },
  {
    id: "1080-story",
    label: "Story — 1080 × 1920",
    width: 1080,
    height: 1920,
    formatPreset: "1080x1920"
  },
  {
    id: "1200-link",
    label: "Link post — 1200 × 628",
    width: 1200,
    height: 628,
    formatPreset: "1200x628"
  },
  {
    id: "1080-portrait",
    label: "Portrait — 1080 × 1350",
    width: 1080,
    height: 1350,
    formatPreset: "1080x1350"
  }
], Ev = [
  {
    id: "600-standard",
    label: "Standard email — 600 px wide",
    width: 600,
    formatPreset: "600px email"
  },
  {
    id: "640-wide",
    label: "Wide email — 640 px wide",
    width: 640,
    formatPreset: "640px email"
  }
], ub = [
  {
    id: "600-newsletter",
    label: "Standard newsletter — 600 px wide",
    width: 600,
    formatPreset: "600px newsletter"
  },
  {
    id: "640-newsletter",
    label: "Wide newsletter — 640 px wide",
    width: 640,
    formatPreset: "640px newsletter"
  }
], kv = ws.filter(
  (e) => e.group === "print"
).map((e) => ({
  id: e.id,
  label: `${e.label} — ${e.width} × ${e.height}`,
  width: e.width,
  height: e.height,
  formatPreset: e.id
}));
function Sa(e) {
  return e === "Social" || e === "Print";
}
function oc(e) {
  switch (e) {
    case "Email":
      return Ev;
    case "Newsletter":
      return ub;
    case "Print":
      return kv;
    default:
      return op;
  }
}
function bv(e) {
  const t = e.canvasWidth, n = e.canvasHeight;
  return t != null && n != null ? `${t} × ${n} px` : t != null ? `${t} px wide` : "Not set";
}
function db(e, t) {
  return e.canvasWidth !== t.width ? !1 : t.height != null ? e.canvasHeight === t.height : e.canvasHeight == null || e.canvasHeight === void 0;
}
function fb(e) {
  const t = oc(e.channelType), n = t.find((o) => db(e, o));
  if (n)
    return n.id;
  const r = t.find(
    (o) => o.formatPreset.trim().toLowerCase() === (e.formatPreset ?? "").trim().toLowerCase()
  );
  return r ? r.id : "custom";
}
function Td(e, t, n) {
  return (e === "Social" || e === "Print") && t != null && n != null ? `${t}x${n}` : e === "Email" && t != null ? `${t}px email` : e === "Newsletter" && t != null ? `${t}px newsletter` : "";
}
function pb(e, t) {
  if (t === "custom")
    return null;
  const n = oc(e).find((r) => r.id === t);
  return n ? {
    canvasWidth: n.width,
    canvasHeight: n.height,
    formatPreset: n.formatPreset
  } : null;
}
function Sv(e) {
  const t = oc(e)[0];
  return {
    canvasWidth: t.width,
    canvasHeight: t.height,
    formatPreset: t.formatPreset
  };
}
function ip(e) {
  return e.canvasWidth != null && Number.isFinite(e.canvasWidth) ? e.canvasWidth : e.channelType === "Email" || e.channelType === "Newsletter" ? Ev[0].width : op[0].width;
}
function Pv(e) {
  return e.canvasHeight != null && Number.isFinite(e.canvasHeight) ? e.canvasHeight : e.channelType === "Email" || e.channelType === "Newsletter" ? 800 : op[0].height ?? 1080;
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function RA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function mb(e) {
  if (Array.isArray(e))
    return e;
}
function Ab(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, s, a = [], l = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0)
        for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); l = !0)
          ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s))
          return;
      } finally {
        if (c)
          throw o;
      }
    }
    return a;
  }
}
function hb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gb(e, t) {
  return mb(e) || Ab(e, t) || yb(e, t) || hb();
}
function yb(e, t) {
  if (e) {
    if (typeof e == "string")
      return RA(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? RA(e, t) : void 0;
  }
}
const Nv = Object.entries, HA = Object.setPrototypeOf, vb = Object.isFrozen, wb = Object.getPrototypeOf, Cb = Object.getOwnPropertyDescriptor;
let $e = Object.freeze, rt = Object.seal, io = Object.create, Dv = typeof Reflect < "u" && Reflect, Ed = Dv.apply, kd = Dv.construct;
$e || ($e = function(t) {
  return t;
});
rt || (rt = function(t) {
  return t;
});
Ed || (Ed = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    o[i - 2] = arguments[i];
  return t.apply(n, o);
});
kd || (kd = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const ui = Qe(Array.prototype.forEach), Tb = Qe(Array.prototype.lastIndexOf), FA = Qe(Array.prototype.pop), eo = Qe(Array.prototype.push), Eb = Qe(Array.prototype.splice), Jn = Array.isArray, vi = Qe(String.prototype.toLowerCase), ou = Qe(String.prototype.toString), QA = Qe(String.prototype.match), di = Qe(String.prototype.replace), UA = Qe(String.prototype.indexOf), kb = Qe(String.prototype.trim), bb = Qe(Number.prototype.toString), Sb = Qe(Boolean.prototype.toString), jA = typeof BigInt > "u" ? null : Qe(BigInt.prototype.toString), GA = typeof Symbol > "u" ? null : Qe(Symbol.prototype.toString), Ke = Qe(Object.prototype.hasOwnProperty), fi = Qe(Object.prototype.toString), Je = Qe(RegExp.prototype.test), Cr = Pb(TypeError);
function Qe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Ed(e, t, r);
  };
}
function Pb(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return kd(e, n);
  };
}
function ae(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vi;
  if (HA && HA(e, null), !Jn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (vb(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function Nb(e) {
  for (let t = 0; t < e.length; t++)
    Ke(e, t) || (e[t] = null);
  return e;
}
function ft(e) {
  const t = io(null);
  for (const r of Nv(e)) {
    var n = gb(r, 2);
    const o = n[0], i = n[1];
    Ke(e, o) && (Jn(i) ? t[o] = Nb(i) : i && typeof i == "object" && i.constructor === Object ? t[o] = ft(i) : t[o] = i);
  }
  return t;
}
function Db(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return bb(e);
    case "boolean":
      return Sb(e);
    case "bigint":
      return jA ? jA(e) : "0";
    case "symbol":
      return GA ? GA(e) : "Symbol()";
    case "undefined":
      return fi(e);
    case "function":
    case "object": {
      if (e === null)
        return fi(e);
      const t = e, n = An(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : fi(r);
      }
      return fi(e);
    }
    default:
      return fi(e);
  }
}
function An(e, t) {
  for (; e !== null; ) {
    const r = Cb(e, t);
    if (r) {
      if (r.get)
        return Qe(r.get);
      if (typeof r.value == "function")
        return Qe(r.value);
    }
    e = wb(e);
  }
  function n() {
    return null;
  }
  return n;
}
function xb(e) {
  try {
    return Je(e, ""), !0;
  } catch {
    return !1;
  }
}
const KA = $e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), iu = $e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), su = $e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Bb = $e(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), au = $e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ob = $e(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), YA = $e(["#text"]), ZA = $e(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), lu = $e(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), XA = $e(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ta = $e(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ib = rt(/{{[\w\W]*|^[\w\W]*}}/g), zb = rt(/<%[\w\W]*|^[\w\W]*%>/g), Lb = rt(/\${[\w\W]*/g), Mb = rt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Rb = rt(/^aria-[\-\w]+$/), WA = rt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Hb = rt(/^(?:\w+script|data):/i), Fb = rt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qb = rt(/^html$/i), Ub = rt(/^[a-z][.\w]*(-[.\w]+)+$/i), VA = rt(/<[/\w!]/g), jb = rt(/<[/\w]/g), Gb = rt(/<\/no(script|embed|frames)/i), Kb = rt(/\/>/i), mn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, Yb = function() {
  return typeof window > "u" ? null : window;
}, Zb = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const o = "data-tt-policy-suffix";
  n && n.hasAttribute(o) && (r = n.getAttribute(o));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(i, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, JA = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, Kn = function(t, n, r, o) {
  return Ke(t, n) && Jn(t[n]) ? ae(o.base ? ft(o.base) : {}, t[n], o.transform) : r;
};
function xv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Yb();
  const t = (j) => xv(j);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== mn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, s = e.Node, a = e.Element, l = e.NodeFilter, c = e.NamedNodeMap;
  c === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, f = e.trustedTypes, m = a.prototype, y = An(m, "cloneNode"), g = An(m, "remove"), v = An(m, "nextSibling"), N = An(m, "childNodes"), p = An(m, "parentNode"), A = An(m, "shadowRoot"), h = An(m, "attributes"), P = s && s.prototype ? An(s.prototype, "nodeType") : null, O = s && s.prototype ? An(s.prototype, "nodeName") : null;
  if (typeof i == "function") {
    const j = n.createElement("template");
    j.content && j.content.ownerDocument && (n = j.content.ownerDocument);
  }
  let k, T = "", S, H = !1, D = 0;
  const L = function() {
    if (D > 0)
      throw Cr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, x = function(w) {
    L(), D++;
    try {
      return k.createHTML(w);
    } finally {
      D--;
    }
  }, K = function(w) {
    L(), D++;
    try {
      return k.createScriptURL(w);
    } finally {
      D--;
    }
  }, ve = function() {
    return H || (S = Zb(f, o), H = !0), S;
  }, se = n, _ = se.implementation, oe = se.createNodeIterator, G = se.createDocumentFragment, V = se.getElementsByTagName, b = r.importNode;
  let I = JA();
  t.isSupported = typeof Nv == "function" && typeof p == "function" && _ && _.createHTMLDocument !== void 0;
  const W = Ib, pe = zb, z = Lb, J = Mb, we = Rb, M = Hb, Q = Fb, Z = Ub;
  let de = WA, $ = null;
  const Te = ae({}, [...KA, ...iu, ...su, ...au, ...YA]);
  let ee = null;
  const Xt = ae({}, [...ZA, ...lu, ...XA, ...ta]);
  let Ce = Object.seal(io(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), ie = null, Zr = null;
  const Wt = Object.seal(io(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let un = !0, Xr = !0, Pp = !1, Np = !0, Un = !1, _o = !0, vr = !1, fc = !1, pc = null, mc = null, Ac = !1, Wr = !1, bs = !1, Ss = !1, Dp = !0, xp = !1;
  const Bp = "user-content-";
  let hc = !0, gc = !1, Vr = {}, dn = null;
  const yc = ae({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let Op = null;
  const Ip = ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let vc = null;
  const zp = ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ps = "http://www.w3.org/1998/Math/MathML", Ns = "http://www.w3.org/2000/svg", fn = "http://www.w3.org/1999/xhtml";
  let Jr = fn, wc = !1, Cc = null;
  const Gw = ae({}, [Ps, Ns, fn], ou), Lp = $e(["mi", "mo", "mn", "ms", "mtext"]);
  let Tc = ae({}, Lp);
  const Mp = $e(["annotation-xml"]);
  let Ec = ae({}, Mp);
  const Kw = ae({}, ["title", "style", "font", "a", "script"]);
  let $o = null;
  const Yw = ["application/xhtml+xml", "text/html"], Zw = "text/html";
  let xe = null, qr = null;
  const Xw = n.createElement("form"), Rp = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, kc = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (qr && qr === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = ft(w), $o = // eslint-disable-next-line unicorn/prefer-includes
    Yw.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Zw : w.PARSER_MEDIA_TYPE, xe = $o === "application/xhtml+xml" ? ou : vi, $ = Kn(w, "ALLOWED_TAGS", Te, {
      transform: xe
    }), ee = Kn(w, "ALLOWED_ATTR", Xt, {
      transform: xe
    }), Cc = Kn(w, "ALLOWED_NAMESPACES", Gw, {
      transform: ou
    }), vc = Kn(w, "ADD_URI_SAFE_ATTR", zp, {
      transform: xe,
      base: zp
    }), Op = Kn(w, "ADD_DATA_URI_TAGS", Ip, {
      transform: xe,
      base: Ip
    }), dn = Kn(w, "FORBID_CONTENTS", yc, {
      transform: xe
    }), ie = Kn(w, "FORBID_TAGS", ft({}), {
      transform: xe
    }), Zr = Kn(w, "FORBID_ATTR", ft({}), {
      transform: xe
    }), Vr = Ke(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? ft(w.USE_PROFILES) : w.USE_PROFILES : !1, un = w.ALLOW_ARIA_ATTR !== !1, Xr = w.ALLOW_DATA_ATTR !== !1, Pp = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Np = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Un = w.SAFE_FOR_TEMPLATES || !1, _o = w.SAFE_FOR_XML !== !1, vr = w.WHOLE_DOCUMENT || !1, Wr = w.RETURN_DOM || !1, bs = w.RETURN_DOM_FRAGMENT || !1, Ss = w.RETURN_TRUSTED_TYPE || !1, Ac = w.FORCE_BODY || !1, Dp = w.SANITIZE_DOM !== !1, xp = w.SANITIZE_NAMED_PROPS || !1, hc = w.KEEP_CONTENT !== !1, gc = w.IN_PLACE || !1, de = xb(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : WA, Jr = typeof w.NAMESPACE == "string" ? w.NAMESPACE : fn, Tc = Ke(w, "MATHML_TEXT_INTEGRATION_POINTS") && w.MATHML_TEXT_INTEGRATION_POINTS && typeof w.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ft(w.MATHML_TEXT_INTEGRATION_POINTS) : ae({}, Lp), Ec = Ke(w, "HTML_INTEGRATION_POINTS") && w.HTML_INTEGRATION_POINTS && typeof w.HTML_INTEGRATION_POINTS == "object" ? ft(w.HTML_INTEGRATION_POINTS) : ae({}, Mp);
    const B = Ke(w, "CUSTOM_ELEMENT_HANDLING") && w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING == "object" ? ft(w.CUSTOM_ELEMENT_HANDLING) : io(null);
    if (Ce = io(null), Ke(B, "tagNameCheck") && Rp(B.tagNameCheck) && (Ce.tagNameCheck = B.tagNameCheck), Ke(B, "attributeNameCheck") && Rp(B.attributeNameCheck) && (Ce.attributeNameCheck = B.attributeNameCheck), Ke(B, "allowCustomizedBuiltInElements") && typeof B.allowCustomizedBuiltInElements == "boolean" && (Ce.allowCustomizedBuiltInElements = B.allowCustomizedBuiltInElements), rt(Ce), Un && (Xr = !1), bs && (Wr = !0), Vr && ($ = ae({}, YA), ee = io(null), Vr.html === !0 && (ae($, KA), ae(ee, ZA)), Vr.svg === !0 && (ae($, iu), ae(ee, lu), ae(ee, ta)), Vr.svgFilters === !0 && (ae($, su), ae(ee, lu), ae(ee, ta)), Vr.mathMl === !0 && (ae($, au), ae(ee, XA), ae(ee, ta))), Wt.tagCheck = null, Wt.attributeCheck = null, Ke(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? Wt.tagCheck = w.ADD_TAGS : Jn(w.ADD_TAGS) && ($ === Te && ($ = ft($)), ae($, w.ADD_TAGS, xe))), Ke(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? Wt.attributeCheck = w.ADD_ATTR : Jn(w.ADD_ATTR) && (ee === Xt && (ee = ft(ee)), ae(ee, w.ADD_ATTR, xe))), Ke(w, "ADD_URI_SAFE_ATTR") && Jn(w.ADD_URI_SAFE_ATTR) && ae(vc, w.ADD_URI_SAFE_ATTR, xe), Ke(w, "FORBID_CONTENTS") && Jn(w.FORBID_CONTENTS) && (dn === yc && (dn = ft(dn)), ae(dn, w.FORBID_CONTENTS, xe)), Ke(w, "ADD_FORBID_CONTENTS") && Jn(w.ADD_FORBID_CONTENTS) && (dn === yc && (dn = ft(dn)), ae(dn, w.ADD_FORBID_CONTENTS, xe)), hc && ($["#text"] = !0), vr && ae($, ["html", "head", "body"]), $.table && (ae($, ["tbody"]), delete ie.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Cr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Cr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = k;
      k = w.TRUSTED_TYPES_POLICY;
      try {
        T = x("");
      } catch (X) {
        throw k = U, X;
      }
    } else
      w.TRUSTED_TYPES_POLICY === null ? (k = void 0, T = "") : (k === void 0 && (k = ve()), k && typeof T == "string" && (T = x("")));
    $e && $e(w), qr = w;
  }, Hp = ae({}, [...iu, ...su, ...Bb]), Fp = ae({}, [...au, ...Ob]), Ww = function(w, B, U) {
    return B.namespaceURI === fn ? w === "svg" : B.namespaceURI === Ps ? w === "svg" && (U === "annotation-xml" || Tc[U]) : !!Hp[w];
  }, Vw = function(w, B, U) {
    return B.namespaceURI === fn ? w === "math" : B.namespaceURI === Ns ? w === "math" && Ec[U] : !!Fp[w];
  }, Jw = function(w, B, U) {
    return B.namespaceURI === Ns && !Ec[U] || B.namespaceURI === Ps && !Tc[U] ? !1 : !Fp[w] && (Kw[w] || !Hp[w]);
  }, qw = function(w) {
    let B = p(w);
    (!B || !B.tagName) && (B = {
      namespaceURI: Jr,
      tagName: "template"
    });
    const U = vi(w.tagName), X = vi(B.tagName);
    return Cc[w.namespaceURI] ? w.namespaceURI === Ns ? Ww(U, B, X) : w.namespaceURI === Ps ? Vw(U, B, X) : w.namespaceURI === fn ? Jw(U, B, X) : !!($o === "application/xhtml+xml" && Cc[w.namespaceURI]) : !1;
  }, jn = function(w) {
    eo(t.removed, {
      element: w
    });
    try {
      p(w).removeChild(w);
    } catch {
      if (g(w), !p(w))
        throw Cr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Qp = function(w) {
    const B = N(w);
    if (B) {
      const X = [];
      ui(B, (ne) => {
        eo(X, ne);
      }), ui(X, (ne) => {
        try {
          g(ne);
        } catch {
        }
      });
    }
    const U = h(w);
    if (U)
      for (let X = U.length - 1; X >= 0; --X) {
        const ne = U[X], le = ne && ne.name;
        if (typeof le == "string")
          try {
            w.removeAttribute(le);
          } catch {
          }
      }
  }, wr = function(w, B) {
    try {
      eo(t.removed, {
        attribute: B.getAttributeNode(w),
        from: B
      });
    } catch {
      eo(t.removed, {
        attribute: null,
        from: B
      });
    }
    if (B.removeAttribute(w), w === "is")
      if (Wr || bs)
        try {
          jn(B);
        } catch {
        }
      else
        try {
          B.setAttribute(w, "");
        } catch {
        }
  }, _w = function(w) {
    const B = h(w);
    if (B)
      for (let U = B.length - 1; U >= 0; --U) {
        const X = B[U], ne = X && X.name;
        if (!(typeof ne != "string" || ee[xe(ne)]))
          try {
            w.removeAttribute(ne);
          } catch {
          }
      }
  }, $w = function(w) {
    const B = [w];
    for (; B.length > 0; ) {
      const U = B.pop();
      (P ? P(U) : U.nodeType) === mn.element && _w(U);
      const ne = N(U);
      if (ne)
        for (let le = ne.length - 1; le >= 0; --le)
          B.push(ne[le]);
    }
  }, Up = function(w) {
    let B = null, U = null;
    if (Ac)
      w = "<remove></remove>" + w;
    else {
      const le = QA(w, /^[\r\n\t ]+/);
      U = le && le[0];
    }
    $o === "application/xhtml+xml" && Jr === fn && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const X = k ? x(w) : w;
    if (Jr === fn)
      try {
        B = new u().parseFromString(X, $o);
      } catch {
      }
    if (!B || !B.documentElement) {
      B = _.createDocument(Jr, "template", null);
      try {
        B.documentElement.innerHTML = wc ? T : X;
      } catch {
      }
    }
    const ne = B.body || B.documentElement;
    return w && U && ne.insertBefore(n.createTextNode(U), ne.childNodes[0] || null), Jr === fn ? V.call(B, vr ? "html" : "body")[0] : vr ? B.documentElement : ne;
  }, jp = function(w) {
    return oe.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Ds = function(w) {
    return w = di(w, W, " "), w = di(w, pe, " "), w = di(w, z, " "), w;
  }, bc = function(w) {
    var B;
    w.normalize();
    const U = oe.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = U.nextNode();
    for (; X; )
      X.data = Ds(X.data), X = U.nextNode();
    const ne = (B = w.querySelectorAll) === null || B === void 0 ? void 0 : B.call(w, "template");
    ne && ui(ne, (le) => {
      _r(le.content) && bc(le.content);
    });
  }, xs = function(w) {
    const B = O ? O(w) : null;
    return typeof B != "string" || xe(B) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    w.attributes !== h(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    w.nodeType !== P(w) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    w.childNodes !== N(w);
  }, _r = function(w) {
    if (!P || typeof w != "object" || w === null)
      return !1;
    try {
      return P(w) === mn.documentFragment;
    } catch {
      return !1;
    }
  }, ei = function(w) {
    if (!P || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof P(w) == "number";
    } catch {
      return !1;
    }
  };
  function kn(j, w, B) {
    j.length !== 0 && ui(j, (U) => {
      U.call(t, w, B, qr);
    });
  }
  const e0 = function(w, B) {
    return !!(_o && w.hasChildNodes() && !ei(w.firstElementChild) && Je(VA, w.textContent) && Je(VA, w.innerHTML) || _o && w.namespaceURI === fn && B === "style" && ei(w.firstElementChild) || w.nodeType === mn.processingInstruction || _o && w.nodeType === mn.comment && Je(jb, w.data));
  }, t0 = function(w, B) {
    if (!ie[B] && Yp(B) && (Ce.tagNameCheck instanceof RegExp && Je(Ce.tagNameCheck, B) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(B)))
      return !1;
    if (hc && !dn[B]) {
      const U = p(w), X = N(w);
      if (X && U) {
        const ne = X.length;
        for (let le = ne - 1; le >= 0; --le) {
          const Ge = gc ? X[le] : y(X[le], !0);
          U.insertBefore(Ge, v(w));
        }
      }
    }
    return jn(w), !0;
  }, Gp = function(w) {
    if (kn(I.beforeSanitizeElements, w, null), xs(w))
      return jn(w), !0;
    const B = xe(O ? O(w) : w.nodeName);
    if (kn(I.uponSanitizeElement, w, {
      tagName: B,
      allowedTags: $
    }), e0(w, B))
      return jn(w), !0;
    if (ie[B] || !(Wt.tagCheck instanceof Function && Wt.tagCheck(B)) && !$[B])
      return t0(w, B);
    if ((P ? P(w) : w.nodeType) === mn.element && !qw(w) || (B === "noscript" || B === "noembed" || B === "noframes") && Je(Gb, w.innerHTML))
      return jn(w), !0;
    if (Un && w.nodeType === mn.text) {
      const X = Ds(w.textContent);
      w.textContent !== X && (eo(t.removed, {
        element: w.cloneNode()
      }), w.textContent = X);
    }
    return kn(I.afterSanitizeElements, w, null), !1;
  }, Kp = function(w, B, U) {
    if (Zr[B] || Dp && (B === "id" || B === "name") && (U in n || U in Xw))
      return !1;
    const X = ee[B] || Wt.attributeCheck instanceof Function && Wt.attributeCheck(B, w);
    if (!(Xr && Je(J, B))) {
      if (!(un && Je(we, B))) {
        if (X) {
          if (!vc[B]) {
            if (!Je(de, di(U, Q, ""))) {
              if (!((B === "src" || B === "xlink:href" || B === "href") && w !== "script" && UA(U, "data:") === 0 && Op[w])) {
                if (!(Pp && !Je(M, di(U, Q, "")))) {
                  if (U)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Yp(w) && (Ce.tagNameCheck instanceof RegExp && Je(Ce.tagNameCheck, w) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(w)) && (Ce.attributeNameCheck instanceof RegExp && Je(Ce.attributeNameCheck, B) || Ce.attributeNameCheck instanceof Function && Ce.attributeNameCheck(B, w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          B === "is" && Ce.allowCustomizedBuiltInElements && (Ce.tagNameCheck instanceof RegExp && Je(Ce.tagNameCheck, U) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(U)))
        )
          return !1;
      }
    }
    return !0;
  }, n0 = ae({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Yp = function(w) {
    return !n0[vi(w)] && Je(Z, w);
  }, r0 = function(w, B, U, X) {
    if (k && typeof f == "object" && typeof f.getAttributeType == "function" && !U)
      switch (f.getAttributeType(w, B)) {
        case "TrustedHTML":
          return x(X);
        case "TrustedScriptURL":
          return K(X);
      }
    return X;
  }, o0 = function(w, B, U, X) {
    try {
      U ? w.setAttributeNS(U, B, X) : w.setAttribute(B, X), xs(w) ? jn(w) : FA(t.removed);
    } catch {
      wr(B, w);
    }
  }, Zp = function(w) {
    kn(I.beforeSanitizeAttributes, w, null);
    const B = w.attributes;
    if (!B || xs(w))
      return;
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ee,
      forceKeepAttr: void 0
    };
    let X = B.length;
    const ne = xe(w.nodeName);
    for (; X--; ) {
      const le = B[X], Ge = le.name, Me = le.namespaceURI, Lt = le.value, Vt = xe(Ge), Pc = Lt;
      let dt = Ge === "value" ? Pc : kb(Pc);
      if (U.attrName = Vt, U.attrValue = dt, U.keepAttr = !0, U.forceKeepAttr = void 0, kn(I.uponSanitizeAttribute, w, U), dt = U.attrValue, xp && (Vt === "id" || Vt === "name") && UA(dt, Bp) !== 0 && (wr(Ge, w), dt = Bp + dt), _o && Je(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        wr(Ge, w);
        continue;
      }
      if (Vt === "attributename" && QA(dt, "href")) {
        wr(Ge, w);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          wr(Ge, w);
          continue;
        }
        if (!Np && Je(Kb, dt)) {
          wr(Ge, w);
          continue;
        }
        if (Un && (dt = Ds(dt)), !Kp(ne, Vt, dt)) {
          wr(Ge, w);
          continue;
        }
        dt = r0(ne, Vt, Me, dt), dt !== Pc && o0(w, Ge, Me, dt);
      }
    }
    kn(I.afterSanitizeAttributes, w, null);
  }, Bs = function(w) {
    let B = null;
    const U = jp(w);
    for (kn(I.beforeSanitizeShadowDOM, w, null); B = U.nextNode(); )
      if (kn(I.uponSanitizeShadowNode, B, null), Gp(B), Zp(B), _r(B.content) && Bs(B.content), (P ? P(B) : B.nodeType) === mn.element) {
        const ne = A(B);
        _r(ne) && (Sc(ne), Bs(ne));
      }
    kn(I.afterSanitizeShadowDOM, w, null);
  }, Sc = function(w) {
    const B = [{
      node: w,
      shadow: null
    }];
    for (; B.length > 0; ) {
      const U = B.pop();
      if (U.shadow) {
        Bs(U.shadow);
        continue;
      }
      const X = U.node, le = (P ? P(X) : X.nodeType) === mn.element, Ge = N(X);
      if (Ge)
        for (let Me = Ge.length - 1; Me >= 0; --Me)
          B.push({
            node: Ge[Me],
            shadow: null
          });
      if (le) {
        const Me = O ? O(X) : null;
        if (typeof Me == "string" && xe(Me) === "template") {
          const Lt = X.content;
          _r(Lt) && B.push({
            node: Lt,
            shadow: null
          });
        }
      }
      if (le) {
        const Me = A(X);
        _r(Me) && B.push({
          node: null,
          shadow: Me
        }, {
          node: Me,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(j) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = null, U = null, X = null, ne = null;
    if (wc = !j, wc && (j = "<!-->"), typeof j != "string" && !ei(j) && (j = Db(j), typeof j != "string"))
      throw Cr("dirty is not a string, aborting");
    if (!t.isSupported)
      return j;
    fc ? ($ = pc, ee = mc) : kc(w), (I.uponSanitizeElement.length > 0 || I.uponSanitizeAttribute.length > 0) && ($ = ft($)), I.uponSanitizeAttribute.length > 0 && (ee = ft(ee)), t.removed = [];
    const le = gc && typeof j != "string" && ei(j);
    if (le) {
      const Lt = O ? O(j) : j.nodeName;
      if (typeof Lt == "string") {
        const Vt = xe(Lt);
        if (!$[Vt] || ie[Vt])
          throw Cr("root node is forbidden and cannot be sanitized in-place");
      }
      if (xs(j))
        throw Cr("root node is clobbered and cannot be sanitized in-place");
      try {
        Sc(j);
      } catch (Vt) {
        throw Qp(j), Vt;
      }
    } else if (ei(j))
      B = Up("<!---->"), U = B.ownerDocument.importNode(j, !0), U.nodeType === mn.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? B = U : B.appendChild(U), Sc(U);
    else {
      if (!Wr && !Un && !vr && // eslint-disable-next-line unicorn/prefer-includes
      j.indexOf("<") === -1)
        return k && Ss ? x(j) : j;
      if (B = Up(j), !B)
        return Wr ? null : Ss ? T : "";
    }
    B && Ac && jn(B.firstChild);
    const Ge = jp(le ? j : B);
    try {
      for (; X = Ge.nextNode(); )
        Gp(X), Zp(X), _r(X.content) && Bs(X.content);
    } catch (Lt) {
      throw le && Qp(j), Lt;
    }
    if (le)
      return ui(t.removed, (Lt) => {
        Lt.element && $w(Lt.element);
      }), Un && bc(j), j;
    if (Wr) {
      if (Un && bc(B), bs)
        for (ne = G.call(B.ownerDocument); B.firstChild; )
          ne.appendChild(B.firstChild);
      else
        ne = B;
      return (ee.shadowroot || ee.shadowrootmode) && (ne = b.call(r, ne, !0)), ne;
    }
    let Me = vr ? B.outerHTML : B.innerHTML;
    return vr && $["!doctype"] && B.ownerDocument && B.ownerDocument.doctype && B.ownerDocument.doctype.name && Je(Qb, B.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + B.ownerDocument.doctype.name + `>
` + Me), Un && (Me = Ds(Me)), k && Ss ? x(Me) : Me;
  }, t.setConfig = function() {
    let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    kc(j), fc = !0, pc = $, mc = ee;
  }, t.clearConfig = function() {
    qr = null, fc = !1, pc = null, mc = null, k = S, T = "";
  }, t.isValidAttribute = function(j, w, B) {
    qr || kc({});
    const U = xe(j), X = xe(w);
    return Kp(U, X, B);
  }, t.addHook = function(j, w) {
    typeof w == "function" && Ke(I, j) && eo(I[j], w);
  }, t.removeHook = function(j, w) {
    if (Ke(I, j)) {
      if (w !== void 0) {
        const B = Tb(I[j], w);
        return B === -1 ? void 0 : Eb(I[j], B, 1)[0];
      }
      return FA(I[j]);
    }
  }, t.removeHooks = function(j) {
    Ke(I, j) && (I[j] = []);
  }, t.removeAllHooks = function() {
    I = JA();
  }, t;
}
var Xb = xv();
const Wb = [
  "p",
  "div",
  "span",
  "a",
  "strong",
  "em",
  "b",
  "i",
  "u",
  "br",
  "ul",
  "ol",
  "li",
  "table",
  "thead",
  "tbody",
  "tr",
  "td",
  "th",
  "img",
  "h1",
  "h2",
  "h3",
  "h4"
], Vb = ["href", "style", "src", "alt", "width", "height", "align", "colspan", "rowspan", "target", "rel"];
function rs(e) {
  return e != null && e.trim() ? Xb.sanitize(e, {
    ALLOWED_TAGS: [...Wb],
    ALLOWED_ATTR: Vb,
    ALLOW_DATA_ATTR: !1
  }) : "";
}
const Bv = ["H1", "H2", "H3", "H4", "H5", "H6"], Hn = "H2";
function Jb(e) {
  const t = e == null ? void 0 : e.trim().toUpperCase();
  return t && Bv.includes(t) ? t : Hn;
}
const qb = {
  H1: "32px",
  H2: "28px",
  H3: "24px",
  H4: "20px",
  H5: "18px",
  H6: "16px"
}, _b = {
  H1: "2rem",
  H2: "1.75rem",
  H3: "1.5rem",
  H4: "1.25rem",
  H5: "1.125rem",
  H6: "1rem"
}, Ov = ["Left", "Center", "Right"], Iv = ["Top", "Right", "Bottom", "Left"], Gr = "Left", ic = "Top";
function zv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "center" ? "Center" : t === "right" ? "Right" : "Left";
}
function Lv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "right" ? "Right" : t === "bottom" ? "Bottom" : t === "left" ? "Left" : "Top";
}
function $b(e, t = {}, n = "stacked") {
  const r = e.contentAlignment ?? Gr, o = Math.max(0, e.offsetPx ?? 0), i = e.offsetDirection ?? ic, s = {
    ...t,
    textAlign: r.toLowerCase()
  };
  if (n === "stacked" && s.width == null && (s.width = "100%"), o > 0) {
    const a = {
      Top: "marginTop",
      Right: "marginRight",
      Bottom: "marginBottom",
      Left: "marginLeft"
    }[i];
    Object.assign(s, { [a]: o });
  }
  return s;
}
function eS(e) {
  return `zone-layout-${(e.contentAlignment ?? Gr).toLowerCase()}`;
}
function tS(e) {
  const t = { top: 16, right: 24, bottom: 16, left: 24 }, n = Math.max(0, e.offsetPx ?? 0);
  if (n <= 0)
    return t;
  const r = e.offsetDirection ?? ic;
  return r === "Top" && (t.top += n), r === "Right" && (t.right += n), r === "Bottom" && (t.bottom += n), r === "Left" && (t.left += n), t;
}
function cu(e, t = "") {
  const n = (e.contentAlignment ?? Gr).toLowerCase(), r = tS(e);
  return `padding:${r.top}px ${r.right}px ${r.bottom}px ${r.left}px;text-align:${n};${t}`;
}
function nS(e) {
  return (e.contentAlignment ?? Gr).toLowerCase();
}
function rS(e) {
  const t = e.contentAlignment ?? Gr, n = "display:block;width:100%;max-width:552px;height:auto;border:0;";
  return t === "Center" ? `${n}margin:0 auto;` : t === "Right" ? `${n}margin-left:auto;margin-right:0;` : `${n}margin:0;`;
}
function oS() {
  return "display:inline-block;";
}
function Yn(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Pa(e, t, n) {
  var r;
  return ((r = e.colors.find((o) => o.colorUsageType === t)) == null ? void 0 : r.hexValue) ?? n;
}
function uu(e, t, n) {
  var r;
  return ((r = e.fonts.find((o) => o.fontUsageType === t)) == null ? void 0 : r.fontFamily) ?? n;
}
function iS(e) {
  const t = e.zoneKey.toLowerCase(), n = e.zoneLabel.toLowerCase();
  return t.includes("headline") || n.includes("headline");
}
function sS(e, t, n) {
  var i, s, a, l, c, u;
  const r = nS(e), o = cu(e);
  if ($l(e)) {
    const f = cu(e, "padding-top:24px;padding-bottom:16px;");
    return `<tr>
      <td align="${r}" style="${f}">
        <span style="display:inline-block;min-width:120px;padding:12px 20px;border:1px solid ${tn.border};border-radius:4px;background:${tn.surface};color:${tn.muted};font-family:${xr};font-size:14px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-align:center;">Logo</span>
      </td>
    </tr>`;
  }
  switch (e.zoneType) {
    case "Text": {
      const f = (i = t == null ? void 0 : t.textValue) == null ? void 0 : i.trim();
      if (!f)
        return "";
      const m = iS(e), y = uu(n, m ? "Heading" : "Body", xr), g = m ? "28px" : "16px", v = m ? "bold" : "normal", N = Pa(n, "Secondary", tn.secondary);
      return `<tr>
        <td align="${r}" style="${o}font-family:${y};font-size:${g};font-weight:${v};color:${N};line-height:1.5;">
          ${Yn(f)}
        </td>
      </tr>`;
    }
    case "Heading": {
      const f = (s = t == null ? void 0 : t.textValue) == null ? void 0 : s.trim();
      if (!f)
        return "";
      const m = e.headingLevel ?? Hn, y = uu(n, "Heading", xr), g = qb[m], v = Pa(n, "Secondary", tn.secondary), N = m.toLowerCase();
      return `<tr>
        <td align="${r}" style="${o}">
          <${N} style="margin:0;font-family:${y};font-size:${g};font-weight:700;color:${v};line-height:1.25;">
            ${Yn(f)}
          </${N}>
        </td>
      </tr>`;
    }
    case "Image": {
      const f = (a = t == null ? void 0 : t.imageAssetUrl) == null ? void 0 : a.trim();
      if (!f)
        return "";
      const m = `<img src="${Yn(f)}" alt="${Yn(e.zoneLabel)}" width="552" style="${rS(e)}" />`, y = (l = t == null ? void 0 : t.linkUrl) == null ? void 0 : l.trim(), g = y ? `<a href="${Yn(y)}" target="_blank" rel="noopener noreferrer">${m}</a>` : m;
      return `<tr><td align="${r}" style="${o}">${g}</td></tr>`;
    }
    case "CTA Button": {
      const f = (c = t == null ? void 0 : t.textValue) == null ? void 0 : c.trim();
      if (!f)
        return "";
      const m = ((u = t == null ? void 0 : t.linkUrl) == null ? void 0 : u.trim()) || "#", y = Pa(n, "Accent", tn.accent), g = uu(n, "CTA", xr);
      return `<tr>
        <td align="${r}" style="${cu(e, "padding-bottom:32px;")}">
          <a href="${Yn(m)}" target="_blank" rel="noopener noreferrer" style="${oS()}background-color:${y};color:#ffffff;font-family:${g};font-size:16px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:4px;">
            ${Yn(f)}
          </a>
        </td>
      </tr>`;
    }
    case "HTML": {
      const f = e.isLocked ? e.htmlDefaultContent : (t == null ? void 0 : t.htmlValue) ?? e.htmlDefaultContent, m = rs(f);
      return m ? `<tr><td align="${r}" style="${o}font-family:Arial,sans-serif;font-size:16px;line-height:1.5;color:#333333;">${m}</td></tr>` : "";
    }
    case "Divider":
      return `<tr><td align="${r}" style="${o}"><hr style="border:none;border-top:1px solid #e0e0e0;margin:0;" /></td></tr>`;
    case "Background Color":
      return "";
    default:
      return "";
  }
}
function bd(e, t, n) {
  const r = Pa(n, "Background", tn.background), o = "#ffffff", i = ip(e), s = e.zones.sort((a, l) => a.sortOrder - l.sortOrder).map((a) => sS(a, t[a.id] ?? t[a.zoneKey], n)).filter(Boolean).join(`
`);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${Yn(e.templateName)}</title>
</head>
<body style="margin:0;padding:0;background-color:${r};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${r};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="${i}" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:${i}px;background-color:${o};border-collapse:collapse;">
          ${s}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
const mr = "dummy-brand-kit", qA = "dummy-template";
function Sr(e = mr) {
  return lb(e);
}
function aS(e, t = "Social") {
  return t === "Email" || t === "Newsletter" ? cS(e) : lS(e, t);
}
function lS(e, t = "Social") {
  const n = t === "Print" ? kv[0] : null;
  return {
    id: e,
    templateName: n ? "Demo Print Template" : "Demo Social Template",
    channelType: t,
    formatPreset: (n == null ? void 0 : n.formatPreset) ?? "1080x1080",
    canvasWidth: (n == null ? void 0 : n.width) ?? 1080,
    canvasHeight: (n == null ? void 0 : n.height) ?? 1080,
    brandKitId: mr,
    zones: [
      {
        id: "demo-zone-bg",
        zoneKey: "background",
        zoneLabel: "Background",
        zoneType: "Background Color",
        isLocked: !0,
        sortOrder: 0,
        positionX: 0,
        positionY: 0,
        zoneWidth: 1080,
        zoneHeight: 1080
      },
      {
        id: "demo-zone-logo",
        zoneKey: "logo",
        zoneLabel: "Logo",
        zoneType: "Logo",
        isLocked: !0,
        sortOrder: 1,
        positionX: 40,
        positionY: 40,
        zoneWidth: 200,
        zoneHeight: 80
      },
      {
        id: "demo-zone-headline",
        zoneKey: "headline",
        zoneLabel: "Headline",
        zoneType: "Heading",
        headingLevel: "H1",
        isLocked: !1,
        sortOrder: 2,
        positionX: 40,
        positionY: 200,
        zoneWidth: 1e3,
        zoneHeight: 120,
        maxCharacterCount: 80
      },
      {
        id: "demo-zone-image",
        zoneKey: "heroImage",
        zoneLabel: "Hero image",
        zoneType: "Image",
        isLocked: !1,
        sortOrder: 3,
        positionX: 40,
        positionY: 360,
        zoneWidth: 1e3,
        zoneHeight: 500,
        allowedAssetCollectionId: "demo-collection",
        aspectRatioLock: "16:9"
      },
      {
        id: "demo-zone-cta",
        zoneKey: "cta",
        zoneLabel: "Learn more",
        zoneType: "CTA Button",
        isLocked: !1,
        sortOrder: 4,
        positionX: 40,
        positionY: 900,
        zoneWidth: 220,
        zoneHeight: 56
      }
    ]
  };
}
function cS(e) {
  return {
    id: e,
    templateName: "Demo Email Template",
    channelType: "Email",
    formatPreset: "Email.StandardEmail",
    canvasWidth: 600,
    canvasHeight: 800,
    brandKitId: mr,
    zones: [
      {
        id: "demo-email-logo",
        zoneKey: "logo",
        zoneLabel: "Logo",
        zoneType: "Logo",
        isLocked: !0,
        sortOrder: 0
      },
      {
        id: "demo-email-headline",
        zoneKey: "headline",
        zoneLabel: "Headline",
        zoneType: "Heading",
        headingLevel: "H1",
        isLocked: !1,
        sortOrder: 1,
        maxCharacterCount: 120
      },
      {
        id: "demo-email-hero",
        zoneKey: "heroImage",
        zoneLabel: "Hero image",
        zoneType: "Image",
        isLocked: !1,
        sortOrder: 2,
        allowedAssetCollectionId: "demo-collection",
        aspectRatioLock: "16:9"
      },
      {
        id: "demo-email-body",
        zoneKey: "body",
        zoneLabel: "Body copy",
        zoneType: "Text",
        isLocked: !1,
        sortOrder: 3,
        maxCharacterCount: 500
      },
      {
        id: "demo-email-cta",
        zoneKey: "cta",
        zoneLabel: "Learn more",
        zoneType: "CTA Button",
        isLocked: !1,
        sortOrder: 4
      }
    ]
  };
}
function uS(e, t) {
  return {
    id: e,
    assetName: "Demo Marketing Asset",
    channelTypeMA: { id: "social", name: "Social" },
    formatPresetMA: { id: "1080x1080", name: "1080x1080" },
    outputFormatMA: { id: "PNG", name: "PNG" },
    templateId: t,
    isRawHtmlOverrideMA: !1,
    zoneValues: [
      { zoneKey: "headline", textValue: "Your headline here" },
      { zoneKey: "cta", textValue: "Learn more" }
    ]
  };
}
function dS(e) {
  const t = [
    {
      id: "demo-asset-1",
      name: "Demo hero image 1",
      thumbnailUrl: "https://placehold.co/400x400/png?text=Image+1"
    },
    {
      id: "demo-asset-2",
      name: "Demo hero image 2",
      thumbnailUrl: "https://placehold.co/400x400/png?text=Image+2"
    },
    {
      id: "demo-asset-3",
      name: "Demo hero image 3",
      thumbnailUrl: "https://placehold.co/400x400/png?text=Image+3"
    }
  ];
  if (!(e != null && e.trim()))
    return t;
  const n = e.trim().toLowerCase();
  return t.filter((r) => r.name.toLowerCase().includes(n));
}
function dr(e, t, n) {
  Ak(e, t, n);
}
function Ho(e) {
  return { Invariant: e };
}
function Fe(e, t, n) {
  e[t] = Ho(n);
}
function sp(e, t, n) {
  e[t] = n;
}
function Ft(e, t, n) {
  Number.isNaN(n) || (e[t] = n);
}
function Tr(e) {
  if (!(e == null || Number.isNaN(e)))
    return e;
}
function Ar(e) {
  const t = e == null ? void 0 : e.trim();
  return t || void 0;
}
function Fo(e) {
  const t = {
    ...e,
    sortOrder: Tr(e.sortOrder) ?? 0,
    positionX: Tr(e.positionX),
    positionY: Tr(e.positionY),
    zoneWidth: Tr(e.zoneWidth),
    zoneHeight: Tr(e.zoneHeight),
    offsetPx: Tr(e.offsetPx),
    maxCharacterCount: Tr(e.maxCharacterCount),
    aspectRatioLock: Ar(e.aspectRatioLock),
    htmlDefaultContent: Ar(e.htmlDefaultContent)
  };
  switch (t.zoneType) {
    case "Text":
      t.headingLevel = void 0, t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0;
      break;
    case "Heading":
      t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0, t.headingLevel || (t.headingLevel = Hn);
      break;
    case "Image":
      t.maxCharacterCount = void 0, t.headingLevel = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0;
      break;
    case "HTML":
      t.maxCharacterCount = void 0, t.headingLevel = void 0, t.aspectRatioLock = void 0;
      break;
    default:
      t.maxCharacterCount = void 0, t.headingLevel = void 0, t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0;
      break;
  }
  return t;
}
function fS(e, t) {
  const n = { zoneType: t };
  return t === "Heading" ? (n.headingLevel = e.headingLevel ?? Hn, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : (n.headingLevel = void 0, t === "Text" ? (n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "Image" ? (n.maxCharacterCount = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "HTML" ? (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n) : (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n));
}
function pS(e) {
  return {
    Title: Ho(e.zoneKey)
  };
}
const mS = {
  textValue: ["textValue", "TextValue", "text", "content", "zoneText", "value"],
  colorValue: ["colorValue", "ColorValue", "color", "hexValue"],
  htmlValue: ["htmlValue", "HtmlValue", "html", "htmlContent"],
  linkUrl: ["linkUrl", "LinkUrl", "url", "href", "link"]
};
function Mv(e) {
  const t = {};
  return e.textValue !== void 0 && Fe(t, "textValue", e.textValue), e.colorValue !== void 0 && Fe(t, "colorValue", e.colorValue), e.htmlValue !== void 0 && Fe(t, "htmlValue", e.htmlValue), e.linkUrl !== void 0 && Fe(t, "linkUrl", e.linkUrl), t;
}
function AS(e, t) {
  if (t.length === 0)
    return Mv(e);
  const n = /* @__PURE__ */ new Map();
  for (const i of t) {
    const s = i.name.includes(".") ? i.name.split(".").pop() ?? i.name : i.name;
    n.set(i.name.toLowerCase(), i.name), n.set(s.toLowerCase(), i.name);
  }
  const r = {}, o = [
    { key: "textValue", value: e.textValue },
    { key: "colorValue", value: e.colorValue },
    { key: "htmlValue", value: e.htmlValue },
    { key: "linkUrl", value: e.linkUrl }
  ];
  for (const i of o)
    if (i.value !== void 0)
      for (const s of mS[i.key]) {
        const a = n.get(s.toLowerCase());
        if (a && !(/^title$/i.test(a) || /\.Title$/i.test(a))) {
          Fe(r, a, i.value);
          break;
        }
      }
  return r;
}
function hS(e) {
  var t, n, r, o, i, s;
  return !!((t = e.textValue) != null && t.trim() || (n = e.htmlValue) != null && n.trim() || (r = e.colorValue) != null && r.trim() || (o = e.linkUrl) != null && o.trim() || (i = e.imageAssetId) != null && i.trim() || (s = e.imageAssetUrl) != null && s.trim());
}
function gS(e) {
  const t = {};
  return e.isRawHtmlOverrideMA !== void 0 && (t.isRawHtmlOverrideMA = e.isRawHtmlOverrideMA), e.rawHtmlOverrideContent !== void 0 && Fe(t, "rawHtmlOverrideContent", e.rawHtmlOverrideContent), e.overrideReasonMA !== void 0 && Fe(t, "overrideReasonMA", e.overrideReasonMA), e.zoneLayoutJson !== void 0 && Fe(t, "zoneLayoutJson", e.zoneLayoutJson), e.designerInstanceJson !== void 0 && Fe(t, "designerInstanceJson", e.designerInstanceJson), t;
}
function yS(e) {
  return { templateName: Ho(e.templateName) };
}
function Rv(e) {
  const t = {};
  return Fe(t, "templateName", e.templateName), e.canvasWidth !== void 0 && Ft(t, "canvasWidth", e.canvasWidth), e.canvasHeight !== void 0 && Ft(t, "canvasHeight", e.canvasHeight), e.designerDocumentJson !== void 0 && Fe(t, "designerDocumentJson", e.designerDocumentJson), t;
}
function vS(e, t, n = "designerDocumentJson") {
  const r = {};
  return Fe(r, n, e), (t == null ? void 0 : t.width) != null && Ft(r, "canvasWidth", t.width), (t == null ? void 0 : t.height) != null && Ft(r, "canvasHeight", t.height), r;
}
function Hv(e) {
  return {
    zoneKey: Ho(e.zoneKey),
    zoneLabel: Ho(e.zoneLabel || e.zoneKey)
  };
}
function wS(e, t) {
  if (!t)
    return Hv(e);
  const n = {}, r = Ar(e.zoneLabel) ?? e.zoneKey, o = Ar(t.zoneLabel) ?? t.zoneKey;
  return e.zoneKey !== t.zoneKey && Fe(n, "zoneKey", e.zoneKey), r !== o && Fe(n, "zoneLabel", r), n;
}
function CS(e) {
  const t = {};
  return Fe(t, "zoneType", e.zoneType), sp(t, "isLocked", e.isLocked), Ft(t, "sortOrder", e.sortOrder), t;
}
function TS(e, t) {
  const n = [
    ...new Set(
      (t != null && t.length ? t : []).concat([
        "zoneType",
        "ZoneType",
        "EPAM.zoneType",
        "zoneTypeMA"
      ])
    )
  ], r = [];
  for (const o of n)
    r.push({ [o]: Ho(e) }), r.push({ [o]: e });
  return r;
}
function ES(e, t) {
  const n = {};
  return (!t || e.isLocked !== t.isLocked) && sp(n, "isLocked", e.isLocked), (!t || e.sortOrder !== t.sortOrder) && Ft(n, "sortOrder", e.sortOrder), n;
}
function Fv(e, t) {
  const n = {};
  return e.positionX !== void 0 && e.positionX !== (t == null ? void 0 : t.positionX) && Ft(n, "positionX", e.positionX), e.positionY !== void 0 && e.positionY !== (t == null ? void 0 : t.positionY) && Ft(n, "positionY", e.positionY), e.zoneWidth !== void 0 && e.zoneWidth !== (t == null ? void 0 : t.zoneWidth) && Ft(n, "zoneWidth", e.zoneWidth), e.zoneHeight !== void 0 && e.zoneHeight !== (t == null ? void 0 : t.zoneHeight) && Ft(n, "zoneHeight", e.zoneHeight), e.contentAlignment !== void 0 && e.contentAlignment !== (t == null ? void 0 : t.contentAlignment) && Fe(n, "contentAlignment", e.contentAlignment), e.offsetDirection !== void 0 && e.offsetDirection !== (t == null ? void 0 : t.offsetDirection) && Fe(n, "offsetDirection", e.offsetDirection), e.offsetPx !== void 0 && e.offsetPx !== (t == null ? void 0 : t.offsetPx) && Ft(n, "offsetPx", e.offsetPx), n;
}
function Qv(e, t) {
  const n = Fo(e), r = {};
  return (n.zoneType === "Text" || n.zoneType === "Heading") && n.maxCharacterCount !== void 0 && n.maxCharacterCount !== (t == null ? void 0 : t.maxCharacterCount) && Ft(r, "maxCharacterCount", n.maxCharacterCount), n.zoneType === "Heading" && n.headingLevel !== void 0 && n.headingLevel !== (t == null ? void 0 : t.headingLevel) && Fe(r, "headingLevel", n.headingLevel), n.zoneType === "Image" && n.aspectRatioLock !== void 0 && n.aspectRatioLock !== Ar(t == null ? void 0 : t.aspectRatioLock) && Fe(r, "aspectRatioLock", n.aspectRatioLock), n.zoneType === "HTML" && (n.htmlDefaultContent !== void 0 && n.htmlDefaultContent !== Ar(t == null ? void 0 : t.htmlDefaultContent) && Fe(r, "htmlDefaultContent", n.htmlDefaultContent), n.htmlAllowUserOverride !== void 0 && n.htmlAllowUserOverride !== (t == null ? void 0 : t.htmlAllowUserOverride) && sp(r, "htmlAllowUserOverride", n.htmlAllowUserOverride)), r;
}
function _A(e) {
  const t = Fo(e);
  return {
    ...CS(t),
    ...Fv(t),
    ...Qv(t)
  };
}
function kS(e, t) {
  const n = Fo(e), r = Fo(t), o = Ar(n.zoneLabel) ?? n.zoneKey, i = Ar(r.zoneLabel) ?? r.zoneKey;
  return n.zoneKey === r.zoneKey && o === i && JSON.stringify(_A(n)) === JSON.stringify(_A(r));
}
function Qo(e) {
  return /^\d+$/.test(e);
}
const bS = ["Social", "Email", "Newsletter", "Print"];
function ap(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  if ("Invariant" in t)
    return t.Invariant;
  if (typeof t.identifier == "string" && t.identifier.trim())
    return t.identifier;
  const n = t.labels ?? t.Labels;
  if (n != null && typeof n == "object" && !Array.isArray(n)) {
    for (const o of Object.values(n))
      if (typeof o == "string" && o.trim())
        return o;
  }
  return Object.values(t).find((o) => typeof o == "string") ?? e;
}
function te(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = ap(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function Sn(e, ...t) {
  if (e)
    for (const n of t) {
      const r = ap(e[n]);
      if (typeof r == "number" && Number.isFinite(r))
        return r;
      if (typeof r == "string") {
        const o = Number(r);
        if (Number.isFinite(o))
          return o;
      }
    }
}
function Sd(e, ...t) {
  if (!e)
    return !1;
  for (const n of t) {
    const r = ap(e[n]);
    if (typeof r == "boolean")
      return r;
    if (typeof r == "string") {
      const o = r.trim().toLowerCase();
      if (o === "true" || o === "1")
        return !0;
      if (o === "false" || o === "0")
        return !1;
    }
  }
  return !1;
}
function Pt(e, ...t) {
  const n = _f(e, ...t);
  if (n.length > 0)
    return n;
  if (!e)
    return [];
  for (const r of t) {
    const o = e[r];
    if (!Array.isArray(o))
      continue;
    const i = Qr(o);
    if (i.length > 0)
      return i;
  }
  return [];
}
function sc(e, t) {
  if (!e)
    return [];
  for (const [n, r] of Object.entries(e)) {
    if (!t.test(n) || !Array.isArray(r))
      continue;
    const o = r.map((i) => typeof i == "number" ? i : void 0).filter((i) => typeof i == "number");
    if (o.length > 0)
      return o;
  }
  return [];
}
function SS(e) {
  const t = e.trim().toLowerCase();
  return t.includes("email") ? "Email" : t.includes("newsletter") ? "Newsletter" : t.includes("print") || t.includes("poster") || /\ba4\b/.test(t) ? "Print" : "Social";
}
function PS(e) {
  const t = te(e, "EPAM.headingLevel", "headingLevel");
  return t ? Jb(t) : void 0;
}
function NS(e) {
  const t = te(e, "EPAM.contentAlignment", "contentAlignment");
  return t ? zv(t) : void 0;
}
function DS(e) {
  const t = te(e, "EPAM.offsetDirection", "offsetDirection");
  return t ? Lv(t) : void 0;
}
function du(e, t = "") {
  return { id: String(e), name: t || String(e) };
}
function Uv(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = t, s = te(r, "EPAM.channelType", "channelType") || te(r, "EPAM.channelTypeMA", "channelTypeMA") || $n(i, "channelType"), a = te(r, "EPAM.brandKitId", "brandKitId"), l = Pt(
    o,
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit",
    "marketingTemplateToBrandKit"
  )[0];
  return {
    id: String(e),
    templateName: te(r, "EPAM.templateName", "templateName", "Title") || `Template ${e}`,
    channelType: bS.includes(s) ? s : SS(s),
    formatPreset: te(r, "EPAM.formatPreset", "formatPreset") || $n(i, "formatPreset") || "",
    canvasWidth: Sn(r, "EPAM.canvasWidth", "canvasWidth"),
    canvasHeight: Sn(r, "EPAM.canvasHeight", "canvasHeight"),
    brandKitId: a || (l != null ? String(l) : ""),
    zones: n,
    allowedAssetIds: Gv(t).map(String),
    designerDocumentJson: te(
      r,
      "EPAM.designerDocumentJson",
      "designerDocumentJson",
      "DesignerDocumentJson"
    ) || void 0
  };
}
function lp(e, t) {
  const n = t.properties ?? {}, r = t, o = te(n, "EPAM.zoneKey", "zoneKey") || `zone-${e}`, i = te(n, "EPAM.zoneLabel", "zoneLabel", "Title") || `Zone ${e}`, s = te(n, "EPAM.zoneType", "zoneType", "ZoneType", "zoneTypeMA", "ZoneTypeMA") || $n(r, "zoneType") || $n(r, "ZoneType") || $n(r, "EPAM.ZoneType") || $n(r, "zoneTypeMA"), a = tp(s, o, i), l = PS(n) ?? (a === "Heading" ? Hn : void 0);
  return {
    id: String(e),
    zoneKey: o,
    zoneLabel: i,
    zoneType: a,
    isLocked: Sd(n, "EPAM.isLocked", "isLocked"),
    sortOrder: Sn(n, "EPAM.sortOrder", "sortOrder") ?? 0,
    positionX: Sn(n, "EPAM.positionX", "positionX"),
    positionY: Sn(n, "EPAM.positionY", "positionY"),
    zoneWidth: Sn(n, "EPAM.zoneWidth", "zoneWidth"),
    zoneHeight: Sn(n, "EPAM.zoneHeight", "zoneHeight"),
    maxCharacterCount: Sn(n, "EPAM.maxCharacterCount", "maxCharacterCount"),
    headingLevel: l,
    contentAlignment: NS(n),
    offsetDirection: DS(n),
    offsetPx: Sn(n, "EPAM.offsetPx", "offsetPx"),
    aspectRatioLock: te(n, "EPAM.aspectRatioLock", "aspectRatioLock") || void 0,
    htmlDefaultContent: te(n, "EPAM.htmlDefaultContent", "htmlDefaultContent") || void 0,
    htmlAllowUserOverride: Sd(n, "EPAM.htmlAllowUserOverride", "htmlAllowUserOverride"),
    allowedAssetIds: Kv(t).map(String),
    allowedAssetCollectionId: te(n, "EPAM.allowedAssetCollectionId", "allowedAssetCollectionId") || void 0
  };
}
function jv(e, t) {
  const n = t.properties ?? {}, r = cp(t), o = r[0] != null ? String(r[0]) : void 0;
  return {
    id: String(e),
    zoneKey: te(n, "EPAM.zoneKey", "zoneKey", "Title") || `zone-${e}`,
    textValue: te(n, "EPAM.textValue", "textValue") || void 0,
    colorValue: te(n, "EPAM.colorValue", "colorValue") || void 0,
    htmlValue: te(n, "EPAM.htmlValue", "htmlValue") || void 0,
    imageAssetId: te(n, "EPAM.imageAssetId", "imageAssetId") || o || void 0,
    imageAssetUrl: te(n, "EPAM.imageAssetUrl", "imageAssetUrl") || void 0,
    linkUrl: te(n, "EPAM.linkUrl", "linkUrl") || void 0
  };
}
function xS(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = te(r, "EPAM.templateId", "templateId") || String(
    Pt(
      o,
      "marketingAssetToTemplate",
      "MarketingAssetToTemplate",
      "EPAM.MarketingAssetToTemplate"
    )[0] ?? ""
  );
  return {
    id: String(e),
    assetName: te(r, "EPAM.assetName", "assetName", "Title") || `Asset ${e}`,
    channelTypeMA: du(
      Pt(o, "channelTypeMA", "ChannelTypeMA")[0] ?? "channel",
      te(r, "EPAM.channelTypeMA", "channelTypeMA") || "Channel"
    ),
    formatPresetMA: du(
      Pt(o, "formatPresetMA", "FormatPresetMA")[0] ?? "format",
      te(r, "EPAM.formatPresetMA", "formatPresetMA") || "Format"
    ),
    outputFormatMA: du(
      Pt(o, "outputFormatMA", "OutputFormatMA")[0] ?? "output",
      te(r, "EPAM.outputFormatMA", "outputFormatMA") || "Output"
    ),
    templateId: i,
    isRawHtmlOverrideMA: Sd(r, "EPAM.isRawHtmlOverrideMA", "isRawHtmlOverrideMA"),
    rawHtmlOverrideContent: te(r, "EPAM.rawHtmlOverrideContent", "rawHtmlOverrideContent") || void 0,
    overrideReasonMA: te(r, "EPAM.overrideReasonMA", "overrideReasonMA") || void 0,
    zoneLayoutJson: te(r, "EPAM.zoneLayoutJson", "zoneLayoutJson", "builderLayoutJson") || void 0,
    designerInstanceJson: te(
      r,
      "EPAM.designerInstanceJson",
      "designerInstanceJson",
      "DesignerInstanceJson"
    ) || void 0,
    zoneValues: n,
    renderedOutputAssetId: te(r, "EPAM.renderedOutputAssetId", "renderedOutputAssetId") || String(Pt(o, "marketingAssetToRenderedOutput")[0] ?? "") || void 0
  };
}
function BS(e, t, n = [], r = []) {
  const o = t.properties ?? {};
  return {
    id: String(e),
    brandKitName: te(o, "EPAM.brandKitName", "brandKitName", "Title") || `Brand kit ${e}`,
    logoAssetUrl: te(o, "EPAM.logoAssetUrl", "logoAssetUrl"),
    colors: n,
    fonts: r
  };
}
function Gv(e) {
  const t = Pt(e.relations, ...av), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/template.*asset|allowed.*asset/i.test(r) || /collection|zone/i.test(r) || Array.isArray(o) && n.push(...Qr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function cp(e) {
  const t = Pt(e.relations, ...lv), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/selected.*asset|zonevalue.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Qr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function Kv(e) {
  const t = Pt(e.relations, ...sv), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/allowed.*asset|zone.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Qr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function OS(e) {
  return [.../* @__PURE__ */ new Set([
    ...Pt(
      e.relations,
      "templateToZone",
      "templateToTemplateZone",
      "TemplateToTemplateZone",
      "EPAM.TemplateToTemplateZone",
      "templateToEPAM.TemplateZone"
    ),
    ...sc(e.relations, /template.*zone/i)
  ])];
}
function Yv(e) {
  return [.../* @__PURE__ */ new Set([
    ...Pt(
      e.relations,
      "marketingAssetToZoneValue",
      "MarketingAssetToZoneValue",
      "EPAM.MarketingAssetToZoneValue"
    ),
    ...sc(e.relations, /zonevalue/i)
  ])];
}
function IS(e, t) {
  const n = t.properties ?? {}, r = te(n, "EPAM.colorUsageType", "colorUsageType") || "Primary";
  return {
    colorName: te(n, "EPAM.colorName", "colorName") || `Color ${e}`,
    hexValue: te(n, "EPAM.hexValue", "hexValue") || "#000000",
    colorUsageType: r
  };
}
function zS(e, t) {
  const n = t.properties ?? {}, r = te(n, "EPAM.fontUsageType", "fontUsageType") || "Body", o = te(n, "EPAM.fontWeight", "fontWeight") || "Regular";
  return {
    fontFamily: te(n, "EPAM.fontFamily", "fontFamily") || "sans-serif",
    fontWeight: o,
    fontUsageType: r
  };
}
function LS(e) {
  return Pt(
    e.relations,
    "brandKitToColor",
    "BrandKitToColor",
    "brandKitToBrandColor"
  ).concat(sc(e.relations, /color/i));
}
function MS(e) {
  return Pt(
    e.relations,
    "brandKitToFont",
    "BrandKitToFont",
    "brandKitToBrandFont"
  ).concat(sc(e.relations, /font/i));
}
function RS(e) {
  return ["Social", "Email", "Newsletter", "Print"].filter((t) => t !== e);
}
function HS(e, t, n, r) {
  const o = {
    id: `temp-dup-${n}-${t}`,
    zoneKey: e.zoneKey,
    zoneLabel: e.zoneLabel,
    zoneType: e.zoneType,
    isLocked: e.isLocked,
    sortOrder: t,
    contentAlignment: e.contentAlignment,
    offsetDirection: e.offsetDirection,
    offsetPx: e.offsetPx
  };
  return e.zoneType === "Heading" && (o.headingLevel = e.headingLevel, o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Text" && (o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Image" && (o.aspectRatioLock = e.aspectRatioLock), e.zoneType === "HTML" && (o.htmlDefaultContent = e.htmlDefaultContent, o.htmlAllowUserOverride = e.htmlAllowUserOverride), r === "Social" ? FS(o, t) : QS(o);
}
function FS(e, t) {
  const n = e.zoneType === "Logo" ? 80 : e.zoneType === "Image" ? 360 : e.zoneType === "Heading" ? 120 : e.zoneType === "CTA Button" ? 72 : 96;
  return {
    ...e,
    positionX: e.positionX ?? 40,
    positionY: e.positionY ?? 40 + t * (n + 24),
    zoneWidth: e.zoneWidth ?? 1e3,
    zoneHeight: n
  };
}
function QS(e) {
  return {
    ...e,
    positionX: void 0,
    positionY: void 0,
    zoneWidth: void 0,
    zoneHeight: void 0
  };
}
function US(e, t, n) {
  const r = Sv(t), o = Date.now(), i = [...e.zones].sort((s, a) => s.sortOrder - a.sortOrder).map((s, a) => HS(s, a, o, t));
  return {
    id: "temp-new-template",
    templateName: (n == null ? void 0 : n.trim()) || `${e.templateName} (${t})`,
    channelType: t,
    formatPreset: r.formatPreset,
    canvasWidth: r.canvasWidth,
    canvasHeight: r.canvasHeight,
    brandKitId: e.brandKitId,
    allowedAssetIds: e.allowedAssetIds,
    zones: i
  };
}
function up(e) {
  const t = kt(e, /allowed.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/^template/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...sv, ...t])];
}
function dp(e) {
  const t = kt(e, /template.*asset|allowed.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/zone/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...av, ...t])];
}
function jS(e) {
  const t = kt(e, /selected.*asset|zonevalue.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...lv, ...t])];
}
const fp = "/api/content-hub", GS = "/api/render-email-html";
let R = {}, ac = fp, Pd;
function pp() {
  return ac.replace(/\/$/, "") !== fp;
}
function KS(e) {
  const t = e.trim().replace(/\/$/, "");
  return !t || t === GS;
}
function YS(e) {
  R = e ?? {};
}
function ZS(e) {
  ac = e.replace(/\/$/, "") || fp;
}
function XS(e) {
  Pd = typeof e == "number" && Number.isFinite(e) && e > 0 ? e : void 0;
}
async function Nd(e, t) {
  const n = await fetch(`${ac}${e}`, {
    ...t,
    headers: {
      "Content-Type": "application/json",
      ...t == null ? void 0 : t.headers
    }
  });
  if (!n.ok) {
    const r = await n.text();
    throw new Error(`Content Hub API error (${n.status}): ${r}`);
  }
  return n.json();
}
async function ue(e) {
  var n;
  if (!((n = R == null ? void 0 : R.raw) != null && n.getAsync))
    throw new Error("Content Hub client is not available. This component must run inside Content Hub.");
  const t = await R.raw.getAsync(`/api/entities/${e}`);
  if (!t.isSuccessStatusCode || !t.content)
    throw new Error(`Content Hub API error (${t.statusCode ?? "unknown"}) loading entity ${e}`);
  return t.content;
}
async function En(e) {
  const t = [...new Set(e.filter((n) => Number.isFinite(n)))];
  return t.length === 0 ? [] : Promise.all(
    t.map(async (n) => {
      try {
        return await ue(n);
      } catch (r) {
        return ge(
          "related entity",
          `Skipped entity ${n}: ${r instanceof Error ? r.message : String(r)}`
        ), { properties: {}, relations: {}, systemProperties: { id: n } };
      }
    })
  );
}
async function WS(e, t, n) {
  var o;
  let r = ((o = t.brandKitId) == null ? void 0 : o.trim()) ?? "";
  if (!r) {
    const i = await ln(
      R,
      e,
      "templateToBrandKit",
      n.relations
    );
    i[0] != null ? (r = String(i[0]), q("brandKitId", `Resolved ${r} from templateToBrandKit on template ${e}`)) : We(
      "brandKitId",
      `No brand kit linked on template ${e}`,
      "Link templateToBrandKit on the template, or set brandKitId in External component Configuration."
    );
  }
  return {
    ...t,
    brandKitId: r,
    allowedAssetIds: t.allowedAssetIds && t.allowedAssetIds.length > 0 ? t.allowedAssetIds : Gv(n).map(String)
  };
}
async function VS(e, t) {
  const n = Kv(t);
  if (n.length > 0)
    return { ...e, allowedAssetIds: n.map(String) };
  if (!ut(t.relations, "templateZoneToAllowedAssetCollection"))
    return e;
  const r = await ln(
    R,
    e.id,
    "templateZoneToAllowedAssetCollection",
    t.relations
  );
  return r[0] != null ? { ...e, allowedAssetCollectionId: String(r[0]) } : e;
}
function Zv(e) {
  const t = kt(e, /template.*zone/i);
  return [.../* @__PURE__ */ new Set([...t, ...es])];
}
async function JS(e, t, n) {
  var o;
  if (!((o = R == null ? void 0 : R.raw) != null && o.getAsync))
    return [];
  const r = encodeURIComponent(
    `Definition.Name=='${e}' AND Parent('${t}').Id==${n}`
  );
  try {
    const i = await R.raw.getAsync(
      `/api/entities/query?query=${r}`
    );
    if (!i.isSuccessStatusCode || !i.content)
      return [];
    const s = Array.isArray(i.content) ? i.content : Array.isArray(i.content.items) ? i.content.items : [], a = [];
    for (const l of s) {
      if (l == null || typeof l != "object")
        continue;
      const c = l, u = c.systemProperties, f = (u == null ? void 0 : u.id) ?? c.id ?? c.entityId;
      typeof f == "number" && Number.isFinite(f) && a.push(f);
    }
    return a;
  } catch {
    return [];
  }
}
const qS = ["channelType", "ChannelType", "EPAM.ChannelType"], _S = ["formatPreset", "FormatPreset", "EPAM.FormatPreset"];
async function Xv(e) {
  var i, s;
  if (!((i = R == null ? void 0 : R.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating templates.");
  const t = [
    yS(e),
    { Title: { Invariant: e.templateName } },
    { templateName: e.templateName }
  ];
  let n = null, r = "unknown";
  for (const a of t) {
    const l = await R.raw.postAsync("/api/entities", {
      entitydefinition: {
        href: "/api/entitydefinitions/EPAM.Template"
      },
      properties: a
    });
    if (l.isSuccessStatusCode && ((s = l.content) == null ? void 0 : s.id) != null) {
      n = String(l.content.id);
      break;
    }
    r = String(l.statusCode ?? "unknown"), ge("template create", `Create attempt failed (${r}) with keys: ${Object.keys(a).join(", ")}`);
  }
  if (!n)
    throw new Error(
      `Failed to create template "${e.templateName}" (HTTP ${r}). Check Create permission on EPAM.Template and that templateName is a valid property.`
    );
  const o = Rv(e);
  if (Object.keys(o).length > 0)
    try {
      await qv(n, o);
    } catch (a) {
      ge(
        "template create",
        `Template ${n} created but optional property update failed: ${a instanceof Error ? a.message : String(a)}`
      );
    }
  return q("template create", `Created EPAM.Template ${n} (${e.templateName})`), n;
}
async function $S(e, t, n) {
  var i;
  return (await lc(n)).channelType === t ? n : (i = (await Jv(e)).find((s) => s.channelType === t)) == null ? void 0 : i.id;
}
async function $A(e, t, n, r) {
  const o = await ue(t);
  for (const i of n) {
    const s = await ln(
      R,
      t,
      i,
      o.relations
    );
    if (s[0] == null)
      continue;
    if (await Ro(
      R,
      e,
      String(s[0]),
      n[0]
    )) {
      q("template taxonomy", `Linked ${r} on template ${e} from template ${t}`);
      return;
    }
  }
  We(
    "template taxonomy",
    `Could not link ${r} on template ${e} from reference ${t}`,
    `Set ${r} on the template in Content Hub.`
  );
}
async function Wv(e, t, n, r) {
  if (!(n != null && n.trim()))
    return;
  const o = await $S(
    n,
    t,
    r
  );
  if (!o) {
    We(
      "template taxonomy",
      `No ${t} template in brand kit ${n} to copy channelType/formatPreset from`,
      "Link channelType and formatPreset on the new template in Content Hub."
    );
    return;
  }
  await $A(
    e,
    o,
    qS,
    "channelType"
  ), await $A(
    e,
    o,
    _S,
    "formatPreset"
  );
}
async function Vv(e, t) {
  if (!(t != null && t.trim()))
    return;
  if (await Ro(R, e, t, "templateToBrandKit")) {
    q("template brand kit", `Linked template ${e} to brand kit ${t}`);
    return;
  }
  if (await cn(R, t, e, "brandKitToTemplate")) {
    q("template brand kit", `Linked brand kit ${t} to template ${e}`);
    return;
  }
  We(
    "template brand kit",
    `Could not link template ${e} to brand kit ${t}`,
    "Link templateToBrandKit on the template in Content Hub."
  );
}
async function Jv(e) {
  if (!(e != null && e.trim()) || e === mr)
    return [];
  let t = [];
  for (const o of [
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit"
  ])
    if (t = await JS("EPAM.Template", o, e), t.length > 0)
      break;
  if (t.length === 0)
    try {
      const o = await ue(e);
      t = await ln(
        R,
        e,
        "brandKitToTemplate",
        o.relations
      );
    } catch {
      t = [];
    }
  const n = [...new Set(t)];
  return n.length === 0 ? [] : (await Promise.all(n.map((o) => lc(String(o))))).sort((o, i) => o.templateName.localeCompare(i.templateName));
}
async function eP(e, t, n) {
  const r = await lc(e), o = US(r, t, n), i = await Xv(o);
  o.brandKitId && (await Vv(i, o.brandKitId), await Wv(
    i,
    o.channelType,
    o.brandKitId,
    e
  ));
  const s = await mp({ ...o, id: i }, []);
  return await tw(s.id, r.allowedAssetIds ?? []), q(
    "template duplicate",
    `Created template ${s.id} (${s.templateName}) from ${e} as ${t}`
  ), s;
}
async function tP(e, t) {
  var i;
  const n = {
    ...e,
    id: ((i = e.id) == null ? void 0 : i.trim()) || "",
    zones: e.zones ?? []
  }, r = await Xv(n);
  n.brandKitId && (await Vv(r, n.brandKitId), t != null && t.trim() && await Wv(
    r,
    n.channelType,
    n.brandKitId,
    t
  ));
  const o = await mp({ ...n, id: r }, []);
  return await tw(o.id, n.allowedAssetIds ?? []), q(
    "template create",
    `Created template ${o.id} (${o.templateName}) with ${o.zones.length} zone(s)`
  ), o;
}
async function nP(e, t) {
  const n = await ue(e), r = [
    "marketingAssetToTemplate",
    "MarketingAssetToTemplate",
    "EPAM.MarketingAssetToTemplate"
  ], o = await ln(R, e, r[0], n.relations);
  for (const s of o)
    if (String(s) !== t)
      for (const a of r)
        await Xo(R, e, s, a, n.relations);
  let i = !1;
  for (const s of r)
    if (await cn(R, e, t, s, n.relations)) {
      i = !0;
      break;
    }
  if (!i)
    throw new Error(
      `Could not link template ${t} to marketing asset ${e}. Check marketingAssetToTemplate relation permissions.`
    );
  q("marketing asset template", `Linked marketing asset ${e} to template ${t}`);
}
async function rP(e, t) {
  var r;
  if (!((r = R == null ? void 0 : R.raw) != null && r.getAsync))
    return [];
  const n = encodeURIComponent(
    `Definition.Name=='EPAM.TemplateZone' AND Parent('${t}').Id==${e}`
  );
  try {
    const o = await R.raw.getAsync(
      `/api/entities/query?query=${n}`
    );
    if (!o.isSuccessStatusCode || !o.content)
      return [];
    const i = Array.isArray(o.content) ? o.content : Array.isArray(o.content.items) ? o.content.items : [], s = [];
    for (const a of i) {
      if (a == null || typeof a != "object")
        continue;
      const l = a, c = l.systemProperties, u = (c == null ? void 0 : c.id) ?? l.id ?? l.entityId;
      typeof u == "number" && Number.isFinite(u) && s.push(u);
    }
    return s;
  } catch {
    return [];
  }
}
async function lc(e) {
  const t = await ue(e);
  Ok(e, t);
  let n = [...new Set(OS(t))];
  if (n.length === 0) {
    const i = Zv(t.relations), s = await $i(
      R,
      e,
      t.relations,
      i.filter((a) => ut(t.relations, a))
    );
    n = s.ids, s.relationName && q("template zones", `Found zones via relation ${s.relationName}`);
  }
  if (n.length === 0) {
    const { templateChildRelations: i, zoneParentRelations: s } = await ql(
      R,
      t.relations
    );
    for (const a of s) {
      const l = await rP(e, a);
      if (l.length > 0) {
        n = l, q(
          "template zones",
          `Found ${l.length} zone(s) via parent query on ${a}`
        );
        break;
      }
    }
    if (n.length === 0 && i.length > 0) {
      const a = await $i(
        R,
        e,
        t.relations,
        i.filter((l) => ut(t.relations, l))
      );
      n = a.ids, a.relationName && q("template zones", `Found zones via relation ${a.relationName}`);
    }
  }
  let r = [];
  if (n.length > 0)
    try {
      const i = await En(n);
      await jk(R, ue, i), r = await Promise.all(
        i.map(async (s, a) => {
          const l = lp(n[a], s), c = await VS(l, s);
          return yv(R, ue, c, s);
        })
      );
    } catch (i) {
      ge(
        "template zones",
        `Could not load zones for template ${e}: ${i instanceof Error ? i.message : String(i)}`
      ), r = [];
    }
  const o = await WS(
    e,
    Uv(e, t, r),
    t
  );
  return r.length > 0 ? (q("template zones", `Loaded ${r.length} zone(s) for template ${e}`), o) : (We(
    "template zones",
    `Template ${e} has no linked zones yet`,
    'This is normal for a new template. Use "Edit Template Zones" to add zones, or link EPAM.TemplateZone entities in Content Hub. Zones link via a Parent relation on EPAM.TemplateZone → EPAM.Template (not on the template entity itself).'
  ), o);
}
async function oP(e) {
  var i;
  const t = await ue(e);
  let n = [...new Set(Yv(t))];
  n.length === 0 && (n = await ln(
    R,
    e,
    "marketingAssetToZoneValue",
    t.relations
  ));
  let r = [];
  if (n.length > 0)
    try {
      const s = await En(n);
      r = await Promise.all(
        s.map(
          async (a, l) => pP(n[l], jv(n[l], a), a)
        )
      ), q("zone values", `Loaded ${r.length} zone value(s) for asset ${e}`);
    } catch (s) {
      ge(
        "zone values",
        `Could not load zone values for asset ${e}: ${s instanceof Error ? s.message : String(s)}`
      ), r = [];
    }
  else
    We(
      "zone values",
      `Marketing asset ${e} has no marketingAssetToZoneValue relations yet`,
      "Zone values will be created when you click Save and render HTML."
    );
  let o = xS(e, t, r);
  if (!((i = o.templateId) != null && i.trim())) {
    const s = await ln(
      R,
      e,
      "marketingAssetToTemplate",
      t.relations
    );
    s[0] != null && (o = { ...o, templateId: String(s[0]) });
  }
  return o;
}
async function iP(e) {
  if (!(e != null && e.trim()) || e === mr)
    return dr(
      "brand kit",
      "No brand kit id resolved",
      "Link templateToBrandKit on the template or set brandKitId in Configuration."
    ), yi(Sr(e || mr));
  try {
    const t = await ue(e), n = [...new Set(LS(t))], r = [...new Set(MS(t))], [o, i] = await Promise.all([
      En(n),
      En(r)
    ]), s = o.map(
      (c, u) => IS(n[u], c)
    ), a = i.map(
      (c, u) => zS(r[u], c)
    ), l = BS(e, t, s, a);
    return !l.logoAssetUrl && s.length === 0 && a.length === 0 ? (dr(
      "brand kit",
      `Brand kit ${e} (${l.brandKitName}) has no colors, fonts, or logo linked`,
      "Add brandKitToColor / brandKitToFont relations and a logo asset on the brand kit."
    ), yi(Sr(e))) : (s.length === 0 ? We("brand kit colors", `Brand kit ${e} has no colors linked`, "Link colors via brandKitToColor.") : q("brand kit colors", `Loaded ${s.length} color(s) for brand kit ${e}`), a.length === 0 ? We("brand kit fonts", `Brand kit ${e} has no fonts linked`, "Link fonts via brandKitToFont.") : q("brand kit fonts", `Loaded ${a.length} font(s) for brand kit ${e}`), l.logoAssetUrl || We("brand kit logo", `Brand kit ${e} has no logo asset`, "Set logoAssetUrl on the brand kit entity."), yi({
      ...Sr(e),
      ...l,
      colors: s.length > 0 ? s : Sr(e).colors,
      fonts: a.length > 0 ? a : Sr(e).fonts
    }));
  } catch (t) {
    return dr("brand kit", t, `Could not load brand kit entity ${e}.`), yi(Sr(e));
  }
}
function sP(e, t) {
  const n = Uv(e.id, t, e.zones);
  return n.templateName !== e.templateName || n.canvasWidth !== e.canvasWidth || n.canvasHeight !== e.canvasHeight || n.designerDocumentJson !== e.designerDocumentJson;
}
async function Cs(e, t, n, r) {
  var u;
  if (!((u = R == null ? void 0 : R.raw) != null && u.putAsync))
    throw new Error(`Content Hub client is not available for saving ${n}.`);
  if (Object.keys(t).length === 0)
    return !0;
  const o = await ue(e), i = zk(o, t, r), s = await R.raw.putAsync(`/api/entities/${e}`, i);
  if (s.isSuccessStatusCode)
    return !0;
  const a = s.statusCode ?? "unknown", l = s.content != null && typeof s.content == "object" ? String(s.content.Message ?? "") : "", c = l ? `: ${l}` : "";
  if (a === 403 || a === 401)
    return We(
      n,
      `Permission denied (${a}) updating entity ${e}${c}`,
      "Grant update permission on this entity definition for your role."
    ), !1;
  throw new Error(
    `Content Hub API error (${a}) saving ${n} on entity ${e}${c}`
  );
}
async function qv(e, t) {
  return Cs(e, t, "template properties", "EPAM.Template");
}
async function mp(e, t = []) {
  var l;
  if (!((l = R == null ? void 0 : R.raw) != null && l.postAsync))
    throw new Error("Content Hub client is not available for saving template zones.");
  const n = await ue(e.id);
  sP(e, n) && (await qv(e.id, Rv(e)) ? q("template properties", `Saved properties on template ${e.id}`) : ge(
    "template properties",
    `Skipped property update on template ${e.id}; continuing with zone save.`
  ));
  const r = await ql(R, n.relations), o = aP(
    n.relations,
    r.templateChildRelations
  ), i = [], s = /* @__PURE__ */ new Set();
  for (const c of t)
    !e.zones.some((f) => f.id === c.id) && Qo(c.id) && s.add(c.id);
  const a = [...e.zones].sort((c, u) => c.sortOrder - u.sortOrder);
  for (const c of a) {
    const u = t.find((y) => y.id === c.id);
    if (!(!u || !kS(c, u))) {
      i.push(c);
      continue;
    }
    if (Qo(c.id)) {
      await uP(c.id, c), i.push(c);
      continue;
    }
    const m = await dP(c);
    await lP(
      e.id,
      m,
      o,
      n.relations,
      r
    ), i.push({ ...c, id: m }), q("template zone", `Created EPAM.TemplateZone ${m} (${c.zoneKey}) and linked to template ${e.id}`);
  }
  for (const c of s)
    await fP(e.id, c, o, n.relations);
  return q("template zones", `Saved ${i.length} template zone(s) on template ${e.id}`), { ...e, zones: i };
}
function aP(e, t = []) {
  const n = [
    ...t,
    ...Zv(e)
  ];
  for (const r of n)
    if (ut(e, r))
      return r;
  return t[0] ?? es[0];
}
async function lP(e, t, n, r, o) {
  const i = o ?? await ql(R, r);
  let s;
  try {
    const f = await ue(t);
    s = f.relations, Ik(t, f);
  } catch {
    s = void 0;
  }
  const a = kt(s, /template/i).filter(
    (f) => !/collection|asset/i.test(f)
  ), l = Oi(
    [...a, ...i.zoneParentRelations, ...nl],
    s,
    /zone.*template|template/i
  );
  for (const f of l)
    if (await Ro(R, t, e, f, s)) {
      q("template zone link", `Linked zone ${t} to template ${e} via parent relation ${f}`);
      return;
    }
  const c = Oi(
    [n, ...i.templateChildRelations, ...es],
    r,
    /template.*zone/i
  ).filter((f) => !!ut(r, f));
  for (const f of c)
    if (await cn(R, e, t, f, r)) {
      q("template zone link", `Linked zone ${t} to template ${e} via child relation ${f}`);
      return;
    }
  const u = Oi(
    [n, ...i.templateChildRelations, ...es],
    r,
    /template.*zone/i
  ).filter((f) => !ut(r, f));
  for (const f of u)
    if (await cn(R, e, t, f, r)) {
      q(
        "template zone link",
        `Linked zone ${t} to template ${e} via definition child relation ${f}`
      );
      return;
    }
  throw new Error(
    `Could not link zone ${t} to template ${e}. Tried parent relations: ${l.join(", ") || "(none from definition)"}; child relations: ${[...c, ...u].join(", ") || "(none)"}. Confirm EPAM.TemplateZone has a parent relation to EPAM.Template in Content Hub.`
  );
}
async function Dn(e, t, n) {
  if (Object.keys(t).length === 0)
    return !0;
  try {
    return await Cs(e, t, n);
  } catch (r) {
    return ge(
      n,
      `Optional property update skipped for entity ${e}: ${r instanceof Error ? r.message : String(r)}`
    ), !1;
  }
}
async function fu(e, t, n) {
  const r = await ue(e), o = lp(e, r);
  return (await yv(R, ue, o, r)).zoneType;
}
async function cP(e, t, n) {
  const r = Fo(t), o = await qk(R), i = Fk(n), s = i || $k(o), a = async () => {
    for (const c of TS(
      r.zoneType,
      o.propertyNames
    ))
      if (await Dn(e, c, "template zone type"), await fu(
        e,
        r.zoneKey,
        r.zoneLabel
      ) === r.zoneType)
        return q(
          "template zone type",
          `Persisted "${r.zoneType}" on zone ${e} via property ${Object.keys(c).join(", ")}`
        ), !0;
    return !1;
  };
  if (s) {
    const c = await Xk(
      R,
      ue,
      e,
      r.zoneType,
      n
    ), u = await fu(
      e,
      r.zoneKey,
      r.zoneLabel
    );
    if (u === r.zoneType)
      return !0;
    c && ge(
      "template zone type",
      `Relation link reported success for zone ${e} but reload still reads "${u}".`
    );
  }
  if (!i && _k(o) && await a())
    return !0;
  const l = await fu(
    e,
    r.zoneKey,
    r.zoneLabel
  );
  return ge(
    "template zone type",
    `Zone ${e} (${r.zoneKey}) still reads as "${l}" after save; expected "${r.zoneType}".`
  ), l === r.zoneType;
}
async function _v(e, t) {
  const n = Fo(t), r = await ue(e), o = lp(e, r), i = wS(n, o);
  if (Object.keys(i).length > 0 && !await Dn(e, i, "template zone identity") && i.zoneLabel != null) {
    const f = n.zoneLabel || n.zoneKey;
    await Dn(
      e,
      { Title: { Invariant: f } },
      "template zone title"
    );
  }
  const s = await cP(e, n, r), a = await Dn(
    e,
    ES(n, o),
    "template zone flags"
  );
  if (!s && !a)
    throw new Error(
      `Could not save zone type "${n.zoneType}" on template zone ${e} (${n.zoneKey}).`
    );
  s || ge(
    "template zone type",
    `Zone flags saved on ${e}, but zone type "${n.zoneType}" may not have persisted in Content Hub.`
  );
  const l = Fv(n, o);
  Object.keys(l).length > 0 && await Dn(e, l, "template zone layout");
  const c = Qv(n, o);
  Object.keys(c).length > 0 && await Dn(e, c, "template zone optional");
}
async function uP(e, t) {
  try {
    await _v(e, t);
  } catch (n) {
    throw new Error(
      `Permission denied updating template zone ${e} (${t.zoneKey}). Grant Update on EPAM.TemplateZone. ${n instanceof Error ? n.message : String(n)}`
    );
  }
  q("template zone", `Updated EPAM.TemplateZone ${e} (${t.zoneKey}, type ${t.zoneType})`);
}
async function dP(e) {
  var i;
  const t = R.raw;
  if (!(t != null && t.postAsync))
    throw new Error("Content Hub client does not support creating template zones.");
  const n = [
    Hv(e),
    {
      zoneKey: e.zoneKey,
      zoneLabel: e.zoneLabel || e.zoneKey
    },
    { Title: { Invariant: e.zoneLabel || e.zoneKey } }
  ];
  let r = null, o = "unknown";
  for (const s of n) {
    const a = await t.postAsync("/api/entities", {
      entitydefinition: {
        href: "/api/entitydefinitions/EPAM.TemplateZone"
      },
      properties: s
    });
    if (a.isSuccessStatusCode && ((i = a.content) == null ? void 0 : i.id) != null) {
      r = String(a.content.id);
      break;
    }
    o = String(a.statusCode ?? "unknown"), ge(
      "template zone create",
      `Create attempt failed (${o}) for ${e.zoneKey} with keys: ${Object.keys(s).join(", ")}`
    );
  }
  if (!r)
    throw new Error(
      `Failed to create template zone ${e.zoneKey} (HTTP ${o}). Check Create permission on EPAM.TemplateZone.`
    );
  try {
    await _v(r, e);
  } catch (s) {
    ge(
      "template zone create",
      `Zone ${r} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return r;
}
async function fP(e, t, n, r) {
  const o = await ql(R, r);
  let i;
  try {
    i = (await ue(t)).relations;
  } catch {
    i = void 0;
  }
  const s = Oi(
    [...o.zoneParentRelations, ...nl],
    i,
    /zone.*template/i
  );
  for (const l of s)
    if (await mv(R, t, e, l, i)) {
      q("template zone unlink", `Cleared parent ${e} from zone ${t} via ${l}`);
      return;
    }
  const a = Oi(
    [n, ...o.templateChildRelations, ...es],
    r,
    /template.*zone/i
  ).filter((l) => !!ut(r, l));
  for (const l of a)
    if (await Xo(R, e, t, l, r)) {
      q("template zone unlink", `Removed zone ${t} from template ${e} via ${l}`);
      return;
    }
  We(
    "template zone unlink",
    `Could not remove zone ${t} from template ${e}`,
    "The new zone was created and linked, but the previous zone link may need to be removed manually in Content Hub."
  );
}
async function pP(e, t, n) {
  var i;
  const r = cp(n), o = t.imageAssetId || (r[0] != null ? String(r[0]) : void 0);
  if (!o)
    return t;
  if ((i = t.imageAssetUrl) != null && i.trim())
    return { ...t, imageAssetId: o };
  try {
    const s = await ue(o), a = Wo(o, s);
    if (a)
      return {
        ...t,
        imageAssetId: o,
        imageAssetUrl: a.previewUrl ?? a.thumbnailUrl
      };
  } catch {
  }
  return { ...t, imageAssetId: o };
}
async function $v(e) {
  const t = await ue(e), n = dp(t.relations), r = await $i(
    R,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await En(r.ids)).map((i, s) => Wo(r.ids[s], i)).filter((i) => i != null);
}
async function ew(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ue(n), i = dp(o.relations);
  for (const a of i)
    if (await cn(
      R,
      n,
      r,
      a,
      o.relations
    ))
      return q(
        "template allowed asset",
        `Linked asset ${r} to template ${n} via ${a}`
      ), !0;
  if ((s = R == null ? void 0 : R.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await R.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return q(
          "template allowed asset",
          `Linked asset ${r} to template ${n} via ${a}`
        ), !0;
  }
  return We(
    "template allowed asset",
    `Could not link asset ${r} to template ${n}`,
    "Create a child relation on EPAM.Template to M.Asset (e.g. templateToAllowedAsset)."
  ), !1;
}
async function mP(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ue(n), i = dp(o.relations);
  for (const s of i)
    if (await Xo(
      R,
      n,
      r,
      s,
      o.relations
    ))
      return q(
        "template allowed asset",
        `Removed asset ${r} from template ${n} via ${s}`
      ), !0;
  return !1;
}
async function tw(e, t = []) {
  const n = [...new Set(t.map((i) => i.trim()).filter(Boolean))];
  if (n.length === 0)
    return;
  const r = await $v(e), o = new Set(r.map((i) => i.id));
  for (const i of n)
    o.has(i) || await ew(e, i);
}
async function AP(e) {
  const t = await ue(e);
  return cp(t).map(String);
}
let Er = null;
async function hP(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ue(n), i = jS(o.relations), s = i.filter((f) => !!ut(o.relations, f)), a = Er == null ? void 0 : Er.name, l = [
    ...new Set(
      [
        a,
        ...s,
        // Prefer the known-good name before spraying aliases that 404.
        "zoneValueToSelectedAsset",
        ...i
      ].filter((f) => !!f)
    )
  ].slice(0, a || s.length > 0 ? 3 : 4), c = await AP(n);
  for (const f of c)
    if (f !== r)
      for (const m of l)
        await Xo(
          R,
          n,
          f,
          m,
          o.relations
        ), await mv(
          R,
          n,
          f,
          m,
          o.relations
        );
  if (c.includes(r))
    return !0;
  const u = (Er == null ? void 0 : Er.mode) === "child" ? ["child", "parent"] : ["parent", "child"];
  for (const f of u)
    for (const m of l)
      if (f === "parent" ? await Ro(
        R,
        n,
        r,
        m,
        o.relations
      ) : await cn(
        R,
        n,
        r,
        m,
        o.relations
      ))
        return Er = { name: m, mode: f }, q(
          "zone value selected asset",
          `Linked asset ${r} to zone value ${n} via ${m} (${f})`
        ), !0;
  return We(
    "zone value selected asset",
    `Could not link asset ${r} to zone value ${n}`,
    "Create a relation on EPAM.MarketingAssetZoneValue to M.Asset (e.g. zoneValueToSelectedAsset)."
  ), !1;
}
async function gP(e, t) {
  var n;
  (n = t.imageAssetId) != null && n.trim() && await hP(e, t.imageAssetId);
}
async function yP(e) {
  const t = await ue(e), n = up(t.relations), r = await $i(
    R,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await En(r.ids)).map((i, s) => Wo(r.ids[s], i)).filter((i) => i != null);
}
async function vP(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ue(n), i = up(o.relations);
  for (const a of i)
    if (await cn(
      R,
      n,
      r,
      a,
      o.relations
    ))
      return q(
        "zone allowed asset",
        `Linked asset ${r} to zone ${n} via ${a}`
      ), !0;
  if ((s = R == null ? void 0 : R.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await R.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return q(
          "zone allowed asset",
          `Linked asset ${r} to zone ${n} via ${a}`
        ), !0;
  }
  return We(
    "zone allowed asset",
    `Could not link asset ${r} to zone ${n}`,
    "Create a child relation on EPAM.TemplateZone to M.Asset (e.g. templateZoneToAllowedAsset)."
  ), !1;
}
async function wP(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ue(n), i = up(o.relations);
  for (const s of i)
    if (await Xo(
      R,
      n,
      r,
      s,
      o.relations
    ))
      return q(
        "zone allowed asset",
        `Removed asset ${r} from zone ${n} via ${s}`
      ), !0;
  return !1;
}
async function nw(e) {
  const t = await ue(e), n = [
    .../* @__PURE__ */ new Set([
      ...rp,
      ...kt(t.relations, /asset/i)
    ])
  ].filter((i) => ut(t.relations, i)), r = await $i(
    R,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await En(r.ids)).map((i, s) => Wo(r.ids[s], i)).filter((i) => i != null);
}
function rw(e) {
  if (Array.isArray(e))
    return e;
  if (!e || typeof e != "object")
    return [];
  const t = e, n = [t.items, t.content, t.children, t.results, t.data];
  for (const r of n) {
    if (Array.isArray(r))
      return r;
    if (r && typeof r == "object") {
      const o = r.items;
      if (Array.isArray(o))
        return o;
    }
  }
  return [];
}
function CP(e) {
  var n;
  const t = [];
  for (const r of rw(e)) {
    if (typeof r == "number" && Number.isFinite(r)) {
      t.push(r);
      continue;
    }
    if (!r || typeof r != "object")
      continue;
    const o = r, i = (n = o.systemProperties) == null ? void 0 : n.id, s = o.id ?? o.entityId ?? i;
    typeof s == "number" && Number.isFinite(s) ? t.push(s) : typeof s == "string" && /^\d+$/.test(s.trim()) && t.push(Number(s.trim()));
  }
  return t.length > 0 ? [...new Set(t)] : [...new Set(Jl(e))];
}
function TP(e, t) {
  const n = (e == null ? void 0 : e.trim()) ?? "", r = typeof navigator < "u" && navigator.language ? navigator.language : "en-US";
  return {
    query: n,
    defaults: "SearchConfiguration",
    configuration_category: "PortalConfiguration",
    aggregations: [],
    ...t != null ? { component: t } : {},
    culture: r,
    fields: ["Title"],
    filters: [],
    fulltext: n ? [n] : [],
    is_initial_request: !n,
    l10n: !1,
    nested_relations: [],
    saved_selection: 0,
    skip: 0,
    sorting: { field: "None", asc: !1 },
    take: 20,
    take_user_settings: !0,
    view: "grid",
    visualSearch: { type: "vector" }
  };
}
async function ow(e) {
  const n = rw(e).map((i) => rb(i)).filter((i) => i != null);
  if (n.length > 0)
    return n;
  const r = CP(e).slice(0, 48);
  return r.length === 0 ? [] : (await En(r)).map((i, s) => Wo(r[s], i)).filter((i) => i != null);
}
async function EP(e) {
  var n;
  if (!((n = R == null ? void 0 : R.raw) != null && n.postAsync))
    return [];
  const t = Pd != null ? [Pd, void 0] : [9815, void 0];
  for (const r of t)
    try {
      const o = await R.raw.postAsync(
        "/api/search",
        TP(e, r)
      );
      if (!o.isSuccessStatusCode || o.content == null)
        continue;
      const i = await ow(o.content);
      if (i.length > 0)
        return q(
          "asset search",
          `Found ${i.length} approved asset(s) via /api/search${r != null ? ` (component ${r})` : ""}`
        ), i;
    } catch {
    }
  return [];
}
async function kP(e) {
  var o;
  const t = await EP(e);
  if (t.length > 0)
    return t;
  if (!((o = R == null ? void 0 : R.raw) != null && o.getAsync))
    return [];
  const n = (e == null ? void 0 : e.trim()) || "*", r = [
    `/api/entities/search?query=${encodeURIComponent(n)}&definitionNames=M.Asset&take=48`,
    `/api/entities/search?fullText=${encodeURIComponent(n)}&definitionNames=M.Asset&take=48`
  ];
  for (const i of r)
    try {
      const s = await R.raw.getAsync(i);
      if (!s.isSuccessStatusCode || s.content == null)
        continue;
      const a = await ow(s.content);
      if (a.length > 0)
        return q("asset search", `Found ${a.length} Content Hub asset(s) via entity search`), a;
    } catch {
    }
  return [];
}
async function eh(e) {
  var r, o;
  const t = (r = e == null ? void 0 : e.collectionId) == null ? void 0 : r.trim(), n = e == null ? void 0 : e.query;
  if ((o = R == null ? void 0 : R.raw) != null && o.getAsync)
    try {
      if (t) {
        const i = MA(await nw(t), n);
        if (i.length > 0)
          return q(
            "asset search",
            `Loaded ${i.length} asset(s) from collection ${t}`
          ), i;
        We(
          "asset search",
          `No assets found in collection ${t}`,
          "Verify AssetCollectionToAsset links or try Image URL."
        );
      } else {
        const i = MA(await kP(n), n);
        if (i.length > 0)
          return i;
      }
    } catch (i) {
      We("asset search", i, "Falling back to proxy or demo assets.");
    }
  if (t)
    try {
      const i = await Nd(
        `/assets/search?collectionId=${t}${n ? `&q=${encodeURIComponent(n)}` : ""}`
      );
      if (i.length > 0)
        return i;
    } catch (i) {
      dr("asset search", i);
    }
  return dr("asset search", "Using demo asset results"), dS(n);
}
async function bP(e) {
  var r;
  const t = [
    ...new Set(
      e.map((o) => Number(o)).filter((o) => Number.isFinite(o) && o > 0)
    )
  ];
  return t.length === 0 || !((r = R == null ? void 0 : R.raw) != null && r.getAsync) ? [] : (await En(t)).map((o, i) => Wo(t[i], o)).filter((o) => o != null);
}
async function SP(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ue(n), i = [
    .../* @__PURE__ */ new Set([
      ...rp,
      ...kt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const a of i)
    if (await cn(
      R,
      n,
      r,
      a,
      o.relations
    ))
      return q(
        "asset collection",
        `Linked asset ${r} to collection ${n} via ${a}`
      ), !0;
  if ((s = R == null ? void 0 : R.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await R.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return q(
          "asset collection",
          `Linked asset ${r} to collection ${n} via ${a}`
        ), !0;
  }
  return We(
    "asset collection",
    `Could not add asset ${r} to collection ${n}`,
    "Verify AssetCollectionToAsset exists on the collection definition."
  ), !1;
}
async function PP(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ue(n), i = [
    .../* @__PURE__ */ new Set([
      ...rp,
      ...kt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const s of i)
    if (await Xo(
      R,
      n,
      r,
      s,
      o.relations
    ))
      return q(
        "asset collection",
        `Removed asset ${r} from collection ${n} via ${s}`
      ), !0;
  return !1;
}
async function iw(e, t) {
  return Cs(e, t, "marketing asset properties", "EPAM.MarketingAsset");
}
const sw = ["EPAM.MarketingAssetZoneValue", "MarketingAssetZoneValue"];
function NP(e) {
  if (e == null || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.error;
  return typeof n == "string" ? n.trim() : "";
}
function DP(e) {
  if (e == null || typeof e != "object")
    return null;
  const t = e, n = t.id;
  if (typeof n == "number" && Number.isFinite(n))
    return String(n);
  if (typeof n == "string" && /^\d+$/.test(n.trim()))
    return n.trim();
  const r = t.systemProperties;
  return typeof (r == null ? void 0 : r.id) == "number" && Number.isFinite(r.id) ? String(r.id) : null;
}
async function aw(e, t) {
  const n = await rl(R, sw[0]);
  await Dn(
    e,
    pS(t),
    "zone value title"
  );
  const r = Mv(t);
  if (Object.keys(r).length > 0) {
    const o = AS(t, n);
    if (Object.keys(o).length > 0) {
      if (!await Dn(e, o, "zone value content")) {
        const s = {};
        for (const [a, l] of Object.entries(o))
          l != null && typeof l == "object" && !Array.isArray(l) && typeof l.Invariant == "string" ? s[a] = l.Invariant : s[a] = l;
        await Dn(e, s, "zone value content plain");
      }
    } else
      ge(
        "zone value content",
        `No matching content properties on EPAM.MarketingAssetZoneValue for zone ${t.zoneKey} (definition has: ${n.map((i) => i.name).join(", ") || "(none)"}). Text/html will persist via zoneLayoutJson fallback.`
      );
  }
  await gP(e, t);
}
async function xP(e) {
  var i;
  if (!((i = R == null ? void 0 : R.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating zone values.");
  const t = [
    { Title: { Invariant: e.zoneKey } },
    { Title: e.zoneKey },
    {}
  ];
  let n = null, r = "unknown", o = "";
  for (const s of sw) {
    for (const a of t) {
      const l = await R.raw.postAsync("/api/entities", {
        entitydefinition: {
          href: `/api/entitydefinitions/${s}`
        },
        properties: a
      }), c = DP(l.content);
      if (l.isSuccessStatusCode && c) {
        n = c, q(
          "zone value create",
          `Created ${s} ${c} for ${e.zoneKey} with keys: ${Object.keys(a).join(", ") || "(none)"}`
        );
        break;
      }
      r = String(l.statusCode ?? "unknown"), o = NP(l.content), ge(
        "zone value create",
        `Create attempt failed (${r}) for ${e.zoneKey} on ${s} with keys: ${Object.keys(a).join(", ") || "(none)"}${o ? ` — ${o}` : ""}`
      );
    }
    if (n)
      break;
  }
  if (!n)
    throw new Error(
      `Failed to create zone value for "${e.zoneKey}" (HTTP ${r})${o ? `: ${o}` : ""}. Check Create permission on EPAM.MarketingAssetZoneValue.`
    );
  try {
    await aw(n, e);
  } catch (s) {
    ge(
      "zone value create",
      `Zone value ${n} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return n;
}
async function BP(e) {
  if (!e.id)
    throw new Error(`Zone value for ${e.zoneKey} has no entity id.`);
  try {
    await aw(e.id, e), q("zone value", `Updated EPAM.MarketingAssetZoneValue ${e.id} (${e.zoneKey})`);
  } catch (t) {
    throw new Error(
      `Failed to update zone value ${e.id} (${e.zoneKey}). Grant Update on EPAM.MarketingAssetZoneValue. ${t instanceof Error ? t.message : String(t)}`
    );
  }
}
async function OP(e, t, n) {
  var o;
  const r = [
    ...kt(n, /zonevalue/i),
    "marketingAssetToZoneValue",
    "MarketingAssetToZoneValue",
    "EPAM.MarketingAssetToZoneValue"
  ];
  for (const i of [...new Set(r)])
    if (await cn(
      R,
      e,
      t,
      i,
      n
    ))
      return;
  if (!((o = R == null ? void 0 : R.raw) != null && o.postAsync))
    throw new Error("Content Hub client is not available for linking zone values.");
  for (const i of [...new Set(r)])
    if ((await R.raw.postAsync(
      `/api/entities/${e}/relations/${i}`,
      {
        child: { href: `/api/entities/${t}` }
      }
    )).isSuccessStatusCode)
      return;
  We(
    "marketingAssetToZoneValue link",
    `Could not link zone value ${t} to asset ${e}`,
    "The zone value entity was saved but the relation link may need to be created manually."
  );
}
async function IP(e, t) {
  var a;
  const n = await ue(e), r = [...new Set(Yv(n))], o = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const l = await En(r);
    for (let c = 0; c < r.length; c += 1) {
      const u = jv(r[c], l[c]);
      o.has(u.zoneKey) || o.set(u.zoneKey, u);
    }
  }
  const i = [], s = /* @__PURE__ */ new Set();
  for (const l of t) {
    if (!((a = l.zoneKey) != null && a.trim()) || s.has(l.zoneKey))
      continue;
    if (!hS(l)) {
      ge("zone value save", `Skipped empty zone value for ${l.zoneKey}`);
      continue;
    }
    s.add(l.zoneKey);
    const c = l.id ? l : o.get(l.zoneKey), u = c != null && c.id ? { ...l, id: c.id } : { ...l, id: void 0 };
    if (u.id) {
      await BP(u), i.push(u);
      continue;
    }
    const f = await xP(u), m = { ...u, id: f };
    await OP(e, f, n.relations), i.push(m);
  }
  return q("zone values", `Saved ${i.length} EPAM.MarketingAssetZoneValue record(s)`), i;
}
async function zP(e) {
  const t = gS(e);
  if (Object.keys(t).length === 0)
    return e;
  if (!await iw(e.id, t))
    throw new Error(
      `Could not save marketing asset ${e.id}. Grant Update on EPAM.MarketingAsset and ensure properties such as zoneLayoutJson exist on the definition.`
    );
  return q("marketing asset properties", `Saved properties on marketing asset ${e.id}`), e;
}
const LP = "designerDocumentJson", MP = "designerInstanceJson", vo = "EPAM.Template", na = "EPAM.BuilderMarketingAsset";
function lw(e) {
  return (e == null ? void 0 : e.trim()) || MP;
}
function RP(e) {
  const t = e.split("/").filter(Boolean);
  return decodeURIComponent(t[t.length - 1] ?? vo);
}
function HP(e, t) {
  const n = [
    t,
    `EPAM.${t}`,
    t.replace(/^EPAM\./, ""),
    t.replace(/^./, (r) => r.toUpperCase())
  ];
  for (const r of n) {
    const o = e[r];
    if (typeof o == "string" && o.trim())
      return o;
    if (o && typeof o == "object") {
      const i = o, s = i.Invariant ?? i.value ?? i.Value;
      if (typeof s == "string" && s.trim())
        return s;
    }
  }
  return null;
}
async function cw(e, t) {
  if (t != null && t.trim())
    return t.trim().replace(/^EPAM\./, "");
  const n = e.properties ?? {};
  for (const r of Object.keys(n))
    if (/designerDocumentJson/i.test(r))
      return r.replace(/^EPAM\./, "");
  try {
    const r = ep(e, vo), o = RP(r), s = (await rl(R, o)).find((a) => /designerDocumentJson/i.test(a.name));
    if (s)
      return s.name.replace(/^EPAM\./, "");
  } catch {
  }
  return LP;
}
async function FP(e, t) {
  const n = await ue(e), r = n.properties ?? {}, o = await cw(n, t);
  return HP(r, o);
}
async function QP(e, t, n, r) {
  if (!(e != null && e.trim()) || !Qo(e.trim()))
    throw new Error(ur());
  const o = await ue(e), i = await cw(o, n), s = vS(t, r, i);
  try {
    if (!await Cs(
      e,
      s,
      "template designer document",
      vo
    ))
      throw new Error(
        `Could not save designer document on ${vo} ${e}. Ensure property "${i}" exists on the template definition and your role can Update it.`
      );
  } catch (a) {
    throw a instanceof Error && a.message.includes("Could not save designer document") ? a : new Error(
      `Could not save designer document on ${vo} ${e}. Ensure property "${i}" exists on EPAM.Template and your role can Update it. ${a instanceof Error ? a.message : String(a)}`
    );
  }
  return q(
    "template designer document",
    `Saved ${i} on ${vo} ${e}`
  ), !0;
}
async function UP(e, t) {
  const r = (await ue(e)).properties ?? {}, o = lw(t), i = [`EPAM.${o}`, o, o.replace(/^./, (s) => s.toUpperCase())];
  for (const s of i) {
    const a = r[s];
    if (typeof a == "string" && a.trim())
      return a;
    if (a && typeof a == "object" && "value" in a) {
      const l = a.value;
      if (typeof l == "string" && l.trim())
        return l;
    }
  }
  return null;
}
async function jP(e, t, n) {
  const r = lw(n), o = { [r]: t };
  try {
    if (!await Cs(
      e,
      o,
      "builder marketing asset designer instance",
      na
    ))
      throw new Error(
        `Could not save designer instance on ${na} ${e}. Ensure property "${r}" exists and your role can Update it.`
      );
  } catch (i) {
    throw i instanceof Error && i.message.includes("Could not save designer instance") ? i : new Error(
      `Could not save designer instance on ${na} ${e}. Ensure property "${r}" exists and your role can Update it. ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return q(
    "builder marketing asset designer instance",
    `Saved ${r} on ${na} ${e}`
  ), !0;
}
const fe = {
  getTemplate: lc,
  listTemplatesForBrandKit: Jv,
  duplicateTemplate: eP,
  createTemplate: tP,
  linkMarketingAssetToTemplate: nP,
  listTemplates: async (e) => {
    try {
      return await Nd(`/entities/EPAM.Template${e ? `?channelType=${e}` : ""}`);
    } catch (t) {
      return dr("template list", t), [aS(qA)];
    }
  },
  saveTemplate: mp,
  getBrandKit: iP,
  getMarketingAsset: oP,
  createMarketingAsset: async (e) => {
    try {
      return await Nd("/entities/EPAM.MarketingAsset", {
        method: "POST",
        body: JSON.stringify(e)
      });
    } catch (t) {
      return dr("marketing asset create", t), uS("dummy-asset", e.templateId || qA);
    }
  },
  updateMarketingAsset: zP,
  saveMarketingAssetZoneValues: IP,
  updateMarketingAssetProperties: iw,
  getTemplateDesignerDocument: FP,
  saveTemplateDesignerDocument: QP,
  getMarketingAssetDesignerInstance: UP,
  saveMarketingAssetDesignerInstance: jP,
  uploadRenderedOutput: async (e, t, n) => {
    if (!pp())
      return ge(
        "rendered output upload",
        `Skipped upload for ${n} — no asset upload proxy is configured on this Content Hub instance.`
      ), { skipped: !0, fileName: n, assetId: e };
    try {
      const r = new FormData();
      r.append("file", t, n), r.append("linkToEntity", "EPAM.MarketingAsset"), r.append("linkToEntityId", e), r.append("relationName", "marketingAssetToRenderedOutput");
      const o = await fetch(`${ac}/assets/upload`, {
        method: "POST",
        body: r
      });
      if (!o.ok)
        throw new Error(`Asset upload failed (${o.status})`);
      return o.json();
    } catch (r) {
      return dr("rendered output upload", r), { skipped: !0, fileName: n, assetId: e };
    }
  },
  searchAssets: eh,
  searchAssetsInCollection: async (e, t) => eh({ collectionId: e, query: t }),
  getCollectionAssets: nw,
  getZoneAllowedAssets: yP,
  getTemplateAllowedAssets: $v,
  getAssetsByIds: bP,
  addAssetToCollection: SP,
  removeAssetFromCollection: PP,
  addAllowedAssetToTemplate: ew,
  removeAllowedAssetFromTemplate: mP,
  addAllowedAssetToZone: vP,
  removeAllowedAssetFromZone: wP
}, uw = C.createContext(null);
function GP({
  brandKitId: e,
  children: t
}) {
  const [n, r] = C.useState(null);
  return C.useEffect(() => {
    let o = !1;
    return fe.getBrandKit(e || mr).then((i) => {
      o || r(i);
    }).catch(() => {
      o || r(Sr(e || mr));
    }), () => {
      o = !0;
    };
  }, [e]), n ? /* @__PURE__ */ d(uw.Provider, { value: n, children: t }) : /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading brand kit..." });
}
function Ts() {
  const e = C.useContext(uw);
  if (!e)
    throw new Error("useBrandKit must be used within a BrandKitProvider");
  return e;
}
function Ap(e) {
  var n;
  return (n = Ts().colors.find((r) => r.colorUsageType === e)) == null ? void 0 : n.hexValue;
}
function sl(e) {
  var n;
  return (n = Ts().fonts.find((r) => r.fontUsageType === e)) == null ? void 0 : n.fontFamily;
}
const dw = C.createContext({});
function KP({
  value: e,
  children: t
}) {
  const n = C.useMemo(
    () => e,
    [
      e.searchIdentifier,
      e.selectionPoolIdentifier,
      e.search,
      e.selection,
      e.notifier
    ]
  );
  return /* @__PURE__ */ d(dw.Provider, { value: n, children: t });
}
function hp() {
  return C.useContext(dw);
}
function fw() {
  const { searchIdentifier: e, search: t } = hp(), [n, r] = C.useState([]), [o, i] = C.useState("");
  return C.useEffect(() => {
    if (!e || !(t != null && t.getEventSearchIdentifier)) {
      r([]), i("");
      return;
    }
    const s = t.getEventSearchIdentifier(e), a = (l) => {
      const c = l.detail;
      !c || c.searchIdentifier !== s || (r(Array.isArray(c.ids) ? c.ids : []), i(c.fullText ?? ""));
    };
    return window.addEventListener("SEARCH_FINISHED", a), () => window.removeEventListener("SEARCH_FINISHED", a);
  }, [t, e]), C.useEffect(() => {
    if (!(!e || !(t != null && t.addFilters)))
      try {
        t.addFilters(e, [
          {
            definition: "M.Asset",
            hidden: !1,
            multi: !1,
            visible: !0
          }
        ]);
      } catch {
      }
  }, [t, e]), {
    resultIds: n,
    fullText: o,
    hasSearchIntegration: !!(e && t)
  };
}
async function YP(e, t, n, r) {
  var a;
  const o = wk(t, n, r);
  if (o.templateId)
    return q("templateId", `Resolved ${o.templateId} from config or entity relations`), o;
  const i = e, s = o.marketingAssetId;
  if (!((a = i == null ? void 0 : i.raw) != null && a.getAsync) || !s)
    return Nn(
      "templateId",
      "No templateId in config and marketingAssetToTemplate could not be read from context.entity",
      "Set templateId in External component Configuration or link a template to this marketing asset."
    ), o;
  try {
    for (const l of gk) {
      const c = await i.raw.getAsync(
        `/api/entities/${s}/relations/${l}`
      );
      if (!c.isSuccessStatusCode || !c.content)
        continue;
      const u = Jl(c.content);
      if (u.length > 0)
        return q("templateId", `Resolved ${u[0]} from ${l} relation API`), { ...o, templateId: String(u[0]) };
    }
  } catch (l) {
    Nn("templateId", l, "Failed to resolve marketingAssetToTemplate via Content Hub API.");
  }
  return Nn(
    "templateId",
    "No templateId in config and no marketingAssetToTemplate relation on this asset",
    "Set templateId in External component Configuration or link a template to this marketing asset."
  ), o;
}
function to(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return e;
  if (typeof e == "string" && e.trim()) {
    const t = Number(e);
    if (Number.isFinite(t))
      return t;
  }
}
function Dd(e) {
  const t = e.positionX, n = e.positionY;
  if (!((t === 0 || t === void 0) && (n === 0 || n === void 0) && (t === 0 || n === 0)))
    return e;
  const o = { ...e };
  return delete o.positionX, delete o.positionY, o;
}
function al(e) {
  return Dd(e);
}
function os(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return;
  const t = e, n = {}, r = to(t.positionX), o = to(t.positionY), i = to(t.zoneWidth), s = to(t.zoneHeight), a = to(t.offsetPx), l = to(t.sortOrder);
  return r !== void 0 && (n.positionX = r), o !== void 0 && (n.positionY = o), i !== void 0 && (n.zoneWidth = i), s !== void 0 && (n.zoneHeight = s), a !== void 0 && (n.offsetPx = a), l !== void 0 && (n.sortOrder = l), typeof t.contentAlignment == "string" && (n.contentAlignment = zv(t.contentAlignment)), typeof t.offsetDirection == "string" && (n.offsetDirection = Lv(t.offsetDirection)), Object.keys(n).length > 0 ? al(n) : void 0;
}
function th(e) {
  if (!(e != null && e.trim()))
    return {};
  try {
    const t = JSON.parse(e);
    if (t == null)
      return {};
    if (Array.isArray(t)) {
      const n = {};
      for (const r of t) {
        if (r == null || typeof r != "object")
          continue;
        const o = r, i = typeof o.zoneKey == "string" ? o.zoneKey.trim() : "";
        if (!i)
          continue;
        const s = os(o);
        s && (n[i] = s);
      }
      return n;
    }
    if (typeof t == "object") {
      const n = {};
      for (const [r, o] of Object.entries(t)) {
        const i = os(o);
        i && (n[r] = i);
      }
      return n;
    }
  } catch {
    return {};
  }
  return {};
}
function ZP(e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (!n.trim() || r == null)
      continue;
    const o = os(r);
    o && (t[n] = o);
  }
  return JSON.stringify(t, null, 2);
}
function xd(e) {
  const t = {};
  return typeof e.textValue == "string" && (t.textValue = e.textValue), typeof e.colorValue == "string" && (t.colorValue = e.colorValue), typeof e.htmlValue == "string" && (t.htmlValue = e.htmlValue), typeof e.linkUrl == "string" && (t.linkUrl = e.linkUrl), typeof e.imageAssetId == "string" && (t.imageAssetId = e.imageAssetId), typeof e.imageAssetUrl == "string" && (t.imageAssetUrl = e.imageAssetUrl), Object.keys(t).length > 0 ? t : void 0;
}
function pw(e, t) {
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    if (!o.trim() || i == null)
      continue;
    const s = os(i);
    s && (n[o] = s);
  }
  const r = {};
  for (const [o, i] of Object.entries(t)) {
    if (!o.trim() || !i)
      continue;
    const s = xd(i);
    s && (r[o] = { zoneKey: o, ...s });
  }
  return Object.keys(r).length === 0 ? JSON.stringify(n, null, 2) : JSON.stringify({ layouts: n, values: r }, null, 2);
}
function ll(e) {
  if (!(e != null && e.trim()))
    return { layouts: {}, values: {} };
  try {
    const t = JSON.parse(e);
    if (t == null || typeof t != "object" || Array.isArray(t))
      return { layouts: th(e), values: {} };
    const n = t;
    if (n.layouts != null && typeof n.layouts == "object" && !Array.isArray(n.layouts)) {
      const i = th(JSON.stringify(n.layouts)), s = {};
      if (n.values != null && typeof n.values == "object" && !Array.isArray(n.values))
        for (const [a, l] of Object.entries(n.values)) {
          if (!a.trim() || l == null || typeof l != "object")
            continue;
          const c = xd(l);
          c && (s[a] = { zoneKey: a, ...c });
        }
      return { layouts: i, values: s };
    }
    const r = {}, o = {};
    for (const [i, s] of Object.entries(n)) {
      if (!i.trim() || s == null || typeof s != "object")
        continue;
      const a = s, l = os(a);
      l && (r[i] = l);
      const c = xd(a);
      c && (o[i] = { zoneKey: i, ...c });
    }
    return { layouts: r, values: o };
  } catch {
    return { layouts: {}, values: {} };
  }
}
function cl(e, t, n) {
  var o, i, s, a, l, c;
  const r = is(e, t);
  for (const u of e.zones) {
    const f = Kr(u, e.zones), m = n[f] ?? n[u.zoneKey];
    if (!m)
      continue;
    const y = r[u.id];
    r[u.id] = {
      zoneKey: f,
      id: y == null ? void 0 : y.id,
      textValue: (o = y == null ? void 0 : y.textValue) != null && o.trim() ? y.textValue : m.textValue,
      colorValue: (i = y == null ? void 0 : y.colorValue) != null && i.trim() ? y.colorValue : m.colorValue,
      htmlValue: (s = y == null ? void 0 : y.htmlValue) != null && s.trim() ? y.htmlValue : m.htmlValue,
      linkUrl: (a = y == null ? void 0 : y.linkUrl) != null && a.trim() ? y.linkUrl : m.linkUrl,
      imageAssetId: (l = y == null ? void 0 : y.imageAssetId) != null && l.trim() ? y.imageAssetId : m.imageAssetId,
      imageAssetUrl: (c = y == null ? void 0 : y.imageAssetUrl) != null && c.trim() ? y.imageAssetUrl : m.imageAssetUrl
    };
  }
  return Object.values(r);
}
function mw(e, t) {
  return Dd(t ? {
    ...e,
    positionX: t.positionX ?? e.positionX,
    positionY: t.positionY ?? e.positionY,
    zoneWidth: t.zoneWidth ?? e.zoneWidth,
    zoneHeight: t.zoneHeight ?? e.zoneHeight,
    contentAlignment: t.contentAlignment ?? e.contentAlignment,
    offsetDirection: t.offsetDirection ?? e.offsetDirection,
    offsetPx: t.offsetPx ?? e.offsetPx,
    sortOrder: t.sortOrder ?? e.sortOrder
  } : e);
}
function Uo(e, t) {
  return t.filter((r) => r.zoneKey === e.zoneKey).length > 1 ? `${e.zoneKey}__${e.id}` : e.zoneKey;
}
function Kr(e, t) {
  return Uo(e, t);
}
function is(e, t) {
  var o;
  const n = /* @__PURE__ */ new Map();
  for (const i of t) {
    const s = (o = i.zoneKey) == null ? void 0 : o.trim();
    if (!s)
      continue;
    const a = n.get(s) ?? [];
    a.push(i), n.set(s, a);
  }
  const r = {};
  for (const i of e.zones) {
    const s = Kr(i, e.zones), a = n.get(s) ?? n.get(i.zoneKey), l = a == null ? void 0 : a.shift();
    l && (r[i.id] = { ...l, zoneKey: s });
  }
  return r;
}
function Aw(e, t) {
  return {
    ...e,
    zones: [...e.zones].map((n) => {
      const r = Uo(n, e.zones), o = r === n.zoneKey ? t[n.zoneKey] : t[r];
      return mw(n, o);
    }).sort((n, r) => n.sortOrder - r.sortOrder || n.id.localeCompare(r.id))
  };
}
function XP(e) {
  return al({
    positionX: e.positionX,
    positionY: e.positionY,
    zoneWidth: e.zoneWidth,
    zoneHeight: e.zoneHeight,
    contentAlignment: e.contentAlignment,
    offsetDirection: e.offsetDirection,
    offsetPx: e.offsetPx,
    sortOrder: e.sortOrder
  });
}
function WP(e) {
  const t = {};
  for (const n of e.zones) {
    const r = Uo(n, e.zones);
    t[r] = XP(n);
  }
  return t;
}
function hw(e, t) {
  const n = WP(e);
  for (const r of e.zones) {
    const o = Uo(r, e.zones), i = o === r.zoneKey ? t[r.zoneKey] : t[o];
    i ? n[o] = al({ ...n[o], ...i }) : n[o] = al(n[o] ?? {});
  }
  return n;
}
function VP({
  layout: e,
  onChange: t,
  showPosition: n = !1,
  compact: r = !1
}) {
  return /* @__PURE__ */ E("div", { className: `asset-zone-layout-fields${r ? " asset-zone-layout-fields-compact" : ""}`, children: [
    /* @__PURE__ */ E("div", { className: "asset-zone-layout-grid", children: [
      /* @__PURE__ */ E("label", { children: [
        "Alignment",
        /* @__PURE__ */ d(
          "select",
          {
            value: e.contentAlignment ?? Gr,
            onChange: (o) => t({ contentAlignment: o.target.value }),
            children: Ov.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
          }
        )
      ] }),
      /* @__PURE__ */ E("label", { children: [
        "Offset (px)",
        /* @__PURE__ */ d(
          "input",
          {
            type: "number",
            min: 0,
            value: e.offsetPx ?? 0,
            onChange: (o) => t({ offsetPx: Math.max(0, Number(o.target.value) || 0) })
          }
        )
      ] }),
      /* @__PURE__ */ E("label", { children: [
        "Direction",
        /* @__PURE__ */ d(
          "select",
          {
            value: e.offsetDirection ?? ic,
            onChange: (o) => t({ offsetDirection: o.target.value }),
            children: Iv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
          }
        )
      ] }),
      /* @__PURE__ */ E("label", { children: [
        "Sort order",
        /* @__PURE__ */ d(
          "input",
          {
            type: "number",
            min: 0,
            value: e.sortOrder ?? 0,
            onChange: (o) => t({ sortOrder: Math.max(0, Number(o.target.value) || 0) })
          }
        )
      ] })
    ] }),
    n && /* @__PURE__ */ E("div", { className: "asset-zone-layout-grid asset-zone-layout-grid-position", children: [
      /* @__PURE__ */ E("label", { children: [
        "X",
        /* @__PURE__ */ d(
          "input",
          {
            type: "number",
            value: e.positionX ?? "",
            onChange: (o) => t({
              positionX: o.target.value === "" ? void 0 : Number(o.target.value) || 0
            })
          }
        )
      ] }),
      /* @__PURE__ */ E("label", { children: [
        "Y",
        /* @__PURE__ */ d(
          "input",
          {
            type: "number",
            value: e.positionY ?? "",
            onChange: (o) => t({
              positionY: o.target.value === "" ? void 0 : Number(o.target.value) || 0
            })
          }
        )
      ] }),
      /* @__PURE__ */ E("label", { children: [
        "Width",
        /* @__PURE__ */ d(
          "input",
          {
            type: "number",
            min: 0,
            value: e.zoneWidth ?? "",
            onChange: (o) => t({
              zoneWidth: o.target.value ? Number(o.target.value) : void 0
            })
          }
        )
      ] }),
      /* @__PURE__ */ E("label", { children: [
        "Height",
        /* @__PURE__ */ d(
          "input",
          {
            type: "number",
            min: 0,
            value: e.zoneHeight ?? "",
            onChange: (o) => t({
              zoneHeight: o.target.value ? Number(o.target.value) : void 0
            })
          }
        )
      ] })
    ] })
  ] });
}
function JP(...e) {
  const t = /* @__PURE__ */ new Set(), n = [];
  for (const r of e)
    for (const o of r) {
      const i = o.id || o.previewUrl || o.thumbnailUrl;
      !i || t.has(i) || (t.add(i), n.push(o));
    }
  return n;
}
function qP({
  zoneKey: e,
  zone: t,
  templateId: n,
  selectedAssetId: r,
  selectedUrl: o,
  onChange: i,
  compact: s = !1
}) {
  const { searchIdentifier: a } = hp(), { resultIds: l, hasSearchIntegration: c } = fw(), [u, f] = C.useState([]), [m, y] = C.useState([]), [g, v] = C.useState([]), [N, p] = C.useState(!1), [A, h] = C.useState(null), [P, O] = C.useState(!1), [k, T] = C.useState("");
  C.useEffect(() => {
    if (!(n != null && n.trim()) || n.startsWith("temp-")) {
      f([]);
      return;
    }
    let x = !1;
    return p(!0), h(null), fe.getTemplateAllowedAssets(n).then((K) => {
      x || f(K);
    }).catch((K) => {
      x || (f([]), h(K instanceof Error ? K.message : "Could not load template images."));
    }).finally(() => {
      x || p(!1);
    }), () => {
      x = !0;
    };
  }, [n]), C.useEffect(() => {
    const x = (t == null ? void 0 : t.allowedAssetIds) ?? [];
    if (x.length === 0) {
      y([]);
      return;
    }
    let K = !1;
    return fe.getAssetsByIds(x).then((ve) => {
      K || y(ve);
    }).catch(() => {
      K || y([]);
    }), () => {
      K = !0;
    };
  }, [t == null ? void 0 : t.allowedAssetIds]), C.useEffect(() => {
    if (l.length === 0) {
      v([]);
      return;
    }
    let x = !1;
    return fe.getAssetsByIds(l).then((K) => {
      x || v(K);
    }).catch(() => {
      x || v([]);
    }), () => {
      x = !0;
    };
  }, [l]);
  const S = C.useMemo(
    () => JP(m, u),
    [u, m]
  ), H = C.useMemo(() => S.length > 0 ? S : g, [S, g]), D = S.length > 0, L = () => {
    const x = k.trim();
    x && (i(e, { imageAssetUrl: x }), O(!1), T(""));
  };
  return !(n != null && n.trim()) || n.startsWith("temp-") ? /* @__PURE__ */ d("p", { className: "image-picker-hint", children: "Template image library is not available yet. Save the template and link assets in template setup." }) : /* @__PURE__ */ E("div", { className: `image-picker${s ? " image-picker-compact" : ""}`, children: [
    D ? /* @__PURE__ */ E("p", { className: "image-picker-hint", children: [
      "Choose an image from the template library",
      m.length > 0 ? " (zone + template)" : "",
      "."
    ] }) : c ? /* @__PURE__ */ E("p", { className: "image-picker-hint", children: [
      "Run a Content Hub search on this page, then pick an image below.",
      a ? ` (search: ${a})` : ""
    ] }) : /* @__PURE__ */ E("p", { className: "image-picker-hint", children: [
      "Link images on the template in ",
      /* @__PURE__ */ d("strong", { children: "Edit template" }),
      ", or add ",
      /* @__PURE__ */ d("code", { children: "searchIdentifier" }),
      " to this page's external component configuration to pick assets from search."
    ] }),
    N && /* @__PURE__ */ d("div", { className: "image-picker-loading", children: "Loading template images..." }),
    A && /* @__PURE__ */ d("div", { className: "image-picker-error", children: A }),
    o && /* @__PURE__ */ d("div", { className: "image-picker-selected-preview", children: /* @__PURE__ */ d("img", { src: o, alt: "", className: "image-picker-selected-image" }) }),
    /* @__PURE__ */ d("div", { className: "image-picker-grid", role: "radiogroup", "aria-label": "Choose image", children: H.map((x) => {
      const K = r && x.id === r || !r && o && x.previewUrl === o || !r && o && x.thumbnailUrl === o;
      return /* @__PURE__ */ E(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": !!K,
          className: `image-picker-option${K ? " image-picker-option-selected" : ""}`,
          onClick: () => i(e, {
            id: x.id || void 0,
            imageAssetUrl: x.previewUrl ?? x.thumbnailUrl
          }),
          children: [
            /* @__PURE__ */ d("span", { className: "image-picker-preview", children: /* @__PURE__ */ d("img", { src: x.thumbnailUrl, alt: "", className: "image-picker-image" }) }),
            /* @__PURE__ */ d("span", { className: "image-picker-label", children: x.name })
          ]
        },
        x.id || x.thumbnailUrl
      );
    }) }),
    !N && H.length === 0 && !A && /* @__PURE__ */ E("p", { className: "image-picker-hint", children: [
      "No images available yet. In ",
      /* @__PURE__ */ d("strong", { children: "Edit template" }),
      ', use "Template image library" to link assets from Content Hub search.'
    ] }),
    /* @__PURE__ */ d("div", { className: "image-picker-footer", children: /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "image-picker-url-toggle",
        onClick: () => O((x) => !x),
        children: P ? "Hide image URL" : "Use image URL instead"
      }
    ) }),
    P && /* @__PURE__ */ E("div", { className: "image-picker-url-form", children: [
      /* @__PURE__ */ d(
        "input",
        {
          className: "image-picker-url-input",
          placeholder: "https://...",
          value: k,
          onChange: (x) => T(x.target.value)
        }
      ),
      /* @__PURE__ */ d("button", { type: "button", className: "image-picker-url-apply", onClick: L, disabled: !k.trim(), children: "Use image URL" })
    ] })
  ] });
}
function gw({
  zone: e,
  templateId: t,
  value: n,
  onChange: r,
  adminMode: o = !1,
  hideLogoPicker: i = !1,
  layoutMode: s = "canvas"
}) {
  const a = Ts(), l = o || !e.isLocked, c = e.positionX !== void 0 || e.positionY !== void 0, u = s === "stacked" ? { position: "relative", width: "100%" } : c ? {
    position: "absolute",
    left: e.positionX ?? 0,
    top: e.positionY ?? 0,
    width: e.zoneWidth,
    height: e.zoneHeight,
    zIndex: e.sortOrder,
    pointerEvents: l ? "auto" : "none"
  } : {
    position: "relative",
    width: e.zoneWidth ?? "100%",
    maxHeight: e.zoneHeight,
    zIndex: e.sortOrder,
    pointerEvents: l ? "auto" : "none"
  }, f = $b(e, u, s), m = eS(e), y = s === "stacked" ? " zone-stacked" : "";
  if ($l(e))
    return /* @__PURE__ */ d(
      _P,
      {
        style: f,
        layoutClass: m,
        stackedClass: y,
        zone: e,
        brandKit: a
      }
    );
  if (e.isLocked && !o)
    return /* @__PURE__ */ d("div", { style: f, className: `zone zone-locked${y} ${m}`, "data-zone-key": e.zoneKey, children: /* @__PURE__ */ d($P, { zone: e, brandKit: a, layoutMode: s }) });
  switch (e.zoneType) {
    case "Text":
      return /* @__PURE__ */ d(
        nN,
        {
          style: f,
          layoutClass: m,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: s
        }
      );
    case "Heading":
      return /* @__PURE__ */ d(
        tN,
        {
          style: f,
          layoutClass: m,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: s
        }
      );
    case "Image":
      return /* @__PURE__ */ d(
        eN,
        {
          style: f,
          layoutClass: m,
          stackedClass: y,
          zone: e,
          templateId: t,
          value: n,
          onChange: r,
          adminMode: o,
          hideImagePicker: i,
          layoutMode: s
        }
      );
    case "CTA Button":
      return /* @__PURE__ */ d(
        rN,
        {
          style: f,
          layoutClass: m,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: s
        }
      );
    case "Background Color":
      return s === "stacked" ? null : /* @__PURE__ */ d(
        "div",
        {
          style: { ...f, backgroundColor: (n == null ? void 0 : n.colorValue) ?? "#ffffff" },
          className: `zone zone-background ${m}`,
          "data-zone-key": e.zoneKey
        }
      );
    case "Divider":
      return /* @__PURE__ */ d(
        "hr",
        {
          style: f,
          className: `zone zone-divider${y} ${m}`,
          "data-zone-key": e.zoneKey
        }
      );
    case "HTML":
      return /* @__PURE__ */ d(oN, { style: f, layoutClass: m, zone: e, value: n, onChange: r });
    default:
      return null;
  }
}
function _P({
  style: e,
  layoutClass: t,
  stackedClass: n,
  zone: r,
  brandKit: o
}) {
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-logo${n} ${t}`, "data-zone-key": r.zoneKey, children: /* @__PURE__ */ d("span", { className: "zone-logo-placeholder", "aria-label": `${o.brandKitName} logo`, children: "Logo" }) });
}
function $P({
  zone: e,
  brandKit: t,
  layoutMode: n
}) {
  var r;
  if (e.zoneType === "Background Color") {
    const o = (r = t.colors.find((i) => i.colorUsageType === "Primary")) == null ? void 0 : r.hexValue;
    return /* @__PURE__ */ d("div", { style: { width: "100%", height: "100%", backgroundColor: o } });
  }
  if (e.zoneType === "HTML") {
    const o = rs(e.htmlDefaultContent);
    return o ? /* @__PURE__ */ d("div", { dangerouslySetInnerHTML: { __html: o } }) : null;
  }
  return e.zoneType === "Image" ? /* @__PURE__ */ d("div", { className: "zone-image-placeholder zone-image-placeholder-locked", children: "Image zone — unlock in template setup to change the image here." }) : null;
}
function eN({
  style: e,
  layoutClass: t,
  stackedClass: n,
  zone: r,
  templateId: o,
  value: i,
  onChange: s,
  adminMode: a,
  hideImagePicker: l = !1,
  layoutMode: c = "canvas"
}) {
  const u = !a && !l;
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-image${n} ${t}`, "data-zone-key": r.zoneKey, children: u ? /* @__PURE__ */ d(
    qP,
    {
      zoneKey: r.zoneKey,
      zone: r,
      templateId: o,
      selectedAssetId: i == null ? void 0 : i.imageAssetId,
      selectedUrl: i == null ? void 0 : i.imageAssetUrl,
      compact: n.includes("stacked"),
      onChange: (f, m) => s(f, {
        zoneKey: f,
        imageAssetId: m.id,
        imageAssetUrl: m.imageAssetUrl
      })
    }
  ) : i != null && i.imageAssetUrl ? /* @__PURE__ */ d(
    "img",
    {
      src: i.imageAssetUrl,
      alt: r.zoneLabel,
      className: "zone-image-preview",
      style: c === "canvas" || r.zoneHeight != null || r.zoneWidth != null ? { width: "100%", height: "100%", maxHeight: "none", objectFit: "contain" } : void 0
    }
  ) : /* @__PURE__ */ d("div", { className: "zone-image-placeholder", children: r.zoneLabel }) });
}
function tN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = sl("Heading"), a = Ap("Secondary"), l = n.headingLevel ?? Hn;
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        ...e,
        fontFamily: s,
        fontSize: _b[l],
        fontWeight: 700,
        lineHeight: 1.25,
        color: a
      },
      className: `zone zone-heading${i === "stacked" ? " zone-stacked" : ""} ${t}${r != null && r.textValue ? "" : " zone-text-empty"}`,
      "data-zone-key": n.zoneKey,
      "data-heading-level": l,
      "data-placeholder": n.zoneLabel,
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onBlur: (c) => {
        const u = c.currentTarget.innerText;
        if (n.maxCharacterCount && u.length > n.maxCharacterCount) {
          c.currentTarget.innerText = (r == null ? void 0 : r.textValue) ?? "";
          return;
        }
        o(n.zoneKey, { zoneKey: n.zoneKey, textValue: u });
      },
      children: (r == null ? void 0 : r.textValue) ?? ""
    }
  );
}
function nN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = sl("Heading"), a = sl("Body"), l = Ap("Secondary"), c = (n.zoneLabel ?? "").toLowerCase().includes("headline") ? s : a;
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        ...e,
        fontFamily: c,
        fontSize: i === "stacked" ? void 0 : "16px",
        lineHeight: 1.5,
        color: l
      },
      className: `zone zone-text${i === "stacked" ? " zone-stacked" : ""} ${t}${r != null && r.textValue ? "" : " zone-text-empty"}`,
      "data-zone-key": n.zoneKey,
      "data-placeholder": n.zoneLabel,
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onBlur: (u) => {
        const f = u.currentTarget.innerText;
        if (n.maxCharacterCount && f.length > n.maxCharacterCount) {
          u.currentTarget.innerText = (r == null ? void 0 : r.textValue) ?? "";
          return;
        }
        o(n.zoneKey, { zoneKey: n.zoneKey, textValue: f });
      },
      children: (r == null ? void 0 : r.textValue) ?? ""
    }
  );
}
function rN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = Ap("Accent"), a = sl("CTA");
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-cta${i === "stacked" ? " zone-stacked" : ""} ${t}`, "data-zone-key": n.zoneKey, children: /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      className: "zone-cta-button",
      style: { backgroundColor: s, fontFamily: a, border: "none", borderRadius: 4, padding: "10px 20px", color: "#fff" },
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onBlur: (l) => o(n.zoneKey, { ...r, zoneKey: n.zoneKey, textValue: l.currentTarget.innerText }),
      children: (r == null ? void 0 : r.textValue) ?? n.zoneLabel
    }
  ) });
}
function oN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o
}) {
  return n.htmlAllowUserOverride ? /* @__PURE__ */ E("div", { style: e, className: `zone zone-html ${t}`, children: [
    /* @__PURE__ */ d(
      "textarea",
      {
        className: "zone-html-editor",
        defaultValue: (r == null ? void 0 : r.htmlValue) ?? n.htmlDefaultContent ?? "",
        onBlur: (i) => o(n.zoneKey, { zoneKey: n.zoneKey, htmlValue: i.target.value })
      }
    ),
    /* @__PURE__ */ d(
      "div",
      {
        className: "zone-html-preview",
        dangerouslySetInnerHTML: { __html: rs((r == null ? void 0 : r.htmlValue) ?? n.htmlDefaultContent) }
      }
    )
  ] }) : /* @__PURE__ */ d(
    "div",
    {
      style: e,
      className: `zone zone-html zone-html-locked ${t}`,
      "data-zone-key": n.zoneKey,
      dangerouslySetInnerHTML: { __html: rs(n.htmlDefaultContent) }
    }
  );
}
function yw({
  template: e,
  zoneLayouts: t,
  zoneValues: n,
  layoutMode: r,
  onLayoutChange: o,
  onZoneValueChange: i
}) {
  var m;
  const [s, a] = C.useState(((m = e.zones[0]) == null ? void 0 : m.id) ?? null), l = C.useMemo(() => {
    const y = /* @__PURE__ */ new Set();
    for (const g of e.zones) {
      if (y.has(g.zoneKey))
        return !0;
      y.add(g.zoneKey);
    }
    return !1;
  }, [e.zones]), c = C.useMemo(
    () => [...e.zones].map((y) => {
      const g = Uo(y, e.zones), v = g === y.zoneKey ? t[y.zoneKey] : t[g];
      return mw(y, v);
    }).sort((y, g) => y.sortOrder - g.sortOrder || y.id.localeCompare(g.id)),
    [e.zones, t]
  ), u = C.useMemo(() => ZP(t), [t]), f = (y) => {
    const g = s === y.id, v = Uo(y, e.zones), N = e.zones.find((A) => A.id === y.id) ?? y, p = Kr(N, e.zones);
    return /* @__PURE__ */ E("div", { className: "asset-zone-structure-row", children: [
      /* @__PURE__ */ E(
        "button",
        {
          type: "button",
          className: "asset-zone-structure-header",
          onClick: () => a((A) => A === y.id ? null : y.id),
          "aria-expanded": g,
          children: [
            /* @__PURE__ */ d("span", { className: "asset-zone-structure-title", children: y.zoneLabel || y.zoneKey }),
            /* @__PURE__ */ d("span", { className: "asset-zone-structure-type", children: y.zoneType }),
            /* @__PURE__ */ d("span", { className: "asset-zone-structure-chevron", children: g ? "▾" : "▸" })
          ]
        }
      ),
      g && /* @__PURE__ */ d("div", { className: "asset-zone-structure-body", children: /* @__PURE__ */ E("div", { className: "asset-zone-structure-content", children: [
        /* @__PURE__ */ d("p", { className: "asset-zone-structure-content-label", children: "Content" }),
        l && /* @__PURE__ */ E("p", { className: "asset-zone-structure-key-hint", children: [
          "Zone key: ",
          /* @__PURE__ */ d("code", { children: p })
        ] }),
        /* @__PURE__ */ d(
          gw,
          {
            zone: { ...N, zoneKey: p },
            templateId: e.id,
            value: n[N.id],
            onChange: (A, h) => i(N.id, { ...h, zoneKey: p }),
            layoutMode: "stacked"
          }
        ),
        /* @__PURE__ */ d(
          VP,
          {
            layout: (v === y.zoneKey ? t[y.zoneKey] : t[v]) ?? {},
            onChange: (A) => o(v, A),
            showPosition: r === "canvas"
          },
          v
        )
      ] }) })
    ] }, y.id);
  };
  return /* @__PURE__ */ E("div", { className: "asset-structure-panel", children: [
    /* @__PURE__ */ d("p", { className: "asset-structure-panel-hint", children: "Expand a zone to edit position, alignment, and content. Layout is saved as JSON on this marketing asset." }),
    l && /* @__PURE__ */ d("p", { className: "asset-zone-structure-warning", children: "Some zones share the same zone key. Edit each zone's key in Template setup so content stays independent after save." }),
    /* @__PURE__ */ d("div", { className: "asset-zone-structure-list", children: c.map(f) }),
    /* @__PURE__ */ E("details", { className: "asset-layout-json-preview", children: [
      /* @__PURE__ */ d("summary", { children: "Layout JSON (saved on marketing asset)" }),
      /* @__PURE__ */ d("pre", { children: u })
    ] })
  ] });
}
function ul({
  structure: e,
  preview: t,
  structureTitle: n = "Structure",
  previewTitle: r = "Preview"
}) {
  return /* @__PURE__ */ E("div", { className: "builder-split", children: [
    /* @__PURE__ */ E("section", { className: "builder-split-panel builder-split-structure", "aria-label": n, children: [
      /* @__PURE__ */ d("h3", { className: "builder-split-heading", children: n }),
      /* @__PURE__ */ d("div", { className: "builder-split-structure-body", children: e })
    ] }),
    /* @__PURE__ */ E("section", { className: "builder-split-panel builder-split-preview", "aria-label": r, children: [
      /* @__PURE__ */ d("h3", { className: "builder-split-heading", children: r }),
      /* @__PURE__ */ d("div", { className: "builder-split-preview-body", children: t })
    ] })
  ] });
}
function iN(e) {
  var n;
  const t = {};
  for (const r of e.zones) {
    const i = { zoneKey: Kr(r, e.zones) };
    if ($l(r)) {
      t[r.id] = i;
      continue;
    }
    switch (r.zoneType) {
      case "Text":
      case "Heading":
      case "CTA Button":
        i.textValue = r.zoneLabel || r.zoneKey;
        break;
      case "HTML":
        i.htmlValue = ((n = r.htmlDefaultContent) == null ? void 0 : n.trim()) || `<p style="margin:0;color:#666;">${r.zoneLabel || r.zoneKey}</p>`;
        break;
      case "Image":
        i.imageAssetUrl = `https://placehold.co/552x200/e8eef5/607d8b?text=${encodeURIComponent(
          r.zoneLabel || "Image"
        )}`;
        break;
    }
    t[r.id] = i;
  }
  return t;
}
function sN(e, t) {
  var o, i, s, a, l, c, u, f;
  const n = iN(e), r = { ...n };
  for (const m of e.zones) {
    const y = Kr(m, e.zones), g = t[m.id] ?? t[y] ?? t[m.zoneKey];
    if (g) {
      if ($l(m)) {
        r[m.id] = {
          zoneKey: y,
          imageAssetUrl: (o = g.imageAssetUrl) != null && o.trim() ? g.imageAssetUrl : (i = n[m.id]) == null ? void 0 : i.imageAssetUrl
        };
        continue;
      }
      r[m.id] = {
        ...n[m.id],
        ...g,
        zoneKey: y,
        textValue: (s = g.textValue) != null && s.trim() ? g.textValue : (a = n[m.id]) == null ? void 0 : a.textValue,
        htmlValue: (l = g.htmlValue) != null && l.trim() ? g.htmlValue : (c = n[m.id]) == null ? void 0 : c.htmlValue,
        imageAssetUrl: (u = g.imageAssetUrl) != null && u.trim() ? g.imageAssetUrl : (f = n[m.id]) == null ? void 0 : f.imageAssetUrl
      };
    }
  }
  return r;
}
const aN = 200, lN = 4e3;
function nh(e) {
  return Math.min(lN, Math.max(aN, Math.round(e)));
}
function rh({ width: e, height: t, onChange: n, children: r }) {
  const o = C.useRef(null), i = (l) => (c) => {
    c.preventDefault(), c.currentTarget.setPointerCapture(c.pointerId), o.current = {
      edge: l,
      startX: c.clientX,
      startY: c.clientY,
      startWidth: e,
      startHeight: t
    };
  }, s = (l) => {
    const c = o.current;
    if (c) {
      if (c.edge === "right") {
        n({
          width: nh(c.startWidth + (l.clientX - c.startX)),
          height: c.startHeight
        });
        return;
      }
      n({
        width: c.startWidth,
        height: nh(c.startHeight + (l.clientY - c.startY))
      });
    }
  }, a = (l) => {
    l.currentTarget.hasPointerCapture(l.pointerId) && l.currentTarget.releasePointerCapture(l.pointerId), o.current = null;
  };
  return /* @__PURE__ */ E("div", { className: "live-preview-resize-frame", style: { width: e, height: t }, children: [
    /* @__PURE__ */ d("div", { className: "live-preview-resize-content", children: r }),
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "live-preview-resize-handle live-preview-resize-handle-right",
        "aria-label": "Drag to change width",
        onPointerDown: i("right"),
        onPointerMove: s,
        onPointerUp: a,
        onPointerCancel: a
      }
    ),
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "live-preview-resize-handle live-preview-resize-handle-bottom",
        "aria-label": "Drag to change height",
        onPointerDown: i("bottom"),
        onPointerMove: s,
        onPointerUp: a,
        onPointerCancel: a
      }
    )
  ] });
}
const gp = C.forwardRef(function({ template: t, zoneValues: n = {}, layoutMode: r = "stacked", onDimensionsChange: o }, i) {
  const s = Ts(), a = C.useMemo(
    () => [...t.zones].sort((p, A) => p.sortOrder - A.sortOrder),
    [t.zones]
  ), l = C.useMemo(
    () => sN(t, n),
    [t, n]
  ), c = C.useMemo(
    () => bd(t, l, s),
    [s, l, t]
  ), u = bv(t), f = ip(t), m = Pv(t), y = !!o, g = ({ width: p, height: A }) => {
    o == null || o({
      canvasWidth: p,
      canvasHeight: A,
      formatPreset: Td(t.channelType, p, A) || t.formatPreset
    });
  };
  if (a.length === 0)
    return /* @__PURE__ */ d("p", { className: "template-admin-preview-empty", children: "Add zones on the left to see a live preview here." });
  const v = /* @__PURE__ */ d(
    "div",
    {
      ref: i,
      className: "live-preview-canvas social-builder-canvas social-builder-canvas-fill",
      style: {
        width: f,
        height: m,
        position: "relative",
        margin: y ? 0 : "0 auto"
      },
      children: a.map((p) => /* @__PURE__ */ d(
        gw,
        {
          zone: p,
          templateId: t.id,
          value: l[p.id] ?? l[p.zoneKey],
          onChange: () => {
          },
          layoutMode: "canvas",
          hideLogoPicker: !0,
          adminMode: !0
        },
        `${p.id}-${p.sortOrder}-${p.positionX}-${p.positionY}-${p.contentAlignment}-${p.offsetPx}`
      ))
    }
  );
  if (t.channelType === "Social" || t.channelType === "Print" || r === "canvas")
    return /* @__PURE__ */ E("div", { className: "live-preview-canvas-wrap", children: [
      /* @__PURE__ */ d("p", { className: "live-preview-dimensions-badge", "aria-label": "Template dimensions", children: u }),
      y ? /* @__PURE__ */ d(rh, { width: f, height: m, onChange: g, children: v }) : v
    ] });
  const N = /* @__PURE__ */ d(
    "iframe",
    {
      title: "Live preview",
      srcDoc: c,
      className: `email-builder-preview-frame${y ? "" : " email-builder-preview-frame-fill"}`,
      style: {
        width: y ? f : void 0,
        height: y ? m : void 0,
        minHeight: y ? void 0 : m
      }
    },
    c
  );
  return /* @__PURE__ */ E("div", { className: "live-preview-email-wrap", children: [
    /* @__PURE__ */ d("p", { className: "live-preview-dimensions-badge", "aria-label": "Template dimensions", children: u }),
    y ? /* @__PURE__ */ d(rh, { width: f, height: m, onChange: g, children: N }) : N
  ] });
}), cN = [
  "Change spotted. Autosave is putting on its running shoes…",
  "Unsaved edits detected. Warming up the Content Hub handshake…",
  "Hold tight — your zones are about to get persisted…",
  "Debouncing brilliance before we commit…"
], uN = [
  "Convincing pixels to stay in their zones…",
  "Teaching the logo not to be shy…",
  "Negotiating with Content Hub (politely, with JSON)…",
  "Herding zones into the right template…",
  "Adding just enough whitespace to look intentional…",
  "Making sure the CTA button feels confident…",
  "Aligning everything left (unless you said otherwise)…",
  "Checking brand guidelines — SOK green: approved…",
  "Saving your masterpiece one property at a time…",
  "Linking relations without tangling the graph…",
  "Duplicating templates across dimensions (the fun kind)…",
  "Rendering HTML that even Outlook might tolerate…",
  "Exporting PNGs before anyone moves a zone…",
  "Persuading EPAM.TemplateZone entities to exist…",
  "Almost there — the bits are aligning…"
];
function dN(e) {
  return e === "pending" ? cN : uN;
}
function Bd(e, t = "active", n = 2600) {
  const r = dN(t), [o, i] = C.useState(0);
  return C.useEffect(() => {
    if (!e) {
      i(0);
      return;
    }
    const s = () => {
      i((l) => {
        if (r.length <= 1)
          return 0;
        let c = l;
        for (; c === l; )
          c = Math.floor(Math.random() * r.length);
        return c;
      });
    }, a = window.setInterval(s, n);
    return () => window.clearInterval(a);
  }, [e, n, r.length]), r[o];
}
function Jo({
  active: e,
  variant: t = "active",
  className: n
}) {
  const r = Bd(e, t);
  return e ? /* @__PURE__ */ d(
    "p",
    {
      className: `saving-status-message${n ? ` ${n}` : ""}`,
      role: "status",
      "aria-live": "polite",
      children: r
    }
  ) : null;
}
function vw({ marketingAsset: e, userHasOverridePermission: t, onEject: n }) {
  const [r, o] = C.useState(!1), [i, s] = C.useState(""), [a, l] = C.useState(!1);
  return !t || e.isRawHtmlOverrideMA ? null : /* @__PURE__ */ E(Ze, { children: [
    /* @__PURE__ */ d("button", { type: "button", className: "eject-button", onClick: () => o(!0), children: "Eject to raw HTML" }),
    r && /* @__PURE__ */ d("div", { className: "eject-modal-backdrop", onClick: () => o(!1), children: /* @__PURE__ */ E("div", { className: "eject-modal", onClick: (c) => c.stopPropagation(), children: [
      /* @__PURE__ */ d("h3", { children: "This removes brand-lock protection for this asset" }),
      /* @__PURE__ */ d("p", { children: "Locked elements (logo, colours, fonts) can be edited freely once ejected. This applies to this asset only, not the template, and cannot be undone for this asset. A reason is required and will appear on the governance report." }),
      /* @__PURE__ */ d(
        "textarea",
        {
          placeholder: "Why does this asset need raw HTML?",
          value: i,
          onChange: (c) => s(c.target.value),
          autoFocus: !0
        }
      ),
      /* @__PURE__ */ E("div", { className: "eject-modal-actions", children: [
        /* @__PURE__ */ d("button", { type: "button", onClick: () => o(!1), children: "Cancel" }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "eject-confirm",
            disabled: !i.trim() || a,
            onClick: async () => {
              l(!0);
              try {
                await n(i.trim()), o(!1);
              } finally {
                l(!1);
              }
            },
            children: "Confirm eject"
          }
        )
      ] }),
      /* @__PURE__ */ d(Jo, { active: a, className: "eject-saving" })
    ] }) })
  ] });
}
async function fN(e, t, n) {
  const r = await fetch(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ templateId: t, marketingAssetId: n })
  });
  if (!r.ok)
    throw new Error(`Render API failed (${r.status})`);
  const o = await r.json();
  if (typeof (o == null ? void 0 : o.html) != "string" || !o.html.trim())
    throw new Error("Render API returned no html field");
  return o.html;
}
function pN({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  renderEmailApiUrl: r = "/api/render-email-html",
  onSaved: o
}) {
  const i = Ts(), [s, a] = C.useState(() => {
    const k = ll(t.zoneLayoutJson), T = cl(e, t.zoneValues, k.values);
    return is(e, T);
  }), [l, c] = C.useState(() => {
    const k = ll(t.zoneLayoutJson);
    return hw(e, k.layouts);
  }), [u, f] = C.useState(t.rawHtmlOverrideContent ?? ""), [m, y] = C.useState(!1), [g, v] = C.useState(null), N = C.useMemo(
    () => Aw(e, l),
    [e, l]
  ), p = C.useMemo(
    () => bd(N, s, i),
    [i, N, s]
  ), A = C.useMemo(
    () => rs(u),
    [u]
  ), h = (k, T) => {
    a((S) => ({ ...S, [k]: T }));
  }, P = (k, T) => {
    c((S) => {
      const H = { ...S[k], ...T };
      for (const D of Object.keys(T))
        T[D] === void 0 && delete H[D];
      return { ...S, [k]: H };
    });
  }, O = async () => {
    y(!0), v(null);
    try {
      const k = N.zones.map((x) => {
        const K = s[x.id];
        return K ? { ...K, zoneKey: Kr(x, N.zones) } : null;
      }).filter((x) => !!(x != null && x.zoneKey)), T = Object.fromEntries(
        k.map((x) => [x.zoneKey, x])
      ), S = pw(l, T);
      await fe.updateMarketingAsset({
        ...t,
        zoneLayoutJson: S
      }), q("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const H = await fe.saveMarketingAssetZoneValues(
        t.id,
        k
      ), D = cl(e, H, T);
      a(is(e, D));
      let L = bd(
        N,
        Object.fromEntries(D.map((x) => [x.zoneKey, x])),
        i
      );
      if (KS(r))
        q("email HTML", "Generated client-side email HTML.");
      else
        try {
          L = await fN(r, e.id, t.id), q("email HTML render", `Rendered via ${r}`);
        } catch (x) {
          ge(
            "email HTML render API",
            x instanceof Error ? x.message : String(x)
          ), ge("email HTML preview", "Using client-side inline-CSS renderer because the render API is unavailable.");
        }
      if (pp()) {
        const x = new Blob([L], { type: "text/html" });
        await fe.uploadRenderedOutput(t.id, x, `${t.assetName}.html`);
      } else
        ge(
          "rendered output upload",
          "Skipped HTML upload — not required for save on this Content Hub instance."
        );
      o == null || o({
        ...t,
        zoneValues: D,
        zoneLayoutJson: S
      });
    } catch (k) {
      const T = k instanceof Error ? k.message : "Failed to save and render email HTML.";
      Nn("email save/render", k), v(T);
    } finally {
      y(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ d(
    ul,
    {
      structureTitle: "HTML source",
      previewTitle: "Rendered preview",
      structure: /* @__PURE__ */ E("div", { className: "email-builder-override-structure", children: [
        /* @__PURE__ */ E("div", { className: "override-banner", children: [
          "Raw HTML override active. Reason: ",
          t.overrideReasonMA
        ] }),
        /* @__PURE__ */ d(
          "textarea",
          {
            className: "raw-html-editor",
            value: u,
            onChange: (k) => f(k.target.value),
            onBlur: async (k) => {
              const T = k.target.value;
              await fe.updateMarketingAsset({
                ...t,
                rawHtmlOverrideContent: T
              });
            }
          }
        )
      ] }),
      preview: /* @__PURE__ */ d(
        "iframe",
        {
          title: "Email preview",
          srcDoc: A,
          className: "email-builder-preview-frame email-builder-preview-frame-fill"
        },
        A
      )
    }
  ) : /* @__PURE__ */ d("div", { className: "email-builder", children: /* @__PURE__ */ d(
    ul,
    {
      structureTitle: "Email structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ E("div", { className: "email-builder-structure", children: [
        /* @__PURE__ */ d(
          yw,
          {
            template: e,
            zoneLayouts: l,
            zoneValues: s,
            layoutMode: "stacked",
            onLayoutChange: P,
            onZoneValueChange: h
          }
        ),
        /* @__PURE__ */ E("div", { className: "email-builder-actions", children: [
          /* @__PURE__ */ d("button", { type: "button", className: "email-builder-save", onClick: O, disabled: m, children: "Save" }),
          /* @__PURE__ */ d(Jo, { active: m }),
          /* @__PURE__ */ d(
            vw,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (k) => {
                await fe.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: k,
                  rawHtmlOverrideContent: p || "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        g && /* @__PURE__ */ d("div", { className: "marketing-builder-error email-builder-error", children: g })
      ] }),
      preview: /* @__PURE__ */ d(
        gp,
        {
          template: N,
          zoneValues: s,
          layoutMode: "stacked"
        }
      )
    }
  ) });
}
const er = 24, mN = 1, ss = 0.05, dl = 8, ww = 48;
function as(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function AN(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function oh(e, t, n, r, o = ww) {
  const i = Math.max(1, n - o * 2), s = Math.max(1, r - o * 2), a = as(
    Math.min(i / Math.max(e, 1), s / Math.max(t, 1)),
    ss,
    dl
  );
  return {
    zoom: a,
    panX: (n - e * a) / 2,
    panY: (r - t * a) / 2
  };
}
function hN(e, t, n, r, o = ww) {
  const i = Math.max(1, n - o * 2), s = Math.max(1, r - o * 2);
  let a = t.zoom;
  if ((e.width * a > i || e.height * a > s) && (a = as(
    Math.min(i / Math.max(e.width, 1), s / Math.max(e.height, 1)),
    ss,
    t.zoom
  )), a !== t.zoom)
    return {
      zoom: a,
      panX: (n - e.width * a) / 2 - e.x * a,
      panY: (r - e.height * a) / 2 - e.y * a
    };
  let l = t.panX, c = t.panY;
  const u = l + e.x * a, f = c + e.y * a, m = u + e.width * a, y = f + e.height * a;
  return u < o ? l += o - u : m > n - o && (l -= m - (n - o)), f < o ? c += o - f : y > r - o && (c -= y - (r - o)), { zoom: a, panX: l, panY: c };
}
const gN = "data:image/png;base64,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", Od = {
  primary: "#00a651",
  secondary: "#000000",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  text: "#000000",
  muted: "#6b716e"
};
function no(e) {
  return typeof e == "boolean" ? e : void 0;
}
function ra(e) {
  return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function yN(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (!r || typeof r != "object")
      continue;
    const o = r, i = Number(o.x), s = Number(o.y), a = Number(o.width), l = Number(o.height);
    [i, s, a, l].every(Number.isFinite) && (t[n] = {
      x: i,
      y: s,
      width: a,
      height: l,
      pinLeft: o.pinLeft === !0,
      pinRight: o.pinRight === !0,
      pinTop: o.pinTop === !0,
      pinBottom: o.pinBottom === !0,
      marginTop: Number.isFinite(Number(o.marginTop)) ? Math.max(0, Number(o.marginTop)) : 0,
      marginRight: Number.isFinite(Number(o.marginRight)) ? Math.max(0, Number(o.marginRight)) : 0,
      marginBottom: Number.isFinite(Number(o.marginBottom)) ? Math.max(0, Number(o.marginBottom)) : 0,
      marginLeft: Number.isFinite(Number(o.marginLeft)) ? Math.max(0, Number(o.marginLeft)) : 0
    });
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
let vN = 1;
function jt() {
  return `layer-${Date.now().toString(36)}-${vN++}`;
}
function Id(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: jt(),
        type: e,
        name: "Frame",
        x: n,
        y: r,
        width: 320,
        height: 240,
        visible: !0,
        fill: "#ffffff",
        locked: !1,
        allowTransform: !1,
        editableContent: !1
      };
    case "rect":
      return {
        id: jt(),
        type: e,
        name: "Rectangle",
        x: n,
        y: r,
        width: 160,
        height: 100,
        visible: !0,
        fill: Od.primary,
        locked: !1,
        allowTransform: !1,
        editableContent: !1
      };
    case "text":
      return {
        id: jt(),
        type: e,
        name: "Text",
        x: n,
        y: r,
        width: 220,
        height: 48,
        visible: !0,
        text: "Double-click to edit",
        flowOverflow: !0,
        fontSize: 20,
        color: "#1a1a1a",
        locked: !1,
        allowTransform: !1,
        editableContent: !0
      };
    case "image":
      return {
        id: jt(),
        type: e,
        name: "Image",
        x: n,
        y: r,
        width: 200,
        height: 140,
        visible: !0,
        fill: "#e8e6e1",
        src: "",
        locked: !1,
        allowTransform: !1,
        editableContent: !0,
        objectFit: "cover"
      };
  }
}
function yp() {
  const e = Id("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = Od.secondary;
  const t = Id("image", { x: 120, y: 140 });
  return t.name = "Logo", t.width = 240, t.height = 80, t.src = gN, t.objectFit = "contain", t.fill = "#ffffff", t.locked = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: Od.background
    },
    layers: [e, t]
  };
}
function at(e) {
  return JSON.parse(JSON.stringify(e));
}
const wN = /* @__PURE__ */ new Set(["static", "text", "brand", "picker", "hidden"]), CN = /* @__PURE__ */ new Set(["lhs", "rhs", "image", "logo", "partnerLogo"]);
function TN(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e, n = t.type;
  if (n !== "frame" && n !== "rect" && n !== "text" && n !== "image")
    return null;
  const r = typeof t.id == "string" ? t.id : jt(), o = typeof t.name == "string" ? t.name : n, i = Number(t.x), s = Number(t.y), a = Number(t.width), l = Number(t.height);
  if (![i, s, a, l].every(Number.isFinite))
    return null;
  const c = {
    id: r,
    type: n,
    name: o,
    x: i,
    y: s,
    width: a,
    height: l,
    rotation: typeof t.rotation == "number" ? t.rotation : void 0,
    visible: t.visible !== !1,
    locked: !!t.locked,
    allowTransform: !!t.allowTransform,
    fill: typeof t.fill == "string" ? t.fill : void 0,
    text: typeof t.text == "string" ? t.text : void 0,
    flowText: typeof t.flowText == "string" ? t.flowText : void 0,
    flowOverflow: no(t.flowOverflow),
    continuesFrom: typeof t.continuesFrom == "string" ? t.continuesFrom : void 0,
    fontSize: typeof t.fontSize == "number" ? t.fontSize : void 0,
    dynamicSize: no(t.dynamicSize),
    color: typeof t.color == "string" ? t.color : void 0,
    src: typeof t.src == "string" ? t.src : void 0,
    pinLeft: no(t.pinLeft),
    pinRight: no(t.pinRight),
    pinTop: no(t.pinTop),
    pinBottom: no(t.pinBottom),
    marginTop: ra(t.marginTop),
    marginRight: ra(t.marginRight),
    marginBottom: ra(t.marginBottom),
    marginLeft: ra(t.marginLeft),
    pageLayouts: yN(t.pageLayouts),
    objectFit: t.objectFit === "contain" || t.objectFit === "cover" ? t.objectFit : void 0,
    sourceLayerId: typeof t.sourceLayerId == "string" ? t.sourceLayerId : void 0,
    sourceLayerName: typeof t.sourceLayerName == "string" ? t.sourceLayerName : void 0,
    role: typeof t.role == "string" && wN.has(t.role) ? t.role : void 0,
    slot: typeof t.slot == "string" && CN.has(t.slot) ? t.slot : void 0,
    option: typeof t.option == "string" ? t.option : void 0,
    direction: t.direction === "rtl" || t.direction === "ltr" ? t.direction : void 0,
    fieldId: typeof t.fieldId == "string" && t.fieldId ? t.fieldId : void 0
  };
  return typeof t.editableContent == "boolean" ? c.editableContent = t.editableContent : c.editableContent = n === "text" || n === "image", c;
}
function Cw(e) {
  if (!Array.isArray(e))
    return [];
  const t = [];
  for (const n of e) {
    const r = TN(n);
    r && t.push(r);
  }
  return t;
}
function EN(e) {
  if (!Array.isArray(e))
    return;
  const t = [];
  for (const n of e) {
    if (!n || typeof n != "object")
      continue;
    const r = n, o = Number(r.width), i = Number(r.height);
    if (!Number.isFinite(o) || !Number.isFinite(i))
      continue;
    const s = typeof r.id == "string" && r.id ? r.id : jt(), a = typeof r.name == "string" && r.name ? r.name : `Page ${t.length + 1}`;
    t.push({ id: s, name: a, width: o, height: i, layers: Cw(r.layers) });
  }
  return t.length > 0 ? t : void 0;
}
function kN(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return;
  const t = e.brands;
  if (!t || typeof t != "object" || Array.isArray(t))
    return;
  const n = {};
  for (const [r, o] of Object.entries(t))
    typeof o == "string" && o && (n[r] = o);
  return Object.keys(n).length > 0 ? { brands: n } : void 0;
}
function bN(e) {
  if (!Array.isArray(e))
    return;
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object")
      continue;
    const o = r;
    typeof o.id != "string" || !o.id || typeof o.key != "string" || !o.key || n.has(o.key) || typeof o.label != "string" || !o.label || (n.add(o.key), t.push({ id: o.id, key: o.key, label: o.label }));
  }
  return t.length > 0 ? t : void 0;
}
function vp(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e;
  if (t.version !== 1 || !t.canvas || typeof t.canvas != "object" || !Array.isArray(t.layers))
    return null;
  const n = t.canvas;
  let r = Number(n.width), o = Number(n.height);
  if (!Number.isFinite(r) || !Number.isFinite(o))
    return null;
  const i = Cw(t.layers), s = EN(t.pages);
  let a = typeof t.activePageId == "string" ? t.activePageId : void 0;
  if (s != null && s.length) {
    (!a || !s.some((m) => m.id === a)) && (a = s[0].id);
    const f = s.find((m) => m.id === a);
    f && i.length > 0 ? (f.layers = i, f.width = r, f.height = o) : f && i.length === 0 && f.layers.length > 0 && (i.push(...f.layers), r = f.width, o = f.height);
  }
  const l = {
    version: 1,
    canvas: {
      width: r,
      height: o,
      background: typeof n.background == "string" ? n.background : void 0,
      presetId: typeof n.presetId == "string" ? n.presetId : void 0
    },
    layers: i
  };
  s && (l.pages = s, l.activePageId = a);
  const c = kN(t.settings);
  c && (l.settings = c);
  const u = bN(t.fields);
  return u && (l.fields = u), l;
}
function SN(e) {
  const t = e.trim();
  if (/do not print/i.test(t) || /(^|[^a-z])fpo([^a-z]|$)/i.test(t))
    return { role: "hidden" };
  const n = t.match(/^(.*?)\s*\((lhs|rhs)\)\s*$/i);
  if (n) {
    const r = n[1].trim();
    if (r)
      return {
        role: "brand",
        slot: n[2].toLowerCase() === "rhs" ? "rhs" : "lhs",
        option: r
      };
  }
  return /partner\s*logo\s*picker/i.test(t) ? { role: "picker", slot: "partnerLogo" } : /logo\s*picker/i.test(t) || /^logo$/i.test(t) ? { role: "picker", slot: "logo" } : /picker/i.test(t) ? { role: "picker", slot: "image" } : /arabic/i.test(t) ? { role: "text", direction: "rtl" } : /customizable|\bcopy\b|english/i.test(t) ? { role: "text" } : { role: "static" };
}
function PN(e, t) {
  if (e.sourceLayerId = t.id, e.sourceLayerName = t.name, e.role = t.role, t.slot && (e.slot = t.slot), t.option && (e.option = t.option), t.direction && (e.direction = t.direction), t.role === "static" || t.role === "hidden" || t.role === "brand")
    e.locked = !0, e.editableContent = !1, e.allowTransform = !1;
  else if (t.role === "text") {
    const r = e.type === "text";
    e.locked = !r, e.editableContent = r, e.allowTransform = !1;
  } else if (t.role === "picker") {
    const r = e.type === "image";
    e.locked = !r, e.editableContent = r, e.allowTransform = !1;
  }
  t.role === "brand" && t.option ? e.name = t.option : t.role === "picker" && (e.name = t.slot === "partnerLogo" ? "Partner logo" : t.slot === "logo" ? "Logo" : "Image");
}
function Ir(e, t) {
  var n;
  if (e.visible === !1)
    return !1;
  if (!e.role && !e.sourceLayerName)
    return !0;
  if (e.role === "hidden")
    return !1;
  if (e.role === "brand" && e.slot && e.option) {
    const r = (n = t == null ? void 0 : t.brands) == null ? void 0 : n[e.slot];
    if (r && r !== e.option)
      return !1;
  }
  return !0;
}
function Tw(e) {
  let t = 0;
  for (const n of e) {
    const r = /^Page (\d+)$/.exec(n.name.trim());
    r && (t = Math.max(t, Number(r[1])));
  }
  return `Page ${Math.max(t + 1, e.length + 1)}`;
}
function Ew(e) {
  var r;
  const t = Qt(e);
  if ((r = t.pages) != null && r.length && t.activePageId)
    return t;
  const n = jt();
  return {
    ...t,
    activePageId: n,
    pages: [
      {
        id: n,
        name: "Page 1",
        width: t.canvas.width,
        height: t.canvas.height,
        layers: t.layers.map((o) => ({ ...o }))
      }
    ]
  };
}
function NN(e) {
  const t = Ew(e), n = t.pages ?? [], r = {
    id: jt(),
    name: Tw(n),
    width: t.canvas.width,
    height: t.canvas.height,
    layers: []
  };
  return { ...t, pages: [...n, r] };
}
function DN(e) {
  const t = Ew(e), n = t.pages ?? [], r = {
    id: jt(),
    name: Tw(n),
    width: t.canvas.width,
    height: t.canvas.height,
    layers: []
  };
  return {
    ...t,
    pages: [...n, r],
    activePageId: r.id,
    canvas: {
      ...t.canvas,
      width: r.width,
      height: r.height,
      presetId: Vo(r.width, r.height)
    },
    layers: []
  };
}
function xN(e) {
  const t = Qt(e);
  if (!t.pages || t.pages.length < 2 || !t.activePageId)
    return null;
  const n = t.pages.findIndex((i) => i.id === t.activePageId);
  if (n < 0)
    return null;
  const r = t.pages.filter((i) => i.id !== t.activePageId), o = r[Math.min(n, r.length - 1)];
  return {
    ...t,
    pages: r,
    activePageId: o.id,
    canvas: {
      ...t.canvas,
      width: o.width,
      height: o.height,
      presetId: Vo(o.width, o.height)
    },
    layers: o.layers.map((i) => ({ ...i }))
  };
}
function Qt(e) {
  var t;
  return !((t = e.pages) != null && t.length) || !e.activePageId ? e : {
    ...e,
    pages: e.pages.map(
      (n) => n.id === e.activePageId ? { ...n, width: e.canvas.width, height: e.canvas.height, layers: e.layers } : n
    )
  };
}
function BN(e) {
  const t = /* @__PURE__ */ new Map(), n = (o) => {
    if (o.role !== "brand" || o.slot !== "lhs" && o.slot !== "rhs" || !o.option)
      return;
    const i = t.get(o.slot) ?? [];
    i.includes(o.option) || i.push(o.option), t.set(o.slot, i);
  }, r = e.pages ?? [];
  if (r.length > 0)
    for (const o of r)
      for (const i of o.layers)
        n(i);
  else
    for (const o of e.layers)
      n(o);
  return ["lhs", "rhs"].filter((o) => {
    var i;
    return (((i = t.get(o)) == null ? void 0 : i.length) ?? 0) > 0;
  }).map((o) => ({
    slot: o,
    label: o === "lhs" ? "Left brand" : "Right brand",
    options: t.get(o) ?? []
  }));
}
function ON(e) {
  const t = {}, n = {};
  for (const r of e)
    r.role !== "brand" || r.slot !== "lhs" && r.slot !== "rhs" || !r.option || (n[r.slot] || (n[r.slot] = r.option), r.visible && (t[r.slot] = r.option));
  for (const [r, o] of Object.entries(n))
    t[r] || (t[r] = o);
  return t;
}
const IN = 12;
function zN(e, t) {
  if (!t.continuesFrom)
    return t;
  const n = e.pages ?? [];
  for (const r of n) {
    const o = r.layers.find((i) => i.id === t.continuesFrom);
    if (o)
      return o;
  }
  return e.layers.find((r) => r.id === t.continuesFrom) ?? t;
}
function LN(e, t, n) {
  if (t.type !== "text" || !t.dynamicSize || t.continuesFrom || typeof n.fontSize == "number")
    return t;
  const r = Math.abs(t.width - e.width) > 0.5, o = Math.abs(t.height - e.height) > 0.5;
  if (!r && !o)
    return t;
  const i = e.width > 0 ? t.width / e.width : 1, s = e.height > 0 ? t.height / e.height : 1, a = r && o ? Math.sqrt(i * s) : o ? s : i;
  return {
    ...t,
    fontSize: Math.max(1, Math.round((e.fontSize || 16) * a))
  };
}
function MN(e) {
  return e.flowText !== void 0 ? e.flowText : e.text || "";
}
function zd(e, t) {
  var m, y;
  if (typeof document > "u" || typeof document.createElement != "function")
    return e;
  const n = Qt(e), r = ((m = n.pages) == null ? void 0 : m.length) ?? 0, o = r > 0 ? n : RN(n), i = o.pages.map((g) => ({
    ...g,
    layers: g.layers.map((v) => ({ ...v }))
  })), s = o.activePageId || i[0].id, a = ih(i, t);
  if (!a || a.layer.type !== "text")
    return e;
  const l = a.layer.continuesFrom || a.layer.id, c = ih(i, l);
  if (!c || c.layer.type !== "text")
    return e;
  const u = c.layer;
  if (!u.flowOverflow)
    return u.flowText = void 0, HN(i, u.id), pu(o, i, s, r);
  const f = QN();
  try {
    let g = u.text || "";
    const v = mu(f, g, u);
    u.flowText = v.rest ? v.fit : void 0, g = v.rest;
    const N = i.findIndex((h) => h.layers.some((P) => P.id === u.id));
    let p = N, A = 0;
    for (; g && A < IN; ) {
      A += 1;
      const h = p + 1;
      if (h >= i.length) {
        const S = NN(pu(o, i, s, i.length)), H = (y = S.pages) == null ? void 0 : y[S.pages.length - 1];
        if (!H)
          break;
        i.push({ ...H, layers: [] });
      }
      const P = i[h];
      if (!P)
        break;
      const O = P.layers.find((S) => S.continuesFrom === u.id), k = O ?? FN(u, P);
      O || (P.layers = [...P.layers, k]), k.fontSize = u.fontSize, k.color = u.color, k.direction = u.direction;
      let T = mu(f, g, k);
      if (!T.fit && k.height < P.height - 48 && (k.height = Math.max(k.height, P.height - k.y - 24), T = mu(f, g, k)), !T.fit) {
        P.layers = P.layers.filter((S) => S.id !== k.id);
        break;
      }
      k.flowText = T.fit, k.text = T.fit, g = T.rest, p = h;
    }
    for (let h = 0; h < i.length; h += 1)
      (h <= N || h > p) && (i[h].layers = i[h].layers.filter((P) => P.continuesFrom !== u.id));
  } finally {
    f.remove();
  }
  for (; i.length > Math.max(r, 1) && i[i.length - 1].layers.length === 0; )
    i.pop();
  return pu(o, i, s, r);
}
function RN(e) {
  const t = e.activePageId || "page-current";
  return {
    ...e,
    activePageId: t,
    pages: [
      {
        id: t,
        name: "Page 1",
        width: e.canvas.width,
        height: e.canvas.height,
        layers: e.layers.map((n) => ({ ...n }))
      }
    ]
  };
}
function pu(e, t, n, r) {
  const o = t.find((s) => s.id === n) ?? t[0], i = {
    ...e,
    layers: (o == null ? void 0 : o.layers) ?? e.layers
  };
  return r > 0 || t.length > 1 ? (i.pages = t, i.activePageId = (o == null ? void 0 : o.id) ?? n) : (delete i.pages, delete i.activePageId), i;
}
function ih(e, t) {
  for (const n of e) {
    const r = n.layers.find((o) => o.id === t);
    if (r)
      return { page: n, layer: r };
  }
  return null;
}
function HN(e, t) {
  for (const n of e)
    n.layers = n.layers.filter((r) => r.continuesFrom !== t);
}
function FN(e, t) {
  const r = Math.max(48, t.height - 24 - 24);
  return {
    id: jt(),
    type: "text",
    name: `${e.name} continued`,
    x: e.x,
    y: 24,
    width: e.width,
    height: r,
    visible: !0,
    locked: !1,
    allowTransform: !!e.allowTransform,
    editableContent: !0,
    text: "",
    flowText: "",
    fontSize: e.fontSize,
    color: e.color,
    direction: e.direction,
    continuesFrom: e.id,
    role: e.role === "text" ? "text" : void 0
  };
}
function QN() {
  const e = document.createElement("div");
  return e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.left = "-10000px", e.style.top = "0", e.style.visibility = "hidden", e.style.boxSizing = "border-box", e.style.height = "auto", e.style.padding = "4px 6px", e.style.whiteSpace = "pre-wrap", e.style.wordBreak = "break-word", e.style.lineHeight = "1.25", e.style.fontFamily = "Georgia, 'Times New Roman', serif", document.body.appendChild(e), e;
}
function mu(e, t, n) {
  if (e.style.width = `${Math.max(1, n.width)}px`, e.style.fontSize = `${n.fontSize || 16}px`, e.style.direction = n.direction === "rtl" ? "rtl" : "ltr", !t)
    return { fit: "", rest: "" };
  let r = 0, o = t.length, i = 0;
  for (; r <= o; ) {
    const s = Math.floor((r + o) / 2);
    e.textContent = t.slice(0, s), e.scrollHeight <= n.height + 1 ? (i = s, r = s + 1) : o = s - 1;
  }
  if (i > 0 && i < t.length) {
    const s = t.slice(0, i), a = Math.max(s.lastIndexOf(`
`), s.lastIndexOf(" "));
    a > 0 && a >= i - 48 && (i = a + 1);
  }
  return {
    fit: t.slice(0, i),
    rest: t.slice(i).replace(/^[ \t]+/, "")
  };
}
function wp({
  layer: e,
  selected: t,
  onSelect: n,
  onMoveStart: r,
  onUnlock: o,
  preview: i = !1
}) {
  if (!e.visible)
    return null;
  const s = {
    left: e.x,
    top: e.y,
    width: e.width,
    height: e.height,
    transform: e.rotation ? `rotate(${e.rotation}deg)` : void 0
  };
  let a = null;
  switch (e.type) {
    case "frame":
      a = /* @__PURE__ */ d(
        "div",
        {
          className: "chd-layer-frame",
          style: { background: e.fill || "#ffffff" }
        }
      );
      break;
    case "rect":
      a = /* @__PURE__ */ d(
        "div",
        {
          className: "chd-layer-rect",
          style: { background: e.fill || "#888780" }
        }
      );
      break;
    case "text":
      a = /* @__PURE__ */ d(
        "div",
        {
          className: `chd-layer-text${e.direction === "rtl" ? " chd-layer-text--rtl" : ""}`,
          style: {
            color: e.color || "#1a1a1a",
            fontSize: e.fontSize || 16,
            direction: e.direction === "rtl" ? "rtl" : void 0
          },
          children: MN(e)
        }
      );
      break;
    case "image":
      a = e.src ? /* @__PURE__ */ d(
        "img",
        {
          className: `chd-layer-image${e.objectFit === "contain" || /logo/i.test(e.name) ? " chd-layer-image--contain" : ""}`,
          style: { background: e.fill || "transparent" },
          src: e.src,
          alt: e.name,
          draggable: !1
        }
      ) : /* @__PURE__ */ d("div", { className: "chd-layer-image-placeholder", style: { background: e.fill || "#e8e6e1" }, children: e.name || "Image" });
      break;
  }
  return i ? /* @__PURE__ */ d("div", { className: "chd-layer", style: s, "data-layer-id": e.id, children: a }) : /* @__PURE__ */ E(
    "div",
    {
      className: `chd-layer${t ? " chd-layer--selected" : ""}${e.locked ? " chd-layer--locked" : ""}`,
      style: s,
      "data-layer-id": e.id,
      onPointerDown: (l) => {
        l.button === 0 && (l.stopPropagation(), n(l), e.locked || r(l));
      },
      children: [
        a,
        e.locked ? /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "chd-layer-lock",
            title: "Double-click to unlock",
            "aria-label": "Locked. Double-click to unlock",
            onPointerDown: (l) => {
              l.stopPropagation();
            },
            onDoubleClick: (l) => {
              l.preventDefault(), l.stopPropagation(), o == null || o();
            },
            children: /* @__PURE__ */ E("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: [
              /* @__PURE__ */ d("rect", { x: "2", y: "5.5", width: "8", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.3" }),
              /* @__PURE__ */ d(
                "path",
                {
                  d: "M4 5.5V3.8a2 2 0 0 1 4 0v1.7",
                  stroke: "currentColor",
                  strokeWidth: "1.3",
                  strokeLinecap: "round"
                }
              )
            ] })
          }
        ) : null
      ]
    }
  );
}
function kw(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function Es(e) {
  return e.locked ? !1 : kw(e);
}
function qo(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function Cp(e, t, n) {
  return Ir(e, n) ? t === "admin" ? !0 : Es(e) || qo(e) : !1;
}
function UN(e) {
  return { version: 1, templateId: e, overrides: {} };
}
function jN(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e;
  if (t.version !== 1 || typeof t.templateId != "string" || !t.overrides || typeof t.overrides != "object" || Array.isArray(t.overrides))
    return null;
  const n = {};
  for (const [r, o] of Object.entries(t.overrides)) {
    if (!o || typeof o != "object")
      continue;
    const i = o, s = {};
    for (const a of ["x", "y", "width", "height"])
      typeof i[a] == "number" && Number.isFinite(i[a]) && (s[a] = i[a]);
    for (const a of ["text", "fill", "color", "src"])
      typeof i[a] == "string" && (s[a] = i[a]);
    Object.keys(s).length > 0 && (n[r] = s);
  }
  return {
    version: 1,
    templateId: t.templateId,
    overrides: n,
    fields: bw(t.fields)
  };
}
function bw(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return;
  const t = {};
  for (const [n, r] of Object.entries(e))
    typeof r == "string" && r.trim() && (t[n] = r);
  return Object.keys(t).length > 0 ? t : void 0;
}
function sh(e, t) {
  return e.map((n) => {
    const r = t[n.id];
    if (!r)
      return n;
    const o = { ...n };
    return qo(n) && (typeof r.x == "number" && (o.x = r.x), typeof r.y == "number" && (o.y = r.y), typeof r.width == "number" && (o.width = r.width), typeof r.height == "number" && (o.height = r.height)), Es(n) && (typeof r.text == "string" && (o.text = r.text), typeof r.fill == "string" && (o.fill = r.fill), typeof r.color == "string" && (o.color = r.color), typeof r.src == "string" && (o.src = r.src)), o;
  });
}
function ah(e) {
  var n;
  const t = Qt(e);
  return (n = t.pages) != null && n.length ? t.pages.flatMap((r) => r.layers) : t.layers;
}
function GN(e, t) {
  var o;
  const n = at(e);
  if (!(t != null && t.overrides))
    return n;
  const r = sh(n.layers, t.overrides);
  return {
    ...n,
    layers: r,
    pages: (o = n.pages) == null ? void 0 : o.map((i) => ({
      ...i,
      layers: i.id === n.activePageId ? r : sh(i.layers, t.overrides)
    }))
  };
}
function KN(e, t, n, r) {
  const o = {}, i = new Map(ah(e).map((a) => [a.id, a]));
  for (const a of ah(t)) {
    const l = i.get(a.id);
    if (!l)
      continue;
    const c = {};
    qo(l) && (a.x !== l.x && (c.x = a.x), a.y !== l.y && (c.y = a.y), a.width !== l.width && (c.width = a.width), a.height !== l.height && (c.height = a.height)), Es(l) && (!l.fieldId && (a.text ?? "") !== (l.text ?? "") && (c.text = a.text), (a.fill ?? "") !== (l.fill ?? "") && (c.fill = a.fill), (a.color ?? "") !== (l.color ?? "") && (c.color = a.color), (a.src ?? "") !== (l.src ?? "") && (c.src = a.src)), Object.keys(c).length > 0 && (o[a.id] = c);
  }
  const s = bw(r);
  return s ? { version: 1, templateId: n, overrides: o, fields: s } : { version: 1, templateId: n, overrides: o };
}
function YN(e, t) {
  const n = {};
  return qo(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), Es(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const ZN = 8;
function oa(e, t) {
  return Math.abs(e - t) <= ZN;
}
function ia(e, t) {
  return e === !0 ? !0 : e === !1 ? !1 : t;
}
function Tp(e) {
  return typeof e.pinLeft == "boolean" || typeof e.pinRight == "boolean" || typeof e.pinTop == "boolean" || typeof e.pinBottom == "boolean";
}
function XN(e, t, n) {
  return Tp(e) ? {
    left: e.pinLeft === !0,
    right: e.pinRight === !0,
    top: e.pinTop === !0,
    bottom: e.pinBottom === !0
  } : {
    left: ia(e.pinLeft, oa(e.x, 0)),
    right: ia(e.pinRight, oa(e.x + e.width, t)),
    top: ia(e.pinTop, oa(e.y, 0)),
    bottom: ia(e.pinBottom, oa(e.y + e.height, n))
  };
}
function sa(e, t) {
  const n = e[t];
  return typeof n == "number" && Number.isFinite(n) ? Math.max(0, n) : 0;
}
function ls(e, t, n) {
  const r = XN(e, t, n), o = sa(e, "marginTop"), i = sa(e, "marginRight"), s = sa(e, "marginBottom"), a = sa(e, "marginLeft");
  let l = e.x, c = e.y, u = e.width, f = e.height;
  return r.left && r.right ? (l = a, u = Math.max(er, t - a - i)) : r.left ? l = a : r.right && (l = t - i - u), r.top && r.bottom ? (c = o, f = Math.max(er, n - o - s)) : r.top ? c = o : r.bottom && (c = n - s - f), { x: l, y: c, width: u, height: f };
}
function Sw(e, t, n) {
  return {
    x: 0,
    y: 0,
    width: t,
    height: n,
    pinLeft: !0,
    pinRight: !0,
    pinTop: !0,
    pinBottom: !0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    objectFit: e.type === "image" ? e.objectFit ?? "cover" : e.objectFit
  };
}
function cs(e) {
  const t = Vo(e.width, e.height, e.presetId);
  return t !== "custom" ? t : `${Math.round(e.width)}x${Math.round(e.height)}`;
}
function aa(e, t) {
  const n = e[t];
  return typeof n == "number" && Number.isFinite(n) ? Math.max(0, n) : 0;
}
function fl(e) {
  return {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    pinLeft: e.pinLeft === !0,
    pinRight: e.pinRight === !0,
    pinTop: e.pinTop === !0,
    pinBottom: e.pinBottom === !0,
    marginTop: aa(e, "marginTop"),
    marginRight: aa(e, "marginRight"),
    marginBottom: aa(e, "marginBottom"),
    marginLeft: aa(e, "marginLeft")
  };
}
function WN(e) {
  return { ...e };
}
function VN(e, t) {
  const n = cs(t);
  return {
    ...e,
    pageLayouts: {
      ...e.pageLayouts,
      [n]: fl(e)
    }
  };
}
function JN(e, t) {
  return VN(e, t);
}
function qN(e, t, n, r, o) {
  const i = {
    pinTop: e.pinTop === !0,
    pinLeft: e.pinLeft === !0,
    pinRight: e.pinRight === !0,
    pinBottom: e.pinBottom === !0,
    [t]: n
  }, s = { ...e, ...i };
  return {
    ...i,
    ...ls(s, r, o)
  };
}
function _N(e, t, n, r, o) {
  const i = Math.max(0, Number.isFinite(n) ? n : 0), s = { ...e, [t]: i };
  return Tp(s) ? {
    [t]: i,
    ...ls(s, r, o)
  } : { [t]: i };
}
function Pw(e, t, n) {
  return {
    pinLeft: !0,
    pinTop: !0,
    pinRight: !1,
    pinBottom: !1,
    marginLeft: Math.max(0, e.x),
    marginTop: Math.max(0, e.y),
    marginRight: Math.max(0, t - e.x - e.width),
    marginBottom: Math.max(0, n - e.y - e.height)
  };
}
function $N(e, t) {
  const n = fl(e), r = { ...e.pageLayouts ?? {} };
  r[cs(t)] = n;
  const o = [
    ...ws.map((a) => ({
      key: a.id,
      width: a.width,
      height: a.height
    })),
    { key: cs(t), width: t.width, height: t.height }
  ], i = /* @__PURE__ */ new Set();
  for (const a of o) {
    if (i.has(a.key))
      continue;
    i.add(a.key);
    const l = ls({ ...e, ...n }, a.width, a.height);
    r[a.key] = {
      ...n,
      ...l
    };
  }
  const s = ls({ ...e, ...n }, t.width, t.height);
  return {
    ...n,
    ...s,
    pageLayouts: r
  };
}
function eD(e, t, n, r) {
  const o = e.canvas;
  if (o.width === t && o.height === n && (!r || o.presetId === r))
    return e;
  const i = cs(o), s = {
    ...o,
    width: t,
    height: n,
    presetId: r
  }, a = cs(s);
  return {
    ...e,
    canvas: s,
    layers: e.layers.map((l) => {
      const c = {
        ...l.pageLayouts,
        [i]: fl(l)
      }, u = c[a];
      if (u)
        return {
          ...l,
          ...WN(u),
          pageLayouts: c
        };
      const f = Tp(l) ? { ...l, ...ls(l, t, n) } : l;
      return c[a] = fl(f), { ...f, pageLayouts: c };
    })
  };
}
function wi(e) {
  return `{{${e.key}}}`;
}
function tD(e, t = "Text") {
  const r = (e ?? "").split(`
`).map((o) => o.trim()).find(Boolean) || t.trim() || "Text";
  return r.length > 40 ? `${r.slice(0, 40)}…` : r;
}
function nD(e) {
  return e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 40) || "text";
}
function rD(e, t) {
  if (!t.has(e))
    return t.add(e), e;
  let n = 2;
  for (; t.has(`${e}_${n}`); )
    n += 1;
  const r = `${e}_${n}`;
  return t.add(r), r;
}
function lh(e) {
  return !(e.type !== "text" || e.continuesFrom || e.fieldId || e.role === "static" || e.role === "brand" || e.role === "hidden" || e.role === "picker" || e.locked || e.editableContent === !1);
}
function Ld(e) {
  var t;
  return (t = e.pages) != null && t.length ? e.pages.map((n) => n.layers) : [e.layers];
}
function Nw(e) {
  const t = Qt(e);
  if (!Ld(t).some((s) => s.some(lh)))
    return e;
  const r = Qt(at(e)), o = [...r.fields ?? []], i = new Set(o.map((s) => s.key));
  for (const s of Ld(r))
    for (const a of s) {
      if (!lh(a))
        continue;
      const l = tD(a.text, a.name), c = rD(nD(l), i), u = { id: `field-${jt()}`, key: c, label: l };
      o.push(u), a.fieldId = u.id;
    }
  return r.fields = o, r;
}
function oD(e) {
  if (!e)
    return null;
  const t = {};
  for (const [n, r] of Object.entries(e))
    typeof r == "string" && r.trim() && (t[n] = r);
  return Object.keys(t).length > 0 ? t : null;
}
function Md(e, t) {
  const n = oD(t);
  if (!n)
    return e;
  const r = Qt(at(e)), o = [];
  for (const s of Ld(r))
    for (const a of s) {
      if (!a.fieldId || a.continuesFrom)
        continue;
      const l = n[a.fieldId];
      l === void 0 || (a.text || "") === l || (a.text = l, o.push(a.id));
    }
  let i = r;
  for (const s of o)
    i = zd(i, s);
  return i;
}
function iD(e) {
  const t = [];
  let n = [], r = "", o = !1;
  const i = e.replace(/^\uFEFF/, "");
  for (let s = 0; s < i.length; s += 1) {
    const a = i[s];
    if (o) {
      a === '"' ? i[s + 1] === '"' ? (r += '"', s += 1) : o = !1 : r += a;
      continue;
    }
    a === '"' ? o = !0 : a === "," ? (n.push(r), r = "") : a === `
` ? (n.push(r), t.push(n), n = [], r = "") : a !== "\r" && (r += a);
  }
  return (r.length > 0 || n.length > 0) && (n.push(r), t.push(n)), t.filter((s) => s.some((a) => a.trim() !== ""));
}
function sD(e, t) {
  const n = iD(e);
  if (n.length === 0)
    return { rows: [], unmatched: [] };
  const r = n[0].map((a) => a.trim()), o = [], i = [];
  return r.forEach((a, l) => {
    if (!a)
      return;
    const c = a.toLowerCase(), u = t.find(
      (f) => f.label.toLowerCase() === c || f.key.toLowerCase() === c || wi(f).toLowerCase() === c
    );
    u ? i.push({ index: l, fieldId: u.id }) : o.push(a);
  }), { rows: n.slice(1).map((a) => {
    const l = {};
    for (const c of i) {
      const u = a[c.index] ?? "";
      u.trim() && (l[c.fieldId] = u);
    }
    return l;
  }), unmatched: o };
}
const aD = 50, Dw = C.createContext(null);
function lD(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function ch(e, t, n) {
  if (t.length === 0)
    return e;
  const r = new Set(t), o = [...e];
  if (n === "forward") {
    for (let i = o.length - 2; i >= 0; i -= 1)
      if (r.has(o[i].id) && !r.has(o[i + 1].id)) {
        const s = o[i];
        o[i] = o[i + 1], o[i + 1] = s;
      }
  } else
    for (let i = 1; i < o.length; i += 1)
      if (r.has(o[i].id) && !r.has(o[i - 1].id)) {
        const s = o[i];
        o[i] = o[i - 1], o[i - 1] = s;
      }
  return o;
}
function cD({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: o,
  initialFieldValues: i,
  onDocumentChange: s,
  onInstanceChange: a
}) {
  const l = C.useRef(null);
  l.current || (l.current = n ? at(n) : yp());
  const c = C.useRef(
    at(r ?? n ?? l.current)
  ), u = C.useRef(t);
  u.current = t;
  const [f, m] = C.useState(() => at(l.current)), [y, g] = C.useState(() => ({ ...i ?? {} })), [v, N] = C.useState(null), [p, A] = C.useState([]), [h, P] = C.useState({
    zoom: mN,
    panX: 40,
    panY: 40,
    fitNonce: 0
  }), O = C.useRef([at(l.current)]), k = C.useRef(0), [T, S] = C.useState(0), H = C.useRef(p);
  H.current = p;
  const D = C.useRef(f);
  D.current = f;
  const L = C.useRef(y);
  L.current = y;
  const x = C.useRef(s);
  x.current = s;
  const K = C.useRef(a);
  K.current = a;
  const ve = C.useRef(o);
  ve.current = o;
  const se = C.useCallback(() => S((z) => z + 1), []), _ = C.useCallback((z) => {
    var J, we;
    if ((J = x.current) == null || J.call(x, at(Qt(z))), u.current === "endUser") {
      const M = ve.current ?? "";
      (we = K.current) == null || we.call(
        K,
        KN(c.current, z, M, L.current)
      );
    }
  }, []), oe = C.useCallback(
    (z) => {
      const J = O.current.slice(0, k.current + 1);
      for (J.push(at(z)); J.length > aD; )
        J.shift();
      O.current = J, k.current = J.length - 1, se();
    },
    [se]
  ), G = C.useCallback(
    (z, J) => {
      m(z), D.current = z, J && oe(z), _(z);
    },
    [_, oe]
  ), V = C.useCallback(
    (z) => {
      var we;
      const J = u.current === "endUser";
      switch (z.type) {
        case "ADD_LAYER": {
          if (J)
            return;
          const M = Id(z.layerType, z.at);
          m((Q) => {
            let Z = { ...Q, layers: [...Q.layers, M] };
            return M.type === "text" && M.flowOverflow && (Z = zd(Z, M.id)), oe(Z), _(Z), Z;
          }), A([M.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const M = z.pushHistory !== !1;
          m((Q) => {
            var Ce;
            const Z = (ie, Zr) => {
              if (ie.id !== z.id)
                return ie;
              const Wt = J ? YN(ie, z.patch) : z.patch;
              if (Object.keys(Wt).length === 0)
                return ie;
              const un = { ...ie, ...Wt };
              typeof un.width == "number" && (un.width = Math.max(er, un.width)), typeof un.height == "number" && (un.height = Math.max(er, un.height));
              const Xr = LN(ie, un, z.patch);
              return J || !Zr ? Xr : JN(Xr, Q.canvas);
            }, de = Q.layers.map((ie) => Z(ie, !0)), $ = (Ce = Q.pages) == null ? void 0 : Ce.map((ie) => ({
              ...ie,
              layers: ie.id === Q.activePageId ? de : ie.layers.map((Zr) => Z(Zr, !1))
            }));
            let Te = $ ? { ...Q, layers: de, pages: $ } : { ...Q, layers: de };
            const ee = de.find((ie) => ie.id === z.id) || ($ == null ? void 0 : $.flatMap((ie) => ie.layers).find((ie) => ie.id === z.id));
            return (ee == null ? void 0 : ee.type) === "text" && (!!ee.flowOverflow || !!ee.continuesFrom || z.patch.flowOverflow === !1) && ee && (Te = zd(Te, ee.continuesFrom || ee.id)), M && oe(Te), _(Te), Te;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if (J)
            return;
          const M = new Set(z.ids ?? H.current);
          if (M.size === 0)
            return;
          m((Q) => {
            var Ce;
            const Z = Qt(Q), de = new Set(M), $ = ((Ce = Z.pages) == null ? void 0 : Ce.flatMap((ie) => ie.layers)) ?? Z.layers;
            for (const ie of $)
              ie.continuesFrom && de.has(ie.continuesFrom) && de.add(ie.id);
            const Te = (ie) => !de.has(ie.id), ee = Z.layers.filter(Te), Xt = Z.pages ? {
              ...Z,
              layers: ee,
              pages: Z.pages.map((ie) => ({
                ...ie,
                layers: ie.id === Z.activePageId ? ee : ie.layers.filter(Te)
              }))
            } : { ...Z, layers: ee };
            return oe(Xt), _(Xt), Xt;
          }), A((Q) => Q.filter((Z) => !M.has(Z)));
          break;
        }
        case "SELECT": {
          A((M) => {
            const Q = z.ids.filter((Z) => {
              const de = D.current.layers.find(($) => $.id === Z);
              return de ? Cp(de, u.current, D.current.settings) : !1;
            });
            if (z.additive) {
              const Z = new Set(M);
              for (const de of Q)
                Z.has(de) ? Z.delete(de) : Z.add(de);
              return Array.from(Z);
            }
            return Q;
          });
          break;
        }
        case "UNSELECT_ALL": {
          A([]);
          break;
        }
        case "REORDER": {
          if (J)
            return;
          m((M) => {
            const Q = {
              ...M,
              layers: lD(M.layers, z.fromIndex, z.toIndex)
            };
            return oe(Q), _(Q), Q;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if (J)
            return;
          m((M) => {
            const Q = {
              ...M,
              layers: M.layers.map(
                (Z) => Z.id === z.id ? { ...Z, visible: z.visible } : Z
              )
            };
            return oe(Q), _(Q), Q;
          });
          break;
        }
        case "BRING_FORWARD": {
          if (J)
            return;
          const M = H.current;
          m((Q) => {
            const Z = { ...Q, layers: ch(Q.layers, M, "forward") };
            return oe(Z), _(Z), Z;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if (J)
            return;
          const M = H.current;
          m((Q) => {
            const Z = { ...Q, layers: ch(Q.layers, M, "backward") };
            return oe(Z), _(Z), Z;
          });
          break;
        }
        case "ZOOM_SET": {
          P((M) => ({
            ...M,
            zoom: as(z.zoom, ss, dl)
          }));
          break;
        }
        case "ZOOM_RESET": {
          P((M) => ({ ...M, fitNonce: M.fitNonce + 1 }));
          break;
        }
        case "VIEWPORT_SET": {
          P((M) => ({
            ...M,
            zoom: as(z.zoom, ss, dl),
            panX: z.panX,
            panY: z.panY
          }));
          break;
        }
        case "PAN_SET": {
          P((M) => ({
            ...M,
            panX: z.panX,
            panY: z.panY
          }));
          break;
        }
        case "UNDO": {
          if (k.current <= 0)
            return;
          k.current -= 1;
          const M = at(O.current[k.current]);
          m(M), D.current = M, A([]), se(), _(M);
          break;
        }
        case "REDO": {
          if (k.current >= O.current.length - 1)
            return;
          k.current += 1;
          const M = at(O.current[k.current]);
          m(M), D.current = M, A([]), se(), _(M);
          break;
        }
        case "LOAD_DOCUMENT": {
          G(at(z.document), !0), A([]);
          break;
        }
        case "SET_CANVAS_SIZE": {
          if (J)
            return;
          m((M) => {
            const Q = eD(M, z.width, z.height, z.presetId);
            return Q === M ? M : (oe(Q), _(Q), Q);
          });
          break;
        }
        case "SET_TEMPLATE_PAGE": {
          if (!((we = Qt(D.current).pages) == null ? void 0 : we.find((Z) => Z.id === z.pageId))) {
            N(z.pageId), A([]);
            break;
          }
          N(null), m((Z) => {
            var ee;
            const de = Qt(Z), $ = (ee = de.pages) == null ? void 0 : ee.find((Xt) => Xt.id === z.pageId);
            if (!$ || $.id === Z.activePageId)
              return Z;
            const Te = {
              ...de,
              activePageId: $.id,
              canvas: {
                ...de.canvas,
                width: $.width,
                height: $.height,
                presetId: Vo($.width, $.height)
              },
              layers: $.layers.map((Xt) => ({ ...Xt }))
            };
            return oe(Te), _(Te), Te;
          }), A([]);
          break;
        }
        case "ADD_TEMPLATE_PAGE": {
          if (J)
            return;
          m((M) => {
            const Q = DN(M);
            return oe(Q), _(Q), Q;
          }), A([]);
          break;
        }
        case "REMOVE_TEMPLATE_PAGE": {
          if (J)
            return;
          m((M) => {
            const Q = xN(M);
            return Q ? (oe(Q), _(Q), Q) : M;
          }), A([]);
          break;
        }
        case "SET_BRAND_OPTION": {
          m((M) => {
            var Z;
            const Q = {
              ...M,
              settings: {
                brands: { ...(Z = M.settings) == null ? void 0 : Z.brands, [z.slot]: z.option }
              }
            };
            return oe(Q), _(Q), Q;
          }), A([]);
          break;
        }
        case "PUSH_LAYER_TO_ALL_PAGES": {
          if (J)
            return;
          m((M) => {
            const Q = {
              ...M,
              layers: M.layers.map((Z) => Z.id !== z.id ? Z : { ...Z, ...$N(Z, M.canvas) })
            };
            return oe(Q), _(Q), Q;
          });
          break;
        }
        case "SET_FIELD_VALUE": {
          if (!J)
            return;
          const M = { ...L.current };
          z.value.trim() ? M[z.fieldId] = z.value : delete M[z.fieldId], L.current = M, g(M), _(D.current);
          break;
        }
        case "SET_FIELD_LABEL": {
          if (J || !z.label.trim())
            return;
          m((M) => {
            var Z;
            if (!((Z = M.fields) != null && Z.some((de) => de.id === z.fieldId)))
              return M;
            const Q = {
              ...M,
              fields: M.fields.map(
                (de) => de.id === z.fieldId ? { ...de, label: z.label } : de
              )
            };
            return oe(Q), _(Q), Q;
          });
          break;
        }
        case "SET_LAYER_FIELD": {
          if (J)
            return;
          m((M) => {
            var $;
            if (z.fieldId && !(($ = M.fields) != null && $.some((Te) => Te.id === z.fieldId)))
              return M;
            const Q = (Te) => {
              if (Te.id !== z.layerId || Te.continuesFrom)
                return Te;
              if (!z.fieldId) {
                const ee = { ...Te };
                return delete ee.fieldId, ee;
              }
              return { ...Te, fieldId: z.fieldId };
            }, Z = M.layers.map(Q), de = M.pages ? {
              ...M,
              layers: Z,
              pages: M.pages.map((Te) => ({
                ...Te,
                layers: Te.id === M.activePageId ? Z : Te.layers.map(Q)
              }))
            } : { ...M, layers: Z };
            return oe(de), _(de), de;
          });
          break;
        }
        case "ADD_MAGIC_STRINGS": {
          if (J)
            return;
          m((M) => {
            const Q = Nw(M);
            return Q === M ? M : (oe(Q), _(Q), Q);
          });
          break;
        }
        case "COMMIT": {
          m((M) => (oe(M), _(M), M));
          break;
        }
      }
    },
    [G, se, _, oe]
  ), b = C.useCallback(
    () => at(Qt(f)),
    [f]
  ), I = C.useCallback(
    (z) => {
      if (u.current === "endUser")
        return !1;
      try {
        const J = vp(JSON.parse(z));
        return J ? (c.current = at(J), G(J, !0), A([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [G]
  );
  C.useEffect(() => {
    t === "admin" && n && (c.current = at(n)), t === "endUser" && r && (c.current = at(r));
  }, [n, r, t]);
  const W = C.useMemo(() => {
    const z = t === "endUser" ? Md(f, y) : f;
    if (t !== "endUser" || !v || !z.pages)
      return z;
    const J = z.pages.find((we) => we.id === v);
    return J ? {
      ...z,
      activePageId: J.id,
      layers: J.layers,
      canvas: { ...z.canvas, width: J.width, height: J.height }
    } : z;
  }, [t, f, y, v]), pe = C.useMemo(
    () => ({
      mode: t,
      templateId: o,
      document: f,
      outputDocument: W,
      fieldValues: y,
      selection: p,
      viewport: h,
      canUndo: k.current > 0,
      canRedo: k.current < O.current.length - 1,
      dispatch: V,
      exportDocument: b,
      importDocumentJson: I
    }),
    [
      t,
      o,
      f,
      W,
      y,
      p,
      h,
      V,
      b,
      I,
      T
    ]
  );
  return /* @__PURE__ */ d(Dw.Provider, { value: pe, children: e });
}
function Qn() {
  const e = C.useContext(Dw);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function Ep() {
  return Qn().mode;
}
function cc() {
  return Qn().document;
}
function uc() {
  return Qn().outputDocument;
}
function uD() {
  return Qn().fieldValues;
}
function xw() {
  return Qn().document.layers;
}
function dc() {
  return Qn().selection;
}
function Bw() {
  return Qn().viewport;
}
function ks() {
  return Qn().dispatch;
}
function dD() {
  const e = Qn();
  return {
    mode: e.mode,
    canUndo: e.canUndo,
    canRedo: e.canRedo,
    exportDocument: e.exportDocument,
    importDocumentJson: e.importDocumentJson,
    dispatch: e.dispatch
  };
}
const fD = ["nw", "ne", "sw", "se"];
function pD() {
  const e = uc(), t = dc(), n = Bw(), r = ks(), o = Ep(), [i, s] = C.useState(null), [a, l] = C.useState(!1), c = C.useRef(n);
  c.current = n;
  const u = C.useRef(o);
  u.current = o;
  const f = C.useRef(null), m = C.useRef(null);
  m.current = i;
  const y = C.useRef(!1), g = (D) => {
    const L = c.current;
    Math.abs(L.zoom - D.zoom) < 1e-3 && Math.abs(L.panX - D.panX) < 0.5 && Math.abs(L.panY - D.panY) < 0.5 || r({ type: "VIEWPORT_SET", ...D });
  };
  C.useEffect(() => {
    const D = f.current;
    if (!D)
      return;
    const L = () => {
      if (m.current)
        return;
      const K = D.getBoundingClientRect();
      K.width < 8 || K.height < 8 || g(oh(e.canvas.width, e.canvas.height, K.width, K.height));
    };
    y.current = !0, L();
    const x = new ResizeObserver(L);
    return x.observe(D), () => x.disconnect();
  }, [e.canvas.width, e.canvas.height, e.activePageId, n.fitNonce, r]);
  const v = t.join(`
`);
  C.useEffect(() => {
    const D = y.current;
    if (y.current = !1, m.current || t.length === 0)
      return;
    const L = f.current;
    if (!L)
      return;
    const x = e.layers.filter(
      (se) => t.includes(se.id) && Ir(se, e.settings)
    );
    if (x.length === 0)
      return;
    const K = L.getBoundingClientRect();
    if (K.width < 8 || K.height < 8)
      return;
    const ve = D ? oh(e.canvas.width, e.canvas.height, K.width, K.height) : c.current;
    g(hN(mD(x), ve, K.width, K.height));
  }, [v]), C.useEffect(() => {
    const D = (x) => {
      if (x.code === "Space" && !(x.target instanceof HTMLInputElement) && !(x.target instanceof HTMLTextAreaElement) && (x.preventDefault(), l(!0)), u.current === "admin" && (x.key === "Delete" || x.key === "Backspace") && t.length > 0) {
        const K = x.target.tagName;
        if (K === "INPUT" || K === "TEXTAREA")
          return;
        x.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (x.ctrlKey || x.metaKey) && x.key.toLowerCase() === "z" && !x.shiftKey && (x.preventDefault(), r({ type: "UNDO" })), (x.ctrlKey || x.metaKey) && (x.key.toLowerCase() === "y" || x.key.toLowerCase() === "z" && x.shiftKey) && (x.preventDefault(), r({ type: "REDO" }));
    }, L = (x) => {
      x.code === "Space" && l(!1);
    };
    return window.addEventListener("keydown", D), window.addEventListener("keyup", L), () => {
      window.removeEventListener("keydown", D), window.removeEventListener("keyup", L);
    };
  }, [r, t.length]), C.useEffect(() => {
    if (!i)
      return;
    const D = (x) => {
      const K = c.current.zoom;
      if (i.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: i.origPanX + (x.clientX - i.startX),
          panY: i.origPanY + (x.clientY - i.startY)
        });
        return;
      }
      const { dx: ve, dy: se } = AN(
        x.clientX - i.startX,
        x.clientY - i.startY,
        K
      );
      if (i.kind === "move") {
        for (const b of i.ids) {
          const I = i.origins[b];
          I && r({
            type: "UPDATE_LAYER",
            id: b,
            patch: { x: I.x + ve, y: I.y + se },
            pushHistory: !1
          });
        }
        return;
      }
      let _ = i.origX, oe = i.origY, G = i.origW, V = i.origH;
      i.handle.includes("e") && (G = Math.max(er, i.origW + ve)), i.handle.includes("s") && (V = Math.max(er, i.origH + se)), i.handle.includes("w") && (G = Math.max(er, i.origW - ve), _ = i.origX + (i.origW - G)), i.handle.includes("n") && (V = Math.max(er, i.origH - se), oe = i.origY + (i.origH - V)), r({
        type: "UPDATE_LAYER",
        id: i.id,
        patch: { x: _, y: oe, width: G, height: V },
        pushHistory: !1
      });
    }, L = () => {
      (i.kind === "move" || i.kind === "resize") && r({ type: "COMMIT" }), s(null);
    };
    return window.addEventListener("pointermove", D), window.addEventListener("pointerup", L), () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", L);
    };
  }, [i, r]);
  const N = (D) => {
    D.preventDefault();
    const L = as(n.zoom * (D.deltaY < 0 ? 1.08 : 0.92), ss, dl);
    r({ type: "ZOOM_SET", zoom: L });
  }, p = (D) => {
    s({
      kind: "pan",
      startX: D.clientX,
      startY: D.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, A = (D) => {
    if (D.button === 1 || D.button === 0 && a) {
      D.preventDefault(), p(D);
      return;
    }
    D.button === 0 && r({ type: "UNSELECT_ALL" });
  }, h = (D, L) => {
    Cp(D, o, e.settings) && r({
      type: "SELECT",
      ids: [D.id],
      additive: L.shiftKey
    });
  }, P = (D) => o === "admin" ? !D.locked : qo(D), O = (D, L) => {
    if (!P(D) || a)
      return;
    const x = t.includes(D.id) ? t : [D.id];
    t.includes(D.id) || r({ type: "SELECT", ids: [D.id] });
    const K = {};
    for (const ve of x) {
      const se = e.layers.find((_) => _.id === ve);
      se && P(se) && (K[ve] = { x: se.x, y: se.y });
    }
    Object.keys(K).length !== 0 && s({
      kind: "move",
      ids: Object.keys(K),
      startX: L.clientX,
      startY: L.clientY,
      origins: K
    });
  }, k = (D, L, x) => {
    x.stopPropagation(), P(D) && (r({ type: "SELECT", ids: [D.id] }), s({
      kind: "resize",
      id: D.id,
      startX: x.clientX,
      startY: x.clientY,
      origX: D.x,
      origY: D.y,
      origW: D.width,
      origH: D.height,
      handle: L
    }));
  }, T = e.layers.filter(
    (D) => t.includes(D.id) && Ir(D, e.settings)
  ), S = T.length === 1 ? T[0] : null, H = S ? P(S) : !1;
  return /* @__PURE__ */ E(
    "div",
    {
      ref: f,
      className: `chd-viewport${a ? " chd-viewport--panning" : ""}`,
      onWheel: N,
      onPointerDown: A,
      children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: "chd-world",
            style: {
              transform: `translate(${n.panX}px, ${n.panY}px) scale(${n.zoom})`
            },
            children: /* @__PURE__ */ E(
              "div",
              {
                className: "chd-artboard",
                "data-chd-artboard": "true",
                style: {
                  width: e.canvas.width,
                  height: e.canvas.height,
                  background: e.canvas.background || "#eceae4"
                },
                onPointerDown: (D) => {
                  D.button !== 0 || a || (D.stopPropagation(), r({ type: "UNSELECT_ALL" }));
                },
                children: [
                  /* @__PURE__ */ d("div", { className: "chd-artboard-page" }),
                  e.layers.filter((D) => Ir(D, e.settings)).map((D) => /* @__PURE__ */ d(
                    wp,
                    {
                      layer: D,
                      selected: t.includes(D.id),
                      onSelect: (L) => h(D, L),
                      onMoveStart: (L) => O(D, L),
                      onUnlock: o === "admin" ? () => r({ type: "UPDATE_LAYER", id: D.id, patch: { locked: !1 } }) : void 0
                    },
                    D.id
                  )),
                  H && S ? /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: S.x,
                        top: S.y,
                        width: S.width,
                        height: S.height
                      },
                      children: fD.map((D) => /* @__PURE__ */ d(
                        "div",
                        {
                          className: `chd-handle chd-handle--${D}`,
                          onPointerDown: (L) => k(S, D, L)
                        },
                        D
                      ))
                    }
                  ) : S ? /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: S.x,
                        top: S.y,
                        width: S.width,
                        height: S.height
                      }
                    }
                  ) : null,
                  T.length > 1 ? T.map((D) => /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: D.x,
                        top: D.y,
                        width: D.width,
                        height: D.height
                      }
                    },
                    `sel-${D.id}`
                  )) : null
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ d("div", { className: "chd-viewport-hint", children: "Scroll to zoom · Space+drag to pan · Shift+click multi-select" })
      ]
    }
  );
}
function mD(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (const i of e)
    t = Math.min(t, i.x), n = Math.min(n, i.y), r = Math.max(r, i.x + i.width), o = Math.max(o, i.y + i.height);
  return { x: t, y: n, width: Math.max(1, r - t), height: Math.max(1, o - n) };
}
function AD({
  collapsed: e = !1,
  onToggleCollapse: t
}) {
  const n = xw(), r = cc(), o = dc(), i = ks(), s = Ep(), a = s === "admin", [l, c] = C.useState(null), [u, f] = C.useState(null), m = [...n].map((g, v) => ({ layer: g, index: v })).reverse().filter(
    ({ layer: g }) => Ir(g, r.settings) && (a || Cp(g, s, r.settings))
  ), y = (g, v) => {
    if (g === v)
      return;
    const N = n.findIndex((A) => A.id === g), p = n.findIndex((A) => A.id === v);
    N < 0 || p < 0 || i({ type: "REORDER", fromIndex: N, toIndex: p });
  };
  return /* @__PURE__ */ E(
    "aside",
    {
      className: `chd-panel chd-layers-panel${a ? " chd-layers-panel--admin" : ""}${e ? " chd-panel--collapsed" : ""}`,
      "aria-label": "Layers",
      children: [
        /* @__PURE__ */ E("div", { className: "chd-panel-header", children: [
          e ? /* @__PURE__ */ d("span", { className: "chd-panel-rail-label", children: a ? "Layers" : "Editable" }) : /* @__PURE__ */ d("span", { children: a ? "Layers" : "Editable layers" }),
          t ? /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "chd-panel-toggle",
              "aria-expanded": !e,
              "aria-label": e ? "Expand layers" : "Collapse layers",
              onClick: t,
              children: e ? "›" : "‹"
            }
          ) : null
        ] }),
        e ? null : /* @__PURE__ */ d("ul", { className: "chd-layer-list", children: m.length === 0 ? /* @__PURE__ */ d("li", { className: "chd-panel-empty", children: "No editable layers" }) : m.map(({ layer: g, index: v }) => {
          const N = o.includes(g.id);
          return /* @__PURE__ */ E(
            "li",
            {
              draggable: a,
              className: `chd-layer-list-item${N ? " chd-layer-list-item--selected" : ""}${l === g.id ? " chd-layer-list-item--dragging" : ""}${u === g.id ? " chd-layer-list-item--drag-over" : ""}`,
              onDragStart: (p) => {
                if (a) {
                  if (p.target.closest("button")) {
                    p.preventDefault();
                    return;
                  }
                  p.dataTransfer.effectAllowed = "move", p.dataTransfer.setData("text/plain", g.id), c(g.id);
                }
              },
              onDragOver: (p) => {
                a && (p.preventDefault(), p.dataTransfer.dropEffect = "move", u !== g.id && f(g.id));
              },
              onDragLeave: () => {
                f((p) => p === g.id ? null : p);
              },
              onDrop: (p) => {
                p.preventDefault();
                const A = p.dataTransfer.getData("text/plain");
                A && y(A, g.id), c(null), f(null);
              },
              onDragEnd: () => {
                c(null), f(null);
              },
              children: [
                a ? /* @__PURE__ */ d("span", { className: "chd-layer-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }) : null,
                /* @__PURE__ */ E(
                  "button",
                  {
                    type: "button",
                    className: "chd-layer-list-select",
                    onClick: (p) => i({
                      type: "SELECT",
                      ids: [g.id],
                      additive: p.shiftKey
                    }),
                    children: [
                      /* @__PURE__ */ d("span", { className: "chd-layer-list-type", children: g.type }),
                      /* @__PURE__ */ d("span", { className: "chd-layer-list-name", children: g.name })
                    ]
                  }
                ),
                a ? /* @__PURE__ */ E(Ze, { children: [
                  /* @__PURE__ */ d(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: g.visible ? "Hide" : "Show",
                      onClick: () => i({
                        type: "SET_VISIBILITY",
                        id: g.id,
                        visible: !g.visible
                      }),
                      children: g.visible ? "◉" : "○"
                    }
                  ),
                  /* @__PURE__ */ d(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: "Move up (forward)",
                      disabled: v >= n.length - 1,
                      onClick: () => i({ type: "REORDER", fromIndex: v, toIndex: v + 1 }),
                      children: "↑"
                    }
                  ),
                  /* @__PURE__ */ d(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: "Move down (back)",
                      disabled: v <= 0,
                      onClick: () => i({ type: "REORDER", fromIndex: v, toIndex: v - 1 }),
                      children: "↓"
                    }
                  )
                ] }) : null
              ]
            },
            g.id
          );
        }) })
      ]
    }
  );
}
const hD = 104, gD = 72;
function yD(e) {
  var t;
  return (t = e.pages) != null && t.length ? e.pages.map(
    (n) => n.id === e.activePageId ? {
      ...n,
      width: e.canvas.width,
      height: e.canvas.height,
      layers: e.layers
    } : n
  ) : [
    {
      id: "current",
      name: "Page 1",
      width: e.canvas.width,
      height: e.canvas.height,
      layers: e.layers
    }
  ];
}
function vD({
  page: e,
  selected: t,
  onSelect: n
}) {
  const r = uc(), o = Math.min(hD / e.width, gD / e.height), i = e.layers.filter((s) => Ir(s, r.settings));
  return /* @__PURE__ */ E(
    "button",
    {
      type: "button",
      className: `chd-page-thumb${t ? " chd-page-thumb--active" : ""}`,
      "aria-pressed": t,
      onClick: n,
      children: [
        /* @__PURE__ */ d(
          "span",
          {
            className: "chd-page-thumb-frame",
            style: { width: Math.round(e.width * o), height: Math.round(e.height * o) },
            children: /* @__PURE__ */ d(
              "span",
              {
                className: "chd-page-thumb-art",
                style: {
                  width: e.width,
                  height: e.height,
                  transform: `scale(${o})`,
                  background: r.canvas.background || "#ffffff"
                },
                children: i.map((s) => /* @__PURE__ */ d(
                  wp,
                  {
                    layer: s,
                    selected: !1,
                    preview: !0,
                    onSelect: () => {
                    },
                    onMoveStart: () => {
                    }
                  },
                  s.id
                ))
              }
            )
          }
        ),
        /* @__PURE__ */ d("span", { className: "chd-page-thumb-name", children: e.name })
      ]
    }
  );
}
function wD() {
  var o;
  const e = uc(), t = ks(), n = yD(e), r = e.activePageId || ((o = n[0]) == null ? void 0 : o.id);
  return /* @__PURE__ */ d("div", { className: "chd-page-strip", role: "tablist", "aria-label": "Pages", children: n.map((i) => /* @__PURE__ */ d(
    vD,
    {
      page: i,
      selected: i.id === r,
      onSelect: () => {
        i.id === r || i.id === "current" || t({ type: "SET_TEMPLATE_PAGE", pageId: i.id });
      }
    },
    i.id
  )) });
}
function Ow({
  collectionId: e,
  aspectRatio: t,
  triggerLabel: n = "Choose image",
  compact: r = !1,
  overlay: o = !1,
  allowUrl: i = !0,
  disabled: s = !1,
  onSelect: a,
  onUrlSelect: l
}) {
  const [c, u] = C.useState(!1), [f, m] = C.useState("content-hub"), [y, g] = C.useState(""), [v, N] = C.useState(""), [p, A] = C.useState(""), [h, P] = C.useState([]), [O, k] = C.useState(!1), [T, S] = C.useState(null);
  C.useEffect(() => {
    const x = window.setTimeout(() => N(y), 250);
    return () => window.clearTimeout(x);
  }, [y]), C.useEffect(() => {
    c && m("content-hub");
  }, [c]), C.useEffect(() => {
    if (!c || f !== "content-hub")
      return;
    let x = !1;
    return k(!0), S(null), fe.searchAssets({ collectionId: e, query: v }).then((K) => {
      x || P(K);
    }).catch((K) => {
      x || (P([]), S(K instanceof Error ? K.message : "Could not search Content Hub assets."));
    }).finally(() => {
      x || k(!1);
    }), () => {
      x = !0;
    };
  }, [c, f, e, v]);
  const H = () => {
    u(!1), A("");
  }, D = () => {
    const x = p.trim();
    x && (l == null || l(x), a({
      id: "",
      name: "Image URL",
      thumbnailUrl: x,
      previewUrl: x
    }), H());
  }, L = c ? /* @__PURE__ */ E("div", { className: `asset-picker-panel${o ? " asset-picker-panel-overlay" : ""}`, children: [
    /* @__PURE__ */ E("div", { className: "asset-picker-panel-header", children: [
      /* @__PURE__ */ d("strong", { children: "Approved assets" }),
      /* @__PURE__ */ d("button", { type: "button", className: "asset-picker-close", onClick: H, "aria-label": "Close asset picker", children: "Close" })
    ] }),
    i && /* @__PURE__ */ E("div", { className: "asset-picker-mode-tabs", children: [
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: `asset-picker-mode-tab${f === "content-hub" ? " asset-picker-mode-tab-active" : ""}`,
          onClick: () => m("content-hub"),
          children: "Content Hub"
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: `asset-picker-mode-tab${f === "url" ? " asset-picker-mode-tab-active" : ""}`,
          onClick: () => m("url"),
          children: "Image URL"
        }
      )
    ] }),
    f === "content-hub" && /* @__PURE__ */ E(Ze, { children: [
      /* @__PURE__ */ d(
        "input",
        {
          className: "asset-picker-search",
          placeholder: e ? "Search approved assets" : "Search approved Content Hub assets",
          value: y,
          onChange: (x) => g(x.target.value),
          autoFocus: !0
        }
      ),
      e ? /* @__PURE__ */ E("div", { className: "asset-picker-hint", children: [
        "Collection ",
        e
      ] }) : /* @__PURE__ */ d("div", { className: "asset-picker-hint", children: "Searching approved assets via Content Hub SearchConfiguration" }),
      t && /* @__PURE__ */ E("div", { className: "asset-picker-hint", children: [
        "Recommended aspect ratio: ",
        t
      ] }),
      O && /* @__PURE__ */ d("div", { className: "asset-picker-loading", children: "Searching..." }),
      T && /* @__PURE__ */ d("div", { className: "asset-picker-error", children: T }),
      /* @__PURE__ */ E("div", { className: "asset-picker-grid", children: [
        h.map((x) => /* @__PURE__ */ E(
          "button",
          {
            type: "button",
            className: "asset-picker-thumb",
            onClick: () => {
              a(x), H();
            },
            children: [
              /* @__PURE__ */ d("img", { src: x.thumbnailUrl, alt: x.name }),
              /* @__PURE__ */ d("span", { children: x.name })
            ]
          },
          x.id || x.thumbnailUrl
        )),
        !O && !T && h.length === 0 && /* @__PURE__ */ d("div", { className: "asset-picker-empty", children: i ? "No assets found. Try Image URL instead." : "No assets found. Try a different search." })
      ] })
    ] }),
    f === "url" && i && /* @__PURE__ */ E("div", { className: "asset-picker-url-form", children: [
      /* @__PURE__ */ E("label", { children: [
        "Image URL",
        /* @__PURE__ */ d(
          "input",
          {
            className: "asset-picker-search",
            placeholder: "https://...",
            value: p,
            onChange: (x) => A(x.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ d("button", { type: "button", className: "asset-picker-url-apply", onClick: D, disabled: !p.trim(), children: "Use image URL" })
    ] })
  ] }) : null;
  return /* @__PURE__ */ E("div", { className: `asset-picker${r ? " asset-picker-compact" : ""}`, children: [
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "asset-picker-trigger",
        disabled: s,
        onClick: () => u((x) => !x),
        children: n
      }
    ),
    c && o ? /* @__PURE__ */ E("div", { className: "asset-picker-modal", role: "dialog", "aria-modal": "true", "aria-label": "Approved assets", children: [
      /* @__PURE__ */ d("button", { type: "button", className: "asset-picker-backdrop", "aria-label": "Close asset picker", onClick: H }),
      L
    ] }) : L
  ] });
}
function ro({
  label: e,
  value: t,
  onChange: n,
  disabled: r
}) {
  return /* @__PURE__ */ E("label", { className: "chd-field", children: [
    /* @__PURE__ */ d("span", { children: e }),
    /* @__PURE__ */ d(
      "input",
      {
        type: "number",
        disabled: r,
        value: Number.isFinite(t) ? t : 0,
        onChange: (o) => n(Number(o.target.value))
      }
    )
  ] });
}
function qt({ title: e, children: t }) {
  return /* @__PURE__ */ E("section", { className: "chd-prop-section", children: [
    /* @__PURE__ */ d("h3", { className: "chd-prop-section-title", children: e }),
    t
  ] });
}
function CD({
  collapsed: e = !1,
  onToggleCollapse: t
}) {
  var N;
  const n = xw(), r = uD(), o = dc(), i = ks(), s = Ep(), a = cc(), l = s === "admin", c = n.filter((p) => o.includes(p.id)), u = c.length === 1 ? c[0] : null, f = (p) => {
    u && i({ type: "UPDATE_LAYER", id: u.id, patch: p });
  }, m = u ? l ? !u.locked : qo(u) : !1, y = u ? l ? !u.locked : Es(u) : !1, g = (u == null ? void 0 : u.type) === "text" ? zN(a, u) : null, v = g != null && g.fieldId ? (N = a.fields) == null ? void 0 : N.find((p) => p.id === g.fieldId) : void 0;
  return /* @__PURE__ */ E(
    "aside",
    {
      className: `chd-panel chd-properties-panel${e ? " chd-panel--collapsed" : ""}`,
      "aria-label": "Properties",
      children: [
        /* @__PURE__ */ E("div", { className: "chd-panel-header", children: [
          e ? /* @__PURE__ */ d("span", { className: "chd-panel-rail-label", children: "Properties" }) : /* @__PURE__ */ d("span", { children: "Properties" }),
          t ? /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "chd-panel-toggle",
              "aria-expanded": !e,
              "aria-label": e ? "Expand properties" : "Collapse properties",
              onClick: t,
              children: e ? "‹" : "›"
            }
          ) : null
        ] }),
        e ? null : u ? /* @__PURE__ */ E("div", { className: "chd-properties-body", children: [
          /* @__PURE__ */ E(qt, { title: "Name", children: [
            /* @__PURE__ */ E("div", { className: l && u.type === "text" ? "chd-field-row" : void 0, children: [
              l ? /* @__PURE__ */ E("label", { className: "chd-field", children: [
                /* @__PURE__ */ d("span", { children: "Name" }),
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "text",
                    value: u.name,
                    onChange: (p) => f({ name: p.target.value })
                  }
                )
              ] }) : /* @__PURE__ */ E("div", { className: "chd-field", children: [
                /* @__PURE__ */ d("span", { children: "Layer" }),
                /* @__PURE__ */ d("strong", { children: u.name })
              ] }),
              l && u.type === "text" ? /* @__PURE__ */ d(
                ro,
                {
                  label: "Size",
                  value: u.fontSize ?? 16,
                  disabled: !y,
                  onChange: (p) => f({ fontSize: p })
                }
              ) : null
            ] }),
            l && u.type === "text" ? /* @__PURE__ */ E(Ze, { children: [
              /* @__PURE__ */ E("label", { className: "chd-field chd-field-checkbox", children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!u.dynamicSize,
                    onChange: (p) => f({ dynamicSize: p.target.checked })
                  }
                ),
                /* @__PURE__ */ d("span", { children: "Dynamic size" })
              ] }),
              /* @__PURE__ */ d("p", { className: "chd-field-hint", children: "Type grows and shrinks when this box is scaled." })
            ] }) : null,
            l ? /* @__PURE__ */ E("label", { className: "chd-field chd-field-checkbox", children: [
              /* @__PURE__ */ d(
                "input",
                {
                  type: "checkbox",
                  checked: !!u.locked,
                  onChange: (p) => f({ locked: p.target.checked })
                }
              ),
              /* @__PURE__ */ d("span", { children: "Locked" })
            ] }) : null
          ] }),
          /* @__PURE__ */ d(qt, { title: "Placement", children: /* @__PURE__ */ E("div", { className: "chd-field-row", children: [
            /* @__PURE__ */ d(
              ro,
              {
                label: "X",
                value: Math.round(u.x),
                disabled: !m,
                onChange: (p) => f({ x: p })
              }
            ),
            /* @__PURE__ */ d(
              ro,
              {
                label: "Y",
                value: Math.round(u.y),
                disabled: !m,
                onChange: (p) => f({ y: p })
              }
            )
          ] }) }),
          /* @__PURE__ */ d(qt, { title: "Dimensions", children: /* @__PURE__ */ E("div", { className: "chd-field-row", children: [
            /* @__PURE__ */ d(
              ro,
              {
                label: "W",
                value: Math.round(u.width),
                disabled: !m,
                onChange: (p) => f({ width: p })
              }
            ),
            /* @__PURE__ */ d(
              ro,
              {
                label: "H",
                value: Math.round(u.height),
                disabled: !m,
                onChange: (p) => f({ height: p })
              }
            )
          ] }) }),
          y && (u.type === "frame" || u.type === "rect" || u.type === "image") && /* @__PURE__ */ d(qt, { title: "Fill", children: /* @__PURE__ */ E("label", { className: "chd-field", children: [
            /* @__PURE__ */ d("span", { children: "Fill" }),
            /* @__PURE__ */ d(
              "input",
              {
                type: "color",
                value: u.fill && /^#/.test(u.fill) ? u.fill : "#888780",
                onChange: (p) => f({ fill: p.target.value })
              }
            )
          ] }) }),
          l && u.type === "text" && /* @__PURE__ */ E(qt, { title: "Text", children: [
            /* @__PURE__ */ E("label", { className: "chd-field", children: [
              /* @__PURE__ */ d("span", { children: "Text" }),
              /* @__PURE__ */ d(
                "textarea",
                {
                  rows: 4,
                  value: (g == null ? void 0 : g.text) || "",
                  onChange: (p) => i({
                    type: "UPDATE_LAYER",
                    id: (g == null ? void 0 : g.id) || u.id,
                    patch: { text: p.target.value }
                  })
                }
              )
            ] }),
            /* @__PURE__ */ E("label", { className: "chd-field chd-field-checkbox", children: [
              /* @__PURE__ */ d(
                "input",
                {
                  type: "checkbox",
                  checked: !!(g != null && g.flowOverflow),
                  onChange: (p) => i({
                    type: "UPDATE_LAYER",
                    id: (g == null ? void 0 : g.id) || u.id,
                    patch: { flowOverflow: p.target.checked }
                  })
                }
              ),
              /* @__PURE__ */ d("span", { children: "Continue on next page" })
            ] }),
            /* @__PURE__ */ d("p", { className: "chd-field-hint", children: u.continuesFrom ? "This frame continues the story from the previous page." : "Text that does not fit this box continues at the top of the next page." }),
            /* @__PURE__ */ E("label", { className: "chd-field", children: [
              /* @__PURE__ */ d("span", { children: "Color" }),
              /* @__PURE__ */ d(
                "input",
                {
                  type: "color",
                  value: u.color && /^#/.test(u.color) ? u.color : "#1a1a1a",
                  onChange: (p) => f({ color: p.target.value })
                }
              )
            ] })
          ] }),
          l && u.type === "text" && /* @__PURE__ */ d(qt, { title: "Magic string", children: u.continuesFrom ? /* @__PURE__ */ d("p", { className: "chd-field-hint", children: v ? `This frame continues ${wi(v)}.` : "This frame continues the story from the previous page." }) : /* @__PURE__ */ E(Ze, { children: [
            /* @__PURE__ */ E("label", { className: "chd-field", children: [
              /* @__PURE__ */ d("span", { children: "Field" }),
              /* @__PURE__ */ E(
                "select",
                {
                  value: (g == null ? void 0 : g.fieldId) || "",
                  onChange: (p) => i({
                    type: "SET_LAYER_FIELD",
                    layerId: (g == null ? void 0 : g.id) || u.id,
                    fieldId: p.target.value || null
                  }),
                  children: [
                    /* @__PURE__ */ d("option", { value: "", children: "None" }),
                    (a.fields ?? []).map((p) => /* @__PURE__ */ E("option", { value: p.id, children: [
                      p.label,
                      " (",
                      wi(p),
                      ")"
                    ] }, p.id))
                  ]
                }
              )
            ] }),
            v ? /* @__PURE__ */ E(Ze, { children: [
              /* @__PURE__ */ E("label", { className: "chd-field", children: [
                /* @__PURE__ */ d("span", { children: "Label" }),
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "text",
                    value: v.label,
                    onChange: (p) => i({
                      type: "SET_FIELD_LABEL",
                      fieldId: v.id,
                      label: p.target.value
                    })
                  }
                )
              ] }),
              /* @__PURE__ */ E("label", { className: "chd-field", children: [
                /* @__PURE__ */ d("span", { children: "Magic string" }),
                /* @__PURE__ */ d("input", { type: "text", readOnly: !0, value: wi(v) })
              ] })
            ] }) : /* @__PURE__ */ d("p", { className: "chd-field-hint", children: "Use Add magic strings to create a field. The sample copy stays on the page." })
          ] }) }),
          !l && y && u.type === "text" && v && /* @__PURE__ */ E(qt, { title: "Text", children: [
            /* @__PURE__ */ E("label", { className: "chd-field", children: [
              /* @__PURE__ */ d("span", { children: v.label }),
              /* @__PURE__ */ d(
                "textarea",
                {
                  rows: 4,
                  value: r[v.id] ?? "",
                  placeholder: (g == null ? void 0 : g.text) || "",
                  onChange: (p) => i({
                    type: "SET_FIELD_VALUE",
                    fieldId: v.id,
                    value: p.target.value
                  })
                }
              )
            ] }),
            /* @__PURE__ */ E("p", { className: "chd-field-hint", children: [
              wi(v),
              ". Leave this empty to keep the sample copy."
            ] }),
            /* @__PURE__ */ E("label", { className: "chd-field", children: [
              /* @__PURE__ */ d("span", { children: "Color" }),
              /* @__PURE__ */ d(
                "input",
                {
                  type: "color",
                  value: u.color && /^#/.test(u.color) ? u.color : "#1a1a1a",
                  onChange: (p) => f({ color: p.target.value })
                }
              )
            ] })
          ] }),
          !l && y && u.type === "text" && !v && /* @__PURE__ */ E(qt, { title: "Text", children: [
            /* @__PURE__ */ E("label", { className: "chd-field", children: [
              /* @__PURE__ */ d("span", { children: "Text" }),
              /* @__PURE__ */ d(
                "textarea",
                {
                  rows: 4,
                  value: (g == null ? void 0 : g.text) || "",
                  onChange: (p) => i({
                    type: "UPDATE_LAYER",
                    id: (g == null ? void 0 : g.id) || u.id,
                    patch: { text: p.target.value }
                  })
                }
              )
            ] }),
            /* @__PURE__ */ E("label", { className: "chd-field", children: [
              /* @__PURE__ */ d("span", { children: "Color" }),
              /* @__PURE__ */ d(
                "input",
                {
                  type: "color",
                  value: u.color && /^#/.test(u.color) ? u.color : "#1a1a1a",
                  onChange: (p) => f({ color: p.target.value })
                }
              )
            ] })
          ] }),
          y && u.type === "image" && /* @__PURE__ */ E(qt, { title: "Image", children: [
            /* @__PURE__ */ E("div", { className: "chd-image-source", children: [
              /* @__PURE__ */ d("span", { children: "Image" }),
              /* @__PURE__ */ d(
                Ow,
                {
                  overlay: !0,
                  compact: !0,
                  triggerLabel: u.src ? "Choose from Content Hub" : "Choose image",
                  onSelect: (p) => {
                    const A = p.previewUrl || p.thumbnailUrl;
                    A && f({ src: A });
                  }
                }
              )
            ] }),
            /* @__PURE__ */ E("label", { className: "chd-field", children: [
              /* @__PURE__ */ d("span", { children: "Image URL" }),
              /* @__PURE__ */ d(
                "input",
                {
                  type: "url",
                  placeholder: "https://…",
                  value: u.src || "",
                  onChange: (p) => f({ src: p.target.value })
                }
              )
            ] }),
            /* @__PURE__ */ E("label", { className: "chd-field", children: [
              /* @__PURE__ */ d("span", { children: "Fit" }),
              /* @__PURE__ */ E(
                "select",
                {
                  value: u.objectFit || "cover",
                  onChange: (p) => f({ objectFit: p.target.value }),
                  children: [
                    /* @__PURE__ */ d("option", { value: "cover", children: "Cover — fill page, keep photo ratio" }),
                    /* @__PURE__ */ d("option", { value: "contain", children: "Contain — whole photo, may letterbox" })
                  ]
                }
              )
            ] })
          ] }),
          l ? /* @__PURE__ */ E(Ze, { children: [
            /* @__PURE__ */ E(qt, { title: "Page", children: [
              /* @__PURE__ */ E("div", { className: "chd-field chd-pin-field", children: [
                /* @__PURE__ */ d("span", { children: "Pin to page" }),
                /* @__PURE__ */ d("div", { className: "chd-pin-grid", children: ["pinTop", "pinLeft", "pinRight", "pinBottom"].map((p) => {
                  const A = {
                    pinTop: "Top",
                    pinLeft: "Left",
                    pinRight: "Right",
                    pinBottom: "Bottom"
                  };
                  return /* @__PURE__ */ E("label", { className: "chd-field-checkbox", children: [
                    /* @__PURE__ */ d(
                      "input",
                      {
                        type: "checkbox",
                        checked: u[p] === !0,
                        onChange: (h) => f(
                          qN(
                            u,
                            p,
                            h.target.checked,
                            a.canvas.width,
                            a.canvas.height
                          )
                        )
                      }
                    ),
                    /* @__PURE__ */ d("span", { children: A[p] })
                  ] }, p);
                }) }),
                /* @__PURE__ */ d("p", { className: "chd-field-hint", children: "Pinning a side moves this block to that edge using the margin. Pin left and right together to stretch width; pin top and bottom to stretch height." })
              ] }),
              /* @__PURE__ */ E("div", { className: "chd-field", children: [
                /* @__PURE__ */ d("span", { children: "Margins" }),
                /* @__PURE__ */ d("div", { className: "chd-pin-grid", children: [
                  ["marginTop", "Top"],
                  ["marginLeft", "Left"],
                  ["marginRight", "Right"],
                  ["marginBottom", "Bottom"]
                ].map(([p, A]) => /* @__PURE__ */ d(
                  ro,
                  {
                    label: A,
                    value: Math.round(typeof u[p] == "number" ? u[p] : 0),
                    onChange: (h) => f(
                      _N(
                        u,
                        p,
                        h,
                        a.canvas.width,
                        a.canvas.height
                      )
                    )
                  },
                  p
                )) }),
                /* @__PURE__ */ d("p", { className: "chd-field-hint", children: "Margins are stored per page size. Change page, then adjust; use Push to all pages to copy this layout to every preset." })
              ] }),
              /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  className: "chd-btn",
                  onClick: () => f(Pw(u, a.canvas.width, a.canvas.height)),
                  children: "Pin in place"
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  className: "chd-btn",
                  onClick: () => i({ type: "PUSH_LAYER_TO_ALL_PAGES", id: u.id }),
                  children: "Push to all pages"
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  className: "chd-btn",
                  onClick: () => f(Sw(u, a.canvas.width, a.canvas.height)),
                  children: "Fill page"
                }
              )
            ] }),
            /* @__PURE__ */ E(qt, { title: "End user", children: [
              /* @__PURE__ */ E("label", { className: "chd-field chd-field-checkbox", children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!u.allowTransform,
                    onChange: (p) => f({ allowTransform: p.target.checked })
                  }
                ),
                /* @__PURE__ */ d("span", { children: "Allow transform (end user)" })
              ] }),
              /* @__PURE__ */ E("label", { className: "chd-field chd-field-checkbox", children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "checkbox",
                    checked: kw(u),
                    onChange: (p) => f({ editableContent: p.target.checked })
                  }
                ),
                /* @__PURE__ */ d("span", { children: "Editable content (end user)" })
              ] })
            ] })
          ] }) : null
        ] }) : /* @__PURE__ */ d("p", { className: "chd-panel-empty", children: c.length > 1 ? `${c.length} layers selected` : "Select a layer" })
      ]
    }
  );
}
const TD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAFoCAYAAADJgokTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAJa/SURBVHhe7f0HtFVVlr4Pd4XRXVXdNSr+a1QCVECRVCgIiqAICkpUEAoQBQEFQUQMCIgIIogJFbXMCCigoCiCBANBJVggjSBFjoIEkQxW/7q6v2+8lrN6nln7XC7cvfbaa5/3GeOOs88+5549V17zXelf/oUQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQgqZ06dLfLVWq1HeK+sN37P8RQgghJD/Shtr7JB7YPyGEEEL+5V/+pXLlyj9v0KBB5Xbt2l1yww03tLnllluuHTJkSJ8HH3zwrj/96U/3P//884+++OKLj7/00ktPv/baa+OmT58+edq0aZOK+sN33nzzzQmTJk0aM378+GfHjh375LPPPjvyscceG4rfHThw4I19+vTp2KlTp6bNmjWrde6555Y59dRT/9XaRsjxKFeu3A/PP//8spdffnnt6667ruVtt93WZfDgwTffd999/UaOHDl41KhRw5544on78Pfoo4/e89BDDw0aOnTobQMGDOjRq1evq6655prGjRs3rnH22Wf/xv42SSeVKlX6GeqMyy67rHqbNm0u6ty5c4ubb775GtQr99577+3Dhw+/45FHHhny5JNPjkC6P/7448Pxive4lvfyGe7jD/kD+Qa/gd/q3bv31V26dLn8j3/8Y/1LL730rFq1apVGfWntIaQ4nHPOOb9HXdOtW7crUU8NGzasL/LfCy+88BjaySlTpryMtvOtt9569fXXX38J90aPHj0K7fD9998/oH///t1RZ11xxRV1ateufZr9/ULmtNNO+7cLLrjg9JYtW9ZFHCGuEGeIO8Qh4hJxirhFHyUqfvv169ftxhtvbI8+yXnnnXfq73//e/sYQgghJDyqV6/+WzhJcIzgnC9YsGDOp59+umTNmjUrd+zYse3gwYP7jx07dvT/55i//vWvXx85cuTwl19+uXvLli0b8PxPPvlk0bvvvjsNdg0aNOgmdOzh3NkwkMIGnTx01J555pmH3n///beXLVu2+C9/+cun27Zt27Rv3769yFc2v1n+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", rn = 96 / 72, tr = "Could not read this IDML file.", kp = /* @__PURE__ */ new Set(["TextFrame", "Rectangle", "Oval", "Polygon", "Group"]), Iw = /* @__PURE__ */ new Set(["Image", "EPS", "PDF", "WMF", "PICT", "SVG"]), Na = { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 };
async function ED(e) {
  const t = await QD(e), n = pi(t, "designmap.xml");
  if (!n)
    throw new Error(tr);
  const r = la(n, "Spread"), o = la(n, "MasterSpread"), i = la(n, "Story"), s = la(n, "Graphic");
  if (r.length === 0)
    throw new Error(tr);
  const a = /* @__PURE__ */ new Map();
  ID(a);
  for (const v of s) {
    const N = pi(t, v);
    N && fh(N, a);
  }
  fh(n, a);
  const l = /* @__PURE__ */ new Map();
  for (const v of i) {
    const N = pi(t, v);
    if (N)
      for (const p of Yr(N, "Story")) {
        const A = p.getAttribute("Self");
        A && l.set(A, p);
      }
  }
  const c = /* @__PURE__ */ new Map();
  for (const v of o) {
    const N = pi(t, v);
    if (!N)
      continue;
    const p = hu(N, "MasterSpread"), A = p == null ? void 0 : p.getAttribute("Self");
    A && c.set(A, N);
  }
  const u = kD(n), f = [];
  for (const v of r) {
    const N = pi(t, v);
    if (!N)
      continue;
    const p = hu(N, "Spread");
    if (!p)
      continue;
    const A = Qd(p, "Page");
    for (const h of A) {
      const P = dh(h), O = [], k = h.getAttribute("AppliedMaster");
      if (k && k !== "n") {
        const D = c.get(k), L = D ? hu(D, "MasterSpread") : void 0, x = L ? Qd(L, "Page")[0] : void 0;
        if (L && x) {
          const K = dh(x), ve = MD(h);
          uh(x, Na, K, l, a, ve, O, u);
        }
      }
      uh(h, Na, P, l, a, /* @__PURE__ */ new Set(), O, u);
      for (const D of jo(p))
        D.localName === "Page" || !kp.has(D.localName || "") || bp(D, Na, P, l, a, /* @__PURE__ */ new Set(), O, !0, u);
      const T = Math.max(1, Math.round(P.width * rn)), S = Math.max(1, Math.round(P.height * rn)), H = f.length + 1;
      f.push({
        id: h.getAttribute("Self") || `page-${H}`,
        name: bD(h, H),
        width: T,
        height: S,
        layers: O
      });
    }
  }
  if (f.length === 0)
    throw new Error(tr);
  const m = f[0], y = ON([...u.values()]), g = {
    version: 1,
    canvas: {
      width: m.width,
      height: m.height,
      background: "#ffffff",
      presetId: Vo(m.width, m.height)
    },
    layers: m.layers,
    pages: f,
    activePageId: m.id
  };
  return Object.keys(y).length > 0 && (g.settings = { brands: y }), { document: Nw(g), pageCount: f.length };
}
function kD(e) {
  var n;
  const t = /* @__PURE__ */ new Map();
  for (const r of Yr(e, "Layer")) {
    const o = r.getAttribute("Self"), i = (n = r.getAttribute("Name")) == null ? void 0 : n.trim();
    !o || !i || t.set(o, {
      id: o,
      name: i,
      visible: r.getAttribute("Visible") !== "false",
      ...SN(i)
    });
  }
  return t;
}
function bD(e, t) {
  var r;
  const n = (r = e.getAttribute("Name")) == null ? void 0 : r.trim();
  return n && !/^\d+$/.test(n) ? n : `Page ${t}`;
}
function uh(e, t, n, r, o, i, s, a) {
  for (const l of jo(e))
    kp.has(l.localName || "") && bp(l, t, n, r, o, i, s, !1, a);
}
function bp(e, t, n, r, o, i, s, a, l, c = "") {
  const u = e.getAttribute("Self");
  if (u && i.has(u) || e.getAttribute("Visible") === "false")
    return;
  const f = e.getAttribute("ItemLayer") || c, m = HD(t, zw(e.getAttribute("ItemTransform")));
  if (e.localName === "Group") {
    for (const v of jo(e))
      kp.has(v.localName || "") && bp(
        v,
        m,
        n,
        r,
        o,
        i,
        s,
        a,
        l,
        f
      );
    return;
  }
  const y = SD(e, m, n, r, o);
  if (!y || a && !PD(y, n))
    return;
  const g = f ? l.get(f) : void 0;
  g && PN(y, g), s.push(y);
}
function SD(e, t, n, r, o) {
  const i = DD(e);
  if (i.length < 2)
    return null;
  const s = ND(i, t, n);
  if (s.width < 1 || s.height < 1)
    return null;
  const a = xD(e);
  if (a) {
    const u = Yr(a, "Link")[0], f = (u == null ? void 0 : u.getAttribute("LinkResourceURI")) || "", m = Au("image", s);
    m.name = RD(f) || "Image", m.src = /^https?:\/\//i.test(f) ? f : "", m.objectFit = "contain";
    const y = Rd(e.getAttribute("FillColor"), e.getAttribute("FillTint"), o);
    return y && (m.fill = y), m;
  }
  if (e.localName === "TextFrame") {
    const u = r.get(e.getAttribute("ParentStory") || ""), f = u ? BD(u, o) : { text: "", fontSize: void 0, color: void 0 }, m = Au("text", s);
    return m.name = OD(f.text), m.text = f.text, m.fontSize = f.fontSize ? Math.max(1, Math.round(f.fontSize * rn)) : 16, m.color = f.color || "#000000", m;
  }
  const l = Au("rect", s);
  l.name = e.localName === "Oval" ? "Oval" : e.localName === "Polygon" ? "Polygon" : "Rectangle";
  const c = Rd(e.getAttribute("FillColor"), e.getAttribute("FillTint"), o);
  return l.fill = c || "transparent", l;
}
function Au(e, t) {
  return {
    id: jt(),
    type: e,
    name: e,
    x: Math.round(t.x * rn),
    y: Math.round(t.y * rn),
    width: Math.max(1, Math.round(t.width * rn)),
    height: Math.max(1, Math.round(t.height * rn)),
    rotation: Math.abs(t.rotation) > 0.5 ? Math.round(t.rotation * 10) / 10 : void 0,
    visible: !0,
    locked: !1,
    allowTransform: !1,
    editableContent: e === "text" || e === "image"
  };
}
function PD(e, t) {
  const n = e.x / rn, r = e.y / rn, o = e.width / rn, i = e.height / rn;
  return n + o > 0 && r + i > 0 && n < t.width && r < t.height;
}
function dh(e) {
  const [t, n, r, o] = Sp(e.getAttribute("GeometricBounds"), [0, 0, 792, 612]), i = zw(e.getAttribute("ItemTransform")), s = Fd(i, n, t);
  return {
    width: Math.abs(o - n),
    height: Math.abs(r - t),
    originX: s.x,
    originY: s.y
  };
}
function ND(e, t, n) {
  const r = e.map((g) => g.x), o = e.map((g) => g.y), i = Math.max(...r) - Math.min(...r), s = Math.max(...o) - Math.min(...o), a = Math.hypot(t.a, t.b) || 1, l = Math.hypot(t.c, t.d) || 1, c = Math.atan2(t.c, t.a) * 180 / Math.PI;
  if (!(Math.abs(ph(c)) > 0.5)) {
    const g = e.map((h) => Fd(t, h.x, h.y)), v = g.map((h) => h.x), N = g.map((h) => h.y), p = Math.min(...v), A = Math.min(...N);
    return {
      x: p - n.originX,
      y: A - n.originY,
      width: Math.max(...v) - p,
      height: Math.max(...N) - A,
      rotation: 0
    };
  }
  const f = Fd(
    t,
    (Math.min(...r) + Math.max(...r)) / 2,
    (Math.min(...o) + Math.max(...o)) / 2
  ), m = i * a, y = s * l;
  return {
    x: f.x - m / 2 - n.originX,
    y: f.y - y / 2 - n.originY,
    width: m,
    height: y,
    rotation: ph(c)
  };
}
function DD(e) {
  const t = [];
  for (const n of Yr(e, "PathPointType")) {
    if (n.parentElement && Iw.has(n.parentElement.localName || ""))
      continue;
    const [r, o] = Sp(n.getAttribute("Anchor"), []);
    r == null || o == null || t.push({ x: r, y: o });
  }
  return t;
}
function xD(e) {
  for (const t of e.getElementsByTagName("*"))
    if (Iw.has(t.localName || ""))
      return t;
}
function BD(e, t) {
  const n = Qd(e, "ParagraphStyleRange"), r = n.length > 0 ? n : [e];
  let o = "", i, s;
  return r.forEach((a, l) => {
    l > 0 && (o += `
`);
    for (const c of jo(a)) {
      if (c.localName === "Br") {
        o += `
`;
        continue;
      }
      if (c.localName === "CharacterStyleRange") {
        if (i == null) {
          const u = Number(c.getAttribute("PointSize"));
          Number.isFinite(u) && u > 0 && (i = u);
        }
        s || (s = Rd(c.getAttribute("FillColor"), c.getAttribute("FillTint"), t) || void 0);
        for (const u of jo(c))
          u.localName === "Br" && (o += `
`), u.localName === "Content" && (o += u.textContent || "");
      }
    }
  }), { text: o.replace(/\u2028/g, `
`), fontSize: i, color: s };
}
function OD(e) {
  const t = e.split(`
`).map((n) => n.trim()).find(Boolean);
  return t ? t.length > 40 ? `${t.slice(0, 40)}…` : t : "Text";
}
function Rd(e, t, n) {
  if (!e || e === "Swatch/None" || e === "Color/None")
    return null;
  const r = n.get(e);
  if (!r)
    return null;
  if (t == null || t.trim() === "" || t.trim() === "-1")
    return r;
  const o = Number(t);
  return !Number.isFinite(o) || o >= 100 ? r : LD(r, Math.max(0, o) / 100);
}
function fh(e, t) {
  for (const n of Yr(e, "Color")) {
    const r = n.getAttribute("Self"), o = zD(n.getAttribute("Space"), n.getAttribute("ColorValue"));
    r && o && t.set(r, o);
  }
}
function ID(e) {
  e.set("Color/Black", "#000000"), e.set("Color/Paper", "#ffffff"), e.set("Color/Registration", "#000000");
}
function zD(e, t) {
  const n = (t || "").trim().split(/\s+/).map(Number).filter((o) => Number.isFinite(o)), r = (e || "").toUpperCase();
  if (r === "RGB" && n.length >= 3)
    return Hd(n[0], n[1], n[2]);
  if ((r === "CMYK" || n.length >= 4) && n.length >= 4) {
    const o = n[0] / 100, i = n[1] / 100, s = n[2] / 100, a = n[3] / 100;
    return Hd(255 * (1 - o) * (1 - a), 255 * (1 - i) * (1 - a), 255 * (1 - s) * (1 - a));
  }
  return null;
}
function Hd(e, t, n) {
  const r = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function LD(e, t) {
  const n = Number.parseInt(e.slice(1, 3), 16), r = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return Hd(n * t + 255 * (1 - t), r * t + 255 * (1 - t), o * t + 255 * (1 - t));
}
function MD(e) {
  const t = (e.getAttribute("OverrideList") || "").trim().split(/\s+/).filter(Boolean), n = /* @__PURE__ */ new Set();
  for (let r = 0; r < t.length; r += 2)
    n.add(t[r]);
  return n;
}
function la(e, t) {
  return Yr(e, t).map((n) => n.getAttribute("src")).filter((n) => !!n);
}
function RD(e) {
  const t = e.split("?")[0];
  try {
    const r = decodeURIComponent(t).split(/[/\\]/).filter(Boolean);
    return r[r.length - 1] || "";
  } catch {
    const n = t.split(/[/\\]/).filter(Boolean);
    return n[n.length - 1] || "";
  }
}
function zw(e) {
  const t = Sp(e, []);
  return t.length < 6 ? Na : { a: t[0], b: t[1], c: t[2], d: t[3], tx: t[4], ty: t[5] };
}
function HD(e, t) {
  return {
    a: e.a * t.a + e.b * t.c,
    b: e.a * t.b + e.b * t.d,
    c: e.c * t.a + e.d * t.c,
    d: e.c * t.b + e.d * t.d,
    tx: e.a * t.tx + e.b * t.ty + e.tx,
    ty: e.c * t.tx + e.d * t.ty + e.ty
  };
}
function Fd(e, t, n) {
  return {
    x: e.a * t + e.b * n + e.tx,
    y: e.c * t + e.d * n + e.ty
  };
}
function ph(e) {
  let t = e % 360;
  return t > 180 && (t -= 360), t < -180 && (t += 360), t;
}
function Sp(e, t) {
  if (!e || !e.trim())
    return t;
  const n = e.trim().split(/\s+/).map(Number);
  return n.some((r) => !Number.isFinite(r)) ? t : n;
}
function hu(e, t) {
  const n = Yr(e, t);
  return n.find((r) => r.hasAttribute("Self")) || n[0];
}
function Yr(e, t) {
  const n = [], r = e.getElementsByTagName("*");
  for (let o = 0; o < r.length; o += 1) {
    const i = r[o];
    i.localName === t && n.push(i);
  }
  return n;
}
function jo(e) {
  return Array.from(e.children);
}
function Qd(e, t) {
  return jo(e).filter((n) => n.localName === t);
}
function pi(e, t) {
  const n = FD(e, t);
  if (!n)
    return null;
  const r = new TextDecoder("utf-8").decode(n).replace(/^\uFEFF/, ""), o = new DOMParser().parseFromString(r, "application/xml");
  return o.getElementsByTagName("parsererror").length > 0 ? null : o;
}
function FD(e, t) {
  const n = t.replace(/\\/g, "/").replace(/^\.\//, ""), r = e.get(n) || e.get(n.toLowerCase());
  if (r)
    return r;
  const o = `/${n}`.toLowerCase();
  for (const [i, s] of e) {
    const a = i.replace(/\\/g, "/");
    if (a.toLowerCase() === n.toLowerCase() || a.toLowerCase().endsWith(o))
      return s;
  }
}
async function QD(e) {
  const t = new DataView(e), n = new Uint8Array(e);
  if (n.length < 22 || t.getUint32(0, !0) !== 67324752)
    throw new Error(tr);
  let r = -1;
  const o = Math.max(0, n.length - 22 - 65535);
  for (let c = n.length - 22; c >= o; c -= 1)
    if (t.getUint32(c, !0) === 101010256) {
      r = c;
      break;
    }
  if (r < 0)
    throw new Error(tr);
  const i = t.getUint16(r + 10, !0), s = t.getUint32(r + 16, !0), a = /* @__PURE__ */ new Map();
  let l = s;
  for (let c = 0; c < i; c += 1) {
    if (l + 46 > n.length || t.getUint32(l, !0) !== 33639248)
      throw new Error(tr);
    const u = t.getUint16(l + 10, !0), f = t.getUint32(l + 20, !0), m = t.getUint16(l + 28, !0), y = t.getUint16(l + 30, !0), g = t.getUint16(l + 32, !0), v = t.getUint32(l + 42, !0), N = new TextDecoder("utf-8").decode(n.subarray(l + 46, l + 46 + m)).replace(/\\/g, "/");
    if (l += 46 + m + y + g, !N || N.endsWith("/"))
      continue;
    if (v + 30 > n.length)
      throw new Error(tr);
    const p = t.getUint16(v + 26, !0), A = t.getUint16(v + 28, !0), h = v + 30 + p + A, P = n.subarray(h, h + f);
    u === 0 ? a.set(N, P) : u === 8 && a.set(N, await UD(P));
  }
  return a;
}
async function UD(e) {
  if (typeof DecompressionStream != "function")
    throw new Error(tr);
  const t = new Blob([e]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(t).arrayBuffer());
}
const jD = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js", GD = "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
function Lw(e, t) {
  return new Promise((n, r) => {
    const o = window.document.querySelector(`script[data-${t}="true"]`);
    if (o) {
      o.addEventListener("load", () => n(), { once: !0 }), o.addEventListener("error", () => r(new Error(`Failed to load ${e}`)), { once: !0 });
      return;
    }
    const i = window.document.createElement("script");
    i.src = e, i.async = !0, i.setAttribute(`data-${t}`, "true"), i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${e}`)), window.document.head.appendChild(i);
  });
}
let gu = null, yu = null;
function KD() {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (gu || (gu = Lw(jD, "chd-html2canvas").then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), gu);
}
function YD() {
  var e;
  return (e = window.jspdf) != null && e.jsPDF ? Promise.resolve(window.jspdf.jsPDF) : (yu || (yu = Lw(GD, "chd-jspdf").then(() => {
    var n;
    const t = (n = window.jspdf) == null ? void 0 : n.jsPDF;
    if (!t)
      throw new Error("jsPDF did not register on window");
    return t;
  })), yu);
}
const mh = 96;
function ZD(e, t) {
  const n = URL.createObjectURL(e), r = window.document.createElement("a");
  r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
function XD(e) {
  const t = e.closest(".chd-root"), n = t == null ? void 0 : t.querySelector("[data-chd-artboard]");
  if (!n)
    throw new Error("Could not find the designer page to export.");
  return n;
}
async function Mw(e) {
  const t = await KD();
  e.classList.add("chd-artboard--capturing");
  try {
    const n = Math.max(1, Math.round(e.offsetWidth)), r = Math.max(1, Math.round(e.offsetHeight));
    return await t(e, {
      useCORS: !0,
      backgroundColor: null,
      width: n,
      height: r,
      windowWidth: n,
      windowHeight: r,
      scale: 2,
      logging: !1
    });
  } finally {
    e.classList.remove("chd-artboard--capturing");
  }
}
async function WD(e) {
  return Mw(XD(e));
}
function VD(e, t) {
  return {
    widthMm: e * 25.4 / mh,
    heightMm: t * 25.4 / mh
  };
}
async function Rw() {
  const e = await YD();
  let t = null;
  return {
    addPageImage(n, r, o) {
      const { widthMm: i, heightMm: s } = VD(r, o), a = i >= s ? "landscape" : "portrait";
      t ? t.addPage([i, s], a) : t = new e({
        orientation: a,
        unit: "mm",
        format: [i, s],
        compress: !0
      }), t.addImage(n.toDataURL("image/png"), "PNG", 0, 0, i, s);
    },
    save(n) {
      if (!t)
        throw new Error("There are no pages to download.");
      t.save(n);
    }
  };
}
async function JD(e, t) {
  const n = await new Promise((r, o) => {
    e.toBlob((i) => {
      i ? r(i) : o(new Error("Could not create PNG."));
    }, "image/png");
  });
  ZD(n, t);
}
async function qD(e, t, n, r) {
  const o = await Rw();
  o.addPageImage(e, n, r), o.save(t);
}
async function _D(e, t, n) {
  const r = await WD(e);
  if (t === "png") {
    await JD(r, "design.png");
    return;
  }
  await qD(r, "design.pdf", n.width, n.height);
}
function Ah(e) {
  var t;
  return (t = e.pages) != null && t.length ? e.pages : [
    {
      id: e.activePageId || "current",
      name: "Page 1",
      width: e.canvas.width,
      height: e.canvas.height,
      layers: e.layers
    }
  ];
}
function $D() {
  const e = cc(), t = e.fields ?? [], n = C.useRef(null), r = C.useRef(null), o = C.useRef(null), i = C.useRef([]), s = C.useRef([]), a = C.useRef(0), [l, c] = C.useState(!1), [u, f] = C.useState([]), [m, y] = C.useState(0), [g, v] = C.useState(null), [N, p] = C.useState(null), [A, h] = C.useState(null), [P, O] = C.useState(null);
  if (C.useEffect(() => {
    if (!g || !N)
      return;
    const S = a.current + 1;
    a.current = S;
    let H = !0;
    const D = () => {
      var ve;
      if (!H || a.current !== S)
        return;
      const L = g.row, x = g.page, K = i.current.length;
      if (x + 1 < s.current.length) {
        p(s.current[x + 1]), v({ row: L, page: x + 1 });
        return;
      }
      if (L + 1 < K) {
        const se = L + 1;
        s.current = Ah(Md(e, i.current[se] ?? {})), h(`Capturing row ${se + 1} of ${K}`), p(s.current[0] ?? null), v({ row: se, page: 0 });
        return;
      }
      try {
        (ve = o.current) == null || ve.save("batch.pdf"), h(`Downloaded ${K} output${K === 1 ? "" : "s"}.`);
      } catch (se) {
        O(se instanceof Error ? se.message : "Could not download the batch.");
      }
      o.current = null, p(null), v(null);
    };
    return (async () => {
      var L;
      if (await new Promise((x) => requestAnimationFrame(() => requestAnimationFrame(x))), !(!H || a.current !== S || !r.current))
        try {
          const x = await Mw(r.current);
          if (!H || a.current !== S)
            return;
          (L = o.current) == null || L.addPageImage(x, N.width, N.height), D();
        } catch (x) {
          if (!H || a.current !== S)
            return;
          O(x instanceof Error ? x.message : "Could not capture a batch page."), o.current = null, p(null), v(null);
        }
    })(), () => {
      H = !1;
    };
  }, [g, N, e]), t.length === 0)
    return null;
  const k = async (S) => {
    if (!S)
      return;
    const H = sD(await S.text(), t);
    i.current = H.rows, f(H.unmatched), y(H.rows.length), O(null);
    const D = `${H.rows.length} ${H.rows.length === 1 ? "row" : "rows"}`;
    h(H.rows.length === 0 ? "The CSV has no data rows." : `${D} ready.`);
  }, T = async () => {
    if (!(g || i.current.length === 0)) {
      O(null);
      try {
        if (o.current = await Rw(), s.current = Ah(Md(e, i.current[0] ?? {})), !s.current[0]) {
          O("This template has no pages to capture."), o.current = null;
          return;
        }
        h(`Capturing row 1 of ${i.current.length}`), p(s.current[0]), v({ row: 0, page: 0 });
      } catch (S) {
        O(S instanceof Error ? S.message : "Could not start the batch."), o.current = null;
      }
    }
  };
  return /* @__PURE__ */ E("div", { className: "chd-batch", children: [
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "chd-btn",
        "aria-expanded": l,
        disabled: !!g,
        onClick: () => c((S) => !S),
        children: g ? "Batching…" : "Batch"
      }
    ),
    l ? /* @__PURE__ */ E("div", { className: "chd-batch-menu", children: [
      /* @__PURE__ */ d("p", { className: "chd-field-hint", children: "Upload a CSV. The header row matches field labels or magic strings. Each following row is one output. An empty cell keeps the sample copy." }),
      /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => {
        var S;
        return (S = n.current) == null ? void 0 : S.click();
      }, children: "Choose CSV" }),
      /* @__PURE__ */ d(
        "input",
        {
          ref: n,
          type: "file",
          accept: ".csv,text/csv",
          className: "chd-file-input",
          onChange: (S) => {
            var H;
            k(((H = S.target.files) == null ? void 0 : H[0]) ?? null), S.target.value = "";
          }
        }
      ),
      m > 0 ? /* @__PURE__ */ d("p", { className: "chd-field-hint", children: m === 1 ? "1 row" : `${m} rows` }) : null,
      u.length > 0 ? /* @__PURE__ */ E("p", { className: "chd-field-hint", children: [
        "Ignored columns: ",
        u.join(", ")
      ] }) : null,
      A ? /* @__PURE__ */ d("p", { className: "chd-field-hint", children: A }) : null,
      P ? /* @__PURE__ */ d("p", { className: "chd-generate-error", children: P }) : null,
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn chd-btn--accent",
          disabled: !!g || m === 0,
          onClick: () => void T(),
          children: "Download PDF"
        }
      )
    ] }) : null,
    /* @__PURE__ */ d("div", { className: "chd-batch-stage", "aria-hidden": "true", children: N ? /* @__PURE__ */ d(
      "div",
      {
        ref: r,
        className: "chd-artboard",
        style: {
          width: N.width,
          height: N.height,
          background: e.canvas.background || "#ffffff"
        },
        children: N.layers.filter((S) => Ir(S, e.settings)).map((S) => /* @__PURE__ */ d(
          wp,
          {
            layer: S,
            selected: !1,
            preview: !0,
            onSelect: () => {
            },
            onMoveStart: () => {
            }
          },
          S.id
        ))
      }
    ) : null })
  ] });
}
const ex = [
  { format: "pdf", label: "PDF", hint: "Print-ready page" },
  { format: "png", label: "PNG", hint: "Image of the page" }
];
function tx() {
  const e = uc(), t = C.useRef(null), [n, r] = C.useState(!1), [o, i] = C.useState(!1), [s, a] = C.useState(null);
  C.useEffect(() => {
    if (!n)
      return;
    const c = (u) => {
      t.current && !t.current.contains(u.target) && r(!1);
    };
    return window.addEventListener("pointerdown", c), () => window.removeEventListener("pointerdown", c);
  }, [n]);
  const l = async (c) => {
    const u = t.current;
    if (!(!u || o)) {
      r(!1), i(!0), a(null);
      try {
        await _D(u, c, {
          width: e.canvas.width,
          height: e.canvas.height
        });
      } catch (f) {
        a(f instanceof Error ? f.message : "Generate failed.");
      } finally {
        i(!1);
      }
    }
  };
  return /* @__PURE__ */ E("div", { className: "chd-generate", ref: t, children: [
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "chd-btn chd-btn--accent",
        disabled: o,
        "aria-expanded": n,
        "aria-haspopup": "menu",
        onClick: () => r((c) => !c),
        children: o ? "Generating…" : "Generate"
      }
    ),
    n ? /* @__PURE__ */ d("div", { className: "chd-generate-menu", role: "menu", children: ex.map((c) => /* @__PURE__ */ E(
      "button",
      {
        type: "button",
        role: "menuitem",
        className: "chd-generate-option",
        disabled: o,
        onClick: () => void l(c.format),
        children: [
          /* @__PURE__ */ d("strong", { children: c.label }),
          /* @__PURE__ */ d("span", { children: c.hint })
        ]
      },
      c.format
    )) }) : null,
    s ? /* @__PURE__ */ d("span", { className: "chd-generate-error", children: s }) : null
  ] });
}
const nx = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function rx() {
  const e = ks(), t = dc(), n = Bw(), r = cc(), { mode: o, canUndo: i, canRedo: s, exportDocument: a, importDocumentJson: l } = dD(), c = C.useRef(null), u = C.useRef(null), f = o === "admin", m = Vo(
    r.canvas.width,
    r.canvas.height,
    r.canvas.presetId
  ), y = r.pages ?? [], g = BN(r), v = y.length > 1 || g.length > 0, N = () => {
    const k = a(), T = new Blob([JSON.stringify(k, null, 2)], { type: "application/json" }), S = URL.createObjectURL(T), H = window.document.createElement("a");
    H.href = S, H.download = "chdesigner-document.json", H.click(), URL.revokeObjectURL(S);
  }, p = async (k) => {
    if (!k)
      return;
    const T = await k.text();
    l(T) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  }, A = async (k) => {
    if (!k)
      return;
    const T = k.name.toLowerCase();
    if (T.endsWith(".indd")) {
      window.alert(
        "InDesign’s native .indd file can’t be read here. In InDesign, choose File → Save As and pick InDesign CS4 or later (IDML), then import that file."
      );
      return;
    }
    if (!T.endsWith(".idml")) {
      window.alert("Could not read this IDML file.");
      return;
    }
    try {
      const S = await ED(await k.arrayBuffer());
      l(JSON.stringify(S.document)) || window.alert("Could not read this IDML file.");
    } catch (S) {
      window.alert(S instanceof Error ? S.message : "Could not read this IDML file.");
    }
  }, h = (k) => {
    const T = Cd(k);
    T && e({
      type: "SET_CANVAS_SIZE",
      width: T.width,
      height: T.height,
      presetId: T.id
    });
  }, P = () => {
    const k = r.layers.filter((T) => t.includes(T.id));
    for (const T of k)
      e({
        type: "UPDATE_LAYER",
        id: T.id,
        patch: Pw(T, r.canvas.width, r.canvas.height)
      });
  }, O = () => {
    const k = r.layers.filter((T) => t.includes(T.id));
    for (const T of k)
      e({
        type: "UPDATE_LAYER",
        id: T.id,
        patch: Sw(T, r.canvas.width, r.canvas.height)
      });
  };
  return /* @__PURE__ */ E("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ E("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ d("span", { className: "chd-toolbar-logo-wrap", children: /* @__PURE__ */ d("img", { className: "chd-toolbar-logo", src: TD, alt: "EPAM" }) }),
      /* @__PURE__ */ d("span", { className: "chd-toolbar-mode", children: f ? "Admin" : "Edit" })
    ] }),
    v ? /* @__PURE__ */ E("div", { className: "chd-toolbar-group", children: [
      y.length > 1 ? /* @__PURE__ */ E("label", { className: "chd-toolbar-field", children: [
        /* @__PURE__ */ d("span", { children: "Page" }),
        /* @__PURE__ */ d(
          "select",
          {
            className: "chd-toolbar-select",
            value: r.activePageId || y[0].id,
            onChange: (k) => e({ type: "SET_TEMPLATE_PAGE", pageId: k.target.value }),
            children: y.map((k) => /* @__PURE__ */ d("option", { value: k.id, children: k.name }, k.id))
          }
        )
      ] }) : null,
      g.map((k) => {
        var T, S;
        return /* @__PURE__ */ E("label", { className: "chd-toolbar-field", children: [
          /* @__PURE__ */ d("span", { children: k.label }),
          /* @__PURE__ */ d(
            "select",
            {
              className: "chd-toolbar-select",
              value: ((S = (T = r.settings) == null ? void 0 : T.brands) == null ? void 0 : S[k.slot]) || k.options[0],
              onChange: (H) => e({
                type: "SET_BRAND_OPTION",
                slot: k.slot,
                option: H.target.value
              }),
              children: k.options.map((H) => /* @__PURE__ */ d("option", { value: H, children: H }, H))
            }
          )
        ] }, k.slot);
      })
    ] }) : null,
    f ? /* @__PURE__ */ d("div", { className: "chd-toolbar-group", children: nx.map((k) => /* @__PURE__ */ E(
      "button",
      {
        type: "button",
        className: "chd-btn",
        onClick: () => e({ type: "ADD_LAYER", layerType: k.type }),
        children: [
          "+ ",
          k.label
        ]
      },
      k.type
    )) }) : null,
    f ? /* @__PURE__ */ E("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ E("label", { className: "chd-toolbar-field", children: [
        /* @__PURE__ */ d("span", { children: y.length > 1 ? "Size" : "Page" }),
        /* @__PURE__ */ E(
          "select",
          {
            className: "chd-toolbar-select",
            value: m,
            onChange: (k) => h(k.target.value),
            children: [
              m === "custom" ? /* @__PURE__ */ d("option", { value: "custom", children: "Custom" }) : null,
              cb.map((k) => /* @__PURE__ */ d("optgroup", { label: k.label, children: ws.filter((T) => T.group === k.id).map((T) => /* @__PURE__ */ d("option", { value: T.id, children: T.label }, T.id)) }, k.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ E("span", { className: "chd-toolbar-size", children: [
        Math.round(r.canvas.width),
        " × ",
        Math.round(r.canvas.height)
      ] }),
      /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ADD_TEMPLATE_PAGE" }), children: "Add page" }),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: y.length < 2,
          onClick: () => e({ type: "REMOVE_TEMPLATE_PAGE" }),
          children: "Remove page"
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: P,
          children: "Pin to page"
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: O,
          children: "Fill page"
        }
      )
    ] }) : null,
    f ? /* @__PURE__ */ E("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "DELETE_LAYERS" }),
          children: "Delete"
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "BRING_FORWARD" }),
          children: "Forward"
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "SEND_BACKWARD" }),
          children: "Back"
        }
      )
    ] }) : null,
    /* @__PURE__ */ E("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !i,
          onClick: () => e({ type: "UNDO" }),
          children: "Undo"
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !s,
          onClick: () => e({ type: "REDO" }),
          children: "Redo"
        }
      )
    ] }),
    /* @__PURE__ */ E("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ d(tx, {}),
      /* @__PURE__ */ d($D, {}),
      /* @__PURE__ */ E(
        "button",
        {
          type: "button",
          className: "chd-btn",
          title: "Fit page",
          onClick: () => e({ type: "ZOOM_RESET" }),
          children: [
            Math.round(n.zoom * 100),
            "%"
          ]
        }
      ),
      f ? /* @__PURE__ */ E(Ze, { children: [
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: N, children: "Export JSON" }),
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => {
          var k;
          return (k = c.current) == null ? void 0 : k.click();
        }, children: "Import" }),
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => {
          var k;
          return (k = u.current) == null ? void 0 : k.click();
        }, children: "Import InDesign" }),
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ADD_MAGIC_STRINGS" }), children: "Add magic strings" }),
        /* @__PURE__ */ d(
          "input",
          {
            ref: c,
            type: "file",
            accept: "application/json,.json",
            className: "chd-file-input",
            onChange: (k) => {
              var T;
              p(((T = k.target.files) == null ? void 0 : T[0]) ?? null), k.target.value = "";
            }
          }
        ),
        /* @__PURE__ */ d(
          "input",
          {
            ref: u,
            type: "file",
            accept: ".idml,.indd",
            className: "chd-file-input",
            onChange: (k) => {
              var T;
              A(((T = k.target.files) == null ? void 0 : T[0]) ?? null), k.target.value = "";
            }
          }
        )
      ] }) : null
    ] })
  ] });
}
const hh = 36, ox = 180, ix = 480;
function sx(e) {
  return Math.min(ix, Math.max(ox, Math.round(e)));
}
function gh(e, t, n, r) {
  e.preventDefault();
  const o = e.currentTarget, i = e.clientX;
  o.classList.add("chd-panel-resizer--active");
  try {
    o.setPointerCapture(e.pointerId);
  } catch {
  }
  const s = (l) => {
    r(sx(t + n * (l.clientX - i)));
  }, a = () => {
    o.classList.remove("chd-panel-resizer--active"), o.removeEventListener("pointermove", s), o.removeEventListener("pointerup", a), o.removeEventListener("pointercancel", a);
  };
  o.addEventListener("pointermove", s), o.addEventListener("pointerup", a), o.addEventListener("pointercancel", a);
}
function Hw({
  mode: e = "admin",
  document: t,
  templateDocument: n,
  templateId: r,
  fieldValues: o,
  onDocumentChange: i,
  onInstanceChange: s,
  statusSlot: a,
  statusClassName: l,
  saveStatus: c
}) {
  const [u, f] = C.useState(!0), [m, y] = C.useState(!0), [g, v] = C.useState(220), [N, p] = C.useState(260);
  return /* @__PURE__ */ d(cD, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    initialFieldValues: o,
    onDocumentChange: i,
    onInstanceChange: s
  }, children: /* @__PURE__ */ E("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ d(rx, {}),
    a ? /* @__PURE__ */ d("div", { className: `chd-status-bar${l ? ` ${l}` : ""}`, children: a }) : null,
    /* @__PURE__ */ E(
      "div",
      {
        className: `chd-main${u ? "" : " chd-main--layers-collapsed"}${m ? "" : " chd-main--properties-collapsed"}`,
        style: {
          "--chd-layers-width": `${u ? g : hh}px`,
          "--chd-properties-width": `${m ? N : hh}px`
        },
        children: [
          /* @__PURE__ */ E("div", { className: "chd-panel-slot", children: [
            /* @__PURE__ */ d(AD, { collapsed: !u, onToggleCollapse: () => f((h) => !h) }),
            u ? /* @__PURE__ */ d(
              "div",
              {
                className: "chd-panel-resizer chd-panel-resizer--end",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": "Resize layers",
                onPointerDown: (h) => gh(h, g, 1, v)
              }
            ) : null
          ] }),
          /* @__PURE__ */ E("div", { className: "chd-stage", children: [
            /* @__PURE__ */ d(pD, {}),
            /* @__PURE__ */ d(wD, {})
          ] }),
          /* @__PURE__ */ E("div", { className: "chd-panel-slot", children: [
            /* @__PURE__ */ d(
              CD,
              {
                collapsed: !m,
                onToggleCollapse: () => y((h) => !h)
              }
            ),
            m ? /* @__PURE__ */ d(
              "div",
              {
                className: "chd-panel-resizer chd-panel-resizer--start",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": "Resize properties",
                onPointerDown: (h) => gh(h, N, -1, p)
              }
            ) : null
          ] })
        ]
      }
    ),
    c
  ] }) });
}
function ax(e) {
  var t;
  if (!((t = e.designerDocumentJson) != null && t.trim()))
    return null;
  try {
    return vp(JSON.parse(e.designerDocumentJson));
  } catch {
    return null;
  }
}
function lx(e, t) {
  var n;
  if ((n = t.designerInstanceJson) != null && n.trim())
    try {
      const r = jN(JSON.parse(t.designerInstanceJson));
      if (r)
        return r;
    } catch {
    }
  return UN(e.id);
}
function yh({
  template: e,
  marketingAsset: t,
  designerInstanceProperty: n,
  onSaved: r
}) {
  const o = C.useMemo(() => ax(e), [e]), [i, s] = C.useState(
    () => lx(e, t)
  ), a = C.useRef(i);
  a.current = i;
  const [l, c] = C.useState("idle"), [u, f] = C.useState(null), m = C.useMemo(() => o ? GN(o, i) : null, [o, i]), y = C.useCallback(async () => {
    c("saving"), f(null);
    try {
      const v = JSON.stringify(a.current);
      await fe.saveMarketingAssetDesignerInstance(
        t.id,
        v,
        n
      );
      const N = { ...t, designerInstanceJson: v };
      r == null || r(N), c("saved");
    } catch (v) {
      f(v instanceof Error ? v.message : "Failed to save designer instance."), c("error");
    }
  }, [n, t, r]);
  return !o || !m ? /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Template designer document is missing or invalid. Open Edit template and create a canvas template first." }) : /* @__PURE__ */ E("div", { className: "designer-asset-builder", children: [
    /* @__PURE__ */ E("div", { className: "designer-asset-builder-actions", children: [
      /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => void y(), children: "Save" }),
      /* @__PURE__ */ d(
        "span",
        {
          className: l === "error" ? "chd-status-bar chd-status-bar--error" : l === "saved" ? "chd-status-bar chd-status-bar--saved" : "chd-status-bar",
          children: l === "saving" ? "Saving…" : l === "saved" ? "Saved" : l === "error" ? u || "Save failed" : "Edit unlocked layers, then Save"
        }
      )
    ] }),
    /* @__PURE__ */ d(
      Hw,
      {
        mode: "endUser",
        document: m,
        templateDocument: o,
        templateId: e.id,
        fieldValues: i.fields,
        onInstanceChange: s
      },
      `${e.id}:${t.id}`
    )
  ] });
}
const cx = 900;
function ux(e) {
  var t;
  if ((t = e.designerDocumentJson) != null && t.trim())
    try {
      const n = vp(JSON.parse(e.designerDocumentJson));
      if (n)
        return n;
    } catch {
    }
  return yp();
}
function dx({
  template: e,
  designerDocumentProperty: t,
  onTemplateSaved: n
}) {
  const [r, o] = C.useState(() => ux(e)), [i, s] = C.useState("saved"), [a, l] = C.useState(null), c = C.useRef(r), u = C.useRef(null), f = C.useRef(0), m = C.useRef(!0);
  c.current = r;
  const y = C.useCallback(
    async (N) => {
      if (!Qo(e.id)) {
        s("error"), l(ur());
        return;
      }
      const p = ++f.current;
      s("saving"), l(null);
      try {
        const A = JSON.stringify(N);
        if (await fe.saveTemplateDesignerDocument(
          e.id,
          A,
          t,
          { width: N.canvas.width, height: N.canvas.height }
        ), p !== f.current)
          return;
        const h = {
          ...e,
          designerDocumentJson: A,
          canvasWidth: N.canvas.width,
          canvasHeight: N.canvas.height
        };
        n == null || n(h), s("saved");
      } catch (A) {
        if (p !== f.current)
          return;
        l(A instanceof Error ? A.message : "Failed to save designer template."), s("error");
      }
    },
    [t, n, e]
  );
  C.useEffect(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    return s("pending"), u.current != null && window.clearTimeout(u.current), u.current = window.setTimeout(() => {
      y(c.current);
    }, cx), () => {
      u.current != null && window.clearTimeout(u.current);
    };
  }, [r, y]);
  const g = i === "error" ? "chd-status-bar--error" : i === "saved" ? "chd-status-bar--saved" : void 0, v = i === "saving" ? "Saving template canvas…" : i === "pending" ? "Unsaved changes…" : i === "error" ? a || "Save failed" : "Saved to template";
  return Qo(e.id) ? /* @__PURE__ */ d(
    Hw,
    {
      mode: "admin",
      document: r,
      templateDocument: r,
      templateId: e.id,
      onDocumentChange: o,
      statusSlot: v,
      statusClassName: g
    },
    `${e.id}:${e.designerDocumentJson ? "doc" : "seed"}`
  ) : /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: ur() });
}
async function fx(e, t) {
  if (!Qo(e.id))
    throw new Error(ur());
  const n = yp();
  e.canvasWidth && (n.canvas.width = e.canvasWidth), e.canvasHeight && (n.canvas.height = e.canvasHeight);
  const r = JSON.stringify(n);
  return await fe.saveTemplateDesignerDocument(e.id, r, t, {
    width: n.canvas.width,
    height: n.canvas.height
  }), {
    ...e,
    designerDocumentJson: r,
    canvasWidth: n.canvas.width,
    canvasHeight: n.canvas.height
  };
}
function px(e) {
  var t;
  return !!((t = e == null ? void 0 : e.designerDocumentJson) != null && t.trim());
}
const mx = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
let vu = null;
function Ax(e) {
  return new Promise((t, n) => {
    const r = document.querySelector('script[data-html2canvas-loader="true"]');
    if (r) {
      r.addEventListener("load", () => t(), { once: !0 }), r.addEventListener("error", () => n(new Error("Failed to load html2canvas")), { once: !0 }), window.html2canvas && t();
      return;
    }
    const o = document.createElement("script");
    o.src = e, o.async = !0, o.dataset.html2canvasLoader = "true", o.onload = () => t(), o.onerror = () => n(new Error("Failed to load html2canvas")), document.head.appendChild(o);
  });
}
function hx(e = mx) {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (vu || (vu = Ax(e).then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), vu);
}
function gx({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  html2canvasCdnUrl: r,
  onSaved: o
}) {
  const [i, s] = C.useState(() => {
    const A = ll(t.zoneLayoutJson), h = cl(e, t.zoneValues, A.values);
    return is(e, h);
  }), [a, l] = C.useState(() => {
    const A = ll(t.zoneLayoutJson);
    return hw(e, A.layouts);
  }), [c, u] = C.useState(!1), [f, m] = C.useState(null), y = C.useRef(null), g = C.useMemo(
    () => Aw(e, a),
    [e, a]
  ), v = (A, h) => {
    s((P) => ({ ...P, [A]: h }));
  }, N = (A, h) => {
    l((P) => {
      const O = { ...P[A], ...h };
      for (const k of Object.keys(h))
        h[k] === void 0 && delete O[k];
      return { ...P, [A]: O };
    });
  }, p = async () => {
    u(!0), m(null);
    try {
      const A = g.zones.map((T) => {
        const S = i[T.id];
        return S ? { ...S, zoneKey: Kr(T, g.zones) } : null;
      }).filter((T) => !!(T != null && T.zoneKey)), h = Object.fromEntries(
        A.map((T) => [T.zoneKey, T])
      ), P = pw(a, h);
      await fe.updateMarketingAsset({
        ...t,
        zoneLayoutJson: P
      }), q("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const O = await fe.saveMarketingAssetZoneValues(
        t.id,
        A
      ), k = cl(e, O, h);
      if (s(is(e, k)), pp() && y.current) {
        const S = await (await hx(r))(y.current, {
          useCORS: !0,
          width: ip(e),
          height: Pv(e)
        }), H = ["image", "png"].join("/"), D = await new Promise(
          (L, x) => S.toBlob((K) => K ? L(K) : x(new Error("Canvas export failed")), H)
        );
        await fe.uploadRenderedOutput(
          t.id,
          D,
          `${t.assetName}.png`
        );
      } else
        ge(
          "rendered output upload",
          "Skipped PNG upload — not required for save on this Content Hub instance."
        );
      o == null || o({
        ...t,
        zoneValues: k,
        zoneLayoutJson: P
      });
    } catch (A) {
      m(A instanceof Error ? A.message : "Failed to save.");
    } finally {
      u(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ E("div", { className: "social-builder social-builder-override", children: [
    /* @__PURE__ */ E("div", { className: "override-banner", children: [
      "Raw HTML override active. Reason: ",
      t.overrideReasonMA
    ] }),
    /* @__PURE__ */ d("div", { dangerouslySetInnerHTML: { __html: t.rawHtmlOverrideContent ?? "" } })
  ] }) : /* @__PURE__ */ d("div", { className: "social-builder", children: /* @__PURE__ */ d(
    ul,
    {
      structureTitle: "Social structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ E("div", { className: "social-builder-structure", children: [
        /* @__PURE__ */ d(
          yw,
          {
            template: e,
            zoneLayouts: a,
            zoneValues: i,
            layoutMode: "canvas",
            onLayoutChange: N,
            onZoneValueChange: v
          }
        ),
        /* @__PURE__ */ E("div", { className: "social-builder-actions", children: [
          /* @__PURE__ */ d("button", { type: "button", className: "social-builder-save", onClick: p, disabled: c, children: "Save" }),
          /* @__PURE__ */ d(Jo, { active: c }),
          /* @__PURE__ */ d(
            vw,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (A) => {
                await fe.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: A,
                  rawHtmlOverrideContent: "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        f && /* @__PURE__ */ d("div", { className: "marketing-builder-error social-builder-error", children: f })
      ] }),
      preview: /* @__PURE__ */ d(
        gp,
        {
          ref: y,
          template: g,
          zoneValues: i,
          layoutMode: "canvas"
        }
      )
    }
  ) });
}
function ca({
  activeTab: e,
  zoneCount: t,
  templateName: n,
  onTabChange: r,
  showAssetTab: o = !0
}) {
  return /* @__PURE__ */ E("div", { className: "marketing-builder-toolbar marketing-builder-tab-bar", children: [
    /* @__PURE__ */ E("div", { className: "marketing-builder-toolbar-main", children: [
      /* @__PURE__ */ E("div", { className: "marketing-builder-tabs", role: "tablist", "aria-label": "Marketing builder mode", children: [
        o && /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": e === "asset",
            className: `marketing-builder-tab${e === "asset" ? " marketing-builder-tab-active" : ""}`,
            onClick: () => r("asset"),
            children: "Asset builder"
          }
        ),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": e === "template",
            className: `marketing-builder-tab${e === "template" ? " marketing-builder-tab-active" : ""}`,
            onClick: () => r("template"),
            children: "Edit template"
          }
        )
      ] }),
      n ? /* @__PURE__ */ d("span", { className: "marketing-builder-editing-template", title: n, children: n }) : null
    ] }),
    /* @__PURE__ */ E("span", { className: "marketing-builder-toolbar-meta", children: [
      t,
      " zone",
      t === 1 ? "" : "s"
    ] })
  ] });
}
function wu({
  brandKitId: e,
  currentTemplateId: t,
  marketingAssetId: n,
  onTemplateChange: r,
  refreshKey: o = 0
}) {
  var g;
  const [i, s] = C.useState([]), [a, l] = C.useState(!0), [c, u] = C.useState(!1), [f, m] = C.useState(null);
  C.useEffect(() => {
    let v = !1;
    async function N() {
      l(!0), m(null);
      try {
        const p = await fe.listTemplatesForBrandKit(e);
        if (v)
          return;
        const A = p.some((P) => P.id === t) ? p : [...p, await fe.getTemplate(t)], h = [...new Map(A.map((P) => [P.id, P])).values()];
        h.sort((P, O) => P.templateName.localeCompare(O.templateName)), s(h);
      } catch (p) {
        v || (m(p instanceof Error ? p.message : "Could not load templates."), s([]));
      } finally {
        v || l(!1);
      }
    }
    return N(), () => {
      v = !0;
    };
  }, [e, t, o]);
  const y = async (v) => {
    if (!(!v || v === t)) {
      u(!0), m(null);
      try {
        await fe.linkMarketingAssetToTemplate(n, v);
        const N = i.find((p) => p.id === v) ?? await fe.getTemplate(v);
        r(N);
      } catch (N) {
        m(N instanceof Error ? N.message : "Could not switch template.");
      } finally {
        u(!1);
      }
    }
  };
  return a ? /* @__PURE__ */ d("p", { className: "template-selector-status", children: "Loading templates..." }) : i.length <= 1 ? /* @__PURE__ */ E("div", { className: "template-selector", children: [
    /* @__PURE__ */ E("p", { className: "template-selector-status", children: [
      "Using ",
      /* @__PURE__ */ d("strong", { children: ((g = i[0]) == null ? void 0 : g.templateName) ?? "current template" }),
      i.length === 0 ? " (only template for this brand kit)" : "",
      ". Duplicate this template in Edit template to create another format."
    ] }),
    f && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: f })
  ] }) : /* @__PURE__ */ E("div", { className: "template-selector", children: [
    /* @__PURE__ */ E("label", { className: "template-selector-label", children: [
      "Template",
      /* @__PURE__ */ d(
        "select",
        {
          value: t,
          disabled: c,
          onChange: (v) => void y(v.target.value),
          children: i.map((v) => /* @__PURE__ */ E("option", { value: v.id, children: [
            v.templateName,
            " (",
            v.channelType,
            ")"
          ] }, v.id))
        }
      )
    ] }),
    /* @__PURE__ */ d("p", { className: "template-selector-hint", children: c ? "" : "Choose which template this marketing asset uses." }),
    /* @__PURE__ */ d(Jo, { active: c, className: "template-selector-saving" }),
    f && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: f })
  ] });
}
const yx = [
  "Text",
  "Heading",
  "Image",
  "CTA Button",
  "Logo",
  "Background Color",
  "Divider",
  "HTML"
];
function vx(e) {
  const t = e.trim();
  if (!t)
    return null;
  try {
    const n = new URL(t);
    if (!/figma\.com$/i.test(n.hostname) && !/\.figma\.com$/i.test(n.hostname))
      return null;
    const r = n.pathname.match(/\/(?:design|file|proto)\/([a-zA-Z0-9]+)/), o = r == null ? void 0 : r[1];
    if (!o)
      return null;
    const i = n.searchParams.get("node-id") ?? n.searchParams.get("node_id") ?? n.searchParams.get("nodeId");
    if (!(i != null && i.trim()))
      return null;
    const s = decodeURIComponent(i.trim()).replace(/-/g, ":");
    return { fileKey: o, nodeId: s };
  } catch {
    return null;
  }
}
function wx(e) {
  const t = e.trim().toLowerCase().replace(/[_-]+/g, " ");
  return {
    text: "Text",
    body: "Text",
    copy: "Text",
    heading: "Heading",
    headline: "Heading",
    title: "Heading",
    h1: "Heading",
    h2: "Heading",
    image: "Image",
    img: "Image",
    photo: "Image",
    hero: "Image",
    cta: "CTA Button",
    "cta button": "CTA Button",
    button: "CTA Button",
    logo: "Logo",
    background: "Background Color",
    "background color": "Background Color",
    bg: "Background Color",
    divider: "Divider",
    line: "Divider",
    html: "HTML"
  }[t] ?? yx.find((r) => r.toLowerCase() === t);
}
function Fw(e) {
  var l, c;
  const t = e.trim(), n = t.match(/zone\s*[:=]\s*([a-zA-Z0-9_-]+)/i), r = t.match(/type\s*[:=]\s*([a-zA-Z0-9 _-]+)/i), o = t.match(/label\s*[:=]\s*([^|]+)/i), i = (l = n == null ? void 0 : n[1]) == null ? void 0 : l.trim(), s = r != null && r[1] ? wx(r[1]) : void 0, a = ((c = o == null ? void 0 : o[1]) == null ? void 0 : c.trim()) || void 0;
  return { zoneKey: i, zoneType: s, zoneLabel: a };
}
function Cx(e, t) {
  return e.replace(/zone\s*[:=]\s*/gi, "").replace(/type\s*[:=]\s*[a-zA-Z0-9 _-]+/gi, "").replace(/label\s*[:=]\s*[^|]+/gi, "").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase() || t;
}
function vh(e) {
  return (e.fills ?? []).some(
    (t) => t.visible !== !1 && String(t.type ?? "").toUpperCase() === "IMAGE"
  );
}
function Qw(e) {
  var o, i;
  const t = Fw(e.name ?? "");
  if (t.zoneType)
    return t.zoneType;
  const n = (e.name ?? "").toLowerCase();
  if (/logo/.test(n))
    return "Logo";
  if (/cta|button/.test(n))
    return "CTA Button";
  if (/divider|separator|line/.test(n))
    return "Divider";
  if (/background|bg\b/.test(n))
    return "Background Color";
  if (/hero|image|photo|img/.test(n))
    return "Image";
  if (/heading|headline|title|h[1-6]\b/.test(n))
    return "Heading";
  const r = String(e.type ?? "").toUpperCase();
  if (r === "TEXT") {
    const s = ((o = e.style) == null ? void 0 : o.fontSize) ?? 0, a = Number(((i = e.style) == null ? void 0 : i.fontWeight) ?? 0);
    return s >= 28 || a >= 600 || /heading|headline|title/i.test(e.characters ?? "") ? "Heading" : "Text";
  }
  if (r === "LINE")
    return "Divider";
  if ((vh(e) || r === "RECTANGLE" || r === "ELLIPSE") && vh(e))
    return "Image";
  if (r === "COMPONENT" || r === "INSTANCE") {
    if (/button|cta/i.test(n))
      return "CTA Button";
    if (/logo/i.test(n))
      return "Logo";
  }
}
function Uw(e) {
  const t = e.name ?? "";
  return /zone\s*[:=]/i.test(t) || /type\s*[:=]/i.test(t);
}
function Tx(e) {
  const t = [], n = (r) => {
    Uw(r) && t.push(r);
    for (const o of r.children ?? [])
      n(o);
  };
  return n(e), t.length > 0 ? t : (e.children ?? []).filter((r) => Qw(r) != null);
}
function wo(e) {
  if (!(e == null || !Number.isFinite(e)))
    return Math.round(e);
}
function Ex(e, t, n, r) {
  const o = Fw(e.name ?? ""), i = o.zoneType ?? Qw(e) ?? "Text";
  let s = o.zoneKey || Cx(e.name ?? "", `zone_${t + 1}`);
  r.has(s) && (s = `${s}_${t + 1}`), r.add(s);
  const a = e.absoluteBoundingBox, l = (a == null ? void 0 : a.x) != null ? wo(a.x - n.x) : void 0, c = (a == null ? void 0 : a.y) != null ? wo(a.y - n.y) : void 0, u = {
    id: `temp-figma-${Date.now()}-${t}`,
    zoneKey: s,
    zoneLabel: o.zoneLabel || (e.name ?? "").trim() || s,
    zoneType: i,
    isLocked: i === "Logo",
    sortOrder: t,
    positionX: l,
    positionY: c,
    zoneWidth: wo(a == null ? void 0 : a.width),
    zoneHeight: wo(a == null ? void 0 : a.height)
  };
  if (i === "Heading" && (u.headingLevel = Hn), i === "Text" && typeof e.characters == "string" && e.characters.trim()) {
    const f = e.characters.trim().length;
    f > 0 && (u.maxCharacterCount = Math.max(40, Math.ceil(f * 1.25)));
  }
  return u;
}
function kx(e) {
  var c, u, f, m;
  const t = [], n = (e.name ?? "").trim() || "Figma frame", r = wo((c = e.absoluteBoundingBox) == null ? void 0 : c.width), o = wo((u = e.absoluteBoundingBox) == null ? void 0 : u.height), i = {
    x: ((f = e.absoluteBoundingBox) == null ? void 0 : f.x) ?? 0,
    y: ((m = e.absoluteBoundingBox) == null ? void 0 : m.y) ?? 0
  }, s = Tx(e);
  if (s.length === 0)
    return t.push(
      'No zone layers found. Name layers like "zone:headline | type:Heading" or place typed content as direct children of the frame.'
    ), { frameName: n, canvasWidth: r, canvasHeight: o, zones: [], warnings: t };
  s.some(Uw) || t.push(
    "No explicit zone: / type: names found — inferred zone types from layer names and Figma node types. Rename layers for stable imports."
  );
  const a = /* @__PURE__ */ new Set(), l = s.map((y, g) => Ex(y, g, i, a));
  return { frameName: n, canvasWidth: r, canvasHeight: o, zones: l, warnings: t };
}
function jw(e, t) {
  const n = t.replace(/-/g, ":");
  if ((e.id ?? "").replace(/-/g, ":") === n)
    return e;
  for (const r of e.children ?? []) {
    const o = jw(r, n);
    if (o)
      return o;
  }
  return null;
}
function bx(e, t) {
  if (e == null || typeof e != "object")
    return null;
  const n = e, r = n.nodes;
  if (r != null && typeof r == "object" && !Array.isArray(r)) {
    const o = r, i = t.replace(/-/g, ":"), s = o[i] ?? o[t] ?? o[i.replace(/:/g, "-")] ?? Object.values(o)[0];
    if (s != null && typeof s == "object") {
      const a = s.document;
      return a != null && typeof a == "object" ? a : s;
    }
  }
  if (n.document != null && typeof n.document == "object") {
    const o = n.document;
    return jw(o, t) ?? o;
  }
  return n.id || n.children || n.type ? n : null;
}
function wh(e, t) {
  return `${e.replace(/\s+/g, " ").trim() || "Figma template"} (${t})`;
}
async function Sx(e, t, n) {
  const r = {
    "Content-Type": "application/json"
  };
  t != null && t.trim() && (r.Authorization = `Bearer ${t.trim()}`);
  const o = await fetch(e, {
    method: "POST",
    headers: r,
    body: JSON.stringify({ figmaUrl: n })
  }), i = await o.json().catch(() => ({}));
  if (!o.ok)
    throw new Error(i.error || `Figma import failed (${o.status})`);
  return i;
}
function Px({
  template: e,
  figmaImportApiUrl: t = "/api/figma/import",
  figmaImportApiToken: n,
  onApplyToCurrent: r,
  onCreatedTemplate: o
}) {
  const [i, s] = C.useState(""), [a, l] = C.useState(null), [c, u] = C.useState(!1), [f, m] = C.useState(!1), [y, g] = C.useState(null), [v, N] = C.useState(null), [p, A] = C.useState(!1), [h, P] = C.useState(""), O = async () => {
    u(!0), g(null), N(null), l(null);
    try {
      const S = vx(i);
      if (!S)
        throw new Error(
          "Paste a full Figma URL that includes node-id (right-click frame → Copy link)."
        );
      const H = await Sx(t, n, i), D = bx(H, S.nodeId);
      if (!D)
        throw new Error("Could not find that frame/node in the Figma response.");
      const L = kx(D);
      l(L), P(wh(L.frameName, e.channelType)), L.zones.length === 0 ? g(L.warnings[0] || "No zones were mapped from this frame.") : N(`Mapped ${L.zones.length} zone(s) from “${L.frameName}”.`);
    } catch (S) {
      g(S instanceof Error ? S.message : "Figma preview failed.");
    } finally {
      u(!1);
    }
  }, k = () => {
    !a || a.zones.length === 0 || (r({
      zones: a.zones,
      canvasWidth: a.canvasWidth,
      canvasHeight: a.canvasHeight,
      frameName: a.frameName
    }), N(
      `Applied ${a.zones.length} zone(s) to “${e.templateName}”. Save/autosave will persist them.`
    ));
  }, T = async () => {
    if (!(!a || a.zones.length === 0)) {
      m(!0), g(null), N(null);
      try {
        const S = e.channelType, H = await fe.createTemplate({
          templateName: h.trim() || wh(a.frameName, S),
          channelType: S,
          formatPreset: e.formatPreset,
          canvasWidth: a.canvasWidth,
          canvasHeight: a.canvasHeight,
          brandKitId: e.brandKitId,
          zones: a.zones,
          allowedAssetIds: e.allowedAssetIds
        }, e.id);
        N(`Created template “${H.templateName}” (${H.id}).`), o == null || o(H);
      } catch (S) {
        g(
          S instanceof Error ? S.message : "Could not create template from Figma."
        );
      } finally {
        m(!1);
      }
    }
  };
  return /* @__PURE__ */ E("div", { className: "figma-import-panel", children: [
    /* @__PURE__ */ d("h4", { children: "Import from Figma" }),
    /* @__PURE__ */ E("p", { className: "figma-import-hint", children: [
      "Copy a frame link from Figma (must include ",
      /* @__PURE__ */ d("code", { children: "node-id" }),
      "). Name layers like",
      " ",
      /* @__PURE__ */ d("code", { children: "zone:headline | type:Heading" }),
      ", ",
      /* @__PURE__ */ d("code", { children: "zone:hero | type:Image" }),
      ",",
      " ",
      /* @__PURE__ */ d("code", { children: "zone:body | type:Text" }),
      "."
    ] }),
    /* @__PURE__ */ E("label", { children: [
      "Figma frame URL",
      /* @__PURE__ */ d(
        "input",
        {
          type: "text",
          value: i,
          onChange: (S) => s(S.target.value),
          placeholder: "https://www.figma.com/design/FILEKEY/Name?node-id=1-2"
        }
      )
    ] }),
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "figma-import-button",
        onClick: () => void O(),
        disabled: c || !i.trim(),
        children: "Preview zones"
      }
    ),
    /* @__PURE__ */ d(Jo, { active: c || f, className: "figma-import-saving" }),
    a && a.zones.length > 0 && /* @__PURE__ */ E("div", { className: "figma-import-preview", children: [
      /* @__PURE__ */ E("p", { className: "figma-import-preview-meta", children: [
        "Frame ",
        /* @__PURE__ */ d("strong", { children: a.frameName }),
        a.canvasWidth != null && a.canvasHeight != null ? ` · ${a.canvasWidth}×${a.canvasHeight}` : null
      ] }),
      /* @__PURE__ */ d("ul", { className: "figma-import-zone-list", children: a.zones.map((S) => /* @__PURE__ */ E("li", { children: [
        /* @__PURE__ */ d("code", { children: S.zoneKey }),
        " — ",
        S.zoneType,
        S.zoneWidth != null && S.zoneHeight != null ? ` (${S.zoneWidth}×${S.zoneHeight})` : null
      ] }, S.id)) }),
      a.warnings.map((S) => /* @__PURE__ */ d("p", { className: "figma-import-warning", children: S }, S)),
      /* @__PURE__ */ E("label", { className: "figma-import-checkbox", children: [
        /* @__PURE__ */ d(
          "input",
          {
            type: "checkbox",
            checked: p,
            onChange: (S) => A(S.target.checked)
          }
        ),
        "Create as a new template (instead of replacing zones on this one)"
      ] }),
      p ? /* @__PURE__ */ E(Ze, { children: [
        /* @__PURE__ */ E("label", { children: [
          "New template name",
          /* @__PURE__ */ d(
            "input",
            {
              type: "text",
              value: h,
              onChange: (S) => P(S.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "figma-import-button figma-import-button-primary",
            onClick: () => void T(),
            disabled: f || !h.trim(),
            children: "Create template from Figma"
          }
        )
      ] }) : /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "figma-import-button figma-import-button-primary",
          onClick: k,
          children: "Replace zones on this template"
        }
      )
    ] }),
    v && /* @__PURE__ */ d("p", { className: "figma-import-message", children: v }),
    y && /* @__PURE__ */ d("p", { className: "marketing-builder-error figma-import-error", children: y })
  ] });
}
const Nx = ["Social", "Email", "Newsletter", "Print"];
function Dx({
  template: e,
  onChange: t,
  compact: n = !1
}) {
  const r = Sa(e.channelType), o = oc(e.channelType), i = fb(e), s = (l) => {
    l !== e.channelType && t({
      channelType: l,
      ...Sv(l)
    });
  }, a = (l) => {
    const c = pb(e.channelType, l);
    c && t(c);
  };
  return /* @__PURE__ */ E("div", { className: `template-properties-form${n ? " template-properties-form-compact" : ""}`, children: [
    /* @__PURE__ */ d("h4", { children: n ? "Template" : "Template properties" }),
    /* @__PURE__ */ E("label", { children: [
      "Template name",
      /* @__PURE__ */ d(
        "input",
        {
          value: e.templateName,
          onChange: (l) => t({ templateName: l.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ E("label", { children: [
      "Channel type",
      /* @__PURE__ */ d(
        "select",
        {
          value: e.channelType,
          onChange: (l) => s(l.target.value),
          children: Nx.map((l) => /* @__PURE__ */ d("option", { value: l, children: l }, l))
        }
      )
    ] }),
    /* @__PURE__ */ E("div", { className: "template-dimensions-section", children: [
      /* @__PURE__ */ E("div", { className: "template-dimensions-heading", children: [
        /* @__PURE__ */ d("h5", { children: "Dimensions" }),
        /* @__PURE__ */ d("span", { className: "template-dimensions-summary", children: bv(e) })
      ] }),
      /* @__PURE__ */ E("label", { children: [
        "Size preset",
        /* @__PURE__ */ E("select", { value: i, onChange: (l) => a(l.target.value), children: [
          o.map((l) => /* @__PURE__ */ d("option", { value: l.id, children: l.label }, l.id)),
          /* @__PURE__ */ d("option", { value: "custom", children: "Custom" })
        ] })
      ] }),
      /* @__PURE__ */ E("div", { className: "template-dimension-fields", children: [
        /* @__PURE__ */ E("label", { children: [
          r ? "Width (px)" : "Email width (px)",
          /* @__PURE__ */ d(
            "input",
            {
              type: "number",
              min: 1,
              value: e.canvasWidth ?? "",
              onChange: (l) => t({
                canvasWidth: l.target.value ? Number(l.target.value) : void 0,
                formatPreset: Td(
                  e.channelType,
                  l.target.value ? Number(l.target.value) : void 0,
                  e.canvasHeight
                )
              })
            }
          )
        ] }),
        r ? /* @__PURE__ */ E("label", { children: [
          "Height (px)",
          /* @__PURE__ */ d(
            "input",
            {
              type: "number",
              min: 1,
              value: e.canvasHeight ?? "",
              onChange: (l) => t({
                canvasHeight: l.target.value ? Number(l.target.value) : void 0,
                formatPreset: Td(
                  e.channelType,
                  e.canvasWidth,
                  l.target.value ? Number(l.target.value) : void 0
                )
              })
            }
          )
        ] }) : /* @__PURE__ */ E("label", { children: [
          "Preview height (px)",
          /* @__PURE__ */ d(
            "input",
            {
              type: "number",
              min: 200,
              value: e.canvasHeight ?? 800,
              onChange: (l) => t({
                canvasHeight: l.target.value ? Number(l.target.value) : void 0
              })
            }
          )
        ] })
      ] }),
      !r && /* @__PURE__ */ d("p", { className: "template-dimensions-hint", children: "Email and newsletter templates use a fixed content width. Preview height is for the live preview panel only." })
    ] }),
    e.brandKitId && /* @__PURE__ */ E("p", { className: "template-properties-meta", children: [
      "Brand kit: ",
      e.brandKitId
    ] })
  ] });
}
function xx({ template: e, onAssetsChange: t }) {
  const n = hp(), { resultIds: r, fullText: o, hasSearchIntegration: i } = fw(), [s, a] = C.useState([]), [l, c] = C.useState([]), [u, f] = C.useState(!1), [m, y] = C.useState(!1), [g, v] = C.useState(null), [N, p] = C.useState(null), A = C.useMemo(
    () => new Set(s.map((T) => T.id).filter(Boolean)),
    [s]
  ), h = C.useCallback(async () => {
    if (!e.id || e.id.startsWith("temp-")) {
      a([]);
      return;
    }
    f(!0), p(null);
    try {
      const T = await fe.getTemplateAllowedAssets(e.id);
      a(T), t(T.map((S) => S.id).filter(Boolean));
    } catch (T) {
      a([]), p(T instanceof Error ? T.message : "Could not load template assets.");
    } finally {
      f(!1);
    }
  }, [t, e.id]);
  C.useEffect(() => {
    h();
  }, [h]), C.useEffect(() => {
    if (r.length === 0) {
      c([]);
      return;
    }
    let T = !1;
    return y(!0), fe.getAssetsByIds(r).then((S) => {
      T || c(S);
    }).catch(() => {
      T || c([]);
    }).finally(() => {
      T || y(!1);
    }), () => {
      T = !0;
    };
  }, [r]);
  const P = async (T) => {
    var S, H;
    if (!e.id || e.id.startsWith("temp-") || !T.id) {
      p("Save the template first before linking assets.");
      return;
    }
    v(T.id), p(null);
    try {
      if (!await fe.addAllowedAssetToTemplate(e.id, T.id))
        throw new Error(`Could not link ${T.name} to this template.`);
      await h(), (S = n.notifier) == null || S.notifySuccess(`Added "${T.name}" to template assets.`);
    } catch (D) {
      const L = D instanceof Error ? D.message : "Failed to link asset to template.";
      p(L), (H = n.notifier) == null || H.notifyError(L);
    } finally {
      v(null);
    }
  }, O = async (T) => {
    var S, H;
    if (!(!e.id || !T.id)) {
      v(T.id), p(null);
      try {
        await fe.removeAllowedAssetFromTemplate(e.id, T.id), await h(), (S = n.notifier) == null || S.notifySuccess(`Removed "${T.name}" from template assets.`);
      } catch (D) {
        const L = D instanceof Error ? D.message : "Failed to remove asset from template.";
        p(L), (H = n.notifier) == null || H.notifyError(L);
      } finally {
        v(null);
      }
    }
  }, k = !e.id || e.id.startsWith("temp-");
  return /* @__PURE__ */ E("div", { className: "template-zone-asset-collection template-allowed-assets", children: [
    /* @__PURE__ */ d("h4", { className: "template-zone-asset-collection-title", children: "Template image library" }),
    /* @__PURE__ */ E("p", { className: "template-zone-asset-collection-intro", children: [
      "Link approved ",
      /* @__PURE__ */ d("strong", { children: "M.Asset" }),
      " entities on the template via ",
      /* @__PURE__ */ d("code", { children: "templateToAllowedAsset" }),
      ". Every image zone on marketing assets built from this template can pick from these assets."
    ] }),
    /* @__PURE__ */ d(
      Ow,
      {
        overlay: !0,
        allowUrl: !1,
        triggerLabel: "Browse approved assets",
        disabled: k,
        onSelect: (T) => {
          P(T);
        }
      }
    ),
    k && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-hint", children: "Save this template first. An entity ID is needed before assets can be linked." }),
    /* @__PURE__ */ E("div", { className: "template-zone-asset-collection-section", children: [
      /* @__PURE__ */ E("div", { className: "template-zone-asset-collection-section-header", children: [
        /* @__PURE__ */ E("h5", { children: [
          "On template (",
          s.length,
          ")"
        ] }),
        u && /* @__PURE__ */ d("span", { className: "template-zone-asset-collection-status", children: "Loading..." })
      ] }),
      /* @__PURE__ */ E("div", { className: "template-zone-asset-collection-grid", children: [
        s.map((T) => /* @__PURE__ */ E("div", { className: "template-zone-asset-card", children: [
          /* @__PURE__ */ d("img", { src: T.thumbnailUrl, alt: T.name }),
          /* @__PURE__ */ d("span", { children: T.name }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "template-zone-asset-remove",
              disabled: g === T.id || k,
              onClick: () => void O(T),
              children: "Remove"
            }
          )
        ] }, T.id || T.thumbnailUrl)),
        !u && s.length === 0 && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-empty", children: "No assets linked to this template yet." })
      ] })
    ] }),
    /* @__PURE__ */ E("div", { className: "template-zone-asset-collection-section", children: [
      /* @__PURE__ */ E("div", { className: "template-zone-asset-collection-section-header", children: [
        /* @__PURE__ */ d("h5", { children: "From Content Hub search" }),
        m && /* @__PURE__ */ d("span", { className: "template-zone-asset-collection-status", children: "Loading..." })
      ] }),
      !i && /* @__PURE__ */ E("p", { className: "template-zone-asset-collection-hint", children: [
        "Use ",
        /* @__PURE__ */ d("strong", { children: "Browse approved assets" }),
        " above, or add a Search page component and set",
        " ",
        /* @__PURE__ */ d("code", { children: "searchIdentifier" }),
        " in the external component Configuration."
      ] }),
      i && /* @__PURE__ */ E("p", { className: "template-zone-asset-collection-hint", children: [
        "Use the search component on this page",
        o ? ` (current query: "${o}")` : "",
        ", then click",
        " ",
        /* @__PURE__ */ d("strong", { children: "Add" }),
        " to link an asset to the template."
      ] }),
      /* @__PURE__ */ E("div", { className: "template-zone-asset-collection-grid", children: [
        l.map((T) => {
          const S = T.id ? A.has(T.id) : !1;
          return /* @__PURE__ */ E("div", { className: "template-zone-asset-card", children: [
            /* @__PURE__ */ d("img", { src: T.thumbnailUrl, alt: T.name }),
            /* @__PURE__ */ d("span", { children: T.name }),
            /* @__PURE__ */ d(
              "button",
              {
                type: "button",
                className: "template-zone-asset-add",
                disabled: S || g === T.id || !T.id || k,
                onClick: () => void P(T),
                children: S ? "Linked" : "Add"
              }
            )
          ] }, T.id || T.thumbnailUrl);
        }),
        i && !m && l.length === 0 && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-empty", children: "Run a search on this page to see assets you can link." })
      ] })
    ] }),
    N && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-error", children: N })
  ] });
}
function Bx({ zoneLabel: e, onDelete: t, className: n = "" }) {
  return /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      className: `zone-list-delete${n ? ` ${n}` : ""}`,
      "aria-label": `Delete zone ${e}`,
      title: "Delete zone",
      onClick: (r) => {
        r.stopPropagation(), t();
      },
      onPointerDown: (r) => r.stopPropagation(),
      children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", width: "16", height: "16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ d(
        "path",
        {
          fill: "currentColor",
          d: "M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v9h-2V9zm4 0h2v9h-2V9zM7 9h2v9H7V9z"
        }
      ) })
    }
  );
}
const Ox = ["Text", "Heading", "Image", "CTA Button", "Logo", "Background Color", "Divider", "HTML"], Ix = 800;
function zx({
  template: e,
  onSaved: t,
  pendingFigmaImport: n = null,
  onPendingFigmaImportApplied: r
}) {
  var V;
  const [o, i] = C.useState(e), [s, a] = C.useState(((V = o.zones[0]) == null ? void 0 : V.id) ?? null), [l, c] = C.useState("saved"), [u, f] = C.useState(null), m = C.useRef(e.zones), y = C.useRef(o), g = C.useRef(null), v = C.useRef(0), N = C.useRef(!0), p = C.useRef(!1);
  y.current = o;
  const A = C.useCallback(
    async (b) => {
      const I = ++v.current;
      c("saving"), f(null);
      try {
        const W = await fe.saveTemplate(b, m.current);
        if (I !== v.current)
          return;
        m.current = W.zones, N.current = !0, i(W), t == null || t(W), c("saved");
      } catch (W) {
        if (I !== v.current)
          return;
        f(W instanceof Error ? W.message : "Failed to save template zones."), c("error");
      }
    },
    [t]
  );
  C.useEffect(() => {
    var b;
    !n || n.zones.length === 0 || (i((I) => ({
      ...I,
      canvasWidth: n.canvasWidth ?? I.canvasWidth,
      canvasHeight: n.canvasHeight ?? I.canvasHeight,
      zones: n.zones.map((W, pe) => ({
        ...W,
        sortOrder: pe
      }))
    })), a(((b = n.zones[0]) == null ? void 0 : b.id) ?? null), c("pending"), r == null || r());
  }, [n, r]), C.useEffect(() => {
    N.current = !0, m.current = e.zones, i(e), a((b) => {
      var I;
      return b && e.zones.some((W) => W.id === b) ? b : ((I = e.zones[0]) == null ? void 0 : I.id) ?? null;
    }), f(null), c("saved");
  }, [
    e.id,
    e.templateName,
    e.channelType,
    e.canvasWidth,
    e.canvasHeight,
    e.formatPreset,
    e.zones.map(
      (b) => [
        b.id,
        b.zoneKey,
        b.zoneLabel,
        b.zoneType,
        b.isLocked,
        b.sortOrder,
        b.headingLevel ?? "",
        b.maxCharacterCount ?? ""
      ].join(":")
    ).join("|")
  ]), C.useEffect(() => {
    if (!p.current) {
      p.current = !0;
      return;
    }
    if (N.current) {
      N.current = !1;
      return;
    }
    return c((b) => b === "saving" ? b : "pending"), g.current != null && window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      A(y.current);
    }, Ix), () => {
      g.current != null && window.clearTimeout(g.current);
    };
  }, [o, A]);
  const h = o.zones.find((b) => b.id === s), [P, O] = C.useState(null), [k, T] = C.useState(null), S = [...o.zones].sort((b, I) => b.sortOrder - I.sortOrder), H = (b, I) => {
    b !== I && i((W) => {
      const pe = [...W.zones].sort((Q, Z) => Q.sortOrder - Z.sortOrder), z = pe.findIndex((Q) => Q.id === b), J = pe.findIndex((Q) => Q.id === I);
      if (z < 0 || J < 0)
        return W;
      const we = [...pe], [M] = we.splice(z, 1);
      return we.splice(J, 0, M), {
        ...W,
        zones: we.map((Q, Z) => ({ ...Q, sortOrder: Z }))
      };
    });
  }, D = (b) => {
    i((I) => ({ ...I, ...b }));
  }, L = (b, I) => {
    i((W) => ({
      ...W,
      zones: W.zones.map((pe) => {
        if (pe.id !== b)
          return pe;
        const z = { ...pe, ...I };
        for (const J of Object.keys(I))
          I[J] === void 0 && delete z[J];
        return z;
      })
    }));
  }, x = (b) => {
    if (b.trim() === "")
      return;
    const I = Number(b);
    return Number.isNaN(I) ? void 0 : I;
  }, K = () => {
    const b = new Set(o.zones.map((z) => z.zoneKey));
    let I = o.zones.length + 1, W = `newZone${I}`;
    for (; b.has(W); )
      I += 1, W = `newZone${I}`;
    const pe = {
      id: `temp-${Date.now()}`,
      zoneKey: W,
      zoneLabel: "New zone",
      zoneType: "Text",
      isLocked: !1,
      sortOrder: o.zones.length
    };
    i((z) => ({ ...z, zones: [...z.zones, pe] })), a(pe.id);
  }, ve = (b) => {
    var J, we;
    const I = [...o.zones].sort((M, Q) => M.sortOrder - Q.sortOrder), W = I.findIndex((M) => M.id === b), pe = I.filter((M) => M.id !== b).map((M, Q) => ({ ...M, sortOrder: Q })), z = ((J = pe[W]) == null ? void 0 : J.id) ?? ((we = pe[W - 1]) == null ? void 0 : we.id) ?? null;
    i((M) => ({ ...M, zones: pe })), a(z);
  }, se = () => {
    const b = [
      {
        id: `temp-${Date.now()}-logo`,
        zoneKey: "logo",
        zoneLabel: "Logo",
        zoneType: "Logo",
        isLocked: !0,
        sortOrder: 0
      },
      {
        id: `temp-${Date.now()}-headline`,
        zoneKey: "headline",
        zoneLabel: "Headline",
        zoneType: "Heading",
        headingLevel: "H1",
        isLocked: !1,
        sortOrder: 1,
        maxCharacterCount: 120
      },
      {
        id: `temp-${Date.now()}-hero`,
        zoneKey: "heroImage",
        zoneLabel: "Hero image",
        zoneType: "Image",
        isLocked: !1,
        sortOrder: 2,
        aspectRatioLock: "16:9"
      },
      {
        id: `temp-${Date.now()}-body`,
        zoneKey: "body",
        zoneLabel: "Body copy",
        zoneType: "Text",
        isLocked: !1,
        sortOrder: 3,
        maxCharacterCount: 500
      },
      {
        id: `temp-${Date.now()}-cta`,
        zoneKey: "cta",
        zoneLabel: "Learn more",
        zoneType: "CTA Button",
        isLocked: !1,
        sortOrder: 4
      }
    ];
    i((I) => ({ ...I, zones: b })), a(b[0].id);
  }, _ = Bd(l === "pending", "pending"), oe = Bd(l === "saving", "active"), G = l === "pending" ? _ : l === "saving" ? oe : l === "error" ? u ?? "Could not save template." : "All changes saved automatically.";
  return /* @__PURE__ */ d(
    ul,
    {
      structureTitle: "Template structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ E("div", { className: "template-admin-structure", children: [
        /* @__PURE__ */ d(Dx, { template: o, onChange: D, compact: !0 }),
        /* @__PURE__ */ d(
          xx,
          {
            template: o,
            onAssetsChange: (b) => i((I) => {
              const W = I.allowedAssetIds ?? [];
              return W.length === b.length && W.every((pe, z) => pe === b[z]) ? I : { ...I, allowedAssetIds: b };
            })
          }
        ),
        /* @__PURE__ */ E("div", { className: "template-admin-structure-grid", children: [
          /* @__PURE__ */ E("div", { className: "template-admin-zone-list", children: [
            /* @__PURE__ */ d("h4", { children: "Zones" }),
            /* @__PURE__ */ d("p", { className: "zone-list-hint", children: "Drag zones to reorder" }),
            S.map((b) => /* @__PURE__ */ E(
              "div",
              {
                tabIndex: 0,
                draggable: !0,
                className: `zone-list-item${b.id === s ? " zone-list-item-active" : ""}${b.id === P ? " zone-list-item-dragging" : ""}${b.id === k ? " zone-list-item-drag-over" : ""}`,
                onClick: () => a(b.id),
                onKeyDown: (I) => {
                  (I.key === "Enter" || I.key === " ") && (I.preventDefault(), a(b.id));
                },
                onDragStart: (I) => {
                  if (I.target.closest(".zone-list-delete")) {
                    I.preventDefault();
                    return;
                  }
                  I.dataTransfer.effectAllowed = "move", I.dataTransfer.setData("text/plain", b.id), O(b.id);
                },
                onDragOver: (I) => {
                  I.preventDefault(), I.dataTransfer.dropEffect = "move", k !== b.id && T(b.id);
                },
                onDragLeave: () => {
                  T((I) => I === b.id ? null : I);
                },
                onDrop: (I) => {
                  I.preventDefault();
                  const W = I.dataTransfer.getData("text/plain");
                  W && H(W, b.id), O(null), T(null);
                },
                onDragEnd: () => {
                  O(null), T(null);
                },
                children: [
                  /* @__PURE__ */ d("span", { className: "zone-list-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }),
                  /* @__PURE__ */ E("span", { className: "zone-list-item-content", children: [
                    /* @__PURE__ */ d("span", { children: b.zoneLabel || b.zoneKey }),
                    /* @__PURE__ */ d("span", { className: "zone-list-item-type", children: b.zoneType === "Heading" ? `Heading · ${b.headingLevel ?? Hn}` : b.zoneType }),
                    b.isLocked && /* @__PURE__ */ d("span", { className: "zone-list-item-lock", children: "Locked" })
                  ] }),
                  /* @__PURE__ */ d(
                    Bx,
                    {
                      zoneLabel: b.zoneLabel || b.zoneKey,
                      onDelete: () => ve(b.id)
                    }
                  )
                ]
              },
              b.id
            )),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-list-add", onClick: K, children: "+ Add zone" }),
            o.zones.length === 0 && /* @__PURE__ */ d("button", { type: "button", className: "zone-list-add zone-list-starter", onClick: se, children: "Start with email template zones" })
          ] }),
          /* @__PURE__ */ d("div", { className: "template-admin-properties", children: h ? /* @__PURE__ */ E(Ze, { children: [
            /* @__PURE__ */ d("h4", { children: "Zone properties" }),
            /* @__PURE__ */ E("div", { children: [
              /* @__PURE__ */ E("label", { children: [
                "Label",
                /* @__PURE__ */ d(
                  "input",
                  {
                    value: h.zoneLabel,
                    onChange: (b) => L(h.id, { zoneLabel: b.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ E("label", { children: [
                "Zone key",
                /* @__PURE__ */ d(
                  "input",
                  {
                    value: h.zoneKey,
                    onChange: (b) => L(h.id, { zoneKey: b.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ E("label", { children: [
                "Type",
                /* @__PURE__ */ d(
                  "select",
                  {
                    value: h.zoneType,
                    onChange: (b) => {
                      L(
                        h.id,
                        fS(h, b.target.value)
                      );
                    },
                    children: Ox.map((b) => /* @__PURE__ */ d("option", { value: b, children: b }, b))
                  }
                )
              ] }),
              /* @__PURE__ */ E("label", { className: "checkbox-label", children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "checkbox",
                    checked: h.isLocked,
                    onChange: (b) => L(h.id, { isLocked: b.target.checked })
                  }
                ),
                "Locked (brand element, end user cannot edit)"
              ] }),
              h.zoneType === "Heading" && /* @__PURE__ */ E(Ze, { children: [
                /* @__PURE__ */ E("label", { children: [
                  "Heading level",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: h.headingLevel ?? Hn,
                      onChange: (b) => L(h.id, {
                        headingLevel: b.target.value
                      }),
                      children: Bv.map((b) => /* @__PURE__ */ d("option", { value: b, children: b }, b))
                    }
                  )
                ] }),
                /* @__PURE__ */ E("label", { children: [
                  "Max characters",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.maxCharacterCount ?? "",
                      onChange: (b) => L(h.id, { maxCharacterCount: x(b.target.value) })
                    }
                  )
                ] })
              ] }),
              h.zoneType === "Text" && /* @__PURE__ */ E("label", { children: [
                "Max characters",
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "number",
                    value: h.maxCharacterCount ?? "",
                    onChange: (b) => L(h.id, { maxCharacterCount: x(b.target.value) })
                  }
                )
              ] }),
              h.zoneType === "Image" && /* @__PURE__ */ E("label", { children: [
                "Aspect ratio lock",
                /* @__PURE__ */ d(
                  "input",
                  {
                    placeholder: "e.g. 1:1",
                    value: h.aspectRatioLock ?? "",
                    onChange: (b) => {
                      const I = b.target.value.trim();
                      L(h.id, { aspectRatioLock: I || void 0 });
                    }
                  }
                )
              ] }),
              h.zoneType === "HTML" && /* @__PURE__ */ E(Ze, { children: [
                /* @__PURE__ */ E("label", { children: [
                  "Default HTML content",
                  /* @__PURE__ */ d(
                    "textarea",
                    {
                      value: h.htmlDefaultContent ?? "",
                      onChange: (b) => L(h.id, { htmlDefaultContent: b.target.value })
                    }
                  )
                ] }),
                /* @__PURE__ */ E("label", { className: "checkbox-label", children: [
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "checkbox",
                      checked: h.htmlAllowUserOverride ?? !1,
                      onChange: (b) => L(h.id, { htmlAllowUserOverride: b.target.checked })
                    }
                  ),
                  "Allow end user to edit this HTML zone"
                ] })
              ] }),
              Sa(o.channelType) && /* @__PURE__ */ E("div", { className: "position-fields", children: [
                /* @__PURE__ */ E("label", { children: [
                  "X",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.positionX ?? "",
                      onChange: (b) => L(h.id, { positionX: x(b.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ E("label", { children: [
                  "Y",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.positionY ?? "",
                      onChange: (b) => L(h.id, { positionY: x(b.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ E("label", { children: [
                  "Width",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.zoneWidth ?? "",
                      onChange: (b) => L(h.id, { zoneWidth: x(b.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ E("label", { children: [
                  "Height",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.zoneHeight ?? "",
                      onChange: (b) => L(h.id, { zoneHeight: x(b.target.value) })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "zone-layout-fields asset-zone-layout-fields", children: /* @__PURE__ */ E("div", { className: "asset-zone-layout-grid", children: [
                /* @__PURE__ */ E("label", { children: [
                  "Alignment",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: h.contentAlignment ?? Gr,
                      onChange: (b) => L(h.id, {
                        contentAlignment: b.target.value
                      }),
                      children: Ov.map((b) => /* @__PURE__ */ d("option", { value: b, children: b }, b))
                    }
                  )
                ] }),
                /* @__PURE__ */ E("label", { children: [
                  "Offset (px)",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      value: h.offsetPx ?? 0,
                      onChange: (b) => L(h.id, { offsetPx: Math.max(0, Number(b.target.value) || 0) })
                    }
                  )
                ] }),
                /* @__PURE__ */ E("label", { children: [
                  "Direction",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: h.offsetDirection ?? ic,
                      onChange: (b) => L(h.id, {
                        offsetDirection: b.target.value
                      }),
                      children: Iv.map((b) => /* @__PURE__ */ d("option", { value: b, children: b }, b))
                    }
                  )
                ] }),
                /* @__PURE__ */ E("label", { children: [
                  "Sort order",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      value: h.sortOrder ?? 0,
                      onChange: (b) => L(h.id, { sortOrder: Math.max(0, Number(b.target.value) || 0) })
                    }
                  )
                ] })
              ] }) })
            ] }, `${h.id}-${h.zoneType}`),
            !Sa(o.channelType) && /* @__PURE__ */ d("p", { className: "zone-sort-hint", children: "You can also drag zones in the list to reorder." }),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-remove", onClick: () => ve(h.id), children: "Remove zone" })
          ] }) : /* @__PURE__ */ d("p", { className: "no-zone-selected", children: "Select a zone to edit its properties, or add a new one." }) })
        ] }),
        /* @__PURE__ */ d("div", { className: "template-admin-structure-actions", children: /* @__PURE__ */ d(
          "p",
          {
            className: `template-admin-autosave-status${l === "error" ? " template-admin-autosave-status-error" : l === "saved" ? " template-admin-autosave-status-saved" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: G
          }
        ) })
      ] }),
      preview: /* @__PURE__ */ d(
        gp,
        {
          template: o,
          layoutMode: Sa(o.channelType) ? "canvas" : "stacked",
          onDimensionsChange: D
        }
      )
    }
  );
}
function Lx({ template: e, onDuplicated: t }) {
  const n = RS(e.channelType), [r, o] = C.useState(n[0] ?? "Social"), [i, s] = C.useState(`${e.templateName} (${n[0] ?? "Social"})`), [a, l] = C.useState(!1), [c, u] = C.useState(null), [f, m] = C.useState(null);
  if (n.length === 0)
    return null;
  const y = (v) => {
    o(v), s(`${e.templateName} (${v})`);
  }, g = async () => {
    l(!0), m(null), u(null);
    try {
      const v = await fe.duplicateTemplate(e.id, r, i);
      u(
        `Created "${v.templateName}". Open Asset builder and choose it from the template dropdown.`
      ), t == null || t(v);
    } catch (v) {
      m(
        v instanceof Error ? v.message : "Could not duplicate template."
      );
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ E("div", { className: "template-duplicate-panel", children: [
    /* @__PURE__ */ d("h4", { children: "Duplicate template" }),
    /* @__PURE__ */ d("p", { className: "template-duplicate-hint", children: "Copy this template's zones into a new format. The new template is linked to the same brand kit and appears in the Asset builder template list." }),
    /* @__PURE__ */ E("label", { children: [
      "New template name",
      /* @__PURE__ */ d(
        "input",
        {
          value: i,
          onChange: (v) => s(v.target.value),
          placeholder: `${e.templateName} (${r})`
        }
      )
    ] }),
    /* @__PURE__ */ E("label", { children: [
      "Copy to format",
      /* @__PURE__ */ d(
        "select",
        {
          value: r,
          onChange: (v) => y(v.target.value),
          children: n.map((v) => /* @__PURE__ */ d("option", { value: v, children: v }, v))
        }
      )
    ] }),
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "template-duplicate-button",
        onClick: () => void g(),
        disabled: a || !i.trim(),
        children: `Duplicate as ${r}`
      }
    ),
    /* @__PURE__ */ d(Jo, { active: a, className: "template-duplicate-saving" }),
    c && /* @__PURE__ */ d("p", { className: "template-duplicate-message", children: c }),
    f && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-duplicate-error", children: f })
  ] });
}
function Mx({
  template: e,
  onTemplateSaved: t,
  onTemplatesChanged: n,
  figmaImportApiUrl: r,
  figmaImportApiToken: o
}) {
  const [i, s] = C.useState(null);
  return /* @__PURE__ */ E("div", { className: "template-setup-panel", children: [
    /* @__PURE__ */ E("details", { className: "template-setup-tools", children: [
      /* @__PURE__ */ d("summary", { children: "Import and duplicate" }),
      /* @__PURE__ */ E("div", { className: "template-setup-tools-body", children: [
        /* @__PURE__ */ d(
          Px,
          {
            template: e,
            figmaImportApiUrl: r,
            figmaImportApiToken: o,
            onApplyToCurrent: s,
            onCreatedTemplate: (a) => {
              t(a), n == null || n();
            }
          }
        ),
        /* @__PURE__ */ d(
          Lx,
          {
            template: e,
            onDuplicated: (a) => {
              t(a), n == null || n();
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ d(
      zx,
      {
        template: e,
        onSaved: t,
        pendingFigmaImport: i,
        onPendingFigmaImportApplied: () => s(null)
      }
    )
  ] });
}
function Rx({
  client: e,
  entity: t,
  options: n,
  config: r,
  contentHubApi: o,
  searchIdentifier: i,
  selectionPoolIdentifier: s
}) {
  const [a, l] = C.useState(null), [c, u] = C.useState(null), [f, m] = C.useState(null), [y, g] = C.useState(!0), [v, N] = C.useState(null), [p, A] = C.useState("asset"), [h, P] = C.useState(0), [O, k] = C.useState(!1), [T, S] = C.useState(null), H = (b) => {
    A(b), !(b !== "asset" || !(c != null && c.id)) && fe.getTemplate(c.id).then((I) => u(I)).catch((I) => {
      Nn(
        "template reload",
        I,
        `Could not refresh template ${c.id} when switching to the asset tab.`
      );
    });
  };
  C.useEffect(() => {
    YS(e ?? null);
  }, [e]), C.useEffect(() => {
    let b = !1;
    async function I() {
      const W = await YP(
        e,
        n ?? (e == null ? void 0 : e.options),
        t,
        r
      );
      b || (l(W), W.allowTemplateZoneEditing && q("allowTemplateZoneEditing", "Template zone editing enabled from Configuration"));
    }
    return I(), () => {
      b = !0;
    };
  }, [e, r, t, n]), C.useEffect(() => {
    a != null && a.contentHubProxyBase && ZS(a.contentHubProxyBase);
  }, [a == null ? void 0 : a.contentHubProxyBase]), C.useEffect(() => {
    XS(a == null ? void 0 : a.searchComponentId);
  }, [a == null ? void 0 : a.searchComponentId]), C.useEffect(() => {
    if (!a)
      return;
    const b = a;
    let I = !1;
    async function W() {
      g(!0), N(null), mk();
      const pe = b.templateId || (b.builderMode === "admin" ? b.marketingAssetId : void 0);
      if (!pe) {
        const z = b.marketingAssetId ? Ck(t, r) : ur();
        Nn("templateId", z), N(z), g(!1);
        return;
      }
      if (b.builderMode !== "admin" && !b.marketingAssetId) {
        const z = ur();
        Nn("marketingAssetId", z), N(z), g(!1);
        return;
      }
      q("templateId", `Using template ${pe}`), b.marketingAssetId && q("marketingAssetId", `Using marketing asset ${b.marketingAssetId}`);
      try {
        const z = await fe.getTemplate(pe);
        if (I)
          return;
        u(z);
        const J = xA(b, z.channelType);
        if (J === "admin") {
          m(null), EA({
            builderMode: J,
            templateId: z.id,
            templateName: z.templateName,
            marketingAssetId: b.marketingAssetId,
            brandKitId: b.brandKitId ?? z.brandKitId,
            channelType: z.channelType,
            zoneCount: z.zones.length
          });
          return;
        }
        if (!b.marketingAssetId) {
          const Q = ur();
          Nn("marketingAssetId", Q), N(Q);
          return;
        }
        const we = await fe.getMarketingAsset(b.marketingAssetId);
        if (I)
          return;
        m(we);
        const M = b.brandKitId ?? z.brandKitId;
        EA({
          builderMode: J,
          templateId: z.id,
          templateName: z.templateName,
          marketingAssetId: we.id,
          brandKitId: M,
          channelType: z.channelType,
          zoneCount: z.zones.length,
          zoneValueCount: we.zoneValues.length
        });
      } catch (z) {
        if (I)
          return;
        Nn("load", z, "Marketing builder could not load required entities."), N(z instanceof Error ? z.message : "Failed to load marketing builder data.");
      } finally {
        I || g(!1);
      }
    }
    return W(), () => {
      I = !0;
    };
  }, [r, t, a]);
  const D = xA(a ?? {}, c == null ? void 0 : c.channelType), L = (a == null ? void 0 : a.brandKitId) ?? (c == null ? void 0 : c.brandKitId), x = (a == null ? void 0 : a.userHasOverridePermission) ?? !1, K = i ?? (a == null ? void 0 : a.searchIdentifier), ve = s ?? (a == null ? void 0 : a.selectionPoolIdentifier), se = {
    searchIdentifier: K,
    selectionPoolIdentifier: ve,
    search: o == null ? void 0 : o.search,
    selection: o == null ? void 0 : o.selection,
    notifier: o == null ? void 0 : o.notifier
  };
  C.useEffect(() => {
    c && c.zones.length === 0 && A("template");
  }, [c == null ? void 0 : c.id, c == null ? void 0 : c.zones.length]);
  const _ = () => {
    P((b) => b + 1);
  }, oe = async (b) => {
    if (u(b), a && l({ ...a, templateId: b.id }), f) {
      const I = await fe.getMarketingAsset(f.id);
      m(I);
    }
    _();
  }, G = async () => {
    if (c) {
      k(!0), S(null);
      try {
        const b = await fx(
          c,
          a == null ? void 0 : a.designerDocumentProperty
        );
        u(b), _();
      } catch (b) {
        S(
          b instanceof Error ? b.message : "Could not create canvas template."
        );
      } finally {
        k(!1);
      }
    }
  }, V = px(c);
  return !a || y ? /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading marketing builder..." }) : v ? /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: v }) : c ? L ? /* @__PURE__ */ d(KP, { value: se, children: /* @__PURE__ */ d(GP, { brandKitId: L, children: /* @__PURE__ */ E("div", { className: "marketing-builder", children: [
    (D === "admin" || p === "template") && /* @__PURE__ */ E(Ze, { children: [
      D !== "admin" && /* @__PURE__ */ d(
        ca,
        {
          activeTab: p,
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: H
        }
      ),
      D === "admin" && /* @__PURE__ */ d(
        ca,
        {
          activeTab: "template",
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: () => {
          },
          showAssetTab: !1
        }
      ),
      V ? /* @__PURE__ */ d(
        dx,
        {
          template: c,
          designerDocumentProperty: a.designerDocumentProperty,
          onTemplateSaved: (b) => {
            u(b), _();
          }
        }
      ) : /* @__PURE__ */ E(Ze, { children: [
        /* @__PURE__ */ E("div", { className: "designer-create-banner", children: [
          /* @__PURE__ */ d("p", { children: "This template uses the zone builder. You can also create a canvas designer template (stored as designerDocumentJson on EPAM.Template)." }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "chd-btn",
              disabled: O,
              onClick: () => void G(),
              children: O ? "Creating…" : "Create canvas template"
            }
          ),
          T ? /* @__PURE__ */ d("div", { className: "marketing-builder-error", children: T }) : null
        ] }),
        /* @__PURE__ */ d(
          Mx,
          {
            template: c,
            figmaImportApiUrl: a.figmaImportApiUrl,
            figmaImportApiToken: a.figmaImportApiToken,
            onTemplateSaved: (b) => {
              u(b), _();
            },
            onTemplatesChanged: _
          }
        )
      ] })
    ] }),
    D === "social" && f && p === "asset" && /* @__PURE__ */ E(Ze, { children: [
      /* @__PURE__ */ d(
        ca,
        {
          activeTab: p,
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: H
        }
      ),
      /* @__PURE__ */ d(
        wu,
        {
          brandKitId: L,
          currentTemplateId: c.id,
          marketingAssetId: f.id,
          refreshKey: h,
          onTemplateChange: oe
        }
      ),
      V ? /* @__PURE__ */ d(
        yh,
        {
          template: c,
          marketingAsset: f,
          designerDocumentProperty: a.designerDocumentProperty,
          designerInstanceProperty: a.designerInstanceProperty,
          onSaved: m
        }
      ) : /* @__PURE__ */ d(
        gx,
        {
          template: c,
          marketingAsset: f,
          userHasOverridePermission: x,
          html2canvasCdnUrl: a.html2canvasCdnUrl
        }
      )
    ] }),
    D === "social" && !f && /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Marketing asset could not be loaded for the social builder." }),
    D === "email" && f && p === "asset" && /* @__PURE__ */ E(Ze, { children: [
      /* @__PURE__ */ d(
        ca,
        {
          activeTab: p,
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: H
        }
      ),
      V ? /* @__PURE__ */ E(Ze, { children: [
        /* @__PURE__ */ d(
          wu,
          {
            brandKitId: L,
            currentTemplateId: c.id,
            marketingAssetId: f.id,
            refreshKey: h,
            onTemplateChange: oe
          }
        ),
        /* @__PURE__ */ d(
          yh,
          {
            template: c,
            marketingAsset: f,
            designerDocumentProperty: a.designerDocumentProperty,
            designerInstanceProperty: a.designerInstanceProperty,
            onSaved: m
          }
        )
      ] }) : c.zones.length > 0 ? /* @__PURE__ */ E(Ze, { children: [
        /* @__PURE__ */ d(
          wu,
          {
            brandKitId: L,
            currentTemplateId: c.id,
            marketingAssetId: f.id,
            refreshKey: h,
            onTemplateChange: oe
          }
        ),
        /* @__PURE__ */ d(
          pN,
          {
            template: c,
            marketingAsset: f,
            userHasOverridePermission: x,
            renderEmailApiUrl: a.renderEmailApiUrl
          }
        )
      ] }) : /* @__PURE__ */ E("div", { className: "marketing-builder-status template-empty-message", children: [
        "Template ",
        /* @__PURE__ */ d("strong", { children: c.templateName }),
        " has no zones yet. Open the",
        " ",
        /* @__PURE__ */ d("strong", { children: "Edit template" }),
        " tab to add zones, or create a canvas template."
      ] })
    ] })
  ] }) }) }) : /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "brandKitId is not set on this component and could not be resolved from the template. Set brandKitId in Manage > Pages > this detail page > External component > Configuration, or link templateToBrandKit on the template." }) : /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Template could not be resolved." });
}
function Hx(e) {
  if (e == null)
    return {};
  const t = typeof e == "string" ? (() => {
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  })() : typeof e == "object" && !Array.isArray(e) ? e : null;
  return t ? {
    searchIdentifier: typeof t.searchIdentifier == "string" ? t.searchIdentifier.trim() : void 0,
    selectionPoolIdentifier: typeof t.selectionPoolIdentifier == "string" ? t.selectionPoolIdentifier.trim() : void 0
  } : {};
}
function Fx(e) {
  const t = Iy(e);
  return ge("startup", "CHMarketingBuilder initialised"), {
    async render(n) {
      var i, s, a;
      const r = n.config ? typeof n.config == "string" ? "json-string" : Object.keys(n.config).join(", ") || "(empty object)" : "(none)";
      ge(
        "context",
        `entityId=${((s = (i = n.entity) == null ? void 0 : i.systemProperties) == null ? void 0 : s.id) ?? ((a = n.options) == null ? void 0 : a.entityId) ?? "n/a"}, config=${r}`
      );
      const o = Hx(n.config);
      t.render(
        /* @__PURE__ */ d(uk, { theme: n.theme, children: /* @__PURE__ */ d(
          Rx,
          {
            client: n.client,
            entity: n.entity,
            options: n.options,
            config: n.config,
            contentHubApi: n.api,
            searchIdentifier: o.searchIdentifier,
            selectionPoolIdentifier: o.selectionPoolIdentifier
          }
        ) })
      );
    },
    unmount() {
      t.unmount();
    }
  };
}
export {
  Fx as default
};
