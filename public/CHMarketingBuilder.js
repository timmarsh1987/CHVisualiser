(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.marketing-builder{--mb-primary: #00a651;--mb-primary-hover: #1db86a;--mb-primary-active: #008a44;--mb-primary-soft: #e6f7ed;--mb-primary-border: #8fd4a8;--mb-accent: #00a651;--mb-text: #000000;--mb-muted: #6b716e;--mb-background: #f4f7f5;--mb-surface: #ffffff;--mb-border: #e2e8e4;--mb-font: Arial, Helvetica, sans-serif;font-family:var(--mb-font);color:var(--mb-text);display:flex;flex-direction:column;min-height:calc(100dvh - 12px);height:100%}.marketing-builder .chd-root{flex:1 1 auto;min-height:0;height:auto}.marketing-builder-status{padding:16px;font-size:14px;color:#555}.marketing-builder-error{color:#b71c1c}.email-builder-editor{max-width:none;margin:0;border:none;padding:0;background:transparent}.builder-split{display:flex;gap:16px;align-items:stretch;min-height:72vh}.builder-split-panel{flex:1 1 50%;min-width:0;display:flex;flex-direction:column;border:1px solid #e0e0e0;border-radius:6px;background:#fff;overflow:hidden}.builder-split-heading{margin:0;padding:12px 16px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;border-bottom:1px solid #ececec;background:#fafafa}.builder-split-structure-body,.builder-split-preview-body{flex:1;min-height:0;display:flex;flex-direction:column}.builder-split-structure-body{overflow:auto;padding:16px}.builder-split-preview-body{overflow:auto;padding:16px;background:var(--mb-background)}.template-admin-structure{display:flex;flex-direction:column;gap:16px;min-height:100%}.template-admin-structure-grid{display:grid;grid-template-columns:minmax(180px,220px) minmax(0,1fr);gap:16px;align-items:start}.template-admin-structure-actions{margin-top:auto;padding-top:12px;border-top:1px solid #ececec}.template-admin-autosave-status{margin:0;font-size:12px;color:#666}.template-admin-autosave-status-saved{color:#2e7d32}.template-admin-autosave-status:not(.template-admin-autosave-status-saved):not(.template-admin-autosave-status-error){color:var(--mb-primary, #00755f);font-style:italic}.template-admin-autosave-status-error{color:#c62828}.saving-status-message{margin:8px 0 0;font-size:12px;line-height:1.45;color:var(--mb-primary, #00755f);font-style:italic;animation:saving-status-fade .35s ease}@keyframes saving-status-fade{0%{opacity:0}to{opacity:1}}.template-properties-form{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-properties-form h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-properties-form label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-properties-form input,.template-properties-form select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-properties-meta{margin:0;font-size:11px;color:#888}.template-dimensions-section{margin-top:4px;padding-top:12px;border-top:1px solid #ececec}.template-dimensions-heading{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:10px}.template-dimensions-heading h5{margin:0;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#666}.template-dimensions-summary{font-size:11px;font-weight:600;color:var(--mb-primary, #00755f);white-space:nowrap}.template-dimension-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.template-dimensions-hint{margin:0 0 4px;font-size:11px;line-height:1.4;color:#888}.live-preview-canvas-wrap,.live-preview-email-wrap{display:flex;flex-direction:column;gap:8px;height:100%}.live-preview-resize-frame{position:relative;flex:0 0 auto;max-width:100%;box-sizing:content-box}.live-preview-resize-content{width:100%;height:100%;overflow:hidden}.live-preview-resize-content .live-preview-canvas,.live-preview-resize-content .email-builder-preview-frame{width:100%!important;height:100%!important;min-height:0;margin:0;display:block}.live-preview-resize-handle{position:absolute;z-index:2;padding:0;border:none;background:var(--mb-primary);opacity:.35;touch-action:none;-webkit-user-select:none;user-select:none}.live-preview-resize-handle:hover,.live-preview-resize-handle:focus-visible{opacity:.85}.live-preview-resize-handle-right{top:0;right:-8px;width:8px;height:100%;cursor:ew-resize;border-radius:0 4px 4px 0}.live-preview-resize-handle-bottom{left:0;bottom:-8px;width:100%;height:8px;cursor:ns-resize;border-radius:0 0 4px 4px}.live-preview-dimensions-badge{margin:0;align-self:center;padding:4px 10px;border-radius:999px;background:var(--mb-primary-soft, #e4f7f4);color:var(--mb-primary, #00755f);font-size:11px;font-weight:600;letter-spacing:.02em}.template-admin-preview-canvas-fill{flex:1;min-height:100%;margin:0}.live-preview-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text,.live-preview-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text{font-size:16px;line-height:1.5}.live-preview-canvas .zone-text-empty:empty:before,.live-preview-canvas .zone-heading.zone-text-empty:empty:before{color:var(--mb-muted, #717171);font-style:italic}.template-admin-preview-empty{margin:0;padding:24px;text-align:center;color:#888;font-size:13px}.email-builder-structure{display:flex;flex-direction:column;gap:12px}.email-builder-override-structure{display:flex;flex-direction:column;gap:12px;min-height:100%}.email-builder-override-structure .raw-html-editor{flex:1;min-height:420px}.email-builder-zone-row{margin-bottom:12px}.zone-stacked{min-height:48px}.zone-stacked.zone-image{min-height:180px}.asset-zone-structure-content .zone-logo{padding:8px 0}.zone-logo-placeholder{display:inline-flex;align-items:center;justify-content:center;min-width:120px;min-height:48px;padding:10px 20px;border:1px solid var(--mb-border);border-radius:4px;background:var(--mb-surface);color:var(--mb-muted);font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.logo-picker{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.logo-picker-compact{gap:8px}.logo-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.logo-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.logo-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.logo-picker-preview{display:flex;align-items:center;justify-content:center;min-height:56px;padding:8px;border-radius:4px;background:#f7f7f7}.logo-picker-image{display:block;max-width:100%;max-height:48px;width:auto;height:auto;object-fit:contain}.image-picker{display:flex;flex-direction:column;gap:10px}.image-picker-compact .image-picker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.image-picker-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.image-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.image-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.image-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.image-picker-preview{display:flex;align-items:center;justify-content:center;min-height:72px;padding:8px;border-radius:4px;background:#f7f7f7;overflow:hidden}.image-picker-image{max-width:100%;max-height:72px;object-fit:contain}.image-picker-label{font-size:11px;color:#424242;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.image-picker-hint,.image-picker-loading,.image-picker-error{font-size:12px;color:#666}.image-picker-error{color:#c62828}.image-picker-hint,.image-picker-loading{margin:0 0 10px;line-height:1.45}.image-picker-selected-preview{margin-bottom:10px}.image-picker-selected-image{display:block;max-width:100%;max-height:160px;border-radius:6px;border:1px solid #ddd;object-fit:contain}.image-picker-footer{display:flex;justify-content:flex-start}.image-picker-url-toggle,.image-picker-url-apply{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:6px 10px;font-size:12px;cursor:pointer}.image-picker-url-form{display:flex;gap:8px}.image-picker-url-input{flex:1;padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection{display:flex;flex-direction:column;gap:12px;padding:12px;border:1px solid var(--mb-border, #e8e8e8);border-radius:8px;background:#fafafa}.template-zone-asset-collection-title{margin:0;font-size:14px}.template-zone-asset-collection-intro,.template-zone-asset-collection-hint,.template-zone-asset-collection-empty,.template-zone-asset-collection-error{margin:0;font-size:12px;color:#666;line-height:1.45}.template-zone-asset-collection-error{color:#c62828}.template-zone-asset-collection-field{display:flex;flex-direction:column;gap:6px;font-size:12px}.template-zone-asset-collection-field input{padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection-section{display:flex;flex-direction:column;gap:8px}.template-zone-asset-collection-section-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.template-zone-asset-collection-section-header h5{margin:0;font-size:13px}.template-zone-asset-collection-status{font-size:11px;color:#888}.template-zone-asset-collection-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px}.template-zone-asset-card{display:flex;flex-direction:column;gap:6px;padding:8px;border:1px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff}.template-zone-asset-card img{width:100%;height:72px;object-fit:cover;border-radius:4px;background:#f2f2f2}.template-zone-asset-card span{font-size:11px;color:#424242;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.template-zone-asset-add,.template-zone-asset-remove{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:5px 8px;font-size:11px;cursor:pointer}.template-zone-asset-add:disabled{opacity:.55;cursor:not-allowed}.zone-image-placeholder{padding:16px;border:1px dashed #ccc;border-radius:6px;color:#888;font-size:12px;text-align:center}.logo-picker-label{font-size:11px;font-weight:600;color:var(--mb-text, #18181b)}.zone-stacked-logo{padding:8px 0;text-align:center}.zone-stacked.zone-text{font-size:18px;line-height:1.4;padding:8px 0}.zone-stacked.zone-heading{line-height:1.25;padding:8px 0}.zone-heading[data-heading-level=H1]{font-size:2rem}.zone-heading[data-heading-level=H2]{font-size:1.75rem}.zone-heading[data-heading-level=H3]{font-size:1.5rem}.zone-heading[data-heading-level=H4]{font-size:1.25rem}.zone-heading[data-heading-level=H5]{font-size:1.125rem}.zone-heading[data-heading-level=H6]{font-size:1rem}.zone-text-empty:empty:before{content:attr(data-placeholder);color:#999}.zone-stacked.zone-cta{padding:12px 0}.template-setup-panel{display:flex;flex-direction:column;gap:16px}.template-setup-tools{border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa;padding:0}.template-setup-tools>summary{cursor:pointer;list-style:none;padding:12px 16px;font-size:14px;font-weight:600;color:var(--mb-text)}.template-setup-tools>summary::-webkit-details-marker{display:none}.template-setup-tools>summary:before{content:"▸";display:inline-block;margin-right:8px;color:#57606a}.template-setup-tools[open]>summary:before{content:"▾"}.template-setup-tools-body{display:flex;flex-direction:column;gap:12px;padding:0 16px 16px}.template-setup-tools .figma-import-panel,.template-setup-tools .template-duplicate-panel{margin-bottom:0}.figma-import-panel{margin-bottom:16px;padding:14px 16px;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa}.figma-import-panel h4{margin:0 0 8px;font-size:14px;font-weight:600}.figma-import-hint{margin:0 0 12px;font-size:12px;color:#57606a;line-height:1.45}.figma-import-hint code{font-size:11px}.figma-import-panel label{display:flex;flex-direction:column;gap:4px;margin-bottom:10px;font-size:12px;font-weight:500}.figma-import-panel input[type=text],.figma-import-panel input:not([type]){padding:6px 8px;border:1px solid #d0d7de;border-radius:4px;font-size:13px}.figma-import-button{margin-right:8px;margin-bottom:8px;padding:6px 12px;border:1px solid #d0d7de;border-radius:4px;background:#fff;font-size:13px;cursor:pointer}.figma-import-button:disabled{opacity:.55;cursor:not-allowed}.figma-import-button-primary{background:#1565c0;border-color:#1565c0;color:#fff}.figma-import-preview{margin-top:10px;padding-top:10px;border-top:1px solid #d8dee4}.figma-import-preview-meta{margin:0 0 8px;font-size:12px}.figma-import-zone-list{margin:0 0 10px;padding-left:18px;font-size:12px;line-height:1.5}.figma-import-warning{margin:0 0 8px;font-size:12px;color:#9a3412}.figma-import-checkbox{flex-direction:row!important;align-items:center;gap:8px!important;font-weight:400!important}.figma-import-checkbox input{margin:0}.figma-import-message{margin:8px 0 0;font-size:12px;color:#1a7f37}.figma-import-error{margin-top:8px}.figma-import-saving{margin:8px 0}.template-duplicate-panel{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-duplicate-panel h4{margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-duplicate-hint{margin:0 0 12px;font-size:12px;color:#666;line-height:1.45}.template-duplicate-panel label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-duplicate-panel input,.template-duplicate-panel select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-duplicate-button{margin-top:4px;background:var(--mb-primary, #00755f);color:#fff;border:none;padding:8px 14px;border-radius:4px;cursor:pointer;font-size:13px}.template-duplicate-button:disabled{opacity:.6;cursor:not-allowed}.template-duplicate-message{margin:10px 0 0;font-size:12px;color:#2e7d32;line-height:1.4}.template-duplicate-error{margin:8px 0 0;font-size:12px}.template-selector{margin-bottom:16px;padding:12px;border:1px solid #e8e8e8;border-radius:6px;background:#fcfcfc}.template-selector-label{display:block;margin:0;font-size:12px;color:#555}.template-selector-label select{display:block;width:100%;margin-top:6px;padding:8px 10px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px;background:#fff}.template-selector-hint,.template-selector-status{margin:8px 0 0;font-size:12px;color:#666;line-height:1.4}.template-selector-error{margin:8px 0 0;font-size:12px}.marketing-builder-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;padding:0 4px}.marketing-builder-toolbar-main{display:flex;align-items:center;gap:12px;min-width:0}.marketing-builder-editing-template{font-size:14px;font-weight:600;color:var(--mb-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.marketing-builder-tab-bar{flex-wrap:wrap}.marketing-builder-tabs{display:inline-flex;border:1px solid #d0d0d0;border-radius:6px;overflow:hidden;background:#fff}.marketing-builder-tab{border:none;background:transparent;color:#555;padding:8px 16px;cursor:pointer;font-size:14px;font-weight:500}.marketing-builder-tab+.marketing-builder-tab{border-left:1px solid #d0d0d0}.marketing-builder-tab:hover{background:#f5f5f5}.marketing-builder-tab-active{background:var(--mb-primary);color:#fff}.marketing-builder-tab-active:hover{background:var(--mb-primary-active)}.template-zone-edit-toggle{background:#fff;color:var(--mb-primary);border:1px solid var(--mb-primary);padding:8px 16px;border-radius:4px;cursor:pointer;font-size:14px;font-weight:500}.template-zone-edit-toggle:hover{background:var(--mb-primary-soft)}.template-zone-edit-toggle-active{background:var(--mb-primary);color:#fff}.template-zone-edit-toggle-active:hover{background:var(--mb-primary-active)}.marketing-builder-toolbar-meta{font-size:13px;color:#666}.template-empty-message{border:1px dashed #d0d0d0;border-radius:6px;background:#fafafa;text-align:center}.template-setup-message code{font-size:12px;background:#f5f5f5;padding:2px 4px;border-radius:3px}.email-builder-error{margin-top:8px;padding:8px 12px}.email-builder-actions{display:flex;gap:12px;margin-top:8px;justify-content:flex-end;flex-wrap:wrap}.email-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.email-builder-save:disabled{opacity:.6;cursor:not-allowed}.email-builder-preview{max-width:600px;margin:24px auto 0}.email-builder-preview-label{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;margin-bottom:8px}.email-builder-preview-frame{width:100%;height:500px;border:1px solid #e0e0e0}.email-builder-preview-frame-fill{width:100%;height:100%;min-height:520px;border:1px solid #e0e0e0;background:#fff}.raw-html-editor{width:100%;min-height:400px;font-family:monospace;font-size:13px;padding:12px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.social-builder-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);margin:0 auto;overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text,.social-builder-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text{font-size:16px;line-height:1.5}.asset-zone-structure-content .zone-text,.asset-zone-structure-content .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.asset-zone-structure-content .zone-text{font-size:16px;line-height:1.5}.social-builder-canvas-fill{width:100%;max-width:100%}.social-builder-structure{display:flex;flex-direction:column;gap:12px}.social-builder-error{margin-top:8px;padding:8px 12px}.asset-structure-panel{display:flex;flex-direction:column;gap:12px}.asset-structure-panel-hint{margin:0;font-size:12px;color:#777;line-height:1.5}.asset-zone-structure-warning{margin:0;padding:8px 10px;font-size:12px;line-height:1.4;color:#9a3412;background:#fff7ed;border:1px solid #fed7aa;border-radius:4px}.asset-zone-structure-key-hint{margin:0 0 8px;font-size:12px;color:#777}.asset-zone-structure-key-hint code{font-size:11px}.asset-zone-structure-list{display:flex;flex-direction:column;gap:8px}.asset-zone-structure-row{border:1px solid #e4e4e4;border-radius:6px;overflow:hidden;background:#fff}.asset-zone-structure-header{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;border:none;background:#fafafa;cursor:pointer;text-align:left}.asset-zone-structure-header:hover{background:#f3f3f3}.asset-zone-structure-title{font-weight:600;font-size:13px;color:#333}.asset-zone-structure-type{font-size:11px;color:#888}.asset-zone-structure-chevron{margin-left:auto;color:#888;font-size:12px}.asset-zone-structure-body{padding:12px;border-top:1px solid #ececec;display:flex;flex-direction:column;gap:12px}.asset-zone-structure-content-label{margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#888}.asset-zone-structure-content .asset-zone-layout-fields{margin-top:12px;padding-top:12px;border-top:1px solid #ececec}.asset-structure-panel .asset-zone-layout-grid,.template-admin-properties .asset-zone-layout-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.asset-zone-layout-fields{padding-top:4px;border-top:1px solid #ececec}.asset-zone-layout-fields label{display:block;margin-bottom:0;font-size:11px;color:#666}.asset-zone-layout-fields input,.asset-zone-layout-fields select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:12px}.asset-zone-layout-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.asset-zone-layout-grid-position{margin-top:8px;grid-template-columns:repeat(4,minmax(0,1fr))}.asset-layout-json-preview{border:1px dashed #d0d0d0;border-radius:6px;padding:8px 12px;background:#fafafa}.asset-layout-json-preview summary{cursor:pointer;font-size:12px;color:#666}.asset-layout-json-preview pre{margin:10px 0 0;padding:10px;background:#fff;border:1px solid #ececec;border-radius:4px;font-size:11px;line-height:1.4;overflow:auto;max-height:220px}.social-builder-actions{display:flex;gap:12px;margin-top:16px;justify-content:flex-end;flex-wrap:wrap}.social-builder-actions .saving-status-message,.email-builder-actions .saving-status-message{flex-basis:100%;text-align:right;margin-top:0}.social-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.social-builder-save:disabled{opacity:.6;cursor:not-allowed}.override-banner{background:#fff4e5;border:1px solid #ffb74d;color:#7a4a00;padding:8px 12px;border-radius:4px;font-size:13px;margin-bottom:12px}.template-admin-zone-list,.template-admin-properties{border:1px solid #e0e0e0;border-radius:6px;padding:12px}.template-admin-zone-list h4,.template-admin-properties h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.zone-list-hint,.zone-sort-hint{margin:-4px 0 10px;font-size:11px;color:#888}.zone-layout-fields{margin:12px 0 0;padding-top:12px;border-top:1px solid #ececec}.zone-layout-fields h5{display:none}.zone-layout-center .zone-image-preview,.zone-layout-center .zone-logo-placeholder{display:block;margin-left:auto;margin-right:auto}.zone-layout-right .zone-image-preview,.zone-layout-right .zone-logo-placeholder{display:block;margin-left:auto;margin-right:0}.zone-layout-center .zone-cta-button,.zone-layout-right .zone-cta-button{display:inline-block}.zone-cta-button{cursor:text}.zone-image-collection-hint{margin:-4px 0 10px;font-size:11px;color:#888;line-height:1.4}.zone-list-item{display:flex;align-items:flex-start;gap:8px;width:100%;text-align:left;background:none;border:1px solid transparent;border-radius:4px;padding:8px;margin-bottom:4px;cursor:pointer;-webkit-user-select:none;user-select:none}.zone-list-delete{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin-top:1px;padding:0;border:none;border-radius:4px;background:transparent;color:#999;cursor:pointer}.zone-list-delete:hover{background:#ffebee;color:#d32f2f}.zone-list-delete:focus-visible{outline:2px solid var(--mb-primary);outline-offset:1px}.zone-list-item:active{cursor:grabbing}.zone-list-item-content{display:flex;flex-direction:column;align-items:flex-start;min-width:0;flex:1}.zone-list-drag-handle{color:#aaa;font-size:12px;line-height:1;padding-top:2px;cursor:grab}.zone-list-item-dragging{opacity:.45}.zone-list-item-drag-over{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item:hover{background:#f5f5f5}.zone-list-item-active{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item-type{font-size:11px;color:#888}.zone-list-item-lock{font-size:10px;color:#d32f2f;text-transform:uppercase}.zone-list-add{width:100%;border:1px dashed #b0b0b0;background:none;padding:8px;border-radius:4px;cursor:pointer;color:#555;margin-bottom:4px}.zone-list-starter{border-color:var(--mb-primary);color:var(--mb-primary)}.template-admin-properties label{display:block;margin-bottom:10px;font-size:12px;color:#555}.zone-image-selected{display:flex;flex-direction:column;gap:8px;width:100%}.zone-image-preview{width:100%;max-height:280px;object-fit:cover;border-radius:4px;border:1px solid #e0e0e0}.social-builder-canvas .zone-image-preview{width:100%;height:100%;max-height:none;object-fit:contain;border-radius:0;border:0}.zone-image-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.zone-image-clear{border:1px solid #d32f2f;background:#fff;color:#d32f2f;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker{position:relative}.asset-picker-compact .asset-picker-trigger{padding:6px 10px;font-size:12px}.asset-picker-mode-tabs{display:flex;gap:4px;margin-bottom:10px}.asset-picker-mode-tab{flex:1;border:1px solid #d0d0d0;background:#fafafa;color:#555;padding:6px 8px;border-radius:4px;cursor:pointer;font-size:12px}.asset-picker-mode-tab-active{border-color:var(--mb-primary);background:var(--mb-primary-soft);color:var(--mb-primary-active)}.asset-picker-url-form label{display:block;margin-bottom:8px;font-size:12px;color:#555}.asset-picker-url-apply{width:100%;border:none;background:var(--mb-primary);color:#fff;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker-url-apply:disabled{opacity:.6;cursor:not-allowed}.asset-picker-loading,.asset-picker-error{font-size:12px;margin-bottom:8px}.asset-picker-error{color:#b71c1c}.template-admin-properties input,.template-admin-properties select,.template-admin-properties textarea{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.checkbox-label{display:flex!important;align-items:center;gap:6px}.checkbox-label input{width:auto!important;margin:0!important}.position-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.zone-remove{background:none;border:1px solid #d32f2f;color:#d32f2f;padding:6px 12px;border-radius:4px;cursor:pointer;margin-top:8px}.no-zone-selected{color:#888;font-size:13px}.template-admin-preview-canvas{border:1px solid #eee;background:#fafafa;margin-bottom:12px;overflow:hidden}.template-admin-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;width:100%;max-width:280px}.template-admin-save:disabled{opacity:.6;cursor:not-allowed}.template-admin-save-error{margin:8px 0 0;font-size:13px}.zone{box-sizing:border-box}.zone-locked{outline:1px dashed transparent}.zone-text{outline:1px dashed transparent;cursor:text}.zone-text:hover{outline-color:#c9c9c9}.zone-text:focus{outline:1px solid var(--mb-primary);outline-offset:2px}.zone-image{background-color:#f5f5f5;display:flex;align-items:center;justify-content:center;overflow:hidden}.zone-cta button{cursor:pointer;font-size:14px}.zone-html-editor{width:100%;min-height:80px;font-family:monospace;font-size:12px;padding:8px;border:1px solid #d0d0d0;border-radius:4px}.zone-html-preview{margin-top:8px;border:1px dashed #d0d0d0;padding:8px}.zone-html-locked{pointer-events:none}.asset-picker-trigger{border:1px dashed #b0b0b0;background:transparent;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px;color:#555}.asset-picker-panel{position:absolute;z-index:10;background:#fff;border:1px solid #d0d0d0;border-radius:6px;box-shadow:0 4px 16px #0000001f;padding:12px;width:320px}.asset-picker-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;display:flex;align-items:center;justify-content:center;padding:24px}.asset-picker-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;border:none;padding:0;background:rgba(0,0,0,.4);cursor:pointer}.asset-picker-panel-overlay{position:relative;z-index:1;width:min(720px,100%);max-height:min(80vh,720px);overflow:auto}.asset-picker-panel-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.asset-picker-close{border:1px solid #d0d0d0;background:#fff;border-radius:4px;padding:4px 10px;cursor:pointer;font-size:12px}.template-allowed-assets .asset-picker{margin-bottom:12px}.asset-picker-search{width:100%;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;margin-bottom:8px}.asset-picker-hint{font-size:12px;color:#888;margin-bottom:8px}.asset-picker-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-height:240px;overflow-y:auto}.asset-picker-panel-overlay .asset-picker-grid{grid-template-columns:repeat(4,1fr);max-height:420px}.asset-picker-thumb{border:none;background:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;font-size:11px}.asset-picker-thumb img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px}.asset-picker-empty{font-size:12px;color:#888;padding:8px}.eject-button{background:transparent;border:1px solid #d32f2f;color:#d32f2f;padding:10px 16px;border-radius:4px;cursor:pointer;font-size:13px}.eject-modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;z-index:100}.eject-modal{background:#fff;border-radius:8px;padding:24px;width:420px;max-width:90vw}.eject-modal h3{margin:0 0 8px;font-size:16px;color:#b71c1c}.eject-modal p{font-size:13px;color:#555;line-height:1.5}.eject-modal textarea{width:100%;min-height:70px;margin:12px 0;padding:8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.eject-modal-actions{display:flex;justify-content:flex-end;gap:8px}.eject-confirm{background:#d32f2f;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer}.eject-confirm:disabled{opacity:.5;cursor:not-allowed}.designer-create-banner{margin:12px 0 16px;padding:12px 14px;border:.5px solid #d3d1c7;border-radius:8px;background:#f8f7f4;display:flex;flex-direction:column;gap:10px;align-items:flex-start}.designer-create-banner p{margin:0;font-size:13px;color:#2c2c2a}.designer-asset-builder{display:flex;flex-direction:column;gap:8px;flex:1 1 auto;min-height:0}.designer-asset-builder .chd-root{flex:1 1 auto;min-height:0;height:auto}.designer-asset-builder-actions{display:flex;align-items:center;gap:10px}.chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:100%;min-height:calc(100dvh - 12px);box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:0;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;min-width:56px;background:#000000;color:#fff;border-radius:4px;padding:5px 10px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-btn--accent{background:var(--chd-accent);border-color:var(--chd-accent);color:#fff}.chd-btn--accent:hover:not(:disabled){background:#1db86a;border-color:#1db86a;color:#fff}.chd-generate{position:relative;display:flex;align-items:center;gap:8px}.chd-generate-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:40;min-width:180px;padding:4px;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 24px #0000001f}.chd-generate-option{display:flex;flex-direction:column;align-items:flex-start;gap:1px;width:100%;border:none;background:transparent;text-align:left;padding:8px 10px;border-radius:6px;cursor:pointer;color:var(--chd-text);font:inherit}.chd-generate-option span{font-size:11px;color:var(--chd-muted)}.chd-generate-option:hover:not(:disabled){background:#e8f6ee}.chd-generate-error{font-size:11px;color:#a32d2d;white-space:nowrap}.chd-artboard--capturing{overflow:hidden}.chd-artboard--capturing .chd-selection-box,.chd-artboard--capturing .chd-selection-outline,.chd-artboard--capturing .chd-handle,.chd-artboard--capturing .chd-layer-lock,.chd-artboard--capturing .chd-artboard-page{display:none!important}.chd-toolbar-field{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--chd-muted)}.chd-toolbar-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;max-width:180px}.chd-toolbar-size{font-size:11px;color:var(--chd-muted);white-space:nowrap}.chd-pin-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 8px;margin-top:4px}.chd-field-hint{margin:6px 0 0;font-size:11px;color:var(--chd-muted);line-height:1.35}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layers-panel--admin .chd-layer-list-item{grid-template-columns:auto 1fr auto auto auto}.chd-layer-list-item--dragging{opacity:.45}.chd-layer-list-item--drag-over{outline:1px solid var(--chd-accent);background:#e8f6ee}.chd-layer-drag-handle{color:var(--chd-muted);font-size:11px;line-height:1;padding:0 4px;cursor:grab;-webkit-user-select:none;user-select:none}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{flex-direction:row;align-items:center;gap:8px;color:var(--chd-text)}.chd-field-checkbox input{width:auto}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:linear-gradient(45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,linear-gradient(-45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,#f0eee8;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:visible}.chd-artboard-page{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;box-shadow:0 0 0 1px #00000014}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-lock{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;left:3px;top:3px;z-index:6;display:flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:4px;background:rgba(255,255,255,.92);border:.5px solid var(--chd-border);color:var(--chd-text);pointer-events:auto;cursor:pointer;padding:0;box-shadow:0 1px 2px #0000001f}.chd-layer-lock svg{display:block}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function fw(e, t) {
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
function pw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mh = { exports: {} }, Va = {}, Oh = { exports: {} }, J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi = Symbol.for("react.element"), mw = Symbol.for("react.portal"), hw = Symbol.for("react.fragment"), gw = Symbol.for("react.strict_mode"), yw = Symbol.for("react.profiler"), vw = Symbol.for("react.provider"), ww = Symbol.for("react.context"), Tw = Symbol.for("react.forward_ref"), Sw = Symbol.for("react.suspense"), kw = Symbol.for("react.memo"), Ew = Symbol.for("react.lazy"), gp = Symbol.iterator;
function Aw(e) {
  return e === null || typeof e != "object" ? null : (e = gp && e[gp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var $h = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ih = Object.assign, Dh = {};
function No(e, t, n) {
  this.props = e, this.context = t, this.refs = Dh, this.updater = n || $h;
}
No.prototype.isReactComponent = {};
No.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
No.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hh() {
}
Hh.prototype = No.prototype;
function ud(e, t, n) {
  this.props = e, this.context = t, this.refs = Dh, this.updater = n || $h;
}
var dd = ud.prototype = new Hh();
dd.constructor = ud;
Ih(dd, No.prototype);
dd.isPureReactComponent = !0;
var yp = Array.isArray, Fh = Object.prototype.hasOwnProperty, fd = { current: null }, Uh = { key: !0, ref: !0, __self: !0, __source: !0 };
function jh(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Fh.call(t, r) && !Uh.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Vi, type: e, key: i, ref: s, props: o, _owner: fd.current };
}
function Cw(e, t) {
  return { $$typeof: Vi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function pd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vi;
}
function bw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var vp = /\/+/g;
function lc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? bw("" + e.key) : t.toString(36);
}
function Ks(e, t, n, r, o) {
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
          case Vi:
          case mw:
            s = !0;
        }
    }
  if (s)
    return s = e, o = o(s), e = r === "" ? "." + lc(s, 0) : r, yp(o) ? (n = "", e != null && (n = e.replace(vp, "$&/") + "/"), Ks(o, t, n, "", function(c) {
      return c;
    })) : o != null && (pd(o) && (o = Cw(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(vp, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", yp(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + lc(i, a);
      s += Ks(i, t, n, l, o);
    }
  else if (l = Aw(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, l = r + lc(i, a++), s += Ks(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function fs(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ks(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Nw(e) {
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
var ut = { current: null }, Vs = { transition: null }, Pw = { ReactCurrentDispatcher: ut, ReactCurrentBatchConfig: Vs, ReactCurrentOwner: fd };
function Bh() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = { map: fs, forEach: function(e, t, n) {
  fs(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return fs(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return fs(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!pd(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
J.Component = No;
J.Fragment = hw;
J.Profiler = yw;
J.PureComponent = ud;
J.StrictMode = gw;
J.Suspense = Sw;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pw;
J.act = Bh;
J.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ih({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = fd.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (l in t)
      Fh.call(t, l) && !Uh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
  return { $$typeof: Vi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
J.createContext = function(e) {
  return e = { $$typeof: ww, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vw, _context: e }, e.Consumer = e;
};
J.createElement = jh;
J.createFactory = function(e) {
  var t = jh.bind(null, e);
  return t.type = e, t;
};
J.createRef = function() {
  return { current: null };
};
J.forwardRef = function(e) {
  return { $$typeof: Tw, render: e };
};
J.isValidElement = pd;
J.lazy = function(e) {
  return { $$typeof: Ew, _payload: { _status: -1, _result: e }, _init: Nw };
};
J.memo = function(e, t) {
  return { $$typeof: kw, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function(e) {
  var t = Vs.transition;
  Vs.transition = {};
  try {
    e();
  } finally {
    Vs.transition = t;
  }
};
J.unstable_act = Bh;
J.useCallback = function(e, t) {
  return ut.current.useCallback(e, t);
};
J.useContext = function(e) {
  return ut.current.useContext(e);
};
J.useDebugValue = function() {
};
J.useDeferredValue = function(e) {
  return ut.current.useDeferredValue(e);
};
J.useEffect = function(e, t) {
  return ut.current.useEffect(e, t);
};
J.useId = function() {
  return ut.current.useId();
};
J.useImperativeHandle = function(e, t, n) {
  return ut.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function(e, t) {
  return ut.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function(e, t) {
  return ut.current.useLayoutEffect(e, t);
};
J.useMemo = function(e, t) {
  return ut.current.useMemo(e, t);
};
J.useReducer = function(e, t, n) {
  return ut.current.useReducer(e, t, n);
};
J.useRef = function(e) {
  return ut.current.useRef(e);
};
J.useState = function(e) {
  return ut.current.useState(e);
};
J.useSyncExternalStore = function(e, t, n) {
  return ut.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function() {
  return ut.current.useTransition();
};
J.version = "18.3.1";
Oh.exports = J;
var E = Oh.exports;
const xw = /* @__PURE__ */ pw(E), Jc = /* @__PURE__ */ fw({
  __proto__: null,
  default: xw
}, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lw = E, _w = Symbol.for("react.element"), zw = Symbol.for("react.fragment"), Rw = Object.prototype.hasOwnProperty, Mw = Lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ow = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kh(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Rw.call(t, r) && !Ow.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: _w, type: e, key: i, ref: s, props: o, _owner: Mw.current };
}
Va.Fragment = zw;
Va.jsx = Kh;
Va.jsxs = Kh;
Mh.exports = Va;
var md = Mh.exports;
const We = md.Fragment, d = md.jsx, A = md.jsxs;
var Vh = { exports: {} }, Pt = {}, Zh = { exports: {} }, Wh = {};
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
  function t($, O) {
    var w = $.length;
    $.push(O);
    e:
      for (; 0 < w; ) {
        var x = w - 1 >>> 1, j = $[x];
        if (0 < o(j, O))
          $[x] = O, $[w] = j, w = x;
        else
          break e;
      }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0)
      return null;
    var O = $[0], w = $.pop();
    if (w !== O) {
      $[0] = w;
      e:
        for (var x = 0, j = $.length, Q = j >>> 1; x < Q; ) {
          var V = 2 * (x + 1) - 1, $e = $[V], be = V + 1, Ne = $[be];
          if (0 > o($e, w))
            be < j && 0 > o(Ne, $e) ? ($[x] = Ne, $[be] = w, x = be) : ($[x] = $e, $[V] = w, x = V);
          else if (be < j && 0 > o(Ne, w))
            $[x] = Ne, $[be] = w, x = be;
          else
            break e;
        }
    }
    return O;
  }
  function o($, O) {
    var w = $.sortIndex - O.sortIndex;
    return w !== 0 ? w : $.id - O.id;
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
  var l = [], c = [], f = 1, u = null, p = 3, v = !1, k = !1, T = !1, _ = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g($) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null)
        r(c);
      else if (O.startTime <= $)
        r(c), O.sortIndex = O.expirationTime, t(l, O);
      else
        break;
      O = n(c);
    }
  }
  function b($) {
    if (T = !1, g($), !k)
      if (n(l) !== null)
        k = !0, Ee(C);
      else {
        var O = n(c);
        O !== null && W(b, O.startTime - $);
      }
  }
  function C($, O) {
    k = !1, T && (T = !1, h(L), L = -1), v = !0;
    var w = p;
    try {
      for (g(O), u = n(l); u !== null && (!(u.expirationTime > O) || $ && !D()); ) {
        var x = u.callback;
        if (typeof x == "function") {
          u.callback = null, p = u.priorityLevel;
          var j = x(u.expirationTime <= O);
          O = e.unstable_now(), typeof j == "function" ? u.callback = j : u === n(l) && r(l), g(O);
        } else
          r(l);
        u = n(l);
      }
      if (u !== null)
        var Q = !0;
      else {
        var V = n(c);
        V !== null && W(b, V.startTime - O), Q = !1;
      }
      return Q;
    } finally {
      u = null, p = w, v = !1;
    }
  }
  var N = !1, S = null, L = -1, U = 5, R = -1;
  function D() {
    return !(e.unstable_now() - R < U);
  }
  function z() {
    if (S !== null) {
      var $ = e.unstable_now();
      R = $;
      var O = !0;
      try {
        O = S(!0, $);
      } finally {
        O ? Y() : (N = !1, S = null);
      }
    } else
      N = !1;
  }
  var Y;
  if (typeof m == "function")
    Y = function() {
      m(z);
    };
  else if (typeof MessageChannel < "u") {
    var Re = new MessageChannel(), qe = Re.port2;
    Re.port1.onmessage = z, Y = function() {
      qe.postMessage(null);
    };
  } else
    Y = function() {
      _(z, 0);
    };
  function Ee($) {
    S = $, N || (N = !0, Y());
  }
  function W($, O) {
    L = _(function() {
      $(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    k || v || (k = !0, Ee(C));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function($) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = p;
    }
    var w = p;
    p = O;
    try {
      return $();
    } finally {
      p = w;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function($, O) {
    switch ($) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        $ = 3;
    }
    var w = p;
    p = $;
    try {
      return O();
    } finally {
      p = w;
    }
  }, e.unstable_scheduleCallback = function($, O, w) {
    var x = e.unstable_now();
    switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? x + w : x) : w = x, $) {
      case 1:
        var j = -1;
        break;
      case 2:
        j = 250;
        break;
      case 5:
        j = 1073741823;
        break;
      case 4:
        j = 1e4;
        break;
      default:
        j = 5e3;
    }
    return j = w + j, $ = { id: f++, callback: O, priorityLevel: $, startTime: w, expirationTime: j, sortIndex: -1 }, w > x ? ($.sortIndex = w, t(c, $), n(l) === null && $ === n(c) && (T ? (h(L), L = -1) : T = !0, W(b, w - x))) : ($.sortIndex = j, t(l, $), k || v || (k = !0, Ee(C))), $;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function($) {
    var O = p;
    return function() {
      var w = p;
      p = O;
      try {
        return $.apply(this, arguments);
      } finally {
        p = w;
      }
    };
  };
})(Wh);
Zh.exports = Wh;
var $w = Zh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iw = E, Nt = $w;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Yh = /* @__PURE__ */ new Set(), yi = {};
function Pr(e, t) {
  po(e, t), po(e + "Capture", t);
}
function po(e, t) {
  for (yi[e] = t, e = 0; e < t.length; e++)
    Yh.add(t[e]);
}
var En = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qc = Object.prototype.hasOwnProperty, Dw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wp = {}, Tp = {};
function Hw(e) {
  return Qc.call(Tp, e) ? !0 : Qc.call(wp, e) ? !1 : Dw.test(e) ? Tp[e] = !0 : (wp[e] = !0, !1);
}
function Fw(e, t, n, r) {
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
function Uw(e, t, n, r) {
  if (t === null || typeof t > "u" || Fw(e, t, n, r))
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
function dt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Je[e] = new dt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Je[t] = new dt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Je[e] = new dt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Je[e] = new dt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Je[e] = new dt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Je[e] = new dt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Je[e] = new dt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Je[e] = new dt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Je[e] = new dt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hd = /[\-:]([a-z])/g;
function gd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    hd,
    gd
  );
  Je[t] = new dt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(hd, gd);
  Je[t] = new dt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(hd, gd);
  Je[t] = new dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Je[e] = new dt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Je.xlinkHref = new dt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Je[e] = new dt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yd(e, t, n, r) {
  var o = Je.hasOwnProperty(t) ? Je[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Uw(t, n, o, r) && (n = null), r || o === null ? Hw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xn = Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ps = Symbol.for("react.element"), Kr = Symbol.for("react.portal"), Vr = Symbol.for("react.fragment"), vd = Symbol.for("react.strict_mode"), qc = Symbol.for("react.profiler"), Gh = Symbol.for("react.provider"), Xh = Symbol.for("react.context"), wd = Symbol.for("react.forward_ref"), eu = Symbol.for("react.suspense"), tu = Symbol.for("react.suspense_list"), Td = Symbol.for("react.memo"), $n = Symbol.for("react.lazy"), Jh = Symbol.for("react.offscreen"), Sp = Symbol.iterator;
function Fo(e) {
  return e === null || typeof e != "object" ? null : (e = Sp && e[Sp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, cc;
function Qo(e) {
  if (cc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      cc = t && t[1] || "";
    }
  return `
` + cc + e;
}
var uc = !1;
function dc(e, t) {
  if (!e || uc)
    return "";
  uc = !0;
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
    uc = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Qo(e) : "";
}
function jw(e) {
  switch (e.tag) {
    case 5:
      return Qo(e.type);
    case 16:
      return Qo("Lazy");
    case 13:
      return Qo("Suspense");
    case 19:
      return Qo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = dc(e.type, !1), e;
    case 11:
      return e = dc(e.type.render, !1), e;
    case 1:
      return e = dc(e.type, !0), e;
    default:
      return "";
  }
}
function nu(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Vr:
      return "Fragment";
    case Kr:
      return "Portal";
    case qc:
      return "Profiler";
    case vd:
      return "StrictMode";
    case eu:
      return "Suspense";
    case tu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xh:
        return (e.displayName || "Context") + ".Consumer";
      case Gh:
        return (e._context.displayName || "Context") + ".Provider";
      case wd:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Td:
        return t = e.displayName || null, t !== null ? t : nu(e.type) || "Memo";
      case $n:
        t = e._payload, e = e._init;
        try {
          return nu(e(t));
        } catch {
        }
    }
  return null;
}
function Bw(e) {
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
      return nu(t);
    case 8:
      return t === vd ? "StrictMode" : "Mode";
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
function er(e) {
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
function Qh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Kw(e) {
  var t = Qh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ms(e) {
  e._valueTracker || (e._valueTracker = Kw(e));
}
function qh(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Qh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function la(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ru(e, t) {
  var n = t.checked;
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function kp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = er(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function eg(e, t) {
  t = t.checked, t != null && yd(e, "checked", t, !1);
}
function ou(e, t) {
  eg(e, t);
  var n = er(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? iu(e, t.type, n) : t.hasOwnProperty("defaultValue") && iu(e, t.type, er(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ep(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function iu(e, t, n) {
  (t !== "number" || la(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var qo = Array.isArray;
function oo(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + er(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function su(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(I(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ap(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(I(92));
      if (qo(n)) {
        if (1 < n.length)
          throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: er(n) };
}
function tg(e, t) {
  var n = er(t.value), r = er(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Cp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ng(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function au(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ng(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hs, rg = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (hs = hs || document.createElement("div"), hs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hs.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function vi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ii = {
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
}, Vw = ["Webkit", "ms", "Moz", "O"];
Object.keys(ii).forEach(function(e) {
  Vw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ii[t] = ii[e];
  });
});
function og(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ii.hasOwnProperty(e) && ii[e] ? ("" + t).trim() : t + "px";
}
function ig(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = og(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Zw = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function lu(e, t) {
  if (t) {
    if (Zw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(I(62));
  }
}
function cu(e, t) {
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
var uu = null;
function Sd(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var du = null, io = null, so = null;
function bp(e) {
  if (e = Yi(e)) {
    if (typeof du != "function")
      throw Error(I(280));
    var t = e.stateNode;
    t && (t = Xa(t), du(e.stateNode, e.type, t));
  }
}
function sg(e) {
  io ? so ? so.push(e) : so = [e] : io = e;
}
function ag() {
  if (io) {
    var e = io, t = so;
    if (so = io = null, bp(e), t)
      for (e = 0; e < t.length; e++)
        bp(t[e]);
  }
}
function lg(e, t) {
  return e(t);
}
function cg() {
}
var fc = !1;
function ug(e, t, n) {
  if (fc)
    return e(t, n);
  fc = !0;
  try {
    return lg(e, t, n);
  } finally {
    fc = !1, (io !== null || so !== null) && (cg(), ag());
  }
}
function wi(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Xa(n);
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
    throw Error(I(231, t, typeof n));
  return n;
}
var fu = !1;
if (En)
  try {
    var Uo = {};
    Object.defineProperty(Uo, "passive", { get: function() {
      fu = !0;
    } }), window.addEventListener("test", Uo, Uo), window.removeEventListener("test", Uo, Uo);
  } catch {
    fu = !1;
  }
function Ww(e, t, n, r, o, i, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var si = !1, ca = null, ua = !1, pu = null, Yw = { onError: function(e) {
  si = !0, ca = e;
} };
function Gw(e, t, n, r, o, i, s, a, l) {
  si = !1, ca = null, Ww.apply(Yw, arguments);
}
function Xw(e, t, n, r, o, i, s, a, l) {
  if (Gw.apply(this, arguments), si) {
    if (si) {
      var c = ca;
      si = !1, ca = null;
    } else
      throw Error(I(198));
    ua || (ua = !0, pu = c);
  }
}
function xr(e) {
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
function dg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Np(e) {
  if (xr(e) !== e)
    throw Error(I(188));
}
function Jw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = xr(e), t === null)
      throw Error(I(188));
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
          return Np(o), e;
        if (i === r)
          return Np(o), t;
        i = i.sibling;
      }
      throw Error(I(188));
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
          throw Error(I(189));
      }
    }
    if (n.alternate !== r)
      throw Error(I(190));
  }
  if (n.tag !== 3)
    throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function fg(e) {
  return e = Jw(e), e !== null ? pg(e) : null;
}
function pg(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = pg(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var mg = Nt.unstable_scheduleCallback, Pp = Nt.unstable_cancelCallback, Qw = Nt.unstable_shouldYield, qw = Nt.unstable_requestPaint, Ae = Nt.unstable_now, eT = Nt.unstable_getCurrentPriorityLevel, kd = Nt.unstable_ImmediatePriority, hg = Nt.unstable_UserBlockingPriority, da = Nt.unstable_NormalPriority, tT = Nt.unstable_LowPriority, gg = Nt.unstable_IdlePriority, Za = null, un = null;
function nT(e) {
  if (un && typeof un.onCommitFiberRoot == "function")
    try {
      un.onCommitFiberRoot(Za, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Yt = Math.clz32 ? Math.clz32 : iT, rT = Math.log, oT = Math.LN2;
function iT(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (rT(e) / oT | 0) | 0;
}
var gs = 64, ys = 4194304;
function ei(e) {
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
function fa(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = ei(a) : (i &= s, i !== 0 && (r = ei(i)));
  } else
    s = n & ~o, s !== 0 ? r = ei(s) : i !== 0 && (r = ei(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Yt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function sT(e, t) {
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
function aT(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Yt(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = sT(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function mu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function yg() {
  var e = gs;
  return gs <<= 1, !(gs & 4194240) && (gs = 64), e;
}
function pc(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Zi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Yt(t), e[t] = n;
}
function lT(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Yt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Ed(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Yt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var se = 0;
function vg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var wg, Ad, Tg, Sg, kg, hu = !1, vs = [], Kn = null, Vn = null, Zn = null, Ti = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new Map(), Dn = [], cT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function xp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kn = null;
      break;
    case "dragenter":
    case "dragleave":
      Vn = null;
      break;
    case "mouseover":
    case "mouseout":
      Zn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ti.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Si.delete(t.pointerId);
  }
}
function jo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Yi(t), t !== null && Ad(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function uT(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Kn = jo(Kn, e, t, n, r, o), !0;
    case "dragenter":
      return Vn = jo(Vn, e, t, n, r, o), !0;
    case "mouseover":
      return Zn = jo(Zn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ti.set(i, jo(Ti.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Si.set(i, jo(Si.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Eg(e) {
  var t = hr(e.target);
  if (t !== null) {
    var n = xr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = dg(n), t !== null) {
          e.blockedOn = t, kg(e.priority, function() {
            Tg(n);
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
function Zs(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      uu = r, n.target.dispatchEvent(r), uu = null;
    } else
      return t = Yi(n), t !== null && Ad(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Lp(e, t, n) {
  Zs(e) && n.delete(t);
}
function dT() {
  hu = !1, Kn !== null && Zs(Kn) && (Kn = null), Vn !== null && Zs(Vn) && (Vn = null), Zn !== null && Zs(Zn) && (Zn = null), Ti.forEach(Lp), Si.forEach(Lp);
}
function Bo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, hu || (hu = !0, Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, dT)));
}
function ki(e) {
  function t(o) {
    return Bo(o, e);
  }
  if (0 < vs.length) {
    Bo(vs[0], e);
    for (var n = 1; n < vs.length; n++) {
      var r = vs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Kn !== null && Bo(Kn, e), Vn !== null && Bo(Vn, e), Zn !== null && Bo(Zn, e), Ti.forEach(t), Si.forEach(t), n = 0; n < Dn.length; n++)
    r = Dn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dn.length && (n = Dn[0], n.blockedOn === null); )
    Eg(n), n.blockedOn === null && Dn.shift();
}
var ao = xn.ReactCurrentBatchConfig, pa = !0;
function fT(e, t, n, r) {
  var o = se, i = ao.transition;
  ao.transition = null;
  try {
    se = 1, Cd(e, t, n, r);
  } finally {
    se = o, ao.transition = i;
  }
}
function pT(e, t, n, r) {
  var o = se, i = ao.transition;
  ao.transition = null;
  try {
    se = 4, Cd(e, t, n, r);
  } finally {
    se = o, ao.transition = i;
  }
}
function Cd(e, t, n, r) {
  if (pa) {
    var o = gu(e, t, n, r);
    if (o === null)
      Ec(e, t, r, ma, n), xp(e, r);
    else if (uT(o, e, t, n, r))
      r.stopPropagation();
    else if (xp(e, r), t & 4 && -1 < cT.indexOf(e)) {
      for (; o !== null; ) {
        var i = Yi(o);
        if (i !== null && wg(i), i = gu(e, t, n, r), i === null && Ec(e, t, r, ma, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Ec(e, t, r, null, n);
  }
}
var ma = null;
function gu(e, t, n, r) {
  if (ma = null, e = Sd(r), e = hr(e), e !== null)
    if (t = xr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = dg(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return ma = e, null;
}
function Ag(e) {
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
      switch (eT()) {
        case kd:
          return 1;
        case hg:
          return 4;
        case da:
        case tT:
          return 16;
        case gg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Un = null, bd = null, Ws = null;
function Cg() {
  if (Ws)
    return Ws;
  var e, t = bd, n = t.length, r, o = "value" in Un ? Un.value : Un.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ;
  return Ws = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ys(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ws() {
  return !0;
}
function _p() {
  return !1;
}
function xt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ws : _p, this.isPropagationStopped = _p, this;
  }
  return he(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ws);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ws);
  }, persist: function() {
  }, isPersistent: ws }), t;
}
var Po = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Nd = xt(Po), Wi = he({}, Po, { view: 0, detail: 0 }), mT = xt(Wi), mc, hc, Ko, Wa = he({}, Wi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ko && (Ko && e.type === "mousemove" ? (mc = e.screenX - Ko.screenX, hc = e.screenY - Ko.screenY) : hc = mc = 0, Ko = e), mc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : hc;
} }), zp = xt(Wa), hT = he({}, Wa, { dataTransfer: 0 }), gT = xt(hT), yT = he({}, Wi, { relatedTarget: 0 }), gc = xt(yT), vT = he({}, Po, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), wT = xt(vT), TT = he({}, Po, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ST = xt(TT), kT = he({}, Po, { data: 0 }), Rp = xt(kT), ET = {
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
}, AT = {
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
}, CT = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function bT(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = CT[e]) ? !!t[e] : !1;
}
function Pd() {
  return bT;
}
var NT = he({}, Wi, { key: function(e) {
  if (e.key) {
    var t = ET[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ys(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? AT[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pd, charCode: function(e) {
  return e.type === "keypress" ? Ys(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ys(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), PT = xt(NT), xT = he({}, Wa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Mp = xt(xT), LT = he({}, Wi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pd }), _T = xt(LT), zT = he({}, Po, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), RT = xt(zT), MT = he({}, Wa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), OT = xt(MT), $T = [9, 13, 27, 32], xd = En && "CompositionEvent" in window, ai = null;
En && "documentMode" in document && (ai = document.documentMode);
var IT = En && "TextEvent" in window && !ai, bg = En && (!xd || ai && 8 < ai && 11 >= ai), Op = String.fromCharCode(32), $p = !1;
function Ng(e, t) {
  switch (e) {
    case "keyup":
      return $T.indexOf(t.keyCode) !== -1;
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
function Pg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Zr = !1;
function DT(e, t) {
  switch (e) {
    case "compositionend":
      return Pg(t);
    case "keypress":
      return t.which !== 32 ? null : ($p = !0, Op);
    case "textInput":
      return e = t.data, e === Op && $p ? null : e;
    default:
      return null;
  }
}
function HT(e, t) {
  if (Zr)
    return e === "compositionend" || !xd && Ng(e, t) ? (e = Cg(), Ws = bd = Un = null, Zr = !1, e) : null;
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
      return bg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var FT = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ip(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!FT[e.type] : t === "textarea";
}
function xg(e, t, n, r) {
  sg(r), t = ha(t, "onChange"), 0 < t.length && (n = new Nd("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var li = null, Ei = null;
function UT(e) {
  Fg(e, 0);
}
function Ya(e) {
  var t = Gr(e);
  if (qh(t))
    return e;
}
function jT(e, t) {
  if (e === "change")
    return t;
}
var Lg = !1;
if (En) {
  var yc;
  if (En) {
    var vc = "oninput" in document;
    if (!vc) {
      var Dp = document.createElement("div");
      Dp.setAttribute("oninput", "return;"), vc = typeof Dp.oninput == "function";
    }
    yc = vc;
  } else
    yc = !1;
  Lg = yc && (!document.documentMode || 9 < document.documentMode);
}
function Hp() {
  li && (li.detachEvent("onpropertychange", _g), Ei = li = null);
}
function _g(e) {
  if (e.propertyName === "value" && Ya(Ei)) {
    var t = [];
    xg(t, Ei, e, Sd(e)), ug(UT, t);
  }
}
function BT(e, t, n) {
  e === "focusin" ? (Hp(), li = t, Ei = n, li.attachEvent("onpropertychange", _g)) : e === "focusout" && Hp();
}
function KT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ya(Ei);
}
function VT(e, t) {
  if (e === "click")
    return Ya(t);
}
function ZT(e, t) {
  if (e === "input" || e === "change")
    return Ya(t);
}
function WT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Xt = typeof Object.is == "function" ? Object.is : WT;
function Ai(e, t) {
  if (Xt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Qc.call(t, o) || !Xt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Fp(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Up(e, t) {
  var n = Fp(e);
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
    n = Fp(n);
  }
}
function zg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Rg() {
  for (var e = window, t = la(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = la(e.document);
  }
  return t;
}
function Ld(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function YT(e) {
  var t = Rg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && zg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ld(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Up(n, i);
        var s = Up(
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
var GT = En && "documentMode" in document && 11 >= document.documentMode, Wr = null, yu = null, ci = null, vu = !1;
function jp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vu || Wr == null || Wr !== la(r) || (r = Wr, "selectionStart" in r && Ld(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ci && Ai(ci, r) || (ci = r, r = ha(yu, "onSelect"), 0 < r.length && (t = new Nd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Wr)));
}
function Ts(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Yr = { animationend: Ts("Animation", "AnimationEnd"), animationiteration: Ts("Animation", "AnimationIteration"), animationstart: Ts("Animation", "AnimationStart"), transitionend: Ts("Transition", "TransitionEnd") }, wc = {}, Mg = {};
En && (Mg = document.createElement("div").style, "AnimationEvent" in window || (delete Yr.animationend.animation, delete Yr.animationiteration.animation, delete Yr.animationstart.animation), "TransitionEvent" in window || delete Yr.transitionend.transition);
function Ga(e) {
  if (wc[e])
    return wc[e];
  if (!Yr[e])
    return e;
  var t = Yr[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Mg)
      return wc[e] = t[n];
  return e;
}
var Og = Ga("animationend"), $g = Ga("animationiteration"), Ig = Ga("animationstart"), Dg = Ga("transitionend"), Hg = /* @__PURE__ */ new Map(), Bp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function or(e, t) {
  Hg.set(e, t), Pr(t, [e]);
}
for (var Tc = 0; Tc < Bp.length; Tc++) {
  var Sc = Bp[Tc], XT = Sc.toLowerCase(), JT = Sc[0].toUpperCase() + Sc.slice(1);
  or(XT, "on" + JT);
}
or(Og, "onAnimationEnd");
or($g, "onAnimationIteration");
or(Ig, "onAnimationStart");
or("dblclick", "onDoubleClick");
or("focusin", "onFocus");
or("focusout", "onBlur");
or(Dg, "onTransitionEnd");
po("onMouseEnter", ["mouseout", "mouseover"]);
po("onMouseLeave", ["mouseout", "mouseover"]);
po("onPointerEnter", ["pointerout", "pointerover"]);
po("onPointerLeave", ["pointerout", "pointerover"]);
Pr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ti = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), QT = new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));
function Kp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Xw(r, t, void 0, e), e.currentTarget = null;
}
function Fg(e, t) {
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
          Kp(o, a, c), i = l;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (a = r[s], l = a.instance, c = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped())
            break e;
          Kp(o, a, c), i = l;
        }
    }
  }
  if (ua)
    throw e = pu, ua = !1, pu = null, e;
}
function ue(e, t) {
  var n = t[Eu];
  n === void 0 && (n = t[Eu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ug(t, e, 2, !1), n.add(r));
}
function kc(e, t, n) {
  var r = 0;
  t && (r |= 4), Ug(n, e, r, t);
}
var Ss = "_reactListening" + Math.random().toString(36).slice(2);
function Ci(e) {
  if (!e[Ss]) {
    e[Ss] = !0, Yh.forEach(function(n) {
      n !== "selectionchange" && (QT.has(n) || kc(n, !1, e), kc(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ss] || (t[Ss] = !0, kc("selectionchange", !1, t));
  }
}
function Ug(e, t, n, r) {
  switch (Ag(t)) {
    case 1:
      var o = fT;
      break;
    case 4:
      o = pT;
      break;
    default:
      o = Cd;
  }
  n = o.bind(null, t, n, e), o = void 0, !fu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ec(e, t, n, r, o) {
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
            if (s = hr(a), s === null)
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
  ug(function() {
    var c = i, f = Sd(n), u = [];
    e: {
      var p = Hg.get(e);
      if (p !== void 0) {
        var v = Nd, k = e;
        switch (e) {
          case "keypress":
            if (Ys(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = PT;
            break;
          case "focusin":
            k = "focus", v = gc;
            break;
          case "focusout":
            k = "blur", v = gc;
            break;
          case "beforeblur":
          case "afterblur":
            v = gc;
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
            v = zp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = gT;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = _T;
            break;
          case Og:
          case $g:
          case Ig:
            v = wT;
            break;
          case Dg:
            v = RT;
            break;
          case "scroll":
            v = mT;
            break;
          case "wheel":
            v = OT;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ST;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Mp;
        }
        var T = (t & 4) !== 0, _ = !T && e === "scroll", h = T ? p !== null ? p + "Capture" : null : p;
        T = [];
        for (var m = c, g; m !== null; ) {
          g = m;
          var b = g.stateNode;
          if (g.tag === 5 && b !== null && (g = b, h !== null && (b = wi(m, h), b != null && T.push(bi(m, b, g)))), _)
            break;
          m = m.return;
        }
        0 < T.length && (p = new v(p, k, null, n, f), u.push({ event: p, listeners: T }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== uu && (k = n.relatedTarget || n.fromElement) && (hr(k) || k[An]))
          break e;
        if ((v || p) && (p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (k = n.relatedTarget || n.toElement, v = c, k = k ? hr(k) : null, k !== null && (_ = xr(k), k !== _ || k.tag !== 5 && k.tag !== 6) && (k = null)) : (v = null, k = c), v !== k)) {
          if (T = zp, b = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (T = Mp, b = "onPointerLeave", h = "onPointerEnter", m = "pointer"), _ = v == null ? p : Gr(v), g = k == null ? p : Gr(k), p = new T(b, m + "leave", v, n, f), p.target = _, p.relatedTarget = g, b = null, hr(f) === c && (T = new T(h, m + "enter", k, n, f), T.target = g, T.relatedTarget = _, b = T), _ = b, v && k)
            t: {
              for (T = v, h = k, m = 0, g = T; g; g = Dr(g))
                m++;
              for (g = 0, b = h; b; b = Dr(b))
                g++;
              for (; 0 < m - g; )
                T = Dr(T), m--;
              for (; 0 < g - m; )
                h = Dr(h), g--;
              for (; m--; ) {
                if (T === h || h !== null && T === h.alternate)
                  break t;
                T = Dr(T), h = Dr(h);
              }
              T = null;
            }
          else
            T = null;
          v !== null && Vp(u, p, v, T, !1), k !== null && _ !== null && Vp(u, _, k, T, !0);
        }
      }
      e: {
        if (p = c ? Gr(c) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var C = jT;
        else if (Ip(p))
          if (Lg)
            C = ZT;
          else {
            C = KT;
            var N = BT;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = VT);
        if (C && (C = C(e, c))) {
          xg(u, C, n, f);
          break e;
        }
        N && N(e, p, c), e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && iu(p, "number", p.value);
      }
      switch (N = c ? Gr(c) : window, e) {
        case "focusin":
          (Ip(N) || N.contentEditable === "true") && (Wr = N, yu = c, ci = null);
          break;
        case "focusout":
          ci = yu = Wr = null;
          break;
        case "mousedown":
          vu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vu = !1, jp(u, n, f);
          break;
        case "selectionchange":
          if (GT)
            break;
        case "keydown":
        case "keyup":
          jp(u, n, f);
      }
      var S;
      if (xd)
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
        Zr ? Ng(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (bg && n.locale !== "ko" && (Zr || L !== "onCompositionStart" ? L === "onCompositionEnd" && Zr && (S = Cg()) : (Un = f, bd = "value" in Un ? Un.value : Un.textContent, Zr = !0)), N = ha(c, L), 0 < N.length && (L = new Rp(L, e, null, n, f), u.push({ event: L, listeners: N }), S ? L.data = S : (S = Pg(n), S !== null && (L.data = S)))), (S = IT ? DT(e, n) : HT(e, n)) && (c = ha(c, "onBeforeInput"), 0 < c.length && (f = new Rp("onBeforeInput", "beforeinput", null, n, f), u.push({ event: f, listeners: c }), f.data = S));
    }
    Fg(u, t);
  });
}
function bi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ha(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = wi(e, n), i != null && r.unshift(bi(e, i, o)), i = wi(e, t), i != null && r.push(bi(e, i, o))), e = e.return;
  }
  return r;
}
function Dr(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, c = a.stateNode;
    if (l !== null && l === r)
      break;
    a.tag === 5 && c !== null && (a = c, o ? (l = wi(n, i), l != null && s.unshift(bi(n, l, a))) : o || (l = wi(n, i), l != null && s.push(bi(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var qT = /\r\n?/g, e1 = /\u0000|\uFFFD/g;
function Zp(e) {
  return (typeof e == "string" ? e : "" + e).replace(qT, `
`).replace(e1, "");
}
function ks(e, t, n) {
  if (t = Zp(t), Zp(e) !== t && n)
    throw Error(I(425));
}
function ga() {
}
var wu = null, Tu = null;
function Su(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ku = typeof setTimeout == "function" ? setTimeout : void 0, t1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Wp = typeof Promise == "function" ? Promise : void 0, n1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wp < "u" ? function(e) {
  return Wp.resolve(null).then(e).catch(r1);
} : ku;
function r1(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ac(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), ki(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ki(t);
}
function Wn(e) {
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
function Yp(e) {
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
var xo = Math.random().toString(36).slice(2), ln = "__reactFiber$" + xo, Ni = "__reactProps$" + xo, An = "__reactContainer$" + xo, Eu = "__reactEvents$" + xo, o1 = "__reactListeners$" + xo, i1 = "__reactHandles$" + xo;
function hr(e) {
  var t = e[ln];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[An] || n[ln]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Yp(e); e !== null; ) {
          if (n = e[ln])
            return n;
          e = Yp(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Yi(e) {
  return e = e[ln] || e[An], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Gr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(I(33));
}
function Xa(e) {
  return e[Ni] || null;
}
var Au = [], Xr = -1;
function ir(e) {
  return { current: e };
}
function de(e) {
  0 > Xr || (e.current = Au[Xr], Au[Xr] = null, Xr--);
}
function ce(e, t) {
  Xr++, Au[Xr] = e.current, e.current = t;
}
var tr = {}, ot = ir(tr), gt = ir(!1), Sr = tr;
function mo(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return tr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function yt(e) {
  return e = e.childContextTypes, e != null;
}
function ya() {
  de(gt), de(ot);
}
function Gp(e, t, n) {
  if (ot.current !== tr)
    throw Error(I(168));
  ce(ot, t), ce(gt, n);
}
function jg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(I(108, Bw(e) || "Unknown", o));
  return he({}, n, r);
}
function va(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tr, Sr = ot.current, ce(ot, e), ce(gt, gt.current), !0;
}
function Xp(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(I(169));
  n ? (e = jg(e, t, Sr), r.__reactInternalMemoizedMergedChildContext = e, de(gt), de(ot), ce(ot, e)) : de(gt), ce(gt, n);
}
var yn = null, Ja = !1, Cc = !1;
function Bg(e) {
  yn === null ? yn = [e] : yn.push(e);
}
function s1(e) {
  Ja = !0, Bg(e);
}
function sr() {
  if (!Cc && yn !== null) {
    Cc = !0;
    var e = 0, t = se;
    try {
      var n = yn;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yn = null, Ja = !1;
    } catch (o) {
      throw yn !== null && (yn = yn.slice(e + 1)), mg(kd, sr), o;
    } finally {
      se = t, Cc = !1;
    }
  }
  return null;
}
var Jr = [], Qr = 0, wa = null, Ta = 0, zt = [], Rt = 0, kr = null, Tn = 1, Sn = "";
function fr(e, t) {
  Jr[Qr++] = Ta, Jr[Qr++] = wa, wa = e, Ta = t;
}
function Kg(e, t, n) {
  zt[Rt++] = Tn, zt[Rt++] = Sn, zt[Rt++] = kr, kr = e;
  var r = Tn;
  e = Sn;
  var o = 32 - Yt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Yt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Tn = 1 << 32 - Yt(t) + o | n << o | r, Sn = i + e;
  } else
    Tn = 1 << i | n << o | r, Sn = e;
}
function _d(e) {
  e.return !== null && (fr(e, 1), Kg(e, 1, 0));
}
function zd(e) {
  for (; e === wa; )
    wa = Jr[--Qr], Jr[Qr] = null, Ta = Jr[--Qr], Jr[Qr] = null;
  for (; e === kr; )
    kr = zt[--Rt], zt[Rt] = null, Sn = zt[--Rt], zt[Rt] = null, Tn = zt[--Rt], zt[Rt] = null;
}
var Ct = null, At = null, fe = !1, Vt = null;
function Vg(e, t) {
  var n = $t(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Jp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ct = e, At = Wn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ct = e, At = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = kr !== null ? { id: Tn, overflow: Sn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = $t(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ct = e, At = null, !0) : !1;
    default:
      return !1;
  }
}
function Cu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bu(e) {
  if (fe) {
    var t = At;
    if (t) {
      var n = t;
      if (!Jp(e, t)) {
        if (Cu(e))
          throw Error(I(418));
        t = Wn(n.nextSibling);
        var r = Ct;
        t && Jp(e, t) ? Vg(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, Ct = e);
      }
    } else {
      if (Cu(e))
        throw Error(I(418));
      e.flags = e.flags & -4097 | 2, fe = !1, Ct = e;
    }
  }
}
function Qp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ct = e;
}
function Es(e) {
  if (e !== Ct)
    return !1;
  if (!fe)
    return Qp(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Su(e.type, e.memoizedProps)), t && (t = At)) {
    if (Cu(e))
      throw Zg(), Error(I(418));
    for (; t; )
      Vg(e, t), t = Wn(t.nextSibling);
  }
  if (Qp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              At = Wn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      At = null;
    }
  } else
    At = Ct ? Wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Zg() {
  for (var e = At; e; )
    e = Wn(e.nextSibling);
}
function ho() {
  At = Ct = null, fe = !1;
}
function Rd(e) {
  Vt === null ? Vt = [e] : Vt.push(e);
}
var a1 = xn.ReactCurrentBatchConfig;
function Vo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(I(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(I(284));
    if (!n._owner)
      throw Error(I(290, e));
  }
  return e;
}
function As(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function qp(e) {
  var t = e._init;
  return t(e._payload);
}
function Wg(e) {
  function t(h, m) {
    if (e) {
      var g = h.deletions;
      g === null ? (h.deletions = [m], h.flags |= 16) : g.push(m);
    }
  }
  function n(h, m) {
    if (!e)
      return null;
    for (; m !== null; )
      t(h, m), m = m.sibling;
    return null;
  }
  function r(h, m) {
    for (h = /* @__PURE__ */ new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
    return h;
  }
  function o(h, m) {
    return h = Jn(h, m), h.index = 0, h.sibling = null, h;
  }
  function i(h, m, g) {
    return h.index = g, e ? (g = h.alternate, g !== null ? (g = g.index, g < m ? (h.flags |= 2, m) : g) : (h.flags |= 2, m)) : (h.flags |= 1048576, m);
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, m, g, b) {
    return m === null || m.tag !== 6 ? (m = zc(g, h.mode, b), m.return = h, m) : (m = o(m, g), m.return = h, m);
  }
  function l(h, m, g, b) {
    var C = g.type;
    return C === Vr ? f(h, m, g.props.children, b, g.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === $n && qp(C) === m.type) ? (b = o(m, g.props), b.ref = Vo(h, m, g), b.return = h, b) : (b = ta(g.type, g.key, g.props, null, h.mode, b), b.ref = Vo(h, m, g), b.return = h, b);
  }
  function c(h, m, g, b) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = Rc(g, h.mode, b), m.return = h, m) : (m = o(m, g.children || []), m.return = h, m);
  }
  function f(h, m, g, b, C) {
    return m === null || m.tag !== 7 ? (m = Tr(g, h.mode, b, C), m.return = h, m) : (m = o(m, g), m.return = h, m);
  }
  function u(h, m, g) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = zc("" + m, h.mode, g), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ps:
          return g = ta(m.type, m.key, m.props, null, h.mode, g), g.ref = Vo(h, null, m), g.return = h, g;
        case Kr:
          return m = Rc(m, h.mode, g), m.return = h, m;
        case $n:
          var b = m._init;
          return u(h, b(m._payload), g);
      }
      if (qo(m) || Fo(m))
        return m = Tr(m, h.mode, g, null), m.return = h, m;
      As(h, m);
    }
    return null;
  }
  function p(h, m, g, b) {
    var C = m !== null ? m.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return C !== null ? null : a(h, m, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ps:
          return g.key === C ? l(h, m, g, b) : null;
        case Kr:
          return g.key === C ? c(h, m, g, b) : null;
        case $n:
          return C = g._init, p(
            h,
            m,
            C(g._payload),
            b
          );
      }
      if (qo(g) || Fo(g))
        return C !== null ? null : f(h, m, g, b, null);
      As(h, g);
    }
    return null;
  }
  function v(h, m, g, b, C) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return h = h.get(g) || null, a(m, h, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ps:
          return h = h.get(b.key === null ? g : b.key) || null, l(m, h, b, C);
        case Kr:
          return h = h.get(b.key === null ? g : b.key) || null, c(m, h, b, C);
        case $n:
          var N = b._init;
          return v(h, m, g, N(b._payload), C);
      }
      if (qo(b) || Fo(b))
        return h = h.get(g) || null, f(m, h, b, C, null);
      As(m, b);
    }
    return null;
  }
  function k(h, m, g, b) {
    for (var C = null, N = null, S = m, L = m = 0, U = null; S !== null && L < g.length; L++) {
      S.index > L ? (U = S, S = null) : U = S.sibling;
      var R = p(h, S, g[L], b);
      if (R === null) {
        S === null && (S = U);
        break;
      }
      e && S && R.alternate === null && t(h, S), m = i(R, m, L), N === null ? C = R : N.sibling = R, N = R, S = U;
    }
    if (L === g.length)
      return n(h, S), fe && fr(h, L), C;
    if (S === null) {
      for (; L < g.length; L++)
        S = u(h, g[L], b), S !== null && (m = i(S, m, L), N === null ? C = S : N.sibling = S, N = S);
      return fe && fr(h, L), C;
    }
    for (S = r(h, S); L < g.length; L++)
      U = v(S, h, L, g[L], b), U !== null && (e && U.alternate !== null && S.delete(U.key === null ? L : U.key), m = i(U, m, L), N === null ? C = U : N.sibling = U, N = U);
    return e && S.forEach(function(D) {
      return t(h, D);
    }), fe && fr(h, L), C;
  }
  function T(h, m, g, b) {
    var C = Fo(g);
    if (typeof C != "function")
      throw Error(I(150));
    if (g = C.call(g), g == null)
      throw Error(I(151));
    for (var N = C = null, S = m, L = m = 0, U = null, R = g.next(); S !== null && !R.done; L++, R = g.next()) {
      S.index > L ? (U = S, S = null) : U = S.sibling;
      var D = p(h, S, R.value, b);
      if (D === null) {
        S === null && (S = U);
        break;
      }
      e && S && D.alternate === null && t(h, S), m = i(D, m, L), N === null ? C = D : N.sibling = D, N = D, S = U;
    }
    if (R.done)
      return n(
        h,
        S
      ), fe && fr(h, L), C;
    if (S === null) {
      for (; !R.done; L++, R = g.next())
        R = u(h, R.value, b), R !== null && (m = i(R, m, L), N === null ? C = R : N.sibling = R, N = R);
      return fe && fr(h, L), C;
    }
    for (S = r(h, S); !R.done; L++, R = g.next())
      R = v(S, h, L, R.value, b), R !== null && (e && R.alternate !== null && S.delete(R.key === null ? L : R.key), m = i(R, m, L), N === null ? C = R : N.sibling = R, N = R);
    return e && S.forEach(function(z) {
      return t(h, z);
    }), fe && fr(h, L), C;
  }
  function _(h, m, g, b) {
    if (typeof g == "object" && g !== null && g.type === Vr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ps:
          e: {
            for (var C = g.key, N = m; N !== null; ) {
              if (N.key === C) {
                if (C = g.type, C === Vr) {
                  if (N.tag === 7) {
                    n(h, N.sibling), m = o(N, g.props.children), m.return = h, h = m;
                    break e;
                  }
                } else if (N.elementType === C || typeof C == "object" && C !== null && C.$$typeof === $n && qp(C) === N.type) {
                  n(h, N.sibling), m = o(N, g.props), m.ref = Vo(h, N, g), m.return = h, h = m;
                  break e;
                }
                n(h, N);
                break;
              } else
                t(h, N);
              N = N.sibling;
            }
            g.type === Vr ? (m = Tr(g.props.children, h.mode, b, g.key), m.return = h, h = m) : (b = ta(g.type, g.key, g.props, null, h.mode, b), b.ref = Vo(h, m, g), b.return = h, h = b);
          }
          return s(h);
        case Kr:
          e: {
            for (N = g.key; m !== null; ) {
              if (m.key === N)
                if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                  n(h, m.sibling), m = o(m, g.children || []), m.return = h, h = m;
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else
                t(h, m);
              m = m.sibling;
            }
            m = Rc(g, h.mode, b), m.return = h, h = m;
          }
          return s(h);
        case $n:
          return N = g._init, _(h, m, N(g._payload), b);
      }
      if (qo(g))
        return k(h, m, g, b);
      if (Fo(g))
        return T(h, m, g, b);
      As(h, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, m !== null && m.tag === 6 ? (n(h, m.sibling), m = o(m, g), m.return = h, h = m) : (n(h, m), m = zc(g, h.mode, b), m.return = h, h = m), s(h)) : n(h, m);
  }
  return _;
}
var go = Wg(!0), Yg = Wg(!1), Sa = ir(null), ka = null, qr = null, Md = null;
function Od() {
  Md = qr = ka = null;
}
function $d(e) {
  var t = Sa.current;
  de(Sa), e._currentValue = t;
}
function Nu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function lo(e, t) {
  ka = e, Md = qr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ht = !0), e.firstContext = null);
}
function Dt(e) {
  var t = e._currentValue;
  if (Md !== e)
    if (e = { context: e, memoizedValue: t, next: null }, qr === null) {
      if (ka === null)
        throw Error(I(308));
      qr = e, ka.dependencies = { lanes: 0, firstContext: e };
    } else
      qr = qr.next = e;
  return t;
}
var gr = null;
function Id(e) {
  gr === null ? gr = [e] : gr.push(e);
}
function Gg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Id(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Cn(e, r);
}
function Cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var In = !1;
function Dd(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Xg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function kn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Yn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, te & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Cn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Id(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Cn(e, n);
}
function Gs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ed(e, n);
  }
}
function em(e, t) {
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
function Ea(e, t, n, r) {
  var o = e.updateQueue;
  In = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, c = l.next;
    l.next = null, s === null ? i = c : s.next = c, s = l;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, a = f.lastBaseUpdate, a !== s && (a === null ? f.firstBaseUpdate = c : a.next = c, f.lastBaseUpdate = l));
  }
  if (i !== null) {
    var u = o.baseState;
    s = 0, f = c = l = null, a = i;
    do {
      var p = a.lane, v = a.eventTime;
      if ((r & p) === p) {
        f !== null && (f = f.next = {
          eventTime: v,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var k = e, T = a;
          switch (p = t, v = n, T.tag) {
            case 1:
              if (k = T.payload, typeof k == "function") {
                u = k.call(v, u, p);
                break e;
              }
              u = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = T.payload, p = typeof k == "function" ? k.call(v, u, p) : k, p == null)
                break e;
              u = he({}, u, p);
              break e;
            case 2:
              In = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [a] : p.push(a));
      } else
        v = { eventTime: v, lane: p, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, f === null ? (c = f = v, l = u) : f = f.next = v, s |= p;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null)
          break;
        p = a, a = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (1);
    if (f === null && (l = u), o.baseState = l, o.firstBaseUpdate = c, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    Ar |= s, e.lanes = s, e.memoizedState = u;
  }
}
function tm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(I(191, o));
        o.call(r);
      }
    }
}
var Gi = {}, dn = ir(Gi), Pi = ir(Gi), xi = ir(Gi);
function yr(e) {
  if (e === Gi)
    throw Error(I(174));
  return e;
}
function Hd(e, t) {
  switch (ce(xi, t), ce(Pi, e), ce(dn, Gi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : au(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = au(t, e);
  }
  de(dn), ce(dn, t);
}
function yo() {
  de(dn), de(Pi), de(xi);
}
function Jg(e) {
  yr(xi.current);
  var t = yr(dn.current), n = au(t, e.type);
  t !== n && (ce(Pi, e), ce(dn, n));
}
function Fd(e) {
  Pi.current === e && (de(dn), de(Pi));
}
var pe = ir(0);
function Aa(e) {
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
var bc = [];
function Ud() {
  for (var e = 0; e < bc.length; e++)
    bc[e]._workInProgressVersionPrimary = null;
  bc.length = 0;
}
var Xs = xn.ReactCurrentDispatcher, Nc = xn.ReactCurrentBatchConfig, Er = 0, me = null, Me = null, He = null, Ca = !1, ui = !1, Li = 0, l1 = 0;
function et() {
  throw Error(I(321));
}
function jd(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xt(e[n], t[n]))
      return !1;
  return !0;
}
function Bd(e, t, n, r, o, i) {
  if (Er = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xs.current = e === null || e.memoizedState === null ? f1 : p1, e = n(r, o), ui) {
    i = 0;
    do {
      if (ui = !1, Li = 0, 25 <= i)
        throw Error(I(301));
      i += 1, He = Me = null, t.updateQueue = null, Xs.current = m1, e = n(r, o);
    } while (ui);
  }
  if (Xs.current = ba, t = Me !== null && Me.next !== null, Er = 0, He = Me = me = null, Ca = !1, t)
    throw Error(I(300));
  return e;
}
function Kd() {
  var e = Li !== 0;
  return Li = 0, e;
}
function on() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return He === null ? me.memoizedState = He = e : He = He.next = e, He;
}
function Ht() {
  if (Me === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Me.next;
  var t = He === null ? me.memoizedState : He.next;
  if (t !== null)
    He = t, Me = e;
  else {
    if (e === null)
      throw Error(I(310));
    Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, He === null ? me.memoizedState = He = e : He = He.next = e;
  }
  return He;
}
function _i(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Pc(e) {
  var t = Ht(), n = t.queue;
  if (n === null)
    throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Me, o = r.baseQueue, i = n.pending;
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
      var f = c.lane;
      if ((Er & f) === f)
        l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var u = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        l === null ? (a = l = u, s = r) : l = l.next = u, me.lanes |= f, Ar |= f;
      }
      c = c.next;
    } while (c !== null && c !== i);
    l === null ? s = r : l.next = a, Xt(r, t.memoizedState) || (ht = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, me.lanes |= i, Ar |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xc(e) {
  var t = Ht(), n = t.queue;
  if (n === null)
    throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Xt(i, t.memoizedState) || (ht = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Qg() {
}
function qg(e, t) {
  var n = me, r = Ht(), o = t(), i = !Xt(r.memoizedState, o);
  if (i && (r.memoizedState = o, ht = !0), r = r.queue, Vd(ny.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || He !== null && He.memoizedState.tag & 1) {
    if (n.flags |= 2048, zi(9, ty.bind(null, n, r, o, t), void 0, null), Fe === null)
      throw Error(I(349));
    Er & 30 || ey(n, t, o);
  }
  return o;
}
function ey(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ty(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ry(t) && oy(e);
}
function ny(e, t, n) {
  return n(function() {
    ry(t) && oy(e);
  });
}
function ry(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xt(e, n);
  } catch {
    return !0;
  }
}
function oy(e) {
  var t = Cn(e, 1);
  t !== null && Gt(t, e, 1, -1);
}
function nm(e) {
  var t = on();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _i, lastRenderedState: e }, t.queue = e, e = e.dispatch = d1.bind(null, me, e), [t.memoizedState, e];
}
function zi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function iy() {
  return Ht().memoizedState;
}
function Js(e, t, n, r) {
  var o = on();
  me.flags |= e, o.memoizedState = zi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Qa(e, t, n, r) {
  var o = Ht();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Me !== null) {
    var s = Me.memoizedState;
    if (i = s.destroy, r !== null && jd(r, s.deps)) {
      o.memoizedState = zi(t, n, i, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = zi(1 | t, n, i, r);
}
function rm(e, t) {
  return Js(8390656, 8, e, t);
}
function Vd(e, t) {
  return Qa(2048, 8, e, t);
}
function sy(e, t) {
  return Qa(4, 2, e, t);
}
function ay(e, t) {
  return Qa(4, 4, e, t);
}
function ly(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function cy(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Qa(4, 4, ly.bind(null, t, e), n);
}
function Zd() {
}
function uy(e, t) {
  var n = Ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function dy(e, t) {
  var n = Ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function fy(e, t, n) {
  return Er & 21 ? (Xt(n, t) || (n = yg(), me.lanes |= n, Ar |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ht = !0), e.memoizedState = n);
}
function c1(e, t) {
  var n = se;
  se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Nc.transition;
  Nc.transition = {};
  try {
    e(!1), t();
  } finally {
    se = n, Nc.transition = r;
  }
}
function py() {
  return Ht().memoizedState;
}
function u1(e, t, n) {
  var r = Xn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, my(e))
    hy(t, n);
  else if (n = Gg(e, t, n, r), n !== null) {
    var o = ct();
    Gt(n, e, r, o), gy(n, t, r);
  }
}
function d1(e, t, n) {
  var r = Xn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (my(e))
    hy(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var s = t.lastRenderedState, a = i(s, n);
        if (o.hasEagerState = !0, o.eagerState = a, Xt(a, s)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Id(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Gg(e, t, o, r), n !== null && (o = ct(), Gt(n, e, r, o), gy(n, t, r));
  }
}
function my(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function hy(e, t) {
  ui = Ca = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function gy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ed(e, n);
  }
}
var ba = { readContext: Dt, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, f1 = { readContext: Dt, useCallback: function(e, t) {
  return on().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Dt, useEffect: rm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Js(
    4194308,
    4,
    ly.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Js(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Js(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = on();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = on();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = u1.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = on();
  return e = { current: e }, t.memoizedState = e;
}, useState: nm, useDebugValue: Zd, useDeferredValue: function(e) {
  return on().memoizedState = e;
}, useTransition: function() {
  var e = nm(!1), t = e[0];
  return e = c1.bind(null, e[1]), on().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = me, o = on();
  if (fe) {
    if (n === void 0)
      throw Error(I(407));
    n = n();
  } else {
    if (n = t(), Fe === null)
      throw Error(I(349));
    Er & 30 || ey(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, rm(ny.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, zi(9, ty.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = on(), t = Fe.identifierPrefix;
  if (fe) {
    var n = Sn, r = Tn;
    n = (r & ~(1 << 32 - Yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Li++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = l1++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, p1 = {
  readContext: Dt,
  useCallback: uy,
  useContext: Dt,
  useEffect: Vd,
  useImperativeHandle: cy,
  useInsertionEffect: sy,
  useLayoutEffect: ay,
  useMemo: dy,
  useReducer: Pc,
  useRef: iy,
  useState: function() {
    return Pc(_i);
  },
  useDebugValue: Zd,
  useDeferredValue: function(e) {
    var t = Ht();
    return fy(t, Me.memoizedState, e);
  },
  useTransition: function() {
    var e = Pc(_i)[0], t = Ht().memoizedState;
    return [e, t];
  },
  useMutableSource: Qg,
  useSyncExternalStore: qg,
  useId: py,
  unstable_isNewReconciler: !1
}, m1 = { readContext: Dt, useCallback: uy, useContext: Dt, useEffect: Vd, useImperativeHandle: cy, useInsertionEffect: sy, useLayoutEffect: ay, useMemo: dy, useReducer: xc, useRef: iy, useState: function() {
  return xc(_i);
}, useDebugValue: Zd, useDeferredValue: function(e) {
  var t = Ht();
  return Me === null ? t.memoizedState = e : fy(t, Me.memoizedState, e);
}, useTransition: function() {
  var e = xc(_i)[0], t = Ht().memoizedState;
  return [e, t];
}, useMutableSource: Qg, useSyncExternalStore: qg, useId: py, unstable_isNewReconciler: !1 };
function Bt(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qa = { isMounted: function(e) {
  return (e = e._reactInternals) ? xr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ct(), o = Xn(e), i = kn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Yn(e, i, o), t !== null && (Gt(t, e, o, r), Gs(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ct(), o = Xn(e), i = kn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Yn(e, i, o), t !== null && (Gt(t, e, o, r), Gs(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ct(), r = Xn(e), o = kn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Yn(e, o, r), t !== null && (Gt(t, e, r, n), Gs(t, e, r));
} };
function om(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ai(n, r) || !Ai(o, i) : !0;
}
function yy(e, t, n) {
  var r = !1, o = tr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Dt(i) : (o = yt(t) ? Sr : ot.current, r = t.contextTypes, i = (r = r != null) ? mo(e, o) : tr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = qa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function im(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && qa.enqueueReplaceState(t, t.state, null);
}
function xu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Dd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Dt(i) : (i = yt(t) ? Sr : ot.current, o.context = mo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Pu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && qa.enqueueReplaceState(o, o.state, null), Ea(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function vo(e, t) {
  try {
    var n = "", r = t;
    do
      n += jw(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Lc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Lu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var h1 = typeof WeakMap == "function" ? WeakMap : Map;
function vy(e, t, n) {
  n = kn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Pa || (Pa = !0, Fu = r), Lu(e, t);
  }, n;
}
function wy(e, t, n) {
  n = kn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Lu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Lu(e, t), typeof r != "function" && (Gn === null ? Gn = /* @__PURE__ */ new Set([this]) : Gn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function sm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new h1();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = x1.bind(null, e, t, n), t.then(e, e));
}
function am(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function lm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = kn(-1, 1), t.tag = 2, Yn(n, t, 1))), n.lanes |= 1), e);
}
var g1 = xn.ReactCurrentOwner, ht = !1;
function lt(e, t, n, r) {
  t.child = e === null ? Yg(t, null, n, r) : go(t, e.child, n, r);
}
function cm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return lo(t, o), r = Bd(e, t, n, r, i, o), n = Kd(), e !== null && !ht ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, bn(e, t, o)) : (fe && n && _d(t), t.flags |= 1, lt(e, t, r, o), t.child);
}
function um(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ef(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ty(e, t, i, r, o)) : (e = ta(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ai, n(s, r) && e.ref === t.ref)
      return bn(e, t, o);
  }
  return t.flags |= 1, e = Jn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ty(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ai(i, r) && e.ref === t.ref)
      if (ht = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (ht = !0);
      else
        return t.lanes = e.lanes, bn(e, t, o);
  }
  return _u(e, t, n, r, o);
}
function Sy(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ce(to, St), St |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ce(to, St), St |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ce(to, St), St |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ce(to, St), St |= r;
  return lt(e, t, o, n), t.child;
}
function ky(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function _u(e, t, n, r, o) {
  var i = yt(n) ? Sr : ot.current;
  return i = mo(t, i), lo(t, o), n = Bd(e, t, n, r, i, o), r = Kd(), e !== null && !ht ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, bn(e, t, o)) : (fe && r && _d(t), t.flags |= 1, lt(e, t, n, o), t.child);
}
function dm(e, t, n, r, o) {
  if (yt(n)) {
    var i = !0;
    va(t);
  } else
    i = !1;
  if (lo(t, o), t.stateNode === null)
    Qs(e, t), yy(t, n, r), xu(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Dt(c) : (c = yt(n) ? Sr : ot.current, c = mo(t, c));
    var f = n.getDerivedStateFromProps, u = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    u || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && im(t, s, r, c), In = !1;
    var p = t.memoizedState;
    s.state = p, Ea(t, r, s, o), l = t.memoizedState, a !== r || p !== l || gt.current || In ? (typeof f == "function" && (Pu(t, n, f, r), l = t.memoizedState), (a = In || om(t, n, a, r, p, l, c)) ? (u || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = c, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Xg(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Bt(t.type, a), s.props = c, u = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Dt(l) : (l = yt(n) ? Sr : ot.current, l = mo(t, l));
    var v = n.getDerivedStateFromProps;
    (f = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== u || p !== l) && im(t, s, r, l), In = !1, p = t.memoizedState, s.state = p, Ea(t, r, s, o);
    var k = t.memoizedState;
    a !== u || p !== k || gt.current || In ? (typeof v == "function" && (Pu(t, n, v, r), k = t.memoizedState), (c = In || om(t, n, c, r, p, k, l) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, k, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, k, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), s.props = r, s.state = k, s.context = l, r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return zu(e, t, n, r, i, o);
}
function zu(e, t, n, r, o, i) {
  ky(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return o && Xp(t, n, !1), bn(e, t, i);
  r = t.stateNode, g1.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = go(t, e.child, null, i), t.child = go(t, null, a, i)) : lt(e, t, a, i), t.memoizedState = r.state, o && Xp(t, n, !0), t.child;
}
function Ey(e) {
  var t = e.stateNode;
  t.pendingContext ? Gp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gp(e, t.context, !1), Hd(e, t.containerInfo);
}
function fm(e, t, n, r, o) {
  return ho(), Rd(o), t.flags |= 256, lt(e, t, n, r), t.child;
}
var Ru = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ay(e, t, n) {
  var r = t.pendingProps, o = pe.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ce(pe, o & 1), e === null)
    return bu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = nl(s, r, 0, null), e = Tr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Mu(n), t.memoizedState = Ru, e) : Wd(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return y1(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Jn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Jn(a, i) : (i = Tr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Mu(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ru, r;
  }
  return i = e.child, e = i.sibling, r = Jn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Wd(e, t) {
  return t = nl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Cs(e, t, n, r) {
  return r !== null && Rd(r), go(t, e.child, null, n), e = Wd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function y1(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Lc(Error(I(422))), Cs(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = nl({ mode: "visible", children: r.children }, o, 0, null), i = Tr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && go(t, e.child, null, s), t.child.memoizedState = Mu(s), t.memoizedState = Ru, i);
  if (!(t.mode & 1))
    return Cs(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(I(419)), r = Lc(i, r, void 0), Cs(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, ht || a) {
    if (r = Fe, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Cn(e, o), Gt(r, e, o, -1));
    }
    return qd(), r = Lc(Error(I(421))), Cs(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = L1.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, At = Wn(o.nextSibling), Ct = t, fe = !0, Vt = null, e !== null && (zt[Rt++] = Tn, zt[Rt++] = Sn, zt[Rt++] = kr, Tn = e.id, Sn = e.overflow, kr = t), t = Wd(t, r.children), t.flags |= 4096, t);
}
function pm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Nu(e.return, t, n);
}
function _c(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Cy(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (lt(e, t, r.children, n), r = pe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && pm(e, n, t);
          else if (e.tag === 19)
            pm(e, n, t);
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
  if (ce(pe, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Aa(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), _c(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Aa(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        _c(t, !0, n, null, i);
        break;
      case "together":
        _c(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qs(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function bn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ar |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Jn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function v1(e, t, n) {
  switch (t.tag) {
    case 3:
      Ey(t), ho();
      break;
    case 5:
      Jg(t);
      break;
    case 1:
      yt(t.type) && va(t);
      break;
    case 4:
      Hd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ce(Sa, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ce(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ay(e, t, n) : (ce(pe, pe.current & 1), e = bn(e, t, n), e !== null ? e.sibling : null);
      ce(pe, pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Cy(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ce(pe, pe.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Sy(e, t, n);
  }
  return bn(e, t, n);
}
var by, Ou, Ny, Py;
by = function(e, t) {
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
Ou = function() {
};
Ny = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, yr(dn.current);
    var i = null;
    switch (n) {
      case "input":
        o = ru(e, o), r = ru(e, r), i = [];
        break;
      case "select":
        o = he({}, o, { value: void 0 }), r = he({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = su(e, o), r = su(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ga);
    }
    lu(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (s in a)
            a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (yi.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
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
          c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (yi.hasOwnProperty(c) ? (l != null && c === "onScroll" && ue("scroll", e), i || a === l || (i = [])) : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Py = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zo(e, t) {
  if (!fe)
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
function tt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function w1(e, t, n) {
  var r = t.pendingProps;
  switch (zd(t), t.tag) {
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
      return tt(t), null;
    case 1:
      return yt(t.type) && ya(), tt(t), null;
    case 3:
      return r = t.stateNode, yo(), de(gt), de(ot), Ud(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Es(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Vt !== null && (Bu(Vt), Vt = null))), Ou(e, t), tt(t), null;
    case 5:
      Fd(t);
      var o = yr(xi.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Ny(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(I(166));
          return tt(t), null;
        }
        if (e = yr(dn.current), Es(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ln] = t, r[Ni] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ti.length; o++)
                ue(ti[o], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue(
                "error",
                r
              ), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              kp(r, i), ue("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ue("invalid", r);
              break;
            case "textarea":
              Ap(r, i), ue("invalid", r);
          }
          lu(n, i), o = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && ks(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && ks(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : yi.hasOwnProperty(s) && a != null && s === "onScroll" && ue("scroll", r);
            }
          switch (n) {
            case "input":
              ms(r), Ep(r, i, !0);
              break;
            case "textarea":
              ms(r), Cp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ga);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ng(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ln] = t, e[Ni] = r, by(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = cu(n, r), n) {
              case "dialog":
                ue("cancel", e), ue("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ti.length; o++)
                  ue(ti[o], e);
                o = r;
                break;
              case "source":
                ue("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ue(
                  "error",
                  e
                ), ue("load", e), o = r;
                break;
              case "details":
                ue("toggle", e), o = r;
                break;
              case "input":
                kp(e, r), o = ru(e, r), ue("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = he({}, r, { value: void 0 }), ue("invalid", e);
                break;
              case "textarea":
                Ap(e, r), o = su(e, r), ue("invalid", e);
                break;
              default:
                o = r;
            }
            lu(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? ig(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && rg(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && vi(e, l) : typeof l == "number" && vi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (yi.hasOwnProperty(i) ? l != null && i === "onScroll" && ue("scroll", e) : l != null && yd(e, i, l, s));
              }
            switch (n) {
              case "input":
                ms(e), Ep(e, r, !1);
                break;
              case "textarea":
                ms(e), Cp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + er(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? oo(e, !!r.multiple, i, !1) : r.defaultValue != null && oo(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ga);
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
      return tt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Py(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(I(166));
        if (n = yr(xi.current), yr(dn.current), Es(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ln] = t, (i = r.nodeValue !== n) && (e = Ct, e !== null))
            switch (e.tag) {
              case 3:
                ks(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ks(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ln] = t, t.stateNode = r;
      }
      return tt(t), null;
    case 13:
      if (de(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && At !== null && t.mode & 1 && !(t.flags & 128))
          Zg(), ho(), t.flags |= 98560, i = !1;
        else if (i = Es(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(I(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(I(317));
            i[ln] = t;
          } else
            ho(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          tt(t), i = !1;
        } else
          Vt !== null && (Bu(Vt), Vt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? Oe === 0 && (Oe = 3) : qd())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
    case 4:
      return yo(), Ou(e, t), e === null && Ci(t.stateNode.containerInfo), tt(t), null;
    case 10:
      return $d(t.type._context), tt(t), null;
    case 17:
      return yt(t.type) && ya(), tt(t), null;
    case 19:
      if (de(pe), i = t.memoizedState, i === null)
        return tt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r)
          Zo(i, !1);
        else {
          if (Oe !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = Aa(e), s !== null) {
                for (t.flags |= 128, Zo(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ce(pe, pe.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ae() > wo && (t.flags |= 128, r = !0, Zo(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Aa(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zo(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !fe)
              return tt(t), null;
          } else
            2 * Ae() - i.renderingStartTime > wo && n !== 1073741824 && (t.flags |= 128, r = !0, Zo(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ae(), t.sibling = null, n = pe.current, ce(pe, r ? n & 1 | 2 : n & 1), t) : (tt(t), null);
    case 22:
    case 23:
      return Qd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? St & 1073741824 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function T1(e, t) {
  switch (zd(t), t.tag) {
    case 1:
      return yt(t.type) && ya(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yo(), de(gt), de(ot), Ud(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Fd(t), null;
    case 13:
      if (de(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(I(340));
        ho();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return de(pe), null;
    case 4:
      return yo(), null;
    case 10:
      return $d(t.type._context), null;
    case 22:
    case 23:
      return Qd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bs = !1, rt = !1, S1 = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function eo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ke(e, t, r);
      }
    else
      n.current = null;
}
function $u(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var mm = !1;
function k1(e, t) {
  if (wu = pa, e = Rg(), Ld(e)) {
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
          var s = 0, a = -1, l = -1, c = 0, f = 0, u = e, p = null;
          t:
            for (; ; ) {
              for (var v; u !== n || o !== 0 && u.nodeType !== 3 || (a = s + o), u !== i || r !== 0 && u.nodeType !== 3 || (l = s + r), u.nodeType === 3 && (s += u.nodeValue.length), (v = u.firstChild) !== null; )
                p = u, u = v;
              for (; ; ) {
                if (u === e)
                  break t;
                if (p === n && ++c === o && (a = s), p === i && ++f === r && (l = s), (v = u.nextSibling) !== null)
                  break;
                u = p, p = u.parentNode;
              }
              u = v;
            }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Tu = { focusedElem: e, selectionRange: n }, pa = !1, B = t; B !== null; )
    if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, B = e;
    else
      for (; B !== null; ) {
        t = B;
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
                  var T = k.memoizedProps, _ = k.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? T : Bt(t.type, T), _);
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (b) {
          ke(t, t.return, b);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, B = e;
          break;
        }
        B = t.return;
      }
  return k = mm, mm = !1, k;
}
function di(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && $u(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function el(e, t) {
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
function Iu(e) {
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
function xy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, xy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ln], delete t[Ni], delete t[Eu], delete t[o1], delete t[i1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ly(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hm(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ly(e.return))
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
function Du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ga));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Du(e, t, n), e = e.sibling; e !== null; )
      Du(e, t, n), e = e.sibling;
}
function Hu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Hu(e, t, n), e = e.sibling; e !== null; )
      Hu(e, t, n), e = e.sibling;
}
var Ve = null, Kt = !1;
function Rn(e, t, n) {
  for (n = n.child; n !== null; )
    _y(e, t, n), n = n.sibling;
}
function _y(e, t, n) {
  if (un && typeof un.onCommitFiberUnmount == "function")
    try {
      un.onCommitFiberUnmount(Za, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      rt || eo(n, t);
    case 6:
      var r = Ve, o = Kt;
      Ve = null, Rn(e, t, n), Ve = r, Kt = o, Ve !== null && (Kt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null && (Kt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? Ac(e.parentNode, n) : e.nodeType === 1 && Ac(e, n), ki(e)) : Ac(Ve, n.stateNode));
      break;
    case 4:
      r = Ve, o = Kt, Ve = n.stateNode.containerInfo, Kt = !0, Rn(e, t, n), Ve = r, Kt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!rt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && $u(n, t, s), o = o.next;
        } while (o !== r);
      }
      Rn(e, t, n);
      break;
    case 1:
      if (!rt && (eo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          ke(n, t, a);
        }
      Rn(e, t, n);
      break;
    case 21:
      Rn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (rt = (r = rt) || n.memoizedState !== null, Rn(e, t, n), rt = r) : Rn(e, t, n);
      break;
    default:
      Rn(e, t, n);
  }
}
function gm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new S1()), t.forEach(function(r) {
      var o = _1.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function jt(e, t) {
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
                Ve = a.stateNode, Kt = !1;
                break e;
              case 3:
                Ve = a.stateNode.containerInfo, Kt = !0;
                break e;
              case 4:
                Ve = a.stateNode.containerInfo, Kt = !0;
                break e;
            }
            a = a.return;
          }
        if (Ve === null)
          throw Error(I(160));
        _y(i, s, o), Ve = null, Kt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (c) {
        ke(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      zy(t, e), t = t.sibling;
}
function zy(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (jt(t, e), tn(e), r & 4) {
        try {
          di(3, e, e.return), el(3, e);
        } catch (T) {
          ke(e, e.return, T);
        }
        try {
          di(5, e, e.return);
        } catch (T) {
          ke(e, e.return, T);
        }
      }
      break;
    case 1:
      jt(t, e), tn(e), r & 512 && n !== null && eo(n, n.return);
      break;
    case 5:
      if (jt(t, e), tn(e), r & 512 && n !== null && eo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          vi(o, "");
        } catch (T) {
          ke(e, e.return, T);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && eg(o, i), cu(a, s);
            var c = cu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var f = l[s], u = l[s + 1];
              f === "style" ? ig(o, u) : f === "dangerouslySetInnerHTML" ? rg(o, u) : f === "children" ? vi(o, u) : yd(o, f, u, c);
            }
            switch (a) {
              case "input":
                ou(o, i);
                break;
              case "textarea":
                tg(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null ? oo(o, !!i.multiple, v, !1) : p !== !!i.multiple && (i.defaultValue != null ? oo(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : oo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ni] = i;
          } catch (T) {
            ke(e, e.return, T);
          }
      }
      break;
    case 6:
      if (jt(t, e), tn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(I(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (T) {
          ke(e, e.return, T);
        }
      }
      break;
    case 3:
      if (jt(t, e), tn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          ki(t.containerInfo);
        } catch (T) {
          ke(e, e.return, T);
        }
      break;
    case 4:
      jt(t, e), tn(e);
      break;
    case 13:
      jt(t, e), tn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Xd = Ae())), r & 4 && gm(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (rt = (c = rt) || f, jt(t, e), rt = c) : jt(t, e), tn(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !f && e.mode & 1)
          for (B = e, f = e.child; f !== null; ) {
            for (u = B = f; B !== null; ) {
              switch (p = B, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  di(4, p, p.return);
                  break;
                case 1:
                  eo(p, p.return);
                  var k = p.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                    } catch (T) {
                      ke(r, n, T);
                    }
                  }
                  break;
                case 5:
                  eo(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    vm(u);
                    continue;
                  }
              }
              v !== null ? (v.return = p, B = v) : vm(u);
            }
            f = f.sibling;
          }
        e:
          for (f = null, u = e; ; ) {
            if (u.tag === 5) {
              if (f === null) {
                f = u;
                try {
                  o = u.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = u.stateNode, l = u.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = og("display", s));
                } catch (T) {
                  ke(e, e.return, T);
                }
              }
            } else if (u.tag === 6) {
              if (f === null)
                try {
                  u.stateNode.nodeValue = c ? "" : u.memoizedProps;
                } catch (T) {
                  ke(e, e.return, T);
                }
            } else if ((u.tag !== 22 && u.tag !== 23 || u.memoizedState === null || u === e) && u.child !== null) {
              u.child.return = u, u = u.child;
              continue;
            }
            if (u === e)
              break e;
            for (; u.sibling === null; ) {
              if (u.return === null || u.return === e)
                break e;
              f === u && (f = null), u = u.return;
            }
            f === u && (f = null), u.sibling.return = u.return, u = u.sibling;
          }
      }
      break;
    case 19:
      jt(t, e), tn(e), r & 4 && gm(e);
      break;
    case 21:
      break;
    default:
      jt(
        t,
        e
      ), tn(e);
  }
}
function tn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ly(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (vi(o, ""), r.flags &= -33);
          var i = hm(e);
          Hu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = hm(e);
          Du(e, a, s);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      ke(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function E1(e, t, n) {
  B = e, Ry(e);
}
function Ry(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || bs;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || rt;
        a = bs;
        var c = rt;
        if (bs = s, (rt = l) && !c)
          for (B = o; B !== null; )
            s = B, l = s.child, s.tag === 22 && s.memoizedState !== null ? wm(o) : l !== null ? (l.return = s, B = l) : wm(o);
        for (; i !== null; )
          B = i, Ry(i), i = i.sibling;
        B = o, bs = a, rt = c;
      }
      ym(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : ym(e);
  }
}
function ym(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              rt || el(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !rt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && tm(t, i, r);
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
                tm(t, s, n);
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
                  var f = c.memoizedState;
                  if (f !== null) {
                    var u = f.dehydrated;
                    u !== null && ki(u);
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
              throw Error(I(163));
          }
        rt || t.flags & 512 && Iu(t);
      } catch (p) {
        ke(t, t.return, p);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function vm(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function wm(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            el(4, t);
          } catch (l) {
            ke(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ke(t, o, l);
            }
          }
          var i = t.return;
          try {
            Iu(t);
          } catch (l) {
            ke(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Iu(t);
          } catch (l) {
            ke(t, s, l);
          }
      }
    } catch (l) {
      ke(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, B = a;
      break;
    }
    B = t.return;
  }
}
var A1 = Math.ceil, Na = xn.ReactCurrentDispatcher, Yd = xn.ReactCurrentOwner, It = xn.ReactCurrentBatchConfig, te = 0, Fe = null, Le = null, Ge = 0, St = 0, to = ir(0), Oe = 0, Ri = null, Ar = 0, tl = 0, Gd = 0, fi = null, mt = null, Xd = 0, wo = 1 / 0, hn = null, Pa = !1, Fu = null, Gn = null, Ns = !1, jn = null, xa = 0, pi = 0, Uu = null, qs = -1, ea = 0;
function ct() {
  return te & 6 ? Ae() : qs !== -1 ? qs : qs = Ae();
}
function Xn(e) {
  return e.mode & 1 ? te & 2 && Ge !== 0 ? Ge & -Ge : a1.transition !== null ? (ea === 0 && (ea = yg()), ea) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ag(e.type)), e) : 1;
}
function Gt(e, t, n, r) {
  if (50 < pi)
    throw pi = 0, Uu = null, Error(I(185));
  Zi(e, n, r), (!(te & 2) || e !== Fe) && (e === Fe && (!(te & 2) && (tl |= n), Oe === 4 && Hn(e, Ge)), vt(e, r), n === 1 && te === 0 && !(t.mode & 1) && (wo = Ae() + 500, Ja && sr()));
}
function vt(e, t) {
  var n = e.callbackNode;
  aT(e, t);
  var r = fa(e, e === Fe ? Ge : 0);
  if (r === 0)
    n !== null && Pp(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Pp(n), t === 1)
      e.tag === 0 ? s1(Tm.bind(null, e)) : Bg(Tm.bind(null, e)), n1(function() {
        !(te & 6) && sr();
      }), n = null;
    else {
      switch (vg(r)) {
        case 1:
          n = kd;
          break;
        case 4:
          n = hg;
          break;
        case 16:
          n = da;
          break;
        case 536870912:
          n = gg;
          break;
        default:
          n = da;
      }
      n = Uy(n, My.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function My(e, t) {
  if (qs = -1, ea = 0, te & 6)
    throw Error(I(327));
  var n = e.callbackNode;
  if (co() && e.callbackNode !== n)
    return null;
  var r = fa(e, e === Fe ? Ge : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = La(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var i = $y();
    (Fe !== e || Ge !== t) && (hn = null, wo = Ae() + 500, wr(e, t));
    do
      try {
        N1();
        break;
      } catch (a) {
        Oy(e, a);
      }
    while (1);
    Od(), Na.current = i, te = o, Le !== null ? t = 0 : (Fe = null, Ge = 0, t = Oe);
  }
  if (t !== 0) {
    if (t === 2 && (o = mu(e), o !== 0 && (r = o, t = ju(e, o))), t === 1)
      throw n = Ri, wr(e, 0), Hn(e, r), vt(e, Ae()), n;
    if (t === 6)
      Hn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !C1(o) && (t = La(e, r), t === 2 && (i = mu(e), i !== 0 && (r = i, t = ju(e, i))), t === 1))
        throw n = Ri, wr(e, 0), Hn(e, r), vt(e, Ae()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          pr(e, mt, hn);
          break;
        case 3:
          if (Hn(e, r), (r & 130023424) === r && (t = Xd + 500 - Ae(), 10 < t)) {
            if (fa(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ct(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ku(pr.bind(null, e, mt, hn), t);
            break;
          }
          pr(e, mt, hn);
          break;
        case 4:
          if (Hn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Yt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * A1(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ku(pr.bind(null, e, mt, hn), r);
            break;
          }
          pr(e, mt, hn);
          break;
        case 5:
          pr(e, mt, hn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return vt(e, Ae()), e.callbackNode === n ? My.bind(null, e) : null;
}
function ju(e, t) {
  var n = fi;
  return e.current.memoizedState.isDehydrated && (wr(e, t).flags |= 256), e = La(e, t), e !== 2 && (t = mt, mt = n, t !== null && Bu(t)), e;
}
function Bu(e) {
  mt === null ? mt = e : mt.push.apply(mt, e);
}
function C1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Xt(i(), o))
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
function Hn(e, t) {
  for (t &= ~Gd, t &= ~tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Yt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Tm(e) {
  if (te & 6)
    throw Error(I(327));
  co();
  var t = fa(e, 0);
  if (!(t & 1))
    return vt(e, Ae()), null;
  var n = La(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = mu(e);
    r !== 0 && (t = r, n = ju(e, r));
  }
  if (n === 1)
    throw n = Ri, wr(e, 0), Hn(e, t), vt(e, Ae()), n;
  if (n === 6)
    throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, pr(e, mt, hn), vt(e, Ae()), null;
}
function Jd(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = n, te === 0 && (wo = Ae() + 500, Ja && sr());
  }
}
function Cr(e) {
  jn !== null && jn.tag === 0 && !(te & 6) && co();
  var t = te;
  te |= 1;
  var n = It.transition, r = se;
  try {
    if (It.transition = null, se = 1, e)
      return e();
  } finally {
    se = r, It.transition = n, te = t, !(te & 6) && sr();
  }
}
function Qd() {
  St = to.current, de(to);
}
function wr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, t1(n)), Le !== null)
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch (zd(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ya();
          break;
        case 3:
          yo(), de(gt), de(ot), Ud();
          break;
        case 5:
          Fd(r);
          break;
        case 4:
          yo();
          break;
        case 13:
          de(pe);
          break;
        case 19:
          de(pe);
          break;
        case 10:
          $d(r.type._context);
          break;
        case 22:
        case 23:
          Qd();
      }
      n = n.return;
    }
  if (Fe = e, Le = e = Jn(e.current, null), Ge = St = t, Oe = 0, Ri = null, Gd = tl = Ar = 0, mt = fi = null, gr !== null) {
    for (t = 0; t < gr.length; t++)
      if (n = gr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = o, r.next = s;
        }
        n.pending = r;
      }
    gr = null;
  }
  return e;
}
function Oy(e, t) {
  do {
    var n = Le;
    try {
      if (Od(), Xs.current = ba, Ca) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ca = !1;
      }
      if (Er = 0, He = Me = me = null, ui = !1, Li = 0, Yd.current = null, n === null || n.return === null) {
        Oe = 1, Ri = t, Le = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = Ge, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var c = l, f = a, u = f.tag;
          if (!(f.mode & 1) && (u === 0 || u === 11 || u === 15)) {
            var p = f.alternate;
            p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var v = am(s);
          if (v !== null) {
            v.flags &= -257, lm(v, s, a, i, t), v.mode & 1 && sm(i, c, t), t = v, l = c;
            var k = t.updateQueue;
            if (k === null) {
              var T = /* @__PURE__ */ new Set();
              T.add(l), t.updateQueue = T;
            } else
              k.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              sm(i, c, t), qd();
              break e;
            }
            l = Error(I(426));
          }
        } else if (fe && a.mode & 1) {
          var _ = am(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), lm(_, s, a, i, t), Rd(vo(l, a));
            break e;
          }
        }
        i = l = vo(l, a), Oe !== 4 && (Oe = 2), fi === null ? fi = [i] : fi.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = vy(i, l, t);
              em(i, h);
              break e;
            case 1:
              a = l;
              var m = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Gn === null || !Gn.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = wy(i, a, t);
                em(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Dy(n);
    } catch (C) {
      t = C, Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function $y() {
  var e = Na.current;
  return Na.current = ba, e === null ? ba : e;
}
function qd() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), Fe === null || !(Ar & 268435455) && !(tl & 268435455) || Hn(Fe, Ge);
}
function La(e, t) {
  var n = te;
  te |= 2;
  var r = $y();
  (Fe !== e || Ge !== t) && (hn = null, wr(e, t));
  do
    try {
      b1();
      break;
    } catch (o) {
      Oy(e, o);
    }
  while (1);
  if (Od(), te = n, Na.current = r, Le !== null)
    throw Error(I(261));
  return Fe = null, Ge = 0, Oe;
}
function b1() {
  for (; Le !== null; )
    Iy(Le);
}
function N1() {
  for (; Le !== null && !Qw(); )
    Iy(Le);
}
function Iy(e) {
  var t = Fy(e.alternate, e, St);
  e.memoizedProps = e.pendingProps, t === null ? Dy(e) : Le = t, Yd.current = null;
}
function Dy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = T1(n, t), n !== null) {
        n.flags &= 32767, Le = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Oe = 6, Le = null;
        return;
      }
    } else if (n = w1(n, t, St), n !== null) {
      Le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Oe === 0 && (Oe = 5);
}
function pr(e, t, n) {
  var r = se, o = It.transition;
  try {
    It.transition = null, se = 1, P1(e, t, n, r);
  } finally {
    It.transition = o, se = r;
  }
  return null;
}
function P1(e, t, n, r) {
  do
    co();
  while (jn !== null);
  if (te & 6)
    throw Error(I(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (lT(e, i), e === Fe && (Le = Fe = null, Ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ns || (Ns = !0, Uy(da, function() {
    return co(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = It.transition, It.transition = null;
    var s = se;
    se = 1;
    var a = te;
    te |= 4, Yd.current = null, k1(e, n), zy(n, e), YT(Tu), pa = !!wu, Tu = wu = null, e.current = n, E1(n), qw(), te = a, se = s, It.transition = i;
  } else
    e.current = n;
  if (Ns && (Ns = !1, jn = e, xa = o), i = e.pendingLanes, i === 0 && (Gn = null), nT(n.stateNode), vt(e, Ae()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Pa)
    throw Pa = !1, e = Fu, Fu = null, e;
  return xa & 1 && e.tag !== 0 && co(), i = e.pendingLanes, i & 1 ? e === Uu ? pi++ : (pi = 0, Uu = e) : pi = 0, sr(), null;
}
function co() {
  if (jn !== null) {
    var e = vg(xa), t = It.transition, n = se;
    try {
      if (It.transition = null, se = 16 > e ? 16 : e, jn === null)
        var r = !1;
      else {
        if (e = jn, jn = null, xa = 0, te & 6)
          throw Error(I(331));
        var o = te;
        for (te |= 4, B = e.current; B !== null; ) {
          var i = B, s = i.child;
          if (B.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (B = c; B !== null; ) {
                  var f = B;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      di(8, f, i);
                  }
                  var u = f.child;
                  if (u !== null)
                    u.return = f, B = u;
                  else
                    for (; B !== null; ) {
                      f = B;
                      var p = f.sibling, v = f.return;
                      if (xy(f), f === c) {
                        B = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = v, B = p;
                        break;
                      }
                      B = v;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var T = k.child;
                if (T !== null) {
                  k.child = null;
                  do {
                    var _ = T.sibling;
                    T.sibling = null, T = _;
                  } while (T !== null);
                }
              }
              B = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null)
            s.return = i, B = s;
          else
            e:
              for (; B !== null; ) {
                if (i = B, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      di(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  h.return = i.return, B = h;
                  break e;
                }
                B = i.return;
              }
        }
        var m = e.current;
        for (B = m; B !== null; ) {
          s = B;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null)
            g.return = s, B = g;
          else
            e:
              for (s = m; B !== null; ) {
                if (a = B, a.flags & 2048)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        el(9, a);
                    }
                  } catch (C) {
                    ke(a, a.return, C);
                  }
                if (a === s) {
                  B = null;
                  break e;
                }
                var b = a.sibling;
                if (b !== null) {
                  b.return = a.return, B = b;
                  break e;
                }
                B = a.return;
              }
        }
        if (te = o, sr(), un && typeof un.onPostCommitFiberRoot == "function")
          try {
            un.onPostCommitFiberRoot(Za, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      se = n, It.transition = t;
    }
  }
  return !1;
}
function Sm(e, t, n) {
  t = vo(n, t), t = vy(e, t, 1), e = Yn(e, t, 1), t = ct(), e !== null && (Zi(e, 1, t), vt(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3)
    Sm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gn === null || !Gn.has(r))) {
          e = vo(n, e), e = wy(t, e, 1), t = Yn(t, e, 1), e = ct(), t !== null && (Zi(t, 1, e), vt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function x1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ct(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (Ge & n) === n && (Oe === 4 || Oe === 3 && (Ge & 130023424) === Ge && 500 > Ae() - Xd ? wr(e, 0) : Gd |= n), vt(e, t);
}
function Hy(e, t) {
  t === 0 && (e.mode & 1 ? (t = ys, ys <<= 1, !(ys & 130023424) && (ys = 4194304)) : t = 1);
  var n = ct();
  e = Cn(e, t), e !== null && (Zi(e, t, n), vt(e, n));
}
function L1(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Hy(e, n);
}
function _1(e, t) {
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
      throw Error(I(314));
  }
  r !== null && r.delete(t), Hy(e, n);
}
var Fy;
Fy = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || gt.current)
      ht = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return ht = !1, v1(e, t, n);
      ht = !!(e.flags & 131072);
    }
  else
    ht = !1, fe && t.flags & 1048576 && Kg(t, Ta, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qs(e, t), e = t.pendingProps;
      var o = mo(t, ot.current);
      lo(t, n), o = Bd(null, t, r, e, o, n);
      var i = Kd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(r) ? (i = !0, va(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Dd(t), o.updater = qa, t.stateNode = o, o._reactInternals = t, xu(t, r, e, n), t = zu(null, t, r, !0, i, n)) : (t.tag = 0, fe && i && _d(t), lt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = R1(r), e = Bt(r, e), o) {
          case 0:
            t = _u(null, t, r, e, n);
            break e;
          case 1:
            t = dm(null, t, r, e, n);
            break e;
          case 11:
            t = cm(null, t, r, e, n);
            break e;
          case 14:
            t = um(null, t, r, Bt(r.type, e), n);
            break e;
        }
        throw Error(I(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bt(r, o), _u(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bt(r, o), dm(e, t, r, o, n);
    case 3:
      e: {
        if (Ey(t), e === null)
          throw Error(I(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Xg(e, t), Ea(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = vo(Error(I(423)), t), t = fm(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = vo(Error(I(424)), t), t = fm(e, t, r, n, o);
            break e;
          } else
            for (At = Wn(t.stateNode.containerInfo.firstChild), Ct = t, fe = !0, Vt = null, n = Yg(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ho(), r === o) {
            t = bn(e, t, n);
            break e;
          }
          lt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Jg(t), e === null && bu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Su(r, o) ? s = null : i !== null && Su(r, i) && (t.flags |= 32), ky(e, t), lt(e, t, s, n), t.child;
    case 6:
      return e === null && bu(t), null;
    case 13:
      return Ay(e, t, n);
    case 4:
      return Hd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = go(t, null, r, n) : lt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bt(r, o), cm(e, t, r, o, n);
    case 7:
      return lt(e, t, t.pendingProps, n), t.child;
    case 8:
      return lt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return lt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ce(Sa, r._currentValue), r._currentValue = s, i !== null)
          if (Xt(i.value, s)) {
            if (i.children === o.children && !gt.current) {
              t = bn(e, t, n);
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
                      l = kn(-1, n & -n), l.tag = 2;
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null ? l.next = l : (l.next = f.next, f.next = l), c.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Nu(
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
                  throw Error(I(341));
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Nu(s, n, t), s = i.sibling;
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
        lt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, lo(t, n), o = Dt(o), r = r(o), t.flags |= 1, lt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Bt(r, t.pendingProps), o = Bt(r.type, o), um(e, t, r, o, n);
    case 15:
      return Ty(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bt(r, o), Qs(e, t), t.tag = 1, yt(r) ? (e = !0, va(t)) : e = !1, lo(t, n), yy(t, r, o), xu(t, r, o, n), zu(null, t, r, !0, e, n);
    case 19:
      return Cy(e, t, n);
    case 22:
      return Sy(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Uy(e, t) {
  return mg(e, t);
}
function z1(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function $t(e, t, n, r) {
  return new z1(e, t, n, r);
}
function ef(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function R1(e) {
  if (typeof e == "function")
    return ef(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === wd)
      return 11;
    if (e === Td)
      return 14;
  }
  return 2;
}
function Jn(e, t) {
  var n = e.alternate;
  return n === null ? (n = $t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ta(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function")
    ef(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case Vr:
          return Tr(n.children, o, i, t);
        case vd:
          s = 8, o |= 8;
          break;
        case qc:
          return e = $t(12, n, t, o | 2), e.elementType = qc, e.lanes = i, e;
        case eu:
          return e = $t(13, n, t, o), e.elementType = eu, e.lanes = i, e;
        case tu:
          return e = $t(19, n, t, o), e.elementType = tu, e.lanes = i, e;
        case Jh:
          return nl(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Gh:
                s = 10;
                break e;
              case Xh:
                s = 9;
                break e;
              case wd:
                s = 11;
                break e;
              case Td:
                s = 14;
                break e;
              case $n:
                s = 16, r = null;
                break e;
            }
          throw Error(I(130, e == null ? e : typeof e, ""));
      }
  return t = $t(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Tr(e, t, n, r) {
  return e = $t(7, e, r, t), e.lanes = n, e;
}
function nl(e, t, n, r) {
  return e = $t(22, e, r, t), e.elementType = Jh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function zc(e, t, n) {
  return e = $t(6, e, null, t), e.lanes = n, e;
}
function Rc(e, t, n) {
  return t = $t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function M1(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = pc(0), this.expirationTimes = pc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function tf(e, t, n, r, o, i, s, a, l) {
  return e = new M1(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = $t(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dd(i), e;
}
function O1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function jy(e) {
  if (!e)
    return tr;
  e = e._reactInternals;
  e: {
    if (xr(e) !== e || e.tag !== 1)
      throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (yt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (yt(n))
      return jg(e, n, t);
  }
  return t;
}
function By(e, t, n, r, o, i, s, a, l) {
  return e = tf(n, r, !0, e, o, i, s, a, l), e.context = jy(null), n = e.current, r = ct(), o = Xn(n), i = kn(r, o), i.callback = t ?? null, Yn(n, i, o), e.current.lanes = o, Zi(e, o, r), vt(e, r), e;
}
function rl(e, t, n, r) {
  var o = t.current, i = ct(), s = Xn(o);
  return n = jy(n), t.context === null ? t.context = n : t.pendingContext = n, t = kn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Yn(o, t, s), e !== null && (Gt(e, o, s, i), Gs(e, o, s)), s;
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
function km(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nf(e, t) {
  km(e, t), (e = e.alternate) && km(e, t);
}
function $1() {
  return null;
}
var Ky = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function rf(e) {
  this._internalRoot = e;
}
ol.prototype.render = rf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(I(409));
  rl(e, t, null, null);
};
ol.prototype.unmount = rf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cr(function() {
      rl(null, e, null, null);
    }), t[An] = null;
  }
};
function ol(e) {
  this._internalRoot = e;
}
ol.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Sg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dn.length && t !== 0 && t < Dn[n].priority; n++)
      ;
    Dn.splice(n, 0, e), n === 0 && Eg(e);
  }
};
function of(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function il(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Em() {
}
function I1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = _a(s);
        i.call(c);
      };
    }
    var s = By(t, r, e, 0, null, !1, !1, "", Em);
    return e._reactRootContainer = s, e[An] = s.current, Ci(e.nodeType === 8 ? e.parentNode : e), Cr(), s;
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
  var l = tf(e, 0, !1, null, null, !1, !1, "", Em);
  return e._reactRootContainer = l, e[An] = l.current, Ci(e.nodeType === 8 ? e.parentNode : e), Cr(function() {
    rl(t, l, n, r);
  }), l;
}
function sl(e, t, n, r, o) {
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
    rl(t, s, e, o);
  } else
    s = I1(n, t, e, o, r);
  return _a(s);
}
wg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ei(t.pendingLanes);
        n !== 0 && (Ed(t, n | 1), vt(t, Ae()), !(te & 6) && (wo = Ae() + 500, sr()));
      }
      break;
    case 13:
      Cr(function() {
        var r = Cn(e, 1);
        if (r !== null) {
          var o = ct();
          Gt(r, e, 1, o);
        }
      }), nf(e, 1);
  }
};
Ad = function(e) {
  if (e.tag === 13) {
    var t = Cn(e, 134217728);
    if (t !== null) {
      var n = ct();
      Gt(t, e, 134217728, n);
    }
    nf(e, 134217728);
  }
};
Tg = function(e) {
  if (e.tag === 13) {
    var t = Xn(e), n = Cn(e, t);
    if (n !== null) {
      var r = ct();
      Gt(n, e, t, r);
    }
    nf(e, t);
  }
};
Sg = function() {
  return se;
};
kg = function(e, t) {
  var n = se;
  try {
    return se = e, t();
  } finally {
    se = n;
  }
};
du = function(e, t, n) {
  switch (t) {
    case "input":
      if (ou(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Xa(r);
            if (!o)
              throw Error(I(90));
            qh(r), ou(r, o);
          }
        }
      }
      break;
    case "textarea":
      tg(e, n);
      break;
    case "select":
      t = n.value, t != null && oo(e, !!n.multiple, t, !1);
  }
};
lg = Jd;
cg = Cr;
var D1 = { usingClientEntryPoint: !1, Events: [Yi, Gr, Xa, sg, ag, Jd] }, Wo = { findFiberByHostInstance: hr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, H1 = { bundleType: Wo.bundleType, version: Wo.version, rendererPackageName: Wo.rendererPackageName, rendererConfig: Wo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = fg(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Wo.findFiberByHostInstance || $1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ps.isDisabled && Ps.supportsFiber)
    try {
      Za = Ps.inject(H1), un = Ps;
    } catch {
    }
}
Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D1;
Pt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!of(t))
    throw Error(I(200));
  return O1(e, t, null, n);
};
Pt.createRoot = function(e, t) {
  if (!of(e))
    throw Error(I(299));
  var n = !1, r = "", o = Ky;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = tf(e, 1, !1, null, null, n, !1, r, o), e[An] = t.current, Ci(e.nodeType === 8 ? e.parentNode : e), new rf(t);
};
Pt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = fg(t), e = e === null ? null : e.stateNode, e;
};
Pt.flushSync = function(e) {
  return Cr(e);
};
Pt.hydrate = function(e, t, n) {
  if (!il(t))
    throw Error(I(200));
  return sl(null, e, t, !0, n);
};
Pt.hydrateRoot = function(e, t, n) {
  if (!of(e))
    throw Error(I(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Ky;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = By(t, null, e, 1, n ?? null, o, !1, i, s), e[An] = t.current, Ci(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new ol(t);
};
Pt.render = function(e, t, n) {
  if (!il(t))
    throw Error(I(200));
  return sl(null, e, t, !1, n);
};
Pt.unmountComponentAtNode = function(e) {
  if (!il(e))
    throw Error(I(40));
  return e._reactRootContainer ? (Cr(function() {
    sl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[An] = null;
    });
  }), !0) : !1;
};
Pt.unstable_batchedUpdates = Jd;
Pt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!il(n))
    throw Error(I(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(I(38));
  return sl(e, t, n, !1, r);
};
Pt.version = "18.3.1-next-f1338f8080-20240426";
function Vy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vy);
    } catch (e) {
      console.error(e);
    }
}
Vy(), Vh.exports = Pt;
var F1 = Vh.exports, Zy, Am = F1;
Zy = Am.createRoot, Am.hydrateRoot;
function U1(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Cm = "$$material";
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xe.apply(null, arguments);
}
function al(e, t) {
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
var j1 = !1;
function B1(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function K1(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var V1 = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !j1 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(K1(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = B1(o);
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
}(), nt = "-ms-", za = "-moz-", oe = "-webkit-", Wy = "comm", sf = "rule", af = "decl", Z1 = "@import", Yy = "@keyframes", W1 = "@layer", Y1 = Math.abs, ll = String.fromCharCode, G1 = Object.assign;
function X1(e, t) {
  return Ze(e, 0) ^ 45 ? (((t << 2 ^ Ze(e, 0)) << 2 ^ Ze(e, 1)) << 2 ^ Ze(e, 2)) << 2 ^ Ze(e, 3) : 0;
}
function Gy(e) {
  return e.trim();
}
function J1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, n) {
  return e.replace(t, n);
}
function Ku(e, t) {
  return e.indexOf(t);
}
function Ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function Mi(e, t, n) {
  return e.slice(t, n);
}
function sn(e) {
  return e.length;
}
function lf(e) {
  return e.length;
}
function xs(e, t) {
  return t.push(e), e;
}
function Q1(e, t) {
  return e.map(t).join("");
}
var cl = 1, To = 1, Xy = 0, wt = 0, xe = 0, Lo = "";
function ul(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: cl, column: To, length: s, return: "" };
}
function Yo(e, t) {
  return G1(ul("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function q1() {
  return xe;
}
function eS() {
  return xe = wt > 0 ? Ze(Lo, --wt) : 0, To--, xe === 10 && (To = 1, cl--), xe;
}
function bt() {
  return xe = wt < Xy ? Ze(Lo, wt++) : 0, To++, xe === 10 && (To = 1, cl++), xe;
}
function fn() {
  return Ze(Lo, wt);
}
function na() {
  return wt;
}
function Xi(e, t) {
  return Mi(Lo, e, t);
}
function Oi(e) {
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
function Jy(e) {
  return cl = To = 1, Xy = sn(Lo = e), wt = 0, [];
}
function Qy(e) {
  return Lo = "", e;
}
function ra(e) {
  return Gy(Xi(wt - 1, Vu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function tS(e) {
  for (; (xe = fn()) && xe < 33; )
    bt();
  return Oi(e) > 2 || Oi(xe) > 3 ? "" : " ";
}
function nS(e, t) {
  for (; --t && bt() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return Xi(e, na() + (t < 6 && fn() == 32 && bt() == 32));
}
function Vu(e) {
  for (; bt(); )
    switch (xe) {
      case e:
        return wt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Vu(xe);
        break;
      case 40:
        e === 41 && Vu(e);
        break;
      case 92:
        bt();
        break;
    }
  return wt;
}
function rS(e, t) {
  for (; bt() && e + xe !== 47 + 10; )
    if (e + xe === 42 + 42 && fn() === 47)
      break;
  return "/*" + Xi(t, wt - 1) + "*" + ll(e === 47 ? e : bt());
}
function oS(e) {
  for (; !Oi(fn()); )
    bt();
  return Xi(e, wt);
}
function iS(e) {
  return Qy(oa("", null, null, null, [""], e = Jy(e), 0, [0], e));
}
function oa(e, t, n, r, o, i, s, a, l) {
  for (var c = 0, f = 0, u = s, p = 0, v = 0, k = 0, T = 1, _ = 1, h = 1, m = 0, g = "", b = o, C = i, N = r, S = g; _; )
    switch (k = m, m = bt()) {
      case 40:
        if (k != 108 && Ze(S, u - 1) == 58) {
          Ku(S += ie(ra(m), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += ra(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += tS(k);
        break;
      case 92:
        S += nS(na() - 1, 7);
        continue;
      case 47:
        switch (fn()) {
          case 42:
          case 47:
            xs(sS(rS(bt(), na()), t, n), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * T:
        a[c++] = sn(S) * h;
      case 125 * T:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            _ = 0;
          case 59 + f:
            h == -1 && (S = ie(S, /\f/g, "")), v > 0 && sn(S) - u && xs(v > 32 ? Nm(S + ";", r, n, u - 1) : Nm(ie(S, " ", "") + ";", r, n, u - 2), l);
            break;
          case 59:
            S += ";";
          default:
            if (xs(N = bm(S, t, n, c, f, o, a, g, b = [], C = [], u), i), m === 123)
              if (f === 0)
                oa(S, t, N, N, b, i, u, a, C);
              else
                switch (p === 99 && Ze(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    oa(e, N, N, r && xs(bm(e, N, N, 0, 0, o, a, g, o, b = [], u), C), o, C, u, a, r ? b : C);
                    break;
                  default:
                    oa(S, N, N, N, [""], C, 0, a, C);
                }
        }
        c = f = v = 0, T = h = 1, g = S = "", u = s;
        break;
      case 58:
        u = 1 + sn(S), v = k;
      default:
        if (T < 1) {
          if (m == 123)
            --T;
          else if (m == 125 && T++ == 0 && eS() == 125)
            continue;
        }
        switch (S += ll(m), m * T) {
          case 38:
            h = f > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            a[c++] = (sn(S) - 1) * h, h = 1;
            break;
          case 64:
            fn() === 45 && (S += ra(bt())), p = fn(), f = u = sn(g = S += oS(na())), m++;
            break;
          case 45:
            k === 45 && sn(S) == 2 && (T = 0);
        }
    }
  return i;
}
function bm(e, t, n, r, o, i, s, a, l, c, f) {
  for (var u = o - 1, p = o === 0 ? i : [""], v = lf(p), k = 0, T = 0, _ = 0; k < r; ++k)
    for (var h = 0, m = Mi(e, u + 1, u = Y1(T = s[k])), g = e; h < v; ++h)
      (g = Gy(T > 0 ? p[h] + " " + m : ie(m, /&\f/g, p[h]))) && (l[_++] = g);
  return ul(e, t, n, o === 0 ? sf : a, l, c, f);
}
function sS(e, t, n) {
  return ul(e, t, n, Wy, ll(q1()), Mi(e, 2, -2), 0);
}
function Nm(e, t, n, r) {
  return ul(e, t, n, af, Mi(e, 0, r), Mi(e, r + 1, -1), r);
}
function uo(e, t) {
  for (var n = "", r = lf(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function aS(e, t, n, r) {
  switch (e.type) {
    case W1:
      if (e.children.length)
        break;
    case Z1:
    case af:
      return e.return = e.return || e.value;
    case Wy:
      return "";
    case Yy:
      return e.return = e.value + "{" + uo(e.children, r) + "}";
    case sf:
      e.value = e.props.join(",");
  }
  return sn(n = uo(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function lS(e) {
  var t = lf(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function cS(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function qy(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var uS = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = fn(), o === 38 && i === 12 && (n[r] = 1), !Oi(i); )
    bt();
  return Xi(t, wt);
}, dS = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Oi(o)) {
      case 0:
        o === 38 && fn() === 12 && (n[r] = 1), t[r] += uS(wt - 1, n, r);
        break;
      case 2:
        t[r] += ra(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = fn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ll(o);
    }
  while (o = bt());
  return t;
}, fS = function(t, n) {
  return Qy(dS(Jy(t), n));
}, Pm = /* @__PURE__ */ new WeakMap(), pS = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Pm.get(r)) && !o) {
      Pm.set(t, !0);
      for (var i = [], s = fS(n, i), a = r.props, l = 0, c = 0; l < s.length; l++)
        for (var f = 0; f < a.length; f++, c++)
          t.props[c] = i[l] ? s[l].replace(/&\f/g, a[f]) : a[f] + " " + s[l];
    }
  }
}, mS = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ev(e, t) {
  switch (X1(e, t)) {
    case 5103:
      return oe + "print-" + e + e;
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
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + e + za + e + nt + e + e;
    case 6828:
    case 4268:
      return oe + e + nt + e + e;
    case 6165:
      return oe + e + nt + "flex-" + e + e;
    case 5187:
      return oe + e + ie(e, /(\w+).+(:[^]+)/, oe + "box-$1$2" + nt + "flex-$1$2") + e;
    case 5443:
      return oe + e + nt + "flex-item-" + ie(e, /flex-|-self/, "") + e;
    case 4675:
      return oe + e + nt + "flex-line-pack" + ie(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return oe + e + nt + ie(e, "shrink", "negative") + e;
    case 5292:
      return oe + e + nt + ie(e, "basis", "preferred-size") + e;
    case 6060:
      return oe + "box-" + ie(e, "-grow", "") + oe + e + nt + ie(e, "grow", "positive") + e;
    case 4554:
      return oe + ie(e, /([^-])(transform)/g, "$1" + oe + "$2") + e;
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return ie(ie(e, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + nt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, oe + "$1$2") + e;
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
      if (sn(e) - 1 - t > 6)
        switch (Ze(e, t + 1)) {
          case 109:
            if (Ze(e, t + 4) !== 45)
              break;
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + oe + "$2-$3$1" + za + (Ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ku(e, "stretch") ? ev(ie(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ze(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ze(e, sn(e) - 3 - (~Ku(e, "!important") && 10))) {
        case 107:
          return ie(e, ":", ":" + oe) + e;
        case 101:
          return ie(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + oe + (Ze(e, 14) === 45 ? "inline-" : "") + "box$3$1" + oe + "$2$3$1" + nt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ze(e, t + 11)) {
        case 114:
          return oe + e + nt + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return oe + e + nt + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return oe + e + nt + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return oe + e + nt + e + e;
  }
  return e;
}
var hS = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case af:
        t.return = ev(t.value, t.length);
        break;
      case Yy:
        return uo([Yo(t, {
          value: ie(t.value, "@", "@" + oe)
        })], o);
      case sf:
        if (t.length)
          return Q1(t.props, function(i) {
            switch (J1(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return uo([Yo(t, {
                  props: [ie(i, /:(read-\w+)/, ":" + za + "$1")]
                })], o);
              case "::placeholder":
                return uo([Yo(t, {
                  props: [ie(i, /:(plac\w+)/, ":" + oe + "input-$1")]
                }), Yo(t, {
                  props: [ie(i, /:(plac\w+)/, ":" + za + "$1")]
                }), Yo(t, {
                  props: [ie(i, /:(plac\w+)/, nt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, gS = [hS], yS = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(T) {
      var _ = T.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(T), T.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || gS, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(T) {
      for (var _ = T.getAttribute("data-emotion").split(" "), h = 1; h < _.length; h++)
        i[_[h]] = !0;
      a.push(T);
    }
  );
  var l, c = [pS, mS];
  {
    var f, u = [aS, cS(function(T) {
      f.insert(T);
    })], p = lS(c.concat(o, u)), v = function(_) {
      return uo(iS(_), p);
    };
    l = function(_, h, m, g) {
      f = m, v(_ ? _ + "{" + h.styles + "}" : h.styles), g && (k.inserted[h.name] = !0);
    };
  }
  var k = {
    key: n,
    sheet: new V1({
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
  return k.sheet.hydrate(a), k;
}, tv = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je = typeof Symbol == "function" && Symbol.for, cf = je ? Symbol.for("react.element") : 60103, uf = je ? Symbol.for("react.portal") : 60106, dl = je ? Symbol.for("react.fragment") : 60107, fl = je ? Symbol.for("react.strict_mode") : 60108, pl = je ? Symbol.for("react.profiler") : 60114, ml = je ? Symbol.for("react.provider") : 60109, hl = je ? Symbol.for("react.context") : 60110, df = je ? Symbol.for("react.async_mode") : 60111, gl = je ? Symbol.for("react.concurrent_mode") : 60111, yl = je ? Symbol.for("react.forward_ref") : 60112, vl = je ? Symbol.for("react.suspense") : 60113, vS = je ? Symbol.for("react.suspense_list") : 60120, wl = je ? Symbol.for("react.memo") : 60115, Tl = je ? Symbol.for("react.lazy") : 60116, wS = je ? Symbol.for("react.block") : 60121, TS = je ? Symbol.for("react.fundamental") : 60117, SS = je ? Symbol.for("react.responder") : 60118, kS = je ? Symbol.for("react.scope") : 60119;
function Lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case cf:
        switch (e = e.type, e) {
          case df:
          case gl:
          case dl:
          case pl:
          case fl:
          case vl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case hl:
              case yl:
              case Tl:
              case wl:
              case ml:
                return e;
              default:
                return t;
            }
        }
      case uf:
        return t;
    }
  }
}
function nv(e) {
  return Lt(e) === gl;
}
le.AsyncMode = df;
le.ConcurrentMode = gl;
le.ContextConsumer = hl;
le.ContextProvider = ml;
le.Element = cf;
le.ForwardRef = yl;
le.Fragment = dl;
le.Lazy = Tl;
le.Memo = wl;
le.Portal = uf;
le.Profiler = pl;
le.StrictMode = fl;
le.Suspense = vl;
le.isAsyncMode = function(e) {
  return nv(e) || Lt(e) === df;
};
le.isConcurrentMode = nv;
le.isContextConsumer = function(e) {
  return Lt(e) === hl;
};
le.isContextProvider = function(e) {
  return Lt(e) === ml;
};
le.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cf;
};
le.isForwardRef = function(e) {
  return Lt(e) === yl;
};
le.isFragment = function(e) {
  return Lt(e) === dl;
};
le.isLazy = function(e) {
  return Lt(e) === Tl;
};
le.isMemo = function(e) {
  return Lt(e) === wl;
};
le.isPortal = function(e) {
  return Lt(e) === uf;
};
le.isProfiler = function(e) {
  return Lt(e) === pl;
};
le.isStrictMode = function(e) {
  return Lt(e) === fl;
};
le.isSuspense = function(e) {
  return Lt(e) === vl;
};
le.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === dl || e === gl || e === pl || e === fl || e === vl || e === vS || typeof e == "object" && e !== null && (e.$$typeof === Tl || e.$$typeof === wl || e.$$typeof === ml || e.$$typeof === hl || e.$$typeof === yl || e.$$typeof === TS || e.$$typeof === SS || e.$$typeof === kS || e.$$typeof === wS);
};
le.typeOf = Lt;
tv.exports = le;
var ES = tv.exports, rv = ES, AS = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, CS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ov = {};
ov[rv.ForwardRef] = AS;
ov[rv.Memo] = CS;
var bS = !0;
function iv(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var ff = function(t, n, r) {
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
  bS === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, pf = function(t, n, r) {
  ff(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function NS(e) {
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
var PS = {
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
}, xS = !1, LS = /[A-Z]|^ms/g, _S = /_EMO_([^_]+?)_([^]*?)_EMO_/g, sv = function(t) {
  return t.charCodeAt(1) === 45;
}, xm = function(t) {
  return t != null && typeof t != "boolean";
}, Mc = /* @__PURE__ */ qy(function(e) {
  return sv(e) ? e : e.replace(LS, "-$&").toLowerCase();
}), Lm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(_S, function(r, o, i) {
          return an = {
            name: o,
            styles: i,
            next: an
          }, o;
        });
  }
  return PS[t] !== 1 && !sv(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, zS = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function $i(e, t, n) {
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
        return an = {
          name: o.name,
          styles: o.styles,
          next: an
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            an = {
              name: s.name,
              styles: s.styles,
              next: an
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return RS(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = an, c = n(e);
        return an = l, $i(e, t, c);
      }
      break;
    }
  }
  var f = n;
  if (t == null)
    return f;
  var u = t[f];
  return u !== void 0 ? u : f;
}
function RS(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += $i(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : xm(a) && (r += Mc(i) + ":" + Lm(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && xS)
          throw new Error(zS);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            xm(s[l]) && (r += Mc(i) + ":" + Lm(i, s[l]) + ";");
        else {
          var c = $i(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Mc(i) + ":" + c + ";";
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
var _m = /label:\s*([^\s;{]+)\s*(;|$)/g, an;
function Sl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  an = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += $i(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += $i(n, t, e[a]), r) {
      var l = i;
      o += l[a];
    }
  _m.lastIndex = 0;
  for (var c = "", f; (f = _m.exec(o)) !== null; )
    c += "-" + f[1];
  var u = NS(o) + c;
  return {
    name: u,
    styles: o,
    next: an
  };
}
var MS = function(t) {
  return t();
}, av = Jc["useInsertionEffect"] ? Jc["useInsertionEffect"] : !1, lv = av || MS, zm = av || E.useLayoutEffect, OS = !1, cv = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ yS({
    key: "css"
  }) : null
);
cv.Provider;
var mf = function(t) {
  return /* @__PURE__ */ E.forwardRef(function(n, r) {
    var o = E.useContext(cv);
    return t(n, o, r);
  });
}, Ji = /* @__PURE__ */ E.createContext({}), hf = {}.hasOwnProperty, Zu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", $S = function(t, n) {
  var r = {};
  for (var o in n)
    hf.call(n, o) && (r[o] = n[o]);
  return r[Zu] = t, r;
}, IS = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ff(n, r, o), lv(function() {
    return pf(n, r, o);
  }), null;
}, DS = /* @__PURE__ */ mf(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Zu], i = [r], s = "";
  typeof e.className == "string" ? s = iv(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = Sl(i, void 0, E.useContext(Ji));
  s += t.key + "-" + a.name;
  var l = {};
  for (var c in e)
    hf.call(e, c) && c !== "css" && c !== Zu && !OS && (l[c] = e[c]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(IS, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ E.createElement(o, l));
}), HS = DS, Oc = { exports: {} }, Rm;
function FS() {
  return Rm || (Rm = 1, function(e) {
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
  }(Oc)), Oc.exports;
}
FS();
var Mm = function(t, n) {
  var r = arguments;
  if (n == null || !hf.call(n, "css"))
    return E.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = HS, i[1] = $S(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return E.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Mm || (Mm = {}));
var US = /* @__PURE__ */ mf(function(e, t) {
  var n = e.styles, r = Sl([n], void 0, E.useContext(Ji)), o = E.useRef();
  return zm(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), zm(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && pf(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
}), jS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, BS = /* @__PURE__ */ qy(
  function(e) {
    return jS.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), KS = !1, VS = BS, ZS = function(t) {
  return t !== "theme";
}, Om = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? VS : ZS;
}, $m = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, WS = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ff(n, r, o), lv(function() {
    return pf(n, r, o);
  }), null;
}, YS = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = $m(t, n, r), l = a || Om(o), c = !l("as");
  return function() {
    var f = arguments, u = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && u.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      u.push.apply(u, f);
    else {
      var p = f[0];
      u.push(p[0]);
      for (var v = f.length, k = 1; k < v; k++)
        u.push(f[k], p[k]);
    }
    var T = mf(function(_, h, m) {
      var g = c && _.as || o, b = "", C = [], N = _;
      if (_.theme == null) {
        N = {};
        for (var S in _)
          N[S] = _[S];
        N.theme = E.useContext(Ji);
      }
      typeof _.className == "string" ? b = iv(h.registered, C, _.className) : _.className != null && (b = _.className + " ");
      var L = Sl(u.concat(C), h.registered, N);
      b += h.key + "-" + L.name, s !== void 0 && (b += " " + s);
      var U = c && a === void 0 ? Om(g) : l, R = {};
      for (var D in _)
        c && D === "as" || U(D) && (R[D] = _[D]);
      return R.className = b, m && (R.ref = m), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(WS, {
        cache: h,
        serialized: L,
        isStringTag: typeof g == "string"
      }), /* @__PURE__ */ E.createElement(g, R));
    });
    return T.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", T.defaultProps = t.defaultProps, T.__emotion_real = T, T.__emotion_base = o, T.__emotion_styles = u, T.__emotion_forwardProp = a, Object.defineProperty(T, "toString", {
      value: function() {
        return s === void 0 && KS ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), T.withComponent = function(_, h) {
      var m = e(_, Xe({}, n, h, {
        shouldForwardProp: $m(T, h, !0)
      }));
      return m.apply(void 0, u);
    }, T;
  };
}, GS = [
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
], Im = YS.bind(null);
GS.forEach(function(e) {
  Im[e] = Im(e);
});
function XS(e) {
  return e == null || Object.keys(e).length === 0;
}
function JS(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ d(US, {
    styles: typeof t == "function" ? (o) => t(XS(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Dm = [];
function QS(e) {
  return Dm[0] = e, Sl(Dm);
}
function jr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function uv(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !jr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = uv(e[n]);
  }), t;
}
function Ra(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? Xe({}, e) : e;
  return jr(e) && jr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ E.isValidElement(t[o]) ? r[o] = t[o] : jr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && jr(e[o]) ? r[o] = Ra(e[o], t[o], n) : n.clone ? r[o] = jr(t[o]) ? uv(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const qS = ["values", "unit", "step"], ek = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => Xe({}, n, {
    [r.key]: r.val
  }), {});
};
function tk(e) {
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
  } = e, o = al(e, qS), i = ek(t), s = Object.keys(i);
  function a(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function c(p, v) {
    const k = s.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(k !== -1 && typeof t[s[k]] == "number" ? t[s[k]] : v) - r / 100}${n})`;
  }
  function f(p) {
    return s.indexOf(p) + 1 < s.length ? c(p, s[s.indexOf(p) + 1]) : a(p);
  }
  function u(p) {
    const v = s.indexOf(p);
    return v === 0 ? a(s[1]) : v === s.length - 1 ? l(s[v]) : c(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return Xe({
    keys: s,
    values: i,
    up: a,
    down: l,
    between: c,
    only: f,
    not: u,
    unit: n
  }, o);
}
const nk = {
  borderRadius: 4
}, rk = nk;
function mi(e, t) {
  return t ? Ra(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const gf = {
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
}, Hm = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${gf[e]}px)`
};
function Nn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Hm;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Hm;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || gf).indexOf(a) !== -1) {
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
function ok(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Fm(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function dv(e) {
  if (typeof e != "string")
    throw new Error(U1(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function kl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Ma(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = kl(e, n) || r, t && (o = t(o, r, e)), o;
}
function Ce(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, c = kl(l, r) || {};
    return Nn(s, a, (u) => {
      let p = Ma(c, o, u);
      return u === p && typeof u == "string" && (p = Ma(c, o, `${t}${u === "default" ? "" : dv(u)}`, u)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function ik(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const sk = {
  m: "margin",
  p: "padding"
}, ak = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Um = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, lk = ik((e) => {
  if (e.length > 2)
    if (Um[e])
      e = Um[e];
    else
      return [e];
  const [t, n] = e.split(""), r = sk[t], o = ak[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), yf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], vf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...yf, ...vf];
function Qi(e, t, n, r) {
  var o;
  const i = (o = kl(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function fv(e) {
  return Qi(e, "spacing", 8);
}
function qi(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function ck(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = qi(t, n), r), {});
}
function uk(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = lk(n), i = ck(o, r), s = e[n];
  return Nn(e, s, i);
}
function pv(e, t) {
  const n = fv(e.theme);
  return Object.keys(e).map((r) => uk(e, t, r, n)).reduce(mi, {});
}
function Te(e) {
  return pv(e, yf);
}
Te.propTypes = {};
Te.filterProps = yf;
function Se(e) {
  return pv(e, vf);
}
Se.propTypes = {};
Se.filterProps = vf;
function dk(e = 8) {
  if (e.mui)
    return e;
  const t = fv({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function El(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? mi(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Mt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ft(e, t) {
  return Ce({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const fk = Ft("border", Mt), pk = Ft("borderTop", Mt), mk = Ft("borderRight", Mt), hk = Ft("borderBottom", Mt), gk = Ft("borderLeft", Mt), yk = Ft("borderColor"), vk = Ft("borderTopColor"), wk = Ft("borderRightColor"), Tk = Ft("borderBottomColor"), Sk = Ft("borderLeftColor"), kk = Ft("outline", Mt), Ek = Ft("outlineColor"), Al = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Qi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: qi(t, r)
    });
    return Nn(e, e.borderRadius, n);
  }
  return null;
};
Al.propTypes = {};
Al.filterProps = ["borderRadius"];
El(fk, pk, mk, hk, gk, yk, vk, wk, Tk, Sk, Al, kk, Ek);
const Cl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Qi(e.theme, "spacing", 8), n = (r) => ({
      gap: qi(t, r)
    });
    return Nn(e, e.gap, n);
  }
  return null;
};
Cl.propTypes = {};
Cl.filterProps = ["gap"];
const bl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Qi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: qi(t, r)
    });
    return Nn(e, e.columnGap, n);
  }
  return null;
};
bl.propTypes = {};
bl.filterProps = ["columnGap"];
const Nl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Qi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: qi(t, r)
    });
    return Nn(e, e.rowGap, n);
  }
  return null;
};
Nl.propTypes = {};
Nl.filterProps = ["rowGap"];
const Ak = Ce({
  prop: "gridColumn"
}), Ck = Ce({
  prop: "gridRow"
}), bk = Ce({
  prop: "gridAutoFlow"
}), Nk = Ce({
  prop: "gridAutoColumns"
}), Pk = Ce({
  prop: "gridAutoRows"
}), xk = Ce({
  prop: "gridTemplateColumns"
}), Lk = Ce({
  prop: "gridTemplateRows"
}), _k = Ce({
  prop: "gridTemplateAreas"
}), zk = Ce({
  prop: "gridArea"
});
El(Cl, bl, Nl, Ak, Ck, bk, Nk, Pk, xk, Lk, _k, zk);
function fo(e, t) {
  return t === "grey" ? t : e;
}
const Rk = Ce({
  prop: "color",
  themeKey: "palette",
  transform: fo
}), Mk = Ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: fo
}), Ok = Ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: fo
});
El(Rk, Mk, Ok);
function kt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const $k = Ce({
  prop: "width",
  transform: kt
}), wf = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || gf[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: kt(n)
      };
    };
    return Nn(e, e.maxWidth, t);
  }
  return null;
};
wf.filterProps = ["maxWidth"];
const Ik = Ce({
  prop: "minWidth",
  transform: kt
}), Dk = Ce({
  prop: "height",
  transform: kt
}), Hk = Ce({
  prop: "maxHeight",
  transform: kt
}), Fk = Ce({
  prop: "minHeight",
  transform: kt
});
Ce({
  prop: "size",
  cssProperty: "width",
  transform: kt
});
Ce({
  prop: "size",
  cssProperty: "height",
  transform: kt
});
const Uk = Ce({
  prop: "boxSizing"
});
El($k, wf, Ik, Dk, Hk, Fk, Uk);
const jk = {
  // borders
  border: {
    themeKey: "borders",
    transform: Mt
  },
  borderTop: {
    themeKey: "borders",
    transform: Mt
  },
  borderRight: {
    themeKey: "borders",
    transform: Mt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Mt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Mt
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
    transform: Mt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Al
  },
  // palette
  color: {
    themeKey: "palette",
    transform: fo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: fo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: fo
  },
  // spacing
  p: {
    style: Se
  },
  pt: {
    style: Se
  },
  pr: {
    style: Se
  },
  pb: {
    style: Se
  },
  pl: {
    style: Se
  },
  px: {
    style: Se
  },
  py: {
    style: Se
  },
  padding: {
    style: Se
  },
  paddingTop: {
    style: Se
  },
  paddingRight: {
    style: Se
  },
  paddingBottom: {
    style: Se
  },
  paddingLeft: {
    style: Se
  },
  paddingX: {
    style: Se
  },
  paddingY: {
    style: Se
  },
  paddingInline: {
    style: Se
  },
  paddingInlineStart: {
    style: Se
  },
  paddingInlineEnd: {
    style: Se
  },
  paddingBlock: {
    style: Se
  },
  paddingBlockStart: {
    style: Se
  },
  paddingBlockEnd: {
    style: Se
  },
  m: {
    style: Te
  },
  mt: {
    style: Te
  },
  mr: {
    style: Te
  },
  mb: {
    style: Te
  },
  ml: {
    style: Te
  },
  mx: {
    style: Te
  },
  my: {
    style: Te
  },
  margin: {
    style: Te
  },
  marginTop: {
    style: Te
  },
  marginRight: {
    style: Te
  },
  marginBottom: {
    style: Te
  },
  marginLeft: {
    style: Te
  },
  marginX: {
    style: Te
  },
  marginY: {
    style: Te
  },
  marginInline: {
    style: Te
  },
  marginInlineStart: {
    style: Te
  },
  marginInlineEnd: {
    style: Te
  },
  marginBlock: {
    style: Te
  },
  marginBlockStart: {
    style: Te
  },
  marginBlockEnd: {
    style: Te
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
    style: Cl
  },
  rowGap: {
    style: Nl
  },
  columnGap: {
    style: bl
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
    transform: kt
  },
  maxWidth: {
    style: wf
  },
  minWidth: {
    transform: kt
  },
  height: {
    transform: kt
  },
  maxHeight: {
    transform: kt
  },
  minHeight: {
    transform: kt
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
}, mv = jk;
function Bk(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Kk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vk() {
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
      transform: f,
      style: u
    } = a;
    if (r == null)
      return null;
    if (c === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = kl(o, c) || {};
    return u ? u(s) : Nn(s, r, (k) => {
      let T = Ma(p, f, k);
      return k === T && typeof k == "string" && (T = Ma(p, f, `${n}${k === "default" ? "" : dv(k)}`, k)), l === !1 ? T : {
        [l]: T
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
    const a = (r = i.unstable_sxConfig) != null ? r : mv;
    function l(c) {
      let f = c;
      if (typeof c == "function")
        f = c(i);
      else if (typeof c != "object")
        return c;
      if (!f)
        return null;
      const u = ok(i.breakpoints), p = Object.keys(u);
      let v = u;
      return Object.keys(f).forEach((k) => {
        const T = Kk(f[k], i);
        if (T != null)
          if (typeof T == "object")
            if (a[k])
              v = mi(v, e(k, T, i, a));
            else {
              const _ = Nn({
                theme: i
              }, T, (h) => ({
                [k]: h
              }));
              Bk(_, T) ? v[k] = t({
                sx: T,
                theme: i,
                nested: !0
              }) : v = mi(v, _);
            }
          else
            v = mi(v, e(k, T, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": Fm(p, v)
      } : Fm(p, v);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const hv = Vk();
hv.filterProps = ["sx"];
const Zk = hv;
function Wk(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Yk = ["breakpoints", "palette", "spacing", "shape"];
function Gk(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = al(e, Yk), a = tk(n), l = dk(o);
  let c = Ra({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Xe({
      mode: "light"
    }, r),
    spacing: l,
    shape: Xe({}, rk, i)
  }, s);
  return c.applyStyles = Wk, c = t.reduce((f, u) => Ra(f, u), c), c.unstable_sxConfig = Xe({}, mv, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(u) {
    return Zk({
      sx: u,
      theme: this
    });
  }, c;
}
function Xk(e) {
  return Object.keys(e).length === 0;
}
function Tf(e = null) {
  const t = E.useContext(Ji);
  return !t || Xk(t) ? e : t;
}
const Jk = Gk();
function Qk(e = Jk) {
  return Tf(e);
}
function $c(e) {
  const t = QS(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function qk({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Qk(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => $c(typeof s == "function" ? s(o) : s)) : i = $c(i)), /* @__PURE__ */ d(JS, {
    styles: i
  });
}
const eE = typeof window < "u" ? E.useLayoutEffect : E.useEffect, tE = eE;
let jm = 0;
function nE(e) {
  const [t, n] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && (jm += 1, n(`mui-${jm}`));
  }, [t]), r;
}
const Bm = Jc["useId".toString()];
function rE(e) {
  if (Bm !== void 0) {
    const t = Bm();
    return e ?? t;
  }
  return nE(e);
}
const oE = /* @__PURE__ */ E.createContext(null), gv = oE;
function yv() {
  return E.useContext(gv);
}
const iE = typeof Symbol == "function" && Symbol.for, sE = iE ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function aE(e, t) {
  return typeof t == "function" ? t(e) : Xe({}, e, t);
}
function lE(e) {
  const {
    children: t,
    theme: n
  } = e, r = yv(), o = E.useMemo(() => {
    const i = r === null ? n : aE(r, n);
    return i != null && (i[sE] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ d(gv.Provider, {
    value: o,
    children: t
  });
}
const cE = ["value"], uE = /* @__PURE__ */ E.createContext();
function dE(e) {
  let {
    value: t
  } = e, n = al(e, cE);
  return /* @__PURE__ */ d(uE.Provider, Xe({
    value: t ?? !0
  }, n));
}
const fE = /* @__PURE__ */ E.createContext(void 0);
function pE({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ d(fE.Provider, {
    value: e,
    children: t
  });
}
function mE(e) {
  const t = Tf(), n = rE() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, tE(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ d(qk, {
    styles: o
  }) : null;
}
const Km = {};
function Vm(e, t, n, r = !1) {
  return E.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? Xe({}, t, {
        [e]: i
      }) : i;
      return r ? () => s : s;
    }
    return e ? Xe({}, t, {
      [e]: n
    }) : Xe({}, t, n);
  }, [e, t, n, r]);
}
function hE(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Tf(Km), i = yv() || Km, s = Vm(r, o, n), a = Vm(r, i, n, !0), l = s.direction === "rtl", c = mE(s);
  return /* @__PURE__ */ d(lE, {
    theme: a,
    children: /* @__PURE__ */ d(Ji.Provider, {
      value: s,
      children: /* @__PURE__ */ d(dE, {
        value: l,
        children: /* @__PURE__ */ A(pE, {
          value: s == null ? void 0 : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const gE = ["theme"];
function yE(e) {
  let {
    theme: t
  } = e, n = al(e, gE);
  const r = t[Cm];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = Xe({}, r, {
    vars: null
  }) : t && !t.vars && (o = Xe({}, t, {
    vars: null
  }))), /* @__PURE__ */ d(hE, Xe({}, n, {
    themeId: r ? Cm : void 0,
    theme: o
  }));
}
const Wu = "[CHMarketingBuilder]", vE = {
  info: "color:#1565c0;font-weight:bold",
  resolved: "color:#2e7d32;font-weight:bold",
  missing: "color:#e65100;font-weight:bold",
  fallback: "color:#f57c00;font-weight:bold",
  error: "color:#c62828;font-weight:bold"
}, vv = {
  info: "INFO",
  resolved: "OK",
  missing: "MISSING",
  fallback: "FALLBACK",
  error: "ERROR"
};
let hi = [];
function wE(e) {
  return e instanceof Error ? e.message : e == null ? "" : String(e);
}
function TE(e, t, n, r) {
  const o = vv[e], i = vE[e];
  console.log(r ? `%c${Wu} %c${o}%c ${t}: ${n}
  → ${r}` : `%c${Wu} %c${o}%c ${t}: ${n}`, "font-weight:bold", i, "color:inherit");
}
function SE() {
  hi = [];
}
function es(e, t, n, r) {
  const o = wE(n);
  hi.push({ level: e, resource: t, detail: o, hint: r }), TE(e, t, o, r);
}
function ae(e, t) {
  es("info", e, t);
}
function Z(e, t) {
  es("resolved", e, t);
}
function Ue(e, t, n) {
  es("missing", e, t, n);
}
function kE(e, t, n) {
  es("fallback", e, t, n);
}
function vn(e, t, n) {
  es("error", e, t, n);
}
function Zm(e) {
  const t = hi.filter((n) => n.level !== "resolved" && n.level !== "info");
  console.groupCollapsed(
    `%c${Wu} Load summary — ${e.builderMode} builder (${t.length} note${t.length === 1 ? "" : "s"})`,
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
  }), hi.length > 0 && console.table(
    hi.map((n) => ({
      Level: vv[n.level],
      Resource: n.resource,
      Detail: n.detail,
      Hint: n.hint ?? ""
    }))
  ), console.groupEnd();
}
function br(e) {
  if (typeof e != "string" || !e.trim())
    return;
  const t = e.match(/\/entities\/(\d+)(?:\?|$|\/)/);
  if (!t)
    return;
  const n = Number(t[1]);
  return Number.isFinite(n) ? n : void 0;
}
function Nr(e) {
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
    const o = br(r.href) ?? br(r.entity);
    o != null && t.push(o);
  }
  return t;
}
function Pl(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = t.id ?? t.entityId;
  if (typeof n == "number" && Number.isFinite(n))
    return [n];
  const r = t.parent;
  if (r != null && typeof r == "object") {
    const s = r, a = br(s.href) ?? br(s.entity);
    if (a != null)
      return [a];
  }
  const o = Nr(t.parents);
  if (o.length > 0)
    return o;
  const i = Nr(t.children);
  return i.length > 0 ? i : [];
}
function it(e, t) {
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
function Sf(e, ...t) {
  if (!e)
    return [];
  for (const n of t) {
    const r = e[n];
    if (r != null) {
      if (Array.isArray(r)) {
        const o = Nr(r);
        if (o.length > 0)
          return o;
        continue;
      }
      if (typeof r == "object") {
        const o = Pl(r);
        if (o.length > 0)
          return o;
      }
    }
  }
  return [];
}
function Tt(e, t) {
  return e ? Object.keys(e).filter((n) => t.test(n)) : [];
}
async function Jt(e, t, n, r) {
  var s;
  const o = Sf(r, n);
  if (o.length > 0)
    return o;
  if (!((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    return [];
  const i = it(r, n);
  if (!i)
    return [];
  try {
    const a = await e.raw.getAsync(i);
    return !a.isSuccessStatusCode || a.content == null ? [] : Pl(a.content);
  } catch {
    return [];
  }
}
async function Ii(e, t, n, r) {
  const o = [...new Set(r)];
  for (const i of o) {
    const s = await Jt(e, t, i, n);
    if (s.length > 0)
      return { ids: s, relationName: i };
  }
  return { ids: [] };
}
function Bn(e, t) {
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
const EE = ["social", "email", "admin"], Di = [
  "templateToZone",
  "templateToTemplateZone",
  "TemplateToZone",
  "TemplateToTemplateZone",
  "EPAM.TemplateToZone",
  "EPAM.TemplateToTemplateZone",
  "templateToEPAM.TemplateZone",
  "EPAM.TemplateZone",
  "TemplateZone"
], Oa = [
  "templateZoneToTemplate",
  "zoneToTemplate",
  "TemplateZoneToTemplate",
  "EPAM.TemplateZoneToTemplate",
  "EPAM.TemplateToTemplateZone",
  "templateToTemplate"
], AE = [
  "marketingAssetToTemplate",
  "MarketingAssetToTemplate",
  "EPAM.MarketingAssetToTemplate"
], wv = [
  "templateZoneToAllowedAsset",
  "TemplateZoneToAllowedAsset",
  "EPAM.TemplateZoneToAllowedAsset",
  "templateZoneToAsset",
  "TemplateZoneToAsset",
  "EPAM.TemplateZoneToAsset"
], Tv = [
  "templateToAllowedAsset",
  "TemplateToAllowedAsset",
  "EPAM.TemplateToAllowedAsset",
  "templateToAsset",
  "TemplateToAsset",
  "EPAM.TemplateToAsset"
], CE = [
  "zoneType",
  "ZoneType",
  "EPAM.ZoneType",
  "templateZoneType",
  "TemplateZoneType",
  "EPAM.TemplateZoneType"
], Sv = [
  "zoneValueToSelectedAsset",
  "ZoneValueToSelectedAsset",
  "EPAM.MarketingAssetZoneValueToSelectedAsset",
  "marketingAssetZoneValueToSelectedAsset",
  "zoneValueToAsset",
  "ZoneValueToAsset"
];
function Wm(e) {
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
function Ym(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
  if (typeof e == "string")
    return e.trim() || void 0;
}
function kv(e) {
  if (!e || typeof e != "object")
    return;
  const t = e, n = t.systemProperties && typeof t.systemProperties == "object" ? t.systemProperties : null;
  return Ym(n == null ? void 0 : n.id) || Ym(t.id);
}
function bE(e, ...t) {
  if (!e || typeof e != "object")
    return;
  const n = e.relations;
  if (!n || typeof n != "object")
    return;
  const r = Sf(n, ...t);
  if (r[0] != null)
    return String(r[0]);
}
function Gm(e) {
  if (!(e != null && e.trim()) || !/^\d+$/.test(e.trim()))
    return;
  const t = Number(e.trim());
  return Number.isFinite(t) && t > 0 ? t : void 0;
}
function Xm(e) {
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
function Jm(e) {
  if (typeof e != "string")
    return;
  const t = e.trim().toLowerCase();
  return EE.includes(t) ? t : void 0;
}
function kf(e, t) {
  if (!(!e || typeof e != "object" || Array.isArray(e)))
    return e[t];
}
function Qm(e, t, n) {
  const r = kf(t, e), o = Xm(r);
  if (o !== void 0)
    return o;
  const i = Ev(n);
  if (i)
    return Xm(i[e]);
}
function Ev(e) {
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
function ft(e, t, n) {
  const r = kf(t, e), o = Wm(r);
  if (o)
    return o;
  const i = Ev(n);
  if (i)
    return Wm(i[e]);
}
function NE(e, t, n) {
  const r = Jm(kf(e, "builderMode")) ?? Jm(ft("builderMode", e, n)), o = ft("templateId", e, n) || bE(t, "marketingAssetToTemplate"), i = kv(t);
  return {
    builderMode: r,
    brandKitId: ft("brandKitId", e, n),
    templateId: o,
    marketingAssetId: i,
    userHasOverridePermission: Qm("userHasOverridePermission", e, n) ?? !1,
    allowTemplateZoneEditing: Qm("allowTemplateZoneEditing", e, n) ?? !1,
    renderEmailApiUrl: ft("renderEmailApiUrl", e, n) || "/api/render-email-html",
    contentHubProxyBase: ft("contentHubProxyBase", e, n) || "/api/content-hub",
    html2canvasCdnUrl: ft("html2canvasCdnUrl", e, n),
    figmaImportApiUrl: ft("figmaImportApiUrl", e, n) || "/api/figma/import",
    figmaImportApiToken: ft("figmaImportApiToken", e, n),
    designerDocumentProperty: ft("designerDocumentProperty", e, n),
    designerInstanceProperty: ft("designerInstanceProperty", e, n),
    searchIdentifier: ft("searchIdentifier", e, n),
    searchComponentId: Gm(ft("searchComponentId", e, n)) ?? Gm(ft("searchIdentifier", e, n)),
    selectionPoolIdentifier: ft("selectionPoolIdentifier", e, n)
  };
}
function Qn() {
  return "An entity ID is needed. Save this record in Content Hub first, then reload the page.";
}
function PE(e, t) {
  if (!kv(e))
    return Qn();
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
function qm(e, t) {
  if (e.builderMode)
    return e.builderMode;
  const n = t == null ? void 0 : t.trim().toLowerCase();
  return n === "email" || n === "newsletter" ? "email" : "social";
}
const eh = /* @__PURE__ */ new Map(), xE = ["EPAM.Template", "Template"], LE = ["EPAM.TemplateZone", "TemplateZone"];
function _E(e) {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
}
function Av(e) {
  if (e == null || typeof e != "object")
    return null;
  const t = e;
  if (Array.isArray(t.member_groups))
    return t;
  const n = t.content;
  return n != null && typeof n == "object" && !Array.isArray(n) ? n : Array.isArray(t.items) && t.items[0] != null && typeof t.items[0] == "object" ? t.items[0] : t;
}
function zE(e) {
  const t = Av(e);
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
async function $a(e, t) {
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
      const s = zE(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
function RE(e) {
  const t = Av(e);
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
        const l = a.associated_entitydefinition, c = (l == null ? void 0 : l.href) ?? "", f = typeof a.name == "string" ? a.name.trim() : "";
        f && n.push({
          name: f,
          role: typeof a.role == "string" ? a.role : void 0,
          target: c ? _E(c) : void 0
        });
      }
  }
  return n;
}
function ME(e) {
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
async function OE(e, t) {
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
      const s = RE(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
async function $E(e, t) {
  const n = eh.get(t);
  if (n)
    return n;
  const r = await OE(e, t);
  return eh.set(t, r), r;
}
async function Ia(e, t) {
  for (const n of t) {
    const r = await $E(e, n);
    if (r.length > 0)
      return r;
  }
  return [];
}
async function IE(e) {
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
      const a = ME(s.content);
      if (a.length === 0)
        continue;
      const l = await e.raw.getAsync(`/api/entities/${a[0]}`);
      if (!l.isSuccessStatusCode || !((o = l.content) != null && o.relations))
        continue;
      return Tt(l.content.relations, /template/i).filter(
        (c) => !/collection|asset/i.test(c)
      );
    } catch {
    }
  return [];
}
function Yu(e, t) {
  return !!(e && t.test(e));
}
function DE(e) {
  return Yu(e, /(^|\.)Template$/i) && !Yu(e, /TemplateZone/i);
}
async function xl(e, t) {
  const [n, r, o] = await Promise.all([
    Ia(e, xE),
    Ia(e, LE),
    IE(e)
  ]), i = n.filter((f) => Yu(f.target, /TemplateZone/i)).map((f) => f.name), s = r.filter((f) => DE(f.target)).map((f) => f.name), a = Tt(t, /zone/i).filter(
    (f) => !!it(t, f)
  ), l = [
    .../* @__PURE__ */ new Set([
      ...a,
      ...i,
      ...Tt(t, /zone/i)
    ])
  ], c = [
    .../* @__PURE__ */ new Set([
      ...o,
      ...s,
      ...Oa
    ])
  ];
  return l.length === 0 && c.length === Oa.length ? console.info(
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
function HE(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO template ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function FE(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO zone ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function Ef(e, t) {
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
function UE(e, t, n) {
  return {
    entitydefinition: {
      href: Ef(e, n)
    },
    properties: t
  };
}
function Da(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e;
    if (typeof t.href == "string" && t.href.trim())
      return t.href.trim();
  }
}
function jE(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = [];
  if (Array.isArray(t.children))
    for (const o of t.children) {
      const i = Da(o);
      i && n.push(i);
    }
  const r = Da(t.child);
  return r && n.push(r), n;
}
function BE(e, t) {
  if (e != null && typeof e == "object") {
    const n = Da(e.self);
    if (n)
      return n;
  }
  return t;
}
function Cv(e, t) {
  if (t) {
    const n = t.match(/^(https?:\/\/[^/]+)/i);
    if (n)
      return `${n[1]}/api/entities/${e}`;
  }
  return `/api/entities/${e}`;
}
async function Ll(e, t, n, r) {
  var a;
  const o = it(r, n), i = `/api/entities/${t}/relations/${n}`, s = o ? [.../* @__PURE__ */ new Set([o, i])] : [i];
  if (!((a = e.raw) != null && a.getAsync) || !o)
    return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
  for (const l of [o])
    try {
      const c = await e.raw.getAsync(l);
      if (!c.isSuccessStatusCode || c.content == null)
        continue;
      const f = jE(c.content), u = BE(c.content, l) ?? l;
      return { requestUrls: s, selfHref: u, childHrefs: f };
    } catch {
    }
  return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
}
function bv(e, t) {
  return {
    children: t.map((n) => ({ href: n })),
    self: { href: e }
  };
}
async function Hi(e, t, n) {
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
async function Qt(e, t, n, r, o) {
  var c;
  const i = await Ll(e, t, r, o), s = Cv(n, i.selfHref), a = [...i.childHrefs];
  a.some((f) => br(f) === Number(n)) || a.push(s);
  const l = bv(i.selfHref, a);
  if (await Hi(e, [...i.requestUrls, i.selfHref], l))
    return !0;
  if ((c = e.raw) != null && c.postAsync)
    for (const f of i.requestUrls)
      try {
        if ((await e.raw.postAsync(f, l)).isSuccessStatusCode || (await e.raw.postAsync(f, { child: { href: s } })).isSuccessStatusCode)
          return !0;
      } catch {
      }
  return !1;
}
async function _o(e, t, n, r, o) {
  const i = await Ll(e, t, r, o), s = i.childHrefs.filter(
    (l) => br(l) !== Number(n)
  );
  if (s.length === i.childHrefs.length)
    return !0;
  const a = bv(i.selfHref, s);
  return Hi(e, [...i.requestUrls, i.selfHref], a);
}
async function So(e, t, n, r, o) {
  var l;
  const i = await Ll(e, t, r, o), s = Cv(n, i.selfHref), a = {
    parent: { href: s },
    self: { href: i.selfHref }
  };
  if (await Hi(e, [...i.requestUrls, i.selfHref], a))
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
async function Nv(e, t, n, r, o) {
  var l;
  const i = await Ll(e, t, r, o), s = it(o, r) ?? i.selfHref;
  if ((l = e.raw) != null && l.getAsync && it(o, r))
    try {
      const c = await e.raw.getAsync(s);
      if (c.isSuccessStatusCode && c.content != null) {
        const f = Da(
          c.content.parent
        );
        if (!f || br(f) !== Number(n))
          return !0;
      }
    } catch {
    }
  const a = {
    parent: null,
    self: { href: i.selfHref }
  };
  return await Hi(e, [...i.requestUrls, i.selfHref], a) ? !0 : Hi(e, [...i.requestUrls, i.selfHref], {
    self: { href: i.selfHref }
  });
}
function gi(e, t, n) {
  const r = Tt(t, n), o = r.filter((i) => !!it(t, i));
  return [.../* @__PURE__ */ new Set([...o, ...e, ...r])];
}
function _l(e) {
  if (e.zoneType === "Logo")
    return !0;
  const t = (e.zoneKey ?? "").trim().toLowerCase(), n = (e.zoneLabel ?? "").trim().toLowerCase();
  return t === "logo" || n === "logo";
}
function KE(e, t) {
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
function Af(e, t, n) {
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
  return KE(t, n) ?? "Text";
}
const VE = ["EPAM.TemplateZone", "TemplateZone"], Wt = /* @__PURE__ */ new Map();
let th = !1, nh = !1, Fi = [];
function rh(e, ...t) {
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
function zl(e) {
  const t = e.properties ?? {}, n = e, r = Object.keys(t), o = rh(
    t,
    "identifier",
    "Identifier",
    "zoneTypeName",
    "ZoneTypeName",
    "Title",
    "Name",
    "Label",
    "label"
  ) || Bn(n, "zoneType") || Bn(n, "ZoneType");
  if (o)
    return o;
  for (const i of r) {
    const s = rh(t, i);
    if (s)
      return s;
  }
  return "";
}
function Rl(e, t) {
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
    Wt.has(s) || (Wt.set(s, String(t)), ae(
      "template zone type",
      `Mapped taxonomy ${t} → "${s}" (from "${e}")`
    ));
    return;
  }
  Wt.has(r) || (Wt.set(r, String(t)), ae("template zone type", `Mapped taxonomy ${t} → "${r}" (from "${e}")`));
}
function Ml(e) {
  const t = Fi.map((n) => n.name);
  return [
    .../* @__PURE__ */ new Set([
      ...t,
      ...CE,
      ...Tt(e, /zone.?type/i)
    ])
  ];
}
function ZE(e) {
  return Ml(e.relations).some(
    (t) => {
      var n;
      return !!((n = e.relations) != null && n[t]);
    }
  );
}
function Pv(e) {
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
function WE(e) {
  try {
    const n = Ef(e).match(/\/entitydefinitions\/([^/?#]+)/i);
    return n != null && n[1] ? decodeURIComponent(n[1]) : "";
  } catch {
    return "";
  }
}
async function YE(e, t, n) {
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
      const l = Pv(a.content);
      for (const c of l) {
        const f = await t(String(c)), u = zl(f);
        u && Rl(u, c);
      }
      if (l.length > 0)
        return Z(
          "template zone type",
          `Loaded ${l.length} taxonomy item(s) from ${n}; mapped ${Wt.size} zone type(s)`
        ), l.length;
    } catch {
    }
  return 0;
}
async function xv(e, t, n) {
  const r = Ml(n.relations);
  for (const o of r) {
    const i = await Jt(e, "", o, n.relations);
    if (i[0] == null)
      continue;
    const s = await t(String(i[0])), a = zl(s);
    return a && Rl(a, i[0]), WE(s) || void 0;
  }
}
async function Cf(e) {
  if (Fi.length > 0 || !e)
    return;
  Fi = (await Ia(e, VE)).filter((n) => /zone.?type/i.test(n.name));
}
async function Lv(e, t) {
  var o, i;
  if (nh || !((o = e == null ? void 0 : e.raw) != null && o.getAsync) || th)
    return;
  th = !0, await Cf(e);
  let n = ((i = Fi.find((s) => {
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
        const c = Pv(l.content);
        for (const f of c) {
          const u = await t(String(f)), p = await xv(e, t, u);
          p && !n && (n = p);
        }
        if (c.length > 0)
          break;
      } catch {
      }
    if (Wt.size > 0)
      break;
  }
  n && await YE(e, t, n), nh = !0, ae(
    "template zone type",
    `Taxonomy catalog ready: ${[...Wt.entries()].map(([s, a]) => `${s}=${a}`).join(", ") || "(empty)"}`
  );
}
async function GE(e, t, n) {
  await Cf(e);
  for (const r of n)
    await xv(e, t, r);
  Wt.size === 0 && await Lv(e, t);
}
async function XE(e, t, n) {
  const r = Wt.get(n);
  return r || (await Lv(e, t), Wt.get(n));
}
function JE(e) {
  var r;
  const t = Fi.find((o) => o.name === e);
  return ((r = t == null ? void 0 : t.role) == null ? void 0 : r.toLowerCase()) !== "parent";
}
async function oh(e, t, n, r) {
  var l;
  if (!((l = e == null ? void 0 : e.raw) != null && l.getAsync))
    return;
  const o = `/api/entities/${n}/relations/${r}`, i = await Jt(e, n, r, {
    [r]: { href: o }
  });
  if (i[0] == null)
    return;
  const s = await t(String(i[0])), a = zl(s);
  if (a)
    return Rl(a, i[0]), Af(a, "", "");
}
async function QE(e, t, n, r, o, i, s) {
  var c;
  if (!e)
    return !1;
  const a = e, l = JE(
    i
  ) ? [
    {
      label: "parent",
      run: () => So(a, n, r, i, s.relations)
    },
    {
      label: "child",
      run: () => Qt(a, n, r, i, s.relations)
    }
  ] : [
    {
      label: "child",
      run: () => Qt(a, n, r, i, s.relations)
    },
    {
      label: "parent",
      run: () => So(a, n, r, i, s.relations)
    }
  ];
  for (const f of l) {
    if (!await f.run())
      continue;
    const p = await oh(
      e,
      t,
      n,
      i
    );
    if (p === o)
      return Z(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via ${f.label} ${i}`
      ), !0;
    ae(
      "template zone type",
      `${f.label} write for zone ${n} → taxonomy ${r} returned OK but read-back is "${p ?? "(none)"}" (expected "${o}")`
    );
  }
  if ((c = e == null ? void 0 : e.raw) != null && c.postAsync) {
    const f = { parent: { href: `/api/entities/${r}` } };
    if ((await e.raw.postAsync(
      `/api/entities/${n}/relations/${i}`,
      f
    )).isSuccessStatusCode && await oh(
      e,
      t,
      n,
      i
    ) === o)
      return Z(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via POST parent ${i}`
      ), !0;
  }
  return !1;
}
async function qE(e, t, n, r) {
  const o = Ml(r.relations);
  for (const i of o) {
    const s = it(r.relations, i);
    if (!s)
      continue;
    const a = await Jt(e, n.id, i, {
      [i]: { href: s }
    });
    if (a[0] == null)
      continue;
    const l = await t(String(a[0])), c = zl(l);
    if (c)
      return Rl(c, a[0]), Af(c, n.zoneKey, n.zoneLabel);
  }
}
async function _v(e, t, n, r) {
  const o = await qE(e, t, n, r);
  return o ? { ...n, zoneType: o } : n;
}
async function eA(e, t, n, r, o) {
  await Cf(e);
  const i = await XE(e, t, r);
  if (!i) {
    const a = Object.keys(o.relations ?? {}).join(", ") || "(none)", l = [...Wt.keys()].join(", ") || "(none)";
    return ae(
      "template zone type",
      `No taxonomy item found for zone type "${r}" on zone ${n}. Known types: ${l}. Zone relations: ${a}.`
    ), !1;
  }
  const s = Ml(o.relations);
  for (const a of s)
    if (await QE(
      e,
      t,
      n,
      i,
      r,
      a,
      o
    ))
      return !0;
  return ae(
    "template zone type",
    `Could not link zone ${n} to taxonomy ${i} (${r}). Tried relations: ${s.join(", ") || "(none)"}`
  ), !1;
}
const Ic = ["EPAM.TemplateZone", "TemplateZone"];
let Ls = null;
function tA(e) {
  return /zone.?type/i.test(e);
}
function nA(e) {
  return /zone.?type/i.test(e);
}
function rA(e) {
  return e.filter((t) => tA(t.name)).map((t) => t.name);
}
async function oA(e) {
  if (Ls)
    return Ls;
  const [t, n] = await Promise.all([
    $a(e, Ic[0]).then(async (s) => s.length > 0 ? s : $a(e, Ic[1])),
    Ia(e, Ic)
  ]), r = rA(t), o = n.filter((s) => nA(s.name)).map((s) => s.name);
  let i = "unknown";
  return r.length > 0 && o.length === 0 ? i = "property" : o.length > 0 && r.length === 0 ? i = "relation" : r.length > 0 && o.length > 0 && (i = "both"), Ls = {
    mode: i,
    propertyNames: r.length > 0 ? r : ["zoneType", "ZoneType", "EPAM.zoneType", "zoneTypeMA"],
    relationNames: o
  }, Ls;
}
function iA(e) {
  return e.mode === "property" || e.mode === "both" || e.mode === "unknown";
}
function sA(e) {
  return e.mode === "relation" || e.mode === "both";
}
const aA = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], bf = [
  "AssetCollectionToAsset",
  "M.AssetCollectionToAsset",
  "collectionToAsset",
  "assetCollectionToAsset",
  "CollectionToAsset"
];
function ia(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function lA(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  return "Invariant" in t ? t.Invariant : Object.values(t).find((r) => typeof r == "string") ?? e;
}
function zv(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = lA(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function Rv(e) {
  var n;
  if (e == null || typeof e != "object")
    return;
  const t = e;
  for (const r of aA) {
    const o = t[r];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const i = ia(((n = o[0]) == null ? void 0 : n.href) ?? o[0]);
    if (i)
      return i;
  }
}
function cA(e) {
  var r;
  const t = (r = e.systemProperties) == null ? void 0 : r.id, n = e.id ?? e.entityId ?? t;
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  if (typeof n == "string" && n.trim())
    return n.trim();
}
function uA(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e, n = cA(t);
  if (n == null)
    return null;
  const r = t.properties ?? t.fields, o = Rv(t.renditions) ?? ia(t.thumbnailUrl) ?? ia(t.previewUrl) ?? ia(t.thumbnail);
  if (!o)
    return null;
  const i = zv(r, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${n}`;
  return {
    id: String(n),
    name: i,
    thumbnailUrl: o,
    previewUrl: o
  };
}
function zo(e, t) {
  const n = t.properties ?? {}, r = Rv(t.renditions);
  if (!r)
    return null;
  const o = zv(n, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${e}`;
  return {
    id: String(e),
    name: o,
    thumbnailUrl: r,
    previewUrl: r
  };
}
function ih(e, t) {
  if (!(t != null && t.trim()))
    return e;
  const n = t.trim().toLowerCase();
  return e.filter(
    (r) => r.name.toLowerCase().includes(n) || r.id.toLowerCase().includes(n)
  );
}
const Gu = "https://ws.overcasthq.com/wp-content/uploads/2025/05/sok_logo.png", dA = "https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58", fA = "https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png", pA = [
  {
    id: "color",
    label: "Full color",
    url: Gu,
    previewBackground: "#f7f7f7"
  },
  {
    id: "dark",
    label: "Dark background",
    url: `${Gu}#dark`,
    previewBackground: "#000000"
  }
], Xu = Gu, vr = "Arial, Helvetica, sans-serif", Zt = {
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
}, Mv = [
  { colorName: "Primary", hexValue: Zt.primary, colorUsageType: "Primary" },
  { colorName: "Secondary", hexValue: Zt.secondary, colorUsageType: "Secondary" },
  { colorName: "Accent", hexValue: Zt.accent, colorUsageType: "Accent" },
  { colorName: "Background", hexValue: Zt.background, colorUsageType: "Background" }
], Ov = [
  { fontFamily: vr, fontWeight: "Bold", fontUsageType: "Heading" },
  { fontFamily: vr, fontWeight: "Regular", fontUsageType: "Body" },
  { fontFamily: vr, fontWeight: "Medium", fontUsageType: "CTA" }
];
function mA(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t || t === dA || t === fA || /cytiva/i.test(t))
    return Xu;
  const n = pA.find((r) => r.url === t || r.id === t);
  return n ? n.url : t;
}
function ni(e) {
  var t;
  return {
    ...e,
    brandKitName: ((t = e.brandKitName) == null ? void 0 : t.trim()) || "SOK",
    logoAssetUrl: mA(e.logoAssetUrl),
    colors: Mv,
    fonts: Ov
  };
}
function hA(e) {
  return ni({
    id: e,
    brandKitName: "SOK",
    logoAssetUrl: Xu,
    colors: Mv,
    fonts: Ov
  });
}
function Ol(e, t) {
  return {
    width: Math.round(e / 25.4 * 96),
    height: Math.round(t / 25.4 * 96)
  };
}
function _s(e, t) {
  return {
    width: Math.round(e * 96),
    height: Math.round(t * 96)
  };
}
const zs = Ol(210, 297), Rs = Ol(297, 420), Ms = Ol(148, 210), ts = [
  { id: "a4-portrait", group: "print", label: "A4 portrait", width: zs.width, height: zs.height },
  { id: "a4-landscape", group: "print", label: "A4 landscape", width: zs.height, height: zs.width },
  { id: "a3-portrait", group: "print", label: "A3 portrait", width: Rs.width, height: Rs.height },
  { id: "a3-landscape", group: "print", label: "A3 landscape", width: Rs.height, height: Rs.width },
  { id: "a5-portrait", group: "print", label: "A5 portrait", width: Ms.width, height: Ms.height },
  { id: "a5-landscape", group: "print", label: "A5 landscape", width: Ms.height, height: Ms.width },
  { id: "letter-portrait", group: "print", label: "Letter portrait", ..._s(8.5, 11) },
  { id: "letter-landscape", group: "print", label: "Letter landscape", ..._s(11, 8.5) },
  { id: "tabloid-portrait", group: "print", label: "Tabloid portrait", ..._s(11, 17) },
  { id: "tabloid-landscape", group: "print", label: "Tabloid landscape", ..._s(17, 11) },
  {
    id: "business-card",
    group: "print",
    label: "Business card",
    ...Ol(85, 55)
  },
  { id: "1080-square", group: "social", label: "Square 1080", width: 1080, height: 1080 },
  { id: "1080-story", group: "social", label: "Story 1080 × 1920", width: 1080, height: 1920 },
  { id: "1080-portrait", group: "social", label: "Portrait 1080 × 1350", width: 1080, height: 1350 },
  { id: "1200-link", group: "social", label: "Link post 1200 × 628", width: 1200, height: 628 }
], gA = [
  { id: "print", label: "Print" },
  { id: "social", label: "Social" }
];
function Ju(e) {
  return ts.find((t) => t.id === e);
}
function $v(e, t, n) {
  if (n && Ju(n)) {
    const o = Ju(n);
    if (o.width === e && o.height === t)
      return o.id;
  }
  const r = ts.find((o) => o.width === e && o.height === t);
  return (r == null ? void 0 : r.id) ?? "custom";
}
const Nf = [
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
], Iv = [
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
], yA = [
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
], Dv = ts.filter(
  (e) => e.group === "print"
).map((e) => ({
  id: e.id,
  label: `${e.label} — ${e.width} × ${e.height}`,
  width: e.width,
  height: e.height,
  formatPreset: e.id
}));
function sa(e) {
  return e === "Social" || e === "Print";
}
function $l(e) {
  switch (e) {
    case "Email":
      return Iv;
    case "Newsletter":
      return yA;
    case "Print":
      return Dv;
    default:
      return Nf;
  }
}
function Hv(e) {
  const t = e.canvasWidth, n = e.canvasHeight;
  return t != null && n != null ? `${t} × ${n} px` : t != null ? `${t} px wide` : "Not set";
}
function vA(e, t) {
  return e.canvasWidth !== t.width ? !1 : t.height != null ? e.canvasHeight === t.height : e.canvasHeight == null || e.canvasHeight === void 0;
}
function wA(e) {
  const t = $l(e.channelType), n = t.find((o) => vA(e, o));
  if (n)
    return n.id;
  const r = t.find(
    (o) => o.formatPreset.trim().toLowerCase() === (e.formatPreset ?? "").trim().toLowerCase()
  );
  return r ? r.id : "custom";
}
function Qu(e, t, n) {
  return (e === "Social" || e === "Print") && t != null && n != null ? `${t}x${n}` : e === "Email" && t != null ? `${t}px email` : e === "Newsletter" && t != null ? `${t}px newsletter` : "";
}
function TA(e, t) {
  if (t === "custom")
    return null;
  const n = $l(e).find((r) => r.id === t);
  return n ? {
    canvasWidth: n.width,
    canvasHeight: n.height,
    formatPreset: n.formatPreset
  } : null;
}
function Fv(e) {
  const t = $l(e)[0];
  return {
    canvasWidth: t.width,
    canvasHeight: t.height,
    formatPreset: t.formatPreset
  };
}
function Pf(e) {
  return e.canvasWidth != null && Number.isFinite(e.canvasWidth) ? e.canvasWidth : e.channelType === "Email" || e.channelType === "Newsletter" ? Iv[0].width : Nf[0].width;
}
function Uv(e) {
  return e.canvasHeight != null && Number.isFinite(e.canvasHeight) ? e.canvasHeight : e.channelType === "Email" || e.channelType === "Newsletter" ? 800 : Nf[0].height ?? 1080;
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function sh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function SA(e) {
  if (Array.isArray(e))
    return e;
}
function kA(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, s, a = [], l = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0)
        for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); l = !0)
          ;
    } catch (f) {
      c = !0, o = f;
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
function EA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AA(e, t) {
  return SA(e) || kA(e, t) || CA(e, t) || EA();
}
function CA(e, t) {
  if (e) {
    if (typeof e == "string")
      return sh(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? sh(e, t) : void 0;
  }
}
const jv = Object.entries, ah = Object.setPrototypeOf, bA = Object.isFrozen, NA = Object.getPrototypeOf, PA = Object.getOwnPropertyDescriptor;
let Ye = Object.freeze, Qe = Object.seal, Br = Object.create, Bv = typeof Reflect < "u" && Reflect, qu = Bv.apply, ed = Bv.construct;
Ye || (Ye = function(t) {
  return t;
});
Qe || (Qe = function(t) {
  return t;
});
qu || (qu = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    o[i - 2] = arguments[i];
  return t.apply(n, o);
});
ed || (ed = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Go = ze(Array.prototype.forEach), xA = ze(Array.prototype.lastIndexOf), lh = ze(Array.prototype.pop), Hr = ze(Array.prototype.push), LA = ze(Array.prototype.splice), Fn = Array.isArray, ri = ze(String.prototype.toLowerCase), Dc = ze(String.prototype.toString), ch = ze(String.prototype.match), Xo = ze(String.prototype.replace), uh = ze(String.prototype.indexOf), _A = ze(String.prototype.trim), zA = ze(Number.prototype.toString), RA = ze(Boolean.prototype.toString), dh = typeof BigInt > "u" ? null : ze(BigInt.prototype.toString), fh = typeof Symbol > "u" ? null : ze(Symbol.prototype.toString), De = ze(Object.prototype.hasOwnProperty), Jo = ze(Object.prototype.toString), Ke = ze(RegExp.prototype.test), cr = MA(TypeError);
function ze(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return qu(e, t, r);
  };
}
function MA(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return ed(e, n);
  };
}
function q(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ri;
  if (ah && ah(e, null), !Fn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (bA(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function OA(e) {
  for (let t = 0; t < e.length; t++)
    De(e, t) || (e[t] = null);
  return e;
}
function at(e) {
  const t = Br(null);
  for (const r of jv(e)) {
    var n = AA(r, 2);
    const o = n[0], i = n[1];
    De(e, o) && (Fn(i) ? t[o] = OA(i) : i && typeof i == "object" && i.constructor === Object ? t[o] = at(i) : t[o] = i);
  }
  return t;
}
function $A(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return zA(e);
    case "boolean":
      return RA(e);
    case "bigint":
      return dh ? dh(e) : "0";
    case "symbol":
      return fh ? fh(e) : "Symbol()";
    case "undefined":
      return Jo(e);
    case "function":
    case "object": {
      if (e === null)
        return Jo(e);
      const t = e, n = rn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Jo(r);
      }
      return Jo(e);
    }
    default:
      return Jo(e);
  }
}
function rn(e, t) {
  for (; e !== null; ) {
    const r = PA(e, t);
    if (r) {
      if (r.get)
        return ze(r.get);
      if (typeof r.value == "function")
        return ze(r.value);
    }
    e = NA(e);
  }
  function n() {
    return null;
  }
  return n;
}
function IA(e) {
  try {
    return Ke(e, ""), !0;
  } catch {
    return !1;
  }
}
const ph = Ye(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Hc = Ye(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Fc = Ye(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), DA = Ye(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Uc = Ye(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), HA = Ye(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), mh = Ye(["#text"]), hh = Ye(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), jc = Ye(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), gh = Ye(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Os = Ye(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), FA = Qe(/{{[\w\W]*|^[\w\W]*}}/g), UA = Qe(/<%[\w\W]*|^[\w\W]*%>/g), jA = Qe(/\${[\w\W]*/g), BA = Qe(/^data-[\-\w.\u00B7-\uFFFF]+$/), KA = Qe(/^aria-[\-\w]+$/), yh = Qe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), VA = Qe(/^(?:\w+script|data):/i), ZA = Qe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), WA = Qe(/^html$/i), YA = Qe(/^[a-z][.\w]*(-[.\w]+)+$/i), vh = Qe(/<[/\w!]/g), GA = Qe(/<[/\w]/g), XA = Qe(/<\/no(script|embed|frames)/i), JA = Qe(/\/>/i), nn = {
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
}, QA = function() {
  return typeof window > "u" ? null : window;
}, qA = function(t, n) {
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
}, wh = function() {
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
}, Mn = function(t, n, r, o) {
  return De(t, n) && Fn(t[n]) ? q(o.base ? at(o.base) : {}, t[n], o.transform) : r;
};
function Kv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : QA();
  const t = (F) => Kv(F);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, s = e.Node, a = e.Element, l = e.NodeFilter, c = e.NamedNodeMap;
  c === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, u = e.trustedTypes, p = a.prototype, v = rn(p, "cloneNode"), k = rn(p, "remove"), T = rn(p, "nextSibling"), _ = rn(p, "childNodes"), h = rn(p, "parentNode"), m = rn(p, "shadowRoot"), g = rn(p, "attributes"), b = s && s.prototype ? rn(s.prototype, "nodeType") : null, C = s && s.prototype ? rn(s.prototype, "nodeName") : null;
  if (typeof i == "function") {
    const F = n.createElement("template");
    F.content && F.content.ownerDocument && (n = F.content.ownerDocument);
  }
  let N, S = "", L, U = !1, R = 0;
  const D = function() {
    if (R > 0)
      throw cr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, z = function(y) {
    D(), R++;
    try {
      return N.createHTML(y);
    } finally {
      R--;
    }
  }, Y = function(y) {
    D(), R++;
    try {
      return N.createScriptURL(y);
    } finally {
      R--;
    }
  }, Re = function() {
    return U || (L = qA(u, o), U = !0), L;
  }, qe = n, Ee = qe.implementation, W = qe.createNodeIterator, $ = qe.createDocumentFragment, O = qe.getElementsByTagName, w = r.importNode;
  let x = wh();
  t.isSupported = typeof jv == "function" && typeof h == "function" && Ee && Ee.createHTMLDocument !== void 0;
  const j = FA, Q = UA, V = jA, $e = BA, be = KA, Ne = VA, Be = ZA, Oo = YA;
  let Vf = yh, ge = null;
  const Zf = q({}, [...ph, ...Hc, ...Fc, ...Uc, ...mh]);
  let ye = null;
  const Wf = q({}, [...hh, ...jc, ...gh, ...Os]);
  let ve = Object.seal(Br(null, {
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
  })), $o = null, Yf = null;
  const Ln = Object.seal(Br(null, {
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
  let Gf = !0, Vl = !0, Xf = !1, Jf = !0, _n = !1, Io = !0, ar = !1, Zl = !1, Wl = null, Yl = null, Gl = !1, Rr = !1, is = !1, ss = !1, Qf = !0, qf = !1;
  const ep = "user-content-";
  let Xl = !0, Jl = !1, Mr = {}, qt = null;
  const Ql = q({}, [
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
  let tp = null;
  const np = q({}, ["audio", "video", "img", "source", "image", "track"]);
  let ql = null;
  const rp = q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), as = "http://www.w3.org/1998/Math/MathML", ls = "http://www.w3.org/2000/svg", en = "http://www.w3.org/1999/xhtml";
  let Or = en, ec = !1, tc = null;
  const X0 = q({}, [as, ls, en], Dc), op = Ye(["mi", "mo", "mn", "ms", "mtext"]);
  let nc = q({}, op);
  const ip = Ye(["annotation-xml"]);
  let rc = q({}, ip);
  const J0 = q({}, ["title", "style", "font", "a", "script"]);
  let Do = null;
  const Q0 = ["application/xhtml+xml", "text/html"], q0 = "text/html";
  let we = null, $r = null;
  const ew = n.createElement("form"), sp = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, oc = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if ($r && $r === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = at(y), Do = // eslint-disable-next-line unicorn/prefer-includes
    Q0.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? q0 : y.PARSER_MEDIA_TYPE, we = Do === "application/xhtml+xml" ? Dc : ri, ge = Mn(y, "ALLOWED_TAGS", Zf, {
      transform: we
    }), ye = Mn(y, "ALLOWED_ATTR", Wf, {
      transform: we
    }), tc = Mn(y, "ALLOWED_NAMESPACES", X0, {
      transform: Dc
    }), ql = Mn(y, "ADD_URI_SAFE_ATTR", rp, {
      transform: we,
      base: rp
    }), tp = Mn(y, "ADD_DATA_URI_TAGS", np, {
      transform: we,
      base: np
    }), qt = Mn(y, "FORBID_CONTENTS", Ql, {
      transform: we
    }), $o = Mn(y, "FORBID_TAGS", at({}), {
      transform: we
    }), Yf = Mn(y, "FORBID_ATTR", at({}), {
      transform: we
    }), Mr = De(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? at(y.USE_PROFILES) : y.USE_PROFILES : !1, Gf = y.ALLOW_ARIA_ATTR !== !1, Vl = y.ALLOW_DATA_ATTR !== !1, Xf = y.ALLOW_UNKNOWN_PROTOCOLS || !1, Jf = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _n = y.SAFE_FOR_TEMPLATES || !1, Io = y.SAFE_FOR_XML !== !1, ar = y.WHOLE_DOCUMENT || !1, Rr = y.RETURN_DOM || !1, is = y.RETURN_DOM_FRAGMENT || !1, ss = y.RETURN_TRUSTED_TYPE || !1, Gl = y.FORCE_BODY || !1, Qf = y.SANITIZE_DOM !== !1, qf = y.SANITIZE_NAMED_PROPS || !1, Xl = y.KEEP_CONTENT !== !1, Jl = y.IN_PLACE || !1, Vf = IA(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : yh, Or = typeof y.NAMESPACE == "string" ? y.NAMESPACE : en, nc = De(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? at(y.MATHML_TEXT_INTEGRATION_POINTS) : q({}, op), rc = De(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? at(y.HTML_INTEGRATION_POINTS) : q({}, ip);
    const P = De(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? at(y.CUSTOM_ELEMENT_HANDLING) : Br(null);
    if (ve = Br(null), De(P, "tagNameCheck") && sp(P.tagNameCheck) && (ve.tagNameCheck = P.tagNameCheck), De(P, "attributeNameCheck") && sp(P.attributeNameCheck) && (ve.attributeNameCheck = P.attributeNameCheck), De(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Qe(ve), _n && (Vl = !1), is && (Rr = !0), Mr && (ge = q({}, mh), ye = Br(null), Mr.html === !0 && (q(ge, ph), q(ye, hh)), Mr.svg === !0 && (q(ge, Hc), q(ye, jc), q(ye, Os)), Mr.svgFilters === !0 && (q(ge, Fc), q(ye, jc), q(ye, Os)), Mr.mathMl === !0 && (q(ge, Uc), q(ye, gh), q(ye, Os))), Ln.tagCheck = null, Ln.attributeCheck = null, De(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? Ln.tagCheck = y.ADD_TAGS : Fn(y.ADD_TAGS) && (ge === Zf && (ge = at(ge)), q(ge, y.ADD_TAGS, we))), De(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? Ln.attributeCheck = y.ADD_ATTR : Fn(y.ADD_ATTR) && (ye === Wf && (ye = at(ye)), q(ye, y.ADD_ATTR, we))), De(y, "ADD_URI_SAFE_ATTR") && Fn(y.ADD_URI_SAFE_ATTR) && q(ql, y.ADD_URI_SAFE_ATTR, we), De(y, "FORBID_CONTENTS") && Fn(y.FORBID_CONTENTS) && (qt === Ql && (qt = at(qt)), q(qt, y.FORBID_CONTENTS, we)), De(y, "ADD_FORBID_CONTENTS") && Fn(y.ADD_FORBID_CONTENTS) && (qt === Ql && (qt = at(qt)), q(qt, y.ADD_FORBID_CONTENTS, we)), Xl && (ge["#text"] = !0), ar && q(ge, ["html", "head", "body"]), ge.table && (q(ge, ["tbody"]), delete $o.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw cr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw cr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const H = N;
      N = y.TRUSTED_TYPES_POLICY;
      try {
        S = z("");
      } catch (K) {
        throw N = H, K;
      }
    } else
      y.TRUSTED_TYPES_POLICY === null ? (N = void 0, S = "") : (N === void 0 && (N = Re()), N && typeof S == "string" && (S = z("")));
    Ye && Ye(y), $r = y;
  }, ap = q({}, [...Hc, ...Fc, ...DA]), lp = q({}, [...Uc, ...HA]), tw = function(y, P, H) {
    return P.namespaceURI === en ? y === "svg" : P.namespaceURI === as ? y === "svg" && (H === "annotation-xml" || nc[H]) : !!ap[y];
  }, nw = function(y, P, H) {
    return P.namespaceURI === en ? y === "math" : P.namespaceURI === ls ? y === "math" && rc[H] : !!lp[y];
  }, rw = function(y, P, H) {
    return P.namespaceURI === ls && !rc[H] || P.namespaceURI === as && !nc[H] ? !1 : !lp[y] && (J0[y] || !ap[y]);
  }, ow = function(y) {
    let P = h(y);
    (!P || !P.tagName) && (P = {
      namespaceURI: Or,
      tagName: "template"
    });
    const H = ri(y.tagName), K = ri(P.tagName);
    return tc[y.namespaceURI] ? y.namespaceURI === ls ? tw(H, P, K) : y.namespaceURI === as ? nw(H, P, K) : y.namespaceURI === en ? rw(H, P, K) : !!(Do === "application/xhtml+xml" && tc[y.namespaceURI]) : !1;
  }, zn = function(y) {
    Hr(t.removed, {
      element: y
    });
    try {
      h(y).removeChild(y);
    } catch {
      if (k(y), !h(y))
        throw cr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, cp = function(y) {
    const P = _(y);
    if (P) {
      const K = [];
      Go(P, (X) => {
        Hr(K, X);
      }), Go(K, (X) => {
        try {
          k(X);
        } catch {
        }
      });
    }
    const H = g(y);
    if (H)
      for (let K = H.length - 1; K >= 0; --K) {
        const X = H[K], ee = X && X.name;
        if (typeof ee == "string")
          try {
            y.removeAttribute(ee);
          } catch {
          }
      }
  }, lr = function(y, P) {
    try {
      Hr(t.removed, {
        attribute: P.getAttributeNode(y),
        from: P
      });
    } catch {
      Hr(t.removed, {
        attribute: null,
        from: P
      });
    }
    if (P.removeAttribute(y), y === "is")
      if (Rr || is)
        try {
          zn(P);
        } catch {
        }
      else
        try {
          P.setAttribute(y, "");
        } catch {
        }
  }, iw = function(y) {
    const P = g(y);
    if (P)
      for (let H = P.length - 1; H >= 0; --H) {
        const K = P[H], X = K && K.name;
        if (!(typeof X != "string" || ye[we(X)]))
          try {
            y.removeAttribute(X);
          } catch {
          }
      }
  }, sw = function(y) {
    const P = [y];
    for (; P.length > 0; ) {
      const H = P.pop();
      (b ? b(H) : H.nodeType) === nn.element && iw(H);
      const X = _(H);
      if (X)
        for (let ee = X.length - 1; ee >= 0; --ee)
          P.push(X[ee]);
    }
  }, up = function(y) {
    let P = null, H = null;
    if (Gl)
      y = "<remove></remove>" + y;
    else {
      const ee = ch(y, /^[\r\n\t ]+/);
      H = ee && ee[0];
    }
    Do === "application/xhtml+xml" && Or === en && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const K = N ? z(y) : y;
    if (Or === en)
      try {
        P = new f().parseFromString(K, Do);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = Ee.createDocument(Or, "template", null);
      try {
        P.documentElement.innerHTML = ec ? S : K;
      } catch {
      }
    }
    const X = P.body || P.documentElement;
    return y && H && X.insertBefore(n.createTextNode(H), X.childNodes[0] || null), Or === en ? O.call(P, ar ? "html" : "body")[0] : ar ? P.documentElement : X;
  }, dp = function(y) {
    return W.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, cs = function(y) {
    return y = Xo(y, j, " "), y = Xo(y, Q, " "), y = Xo(y, V, " "), y;
  }, ic = function(y) {
    var P;
    y.normalize();
    const H = W.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let K = H.nextNode();
    for (; K; )
      K.data = cs(K.data), K = H.nextNode();
    const X = (P = y.querySelectorAll) === null || P === void 0 ? void 0 : P.call(y, "template");
    X && Go(X, (ee) => {
      Ir(ee.content) && ic(ee.content);
    });
  }, us = function(y) {
    const P = C ? C(y) : null;
    return typeof P != "string" || we(P) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== g(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== b(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    y.childNodes !== _(y);
  }, Ir = function(y) {
    if (!b || typeof y != "object" || y === null)
      return !1;
    try {
      return b(y) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, Ho = function(y) {
    if (!b || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof b(y) == "number";
    } catch {
      return !1;
    }
  };
  function mn(F, y, P) {
    F.length !== 0 && Go(F, (H) => {
      H.call(t, y, P, $r);
    });
  }
  const aw = function(y, P) {
    return !!(Io && y.hasChildNodes() && !Ho(y.firstElementChild) && Ke(vh, y.textContent) && Ke(vh, y.innerHTML) || Io && y.namespaceURI === en && P === "style" && Ho(y.firstElementChild) || y.nodeType === nn.processingInstruction || Io && y.nodeType === nn.comment && Ke(GA, y.data));
  }, lw = function(y, P) {
    if (!$o[P] && mp(P) && (ve.tagNameCheck instanceof RegExp && Ke(ve.tagNameCheck, P) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(P)))
      return !1;
    if (Xl && !qt[P]) {
      const H = h(y), K = _(y);
      if (K && H) {
        const X = K.length;
        for (let ee = X - 1; ee >= 0; --ee) {
          const Ie = Jl ? K[ee] : v(K[ee], !0);
          H.insertBefore(Ie, T(y));
        }
      }
    }
    return zn(y), !0;
  }, fp = function(y) {
    if (mn(x.beforeSanitizeElements, y, null), us(y))
      return zn(y), !0;
    const P = we(C ? C(y) : y.nodeName);
    if (mn(x.uponSanitizeElement, y, {
      tagName: P,
      allowedTags: ge
    }), aw(y, P))
      return zn(y), !0;
    if ($o[P] || !(Ln.tagCheck instanceof Function && Ln.tagCheck(P)) && !ge[P])
      return lw(y, P);
    if ((b ? b(y) : y.nodeType) === nn.element && !ow(y) || (P === "noscript" || P === "noembed" || P === "noframes") && Ke(XA, y.innerHTML))
      return zn(y), !0;
    if (_n && y.nodeType === nn.text) {
      const K = cs(y.textContent);
      y.textContent !== K && (Hr(t.removed, {
        element: y.cloneNode()
      }), y.textContent = K);
    }
    return mn(x.afterSanitizeElements, y, null), !1;
  }, pp = function(y, P, H) {
    if (Yf[P] || Qf && (P === "id" || P === "name") && (H in n || H in ew))
      return !1;
    const K = ye[P] || Ln.attributeCheck instanceof Function && Ln.attributeCheck(P, y);
    if (!(Vl && Ke($e, P))) {
      if (!(Gf && Ke(be, P))) {
        if (K) {
          if (!ql[P]) {
            if (!Ke(Vf, Xo(H, Be, ""))) {
              if (!((P === "src" || P === "xlink:href" || P === "href") && y !== "script" && uh(H, "data:") === 0 && tp[y])) {
                if (!(Xf && !Ke(Ne, Xo(H, Be, "")))) {
                  if (H)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(mp(y) && (ve.tagNameCheck instanceof RegExp && Ke(ve.tagNameCheck, y) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(y)) && (ve.attributeNameCheck instanceof RegExp && Ke(ve.attributeNameCheck, P) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(P, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          P === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Ke(ve.tagNameCheck, H) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(H)))
        )
          return !1;
      }
    }
    return !0;
  }, cw = q({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), mp = function(y) {
    return !cw[ri(y)] && Ke(Oo, y);
  }, uw = function(y, P, H, K) {
    if (N && typeof u == "object" && typeof u.getAttributeType == "function" && !H)
      switch (u.getAttributeType(y, P)) {
        case "TrustedHTML":
          return z(K);
        case "TrustedScriptURL":
          return Y(K);
      }
    return K;
  }, dw = function(y, P, H, K) {
    try {
      H ? y.setAttributeNS(H, P, K) : y.setAttribute(P, K), us(y) ? zn(y) : lh(t.removed);
    } catch {
      lr(P, y);
    }
  }, hp = function(y) {
    mn(x.beforeSanitizeAttributes, y, null);
    const P = y.attributes;
    if (!P || us(y))
      return;
    const H = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let K = P.length;
    const X = we(y.nodeName);
    for (; K--; ) {
      const ee = P[K], Ie = ee.name, Pe = ee.namespaceURI, _t = ee.value, Ut = we(Ie), ac = _t;
      let st = Ie === "value" ? ac : _A(ac);
      if (H.attrName = Ut, H.attrValue = st, H.keepAttr = !0, H.forceKeepAttr = void 0, mn(x.uponSanitizeAttribute, y, H), st = H.attrValue, qf && (Ut === "id" || Ut === "name") && uh(st, ep) !== 0 && (lr(Ie, y), st = ep + st), Io && Ke(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        lr(Ie, y);
        continue;
      }
      if (Ut === "attributename" && ch(st, "href")) {
        lr(Ie, y);
        continue;
      }
      if (!H.forceKeepAttr) {
        if (!H.keepAttr) {
          lr(Ie, y);
          continue;
        }
        if (!Jf && Ke(JA, st)) {
          lr(Ie, y);
          continue;
        }
        if (_n && (st = cs(st)), !pp(X, Ut, st)) {
          lr(Ie, y);
          continue;
        }
        st = uw(X, Ut, Pe, st), st !== ac && dw(y, Ie, Pe, st);
      }
    }
    mn(x.afterSanitizeAttributes, y, null);
  }, ds = function(y) {
    let P = null;
    const H = dp(y);
    for (mn(x.beforeSanitizeShadowDOM, y, null); P = H.nextNode(); )
      if (mn(x.uponSanitizeShadowNode, P, null), fp(P), hp(P), Ir(P.content) && ds(P.content), (b ? b(P) : P.nodeType) === nn.element) {
        const X = m(P);
        Ir(X) && (sc(X), ds(X));
      }
    mn(x.afterSanitizeShadowDOM, y, null);
  }, sc = function(y) {
    const P = [{
      node: y,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const H = P.pop();
      if (H.shadow) {
        ds(H.shadow);
        continue;
      }
      const K = H.node, ee = (b ? b(K) : K.nodeType) === nn.element, Ie = _(K);
      if (Ie)
        for (let Pe = Ie.length - 1; Pe >= 0; --Pe)
          P.push({
            node: Ie[Pe],
            shadow: null
          });
      if (ee) {
        const Pe = C ? C(K) : null;
        if (typeof Pe == "string" && we(Pe) === "template") {
          const _t = K.content;
          Ir(_t) && P.push({
            node: _t,
            shadow: null
          });
        }
      }
      if (ee) {
        const Pe = m(K);
        Ir(Pe) && P.push({
          node: null,
          shadow: Pe
        }, {
          node: Pe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, H = null, K = null, X = null;
    if (ec = !F, ec && (F = "<!-->"), typeof F != "string" && !Ho(F) && (F = $A(F), typeof F != "string"))
      throw cr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    Zl ? (ge = Wl, ye = Yl) : oc(y), (x.uponSanitizeElement.length > 0 || x.uponSanitizeAttribute.length > 0) && (ge = at(ge)), x.uponSanitizeAttribute.length > 0 && (ye = at(ye)), t.removed = [];
    const ee = Jl && typeof F != "string" && Ho(F);
    if (ee) {
      const _t = C ? C(F) : F.nodeName;
      if (typeof _t == "string") {
        const Ut = we(_t);
        if (!ge[Ut] || $o[Ut])
          throw cr("root node is forbidden and cannot be sanitized in-place");
      }
      if (us(F))
        throw cr("root node is clobbered and cannot be sanitized in-place");
      try {
        sc(F);
      } catch (Ut) {
        throw cp(F), Ut;
      }
    } else if (Ho(F))
      P = up("<!---->"), H = P.ownerDocument.importNode(F, !0), H.nodeType === nn.element && H.nodeName === "BODY" || H.nodeName === "HTML" ? P = H : P.appendChild(H), sc(H);
    else {
      if (!Rr && !_n && !ar && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return N && ss ? z(F) : F;
      if (P = up(F), !P)
        return Rr ? null : ss ? S : "";
    }
    P && Gl && zn(P.firstChild);
    const Ie = dp(ee ? F : P);
    try {
      for (; K = Ie.nextNode(); )
        fp(K), hp(K), Ir(K.content) && ds(K.content);
    } catch (_t) {
      throw ee && cp(F), _t;
    }
    if (ee)
      return Go(t.removed, (_t) => {
        _t.element && sw(_t.element);
      }), _n && ic(F), F;
    if (Rr) {
      if (_n && ic(P), is)
        for (X = $.call(P.ownerDocument); P.firstChild; )
          X.appendChild(P.firstChild);
      else
        X = P;
      return (ye.shadowroot || ye.shadowrootmode) && (X = w.call(r, X, !0)), X;
    }
    let Pe = ar ? P.outerHTML : P.innerHTML;
    return ar && ge["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Ke(WA, P.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + Pe), _n && (Pe = cs(Pe)), N && ss ? z(Pe) : Pe;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    oc(F), Zl = !0, Wl = ge, Yl = ye;
  }, t.clearConfig = function() {
    $r = null, Zl = !1, Wl = null, Yl = null, N = L, S = "";
  }, t.isValidAttribute = function(F, y, P) {
    $r || oc({});
    const H = we(F), K = we(y);
    return pp(H, K, P);
  }, t.addHook = function(F, y) {
    typeof y == "function" && De(x, F) && Hr(x[F], y);
  }, t.removeHook = function(F, y) {
    if (De(x, F)) {
      if (y !== void 0) {
        const P = xA(x[F], y);
        return P === -1 ? void 0 : LA(x[F], P, 1)[0];
      }
      return lh(x[F]);
    }
  }, t.removeHooks = function(F) {
    De(x, F) && (x[F] = []);
  }, t.removeAllHooks = function() {
    x = wh();
  }, t;
}
var eC = Kv();
const tC = [
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
], nC = ["href", "style", "src", "alt", "width", "height", "align", "colspan", "rowspan", "target", "rel"];
function Ui(e) {
  return e != null && e.trim() ? eC.sanitize(e, {
    ALLOWED_TAGS: [...tC],
    ALLOWED_ATTR: nC,
    ALLOW_DATA_ATTR: !1
  }) : "";
}
const Vv = ["H1", "H2", "H3", "H4", "H5", "H6"], Pn = "H2";
function rC(e) {
  const t = e == null ? void 0 : e.trim().toUpperCase();
  return t && Vv.includes(t) ? t : Pn;
}
const oC = {
  H1: "32px",
  H2: "28px",
  H3: "24px",
  H4: "20px",
  H5: "18px",
  H6: "16px"
}, iC = {
  H1: "2rem",
  H2: "1.75rem",
  H3: "1.5rem",
  H4: "1.25rem",
  H5: "1.125rem",
  H6: "1rem"
}, Zv = ["Left", "Center", "Right"], Wv = ["Top", "Right", "Bottom", "Left"], Lr = "Left", Il = "Top";
function Yv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "center" ? "Center" : t === "right" ? "Right" : "Left";
}
function Gv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "right" ? "Right" : t === "bottom" ? "Bottom" : t === "left" ? "Left" : "Top";
}
function sC(e, t = {}, n = "stacked") {
  const r = e.contentAlignment ?? Lr, o = Math.max(0, e.offsetPx ?? 0), i = e.offsetDirection ?? Il, s = {
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
function aC(e) {
  return `zone-layout-${(e.contentAlignment ?? Lr).toLowerCase()}`;
}
function lC(e) {
  const t = { top: 16, right: 24, bottom: 16, left: 24 }, n = Math.max(0, e.offsetPx ?? 0);
  if (n <= 0)
    return t;
  const r = e.offsetDirection ?? Il;
  return r === "Top" && (t.top += n), r === "Right" && (t.right += n), r === "Bottom" && (t.bottom += n), r === "Left" && (t.left += n), t;
}
function Bc(e, t = "") {
  const n = (e.contentAlignment ?? Lr).toLowerCase(), r = lC(e);
  return `padding:${r.top}px ${r.right}px ${r.bottom}px ${r.left}px;text-align:${n};${t}`;
}
function cC(e) {
  return (e.contentAlignment ?? Lr).toLowerCase();
}
function uC(e) {
  const t = e.contentAlignment ?? Lr, n = "display:block;width:100%;max-width:552px;height:auto;border:0;";
  return t === "Center" ? `${n}margin:0 auto;` : t === "Right" ? `${n}margin-left:auto;margin-right:0;` : `${n}margin:0;`;
}
function dC() {
  return "display:inline-block;";
}
function On(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function aa(e, t, n) {
  var r;
  return ((r = e.colors.find((o) => o.colorUsageType === t)) == null ? void 0 : r.hexValue) ?? n;
}
function Kc(e, t, n) {
  var r;
  return ((r = e.fonts.find((o) => o.fontUsageType === t)) == null ? void 0 : r.fontFamily) ?? n;
}
function fC(e) {
  const t = e.zoneKey.toLowerCase(), n = e.zoneLabel.toLowerCase();
  return t.includes("headline") || n.includes("headline");
}
function pC(e, t, n) {
  var i, s, a, l, c, f;
  const r = cC(e), o = Bc(e);
  if (_l(e)) {
    const u = Bc(e, "padding-top:24px;padding-bottom:16px;");
    return `<tr>
      <td align="${r}" style="${u}">
        <span style="display:inline-block;min-width:120px;padding:12px 20px;border:1px solid ${Zt.border};border-radius:4px;background:${Zt.surface};color:${Zt.muted};font-family:${vr};font-size:14px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-align:center;">Logo</span>
      </td>
    </tr>`;
  }
  switch (e.zoneType) {
    case "Text": {
      const u = (i = t == null ? void 0 : t.textValue) == null ? void 0 : i.trim();
      if (!u)
        return "";
      const p = fC(e), v = Kc(n, p ? "Heading" : "Body", vr), k = p ? "28px" : "16px", T = p ? "bold" : "normal", _ = aa(n, "Secondary", Zt.secondary);
      return `<tr>
        <td align="${r}" style="${o}font-family:${v};font-size:${k};font-weight:${T};color:${_};line-height:1.5;">
          ${On(u)}
        </td>
      </tr>`;
    }
    case "Heading": {
      const u = (s = t == null ? void 0 : t.textValue) == null ? void 0 : s.trim();
      if (!u)
        return "";
      const p = e.headingLevel ?? Pn, v = Kc(n, "Heading", vr), k = oC[p], T = aa(n, "Secondary", Zt.secondary), _ = p.toLowerCase();
      return `<tr>
        <td align="${r}" style="${o}">
          <${_} style="margin:0;font-family:${v};font-size:${k};font-weight:700;color:${T};line-height:1.25;">
            ${On(u)}
          </${_}>
        </td>
      </tr>`;
    }
    case "Image": {
      const u = (a = t == null ? void 0 : t.imageAssetUrl) == null ? void 0 : a.trim();
      if (!u)
        return "";
      const p = `<img src="${On(u)}" alt="${On(e.zoneLabel)}" width="552" style="${uC(e)}" />`, v = (l = t == null ? void 0 : t.linkUrl) == null ? void 0 : l.trim(), k = v ? `<a href="${On(v)}" target="_blank" rel="noopener noreferrer">${p}</a>` : p;
      return `<tr><td align="${r}" style="${o}">${k}</td></tr>`;
    }
    case "CTA Button": {
      const u = (c = t == null ? void 0 : t.textValue) == null ? void 0 : c.trim();
      if (!u)
        return "";
      const p = ((f = t == null ? void 0 : t.linkUrl) == null ? void 0 : f.trim()) || "#", v = aa(n, "Accent", Zt.accent), k = Kc(n, "CTA", vr);
      return `<tr>
        <td align="${r}" style="${Bc(e, "padding-bottom:32px;")}">
          <a href="${On(p)}" target="_blank" rel="noopener noreferrer" style="${dC()}background-color:${v};color:#ffffff;font-family:${k};font-size:16px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:4px;">
            ${On(u)}
          </a>
        </td>
      </tr>`;
    }
    case "HTML": {
      const u = e.isLocked ? e.htmlDefaultContent : (t == null ? void 0 : t.htmlValue) ?? e.htmlDefaultContent, p = Ui(u);
      return p ? `<tr><td align="${r}" style="${o}font-family:Arial,sans-serif;font-size:16px;line-height:1.5;color:#333333;">${p}</td></tr>` : "";
    }
    case "Divider":
      return `<tr><td align="${r}" style="${o}"><hr style="border:none;border-top:1px solid #e0e0e0;margin:0;" /></td></tr>`;
    case "Background Color":
      return "";
    default:
      return "";
  }
}
function td(e, t, n) {
  const r = aa(n, "Background", Zt.background), o = "#ffffff", i = Pf(e), s = e.zones.sort((a, l) => a.sortOrder - l.sortOrder).map((a) => pC(a, t[a.id] ?? t[a.zoneKey], n)).filter(Boolean).join(`
`);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${On(e.templateName)}</title>
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
const nr = "dummy-brand-kit", Th = "dummy-template";
function mr(e = nr) {
  return hA(e);
}
function mC(e, t = "Social") {
  return t === "Email" || t === "Newsletter" ? gC(e) : hC(e, t);
}
function hC(e, t = "Social") {
  const n = t === "Print" ? Dv[0] : null;
  return {
    id: e,
    templateName: n ? "Demo Print Template" : "Demo Social Template",
    channelType: t,
    formatPreset: (n == null ? void 0 : n.formatPreset) ?? "1080x1080",
    canvasWidth: (n == null ? void 0 : n.width) ?? 1080,
    canvasHeight: (n == null ? void 0 : n.height) ?? 1080,
    brandKitId: nr,
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
function gC(e) {
  return {
    id: e,
    templateName: "Demo Email Template",
    channelType: "Email",
    formatPreset: "Email.StandardEmail",
    canvasWidth: 600,
    canvasHeight: 800,
    brandKitId: nr,
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
function yC(e, t) {
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
function vC(e) {
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
function qn(e, t, n) {
  kE(e, t, n);
}
function ko(e) {
  return { Invariant: e };
}
function _e(e, t, n) {
  e[t] = ko(n);
}
function xf(e, t, n) {
  e[t] = n;
}
function Ot(e, t, n) {
  Number.isNaN(n) || (e[t] = n);
}
function ur(e) {
  if (!(e == null || Number.isNaN(e)))
    return e;
}
function rr(e) {
  const t = e == null ? void 0 : e.trim();
  return t || void 0;
}
function Eo(e) {
  const t = {
    ...e,
    sortOrder: ur(e.sortOrder) ?? 0,
    positionX: ur(e.positionX),
    positionY: ur(e.positionY),
    zoneWidth: ur(e.zoneWidth),
    zoneHeight: ur(e.zoneHeight),
    offsetPx: ur(e.offsetPx),
    maxCharacterCount: ur(e.maxCharacterCount),
    aspectRatioLock: rr(e.aspectRatioLock),
    htmlDefaultContent: rr(e.htmlDefaultContent)
  };
  switch (t.zoneType) {
    case "Text":
      t.headingLevel = void 0, t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0;
      break;
    case "Heading":
      t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0, t.headingLevel || (t.headingLevel = Pn);
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
function wC(e, t) {
  const n = { zoneType: t };
  return t === "Heading" ? (n.headingLevel = e.headingLevel ?? Pn, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : (n.headingLevel = void 0, t === "Text" ? (n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "Image" ? (n.maxCharacterCount = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "HTML" ? (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n) : (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n));
}
function TC(e) {
  return {
    Title: ko(e.zoneKey)
  };
}
const SC = {
  textValue: ["textValue", "TextValue", "text", "content", "zoneText", "value"],
  colorValue: ["colorValue", "ColorValue", "color", "hexValue"],
  htmlValue: ["htmlValue", "HtmlValue", "html", "htmlContent"],
  linkUrl: ["linkUrl", "LinkUrl", "url", "href", "link"]
};
function Xv(e) {
  const t = {};
  return e.textValue !== void 0 && _e(t, "textValue", e.textValue), e.colorValue !== void 0 && _e(t, "colorValue", e.colorValue), e.htmlValue !== void 0 && _e(t, "htmlValue", e.htmlValue), e.linkUrl !== void 0 && _e(t, "linkUrl", e.linkUrl), t;
}
function kC(e, t) {
  if (t.length === 0)
    return Xv(e);
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
      for (const s of SC[i.key]) {
        const a = n.get(s.toLowerCase());
        if (a && !(/^title$/i.test(a) || /\.Title$/i.test(a))) {
          _e(r, a, i.value);
          break;
        }
      }
  return r;
}
function EC(e) {
  var t, n, r, o, i, s;
  return !!((t = e.textValue) != null && t.trim() || (n = e.htmlValue) != null && n.trim() || (r = e.colorValue) != null && r.trim() || (o = e.linkUrl) != null && o.trim() || (i = e.imageAssetId) != null && i.trim() || (s = e.imageAssetUrl) != null && s.trim());
}
function AC(e) {
  const t = {};
  return e.isRawHtmlOverrideMA !== void 0 && (t.isRawHtmlOverrideMA = e.isRawHtmlOverrideMA), e.rawHtmlOverrideContent !== void 0 && _e(t, "rawHtmlOverrideContent", e.rawHtmlOverrideContent), e.overrideReasonMA !== void 0 && _e(t, "overrideReasonMA", e.overrideReasonMA), e.zoneLayoutJson !== void 0 && _e(t, "zoneLayoutJson", e.zoneLayoutJson), e.designerInstanceJson !== void 0 && _e(t, "designerInstanceJson", e.designerInstanceJson), t;
}
function CC(e) {
  return { templateName: ko(e.templateName) };
}
function Jv(e) {
  const t = {};
  return _e(t, "templateName", e.templateName), e.canvasWidth !== void 0 && Ot(t, "canvasWidth", e.canvasWidth), e.canvasHeight !== void 0 && Ot(t, "canvasHeight", e.canvasHeight), e.designerDocumentJson !== void 0 && _e(t, "designerDocumentJson", e.designerDocumentJson), t;
}
function bC(e, t, n = "designerDocumentJson") {
  const r = {};
  return _e(r, n, e), (t == null ? void 0 : t.width) != null && Ot(r, "canvasWidth", t.width), (t == null ? void 0 : t.height) != null && Ot(r, "canvasHeight", t.height), r;
}
function Qv(e) {
  return {
    zoneKey: ko(e.zoneKey),
    zoneLabel: ko(e.zoneLabel || e.zoneKey)
  };
}
function NC(e, t) {
  if (!t)
    return Qv(e);
  const n = {}, r = rr(e.zoneLabel) ?? e.zoneKey, o = rr(t.zoneLabel) ?? t.zoneKey;
  return e.zoneKey !== t.zoneKey && _e(n, "zoneKey", e.zoneKey), r !== o && _e(n, "zoneLabel", r), n;
}
function PC(e) {
  const t = {};
  return _e(t, "zoneType", e.zoneType), xf(t, "isLocked", e.isLocked), Ot(t, "sortOrder", e.sortOrder), t;
}
function xC(e, t) {
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
    r.push({ [o]: ko(e) }), r.push({ [o]: e });
  return r;
}
function LC(e, t) {
  const n = {};
  return (!t || e.isLocked !== t.isLocked) && xf(n, "isLocked", e.isLocked), (!t || e.sortOrder !== t.sortOrder) && Ot(n, "sortOrder", e.sortOrder), n;
}
function qv(e, t) {
  const n = {};
  return e.positionX !== void 0 && e.positionX !== (t == null ? void 0 : t.positionX) && Ot(n, "positionX", e.positionX), e.positionY !== void 0 && e.positionY !== (t == null ? void 0 : t.positionY) && Ot(n, "positionY", e.positionY), e.zoneWidth !== void 0 && e.zoneWidth !== (t == null ? void 0 : t.zoneWidth) && Ot(n, "zoneWidth", e.zoneWidth), e.zoneHeight !== void 0 && e.zoneHeight !== (t == null ? void 0 : t.zoneHeight) && Ot(n, "zoneHeight", e.zoneHeight), e.contentAlignment !== void 0 && e.contentAlignment !== (t == null ? void 0 : t.contentAlignment) && _e(n, "contentAlignment", e.contentAlignment), e.offsetDirection !== void 0 && e.offsetDirection !== (t == null ? void 0 : t.offsetDirection) && _e(n, "offsetDirection", e.offsetDirection), e.offsetPx !== void 0 && e.offsetPx !== (t == null ? void 0 : t.offsetPx) && Ot(n, "offsetPx", e.offsetPx), n;
}
function e0(e, t) {
  const n = Eo(e), r = {};
  return (n.zoneType === "Text" || n.zoneType === "Heading") && n.maxCharacterCount !== void 0 && n.maxCharacterCount !== (t == null ? void 0 : t.maxCharacterCount) && Ot(r, "maxCharacterCount", n.maxCharacterCount), n.zoneType === "Heading" && n.headingLevel !== void 0 && n.headingLevel !== (t == null ? void 0 : t.headingLevel) && _e(r, "headingLevel", n.headingLevel), n.zoneType === "Image" && n.aspectRatioLock !== void 0 && n.aspectRatioLock !== rr(t == null ? void 0 : t.aspectRatioLock) && _e(r, "aspectRatioLock", n.aspectRatioLock), n.zoneType === "HTML" && (n.htmlDefaultContent !== void 0 && n.htmlDefaultContent !== rr(t == null ? void 0 : t.htmlDefaultContent) && _e(r, "htmlDefaultContent", n.htmlDefaultContent), n.htmlAllowUserOverride !== void 0 && n.htmlAllowUserOverride !== (t == null ? void 0 : t.htmlAllowUserOverride) && xf(r, "htmlAllowUserOverride", n.htmlAllowUserOverride)), r;
}
function Sh(e) {
  const t = Eo(e);
  return {
    ...PC(t),
    ...qv(t),
    ...e0(t)
  };
}
function _C(e, t) {
  const n = Eo(e), r = Eo(t), o = rr(n.zoneLabel) ?? n.zoneKey, i = rr(r.zoneLabel) ?? r.zoneKey;
  return n.zoneKey === r.zoneKey && o === i && JSON.stringify(Sh(n)) === JSON.stringify(Sh(r));
}
function Ao(e) {
  return /^\d+$/.test(e);
}
const zC = ["Social", "Email", "Newsletter", "Print"];
function Lf(e) {
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
function G(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = Lf(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function gn(e, ...t) {
  if (e)
    for (const n of t) {
      const r = Lf(e[n]);
      if (typeof r == "number" && Number.isFinite(r))
        return r;
      if (typeof r == "string") {
        const o = Number(r);
        if (Number.isFinite(o))
          return o;
      }
    }
}
function nd(e, ...t) {
  if (!e)
    return !1;
  for (const n of t) {
    const r = Lf(e[n]);
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
function Et(e, ...t) {
  const n = Sf(e, ...t);
  if (n.length > 0)
    return n;
  if (!e)
    return [];
  for (const r of t) {
    const o = e[r];
    if (!Array.isArray(o))
      continue;
    const i = Nr(o);
    if (i.length > 0)
      return i;
  }
  return [];
}
function Dl(e, t) {
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
function RC(e) {
  const t = e.trim().toLowerCase();
  return t.includes("email") ? "Email" : t.includes("newsletter") ? "Newsletter" : t.includes("print") || t.includes("poster") || /\ba4\b/.test(t) ? "Print" : "Social";
}
function MC(e) {
  const t = G(e, "EPAM.headingLevel", "headingLevel");
  return t ? rC(t) : void 0;
}
function OC(e) {
  const t = G(e, "EPAM.contentAlignment", "contentAlignment");
  return t ? Yv(t) : void 0;
}
function $C(e) {
  const t = G(e, "EPAM.offsetDirection", "offsetDirection");
  return t ? Gv(t) : void 0;
}
function Vc(e, t = "") {
  return { id: String(e), name: t || String(e) };
}
function t0(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = t, s = G(r, "EPAM.channelType", "channelType") || G(r, "EPAM.channelTypeMA", "channelTypeMA") || Bn(i, "channelType"), a = G(r, "EPAM.brandKitId", "brandKitId"), l = Et(
    o,
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit",
    "marketingTemplateToBrandKit"
  )[0];
  return {
    id: String(e),
    templateName: G(r, "EPAM.templateName", "templateName", "Title") || `Template ${e}`,
    channelType: zC.includes(s) ? s : RC(s),
    formatPreset: G(r, "EPAM.formatPreset", "formatPreset") || Bn(i, "formatPreset") || "",
    canvasWidth: gn(r, "EPAM.canvasWidth", "canvasWidth"),
    canvasHeight: gn(r, "EPAM.canvasHeight", "canvasHeight"),
    brandKitId: a || (l != null ? String(l) : ""),
    zones: n,
    allowedAssetIds: r0(t).map(String),
    designerDocumentJson: G(
      r,
      "EPAM.designerDocumentJson",
      "designerDocumentJson",
      "DesignerDocumentJson"
    ) || void 0
  };
}
function _f(e, t) {
  const n = t.properties ?? {}, r = t, o = G(n, "EPAM.zoneKey", "zoneKey") || `zone-${e}`, i = G(n, "EPAM.zoneLabel", "zoneLabel", "Title") || `Zone ${e}`, s = G(n, "EPAM.zoneType", "zoneType", "ZoneType", "zoneTypeMA", "ZoneTypeMA") || Bn(r, "zoneType") || Bn(r, "ZoneType") || Bn(r, "EPAM.ZoneType") || Bn(r, "zoneTypeMA"), a = Af(s, o, i), l = MC(n) ?? (a === "Heading" ? Pn : void 0);
  return {
    id: String(e),
    zoneKey: o,
    zoneLabel: i,
    zoneType: a,
    isLocked: nd(n, "EPAM.isLocked", "isLocked"),
    sortOrder: gn(n, "EPAM.sortOrder", "sortOrder") ?? 0,
    positionX: gn(n, "EPAM.positionX", "positionX"),
    positionY: gn(n, "EPAM.positionY", "positionY"),
    zoneWidth: gn(n, "EPAM.zoneWidth", "zoneWidth"),
    zoneHeight: gn(n, "EPAM.zoneHeight", "zoneHeight"),
    maxCharacterCount: gn(n, "EPAM.maxCharacterCount", "maxCharacterCount"),
    headingLevel: l,
    contentAlignment: OC(n),
    offsetDirection: $C(n),
    offsetPx: gn(n, "EPAM.offsetPx", "offsetPx"),
    aspectRatioLock: G(n, "EPAM.aspectRatioLock", "aspectRatioLock") || void 0,
    htmlDefaultContent: G(n, "EPAM.htmlDefaultContent", "htmlDefaultContent") || void 0,
    htmlAllowUserOverride: nd(n, "EPAM.htmlAllowUserOverride", "htmlAllowUserOverride"),
    allowedAssetIds: o0(t).map(String),
    allowedAssetCollectionId: G(n, "EPAM.allowedAssetCollectionId", "allowedAssetCollectionId") || void 0
  };
}
function n0(e, t) {
  const n = t.properties ?? {}, r = zf(t), o = r[0] != null ? String(r[0]) : void 0;
  return {
    id: String(e),
    zoneKey: G(n, "EPAM.zoneKey", "zoneKey", "Title") || `zone-${e}`,
    textValue: G(n, "EPAM.textValue", "textValue") || void 0,
    colorValue: G(n, "EPAM.colorValue", "colorValue") || void 0,
    htmlValue: G(n, "EPAM.htmlValue", "htmlValue") || void 0,
    imageAssetId: G(n, "EPAM.imageAssetId", "imageAssetId") || o || void 0,
    imageAssetUrl: G(n, "EPAM.imageAssetUrl", "imageAssetUrl") || void 0,
    linkUrl: G(n, "EPAM.linkUrl", "linkUrl") || void 0
  };
}
function IC(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = G(r, "EPAM.templateId", "templateId") || String(
    Et(
      o,
      "marketingAssetToTemplate",
      "MarketingAssetToTemplate",
      "EPAM.MarketingAssetToTemplate"
    )[0] ?? ""
  );
  return {
    id: String(e),
    assetName: G(r, "EPAM.assetName", "assetName", "Title") || `Asset ${e}`,
    channelTypeMA: Vc(
      Et(o, "channelTypeMA", "ChannelTypeMA")[0] ?? "channel",
      G(r, "EPAM.channelTypeMA", "channelTypeMA") || "Channel"
    ),
    formatPresetMA: Vc(
      Et(o, "formatPresetMA", "FormatPresetMA")[0] ?? "format",
      G(r, "EPAM.formatPresetMA", "formatPresetMA") || "Format"
    ),
    outputFormatMA: Vc(
      Et(o, "outputFormatMA", "OutputFormatMA")[0] ?? "output",
      G(r, "EPAM.outputFormatMA", "outputFormatMA") || "Output"
    ),
    templateId: i,
    isRawHtmlOverrideMA: nd(r, "EPAM.isRawHtmlOverrideMA", "isRawHtmlOverrideMA"),
    rawHtmlOverrideContent: G(r, "EPAM.rawHtmlOverrideContent", "rawHtmlOverrideContent") || void 0,
    overrideReasonMA: G(r, "EPAM.overrideReasonMA", "overrideReasonMA") || void 0,
    zoneLayoutJson: G(r, "EPAM.zoneLayoutJson", "zoneLayoutJson", "builderLayoutJson") || void 0,
    designerInstanceJson: G(
      r,
      "EPAM.designerInstanceJson",
      "designerInstanceJson",
      "DesignerInstanceJson"
    ) || void 0,
    zoneValues: n,
    renderedOutputAssetId: G(r, "EPAM.renderedOutputAssetId", "renderedOutputAssetId") || String(Et(o, "marketingAssetToRenderedOutput")[0] ?? "") || void 0
  };
}
function DC(e, t, n = [], r = []) {
  const o = t.properties ?? {};
  return {
    id: String(e),
    brandKitName: G(o, "EPAM.brandKitName", "brandKitName", "Title") || `Brand kit ${e}`,
    logoAssetUrl: G(o, "EPAM.logoAssetUrl", "logoAssetUrl"),
    colors: n,
    fonts: r
  };
}
function r0(e) {
  const t = Et(e.relations, ...Tv), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/template.*asset|allowed.*asset/i.test(r) || /collection|zone/i.test(r) || Array.isArray(o) && n.push(...Nr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function zf(e) {
  const t = Et(e.relations, ...Sv), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/selected.*asset|zonevalue.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Nr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function o0(e) {
  const t = Et(e.relations, ...wv), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/allowed.*asset|zone.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Nr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function HC(e) {
  return [.../* @__PURE__ */ new Set([
    ...Et(
      e.relations,
      "templateToZone",
      "templateToTemplateZone",
      "TemplateToTemplateZone",
      "EPAM.TemplateToTemplateZone",
      "templateToEPAM.TemplateZone"
    ),
    ...Dl(e.relations, /template.*zone/i)
  ])];
}
function i0(e) {
  return [.../* @__PURE__ */ new Set([
    ...Et(
      e.relations,
      "marketingAssetToZoneValue",
      "MarketingAssetToZoneValue",
      "EPAM.MarketingAssetToZoneValue"
    ),
    ...Dl(e.relations, /zonevalue/i)
  ])];
}
function FC(e, t) {
  const n = t.properties ?? {}, r = G(n, "EPAM.colorUsageType", "colorUsageType") || "Primary";
  return {
    colorName: G(n, "EPAM.colorName", "colorName") || `Color ${e}`,
    hexValue: G(n, "EPAM.hexValue", "hexValue") || "#000000",
    colorUsageType: r
  };
}
function UC(e, t) {
  const n = t.properties ?? {}, r = G(n, "EPAM.fontUsageType", "fontUsageType") || "Body", o = G(n, "EPAM.fontWeight", "fontWeight") || "Regular";
  return {
    fontFamily: G(n, "EPAM.fontFamily", "fontFamily") || "sans-serif",
    fontWeight: o,
    fontUsageType: r
  };
}
function jC(e) {
  return Et(
    e.relations,
    "brandKitToColor",
    "BrandKitToColor",
    "brandKitToBrandColor"
  ).concat(Dl(e.relations, /color/i));
}
function BC(e) {
  return Et(
    e.relations,
    "brandKitToFont",
    "BrandKitToFont",
    "brandKitToBrandFont"
  ).concat(Dl(e.relations, /font/i));
}
function KC(e) {
  return ["Social", "Email", "Newsletter", "Print"].filter((t) => t !== e);
}
function VC(e, t, n, r) {
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
  return e.zoneType === "Heading" && (o.headingLevel = e.headingLevel, o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Text" && (o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Image" && (o.aspectRatioLock = e.aspectRatioLock), e.zoneType === "HTML" && (o.htmlDefaultContent = e.htmlDefaultContent, o.htmlAllowUserOverride = e.htmlAllowUserOverride), r === "Social" ? ZC(o, t) : WC(o);
}
function ZC(e, t) {
  const n = e.zoneType === "Logo" ? 80 : e.zoneType === "Image" ? 360 : e.zoneType === "Heading" ? 120 : e.zoneType === "CTA Button" ? 72 : 96;
  return {
    ...e,
    positionX: e.positionX ?? 40,
    positionY: e.positionY ?? 40 + t * (n + 24),
    zoneWidth: e.zoneWidth ?? 1e3,
    zoneHeight: n
  };
}
function WC(e) {
  return {
    ...e,
    positionX: void 0,
    positionY: void 0,
    zoneWidth: void 0,
    zoneHeight: void 0
  };
}
function YC(e, t, n) {
  const r = Fv(t), o = Date.now(), i = [...e.zones].sort((s, a) => s.sortOrder - a.sortOrder).map((s, a) => VC(s, a, o, t));
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
function Rf(e) {
  const t = Tt(e, /allowed.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/^template/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...wv, ...t])];
}
function Mf(e) {
  const t = Tt(e, /template.*asset|allowed.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/zone/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...Tv, ...t])];
}
function GC(e) {
  const t = Tt(e, /selected.*asset|zonevalue.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...Sv, ...t])];
}
const Of = "/api/content-hub", XC = "/api/render-email-html";
let M = {}, Hl = Of, rd;
function $f() {
  return Hl.replace(/\/$/, "") !== Of;
}
function JC(e) {
  const t = e.trim().replace(/\/$/, "");
  return !t || t === XC;
}
function QC(e) {
  M = e ?? {};
}
function qC(e) {
  Hl = e.replace(/\/$/, "") || Of;
}
function eb(e) {
  rd = typeof e == "number" && Number.isFinite(e) && e > 0 ? e : void 0;
}
async function od(e, t) {
  const n = await fetch(`${Hl}${e}`, {
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
async function ne(e) {
  var n;
  if (!((n = M == null ? void 0 : M.raw) != null && n.getAsync))
    throw new Error("Content Hub client is not available. This component must run inside Content Hub.");
  const t = await M.raw.getAsync(`/api/entities/${e}`);
  if (!t.isSuccessStatusCode || !t.content)
    throw new Error(`Content Hub API error (${t.statusCode ?? "unknown"}) loading entity ${e}`);
  return t.content;
}
async function pn(e) {
  const t = [...new Set(e.filter((n) => Number.isFinite(n)))];
  return t.length === 0 ? [] : Promise.all(
    t.map(async (n) => {
      try {
        return await ne(n);
      } catch (r) {
        return ae(
          "related entity",
          `Skipped entity ${n}: ${r instanceof Error ? r.message : String(r)}`
        ), { properties: {}, relations: {}, systemProperties: { id: n } };
      }
    })
  );
}
async function tb(e, t, n) {
  var o;
  let r = ((o = t.brandKitId) == null ? void 0 : o.trim()) ?? "";
  if (!r) {
    const i = await Jt(
      M,
      e,
      "templateToBrandKit",
      n.relations
    );
    i[0] != null ? (r = String(i[0]), Z("brandKitId", `Resolved ${r} from templateToBrandKit on template ${e}`)) : Ue(
      "brandKitId",
      `No brand kit linked on template ${e}`,
      "Link templateToBrandKit on the template, or set brandKitId in External component Configuration."
    );
  }
  return {
    ...t,
    brandKitId: r,
    allowedAssetIds: t.allowedAssetIds && t.allowedAssetIds.length > 0 ? t.allowedAssetIds : r0(n).map(String)
  };
}
async function nb(e, t) {
  const n = o0(t);
  if (n.length > 0)
    return { ...e, allowedAssetIds: n.map(String) };
  if (!it(t.relations, "templateZoneToAllowedAssetCollection"))
    return e;
  const r = await Jt(
    M,
    e.id,
    "templateZoneToAllowedAssetCollection",
    t.relations
  );
  return r[0] != null ? { ...e, allowedAssetCollectionId: String(r[0]) } : e;
}
function s0(e) {
  const t = Tt(e, /template.*zone/i);
  return [.../* @__PURE__ */ new Set([...t, ...Di])];
}
async function rb(e, t, n) {
  var o;
  if (!((o = M == null ? void 0 : M.raw) != null && o.getAsync))
    return [];
  const r = encodeURIComponent(
    `Definition.Name=='${e}' AND Parent('${t}').Id==${n}`
  );
  try {
    const i = await M.raw.getAsync(
      `/api/entities/query?query=${r}`
    );
    if (!i.isSuccessStatusCode || !i.content)
      return [];
    const s = Array.isArray(i.content) ? i.content : Array.isArray(i.content.items) ? i.content.items : [], a = [];
    for (const l of s) {
      if (l == null || typeof l != "object")
        continue;
      const c = l, f = c.systemProperties, u = (f == null ? void 0 : f.id) ?? c.id ?? c.entityId;
      typeof u == "number" && Number.isFinite(u) && a.push(u);
    }
    return a;
  } catch {
    return [];
  }
}
const ob = ["channelType", "ChannelType", "EPAM.ChannelType"], ib = ["formatPreset", "FormatPreset", "EPAM.FormatPreset"];
async function a0(e) {
  var i, s;
  if (!((i = M == null ? void 0 : M.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating templates.");
  const t = [
    CC(e),
    { Title: { Invariant: e.templateName } },
    { templateName: e.templateName }
  ];
  let n = null, r = "unknown";
  for (const a of t) {
    const l = await M.raw.postAsync("/api/entities", {
      entitydefinition: {
        href: "/api/entitydefinitions/EPAM.Template"
      },
      properties: a
    });
    if (l.isSuccessStatusCode && ((s = l.content) == null ? void 0 : s.id) != null) {
      n = String(l.content.id);
      break;
    }
    r = String(l.statusCode ?? "unknown"), ae("template create", `Create attempt failed (${r}) with keys: ${Object.keys(a).join(", ")}`);
  }
  if (!n)
    throw new Error(
      `Failed to create template "${e.templateName}" (HTTP ${r}). Check Create permission on EPAM.Template and that templateName is a valid property.`
    );
  const o = Jv(e);
  if (Object.keys(o).length > 0)
    try {
      await d0(n, o);
    } catch (a) {
      ae(
        "template create",
        `Template ${n} created but optional property update failed: ${a instanceof Error ? a.message : String(a)}`
      );
    }
  return Z("template create", `Created EPAM.Template ${n} (${e.templateName})`), n;
}
async function sb(e, t, n) {
  var i;
  return (await Fl(n)).channelType === t ? n : (i = (await u0(e)).find((s) => s.channelType === t)) == null ? void 0 : i.id;
}
async function kh(e, t, n, r) {
  const o = await ne(t);
  for (const i of n) {
    const s = await Jt(
      M,
      t,
      i,
      o.relations
    );
    if (s[0] == null)
      continue;
    if (await So(
      M,
      e,
      String(s[0]),
      n[0]
    )) {
      Z("template taxonomy", `Linked ${r} on template ${e} from template ${t}`);
      return;
    }
  }
  Ue(
    "template taxonomy",
    `Could not link ${r} on template ${e} from reference ${t}`,
    `Set ${r} on the template in Content Hub.`
  );
}
async function l0(e, t, n, r) {
  if (!(n != null && n.trim()))
    return;
  const o = await sb(
    n,
    t,
    r
  );
  if (!o) {
    Ue(
      "template taxonomy",
      `No ${t} template in brand kit ${n} to copy channelType/formatPreset from`,
      "Link channelType and formatPreset on the new template in Content Hub."
    );
    return;
  }
  await kh(
    e,
    o,
    ob,
    "channelType"
  ), await kh(
    e,
    o,
    ib,
    "formatPreset"
  );
}
async function c0(e, t) {
  if (!(t != null && t.trim()))
    return;
  if (await So(M, e, t, "templateToBrandKit")) {
    Z("template brand kit", `Linked template ${e} to brand kit ${t}`);
    return;
  }
  if (await Qt(M, t, e, "brandKitToTemplate")) {
    Z("template brand kit", `Linked brand kit ${t} to template ${e}`);
    return;
  }
  Ue(
    "template brand kit",
    `Could not link template ${e} to brand kit ${t}`,
    "Link templateToBrandKit on the template in Content Hub."
  );
}
async function u0(e) {
  if (!(e != null && e.trim()) || e === nr)
    return [];
  let t = [];
  for (const o of [
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit"
  ])
    if (t = await rb("EPAM.Template", o, e), t.length > 0)
      break;
  if (t.length === 0)
    try {
      const o = await ne(e);
      t = await Jt(
        M,
        e,
        "brandKitToTemplate",
        o.relations
      );
    } catch {
      t = [];
    }
  const n = [...new Set(t)];
  return n.length === 0 ? [] : (await Promise.all(n.map((o) => Fl(String(o))))).sort((o, i) => o.templateName.localeCompare(i.templateName));
}
async function ab(e, t, n) {
  const r = await Fl(e), o = YC(r, t, n), i = await a0(o);
  o.brandKitId && (await c0(i, o.brandKitId), await l0(
    i,
    o.channelType,
    o.brandKitId,
    e
  ));
  const s = await If({ ...o, id: i }, []);
  return await h0(s.id, r.allowedAssetIds ?? []), Z(
    "template duplicate",
    `Created template ${s.id} (${s.templateName}) from ${e} as ${t}`
  ), s;
}
async function lb(e, t) {
  var i;
  const n = {
    ...e,
    id: ((i = e.id) == null ? void 0 : i.trim()) || "",
    zones: e.zones ?? []
  }, r = await a0(n);
  n.brandKitId && (await c0(r, n.brandKitId), t != null && t.trim() && await l0(
    r,
    n.channelType,
    n.brandKitId,
    t
  ));
  const o = await If({ ...n, id: r }, []);
  return await h0(o.id, n.allowedAssetIds ?? []), Z(
    "template create",
    `Created template ${o.id} (${o.templateName}) with ${o.zones.length} zone(s)`
  ), o;
}
async function cb(e, t) {
  const n = await ne(e), r = [
    "marketingAssetToTemplate",
    "MarketingAssetToTemplate",
    "EPAM.MarketingAssetToTemplate"
  ], o = await Jt(M, e, r[0], n.relations);
  for (const s of o)
    if (String(s) !== t)
      for (const a of r)
        await _o(M, e, s, a, n.relations);
  let i = !1;
  for (const s of r)
    if (await Qt(M, e, t, s, n.relations)) {
      i = !0;
      break;
    }
  if (!i)
    throw new Error(
      `Could not link template ${t} to marketing asset ${e}. Check marketingAssetToTemplate relation permissions.`
    );
  Z("marketing asset template", `Linked marketing asset ${e} to template ${t}`);
}
async function ub(e, t) {
  var r;
  if (!((r = M == null ? void 0 : M.raw) != null && r.getAsync))
    return [];
  const n = encodeURIComponent(
    `Definition.Name=='EPAM.TemplateZone' AND Parent('${t}').Id==${e}`
  );
  try {
    const o = await M.raw.getAsync(
      `/api/entities/query?query=${n}`
    );
    if (!o.isSuccessStatusCode || !o.content)
      return [];
    const i = Array.isArray(o.content) ? o.content : Array.isArray(o.content.items) ? o.content.items : [], s = [];
    for (const a of i) {
      if (a == null || typeof a != "object")
        continue;
      const l = a, c = l.systemProperties, f = (c == null ? void 0 : c.id) ?? l.id ?? l.entityId;
      typeof f == "number" && Number.isFinite(f) && s.push(f);
    }
    return s;
  } catch {
    return [];
  }
}
async function Fl(e) {
  const t = await ne(e);
  HE(e, t);
  let n = [...new Set(HC(t))];
  if (n.length === 0) {
    const i = s0(t.relations), s = await Ii(
      M,
      e,
      t.relations,
      i.filter((a) => it(t.relations, a))
    );
    n = s.ids, s.relationName && Z("template zones", `Found zones via relation ${s.relationName}`);
  }
  if (n.length === 0) {
    const { templateChildRelations: i, zoneParentRelations: s } = await xl(
      M,
      t.relations
    );
    for (const a of s) {
      const l = await ub(e, a);
      if (l.length > 0) {
        n = l, Z(
          "template zones",
          `Found ${l.length} zone(s) via parent query on ${a}`
        );
        break;
      }
    }
    if (n.length === 0 && i.length > 0) {
      const a = await Ii(
        M,
        e,
        t.relations,
        i.filter((l) => it(t.relations, l))
      );
      n = a.ids, a.relationName && Z("template zones", `Found zones via relation ${a.relationName}`);
    }
  }
  let r = [];
  if (n.length > 0)
    try {
      const i = await pn(n);
      await GE(M, ne, i), r = await Promise.all(
        i.map(async (s, a) => {
          const l = _f(n[a], s), c = await nb(l, s);
          return _v(M, ne, c, s);
        })
      );
    } catch (i) {
      ae(
        "template zones",
        `Could not load zones for template ${e}: ${i instanceof Error ? i.message : String(i)}`
      ), r = [];
    }
  const o = await tb(
    e,
    t0(e, t, r),
    t
  );
  return r.length > 0 ? (Z("template zones", `Loaded ${r.length} zone(s) for template ${e}`), o) : (Ue(
    "template zones",
    `Template ${e} has no linked zones yet`,
    'This is normal for a new template. Use "Edit Template Zones" to add zones, or link EPAM.TemplateZone entities in Content Hub. Zones link via a Parent relation on EPAM.TemplateZone → EPAM.Template (not on the template entity itself).'
  ), o);
}
async function db(e) {
  var i;
  const t = await ne(e);
  let n = [...new Set(i0(t))];
  n.length === 0 && (n = await Jt(
    M,
    e,
    "marketingAssetToZoneValue",
    t.relations
  ));
  let r = [];
  if (n.length > 0)
    try {
      const s = await pn(n);
      r = await Promise.all(
        s.map(
          async (a, l) => Tb(n[l], n0(n[l], a), a)
        )
      ), Z("zone values", `Loaded ${r.length} zone value(s) for asset ${e}`);
    } catch (s) {
      ae(
        "zone values",
        `Could not load zone values for asset ${e}: ${s instanceof Error ? s.message : String(s)}`
      ), r = [];
    }
  else
    Ue(
      "zone values",
      `Marketing asset ${e} has no marketingAssetToZoneValue relations yet`,
      "Zone values will be created when you click Save and render HTML."
    );
  let o = IC(e, t, r);
  if (!((i = o.templateId) != null && i.trim())) {
    const s = await Jt(
      M,
      e,
      "marketingAssetToTemplate",
      t.relations
    );
    s[0] != null && (o = { ...o, templateId: String(s[0]) });
  }
  return o;
}
async function fb(e) {
  if (!(e != null && e.trim()) || e === nr)
    return qn(
      "brand kit",
      "No brand kit id resolved",
      "Link templateToBrandKit on the template or set brandKitId in Configuration."
    ), ni(mr(e || nr));
  try {
    const t = await ne(e), n = [...new Set(jC(t))], r = [...new Set(BC(t))], [o, i] = await Promise.all([
      pn(n),
      pn(r)
    ]), s = o.map(
      (c, f) => FC(n[f], c)
    ), a = i.map(
      (c, f) => UC(r[f], c)
    ), l = DC(e, t, s, a);
    return !l.logoAssetUrl && s.length === 0 && a.length === 0 ? (qn(
      "brand kit",
      `Brand kit ${e} (${l.brandKitName}) has no colors, fonts, or logo linked`,
      "Add brandKitToColor / brandKitToFont relations and a logo asset on the brand kit."
    ), ni(mr(e))) : (s.length === 0 ? Ue("brand kit colors", `Brand kit ${e} has no colors linked`, "Link colors via brandKitToColor.") : Z("brand kit colors", `Loaded ${s.length} color(s) for brand kit ${e}`), a.length === 0 ? Ue("brand kit fonts", `Brand kit ${e} has no fonts linked`, "Link fonts via brandKitToFont.") : Z("brand kit fonts", `Loaded ${a.length} font(s) for brand kit ${e}`), l.logoAssetUrl || Ue("brand kit logo", `Brand kit ${e} has no logo asset`, "Set logoAssetUrl on the brand kit entity."), ni({
      ...mr(e),
      ...l,
      colors: s.length > 0 ? s : mr(e).colors,
      fonts: a.length > 0 ? a : mr(e).fonts
    }));
  } catch (t) {
    return qn("brand kit", t, `Could not load brand kit entity ${e}.`), ni(mr(e));
  }
}
function pb(e, t) {
  const n = t0(e.id, t, e.zones);
  return n.templateName !== e.templateName || n.canvasWidth !== e.canvasWidth || n.canvasHeight !== e.canvasHeight || n.designerDocumentJson !== e.designerDocumentJson;
}
async function ns(e, t, n, r) {
  var f;
  if (!((f = M == null ? void 0 : M.raw) != null && f.putAsync))
    throw new Error(`Content Hub client is not available for saving ${n}.`);
  if (Object.keys(t).length === 0)
    return !0;
  const o = await ne(e), i = UE(o, t, r), s = await M.raw.putAsync(`/api/entities/${e}`, i);
  if (s.isSuccessStatusCode)
    return !0;
  const a = s.statusCode ?? "unknown", l = s.content != null && typeof s.content == "object" ? String(s.content.Message ?? "") : "", c = l ? `: ${l}` : "";
  if (a === 403 || a === 401)
    return Ue(
      n,
      `Permission denied (${a}) updating entity ${e}${c}`,
      "Grant update permission on this entity definition for your role."
    ), !1;
  throw new Error(
    `Content Hub API error (${a}) saving ${n} on entity ${e}${c}`
  );
}
async function d0(e, t) {
  return ns(e, t, "template properties", "EPAM.Template");
}
async function If(e, t = []) {
  var l;
  if (!((l = M == null ? void 0 : M.raw) != null && l.postAsync))
    throw new Error("Content Hub client is not available for saving template zones.");
  const n = await ne(e.id);
  pb(e, n) && (await d0(e.id, Jv(e)) ? Z("template properties", `Saved properties on template ${e.id}`) : ae(
    "template properties",
    `Skipped property update on template ${e.id}; continuing with zone save.`
  ));
  const r = await xl(M, n.relations), o = mb(
    n.relations,
    r.templateChildRelations
  ), i = [], s = /* @__PURE__ */ new Set();
  for (const c of t)
    !e.zones.some((u) => u.id === c.id) && Ao(c.id) && s.add(c.id);
  const a = [...e.zones].sort((c, f) => c.sortOrder - f.sortOrder);
  for (const c of a) {
    const f = t.find((v) => v.id === c.id);
    if (!(!f || !_C(c, f))) {
      i.push(c);
      continue;
    }
    if (Ao(c.id)) {
      await yb(c.id, c), i.push(c);
      continue;
    }
    const p = await vb(c);
    await hb(
      e.id,
      p,
      o,
      n.relations,
      r
    ), i.push({ ...c, id: p }), Z("template zone", `Created EPAM.TemplateZone ${p} (${c.zoneKey}) and linked to template ${e.id}`);
  }
  for (const c of s)
    await wb(e.id, c, o, n.relations);
  return Z("template zones", `Saved ${i.length} template zone(s) on template ${e.id}`), { ...e, zones: i };
}
function mb(e, t = []) {
  const n = [
    ...t,
    ...s0(e)
  ];
  for (const r of n)
    if (it(e, r))
      return r;
  return t[0] ?? Di[0];
}
async function hb(e, t, n, r, o) {
  const i = o ?? await xl(M, r);
  let s;
  try {
    const u = await ne(t);
    s = u.relations, FE(t, u);
  } catch {
    s = void 0;
  }
  const a = Tt(s, /template/i).filter(
    (u) => !/collection|asset/i.test(u)
  ), l = gi(
    [...a, ...i.zoneParentRelations, ...Oa],
    s,
    /zone.*template|template/i
  );
  for (const u of l)
    if (await So(M, t, e, u, s)) {
      Z("template zone link", `Linked zone ${t} to template ${e} via parent relation ${u}`);
      return;
    }
  const c = gi(
    [n, ...i.templateChildRelations, ...Di],
    r,
    /template.*zone/i
  ).filter((u) => !!it(r, u));
  for (const u of c)
    if (await Qt(M, e, t, u, r)) {
      Z("template zone link", `Linked zone ${t} to template ${e} via child relation ${u}`);
      return;
    }
  const f = gi(
    [n, ...i.templateChildRelations, ...Di],
    r,
    /template.*zone/i
  ).filter((u) => !it(r, u));
  for (const u of f)
    if (await Qt(M, e, t, u, r)) {
      Z(
        "template zone link",
        `Linked zone ${t} to template ${e} via definition child relation ${u}`
      );
      return;
    }
  throw new Error(
    `Could not link zone ${t} to template ${e}. Tried parent relations: ${l.join(", ") || "(none from definition)"}; child relations: ${[...c, ...f].join(", ") || "(none)"}. Confirm EPAM.TemplateZone has a parent relation to EPAM.Template in Content Hub.`
  );
}
async function wn(e, t, n) {
  if (Object.keys(t).length === 0)
    return !0;
  try {
    return await ns(e, t, n);
  } catch (r) {
    return ae(
      n,
      `Optional property update skipped for entity ${e}: ${r instanceof Error ? r.message : String(r)}`
    ), !1;
  }
}
async function Zc(e, t, n) {
  const r = await ne(e), o = _f(e, r);
  return (await _v(M, ne, o, r)).zoneType;
}
async function gb(e, t, n) {
  const r = Eo(t), o = await oA(M), i = ZE(n), s = i || sA(o), a = async () => {
    for (const c of xC(
      r.zoneType,
      o.propertyNames
    ))
      if (await wn(e, c, "template zone type"), await Zc(
        e,
        r.zoneKey,
        r.zoneLabel
      ) === r.zoneType)
        return Z(
          "template zone type",
          `Persisted "${r.zoneType}" on zone ${e} via property ${Object.keys(c).join(", ")}`
        ), !0;
    return !1;
  };
  if (s) {
    const c = await eA(
      M,
      ne,
      e,
      r.zoneType,
      n
    ), f = await Zc(
      e,
      r.zoneKey,
      r.zoneLabel
    );
    if (f === r.zoneType)
      return !0;
    c && ae(
      "template zone type",
      `Relation link reported success for zone ${e} but reload still reads "${f}".`
    );
  }
  if (!i && iA(o) && await a())
    return !0;
  const l = await Zc(
    e,
    r.zoneKey,
    r.zoneLabel
  );
  return ae(
    "template zone type",
    `Zone ${e} (${r.zoneKey}) still reads as "${l}" after save; expected "${r.zoneType}".`
  ), l === r.zoneType;
}
async function f0(e, t) {
  const n = Eo(t), r = await ne(e), o = _f(e, r), i = NC(n, o);
  if (Object.keys(i).length > 0 && !await wn(e, i, "template zone identity") && i.zoneLabel != null) {
    const u = n.zoneLabel || n.zoneKey;
    await wn(
      e,
      { Title: { Invariant: u } },
      "template zone title"
    );
  }
  const s = await gb(e, n, r), a = await wn(
    e,
    LC(n, o),
    "template zone flags"
  );
  if (!s && !a)
    throw new Error(
      `Could not save zone type "${n.zoneType}" on template zone ${e} (${n.zoneKey}).`
    );
  s || ae(
    "template zone type",
    `Zone flags saved on ${e}, but zone type "${n.zoneType}" may not have persisted in Content Hub.`
  );
  const l = qv(n, o);
  Object.keys(l).length > 0 && await wn(e, l, "template zone layout");
  const c = e0(n, o);
  Object.keys(c).length > 0 && await wn(e, c, "template zone optional");
}
async function yb(e, t) {
  try {
    await f0(e, t);
  } catch (n) {
    throw new Error(
      `Permission denied updating template zone ${e} (${t.zoneKey}). Grant Update on EPAM.TemplateZone. ${n instanceof Error ? n.message : String(n)}`
    );
  }
  Z("template zone", `Updated EPAM.TemplateZone ${e} (${t.zoneKey}, type ${t.zoneType})`);
}
async function vb(e) {
  var i;
  const t = M.raw;
  if (!(t != null && t.postAsync))
    throw new Error("Content Hub client does not support creating template zones.");
  const n = [
    Qv(e),
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
    o = String(a.statusCode ?? "unknown"), ae(
      "template zone create",
      `Create attempt failed (${o}) for ${e.zoneKey} with keys: ${Object.keys(s).join(", ")}`
    );
  }
  if (!r)
    throw new Error(
      `Failed to create template zone ${e.zoneKey} (HTTP ${o}). Check Create permission on EPAM.TemplateZone.`
    );
  try {
    await f0(r, e);
  } catch (s) {
    ae(
      "template zone create",
      `Zone ${r} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return r;
}
async function wb(e, t, n, r) {
  const o = await xl(M, r);
  let i;
  try {
    i = (await ne(t)).relations;
  } catch {
    i = void 0;
  }
  const s = gi(
    [...o.zoneParentRelations, ...Oa],
    i,
    /zone.*template/i
  );
  for (const l of s)
    if (await Nv(M, t, e, l, i)) {
      Z("template zone unlink", `Cleared parent ${e} from zone ${t} via ${l}`);
      return;
    }
  const a = gi(
    [n, ...o.templateChildRelations, ...Di],
    r,
    /template.*zone/i
  ).filter((l) => !!it(r, l));
  for (const l of a)
    if (await _o(M, e, t, l, r)) {
      Z("template zone unlink", `Removed zone ${t} from template ${e} via ${l}`);
      return;
    }
  Ue(
    "template zone unlink",
    `Could not remove zone ${t} from template ${e}`,
    "The new zone was created and linked, but the previous zone link may need to be removed manually in Content Hub."
  );
}
async function Tb(e, t, n) {
  var i;
  const r = zf(n), o = t.imageAssetId || (r[0] != null ? String(r[0]) : void 0);
  if (!o)
    return t;
  if ((i = t.imageAssetUrl) != null && i.trim())
    return { ...t, imageAssetId: o };
  try {
    const s = await ne(o), a = zo(o, s);
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
async function p0(e) {
  const t = await ne(e), n = Mf(t.relations), r = await Ii(
    M,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await pn(r.ids)).map((i, s) => zo(r.ids[s], i)).filter((i) => i != null);
}
async function m0(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = Mf(o.relations);
  for (const a of i)
    if (await Qt(
      M,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "template allowed asset",
        `Linked asset ${r} to template ${n} via ${a}`
      ), !0;
  if ((s = M == null ? void 0 : M.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await M.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return Z(
          "template allowed asset",
          `Linked asset ${r} to template ${n} via ${a}`
        ), !0;
  }
  return Ue(
    "template allowed asset",
    `Could not link asset ${r} to template ${n}`,
    "Create a child relation on EPAM.Template to M.Asset (e.g. templateToAllowedAsset)."
  ), !1;
}
async function Sb(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = Mf(o.relations);
  for (const s of i)
    if (await _o(
      M,
      n,
      r,
      s,
      o.relations
    ))
      return Z(
        "template allowed asset",
        `Removed asset ${r} from template ${n} via ${s}`
      ), !0;
  return !1;
}
async function h0(e, t = []) {
  const n = [...new Set(t.map((i) => i.trim()).filter(Boolean))];
  if (n.length === 0)
    return;
  const r = await p0(e), o = new Set(r.map((i) => i.id));
  for (const i of n)
    o.has(i) || await m0(e, i);
}
async function kb(e) {
  const t = await ne(e);
  return zf(t).map(String);
}
let dr = null;
async function Eb(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = GC(o.relations), s = i.filter((u) => !!it(o.relations, u)), a = dr == null ? void 0 : dr.name, l = [
    ...new Set(
      [
        a,
        ...s,
        // Prefer the known-good name before spraying aliases that 404.
        "zoneValueToSelectedAsset",
        ...i
      ].filter((u) => !!u)
    )
  ].slice(0, a || s.length > 0 ? 3 : 4), c = await kb(n);
  for (const u of c)
    if (u !== r)
      for (const p of l)
        await _o(
          M,
          n,
          u,
          p,
          o.relations
        ), await Nv(
          M,
          n,
          u,
          p,
          o.relations
        );
  if (c.includes(r))
    return !0;
  const f = (dr == null ? void 0 : dr.mode) === "child" ? ["child", "parent"] : ["parent", "child"];
  for (const u of f)
    for (const p of l)
      if (u === "parent" ? await So(
        M,
        n,
        r,
        p,
        o.relations
      ) : await Qt(
        M,
        n,
        r,
        p,
        o.relations
      ))
        return dr = { name: p, mode: u }, Z(
          "zone value selected asset",
          `Linked asset ${r} to zone value ${n} via ${p} (${u})`
        ), !0;
  return Ue(
    "zone value selected asset",
    `Could not link asset ${r} to zone value ${n}`,
    "Create a relation on EPAM.MarketingAssetZoneValue to M.Asset (e.g. zoneValueToSelectedAsset)."
  ), !1;
}
async function Ab(e, t) {
  var n;
  (n = t.imageAssetId) != null && n.trim() && await Eb(e, t.imageAssetId);
}
async function Cb(e) {
  const t = await ne(e), n = Rf(t.relations), r = await Ii(
    M,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await pn(r.ids)).map((i, s) => zo(r.ids[s], i)).filter((i) => i != null);
}
async function bb(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = Rf(o.relations);
  for (const a of i)
    if (await Qt(
      M,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "zone allowed asset",
        `Linked asset ${r} to zone ${n} via ${a}`
      ), !0;
  if ((s = M == null ? void 0 : M.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await M.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return Z(
          "zone allowed asset",
          `Linked asset ${r} to zone ${n} via ${a}`
        ), !0;
  }
  return Ue(
    "zone allowed asset",
    `Could not link asset ${r} to zone ${n}`,
    "Create a child relation on EPAM.TemplateZone to M.Asset (e.g. templateZoneToAllowedAsset)."
  ), !1;
}
async function Nb(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = Rf(o.relations);
  for (const s of i)
    if (await _o(
      M,
      n,
      r,
      s,
      o.relations
    ))
      return Z(
        "zone allowed asset",
        `Removed asset ${r} from zone ${n} via ${s}`
      ), !0;
  return !1;
}
async function g0(e) {
  const t = await ne(e), n = [
    .../* @__PURE__ */ new Set([
      ...bf,
      ...Tt(t.relations, /asset/i)
    ])
  ].filter((i) => it(t.relations, i)), r = await Ii(
    M,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await pn(r.ids)).map((i, s) => zo(r.ids[s], i)).filter((i) => i != null);
}
function y0(e) {
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
function Pb(e) {
  var n;
  const t = [];
  for (const r of y0(e)) {
    if (typeof r == "number" && Number.isFinite(r)) {
      t.push(r);
      continue;
    }
    if (!r || typeof r != "object")
      continue;
    const o = r, i = (n = o.systemProperties) == null ? void 0 : n.id, s = o.id ?? o.entityId ?? i;
    typeof s == "number" && Number.isFinite(s) ? t.push(s) : typeof s == "string" && /^\d+$/.test(s.trim()) && t.push(Number(s.trim()));
  }
  return t.length > 0 ? [...new Set(t)] : [...new Set(Pl(e))];
}
function xb(e, t) {
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
async function v0(e) {
  const n = y0(e).map((i) => uA(i)).filter((i) => i != null);
  if (n.length > 0)
    return n;
  const r = Pb(e).slice(0, 48);
  return r.length === 0 ? [] : (await pn(r)).map((i, s) => zo(r[s], i)).filter((i) => i != null);
}
async function Lb(e) {
  var n;
  if (!((n = M == null ? void 0 : M.raw) != null && n.postAsync))
    return [];
  const t = rd != null ? [rd, void 0] : [9815, void 0];
  for (const r of t)
    try {
      const o = await M.raw.postAsync(
        "/api/search",
        xb(e, r)
      );
      if (!o.isSuccessStatusCode || o.content == null)
        continue;
      const i = await v0(o.content);
      if (i.length > 0)
        return Z(
          "asset search",
          `Found ${i.length} approved asset(s) via /api/search${r != null ? ` (component ${r})` : ""}`
        ), i;
    } catch {
    }
  return [];
}
async function _b(e) {
  var o;
  const t = await Lb(e);
  if (t.length > 0)
    return t;
  if (!((o = M == null ? void 0 : M.raw) != null && o.getAsync))
    return [];
  const n = (e == null ? void 0 : e.trim()) || "*", r = [
    `/api/entities/search?query=${encodeURIComponent(n)}&definitionNames=M.Asset&take=48`,
    `/api/entities/search?fullText=${encodeURIComponent(n)}&definitionNames=M.Asset&take=48`
  ];
  for (const i of r)
    try {
      const s = await M.raw.getAsync(i);
      if (!s.isSuccessStatusCode || s.content == null)
        continue;
      const a = await v0(s.content);
      if (a.length > 0)
        return Z("asset search", `Found ${a.length} Content Hub asset(s) via entity search`), a;
    } catch {
    }
  return [];
}
async function Eh(e) {
  var r, o;
  const t = (r = e == null ? void 0 : e.collectionId) == null ? void 0 : r.trim(), n = e == null ? void 0 : e.query;
  if ((o = M == null ? void 0 : M.raw) != null && o.getAsync)
    try {
      if (t) {
        const i = ih(await g0(t), n);
        if (i.length > 0)
          return Z(
            "asset search",
            `Loaded ${i.length} asset(s) from collection ${t}`
          ), i;
        Ue(
          "asset search",
          `No assets found in collection ${t}`,
          "Verify AssetCollectionToAsset links or try Image URL."
        );
      } else {
        const i = ih(await _b(n), n);
        if (i.length > 0)
          return i;
      }
    } catch (i) {
      Ue("asset search", i, "Falling back to proxy or demo assets.");
    }
  if (t)
    try {
      const i = await od(
        `/assets/search?collectionId=${t}${n ? `&q=${encodeURIComponent(n)}` : ""}`
      );
      if (i.length > 0)
        return i;
    } catch (i) {
      qn("asset search", i);
    }
  return qn("asset search", "Using demo asset results"), vC(n);
}
async function zb(e) {
  var r;
  const t = [
    ...new Set(
      e.map((o) => Number(o)).filter((o) => Number.isFinite(o) && o > 0)
    )
  ];
  return t.length === 0 || !((r = M == null ? void 0 : M.raw) != null && r.getAsync) ? [] : (await pn(t)).map((o, i) => zo(t[i], o)).filter((o) => o != null);
}
async function Rb(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = [
    .../* @__PURE__ */ new Set([
      ...bf,
      ...Tt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const a of i)
    if (await Qt(
      M,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "asset collection",
        `Linked asset ${r} to collection ${n} via ${a}`
      ), !0;
  if ((s = M == null ? void 0 : M.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await M.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return Z(
          "asset collection",
          `Linked asset ${r} to collection ${n} via ${a}`
        ), !0;
  }
  return Ue(
    "asset collection",
    `Could not add asset ${r} to collection ${n}`,
    "Verify AssetCollectionToAsset exists on the collection definition."
  ), !1;
}
async function Mb(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = [
    .../* @__PURE__ */ new Set([
      ...bf,
      ...Tt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const s of i)
    if (await _o(
      M,
      n,
      r,
      s,
      o.relations
    ))
      return Z(
        "asset collection",
        `Removed asset ${r} from collection ${n} via ${s}`
      ), !0;
  return !1;
}
async function w0(e, t) {
  return ns(e, t, "marketing asset properties", "EPAM.MarketingAsset");
}
const T0 = ["EPAM.MarketingAssetZoneValue", "MarketingAssetZoneValue"];
function Ob(e) {
  if (e == null || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.error;
  return typeof n == "string" ? n.trim() : "";
}
function $b(e) {
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
async function S0(e, t) {
  const n = await $a(M, T0[0]);
  await wn(
    e,
    TC(t),
    "zone value title"
  );
  const r = Xv(t);
  if (Object.keys(r).length > 0) {
    const o = kC(t, n);
    if (Object.keys(o).length > 0) {
      if (!await wn(e, o, "zone value content")) {
        const s = {};
        for (const [a, l] of Object.entries(o))
          l != null && typeof l == "object" && !Array.isArray(l) && typeof l.Invariant == "string" ? s[a] = l.Invariant : s[a] = l;
        await wn(e, s, "zone value content plain");
      }
    } else
      ae(
        "zone value content",
        `No matching content properties on EPAM.MarketingAssetZoneValue for zone ${t.zoneKey} (definition has: ${n.map((i) => i.name).join(", ") || "(none)"}). Text/html will persist via zoneLayoutJson fallback.`
      );
  }
  await Ab(e, t);
}
async function Ib(e) {
  var i;
  if (!((i = M == null ? void 0 : M.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating zone values.");
  const t = [
    { Title: { Invariant: e.zoneKey } },
    { Title: e.zoneKey },
    {}
  ];
  let n = null, r = "unknown", o = "";
  for (const s of T0) {
    for (const a of t) {
      const l = await M.raw.postAsync("/api/entities", {
        entitydefinition: {
          href: `/api/entitydefinitions/${s}`
        },
        properties: a
      }), c = $b(l.content);
      if (l.isSuccessStatusCode && c) {
        n = c, Z(
          "zone value create",
          `Created ${s} ${c} for ${e.zoneKey} with keys: ${Object.keys(a).join(", ") || "(none)"}`
        );
        break;
      }
      r = String(l.statusCode ?? "unknown"), o = Ob(l.content), ae(
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
    await S0(n, e);
  } catch (s) {
    ae(
      "zone value create",
      `Zone value ${n} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return n;
}
async function Db(e) {
  if (!e.id)
    throw new Error(`Zone value for ${e.zoneKey} has no entity id.`);
  try {
    await S0(e.id, e), Z("zone value", `Updated EPAM.MarketingAssetZoneValue ${e.id} (${e.zoneKey})`);
  } catch (t) {
    throw new Error(
      `Failed to update zone value ${e.id} (${e.zoneKey}). Grant Update on EPAM.MarketingAssetZoneValue. ${t instanceof Error ? t.message : String(t)}`
    );
  }
}
async function Hb(e, t, n) {
  var o;
  const r = [
    ...Tt(n, /zonevalue/i),
    "marketingAssetToZoneValue",
    "MarketingAssetToZoneValue",
    "EPAM.MarketingAssetToZoneValue"
  ];
  for (const i of [...new Set(r)])
    if (await Qt(
      M,
      e,
      t,
      i,
      n
    ))
      return;
  if (!((o = M == null ? void 0 : M.raw) != null && o.postAsync))
    throw new Error("Content Hub client is not available for linking zone values.");
  for (const i of [...new Set(r)])
    if ((await M.raw.postAsync(
      `/api/entities/${e}/relations/${i}`,
      {
        child: { href: `/api/entities/${t}` }
      }
    )).isSuccessStatusCode)
      return;
  Ue(
    "marketingAssetToZoneValue link",
    `Could not link zone value ${t} to asset ${e}`,
    "The zone value entity was saved but the relation link may need to be created manually."
  );
}
async function Fb(e, t) {
  var a;
  const n = await ne(e), r = [...new Set(i0(n))], o = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const l = await pn(r);
    for (let c = 0; c < r.length; c += 1) {
      const f = n0(r[c], l[c]);
      o.has(f.zoneKey) || o.set(f.zoneKey, f);
    }
  }
  const i = [], s = /* @__PURE__ */ new Set();
  for (const l of t) {
    if (!((a = l.zoneKey) != null && a.trim()) || s.has(l.zoneKey))
      continue;
    if (!EC(l)) {
      ae("zone value save", `Skipped empty zone value for ${l.zoneKey}`);
      continue;
    }
    s.add(l.zoneKey);
    const c = l.id ? l : o.get(l.zoneKey), f = c != null && c.id ? { ...l, id: c.id } : { ...l, id: void 0 };
    if (f.id) {
      await Db(f), i.push(f);
      continue;
    }
    const u = await Ib(f), p = { ...f, id: u };
    await Hb(e, u, n.relations), i.push(p);
  }
  return Z("zone values", `Saved ${i.length} EPAM.MarketingAssetZoneValue record(s)`), i;
}
async function Ub(e) {
  const t = AC(e);
  if (Object.keys(t).length === 0)
    return e;
  if (!await w0(e.id, t))
    throw new Error(
      `Could not save marketing asset ${e.id}. Grant Update on EPAM.MarketingAsset and ensure properties such as zoneLayoutJson exist on the definition.`
    );
  return Z("marketing asset properties", `Saved properties on marketing asset ${e.id}`), e;
}
const jb = "designerDocumentJson", Bb = "designerInstanceJson", no = "EPAM.Template", $s = "EPAM.BuilderMarketingAsset";
function k0(e) {
  return (e == null ? void 0 : e.trim()) || Bb;
}
function Kb(e) {
  const t = e.split("/").filter(Boolean);
  return decodeURIComponent(t[t.length - 1] ?? no);
}
function Vb(e, t) {
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
async function E0(e, t) {
  if (t != null && t.trim())
    return t.trim().replace(/^EPAM\./, "");
  const n = e.properties ?? {};
  for (const r of Object.keys(n))
    if (/designerDocumentJson/i.test(r))
      return r.replace(/^EPAM\./, "");
  try {
    const r = Ef(e, no), o = Kb(r), s = (await $a(M, o)).find((a) => /designerDocumentJson/i.test(a.name));
    if (s)
      return s.name.replace(/^EPAM\./, "");
  } catch {
  }
  return jb;
}
async function Zb(e, t) {
  const n = await ne(e), r = n.properties ?? {}, o = await E0(n, t);
  return Vb(r, o);
}
async function Wb(e, t, n, r) {
  if (!(e != null && e.trim()) || !Ao(e.trim()))
    throw new Error(Qn());
  const o = await ne(e), i = await E0(o, n), s = bC(t, r, i);
  try {
    if (!await ns(
      e,
      s,
      "template designer document",
      no
    ))
      throw new Error(
        `Could not save designer document on ${no} ${e}. Ensure property "${i}" exists on the template definition and your role can Update it.`
      );
  } catch (a) {
    throw a instanceof Error && a.message.includes("Could not save designer document") ? a : new Error(
      `Could not save designer document on ${no} ${e}. Ensure property "${i}" exists on EPAM.Template and your role can Update it. ${a instanceof Error ? a.message : String(a)}`
    );
  }
  return Z(
    "template designer document",
    `Saved ${i} on ${no} ${e}`
  ), !0;
}
async function Yb(e, t) {
  const r = (await ne(e)).properties ?? {}, o = k0(t), i = [`EPAM.${o}`, o, o.replace(/^./, (s) => s.toUpperCase())];
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
async function Gb(e, t, n) {
  const r = k0(n), o = { [r]: t };
  try {
    if (!await ns(
      e,
      o,
      "builder marketing asset designer instance",
      $s
    ))
      throw new Error(
        `Could not save designer instance on ${$s} ${e}. Ensure property "${r}" exists and your role can Update it.`
      );
  } catch (i) {
    throw i instanceof Error && i.message.includes("Could not save designer instance") ? i : new Error(
      `Could not save designer instance on ${$s} ${e}. Ensure property "${r}" exists and your role can Update it. ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return Z(
    "builder marketing asset designer instance",
    `Saved ${r} on ${$s} ${e}`
  ), !0;
}
const re = {
  getTemplate: Fl,
  listTemplatesForBrandKit: u0,
  duplicateTemplate: ab,
  createTemplate: lb,
  linkMarketingAssetToTemplate: cb,
  listTemplates: async (e) => {
    try {
      return await od(`/entities/EPAM.Template${e ? `?channelType=${e}` : ""}`);
    } catch (t) {
      return qn("template list", t), [mC(Th)];
    }
  },
  saveTemplate: If,
  getBrandKit: fb,
  getMarketingAsset: db,
  createMarketingAsset: async (e) => {
    try {
      return await od("/entities/EPAM.MarketingAsset", {
        method: "POST",
        body: JSON.stringify(e)
      });
    } catch (t) {
      return qn("marketing asset create", t), yC("dummy-asset", e.templateId || Th);
    }
  },
  updateMarketingAsset: Ub,
  saveMarketingAssetZoneValues: Fb,
  updateMarketingAssetProperties: w0,
  getTemplateDesignerDocument: Zb,
  saveTemplateDesignerDocument: Wb,
  getMarketingAssetDesignerInstance: Yb,
  saveMarketingAssetDesignerInstance: Gb,
  uploadRenderedOutput: async (e, t, n) => {
    if (!$f())
      return ae(
        "rendered output upload",
        `Skipped upload for ${n} — no asset upload proxy is configured on this Content Hub instance.`
      ), { skipped: !0, fileName: n, assetId: e };
    try {
      const r = new FormData();
      r.append("file", t, n), r.append("linkToEntity", "EPAM.MarketingAsset"), r.append("linkToEntityId", e), r.append("relationName", "marketingAssetToRenderedOutput");
      const o = await fetch(`${Hl}/assets/upload`, {
        method: "POST",
        body: r
      });
      if (!o.ok)
        throw new Error(`Asset upload failed (${o.status})`);
      return o.json();
    } catch (r) {
      return qn("rendered output upload", r), { skipped: !0, fileName: n, assetId: e };
    }
  },
  searchAssets: Eh,
  searchAssetsInCollection: async (e, t) => Eh({ collectionId: e, query: t }),
  getCollectionAssets: g0,
  getZoneAllowedAssets: Cb,
  getTemplateAllowedAssets: p0,
  getAssetsByIds: zb,
  addAssetToCollection: Rb,
  removeAssetFromCollection: Mb,
  addAllowedAssetToTemplate: m0,
  removeAllowedAssetFromTemplate: Sb,
  addAllowedAssetToZone: bb,
  removeAllowedAssetFromZone: Nb
}, A0 = E.createContext(null);
function Xb({
  brandKitId: e,
  children: t
}) {
  const [n, r] = E.useState(null);
  return E.useEffect(() => {
    let o = !1;
    return re.getBrandKit(e || nr).then((i) => {
      o || r(i);
    }).catch(() => {
      o || r(mr(e || nr));
    }), () => {
      o = !0;
    };
  }, [e]), n ? /* @__PURE__ */ d(A0.Provider, { value: n, children: t }) : /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading brand kit..." });
}
function rs() {
  const e = E.useContext(A0);
  if (!e)
    throw new Error("useBrandKit must be used within a BrandKitProvider");
  return e;
}
function Df(e) {
  var n;
  return (n = rs().colors.find((r) => r.colorUsageType === e)) == null ? void 0 : n.hexValue;
}
function Ha(e) {
  var n;
  return (n = rs().fonts.find((r) => r.fontUsageType === e)) == null ? void 0 : n.fontFamily;
}
const C0 = E.createContext({});
function Jb({
  value: e,
  children: t
}) {
  const n = E.useMemo(
    () => e,
    [
      e.searchIdentifier,
      e.selectionPoolIdentifier,
      e.search,
      e.selection,
      e.notifier
    ]
  );
  return /* @__PURE__ */ d(C0.Provider, { value: n, children: t });
}
function Hf() {
  return E.useContext(C0);
}
function b0() {
  const { searchIdentifier: e, search: t } = Hf(), [n, r] = E.useState([]), [o, i] = E.useState("");
  return E.useEffect(() => {
    if (!e || !(t != null && t.getEventSearchIdentifier)) {
      r([]), i("");
      return;
    }
    const s = t.getEventSearchIdentifier(e), a = (l) => {
      const c = l.detail;
      !c || c.searchIdentifier !== s || (r(Array.isArray(c.ids) ? c.ids : []), i(c.fullText ?? ""));
    };
    return window.addEventListener("SEARCH_FINISHED", a), () => window.removeEventListener("SEARCH_FINISHED", a);
  }, [t, e]), E.useEffect(() => {
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
async function Qb(e, t, n, r) {
  var a;
  const o = NE(t, n, r);
  if (o.templateId)
    return Z("templateId", `Resolved ${o.templateId} from config or entity relations`), o;
  const i = e, s = o.marketingAssetId;
  if (!((a = i == null ? void 0 : i.raw) != null && a.getAsync) || !s)
    return vn(
      "templateId",
      "No templateId in config and marketingAssetToTemplate could not be read from context.entity",
      "Set templateId in External component Configuration or link a template to this marketing asset."
    ), o;
  try {
    for (const l of AE) {
      const c = await i.raw.getAsync(
        `/api/entities/${s}/relations/${l}`
      );
      if (!c.isSuccessStatusCode || !c.content)
        continue;
      const f = Pl(c.content);
      if (f.length > 0)
        return Z("templateId", `Resolved ${f[0]} from ${l} relation API`), { ...o, templateId: String(f[0]) };
    }
  } catch (l) {
    vn("templateId", l, "Failed to resolve marketingAssetToTemplate via Content Hub API.");
  }
  return vn(
    "templateId",
    "No templateId in config and no marketingAssetToTemplate relation on this asset",
    "Set templateId in External component Configuration or link a template to this marketing asset."
  ), o;
}
function Fr(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return e;
  if (typeof e == "string" && e.trim()) {
    const t = Number(e);
    if (Number.isFinite(t))
      return t;
  }
}
function id(e) {
  const t = e.positionX, n = e.positionY;
  if (!((t === 0 || t === void 0) && (n === 0 || n === void 0) && (t === 0 || n === 0)))
    return e;
  const o = { ...e };
  return delete o.positionX, delete o.positionY, o;
}
function Fa(e) {
  return id(e);
}
function ji(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return;
  const t = e, n = {}, r = Fr(t.positionX), o = Fr(t.positionY), i = Fr(t.zoneWidth), s = Fr(t.zoneHeight), a = Fr(t.offsetPx), l = Fr(t.sortOrder);
  return r !== void 0 && (n.positionX = r), o !== void 0 && (n.positionY = o), i !== void 0 && (n.zoneWidth = i), s !== void 0 && (n.zoneHeight = s), a !== void 0 && (n.offsetPx = a), l !== void 0 && (n.sortOrder = l), typeof t.contentAlignment == "string" && (n.contentAlignment = Yv(t.contentAlignment)), typeof t.offsetDirection == "string" && (n.offsetDirection = Gv(t.offsetDirection)), Object.keys(n).length > 0 ? Fa(n) : void 0;
}
function Ah(e) {
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
        const s = ji(o);
        s && (n[i] = s);
      }
      return n;
    }
    if (typeof t == "object") {
      const n = {};
      for (const [r, o] of Object.entries(t)) {
        const i = ji(o);
        i && (n[r] = i);
      }
      return n;
    }
  } catch {
    return {};
  }
  return {};
}
function qb(e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (!n.trim() || r == null)
      continue;
    const o = ji(r);
    o && (t[n] = o);
  }
  return JSON.stringify(t, null, 2);
}
function sd(e) {
  const t = {};
  return typeof e.textValue == "string" && (t.textValue = e.textValue), typeof e.colorValue == "string" && (t.colorValue = e.colorValue), typeof e.htmlValue == "string" && (t.htmlValue = e.htmlValue), typeof e.linkUrl == "string" && (t.linkUrl = e.linkUrl), typeof e.imageAssetId == "string" && (t.imageAssetId = e.imageAssetId), typeof e.imageAssetUrl == "string" && (t.imageAssetUrl = e.imageAssetUrl), Object.keys(t).length > 0 ? t : void 0;
}
function N0(e, t) {
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    if (!o.trim() || i == null)
      continue;
    const s = ji(i);
    s && (n[o] = s);
  }
  const r = {};
  for (const [o, i] of Object.entries(t)) {
    if (!o.trim() || !i)
      continue;
    const s = sd(i);
    s && (r[o] = { zoneKey: o, ...s });
  }
  return Object.keys(r).length === 0 ? JSON.stringify(n, null, 2) : JSON.stringify({ layouts: n, values: r }, null, 2);
}
function Ua(e) {
  if (!(e != null && e.trim()))
    return { layouts: {}, values: {} };
  try {
    const t = JSON.parse(e);
    if (t == null || typeof t != "object" || Array.isArray(t))
      return { layouts: Ah(e), values: {} };
    const n = t;
    if (n.layouts != null && typeof n.layouts == "object" && !Array.isArray(n.layouts)) {
      const i = Ah(JSON.stringify(n.layouts)), s = {};
      if (n.values != null && typeof n.values == "object" && !Array.isArray(n.values))
        for (const [a, l] of Object.entries(n.values)) {
          if (!a.trim() || l == null || typeof l != "object")
            continue;
          const c = sd(l);
          c && (s[a] = { zoneKey: a, ...c });
        }
      return { layouts: i, values: s };
    }
    const r = {}, o = {};
    for (const [i, s] of Object.entries(n)) {
      if (!i.trim() || s == null || typeof s != "object")
        continue;
      const a = s, l = ji(a);
      l && (r[i] = l);
      const c = sd(a);
      c && (o[i] = { zoneKey: i, ...c });
    }
    return { layouts: r, values: o };
  } catch {
    return { layouts: {}, values: {} };
  }
}
function ja(e, t, n) {
  var o, i, s, a, l, c;
  const r = Bi(e, t);
  for (const f of e.zones) {
    const u = _r(f, e.zones), p = n[u] ?? n[f.zoneKey];
    if (!p)
      continue;
    const v = r[f.id];
    r[f.id] = {
      zoneKey: u,
      id: v == null ? void 0 : v.id,
      textValue: (o = v == null ? void 0 : v.textValue) != null && o.trim() ? v.textValue : p.textValue,
      colorValue: (i = v == null ? void 0 : v.colorValue) != null && i.trim() ? v.colorValue : p.colorValue,
      htmlValue: (s = v == null ? void 0 : v.htmlValue) != null && s.trim() ? v.htmlValue : p.htmlValue,
      linkUrl: (a = v == null ? void 0 : v.linkUrl) != null && a.trim() ? v.linkUrl : p.linkUrl,
      imageAssetId: (l = v == null ? void 0 : v.imageAssetId) != null && l.trim() ? v.imageAssetId : p.imageAssetId,
      imageAssetUrl: (c = v == null ? void 0 : v.imageAssetUrl) != null && c.trim() ? v.imageAssetUrl : p.imageAssetUrl
    };
  }
  return Object.values(r);
}
function P0(e, t) {
  return id(t ? {
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
function Co(e, t) {
  return t.filter((r) => r.zoneKey === e.zoneKey).length > 1 ? `${e.zoneKey}__${e.id}` : e.zoneKey;
}
function _r(e, t) {
  return Co(e, t);
}
function Bi(e, t) {
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
    const s = _r(i, e.zones), a = n.get(s) ?? n.get(i.zoneKey), l = a == null ? void 0 : a.shift();
    l && (r[i.id] = { ...l, zoneKey: s });
  }
  return r;
}
function x0(e, t) {
  return {
    ...e,
    zones: [...e.zones].map((n) => {
      const r = Co(n, e.zones), o = r === n.zoneKey ? t[n.zoneKey] : t[r];
      return P0(n, o);
    }).sort((n, r) => n.sortOrder - r.sortOrder || n.id.localeCompare(r.id))
  };
}
function eN(e) {
  return Fa({
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
function tN(e) {
  const t = {};
  for (const n of e.zones) {
    const r = Co(n, e.zones);
    t[r] = eN(n);
  }
  return t;
}
function L0(e, t) {
  const n = tN(e);
  for (const r of e.zones) {
    const o = Co(r, e.zones), i = o === r.zoneKey ? t[r.zoneKey] : t[o];
    i ? n[o] = Fa({ ...n[o], ...i }) : n[o] = Fa(n[o] ?? {});
  }
  return n;
}
function nN({
  layout: e,
  onChange: t,
  showPosition: n = !1,
  compact: r = !1
}) {
  return /* @__PURE__ */ A("div", { className: `asset-zone-layout-fields${r ? " asset-zone-layout-fields-compact" : ""}`, children: [
    /* @__PURE__ */ A("div", { className: "asset-zone-layout-grid", children: [
      /* @__PURE__ */ A("label", { children: [
        "Alignment",
        /* @__PURE__ */ d(
          "select",
          {
            value: e.contentAlignment ?? Lr,
            onChange: (o) => t({ contentAlignment: o.target.value }),
            children: Zv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
          }
        )
      ] }),
      /* @__PURE__ */ A("label", { children: [
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
      /* @__PURE__ */ A("label", { children: [
        "Direction",
        /* @__PURE__ */ d(
          "select",
          {
            value: e.offsetDirection ?? Il,
            onChange: (o) => t({ offsetDirection: o.target.value }),
            children: Wv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
          }
        )
      ] }),
      /* @__PURE__ */ A("label", { children: [
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
    n && /* @__PURE__ */ A("div", { className: "asset-zone-layout-grid asset-zone-layout-grid-position", children: [
      /* @__PURE__ */ A("label", { children: [
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
      /* @__PURE__ */ A("label", { children: [
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
      /* @__PURE__ */ A("label", { children: [
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
      /* @__PURE__ */ A("label", { children: [
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
function rN(...e) {
  const t = /* @__PURE__ */ new Set(), n = [];
  for (const r of e)
    for (const o of r) {
      const i = o.id || o.previewUrl || o.thumbnailUrl;
      !i || t.has(i) || (t.add(i), n.push(o));
    }
  return n;
}
function oN({
  zoneKey: e,
  zone: t,
  templateId: n,
  selectedAssetId: r,
  selectedUrl: o,
  onChange: i,
  compact: s = !1
}) {
  const { searchIdentifier: a } = Hf(), { resultIds: l, hasSearchIntegration: c } = b0(), [f, u] = E.useState([]), [p, v] = E.useState([]), [k, T] = E.useState([]), [_, h] = E.useState(!1), [m, g] = E.useState(null), [b, C] = E.useState(!1), [N, S] = E.useState("");
  E.useEffect(() => {
    if (!(n != null && n.trim()) || n.startsWith("temp-")) {
      u([]);
      return;
    }
    let z = !1;
    return h(!0), g(null), re.getTemplateAllowedAssets(n).then((Y) => {
      z || u(Y);
    }).catch((Y) => {
      z || (u([]), g(Y instanceof Error ? Y.message : "Could not load template images."));
    }).finally(() => {
      z || h(!1);
    }), () => {
      z = !0;
    };
  }, [n]), E.useEffect(() => {
    const z = (t == null ? void 0 : t.allowedAssetIds) ?? [];
    if (z.length === 0) {
      v([]);
      return;
    }
    let Y = !1;
    return re.getAssetsByIds(z).then((Re) => {
      Y || v(Re);
    }).catch(() => {
      Y || v([]);
    }), () => {
      Y = !0;
    };
  }, [t == null ? void 0 : t.allowedAssetIds]), E.useEffect(() => {
    if (l.length === 0) {
      T([]);
      return;
    }
    let z = !1;
    return re.getAssetsByIds(l).then((Y) => {
      z || T(Y);
    }).catch(() => {
      z || T([]);
    }), () => {
      z = !0;
    };
  }, [l]);
  const L = E.useMemo(
    () => rN(p, f),
    [f, p]
  ), U = E.useMemo(() => L.length > 0 ? L : k, [L, k]), R = L.length > 0, D = () => {
    const z = N.trim();
    z && (i(e, { imageAssetUrl: z }), C(!1), S(""));
  };
  return !(n != null && n.trim()) || n.startsWith("temp-") ? /* @__PURE__ */ d("p", { className: "image-picker-hint", children: "Template image library is not available yet. Save the template and link assets in template setup." }) : /* @__PURE__ */ A("div", { className: `image-picker${s ? " image-picker-compact" : ""}`, children: [
    R ? /* @__PURE__ */ A("p", { className: "image-picker-hint", children: [
      "Choose an image from the template library",
      p.length > 0 ? " (zone + template)" : "",
      "."
    ] }) : c ? /* @__PURE__ */ A("p", { className: "image-picker-hint", children: [
      "Run a Content Hub search on this page, then pick an image below.",
      a ? ` (search: ${a})` : ""
    ] }) : /* @__PURE__ */ A("p", { className: "image-picker-hint", children: [
      "Link images on the template in ",
      /* @__PURE__ */ d("strong", { children: "Edit template" }),
      ", or add ",
      /* @__PURE__ */ d("code", { children: "searchIdentifier" }),
      " to this page's external component configuration to pick assets from search."
    ] }),
    _ && /* @__PURE__ */ d("div", { className: "image-picker-loading", children: "Loading template images..." }),
    m && /* @__PURE__ */ d("div", { className: "image-picker-error", children: m }),
    o && /* @__PURE__ */ d("div", { className: "image-picker-selected-preview", children: /* @__PURE__ */ d("img", { src: o, alt: "", className: "image-picker-selected-image" }) }),
    /* @__PURE__ */ d("div", { className: "image-picker-grid", role: "radiogroup", "aria-label": "Choose image", children: U.map((z) => {
      const Y = r && z.id === r || !r && o && z.previewUrl === o || !r && o && z.thumbnailUrl === o;
      return /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": !!Y,
          className: `image-picker-option${Y ? " image-picker-option-selected" : ""}`,
          onClick: () => i(e, {
            id: z.id || void 0,
            imageAssetUrl: z.previewUrl ?? z.thumbnailUrl
          }),
          children: [
            /* @__PURE__ */ d("span", { className: "image-picker-preview", children: /* @__PURE__ */ d("img", { src: z.thumbnailUrl, alt: "", className: "image-picker-image" }) }),
            /* @__PURE__ */ d("span", { className: "image-picker-label", children: z.name })
          ]
        },
        z.id || z.thumbnailUrl
      );
    }) }),
    !_ && U.length === 0 && !m && /* @__PURE__ */ A("p", { className: "image-picker-hint", children: [
      "No images available yet. In ",
      /* @__PURE__ */ d("strong", { children: "Edit template" }),
      ', use "Template image library" to link assets from Content Hub search.'
    ] }),
    /* @__PURE__ */ d("div", { className: "image-picker-footer", children: /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "image-picker-url-toggle",
        onClick: () => C((z) => !z),
        children: b ? "Hide image URL" : "Use image URL instead"
      }
    ) }),
    b && /* @__PURE__ */ A("div", { className: "image-picker-url-form", children: [
      /* @__PURE__ */ d(
        "input",
        {
          className: "image-picker-url-input",
          placeholder: "https://...",
          value: N,
          onChange: (z) => S(z.target.value)
        }
      ),
      /* @__PURE__ */ d("button", { type: "button", className: "image-picker-url-apply", onClick: D, disabled: !N.trim(), children: "Use image URL" })
    ] })
  ] });
}
function _0({
  zone: e,
  templateId: t,
  value: n,
  onChange: r,
  adminMode: o = !1,
  hideLogoPicker: i = !1,
  layoutMode: s = "canvas"
}) {
  const a = rs(), l = o || !e.isLocked, c = e.positionX !== void 0 || e.positionY !== void 0, f = s === "stacked" ? { position: "relative", width: "100%" } : c ? {
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
  }, u = sC(e, f, s), p = aC(e), v = s === "stacked" ? " zone-stacked" : "";
  if (_l(e))
    return /* @__PURE__ */ d(
      iN,
      {
        style: u,
        layoutClass: p,
        stackedClass: v,
        zone: e,
        brandKit: a
      }
    );
  if (e.isLocked && !o)
    return /* @__PURE__ */ d("div", { style: u, className: `zone zone-locked${v} ${p}`, "data-zone-key": e.zoneKey, children: /* @__PURE__ */ d(sN, { zone: e, brandKit: a, layoutMode: s }) });
  switch (e.zoneType) {
    case "Text":
      return /* @__PURE__ */ d(
        cN,
        {
          style: u,
          layoutClass: p,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: s
        }
      );
    case "Heading":
      return /* @__PURE__ */ d(
        lN,
        {
          style: u,
          layoutClass: p,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: s
        }
      );
    case "Image":
      return /* @__PURE__ */ d(
        aN,
        {
          style: u,
          layoutClass: p,
          stackedClass: v,
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
        uN,
        {
          style: u,
          layoutClass: p,
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
          style: { ...u, backgroundColor: (n == null ? void 0 : n.colorValue) ?? "#ffffff" },
          className: `zone zone-background ${p}`,
          "data-zone-key": e.zoneKey
        }
      );
    case "Divider":
      return /* @__PURE__ */ d(
        "hr",
        {
          style: u,
          className: `zone zone-divider${v} ${p}`,
          "data-zone-key": e.zoneKey
        }
      );
    case "HTML":
      return /* @__PURE__ */ d(dN, { style: u, layoutClass: p, zone: e, value: n, onChange: r });
    default:
      return null;
  }
}
function iN({
  style: e,
  layoutClass: t,
  stackedClass: n,
  zone: r,
  brandKit: o
}) {
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-logo${n} ${t}`, "data-zone-key": r.zoneKey, children: /* @__PURE__ */ d("span", { className: "zone-logo-placeholder", "aria-label": `${o.brandKitName} logo`, children: "Logo" }) });
}
function sN({
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
    const o = Ui(e.htmlDefaultContent);
    return o ? /* @__PURE__ */ d("div", { dangerouslySetInnerHTML: { __html: o } }) : null;
  }
  return e.zoneType === "Image" ? /* @__PURE__ */ d("div", { className: "zone-image-placeholder zone-image-placeholder-locked", children: "Image zone — unlock in template setup to change the image here." }) : null;
}
function aN({
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
  const f = !a && !l;
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-image${n} ${t}`, "data-zone-key": r.zoneKey, children: f ? /* @__PURE__ */ d(
    oN,
    {
      zoneKey: r.zoneKey,
      zone: r,
      templateId: o,
      selectedAssetId: i == null ? void 0 : i.imageAssetId,
      selectedUrl: i == null ? void 0 : i.imageAssetUrl,
      compact: n.includes("stacked"),
      onChange: (u, p) => s(u, {
        zoneKey: u,
        imageAssetId: p.id,
        imageAssetUrl: p.imageAssetUrl
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
function lN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = Ha("Heading"), a = Df("Secondary"), l = n.headingLevel ?? Pn;
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        ...e,
        fontFamily: s,
        fontSize: iC[l],
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
        const f = c.currentTarget.innerText;
        if (n.maxCharacterCount && f.length > n.maxCharacterCount) {
          c.currentTarget.innerText = (r == null ? void 0 : r.textValue) ?? "";
          return;
        }
        o(n.zoneKey, { zoneKey: n.zoneKey, textValue: f });
      },
      children: (r == null ? void 0 : r.textValue) ?? ""
    }
  );
}
function cN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = Ha("Heading"), a = Ha("Body"), l = Df("Secondary"), c = (n.zoneLabel ?? "").toLowerCase().includes("headline") ? s : a;
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
      onBlur: (f) => {
        const u = f.currentTarget.innerText;
        if (n.maxCharacterCount && u.length > n.maxCharacterCount) {
          f.currentTarget.innerText = (r == null ? void 0 : r.textValue) ?? "";
          return;
        }
        o(n.zoneKey, { zoneKey: n.zoneKey, textValue: u });
      },
      children: (r == null ? void 0 : r.textValue) ?? ""
    }
  );
}
function uN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = Df("Accent"), a = Ha("CTA");
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
function dN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o
}) {
  return n.htmlAllowUserOverride ? /* @__PURE__ */ A("div", { style: e, className: `zone zone-html ${t}`, children: [
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
        dangerouslySetInnerHTML: { __html: Ui((r == null ? void 0 : r.htmlValue) ?? n.htmlDefaultContent) }
      }
    )
  ] }) : /* @__PURE__ */ d(
    "div",
    {
      style: e,
      className: `zone zone-html zone-html-locked ${t}`,
      "data-zone-key": n.zoneKey,
      dangerouslySetInnerHTML: { __html: Ui(n.htmlDefaultContent) }
    }
  );
}
function z0({
  template: e,
  zoneLayouts: t,
  zoneValues: n,
  layoutMode: r,
  onLayoutChange: o,
  onZoneValueChange: i
}) {
  var p;
  const [s, a] = E.useState(((p = e.zones[0]) == null ? void 0 : p.id) ?? null), l = E.useMemo(() => {
    const v = /* @__PURE__ */ new Set();
    for (const k of e.zones) {
      if (v.has(k.zoneKey))
        return !0;
      v.add(k.zoneKey);
    }
    return !1;
  }, [e.zones]), c = E.useMemo(
    () => [...e.zones].map((v) => {
      const k = Co(v, e.zones), T = k === v.zoneKey ? t[v.zoneKey] : t[k];
      return P0(v, T);
    }).sort((v, k) => v.sortOrder - k.sortOrder || v.id.localeCompare(k.id)),
    [e.zones, t]
  ), f = E.useMemo(() => qb(t), [t]), u = (v) => {
    const k = s === v.id, T = Co(v, e.zones), _ = e.zones.find((m) => m.id === v.id) ?? v, h = _r(_, e.zones);
    return /* @__PURE__ */ A("div", { className: "asset-zone-structure-row", children: [
      /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          className: "asset-zone-structure-header",
          onClick: () => a((m) => m === v.id ? null : v.id),
          "aria-expanded": k,
          children: [
            /* @__PURE__ */ d("span", { className: "asset-zone-structure-title", children: v.zoneLabel || v.zoneKey }),
            /* @__PURE__ */ d("span", { className: "asset-zone-structure-type", children: v.zoneType }),
            /* @__PURE__ */ d("span", { className: "asset-zone-structure-chevron", children: k ? "▾" : "▸" })
          ]
        }
      ),
      k && /* @__PURE__ */ d("div", { className: "asset-zone-structure-body", children: /* @__PURE__ */ A("div", { className: "asset-zone-structure-content", children: [
        /* @__PURE__ */ d("p", { className: "asset-zone-structure-content-label", children: "Content" }),
        l && /* @__PURE__ */ A("p", { className: "asset-zone-structure-key-hint", children: [
          "Zone key: ",
          /* @__PURE__ */ d("code", { children: h })
        ] }),
        /* @__PURE__ */ d(
          _0,
          {
            zone: { ..._, zoneKey: h },
            templateId: e.id,
            value: n[_.id],
            onChange: (m, g) => i(_.id, { ...g, zoneKey: h }),
            layoutMode: "stacked"
          }
        ),
        /* @__PURE__ */ d(
          nN,
          {
            layout: (T === v.zoneKey ? t[v.zoneKey] : t[T]) ?? {},
            onChange: (m) => o(T, m),
            showPosition: r === "canvas"
          },
          T
        )
      ] }) })
    ] }, v.id);
  };
  return /* @__PURE__ */ A("div", { className: "asset-structure-panel", children: [
    /* @__PURE__ */ d("p", { className: "asset-structure-panel-hint", children: "Expand a zone to edit position, alignment, and content. Layout is saved as JSON on this marketing asset." }),
    l && /* @__PURE__ */ d("p", { className: "asset-zone-structure-warning", children: "Some zones share the same zone key. Edit each zone's key in Template setup so content stays independent after save." }),
    /* @__PURE__ */ d("div", { className: "asset-zone-structure-list", children: c.map(u) }),
    /* @__PURE__ */ A("details", { className: "asset-layout-json-preview", children: [
      /* @__PURE__ */ d("summary", { children: "Layout JSON (saved on marketing asset)" }),
      /* @__PURE__ */ d("pre", { children: f })
    ] })
  ] });
}
function Ba({
  structure: e,
  preview: t,
  structureTitle: n = "Structure",
  previewTitle: r = "Preview"
}) {
  return /* @__PURE__ */ A("div", { className: "builder-split", children: [
    /* @__PURE__ */ A("section", { className: "builder-split-panel builder-split-structure", "aria-label": n, children: [
      /* @__PURE__ */ d("h3", { className: "builder-split-heading", children: n }),
      /* @__PURE__ */ d("div", { className: "builder-split-structure-body", children: e })
    ] }),
    /* @__PURE__ */ A("section", { className: "builder-split-panel builder-split-preview", "aria-label": r, children: [
      /* @__PURE__ */ d("h3", { className: "builder-split-heading", children: r }),
      /* @__PURE__ */ d("div", { className: "builder-split-preview-body", children: t })
    ] })
  ] });
}
function fN(e) {
  var n;
  const t = {};
  for (const r of e.zones) {
    const i = { zoneKey: _r(r, e.zones) };
    if (_l(r)) {
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
function pN(e, t) {
  var o, i, s, a, l, c, f, u;
  const n = fN(e), r = { ...n };
  for (const p of e.zones) {
    const v = _r(p, e.zones), k = t[p.id] ?? t[v] ?? t[p.zoneKey];
    if (k) {
      if (_l(p)) {
        r[p.id] = {
          zoneKey: v,
          imageAssetUrl: (o = k.imageAssetUrl) != null && o.trim() ? k.imageAssetUrl : (i = n[p.id]) == null ? void 0 : i.imageAssetUrl
        };
        continue;
      }
      r[p.id] = {
        ...n[p.id],
        ...k,
        zoneKey: v,
        textValue: (s = k.textValue) != null && s.trim() ? k.textValue : (a = n[p.id]) == null ? void 0 : a.textValue,
        htmlValue: (l = k.htmlValue) != null && l.trim() ? k.htmlValue : (c = n[p.id]) == null ? void 0 : c.htmlValue,
        imageAssetUrl: (f = k.imageAssetUrl) != null && f.trim() ? k.imageAssetUrl : (u = n[p.id]) == null ? void 0 : u.imageAssetUrl
      };
    }
  }
  return r;
}
const mN = 200, hN = 4e3;
function Ch(e) {
  return Math.min(hN, Math.max(mN, Math.round(e)));
}
function bh({ width: e, height: t, onChange: n, children: r }) {
  const o = E.useRef(null), i = (l) => (c) => {
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
          width: Ch(c.startWidth + (l.clientX - c.startX)),
          height: c.startHeight
        });
        return;
      }
      n({
        width: c.startWidth,
        height: Ch(c.startHeight + (l.clientY - c.startY))
      });
    }
  }, a = (l) => {
    l.currentTarget.hasPointerCapture(l.pointerId) && l.currentTarget.releasePointerCapture(l.pointerId), o.current = null;
  };
  return /* @__PURE__ */ A("div", { className: "live-preview-resize-frame", style: { width: e, height: t }, children: [
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
const Ff = E.forwardRef(function({ template: t, zoneValues: n = {}, layoutMode: r = "stacked", onDimensionsChange: o }, i) {
  const s = rs(), a = E.useMemo(
    () => [...t.zones].sort((h, m) => h.sortOrder - m.sortOrder),
    [t.zones]
  ), l = E.useMemo(
    () => pN(t, n),
    [t, n]
  ), c = E.useMemo(
    () => td(t, l, s),
    [s, l, t]
  ), f = Hv(t), u = Pf(t), p = Uv(t), v = !!o, k = ({ width: h, height: m }) => {
    o == null || o({
      canvasWidth: h,
      canvasHeight: m,
      formatPreset: Qu(t.channelType, h, m) || t.formatPreset
    });
  };
  if (a.length === 0)
    return /* @__PURE__ */ d("p", { className: "template-admin-preview-empty", children: "Add zones on the left to see a live preview here." });
  const T = /* @__PURE__ */ d(
    "div",
    {
      ref: i,
      className: "live-preview-canvas social-builder-canvas social-builder-canvas-fill",
      style: {
        width: u,
        height: p,
        position: "relative",
        margin: v ? 0 : "0 auto"
      },
      children: a.map((h) => /* @__PURE__ */ d(
        _0,
        {
          zone: h,
          templateId: t.id,
          value: l[h.id] ?? l[h.zoneKey],
          onChange: () => {
          },
          layoutMode: "canvas",
          hideLogoPicker: !0,
          adminMode: !0
        },
        `${h.id}-${h.sortOrder}-${h.positionX}-${h.positionY}-${h.contentAlignment}-${h.offsetPx}`
      ))
    }
  );
  if (t.channelType === "Social" || t.channelType === "Print" || r === "canvas")
    return /* @__PURE__ */ A("div", { className: "live-preview-canvas-wrap", children: [
      /* @__PURE__ */ d("p", { className: "live-preview-dimensions-badge", "aria-label": "Template dimensions", children: f }),
      v ? /* @__PURE__ */ d(bh, { width: u, height: p, onChange: k, children: T }) : T
    ] });
  const _ = /* @__PURE__ */ d(
    "iframe",
    {
      title: "Live preview",
      srcDoc: c,
      className: `email-builder-preview-frame${v ? "" : " email-builder-preview-frame-fill"}`,
      style: {
        width: v ? u : void 0,
        height: v ? p : void 0,
        minHeight: v ? void 0 : p
      }
    },
    c
  );
  return /* @__PURE__ */ A("div", { className: "live-preview-email-wrap", children: [
    /* @__PURE__ */ d("p", { className: "live-preview-dimensions-badge", "aria-label": "Template dimensions", children: f }),
    v ? /* @__PURE__ */ d(bh, { width: u, height: p, onChange: k, children: _ }) : _
  ] });
}), gN = [
  "Change spotted. Autosave is putting on its running shoes…",
  "Unsaved edits detected. Warming up the Content Hub handshake…",
  "Hold tight — your zones are about to get persisted…",
  "Debouncing brilliance before we commit…"
], yN = [
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
function vN(e) {
  return e === "pending" ? gN : yN;
}
function ad(e, t = "active", n = 2600) {
  const r = vN(t), [o, i] = E.useState(0);
  return E.useEffect(() => {
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
function Ro({
  active: e,
  variant: t = "active",
  className: n
}) {
  const r = ad(e, t);
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
function R0({ marketingAsset: e, userHasOverridePermission: t, onEject: n }) {
  const [r, o] = E.useState(!1), [i, s] = E.useState(""), [a, l] = E.useState(!1);
  return !t || e.isRawHtmlOverrideMA ? null : /* @__PURE__ */ A(We, { children: [
    /* @__PURE__ */ d("button", { type: "button", className: "eject-button", onClick: () => o(!0), children: "Eject to raw HTML" }),
    r && /* @__PURE__ */ d("div", { className: "eject-modal-backdrop", onClick: () => o(!1), children: /* @__PURE__ */ A("div", { className: "eject-modal", onClick: (c) => c.stopPropagation(), children: [
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
      /* @__PURE__ */ A("div", { className: "eject-modal-actions", children: [
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
      /* @__PURE__ */ d(Ro, { active: a, className: "eject-saving" })
    ] }) })
  ] });
}
async function wN(e, t, n) {
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
function TN({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  renderEmailApiUrl: r = "/api/render-email-html",
  onSaved: o
}) {
  const i = rs(), [s, a] = E.useState(() => {
    const N = Ua(t.zoneLayoutJson), S = ja(e, t.zoneValues, N.values);
    return Bi(e, S);
  }), [l, c] = E.useState(() => {
    const N = Ua(t.zoneLayoutJson);
    return L0(e, N.layouts);
  }), [f, u] = E.useState(t.rawHtmlOverrideContent ?? ""), [p, v] = E.useState(!1), [k, T] = E.useState(null), _ = E.useMemo(
    () => x0(e, l),
    [e, l]
  ), h = E.useMemo(
    () => td(_, s, i),
    [i, _, s]
  ), m = E.useMemo(
    () => Ui(f),
    [f]
  ), g = (N, S) => {
    a((L) => ({ ...L, [N]: S }));
  }, b = (N, S) => {
    c((L) => {
      const U = { ...L[N], ...S };
      for (const R of Object.keys(S))
        S[R] === void 0 && delete U[R];
      return { ...L, [N]: U };
    });
  }, C = async () => {
    v(!0), T(null);
    try {
      const N = _.zones.map((z) => {
        const Y = s[z.id];
        return Y ? { ...Y, zoneKey: _r(z, _.zones) } : null;
      }).filter((z) => !!(z != null && z.zoneKey)), S = Object.fromEntries(
        N.map((z) => [z.zoneKey, z])
      ), L = N0(l, S);
      await re.updateMarketingAsset({
        ...t,
        zoneLayoutJson: L
      }), Z("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const U = await re.saveMarketingAssetZoneValues(
        t.id,
        N
      ), R = ja(e, U, S);
      a(Bi(e, R));
      let D = td(
        _,
        Object.fromEntries(R.map((z) => [z.zoneKey, z])),
        i
      );
      if (JC(r))
        Z("email HTML", "Generated client-side email HTML.");
      else
        try {
          D = await wN(r, e.id, t.id), Z("email HTML render", `Rendered via ${r}`);
        } catch (z) {
          ae(
            "email HTML render API",
            z instanceof Error ? z.message : String(z)
          ), ae("email HTML preview", "Using client-side inline-CSS renderer because the render API is unavailable.");
        }
      if ($f()) {
        const z = new Blob([D], { type: "text/html" });
        await re.uploadRenderedOutput(t.id, z, `${t.assetName}.html`);
      } else
        ae(
          "rendered output upload",
          "Skipped HTML upload — not required for save on this Content Hub instance."
        );
      o == null || o({
        ...t,
        zoneValues: R,
        zoneLayoutJson: L
      });
    } catch (N) {
      const S = N instanceof Error ? N.message : "Failed to save and render email HTML.";
      vn("email save/render", N), T(S);
    } finally {
      v(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ d(
    Ba,
    {
      structureTitle: "HTML source",
      previewTitle: "Rendered preview",
      structure: /* @__PURE__ */ A("div", { className: "email-builder-override-structure", children: [
        /* @__PURE__ */ A("div", { className: "override-banner", children: [
          "Raw HTML override active. Reason: ",
          t.overrideReasonMA
        ] }),
        /* @__PURE__ */ d(
          "textarea",
          {
            className: "raw-html-editor",
            value: f,
            onChange: (N) => u(N.target.value),
            onBlur: async (N) => {
              const S = N.target.value;
              await re.updateMarketingAsset({
                ...t,
                rawHtmlOverrideContent: S
              });
            }
          }
        )
      ] }),
      preview: /* @__PURE__ */ d(
        "iframe",
        {
          title: "Email preview",
          srcDoc: m,
          className: "email-builder-preview-frame email-builder-preview-frame-fill"
        },
        m
      )
    }
  ) : /* @__PURE__ */ d("div", { className: "email-builder", children: /* @__PURE__ */ d(
    Ba,
    {
      structureTitle: "Email structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ A("div", { className: "email-builder-structure", children: [
        /* @__PURE__ */ d(
          z0,
          {
            template: e,
            zoneLayouts: l,
            zoneValues: s,
            layoutMode: "stacked",
            onLayoutChange: b,
            onZoneValueChange: g
          }
        ),
        /* @__PURE__ */ A("div", { className: "email-builder-actions", children: [
          /* @__PURE__ */ d("button", { type: "button", className: "email-builder-save", onClick: C, disabled: p, children: "Save" }),
          /* @__PURE__ */ d(Ro, { active: p }),
          /* @__PURE__ */ d(
            R0,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (N) => {
                await re.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: N,
                  rawHtmlOverrideContent: h || "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        k && /* @__PURE__ */ d("div", { className: "marketing-builder-error email-builder-error", children: k })
      ] }),
      preview: /* @__PURE__ */ d(
        Ff,
        {
          template: _,
          zoneValues: s,
          layoutMode: "stacked"
        }
      )
    }
  ) });
}
function M0(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function SN(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function kN({
  layer: e,
  selected: t,
  onSelect: n,
  onMoveStart: r,
  onUnlock: o
}) {
  if (!e.visible)
    return null;
  const i = {
    left: e.x,
    top: e.y,
    width: e.width,
    height: e.height,
    transform: e.rotation ? `rotate(${e.rotation}deg)` : void 0
  };
  let s = null;
  switch (e.type) {
    case "frame":
      s = /* @__PURE__ */ d(
        "div",
        {
          className: "chd-layer-frame",
          style: { background: e.fill || "#ffffff" }
        }
      );
      break;
    case "rect":
      s = /* @__PURE__ */ d(
        "div",
        {
          className: "chd-layer-rect",
          style: { background: e.fill || "#888780" }
        }
      );
      break;
    case "text":
      s = /* @__PURE__ */ d(
        "div",
        {
          className: "chd-layer-text",
          style: {
            color: e.color || "#1a1a1a",
            fontSize: e.fontSize || 16
          },
          children: e.text || ""
        }
      );
      break;
    case "image":
      s = e.src ? /* @__PURE__ */ d(
        "img",
        {
          className: `chd-layer-image${e.objectFit === "contain" || /logo/i.test(e.name) ? " chd-layer-image--contain" : ""}`,
          src: e.src,
          alt: e.name,
          draggable: !1
        }
      ) : /* @__PURE__ */ d("div", { className: "chd-layer-image-placeholder", style: { background: e.fill || "#e8e6e1" }, children: e.name || "Image" });
      break;
  }
  return /* @__PURE__ */ A(
    "div",
    {
      className: `chd-layer${t ? " chd-layer--selected" : ""}${e.locked ? " chd-layer--locked" : ""}`,
      style: i,
      "data-layer-id": e.id,
      onPointerDown: (a) => {
        a.button === 0 && (a.stopPropagation(), n(a), e.locked || r(a));
      },
      children: [
        s,
        e.locked ? /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "chd-layer-lock",
            title: "Double-click to unlock",
            "aria-label": "Locked. Double-click to unlock",
            onPointerDown: (a) => {
              a.stopPropagation();
            },
            onDoubleClick: (a) => {
              a.preventDefault(), a.stopPropagation(), o == null || o();
            },
            children: /* @__PURE__ */ A("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: [
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
const ld = {
  primary: "#00a651",
  secondary: "#000000",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  text: "#000000",
  muted: "#6b716e"
};
function Is(e) {
  return typeof e == "boolean" ? e : void 0;
}
function Ds(e) {
  return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function EN(e) {
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
let AN = 1;
function oi() {
  return `layer-${Date.now().toString(36)}-${AN++}`;
}
function cd(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: oi(),
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
        id: oi(),
        type: e,
        name: "Rectangle",
        x: n,
        y: r,
        width: 160,
        height: 100,
        visible: !0,
        fill: ld.primary,
        locked: !1,
        allowTransform: !1,
        editableContent: !1
      };
    case "text":
      return {
        id: oi(),
        type: e,
        name: "Text",
        x: n,
        y: r,
        width: 220,
        height: 48,
        visible: !0,
        text: "Double-click to edit",
        fontSize: 20,
        color: "#1a1a1a",
        locked: !1,
        allowTransform: !1,
        editableContent: !0
      };
    case "image":
      return {
        id: oi(),
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
function Uf() {
  const e = cd("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = ld.secondary;
  const t = cd("image", { x: 120, y: 140 });
  return t.name = "Logo", t.width = 240, t.height = 80, t.src = "", t.fill = "#ffffff", t.locked = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: ld.background
    },
    layers: [e, t]
  };
}
function pt(e) {
  return JSON.parse(JSON.stringify(e));
}
function jf(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e;
  if (t.version !== 1 || !t.canvas || typeof t.canvas != "object" || !Array.isArray(t.layers))
    return null;
  const n = t.canvas, r = Number(n.width), o = Number(n.height);
  if (!Number.isFinite(r) || !Number.isFinite(o))
    return null;
  const i = [];
  for (const s of t.layers) {
    if (!s || typeof s != "object")
      continue;
    const a = s, l = a.type;
    if (l !== "frame" && l !== "rect" && l !== "text" && l !== "image")
      continue;
    const c = typeof a.id == "string" ? a.id : oi(), f = typeof a.name == "string" ? a.name : l, u = Number(a.x), p = Number(a.y), v = Number(a.width), k = Number(a.height);
    if (![u, p, v, k].every(Number.isFinite))
      continue;
    const T = {
      id: c,
      type: l,
      name: f,
      x: u,
      y: p,
      width: v,
      height: k,
      rotation: typeof a.rotation == "number" ? a.rotation : void 0,
      visible: a.visible !== !1,
      locked: !!a.locked,
      allowTransform: !!a.allowTransform,
      fill: typeof a.fill == "string" ? a.fill : void 0,
      text: typeof a.text == "string" ? a.text : void 0,
      fontSize: typeof a.fontSize == "number" ? a.fontSize : void 0,
      color: typeof a.color == "string" ? a.color : void 0,
      src: typeof a.src == "string" ? a.src : void 0,
      pinLeft: Is(a.pinLeft),
      pinRight: Is(a.pinRight),
      pinTop: Is(a.pinTop),
      pinBottom: Is(a.pinBottom),
      marginTop: Ds(a.marginTop),
      marginRight: Ds(a.marginRight),
      marginBottom: Ds(a.marginBottom),
      marginLeft: Ds(a.marginLeft),
      pageLayouts: EN(a.pageLayouts),
      objectFit: a.objectFit === "contain" || a.objectFit === "cover" ? a.objectFit : void 0
    };
    typeof a.editableContent == "boolean" ? T.editableContent = a.editableContent : T.editableContent = l === "text" || l === "image", i.push(T);
  }
  return {
    version: 1,
    canvas: {
      width: r,
      height: o,
      background: typeof n.background == "string" ? n.background : void 0,
      presetId: typeof n.presetId == "string" ? n.presetId : void 0
    },
    layers: i
  };
}
function O0(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function os(e) {
  return e.locked ? !1 : O0(e);
}
function Mo(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function Bf(e, t) {
  return t === "admin" ? !0 : e.visible ? os(e) || Mo(e) : !1;
}
function CN(e) {
  return { version: 1, templateId: e, overrides: {} };
}
function bN(e) {
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
  return { version: 1, templateId: t.templateId, overrides: n };
}
function NN(e, t) {
  const n = pt(e);
  return t != null && t.overrides ? {
    ...n,
    layers: n.layers.map((r) => {
      const o = t.overrides[r.id];
      if (!o)
        return r;
      const i = { ...r };
      return Mo(r) && (typeof o.x == "number" && (i.x = o.x), typeof o.y == "number" && (i.y = o.y), typeof o.width == "number" && (i.width = o.width), typeof o.height == "number" && (i.height = o.height)), os(r) && (typeof o.text == "string" && (i.text = o.text), typeof o.fill == "string" && (i.fill = o.fill), typeof o.color == "string" && (i.color = o.color), typeof o.src == "string" && (i.src = o.src)), i;
    })
  } : n;
}
function PN(e, t, n) {
  const r = {}, o = new Map(e.layers.map((i) => [i.id, i]));
  for (const i of t.layers) {
    const s = o.get(i.id);
    if (!s)
      continue;
    const a = {};
    Mo(s) && (i.x !== s.x && (a.x = i.x), i.y !== s.y && (a.y = i.y), i.width !== s.width && (a.width = i.width), i.height !== s.height && (a.height = i.height)), os(s) && ((i.text ?? "") !== (s.text ?? "") && (a.text = i.text), (i.fill ?? "") !== (s.fill ?? "") && (a.fill = i.fill), (i.color ?? "") !== (s.color ?? "") && (a.color = i.color), (i.src ?? "") !== (s.src ?? "") && (a.src = i.src)), Object.keys(a).length > 0 && (r[i.id] = a);
  }
  return { version: 1, templateId: n, overrides: r };
}
function xN(e, t) {
  const n = {};
  return Mo(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), os(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const cn = 24, Nh = 1, $0 = 0.25, I0 = 3, LN = 8;
function Hs(e, t) {
  return Math.abs(e - t) <= LN;
}
function Fs(e, t) {
  return e === !0 ? !0 : e === !1 ? !1 : t;
}
function Ul(e) {
  return typeof e.pinLeft == "boolean" || typeof e.pinRight == "boolean" || typeof e.pinTop == "boolean" || typeof e.pinBottom == "boolean";
}
function D0(e, t, n) {
  return Ul(e) ? {
    left: e.pinLeft === !0,
    right: e.pinRight === !0,
    top: e.pinTop === !0,
    bottom: e.pinBottom === !0
  } : {
    left: Fs(e.pinLeft, Hs(e.x, 0)),
    right: Fs(e.pinRight, Hs(e.x + e.width, t)),
    top: Fs(e.pinTop, Hs(e.y, 0)),
    bottom: Fs(e.pinBottom, Hs(e.y + e.height, n))
  };
}
function Us(e, t) {
  const n = e[t];
  return typeof n == "number" && Number.isFinite(n) ? Math.max(0, n) : 0;
}
function bo(e, t, n) {
  const r = D0(e, t, n), o = Us(e, "marginTop"), i = Us(e, "marginRight"), s = Us(e, "marginBottom"), a = Us(e, "marginLeft");
  let l = e.x, c = e.y, f = e.width, u = e.height;
  return r.left && r.right ? (l = a, f = Math.max(cn, t - a - i)) : r.left ? l = a : r.right && (l = t - i - f), r.top && r.bottom ? (c = o, u = Math.max(cn, n - o - s)) : r.top ? c = o : r.bottom && (c = n - s - u), { x: l, y: c, width: f, height: u };
}
function Ph(e, t, n, r, o, i) {
  const s = e, a = n - e - t;
  if (o && i) {
    const c = s, f = Math.max(cn, r - s - a);
    return { start: c, size: f };
  }
  if (o)
    return { start: s, size: t };
  if (i) {
    const c = t;
    return { start: Math.max(0, r - a - c), size: c };
  }
  const l = n === 0 ? 1 : r / n;
  return {
    start: e * l,
    size: Math.max(cn, t * l)
  };
}
function _N(e, t, n) {
  if (t.width === n.width && t.height === n.height)
    return e;
  if (Ul(e))
    return {
      ...e,
      ...bo(e, n.width, n.height)
    };
  const r = D0(e, t.width, t.height), o = Ph(e.x, e.width, t.width, n.width, r.left, r.right), i = Ph(e.y, e.height, t.height, n.height, r.top, r.bottom), s = r.left && r.right && r.top && r.bottom;
  return {
    ...e,
    x: o.start,
    y: i.start,
    width: o.size,
    height: i.size,
    objectFit: e.objectFit ?? (s && e.type === "image" ? "cover" : e.objectFit)
  };
}
function H0(e, t, n) {
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
function Ki(e) {
  const t = $v(e.width, e.height, e.presetId);
  return t !== "custom" ? t : `${Math.round(e.width)}x${Math.round(e.height)}`;
}
function js(e, t) {
  const n = e[t];
  return typeof n == "number" && Number.isFinite(n) ? Math.max(0, n) : 0;
}
function Ka(e) {
  return {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    pinLeft: e.pinLeft === !0,
    pinRight: e.pinRight === !0,
    pinTop: e.pinTop === !0,
    pinBottom: e.pinBottom === !0,
    marginTop: js(e, "marginTop"),
    marginRight: js(e, "marginRight"),
    marginBottom: js(e, "marginBottom"),
    marginLeft: js(e, "marginLeft")
  };
}
function zN(e) {
  return { ...e };
}
function RN(e, t) {
  const n = Ki(t);
  return {
    ...e,
    pageLayouts: {
      ...e.pageLayouts,
      [n]: Ka(e)
    }
  };
}
function MN(e, t) {
  return RN(e, t);
}
function ON(e, t, n, r, o) {
  const i = {
    pinTop: e.pinTop === !0,
    pinLeft: e.pinLeft === !0,
    pinRight: e.pinRight === !0,
    pinBottom: e.pinBottom === !0,
    [t]: n
  }, s = { ...e, ...i };
  return {
    ...i,
    ...bo(s, r, o)
  };
}
function $N(e, t, n, r, o) {
  const i = Math.max(0, Number.isFinite(n) ? n : 0), s = { ...e, [t]: i };
  return Ul(s) ? {
    [t]: i,
    ...bo(s, r, o)
  } : { [t]: i };
}
function F0(e, t, n) {
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
function IN(e, t) {
  const n = Ka(e), r = { ...e.pageLayouts ?? {} };
  r[Ki(t)] = n;
  const o = [
    ...ts.map((a) => ({
      key: a.id,
      width: a.width,
      height: a.height
    })),
    { key: Ki(t), width: t.width, height: t.height }
  ], i = /* @__PURE__ */ new Set();
  for (const a of o) {
    if (i.has(a.key))
      continue;
    i.add(a.key);
    const l = bo({ ...e, ...n }, a.width, a.height);
    r[a.key] = {
      ...n,
      ...l
    };
  }
  const s = bo({ ...e, ...n }, t.width, t.height);
  return {
    ...n,
    ...s,
    pageLayouts: r
  };
}
function DN(e, t, n, r) {
  const o = e.canvas;
  if (o.width === t && o.height === n && (!r || o.presetId === r))
    return e;
  const i = Ki(o), s = {
    ...o,
    width: t,
    height: n,
    presetId: r
  }, a = Ki(s);
  return {
    ...e,
    canvas: s,
    layers: e.layers.map((l) => {
      const c = {
        ...l.pageLayouts,
        [i]: Ka(l)
      }, f = c[a];
      if (f)
        return {
          ...l,
          ...zN(f),
          pageLayouts: c
        };
      const u = Ul(l) ? { ...l, ...bo(l, t, n) } : _N(l, o, { width: t, height: n });
      return c[a] = Ka(u), { ...u, pageLayouts: c };
    })
  };
}
const HN = 50, U0 = E.createContext(null);
function FN(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function xh(e, t, n) {
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
function UN({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: o,
  onDocumentChange: i,
  onInstanceChange: s
}) {
  const a = E.useRef(null);
  a.current || (a.current = n ? pt(n) : Uf());
  const l = E.useRef(
    pt(r ?? n ?? a.current)
  ), c = E.useRef(t);
  c.current = t;
  const [f, u] = E.useState(() => pt(a.current)), [p, v] = E.useState([]), [k, T] = E.useState({
    zoom: Nh,
    panX: 40,
    panY: 40
  }), _ = E.useRef([pt(a.current)]), h = E.useRef(0), [m, g] = E.useState(0), b = E.useRef(p);
  b.current = p;
  const C = E.useRef(f);
  C.current = f;
  const N = E.useRef(i);
  N.current = i;
  const S = E.useRef(s);
  S.current = s;
  const L = E.useRef(o);
  L.current = o;
  const U = E.useCallback(() => g((W) => W + 1), []), R = E.useCallback((W) => {
    var $, O;
    if (($ = N.current) == null || $.call(N, pt(W)), c.current === "endUser") {
      const w = L.current ?? "";
      (O = S.current) == null || O.call(
        S,
        PN(l.current, W, w)
      );
    }
  }, []), D = E.useCallback(
    (W) => {
      const $ = _.current.slice(0, h.current + 1);
      for ($.push(pt(W)); $.length > HN; )
        $.shift();
      _.current = $, h.current = $.length - 1, U();
    },
    [U]
  ), z = E.useCallback(
    (W, $) => {
      u(W), C.current = W, $ && D(W), R(W);
    },
    [R, D]
  ), Y = E.useCallback(
    (W) => {
      const $ = c.current === "endUser";
      switch (W.type) {
        case "ADD_LAYER": {
          if ($)
            return;
          const O = cd(W.layerType, W.at);
          u((w) => {
            const x = { ...w, layers: [...w.layers, O] };
            return D(x), R(x), x;
          }), v([O.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const O = W.pushHistory !== !1;
          u((w) => {
            const x = {
              ...w,
              layers: w.layers.map((j) => {
                if (j.id !== W.id)
                  return j;
                const Q = $ ? xN(j, W.patch) : W.patch;
                if (Object.keys(Q).length === 0)
                  return j;
                const V = { ...j, ...Q };
                return typeof V.width == "number" && (V.width = Math.max(cn, V.width)), typeof V.height == "number" && (V.height = Math.max(cn, V.height)), $ ? V : MN(V, w.canvas);
              })
            };
            return O && D(x), R(x), x;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if ($)
            return;
          const O = new Set(W.ids ?? b.current);
          if (O.size === 0)
            return;
          u((w) => {
            const x = {
              ...w,
              layers: w.layers.filter((j) => !O.has(j.id))
            };
            return D(x), R(x), x;
          }), v((w) => w.filter((x) => !O.has(x)));
          break;
        }
        case "SELECT": {
          v((O) => {
            const w = W.ids.filter((x) => {
              const j = C.current.layers.find((Q) => Q.id === x);
              return j ? Bf(j, c.current) : !1;
            });
            if (W.additive) {
              const x = new Set(O);
              for (const j of w)
                x.has(j) ? x.delete(j) : x.add(j);
              return Array.from(x);
            }
            return w;
          });
          break;
        }
        case "UNSELECT_ALL": {
          v([]);
          break;
        }
        case "REORDER": {
          if ($)
            return;
          u((O) => {
            const w = {
              ...O,
              layers: FN(O.layers, W.fromIndex, W.toIndex)
            };
            return D(w), R(w), w;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if ($)
            return;
          u((O) => {
            const w = {
              ...O,
              layers: O.layers.map(
                (x) => x.id === W.id ? { ...x, visible: W.visible } : x
              )
            };
            return D(w), R(w), w;
          });
          break;
        }
        case "BRING_FORWARD": {
          if ($)
            return;
          const O = b.current;
          u((w) => {
            const x = { ...w, layers: xh(w.layers, O, "forward") };
            return D(x), R(x), x;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if ($)
            return;
          const O = b.current;
          u((w) => {
            const x = { ...w, layers: xh(w.layers, O, "backward") };
            return D(x), R(x), x;
          });
          break;
        }
        case "ZOOM_SET": {
          T((O) => ({
            ...O,
            zoom: M0(W.zoom, $0, I0)
          }));
          break;
        }
        case "ZOOM_RESET": {
          T({ zoom: Nh, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          T((O) => ({
            ...O,
            panX: W.panX,
            panY: W.panY
          }));
          break;
        }
        case "UNDO": {
          if (h.current <= 0)
            return;
          h.current -= 1;
          const O = pt(_.current[h.current]);
          u(O), C.current = O, v([]), U(), R(O);
          break;
        }
        case "REDO": {
          if (h.current >= _.current.length - 1)
            return;
          h.current += 1;
          const O = pt(_.current[h.current]);
          u(O), C.current = O, v([]), U(), R(O);
          break;
        }
        case "LOAD_DOCUMENT": {
          z(pt(W.document), !0), v([]);
          break;
        }
        case "SET_CANVAS_SIZE": {
          if ($)
            return;
          u((O) => {
            const w = DN(O, W.width, W.height, W.presetId);
            return w === O ? O : (D(w), R(w), w);
          });
          break;
        }
        case "PUSH_LAYER_TO_ALL_PAGES": {
          if ($)
            return;
          u((O) => {
            const w = {
              ...O,
              layers: O.layers.map((x) => x.id !== W.id ? x : { ...x, ...IN(x, O.canvas) })
            };
            return D(w), R(w), w;
          });
          break;
        }
        case "COMMIT": {
          u((O) => (D(O), R(O), O));
          break;
        }
      }
    },
    [z, U, R, D]
  ), Re = E.useCallback(() => pt(f), [f]), qe = E.useCallback(
    (W) => {
      if (c.current === "endUser")
        return !1;
      try {
        const $ = jf(JSON.parse(W));
        return $ ? (l.current = pt($), z($, !0), v([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [z]
  );
  E.useEffect(() => {
    t === "admin" && n && (l.current = pt(n)), t === "endUser" && r && (l.current = pt(r));
  }, [n, r, t]);
  const Ee = E.useMemo(
    () => ({
      mode: t,
      templateId: o,
      document: f,
      selection: p,
      viewport: k,
      canUndo: h.current > 0,
      canRedo: h.current < _.current.length - 1,
      dispatch: Y,
      exportDocument: Re,
      importDocumentJson: qe
    }),
    [t, o, f, p, k, Y, Re, qe, m]
  );
  return /* @__PURE__ */ d(U0.Provider, { value: Ee, children: e });
}
function zr() {
  const e = E.useContext(U0);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function Kf() {
  return zr().mode;
}
function jl() {
  return zr().document;
}
function j0() {
  return zr().document.layers;
}
function Bl() {
  return zr().selection;
}
function B0() {
  return zr().viewport;
}
function Kl() {
  return zr().dispatch;
}
function jN() {
  const e = zr();
  return {
    mode: e.mode,
    canUndo: e.canUndo,
    canRedo: e.canRedo,
    exportDocument: e.exportDocument,
    importDocumentJson: e.importDocumentJson,
    dispatch: e.dispatch
  };
}
const BN = ["nw", "ne", "sw", "se"];
function KN() {
  const e = jl(), t = Bl(), n = B0(), r = Kl(), o = Kf(), [i, s] = E.useState(null), [a, l] = E.useState(!1), c = E.useRef(n);
  c.current = n;
  const f = E.useRef(o);
  f.current = o, E.useEffect(() => {
    const C = (S) => {
      if (S.code === "Space" && !(S.target instanceof HTMLInputElement) && !(S.target instanceof HTMLTextAreaElement) && (S.preventDefault(), l(!0)), f.current === "admin" && (S.key === "Delete" || S.key === "Backspace") && t.length > 0) {
        const L = S.target.tagName;
        if (L === "INPUT" || L === "TEXTAREA")
          return;
        S.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (S.ctrlKey || S.metaKey) && S.key.toLowerCase() === "z" && !S.shiftKey && (S.preventDefault(), r({ type: "UNDO" })), (S.ctrlKey || S.metaKey) && (S.key.toLowerCase() === "y" || S.key.toLowerCase() === "z" && S.shiftKey) && (S.preventDefault(), r({ type: "REDO" }));
    }, N = (S) => {
      S.code === "Space" && l(!1);
    };
    return window.addEventListener("keydown", C), window.addEventListener("keyup", N), () => {
      window.removeEventListener("keydown", C), window.removeEventListener("keyup", N);
    };
  }, [r, t.length]), E.useEffect(() => {
    if (!i)
      return;
    const C = (S) => {
      const L = c.current.zoom;
      if (i.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: i.origPanX + (S.clientX - i.startX),
          panY: i.origPanY + (S.clientY - i.startY)
        });
        return;
      }
      const { dx: U, dy: R } = SN(
        S.clientX - i.startX,
        S.clientY - i.startY,
        L
      );
      if (i.kind === "move") {
        for (const qe of i.ids) {
          const Ee = i.origins[qe];
          Ee && r({
            type: "UPDATE_LAYER",
            id: qe,
            patch: { x: Ee.x + U, y: Ee.y + R },
            pushHistory: !1
          });
        }
        return;
      }
      let D = i.origX, z = i.origY, Y = i.origW, Re = i.origH;
      i.handle.includes("e") && (Y = Math.max(cn, i.origW + U)), i.handle.includes("s") && (Re = Math.max(cn, i.origH + R)), i.handle.includes("w") && (Y = Math.max(cn, i.origW - U), D = i.origX + (i.origW - Y)), i.handle.includes("n") && (Re = Math.max(cn, i.origH - R), z = i.origY + (i.origH - Re)), r({
        type: "UPDATE_LAYER",
        id: i.id,
        patch: { x: D, y: z, width: Y, height: Re },
        pushHistory: !1
      });
    }, N = () => {
      (i.kind === "move" || i.kind === "resize") && r({ type: "COMMIT" }), s(null);
    };
    return window.addEventListener("pointermove", C), window.addEventListener("pointerup", N), () => {
      window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", N);
    };
  }, [i, r]);
  const u = (C) => {
    C.preventDefault();
    const N = M0(n.zoom * (C.deltaY < 0 ? 1.08 : 0.92), $0, I0);
    r({ type: "ZOOM_SET", zoom: N });
  }, p = (C) => {
    s({
      kind: "pan",
      startX: C.clientX,
      startY: C.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, v = (C) => {
    if (C.button === 1 || C.button === 0 && a) {
      C.preventDefault(), p(C);
      return;
    }
    C.button === 0 && r({ type: "UNSELECT_ALL" });
  }, k = (C, N) => {
    Bf(C, o) && r({
      type: "SELECT",
      ids: [C.id],
      additive: N.shiftKey
    });
  }, T = (C) => o === "admin" ? !C.locked : Mo(C), _ = (C, N) => {
    if (!T(C) || a)
      return;
    const S = t.includes(C.id) ? t : [C.id];
    t.includes(C.id) || r({ type: "SELECT", ids: [C.id] });
    const L = {};
    for (const U of S) {
      const R = e.layers.find((D) => D.id === U);
      R && T(R) && (L[U] = { x: R.x, y: R.y });
    }
    Object.keys(L).length !== 0 && s({
      kind: "move",
      ids: Object.keys(L),
      startX: N.clientX,
      startY: N.clientY,
      origins: L
    });
  }, h = (C, N, S) => {
    S.stopPropagation(), T(C) && (r({ type: "SELECT", ids: [C.id] }), s({
      kind: "resize",
      id: C.id,
      startX: S.clientX,
      startY: S.clientY,
      origX: C.x,
      origY: C.y,
      origW: C.width,
      origH: C.height,
      handle: N
    }));
  }, m = e.layers.filter((C) => t.includes(C.id) && C.visible), g = m.length === 1 ? m[0] : null, b = g ? T(g) : !1;
  return /* @__PURE__ */ A(
    "div",
    {
      className: `chd-viewport${a ? " chd-viewport--panning" : ""}`,
      onWheel: u,
      onPointerDown: v,
      children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: "chd-world",
            style: {
              transform: `translate(${n.panX}px, ${n.panY}px) scale(${n.zoom})`
            },
            children: /* @__PURE__ */ A(
              "div",
              {
                className: "chd-artboard",
                "data-chd-artboard": "true",
                style: {
                  width: e.canvas.width,
                  height: e.canvas.height,
                  background: e.canvas.background || "#eceae4"
                },
                onPointerDown: (C) => {
                  C.button !== 0 || a || (C.stopPropagation(), r({ type: "UNSELECT_ALL" }));
                },
                children: [
                  /* @__PURE__ */ d("div", { className: "chd-artboard-page" }),
                  e.layers.map((C) => /* @__PURE__ */ d(
                    kN,
                    {
                      layer: C,
                      selected: t.includes(C.id),
                      onSelect: (N) => k(C, N),
                      onMoveStart: (N) => _(C, N),
                      onUnlock: o === "admin" ? () => r({ type: "UPDATE_LAYER", id: C.id, patch: { locked: !1 } }) : void 0
                    },
                    C.id
                  )),
                  b && g ? /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: g.x,
                        top: g.y,
                        width: g.width,
                        height: g.height
                      },
                      children: BN.map((C) => /* @__PURE__ */ d(
                        "div",
                        {
                          className: `chd-handle chd-handle--${C}`,
                          onPointerDown: (N) => h(g, C, N)
                        },
                        C
                      ))
                    }
                  ) : g ? /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: g.x,
                        top: g.y,
                        width: g.width,
                        height: g.height
                      }
                    }
                  ) : null,
                  m.length > 1 ? m.map((C) => /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: C.x,
                        top: C.y,
                        width: C.width,
                        height: C.height
                      }
                    },
                    `sel-${C.id}`
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
function VN() {
  const e = j0(), t = Bl(), n = Kl(), r = Kf(), o = r === "admin", [i, s] = E.useState(null), [a, l] = E.useState(null), c = [...e].map((u, p) => ({ layer: u, index: p })).reverse().filter(({ layer: u }) => o || Bf(u, r)), f = (u, p) => {
    if (u === p)
      return;
    const v = e.findIndex((T) => T.id === u), k = e.findIndex((T) => T.id === p);
    v < 0 || k < 0 || n({ type: "REORDER", fromIndex: v, toIndex: k });
  };
  return /* @__PURE__ */ A(
    "aside",
    {
      className: `chd-panel chd-layers-panel${o ? " chd-layers-panel--admin" : ""}`,
      "aria-label": "Layers",
      children: [
        /* @__PURE__ */ d("div", { className: "chd-panel-header", children: o ? "Layers" : "Editable layers" }),
        /* @__PURE__ */ d("ul", { className: "chd-layer-list", children: c.length === 0 ? /* @__PURE__ */ d("li", { className: "chd-panel-empty", children: "No editable layers" }) : c.map(({ layer: u, index: p }) => {
          const v = t.includes(u.id);
          return /* @__PURE__ */ A(
            "li",
            {
              draggable: o,
              className: `chd-layer-list-item${v ? " chd-layer-list-item--selected" : ""}${i === u.id ? " chd-layer-list-item--dragging" : ""}${a === u.id ? " chd-layer-list-item--drag-over" : ""}`,
              onDragStart: (k) => {
                if (o) {
                  if (k.target.closest("button")) {
                    k.preventDefault();
                    return;
                  }
                  k.dataTransfer.effectAllowed = "move", k.dataTransfer.setData("text/plain", u.id), s(u.id);
                }
              },
              onDragOver: (k) => {
                o && (k.preventDefault(), k.dataTransfer.dropEffect = "move", a !== u.id && l(u.id));
              },
              onDragLeave: () => {
                l((k) => k === u.id ? null : k);
              },
              onDrop: (k) => {
                k.preventDefault();
                const T = k.dataTransfer.getData("text/plain");
                T && f(T, u.id), s(null), l(null);
              },
              onDragEnd: () => {
                s(null), l(null);
              },
              children: [
                o ? /* @__PURE__ */ d("span", { className: "chd-layer-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }) : null,
                /* @__PURE__ */ A(
                  "button",
                  {
                    type: "button",
                    className: "chd-layer-list-select",
                    onClick: (k) => n({
                      type: "SELECT",
                      ids: [u.id],
                      additive: k.shiftKey
                    }),
                    children: [
                      /* @__PURE__ */ d("span", { className: "chd-layer-list-type", children: u.type }),
                      /* @__PURE__ */ d("span", { className: "chd-layer-list-name", children: u.name })
                    ]
                  }
                ),
                o ? /* @__PURE__ */ A(We, { children: [
                  /* @__PURE__ */ d(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: u.visible ? "Hide" : "Show",
                      onClick: () => n({
                        type: "SET_VISIBILITY",
                        id: u.id,
                        visible: !u.visible
                      }),
                      children: u.visible ? "◉" : "○"
                    }
                  ),
                  /* @__PURE__ */ d(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: "Move up (forward)",
                      disabled: p >= e.length - 1,
                      onClick: () => n({ type: "REORDER", fromIndex: p, toIndex: p + 1 }),
                      children: "↑"
                    }
                  ),
                  /* @__PURE__ */ d(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: "Move down (back)",
                      disabled: p <= 0,
                      onClick: () => n({ type: "REORDER", fromIndex: p, toIndex: p - 1 }),
                      children: "↓"
                    }
                  )
                ] }) : null
              ]
            },
            u.id
          );
        }) })
      ]
    }
  );
}
function Ur({
  label: e,
  value: t,
  onChange: n,
  disabled: r
}) {
  return /* @__PURE__ */ A("label", { className: "chd-field", children: [
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
function ZN() {
  const e = j0(), t = Bl(), n = Kl(), r = Kf(), o = jl(), i = r === "admin", s = e.filter((u) => t.includes(u.id)), a = s.length === 1 ? s[0] : null, l = (u) => {
    a && n({ type: "UPDATE_LAYER", id: a.id, patch: u });
  }, c = a ? i ? !a.locked : Mo(a) : !1, f = a ? i ? !a.locked : os(a) : !1;
  return /* @__PURE__ */ A("aside", { className: "chd-panel chd-properties-panel", "aria-label": "Properties", children: [
    /* @__PURE__ */ d("div", { className: "chd-panel-header", children: "Properties" }),
    a ? /* @__PURE__ */ A("div", { className: "chd-properties-body", children: [
      i ? /* @__PURE__ */ A("label", { className: "chd-field", children: [
        /* @__PURE__ */ d("span", { children: "Name" }),
        /* @__PURE__ */ d(
          "input",
          {
            type: "text",
            value: a.name,
            onChange: (u) => l({ name: u.target.value })
          }
        )
      ] }) : /* @__PURE__ */ A("div", { className: "chd-field", children: [
        /* @__PURE__ */ d("span", { children: "Layer" }),
        /* @__PURE__ */ d("strong", { children: a.name })
      ] }),
      /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ d(
          Ur,
          {
            label: "X",
            value: Math.round(a.x),
            disabled: !c,
            onChange: (u) => l({ x: u })
          }
        ),
        /* @__PURE__ */ d(
          Ur,
          {
            label: "Y",
            value: Math.round(a.y),
            disabled: !c,
            onChange: (u) => l({ y: u })
          }
        )
      ] }),
      /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ d(
          Ur,
          {
            label: "W",
            value: Math.round(a.width),
            disabled: !c,
            onChange: (u) => l({ width: u })
          }
        ),
        /* @__PURE__ */ d(
          Ur,
          {
            label: "H",
            value: Math.round(a.height),
            disabled: !c,
            onChange: (u) => l({ height: u })
          }
        )
      ] }),
      f && (a.type === "frame" || a.type === "rect" || a.type === "image") && /* @__PURE__ */ A("label", { className: "chd-field", children: [
        /* @__PURE__ */ d("span", { children: "Fill" }),
        /* @__PURE__ */ d(
          "input",
          {
            type: "color",
            value: a.fill && /^#/.test(a.fill) ? a.fill : "#888780",
            onChange: (u) => l({ fill: u.target.value })
          }
        )
      ] }),
      f && a.type === "text" && /* @__PURE__ */ A(We, { children: [
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Text" }),
          /* @__PURE__ */ d(
            "textarea",
            {
              rows: 3,
              value: a.text || "",
              onChange: (u) => l({ text: u.target.value })
            }
          )
        ] }),
        i ? /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
          /* @__PURE__ */ d(
            Ur,
            {
              label: "Size",
              value: a.fontSize ?? 16,
              onChange: (u) => l({ fontSize: u })
            }
          ),
          /* @__PURE__ */ A("label", { className: "chd-field", children: [
            /* @__PURE__ */ d("span", { children: "Color" }),
            /* @__PURE__ */ d(
              "input",
              {
                type: "color",
                value: a.color && /^#/.test(a.color) ? a.color : "#1a1a1a",
                onChange: (u) => l({ color: u.target.value })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Color" }),
          /* @__PURE__ */ d(
            "input",
            {
              type: "color",
              value: a.color && /^#/.test(a.color) ? a.color : "#1a1a1a",
              onChange: (u) => l({ color: u.target.value })
            }
          )
        ] })
      ] }),
      f && a.type === "image" && /* @__PURE__ */ A(We, { children: [
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Image URL" }),
          /* @__PURE__ */ d(
            "input",
            {
              type: "url",
              placeholder: "https://…",
              value: a.src || "",
              onChange: (u) => l({ src: u.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Fit" }),
          /* @__PURE__ */ A(
            "select",
            {
              value: a.objectFit || "cover",
              onChange: (u) => l({ objectFit: u.target.value }),
              children: [
                /* @__PURE__ */ d("option", { value: "cover", children: "Cover — fill page, keep photo ratio" }),
                /* @__PURE__ */ d("option", { value: "contain", children: "Contain — whole photo, may letterbox" })
              ]
            }
          )
        ] })
      ] }),
      i ? /* @__PURE__ */ A(We, { children: [
        /* @__PURE__ */ A("div", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Pin to page" }),
          /* @__PURE__ */ d("div", { className: "chd-pin-grid", children: ["pinTop", "pinLeft", "pinRight", "pinBottom"].map((u) => {
            const p = {
              pinTop: "Top",
              pinLeft: "Left",
              pinRight: "Right",
              pinBottom: "Bottom"
            };
            return /* @__PURE__ */ A("label", { className: "chd-field-checkbox", children: [
              /* @__PURE__ */ d(
                "input",
                {
                  type: "checkbox",
                  checked: a[u] === !0,
                  onChange: (v) => l(
                    ON(
                      a,
                      u,
                      v.target.checked,
                      o.canvas.width,
                      o.canvas.height
                    )
                  )
                }
              ),
              /* @__PURE__ */ d("span", { children: p[u] })
            ] }, u);
          }) }),
          /* @__PURE__ */ d("p", { className: "chd-field-hint", children: "Pinning a side moves this block to that edge using the margin. Pin left and right together to stretch width; pin top and bottom to stretch height." })
        ] }),
        /* @__PURE__ */ A("div", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Margins" }),
          /* @__PURE__ */ d("div", { className: "chd-pin-grid", children: [
            ["marginTop", "Top"],
            ["marginLeft", "Left"],
            ["marginRight", "Right"],
            ["marginBottom", "Bottom"]
          ].map(([u, p]) => /* @__PURE__ */ d(
            Ur,
            {
              label: p,
              value: Math.round(typeof a[u] == "number" ? a[u] : 0),
              onChange: (v) => l(
                $N(
                  a,
                  u,
                  v,
                  o.canvas.width,
                  o.canvas.height
                )
              )
            },
            u
          )) }),
          /* @__PURE__ */ d("p", { className: "chd-field-hint", children: "Margins are stored per page size. Change page, then adjust; use Push to all pages to copy this layout to every preset." })
        ] }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => l(F0(a, o.canvas.width, o.canvas.height)),
            children: "Pin in place"
          }
        ),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => n({ type: "PUSH_LAYER_TO_ALL_PAGES", id: a.id }),
            children: "Push to all pages"
          }
        ),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => l(H0(a, o.canvas.width, o.canvas.height)),
            children: "Fill page"
          }
        ),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "checkbox",
              checked: !!a.locked,
              onChange: (u) => l({ locked: u.target.checked })
            }
          ),
          /* @__PURE__ */ d("span", { children: "Locked" })
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "checkbox",
              checked: !!a.allowTransform,
              onChange: (u) => l({ allowTransform: u.target.checked })
            }
          ),
          /* @__PURE__ */ d("span", { children: "Allow transform (end user)" })
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "checkbox",
              checked: O0(a),
              onChange: (u) => l({ editableContent: u.target.checked })
            }
          ),
          /* @__PURE__ */ d("span", { children: "Editable content (end user)" })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ d("p", { className: "chd-panel-empty", children: s.length > 1 ? `${s.length} layers selected` : "Select a layer" })
  ] });
}
const WN = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js", YN = "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
function K0(e, t) {
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
let Wc = null, Yc = null;
function GN() {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (Wc || (Wc = K0(WN, "chd-html2canvas").then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), Wc);
}
function XN() {
  var e;
  return (e = window.jspdf) != null && e.jsPDF ? Promise.resolve(window.jspdf.jsPDF) : (Yc || (Yc = K0(YN, "chd-jspdf").then(() => {
    var n;
    const t = (n = window.jspdf) == null ? void 0 : n.jsPDF;
    if (!t)
      throw new Error("jsPDF did not register on window");
    return t;
  })), Yc);
}
const Lh = 96;
function JN(e, t) {
  const n = URL.createObjectURL(e), r = window.document.createElement("a");
  r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
function QN(e) {
  const t = e.closest(".chd-root"), n = t == null ? void 0 : t.querySelector("[data-chd-artboard]");
  if (!n)
    throw new Error("Could not find the designer page to export.");
  return n;
}
async function qN(e) {
  const t = QN(e), n = await GN();
  t.classList.add("chd-artboard--capturing");
  try {
    const r = Math.max(1, Math.round(t.offsetWidth)), o = Math.max(1, Math.round(t.offsetHeight));
    return await n(t, {
      useCORS: !0,
      backgroundColor: null,
      width: r,
      height: o,
      windowWidth: r,
      windowHeight: o,
      scale: 2,
      logging: !1
    });
  } finally {
    t.classList.remove("chd-artboard--capturing");
  }
}
async function eP(e, t) {
  const n = await new Promise((r, o) => {
    e.toBlob((i) => {
      i ? r(i) : o(new Error("Could not create PNG."));
    }, "image/png");
  });
  JN(n, t);
}
async function tP(e, t, n, r) {
  const o = await XN(), i = n * 25.4 / Lh, s = r * 25.4 / Lh, a = new o({
    orientation: i >= s ? "landscape" : "portrait",
    unit: "mm",
    format: [i, s],
    compress: !0
  });
  a.addImage(e.toDataURL("image/png"), "PNG", 0, 0, i, s), a.save(t);
}
async function nP(e, t, n) {
  const r = await qN(e);
  if (t === "png") {
    await eP(r, "design.png");
    return;
  }
  await tP(r, "design.pdf", n.width, n.height);
}
const rP = [
  { format: "pdf", label: "PDF", hint: "Print-ready page" },
  { format: "png", label: "PNG", hint: "Image of the page" }
];
function oP() {
  const e = jl(), t = E.useRef(null), [n, r] = E.useState(!1), [o, i] = E.useState(!1), [s, a] = E.useState(null);
  E.useEffect(() => {
    if (!n)
      return;
    const c = (f) => {
      t.current && !t.current.contains(f.target) && r(!1);
    };
    return window.addEventListener("pointerdown", c), () => window.removeEventListener("pointerdown", c);
  }, [n]);
  const l = async (c) => {
    const f = t.current;
    if (!(!f || o)) {
      r(!1), i(!0), a(null);
      try {
        await nP(f, c, {
          width: e.canvas.width,
          height: e.canvas.height
        });
      } catch (u) {
        a(u instanceof Error ? u.message : "Generate failed.");
      } finally {
        i(!1);
      }
    }
  };
  return /* @__PURE__ */ A("div", { className: "chd-generate", ref: t, children: [
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
    n ? /* @__PURE__ */ d("div", { className: "chd-generate-menu", role: "menu", children: rP.map((c) => /* @__PURE__ */ A(
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
const iP = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function sP() {
  const e = Kl(), t = Bl(), n = B0(), r = jl(), { mode: o, canUndo: i, canRedo: s, exportDocument: a, importDocumentJson: l } = jN(), c = E.useRef(null), f = o === "admin", u = $v(
    r.canvas.width,
    r.canvas.height,
    r.canvas.presetId
  ), p = () => {
    const h = a(), m = new Blob([JSON.stringify(h, null, 2)], { type: "application/json" }), g = URL.createObjectURL(m), b = window.document.createElement("a");
    b.href = g, b.download = "chdesigner-document.json", b.click(), URL.revokeObjectURL(g);
  }, v = async (h) => {
    if (!h)
      return;
    const m = await h.text();
    l(m) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  }, k = (h) => {
    const m = Ju(h);
    m && e({
      type: "SET_CANVAS_SIZE",
      width: m.width,
      height: m.height,
      presetId: m.id
    });
  }, T = () => {
    const h = r.layers.filter((m) => t.includes(m.id));
    for (const m of h)
      e({
        type: "UPDATE_LAYER",
        id: m.id,
        patch: F0(m, r.canvas.width, r.canvas.height)
      });
  }, _ = () => {
    const h = r.layers.filter((m) => t.includes(m.id));
    for (const m of h)
      e({
        type: "UPDATE_LAYER",
        id: m.id,
        patch: H0(m, r.canvas.width, r.canvas.height)
      });
  };
  return /* @__PURE__ */ A("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ A("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ d("span", { className: "chd-toolbar-logo-wrap", children: "Logo" }),
      /* @__PURE__ */ d("span", { className: "chd-toolbar-mode", children: f ? "Admin" : "Edit" })
    ] }),
    f ? /* @__PURE__ */ d("div", { className: "chd-toolbar-group", children: iP.map((h) => /* @__PURE__ */ A(
      "button",
      {
        type: "button",
        className: "chd-btn",
        onClick: () => e({ type: "ADD_LAYER", layerType: h.type }),
        children: [
          "+ ",
          h.label
        ]
      },
      h.type
    )) }) : null,
    f ? /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ A("label", { className: "chd-toolbar-field", children: [
        /* @__PURE__ */ d("span", { children: "Page" }),
        /* @__PURE__ */ A(
          "select",
          {
            className: "chd-toolbar-select",
            value: u,
            onChange: (h) => k(h.target.value),
            children: [
              u === "custom" ? /* @__PURE__ */ d("option", { value: "custom", children: "Custom" }) : null,
              gA.map((h) => /* @__PURE__ */ d("optgroup", { label: h.label, children: ts.filter((m) => m.group === h.id).map((m) => /* @__PURE__ */ d("option", { value: m.id, children: m.label }, m.id)) }, h.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ A("span", { className: "chd-toolbar-size", children: [
        Math.round(r.canvas.width),
        " × ",
        Math.round(r.canvas.height)
      ] }),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: T,
          children: "Pin to page"
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: _,
          children: "Fill page"
        }
      )
    ] }) : null,
    f ? /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
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
    /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
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
    /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ d(oP, {}),
      /* @__PURE__ */ A("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ZOOM_RESET" }), children: [
        Math.round(n.zoom * 100),
        "%"
      ] }),
      f ? /* @__PURE__ */ A(We, { children: [
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: p, children: "Export JSON" }),
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => {
          var h;
          return (h = c.current) == null ? void 0 : h.click();
        }, children: "Import" }),
        /* @__PURE__ */ d(
          "input",
          {
            ref: c,
            type: "file",
            accept: "application/json,.json",
            className: "chd-file-input",
            onChange: (h) => {
              var m;
              v(((m = h.target.files) == null ? void 0 : m[0]) ?? null), h.target.value = "";
            }
          }
        )
      ] }) : null
    ] })
  ] });
}
function V0({
  mode: e = "admin",
  document: t,
  templateDocument: n,
  templateId: r,
  onDocumentChange: o,
  onInstanceChange: i,
  statusSlot: s,
  statusClassName: a
}) {
  return /* @__PURE__ */ d(UN, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    onDocumentChange: o,
    onInstanceChange: i
  }, children: /* @__PURE__ */ A("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ d(sP, {}),
    s ? /* @__PURE__ */ d("div", { className: `chd-status-bar${a ? ` ${a}` : ""}`, children: s }) : null,
    /* @__PURE__ */ A("div", { className: "chd-main", children: [
      /* @__PURE__ */ d(VN, {}),
      /* @__PURE__ */ d(KN, {}),
      /* @__PURE__ */ d(ZN, {})
    ] })
  ] }) });
}
function aP(e) {
  var t;
  if (!((t = e.designerDocumentJson) != null && t.trim()))
    return null;
  try {
    return jf(JSON.parse(e.designerDocumentJson));
  } catch {
    return null;
  }
}
function lP(e, t) {
  var n;
  if ((n = t.designerInstanceJson) != null && n.trim())
    try {
      const r = bN(JSON.parse(t.designerInstanceJson));
      if (r)
        return r;
    } catch {
    }
  return CN(e.id);
}
function _h({
  template: e,
  marketingAsset: t,
  designerInstanceProperty: n,
  onSaved: r
}) {
  const o = E.useMemo(() => aP(e), [e]), [i, s] = E.useState(
    () => lP(e, t)
  ), a = E.useRef(i);
  a.current = i;
  const [l, c] = E.useState("idle"), [f, u] = E.useState(null), p = E.useMemo(() => o ? NN(o, i) : null, [o, i]), v = E.useCallback(async () => {
    c("saving"), u(null);
    try {
      const T = JSON.stringify(a.current);
      await re.saveMarketingAssetDesignerInstance(
        t.id,
        T,
        n
      );
      const _ = { ...t, designerInstanceJson: T };
      r == null || r(_), c("saved");
    } catch (T) {
      u(T instanceof Error ? T.message : "Failed to save designer instance."), c("error");
    }
  }, [n, t, r]);
  return !o || !p ? /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Template designer document is missing or invalid. Open Edit template and create a canvas template first." }) : /* @__PURE__ */ A("div", { className: "designer-asset-builder", children: [
    /* @__PURE__ */ A("div", { className: "designer-asset-builder-actions", children: [
      /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => void v(), children: "Save" }),
      /* @__PURE__ */ d(
        "span",
        {
          className: l === "error" ? "chd-status-bar chd-status-bar--error" : l === "saved" ? "chd-status-bar chd-status-bar--saved" : "chd-status-bar",
          children: l === "saving" ? "Saving…" : l === "saved" ? "Saved" : l === "error" ? f || "Save failed" : "Edit unlocked layers, then Save"
        }
      )
    ] }),
    /* @__PURE__ */ d(
      V0,
      {
        mode: "endUser",
        document: p,
        templateDocument: o,
        templateId: e.id,
        onInstanceChange: s
      },
      `${e.id}:${t.id}`
    )
  ] });
}
const cP = 900;
function uP(e) {
  var t;
  if ((t = e.designerDocumentJson) != null && t.trim())
    try {
      const n = jf(JSON.parse(e.designerDocumentJson));
      if (n)
        return n;
    } catch {
    }
  return Uf();
}
function dP({
  template: e,
  designerDocumentProperty: t,
  onTemplateSaved: n
}) {
  const [r, o] = E.useState(() => uP(e)), [i, s] = E.useState("saved"), [a, l] = E.useState(null), c = E.useRef(r), f = E.useRef(null), u = E.useRef(0), p = E.useRef(!0);
  c.current = r;
  const v = E.useCallback(
    async (_) => {
      if (!Ao(e.id)) {
        s("error"), l(Qn());
        return;
      }
      const h = ++u.current;
      s("saving"), l(null);
      try {
        const m = JSON.stringify(_);
        if (await re.saveTemplateDesignerDocument(
          e.id,
          m,
          t,
          { width: _.canvas.width, height: _.canvas.height }
        ), h !== u.current)
          return;
        const g = {
          ...e,
          designerDocumentJson: m,
          canvasWidth: _.canvas.width,
          canvasHeight: _.canvas.height
        };
        n == null || n(g), s("saved");
      } catch (m) {
        if (h !== u.current)
          return;
        l(m instanceof Error ? m.message : "Failed to save designer template."), s("error");
      }
    },
    [t, n, e]
  );
  E.useEffect(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    return s("pending"), f.current != null && window.clearTimeout(f.current), f.current = window.setTimeout(() => {
      v(c.current);
    }, cP), () => {
      f.current != null && window.clearTimeout(f.current);
    };
  }, [r, v]);
  const k = i === "error" ? "chd-status-bar--error" : i === "saved" ? "chd-status-bar--saved" : void 0, T = i === "saving" ? "Saving template canvas…" : i === "pending" ? "Unsaved changes…" : i === "error" ? a || "Save failed" : "Saved to template";
  return Ao(e.id) ? /* @__PURE__ */ d(
    V0,
    {
      mode: "admin",
      document: r,
      templateDocument: r,
      templateId: e.id,
      onDocumentChange: o,
      statusSlot: T,
      statusClassName: k
    },
    `${e.id}:${e.designerDocumentJson ? "doc" : "seed"}`
  ) : /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: Qn() });
}
async function fP(e, t) {
  if (!Ao(e.id))
    throw new Error(Qn());
  const n = Uf();
  e.canvasWidth && (n.canvas.width = e.canvasWidth), e.canvasHeight && (n.canvas.height = e.canvasHeight);
  const r = JSON.stringify(n);
  return await re.saveTemplateDesignerDocument(e.id, r, t, {
    width: n.canvas.width,
    height: n.canvas.height
  }), {
    ...e,
    designerDocumentJson: r,
    canvasWidth: n.canvas.width,
    canvasHeight: n.canvas.height
  };
}
function pP(e) {
  var t;
  return !!((t = e == null ? void 0 : e.designerDocumentJson) != null && t.trim());
}
const mP = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
let Gc = null;
function hP(e) {
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
function gP(e = mP) {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (Gc || (Gc = hP(e).then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), Gc);
}
function yP({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  html2canvasCdnUrl: r,
  onSaved: o
}) {
  const [i, s] = E.useState(() => {
    const m = Ua(t.zoneLayoutJson), g = ja(e, t.zoneValues, m.values);
    return Bi(e, g);
  }), [a, l] = E.useState(() => {
    const m = Ua(t.zoneLayoutJson);
    return L0(e, m.layouts);
  }), [c, f] = E.useState(!1), [u, p] = E.useState(null), v = E.useRef(null), k = E.useMemo(
    () => x0(e, a),
    [e, a]
  ), T = (m, g) => {
    s((b) => ({ ...b, [m]: g }));
  }, _ = (m, g) => {
    l((b) => {
      const C = { ...b[m], ...g };
      for (const N of Object.keys(g))
        g[N] === void 0 && delete C[N];
      return { ...b, [m]: C };
    });
  }, h = async () => {
    f(!0), p(null);
    try {
      const m = k.zones.map((S) => {
        const L = i[S.id];
        return L ? { ...L, zoneKey: _r(S, k.zones) } : null;
      }).filter((S) => !!(S != null && S.zoneKey)), g = Object.fromEntries(
        m.map((S) => [S.zoneKey, S])
      ), b = N0(a, g);
      await re.updateMarketingAsset({
        ...t,
        zoneLayoutJson: b
      }), Z("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const C = await re.saveMarketingAssetZoneValues(
        t.id,
        m
      ), N = ja(e, C, g);
      if (s(Bi(e, N)), $f() && v.current) {
        const L = await (await gP(r))(v.current, {
          useCORS: !0,
          width: Pf(e),
          height: Uv(e)
        }), U = ["image", "png"].join("/"), R = await new Promise(
          (D, z) => L.toBlob((Y) => Y ? D(Y) : z(new Error("Canvas export failed")), U)
        );
        await re.uploadRenderedOutput(
          t.id,
          R,
          `${t.assetName}.png`
        );
      } else
        ae(
          "rendered output upload",
          "Skipped PNG upload — not required for save on this Content Hub instance."
        );
      o == null || o({
        ...t,
        zoneValues: N,
        zoneLayoutJson: b
      });
    } catch (m) {
      p(m instanceof Error ? m.message : "Failed to save.");
    } finally {
      f(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ A("div", { className: "social-builder social-builder-override", children: [
    /* @__PURE__ */ A("div", { className: "override-banner", children: [
      "Raw HTML override active. Reason: ",
      t.overrideReasonMA
    ] }),
    /* @__PURE__ */ d("div", { dangerouslySetInnerHTML: { __html: t.rawHtmlOverrideContent ?? "" } })
  ] }) : /* @__PURE__ */ d("div", { className: "social-builder", children: /* @__PURE__ */ d(
    Ba,
    {
      structureTitle: "Social structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ A("div", { className: "social-builder-structure", children: [
        /* @__PURE__ */ d(
          z0,
          {
            template: e,
            zoneLayouts: a,
            zoneValues: i,
            layoutMode: "canvas",
            onLayoutChange: _,
            onZoneValueChange: T
          }
        ),
        /* @__PURE__ */ A("div", { className: "social-builder-actions", children: [
          /* @__PURE__ */ d("button", { type: "button", className: "social-builder-save", onClick: h, disabled: c, children: "Save" }),
          /* @__PURE__ */ d(Ro, { active: c }),
          /* @__PURE__ */ d(
            R0,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (m) => {
                await re.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: m,
                  rawHtmlOverrideContent: "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        u && /* @__PURE__ */ d("div", { className: "marketing-builder-error social-builder-error", children: u })
      ] }),
      preview: /* @__PURE__ */ d(
        Ff,
        {
          ref: v,
          template: k,
          zoneValues: i,
          layoutMode: "canvas"
        }
      )
    }
  ) });
}
function Bs({
  activeTab: e,
  zoneCount: t,
  templateName: n,
  onTabChange: r,
  showAssetTab: o = !0
}) {
  return /* @__PURE__ */ A("div", { className: "marketing-builder-toolbar marketing-builder-tab-bar", children: [
    /* @__PURE__ */ A("div", { className: "marketing-builder-toolbar-main", children: [
      /* @__PURE__ */ A("div", { className: "marketing-builder-tabs", role: "tablist", "aria-label": "Marketing builder mode", children: [
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
    /* @__PURE__ */ A("span", { className: "marketing-builder-toolbar-meta", children: [
      t,
      " zone",
      t === 1 ? "" : "s"
    ] })
  ] });
}
function Xc({
  brandKitId: e,
  currentTemplateId: t,
  marketingAssetId: n,
  onTemplateChange: r,
  refreshKey: o = 0
}) {
  var k;
  const [i, s] = E.useState([]), [a, l] = E.useState(!0), [c, f] = E.useState(!1), [u, p] = E.useState(null);
  E.useEffect(() => {
    let T = !1;
    async function _() {
      l(!0), p(null);
      try {
        const h = await re.listTemplatesForBrandKit(e);
        if (T)
          return;
        const m = h.some((b) => b.id === t) ? h : [...h, await re.getTemplate(t)], g = [...new Map(m.map((b) => [b.id, b])).values()];
        g.sort((b, C) => b.templateName.localeCompare(C.templateName)), s(g);
      } catch (h) {
        T || (p(h instanceof Error ? h.message : "Could not load templates."), s([]));
      } finally {
        T || l(!1);
      }
    }
    return _(), () => {
      T = !0;
    };
  }, [e, t, o]);
  const v = async (T) => {
    if (!(!T || T === t)) {
      f(!0), p(null);
      try {
        await re.linkMarketingAssetToTemplate(n, T);
        const _ = i.find((h) => h.id === T) ?? await re.getTemplate(T);
        r(_);
      } catch (_) {
        p(_ instanceof Error ? _.message : "Could not switch template.");
      } finally {
        f(!1);
      }
    }
  };
  return a ? /* @__PURE__ */ d("p", { className: "template-selector-status", children: "Loading templates..." }) : i.length <= 1 ? /* @__PURE__ */ A("div", { className: "template-selector", children: [
    /* @__PURE__ */ A("p", { className: "template-selector-status", children: [
      "Using ",
      /* @__PURE__ */ d("strong", { children: ((k = i[0]) == null ? void 0 : k.templateName) ?? "current template" }),
      i.length === 0 ? " (only template for this brand kit)" : "",
      ". Duplicate this template in Edit template to create another format."
    ] }),
    u && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: u })
  ] }) : /* @__PURE__ */ A("div", { className: "template-selector", children: [
    /* @__PURE__ */ A("label", { className: "template-selector-label", children: [
      "Template",
      /* @__PURE__ */ d(
        "select",
        {
          value: t,
          disabled: c,
          onChange: (T) => void v(T.target.value),
          children: i.map((T) => /* @__PURE__ */ A("option", { value: T.id, children: [
            T.templateName,
            " (",
            T.channelType,
            ")"
          ] }, T.id))
        }
      )
    ] }),
    /* @__PURE__ */ d("p", { className: "template-selector-hint", children: c ? "" : "Choose which template this marketing asset uses." }),
    /* @__PURE__ */ d(Ro, { active: c, className: "template-selector-saving" }),
    u && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: u })
  ] });
}
const vP = [
  "Text",
  "Heading",
  "Image",
  "CTA Button",
  "Logo",
  "Background Color",
  "Divider",
  "HTML"
];
function wP(e) {
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
function TP(e) {
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
  }[t] ?? vP.find((r) => r.toLowerCase() === t);
}
function Z0(e) {
  var l, c;
  const t = e.trim(), n = t.match(/zone\s*[:=]\s*([a-zA-Z0-9_-]+)/i), r = t.match(/type\s*[:=]\s*([a-zA-Z0-9 _-]+)/i), o = t.match(/label\s*[:=]\s*([^|]+)/i), i = (l = n == null ? void 0 : n[1]) == null ? void 0 : l.trim(), s = r != null && r[1] ? TP(r[1]) : void 0, a = ((c = o == null ? void 0 : o[1]) == null ? void 0 : c.trim()) || void 0;
  return { zoneKey: i, zoneType: s, zoneLabel: a };
}
function SP(e, t) {
  return e.replace(/zone\s*[:=]\s*/gi, "").replace(/type\s*[:=]\s*[a-zA-Z0-9 _-]+/gi, "").replace(/label\s*[:=]\s*[^|]+/gi, "").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase() || t;
}
function zh(e) {
  return (e.fills ?? []).some(
    (t) => t.visible !== !1 && String(t.type ?? "").toUpperCase() === "IMAGE"
  );
}
function W0(e) {
  var o, i;
  const t = Z0(e.name ?? "");
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
  if ((zh(e) || r === "RECTANGLE" || r === "ELLIPSE") && zh(e))
    return "Image";
  if (r === "COMPONENT" || r === "INSTANCE") {
    if (/button|cta/i.test(n))
      return "CTA Button";
    if (/logo/i.test(n))
      return "Logo";
  }
}
function Y0(e) {
  const t = e.name ?? "";
  return /zone\s*[:=]/i.test(t) || /type\s*[:=]/i.test(t);
}
function kP(e) {
  const t = [], n = (r) => {
    Y0(r) && t.push(r);
    for (const o of r.children ?? [])
      n(o);
  };
  return n(e), t.length > 0 ? t : (e.children ?? []).filter((r) => W0(r) != null);
}
function ro(e) {
  if (!(e == null || !Number.isFinite(e)))
    return Math.round(e);
}
function EP(e, t, n, r) {
  const o = Z0(e.name ?? ""), i = o.zoneType ?? W0(e) ?? "Text";
  let s = o.zoneKey || SP(e.name ?? "", `zone_${t + 1}`);
  r.has(s) && (s = `${s}_${t + 1}`), r.add(s);
  const a = e.absoluteBoundingBox, l = (a == null ? void 0 : a.x) != null ? ro(a.x - n.x) : void 0, c = (a == null ? void 0 : a.y) != null ? ro(a.y - n.y) : void 0, f = {
    id: `temp-figma-${Date.now()}-${t}`,
    zoneKey: s,
    zoneLabel: o.zoneLabel || (e.name ?? "").trim() || s,
    zoneType: i,
    isLocked: i === "Logo",
    sortOrder: t,
    positionX: l,
    positionY: c,
    zoneWidth: ro(a == null ? void 0 : a.width),
    zoneHeight: ro(a == null ? void 0 : a.height)
  };
  if (i === "Heading" && (f.headingLevel = Pn), i === "Text" && typeof e.characters == "string" && e.characters.trim()) {
    const u = e.characters.trim().length;
    u > 0 && (f.maxCharacterCount = Math.max(40, Math.ceil(u * 1.25)));
  }
  return f;
}
function AP(e) {
  var c, f, u, p;
  const t = [], n = (e.name ?? "").trim() || "Figma frame", r = ro((c = e.absoluteBoundingBox) == null ? void 0 : c.width), o = ro((f = e.absoluteBoundingBox) == null ? void 0 : f.height), i = {
    x: ((u = e.absoluteBoundingBox) == null ? void 0 : u.x) ?? 0,
    y: ((p = e.absoluteBoundingBox) == null ? void 0 : p.y) ?? 0
  }, s = kP(e);
  if (s.length === 0)
    return t.push(
      'No zone layers found. Name layers like "zone:headline | type:Heading" or place typed content as direct children of the frame.'
    ), { frameName: n, canvasWidth: r, canvasHeight: o, zones: [], warnings: t };
  s.some(Y0) || t.push(
    "No explicit zone: / type: names found — inferred zone types from layer names and Figma node types. Rename layers for stable imports."
  );
  const a = /* @__PURE__ */ new Set(), l = s.map((v, k) => EP(v, k, i, a));
  return { frameName: n, canvasWidth: r, canvasHeight: o, zones: l, warnings: t };
}
function G0(e, t) {
  const n = t.replace(/-/g, ":");
  if ((e.id ?? "").replace(/-/g, ":") === n)
    return e;
  for (const r of e.children ?? []) {
    const o = G0(r, n);
    if (o)
      return o;
  }
  return null;
}
function CP(e, t) {
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
    return G0(o, t) ?? o;
  }
  return n.id || n.children || n.type ? n : null;
}
function Rh(e, t) {
  return `${e.replace(/\s+/g, " ").trim() || "Figma template"} (${t})`;
}
async function bP(e, t, n) {
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
function NP({
  template: e,
  figmaImportApiUrl: t = "/api/figma/import",
  figmaImportApiToken: n,
  onApplyToCurrent: r,
  onCreatedTemplate: o
}) {
  const [i, s] = E.useState(""), [a, l] = E.useState(null), [c, f] = E.useState(!1), [u, p] = E.useState(!1), [v, k] = E.useState(null), [T, _] = E.useState(null), [h, m] = E.useState(!1), [g, b] = E.useState(""), C = async () => {
    f(!0), k(null), _(null), l(null);
    try {
      const L = wP(i);
      if (!L)
        throw new Error(
          "Paste a full Figma URL that includes node-id (right-click frame → Copy link)."
        );
      const U = await bP(t, n, i), R = CP(U, L.nodeId);
      if (!R)
        throw new Error("Could not find that frame/node in the Figma response.");
      const D = AP(R);
      l(D), b(Rh(D.frameName, e.channelType)), D.zones.length === 0 ? k(D.warnings[0] || "No zones were mapped from this frame.") : _(`Mapped ${D.zones.length} zone(s) from “${D.frameName}”.`);
    } catch (L) {
      k(L instanceof Error ? L.message : "Figma preview failed.");
    } finally {
      f(!1);
    }
  }, N = () => {
    !a || a.zones.length === 0 || (r({
      zones: a.zones,
      canvasWidth: a.canvasWidth,
      canvasHeight: a.canvasHeight,
      frameName: a.frameName
    }), _(
      `Applied ${a.zones.length} zone(s) to “${e.templateName}”. Save/autosave will persist them.`
    ));
  }, S = async () => {
    if (!(!a || a.zones.length === 0)) {
      p(!0), k(null), _(null);
      try {
        const L = e.channelType, U = await re.createTemplate({
          templateName: g.trim() || Rh(a.frameName, L),
          channelType: L,
          formatPreset: e.formatPreset,
          canvasWidth: a.canvasWidth,
          canvasHeight: a.canvasHeight,
          brandKitId: e.brandKitId,
          zones: a.zones,
          allowedAssetIds: e.allowedAssetIds
        }, e.id);
        _(`Created template “${U.templateName}” (${U.id}).`), o == null || o(U);
      } catch (L) {
        k(
          L instanceof Error ? L.message : "Could not create template from Figma."
        );
      } finally {
        p(!1);
      }
    }
  };
  return /* @__PURE__ */ A("div", { className: "figma-import-panel", children: [
    /* @__PURE__ */ d("h4", { children: "Import from Figma" }),
    /* @__PURE__ */ A("p", { className: "figma-import-hint", children: [
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
    /* @__PURE__ */ A("label", { children: [
      "Figma frame URL",
      /* @__PURE__ */ d(
        "input",
        {
          type: "text",
          value: i,
          onChange: (L) => s(L.target.value),
          placeholder: "https://www.figma.com/design/FILEKEY/Name?node-id=1-2"
        }
      )
    ] }),
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "figma-import-button",
        onClick: () => void C(),
        disabled: c || !i.trim(),
        children: "Preview zones"
      }
    ),
    /* @__PURE__ */ d(Ro, { active: c || u, className: "figma-import-saving" }),
    a && a.zones.length > 0 && /* @__PURE__ */ A("div", { className: "figma-import-preview", children: [
      /* @__PURE__ */ A("p", { className: "figma-import-preview-meta", children: [
        "Frame ",
        /* @__PURE__ */ d("strong", { children: a.frameName }),
        a.canvasWidth != null && a.canvasHeight != null ? ` · ${a.canvasWidth}×${a.canvasHeight}` : null
      ] }),
      /* @__PURE__ */ d("ul", { className: "figma-import-zone-list", children: a.zones.map((L) => /* @__PURE__ */ A("li", { children: [
        /* @__PURE__ */ d("code", { children: L.zoneKey }),
        " — ",
        L.zoneType,
        L.zoneWidth != null && L.zoneHeight != null ? ` (${L.zoneWidth}×${L.zoneHeight})` : null
      ] }, L.id)) }),
      a.warnings.map((L) => /* @__PURE__ */ d("p", { className: "figma-import-warning", children: L }, L)),
      /* @__PURE__ */ A("label", { className: "figma-import-checkbox", children: [
        /* @__PURE__ */ d(
          "input",
          {
            type: "checkbox",
            checked: h,
            onChange: (L) => m(L.target.checked)
          }
        ),
        "Create as a new template (instead of replacing zones on this one)"
      ] }),
      h ? /* @__PURE__ */ A(We, { children: [
        /* @__PURE__ */ A("label", { children: [
          "New template name",
          /* @__PURE__ */ d(
            "input",
            {
              type: "text",
              value: g,
              onChange: (L) => b(L.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "figma-import-button figma-import-button-primary",
            onClick: () => void S(),
            disabled: u || !g.trim(),
            children: "Create template from Figma"
          }
        )
      ] }) : /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "figma-import-button figma-import-button-primary",
          onClick: N,
          children: "Replace zones on this template"
        }
      )
    ] }),
    T && /* @__PURE__ */ d("p", { className: "figma-import-message", children: T }),
    v && /* @__PURE__ */ d("p", { className: "marketing-builder-error figma-import-error", children: v })
  ] });
}
const PP = ["Social", "Email", "Newsletter", "Print"];
function xP({
  template: e,
  onChange: t,
  compact: n = !1
}) {
  const r = sa(e.channelType), o = $l(e.channelType), i = wA(e), s = (l) => {
    l !== e.channelType && t({
      channelType: l,
      ...Fv(l)
    });
  }, a = (l) => {
    const c = TA(e.channelType, l);
    c && t(c);
  };
  return /* @__PURE__ */ A("div", { className: `template-properties-form${n ? " template-properties-form-compact" : ""}`, children: [
    /* @__PURE__ */ d("h4", { children: n ? "Template" : "Template properties" }),
    /* @__PURE__ */ A("label", { children: [
      "Template name",
      /* @__PURE__ */ d(
        "input",
        {
          value: e.templateName,
          onChange: (l) => t({ templateName: l.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ A("label", { children: [
      "Channel type",
      /* @__PURE__ */ d(
        "select",
        {
          value: e.channelType,
          onChange: (l) => s(l.target.value),
          children: PP.map((l) => /* @__PURE__ */ d("option", { value: l, children: l }, l))
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "template-dimensions-section", children: [
      /* @__PURE__ */ A("div", { className: "template-dimensions-heading", children: [
        /* @__PURE__ */ d("h5", { children: "Dimensions" }),
        /* @__PURE__ */ d("span", { className: "template-dimensions-summary", children: Hv(e) })
      ] }),
      /* @__PURE__ */ A("label", { children: [
        "Size preset",
        /* @__PURE__ */ A("select", { value: i, onChange: (l) => a(l.target.value), children: [
          o.map((l) => /* @__PURE__ */ d("option", { value: l.id, children: l.label }, l.id)),
          /* @__PURE__ */ d("option", { value: "custom", children: "Custom" })
        ] })
      ] }),
      /* @__PURE__ */ A("div", { className: "template-dimension-fields", children: [
        /* @__PURE__ */ A("label", { children: [
          r ? "Width (px)" : "Email width (px)",
          /* @__PURE__ */ d(
            "input",
            {
              type: "number",
              min: 1,
              value: e.canvasWidth ?? "",
              onChange: (l) => t({
                canvasWidth: l.target.value ? Number(l.target.value) : void 0,
                formatPreset: Qu(
                  e.channelType,
                  l.target.value ? Number(l.target.value) : void 0,
                  e.canvasHeight
                )
              })
            }
          )
        ] }),
        r ? /* @__PURE__ */ A("label", { children: [
          "Height (px)",
          /* @__PURE__ */ d(
            "input",
            {
              type: "number",
              min: 1,
              value: e.canvasHeight ?? "",
              onChange: (l) => t({
                canvasHeight: l.target.value ? Number(l.target.value) : void 0,
                formatPreset: Qu(
                  e.channelType,
                  e.canvasWidth,
                  l.target.value ? Number(l.target.value) : void 0
                )
              })
            }
          )
        ] }) : /* @__PURE__ */ A("label", { children: [
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
    e.brandKitId && /* @__PURE__ */ A("p", { className: "template-properties-meta", children: [
      "Brand kit: ",
      e.brandKitId
    ] })
  ] });
}
function LP({
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
  const [c, f] = E.useState(!1), [u, p] = E.useState("content-hub"), [v, k] = E.useState(""), [T, _] = E.useState(""), [h, m] = E.useState(""), [g, b] = E.useState([]), [C, N] = E.useState(!1), [S, L] = E.useState(null);
  E.useEffect(() => {
    const z = window.setTimeout(() => _(v), 250);
    return () => window.clearTimeout(z);
  }, [v]), E.useEffect(() => {
    c && p("content-hub");
  }, [c]), E.useEffect(() => {
    if (!c || u !== "content-hub")
      return;
    let z = !1;
    return N(!0), L(null), re.searchAssets({ collectionId: e, query: T }).then((Y) => {
      z || b(Y);
    }).catch((Y) => {
      z || (b([]), L(Y instanceof Error ? Y.message : "Could not search Content Hub assets."));
    }).finally(() => {
      z || N(!1);
    }), () => {
      z = !0;
    };
  }, [c, u, e, T]);
  const U = () => {
    f(!1), m("");
  }, R = () => {
    const z = h.trim();
    z && (l == null || l(z), a({
      id: "",
      name: "Image URL",
      thumbnailUrl: z,
      previewUrl: z
    }), U());
  }, D = c ? /* @__PURE__ */ A("div", { className: `asset-picker-panel${o ? " asset-picker-panel-overlay" : ""}`, children: [
    /* @__PURE__ */ A("div", { className: "asset-picker-panel-header", children: [
      /* @__PURE__ */ d("strong", { children: "Approved assets" }),
      /* @__PURE__ */ d("button", { type: "button", className: "asset-picker-close", onClick: U, "aria-label": "Close asset picker", children: "Close" })
    ] }),
    i && /* @__PURE__ */ A("div", { className: "asset-picker-mode-tabs", children: [
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: `asset-picker-mode-tab${u === "content-hub" ? " asset-picker-mode-tab-active" : ""}`,
          onClick: () => p("content-hub"),
          children: "Content Hub"
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: `asset-picker-mode-tab${u === "url" ? " asset-picker-mode-tab-active" : ""}`,
          onClick: () => p("url"),
          children: "Image URL"
        }
      )
    ] }),
    u === "content-hub" && /* @__PURE__ */ A(We, { children: [
      /* @__PURE__ */ d(
        "input",
        {
          className: "asset-picker-search",
          placeholder: e ? "Search approved assets" : "Search approved Content Hub assets",
          value: v,
          onChange: (z) => k(z.target.value),
          autoFocus: !0
        }
      ),
      e ? /* @__PURE__ */ A("div", { className: "asset-picker-hint", children: [
        "Collection ",
        e
      ] }) : /* @__PURE__ */ d("div", { className: "asset-picker-hint", children: "Searching approved assets via Content Hub SearchConfiguration" }),
      t && /* @__PURE__ */ A("div", { className: "asset-picker-hint", children: [
        "Recommended aspect ratio: ",
        t
      ] }),
      C && /* @__PURE__ */ d("div", { className: "asset-picker-loading", children: "Searching..." }),
      S && /* @__PURE__ */ d("div", { className: "asset-picker-error", children: S }),
      /* @__PURE__ */ A("div", { className: "asset-picker-grid", children: [
        g.map((z) => /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: "asset-picker-thumb",
            onClick: () => {
              a(z), U();
            },
            children: [
              /* @__PURE__ */ d("img", { src: z.thumbnailUrl, alt: z.name }),
              /* @__PURE__ */ d("span", { children: z.name })
            ]
          },
          z.id || z.thumbnailUrl
        )),
        !C && !S && g.length === 0 && /* @__PURE__ */ d("div", { className: "asset-picker-empty", children: i ? "No assets found. Try Image URL instead." : "No assets found. Try a different search." })
      ] })
    ] }),
    u === "url" && i && /* @__PURE__ */ A("div", { className: "asset-picker-url-form", children: [
      /* @__PURE__ */ A("label", { children: [
        "Image URL",
        /* @__PURE__ */ d(
          "input",
          {
            className: "asset-picker-search",
            placeholder: "https://...",
            value: h,
            onChange: (z) => m(z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ d("button", { type: "button", className: "asset-picker-url-apply", onClick: R, disabled: !h.trim(), children: "Use image URL" })
    ] })
  ] }) : null;
  return /* @__PURE__ */ A("div", { className: `asset-picker${r ? " asset-picker-compact" : ""}`, children: [
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "asset-picker-trigger",
        disabled: s,
        onClick: () => f((z) => !z),
        children: n
      }
    ),
    c && o ? /* @__PURE__ */ A("div", { className: "asset-picker-modal", role: "dialog", "aria-modal": "true", "aria-label": "Approved assets", children: [
      /* @__PURE__ */ d("button", { type: "button", className: "asset-picker-backdrop", "aria-label": "Close asset picker", onClick: U }),
      D
    ] }) : D
  ] });
}
function _P({ template: e, onAssetsChange: t }) {
  const n = Hf(), { resultIds: r, fullText: o, hasSearchIntegration: i } = b0(), [s, a] = E.useState([]), [l, c] = E.useState([]), [f, u] = E.useState(!1), [p, v] = E.useState(!1), [k, T] = E.useState(null), [_, h] = E.useState(null), m = E.useMemo(
    () => new Set(s.map((S) => S.id).filter(Boolean)),
    [s]
  ), g = E.useCallback(async () => {
    if (!e.id || e.id.startsWith("temp-")) {
      a([]);
      return;
    }
    u(!0), h(null);
    try {
      const S = await re.getTemplateAllowedAssets(e.id);
      a(S), t(S.map((L) => L.id).filter(Boolean));
    } catch (S) {
      a([]), h(S instanceof Error ? S.message : "Could not load template assets.");
    } finally {
      u(!1);
    }
  }, [t, e.id]);
  E.useEffect(() => {
    g();
  }, [g]), E.useEffect(() => {
    if (r.length === 0) {
      c([]);
      return;
    }
    let S = !1;
    return v(!0), re.getAssetsByIds(r).then((L) => {
      S || c(L);
    }).catch(() => {
      S || c([]);
    }).finally(() => {
      S || v(!1);
    }), () => {
      S = !0;
    };
  }, [r]);
  const b = async (S) => {
    var L, U;
    if (!e.id || e.id.startsWith("temp-") || !S.id) {
      h("Save the template first before linking assets.");
      return;
    }
    T(S.id), h(null);
    try {
      if (!await re.addAllowedAssetToTemplate(e.id, S.id))
        throw new Error(`Could not link ${S.name} to this template.`);
      await g(), (L = n.notifier) == null || L.notifySuccess(`Added "${S.name}" to template assets.`);
    } catch (R) {
      const D = R instanceof Error ? R.message : "Failed to link asset to template.";
      h(D), (U = n.notifier) == null || U.notifyError(D);
    } finally {
      T(null);
    }
  }, C = async (S) => {
    var L, U;
    if (!(!e.id || !S.id)) {
      T(S.id), h(null);
      try {
        await re.removeAllowedAssetFromTemplate(e.id, S.id), await g(), (L = n.notifier) == null || L.notifySuccess(`Removed "${S.name}" from template assets.`);
      } catch (R) {
        const D = R instanceof Error ? R.message : "Failed to remove asset from template.";
        h(D), (U = n.notifier) == null || U.notifyError(D);
      } finally {
        T(null);
      }
    }
  }, N = !e.id || e.id.startsWith("temp-");
  return /* @__PURE__ */ A("div", { className: "template-zone-asset-collection template-allowed-assets", children: [
    /* @__PURE__ */ d("h4", { className: "template-zone-asset-collection-title", children: "Template image library" }),
    /* @__PURE__ */ A("p", { className: "template-zone-asset-collection-intro", children: [
      "Link approved ",
      /* @__PURE__ */ d("strong", { children: "M.Asset" }),
      " entities on the template via ",
      /* @__PURE__ */ d("code", { children: "templateToAllowedAsset" }),
      ". Every image zone on marketing assets built from this template can pick from these assets."
    ] }),
    /* @__PURE__ */ d(
      LP,
      {
        overlay: !0,
        allowUrl: !1,
        triggerLabel: "Browse approved assets",
        disabled: N,
        onSelect: (S) => {
          b(S);
        }
      }
    ),
    N && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-hint", children: "Save this template first. An entity ID is needed before assets can be linked." }),
    /* @__PURE__ */ A("div", { className: "template-zone-asset-collection-section", children: [
      /* @__PURE__ */ A("div", { className: "template-zone-asset-collection-section-header", children: [
        /* @__PURE__ */ A("h5", { children: [
          "On template (",
          s.length,
          ")"
        ] }),
        f && /* @__PURE__ */ d("span", { className: "template-zone-asset-collection-status", children: "Loading..." })
      ] }),
      /* @__PURE__ */ A("div", { className: "template-zone-asset-collection-grid", children: [
        s.map((S) => /* @__PURE__ */ A("div", { className: "template-zone-asset-card", children: [
          /* @__PURE__ */ d("img", { src: S.thumbnailUrl, alt: S.name }),
          /* @__PURE__ */ d("span", { children: S.name }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "template-zone-asset-remove",
              disabled: k === S.id || N,
              onClick: () => void C(S),
              children: "Remove"
            }
          )
        ] }, S.id || S.thumbnailUrl)),
        !f && s.length === 0 && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-empty", children: "No assets linked to this template yet." })
      ] })
    ] }),
    /* @__PURE__ */ A("div", { className: "template-zone-asset-collection-section", children: [
      /* @__PURE__ */ A("div", { className: "template-zone-asset-collection-section-header", children: [
        /* @__PURE__ */ d("h5", { children: "From Content Hub search" }),
        p && /* @__PURE__ */ d("span", { className: "template-zone-asset-collection-status", children: "Loading..." })
      ] }),
      !i && /* @__PURE__ */ A("p", { className: "template-zone-asset-collection-hint", children: [
        "Use ",
        /* @__PURE__ */ d("strong", { children: "Browse approved assets" }),
        " above, or add a Search page component and set",
        " ",
        /* @__PURE__ */ d("code", { children: "searchIdentifier" }),
        " in the external component Configuration."
      ] }),
      i && /* @__PURE__ */ A("p", { className: "template-zone-asset-collection-hint", children: [
        "Use the search component on this page",
        o ? ` (current query: "${o}")` : "",
        ", then click",
        " ",
        /* @__PURE__ */ d("strong", { children: "Add" }),
        " to link an asset to the template."
      ] }),
      /* @__PURE__ */ A("div", { className: "template-zone-asset-collection-grid", children: [
        l.map((S) => {
          const L = S.id ? m.has(S.id) : !1;
          return /* @__PURE__ */ A("div", { className: "template-zone-asset-card", children: [
            /* @__PURE__ */ d("img", { src: S.thumbnailUrl, alt: S.name }),
            /* @__PURE__ */ d("span", { children: S.name }),
            /* @__PURE__ */ d(
              "button",
              {
                type: "button",
                className: "template-zone-asset-add",
                disabled: L || k === S.id || !S.id || N,
                onClick: () => void b(S),
                children: L ? "Linked" : "Add"
              }
            )
          ] }, S.id || S.thumbnailUrl);
        }),
        i && !p && l.length === 0 && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-empty", children: "Run a search on this page to see assets you can link." })
      ] })
    ] }),
    _ && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-error", children: _ })
  ] });
}
function zP({ zoneLabel: e, onDelete: t, className: n = "" }) {
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
const RP = ["Text", "Heading", "Image", "CTA Button", "Logo", "Background Color", "Divider", "HTML"], MP = 800;
function OP({
  template: e,
  onSaved: t,
  pendingFigmaImport: n = null,
  onPendingFigmaImportApplied: r
}) {
  var O;
  const [o, i] = E.useState(e), [s, a] = E.useState(((O = o.zones[0]) == null ? void 0 : O.id) ?? null), [l, c] = E.useState("saved"), [f, u] = E.useState(null), p = E.useRef(e.zones), v = E.useRef(o), k = E.useRef(null), T = E.useRef(0), _ = E.useRef(!0), h = E.useRef(!1);
  v.current = o;
  const m = E.useCallback(
    async (w) => {
      const x = ++T.current;
      c("saving"), u(null);
      try {
        const j = await re.saveTemplate(w, p.current);
        if (x !== T.current)
          return;
        p.current = j.zones, _.current = !0, i(j), t == null || t(j), c("saved");
      } catch (j) {
        if (x !== T.current)
          return;
        u(j instanceof Error ? j.message : "Failed to save template zones."), c("error");
      }
    },
    [t]
  );
  E.useEffect(() => {
    var w;
    !n || n.zones.length === 0 || (i((x) => ({
      ...x,
      canvasWidth: n.canvasWidth ?? x.canvasWidth,
      canvasHeight: n.canvasHeight ?? x.canvasHeight,
      zones: n.zones.map((j, Q) => ({
        ...j,
        sortOrder: Q
      }))
    })), a(((w = n.zones[0]) == null ? void 0 : w.id) ?? null), c("pending"), r == null || r());
  }, [n, r]), E.useEffect(() => {
    _.current = !0, p.current = e.zones, i(e), a((w) => {
      var x;
      return w && e.zones.some((j) => j.id === w) ? w : ((x = e.zones[0]) == null ? void 0 : x.id) ?? null;
    }), u(null), c("saved");
  }, [
    e.id,
    e.templateName,
    e.channelType,
    e.canvasWidth,
    e.canvasHeight,
    e.formatPreset,
    e.zones.map(
      (w) => [
        w.id,
        w.zoneKey,
        w.zoneLabel,
        w.zoneType,
        w.isLocked,
        w.sortOrder,
        w.headingLevel ?? "",
        w.maxCharacterCount ?? ""
      ].join(":")
    ).join("|")
  ]), E.useEffect(() => {
    if (!h.current) {
      h.current = !0;
      return;
    }
    if (_.current) {
      _.current = !1;
      return;
    }
    return c((w) => w === "saving" ? w : "pending"), k.current != null && window.clearTimeout(k.current), k.current = window.setTimeout(() => {
      m(v.current);
    }, MP), () => {
      k.current != null && window.clearTimeout(k.current);
    };
  }, [o, m]);
  const g = o.zones.find((w) => w.id === s), [b, C] = E.useState(null), [N, S] = E.useState(null), L = [...o.zones].sort((w, x) => w.sortOrder - x.sortOrder), U = (w, x) => {
    w !== x && i((j) => {
      const Q = [...j.zones].sort((Be, Oo) => Be.sortOrder - Oo.sortOrder), V = Q.findIndex((Be) => Be.id === w), $e = Q.findIndex((Be) => Be.id === x);
      if (V < 0 || $e < 0)
        return j;
      const be = [...Q], [Ne] = be.splice(V, 1);
      return be.splice($e, 0, Ne), {
        ...j,
        zones: be.map((Be, Oo) => ({ ...Be, sortOrder: Oo }))
      };
    });
  }, R = (w) => {
    i((x) => ({ ...x, ...w }));
  }, D = (w, x) => {
    i((j) => ({
      ...j,
      zones: j.zones.map((Q) => {
        if (Q.id !== w)
          return Q;
        const V = { ...Q, ...x };
        for (const $e of Object.keys(x))
          x[$e] === void 0 && delete V[$e];
        return V;
      })
    }));
  }, z = (w) => {
    if (w.trim() === "")
      return;
    const x = Number(w);
    return Number.isNaN(x) ? void 0 : x;
  }, Y = () => {
    const w = new Set(o.zones.map((V) => V.zoneKey));
    let x = o.zones.length + 1, j = `newZone${x}`;
    for (; w.has(j); )
      x += 1, j = `newZone${x}`;
    const Q = {
      id: `temp-${Date.now()}`,
      zoneKey: j,
      zoneLabel: "New zone",
      zoneType: "Text",
      isLocked: !1,
      sortOrder: o.zones.length
    };
    i((V) => ({ ...V, zones: [...V.zones, Q] })), a(Q.id);
  }, Re = (w) => {
    var $e, be;
    const x = [...o.zones].sort((Ne, Be) => Ne.sortOrder - Be.sortOrder), j = x.findIndex((Ne) => Ne.id === w), Q = x.filter((Ne) => Ne.id !== w).map((Ne, Be) => ({ ...Ne, sortOrder: Be })), V = (($e = Q[j]) == null ? void 0 : $e.id) ?? ((be = Q[j - 1]) == null ? void 0 : be.id) ?? null;
    i((Ne) => ({ ...Ne, zones: Q })), a(V);
  }, qe = () => {
    const w = [
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
    i((x) => ({ ...x, zones: w })), a(w[0].id);
  }, Ee = ad(l === "pending", "pending"), W = ad(l === "saving", "active"), $ = l === "pending" ? Ee : l === "saving" ? W : l === "error" ? f ?? "Could not save template." : "All changes saved automatically.";
  return /* @__PURE__ */ d(
    Ba,
    {
      structureTitle: "Template structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ A("div", { className: "template-admin-structure", children: [
        /* @__PURE__ */ d(xP, { template: o, onChange: R, compact: !0 }),
        /* @__PURE__ */ d(
          _P,
          {
            template: o,
            onAssetsChange: (w) => i((x) => {
              const j = x.allowedAssetIds ?? [];
              return j.length === w.length && j.every((Q, V) => Q === w[V]) ? x : { ...x, allowedAssetIds: w };
            })
          }
        ),
        /* @__PURE__ */ A("div", { className: "template-admin-structure-grid", children: [
          /* @__PURE__ */ A("div", { className: "template-admin-zone-list", children: [
            /* @__PURE__ */ d("h4", { children: "Zones" }),
            /* @__PURE__ */ d("p", { className: "zone-list-hint", children: "Drag zones to reorder" }),
            L.map((w) => /* @__PURE__ */ A(
              "div",
              {
                tabIndex: 0,
                draggable: !0,
                className: `zone-list-item${w.id === s ? " zone-list-item-active" : ""}${w.id === b ? " zone-list-item-dragging" : ""}${w.id === N ? " zone-list-item-drag-over" : ""}`,
                onClick: () => a(w.id),
                onKeyDown: (x) => {
                  (x.key === "Enter" || x.key === " ") && (x.preventDefault(), a(w.id));
                },
                onDragStart: (x) => {
                  if (x.target.closest(".zone-list-delete")) {
                    x.preventDefault();
                    return;
                  }
                  x.dataTransfer.effectAllowed = "move", x.dataTransfer.setData("text/plain", w.id), C(w.id);
                },
                onDragOver: (x) => {
                  x.preventDefault(), x.dataTransfer.dropEffect = "move", N !== w.id && S(w.id);
                },
                onDragLeave: () => {
                  S((x) => x === w.id ? null : x);
                },
                onDrop: (x) => {
                  x.preventDefault();
                  const j = x.dataTransfer.getData("text/plain");
                  j && U(j, w.id), C(null), S(null);
                },
                onDragEnd: () => {
                  C(null), S(null);
                },
                children: [
                  /* @__PURE__ */ d("span", { className: "zone-list-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }),
                  /* @__PURE__ */ A("span", { className: "zone-list-item-content", children: [
                    /* @__PURE__ */ d("span", { children: w.zoneLabel || w.zoneKey }),
                    /* @__PURE__ */ d("span", { className: "zone-list-item-type", children: w.zoneType === "Heading" ? `Heading · ${w.headingLevel ?? Pn}` : w.zoneType }),
                    w.isLocked && /* @__PURE__ */ d("span", { className: "zone-list-item-lock", children: "Locked" })
                  ] }),
                  /* @__PURE__ */ d(
                    zP,
                    {
                      zoneLabel: w.zoneLabel || w.zoneKey,
                      onDelete: () => Re(w.id)
                    }
                  )
                ]
              },
              w.id
            )),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-list-add", onClick: Y, children: "+ Add zone" }),
            o.zones.length === 0 && /* @__PURE__ */ d("button", { type: "button", className: "zone-list-add zone-list-starter", onClick: qe, children: "Start with email template zones" })
          ] }),
          /* @__PURE__ */ d("div", { className: "template-admin-properties", children: g ? /* @__PURE__ */ A(We, { children: [
            /* @__PURE__ */ d("h4", { children: "Zone properties" }),
            /* @__PURE__ */ A("div", { children: [
              /* @__PURE__ */ A("label", { children: [
                "Label",
                /* @__PURE__ */ d(
                  "input",
                  {
                    value: g.zoneLabel,
                    onChange: (w) => D(g.id, { zoneLabel: w.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ A("label", { children: [
                "Zone key",
                /* @__PURE__ */ d(
                  "input",
                  {
                    value: g.zoneKey,
                    onChange: (w) => D(g.id, { zoneKey: w.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ A("label", { children: [
                "Type",
                /* @__PURE__ */ d(
                  "select",
                  {
                    value: g.zoneType,
                    onChange: (w) => {
                      D(
                        g.id,
                        wC(g, w.target.value)
                      );
                    },
                    children: RP.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                  }
                )
              ] }),
              /* @__PURE__ */ A("label", { className: "checkbox-label", children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "checkbox",
                    checked: g.isLocked,
                    onChange: (w) => D(g.id, { isLocked: w.target.checked })
                  }
                ),
                "Locked (brand element, end user cannot edit)"
              ] }),
              g.zoneType === "Heading" && /* @__PURE__ */ A(We, { children: [
                /* @__PURE__ */ A("label", { children: [
                  "Heading level",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: g.headingLevel ?? Pn,
                      onChange: (w) => D(g.id, {
                        headingLevel: w.target.value
                      }),
                      children: Vv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                    }
                  )
                ] }),
                /* @__PURE__ */ A("label", { children: [
                  "Max characters",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: g.maxCharacterCount ?? "",
                      onChange: (w) => D(g.id, { maxCharacterCount: z(w.target.value) })
                    }
                  )
                ] })
              ] }),
              g.zoneType === "Text" && /* @__PURE__ */ A("label", { children: [
                "Max characters",
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "number",
                    value: g.maxCharacterCount ?? "",
                    onChange: (w) => D(g.id, { maxCharacterCount: z(w.target.value) })
                  }
                )
              ] }),
              g.zoneType === "Image" && /* @__PURE__ */ A("label", { children: [
                "Aspect ratio lock",
                /* @__PURE__ */ d(
                  "input",
                  {
                    placeholder: "e.g. 1:1",
                    value: g.aspectRatioLock ?? "",
                    onChange: (w) => {
                      const x = w.target.value.trim();
                      D(g.id, { aspectRatioLock: x || void 0 });
                    }
                  }
                )
              ] }),
              g.zoneType === "HTML" && /* @__PURE__ */ A(We, { children: [
                /* @__PURE__ */ A("label", { children: [
                  "Default HTML content",
                  /* @__PURE__ */ d(
                    "textarea",
                    {
                      value: g.htmlDefaultContent ?? "",
                      onChange: (w) => D(g.id, { htmlDefaultContent: w.target.value })
                    }
                  )
                ] }),
                /* @__PURE__ */ A("label", { className: "checkbox-label", children: [
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "checkbox",
                      checked: g.htmlAllowUserOverride ?? !1,
                      onChange: (w) => D(g.id, { htmlAllowUserOverride: w.target.checked })
                    }
                  ),
                  "Allow end user to edit this HTML zone"
                ] })
              ] }),
              sa(o.channelType) && /* @__PURE__ */ A("div", { className: "position-fields", children: [
                /* @__PURE__ */ A("label", { children: [
                  "X",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: g.positionX ?? "",
                      onChange: (w) => D(g.id, { positionX: z(w.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ A("label", { children: [
                  "Y",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: g.positionY ?? "",
                      onChange: (w) => D(g.id, { positionY: z(w.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ A("label", { children: [
                  "Width",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: g.zoneWidth ?? "",
                      onChange: (w) => D(g.id, { zoneWidth: z(w.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ A("label", { children: [
                  "Height",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: g.zoneHeight ?? "",
                      onChange: (w) => D(g.id, { zoneHeight: z(w.target.value) })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "zone-layout-fields asset-zone-layout-fields", children: /* @__PURE__ */ A("div", { className: "asset-zone-layout-grid", children: [
                /* @__PURE__ */ A("label", { children: [
                  "Alignment",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: g.contentAlignment ?? Lr,
                      onChange: (w) => D(g.id, {
                        contentAlignment: w.target.value
                      }),
                      children: Zv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                    }
                  )
                ] }),
                /* @__PURE__ */ A("label", { children: [
                  "Offset (px)",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      value: g.offsetPx ?? 0,
                      onChange: (w) => D(g.id, { offsetPx: Math.max(0, Number(w.target.value) || 0) })
                    }
                  )
                ] }),
                /* @__PURE__ */ A("label", { children: [
                  "Direction",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: g.offsetDirection ?? Il,
                      onChange: (w) => D(g.id, {
                        offsetDirection: w.target.value
                      }),
                      children: Wv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                    }
                  )
                ] }),
                /* @__PURE__ */ A("label", { children: [
                  "Sort order",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      value: g.sortOrder ?? 0,
                      onChange: (w) => D(g.id, { sortOrder: Math.max(0, Number(w.target.value) || 0) })
                    }
                  )
                ] })
              ] }) })
            ] }, `${g.id}-${g.zoneType}`),
            !sa(o.channelType) && /* @__PURE__ */ d("p", { className: "zone-sort-hint", children: "You can also drag zones in the list to reorder." }),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-remove", onClick: () => Re(g.id), children: "Remove zone" })
          ] }) : /* @__PURE__ */ d("p", { className: "no-zone-selected", children: "Select a zone to edit its properties, or add a new one." }) })
        ] }),
        /* @__PURE__ */ d("div", { className: "template-admin-structure-actions", children: /* @__PURE__ */ d(
          "p",
          {
            className: `template-admin-autosave-status${l === "error" ? " template-admin-autosave-status-error" : l === "saved" ? " template-admin-autosave-status-saved" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: $
          }
        ) })
      ] }),
      preview: /* @__PURE__ */ d(
        Ff,
        {
          template: o,
          layoutMode: sa(o.channelType) ? "canvas" : "stacked",
          onDimensionsChange: R
        }
      )
    }
  );
}
function $P({ template: e, onDuplicated: t }) {
  const n = KC(e.channelType), [r, o] = E.useState(n[0] ?? "Social"), [i, s] = E.useState(`${e.templateName} (${n[0] ?? "Social"})`), [a, l] = E.useState(!1), [c, f] = E.useState(null), [u, p] = E.useState(null);
  if (n.length === 0)
    return null;
  const v = (T) => {
    o(T), s(`${e.templateName} (${T})`);
  }, k = async () => {
    l(!0), p(null), f(null);
    try {
      const T = await re.duplicateTemplate(e.id, r, i);
      f(
        `Created "${T.templateName}". Open Asset builder and choose it from the template dropdown.`
      ), t == null || t(T);
    } catch (T) {
      p(
        T instanceof Error ? T.message : "Could not duplicate template."
      );
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ A("div", { className: "template-duplicate-panel", children: [
    /* @__PURE__ */ d("h4", { children: "Duplicate template" }),
    /* @__PURE__ */ d("p", { className: "template-duplicate-hint", children: "Copy this template's zones into a new format. The new template is linked to the same brand kit and appears in the Asset builder template list." }),
    /* @__PURE__ */ A("label", { children: [
      "New template name",
      /* @__PURE__ */ d(
        "input",
        {
          value: i,
          onChange: (T) => s(T.target.value),
          placeholder: `${e.templateName} (${r})`
        }
      )
    ] }),
    /* @__PURE__ */ A("label", { children: [
      "Copy to format",
      /* @__PURE__ */ d(
        "select",
        {
          value: r,
          onChange: (T) => v(T.target.value),
          children: n.map((T) => /* @__PURE__ */ d("option", { value: T, children: T }, T))
        }
      )
    ] }),
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "template-duplicate-button",
        onClick: () => void k(),
        disabled: a || !i.trim(),
        children: `Duplicate as ${r}`
      }
    ),
    /* @__PURE__ */ d(Ro, { active: a, className: "template-duplicate-saving" }),
    c && /* @__PURE__ */ d("p", { className: "template-duplicate-message", children: c }),
    u && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-duplicate-error", children: u })
  ] });
}
function IP({
  template: e,
  onTemplateSaved: t,
  onTemplatesChanged: n,
  figmaImportApiUrl: r,
  figmaImportApiToken: o
}) {
  const [i, s] = E.useState(null);
  return /* @__PURE__ */ A("div", { className: "template-setup-panel", children: [
    /* @__PURE__ */ A("details", { className: "template-setup-tools", children: [
      /* @__PURE__ */ d("summary", { children: "Import and duplicate" }),
      /* @__PURE__ */ A("div", { className: "template-setup-tools-body", children: [
        /* @__PURE__ */ d(
          NP,
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
          $P,
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
      OP,
      {
        template: e,
        onSaved: t,
        pendingFigmaImport: i,
        onPendingFigmaImportApplied: () => s(null)
      }
    )
  ] });
}
function DP({
  client: e,
  entity: t,
  options: n,
  config: r,
  contentHubApi: o,
  searchIdentifier: i,
  selectionPoolIdentifier: s
}) {
  const [a, l] = E.useState(null), [c, f] = E.useState(null), [u, p] = E.useState(null), [v, k] = E.useState(!0), [T, _] = E.useState(null), [h, m] = E.useState("asset"), [g, b] = E.useState(0), [C, N] = E.useState(!1), [S, L] = E.useState(null), U = (w) => {
    m(w), !(w !== "asset" || !(c != null && c.id)) && re.getTemplate(c.id).then((x) => f(x)).catch((x) => {
      vn(
        "template reload",
        x,
        `Could not refresh template ${c.id} when switching to the asset tab.`
      );
    });
  };
  E.useEffect(() => {
    QC(e ?? null);
  }, [e]), E.useEffect(() => {
    let w = !1;
    async function x() {
      const j = await Qb(
        e,
        n ?? (e == null ? void 0 : e.options),
        t,
        r
      );
      w || (l(j), j.allowTemplateZoneEditing && Z("allowTemplateZoneEditing", "Template zone editing enabled from Configuration"));
    }
    return x(), () => {
      w = !0;
    };
  }, [e, r, t, n]), E.useEffect(() => {
    a != null && a.contentHubProxyBase && qC(a.contentHubProxyBase);
  }, [a == null ? void 0 : a.contentHubProxyBase]), E.useEffect(() => {
    eb(a == null ? void 0 : a.searchComponentId);
  }, [a == null ? void 0 : a.searchComponentId]), E.useEffect(() => {
    if (!a)
      return;
    const w = a;
    let x = !1;
    async function j() {
      k(!0), _(null), SE();
      const Q = w.templateId || (w.builderMode === "admin" ? w.marketingAssetId : void 0);
      if (!Q) {
        const V = w.marketingAssetId ? PE(t, r) : Qn();
        vn("templateId", V), _(V), k(!1);
        return;
      }
      if (w.builderMode !== "admin" && !w.marketingAssetId) {
        const V = Qn();
        vn("marketingAssetId", V), _(V), k(!1);
        return;
      }
      Z("templateId", `Using template ${Q}`), w.marketingAssetId && Z("marketingAssetId", `Using marketing asset ${w.marketingAssetId}`);
      try {
        const V = await re.getTemplate(Q);
        if (x)
          return;
        f(V);
        const $e = qm(w, V.channelType);
        if ($e === "admin") {
          p(null), Zm({
            builderMode: $e,
            templateId: V.id,
            templateName: V.templateName,
            marketingAssetId: w.marketingAssetId,
            brandKitId: w.brandKitId ?? V.brandKitId,
            channelType: V.channelType,
            zoneCount: V.zones.length
          });
          return;
        }
        if (!w.marketingAssetId) {
          const Be = Qn();
          vn("marketingAssetId", Be), _(Be);
          return;
        }
        const be = await re.getMarketingAsset(w.marketingAssetId);
        if (x)
          return;
        p(be);
        const Ne = w.brandKitId ?? V.brandKitId;
        Zm({
          builderMode: $e,
          templateId: V.id,
          templateName: V.templateName,
          marketingAssetId: be.id,
          brandKitId: Ne,
          channelType: V.channelType,
          zoneCount: V.zones.length,
          zoneValueCount: be.zoneValues.length
        });
      } catch (V) {
        if (x)
          return;
        vn("load", V, "Marketing builder could not load required entities."), _(V instanceof Error ? V.message : "Failed to load marketing builder data.");
      } finally {
        x || k(!1);
      }
    }
    return j(), () => {
      x = !0;
    };
  }, [r, t, a]);
  const R = qm(a ?? {}, c == null ? void 0 : c.channelType), D = (a == null ? void 0 : a.brandKitId) ?? (c == null ? void 0 : c.brandKitId), z = (a == null ? void 0 : a.userHasOverridePermission) ?? !1, Y = i ?? (a == null ? void 0 : a.searchIdentifier), Re = s ?? (a == null ? void 0 : a.selectionPoolIdentifier), qe = {
    searchIdentifier: Y,
    selectionPoolIdentifier: Re,
    search: o == null ? void 0 : o.search,
    selection: o == null ? void 0 : o.selection,
    notifier: o == null ? void 0 : o.notifier
  };
  E.useEffect(() => {
    c && c.zones.length === 0 && m("template");
  }, [c == null ? void 0 : c.id, c == null ? void 0 : c.zones.length]);
  const Ee = () => {
    b((w) => w + 1);
  }, W = async (w) => {
    if (f(w), a && l({ ...a, templateId: w.id }), u) {
      const x = await re.getMarketingAsset(u.id);
      p(x);
    }
    Ee();
  }, $ = async () => {
    if (c) {
      N(!0), L(null);
      try {
        const w = await fP(
          c,
          a == null ? void 0 : a.designerDocumentProperty
        );
        f(w), Ee();
      } catch (w) {
        L(
          w instanceof Error ? w.message : "Could not create canvas template."
        );
      } finally {
        N(!1);
      }
    }
  }, O = pP(c);
  return !a || v ? /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading marketing builder..." }) : T ? /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: T }) : c ? D ? /* @__PURE__ */ d(Jb, { value: qe, children: /* @__PURE__ */ d(Xb, { brandKitId: D, children: /* @__PURE__ */ A("div", { className: "marketing-builder", children: [
    (R === "admin" || h === "template") && /* @__PURE__ */ A(We, { children: [
      R !== "admin" && /* @__PURE__ */ d(
        Bs,
        {
          activeTab: h,
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: U
        }
      ),
      R === "admin" && /* @__PURE__ */ d(
        Bs,
        {
          activeTab: "template",
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: () => {
          },
          showAssetTab: !1
        }
      ),
      O ? /* @__PURE__ */ d(
        dP,
        {
          template: c,
          designerDocumentProperty: a.designerDocumentProperty,
          onTemplateSaved: (w) => {
            f(w), Ee();
          }
        }
      ) : /* @__PURE__ */ A(We, { children: [
        /* @__PURE__ */ A("div", { className: "designer-create-banner", children: [
          /* @__PURE__ */ d("p", { children: "This template uses the zone builder. You can also create a canvas designer template (stored as designerDocumentJson on EPAM.Template)." }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "chd-btn",
              disabled: C,
              onClick: () => void $(),
              children: C ? "Creating…" : "Create canvas template"
            }
          ),
          S ? /* @__PURE__ */ d("div", { className: "marketing-builder-error", children: S }) : null
        ] }),
        /* @__PURE__ */ d(
          IP,
          {
            template: c,
            figmaImportApiUrl: a.figmaImportApiUrl,
            figmaImportApiToken: a.figmaImportApiToken,
            onTemplateSaved: (w) => {
              f(w), Ee();
            },
            onTemplatesChanged: Ee
          }
        )
      ] })
    ] }),
    R === "social" && u && h === "asset" && /* @__PURE__ */ A(We, { children: [
      /* @__PURE__ */ d(
        Bs,
        {
          activeTab: h,
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: U
        }
      ),
      /* @__PURE__ */ d(
        Xc,
        {
          brandKitId: D,
          currentTemplateId: c.id,
          marketingAssetId: u.id,
          refreshKey: g,
          onTemplateChange: W
        }
      ),
      O ? /* @__PURE__ */ d(
        _h,
        {
          template: c,
          marketingAsset: u,
          designerDocumentProperty: a.designerDocumentProperty,
          designerInstanceProperty: a.designerInstanceProperty,
          onSaved: p
        }
      ) : /* @__PURE__ */ d(
        yP,
        {
          template: c,
          marketingAsset: u,
          userHasOverridePermission: z,
          html2canvasCdnUrl: a.html2canvasCdnUrl
        }
      )
    ] }),
    R === "social" && !u && /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Marketing asset could not be loaded for the social builder." }),
    R === "email" && u && h === "asset" && /* @__PURE__ */ A(We, { children: [
      /* @__PURE__ */ d(
        Bs,
        {
          activeTab: h,
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: U
        }
      ),
      O ? /* @__PURE__ */ A(We, { children: [
        /* @__PURE__ */ d(
          Xc,
          {
            brandKitId: D,
            currentTemplateId: c.id,
            marketingAssetId: u.id,
            refreshKey: g,
            onTemplateChange: W
          }
        ),
        /* @__PURE__ */ d(
          _h,
          {
            template: c,
            marketingAsset: u,
            designerDocumentProperty: a.designerDocumentProperty,
            designerInstanceProperty: a.designerInstanceProperty,
            onSaved: p
          }
        )
      ] }) : c.zones.length > 0 ? /* @__PURE__ */ A(We, { children: [
        /* @__PURE__ */ d(
          Xc,
          {
            brandKitId: D,
            currentTemplateId: c.id,
            marketingAssetId: u.id,
            refreshKey: g,
            onTemplateChange: W
          }
        ),
        /* @__PURE__ */ d(
          TN,
          {
            template: c,
            marketingAsset: u,
            userHasOverridePermission: z,
            renderEmailApiUrl: a.renderEmailApiUrl
          }
        )
      ] }) : /* @__PURE__ */ A("div", { className: "marketing-builder-status template-empty-message", children: [
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
function HP(e) {
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
function FP(e) {
  const t = Zy(e);
  return ae("startup", "CHMarketingBuilder initialised"), {
    async render(n) {
      var i, s, a;
      const r = n.config ? typeof n.config == "string" ? "json-string" : Object.keys(n.config).join(", ") || "(empty object)" : "(none)";
      ae(
        "context",
        `entityId=${((s = (i = n.entity) == null ? void 0 : i.systemProperties) == null ? void 0 : s.id) ?? ((a = n.options) == null ? void 0 : a.entityId) ?? "n/a"}, config=${r}`
      );
      const o = HP(n.config);
      t.render(
        /* @__PURE__ */ d(yE, { theme: n.theme, children: /* @__PURE__ */ d(
          DP,
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
  FP as default
};
