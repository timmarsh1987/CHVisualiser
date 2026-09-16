(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".marketing-builder{--mb-primary: #00a651;--mb-primary-hover: #1db86a;--mb-primary-active: #008a44;--mb-primary-soft: #e6f7ed;--mb-primary-border: #8fd4a8;--mb-accent: #00a651;--mb-text: #000000;--mb-muted: #6b716e;--mb-background: #f4f7f5;--mb-surface: #ffffff;--mb-border: #e2e8e4;--mb-font: Arial, Helvetica, sans-serif;font-family:var(--mb-font);color:var(--mb-text)}.marketing-builder-status{padding:16px;font-size:14px;color:#555}.marketing-builder-error{color:#b71c1c}.email-builder-editor{max-width:none;margin:0;border:none;padding:0;background:transparent}.builder-split{display:flex;gap:16px;align-items:stretch;min-height:72vh}.builder-split-panel{flex:1 1 50%;min-width:0;display:flex;flex-direction:column;border:1px solid #e0e0e0;border-radius:6px;background:#fff;overflow:hidden}.builder-split-heading{margin:0;padding:12px 16px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;border-bottom:1px solid #ececec;background:#fafafa}.builder-split-structure-body,.builder-split-preview-body{flex:1;min-height:0;display:flex;flex-direction:column}.builder-split-structure-body{overflow:auto;padding:16px}.builder-split-preview-body{padding:16px;background:var(--mb-background)}.template-admin-structure{display:flex;flex-direction:column;gap:16px;min-height:100%}.template-admin-structure-grid{display:grid;grid-template-columns:minmax(180px,220px) minmax(0,1fr);gap:16px;align-items:start}.template-admin-structure-actions{margin-top:auto;padding-top:12px;border-top:1px solid #ececec}.template-admin-autosave-status{margin:0;font-size:12px;color:#666}.template-admin-autosave-status-saved{color:#2e7d32}.template-admin-autosave-status:not(.template-admin-autosave-status-saved):not(.template-admin-autosave-status-error){color:var(--mb-primary, #00755f);font-style:italic}.template-admin-autosave-status-error{color:#c62828}.saving-status-message{margin:8px 0 0;font-size:12px;line-height:1.45;color:var(--mb-primary, #00755f);font-style:italic;animation:saving-status-fade .35s ease}@keyframes saving-status-fade{0%{opacity:0}to{opacity:1}}.template-properties-form{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-properties-form h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-properties-form label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-properties-form input,.template-properties-form select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-properties-meta{margin:0;font-size:11px;color:#888}.template-dimensions-section{margin-top:4px;padding-top:12px;border-top:1px solid #ececec}.template-dimensions-heading{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:10px}.template-dimensions-heading h5{margin:0;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#666}.template-dimensions-summary{font-size:11px;font-weight:600;color:var(--mb-primary, #00755f);white-space:nowrap}.template-dimension-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.template-dimensions-hint{margin:0 0 4px;font-size:11px;line-height:1.4;color:#888}.live-preview-canvas-wrap,.live-preview-email-wrap{display:flex;flex-direction:column;gap:8px;height:100%}.live-preview-dimensions-badge{margin:0;align-self:center;padding:4px 10px;border-radius:999px;background:var(--mb-primary-soft, #e4f7f4);color:var(--mb-primary, #00755f);font-size:11px;font-weight:600;letter-spacing:.02em}.template-admin-preview-canvas-fill{flex:1;min-height:100%;margin:0}.live-preview-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text,.live-preview-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text{font-size:16px;line-height:1.5}.live-preview-canvas .zone-text-empty:empty:before,.live-preview-canvas .zone-heading.zone-text-empty:empty:before{color:var(--mb-muted, #717171);font-style:italic}.template-admin-preview-empty{margin:0;padding:24px;text-align:center;color:#888;font-size:13px}.email-builder-structure{display:flex;flex-direction:column;gap:12px}.email-builder-override-structure{display:flex;flex-direction:column;gap:12px;min-height:100%}.email-builder-override-structure .raw-html-editor{flex:1;min-height:420px}.email-builder-zone-row{margin-bottom:12px}.zone-stacked{min-height:48px}.zone-stacked.zone-image{min-height:180px}.asset-zone-structure-content .zone-logo{padding:8px 0}.zone-logo-placeholder{display:inline-flex;align-items:center;justify-content:center;min-width:120px;min-height:48px;padding:10px 20px;border:1px solid var(--mb-border);border-radius:4px;background:var(--mb-surface);color:var(--mb-muted);font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.logo-picker{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.logo-picker-compact{gap:8px}.logo-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.logo-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.logo-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.logo-picker-preview{display:flex;align-items:center;justify-content:center;min-height:56px;padding:8px;border-radius:4px;background:#f7f7f7}.logo-picker-image{display:block;max-width:100%;max-height:48px;width:auto;height:auto;object-fit:contain}.image-picker{display:flex;flex-direction:column;gap:10px}.image-picker-compact .image-picker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.image-picker-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.image-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.image-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.image-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.image-picker-preview{display:flex;align-items:center;justify-content:center;min-height:72px;padding:8px;border-radius:4px;background:#f7f7f7;overflow:hidden}.image-picker-image{max-width:100%;max-height:72px;object-fit:contain}.image-picker-label{font-size:11px;color:#424242;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.image-picker-hint,.image-picker-loading,.image-picker-error{font-size:12px;color:#666}.image-picker-error{color:#c62828}.image-picker-hint,.image-picker-loading{margin:0 0 10px;line-height:1.45}.image-picker-selected-preview{margin-bottom:10px}.image-picker-selected-image{display:block;max-width:100%;max-height:160px;border-radius:6px;border:1px solid #ddd;object-fit:contain}.image-picker-footer{display:flex;justify-content:flex-start}.image-picker-url-toggle,.image-picker-url-apply{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:6px 10px;font-size:12px;cursor:pointer}.image-picker-url-form{display:flex;gap:8px}.image-picker-url-input{flex:1;padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection{display:flex;flex-direction:column;gap:12px;padding:12px;border:1px solid var(--mb-border, #e8e8e8);border-radius:8px;background:#fafafa}.template-zone-asset-collection-title{margin:0;font-size:14px}.template-zone-asset-collection-intro,.template-zone-asset-collection-hint,.template-zone-asset-collection-empty,.template-zone-asset-collection-error{margin:0;font-size:12px;color:#666;line-height:1.45}.template-zone-asset-collection-error{color:#c62828}.template-zone-asset-collection-field{display:flex;flex-direction:column;gap:6px;font-size:12px}.template-zone-asset-collection-field input{padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection-section{display:flex;flex-direction:column;gap:8px}.template-zone-asset-collection-section-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.template-zone-asset-collection-section-header h5{margin:0;font-size:13px}.template-zone-asset-collection-status{font-size:11px;color:#888}.template-zone-asset-collection-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px}.template-zone-asset-card{display:flex;flex-direction:column;gap:6px;padding:8px;border:1px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff}.template-zone-asset-card img{width:100%;height:72px;object-fit:cover;border-radius:4px;background:#f2f2f2}.template-zone-asset-card span{font-size:11px;color:#424242;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.template-zone-asset-add,.template-zone-asset-remove{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:5px 8px;font-size:11px;cursor:pointer}.template-zone-asset-add:disabled{opacity:.55;cursor:not-allowed}.zone-image-placeholder{padding:16px;border:1px dashed #ccc;border-radius:6px;color:#888;font-size:12px;text-align:center}.logo-picker-label{font-size:11px;font-weight:600;color:var(--mb-text, #18181b)}.zone-stacked-logo{padding:8px 0;text-align:center}.zone-stacked.zone-text{font-size:18px;line-height:1.4;padding:8px 0}.zone-stacked.zone-heading{line-height:1.25;padding:8px 0}.zone-heading[data-heading-level=H1]{font-size:2rem}.zone-heading[data-heading-level=H2]{font-size:1.75rem}.zone-heading[data-heading-level=H3]{font-size:1.5rem}.zone-heading[data-heading-level=H4]{font-size:1.25rem}.zone-heading[data-heading-level=H5]{font-size:1.125rem}.zone-heading[data-heading-level=H6]{font-size:1rem}.zone-text-empty:empty:before{content:attr(data-placeholder);color:#999}.zone-stacked.zone-cta{padding:12px 0}.template-setup-panel{display:flex;flex-direction:column;gap:16px}.figma-import-panel{margin-bottom:16px;padding:14px 16px;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa}.figma-import-panel h4{margin:0 0 8px;font-size:14px;font-weight:600}.figma-import-hint{margin:0 0 12px;font-size:12px;color:#57606a;line-height:1.45}.figma-import-hint code{font-size:11px}.figma-import-panel label{display:flex;flex-direction:column;gap:4px;margin-bottom:10px;font-size:12px;font-weight:500}.figma-import-panel input[type=text],.figma-import-panel input:not([type]){padding:6px 8px;border:1px solid #d0d7de;border-radius:4px;font-size:13px}.figma-import-button{margin-right:8px;margin-bottom:8px;padding:6px 12px;border:1px solid #d0d7de;border-radius:4px;background:#fff;font-size:13px;cursor:pointer}.figma-import-button:disabled{opacity:.55;cursor:not-allowed}.figma-import-button-primary{background:#1565c0;border-color:#1565c0;color:#fff}.figma-import-preview{margin-top:10px;padding-top:10px;border-top:1px solid #d8dee4}.figma-import-preview-meta{margin:0 0 8px;font-size:12px}.figma-import-zone-list{margin:0 0 10px;padding-left:18px;font-size:12px;line-height:1.5}.figma-import-warning{margin:0 0 8px;font-size:12px;color:#9a3412}.figma-import-checkbox{flex-direction:row!important;align-items:center;gap:8px!important;font-weight:400!important}.figma-import-checkbox input{margin:0}.figma-import-message{margin:8px 0 0;font-size:12px;color:#1a7f37}.figma-import-error{margin-top:8px}.figma-import-saving{margin:8px 0}.template-duplicate-panel{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-duplicate-panel h4{margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-duplicate-hint{margin:0 0 12px;font-size:12px;color:#666;line-height:1.45}.template-duplicate-panel label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-duplicate-panel input,.template-duplicate-panel select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-duplicate-button{margin-top:4px;background:var(--mb-primary, #00755f);color:#fff;border:none;padding:8px 14px;border-radius:4px;cursor:pointer;font-size:13px}.template-duplicate-button:disabled{opacity:.6;cursor:not-allowed}.template-duplicate-message{margin:10px 0 0;font-size:12px;color:#2e7d32;line-height:1.4}.template-duplicate-error{margin:8px 0 0;font-size:12px}.template-selector{margin-bottom:16px;padding:12px;border:1px solid #e8e8e8;border-radius:6px;background:#fcfcfc}.template-selector-label{display:block;margin:0;font-size:12px;color:#555}.template-selector-label select{display:block;width:100%;margin-top:6px;padding:8px 10px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px;background:#fff}.template-selector-hint,.template-selector-status{margin:8px 0 0;font-size:12px;color:#666;line-height:1.4}.template-selector-error{margin:8px 0 0;font-size:12px}.template-setup-banner{border:1px solid #ffb74d;background:#fff8e1;border-radius:6px;padding:16px}.template-setup-banner h3{margin:0 0 8px;font-size:16px}.template-setup-banner p{margin:0 0 8px;font-size:14px;line-height:1.5;color:#555}.template-setup-hint{font-size:13px;color:#777}.template-setup-banner-info{border-color:var(--mb-primary-border);background:var(--mb-primary-soft)}.marketing-builder-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;padding:0 4px}.marketing-builder-tab-bar{flex-wrap:wrap}.marketing-builder-tabs{display:inline-flex;border:1px solid #d0d0d0;border-radius:6px;overflow:hidden;background:#fff}.marketing-builder-tab{border:none;background:transparent;color:#555;padding:8px 16px;cursor:pointer;font-size:14px;font-weight:500}.marketing-builder-tab+.marketing-builder-tab{border-left:1px solid #d0d0d0}.marketing-builder-tab:hover{background:#f5f5f5}.marketing-builder-tab-active{background:var(--mb-primary);color:#fff}.marketing-builder-tab-active:hover{background:var(--mb-primary-active)}.template-zone-edit-toggle{background:#fff;color:var(--mb-primary);border:1px solid var(--mb-primary);padding:8px 16px;border-radius:4px;cursor:pointer;font-size:14px;font-weight:500}.template-zone-edit-toggle:hover{background:var(--mb-primary-soft)}.template-zone-edit-toggle-active{background:var(--mb-primary);color:#fff}.template-zone-edit-toggle-active:hover{background:var(--mb-primary-active)}.marketing-builder-toolbar-meta{font-size:13px;color:#666}.template-empty-message{border:1px dashed #d0d0d0;border-radius:6px;background:#fafafa;text-align:center}.template-setup-message code{font-size:12px;background:#f5f5f5;padding:2px 4px;border-radius:3px}.email-builder-error{margin-top:8px;padding:8px 12px}.email-builder-actions{display:flex;gap:12px;margin-top:8px;justify-content:flex-end;flex-wrap:wrap}.email-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.email-builder-save:disabled{opacity:.6;cursor:not-allowed}.email-builder-preview{max-width:600px;margin:24px auto 0}.email-builder-preview-label{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;margin-bottom:8px}.email-builder-preview-frame{width:100%;height:500px;border:1px solid #e0e0e0}.email-builder-preview-frame-fill{width:100%;height:100%;min-height:520px;border:1px solid #e0e0e0;background:#fff}.raw-html-editor{width:100%;min-height:400px;font-family:monospace;font-size:13px;padding:12px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.social-builder-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);margin:0 auto;overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text,.social-builder-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text{font-size:16px;line-height:1.5}.asset-zone-structure-content .zone-text,.asset-zone-structure-content .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.asset-zone-structure-content .zone-text{font-size:16px;line-height:1.5}.social-builder-canvas-fill{width:100%;max-width:100%}.social-builder-structure{display:flex;flex-direction:column;gap:12px}.social-builder-error{margin-top:8px;padding:8px 12px}.asset-structure-panel{display:flex;flex-direction:column;gap:12px}.asset-structure-panel-hint{margin:0;font-size:12px;color:#777;line-height:1.5}.asset-zone-structure-warning{margin:0;padding:8px 10px;font-size:12px;line-height:1.4;color:#9a3412;background:#fff7ed;border:1px solid #fed7aa;border-radius:4px}.asset-zone-structure-key-hint{margin:0 0 8px;font-size:12px;color:#777}.asset-zone-structure-key-hint code{font-size:11px}.asset-zone-structure-list{display:flex;flex-direction:column;gap:8px}.asset-zone-structure-row{border:1px solid #e4e4e4;border-radius:6px;overflow:hidden;background:#fff}.asset-zone-structure-header{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;border:none;background:#fafafa;cursor:pointer;text-align:left}.asset-zone-structure-header:hover{background:#f3f3f3}.asset-zone-structure-title{font-weight:600;font-size:13px;color:#333}.asset-zone-structure-type{font-size:11px;color:#888}.asset-zone-structure-chevron{margin-left:auto;color:#888;font-size:12px}.asset-zone-structure-body{padding:12px;border-top:1px solid #ececec;display:flex;flex-direction:column;gap:12px}.asset-zone-structure-content-label{margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#888}.asset-zone-structure-content .asset-zone-layout-fields{margin-top:12px;padding-top:12px;border-top:1px solid #ececec}.asset-structure-panel .asset-zone-layout-grid,.template-admin-properties .asset-zone-layout-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.asset-zone-layout-fields{padding-top:4px;border-top:1px solid #ececec}.asset-zone-layout-fields label{display:block;margin-bottom:0;font-size:11px;color:#666}.asset-zone-layout-fields input,.asset-zone-layout-fields select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:12px}.asset-zone-layout-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.asset-zone-layout-grid-position{margin-top:8px;grid-template-columns:repeat(4,minmax(0,1fr))}.asset-layout-json-preview{border:1px dashed #d0d0d0;border-radius:6px;padding:8px 12px;background:#fafafa}.asset-layout-json-preview summary{cursor:pointer;font-size:12px;color:#666}.asset-layout-json-preview pre{margin:10px 0 0;padding:10px;background:#fff;border:1px solid #ececec;border-radius:4px;font-size:11px;line-height:1.4;overflow:auto;max-height:220px}.social-builder-actions{display:flex;gap:12px;margin-top:16px;justify-content:flex-end;flex-wrap:wrap}.social-builder-actions .saving-status-message,.email-builder-actions .saving-status-message{flex-basis:100%;text-align:right;margin-top:0}.social-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.social-builder-save:disabled{opacity:.6;cursor:not-allowed}.override-banner{background:#fff4e5;border:1px solid #ffb74d;color:#7a4a00;padding:8px 12px;border-radius:4px;font-size:13px;margin-bottom:12px}.template-admin-zone-list,.template-admin-properties{border:1px solid #e0e0e0;border-radius:6px;padding:12px}.template-admin-zone-list h4,.template-admin-properties h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.zone-list-hint,.zone-sort-hint{margin:-4px 0 10px;font-size:11px;color:#888}.zone-layout-fields{margin:12px 0 0;padding-top:12px;border-top:1px solid #ececec}.zone-layout-fields h5{display:none}.zone-layout-center .zone-image-preview,.zone-layout-center .zone-logo-placeholder{display:block;margin-left:auto;margin-right:auto}.zone-layout-right .zone-image-preview,.zone-layout-right .zone-logo-placeholder{display:block;margin-left:auto;margin-right:0}.zone-layout-center .zone-cta-button,.zone-layout-right .zone-cta-button{display:inline-block}.zone-cta-button{cursor:text}.zone-image-collection-hint{margin:-4px 0 10px;font-size:11px;color:#888;line-height:1.4}.zone-list-item{display:flex;align-items:flex-start;gap:8px;width:100%;text-align:left;background:none;border:1px solid transparent;border-radius:4px;padding:8px;margin-bottom:4px;cursor:pointer;-webkit-user-select:none;user-select:none}.zone-list-delete{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin-top:1px;padding:0;border:none;border-radius:4px;background:transparent;color:#999;cursor:pointer}.zone-list-delete:hover{background:#ffebee;color:#d32f2f}.zone-list-delete:focus-visible{outline:2px solid var(--mb-primary);outline-offset:1px}.zone-list-item:active{cursor:grabbing}.zone-list-item-content{display:flex;flex-direction:column;align-items:flex-start;min-width:0;flex:1}.zone-list-drag-handle{color:#aaa;font-size:12px;line-height:1;padding-top:2px;cursor:grab}.zone-list-item-dragging{opacity:.45}.zone-list-item-drag-over{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item:hover{background:#f5f5f5}.zone-list-item-active{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item-type{font-size:11px;color:#888}.zone-list-item-lock{font-size:10px;color:#d32f2f;text-transform:uppercase}.zone-list-add{width:100%;border:1px dashed #b0b0b0;background:none;padding:8px;border-radius:4px;cursor:pointer;color:#555;margin-bottom:4px}.zone-list-starter{border-color:var(--mb-primary);color:var(--mb-primary)}.template-admin-properties label{display:block;margin-bottom:10px;font-size:12px;color:#555}.zone-image-selected{display:flex;flex-direction:column;gap:8px;width:100%}.zone-image-preview{width:100%;max-height:280px;object-fit:cover;border-radius:4px;border:1px solid #e0e0e0}.social-builder-canvas .zone-image-preview{width:100%;height:100%;max-height:none;object-fit:contain;border-radius:0;border:0}.zone-image-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.zone-image-clear{border:1px solid #d32f2f;background:#fff;color:#d32f2f;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker{position:relative}.asset-picker-compact .asset-picker-trigger{padding:6px 10px;font-size:12px}.asset-picker-mode-tabs{display:flex;gap:4px;margin-bottom:10px}.asset-picker-mode-tab{flex:1;border:1px solid #d0d0d0;background:#fafafa;color:#555;padding:6px 8px;border-radius:4px;cursor:pointer;font-size:12px}.asset-picker-mode-tab-active{border-color:var(--mb-primary);background:var(--mb-primary-soft);color:var(--mb-primary-active)}.asset-picker-url-form label{display:block;margin-bottom:8px;font-size:12px;color:#555}.asset-picker-url-apply{width:100%;border:none;background:var(--mb-primary);color:#fff;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker-url-apply:disabled{opacity:.6;cursor:not-allowed}.asset-picker-loading,.asset-picker-error{font-size:12px;margin-bottom:8px}.asset-picker-error{color:#b71c1c}.template-admin-properties input,.template-admin-properties select,.template-admin-properties textarea{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.checkbox-label{display:flex!important;align-items:center;gap:6px}.checkbox-label input{width:auto!important;margin:0!important}.position-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.zone-remove{background:none;border:1px solid #d32f2f;color:#d32f2f;padding:6px 12px;border-radius:4px;cursor:pointer;margin-top:8px}.no-zone-selected{color:#888;font-size:13px}.template-admin-preview-canvas{border:1px solid #eee;background:#fafafa;margin-bottom:12px;overflow:hidden}.template-admin-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;width:100%;max-width:280px}.template-admin-save:disabled{opacity:.6;cursor:not-allowed}.template-admin-save-error{margin:8px 0 0;font-size:13px}.zone{box-sizing:border-box}.zone-locked{outline:1px dashed transparent}.zone-text{outline:1px dashed transparent;cursor:text}.zone-text:hover{outline-color:#c9c9c9}.zone-text:focus{outline:1px solid var(--mb-primary);outline-offset:2px}.zone-image{background-color:#f5f5f5;display:flex;align-items:center;justify-content:center;overflow:hidden}.zone-cta button{cursor:pointer;font-size:14px}.zone-html-editor{width:100%;min-height:80px;font-family:monospace;font-size:12px;padding:8px;border:1px solid #d0d0d0;border-radius:4px}.zone-html-preview{margin-top:8px;border:1px dashed #d0d0d0;padding:8px}.zone-html-locked{pointer-events:none}.asset-picker-trigger{border:1px dashed #b0b0b0;background:transparent;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px;color:#555}.asset-picker-panel{position:absolute;z-index:10;background:#fff;border:1px solid #d0d0d0;border-radius:6px;box-shadow:0 4px 16px #0000001f;padding:12px;width:320px}.asset-picker-search{width:100%;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;margin-bottom:8px}.asset-picker-hint{font-size:12px;color:#888;margin-bottom:8px}.asset-picker-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-height:240px;overflow-y:auto}.asset-picker-thumb{border:none;background:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;font-size:11px}.asset-picker-thumb img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px}.asset-picker-empty{font-size:12px;color:#888;padding:8px}.eject-button{background:transparent;border:1px solid #d32f2f;color:#d32f2f;padding:10px 16px;border-radius:4px;cursor:pointer;font-size:13px}.eject-modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;z-index:100}.eject-modal{background:#fff;border-radius:8px;padding:24px;width:420px;max-width:90vw}.eject-modal h3{margin:0 0 8px;font-size:16px;color:#b71c1c}.eject-modal p{font-size:13px;color:#555;line-height:1.5}.eject-modal textarea{width:100%;min-height:70px;margin:12px 0;padding:8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.eject-modal-actions{display:flex;justify-content:flex-end;gap:8px}.eject-confirm{background:#d32f2f;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer}.eject-confirm:disabled{opacity:.5;cursor:not-allowed}.designer-create-banner{margin:12px 0 16px;padding:12px 14px;border:.5px solid #d3d1c7;border-radius:8px;background:#f8f7f4;display:flex;flex-direction:column;gap:10px;align-items:flex-start}.designer-create-banner p{margin:0;font-size:13px;color:#2c2c2a}.designer-asset-builder{display:flex;flex-direction:column;gap:8px}.designer-asset-builder-actions{display:flex;align-items:center;gap:10px}.chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:min(80vh,720px);min-height:520px;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:10px;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;min-width:56px;background:#000000;color:#fff;border-radius:4px;padding:5px 10px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-file-input{display:none}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr auto auto auto;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{flex-direction:row;align-items:center;gap:8px;color:var(--chd-text)}.chd-field-checkbox input{width:auto}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:linear-gradient(45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,linear-gradient(-45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,#f0eee8;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:hidden}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function N0(e, t) {
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
function b0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oh = { exports: {} }, Na = {}, ih = { exports: {} }, J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi = Symbol.for("react.element"), x0 = Symbol.for("react.portal"), P0 = Symbol.for("react.fragment"), z0 = Symbol.for("react.strict_mode"), L0 = Symbol.for("react.profiler"), _0 = Symbol.for("react.provider"), O0 = Symbol.for("react.context"), R0 = Symbol.for("react.forward_ref"), $0 = Symbol.for("react.suspense"), M0 = Symbol.for("react.memo"), I0 = Symbol.for("react.lazy"), Bf = Symbol.iterator;
function D0(e) {
  return e === null || typeof e != "object" ? null : (e = Bf && e[Bf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var sh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ah = Object.assign, lh = {};
function ko(e, t, n) {
  this.props = e, this.context = t, this.refs = lh, this.updater = n || sh;
}
ko.prototype.isReactComponent = {};
ko.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ko.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function uh() {
}
uh.prototype = ko.prototype;
function Dc(e, t, n) {
  this.props = e, this.context = t, this.refs = lh, this.updater = n || sh;
}
var Hc = Dc.prototype = new uh();
Hc.constructor = Dc;
ah(Hc, ko.prototype);
Hc.isPureReactComponent = !0;
var Kf = Array.isArray, ch = Object.prototype.hasOwnProperty, Fc = { current: null }, dh = { key: !0, ref: !0, __self: !0, __source: !0 };
function fh(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      ch.call(t, r) && !dh.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1)
    o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++)
      l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
      o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Fi, type: e, key: i, ref: s, props: o, _owner: Fc.current };
}
function H0(e, t) {
  return { $$typeof: Fi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Uc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fi;
}
function F0(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Zf = /\/+/g;
function Fl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? F0("" + e.key) : t.toString(36);
}
function Ps(e, t, n, r, o) {
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
          case Fi:
          case x0:
            s = !0;
        }
    }
  if (s)
    return s = e, o = o(s), e = r === "" ? "." + Fl(s, 0) : r, Kf(o) ? (n = "", e != null && (n = e.replace(Zf, "$&/") + "/"), Ps(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Uc(o) && (o = H0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Zf, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Kf(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Fl(i, a);
      s += Ps(i, t, n, l, o);
    }
  else if (l = D0(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, l = r + Fl(i, a++), s += Ps(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function ss(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ps(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function U0(e) {
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
var ut = { current: null }, zs = { transition: null }, j0 = { ReactCurrentDispatcher: ut, ReactCurrentBatchConfig: zs, ReactCurrentOwner: Fc };
function ph() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = { map: ss, forEach: function(e, t, n) {
  ss(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ss(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ss(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Uc(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
J.Component = ko;
J.Fragment = P0;
J.Profiler = L0;
J.PureComponent = Dc;
J.StrictMode = z0;
J.Suspense = $0;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j0;
J.act = ph;
J.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ah({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Fc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (l in t)
      ch.call(t, l) && !dh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++)
      a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Fi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
J.createContext = function(e) {
  return e = { $$typeof: O0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: _0, _context: e }, e.Consumer = e;
};
J.createElement = fh;
J.createFactory = function(e) {
  var t = fh.bind(null, e);
  return t.type = e, t;
};
J.createRef = function() {
  return { current: null };
};
J.forwardRef = function(e) {
  return { $$typeof: R0, render: e };
};
J.isValidElement = Uc;
J.lazy = function(e) {
  return { $$typeof: I0, _payload: { _status: -1, _result: e }, _init: U0 };
};
J.memo = function(e, t) {
  return { $$typeof: M0, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function(e) {
  var t = zs.transition;
  zs.transition = {};
  try {
    e();
  } finally {
    zs.transition = t;
  }
};
J.unstable_act = ph;
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
ih.exports = J;
var E = ih.exports;
const B0 = /* @__PURE__ */ b0(E), bu = /* @__PURE__ */ N0({
  __proto__: null,
  default: B0
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
var K0 = E, Z0 = Symbol.for("react.element"), V0 = Symbol.for("react.fragment"), W0 = Object.prototype.hasOwnProperty, Y0 = K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, G0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function mh(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    W0.call(t, r) && !G0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Z0, type: e, key: i, ref: s, props: o, _owner: Y0.current };
}
Na.Fragment = V0;
Na.jsx = mh;
Na.jsxs = mh;
oh.exports = Na;
var jc = oh.exports;
const at = jc.Fragment, d = jc.jsx, C = jc.jsxs;
var hh = { exports: {} }, bt = {}, gh = { exports: {} }, yh = {};
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
  function t(R, M) {
    var w = R.length;
    R.push(M);
    e:
      for (; 0 < w; ) {
        var P = w - 1 >>> 1, U = R[P];
        if (0 < o(U, M))
          R[P] = M, R[w] = U, w = P;
        else
          break e;
      }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0)
      return null;
    var M = R[0], w = R.pop();
    if (w !== M) {
      R[0] = w;
      e:
        for (var P = 0, U = R.length, V = U >>> 1; P < V; ) {
          var Q = 2 * (P + 1) - 1, Re = R[Q], $e = Q + 1, Me = R[$e];
          if (0 > o(Re, w))
            $e < U && 0 > o(Me, Re) ? (R[P] = Me, R[$e] = w, P = $e) : (R[P] = Re, R[Q] = w, P = Q);
          else if ($e < U && 0 > o(Me, w))
            R[P] = Me, R[$e] = w, P = $e;
          else
            break e;
        }
    }
    return M;
  }
  function o(R, M) {
    var w = R.sortIndex - M.sortIndex;
    return w !== 0 ? w : R.id - M.id;
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
  var l = [], u = [], c = 1, f = null, p = 3, v = !1, k = !1, T = !1, L = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(R) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null)
        r(u);
      else if (M.startTime <= R)
        r(u), M.sortIndex = M.expirationTime, t(l, M);
      else
        break;
      M = n(u);
    }
  }
  function b(R) {
    if (T = !1, h(R), !k)
      if (n(l) !== null)
        k = !0, Ee(A);
      else {
        var M = n(u);
        M !== null && W(b, M.startTime - R);
      }
  }
  function A(R, M) {
    k = !1, T && (T = !1, y(z), z = -1), v = !0;
    var w = p;
    try {
      for (h(M), f = n(l); f !== null && (!(f.expirationTime > M) || R && !D()); ) {
        var P = f.callback;
        if (typeof P == "function") {
          f.callback = null, p = f.priorityLevel;
          var U = P(f.expirationTime <= M);
          M = e.unstable_now(), typeof U == "function" ? f.callback = U : f === n(l) && r(l), h(M);
        } else
          r(l);
        f = n(l);
      }
      if (f !== null)
        var V = !0;
      else {
        var Q = n(u);
        Q !== null && W(b, Q.startTime - M), V = !1;
      }
      return V;
    } finally {
      f = null, p = w, v = !1;
    }
  }
  var N = !1, S = null, z = -1, j = 5, _ = -1;
  function D() {
    return !(e.unstable_now() - _ < j);
  }
  function H() {
    if (S !== null) {
      var R = e.unstable_now();
      _ = R;
      var M = !0;
      try {
        M = S(!0, R);
      } finally {
        M ? G() : (N = !1, S = null);
      }
    } else
      N = !1;
  }
  var G;
  if (typeof m == "function")
    G = function() {
      m(H);
    };
  else if (typeof MessageChannel < "u") {
    var ze = new MessageChannel(), Je = ze.port2;
    ze.port1.onmessage = H, G = function() {
      Je.postMessage(null);
    };
  } else
    G = function() {
      L(H, 0);
    };
  function Ee(R) {
    S = R, N || (N = !0, G());
  }
  function W(R, M) {
    z = L(function() {
      R(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    k || v || (k = !0, Ee(A));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(R) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = p;
    }
    var w = p;
    p = M;
    try {
      return R();
    } finally {
      p = w;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, M) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var w = p;
    p = R;
    try {
      return M();
    } finally {
      p = w;
    }
  }, e.unstable_scheduleCallback = function(R, M, w) {
    var P = e.unstable_now();
    switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? P + w : P) : w = P, R) {
      case 1:
        var U = -1;
        break;
      case 2:
        U = 250;
        break;
      case 5:
        U = 1073741823;
        break;
      case 4:
        U = 1e4;
        break;
      default:
        U = 5e3;
    }
    return U = w + U, R = { id: c++, callback: M, priorityLevel: R, startTime: w, expirationTime: U, sortIndex: -1 }, w > P ? (R.sortIndex = w, t(u, R), n(l) === null && R === n(u) && (T ? (y(z), z = -1) : T = !0, W(b, w - P))) : (R.sortIndex = U, t(l, R), k || v || (k = !0, Ee(A))), R;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(R) {
    var M = p;
    return function() {
      var w = p;
      p = M;
      try {
        return R.apply(this, arguments);
      } finally {
        p = w;
      }
    };
  };
})(yh);
gh.exports = yh;
var X0 = gh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J0 = E, Nt = X0;
function $(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var vh = /* @__PURE__ */ new Set(), pi = {};
function Nr(e, t) {
  uo(e, t), uo(e + "Capture", t);
}
function uo(e, t) {
  for (pi[e] = t, e = 0; e < t.length; e++)
    vh.add(t[e]);
}
var Sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xu = Object.prototype.hasOwnProperty, Q0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Vf = {}, Wf = {};
function q0(e) {
  return xu.call(Wf, e) ? !0 : xu.call(Vf, e) ? !1 : Q0.test(e) ? Wf[e] = !0 : (Vf[e] = !0, !1);
}
function ew(e, t, n, r) {
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
function tw(e, t, n, r) {
  if (t === null || typeof t > "u" || ew(e, t, n, r))
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
function ct(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ge[e] = new ct(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ge[t] = new ct(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ge[e] = new ct(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ge[e] = new ct(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ge[e] = new ct(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ge[e] = new ct(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ge[e] = new ct(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ge[e] = new ct(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ge[e] = new ct(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bc = /[\-:]([a-z])/g;
function Kc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Bc,
    Kc
  );
  Ge[t] = new ct(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Bc, Kc);
  Ge[t] = new ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Bc, Kc);
  Ge[t] = new ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ge[e] = new ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new ct("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ge[e] = new ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zc(e, t, n, r) {
  var o = Ge.hasOwnProperty(t) ? Ge[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tw(t, n, o, r) && (n = null), r || o === null ? q0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bn = J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, as = Symbol.for("react.element"), Ur = Symbol.for("react.portal"), jr = Symbol.for("react.fragment"), Vc = Symbol.for("react.strict_mode"), Pu = Symbol.for("react.profiler"), wh = Symbol.for("react.provider"), Th = Symbol.for("react.context"), Wc = Symbol.for("react.forward_ref"), zu = Symbol.for("react.suspense"), Lu = Symbol.for("react.suspense_list"), Yc = Symbol.for("react.memo"), Rn = Symbol.for("react.lazy"), Sh = Symbol.for("react.offscreen"), Yf = Symbol.iterator;
function $o(e) {
  return e === null || typeof e != "object" ? null : (e = Yf && e[Yf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, Ul;
function Yo(e) {
  if (Ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ul = t && t[1] || "";
    }
  return `
` + Ul + e;
}
var jl = !1;
function Bl(e, t) {
  if (!e || jl)
    return "";
  jl = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
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
    jl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yo(e) : "";
}
function nw(e) {
  switch (e.tag) {
    case 5:
      return Yo(e.type);
    case 16:
      return Yo("Lazy");
    case 13:
      return Yo("Suspense");
    case 19:
      return Yo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Bl(e.type, !1), e;
    case 11:
      return e = Bl(e.type.render, !1), e;
    case 1:
      return e = Bl(e.type, !0), e;
    default:
      return "";
  }
}
function _u(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case jr:
      return "Fragment";
    case Ur:
      return "Portal";
    case Pu:
      return "Profiler";
    case Vc:
      return "StrictMode";
    case zu:
      return "Suspense";
    case Lu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Th:
        return (e.displayName || "Context") + ".Consumer";
      case wh:
        return (e._context.displayName || "Context") + ".Provider";
      case Wc:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Yc:
        return t = e.displayName || null, t !== null ? t : _u(e.type) || "Memo";
      case Rn:
        t = e._payload, e = e._init;
        try {
          return _u(e(t));
        } catch {
        }
    }
  return null;
}
function rw(e) {
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
      return _u(t);
    case 8:
      return t === Vc ? "StrictMode" : "Mode";
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
function Qn(e) {
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
function kh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ow(e) {
  var t = kh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ls(e) {
  e._valueTracker || (e._valueTracker = ow(e));
}
function Eh(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = kh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Zs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ou(e, t) {
  var n = t.checked;
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Gf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Qn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ah(e, t) {
  t = t.checked, t != null && Zc(e, "checked", t, !1);
}
function Ru(e, t) {
  Ah(e, t);
  var n = Qn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? $u(e, t.type, n) : t.hasOwnProperty("defaultValue") && $u(e, t.type, Qn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Xf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function $u(e, t, n) {
  (t !== "number" || Zs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Go = Array.isArray;
function to(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Qn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Mu(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error($(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error($(92));
      if (Go(n)) {
        if (1 < n.length)
          throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Qn(n) };
}
function Ch(e, t) {
  var n = Qn(t.value), r = Qn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Qf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Nh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Iu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Nh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var us, bh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (us = us || document.createElement("div"), us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = us.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function mi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ti = {
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
}, iw = ["Webkit", "ms", "Moz", "O"];
Object.keys(ti).forEach(function(e) {
  iw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ti[t] = ti[e];
  });
});
function xh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ti.hasOwnProperty(e) && ti[e] ? ("" + t).trim() : t + "px";
}
function Ph(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = xh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var sw = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Du(e, t) {
  if (t) {
    if (sw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error($(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error($(62));
  }
}
function Hu(e, t) {
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
var Fu = null;
function Gc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Uu = null, no = null, ro = null;
function qf(e) {
  if (e = Bi(e)) {
    if (typeof Uu != "function")
      throw Error($(280));
    var t = e.stateNode;
    t && (t = La(t), Uu(e.stateNode, e.type, t));
  }
}
function zh(e) {
  no ? ro ? ro.push(e) : ro = [e] : no = e;
}
function Lh() {
  if (no) {
    var e = no, t = ro;
    if (ro = no = null, qf(e), t)
      for (e = 0; e < t.length; e++)
        qf(t[e]);
  }
}
function _h(e, t) {
  return e(t);
}
function Oh() {
}
var Kl = !1;
function Rh(e, t, n) {
  if (Kl)
    return e(t, n);
  Kl = !0;
  try {
    return _h(e, t, n);
  } finally {
    Kl = !1, (no !== null || ro !== null) && (Oh(), Lh());
  }
}
function hi(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = La(n);
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
    throw Error($(231, t, typeof n));
  return n;
}
var ju = !1;
if (Sn)
  try {
    var Mo = {};
    Object.defineProperty(Mo, "passive", { get: function() {
      ju = !0;
    } }), window.addEventListener("test", Mo, Mo), window.removeEventListener("test", Mo, Mo);
  } catch {
    ju = !1;
  }
function aw(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ni = !1, Vs = null, Ws = !1, Bu = null, lw = { onError: function(e) {
  ni = !0, Vs = e;
} };
function uw(e, t, n, r, o, i, s, a, l) {
  ni = !1, Vs = null, aw.apply(lw, arguments);
}
function cw(e, t, n, r, o, i, s, a, l) {
  if (uw.apply(this, arguments), ni) {
    if (ni) {
      var u = Vs;
      ni = !1, Vs = null;
    } else
      throw Error($(198));
    Ws || (Ws = !0, Bu = u);
  }
}
function br(e) {
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
function $h(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function ep(e) {
  if (br(e) !== e)
    throw Error($(188));
}
function dw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = br(e), t === null)
      throw Error($(188));
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
          return ep(o), e;
        if (i === r)
          return ep(o), t;
        i = i.sibling;
      }
      throw Error($(188));
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
          throw Error($(189));
      }
    }
    if (n.alternate !== r)
      throw Error($(190));
  }
  if (n.tag !== 3)
    throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function Mh(e) {
  return e = dw(e), e !== null ? Ih(e) : null;
}
function Ih(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Ih(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Dh = Nt.unstable_scheduleCallback, tp = Nt.unstable_cancelCallback, fw = Nt.unstable_shouldYield, pw = Nt.unstable_requestPaint, Ae = Nt.unstable_now, mw = Nt.unstable_getCurrentPriorityLevel, Xc = Nt.unstable_ImmediatePriority, Hh = Nt.unstable_UserBlockingPriority, Ys = Nt.unstable_NormalPriority, hw = Nt.unstable_LowPriority, Fh = Nt.unstable_IdlePriority, ba = null, un = null;
function gw(e) {
  if (un && typeof un.onCommitFiberRoot == "function")
    try {
      un.onCommitFiberRoot(ba, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Wt = Math.clz32 ? Math.clz32 : ww, yw = Math.log, vw = Math.LN2;
function ww(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (yw(e) / vw | 0) | 0;
}
var cs = 64, ds = 4194304;
function Xo(e) {
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
function Gs(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = Xo(a) : (i &= s, i !== 0 && (r = Xo(i)));
  } else
    s = n & ~o, s !== 0 ? r = Xo(s) : i !== 0 && (r = Xo(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Wt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Tw(e, t) {
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
function Sw(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Wt(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = Tw(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function Ku(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Uh() {
  var e = cs;
  return cs <<= 1, !(cs & 4194240) && (cs = 64), e;
}
function Zl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ui(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
}
function kw(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Wt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Jc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Wt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var se = 0;
function jh(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Bh, Qc, Kh, Zh, Vh, Zu = !1, fs = [], Bn = null, Kn = null, Zn = null, gi = /* @__PURE__ */ new Map(), yi = /* @__PURE__ */ new Map(), Mn = [], Ew = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function np(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Bn = null;
      break;
    case "dragenter":
    case "dragleave":
      Kn = null;
      break;
    case "mouseover":
    case "mouseout":
      Zn = null;
      break;
    case "pointerover":
    case "pointerout":
      gi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yi.delete(t.pointerId);
  }
}
function Io(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Bi(t), t !== null && Qc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Aw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Bn = Io(Bn, e, t, n, r, o), !0;
    case "dragenter":
      return Kn = Io(Kn, e, t, n, r, o), !0;
    case "mouseover":
      return Zn = Io(Zn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return gi.set(i, Io(gi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, yi.set(i, Io(yi.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Wh(e) {
  var t = pr(e.target);
  if (t !== null) {
    var n = br(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = $h(n), t !== null) {
          e.blockedOn = t, Vh(e.priority, function() {
            Kh(n);
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
function Ls(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Fu = r, n.target.dispatchEvent(r), Fu = null;
    } else
      return t = Bi(n), t !== null && Qc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function rp(e, t, n) {
  Ls(e) && n.delete(t);
}
function Cw() {
  Zu = !1, Bn !== null && Ls(Bn) && (Bn = null), Kn !== null && Ls(Kn) && (Kn = null), Zn !== null && Ls(Zn) && (Zn = null), gi.forEach(rp), yi.forEach(rp);
}
function Do(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Zu || (Zu = !0, Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, Cw)));
}
function vi(e) {
  function t(o) {
    return Do(o, e);
  }
  if (0 < fs.length) {
    Do(fs[0], e);
    for (var n = 1; n < fs.length; n++) {
      var r = fs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Bn !== null && Do(Bn, e), Kn !== null && Do(Kn, e), Zn !== null && Do(Zn, e), gi.forEach(t), yi.forEach(t), n = 0; n < Mn.length; n++)
    r = Mn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Mn.length && (n = Mn[0], n.blockedOn === null); )
    Wh(n), n.blockedOn === null && Mn.shift();
}
var oo = bn.ReactCurrentBatchConfig, Xs = !0;
function Nw(e, t, n, r) {
  var o = se, i = oo.transition;
  oo.transition = null;
  try {
    se = 1, qc(e, t, n, r);
  } finally {
    se = o, oo.transition = i;
  }
}
function bw(e, t, n, r) {
  var o = se, i = oo.transition;
  oo.transition = null;
  try {
    se = 4, qc(e, t, n, r);
  } finally {
    se = o, oo.transition = i;
  }
}
function qc(e, t, n, r) {
  if (Xs) {
    var o = Vu(e, t, n, r);
    if (o === null)
      tu(e, t, r, Js, n), np(e, r);
    else if (Aw(o, e, t, n, r))
      r.stopPropagation();
    else if (np(e, r), t & 4 && -1 < Ew.indexOf(e)) {
      for (; o !== null; ) {
        var i = Bi(o);
        if (i !== null && Bh(i), i = Vu(e, t, n, r), i === null && tu(e, t, r, Js, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      tu(e, t, r, null, n);
  }
}
var Js = null;
function Vu(e, t, n, r) {
  if (Js = null, e = Gc(r), e = pr(e), e !== null)
    if (t = br(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = $h(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Js = e, null;
}
function Yh(e) {
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
      switch (mw()) {
        case Xc:
          return 1;
        case Hh:
          return 4;
        case Ys:
        case hw:
          return 16;
        case Fh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Hn = null, ed = null, _s = null;
function Gh() {
  if (_s)
    return _s;
  var e, t = ed, n = t.length, r, o = "value" in Hn ? Hn.value : Hn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ;
  return _s = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Os(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ps() {
  return !0;
}
function op() {
  return !1;
}
function xt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ps : op, this.isPropagationStopped = op, this;
  }
  return he(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ps);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ps);
  }, persist: function() {
  }, isPersistent: ps }), t;
}
var Eo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = xt(Eo), ji = he({}, Eo, { view: 0, detail: 0 }), xw = xt(ji), Vl, Wl, Ho, xa = he({}, ji, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ho && (Ho && e.type === "mousemove" ? (Vl = e.screenX - Ho.screenX, Wl = e.screenY - Ho.screenY) : Wl = Vl = 0, Ho = e), Vl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Wl;
} }), ip = xt(xa), Pw = he({}, xa, { dataTransfer: 0 }), zw = xt(Pw), Lw = he({}, ji, { relatedTarget: 0 }), Yl = xt(Lw), _w = he({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ow = xt(_w), Rw = he({}, Eo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), $w = xt(Rw), Mw = he({}, Eo, { data: 0 }), sp = xt(Mw), Iw = {
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
}, Dw = {
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
}, Hw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Fw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hw[e]) ? !!t[e] : !1;
}
function nd() {
  return Fw;
}
var Uw = he({}, ji, { key: function(e) {
  if (e.key) {
    var t = Iw[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Os(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dw[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nd, charCode: function(e) {
  return e.type === "keypress" ? Os(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Os(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), jw = xt(Uw), Bw = he({}, xa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ap = xt(Bw), Kw = he({}, ji, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nd }), Zw = xt(Kw), Vw = he({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ww = xt(Vw), Yw = he({}, xa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Gw = xt(Yw), Xw = [9, 13, 27, 32], rd = Sn && "CompositionEvent" in window, ri = null;
Sn && "documentMode" in document && (ri = document.documentMode);
var Jw = Sn && "TextEvent" in window && !ri, Xh = Sn && (!rd || ri && 8 < ri && 11 >= ri), lp = String.fromCharCode(32), up = !1;
function Jh(e, t) {
  switch (e) {
    case "keyup":
      return Xw.indexOf(t.keyCode) !== -1;
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
function Qh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Br = !1;
function Qw(e, t) {
  switch (e) {
    case "compositionend":
      return Qh(t);
    case "keypress":
      return t.which !== 32 ? null : (up = !0, lp);
    case "textInput":
      return e = t.data, e === lp && up ? null : e;
    default:
      return null;
  }
}
function qw(e, t) {
  if (Br)
    return e === "compositionend" || !rd && Jh(e, t) ? (e = Gh(), _s = ed = Hn = null, Br = !1, e) : null;
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
      return Xh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var eT = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function cp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!eT[e.type] : t === "textarea";
}
function qh(e, t, n, r) {
  zh(r), t = Qs(t, "onChange"), 0 < t.length && (n = new td("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var oi = null, wi = null;
function tT(e) {
  cg(e, 0);
}
function Pa(e) {
  var t = Vr(e);
  if (Eh(t))
    return e;
}
function nT(e, t) {
  if (e === "change")
    return t;
}
var eg = !1;
if (Sn) {
  var Gl;
  if (Sn) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var dp = document.createElement("div");
      dp.setAttribute("oninput", "return;"), Xl = typeof dp.oninput == "function";
    }
    Gl = Xl;
  } else
    Gl = !1;
  eg = Gl && (!document.documentMode || 9 < document.documentMode);
}
function fp() {
  oi && (oi.detachEvent("onpropertychange", tg), wi = oi = null);
}
function tg(e) {
  if (e.propertyName === "value" && Pa(wi)) {
    var t = [];
    qh(t, wi, e, Gc(e)), Rh(tT, t);
  }
}
function rT(e, t, n) {
  e === "focusin" ? (fp(), oi = t, wi = n, oi.attachEvent("onpropertychange", tg)) : e === "focusout" && fp();
}
function oT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pa(wi);
}
function iT(e, t) {
  if (e === "click")
    return Pa(t);
}
function sT(e, t) {
  if (e === "input" || e === "change")
    return Pa(t);
}
function aT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Gt = typeof Object.is == "function" ? Object.is : aT;
function Ti(e, t) {
  if (Gt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!xu.call(t, o) || !Gt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function pp(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function mp(e, t) {
  var n = pp(e);
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
    n = pp(n);
  }
}
function ng(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ng(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function rg() {
  for (var e = window, t = Zs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Zs(e.document);
  }
  return t;
}
function od(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function lT(e) {
  var t = rg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ng(n.ownerDocument.documentElement, n)) {
    if (r !== null && od(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = mp(n, i);
        var s = mp(
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
var uT = Sn && "documentMode" in document && 11 >= document.documentMode, Kr = null, Wu = null, ii = null, Yu = !1;
function hp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yu || Kr == null || Kr !== Zs(r) || (r = Kr, "selectionStart" in r && od(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ii && Ti(ii, r) || (ii = r, r = Qs(Wu, "onSelect"), 0 < r.length && (t = new td("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Kr)));
}
function ms(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Zr = { animationend: ms("Animation", "AnimationEnd"), animationiteration: ms("Animation", "AnimationIteration"), animationstart: ms("Animation", "AnimationStart"), transitionend: ms("Transition", "TransitionEnd") }, Jl = {}, og = {};
Sn && (og = document.createElement("div").style, "AnimationEvent" in window || (delete Zr.animationend.animation, delete Zr.animationiteration.animation, delete Zr.animationstart.animation), "TransitionEvent" in window || delete Zr.transitionend.transition);
function za(e) {
  if (Jl[e])
    return Jl[e];
  if (!Zr[e])
    return e;
  var t = Zr[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in og)
      return Jl[e] = t[n];
  return e;
}
var ig = za("animationend"), sg = za("animationiteration"), ag = za("animationstart"), lg = za("transitionend"), ug = /* @__PURE__ */ new Map(), gp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function nr(e, t) {
  ug.set(e, t), Nr(t, [e]);
}
for (var Ql = 0; Ql < gp.length; Ql++) {
  var ql = gp[Ql], cT = ql.toLowerCase(), dT = ql[0].toUpperCase() + ql.slice(1);
  nr(cT, "on" + dT);
}
nr(ig, "onAnimationEnd");
nr(sg, "onAnimationIteration");
nr(ag, "onAnimationStart");
nr("dblclick", "onDoubleClick");
nr("focusin", "onFocus");
nr("focusout", "onBlur");
nr(lg, "onTransitionEnd");
uo("onMouseEnter", ["mouseout", "mouseover"]);
uo("onMouseLeave", ["mouseout", "mouseover"]);
uo("onPointerEnter", ["pointerout", "pointerover"]);
uo("onPointerLeave", ["pointerout", "pointerover"]);
Nr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Nr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Nr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Nr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Jo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fT = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));
function yp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, cw(r, t, void 0, e), e.currentTarget = null;
}
function cg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s], l = a.instance, u = a.currentTarget;
          if (a = a.listener, l !== i && o.isPropagationStopped())
            break e;
          yp(o, a, u), i = l;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped())
            break e;
          yp(o, a, u), i = l;
        }
    }
  }
  if (Ws)
    throw e = Bu, Ws = !1, Bu = null, e;
}
function ce(e, t) {
  var n = t[qu];
  n === void 0 && (n = t[qu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (dg(t, e, 2, !1), n.add(r));
}
function eu(e, t, n) {
  var r = 0;
  t && (r |= 4), dg(n, e, r, t);
}
var hs = "_reactListening" + Math.random().toString(36).slice(2);
function Si(e) {
  if (!e[hs]) {
    e[hs] = !0, vh.forEach(function(n) {
      n !== "selectionchange" && (fT.has(n) || eu(n, !1, e), eu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hs] || (t[hs] = !0, eu("selectionchange", !1, t));
  }
}
function dg(e, t, n, r) {
  switch (Yh(t)) {
    case 1:
      var o = Nw;
      break;
    case 4:
      o = bw;
      break;
    default:
      o = qc;
  }
  n = o.bind(null, t, n, e), o = void 0, !ju || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function tu(e, t, n, r, o) {
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
            if (s = pr(a), s === null)
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
  Rh(function() {
    var u = i, c = Gc(n), f = [];
    e: {
      var p = ug.get(e);
      if (p !== void 0) {
        var v = td, k = e;
        switch (e) {
          case "keypress":
            if (Os(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = jw;
            break;
          case "focusin":
            k = "focus", v = Yl;
            break;
          case "focusout":
            k = "blur", v = Yl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Yl;
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
            v = ip;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = zw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Zw;
            break;
          case ig:
          case sg:
          case ag:
            v = Ow;
            break;
          case lg:
            v = Ww;
            break;
          case "scroll":
            v = xw;
            break;
          case "wheel":
            v = Gw;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = $w;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ap;
        }
        var T = (t & 4) !== 0, L = !T && e === "scroll", y = T ? p !== null ? p + "Capture" : null : p;
        T = [];
        for (var m = u, h; m !== null; ) {
          h = m;
          var b = h.stateNode;
          if (h.tag === 5 && b !== null && (h = b, y !== null && (b = hi(m, y), b != null && T.push(ki(m, b, h)))), L)
            break;
          m = m.return;
        }
        0 < T.length && (p = new v(p, k, null, n, c), f.push({ event: p, listeners: T }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== Fu && (k = n.relatedTarget || n.fromElement) && (pr(k) || k[kn]))
          break e;
        if ((v || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (k = n.relatedTarget || n.toElement, v = u, k = k ? pr(k) : null, k !== null && (L = br(k), k !== L || k.tag !== 5 && k.tag !== 6) && (k = null)) : (v = null, k = u), v !== k)) {
          if (T = ip, b = "onMouseLeave", y = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (T = ap, b = "onPointerLeave", y = "onPointerEnter", m = "pointer"), L = v == null ? p : Vr(v), h = k == null ? p : Vr(k), p = new T(b, m + "leave", v, n, c), p.target = L, p.relatedTarget = h, b = null, pr(c) === u && (T = new T(y, m + "enter", k, n, c), T.target = h, T.relatedTarget = L, b = T), L = b, v && k)
            t: {
              for (T = v, y = k, m = 0, h = T; h; h = Mr(h))
                m++;
              for (h = 0, b = y; b; b = Mr(b))
                h++;
              for (; 0 < m - h; )
                T = Mr(T), m--;
              for (; 0 < h - m; )
                y = Mr(y), h--;
              for (; m--; ) {
                if (T === y || y !== null && T === y.alternate)
                  break t;
                T = Mr(T), y = Mr(y);
              }
              T = null;
            }
          else
            T = null;
          v !== null && vp(f, p, v, T, !1), k !== null && L !== null && vp(f, L, k, T, !0);
        }
      }
      e: {
        if (p = u ? Vr(u) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var A = nT;
        else if (cp(p))
          if (eg)
            A = sT;
          else {
            A = oT;
            var N = rT;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (A = iT);
        if (A && (A = A(e, u))) {
          qh(f, A, n, c);
          break e;
        }
        N && N(e, p, u), e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && $u(p, "number", p.value);
      }
      switch (N = u ? Vr(u) : window, e) {
        case "focusin":
          (cp(N) || N.contentEditable === "true") && (Kr = N, Wu = u, ii = null);
          break;
        case "focusout":
          ii = Wu = Kr = null;
          break;
        case "mousedown":
          Yu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Yu = !1, hp(f, n, c);
          break;
        case "selectionchange":
          if (uT)
            break;
        case "keydown":
        case "keyup":
          hp(f, n, c);
      }
      var S;
      if (rd)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        Br ? Jh(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (Xh && n.locale !== "ko" && (Br || z !== "onCompositionStart" ? z === "onCompositionEnd" && Br && (S = Gh()) : (Hn = c, ed = "value" in Hn ? Hn.value : Hn.textContent, Br = !0)), N = Qs(u, z), 0 < N.length && (z = new sp(z, e, null, n, c), f.push({ event: z, listeners: N }), S ? z.data = S : (S = Qh(n), S !== null && (z.data = S)))), (S = Jw ? Qw(e, n) : qw(e, n)) && (u = Qs(u, "onBeforeInput"), 0 < u.length && (c = new sp("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = S));
    }
    cg(f, t);
  });
}
function ki(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = hi(e, n), i != null && r.unshift(ki(e, i, o)), i = hi(e, t), i != null && r.push(ki(e, i, o))), e = e.return;
  }
  return r;
}
function Mr(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r)
      break;
    a.tag === 5 && u !== null && (a = u, o ? (l = hi(n, i), l != null && s.unshift(ki(n, l, a))) : o || (l = hi(n, i), l != null && s.push(ki(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var pT = /\r\n?/g, mT = /\u0000|\uFFFD/g;
function wp(e) {
  return (typeof e == "string" ? e : "" + e).replace(pT, `
`).replace(mT, "");
}
function gs(e, t, n) {
  if (t = wp(t), wp(e) !== t && n)
    throw Error($(425));
}
function qs() {
}
var Gu = null, Xu = null;
function Ju(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Qu = typeof setTimeout == "function" ? setTimeout : void 0, hT = typeof clearTimeout == "function" ? clearTimeout : void 0, Tp = typeof Promise == "function" ? Promise : void 0, gT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tp < "u" ? function(e) {
  return Tp.resolve(null).then(e).catch(yT);
} : Qu;
function yT(e) {
  setTimeout(function() {
    throw e;
  });
}
function nu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), vi(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  vi(t);
}
function Vn(e) {
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
function Sp(e) {
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
var Ao = Math.random().toString(36).slice(2), an = "__reactFiber$" + Ao, Ei = "__reactProps$" + Ao, kn = "__reactContainer$" + Ao, qu = "__reactEvents$" + Ao, vT = "__reactListeners$" + Ao, wT = "__reactHandles$" + Ao;
function pr(e) {
  var t = e[an];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[kn] || n[an]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Sp(e); e !== null; ) {
          if (n = e[an])
            return n;
          e = Sp(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Bi(e) {
  return e = e[an] || e[kn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Vr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error($(33));
}
function La(e) {
  return e[Ei] || null;
}
var ec = [], Wr = -1;
function rr(e) {
  return { current: e };
}
function de(e) {
  0 > Wr || (e.current = ec[Wr], ec[Wr] = null, Wr--);
}
function ue(e, t) {
  Wr++, ec[Wr] = e.current, e.current = t;
}
var qn = {}, nt = rr(qn), ht = rr(!1), wr = qn;
function co(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return qn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function gt(e) {
  return e = e.childContextTypes, e != null;
}
function ea() {
  de(ht), de(nt);
}
function kp(e, t, n) {
  if (nt.current !== qn)
    throw Error($(168));
  ue(nt, t), ue(ht, n);
}
function fg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error($(108, rw(e) || "Unknown", o));
  return he({}, n, r);
}
function ta(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qn, wr = nt.current, ue(nt, e), ue(ht, ht.current), !0;
}
function Ep(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error($(169));
  n ? (e = fg(e, t, wr), r.__reactInternalMemoizedMergedChildContext = e, de(ht), de(nt), ue(nt, e)) : de(ht), ue(ht, n);
}
var gn = null, _a = !1, ru = !1;
function pg(e) {
  gn === null ? gn = [e] : gn.push(e);
}
function TT(e) {
  _a = !0, pg(e);
}
function or() {
  if (!ru && gn !== null) {
    ru = !0;
    var e = 0, t = se;
    try {
      var n = gn;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      gn = null, _a = !1;
    } catch (o) {
      throw gn !== null && (gn = gn.slice(e + 1)), Dh(Xc, or), o;
    } finally {
      se = t, ru = !1;
    }
  }
  return null;
}
var Yr = [], Gr = 0, na = null, ra = 0, _t = [], Ot = 0, Tr = null, vn = 1, wn = "";
function cr(e, t) {
  Yr[Gr++] = ra, Yr[Gr++] = na, na = e, ra = t;
}
function mg(e, t, n) {
  _t[Ot++] = vn, _t[Ot++] = wn, _t[Ot++] = Tr, Tr = e;
  var r = vn;
  e = wn;
  var o = 32 - Wt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Wt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, vn = 1 << 32 - Wt(t) + o | n << o | r, wn = i + e;
  } else
    vn = 1 << i | n << o | r, wn = e;
}
function id(e) {
  e.return !== null && (cr(e, 1), mg(e, 1, 0));
}
function sd(e) {
  for (; e === na; )
    na = Yr[--Gr], Yr[Gr] = null, ra = Yr[--Gr], Yr[Gr] = null;
  for (; e === Tr; )
    Tr = _t[--Ot], _t[Ot] = null, wn = _t[--Ot], _t[Ot] = null, vn = _t[--Ot], _t[Ot] = null;
}
var At = null, Et = null, fe = !1, Kt = null;
function hg(e, t) {
  var n = $t(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ap(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, At = e, Et = Vn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, At = e, Et = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tr !== null ? { id: vn, overflow: wn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = $t(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, At = e, Et = null, !0) : !1;
    default:
      return !1;
  }
}
function tc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function nc(e) {
  if (fe) {
    var t = Et;
    if (t) {
      var n = t;
      if (!Ap(e, t)) {
        if (tc(e))
          throw Error($(418));
        t = Vn(n.nextSibling);
        var r = At;
        t && Ap(e, t) ? hg(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, At = e);
      }
    } else {
      if (tc(e))
        throw Error($(418));
      e.flags = e.flags & -4097 | 2, fe = !1, At = e;
    }
  }
}
function Cp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  At = e;
}
function ys(e) {
  if (e !== At)
    return !1;
  if (!fe)
    return Cp(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ju(e.type, e.memoizedProps)), t && (t = Et)) {
    if (tc(e))
      throw gg(), Error($(418));
    for (; t; )
      hg(e, t), t = Vn(t.nextSibling);
  }
  if (Cp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Et = Vn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Et = null;
    }
  } else
    Et = At ? Vn(e.stateNode.nextSibling) : null;
  return !0;
}
function gg() {
  for (var e = Et; e; )
    e = Vn(e.nextSibling);
}
function fo() {
  Et = At = null, fe = !1;
}
function ad(e) {
  Kt === null ? Kt = [e] : Kt.push(e);
}
var ST = bn.ReactCurrentBatchConfig;
function Fo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error($(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error($(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error($(284));
    if (!n._owner)
      throw Error($(290, e));
  }
  return e;
}
function vs(e, t) {
  throw e = Object.prototype.toString.call(t), Error($(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Np(e) {
  var t = e._init;
  return t(e._payload);
}
function yg(e) {
  function t(y, m) {
    if (e) {
      var h = y.deletions;
      h === null ? (y.deletions = [m], y.flags |= 16) : h.push(m);
    }
  }
  function n(y, m) {
    if (!e)
      return null;
    for (; m !== null; )
      t(y, m), m = m.sibling;
    return null;
  }
  function r(y, m) {
    for (y = /* @__PURE__ */ new Map(); m !== null; )
      m.key !== null ? y.set(m.key, m) : y.set(m.index, m), m = m.sibling;
    return y;
  }
  function o(y, m) {
    return y = Xn(y, m), y.index = 0, y.sibling = null, y;
  }
  function i(y, m, h) {
    return y.index = h, e ? (h = y.alternate, h !== null ? (h = h.index, h < m ? (y.flags |= 2, m) : h) : (y.flags |= 2, m)) : (y.flags |= 1048576, m);
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, m, h, b) {
    return m === null || m.tag !== 6 ? (m = cu(h, y.mode, b), m.return = y, m) : (m = o(m, h), m.return = y, m);
  }
  function l(y, m, h, b) {
    var A = h.type;
    return A === jr ? c(y, m, h.props.children, b, h.key) : m !== null && (m.elementType === A || typeof A == "object" && A !== null && A.$$typeof === Rn && Np(A) === m.type) ? (b = o(m, h.props), b.ref = Fo(y, m, h), b.return = y, b) : (b = Fs(h.type, h.key, h.props, null, y.mode, b), b.ref = Fo(y, m, h), b.return = y, b);
  }
  function u(y, m, h, b) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== h.containerInfo || m.stateNode.implementation !== h.implementation ? (m = du(h, y.mode, b), m.return = y, m) : (m = o(m, h.children || []), m.return = y, m);
  }
  function c(y, m, h, b, A) {
    return m === null || m.tag !== 7 ? (m = vr(h, y.mode, b, A), m.return = y, m) : (m = o(m, h), m.return = y, m);
  }
  function f(y, m, h) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = cu("" + m, y.mode, h), m.return = y, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case as:
          return h = Fs(m.type, m.key, m.props, null, y.mode, h), h.ref = Fo(y, null, m), h.return = y, h;
        case Ur:
          return m = du(m, y.mode, h), m.return = y, m;
        case Rn:
          var b = m._init;
          return f(y, b(m._payload), h);
      }
      if (Go(m) || $o(m))
        return m = vr(m, y.mode, h, null), m.return = y, m;
      vs(y, m);
    }
    return null;
  }
  function p(y, m, h, b) {
    var A = m !== null ? m.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return A !== null ? null : a(y, m, "" + h, b);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case as:
          return h.key === A ? l(y, m, h, b) : null;
        case Ur:
          return h.key === A ? u(y, m, h, b) : null;
        case Rn:
          return A = h._init, p(
            y,
            m,
            A(h._payload),
            b
          );
      }
      if (Go(h) || $o(h))
        return A !== null ? null : c(y, m, h, b, null);
      vs(y, h);
    }
    return null;
  }
  function v(y, m, h, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return y = y.get(h) || null, a(m, y, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case as:
          return y = y.get(b.key === null ? h : b.key) || null, l(m, y, b, A);
        case Ur:
          return y = y.get(b.key === null ? h : b.key) || null, u(m, y, b, A);
        case Rn:
          var N = b._init;
          return v(y, m, h, N(b._payload), A);
      }
      if (Go(b) || $o(b))
        return y = y.get(h) || null, c(m, y, b, A, null);
      vs(m, b);
    }
    return null;
  }
  function k(y, m, h, b) {
    for (var A = null, N = null, S = m, z = m = 0, j = null; S !== null && z < h.length; z++) {
      S.index > z ? (j = S, S = null) : j = S.sibling;
      var _ = p(y, S, h[z], b);
      if (_ === null) {
        S === null && (S = j);
        break;
      }
      e && S && _.alternate === null && t(y, S), m = i(_, m, z), N === null ? A = _ : N.sibling = _, N = _, S = j;
    }
    if (z === h.length)
      return n(y, S), fe && cr(y, z), A;
    if (S === null) {
      for (; z < h.length; z++)
        S = f(y, h[z], b), S !== null && (m = i(S, m, z), N === null ? A = S : N.sibling = S, N = S);
      return fe && cr(y, z), A;
    }
    for (S = r(y, S); z < h.length; z++)
      j = v(S, y, z, h[z], b), j !== null && (e && j.alternate !== null && S.delete(j.key === null ? z : j.key), m = i(j, m, z), N === null ? A = j : N.sibling = j, N = j);
    return e && S.forEach(function(D) {
      return t(y, D);
    }), fe && cr(y, z), A;
  }
  function T(y, m, h, b) {
    var A = $o(h);
    if (typeof A != "function")
      throw Error($(150));
    if (h = A.call(h), h == null)
      throw Error($(151));
    for (var N = A = null, S = m, z = m = 0, j = null, _ = h.next(); S !== null && !_.done; z++, _ = h.next()) {
      S.index > z ? (j = S, S = null) : j = S.sibling;
      var D = p(y, S, _.value, b);
      if (D === null) {
        S === null && (S = j);
        break;
      }
      e && S && D.alternate === null && t(y, S), m = i(D, m, z), N === null ? A = D : N.sibling = D, N = D, S = j;
    }
    if (_.done)
      return n(
        y,
        S
      ), fe && cr(y, z), A;
    if (S === null) {
      for (; !_.done; z++, _ = h.next())
        _ = f(y, _.value, b), _ !== null && (m = i(_, m, z), N === null ? A = _ : N.sibling = _, N = _);
      return fe && cr(y, z), A;
    }
    for (S = r(y, S); !_.done; z++, _ = h.next())
      _ = v(S, y, z, _.value, b), _ !== null && (e && _.alternate !== null && S.delete(_.key === null ? z : _.key), m = i(_, m, z), N === null ? A = _ : N.sibling = _, N = _);
    return e && S.forEach(function(H) {
      return t(y, H);
    }), fe && cr(y, z), A;
  }
  function L(y, m, h, b) {
    if (typeof h == "object" && h !== null && h.type === jr && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case as:
          e: {
            for (var A = h.key, N = m; N !== null; ) {
              if (N.key === A) {
                if (A = h.type, A === jr) {
                  if (N.tag === 7) {
                    n(y, N.sibling), m = o(N, h.props.children), m.return = y, y = m;
                    break e;
                  }
                } else if (N.elementType === A || typeof A == "object" && A !== null && A.$$typeof === Rn && Np(A) === N.type) {
                  n(y, N.sibling), m = o(N, h.props), m.ref = Fo(y, N, h), m.return = y, y = m;
                  break e;
                }
                n(y, N);
                break;
              } else
                t(y, N);
              N = N.sibling;
            }
            h.type === jr ? (m = vr(h.props.children, y.mode, b, h.key), m.return = y, y = m) : (b = Fs(h.type, h.key, h.props, null, y.mode, b), b.ref = Fo(y, m, h), b.return = y, y = b);
          }
          return s(y);
        case Ur:
          e: {
            for (N = h.key; m !== null; ) {
              if (m.key === N)
                if (m.tag === 4 && m.stateNode.containerInfo === h.containerInfo && m.stateNode.implementation === h.implementation) {
                  n(y, m.sibling), m = o(m, h.children || []), m.return = y, y = m;
                  break e;
                } else {
                  n(y, m);
                  break;
                }
              else
                t(y, m);
              m = m.sibling;
            }
            m = du(h, y.mode, b), m.return = y, y = m;
          }
          return s(y);
        case Rn:
          return N = h._init, L(y, m, N(h._payload), b);
      }
      if (Go(h))
        return k(y, m, h, b);
      if ($o(h))
        return T(y, m, h, b);
      vs(y, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, m !== null && m.tag === 6 ? (n(y, m.sibling), m = o(m, h), m.return = y, y = m) : (n(y, m), m = cu(h, y.mode, b), m.return = y, y = m), s(y)) : n(y, m);
  }
  return L;
}
var po = yg(!0), vg = yg(!1), oa = rr(null), ia = null, Xr = null, ld = null;
function ud() {
  ld = Xr = ia = null;
}
function cd(e) {
  var t = oa.current;
  de(oa), e._currentValue = t;
}
function rc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function io(e, t) {
  ia = e, ld = Xr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (mt = !0), e.firstContext = null);
}
function It(e) {
  var t = e._currentValue;
  if (ld !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Xr === null) {
      if (ia === null)
        throw Error($(308));
      Xr = e, ia.dependencies = { lanes: 0, firstContext: e };
    } else
      Xr = Xr.next = e;
  return t;
}
var mr = null;
function dd(e) {
  mr === null ? mr = [e] : mr.push(e);
}
function wg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, dd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, En(e, r);
}
function En(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var $n = !1;
function fd(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Tg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Wn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, te & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, En(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, dd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, En(e, n);
}
function Rs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Jc(e, n);
  }
}
function bp(e, t) {
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
function sa(e, t, n, r) {
  var o = e.updateQueue;
  $n = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, s === null ? i = u : s.next = u, s = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (i !== null) {
    var f = o.baseState;
    s = 0, c = u = l = null, a = i;
    do {
      var p = a.lane, v = a.eventTime;
      if ((r & p) === p) {
        c !== null && (c = c.next = {
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
                f = k.call(v, f, p);
                break e;
              }
              f = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = T.payload, p = typeof k == "function" ? k.call(v, f, p) : k, p == null)
                break e;
              f = he({}, f, p);
              break e;
            case 2:
              $n = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [a] : p.push(a));
      } else
        v = { eventTime: v, lane: p, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = v, l = f) : c = c.next = v, s |= p;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null)
          break;
        p = a, a = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (1);
    if (c === null && (l = f), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    kr |= s, e.lanes = s, e.memoizedState = f;
  }
}
function xp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error($(191, o));
        o.call(r);
      }
    }
}
var Ki = {}, cn = rr(Ki), Ai = rr(Ki), Ci = rr(Ki);
function hr(e) {
  if (e === Ki)
    throw Error($(174));
  return e;
}
function pd(e, t) {
  switch (ue(Ci, t), ue(Ai, e), ue(cn, Ki), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Iu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Iu(t, e);
  }
  de(cn), ue(cn, t);
}
function mo() {
  de(cn), de(Ai), de(Ci);
}
function Sg(e) {
  hr(Ci.current);
  var t = hr(cn.current), n = Iu(t, e.type);
  t !== n && (ue(Ai, e), ue(cn, n));
}
function md(e) {
  Ai.current === e && (de(cn), de(Ai));
}
var pe = rr(0);
function aa(e) {
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
var ou = [];
function hd() {
  for (var e = 0; e < ou.length; e++)
    ou[e]._workInProgressVersionPrimary = null;
  ou.length = 0;
}
var $s = bn.ReactCurrentDispatcher, iu = bn.ReactCurrentBatchConfig, Sr = 0, me = null, Le = null, He = null, la = !1, si = !1, Ni = 0, kT = 0;
function Qe() {
  throw Error($(321));
}
function gd(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Gt(e[n], t[n]))
      return !1;
  return !0;
}
function yd(e, t, n, r, o, i) {
  if (Sr = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $s.current = e === null || e.memoizedState === null ? NT : bT, e = n(r, o), si) {
    i = 0;
    do {
      if (si = !1, Ni = 0, 25 <= i)
        throw Error($(301));
      i += 1, He = Le = null, t.updateQueue = null, $s.current = xT, e = n(r, o);
    } while (si);
  }
  if ($s.current = ua, t = Le !== null && Le.next !== null, Sr = 0, He = Le = me = null, la = !1, t)
    throw Error($(300));
  return e;
}
function vd() {
  var e = Ni !== 0;
  return Ni = 0, e;
}
function rn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return He === null ? me.memoizedState = He = e : He = He.next = e, He;
}
function Dt() {
  if (Le === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Le.next;
  var t = He === null ? me.memoizedState : He.next;
  if (t !== null)
    He = t, Le = e;
  else {
    if (e === null)
      throw Error($(310));
    Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, He === null ? me.memoizedState = He = e : He = He.next = e;
  }
  return He;
}
function bi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function su(e) {
  var t = Dt(), n = t.queue;
  if (n === null)
    throw Error($(311));
  n.lastRenderedReducer = e;
  var r = Le, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((Sr & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = f, s = r) : l = l.next = f, me.lanes |= c, kr |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, Gt(r, t.memoizedState) || (mt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, me.lanes |= i, kr |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function au(e) {
  var t = Dt(), n = t.queue;
  if (n === null)
    throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Gt(i, t.memoizedState) || (mt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function kg() {
}
function Eg(e, t) {
  var n = me, r = Dt(), o = t(), i = !Gt(r.memoizedState, o);
  if (i && (r.memoizedState = o, mt = !0), r = r.queue, wd(Ng.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || He !== null && He.memoizedState.tag & 1) {
    if (n.flags |= 2048, xi(9, Cg.bind(null, n, r, o, t), void 0, null), Fe === null)
      throw Error($(349));
    Sr & 30 || Ag(n, t, o);
  }
  return o;
}
function Ag(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Cg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, bg(t) && xg(e);
}
function Ng(e, t, n) {
  return n(function() {
    bg(t) && xg(e);
  });
}
function bg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Gt(e, n);
  } catch {
    return !0;
  }
}
function xg(e) {
  var t = En(e, 1);
  t !== null && Yt(t, e, 1, -1);
}
function Pp(e) {
  var t = rn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: e }, t.queue = e, e = e.dispatch = CT.bind(null, me, e), [t.memoizedState, e];
}
function xi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Pg() {
  return Dt().memoizedState;
}
function Ms(e, t, n, r) {
  var o = rn();
  me.flags |= e, o.memoizedState = xi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Oa(e, t, n, r) {
  var o = Dt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Le !== null) {
    var s = Le.memoizedState;
    if (i = s.destroy, r !== null && gd(r, s.deps)) {
      o.memoizedState = xi(t, n, i, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = xi(1 | t, n, i, r);
}
function zp(e, t) {
  return Ms(8390656, 8, e, t);
}
function wd(e, t) {
  return Oa(2048, 8, e, t);
}
function zg(e, t) {
  return Oa(4, 2, e, t);
}
function Lg(e, t) {
  return Oa(4, 4, e, t);
}
function _g(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Og(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Oa(4, 4, _g.bind(null, t, e), n);
}
function Td() {
}
function Rg(e, t) {
  var n = Dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function $g(e, t) {
  var n = Dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Mg(e, t, n) {
  return Sr & 21 ? (Gt(n, t) || (n = Uh(), me.lanes |= n, kr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, mt = !0), e.memoizedState = n);
}
function ET(e, t) {
  var n = se;
  se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = iu.transition;
  iu.transition = {};
  try {
    e(!1), t();
  } finally {
    se = n, iu.transition = r;
  }
}
function Ig() {
  return Dt().memoizedState;
}
function AT(e, t, n) {
  var r = Gn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Dg(e))
    Hg(t, n);
  else if (n = wg(e, t, n, r), n !== null) {
    var o = lt();
    Yt(n, e, r, o), Fg(n, t, r);
  }
}
function CT(e, t, n) {
  var r = Gn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dg(e))
    Hg(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var s = t.lastRenderedState, a = i(s, n);
        if (o.hasEagerState = !0, o.eagerState = a, Gt(a, s)) {
          var l = t.interleaved;
          l === null ? (o.next = o, dd(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = wg(e, t, o, r), n !== null && (o = lt(), Yt(n, e, r, o), Fg(n, t, r));
  }
}
function Dg(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function Hg(e, t) {
  si = la = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Jc(e, n);
  }
}
var ua = { readContext: It, useCallback: Qe, useContext: Qe, useEffect: Qe, useImperativeHandle: Qe, useInsertionEffect: Qe, useLayoutEffect: Qe, useMemo: Qe, useReducer: Qe, useRef: Qe, useState: Qe, useDebugValue: Qe, useDeferredValue: Qe, useTransition: Qe, useMutableSource: Qe, useSyncExternalStore: Qe, useId: Qe, unstable_isNewReconciler: !1 }, NT = { readContext: It, useCallback: function(e, t) {
  return rn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: It, useEffect: zp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ms(
    4194308,
    4,
    _g.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ms(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ms(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = rn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = rn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = AT.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = rn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Pp, useDebugValue: Td, useDeferredValue: function(e) {
  return rn().memoizedState = e;
}, useTransition: function() {
  var e = Pp(!1), t = e[0];
  return e = ET.bind(null, e[1]), rn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = me, o = rn();
  if (fe) {
    if (n === void 0)
      throw Error($(407));
    n = n();
  } else {
    if (n = t(), Fe === null)
      throw Error($(349));
    Sr & 30 || Ag(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, zp(Ng.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, xi(9, Cg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = rn(), t = Fe.identifierPrefix;
  if (fe) {
    var n = wn, r = vn;
    n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ni++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = kT++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, bT = {
  readContext: It,
  useCallback: Rg,
  useContext: It,
  useEffect: wd,
  useImperativeHandle: Og,
  useInsertionEffect: zg,
  useLayoutEffect: Lg,
  useMemo: $g,
  useReducer: su,
  useRef: Pg,
  useState: function() {
    return su(bi);
  },
  useDebugValue: Td,
  useDeferredValue: function(e) {
    var t = Dt();
    return Mg(t, Le.memoizedState, e);
  },
  useTransition: function() {
    var e = su(bi)[0], t = Dt().memoizedState;
    return [e, t];
  },
  useMutableSource: kg,
  useSyncExternalStore: Eg,
  useId: Ig,
  unstable_isNewReconciler: !1
}, xT = { readContext: It, useCallback: Rg, useContext: It, useEffect: wd, useImperativeHandle: Og, useInsertionEffect: zg, useLayoutEffect: Lg, useMemo: $g, useReducer: au, useRef: Pg, useState: function() {
  return au(bi);
}, useDebugValue: Td, useDeferredValue: function(e) {
  var t = Dt();
  return Le === null ? t.memoizedState = e : Mg(t, Le.memoizedState, e);
}, useTransition: function() {
  var e = au(bi)[0], t = Dt().memoizedState;
  return [e, t];
}, useMutableSource: kg, useSyncExternalStore: Eg, useId: Ig, unstable_isNewReconciler: !1 };
function jt(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function oc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ra = { isMounted: function(e) {
  return (e = e._reactInternals) ? br(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = lt(), o = Gn(e), i = Tn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Wn(e, i, o), t !== null && (Yt(t, e, o, r), Rs(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = lt(), o = Gn(e), i = Tn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Wn(e, i, o), t !== null && (Yt(t, e, o, r), Rs(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = lt(), r = Gn(e), o = Tn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Wn(e, o, r), t !== null && (Yt(t, e, r, n), Rs(t, e, r));
} };
function Lp(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ti(n, r) || !Ti(o, i) : !0;
}
function Ug(e, t, n) {
  var r = !1, o = qn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = It(i) : (o = gt(t) ? wr : nt.current, r = t.contextTypes, i = (r = r != null) ? co(e, o) : qn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ra, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function _p(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ra.enqueueReplaceState(t, t.state, null);
}
function ic(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, fd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = It(i) : (i = gt(t) ? wr : nt.current, o.context = co(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (oc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ra.enqueueReplaceState(o, o.state, null), sa(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ho(e, t) {
  try {
    var n = "", r = t;
    do
      n += nw(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function lu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function sc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var PT = typeof WeakMap == "function" ? WeakMap : Map;
function jg(e, t, n) {
  n = Tn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    da || (da = !0, gc = r), sc(e, t);
  }, n;
}
function Bg(e, t, n) {
  n = Tn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      sc(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    sc(e, t), typeof r != "function" && (Yn === null ? Yn = /* @__PURE__ */ new Set([this]) : Yn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Op(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new PT();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = BT.bind(null, e, t, n), t.then(e, e));
}
function Rp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $p(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tn(-1, 1), t.tag = 2, Wn(n, t, 1))), n.lanes |= 1), e);
}
var zT = bn.ReactCurrentOwner, mt = !1;
function st(e, t, n, r) {
  t.child = e === null ? vg(t, null, n, r) : po(t, e.child, n, r);
}
function Mp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return io(t, o), r = yd(e, t, n, r, i, o), n = vd(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, An(e, t, o)) : (fe && n && id(t), t.flags |= 1, st(e, t, r, o), t.child);
}
function Ip(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !xd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Kg(e, t, i, r, o)) : (e = Fs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ti, n(s, r) && e.ref === t.ref)
      return An(e, t, o);
  }
  return t.flags |= 1, e = Xn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Kg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ti(i, r) && e.ref === t.ref)
      if (mt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (mt = !0);
      else
        return t.lanes = e.lanes, An(e, t, o);
  }
  return ac(e, t, n, r, o);
}
function Zg(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(Qr, Tt), Tt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ue(Qr, Tt), Tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ue(Qr, Tt), Tt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ue(Qr, Tt), Tt |= r;
  return st(e, t, o, n), t.child;
}
function Vg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ac(e, t, n, r, o) {
  var i = gt(n) ? wr : nt.current;
  return i = co(t, i), io(t, o), n = yd(e, t, n, r, i, o), r = vd(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, An(e, t, o)) : (fe && r && id(t), t.flags |= 1, st(e, t, n, o), t.child);
}
function Dp(e, t, n, r, o) {
  if (gt(n)) {
    var i = !0;
    ta(t);
  } else
    i = !1;
  if (io(t, o), t.stateNode === null)
    Is(e, t), Ug(t, n, r), ic(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = It(u) : (u = gt(n) ? wr : nt.current, u = co(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && _p(t, s, r, u), $n = !1;
    var p = t.memoizedState;
    s.state = p, sa(t, r, s, o), l = t.memoizedState, a !== r || p !== l || ht.current || $n ? (typeof c == "function" && (oc(t, n, c, r), l = t.memoizedState), (a = $n || Lp(t, n, a, r, p, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Tg(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : jt(t.type, a), s.props = u, f = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = It(l) : (l = gt(n) ? wr : nt.current, l = co(t, l));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || p !== l) && _p(t, s, r, l), $n = !1, p = t.memoizedState, s.state = p, sa(t, r, s, o);
    var k = t.memoizedState;
    a !== f || p !== k || ht.current || $n ? (typeof v == "function" && (oc(t, n, v, r), k = t.memoizedState), (u = $n || Lp(t, n, u, r, p, k, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, k, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, k, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), s.props = r, s.state = k, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return lc(e, t, n, r, i, o);
}
function lc(e, t, n, r, o, i) {
  Vg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return o && Ep(t, n, !1), An(e, t, i);
  r = t.stateNode, zT.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = po(t, e.child, null, i), t.child = po(t, null, a, i)) : st(e, t, a, i), t.memoizedState = r.state, o && Ep(t, n, !0), t.child;
}
function Wg(e) {
  var t = e.stateNode;
  t.pendingContext ? kp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && kp(e, t.context, !1), pd(e, t.containerInfo);
}
function Hp(e, t, n, r, o) {
  return fo(), ad(o), t.flags |= 256, st(e, t, n, r), t.child;
}
var uc = { dehydrated: null, treeContext: null, retryLane: 0 };
function cc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yg(e, t, n) {
  var r = t.pendingProps, o = pe.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ue(pe, o & 1), e === null)
    return nc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ia(s, r, 0, null), e = vr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = cc(n), t.memoizedState = uc, e) : Sd(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return LT(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Xn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Xn(a, i) : (i = vr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? cc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = uc, r;
  }
  return i = e.child, e = i.sibling, r = Xn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Sd(e, t) {
  return t = Ia({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ws(e, t, n, r) {
  return r !== null && ad(r), po(t, e.child, null, n), e = Sd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function LT(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = lu(Error($(422))), ws(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ia({ mode: "visible", children: r.children }, o, 0, null), i = vr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && po(t, e.child, null, s), t.child.memoizedState = cc(s), t.memoizedState = uc, i);
  if (!(t.mode & 1))
    return ws(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error($(419)), r = lu(i, r, void 0), ws(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, mt || a) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, En(e, o), Yt(r, e, o, -1));
    }
    return bd(), r = lu(Error($(421))), ws(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = KT.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Et = Vn(o.nextSibling), At = t, fe = !0, Kt = null, e !== null && (_t[Ot++] = vn, _t[Ot++] = wn, _t[Ot++] = Tr, vn = e.id, wn = e.overflow, Tr = t), t = Sd(t, r.children), t.flags |= 4096, t);
}
function Fp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rc(e.return, t, n);
}
function uu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Gg(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (st(e, t, r.children, n), r = pe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Fp(e, n, t);
          else if (e.tag === 19)
            Fp(e, n, t);
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
  if (ue(pe, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && aa(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), uu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && aa(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        uu(t, !0, n, null, i);
        break;
      case "together":
        uu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Is(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function An(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), kr |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error($(153));
  if (t.child !== null) {
    for (e = t.child, n = Xn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Xn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function _T(e, t, n) {
  switch (t.tag) {
    case 3:
      Wg(t), fo();
      break;
    case 5:
      Sg(t);
      break;
    case 1:
      gt(t.type) && ta(t);
      break;
    case 4:
      pd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ue(oa, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ue(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Yg(e, t, n) : (ue(pe, pe.current & 1), e = An(e, t, n), e !== null ? e.sibling : null);
      ue(pe, pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Gg(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ue(pe, pe.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Zg(e, t, n);
  }
  return An(e, t, n);
}
var Xg, dc, Jg, Qg;
Xg = function(e, t) {
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
dc = function() {
};
Jg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, hr(cn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Ou(e, o), r = Ou(e, r), i = [];
        break;
      case "select":
        o = he({}, o, { value: void 0 }), r = he({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Mu(e, o), r = Mu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qs);
    }
    Du(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a)
            a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (pi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
            for (s in l)
              l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
          } else
            n || (i || (i = []), i.push(
              u,
              n
            )), n = l;
        else
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (pi.hasOwnProperty(u) ? (l != null && u === "onScroll" && ce("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Qg = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Uo(e, t) {
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
function qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function OT(e, t, n) {
  var r = t.pendingProps;
  switch (sd(t), t.tag) {
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
      return qe(t), null;
    case 1:
      return gt(t.type) && ea(), qe(t), null;
    case 3:
      return r = t.stateNode, mo(), de(ht), de(nt), hd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ys(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Kt !== null && (wc(Kt), Kt = null))), dc(e, t), qe(t), null;
    case 5:
      md(t);
      var o = hr(Ci.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Jg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error($(166));
          return qe(t), null;
        }
        if (e = hr(cn.current), ys(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[an] = t, r[Ei] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Jo.length; o++)
                ce(Jo[o], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce(
                "error",
                r
              ), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              Gf(r, i), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ce("invalid", r);
              break;
            case "textarea":
              Jf(r, i), ce("invalid", r);
          }
          Du(n, i), o = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && gs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && gs(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : pi.hasOwnProperty(s) && a != null && s === "onScroll" && ce("scroll", r);
            }
          switch (n) {
            case "input":
              ls(r), Xf(r, i, !0);
              break;
            case "textarea":
              ls(r), Qf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = qs);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Nh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[an] = t, e[Ei] = r, Xg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Hu(n, r), n) {
              case "dialog":
                ce("cancel", e), ce("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Jo.length; o++)
                  ce(Jo[o], e);
                o = r;
                break;
              case "source":
                ce("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ce(
                  "error",
                  e
                ), ce("load", e), o = r;
                break;
              case "details":
                ce("toggle", e), o = r;
                break;
              case "input":
                Gf(e, r), o = Ou(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = he({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                Jf(e, r), o = Mu(e, r), ce("invalid", e);
                break;
              default:
                o = r;
            }
            Du(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? Ph(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && bh(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && mi(e, l) : typeof l == "number" && mi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (pi.hasOwnProperty(i) ? l != null && i === "onScroll" && ce("scroll", e) : l != null && Zc(e, i, l, s));
              }
            switch (n) {
              case "input":
                ls(e), Xf(e, r, !1);
                break;
              case "textarea":
                ls(e), Qf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Qn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? to(e, !!r.multiple, i, !1) : r.defaultValue != null && to(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = qs);
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
      return qe(t), null;
    case 6:
      if (e && t.stateNode != null)
        Qg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error($(166));
        if (n = hr(Ci.current), hr(cn.current), ys(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[an] = t, (i = r.nodeValue !== n) && (e = At, e !== null))
            switch (e.tag) {
              case 3:
                gs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && gs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[an] = t, t.stateNode = r;
      }
      return qe(t), null;
    case 13:
      if (de(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && Et !== null && t.mode & 1 && !(t.flags & 128))
          gg(), fo(), t.flags |= 98560, i = !1;
        else if (i = ys(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error($(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error($(317));
            i[an] = t;
          } else
            fo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          qe(t), i = !1;
        } else
          Kt !== null && (wc(Kt), Kt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? _e === 0 && (_e = 3) : bd())), t.updateQueue !== null && (t.flags |= 4), qe(t), null);
    case 4:
      return mo(), dc(e, t), e === null && Si(t.stateNode.containerInfo), qe(t), null;
    case 10:
      return cd(t.type._context), qe(t), null;
    case 17:
      return gt(t.type) && ea(), qe(t), null;
    case 19:
      if (de(pe), i = t.memoizedState, i === null)
        return qe(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r)
          Uo(i, !1);
        else {
          if (_e !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = aa(e), s !== null) {
                for (t.flags |= 128, Uo(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ue(pe, pe.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ae() > go && (t.flags |= 128, r = !0, Uo(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = aa(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Uo(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !fe)
              return qe(t), null;
          } else
            2 * Ae() - i.renderingStartTime > go && n !== 1073741824 && (t.flags |= 128, r = !0, Uo(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ae(), t.sibling = null, n = pe.current, ue(pe, r ? n & 1 | 2 : n & 1), t) : (qe(t), null);
    case 22:
    case 23:
      return Nd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Tt & 1073741824 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function RT(e, t) {
  switch (sd(t), t.tag) {
    case 1:
      return gt(t.type) && ea(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mo(), de(ht), de(nt), hd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return md(t), null;
    case 13:
      if (de(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error($(340));
        fo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return de(pe), null;
    case 4:
      return mo(), null;
    case 10:
      return cd(t.type._context), null;
    case 22:
    case 23:
      return Nd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ts = !1, tt = !1, $T = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Jr(e, t) {
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
function fc(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var Up = !1;
function MT(e, t) {
  if (Gu = Xs, e = rg(), od(e)) {
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
          var s = 0, a = -1, l = -1, u = 0, c = 0, f = e, p = null;
          t:
            for (; ; ) {
              for (var v; f !== n || o !== 0 && f.nodeType !== 3 || (a = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (v = f.firstChild) !== null; )
                p = f, f = v;
              for (; ; ) {
                if (f === e)
                  break t;
                if (p === n && ++u === o && (a = s), p === i && ++c === r && (l = s), (v = f.nextSibling) !== null)
                  break;
                f = p, p = f.parentNode;
              }
              f = v;
            }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Xu = { focusedElem: e, selectionRange: n }, Xs = !1, B = t; B !== null; )
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
                  var T = k.memoizedProps, L = k.memoizedState, y = t.stateNode, m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? T : jt(t.type, T), L);
                  y.__reactInternalSnapshotBeforeUpdate = m;
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
                throw Error($(163));
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
  return k = Up, Up = !1, k;
}
function ai(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && fc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function $a(e, t) {
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
function pc(e) {
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
function qg(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, qg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[an], delete t[Ei], delete t[qu], delete t[vT], delete t[wT])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ey(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jp(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ey(e.return))
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
function mc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = qs));
  else if (r !== 4 && (e = e.child, e !== null))
    for (mc(e, t, n), e = e.sibling; e !== null; )
      mc(e, t, n), e = e.sibling;
}
function hc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (hc(e, t, n), e = e.sibling; e !== null; )
      hc(e, t, n), e = e.sibling;
}
var Ke = null, Bt = !1;
function Ln(e, t, n) {
  for (n = n.child; n !== null; )
    ty(e, t, n), n = n.sibling;
}
function ty(e, t, n) {
  if (un && typeof un.onCommitFiberUnmount == "function")
    try {
      un.onCommitFiberUnmount(ba, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      tt || Jr(n, t);
    case 6:
      var r = Ke, o = Bt;
      Ke = null, Ln(e, t, n), Ke = r, Bt = o, Ke !== null && (Bt ? (e = Ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ke.removeChild(n.stateNode));
      break;
    case 18:
      Ke !== null && (Bt ? (e = Ke, n = n.stateNode, e.nodeType === 8 ? nu(e.parentNode, n) : e.nodeType === 1 && nu(e, n), vi(e)) : nu(Ke, n.stateNode));
      break;
    case 4:
      r = Ke, o = Bt, Ke = n.stateNode.containerInfo, Bt = !0, Ln(e, t, n), Ke = r, Bt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!tt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && fc(n, t, s), o = o.next;
        } while (o !== r);
      }
      Ln(e, t, n);
      break;
    case 1:
      if (!tt && (Jr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          ke(n, t, a);
        }
      Ln(e, t, n);
      break;
    case 21:
      Ln(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (tt = (r = tt) || n.memoizedState !== null, Ln(e, t, n), tt = r) : Ln(e, t, n);
      break;
    default:
      Ln(e, t, n);
  }
}
function Bp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $T()), t.forEach(function(r) {
      var o = ZT.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ut(e, t) {
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
                Ke = a.stateNode, Bt = !1;
                break e;
              case 3:
                Ke = a.stateNode.containerInfo, Bt = !0;
                break e;
              case 4:
                Ke = a.stateNode.containerInfo, Bt = !0;
                break e;
            }
            a = a.return;
          }
        if (Ke === null)
          throw Error($(160));
        ty(i, s, o), Ke = null, Bt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        ke(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ny(t, e), t = t.sibling;
}
function ny(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ut(t, e), en(e), r & 4) {
        try {
          ai(3, e, e.return), $a(3, e);
        } catch (T) {
          ke(e, e.return, T);
        }
        try {
          ai(5, e, e.return);
        } catch (T) {
          ke(e, e.return, T);
        }
      }
      break;
    case 1:
      Ut(t, e), en(e), r & 512 && n !== null && Jr(n, n.return);
      break;
    case 5:
      if (Ut(t, e), en(e), r & 512 && n !== null && Jr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          mi(o, "");
        } catch (T) {
          ke(e, e.return, T);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && Ah(o, i), Hu(a, s);
            var u = Hu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s], f = l[s + 1];
              c === "style" ? Ph(o, f) : c === "dangerouslySetInnerHTML" ? bh(o, f) : c === "children" ? mi(o, f) : Zc(o, c, f, u);
            }
            switch (a) {
              case "input":
                Ru(o, i);
                break;
              case "textarea":
                Ch(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null ? to(o, !!i.multiple, v, !1) : p !== !!i.multiple && (i.defaultValue != null ? to(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : to(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ei] = i;
          } catch (T) {
            ke(e, e.return, T);
          }
      }
      break;
    case 6:
      if (Ut(t, e), en(e), r & 4) {
        if (e.stateNode === null)
          throw Error($(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (T) {
          ke(e, e.return, T);
        }
      }
      break;
    case 3:
      if (Ut(t, e), en(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          vi(t.containerInfo);
        } catch (T) {
          ke(e, e.return, T);
        }
      break;
    case 4:
      Ut(t, e), en(e);
      break;
    case 13:
      Ut(t, e), en(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ad = Ae())), r & 4 && Bp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (tt = (u = tt) || c, Ut(t, e), tt = u) : Ut(t, e), en(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (B = e, c = e.child; c !== null; ) {
            for (f = B = c; B !== null; ) {
              switch (p = B, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ai(4, p, p.return);
                  break;
                case 1:
                  Jr(p, p.return);
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
                  Jr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Zp(f);
                    continue;
                  }
              }
              v !== null ? (v.return = p, B = v) : Zp(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = xh("display", s));
                } catch (T) {
                  ke(e, e.return, T);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (T) {
                  ke(e, e.return, T);
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
              c === f && (c = null), f = f.return;
            }
            c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      Ut(t, e), en(e), r & 4 && Bp(e);
      break;
    case 21:
      break;
    default:
      Ut(
        t,
        e
      ), en(e);
  }
}
function en(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ey(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (mi(o, ""), r.flags &= -33);
          var i = jp(e);
          hc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = jp(e);
          mc(e, a, s);
          break;
        default:
          throw Error($(161));
      }
    } catch (l) {
      ke(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function IT(e, t, n) {
  B = e, ry(e);
}
function ry(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ts;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || tt;
        a = Ts;
        var u = tt;
        if (Ts = s, (tt = l) && !u)
          for (B = o; B !== null; )
            s = B, l = s.child, s.tag === 22 && s.memoizedState !== null ? Vp(o) : l !== null ? (l.return = s, B = l) : Vp(o);
        for (; i !== null; )
          B = i, ry(i), i = i.sibling;
        B = o, Ts = a, tt = u;
      }
      Kp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : Kp(e);
  }
}
function Kp(e) {
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
              tt || $a(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !tt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && xp(t, i, r);
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
                xp(t, s, n);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && vi(f);
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
              throw Error($(163));
          }
        tt || t.flags & 512 && pc(t);
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
function Zp(e) {
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
function Vp(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $a(4, t);
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
            pc(t);
          } catch (l) {
            ke(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            pc(t);
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
var DT = Math.ceil, ca = bn.ReactCurrentDispatcher, kd = bn.ReactCurrentOwner, Mt = bn.ReactCurrentBatchConfig, te = 0, Fe = null, xe = null, We = 0, Tt = 0, Qr = rr(0), _e = 0, Pi = null, kr = 0, Ma = 0, Ed = 0, li = null, pt = null, Ad = 0, go = 1 / 0, mn = null, da = !1, gc = null, Yn = null, Ss = !1, Fn = null, fa = 0, ui = 0, yc = null, Ds = -1, Hs = 0;
function lt() {
  return te & 6 ? Ae() : Ds !== -1 ? Ds : Ds = Ae();
}
function Gn(e) {
  return e.mode & 1 ? te & 2 && We !== 0 ? We & -We : ST.transition !== null ? (Hs === 0 && (Hs = Uh()), Hs) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yh(e.type)), e) : 1;
}
function Yt(e, t, n, r) {
  if (50 < ui)
    throw ui = 0, yc = null, Error($(185));
  Ui(e, n, r), (!(te & 2) || e !== Fe) && (e === Fe && (!(te & 2) && (Ma |= n), _e === 4 && In(e, We)), yt(e, r), n === 1 && te === 0 && !(t.mode & 1) && (go = Ae() + 500, _a && or()));
}
function yt(e, t) {
  var n = e.callbackNode;
  Sw(e, t);
  var r = Gs(e, e === Fe ? We : 0);
  if (r === 0)
    n !== null && tp(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && tp(n), t === 1)
      e.tag === 0 ? TT(Wp.bind(null, e)) : pg(Wp.bind(null, e)), gT(function() {
        !(te & 6) && or();
      }), n = null;
    else {
      switch (jh(r)) {
        case 1:
          n = Xc;
          break;
        case 4:
          n = Hh;
          break;
        case 16:
          n = Ys;
          break;
        case 536870912:
          n = Fh;
          break;
        default:
          n = Ys;
      }
      n = dy(n, oy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function oy(e, t) {
  if (Ds = -1, Hs = 0, te & 6)
    throw Error($(327));
  var n = e.callbackNode;
  if (so() && e.callbackNode !== n)
    return null;
  var r = Gs(e, e === Fe ? We : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = pa(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var i = sy();
    (Fe !== e || We !== t) && (mn = null, go = Ae() + 500, yr(e, t));
    do
      try {
        UT();
        break;
      } catch (a) {
        iy(e, a);
      }
    while (1);
    ud(), ca.current = i, te = o, xe !== null ? t = 0 : (Fe = null, We = 0, t = _e);
  }
  if (t !== 0) {
    if (t === 2 && (o = Ku(e), o !== 0 && (r = o, t = vc(e, o))), t === 1)
      throw n = Pi, yr(e, 0), In(e, r), yt(e, Ae()), n;
    if (t === 6)
      In(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !HT(o) && (t = pa(e, r), t === 2 && (i = Ku(e), i !== 0 && (r = i, t = vc(e, i))), t === 1))
        throw n = Pi, yr(e, 0), In(e, r), yt(e, Ae()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          dr(e, pt, mn);
          break;
        case 3:
          if (In(e, r), (r & 130023424) === r && (t = Ad + 500 - Ae(), 10 < t)) {
            if (Gs(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              lt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Qu(dr.bind(null, e, pt, mn), t);
            break;
          }
          dr(e, pt, mn);
          break;
        case 4:
          if (In(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Wt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * DT(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Qu(dr.bind(null, e, pt, mn), r);
            break;
          }
          dr(e, pt, mn);
          break;
        case 5:
          dr(e, pt, mn);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return yt(e, Ae()), e.callbackNode === n ? oy.bind(null, e) : null;
}
function vc(e, t) {
  var n = li;
  return e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256), e = pa(e, t), e !== 2 && (t = pt, pt = n, t !== null && wc(t)), e;
}
function wc(e) {
  pt === null ? pt = e : pt.push.apply(pt, e);
}
function HT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Gt(i(), o))
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
function In(e, t) {
  for (t &= ~Ed, t &= ~Ma, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Wt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Wp(e) {
  if (te & 6)
    throw Error($(327));
  so();
  var t = Gs(e, 0);
  if (!(t & 1))
    return yt(e, Ae()), null;
  var n = pa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ku(e);
    r !== 0 && (t = r, n = vc(e, r));
  }
  if (n === 1)
    throw n = Pi, yr(e, 0), In(e, t), yt(e, Ae()), n;
  if (n === 6)
    throw Error($(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, dr(e, pt, mn), yt(e, Ae()), null;
}
function Cd(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = n, te === 0 && (go = Ae() + 500, _a && or());
  }
}
function Er(e) {
  Fn !== null && Fn.tag === 0 && !(te & 6) && so();
  var t = te;
  te |= 1;
  var n = Mt.transition, r = se;
  try {
    if (Mt.transition = null, se = 1, e)
      return e();
  } finally {
    se = r, Mt.transition = n, te = t, !(te & 6) && or();
  }
}
function Nd() {
  Tt = Qr.current, de(Qr);
}
function yr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, hT(n)), xe !== null)
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch (sd(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ea();
          break;
        case 3:
          mo(), de(ht), de(nt), hd();
          break;
        case 5:
          md(r);
          break;
        case 4:
          mo();
          break;
        case 13:
          de(pe);
          break;
        case 19:
          de(pe);
          break;
        case 10:
          cd(r.type._context);
          break;
        case 22:
        case 23:
          Nd();
      }
      n = n.return;
    }
  if (Fe = e, xe = e = Xn(e.current, null), We = Tt = t, _e = 0, Pi = null, Ed = Ma = kr = 0, pt = li = null, mr !== null) {
    for (t = 0; t < mr.length; t++)
      if (n = mr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = o, r.next = s;
        }
        n.pending = r;
      }
    mr = null;
  }
  return e;
}
function iy(e, t) {
  do {
    var n = xe;
    try {
      if (ud(), $s.current = ua, la) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        la = !1;
      }
      if (Sr = 0, He = Le = me = null, si = !1, Ni = 0, kd.current = null, n === null || n.return === null) {
        _e = 1, Pi = t, xe = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = We, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = Rp(s);
          if (v !== null) {
            v.flags &= -257, $p(v, s, a, i, t), v.mode & 1 && Op(i, u, t), t = v, l = u;
            var k = t.updateQueue;
            if (k === null) {
              var T = /* @__PURE__ */ new Set();
              T.add(l), t.updateQueue = T;
            } else
              k.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Op(i, u, t), bd();
              break e;
            }
            l = Error($(426));
          }
        } else if (fe && a.mode & 1) {
          var L = Rp(s);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), $p(L, s, a, i, t), ad(ho(l, a));
            break e;
          }
        }
        i = l = ho(l, a), _e !== 4 && (_e = 2), li === null ? li = [i] : li.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = jg(i, l, t);
              bp(i, y);
              break e;
            case 1:
              a = l;
              var m = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Yn === null || !Yn.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = Bg(i, a, t);
                bp(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ly(n);
    } catch (A) {
      t = A, xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function sy() {
  var e = ca.current;
  return ca.current = ua, e === null ? ua : e;
}
function bd() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4), Fe === null || !(kr & 268435455) && !(Ma & 268435455) || In(Fe, We);
}
function pa(e, t) {
  var n = te;
  te |= 2;
  var r = sy();
  (Fe !== e || We !== t) && (mn = null, yr(e, t));
  do
    try {
      FT();
      break;
    } catch (o) {
      iy(e, o);
    }
  while (1);
  if (ud(), te = n, ca.current = r, xe !== null)
    throw Error($(261));
  return Fe = null, We = 0, _e;
}
function FT() {
  for (; xe !== null; )
    ay(xe);
}
function UT() {
  for (; xe !== null && !fw(); )
    ay(xe);
}
function ay(e) {
  var t = cy(e.alternate, e, Tt);
  e.memoizedProps = e.pendingProps, t === null ? ly(e) : xe = t, kd.current = null;
}
function ly(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = RT(n, t), n !== null) {
        n.flags &= 32767, xe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        _e = 6, xe = null;
        return;
      }
    } else if (n = OT(n, t, Tt), n !== null) {
      xe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function dr(e, t, n) {
  var r = se, o = Mt.transition;
  try {
    Mt.transition = null, se = 1, jT(e, t, n, r);
  } finally {
    Mt.transition = o, se = r;
  }
  return null;
}
function jT(e, t, n, r) {
  do
    so();
  while (Fn !== null);
  if (te & 6)
    throw Error($(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error($(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (kw(e, i), e === Fe && (xe = Fe = null, We = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ss || (Ss = !0, dy(Ys, function() {
    return so(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Mt.transition, Mt.transition = null;
    var s = se;
    se = 1;
    var a = te;
    te |= 4, kd.current = null, MT(e, n), ny(n, e), lT(Xu), Xs = !!Gu, Xu = Gu = null, e.current = n, IT(n), pw(), te = a, se = s, Mt.transition = i;
  } else
    e.current = n;
  if (Ss && (Ss = !1, Fn = e, fa = o), i = e.pendingLanes, i === 0 && (Yn = null), gw(n.stateNode), yt(e, Ae()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (da)
    throw da = !1, e = gc, gc = null, e;
  return fa & 1 && e.tag !== 0 && so(), i = e.pendingLanes, i & 1 ? e === yc ? ui++ : (ui = 0, yc = e) : ui = 0, or(), null;
}
function so() {
  if (Fn !== null) {
    var e = jh(fa), t = Mt.transition, n = se;
    try {
      if (Mt.transition = null, se = 16 > e ? 16 : e, Fn === null)
        var r = !1;
      else {
        if (e = Fn, Fn = null, fa = 0, te & 6)
          throw Error($(331));
        var o = te;
        for (te |= 4, B = e.current; B !== null; ) {
          var i = B, s = i.child;
          if (B.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (B = u; B !== null; ) {
                  var c = B;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ai(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, B = f;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var p = c.sibling, v = c.return;
                      if (qg(c), c === u) {
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
                    var L = T.sibling;
                    T.sibling = null, T = L;
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
                      ai(9, i, i.return);
                  }
                var y = i.sibling;
                if (y !== null) {
                  y.return = i.return, B = y;
                  break e;
                }
                B = i.return;
              }
        }
        var m = e.current;
        for (B = m; B !== null; ) {
          s = B;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null)
            h.return = s, B = h;
          else
            e:
              for (s = m; B !== null; ) {
                if (a = B, a.flags & 2048)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $a(9, a);
                    }
                  } catch (A) {
                    ke(a, a.return, A);
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
        if (te = o, or(), un && typeof un.onPostCommitFiberRoot == "function")
          try {
            un.onPostCommitFiberRoot(ba, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      se = n, Mt.transition = t;
    }
  }
  return !1;
}
function Yp(e, t, n) {
  t = ho(n, t), t = jg(e, t, 1), e = Wn(e, t, 1), t = lt(), e !== null && (Ui(e, 1, t), yt(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3)
    Yp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yn === null || !Yn.has(r))) {
          e = ho(n, e), e = Bg(t, e, 1), t = Wn(t, e, 1), e = lt(), t !== null && (Ui(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function BT(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = lt(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (We & n) === n && (_e === 4 || _e === 3 && (We & 130023424) === We && 500 > Ae() - Ad ? yr(e, 0) : Ed |= n), yt(e, t);
}
function uy(e, t) {
  t === 0 && (e.mode & 1 ? (t = ds, ds <<= 1, !(ds & 130023424) && (ds = 4194304)) : t = 1);
  var n = lt();
  e = En(e, t), e !== null && (Ui(e, t, n), yt(e, n));
}
function KT(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), uy(e, n);
}
function ZT(e, t) {
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
      throw Error($(314));
  }
  r !== null && r.delete(t), uy(e, n);
}
var cy;
cy = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ht.current)
      mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return mt = !1, _T(e, t, n);
      mt = !!(e.flags & 131072);
    }
  else
    mt = !1, fe && t.flags & 1048576 && mg(t, ra, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Is(e, t), e = t.pendingProps;
      var o = co(t, nt.current);
      io(t, n), o = yd(null, t, r, e, o, n);
      var i = vd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gt(r) ? (i = !0, ta(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, fd(t), o.updater = Ra, t.stateNode = o, o._reactInternals = t, ic(t, r, e, n), t = lc(null, t, r, !0, i, n)) : (t.tag = 0, fe && i && id(t), st(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Is(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = WT(r), e = jt(r, e), o) {
          case 0:
            t = ac(null, t, r, e, n);
            break e;
          case 1:
            t = Dp(null, t, r, e, n);
            break e;
          case 11:
            t = Mp(null, t, r, e, n);
            break e;
          case 14:
            t = Ip(null, t, r, jt(r.type, e), n);
            break e;
        }
        throw Error($(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), ac(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), Dp(e, t, r, o, n);
    case 3:
      e: {
        if (Wg(t), e === null)
          throw Error($(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Tg(e, t), sa(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ho(Error($(423)), t), t = Hp(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = ho(Error($(424)), t), t = Hp(e, t, r, n, o);
            break e;
          } else
            for (Et = Vn(t.stateNode.containerInfo.firstChild), At = t, fe = !0, Kt = null, n = vg(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fo(), r === o) {
            t = An(e, t, n);
            break e;
          }
          st(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Sg(t), e === null && nc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Ju(r, o) ? s = null : i !== null && Ju(r, i) && (t.flags |= 32), Vg(e, t), st(e, t, s, n), t.child;
    case 6:
      return e === null && nc(t), null;
    case 13:
      return Yg(e, t, n);
    case 4:
      return pd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = po(t, null, r, n) : st(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), Mp(e, t, r, o, n);
    case 7:
      return st(e, t, t.pendingProps, n), t.child;
    case 8:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ue(oa, r._currentValue), r._currentValue = s, i !== null)
          if (Gt(i.value, s)) {
            if (i.children === o.children && !ht.current) {
              t = An(e, t, n);
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
                      l = Tn(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), rc(
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
                  throw Error($(341));
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), rc(s, n, t), s = i.sibling;
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
        st(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, io(t, n), o = It(o), r = r(o), t.flags |= 1, st(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = jt(r, t.pendingProps), o = jt(r.type, o), Ip(e, t, r, o, n);
    case 15:
      return Kg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), Is(e, t), t.tag = 1, gt(r) ? (e = !0, ta(t)) : e = !1, io(t, n), Ug(t, r, o), ic(t, r, o, n), lc(null, t, r, !0, e, n);
    case 19:
      return Gg(e, t, n);
    case 22:
      return Zg(e, t, n);
  }
  throw Error($(156, t.tag));
};
function dy(e, t) {
  return Dh(e, t);
}
function VT(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function $t(e, t, n, r) {
  return new VT(e, t, n, r);
}
function xd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function WT(e) {
  if (typeof e == "function")
    return xd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Wc)
      return 11;
    if (e === Yc)
      return 14;
  }
  return 2;
}
function Xn(e, t) {
  var n = e.alternate;
  return n === null ? (n = $t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Fs(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function")
    xd(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case jr:
          return vr(n.children, o, i, t);
        case Vc:
          s = 8, o |= 8;
          break;
        case Pu:
          return e = $t(12, n, t, o | 2), e.elementType = Pu, e.lanes = i, e;
        case zu:
          return e = $t(13, n, t, o), e.elementType = zu, e.lanes = i, e;
        case Lu:
          return e = $t(19, n, t, o), e.elementType = Lu, e.lanes = i, e;
        case Sh:
          return Ia(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case wh:
                s = 10;
                break e;
              case Th:
                s = 9;
                break e;
              case Wc:
                s = 11;
                break e;
              case Yc:
                s = 14;
                break e;
              case Rn:
                s = 16, r = null;
                break e;
            }
          throw Error($(130, e == null ? e : typeof e, ""));
      }
  return t = $t(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function vr(e, t, n, r) {
  return e = $t(7, e, r, t), e.lanes = n, e;
}
function Ia(e, t, n, r) {
  return e = $t(22, e, r, t), e.elementType = Sh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function cu(e, t, n) {
  return e = $t(6, e, null, t), e.lanes = n, e;
}
function du(e, t, n) {
  return t = $t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function YT(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Pd(e, t, n, r, o, i, s, a, l) {
  return e = new YT(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = $t(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fd(i), e;
}
function GT(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ur, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function fy(e) {
  if (!e)
    return qn;
  e = e._reactInternals;
  e: {
    if (br(e) !== e || e.tag !== 1)
      throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (gt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (gt(n))
      return fg(e, n, t);
  }
  return t;
}
function py(e, t, n, r, o, i, s, a, l) {
  return e = Pd(n, r, !0, e, o, i, s, a, l), e.context = fy(null), n = e.current, r = lt(), o = Gn(n), i = Tn(r, o), i.callback = t ?? null, Wn(n, i, o), e.current.lanes = o, Ui(e, o, r), yt(e, r), e;
}
function Da(e, t, n, r) {
  var o = t.current, i = lt(), s = Gn(o);
  return n = fy(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Wn(o, t, s), e !== null && (Yt(e, o, s, i), Rs(e, o, s)), s;
}
function ma(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zd(e, t) {
  Gp(e, t), (e = e.alternate) && Gp(e, t);
}
function XT() {
  return null;
}
var my = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ld(e) {
  this._internalRoot = e;
}
Ha.prototype.render = Ld.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error($(409));
  Da(e, t, null, null);
};
Ha.prototype.unmount = Ld.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Er(function() {
      Da(null, e, null, null);
    }), t[kn] = null;
  }
};
function Ha(e) {
  this._internalRoot = e;
}
Ha.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Zh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mn.length && t !== 0 && t < Mn[n].priority; n++)
      ;
    Mn.splice(n, 0, e), n === 0 && Wh(e);
  }
};
function _d(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Fa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Xp() {
}
function JT(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = ma(s);
        i.call(u);
      };
    }
    var s = py(t, r, e, 0, null, !1, !1, "", Xp);
    return e._reactRootContainer = s, e[kn] = s.current, Si(e.nodeType === 8 ? e.parentNode : e), Er(), s;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = ma(l);
      a.call(u);
    };
  }
  var l = Pd(e, 0, !1, null, null, !1, !1, "", Xp);
  return e._reactRootContainer = l, e[kn] = l.current, Si(e.nodeType === 8 ? e.parentNode : e), Er(function() {
    Da(t, l, n, r);
  }), l;
}
function Ua(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = ma(s);
        a.call(l);
      };
    }
    Da(t, s, e, o);
  } else
    s = JT(n, t, e, o, r);
  return ma(s);
}
Bh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xo(t.pendingLanes);
        n !== 0 && (Jc(t, n | 1), yt(t, Ae()), !(te & 6) && (go = Ae() + 500, or()));
      }
      break;
    case 13:
      Er(function() {
        var r = En(e, 1);
        if (r !== null) {
          var o = lt();
          Yt(r, e, 1, o);
        }
      }), zd(e, 1);
  }
};
Qc = function(e) {
  if (e.tag === 13) {
    var t = En(e, 134217728);
    if (t !== null) {
      var n = lt();
      Yt(t, e, 134217728, n);
    }
    zd(e, 134217728);
  }
};
Kh = function(e) {
  if (e.tag === 13) {
    var t = Gn(e), n = En(e, t);
    if (n !== null) {
      var r = lt();
      Yt(n, e, t, r);
    }
    zd(e, t);
  }
};
Zh = function() {
  return se;
};
Vh = function(e, t) {
  var n = se;
  try {
    return se = e, t();
  } finally {
    se = n;
  }
};
Uu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ru(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = La(r);
            if (!o)
              throw Error($(90));
            Eh(r), Ru(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ch(e, n);
      break;
    case "select":
      t = n.value, t != null && to(e, !!n.multiple, t, !1);
  }
};
_h = Cd;
Oh = Er;
var QT = { usingClientEntryPoint: !1, Events: [Bi, Vr, La, zh, Lh, Cd] }, jo = { findFiberByHostInstance: pr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qT = { bundleType: jo.bundleType, version: jo.version, rendererPackageName: jo.rendererPackageName, rendererConfig: jo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: bn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Mh(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jo.findFiberByHostInstance || XT, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ks.isDisabled && ks.supportsFiber)
    try {
      ba = ks.inject(qT), un = ks;
    } catch {
    }
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QT;
bt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_d(t))
    throw Error($(200));
  return GT(e, t, null, n);
};
bt.createRoot = function(e, t) {
  if (!_d(e))
    throw Error($(299));
  var n = !1, r = "", o = my;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Pd(e, 1, !1, null, null, n, !1, r, o), e[kn] = t.current, Si(e.nodeType === 8 ? e.parentNode : e), new Ld(t);
};
bt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error($(188)) : (e = Object.keys(e).join(","), Error($(268, e)));
  return e = Mh(t), e = e === null ? null : e.stateNode, e;
};
bt.flushSync = function(e) {
  return Er(e);
};
bt.hydrate = function(e, t, n) {
  if (!Fa(t))
    throw Error($(200));
  return Ua(null, e, t, !0, n);
};
bt.hydrateRoot = function(e, t, n) {
  if (!_d(e))
    throw Error($(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = my;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = py(t, null, e, 1, n ?? null, o, !1, i, s), e[kn] = t.current, Si(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Ha(t);
};
bt.render = function(e, t, n) {
  if (!Fa(t))
    throw Error($(200));
  return Ua(null, e, t, !1, n);
};
bt.unmountComponentAtNode = function(e) {
  if (!Fa(e))
    throw Error($(40));
  return e._reactRootContainer ? (Er(function() {
    Ua(null, null, e, !1, function() {
      e._reactRootContainer = null, e[kn] = null;
    });
  }), !0) : !1;
};
bt.unstable_batchedUpdates = Cd;
bt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Fa(n))
    throw Error($(200));
  if (e == null || e._reactInternals === void 0)
    throw Error($(38));
  return Ua(e, t, n, !1, r);
};
bt.version = "18.3.1-next-f1338f8080-20240426";
function hy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hy);
    } catch (e) {
      console.error(e);
    }
}
hy(), hh.exports = bt;
var e1 = hh.exports, gy, Jp = e1;
gy = Jp.createRoot, Jp.hydrateRoot;
function t1(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Qp = "$$material";
function Ye() {
  return Ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ye.apply(null, arguments);
}
function ja(e, t) {
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
var n1 = !1;
function r1(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function o1(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var i1 = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !n1 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(o1(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = r1(o);
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
}(), et = "-ms-", ha = "-moz-", re = "-webkit-", yy = "comm", Od = "rule", Rd = "decl", s1 = "@import", vy = "@keyframes", a1 = "@layer", l1 = Math.abs, Ba = String.fromCharCode, u1 = Object.assign;
function c1(e, t) {
  return Ze(e, 0) ^ 45 ? (((t << 2 ^ Ze(e, 0)) << 2 ^ Ze(e, 1)) << 2 ^ Ze(e, 2)) << 2 ^ Ze(e, 3) : 0;
}
function wy(e) {
  return e.trim();
}
function d1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, n) {
  return e.replace(t, n);
}
function Tc(e, t) {
  return e.indexOf(t);
}
function Ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function zi(e, t, n) {
  return e.slice(t, n);
}
function on(e) {
  return e.length;
}
function $d(e) {
  return e.length;
}
function Es(e, t) {
  return t.push(e), e;
}
function f1(e, t) {
  return e.map(t).join("");
}
var Ka = 1, yo = 1, Ty = 0, vt = 0, be = 0, Co = "";
function Za(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ka, column: yo, length: s, return: "" };
}
function Bo(e, t) {
  return u1(Za("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function p1() {
  return be;
}
function m1() {
  return be = vt > 0 ? Ze(Co, --vt) : 0, yo--, be === 10 && (yo = 1, Ka--), be;
}
function Ct() {
  return be = vt < Ty ? Ze(Co, vt++) : 0, yo++, be === 10 && (yo = 1, Ka++), be;
}
function dn() {
  return Ze(Co, vt);
}
function Us() {
  return vt;
}
function Zi(e, t) {
  return zi(Co, e, t);
}
function Li(e) {
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
function Sy(e) {
  return Ka = yo = 1, Ty = on(Co = e), vt = 0, [];
}
function ky(e) {
  return Co = "", e;
}
function js(e) {
  return wy(Zi(vt - 1, Sc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function h1(e) {
  for (; (be = dn()) && be < 33; )
    Ct();
  return Li(e) > 2 || Li(be) > 3 ? "" : " ";
}
function g1(e, t) {
  for (; --t && Ct() && !(be < 48 || be > 102 || be > 57 && be < 65 || be > 70 && be < 97); )
    ;
  return Zi(e, Us() + (t < 6 && dn() == 32 && Ct() == 32));
}
function Sc(e) {
  for (; Ct(); )
    switch (be) {
      case e:
        return vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sc(be);
        break;
      case 40:
        e === 41 && Sc(e);
        break;
      case 92:
        Ct();
        break;
    }
  return vt;
}
function y1(e, t) {
  for (; Ct() && e + be !== 47 + 10; )
    if (e + be === 42 + 42 && dn() === 47)
      break;
  return "/*" + Zi(t, vt - 1) + "*" + Ba(e === 47 ? e : Ct());
}
function v1(e) {
  for (; !Li(dn()); )
    Ct();
  return Zi(e, vt);
}
function w1(e) {
  return ky(Bs("", null, null, null, [""], e = Sy(e), 0, [0], e));
}
function Bs(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, c = 0, f = s, p = 0, v = 0, k = 0, T = 1, L = 1, y = 1, m = 0, h = "", b = o, A = i, N = r, S = h; L; )
    switch (k = m, m = Ct()) {
      case 40:
        if (k != 108 && Ze(S, f - 1) == 58) {
          Tc(S += oe(js(m), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += js(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += h1(k);
        break;
      case 92:
        S += g1(Us() - 1, 7);
        continue;
      case 47:
        switch (dn()) {
          case 42:
          case 47:
            Es(T1(y1(Ct(), Us()), t, n), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * T:
        a[u++] = on(S) * y;
      case 125 * T:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            L = 0;
          case 59 + c:
            y == -1 && (S = oe(S, /\f/g, "")), v > 0 && on(S) - f && Es(v > 32 ? em(S + ";", r, n, f - 1) : em(oe(S, " ", "") + ";", r, n, f - 2), l);
            break;
          case 59:
            S += ";";
          default:
            if (Es(N = qp(S, t, n, u, c, o, a, h, b = [], A = [], f), i), m === 123)
              if (c === 0)
                Bs(S, t, N, N, b, i, f, a, A);
              else
                switch (p === 99 && Ze(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Bs(e, N, N, r && Es(qp(e, N, N, 0, 0, o, a, h, o, b = [], f), A), o, A, f, a, r ? b : A);
                    break;
                  default:
                    Bs(S, N, N, N, [""], A, 0, a, A);
                }
        }
        u = c = v = 0, T = y = 1, h = S = "", f = s;
        break;
      case 58:
        f = 1 + on(S), v = k;
      default:
        if (T < 1) {
          if (m == 123)
            --T;
          else if (m == 125 && T++ == 0 && m1() == 125)
            continue;
        }
        switch (S += Ba(m), m * T) {
          case 38:
            y = c > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            a[u++] = (on(S) - 1) * y, y = 1;
            break;
          case 64:
            dn() === 45 && (S += js(Ct())), p = dn(), c = f = on(h = S += v1(Us())), m++;
            break;
          case 45:
            k === 45 && on(S) == 2 && (T = 0);
        }
    }
  return i;
}
function qp(e, t, n, r, o, i, s, a, l, u, c) {
  for (var f = o - 1, p = o === 0 ? i : [""], v = $d(p), k = 0, T = 0, L = 0; k < r; ++k)
    for (var y = 0, m = zi(e, f + 1, f = l1(T = s[k])), h = e; y < v; ++y)
      (h = wy(T > 0 ? p[y] + " " + m : oe(m, /&\f/g, p[y]))) && (l[L++] = h);
  return Za(e, t, n, o === 0 ? Od : a, l, u, c);
}
function T1(e, t, n) {
  return Za(e, t, n, yy, Ba(p1()), zi(e, 2, -2), 0);
}
function em(e, t, n, r) {
  return Za(e, t, n, Rd, zi(e, 0, r), zi(e, r + 1, -1), r);
}
function ao(e, t) {
  for (var n = "", r = $d(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function S1(e, t, n, r) {
  switch (e.type) {
    case a1:
      if (e.children.length)
        break;
    case s1:
    case Rd:
      return e.return = e.return || e.value;
    case yy:
      return "";
    case vy:
      return e.return = e.value + "{" + ao(e.children, r) + "}";
    case Od:
      e.value = e.props.join(",");
  }
  return on(n = ao(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function k1(e) {
  var t = $d(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function E1(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ey(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var A1 = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = dn(), o === 38 && i === 12 && (n[r] = 1), !Li(i); )
    Ct();
  return Zi(t, vt);
}, C1 = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Li(o)) {
      case 0:
        o === 38 && dn() === 12 && (n[r] = 1), t[r] += A1(vt - 1, n, r);
        break;
      case 2:
        t[r] += js(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = dn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Ba(o);
    }
  while (o = Ct());
  return t;
}, N1 = function(t, n) {
  return ky(C1(Sy(t), n));
}, tm = /* @__PURE__ */ new WeakMap(), b1 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !tm.get(r)) && !o) {
      tm.set(t, !0);
      for (var i = [], s = N1(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
        for (var c = 0; c < a.length; c++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
    }
  }
}, x1 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ay(e, t) {
  switch (c1(e, t)) {
    case 5103:
      return re + "print-" + e + e;
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
      return re + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + ha + e + et + e + e;
    case 6828:
    case 4268:
      return re + e + et + e + e;
    case 6165:
      return re + e + et + "flex-" + e + e;
    case 5187:
      return re + e + oe(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + et + "flex-$1$2") + e;
    case 5443:
      return re + e + et + "flex-item-" + oe(e, /flex-|-self/, "") + e;
    case 4675:
      return re + e + et + "flex-line-pack" + oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return re + e + et + oe(e, "shrink", "negative") + e;
    case 5292:
      return re + e + et + oe(e, "basis", "preferred-size") + e;
    case 6060:
      return re + "box-" + oe(e, "-grow", "") + re + e + et + oe(e, "grow", "positive") + e;
    case 4554:
      return re + oe(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
    case 6187:
      return oe(oe(oe(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return oe(e, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return oe(oe(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + re + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return oe(e, /(.+)-inline(.+)/, re + "$1$2") + e;
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
      if (on(e) - 1 - t > 6)
        switch (Ze(e, t + 1)) {
          case 109:
            if (Ze(e, t + 4) !== 45)
              break;
          case 102:
            return oe(e, /(.+:)(.+)-([^]+)/, "$1" + re + "$2-$3$1" + ha + (Ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Tc(e, "stretch") ? Ay(oe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ze(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ze(e, on(e) - 3 - (~Tc(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + re) + e;
        case 101:
          return oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + re + (Ze(e, 14) === 45 ? "inline-" : "") + "box$3$1" + re + "$2$3$1" + et + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ze(e, t + 11)) {
        case 114:
          return re + e + et + oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return re + e + et + oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return re + e + et + oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return re + e + et + e + e;
  }
  return e;
}
var P1 = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Rd:
        t.return = Ay(t.value, t.length);
        break;
      case vy:
        return ao([Bo(t, {
          value: oe(t.value, "@", "@" + re)
        })], o);
      case Od:
        if (t.length)
          return f1(t.props, function(i) {
            switch (d1(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ao([Bo(t, {
                  props: [oe(i, /:(read-\w+)/, ":" + ha + "$1")]
                })], o);
              case "::placeholder":
                return ao([Bo(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + re + "input-$1")]
                }), Bo(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + ha + "$1")]
                }), Bo(t, {
                  props: [oe(i, /:(plac\w+)/, et + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, z1 = [P1], L1 = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(T) {
      var L = T.getAttribute("data-emotion");
      L.indexOf(" ") !== -1 && (document.head.appendChild(T), T.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || z1, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(T) {
      for (var L = T.getAttribute("data-emotion").split(" "), y = 1; y < L.length; y++)
        i[L[y]] = !0;
      a.push(T);
    }
  );
  var l, u = [b1, x1];
  {
    var c, f = [S1, E1(function(T) {
      c.insert(T);
    })], p = k1(u.concat(o, f)), v = function(L) {
      return ao(w1(L), p);
    };
    l = function(L, y, m, h) {
      c = m, v(L ? L + "{" + y.styles + "}" : y.styles), h && (k.inserted[y.name] = !0);
    };
  }
  var k = {
    key: n,
    sheet: new i1({
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
}, Cy = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je = typeof Symbol == "function" && Symbol.for, Md = je ? Symbol.for("react.element") : 60103, Id = je ? Symbol.for("react.portal") : 60106, Va = je ? Symbol.for("react.fragment") : 60107, Wa = je ? Symbol.for("react.strict_mode") : 60108, Ya = je ? Symbol.for("react.profiler") : 60114, Ga = je ? Symbol.for("react.provider") : 60109, Xa = je ? Symbol.for("react.context") : 60110, Dd = je ? Symbol.for("react.async_mode") : 60111, Ja = je ? Symbol.for("react.concurrent_mode") : 60111, Qa = je ? Symbol.for("react.forward_ref") : 60112, qa = je ? Symbol.for("react.suspense") : 60113, _1 = je ? Symbol.for("react.suspense_list") : 60120, el = je ? Symbol.for("react.memo") : 60115, tl = je ? Symbol.for("react.lazy") : 60116, O1 = je ? Symbol.for("react.block") : 60121, R1 = je ? Symbol.for("react.fundamental") : 60117, $1 = je ? Symbol.for("react.responder") : 60118, M1 = je ? Symbol.for("react.scope") : 60119;
function Pt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Md:
        switch (e = e.type, e) {
          case Dd:
          case Ja:
          case Va:
          case Ya:
          case Wa:
          case qa:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Xa:
              case Qa:
              case tl:
              case el:
              case Ga:
                return e;
              default:
                return t;
            }
        }
      case Id:
        return t;
    }
  }
}
function Ny(e) {
  return Pt(e) === Ja;
}
le.AsyncMode = Dd;
le.ConcurrentMode = Ja;
le.ContextConsumer = Xa;
le.ContextProvider = Ga;
le.Element = Md;
le.ForwardRef = Qa;
le.Fragment = Va;
le.Lazy = tl;
le.Memo = el;
le.Portal = Id;
le.Profiler = Ya;
le.StrictMode = Wa;
le.Suspense = qa;
le.isAsyncMode = function(e) {
  return Ny(e) || Pt(e) === Dd;
};
le.isConcurrentMode = Ny;
le.isContextConsumer = function(e) {
  return Pt(e) === Xa;
};
le.isContextProvider = function(e) {
  return Pt(e) === Ga;
};
le.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Md;
};
le.isForwardRef = function(e) {
  return Pt(e) === Qa;
};
le.isFragment = function(e) {
  return Pt(e) === Va;
};
le.isLazy = function(e) {
  return Pt(e) === tl;
};
le.isMemo = function(e) {
  return Pt(e) === el;
};
le.isPortal = function(e) {
  return Pt(e) === Id;
};
le.isProfiler = function(e) {
  return Pt(e) === Ya;
};
le.isStrictMode = function(e) {
  return Pt(e) === Wa;
};
le.isSuspense = function(e) {
  return Pt(e) === qa;
};
le.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Va || e === Ja || e === Ya || e === Wa || e === qa || e === _1 || typeof e == "object" && e !== null && (e.$$typeof === tl || e.$$typeof === el || e.$$typeof === Ga || e.$$typeof === Xa || e.$$typeof === Qa || e.$$typeof === R1 || e.$$typeof === $1 || e.$$typeof === M1 || e.$$typeof === O1);
};
le.typeOf = Pt;
Cy.exports = le;
var I1 = Cy.exports, by = I1, D1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, H1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, xy = {};
xy[by.ForwardRef] = D1;
xy[by.Memo] = H1;
var F1 = !0;
function Py(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Hd = function(t, n, r) {
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
  F1 === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Fd = function(t, n, r) {
  Hd(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function U1(e) {
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
var j1 = {
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
}, B1 = !1, K1 = /[A-Z]|^ms/g, Z1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, zy = function(t) {
  return t.charCodeAt(1) === 45;
}, nm = function(t) {
  return t != null && typeof t != "boolean";
}, fu = /* @__PURE__ */ Ey(function(e) {
  return zy(e) ? e : e.replace(K1, "-$&").toLowerCase();
}), rm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Z1, function(r, o, i) {
          return sn = {
            name: o,
            styles: i,
            next: sn
          }, o;
        });
  }
  return j1[t] !== 1 && !zy(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, V1 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
        return sn = {
          name: o.name,
          styles: o.styles,
          next: sn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            sn = {
              name: s.name,
              styles: s.styles,
              next: sn
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return W1(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = sn, u = n(e);
        return sn = l, _i(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null)
    return c;
  var f = t[c];
  return f !== void 0 ? f : c;
}
function W1(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += _i(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : nm(a) && (r += fu(i) + ":" + rm(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && B1)
          throw new Error(V1);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            nm(s[l]) && (r += fu(i) + ":" + rm(i, s[l]) + ";");
        else {
          var u = _i(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += fu(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var om = /label:\s*([^\s;{]+)\s*(;|$)/g, sn;
function nl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  sn = void 0;
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
  om.lastIndex = 0;
  for (var u = "", c; (c = om.exec(o)) !== null; )
    u += "-" + c[1];
  var f = U1(o) + u;
  return {
    name: f,
    styles: o,
    next: sn
  };
}
var Y1 = function(t) {
  return t();
}, Ly = bu["useInsertionEffect"] ? bu["useInsertionEffect"] : !1, _y = Ly || Y1, im = Ly || E.useLayoutEffect, G1 = !1, Oy = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ L1({
    key: "css"
  }) : null
);
Oy.Provider;
var Ud = function(t) {
  return /* @__PURE__ */ E.forwardRef(function(n, r) {
    var o = E.useContext(Oy);
    return t(n, o, r);
  });
}, Vi = /* @__PURE__ */ E.createContext({}), jd = {}.hasOwnProperty, kc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", X1 = function(t, n) {
  var r = {};
  for (var o in n)
    jd.call(n, o) && (r[o] = n[o]);
  return r[kc] = t, r;
}, J1 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Hd(n, r, o), _y(function() {
    return Fd(n, r, o);
  }), null;
}, Q1 = /* @__PURE__ */ Ud(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[kc], i = [r], s = "";
  typeof e.className == "string" ? s = Py(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = nl(i, void 0, E.useContext(Vi));
  s += t.key + "-" + a.name;
  var l = {};
  for (var u in e)
    jd.call(e, u) && u !== "css" && u !== kc && !G1 && (l[u] = e[u]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(J1, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ E.createElement(o, l));
}), q1 = Q1, pu = { exports: {} }, sm;
function eS() {
  return sm || (sm = 1, function(e) {
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
  }(pu)), pu.exports;
}
eS();
var am = function(t, n) {
  var r = arguments;
  if (n == null || !jd.call(n, "css"))
    return E.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = q1, i[1] = X1(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return E.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(am || (am = {}));
var tS = /* @__PURE__ */ Ud(function(e, t) {
  var n = e.styles, r = nl([n], void 0, E.useContext(Vi)), o = E.useRef();
  return im(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), im(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Fd(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
}), nS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, rS = /* @__PURE__ */ Ey(
  function(e) {
    return nS.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), oS = !1, iS = rS, sS = function(t) {
  return t !== "theme";
}, lm = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? iS : sS;
}, um = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, aS = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Hd(n, r, o), _y(function() {
    return Fd(n, r, o);
  }), null;
}, lS = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = um(t, n, r), l = a || lm(o), u = !l("as");
  return function() {
    var c = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      f.push.apply(f, c);
    else {
      var p = c[0];
      f.push(p[0]);
      for (var v = c.length, k = 1; k < v; k++)
        f.push(c[k], p[k]);
    }
    var T = Ud(function(L, y, m) {
      var h = u && L.as || o, b = "", A = [], N = L;
      if (L.theme == null) {
        N = {};
        for (var S in L)
          N[S] = L[S];
        N.theme = E.useContext(Vi);
      }
      typeof L.className == "string" ? b = Py(y.registered, A, L.className) : L.className != null && (b = L.className + " ");
      var z = nl(f.concat(A), y.registered, N);
      b += y.key + "-" + z.name, s !== void 0 && (b += " " + s);
      var j = u && a === void 0 ? lm(h) : l, _ = {};
      for (var D in L)
        u && D === "as" || j(D) && (_[D] = L[D]);
      return _.className = b, m && (_.ref = m), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(aS, {
        cache: y,
        serialized: z,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ E.createElement(h, _));
    });
    return T.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", T.defaultProps = t.defaultProps, T.__emotion_real = T, T.__emotion_base = o, T.__emotion_styles = f, T.__emotion_forwardProp = a, Object.defineProperty(T, "toString", {
      value: function() {
        return s === void 0 && oS ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), T.withComponent = function(L, y) {
      var m = e(L, Ye({}, n, y, {
        shouldForwardProp: um(T, y, !0)
      }));
      return m.apply(void 0, f);
    }, T;
  };
}, uS = [
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
], cm = lS.bind(null);
uS.forEach(function(e) {
  cm[e] = cm(e);
});
function cS(e) {
  return e == null || Object.keys(e).length === 0;
}
function dS(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ d(tS, {
    styles: typeof t == "function" ? (o) => t(cS(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const dm = [];
function fS(e) {
  return dm[0] = e, nl(dm);
}
function Hr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ry(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !Hr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ry(e[n]);
  }), t;
}
function ga(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? Ye({}, e) : e;
  return Hr(e) && Hr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ E.isValidElement(t[o]) ? r[o] = t[o] : Hr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Hr(e[o]) ? r[o] = ga(e[o], t[o], n) : n.clone ? r[o] = Hr(t[o]) ? Ry(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const pS = ["values", "unit", "step"], mS = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => Ye({}, n, {
    [r.key]: r.val
  }), {});
};
function hS(e) {
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
  } = e, o = ja(e, pS), i = mS(t), s = Object.keys(i);
  function a(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, v) {
    const k = s.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(k !== -1 && typeof t[s[k]] == "number" ? t[s[k]] : v) - r / 100}${n})`;
  }
  function c(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : a(p);
  }
  function f(p) {
    const v = s.indexOf(p);
    return v === 0 ? a(s[1]) : v === s.length - 1 ? l(s[v]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return Ye({
    keys: s,
    values: i,
    up: a,
    down: l,
    between: u,
    only: c,
    not: f,
    unit: n
  }, o);
}
const gS = {
  borderRadius: 4
}, yS = gS;
function ci(e, t) {
  return t ? ga(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Bd = {
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
}, fm = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Bd[e]}px)`
};
function Cn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || fm;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || fm;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Bd).indexOf(a) !== -1) {
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
function vS(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function pm(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function $y(e) {
  if (typeof e != "string")
    throw new Error(t1(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function rl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function ya(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = rl(e, n) || r, t && (o = t(o, r, e)), o;
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
    const a = s[t], l = s.theme, u = rl(l, r) || {};
    return Cn(s, a, (f) => {
      let p = ya(u, o, f);
      return f === p && typeof f == "string" && (p = ya(u, o, `${t}${f === "default" ? "" : $y(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function wS(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const TS = {
  m: "margin",
  p: "padding"
}, SS = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, mm = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, kS = wS((e) => {
  if (e.length > 2)
    if (mm[e])
      e = mm[e];
    else
      return [e];
  const [t, n] = e.split(""), r = TS[t], o = SS[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Kd = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Zd = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Kd, ...Zd];
function Wi(e, t, n, r) {
  var o;
  const i = (o = rl(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function My(e) {
  return Wi(e, "spacing", 8);
}
function Yi(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function ES(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Yi(t, n), r), {});
}
function AS(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = kS(n), i = ES(o, r), s = e[n];
  return Cn(e, s, i);
}
function Iy(e, t) {
  const n = My(e.theme);
  return Object.keys(e).map((r) => AS(e, t, r, n)).reduce(ci, {});
}
function Te(e) {
  return Iy(e, Kd);
}
Te.propTypes = {};
Te.filterProps = Kd;
function Se(e) {
  return Iy(e, Zd);
}
Se.propTypes = {};
Se.filterProps = Zd;
function CS(e = 8) {
  if (e.mui)
    return e;
  const t = My({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function ol(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? ci(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Rt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ht(e, t) {
  return Ce({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const NS = Ht("border", Rt), bS = Ht("borderTop", Rt), xS = Ht("borderRight", Rt), PS = Ht("borderBottom", Rt), zS = Ht("borderLeft", Rt), LS = Ht("borderColor"), _S = Ht("borderTopColor"), OS = Ht("borderRightColor"), RS = Ht("borderBottomColor"), $S = Ht("borderLeftColor"), MS = Ht("outline", Rt), IS = Ht("outlineColor"), il = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Wi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Yi(t, r)
    });
    return Cn(e, e.borderRadius, n);
  }
  return null;
};
il.propTypes = {};
il.filterProps = ["borderRadius"];
ol(NS, bS, xS, PS, zS, LS, _S, OS, RS, $S, il, MS, IS);
const sl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Wi(e.theme, "spacing", 8), n = (r) => ({
      gap: Yi(t, r)
    });
    return Cn(e, e.gap, n);
  }
  return null;
};
sl.propTypes = {};
sl.filterProps = ["gap"];
const al = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Wi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Yi(t, r)
    });
    return Cn(e, e.columnGap, n);
  }
  return null;
};
al.propTypes = {};
al.filterProps = ["columnGap"];
const ll = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Wi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Yi(t, r)
    });
    return Cn(e, e.rowGap, n);
  }
  return null;
};
ll.propTypes = {};
ll.filterProps = ["rowGap"];
const DS = Ce({
  prop: "gridColumn"
}), HS = Ce({
  prop: "gridRow"
}), FS = Ce({
  prop: "gridAutoFlow"
}), US = Ce({
  prop: "gridAutoColumns"
}), jS = Ce({
  prop: "gridAutoRows"
}), BS = Ce({
  prop: "gridTemplateColumns"
}), KS = Ce({
  prop: "gridTemplateRows"
}), ZS = Ce({
  prop: "gridTemplateAreas"
}), VS = Ce({
  prop: "gridArea"
});
ol(sl, al, ll, DS, HS, FS, US, jS, BS, KS, ZS, VS);
function lo(e, t) {
  return t === "grey" ? t : e;
}
const WS = Ce({
  prop: "color",
  themeKey: "palette",
  transform: lo
}), YS = Ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: lo
}), GS = Ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: lo
});
ol(WS, YS, GS);
function St(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const XS = Ce({
  prop: "width",
  transform: St
}), Vd = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Bd[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: St(n)
      };
    };
    return Cn(e, e.maxWidth, t);
  }
  return null;
};
Vd.filterProps = ["maxWidth"];
const JS = Ce({
  prop: "minWidth",
  transform: St
}), QS = Ce({
  prop: "height",
  transform: St
}), qS = Ce({
  prop: "maxHeight",
  transform: St
}), ek = Ce({
  prop: "minHeight",
  transform: St
});
Ce({
  prop: "size",
  cssProperty: "width",
  transform: St
});
Ce({
  prop: "size",
  cssProperty: "height",
  transform: St
});
const tk = Ce({
  prop: "boxSizing"
});
ol(XS, Vd, JS, QS, qS, ek, tk);
const nk = {
  // borders
  border: {
    themeKey: "borders",
    transform: Rt
  },
  borderTop: {
    themeKey: "borders",
    transform: Rt
  },
  borderRight: {
    themeKey: "borders",
    transform: Rt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Rt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Rt
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
    transform: Rt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: il
  },
  // palette
  color: {
    themeKey: "palette",
    transform: lo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: lo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: lo
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
    style: sl
  },
  rowGap: {
    style: ll
  },
  columnGap: {
    style: al
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
    style: Vd
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
}, Dy = nk;
function rk(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function ok(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ik() {
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
      themeKey: u,
      transform: c,
      style: f
    } = a;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = rl(o, u) || {};
    return f ? f(s) : Cn(s, r, (k) => {
      let T = ya(p, c, k);
      return k === T && typeof k == "string" && (T = ya(p, c, `${n}${k === "default" ? "" : $y(k)}`, k)), l === !1 ? T : {
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
    const a = (r = i.unstable_sxConfig) != null ? r : Dy;
    function l(u) {
      let c = u;
      if (typeof u == "function")
        c = u(i);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const f = vS(i.breakpoints), p = Object.keys(f);
      let v = f;
      return Object.keys(c).forEach((k) => {
        const T = ok(c[k], i);
        if (T != null)
          if (typeof T == "object")
            if (a[k])
              v = ci(v, e(k, T, i, a));
            else {
              const L = Cn({
                theme: i
              }, T, (y) => ({
                [k]: y
              }));
              rk(L, T) ? v[k] = t({
                sx: T,
                theme: i,
                nested: !0
              }) : v = ci(v, L);
            }
          else
            v = ci(v, e(k, T, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": pm(p, v)
      } : pm(p, v);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const Hy = ik();
Hy.filterProps = ["sx"];
const sk = Hy;
function ak(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const lk = ["breakpoints", "palette", "spacing", "shape"];
function uk(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = ja(e, lk), a = hS(n), l = CS(o);
  let u = ga({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Ye({
      mode: "light"
    }, r),
    spacing: l,
    shape: Ye({}, yS, i)
  }, s);
  return u.applyStyles = ak, u = t.reduce((c, f) => ga(c, f), u), u.unstable_sxConfig = Ye({}, Dy, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return sk({
      sx: f,
      theme: this
    });
  }, u;
}
function ck(e) {
  return Object.keys(e).length === 0;
}
function Wd(e = null) {
  const t = E.useContext(Vi);
  return !t || ck(t) ? e : t;
}
const dk = uk();
function fk(e = dk) {
  return Wd(e);
}
function mu(e) {
  const t = fS(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function pk({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = fk(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => mu(typeof s == "function" ? s(o) : s)) : i = mu(i)), /* @__PURE__ */ d(dS, {
    styles: i
  });
}
const mk = typeof window < "u" ? E.useLayoutEffect : E.useEffect, hk = mk;
let hm = 0;
function gk(e) {
  const [t, n] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && (hm += 1, n(`mui-${hm}`));
  }, [t]), r;
}
const gm = bu["useId".toString()];
function yk(e) {
  if (gm !== void 0) {
    const t = gm();
    return e ?? t;
  }
  return gk(e);
}
const vk = /* @__PURE__ */ E.createContext(null), Fy = vk;
function Uy() {
  return E.useContext(Fy);
}
const wk = typeof Symbol == "function" && Symbol.for, Tk = wk ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Sk(e, t) {
  return typeof t == "function" ? t(e) : Ye({}, e, t);
}
function kk(e) {
  const {
    children: t,
    theme: n
  } = e, r = Uy(), o = E.useMemo(() => {
    const i = r === null ? n : Sk(r, n);
    return i != null && (i[Tk] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ d(Fy.Provider, {
    value: o,
    children: t
  });
}
const Ek = ["value"], Ak = /* @__PURE__ */ E.createContext();
function Ck(e) {
  let {
    value: t
  } = e, n = ja(e, Ek);
  return /* @__PURE__ */ d(Ak.Provider, Ye({
    value: t ?? !0
  }, n));
}
const Nk = /* @__PURE__ */ E.createContext(void 0);
function bk({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ d(Nk.Provider, {
    value: e,
    children: t
  });
}
function xk(e) {
  const t = Wd(), n = yk() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, hk(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const s = i.firstChild;
    if (o) {
      var a;
      if (s && (a = s.hasAttribute) != null && a.call(s, "data-mui-layer-order") && s.getAttribute("data-mui-layer-order") === n)
        return;
      const u = document.createElement("style");
      u.setAttribute("data-mui-layer-order", n), u.textContent = o, i.prepend(u);
    } else {
      var l;
      (l = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || l.remove();
    }
  }, [o, n]), o ? /* @__PURE__ */ d(pk, {
    styles: o
  }) : null;
}
const ym = {};
function vm(e, t, n, r = !1) {
  return E.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? Ye({}, t, {
        [e]: i
      }) : i;
      return r ? () => s : s;
    }
    return e ? Ye({}, t, {
      [e]: n
    }) : Ye({}, t, n);
  }, [e, t, n, r]);
}
function Pk(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Wd(ym), i = Uy() || ym, s = vm(r, o, n), a = vm(r, i, n, !0), l = s.direction === "rtl", u = xk(s);
  return /* @__PURE__ */ d(kk, {
    theme: a,
    children: /* @__PURE__ */ d(Vi.Provider, {
      value: s,
      children: /* @__PURE__ */ d(Ck, {
        value: l,
        children: /* @__PURE__ */ C(bk, {
          value: s == null ? void 0 : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const zk = ["theme"];
function Lk(e) {
  let {
    theme: t
  } = e, n = ja(e, zk);
  const r = t[Qp];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = Ye({}, r, {
    vars: null
  }) : t && !t.vars && (o = Ye({}, t, {
    vars: null
  }))), /* @__PURE__ */ d(Pk, Ye({}, n, {
    themeId: r ? Qp : void 0,
    theme: o
  }));
}
const Ec = "[CHMarketingBuilder]", _k = {
  info: "color:#1565c0;font-weight:bold",
  resolved: "color:#2e7d32;font-weight:bold",
  missing: "color:#e65100;font-weight:bold",
  fallback: "color:#f57c00;font-weight:bold",
  error: "color:#c62828;font-weight:bold"
}, jy = {
  info: "INFO",
  resolved: "OK",
  missing: "MISSING",
  fallback: "FALLBACK",
  error: "ERROR"
};
let di = [];
function Ok(e) {
  return e instanceof Error ? e.message : e == null ? "" : String(e);
}
function Rk(e, t, n, r) {
  const o = jy[e], i = _k[e];
  console.log(r ? `%c${Ec} %c${o}%c ${t}: ${n}
  → ${r}` : `%c${Ec} %c${o}%c ${t}: ${n}`, "font-weight:bold", i, "color:inherit");
}
function $k() {
  di = [];
}
function Gi(e, t, n, r) {
  const o = Ok(n);
  di.push({ level: e, resource: t, detail: o, hint: r }), Rk(e, t, o, r);
}
function ae(e, t) {
  Gi("info", e, t);
}
function Z(e, t) {
  Gi("resolved", e, t);
}
function Ue(e, t, n) {
  Gi("missing", e, t, n);
}
function Mk(e, t, n) {
  Gi("fallback", e, t, n);
}
function Un(e, t, n) {
  Gi("error", e, t, n);
}
function wm(e) {
  const t = di.filter((n) => n.level !== "resolved" && n.level !== "info");
  console.groupCollapsed(
    `%c${Ec} Load summary — ${e.builderMode} builder (${t.length} note${t.length === 1 ? "" : "s"})`,
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
  }), di.length > 0 && console.table(
    di.map((n) => ({
      Level: jy[n.level],
      Resource: n.resource,
      Detail: n.detail,
      Hint: n.hint ?? ""
    }))
  ), console.groupEnd();
}
function Ar(e) {
  if (typeof e != "string" || !e.trim())
    return;
  const t = e.match(/\/entities\/(\d+)(?:\?|$|\/)/);
  if (!t)
    return;
  const n = Number(t[1]);
  return Number.isFinite(n) ? n : void 0;
}
function Cr(e) {
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
    const o = Ar(r.href) ?? Ar(r.entity);
    o != null && t.push(o);
  }
  return t;
}
function ul(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = t.id ?? t.entityId;
  if (typeof n == "number" && Number.isFinite(n))
    return [n];
  const r = t.parent;
  if (r != null && typeof r == "object") {
    const s = r, a = Ar(s.href) ?? Ar(s.entity);
    if (a != null)
      return [a];
  }
  const o = Cr(t.parents);
  if (o.length > 0)
    return o;
  const i = Cr(t.children);
  return i.length > 0 ? i : [];
}
function rt(e, t) {
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
function Yd(e, ...t) {
  if (!e)
    return [];
  for (const n of t) {
    const r = e[n];
    if (r != null) {
      if (Array.isArray(r)) {
        const o = Cr(r);
        if (o.length > 0)
          return o;
        continue;
      }
      if (typeof r == "object") {
        const o = ul(r);
        if (o.length > 0)
          return o;
      }
    }
  }
  return [];
}
function wt(e, t) {
  return e ? Object.keys(e).filter((n) => t.test(n)) : [];
}
async function Xt(e, t, n, r) {
  var s;
  const o = Yd(r, n);
  if (o.length > 0)
    return o;
  if (!((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    return [];
  const i = rt(r, n);
  if (!i)
    return [];
  try {
    const a = await e.raw.getAsync(i);
    return !a.isSuccessStatusCode || a.content == null ? [] : ul(a.content);
  } catch {
    return [];
  }
}
async function Oi(e, t, n, r) {
  const o = [...new Set(r)];
  for (const i of o) {
    const s = await Xt(e, t, i, n);
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
const Ik = ["social", "email", "admin"], Ri = [
  "templateToZone",
  "templateToTemplateZone",
  "TemplateToZone",
  "TemplateToTemplateZone",
  "EPAM.TemplateToZone",
  "EPAM.TemplateToTemplateZone",
  "templateToEPAM.TemplateZone",
  "EPAM.TemplateZone",
  "TemplateZone"
], va = [
  "templateZoneToTemplate",
  "zoneToTemplate",
  "TemplateZoneToTemplate",
  "EPAM.TemplateZoneToTemplate",
  "EPAM.TemplateToTemplateZone",
  "templateToTemplate"
], Dk = [
  "marketingAssetToTemplate",
  "MarketingAssetToTemplate",
  "EPAM.MarketingAssetToTemplate"
], By = [
  "templateZoneToAllowedAsset",
  "TemplateZoneToAllowedAsset",
  "EPAM.TemplateZoneToAllowedAsset",
  "templateZoneToAsset",
  "TemplateZoneToAsset",
  "EPAM.TemplateZoneToAsset"
], Ky = [
  "templateToAllowedAsset",
  "TemplateToAllowedAsset",
  "EPAM.TemplateToAllowedAsset",
  "templateToAsset",
  "TemplateToAsset",
  "EPAM.TemplateToAsset"
], Hk = [
  "zoneType",
  "ZoneType",
  "EPAM.ZoneType",
  "templateZoneType",
  "TemplateZoneType",
  "EPAM.TemplateZoneType"
], Zy = [
  "zoneValueToSelectedAsset",
  "ZoneValueToSelectedAsset",
  "EPAM.MarketingAssetZoneValueToSelectedAsset",
  "marketingAssetZoneValueToSelectedAsset",
  "zoneValueToAsset",
  "ZoneValueToAsset"
];
function Tm(e) {
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
function Sm(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
  if (typeof e == "string")
    return e.trim() || void 0;
}
function Fk(e) {
  if (!e || typeof e != "object")
    return;
  const t = e, n = t.systemProperties && typeof t.systemProperties == "object" ? t.systemProperties : null;
  return Sm(n == null ? void 0 : n.id) || Sm(t.id);
}
function Uk(e, ...t) {
  if (!e || typeof e != "object")
    return;
  const n = e.relations;
  if (!n || typeof n != "object")
    return;
  const r = Yd(n, ...t);
  if (r[0] != null)
    return String(r[0]);
}
function km(e) {
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
function Em(e) {
  if (typeof e != "string")
    return;
  const t = e.trim().toLowerCase();
  return Ik.includes(t) ? t : void 0;
}
function Gd(e, t) {
  if (!(!e || typeof e != "object" || Array.isArray(e)))
    return e[t];
}
function Am(e, t, n) {
  const r = Gd(t, e), o = km(r);
  if (o !== void 0)
    return o;
  const i = Vy(n);
  if (i)
    return km(i[e]);
}
function Vy(e) {
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
function Lt(e, t, n) {
  const r = Gd(t, e), o = Tm(r);
  if (o)
    return o;
  const i = Vy(n);
  if (i)
    return Tm(i[e]);
}
function jk(e, t, n) {
  const r = Em(Gd(e, "builderMode")) ?? Em(Lt("builderMode", e, n)), o = Lt("templateId", e, n) || Uk(t, "marketingAssetToTemplate"), i = Fk(t);
  return {
    builderMode: r,
    brandKitId: Lt("brandKitId", e, n),
    templateId: o,
    marketingAssetId: i,
    userHasOverridePermission: Am("userHasOverridePermission", e, n) ?? !1,
    allowTemplateZoneEditing: Am("allowTemplateZoneEditing", e, n) ?? !1,
    renderEmailApiUrl: Lt("renderEmailApiUrl", e, n) || "/api/render-email-html",
    contentHubProxyBase: Lt("contentHubProxyBase", e, n) || "/api/content-hub",
    html2canvasCdnUrl: Lt("html2canvasCdnUrl", e, n),
    figmaImportApiUrl: Lt("figmaImportApiUrl", e, n) || "/api/figma/import",
    figmaImportApiToken: Lt("figmaImportApiToken", e, n),
    designerDocumentProperty: Lt("designerDocumentProperty", e, n),
    designerInstanceProperty: Lt("designerInstanceProperty", e, n),
    searchIdentifier: Lt("searchIdentifier", e, n),
    selectionPoolIdentifier: Lt("selectionPoolIdentifier", e, n)
  };
}
function Bk(e, t) {
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
function Cm(e, t) {
  if (e.builderMode)
    return e.builderMode;
  const n = t == null ? void 0 : t.trim().toLowerCase();
  return n === "email" || n === "newsletter" ? "email" : "social";
}
const Nm = /* @__PURE__ */ new Map(), Kk = ["EPAM.Template", "Template"], Zk = ["EPAM.TemplateZone", "TemplateZone"];
function Vk(e) {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
}
function Wy(e) {
  if (e == null || typeof e != "object")
    return null;
  const t = e;
  if (Array.isArray(t.member_groups))
    return t;
  const n = t.content;
  return n != null && typeof n == "object" && !Array.isArray(n) ? n : Array.isArray(t.items) && t.items[0] != null && typeof t.items[0] == "object" ? t.items[0] : t;
}
function Wk(e) {
  const t = Wy(e);
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
async function Ac(e, t) {
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
      const s = Wk(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
function Yk(e) {
  const t = Wy(e);
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
        const l = a.associated_entitydefinition, u = (l == null ? void 0 : l.href) ?? "", c = typeof a.name == "string" ? a.name.trim() : "";
        c && n.push({
          name: c,
          role: typeof a.role == "string" ? a.role : void 0,
          target: u ? Vk(u) : void 0
        });
      }
  }
  return n;
}
function Gk(e) {
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
async function Xk(e, t) {
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
      const s = Yk(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
async function Jk(e, t) {
  const n = Nm.get(t);
  if (n)
    return n;
  const r = await Xk(e, t);
  return Nm.set(t, r), r;
}
async function wa(e, t) {
  for (const n of t) {
    const r = await Jk(e, n);
    if (r.length > 0)
      return r;
  }
  return [];
}
async function Qk(e) {
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
      const a = Gk(s.content);
      if (a.length === 0)
        continue;
      const l = await e.raw.getAsync(`/api/entities/${a[0]}`);
      if (!l.isSuccessStatusCode || !((o = l.content) != null && o.relations))
        continue;
      return wt(l.content.relations, /template/i).filter(
        (u) => !/collection|asset/i.test(u)
      );
    } catch {
    }
  return [];
}
function Cc(e, t) {
  return !!(e && t.test(e));
}
function qk(e) {
  return Cc(e, /(^|\.)Template$/i) && !Cc(e, /TemplateZone/i);
}
async function cl(e, t) {
  const [n, r, o] = await Promise.all([
    wa(e, Kk),
    wa(e, Zk),
    Qk(e)
  ]), i = n.filter((c) => Cc(c.target, /TemplateZone/i)).map((c) => c.name), s = r.filter((c) => qk(c.target)).map((c) => c.name), a = wt(t, /zone/i).filter(
    (c) => !!rt(t, c)
  ), l = [
    .../* @__PURE__ */ new Set([
      ...a,
      ...i,
      ...wt(t, /zone/i)
    ])
  ], u = [
    .../* @__PURE__ */ new Set([
      ...o,
      ...s,
      ...va
    ])
  ];
  return l.length === 0 && u.length === va.length ? console.info(
    "%c[CHMarketingBuilder] INFO template zone relations:",
    "color: #1565c0; font-weight: bold",
    "No template↔zone relation found on EPAM.Template or EPAM.TemplateZone. Create a Parent relation on EPAM.TemplateZone pointing to EPAM.Template in Content Hub Model."
  ) : (u.length > 0 || l.length > 0) && console.info(
    "%c[CHMarketingBuilder] INFO template zone relations:",
    "color: #1565c0; font-weight: bold",
    [
      l.length > 0 ? `template child: ${l.join(", ")}` : null,
      u.length > 0 ? `zone parent: ${u.join(", ")}` : null
    ].filter(Boolean).join(" | ")
  ), { templateChildRelations: l, zoneParentRelations: u };
}
function eE(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO template ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function tE(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO zone ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function Yy(e, t) {
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
function nE(e, t, n) {
  return {
    entitydefinition: {
      href: Yy(e, n)
    },
    properties: t
  };
}
function Ta(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e;
    if (typeof t.href == "string" && t.href.trim())
      return t.href.trim();
  }
}
function rE(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = [];
  if (Array.isArray(t.children))
    for (const o of t.children) {
      const i = Ta(o);
      i && n.push(i);
    }
  const r = Ta(t.child);
  return r && n.push(r), n;
}
function oE(e, t) {
  if (e != null && typeof e == "object") {
    const n = Ta(e.self);
    if (n)
      return n;
  }
  return t;
}
function Gy(e, t) {
  if (t) {
    const n = t.match(/^(https?:\/\/[^/]+)/i);
    if (n)
      return `${n[1]}/api/entities/${e}`;
  }
  return `/api/entities/${e}`;
}
async function dl(e, t, n, r) {
  var a;
  const o = rt(r, n), i = `/api/entities/${t}/relations/${n}`, s = o ? [.../* @__PURE__ */ new Set([o, i])] : [i];
  if (!((a = e.raw) != null && a.getAsync) || !o)
    return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
  for (const l of [o])
    try {
      const u = await e.raw.getAsync(l);
      if (!u.isSuccessStatusCode || u.content == null)
        continue;
      const c = rE(u.content), f = oE(u.content, l) ?? l;
      return { requestUrls: s, selfHref: f, childHrefs: c };
    } catch {
    }
  return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
}
function Xy(e, t) {
  return {
    children: t.map((n) => ({ href: n })),
    self: { href: e }
  };
}
async function $i(e, t, n) {
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
async function Jt(e, t, n, r, o) {
  var u;
  const i = await dl(e, t, r, o), s = Gy(n, i.selfHref), a = [...i.childHrefs];
  a.some((c) => Ar(c) === Number(n)) || a.push(s);
  const l = Xy(i.selfHref, a);
  if (await $i(e, [...i.requestUrls, i.selfHref], l))
    return !0;
  if ((u = e.raw) != null && u.postAsync)
    for (const c of i.requestUrls)
      try {
        if ((await e.raw.postAsync(c, l)).isSuccessStatusCode || (await e.raw.postAsync(c, { child: { href: s } })).isSuccessStatusCode)
          return !0;
      } catch {
      }
  return !1;
}
async function No(e, t, n, r, o) {
  const i = await dl(e, t, r, o), s = i.childHrefs.filter(
    (l) => Ar(l) !== Number(n)
  );
  if (s.length === i.childHrefs.length)
    return !0;
  const a = Xy(i.selfHref, s);
  return $i(e, [...i.requestUrls, i.selfHref], a);
}
async function vo(e, t, n, r, o) {
  var l;
  const i = await dl(e, t, r, o), s = Gy(n, i.selfHref), a = {
    parent: { href: s },
    self: { href: i.selfHref }
  };
  if (await $i(e, [...i.requestUrls, i.selfHref], a))
    return !0;
  if ((l = e.raw) != null && l.postAsync)
    for (const u of i.requestUrls)
      try {
        if ((await e.raw.postAsync(u, a)).isSuccessStatusCode || (await e.raw.postAsync(u, { parent: { href: s } })).isSuccessStatusCode)
          return !0;
      } catch {
      }
  return !1;
}
async function Jy(e, t, n, r, o) {
  var l;
  const i = await dl(e, t, r, o), s = rt(o, r) ?? i.selfHref;
  if ((l = e.raw) != null && l.getAsync && rt(o, r))
    try {
      const u = await e.raw.getAsync(s);
      if (u.isSuccessStatusCode && u.content != null) {
        const c = Ta(
          u.content.parent
        );
        if (!c || Ar(c) !== Number(n))
          return !0;
      }
    } catch {
    }
  const a = {
    parent: null,
    self: { href: i.selfHref }
  };
  return await $i(e, [...i.requestUrls, i.selfHref], a) ? !0 : $i(e, [...i.requestUrls, i.selfHref], {
    self: { href: i.selfHref }
  });
}
function fi(e, t, n) {
  const r = wt(t, n), o = r.filter((i) => !!rt(t, i));
  return [.../* @__PURE__ */ new Set([...o, ...e, ...r])];
}
function fl(e) {
  if (e.zoneType === "Logo")
    return !0;
  const t = (e.zoneKey ?? "").trim().toLowerCase(), n = (e.zoneLabel ?? "").trim().toLowerCase();
  return t === "logo" || n === "logo";
}
function iE(e, t) {
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
function Xd(e, t, n) {
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
  return iE(t, n) ?? "Text";
}
const sE = ["EPAM.TemplateZone", "TemplateZone"], Vt = /* @__PURE__ */ new Map();
let bm = !1, xm = !1, Mi = [];
function Pm(e, ...t) {
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
function pl(e) {
  const t = e.properties ?? {}, n = e, r = Object.keys(t), o = Pm(
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
    const s = Pm(t, i);
    if (s)
      return s;
  }
  return "";
}
function ml(e, t) {
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
    Vt.has(s) || (Vt.set(s, String(t)), ae(
      "template zone type",
      `Mapped taxonomy ${t} → "${s}" (from "${e}")`
    ));
    return;
  }
  Vt.has(r) || (Vt.set(r, String(t)), ae("template zone type", `Mapped taxonomy ${t} → "${r}" (from "${e}")`));
}
function hl(e) {
  const t = Mi.map((n) => n.name);
  return [
    .../* @__PURE__ */ new Set([
      ...t,
      ...Hk,
      ...wt(e, /zone.?type/i)
    ])
  ];
}
function aE(e) {
  return hl(e.relations).some(
    (t) => {
      var n;
      return !!((n = e.relations) != null && n[t]);
    }
  );
}
function Qy(e) {
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
function lE(e) {
  try {
    const n = Yy(e).match(/\/entitydefinitions\/([^/?#]+)/i);
    return n != null && n[1] ? decodeURIComponent(n[1]) : "";
  } catch {
    return "";
  }
}
async function uE(e, t, n) {
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
      const l = Qy(a.content);
      for (const u of l) {
        const c = await t(String(u)), f = pl(c);
        f && ml(f, u);
      }
      if (l.length > 0)
        return Z(
          "template zone type",
          `Loaded ${l.length} taxonomy item(s) from ${n}; mapped ${Vt.size} zone type(s)`
        ), l.length;
    } catch {
    }
  return 0;
}
async function qy(e, t, n) {
  const r = hl(n.relations);
  for (const o of r) {
    const i = await Xt(e, "", o, n.relations);
    if (i[0] == null)
      continue;
    const s = await t(String(i[0])), a = pl(s);
    return a && ml(a, i[0]), lE(s) || void 0;
  }
}
async function Jd(e) {
  if (Mi.length > 0 || !e)
    return;
  Mi = (await wa(e, sE)).filter((n) => /zone.?type/i.test(n.name));
}
async function ev(e, t) {
  var o, i;
  if (xm || !((o = e == null ? void 0 : e.raw) != null && o.getAsync) || bm)
    return;
  bm = !0, await Jd(e);
  let n = ((i = Mi.find((s) => {
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
        const u = Qy(l.content);
        for (const c of u) {
          const f = await t(String(c)), p = await qy(e, t, f);
          p && !n && (n = p);
        }
        if (u.length > 0)
          break;
      } catch {
      }
    if (Vt.size > 0)
      break;
  }
  n && await uE(e, t, n), xm = !0, ae(
    "template zone type",
    `Taxonomy catalog ready: ${[...Vt.entries()].map(([s, a]) => `${s}=${a}`).join(", ") || "(empty)"}`
  );
}
async function cE(e, t, n) {
  await Jd(e);
  for (const r of n)
    await qy(e, t, r);
  Vt.size === 0 && await ev(e, t);
}
async function dE(e, t, n) {
  const r = Vt.get(n);
  return r || (await ev(e, t), Vt.get(n));
}
function fE(e) {
  var r;
  const t = Mi.find((o) => o.name === e);
  return ((r = t == null ? void 0 : t.role) == null ? void 0 : r.toLowerCase()) !== "parent";
}
async function zm(e, t, n, r) {
  var l;
  if (!((l = e == null ? void 0 : e.raw) != null && l.getAsync))
    return;
  const o = `/api/entities/${n}/relations/${r}`, i = await Xt(e, n, r, {
    [r]: { href: o }
  });
  if (i[0] == null)
    return;
  const s = await t(String(i[0])), a = pl(s);
  if (a)
    return ml(a, i[0]), Xd(a, "", "");
}
async function pE(e, t, n, r, o, i, s) {
  var u;
  if (!e)
    return !1;
  const a = e, l = fE(
    i
  ) ? [
    {
      label: "parent",
      run: () => vo(a, n, r, i, s.relations)
    },
    {
      label: "child",
      run: () => Jt(a, n, r, i, s.relations)
    }
  ] : [
    {
      label: "child",
      run: () => Jt(a, n, r, i, s.relations)
    },
    {
      label: "parent",
      run: () => vo(a, n, r, i, s.relations)
    }
  ];
  for (const c of l) {
    if (!await c.run())
      continue;
    const p = await zm(
      e,
      t,
      n,
      i
    );
    if (p === o)
      return Z(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via ${c.label} ${i}`
      ), !0;
    ae(
      "template zone type",
      `${c.label} write for zone ${n} → taxonomy ${r} returned OK but read-back is "${p ?? "(none)"}" (expected "${o}")`
    );
  }
  if ((u = e == null ? void 0 : e.raw) != null && u.postAsync) {
    const c = { parent: { href: `/api/entities/${r}` } };
    if ((await e.raw.postAsync(
      `/api/entities/${n}/relations/${i}`,
      c
    )).isSuccessStatusCode && await zm(
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
async function mE(e, t, n, r) {
  const o = hl(r.relations);
  for (const i of o) {
    const s = rt(r.relations, i);
    if (!s)
      continue;
    const a = await Xt(e, n.id, i, {
      [i]: { href: s }
    });
    if (a[0] == null)
      continue;
    const l = await t(String(a[0])), u = pl(l);
    if (u)
      return ml(u, a[0]), Xd(u, n.zoneKey, n.zoneLabel);
  }
}
async function tv(e, t, n, r) {
  const o = await mE(e, t, n, r);
  return o ? { ...n, zoneType: o } : n;
}
async function hE(e, t, n, r, o) {
  await Jd(e);
  const i = await dE(e, t, r);
  if (!i) {
    const a = Object.keys(o.relations ?? {}).join(", ") || "(none)", l = [...Vt.keys()].join(", ") || "(none)";
    return ae(
      "template zone type",
      `No taxonomy item found for zone type "${r}" on zone ${n}. Known types: ${l}. Zone relations: ${a}.`
    ), !1;
  }
  const s = hl(o.relations);
  for (const a of s)
    if (await pE(
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
const hu = ["EPAM.TemplateZone", "TemplateZone"];
let As = null;
function gE(e) {
  return /zone.?type/i.test(e);
}
function yE(e) {
  return /zone.?type/i.test(e);
}
function vE(e) {
  return e.filter((t) => gE(t.name)).map((t) => t.name);
}
async function wE(e) {
  if (As)
    return As;
  const [t, n] = await Promise.all([
    Ac(e, hu[0]).then(async (s) => s.length > 0 ? s : Ac(e, hu[1])),
    wa(e, hu)
  ]), r = vE(t), o = n.filter((s) => yE(s.name)).map((s) => s.name);
  let i = "unknown";
  return r.length > 0 && o.length === 0 ? i = "property" : o.length > 0 && r.length === 0 ? i = "relation" : r.length > 0 && o.length > 0 && (i = "both"), As = {
    mode: i,
    propertyNames: r.length > 0 ? r : ["zoneType", "ZoneType", "EPAM.zoneType", "zoneTypeMA"],
    relationNames: o
  }, As;
}
function TE(e) {
  return e.mode === "property" || e.mode === "both" || e.mode === "unknown";
}
function SE(e) {
  return e.mode === "relation" || e.mode === "both";
}
const kE = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], Qd = [
  "AssetCollectionToAsset",
  "M.AssetCollectionToAsset",
  "collectionToAsset",
  "assetCollectionToAsset",
  "CollectionToAsset"
];
function EE(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function AE(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  return "Invariant" in t ? t.Invariant : Object.values(t).find((r) => typeof r == "string") ?? e;
}
function CE(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = AE(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function NE(e) {
  var n;
  if (e == null || typeof e != "object")
    return;
  const t = e;
  for (const r of kE) {
    const o = t[r];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const i = EE(((n = o[0]) == null ? void 0 : n.href) ?? o[0]);
    if (i)
      return i;
  }
}
function bo(e, t) {
  const n = t.properties ?? {}, r = NE(t.renditions);
  if (!r)
    return null;
  const o = CE(n, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${e}`;
  return {
    id: String(e),
    name: o,
    thumbnailUrl: r,
    previewUrl: r
  };
}
function Lm(e, t) {
  if (!(t != null && t.trim()))
    return e;
  const n = t.trim().toLowerCase();
  return e.filter(
    (r) => r.name.toLowerCase().includes(n) || r.id.toLowerCase().includes(n)
  );
}
const Nc = "https://ws.overcasthq.com/wp-content/uploads/2025/05/sok_logo.png", bE = "https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58", xE = "https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png", PE = [
  {
    id: "color",
    label: "Full color",
    url: Nc,
    previewBackground: "#f7f7f7"
  },
  {
    id: "dark",
    label: "Dark background",
    url: `${Nc}#dark`,
    previewBackground: "#000000"
  }
], bc = Nc, gr = "Arial, Helvetica, sans-serif", Zt = {
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
}, nv = [
  { colorName: "Primary", hexValue: Zt.primary, colorUsageType: "Primary" },
  { colorName: "Secondary", hexValue: Zt.secondary, colorUsageType: "Secondary" },
  { colorName: "Accent", hexValue: Zt.accent, colorUsageType: "Accent" },
  { colorName: "Background", hexValue: Zt.background, colorUsageType: "Background" }
], rv = [
  { fontFamily: gr, fontWeight: "Bold", fontUsageType: "Heading" },
  { fontFamily: gr, fontWeight: "Regular", fontUsageType: "Body" },
  { fontFamily: gr, fontWeight: "Medium", fontUsageType: "CTA" }
];
function zE(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t || t === bE || t === xE || /cytiva/i.test(t))
    return bc;
  const n = PE.find((r) => r.url === t || r.id === t);
  return n ? n.url : t;
}
function Qo(e) {
  var t;
  return {
    ...e,
    brandKitName: ((t = e.brandKitName) == null ? void 0 : t.trim()) || "SOK",
    logoAssetUrl: zE(e.logoAssetUrl),
    colors: nv,
    fonts: rv
  };
}
function LE(e) {
  return Qo({
    id: e,
    brandKitName: "SOK",
    logoAssetUrl: bc,
    colors: nv,
    fonts: rv
  });
}
const qd = [
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
], ov = [
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
], _E = [
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
];
function gl(e) {
  switch (e) {
    case "Email":
      return ov;
    case "Newsletter":
      return _E;
    default:
      return qd;
  }
}
function iv(e) {
  const t = e.canvasWidth, n = e.canvasHeight;
  return t != null && n != null ? `${t} × ${n} px` : t != null ? `${t} px wide` : "Not set";
}
function OE(e, t) {
  return e.canvasWidth !== t.width ? !1 : t.height != null ? e.canvasHeight === t.height : e.canvasHeight == null || e.canvasHeight === void 0;
}
function RE(e) {
  const t = gl(e.channelType), n = t.find((o) => OE(e, o));
  if (n)
    return n.id;
  const r = t.find(
    (o) => o.formatPreset.trim().toLowerCase() === (e.formatPreset ?? "").trim().toLowerCase()
  );
  return r ? r.id : "custom";
}
function $E(e, t) {
  if (t === "custom")
    return null;
  const n = gl(e).find((r) => r.id === t);
  return n ? {
    canvasWidth: n.width,
    canvasHeight: n.height,
    formatPreset: n.formatPreset
  } : null;
}
function sv(e) {
  const t = gl(e)[0];
  return {
    canvasWidth: t.width,
    canvasHeight: t.height,
    formatPreset: t.formatPreset
  };
}
function ef(e) {
  return e.canvasWidth != null && Number.isFinite(e.canvasWidth) ? e.canvasWidth : e.channelType === "Email" || e.channelType === "Newsletter" ? ov[0].width : qd[0].width;
}
function av(e) {
  return e.canvasHeight != null && Number.isFinite(e.canvasHeight) ? e.canvasHeight : e.channelType === "Email" || e.channelType === "Newsletter" ? 800 : qd[0].height ?? 1080;
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function _m(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ME(e) {
  if (Array.isArray(e))
    return e;
}
function IE(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, s, a = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0)
        for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); l = !0)
          ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s))
          return;
      } finally {
        if (u)
          throw o;
      }
    }
    return a;
  }
}
function DE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HE(e, t) {
  return ME(e) || IE(e, t) || FE(e, t) || DE();
}
function FE(e, t) {
  if (e) {
    if (typeof e == "string")
      return _m(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _m(e, t) : void 0;
  }
}
const lv = Object.entries, Om = Object.setPrototypeOf, UE = Object.isFrozen, jE = Object.getPrototypeOf, BE = Object.getOwnPropertyDescriptor;
let Ve = Object.freeze, Xe = Object.seal, Fr = Object.create, uv = typeof Reflect < "u" && Reflect, xc = uv.apply, Pc = uv.construct;
Ve || (Ve = function(t) {
  return t;
});
Xe || (Xe = function(t) {
  return t;
});
xc || (xc = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    o[i - 2] = arguments[i];
  return t.apply(n, o);
});
Pc || (Pc = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Ko = Pe(Array.prototype.forEach), KE = Pe(Array.prototype.lastIndexOf), Rm = Pe(Array.prototype.pop), Ir = Pe(Array.prototype.push), ZE = Pe(Array.prototype.splice), Dn = Array.isArray, qo = Pe(String.prototype.toLowerCase), gu = Pe(String.prototype.toString), $m = Pe(String.prototype.match), Zo = Pe(String.prototype.replace), Mm = Pe(String.prototype.indexOf), VE = Pe(String.prototype.trim), WE = Pe(Number.prototype.toString), YE = Pe(Boolean.prototype.toString), Im = typeof BigInt > "u" ? null : Pe(BigInt.prototype.toString), Dm = typeof Symbol > "u" ? null : Pe(Symbol.prototype.toString), De = Pe(Object.prototype.hasOwnProperty), Vo = Pe(Object.prototype.toString), Be = Pe(RegExp.prototype.test), ar = GE(TypeError);
function Pe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return xc(e, t, r);
  };
}
function GE(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Pc(e, n);
  };
}
function q(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qo;
  if (Om && Om(e, null), !Dn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (UE(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function XE(e) {
  for (let t = 0; t < e.length; t++)
    De(e, t) || (e[t] = null);
  return e;
}
function it(e) {
  const t = Fr(null);
  for (const r of lv(e)) {
    var n = HE(r, 2);
    const o = n[0], i = n[1];
    De(e, o) && (Dn(i) ? t[o] = XE(i) : i && typeof i == "object" && i.constructor === Object ? t[o] = it(i) : t[o] = i);
  }
  return t;
}
function JE(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return WE(e);
    case "boolean":
      return YE(e);
    case "bigint":
      return Im ? Im(e) : "0";
    case "symbol":
      return Dm ? Dm(e) : "Symbol()";
    case "undefined":
      return Vo(e);
    case "function":
    case "object": {
      if (e === null)
        return Vo(e);
      const t = e, n = nn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Vo(r);
      }
      return Vo(e);
    }
    default:
      return Vo(e);
  }
}
function nn(e, t) {
  for (; e !== null; ) {
    const r = BE(e, t);
    if (r) {
      if (r.get)
        return Pe(r.get);
      if (typeof r.value == "function")
        return Pe(r.value);
    }
    e = jE(e);
  }
  function n() {
    return null;
  }
  return n;
}
function QE(e) {
  try {
    return Be(e, ""), !0;
  } catch {
    return !1;
  }
}
const Hm = Ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yu = Ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), vu = Ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), qE = Ve(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), wu = Ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), eA = Ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Fm = Ve(["#text"]), Um = Ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Tu = Ve(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), jm = Ve(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Cs = Ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), tA = Xe(/{{[\w\W]*|^[\w\W]*}}/g), nA = Xe(/<%[\w\W]*|^[\w\W]*%>/g), rA = Xe(/\${[\w\W]*/g), oA = Xe(/^data-[\-\w.\u00B7-\uFFFF]+$/), iA = Xe(/^aria-[\-\w]+$/), Bm = Xe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), sA = Xe(/^(?:\w+script|data):/i), aA = Xe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), lA = Xe(/^html$/i), uA = Xe(/^[a-z][.\w]*(-[.\w]+)+$/i), Km = Xe(/<[/\w!]/g), cA = Xe(/<[/\w]/g), dA = Xe(/<\/no(script|embed|frames)/i), fA = Xe(/\/>/i), tn = {
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
}, pA = function() {
  return typeof window > "u" ? null : window;
}, mA = function(t, n) {
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
}, Zm = function() {
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
}, _n = function(t, n, r, o) {
  return De(t, n) && Dn(t[n]) ? q(o.base ? it(o.base) : {}, t[n], o.transform) : r;
};
function cv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pA();
  const t = (F) => cv(F);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, s = e.Node, a = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, p = a.prototype, v = nn(p, "cloneNode"), k = nn(p, "remove"), T = nn(p, "nextSibling"), L = nn(p, "childNodes"), y = nn(p, "parentNode"), m = nn(p, "shadowRoot"), h = nn(p, "attributes"), b = s && s.prototype ? nn(s.prototype, "nodeType") : null, A = s && s.prototype ? nn(s.prototype, "nodeName") : null;
  if (typeof i == "function") {
    const F = n.createElement("template");
    F.content && F.content.ownerDocument && (n = F.content.ownerDocument);
  }
  let N, S = "", z, j = !1, _ = 0;
  const D = function() {
    if (_ > 0)
      throw ar('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, H = function(g) {
    D(), _++;
    try {
      return N.createHTML(g);
    } finally {
      _--;
    }
  }, G = function(g) {
    D(), _++;
    try {
      return N.createScriptURL(g);
    } finally {
      _--;
    }
  }, ze = function() {
    return j || (z = mA(f, o), j = !0), z;
  }, Je = n, Ee = Je.implementation, W = Je.createNodeIterator, R = Je.createDocumentFragment, M = Je.getElementsByTagName, w = r.importNode;
  let P = Zm();
  t.isSupported = typeof lv == "function" && typeof y == "function" && Ee && Ee.createHTMLDocument !== void 0;
  const U = tA, V = nA, Q = rA, Re = oA, $e = iA, Me = sA, dt = aA, zo = uA;
  let vf = Bm, ge = null;
  const wf = q({}, [...Hm, ...yu, ...vu, ...wu, ...Fm]);
  let ye = null;
  const Tf = q({}, [...Um, ...Tu, ...jm, ...Cs]);
  let ve = Object.seal(Fr(null, {
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
  })), Lo = null, Sf = null;
  const xn = Object.seal(Fr(null, {
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
  let kf = !0, El = !0, Ef = !1, Af = !0, Pn = !1, _o = !0, ir = !1, Al = !1, Cl = null, Nl = null, bl = !1, Lr = !1, qi = !1, es = !1, Cf = !0, Nf = !1;
  const bf = "user-content-";
  let xl = !0, Pl = !1, _r = {}, Qt = null;
  const zl = q({}, [
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
  let xf = null;
  const Pf = q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ll = null;
  const zf = q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ts = "http://www.w3.org/1998/Math/MathML", ns = "http://www.w3.org/2000/svg", qt = "http://www.w3.org/1999/xhtml";
  let Or = qt, _l = !1, Ol = null;
  const c0 = q({}, [ts, ns, qt], gu), Lf = Ve(["mi", "mo", "mn", "ms", "mtext"]);
  let Rl = q({}, Lf);
  const _f = Ve(["annotation-xml"]);
  let $l = q({}, _f);
  const d0 = q({}, ["title", "style", "font", "a", "script"]);
  let Oo = null;
  const f0 = ["application/xhtml+xml", "text/html"], p0 = "text/html";
  let we = null, Rr = null;
  const m0 = n.createElement("form"), Of = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, Ml = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Rr && Rr === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = it(g), Oo = // eslint-disable-next-line unicorn/prefer-includes
    f0.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? p0 : g.PARSER_MEDIA_TYPE, we = Oo === "application/xhtml+xml" ? gu : qo, ge = _n(g, "ALLOWED_TAGS", wf, {
      transform: we
    }), ye = _n(g, "ALLOWED_ATTR", Tf, {
      transform: we
    }), Ol = _n(g, "ALLOWED_NAMESPACES", c0, {
      transform: gu
    }), Ll = _n(g, "ADD_URI_SAFE_ATTR", zf, {
      transform: we,
      base: zf
    }), xf = _n(g, "ADD_DATA_URI_TAGS", Pf, {
      transform: we,
      base: Pf
    }), Qt = _n(g, "FORBID_CONTENTS", zl, {
      transform: we
    }), Lo = _n(g, "FORBID_TAGS", it({}), {
      transform: we
    }), Sf = _n(g, "FORBID_ATTR", it({}), {
      transform: we
    }), _r = De(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? it(g.USE_PROFILES) : g.USE_PROFILES : !1, kf = g.ALLOW_ARIA_ATTR !== !1, El = g.ALLOW_DATA_ATTR !== !1, Ef = g.ALLOW_UNKNOWN_PROTOCOLS || !1, Af = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Pn = g.SAFE_FOR_TEMPLATES || !1, _o = g.SAFE_FOR_XML !== !1, ir = g.WHOLE_DOCUMENT || !1, Lr = g.RETURN_DOM || !1, qi = g.RETURN_DOM_FRAGMENT || !1, es = g.RETURN_TRUSTED_TYPE || !1, bl = g.FORCE_BODY || !1, Cf = g.SANITIZE_DOM !== !1, Nf = g.SANITIZE_NAMED_PROPS || !1, xl = g.KEEP_CONTENT !== !1, Pl = g.IN_PLACE || !1, vf = QE(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : Bm, Or = typeof g.NAMESPACE == "string" ? g.NAMESPACE : qt, Rl = De(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? it(g.MATHML_TEXT_INTEGRATION_POINTS) : q({}, Lf), $l = De(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? it(g.HTML_INTEGRATION_POINTS) : q({}, _f);
    const x = De(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? it(g.CUSTOM_ELEMENT_HANDLING) : Fr(null);
    if (ve = Fr(null), De(x, "tagNameCheck") && Of(x.tagNameCheck) && (ve.tagNameCheck = x.tagNameCheck), De(x, "attributeNameCheck") && Of(x.attributeNameCheck) && (ve.attributeNameCheck = x.attributeNameCheck), De(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), Xe(ve), Pn && (El = !1), qi && (Lr = !0), _r && (ge = q({}, Fm), ye = Fr(null), _r.html === !0 && (q(ge, Hm), q(ye, Um)), _r.svg === !0 && (q(ge, yu), q(ye, Tu), q(ye, Cs)), _r.svgFilters === !0 && (q(ge, vu), q(ye, Tu), q(ye, Cs)), _r.mathMl === !0 && (q(ge, wu), q(ye, jm), q(ye, Cs))), xn.tagCheck = null, xn.attributeCheck = null, De(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? xn.tagCheck = g.ADD_TAGS : Dn(g.ADD_TAGS) && (ge === wf && (ge = it(ge)), q(ge, g.ADD_TAGS, we))), De(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? xn.attributeCheck = g.ADD_ATTR : Dn(g.ADD_ATTR) && (ye === Tf && (ye = it(ye)), q(ye, g.ADD_ATTR, we))), De(g, "ADD_URI_SAFE_ATTR") && Dn(g.ADD_URI_SAFE_ATTR) && q(Ll, g.ADD_URI_SAFE_ATTR, we), De(g, "FORBID_CONTENTS") && Dn(g.FORBID_CONTENTS) && (Qt === zl && (Qt = it(Qt)), q(Qt, g.FORBID_CONTENTS, we)), De(g, "ADD_FORBID_CONTENTS") && Dn(g.ADD_FORBID_CONTENTS) && (Qt === zl && (Qt = it(Qt)), q(Qt, g.ADD_FORBID_CONTENTS, we)), xl && (ge["#text"] = !0), ir && q(ge, ["html", "head", "body"]), ge.table && (q(ge, ["tbody"]), delete Lo.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ar('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ar('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = N;
      N = g.TRUSTED_TYPES_POLICY;
      try {
        S = H("");
      } catch (K) {
        throw N = I, K;
      }
    } else
      g.TRUSTED_TYPES_POLICY === null ? (N = void 0, S = "") : (N === void 0 && (N = ze()), N && typeof S == "string" && (S = H("")));
    Ve && Ve(g), Rr = g;
  }, Rf = q({}, [...yu, ...vu, ...qE]), $f = q({}, [...wu, ...eA]), h0 = function(g, x, I) {
    return x.namespaceURI === qt ? g === "svg" : x.namespaceURI === ts ? g === "svg" && (I === "annotation-xml" || Rl[I]) : !!Rf[g];
  }, g0 = function(g, x, I) {
    return x.namespaceURI === qt ? g === "math" : x.namespaceURI === ns ? g === "math" && $l[I] : !!$f[g];
  }, y0 = function(g, x, I) {
    return x.namespaceURI === ns && !$l[I] || x.namespaceURI === ts && !Rl[I] ? !1 : !$f[g] && (d0[g] || !Rf[g]);
  }, v0 = function(g) {
    let x = y(g);
    (!x || !x.tagName) && (x = {
      namespaceURI: Or,
      tagName: "template"
    });
    const I = qo(g.tagName), K = qo(x.tagName);
    return Ol[g.namespaceURI] ? g.namespaceURI === ns ? h0(I, x, K) : g.namespaceURI === ts ? g0(I, x, K) : g.namespaceURI === qt ? y0(I, x, K) : !!(Oo === "application/xhtml+xml" && Ol[g.namespaceURI]) : !1;
  }, zn = function(g) {
    Ir(t.removed, {
      element: g
    });
    try {
      y(g).removeChild(g);
    } catch {
      if (k(g), !y(g))
        throw ar("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Mf = function(g) {
    const x = L(g);
    if (x) {
      const K = [];
      Ko(x, (X) => {
        Ir(K, X);
      }), Ko(K, (X) => {
        try {
          k(X);
        } catch {
        }
      });
    }
    const I = h(g);
    if (I)
      for (let K = I.length - 1; K >= 0; --K) {
        const X = I[K], ee = X && X.name;
        if (typeof ee == "string")
          try {
            g.removeAttribute(ee);
          } catch {
          }
      }
  }, sr = function(g, x) {
    try {
      Ir(t.removed, {
        attribute: x.getAttributeNode(g),
        from: x
      });
    } catch {
      Ir(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(g), g === "is")
      if (Lr || qi)
        try {
          zn(x);
        } catch {
        }
      else
        try {
          x.setAttribute(g, "");
        } catch {
        }
  }, w0 = function(g) {
    const x = h(g);
    if (x)
      for (let I = x.length - 1; I >= 0; --I) {
        const K = x[I], X = K && K.name;
        if (!(typeof X != "string" || ye[we(X)]))
          try {
            g.removeAttribute(X);
          } catch {
          }
      }
  }, T0 = function(g) {
    const x = [g];
    for (; x.length > 0; ) {
      const I = x.pop();
      (b ? b(I) : I.nodeType) === tn.element && w0(I);
      const X = L(I);
      if (X)
        for (let ee = X.length - 1; ee >= 0; --ee)
          x.push(X[ee]);
    }
  }, If = function(g) {
    let x = null, I = null;
    if (bl)
      g = "<remove></remove>" + g;
    else {
      const ee = $m(g, /^[\r\n\t ]+/);
      I = ee && ee[0];
    }
    Oo === "application/xhtml+xml" && Or === qt && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const K = N ? H(g) : g;
    if (Or === qt)
      try {
        x = new c().parseFromString(K, Oo);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = Ee.createDocument(Or, "template", null);
      try {
        x.documentElement.innerHTML = _l ? S : K;
      } catch {
      }
    }
    const X = x.body || x.documentElement;
    return g && I && X.insertBefore(n.createTextNode(I), X.childNodes[0] || null), Or === qt ? M.call(x, ir ? "html" : "body")[0] : ir ? x.documentElement : X;
  }, Df = function(g) {
    return W.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, rs = function(g) {
    return g = Zo(g, U, " "), g = Zo(g, V, " "), g = Zo(g, Q, " "), g;
  }, Il = function(g) {
    var x;
    g.normalize();
    const I = W.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let K = I.nextNode();
    for (; K; )
      K.data = rs(K.data), K = I.nextNode();
    const X = (x = g.querySelectorAll) === null || x === void 0 ? void 0 : x.call(g, "template");
    X && Ko(X, (ee) => {
      $r(ee.content) && Il(ee.content);
    });
  }, os = function(g) {
    const x = A ? A(g) : null;
    return typeof x != "string" || we(x) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== h(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    g.nodeType !== b(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    g.childNodes !== L(g);
  }, $r = function(g) {
    if (!b || typeof g != "object" || g === null)
      return !1;
    try {
      return b(g) === tn.documentFragment;
    } catch {
      return !1;
    }
  }, Ro = function(g) {
    if (!b || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof b(g) == "number";
    } catch {
      return !1;
    }
  };
  function pn(F, g, x) {
    F.length !== 0 && Ko(F, (I) => {
      I.call(t, g, x, Rr);
    });
  }
  const S0 = function(g, x) {
    return !!(_o && g.hasChildNodes() && !Ro(g.firstElementChild) && Be(Km, g.textContent) && Be(Km, g.innerHTML) || _o && g.namespaceURI === qt && x === "style" && Ro(g.firstElementChild) || g.nodeType === tn.processingInstruction || _o && g.nodeType === tn.comment && Be(cA, g.data));
  }, k0 = function(g, x) {
    if (!Lo[x] && Uf(x) && (ve.tagNameCheck instanceof RegExp && Be(ve.tagNameCheck, x) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(x)))
      return !1;
    if (xl && !Qt[x]) {
      const I = y(g), K = L(g);
      if (K && I) {
        const X = K.length;
        for (let ee = X - 1; ee >= 0; --ee) {
          const Ie = Pl ? K[ee] : v(K[ee], !0);
          I.insertBefore(Ie, T(g));
        }
      }
    }
    return zn(g), !0;
  }, Hf = function(g) {
    if (pn(P.beforeSanitizeElements, g, null), os(g))
      return zn(g), !0;
    const x = we(A ? A(g) : g.nodeName);
    if (pn(P.uponSanitizeElement, g, {
      tagName: x,
      allowedTags: ge
    }), S0(g, x))
      return zn(g), !0;
    if (Lo[x] || !(xn.tagCheck instanceof Function && xn.tagCheck(x)) && !ge[x])
      return k0(g, x);
    if ((b ? b(g) : g.nodeType) === tn.element && !v0(g) || (x === "noscript" || x === "noembed" || x === "noframes") && Be(dA, g.innerHTML))
      return zn(g), !0;
    if (Pn && g.nodeType === tn.text) {
      const K = rs(g.textContent);
      g.textContent !== K && (Ir(t.removed, {
        element: g.cloneNode()
      }), g.textContent = K);
    }
    return pn(P.afterSanitizeElements, g, null), !1;
  }, Ff = function(g, x, I) {
    if (Sf[x] || Cf && (x === "id" || x === "name") && (I in n || I in m0))
      return !1;
    const K = ye[x] || xn.attributeCheck instanceof Function && xn.attributeCheck(x, g);
    if (!(El && Be(Re, x))) {
      if (!(kf && Be($e, x))) {
        if (K) {
          if (!Ll[x]) {
            if (!Be(vf, Zo(I, dt, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && g !== "script" && Mm(I, "data:") === 0 && xf[g])) {
                if (!(Ef && !Be(Me, Zo(I, dt, "")))) {
                  if (I)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Uf(g) && (ve.tagNameCheck instanceof RegExp && Be(ve.tagNameCheck, g) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(g)) && (ve.attributeNameCheck instanceof RegExp && Be(ve.attributeNameCheck, x) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(x, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Be(ve.tagNameCheck, I) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(I)))
        )
          return !1;
      }
    }
    return !0;
  }, E0 = q({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Uf = function(g) {
    return !E0[qo(g)] && Be(zo, g);
  }, A0 = function(g, x, I, K) {
    if (N && typeof f == "object" && typeof f.getAttributeType == "function" && !I)
      switch (f.getAttributeType(g, x)) {
        case "TrustedHTML":
          return H(K);
        case "TrustedScriptURL":
          return G(K);
      }
    return K;
  }, C0 = function(g, x, I, K) {
    try {
      I ? g.setAttributeNS(I, x, K) : g.setAttribute(x, K), os(g) ? zn(g) : Rm(t.removed);
    } catch {
      sr(x, g);
    }
  }, jf = function(g) {
    pn(P.beforeSanitizeAttributes, g, null);
    const x = g.attributes;
    if (!x || os(g))
      return;
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let K = x.length;
    const X = we(g.nodeName);
    for (; K--; ) {
      const ee = x[K], Ie = ee.name, Ne = ee.namespaceURI, zt = ee.value, Ft = we(Ie), Hl = zt;
      let ot = Ie === "value" ? Hl : VE(Hl);
      if (I.attrName = Ft, I.attrValue = ot, I.keepAttr = !0, I.forceKeepAttr = void 0, pn(P.uponSanitizeAttribute, g, I), ot = I.attrValue, Nf && (Ft === "id" || Ft === "name") && Mm(ot, bf) !== 0 && (sr(Ie, g), ot = bf + ot), _o && Be(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ot)) {
        sr(Ie, g);
        continue;
      }
      if (Ft === "attributename" && $m(ot, "href")) {
        sr(Ie, g);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          sr(Ie, g);
          continue;
        }
        if (!Af && Be(fA, ot)) {
          sr(Ie, g);
          continue;
        }
        if (Pn && (ot = rs(ot)), !Ff(X, Ft, ot)) {
          sr(Ie, g);
          continue;
        }
        ot = A0(X, Ft, Ne, ot), ot !== Hl && C0(g, Ie, Ne, ot);
      }
    }
    pn(P.afterSanitizeAttributes, g, null);
  }, is = function(g) {
    let x = null;
    const I = Df(g);
    for (pn(P.beforeSanitizeShadowDOM, g, null); x = I.nextNode(); )
      if (pn(P.uponSanitizeShadowNode, x, null), Hf(x), jf(x), $r(x.content) && is(x.content), (b ? b(x) : x.nodeType) === tn.element) {
        const X = m(x);
        $r(X) && (Dl(X), is(X));
      }
    pn(P.afterSanitizeShadowDOM, g, null);
  }, Dl = function(g) {
    const x = [{
      node: g,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const I = x.pop();
      if (I.shadow) {
        is(I.shadow);
        continue;
      }
      const K = I.node, ee = (b ? b(K) : K.nodeType) === tn.element, Ie = L(K);
      if (Ie)
        for (let Ne = Ie.length - 1; Ne >= 0; --Ne)
          x.push({
            node: Ie[Ne],
            shadow: null
          });
      if (ee) {
        const Ne = A ? A(K) : null;
        if (typeof Ne == "string" && we(Ne) === "template") {
          const zt = K.content;
          $r(zt) && x.push({
            node: zt,
            shadow: null
          });
        }
      }
      if (ee) {
        const Ne = m(K);
        $r(Ne) && x.push({
          node: null,
          shadow: Ne
        }, {
          node: Ne,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, I = null, K = null, X = null;
    if (_l = !F, _l && (F = "<!-->"), typeof F != "string" && !Ro(F) && (F = JE(F), typeof F != "string"))
      throw ar("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    Al ? (ge = Cl, ye = Nl) : Ml(g), (P.uponSanitizeElement.length > 0 || P.uponSanitizeAttribute.length > 0) && (ge = it(ge)), P.uponSanitizeAttribute.length > 0 && (ye = it(ye)), t.removed = [];
    const ee = Pl && typeof F != "string" && Ro(F);
    if (ee) {
      const zt = A ? A(F) : F.nodeName;
      if (typeof zt == "string") {
        const Ft = we(zt);
        if (!ge[Ft] || Lo[Ft])
          throw ar("root node is forbidden and cannot be sanitized in-place");
      }
      if (os(F))
        throw ar("root node is clobbered and cannot be sanitized in-place");
      try {
        Dl(F);
      } catch (Ft) {
        throw Mf(F), Ft;
      }
    } else if (Ro(F))
      x = If("<!---->"), I = x.ownerDocument.importNode(F, !0), I.nodeType === tn.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? x = I : x.appendChild(I), Dl(I);
    else {
      if (!Lr && !Pn && !ir && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return N && es ? H(F) : F;
      if (x = If(F), !x)
        return Lr ? null : es ? S : "";
    }
    x && bl && zn(x.firstChild);
    const Ie = Df(ee ? F : x);
    try {
      for (; K = Ie.nextNode(); )
        Hf(K), jf(K), $r(K.content) && is(K.content);
    } catch (zt) {
      throw ee && Mf(F), zt;
    }
    if (ee)
      return Ko(t.removed, (zt) => {
        zt.element && T0(zt.element);
      }), Pn && Il(F), F;
    if (Lr) {
      if (Pn && Il(x), qi)
        for (X = R.call(x.ownerDocument); x.firstChild; )
          X.appendChild(x.firstChild);
      else
        X = x;
      return (ye.shadowroot || ye.shadowrootmode) && (X = w.call(r, X, !0)), X;
    }
    let Ne = ir ? x.outerHTML : x.innerHTML;
    return ir && ge["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Be(lA, x.ownerDocument.doctype.name) && (Ne = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Ne), Pn && (Ne = rs(Ne)), N && es ? H(Ne) : Ne;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ml(F), Al = !0, Cl = ge, Nl = ye;
  }, t.clearConfig = function() {
    Rr = null, Al = !1, Cl = null, Nl = null, N = z, S = "";
  }, t.isValidAttribute = function(F, g, x) {
    Rr || Ml({});
    const I = we(F), K = we(g);
    return Ff(I, K, x);
  }, t.addHook = function(F, g) {
    typeof g == "function" && De(P, F) && Ir(P[F], g);
  }, t.removeHook = function(F, g) {
    if (De(P, F)) {
      if (g !== void 0) {
        const x = KE(P[F], g);
        return x === -1 ? void 0 : ZE(P[F], x, 1)[0];
      }
      return Rm(P[F]);
    }
  }, t.removeHooks = function(F) {
    De(P, F) && (P[F] = []);
  }, t.removeAllHooks = function() {
    P = Zm();
  }, t;
}
var hA = cv();
const gA = [
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
], yA = ["href", "style", "src", "alt", "width", "height", "align", "colspan", "rowspan", "target", "rel"];
function Ii(e) {
  return e != null && e.trim() ? hA.sanitize(e, {
    ALLOWED_TAGS: [...gA],
    ALLOWED_ATTR: yA,
    ALLOW_DATA_ATTR: !1
  }) : "";
}
const dv = ["H1", "H2", "H3", "H4", "H5", "H6"], Nn = "H2";
function vA(e) {
  const t = e == null ? void 0 : e.trim().toUpperCase();
  return t && dv.includes(t) ? t : Nn;
}
const wA = {
  H1: "32px",
  H2: "28px",
  H3: "24px",
  H4: "20px",
  H5: "18px",
  H6: "16px"
}, TA = {
  H1: "2rem",
  H2: "1.75rem",
  H3: "1.5rem",
  H4: "1.25rem",
  H5: "1.125rem",
  H6: "1rem"
}, fv = ["Left", "Center", "Right"], pv = ["Top", "Right", "Bottom", "Left"], xr = "Left", yl = "Top";
function mv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "center" ? "Center" : t === "right" ? "Right" : "Left";
}
function hv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "right" ? "Right" : t === "bottom" ? "Bottom" : t === "left" ? "Left" : "Top";
}
function SA(e, t = {}, n = "stacked") {
  const r = e.contentAlignment ?? xr, o = Math.max(0, e.offsetPx ?? 0), i = e.offsetDirection ?? yl, s = {
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
function kA(e) {
  return `zone-layout-${(e.contentAlignment ?? xr).toLowerCase()}`;
}
function EA(e) {
  const t = { top: 16, right: 24, bottom: 16, left: 24 }, n = Math.max(0, e.offsetPx ?? 0);
  if (n <= 0)
    return t;
  const r = e.offsetDirection ?? yl;
  return r === "Top" && (t.top += n), r === "Right" && (t.right += n), r === "Bottom" && (t.bottom += n), r === "Left" && (t.left += n), t;
}
function Su(e, t = "") {
  const n = (e.contentAlignment ?? xr).toLowerCase(), r = EA(e);
  return `padding:${r.top}px ${r.right}px ${r.bottom}px ${r.left}px;text-align:${n};${t}`;
}
function AA(e) {
  return (e.contentAlignment ?? xr).toLowerCase();
}
function CA(e) {
  const t = e.contentAlignment ?? xr, n = "display:block;width:100%;max-width:552px;height:auto;border:0;";
  return t === "Center" ? `${n}margin:0 auto;` : t === "Right" ? `${n}margin-left:auto;margin-right:0;` : `${n}margin:0;`;
}
function NA() {
  return "display:inline-block;";
}
function On(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Ks(e, t, n) {
  var r;
  return ((r = e.colors.find((o) => o.colorUsageType === t)) == null ? void 0 : r.hexValue) ?? n;
}
function ku(e, t, n) {
  var r;
  return ((r = e.fonts.find((o) => o.fontUsageType === t)) == null ? void 0 : r.fontFamily) ?? n;
}
function bA(e) {
  const t = e.zoneKey.toLowerCase(), n = e.zoneLabel.toLowerCase();
  return t.includes("headline") || n.includes("headline");
}
function xA(e, t, n) {
  var i, s, a, l, u, c;
  const r = AA(e), o = Su(e);
  if (fl(e)) {
    const f = Su(e, "padding-top:24px;padding-bottom:16px;");
    return `<tr>
      <td align="${r}" style="${f}">
        <span style="display:inline-block;min-width:120px;padding:12px 20px;border:1px solid ${Zt.border};border-radius:4px;background:${Zt.surface};color:${Zt.muted};font-family:${gr};font-size:14px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-align:center;">Logo</span>
      </td>
    </tr>`;
  }
  switch (e.zoneType) {
    case "Text": {
      const f = (i = t == null ? void 0 : t.textValue) == null ? void 0 : i.trim();
      if (!f)
        return "";
      const p = bA(e), v = ku(n, p ? "Heading" : "Body", gr), k = p ? "28px" : "16px", T = p ? "bold" : "normal", L = Ks(n, "Secondary", Zt.secondary);
      return `<tr>
        <td align="${r}" style="${o}font-family:${v};font-size:${k};font-weight:${T};color:${L};line-height:1.5;">
          ${On(f)}
        </td>
      </tr>`;
    }
    case "Heading": {
      const f = (s = t == null ? void 0 : t.textValue) == null ? void 0 : s.trim();
      if (!f)
        return "";
      const p = e.headingLevel ?? Nn, v = ku(n, "Heading", gr), k = wA[p], T = Ks(n, "Secondary", Zt.secondary), L = p.toLowerCase();
      return `<tr>
        <td align="${r}" style="${o}">
          <${L} style="margin:0;font-family:${v};font-size:${k};font-weight:700;color:${T};line-height:1.25;">
            ${On(f)}
          </${L}>
        </td>
      </tr>`;
    }
    case "Image": {
      const f = (a = t == null ? void 0 : t.imageAssetUrl) == null ? void 0 : a.trim();
      if (!f)
        return "";
      const p = `<img src="${On(f)}" alt="${On(e.zoneLabel)}" width="552" style="${CA(e)}" />`, v = (l = t == null ? void 0 : t.linkUrl) == null ? void 0 : l.trim(), k = v ? `<a href="${On(v)}" target="_blank" rel="noopener noreferrer">${p}</a>` : p;
      return `<tr><td align="${r}" style="${o}">${k}</td></tr>`;
    }
    case "CTA Button": {
      const f = (u = t == null ? void 0 : t.textValue) == null ? void 0 : u.trim();
      if (!f)
        return "";
      const p = ((c = t == null ? void 0 : t.linkUrl) == null ? void 0 : c.trim()) || "#", v = Ks(n, "Accent", Zt.accent), k = ku(n, "CTA", gr);
      return `<tr>
        <td align="${r}" style="${Su(e, "padding-bottom:32px;")}">
          <a href="${On(p)}" target="_blank" rel="noopener noreferrer" style="${NA()}background-color:${v};color:#ffffff;font-family:${k};font-size:16px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:4px;">
            ${On(f)}
          </a>
        </td>
      </tr>`;
    }
    case "HTML": {
      const f = e.isLocked ? e.htmlDefaultContent : (t == null ? void 0 : t.htmlValue) ?? e.htmlDefaultContent, p = Ii(f);
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
function zc(e, t, n) {
  const r = Ks(n, "Background", Zt.background), o = "#ffffff", i = ef(e), s = e.zones.sort((a, l) => a.sortOrder - l.sortOrder).map((a) => xA(a, t[a.id] ?? t[a.zoneKey], n)).filter(Boolean).join(`
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
const er = "dummy-brand-kit", Vm = "dummy-template";
function fr(e = er) {
  return LE(e);
}
function PA(e, t = "Social") {
  return t === "Email" || t === "Newsletter" ? LA(e) : zA(e);
}
function zA(e) {
  return {
    id: e,
    templateName: "Demo Social Template",
    channelType: "Social",
    formatPreset: "1080x1080",
    canvasWidth: 1080,
    canvasHeight: 1080,
    brandKitId: er,
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
function LA(e) {
  return {
    id: e,
    templateName: "Demo Email Template",
    channelType: "Email",
    formatPreset: "Email.StandardEmail",
    canvasWidth: 600,
    canvasHeight: 800,
    brandKitId: er,
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
function _A(e, t) {
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
function OA(e) {
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
function Jn(e, t, n) {
  Mk(e, t, n);
}
function wo(e) {
  return { Invariant: e };
}
function Oe(e, t, n) {
  e[t] = wo(n);
}
function tf(e, t, n) {
  e[t] = n;
}
function ln(e, t, n) {
  Number.isNaN(n) || (e[t] = n);
}
function lr(e) {
  if (!(e == null || Number.isNaN(e)))
    return e;
}
function tr(e) {
  const t = e == null ? void 0 : e.trim();
  return t || void 0;
}
function To(e) {
  const t = {
    ...e,
    sortOrder: lr(e.sortOrder) ?? 0,
    positionX: lr(e.positionX),
    positionY: lr(e.positionY),
    zoneWidth: lr(e.zoneWidth),
    zoneHeight: lr(e.zoneHeight),
    offsetPx: lr(e.offsetPx),
    maxCharacterCount: lr(e.maxCharacterCount),
    aspectRatioLock: tr(e.aspectRatioLock),
    htmlDefaultContent: tr(e.htmlDefaultContent)
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
function RA(e, t) {
  const n = { zoneType: t };
  return t === "Heading" ? (n.headingLevel = e.headingLevel ?? Nn, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : (n.headingLevel = void 0, t === "Text" ? (n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "Image" ? (n.maxCharacterCount = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "HTML" ? (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n) : (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n));
}
function $A(e) {
  return {
    Title: wo(e.zoneKey)
  };
}
const MA = {
  textValue: ["textValue", "TextValue", "text", "content", "zoneText", "value"],
  colorValue: ["colorValue", "ColorValue", "color", "hexValue"],
  htmlValue: ["htmlValue", "HtmlValue", "html", "htmlContent"],
  linkUrl: ["linkUrl", "LinkUrl", "url", "href", "link"]
};
function gv(e) {
  const t = {};
  return e.textValue !== void 0 && Oe(t, "textValue", e.textValue), e.colorValue !== void 0 && Oe(t, "colorValue", e.colorValue), e.htmlValue !== void 0 && Oe(t, "htmlValue", e.htmlValue), e.linkUrl !== void 0 && Oe(t, "linkUrl", e.linkUrl), t;
}
function IA(e, t) {
  if (t.length === 0)
    return gv(e);
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
      for (const s of MA[i.key]) {
        const a = n.get(s.toLowerCase());
        if (a && !(/^title$/i.test(a) || /\.Title$/i.test(a))) {
          Oe(r, a, i.value);
          break;
        }
      }
  return r;
}
function DA(e) {
  var t, n, r, o, i, s;
  return !!((t = e.textValue) != null && t.trim() || (n = e.htmlValue) != null && n.trim() || (r = e.colorValue) != null && r.trim() || (o = e.linkUrl) != null && o.trim() || (i = e.imageAssetId) != null && i.trim() || (s = e.imageAssetUrl) != null && s.trim());
}
function HA(e) {
  const t = {};
  return e.isRawHtmlOverrideMA !== void 0 && (t.isRawHtmlOverrideMA = e.isRawHtmlOverrideMA), e.rawHtmlOverrideContent !== void 0 && Oe(t, "rawHtmlOverrideContent", e.rawHtmlOverrideContent), e.overrideReasonMA !== void 0 && Oe(t, "overrideReasonMA", e.overrideReasonMA), e.zoneLayoutJson !== void 0 && Oe(t, "zoneLayoutJson", e.zoneLayoutJson), e.designerInstanceJson !== void 0 && Oe(t, "designerInstanceJson", e.designerInstanceJson), t;
}
function FA(e) {
  return { templateName: wo(e.templateName) };
}
function yv(e) {
  const t = {};
  return Oe(t, "templateName", e.templateName), e.canvasWidth !== void 0 && ln(t, "canvasWidth", e.canvasWidth), e.canvasHeight !== void 0 && ln(t, "canvasHeight", e.canvasHeight), e.designerDocumentJson !== void 0 && Oe(t, "designerDocumentJson", e.designerDocumentJson), t;
}
function vv(e) {
  return {
    zoneKey: wo(e.zoneKey),
    zoneLabel: wo(e.zoneLabel || e.zoneKey)
  };
}
function UA(e, t) {
  if (!t)
    return vv(e);
  const n = {}, r = tr(e.zoneLabel) ?? e.zoneKey, o = tr(t.zoneLabel) ?? t.zoneKey;
  return e.zoneKey !== t.zoneKey && Oe(n, "zoneKey", e.zoneKey), r !== o && Oe(n, "zoneLabel", r), n;
}
function jA(e) {
  const t = {};
  return Oe(t, "zoneType", e.zoneType), tf(t, "isLocked", e.isLocked), ln(t, "sortOrder", e.sortOrder), t;
}
function BA(e, t) {
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
    r.push({ [o]: wo(e) }), r.push({ [o]: e });
  return r;
}
function KA(e, t) {
  const n = {};
  return (!t || e.isLocked !== t.isLocked) && tf(n, "isLocked", e.isLocked), (!t || e.sortOrder !== t.sortOrder) && ln(n, "sortOrder", e.sortOrder), n;
}
function wv(e, t) {
  const n = {};
  return e.positionX !== void 0 && e.positionX !== (t == null ? void 0 : t.positionX) && ln(n, "positionX", e.positionX), e.positionY !== void 0 && e.positionY !== (t == null ? void 0 : t.positionY) && ln(n, "positionY", e.positionY), e.zoneWidth !== void 0 && e.zoneWidth !== (t == null ? void 0 : t.zoneWidth) && ln(n, "zoneWidth", e.zoneWidth), e.zoneHeight !== void 0 && e.zoneHeight !== (t == null ? void 0 : t.zoneHeight) && ln(n, "zoneHeight", e.zoneHeight), e.contentAlignment !== void 0 && e.contentAlignment !== (t == null ? void 0 : t.contentAlignment) && Oe(n, "contentAlignment", e.contentAlignment), e.offsetDirection !== void 0 && e.offsetDirection !== (t == null ? void 0 : t.offsetDirection) && Oe(n, "offsetDirection", e.offsetDirection), e.offsetPx !== void 0 && e.offsetPx !== (t == null ? void 0 : t.offsetPx) && ln(n, "offsetPx", e.offsetPx), n;
}
function Tv(e, t) {
  const n = To(e), r = {};
  return (n.zoneType === "Text" || n.zoneType === "Heading") && n.maxCharacterCount !== void 0 && n.maxCharacterCount !== (t == null ? void 0 : t.maxCharacterCount) && ln(r, "maxCharacterCount", n.maxCharacterCount), n.zoneType === "Heading" && n.headingLevel !== void 0 && n.headingLevel !== (t == null ? void 0 : t.headingLevel) && Oe(r, "headingLevel", n.headingLevel), n.zoneType === "Image" && n.aspectRatioLock !== void 0 && n.aspectRatioLock !== tr(t == null ? void 0 : t.aspectRatioLock) && Oe(r, "aspectRatioLock", n.aspectRatioLock), n.zoneType === "HTML" && (n.htmlDefaultContent !== void 0 && n.htmlDefaultContent !== tr(t == null ? void 0 : t.htmlDefaultContent) && Oe(r, "htmlDefaultContent", n.htmlDefaultContent), n.htmlAllowUserOverride !== void 0 && n.htmlAllowUserOverride !== (t == null ? void 0 : t.htmlAllowUserOverride) && tf(r, "htmlAllowUserOverride", n.htmlAllowUserOverride)), r;
}
function Wm(e) {
  const t = To(e);
  return {
    ...jA(t),
    ...wv(t),
    ...Tv(t)
  };
}
function ZA(e, t) {
  const n = To(e), r = To(t), o = tr(n.zoneLabel) ?? n.zoneKey, i = tr(r.zoneLabel) ?? r.zoneKey;
  return n.zoneKey === r.zoneKey && o === i && JSON.stringify(Wm(n)) === JSON.stringify(Wm(r));
}
function Ym(e) {
  return /^\d+$/.test(e);
}
const VA = ["Social", "Email", "Newsletter"];
function nf(e) {
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
function Y(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = nf(e[n]);
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
      const r = nf(e[n]);
      if (typeof r == "number" && Number.isFinite(r))
        return r;
      if (typeof r == "string") {
        const o = Number(r);
        if (Number.isFinite(o))
          return o;
      }
    }
}
function Lc(e, ...t) {
  if (!e)
    return !1;
  for (const n of t) {
    const r = nf(e[n]);
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
function kt(e, ...t) {
  const n = Yd(e, ...t);
  if (n.length > 0)
    return n;
  if (!e)
    return [];
  for (const r of t) {
    const o = e[r];
    if (!Array.isArray(o))
      continue;
    const i = Cr(o);
    if (i.length > 0)
      return i;
  }
  return [];
}
function vl(e, t) {
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
function WA(e) {
  const t = e.trim().toLowerCase();
  return t.includes("email") ? "Email" : t.includes("newsletter") ? "Newsletter" : "Social";
}
function YA(e) {
  const t = Y(e, "EPAM.headingLevel", "headingLevel");
  return t ? vA(t) : void 0;
}
function GA(e) {
  const t = Y(e, "EPAM.contentAlignment", "contentAlignment");
  return t ? mv(t) : void 0;
}
function XA(e) {
  const t = Y(e, "EPAM.offsetDirection", "offsetDirection");
  return t ? hv(t) : void 0;
}
function Eu(e, t = "") {
  return { id: String(e), name: t || String(e) };
}
function Sv(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = t, s = Y(r, "EPAM.channelType", "channelType") || Y(r, "EPAM.channelTypeMA", "channelTypeMA") || jn(i, "channelType"), a = Y(r, "EPAM.brandKitId", "brandKitId"), l = kt(
    o,
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit",
    "marketingTemplateToBrandKit"
  )[0];
  return {
    id: String(e),
    templateName: Y(r, "EPAM.templateName", "templateName", "Title") || `Template ${e}`,
    channelType: VA.includes(s) ? s : WA(s),
    formatPreset: Y(r, "EPAM.formatPreset", "formatPreset") || jn(i, "formatPreset") || "",
    canvasWidth: hn(r, "EPAM.canvasWidth", "canvasWidth"),
    canvasHeight: hn(r, "EPAM.canvasHeight", "canvasHeight"),
    brandKitId: a || (l != null ? String(l) : ""),
    zones: n,
    allowedAssetIds: Ev(t).map(String),
    designerDocumentJson: Y(
      r,
      "EPAM.designerDocumentJson",
      "designerDocumentJson",
      "DesignerDocumentJson"
    ) || void 0
  };
}
function rf(e, t) {
  const n = t.properties ?? {}, r = t, o = Y(n, "EPAM.zoneKey", "zoneKey") || `zone-${e}`, i = Y(n, "EPAM.zoneLabel", "zoneLabel", "Title") || `Zone ${e}`, s = Y(n, "EPAM.zoneType", "zoneType", "ZoneType", "zoneTypeMA", "ZoneTypeMA") || jn(r, "zoneType") || jn(r, "ZoneType") || jn(r, "EPAM.ZoneType") || jn(r, "zoneTypeMA"), a = Xd(s, o, i), l = YA(n) ?? (a === "Heading" ? Nn : void 0);
  return {
    id: String(e),
    zoneKey: o,
    zoneLabel: i,
    zoneType: a,
    isLocked: Lc(n, "EPAM.isLocked", "isLocked"),
    sortOrder: hn(n, "EPAM.sortOrder", "sortOrder") ?? 0,
    positionX: hn(n, "EPAM.positionX", "positionX"),
    positionY: hn(n, "EPAM.positionY", "positionY"),
    zoneWidth: hn(n, "EPAM.zoneWidth", "zoneWidth"),
    zoneHeight: hn(n, "EPAM.zoneHeight", "zoneHeight"),
    maxCharacterCount: hn(n, "EPAM.maxCharacterCount", "maxCharacterCount"),
    headingLevel: l,
    contentAlignment: GA(n),
    offsetDirection: XA(n),
    offsetPx: hn(n, "EPAM.offsetPx", "offsetPx"),
    aspectRatioLock: Y(n, "EPAM.aspectRatioLock", "aspectRatioLock") || void 0,
    htmlDefaultContent: Y(n, "EPAM.htmlDefaultContent", "htmlDefaultContent") || void 0,
    htmlAllowUserOverride: Lc(n, "EPAM.htmlAllowUserOverride", "htmlAllowUserOverride"),
    allowedAssetIds: Av(t).map(String),
    allowedAssetCollectionId: Y(n, "EPAM.allowedAssetCollectionId", "allowedAssetCollectionId") || void 0
  };
}
function kv(e, t) {
  const n = t.properties ?? {}, r = of(t), o = r[0] != null ? String(r[0]) : void 0;
  return {
    id: String(e),
    zoneKey: Y(n, "EPAM.zoneKey", "zoneKey", "Title") || `zone-${e}`,
    textValue: Y(n, "EPAM.textValue", "textValue") || void 0,
    colorValue: Y(n, "EPAM.colorValue", "colorValue") || void 0,
    htmlValue: Y(n, "EPAM.htmlValue", "htmlValue") || void 0,
    imageAssetId: Y(n, "EPAM.imageAssetId", "imageAssetId") || o || void 0,
    imageAssetUrl: Y(n, "EPAM.imageAssetUrl", "imageAssetUrl") || void 0,
    linkUrl: Y(n, "EPAM.linkUrl", "linkUrl") || void 0
  };
}
function JA(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = Y(r, "EPAM.templateId", "templateId") || String(
    kt(
      o,
      "marketingAssetToTemplate",
      "MarketingAssetToTemplate",
      "EPAM.MarketingAssetToTemplate"
    )[0] ?? ""
  );
  return {
    id: String(e),
    assetName: Y(r, "EPAM.assetName", "assetName", "Title") || `Asset ${e}`,
    channelTypeMA: Eu(
      kt(o, "channelTypeMA", "ChannelTypeMA")[0] ?? "channel",
      Y(r, "EPAM.channelTypeMA", "channelTypeMA") || "Channel"
    ),
    formatPresetMA: Eu(
      kt(o, "formatPresetMA", "FormatPresetMA")[0] ?? "format",
      Y(r, "EPAM.formatPresetMA", "formatPresetMA") || "Format"
    ),
    outputFormatMA: Eu(
      kt(o, "outputFormatMA", "OutputFormatMA")[0] ?? "output",
      Y(r, "EPAM.outputFormatMA", "outputFormatMA") || "Output"
    ),
    templateId: i,
    isRawHtmlOverrideMA: Lc(r, "EPAM.isRawHtmlOverrideMA", "isRawHtmlOverrideMA"),
    rawHtmlOverrideContent: Y(r, "EPAM.rawHtmlOverrideContent", "rawHtmlOverrideContent") || void 0,
    overrideReasonMA: Y(r, "EPAM.overrideReasonMA", "overrideReasonMA") || void 0,
    zoneLayoutJson: Y(r, "EPAM.zoneLayoutJson", "zoneLayoutJson", "builderLayoutJson") || void 0,
    designerInstanceJson: Y(
      r,
      "EPAM.designerInstanceJson",
      "designerInstanceJson",
      "DesignerInstanceJson"
    ) || void 0,
    zoneValues: n,
    renderedOutputAssetId: Y(r, "EPAM.renderedOutputAssetId", "renderedOutputAssetId") || String(kt(o, "marketingAssetToRenderedOutput")[0] ?? "") || void 0
  };
}
function QA(e, t, n = [], r = []) {
  const o = t.properties ?? {};
  return {
    id: String(e),
    brandKitName: Y(o, "EPAM.brandKitName", "brandKitName", "Title") || `Brand kit ${e}`,
    logoAssetUrl: Y(o, "EPAM.logoAssetUrl", "logoAssetUrl"),
    colors: n,
    fonts: r
  };
}
function Ev(e) {
  const t = kt(e.relations, ...Ky), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/template.*asset|allowed.*asset/i.test(r) || /collection|zone/i.test(r) || Array.isArray(o) && n.push(...Cr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function of(e) {
  const t = kt(e.relations, ...Zy), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/selected.*asset|zonevalue.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Cr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function Av(e) {
  const t = kt(e.relations, ...By), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/allowed.*asset|zone.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Cr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function qA(e) {
  return [.../* @__PURE__ */ new Set([
    ...kt(
      e.relations,
      "templateToZone",
      "templateToTemplateZone",
      "TemplateToTemplateZone",
      "EPAM.TemplateToTemplateZone",
      "templateToEPAM.TemplateZone"
    ),
    ...vl(e.relations, /template.*zone/i)
  ])];
}
function Cv(e) {
  return [.../* @__PURE__ */ new Set([
    ...kt(
      e.relations,
      "marketingAssetToZoneValue",
      "MarketingAssetToZoneValue",
      "EPAM.MarketingAssetToZoneValue"
    ),
    ...vl(e.relations, /zonevalue/i)
  ])];
}
function eC(e, t) {
  const n = t.properties ?? {}, r = Y(n, "EPAM.colorUsageType", "colorUsageType") || "Primary";
  return {
    colorName: Y(n, "EPAM.colorName", "colorName") || `Color ${e}`,
    hexValue: Y(n, "EPAM.hexValue", "hexValue") || "#000000",
    colorUsageType: r
  };
}
function tC(e, t) {
  const n = t.properties ?? {}, r = Y(n, "EPAM.fontUsageType", "fontUsageType") || "Body", o = Y(n, "EPAM.fontWeight", "fontWeight") || "Regular";
  return {
    fontFamily: Y(n, "EPAM.fontFamily", "fontFamily") || "sans-serif",
    fontWeight: o,
    fontUsageType: r
  };
}
function nC(e) {
  return kt(
    e.relations,
    "brandKitToColor",
    "BrandKitToColor",
    "brandKitToBrandColor"
  ).concat(vl(e.relations, /color/i));
}
function rC(e) {
  return kt(
    e.relations,
    "brandKitToFont",
    "BrandKitToFont",
    "brandKitToBrandFont"
  ).concat(vl(e.relations, /font/i));
}
function oC(e) {
  return ["Social", "Email", "Newsletter"].filter((t) => t !== e);
}
function iC(e, t, n, r) {
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
  return e.zoneType === "Heading" && (o.headingLevel = e.headingLevel, o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Text" && (o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Image" && (o.aspectRatioLock = e.aspectRatioLock), e.zoneType === "HTML" && (o.htmlDefaultContent = e.htmlDefaultContent, o.htmlAllowUserOverride = e.htmlAllowUserOverride), r === "Social" ? sC(o, t) : aC(o);
}
function sC(e, t) {
  const n = e.zoneType === "Logo" ? 80 : e.zoneType === "Image" ? 360 : e.zoneType === "Heading" ? 120 : e.zoneType === "CTA Button" ? 72 : 96;
  return {
    ...e,
    positionX: e.positionX ?? 40,
    positionY: e.positionY ?? 40 + t * (n + 24),
    zoneWidth: e.zoneWidth ?? 1e3,
    zoneHeight: n
  };
}
function aC(e) {
  return {
    ...e,
    positionX: void 0,
    positionY: void 0,
    zoneWidth: void 0,
    zoneHeight: void 0
  };
}
function lC(e, t, n) {
  const r = sv(t), o = Date.now(), i = [...e.zones].sort((s, a) => s.sortOrder - a.sortOrder).map((s, a) => iC(s, a, o, t));
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
function sf(e) {
  const t = wt(e, /allowed.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/^template/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...By, ...t])];
}
function af(e) {
  const t = wt(e, /template.*asset|allowed.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/zone/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...Ky, ...t])];
}
function uC(e) {
  const t = wt(e, /selected.*asset|zonevalue.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...Zy, ...t])];
}
const lf = "/api/content-hub", cC = "/api/render-email-html";
let O = {}, wl = lf;
function uf() {
  return wl.replace(/\/$/, "") !== lf;
}
function dC(e) {
  const t = e.trim().replace(/\/$/, "");
  return !t || t === cC;
}
function fC(e) {
  O = e ?? {};
}
function pC(e) {
  wl = e.replace(/\/$/, "") || lf;
}
async function _c(e, t) {
  const n = await fetch(`${wl}${e}`, {
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
async function mC(e, t, n) {
  var o;
  let r = ((o = t.brandKitId) == null ? void 0 : o.trim()) ?? "";
  if (!r) {
    const i = await Xt(
      O,
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
    allowedAssetIds: t.allowedAssetIds && t.allowedAssetIds.length > 0 ? t.allowedAssetIds : Ev(n).map(String)
  };
}
async function hC(e, t) {
  const n = Av(t);
  if (n.length > 0)
    return { ...e, allowedAssetIds: n.map(String) };
  if (!rt(t.relations, "templateZoneToAllowedAssetCollection"))
    return e;
  const r = await Xt(
    O,
    e.id,
    "templateZoneToAllowedAssetCollection",
    t.relations
  );
  return r[0] != null ? { ...e, allowedAssetCollectionId: String(r[0]) } : e;
}
function Nv(e) {
  const t = wt(e, /template.*zone/i);
  return [.../* @__PURE__ */ new Set([...t, ...Ri])];
}
async function gC(e, t, n) {
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
      const u = l, c = u.systemProperties, f = (c == null ? void 0 : c.id) ?? u.id ?? u.entityId;
      typeof f == "number" && Number.isFinite(f) && a.push(f);
    }
    return a;
  } catch {
    return [];
  }
}
const yC = ["channelType", "ChannelType", "EPAM.ChannelType"], vC = ["formatPreset", "FormatPreset", "EPAM.FormatPreset"];
async function bv(e) {
  var i, s;
  if (!((i = O == null ? void 0 : O.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating templates.");
  const t = [
    FA(e),
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
  const o = yv(e);
  if (Object.keys(o).length > 0)
    try {
      await Lv(n, o);
    } catch (a) {
      ae(
        "template create",
        `Template ${n} created but optional property update failed: ${a instanceof Error ? a.message : String(a)}`
      );
    }
  return Z("template create", `Created EPAM.Template ${n} (${e.templateName})`), n;
}
async function wC(e, t, n) {
  var i;
  return (await Tl(n)).channelType === t ? n : (i = (await zv(e)).find((s) => s.channelType === t)) == null ? void 0 : i.id;
}
async function Gm(e, t, n, r) {
  const o = await ne(t);
  for (const i of n) {
    const s = await Xt(
      O,
      t,
      i,
      o.relations
    );
    if (s[0] == null)
      continue;
    if (await vo(
      O,
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
async function xv(e, t, n, r) {
  if (!(n != null && n.trim()))
    return;
  const o = await wC(
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
  await Gm(
    e,
    o,
    yC,
    "channelType"
  ), await Gm(
    e,
    o,
    vC,
    "formatPreset"
  );
}
async function Pv(e, t) {
  if (!(t != null && t.trim()))
    return;
  if (await vo(O, e, t, "templateToBrandKit")) {
    Z("template brand kit", `Linked template ${e} to brand kit ${t}`);
    return;
  }
  if (await Jt(O, t, e, "brandKitToTemplate")) {
    Z("template brand kit", `Linked brand kit ${t} to template ${e}`);
    return;
  }
  Ue(
    "template brand kit",
    `Could not link template ${e} to brand kit ${t}`,
    "Link templateToBrandKit on the template in Content Hub."
  );
}
async function zv(e) {
  if (!(e != null && e.trim()) || e === er)
    return [];
  let t = [];
  for (const o of [
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit"
  ])
    if (t = await gC("EPAM.Template", o, e), t.length > 0)
      break;
  if (t.length === 0)
    try {
      const o = await ne(e);
      t = await Xt(
        O,
        e,
        "brandKitToTemplate",
        o.relations
      );
    } catch {
      t = [];
    }
  const n = [...new Set(t)];
  return n.length === 0 ? [] : (await Promise.all(n.map((o) => Tl(String(o))))).sort((o, i) => o.templateName.localeCompare(i.templateName));
}
async function TC(e, t, n) {
  const r = await Tl(e), o = lC(r, t, n), i = await bv(o);
  o.brandKitId && (await Pv(i, o.brandKitId), await xv(
    i,
    o.channelType,
    o.brandKitId,
    e
  ));
  const s = await cf({ ...o, id: i }, []);
  return await $v(s.id, r.allowedAssetIds ?? []), Z(
    "template duplicate",
    `Created template ${s.id} (${s.templateName}) from ${e} as ${t}`
  ), s;
}
async function SC(e, t) {
  var i;
  const n = {
    ...e,
    id: ((i = e.id) == null ? void 0 : i.trim()) || "",
    zones: e.zones ?? []
  }, r = await bv(n);
  n.brandKitId && (await Pv(r, n.brandKitId), t != null && t.trim() && await xv(
    r,
    n.channelType,
    n.brandKitId,
    t
  ));
  const o = await cf({ ...n, id: r }, []);
  return await $v(o.id, n.allowedAssetIds ?? []), Z(
    "template create",
    `Created template ${o.id} (${o.templateName}) with ${o.zones.length} zone(s)`
  ), o;
}
async function kC(e, t) {
  const n = await ne(e), r = [
    "marketingAssetToTemplate",
    "MarketingAssetToTemplate",
    "EPAM.MarketingAssetToTemplate"
  ], o = await Xt(O, e, r[0], n.relations);
  for (const s of o)
    if (String(s) !== t)
      for (const a of r)
        await No(O, e, s, a, n.relations);
  let i = !1;
  for (const s of r)
    if (await Jt(O, e, t, s, n.relations)) {
      i = !0;
      break;
    }
  if (!i)
    throw new Error(
      `Could not link template ${t} to marketing asset ${e}. Check marketingAssetToTemplate relation permissions.`
    );
  Z("marketing asset template", `Linked marketing asset ${e} to template ${t}`);
}
async function EC(e, t) {
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
      const l = a, u = l.systemProperties, c = (u == null ? void 0 : u.id) ?? l.id ?? l.entityId;
      typeof c == "number" && Number.isFinite(c) && s.push(c);
    }
    return s;
  } catch {
    return [];
  }
}
async function Tl(e) {
  const t = await ne(e);
  eE(e, t);
  let n = [...new Set(qA(t))];
  if (n.length === 0) {
    const i = Nv(t.relations), s = await Oi(
      O,
      e,
      t.relations,
      i.filter((a) => rt(t.relations, a))
    );
    n = s.ids, s.relationName && Z("template zones", `Found zones via relation ${s.relationName}`);
  }
  if (n.length === 0) {
    const { templateChildRelations: i, zoneParentRelations: s } = await cl(
      O,
      t.relations
    );
    for (const a of s) {
      const l = await EC(e, a);
      if (l.length > 0) {
        n = l, Z(
          "template zones",
          `Found ${l.length} zone(s) via parent query on ${a}`
        );
        break;
      }
    }
    if (n.length === 0 && i.length > 0) {
      const a = await Oi(
        O,
        e,
        t.relations,
        i.filter((l) => rt(t.relations, l))
      );
      n = a.ids, a.relationName && Z("template zones", `Found zones via relation ${a.relationName}`);
    }
  }
  let r = [];
  if (n.length > 0)
    try {
      const i = await fn(n);
      await cE(O, ne, i), r = await Promise.all(
        i.map(async (s, a) => {
          const l = rf(n[a], s), u = await hC(l, s);
          return tv(O, ne, u, s);
        })
      );
    } catch (i) {
      ae(
        "template zones",
        `Could not load zones for template ${e}: ${i instanceof Error ? i.message : String(i)}`
      ), r = [];
    }
  const o = await mC(
    e,
    Sv(e, t, r),
    t
  );
  return r.length > 0 ? (Z("template zones", `Loaded ${r.length} zone(s) for template ${e}`), o) : (Ue(
    "template zones",
    `Template ${e} has no linked zones yet`,
    'This is normal for a new template. Use "Edit Template Zones" to add zones, or link EPAM.TemplateZone entities in Content Hub. Zones link via a Parent relation on EPAM.TemplateZone → EPAM.Template (not on the template entity itself).'
  ), o);
}
async function AC(e) {
  var i;
  const t = await ne(e);
  let n = [...new Set(Cv(t))];
  n.length === 0 && (n = await Xt(
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
          async (a, l) => OC(n[l], kv(n[l], a), a)
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
  let o = JA(e, t, r);
  if (!((i = o.templateId) != null && i.trim())) {
    const s = await Xt(
      O,
      e,
      "marketingAssetToTemplate",
      t.relations
    );
    s[0] != null && (o = { ...o, templateId: String(s[0]) });
  }
  return o;
}
async function CC(e) {
  if (!(e != null && e.trim()) || e === er)
    return Jn(
      "brand kit",
      "No brand kit id resolved",
      "Link templateToBrandKit on the template or set brandKitId in Configuration."
    ), Qo(fr(e || er));
  try {
    const t = await ne(e), n = [...new Set(nC(t))], r = [...new Set(rC(t))], [o, i] = await Promise.all([
      fn(n),
      fn(r)
    ]), s = o.map(
      (u, c) => eC(n[c], u)
    ), a = i.map(
      (u, c) => tC(r[c], u)
    ), l = QA(e, t, s, a);
    return !l.logoAssetUrl && s.length === 0 && a.length === 0 ? (Jn(
      "brand kit",
      `Brand kit ${e} (${l.brandKitName}) has no colors, fonts, or logo linked`,
      "Add brandKitToColor / brandKitToFont relations and a logo asset on the brand kit."
    ), Qo(fr(e))) : (s.length === 0 ? Ue("brand kit colors", `Brand kit ${e} has no colors linked`, "Link colors via brandKitToColor.") : Z("brand kit colors", `Loaded ${s.length} color(s) for brand kit ${e}`), a.length === 0 ? Ue("brand kit fonts", `Brand kit ${e} has no fonts linked`, "Link fonts via brandKitToFont.") : Z("brand kit fonts", `Loaded ${a.length} font(s) for brand kit ${e}`), l.logoAssetUrl || Ue("brand kit logo", `Brand kit ${e} has no logo asset`, "Set logoAssetUrl on the brand kit entity."), Qo({
      ...fr(e),
      ...l,
      colors: s.length > 0 ? s : fr(e).colors,
      fonts: a.length > 0 ? a : fr(e).fonts
    }));
  } catch (t) {
    return Jn("brand kit", t, `Could not load brand kit entity ${e}.`), Qo(fr(e));
  }
}
function NC(e, t) {
  const n = Sv(e.id, t, e.zones);
  return n.templateName !== e.templateName || n.canvasWidth !== e.canvasWidth || n.canvasHeight !== e.canvasHeight;
}
async function Xi(e, t, n, r) {
  var c;
  if (!((c = O == null ? void 0 : O.raw) != null && c.putAsync))
    throw new Error(`Content Hub client is not available for saving ${n}.`);
  if (Object.keys(t).length === 0)
    return !0;
  const o = await ne(e), i = nE(o, t, r), s = await O.raw.putAsync(`/api/entities/${e}`, i);
  if (s.isSuccessStatusCode)
    return !0;
  const a = s.statusCode ?? "unknown", l = s.content != null && typeof s.content == "object" ? String(s.content.Message ?? "") : "", u = l ? `: ${l}` : "";
  if (a === 403 || a === 401)
    return Ue(
      n,
      `Permission denied (${a}) updating entity ${e}${u}`,
      "Grant update permission on this entity definition for your role."
    ), !1;
  throw new Error(
    `Content Hub API error (${a}) saving ${n} on entity ${e}${u}`
  );
}
async function Lv(e, t) {
  return Xi(e, t, "template properties", "EPAM.Template");
}
async function cf(e, t = []) {
  var l;
  if (!((l = O == null ? void 0 : O.raw) != null && l.postAsync))
    throw new Error("Content Hub client is not available for saving template zones.");
  const n = await ne(e.id);
  NC(e, n) && (await Lv(e.id, yv(e)) ? Z("template properties", `Saved properties on template ${e.id}`) : ae(
    "template properties",
    `Skipped property update on template ${e.id}; continuing with zone save.`
  ));
  const r = await cl(O, n.relations), o = bC(
    n.relations,
    r.templateChildRelations
  ), i = [], s = /* @__PURE__ */ new Set();
  for (const u of t)
    !e.zones.some((f) => f.id === u.id) && Ym(u.id) && s.add(u.id);
  const a = [...e.zones].sort((u, c) => u.sortOrder - c.sortOrder);
  for (const u of a) {
    const c = t.find((v) => v.id === u.id);
    if (!(!c || !ZA(u, c))) {
      i.push(u);
      continue;
    }
    if (Ym(u.id)) {
      await zC(u.id, u), i.push(u);
      continue;
    }
    const p = await LC(u);
    await xC(
      e.id,
      p,
      o,
      n.relations,
      r
    ), i.push({ ...u, id: p }), Z("template zone", `Created EPAM.TemplateZone ${p} (${u.zoneKey}) and linked to template ${e.id}`);
  }
  for (const u of s)
    await _C(e.id, u, o, n.relations);
  return Z("template zones", `Saved ${i.length} template zone(s) on template ${e.id}`), { ...e, zones: i };
}
function bC(e, t = []) {
  const n = [
    ...t,
    ...Nv(e)
  ];
  for (const r of n)
    if (rt(e, r))
      return r;
  return t[0] ?? Ri[0];
}
async function xC(e, t, n, r, o) {
  const i = o ?? await cl(O, r);
  let s;
  try {
    const f = await ne(t);
    s = f.relations, tE(t, f);
  } catch {
    s = void 0;
  }
  const a = wt(s, /template/i).filter(
    (f) => !/collection|asset/i.test(f)
  ), l = fi(
    [...a, ...i.zoneParentRelations, ...va],
    s,
    /zone.*template|template/i
  );
  for (const f of l)
    if (await vo(O, t, e, f, s)) {
      Z("template zone link", `Linked zone ${t} to template ${e} via parent relation ${f}`);
      return;
    }
  const u = fi(
    [n, ...i.templateChildRelations, ...Ri],
    r,
    /template.*zone/i
  ).filter((f) => !!rt(r, f));
  for (const f of u)
    if (await Jt(O, e, t, f, r)) {
      Z("template zone link", `Linked zone ${t} to template ${e} via child relation ${f}`);
      return;
    }
  const c = fi(
    [n, ...i.templateChildRelations, ...Ri],
    r,
    /template.*zone/i
  ).filter((f) => !rt(r, f));
  for (const f of c)
    if (await Jt(O, e, t, f, r)) {
      Z(
        "template zone link",
        `Linked zone ${t} to template ${e} via definition child relation ${f}`
      );
      return;
    }
  throw new Error(
    `Could not link zone ${t} to template ${e}. Tried parent relations: ${l.join(", ") || "(none from definition)"}; child relations: ${[...u, ...c].join(", ") || "(none)"}. Confirm EPAM.TemplateZone has a parent relation to EPAM.Template in Content Hub.`
  );
}
async function yn(e, t, n) {
  if (Object.keys(t).length === 0)
    return !0;
  try {
    return await Xi(e, t, n);
  } catch (r) {
    return ae(
      n,
      `Optional property update skipped for entity ${e}: ${r instanceof Error ? r.message : String(r)}`
    ), !1;
  }
}
async function Au(e, t, n) {
  const r = await ne(e), o = rf(e, r);
  return (await tv(O, ne, o, r)).zoneType;
}
async function PC(e, t, n) {
  const r = To(t), o = await wE(O), i = aE(n), s = i || SE(o), a = async () => {
    for (const u of BA(
      r.zoneType,
      o.propertyNames
    ))
      if (await yn(e, u, "template zone type"), await Au(
        e,
        r.zoneKey,
        r.zoneLabel
      ) === r.zoneType)
        return Z(
          "template zone type",
          `Persisted "${r.zoneType}" on zone ${e} via property ${Object.keys(u).join(", ")}`
        ), !0;
    return !1;
  };
  if (s) {
    const u = await hE(
      O,
      ne,
      e,
      r.zoneType,
      n
    ), c = await Au(
      e,
      r.zoneKey,
      r.zoneLabel
    );
    if (c === r.zoneType)
      return !0;
    u && ae(
      "template zone type",
      `Relation link reported success for zone ${e} but reload still reads "${c}".`
    );
  }
  if (!i && TE(o) && await a())
    return !0;
  const l = await Au(
    e,
    r.zoneKey,
    r.zoneLabel
  );
  return ae(
    "template zone type",
    `Zone ${e} (${r.zoneKey}) still reads as "${l}" after save; expected "${r.zoneType}".`
  ), l === r.zoneType;
}
async function _v(e, t) {
  const n = To(t), r = await ne(e), o = rf(e, r), i = UA(n, o);
  if (Object.keys(i).length > 0 && !await yn(e, i, "template zone identity") && i.zoneLabel != null) {
    const f = n.zoneLabel || n.zoneKey;
    await yn(
      e,
      { Title: { Invariant: f } },
      "template zone title"
    );
  }
  const s = await PC(e, n, r), a = await yn(
    e,
    KA(n, o),
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
  const l = wv(n, o);
  Object.keys(l).length > 0 && await yn(e, l, "template zone layout");
  const u = Tv(n, o);
  Object.keys(u).length > 0 && await yn(e, u, "template zone optional");
}
async function zC(e, t) {
  try {
    await _v(e, t);
  } catch (n) {
    throw new Error(
      `Permission denied updating template zone ${e} (${t.zoneKey}). Grant Update on EPAM.TemplateZone. ${n instanceof Error ? n.message : String(n)}`
    );
  }
  Z("template zone", `Updated EPAM.TemplateZone ${e} (${t.zoneKey}, type ${t.zoneType})`);
}
async function LC(e) {
  var i;
  const t = O.raw;
  if (!(t != null && t.postAsync))
    throw new Error("Content Hub client does not support creating template zones.");
  const n = [
    vv(e),
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
    await _v(r, e);
  } catch (s) {
    ae(
      "template zone create",
      `Zone ${r} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return r;
}
async function _C(e, t, n, r) {
  const o = await cl(O, r);
  let i;
  try {
    i = (await ne(t)).relations;
  } catch {
    i = void 0;
  }
  const s = fi(
    [...o.zoneParentRelations, ...va],
    i,
    /zone.*template/i
  );
  for (const l of s)
    if (await Jy(O, t, e, l, i)) {
      Z("template zone unlink", `Cleared parent ${e} from zone ${t} via ${l}`);
      return;
    }
  const a = fi(
    [n, ...o.templateChildRelations, ...Ri],
    r,
    /template.*zone/i
  ).filter((l) => !!rt(r, l));
  for (const l of a)
    if (await No(O, e, t, l, r)) {
      Z("template zone unlink", `Removed zone ${t} from template ${e} via ${l}`);
      return;
    }
  Ue(
    "template zone unlink",
    `Could not remove zone ${t} from template ${e}`,
    "The new zone was created and linked, but the previous zone link may need to be removed manually in Content Hub."
  );
}
async function OC(e, t, n) {
  var i;
  const r = of(n), o = t.imageAssetId || (r[0] != null ? String(r[0]) : void 0);
  if (!o)
    return t;
  if ((i = t.imageAssetUrl) != null && i.trim())
    return { ...t, imageAssetId: o };
  try {
    const s = await ne(o), a = bo(o, s);
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
async function Ov(e) {
  const t = await ne(e), n = af(t.relations), r = await Oi(
    O,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => bo(r.ids[s], i)).filter((i) => i != null);
}
async function Rv(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = af(o.relations);
  for (const a of i)
    if (await Jt(
      O,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "template allowed asset",
        `Linked asset ${r} to template ${n} via ${a}`
      ), !0;
  if ((s = O == null ? void 0 : O.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await O.raw.postAsync(
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
async function RC(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = af(o.relations);
  for (const s of i)
    if (await No(
      O,
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
async function $v(e, t = []) {
  const n = [...new Set(t.map((i) => i.trim()).filter(Boolean))];
  if (n.length === 0)
    return;
  const r = await Ov(e), o = new Set(r.map((i) => i.id));
  for (const i of n)
    o.has(i) || await Rv(e, i);
}
async function $C(e) {
  const t = await ne(e);
  return of(t).map(String);
}
let ur = null;
async function MC(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = uC(o.relations), s = i.filter((f) => !!rt(o.relations, f)), a = ur == null ? void 0 : ur.name, l = [
    ...new Set(
      [
        a,
        ...s,
        // Prefer the known-good name before spraying aliases that 404.
        "zoneValueToSelectedAsset",
        ...i
      ].filter((f) => !!f)
    )
  ].slice(0, a || s.length > 0 ? 3 : 4), u = await $C(n);
  for (const f of u)
    if (f !== r)
      for (const p of l)
        await No(
          O,
          n,
          f,
          p,
          o.relations
        ), await Jy(
          O,
          n,
          f,
          p,
          o.relations
        );
  if (u.includes(r))
    return !0;
  const c = (ur == null ? void 0 : ur.mode) === "child" ? ["child", "parent"] : ["parent", "child"];
  for (const f of c)
    for (const p of l)
      if (f === "parent" ? await vo(
        O,
        n,
        r,
        p,
        o.relations
      ) : await Jt(
        O,
        n,
        r,
        p,
        o.relations
      ))
        return ur = { name: p, mode: f }, Z(
          "zone value selected asset",
          `Linked asset ${r} to zone value ${n} via ${p} (${f})`
        ), !0;
  return Ue(
    "zone value selected asset",
    `Could not link asset ${r} to zone value ${n}`,
    "Create a relation on EPAM.MarketingAssetZoneValue to M.Asset (e.g. zoneValueToSelectedAsset)."
  ), !1;
}
async function IC(e, t) {
  var n;
  (n = t.imageAssetId) != null && n.trim() && await MC(e, t.imageAssetId);
}
async function DC(e) {
  const t = await ne(e), n = sf(t.relations), r = await Oi(
    O,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => bo(r.ids[s], i)).filter((i) => i != null);
}
async function HC(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = sf(o.relations);
  for (const a of i)
    if (await Jt(
      O,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "zone allowed asset",
        `Linked asset ${r} to zone ${n} via ${a}`
      ), !0;
  if ((s = O == null ? void 0 : O.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await O.raw.postAsync(
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
async function FC(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = sf(o.relations);
  for (const s of i)
    if (await No(
      O,
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
async function Mv(e) {
  const t = await ne(e), n = [
    .../* @__PURE__ */ new Set([
      ...Qd,
      ...wt(t.relations, /asset/i)
    ])
  ].filter((i) => rt(t.relations, i)), r = await Oi(
    O,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => bo(r.ids[s], i)).filter((i) => i != null);
}
function UC(e) {
  var o;
  if (!e || typeof e != "object")
    return [];
  const t = e, n = [t.items, t.content, t.children, t.results], r = [];
  for (const i of n)
    if (Array.isArray(i))
      for (const s of i) {
        if (typeof s == "number" && Number.isFinite(s)) {
          r.push(s);
          continue;
        }
        if (!s || typeof s != "object")
          continue;
        const a = s, l = (o = a.systemProperties) == null ? void 0 : o.id, u = a.id ?? a.entityId ?? l;
        typeof u == "number" && Number.isFinite(u) && r.push(u);
      }
  return r.length > 0 ? [...new Set(r)] : [...new Set(ul(e))];
}
async function jC(e) {
  var r;
  if (!((r = O == null ? void 0 : O.raw) != null && r.getAsync))
    return [];
  const t = (e == null ? void 0 : e.trim()) || "*", n = [
    `/api/entities/search?query=${encodeURIComponent(t)}&definitionNames=M.Asset&take=48`,
    `/api/entities/search?fullText=${encodeURIComponent(t)}&definitionNames=M.Asset&take=48`
  ];
  for (const o of n)
    try {
      const i = await O.raw.getAsync(o);
      if (!i.isSuccessStatusCode || i.content == null)
        continue;
      const s = UC(i.content).slice(0, 48);
      if (s.length === 0)
        continue;
      const l = (await fn(s)).map((u, c) => bo(s[c], u)).filter((u) => u != null);
      if (l.length > 0)
        return Z("asset search", `Found ${l.length} Content Hub asset(s) via search`), l;
    } catch {
    }
  return [];
}
async function Xm(e) {
  var r, o;
  const t = (r = e == null ? void 0 : e.collectionId) == null ? void 0 : r.trim(), n = e == null ? void 0 : e.query;
  if ((o = O == null ? void 0 : O.raw) != null && o.getAsync)
    try {
      if (t) {
        const i = Lm(await Mv(t), n);
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
        const i = Lm(await jC(n), n);
        if (i.length > 0)
          return i;
      }
    } catch (i) {
      Ue("asset search", i, "Falling back to proxy or demo assets.");
    }
  if (t)
    try {
      const i = await _c(
        `/assets/search?collectionId=${t}${n ? `&q=${encodeURIComponent(n)}` : ""}`
      );
      if (i.length > 0)
        return i;
    } catch (i) {
      Jn("asset search", i);
    }
  return Jn("asset search", "Using demo asset results"), OA(n);
}
async function BC(e) {
  var r;
  const t = [
    ...new Set(
      e.map((o) => Number(o)).filter((o) => Number.isFinite(o) && o > 0)
    )
  ];
  return t.length === 0 || !((r = O == null ? void 0 : O.raw) != null && r.getAsync) ? [] : (await fn(t)).map((o, i) => bo(t[i], o)).filter((o) => o != null);
}
async function KC(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = [
    .../* @__PURE__ */ new Set([
      ...Qd,
      ...wt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const a of i)
    if (await Jt(
      O,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "asset collection",
        `Linked asset ${r} to collection ${n} via ${a}`
      ), !0;
  if ((s = O == null ? void 0 : O.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await O.raw.postAsync(
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
async function ZC(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = [
    .../* @__PURE__ */ new Set([
      ...Qd,
      ...wt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const s of i)
    if (await No(
      O,
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
async function Iv(e, t) {
  return Xi(e, t, "marketing asset properties", "EPAM.MarketingAsset");
}
const Dv = ["EPAM.MarketingAssetZoneValue", "MarketingAssetZoneValue"];
function VC(e) {
  if (e == null || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.error;
  return typeof n == "string" ? n.trim() : "";
}
function WC(e) {
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
async function Hv(e, t) {
  const n = await Ac(O, Dv[0]);
  await yn(
    e,
    $A(t),
    "zone value title"
  );
  const r = gv(t);
  if (Object.keys(r).length > 0) {
    const o = IA(t, n);
    if (Object.keys(o).length > 0) {
      if (!await yn(e, o, "zone value content")) {
        const s = {};
        for (const [a, l] of Object.entries(o))
          l != null && typeof l == "object" && !Array.isArray(l) && typeof l.Invariant == "string" ? s[a] = l.Invariant : s[a] = l;
        await yn(e, s, "zone value content plain");
      }
    } else
      ae(
        "zone value content",
        `No matching content properties on EPAM.MarketingAssetZoneValue for zone ${t.zoneKey} (definition has: ${n.map((i) => i.name).join(", ") || "(none)"}). Text/html will persist via zoneLayoutJson fallback.`
      );
  }
  await IC(e, t);
}
async function YC(e) {
  var i;
  if (!((i = O == null ? void 0 : O.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating zone values.");
  const t = [
    { Title: { Invariant: e.zoneKey } },
    { Title: e.zoneKey },
    {}
  ];
  let n = null, r = "unknown", o = "";
  for (const s of Dv) {
    for (const a of t) {
      const l = await O.raw.postAsync("/api/entities", {
        entitydefinition: {
          href: `/api/entitydefinitions/${s}`
        },
        properties: a
      }), u = WC(l.content);
      if (l.isSuccessStatusCode && u) {
        n = u, Z(
          "zone value create",
          `Created ${s} ${u} for ${e.zoneKey} with keys: ${Object.keys(a).join(", ") || "(none)"}`
        );
        break;
      }
      r = String(l.statusCode ?? "unknown"), o = VC(l.content), ae(
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
    await Hv(n, e);
  } catch (s) {
    ae(
      "zone value create",
      `Zone value ${n} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return n;
}
async function GC(e) {
  if (!e.id)
    throw new Error(`Zone value for ${e.zoneKey} has no entity id.`);
  try {
    await Hv(e.id, e), Z("zone value", `Updated EPAM.MarketingAssetZoneValue ${e.id} (${e.zoneKey})`);
  } catch (t) {
    throw new Error(
      `Failed to update zone value ${e.id} (${e.zoneKey}). Grant Update on EPAM.MarketingAssetZoneValue. ${t instanceof Error ? t.message : String(t)}`
    );
  }
}
async function XC(e, t, n) {
  var o;
  const r = [
    ...wt(n, /zonevalue/i),
    "marketingAssetToZoneValue",
    "MarketingAssetToZoneValue",
    "EPAM.MarketingAssetToZoneValue"
  ];
  for (const i of [...new Set(r)])
    if (await Jt(
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
async function JC(e, t) {
  var a;
  const n = await ne(e), r = [...new Set(Cv(n))], o = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const l = await fn(r);
    for (let u = 0; u < r.length; u += 1) {
      const c = kv(r[u], l[u]);
      o.has(c.zoneKey) || o.set(c.zoneKey, c);
    }
  }
  const i = [], s = /* @__PURE__ */ new Set();
  for (const l of t) {
    if (!((a = l.zoneKey) != null && a.trim()) || s.has(l.zoneKey))
      continue;
    if (!DA(l)) {
      ae("zone value save", `Skipped empty zone value for ${l.zoneKey}`);
      continue;
    }
    s.add(l.zoneKey);
    const u = l.id ? l : o.get(l.zoneKey), c = u != null && u.id ? { ...l, id: u.id } : { ...l, id: void 0 };
    if (c.id) {
      await GC(c), i.push(c);
      continue;
    }
    const f = await YC(c), p = { ...c, id: f };
    await XC(e, f, n.relations), i.push(p);
  }
  return Z("zone values", `Saved ${i.length} EPAM.MarketingAssetZoneValue record(s)`), i;
}
async function QC(e) {
  const t = HA(e);
  if (Object.keys(t).length === 0)
    return e;
  if (!await Iv(e.id, t))
    throw new Error(
      `Could not save marketing asset ${e.id}. Grant Update on EPAM.MarketingAsset and ensure properties such as zoneLayoutJson exist on the definition.`
    );
  return Z("marketing asset properties", `Saved properties on marketing asset ${e.id}`), e;
}
const qC = "designerDocumentJson", eN = "designerInstanceJson", Ns = "EPAM.BuilderTemplate", bs = "EPAM.BuilderMarketingAsset";
function Fv(e) {
  return (e == null ? void 0 : e.trim()) || qC;
}
function Uv(e) {
  return (e == null ? void 0 : e.trim()) || eN;
}
async function tN(e, t) {
  const r = (await ne(e)).properties ?? {}, o = Fv(t), i = [`EPAM.${o}`, o, o.replace(/^./, (s) => s.toUpperCase())];
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
async function nN(e, t, n) {
  const r = Fv(n), o = { [r]: t };
  try {
    if (!await Xi(
      e,
      o,
      "builder template designer document",
      Ns
    ))
      throw new Error(
        `Could not save designer document on ${Ns} ${e}. Ensure property "${r}" exists and your role can Update it.`
      );
  } catch (i) {
    throw i instanceof Error && i.message.includes("Could not save designer document") ? i : new Error(
      `Could not save designer document on ${Ns} ${e}. Ensure property "${r}" exists and your role can Update it. ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return Z(
    "builder template designer document",
    `Saved ${r} on ${Ns} ${e}`
  ), !0;
}
async function rN(e, t) {
  const r = (await ne(e)).properties ?? {}, o = Uv(t), i = [`EPAM.${o}`, o, o.replace(/^./, (s) => s.toUpperCase())];
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
async function oN(e, t, n) {
  const r = Uv(n), o = { [r]: t };
  try {
    if (!await Xi(
      e,
      o,
      "builder marketing asset designer instance",
      bs
    ))
      throw new Error(
        `Could not save designer instance on ${bs} ${e}. Ensure property "${r}" exists and your role can Update it.`
      );
  } catch (i) {
    throw i instanceof Error && i.message.includes("Could not save designer instance") ? i : new Error(
      `Could not save designer instance on ${bs} ${e}. Ensure property "${r}" exists and your role can Update it. ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return Z(
    "builder marketing asset designer instance",
    `Saved ${r} on ${bs} ${e}`
  ), !0;
}
const ie = {
  getTemplate: Tl,
  listTemplatesForBrandKit: zv,
  duplicateTemplate: TC,
  createTemplate: SC,
  linkMarketingAssetToTemplate: kC,
  listTemplates: async (e) => {
    try {
      return await _c(`/entities/EPAM.Template${e ? `?channelType=${e}` : ""}`);
    } catch (t) {
      return Jn("template list", t), [PA(Vm)];
    }
  },
  saveTemplate: cf,
  getBrandKit: CC,
  getMarketingAsset: AC,
  createMarketingAsset: async (e) => {
    try {
      return await _c("/entities/EPAM.MarketingAsset", {
        method: "POST",
        body: JSON.stringify(e)
      });
    } catch (t) {
      return Jn("marketing asset create", t), _A("dummy-asset", e.templateId || Vm);
    }
  },
  updateMarketingAsset: QC,
  saveMarketingAssetZoneValues: JC,
  updateMarketingAssetProperties: Iv,
  getTemplateDesignerDocument: tN,
  saveTemplateDesignerDocument: nN,
  getMarketingAssetDesignerInstance: rN,
  saveMarketingAssetDesignerInstance: oN,
  uploadRenderedOutput: async (e, t, n) => {
    if (!uf())
      return ae(
        "rendered output upload",
        `Skipped upload for ${n} — no asset upload proxy is configured on this Content Hub instance.`
      ), { skipped: !0, fileName: n, assetId: e };
    try {
      const r = new FormData();
      r.append("file", t, n), r.append("linkToEntity", "EPAM.MarketingAsset"), r.append("linkToEntityId", e), r.append("relationName", "marketingAssetToRenderedOutput");
      const o = await fetch(`${wl}/assets/upload`, {
        method: "POST",
        body: r
      });
      if (!o.ok)
        throw new Error(`Asset upload failed (${o.status})`);
      return o.json();
    } catch (r) {
      return Jn("rendered output upload", r), { skipped: !0, fileName: n, assetId: e };
    }
  },
  searchAssets: Xm,
  searchAssetsInCollection: async (e, t) => Xm({ collectionId: e, query: t }),
  getCollectionAssets: Mv,
  getZoneAllowedAssets: DC,
  getTemplateAllowedAssets: Ov,
  getAssetsByIds: BC,
  addAssetToCollection: KC,
  removeAssetFromCollection: ZC,
  addAllowedAssetToTemplate: Rv,
  removeAllowedAssetFromTemplate: RC,
  addAllowedAssetToZone: HC,
  removeAllowedAssetFromZone: FC
}, jv = E.createContext(null);
function iN({
  brandKitId: e,
  children: t
}) {
  const [n, r] = E.useState(null);
  return E.useEffect(() => {
    let o = !1;
    return ie.getBrandKit(e || er).then((i) => {
      o || r(i);
    }).catch(() => {
      o || r(fr(e || er));
    }), () => {
      o = !0;
    };
  }, [e]), n ? /* @__PURE__ */ d(jv.Provider, { value: n, children: t }) : /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading brand kit..." });
}
function Ji() {
  const e = E.useContext(jv);
  if (!e)
    throw new Error("useBrandKit must be used within a BrandKitProvider");
  return e;
}
function df(e) {
  var n;
  return (n = Ji().colors.find((r) => r.colorUsageType === e)) == null ? void 0 : n.hexValue;
}
function Sa(e) {
  var n;
  return (n = Ji().fonts.find((r) => r.fontUsageType === e)) == null ? void 0 : n.fontFamily;
}
const Bv = E.createContext({});
function sN({
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
  return /* @__PURE__ */ d(Bv.Provider, { value: n, children: t });
}
function ff() {
  return E.useContext(Bv);
}
function Kv() {
  const { searchIdentifier: e, search: t } = ff(), [n, r] = E.useState([]), [o, i] = E.useState("");
  return E.useEffect(() => {
    if (!e || !(t != null && t.getEventSearchIdentifier)) {
      r([]), i("");
      return;
    }
    const s = t.getEventSearchIdentifier(e), a = (l) => {
      const u = l.detail;
      !u || u.searchIdentifier !== s || (r(Array.isArray(u.ids) ? u.ids : []), i(u.fullText ?? ""));
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
async function aN(e, t, n, r) {
  var a;
  const o = jk(t, n, r);
  if (o.templateId)
    return Z("templateId", `Resolved ${o.templateId} from config or entity relations`), o;
  const i = e, s = o.marketingAssetId;
  if (!((a = i == null ? void 0 : i.raw) != null && a.getAsync) || !s)
    return Un(
      "templateId",
      "No templateId in config and marketingAssetToTemplate could not be read from context.entity",
      "Set templateId in External component Configuration or link a template to this marketing asset."
    ), o;
  try {
    for (const l of Dk) {
      const u = await i.raw.getAsync(
        `/api/entities/${s}/relations/${l}`
      );
      if (!u.isSuccessStatusCode || !u.content)
        continue;
      const c = ul(u.content);
      if (c.length > 0)
        return Z("templateId", `Resolved ${c[0]} from ${l} relation API`), { ...o, templateId: String(c[0]) };
    }
  } catch (l) {
    Un("templateId", l, "Failed to resolve marketingAssetToTemplate via Content Hub API.");
  }
  return Un(
    "templateId",
    "No templateId in config and no marketingAssetToTemplate relation on this asset",
    "Set templateId in External component Configuration or link a template to this marketing asset."
  ), o;
}
function Dr(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return e;
  if (typeof e == "string" && e.trim()) {
    const t = Number(e);
    if (Number.isFinite(t))
      return t;
  }
}
function Oc(e) {
  const t = e.positionX, n = e.positionY;
  if (!((t === 0 || t === void 0) && (n === 0 || n === void 0) && (t === 0 || n === 0)))
    return e;
  const o = { ...e };
  return delete o.positionX, delete o.positionY, o;
}
function ka(e) {
  return Oc(e);
}
function Di(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return;
  const t = e, n = {}, r = Dr(t.positionX), o = Dr(t.positionY), i = Dr(t.zoneWidth), s = Dr(t.zoneHeight), a = Dr(t.offsetPx), l = Dr(t.sortOrder);
  return r !== void 0 && (n.positionX = r), o !== void 0 && (n.positionY = o), i !== void 0 && (n.zoneWidth = i), s !== void 0 && (n.zoneHeight = s), a !== void 0 && (n.offsetPx = a), l !== void 0 && (n.sortOrder = l), typeof t.contentAlignment == "string" && (n.contentAlignment = mv(t.contentAlignment)), typeof t.offsetDirection == "string" && (n.offsetDirection = hv(t.offsetDirection)), Object.keys(n).length > 0 ? ka(n) : void 0;
}
function Jm(e) {
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
        const s = Di(o);
        s && (n[i] = s);
      }
      return n;
    }
    if (typeof t == "object") {
      const n = {};
      for (const [r, o] of Object.entries(t)) {
        const i = Di(o);
        i && (n[r] = i);
      }
      return n;
    }
  } catch {
    return {};
  }
  return {};
}
function lN(e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (!n.trim() || r == null)
      continue;
    const o = Di(r);
    o && (t[n] = o);
  }
  return JSON.stringify(t, null, 2);
}
function Rc(e) {
  const t = {};
  return typeof e.textValue == "string" && (t.textValue = e.textValue), typeof e.colorValue == "string" && (t.colorValue = e.colorValue), typeof e.htmlValue == "string" && (t.htmlValue = e.htmlValue), typeof e.linkUrl == "string" && (t.linkUrl = e.linkUrl), typeof e.imageAssetId == "string" && (t.imageAssetId = e.imageAssetId), typeof e.imageAssetUrl == "string" && (t.imageAssetUrl = e.imageAssetUrl), Object.keys(t).length > 0 ? t : void 0;
}
function Zv(e, t) {
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    if (!o.trim() || i == null)
      continue;
    const s = Di(i);
    s && (n[o] = s);
  }
  const r = {};
  for (const [o, i] of Object.entries(t)) {
    if (!o.trim() || !i)
      continue;
    const s = Rc(i);
    s && (r[o] = { zoneKey: o, ...s });
  }
  return Object.keys(r).length === 0 ? JSON.stringify(n, null, 2) : JSON.stringify({ layouts: n, values: r }, null, 2);
}
function Ea(e) {
  if (!(e != null && e.trim()))
    return { layouts: {}, values: {} };
  try {
    const t = JSON.parse(e);
    if (t == null || typeof t != "object" || Array.isArray(t))
      return { layouts: Jm(e), values: {} };
    const n = t;
    if (n.layouts != null && typeof n.layouts == "object" && !Array.isArray(n.layouts)) {
      const i = Jm(JSON.stringify(n.layouts)), s = {};
      if (n.values != null && typeof n.values == "object" && !Array.isArray(n.values))
        for (const [a, l] of Object.entries(n.values)) {
          if (!a.trim() || l == null || typeof l != "object")
            continue;
          const u = Rc(l);
          u && (s[a] = { zoneKey: a, ...u });
        }
      return { layouts: i, values: s };
    }
    const r = {}, o = {};
    for (const [i, s] of Object.entries(n)) {
      if (!i.trim() || s == null || typeof s != "object")
        continue;
      const a = s, l = Di(a);
      l && (r[i] = l);
      const u = Rc(a);
      u && (o[i] = { zoneKey: i, ...u });
    }
    return { layouts: r, values: o };
  } catch {
    return { layouts: {}, values: {} };
  }
}
function Aa(e, t, n) {
  var o, i, s, a, l, u;
  const r = Hi(e, t);
  for (const c of e.zones) {
    const f = Pr(c, e.zones), p = n[f] ?? n[c.zoneKey];
    if (!p)
      continue;
    const v = r[c.id];
    r[c.id] = {
      zoneKey: f,
      id: v == null ? void 0 : v.id,
      textValue: (o = v == null ? void 0 : v.textValue) != null && o.trim() ? v.textValue : p.textValue,
      colorValue: (i = v == null ? void 0 : v.colorValue) != null && i.trim() ? v.colorValue : p.colorValue,
      htmlValue: (s = v == null ? void 0 : v.htmlValue) != null && s.trim() ? v.htmlValue : p.htmlValue,
      linkUrl: (a = v == null ? void 0 : v.linkUrl) != null && a.trim() ? v.linkUrl : p.linkUrl,
      imageAssetId: (l = v == null ? void 0 : v.imageAssetId) != null && l.trim() ? v.imageAssetId : p.imageAssetId,
      imageAssetUrl: (u = v == null ? void 0 : v.imageAssetUrl) != null && u.trim() ? v.imageAssetUrl : p.imageAssetUrl
    };
  }
  return Object.values(r);
}
function Vv(e, t) {
  return Oc(t ? {
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
function So(e, t) {
  return t.filter((r) => r.zoneKey === e.zoneKey).length > 1 ? `${e.zoneKey}__${e.id}` : e.zoneKey;
}
function Pr(e, t) {
  return So(e, t);
}
function Hi(e, t) {
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
    const s = Pr(i, e.zones), a = n.get(s) ?? n.get(i.zoneKey), l = a == null ? void 0 : a.shift();
    l && (r[i.id] = { ...l, zoneKey: s });
  }
  return r;
}
function Wv(e, t) {
  return {
    ...e,
    zones: [...e.zones].map((n) => {
      const r = So(n, e.zones), o = r === n.zoneKey ? t[n.zoneKey] : t[r];
      return Vv(n, o);
    }).sort((n, r) => n.sortOrder - r.sortOrder || n.id.localeCompare(r.id))
  };
}
function uN(e) {
  return ka({
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
function cN(e) {
  const t = {};
  for (const n of e.zones) {
    const r = So(n, e.zones);
    t[r] = uN(n);
  }
  return t;
}
function Yv(e, t) {
  const n = cN(e);
  for (const r of e.zones) {
    const o = So(r, e.zones), i = o === r.zoneKey ? t[r.zoneKey] : t[o];
    i ? n[o] = ka({ ...n[o], ...i }) : n[o] = ka(n[o] ?? {});
  }
  return n;
}
function dN({
  layout: e,
  onChange: t,
  showPosition: n = !1,
  compact: r = !1
}) {
  return /* @__PURE__ */ C("div", { className: `asset-zone-layout-fields${r ? " asset-zone-layout-fields-compact" : ""}`, children: [
    /* @__PURE__ */ C("div", { className: "asset-zone-layout-grid", children: [
      /* @__PURE__ */ C("label", { children: [
        "Alignment",
        /* @__PURE__ */ d(
          "select",
          {
            value: e.contentAlignment ?? xr,
            onChange: (o) => t({ contentAlignment: o.target.value }),
            children: fv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { children: [
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
      /* @__PURE__ */ C("label", { children: [
        "Direction",
        /* @__PURE__ */ d(
          "select",
          {
            value: e.offsetDirection ?? yl,
            onChange: (o) => t({ offsetDirection: o.target.value }),
            children: pv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { children: [
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
    n && /* @__PURE__ */ C("div", { className: "asset-zone-layout-grid asset-zone-layout-grid-position", children: [
      /* @__PURE__ */ C("label", { children: [
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
      /* @__PURE__ */ C("label", { children: [
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
      /* @__PURE__ */ C("label", { children: [
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
      /* @__PURE__ */ C("label", { children: [
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
function fN(...e) {
  const t = /* @__PURE__ */ new Set(), n = [];
  for (const r of e)
    for (const o of r) {
      const i = o.id || o.previewUrl || o.thumbnailUrl;
      !i || t.has(i) || (t.add(i), n.push(o));
    }
  return n;
}
function pN({
  zoneKey: e,
  zone: t,
  templateId: n,
  selectedAssetId: r,
  selectedUrl: o,
  onChange: i,
  compact: s = !1
}) {
  const { searchIdentifier: a } = ff(), { resultIds: l, hasSearchIntegration: u } = Kv(), [c, f] = E.useState([]), [p, v] = E.useState([]), [k, T] = E.useState([]), [L, y] = E.useState(!1), [m, h] = E.useState(null), [b, A] = E.useState(!1), [N, S] = E.useState("");
  E.useEffect(() => {
    if (!(n != null && n.trim()) || n.startsWith("temp-")) {
      f([]);
      return;
    }
    let H = !1;
    return y(!0), h(null), ie.getTemplateAllowedAssets(n).then((G) => {
      H || f(G);
    }).catch((G) => {
      H || (f([]), h(G instanceof Error ? G.message : "Could not load template images."));
    }).finally(() => {
      H || y(!1);
    }), () => {
      H = !0;
    };
  }, [n]), E.useEffect(() => {
    const H = (t == null ? void 0 : t.allowedAssetIds) ?? [];
    if (H.length === 0) {
      v([]);
      return;
    }
    let G = !1;
    return ie.getAssetsByIds(H).then((ze) => {
      G || v(ze);
    }).catch(() => {
      G || v([]);
    }), () => {
      G = !0;
    };
  }, [t == null ? void 0 : t.allowedAssetIds]), E.useEffect(() => {
    if (l.length === 0) {
      T([]);
      return;
    }
    let H = !1;
    return ie.getAssetsByIds(l).then((G) => {
      H || T(G);
    }).catch(() => {
      H || T([]);
    }), () => {
      H = !0;
    };
  }, [l]);
  const z = E.useMemo(
    () => fN(p, c),
    [c, p]
  ), j = E.useMemo(() => z.length > 0 ? z : k, [z, k]), _ = z.length > 0, D = () => {
    const H = N.trim();
    H && (i(e, { imageAssetUrl: H }), A(!1), S(""));
  };
  return !(n != null && n.trim()) || n.startsWith("temp-") ? /* @__PURE__ */ d("p", { className: "image-picker-hint", children: "Template image library is not available yet. Save the template and link assets in template setup." }) : /* @__PURE__ */ C("div", { className: `image-picker${s ? " image-picker-compact" : ""}`, children: [
    _ ? /* @__PURE__ */ C("p", { className: "image-picker-hint", children: [
      "Choose an image from the template library",
      p.length > 0 ? " (zone + template)" : "",
      "."
    ] }) : u ? /* @__PURE__ */ C("p", { className: "image-picker-hint", children: [
      "Run a Content Hub search on this page, then pick an image below.",
      a ? ` (search: ${a})` : ""
    ] }) : /* @__PURE__ */ C("p", { className: "image-picker-hint", children: [
      "Link images on the template in ",
      /* @__PURE__ */ d("strong", { children: "Edit template" }),
      ", or add ",
      /* @__PURE__ */ d("code", { children: "searchIdentifier" }),
      " to this page's external component configuration to pick assets from search."
    ] }),
    L && /* @__PURE__ */ d("div", { className: "image-picker-loading", children: "Loading template images..." }),
    m && /* @__PURE__ */ d("div", { className: "image-picker-error", children: m }),
    o && /* @__PURE__ */ d("div", { className: "image-picker-selected-preview", children: /* @__PURE__ */ d("img", { src: o, alt: "", className: "image-picker-selected-image" }) }),
    /* @__PURE__ */ d("div", { className: "image-picker-grid", role: "radiogroup", "aria-label": "Choose image", children: j.map((H) => {
      const G = r && H.id === r || !r && o && H.previewUrl === o || !r && o && H.thumbnailUrl === o;
      return /* @__PURE__ */ C(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": !!G,
          className: `image-picker-option${G ? " image-picker-option-selected" : ""}`,
          onClick: () => i(e, {
            id: H.id || void 0,
            imageAssetUrl: H.previewUrl ?? H.thumbnailUrl
          }),
          children: [
            /* @__PURE__ */ d("span", { className: "image-picker-preview", children: /* @__PURE__ */ d("img", { src: H.thumbnailUrl, alt: "", className: "image-picker-image" }) }),
            /* @__PURE__ */ d("span", { className: "image-picker-label", children: H.name })
          ]
        },
        H.id || H.thumbnailUrl
      );
    }) }),
    !L && j.length === 0 && !m && /* @__PURE__ */ C("p", { className: "image-picker-hint", children: [
      "No images available yet. In ",
      /* @__PURE__ */ d("strong", { children: "Edit template" }),
      ', use "Template image library" to link assets from Content Hub search.'
    ] }),
    /* @__PURE__ */ d("div", { className: "image-picker-footer", children: /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "image-picker-url-toggle",
        onClick: () => A((H) => !H),
        children: b ? "Hide image URL" : "Use image URL instead"
      }
    ) }),
    b && /* @__PURE__ */ C("div", { className: "image-picker-url-form", children: [
      /* @__PURE__ */ d(
        "input",
        {
          className: "image-picker-url-input",
          placeholder: "https://...",
          value: N,
          onChange: (H) => S(H.target.value)
        }
      ),
      /* @__PURE__ */ d("button", { type: "button", className: "image-picker-url-apply", onClick: D, disabled: !N.trim(), children: "Use image URL" })
    ] })
  ] });
}
function Gv({
  zone: e,
  templateId: t,
  value: n,
  onChange: r,
  adminMode: o = !1,
  hideLogoPicker: i = !1,
  layoutMode: s = "canvas"
}) {
  const a = Ji(), l = o || !e.isLocked, u = e.positionX !== void 0 || e.positionY !== void 0, c = s === "stacked" ? { position: "relative", width: "100%" } : u ? {
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
  }, f = SA(e, c, s), p = kA(e), v = s === "stacked" ? " zone-stacked" : "";
  if (fl(e))
    return /* @__PURE__ */ d(
      mN,
      {
        style: f,
        layoutClass: p,
        stackedClass: v,
        zone: e,
        brandKit: a
      }
    );
  if (e.isLocked && !o)
    return /* @__PURE__ */ d("div", { style: f, className: `zone zone-locked${v} ${p}`, "data-zone-key": e.zoneKey, children: /* @__PURE__ */ d(hN, { zone: e, brandKit: a, layoutMode: s }) });
  switch (e.zoneType) {
    case "Text":
      return /* @__PURE__ */ d(
        vN,
        {
          style: f,
          layoutClass: p,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: s
        }
      );
    case "Heading":
      return /* @__PURE__ */ d(
        yN,
        {
          style: f,
          layoutClass: p,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: s
        }
      );
    case "Image":
      return /* @__PURE__ */ d(
        gN,
        {
          style: f,
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
        wN,
        {
          style: f,
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
          style: { ...f, backgroundColor: (n == null ? void 0 : n.colorValue) ?? "#ffffff" },
          className: `zone zone-background ${p}`,
          "data-zone-key": e.zoneKey
        }
      );
    case "Divider":
      return /* @__PURE__ */ d(
        "hr",
        {
          style: f,
          className: `zone zone-divider${v} ${p}`,
          "data-zone-key": e.zoneKey
        }
      );
    case "HTML":
      return /* @__PURE__ */ d(TN, { style: f, layoutClass: p, zone: e, value: n, onChange: r });
    default:
      return null;
  }
}
function mN({
  style: e,
  layoutClass: t,
  stackedClass: n,
  zone: r,
  brandKit: o
}) {
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-logo${n} ${t}`, "data-zone-key": r.zoneKey, children: /* @__PURE__ */ d("span", { className: "zone-logo-placeholder", "aria-label": `${o.brandKitName} logo`, children: "Logo" }) });
}
function hN({
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
    const o = Ii(e.htmlDefaultContent);
    return o ? /* @__PURE__ */ d("div", { dangerouslySetInnerHTML: { __html: o } }) : null;
  }
  return e.zoneType === "Image" ? /* @__PURE__ */ d("div", { className: "zone-image-placeholder zone-image-placeholder-locked", children: "Image zone — unlock in template setup to change the image here." }) : null;
}
function gN({
  style: e,
  layoutClass: t,
  stackedClass: n,
  zone: r,
  templateId: o,
  value: i,
  onChange: s,
  adminMode: a,
  hideImagePicker: l = !1,
  layoutMode: u = "canvas"
}) {
  const c = !a && !l;
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-image${n} ${t}`, "data-zone-key": r.zoneKey, children: c ? /* @__PURE__ */ d(
    pN,
    {
      zoneKey: r.zoneKey,
      zone: r,
      templateId: o,
      selectedAssetId: i == null ? void 0 : i.imageAssetId,
      selectedUrl: i == null ? void 0 : i.imageAssetUrl,
      compact: n.includes("stacked"),
      onChange: (f, p) => s(f, {
        zoneKey: f,
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
      style: u === "canvas" || r.zoneHeight != null || r.zoneWidth != null ? { width: "100%", height: "100%", maxHeight: "none", objectFit: "contain" } : void 0
    }
  ) : /* @__PURE__ */ d("div", { className: "zone-image-placeholder", children: r.zoneLabel }) });
}
function yN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = Sa("Heading"), a = df("Secondary"), l = n.headingLevel ?? Nn;
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        ...e,
        fontFamily: s,
        fontSize: TA[l],
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
      onBlur: (u) => {
        const c = u.currentTarget.innerText;
        if (n.maxCharacterCount && c.length > n.maxCharacterCount) {
          u.currentTarget.innerText = (r == null ? void 0 : r.textValue) ?? "";
          return;
        }
        o(n.zoneKey, { zoneKey: n.zoneKey, textValue: c });
      },
      children: (r == null ? void 0 : r.textValue) ?? ""
    }
  );
}
function vN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = Sa("Heading"), a = Sa("Body"), l = df("Secondary"), u = (n.zoneLabel ?? "").toLowerCase().includes("headline") ? s : a;
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        ...e,
        fontFamily: u,
        fontSize: i === "stacked" ? void 0 : "16px",
        lineHeight: 1.5,
        color: l
      },
      className: `zone zone-text${i === "stacked" ? " zone-stacked" : ""} ${t}${r != null && r.textValue ? "" : " zone-text-empty"}`,
      "data-zone-key": n.zoneKey,
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
function wN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = df("Accent"), a = Sa("CTA");
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
function TN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o
}) {
  return n.htmlAllowUserOverride ? /* @__PURE__ */ C("div", { style: e, className: `zone zone-html ${t}`, children: [
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
        dangerouslySetInnerHTML: { __html: Ii((r == null ? void 0 : r.htmlValue) ?? n.htmlDefaultContent) }
      }
    )
  ] }) : /* @__PURE__ */ d(
    "div",
    {
      style: e,
      className: `zone zone-html zone-html-locked ${t}`,
      "data-zone-key": n.zoneKey,
      dangerouslySetInnerHTML: { __html: Ii(n.htmlDefaultContent) }
    }
  );
}
function Xv({
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
  }, [e.zones]), u = E.useMemo(
    () => [...e.zones].map((v) => {
      const k = So(v, e.zones), T = k === v.zoneKey ? t[v.zoneKey] : t[k];
      return Vv(v, T);
    }).sort((v, k) => v.sortOrder - k.sortOrder || v.id.localeCompare(k.id)),
    [e.zones, t]
  ), c = E.useMemo(() => lN(t), [t]), f = (v) => {
    const k = s === v.id, T = So(v, e.zones), L = e.zones.find((m) => m.id === v.id) ?? v, y = Pr(L, e.zones);
    return /* @__PURE__ */ C("div", { className: "asset-zone-structure-row", children: [
      /* @__PURE__ */ C(
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
      k && /* @__PURE__ */ d("div", { className: "asset-zone-structure-body", children: /* @__PURE__ */ C("div", { className: "asset-zone-structure-content", children: [
        /* @__PURE__ */ d("p", { className: "asset-zone-structure-content-label", children: "Content" }),
        l && /* @__PURE__ */ C("p", { className: "asset-zone-structure-key-hint", children: [
          "Zone key: ",
          /* @__PURE__ */ d("code", { children: y })
        ] }),
        /* @__PURE__ */ d(
          Gv,
          {
            zone: { ...L, zoneKey: y },
            templateId: e.id,
            value: n[L.id],
            onChange: (m, h) => i(L.id, { ...h, zoneKey: y }),
            layoutMode: "stacked"
          }
        ),
        /* @__PURE__ */ d(
          dN,
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
  return /* @__PURE__ */ C("div", { className: "asset-structure-panel", children: [
    /* @__PURE__ */ d("p", { className: "asset-structure-panel-hint", children: "Expand a zone to edit position, alignment, and content. Layout is saved as JSON on this marketing asset." }),
    l && /* @__PURE__ */ d("p", { className: "asset-zone-structure-warning", children: "Some zones share the same zone key. Edit each zone's key in Template setup so content stays independent after save." }),
    /* @__PURE__ */ d("div", { className: "asset-zone-structure-list", children: u.map(f) }),
    /* @__PURE__ */ C("details", { className: "asset-layout-json-preview", children: [
      /* @__PURE__ */ d("summary", { children: "Layout JSON (saved on marketing asset)" }),
      /* @__PURE__ */ d("pre", { children: c })
    ] })
  ] });
}
function Ca({
  structure: e,
  preview: t,
  structureTitle: n = "Structure",
  previewTitle: r = "Preview"
}) {
  return /* @__PURE__ */ C("div", { className: "builder-split", children: [
    /* @__PURE__ */ C("section", { className: "builder-split-panel builder-split-structure", "aria-label": n, children: [
      /* @__PURE__ */ d("h3", { className: "builder-split-heading", children: n }),
      /* @__PURE__ */ d("div", { className: "builder-split-structure-body", children: e })
    ] }),
    /* @__PURE__ */ C("section", { className: "builder-split-panel builder-split-preview", "aria-label": r, children: [
      /* @__PURE__ */ d("h3", { className: "builder-split-heading", children: r }),
      /* @__PURE__ */ d("div", { className: "builder-split-preview-body", children: t })
    ] })
  ] });
}
function SN(e) {
  var n;
  const t = {};
  for (const r of e.zones) {
    const i = { zoneKey: Pr(r, e.zones) };
    if (fl(r)) {
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
function kN(e, t) {
  var o, i, s, a, l, u, c, f;
  const n = SN(e), r = { ...n };
  for (const p of e.zones) {
    const v = Pr(p, e.zones), k = t[p.id] ?? t[v] ?? t[p.zoneKey];
    if (k) {
      if (fl(p)) {
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
        htmlValue: (l = k.htmlValue) != null && l.trim() ? k.htmlValue : (u = n[p.id]) == null ? void 0 : u.htmlValue,
        imageAssetUrl: (c = k.imageAssetUrl) != null && c.trim() ? k.imageAssetUrl : (f = n[p.id]) == null ? void 0 : f.imageAssetUrl
      };
    }
  }
  return r;
}
const pf = E.forwardRef(function({ template: t, zoneValues: n = {}, layoutMode: r = "stacked" }, o) {
  const i = Ji(), s = E.useMemo(
    () => [...t.zones].sort((p, v) => p.sortOrder - v.sortOrder),
    [t.zones]
  ), a = E.useMemo(
    () => kN(t, n),
    [t, n]
  ), l = E.useMemo(
    () => zc(t, a, i),
    [i, a, t]
  ), u = iv(t), c = ef(t), f = av(t);
  return s.length === 0 ? /* @__PURE__ */ d("p", { className: "template-admin-preview-empty", children: "Add zones on the left to see a live preview here." }) : t.channelType === "Social" || r === "canvas" ? /* @__PURE__ */ C("div", { className: "live-preview-canvas-wrap", children: [
    /* @__PURE__ */ d("p", { className: "live-preview-dimensions-badge", "aria-label": "Template dimensions", children: u }),
    /* @__PURE__ */ d(
      "div",
      {
        ref: o,
        className: "live-preview-canvas social-builder-canvas social-builder-canvas-fill",
        style: {
          width: c,
          height: f,
          position: "relative",
          margin: "0 auto"
        },
        children: s.map((p) => /* @__PURE__ */ d(
          Gv,
          {
            zone: p,
            templateId: t.id,
            value: a[p.id] ?? a[p.zoneKey],
            onChange: () => {
            },
            layoutMode: "canvas",
            hideLogoPicker: !0,
            adminMode: !0
          },
          `${p.id}-${p.sortOrder}-${p.positionX}-${p.positionY}-${p.contentAlignment}-${p.offsetPx}`
        ))
      }
    )
  ] }) : /* @__PURE__ */ C("div", { className: "live-preview-email-wrap", children: [
    /* @__PURE__ */ d("p", { className: "live-preview-dimensions-badge", "aria-label": "Template dimensions", children: u }),
    /* @__PURE__ */ d(
      "iframe",
      {
        title: "Live preview",
        srcDoc: l,
        className: "email-builder-preview-frame email-builder-preview-frame-fill",
        style: { minHeight: f }
      },
      l
    )
  ] });
}), EN = [
  "Change spotted. Autosave is putting on its running shoes…",
  "Unsaved edits detected. Warming up the Content Hub handshake…",
  "Hold tight — your zones are about to get persisted…",
  "Debouncing brilliance before we commit…"
], AN = [
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
function CN(e) {
  return e === "pending" ? EN : AN;
}
function $c(e, t = "active", n = 2600) {
  const r = CN(t), [o, i] = E.useState(0);
  return E.useEffect(() => {
    if (!e) {
      i(0);
      return;
    }
    const s = () => {
      i((l) => {
        if (r.length <= 1)
          return 0;
        let u = l;
        for (; u === l; )
          u = Math.floor(Math.random() * r.length);
        return u;
      });
    }, a = window.setInterval(s, n);
    return () => window.clearInterval(a);
  }, [e, n, r.length]), r[o];
}
function xo({
  active: e,
  variant: t = "active",
  className: n
}) {
  const r = $c(e, t);
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
function Jv({ marketingAsset: e, userHasOverridePermission: t, onEject: n }) {
  const [r, o] = E.useState(!1), [i, s] = E.useState(""), [a, l] = E.useState(!1);
  return !t || e.isRawHtmlOverrideMA ? null : /* @__PURE__ */ C(at, { children: [
    /* @__PURE__ */ d("button", { type: "button", className: "eject-button", onClick: () => o(!0), children: "Eject to raw HTML" }),
    r && /* @__PURE__ */ d("div", { className: "eject-modal-backdrop", onClick: () => o(!1), children: /* @__PURE__ */ C("div", { className: "eject-modal", onClick: (u) => u.stopPropagation(), children: [
      /* @__PURE__ */ d("h3", { children: "This removes brand-lock protection for this asset" }),
      /* @__PURE__ */ d("p", { children: "Locked elements (logo, colours, fonts) can be edited freely once ejected. This applies to this asset only, not the template, and cannot be undone for this asset. A reason is required and will appear on the governance report." }),
      /* @__PURE__ */ d(
        "textarea",
        {
          placeholder: "Why does this asset need raw HTML?",
          value: i,
          onChange: (u) => s(u.target.value),
          autoFocus: !0
        }
      ),
      /* @__PURE__ */ C("div", { className: "eject-modal-actions", children: [
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
      /* @__PURE__ */ d(xo, { active: a, className: "eject-saving" })
    ] }) })
  ] });
}
async function NN(e, t, n) {
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
function bN({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  renderEmailApiUrl: r = "/api/render-email-html",
  onSaved: o
}) {
  const i = Ji(), [s, a] = E.useState(() => {
    const N = Ea(t.zoneLayoutJson), S = Aa(e, t.zoneValues, N.values);
    return Hi(e, S);
  }), [l, u] = E.useState(() => {
    const N = Ea(t.zoneLayoutJson);
    return Yv(e, N.layouts);
  }), [c, f] = E.useState(t.rawHtmlOverrideContent ?? ""), [p, v] = E.useState(!1), [k, T] = E.useState(null), L = E.useMemo(
    () => Wv(e, l),
    [e, l]
  ), y = E.useMemo(
    () => zc(L, s, i),
    [i, L, s]
  ), m = E.useMemo(
    () => Ii(c),
    [c]
  ), h = (N, S) => {
    a((z) => ({ ...z, [N]: S }));
  }, b = (N, S) => {
    u((z) => {
      const j = { ...z[N], ...S };
      for (const _ of Object.keys(S))
        S[_] === void 0 && delete j[_];
      return { ...z, [N]: j };
    });
  }, A = async () => {
    v(!0), T(null);
    try {
      const N = L.zones.map((H) => {
        const G = s[H.id];
        return G ? { ...G, zoneKey: Pr(H, L.zones) } : null;
      }).filter((H) => !!(H != null && H.zoneKey)), S = Object.fromEntries(
        N.map((H) => [H.zoneKey, H])
      ), z = Zv(l, S);
      await ie.updateMarketingAsset({
        ...t,
        zoneLayoutJson: z
      }), Z("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const j = await ie.saveMarketingAssetZoneValues(
        t.id,
        N
      ), _ = Aa(e, j, S);
      a(Hi(e, _));
      let D = zc(
        L,
        Object.fromEntries(_.map((H) => [H.zoneKey, H])),
        i
      );
      if (dC(r))
        Z("email HTML", "Generated client-side email HTML.");
      else
        try {
          D = await NN(r, e.id, t.id), Z("email HTML render", `Rendered via ${r}`);
        } catch (H) {
          ae(
            "email HTML render API",
            H instanceof Error ? H.message : String(H)
          ), ae("email HTML preview", "Using client-side inline-CSS renderer because the render API is unavailable.");
        }
      if (uf()) {
        const H = new Blob([D], { type: "text/html" });
        await ie.uploadRenderedOutput(t.id, H, `${t.assetName}.html`);
      } else
        ae(
          "rendered output upload",
          "Skipped HTML upload — not required for save on this Content Hub instance."
        );
      o == null || o({
        ...t,
        zoneValues: _,
        zoneLayoutJson: z
      });
    } catch (N) {
      const S = N instanceof Error ? N.message : "Failed to save and render email HTML.";
      Un("email save/render", N), T(S);
    } finally {
      v(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ d(
    Ca,
    {
      structureTitle: "HTML source",
      previewTitle: "Rendered preview",
      structure: /* @__PURE__ */ C("div", { className: "email-builder-override-structure", children: [
        /* @__PURE__ */ C("div", { className: "override-banner", children: [
          "Raw HTML override active. Reason: ",
          t.overrideReasonMA
        ] }),
        /* @__PURE__ */ d(
          "textarea",
          {
            className: "raw-html-editor",
            value: c,
            onChange: (N) => f(N.target.value),
            onBlur: async (N) => {
              const S = N.target.value;
              await ie.updateMarketingAsset({
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
    Ca,
    {
      structureTitle: "Email structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ C("div", { className: "email-builder-structure", children: [
        /* @__PURE__ */ d(
          Xv,
          {
            template: e,
            zoneLayouts: l,
            zoneValues: s,
            layoutMode: "stacked",
            onLayoutChange: b,
            onZoneValueChange: h
          }
        ),
        /* @__PURE__ */ C("div", { className: "email-builder-actions", children: [
          /* @__PURE__ */ d("button", { type: "button", className: "email-builder-save", onClick: A, disabled: p, children: "Save" }),
          /* @__PURE__ */ d(xo, { active: p }),
          /* @__PURE__ */ d(
            Jv,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (N) => {
                await ie.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: N,
                  rawHtmlOverrideContent: y || "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        k && /* @__PURE__ */ d("div", { className: "marketing-builder-error email-builder-error", children: k })
      ] }),
      preview: /* @__PURE__ */ d(
        pf,
        {
          template: L,
          zoneValues: s,
          layoutMode: "stacked"
        }
      )
    }
  ) });
}
function Qv(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function xN(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function PN({ layer: e, selected: t, onSelect: n, onMoveStart: r }) {
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
          className: `chd-layer-image${/logo/i.test(e.name) ? " chd-layer-image--contain" : ""}`,
          src: e.src,
          alt: e.name,
          draggable: !1
        }
      ) : /* @__PURE__ */ d("div", { className: "chd-layer-image-placeholder", style: { background: e.fill || "#e8e6e1" }, children: e.name || "Image" });
      break;
  }
  return /* @__PURE__ */ d(
    "div",
    {
      className: `chd-layer${t ? " chd-layer--selected" : ""}${e.locked ? " chd-layer--locked" : ""}`,
      style: o,
      "data-layer-id": e.id,
      onPointerDown: (s) => {
        s.button === 0 && (s.stopPropagation(), n(s), e.locked || r(s));
      },
      children: i
    }
  );
}
const Mc = {
  primary: "#00a651",
  secondary: "#000000",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  text: "#000000",
  muted: "#6b716e"
};
let zN = 1;
function ei() {
  return `layer-${Date.now().toString(36)}-${zN++}`;
}
function Ic(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: ei(),
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
        id: ei(),
        type: e,
        name: "Rectangle",
        x: n,
        y: r,
        width: 160,
        height: 100,
        visible: !0,
        fill: Mc.primary,
        locked: !1,
        allowTransform: !1,
        editableContent: !1
      };
    case "text":
      return {
        id: ei(),
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
        id: ei(),
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
        editableContent: !0
      };
  }
}
function mf() {
  const e = Ic("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = Mc.secondary;
  const t = Ic("image", { x: 120, y: 140 });
  return t.name = "Logo", t.width = 240, t.height = 80, t.src = "", t.fill = "#ffffff", t.locked = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: Mc.background
    },
    layers: [e, t]
  };
}
function ft(e) {
  return JSON.parse(JSON.stringify(e));
}
function hf(e) {
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
    const u = typeof a.id == "string" ? a.id : ei(), c = typeof a.name == "string" ? a.name : l, f = Number(a.x), p = Number(a.y), v = Number(a.width), k = Number(a.height);
    if (![f, p, v, k].every(Number.isFinite))
      continue;
    const T = {
      id: u,
      type: l,
      name: c,
      x: f,
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
      src: typeof a.src == "string" ? a.src : void 0
    };
    typeof a.editableContent == "boolean" ? T.editableContent = a.editableContent : T.editableContent = l === "text" || l === "image", i.push(T);
  }
  return {
    version: 1,
    canvas: {
      width: r,
      height: o,
      background: typeof n.background == "string" ? n.background : void 0
    },
    layers: i
  };
}
function qv(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function Qi(e) {
  return e.locked ? !1 : qv(e);
}
function Po(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function gf(e, t) {
  return t === "admin" ? !0 : e.visible ? Qi(e) || Po(e) : !1;
}
function LN(e) {
  return { version: 1, templateId: e, overrides: {} };
}
function _N(e) {
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
function ON(e, t) {
  const n = ft(e);
  return t != null && t.overrides ? {
    ...n,
    layers: n.layers.map((r) => {
      const o = t.overrides[r.id];
      if (!o)
        return r;
      const i = { ...r };
      return Po(r) && (typeof o.x == "number" && (i.x = o.x), typeof o.y == "number" && (i.y = o.y), typeof o.width == "number" && (i.width = o.width), typeof o.height == "number" && (i.height = o.height)), Qi(r) && (typeof o.text == "string" && (i.text = o.text), typeof o.fill == "string" && (i.fill = o.fill), typeof o.color == "string" && (i.color = o.color), typeof o.src == "string" && (i.src = o.src)), i;
    })
  } : n;
}
function RN(e, t, n) {
  const r = {}, o = new Map(e.layers.map((i) => [i.id, i]));
  for (const i of t.layers) {
    const s = o.get(i.id);
    if (!s)
      continue;
    const a = {};
    Po(s) && (i.x !== s.x && (a.x = i.x), i.y !== s.y && (a.y = i.y), i.width !== s.width && (a.width = i.width), i.height !== s.height && (a.height = i.height)), Qi(s) && ((i.text ?? "") !== (s.text ?? "") && (a.text = i.text), (i.fill ?? "") !== (s.fill ?? "") && (a.fill = i.fill), (i.color ?? "") !== (s.color ?? "") && (a.color = i.color), (i.src ?? "") !== (s.src ?? "") && (a.src = i.src)), Object.keys(a).length > 0 && (r[i.id] = a);
  }
  return { version: 1, templateId: n, overrides: r };
}
function $N(e, t) {
  const n = {};
  return Po(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), Qi(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const qr = 24, Qm = 1, e0 = 0.25, t0 = 3, MN = 50, n0 = E.createContext(null);
function IN(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function qm(e, t, n) {
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
function DN({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: o,
  onDocumentChange: i,
  onInstanceChange: s
}) {
  const a = E.useRef(null);
  a.current || (a.current = n ? ft(n) : mf());
  const l = E.useRef(
    ft(r ?? n ?? a.current)
  ), u = E.useRef(t);
  u.current = t;
  const [c, f] = E.useState(() => ft(a.current)), [p, v] = E.useState([]), [k, T] = E.useState({
    zoom: Qm,
    panX: 40,
    panY: 40
  }), L = E.useRef([ft(a.current)]), y = E.useRef(0), [m, h] = E.useState(0), b = E.useRef(p);
  b.current = p;
  const A = E.useRef(c);
  A.current = c;
  const N = E.useRef(i);
  N.current = i;
  const S = E.useRef(s);
  S.current = s;
  const z = E.useRef(o);
  z.current = o;
  const j = E.useCallback(() => h((W) => W + 1), []), _ = E.useCallback((W) => {
    var R, M;
    if ((R = N.current) == null || R.call(N, ft(W)), u.current === "endUser") {
      const w = z.current ?? "";
      (M = S.current) == null || M.call(
        S,
        RN(l.current, W, w)
      );
    }
  }, []), D = E.useCallback(
    (W) => {
      const R = L.current.slice(0, y.current + 1);
      for (R.push(ft(W)); R.length > MN; )
        R.shift();
      L.current = R, y.current = R.length - 1, j();
    },
    [j]
  ), H = E.useCallback(
    (W, R) => {
      f(W), A.current = W, R && D(W), _(W);
    },
    [_, D]
  ), G = E.useCallback(
    (W) => {
      const R = u.current === "endUser";
      switch (W.type) {
        case "ADD_LAYER": {
          if (R)
            return;
          const M = Ic(W.layerType, W.at);
          f((w) => {
            const P = { ...w, layers: [...w.layers, M] };
            return D(P), _(P), P;
          }), v([M.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const M = W.pushHistory !== !1;
          f((w) => {
            const P = {
              ...w,
              layers: w.layers.map((U) => {
                if (U.id !== W.id)
                  return U;
                const V = R ? $N(U, W.patch) : W.patch;
                if (Object.keys(V).length === 0)
                  return U;
                const Q = { ...U, ...V };
                return typeof Q.width == "number" && (Q.width = Math.max(qr, Q.width)), typeof Q.height == "number" && (Q.height = Math.max(qr, Q.height)), Q;
              })
            };
            return M && D(P), _(P), P;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if (R)
            return;
          const M = new Set(W.ids ?? b.current);
          if (M.size === 0)
            return;
          f((w) => {
            const P = {
              ...w,
              layers: w.layers.filter((U) => !M.has(U.id))
            };
            return D(P), _(P), P;
          }), v((w) => w.filter((P) => !M.has(P)));
          break;
        }
        case "SELECT": {
          v((M) => {
            const w = W.ids.filter((P) => {
              const U = A.current.layers.find((V) => V.id === P);
              return U ? gf(U, u.current) : !1;
            });
            if (W.additive) {
              const P = new Set(M);
              for (const U of w)
                P.has(U) ? P.delete(U) : P.add(U);
              return Array.from(P);
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
          if (R)
            return;
          f((M) => {
            const w = {
              ...M,
              layers: IN(M.layers, W.fromIndex, W.toIndex)
            };
            return D(w), _(w), w;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if (R)
            return;
          f((M) => {
            const w = {
              ...M,
              layers: M.layers.map(
                (P) => P.id === W.id ? { ...P, visible: W.visible } : P
              )
            };
            return D(w), _(w), w;
          });
          break;
        }
        case "BRING_FORWARD": {
          if (R)
            return;
          const M = b.current;
          f((w) => {
            const P = { ...w, layers: qm(w.layers, M, "forward") };
            return D(P), _(P), P;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if (R)
            return;
          const M = b.current;
          f((w) => {
            const P = { ...w, layers: qm(w.layers, M, "backward") };
            return D(P), _(P), P;
          });
          break;
        }
        case "ZOOM_SET": {
          T((M) => ({
            ...M,
            zoom: Qv(W.zoom, e0, t0)
          }));
          break;
        }
        case "ZOOM_RESET": {
          T({ zoom: Qm, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          T((M) => ({
            ...M,
            panX: W.panX,
            panY: W.panY
          }));
          break;
        }
        case "UNDO": {
          if (y.current <= 0)
            return;
          y.current -= 1;
          const M = ft(L.current[y.current]);
          f(M), A.current = M, v([]), j(), _(M);
          break;
        }
        case "REDO": {
          if (y.current >= L.current.length - 1)
            return;
          y.current += 1;
          const M = ft(L.current[y.current]);
          f(M), A.current = M, v([]), j(), _(M);
          break;
        }
        case "LOAD_DOCUMENT": {
          H(ft(W.document), !0), v([]);
          break;
        }
        case "COMMIT": {
          f((M) => (D(M), _(M), M));
          break;
        }
      }
    },
    [H, j, _, D]
  ), ze = E.useCallback(() => ft(c), [c]), Je = E.useCallback(
    (W) => {
      if (u.current === "endUser")
        return !1;
      try {
        const R = hf(JSON.parse(W));
        return R ? (l.current = ft(R), H(R, !0), v([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [H]
  );
  E.useEffect(() => {
    t === "admin" && n && (l.current = ft(n)), t === "endUser" && r && (l.current = ft(r));
  }, [n, r, t]);
  const Ee = E.useMemo(
    () => ({
      mode: t,
      templateId: o,
      document: c,
      selection: p,
      viewport: k,
      canUndo: y.current > 0,
      canRedo: y.current < L.current.length - 1,
      dispatch: G,
      exportDocument: ze,
      importDocumentJson: Je
    }),
    [t, o, c, p, k, G, ze, Je, m]
  );
  return /* @__PURE__ */ d(n0.Provider, { value: Ee, children: e });
}
function zr() {
  const e = E.useContext(n0);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function yf() {
  return zr().mode;
}
function HN() {
  return zr().document;
}
function r0() {
  return zr().document.layers;
}
function Sl() {
  return zr().selection;
}
function o0() {
  return zr().viewport;
}
function kl() {
  return zr().dispatch;
}
function FN() {
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
const UN = ["nw", "ne", "sw", "se"];
function jN() {
  const e = HN(), t = Sl(), n = o0(), r = kl(), o = yf(), [i, s] = E.useState(null), [a, l] = E.useState(!1), u = E.useRef(n);
  u.current = n;
  const c = E.useRef(o);
  c.current = o, E.useEffect(() => {
    const A = (S) => {
      if (S.code === "Space" && !(S.target instanceof HTMLInputElement) && !(S.target instanceof HTMLTextAreaElement) && (S.preventDefault(), l(!0)), c.current === "admin" && (S.key === "Delete" || S.key === "Backspace") && t.length > 0) {
        const z = S.target.tagName;
        if (z === "INPUT" || z === "TEXTAREA")
          return;
        S.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (S.ctrlKey || S.metaKey) && S.key.toLowerCase() === "z" && !S.shiftKey && (S.preventDefault(), r({ type: "UNDO" })), (S.ctrlKey || S.metaKey) && (S.key.toLowerCase() === "y" || S.key.toLowerCase() === "z" && S.shiftKey) && (S.preventDefault(), r({ type: "REDO" }));
    }, N = (S) => {
      S.code === "Space" && l(!1);
    };
    return window.addEventListener("keydown", A), window.addEventListener("keyup", N), () => {
      window.removeEventListener("keydown", A), window.removeEventListener("keyup", N);
    };
  }, [r, t.length]), E.useEffect(() => {
    if (!i)
      return;
    const A = (S) => {
      const z = u.current.zoom;
      if (i.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: i.origPanX + (S.clientX - i.startX),
          panY: i.origPanY + (S.clientY - i.startY)
        });
        return;
      }
      const { dx: j, dy: _ } = xN(
        S.clientX - i.startX,
        S.clientY - i.startY,
        z
      );
      if (i.kind === "move") {
        for (const Je of i.ids) {
          const Ee = i.origins[Je];
          Ee && r({
            type: "UPDATE_LAYER",
            id: Je,
            patch: { x: Ee.x + j, y: Ee.y + _ },
            pushHistory: !1
          });
        }
        return;
      }
      let D = i.origX, H = i.origY, G = i.origW, ze = i.origH;
      i.handle.includes("e") && (G = Math.max(qr, i.origW + j)), i.handle.includes("s") && (ze = Math.max(qr, i.origH + _)), i.handle.includes("w") && (G = Math.max(qr, i.origW - j), D = i.origX + (i.origW - G)), i.handle.includes("n") && (ze = Math.max(qr, i.origH - _), H = i.origY + (i.origH - ze)), r({
        type: "UPDATE_LAYER",
        id: i.id,
        patch: { x: D, y: H, width: G, height: ze },
        pushHistory: !1
      });
    }, N = () => {
      (i.kind === "move" || i.kind === "resize") && r({ type: "COMMIT" }), s(null);
    };
    return window.addEventListener("pointermove", A), window.addEventListener("pointerup", N), () => {
      window.removeEventListener("pointermove", A), window.removeEventListener("pointerup", N);
    };
  }, [i, r]);
  const f = (A) => {
    A.preventDefault();
    const N = Qv(n.zoom * (A.deltaY < 0 ? 1.08 : 0.92), e0, t0);
    r({ type: "ZOOM_SET", zoom: N });
  }, p = (A) => {
    s({
      kind: "pan",
      startX: A.clientX,
      startY: A.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, v = (A) => {
    if (A.button === 1 || A.button === 0 && a) {
      A.preventDefault(), p(A);
      return;
    }
    A.button === 0 && r({ type: "UNSELECT_ALL" });
  }, k = (A, N) => {
    gf(A, o) && r({
      type: "SELECT",
      ids: [A.id],
      additive: N.shiftKey
    });
  }, T = (A) => o === "admin" ? !A.locked : Po(A), L = (A, N) => {
    if (!T(A) || a)
      return;
    const S = t.includes(A.id) ? t : [A.id];
    t.includes(A.id) || r({ type: "SELECT", ids: [A.id] });
    const z = {};
    for (const j of S) {
      const _ = e.layers.find((D) => D.id === j);
      _ && T(_) && (z[j] = { x: _.x, y: _.y });
    }
    Object.keys(z).length !== 0 && s({
      kind: "move",
      ids: Object.keys(z),
      startX: N.clientX,
      startY: N.clientY,
      origins: z
    });
  }, y = (A, N, S) => {
    S.stopPropagation(), T(A) && (r({ type: "SELECT", ids: [A.id] }), s({
      kind: "resize",
      id: A.id,
      startX: S.clientX,
      startY: S.clientY,
      origX: A.x,
      origY: A.y,
      origW: A.width,
      origH: A.height,
      handle: N
    }));
  }, m = e.layers.filter((A) => t.includes(A.id) && A.visible), h = m.length === 1 ? m[0] : null, b = h ? T(h) : !1;
  return /* @__PURE__ */ C(
    "div",
    {
      className: `chd-viewport${a ? " chd-viewport--panning" : ""}`,
      onWheel: f,
      onPointerDown: v,
      children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: "chd-world",
            style: {
              transform: `translate(${n.panX}px, ${n.panY}px) scale(${n.zoom})`
            },
            children: /* @__PURE__ */ C(
              "div",
              {
                className: "chd-artboard",
                style: {
                  width: e.canvas.width,
                  height: e.canvas.height,
                  background: e.canvas.background || "#eceae4"
                },
                onPointerDown: (A) => {
                  A.button !== 0 || a || (A.stopPropagation(), r({ type: "UNSELECT_ALL" }));
                },
                children: [
                  e.layers.map((A) => /* @__PURE__ */ d(
                    PN,
                    {
                      layer: A,
                      selected: t.includes(A.id),
                      onSelect: (N) => k(A, N),
                      onMoveStart: (N) => L(A, N)
                    },
                    A.id
                  )),
                  b && h ? /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: h.x,
                        top: h.y,
                        width: h.width,
                        height: h.height
                      },
                      children: UN.map((A) => /* @__PURE__ */ d(
                        "div",
                        {
                          className: `chd-handle chd-handle--${A}`,
                          onPointerDown: (N) => y(h, A, N)
                        },
                        A
                      ))
                    }
                  ) : h ? /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: h.x,
                        top: h.y,
                        width: h.width,
                        height: h.height
                      }
                    }
                  ) : null,
                  m.length > 1 ? m.map((A) => /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: A.x,
                        top: A.y,
                        width: A.width,
                        height: A.height
                      }
                    },
                    `sel-${A.id}`
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
function BN() {
  const e = r0(), t = Sl(), n = kl(), r = yf(), o = r === "admin", i = [...e].map((s, a) => ({ layer: s, index: a })).reverse().filter(({ layer: s }) => o || gf(s, r));
  return /* @__PURE__ */ C("aside", { className: "chd-panel chd-layers-panel", "aria-label": "Layers", children: [
    /* @__PURE__ */ d("div", { className: "chd-panel-header", children: o ? "Layers" : "Editable layers" }),
    /* @__PURE__ */ d("ul", { className: "chd-layer-list", children: i.length === 0 ? /* @__PURE__ */ d("li", { className: "chd-panel-empty", children: "No editable layers" }) : i.map(({ layer: s, index: a }) => {
      const l = t.includes(s.id);
      return /* @__PURE__ */ C(
        "li",
        {
          className: `chd-layer-list-item${l ? " chd-layer-list-item--selected" : ""}`,
          children: [
            /* @__PURE__ */ C(
              "button",
              {
                type: "button",
                className: "chd-layer-list-select",
                onClick: (u) => n({
                  type: "SELECT",
                  ids: [s.id],
                  additive: u.shiftKey
                }),
                children: [
                  /* @__PURE__ */ d("span", { className: "chd-layer-list-type", children: s.type }),
                  /* @__PURE__ */ d("span", { className: "chd-layer-list-name", children: s.name })
                ]
              }
            ),
            o ? /* @__PURE__ */ C(at, { children: [
              /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  className: "chd-icon-btn",
                  title: s.visible ? "Hide" : "Show",
                  onClick: () => n({
                    type: "SET_VISIBILITY",
                    id: s.id,
                    visible: !s.visible
                  }),
                  children: s.visible ? "◉" : "○"
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  className: "chd-icon-btn",
                  title: "Move up (forward)",
                  disabled: a >= e.length - 1,
                  onClick: () => n({ type: "REORDER", fromIndex: a, toIndex: a + 1 }),
                  children: "↑"
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  className: "chd-icon-btn",
                  title: "Move down (back)",
                  disabled: a <= 0,
                  onClick: () => n({ type: "REORDER", fromIndex: a, toIndex: a - 1 }),
                  children: "↓"
                }
              )
            ] }) : null
          ]
        },
        s.id
      );
    }) })
  ] });
}
function Wo({
  label: e,
  value: t,
  onChange: n,
  disabled: r
}) {
  return /* @__PURE__ */ C("label", { className: "chd-field", children: [
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
function KN() {
  const e = r0(), t = Sl(), n = kl(), o = yf() === "admin", i = e.filter((c) => t.includes(c.id)), s = i.length === 1 ? i[0] : null, a = (c) => {
    s && n({ type: "UPDATE_LAYER", id: s.id, patch: c });
  }, l = s ? o ? !s.locked : Po(s) : !1, u = s ? o ? !s.locked : Qi(s) : !1;
  return /* @__PURE__ */ C("aside", { className: "chd-panel chd-properties-panel", "aria-label": "Properties", children: [
    /* @__PURE__ */ d("div", { className: "chd-panel-header", children: "Properties" }),
    s ? /* @__PURE__ */ C("div", { className: "chd-properties-body", children: [
      o ? /* @__PURE__ */ C("label", { className: "chd-field", children: [
        /* @__PURE__ */ d("span", { children: "Name" }),
        /* @__PURE__ */ d(
          "input",
          {
            type: "text",
            value: s.name,
            onChange: (c) => a({ name: c.target.value })
          }
        )
      ] }) : /* @__PURE__ */ C("div", { className: "chd-field", children: [
        /* @__PURE__ */ d("span", { children: "Layer" }),
        /* @__PURE__ */ d("strong", { children: s.name })
      ] }),
      /* @__PURE__ */ C("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ d(
          Wo,
          {
            label: "X",
            value: Math.round(s.x),
            disabled: !l,
            onChange: (c) => a({ x: c })
          }
        ),
        /* @__PURE__ */ d(
          Wo,
          {
            label: "Y",
            value: Math.round(s.y),
            disabled: !l,
            onChange: (c) => a({ y: c })
          }
        )
      ] }),
      /* @__PURE__ */ C("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ d(
          Wo,
          {
            label: "W",
            value: Math.round(s.width),
            disabled: !l,
            onChange: (c) => a({ width: c })
          }
        ),
        /* @__PURE__ */ d(
          Wo,
          {
            label: "H",
            value: Math.round(s.height),
            disabled: !l,
            onChange: (c) => a({ height: c })
          }
        )
      ] }),
      u && (s.type === "frame" || s.type === "rect" || s.type === "image") && /* @__PURE__ */ C("label", { className: "chd-field", children: [
        /* @__PURE__ */ d("span", { children: "Fill" }),
        /* @__PURE__ */ d(
          "input",
          {
            type: "color",
            value: s.fill && /^#/.test(s.fill) ? s.fill : "#888780",
            onChange: (c) => a({ fill: c.target.value })
          }
        )
      ] }),
      u && s.type === "text" && /* @__PURE__ */ C(at, { children: [
        /* @__PURE__ */ C("label", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Text" }),
          /* @__PURE__ */ d(
            "textarea",
            {
              rows: 3,
              value: s.text || "",
              onChange: (c) => a({ text: c.target.value })
            }
          )
        ] }),
        o ? /* @__PURE__ */ C("div", { className: "chd-field-row", children: [
          /* @__PURE__ */ d(
            Wo,
            {
              label: "Size",
              value: s.fontSize ?? 16,
              onChange: (c) => a({ fontSize: c })
            }
          ),
          /* @__PURE__ */ C("label", { className: "chd-field", children: [
            /* @__PURE__ */ d("span", { children: "Color" }),
            /* @__PURE__ */ d(
              "input",
              {
                type: "color",
                value: s.color && /^#/.test(s.color) ? s.color : "#1a1a1a",
                onChange: (c) => a({ color: c.target.value })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ C("label", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Color" }),
          /* @__PURE__ */ d(
            "input",
            {
              type: "color",
              value: s.color && /^#/.test(s.color) ? s.color : "#1a1a1a",
              onChange: (c) => a({ color: c.target.value })
            }
          )
        ] })
      ] }),
      u && s.type === "image" && /* @__PURE__ */ C("label", { className: "chd-field", children: [
        /* @__PURE__ */ d("span", { children: "Image URL" }),
        /* @__PURE__ */ d(
          "input",
          {
            type: "url",
            placeholder: "https://…",
            value: s.src || "",
            onChange: (c) => a({ src: c.target.value })
          }
        )
      ] }),
      o ? /* @__PURE__ */ C(at, { children: [
        /* @__PURE__ */ C("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "checkbox",
              checked: !!s.locked,
              onChange: (c) => a({ locked: c.target.checked })
            }
          ),
          /* @__PURE__ */ d("span", { children: "Locked" })
        ] }),
        /* @__PURE__ */ C("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "checkbox",
              checked: !!s.allowTransform,
              onChange: (c) => a({ allowTransform: c.target.checked })
            }
          ),
          /* @__PURE__ */ d("span", { children: "Allow transform (end user)" })
        ] }),
        /* @__PURE__ */ C("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "checkbox",
              checked: qv(s),
              onChange: (c) => a({ editableContent: c.target.checked })
            }
          ),
          /* @__PURE__ */ d("span", { children: "Editable content (end user)" })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ d("p", { className: "chd-panel-empty", children: i.length > 1 ? `${i.length} layers selected` : "Select a layer" })
  ] });
}
const ZN = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function VN() {
  const e = kl(), t = Sl(), n = o0(), { mode: r, canUndo: o, canRedo: i, exportDocument: s, importDocumentJson: a } = FN(), l = E.useRef(null), u = r === "admin", c = () => {
    const p = s(), v = new Blob([JSON.stringify(p, null, 2)], { type: "application/json" }), k = URL.createObjectURL(v), T = document.createElement("a");
    T.href = k, T.download = "chdesigner-document.json", T.click(), URL.revokeObjectURL(k);
  }, f = async (p) => {
    if (!p)
      return;
    const v = await p.text();
    a(v) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  };
  return /* @__PURE__ */ C("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ C("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ d("span", { className: "chd-toolbar-logo-wrap", children: "Logo" }),
      /* @__PURE__ */ d("span", { className: "chd-toolbar-mode", children: u ? "Admin" : "Edit" })
    ] }),
    u ? /* @__PURE__ */ d("div", { className: "chd-toolbar-group", children: ZN.map((p) => /* @__PURE__ */ C(
      "button",
      {
        type: "button",
        className: "chd-btn",
        onClick: () => e({ type: "ADD_LAYER", layerType: p.type }),
        children: [
          "+ ",
          p.label
        ]
      },
      p.type
    )) }) : null,
    u ? /* @__PURE__ */ C("div", { className: "chd-toolbar-group", children: [
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
    /* @__PURE__ */ C("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !o,
          onClick: () => e({ type: "UNDO" }),
          children: "Undo"
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !i,
          onClick: () => e({ type: "REDO" }),
          children: "Redo"
        }
      )
    ] }),
    /* @__PURE__ */ C("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ C("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ZOOM_RESET" }), children: [
        Math.round(n.zoom * 100),
        "%"
      ] }),
      u ? /* @__PURE__ */ C(at, { children: [
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: c, children: "Export" }),
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => {
          var p;
          return (p = l.current) == null ? void 0 : p.click();
        }, children: "Import" }),
        /* @__PURE__ */ d(
          "input",
          {
            ref: l,
            type: "file",
            accept: "application/json,.json",
            className: "chd-file-input",
            onChange: (p) => {
              var v;
              f(((v = p.target.files) == null ? void 0 : v[0]) ?? null), p.target.value = "";
            }
          }
        )
      ] }) : null
    ] })
  ] });
}
function i0({
  mode: e = "admin",
  document: t,
  templateDocument: n,
  templateId: r,
  onDocumentChange: o,
  onInstanceChange: i,
  statusSlot: s,
  statusClassName: a
}) {
  return /* @__PURE__ */ d(DN, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    onDocumentChange: o,
    onInstanceChange: i
  }, children: /* @__PURE__ */ C("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ d(VN, {}),
    s ? /* @__PURE__ */ d("div", { className: `chd-status-bar${a ? ` ${a}` : ""}`, children: s }) : null,
    /* @__PURE__ */ C("div", { className: "chd-main", children: [
      /* @__PURE__ */ d(BN, {}),
      /* @__PURE__ */ d(jN, {}),
      /* @__PURE__ */ d(KN, {})
    ] })
  ] }) });
}
function WN(e) {
  var t;
  if (!((t = e.designerDocumentJson) != null && t.trim()))
    return null;
  try {
    return hf(JSON.parse(e.designerDocumentJson));
  } catch {
    return null;
  }
}
function YN(e, t) {
  var n;
  if ((n = t.designerInstanceJson) != null && n.trim())
    try {
      const r = _N(JSON.parse(t.designerInstanceJson));
      if (r)
        return r;
    } catch {
    }
  return LN(e.id);
}
function eh({
  template: e,
  marketingAsset: t,
  designerInstanceProperty: n,
  onSaved: r
}) {
  const o = E.useMemo(() => WN(e), [e]), [i, s] = E.useState(
    () => YN(e, t)
  ), a = E.useRef(i);
  a.current = i;
  const [l, u] = E.useState("idle"), [c, f] = E.useState(null), p = E.useMemo(() => o ? ON(o, i) : null, [o, i]), v = E.useCallback(async () => {
    u("saving"), f(null);
    try {
      const T = JSON.stringify(a.current);
      await ie.saveMarketingAssetDesignerInstance(
        t.id,
        T,
        n
      );
      const L = { ...t, designerInstanceJson: T };
      r == null || r(L), u("saved");
    } catch (T) {
      f(T instanceof Error ? T.message : "Failed to save designer instance."), u("error");
    }
  }, [n, t, r]);
  return !o || !p ? /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Template designer document is missing or invalid. Open Edit template and create a canvas template first." }) : /* @__PURE__ */ C("div", { className: "designer-asset-builder", children: [
    /* @__PURE__ */ C("div", { className: "designer-asset-builder-actions", children: [
      /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => void v(), children: "Save" }),
      /* @__PURE__ */ d(
        "span",
        {
          className: l === "error" ? "chd-status-bar chd-status-bar--error" : l === "saved" ? "chd-status-bar chd-status-bar--saved" : "chd-status-bar",
          children: l === "saving" ? "Saving…" : l === "saved" ? "Saved" : l === "error" ? c || "Save failed" : "Edit unlocked layers, then Save"
        }
      )
    ] }),
    /* @__PURE__ */ d(
      i0,
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
const GN = 900;
function XN(e) {
  var t;
  if ((t = e.designerDocumentJson) != null && t.trim())
    try {
      const n = hf(JSON.parse(e.designerDocumentJson));
      if (n)
        return n;
    } catch {
    }
  return mf();
}
function JN({
  template: e,
  designerDocumentProperty: t,
  onTemplateSaved: n
}) {
  const [r, o] = E.useState(() => XN(e)), [i, s] = E.useState("saved"), [a, l] = E.useState(null), u = E.useRef(r), c = E.useRef(null), f = E.useRef(0), p = E.useRef(!0);
  u.current = r;
  const v = E.useCallback(
    async (L) => {
      const y = ++f.current;
      s("saving"), l(null);
      try {
        const m = JSON.stringify(L);
        if (await ie.saveTemplateDesignerDocument(
          e.id,
          m,
          t
        ), y !== f.current)
          return;
        const h = { ...e, designerDocumentJson: m };
        n == null || n(h), s("saved");
      } catch (m) {
        if (y !== f.current)
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
    return s("pending"), c.current != null && window.clearTimeout(c.current), c.current = window.setTimeout(() => {
      v(u.current);
    }, GN), () => {
      c.current != null && window.clearTimeout(c.current);
    };
  }, [r, v]);
  const k = i === "error" ? "chd-status-bar--error" : i === "saved" ? "chd-status-bar--saved" : void 0, T = i === "saving" ? "Saving template canvas…" : i === "pending" ? "Unsaved changes…" : i === "error" ? a || "Save failed" : "Saved to template";
  return /* @__PURE__ */ d(
    i0,
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
  );
}
async function QN(e, t) {
  const n = mf();
  e.canvasWidth && (n.canvas.width = e.canvasWidth), e.canvasHeight && (n.canvas.height = e.canvasHeight);
  const r = JSON.stringify(n);
  return await ie.saveTemplateDesignerDocument(e.id, r, t), { ...e, designerDocumentJson: r };
}
function qN(e) {
  var t;
  return !!((t = e == null ? void 0 : e.designerDocumentJson) != null && t.trim());
}
const eb = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
let Cu = null;
function tb(e) {
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
function nb(e = eb) {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (Cu || (Cu = tb(e).then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), Cu);
}
function rb({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  html2canvasCdnUrl: r,
  onSaved: o
}) {
  const [i, s] = E.useState(() => {
    const m = Ea(t.zoneLayoutJson), h = Aa(e, t.zoneValues, m.values);
    return Hi(e, h);
  }), [a, l] = E.useState(() => {
    const m = Ea(t.zoneLayoutJson);
    return Yv(e, m.layouts);
  }), [u, c] = E.useState(!1), [f, p] = E.useState(null), v = E.useRef(null), k = E.useMemo(
    () => Wv(e, a),
    [e, a]
  ), T = (m, h) => {
    s((b) => ({ ...b, [m]: h }));
  }, L = (m, h) => {
    l((b) => {
      const A = { ...b[m], ...h };
      for (const N of Object.keys(h))
        h[N] === void 0 && delete A[N];
      return { ...b, [m]: A };
    });
  }, y = async () => {
    c(!0), p(null);
    try {
      const m = k.zones.map((S) => {
        const z = i[S.id];
        return z ? { ...z, zoneKey: Pr(S, k.zones) } : null;
      }).filter((S) => !!(S != null && S.zoneKey)), h = Object.fromEntries(
        m.map((S) => [S.zoneKey, S])
      ), b = Zv(a, h);
      await ie.updateMarketingAsset({
        ...t,
        zoneLayoutJson: b
      }), Z("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const A = await ie.saveMarketingAssetZoneValues(
        t.id,
        m
      ), N = Aa(e, A, h);
      if (s(Hi(e, N)), uf() && v.current) {
        const z = await (await nb(r))(v.current, {
          useCORS: !0,
          width: ef(e),
          height: av(e)
        }), j = ["image", "png"].join("/"), _ = await new Promise(
          (D, H) => z.toBlob((G) => G ? D(G) : H(new Error("Canvas export failed")), j)
        );
        await ie.uploadRenderedOutput(
          t.id,
          _,
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
      c(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ C("div", { className: "social-builder social-builder-override", children: [
    /* @__PURE__ */ C("div", { className: "override-banner", children: [
      "Raw HTML override active. Reason: ",
      t.overrideReasonMA
    ] }),
    /* @__PURE__ */ d("div", { dangerouslySetInnerHTML: { __html: t.rawHtmlOverrideContent ?? "" } })
  ] }) : /* @__PURE__ */ d("div", { className: "social-builder", children: /* @__PURE__ */ d(
    Ca,
    {
      structureTitle: "Social structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ C("div", { className: "social-builder-structure", children: [
        /* @__PURE__ */ d(
          Xv,
          {
            template: e,
            zoneLayouts: a,
            zoneValues: i,
            layoutMode: "canvas",
            onLayoutChange: L,
            onZoneValueChange: T
          }
        ),
        /* @__PURE__ */ C("div", { className: "social-builder-actions", children: [
          /* @__PURE__ */ d("button", { type: "button", className: "social-builder-save", onClick: y, disabled: u, children: "Save" }),
          /* @__PURE__ */ d(xo, { active: u }),
          /* @__PURE__ */ d(
            Jv,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (m) => {
                await ie.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: m,
                  rawHtmlOverrideContent: "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        f && /* @__PURE__ */ d("div", { className: "marketing-builder-error social-builder-error", children: f })
      ] }),
      preview: /* @__PURE__ */ d(
        pf,
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
function xs({
  activeTab: e,
  zoneCount: t,
  templateName: n,
  onTabChange: r,
  showAssetTab: o = !0
}) {
  return /* @__PURE__ */ C("div", { className: "marketing-builder-toolbar marketing-builder-tab-bar", children: [
    /* @__PURE__ */ C("div", { className: "marketing-builder-tabs", role: "tablist", "aria-label": "Marketing builder mode", children: [
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
    /* @__PURE__ */ C("span", { className: "marketing-builder-toolbar-meta", children: [
      n ? `${n} · ` : "",
      t,
      " zone",
      t === 1 ? "" : "s"
    ] })
  ] });
}
function Nu({
  brandKitId: e,
  currentTemplateId: t,
  marketingAssetId: n,
  onTemplateChange: r,
  refreshKey: o = 0
}) {
  var k;
  const [i, s] = E.useState([]), [a, l] = E.useState(!0), [u, c] = E.useState(!1), [f, p] = E.useState(null);
  E.useEffect(() => {
    let T = !1;
    async function L() {
      l(!0), p(null);
      try {
        const y = await ie.listTemplatesForBrandKit(e);
        if (T)
          return;
        const m = y.some((b) => b.id === t) ? y : [...y, await ie.getTemplate(t)], h = [...new Map(m.map((b) => [b.id, b])).values()];
        h.sort((b, A) => b.templateName.localeCompare(A.templateName)), s(h);
      } catch (y) {
        T || (p(y instanceof Error ? y.message : "Could not load templates."), s([]));
      } finally {
        T || l(!1);
      }
    }
    return L(), () => {
      T = !0;
    };
  }, [e, t, o]);
  const v = async (T) => {
    if (!(!T || T === t)) {
      c(!0), p(null);
      try {
        await ie.linkMarketingAssetToTemplate(n, T);
        const L = i.find((y) => y.id === T) ?? await ie.getTemplate(T);
        r(L);
      } catch (L) {
        p(L instanceof Error ? L.message : "Could not switch template.");
      } finally {
        c(!1);
      }
    }
  };
  return a ? /* @__PURE__ */ d("p", { className: "template-selector-status", children: "Loading templates..." }) : i.length <= 1 ? /* @__PURE__ */ C("div", { className: "template-selector", children: [
    /* @__PURE__ */ C("p", { className: "template-selector-status", children: [
      "Using ",
      /* @__PURE__ */ d("strong", { children: ((k = i[0]) == null ? void 0 : k.templateName) ?? "current template" }),
      i.length === 0 ? " (only template for this brand kit)" : "",
      ". Duplicate this template in Edit template to create another format."
    ] }),
    f && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: f })
  ] }) : /* @__PURE__ */ C("div", { className: "template-selector", children: [
    /* @__PURE__ */ C("label", { className: "template-selector-label", children: [
      "Template",
      /* @__PURE__ */ d(
        "select",
        {
          value: t,
          disabled: u,
          onChange: (T) => void v(T.target.value),
          children: i.map((T) => /* @__PURE__ */ C("option", { value: T.id, children: [
            T.templateName,
            " (",
            T.channelType,
            ")"
          ] }, T.id))
        }
      )
    ] }),
    /* @__PURE__ */ d("p", { className: "template-selector-hint", children: u ? "" : "Choose which template this marketing asset uses." }),
    /* @__PURE__ */ d(xo, { active: u, className: "template-selector-saving" }),
    f && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: f })
  ] });
}
const ob = [
  "Text",
  "Heading",
  "Image",
  "CTA Button",
  "Logo",
  "Background Color",
  "Divider",
  "HTML"
];
function ib(e) {
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
function sb(e) {
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
  }[t] ?? ob.find((r) => r.toLowerCase() === t);
}
function s0(e) {
  var l, u;
  const t = e.trim(), n = t.match(/zone\s*[:=]\s*([a-zA-Z0-9_-]+)/i), r = t.match(/type\s*[:=]\s*([a-zA-Z0-9 _-]+)/i), o = t.match(/label\s*[:=]\s*([^|]+)/i), i = (l = n == null ? void 0 : n[1]) == null ? void 0 : l.trim(), s = r != null && r[1] ? sb(r[1]) : void 0, a = ((u = o == null ? void 0 : o[1]) == null ? void 0 : u.trim()) || void 0;
  return { zoneKey: i, zoneType: s, zoneLabel: a };
}
function ab(e, t) {
  return e.replace(/zone\s*[:=]\s*/gi, "").replace(/type\s*[:=]\s*[a-zA-Z0-9 _-]+/gi, "").replace(/label\s*[:=]\s*[^|]+/gi, "").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase() || t;
}
function th(e) {
  return (e.fills ?? []).some(
    (t) => t.visible !== !1 && String(t.type ?? "").toUpperCase() === "IMAGE"
  );
}
function a0(e) {
  var o, i;
  const t = s0(e.name ?? "");
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
  if ((th(e) || r === "RECTANGLE" || r === "ELLIPSE") && th(e))
    return "Image";
  if (r === "COMPONENT" || r === "INSTANCE") {
    if (/button|cta/i.test(n))
      return "CTA Button";
    if (/logo/i.test(n))
      return "Logo";
  }
}
function l0(e) {
  const t = e.name ?? "";
  return /zone\s*[:=]/i.test(t) || /type\s*[:=]/i.test(t);
}
function lb(e) {
  const t = [], n = (r) => {
    l0(r) && t.push(r);
    for (const o of r.children ?? [])
      n(o);
  };
  return n(e), t.length > 0 ? t : (e.children ?? []).filter((r) => a0(r) != null);
}
function eo(e) {
  if (!(e == null || !Number.isFinite(e)))
    return Math.round(e);
}
function ub(e, t, n, r) {
  const o = s0(e.name ?? ""), i = o.zoneType ?? a0(e) ?? "Text";
  let s = o.zoneKey || ab(e.name ?? "", `zone_${t + 1}`);
  r.has(s) && (s = `${s}_${t + 1}`), r.add(s);
  const a = e.absoluteBoundingBox, l = (a == null ? void 0 : a.x) != null ? eo(a.x - n.x) : void 0, u = (a == null ? void 0 : a.y) != null ? eo(a.y - n.y) : void 0, c = {
    id: `temp-figma-${Date.now()}-${t}`,
    zoneKey: s,
    zoneLabel: o.zoneLabel || (e.name ?? "").trim() || s,
    zoneType: i,
    isLocked: i === "Logo",
    sortOrder: t,
    positionX: l,
    positionY: u,
    zoneWidth: eo(a == null ? void 0 : a.width),
    zoneHeight: eo(a == null ? void 0 : a.height)
  };
  if (i === "Heading" && (c.headingLevel = Nn), i === "Text" && typeof e.characters == "string" && e.characters.trim()) {
    const f = e.characters.trim().length;
    f > 0 && (c.maxCharacterCount = Math.max(40, Math.ceil(f * 1.25)));
  }
  return c;
}
function cb(e) {
  var u, c, f, p;
  const t = [], n = (e.name ?? "").trim() || "Figma frame", r = eo((u = e.absoluteBoundingBox) == null ? void 0 : u.width), o = eo((c = e.absoluteBoundingBox) == null ? void 0 : c.height), i = {
    x: ((f = e.absoluteBoundingBox) == null ? void 0 : f.x) ?? 0,
    y: ((p = e.absoluteBoundingBox) == null ? void 0 : p.y) ?? 0
  }, s = lb(e);
  if (s.length === 0)
    return t.push(
      'No zone layers found. Name layers like "zone:headline | type:Heading" or place typed content as direct children of the frame.'
    ), { frameName: n, canvasWidth: r, canvasHeight: o, zones: [], warnings: t };
  s.some(l0) || t.push(
    "No explicit zone: / type: names found — inferred zone types from layer names and Figma node types. Rename layers for stable imports."
  );
  const a = /* @__PURE__ */ new Set(), l = s.map((v, k) => ub(v, k, i, a));
  return { frameName: n, canvasWidth: r, canvasHeight: o, zones: l, warnings: t };
}
function u0(e, t) {
  const n = t.replace(/-/g, ":");
  if ((e.id ?? "").replace(/-/g, ":") === n)
    return e;
  for (const r of e.children ?? []) {
    const o = u0(r, n);
    if (o)
      return o;
  }
  return null;
}
function db(e, t) {
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
    return u0(o, t) ?? o;
  }
  return n.id || n.children || n.type ? n : null;
}
function nh(e, t) {
  return `${e.replace(/\s+/g, " ").trim() || "Figma template"} (${t})`;
}
async function fb(e, t, n) {
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
function pb({
  template: e,
  figmaImportApiUrl: t = "/api/figma/import",
  figmaImportApiToken: n,
  onApplyToCurrent: r,
  onCreatedTemplate: o
}) {
  const [i, s] = E.useState(""), [a, l] = E.useState(null), [u, c] = E.useState(!1), [f, p] = E.useState(!1), [v, k] = E.useState(null), [T, L] = E.useState(null), [y, m] = E.useState(!1), [h, b] = E.useState(""), A = async () => {
    c(!0), k(null), L(null), l(null);
    try {
      const z = ib(i);
      if (!z)
        throw new Error(
          "Paste a full Figma URL that includes node-id (right-click frame → Copy link)."
        );
      const j = await fb(t, n, i), _ = db(j, z.nodeId);
      if (!_)
        throw new Error("Could not find that frame/node in the Figma response.");
      const D = cb(_);
      l(D), b(nh(D.frameName, e.channelType)), D.zones.length === 0 ? k(D.warnings[0] || "No zones were mapped from this frame.") : L(`Mapped ${D.zones.length} zone(s) from “${D.frameName}”.`);
    } catch (z) {
      k(z instanceof Error ? z.message : "Figma preview failed.");
    } finally {
      c(!1);
    }
  }, N = () => {
    !a || a.zones.length === 0 || (r({
      zones: a.zones,
      canvasWidth: a.canvasWidth,
      canvasHeight: a.canvasHeight,
      frameName: a.frameName
    }), L(
      `Applied ${a.zones.length} zone(s) to “${e.templateName}”. Save/autosave will persist them.`
    ));
  }, S = async () => {
    if (!(!a || a.zones.length === 0)) {
      p(!0), k(null), L(null);
      try {
        const z = e.channelType, j = await ie.createTemplate({
          templateName: h.trim() || nh(a.frameName, z),
          channelType: z,
          formatPreset: e.formatPreset,
          canvasWidth: a.canvasWidth,
          canvasHeight: a.canvasHeight,
          brandKitId: e.brandKitId,
          zones: a.zones,
          allowedAssetIds: e.allowedAssetIds
        }, e.id);
        L(`Created template “${j.templateName}” (${j.id}).`), o == null || o(j);
      } catch (z) {
        k(
          z instanceof Error ? z.message : "Could not create template from Figma."
        );
      } finally {
        p(!1);
      }
    }
  };
  return /* @__PURE__ */ C("div", { className: "figma-import-panel", children: [
    /* @__PURE__ */ d("h4", { children: "Import from Figma" }),
    /* @__PURE__ */ C("p", { className: "figma-import-hint", children: [
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
    /* @__PURE__ */ C("label", { children: [
      "Figma frame URL",
      /* @__PURE__ */ d(
        "input",
        {
          type: "text",
          value: i,
          onChange: (z) => s(z.target.value),
          placeholder: "https://www.figma.com/design/FILEKEY/Name?node-id=1-2"
        }
      )
    ] }),
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "figma-import-button",
        onClick: () => void A(),
        disabled: u || !i.trim(),
        children: "Preview zones"
      }
    ),
    /* @__PURE__ */ d(xo, { active: u || f, className: "figma-import-saving" }),
    a && a.zones.length > 0 && /* @__PURE__ */ C("div", { className: "figma-import-preview", children: [
      /* @__PURE__ */ C("p", { className: "figma-import-preview-meta", children: [
        "Frame ",
        /* @__PURE__ */ d("strong", { children: a.frameName }),
        a.canvasWidth != null && a.canvasHeight != null ? ` · ${a.canvasWidth}×${a.canvasHeight}` : null
      ] }),
      /* @__PURE__ */ d("ul", { className: "figma-import-zone-list", children: a.zones.map((z) => /* @__PURE__ */ C("li", { children: [
        /* @__PURE__ */ d("code", { children: z.zoneKey }),
        " — ",
        z.zoneType,
        z.zoneWidth != null && z.zoneHeight != null ? ` (${z.zoneWidth}×${z.zoneHeight})` : null
      ] }, z.id)) }),
      a.warnings.map((z) => /* @__PURE__ */ d("p", { className: "figma-import-warning", children: z }, z)),
      /* @__PURE__ */ C("label", { className: "figma-import-checkbox", children: [
        /* @__PURE__ */ d(
          "input",
          {
            type: "checkbox",
            checked: y,
            onChange: (z) => m(z.target.checked)
          }
        ),
        "Create as a new template (instead of replacing zones on this one)"
      ] }),
      y ? /* @__PURE__ */ C(at, { children: [
        /* @__PURE__ */ C("label", { children: [
          "New template name",
          /* @__PURE__ */ d(
            "input",
            {
              type: "text",
              value: h,
              onChange: (z) => b(z.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "figma-import-button figma-import-button-primary",
            onClick: () => void S(),
            disabled: f || !h.trim(),
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
const mb = ["Social", "Email", "Newsletter"];
function hb({
  template: e,
  onChange: t,
  compact: n = !1
}) {
  const r = e.channelType === "Social", o = gl(e.channelType), i = RE(e), s = (l) => {
    l !== e.channelType && t({
      channelType: l,
      ...sv(l)
    });
  }, a = (l) => {
    const u = $E(e.channelType, l);
    u && t(u);
  };
  return /* @__PURE__ */ C("div", { className: `template-properties-form${n ? " template-properties-form-compact" : ""}`, children: [
    /* @__PURE__ */ d("h4", { children: n ? "Template" : "Template properties" }),
    /* @__PURE__ */ C("label", { children: [
      "Template name",
      /* @__PURE__ */ d(
        "input",
        {
          value: e.templateName,
          onChange: (l) => t({ templateName: l.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ C("label", { children: [
      "Channel type",
      /* @__PURE__ */ d(
        "select",
        {
          value: e.channelType,
          onChange: (l) => s(l.target.value),
          children: mb.map((l) => /* @__PURE__ */ d("option", { value: l, children: l }, l))
        }
      )
    ] }),
    /* @__PURE__ */ C("div", { className: "template-dimensions-section", children: [
      /* @__PURE__ */ C("div", { className: "template-dimensions-heading", children: [
        /* @__PURE__ */ d("h5", { children: "Dimensions" }),
        /* @__PURE__ */ d("span", { className: "template-dimensions-summary", children: iv(e) })
      ] }),
      /* @__PURE__ */ C("label", { children: [
        "Size preset",
        /* @__PURE__ */ C("select", { value: i, onChange: (l) => a(l.target.value), children: [
          o.map((l) => /* @__PURE__ */ d("option", { value: l.id, children: l.label }, l.id)),
          /* @__PURE__ */ d("option", { value: "custom", children: "Custom" })
        ] })
      ] }),
      /* @__PURE__ */ C("div", { className: "template-dimension-fields", children: [
        /* @__PURE__ */ C("label", { children: [
          r ? "Width (px)" : "Email width (px)",
          /* @__PURE__ */ d(
            "input",
            {
              type: "number",
              min: 1,
              value: e.canvasWidth ?? "",
              onChange: (l) => t({
                canvasWidth: l.target.value ? Number(l.target.value) : void 0,
                formatPreset: rh(
                  e.channelType,
                  l.target.value ? Number(l.target.value) : void 0,
                  e.canvasHeight
                )
              })
            }
          )
        ] }),
        r ? /* @__PURE__ */ C("label", { children: [
          "Height (px)",
          /* @__PURE__ */ d(
            "input",
            {
              type: "number",
              min: 1,
              value: e.canvasHeight ?? "",
              onChange: (l) => t({
                canvasHeight: l.target.value ? Number(l.target.value) : void 0,
                formatPreset: rh(
                  e.channelType,
                  e.canvasWidth,
                  l.target.value ? Number(l.target.value) : void 0
                )
              })
            }
          )
        ] }) : /* @__PURE__ */ C("label", { children: [
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
    e.brandKitId && /* @__PURE__ */ C("p", { className: "template-properties-meta", children: [
      "Brand kit: ",
      e.brandKitId
    ] })
  ] });
}
function rh(e, t, n) {
  return e === "Social" && t != null && n != null ? `${t}x${n}` : e === "Email" && t != null ? `${t}px email` : e === "Newsletter" && t != null ? `${t}px newsletter` : "";
}
function gb({ template: e, onAssetsChange: t }) {
  const n = ff(), { resultIds: r, fullText: o, hasSearchIntegration: i } = Kv(), [s, a] = E.useState([]), [l, u] = E.useState([]), [c, f] = E.useState(!1), [p, v] = E.useState(!1), [k, T] = E.useState(null), [L, y] = E.useState(null), m = E.useMemo(
    () => new Set(s.map((S) => S.id).filter(Boolean)),
    [s]
  ), h = E.useCallback(async () => {
    if (!e.id || e.id.startsWith("temp-")) {
      a([]);
      return;
    }
    f(!0), y(null);
    try {
      const S = await ie.getTemplateAllowedAssets(e.id);
      a(S), t(S.map((z) => z.id).filter(Boolean));
    } catch (S) {
      a([]), y(S instanceof Error ? S.message : "Could not load template assets.");
    } finally {
      f(!1);
    }
  }, [t, e.id]);
  E.useEffect(() => {
    h();
  }, [h]), E.useEffect(() => {
    if (r.length === 0) {
      u([]);
      return;
    }
    let S = !1;
    return v(!0), ie.getAssetsByIds(r).then((z) => {
      S || u(z);
    }).catch(() => {
      S || u([]);
    }).finally(() => {
      S || v(!1);
    }), () => {
      S = !0;
    };
  }, [r]);
  const b = async (S) => {
    var z, j;
    if (!e.id || e.id.startsWith("temp-") || !S.id) {
      y("Save the template first before linking assets.");
      return;
    }
    T(S.id), y(null);
    try {
      if (!await ie.addAllowedAssetToTemplate(e.id, S.id))
        throw new Error(`Could not link ${S.name} to this template.`);
      await h(), (z = n.notifier) == null || z.notifySuccess(`Added "${S.name}" to template assets.`);
    } catch (_) {
      const D = _ instanceof Error ? _.message : "Failed to link asset to template.";
      y(D), (j = n.notifier) == null || j.notifyError(D);
    } finally {
      T(null);
    }
  }, A = async (S) => {
    var z, j;
    if (!(!e.id || !S.id)) {
      T(S.id), y(null);
      try {
        await ie.removeAllowedAssetFromTemplate(e.id, S.id), await h(), (z = n.notifier) == null || z.notifySuccess(`Removed "${S.name}" from template assets.`);
      } catch (_) {
        const D = _ instanceof Error ? _.message : "Failed to remove asset from template.";
        y(D), (j = n.notifier) == null || j.notifyError(D);
      } finally {
        T(null);
      }
    }
  }, N = !e.id || e.id.startsWith("temp-");
  return /* @__PURE__ */ C("div", { className: "template-zone-asset-collection template-allowed-assets", children: [
    /* @__PURE__ */ d("h4", { className: "template-zone-asset-collection-title", children: "Template image library" }),
    /* @__PURE__ */ C("p", { className: "template-zone-asset-collection-intro", children: [
      "Link ",
      /* @__PURE__ */ d("strong", { children: "M.Asset" }),
      " entities on the template via ",
      /* @__PURE__ */ d("code", { children: "templateToAllowedAsset" }),
      ". Every image zone on marketing assets built from this template can pick from these assets. Use the Content Hub search on this page to find images, then click ",
      /* @__PURE__ */ d("strong", { children: "Add" }),
      "."
    ] }),
    N && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-hint", children: "Save the template first so it has a persisted entity ID, then add assets from search." }),
    /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-section", children: [
      /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-section-header", children: [
        /* @__PURE__ */ C("h5", { children: [
          "On template (",
          s.length,
          ")"
        ] }),
        c && /* @__PURE__ */ d("span", { className: "template-zone-asset-collection-status", children: "Loading..." })
      ] }),
      /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-grid", children: [
        s.map((S) => /* @__PURE__ */ C("div", { className: "template-zone-asset-card", children: [
          /* @__PURE__ */ d("img", { src: S.thumbnailUrl, alt: S.name }),
          /* @__PURE__ */ d("span", { children: S.name }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "template-zone-asset-remove",
              disabled: k === S.id || N,
              onClick: () => void A(S),
              children: "Remove"
            }
          )
        ] }, S.id || S.thumbnailUrl)),
        !c && s.length === 0 && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-empty", children: "No assets linked to this template yet." })
      ] })
    ] }),
    /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-section", children: [
      /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-section-header", children: [
        /* @__PURE__ */ d("h5", { children: "From Content Hub search" }),
        p && /* @__PURE__ */ d("span", { className: "template-zone-asset-collection-status", children: "Loading..." })
      ] }),
      !i && /* @__PURE__ */ C("p", { className: "template-zone-asset-collection-hint", children: [
        "Add a Search page component to this page and set ",
        /* @__PURE__ */ d("code", { children: "searchIdentifier" }),
        " in the external component Configuration."
      ] }),
      i && /* @__PURE__ */ C("p", { className: "template-zone-asset-collection-hint", children: [
        "Use the search component on this page",
        o ? ` (current query: "${o}")` : "",
        ", then click",
        " ",
        /* @__PURE__ */ d("strong", { children: "Add" }),
        " to link an asset to the template."
      ] }),
      /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-grid", children: [
        l.map((S) => {
          const z = S.id ? m.has(S.id) : !1;
          return /* @__PURE__ */ C("div", { className: "template-zone-asset-card", children: [
            /* @__PURE__ */ d("img", { src: S.thumbnailUrl, alt: S.name }),
            /* @__PURE__ */ d("span", { children: S.name }),
            /* @__PURE__ */ d(
              "button",
              {
                type: "button",
                className: "template-zone-asset-add",
                disabled: z || k === S.id || !S.id || N,
                onClick: () => void b(S),
                children: z ? "Linked" : "Add"
              }
            )
          ] }, S.id || S.thumbnailUrl);
        }),
        i && !p && l.length === 0 && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-empty", children: "Run a search on this page to see assets you can link." })
      ] })
    ] }),
    L && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-error", children: L })
  ] });
}
function yb({ zoneLabel: e, onDelete: t, className: n = "" }) {
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
const vb = ["Text", "Heading", "Image", "CTA Button", "Logo", "Background Color", "Divider", "HTML"], wb = 800;
function Tb({
  template: e,
  onSaved: t,
  pendingFigmaImport: n = null,
  onPendingFigmaImportApplied: r
}) {
  var M;
  const [o, i] = E.useState(e), [s, a] = E.useState(((M = o.zones[0]) == null ? void 0 : M.id) ?? null), [l, u] = E.useState("saved"), [c, f] = E.useState(null), p = E.useRef(e.zones), v = E.useRef(o), k = E.useRef(null), T = E.useRef(0), L = E.useRef(!0), y = E.useRef(!1);
  v.current = o;
  const m = E.useCallback(
    async (w) => {
      const P = ++T.current;
      u("saving"), f(null);
      try {
        const U = await ie.saveTemplate(w, p.current);
        if (P !== T.current)
          return;
        p.current = U.zones, L.current = !0, i(U), t == null || t(U), u("saved");
      } catch (U) {
        if (P !== T.current)
          return;
        f(U instanceof Error ? U.message : "Failed to save template zones."), u("error");
      }
    },
    [t]
  );
  E.useEffect(() => {
    var w;
    !n || n.zones.length === 0 || (i((P) => ({
      ...P,
      canvasWidth: n.canvasWidth ?? P.canvasWidth,
      canvasHeight: n.canvasHeight ?? P.canvasHeight,
      zones: n.zones.map((U, V) => ({
        ...U,
        sortOrder: V
      }))
    })), a(((w = n.zones[0]) == null ? void 0 : w.id) ?? null), u("pending"), r == null || r());
  }, [n, r]), E.useEffect(() => {
    L.current = !0, p.current = e.zones, i(e), a((w) => {
      var P;
      return w && e.zones.some((U) => U.id === w) ? w : ((P = e.zones[0]) == null ? void 0 : P.id) ?? null;
    }), f(null), u("saved");
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
    if (!y.current) {
      y.current = !0;
      return;
    }
    if (L.current) {
      L.current = !1;
      return;
    }
    return u((w) => w === "saving" ? w : "pending"), k.current != null && window.clearTimeout(k.current), k.current = window.setTimeout(() => {
      m(v.current);
    }, wb), () => {
      k.current != null && window.clearTimeout(k.current);
    };
  }, [o, m]);
  const h = o.zones.find((w) => w.id === s), [b, A] = E.useState(null), [N, S] = E.useState(null), z = [...o.zones].sort((w, P) => w.sortOrder - P.sortOrder), j = (w, P) => {
    w !== P && i((U) => {
      const V = [...U.zones].sort((dt, zo) => dt.sortOrder - zo.sortOrder), Q = V.findIndex((dt) => dt.id === w), Re = V.findIndex((dt) => dt.id === P);
      if (Q < 0 || Re < 0)
        return U;
      const $e = [...V], [Me] = $e.splice(Q, 1);
      return $e.splice(Re, 0, Me), {
        ...U,
        zones: $e.map((dt, zo) => ({ ...dt, sortOrder: zo }))
      };
    });
  }, _ = (w) => {
    i((P) => ({ ...P, ...w }));
  }, D = (w, P) => {
    i((U) => ({
      ...U,
      zones: U.zones.map((V) => {
        if (V.id !== w)
          return V;
        const Q = { ...V, ...P };
        for (const Re of Object.keys(P))
          P[Re] === void 0 && delete Q[Re];
        return Q;
      })
    }));
  }, H = (w) => {
    if (w.trim() === "")
      return;
    const P = Number(w);
    return Number.isNaN(P) ? void 0 : P;
  }, G = () => {
    const w = new Set(o.zones.map((Q) => Q.zoneKey));
    let P = o.zones.length + 1, U = `newZone${P}`;
    for (; w.has(U); )
      P += 1, U = `newZone${P}`;
    const V = {
      id: `temp-${Date.now()}`,
      zoneKey: U,
      zoneLabel: "New zone",
      zoneType: "Text",
      isLocked: !1,
      sortOrder: o.zones.length
    };
    i((Q) => ({ ...Q, zones: [...Q.zones, V] })), a(V.id);
  }, ze = (w) => {
    var Re, $e;
    const P = [...o.zones].sort((Me, dt) => Me.sortOrder - dt.sortOrder), U = P.findIndex((Me) => Me.id === w), V = P.filter((Me) => Me.id !== w).map((Me, dt) => ({ ...Me, sortOrder: dt })), Q = ((Re = V[U]) == null ? void 0 : Re.id) ?? (($e = V[U - 1]) == null ? void 0 : $e.id) ?? null;
    i((Me) => ({ ...Me, zones: V })), a(Q);
  }, Je = () => {
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
    i((P) => ({ ...P, zones: w })), a(w[0].id);
  }, Ee = $c(l === "pending", "pending"), W = $c(l === "saving", "active"), R = l === "pending" ? Ee : l === "saving" ? W : l === "error" ? c ?? "Could not save template." : "All changes saved automatically.";
  return /* @__PURE__ */ d(
    Ca,
    {
      structureTitle: "Template structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ C("div", { className: "template-admin-structure", children: [
        /* @__PURE__ */ d(hb, { template: o, onChange: _, compact: !0 }),
        /* @__PURE__ */ d(
          gb,
          {
            template: o,
            onAssetsChange: (w) => i((P) => {
              const U = P.allowedAssetIds ?? [];
              return U.length === w.length && U.every((V, Q) => V === w[Q]) ? P : { ...P, allowedAssetIds: w };
            })
          }
        ),
        /* @__PURE__ */ C("div", { className: "template-admin-structure-grid", children: [
          /* @__PURE__ */ C("div", { className: "template-admin-zone-list", children: [
            /* @__PURE__ */ d("h4", { children: "Zones" }),
            /* @__PURE__ */ d("p", { className: "zone-list-hint", children: "Drag zones to reorder" }),
            z.map((w) => /* @__PURE__ */ C(
              "div",
              {
                tabIndex: 0,
                draggable: !0,
                className: `zone-list-item${w.id === s ? " zone-list-item-active" : ""}${w.id === b ? " zone-list-item-dragging" : ""}${w.id === N ? " zone-list-item-drag-over" : ""}`,
                onClick: () => a(w.id),
                onKeyDown: (P) => {
                  (P.key === "Enter" || P.key === " ") && (P.preventDefault(), a(w.id));
                },
                onDragStart: (P) => {
                  if (P.target.closest(".zone-list-delete")) {
                    P.preventDefault();
                    return;
                  }
                  P.dataTransfer.effectAllowed = "move", P.dataTransfer.setData("text/plain", w.id), A(w.id);
                },
                onDragOver: (P) => {
                  P.preventDefault(), P.dataTransfer.dropEffect = "move", N !== w.id && S(w.id);
                },
                onDragLeave: () => {
                  S((P) => P === w.id ? null : P);
                },
                onDrop: (P) => {
                  P.preventDefault();
                  const U = P.dataTransfer.getData("text/plain");
                  U && j(U, w.id), A(null), S(null);
                },
                onDragEnd: () => {
                  A(null), S(null);
                },
                children: [
                  /* @__PURE__ */ d("span", { className: "zone-list-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }),
                  /* @__PURE__ */ C("span", { className: "zone-list-item-content", children: [
                    /* @__PURE__ */ d("span", { children: w.zoneLabel || w.zoneKey }),
                    /* @__PURE__ */ d("span", { className: "zone-list-item-type", children: w.zoneType === "Heading" ? `Heading · ${w.headingLevel ?? Nn}` : w.zoneType }),
                    w.isLocked && /* @__PURE__ */ d("span", { className: "zone-list-item-lock", children: "Locked" })
                  ] }),
                  /* @__PURE__ */ d(
                    yb,
                    {
                      zoneLabel: w.zoneLabel || w.zoneKey,
                      onDelete: () => ze(w.id)
                    }
                  )
                ]
              },
              w.id
            )),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-list-add", onClick: G, children: "+ Add zone" }),
            o.zones.length === 0 && /* @__PURE__ */ d("button", { type: "button", className: "zone-list-add zone-list-starter", onClick: Je, children: "Start with email template zones" })
          ] }),
          /* @__PURE__ */ d("div", { className: "template-admin-properties", children: h ? /* @__PURE__ */ C(at, { children: [
            /* @__PURE__ */ d("h4", { children: "Zone properties" }),
            /* @__PURE__ */ C("div", { children: [
              /* @__PURE__ */ C("label", { children: [
                "Label",
                /* @__PURE__ */ d(
                  "input",
                  {
                    value: h.zoneLabel,
                    onChange: (w) => D(h.id, { zoneLabel: w.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ C("label", { children: [
                "Zone key",
                /* @__PURE__ */ d(
                  "input",
                  {
                    value: h.zoneKey,
                    onChange: (w) => D(h.id, { zoneKey: w.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ C("label", { children: [
                "Type",
                /* @__PURE__ */ d(
                  "select",
                  {
                    value: h.zoneType,
                    onChange: (w) => {
                      D(
                        h.id,
                        RA(h, w.target.value)
                      );
                    },
                    children: vb.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                  }
                )
              ] }),
              /* @__PURE__ */ C("label", { className: "checkbox-label", children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "checkbox",
                    checked: h.isLocked,
                    onChange: (w) => D(h.id, { isLocked: w.target.checked })
                  }
                ),
                "Locked (brand element, end user cannot edit)"
              ] }),
              h.zoneType === "Heading" && /* @__PURE__ */ C(at, { children: [
                /* @__PURE__ */ C("label", { children: [
                  "Heading level",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: h.headingLevel ?? Nn,
                      onChange: (w) => D(h.id, {
                        headingLevel: w.target.value
                      }),
                      children: dv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Max characters",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.maxCharacterCount ?? "",
                      onChange: (w) => D(h.id, { maxCharacterCount: H(w.target.value) })
                    }
                  )
                ] })
              ] }),
              h.zoneType === "Text" && /* @__PURE__ */ C("label", { children: [
                "Max characters",
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "number",
                    value: h.maxCharacterCount ?? "",
                    onChange: (w) => D(h.id, { maxCharacterCount: H(w.target.value) })
                  }
                )
              ] }),
              h.zoneType === "Image" && /* @__PURE__ */ C("label", { children: [
                "Aspect ratio lock",
                /* @__PURE__ */ d(
                  "input",
                  {
                    placeholder: "e.g. 1:1",
                    value: h.aspectRatioLock ?? "",
                    onChange: (w) => {
                      const P = w.target.value.trim();
                      D(h.id, { aspectRatioLock: P || void 0 });
                    }
                  }
                )
              ] }),
              h.zoneType === "HTML" && /* @__PURE__ */ C(at, { children: [
                /* @__PURE__ */ C("label", { children: [
                  "Default HTML content",
                  /* @__PURE__ */ d(
                    "textarea",
                    {
                      value: h.htmlDefaultContent ?? "",
                      onChange: (w) => D(h.id, { htmlDefaultContent: w.target.value })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { className: "checkbox-label", children: [
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "checkbox",
                      checked: h.htmlAllowUserOverride ?? !1,
                      onChange: (w) => D(h.id, { htmlAllowUserOverride: w.target.checked })
                    }
                  ),
                  "Allow end user to edit this HTML zone"
                ] })
              ] }),
              o.channelType === "Social" && /* @__PURE__ */ C("div", { className: "position-fields", children: [
                /* @__PURE__ */ C("label", { children: [
                  "X",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.positionX ?? "",
                      onChange: (w) => D(h.id, { positionX: H(w.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Y",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.positionY ?? "",
                      onChange: (w) => D(h.id, { positionY: H(w.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Width",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.zoneWidth ?? "",
                      onChange: (w) => D(h.id, { zoneWidth: H(w.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Height",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.zoneHeight ?? "",
                      onChange: (w) => D(h.id, { zoneHeight: H(w.target.value) })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "zone-layout-fields asset-zone-layout-fields", children: /* @__PURE__ */ C("div", { className: "asset-zone-layout-grid", children: [
                /* @__PURE__ */ C("label", { children: [
                  "Alignment",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: h.contentAlignment ?? xr,
                      onChange: (w) => D(h.id, {
                        contentAlignment: w.target.value
                      }),
                      children: fv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Offset (px)",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      value: h.offsetPx ?? 0,
                      onChange: (w) => D(h.id, { offsetPx: Math.max(0, Number(w.target.value) || 0) })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Direction",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: h.offsetDirection ?? yl,
                      onChange: (w) => D(h.id, {
                        offsetDirection: w.target.value
                      }),
                      children: pv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Sort order",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      value: h.sortOrder ?? 0,
                      onChange: (w) => D(h.id, { sortOrder: Math.max(0, Number(w.target.value) || 0) })
                    }
                  )
                ] })
              ] }) })
            ] }, `${h.id}-${h.zoneType}`),
            o.channelType !== "Social" && /* @__PURE__ */ d("p", { className: "zone-sort-hint", children: "You can also drag zones in the list to reorder." }),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-remove", onClick: () => ze(h.id), children: "Remove zone" })
          ] }) : /* @__PURE__ */ d("p", { className: "no-zone-selected", children: "Select a zone to edit its properties, or add a new one." }) })
        ] }),
        /* @__PURE__ */ d("div", { className: "template-admin-structure-actions", children: /* @__PURE__ */ d(
          "p",
          {
            className: `template-admin-autosave-status${l === "error" ? " template-admin-autosave-status-error" : l === "saved" ? " template-admin-autosave-status-saved" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: R
          }
        ) })
      ] }),
      preview: /* @__PURE__ */ d(pf, { template: o, layoutMode: o.channelType === "Social" ? "canvas" : "stacked" })
    }
  );
}
function Sb({ template: e, onDuplicated: t }) {
  const n = oC(e.channelType), [r, o] = E.useState(n[0] ?? "Social"), [i, s] = E.useState(`${e.templateName} (${n[0] ?? "Social"})`), [a, l] = E.useState(!1), [u, c] = E.useState(null), [f, p] = E.useState(null);
  if (n.length === 0)
    return null;
  const v = (T) => {
    o(T), s(`${e.templateName} (${T})`);
  }, k = async () => {
    l(!0), p(null), c(null);
    try {
      const T = await ie.duplicateTemplate(e.id, r, i);
      c(
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
  return /* @__PURE__ */ C("div", { className: "template-duplicate-panel", children: [
    /* @__PURE__ */ d("h4", { children: "Duplicate template" }),
    /* @__PURE__ */ d("p", { className: "template-duplicate-hint", children: "Copy this template's zones into a new format. The new template is linked to the same brand kit and appears in the Asset builder template list." }),
    /* @__PURE__ */ C("label", { children: [
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
    /* @__PURE__ */ C("label", { children: [
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
    /* @__PURE__ */ d(xo, { active: a, className: "template-duplicate-saving" }),
    u && /* @__PURE__ */ d("p", { className: "template-duplicate-message", children: u }),
    f && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-duplicate-error", children: f })
  ] });
}
function kb({
  template: e,
  onTemplateSaved: t,
  onTemplatesChanged: n,
  figmaImportApiUrl: r,
  figmaImportApiToken: o
}) {
  const i = e.zones.length > 0, [s, a] = E.useState(null);
  return /* @__PURE__ */ C("div", { className: "template-setup-panel", children: [
    !i && /* @__PURE__ */ C("div", { className: "template-setup-banner", children: [
      /* @__PURE__ */ d("h3", { children: "Edit template" }),
      /* @__PURE__ */ C("p", { children: [
        "Template ",
        /* @__PURE__ */ d("strong", { children: e.templateName }),
        " (",
        e.id,
        ") has no zones yet. Set template properties and add zones on the left, then save. The preview updates on the right."
      ] }),
      /* @__PURE__ */ d("p", { className: "template-setup-hint", children: "Recommended email zones: Logo (locked), Heading (H1/H2), Hero image, Body copy, CTA button. Or import a Figma frame below." })
    ] }),
    i && /* @__PURE__ */ d("div", { className: "template-setup-banner template-setup-banner-info", children: /* @__PURE__ */ C("p", { children: [
      "Editing ",
      /* @__PURE__ */ d("strong", { children: e.templateName }),
      ". Update template properties and zones on the left; preview on the right. Changes apply to all marketing assets using this template."
    ] }) }),
    /* @__PURE__ */ d(
      pb,
      {
        template: e,
        figmaImportApiUrl: r,
        figmaImportApiToken: o,
        onApplyToCurrent: a,
        onCreatedTemplate: (l) => {
          t(l), n == null || n();
        }
      }
    ),
    /* @__PURE__ */ d(
      Sb,
      {
        template: e,
        onDuplicated: (l) => {
          t(l), n == null || n();
        }
      }
    ),
    /* @__PURE__ */ d(
      Tb,
      {
        template: e,
        onSaved: t,
        pendingFigmaImport: s,
        onPendingFigmaImportApplied: () => a(null)
      }
    )
  ] });
}
function Eb({
  client: e,
  entity: t,
  options: n,
  config: r,
  contentHubApi: o,
  searchIdentifier: i,
  selectionPoolIdentifier: s
}) {
  const [a, l] = E.useState(null), [u, c] = E.useState(null), [f, p] = E.useState(null), [v, k] = E.useState(!0), [T, L] = E.useState(null), [y, m] = E.useState("asset"), [h, b] = E.useState(0), [A, N] = E.useState(!1), [S, z] = E.useState(null), j = (w) => {
    m(w), !(w !== "asset" || !(u != null && u.id)) && ie.getTemplate(u.id).then((P) => c(P)).catch((P) => {
      Un(
        "template reload",
        P,
        `Could not refresh template ${u.id} when switching to the asset tab.`
      );
    });
  };
  E.useEffect(() => {
    fC(e ?? null);
  }, [e]), E.useEffect(() => {
    let w = !1;
    async function P() {
      const U = await aN(
        e,
        n ?? (e == null ? void 0 : e.options),
        t,
        r
      );
      w || (l(U), U.allowTemplateZoneEditing && Z("allowTemplateZoneEditing", "Template zone editing enabled from Configuration"));
    }
    return P(), () => {
      w = !0;
    };
  }, [e, r, t, n]), E.useEffect(() => {
    a != null && a.contentHubProxyBase && pC(a.contentHubProxyBase);
  }, [a == null ? void 0 : a.contentHubProxyBase]), E.useEffect(() => {
    if (!a)
      return;
    const w = a;
    let P = !1;
    async function U() {
      if (k(!0), L(null), $k(), !w.templateId) {
        const V = Bk(t, r);
        Un("templateId", V), L(V), k(!1);
        return;
      }
      if (!w.marketingAssetId) {
        const V = "marketingAssetId could not be resolved from context.entity.systemProperties.id.";
        Un("marketingAssetId", V), L(V), k(!1);
        return;
      }
      Z("templateId", `Using template ${w.templateId}`), Z("marketingAssetId", `Using marketing asset ${w.marketingAssetId}`);
      try {
        const V = await ie.getTemplate(w.templateId);
        if (P)
          return;
        c(V);
        const Q = Cm(w, V.channelType);
        if (Q === "admin") {
          p(null), wm({
            builderMode: Q,
            templateId: V.id,
            templateName: V.templateName,
            marketingAssetId: w.marketingAssetId,
            brandKitId: w.brandKitId ?? V.brandKitId,
            channelType: V.channelType,
            zoneCount: V.zones.length
          });
          return;
        }
        const Re = await ie.getMarketingAsset(w.marketingAssetId);
        if (P)
          return;
        p(Re);
        const $e = w.brandKitId ?? V.brandKitId;
        wm({
          builderMode: Q,
          templateId: V.id,
          templateName: V.templateName,
          marketingAssetId: Re.id,
          brandKitId: $e,
          channelType: V.channelType,
          zoneCount: V.zones.length,
          zoneValueCount: Re.zoneValues.length
        });
      } catch (V) {
        if (P)
          return;
        Un("load", V, "Marketing builder could not load required entities."), L(V instanceof Error ? V.message : "Failed to load marketing builder data.");
      } finally {
        P || k(!1);
      }
    }
    return U(), () => {
      P = !0;
    };
  }, [r, t, a]);
  const _ = Cm(a ?? {}, u == null ? void 0 : u.channelType), D = (a == null ? void 0 : a.brandKitId) ?? (u == null ? void 0 : u.brandKitId), H = (a == null ? void 0 : a.userHasOverridePermission) ?? !1, G = i ?? (a == null ? void 0 : a.searchIdentifier), ze = s ?? (a == null ? void 0 : a.selectionPoolIdentifier), Je = {
    searchIdentifier: G,
    selectionPoolIdentifier: ze,
    search: o == null ? void 0 : o.search,
    selection: o == null ? void 0 : o.selection,
    notifier: o == null ? void 0 : o.notifier
  };
  E.useEffect(() => {
    u && u.zones.length === 0 && m("template");
  }, [u == null ? void 0 : u.id, u == null ? void 0 : u.zones.length]);
  const Ee = () => {
    b((w) => w + 1);
  }, W = async (w) => {
    if (c(w), a && l({ ...a, templateId: w.id }), f) {
      const P = await ie.getMarketingAsset(f.id);
      p(P);
    }
    Ee();
  }, R = async () => {
    if (u) {
      N(!0), z(null);
      try {
        const w = await QN(
          u,
          a == null ? void 0 : a.designerDocumentProperty
        );
        c(w), Ee();
      } catch (w) {
        z(
          w instanceof Error ? w.message : "Could not create canvas template."
        );
      } finally {
        N(!1);
      }
    }
  }, M = qN(u);
  return !a || v ? /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading marketing builder..." }) : T ? /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: T }) : u ? D ? /* @__PURE__ */ d(sN, { value: Je, children: /* @__PURE__ */ d(iN, { brandKitId: D, children: /* @__PURE__ */ C("div", { className: "marketing-builder", children: [
    (_ === "admin" || y === "template") && /* @__PURE__ */ C(at, { children: [
      _ !== "admin" && /* @__PURE__ */ d(
        xs,
        {
          activeTab: y,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: j
        }
      ),
      _ === "admin" && /* @__PURE__ */ d(
        xs,
        {
          activeTab: "template",
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: () => {
          },
          showAssetTab: !1
        }
      ),
      M ? /* @__PURE__ */ d(
        JN,
        {
          template: u,
          designerDocumentProperty: a.designerDocumentProperty,
          onTemplateSaved: (w) => {
            c(w), Ee();
          }
        }
      ) : /* @__PURE__ */ C(at, { children: [
        /* @__PURE__ */ C("div", { className: "designer-create-banner", children: [
          /* @__PURE__ */ d("p", { children: "This template uses the zone builder. You can also create a canvas designer template (stored as designerDocumentJson on EPAM.BuilderTemplate)." }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "chd-btn",
              disabled: A,
              onClick: () => void R(),
              children: A ? "Creating…" : "Create canvas template"
            }
          ),
          S ? /* @__PURE__ */ d("div", { className: "marketing-builder-error", children: S }) : null
        ] }),
        /* @__PURE__ */ d(
          kb,
          {
            template: u,
            figmaImportApiUrl: a.figmaImportApiUrl,
            figmaImportApiToken: a.figmaImportApiToken,
            onTemplateSaved: (w) => {
              c(w), Ee();
            },
            onTemplatesChanged: Ee
          }
        )
      ] })
    ] }),
    _ === "social" && f && y === "asset" && /* @__PURE__ */ C(at, { children: [
      /* @__PURE__ */ d(
        xs,
        {
          activeTab: y,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: j
        }
      ),
      /* @__PURE__ */ d(
        Nu,
        {
          brandKitId: D,
          currentTemplateId: u.id,
          marketingAssetId: f.id,
          refreshKey: h,
          onTemplateChange: W
        }
      ),
      M ? /* @__PURE__ */ d(
        eh,
        {
          template: u,
          marketingAsset: f,
          designerDocumentProperty: a.designerDocumentProperty,
          designerInstanceProperty: a.designerInstanceProperty,
          onSaved: p
        }
      ) : /* @__PURE__ */ d(
        rb,
        {
          template: u,
          marketingAsset: f,
          userHasOverridePermission: H,
          html2canvasCdnUrl: a.html2canvasCdnUrl
        }
      )
    ] }),
    _ === "social" && !f && /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Marketing asset could not be loaded for the social builder." }),
    _ === "email" && f && y === "asset" && /* @__PURE__ */ C(at, { children: [
      /* @__PURE__ */ d(
        xs,
        {
          activeTab: y,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: j
        }
      ),
      M ? /* @__PURE__ */ C(at, { children: [
        /* @__PURE__ */ d(
          Nu,
          {
            brandKitId: D,
            currentTemplateId: u.id,
            marketingAssetId: f.id,
            refreshKey: h,
            onTemplateChange: W
          }
        ),
        /* @__PURE__ */ d(
          eh,
          {
            template: u,
            marketingAsset: f,
            designerDocumentProperty: a.designerDocumentProperty,
            designerInstanceProperty: a.designerInstanceProperty,
            onSaved: p
          }
        )
      ] }) : u.zones.length > 0 ? /* @__PURE__ */ C(at, { children: [
        /* @__PURE__ */ d(
          Nu,
          {
            brandKitId: D,
            currentTemplateId: u.id,
            marketingAssetId: f.id,
            refreshKey: h,
            onTemplateChange: W
          }
        ),
        /* @__PURE__ */ d(
          bN,
          {
            template: u,
            marketingAsset: f,
            userHasOverridePermission: H,
            renderEmailApiUrl: a.renderEmailApiUrl
          }
        )
      ] }) : /* @__PURE__ */ C("div", { className: "marketing-builder-status template-empty-message", children: [
        "Template ",
        /* @__PURE__ */ d("strong", { children: u.templateName }),
        " has no zones yet. Open the",
        " ",
        /* @__PURE__ */ d("strong", { children: "Edit template" }),
        " tab to add zones, or create a canvas template."
      ] })
    ] })
  ] }) }) }) : /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "brandKitId is not set on this component and could not be resolved from the template. Set brandKitId in Manage > Pages > this detail page > External component > Configuration, or link templateToBrandKit on the template." }) : /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Template could not be resolved." });
}
function Ab(e) {
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
function Cb(e) {
  const t = gy(e);
  return ae("startup", "CHMarketingBuilder initialised"), {
    async render(n) {
      var i, s, a;
      const r = n.config ? typeof n.config == "string" ? "json-string" : Object.keys(n.config).join(", ") || "(empty object)" : "(none)";
      ae(
        "context",
        `entityId=${((s = (i = n.entity) == null ? void 0 : i.systemProperties) == null ? void 0 : s.id) ?? ((a = n.options) == null ? void 0 : a.entityId) ?? "n/a"}, config=${r}`
      );
      const o = Ab(n.config);
      t.render(
        /* @__PURE__ */ d(Lk, { theme: n.theme, children: /* @__PURE__ */ d(
          Eb,
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
  Cb as default
};
