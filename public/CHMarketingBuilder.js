(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.marketing-builder{--mb-primary: #00a651;--mb-primary-hover: #1db86a;--mb-primary-active: #008a44;--mb-primary-soft: #e6f7ed;--mb-primary-border: #8fd4a8;--mb-accent: #00a651;--mb-text: #000000;--mb-muted: #6b716e;--mb-background: #f4f7f5;--mb-surface: #ffffff;--mb-border: #e2e8e4;--mb-font: Arial, Helvetica, sans-serif;font-family:var(--mb-font);color:var(--mb-text);display:flex;flex-direction:column;min-height:calc(100dvh - 12px);height:100%}.marketing-builder .chd-root{flex:1 1 auto;min-height:0;height:auto}.marketing-builder-status{padding:16px;font-size:14px;color:#555}.marketing-builder-error{color:#b71c1c}.email-builder-editor{max-width:none;margin:0;border:none;padding:0;background:transparent}.builder-split{display:flex;gap:16px;align-items:stretch;min-height:72vh}.builder-split-panel{flex:1 1 50%;min-width:0;display:flex;flex-direction:column;border:1px solid #e0e0e0;border-radius:6px;background:#fff;overflow:hidden}.builder-split-heading{margin:0;padding:12px 16px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;border-bottom:1px solid #ececec;background:#fafafa}.builder-split-structure-body,.builder-split-preview-body{flex:1;min-height:0;display:flex;flex-direction:column}.builder-split-structure-body{overflow:auto;padding:16px}.builder-split-preview-body{overflow:auto;padding:16px;background:var(--mb-background)}.template-admin-structure{display:flex;flex-direction:column;gap:16px;min-height:100%}.template-admin-structure-grid{display:grid;grid-template-columns:minmax(180px,220px) minmax(0,1fr);gap:16px;align-items:start}.template-admin-structure-actions{margin-top:auto;padding-top:12px;border-top:1px solid #ececec}.template-admin-autosave-status{margin:0;font-size:12px;color:#666}.template-admin-autosave-status-saved{color:#2e7d32}.template-admin-autosave-status:not(.template-admin-autosave-status-saved):not(.template-admin-autosave-status-error){color:var(--mb-primary, #00755f);font-style:italic}.template-admin-autosave-status-error{color:#c62828}.saving-status-message{margin:8px 0 0;font-size:12px;line-height:1.45;color:var(--mb-primary, #00755f);font-style:italic;animation:saving-status-fade .35s ease}@keyframes saving-status-fade{0%{opacity:0}to{opacity:1}}.template-properties-form{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-properties-form h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-properties-form label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-properties-form input,.template-properties-form select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-properties-meta{margin:0;font-size:11px;color:#888}.template-dimensions-section{margin-top:4px;padding-top:12px;border-top:1px solid #ececec}.template-dimensions-heading{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:10px}.template-dimensions-heading h5{margin:0;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#666}.template-dimensions-summary{font-size:11px;font-weight:600;color:var(--mb-primary, #00755f);white-space:nowrap}.template-dimension-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.template-dimensions-hint{margin:0 0 4px;font-size:11px;line-height:1.4;color:#888}.live-preview-canvas-wrap,.live-preview-email-wrap{display:flex;flex-direction:column;gap:8px;height:100%}.live-preview-resize-frame{position:relative;flex:0 0 auto;max-width:100%;box-sizing:content-box}.live-preview-resize-content{width:100%;height:100%;overflow:hidden}.live-preview-resize-content .live-preview-canvas,.live-preview-resize-content .email-builder-preview-frame{width:100%!important;height:100%!important;min-height:0;margin:0;display:block}.live-preview-resize-handle{position:absolute;z-index:2;padding:0;border:none;background:var(--mb-primary);opacity:.35;touch-action:none;-webkit-user-select:none;user-select:none}.live-preview-resize-handle:hover,.live-preview-resize-handle:focus-visible{opacity:.85}.live-preview-resize-handle-right{top:0;right:-8px;width:8px;height:100%;cursor:ew-resize;border-radius:0 4px 4px 0}.live-preview-resize-handle-bottom{left:0;bottom:-8px;width:100%;height:8px;cursor:ns-resize;border-radius:0 0 4px 4px}.live-preview-dimensions-badge{margin:0;align-self:center;padding:4px 10px;border-radius:999px;background:var(--mb-primary-soft, #e4f7f4);color:var(--mb-primary, #00755f);font-size:11px;font-weight:600;letter-spacing:.02em}.template-admin-preview-canvas-fill{flex:1;min-height:100%;margin:0}.live-preview-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text,.live-preview-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text{font-size:16px;line-height:1.5}.live-preview-canvas .zone-text-empty:empty:before,.live-preview-canvas .zone-heading.zone-text-empty:empty:before{color:var(--mb-muted, #717171);font-style:italic}.template-admin-preview-empty{margin:0;padding:24px;text-align:center;color:#888;font-size:13px}.email-builder-structure{display:flex;flex-direction:column;gap:12px}.email-builder-override-structure{display:flex;flex-direction:column;gap:12px;min-height:100%}.email-builder-override-structure .raw-html-editor{flex:1;min-height:420px}.email-builder-zone-row{margin-bottom:12px}.zone-stacked{min-height:48px}.zone-stacked.zone-image{min-height:180px}.asset-zone-structure-content .zone-logo{padding:8px 0}.zone-logo-placeholder{display:inline-flex;align-items:center;justify-content:center;min-width:120px;min-height:48px;padding:10px 20px;border:1px solid var(--mb-border);border-radius:4px;background:var(--mb-surface);color:var(--mb-muted);font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.logo-picker{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.logo-picker-compact{gap:8px}.logo-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.logo-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.logo-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.logo-picker-preview{display:flex;align-items:center;justify-content:center;min-height:56px;padding:8px;border-radius:4px;background:#f7f7f7}.logo-picker-image{display:block;max-width:100%;max-height:48px;width:auto;height:auto;object-fit:contain}.image-picker{display:flex;flex-direction:column;gap:10px}.image-picker-compact .image-picker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.image-picker-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.image-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.image-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.image-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.image-picker-preview{display:flex;align-items:center;justify-content:center;min-height:72px;padding:8px;border-radius:4px;background:#f7f7f7;overflow:hidden}.image-picker-image{max-width:100%;max-height:72px;object-fit:contain}.image-picker-label{font-size:11px;color:#424242;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.image-picker-hint,.image-picker-loading,.image-picker-error{font-size:12px;color:#666}.image-picker-error{color:#c62828}.image-picker-hint,.image-picker-loading{margin:0 0 10px;line-height:1.45}.image-picker-selected-preview{margin-bottom:10px}.image-picker-selected-image{display:block;max-width:100%;max-height:160px;border-radius:6px;border:1px solid #ddd;object-fit:contain}.image-picker-footer{display:flex;justify-content:flex-start}.image-picker-url-toggle,.image-picker-url-apply{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:6px 10px;font-size:12px;cursor:pointer}.image-picker-url-form{display:flex;gap:8px}.image-picker-url-input{flex:1;padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection{display:flex;flex-direction:column;gap:12px;padding:12px;border:1px solid var(--mb-border, #e8e8e8);border-radius:8px;background:#fafafa}.template-zone-asset-collection-title{margin:0;font-size:14px}.template-zone-asset-collection-intro,.template-zone-asset-collection-hint,.template-zone-asset-collection-empty,.template-zone-asset-collection-error{margin:0;font-size:12px;color:#666;line-height:1.45}.template-zone-asset-collection-error{color:#c62828}.template-zone-asset-collection-field{display:flex;flex-direction:column;gap:6px;font-size:12px}.template-zone-asset-collection-field input{padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection-section{display:flex;flex-direction:column;gap:8px}.template-zone-asset-collection-section-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.template-zone-asset-collection-section-header h5{margin:0;font-size:13px}.template-zone-asset-collection-status{font-size:11px;color:#888}.template-zone-asset-collection-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px}.template-zone-asset-card{display:flex;flex-direction:column;gap:6px;padding:8px;border:1px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff}.template-zone-asset-card img{width:100%;height:72px;object-fit:cover;border-radius:4px;background:#f2f2f2}.template-zone-asset-card span{font-size:11px;color:#424242;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.template-zone-asset-add,.template-zone-asset-remove{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:5px 8px;font-size:11px;cursor:pointer}.template-zone-asset-add:disabled{opacity:.55;cursor:not-allowed}.zone-image-placeholder{padding:16px;border:1px dashed #ccc;border-radius:6px;color:#888;font-size:12px;text-align:center}.logo-picker-label{font-size:11px;font-weight:600;color:var(--mb-text, #18181b)}.zone-stacked-logo{padding:8px 0;text-align:center}.zone-stacked.zone-text{font-size:18px;line-height:1.4;padding:8px 0}.zone-stacked.zone-heading{line-height:1.25;padding:8px 0}.zone-heading[data-heading-level=H1]{font-size:2rem}.zone-heading[data-heading-level=H2]{font-size:1.75rem}.zone-heading[data-heading-level=H3]{font-size:1.5rem}.zone-heading[data-heading-level=H4]{font-size:1.25rem}.zone-heading[data-heading-level=H5]{font-size:1.125rem}.zone-heading[data-heading-level=H6]{font-size:1rem}.zone-text-empty:empty:before{content:attr(data-placeholder);color:#999}.zone-stacked.zone-cta{padding:12px 0}.template-setup-panel{display:flex;flex-direction:column;gap:16px}.template-setup-tools{border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa;padding:0}.template-setup-tools>summary{cursor:pointer;list-style:none;padding:12px 16px;font-size:14px;font-weight:600;color:var(--mb-text)}.template-setup-tools>summary::-webkit-details-marker{display:none}.template-setup-tools>summary:before{content:"▸";display:inline-block;margin-right:8px;color:#57606a}.template-setup-tools[open]>summary:before{content:"▾"}.template-setup-tools-body{display:flex;flex-direction:column;gap:12px;padding:0 16px 16px}.template-setup-tools .figma-import-panel,.template-setup-tools .template-duplicate-panel{margin-bottom:0}.figma-import-panel{margin-bottom:16px;padding:14px 16px;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa}.figma-import-panel h4{margin:0 0 8px;font-size:14px;font-weight:600}.figma-import-hint{margin:0 0 12px;font-size:12px;color:#57606a;line-height:1.45}.figma-import-hint code{font-size:11px}.figma-import-panel label{display:flex;flex-direction:column;gap:4px;margin-bottom:10px;font-size:12px;font-weight:500}.figma-import-panel input[type=text],.figma-import-panel input:not([type]){padding:6px 8px;border:1px solid #d0d7de;border-radius:4px;font-size:13px}.figma-import-button{margin-right:8px;margin-bottom:8px;padding:6px 12px;border:1px solid #d0d7de;border-radius:4px;background:#fff;font-size:13px;cursor:pointer}.figma-import-button:disabled{opacity:.55;cursor:not-allowed}.figma-import-button-primary{background:#1565c0;border-color:#1565c0;color:#fff}.figma-import-preview{margin-top:10px;padding-top:10px;border-top:1px solid #d8dee4}.figma-import-preview-meta{margin:0 0 8px;font-size:12px}.figma-import-zone-list{margin:0 0 10px;padding-left:18px;font-size:12px;line-height:1.5}.figma-import-warning{margin:0 0 8px;font-size:12px;color:#9a3412}.figma-import-checkbox{flex-direction:row!important;align-items:center;gap:8px!important;font-weight:400!important}.figma-import-checkbox input{margin:0}.figma-import-message{margin:8px 0 0;font-size:12px;color:#1a7f37}.figma-import-error{margin-top:8px}.figma-import-saving{margin:8px 0}.template-duplicate-panel{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-duplicate-panel h4{margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-duplicate-hint{margin:0 0 12px;font-size:12px;color:#666;line-height:1.45}.template-duplicate-panel label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-duplicate-panel input,.template-duplicate-panel select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-duplicate-button{margin-top:4px;background:var(--mb-primary, #00755f);color:#fff;border:none;padding:8px 14px;border-radius:4px;cursor:pointer;font-size:13px}.template-duplicate-button:disabled{opacity:.6;cursor:not-allowed}.template-duplicate-message{margin:10px 0 0;font-size:12px;color:#2e7d32;line-height:1.4}.template-duplicate-error{margin:8px 0 0;font-size:12px}.template-selector{margin-bottom:16px;padding:12px;border:1px solid #e8e8e8;border-radius:6px;background:#fcfcfc}.template-selector-label{display:block;margin:0;font-size:12px;color:#555}.template-selector-label select{display:block;width:100%;margin-top:6px;padding:8px 10px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px;background:#fff}.template-selector-hint,.template-selector-status{margin:8px 0 0;font-size:12px;color:#666;line-height:1.4}.template-selector-error{margin:8px 0 0;font-size:12px}.marketing-builder-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;padding:0 4px}.marketing-builder-toolbar-main{display:flex;align-items:center;gap:12px;min-width:0}.marketing-builder-editing-template{font-size:14px;font-weight:600;color:var(--mb-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.marketing-builder-tab-bar{flex-wrap:wrap}.marketing-builder-tabs{display:inline-flex;border:1px solid #d0d0d0;border-radius:6px;overflow:hidden;background:#fff}.marketing-builder-tab{border:none;background:transparent;color:#555;padding:8px 16px;cursor:pointer;font-size:14px;font-weight:500}.marketing-builder-tab+.marketing-builder-tab{border-left:1px solid #d0d0d0}.marketing-builder-tab:hover{background:#f5f5f5}.marketing-builder-tab-active{background:var(--mb-primary);color:#fff}.marketing-builder-tab-active:hover{background:var(--mb-primary-active)}.template-zone-edit-toggle{background:#fff;color:var(--mb-primary);border:1px solid var(--mb-primary);padding:8px 16px;border-radius:4px;cursor:pointer;font-size:14px;font-weight:500}.template-zone-edit-toggle:hover{background:var(--mb-primary-soft)}.template-zone-edit-toggle-active{background:var(--mb-primary);color:#fff}.template-zone-edit-toggle-active:hover{background:var(--mb-primary-active)}.marketing-builder-toolbar-meta{font-size:13px;color:#666}.template-empty-message{border:1px dashed #d0d0d0;border-radius:6px;background:#fafafa;text-align:center}.template-setup-message code{font-size:12px;background:#f5f5f5;padding:2px 4px;border-radius:3px}.email-builder-error{margin-top:8px;padding:8px 12px}.email-builder-actions{display:flex;gap:12px;margin-top:8px;justify-content:flex-end;flex-wrap:wrap}.email-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.email-builder-save:disabled{opacity:.6;cursor:not-allowed}.email-builder-preview{max-width:600px;margin:24px auto 0}.email-builder-preview-label{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;margin-bottom:8px}.email-builder-preview-frame{width:100%;height:500px;border:1px solid #e0e0e0}.email-builder-preview-frame-fill{width:100%;height:100%;min-height:520px;border:1px solid #e0e0e0;background:#fff}.raw-html-editor{width:100%;min-height:400px;font-family:monospace;font-size:13px;padding:12px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.social-builder-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);margin:0 auto;overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text,.social-builder-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text{font-size:16px;line-height:1.5}.asset-zone-structure-content .zone-text,.asset-zone-structure-content .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.asset-zone-structure-content .zone-text{font-size:16px;line-height:1.5}.social-builder-canvas-fill{width:100%;max-width:100%}.social-builder-structure{display:flex;flex-direction:column;gap:12px}.social-builder-error{margin-top:8px;padding:8px 12px}.asset-structure-panel{display:flex;flex-direction:column;gap:12px}.asset-structure-panel-hint{margin:0;font-size:12px;color:#777;line-height:1.5}.asset-zone-structure-warning{margin:0;padding:8px 10px;font-size:12px;line-height:1.4;color:#9a3412;background:#fff7ed;border:1px solid #fed7aa;border-radius:4px}.asset-zone-structure-key-hint{margin:0 0 8px;font-size:12px;color:#777}.asset-zone-structure-key-hint code{font-size:11px}.asset-zone-structure-list{display:flex;flex-direction:column;gap:8px}.asset-zone-structure-row{border:1px solid #e4e4e4;border-radius:6px;overflow:hidden;background:#fff}.asset-zone-structure-header{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;border:none;background:#fafafa;cursor:pointer;text-align:left}.asset-zone-structure-header:hover{background:#f3f3f3}.asset-zone-structure-title{font-weight:600;font-size:13px;color:#333}.asset-zone-structure-type{font-size:11px;color:#888}.asset-zone-structure-chevron{margin-left:auto;color:#888;font-size:12px}.asset-zone-structure-body{padding:12px;border-top:1px solid #ececec;display:flex;flex-direction:column;gap:12px}.asset-zone-structure-content-label{margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#888}.asset-zone-structure-content .asset-zone-layout-fields{margin-top:12px;padding-top:12px;border-top:1px solid #ececec}.asset-structure-panel .asset-zone-layout-grid,.template-admin-properties .asset-zone-layout-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.asset-zone-layout-fields{padding-top:4px;border-top:1px solid #ececec}.asset-zone-layout-fields label{display:block;margin-bottom:0;font-size:11px;color:#666}.asset-zone-layout-fields input,.asset-zone-layout-fields select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:12px}.asset-zone-layout-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.asset-zone-layout-grid-position{margin-top:8px;grid-template-columns:repeat(4,minmax(0,1fr))}.asset-layout-json-preview{border:1px dashed #d0d0d0;border-radius:6px;padding:8px 12px;background:#fafafa}.asset-layout-json-preview summary{cursor:pointer;font-size:12px;color:#666}.asset-layout-json-preview pre{margin:10px 0 0;padding:10px;background:#fff;border:1px solid #ececec;border-radius:4px;font-size:11px;line-height:1.4;overflow:auto;max-height:220px}.social-builder-actions{display:flex;gap:12px;margin-top:16px;justify-content:flex-end;flex-wrap:wrap}.social-builder-actions .saving-status-message,.email-builder-actions .saving-status-message{flex-basis:100%;text-align:right;margin-top:0}.social-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.social-builder-save:disabled{opacity:.6;cursor:not-allowed}.override-banner{background:#fff4e5;border:1px solid #ffb74d;color:#7a4a00;padding:8px 12px;border-radius:4px;font-size:13px;margin-bottom:12px}.template-admin-zone-list,.template-admin-properties{border:1px solid #e0e0e0;border-radius:6px;padding:12px}.template-admin-zone-list h4,.template-admin-properties h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.zone-list-hint,.zone-sort-hint{margin:-4px 0 10px;font-size:11px;color:#888}.zone-layout-fields{margin:12px 0 0;padding-top:12px;border-top:1px solid #ececec}.zone-layout-fields h5{display:none}.zone-layout-center .zone-image-preview,.zone-layout-center .zone-logo-placeholder{display:block;margin-left:auto;margin-right:auto}.zone-layout-right .zone-image-preview,.zone-layout-right .zone-logo-placeholder{display:block;margin-left:auto;margin-right:0}.zone-layout-center .zone-cta-button,.zone-layout-right .zone-cta-button{display:inline-block}.zone-cta-button{cursor:text}.zone-image-collection-hint{margin:-4px 0 10px;font-size:11px;color:#888;line-height:1.4}.zone-list-item{display:flex;align-items:flex-start;gap:8px;width:100%;text-align:left;background:none;border:1px solid transparent;border-radius:4px;padding:8px;margin-bottom:4px;cursor:pointer;-webkit-user-select:none;user-select:none}.zone-list-delete{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin-top:1px;padding:0;border:none;border-radius:4px;background:transparent;color:#999;cursor:pointer}.zone-list-delete:hover{background:#ffebee;color:#d32f2f}.zone-list-delete:focus-visible{outline:2px solid var(--mb-primary);outline-offset:1px}.zone-list-item:active{cursor:grabbing}.zone-list-item-content{display:flex;flex-direction:column;align-items:flex-start;min-width:0;flex:1}.zone-list-drag-handle{color:#aaa;font-size:12px;line-height:1;padding-top:2px;cursor:grab}.zone-list-item-dragging{opacity:.45}.zone-list-item-drag-over{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item:hover{background:#f5f5f5}.zone-list-item-active{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item-type{font-size:11px;color:#888}.zone-list-item-lock{font-size:10px;color:#d32f2f;text-transform:uppercase}.zone-list-add{width:100%;border:1px dashed #b0b0b0;background:none;padding:8px;border-radius:4px;cursor:pointer;color:#555;margin-bottom:4px}.zone-list-starter{border-color:var(--mb-primary);color:var(--mb-primary)}.template-admin-properties label{display:block;margin-bottom:10px;font-size:12px;color:#555}.zone-image-selected{display:flex;flex-direction:column;gap:8px;width:100%}.zone-image-preview{width:100%;max-height:280px;object-fit:cover;border-radius:4px;border:1px solid #e0e0e0}.social-builder-canvas .zone-image-preview{width:100%;height:100%;max-height:none;object-fit:contain;border-radius:0;border:0}.zone-image-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.zone-image-clear{border:1px solid #d32f2f;background:#fff;color:#d32f2f;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker{position:relative}.asset-picker-compact .asset-picker-trigger{padding:6px 10px;font-size:12px}.asset-picker-mode-tabs{display:flex;gap:4px;margin-bottom:10px}.asset-picker-mode-tab{flex:1;border:1px solid #d0d0d0;background:#fafafa;color:#555;padding:6px 8px;border-radius:4px;cursor:pointer;font-size:12px}.asset-picker-mode-tab-active{border-color:var(--mb-primary);background:var(--mb-primary-soft);color:var(--mb-primary-active)}.asset-picker-url-form label{display:block;margin-bottom:8px;font-size:12px;color:#555}.asset-picker-url-apply{width:100%;border:none;background:var(--mb-primary);color:#fff;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker-url-apply:disabled{opacity:.6;cursor:not-allowed}.asset-picker-loading,.asset-picker-error{font-size:12px;margin-bottom:8px}.asset-picker-error{color:#b71c1c}.template-admin-properties input,.template-admin-properties select,.template-admin-properties textarea{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.checkbox-label{display:flex!important;align-items:center;gap:6px}.checkbox-label input{width:auto!important;margin:0!important}.position-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.zone-remove{background:none;border:1px solid #d32f2f;color:#d32f2f;padding:6px 12px;border-radius:4px;cursor:pointer;margin-top:8px}.no-zone-selected{color:#888;font-size:13px}.template-admin-preview-canvas{border:1px solid #eee;background:#fafafa;margin-bottom:12px;overflow:hidden}.template-admin-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;width:100%;max-width:280px}.template-admin-save:disabled{opacity:.6;cursor:not-allowed}.template-admin-save-error{margin:8px 0 0;font-size:13px}.zone{box-sizing:border-box}.zone-locked{outline:1px dashed transparent}.zone-text{outline:1px dashed transparent;cursor:text}.zone-text:hover{outline-color:#c9c9c9}.zone-text:focus{outline:1px solid var(--mb-primary);outline-offset:2px}.zone-image{background-color:#f5f5f5;display:flex;align-items:center;justify-content:center;overflow:hidden}.zone-cta button{cursor:pointer;font-size:14px}.zone-html-editor{width:100%;min-height:80px;font-family:monospace;font-size:12px;padding:8px;border:1px solid #d0d0d0;border-radius:4px}.zone-html-preview{margin-top:8px;border:1px dashed #d0d0d0;padding:8px}.zone-html-locked{pointer-events:none}.asset-picker-trigger{border:1px dashed #b0b0b0;background:transparent;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px;color:#555}.asset-picker-panel{position:absolute;z-index:10;background:#fff;border:1px solid #d0d0d0;border-radius:6px;box-shadow:0 4px 16px #0000001f;padding:12px;width:320px}.asset-picker-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;display:flex;align-items:center;justify-content:center;padding:24px}.asset-picker-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;border:none;padding:0;background:rgba(0,0,0,.4);cursor:pointer}.asset-picker-panel-overlay{position:relative;z-index:1;width:min(720px,100%);max-height:min(80vh,720px);overflow:auto}.asset-picker-panel-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.asset-picker-close{border:1px solid #d0d0d0;background:#fff;border-radius:4px;padding:4px 10px;cursor:pointer;font-size:12px}.template-allowed-assets .asset-picker{margin-bottom:12px}.asset-picker-search{width:100%;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;margin-bottom:8px}.asset-picker-hint{font-size:12px;color:#888;margin-bottom:8px}.asset-picker-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-height:240px;overflow-y:auto}.asset-picker-panel-overlay .asset-picker-grid{grid-template-columns:repeat(4,1fr);max-height:420px}.asset-picker-thumb{border:none;background:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;font-size:11px}.asset-picker-thumb img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px}.asset-picker-empty{font-size:12px;color:#888;padding:8px}.eject-button{background:transparent;border:1px solid #d32f2f;color:#d32f2f;padding:10px 16px;border-radius:4px;cursor:pointer;font-size:13px}.eject-modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;z-index:100}.eject-modal{background:#fff;border-radius:8px;padding:24px;width:420px;max-width:90vw}.eject-modal h3{margin:0 0 8px;font-size:16px;color:#b71c1c}.eject-modal p{font-size:13px;color:#555;line-height:1.5}.eject-modal textarea{width:100%;min-height:70px;margin:12px 0;padding:8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.eject-modal-actions{display:flex;justify-content:flex-end;gap:8px}.eject-confirm{background:#d32f2f;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer}.eject-confirm:disabled{opacity:.5;cursor:not-allowed}.designer-create-banner{margin:12px 0 16px;padding:12px 14px;border:.5px solid #d3d1c7;border-radius:8px;background:#f8f7f4;display:flex;flex-direction:column;gap:10px;align-items:flex-start}.designer-create-banner p{margin:0;font-size:13px;color:#2c2c2a}.designer-asset-builder{display:flex;flex-direction:column;gap:8px;flex:1 1 auto;min-height:0}.designer-asset-builder .chd-root{flex:1 1 auto;min-height:0;height:auto}.designer-asset-builder-actions{display:flex;align-items:center;gap:10px}.chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:100%;min-height:calc(100dvh - 12px);box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:0;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;min-width:56px;background:#000000;color:#fff;border-radius:4px;padding:5px 10px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-btn--accent{background:var(--chd-accent);border-color:var(--chd-accent);color:#fff}.chd-btn--accent:hover:not(:disabled){background:#1db86a;border-color:#1db86a;color:#fff}.chd-generate{position:relative;display:flex;align-items:center;gap:8px}.chd-generate-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:40;min-width:180px;padding:4px;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 24px #0000001f}.chd-generate-option{display:flex;flex-direction:column;align-items:flex-start;gap:1px;width:100%;border:none;background:transparent;text-align:left;padding:8px 10px;border-radius:6px;cursor:pointer;color:var(--chd-text);font:inherit}.chd-generate-option span{font-size:11px;color:var(--chd-muted)}.chd-generate-option:hover:not(:disabled){background:#e8f6ee}.chd-generate-error{font-size:11px;color:#a32d2d;white-space:nowrap}.chd-artboard--capturing{overflow:hidden}.chd-artboard--capturing .chd-selection-box,.chd-artboard--capturing .chd-selection-outline,.chd-artboard--capturing .chd-handle,.chd-artboard--capturing .chd-layer-lock,.chd-artboard--capturing .chd-artboard-page{display:none!important}.chd-toolbar-field{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--chd-muted)}.chd-toolbar-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;max-width:180px}.chd-toolbar-size{font-size:11px;color:var(--chd-muted);white-space:nowrap}.chd-pin-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 8px;margin-top:4px}.chd-field-hint{margin:6px 0 0;font-size:11px;color:var(--chd-muted);line-height:1.35}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layers-panel--admin .chd-layer-list-item{grid-template-columns:auto 1fr auto auto auto}.chd-layer-list-item--dragging{opacity:.45}.chd-layer-list-item--drag-over{outline:1px solid var(--chd-accent);background:#e8f6ee}.chd-layer-drag-handle{color:var(--chd-muted);font-size:11px;line-height:1;padding:0 4px;cursor:grab;-webkit-user-select:none;user-select:none}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{flex-direction:row;align-items:center;gap:8px;color:var(--chd-text)}.chd-field-checkbox input{width:auto}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:linear-gradient(45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,linear-gradient(-45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,#f0eee8;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:visible}.chd-artboard-page{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;box-shadow:0 0 0 1px #00000014}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-lock{position:absolute;left:3px;top:3px;z-index:6;display:flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:4px;background:rgba(255,255,255,.92);border:.5px solid var(--chd-border);color:var(--chd-text);pointer-events:none;box-shadow:0 1px 2px #0000001f}.chd-layer-lock svg{display:block}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function ow(e, t) {
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
function iw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nh = { exports: {} }, Da = {}, Ph = { exports: {} }, J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bi = Symbol.for("react.element"), sw = Symbol.for("react.portal"), aw = Symbol.for("react.fragment"), lw = Symbol.for("react.strict_mode"), cw = Symbol.for("react.profiler"), uw = Symbol.for("react.provider"), dw = Symbol.for("react.context"), fw = Symbol.for("react.forward_ref"), pw = Symbol.for("react.suspense"), mw = Symbol.for("react.memo"), hw = Symbol.for("react.lazy"), cp = Symbol.iterator;
function gw(e) {
  return e === null || typeof e != "object" ? null : (e = cp && e[cp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Lh = Object.assign, _h = {};
function Co(e, t, n) {
  this.props = e, this.context = t, this.refs = _h, this.updater = n || xh;
}
Co.prototype.isReactComponent = {};
Co.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Co.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function zh() {
}
zh.prototype = Co.prototype;
function rd(e, t, n) {
  this.props = e, this.context = t, this.refs = _h, this.updater = n || xh;
}
var od = rd.prototype = new zh();
od.constructor = rd;
Lh(od, Co.prototype);
od.isPureReactComponent = !0;
var up = Array.isArray, Rh = Object.prototype.hasOwnProperty, id = { current: null }, Oh = { key: !0, ref: !0, __self: !0, __source: !0 };
function $h(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Rh.call(t, r) && !Oh.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Bi, type: e, key: i, ref: s, props: o, _owner: id.current };
}
function yw(e, t) {
  return { $$typeof: Bi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function sd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bi;
}
function vw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var dp = /\/+/g;
function tc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vw("" + e.key) : t.toString(36);
}
function Ds(e, t, n, r, o) {
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
          case Bi:
          case sw:
            s = !0;
        }
    }
  if (s)
    return s = e, o = o(s), e = r === "" ? "." + tc(s, 0) : r, up(o) ? (n = "", e != null && (n = e.replace(dp, "$&/") + "/"), Ds(o, t, n, "", function(c) {
      return c;
    })) : o != null && (sd(o) && (o = yw(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(dp, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", up(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + tc(i, a);
      s += Ds(i, t, n, l, o);
    }
  else if (l = gw(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, l = r + tc(i, a++), s += Ds(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function cs(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ds(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function ww(e) {
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
var ut = { current: null }, Hs = { transition: null }, Tw = { ReactCurrentDispatcher: ut, ReactCurrentBatchConfig: Hs, ReactCurrentOwner: id };
function Mh() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = { map: cs, forEach: function(e, t, n) {
  cs(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return cs(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return cs(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!sd(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
J.Component = Co;
J.Fragment = aw;
J.Profiler = cw;
J.PureComponent = rd;
J.StrictMode = lw;
J.Suspense = pw;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tw;
J.act = Mh;
J.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Lh({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = id.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (l in t)
      Rh.call(t, l) && !Oh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
  return { $$typeof: Bi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
J.createContext = function(e) {
  return e = { $$typeof: dw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: uw, _context: e }, e.Consumer = e;
};
J.createElement = $h;
J.createFactory = function(e) {
  var t = $h.bind(null, e);
  return t.type = e, t;
};
J.createRef = function() {
  return { current: null };
};
J.forwardRef = function(e) {
  return { $$typeof: fw, render: e };
};
J.isValidElement = sd;
J.lazy = function(e) {
  return { $$typeof: hw, _payload: { _status: -1, _result: e }, _init: ww };
};
J.memo = function(e, t) {
  return { $$typeof: mw, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function(e) {
  var t = Hs.transition;
  Hs.transition = {};
  try {
    e();
  } finally {
    Hs.transition = t;
  }
};
J.unstable_act = Mh;
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
Ph.exports = J;
var E = Ph.exports;
const Sw = /* @__PURE__ */ iw(E), Kc = /* @__PURE__ */ ow({
  __proto__: null,
  default: Sw
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
var kw = E, Ew = Symbol.for("react.element"), Aw = Symbol.for("react.fragment"), Cw = Object.prototype.hasOwnProperty, bw = kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Nw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ih(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Cw.call(t, r) && !Nw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Ew, type: e, key: i, ref: s, props: o, _owner: bw.current };
}
Da.Fragment = Aw;
Da.jsx = Ih;
Da.jsxs = Ih;
Nh.exports = Da;
var ad = Nh.exports;
const We = ad.Fragment, d = ad.jsx, A = ad.jsxs;
var Dh = { exports: {} }, Pt = {}, Hh = { exports: {} }, Fh = {};
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
  function t(M, $) {
    var w = M.length;
    M.push($);
    e:
      for (; 0 < w; ) {
        var x = w - 1 >>> 1, j = M[x];
        if (0 < o(j, $))
          M[x] = $, M[w] = j, w = x;
        else
          break e;
      }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0)
      return null;
    var $ = M[0], w = M.pop();
    if (w !== $) {
      M[0] = w;
      e:
        for (var x = 0, j = M.length, Q = j >>> 1; x < Q; ) {
          var Z = 2 * (x + 1) - 1, Me = M[Z], be = Z + 1, Ne = M[be];
          if (0 > o(Me, w))
            be < j && 0 > o(Ne, Me) ? (M[x] = Ne, M[be] = w, x = be) : (M[x] = Me, M[Z] = w, x = Z);
          else if (be < j && 0 > o(Ne, w))
            M[x] = Ne, M[be] = w, x = be;
          else
            break e;
        }
    }
    return $;
  }
  function o(M, $) {
    var w = M.sortIndex - $.sortIndex;
    return w !== 0 ? w : M.id - $.id;
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
  var l = [], c = [], f = 1, u = null, p = 3, v = !1, S = !1, T = !1, _ = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var $ = n(c); $ !== null; ) {
      if ($.callback === null)
        r(c);
      else if ($.startTime <= M)
        r(c), $.sortIndex = $.expirationTime, t(l, $);
      else
        break;
      $ = n(c);
    }
  }
  function b(M) {
    if (T = !1, g(M), !S)
      if (n(l) !== null)
        S = !0, Ee(C);
      else {
        var $ = n(c);
        $ !== null && W(b, $.startTime - M);
      }
  }
  function C(M, $) {
    S = !1, T && (T = !1, h(L), L = -1), v = !0;
    var w = p;
    try {
      for (g($), u = n(l); u !== null && (!(u.expirationTime > $) || M && !D()); ) {
        var x = u.callback;
        if (typeof x == "function") {
          u.callback = null, p = u.priorityLevel;
          var j = x(u.expirationTime <= $);
          $ = e.unstable_now(), typeof j == "function" ? u.callback = j : u === n(l) && r(l), g($);
        } else
          r(l);
        u = n(l);
      }
      if (u !== null)
        var Q = !0;
      else {
        var Z = n(c);
        Z !== null && W(b, Z.startTime - $), Q = !1;
      }
      return Q;
    } finally {
      u = null, p = w, v = !1;
    }
  }
  var N = !1, k = null, L = -1, U = 5, R = -1;
  function D() {
    return !(e.unstable_now() - R < U);
  }
  function z() {
    if (k !== null) {
      var M = e.unstable_now();
      R = M;
      var $ = !0;
      try {
        $ = k(!0, M);
      } finally {
        $ ? Y() : (N = !1, k = null);
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
  function Ee(M) {
    k = M, N || (N = !0, Y());
  }
  function W(M, $) {
    L = _(function() {
      M(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    S || v || (S = !0, Ee(C));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(M) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = p;
    }
    var w = p;
    p = $;
    try {
      return M();
    } finally {
      p = w;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, $) {
    switch (M) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        M = 3;
    }
    var w = p;
    p = M;
    try {
      return $();
    } finally {
      p = w;
    }
  }, e.unstable_scheduleCallback = function(M, $, w) {
    var x = e.unstable_now();
    switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? x + w : x) : w = x, M) {
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
    return j = w + j, M = { id: f++, callback: $, priorityLevel: M, startTime: w, expirationTime: j, sortIndex: -1 }, w > x ? (M.sortIndex = w, t(c, M), n(l) === null && M === n(c) && (T ? (h(L), L = -1) : T = !0, W(b, w - x))) : (M.sortIndex = j, t(l, M), S || v || (S = !0, Ee(C))), M;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(M) {
    var $ = p;
    return function() {
      var w = p;
      p = $;
      try {
        return M.apply(this, arguments);
      } finally {
        p = w;
      }
    };
  };
})(Fh);
Hh.exports = Fh;
var Pw = Hh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xw = E, Nt = Pw;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Uh = /* @__PURE__ */ new Set(), gi = {};
function Pr(e, t) {
  fo(e, t), fo(e + "Capture", t);
}
function fo(e, t) {
  for (gi[e] = t, e = 0; e < t.length; e++)
    Uh.add(t[e]);
}
var kn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vc = Object.prototype.hasOwnProperty, Lw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fp = {}, pp = {};
function _w(e) {
  return Vc.call(pp, e) ? !0 : Vc.call(fp, e) ? !1 : Lw.test(e) ? pp[e] = !0 : (fp[e] = !0, !1);
}
function zw(e, t, n, r) {
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
function Rw(e, t, n, r) {
  if (t === null || typeof t > "u" || zw(e, t, n, r))
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
var ld = /[\-:]([a-z])/g;
function cd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ld,
    cd
  );
  Je[t] = new dt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ld, cd);
  Je[t] = new dt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ld, cd);
  Je[t] = new dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Je[e] = new dt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Je.xlinkHref = new dt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Je[e] = new dt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ud(e, t, n, r) {
  var o = Je.hasOwnProperty(t) ? Je[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Rw(t, n, o, r) && (n = null), r || o === null ? _w(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pn = xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, us = Symbol.for("react.element"), Br = Symbol.for("react.portal"), Kr = Symbol.for("react.fragment"), dd = Symbol.for("react.strict_mode"), Zc = Symbol.for("react.profiler"), jh = Symbol.for("react.provider"), Bh = Symbol.for("react.context"), fd = Symbol.for("react.forward_ref"), Wc = Symbol.for("react.suspense"), Yc = Symbol.for("react.suspense_list"), pd = Symbol.for("react.memo"), $n = Symbol.for("react.lazy"), Kh = Symbol.for("react.offscreen"), mp = Symbol.iterator;
function Do(e) {
  return e === null || typeof e != "object" ? null : (e = mp && e[mp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, nc;
function Jo(e) {
  if (nc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      nc = t && t[1] || "";
    }
  return `
` + nc + e;
}
var rc = !1;
function oc(e, t) {
  if (!e || rc)
    return "";
  rc = !0;
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
    rc = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Jo(e) : "";
}
function Ow(e) {
  switch (e.tag) {
    case 5:
      return Jo(e.type);
    case 16:
      return Jo("Lazy");
    case 13:
      return Jo("Suspense");
    case 19:
      return Jo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = oc(e.type, !1), e;
    case 11:
      return e = oc(e.type.render, !1), e;
    case 1:
      return e = oc(e.type, !0), e;
    default:
      return "";
  }
}
function Gc(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Kr:
      return "Fragment";
    case Br:
      return "Portal";
    case Zc:
      return "Profiler";
    case dd:
      return "StrictMode";
    case Wc:
      return "Suspense";
    case Yc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bh:
        return (e.displayName || "Context") + ".Consumer";
      case jh:
        return (e._context.displayName || "Context") + ".Provider";
      case fd:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case pd:
        return t = e.displayName || null, t !== null ? t : Gc(e.type) || "Memo";
      case $n:
        t = e._payload, e = e._init;
        try {
          return Gc(e(t));
        } catch {
        }
    }
  return null;
}
function $w(e) {
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
      return Gc(t);
    case 8:
      return t === dd ? "StrictMode" : "Mode";
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
function Vh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Mw(e) {
  var t = Vh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ds(e) {
  e._valueTracker || (e._valueTracker = Mw(e));
}
function Zh(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Vh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function na(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xc(e, t) {
  var n = t.checked;
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function hp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = er(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Wh(e, t) {
  t = t.checked, t != null && ud(e, "checked", t, !1);
}
function Jc(e, t) {
  Wh(e, t);
  var n = er(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Qc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qc(e, t.type, er(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function gp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Qc(e, t, n) {
  (t !== "number" || na(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qo = Array.isArray;
function ro(e, t, n, r) {
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
function qc(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(I(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function yp(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(I(92));
      if (Qo(n)) {
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
function Yh(e, t) {
  var n = er(t.value), r = er(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function vp(e) {
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
function eu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Gh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fs, Xh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (fs = fs || document.createElement("div"), fs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fs.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function yi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var oi = {
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
}, Iw = ["Webkit", "ms", "Moz", "O"];
Object.keys(oi).forEach(function(e) {
  Iw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), oi[t] = oi[e];
  });
});
function Jh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || oi.hasOwnProperty(e) && oi[e] ? ("" + t).trim() : t + "px";
}
function Qh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Jh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Dw = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function tu(e, t) {
  if (t) {
    if (Dw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function nu(e, t) {
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
var ru = null;
function md(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ou = null, oo = null, io = null;
function wp(e) {
  if (e = Zi(e)) {
    if (typeof ou != "function")
      throw Error(I(280));
    var t = e.stateNode;
    t && (t = Ba(t), ou(e.stateNode, e.type, t));
  }
}
function qh(e) {
  oo ? io ? io.push(e) : io = [e] : oo = e;
}
function eg() {
  if (oo) {
    var e = oo, t = io;
    if (io = oo = null, wp(e), t)
      for (e = 0; e < t.length; e++)
        wp(t[e]);
  }
}
function tg(e, t) {
  return e(t);
}
function ng() {
}
var ic = !1;
function rg(e, t, n) {
  if (ic)
    return e(t, n);
  ic = !0;
  try {
    return tg(e, t, n);
  } finally {
    ic = !1, (oo !== null || io !== null) && (ng(), eg());
  }
}
function vi(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Ba(n);
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
var iu = !1;
if (kn)
  try {
    var Ho = {};
    Object.defineProperty(Ho, "passive", { get: function() {
      iu = !0;
    } }), window.addEventListener("test", Ho, Ho), window.removeEventListener("test", Ho, Ho);
  } catch {
    iu = !1;
  }
function Hw(e, t, n, r, o, i, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var ii = !1, ra = null, oa = !1, su = null, Fw = { onError: function(e) {
  ii = !0, ra = e;
} };
function Uw(e, t, n, r, o, i, s, a, l) {
  ii = !1, ra = null, Hw.apply(Fw, arguments);
}
function jw(e, t, n, r, o, i, s, a, l) {
  if (Uw.apply(this, arguments), ii) {
    if (ii) {
      var c = ra;
      ii = !1, ra = null;
    } else
      throw Error(I(198));
    oa || (oa = !0, su = c);
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
function og(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Tp(e) {
  if (xr(e) !== e)
    throw Error(I(188));
}
function Bw(e) {
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
          return Tp(o), e;
        if (i === r)
          return Tp(o), t;
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
function ig(e) {
  return e = Bw(e), e !== null ? sg(e) : null;
}
function sg(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = sg(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var ag = Nt.unstable_scheduleCallback, Sp = Nt.unstable_cancelCallback, Kw = Nt.unstable_shouldYield, Vw = Nt.unstable_requestPaint, Ae = Nt.unstable_now, Zw = Nt.unstable_getCurrentPriorityLevel, hd = Nt.unstable_ImmediatePriority, lg = Nt.unstable_UserBlockingPriority, ia = Nt.unstable_NormalPriority, Ww = Nt.unstable_LowPriority, cg = Nt.unstable_IdlePriority, Ha = null, cn = null;
function Yw(e) {
  if (cn && typeof cn.onCommitFiberRoot == "function")
    try {
      cn.onCommitFiberRoot(Ha, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Yt = Math.clz32 ? Math.clz32 : Jw, Gw = Math.log, Xw = Math.LN2;
function Jw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Gw(e) / Xw | 0) | 0;
}
var ps = 64, ms = 4194304;
function qo(e) {
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
function sa(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = qo(a) : (i &= s, i !== 0 && (r = qo(i)));
  } else
    s = n & ~o, s !== 0 ? r = qo(s) : i !== 0 && (r = qo(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Yt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Qw(e, t) {
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
function qw(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Yt(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = Qw(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function au(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ug() {
  var e = ps;
  return ps <<= 1, !(ps & 4194240) && (ps = 64), e;
}
function sc(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ki(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Yt(t), e[t] = n;
}
function eT(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Yt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function gd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Yt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var se = 0;
function dg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var fg, yd, pg, mg, hg, lu = !1, hs = [], Kn = null, Vn = null, Zn = null, wi = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map(), In = [], tT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function kp(e, t) {
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
      wi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ti.delete(t.pointerId);
  }
}
function Fo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Zi(t), t !== null && yd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function nT(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Kn = Fo(Kn, e, t, n, r, o), !0;
    case "dragenter":
      return Vn = Fo(Vn, e, t, n, r, o), !0;
    case "mouseover":
      return Zn = Fo(Zn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return wi.set(i, Fo(wi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ti.set(i, Fo(Ti.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function gg(e) {
  var t = hr(e.target);
  if (t !== null) {
    var n = xr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = og(n), t !== null) {
          e.blockedOn = t, hg(e.priority, function() {
            pg(n);
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
function Fs(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = cu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ru = r, n.target.dispatchEvent(r), ru = null;
    } else
      return t = Zi(n), t !== null && yd(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ep(e, t, n) {
  Fs(e) && n.delete(t);
}
function rT() {
  lu = !1, Kn !== null && Fs(Kn) && (Kn = null), Vn !== null && Fs(Vn) && (Vn = null), Zn !== null && Fs(Zn) && (Zn = null), wi.forEach(Ep), Ti.forEach(Ep);
}
function Uo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, lu || (lu = !0, Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, rT)));
}
function Si(e) {
  function t(o) {
    return Uo(o, e);
  }
  if (0 < hs.length) {
    Uo(hs[0], e);
    for (var n = 1; n < hs.length; n++) {
      var r = hs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Kn !== null && Uo(Kn, e), Vn !== null && Uo(Vn, e), Zn !== null && Uo(Zn, e), wi.forEach(t), Ti.forEach(t), n = 0; n < In.length; n++)
    r = In[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < In.length && (n = In[0], n.blockedOn === null); )
    gg(n), n.blockedOn === null && In.shift();
}
var so = Pn.ReactCurrentBatchConfig, aa = !0;
function oT(e, t, n, r) {
  var o = se, i = so.transition;
  so.transition = null;
  try {
    se = 1, vd(e, t, n, r);
  } finally {
    se = o, so.transition = i;
  }
}
function iT(e, t, n, r) {
  var o = se, i = so.transition;
  so.transition = null;
  try {
    se = 4, vd(e, t, n, r);
  } finally {
    se = o, so.transition = i;
  }
}
function vd(e, t, n, r) {
  if (aa) {
    var o = cu(e, t, n, r);
    if (o === null)
      gc(e, t, r, la, n), kp(e, r);
    else if (nT(o, e, t, n, r))
      r.stopPropagation();
    else if (kp(e, r), t & 4 && -1 < tT.indexOf(e)) {
      for (; o !== null; ) {
        var i = Zi(o);
        if (i !== null && fg(i), i = cu(e, t, n, r), i === null && gc(e, t, r, la, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      gc(e, t, r, null, n);
  }
}
var la = null;
function cu(e, t, n, r) {
  if (la = null, e = md(r), e = hr(e), e !== null)
    if (t = xr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = og(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return la = e, null;
}
function yg(e) {
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
      switch (Zw()) {
        case hd:
          return 1;
        case lg:
          return 4;
        case ia:
        case Ww:
          return 16;
        case cg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Fn = null, wd = null, Us = null;
function vg() {
  if (Us)
    return Us;
  var e, t = wd, n = t.length, r, o = "value" in Fn ? Fn.value : Fn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ;
  return Us = o.slice(e, 1 < r ? 1 - r : void 0);
}
function js(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gs() {
  return !0;
}
function Ap() {
  return !1;
}
function xt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? gs : Ap, this.isPropagationStopped = Ap, this;
  }
  return he(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gs);
  }, persist: function() {
  }, isPersistent: gs }), t;
}
var bo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Td = xt(bo), Vi = he({}, bo, { view: 0, detail: 0 }), sT = xt(Vi), ac, lc, jo, Fa = he({}, Vi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== jo && (jo && e.type === "mousemove" ? (ac = e.screenX - jo.screenX, lc = e.screenY - jo.screenY) : lc = ac = 0, jo = e), ac);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : lc;
} }), Cp = xt(Fa), aT = he({}, Fa, { dataTransfer: 0 }), lT = xt(aT), cT = he({}, Vi, { relatedTarget: 0 }), cc = xt(cT), uT = he({}, bo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), dT = xt(uT), fT = he({}, bo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), pT = xt(fT), mT = he({}, bo, { data: 0 }), bp = xt(mT), hT = {
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
}, gT = {
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
}, yT = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vT(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yT[e]) ? !!t[e] : !1;
}
function Sd() {
  return vT;
}
var wT = he({}, Vi, { key: function(e) {
  if (e.key) {
    var t = hT[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gT[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sd, charCode: function(e) {
  return e.type === "keypress" ? js(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), TT = xt(wT), ST = he({}, Fa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Np = xt(ST), kT = he({}, Vi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sd }), ET = xt(kT), AT = he({}, bo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), CT = xt(AT), bT = he({}, Fa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), NT = xt(bT), PT = [9, 13, 27, 32], kd = kn && "CompositionEvent" in window, si = null;
kn && "documentMode" in document && (si = document.documentMode);
var xT = kn && "TextEvent" in window && !si, wg = kn && (!kd || si && 8 < si && 11 >= si), Pp = String.fromCharCode(32), xp = !1;
function Tg(e, t) {
  switch (e) {
    case "keyup":
      return PT.indexOf(t.keyCode) !== -1;
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
function Sg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Vr = !1;
function LT(e, t) {
  switch (e) {
    case "compositionend":
      return Sg(t);
    case "keypress":
      return t.which !== 32 ? null : (xp = !0, Pp);
    case "textInput":
      return e = t.data, e === Pp && xp ? null : e;
    default:
      return null;
  }
}
function _T(e, t) {
  if (Vr)
    return e === "compositionend" || !kd && Tg(e, t) ? (e = vg(), Us = wd = Fn = null, Vr = !1, e) : null;
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
      return wg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zT = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Lp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zT[e.type] : t === "textarea";
}
function kg(e, t, n, r) {
  qh(r), t = ca(t, "onChange"), 0 < t.length && (n = new Td("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ai = null, ki = null;
function RT(e) {
  Rg(e, 0);
}
function Ua(e) {
  var t = Yr(e);
  if (Zh(t))
    return e;
}
function OT(e, t) {
  if (e === "change")
    return t;
}
var Eg = !1;
if (kn) {
  var uc;
  if (kn) {
    var dc = "oninput" in document;
    if (!dc) {
      var _p = document.createElement("div");
      _p.setAttribute("oninput", "return;"), dc = typeof _p.oninput == "function";
    }
    uc = dc;
  } else
    uc = !1;
  Eg = uc && (!document.documentMode || 9 < document.documentMode);
}
function zp() {
  ai && (ai.detachEvent("onpropertychange", Ag), ki = ai = null);
}
function Ag(e) {
  if (e.propertyName === "value" && Ua(ki)) {
    var t = [];
    kg(t, ki, e, md(e)), rg(RT, t);
  }
}
function $T(e, t, n) {
  e === "focusin" ? (zp(), ai = t, ki = n, ai.attachEvent("onpropertychange", Ag)) : e === "focusout" && zp();
}
function MT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ua(ki);
}
function IT(e, t) {
  if (e === "click")
    return Ua(t);
}
function DT(e, t) {
  if (e === "input" || e === "change")
    return Ua(t);
}
function HT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Xt = typeof Object.is == "function" ? Object.is : HT;
function Ei(e, t) {
  if (Xt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Vc.call(t, o) || !Xt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Rp(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Op(e, t) {
  var n = Rp(e);
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
    n = Rp(n);
  }
}
function Cg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function bg() {
  for (var e = window, t = na(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = na(e.document);
  }
  return t;
}
function Ed(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function FT(e) {
  var t = bg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Cg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ed(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Op(n, i);
        var s = Op(
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
var UT = kn && "documentMode" in document && 11 >= document.documentMode, Zr = null, uu = null, li = null, du = !1;
function $p(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  du || Zr == null || Zr !== na(r) || (r = Zr, "selectionStart" in r && Ed(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), li && Ei(li, r) || (li = r, r = ca(uu, "onSelect"), 0 < r.length && (t = new Td("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zr)));
}
function ys(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Wr = { animationend: ys("Animation", "AnimationEnd"), animationiteration: ys("Animation", "AnimationIteration"), animationstart: ys("Animation", "AnimationStart"), transitionend: ys("Transition", "TransitionEnd") }, fc = {}, Ng = {};
kn && (Ng = document.createElement("div").style, "AnimationEvent" in window || (delete Wr.animationend.animation, delete Wr.animationiteration.animation, delete Wr.animationstart.animation), "TransitionEvent" in window || delete Wr.transitionend.transition);
function ja(e) {
  if (fc[e])
    return fc[e];
  if (!Wr[e])
    return e;
  var t = Wr[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Ng)
      return fc[e] = t[n];
  return e;
}
var Pg = ja("animationend"), xg = ja("animationiteration"), Lg = ja("animationstart"), _g = ja("transitionend"), zg = /* @__PURE__ */ new Map(), Mp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function or(e, t) {
  zg.set(e, t), Pr(t, [e]);
}
for (var pc = 0; pc < Mp.length; pc++) {
  var mc = Mp[pc], jT = mc.toLowerCase(), BT = mc[0].toUpperCase() + mc.slice(1);
  or(jT, "on" + BT);
}
or(Pg, "onAnimationEnd");
or(xg, "onAnimationIteration");
or(Lg, "onAnimationStart");
or("dblclick", "onDoubleClick");
or("focusin", "onFocus");
or("focusout", "onBlur");
or(_g, "onTransitionEnd");
fo("onMouseEnter", ["mouseout", "mouseover"]);
fo("onMouseLeave", ["mouseout", "mouseover"]);
fo("onPointerEnter", ["pointerout", "pointerover"]);
fo("onPointerLeave", ["pointerout", "pointerover"]);
Pr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ei = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), KT = new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));
function Ip(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, jw(r, t, void 0, e), e.currentTarget = null;
}
function Rg(e, t) {
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
          Ip(o, a, c), i = l;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (a = r[s], l = a.instance, c = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped())
            break e;
          Ip(o, a, c), i = l;
        }
    }
  }
  if (oa)
    throw e = su, oa = !1, su = null, e;
}
function ue(e, t) {
  var n = t[gu];
  n === void 0 && (n = t[gu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Og(t, e, 2, !1), n.add(r));
}
function hc(e, t, n) {
  var r = 0;
  t && (r |= 4), Og(n, e, r, t);
}
var vs = "_reactListening" + Math.random().toString(36).slice(2);
function Ai(e) {
  if (!e[vs]) {
    e[vs] = !0, Uh.forEach(function(n) {
      n !== "selectionchange" && (KT.has(n) || hc(n, !1, e), hc(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vs] || (t[vs] = !0, hc("selectionchange", !1, t));
  }
}
function Og(e, t, n, r) {
  switch (yg(t)) {
    case 1:
      var o = oT;
      break;
    case 4:
      o = iT;
      break;
    default:
      o = vd;
  }
  n = o.bind(null, t, n, e), o = void 0, !iu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function gc(e, t, n, r, o) {
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
  rg(function() {
    var c = i, f = md(n), u = [];
    e: {
      var p = zg.get(e);
      if (p !== void 0) {
        var v = Td, S = e;
        switch (e) {
          case "keypress":
            if (js(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = TT;
            break;
          case "focusin":
            S = "focus", v = cc;
            break;
          case "focusout":
            S = "blur", v = cc;
            break;
          case "beforeblur":
          case "afterblur":
            v = cc;
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
            v = Cp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = lT;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ET;
            break;
          case Pg:
          case xg:
          case Lg:
            v = dT;
            break;
          case _g:
            v = CT;
            break;
          case "scroll":
            v = sT;
            break;
          case "wheel":
            v = NT;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = pT;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Np;
        }
        var T = (t & 4) !== 0, _ = !T && e === "scroll", h = T ? p !== null ? p + "Capture" : null : p;
        T = [];
        for (var m = c, g; m !== null; ) {
          g = m;
          var b = g.stateNode;
          if (g.tag === 5 && b !== null && (g = b, h !== null && (b = vi(m, h), b != null && T.push(Ci(m, b, g)))), _)
            break;
          m = m.return;
        }
        0 < T.length && (p = new v(p, S, null, n, f), u.push({ event: p, listeners: T }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== ru && (S = n.relatedTarget || n.fromElement) && (hr(S) || S[En]))
          break e;
        if ((v || p) && (p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (S = n.relatedTarget || n.toElement, v = c, S = S ? hr(S) : null, S !== null && (_ = xr(S), S !== _ || S.tag !== 5 && S.tag !== 6) && (S = null)) : (v = null, S = c), v !== S)) {
          if (T = Cp, b = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (T = Np, b = "onPointerLeave", h = "onPointerEnter", m = "pointer"), _ = v == null ? p : Yr(v), g = S == null ? p : Yr(S), p = new T(b, m + "leave", v, n, f), p.target = _, p.relatedTarget = g, b = null, hr(f) === c && (T = new T(h, m + "enter", S, n, f), T.target = g, T.relatedTarget = _, b = T), _ = b, v && S)
            t: {
              for (T = v, h = S, m = 0, g = T; g; g = Dr(g))
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
          v !== null && Dp(u, p, v, T, !1), S !== null && _ !== null && Dp(u, _, S, T, !0);
        }
      }
      e: {
        if (p = c ? Yr(c) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var C = OT;
        else if (Lp(p))
          if (Eg)
            C = DT;
          else {
            C = MT;
            var N = $T;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = IT);
        if (C && (C = C(e, c))) {
          kg(u, C, n, f);
          break e;
        }
        N && N(e, p, c), e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && Qc(p, "number", p.value);
      }
      switch (N = c ? Yr(c) : window, e) {
        case "focusin":
          (Lp(N) || N.contentEditable === "true") && (Zr = N, uu = c, li = null);
          break;
        case "focusout":
          li = uu = Zr = null;
          break;
        case "mousedown":
          du = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          du = !1, $p(u, n, f);
          break;
        case "selectionchange":
          if (UT)
            break;
        case "keydown":
        case "keyup":
          $p(u, n, f);
      }
      var k;
      if (kd)
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
        Vr ? Tg(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (wg && n.locale !== "ko" && (Vr || L !== "onCompositionStart" ? L === "onCompositionEnd" && Vr && (k = vg()) : (Fn = f, wd = "value" in Fn ? Fn.value : Fn.textContent, Vr = !0)), N = ca(c, L), 0 < N.length && (L = new bp(L, e, null, n, f), u.push({ event: L, listeners: N }), k ? L.data = k : (k = Sg(n), k !== null && (L.data = k)))), (k = xT ? LT(e, n) : _T(e, n)) && (c = ca(c, "onBeforeInput"), 0 < c.length && (f = new bp("onBeforeInput", "beforeinput", null, n, f), u.push({ event: f, listeners: c }), f.data = k));
    }
    Rg(u, t);
  });
}
function Ci(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ca(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = vi(e, n), i != null && r.unshift(Ci(e, i, o)), i = vi(e, t), i != null && r.push(Ci(e, i, o))), e = e.return;
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
function Dp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, c = a.stateNode;
    if (l !== null && l === r)
      break;
    a.tag === 5 && c !== null && (a = c, o ? (l = vi(n, i), l != null && s.unshift(Ci(n, l, a))) : o || (l = vi(n, i), l != null && s.push(Ci(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var VT = /\r\n?/g, ZT = /\u0000|\uFFFD/g;
function Hp(e) {
  return (typeof e == "string" ? e : "" + e).replace(VT, `
`).replace(ZT, "");
}
function ws(e, t, n) {
  if (t = Hp(t), Hp(e) !== t && n)
    throw Error(I(425));
}
function ua() {
}
var fu = null, pu = null;
function mu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var hu = typeof setTimeout == "function" ? setTimeout : void 0, WT = typeof clearTimeout == "function" ? clearTimeout : void 0, Fp = typeof Promise == "function" ? Promise : void 0, YT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fp < "u" ? function(e) {
  return Fp.resolve(null).then(e).catch(GT);
} : hu;
function GT(e) {
  setTimeout(function() {
    throw e;
  });
}
function yc(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Si(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Si(t);
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
function Up(e) {
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
var No = Math.random().toString(36).slice(2), ln = "__reactFiber$" + No, bi = "__reactProps$" + No, En = "__reactContainer$" + No, gu = "__reactEvents$" + No, XT = "__reactListeners$" + No, JT = "__reactHandles$" + No;
function hr(e) {
  var t = e[ln];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[En] || n[ln]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Up(e); e !== null; ) {
          if (n = e[ln])
            return n;
          e = Up(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Zi(e) {
  return e = e[ln] || e[En], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Yr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(I(33));
}
function Ba(e) {
  return e[bi] || null;
}
var yu = [], Gr = -1;
function ir(e) {
  return { current: e };
}
function de(e) {
  0 > Gr || (e.current = yu[Gr], yu[Gr] = null, Gr--);
}
function ce(e, t) {
  Gr++, yu[Gr] = e.current, e.current = t;
}
var tr = {}, ot = ir(tr), gt = ir(!1), Sr = tr;
function po(e, t) {
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
function da() {
  de(gt), de(ot);
}
function jp(e, t, n) {
  if (ot.current !== tr)
    throw Error(I(168));
  ce(ot, t), ce(gt, n);
}
function $g(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(I(108, $w(e) || "Unknown", o));
  return he({}, n, r);
}
function fa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tr, Sr = ot.current, ce(ot, e), ce(gt, gt.current), !0;
}
function Bp(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(I(169));
  n ? (e = $g(e, t, Sr), r.__reactInternalMemoizedMergedChildContext = e, de(gt), de(ot), ce(ot, e)) : de(gt), ce(gt, n);
}
var gn = null, Ka = !1, vc = !1;
function Mg(e) {
  gn === null ? gn = [e] : gn.push(e);
}
function QT(e) {
  Ka = !0, Mg(e);
}
function sr() {
  if (!vc && gn !== null) {
    vc = !0;
    var e = 0, t = se;
    try {
      var n = gn;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      gn = null, Ka = !1;
    } catch (o) {
      throw gn !== null && (gn = gn.slice(e + 1)), ag(hd, sr), o;
    } finally {
      se = t, vc = !1;
    }
  }
  return null;
}
var Xr = [], Jr = 0, pa = null, ma = 0, zt = [], Rt = 0, kr = null, wn = 1, Tn = "";
function fr(e, t) {
  Xr[Jr++] = ma, Xr[Jr++] = pa, pa = e, ma = t;
}
function Ig(e, t, n) {
  zt[Rt++] = wn, zt[Rt++] = Tn, zt[Rt++] = kr, kr = e;
  var r = wn;
  e = Tn;
  var o = 32 - Yt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Yt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, wn = 1 << 32 - Yt(t) + o | n << o | r, Tn = i + e;
  } else
    wn = 1 << i | n << o | r, Tn = e;
}
function Ad(e) {
  e.return !== null && (fr(e, 1), Ig(e, 1, 0));
}
function Cd(e) {
  for (; e === pa; )
    pa = Xr[--Jr], Xr[Jr] = null, ma = Xr[--Jr], Xr[Jr] = null;
  for (; e === kr; )
    kr = zt[--Rt], zt[Rt] = null, Tn = zt[--Rt], zt[Rt] = null, wn = zt[--Rt], zt[Rt] = null;
}
var Ct = null, At = null, fe = !1, Vt = null;
function Dg(e, t) {
  var n = Mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Kp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ct = e, At = Wn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ct = e, At = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = kr !== null ? { id: wn, overflow: Tn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ct = e, At = null, !0) : !1;
    default:
      return !1;
  }
}
function vu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wu(e) {
  if (fe) {
    var t = At;
    if (t) {
      var n = t;
      if (!Kp(e, t)) {
        if (vu(e))
          throw Error(I(418));
        t = Wn(n.nextSibling);
        var r = Ct;
        t && Kp(e, t) ? Dg(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, Ct = e);
      }
    } else {
      if (vu(e))
        throw Error(I(418));
      e.flags = e.flags & -4097 | 2, fe = !1, Ct = e;
    }
  }
}
function Vp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ct = e;
}
function Ts(e) {
  if (e !== Ct)
    return !1;
  if (!fe)
    return Vp(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !mu(e.type, e.memoizedProps)), t && (t = At)) {
    if (vu(e))
      throw Hg(), Error(I(418));
    for (; t; )
      Dg(e, t), t = Wn(t.nextSibling);
  }
  if (Vp(e), e.tag === 13) {
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
function Hg() {
  for (var e = At; e; )
    e = Wn(e.nextSibling);
}
function mo() {
  At = Ct = null, fe = !1;
}
function bd(e) {
  Vt === null ? Vt = [e] : Vt.push(e);
}
var qT = Pn.ReactCurrentBatchConfig;
function Bo(e, t, n) {
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
function Ss(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Zp(e) {
  var t = e._init;
  return t(e._payload);
}
function Fg(e) {
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
    return m === null || m.tag !== 6 ? (m = Cc(g, h.mode, b), m.return = h, m) : (m = o(m, g), m.return = h, m);
  }
  function l(h, m, g, b) {
    var C = g.type;
    return C === Kr ? f(h, m, g.props.children, b, g.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === $n && Zp(C) === m.type) ? (b = o(m, g.props), b.ref = Bo(h, m, g), b.return = h, b) : (b = Gs(g.type, g.key, g.props, null, h.mode, b), b.ref = Bo(h, m, g), b.return = h, b);
  }
  function c(h, m, g, b) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = bc(g, h.mode, b), m.return = h, m) : (m = o(m, g.children || []), m.return = h, m);
  }
  function f(h, m, g, b, C) {
    return m === null || m.tag !== 7 ? (m = Tr(g, h.mode, b, C), m.return = h, m) : (m = o(m, g), m.return = h, m);
  }
  function u(h, m, g) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = Cc("" + m, h.mode, g), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case us:
          return g = Gs(m.type, m.key, m.props, null, h.mode, g), g.ref = Bo(h, null, m), g.return = h, g;
        case Br:
          return m = bc(m, h.mode, g), m.return = h, m;
        case $n:
          var b = m._init;
          return u(h, b(m._payload), g);
      }
      if (Qo(m) || Do(m))
        return m = Tr(m, h.mode, g, null), m.return = h, m;
      Ss(h, m);
    }
    return null;
  }
  function p(h, m, g, b) {
    var C = m !== null ? m.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return C !== null ? null : a(h, m, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case us:
          return g.key === C ? l(h, m, g, b) : null;
        case Br:
          return g.key === C ? c(h, m, g, b) : null;
        case $n:
          return C = g._init, p(
            h,
            m,
            C(g._payload),
            b
          );
      }
      if (Qo(g) || Do(g))
        return C !== null ? null : f(h, m, g, b, null);
      Ss(h, g);
    }
    return null;
  }
  function v(h, m, g, b, C) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return h = h.get(g) || null, a(m, h, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case us:
          return h = h.get(b.key === null ? g : b.key) || null, l(m, h, b, C);
        case Br:
          return h = h.get(b.key === null ? g : b.key) || null, c(m, h, b, C);
        case $n:
          var N = b._init;
          return v(h, m, g, N(b._payload), C);
      }
      if (Qo(b) || Do(b))
        return h = h.get(g) || null, f(m, h, b, C, null);
      Ss(m, b);
    }
    return null;
  }
  function S(h, m, g, b) {
    for (var C = null, N = null, k = m, L = m = 0, U = null; k !== null && L < g.length; L++) {
      k.index > L ? (U = k, k = null) : U = k.sibling;
      var R = p(h, k, g[L], b);
      if (R === null) {
        k === null && (k = U);
        break;
      }
      e && k && R.alternate === null && t(h, k), m = i(R, m, L), N === null ? C = R : N.sibling = R, N = R, k = U;
    }
    if (L === g.length)
      return n(h, k), fe && fr(h, L), C;
    if (k === null) {
      for (; L < g.length; L++)
        k = u(h, g[L], b), k !== null && (m = i(k, m, L), N === null ? C = k : N.sibling = k, N = k);
      return fe && fr(h, L), C;
    }
    for (k = r(h, k); L < g.length; L++)
      U = v(k, h, L, g[L], b), U !== null && (e && U.alternate !== null && k.delete(U.key === null ? L : U.key), m = i(U, m, L), N === null ? C = U : N.sibling = U, N = U);
    return e && k.forEach(function(D) {
      return t(h, D);
    }), fe && fr(h, L), C;
  }
  function T(h, m, g, b) {
    var C = Do(g);
    if (typeof C != "function")
      throw Error(I(150));
    if (g = C.call(g), g == null)
      throw Error(I(151));
    for (var N = C = null, k = m, L = m = 0, U = null, R = g.next(); k !== null && !R.done; L++, R = g.next()) {
      k.index > L ? (U = k, k = null) : U = k.sibling;
      var D = p(h, k, R.value, b);
      if (D === null) {
        k === null && (k = U);
        break;
      }
      e && k && D.alternate === null && t(h, k), m = i(D, m, L), N === null ? C = D : N.sibling = D, N = D, k = U;
    }
    if (R.done)
      return n(
        h,
        k
      ), fe && fr(h, L), C;
    if (k === null) {
      for (; !R.done; L++, R = g.next())
        R = u(h, R.value, b), R !== null && (m = i(R, m, L), N === null ? C = R : N.sibling = R, N = R);
      return fe && fr(h, L), C;
    }
    for (k = r(h, k); !R.done; L++, R = g.next())
      R = v(k, h, L, R.value, b), R !== null && (e && R.alternate !== null && k.delete(R.key === null ? L : R.key), m = i(R, m, L), N === null ? C = R : N.sibling = R, N = R);
    return e && k.forEach(function(z) {
      return t(h, z);
    }), fe && fr(h, L), C;
  }
  function _(h, m, g, b) {
    if (typeof g == "object" && g !== null && g.type === Kr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case us:
          e: {
            for (var C = g.key, N = m; N !== null; ) {
              if (N.key === C) {
                if (C = g.type, C === Kr) {
                  if (N.tag === 7) {
                    n(h, N.sibling), m = o(N, g.props.children), m.return = h, h = m;
                    break e;
                  }
                } else if (N.elementType === C || typeof C == "object" && C !== null && C.$$typeof === $n && Zp(C) === N.type) {
                  n(h, N.sibling), m = o(N, g.props), m.ref = Bo(h, N, g), m.return = h, h = m;
                  break e;
                }
                n(h, N);
                break;
              } else
                t(h, N);
              N = N.sibling;
            }
            g.type === Kr ? (m = Tr(g.props.children, h.mode, b, g.key), m.return = h, h = m) : (b = Gs(g.type, g.key, g.props, null, h.mode, b), b.ref = Bo(h, m, g), b.return = h, h = b);
          }
          return s(h);
        case Br:
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
            m = bc(g, h.mode, b), m.return = h, h = m;
          }
          return s(h);
        case $n:
          return N = g._init, _(h, m, N(g._payload), b);
      }
      if (Qo(g))
        return S(h, m, g, b);
      if (Do(g))
        return T(h, m, g, b);
      Ss(h, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, m !== null && m.tag === 6 ? (n(h, m.sibling), m = o(m, g), m.return = h, h = m) : (n(h, m), m = Cc(g, h.mode, b), m.return = h, h = m), s(h)) : n(h, m);
  }
  return _;
}
var ho = Fg(!0), Ug = Fg(!1), ha = ir(null), ga = null, Qr = null, Nd = null;
function Pd() {
  Nd = Qr = ga = null;
}
function xd(e) {
  var t = ha.current;
  de(ha), e._currentValue = t;
}
function Tu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function ao(e, t) {
  ga = e, Nd = Qr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ht = !0), e.firstContext = null);
}
function Dt(e) {
  var t = e._currentValue;
  if (Nd !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Qr === null) {
      if (ga === null)
        throw Error(I(308));
      Qr = e, ga.dependencies = { lanes: 0, firstContext: e };
    } else
      Qr = Qr.next = e;
  return t;
}
var gr = null;
function Ld(e) {
  gr === null ? gr = [e] : gr.push(e);
}
function jg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Ld(t)) : (n.next = o.next, o.next = n), t.interleaved = n, An(e, r);
}
function An(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Mn = !1;
function _d(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Bg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Sn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Yn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, te & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, An(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Ld(r)) : (t.next = o.next, o.next = t), r.interleaved = t, An(e, n);
}
function Bs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gd(e, n);
  }
}
function Wp(e, t) {
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
function ya(e, t, n, r) {
  var o = e.updateQueue;
  Mn = !1;
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
          var S = e, T = a;
          switch (p = t, v = n, T.tag) {
            case 1:
              if (S = T.payload, typeof S == "function") {
                u = S.call(v, u, p);
                break e;
              }
              u = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = T.payload, p = typeof S == "function" ? S.call(v, u, p) : S, p == null)
                break e;
              u = he({}, u, p);
              break e;
            case 2:
              Mn = !0;
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
function Yp(e, t, n) {
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
var Wi = {}, un = ir(Wi), Ni = ir(Wi), Pi = ir(Wi);
function yr(e) {
  if (e === Wi)
    throw Error(I(174));
  return e;
}
function zd(e, t) {
  switch (ce(Pi, t), ce(Ni, e), ce(un, Wi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : eu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = eu(t, e);
  }
  de(un), ce(un, t);
}
function go() {
  de(un), de(Ni), de(Pi);
}
function Kg(e) {
  yr(Pi.current);
  var t = yr(un.current), n = eu(t, e.type);
  t !== n && (ce(Ni, e), ce(un, n));
}
function Rd(e) {
  Ni.current === e && (de(un), de(Ni));
}
var pe = ir(0);
function va(e) {
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
var wc = [];
function Od() {
  for (var e = 0; e < wc.length; e++)
    wc[e]._workInProgressVersionPrimary = null;
  wc.length = 0;
}
var Ks = Pn.ReactCurrentDispatcher, Tc = Pn.ReactCurrentBatchConfig, Er = 0, me = null, Oe = null, He = null, wa = !1, ci = !1, xi = 0, e1 = 0;
function et() {
  throw Error(I(321));
}
function $d(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xt(e[n], t[n]))
      return !1;
  return !0;
}
function Md(e, t, n, r, o, i) {
  if (Er = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ks.current = e === null || e.memoizedState === null ? o1 : i1, e = n(r, o), ci) {
    i = 0;
    do {
      if (ci = !1, xi = 0, 25 <= i)
        throw Error(I(301));
      i += 1, He = Oe = null, t.updateQueue = null, Ks.current = s1, e = n(r, o);
    } while (ci);
  }
  if (Ks.current = Ta, t = Oe !== null && Oe.next !== null, Er = 0, He = Oe = me = null, wa = !1, t)
    throw Error(I(300));
  return e;
}
function Id() {
  var e = xi !== 0;
  return xi = 0, e;
}
function on() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return He === null ? me.memoizedState = He = e : He = He.next = e, He;
}
function Ht() {
  if (Oe === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Oe.next;
  var t = He === null ? me.memoizedState : He.next;
  if (t !== null)
    He = t, Oe = e;
  else {
    if (e === null)
      throw Error(I(310));
    Oe = e, e = { memoizedState: Oe.memoizedState, baseState: Oe.baseState, baseQueue: Oe.baseQueue, queue: Oe.queue, next: null }, He === null ? me.memoizedState = He = e : He = He.next = e;
  }
  return He;
}
function Li(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sc(e) {
  var t = Ht(), n = t.queue;
  if (n === null)
    throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Oe, o = r.baseQueue, i = n.pending;
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
function kc(e) {
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
function Vg() {
}
function Zg(e, t) {
  var n = me, r = Ht(), o = t(), i = !Xt(r.memoizedState, o);
  if (i && (r.memoizedState = o, ht = !0), r = r.queue, Dd(Gg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || He !== null && He.memoizedState.tag & 1) {
    if (n.flags |= 2048, _i(9, Yg.bind(null, n, r, o, t), void 0, null), Fe === null)
      throw Error(I(349));
    Er & 30 || Wg(n, t, o);
  }
  return o;
}
function Wg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Yg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Xg(t) && Jg(e);
}
function Gg(e, t, n) {
  return n(function() {
    Xg(t) && Jg(e);
  });
}
function Xg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xt(e, n);
  } catch {
    return !0;
  }
}
function Jg(e) {
  var t = An(e, 1);
  t !== null && Gt(t, e, 1, -1);
}
function Gp(e) {
  var t = on();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Li, lastRenderedState: e }, t.queue = e, e = e.dispatch = r1.bind(null, me, e), [t.memoizedState, e];
}
function _i(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Qg() {
  return Ht().memoizedState;
}
function Vs(e, t, n, r) {
  var o = on();
  me.flags |= e, o.memoizedState = _i(1 | t, n, void 0, r === void 0 ? null : r);
}
function Va(e, t, n, r) {
  var o = Ht();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Oe !== null) {
    var s = Oe.memoizedState;
    if (i = s.destroy, r !== null && $d(r, s.deps)) {
      o.memoizedState = _i(t, n, i, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = _i(1 | t, n, i, r);
}
function Xp(e, t) {
  return Vs(8390656, 8, e, t);
}
function Dd(e, t) {
  return Va(2048, 8, e, t);
}
function qg(e, t) {
  return Va(4, 2, e, t);
}
function ey(e, t) {
  return Va(4, 4, e, t);
}
function ty(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function ny(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Va(4, 4, ty.bind(null, t, e), n);
}
function Hd() {
}
function ry(e, t) {
  var n = Ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $d(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function oy(e, t) {
  var n = Ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $d(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function iy(e, t, n) {
  return Er & 21 ? (Xt(n, t) || (n = ug(), me.lanes |= n, Ar |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ht = !0), e.memoizedState = n);
}
function t1(e, t) {
  var n = se;
  se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Tc.transition;
  Tc.transition = {};
  try {
    e(!1), t();
  } finally {
    se = n, Tc.transition = r;
  }
}
function sy() {
  return Ht().memoizedState;
}
function n1(e, t, n) {
  var r = Xn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ay(e))
    ly(t, n);
  else if (n = jg(e, t, n, r), n !== null) {
    var o = ct();
    Gt(n, e, r, o), cy(n, t, r);
  }
}
function r1(e, t, n) {
  var r = Xn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ay(e))
    ly(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var s = t.lastRenderedState, a = i(s, n);
        if (o.hasEagerState = !0, o.eagerState = a, Xt(a, s)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Ld(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = jg(e, t, o, r), n !== null && (o = ct(), Gt(n, e, r, o), cy(n, t, r));
  }
}
function ay(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function ly(e, t) {
  ci = wa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function cy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gd(e, n);
  }
}
var Ta = { readContext: Dt, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, o1 = { readContext: Dt, useCallback: function(e, t) {
  return on().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Dt, useEffect: Xp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vs(
    4194308,
    4,
    ty.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Vs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Vs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = on();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = on();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = n1.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = on();
  return e = { current: e }, t.memoizedState = e;
}, useState: Gp, useDebugValue: Hd, useDeferredValue: function(e) {
  return on().memoizedState = e;
}, useTransition: function() {
  var e = Gp(!1), t = e[0];
  return e = t1.bind(null, e[1]), on().memoizedState = e, [t, e];
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
    Er & 30 || Wg(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Xp(Gg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, _i(9, Yg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = on(), t = Fe.identifierPrefix;
  if (fe) {
    var n = Tn, r = wn;
    n = (r & ~(1 << 32 - Yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = xi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = e1++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, i1 = {
  readContext: Dt,
  useCallback: ry,
  useContext: Dt,
  useEffect: Dd,
  useImperativeHandle: ny,
  useInsertionEffect: qg,
  useLayoutEffect: ey,
  useMemo: oy,
  useReducer: Sc,
  useRef: Qg,
  useState: function() {
    return Sc(Li);
  },
  useDebugValue: Hd,
  useDeferredValue: function(e) {
    var t = Ht();
    return iy(t, Oe.memoizedState, e);
  },
  useTransition: function() {
    var e = Sc(Li)[0], t = Ht().memoizedState;
    return [e, t];
  },
  useMutableSource: Vg,
  useSyncExternalStore: Zg,
  useId: sy,
  unstable_isNewReconciler: !1
}, s1 = { readContext: Dt, useCallback: ry, useContext: Dt, useEffect: Dd, useImperativeHandle: ny, useInsertionEffect: qg, useLayoutEffect: ey, useMemo: oy, useReducer: kc, useRef: Qg, useState: function() {
  return kc(Li);
}, useDebugValue: Hd, useDeferredValue: function(e) {
  var t = Ht();
  return Oe === null ? t.memoizedState = e : iy(t, Oe.memoizedState, e);
}, useTransition: function() {
  var e = kc(Li)[0], t = Ht().memoizedState;
  return [e, t];
}, useMutableSource: Vg, useSyncExternalStore: Zg, useId: sy, unstable_isNewReconciler: !1 };
function Bt(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Su(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Za = { isMounted: function(e) {
  return (e = e._reactInternals) ? xr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ct(), o = Xn(e), i = Sn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Yn(e, i, o), t !== null && (Gt(t, e, o, r), Bs(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ct(), o = Xn(e), i = Sn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Yn(e, i, o), t !== null && (Gt(t, e, o, r), Bs(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ct(), r = Xn(e), o = Sn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Yn(e, o, r), t !== null && (Gt(t, e, r, n), Bs(t, e, r));
} };
function Jp(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ei(n, r) || !Ei(o, i) : !0;
}
function uy(e, t, n) {
  var r = !1, o = tr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Dt(i) : (o = yt(t) ? Sr : ot.current, r = t.contextTypes, i = (r = r != null) ? po(e, o) : tr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Za, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Qp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Za.enqueueReplaceState(t, t.state, null);
}
function ku(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, _d(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Dt(i) : (i = yt(t) ? Sr : ot.current, o.context = po(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Su(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Za.enqueueReplaceState(o, o.state, null), ya(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function yo(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ow(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ec(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Eu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var a1 = typeof WeakMap == "function" ? WeakMap : Map;
function dy(e, t, n) {
  n = Sn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ka || (ka = !0, Ru = r), Eu(e, t);
  }, n;
}
function fy(e, t, n) {
  n = Sn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Eu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Eu(e, t), typeof r != "function" && (Gn === null ? Gn = /* @__PURE__ */ new Set([this]) : Gn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function qp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new a1();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = S1.bind(null, e, t, n), t.then(e, e));
}
function em(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Sn(-1, 1), t.tag = 2, Yn(n, t, 1))), n.lanes |= 1), e);
}
var l1 = Pn.ReactCurrentOwner, ht = !1;
function lt(e, t, n, r) {
  t.child = e === null ? Ug(t, null, n, r) : ho(t, e.child, n, r);
}
function nm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ao(t, o), r = Md(e, t, n, r, i, o), n = Id(), e !== null && !ht ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Cn(e, t, o)) : (fe && n && Ad(t), t.flags |= 1, lt(e, t, r, o), t.child);
}
function rm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Wd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, py(e, t, i, r, o)) : (e = Gs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ei, n(s, r) && e.ref === t.ref)
      return Cn(e, t, o);
  }
  return t.flags |= 1, e = Jn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function py(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ei(i, r) && e.ref === t.ref)
      if (ht = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (ht = !0);
      else
        return t.lanes = e.lanes, Cn(e, t, o);
  }
  return Au(e, t, n, r, o);
}
function my(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ce(eo, St), St |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ce(eo, St), St |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ce(eo, St), St |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ce(eo, St), St |= r;
  return lt(e, t, o, n), t.child;
}
function hy(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Au(e, t, n, r, o) {
  var i = yt(n) ? Sr : ot.current;
  return i = po(t, i), ao(t, o), n = Md(e, t, n, r, i, o), r = Id(), e !== null && !ht ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Cn(e, t, o)) : (fe && r && Ad(t), t.flags |= 1, lt(e, t, n, o), t.child);
}
function om(e, t, n, r, o) {
  if (yt(n)) {
    var i = !0;
    fa(t);
  } else
    i = !1;
  if (ao(t, o), t.stateNode === null)
    Zs(e, t), uy(t, n, r), ku(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Dt(c) : (c = yt(n) ? Sr : ot.current, c = po(t, c));
    var f = n.getDerivedStateFromProps, u = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    u || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && Qp(t, s, r, c), Mn = !1;
    var p = t.memoizedState;
    s.state = p, ya(t, r, s, o), l = t.memoizedState, a !== r || p !== l || gt.current || Mn ? (typeof f == "function" && (Su(t, n, f, r), l = t.memoizedState), (a = Mn || Jp(t, n, a, r, p, l, c)) ? (u || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = c, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Bg(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Bt(t.type, a), s.props = c, u = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Dt(l) : (l = yt(n) ? Sr : ot.current, l = po(t, l));
    var v = n.getDerivedStateFromProps;
    (f = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== u || p !== l) && Qp(t, s, r, l), Mn = !1, p = t.memoizedState, s.state = p, ya(t, r, s, o);
    var S = t.memoizedState;
    a !== u || p !== S || gt.current || Mn ? (typeof v == "function" && (Su(t, n, v, r), S = t.memoizedState), (c = Mn || Jp(t, n, c, r, p, S, l) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = l, r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Cu(e, t, n, r, i, o);
}
function Cu(e, t, n, r, o, i) {
  hy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return o && Bp(t, n, !1), Cn(e, t, i);
  r = t.stateNode, l1.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = ho(t, e.child, null, i), t.child = ho(t, null, a, i)) : lt(e, t, a, i), t.memoizedState = r.state, o && Bp(t, n, !0), t.child;
}
function gy(e) {
  var t = e.stateNode;
  t.pendingContext ? jp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && jp(e, t.context, !1), zd(e, t.containerInfo);
}
function im(e, t, n, r, o) {
  return mo(), bd(o), t.flags |= 256, lt(e, t, n, r), t.child;
}
var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yy(e, t, n) {
  var r = t.pendingProps, o = pe.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ce(pe, o & 1), e === null)
    return wu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ga(s, r, 0, null), e = Tr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Nu(n), t.memoizedState = bu, e) : Fd(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return c1(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Jn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Jn(a, i) : (i = Tr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Nu(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = bu, r;
  }
  return i = e.child, e = i.sibling, r = Jn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Fd(e, t) {
  return t = Ga({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ks(e, t, n, r) {
  return r !== null && bd(r), ho(t, e.child, null, n), e = Fd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function c1(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ec(Error(I(422))), ks(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ga({ mode: "visible", children: r.children }, o, 0, null), i = Tr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ho(t, e.child, null, s), t.child.memoizedState = Nu(s), t.memoizedState = bu, i);
  if (!(t.mode & 1))
    return ks(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(I(419)), r = Ec(i, r, void 0), ks(e, t, s, r);
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, An(e, o), Gt(r, e, o, -1));
    }
    return Zd(), r = Ec(Error(I(421))), ks(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = k1.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, At = Wn(o.nextSibling), Ct = t, fe = !0, Vt = null, e !== null && (zt[Rt++] = wn, zt[Rt++] = Tn, zt[Rt++] = kr, wn = e.id, Tn = e.overflow, kr = t), t = Fd(t, r.children), t.flags |= 4096, t);
}
function sm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Tu(e.return, t, n);
}
function Ac(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function vy(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (lt(e, t, r.children, n), r = pe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && sm(e, n, t);
          else if (e.tag === 19)
            sm(e, n, t);
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
          e = n.alternate, e !== null && va(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ac(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && va(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Ac(t, !0, n, null, i);
        break;
      case "together":
        Ac(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zs(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Cn(e, t, n) {
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
function u1(e, t, n) {
  switch (t.tag) {
    case 3:
      gy(t), mo();
      break;
    case 5:
      Kg(t);
      break;
    case 1:
      yt(t.type) && fa(t);
      break;
    case 4:
      zd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ce(ha, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ce(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? yy(e, t, n) : (ce(pe, pe.current & 1), e = Cn(e, t, n), e !== null ? e.sibling : null);
      ce(pe, pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return vy(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ce(pe, pe.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, my(e, t, n);
  }
  return Cn(e, t, n);
}
var wy, Pu, Ty, Sy;
wy = function(e, t) {
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
Pu = function() {
};
Ty = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, yr(un.current);
    var i = null;
    switch (n) {
      case "input":
        o = Xc(e, o), r = Xc(e, r), i = [];
        break;
      case "select":
        o = he({}, o, { value: void 0 }), r = he({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = qc(e, o), r = qc(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ua);
    }
    tu(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (s in a)
            a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (gi.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
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
          c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (gi.hasOwnProperty(c) ? (l != null && c === "onScroll" && ue("scroll", e), i || a === l || (i = [])) : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Sy = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ko(e, t) {
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
function d1(e, t, n) {
  var r = t.pendingProps;
  switch (Cd(t), t.tag) {
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
      return yt(t.type) && da(), tt(t), null;
    case 3:
      return r = t.stateNode, go(), de(gt), de(ot), Od(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ts(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Vt !== null && (Mu(Vt), Vt = null))), Pu(e, t), tt(t), null;
    case 5:
      Rd(t);
      var o = yr(Pi.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Ty(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(I(166));
          return tt(t), null;
        }
        if (e = yr(un.current), Ts(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ln] = t, r[bi] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < ei.length; o++)
                ue(ei[o], r);
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
              hp(r, i), ue("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ue("invalid", r);
              break;
            case "textarea":
              yp(r, i), ue("invalid", r);
          }
          tu(n, i), o = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && ws(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && ws(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : gi.hasOwnProperty(s) && a != null && s === "onScroll" && ue("scroll", r);
            }
          switch (n) {
            case "input":
              ds(r), gp(r, i, !0);
              break;
            case "textarea":
              ds(r), vp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ua);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Gh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ln] = t, e[bi] = r, wy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = nu(n, r), n) {
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
                for (o = 0; o < ei.length; o++)
                  ue(ei[o], e);
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
                hp(e, r), o = Xc(e, r), ue("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = he({}, r, { value: void 0 }), ue("invalid", e);
                break;
              case "textarea":
                yp(e, r), o = qc(e, r), ue("invalid", e);
                break;
              default:
                o = r;
            }
            tu(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? Qh(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Xh(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && yi(e, l) : typeof l == "number" && yi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (gi.hasOwnProperty(i) ? l != null && i === "onScroll" && ue("scroll", e) : l != null && ud(e, i, l, s));
              }
            switch (n) {
              case "input":
                ds(e), gp(e, r, !1);
                break;
              case "textarea":
                ds(e), vp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + er(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ro(e, !!r.multiple, i, !1) : r.defaultValue != null && ro(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ua);
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
        Sy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(I(166));
        if (n = yr(Pi.current), yr(un.current), Ts(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ln] = t, (i = r.nodeValue !== n) && (e = Ct, e !== null))
            switch (e.tag) {
              case 3:
                ws(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ws(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ln] = t, t.stateNode = r;
      }
      return tt(t), null;
    case 13:
      if (de(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && At !== null && t.mode & 1 && !(t.flags & 128))
          Hg(), mo(), t.flags |= 98560, i = !1;
        else if (i = Ts(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(I(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(I(317));
            i[ln] = t;
          } else
            mo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          tt(t), i = !1;
        } else
          Vt !== null && (Mu(Vt), Vt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? $e === 0 && ($e = 3) : Zd())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
    case 4:
      return go(), Pu(e, t), e === null && Ai(t.stateNode.containerInfo), tt(t), null;
    case 10:
      return xd(t.type._context), tt(t), null;
    case 17:
      return yt(t.type) && da(), tt(t), null;
    case 19:
      if (de(pe), i = t.memoizedState, i === null)
        return tt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r)
          Ko(i, !1);
        else {
          if ($e !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = va(e), s !== null) {
                for (t.flags |= 128, Ko(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ce(pe, pe.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ae() > vo && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = va(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ko(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !fe)
              return tt(t), null;
          } else
            2 * Ae() - i.renderingStartTime > vo && n !== 1073741824 && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ae(), t.sibling = null, n = pe.current, ce(pe, r ? n & 1 | 2 : n & 1), t) : (tt(t), null);
    case 22:
    case 23:
      return Vd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? St & 1073741824 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function f1(e, t) {
  switch (Cd(t), t.tag) {
    case 1:
      return yt(t.type) && da(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return go(), de(gt), de(ot), Od(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Rd(t), null;
    case 13:
      if (de(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(I(340));
        mo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return de(pe), null;
    case 4:
      return go(), null;
    case 10:
      return xd(t.type._context), null;
    case 22:
    case 23:
      return Vd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Es = !1, rt = !1, p1 = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function qr(e, t) {
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
function xu(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var am = !1;
function m1(e, t) {
  if (fu = aa, e = bg(), Ed(e)) {
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
  for (pu = { focusedElem: e, selectionRange: n }, aa = !1, B = t; B !== null; )
    if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, B = e;
    else
      for (; B !== null; ) {
        t = B;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var T = S.memoizedProps, _ = S.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? T : Bt(t.type, T), _);
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
  return S = am, am = !1, S;
}
function ui(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && xu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Wa(e, t) {
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
function Lu(e) {
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
function ky(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ky(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ln], delete t[bi], delete t[gu], delete t[XT], delete t[JT])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ey(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lm(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ey(e.return))
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
function _u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ua));
  else if (r !== 4 && (e = e.child, e !== null))
    for (_u(e, t, n), e = e.sibling; e !== null; )
      _u(e, t, n), e = e.sibling;
}
function zu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (zu(e, t, n), e = e.sibling; e !== null; )
      zu(e, t, n), e = e.sibling;
}
var Ve = null, Kt = !1;
function zn(e, t, n) {
  for (n = n.child; n !== null; )
    Ay(e, t, n), n = n.sibling;
}
function Ay(e, t, n) {
  if (cn && typeof cn.onCommitFiberUnmount == "function")
    try {
      cn.onCommitFiberUnmount(Ha, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      rt || qr(n, t);
    case 6:
      var r = Ve, o = Kt;
      Ve = null, zn(e, t, n), Ve = r, Kt = o, Ve !== null && (Kt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null && (Kt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? yc(e.parentNode, n) : e.nodeType === 1 && yc(e, n), Si(e)) : yc(Ve, n.stateNode));
      break;
    case 4:
      r = Ve, o = Kt, Ve = n.stateNode.containerInfo, Kt = !0, zn(e, t, n), Ve = r, Kt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!rt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && xu(n, t, s), o = o.next;
        } while (o !== r);
      }
      zn(e, t, n);
      break;
    case 1:
      if (!rt && (qr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          ke(n, t, a);
        }
      zn(e, t, n);
      break;
    case 21:
      zn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (rt = (r = rt) || n.memoizedState !== null, zn(e, t, n), rt = r) : zn(e, t, n);
      break;
    default:
      zn(e, t, n);
  }
}
function cm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new p1()), t.forEach(function(r) {
      var o = E1.bind(null, e, r);
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
        Ay(i, s, o), Ve = null, Kt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (c) {
        ke(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Cy(t, e), t = t.sibling;
}
function Cy(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (jt(t, e), tn(e), r & 4) {
        try {
          ui(3, e, e.return), Wa(3, e);
        } catch (T) {
          ke(e, e.return, T);
        }
        try {
          ui(5, e, e.return);
        } catch (T) {
          ke(e, e.return, T);
        }
      }
      break;
    case 1:
      jt(t, e), tn(e), r & 512 && n !== null && qr(n, n.return);
      break;
    case 5:
      if (jt(t, e), tn(e), r & 512 && n !== null && qr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          yi(o, "");
        } catch (T) {
          ke(e, e.return, T);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && Wh(o, i), nu(a, s);
            var c = nu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var f = l[s], u = l[s + 1];
              f === "style" ? Qh(o, u) : f === "dangerouslySetInnerHTML" ? Xh(o, u) : f === "children" ? yi(o, u) : ud(o, f, u, c);
            }
            switch (a) {
              case "input":
                Jc(o, i);
                break;
              case "textarea":
                Yh(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null ? ro(o, !!i.multiple, v, !1) : p !== !!i.multiple && (i.defaultValue != null ? ro(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : ro(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[bi] = i;
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
          Si(t.containerInfo);
        } catch (T) {
          ke(e, e.return, T);
        }
      break;
    case 4:
      jt(t, e), tn(e);
      break;
    case 13:
      jt(t, e), tn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Bd = Ae())), r & 4 && cm(e);
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
                  ui(4, p, p.return);
                  break;
                case 1:
                  qr(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                    } catch (T) {
                      ke(r, n, T);
                    }
                  }
                  break;
                case 5:
                  qr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    dm(u);
                    continue;
                  }
              }
              v !== null ? (v.return = p, B = v) : dm(u);
            }
            f = f.sibling;
          }
        e:
          for (f = null, u = e; ; ) {
            if (u.tag === 5) {
              if (f === null) {
                f = u;
                try {
                  o = u.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = u.stateNode, l = u.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Jh("display", s));
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
      jt(t, e), tn(e), r & 4 && cm(e);
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
          if (Ey(n)) {
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
          r.flags & 32 && (yi(o, ""), r.flags &= -33);
          var i = lm(e);
          zu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = lm(e);
          _u(e, a, s);
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
function h1(e, t, n) {
  B = e, by(e);
}
function by(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Es;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || rt;
        a = Es;
        var c = rt;
        if (Es = s, (rt = l) && !c)
          for (B = o; B !== null; )
            s = B, l = s.child, s.tag === 22 && s.memoizedState !== null ? fm(o) : l !== null ? (l.return = s, B = l) : fm(o);
        for (; i !== null; )
          B = i, by(i), i = i.sibling;
        B = o, Es = a, rt = c;
      }
      um(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : um(e);
  }
}
function um(e) {
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
              rt || Wa(5, t);
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
              i !== null && Yp(t, i, r);
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
                Yp(t, s, n);
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
                    u !== null && Si(u);
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
        rt || t.flags & 512 && Lu(t);
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
function dm(e) {
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
function fm(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wa(4, t);
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
            Lu(t);
          } catch (l) {
            ke(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Lu(t);
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
var g1 = Math.ceil, Sa = Pn.ReactCurrentDispatcher, Ud = Pn.ReactCurrentOwner, It = Pn.ReactCurrentBatchConfig, te = 0, Fe = null, Le = null, Ge = 0, St = 0, eo = ir(0), $e = 0, zi = null, Ar = 0, Ya = 0, jd = 0, di = null, mt = null, Bd = 0, vo = 1 / 0, mn = null, ka = !1, Ru = null, Gn = null, As = !1, Un = null, Ea = 0, fi = 0, Ou = null, Ws = -1, Ys = 0;
function ct() {
  return te & 6 ? Ae() : Ws !== -1 ? Ws : Ws = Ae();
}
function Xn(e) {
  return e.mode & 1 ? te & 2 && Ge !== 0 ? Ge & -Ge : qT.transition !== null ? (Ys === 0 && (Ys = ug()), Ys) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yg(e.type)), e) : 1;
}
function Gt(e, t, n, r) {
  if (50 < fi)
    throw fi = 0, Ou = null, Error(I(185));
  Ki(e, n, r), (!(te & 2) || e !== Fe) && (e === Fe && (!(te & 2) && (Ya |= n), $e === 4 && Dn(e, Ge)), vt(e, r), n === 1 && te === 0 && !(t.mode & 1) && (vo = Ae() + 500, Ka && sr()));
}
function vt(e, t) {
  var n = e.callbackNode;
  qw(e, t);
  var r = sa(e, e === Fe ? Ge : 0);
  if (r === 0)
    n !== null && Sp(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Sp(n), t === 1)
      e.tag === 0 ? QT(pm.bind(null, e)) : Mg(pm.bind(null, e)), YT(function() {
        !(te & 6) && sr();
      }), n = null;
    else {
      switch (dg(r)) {
        case 1:
          n = hd;
          break;
        case 4:
          n = lg;
          break;
        case 16:
          n = ia;
          break;
        case 536870912:
          n = cg;
          break;
        default:
          n = ia;
      }
      n = Oy(n, Ny.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ny(e, t) {
  if (Ws = -1, Ys = 0, te & 6)
    throw Error(I(327));
  var n = e.callbackNode;
  if (lo() && e.callbackNode !== n)
    return null;
  var r = sa(e, e === Fe ? Ge : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Aa(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var i = xy();
    (Fe !== e || Ge !== t) && (mn = null, vo = Ae() + 500, wr(e, t));
    do
      try {
        w1();
        break;
      } catch (a) {
        Py(e, a);
      }
    while (1);
    Pd(), Sa.current = i, te = o, Le !== null ? t = 0 : (Fe = null, Ge = 0, t = $e);
  }
  if (t !== 0) {
    if (t === 2 && (o = au(e), o !== 0 && (r = o, t = $u(e, o))), t === 1)
      throw n = zi, wr(e, 0), Dn(e, r), vt(e, Ae()), n;
    if (t === 6)
      Dn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !y1(o) && (t = Aa(e, r), t === 2 && (i = au(e), i !== 0 && (r = i, t = $u(e, i))), t === 1))
        throw n = zi, wr(e, 0), Dn(e, r), vt(e, Ae()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          pr(e, mt, mn);
          break;
        case 3:
          if (Dn(e, r), (r & 130023424) === r && (t = Bd + 500 - Ae(), 10 < t)) {
            if (sa(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ct(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = hu(pr.bind(null, e, mt, mn), t);
            break;
          }
          pr(e, mt, mn);
          break;
        case 4:
          if (Dn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Yt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * g1(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = hu(pr.bind(null, e, mt, mn), r);
            break;
          }
          pr(e, mt, mn);
          break;
        case 5:
          pr(e, mt, mn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return vt(e, Ae()), e.callbackNode === n ? Ny.bind(null, e) : null;
}
function $u(e, t) {
  var n = di;
  return e.current.memoizedState.isDehydrated && (wr(e, t).flags |= 256), e = Aa(e, t), e !== 2 && (t = mt, mt = n, t !== null && Mu(t)), e;
}
function Mu(e) {
  mt === null ? mt = e : mt.push.apply(mt, e);
}
function y1(e) {
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
function Dn(e, t) {
  for (t &= ~jd, t &= ~Ya, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Yt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function pm(e) {
  if (te & 6)
    throw Error(I(327));
  lo();
  var t = sa(e, 0);
  if (!(t & 1))
    return vt(e, Ae()), null;
  var n = Aa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = au(e);
    r !== 0 && (t = r, n = $u(e, r));
  }
  if (n === 1)
    throw n = zi, wr(e, 0), Dn(e, t), vt(e, Ae()), n;
  if (n === 6)
    throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, pr(e, mt, mn), vt(e, Ae()), null;
}
function Kd(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = n, te === 0 && (vo = Ae() + 500, Ka && sr());
  }
}
function Cr(e) {
  Un !== null && Un.tag === 0 && !(te & 6) && lo();
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
function Vd() {
  St = eo.current, de(eo);
}
function wr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, WT(n)), Le !== null)
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch (Cd(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && da();
          break;
        case 3:
          go(), de(gt), de(ot), Od();
          break;
        case 5:
          Rd(r);
          break;
        case 4:
          go();
          break;
        case 13:
          de(pe);
          break;
        case 19:
          de(pe);
          break;
        case 10:
          xd(r.type._context);
          break;
        case 22:
        case 23:
          Vd();
      }
      n = n.return;
    }
  if (Fe = e, Le = e = Jn(e.current, null), Ge = St = t, $e = 0, zi = null, jd = Ya = Ar = 0, mt = di = null, gr !== null) {
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
function Py(e, t) {
  do {
    var n = Le;
    try {
      if (Pd(), Ks.current = Ta, wa) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        wa = !1;
      }
      if (Er = 0, He = Oe = me = null, ci = !1, xi = 0, Ud.current = null, n === null || n.return === null) {
        $e = 1, zi = t, Le = null;
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
          var v = em(s);
          if (v !== null) {
            v.flags &= -257, tm(v, s, a, i, t), v.mode & 1 && qp(i, c, t), t = v, l = c;
            var S = t.updateQueue;
            if (S === null) {
              var T = /* @__PURE__ */ new Set();
              T.add(l), t.updateQueue = T;
            } else
              S.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              qp(i, c, t), Zd();
              break e;
            }
            l = Error(I(426));
          }
        } else if (fe && a.mode & 1) {
          var _ = em(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), tm(_, s, a, i, t), bd(yo(l, a));
            break e;
          }
        }
        i = l = yo(l, a), $e !== 4 && ($e = 2), di === null ? di = [i] : di.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = dy(i, l, t);
              Wp(i, h);
              break e;
            case 1:
              a = l;
              var m = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Gn === null || !Gn.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = fy(i, a, t);
                Wp(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _y(n);
    } catch (C) {
      t = C, Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function xy() {
  var e = Sa.current;
  return Sa.current = Ta, e === null ? Ta : e;
}
function Zd() {
  ($e === 0 || $e === 3 || $e === 2) && ($e = 4), Fe === null || !(Ar & 268435455) && !(Ya & 268435455) || Dn(Fe, Ge);
}
function Aa(e, t) {
  var n = te;
  te |= 2;
  var r = xy();
  (Fe !== e || Ge !== t) && (mn = null, wr(e, t));
  do
    try {
      v1();
      break;
    } catch (o) {
      Py(e, o);
    }
  while (1);
  if (Pd(), te = n, Sa.current = r, Le !== null)
    throw Error(I(261));
  return Fe = null, Ge = 0, $e;
}
function v1() {
  for (; Le !== null; )
    Ly(Le);
}
function w1() {
  for (; Le !== null && !Kw(); )
    Ly(Le);
}
function Ly(e) {
  var t = Ry(e.alternate, e, St);
  e.memoizedProps = e.pendingProps, t === null ? _y(e) : Le = t, Ud.current = null;
}
function _y(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = f1(n, t), n !== null) {
        n.flags &= 32767, Le = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        $e = 6, Le = null;
        return;
      }
    } else if (n = d1(n, t, St), n !== null) {
      Le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  $e === 0 && ($e = 5);
}
function pr(e, t, n) {
  var r = se, o = It.transition;
  try {
    It.transition = null, se = 1, T1(e, t, n, r);
  } finally {
    It.transition = o, se = r;
  }
  return null;
}
function T1(e, t, n, r) {
  do
    lo();
  while (Un !== null);
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
  if (eT(e, i), e === Fe && (Le = Fe = null, Ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || As || (As = !0, Oy(ia, function() {
    return lo(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = It.transition, It.transition = null;
    var s = se;
    se = 1;
    var a = te;
    te |= 4, Ud.current = null, m1(e, n), Cy(n, e), FT(pu), aa = !!fu, pu = fu = null, e.current = n, h1(n), Vw(), te = a, se = s, It.transition = i;
  } else
    e.current = n;
  if (As && (As = !1, Un = e, Ea = o), i = e.pendingLanes, i === 0 && (Gn = null), Yw(n.stateNode), vt(e, Ae()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ka)
    throw ka = !1, e = Ru, Ru = null, e;
  return Ea & 1 && e.tag !== 0 && lo(), i = e.pendingLanes, i & 1 ? e === Ou ? fi++ : (fi = 0, Ou = e) : fi = 0, sr(), null;
}
function lo() {
  if (Un !== null) {
    var e = dg(Ea), t = It.transition, n = se;
    try {
      if (It.transition = null, se = 16 > e ? 16 : e, Un === null)
        var r = !1;
      else {
        if (e = Un, Un = null, Ea = 0, te & 6)
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
                      ui(8, f, i);
                  }
                  var u = f.child;
                  if (u !== null)
                    u.return = f, B = u;
                  else
                    for (; B !== null; ) {
                      f = B;
                      var p = f.sibling, v = f.return;
                      if (ky(f), f === c) {
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
              var S = i.alternate;
              if (S !== null) {
                var T = S.child;
                if (T !== null) {
                  S.child = null;
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
                      ui(9, i, i.return);
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
                        Wa(9, a);
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
        if (te = o, sr(), cn && typeof cn.onPostCommitFiberRoot == "function")
          try {
            cn.onPostCommitFiberRoot(Ha, e);
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
function mm(e, t, n) {
  t = yo(n, t), t = dy(e, t, 1), e = Yn(e, t, 1), t = ct(), e !== null && (Ki(e, 1, t), vt(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3)
    mm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        mm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gn === null || !Gn.has(r))) {
          e = yo(n, e), e = fy(t, e, 1), t = Yn(t, e, 1), e = ct(), t !== null && (Ki(t, 1, e), vt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function S1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ct(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (Ge & n) === n && ($e === 4 || $e === 3 && (Ge & 130023424) === Ge && 500 > Ae() - Bd ? wr(e, 0) : jd |= n), vt(e, t);
}
function zy(e, t) {
  t === 0 && (e.mode & 1 ? (t = ms, ms <<= 1, !(ms & 130023424) && (ms = 4194304)) : t = 1);
  var n = ct();
  e = An(e, t), e !== null && (Ki(e, t, n), vt(e, n));
}
function k1(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), zy(e, n);
}
function E1(e, t) {
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
  r !== null && r.delete(t), zy(e, n);
}
var Ry;
Ry = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || gt.current)
      ht = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return ht = !1, u1(e, t, n);
      ht = !!(e.flags & 131072);
    }
  else
    ht = !1, fe && t.flags & 1048576 && Ig(t, ma, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Zs(e, t), e = t.pendingProps;
      var o = po(t, ot.current);
      ao(t, n), o = Md(null, t, r, e, o, n);
      var i = Id();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(r) ? (i = !0, fa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, _d(t), o.updater = Za, t.stateNode = o, o._reactInternals = t, ku(t, r, e, n), t = Cu(null, t, r, !0, i, n)) : (t.tag = 0, fe && i && Ad(t), lt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Zs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = C1(r), e = Bt(r, e), o) {
          case 0:
            t = Au(null, t, r, e, n);
            break e;
          case 1:
            t = om(null, t, r, e, n);
            break e;
          case 11:
            t = nm(null, t, r, e, n);
            break e;
          case 14:
            t = rm(null, t, r, Bt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bt(r, o), Au(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bt(r, o), om(e, t, r, o, n);
    case 3:
      e: {
        if (gy(t), e === null)
          throw Error(I(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Bg(e, t), ya(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = yo(Error(I(423)), t), t = im(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = yo(Error(I(424)), t), t = im(e, t, r, n, o);
            break e;
          } else
            for (At = Wn(t.stateNode.containerInfo.firstChild), Ct = t, fe = !0, Vt = null, n = Ug(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (mo(), r === o) {
            t = Cn(e, t, n);
            break e;
          }
          lt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Kg(t), e === null && wu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, mu(r, o) ? s = null : i !== null && mu(r, i) && (t.flags |= 32), hy(e, t), lt(e, t, s, n), t.child;
    case 6:
      return e === null && wu(t), null;
    case 13:
      return yy(e, t, n);
    case 4:
      return zd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ho(t, null, r, n) : lt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bt(r, o), nm(e, t, r, o, n);
    case 7:
      return lt(e, t, t.pendingProps, n), t.child;
    case 8:
      return lt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return lt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ce(ha, r._currentValue), r._currentValue = s, i !== null)
          if (Xt(i.value, s)) {
            if (i.children === o.children && !gt.current) {
              t = Cn(e, t, n);
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
                      l = Sn(-1, n & -n), l.tag = 2;
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null ? l.next = l : (l.next = f.next, f.next = l), c.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Tu(
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
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Tu(s, n, t), s = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, ao(t, n), o = Dt(o), r = r(o), t.flags |= 1, lt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Bt(r, t.pendingProps), o = Bt(r.type, o), rm(e, t, r, o, n);
    case 15:
      return py(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bt(r, o), Zs(e, t), t.tag = 1, yt(r) ? (e = !0, fa(t)) : e = !1, ao(t, n), uy(t, r, o), ku(t, r, o, n), Cu(null, t, r, !0, e, n);
    case 19:
      return vy(e, t, n);
    case 22:
      return my(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Oy(e, t) {
  return ag(e, t);
}
function A1(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Mt(e, t, n, r) {
  return new A1(e, t, n, r);
}
function Wd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function C1(e) {
  if (typeof e == "function")
    return Wd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fd)
      return 11;
    if (e === pd)
      return 14;
  }
  return 2;
}
function Jn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Gs(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function")
    Wd(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case Kr:
          return Tr(n.children, o, i, t);
        case dd:
          s = 8, o |= 8;
          break;
        case Zc:
          return e = Mt(12, n, t, o | 2), e.elementType = Zc, e.lanes = i, e;
        case Wc:
          return e = Mt(13, n, t, o), e.elementType = Wc, e.lanes = i, e;
        case Yc:
          return e = Mt(19, n, t, o), e.elementType = Yc, e.lanes = i, e;
        case Kh:
          return Ga(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case jh:
                s = 10;
                break e;
              case Bh:
                s = 9;
                break e;
              case fd:
                s = 11;
                break e;
              case pd:
                s = 14;
                break e;
              case $n:
                s = 16, r = null;
                break e;
            }
          throw Error(I(130, e == null ? e : typeof e, ""));
      }
  return t = Mt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Tr(e, t, n, r) {
  return e = Mt(7, e, r, t), e.lanes = n, e;
}
function Ga(e, t, n, r) {
  return e = Mt(22, e, r, t), e.elementType = Kh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Cc(e, t, n) {
  return e = Mt(6, e, null, t), e.lanes = n, e;
}
function bc(e, t, n) {
  return t = Mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function b1(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = sc(0), this.expirationTimes = sc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = sc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Yd(e, t, n, r, o, i, s, a, l) {
  return e = new b1(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Mt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _d(i), e;
}
function N1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Br, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function $y(e) {
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
      return $g(e, n, t);
  }
  return t;
}
function My(e, t, n, r, o, i, s, a, l) {
  return e = Yd(n, r, !0, e, o, i, s, a, l), e.context = $y(null), n = e.current, r = ct(), o = Xn(n), i = Sn(r, o), i.callback = t ?? null, Yn(n, i, o), e.current.lanes = o, Ki(e, o, r), vt(e, r), e;
}
function Xa(e, t, n, r) {
  var o = t.current, i = ct(), s = Xn(o);
  return n = $y(n), t.context === null ? t.context = n : t.pendingContext = n, t = Sn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Yn(o, t, s), e !== null && (Gt(e, o, s, i), Bs(e, o, s)), s;
}
function Ca(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gd(e, t) {
  hm(e, t), (e = e.alternate) && hm(e, t);
}
function P1() {
  return null;
}
var Iy = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Xd(e) {
  this._internalRoot = e;
}
Ja.prototype.render = Xd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(I(409));
  Xa(e, t, null, null);
};
Ja.prototype.unmount = Xd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cr(function() {
      Xa(null, e, null, null);
    }), t[En] = null;
  }
};
function Ja(e) {
  this._internalRoot = e;
}
Ja.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = mg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++)
      ;
    In.splice(n, 0, e), n === 0 && gg(e);
  }
};
function Jd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Qa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function gm() {
}
function x1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = Ca(s);
        i.call(c);
      };
    }
    var s = My(t, r, e, 0, null, !1, !1, "", gm);
    return e._reactRootContainer = s, e[En] = s.current, Ai(e.nodeType === 8 ? e.parentNode : e), Cr(), s;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = Ca(l);
      a.call(c);
    };
  }
  var l = Yd(e, 0, !1, null, null, !1, !1, "", gm);
  return e._reactRootContainer = l, e[En] = l.current, Ai(e.nodeType === 8 ? e.parentNode : e), Cr(function() {
    Xa(t, l, n, r);
  }), l;
}
function qa(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = Ca(s);
        a.call(l);
      };
    }
    Xa(t, s, e, o);
  } else
    s = x1(n, t, e, o, r);
  return Ca(s);
}
fg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qo(t.pendingLanes);
        n !== 0 && (gd(t, n | 1), vt(t, Ae()), !(te & 6) && (vo = Ae() + 500, sr()));
      }
      break;
    case 13:
      Cr(function() {
        var r = An(e, 1);
        if (r !== null) {
          var o = ct();
          Gt(r, e, 1, o);
        }
      }), Gd(e, 1);
  }
};
yd = function(e) {
  if (e.tag === 13) {
    var t = An(e, 134217728);
    if (t !== null) {
      var n = ct();
      Gt(t, e, 134217728, n);
    }
    Gd(e, 134217728);
  }
};
pg = function(e) {
  if (e.tag === 13) {
    var t = Xn(e), n = An(e, t);
    if (n !== null) {
      var r = ct();
      Gt(n, e, t, r);
    }
    Gd(e, t);
  }
};
mg = function() {
  return se;
};
hg = function(e, t) {
  var n = se;
  try {
    return se = e, t();
  } finally {
    se = n;
  }
};
ou = function(e, t, n) {
  switch (t) {
    case "input":
      if (Jc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ba(r);
            if (!o)
              throw Error(I(90));
            Zh(r), Jc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Yh(e, n);
      break;
    case "select":
      t = n.value, t != null && ro(e, !!n.multiple, t, !1);
  }
};
tg = Kd;
ng = Cr;
var L1 = { usingClientEntryPoint: !1, Events: [Zi, Yr, Ba, qh, eg, Kd] }, Vo = { findFiberByHostInstance: hr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _1 = { bundleType: Vo.bundleType, version: Vo.version, rendererPackageName: Vo.rendererPackageName, rendererConfig: Vo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Pn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ig(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Vo.findFiberByHostInstance || P1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cs.isDisabled && Cs.supportsFiber)
    try {
      Ha = Cs.inject(_1), cn = Cs;
    } catch {
    }
}
Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L1;
Pt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Jd(t))
    throw Error(I(200));
  return N1(e, t, null, n);
};
Pt.createRoot = function(e, t) {
  if (!Jd(e))
    throw Error(I(299));
  var n = !1, r = "", o = Iy;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Yd(e, 1, !1, null, null, n, !1, r, o), e[En] = t.current, Ai(e.nodeType === 8 ? e.parentNode : e), new Xd(t);
};
Pt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = ig(t), e = e === null ? null : e.stateNode, e;
};
Pt.flushSync = function(e) {
  return Cr(e);
};
Pt.hydrate = function(e, t, n) {
  if (!Qa(t))
    throw Error(I(200));
  return qa(null, e, t, !0, n);
};
Pt.hydrateRoot = function(e, t, n) {
  if (!Jd(e))
    throw Error(I(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Iy;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = My(t, null, e, 1, n ?? null, o, !1, i, s), e[En] = t.current, Ai(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Ja(t);
};
Pt.render = function(e, t, n) {
  if (!Qa(t))
    throw Error(I(200));
  return qa(null, e, t, !1, n);
};
Pt.unmountComponentAtNode = function(e) {
  if (!Qa(e))
    throw Error(I(40));
  return e._reactRootContainer ? (Cr(function() {
    qa(null, null, e, !1, function() {
      e._reactRootContainer = null, e[En] = null;
    });
  }), !0) : !1;
};
Pt.unstable_batchedUpdates = Kd;
Pt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Qa(n))
    throw Error(I(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(I(38));
  return qa(e, t, n, !1, r);
};
Pt.version = "18.3.1-next-f1338f8080-20240426";
function Dy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dy);
    } catch (e) {
      console.error(e);
    }
}
Dy(), Dh.exports = Pt;
var z1 = Dh.exports, Hy, ym = z1;
Hy = ym.createRoot, ym.hydrateRoot;
function R1(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const vm = "$$material";
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
function el(e, t) {
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
var O1 = !1;
function $1(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function M1(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var I1 = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !O1 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(M1(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = $1(o);
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
}(), nt = "-ms-", ba = "-moz-", oe = "-webkit-", Fy = "comm", Qd = "rule", qd = "decl", D1 = "@import", Uy = "@keyframes", H1 = "@layer", F1 = Math.abs, tl = String.fromCharCode, U1 = Object.assign;
function j1(e, t) {
  return Ze(e, 0) ^ 45 ? (((t << 2 ^ Ze(e, 0)) << 2 ^ Ze(e, 1)) << 2 ^ Ze(e, 2)) << 2 ^ Ze(e, 3) : 0;
}
function jy(e) {
  return e.trim();
}
function B1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, n) {
  return e.replace(t, n);
}
function Iu(e, t) {
  return e.indexOf(t);
}
function Ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ri(e, t, n) {
  return e.slice(t, n);
}
function sn(e) {
  return e.length;
}
function ef(e) {
  return e.length;
}
function bs(e, t) {
  return t.push(e), e;
}
function K1(e, t) {
  return e.map(t).join("");
}
var nl = 1, wo = 1, By = 0, wt = 0, xe = 0, Po = "";
function rl(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: nl, column: wo, length: s, return: "" };
}
function Zo(e, t) {
  return U1(rl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function V1() {
  return xe;
}
function Z1() {
  return xe = wt > 0 ? Ze(Po, --wt) : 0, wo--, xe === 10 && (wo = 1, nl--), xe;
}
function bt() {
  return xe = wt < By ? Ze(Po, wt++) : 0, wo++, xe === 10 && (wo = 1, nl++), xe;
}
function dn() {
  return Ze(Po, wt);
}
function Xs() {
  return wt;
}
function Yi(e, t) {
  return Ri(Po, e, t);
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
function Ky(e) {
  return nl = wo = 1, By = sn(Po = e), wt = 0, [];
}
function Vy(e) {
  return Po = "", e;
}
function Js(e) {
  return jy(Yi(wt - 1, Du(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function W1(e) {
  for (; (xe = dn()) && xe < 33; )
    bt();
  return Oi(e) > 2 || Oi(xe) > 3 ? "" : " ";
}
function Y1(e, t) {
  for (; --t && bt() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return Yi(e, Xs() + (t < 6 && dn() == 32 && bt() == 32));
}
function Du(e) {
  for (; bt(); )
    switch (xe) {
      case e:
        return wt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Du(xe);
        break;
      case 40:
        e === 41 && Du(e);
        break;
      case 92:
        bt();
        break;
    }
  return wt;
}
function G1(e, t) {
  for (; bt() && e + xe !== 47 + 10; )
    if (e + xe === 42 + 42 && dn() === 47)
      break;
  return "/*" + Yi(t, wt - 1) + "*" + tl(e === 47 ? e : bt());
}
function X1(e) {
  for (; !Oi(dn()); )
    bt();
  return Yi(e, wt);
}
function J1(e) {
  return Vy(Qs("", null, null, null, [""], e = Ky(e), 0, [0], e));
}
function Qs(e, t, n, r, o, i, s, a, l) {
  for (var c = 0, f = 0, u = s, p = 0, v = 0, S = 0, T = 1, _ = 1, h = 1, m = 0, g = "", b = o, C = i, N = r, k = g; _; )
    switch (S = m, m = bt()) {
      case 40:
        if (S != 108 && Ze(k, u - 1) == 58) {
          Iu(k += ie(Js(m), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Js(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += W1(S);
        break;
      case 92:
        k += Y1(Xs() - 1, 7);
        continue;
      case 47:
        switch (dn()) {
          case 42:
          case 47:
            bs(Q1(G1(bt(), Xs()), t, n), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * T:
        a[c++] = sn(k) * h;
      case 125 * T:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            _ = 0;
          case 59 + f:
            h == -1 && (k = ie(k, /\f/g, "")), v > 0 && sn(k) - u && bs(v > 32 ? Tm(k + ";", r, n, u - 1) : Tm(ie(k, " ", "") + ";", r, n, u - 2), l);
            break;
          case 59:
            k += ";";
          default:
            if (bs(N = wm(k, t, n, c, f, o, a, g, b = [], C = [], u), i), m === 123)
              if (f === 0)
                Qs(k, t, N, N, b, i, u, a, C);
              else
                switch (p === 99 && Ze(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qs(e, N, N, r && bs(wm(e, N, N, 0, 0, o, a, g, o, b = [], u), C), o, C, u, a, r ? b : C);
                    break;
                  default:
                    Qs(k, N, N, N, [""], C, 0, a, C);
                }
        }
        c = f = v = 0, T = h = 1, g = k = "", u = s;
        break;
      case 58:
        u = 1 + sn(k), v = S;
      default:
        if (T < 1) {
          if (m == 123)
            --T;
          else if (m == 125 && T++ == 0 && Z1() == 125)
            continue;
        }
        switch (k += tl(m), m * T) {
          case 38:
            h = f > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            a[c++] = (sn(k) - 1) * h, h = 1;
            break;
          case 64:
            dn() === 45 && (k += Js(bt())), p = dn(), f = u = sn(g = k += X1(Xs())), m++;
            break;
          case 45:
            S === 45 && sn(k) == 2 && (T = 0);
        }
    }
  return i;
}
function wm(e, t, n, r, o, i, s, a, l, c, f) {
  for (var u = o - 1, p = o === 0 ? i : [""], v = ef(p), S = 0, T = 0, _ = 0; S < r; ++S)
    for (var h = 0, m = Ri(e, u + 1, u = F1(T = s[S])), g = e; h < v; ++h)
      (g = jy(T > 0 ? p[h] + " " + m : ie(m, /&\f/g, p[h]))) && (l[_++] = g);
  return rl(e, t, n, o === 0 ? Qd : a, l, c, f);
}
function Q1(e, t, n) {
  return rl(e, t, n, Fy, tl(V1()), Ri(e, 2, -2), 0);
}
function Tm(e, t, n, r) {
  return rl(e, t, n, qd, Ri(e, 0, r), Ri(e, r + 1, -1), r);
}
function co(e, t) {
  for (var n = "", r = ef(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function q1(e, t, n, r) {
  switch (e.type) {
    case H1:
      if (e.children.length)
        break;
    case D1:
    case qd:
      return e.return = e.return || e.value;
    case Fy:
      return "";
    case Uy:
      return e.return = e.value + "{" + co(e.children, r) + "}";
    case Qd:
      e.value = e.props.join(",");
  }
  return sn(n = co(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function eS(e) {
  var t = ef(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function tS(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Zy(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var nS = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = dn(), o === 38 && i === 12 && (n[r] = 1), !Oi(i); )
    bt();
  return Yi(t, wt);
}, rS = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Oi(o)) {
      case 0:
        o === 38 && dn() === 12 && (n[r] = 1), t[r] += nS(wt - 1, n, r);
        break;
      case 2:
        t[r] += Js(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = dn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += tl(o);
    }
  while (o = bt());
  return t;
}, oS = function(t, n) {
  return Vy(rS(Ky(t), n));
}, Sm = /* @__PURE__ */ new WeakMap(), iS = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Sm.get(r)) && !o) {
      Sm.set(t, !0);
      for (var i = [], s = oS(n, i), a = r.props, l = 0, c = 0; l < s.length; l++)
        for (var f = 0; f < a.length; f++, c++)
          t.props[c] = i[l] ? s[l].replace(/&\f/g, a[f]) : a[f] + " " + s[l];
    }
  }
}, sS = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Wy(e, t) {
  switch (j1(e, t)) {
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
      return oe + e + ba + e + nt + e + e;
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
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + oe + "$2-$3$1" + ba + (Ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Iu(e, "stretch") ? Wy(ie(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ze(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ze(e, sn(e) - 3 - (~Iu(e, "!important") && 10))) {
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
var aS = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case qd:
        t.return = Wy(t.value, t.length);
        break;
      case Uy:
        return co([Zo(t, {
          value: ie(t.value, "@", "@" + oe)
        })], o);
      case Qd:
        if (t.length)
          return K1(t.props, function(i) {
            switch (B1(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return co([Zo(t, {
                  props: [ie(i, /:(read-\w+)/, ":" + ba + "$1")]
                })], o);
              case "::placeholder":
                return co([Zo(t, {
                  props: [ie(i, /:(plac\w+)/, ":" + oe + "input-$1")]
                }), Zo(t, {
                  props: [ie(i, /:(plac\w+)/, ":" + ba + "$1")]
                }), Zo(t, {
                  props: [ie(i, /:(plac\w+)/, nt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, lS = [aS], cS = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(T) {
      var _ = T.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(T), T.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || lS, i = {}, s, a = [];
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
  var l, c = [iS, sS];
  {
    var f, u = [q1, tS(function(T) {
      f.insert(T);
    })], p = eS(c.concat(o, u)), v = function(_) {
      return co(J1(_), p);
    };
    l = function(_, h, m, g) {
      f = m, v(_ ? _ + "{" + h.styles + "}" : h.styles), g && (S.inserted[h.name] = !0);
    };
  }
  var S = {
    key: n,
    sheet: new I1({
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
  return S.sheet.hydrate(a), S;
}, Yy = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je = typeof Symbol == "function" && Symbol.for, tf = je ? Symbol.for("react.element") : 60103, nf = je ? Symbol.for("react.portal") : 60106, ol = je ? Symbol.for("react.fragment") : 60107, il = je ? Symbol.for("react.strict_mode") : 60108, sl = je ? Symbol.for("react.profiler") : 60114, al = je ? Symbol.for("react.provider") : 60109, ll = je ? Symbol.for("react.context") : 60110, rf = je ? Symbol.for("react.async_mode") : 60111, cl = je ? Symbol.for("react.concurrent_mode") : 60111, ul = je ? Symbol.for("react.forward_ref") : 60112, dl = je ? Symbol.for("react.suspense") : 60113, uS = je ? Symbol.for("react.suspense_list") : 60120, fl = je ? Symbol.for("react.memo") : 60115, pl = je ? Symbol.for("react.lazy") : 60116, dS = je ? Symbol.for("react.block") : 60121, fS = je ? Symbol.for("react.fundamental") : 60117, pS = je ? Symbol.for("react.responder") : 60118, mS = je ? Symbol.for("react.scope") : 60119;
function Lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case tf:
        switch (e = e.type, e) {
          case rf:
          case cl:
          case ol:
          case sl:
          case il:
          case dl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ll:
              case ul:
              case pl:
              case fl:
              case al:
                return e;
              default:
                return t;
            }
        }
      case nf:
        return t;
    }
  }
}
function Gy(e) {
  return Lt(e) === cl;
}
le.AsyncMode = rf;
le.ConcurrentMode = cl;
le.ContextConsumer = ll;
le.ContextProvider = al;
le.Element = tf;
le.ForwardRef = ul;
le.Fragment = ol;
le.Lazy = pl;
le.Memo = fl;
le.Portal = nf;
le.Profiler = sl;
le.StrictMode = il;
le.Suspense = dl;
le.isAsyncMode = function(e) {
  return Gy(e) || Lt(e) === rf;
};
le.isConcurrentMode = Gy;
le.isContextConsumer = function(e) {
  return Lt(e) === ll;
};
le.isContextProvider = function(e) {
  return Lt(e) === al;
};
le.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tf;
};
le.isForwardRef = function(e) {
  return Lt(e) === ul;
};
le.isFragment = function(e) {
  return Lt(e) === ol;
};
le.isLazy = function(e) {
  return Lt(e) === pl;
};
le.isMemo = function(e) {
  return Lt(e) === fl;
};
le.isPortal = function(e) {
  return Lt(e) === nf;
};
le.isProfiler = function(e) {
  return Lt(e) === sl;
};
le.isStrictMode = function(e) {
  return Lt(e) === il;
};
le.isSuspense = function(e) {
  return Lt(e) === dl;
};
le.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ol || e === cl || e === sl || e === il || e === dl || e === uS || typeof e == "object" && e !== null && (e.$$typeof === pl || e.$$typeof === fl || e.$$typeof === al || e.$$typeof === ll || e.$$typeof === ul || e.$$typeof === fS || e.$$typeof === pS || e.$$typeof === mS || e.$$typeof === dS);
};
le.typeOf = Lt;
Yy.exports = le;
var hS = Yy.exports, Xy = hS, gS = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, yS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Jy = {};
Jy[Xy.ForwardRef] = gS;
Jy[Xy.Memo] = yS;
var vS = !0;
function Qy(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var of = function(t, n, r) {
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
  vS === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, sf = function(t, n, r) {
  of(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function wS(e) {
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
var TS = {
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
}, SS = !1, kS = /[A-Z]|^ms/g, ES = /_EMO_([^_]+?)_([^]*?)_EMO_/g, qy = function(t) {
  return t.charCodeAt(1) === 45;
}, km = function(t) {
  return t != null && typeof t != "boolean";
}, Nc = /* @__PURE__ */ Zy(function(e) {
  return qy(e) ? e : e.replace(kS, "-$&").toLowerCase();
}), Em = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ES, function(r, o, i) {
          return an = {
            name: o,
            styles: i,
            next: an
          }, o;
        });
  }
  return TS[t] !== 1 && !qy(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, AS = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      return CS(e, t, n);
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
function CS(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += $i(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : km(a) && (r += Nc(i) + ":" + Em(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && SS)
          throw new Error(AS);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            km(s[l]) && (r += Nc(i) + ":" + Em(i, s[l]) + ";");
        else {
          var c = $i(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Nc(i) + ":" + c + ";";
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
var Am = /label:\s*([^\s;{]+)\s*(;|$)/g, an;
function ml(e, t, n) {
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
  Am.lastIndex = 0;
  for (var c = "", f; (f = Am.exec(o)) !== null; )
    c += "-" + f[1];
  var u = wS(o) + c;
  return {
    name: u,
    styles: o,
    next: an
  };
}
var bS = function(t) {
  return t();
}, ev = Kc["useInsertionEffect"] ? Kc["useInsertionEffect"] : !1, tv = ev || bS, Cm = ev || E.useLayoutEffect, NS = !1, nv = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ cS({
    key: "css"
  }) : null
);
nv.Provider;
var af = function(t) {
  return /* @__PURE__ */ E.forwardRef(function(n, r) {
    var o = E.useContext(nv);
    return t(n, o, r);
  });
}, Gi = /* @__PURE__ */ E.createContext({}), lf = {}.hasOwnProperty, Hu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", PS = function(t, n) {
  var r = {};
  for (var o in n)
    lf.call(n, o) && (r[o] = n[o]);
  return r[Hu] = t, r;
}, xS = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return of(n, r, o), tv(function() {
    return sf(n, r, o);
  }), null;
}, LS = /* @__PURE__ */ af(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Hu], i = [r], s = "";
  typeof e.className == "string" ? s = Qy(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = ml(i, void 0, E.useContext(Gi));
  s += t.key + "-" + a.name;
  var l = {};
  for (var c in e)
    lf.call(e, c) && c !== "css" && c !== Hu && !NS && (l[c] = e[c]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(xS, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ E.createElement(o, l));
}), _S = LS, Pc = { exports: {} }, bm;
function zS() {
  return bm || (bm = 1, function(e) {
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
  }(Pc)), Pc.exports;
}
zS();
var Nm = function(t, n) {
  var r = arguments;
  if (n == null || !lf.call(n, "css"))
    return E.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = _S, i[1] = PS(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return E.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Nm || (Nm = {}));
var RS = /* @__PURE__ */ af(function(e, t) {
  var n = e.styles, r = ml([n], void 0, E.useContext(Gi)), o = E.useRef();
  return Cm(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Cm(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && sf(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
}), OS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $S = /* @__PURE__ */ Zy(
  function(e) {
    return OS.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), MS = !1, IS = $S, DS = function(t) {
  return t !== "theme";
}, Pm = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? IS : DS;
}, xm = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, HS = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return of(n, r, o), tv(function() {
    return sf(n, r, o);
  }), null;
}, FS = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = xm(t, n, r), l = a || Pm(o), c = !l("as");
  return function() {
    var f = arguments, u = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && u.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      u.push.apply(u, f);
    else {
      var p = f[0];
      u.push(p[0]);
      for (var v = f.length, S = 1; S < v; S++)
        u.push(f[S], p[S]);
    }
    var T = af(function(_, h, m) {
      var g = c && _.as || o, b = "", C = [], N = _;
      if (_.theme == null) {
        N = {};
        for (var k in _)
          N[k] = _[k];
        N.theme = E.useContext(Gi);
      }
      typeof _.className == "string" ? b = Qy(h.registered, C, _.className) : _.className != null && (b = _.className + " ");
      var L = ml(u.concat(C), h.registered, N);
      b += h.key + "-" + L.name, s !== void 0 && (b += " " + s);
      var U = c && a === void 0 ? Pm(g) : l, R = {};
      for (var D in _)
        c && D === "as" || U(D) && (R[D] = _[D]);
      return R.className = b, m && (R.ref = m), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(HS, {
        cache: h,
        serialized: L,
        isStringTag: typeof g == "string"
      }), /* @__PURE__ */ E.createElement(g, R));
    });
    return T.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", T.defaultProps = t.defaultProps, T.__emotion_real = T, T.__emotion_base = o, T.__emotion_styles = u, T.__emotion_forwardProp = a, Object.defineProperty(T, "toString", {
      value: function() {
        return s === void 0 && MS ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), T.withComponent = function(_, h) {
      var m = e(_, Xe({}, n, h, {
        shouldForwardProp: xm(T, h, !0)
      }));
      return m.apply(void 0, u);
    }, T;
  };
}, US = [
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
], Lm = FS.bind(null);
US.forEach(function(e) {
  Lm[e] = Lm(e);
});
function jS(e) {
  return e == null || Object.keys(e).length === 0;
}
function BS(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ d(RS, {
    styles: typeof t == "function" ? (o) => t(jS(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const _m = [];
function KS(e) {
  return _m[0] = e, ml(_m);
}
function Ur(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function rv(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !Ur(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = rv(e[n]);
  }), t;
}
function Na(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? Xe({}, e) : e;
  return Ur(e) && Ur(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ E.isValidElement(t[o]) ? r[o] = t[o] : Ur(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ur(e[o]) ? r[o] = Na(e[o], t[o], n) : n.clone ? r[o] = Ur(t[o]) ? rv(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const VS = ["values", "unit", "step"], ZS = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => Xe({}, n, {
    [r.key]: r.val
  }), {});
};
function WS(e) {
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
  } = e, o = el(e, VS), i = ZS(t), s = Object.keys(i);
  function a(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function c(p, v) {
    const S = s.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(S !== -1 && typeof t[s[S]] == "number" ? t[s[S]] : v) - r / 100}${n})`;
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
const YS = {
  borderRadius: 4
}, GS = YS;
function pi(e, t) {
  return t ? Na(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const cf = {
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
}, zm = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${cf[e]}px)`
};
function bn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || zm;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || zm;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || cf).indexOf(a) !== -1) {
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
function XS(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Rm(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function ov(e) {
  if (typeof e != "string")
    throw new Error(R1(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function hl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Pa(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = hl(e, n) || r, t && (o = t(o, r, e)), o;
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
    const a = s[t], l = s.theme, c = hl(l, r) || {};
    return bn(s, a, (u) => {
      let p = Pa(c, o, u);
      return u === p && typeof u == "string" && (p = Pa(c, o, `${t}${u === "default" ? "" : ov(u)}`, u)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function JS(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const QS = {
  m: "margin",
  p: "padding"
}, qS = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Om = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ek = JS((e) => {
  if (e.length > 2)
    if (Om[e])
      e = Om[e];
    else
      return [e];
  const [t, n] = e.split(""), r = QS[t], o = qS[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), uf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], df = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...uf, ...df];
function Xi(e, t, n, r) {
  var o;
  const i = (o = hl(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function iv(e) {
  return Xi(e, "spacing", 8);
}
function Ji(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function tk(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Ji(t, n), r), {});
}
function nk(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = ek(n), i = tk(o, r), s = e[n];
  return bn(e, s, i);
}
function sv(e, t) {
  const n = iv(e.theme);
  return Object.keys(e).map((r) => nk(e, t, r, n)).reduce(pi, {});
}
function Te(e) {
  return sv(e, uf);
}
Te.propTypes = {};
Te.filterProps = uf;
function Se(e) {
  return sv(e, df);
}
Se.propTypes = {};
Se.filterProps = df;
function rk(e = 8) {
  if (e.mui)
    return e;
  const t = iv({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function gl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? pi(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Ot(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ft(e, t) {
  return Ce({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ok = Ft("border", Ot), ik = Ft("borderTop", Ot), sk = Ft("borderRight", Ot), ak = Ft("borderBottom", Ot), lk = Ft("borderLeft", Ot), ck = Ft("borderColor"), uk = Ft("borderTopColor"), dk = Ft("borderRightColor"), fk = Ft("borderBottomColor"), pk = Ft("borderLeftColor"), mk = Ft("outline", Ot), hk = Ft("outlineColor"), yl = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Xi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Ji(t, r)
    });
    return bn(e, e.borderRadius, n);
  }
  return null;
};
yl.propTypes = {};
yl.filterProps = ["borderRadius"];
gl(ok, ik, sk, ak, lk, ck, uk, dk, fk, pk, yl, mk, hk);
const vl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Xi(e.theme, "spacing", 8), n = (r) => ({
      gap: Ji(t, r)
    });
    return bn(e, e.gap, n);
  }
  return null;
};
vl.propTypes = {};
vl.filterProps = ["gap"];
const wl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Xi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Ji(t, r)
    });
    return bn(e, e.columnGap, n);
  }
  return null;
};
wl.propTypes = {};
wl.filterProps = ["columnGap"];
const Tl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Xi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Ji(t, r)
    });
    return bn(e, e.rowGap, n);
  }
  return null;
};
Tl.propTypes = {};
Tl.filterProps = ["rowGap"];
const gk = Ce({
  prop: "gridColumn"
}), yk = Ce({
  prop: "gridRow"
}), vk = Ce({
  prop: "gridAutoFlow"
}), wk = Ce({
  prop: "gridAutoColumns"
}), Tk = Ce({
  prop: "gridAutoRows"
}), Sk = Ce({
  prop: "gridTemplateColumns"
}), kk = Ce({
  prop: "gridTemplateRows"
}), Ek = Ce({
  prop: "gridTemplateAreas"
}), Ak = Ce({
  prop: "gridArea"
});
gl(vl, wl, Tl, gk, yk, vk, wk, Tk, Sk, kk, Ek, Ak);
function uo(e, t) {
  return t === "grey" ? t : e;
}
const Ck = Ce({
  prop: "color",
  themeKey: "palette",
  transform: uo
}), bk = Ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: uo
}), Nk = Ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: uo
});
gl(Ck, bk, Nk);
function kt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Pk = Ce({
  prop: "width",
  transform: kt
}), ff = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || cf[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: kt(n)
      };
    };
    return bn(e, e.maxWidth, t);
  }
  return null;
};
ff.filterProps = ["maxWidth"];
const xk = Ce({
  prop: "minWidth",
  transform: kt
}), Lk = Ce({
  prop: "height",
  transform: kt
}), _k = Ce({
  prop: "maxHeight",
  transform: kt
}), zk = Ce({
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
const Rk = Ce({
  prop: "boxSizing"
});
gl(Pk, ff, xk, Lk, _k, zk, Rk);
const Ok = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ot
  },
  borderTop: {
    themeKey: "borders",
    transform: Ot
  },
  borderRight: {
    themeKey: "borders",
    transform: Ot
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ot
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ot
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
    transform: Ot
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: yl
  },
  // palette
  color: {
    themeKey: "palette",
    transform: uo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: uo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: uo
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
    style: vl
  },
  rowGap: {
    style: Tl
  },
  columnGap: {
    style: wl
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
    style: ff
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
}, av = Ok;
function $k(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Mk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ik() {
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
    const p = hl(o, c) || {};
    return u ? u(s) : bn(s, r, (S) => {
      let T = Pa(p, f, S);
      return S === T && typeof S == "string" && (T = Pa(p, f, `${n}${S === "default" ? "" : ov(S)}`, S)), l === !1 ? T : {
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
    const a = (r = i.unstable_sxConfig) != null ? r : av;
    function l(c) {
      let f = c;
      if (typeof c == "function")
        f = c(i);
      else if (typeof c != "object")
        return c;
      if (!f)
        return null;
      const u = XS(i.breakpoints), p = Object.keys(u);
      let v = u;
      return Object.keys(f).forEach((S) => {
        const T = Mk(f[S], i);
        if (T != null)
          if (typeof T == "object")
            if (a[S])
              v = pi(v, e(S, T, i, a));
            else {
              const _ = bn({
                theme: i
              }, T, (h) => ({
                [S]: h
              }));
              $k(_, T) ? v[S] = t({
                sx: T,
                theme: i,
                nested: !0
              }) : v = pi(v, _);
            }
          else
            v = pi(v, e(S, T, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": Rm(p, v)
      } : Rm(p, v);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const lv = Ik();
lv.filterProps = ["sx"];
const Dk = lv;
function Hk(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Fk = ["breakpoints", "palette", "spacing", "shape"];
function Uk(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = el(e, Fk), a = WS(n), l = rk(o);
  let c = Na({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Xe({
      mode: "light"
    }, r),
    spacing: l,
    shape: Xe({}, GS, i)
  }, s);
  return c.applyStyles = Hk, c = t.reduce((f, u) => Na(f, u), c), c.unstable_sxConfig = Xe({}, av, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(u) {
    return Dk({
      sx: u,
      theme: this
    });
  }, c;
}
function jk(e) {
  return Object.keys(e).length === 0;
}
function pf(e = null) {
  const t = E.useContext(Gi);
  return !t || jk(t) ? e : t;
}
const Bk = Uk();
function Kk(e = Bk) {
  return pf(e);
}
function xc(e) {
  const t = KS(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Vk({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Kk(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => xc(typeof s == "function" ? s(o) : s)) : i = xc(i)), /* @__PURE__ */ d(BS, {
    styles: i
  });
}
const Zk = typeof window < "u" ? E.useLayoutEffect : E.useEffect, Wk = Zk;
let $m = 0;
function Yk(e) {
  const [t, n] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && ($m += 1, n(`mui-${$m}`));
  }, [t]), r;
}
const Mm = Kc["useId".toString()];
function Gk(e) {
  if (Mm !== void 0) {
    const t = Mm();
    return e ?? t;
  }
  return Yk(e);
}
const Xk = /* @__PURE__ */ E.createContext(null), cv = Xk;
function uv() {
  return E.useContext(cv);
}
const Jk = typeof Symbol == "function" && Symbol.for, Qk = Jk ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function qk(e, t) {
  return typeof t == "function" ? t(e) : Xe({}, e, t);
}
function eE(e) {
  const {
    children: t,
    theme: n
  } = e, r = uv(), o = E.useMemo(() => {
    const i = r === null ? n : qk(r, n);
    return i != null && (i[Qk] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ d(cv.Provider, {
    value: o,
    children: t
  });
}
const tE = ["value"], nE = /* @__PURE__ */ E.createContext();
function rE(e) {
  let {
    value: t
  } = e, n = el(e, tE);
  return /* @__PURE__ */ d(nE.Provider, Xe({
    value: t ?? !0
  }, n));
}
const oE = /* @__PURE__ */ E.createContext(void 0);
function iE({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ d(oE.Provider, {
    value: e,
    children: t
  });
}
function sE(e) {
  const t = pf(), n = Gk() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Wk(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ d(Vk, {
    styles: o
  }) : null;
}
const Im = {};
function Dm(e, t, n, r = !1) {
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
function aE(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = pf(Im), i = uv() || Im, s = Dm(r, o, n), a = Dm(r, i, n, !0), l = s.direction === "rtl", c = sE(s);
  return /* @__PURE__ */ d(eE, {
    theme: a,
    children: /* @__PURE__ */ d(Gi.Provider, {
      value: s,
      children: /* @__PURE__ */ d(rE, {
        value: l,
        children: /* @__PURE__ */ A(iE, {
          value: s == null ? void 0 : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const lE = ["theme"];
function cE(e) {
  let {
    theme: t
  } = e, n = el(e, lE);
  const r = t[vm];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = Xe({}, r, {
    vars: null
  }) : t && !t.vars && (o = Xe({}, t, {
    vars: null
  }))), /* @__PURE__ */ d(aE, Xe({}, n, {
    themeId: r ? vm : void 0,
    theme: o
  }));
}
const Fu = "[CHMarketingBuilder]", uE = {
  info: "color:#1565c0;font-weight:bold",
  resolved: "color:#2e7d32;font-weight:bold",
  missing: "color:#e65100;font-weight:bold",
  fallback: "color:#f57c00;font-weight:bold",
  error: "color:#c62828;font-weight:bold"
}, dv = {
  info: "INFO",
  resolved: "OK",
  missing: "MISSING",
  fallback: "FALLBACK",
  error: "ERROR"
};
let mi = [];
function dE(e) {
  return e instanceof Error ? e.message : e == null ? "" : String(e);
}
function fE(e, t, n, r) {
  const o = dv[e], i = uE[e];
  console.log(r ? `%c${Fu} %c${o}%c ${t}: ${n}
  → ${r}` : `%c${Fu} %c${o}%c ${t}: ${n}`, "font-weight:bold", i, "color:inherit");
}
function pE() {
  mi = [];
}
function Qi(e, t, n, r) {
  const o = dE(n);
  mi.push({ level: e, resource: t, detail: o, hint: r }), fE(e, t, o, r);
}
function ae(e, t) {
  Qi("info", e, t);
}
function V(e, t) {
  Qi("resolved", e, t);
}
function Ue(e, t, n) {
  Qi("missing", e, t, n);
}
function mE(e, t, n) {
  Qi("fallback", e, t, n);
}
function yn(e, t, n) {
  Qi("error", e, t, n);
}
function Hm(e) {
  const t = mi.filter((n) => n.level !== "resolved" && n.level !== "info");
  console.groupCollapsed(
    `%c${Fu} Load summary — ${e.builderMode} builder (${t.length} note${t.length === 1 ? "" : "s"})`,
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
  }), mi.length > 0 && console.table(
    mi.map((n) => ({
      Level: dv[n.level],
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
function Sl(e) {
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
function mf(e, ...t) {
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
        const o = Sl(r);
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
  const o = mf(r, n);
  if (o.length > 0)
    return o;
  if (!((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    return [];
  const i = it(r, n);
  if (!i)
    return [];
  try {
    const a = await e.raw.getAsync(i);
    return !a.isSuccessStatusCode || a.content == null ? [] : Sl(a.content);
  } catch {
    return [];
  }
}
async function Mi(e, t, n, r) {
  const o = [...new Set(r)];
  for (const i of o) {
    const s = await Jt(e, t, i, n);
    if (s.length > 0)
      return { ids: s, relationName: i };
  }
  return { ids: [] };
}
function jn(e, t) {
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
const hE = ["social", "email", "admin"], Ii = [
  "templateToZone",
  "templateToTemplateZone",
  "TemplateToZone",
  "TemplateToTemplateZone",
  "EPAM.TemplateToZone",
  "EPAM.TemplateToTemplateZone",
  "templateToEPAM.TemplateZone",
  "EPAM.TemplateZone",
  "TemplateZone"
], xa = [
  "templateZoneToTemplate",
  "zoneToTemplate",
  "TemplateZoneToTemplate",
  "EPAM.TemplateZoneToTemplate",
  "EPAM.TemplateToTemplateZone",
  "templateToTemplate"
], gE = [
  "marketingAssetToTemplate",
  "MarketingAssetToTemplate",
  "EPAM.MarketingAssetToTemplate"
], fv = [
  "templateZoneToAllowedAsset",
  "TemplateZoneToAllowedAsset",
  "EPAM.TemplateZoneToAllowedAsset",
  "templateZoneToAsset",
  "TemplateZoneToAsset",
  "EPAM.TemplateZoneToAsset"
], pv = [
  "templateToAllowedAsset",
  "TemplateToAllowedAsset",
  "EPAM.TemplateToAllowedAsset",
  "templateToAsset",
  "TemplateToAsset",
  "EPAM.TemplateToAsset"
], yE = [
  "zoneType",
  "ZoneType",
  "EPAM.ZoneType",
  "templateZoneType",
  "TemplateZoneType",
  "EPAM.TemplateZoneType"
], mv = [
  "zoneValueToSelectedAsset",
  "ZoneValueToSelectedAsset",
  "EPAM.MarketingAssetZoneValueToSelectedAsset",
  "marketingAssetZoneValueToSelectedAsset",
  "zoneValueToAsset",
  "ZoneValueToAsset"
];
function Fm(e) {
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
function Um(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
  if (typeof e == "string")
    return e.trim() || void 0;
}
function hv(e) {
  if (!e || typeof e != "object")
    return;
  const t = e, n = t.systemProperties && typeof t.systemProperties == "object" ? t.systemProperties : null;
  return Um(n == null ? void 0 : n.id) || Um(t.id);
}
function vE(e, ...t) {
  if (!e || typeof e != "object")
    return;
  const n = e.relations;
  if (!n || typeof n != "object")
    return;
  const r = mf(n, ...t);
  if (r[0] != null)
    return String(r[0]);
}
function jm(e) {
  if (!(e != null && e.trim()) || !/^\d+$/.test(e.trim()))
    return;
  const t = Number(e.trim());
  return Number.isFinite(t) && t > 0 ? t : void 0;
}
function Bm(e) {
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
function Km(e) {
  if (typeof e != "string")
    return;
  const t = e.trim().toLowerCase();
  return hE.includes(t) ? t : void 0;
}
function hf(e, t) {
  if (!(!e || typeof e != "object" || Array.isArray(e)))
    return e[t];
}
function Vm(e, t, n) {
  const r = hf(t, e), o = Bm(r);
  if (o !== void 0)
    return o;
  const i = gv(n);
  if (i)
    return Bm(i[e]);
}
function gv(e) {
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
  const r = hf(t, e), o = Fm(r);
  if (o)
    return o;
  const i = gv(n);
  if (i)
    return Fm(i[e]);
}
function wE(e, t, n) {
  const r = Km(hf(e, "builderMode")) ?? Km(ft("builderMode", e, n)), o = ft("templateId", e, n) || vE(t, "marketingAssetToTemplate"), i = hv(t);
  return {
    builderMode: r,
    brandKitId: ft("brandKitId", e, n),
    templateId: o,
    marketingAssetId: i,
    userHasOverridePermission: Vm("userHasOverridePermission", e, n) ?? !1,
    allowTemplateZoneEditing: Vm("allowTemplateZoneEditing", e, n) ?? !1,
    renderEmailApiUrl: ft("renderEmailApiUrl", e, n) || "/api/render-email-html",
    contentHubProxyBase: ft("contentHubProxyBase", e, n) || "/api/content-hub",
    html2canvasCdnUrl: ft("html2canvasCdnUrl", e, n),
    figmaImportApiUrl: ft("figmaImportApiUrl", e, n) || "/api/figma/import",
    figmaImportApiToken: ft("figmaImportApiToken", e, n),
    designerDocumentProperty: ft("designerDocumentProperty", e, n),
    designerInstanceProperty: ft("designerInstanceProperty", e, n),
    searchIdentifier: ft("searchIdentifier", e, n),
    searchComponentId: jm(ft("searchComponentId", e, n)) ?? jm(ft("searchIdentifier", e, n)),
    selectionPoolIdentifier: ft("selectionPoolIdentifier", e, n)
  };
}
function Qn() {
  return "An entity ID is needed. Save this record in Content Hub first, then reload the page.";
}
function TE(e, t) {
  if (!hv(e))
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
function Zm(e, t) {
  if (e.builderMode)
    return e.builderMode;
  const n = t == null ? void 0 : t.trim().toLowerCase();
  return n === "email" || n === "newsletter" ? "email" : "social";
}
const Wm = /* @__PURE__ */ new Map(), SE = ["EPAM.Template", "Template"], kE = ["EPAM.TemplateZone", "TemplateZone"];
function EE(e) {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
}
function yv(e) {
  if (e == null || typeof e != "object")
    return null;
  const t = e;
  if (Array.isArray(t.member_groups))
    return t;
  const n = t.content;
  return n != null && typeof n == "object" && !Array.isArray(n) ? n : Array.isArray(t.items) && t.items[0] != null && typeof t.items[0] == "object" ? t.items[0] : t;
}
function AE(e) {
  const t = yv(e);
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
async function La(e, t) {
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
      const s = AE(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
function CE(e) {
  const t = yv(e);
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
          target: c ? EE(c) : void 0
        });
      }
  }
  return n;
}
function bE(e) {
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
async function NE(e, t) {
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
      const s = CE(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
async function PE(e, t) {
  const n = Wm.get(t);
  if (n)
    return n;
  const r = await NE(e, t);
  return Wm.set(t, r), r;
}
async function _a(e, t) {
  for (const n of t) {
    const r = await PE(e, n);
    if (r.length > 0)
      return r;
  }
  return [];
}
async function xE(e) {
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
      const a = bE(s.content);
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
function Uu(e, t) {
  return !!(e && t.test(e));
}
function LE(e) {
  return Uu(e, /(^|\.)Template$/i) && !Uu(e, /TemplateZone/i);
}
async function kl(e, t) {
  const [n, r, o] = await Promise.all([
    _a(e, SE),
    _a(e, kE),
    xE(e)
  ]), i = n.filter((f) => Uu(f.target, /TemplateZone/i)).map((f) => f.name), s = r.filter((f) => LE(f.target)).map((f) => f.name), a = Tt(t, /zone/i).filter(
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
      ...xa
    ])
  ];
  return l.length === 0 && c.length === xa.length ? console.info(
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
function _E(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO template ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function zE(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO zone ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function gf(e, t) {
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
function RE(e, t, n) {
  return {
    entitydefinition: {
      href: gf(e, n)
    },
    properties: t
  };
}
function za(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e;
    if (typeof t.href == "string" && t.href.trim())
      return t.href.trim();
  }
}
function OE(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = [];
  if (Array.isArray(t.children))
    for (const o of t.children) {
      const i = za(o);
      i && n.push(i);
    }
  const r = za(t.child);
  return r && n.push(r), n;
}
function $E(e, t) {
  if (e != null && typeof e == "object") {
    const n = za(e.self);
    if (n)
      return n;
  }
  return t;
}
function vv(e, t) {
  if (t) {
    const n = t.match(/^(https?:\/\/[^/]+)/i);
    if (n)
      return `${n[1]}/api/entities/${e}`;
  }
  return `/api/entities/${e}`;
}
async function El(e, t, n, r) {
  var a;
  const o = it(r, n), i = `/api/entities/${t}/relations/${n}`, s = o ? [.../* @__PURE__ */ new Set([o, i])] : [i];
  if (!((a = e.raw) != null && a.getAsync) || !o)
    return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
  for (const l of [o])
    try {
      const c = await e.raw.getAsync(l);
      if (!c.isSuccessStatusCode || c.content == null)
        continue;
      const f = OE(c.content), u = $E(c.content, l) ?? l;
      return { requestUrls: s, selfHref: u, childHrefs: f };
    } catch {
    }
  return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
}
function wv(e, t) {
  return {
    children: t.map((n) => ({ href: n })),
    self: { href: e }
  };
}
async function Di(e, t, n) {
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
  const i = await El(e, t, r, o), s = vv(n, i.selfHref), a = [...i.childHrefs];
  a.some((f) => br(f) === Number(n)) || a.push(s);
  const l = wv(i.selfHref, a);
  if (await Di(e, [...i.requestUrls, i.selfHref], l))
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
async function xo(e, t, n, r, o) {
  const i = await El(e, t, r, o), s = i.childHrefs.filter(
    (l) => br(l) !== Number(n)
  );
  if (s.length === i.childHrefs.length)
    return !0;
  const a = wv(i.selfHref, s);
  return Di(e, [...i.requestUrls, i.selfHref], a);
}
async function To(e, t, n, r, o) {
  var l;
  const i = await El(e, t, r, o), s = vv(n, i.selfHref), a = {
    parent: { href: s },
    self: { href: i.selfHref }
  };
  if (await Di(e, [...i.requestUrls, i.selfHref], a))
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
async function Tv(e, t, n, r, o) {
  var l;
  const i = await El(e, t, r, o), s = it(o, r) ?? i.selfHref;
  if ((l = e.raw) != null && l.getAsync && it(o, r))
    try {
      const c = await e.raw.getAsync(s);
      if (c.isSuccessStatusCode && c.content != null) {
        const f = za(
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
  return await Di(e, [...i.requestUrls, i.selfHref], a) ? !0 : Di(e, [...i.requestUrls, i.selfHref], {
    self: { href: i.selfHref }
  });
}
function hi(e, t, n) {
  const r = Tt(t, n), o = r.filter((i) => !!it(t, i));
  return [.../* @__PURE__ */ new Set([...o, ...e, ...r])];
}
function Al(e) {
  if (e.zoneType === "Logo")
    return !0;
  const t = (e.zoneKey ?? "").trim().toLowerCase(), n = (e.zoneLabel ?? "").trim().toLowerCase();
  return t === "logo" || n === "logo";
}
function ME(e, t) {
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
function yf(e, t, n) {
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
  return ME(t, n) ?? "Text";
}
const IE = ["EPAM.TemplateZone", "TemplateZone"], Wt = /* @__PURE__ */ new Map();
let Ym = !1, Gm = !1, Hi = [];
function Xm(e, ...t) {
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
function Cl(e) {
  const t = e.properties ?? {}, n = e, r = Object.keys(t), o = Xm(
    t,
    "identifier",
    "Identifier",
    "zoneTypeName",
    "ZoneTypeName",
    "Title",
    "Name",
    "Label",
    "label"
  ) || jn(n, "zoneType") || jn(n, "ZoneType");
  if (o)
    return o;
  for (const i of r) {
    const s = Xm(t, i);
    if (s)
      return s;
  }
  return "";
}
function bl(e, t) {
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
function Nl(e) {
  const t = Hi.map((n) => n.name);
  return [
    .../* @__PURE__ */ new Set([
      ...t,
      ...yE,
      ...Tt(e, /zone.?type/i)
    ])
  ];
}
function DE(e) {
  return Nl(e.relations).some(
    (t) => {
      var n;
      return !!((n = e.relations) != null && n[t]);
    }
  );
}
function Sv(e) {
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
function HE(e) {
  try {
    const n = gf(e).match(/\/entitydefinitions\/([^/?#]+)/i);
    return n != null && n[1] ? decodeURIComponent(n[1]) : "";
  } catch {
    return "";
  }
}
async function FE(e, t, n) {
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
      const l = Sv(a.content);
      for (const c of l) {
        const f = await t(String(c)), u = Cl(f);
        u && bl(u, c);
      }
      if (l.length > 0)
        return V(
          "template zone type",
          `Loaded ${l.length} taxonomy item(s) from ${n}; mapped ${Wt.size} zone type(s)`
        ), l.length;
    } catch {
    }
  return 0;
}
async function kv(e, t, n) {
  const r = Nl(n.relations);
  for (const o of r) {
    const i = await Jt(e, "", o, n.relations);
    if (i[0] == null)
      continue;
    const s = await t(String(i[0])), a = Cl(s);
    return a && bl(a, i[0]), HE(s) || void 0;
  }
}
async function vf(e) {
  if (Hi.length > 0 || !e)
    return;
  Hi = (await _a(e, IE)).filter((n) => /zone.?type/i.test(n.name));
}
async function Ev(e, t) {
  var o, i;
  if (Gm || !((o = e == null ? void 0 : e.raw) != null && o.getAsync) || Ym)
    return;
  Ym = !0, await vf(e);
  let n = ((i = Hi.find((s) => {
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
        const c = Sv(l.content);
        for (const f of c) {
          const u = await t(String(f)), p = await kv(e, t, u);
          p && !n && (n = p);
        }
        if (c.length > 0)
          break;
      } catch {
      }
    if (Wt.size > 0)
      break;
  }
  n && await FE(e, t, n), Gm = !0, ae(
    "template zone type",
    `Taxonomy catalog ready: ${[...Wt.entries()].map(([s, a]) => `${s}=${a}`).join(", ") || "(empty)"}`
  );
}
async function UE(e, t, n) {
  await vf(e);
  for (const r of n)
    await kv(e, t, r);
  Wt.size === 0 && await Ev(e, t);
}
async function jE(e, t, n) {
  const r = Wt.get(n);
  return r || (await Ev(e, t), Wt.get(n));
}
function BE(e) {
  var r;
  const t = Hi.find((o) => o.name === e);
  return ((r = t == null ? void 0 : t.role) == null ? void 0 : r.toLowerCase()) !== "parent";
}
async function Jm(e, t, n, r) {
  var l;
  if (!((l = e == null ? void 0 : e.raw) != null && l.getAsync))
    return;
  const o = `/api/entities/${n}/relations/${r}`, i = await Jt(e, n, r, {
    [r]: { href: o }
  });
  if (i[0] == null)
    return;
  const s = await t(String(i[0])), a = Cl(s);
  if (a)
    return bl(a, i[0]), yf(a, "", "");
}
async function KE(e, t, n, r, o, i, s) {
  var c;
  if (!e)
    return !1;
  const a = e, l = BE(
    i
  ) ? [
    {
      label: "parent",
      run: () => To(a, n, r, i, s.relations)
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
      run: () => To(a, n, r, i, s.relations)
    }
  ];
  for (const f of l) {
    if (!await f.run())
      continue;
    const p = await Jm(
      e,
      t,
      n,
      i
    );
    if (p === o)
      return V(
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
    )).isSuccessStatusCode && await Jm(
      e,
      t,
      n,
      i
    ) === o)
      return V(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via POST parent ${i}`
      ), !0;
  }
  return !1;
}
async function VE(e, t, n, r) {
  const o = Nl(r.relations);
  for (const i of o) {
    const s = it(r.relations, i);
    if (!s)
      continue;
    const a = await Jt(e, n.id, i, {
      [i]: { href: s }
    });
    if (a[0] == null)
      continue;
    const l = await t(String(a[0])), c = Cl(l);
    if (c)
      return bl(c, a[0]), yf(c, n.zoneKey, n.zoneLabel);
  }
}
async function Av(e, t, n, r) {
  const o = await VE(e, t, n, r);
  return o ? { ...n, zoneType: o } : n;
}
async function ZE(e, t, n, r, o) {
  await vf(e);
  const i = await jE(e, t, r);
  if (!i) {
    const a = Object.keys(o.relations ?? {}).join(", ") || "(none)", l = [...Wt.keys()].join(", ") || "(none)";
    return ae(
      "template zone type",
      `No taxonomy item found for zone type "${r}" on zone ${n}. Known types: ${l}. Zone relations: ${a}.`
    ), !1;
  }
  const s = Nl(o.relations);
  for (const a of s)
    if (await KE(
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
const Lc = ["EPAM.TemplateZone", "TemplateZone"];
let Ns = null;
function WE(e) {
  return /zone.?type/i.test(e);
}
function YE(e) {
  return /zone.?type/i.test(e);
}
function GE(e) {
  return e.filter((t) => WE(t.name)).map((t) => t.name);
}
async function XE(e) {
  if (Ns)
    return Ns;
  const [t, n] = await Promise.all([
    La(e, Lc[0]).then(async (s) => s.length > 0 ? s : La(e, Lc[1])),
    _a(e, Lc)
  ]), r = GE(t), o = n.filter((s) => YE(s.name)).map((s) => s.name);
  let i = "unknown";
  return r.length > 0 && o.length === 0 ? i = "property" : o.length > 0 && r.length === 0 ? i = "relation" : r.length > 0 && o.length > 0 && (i = "both"), Ns = {
    mode: i,
    propertyNames: r.length > 0 ? r : ["zoneType", "ZoneType", "EPAM.zoneType", "zoneTypeMA"],
    relationNames: o
  }, Ns;
}
function JE(e) {
  return e.mode === "property" || e.mode === "both" || e.mode === "unknown";
}
function QE(e) {
  return e.mode === "relation" || e.mode === "both";
}
const qE = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], wf = [
  "AssetCollectionToAsset",
  "M.AssetCollectionToAsset",
  "collectionToAsset",
  "assetCollectionToAsset",
  "CollectionToAsset"
];
function qs(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function eA(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  return "Invariant" in t ? t.Invariant : Object.values(t).find((r) => typeof r == "string") ?? e;
}
function Cv(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = eA(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function bv(e) {
  var n;
  if (e == null || typeof e != "object")
    return;
  const t = e;
  for (const r of qE) {
    const o = t[r];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const i = qs(((n = o[0]) == null ? void 0 : n.href) ?? o[0]);
    if (i)
      return i;
  }
}
function tA(e) {
  var r;
  const t = (r = e.systemProperties) == null ? void 0 : r.id, n = e.id ?? e.entityId ?? t;
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  if (typeof n == "string" && n.trim())
    return n.trim();
}
function nA(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e, n = tA(t);
  if (n == null)
    return null;
  const r = t.properties ?? t.fields, o = bv(t.renditions) ?? qs(t.thumbnailUrl) ?? qs(t.previewUrl) ?? qs(t.thumbnail);
  if (!o)
    return null;
  const i = Cv(r, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${n}`;
  return {
    id: String(n),
    name: i,
    thumbnailUrl: o,
    previewUrl: o
  };
}
function Lo(e, t) {
  const n = t.properties ?? {}, r = bv(t.renditions);
  if (!r)
    return null;
  const o = Cv(n, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${e}`;
  return {
    id: String(e),
    name: o,
    thumbnailUrl: r,
    previewUrl: r
  };
}
function Qm(e, t) {
  if (!(t != null && t.trim()))
    return e;
  const n = t.trim().toLowerCase();
  return e.filter(
    (r) => r.name.toLowerCase().includes(n) || r.id.toLowerCase().includes(n)
  );
}
const ju = "https://ws.overcasthq.com/wp-content/uploads/2025/05/sok_logo.png", rA = "https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58", oA = "https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png", iA = [
  {
    id: "color",
    label: "Full color",
    url: ju,
    previewBackground: "#f7f7f7"
  },
  {
    id: "dark",
    label: "Dark background",
    url: `${ju}#dark`,
    previewBackground: "#000000"
  }
], Bu = ju, vr = "Arial, Helvetica, sans-serif", Zt = {
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
}, Nv = [
  { colorName: "Primary", hexValue: Zt.primary, colorUsageType: "Primary" },
  { colorName: "Secondary", hexValue: Zt.secondary, colorUsageType: "Secondary" },
  { colorName: "Accent", hexValue: Zt.accent, colorUsageType: "Accent" },
  { colorName: "Background", hexValue: Zt.background, colorUsageType: "Background" }
], Pv = [
  { fontFamily: vr, fontWeight: "Bold", fontUsageType: "Heading" },
  { fontFamily: vr, fontWeight: "Regular", fontUsageType: "Body" },
  { fontFamily: vr, fontWeight: "Medium", fontUsageType: "CTA" }
];
function sA(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t || t === rA || t === oA || /cytiva/i.test(t))
    return Bu;
  const n = iA.find((r) => r.url === t || r.id === t);
  return n ? n.url : t;
}
function ti(e) {
  var t;
  return {
    ...e,
    brandKitName: ((t = e.brandKitName) == null ? void 0 : t.trim()) || "SOK",
    logoAssetUrl: sA(e.logoAssetUrl),
    colors: Nv,
    fonts: Pv
  };
}
function aA(e) {
  return ti({
    id: e,
    brandKitName: "SOK",
    logoAssetUrl: Bu,
    colors: Nv,
    fonts: Pv
  });
}
function Pl(e, t) {
  return {
    width: Math.round(e / 25.4 * 96),
    height: Math.round(t / 25.4 * 96)
  };
}
function Ps(e, t) {
  return {
    width: Math.round(e * 96),
    height: Math.round(t * 96)
  };
}
const xs = Pl(210, 297), Ls = Pl(297, 420), _s = Pl(148, 210), xl = [
  { id: "a4-portrait", group: "print", label: "A4 portrait", width: xs.width, height: xs.height },
  { id: "a4-landscape", group: "print", label: "A4 landscape", width: xs.height, height: xs.width },
  { id: "a3-portrait", group: "print", label: "A3 portrait", width: Ls.width, height: Ls.height },
  { id: "a3-landscape", group: "print", label: "A3 landscape", width: Ls.height, height: Ls.width },
  { id: "a5-portrait", group: "print", label: "A5 portrait", width: _s.width, height: _s.height },
  { id: "a5-landscape", group: "print", label: "A5 landscape", width: _s.height, height: _s.width },
  { id: "letter-portrait", group: "print", label: "Letter portrait", ...Ps(8.5, 11) },
  { id: "letter-landscape", group: "print", label: "Letter landscape", ...Ps(11, 8.5) },
  { id: "tabloid-portrait", group: "print", label: "Tabloid portrait", ...Ps(11, 17) },
  { id: "tabloid-landscape", group: "print", label: "Tabloid landscape", ...Ps(17, 11) },
  {
    id: "business-card",
    group: "print",
    label: "Business card",
    ...Pl(85, 55)
  },
  { id: "1080-square", group: "social", label: "Square 1080", width: 1080, height: 1080 },
  { id: "1080-story", group: "social", label: "Story 1080 × 1920", width: 1080, height: 1920 },
  { id: "1080-portrait", group: "social", label: "Portrait 1080 × 1350", width: 1080, height: 1350 },
  { id: "1200-link", group: "social", label: "Link post 1200 × 628", width: 1200, height: 628 }
], lA = [
  { id: "print", label: "Print" },
  { id: "social", label: "Social" }
];
function Ku(e) {
  return xl.find((t) => t.id === e);
}
function cA(e, t, n) {
  if (n && Ku(n)) {
    const o = Ku(n);
    if (o.width === e && o.height === t)
      return o.id;
  }
  const r = xl.find((o) => o.width === e && o.height === t);
  return (r == null ? void 0 : r.id) ?? "custom";
}
const Tf = [
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
], xv = [
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
], uA = [
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
], Lv = xl.filter(
  (e) => e.group === "print"
).map((e) => ({
  id: e.id,
  label: `${e.label} — ${e.width} × ${e.height}`,
  width: e.width,
  height: e.height,
  formatPreset: e.id
}));
function ea(e) {
  return e === "Social" || e === "Print";
}
function Ll(e) {
  switch (e) {
    case "Email":
      return xv;
    case "Newsletter":
      return uA;
    case "Print":
      return Lv;
    default:
      return Tf;
  }
}
function _v(e) {
  const t = e.canvasWidth, n = e.canvasHeight;
  return t != null && n != null ? `${t} × ${n} px` : t != null ? `${t} px wide` : "Not set";
}
function dA(e, t) {
  return e.canvasWidth !== t.width ? !1 : t.height != null ? e.canvasHeight === t.height : e.canvasHeight == null || e.canvasHeight === void 0;
}
function fA(e) {
  const t = Ll(e.channelType), n = t.find((o) => dA(e, o));
  if (n)
    return n.id;
  const r = t.find(
    (o) => o.formatPreset.trim().toLowerCase() === (e.formatPreset ?? "").trim().toLowerCase()
  );
  return r ? r.id : "custom";
}
function Vu(e, t, n) {
  return (e === "Social" || e === "Print") && t != null && n != null ? `${t}x${n}` : e === "Email" && t != null ? `${t}px email` : e === "Newsletter" && t != null ? `${t}px newsletter` : "";
}
function pA(e, t) {
  if (t === "custom")
    return null;
  const n = Ll(e).find((r) => r.id === t);
  return n ? {
    canvasWidth: n.width,
    canvasHeight: n.height,
    formatPreset: n.formatPreset
  } : null;
}
function zv(e) {
  const t = Ll(e)[0];
  return {
    canvasWidth: t.width,
    canvasHeight: t.height,
    formatPreset: t.formatPreset
  };
}
function Sf(e) {
  return e.canvasWidth != null && Number.isFinite(e.canvasWidth) ? e.canvasWidth : e.channelType === "Email" || e.channelType === "Newsletter" ? xv[0].width : Tf[0].width;
}
function Rv(e) {
  return e.canvasHeight != null && Number.isFinite(e.canvasHeight) ? e.canvasHeight : e.channelType === "Email" || e.channelType === "Newsletter" ? 800 : Tf[0].height ?? 1080;
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function qm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function mA(e) {
  if (Array.isArray(e))
    return e;
}
function hA(e, t) {
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
function gA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yA(e, t) {
  return mA(e) || hA(e, t) || vA(e, t) || gA();
}
function vA(e, t) {
  if (e) {
    if (typeof e == "string")
      return qm(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qm(e, t) : void 0;
  }
}
const Ov = Object.entries, eh = Object.setPrototypeOf, wA = Object.isFrozen, TA = Object.getPrototypeOf, SA = Object.getOwnPropertyDescriptor;
let Ye = Object.freeze, Qe = Object.seal, jr = Object.create, $v = typeof Reflect < "u" && Reflect, Zu = $v.apply, Wu = $v.construct;
Ye || (Ye = function(t) {
  return t;
});
Qe || (Qe = function(t) {
  return t;
});
Zu || (Zu = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    o[i - 2] = arguments[i];
  return t.apply(n, o);
});
Wu || (Wu = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Wo = ze(Array.prototype.forEach), kA = ze(Array.prototype.lastIndexOf), th = ze(Array.prototype.pop), Hr = ze(Array.prototype.push), EA = ze(Array.prototype.splice), Hn = Array.isArray, ni = ze(String.prototype.toLowerCase), _c = ze(String.prototype.toString), nh = ze(String.prototype.match), Yo = ze(String.prototype.replace), rh = ze(String.prototype.indexOf), AA = ze(String.prototype.trim), CA = ze(Number.prototype.toString), bA = ze(Boolean.prototype.toString), oh = typeof BigInt > "u" ? null : ze(BigInt.prototype.toString), ih = typeof Symbol > "u" ? null : ze(Symbol.prototype.toString), De = ze(Object.prototype.hasOwnProperty), Go = ze(Object.prototype.toString), Ke = ze(RegExp.prototype.test), cr = NA(TypeError);
function ze(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Zu(e, t, r);
  };
}
function NA(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Wu(e, n);
  };
}
function q(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ni;
  if (eh && eh(e, null), !Hn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (wA(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function PA(e) {
  for (let t = 0; t < e.length; t++)
    De(e, t) || (e[t] = null);
  return e;
}
function at(e) {
  const t = jr(null);
  for (const r of Ov(e)) {
    var n = yA(r, 2);
    const o = n[0], i = n[1];
    De(e, o) && (Hn(i) ? t[o] = PA(i) : i && typeof i == "object" && i.constructor === Object ? t[o] = at(i) : t[o] = i);
  }
  return t;
}
function xA(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return CA(e);
    case "boolean":
      return bA(e);
    case "bigint":
      return oh ? oh(e) : "0";
    case "symbol":
      return ih ? ih(e) : "Symbol()";
    case "undefined":
      return Go(e);
    case "function":
    case "object": {
      if (e === null)
        return Go(e);
      const t = e, n = rn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Go(r);
      }
      return Go(e);
    }
    default:
      return Go(e);
  }
}
function rn(e, t) {
  for (; e !== null; ) {
    const r = SA(e, t);
    if (r) {
      if (r.get)
        return ze(r.get);
      if (typeof r.value == "function")
        return ze(r.value);
    }
    e = TA(e);
  }
  function n() {
    return null;
  }
  return n;
}
function LA(e) {
  try {
    return Ke(e, ""), !0;
  } catch {
    return !1;
  }
}
const sh = Ye(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), zc = Ye(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Rc = Ye(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _A = Ye(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Oc = Ye(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), zA = Ye(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ah = Ye(["#text"]), lh = Ye(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $c = Ye(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ch = Ye(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), zs = Ye(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), RA = Qe(/{{[\w\W]*|^[\w\W]*}}/g), OA = Qe(/<%[\w\W]*|^[\w\W]*%>/g), $A = Qe(/\${[\w\W]*/g), MA = Qe(/^data-[\-\w.\u00B7-\uFFFF]+$/), IA = Qe(/^aria-[\-\w]+$/), uh = Qe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), DA = Qe(/^(?:\w+script|data):/i), HA = Qe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), FA = Qe(/^html$/i), UA = Qe(/^[a-z][.\w]*(-[.\w]+)+$/i), dh = Qe(/<[/\w!]/g), jA = Qe(/<[/\w]/g), BA = Qe(/<\/no(script|embed|frames)/i), KA = Qe(/\/>/i), nn = {
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
}, VA = function() {
  return typeof window > "u" ? null : window;
}, ZA = function(t, n) {
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
}, fh = function() {
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
}, Rn = function(t, n, r, o) {
  return De(t, n) && Hn(t[n]) ? q(o.base ? at(o.base) : {}, t[n], o.transform) : r;
};
function Mv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : VA();
  const t = (F) => Mv(F);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, s = e.Node, a = e.Element, l = e.NodeFilter, c = e.NamedNodeMap;
  c === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, u = e.trustedTypes, p = a.prototype, v = rn(p, "cloneNode"), S = rn(p, "remove"), T = rn(p, "nextSibling"), _ = rn(p, "childNodes"), h = rn(p, "parentNode"), m = rn(p, "shadowRoot"), g = rn(p, "attributes"), b = s && s.prototype ? rn(s.prototype, "nodeType") : null, C = s && s.prototype ? rn(s.prototype, "nodeName") : null;
  if (typeof i == "function") {
    const F = n.createElement("template");
    F.content && F.content.ownerDocument && (n = F.content.ownerDocument);
  }
  let N, k = "", L, U = !1, R = 0;
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
    return U || (L = ZA(u, o), U = !0), L;
  }, qe = n, Ee = qe.implementation, W = qe.createNodeIterator, M = qe.createDocumentFragment, $ = qe.getElementsByTagName, w = r.importNode;
  let x = fh();
  t.isSupported = typeof Ov == "function" && typeof h == "function" && Ee && Ee.createHTMLDocument !== void 0;
  const j = RA, Q = OA, Z = $A, Me = MA, be = IA, Ne = DA, Be = HA, Ro = UA;
  let Df = uh, ge = null;
  const Hf = q({}, [...sh, ...zc, ...Rc, ...Oc, ...ah]);
  let ye = null;
  const Ff = q({}, [...lh, ...$c, ...ch, ...zs]);
  let ve = Object.seal(jr(null, {
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
  })), Oo = null, Uf = null;
  const xn = Object.seal(jr(null, {
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
  let jf = !0, Dl = !0, Bf = !1, Kf = !0, Ln = !1, $o = !0, ar = !1, Hl = !1, Fl = null, Ul = null, jl = !1, Rr = !1, ns = !1, rs = !1, Vf = !0, Zf = !1;
  const Wf = "user-content-";
  let Bl = !0, Kl = !1, Or = {}, qt = null;
  const Vl = q({}, [
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
  let Yf = null;
  const Gf = q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Zl = null;
  const Xf = q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), os = "http://www.w3.org/1998/Math/MathML", is = "http://www.w3.org/2000/svg", en = "http://www.w3.org/1999/xhtml";
  let $r = en, Wl = !1, Yl = null;
  const j0 = q({}, [os, is, en], _c), Jf = Ye(["mi", "mo", "mn", "ms", "mtext"]);
  let Gl = q({}, Jf);
  const Qf = Ye(["annotation-xml"]);
  let Xl = q({}, Qf);
  const B0 = q({}, ["title", "style", "font", "a", "script"]);
  let Mo = null;
  const K0 = ["application/xhtml+xml", "text/html"], V0 = "text/html";
  let we = null, Mr = null;
  const Z0 = n.createElement("form"), qf = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Jl = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Mr && Mr === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = at(y), Mo = // eslint-disable-next-line unicorn/prefer-includes
    K0.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? V0 : y.PARSER_MEDIA_TYPE, we = Mo === "application/xhtml+xml" ? _c : ni, ge = Rn(y, "ALLOWED_TAGS", Hf, {
      transform: we
    }), ye = Rn(y, "ALLOWED_ATTR", Ff, {
      transform: we
    }), Yl = Rn(y, "ALLOWED_NAMESPACES", j0, {
      transform: _c
    }), Zl = Rn(y, "ADD_URI_SAFE_ATTR", Xf, {
      transform: we,
      base: Xf
    }), Yf = Rn(y, "ADD_DATA_URI_TAGS", Gf, {
      transform: we,
      base: Gf
    }), qt = Rn(y, "FORBID_CONTENTS", Vl, {
      transform: we
    }), Oo = Rn(y, "FORBID_TAGS", at({}), {
      transform: we
    }), Uf = Rn(y, "FORBID_ATTR", at({}), {
      transform: we
    }), Or = De(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? at(y.USE_PROFILES) : y.USE_PROFILES : !1, jf = y.ALLOW_ARIA_ATTR !== !1, Dl = y.ALLOW_DATA_ATTR !== !1, Bf = y.ALLOW_UNKNOWN_PROTOCOLS || !1, Kf = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ln = y.SAFE_FOR_TEMPLATES || !1, $o = y.SAFE_FOR_XML !== !1, ar = y.WHOLE_DOCUMENT || !1, Rr = y.RETURN_DOM || !1, ns = y.RETURN_DOM_FRAGMENT || !1, rs = y.RETURN_TRUSTED_TYPE || !1, jl = y.FORCE_BODY || !1, Vf = y.SANITIZE_DOM !== !1, Zf = y.SANITIZE_NAMED_PROPS || !1, Bl = y.KEEP_CONTENT !== !1, Kl = y.IN_PLACE || !1, Df = LA(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : uh, $r = typeof y.NAMESPACE == "string" ? y.NAMESPACE : en, Gl = De(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? at(y.MATHML_TEXT_INTEGRATION_POINTS) : q({}, Jf), Xl = De(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? at(y.HTML_INTEGRATION_POINTS) : q({}, Qf);
    const P = De(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? at(y.CUSTOM_ELEMENT_HANDLING) : jr(null);
    if (ve = jr(null), De(P, "tagNameCheck") && qf(P.tagNameCheck) && (ve.tagNameCheck = P.tagNameCheck), De(P, "attributeNameCheck") && qf(P.attributeNameCheck) && (ve.attributeNameCheck = P.attributeNameCheck), De(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Qe(ve), Ln && (Dl = !1), ns && (Rr = !0), Or && (ge = q({}, ah), ye = jr(null), Or.html === !0 && (q(ge, sh), q(ye, lh)), Or.svg === !0 && (q(ge, zc), q(ye, $c), q(ye, zs)), Or.svgFilters === !0 && (q(ge, Rc), q(ye, $c), q(ye, zs)), Or.mathMl === !0 && (q(ge, Oc), q(ye, ch), q(ye, zs))), xn.tagCheck = null, xn.attributeCheck = null, De(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? xn.tagCheck = y.ADD_TAGS : Hn(y.ADD_TAGS) && (ge === Hf && (ge = at(ge)), q(ge, y.ADD_TAGS, we))), De(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? xn.attributeCheck = y.ADD_ATTR : Hn(y.ADD_ATTR) && (ye === Ff && (ye = at(ye)), q(ye, y.ADD_ATTR, we))), De(y, "ADD_URI_SAFE_ATTR") && Hn(y.ADD_URI_SAFE_ATTR) && q(Zl, y.ADD_URI_SAFE_ATTR, we), De(y, "FORBID_CONTENTS") && Hn(y.FORBID_CONTENTS) && (qt === Vl && (qt = at(qt)), q(qt, y.FORBID_CONTENTS, we)), De(y, "ADD_FORBID_CONTENTS") && Hn(y.ADD_FORBID_CONTENTS) && (qt === Vl && (qt = at(qt)), q(qt, y.ADD_FORBID_CONTENTS, we)), Bl && (ge["#text"] = !0), ar && q(ge, ["html", "head", "body"]), ge.table && (q(ge, ["tbody"]), delete Oo.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw cr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw cr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const H = N;
      N = y.TRUSTED_TYPES_POLICY;
      try {
        k = z("");
      } catch (K) {
        throw N = H, K;
      }
    } else
      y.TRUSTED_TYPES_POLICY === null ? (N = void 0, k = "") : (N === void 0 && (N = Re()), N && typeof k == "string" && (k = z("")));
    Ye && Ye(y), Mr = y;
  }, ep = q({}, [...zc, ...Rc, ..._A]), tp = q({}, [...Oc, ...zA]), W0 = function(y, P, H) {
    return P.namespaceURI === en ? y === "svg" : P.namespaceURI === os ? y === "svg" && (H === "annotation-xml" || Gl[H]) : !!ep[y];
  }, Y0 = function(y, P, H) {
    return P.namespaceURI === en ? y === "math" : P.namespaceURI === is ? y === "math" && Xl[H] : !!tp[y];
  }, G0 = function(y, P, H) {
    return P.namespaceURI === is && !Xl[H] || P.namespaceURI === os && !Gl[H] ? !1 : !tp[y] && (B0[y] || !ep[y]);
  }, X0 = function(y) {
    let P = h(y);
    (!P || !P.tagName) && (P = {
      namespaceURI: $r,
      tagName: "template"
    });
    const H = ni(y.tagName), K = ni(P.tagName);
    return Yl[y.namespaceURI] ? y.namespaceURI === is ? W0(H, P, K) : y.namespaceURI === os ? Y0(H, P, K) : y.namespaceURI === en ? G0(H, P, K) : !!(Mo === "application/xhtml+xml" && Yl[y.namespaceURI]) : !1;
  }, _n = function(y) {
    Hr(t.removed, {
      element: y
    });
    try {
      h(y).removeChild(y);
    } catch {
      if (S(y), !h(y))
        throw cr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, np = function(y) {
    const P = _(y);
    if (P) {
      const K = [];
      Wo(P, (X) => {
        Hr(K, X);
      }), Wo(K, (X) => {
        try {
          S(X);
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
      if (Rr || ns)
        try {
          _n(P);
        } catch {
        }
      else
        try {
          P.setAttribute(y, "");
        } catch {
        }
  }, J0 = function(y) {
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
  }, Q0 = function(y) {
    const P = [y];
    for (; P.length > 0; ) {
      const H = P.pop();
      (b ? b(H) : H.nodeType) === nn.element && J0(H);
      const X = _(H);
      if (X)
        for (let ee = X.length - 1; ee >= 0; --ee)
          P.push(X[ee]);
    }
  }, rp = function(y) {
    let P = null, H = null;
    if (jl)
      y = "<remove></remove>" + y;
    else {
      const ee = nh(y, /^[\r\n\t ]+/);
      H = ee && ee[0];
    }
    Mo === "application/xhtml+xml" && $r === en && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const K = N ? z(y) : y;
    if ($r === en)
      try {
        P = new f().parseFromString(K, Mo);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = Ee.createDocument($r, "template", null);
      try {
        P.documentElement.innerHTML = Wl ? k : K;
      } catch {
      }
    }
    const X = P.body || P.documentElement;
    return y && H && X.insertBefore(n.createTextNode(H), X.childNodes[0] || null), $r === en ? $.call(P, ar ? "html" : "body")[0] : ar ? P.documentElement : X;
  }, op = function(y) {
    return W.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, ss = function(y) {
    return y = Yo(y, j, " "), y = Yo(y, Q, " "), y = Yo(y, Z, " "), y;
  }, Ql = function(y) {
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
      K.data = ss(K.data), K = H.nextNode();
    const X = (P = y.querySelectorAll) === null || P === void 0 ? void 0 : P.call(y, "template");
    X && Wo(X, (ee) => {
      Ir(ee.content) && Ql(ee.content);
    });
  }, as = function(y) {
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
  }, Io = function(y) {
    if (!b || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof b(y) == "number";
    } catch {
      return !1;
    }
  };
  function pn(F, y, P) {
    F.length !== 0 && Wo(F, (H) => {
      H.call(t, y, P, Mr);
    });
  }
  const q0 = function(y, P) {
    return !!($o && y.hasChildNodes() && !Io(y.firstElementChild) && Ke(dh, y.textContent) && Ke(dh, y.innerHTML) || $o && y.namespaceURI === en && P === "style" && Io(y.firstElementChild) || y.nodeType === nn.processingInstruction || $o && y.nodeType === nn.comment && Ke(jA, y.data));
  }, ew = function(y, P) {
    if (!Oo[P] && ap(P) && (ve.tagNameCheck instanceof RegExp && Ke(ve.tagNameCheck, P) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(P)))
      return !1;
    if (Bl && !qt[P]) {
      const H = h(y), K = _(y);
      if (K && H) {
        const X = K.length;
        for (let ee = X - 1; ee >= 0; --ee) {
          const Ie = Kl ? K[ee] : v(K[ee], !0);
          H.insertBefore(Ie, T(y));
        }
      }
    }
    return _n(y), !0;
  }, ip = function(y) {
    if (pn(x.beforeSanitizeElements, y, null), as(y))
      return _n(y), !0;
    const P = we(C ? C(y) : y.nodeName);
    if (pn(x.uponSanitizeElement, y, {
      tagName: P,
      allowedTags: ge
    }), q0(y, P))
      return _n(y), !0;
    if (Oo[P] || !(xn.tagCheck instanceof Function && xn.tagCheck(P)) && !ge[P])
      return ew(y, P);
    if ((b ? b(y) : y.nodeType) === nn.element && !X0(y) || (P === "noscript" || P === "noembed" || P === "noframes") && Ke(BA, y.innerHTML))
      return _n(y), !0;
    if (Ln && y.nodeType === nn.text) {
      const K = ss(y.textContent);
      y.textContent !== K && (Hr(t.removed, {
        element: y.cloneNode()
      }), y.textContent = K);
    }
    return pn(x.afterSanitizeElements, y, null), !1;
  }, sp = function(y, P, H) {
    if (Uf[P] || Vf && (P === "id" || P === "name") && (H in n || H in Z0))
      return !1;
    const K = ye[P] || xn.attributeCheck instanceof Function && xn.attributeCheck(P, y);
    if (!(Dl && Ke(Me, P))) {
      if (!(jf && Ke(be, P))) {
        if (K) {
          if (!Zl[P]) {
            if (!Ke(Df, Yo(H, Be, ""))) {
              if (!((P === "src" || P === "xlink:href" || P === "href") && y !== "script" && rh(H, "data:") === 0 && Yf[y])) {
                if (!(Bf && !Ke(Ne, Yo(H, Be, "")))) {
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
          !(ap(y) && (ve.tagNameCheck instanceof RegExp && Ke(ve.tagNameCheck, y) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(y)) && (ve.attributeNameCheck instanceof RegExp && Ke(ve.attributeNameCheck, P) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(P, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          P === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Ke(ve.tagNameCheck, H) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(H)))
        )
          return !1;
      }
    }
    return !0;
  }, tw = q({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ap = function(y) {
    return !tw[ni(y)] && Ke(Ro, y);
  }, nw = function(y, P, H, K) {
    if (N && typeof u == "object" && typeof u.getAttributeType == "function" && !H)
      switch (u.getAttributeType(y, P)) {
        case "TrustedHTML":
          return z(K);
        case "TrustedScriptURL":
          return Y(K);
      }
    return K;
  }, rw = function(y, P, H, K) {
    try {
      H ? y.setAttributeNS(H, P, K) : y.setAttribute(P, K), as(y) ? _n(y) : th(t.removed);
    } catch {
      lr(P, y);
    }
  }, lp = function(y) {
    pn(x.beforeSanitizeAttributes, y, null);
    const P = y.attributes;
    if (!P || as(y))
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
      const ee = P[K], Ie = ee.name, Pe = ee.namespaceURI, _t = ee.value, Ut = we(Ie), ec = _t;
      let st = Ie === "value" ? ec : AA(ec);
      if (H.attrName = Ut, H.attrValue = st, H.keepAttr = !0, H.forceKeepAttr = void 0, pn(x.uponSanitizeAttribute, y, H), st = H.attrValue, Zf && (Ut === "id" || Ut === "name") && rh(st, Wf) !== 0 && (lr(Ie, y), st = Wf + st), $o && Ke(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        lr(Ie, y);
        continue;
      }
      if (Ut === "attributename" && nh(st, "href")) {
        lr(Ie, y);
        continue;
      }
      if (!H.forceKeepAttr) {
        if (!H.keepAttr) {
          lr(Ie, y);
          continue;
        }
        if (!Kf && Ke(KA, st)) {
          lr(Ie, y);
          continue;
        }
        if (Ln && (st = ss(st)), !sp(X, Ut, st)) {
          lr(Ie, y);
          continue;
        }
        st = nw(X, Ut, Pe, st), st !== ec && rw(y, Ie, Pe, st);
      }
    }
    pn(x.afterSanitizeAttributes, y, null);
  }, ls = function(y) {
    let P = null;
    const H = op(y);
    for (pn(x.beforeSanitizeShadowDOM, y, null); P = H.nextNode(); )
      if (pn(x.uponSanitizeShadowNode, P, null), ip(P), lp(P), Ir(P.content) && ls(P.content), (b ? b(P) : P.nodeType) === nn.element) {
        const X = m(P);
        Ir(X) && (ql(X), ls(X));
      }
    pn(x.afterSanitizeShadowDOM, y, null);
  }, ql = function(y) {
    const P = [{
      node: y,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const H = P.pop();
      if (H.shadow) {
        ls(H.shadow);
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
    if (Wl = !F, Wl && (F = "<!-->"), typeof F != "string" && !Io(F) && (F = xA(F), typeof F != "string"))
      throw cr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    Hl ? (ge = Fl, ye = Ul) : Jl(y), (x.uponSanitizeElement.length > 0 || x.uponSanitizeAttribute.length > 0) && (ge = at(ge)), x.uponSanitizeAttribute.length > 0 && (ye = at(ye)), t.removed = [];
    const ee = Kl && typeof F != "string" && Io(F);
    if (ee) {
      const _t = C ? C(F) : F.nodeName;
      if (typeof _t == "string") {
        const Ut = we(_t);
        if (!ge[Ut] || Oo[Ut])
          throw cr("root node is forbidden and cannot be sanitized in-place");
      }
      if (as(F))
        throw cr("root node is clobbered and cannot be sanitized in-place");
      try {
        ql(F);
      } catch (Ut) {
        throw np(F), Ut;
      }
    } else if (Io(F))
      P = rp("<!---->"), H = P.ownerDocument.importNode(F, !0), H.nodeType === nn.element && H.nodeName === "BODY" || H.nodeName === "HTML" ? P = H : P.appendChild(H), ql(H);
    else {
      if (!Rr && !Ln && !ar && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return N && rs ? z(F) : F;
      if (P = rp(F), !P)
        return Rr ? null : rs ? k : "";
    }
    P && jl && _n(P.firstChild);
    const Ie = op(ee ? F : P);
    try {
      for (; K = Ie.nextNode(); )
        ip(K), lp(K), Ir(K.content) && ls(K.content);
    } catch (_t) {
      throw ee && np(F), _t;
    }
    if (ee)
      return Wo(t.removed, (_t) => {
        _t.element && Q0(_t.element);
      }), Ln && Ql(F), F;
    if (Rr) {
      if (Ln && Ql(P), ns)
        for (X = M.call(P.ownerDocument); P.firstChild; )
          X.appendChild(P.firstChild);
      else
        X = P;
      return (ye.shadowroot || ye.shadowrootmode) && (X = w.call(r, X, !0)), X;
    }
    let Pe = ar ? P.outerHTML : P.innerHTML;
    return ar && ge["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Ke(FA, P.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + Pe), Ln && (Pe = ss(Pe)), N && rs ? z(Pe) : Pe;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Jl(F), Hl = !0, Fl = ge, Ul = ye;
  }, t.clearConfig = function() {
    Mr = null, Hl = !1, Fl = null, Ul = null, N = L, k = "";
  }, t.isValidAttribute = function(F, y, P) {
    Mr || Jl({});
    const H = we(F), K = we(y);
    return sp(H, K, P);
  }, t.addHook = function(F, y) {
    typeof y == "function" && De(x, F) && Hr(x[F], y);
  }, t.removeHook = function(F, y) {
    if (De(x, F)) {
      if (y !== void 0) {
        const P = kA(x[F], y);
        return P === -1 ? void 0 : EA(x[F], P, 1)[0];
      }
      return th(x[F]);
    }
  }, t.removeHooks = function(F) {
    De(x, F) && (x[F] = []);
  }, t.removeAllHooks = function() {
    x = fh();
  }, t;
}
var WA = Mv();
const YA = [
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
], GA = ["href", "style", "src", "alt", "width", "height", "align", "colspan", "rowspan", "target", "rel"];
function Fi(e) {
  return e != null && e.trim() ? WA.sanitize(e, {
    ALLOWED_TAGS: [...YA],
    ALLOWED_ATTR: GA,
    ALLOW_DATA_ATTR: !1
  }) : "";
}
const Iv = ["H1", "H2", "H3", "H4", "H5", "H6"], Nn = "H2";
function XA(e) {
  const t = e == null ? void 0 : e.trim().toUpperCase();
  return t && Iv.includes(t) ? t : Nn;
}
const JA = {
  H1: "32px",
  H2: "28px",
  H3: "24px",
  H4: "20px",
  H5: "18px",
  H6: "16px"
}, QA = {
  H1: "2rem",
  H2: "1.75rem",
  H3: "1.5rem",
  H4: "1.25rem",
  H5: "1.125rem",
  H6: "1rem"
}, Dv = ["Left", "Center", "Right"], Hv = ["Top", "Right", "Bottom", "Left"], Lr = "Left", _l = "Top";
function Fv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "center" ? "Center" : t === "right" ? "Right" : "Left";
}
function Uv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "right" ? "Right" : t === "bottom" ? "Bottom" : t === "left" ? "Left" : "Top";
}
function qA(e, t = {}, n = "stacked") {
  const r = e.contentAlignment ?? Lr, o = Math.max(0, e.offsetPx ?? 0), i = e.offsetDirection ?? _l, s = {
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
function eC(e) {
  return `zone-layout-${(e.contentAlignment ?? Lr).toLowerCase()}`;
}
function tC(e) {
  const t = { top: 16, right: 24, bottom: 16, left: 24 }, n = Math.max(0, e.offsetPx ?? 0);
  if (n <= 0)
    return t;
  const r = e.offsetDirection ?? _l;
  return r === "Top" && (t.top += n), r === "Right" && (t.right += n), r === "Bottom" && (t.bottom += n), r === "Left" && (t.left += n), t;
}
function Mc(e, t = "") {
  const n = (e.contentAlignment ?? Lr).toLowerCase(), r = tC(e);
  return `padding:${r.top}px ${r.right}px ${r.bottom}px ${r.left}px;text-align:${n};${t}`;
}
function nC(e) {
  return (e.contentAlignment ?? Lr).toLowerCase();
}
function rC(e) {
  const t = e.contentAlignment ?? Lr, n = "display:block;width:100%;max-width:552px;height:auto;border:0;";
  return t === "Center" ? `${n}margin:0 auto;` : t === "Right" ? `${n}margin-left:auto;margin-right:0;` : `${n}margin:0;`;
}
function oC() {
  return "display:inline-block;";
}
function On(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function ta(e, t, n) {
  var r;
  return ((r = e.colors.find((o) => o.colorUsageType === t)) == null ? void 0 : r.hexValue) ?? n;
}
function Ic(e, t, n) {
  var r;
  return ((r = e.fonts.find((o) => o.fontUsageType === t)) == null ? void 0 : r.fontFamily) ?? n;
}
function iC(e) {
  const t = e.zoneKey.toLowerCase(), n = e.zoneLabel.toLowerCase();
  return t.includes("headline") || n.includes("headline");
}
function sC(e, t, n) {
  var i, s, a, l, c, f;
  const r = nC(e), o = Mc(e);
  if (Al(e)) {
    const u = Mc(e, "padding-top:24px;padding-bottom:16px;");
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
      const p = iC(e), v = Ic(n, p ? "Heading" : "Body", vr), S = p ? "28px" : "16px", T = p ? "bold" : "normal", _ = ta(n, "Secondary", Zt.secondary);
      return `<tr>
        <td align="${r}" style="${o}font-family:${v};font-size:${S};font-weight:${T};color:${_};line-height:1.5;">
          ${On(u)}
        </td>
      </tr>`;
    }
    case "Heading": {
      const u = (s = t == null ? void 0 : t.textValue) == null ? void 0 : s.trim();
      if (!u)
        return "";
      const p = e.headingLevel ?? Nn, v = Ic(n, "Heading", vr), S = JA[p], T = ta(n, "Secondary", Zt.secondary), _ = p.toLowerCase();
      return `<tr>
        <td align="${r}" style="${o}">
          <${_} style="margin:0;font-family:${v};font-size:${S};font-weight:700;color:${T};line-height:1.25;">
            ${On(u)}
          </${_}>
        </td>
      </tr>`;
    }
    case "Image": {
      const u = (a = t == null ? void 0 : t.imageAssetUrl) == null ? void 0 : a.trim();
      if (!u)
        return "";
      const p = `<img src="${On(u)}" alt="${On(e.zoneLabel)}" width="552" style="${rC(e)}" />`, v = (l = t == null ? void 0 : t.linkUrl) == null ? void 0 : l.trim(), S = v ? `<a href="${On(v)}" target="_blank" rel="noopener noreferrer">${p}</a>` : p;
      return `<tr><td align="${r}" style="${o}">${S}</td></tr>`;
    }
    case "CTA Button": {
      const u = (c = t == null ? void 0 : t.textValue) == null ? void 0 : c.trim();
      if (!u)
        return "";
      const p = ((f = t == null ? void 0 : t.linkUrl) == null ? void 0 : f.trim()) || "#", v = ta(n, "Accent", Zt.accent), S = Ic(n, "CTA", vr);
      return `<tr>
        <td align="${r}" style="${Mc(e, "padding-bottom:32px;")}">
          <a href="${On(p)}" target="_blank" rel="noopener noreferrer" style="${oC()}background-color:${v};color:#ffffff;font-family:${S};font-size:16px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:4px;">
            ${On(u)}
          </a>
        </td>
      </tr>`;
    }
    case "HTML": {
      const u = e.isLocked ? e.htmlDefaultContent : (t == null ? void 0 : t.htmlValue) ?? e.htmlDefaultContent, p = Fi(u);
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
function Yu(e, t, n) {
  const r = ta(n, "Background", Zt.background), o = "#ffffff", i = Sf(e), s = e.zones.sort((a, l) => a.sortOrder - l.sortOrder).map((a) => sC(a, t[a.id] ?? t[a.zoneKey], n)).filter(Boolean).join(`
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
const nr = "dummy-brand-kit", ph = "dummy-template";
function mr(e = nr) {
  return aA(e);
}
function aC(e, t = "Social") {
  return t === "Email" || t === "Newsletter" ? cC(e) : lC(e, t);
}
function lC(e, t = "Social") {
  const n = t === "Print" ? Lv[0] : null;
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
function cC(e) {
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
function uC(e, t) {
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
function dC(e) {
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
  mE(e, t, n);
}
function So(e) {
  return { Invariant: e };
}
function _e(e, t, n) {
  e[t] = So(n);
}
function kf(e, t, n) {
  e[t] = n;
}
function $t(e, t, n) {
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
function ko(e) {
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
      t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0, t.headingLevel || (t.headingLevel = Nn);
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
function fC(e, t) {
  const n = { zoneType: t };
  return t === "Heading" ? (n.headingLevel = e.headingLevel ?? Nn, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : (n.headingLevel = void 0, t === "Text" ? (n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "Image" ? (n.maxCharacterCount = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "HTML" ? (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n) : (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n));
}
function pC(e) {
  return {
    Title: So(e.zoneKey)
  };
}
const mC = {
  textValue: ["textValue", "TextValue", "text", "content", "zoneText", "value"],
  colorValue: ["colorValue", "ColorValue", "color", "hexValue"],
  htmlValue: ["htmlValue", "HtmlValue", "html", "htmlContent"],
  linkUrl: ["linkUrl", "LinkUrl", "url", "href", "link"]
};
function jv(e) {
  const t = {};
  return e.textValue !== void 0 && _e(t, "textValue", e.textValue), e.colorValue !== void 0 && _e(t, "colorValue", e.colorValue), e.htmlValue !== void 0 && _e(t, "htmlValue", e.htmlValue), e.linkUrl !== void 0 && _e(t, "linkUrl", e.linkUrl), t;
}
function hC(e, t) {
  if (t.length === 0)
    return jv(e);
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
      for (const s of mC[i.key]) {
        const a = n.get(s.toLowerCase());
        if (a && !(/^title$/i.test(a) || /\.Title$/i.test(a))) {
          _e(r, a, i.value);
          break;
        }
      }
  return r;
}
function gC(e) {
  var t, n, r, o, i, s;
  return !!((t = e.textValue) != null && t.trim() || (n = e.htmlValue) != null && n.trim() || (r = e.colorValue) != null && r.trim() || (o = e.linkUrl) != null && o.trim() || (i = e.imageAssetId) != null && i.trim() || (s = e.imageAssetUrl) != null && s.trim());
}
function yC(e) {
  const t = {};
  return e.isRawHtmlOverrideMA !== void 0 && (t.isRawHtmlOverrideMA = e.isRawHtmlOverrideMA), e.rawHtmlOverrideContent !== void 0 && _e(t, "rawHtmlOverrideContent", e.rawHtmlOverrideContent), e.overrideReasonMA !== void 0 && _e(t, "overrideReasonMA", e.overrideReasonMA), e.zoneLayoutJson !== void 0 && _e(t, "zoneLayoutJson", e.zoneLayoutJson), e.designerInstanceJson !== void 0 && _e(t, "designerInstanceJson", e.designerInstanceJson), t;
}
function vC(e) {
  return { templateName: So(e.templateName) };
}
function Bv(e) {
  const t = {};
  return _e(t, "templateName", e.templateName), e.canvasWidth !== void 0 && $t(t, "canvasWidth", e.canvasWidth), e.canvasHeight !== void 0 && $t(t, "canvasHeight", e.canvasHeight), e.designerDocumentJson !== void 0 && _e(t, "designerDocumentJson", e.designerDocumentJson), t;
}
function wC(e, t, n = "designerDocumentJson") {
  const r = {};
  return _e(r, n, e), (t == null ? void 0 : t.width) != null && $t(r, "canvasWidth", t.width), (t == null ? void 0 : t.height) != null && $t(r, "canvasHeight", t.height), r;
}
function Kv(e) {
  return {
    zoneKey: So(e.zoneKey),
    zoneLabel: So(e.zoneLabel || e.zoneKey)
  };
}
function TC(e, t) {
  if (!t)
    return Kv(e);
  const n = {}, r = rr(e.zoneLabel) ?? e.zoneKey, o = rr(t.zoneLabel) ?? t.zoneKey;
  return e.zoneKey !== t.zoneKey && _e(n, "zoneKey", e.zoneKey), r !== o && _e(n, "zoneLabel", r), n;
}
function SC(e) {
  const t = {};
  return _e(t, "zoneType", e.zoneType), kf(t, "isLocked", e.isLocked), $t(t, "sortOrder", e.sortOrder), t;
}
function kC(e, t) {
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
    r.push({ [o]: So(e) }), r.push({ [o]: e });
  return r;
}
function EC(e, t) {
  const n = {};
  return (!t || e.isLocked !== t.isLocked) && kf(n, "isLocked", e.isLocked), (!t || e.sortOrder !== t.sortOrder) && $t(n, "sortOrder", e.sortOrder), n;
}
function Vv(e, t) {
  const n = {};
  return e.positionX !== void 0 && e.positionX !== (t == null ? void 0 : t.positionX) && $t(n, "positionX", e.positionX), e.positionY !== void 0 && e.positionY !== (t == null ? void 0 : t.positionY) && $t(n, "positionY", e.positionY), e.zoneWidth !== void 0 && e.zoneWidth !== (t == null ? void 0 : t.zoneWidth) && $t(n, "zoneWidth", e.zoneWidth), e.zoneHeight !== void 0 && e.zoneHeight !== (t == null ? void 0 : t.zoneHeight) && $t(n, "zoneHeight", e.zoneHeight), e.contentAlignment !== void 0 && e.contentAlignment !== (t == null ? void 0 : t.contentAlignment) && _e(n, "contentAlignment", e.contentAlignment), e.offsetDirection !== void 0 && e.offsetDirection !== (t == null ? void 0 : t.offsetDirection) && _e(n, "offsetDirection", e.offsetDirection), e.offsetPx !== void 0 && e.offsetPx !== (t == null ? void 0 : t.offsetPx) && $t(n, "offsetPx", e.offsetPx), n;
}
function Zv(e, t) {
  const n = ko(e), r = {};
  return (n.zoneType === "Text" || n.zoneType === "Heading") && n.maxCharacterCount !== void 0 && n.maxCharacterCount !== (t == null ? void 0 : t.maxCharacterCount) && $t(r, "maxCharacterCount", n.maxCharacterCount), n.zoneType === "Heading" && n.headingLevel !== void 0 && n.headingLevel !== (t == null ? void 0 : t.headingLevel) && _e(r, "headingLevel", n.headingLevel), n.zoneType === "Image" && n.aspectRatioLock !== void 0 && n.aspectRatioLock !== rr(t == null ? void 0 : t.aspectRatioLock) && _e(r, "aspectRatioLock", n.aspectRatioLock), n.zoneType === "HTML" && (n.htmlDefaultContent !== void 0 && n.htmlDefaultContent !== rr(t == null ? void 0 : t.htmlDefaultContent) && _e(r, "htmlDefaultContent", n.htmlDefaultContent), n.htmlAllowUserOverride !== void 0 && n.htmlAllowUserOverride !== (t == null ? void 0 : t.htmlAllowUserOverride) && kf(r, "htmlAllowUserOverride", n.htmlAllowUserOverride)), r;
}
function mh(e) {
  const t = ko(e);
  return {
    ...SC(t),
    ...Vv(t),
    ...Zv(t)
  };
}
function AC(e, t) {
  const n = ko(e), r = ko(t), o = rr(n.zoneLabel) ?? n.zoneKey, i = rr(r.zoneLabel) ?? r.zoneKey;
  return n.zoneKey === r.zoneKey && o === i && JSON.stringify(mh(n)) === JSON.stringify(mh(r));
}
function Eo(e) {
  return /^\d+$/.test(e);
}
const CC = ["Social", "Email", "Newsletter", "Print"];
function Ef(e) {
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
    const r = Ef(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function hn(e, ...t) {
  if (e)
    for (const n of t) {
      const r = Ef(e[n]);
      if (typeof r == "number" && Number.isFinite(r))
        return r;
      if (typeof r == "string") {
        const o = Number(r);
        if (Number.isFinite(o))
          return o;
      }
    }
}
function Gu(e, ...t) {
  if (!e)
    return !1;
  for (const n of t) {
    const r = Ef(e[n]);
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
  const n = mf(e, ...t);
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
function zl(e, t) {
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
function bC(e) {
  const t = e.trim().toLowerCase();
  return t.includes("email") ? "Email" : t.includes("newsletter") ? "Newsletter" : t.includes("print") || t.includes("poster") || /\ba4\b/.test(t) ? "Print" : "Social";
}
function NC(e) {
  const t = G(e, "EPAM.headingLevel", "headingLevel");
  return t ? XA(t) : void 0;
}
function PC(e) {
  const t = G(e, "EPAM.contentAlignment", "contentAlignment");
  return t ? Fv(t) : void 0;
}
function xC(e) {
  const t = G(e, "EPAM.offsetDirection", "offsetDirection");
  return t ? Uv(t) : void 0;
}
function Dc(e, t = "") {
  return { id: String(e), name: t || String(e) };
}
function Wv(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = t, s = G(r, "EPAM.channelType", "channelType") || G(r, "EPAM.channelTypeMA", "channelTypeMA") || jn(i, "channelType"), a = G(r, "EPAM.brandKitId", "brandKitId"), l = Et(
    o,
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit",
    "marketingTemplateToBrandKit"
  )[0];
  return {
    id: String(e),
    templateName: G(r, "EPAM.templateName", "templateName", "Title") || `Template ${e}`,
    channelType: CC.includes(s) ? s : bC(s),
    formatPreset: G(r, "EPAM.formatPreset", "formatPreset") || jn(i, "formatPreset") || "",
    canvasWidth: hn(r, "EPAM.canvasWidth", "canvasWidth"),
    canvasHeight: hn(r, "EPAM.canvasHeight", "canvasHeight"),
    brandKitId: a || (l != null ? String(l) : ""),
    zones: n,
    allowedAssetIds: Gv(t).map(String),
    designerDocumentJson: G(
      r,
      "EPAM.designerDocumentJson",
      "designerDocumentJson",
      "DesignerDocumentJson"
    ) || void 0
  };
}
function Af(e, t) {
  const n = t.properties ?? {}, r = t, o = G(n, "EPAM.zoneKey", "zoneKey") || `zone-${e}`, i = G(n, "EPAM.zoneLabel", "zoneLabel", "Title") || `Zone ${e}`, s = G(n, "EPAM.zoneType", "zoneType", "ZoneType", "zoneTypeMA", "ZoneTypeMA") || jn(r, "zoneType") || jn(r, "ZoneType") || jn(r, "EPAM.ZoneType") || jn(r, "zoneTypeMA"), a = yf(s, o, i), l = NC(n) ?? (a === "Heading" ? Nn : void 0);
  return {
    id: String(e),
    zoneKey: o,
    zoneLabel: i,
    zoneType: a,
    isLocked: Gu(n, "EPAM.isLocked", "isLocked"),
    sortOrder: hn(n, "EPAM.sortOrder", "sortOrder") ?? 0,
    positionX: hn(n, "EPAM.positionX", "positionX"),
    positionY: hn(n, "EPAM.positionY", "positionY"),
    zoneWidth: hn(n, "EPAM.zoneWidth", "zoneWidth"),
    zoneHeight: hn(n, "EPAM.zoneHeight", "zoneHeight"),
    maxCharacterCount: hn(n, "EPAM.maxCharacterCount", "maxCharacterCount"),
    headingLevel: l,
    contentAlignment: PC(n),
    offsetDirection: xC(n),
    offsetPx: hn(n, "EPAM.offsetPx", "offsetPx"),
    aspectRatioLock: G(n, "EPAM.aspectRatioLock", "aspectRatioLock") || void 0,
    htmlDefaultContent: G(n, "EPAM.htmlDefaultContent", "htmlDefaultContent") || void 0,
    htmlAllowUserOverride: Gu(n, "EPAM.htmlAllowUserOverride", "htmlAllowUserOverride"),
    allowedAssetIds: Xv(t).map(String),
    allowedAssetCollectionId: G(n, "EPAM.allowedAssetCollectionId", "allowedAssetCollectionId") || void 0
  };
}
function Yv(e, t) {
  const n = t.properties ?? {}, r = Cf(t), o = r[0] != null ? String(r[0]) : void 0;
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
function LC(e, t, n = []) {
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
    channelTypeMA: Dc(
      Et(o, "channelTypeMA", "ChannelTypeMA")[0] ?? "channel",
      G(r, "EPAM.channelTypeMA", "channelTypeMA") || "Channel"
    ),
    formatPresetMA: Dc(
      Et(o, "formatPresetMA", "FormatPresetMA")[0] ?? "format",
      G(r, "EPAM.formatPresetMA", "formatPresetMA") || "Format"
    ),
    outputFormatMA: Dc(
      Et(o, "outputFormatMA", "OutputFormatMA")[0] ?? "output",
      G(r, "EPAM.outputFormatMA", "outputFormatMA") || "Output"
    ),
    templateId: i,
    isRawHtmlOverrideMA: Gu(r, "EPAM.isRawHtmlOverrideMA", "isRawHtmlOverrideMA"),
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
function _C(e, t, n = [], r = []) {
  const o = t.properties ?? {};
  return {
    id: String(e),
    brandKitName: G(o, "EPAM.brandKitName", "brandKitName", "Title") || `Brand kit ${e}`,
    logoAssetUrl: G(o, "EPAM.logoAssetUrl", "logoAssetUrl"),
    colors: n,
    fonts: r
  };
}
function Gv(e) {
  const t = Et(e.relations, ...pv), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/template.*asset|allowed.*asset/i.test(r) || /collection|zone/i.test(r) || Array.isArray(o) && n.push(...Nr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function Cf(e) {
  const t = Et(e.relations, ...mv), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/selected.*asset|zonevalue.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Nr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function Xv(e) {
  const t = Et(e.relations, ...fv), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/allowed.*asset|zone.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Nr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function zC(e) {
  return [.../* @__PURE__ */ new Set([
    ...Et(
      e.relations,
      "templateToZone",
      "templateToTemplateZone",
      "TemplateToTemplateZone",
      "EPAM.TemplateToTemplateZone",
      "templateToEPAM.TemplateZone"
    ),
    ...zl(e.relations, /template.*zone/i)
  ])];
}
function Jv(e) {
  return [.../* @__PURE__ */ new Set([
    ...Et(
      e.relations,
      "marketingAssetToZoneValue",
      "MarketingAssetToZoneValue",
      "EPAM.MarketingAssetToZoneValue"
    ),
    ...zl(e.relations, /zonevalue/i)
  ])];
}
function RC(e, t) {
  const n = t.properties ?? {}, r = G(n, "EPAM.colorUsageType", "colorUsageType") || "Primary";
  return {
    colorName: G(n, "EPAM.colorName", "colorName") || `Color ${e}`,
    hexValue: G(n, "EPAM.hexValue", "hexValue") || "#000000",
    colorUsageType: r
  };
}
function OC(e, t) {
  const n = t.properties ?? {}, r = G(n, "EPAM.fontUsageType", "fontUsageType") || "Body", o = G(n, "EPAM.fontWeight", "fontWeight") || "Regular";
  return {
    fontFamily: G(n, "EPAM.fontFamily", "fontFamily") || "sans-serif",
    fontWeight: o,
    fontUsageType: r
  };
}
function $C(e) {
  return Et(
    e.relations,
    "brandKitToColor",
    "BrandKitToColor",
    "brandKitToBrandColor"
  ).concat(zl(e.relations, /color/i));
}
function MC(e) {
  return Et(
    e.relations,
    "brandKitToFont",
    "BrandKitToFont",
    "brandKitToBrandFont"
  ).concat(zl(e.relations, /font/i));
}
function IC(e) {
  return ["Social", "Email", "Newsletter", "Print"].filter((t) => t !== e);
}
function DC(e, t, n, r) {
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
  return e.zoneType === "Heading" && (o.headingLevel = e.headingLevel, o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Text" && (o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Image" && (o.aspectRatioLock = e.aspectRatioLock), e.zoneType === "HTML" && (o.htmlDefaultContent = e.htmlDefaultContent, o.htmlAllowUserOverride = e.htmlAllowUserOverride), r === "Social" ? HC(o, t) : FC(o);
}
function HC(e, t) {
  const n = e.zoneType === "Logo" ? 80 : e.zoneType === "Image" ? 360 : e.zoneType === "Heading" ? 120 : e.zoneType === "CTA Button" ? 72 : 96;
  return {
    ...e,
    positionX: e.positionX ?? 40,
    positionY: e.positionY ?? 40 + t * (n + 24),
    zoneWidth: e.zoneWidth ?? 1e3,
    zoneHeight: n
  };
}
function FC(e) {
  return {
    ...e,
    positionX: void 0,
    positionY: void 0,
    zoneWidth: void 0,
    zoneHeight: void 0
  };
}
function UC(e, t, n) {
  const r = zv(t), o = Date.now(), i = [...e.zones].sort((s, a) => s.sortOrder - a.sortOrder).map((s, a) => DC(s, a, o, t));
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
function bf(e) {
  const t = Tt(e, /allowed.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/^template/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...fv, ...t])];
}
function Nf(e) {
  const t = Tt(e, /template.*asset|allowed.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/zone/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...pv, ...t])];
}
function jC(e) {
  const t = Tt(e, /selected.*asset|zonevalue.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...mv, ...t])];
}
const Pf = "/api/content-hub", BC = "/api/render-email-html";
let O = {}, Rl = Pf, Xu;
function xf() {
  return Rl.replace(/\/$/, "") !== Pf;
}
function KC(e) {
  const t = e.trim().replace(/\/$/, "");
  return !t || t === BC;
}
function VC(e) {
  O = e ?? {};
}
function ZC(e) {
  Rl = e.replace(/\/$/, "") || Pf;
}
function WC(e) {
  Xu = typeof e == "number" && Number.isFinite(e) && e > 0 ? e : void 0;
}
async function Ju(e, t) {
  const n = await fetch(`${Rl}${e}`, {
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
  if (!((n = O == null ? void 0 : O.raw) != null && n.getAsync))
    throw new Error("Content Hub client is not available. This component must run inside Content Hub.");
  const t = await O.raw.getAsync(`/api/entities/${e}`);
  if (!t.isSuccessStatusCode || !t.content)
    throw new Error(`Content Hub API error (${t.statusCode ?? "unknown"}) loading entity ${e}`);
  return t.content;
}
async function fn(e) {
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
async function YC(e, t, n) {
  var o;
  let r = ((o = t.brandKitId) == null ? void 0 : o.trim()) ?? "";
  if (!r) {
    const i = await Jt(
      O,
      e,
      "templateToBrandKit",
      n.relations
    );
    i[0] != null ? (r = String(i[0]), V("brandKitId", `Resolved ${r} from templateToBrandKit on template ${e}`)) : Ue(
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
async function GC(e, t) {
  const n = Xv(t);
  if (n.length > 0)
    return { ...e, allowedAssetIds: n.map(String) };
  if (!it(t.relations, "templateZoneToAllowedAssetCollection"))
    return e;
  const r = await Jt(
    O,
    e.id,
    "templateZoneToAllowedAssetCollection",
    t.relations
  );
  return r[0] != null ? { ...e, allowedAssetCollectionId: String(r[0]) } : e;
}
function Qv(e) {
  const t = Tt(e, /template.*zone/i);
  return [.../* @__PURE__ */ new Set([...t, ...Ii])];
}
async function XC(e, t, n) {
  var o;
  if (!((o = O == null ? void 0 : O.raw) != null && o.getAsync))
    return [];
  const r = encodeURIComponent(
    `Definition.Name=='${e}' AND Parent('${t}').Id==${n}`
  );
  try {
    const i = await O.raw.getAsync(
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
const JC = ["channelType", "ChannelType", "EPAM.ChannelType"], QC = ["formatPreset", "FormatPreset", "EPAM.FormatPreset"];
async function qv(e) {
  var i, s;
  if (!((i = O == null ? void 0 : O.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating templates.");
  const t = [
    vC(e),
    { Title: { Invariant: e.templateName } },
    { templateName: e.templateName }
  ];
  let n = null, r = "unknown";
  for (const a of t) {
    const l = await O.raw.postAsync("/api/entities", {
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
  const o = Bv(e);
  if (Object.keys(o).length > 0)
    try {
      await r0(n, o);
    } catch (a) {
      ae(
        "template create",
        `Template ${n} created but optional property update failed: ${a instanceof Error ? a.message : String(a)}`
      );
    }
  return V("template create", `Created EPAM.Template ${n} (${e.templateName})`), n;
}
async function qC(e, t, n) {
  var i;
  return (await Ol(n)).channelType === t ? n : (i = (await n0(e)).find((s) => s.channelType === t)) == null ? void 0 : i.id;
}
async function hh(e, t, n, r) {
  const o = await ne(t);
  for (const i of n) {
    const s = await Jt(
      O,
      t,
      i,
      o.relations
    );
    if (s[0] == null)
      continue;
    if (await To(
      O,
      e,
      String(s[0]),
      n[0]
    )) {
      V("template taxonomy", `Linked ${r} on template ${e} from template ${t}`);
      return;
    }
  }
  Ue(
    "template taxonomy",
    `Could not link ${r} on template ${e} from reference ${t}`,
    `Set ${r} on the template in Content Hub.`
  );
}
async function e0(e, t, n, r) {
  if (!(n != null && n.trim()))
    return;
  const o = await qC(
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
  await hh(
    e,
    o,
    JC,
    "channelType"
  ), await hh(
    e,
    o,
    QC,
    "formatPreset"
  );
}
async function t0(e, t) {
  if (!(t != null && t.trim()))
    return;
  if (await To(O, e, t, "templateToBrandKit")) {
    V("template brand kit", `Linked template ${e} to brand kit ${t}`);
    return;
  }
  if (await Qt(O, t, e, "brandKitToTemplate")) {
    V("template brand kit", `Linked brand kit ${t} to template ${e}`);
    return;
  }
  Ue(
    "template brand kit",
    `Could not link template ${e} to brand kit ${t}`,
    "Link templateToBrandKit on the template in Content Hub."
  );
}
async function n0(e) {
  if (!(e != null && e.trim()) || e === nr)
    return [];
  let t = [];
  for (const o of [
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit"
  ])
    if (t = await XC("EPAM.Template", o, e), t.length > 0)
      break;
  if (t.length === 0)
    try {
      const o = await ne(e);
      t = await Jt(
        O,
        e,
        "brandKitToTemplate",
        o.relations
      );
    } catch {
      t = [];
    }
  const n = [...new Set(t)];
  return n.length === 0 ? [] : (await Promise.all(n.map((o) => Ol(String(o))))).sort((o, i) => o.templateName.localeCompare(i.templateName));
}
async function eb(e, t, n) {
  const r = await Ol(e), o = UC(r, t, n), i = await qv(o);
  o.brandKitId && (await t0(i, o.brandKitId), await e0(
    i,
    o.channelType,
    o.brandKitId,
    e
  ));
  const s = await Lf({ ...o, id: i }, []);
  return await a0(s.id, r.allowedAssetIds ?? []), V(
    "template duplicate",
    `Created template ${s.id} (${s.templateName}) from ${e} as ${t}`
  ), s;
}
async function tb(e, t) {
  var i;
  const n = {
    ...e,
    id: ((i = e.id) == null ? void 0 : i.trim()) || "",
    zones: e.zones ?? []
  }, r = await qv(n);
  n.brandKitId && (await t0(r, n.brandKitId), t != null && t.trim() && await e0(
    r,
    n.channelType,
    n.brandKitId,
    t
  ));
  const o = await Lf({ ...n, id: r }, []);
  return await a0(o.id, n.allowedAssetIds ?? []), V(
    "template create",
    `Created template ${o.id} (${o.templateName}) with ${o.zones.length} zone(s)`
  ), o;
}
async function nb(e, t) {
  const n = await ne(e), r = [
    "marketingAssetToTemplate",
    "MarketingAssetToTemplate",
    "EPAM.MarketingAssetToTemplate"
  ], o = await Jt(O, e, r[0], n.relations);
  for (const s of o)
    if (String(s) !== t)
      for (const a of r)
        await xo(O, e, s, a, n.relations);
  let i = !1;
  for (const s of r)
    if (await Qt(O, e, t, s, n.relations)) {
      i = !0;
      break;
    }
  if (!i)
    throw new Error(
      `Could not link template ${t} to marketing asset ${e}. Check marketingAssetToTemplate relation permissions.`
    );
  V("marketing asset template", `Linked marketing asset ${e} to template ${t}`);
}
async function rb(e, t) {
  var r;
  if (!((r = O == null ? void 0 : O.raw) != null && r.getAsync))
    return [];
  const n = encodeURIComponent(
    `Definition.Name=='EPAM.TemplateZone' AND Parent('${t}').Id==${e}`
  );
  try {
    const o = await O.raw.getAsync(
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
async function Ol(e) {
  const t = await ne(e);
  _E(e, t);
  let n = [...new Set(zC(t))];
  if (n.length === 0) {
    const i = Qv(t.relations), s = await Mi(
      O,
      e,
      t.relations,
      i.filter((a) => it(t.relations, a))
    );
    n = s.ids, s.relationName && V("template zones", `Found zones via relation ${s.relationName}`);
  }
  if (n.length === 0) {
    const { templateChildRelations: i, zoneParentRelations: s } = await kl(
      O,
      t.relations
    );
    for (const a of s) {
      const l = await rb(e, a);
      if (l.length > 0) {
        n = l, V(
          "template zones",
          `Found ${l.length} zone(s) via parent query on ${a}`
        );
        break;
      }
    }
    if (n.length === 0 && i.length > 0) {
      const a = await Mi(
        O,
        e,
        t.relations,
        i.filter((l) => it(t.relations, l))
      );
      n = a.ids, a.relationName && V("template zones", `Found zones via relation ${a.relationName}`);
    }
  }
  let r = [];
  if (n.length > 0)
    try {
      const i = await fn(n);
      await UE(O, ne, i), r = await Promise.all(
        i.map(async (s, a) => {
          const l = Af(n[a], s), c = await GC(l, s);
          return Av(O, ne, c, s);
        })
      );
    } catch (i) {
      ae(
        "template zones",
        `Could not load zones for template ${e}: ${i instanceof Error ? i.message : String(i)}`
      ), r = [];
    }
  const o = await YC(
    e,
    Wv(e, t, r),
    t
  );
  return r.length > 0 ? (V("template zones", `Loaded ${r.length} zone(s) for template ${e}`), o) : (Ue(
    "template zones",
    `Template ${e} has no linked zones yet`,
    'This is normal for a new template. Use "Edit Template Zones" to add zones, or link EPAM.TemplateZone entities in Content Hub. Zones link via a Parent relation on EPAM.TemplateZone → EPAM.Template (not on the template entity itself).'
  ), o);
}
async function ob(e) {
  var i;
  const t = await ne(e);
  let n = [...new Set(Jv(t))];
  n.length === 0 && (n = await Jt(
    O,
    e,
    "marketingAssetToZoneValue",
    t.relations
  ));
  let r = [];
  if (n.length > 0)
    try {
      const s = await fn(n);
      r = await Promise.all(
        s.map(
          async (a, l) => pb(n[l], Yv(n[l], a), a)
        )
      ), V("zone values", `Loaded ${r.length} zone value(s) for asset ${e}`);
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
  let o = LC(e, t, r);
  if (!((i = o.templateId) != null && i.trim())) {
    const s = await Jt(
      O,
      e,
      "marketingAssetToTemplate",
      t.relations
    );
    s[0] != null && (o = { ...o, templateId: String(s[0]) });
  }
  return o;
}
async function ib(e) {
  if (!(e != null && e.trim()) || e === nr)
    return qn(
      "brand kit",
      "No brand kit id resolved",
      "Link templateToBrandKit on the template or set brandKitId in Configuration."
    ), ti(mr(e || nr));
  try {
    const t = await ne(e), n = [...new Set($C(t))], r = [...new Set(MC(t))], [o, i] = await Promise.all([
      fn(n),
      fn(r)
    ]), s = o.map(
      (c, f) => RC(n[f], c)
    ), a = i.map(
      (c, f) => OC(r[f], c)
    ), l = _C(e, t, s, a);
    return !l.logoAssetUrl && s.length === 0 && a.length === 0 ? (qn(
      "brand kit",
      `Brand kit ${e} (${l.brandKitName}) has no colors, fonts, or logo linked`,
      "Add brandKitToColor / brandKitToFont relations and a logo asset on the brand kit."
    ), ti(mr(e))) : (s.length === 0 ? Ue("brand kit colors", `Brand kit ${e} has no colors linked`, "Link colors via brandKitToColor.") : V("brand kit colors", `Loaded ${s.length} color(s) for brand kit ${e}`), a.length === 0 ? Ue("brand kit fonts", `Brand kit ${e} has no fonts linked`, "Link fonts via brandKitToFont.") : V("brand kit fonts", `Loaded ${a.length} font(s) for brand kit ${e}`), l.logoAssetUrl || Ue("brand kit logo", `Brand kit ${e} has no logo asset`, "Set logoAssetUrl on the brand kit entity."), ti({
      ...mr(e),
      ...l,
      colors: s.length > 0 ? s : mr(e).colors,
      fonts: a.length > 0 ? a : mr(e).fonts
    }));
  } catch (t) {
    return qn("brand kit", t, `Could not load brand kit entity ${e}.`), ti(mr(e));
  }
}
function sb(e, t) {
  const n = Wv(e.id, t, e.zones);
  return n.templateName !== e.templateName || n.canvasWidth !== e.canvasWidth || n.canvasHeight !== e.canvasHeight || n.designerDocumentJson !== e.designerDocumentJson;
}
async function qi(e, t, n, r) {
  var f;
  if (!((f = O == null ? void 0 : O.raw) != null && f.putAsync))
    throw new Error(`Content Hub client is not available for saving ${n}.`);
  if (Object.keys(t).length === 0)
    return !0;
  const o = await ne(e), i = RE(o, t, r), s = await O.raw.putAsync(`/api/entities/${e}`, i);
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
async function r0(e, t) {
  return qi(e, t, "template properties", "EPAM.Template");
}
async function Lf(e, t = []) {
  var l;
  if (!((l = O == null ? void 0 : O.raw) != null && l.postAsync))
    throw new Error("Content Hub client is not available for saving template zones.");
  const n = await ne(e.id);
  sb(e, n) && (await r0(e.id, Bv(e)) ? V("template properties", `Saved properties on template ${e.id}`) : ae(
    "template properties",
    `Skipped property update on template ${e.id}; continuing with zone save.`
  ));
  const r = await kl(O, n.relations), o = ab(
    n.relations,
    r.templateChildRelations
  ), i = [], s = /* @__PURE__ */ new Set();
  for (const c of t)
    !e.zones.some((u) => u.id === c.id) && Eo(c.id) && s.add(c.id);
  const a = [...e.zones].sort((c, f) => c.sortOrder - f.sortOrder);
  for (const c of a) {
    const f = t.find((v) => v.id === c.id);
    if (!(!f || !AC(c, f))) {
      i.push(c);
      continue;
    }
    if (Eo(c.id)) {
      await ub(c.id, c), i.push(c);
      continue;
    }
    const p = await db(c);
    await lb(
      e.id,
      p,
      o,
      n.relations,
      r
    ), i.push({ ...c, id: p }), V("template zone", `Created EPAM.TemplateZone ${p} (${c.zoneKey}) and linked to template ${e.id}`);
  }
  for (const c of s)
    await fb(e.id, c, o, n.relations);
  return V("template zones", `Saved ${i.length} template zone(s) on template ${e.id}`), { ...e, zones: i };
}
function ab(e, t = []) {
  const n = [
    ...t,
    ...Qv(e)
  ];
  for (const r of n)
    if (it(e, r))
      return r;
  return t[0] ?? Ii[0];
}
async function lb(e, t, n, r, o) {
  const i = o ?? await kl(O, r);
  let s;
  try {
    const u = await ne(t);
    s = u.relations, zE(t, u);
  } catch {
    s = void 0;
  }
  const a = Tt(s, /template/i).filter(
    (u) => !/collection|asset/i.test(u)
  ), l = hi(
    [...a, ...i.zoneParentRelations, ...xa],
    s,
    /zone.*template|template/i
  );
  for (const u of l)
    if (await To(O, t, e, u, s)) {
      V("template zone link", `Linked zone ${t} to template ${e} via parent relation ${u}`);
      return;
    }
  const c = hi(
    [n, ...i.templateChildRelations, ...Ii],
    r,
    /template.*zone/i
  ).filter((u) => !!it(r, u));
  for (const u of c)
    if (await Qt(O, e, t, u, r)) {
      V("template zone link", `Linked zone ${t} to template ${e} via child relation ${u}`);
      return;
    }
  const f = hi(
    [n, ...i.templateChildRelations, ...Ii],
    r,
    /template.*zone/i
  ).filter((u) => !it(r, u));
  for (const u of f)
    if (await Qt(O, e, t, u, r)) {
      V(
        "template zone link",
        `Linked zone ${t} to template ${e} via definition child relation ${u}`
      );
      return;
    }
  throw new Error(
    `Could not link zone ${t} to template ${e}. Tried parent relations: ${l.join(", ") || "(none from definition)"}; child relations: ${[...c, ...f].join(", ") || "(none)"}. Confirm EPAM.TemplateZone has a parent relation to EPAM.Template in Content Hub.`
  );
}
async function vn(e, t, n) {
  if (Object.keys(t).length === 0)
    return !0;
  try {
    return await qi(e, t, n);
  } catch (r) {
    return ae(
      n,
      `Optional property update skipped for entity ${e}: ${r instanceof Error ? r.message : String(r)}`
    ), !1;
  }
}
async function Hc(e, t, n) {
  const r = await ne(e), o = Af(e, r);
  return (await Av(O, ne, o, r)).zoneType;
}
async function cb(e, t, n) {
  const r = ko(t), o = await XE(O), i = DE(n), s = i || QE(o), a = async () => {
    for (const c of kC(
      r.zoneType,
      o.propertyNames
    ))
      if (await vn(e, c, "template zone type"), await Hc(
        e,
        r.zoneKey,
        r.zoneLabel
      ) === r.zoneType)
        return V(
          "template zone type",
          `Persisted "${r.zoneType}" on zone ${e} via property ${Object.keys(c).join(", ")}`
        ), !0;
    return !1;
  };
  if (s) {
    const c = await ZE(
      O,
      ne,
      e,
      r.zoneType,
      n
    ), f = await Hc(
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
  if (!i && JE(o) && await a())
    return !0;
  const l = await Hc(
    e,
    r.zoneKey,
    r.zoneLabel
  );
  return ae(
    "template zone type",
    `Zone ${e} (${r.zoneKey}) still reads as "${l}" after save; expected "${r.zoneType}".`
  ), l === r.zoneType;
}
async function o0(e, t) {
  const n = ko(t), r = await ne(e), o = Af(e, r), i = TC(n, o);
  if (Object.keys(i).length > 0 && !await vn(e, i, "template zone identity") && i.zoneLabel != null) {
    const u = n.zoneLabel || n.zoneKey;
    await vn(
      e,
      { Title: { Invariant: u } },
      "template zone title"
    );
  }
  const s = await cb(e, n, r), a = await vn(
    e,
    EC(n, o),
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
  const l = Vv(n, o);
  Object.keys(l).length > 0 && await vn(e, l, "template zone layout");
  const c = Zv(n, o);
  Object.keys(c).length > 0 && await vn(e, c, "template zone optional");
}
async function ub(e, t) {
  try {
    await o0(e, t);
  } catch (n) {
    throw new Error(
      `Permission denied updating template zone ${e} (${t.zoneKey}). Grant Update on EPAM.TemplateZone. ${n instanceof Error ? n.message : String(n)}`
    );
  }
  V("template zone", `Updated EPAM.TemplateZone ${e} (${t.zoneKey}, type ${t.zoneType})`);
}
async function db(e) {
  var i;
  const t = O.raw;
  if (!(t != null && t.postAsync))
    throw new Error("Content Hub client does not support creating template zones.");
  const n = [
    Kv(e),
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
    await o0(r, e);
  } catch (s) {
    ae(
      "template zone create",
      `Zone ${r} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return r;
}
async function fb(e, t, n, r) {
  const o = await kl(O, r);
  let i;
  try {
    i = (await ne(t)).relations;
  } catch {
    i = void 0;
  }
  const s = hi(
    [...o.zoneParentRelations, ...xa],
    i,
    /zone.*template/i
  );
  for (const l of s)
    if (await Tv(O, t, e, l, i)) {
      V("template zone unlink", `Cleared parent ${e} from zone ${t} via ${l}`);
      return;
    }
  const a = hi(
    [n, ...o.templateChildRelations, ...Ii],
    r,
    /template.*zone/i
  ).filter((l) => !!it(r, l));
  for (const l of a)
    if (await xo(O, e, t, l, r)) {
      V("template zone unlink", `Removed zone ${t} from template ${e} via ${l}`);
      return;
    }
  Ue(
    "template zone unlink",
    `Could not remove zone ${t} from template ${e}`,
    "The new zone was created and linked, but the previous zone link may need to be removed manually in Content Hub."
  );
}
async function pb(e, t, n) {
  var i;
  const r = Cf(n), o = t.imageAssetId || (r[0] != null ? String(r[0]) : void 0);
  if (!o)
    return t;
  if ((i = t.imageAssetUrl) != null && i.trim())
    return { ...t, imageAssetId: o };
  try {
    const s = await ne(o), a = Lo(o, s);
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
async function i0(e) {
  const t = await ne(e), n = Nf(t.relations), r = await Mi(
    O,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => Lo(r.ids[s], i)).filter((i) => i != null);
}
async function s0(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = Nf(o.relations);
  for (const a of i)
    if (await Qt(
      O,
      n,
      r,
      a,
      o.relations
    ))
      return V(
        "template allowed asset",
        `Linked asset ${r} to template ${n} via ${a}`
      ), !0;
  if ((s = O == null ? void 0 : O.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await O.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return V(
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
async function mb(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = Nf(o.relations);
  for (const s of i)
    if (await xo(
      O,
      n,
      r,
      s,
      o.relations
    ))
      return V(
        "template allowed asset",
        `Removed asset ${r} from template ${n} via ${s}`
      ), !0;
  return !1;
}
async function a0(e, t = []) {
  const n = [...new Set(t.map((i) => i.trim()).filter(Boolean))];
  if (n.length === 0)
    return;
  const r = await i0(e), o = new Set(r.map((i) => i.id));
  for (const i of n)
    o.has(i) || await s0(e, i);
}
async function hb(e) {
  const t = await ne(e);
  return Cf(t).map(String);
}
let dr = null;
async function gb(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = jC(o.relations), s = i.filter((u) => !!it(o.relations, u)), a = dr == null ? void 0 : dr.name, l = [
    ...new Set(
      [
        a,
        ...s,
        // Prefer the known-good name before spraying aliases that 404.
        "zoneValueToSelectedAsset",
        ...i
      ].filter((u) => !!u)
    )
  ].slice(0, a || s.length > 0 ? 3 : 4), c = await hb(n);
  for (const u of c)
    if (u !== r)
      for (const p of l)
        await xo(
          O,
          n,
          u,
          p,
          o.relations
        ), await Tv(
          O,
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
      if (u === "parent" ? await To(
        O,
        n,
        r,
        p,
        o.relations
      ) : await Qt(
        O,
        n,
        r,
        p,
        o.relations
      ))
        return dr = { name: p, mode: u }, V(
          "zone value selected asset",
          `Linked asset ${r} to zone value ${n} via ${p} (${u})`
        ), !0;
  return Ue(
    "zone value selected asset",
    `Could not link asset ${r} to zone value ${n}`,
    "Create a relation on EPAM.MarketingAssetZoneValue to M.Asset (e.g. zoneValueToSelectedAsset)."
  ), !1;
}
async function yb(e, t) {
  var n;
  (n = t.imageAssetId) != null && n.trim() && await gb(e, t.imageAssetId);
}
async function vb(e) {
  const t = await ne(e), n = bf(t.relations), r = await Mi(
    O,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => Lo(r.ids[s], i)).filter((i) => i != null);
}
async function wb(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = bf(o.relations);
  for (const a of i)
    if (await Qt(
      O,
      n,
      r,
      a,
      o.relations
    ))
      return V(
        "zone allowed asset",
        `Linked asset ${r} to zone ${n} via ${a}`
      ), !0;
  if ((s = O == null ? void 0 : O.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await O.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return V(
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
async function Tb(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = bf(o.relations);
  for (const s of i)
    if (await xo(
      O,
      n,
      r,
      s,
      o.relations
    ))
      return V(
        "zone allowed asset",
        `Removed asset ${r} from zone ${n} via ${s}`
      ), !0;
  return !1;
}
async function l0(e) {
  const t = await ne(e), n = [
    .../* @__PURE__ */ new Set([
      ...wf,
      ...Tt(t.relations, /asset/i)
    ])
  ].filter((i) => it(t.relations, i)), r = await Mi(
    O,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => Lo(r.ids[s], i)).filter((i) => i != null);
}
function c0(e) {
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
function Sb(e) {
  var n;
  const t = [];
  for (const r of c0(e)) {
    if (typeof r == "number" && Number.isFinite(r)) {
      t.push(r);
      continue;
    }
    if (!r || typeof r != "object")
      continue;
    const o = r, i = (n = o.systemProperties) == null ? void 0 : n.id, s = o.id ?? o.entityId ?? i;
    typeof s == "number" && Number.isFinite(s) ? t.push(s) : typeof s == "string" && /^\d+$/.test(s.trim()) && t.push(Number(s.trim()));
  }
  return t.length > 0 ? [...new Set(t)] : [...new Set(Sl(e))];
}
function kb(e, t) {
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
async function u0(e) {
  const n = c0(e).map((i) => nA(i)).filter((i) => i != null);
  if (n.length > 0)
    return n;
  const r = Sb(e).slice(0, 48);
  return r.length === 0 ? [] : (await fn(r)).map((i, s) => Lo(r[s], i)).filter((i) => i != null);
}
async function Eb(e) {
  var n;
  if (!((n = O == null ? void 0 : O.raw) != null && n.postAsync))
    return [];
  const t = Xu != null ? [Xu, void 0] : [9815, void 0];
  for (const r of t)
    try {
      const o = await O.raw.postAsync(
        "/api/search",
        kb(e, r)
      );
      if (!o.isSuccessStatusCode || o.content == null)
        continue;
      const i = await u0(o.content);
      if (i.length > 0)
        return V(
          "asset search",
          `Found ${i.length} approved asset(s) via /api/search${r != null ? ` (component ${r})` : ""}`
        ), i;
    } catch {
    }
  return [];
}
async function Ab(e) {
  var o;
  const t = await Eb(e);
  if (t.length > 0)
    return t;
  if (!((o = O == null ? void 0 : O.raw) != null && o.getAsync))
    return [];
  const n = (e == null ? void 0 : e.trim()) || "*", r = [
    `/api/entities/search?query=${encodeURIComponent(n)}&definitionNames=M.Asset&take=48`,
    `/api/entities/search?fullText=${encodeURIComponent(n)}&definitionNames=M.Asset&take=48`
  ];
  for (const i of r)
    try {
      const s = await O.raw.getAsync(i);
      if (!s.isSuccessStatusCode || s.content == null)
        continue;
      const a = await u0(s.content);
      if (a.length > 0)
        return V("asset search", `Found ${a.length} Content Hub asset(s) via entity search`), a;
    } catch {
    }
  return [];
}
async function gh(e) {
  var r, o;
  const t = (r = e == null ? void 0 : e.collectionId) == null ? void 0 : r.trim(), n = e == null ? void 0 : e.query;
  if ((o = O == null ? void 0 : O.raw) != null && o.getAsync)
    try {
      if (t) {
        const i = Qm(await l0(t), n);
        if (i.length > 0)
          return V(
            "asset search",
            `Loaded ${i.length} asset(s) from collection ${t}`
          ), i;
        Ue(
          "asset search",
          `No assets found in collection ${t}`,
          "Verify AssetCollectionToAsset links or try Image URL."
        );
      } else {
        const i = Qm(await Ab(n), n);
        if (i.length > 0)
          return i;
      }
    } catch (i) {
      Ue("asset search", i, "Falling back to proxy or demo assets.");
    }
  if (t)
    try {
      const i = await Ju(
        `/assets/search?collectionId=${t}${n ? `&q=${encodeURIComponent(n)}` : ""}`
      );
      if (i.length > 0)
        return i;
    } catch (i) {
      qn("asset search", i);
    }
  return qn("asset search", "Using demo asset results"), dC(n);
}
async function Cb(e) {
  var r;
  const t = [
    ...new Set(
      e.map((o) => Number(o)).filter((o) => Number.isFinite(o) && o > 0)
    )
  ];
  return t.length === 0 || !((r = O == null ? void 0 : O.raw) != null && r.getAsync) ? [] : (await fn(t)).map((o, i) => Lo(t[i], o)).filter((o) => o != null);
}
async function bb(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = [
    .../* @__PURE__ */ new Set([
      ...wf,
      ...Tt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const a of i)
    if (await Qt(
      O,
      n,
      r,
      a,
      o.relations
    ))
      return V(
        "asset collection",
        `Linked asset ${r} to collection ${n} via ${a}`
      ), !0;
  if ((s = O == null ? void 0 : O.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await O.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return V(
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
async function Nb(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = [
    .../* @__PURE__ */ new Set([
      ...wf,
      ...Tt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const s of i)
    if (await xo(
      O,
      n,
      r,
      s,
      o.relations
    ))
      return V(
        "asset collection",
        `Removed asset ${r} from collection ${n} via ${s}`
      ), !0;
  return !1;
}
async function d0(e, t) {
  return qi(e, t, "marketing asset properties", "EPAM.MarketingAsset");
}
const f0 = ["EPAM.MarketingAssetZoneValue", "MarketingAssetZoneValue"];
function Pb(e) {
  if (e == null || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.error;
  return typeof n == "string" ? n.trim() : "";
}
function xb(e) {
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
async function p0(e, t) {
  const n = await La(O, f0[0]);
  await vn(
    e,
    pC(t),
    "zone value title"
  );
  const r = jv(t);
  if (Object.keys(r).length > 0) {
    const o = hC(t, n);
    if (Object.keys(o).length > 0) {
      if (!await vn(e, o, "zone value content")) {
        const s = {};
        for (const [a, l] of Object.entries(o))
          l != null && typeof l == "object" && !Array.isArray(l) && typeof l.Invariant == "string" ? s[a] = l.Invariant : s[a] = l;
        await vn(e, s, "zone value content plain");
      }
    } else
      ae(
        "zone value content",
        `No matching content properties on EPAM.MarketingAssetZoneValue for zone ${t.zoneKey} (definition has: ${n.map((i) => i.name).join(", ") || "(none)"}). Text/html will persist via zoneLayoutJson fallback.`
      );
  }
  await yb(e, t);
}
async function Lb(e) {
  var i;
  if (!((i = O == null ? void 0 : O.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating zone values.");
  const t = [
    { Title: { Invariant: e.zoneKey } },
    { Title: e.zoneKey },
    {}
  ];
  let n = null, r = "unknown", o = "";
  for (const s of f0) {
    for (const a of t) {
      const l = await O.raw.postAsync("/api/entities", {
        entitydefinition: {
          href: `/api/entitydefinitions/${s}`
        },
        properties: a
      }), c = xb(l.content);
      if (l.isSuccessStatusCode && c) {
        n = c, V(
          "zone value create",
          `Created ${s} ${c} for ${e.zoneKey} with keys: ${Object.keys(a).join(", ") || "(none)"}`
        );
        break;
      }
      r = String(l.statusCode ?? "unknown"), o = Pb(l.content), ae(
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
    await p0(n, e);
  } catch (s) {
    ae(
      "zone value create",
      `Zone value ${n} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return n;
}
async function _b(e) {
  if (!e.id)
    throw new Error(`Zone value for ${e.zoneKey} has no entity id.`);
  try {
    await p0(e.id, e), V("zone value", `Updated EPAM.MarketingAssetZoneValue ${e.id} (${e.zoneKey})`);
  } catch (t) {
    throw new Error(
      `Failed to update zone value ${e.id} (${e.zoneKey}). Grant Update on EPAM.MarketingAssetZoneValue. ${t instanceof Error ? t.message : String(t)}`
    );
  }
}
async function zb(e, t, n) {
  var o;
  const r = [
    ...Tt(n, /zonevalue/i),
    "marketingAssetToZoneValue",
    "MarketingAssetToZoneValue",
    "EPAM.MarketingAssetToZoneValue"
  ];
  for (const i of [...new Set(r)])
    if (await Qt(
      O,
      e,
      t,
      i,
      n
    ))
      return;
  if (!((o = O == null ? void 0 : O.raw) != null && o.postAsync))
    throw new Error("Content Hub client is not available for linking zone values.");
  for (const i of [...new Set(r)])
    if ((await O.raw.postAsync(
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
async function Rb(e, t) {
  var a;
  const n = await ne(e), r = [...new Set(Jv(n))], o = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const l = await fn(r);
    for (let c = 0; c < r.length; c += 1) {
      const f = Yv(r[c], l[c]);
      o.has(f.zoneKey) || o.set(f.zoneKey, f);
    }
  }
  const i = [], s = /* @__PURE__ */ new Set();
  for (const l of t) {
    if (!((a = l.zoneKey) != null && a.trim()) || s.has(l.zoneKey))
      continue;
    if (!gC(l)) {
      ae("zone value save", `Skipped empty zone value for ${l.zoneKey}`);
      continue;
    }
    s.add(l.zoneKey);
    const c = l.id ? l : o.get(l.zoneKey), f = c != null && c.id ? { ...l, id: c.id } : { ...l, id: void 0 };
    if (f.id) {
      await _b(f), i.push(f);
      continue;
    }
    const u = await Lb(f), p = { ...f, id: u };
    await zb(e, u, n.relations), i.push(p);
  }
  return V("zone values", `Saved ${i.length} EPAM.MarketingAssetZoneValue record(s)`), i;
}
async function Ob(e) {
  const t = yC(e);
  if (Object.keys(t).length === 0)
    return e;
  if (!await d0(e.id, t))
    throw new Error(
      `Could not save marketing asset ${e.id}. Grant Update on EPAM.MarketingAsset and ensure properties such as zoneLayoutJson exist on the definition.`
    );
  return V("marketing asset properties", `Saved properties on marketing asset ${e.id}`), e;
}
const $b = "designerDocumentJson", Mb = "designerInstanceJson", to = "EPAM.Template", Rs = "EPAM.BuilderMarketingAsset";
function m0(e) {
  return (e == null ? void 0 : e.trim()) || Mb;
}
function Ib(e) {
  const t = e.split("/").filter(Boolean);
  return decodeURIComponent(t[t.length - 1] ?? to);
}
function Db(e, t) {
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
async function h0(e, t) {
  if (t != null && t.trim())
    return t.trim().replace(/^EPAM\./, "");
  const n = e.properties ?? {};
  for (const r of Object.keys(n))
    if (/designerDocumentJson/i.test(r))
      return r.replace(/^EPAM\./, "");
  try {
    const r = gf(e, to), o = Ib(r), s = (await La(O, o)).find((a) => /designerDocumentJson/i.test(a.name));
    if (s)
      return s.name.replace(/^EPAM\./, "");
  } catch {
  }
  return $b;
}
async function Hb(e, t) {
  const n = await ne(e), r = n.properties ?? {}, o = await h0(n, t);
  return Db(r, o);
}
async function Fb(e, t, n, r) {
  if (!(e != null && e.trim()) || !Eo(e.trim()))
    throw new Error(Qn());
  const o = await ne(e), i = await h0(o, n), s = wC(t, r, i);
  try {
    if (!await qi(
      e,
      s,
      "template designer document",
      to
    ))
      throw new Error(
        `Could not save designer document on ${to} ${e}. Ensure property "${i}" exists on the template definition and your role can Update it.`
      );
  } catch (a) {
    throw a instanceof Error && a.message.includes("Could not save designer document") ? a : new Error(
      `Could not save designer document on ${to} ${e}. Ensure property "${i}" exists on EPAM.Template and your role can Update it. ${a instanceof Error ? a.message : String(a)}`
    );
  }
  return V(
    "template designer document",
    `Saved ${i} on ${to} ${e}`
  ), !0;
}
async function Ub(e, t) {
  const r = (await ne(e)).properties ?? {}, o = m0(t), i = [`EPAM.${o}`, o, o.replace(/^./, (s) => s.toUpperCase())];
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
async function jb(e, t, n) {
  const r = m0(n), o = { [r]: t };
  try {
    if (!await qi(
      e,
      o,
      "builder marketing asset designer instance",
      Rs
    ))
      throw new Error(
        `Could not save designer instance on ${Rs} ${e}. Ensure property "${r}" exists and your role can Update it.`
      );
  } catch (i) {
    throw i instanceof Error && i.message.includes("Could not save designer instance") ? i : new Error(
      `Could not save designer instance on ${Rs} ${e}. Ensure property "${r}" exists and your role can Update it. ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return V(
    "builder marketing asset designer instance",
    `Saved ${r} on ${Rs} ${e}`
  ), !0;
}
const re = {
  getTemplate: Ol,
  listTemplatesForBrandKit: n0,
  duplicateTemplate: eb,
  createTemplate: tb,
  linkMarketingAssetToTemplate: nb,
  listTemplates: async (e) => {
    try {
      return await Ju(`/entities/EPAM.Template${e ? `?channelType=${e}` : ""}`);
    } catch (t) {
      return qn("template list", t), [aC(ph)];
    }
  },
  saveTemplate: Lf,
  getBrandKit: ib,
  getMarketingAsset: ob,
  createMarketingAsset: async (e) => {
    try {
      return await Ju("/entities/EPAM.MarketingAsset", {
        method: "POST",
        body: JSON.stringify(e)
      });
    } catch (t) {
      return qn("marketing asset create", t), uC("dummy-asset", e.templateId || ph);
    }
  },
  updateMarketingAsset: Ob,
  saveMarketingAssetZoneValues: Rb,
  updateMarketingAssetProperties: d0,
  getTemplateDesignerDocument: Hb,
  saveTemplateDesignerDocument: Fb,
  getMarketingAssetDesignerInstance: Ub,
  saveMarketingAssetDesignerInstance: jb,
  uploadRenderedOutput: async (e, t, n) => {
    if (!xf())
      return ae(
        "rendered output upload",
        `Skipped upload for ${n} — no asset upload proxy is configured on this Content Hub instance.`
      ), { skipped: !0, fileName: n, assetId: e };
    try {
      const r = new FormData();
      r.append("file", t, n), r.append("linkToEntity", "EPAM.MarketingAsset"), r.append("linkToEntityId", e), r.append("relationName", "marketingAssetToRenderedOutput");
      const o = await fetch(`${Rl}/assets/upload`, {
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
  searchAssets: gh,
  searchAssetsInCollection: async (e, t) => gh({ collectionId: e, query: t }),
  getCollectionAssets: l0,
  getZoneAllowedAssets: vb,
  getTemplateAllowedAssets: i0,
  getAssetsByIds: Cb,
  addAssetToCollection: bb,
  removeAssetFromCollection: Nb,
  addAllowedAssetToTemplate: s0,
  removeAllowedAssetFromTemplate: mb,
  addAllowedAssetToZone: wb,
  removeAllowedAssetFromZone: Tb
}, g0 = E.createContext(null);
function Bb({
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
  }, [e]), n ? /* @__PURE__ */ d(g0.Provider, { value: n, children: t }) : /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading brand kit..." });
}
function es() {
  const e = E.useContext(g0);
  if (!e)
    throw new Error("useBrandKit must be used within a BrandKitProvider");
  return e;
}
function _f(e) {
  var n;
  return (n = es().colors.find((r) => r.colorUsageType === e)) == null ? void 0 : n.hexValue;
}
function Ra(e) {
  var n;
  return (n = es().fonts.find((r) => r.fontUsageType === e)) == null ? void 0 : n.fontFamily;
}
const y0 = E.createContext({});
function Kb({
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
  return /* @__PURE__ */ d(y0.Provider, { value: n, children: t });
}
function zf() {
  return E.useContext(y0);
}
function v0() {
  const { searchIdentifier: e, search: t } = zf(), [n, r] = E.useState([]), [o, i] = E.useState("");
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
async function Vb(e, t, n, r) {
  var a;
  const o = wE(t, n, r);
  if (o.templateId)
    return V("templateId", `Resolved ${o.templateId} from config or entity relations`), o;
  const i = e, s = o.marketingAssetId;
  if (!((a = i == null ? void 0 : i.raw) != null && a.getAsync) || !s)
    return yn(
      "templateId",
      "No templateId in config and marketingAssetToTemplate could not be read from context.entity",
      "Set templateId in External component Configuration or link a template to this marketing asset."
    ), o;
  try {
    for (const l of gE) {
      const c = await i.raw.getAsync(
        `/api/entities/${s}/relations/${l}`
      );
      if (!c.isSuccessStatusCode || !c.content)
        continue;
      const f = Sl(c.content);
      if (f.length > 0)
        return V("templateId", `Resolved ${f[0]} from ${l} relation API`), { ...o, templateId: String(f[0]) };
    }
  } catch (l) {
    yn("templateId", l, "Failed to resolve marketingAssetToTemplate via Content Hub API.");
  }
  return yn(
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
function Qu(e) {
  const t = e.positionX, n = e.positionY;
  if (!((t === 0 || t === void 0) && (n === 0 || n === void 0) && (t === 0 || n === 0)))
    return e;
  const o = { ...e };
  return delete o.positionX, delete o.positionY, o;
}
function Oa(e) {
  return Qu(e);
}
function Ui(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return;
  const t = e, n = {}, r = Fr(t.positionX), o = Fr(t.positionY), i = Fr(t.zoneWidth), s = Fr(t.zoneHeight), a = Fr(t.offsetPx), l = Fr(t.sortOrder);
  return r !== void 0 && (n.positionX = r), o !== void 0 && (n.positionY = o), i !== void 0 && (n.zoneWidth = i), s !== void 0 && (n.zoneHeight = s), a !== void 0 && (n.offsetPx = a), l !== void 0 && (n.sortOrder = l), typeof t.contentAlignment == "string" && (n.contentAlignment = Fv(t.contentAlignment)), typeof t.offsetDirection == "string" && (n.offsetDirection = Uv(t.offsetDirection)), Object.keys(n).length > 0 ? Oa(n) : void 0;
}
function yh(e) {
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
        const s = Ui(o);
        s && (n[i] = s);
      }
      return n;
    }
    if (typeof t == "object") {
      const n = {};
      for (const [r, o] of Object.entries(t)) {
        const i = Ui(o);
        i && (n[r] = i);
      }
      return n;
    }
  } catch {
    return {};
  }
  return {};
}
function Zb(e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (!n.trim() || r == null)
      continue;
    const o = Ui(r);
    o && (t[n] = o);
  }
  return JSON.stringify(t, null, 2);
}
function qu(e) {
  const t = {};
  return typeof e.textValue == "string" && (t.textValue = e.textValue), typeof e.colorValue == "string" && (t.colorValue = e.colorValue), typeof e.htmlValue == "string" && (t.htmlValue = e.htmlValue), typeof e.linkUrl == "string" && (t.linkUrl = e.linkUrl), typeof e.imageAssetId == "string" && (t.imageAssetId = e.imageAssetId), typeof e.imageAssetUrl == "string" && (t.imageAssetUrl = e.imageAssetUrl), Object.keys(t).length > 0 ? t : void 0;
}
function w0(e, t) {
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    if (!o.trim() || i == null)
      continue;
    const s = Ui(i);
    s && (n[o] = s);
  }
  const r = {};
  for (const [o, i] of Object.entries(t)) {
    if (!o.trim() || !i)
      continue;
    const s = qu(i);
    s && (r[o] = { zoneKey: o, ...s });
  }
  return Object.keys(r).length === 0 ? JSON.stringify(n, null, 2) : JSON.stringify({ layouts: n, values: r }, null, 2);
}
function $a(e) {
  if (!(e != null && e.trim()))
    return { layouts: {}, values: {} };
  try {
    const t = JSON.parse(e);
    if (t == null || typeof t != "object" || Array.isArray(t))
      return { layouts: yh(e), values: {} };
    const n = t;
    if (n.layouts != null && typeof n.layouts == "object" && !Array.isArray(n.layouts)) {
      const i = yh(JSON.stringify(n.layouts)), s = {};
      if (n.values != null && typeof n.values == "object" && !Array.isArray(n.values))
        for (const [a, l] of Object.entries(n.values)) {
          if (!a.trim() || l == null || typeof l != "object")
            continue;
          const c = qu(l);
          c && (s[a] = { zoneKey: a, ...c });
        }
      return { layouts: i, values: s };
    }
    const r = {}, o = {};
    for (const [i, s] of Object.entries(n)) {
      if (!i.trim() || s == null || typeof s != "object")
        continue;
      const a = s, l = Ui(a);
      l && (r[i] = l);
      const c = qu(a);
      c && (o[i] = { zoneKey: i, ...c });
    }
    return { layouts: r, values: o };
  } catch {
    return { layouts: {}, values: {} };
  }
}
function Ma(e, t, n) {
  var o, i, s, a, l, c;
  const r = ji(e, t);
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
function T0(e, t) {
  return Qu(t ? {
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
function Ao(e, t) {
  return t.filter((r) => r.zoneKey === e.zoneKey).length > 1 ? `${e.zoneKey}__${e.id}` : e.zoneKey;
}
function _r(e, t) {
  return Ao(e, t);
}
function ji(e, t) {
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
function S0(e, t) {
  return {
    ...e,
    zones: [...e.zones].map((n) => {
      const r = Ao(n, e.zones), o = r === n.zoneKey ? t[n.zoneKey] : t[r];
      return T0(n, o);
    }).sort((n, r) => n.sortOrder - r.sortOrder || n.id.localeCompare(r.id))
  };
}
function Wb(e) {
  return Oa({
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
function Yb(e) {
  const t = {};
  for (const n of e.zones) {
    const r = Ao(n, e.zones);
    t[r] = Wb(n);
  }
  return t;
}
function k0(e, t) {
  const n = Yb(e);
  for (const r of e.zones) {
    const o = Ao(r, e.zones), i = o === r.zoneKey ? t[r.zoneKey] : t[o];
    i ? n[o] = Oa({ ...n[o], ...i }) : n[o] = Oa(n[o] ?? {});
  }
  return n;
}
function Gb({
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
            children: Dv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
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
            value: e.offsetDirection ?? _l,
            onChange: (o) => t({ offsetDirection: o.target.value }),
            children: Hv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
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
function Xb(...e) {
  const t = /* @__PURE__ */ new Set(), n = [];
  for (const r of e)
    for (const o of r) {
      const i = o.id || o.previewUrl || o.thumbnailUrl;
      !i || t.has(i) || (t.add(i), n.push(o));
    }
  return n;
}
function Jb({
  zoneKey: e,
  zone: t,
  templateId: n,
  selectedAssetId: r,
  selectedUrl: o,
  onChange: i,
  compact: s = !1
}) {
  const { searchIdentifier: a } = zf(), { resultIds: l, hasSearchIntegration: c } = v0(), [f, u] = E.useState([]), [p, v] = E.useState([]), [S, T] = E.useState([]), [_, h] = E.useState(!1), [m, g] = E.useState(null), [b, C] = E.useState(!1), [N, k] = E.useState("");
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
    () => Xb(p, f),
    [f, p]
  ), U = E.useMemo(() => L.length > 0 ? L : S, [L, S]), R = L.length > 0, D = () => {
    const z = N.trim();
    z && (i(e, { imageAssetUrl: z }), C(!1), k(""));
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
          onChange: (z) => k(z.target.value)
        }
      ),
      /* @__PURE__ */ d("button", { type: "button", className: "image-picker-url-apply", onClick: D, disabled: !N.trim(), children: "Use image URL" })
    ] })
  ] });
}
function E0({
  zone: e,
  templateId: t,
  value: n,
  onChange: r,
  adminMode: o = !1,
  hideLogoPicker: i = !1,
  layoutMode: s = "canvas"
}) {
  const a = es(), l = o || !e.isLocked, c = e.positionX !== void 0 || e.positionY !== void 0, f = s === "stacked" ? { position: "relative", width: "100%" } : c ? {
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
  }, u = qA(e, f, s), p = eC(e), v = s === "stacked" ? " zone-stacked" : "";
  if (Al(e))
    return /* @__PURE__ */ d(
      Qb,
      {
        style: u,
        layoutClass: p,
        stackedClass: v,
        zone: e,
        brandKit: a
      }
    );
  if (e.isLocked && !o)
    return /* @__PURE__ */ d("div", { style: u, className: `zone zone-locked${v} ${p}`, "data-zone-key": e.zoneKey, children: /* @__PURE__ */ d(qb, { zone: e, brandKit: a, layoutMode: s }) });
  switch (e.zoneType) {
    case "Text":
      return /* @__PURE__ */ d(
        nN,
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
        tN,
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
        eN,
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
        rN,
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
      return /* @__PURE__ */ d(oN, { style: u, layoutClass: p, zone: e, value: n, onChange: r });
    default:
      return null;
  }
}
function Qb({
  style: e,
  layoutClass: t,
  stackedClass: n,
  zone: r,
  brandKit: o
}) {
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-logo${n} ${t}`, "data-zone-key": r.zoneKey, children: /* @__PURE__ */ d("span", { className: "zone-logo-placeholder", "aria-label": `${o.brandKitName} logo`, children: "Logo" }) });
}
function qb({
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
    const o = Fi(e.htmlDefaultContent);
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
  const f = !a && !l;
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-image${n} ${t}`, "data-zone-key": r.zoneKey, children: f ? /* @__PURE__ */ d(
    Jb,
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
function tN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = Ra("Heading"), a = _f("Secondary"), l = n.headingLevel ?? Nn;
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        ...e,
        fontFamily: s,
        fontSize: QA[l],
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
function nN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = Ra("Heading"), a = Ra("Body"), l = _f("Secondary"), c = (n.zoneLabel ?? "").toLowerCase().includes("headline") ? s : a;
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
function rN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = _f("Accent"), a = Ra("CTA");
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
        dangerouslySetInnerHTML: { __html: Fi((r == null ? void 0 : r.htmlValue) ?? n.htmlDefaultContent) }
      }
    )
  ] }) : /* @__PURE__ */ d(
    "div",
    {
      style: e,
      className: `zone zone-html zone-html-locked ${t}`,
      "data-zone-key": n.zoneKey,
      dangerouslySetInnerHTML: { __html: Fi(n.htmlDefaultContent) }
    }
  );
}
function A0({
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
    for (const S of e.zones) {
      if (v.has(S.zoneKey))
        return !0;
      v.add(S.zoneKey);
    }
    return !1;
  }, [e.zones]), c = E.useMemo(
    () => [...e.zones].map((v) => {
      const S = Ao(v, e.zones), T = S === v.zoneKey ? t[v.zoneKey] : t[S];
      return T0(v, T);
    }).sort((v, S) => v.sortOrder - S.sortOrder || v.id.localeCompare(S.id)),
    [e.zones, t]
  ), f = E.useMemo(() => Zb(t), [t]), u = (v) => {
    const S = s === v.id, T = Ao(v, e.zones), _ = e.zones.find((m) => m.id === v.id) ?? v, h = _r(_, e.zones);
    return /* @__PURE__ */ A("div", { className: "asset-zone-structure-row", children: [
      /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          className: "asset-zone-structure-header",
          onClick: () => a((m) => m === v.id ? null : v.id),
          "aria-expanded": S,
          children: [
            /* @__PURE__ */ d("span", { className: "asset-zone-structure-title", children: v.zoneLabel || v.zoneKey }),
            /* @__PURE__ */ d("span", { className: "asset-zone-structure-type", children: v.zoneType }),
            /* @__PURE__ */ d("span", { className: "asset-zone-structure-chevron", children: S ? "▾" : "▸" })
          ]
        }
      ),
      S && /* @__PURE__ */ d("div", { className: "asset-zone-structure-body", children: /* @__PURE__ */ A("div", { className: "asset-zone-structure-content", children: [
        /* @__PURE__ */ d("p", { className: "asset-zone-structure-content-label", children: "Content" }),
        l && /* @__PURE__ */ A("p", { className: "asset-zone-structure-key-hint", children: [
          "Zone key: ",
          /* @__PURE__ */ d("code", { children: h })
        ] }),
        /* @__PURE__ */ d(
          E0,
          {
            zone: { ..._, zoneKey: h },
            templateId: e.id,
            value: n[_.id],
            onChange: (m, g) => i(_.id, { ...g, zoneKey: h }),
            layoutMode: "stacked"
          }
        ),
        /* @__PURE__ */ d(
          Gb,
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
function Ia({
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
function iN(e) {
  var n;
  const t = {};
  for (const r of e.zones) {
    const i = { zoneKey: _r(r, e.zones) };
    if (Al(r)) {
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
  var o, i, s, a, l, c, f, u;
  const n = iN(e), r = { ...n };
  for (const p of e.zones) {
    const v = _r(p, e.zones), S = t[p.id] ?? t[v] ?? t[p.zoneKey];
    if (S) {
      if (Al(p)) {
        r[p.id] = {
          zoneKey: v,
          imageAssetUrl: (o = S.imageAssetUrl) != null && o.trim() ? S.imageAssetUrl : (i = n[p.id]) == null ? void 0 : i.imageAssetUrl
        };
        continue;
      }
      r[p.id] = {
        ...n[p.id],
        ...S,
        zoneKey: v,
        textValue: (s = S.textValue) != null && s.trim() ? S.textValue : (a = n[p.id]) == null ? void 0 : a.textValue,
        htmlValue: (l = S.htmlValue) != null && l.trim() ? S.htmlValue : (c = n[p.id]) == null ? void 0 : c.htmlValue,
        imageAssetUrl: (f = S.imageAssetUrl) != null && f.trim() ? S.imageAssetUrl : (u = n[p.id]) == null ? void 0 : u.imageAssetUrl
      };
    }
  }
  return r;
}
const aN = 200, lN = 4e3;
function vh(e) {
  return Math.min(lN, Math.max(aN, Math.round(e)));
}
function wh({ width: e, height: t, onChange: n, children: r }) {
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
          width: vh(c.startWidth + (l.clientX - c.startX)),
          height: c.startHeight
        });
        return;
      }
      n({
        width: c.startWidth,
        height: vh(c.startHeight + (l.clientY - c.startY))
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
const Rf = E.forwardRef(function({ template: t, zoneValues: n = {}, layoutMode: r = "stacked", onDimensionsChange: o }, i) {
  const s = es(), a = E.useMemo(
    () => [...t.zones].sort((h, m) => h.sortOrder - m.sortOrder),
    [t.zones]
  ), l = E.useMemo(
    () => sN(t, n),
    [t, n]
  ), c = E.useMemo(
    () => Yu(t, l, s),
    [s, l, t]
  ), f = _v(t), u = Sf(t), p = Rv(t), v = !!o, S = ({ width: h, height: m }) => {
    o == null || o({
      canvasWidth: h,
      canvasHeight: m,
      formatPreset: Vu(t.channelType, h, m) || t.formatPreset
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
        E0,
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
      v ? /* @__PURE__ */ d(wh, { width: u, height: p, onChange: S, children: T }) : T
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
    v ? /* @__PURE__ */ d(wh, { width: u, height: p, onChange: S, children: _ }) : _
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
function ed(e, t = "active", n = 2600) {
  const r = dN(t), [o, i] = E.useState(0);
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
function _o({
  active: e,
  variant: t = "active",
  className: n
}) {
  const r = ed(e, t);
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
function C0({ marketingAsset: e, userHasOverridePermission: t, onEject: n }) {
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
      /* @__PURE__ */ d(_o, { active: a, className: "eject-saving" })
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
  const i = es(), [s, a] = E.useState(() => {
    const N = $a(t.zoneLayoutJson), k = Ma(e, t.zoneValues, N.values);
    return ji(e, k);
  }), [l, c] = E.useState(() => {
    const N = $a(t.zoneLayoutJson);
    return k0(e, N.layouts);
  }), [f, u] = E.useState(t.rawHtmlOverrideContent ?? ""), [p, v] = E.useState(!1), [S, T] = E.useState(null), _ = E.useMemo(
    () => S0(e, l),
    [e, l]
  ), h = E.useMemo(
    () => Yu(_, s, i),
    [i, _, s]
  ), m = E.useMemo(
    () => Fi(f),
    [f]
  ), g = (N, k) => {
    a((L) => ({ ...L, [N]: k }));
  }, b = (N, k) => {
    c((L) => {
      const U = { ...L[N], ...k };
      for (const R of Object.keys(k))
        k[R] === void 0 && delete U[R];
      return { ...L, [N]: U };
    });
  }, C = async () => {
    v(!0), T(null);
    try {
      const N = _.zones.map((z) => {
        const Y = s[z.id];
        return Y ? { ...Y, zoneKey: _r(z, _.zones) } : null;
      }).filter((z) => !!(z != null && z.zoneKey)), k = Object.fromEntries(
        N.map((z) => [z.zoneKey, z])
      ), L = w0(l, k);
      await re.updateMarketingAsset({
        ...t,
        zoneLayoutJson: L
      }), V("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const U = await re.saveMarketingAssetZoneValues(
        t.id,
        N
      ), R = Ma(e, U, k);
      a(ji(e, R));
      let D = Yu(
        _,
        Object.fromEntries(R.map((z) => [z.zoneKey, z])),
        i
      );
      if (KC(r))
        V("email HTML", "Generated client-side email HTML.");
      else
        try {
          D = await fN(r, e.id, t.id), V("email HTML render", `Rendered via ${r}`);
        } catch (z) {
          ae(
            "email HTML render API",
            z instanceof Error ? z.message : String(z)
          ), ae("email HTML preview", "Using client-side inline-CSS renderer because the render API is unavailable.");
        }
      if (xf()) {
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
      const k = N instanceof Error ? N.message : "Failed to save and render email HTML.";
      yn("email save/render", N), T(k);
    } finally {
      v(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ d(
    Ia,
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
              const k = N.target.value;
              await re.updateMarketingAsset({
                ...t,
                rawHtmlOverrideContent: k
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
    Ia,
    {
      structureTitle: "Email structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ A("div", { className: "email-builder-structure", children: [
        /* @__PURE__ */ d(
          A0,
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
          /* @__PURE__ */ d(_o, { active: p }),
          /* @__PURE__ */ d(
            C0,
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
        S && /* @__PURE__ */ d("div", { className: "marketing-builder-error email-builder-error", children: S })
      ] }),
      preview: /* @__PURE__ */ d(
        Rf,
        {
          template: _,
          zoneValues: s,
          layoutMode: "stacked"
        }
      )
    }
  ) });
}
function b0(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function mN(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function hN({ layer: e, selected: t, onSelect: n, onMoveStart: r }) {
  if (!e.visible)
    return null;
  const o = {
    left: e.x,
    top: e.y,
    width: e.width,
    height: e.height,
    transform: e.rotation ? `rotate(${e.rotation}deg)` : void 0
  };
  let i = null;
  switch (e.type) {
    case "frame":
      i = /* @__PURE__ */ d(
        "div",
        {
          className: "chd-layer-frame",
          style: { background: e.fill || "#ffffff" }
        }
      );
      break;
    case "rect":
      i = /* @__PURE__ */ d(
        "div",
        {
          className: "chd-layer-rect",
          style: { background: e.fill || "#888780" }
        }
      );
      break;
    case "text":
      i = /* @__PURE__ */ d(
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
      i = e.src ? /* @__PURE__ */ d(
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
      style: o,
      "data-layer-id": e.id,
      onPointerDown: (s) => {
        s.button === 0 && (s.stopPropagation(), n(s), e.locked || r(s));
      },
      children: [
        i,
        e.locked ? /* @__PURE__ */ d("span", { className: "chd-layer-lock", title: "Locked", "aria-label": "Locked", children: /* @__PURE__ */ A("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: [
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
        ] }) }) : null
      ]
    }
  );
}
const td = {
  primary: "#00a651",
  secondary: "#000000",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  text: "#000000",
  muted: "#6b716e"
};
function Os(e) {
  return typeof e == "boolean" ? e : void 0;
}
let gN = 1;
function ri() {
  return `layer-${Date.now().toString(36)}-${gN++}`;
}
function nd(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: ri(),
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
        id: ri(),
        type: e,
        name: "Rectangle",
        x: n,
        y: r,
        width: 160,
        height: 100,
        visible: !0,
        fill: td.primary,
        locked: !1,
        allowTransform: !1,
        editableContent: !1
      };
    case "text":
      return {
        id: ri(),
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
        id: ri(),
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
function Of() {
  const e = nd("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = td.secondary;
  const t = nd("image", { x: 120, y: 140 });
  return t.name = "Logo", t.width = 240, t.height = 80, t.src = "", t.fill = "#ffffff", t.locked = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: td.background
    },
    layers: [e, t]
  };
}
function pt(e) {
  return JSON.parse(JSON.stringify(e));
}
function $f(e) {
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
    const c = typeof a.id == "string" ? a.id : ri(), f = typeof a.name == "string" ? a.name : l, u = Number(a.x), p = Number(a.y), v = Number(a.width), S = Number(a.height);
    if (![u, p, v, S].every(Number.isFinite))
      continue;
    const T = {
      id: c,
      type: l,
      name: f,
      x: u,
      y: p,
      width: v,
      height: S,
      rotation: typeof a.rotation == "number" ? a.rotation : void 0,
      visible: a.visible !== !1,
      locked: !!a.locked,
      allowTransform: !!a.allowTransform,
      fill: typeof a.fill == "string" ? a.fill : void 0,
      text: typeof a.text == "string" ? a.text : void 0,
      fontSize: typeof a.fontSize == "number" ? a.fontSize : void 0,
      color: typeof a.color == "string" ? a.color : void 0,
      src: typeof a.src == "string" ? a.src : void 0,
      pinLeft: Os(a.pinLeft),
      pinRight: Os(a.pinRight),
      pinTop: Os(a.pinTop),
      pinBottom: Os(a.pinBottom),
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
function N0(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function ts(e) {
  return e.locked ? !1 : N0(e);
}
function zo(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function Mf(e, t) {
  return t === "admin" ? !0 : e.visible ? ts(e) || zo(e) : !1;
}
function yN(e) {
  return { version: 1, templateId: e, overrides: {} };
}
function vN(e) {
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
function wN(e, t) {
  const n = pt(e);
  return t != null && t.overrides ? {
    ...n,
    layers: n.layers.map((r) => {
      const o = t.overrides[r.id];
      if (!o)
        return r;
      const i = { ...r };
      return zo(r) && (typeof o.x == "number" && (i.x = o.x), typeof o.y == "number" && (i.y = o.y), typeof o.width == "number" && (i.width = o.width), typeof o.height == "number" && (i.height = o.height)), ts(r) && (typeof o.text == "string" && (i.text = o.text), typeof o.fill == "string" && (i.fill = o.fill), typeof o.color == "string" && (i.color = o.color), typeof o.src == "string" && (i.src = o.src)), i;
    })
  } : n;
}
function TN(e, t, n) {
  const r = {}, o = new Map(e.layers.map((i) => [i.id, i]));
  for (const i of t.layers) {
    const s = o.get(i.id);
    if (!s)
      continue;
    const a = {};
    zo(s) && (i.x !== s.x && (a.x = i.x), i.y !== s.y && (a.y = i.y), i.width !== s.width && (a.width = i.width), i.height !== s.height && (a.height = i.height)), ts(s) && ((i.text ?? "") !== (s.text ?? "") && (a.text = i.text), (i.fill ?? "") !== (s.fill ?? "") && (a.fill = i.fill), (i.color ?? "") !== (s.color ?? "") && (a.color = i.color), (i.src ?? "") !== (s.src ?? "") && (a.src = i.src)), Object.keys(a).length > 0 && (r[i.id] = a);
  }
  return { version: 1, templateId: n, overrides: r };
}
function SN(e, t) {
  const n = {};
  return zo(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), ts(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const Bn = 24, Th = 1, P0 = 0.25, x0 = 3, kN = 8;
function $s(e, t) {
  return Math.abs(e - t) <= kN;
}
function Ms(e, t) {
  return e === !0 ? !0 : e === !1 ? !1 : t;
}
function EN(e) {
  return typeof e.pinLeft == "boolean" || typeof e.pinRight == "boolean" || typeof e.pinTop == "boolean" || typeof e.pinBottom == "boolean";
}
function L0(e, t, n) {
  return EN(e) ? {
    left: e.pinLeft === !0,
    right: e.pinRight === !0,
    top: e.pinTop === !0,
    bottom: e.pinBottom === !0
  } : {
    left: Ms(e.pinLeft, $s(e.x, 0)),
    right: Ms(e.pinRight, $s(e.x + e.width, t)),
    top: Ms(e.pinTop, $s(e.y, 0)),
    bottom: Ms(e.pinBottom, $s(e.y + e.height, n))
  };
}
function _0() {
  return {
    pinLeft: !0,
    pinTop: !0,
    pinRight: !1,
    pinBottom: !1
  };
}
function Sh(e, t, n, r, o, i) {
  const s = e, a = n - e - t;
  if (o && i) {
    const c = s, f = Math.max(Bn, r - s - a);
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
    size: Math.max(Bn, t * l)
  };
}
function AN(e, t, n) {
  if (t.width === n.width && t.height === n.height)
    return e;
  const r = L0(e, t.width, t.height), o = Sh(e.x, e.width, t.width, n.width, r.left, r.right), i = Sh(e.y, e.height, t.height, n.height, r.top, r.bottom), s = r.left && r.right && r.top && r.bottom;
  return {
    ...e,
    x: o.start,
    y: i.start,
    width: o.size,
    height: i.size,
    objectFit: e.objectFit ?? (s && e.type === "image" ? "cover" : e.objectFit)
  };
}
function CN(e, t, n, r) {
  const o = { width: e.canvas.width, height: e.canvas.height }, i = { width: t, height: n };
  return {
    ...e,
    canvas: {
      ...e.canvas,
      width: t,
      height: n,
      presetId: r
    },
    layers: e.layers.map((s) => AN(s, o, i))
  };
}
function z0(e, t, n) {
  return {
    x: 0,
    y: 0,
    width: t,
    height: n,
    pinLeft: !0,
    pinRight: !0,
    pinTop: !0,
    pinBottom: !0,
    objectFit: e.type === "image" ? e.objectFit ?? "cover" : e.objectFit
  };
}
const bN = 50, R0 = E.createContext(null);
function NN(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function kh(e, t, n) {
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
function PN({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: o,
  onDocumentChange: i,
  onInstanceChange: s
}) {
  const a = E.useRef(null);
  a.current || (a.current = n ? pt(n) : Of());
  const l = E.useRef(
    pt(r ?? n ?? a.current)
  ), c = E.useRef(t);
  c.current = t;
  const [f, u] = E.useState(() => pt(a.current)), [p, v] = E.useState([]), [S, T] = E.useState({
    zoom: Th,
    panX: 40,
    panY: 40
  }), _ = E.useRef([pt(a.current)]), h = E.useRef(0), [m, g] = E.useState(0), b = E.useRef(p);
  b.current = p;
  const C = E.useRef(f);
  C.current = f;
  const N = E.useRef(i);
  N.current = i;
  const k = E.useRef(s);
  k.current = s;
  const L = E.useRef(o);
  L.current = o;
  const U = E.useCallback(() => g((W) => W + 1), []), R = E.useCallback((W) => {
    var M, $;
    if ((M = N.current) == null || M.call(N, pt(W)), c.current === "endUser") {
      const w = L.current ?? "";
      ($ = k.current) == null || $.call(
        k,
        TN(l.current, W, w)
      );
    }
  }, []), D = E.useCallback(
    (W) => {
      const M = _.current.slice(0, h.current + 1);
      for (M.push(pt(W)); M.length > bN; )
        M.shift();
      _.current = M, h.current = M.length - 1, U();
    },
    [U]
  ), z = E.useCallback(
    (W, M) => {
      u(W), C.current = W, M && D(W), R(W);
    },
    [R, D]
  ), Y = E.useCallback(
    (W) => {
      const M = c.current === "endUser";
      switch (W.type) {
        case "ADD_LAYER": {
          if (M)
            return;
          const $ = nd(W.layerType, W.at);
          u((w) => {
            const x = { ...w, layers: [...w.layers, $] };
            return D(x), R(x), x;
          }), v([$.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const $ = W.pushHistory !== !1;
          u((w) => {
            const x = {
              ...w,
              layers: w.layers.map((j) => {
                if (j.id !== W.id)
                  return j;
                const Q = M ? SN(j, W.patch) : W.patch;
                if (Object.keys(Q).length === 0)
                  return j;
                const Z = { ...j, ...Q };
                return typeof Z.width == "number" && (Z.width = Math.max(Bn, Z.width)), typeof Z.height == "number" && (Z.height = Math.max(Bn, Z.height)), Z;
              })
            };
            return $ && D(x), R(x), x;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if (M)
            return;
          const $ = new Set(W.ids ?? b.current);
          if ($.size === 0)
            return;
          u((w) => {
            const x = {
              ...w,
              layers: w.layers.filter((j) => !$.has(j.id))
            };
            return D(x), R(x), x;
          }), v((w) => w.filter((x) => !$.has(x)));
          break;
        }
        case "SELECT": {
          v(($) => {
            const w = W.ids.filter((x) => {
              const j = C.current.layers.find((Q) => Q.id === x);
              return j ? Mf(j, c.current) : !1;
            });
            if (W.additive) {
              const x = new Set($);
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
          if (M)
            return;
          u(($) => {
            const w = {
              ...$,
              layers: NN($.layers, W.fromIndex, W.toIndex)
            };
            return D(w), R(w), w;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if (M)
            return;
          u(($) => {
            const w = {
              ...$,
              layers: $.layers.map(
                (x) => x.id === W.id ? { ...x, visible: W.visible } : x
              )
            };
            return D(w), R(w), w;
          });
          break;
        }
        case "BRING_FORWARD": {
          if (M)
            return;
          const $ = b.current;
          u((w) => {
            const x = { ...w, layers: kh(w.layers, $, "forward") };
            return D(x), R(x), x;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if (M)
            return;
          const $ = b.current;
          u((w) => {
            const x = { ...w, layers: kh(w.layers, $, "backward") };
            return D(x), R(x), x;
          });
          break;
        }
        case "ZOOM_SET": {
          T(($) => ({
            ...$,
            zoom: b0(W.zoom, P0, x0)
          }));
          break;
        }
        case "ZOOM_RESET": {
          T({ zoom: Th, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          T(($) => ({
            ...$,
            panX: W.panX,
            panY: W.panY
          }));
          break;
        }
        case "UNDO": {
          if (h.current <= 0)
            return;
          h.current -= 1;
          const $ = pt(_.current[h.current]);
          u($), C.current = $, v([]), U(), R($);
          break;
        }
        case "REDO": {
          if (h.current >= _.current.length - 1)
            return;
          h.current += 1;
          const $ = pt(_.current[h.current]);
          u($), C.current = $, v([]), U(), R($);
          break;
        }
        case "LOAD_DOCUMENT": {
          z(pt(W.document), !0), v([]);
          break;
        }
        case "SET_CANVAS_SIZE": {
          if (M)
            return;
          u(($) => {
            if ($.canvas.width === W.width && $.canvas.height === W.height && W.presetId && $.canvas.presetId === W.presetId)
              return $;
            const w = CN($, W.width, W.height, W.presetId);
            return D(w), R(w), w;
          });
          break;
        }
        case "COMMIT": {
          u(($) => (D($), R($), $));
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
        const M = $f(JSON.parse(W));
        return M ? (l.current = pt(M), z(M, !0), v([]), !0) : !1;
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
      viewport: S,
      canUndo: h.current > 0,
      canRedo: h.current < _.current.length - 1,
      dispatch: Y,
      exportDocument: Re,
      importDocumentJson: qe
    }),
    [t, o, f, p, S, Y, Re, qe, m]
  );
  return /* @__PURE__ */ d(R0.Provider, { value: Ee, children: e });
}
function zr() {
  const e = E.useContext(R0);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function If() {
  return zr().mode;
}
function $l() {
  return zr().document;
}
function O0() {
  return zr().document.layers;
}
function Ml() {
  return zr().selection;
}
function $0() {
  return zr().viewport;
}
function Il() {
  return zr().dispatch;
}
function xN() {
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
const LN = ["nw", "ne", "sw", "se"];
function _N() {
  const e = $l(), t = Ml(), n = $0(), r = Il(), o = If(), [i, s] = E.useState(null), [a, l] = E.useState(!1), c = E.useRef(n);
  c.current = n;
  const f = E.useRef(o);
  f.current = o, E.useEffect(() => {
    const C = (k) => {
      if (k.code === "Space" && !(k.target instanceof HTMLInputElement) && !(k.target instanceof HTMLTextAreaElement) && (k.preventDefault(), l(!0)), f.current === "admin" && (k.key === "Delete" || k.key === "Backspace") && t.length > 0) {
        const L = k.target.tagName;
        if (L === "INPUT" || L === "TEXTAREA")
          return;
        k.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (k.ctrlKey || k.metaKey) && k.key.toLowerCase() === "z" && !k.shiftKey && (k.preventDefault(), r({ type: "UNDO" })), (k.ctrlKey || k.metaKey) && (k.key.toLowerCase() === "y" || k.key.toLowerCase() === "z" && k.shiftKey) && (k.preventDefault(), r({ type: "REDO" }));
    }, N = (k) => {
      k.code === "Space" && l(!1);
    };
    return window.addEventListener("keydown", C), window.addEventListener("keyup", N), () => {
      window.removeEventListener("keydown", C), window.removeEventListener("keyup", N);
    };
  }, [r, t.length]), E.useEffect(() => {
    if (!i)
      return;
    const C = (k) => {
      const L = c.current.zoom;
      if (i.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: i.origPanX + (k.clientX - i.startX),
          panY: i.origPanY + (k.clientY - i.startY)
        });
        return;
      }
      const { dx: U, dy: R } = mN(
        k.clientX - i.startX,
        k.clientY - i.startY,
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
      i.handle.includes("e") && (Y = Math.max(Bn, i.origW + U)), i.handle.includes("s") && (Re = Math.max(Bn, i.origH + R)), i.handle.includes("w") && (Y = Math.max(Bn, i.origW - U), D = i.origX + (i.origW - Y)), i.handle.includes("n") && (Re = Math.max(Bn, i.origH - R), z = i.origY + (i.origH - Re)), r({
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
    const N = b0(n.zoom * (C.deltaY < 0 ? 1.08 : 0.92), P0, x0);
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
  }, S = (C, N) => {
    Mf(C, o) && r({
      type: "SELECT",
      ids: [C.id],
      additive: N.shiftKey
    });
  }, T = (C) => o === "admin" ? !C.locked : zo(C), _ = (C, N) => {
    if (!T(C) || a)
      return;
    const k = t.includes(C.id) ? t : [C.id];
    t.includes(C.id) || r({ type: "SELECT", ids: [C.id] });
    const L = {};
    for (const U of k) {
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
  }, h = (C, N, k) => {
    k.stopPropagation(), T(C) && (r({ type: "SELECT", ids: [C.id] }), s({
      kind: "resize",
      id: C.id,
      startX: k.clientX,
      startY: k.clientY,
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
                    hN,
                    {
                      layer: C,
                      selected: t.includes(C.id),
                      onSelect: (N) => S(C, N),
                      onMoveStart: (N) => _(C, N)
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
                      children: LN.map((C) => /* @__PURE__ */ d(
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
function zN() {
  const e = O0(), t = Ml(), n = Il(), r = If(), o = r === "admin", [i, s] = E.useState(null), [a, l] = E.useState(null), c = [...e].map((u, p) => ({ layer: u, index: p })).reverse().filter(({ layer: u }) => o || Mf(u, r)), f = (u, p) => {
    if (u === p)
      return;
    const v = e.findIndex((T) => T.id === u), S = e.findIndex((T) => T.id === p);
    v < 0 || S < 0 || n({ type: "REORDER", fromIndex: v, toIndex: S });
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
              onDragStart: (S) => {
                if (o) {
                  if (S.target.closest("button")) {
                    S.preventDefault();
                    return;
                  }
                  S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", u.id), s(u.id);
                }
              },
              onDragOver: (S) => {
                o && (S.preventDefault(), S.dataTransfer.dropEffect = "move", a !== u.id && l(u.id));
              },
              onDragLeave: () => {
                l((S) => S === u.id ? null : S);
              },
              onDrop: (S) => {
                S.preventDefault();
                const T = S.dataTransfer.getData("text/plain");
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
                    onClick: (S) => n({
                      type: "SELECT",
                      ids: [u.id],
                      additive: S.shiftKey
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
function Xo({
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
function RN() {
  const e = O0(), t = Ml(), n = Il(), r = If(), o = $l(), i = r === "admin", s = e.filter((u) => t.includes(u.id)), a = s.length === 1 ? s[0] : null, l = (u) => {
    a && n({ type: "UPDATE_LAYER", id: a.id, patch: u });
  }, c = a ? i ? !a.locked : zo(a) : !1, f = a ? i ? !a.locked : ts(a) : !1;
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
          Xo,
          {
            label: "X",
            value: Math.round(a.x),
            disabled: !c,
            onChange: (u) => l({ x: u })
          }
        ),
        /* @__PURE__ */ d(
          Xo,
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
          Xo,
          {
            label: "W",
            value: Math.round(a.width),
            disabled: !c,
            onChange: (u) => l({ width: u })
          }
        ),
        /* @__PURE__ */ d(
          Xo,
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
            Xo,
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
            const p = L0(a, o.canvas.width, o.canvas.height), v = {
              pinTop: p.top,
              pinLeft: p.left,
              pinRight: p.right,
              pinBottom: p.bottom
            }[u], S = a[u];
            return /* @__PURE__ */ A("label", { className: "chd-field-checkbox", children: [
              /* @__PURE__ */ d(
                "input",
                {
                  type: "checkbox",
                  checked: S === !0 || S === void 0 && v,
                  onChange: (h) => {
                    const m = h.target.checked;
                    if (S === void 0 && v && !m) {
                      l({ [u]: !0 });
                      return;
                    }
                    l({ [u]: m });
                  }
                }
              ),
              /* @__PURE__ */ d("span", { children: {
                pinTop: "Top",
                pinLeft: "Left",
                pinRight: "Right",
                pinBottom: "Bottom"
              }[u] })
            ] }, u);
          }) }),
          /* @__PURE__ */ d("p", { className: "chd-field-hint", children: "Pin in place keeps this block at its current X/Y and size when you change page size. Pinning opposite edges stretches the block to keep those insets." })
        ] }),
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => l(_0()), children: "Pin in place" }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => l(z0(a, o.canvas.width, o.canvas.height)),
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
              checked: N0(a),
              onChange: (u) => l({ editableContent: u.target.checked })
            }
          ),
          /* @__PURE__ */ d("span", { children: "Editable content (end user)" })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ d("p", { className: "chd-panel-empty", children: s.length > 1 ? `${s.length} layers selected` : "Select a layer" })
  ] });
}
const ON = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js", $N = "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
function M0(e, t) {
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
let Fc = null, Uc = null;
function MN() {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (Fc || (Fc = M0(ON, "chd-html2canvas").then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), Fc);
}
function IN() {
  var e;
  return (e = window.jspdf) != null && e.jsPDF ? Promise.resolve(window.jspdf.jsPDF) : (Uc || (Uc = M0($N, "chd-jspdf").then(() => {
    var n;
    const t = (n = window.jspdf) == null ? void 0 : n.jsPDF;
    if (!t)
      throw new Error("jsPDF did not register on window");
    return t;
  })), Uc);
}
const Eh = 96;
function DN(e, t) {
  const n = URL.createObjectURL(e), r = window.document.createElement("a");
  r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
function HN(e) {
  const t = e.closest(".chd-root"), n = t == null ? void 0 : t.querySelector("[data-chd-artboard]");
  if (!n)
    throw new Error("Could not find the designer page to export.");
  return n;
}
async function FN(e) {
  const t = HN(e), n = await MN();
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
async function UN(e, t) {
  const n = await new Promise((r, o) => {
    e.toBlob((i) => {
      i ? r(i) : o(new Error("Could not create PNG."));
    }, "image/png");
  });
  DN(n, t);
}
async function jN(e, t, n, r) {
  const o = await IN(), i = n * 25.4 / Eh, s = r * 25.4 / Eh, a = new o({
    orientation: i >= s ? "landscape" : "portrait",
    unit: "mm",
    format: [i, s],
    compress: !0
  });
  a.addImage(e.toDataURL("image/png"), "PNG", 0, 0, i, s), a.save(t);
}
async function BN(e, t, n) {
  const r = await FN(e);
  if (t === "png") {
    await UN(r, "design.png");
    return;
  }
  await jN(r, "design.pdf", n.width, n.height);
}
const KN = [
  { format: "pdf", label: "PDF", hint: "Print-ready page" },
  { format: "png", label: "PNG", hint: "Image of the page" }
];
function VN() {
  const e = $l(), t = E.useRef(null), [n, r] = E.useState(!1), [o, i] = E.useState(!1), [s, a] = E.useState(null);
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
        await BN(f, c, {
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
    n ? /* @__PURE__ */ d("div", { className: "chd-generate-menu", role: "menu", children: KN.map((c) => /* @__PURE__ */ A(
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
const ZN = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function WN() {
  const e = Il(), t = Ml(), n = $0(), r = $l(), { mode: o, canUndo: i, canRedo: s, exportDocument: a, importDocumentJson: l } = xN(), c = E.useRef(null), f = o === "admin", u = cA(
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
  }, S = (h) => {
    const m = Ku(h);
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
        patch: _0()
      });
  }, _ = () => {
    const h = r.layers.filter((m) => t.includes(m.id));
    for (const m of h)
      e({
        type: "UPDATE_LAYER",
        id: m.id,
        patch: z0(m, r.canvas.width, r.canvas.height)
      });
  };
  return /* @__PURE__ */ A("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ A("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ d("span", { className: "chd-toolbar-logo-wrap", children: "Logo" }),
      /* @__PURE__ */ d("span", { className: "chd-toolbar-mode", children: f ? "Admin" : "Edit" })
    ] }),
    f ? /* @__PURE__ */ d("div", { className: "chd-toolbar-group", children: ZN.map((h) => /* @__PURE__ */ A(
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
            onChange: (h) => S(h.target.value),
            children: [
              u === "custom" ? /* @__PURE__ */ d("option", { value: "custom", children: "Custom" }) : null,
              lA.map((h) => /* @__PURE__ */ d("optgroup", { label: h.label, children: xl.filter((m) => m.group === h.id).map((m) => /* @__PURE__ */ d("option", { value: m.id, children: m.label }, m.id)) }, h.id))
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
      /* @__PURE__ */ d(VN, {}),
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
function I0({
  mode: e = "admin",
  document: t,
  templateDocument: n,
  templateId: r,
  onDocumentChange: o,
  onInstanceChange: i,
  statusSlot: s,
  statusClassName: a
}) {
  return /* @__PURE__ */ d(PN, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    onDocumentChange: o,
    onInstanceChange: i
  }, children: /* @__PURE__ */ A("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ d(WN, {}),
    s ? /* @__PURE__ */ d("div", { className: `chd-status-bar${a ? ` ${a}` : ""}`, children: s }) : null,
    /* @__PURE__ */ A("div", { className: "chd-main", children: [
      /* @__PURE__ */ d(zN, {}),
      /* @__PURE__ */ d(_N, {}),
      /* @__PURE__ */ d(RN, {})
    ] })
  ] }) });
}
function YN(e) {
  var t;
  if (!((t = e.designerDocumentJson) != null && t.trim()))
    return null;
  try {
    return $f(JSON.parse(e.designerDocumentJson));
  } catch {
    return null;
  }
}
function GN(e, t) {
  var n;
  if ((n = t.designerInstanceJson) != null && n.trim())
    try {
      const r = vN(JSON.parse(t.designerInstanceJson));
      if (r)
        return r;
    } catch {
    }
  return yN(e.id);
}
function Ah({
  template: e,
  marketingAsset: t,
  designerInstanceProperty: n,
  onSaved: r
}) {
  const o = E.useMemo(() => YN(e), [e]), [i, s] = E.useState(
    () => GN(e, t)
  ), a = E.useRef(i);
  a.current = i;
  const [l, c] = E.useState("idle"), [f, u] = E.useState(null), p = E.useMemo(() => o ? wN(o, i) : null, [o, i]), v = E.useCallback(async () => {
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
      I0,
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
const XN = 900;
function JN(e) {
  var t;
  if ((t = e.designerDocumentJson) != null && t.trim())
    try {
      const n = $f(JSON.parse(e.designerDocumentJson));
      if (n)
        return n;
    } catch {
    }
  return Of();
}
function QN({
  template: e,
  designerDocumentProperty: t,
  onTemplateSaved: n
}) {
  const [r, o] = E.useState(() => JN(e)), [i, s] = E.useState("saved"), [a, l] = E.useState(null), c = E.useRef(r), f = E.useRef(null), u = E.useRef(0), p = E.useRef(!0);
  c.current = r;
  const v = E.useCallback(
    async (_) => {
      if (!Eo(e.id)) {
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
    }, XN), () => {
      f.current != null && window.clearTimeout(f.current);
    };
  }, [r, v]);
  const S = i === "error" ? "chd-status-bar--error" : i === "saved" ? "chd-status-bar--saved" : void 0, T = i === "saving" ? "Saving template canvas…" : i === "pending" ? "Unsaved changes…" : i === "error" ? a || "Save failed" : "Saved to template";
  return Eo(e.id) ? /* @__PURE__ */ d(
    I0,
    {
      mode: "admin",
      document: r,
      templateDocument: r,
      templateId: e.id,
      onDocumentChange: o,
      statusSlot: T,
      statusClassName: S
    },
    `${e.id}:${e.designerDocumentJson ? "doc" : "seed"}`
  ) : /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: Qn() });
}
async function qN(e, t) {
  if (!Eo(e.id))
    throw new Error(Qn());
  const n = Of();
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
function eP(e) {
  var t;
  return !!((t = e == null ? void 0 : e.designerDocumentJson) != null && t.trim());
}
const tP = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
let jc = null;
function nP(e) {
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
function rP(e = tP) {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (jc || (jc = nP(e).then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), jc);
}
function oP({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  html2canvasCdnUrl: r,
  onSaved: o
}) {
  const [i, s] = E.useState(() => {
    const m = $a(t.zoneLayoutJson), g = Ma(e, t.zoneValues, m.values);
    return ji(e, g);
  }), [a, l] = E.useState(() => {
    const m = $a(t.zoneLayoutJson);
    return k0(e, m.layouts);
  }), [c, f] = E.useState(!1), [u, p] = E.useState(null), v = E.useRef(null), S = E.useMemo(
    () => S0(e, a),
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
      const m = S.zones.map((k) => {
        const L = i[k.id];
        return L ? { ...L, zoneKey: _r(k, S.zones) } : null;
      }).filter((k) => !!(k != null && k.zoneKey)), g = Object.fromEntries(
        m.map((k) => [k.zoneKey, k])
      ), b = w0(a, g);
      await re.updateMarketingAsset({
        ...t,
        zoneLayoutJson: b
      }), V("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const C = await re.saveMarketingAssetZoneValues(
        t.id,
        m
      ), N = Ma(e, C, g);
      if (s(ji(e, N)), xf() && v.current) {
        const L = await (await rP(r))(v.current, {
          useCORS: !0,
          width: Sf(e),
          height: Rv(e)
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
    Ia,
    {
      structureTitle: "Social structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ A("div", { className: "social-builder-structure", children: [
        /* @__PURE__ */ d(
          A0,
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
          /* @__PURE__ */ d(_o, { active: c }),
          /* @__PURE__ */ d(
            C0,
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
        Rf,
        {
          ref: v,
          template: S,
          zoneValues: i,
          layoutMode: "canvas"
        }
      )
    }
  ) });
}
function Is({
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
function Bc({
  brandKitId: e,
  currentTemplateId: t,
  marketingAssetId: n,
  onTemplateChange: r,
  refreshKey: o = 0
}) {
  var S;
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
      /* @__PURE__ */ d("strong", { children: ((S = i[0]) == null ? void 0 : S.templateName) ?? "current template" }),
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
    /* @__PURE__ */ d(_o, { active: c, className: "template-selector-saving" }),
    u && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: u })
  ] });
}
const iP = [
  "Text",
  "Heading",
  "Image",
  "CTA Button",
  "Logo",
  "Background Color",
  "Divider",
  "HTML"
];
function sP(e) {
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
function aP(e) {
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
  }[t] ?? iP.find((r) => r.toLowerCase() === t);
}
function D0(e) {
  var l, c;
  const t = e.trim(), n = t.match(/zone\s*[:=]\s*([a-zA-Z0-9_-]+)/i), r = t.match(/type\s*[:=]\s*([a-zA-Z0-9 _-]+)/i), o = t.match(/label\s*[:=]\s*([^|]+)/i), i = (l = n == null ? void 0 : n[1]) == null ? void 0 : l.trim(), s = r != null && r[1] ? aP(r[1]) : void 0, a = ((c = o == null ? void 0 : o[1]) == null ? void 0 : c.trim()) || void 0;
  return { zoneKey: i, zoneType: s, zoneLabel: a };
}
function lP(e, t) {
  return e.replace(/zone\s*[:=]\s*/gi, "").replace(/type\s*[:=]\s*[a-zA-Z0-9 _-]+/gi, "").replace(/label\s*[:=]\s*[^|]+/gi, "").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase() || t;
}
function Ch(e) {
  return (e.fills ?? []).some(
    (t) => t.visible !== !1 && String(t.type ?? "").toUpperCase() === "IMAGE"
  );
}
function H0(e) {
  var o, i;
  const t = D0(e.name ?? "");
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
  if ((Ch(e) || r === "RECTANGLE" || r === "ELLIPSE") && Ch(e))
    return "Image";
  if (r === "COMPONENT" || r === "INSTANCE") {
    if (/button|cta/i.test(n))
      return "CTA Button";
    if (/logo/i.test(n))
      return "Logo";
  }
}
function F0(e) {
  const t = e.name ?? "";
  return /zone\s*[:=]/i.test(t) || /type\s*[:=]/i.test(t);
}
function cP(e) {
  const t = [], n = (r) => {
    F0(r) && t.push(r);
    for (const o of r.children ?? [])
      n(o);
  };
  return n(e), t.length > 0 ? t : (e.children ?? []).filter((r) => H0(r) != null);
}
function no(e) {
  if (!(e == null || !Number.isFinite(e)))
    return Math.round(e);
}
function uP(e, t, n, r) {
  const o = D0(e.name ?? ""), i = o.zoneType ?? H0(e) ?? "Text";
  let s = o.zoneKey || lP(e.name ?? "", `zone_${t + 1}`);
  r.has(s) && (s = `${s}_${t + 1}`), r.add(s);
  const a = e.absoluteBoundingBox, l = (a == null ? void 0 : a.x) != null ? no(a.x - n.x) : void 0, c = (a == null ? void 0 : a.y) != null ? no(a.y - n.y) : void 0, f = {
    id: `temp-figma-${Date.now()}-${t}`,
    zoneKey: s,
    zoneLabel: o.zoneLabel || (e.name ?? "").trim() || s,
    zoneType: i,
    isLocked: i === "Logo",
    sortOrder: t,
    positionX: l,
    positionY: c,
    zoneWidth: no(a == null ? void 0 : a.width),
    zoneHeight: no(a == null ? void 0 : a.height)
  };
  if (i === "Heading" && (f.headingLevel = Nn), i === "Text" && typeof e.characters == "string" && e.characters.trim()) {
    const u = e.characters.trim().length;
    u > 0 && (f.maxCharacterCount = Math.max(40, Math.ceil(u * 1.25)));
  }
  return f;
}
function dP(e) {
  var c, f, u, p;
  const t = [], n = (e.name ?? "").trim() || "Figma frame", r = no((c = e.absoluteBoundingBox) == null ? void 0 : c.width), o = no((f = e.absoluteBoundingBox) == null ? void 0 : f.height), i = {
    x: ((u = e.absoluteBoundingBox) == null ? void 0 : u.x) ?? 0,
    y: ((p = e.absoluteBoundingBox) == null ? void 0 : p.y) ?? 0
  }, s = cP(e);
  if (s.length === 0)
    return t.push(
      'No zone layers found. Name layers like "zone:headline | type:Heading" or place typed content as direct children of the frame.'
    ), { frameName: n, canvasWidth: r, canvasHeight: o, zones: [], warnings: t };
  s.some(F0) || t.push(
    "No explicit zone: / type: names found — inferred zone types from layer names and Figma node types. Rename layers for stable imports."
  );
  const a = /* @__PURE__ */ new Set(), l = s.map((v, S) => uP(v, S, i, a));
  return { frameName: n, canvasWidth: r, canvasHeight: o, zones: l, warnings: t };
}
function U0(e, t) {
  const n = t.replace(/-/g, ":");
  if ((e.id ?? "").replace(/-/g, ":") === n)
    return e;
  for (const r of e.children ?? []) {
    const o = U0(r, n);
    if (o)
      return o;
  }
  return null;
}
function fP(e, t) {
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
    return U0(o, t) ?? o;
  }
  return n.id || n.children || n.type ? n : null;
}
function bh(e, t) {
  return `${e.replace(/\s+/g, " ").trim() || "Figma template"} (${t})`;
}
async function pP(e, t, n) {
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
function mP({
  template: e,
  figmaImportApiUrl: t = "/api/figma/import",
  figmaImportApiToken: n,
  onApplyToCurrent: r,
  onCreatedTemplate: o
}) {
  const [i, s] = E.useState(""), [a, l] = E.useState(null), [c, f] = E.useState(!1), [u, p] = E.useState(!1), [v, S] = E.useState(null), [T, _] = E.useState(null), [h, m] = E.useState(!1), [g, b] = E.useState(""), C = async () => {
    f(!0), S(null), _(null), l(null);
    try {
      const L = sP(i);
      if (!L)
        throw new Error(
          "Paste a full Figma URL that includes node-id (right-click frame → Copy link)."
        );
      const U = await pP(t, n, i), R = fP(U, L.nodeId);
      if (!R)
        throw new Error("Could not find that frame/node in the Figma response.");
      const D = dP(R);
      l(D), b(bh(D.frameName, e.channelType)), D.zones.length === 0 ? S(D.warnings[0] || "No zones were mapped from this frame.") : _(`Mapped ${D.zones.length} zone(s) from “${D.frameName}”.`);
    } catch (L) {
      S(L instanceof Error ? L.message : "Figma preview failed.");
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
  }, k = async () => {
    if (!(!a || a.zones.length === 0)) {
      p(!0), S(null), _(null);
      try {
        const L = e.channelType, U = await re.createTemplate({
          templateName: g.trim() || bh(a.frameName, L),
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
        S(
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
    /* @__PURE__ */ d(_o, { active: c || u, className: "figma-import-saving" }),
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
            onClick: () => void k(),
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
const hP = ["Social", "Email", "Newsletter", "Print"];
function gP({
  template: e,
  onChange: t,
  compact: n = !1
}) {
  const r = ea(e.channelType), o = Ll(e.channelType), i = fA(e), s = (l) => {
    l !== e.channelType && t({
      channelType: l,
      ...zv(l)
    });
  }, a = (l) => {
    const c = pA(e.channelType, l);
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
          children: hP.map((l) => /* @__PURE__ */ d("option", { value: l, children: l }, l))
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "template-dimensions-section", children: [
      /* @__PURE__ */ A("div", { className: "template-dimensions-heading", children: [
        /* @__PURE__ */ d("h5", { children: "Dimensions" }),
        /* @__PURE__ */ d("span", { className: "template-dimensions-summary", children: _v(e) })
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
                formatPreset: Vu(
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
                formatPreset: Vu(
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
function yP({
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
  const [c, f] = E.useState(!1), [u, p] = E.useState("content-hub"), [v, S] = E.useState(""), [T, _] = E.useState(""), [h, m] = E.useState(""), [g, b] = E.useState([]), [C, N] = E.useState(!1), [k, L] = E.useState(null);
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
          onChange: (z) => S(z.target.value),
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
      k && /* @__PURE__ */ d("div", { className: "asset-picker-error", children: k }),
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
        !C && !k && g.length === 0 && /* @__PURE__ */ d("div", { className: "asset-picker-empty", children: i ? "No assets found. Try Image URL instead." : "No assets found. Try a different search." })
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
function vP({ template: e, onAssetsChange: t }) {
  const n = zf(), { resultIds: r, fullText: o, hasSearchIntegration: i } = v0(), [s, a] = E.useState([]), [l, c] = E.useState([]), [f, u] = E.useState(!1), [p, v] = E.useState(!1), [S, T] = E.useState(null), [_, h] = E.useState(null), m = E.useMemo(
    () => new Set(s.map((k) => k.id).filter(Boolean)),
    [s]
  ), g = E.useCallback(async () => {
    if (!e.id || e.id.startsWith("temp-")) {
      a([]);
      return;
    }
    u(!0), h(null);
    try {
      const k = await re.getTemplateAllowedAssets(e.id);
      a(k), t(k.map((L) => L.id).filter(Boolean));
    } catch (k) {
      a([]), h(k instanceof Error ? k.message : "Could not load template assets.");
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
    let k = !1;
    return v(!0), re.getAssetsByIds(r).then((L) => {
      k || c(L);
    }).catch(() => {
      k || c([]);
    }).finally(() => {
      k || v(!1);
    }), () => {
      k = !0;
    };
  }, [r]);
  const b = async (k) => {
    var L, U;
    if (!e.id || e.id.startsWith("temp-") || !k.id) {
      h("Save the template first before linking assets.");
      return;
    }
    T(k.id), h(null);
    try {
      if (!await re.addAllowedAssetToTemplate(e.id, k.id))
        throw new Error(`Could not link ${k.name} to this template.`);
      await g(), (L = n.notifier) == null || L.notifySuccess(`Added "${k.name}" to template assets.`);
    } catch (R) {
      const D = R instanceof Error ? R.message : "Failed to link asset to template.";
      h(D), (U = n.notifier) == null || U.notifyError(D);
    } finally {
      T(null);
    }
  }, C = async (k) => {
    var L, U;
    if (!(!e.id || !k.id)) {
      T(k.id), h(null);
      try {
        await re.removeAllowedAssetFromTemplate(e.id, k.id), await g(), (L = n.notifier) == null || L.notifySuccess(`Removed "${k.name}" from template assets.`);
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
      yP,
      {
        overlay: !0,
        allowUrl: !1,
        triggerLabel: "Browse approved assets",
        disabled: N,
        onSelect: (k) => {
          b(k);
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
        s.map((k) => /* @__PURE__ */ A("div", { className: "template-zone-asset-card", children: [
          /* @__PURE__ */ d("img", { src: k.thumbnailUrl, alt: k.name }),
          /* @__PURE__ */ d("span", { children: k.name }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "template-zone-asset-remove",
              disabled: S === k.id || N,
              onClick: () => void C(k),
              children: "Remove"
            }
          )
        ] }, k.id || k.thumbnailUrl)),
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
        l.map((k) => {
          const L = k.id ? m.has(k.id) : !1;
          return /* @__PURE__ */ A("div", { className: "template-zone-asset-card", children: [
            /* @__PURE__ */ d("img", { src: k.thumbnailUrl, alt: k.name }),
            /* @__PURE__ */ d("span", { children: k.name }),
            /* @__PURE__ */ d(
              "button",
              {
                type: "button",
                className: "template-zone-asset-add",
                disabled: L || S === k.id || !k.id || N,
                onClick: () => void b(k),
                children: L ? "Linked" : "Add"
              }
            )
          ] }, k.id || k.thumbnailUrl);
        }),
        i && !p && l.length === 0 && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-empty", children: "Run a search on this page to see assets you can link." })
      ] })
    ] }),
    _ && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-error", children: _ })
  ] });
}
function wP({ zoneLabel: e, onDelete: t, className: n = "" }) {
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
const TP = ["Text", "Heading", "Image", "CTA Button", "Logo", "Background Color", "Divider", "HTML"], SP = 800;
function kP({
  template: e,
  onSaved: t,
  pendingFigmaImport: n = null,
  onPendingFigmaImportApplied: r
}) {
  var $;
  const [o, i] = E.useState(e), [s, a] = E.useState((($ = o.zones[0]) == null ? void 0 : $.id) ?? null), [l, c] = E.useState("saved"), [f, u] = E.useState(null), p = E.useRef(e.zones), v = E.useRef(o), S = E.useRef(null), T = E.useRef(0), _ = E.useRef(!0), h = E.useRef(!1);
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
    return c((w) => w === "saving" ? w : "pending"), S.current != null && window.clearTimeout(S.current), S.current = window.setTimeout(() => {
      m(v.current);
    }, SP), () => {
      S.current != null && window.clearTimeout(S.current);
    };
  }, [o, m]);
  const g = o.zones.find((w) => w.id === s), [b, C] = E.useState(null), [N, k] = E.useState(null), L = [...o.zones].sort((w, x) => w.sortOrder - x.sortOrder), U = (w, x) => {
    w !== x && i((j) => {
      const Q = [...j.zones].sort((Be, Ro) => Be.sortOrder - Ro.sortOrder), Z = Q.findIndex((Be) => Be.id === w), Me = Q.findIndex((Be) => Be.id === x);
      if (Z < 0 || Me < 0)
        return j;
      const be = [...Q], [Ne] = be.splice(Z, 1);
      return be.splice(Me, 0, Ne), {
        ...j,
        zones: be.map((Be, Ro) => ({ ...Be, sortOrder: Ro }))
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
        const Z = { ...Q, ...x };
        for (const Me of Object.keys(x))
          x[Me] === void 0 && delete Z[Me];
        return Z;
      })
    }));
  }, z = (w) => {
    if (w.trim() === "")
      return;
    const x = Number(w);
    return Number.isNaN(x) ? void 0 : x;
  }, Y = () => {
    const w = new Set(o.zones.map((Z) => Z.zoneKey));
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
    i((Z) => ({ ...Z, zones: [...Z.zones, Q] })), a(Q.id);
  }, Re = (w) => {
    var Me, be;
    const x = [...o.zones].sort((Ne, Be) => Ne.sortOrder - Be.sortOrder), j = x.findIndex((Ne) => Ne.id === w), Q = x.filter((Ne) => Ne.id !== w).map((Ne, Be) => ({ ...Ne, sortOrder: Be })), Z = ((Me = Q[j]) == null ? void 0 : Me.id) ?? ((be = Q[j - 1]) == null ? void 0 : be.id) ?? null;
    i((Ne) => ({ ...Ne, zones: Q })), a(Z);
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
  }, Ee = ed(l === "pending", "pending"), W = ed(l === "saving", "active"), M = l === "pending" ? Ee : l === "saving" ? W : l === "error" ? f ?? "Could not save template." : "All changes saved automatically.";
  return /* @__PURE__ */ d(
    Ia,
    {
      structureTitle: "Template structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ A("div", { className: "template-admin-structure", children: [
        /* @__PURE__ */ d(gP, { template: o, onChange: R, compact: !0 }),
        /* @__PURE__ */ d(
          vP,
          {
            template: o,
            onAssetsChange: (w) => i((x) => {
              const j = x.allowedAssetIds ?? [];
              return j.length === w.length && j.every((Q, Z) => Q === w[Z]) ? x : { ...x, allowedAssetIds: w };
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
                  x.preventDefault(), x.dataTransfer.dropEffect = "move", N !== w.id && k(w.id);
                },
                onDragLeave: () => {
                  k((x) => x === w.id ? null : x);
                },
                onDrop: (x) => {
                  x.preventDefault();
                  const j = x.dataTransfer.getData("text/plain");
                  j && U(j, w.id), C(null), k(null);
                },
                onDragEnd: () => {
                  C(null), k(null);
                },
                children: [
                  /* @__PURE__ */ d("span", { className: "zone-list-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }),
                  /* @__PURE__ */ A("span", { className: "zone-list-item-content", children: [
                    /* @__PURE__ */ d("span", { children: w.zoneLabel || w.zoneKey }),
                    /* @__PURE__ */ d("span", { className: "zone-list-item-type", children: w.zoneType === "Heading" ? `Heading · ${w.headingLevel ?? Nn}` : w.zoneType }),
                    w.isLocked && /* @__PURE__ */ d("span", { className: "zone-list-item-lock", children: "Locked" })
                  ] }),
                  /* @__PURE__ */ d(
                    wP,
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
                        fC(g, w.target.value)
                      );
                    },
                    children: TP.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
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
                      value: g.headingLevel ?? Nn,
                      onChange: (w) => D(g.id, {
                        headingLevel: w.target.value
                      }),
                      children: Iv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
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
              ea(o.channelType) && /* @__PURE__ */ A("div", { className: "position-fields", children: [
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
                      children: Dv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
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
                      value: g.offsetDirection ?? _l,
                      onChange: (w) => D(g.id, {
                        offsetDirection: w.target.value
                      }),
                      children: Hv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
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
            !ea(o.channelType) && /* @__PURE__ */ d("p", { className: "zone-sort-hint", children: "You can also drag zones in the list to reorder." }),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-remove", onClick: () => Re(g.id), children: "Remove zone" })
          ] }) : /* @__PURE__ */ d("p", { className: "no-zone-selected", children: "Select a zone to edit its properties, or add a new one." }) })
        ] }),
        /* @__PURE__ */ d("div", { className: "template-admin-structure-actions", children: /* @__PURE__ */ d(
          "p",
          {
            className: `template-admin-autosave-status${l === "error" ? " template-admin-autosave-status-error" : l === "saved" ? " template-admin-autosave-status-saved" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: M
          }
        ) })
      ] }),
      preview: /* @__PURE__ */ d(
        Rf,
        {
          template: o,
          layoutMode: ea(o.channelType) ? "canvas" : "stacked",
          onDimensionsChange: R
        }
      )
    }
  );
}
function EP({ template: e, onDuplicated: t }) {
  const n = IC(e.channelType), [r, o] = E.useState(n[0] ?? "Social"), [i, s] = E.useState(`${e.templateName} (${n[0] ?? "Social"})`), [a, l] = E.useState(!1), [c, f] = E.useState(null), [u, p] = E.useState(null);
  if (n.length === 0)
    return null;
  const v = (T) => {
    o(T), s(`${e.templateName} (${T})`);
  }, S = async () => {
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
        onClick: () => void S(),
        disabled: a || !i.trim(),
        children: `Duplicate as ${r}`
      }
    ),
    /* @__PURE__ */ d(_o, { active: a, className: "template-duplicate-saving" }),
    c && /* @__PURE__ */ d("p", { className: "template-duplicate-message", children: c }),
    u && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-duplicate-error", children: u })
  ] });
}
function AP({
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
          mP,
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
          EP,
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
      kP,
      {
        template: e,
        onSaved: t,
        pendingFigmaImport: i,
        onPendingFigmaImportApplied: () => s(null)
      }
    )
  ] });
}
function CP({
  client: e,
  entity: t,
  options: n,
  config: r,
  contentHubApi: o,
  searchIdentifier: i,
  selectionPoolIdentifier: s
}) {
  const [a, l] = E.useState(null), [c, f] = E.useState(null), [u, p] = E.useState(null), [v, S] = E.useState(!0), [T, _] = E.useState(null), [h, m] = E.useState("asset"), [g, b] = E.useState(0), [C, N] = E.useState(!1), [k, L] = E.useState(null), U = (w) => {
    m(w), !(w !== "asset" || !(c != null && c.id)) && re.getTemplate(c.id).then((x) => f(x)).catch((x) => {
      yn(
        "template reload",
        x,
        `Could not refresh template ${c.id} when switching to the asset tab.`
      );
    });
  };
  E.useEffect(() => {
    VC(e ?? null);
  }, [e]), E.useEffect(() => {
    let w = !1;
    async function x() {
      const j = await Vb(
        e,
        n ?? (e == null ? void 0 : e.options),
        t,
        r
      );
      w || (l(j), j.allowTemplateZoneEditing && V("allowTemplateZoneEditing", "Template zone editing enabled from Configuration"));
    }
    return x(), () => {
      w = !0;
    };
  }, [e, r, t, n]), E.useEffect(() => {
    a != null && a.contentHubProxyBase && ZC(a.contentHubProxyBase);
  }, [a == null ? void 0 : a.contentHubProxyBase]), E.useEffect(() => {
    WC(a == null ? void 0 : a.searchComponentId);
  }, [a == null ? void 0 : a.searchComponentId]), E.useEffect(() => {
    if (!a)
      return;
    const w = a;
    let x = !1;
    async function j() {
      S(!0), _(null), pE();
      const Q = w.templateId || (w.builderMode === "admin" ? w.marketingAssetId : void 0);
      if (!Q) {
        const Z = w.marketingAssetId ? TE(t, r) : Qn();
        yn("templateId", Z), _(Z), S(!1);
        return;
      }
      if (w.builderMode !== "admin" && !w.marketingAssetId) {
        const Z = Qn();
        yn("marketingAssetId", Z), _(Z), S(!1);
        return;
      }
      V("templateId", `Using template ${Q}`), w.marketingAssetId && V("marketingAssetId", `Using marketing asset ${w.marketingAssetId}`);
      try {
        const Z = await re.getTemplate(Q);
        if (x)
          return;
        f(Z);
        const Me = Zm(w, Z.channelType);
        if (Me === "admin") {
          p(null), Hm({
            builderMode: Me,
            templateId: Z.id,
            templateName: Z.templateName,
            marketingAssetId: w.marketingAssetId,
            brandKitId: w.brandKitId ?? Z.brandKitId,
            channelType: Z.channelType,
            zoneCount: Z.zones.length
          });
          return;
        }
        if (!w.marketingAssetId) {
          const Be = Qn();
          yn("marketingAssetId", Be), _(Be);
          return;
        }
        const be = await re.getMarketingAsset(w.marketingAssetId);
        if (x)
          return;
        p(be);
        const Ne = w.brandKitId ?? Z.brandKitId;
        Hm({
          builderMode: Me,
          templateId: Z.id,
          templateName: Z.templateName,
          marketingAssetId: be.id,
          brandKitId: Ne,
          channelType: Z.channelType,
          zoneCount: Z.zones.length,
          zoneValueCount: be.zoneValues.length
        });
      } catch (Z) {
        if (x)
          return;
        yn("load", Z, "Marketing builder could not load required entities."), _(Z instanceof Error ? Z.message : "Failed to load marketing builder data.");
      } finally {
        x || S(!1);
      }
    }
    return j(), () => {
      x = !0;
    };
  }, [r, t, a]);
  const R = Zm(a ?? {}, c == null ? void 0 : c.channelType), D = (a == null ? void 0 : a.brandKitId) ?? (c == null ? void 0 : c.brandKitId), z = (a == null ? void 0 : a.userHasOverridePermission) ?? !1, Y = i ?? (a == null ? void 0 : a.searchIdentifier), Re = s ?? (a == null ? void 0 : a.selectionPoolIdentifier), qe = {
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
  }, M = async () => {
    if (c) {
      N(!0), L(null);
      try {
        const w = await qN(
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
  }, $ = eP(c);
  return !a || v ? /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading marketing builder..." }) : T ? /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: T }) : c ? D ? /* @__PURE__ */ d(Kb, { value: qe, children: /* @__PURE__ */ d(Bb, { brandKitId: D, children: /* @__PURE__ */ A("div", { className: "marketing-builder", children: [
    (R === "admin" || h === "template") && /* @__PURE__ */ A(We, { children: [
      R !== "admin" && /* @__PURE__ */ d(
        Is,
        {
          activeTab: h,
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: U
        }
      ),
      R === "admin" && /* @__PURE__ */ d(
        Is,
        {
          activeTab: "template",
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: () => {
          },
          showAssetTab: !1
        }
      ),
      $ ? /* @__PURE__ */ d(
        QN,
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
              onClick: () => void M(),
              children: C ? "Creating…" : "Create canvas template"
            }
          ),
          k ? /* @__PURE__ */ d("div", { className: "marketing-builder-error", children: k }) : null
        ] }),
        /* @__PURE__ */ d(
          AP,
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
        Is,
        {
          activeTab: h,
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: U
        }
      ),
      /* @__PURE__ */ d(
        Bc,
        {
          brandKitId: D,
          currentTemplateId: c.id,
          marketingAssetId: u.id,
          refreshKey: g,
          onTemplateChange: W
        }
      ),
      $ ? /* @__PURE__ */ d(
        Ah,
        {
          template: c,
          marketingAsset: u,
          designerDocumentProperty: a.designerDocumentProperty,
          designerInstanceProperty: a.designerInstanceProperty,
          onSaved: p
        }
      ) : /* @__PURE__ */ d(
        oP,
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
        Is,
        {
          activeTab: h,
          zoneCount: c.zones.length,
          templateName: c.templateName,
          onTabChange: U
        }
      ),
      $ ? /* @__PURE__ */ A(We, { children: [
        /* @__PURE__ */ d(
          Bc,
          {
            brandKitId: D,
            currentTemplateId: c.id,
            marketingAssetId: u.id,
            refreshKey: g,
            onTemplateChange: W
          }
        ),
        /* @__PURE__ */ d(
          Ah,
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
          Bc,
          {
            brandKitId: D,
            currentTemplateId: c.id,
            marketingAssetId: u.id,
            refreshKey: g,
            onTemplateChange: W
          }
        ),
        /* @__PURE__ */ d(
          pN,
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
function bP(e) {
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
function NP(e) {
  const t = Hy(e);
  return ae("startup", "CHMarketingBuilder initialised"), {
    async render(n) {
      var i, s, a;
      const r = n.config ? typeof n.config == "string" ? "json-string" : Object.keys(n.config).join(", ") || "(empty object)" : "(none)";
      ae(
        "context",
        `entityId=${((s = (i = n.entity) == null ? void 0 : i.systemProperties) == null ? void 0 : s.id) ?? ((a = n.options) == null ? void 0 : a.entityId) ?? "n/a"}, config=${r}`
      );
      const o = bP(n.config);
      t.render(
        /* @__PURE__ */ d(cE, { theme: n.theme, children: /* @__PURE__ */ d(
          CP,
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
  NP as default
};
