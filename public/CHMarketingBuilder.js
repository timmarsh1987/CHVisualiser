(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".marketing-builder{--mb-primary: #00a651;--mb-primary-hover: #1db86a;--mb-primary-active: #008a44;--mb-primary-soft: #e6f7ed;--mb-primary-border: #8fd4a8;--mb-accent: #00a651;--mb-text: #000000;--mb-muted: #6b716e;--mb-background: #f4f7f5;--mb-surface: #ffffff;--mb-border: #e2e8e4;--mb-font: Arial, Helvetica, sans-serif;font-family:var(--mb-font);color:var(--mb-text)}.marketing-builder-status{padding:16px;font-size:14px;color:#555}.marketing-builder-error{color:#b71c1c}.email-builder-editor{max-width:none;margin:0;border:none;padding:0;background:transparent}.builder-split{display:flex;gap:16px;align-items:stretch;min-height:72vh}.builder-split-panel{flex:1 1 50%;min-width:0;display:flex;flex-direction:column;border:1px solid #e0e0e0;border-radius:6px;background:#fff;overflow:hidden}.builder-split-heading{margin:0;padding:12px 16px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;border-bottom:1px solid #ececec;background:#fafafa}.builder-split-structure-body,.builder-split-preview-body{flex:1;min-height:0;display:flex;flex-direction:column}.builder-split-structure-body{overflow:auto;padding:16px}.builder-split-preview-body{padding:16px;background:var(--mb-background)}.template-admin-structure{display:flex;flex-direction:column;gap:16px;min-height:100%}.template-admin-structure-grid{display:grid;grid-template-columns:minmax(180px,220px) minmax(0,1fr);gap:16px;align-items:start}.template-admin-structure-actions{margin-top:auto;padding-top:12px;border-top:1px solid #ececec}.template-admin-autosave-status{margin:0;font-size:12px;color:#666}.template-admin-autosave-status-saved{color:#2e7d32}.template-admin-autosave-status:not(.template-admin-autosave-status-saved):not(.template-admin-autosave-status-error){color:var(--mb-primary, #00755f);font-style:italic}.template-admin-autosave-status-error{color:#c62828}.saving-status-message{margin:8px 0 0;font-size:12px;line-height:1.45;color:var(--mb-primary, #00755f);font-style:italic;animation:saving-status-fade .35s ease}@keyframes saving-status-fade{0%{opacity:0}to{opacity:1}}.template-properties-form{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-properties-form h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-properties-form label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-properties-form input,.template-properties-form select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-properties-meta{margin:0;font-size:11px;color:#888}.template-dimensions-section{margin-top:4px;padding-top:12px;border-top:1px solid #ececec}.template-dimensions-heading{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:10px}.template-dimensions-heading h5{margin:0;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#666}.template-dimensions-summary{font-size:11px;font-weight:600;color:var(--mb-primary, #00755f);white-space:nowrap}.template-dimension-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.template-dimensions-hint{margin:0 0 4px;font-size:11px;line-height:1.4;color:#888}.live-preview-canvas-wrap,.live-preview-email-wrap{display:flex;flex-direction:column;gap:8px;height:100%}.live-preview-dimensions-badge{margin:0;align-self:center;padding:4px 10px;border-radius:999px;background:var(--mb-primary-soft, #e4f7f4);color:var(--mb-primary, #00755f);font-size:11px;font-weight:600;letter-spacing:.02em}.template-admin-preview-canvas-fill{flex:1;min-height:100%;margin:0}.live-preview-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text,.live-preview-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text{font-size:16px;line-height:1.5}.live-preview-canvas .zone-text-empty:empty:before,.live-preview-canvas .zone-heading.zone-text-empty:empty:before{color:var(--mb-muted, #717171);font-style:italic}.template-admin-preview-empty{margin:0;padding:24px;text-align:center;color:#888;font-size:13px}.email-builder-structure{display:flex;flex-direction:column;gap:12px}.email-builder-override-structure{display:flex;flex-direction:column;gap:12px;min-height:100%}.email-builder-override-structure .raw-html-editor{flex:1;min-height:420px}.email-builder-zone-row{margin-bottom:12px}.zone-stacked{min-height:48px}.zone-stacked.zone-image{min-height:180px}.asset-zone-structure-content .zone-logo{padding:8px 0}.zone-logo-placeholder{display:inline-flex;align-items:center;justify-content:center;min-width:120px;min-height:48px;padding:10px 20px;border:1px solid var(--mb-border);border-radius:4px;background:var(--mb-surface);color:var(--mb-muted);font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.logo-picker{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.logo-picker-compact{gap:8px}.logo-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.logo-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.logo-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.logo-picker-preview{display:flex;align-items:center;justify-content:center;min-height:56px;padding:8px;border-radius:4px;background:#f7f7f7}.logo-picker-image{display:block;max-width:100%;max-height:48px;width:auto;height:auto;object-fit:contain}.image-picker{display:flex;flex-direction:column;gap:10px}.image-picker-compact .image-picker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.image-picker-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.image-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.image-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.image-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.image-picker-preview{display:flex;align-items:center;justify-content:center;min-height:72px;padding:8px;border-radius:4px;background:#f7f7f7;overflow:hidden}.image-picker-image{max-width:100%;max-height:72px;object-fit:contain}.image-picker-label{font-size:11px;color:#424242;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.image-picker-hint,.image-picker-loading,.image-picker-error{font-size:12px;color:#666}.image-picker-error{color:#c62828}.image-picker-hint,.image-picker-loading{margin:0 0 10px;line-height:1.45}.image-picker-selected-preview{margin-bottom:10px}.image-picker-selected-image{display:block;max-width:100%;max-height:160px;border-radius:6px;border:1px solid #ddd;object-fit:contain}.image-picker-footer{display:flex;justify-content:flex-start}.image-picker-url-toggle,.image-picker-url-apply{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:6px 10px;font-size:12px;cursor:pointer}.image-picker-url-form{display:flex;gap:8px}.image-picker-url-input{flex:1;padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection{display:flex;flex-direction:column;gap:12px;padding:12px;border:1px solid var(--mb-border, #e8e8e8);border-radius:8px;background:#fafafa}.template-zone-asset-collection-title{margin:0;font-size:14px}.template-zone-asset-collection-intro,.template-zone-asset-collection-hint,.template-zone-asset-collection-empty,.template-zone-asset-collection-error{margin:0;font-size:12px;color:#666;line-height:1.45}.template-zone-asset-collection-error{color:#c62828}.template-zone-asset-collection-field{display:flex;flex-direction:column;gap:6px;font-size:12px}.template-zone-asset-collection-field input{padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection-section{display:flex;flex-direction:column;gap:8px}.template-zone-asset-collection-section-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.template-zone-asset-collection-section-header h5{margin:0;font-size:13px}.template-zone-asset-collection-status{font-size:11px;color:#888}.template-zone-asset-collection-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px}.template-zone-asset-card{display:flex;flex-direction:column;gap:6px;padding:8px;border:1px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff}.template-zone-asset-card img{width:100%;height:72px;object-fit:cover;border-radius:4px;background:#f2f2f2}.template-zone-asset-card span{font-size:11px;color:#424242;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.template-zone-asset-add,.template-zone-asset-remove{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:5px 8px;font-size:11px;cursor:pointer}.template-zone-asset-add:disabled{opacity:.55;cursor:not-allowed}.zone-image-placeholder{padding:16px;border:1px dashed #ccc;border-radius:6px;color:#888;font-size:12px;text-align:center}.logo-picker-label{font-size:11px;font-weight:600;color:var(--mb-text, #18181b)}.zone-stacked-logo{padding:8px 0;text-align:center}.zone-stacked.zone-text{font-size:18px;line-height:1.4;padding:8px 0}.zone-stacked.zone-heading{line-height:1.25;padding:8px 0}.zone-heading[data-heading-level=H1]{font-size:2rem}.zone-heading[data-heading-level=H2]{font-size:1.75rem}.zone-heading[data-heading-level=H3]{font-size:1.5rem}.zone-heading[data-heading-level=H4]{font-size:1.25rem}.zone-heading[data-heading-level=H5]{font-size:1.125rem}.zone-heading[data-heading-level=H6]{font-size:1rem}.zone-text-empty:empty:before{content:attr(data-placeholder);color:#999}.zone-stacked.zone-cta{padding:12px 0}.template-setup-panel{display:flex;flex-direction:column;gap:16px}.figma-import-panel{margin-bottom:16px;padding:14px 16px;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa}.figma-import-panel h4{margin:0 0 8px;font-size:14px;font-weight:600}.figma-import-hint{margin:0 0 12px;font-size:12px;color:#57606a;line-height:1.45}.figma-import-hint code{font-size:11px}.figma-import-panel label{display:flex;flex-direction:column;gap:4px;margin-bottom:10px;font-size:12px;font-weight:500}.figma-import-panel input[type=text],.figma-import-panel input:not([type]){padding:6px 8px;border:1px solid #d0d7de;border-radius:4px;font-size:13px}.figma-import-button{margin-right:8px;margin-bottom:8px;padding:6px 12px;border:1px solid #d0d7de;border-radius:4px;background:#fff;font-size:13px;cursor:pointer}.figma-import-button:disabled{opacity:.55;cursor:not-allowed}.figma-import-button-primary{background:#1565c0;border-color:#1565c0;color:#fff}.figma-import-preview{margin-top:10px;padding-top:10px;border-top:1px solid #d8dee4}.figma-import-preview-meta{margin:0 0 8px;font-size:12px}.figma-import-zone-list{margin:0 0 10px;padding-left:18px;font-size:12px;line-height:1.5}.figma-import-warning{margin:0 0 8px;font-size:12px;color:#9a3412}.figma-import-checkbox{flex-direction:row!important;align-items:center;gap:8px!important;font-weight:400!important}.figma-import-checkbox input{margin:0}.figma-import-message{margin:8px 0 0;font-size:12px;color:#1a7f37}.figma-import-error{margin-top:8px}.figma-import-saving{margin:8px 0}.template-duplicate-panel{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-duplicate-panel h4{margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-duplicate-hint{margin:0 0 12px;font-size:12px;color:#666;line-height:1.45}.template-duplicate-panel label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-duplicate-panel input,.template-duplicate-panel select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-duplicate-button{margin-top:4px;background:var(--mb-primary, #00755f);color:#fff;border:none;padding:8px 14px;border-radius:4px;cursor:pointer;font-size:13px}.template-duplicate-button:disabled{opacity:.6;cursor:not-allowed}.template-duplicate-message{margin:10px 0 0;font-size:12px;color:#2e7d32;line-height:1.4}.template-duplicate-error{margin:8px 0 0;font-size:12px}.template-selector{margin-bottom:16px;padding:12px;border:1px solid #e8e8e8;border-radius:6px;background:#fcfcfc}.template-selector-label{display:block;margin:0;font-size:12px;color:#555}.template-selector-label select{display:block;width:100%;margin-top:6px;padding:8px 10px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px;background:#fff}.template-selector-hint,.template-selector-status{margin:8px 0 0;font-size:12px;color:#666;line-height:1.4}.template-selector-error{margin:8px 0 0;font-size:12px}.template-setup-banner{border:1px solid #ffb74d;background:#fff8e1;border-radius:6px;padding:16px}.template-setup-banner h3{margin:0 0 8px;font-size:16px}.template-setup-banner p{margin:0 0 8px;font-size:14px;line-height:1.5;color:#555}.template-setup-hint{font-size:13px;color:#777}.template-setup-banner-info{border-color:var(--mb-primary-border);background:var(--mb-primary-soft)}.marketing-builder-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;padding:0 4px}.marketing-builder-tab-bar{flex-wrap:wrap}.marketing-builder-tabs{display:inline-flex;border:1px solid #d0d0d0;border-radius:6px;overflow:hidden;background:#fff}.marketing-builder-tab{border:none;background:transparent;color:#555;padding:8px 16px;cursor:pointer;font-size:14px;font-weight:500}.marketing-builder-tab+.marketing-builder-tab{border-left:1px solid #d0d0d0}.marketing-builder-tab:hover{background:#f5f5f5}.marketing-builder-tab-active{background:var(--mb-primary);color:#fff}.marketing-builder-tab-active:hover{background:var(--mb-primary-active)}.template-zone-edit-toggle{background:#fff;color:var(--mb-primary);border:1px solid var(--mb-primary);padding:8px 16px;border-radius:4px;cursor:pointer;font-size:14px;font-weight:500}.template-zone-edit-toggle:hover{background:var(--mb-primary-soft)}.template-zone-edit-toggle-active{background:var(--mb-primary);color:#fff}.template-zone-edit-toggle-active:hover{background:var(--mb-primary-active)}.marketing-builder-toolbar-meta{font-size:13px;color:#666}.template-empty-message{border:1px dashed #d0d0d0;border-radius:6px;background:#fafafa;text-align:center}.template-setup-message code{font-size:12px;background:#f5f5f5;padding:2px 4px;border-radius:3px}.email-builder-error{margin-top:8px;padding:8px 12px}.email-builder-actions{display:flex;gap:12px;margin-top:8px;justify-content:flex-end;flex-wrap:wrap}.email-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.email-builder-save:disabled{opacity:.6;cursor:not-allowed}.email-builder-preview{max-width:600px;margin:24px auto 0}.email-builder-preview-label{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;margin-bottom:8px}.email-builder-preview-frame{width:100%;height:500px;border:1px solid #e0e0e0}.email-builder-preview-frame-fill{width:100%;height:100%;min-height:520px;border:1px solid #e0e0e0;background:#fff}.raw-html-editor{width:100%;min-height:400px;font-family:monospace;font-size:13px;padding:12px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.social-builder-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);margin:0 auto;overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text,.social-builder-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text{font-size:16px;line-height:1.5}.asset-zone-structure-content .zone-text,.asset-zone-structure-content .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.asset-zone-structure-content .zone-text{font-size:16px;line-height:1.5}.social-builder-canvas-fill{width:100%;max-width:100%}.social-builder-structure{display:flex;flex-direction:column;gap:12px}.social-builder-error{margin-top:8px;padding:8px 12px}.asset-structure-panel{display:flex;flex-direction:column;gap:12px}.asset-structure-panel-hint{margin:0;font-size:12px;color:#777;line-height:1.5}.asset-zone-structure-warning{margin:0;padding:8px 10px;font-size:12px;line-height:1.4;color:#9a3412;background:#fff7ed;border:1px solid #fed7aa;border-radius:4px}.asset-zone-structure-key-hint{margin:0 0 8px;font-size:12px;color:#777}.asset-zone-structure-key-hint code{font-size:11px}.asset-zone-structure-list{display:flex;flex-direction:column;gap:8px}.asset-zone-structure-row{border:1px solid #e4e4e4;border-radius:6px;overflow:hidden;background:#fff}.asset-zone-structure-header{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;border:none;background:#fafafa;cursor:pointer;text-align:left}.asset-zone-structure-header:hover{background:#f3f3f3}.asset-zone-structure-title{font-weight:600;font-size:13px;color:#333}.asset-zone-structure-type{font-size:11px;color:#888}.asset-zone-structure-chevron{margin-left:auto;color:#888;font-size:12px}.asset-zone-structure-body{padding:12px;border-top:1px solid #ececec;display:flex;flex-direction:column;gap:12px}.asset-zone-structure-content-label{margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#888}.asset-zone-structure-content .asset-zone-layout-fields{margin-top:12px;padding-top:12px;border-top:1px solid #ececec}.asset-structure-panel .asset-zone-layout-grid,.template-admin-properties .asset-zone-layout-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.asset-zone-layout-fields{padding-top:4px;border-top:1px solid #ececec}.asset-zone-layout-fields label{display:block;margin-bottom:0;font-size:11px;color:#666}.asset-zone-layout-fields input,.asset-zone-layout-fields select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:12px}.asset-zone-layout-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.asset-zone-layout-grid-position{margin-top:8px;grid-template-columns:repeat(4,minmax(0,1fr))}.asset-layout-json-preview{border:1px dashed #d0d0d0;border-radius:6px;padding:8px 12px;background:#fafafa}.asset-layout-json-preview summary{cursor:pointer;font-size:12px;color:#666}.asset-layout-json-preview pre{margin:10px 0 0;padding:10px;background:#fff;border:1px solid #ececec;border-radius:4px;font-size:11px;line-height:1.4;overflow:auto;max-height:220px}.social-builder-actions{display:flex;gap:12px;margin-top:16px;justify-content:flex-end;flex-wrap:wrap}.social-builder-actions .saving-status-message,.email-builder-actions .saving-status-message{flex-basis:100%;text-align:right;margin-top:0}.social-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.social-builder-save:disabled{opacity:.6;cursor:not-allowed}.override-banner{background:#fff4e5;border:1px solid #ffb74d;color:#7a4a00;padding:8px 12px;border-radius:4px;font-size:13px;margin-bottom:12px}.template-admin-zone-list,.template-admin-properties{border:1px solid #e0e0e0;border-radius:6px;padding:12px}.template-admin-zone-list h4,.template-admin-properties h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.zone-list-hint,.zone-sort-hint{margin:-4px 0 10px;font-size:11px;color:#888}.zone-layout-fields{margin:12px 0 0;padding-top:12px;border-top:1px solid #ececec}.zone-layout-fields h5{display:none}.zone-layout-center .zone-image-preview,.zone-layout-center .zone-logo-placeholder{display:block;margin-left:auto;margin-right:auto}.zone-layout-right .zone-image-preview,.zone-layout-right .zone-logo-placeholder{display:block;margin-left:auto;margin-right:0}.zone-layout-center .zone-cta-button,.zone-layout-right .zone-cta-button{display:inline-block}.zone-cta-button{cursor:text}.zone-image-collection-hint{margin:-4px 0 10px;font-size:11px;color:#888;line-height:1.4}.zone-list-item{display:flex;align-items:flex-start;gap:8px;width:100%;text-align:left;background:none;border:1px solid transparent;border-radius:4px;padding:8px;margin-bottom:4px;cursor:pointer;-webkit-user-select:none;user-select:none}.zone-list-delete{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin-top:1px;padding:0;border:none;border-radius:4px;background:transparent;color:#999;cursor:pointer}.zone-list-delete:hover{background:#ffebee;color:#d32f2f}.zone-list-delete:focus-visible{outline:2px solid var(--mb-primary);outline-offset:1px}.zone-list-item:active{cursor:grabbing}.zone-list-item-content{display:flex;flex-direction:column;align-items:flex-start;min-width:0;flex:1}.zone-list-drag-handle{color:#aaa;font-size:12px;line-height:1;padding-top:2px;cursor:grab}.zone-list-item-dragging{opacity:.45}.zone-list-item-drag-over{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item:hover{background:#f5f5f5}.zone-list-item-active{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item-type{font-size:11px;color:#888}.zone-list-item-lock{font-size:10px;color:#d32f2f;text-transform:uppercase}.zone-list-add{width:100%;border:1px dashed #b0b0b0;background:none;padding:8px;border-radius:4px;cursor:pointer;color:#555;margin-bottom:4px}.zone-list-starter{border-color:var(--mb-primary);color:var(--mb-primary)}.template-admin-properties label{display:block;margin-bottom:10px;font-size:12px;color:#555}.zone-image-selected{display:flex;flex-direction:column;gap:8px;width:100%}.zone-image-preview{width:100%;max-height:280px;object-fit:cover;border-radius:4px;border:1px solid #e0e0e0}.social-builder-canvas .zone-image-preview{width:100%;height:100%;max-height:none;object-fit:contain;border-radius:0;border:0}.zone-image-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.zone-image-clear{border:1px solid #d32f2f;background:#fff;color:#d32f2f;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker{position:relative}.asset-picker-compact .asset-picker-trigger{padding:6px 10px;font-size:12px}.asset-picker-mode-tabs{display:flex;gap:4px;margin-bottom:10px}.asset-picker-mode-tab{flex:1;border:1px solid #d0d0d0;background:#fafafa;color:#555;padding:6px 8px;border-radius:4px;cursor:pointer;font-size:12px}.asset-picker-mode-tab-active{border-color:var(--mb-primary);background:var(--mb-primary-soft);color:var(--mb-primary-active)}.asset-picker-url-form label{display:block;margin-bottom:8px;font-size:12px;color:#555}.asset-picker-url-apply{width:100%;border:none;background:var(--mb-primary);color:#fff;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker-url-apply:disabled{opacity:.6;cursor:not-allowed}.asset-picker-loading,.asset-picker-error{font-size:12px;margin-bottom:8px}.asset-picker-error{color:#b71c1c}.template-admin-properties input,.template-admin-properties select,.template-admin-properties textarea{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.checkbox-label{display:flex!important;align-items:center;gap:6px}.checkbox-label input{width:auto!important;margin:0!important}.position-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.zone-remove{background:none;border:1px solid #d32f2f;color:#d32f2f;padding:6px 12px;border-radius:4px;cursor:pointer;margin-top:8px}.no-zone-selected{color:#888;font-size:13px}.template-admin-preview-canvas{border:1px solid #eee;background:#fafafa;margin-bottom:12px;overflow:hidden}.template-admin-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;width:100%;max-width:280px}.template-admin-save:disabled{opacity:.6;cursor:not-allowed}.template-admin-save-error{margin:8px 0 0;font-size:13px}.zone{box-sizing:border-box}.zone-locked{outline:1px dashed transparent}.zone-text{outline:1px dashed transparent;cursor:text}.zone-text:hover{outline-color:#c9c9c9}.zone-text:focus{outline:1px solid var(--mb-primary);outline-offset:2px}.zone-image{background-color:#f5f5f5;display:flex;align-items:center;justify-content:center;overflow:hidden}.zone-cta button{cursor:pointer;font-size:14px}.zone-html-editor{width:100%;min-height:80px;font-family:monospace;font-size:12px;padding:8px;border:1px solid #d0d0d0;border-radius:4px}.zone-html-preview{margin-top:8px;border:1px dashed #d0d0d0;padding:8px}.zone-html-locked{pointer-events:none}.asset-picker-trigger{border:1px dashed #b0b0b0;background:transparent;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px;color:#555}.asset-picker-panel{position:absolute;z-index:10;background:#fff;border:1px solid #d0d0d0;border-radius:6px;box-shadow:0 4px 16px #0000001f;padding:12px;width:320px}.asset-picker-search{width:100%;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;margin-bottom:8px}.asset-picker-hint{font-size:12px;color:#888;margin-bottom:8px}.asset-picker-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-height:240px;overflow-y:auto}.asset-picker-thumb{border:none;background:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;font-size:11px}.asset-picker-thumb img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px}.asset-picker-empty{font-size:12px;color:#888;padding:8px}.eject-button{background:transparent;border:1px solid #d32f2f;color:#d32f2f;padding:10px 16px;border-radius:4px;cursor:pointer;font-size:13px}.eject-modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;z-index:100}.eject-modal{background:#fff;border-radius:8px;padding:24px;width:420px;max-width:90vw}.eject-modal h3{margin:0 0 8px;font-size:16px;color:#b71c1c}.eject-modal p{font-size:13px;color:#555;line-height:1.5}.eject-modal textarea{width:100%;min-height:70px;margin:12px 0;padding:8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.eject-modal-actions{display:flex;justify-content:flex-end;gap:8px}.eject-confirm{background:#d32f2f;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer}.eject-confirm:disabled{opacity:.5;cursor:not-allowed}.designer-create-banner{margin:12px 0 16px;padding:12px 14px;border:.5px solid #d3d1c7;border-radius:8px;background:#f8f7f4;display:flex;flex-direction:column;gap:10px;align-items:flex-start}.designer-create-banner p{margin:0;font-size:13px;color:#2c2c2a}.designer-asset-builder{display:flex;flex-direction:column;gap:8px}.designer-asset-builder-actions{display:flex;align-items:center;gap:10px}.chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:min(80vh,720px);min-height:520px;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:10px;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;min-width:56px;background:#000000;color:#fff;border-radius:4px;padding:5px 10px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-toolbar-field{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--chd-muted)}.chd-toolbar-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;max-width:180px}.chd-toolbar-size{font-size:11px;color:var(--chd-muted);white-space:nowrap}.chd-pin-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 8px;margin-top:4px}.chd-field-hint{margin:6px 0 0;font-size:11px;color:var(--chd-muted);line-height:1.35}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr auto auto auto;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{flex-direction:row;align-items:center;gap:8px;color:var(--chd-text)}.chd-field-checkbox input{width:auto}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:linear-gradient(45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,linear-gradient(-45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,#f0eee8;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:hidden}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function j0(e, t) {
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
function B0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yh = { exports: {} }, Ra = {}, vh = { exports: {} }, J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi = Symbol.for("react.element"), K0 = Symbol.for("react.portal"), Z0 = Symbol.for("react.fragment"), V0 = Symbol.for("react.strict_mode"), W0 = Symbol.for("react.profiler"), Y0 = Symbol.for("react.provider"), G0 = Symbol.for("react.context"), X0 = Symbol.for("react.forward_ref"), J0 = Symbol.for("react.suspense"), Q0 = Symbol.for("react.memo"), q0 = Symbol.for("react.lazy"), tp = Symbol.iterator;
function ew(e) {
  return e === null || typeof e != "object" ? null : (e = tp && e[tp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var wh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Th = Object.assign, Sh = {};
function ko(e, t, n) {
  this.props = e, this.context = t, this.refs = Sh, this.updater = n || wh;
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
function kh() {
}
kh.prototype = ko.prototype;
function Gc(e, t, n) {
  this.props = e, this.context = t, this.refs = Sh, this.updater = n || wh;
}
var Xc = Gc.prototype = new kh();
Xc.constructor = Gc;
Th(Xc, ko.prototype);
Xc.isPureReactComponent = !0;
var np = Array.isArray, Eh = Object.prototype.hasOwnProperty, Jc = { current: null }, Ah = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ch(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Eh.call(t, r) && !Ah.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Fi, type: e, key: i, ref: s, props: o, _owner: Jc.current };
}
function tw(e, t) {
  return { $$typeof: Fi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fi;
}
function nw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var rp = /\/+/g;
function Xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? nw("" + e.key) : t.toString(36);
}
function Ms(e, t, n, r, o) {
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
          case K0:
            s = !0;
        }
    }
  if (s)
    return s = e, o = o(s), e = r === "" ? "." + Xl(s, 0) : r, np(o) ? (n = "", e != null && (n = e.replace(rp, "$&/") + "/"), Ms(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Qc(o) && (o = tw(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(rp, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", np(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Xl(i, a);
      s += Ms(i, t, n, l, o);
    }
  else if (l = ew(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, l = r + Xl(i, a++), s += Ms(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function ss(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ms(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function rw(e) {
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
var ut = { current: null }, Is = { transition: null }, ow = { ReactCurrentDispatcher: ut, ReactCurrentBatchConfig: Is, ReactCurrentOwner: Jc };
function bh() {
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
  if (!Qc(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
J.Component = ko;
J.Fragment = Z0;
J.Profiler = W0;
J.PureComponent = Gc;
J.StrictMode = V0;
J.Suspense = J0;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ow;
J.act = bh;
J.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Th({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Jc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (l in t)
      Eh.call(t, l) && !Ah.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
  return e = { $$typeof: G0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Y0, _context: e }, e.Consumer = e;
};
J.createElement = Ch;
J.createFactory = function(e) {
  var t = Ch.bind(null, e);
  return t.type = e, t;
};
J.createRef = function() {
  return { current: null };
};
J.forwardRef = function(e) {
  return { $$typeof: X0, render: e };
};
J.isValidElement = Qc;
J.lazy = function(e) {
  return { $$typeof: q0, _payload: { _status: -1, _result: e }, _init: rw };
};
J.memo = function(e, t) {
  return { $$typeof: Q0, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function(e) {
  var t = Is.transition;
  Is.transition = {};
  try {
    e();
  } finally {
    Is.transition = t;
  }
};
J.unstable_act = bh;
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
vh.exports = J;
var E = vh.exports;
const iw = /* @__PURE__ */ B0(E), Iu = /* @__PURE__ */ j0({
  __proto__: null,
  default: iw
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
var sw = E, aw = Symbol.for("react.element"), lw = Symbol.for("react.fragment"), uw = Object.prototype.hasOwnProperty, cw = sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, dw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nh(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    uw.call(t, r) && !dw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: aw, type: e, key: i, ref: s, props: o, _owner: cw.current };
}
Ra.Fragment = lw;
Ra.jsx = Nh;
Ra.jsxs = Nh;
yh.exports = Ra;
var qc = yh.exports;
const tt = qc.Fragment, d = qc.jsx, A = qc.jsxs;
var xh = { exports: {} }, Nt = {}, Ph = { exports: {} }, Lh = {};
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
  function t($, R) {
    var w = $.length;
    $.push(R);
    e:
      for (; 0 < w; ) {
        var L = w - 1 >>> 1, U = $[L];
        if (0 < o(U, R))
          $[L] = R, $[w] = U, w = L;
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
    var R = $[0], w = $.pop();
    if (w !== R) {
      $[0] = w;
      e:
        for (var L = 0, U = $.length, V = U >>> 1; L < V; ) {
          var Q = 2 * (L + 1) - 1, Re = $[Q], $e = Q + 1, Me = $[$e];
          if (0 > o(Re, w))
            $e < U && 0 > o(Me, Re) ? ($[L] = Me, $[$e] = w, L = $e) : ($[L] = Re, $[Q] = w, L = Q);
          else if ($e < U && 0 > o(Me, w))
            $[L] = Me, $[$e] = w, L = $e;
          else
            break e;
        }
    }
    return R;
  }
  function o($, R) {
    var w = $.sortIndex - R.sortIndex;
    return w !== 0 ? w : $.id - R.id;
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
  var l = [], u = [], f = 1, c = null, p = 3, v = !1, k = !1, T = !1, P = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g($) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null)
        r(u);
      else if (R.startTime <= $)
        r(u), R.sortIndex = R.expirationTime, t(l, R);
      else
        break;
      R = n(u);
    }
  }
  function N($) {
    if (T = !1, g($), !k)
      if (n(l) !== null)
        k = !0, Ee(C);
      else {
        var R = n(u);
        R !== null && W(N, R.startTime - $);
      }
  }
  function C($, R) {
    k = !1, T && (T = !1, m(z), z = -1), v = !0;
    var w = p;
    try {
      for (g(R), c = n(l); c !== null && (!(c.expirationTime > R) || $ && !I()); ) {
        var L = c.callback;
        if (typeof L == "function") {
          c.callback = null, p = c.priorityLevel;
          var U = L(c.expirationTime <= R);
          R = e.unstable_now(), typeof U == "function" ? c.callback = U : c === n(l) && r(l), g(R);
        } else
          r(l);
        c = n(l);
      }
      if (c !== null)
        var V = !0;
      else {
        var Q = n(u);
        Q !== null && W(N, Q.startTime - R), V = !1;
      }
      return V;
    } finally {
      c = null, p = w, v = !1;
    }
  }
  var b = !1, S = null, z = -1, j = 5, _ = -1;
  function I() {
    return !(e.unstable_now() - _ < j);
  }
  function H() {
    if (S !== null) {
      var $ = e.unstable_now();
      _ = $;
      var R = !0;
      try {
        R = S(!0, $);
      } finally {
        R ? G() : (b = !1, S = null);
      }
    } else
      b = !1;
  }
  var G;
  if (typeof h == "function")
    G = function() {
      h(H);
    };
  else if (typeof MessageChannel < "u") {
    var Le = new MessageChannel(), Je = Le.port2;
    Le.port1.onmessage = H, G = function() {
      Je.postMessage(null);
    };
  } else
    G = function() {
      P(H, 0);
    };
  function Ee($) {
    S = $, b || (b = !0, G());
  }
  function W($, R) {
    z = P(function() {
      $(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    k || v || (k = !0, Ee(C));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function($) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = p;
    }
    var w = p;
    p = R;
    try {
      return $();
    } finally {
      p = w;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function($, R) {
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
      return R();
    } finally {
      p = w;
    }
  }, e.unstable_scheduleCallback = function($, R, w) {
    var L = e.unstable_now();
    switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? L + w : L) : w = L, $) {
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
    return U = w + U, $ = { id: f++, callback: R, priorityLevel: $, startTime: w, expirationTime: U, sortIndex: -1 }, w > L ? ($.sortIndex = w, t(u, $), n(l) === null && $ === n(u) && (T ? (m(z), z = -1) : T = !0, W(N, w - L))) : ($.sortIndex = U, t(l, $), k || v || (k = !0, Ee(C))), $;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function($) {
    var R = p;
    return function() {
      var w = p;
      p = R;
      try {
        return $.apply(this, arguments);
      } finally {
        p = w;
      }
    };
  };
})(Lh);
Ph.exports = Lh;
var fw = Ph.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pw = E, bt = fw;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var zh = /* @__PURE__ */ new Set(), pi = {};
function Nr(e, t) {
  uo(e, t), uo(e + "Capture", t);
}
function uo(e, t) {
  for (pi[e] = t, e = 0; e < t.length; e++)
    zh.add(t[e]);
}
var Sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Du = Object.prototype.hasOwnProperty, mw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, op = {}, ip = {};
function hw(e) {
  return Du.call(ip, e) ? !0 : Du.call(op, e) ? !1 : mw.test(e) ? ip[e] = !0 : (op[e] = !0, !1);
}
function gw(e, t, n, r) {
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
function yw(e, t, n, r) {
  if (t === null || typeof t > "u" || gw(e, t, n, r))
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
var ed = /[\-:]([a-z])/g;
function td(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ed,
    td
  );
  Ge[t] = new ct(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ed, td);
  Ge[t] = new ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ed, td);
  Ge[t] = new ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ge[e] = new ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new ct("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ge[e] = new ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nd(e, t, n, r) {
  var o = Ge.hasOwnProperty(t) ? Ge[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (yw(t, n, o, r) && (n = null), r || o === null ? hw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nn = pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, as = Symbol.for("react.element"), jr = Symbol.for("react.portal"), Br = Symbol.for("react.fragment"), rd = Symbol.for("react.strict_mode"), Hu = Symbol.for("react.profiler"), _h = Symbol.for("react.provider"), Oh = Symbol.for("react.context"), od = Symbol.for("react.forward_ref"), Fu = Symbol.for("react.suspense"), Uu = Symbol.for("react.suspense_list"), id = Symbol.for("react.memo"), Rn = Symbol.for("react.lazy"), Rh = Symbol.for("react.offscreen"), sp = Symbol.iterator;
function $o(e) {
  return e === null || typeof e != "object" ? null : (e = sp && e[sp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, Jl;
function Yo(e) {
  if (Jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Jl = t && t[1] || "";
    }
  return `
` + Jl + e;
}
var Ql = !1;
function ql(e, t) {
  if (!e || Ql)
    return "";
  Ql = !0;
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
    Ql = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yo(e) : "";
}
function vw(e) {
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
      return e = ql(e.type, !1), e;
    case 11:
      return e = ql(e.type.render, !1), e;
    case 1:
      return e = ql(e.type, !0), e;
    default:
      return "";
  }
}
function ju(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Br:
      return "Fragment";
    case jr:
      return "Portal";
    case Hu:
      return "Profiler";
    case rd:
      return "StrictMode";
    case Fu:
      return "Suspense";
    case Uu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Oh:
        return (e.displayName || "Context") + ".Consumer";
      case _h:
        return (e._context.displayName || "Context") + ".Provider";
      case od:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case id:
        return t = e.displayName || null, t !== null ? t : ju(e.type) || "Memo";
      case Rn:
        t = e._payload, e = e._init;
        try {
          return ju(e(t));
        } catch {
        }
    }
  return null;
}
function ww(e) {
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
      return ju(t);
    case 8:
      return t === rd ? "StrictMode" : "Mode";
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
function qn(e) {
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
function $h(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Tw(e) {
  var t = $h(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Tw(e));
}
function Mh(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = $h(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function qs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bu(e, t) {
  var n = t.checked;
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ap(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = qn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ih(e, t) {
  t = t.checked, t != null && nd(e, "checked", t, !1);
}
function Ku(e, t) {
  Ih(e, t);
  var n = qn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Zu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zu(e, t.type, qn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Zu(e, t, n) {
  (t !== "number" || qs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
    for (n = "" + qn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vu(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(M(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function up(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(M(92));
      if (Go(n)) {
        if (1 < n.length)
          throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: qn(n) };
}
function Dh(e, t) {
  var n = qn(t.value), r = qn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function cp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Hh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var us, Fh = function(e) {
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
}, Sw = ["Webkit", "ms", "Moz", "O"];
Object.keys(ti).forEach(function(e) {
  Sw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ti[t] = ti[e];
  });
});
function Uh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ti.hasOwnProperty(e) && ti[e] ? ("" + t).trim() : t + "px";
}
function jh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Uh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var kw = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Yu(e, t) {
  if (t) {
    if (kw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(M(62));
  }
}
function Gu(e, t) {
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
var Xu = null;
function sd(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ju = null, no = null, ro = null;
function dp(e) {
  if (e = Bi(e)) {
    if (typeof Ju != "function")
      throw Error(M(280));
    var t = e.stateNode;
    t && (t = Ha(t), Ju(e.stateNode, e.type, t));
  }
}
function Bh(e) {
  no ? ro ? ro.push(e) : ro = [e] : no = e;
}
function Kh() {
  if (no) {
    var e = no, t = ro;
    if (ro = no = null, dp(e), t)
      for (e = 0; e < t.length; e++)
        dp(t[e]);
  }
}
function Zh(e, t) {
  return e(t);
}
function Vh() {
}
var eu = !1;
function Wh(e, t, n) {
  if (eu)
    return e(t, n);
  eu = !0;
  try {
    return Zh(e, t, n);
  } finally {
    eu = !1, (no !== null || ro !== null) && (Vh(), Kh());
  }
}
function hi(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Ha(n);
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
    throw Error(M(231, t, typeof n));
  return n;
}
var Qu = !1;
if (Sn)
  try {
    var Mo = {};
    Object.defineProperty(Mo, "passive", { get: function() {
      Qu = !0;
    } }), window.addEventListener("test", Mo, Mo), window.removeEventListener("test", Mo, Mo);
  } catch {
    Qu = !1;
  }
function Ew(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var ni = !1, ea = null, ta = !1, qu = null, Aw = { onError: function(e) {
  ni = !0, ea = e;
} };
function Cw(e, t, n, r, o, i, s, a, l) {
  ni = !1, ea = null, Ew.apply(Aw, arguments);
}
function bw(e, t, n, r, o, i, s, a, l) {
  if (Cw.apply(this, arguments), ni) {
    if (ni) {
      var u = ea;
      ni = !1, ea = null;
    } else
      throw Error(M(198));
    ta || (ta = !0, qu = u);
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
function Yh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function fp(e) {
  if (xr(e) !== e)
    throw Error(M(188));
}
function Nw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = xr(e), t === null)
      throw Error(M(188));
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
          return fp(o), e;
        if (i === r)
          return fp(o), t;
        i = i.sibling;
      }
      throw Error(M(188));
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
          throw Error(M(189));
      }
    }
    if (n.alternate !== r)
      throw Error(M(190));
  }
  if (n.tag !== 3)
    throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Gh(e) {
  return e = Nw(e), e !== null ? Xh(e) : null;
}
function Xh(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Xh(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Jh = bt.unstable_scheduleCallback, pp = bt.unstable_cancelCallback, xw = bt.unstable_shouldYield, Pw = bt.unstable_requestPaint, Ae = bt.unstable_now, Lw = bt.unstable_getCurrentPriorityLevel, ad = bt.unstable_ImmediatePriority, Qh = bt.unstable_UserBlockingPriority, na = bt.unstable_NormalPriority, zw = bt.unstable_LowPriority, qh = bt.unstable_IdlePriority, $a = null, un = null;
function _w(e) {
  if (un && typeof un.onCommitFiberRoot == "function")
    try {
      un.onCommitFiberRoot($a, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Wt = Math.clz32 ? Math.clz32 : $w, Ow = Math.log, Rw = Math.LN2;
function $w(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ow(e) / Rw | 0) | 0;
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
function ra(e, t) {
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
function Mw(e, t) {
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
function Iw(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Wt(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = Mw(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function ec(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function eg() {
  var e = cs;
  return cs <<= 1, !(cs & 4194240) && (cs = 64), e;
}
function tu(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ui(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
}
function Dw(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Wt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function ld(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Wt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var se = 0;
function tg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ng, ud, rg, og, ig, tc = !1, fs = [], Kn = null, Zn = null, Vn = null, gi = /* @__PURE__ */ new Map(), yi = /* @__PURE__ */ new Map(), Mn = [], Hw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function mp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kn = null;
      break;
    case "dragenter":
    case "dragleave":
      Zn = null;
      break;
    case "mouseover":
    case "mouseout":
      Vn = null;
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
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Bi(t), t !== null && ud(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Fw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Kn = Io(Kn, e, t, n, r, o), !0;
    case "dragenter":
      return Zn = Io(Zn, e, t, n, r, o), !0;
    case "mouseover":
      return Vn = Io(Vn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return gi.set(i, Io(gi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, yi.set(i, Io(yi.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function sg(e) {
  var t = mr(e.target);
  if (t !== null) {
    var n = xr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Yh(n), t !== null) {
          e.blockedOn = t, ig(e.priority, function() {
            rg(n);
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
function Ds(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Xu = r, n.target.dispatchEvent(r), Xu = null;
    } else
      return t = Bi(n), t !== null && ud(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function hp(e, t, n) {
  Ds(e) && n.delete(t);
}
function Uw() {
  tc = !1, Kn !== null && Ds(Kn) && (Kn = null), Zn !== null && Ds(Zn) && (Zn = null), Vn !== null && Ds(Vn) && (Vn = null), gi.forEach(hp), yi.forEach(hp);
}
function Do(e, t) {
  e.blockedOn === t && (e.blockedOn = null, tc || (tc = !0, bt.unstable_scheduleCallback(bt.unstable_NormalPriority, Uw)));
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
  for (Kn !== null && Do(Kn, e), Zn !== null && Do(Zn, e), Vn !== null && Do(Vn, e), gi.forEach(t), yi.forEach(t), n = 0; n < Mn.length; n++)
    r = Mn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Mn.length && (n = Mn[0], n.blockedOn === null); )
    sg(n), n.blockedOn === null && Mn.shift();
}
var oo = Nn.ReactCurrentBatchConfig, oa = !0;
function jw(e, t, n, r) {
  var o = se, i = oo.transition;
  oo.transition = null;
  try {
    se = 1, cd(e, t, n, r);
  } finally {
    se = o, oo.transition = i;
  }
}
function Bw(e, t, n, r) {
  var o = se, i = oo.transition;
  oo.transition = null;
  try {
    se = 4, cd(e, t, n, r);
  } finally {
    se = o, oo.transition = i;
  }
}
function cd(e, t, n, r) {
  if (oa) {
    var o = nc(e, t, n, r);
    if (o === null)
      du(e, t, r, ia, n), mp(e, r);
    else if (Fw(o, e, t, n, r))
      r.stopPropagation();
    else if (mp(e, r), t & 4 && -1 < Hw.indexOf(e)) {
      for (; o !== null; ) {
        var i = Bi(o);
        if (i !== null && ng(i), i = nc(e, t, n, r), i === null && du(e, t, r, ia, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      du(e, t, r, null, n);
  }
}
var ia = null;
function nc(e, t, n, r) {
  if (ia = null, e = sd(r), e = mr(e), e !== null)
    if (t = xr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Yh(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return ia = e, null;
}
function ag(e) {
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
      switch (Lw()) {
        case ad:
          return 1;
        case Qh:
          return 4;
        case na:
        case zw:
          return 16;
        case qh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Hn = null, dd = null, Hs = null;
function lg() {
  if (Hs)
    return Hs;
  var e, t = dd, n = t.length, r, o = "value" in Hn ? Hn.value : Hn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ;
  return Hs = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Fs(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ps() {
  return !0;
}
function gp() {
  return !1;
}
function xt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ps : gp, this.isPropagationStopped = gp, this;
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
}, defaultPrevented: 0, isTrusted: 0 }, fd = xt(Eo), ji = he({}, Eo, { view: 0, detail: 0 }), Kw = xt(ji), nu, ru, Ho, Ma = he({}, ji, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ho && (Ho && e.type === "mousemove" ? (nu = e.screenX - Ho.screenX, ru = e.screenY - Ho.screenY) : ru = nu = 0, Ho = e), nu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ru;
} }), yp = xt(Ma), Zw = he({}, Ma, { dataTransfer: 0 }), Vw = xt(Zw), Ww = he({}, ji, { relatedTarget: 0 }), ou = xt(Ww), Yw = he({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gw = xt(Yw), Xw = he({}, Eo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Jw = xt(Xw), Qw = he({}, Eo, { data: 0 }), vp = xt(Qw), qw = {
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
}, eT = {
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
}, tT = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function nT(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tT[e]) ? !!t[e] : !1;
}
function pd() {
  return nT;
}
var rT = he({}, ji, { key: function(e) {
  if (e.key) {
    var t = qw[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Fs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? eT[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pd, charCode: function(e) {
  return e.type === "keypress" ? Fs(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), oT = xt(rT), iT = he({}, Ma, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wp = xt(iT), sT = he({}, ji, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pd }), aT = xt(sT), lT = he({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), uT = xt(lT), cT = he({}, Ma, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), dT = xt(cT), fT = [9, 13, 27, 32], md = Sn && "CompositionEvent" in window, ri = null;
Sn && "documentMode" in document && (ri = document.documentMode);
var pT = Sn && "TextEvent" in window && !ri, ug = Sn && (!md || ri && 8 < ri && 11 >= ri), Tp = String.fromCharCode(32), Sp = !1;
function cg(e, t) {
  switch (e) {
    case "keyup":
      return fT.indexOf(t.keyCode) !== -1;
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
function dg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kr = !1;
function mT(e, t) {
  switch (e) {
    case "compositionend":
      return dg(t);
    case "keypress":
      return t.which !== 32 ? null : (Sp = !0, Tp);
    case "textInput":
      return e = t.data, e === Tp && Sp ? null : e;
    default:
      return null;
  }
}
function hT(e, t) {
  if (Kr)
    return e === "compositionend" || !md && cg(e, t) ? (e = lg(), Hs = dd = Hn = null, Kr = !1, e) : null;
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
      return ug && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var gT = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function kp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!gT[e.type] : t === "textarea";
}
function fg(e, t, n, r) {
  Bh(r), t = sa(t, "onChange"), 0 < t.length && (n = new fd("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var oi = null, wi = null;
function yT(e) {
  Eg(e, 0);
}
function Ia(e) {
  var t = Wr(e);
  if (Mh(t))
    return e;
}
function vT(e, t) {
  if (e === "change")
    return t;
}
var pg = !1;
if (Sn) {
  var iu;
  if (Sn) {
    var su = "oninput" in document;
    if (!su) {
      var Ep = document.createElement("div");
      Ep.setAttribute("oninput", "return;"), su = typeof Ep.oninput == "function";
    }
    iu = su;
  } else
    iu = !1;
  pg = iu && (!document.documentMode || 9 < document.documentMode);
}
function Ap() {
  oi && (oi.detachEvent("onpropertychange", mg), wi = oi = null);
}
function mg(e) {
  if (e.propertyName === "value" && Ia(wi)) {
    var t = [];
    fg(t, wi, e, sd(e)), Wh(yT, t);
  }
}
function wT(e, t, n) {
  e === "focusin" ? (Ap(), oi = t, wi = n, oi.attachEvent("onpropertychange", mg)) : e === "focusout" && Ap();
}
function TT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ia(wi);
}
function ST(e, t) {
  if (e === "click")
    return Ia(t);
}
function kT(e, t) {
  if (e === "input" || e === "change")
    return Ia(t);
}
function ET(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Gt = typeof Object.is == "function" ? Object.is : ET;
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
    if (!Du.call(t, o) || !Gt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Cp(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function bp(e, t) {
  var n = Cp(e);
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
    n = Cp(n);
  }
}
function hg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function gg() {
  for (var e = window, t = qs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = qs(e.document);
  }
  return t;
}
function hd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function AT(e) {
  var t = gg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && hg(n.ownerDocument.documentElement, n)) {
    if (r !== null && hd(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = bp(n, i);
        var s = bp(
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
var CT = Sn && "documentMode" in document && 11 >= document.documentMode, Zr = null, rc = null, ii = null, oc = !1;
function Np(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oc || Zr == null || Zr !== qs(r) || (r = Zr, "selectionStart" in r && hd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ii && Ti(ii, r) || (ii = r, r = sa(rc, "onSelect"), 0 < r.length && (t = new fd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zr)));
}
function ms(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vr = { animationend: ms("Animation", "AnimationEnd"), animationiteration: ms("Animation", "AnimationIteration"), animationstart: ms("Animation", "AnimationStart"), transitionend: ms("Transition", "TransitionEnd") }, au = {}, yg = {};
Sn && (yg = document.createElement("div").style, "AnimationEvent" in window || (delete Vr.animationend.animation, delete Vr.animationiteration.animation, delete Vr.animationstart.animation), "TransitionEvent" in window || delete Vr.transitionend.transition);
function Da(e) {
  if (au[e])
    return au[e];
  if (!Vr[e])
    return e;
  var t = Vr[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in yg)
      return au[e] = t[n];
  return e;
}
var vg = Da("animationend"), wg = Da("animationiteration"), Tg = Da("animationstart"), Sg = Da("transitionend"), kg = /* @__PURE__ */ new Map(), xp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function rr(e, t) {
  kg.set(e, t), Nr(t, [e]);
}
for (var lu = 0; lu < xp.length; lu++) {
  var uu = xp[lu], bT = uu.toLowerCase(), NT = uu[0].toUpperCase() + uu.slice(1);
  rr(bT, "on" + NT);
}
rr(vg, "onAnimationEnd");
rr(wg, "onAnimationIteration");
rr(Tg, "onAnimationStart");
rr("dblclick", "onDoubleClick");
rr("focusin", "onFocus");
rr("focusout", "onBlur");
rr(Sg, "onTransitionEnd");
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
var Jo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xT = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));
function Pp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, bw(r, t, void 0, e), e.currentTarget = null;
}
function Eg(e, t) {
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
          Pp(o, a, u), i = l;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped())
            break e;
          Pp(o, a, u), i = l;
        }
    }
  }
  if (ta)
    throw e = qu, ta = !1, qu = null, e;
}
function ce(e, t) {
  var n = t[uc];
  n === void 0 && (n = t[uc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ag(t, e, 2, !1), n.add(r));
}
function cu(e, t, n) {
  var r = 0;
  t && (r |= 4), Ag(n, e, r, t);
}
var hs = "_reactListening" + Math.random().toString(36).slice(2);
function Si(e) {
  if (!e[hs]) {
    e[hs] = !0, zh.forEach(function(n) {
      n !== "selectionchange" && (xT.has(n) || cu(n, !1, e), cu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hs] || (t[hs] = !0, cu("selectionchange", !1, t));
  }
}
function Ag(e, t, n, r) {
  switch (ag(t)) {
    case 1:
      var o = jw;
      break;
    case 4:
      o = Bw;
      break;
    default:
      o = cd;
  }
  n = o.bind(null, t, n, e), o = void 0, !Qu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function du(e, t, n, r, o) {
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
            if (s = mr(a), s === null)
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
  Wh(function() {
    var u = i, f = sd(n), c = [];
    e: {
      var p = kg.get(e);
      if (p !== void 0) {
        var v = fd, k = e;
        switch (e) {
          case "keypress":
            if (Fs(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = oT;
            break;
          case "focusin":
            k = "focus", v = ou;
            break;
          case "focusout":
            k = "blur", v = ou;
            break;
          case "beforeblur":
          case "afterblur":
            v = ou;
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
            v = yp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Vw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = aT;
            break;
          case vg:
          case wg:
          case Tg:
            v = Gw;
            break;
          case Sg:
            v = uT;
            break;
          case "scroll":
            v = Kw;
            break;
          case "wheel":
            v = dT;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Jw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = wp;
        }
        var T = (t & 4) !== 0, P = !T && e === "scroll", m = T ? p !== null ? p + "Capture" : null : p;
        T = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var N = g.stateNode;
          if (g.tag === 5 && N !== null && (g = N, m !== null && (N = hi(h, m), N != null && T.push(ki(h, N, g)))), P)
            break;
          h = h.return;
        }
        0 < T.length && (p = new v(p, k, null, n, f), c.push({ event: p, listeners: T }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== Xu && (k = n.relatedTarget || n.fromElement) && (mr(k) || k[kn]))
          break e;
        if ((v || p) && (p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (k = n.relatedTarget || n.toElement, v = u, k = k ? mr(k) : null, k !== null && (P = xr(k), k !== P || k.tag !== 5 && k.tag !== 6) && (k = null)) : (v = null, k = u), v !== k)) {
          if (T = yp, N = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (T = wp, N = "onPointerLeave", m = "onPointerEnter", h = "pointer"), P = v == null ? p : Wr(v), g = k == null ? p : Wr(k), p = new T(N, h + "leave", v, n, f), p.target = P, p.relatedTarget = g, N = null, mr(f) === u && (T = new T(m, h + "enter", k, n, f), T.target = g, T.relatedTarget = P, N = T), P = N, v && k)
            t: {
              for (T = v, m = k, h = 0, g = T; g; g = Ir(g))
                h++;
              for (g = 0, N = m; N; N = Ir(N))
                g++;
              for (; 0 < h - g; )
                T = Ir(T), h--;
              for (; 0 < g - h; )
                m = Ir(m), g--;
              for (; h--; ) {
                if (T === m || m !== null && T === m.alternate)
                  break t;
                T = Ir(T), m = Ir(m);
              }
              T = null;
            }
          else
            T = null;
          v !== null && Lp(c, p, v, T, !1), k !== null && P !== null && Lp(c, P, k, T, !0);
        }
      }
      e: {
        if (p = u ? Wr(u) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var C = vT;
        else if (kp(p))
          if (pg)
            C = kT;
          else {
            C = TT;
            var b = wT;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = ST);
        if (C && (C = C(e, u))) {
          fg(c, C, n, f);
          break e;
        }
        b && b(e, p, u), e === "focusout" && (b = p._wrapperState) && b.controlled && p.type === "number" && Zu(p, "number", p.value);
      }
      switch (b = u ? Wr(u) : window, e) {
        case "focusin":
          (kp(b) || b.contentEditable === "true") && (Zr = b, rc = u, ii = null);
          break;
        case "focusout":
          ii = rc = Zr = null;
          break;
        case "mousedown":
          oc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          oc = !1, Np(c, n, f);
          break;
        case "selectionchange":
          if (CT)
            break;
        case "keydown":
        case "keyup":
          Np(c, n, f);
      }
      var S;
      if (md)
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
        Kr ? cg(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (ug && n.locale !== "ko" && (Kr || z !== "onCompositionStart" ? z === "onCompositionEnd" && Kr && (S = lg()) : (Hn = f, dd = "value" in Hn ? Hn.value : Hn.textContent, Kr = !0)), b = sa(u, z), 0 < b.length && (z = new vp(z, e, null, n, f), c.push({ event: z, listeners: b }), S ? z.data = S : (S = dg(n), S !== null && (z.data = S)))), (S = pT ? mT(e, n) : hT(e, n)) && (u = sa(u, "onBeforeInput"), 0 < u.length && (f = new vp("onBeforeInput", "beforeinput", null, n, f), c.push({ event: f, listeners: u }), f.data = S));
    }
    Eg(c, t);
  });
}
function ki(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function sa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = hi(e, n), i != null && r.unshift(ki(e, i, o)), i = hi(e, t), i != null && r.push(ki(e, i, o))), e = e.return;
  }
  return r;
}
function Ir(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Lp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r)
      break;
    a.tag === 5 && u !== null && (a = u, o ? (l = hi(n, i), l != null && s.unshift(ki(n, l, a))) : o || (l = hi(n, i), l != null && s.push(ki(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var PT = /\r\n?/g, LT = /\u0000|\uFFFD/g;
function zp(e) {
  return (typeof e == "string" ? e : "" + e).replace(PT, `
`).replace(LT, "");
}
function gs(e, t, n) {
  if (t = zp(t), zp(e) !== t && n)
    throw Error(M(425));
}
function aa() {
}
var ic = null, sc = null;
function ac(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var lc = typeof setTimeout == "function" ? setTimeout : void 0, zT = typeof clearTimeout == "function" ? clearTimeout : void 0, _p = typeof Promise == "function" ? Promise : void 0, _T = typeof queueMicrotask == "function" ? queueMicrotask : typeof _p < "u" ? function(e) {
  return _p.resolve(null).then(e).catch(OT);
} : lc;
function OT(e) {
  setTimeout(function() {
    throw e;
  });
}
function fu(e, t) {
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
function Op(e) {
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
var Ao = Math.random().toString(36).slice(2), an = "__reactFiber$" + Ao, Ei = "__reactProps$" + Ao, kn = "__reactContainer$" + Ao, uc = "__reactEvents$" + Ao, RT = "__reactListeners$" + Ao, $T = "__reactHandles$" + Ao;
function mr(e) {
  var t = e[an];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[kn] || n[an]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Op(e); e !== null; ) {
          if (n = e[an])
            return n;
          e = Op(e);
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
function Wr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(M(33));
}
function Ha(e) {
  return e[Ei] || null;
}
var cc = [], Yr = -1;
function or(e) {
  return { current: e };
}
function de(e) {
  0 > Yr || (e.current = cc[Yr], cc[Yr] = null, Yr--);
}
function ue(e, t) {
  Yr++, cc[Yr] = e.current, e.current = t;
}
var er = {}, rt = or(er), ht = or(!1), Tr = er;
function co(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return er;
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
function la() {
  de(ht), de(rt);
}
function Rp(e, t, n) {
  if (rt.current !== er)
    throw Error(M(168));
  ue(rt, t), ue(ht, n);
}
function Cg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(M(108, ww(e) || "Unknown", o));
  return he({}, n, r);
}
function ua(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || er, Tr = rt.current, ue(rt, e), ue(ht, ht.current), !0;
}
function $p(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(M(169));
  n ? (e = Cg(e, t, Tr), r.__reactInternalMemoizedMergedChildContext = e, de(ht), de(rt), ue(rt, e)) : de(ht), ue(ht, n);
}
var gn = null, Fa = !1, pu = !1;
function bg(e) {
  gn === null ? gn = [e] : gn.push(e);
}
function MT(e) {
  Fa = !0, bg(e);
}
function ir() {
  if (!pu && gn !== null) {
    pu = !0;
    var e = 0, t = se;
    try {
      var n = gn;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      gn = null, Fa = !1;
    } catch (o) {
      throw gn !== null && (gn = gn.slice(e + 1)), Jh(ad, ir), o;
    } finally {
      se = t, pu = !1;
    }
  }
  return null;
}
var Gr = [], Xr = 0, ca = null, da = 0, _t = [], Ot = 0, Sr = null, vn = 1, wn = "";
function dr(e, t) {
  Gr[Xr++] = da, Gr[Xr++] = ca, ca = e, da = t;
}
function Ng(e, t, n) {
  _t[Ot++] = vn, _t[Ot++] = wn, _t[Ot++] = Sr, Sr = e;
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
function gd(e) {
  e.return !== null && (dr(e, 1), Ng(e, 1, 0));
}
function yd(e) {
  for (; e === ca; )
    ca = Gr[--Xr], Gr[Xr] = null, da = Gr[--Xr], Gr[Xr] = null;
  for (; e === Sr; )
    Sr = _t[--Ot], _t[Ot] = null, wn = _t[--Ot], _t[Ot] = null, vn = _t[--Ot], _t[Ot] = null;
}
var At = null, Et = null, fe = !1, Kt = null;
function xg(e, t) {
  var n = $t(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Mp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, At = e, Et = Wn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, At = e, Et = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sr !== null ? { id: vn, overflow: wn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = $t(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, At = e, Et = null, !0) : !1;
    default:
      return !1;
  }
}
function dc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fc(e) {
  if (fe) {
    var t = Et;
    if (t) {
      var n = t;
      if (!Mp(e, t)) {
        if (dc(e))
          throw Error(M(418));
        t = Wn(n.nextSibling);
        var r = At;
        t && Mp(e, t) ? xg(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, At = e);
      }
    } else {
      if (dc(e))
        throw Error(M(418));
      e.flags = e.flags & -4097 | 2, fe = !1, At = e;
    }
  }
}
function Ip(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  At = e;
}
function ys(e) {
  if (e !== At)
    return !1;
  if (!fe)
    return Ip(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ac(e.type, e.memoizedProps)), t && (t = Et)) {
    if (dc(e))
      throw Pg(), Error(M(418));
    for (; t; )
      xg(e, t), t = Wn(t.nextSibling);
  }
  if (Ip(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Et = Wn(e.nextSibling);
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
    Et = At ? Wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Pg() {
  for (var e = Et; e; )
    e = Wn(e.nextSibling);
}
function fo() {
  Et = At = null, fe = !1;
}
function vd(e) {
  Kt === null ? Kt = [e] : Kt.push(e);
}
var IT = Nn.ReactCurrentBatchConfig;
function Fo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(M(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(M(284));
    if (!n._owner)
      throw Error(M(290, e));
  }
  return e;
}
function vs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Dp(e) {
  var t = e._init;
  return t(e._payload);
}
function Lg(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? (m.deletions = [h], m.flags |= 16) : g.push(h);
    }
  }
  function n(m, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(m, h), h = h.sibling;
    return null;
  }
  function r(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function o(m, h) {
    return m = Jn(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, g) {
    return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < h ? (m.flags |= 2, h) : g) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, g, N) {
    return h === null || h.tag !== 6 ? (h = Tu(g, m.mode, N), h.return = m, h) : (h = o(h, g), h.return = m, h);
  }
  function l(m, h, g, N) {
    var C = g.type;
    return C === Br ? f(m, h, g.props.children, N, g.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Rn && Dp(C) === h.type) ? (N = o(h, g.props), N.ref = Fo(m, h, g), N.return = m, N) : (N = Ws(g.type, g.key, g.props, null, m.mode, N), N.ref = Fo(m, h, g), N.return = m, N);
  }
  function u(m, h, g, N) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = Su(g, m.mode, N), h.return = m, h) : (h = o(h, g.children || []), h.return = m, h);
  }
  function f(m, h, g, N, C) {
    return h === null || h.tag !== 7 ? (h = wr(g, m.mode, N, C), h.return = m, h) : (h = o(h, g), h.return = m, h);
  }
  function c(m, h, g) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Tu("" + h, m.mode, g), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case as:
          return g = Ws(h.type, h.key, h.props, null, m.mode, g), g.ref = Fo(m, null, h), g.return = m, g;
        case jr:
          return h = Su(h, m.mode, g), h.return = m, h;
        case Rn:
          var N = h._init;
          return c(m, N(h._payload), g);
      }
      if (Go(h) || $o(h))
        return h = wr(h, m.mode, g, null), h.return = m, h;
      vs(m, h);
    }
    return null;
  }
  function p(m, h, g, N) {
    var C = h !== null ? h.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return C !== null ? null : a(m, h, "" + g, N);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case as:
          return g.key === C ? l(m, h, g, N) : null;
        case jr:
          return g.key === C ? u(m, h, g, N) : null;
        case Rn:
          return C = g._init, p(
            m,
            h,
            C(g._payload),
            N
          );
      }
      if (Go(g) || $o(g))
        return C !== null ? null : f(m, h, g, N, null);
      vs(m, g);
    }
    return null;
  }
  function v(m, h, g, N, C) {
    if (typeof N == "string" && N !== "" || typeof N == "number")
      return m = m.get(g) || null, a(h, m, "" + N, C);
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case as:
          return m = m.get(N.key === null ? g : N.key) || null, l(h, m, N, C);
        case jr:
          return m = m.get(N.key === null ? g : N.key) || null, u(h, m, N, C);
        case Rn:
          var b = N._init;
          return v(m, h, g, b(N._payload), C);
      }
      if (Go(N) || $o(N))
        return m = m.get(g) || null, f(h, m, N, C, null);
      vs(h, N);
    }
    return null;
  }
  function k(m, h, g, N) {
    for (var C = null, b = null, S = h, z = h = 0, j = null; S !== null && z < g.length; z++) {
      S.index > z ? (j = S, S = null) : j = S.sibling;
      var _ = p(m, S, g[z], N);
      if (_ === null) {
        S === null && (S = j);
        break;
      }
      e && S && _.alternate === null && t(m, S), h = i(_, h, z), b === null ? C = _ : b.sibling = _, b = _, S = j;
    }
    if (z === g.length)
      return n(m, S), fe && dr(m, z), C;
    if (S === null) {
      for (; z < g.length; z++)
        S = c(m, g[z], N), S !== null && (h = i(S, h, z), b === null ? C = S : b.sibling = S, b = S);
      return fe && dr(m, z), C;
    }
    for (S = r(m, S); z < g.length; z++)
      j = v(S, m, z, g[z], N), j !== null && (e && j.alternate !== null && S.delete(j.key === null ? z : j.key), h = i(j, h, z), b === null ? C = j : b.sibling = j, b = j);
    return e && S.forEach(function(I) {
      return t(m, I);
    }), fe && dr(m, z), C;
  }
  function T(m, h, g, N) {
    var C = $o(g);
    if (typeof C != "function")
      throw Error(M(150));
    if (g = C.call(g), g == null)
      throw Error(M(151));
    for (var b = C = null, S = h, z = h = 0, j = null, _ = g.next(); S !== null && !_.done; z++, _ = g.next()) {
      S.index > z ? (j = S, S = null) : j = S.sibling;
      var I = p(m, S, _.value, N);
      if (I === null) {
        S === null && (S = j);
        break;
      }
      e && S && I.alternate === null && t(m, S), h = i(I, h, z), b === null ? C = I : b.sibling = I, b = I, S = j;
    }
    if (_.done)
      return n(
        m,
        S
      ), fe && dr(m, z), C;
    if (S === null) {
      for (; !_.done; z++, _ = g.next())
        _ = c(m, _.value, N), _ !== null && (h = i(_, h, z), b === null ? C = _ : b.sibling = _, b = _);
      return fe && dr(m, z), C;
    }
    for (S = r(m, S); !_.done; z++, _ = g.next())
      _ = v(S, m, z, _.value, N), _ !== null && (e && _.alternate !== null && S.delete(_.key === null ? z : _.key), h = i(_, h, z), b === null ? C = _ : b.sibling = _, b = _);
    return e && S.forEach(function(H) {
      return t(m, H);
    }), fe && dr(m, z), C;
  }
  function P(m, h, g, N) {
    if (typeof g == "object" && g !== null && g.type === Br && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case as:
          e: {
            for (var C = g.key, b = h; b !== null; ) {
              if (b.key === C) {
                if (C = g.type, C === Br) {
                  if (b.tag === 7) {
                    n(m, b.sibling), h = o(b, g.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (b.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Rn && Dp(C) === b.type) {
                  n(m, b.sibling), h = o(b, g.props), h.ref = Fo(m, b, g), h.return = m, m = h;
                  break e;
                }
                n(m, b);
                break;
              } else
                t(m, b);
              b = b.sibling;
            }
            g.type === Br ? (h = wr(g.props.children, m.mode, N, g.key), h.return = m, m = h) : (N = Ws(g.type, g.key, g.props, null, m.mode, N), N.ref = Fo(m, h, g), N.return = m, m = N);
          }
          return s(m);
        case jr:
          e: {
            for (b = g.key; h !== null; ) {
              if (h.key === b)
                if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                  n(m, h.sibling), h = o(h, g.children || []), h.return = m, m = h;
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else
                t(m, h);
              h = h.sibling;
            }
            h = Su(g, m.mode, N), h.return = m, m = h;
          }
          return s(m);
        case Rn:
          return b = g._init, P(m, h, b(g._payload), N);
      }
      if (Go(g))
        return k(m, h, g, N);
      if ($o(g))
        return T(m, h, g, N);
      vs(m, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, g), h.return = m, m = h) : (n(m, h), h = Tu(g, m.mode, N), h.return = m, m = h), s(m)) : n(m, h);
  }
  return P;
}
var po = Lg(!0), zg = Lg(!1), fa = or(null), pa = null, Jr = null, wd = null;
function Td() {
  wd = Jr = pa = null;
}
function Sd(e) {
  var t = fa.current;
  de(fa), e._currentValue = t;
}
function pc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function io(e, t) {
  pa = e, wd = Jr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (mt = !0), e.firstContext = null);
}
function It(e) {
  var t = e._currentValue;
  if (wd !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Jr === null) {
      if (pa === null)
        throw Error(M(308));
      Jr = e, pa.dependencies = { lanes: 0, firstContext: e };
    } else
      Jr = Jr.next = e;
  return t;
}
var hr = null;
function kd(e) {
  hr === null ? hr = [e] : hr.push(e);
}
function _g(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, kd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, En(e, r);
}
function En(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var $n = !1;
function Ed(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Og(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Yn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, te & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, En(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, kd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, En(e, n);
}
function Us(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ld(e, n);
  }
}
function Hp(e, t) {
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
function ma(e, t, n, r) {
  var o = e.updateQueue;
  $n = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, s === null ? i = u : s.next = u, s = l;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, a = f.lastBaseUpdate, a !== s && (a === null ? f.firstBaseUpdate = u : a.next = u, f.lastBaseUpdate = l));
  }
  if (i !== null) {
    var c = o.baseState;
    s = 0, f = u = l = null, a = i;
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
                c = k.call(v, c, p);
                break e;
              }
              c = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = T.payload, p = typeof k == "function" ? k.call(v, c, p) : k, p == null)
                break e;
              c = he({}, c, p);
              break e;
            case 2:
              $n = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [a] : p.push(a));
      } else
        v = { eventTime: v, lane: p, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, f === null ? (u = f = v, l = c) : f = f.next = v, s |= p;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null)
          break;
        p = a, a = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (1);
    if (f === null && (l = c), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    Er |= s, e.lanes = s, e.memoizedState = c;
  }
}
function Fp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(M(191, o));
        o.call(r);
      }
    }
}
var Ki = {}, cn = or(Ki), Ai = or(Ki), Ci = or(Ki);
function gr(e) {
  if (e === Ki)
    throw Error(M(174));
  return e;
}
function Ad(e, t) {
  switch (ue(Ci, t), ue(Ai, e), ue(cn, Ki), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Wu(t, e);
  }
  de(cn), ue(cn, t);
}
function mo() {
  de(cn), de(Ai), de(Ci);
}
function Rg(e) {
  gr(Ci.current);
  var t = gr(cn.current), n = Wu(t, e.type);
  t !== n && (ue(Ai, e), ue(cn, n));
}
function Cd(e) {
  Ai.current === e && (de(cn), de(Ai));
}
var pe = or(0);
function ha(e) {
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
var mu = [];
function bd() {
  for (var e = 0; e < mu.length; e++)
    mu[e]._workInProgressVersionPrimary = null;
  mu.length = 0;
}
var js = Nn.ReactCurrentDispatcher, hu = Nn.ReactCurrentBatchConfig, kr = 0, me = null, ze = null, He = null, ga = !1, si = !1, bi = 0, DT = 0;
function Qe() {
  throw Error(M(321));
}
function Nd(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Gt(e[n], t[n]))
      return !1;
  return !0;
}
function xd(e, t, n, r, o, i) {
  if (kr = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, js.current = e === null || e.memoizedState === null ? jT : BT, e = n(r, o), si) {
    i = 0;
    do {
      if (si = !1, bi = 0, 25 <= i)
        throw Error(M(301));
      i += 1, He = ze = null, t.updateQueue = null, js.current = KT, e = n(r, o);
    } while (si);
  }
  if (js.current = ya, t = ze !== null && ze.next !== null, kr = 0, He = ze = me = null, ga = !1, t)
    throw Error(M(300));
  return e;
}
function Pd() {
  var e = bi !== 0;
  return bi = 0, e;
}
function rn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return He === null ? me.memoizedState = He = e : He = He.next = e, He;
}
function Dt() {
  if (ze === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ze.next;
  var t = He === null ? me.memoizedState : He.next;
  if (t !== null)
    He = t, ze = e;
  else {
    if (e === null)
      throw Error(M(310));
    ze = e, e = { memoizedState: ze.memoizedState, baseState: ze.baseState, baseQueue: ze.baseQueue, queue: ze.queue, next: null }, He === null ? me.memoizedState = He = e : He = He.next = e;
  }
  return He;
}
function Ni(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gu(e) {
  var t = Dt(), n = t.queue;
  if (n === null)
    throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = ze, o = r.baseQueue, i = n.pending;
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
      var f = u.lane;
      if ((kr & f) === f)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = c, s = r) : l = l.next = c, me.lanes |= f, Er |= f;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, Gt(r, t.memoizedState) || (mt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, me.lanes |= i, Er |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function yu(e) {
  var t = Dt(), n = t.queue;
  if (n === null)
    throw Error(M(311));
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
function $g() {
}
function Mg(e, t) {
  var n = me, r = Dt(), o = t(), i = !Gt(r.memoizedState, o);
  if (i && (r.memoizedState = o, mt = !0), r = r.queue, Ld(Hg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || He !== null && He.memoizedState.tag & 1) {
    if (n.flags |= 2048, xi(9, Dg.bind(null, n, r, o, t), void 0, null), Fe === null)
      throw Error(M(349));
    kr & 30 || Ig(n, t, o);
  }
  return o;
}
function Ig(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Dg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Fg(t) && Ug(e);
}
function Hg(e, t, n) {
  return n(function() {
    Fg(t) && Ug(e);
  });
}
function Fg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Gt(e, n);
  } catch {
    return !0;
  }
}
function Ug(e) {
  var t = En(e, 1);
  t !== null && Yt(t, e, 1, -1);
}
function Up(e) {
  var t = rn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ni, lastRenderedState: e }, t.queue = e, e = e.dispatch = UT.bind(null, me, e), [t.memoizedState, e];
}
function xi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function jg() {
  return Dt().memoizedState;
}
function Bs(e, t, n, r) {
  var o = rn();
  me.flags |= e, o.memoizedState = xi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ua(e, t, n, r) {
  var o = Dt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ze !== null) {
    var s = ze.memoizedState;
    if (i = s.destroy, r !== null && Nd(r, s.deps)) {
      o.memoizedState = xi(t, n, i, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = xi(1 | t, n, i, r);
}
function jp(e, t) {
  return Bs(8390656, 8, e, t);
}
function Ld(e, t) {
  return Ua(2048, 8, e, t);
}
function Bg(e, t) {
  return Ua(4, 2, e, t);
}
function Kg(e, t) {
  return Ua(4, 4, e, t);
}
function Zg(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Vg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ua(4, 4, Zg.bind(null, t, e), n);
}
function zd() {
}
function Wg(e, t) {
  var n = Dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Yg(e, t) {
  var n = Dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Gg(e, t, n) {
  return kr & 21 ? (Gt(n, t) || (n = eg(), me.lanes |= n, Er |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, mt = !0), e.memoizedState = n);
}
function HT(e, t) {
  var n = se;
  se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = hu.transition;
  hu.transition = {};
  try {
    e(!1), t();
  } finally {
    se = n, hu.transition = r;
  }
}
function Xg() {
  return Dt().memoizedState;
}
function FT(e, t, n) {
  var r = Xn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Jg(e))
    Qg(t, n);
  else if (n = _g(e, t, n, r), n !== null) {
    var o = lt();
    Yt(n, e, r, o), qg(n, t, r);
  }
}
function UT(e, t, n) {
  var r = Xn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jg(e))
    Qg(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var s = t.lastRenderedState, a = i(s, n);
        if (o.hasEagerState = !0, o.eagerState = a, Gt(a, s)) {
          var l = t.interleaved;
          l === null ? (o.next = o, kd(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = _g(e, t, o, r), n !== null && (o = lt(), Yt(n, e, r, o), qg(n, t, r));
  }
}
function Jg(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function Qg(e, t) {
  si = ga = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function qg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ld(e, n);
  }
}
var ya = { readContext: It, useCallback: Qe, useContext: Qe, useEffect: Qe, useImperativeHandle: Qe, useInsertionEffect: Qe, useLayoutEffect: Qe, useMemo: Qe, useReducer: Qe, useRef: Qe, useState: Qe, useDebugValue: Qe, useDeferredValue: Qe, useTransition: Qe, useMutableSource: Qe, useSyncExternalStore: Qe, useId: Qe, unstable_isNewReconciler: !1 }, jT = { readContext: It, useCallback: function(e, t) {
  return rn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: It, useEffect: jp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Bs(
    4194308,
    4,
    Zg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Bs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Bs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = rn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = rn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = FT.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = rn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Up, useDebugValue: zd, useDeferredValue: function(e) {
  return rn().memoizedState = e;
}, useTransition: function() {
  var e = Up(!1), t = e[0];
  return e = HT.bind(null, e[1]), rn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = me, o = rn();
  if (fe) {
    if (n === void 0)
      throw Error(M(407));
    n = n();
  } else {
    if (n = t(), Fe === null)
      throw Error(M(349));
    kr & 30 || Ig(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, jp(Hg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, xi(9, Dg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = rn(), t = Fe.identifierPrefix;
  if (fe) {
    var n = wn, r = vn;
    n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = bi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = DT++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, BT = {
  readContext: It,
  useCallback: Wg,
  useContext: It,
  useEffect: Ld,
  useImperativeHandle: Vg,
  useInsertionEffect: Bg,
  useLayoutEffect: Kg,
  useMemo: Yg,
  useReducer: gu,
  useRef: jg,
  useState: function() {
    return gu(Ni);
  },
  useDebugValue: zd,
  useDeferredValue: function(e) {
    var t = Dt();
    return Gg(t, ze.memoizedState, e);
  },
  useTransition: function() {
    var e = gu(Ni)[0], t = Dt().memoizedState;
    return [e, t];
  },
  useMutableSource: $g,
  useSyncExternalStore: Mg,
  useId: Xg,
  unstable_isNewReconciler: !1
}, KT = { readContext: It, useCallback: Wg, useContext: It, useEffect: Ld, useImperativeHandle: Vg, useInsertionEffect: Bg, useLayoutEffect: Kg, useMemo: Yg, useReducer: yu, useRef: jg, useState: function() {
  return yu(Ni);
}, useDebugValue: zd, useDeferredValue: function(e) {
  var t = Dt();
  return ze === null ? t.memoizedState = e : Gg(t, ze.memoizedState, e);
}, useTransition: function() {
  var e = yu(Ni)[0], t = Dt().memoizedState;
  return [e, t];
}, useMutableSource: $g, useSyncExternalStore: Mg, useId: Xg, unstable_isNewReconciler: !1 };
function jt(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function mc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ja = { isMounted: function(e) {
  return (e = e._reactInternals) ? xr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = lt(), o = Xn(e), i = Tn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Yn(e, i, o), t !== null && (Yt(t, e, o, r), Us(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = lt(), o = Xn(e), i = Tn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Yn(e, i, o), t !== null && (Yt(t, e, o, r), Us(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = lt(), r = Xn(e), o = Tn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Yn(e, o, r), t !== null && (Yt(t, e, r, n), Us(t, e, r));
} };
function Bp(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ti(n, r) || !Ti(o, i) : !0;
}
function ey(e, t, n) {
  var r = !1, o = er, i = t.contextType;
  return typeof i == "object" && i !== null ? i = It(i) : (o = gt(t) ? Tr : rt.current, r = t.contextTypes, i = (r = r != null) ? co(e, o) : er), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ja, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Kp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ja.enqueueReplaceState(t, t.state, null);
}
function hc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Ed(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = It(i) : (i = gt(t) ? Tr : rt.current, o.context = co(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (mc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ja.enqueueReplaceState(o, o.state, null), ma(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ho(e, t) {
  try {
    var n = "", r = t;
    do
      n += vw(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function vu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ZT = typeof WeakMap == "function" ? WeakMap : Map;
function ty(e, t, n) {
  n = Tn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    wa || (wa = !0, bc = r), gc(e, t);
  }, n;
}
function ny(e, t, n) {
  n = Tn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      gc(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    gc(e, t), typeof r != "function" && (Gn === null ? Gn = /* @__PURE__ */ new Set([this]) : Gn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Zp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ZT();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = i1.bind(null, e, t, n), t.then(e, e));
}
function Vp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wp(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tn(-1, 1), t.tag = 2, Yn(n, t, 1))), n.lanes |= 1), e);
}
var VT = Nn.ReactCurrentOwner, mt = !1;
function at(e, t, n, r) {
  t.child = e === null ? zg(t, null, n, r) : po(t, e.child, n, r);
}
function Yp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return io(t, o), r = xd(e, t, n, r, i, o), n = Pd(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, An(e, t, o)) : (fe && n && gd(t), t.flags |= 1, at(e, t, r, o), t.child);
}
function Gp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Hd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ry(e, t, i, r, o)) : (e = Ws(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ti, n(s, r) && e.ref === t.ref)
      return An(e, t, o);
  }
  return t.flags |= 1, e = Jn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ry(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ti(i, r) && e.ref === t.ref)
      if (mt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (mt = !0);
      else
        return t.lanes = e.lanes, An(e, t, o);
  }
  return yc(e, t, n, r, o);
}
function oy(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(qr, Tt), Tt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ue(qr, Tt), Tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ue(qr, Tt), Tt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ue(qr, Tt), Tt |= r;
  return at(e, t, o, n), t.child;
}
function iy(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function yc(e, t, n, r, o) {
  var i = gt(n) ? Tr : rt.current;
  return i = co(t, i), io(t, o), n = xd(e, t, n, r, i, o), r = Pd(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, An(e, t, o)) : (fe && r && gd(t), t.flags |= 1, at(e, t, n, o), t.child);
}
function Xp(e, t, n, r, o) {
  if (gt(n)) {
    var i = !0;
    ua(t);
  } else
    i = !1;
  if (io(t, o), t.stateNode === null)
    Ks(e, t), ey(t, n, r), hc(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = It(u) : (u = gt(n) ? Tr : rt.current, u = co(t, u));
    var f = n.getDerivedStateFromProps, c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Kp(t, s, r, u), $n = !1;
    var p = t.memoizedState;
    s.state = p, ma(t, r, s, o), l = t.memoizedState, a !== r || p !== l || ht.current || $n ? (typeof f == "function" && (mc(t, n, f, r), l = t.memoizedState), (a = $n || Bp(t, n, a, r, p, l, u)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Og(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : jt(t.type, a), s.props = u, c = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = It(l) : (l = gt(n) ? Tr : rt.current, l = co(t, l));
    var v = n.getDerivedStateFromProps;
    (f = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== c || p !== l) && Kp(t, s, r, l), $n = !1, p = t.memoizedState, s.state = p, ma(t, r, s, o);
    var k = t.memoizedState;
    a !== c || p !== k || ht.current || $n ? (typeof v == "function" && (mc(t, n, v, r), k = t.memoizedState), (u = $n || Bp(t, n, u, r, p, k, l) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, k, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, k, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), s.props = r, s.state = k, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return vc(e, t, n, r, i, o);
}
function vc(e, t, n, r, o, i) {
  iy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return o && $p(t, n, !1), An(e, t, i);
  r = t.stateNode, VT.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = po(t, e.child, null, i), t.child = po(t, null, a, i)) : at(e, t, a, i), t.memoizedState = r.state, o && $p(t, n, !0), t.child;
}
function sy(e) {
  var t = e.stateNode;
  t.pendingContext ? Rp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rp(e, t.context, !1), Ad(e, t.containerInfo);
}
function Jp(e, t, n, r, o) {
  return fo(), vd(o), t.flags |= 256, at(e, t, n, r), t.child;
}
var wc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ay(e, t, n) {
  var r = t.pendingProps, o = pe.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ue(pe, o & 1), e === null)
    return fc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Za(s, r, 0, null), e = wr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Tc(n), t.memoizedState = wc, e) : _d(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return WT(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Jn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Jn(a, i) : (i = wr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Tc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = wc, r;
  }
  return i = e.child, e = i.sibling, r = Jn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function _d(e, t) {
  return t = Za({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ws(e, t, n, r) {
  return r !== null && vd(r), po(t, e.child, null, n), e = _d(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function WT(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = vu(Error(M(422))), ws(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Za({ mode: "visible", children: r.children }, o, 0, null), i = wr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && po(t, e.child, null, s), t.child.memoizedState = Tc(s), t.memoizedState = wc, i);
  if (!(t.mode & 1))
    return ws(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(M(419)), r = vu(i, r, void 0), ws(e, t, s, r);
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
    return Dd(), r = vu(Error(M(421))), ws(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = s1.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Et = Wn(o.nextSibling), At = t, fe = !0, Kt = null, e !== null && (_t[Ot++] = vn, _t[Ot++] = wn, _t[Ot++] = Sr, vn = e.id, wn = e.overflow, Sr = t), t = _d(t, r.children), t.flags |= 4096, t);
}
function Qp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), pc(e.return, t, n);
}
function wu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function ly(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (at(e, t, r.children, n), r = pe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Qp(e, n, t);
          else if (e.tag === 19)
            Qp(e, n, t);
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
          e = n.alternate, e !== null && ha(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), wu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && ha(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        wu(t, !0, n, null, i);
        break;
      case "together":
        wu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ks(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function An(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Er |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Jn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function YT(e, t, n) {
  switch (t.tag) {
    case 3:
      sy(t), fo();
      break;
    case 5:
      Rg(t);
      break;
    case 1:
      gt(t.type) && ua(t);
      break;
    case 4:
      Ad(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ue(fa, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ue(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ay(e, t, n) : (ue(pe, pe.current & 1), e = An(e, t, n), e !== null ? e.sibling : null);
      ue(pe, pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return ly(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ue(pe, pe.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, oy(e, t, n);
  }
  return An(e, t, n);
}
var uy, Sc, cy, dy;
uy = function(e, t) {
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
Sc = function() {
};
cy = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, gr(cn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Bu(e, o), r = Bu(e, r), i = [];
        break;
      case "select":
        o = he({}, o, { value: void 0 }), r = he({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Vu(e, o), r = Vu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = aa);
    }
    Yu(n, r);
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
dy = function(e, t, n, r) {
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
function GT(e, t, n) {
  var r = t.pendingProps;
  switch (yd(t), t.tag) {
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
      return gt(t.type) && la(), qe(t), null;
    case 3:
      return r = t.stateNode, mo(), de(ht), de(rt), bd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ys(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Kt !== null && (Pc(Kt), Kt = null))), Sc(e, t), qe(t), null;
    case 5:
      Cd(t);
      var o = gr(Ci.current);
      if (n = t.type, e !== null && t.stateNode != null)
        cy(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(M(166));
          return qe(t), null;
        }
        if (e = gr(cn.current), ys(t)) {
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
              ap(r, i), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ce("invalid", r);
              break;
            case "textarea":
              up(r, i), ce("invalid", r);
          }
          Yu(n, i), o = null;
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
              ls(r), lp(r, i, !0);
              break;
            case "textarea":
              ls(r), cp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = aa);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Hh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[an] = t, e[Ei] = r, uy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Gu(n, r), n) {
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
                ap(e, r), o = Bu(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = he({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                up(e, r), o = Vu(e, r), ce("invalid", e);
                break;
              default:
                o = r;
            }
            Yu(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? jh(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Fh(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && mi(e, l) : typeof l == "number" && mi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (pi.hasOwnProperty(i) ? l != null && i === "onScroll" && ce("scroll", e) : l != null && nd(e, i, l, s));
              }
            switch (n) {
              case "input":
                ls(e), lp(e, r, !1);
                break;
              case "textarea":
                ls(e), cp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qn(r.value));
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
                typeof o.onClick == "function" && (e.onclick = aa);
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
        dy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(M(166));
        if (n = gr(Ci.current), gr(cn.current), ys(t)) {
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
          Pg(), fo(), t.flags |= 98560, i = !1;
        else if (i = ys(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(M(317));
            i[an] = t;
          } else
            fo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          qe(t), i = !1;
        } else
          Kt !== null && (Pc(Kt), Kt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? _e === 0 && (_e = 3) : Dd())), t.updateQueue !== null && (t.flags |= 4), qe(t), null);
    case 4:
      return mo(), Sc(e, t), e === null && Si(t.stateNode.containerInfo), qe(t), null;
    case 10:
      return Sd(t.type._context), qe(t), null;
    case 17:
      return gt(t.type) && la(), qe(t), null;
    case 19:
      if (de(pe), i = t.memoizedState, i === null)
        return qe(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r)
          Uo(i, !1);
        else {
          if (_e !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = ha(e), s !== null) {
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
          if (e = ha(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Uo(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !fe)
              return qe(t), null;
          } else
            2 * Ae() - i.renderingStartTime > go && n !== 1073741824 && (t.flags |= 128, r = !0, Uo(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ae(), t.sibling = null, n = pe.current, ue(pe, r ? n & 1 | 2 : n & 1), t) : (qe(t), null);
    case 22:
    case 23:
      return Id(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Tt & 1073741824 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function XT(e, t) {
  switch (yd(t), t.tag) {
    case 1:
      return gt(t.type) && la(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mo(), de(ht), de(rt), bd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Cd(t), null;
    case 13:
      if (de(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(M(340));
        fo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return de(pe), null;
    case 4:
      return mo(), null;
    case 10:
      return Sd(t.type._context), null;
    case 22:
    case 23:
      return Id(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ts = !1, nt = !1, JT = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Qr(e, t) {
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
function kc(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var qp = !1;
function QT(e, t) {
  if (ic = oa, e = gg(), hd(e)) {
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
          var s = 0, a = -1, l = -1, u = 0, f = 0, c = e, p = null;
          t:
            for (; ; ) {
              for (var v; c !== n || o !== 0 && c.nodeType !== 3 || (a = s + o), c !== i || r !== 0 && c.nodeType !== 3 || (l = s + r), c.nodeType === 3 && (s += c.nodeValue.length), (v = c.firstChild) !== null; )
                p = c, c = v;
              for (; ; ) {
                if (c === e)
                  break t;
                if (p === n && ++u === o && (a = s), p === i && ++f === r && (l = s), (v = c.nextSibling) !== null)
                  break;
                c = p, p = c.parentNode;
              }
              c = v;
            }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (sc = { focusedElem: e, selectionRange: n }, oa = !1, B = t; B !== null; )
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
                  var T = k.memoizedProps, P = k.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? T : jt(t.type, T), P);
                  m.__reactInternalSnapshotBeforeUpdate = h;
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
                throw Error(M(163));
            }
        } catch (N) {
          ke(t, t.return, N);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, B = e;
          break;
        }
        B = t.return;
      }
  return k = qp, qp = !1, k;
}
function ai(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && kc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ba(e, t) {
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
function Ec(e) {
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
function fy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, fy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[an], delete t[Ei], delete t[uc], delete t[RT], delete t[$T])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function py(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function em(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || py(e.return))
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
function Ac(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = aa));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ac(e, t, n), e = e.sibling; e !== null; )
      Ac(e, t, n), e = e.sibling;
}
function Cc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Cc(e, t, n), e = e.sibling; e !== null; )
      Cc(e, t, n), e = e.sibling;
}
var Ke = null, Bt = !1;
function zn(e, t, n) {
  for (n = n.child; n !== null; )
    my(e, t, n), n = n.sibling;
}
function my(e, t, n) {
  if (un && typeof un.onCommitFiberUnmount == "function")
    try {
      un.onCommitFiberUnmount($a, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      nt || Qr(n, t);
    case 6:
      var r = Ke, o = Bt;
      Ke = null, zn(e, t, n), Ke = r, Bt = o, Ke !== null && (Bt ? (e = Ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ke.removeChild(n.stateNode));
      break;
    case 18:
      Ke !== null && (Bt ? (e = Ke, n = n.stateNode, e.nodeType === 8 ? fu(e.parentNode, n) : e.nodeType === 1 && fu(e, n), vi(e)) : fu(Ke, n.stateNode));
      break;
    case 4:
      r = Ke, o = Bt, Ke = n.stateNode.containerInfo, Bt = !0, zn(e, t, n), Ke = r, Bt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!nt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && kc(n, t, s), o = o.next;
        } while (o !== r);
      }
      zn(e, t, n);
      break;
    case 1:
      if (!nt && (Qr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
      n.mode & 1 ? (nt = (r = nt) || n.memoizedState !== null, zn(e, t, n), nt = r) : zn(e, t, n);
      break;
    default:
      zn(e, t, n);
  }
}
function tm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new JT()), t.forEach(function(r) {
      var o = a1.bind(null, e, r);
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
          throw Error(M(160));
        my(i, s, o), Ke = null, Bt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        ke(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      hy(t, e), t = t.sibling;
}
function hy(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ut(t, e), en(e), r & 4) {
        try {
          ai(3, e, e.return), Ba(3, e);
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
      Ut(t, e), en(e), r & 512 && n !== null && Qr(n, n.return);
      break;
    case 5:
      if (Ut(t, e), en(e), r & 512 && n !== null && Qr(n, n.return), e.flags & 32) {
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
            a === "input" && i.type === "radio" && i.name != null && Ih(o, i), Gu(a, s);
            var u = Gu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var f = l[s], c = l[s + 1];
              f === "style" ? jh(o, c) : f === "dangerouslySetInnerHTML" ? Fh(o, c) : f === "children" ? mi(o, c) : nd(o, f, c, u);
            }
            switch (a) {
              case "input":
                Ku(o, i);
                break;
              case "textarea":
                Dh(o, i);
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
          throw Error(M(162));
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
      Ut(t, e), en(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || ($d = Ae())), r & 4 && tm(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (nt = (u = nt) || f, Ut(t, e), nt = u) : Ut(t, e), en(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
          for (B = e, f = e.child; f !== null; ) {
            for (c = B = f; B !== null; ) {
              switch (p = B, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ai(4, p, p.return);
                  break;
                case 1:
                  Qr(p, p.return);
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
                  Qr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    rm(c);
                    continue;
                  }
              }
              v !== null ? (v.return = p, B = v) : rm(c);
            }
            f = f.sibling;
          }
        e:
          for (f = null, c = e; ; ) {
            if (c.tag === 5) {
              if (f === null) {
                f = c;
                try {
                  o = c.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = c.stateNode, l = c.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Uh("display", s));
                } catch (T) {
                  ke(e, e.return, T);
                }
              }
            } else if (c.tag === 6) {
              if (f === null)
                try {
                  c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                } catch (T) {
                  ke(e, e.return, T);
                }
            } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
            if (c === e)
              break e;
            for (; c.sibling === null; ) {
              if (c.return === null || c.return === e)
                break e;
              f === c && (f = null), c = c.return;
            }
            f === c && (f = null), c.sibling.return = c.return, c = c.sibling;
          }
      }
      break;
    case 19:
      Ut(t, e), en(e), r & 4 && tm(e);
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
          if (py(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (mi(o, ""), r.flags &= -33);
          var i = em(e);
          Cc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = em(e);
          Ac(e, a, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      ke(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qT(e, t, n) {
  B = e, gy(e);
}
function gy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ts;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || nt;
        a = Ts;
        var u = nt;
        if (Ts = s, (nt = l) && !u)
          for (B = o; B !== null; )
            s = B, l = s.child, s.tag === 22 && s.memoizedState !== null ? om(o) : l !== null ? (l.return = s, B = l) : om(o);
        for (; i !== null; )
          B = i, gy(i), i = i.sibling;
        B = o, Ts = a, nt = u;
      }
      nm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : nm(e);
  }
}
function nm(e) {
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
              nt || Ba(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !nt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Fp(t, i, r);
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
                Fp(t, s, n);
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
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && vi(c);
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
              throw Error(M(163));
          }
        nt || t.flags & 512 && Ec(t);
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
function rm(e) {
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
function om(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ba(4, t);
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
            Ec(t);
          } catch (l) {
            ke(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ec(t);
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
var e1 = Math.ceil, va = Nn.ReactCurrentDispatcher, Od = Nn.ReactCurrentOwner, Mt = Nn.ReactCurrentBatchConfig, te = 0, Fe = null, xe = null, We = 0, Tt = 0, qr = or(0), _e = 0, Pi = null, Er = 0, Ka = 0, Rd = 0, li = null, pt = null, $d = 0, go = 1 / 0, mn = null, wa = !1, bc = null, Gn = null, Ss = !1, Fn = null, Ta = 0, ui = 0, Nc = null, Zs = -1, Vs = 0;
function lt() {
  return te & 6 ? Ae() : Zs !== -1 ? Zs : Zs = Ae();
}
function Xn(e) {
  return e.mode & 1 ? te & 2 && We !== 0 ? We & -We : IT.transition !== null ? (Vs === 0 && (Vs = eg()), Vs) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ag(e.type)), e) : 1;
}
function Yt(e, t, n, r) {
  if (50 < ui)
    throw ui = 0, Nc = null, Error(M(185));
  Ui(e, n, r), (!(te & 2) || e !== Fe) && (e === Fe && (!(te & 2) && (Ka |= n), _e === 4 && In(e, We)), yt(e, r), n === 1 && te === 0 && !(t.mode & 1) && (go = Ae() + 500, Fa && ir()));
}
function yt(e, t) {
  var n = e.callbackNode;
  Iw(e, t);
  var r = ra(e, e === Fe ? We : 0);
  if (r === 0)
    n !== null && pp(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && pp(n), t === 1)
      e.tag === 0 ? MT(im.bind(null, e)) : bg(im.bind(null, e)), _T(function() {
        !(te & 6) && ir();
      }), n = null;
    else {
      switch (tg(r)) {
        case 1:
          n = ad;
          break;
        case 4:
          n = Qh;
          break;
        case 16:
          n = na;
          break;
        case 536870912:
          n = qh;
          break;
        default:
          n = na;
      }
      n = Ay(n, yy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function yy(e, t) {
  if (Zs = -1, Vs = 0, te & 6)
    throw Error(M(327));
  var n = e.callbackNode;
  if (so() && e.callbackNode !== n)
    return null;
  var r = ra(e, e === Fe ? We : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Sa(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var i = wy();
    (Fe !== e || We !== t) && (mn = null, go = Ae() + 500, vr(e, t));
    do
      try {
        r1();
        break;
      } catch (a) {
        vy(e, a);
      }
    while (1);
    Td(), va.current = i, te = o, xe !== null ? t = 0 : (Fe = null, We = 0, t = _e);
  }
  if (t !== 0) {
    if (t === 2 && (o = ec(e), o !== 0 && (r = o, t = xc(e, o))), t === 1)
      throw n = Pi, vr(e, 0), In(e, r), yt(e, Ae()), n;
    if (t === 6)
      In(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !t1(o) && (t = Sa(e, r), t === 2 && (i = ec(e), i !== 0 && (r = i, t = xc(e, i))), t === 1))
        throw n = Pi, vr(e, 0), In(e, r), yt(e, Ae()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          fr(e, pt, mn);
          break;
        case 3:
          if (In(e, r), (r & 130023424) === r && (t = $d + 500 - Ae(), 10 < t)) {
            if (ra(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              lt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = lc(fr.bind(null, e, pt, mn), t);
            break;
          }
          fr(e, pt, mn);
          break;
        case 4:
          if (In(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Wt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * e1(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = lc(fr.bind(null, e, pt, mn), r);
            break;
          }
          fr(e, pt, mn);
          break;
        case 5:
          fr(e, pt, mn);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return yt(e, Ae()), e.callbackNode === n ? yy.bind(null, e) : null;
}
function xc(e, t) {
  var n = li;
  return e.current.memoizedState.isDehydrated && (vr(e, t).flags |= 256), e = Sa(e, t), e !== 2 && (t = pt, pt = n, t !== null && Pc(t)), e;
}
function Pc(e) {
  pt === null ? pt = e : pt.push.apply(pt, e);
}
function t1(e) {
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
  for (t &= ~Rd, t &= ~Ka, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Wt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function im(e) {
  if (te & 6)
    throw Error(M(327));
  so();
  var t = ra(e, 0);
  if (!(t & 1))
    return yt(e, Ae()), null;
  var n = Sa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ec(e);
    r !== 0 && (t = r, n = xc(e, r));
  }
  if (n === 1)
    throw n = Pi, vr(e, 0), In(e, t), yt(e, Ae()), n;
  if (n === 6)
    throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fr(e, pt, mn), yt(e, Ae()), null;
}
function Md(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = n, te === 0 && (go = Ae() + 500, Fa && ir());
  }
}
function Ar(e) {
  Fn !== null && Fn.tag === 0 && !(te & 6) && so();
  var t = te;
  te |= 1;
  var n = Mt.transition, r = se;
  try {
    if (Mt.transition = null, se = 1, e)
      return e();
  } finally {
    se = r, Mt.transition = n, te = t, !(te & 6) && ir();
  }
}
function Id() {
  Tt = qr.current, de(qr);
}
function vr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, zT(n)), xe !== null)
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch (yd(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && la();
          break;
        case 3:
          mo(), de(ht), de(rt), bd();
          break;
        case 5:
          Cd(r);
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
          Sd(r.type._context);
          break;
        case 22:
        case 23:
          Id();
      }
      n = n.return;
    }
  if (Fe = e, xe = e = Jn(e.current, null), We = Tt = t, _e = 0, Pi = null, Rd = Ka = Er = 0, pt = li = null, hr !== null) {
    for (t = 0; t < hr.length; t++)
      if (n = hr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = o, r.next = s;
        }
        n.pending = r;
      }
    hr = null;
  }
  return e;
}
function vy(e, t) {
  do {
    var n = xe;
    try {
      if (Td(), js.current = ya, ga) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ga = !1;
      }
      if (kr = 0, He = ze = me = null, si = !1, bi = 0, Od.current = null, n === null || n.return === null) {
        _e = 1, Pi = t, xe = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = We, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, f = a, c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var p = f.alternate;
            p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var v = Vp(s);
          if (v !== null) {
            v.flags &= -257, Wp(v, s, a, i, t), v.mode & 1 && Zp(i, u, t), t = v, l = u;
            var k = t.updateQueue;
            if (k === null) {
              var T = /* @__PURE__ */ new Set();
              T.add(l), t.updateQueue = T;
            } else
              k.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Zp(i, u, t), Dd();
              break e;
            }
            l = Error(M(426));
          }
        } else if (fe && a.mode & 1) {
          var P = Vp(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), Wp(P, s, a, i, t), vd(ho(l, a));
            break e;
          }
        }
        i = l = ho(l, a), _e !== 4 && (_e = 2), li === null ? li = [i] : li.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = ty(i, l, t);
              Hp(i, m);
              break e;
            case 1:
              a = l;
              var h = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Gn === null || !Gn.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var N = ny(i, a, t);
                Hp(i, N);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Sy(n);
    } catch (C) {
      t = C, xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function wy() {
  var e = va.current;
  return va.current = ya, e === null ? ya : e;
}
function Dd() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4), Fe === null || !(Er & 268435455) && !(Ka & 268435455) || In(Fe, We);
}
function Sa(e, t) {
  var n = te;
  te |= 2;
  var r = wy();
  (Fe !== e || We !== t) && (mn = null, vr(e, t));
  do
    try {
      n1();
      break;
    } catch (o) {
      vy(e, o);
    }
  while (1);
  if (Td(), te = n, va.current = r, xe !== null)
    throw Error(M(261));
  return Fe = null, We = 0, _e;
}
function n1() {
  for (; xe !== null; )
    Ty(xe);
}
function r1() {
  for (; xe !== null && !xw(); )
    Ty(xe);
}
function Ty(e) {
  var t = Ey(e.alternate, e, Tt);
  e.memoizedProps = e.pendingProps, t === null ? Sy(e) : xe = t, Od.current = null;
}
function Sy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = XT(n, t), n !== null) {
        n.flags &= 32767, xe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        _e = 6, xe = null;
        return;
      }
    } else if (n = GT(n, t, Tt), n !== null) {
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
function fr(e, t, n) {
  var r = se, o = Mt.transition;
  try {
    Mt.transition = null, se = 1, o1(e, t, n, r);
  } finally {
    Mt.transition = o, se = r;
  }
  return null;
}
function o1(e, t, n, r) {
  do
    so();
  while (Fn !== null);
  if (te & 6)
    throw Error(M(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Dw(e, i), e === Fe && (xe = Fe = null, We = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ss || (Ss = !0, Ay(na, function() {
    return so(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Mt.transition, Mt.transition = null;
    var s = se;
    se = 1;
    var a = te;
    te |= 4, Od.current = null, QT(e, n), hy(n, e), AT(sc), oa = !!ic, sc = ic = null, e.current = n, qT(n), Pw(), te = a, se = s, Mt.transition = i;
  } else
    e.current = n;
  if (Ss && (Ss = !1, Fn = e, Ta = o), i = e.pendingLanes, i === 0 && (Gn = null), _w(n.stateNode), yt(e, Ae()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (wa)
    throw wa = !1, e = bc, bc = null, e;
  return Ta & 1 && e.tag !== 0 && so(), i = e.pendingLanes, i & 1 ? e === Nc ? ui++ : (ui = 0, Nc = e) : ui = 0, ir(), null;
}
function so() {
  if (Fn !== null) {
    var e = tg(Ta), t = Mt.transition, n = se;
    try {
      if (Mt.transition = null, se = 16 > e ? 16 : e, Fn === null)
        var r = !1;
      else {
        if (e = Fn, Fn = null, Ta = 0, te & 6)
          throw Error(M(331));
        var o = te;
        for (te |= 4, B = e.current; B !== null; ) {
          var i = B, s = i.child;
          if (B.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (B = u; B !== null; ) {
                  var f = B;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ai(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null)
                    c.return = f, B = c;
                  else
                    for (; B !== null; ) {
                      f = B;
                      var p = f.sibling, v = f.return;
                      if (fy(f), f === u) {
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
                    var P = T.sibling;
                    T.sibling = null, T = P;
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
                var m = i.sibling;
                if (m !== null) {
                  m.return = i.return, B = m;
                  break e;
                }
                B = i.return;
              }
        }
        var h = e.current;
        for (B = h; B !== null; ) {
          s = B;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null)
            g.return = s, B = g;
          else
            e:
              for (s = h; B !== null; ) {
                if (a = B, a.flags & 2048)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ba(9, a);
                    }
                  } catch (C) {
                    ke(a, a.return, C);
                  }
                if (a === s) {
                  B = null;
                  break e;
                }
                var N = a.sibling;
                if (N !== null) {
                  N.return = a.return, B = N;
                  break e;
                }
                B = a.return;
              }
        }
        if (te = o, ir(), un && typeof un.onPostCommitFiberRoot == "function")
          try {
            un.onPostCommitFiberRoot($a, e);
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
function sm(e, t, n) {
  t = ho(n, t), t = ty(e, t, 1), e = Yn(e, t, 1), t = lt(), e !== null && (Ui(e, 1, t), yt(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3)
    sm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gn === null || !Gn.has(r))) {
          e = ho(n, e), e = ny(t, e, 1), t = Yn(t, e, 1), e = lt(), t !== null && (Ui(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function i1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = lt(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (We & n) === n && (_e === 4 || _e === 3 && (We & 130023424) === We && 500 > Ae() - $d ? vr(e, 0) : Rd |= n), yt(e, t);
}
function ky(e, t) {
  t === 0 && (e.mode & 1 ? (t = ds, ds <<= 1, !(ds & 130023424) && (ds = 4194304)) : t = 1);
  var n = lt();
  e = En(e, t), e !== null && (Ui(e, t, n), yt(e, n));
}
function s1(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ky(e, n);
}
function a1(e, t) {
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
      throw Error(M(314));
  }
  r !== null && r.delete(t), ky(e, n);
}
var Ey;
Ey = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ht.current)
      mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return mt = !1, YT(e, t, n);
      mt = !!(e.flags & 131072);
    }
  else
    mt = !1, fe && t.flags & 1048576 && Ng(t, da, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ks(e, t), e = t.pendingProps;
      var o = co(t, rt.current);
      io(t, n), o = xd(null, t, r, e, o, n);
      var i = Pd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gt(r) ? (i = !0, ua(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ed(t), o.updater = ja, t.stateNode = o, o._reactInternals = t, hc(t, r, e, n), t = vc(null, t, r, !0, i, n)) : (t.tag = 0, fe && i && gd(t), at(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ks(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = u1(r), e = jt(r, e), o) {
          case 0:
            t = yc(null, t, r, e, n);
            break e;
          case 1:
            t = Xp(null, t, r, e, n);
            break e;
          case 11:
            t = Yp(null, t, r, e, n);
            break e;
          case 14:
            t = Gp(null, t, r, jt(r.type, e), n);
            break e;
        }
        throw Error(M(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), yc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), Xp(e, t, r, o, n);
    case 3:
      e: {
        if (sy(t), e === null)
          throw Error(M(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Og(e, t), ma(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ho(Error(M(423)), t), t = Jp(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = ho(Error(M(424)), t), t = Jp(e, t, r, n, o);
            break e;
          } else
            for (Et = Wn(t.stateNode.containerInfo.firstChild), At = t, fe = !0, Kt = null, n = zg(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fo(), r === o) {
            t = An(e, t, n);
            break e;
          }
          at(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Rg(t), e === null && fc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, ac(r, o) ? s = null : i !== null && ac(r, i) && (t.flags |= 32), iy(e, t), at(e, t, s, n), t.child;
    case 6:
      return e === null && fc(t), null;
    case 13:
      return ay(e, t, n);
    case 4:
      return Ad(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = po(t, null, r, n) : at(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), Yp(e, t, r, o, n);
    case 7:
      return at(e, t, t.pendingProps, n), t.child;
    case 8:
      return at(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return at(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ue(fa, r._currentValue), r._currentValue = s, i !== null)
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
                        var f = u.pending;
                        f === null ? l.next = l : (l.next = f.next, f.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), pc(
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
                  throw Error(M(341));
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), pc(s, n, t), s = i.sibling;
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
        at(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, io(t, n), o = It(o), r = r(o), t.flags |= 1, at(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = jt(r, t.pendingProps), o = jt(r.type, o), Gp(e, t, r, o, n);
    case 15:
      return ry(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), Ks(e, t), t.tag = 1, gt(r) ? (e = !0, ua(t)) : e = !1, io(t, n), ey(t, r, o), hc(t, r, o, n), vc(null, t, r, !0, e, n);
    case 19:
      return ly(e, t, n);
    case 22:
      return oy(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Ay(e, t) {
  return Jh(e, t);
}
function l1(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function $t(e, t, n, r) {
  return new l1(e, t, n, r);
}
function Hd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function u1(e) {
  if (typeof e == "function")
    return Hd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === od)
      return 11;
    if (e === id)
      return 14;
  }
  return 2;
}
function Jn(e, t) {
  var n = e.alternate;
  return n === null ? (n = $t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ws(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function")
    Hd(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case Br:
          return wr(n.children, o, i, t);
        case rd:
          s = 8, o |= 8;
          break;
        case Hu:
          return e = $t(12, n, t, o | 2), e.elementType = Hu, e.lanes = i, e;
        case Fu:
          return e = $t(13, n, t, o), e.elementType = Fu, e.lanes = i, e;
        case Uu:
          return e = $t(19, n, t, o), e.elementType = Uu, e.lanes = i, e;
        case Rh:
          return Za(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case _h:
                s = 10;
                break e;
              case Oh:
                s = 9;
                break e;
              case od:
                s = 11;
                break e;
              case id:
                s = 14;
                break e;
              case Rn:
                s = 16, r = null;
                break e;
            }
          throw Error(M(130, e == null ? e : typeof e, ""));
      }
  return t = $t(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function wr(e, t, n, r) {
  return e = $t(7, e, r, t), e.lanes = n, e;
}
function Za(e, t, n, r) {
  return e = $t(22, e, r, t), e.elementType = Rh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Tu(e, t, n) {
  return e = $t(6, e, null, t), e.lanes = n, e;
}
function Su(e, t, n) {
  return t = $t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function c1(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tu(0), this.expirationTimes = tu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Fd(e, t, n, r, o, i, s, a, l) {
  return e = new c1(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = $t(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ed(i), e;
}
function d1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Cy(e) {
  if (!e)
    return er;
  e = e._reactInternals;
  e: {
    if (xr(e) !== e || e.tag !== 1)
      throw Error(M(170));
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
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (gt(n))
      return Cg(e, n, t);
  }
  return t;
}
function by(e, t, n, r, o, i, s, a, l) {
  return e = Fd(n, r, !0, e, o, i, s, a, l), e.context = Cy(null), n = e.current, r = lt(), o = Xn(n), i = Tn(r, o), i.callback = t ?? null, Yn(n, i, o), e.current.lanes = o, Ui(e, o, r), yt(e, r), e;
}
function Va(e, t, n, r) {
  var o = t.current, i = lt(), s = Xn(o);
  return n = Cy(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Yn(o, t, s), e !== null && (Yt(e, o, s, i), Us(e, o, s)), s;
}
function ka(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function am(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ud(e, t) {
  am(e, t), (e = e.alternate) && am(e, t);
}
function f1() {
  return null;
}
var Ny = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function jd(e) {
  this._internalRoot = e;
}
Wa.prototype.render = jd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(M(409));
  Va(e, t, null, null);
};
Wa.prototype.unmount = jd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ar(function() {
      Va(null, e, null, null);
    }), t[kn] = null;
  }
};
function Wa(e) {
  this._internalRoot = e;
}
Wa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = og();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mn.length && t !== 0 && t < Mn[n].priority; n++)
      ;
    Mn.splice(n, 0, e), n === 0 && sg(e);
  }
};
function Bd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ya(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function lm() {
}
function p1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = ka(s);
        i.call(u);
      };
    }
    var s = by(t, r, e, 0, null, !1, !1, "", lm);
    return e._reactRootContainer = s, e[kn] = s.current, Si(e.nodeType === 8 ? e.parentNode : e), Ar(), s;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = ka(l);
      a.call(u);
    };
  }
  var l = Fd(e, 0, !1, null, null, !1, !1, "", lm);
  return e._reactRootContainer = l, e[kn] = l.current, Si(e.nodeType === 8 ? e.parentNode : e), Ar(function() {
    Va(t, l, n, r);
  }), l;
}
function Ga(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = ka(s);
        a.call(l);
      };
    }
    Va(t, s, e, o);
  } else
    s = p1(n, t, e, o, r);
  return ka(s);
}
ng = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xo(t.pendingLanes);
        n !== 0 && (ld(t, n | 1), yt(t, Ae()), !(te & 6) && (go = Ae() + 500, ir()));
      }
      break;
    case 13:
      Ar(function() {
        var r = En(e, 1);
        if (r !== null) {
          var o = lt();
          Yt(r, e, 1, o);
        }
      }), Ud(e, 1);
  }
};
ud = function(e) {
  if (e.tag === 13) {
    var t = En(e, 134217728);
    if (t !== null) {
      var n = lt();
      Yt(t, e, 134217728, n);
    }
    Ud(e, 134217728);
  }
};
rg = function(e) {
  if (e.tag === 13) {
    var t = Xn(e), n = En(e, t);
    if (n !== null) {
      var r = lt();
      Yt(n, e, t, r);
    }
    Ud(e, t);
  }
};
og = function() {
  return se;
};
ig = function(e, t) {
  var n = se;
  try {
    return se = e, t();
  } finally {
    se = n;
  }
};
Ju = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ku(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ha(r);
            if (!o)
              throw Error(M(90));
            Mh(r), Ku(r, o);
          }
        }
      }
      break;
    case "textarea":
      Dh(e, n);
      break;
    case "select":
      t = n.value, t != null && to(e, !!n.multiple, t, !1);
  }
};
Zh = Md;
Vh = Ar;
var m1 = { usingClientEntryPoint: !1, Events: [Bi, Wr, Ha, Bh, Kh, Md] }, jo = { findFiberByHostInstance: mr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, h1 = { bundleType: jo.bundleType, version: jo.version, rendererPackageName: jo.rendererPackageName, rendererConfig: jo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Nn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Gh(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jo.findFiberByHostInstance || f1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ks.isDisabled && ks.supportsFiber)
    try {
      $a = ks.inject(h1), un = ks;
    } catch {
    }
}
Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m1;
Nt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bd(t))
    throw Error(M(200));
  return d1(e, t, null, n);
};
Nt.createRoot = function(e, t) {
  if (!Bd(e))
    throw Error(M(299));
  var n = !1, r = "", o = Ny;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Fd(e, 1, !1, null, null, n, !1, r, o), e[kn] = t.current, Si(e.nodeType === 8 ? e.parentNode : e), new jd(t);
};
Nt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = Gh(t), e = e === null ? null : e.stateNode, e;
};
Nt.flushSync = function(e) {
  return Ar(e);
};
Nt.hydrate = function(e, t, n) {
  if (!Ya(t))
    throw Error(M(200));
  return Ga(null, e, t, !0, n);
};
Nt.hydrateRoot = function(e, t, n) {
  if (!Bd(e))
    throw Error(M(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Ny;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = by(t, null, e, 1, n ?? null, o, !1, i, s), e[kn] = t.current, Si(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Wa(t);
};
Nt.render = function(e, t, n) {
  if (!Ya(t))
    throw Error(M(200));
  return Ga(null, e, t, !1, n);
};
Nt.unmountComponentAtNode = function(e) {
  if (!Ya(e))
    throw Error(M(40));
  return e._reactRootContainer ? (Ar(function() {
    Ga(null, null, e, !1, function() {
      e._reactRootContainer = null, e[kn] = null;
    });
  }), !0) : !1;
};
Nt.unstable_batchedUpdates = Md;
Nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ya(n))
    throw Error(M(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(M(38));
  return Ga(e, t, n, !1, r);
};
Nt.version = "18.3.1-next-f1338f8080-20240426";
function xy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xy);
    } catch (e) {
      console.error(e);
    }
}
xy(), xh.exports = Nt;
var g1 = xh.exports, Py, um = g1;
Py = um.createRoot, um.hydrateRoot;
function y1(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const cm = "$$material";
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
function Xa(e, t) {
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
var v1 = !1;
function w1(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function T1(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var S1 = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !v1 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(T1(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = w1(o);
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
}(), et = "-ms-", Ea = "-moz-", re = "-webkit-", Ly = "comm", Kd = "rule", Zd = "decl", k1 = "@import", zy = "@keyframes", E1 = "@layer", A1 = Math.abs, Ja = String.fromCharCode, C1 = Object.assign;
function b1(e, t) {
  return Ze(e, 0) ^ 45 ? (((t << 2 ^ Ze(e, 0)) << 2 ^ Ze(e, 1)) << 2 ^ Ze(e, 2)) << 2 ^ Ze(e, 3) : 0;
}
function _y(e) {
  return e.trim();
}
function N1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, n) {
  return e.replace(t, n);
}
function Lc(e, t) {
  return e.indexOf(t);
}
function Ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function Li(e, t, n) {
  return e.slice(t, n);
}
function on(e) {
  return e.length;
}
function Vd(e) {
  return e.length;
}
function Es(e, t) {
  return t.push(e), e;
}
function x1(e, t) {
  return e.map(t).join("");
}
var Qa = 1, yo = 1, Oy = 0, vt = 0, Ne = 0, Co = "";
function qa(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Qa, column: yo, length: s, return: "" };
}
function Bo(e, t) {
  return C1(qa("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function P1() {
  return Ne;
}
function L1() {
  return Ne = vt > 0 ? Ze(Co, --vt) : 0, yo--, Ne === 10 && (yo = 1, Qa--), Ne;
}
function Ct() {
  return Ne = vt < Oy ? Ze(Co, vt++) : 0, yo++, Ne === 10 && (yo = 1, Qa++), Ne;
}
function dn() {
  return Ze(Co, vt);
}
function Ys() {
  return vt;
}
function Zi(e, t) {
  return Li(Co, e, t);
}
function zi(e) {
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
function Ry(e) {
  return Qa = yo = 1, Oy = on(Co = e), vt = 0, [];
}
function $y(e) {
  return Co = "", e;
}
function Gs(e) {
  return _y(Zi(vt - 1, zc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function z1(e) {
  for (; (Ne = dn()) && Ne < 33; )
    Ct();
  return zi(e) > 2 || zi(Ne) > 3 ? "" : " ";
}
function _1(e, t) {
  for (; --t && Ct() && !(Ne < 48 || Ne > 102 || Ne > 57 && Ne < 65 || Ne > 70 && Ne < 97); )
    ;
  return Zi(e, Ys() + (t < 6 && dn() == 32 && Ct() == 32));
}
function zc(e) {
  for (; Ct(); )
    switch (Ne) {
      case e:
        return vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && zc(Ne);
        break;
      case 40:
        e === 41 && zc(e);
        break;
      case 92:
        Ct();
        break;
    }
  return vt;
}
function O1(e, t) {
  for (; Ct() && e + Ne !== 47 + 10; )
    if (e + Ne === 42 + 42 && dn() === 47)
      break;
  return "/*" + Zi(t, vt - 1) + "*" + Ja(e === 47 ? e : Ct());
}
function R1(e) {
  for (; !zi(dn()); )
    Ct();
  return Zi(e, vt);
}
function $1(e) {
  return $y(Xs("", null, null, null, [""], e = Ry(e), 0, [0], e));
}
function Xs(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, f = 0, c = s, p = 0, v = 0, k = 0, T = 1, P = 1, m = 1, h = 0, g = "", N = o, C = i, b = r, S = g; P; )
    switch (k = h, h = Ct()) {
      case 40:
        if (k != 108 && Ze(S, c - 1) == 58) {
          Lc(S += oe(Gs(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Gs(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += z1(k);
        break;
      case 92:
        S += _1(Ys() - 1, 7);
        continue;
      case 47:
        switch (dn()) {
          case 42:
          case 47:
            Es(M1(O1(Ct(), Ys()), t, n), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * T:
        a[u++] = on(S) * m;
      case 125 * T:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            P = 0;
          case 59 + f:
            m == -1 && (S = oe(S, /\f/g, "")), v > 0 && on(S) - c && Es(v > 32 ? fm(S + ";", r, n, c - 1) : fm(oe(S, " ", "") + ";", r, n, c - 2), l);
            break;
          case 59:
            S += ";";
          default:
            if (Es(b = dm(S, t, n, u, f, o, a, g, N = [], C = [], c), i), h === 123)
              if (f === 0)
                Xs(S, t, b, b, N, i, c, a, C);
              else
                switch (p === 99 && Ze(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xs(e, b, b, r && Es(dm(e, b, b, 0, 0, o, a, g, o, N = [], c), C), o, C, c, a, r ? N : C);
                    break;
                  default:
                    Xs(S, b, b, b, [""], C, 0, a, C);
                }
        }
        u = f = v = 0, T = m = 1, g = S = "", c = s;
        break;
      case 58:
        c = 1 + on(S), v = k;
      default:
        if (T < 1) {
          if (h == 123)
            --T;
          else if (h == 125 && T++ == 0 && L1() == 125)
            continue;
        }
        switch (S += Ja(h), h * T) {
          case 38:
            m = f > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            a[u++] = (on(S) - 1) * m, m = 1;
            break;
          case 64:
            dn() === 45 && (S += Gs(Ct())), p = dn(), f = c = on(g = S += R1(Ys())), h++;
            break;
          case 45:
            k === 45 && on(S) == 2 && (T = 0);
        }
    }
  return i;
}
function dm(e, t, n, r, o, i, s, a, l, u, f) {
  for (var c = o - 1, p = o === 0 ? i : [""], v = Vd(p), k = 0, T = 0, P = 0; k < r; ++k)
    for (var m = 0, h = Li(e, c + 1, c = A1(T = s[k])), g = e; m < v; ++m)
      (g = _y(T > 0 ? p[m] + " " + h : oe(h, /&\f/g, p[m]))) && (l[P++] = g);
  return qa(e, t, n, o === 0 ? Kd : a, l, u, f);
}
function M1(e, t, n) {
  return qa(e, t, n, Ly, Ja(P1()), Li(e, 2, -2), 0);
}
function fm(e, t, n, r) {
  return qa(e, t, n, Zd, Li(e, 0, r), Li(e, r + 1, -1), r);
}
function ao(e, t) {
  for (var n = "", r = Vd(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function I1(e, t, n, r) {
  switch (e.type) {
    case E1:
      if (e.children.length)
        break;
    case k1:
    case Zd:
      return e.return = e.return || e.value;
    case Ly:
      return "";
    case zy:
      return e.return = e.value + "{" + ao(e.children, r) + "}";
    case Kd:
      e.value = e.props.join(",");
  }
  return on(n = ao(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function D1(e) {
  var t = Vd(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function H1(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function My(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var F1 = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = dn(), o === 38 && i === 12 && (n[r] = 1), !zi(i); )
    Ct();
  return Zi(t, vt);
}, U1 = function(t, n) {
  var r = -1, o = 44;
  do
    switch (zi(o)) {
      case 0:
        o === 38 && dn() === 12 && (n[r] = 1), t[r] += F1(vt - 1, n, r);
        break;
      case 2:
        t[r] += Gs(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = dn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Ja(o);
    }
  while (o = Ct());
  return t;
}, j1 = function(t, n) {
  return $y(U1(Ry(t), n));
}, pm = /* @__PURE__ */ new WeakMap(), B1 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !pm.get(r)) && !o) {
      pm.set(t, !0);
      for (var i = [], s = j1(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
        for (var f = 0; f < a.length; f++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, a[f]) : a[f] + " " + s[l];
    }
  }
}, K1 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Iy(e, t) {
  switch (b1(e, t)) {
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
      return re + e + Ea + e + et + e + e;
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
            return oe(e, /(.+:)(.+)-([^]+)/, "$1" + re + "$2-$3$1" + Ea + (Ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Lc(e, "stretch") ? Iy(oe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ze(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ze(e, on(e) - 3 - (~Lc(e, "!important") && 10))) {
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
var Z1 = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Zd:
        t.return = Iy(t.value, t.length);
        break;
      case zy:
        return ao([Bo(t, {
          value: oe(t.value, "@", "@" + re)
        })], o);
      case Kd:
        if (t.length)
          return x1(t.props, function(i) {
            switch (N1(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ao([Bo(t, {
                  props: [oe(i, /:(read-\w+)/, ":" + Ea + "$1")]
                })], o);
              case "::placeholder":
                return ao([Bo(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + re + "input-$1")]
                }), Bo(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + Ea + "$1")]
                }), Bo(t, {
                  props: [oe(i, /:(plac\w+)/, et + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, V1 = [Z1], W1 = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(T) {
      var P = T.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(T), T.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || V1, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(T) {
      for (var P = T.getAttribute("data-emotion").split(" "), m = 1; m < P.length; m++)
        i[P[m]] = !0;
      a.push(T);
    }
  );
  var l, u = [B1, K1];
  {
    var f, c = [I1, H1(function(T) {
      f.insert(T);
    })], p = D1(u.concat(o, c)), v = function(P) {
      return ao($1(P), p);
    };
    l = function(P, m, h, g) {
      f = h, v(P ? P + "{" + m.styles + "}" : m.styles), g && (k.inserted[m.name] = !0);
    };
  }
  var k = {
    key: n,
    sheet: new S1({
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
}, Dy = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je = typeof Symbol == "function" && Symbol.for, Wd = je ? Symbol.for("react.element") : 60103, Yd = je ? Symbol.for("react.portal") : 60106, el = je ? Symbol.for("react.fragment") : 60107, tl = je ? Symbol.for("react.strict_mode") : 60108, nl = je ? Symbol.for("react.profiler") : 60114, rl = je ? Symbol.for("react.provider") : 60109, ol = je ? Symbol.for("react.context") : 60110, Gd = je ? Symbol.for("react.async_mode") : 60111, il = je ? Symbol.for("react.concurrent_mode") : 60111, sl = je ? Symbol.for("react.forward_ref") : 60112, al = je ? Symbol.for("react.suspense") : 60113, Y1 = je ? Symbol.for("react.suspense_list") : 60120, ll = je ? Symbol.for("react.memo") : 60115, ul = je ? Symbol.for("react.lazy") : 60116, G1 = je ? Symbol.for("react.block") : 60121, X1 = je ? Symbol.for("react.fundamental") : 60117, J1 = je ? Symbol.for("react.responder") : 60118, Q1 = je ? Symbol.for("react.scope") : 60119;
function Pt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Wd:
        switch (e = e.type, e) {
          case Gd:
          case il:
          case el:
          case nl:
          case tl:
          case al:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ol:
              case sl:
              case ul:
              case ll:
              case rl:
                return e;
              default:
                return t;
            }
        }
      case Yd:
        return t;
    }
  }
}
function Hy(e) {
  return Pt(e) === il;
}
le.AsyncMode = Gd;
le.ConcurrentMode = il;
le.ContextConsumer = ol;
le.ContextProvider = rl;
le.Element = Wd;
le.ForwardRef = sl;
le.Fragment = el;
le.Lazy = ul;
le.Memo = ll;
le.Portal = Yd;
le.Profiler = nl;
le.StrictMode = tl;
le.Suspense = al;
le.isAsyncMode = function(e) {
  return Hy(e) || Pt(e) === Gd;
};
le.isConcurrentMode = Hy;
le.isContextConsumer = function(e) {
  return Pt(e) === ol;
};
le.isContextProvider = function(e) {
  return Pt(e) === rl;
};
le.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wd;
};
le.isForwardRef = function(e) {
  return Pt(e) === sl;
};
le.isFragment = function(e) {
  return Pt(e) === el;
};
le.isLazy = function(e) {
  return Pt(e) === ul;
};
le.isMemo = function(e) {
  return Pt(e) === ll;
};
le.isPortal = function(e) {
  return Pt(e) === Yd;
};
le.isProfiler = function(e) {
  return Pt(e) === nl;
};
le.isStrictMode = function(e) {
  return Pt(e) === tl;
};
le.isSuspense = function(e) {
  return Pt(e) === al;
};
le.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === el || e === il || e === nl || e === tl || e === al || e === Y1 || typeof e == "object" && e !== null && (e.$$typeof === ul || e.$$typeof === ll || e.$$typeof === rl || e.$$typeof === ol || e.$$typeof === sl || e.$$typeof === X1 || e.$$typeof === J1 || e.$$typeof === Q1 || e.$$typeof === G1);
};
le.typeOf = Pt;
Dy.exports = le;
var q1 = Dy.exports, Fy = q1, eS = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, tS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Uy = {};
Uy[Fy.ForwardRef] = eS;
Uy[Fy.Memo] = tS;
var nS = !0;
function jy(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Xd = function(t, n, r) {
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
  nS === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Jd = function(t, n, r) {
  Xd(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function rS(e) {
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
var oS = {
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
}, iS = !1, sS = /[A-Z]|^ms/g, aS = /_EMO_([^_]+?)_([^]*?)_EMO_/g, By = function(t) {
  return t.charCodeAt(1) === 45;
}, mm = function(t) {
  return t != null && typeof t != "boolean";
}, ku = /* @__PURE__ */ My(function(e) {
  return By(e) ? e : e.replace(sS, "-$&").toLowerCase();
}), hm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(aS, function(r, o, i) {
          return sn = {
            name: o,
            styles: i,
            next: sn
          }, o;
        });
  }
  return oS[t] !== 1 && !By(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, lS = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      return uS(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = sn, u = n(e);
        return sn = l, _i(e, t, u);
      }
      break;
    }
  }
  var f = n;
  if (t == null)
    return f;
  var c = t[f];
  return c !== void 0 ? c : f;
}
function uS(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += _i(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : mm(a) && (r += ku(i) + ":" + hm(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && iS)
          throw new Error(lS);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            mm(s[l]) && (r += ku(i) + ":" + hm(i, s[l]) + ";");
        else {
          var u = _i(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += ku(i) + ":" + u + ";";
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
var gm = /label:\s*([^\s;{]+)\s*(;|$)/g, sn;
function cl(e, t, n) {
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
  gm.lastIndex = 0;
  for (var u = "", f; (f = gm.exec(o)) !== null; )
    u += "-" + f[1];
  var c = rS(o) + u;
  return {
    name: c,
    styles: o,
    next: sn
  };
}
var cS = function(t) {
  return t();
}, Ky = Iu["useInsertionEffect"] ? Iu["useInsertionEffect"] : !1, Zy = Ky || cS, ym = Ky || E.useLayoutEffect, dS = !1, Vy = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ W1({
    key: "css"
  }) : null
);
Vy.Provider;
var Qd = function(t) {
  return /* @__PURE__ */ E.forwardRef(function(n, r) {
    var o = E.useContext(Vy);
    return t(n, o, r);
  });
}, Vi = /* @__PURE__ */ E.createContext({}), qd = {}.hasOwnProperty, _c = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", fS = function(t, n) {
  var r = {};
  for (var o in n)
    qd.call(n, o) && (r[o] = n[o]);
  return r[_c] = t, r;
}, pS = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Xd(n, r, o), Zy(function() {
    return Jd(n, r, o);
  }), null;
}, mS = /* @__PURE__ */ Qd(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[_c], i = [r], s = "";
  typeof e.className == "string" ? s = jy(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = cl(i, void 0, E.useContext(Vi));
  s += t.key + "-" + a.name;
  var l = {};
  for (var u in e)
    qd.call(e, u) && u !== "css" && u !== _c && !dS && (l[u] = e[u]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(pS, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ E.createElement(o, l));
}), hS = mS, Eu = { exports: {} }, vm;
function gS() {
  return vm || (vm = 1, function(e) {
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
  }(Eu)), Eu.exports;
}
gS();
var wm = function(t, n) {
  var r = arguments;
  if (n == null || !qd.call(n, "css"))
    return E.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = hS, i[1] = fS(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return E.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(wm || (wm = {}));
var yS = /* @__PURE__ */ Qd(function(e, t) {
  var n = e.styles, r = cl([n], void 0, E.useContext(Vi)), o = E.useRef();
  return ym(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), ym(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Jd(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
}), vS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wS = /* @__PURE__ */ My(
  function(e) {
    return vS.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), TS = !1, SS = wS, kS = function(t) {
  return t !== "theme";
}, Tm = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? SS : kS;
}, Sm = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, ES = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Xd(n, r, o), Zy(function() {
    return Jd(n, r, o);
  }), null;
}, AS = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = Sm(t, n, r), l = a || Tm(o), u = !l("as");
  return function() {
    var f = arguments, c = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && c.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      c.push.apply(c, f);
    else {
      var p = f[0];
      c.push(p[0]);
      for (var v = f.length, k = 1; k < v; k++)
        c.push(f[k], p[k]);
    }
    var T = Qd(function(P, m, h) {
      var g = u && P.as || o, N = "", C = [], b = P;
      if (P.theme == null) {
        b = {};
        for (var S in P)
          b[S] = P[S];
        b.theme = E.useContext(Vi);
      }
      typeof P.className == "string" ? N = jy(m.registered, C, P.className) : P.className != null && (N = P.className + " ");
      var z = cl(c.concat(C), m.registered, b);
      N += m.key + "-" + z.name, s !== void 0 && (N += " " + s);
      var j = u && a === void 0 ? Tm(g) : l, _ = {};
      for (var I in P)
        u && I === "as" || j(I) && (_[I] = P[I]);
      return _.className = N, h && (_.ref = h), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(ES, {
        cache: m,
        serialized: z,
        isStringTag: typeof g == "string"
      }), /* @__PURE__ */ E.createElement(g, _));
    });
    return T.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", T.defaultProps = t.defaultProps, T.__emotion_real = T, T.__emotion_base = o, T.__emotion_styles = c, T.__emotion_forwardProp = a, Object.defineProperty(T, "toString", {
      value: function() {
        return s === void 0 && TS ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), T.withComponent = function(P, m) {
      var h = e(P, Ye({}, n, m, {
        shouldForwardProp: Sm(T, m, !0)
      }));
      return h.apply(void 0, c);
    }, T;
  };
}, CS = [
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
], km = AS.bind(null);
CS.forEach(function(e) {
  km[e] = km(e);
});
function bS(e) {
  return e == null || Object.keys(e).length === 0;
}
function NS(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ d(yS, {
    styles: typeof t == "function" ? (o) => t(bS(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Em = [];
function xS(e) {
  return Em[0] = e, cl(Em);
}
function Fr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Wy(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !Fr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Wy(e[n]);
  }), t;
}
function Aa(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? Ye({}, e) : e;
  return Fr(e) && Fr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ E.isValidElement(t[o]) ? r[o] = t[o] : Fr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Fr(e[o]) ? r[o] = Aa(e[o], t[o], n) : n.clone ? r[o] = Fr(t[o]) ? Wy(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const PS = ["values", "unit", "step"], LS = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => Ye({}, n, {
    [r.key]: r.val
  }), {});
};
function zS(e) {
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
  } = e, o = Xa(e, PS), i = LS(t), s = Object.keys(i);
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
  function f(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : a(p);
  }
  function c(p) {
    const v = s.indexOf(p);
    return v === 0 ? a(s[1]) : v === s.length - 1 ? l(s[v]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return Ye({
    keys: s,
    values: i,
    up: a,
    down: l,
    between: u,
    only: f,
    not: c,
    unit: n
  }, o);
}
const _S = {
  borderRadius: 4
}, OS = _S;
function ci(e, t) {
  return t ? Aa(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ef = {
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
}, Am = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ef[e]}px)`
};
function Cn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Am;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Am;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || ef).indexOf(a) !== -1) {
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
function RS(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Cm(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Yy(e) {
  if (typeof e != "string")
    throw new Error(y1(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function dl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Ca(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = dl(e, n) || r, t && (o = t(o, r, e)), o;
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
    const a = s[t], l = s.theme, u = dl(l, r) || {};
    return Cn(s, a, (c) => {
      let p = Ca(u, o, c);
      return c === p && typeof c == "string" && (p = Ca(u, o, `${t}${c === "default" ? "" : Yy(c)}`, c)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function $S(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const MS = {
  m: "margin",
  p: "padding"
}, IS = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, bm = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, DS = $S((e) => {
  if (e.length > 2)
    if (bm[e])
      e = bm[e];
    else
      return [e];
  const [t, n] = e.split(""), r = MS[t], o = IS[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), tf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], nf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...tf, ...nf];
function Wi(e, t, n, r) {
  var o;
  const i = (o = dl(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function Gy(e) {
  return Wi(e, "spacing", 8);
}
function Yi(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function HS(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Yi(t, n), r), {});
}
function FS(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = DS(n), i = HS(o, r), s = e[n];
  return Cn(e, s, i);
}
function Xy(e, t) {
  const n = Gy(e.theme);
  return Object.keys(e).map((r) => FS(e, t, r, n)).reduce(ci, {});
}
function Te(e) {
  return Xy(e, tf);
}
Te.propTypes = {};
Te.filterProps = tf;
function Se(e) {
  return Xy(e, nf);
}
Se.propTypes = {};
Se.filterProps = nf;
function US(e = 8) {
  if (e.mui)
    return e;
  const t = Gy({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function fl(...e) {
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
const jS = Ht("border", Rt), BS = Ht("borderTop", Rt), KS = Ht("borderRight", Rt), ZS = Ht("borderBottom", Rt), VS = Ht("borderLeft", Rt), WS = Ht("borderColor"), YS = Ht("borderTopColor"), GS = Ht("borderRightColor"), XS = Ht("borderBottomColor"), JS = Ht("borderLeftColor"), QS = Ht("outline", Rt), qS = Ht("outlineColor"), pl = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Wi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Yi(t, r)
    });
    return Cn(e, e.borderRadius, n);
  }
  return null;
};
pl.propTypes = {};
pl.filterProps = ["borderRadius"];
fl(jS, BS, KS, ZS, VS, WS, YS, GS, XS, JS, pl, QS, qS);
const ml = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Wi(e.theme, "spacing", 8), n = (r) => ({
      gap: Yi(t, r)
    });
    return Cn(e, e.gap, n);
  }
  return null;
};
ml.propTypes = {};
ml.filterProps = ["gap"];
const hl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Wi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Yi(t, r)
    });
    return Cn(e, e.columnGap, n);
  }
  return null;
};
hl.propTypes = {};
hl.filterProps = ["columnGap"];
const gl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Wi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Yi(t, r)
    });
    return Cn(e, e.rowGap, n);
  }
  return null;
};
gl.propTypes = {};
gl.filterProps = ["rowGap"];
const ek = Ce({
  prop: "gridColumn"
}), tk = Ce({
  prop: "gridRow"
}), nk = Ce({
  prop: "gridAutoFlow"
}), rk = Ce({
  prop: "gridAutoColumns"
}), ok = Ce({
  prop: "gridAutoRows"
}), ik = Ce({
  prop: "gridTemplateColumns"
}), sk = Ce({
  prop: "gridTemplateRows"
}), ak = Ce({
  prop: "gridTemplateAreas"
}), lk = Ce({
  prop: "gridArea"
});
fl(ml, hl, gl, ek, tk, nk, rk, ok, ik, sk, ak, lk);
function lo(e, t) {
  return t === "grey" ? t : e;
}
const uk = Ce({
  prop: "color",
  themeKey: "palette",
  transform: lo
}), ck = Ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: lo
}), dk = Ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: lo
});
fl(uk, ck, dk);
function St(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const fk = Ce({
  prop: "width",
  transform: St
}), rf = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ef[n];
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
rf.filterProps = ["maxWidth"];
const pk = Ce({
  prop: "minWidth",
  transform: St
}), mk = Ce({
  prop: "height",
  transform: St
}), hk = Ce({
  prop: "maxHeight",
  transform: St
}), gk = Ce({
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
const yk = Ce({
  prop: "boxSizing"
});
fl(fk, rf, pk, mk, hk, gk, yk);
const vk = {
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
    style: pl
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
    style: ml
  },
  rowGap: {
    style: gl
  },
  columnGap: {
    style: hl
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
    style: rf
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
}, Jy = vk;
function wk(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Tk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sk() {
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
      transform: f,
      style: c
    } = a;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = dl(o, u) || {};
    return c ? c(s) : Cn(s, r, (k) => {
      let T = Ca(p, f, k);
      return k === T && typeof k == "string" && (T = Ca(p, f, `${n}${k === "default" ? "" : Yy(k)}`, k)), l === !1 ? T : {
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
    const a = (r = i.unstable_sxConfig) != null ? r : Jy;
    function l(u) {
      let f = u;
      if (typeof u == "function")
        f = u(i);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const c = RS(i.breakpoints), p = Object.keys(c);
      let v = c;
      return Object.keys(f).forEach((k) => {
        const T = Tk(f[k], i);
        if (T != null)
          if (typeof T == "object")
            if (a[k])
              v = ci(v, e(k, T, i, a));
            else {
              const P = Cn({
                theme: i
              }, T, (m) => ({
                [k]: m
              }));
              wk(P, T) ? v[k] = t({
                sx: T,
                theme: i,
                nested: !0
              }) : v = ci(v, P);
            }
          else
            v = ci(v, e(k, T, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": Cm(p, v)
      } : Cm(p, v);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const Qy = Sk();
Qy.filterProps = ["sx"];
const kk = Qy;
function Ek(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Ak = ["breakpoints", "palette", "spacing", "shape"];
function Ck(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = Xa(e, Ak), a = zS(n), l = US(o);
  let u = Aa({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Ye({
      mode: "light"
    }, r),
    spacing: l,
    shape: Ye({}, OS, i)
  }, s);
  return u.applyStyles = Ek, u = t.reduce((f, c) => Aa(f, c), u), u.unstable_sxConfig = Ye({}, Jy, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(c) {
    return kk({
      sx: c,
      theme: this
    });
  }, u;
}
function bk(e) {
  return Object.keys(e).length === 0;
}
function of(e = null) {
  const t = E.useContext(Vi);
  return !t || bk(t) ? e : t;
}
const Nk = Ck();
function xk(e = Nk) {
  return of(e);
}
function Au(e) {
  const t = xS(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Pk({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = xk(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Au(typeof s == "function" ? s(o) : s)) : i = Au(i)), /* @__PURE__ */ d(NS, {
    styles: i
  });
}
const Lk = typeof window < "u" ? E.useLayoutEffect : E.useEffect, zk = Lk;
let Nm = 0;
function _k(e) {
  const [t, n] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && (Nm += 1, n(`mui-${Nm}`));
  }, [t]), r;
}
const xm = Iu["useId".toString()];
function Ok(e) {
  if (xm !== void 0) {
    const t = xm();
    return e ?? t;
  }
  return _k(e);
}
const Rk = /* @__PURE__ */ E.createContext(null), qy = Rk;
function ev() {
  return E.useContext(qy);
}
const $k = typeof Symbol == "function" && Symbol.for, Mk = $k ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Ik(e, t) {
  return typeof t == "function" ? t(e) : Ye({}, e, t);
}
function Dk(e) {
  const {
    children: t,
    theme: n
  } = e, r = ev(), o = E.useMemo(() => {
    const i = r === null ? n : Ik(r, n);
    return i != null && (i[Mk] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ d(qy.Provider, {
    value: o,
    children: t
  });
}
const Hk = ["value"], Fk = /* @__PURE__ */ E.createContext();
function Uk(e) {
  let {
    value: t
  } = e, n = Xa(e, Hk);
  return /* @__PURE__ */ d(Fk.Provider, Ye({
    value: t ?? !0
  }, n));
}
const jk = /* @__PURE__ */ E.createContext(void 0);
function Bk({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ d(jk.Provider, {
    value: e,
    children: t
  });
}
function Kk(e) {
  const t = of(), n = Ok() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, zk(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ d(Pk, {
    styles: o
  }) : null;
}
const Pm = {};
function Lm(e, t, n, r = !1) {
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
function Zk(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = of(Pm), i = ev() || Pm, s = Lm(r, o, n), a = Lm(r, i, n, !0), l = s.direction === "rtl", u = Kk(s);
  return /* @__PURE__ */ d(Dk, {
    theme: a,
    children: /* @__PURE__ */ d(Vi.Provider, {
      value: s,
      children: /* @__PURE__ */ d(Uk, {
        value: l,
        children: /* @__PURE__ */ A(Bk, {
          value: s == null ? void 0 : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const Vk = ["theme"];
function Wk(e) {
  let {
    theme: t
  } = e, n = Xa(e, Vk);
  const r = t[cm];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = Ye({}, r, {
    vars: null
  }) : t && !t.vars && (o = Ye({}, t, {
    vars: null
  }))), /* @__PURE__ */ d(Zk, Ye({}, n, {
    themeId: r ? cm : void 0,
    theme: o
  }));
}
const Oc = "[CHMarketingBuilder]", Yk = {
  info: "color:#1565c0;font-weight:bold",
  resolved: "color:#2e7d32;font-weight:bold",
  missing: "color:#e65100;font-weight:bold",
  fallback: "color:#f57c00;font-weight:bold",
  error: "color:#c62828;font-weight:bold"
}, tv = {
  info: "INFO",
  resolved: "OK",
  missing: "MISSING",
  fallback: "FALLBACK",
  error: "ERROR"
};
let di = [];
function Gk(e) {
  return e instanceof Error ? e.message : e == null ? "" : String(e);
}
function Xk(e, t, n, r) {
  const o = tv[e], i = Yk[e];
  console.log(r ? `%c${Oc} %c${o}%c ${t}: ${n}
  → ${r}` : `%c${Oc} %c${o}%c ${t}: ${n}`, "font-weight:bold", i, "color:inherit");
}
function Jk() {
  di = [];
}
function Gi(e, t, n, r) {
  const o = Gk(n);
  di.push({ level: e, resource: t, detail: o, hint: r }), Xk(e, t, o, r);
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
function Qk(e, t, n) {
  Gi("fallback", e, t, n);
}
function Un(e, t, n) {
  Gi("error", e, t, n);
}
function zm(e) {
  const t = di.filter((n) => n.level !== "resolved" && n.level !== "info");
  console.groupCollapsed(
    `%c${Oc} Load summary — ${e.builderMode} builder (${t.length} note${t.length === 1 ? "" : "s"})`,
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
      Level: tv[n.level],
      Resource: n.resource,
      Detail: n.detail,
      Hint: n.hint ?? ""
    }))
  ), console.groupEnd();
}
function Cr(e) {
  if (typeof e != "string" || !e.trim())
    return;
  const t = e.match(/\/entities\/(\d+)(?:\?|$|\/)/);
  if (!t)
    return;
  const n = Number(t[1]);
  return Number.isFinite(n) ? n : void 0;
}
function br(e) {
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
    const o = Cr(r.href) ?? Cr(r.entity);
    o != null && t.push(o);
  }
  return t;
}
function yl(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = t.id ?? t.entityId;
  if (typeof n == "number" && Number.isFinite(n))
    return [n];
  const r = t.parent;
  if (r != null && typeof r == "object") {
    const s = r, a = Cr(s.href) ?? Cr(s.entity);
    if (a != null)
      return [a];
  }
  const o = br(t.parents);
  if (o.length > 0)
    return o;
  const i = br(t.children);
  return i.length > 0 ? i : [];
}
function ot(e, t) {
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
function sf(e, ...t) {
  if (!e)
    return [];
  for (const n of t) {
    const r = e[n];
    if (r != null) {
      if (Array.isArray(r)) {
        const o = br(r);
        if (o.length > 0)
          return o;
        continue;
      }
      if (typeof r == "object") {
        const o = yl(r);
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
  const o = sf(r, n);
  if (o.length > 0)
    return o;
  if (!((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    return [];
  const i = ot(r, n);
  if (!i)
    return [];
  try {
    const a = await e.raw.getAsync(i);
    return !a.isSuccessStatusCode || a.content == null ? [] : yl(a.content);
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
const qk = ["social", "email", "admin"], Ri = [
  "templateToZone",
  "templateToTemplateZone",
  "TemplateToZone",
  "TemplateToTemplateZone",
  "EPAM.TemplateToZone",
  "EPAM.TemplateToTemplateZone",
  "templateToEPAM.TemplateZone",
  "EPAM.TemplateZone",
  "TemplateZone"
], ba = [
  "templateZoneToTemplate",
  "zoneToTemplate",
  "TemplateZoneToTemplate",
  "EPAM.TemplateZoneToTemplate",
  "EPAM.TemplateToTemplateZone",
  "templateToTemplate"
], eE = [
  "marketingAssetToTemplate",
  "MarketingAssetToTemplate",
  "EPAM.MarketingAssetToTemplate"
], nv = [
  "templateZoneToAllowedAsset",
  "TemplateZoneToAllowedAsset",
  "EPAM.TemplateZoneToAllowedAsset",
  "templateZoneToAsset",
  "TemplateZoneToAsset",
  "EPAM.TemplateZoneToAsset"
], rv = [
  "templateToAllowedAsset",
  "TemplateToAllowedAsset",
  "EPAM.TemplateToAllowedAsset",
  "templateToAsset",
  "TemplateToAsset",
  "EPAM.TemplateToAsset"
], tE = [
  "zoneType",
  "ZoneType",
  "EPAM.ZoneType",
  "templateZoneType",
  "TemplateZoneType",
  "EPAM.TemplateZoneType"
], ov = [
  "zoneValueToSelectedAsset",
  "ZoneValueToSelectedAsset",
  "EPAM.MarketingAssetZoneValueToSelectedAsset",
  "marketingAssetZoneValueToSelectedAsset",
  "zoneValueToAsset",
  "ZoneValueToAsset"
];
function _m(e) {
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
function Om(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
  if (typeof e == "string")
    return e.trim() || void 0;
}
function nE(e) {
  if (!e || typeof e != "object")
    return;
  const t = e, n = t.systemProperties && typeof t.systemProperties == "object" ? t.systemProperties : null;
  return Om(n == null ? void 0 : n.id) || Om(t.id);
}
function rE(e, ...t) {
  if (!e || typeof e != "object")
    return;
  const n = e.relations;
  if (!n || typeof n != "object")
    return;
  const r = sf(n, ...t);
  if (r[0] != null)
    return String(r[0]);
}
function Rm(e) {
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
function $m(e) {
  if (typeof e != "string")
    return;
  const t = e.trim().toLowerCase();
  return qk.includes(t) ? t : void 0;
}
function af(e, t) {
  if (!(!e || typeof e != "object" || Array.isArray(e)))
    return e[t];
}
function Mm(e, t, n) {
  const r = af(t, e), o = Rm(r);
  if (o !== void 0)
    return o;
  const i = iv(n);
  if (i)
    return Rm(i[e]);
}
function iv(e) {
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
function zt(e, t, n) {
  const r = af(t, e), o = _m(r);
  if (o)
    return o;
  const i = iv(n);
  if (i)
    return _m(i[e]);
}
function oE(e, t, n) {
  const r = $m(af(e, "builderMode")) ?? $m(zt("builderMode", e, n)), o = zt("templateId", e, n) || rE(t, "marketingAssetToTemplate"), i = nE(t);
  return {
    builderMode: r,
    brandKitId: zt("brandKitId", e, n),
    templateId: o,
    marketingAssetId: i,
    userHasOverridePermission: Mm("userHasOverridePermission", e, n) ?? !1,
    allowTemplateZoneEditing: Mm("allowTemplateZoneEditing", e, n) ?? !1,
    renderEmailApiUrl: zt("renderEmailApiUrl", e, n) || "/api/render-email-html",
    contentHubProxyBase: zt("contentHubProxyBase", e, n) || "/api/content-hub",
    html2canvasCdnUrl: zt("html2canvasCdnUrl", e, n),
    figmaImportApiUrl: zt("figmaImportApiUrl", e, n) || "/api/figma/import",
    figmaImportApiToken: zt("figmaImportApiToken", e, n),
    designerDocumentProperty: zt("designerDocumentProperty", e, n),
    designerInstanceProperty: zt("designerInstanceProperty", e, n),
    searchIdentifier: zt("searchIdentifier", e, n),
    selectionPoolIdentifier: zt("selectionPoolIdentifier", e, n)
  };
}
function iE(e, t) {
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
function Im(e, t) {
  if (e.builderMode)
    return e.builderMode;
  const n = t == null ? void 0 : t.trim().toLowerCase();
  return n === "email" || n === "newsletter" ? "email" : "social";
}
const Dm = /* @__PURE__ */ new Map(), sE = ["EPAM.Template", "Template"], aE = ["EPAM.TemplateZone", "TemplateZone"];
function lE(e) {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
}
function sv(e) {
  if (e == null || typeof e != "object")
    return null;
  const t = e;
  if (Array.isArray(t.member_groups))
    return t;
  const n = t.content;
  return n != null && typeof n == "object" && !Array.isArray(n) ? n : Array.isArray(t.items) && t.items[0] != null && typeof t.items[0] == "object" ? t.items[0] : t;
}
function uE(e) {
  const t = sv(e);
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
async function Rc(e, t) {
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
      const s = uE(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
function cE(e) {
  const t = sv(e);
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
        const l = a.associated_entitydefinition, u = (l == null ? void 0 : l.href) ?? "", f = typeof a.name == "string" ? a.name.trim() : "";
        f && n.push({
          name: f,
          role: typeof a.role == "string" ? a.role : void 0,
          target: u ? lE(u) : void 0
        });
      }
  }
  return n;
}
function dE(e) {
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
async function fE(e, t) {
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
      const s = cE(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
async function pE(e, t) {
  const n = Dm.get(t);
  if (n)
    return n;
  const r = await fE(e, t);
  return Dm.set(t, r), r;
}
async function Na(e, t) {
  for (const n of t) {
    const r = await pE(e, n);
    if (r.length > 0)
      return r;
  }
  return [];
}
async function mE(e) {
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
      const a = dE(s.content);
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
function $c(e, t) {
  return !!(e && t.test(e));
}
function hE(e) {
  return $c(e, /(^|\.)Template$/i) && !$c(e, /TemplateZone/i);
}
async function vl(e, t) {
  const [n, r, o] = await Promise.all([
    Na(e, sE),
    Na(e, aE),
    mE(e)
  ]), i = n.filter((f) => $c(f.target, /TemplateZone/i)).map((f) => f.name), s = r.filter((f) => hE(f.target)).map((f) => f.name), a = wt(t, /zone/i).filter(
    (f) => !!ot(t, f)
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
      ...ba
    ])
  ];
  return l.length === 0 && u.length === ba.length ? console.info(
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
function gE(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO template ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function yE(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO zone ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function av(e, t) {
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
function vE(e, t, n) {
  return {
    entitydefinition: {
      href: av(e, n)
    },
    properties: t
  };
}
function xa(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e;
    if (typeof t.href == "string" && t.href.trim())
      return t.href.trim();
  }
}
function wE(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = [];
  if (Array.isArray(t.children))
    for (const o of t.children) {
      const i = xa(o);
      i && n.push(i);
    }
  const r = xa(t.child);
  return r && n.push(r), n;
}
function TE(e, t) {
  if (e != null && typeof e == "object") {
    const n = xa(e.self);
    if (n)
      return n;
  }
  return t;
}
function lv(e, t) {
  if (t) {
    const n = t.match(/^(https?:\/\/[^/]+)/i);
    if (n)
      return `${n[1]}/api/entities/${e}`;
  }
  return `/api/entities/${e}`;
}
async function wl(e, t, n, r) {
  var a;
  const o = ot(r, n), i = `/api/entities/${t}/relations/${n}`, s = o ? [.../* @__PURE__ */ new Set([o, i])] : [i];
  if (!((a = e.raw) != null && a.getAsync) || !o)
    return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
  for (const l of [o])
    try {
      const u = await e.raw.getAsync(l);
      if (!u.isSuccessStatusCode || u.content == null)
        continue;
      const f = wE(u.content), c = TE(u.content, l) ?? l;
      return { requestUrls: s, selfHref: c, childHrefs: f };
    } catch {
    }
  return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
}
function uv(e, t) {
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
  const i = await wl(e, t, r, o), s = lv(n, i.selfHref), a = [...i.childHrefs];
  a.some((f) => Cr(f) === Number(n)) || a.push(s);
  const l = uv(i.selfHref, a);
  if (await $i(e, [...i.requestUrls, i.selfHref], l))
    return !0;
  if ((u = e.raw) != null && u.postAsync)
    for (const f of i.requestUrls)
      try {
        if ((await e.raw.postAsync(f, l)).isSuccessStatusCode || (await e.raw.postAsync(f, { child: { href: s } })).isSuccessStatusCode)
          return !0;
      } catch {
      }
  return !1;
}
async function bo(e, t, n, r, o) {
  const i = await wl(e, t, r, o), s = i.childHrefs.filter(
    (l) => Cr(l) !== Number(n)
  );
  if (s.length === i.childHrefs.length)
    return !0;
  const a = uv(i.selfHref, s);
  return $i(e, [...i.requestUrls, i.selfHref], a);
}
async function vo(e, t, n, r, o) {
  var l;
  const i = await wl(e, t, r, o), s = lv(n, i.selfHref), a = {
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
async function cv(e, t, n, r, o) {
  var l;
  const i = await wl(e, t, r, o), s = ot(o, r) ?? i.selfHref;
  if ((l = e.raw) != null && l.getAsync && ot(o, r))
    try {
      const u = await e.raw.getAsync(s);
      if (u.isSuccessStatusCode && u.content != null) {
        const f = xa(
          u.content.parent
        );
        if (!f || Cr(f) !== Number(n))
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
  const r = wt(t, n), o = r.filter((i) => !!ot(t, i));
  return [.../* @__PURE__ */ new Set([...o, ...e, ...r])];
}
function Tl(e) {
  if (e.zoneType === "Logo")
    return !0;
  const t = (e.zoneKey ?? "").trim().toLowerCase(), n = (e.zoneLabel ?? "").trim().toLowerCase();
  return t === "logo" || n === "logo";
}
function SE(e, t) {
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
function lf(e, t, n) {
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
  return SE(t, n) ?? "Text";
}
const kE = ["EPAM.TemplateZone", "TemplateZone"], Vt = /* @__PURE__ */ new Map();
let Hm = !1, Fm = !1, Mi = [];
function Um(e, ...t) {
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
function Sl(e) {
  const t = e.properties ?? {}, n = e, r = Object.keys(t), o = Um(
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
    const s = Um(t, i);
    if (s)
      return s;
  }
  return "";
}
function kl(e, t) {
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
function El(e) {
  const t = Mi.map((n) => n.name);
  return [
    .../* @__PURE__ */ new Set([
      ...t,
      ...tE,
      ...wt(e, /zone.?type/i)
    ])
  ];
}
function EE(e) {
  return El(e.relations).some(
    (t) => {
      var n;
      return !!((n = e.relations) != null && n[t]);
    }
  );
}
function dv(e) {
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
function AE(e) {
  try {
    const n = av(e).match(/\/entitydefinitions\/([^/?#]+)/i);
    return n != null && n[1] ? decodeURIComponent(n[1]) : "";
  } catch {
    return "";
  }
}
async function CE(e, t, n) {
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
      const l = dv(a.content);
      for (const u of l) {
        const f = await t(String(u)), c = Sl(f);
        c && kl(c, u);
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
async function fv(e, t, n) {
  const r = El(n.relations);
  for (const o of r) {
    const i = await Xt(e, "", o, n.relations);
    if (i[0] == null)
      continue;
    const s = await t(String(i[0])), a = Sl(s);
    return a && kl(a, i[0]), AE(s) || void 0;
  }
}
async function uf(e) {
  if (Mi.length > 0 || !e)
    return;
  Mi = (await Na(e, kE)).filter((n) => /zone.?type/i.test(n.name));
}
async function pv(e, t) {
  var o, i;
  if (Fm || !((o = e == null ? void 0 : e.raw) != null && o.getAsync) || Hm)
    return;
  Hm = !0, await uf(e);
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
        const u = dv(l.content);
        for (const f of u) {
          const c = await t(String(f)), p = await fv(e, t, c);
          p && !n && (n = p);
        }
        if (u.length > 0)
          break;
      } catch {
      }
    if (Vt.size > 0)
      break;
  }
  n && await CE(e, t, n), Fm = !0, ae(
    "template zone type",
    `Taxonomy catalog ready: ${[...Vt.entries()].map(([s, a]) => `${s}=${a}`).join(", ") || "(empty)"}`
  );
}
async function bE(e, t, n) {
  await uf(e);
  for (const r of n)
    await fv(e, t, r);
  Vt.size === 0 && await pv(e, t);
}
async function NE(e, t, n) {
  const r = Vt.get(n);
  return r || (await pv(e, t), Vt.get(n));
}
function xE(e) {
  var r;
  const t = Mi.find((o) => o.name === e);
  return ((r = t == null ? void 0 : t.role) == null ? void 0 : r.toLowerCase()) !== "parent";
}
async function jm(e, t, n, r) {
  var l;
  if (!((l = e == null ? void 0 : e.raw) != null && l.getAsync))
    return;
  const o = `/api/entities/${n}/relations/${r}`, i = await Xt(e, n, r, {
    [r]: { href: o }
  });
  if (i[0] == null)
    return;
  const s = await t(String(i[0])), a = Sl(s);
  if (a)
    return kl(a, i[0]), lf(a, "", "");
}
async function PE(e, t, n, r, o, i, s) {
  var u;
  if (!e)
    return !1;
  const a = e, l = xE(
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
  for (const f of l) {
    if (!await f.run())
      continue;
    const p = await jm(
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
  if ((u = e == null ? void 0 : e.raw) != null && u.postAsync) {
    const f = { parent: { href: `/api/entities/${r}` } };
    if ((await e.raw.postAsync(
      `/api/entities/${n}/relations/${i}`,
      f
    )).isSuccessStatusCode && await jm(
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
async function LE(e, t, n, r) {
  const o = El(r.relations);
  for (const i of o) {
    const s = ot(r.relations, i);
    if (!s)
      continue;
    const a = await Xt(e, n.id, i, {
      [i]: { href: s }
    });
    if (a[0] == null)
      continue;
    const l = await t(String(a[0])), u = Sl(l);
    if (u)
      return kl(u, a[0]), lf(u, n.zoneKey, n.zoneLabel);
  }
}
async function mv(e, t, n, r) {
  const o = await LE(e, t, n, r);
  return o ? { ...n, zoneType: o } : n;
}
async function zE(e, t, n, r, o) {
  await uf(e);
  const i = await NE(e, t, r);
  if (!i) {
    const a = Object.keys(o.relations ?? {}).join(", ") || "(none)", l = [...Vt.keys()].join(", ") || "(none)";
    return ae(
      "template zone type",
      `No taxonomy item found for zone type "${r}" on zone ${n}. Known types: ${l}. Zone relations: ${a}.`
    ), !1;
  }
  const s = El(o.relations);
  for (const a of s)
    if (await PE(
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
const Cu = ["EPAM.TemplateZone", "TemplateZone"];
let As = null;
function _E(e) {
  return /zone.?type/i.test(e);
}
function OE(e) {
  return /zone.?type/i.test(e);
}
function RE(e) {
  return e.filter((t) => _E(t.name)).map((t) => t.name);
}
async function $E(e) {
  if (As)
    return As;
  const [t, n] = await Promise.all([
    Rc(e, Cu[0]).then(async (s) => s.length > 0 ? s : Rc(e, Cu[1])),
    Na(e, Cu)
  ]), r = RE(t), o = n.filter((s) => OE(s.name)).map((s) => s.name);
  let i = "unknown";
  return r.length > 0 && o.length === 0 ? i = "property" : o.length > 0 && r.length === 0 ? i = "relation" : r.length > 0 && o.length > 0 && (i = "both"), As = {
    mode: i,
    propertyNames: r.length > 0 ? r : ["zoneType", "ZoneType", "EPAM.zoneType", "zoneTypeMA"],
    relationNames: o
  }, As;
}
function ME(e) {
  return e.mode === "property" || e.mode === "both" || e.mode === "unknown";
}
function IE(e) {
  return e.mode === "relation" || e.mode === "both";
}
const DE = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], cf = [
  "AssetCollectionToAsset",
  "M.AssetCollectionToAsset",
  "collectionToAsset",
  "assetCollectionToAsset",
  "CollectionToAsset"
];
function HE(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function FE(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  return "Invariant" in t ? t.Invariant : Object.values(t).find((r) => typeof r == "string") ?? e;
}
function UE(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = FE(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function jE(e) {
  var n;
  if (e == null || typeof e != "object")
    return;
  const t = e;
  for (const r of DE) {
    const o = t[r];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const i = HE(((n = o[0]) == null ? void 0 : n.href) ?? o[0]);
    if (i)
      return i;
  }
}
function No(e, t) {
  const n = t.properties ?? {}, r = jE(t.renditions);
  if (!r)
    return null;
  const o = UE(n, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${e}`;
  return {
    id: String(e),
    name: o,
    thumbnailUrl: r,
    previewUrl: r
  };
}
function Bm(e, t) {
  if (!(t != null && t.trim()))
    return e;
  const n = t.trim().toLowerCase();
  return e.filter(
    (r) => r.name.toLowerCase().includes(n) || r.id.toLowerCase().includes(n)
  );
}
const Mc = "https://ws.overcasthq.com/wp-content/uploads/2025/05/sok_logo.png", BE = "https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58", KE = "https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png", ZE = [
  {
    id: "color",
    label: "Full color",
    url: Mc,
    previewBackground: "#f7f7f7"
  },
  {
    id: "dark",
    label: "Dark background",
    url: `${Mc}#dark`,
    previewBackground: "#000000"
  }
], Ic = Mc, yr = "Arial, Helvetica, sans-serif", Zt = {
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
}, hv = [
  { colorName: "Primary", hexValue: Zt.primary, colorUsageType: "Primary" },
  { colorName: "Secondary", hexValue: Zt.secondary, colorUsageType: "Secondary" },
  { colorName: "Accent", hexValue: Zt.accent, colorUsageType: "Accent" },
  { colorName: "Background", hexValue: Zt.background, colorUsageType: "Background" }
], gv = [
  { fontFamily: yr, fontWeight: "Bold", fontUsageType: "Heading" },
  { fontFamily: yr, fontWeight: "Regular", fontUsageType: "Body" },
  { fontFamily: yr, fontWeight: "Medium", fontUsageType: "CTA" }
];
function VE(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t || t === BE || t === KE || /cytiva/i.test(t))
    return Ic;
  const n = ZE.find((r) => r.url === t || r.id === t);
  return n ? n.url : t;
}
function Qo(e) {
  var t;
  return {
    ...e,
    brandKitName: ((t = e.brandKitName) == null ? void 0 : t.trim()) || "SOK",
    logoAssetUrl: VE(e.logoAssetUrl),
    colors: hv,
    fonts: gv
  };
}
function WE(e) {
  return Qo({
    id: e,
    brandKitName: "SOK",
    logoAssetUrl: Ic,
    colors: hv,
    fonts: gv
  });
}
function Al(e, t) {
  return {
    width: Math.round(e / 25.4 * 96),
    height: Math.round(t / 25.4 * 96)
  };
}
function Cs(e, t) {
  return {
    width: Math.round(e * 96),
    height: Math.round(t * 96)
  };
}
const bs = Al(210, 297), Ns = Al(297, 420), xs = Al(148, 210), Cl = [
  { id: "a4-portrait", group: "print", label: "A4 portrait", width: bs.width, height: bs.height },
  { id: "a4-landscape", group: "print", label: "A4 landscape", width: bs.height, height: bs.width },
  { id: "a3-portrait", group: "print", label: "A3 portrait", width: Ns.width, height: Ns.height },
  { id: "a3-landscape", group: "print", label: "A3 landscape", width: Ns.height, height: Ns.width },
  { id: "a5-portrait", group: "print", label: "A5 portrait", width: xs.width, height: xs.height },
  { id: "a5-landscape", group: "print", label: "A5 landscape", width: xs.height, height: xs.width },
  { id: "letter-portrait", group: "print", label: "Letter portrait", ...Cs(8.5, 11) },
  { id: "letter-landscape", group: "print", label: "Letter landscape", ...Cs(11, 8.5) },
  { id: "tabloid-portrait", group: "print", label: "Tabloid portrait", ...Cs(11, 17) },
  { id: "tabloid-landscape", group: "print", label: "Tabloid landscape", ...Cs(17, 11) },
  {
    id: "business-card",
    group: "print",
    label: "Business card",
    ...Al(85, 55)
  },
  { id: "1080-square", group: "social", label: "Square 1080", width: 1080, height: 1080 },
  { id: "1080-story", group: "social", label: "Story 1080 × 1920", width: 1080, height: 1920 },
  { id: "1080-portrait", group: "social", label: "Portrait 1080 × 1350", width: 1080, height: 1350 },
  { id: "1200-link", group: "social", label: "Link post 1200 × 628", width: 1200, height: 628 }
], YE = [
  { id: "print", label: "Print" },
  { id: "social", label: "Social" }
];
function Dc(e) {
  return Cl.find((t) => t.id === e);
}
function GE(e, t, n) {
  if (n && Dc(n)) {
    const o = Dc(n);
    if (o.width === e && o.height === t)
      return o.id;
  }
  const r = Cl.find((o) => o.width === e && o.height === t);
  return (r == null ? void 0 : r.id) ?? "custom";
}
const df = [
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
], yv = [
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
], XE = [
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
], vv = Cl.filter(
  (e) => e.group === "print"
).map((e) => ({
  id: e.id,
  label: `${e.label} — ${e.width} × ${e.height}`,
  width: e.width,
  height: e.height,
  formatPreset: e.id
}));
function Js(e) {
  return e === "Social" || e === "Print";
}
function bl(e) {
  switch (e) {
    case "Email":
      return yv;
    case "Newsletter":
      return XE;
    case "Print":
      return vv;
    default:
      return df;
  }
}
function wv(e) {
  const t = e.canvasWidth, n = e.canvasHeight;
  return t != null && n != null ? `${t} × ${n} px` : t != null ? `${t} px wide` : "Not set";
}
function JE(e, t) {
  return e.canvasWidth !== t.width ? !1 : t.height != null ? e.canvasHeight === t.height : e.canvasHeight == null || e.canvasHeight === void 0;
}
function QE(e) {
  const t = bl(e.channelType), n = t.find((o) => JE(e, o));
  if (n)
    return n.id;
  const r = t.find(
    (o) => o.formatPreset.trim().toLowerCase() === (e.formatPreset ?? "").trim().toLowerCase()
  );
  return r ? r.id : "custom";
}
function qE(e, t) {
  if (t === "custom")
    return null;
  const n = bl(e).find((r) => r.id === t);
  return n ? {
    canvasWidth: n.width,
    canvasHeight: n.height,
    formatPreset: n.formatPreset
  } : null;
}
function Tv(e) {
  const t = bl(e)[0];
  return {
    canvasWidth: t.width,
    canvasHeight: t.height,
    formatPreset: t.formatPreset
  };
}
function ff(e) {
  return e.canvasWidth != null && Number.isFinite(e.canvasWidth) ? e.canvasWidth : e.channelType === "Email" || e.channelType === "Newsletter" ? yv[0].width : df[0].width;
}
function Sv(e) {
  return e.canvasHeight != null && Number.isFinite(e.canvasHeight) ? e.canvasHeight : e.channelType === "Email" || e.channelType === "Newsletter" ? 800 : df[0].height ?? 1080;
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function Km(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function eA(e) {
  if (Array.isArray(e))
    return e;
}
function tA(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, s, a = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0)
        for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); l = !0)
          ;
    } catch (f) {
      u = !0, o = f;
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
function nA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rA(e, t) {
  return eA(e) || tA(e, t) || oA(e, t) || nA();
}
function oA(e, t) {
  if (e) {
    if (typeof e == "string")
      return Km(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Km(e, t) : void 0;
  }
}
const kv = Object.entries, Zm = Object.setPrototypeOf, iA = Object.isFrozen, sA = Object.getPrototypeOf, aA = Object.getOwnPropertyDescriptor;
let Ve = Object.freeze, Xe = Object.seal, Ur = Object.create, Ev = typeof Reflect < "u" && Reflect, Hc = Ev.apply, Fc = Ev.construct;
Ve || (Ve = function(t) {
  return t;
});
Xe || (Xe = function(t) {
  return t;
});
Hc || (Hc = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    o[i - 2] = arguments[i];
  return t.apply(n, o);
});
Fc || (Fc = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Ko = Pe(Array.prototype.forEach), lA = Pe(Array.prototype.lastIndexOf), Vm = Pe(Array.prototype.pop), Dr = Pe(Array.prototype.push), uA = Pe(Array.prototype.splice), Dn = Array.isArray, qo = Pe(String.prototype.toLowerCase), bu = Pe(String.prototype.toString), Wm = Pe(String.prototype.match), Zo = Pe(String.prototype.replace), Ym = Pe(String.prototype.indexOf), cA = Pe(String.prototype.trim), dA = Pe(Number.prototype.toString), fA = Pe(Boolean.prototype.toString), Gm = typeof BigInt > "u" ? null : Pe(BigInt.prototype.toString), Xm = typeof Symbol > "u" ? null : Pe(Symbol.prototype.toString), De = Pe(Object.prototype.hasOwnProperty), Vo = Pe(Object.prototype.toString), Be = Pe(RegExp.prototype.test), lr = pA(TypeError);
function Pe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Hc(e, t, r);
  };
}
function pA(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Fc(e, n);
  };
}
function q(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qo;
  if (Zm && Zm(e, null), !Dn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (iA(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function mA(e) {
  for (let t = 0; t < e.length; t++)
    De(e, t) || (e[t] = null);
  return e;
}
function st(e) {
  const t = Ur(null);
  for (const r of kv(e)) {
    var n = rA(r, 2);
    const o = n[0], i = n[1];
    De(e, o) && (Dn(i) ? t[o] = mA(i) : i && typeof i == "object" && i.constructor === Object ? t[o] = st(i) : t[o] = i);
  }
  return t;
}
function hA(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return dA(e);
    case "boolean":
      return fA(e);
    case "bigint":
      return Gm ? Gm(e) : "0";
    case "symbol":
      return Xm ? Xm(e) : "Symbol()";
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
    const r = aA(e, t);
    if (r) {
      if (r.get)
        return Pe(r.get);
      if (typeof r.value == "function")
        return Pe(r.value);
    }
    e = sA(e);
  }
  function n() {
    return null;
  }
  return n;
}
function gA(e) {
  try {
    return Be(e, ""), !0;
  } catch {
    return !1;
  }
}
const Jm = Ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Nu = Ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), xu = Ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yA = Ve(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pu = Ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), vA = Ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Qm = Ve(["#text"]), qm = Ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Lu = Ve(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), eh = Ve(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ps = Ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), wA = Xe(/{{[\w\W]*|^[\w\W]*}}/g), TA = Xe(/<%[\w\W]*|^[\w\W]*%>/g), SA = Xe(/\${[\w\W]*/g), kA = Xe(/^data-[\-\w.\u00B7-\uFFFF]+$/), EA = Xe(/^aria-[\-\w]+$/), th = Xe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), AA = Xe(/^(?:\w+script|data):/i), CA = Xe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), bA = Xe(/^html$/i), NA = Xe(/^[a-z][.\w]*(-[.\w]+)+$/i), nh = Xe(/<[/\w!]/g), xA = Xe(/<[/\w]/g), PA = Xe(/<\/no(script|embed|frames)/i), LA = Xe(/\/>/i), tn = {
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
}, zA = function() {
  return typeof window > "u" ? null : window;
}, _A = function(t, n) {
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
}, rh = function() {
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
  return De(t, n) && Dn(t[n]) ? q(o.base ? st(o.base) : {}, t[n], o.transform) : r;
};
function Av() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zA();
  const t = (F) => Av(F);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, s = e.Node, a = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, c = e.trustedTypes, p = a.prototype, v = nn(p, "cloneNode"), k = nn(p, "remove"), T = nn(p, "nextSibling"), P = nn(p, "childNodes"), m = nn(p, "parentNode"), h = nn(p, "shadowRoot"), g = nn(p, "attributes"), N = s && s.prototype ? nn(s.prototype, "nodeType") : null, C = s && s.prototype ? nn(s.prototype, "nodeName") : null;
  if (typeof i == "function") {
    const F = n.createElement("template");
    F.content && F.content.ownerDocument && (n = F.content.ownerDocument);
  }
  let b, S = "", z, j = !1, _ = 0;
  const I = function() {
    if (_ > 0)
      throw lr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, H = function(y) {
    I(), _++;
    try {
      return b.createHTML(y);
    } finally {
      _--;
    }
  }, G = function(y) {
    I(), _++;
    try {
      return b.createScriptURL(y);
    } finally {
      _--;
    }
  }, Le = function() {
    return j || (z = _A(c, o), j = !0), z;
  }, Je = n, Ee = Je.implementation, W = Je.createNodeIterator, $ = Je.createDocumentFragment, R = Je.getElementsByTagName, w = r.importNode;
  let L = rh();
  t.isSupported = typeof kv == "function" && typeof m == "function" && Ee && Ee.createHTMLDocument !== void 0;
  const U = wA, V = TA, Q = SA, Re = kA, $e = EA, Me = AA, dt = CA, Lo = NA;
  let Lf = th, ge = null;
  const zf = q({}, [...Jm, ...Nu, ...xu, ...Pu, ...Qm]);
  let ye = null;
  const _f = q({}, [...qm, ...Lu, ...eh, ...Ps]);
  let ve = Object.seal(Ur(null, {
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
  })), zo = null, Of = null;
  const xn = Object.seal(Ur(null, {
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
  let Rf = !0, Ol = !0, $f = !1, Mf = !0, Pn = !1, _o = !0, sr = !1, Rl = !1, $l = null, Ml = null, Il = !1, _r = !1, qi = !1, es = !1, If = !0, Df = !1;
  const Hf = "user-content-";
  let Dl = !0, Hl = !1, Or = {}, Qt = null;
  const Fl = q({}, [
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
  let Ff = null;
  const Uf = q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ul = null;
  const jf = q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ts = "http://www.w3.org/1998/Math/MathML", ns = "http://www.w3.org/2000/svg", qt = "http://www.w3.org/1999/xhtml";
  let Rr = qt, jl = !1, Bl = null;
  const b0 = q({}, [ts, ns, qt], bu), Bf = Ve(["mi", "mo", "mn", "ms", "mtext"]);
  let Kl = q({}, Bf);
  const Kf = Ve(["annotation-xml"]);
  let Zl = q({}, Kf);
  const N0 = q({}, ["title", "style", "font", "a", "script"]);
  let Oo = null;
  const x0 = ["application/xhtml+xml", "text/html"], P0 = "text/html";
  let we = null, $r = null;
  const L0 = n.createElement("form"), Zf = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Vl = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if ($r && $r === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = st(y), Oo = // eslint-disable-next-line unicorn/prefer-includes
    x0.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? P0 : y.PARSER_MEDIA_TYPE, we = Oo === "application/xhtml+xml" ? bu : qo, ge = _n(y, "ALLOWED_TAGS", zf, {
      transform: we
    }), ye = _n(y, "ALLOWED_ATTR", _f, {
      transform: we
    }), Bl = _n(y, "ALLOWED_NAMESPACES", b0, {
      transform: bu
    }), Ul = _n(y, "ADD_URI_SAFE_ATTR", jf, {
      transform: we,
      base: jf
    }), Ff = _n(y, "ADD_DATA_URI_TAGS", Uf, {
      transform: we,
      base: Uf
    }), Qt = _n(y, "FORBID_CONTENTS", Fl, {
      transform: we
    }), zo = _n(y, "FORBID_TAGS", st({}), {
      transform: we
    }), Of = _n(y, "FORBID_ATTR", st({}), {
      transform: we
    }), Or = De(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? st(y.USE_PROFILES) : y.USE_PROFILES : !1, Rf = y.ALLOW_ARIA_ATTR !== !1, Ol = y.ALLOW_DATA_ATTR !== !1, $f = y.ALLOW_UNKNOWN_PROTOCOLS || !1, Mf = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Pn = y.SAFE_FOR_TEMPLATES || !1, _o = y.SAFE_FOR_XML !== !1, sr = y.WHOLE_DOCUMENT || !1, _r = y.RETURN_DOM || !1, qi = y.RETURN_DOM_FRAGMENT || !1, es = y.RETURN_TRUSTED_TYPE || !1, Il = y.FORCE_BODY || !1, If = y.SANITIZE_DOM !== !1, Df = y.SANITIZE_NAMED_PROPS || !1, Dl = y.KEEP_CONTENT !== !1, Hl = y.IN_PLACE || !1, Lf = gA(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : th, Rr = typeof y.NAMESPACE == "string" ? y.NAMESPACE : qt, Kl = De(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? st(y.MATHML_TEXT_INTEGRATION_POINTS) : q({}, Bf), Zl = De(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? st(y.HTML_INTEGRATION_POINTS) : q({}, Kf);
    const x = De(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? st(y.CUSTOM_ELEMENT_HANDLING) : Ur(null);
    if (ve = Ur(null), De(x, "tagNameCheck") && Zf(x.tagNameCheck) && (ve.tagNameCheck = x.tagNameCheck), De(x, "attributeNameCheck") && Zf(x.attributeNameCheck) && (ve.attributeNameCheck = x.attributeNameCheck), De(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), Xe(ve), Pn && (Ol = !1), qi && (_r = !0), Or && (ge = q({}, Qm), ye = Ur(null), Or.html === !0 && (q(ge, Jm), q(ye, qm)), Or.svg === !0 && (q(ge, Nu), q(ye, Lu), q(ye, Ps)), Or.svgFilters === !0 && (q(ge, xu), q(ye, Lu), q(ye, Ps)), Or.mathMl === !0 && (q(ge, Pu), q(ye, eh), q(ye, Ps))), xn.tagCheck = null, xn.attributeCheck = null, De(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? xn.tagCheck = y.ADD_TAGS : Dn(y.ADD_TAGS) && (ge === zf && (ge = st(ge)), q(ge, y.ADD_TAGS, we))), De(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? xn.attributeCheck = y.ADD_ATTR : Dn(y.ADD_ATTR) && (ye === _f && (ye = st(ye)), q(ye, y.ADD_ATTR, we))), De(y, "ADD_URI_SAFE_ATTR") && Dn(y.ADD_URI_SAFE_ATTR) && q(Ul, y.ADD_URI_SAFE_ATTR, we), De(y, "FORBID_CONTENTS") && Dn(y.FORBID_CONTENTS) && (Qt === Fl && (Qt = st(Qt)), q(Qt, y.FORBID_CONTENTS, we)), De(y, "ADD_FORBID_CONTENTS") && Dn(y.ADD_FORBID_CONTENTS) && (Qt === Fl && (Qt = st(Qt)), q(Qt, y.ADD_FORBID_CONTENTS, we)), Dl && (ge["#text"] = !0), sr && q(ge, ["html", "head", "body"]), ge.table && (q(ge, ["tbody"]), delete zo.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw lr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw lr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const D = b;
      b = y.TRUSTED_TYPES_POLICY;
      try {
        S = H("");
      } catch (K) {
        throw b = D, K;
      }
    } else
      y.TRUSTED_TYPES_POLICY === null ? (b = void 0, S = "") : (b === void 0 && (b = Le()), b && typeof S == "string" && (S = H("")));
    Ve && Ve(y), $r = y;
  }, Vf = q({}, [...Nu, ...xu, ...yA]), Wf = q({}, [...Pu, ...vA]), z0 = function(y, x, D) {
    return x.namespaceURI === qt ? y === "svg" : x.namespaceURI === ts ? y === "svg" && (D === "annotation-xml" || Kl[D]) : !!Vf[y];
  }, _0 = function(y, x, D) {
    return x.namespaceURI === qt ? y === "math" : x.namespaceURI === ns ? y === "math" && Zl[D] : !!Wf[y];
  }, O0 = function(y, x, D) {
    return x.namespaceURI === ns && !Zl[D] || x.namespaceURI === ts && !Kl[D] ? !1 : !Wf[y] && (N0[y] || !Vf[y]);
  }, R0 = function(y) {
    let x = m(y);
    (!x || !x.tagName) && (x = {
      namespaceURI: Rr,
      tagName: "template"
    });
    const D = qo(y.tagName), K = qo(x.tagName);
    return Bl[y.namespaceURI] ? y.namespaceURI === ns ? z0(D, x, K) : y.namespaceURI === ts ? _0(D, x, K) : y.namespaceURI === qt ? O0(D, x, K) : !!(Oo === "application/xhtml+xml" && Bl[y.namespaceURI]) : !1;
  }, Ln = function(y) {
    Dr(t.removed, {
      element: y
    });
    try {
      m(y).removeChild(y);
    } catch {
      if (k(y), !m(y))
        throw lr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Yf = function(y) {
    const x = P(y);
    if (x) {
      const K = [];
      Ko(x, (X) => {
        Dr(K, X);
      }), Ko(K, (X) => {
        try {
          k(X);
        } catch {
        }
      });
    }
    const D = g(y);
    if (D)
      for (let K = D.length - 1; K >= 0; --K) {
        const X = D[K], ee = X && X.name;
        if (typeof ee == "string")
          try {
            y.removeAttribute(ee);
          } catch {
          }
      }
  }, ar = function(y, x) {
    try {
      Dr(t.removed, {
        attribute: x.getAttributeNode(y),
        from: x
      });
    } catch {
      Dr(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(y), y === "is")
      if (_r || qi)
        try {
          Ln(x);
        } catch {
        }
      else
        try {
          x.setAttribute(y, "");
        } catch {
        }
  }, $0 = function(y) {
    const x = g(y);
    if (x)
      for (let D = x.length - 1; D >= 0; --D) {
        const K = x[D], X = K && K.name;
        if (!(typeof X != "string" || ye[we(X)]))
          try {
            y.removeAttribute(X);
          } catch {
          }
      }
  }, M0 = function(y) {
    const x = [y];
    for (; x.length > 0; ) {
      const D = x.pop();
      (N ? N(D) : D.nodeType) === tn.element && $0(D);
      const X = P(D);
      if (X)
        for (let ee = X.length - 1; ee >= 0; --ee)
          x.push(X[ee]);
    }
  }, Gf = function(y) {
    let x = null, D = null;
    if (Il)
      y = "<remove></remove>" + y;
    else {
      const ee = Wm(y, /^[\r\n\t ]+/);
      D = ee && ee[0];
    }
    Oo === "application/xhtml+xml" && Rr === qt && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const K = b ? H(y) : y;
    if (Rr === qt)
      try {
        x = new f().parseFromString(K, Oo);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = Ee.createDocument(Rr, "template", null);
      try {
        x.documentElement.innerHTML = jl ? S : K;
      } catch {
      }
    }
    const X = x.body || x.documentElement;
    return y && D && X.insertBefore(n.createTextNode(D), X.childNodes[0] || null), Rr === qt ? R.call(x, sr ? "html" : "body")[0] : sr ? x.documentElement : X;
  }, Xf = function(y) {
    return W.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, rs = function(y) {
    return y = Zo(y, U, " "), y = Zo(y, V, " "), y = Zo(y, Q, " "), y;
  }, Wl = function(y) {
    var x;
    y.normalize();
    const D = W.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let K = D.nextNode();
    for (; K; )
      K.data = rs(K.data), K = D.nextNode();
    const X = (x = y.querySelectorAll) === null || x === void 0 ? void 0 : x.call(y, "template");
    X && Ko(X, (ee) => {
      Mr(ee.content) && Wl(ee.content);
    });
  }, os = function(y) {
    const x = C ? C(y) : null;
    return typeof x != "string" || we(x) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    y.nodeType !== N(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    y.childNodes !== P(y);
  }, Mr = function(y) {
    if (!N || typeof y != "object" || y === null)
      return !1;
    try {
      return N(y) === tn.documentFragment;
    } catch {
      return !1;
    }
  }, Ro = function(y) {
    if (!N || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof N(y) == "number";
    } catch {
      return !1;
    }
  };
  function pn(F, y, x) {
    F.length !== 0 && Ko(F, (D) => {
      D.call(t, y, x, $r);
    });
  }
  const I0 = function(y, x) {
    return !!(_o && y.hasChildNodes() && !Ro(y.firstElementChild) && Be(nh, y.textContent) && Be(nh, y.innerHTML) || _o && y.namespaceURI === qt && x === "style" && Ro(y.firstElementChild) || y.nodeType === tn.processingInstruction || _o && y.nodeType === tn.comment && Be(xA, y.data));
  }, D0 = function(y, x) {
    if (!zo[x] && qf(x) && (ve.tagNameCheck instanceof RegExp && Be(ve.tagNameCheck, x) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(x)))
      return !1;
    if (Dl && !Qt[x]) {
      const D = m(y), K = P(y);
      if (K && D) {
        const X = K.length;
        for (let ee = X - 1; ee >= 0; --ee) {
          const Ie = Hl ? K[ee] : v(K[ee], !0);
          D.insertBefore(Ie, T(y));
        }
      }
    }
    return Ln(y), !0;
  }, Jf = function(y) {
    if (pn(L.beforeSanitizeElements, y, null), os(y))
      return Ln(y), !0;
    const x = we(C ? C(y) : y.nodeName);
    if (pn(L.uponSanitizeElement, y, {
      tagName: x,
      allowedTags: ge
    }), I0(y, x))
      return Ln(y), !0;
    if (zo[x] || !(xn.tagCheck instanceof Function && xn.tagCheck(x)) && !ge[x])
      return D0(y, x);
    if ((N ? N(y) : y.nodeType) === tn.element && !R0(y) || (x === "noscript" || x === "noembed" || x === "noframes") && Be(PA, y.innerHTML))
      return Ln(y), !0;
    if (Pn && y.nodeType === tn.text) {
      const K = rs(y.textContent);
      y.textContent !== K && (Dr(t.removed, {
        element: y.cloneNode()
      }), y.textContent = K);
    }
    return pn(L.afterSanitizeElements, y, null), !1;
  }, Qf = function(y, x, D) {
    if (Of[x] || If && (x === "id" || x === "name") && (D in n || D in L0))
      return !1;
    const K = ye[x] || xn.attributeCheck instanceof Function && xn.attributeCheck(x, y);
    if (!(Ol && Be(Re, x))) {
      if (!(Rf && Be($e, x))) {
        if (K) {
          if (!Ul[x]) {
            if (!Be(Lf, Zo(D, dt, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && y !== "script" && Ym(D, "data:") === 0 && Ff[y])) {
                if (!($f && !Be(Me, Zo(D, dt, "")))) {
                  if (D)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(qf(y) && (ve.tagNameCheck instanceof RegExp && Be(ve.tagNameCheck, y) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(y)) && (ve.attributeNameCheck instanceof RegExp && Be(ve.attributeNameCheck, x) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(x, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Be(ve.tagNameCheck, D) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(D)))
        )
          return !1;
      }
    }
    return !0;
  }, H0 = q({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), qf = function(y) {
    return !H0[qo(y)] && Be(Lo, y);
  }, F0 = function(y, x, D, K) {
    if (b && typeof c == "object" && typeof c.getAttributeType == "function" && !D)
      switch (c.getAttributeType(y, x)) {
        case "TrustedHTML":
          return H(K);
        case "TrustedScriptURL":
          return G(K);
      }
    return K;
  }, U0 = function(y, x, D, K) {
    try {
      D ? y.setAttributeNS(D, x, K) : y.setAttribute(x, K), os(y) ? Ln(y) : Vm(t.removed);
    } catch {
      ar(x, y);
    }
  }, ep = function(y) {
    pn(L.beforeSanitizeAttributes, y, null);
    const x = y.attributes;
    if (!x || os(y))
      return;
    const D = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let K = x.length;
    const X = we(y.nodeName);
    for (; K--; ) {
      const ee = x[K], Ie = ee.name, be = ee.namespaceURI, Lt = ee.value, Ft = we(Ie), Gl = Lt;
      let it = Ie === "value" ? Gl : cA(Gl);
      if (D.attrName = Ft, D.attrValue = it, D.keepAttr = !0, D.forceKeepAttr = void 0, pn(L.uponSanitizeAttribute, y, D), it = D.attrValue, Df && (Ft === "id" || Ft === "name") && Ym(it, Hf) !== 0 && (ar(Ie, y), it = Hf + it), _o && Be(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, it)) {
        ar(Ie, y);
        continue;
      }
      if (Ft === "attributename" && Wm(it, "href")) {
        ar(Ie, y);
        continue;
      }
      if (!D.forceKeepAttr) {
        if (!D.keepAttr) {
          ar(Ie, y);
          continue;
        }
        if (!Mf && Be(LA, it)) {
          ar(Ie, y);
          continue;
        }
        if (Pn && (it = rs(it)), !Qf(X, Ft, it)) {
          ar(Ie, y);
          continue;
        }
        it = F0(X, Ft, be, it), it !== Gl && U0(y, Ie, be, it);
      }
    }
    pn(L.afterSanitizeAttributes, y, null);
  }, is = function(y) {
    let x = null;
    const D = Xf(y);
    for (pn(L.beforeSanitizeShadowDOM, y, null); x = D.nextNode(); )
      if (pn(L.uponSanitizeShadowNode, x, null), Jf(x), ep(x), Mr(x.content) && is(x.content), (N ? N(x) : x.nodeType) === tn.element) {
        const X = h(x);
        Mr(X) && (Yl(X), is(X));
      }
    pn(L.afterSanitizeShadowDOM, y, null);
  }, Yl = function(y) {
    const x = [{
      node: y,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const D = x.pop();
      if (D.shadow) {
        is(D.shadow);
        continue;
      }
      const K = D.node, ee = (N ? N(K) : K.nodeType) === tn.element, Ie = P(K);
      if (Ie)
        for (let be = Ie.length - 1; be >= 0; --be)
          x.push({
            node: Ie[be],
            shadow: null
          });
      if (ee) {
        const be = C ? C(K) : null;
        if (typeof be == "string" && we(be) === "template") {
          const Lt = K.content;
          Mr(Lt) && x.push({
            node: Lt,
            shadow: null
          });
        }
      }
      if (ee) {
        const be = h(K);
        Mr(be) && x.push({
          node: null,
          shadow: be
        }, {
          node: be,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, D = null, K = null, X = null;
    if (jl = !F, jl && (F = "<!-->"), typeof F != "string" && !Ro(F) && (F = hA(F), typeof F != "string"))
      throw lr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    Rl ? (ge = $l, ye = Ml) : Vl(y), (L.uponSanitizeElement.length > 0 || L.uponSanitizeAttribute.length > 0) && (ge = st(ge)), L.uponSanitizeAttribute.length > 0 && (ye = st(ye)), t.removed = [];
    const ee = Hl && typeof F != "string" && Ro(F);
    if (ee) {
      const Lt = C ? C(F) : F.nodeName;
      if (typeof Lt == "string") {
        const Ft = we(Lt);
        if (!ge[Ft] || zo[Ft])
          throw lr("root node is forbidden and cannot be sanitized in-place");
      }
      if (os(F))
        throw lr("root node is clobbered and cannot be sanitized in-place");
      try {
        Yl(F);
      } catch (Ft) {
        throw Yf(F), Ft;
      }
    } else if (Ro(F))
      x = Gf("<!---->"), D = x.ownerDocument.importNode(F, !0), D.nodeType === tn.element && D.nodeName === "BODY" || D.nodeName === "HTML" ? x = D : x.appendChild(D), Yl(D);
    else {
      if (!_r && !Pn && !sr && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return b && es ? H(F) : F;
      if (x = Gf(F), !x)
        return _r ? null : es ? S : "";
    }
    x && Il && Ln(x.firstChild);
    const Ie = Xf(ee ? F : x);
    try {
      for (; K = Ie.nextNode(); )
        Jf(K), ep(K), Mr(K.content) && is(K.content);
    } catch (Lt) {
      throw ee && Yf(F), Lt;
    }
    if (ee)
      return Ko(t.removed, (Lt) => {
        Lt.element && M0(Lt.element);
      }), Pn && Wl(F), F;
    if (_r) {
      if (Pn && Wl(x), qi)
        for (X = $.call(x.ownerDocument); x.firstChild; )
          X.appendChild(x.firstChild);
      else
        X = x;
      return (ye.shadowroot || ye.shadowrootmode) && (X = w.call(r, X, !0)), X;
    }
    let be = sr ? x.outerHTML : x.innerHTML;
    return sr && ge["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Be(bA, x.ownerDocument.doctype.name) && (be = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + be), Pn && (be = rs(be)), b && es ? H(be) : be;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Vl(F), Rl = !0, $l = ge, Ml = ye;
  }, t.clearConfig = function() {
    $r = null, Rl = !1, $l = null, Ml = null, b = z, S = "";
  }, t.isValidAttribute = function(F, y, x) {
    $r || Vl({});
    const D = we(F), K = we(y);
    return Qf(D, K, x);
  }, t.addHook = function(F, y) {
    typeof y == "function" && De(L, F) && Dr(L[F], y);
  }, t.removeHook = function(F, y) {
    if (De(L, F)) {
      if (y !== void 0) {
        const x = lA(L[F], y);
        return x === -1 ? void 0 : uA(L[F], x, 1)[0];
      }
      return Vm(L[F]);
    }
  }, t.removeHooks = function(F) {
    De(L, F) && (L[F] = []);
  }, t.removeAllHooks = function() {
    L = rh();
  }, t;
}
var OA = Av();
const RA = [
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
], $A = ["href", "style", "src", "alt", "width", "height", "align", "colspan", "rowspan", "target", "rel"];
function Ii(e) {
  return e != null && e.trim() ? OA.sanitize(e, {
    ALLOWED_TAGS: [...RA],
    ALLOWED_ATTR: $A,
    ALLOW_DATA_ATTR: !1
  }) : "";
}
const Cv = ["H1", "H2", "H3", "H4", "H5", "H6"], bn = "H2";
function MA(e) {
  const t = e == null ? void 0 : e.trim().toUpperCase();
  return t && Cv.includes(t) ? t : bn;
}
const IA = {
  H1: "32px",
  H2: "28px",
  H3: "24px",
  H4: "20px",
  H5: "18px",
  H6: "16px"
}, DA = {
  H1: "2rem",
  H2: "1.75rem",
  H3: "1.5rem",
  H4: "1.25rem",
  H5: "1.125rem",
  H6: "1rem"
}, bv = ["Left", "Center", "Right"], Nv = ["Top", "Right", "Bottom", "Left"], Pr = "Left", Nl = "Top";
function xv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "center" ? "Center" : t === "right" ? "Right" : "Left";
}
function Pv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "right" ? "Right" : t === "bottom" ? "Bottom" : t === "left" ? "Left" : "Top";
}
function HA(e, t = {}, n = "stacked") {
  const r = e.contentAlignment ?? Pr, o = Math.max(0, e.offsetPx ?? 0), i = e.offsetDirection ?? Nl, s = {
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
function FA(e) {
  return `zone-layout-${(e.contentAlignment ?? Pr).toLowerCase()}`;
}
function UA(e) {
  const t = { top: 16, right: 24, bottom: 16, left: 24 }, n = Math.max(0, e.offsetPx ?? 0);
  if (n <= 0)
    return t;
  const r = e.offsetDirection ?? Nl;
  return r === "Top" && (t.top += n), r === "Right" && (t.right += n), r === "Bottom" && (t.bottom += n), r === "Left" && (t.left += n), t;
}
function zu(e, t = "") {
  const n = (e.contentAlignment ?? Pr).toLowerCase(), r = UA(e);
  return `padding:${r.top}px ${r.right}px ${r.bottom}px ${r.left}px;text-align:${n};${t}`;
}
function jA(e) {
  return (e.contentAlignment ?? Pr).toLowerCase();
}
function BA(e) {
  const t = e.contentAlignment ?? Pr, n = "display:block;width:100%;max-width:552px;height:auto;border:0;";
  return t === "Center" ? `${n}margin:0 auto;` : t === "Right" ? `${n}margin-left:auto;margin-right:0;` : `${n}margin:0;`;
}
function KA() {
  return "display:inline-block;";
}
function On(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Qs(e, t, n) {
  var r;
  return ((r = e.colors.find((o) => o.colorUsageType === t)) == null ? void 0 : r.hexValue) ?? n;
}
function _u(e, t, n) {
  var r;
  return ((r = e.fonts.find((o) => o.fontUsageType === t)) == null ? void 0 : r.fontFamily) ?? n;
}
function ZA(e) {
  const t = e.zoneKey.toLowerCase(), n = e.zoneLabel.toLowerCase();
  return t.includes("headline") || n.includes("headline");
}
function VA(e, t, n) {
  var i, s, a, l, u, f;
  const r = jA(e), o = zu(e);
  if (Tl(e)) {
    const c = zu(e, "padding-top:24px;padding-bottom:16px;");
    return `<tr>
      <td align="${r}" style="${c}">
        <span style="display:inline-block;min-width:120px;padding:12px 20px;border:1px solid ${Zt.border};border-radius:4px;background:${Zt.surface};color:${Zt.muted};font-family:${yr};font-size:14px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-align:center;">Logo</span>
      </td>
    </tr>`;
  }
  switch (e.zoneType) {
    case "Text": {
      const c = (i = t == null ? void 0 : t.textValue) == null ? void 0 : i.trim();
      if (!c)
        return "";
      const p = ZA(e), v = _u(n, p ? "Heading" : "Body", yr), k = p ? "28px" : "16px", T = p ? "bold" : "normal", P = Qs(n, "Secondary", Zt.secondary);
      return `<tr>
        <td align="${r}" style="${o}font-family:${v};font-size:${k};font-weight:${T};color:${P};line-height:1.5;">
          ${On(c)}
        </td>
      </tr>`;
    }
    case "Heading": {
      const c = (s = t == null ? void 0 : t.textValue) == null ? void 0 : s.trim();
      if (!c)
        return "";
      const p = e.headingLevel ?? bn, v = _u(n, "Heading", yr), k = IA[p], T = Qs(n, "Secondary", Zt.secondary), P = p.toLowerCase();
      return `<tr>
        <td align="${r}" style="${o}">
          <${P} style="margin:0;font-family:${v};font-size:${k};font-weight:700;color:${T};line-height:1.25;">
            ${On(c)}
          </${P}>
        </td>
      </tr>`;
    }
    case "Image": {
      const c = (a = t == null ? void 0 : t.imageAssetUrl) == null ? void 0 : a.trim();
      if (!c)
        return "";
      const p = `<img src="${On(c)}" alt="${On(e.zoneLabel)}" width="552" style="${BA(e)}" />`, v = (l = t == null ? void 0 : t.linkUrl) == null ? void 0 : l.trim(), k = v ? `<a href="${On(v)}" target="_blank" rel="noopener noreferrer">${p}</a>` : p;
      return `<tr><td align="${r}" style="${o}">${k}</td></tr>`;
    }
    case "CTA Button": {
      const c = (u = t == null ? void 0 : t.textValue) == null ? void 0 : u.trim();
      if (!c)
        return "";
      const p = ((f = t == null ? void 0 : t.linkUrl) == null ? void 0 : f.trim()) || "#", v = Qs(n, "Accent", Zt.accent), k = _u(n, "CTA", yr);
      return `<tr>
        <td align="${r}" style="${zu(e, "padding-bottom:32px;")}">
          <a href="${On(p)}" target="_blank" rel="noopener noreferrer" style="${KA()}background-color:${v};color:#ffffff;font-family:${k};font-size:16px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:4px;">
            ${On(c)}
          </a>
        </td>
      </tr>`;
    }
    case "HTML": {
      const c = e.isLocked ? e.htmlDefaultContent : (t == null ? void 0 : t.htmlValue) ?? e.htmlDefaultContent, p = Ii(c);
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
function Uc(e, t, n) {
  const r = Qs(n, "Background", Zt.background), o = "#ffffff", i = ff(e), s = e.zones.sort((a, l) => a.sortOrder - l.sortOrder).map((a) => VA(a, t[a.id] ?? t[a.zoneKey], n)).filter(Boolean).join(`
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
const tr = "dummy-brand-kit", oh = "dummy-template";
function pr(e = tr) {
  return WE(e);
}
function WA(e, t = "Social") {
  return t === "Email" || t === "Newsletter" ? GA(e) : YA(e, t);
}
function YA(e, t = "Social") {
  const n = t === "Print" ? vv[0] : null;
  return {
    id: e,
    templateName: n ? "Demo Print Template" : "Demo Social Template",
    channelType: t,
    formatPreset: (n == null ? void 0 : n.formatPreset) ?? "1080x1080",
    canvasWidth: (n == null ? void 0 : n.width) ?? 1080,
    canvasHeight: (n == null ? void 0 : n.height) ?? 1080,
    brandKitId: tr,
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
function GA(e) {
  return {
    id: e,
    templateName: "Demo Email Template",
    channelType: "Email",
    formatPreset: "Email.StandardEmail",
    canvasWidth: 600,
    canvasHeight: 800,
    brandKitId: tr,
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
function XA(e, t) {
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
function JA(e) {
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
function Qn(e, t, n) {
  Qk(e, t, n);
}
function wo(e) {
  return { Invariant: e };
}
function Oe(e, t, n) {
  e[t] = wo(n);
}
function pf(e, t, n) {
  e[t] = n;
}
function ln(e, t, n) {
  Number.isNaN(n) || (e[t] = n);
}
function ur(e) {
  if (!(e == null || Number.isNaN(e)))
    return e;
}
function nr(e) {
  const t = e == null ? void 0 : e.trim();
  return t || void 0;
}
function To(e) {
  const t = {
    ...e,
    sortOrder: ur(e.sortOrder) ?? 0,
    positionX: ur(e.positionX),
    positionY: ur(e.positionY),
    zoneWidth: ur(e.zoneWidth),
    zoneHeight: ur(e.zoneHeight),
    offsetPx: ur(e.offsetPx),
    maxCharacterCount: ur(e.maxCharacterCount),
    aspectRatioLock: nr(e.aspectRatioLock),
    htmlDefaultContent: nr(e.htmlDefaultContent)
  };
  switch (t.zoneType) {
    case "Text":
      t.headingLevel = void 0, t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0;
      break;
    case "Heading":
      t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0, t.headingLevel || (t.headingLevel = bn);
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
function QA(e, t) {
  const n = { zoneType: t };
  return t === "Heading" ? (n.headingLevel = e.headingLevel ?? bn, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : (n.headingLevel = void 0, t === "Text" ? (n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "Image" ? (n.maxCharacterCount = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "HTML" ? (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n) : (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n));
}
function qA(e) {
  return {
    Title: wo(e.zoneKey)
  };
}
const eC = {
  textValue: ["textValue", "TextValue", "text", "content", "zoneText", "value"],
  colorValue: ["colorValue", "ColorValue", "color", "hexValue"],
  htmlValue: ["htmlValue", "HtmlValue", "html", "htmlContent"],
  linkUrl: ["linkUrl", "LinkUrl", "url", "href", "link"]
};
function Lv(e) {
  const t = {};
  return e.textValue !== void 0 && Oe(t, "textValue", e.textValue), e.colorValue !== void 0 && Oe(t, "colorValue", e.colorValue), e.htmlValue !== void 0 && Oe(t, "htmlValue", e.htmlValue), e.linkUrl !== void 0 && Oe(t, "linkUrl", e.linkUrl), t;
}
function tC(e, t) {
  if (t.length === 0)
    return Lv(e);
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
      for (const s of eC[i.key]) {
        const a = n.get(s.toLowerCase());
        if (a && !(/^title$/i.test(a) || /\.Title$/i.test(a))) {
          Oe(r, a, i.value);
          break;
        }
      }
  return r;
}
function nC(e) {
  var t, n, r, o, i, s;
  return !!((t = e.textValue) != null && t.trim() || (n = e.htmlValue) != null && n.trim() || (r = e.colorValue) != null && r.trim() || (o = e.linkUrl) != null && o.trim() || (i = e.imageAssetId) != null && i.trim() || (s = e.imageAssetUrl) != null && s.trim());
}
function rC(e) {
  const t = {};
  return e.isRawHtmlOverrideMA !== void 0 && (t.isRawHtmlOverrideMA = e.isRawHtmlOverrideMA), e.rawHtmlOverrideContent !== void 0 && Oe(t, "rawHtmlOverrideContent", e.rawHtmlOverrideContent), e.overrideReasonMA !== void 0 && Oe(t, "overrideReasonMA", e.overrideReasonMA), e.zoneLayoutJson !== void 0 && Oe(t, "zoneLayoutJson", e.zoneLayoutJson), e.designerInstanceJson !== void 0 && Oe(t, "designerInstanceJson", e.designerInstanceJson), t;
}
function oC(e) {
  return { templateName: wo(e.templateName) };
}
function zv(e) {
  const t = {};
  return Oe(t, "templateName", e.templateName), e.canvasWidth !== void 0 && ln(t, "canvasWidth", e.canvasWidth), e.canvasHeight !== void 0 && ln(t, "canvasHeight", e.canvasHeight), e.designerDocumentJson !== void 0 && Oe(t, "designerDocumentJson", e.designerDocumentJson), t;
}
function _v(e) {
  return {
    zoneKey: wo(e.zoneKey),
    zoneLabel: wo(e.zoneLabel || e.zoneKey)
  };
}
function iC(e, t) {
  if (!t)
    return _v(e);
  const n = {}, r = nr(e.zoneLabel) ?? e.zoneKey, o = nr(t.zoneLabel) ?? t.zoneKey;
  return e.zoneKey !== t.zoneKey && Oe(n, "zoneKey", e.zoneKey), r !== o && Oe(n, "zoneLabel", r), n;
}
function sC(e) {
  const t = {};
  return Oe(t, "zoneType", e.zoneType), pf(t, "isLocked", e.isLocked), ln(t, "sortOrder", e.sortOrder), t;
}
function aC(e, t) {
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
function lC(e, t) {
  const n = {};
  return (!t || e.isLocked !== t.isLocked) && pf(n, "isLocked", e.isLocked), (!t || e.sortOrder !== t.sortOrder) && ln(n, "sortOrder", e.sortOrder), n;
}
function Ov(e, t) {
  const n = {};
  return e.positionX !== void 0 && e.positionX !== (t == null ? void 0 : t.positionX) && ln(n, "positionX", e.positionX), e.positionY !== void 0 && e.positionY !== (t == null ? void 0 : t.positionY) && ln(n, "positionY", e.positionY), e.zoneWidth !== void 0 && e.zoneWidth !== (t == null ? void 0 : t.zoneWidth) && ln(n, "zoneWidth", e.zoneWidth), e.zoneHeight !== void 0 && e.zoneHeight !== (t == null ? void 0 : t.zoneHeight) && ln(n, "zoneHeight", e.zoneHeight), e.contentAlignment !== void 0 && e.contentAlignment !== (t == null ? void 0 : t.contentAlignment) && Oe(n, "contentAlignment", e.contentAlignment), e.offsetDirection !== void 0 && e.offsetDirection !== (t == null ? void 0 : t.offsetDirection) && Oe(n, "offsetDirection", e.offsetDirection), e.offsetPx !== void 0 && e.offsetPx !== (t == null ? void 0 : t.offsetPx) && ln(n, "offsetPx", e.offsetPx), n;
}
function Rv(e, t) {
  const n = To(e), r = {};
  return (n.zoneType === "Text" || n.zoneType === "Heading") && n.maxCharacterCount !== void 0 && n.maxCharacterCount !== (t == null ? void 0 : t.maxCharacterCount) && ln(r, "maxCharacterCount", n.maxCharacterCount), n.zoneType === "Heading" && n.headingLevel !== void 0 && n.headingLevel !== (t == null ? void 0 : t.headingLevel) && Oe(r, "headingLevel", n.headingLevel), n.zoneType === "Image" && n.aspectRatioLock !== void 0 && n.aspectRatioLock !== nr(t == null ? void 0 : t.aspectRatioLock) && Oe(r, "aspectRatioLock", n.aspectRatioLock), n.zoneType === "HTML" && (n.htmlDefaultContent !== void 0 && n.htmlDefaultContent !== nr(t == null ? void 0 : t.htmlDefaultContent) && Oe(r, "htmlDefaultContent", n.htmlDefaultContent), n.htmlAllowUserOverride !== void 0 && n.htmlAllowUserOverride !== (t == null ? void 0 : t.htmlAllowUserOverride) && pf(r, "htmlAllowUserOverride", n.htmlAllowUserOverride)), r;
}
function ih(e) {
  const t = To(e);
  return {
    ...sC(t),
    ...Ov(t),
    ...Rv(t)
  };
}
function uC(e, t) {
  const n = To(e), r = To(t), o = nr(n.zoneLabel) ?? n.zoneKey, i = nr(r.zoneLabel) ?? r.zoneKey;
  return n.zoneKey === r.zoneKey && o === i && JSON.stringify(ih(n)) === JSON.stringify(ih(r));
}
function sh(e) {
  return /^\d+$/.test(e);
}
const cC = ["Social", "Email", "Newsletter", "Print"];
function mf(e) {
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
    const r = mf(e[n]);
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
      const r = mf(e[n]);
      if (typeof r == "number" && Number.isFinite(r))
        return r;
      if (typeof r == "string") {
        const o = Number(r);
        if (Number.isFinite(o))
          return o;
      }
    }
}
function jc(e, ...t) {
  if (!e)
    return !1;
  for (const n of t) {
    const r = mf(e[n]);
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
  const n = sf(e, ...t);
  if (n.length > 0)
    return n;
  if (!e)
    return [];
  for (const r of t) {
    const o = e[r];
    if (!Array.isArray(o))
      continue;
    const i = br(o);
    if (i.length > 0)
      return i;
  }
  return [];
}
function xl(e, t) {
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
function dC(e) {
  const t = e.trim().toLowerCase();
  return t.includes("email") ? "Email" : t.includes("newsletter") ? "Newsletter" : t.includes("print") || t.includes("poster") || /\ba4\b/.test(t) ? "Print" : "Social";
}
function fC(e) {
  const t = Y(e, "EPAM.headingLevel", "headingLevel");
  return t ? MA(t) : void 0;
}
function pC(e) {
  const t = Y(e, "EPAM.contentAlignment", "contentAlignment");
  return t ? xv(t) : void 0;
}
function mC(e) {
  const t = Y(e, "EPAM.offsetDirection", "offsetDirection");
  return t ? Pv(t) : void 0;
}
function Ou(e, t = "") {
  return { id: String(e), name: t || String(e) };
}
function $v(e, t, n = []) {
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
    channelType: cC.includes(s) ? s : dC(s),
    formatPreset: Y(r, "EPAM.formatPreset", "formatPreset") || jn(i, "formatPreset") || "",
    canvasWidth: hn(r, "EPAM.canvasWidth", "canvasWidth"),
    canvasHeight: hn(r, "EPAM.canvasHeight", "canvasHeight"),
    brandKitId: a || (l != null ? String(l) : ""),
    zones: n,
    allowedAssetIds: Iv(t).map(String),
    designerDocumentJson: Y(
      r,
      "EPAM.designerDocumentJson",
      "designerDocumentJson",
      "DesignerDocumentJson"
    ) || void 0
  };
}
function hf(e, t) {
  const n = t.properties ?? {}, r = t, o = Y(n, "EPAM.zoneKey", "zoneKey") || `zone-${e}`, i = Y(n, "EPAM.zoneLabel", "zoneLabel", "Title") || `Zone ${e}`, s = Y(n, "EPAM.zoneType", "zoneType", "ZoneType", "zoneTypeMA", "ZoneTypeMA") || jn(r, "zoneType") || jn(r, "ZoneType") || jn(r, "EPAM.ZoneType") || jn(r, "zoneTypeMA"), a = lf(s, o, i), l = fC(n) ?? (a === "Heading" ? bn : void 0);
  return {
    id: String(e),
    zoneKey: o,
    zoneLabel: i,
    zoneType: a,
    isLocked: jc(n, "EPAM.isLocked", "isLocked"),
    sortOrder: hn(n, "EPAM.sortOrder", "sortOrder") ?? 0,
    positionX: hn(n, "EPAM.positionX", "positionX"),
    positionY: hn(n, "EPAM.positionY", "positionY"),
    zoneWidth: hn(n, "EPAM.zoneWidth", "zoneWidth"),
    zoneHeight: hn(n, "EPAM.zoneHeight", "zoneHeight"),
    maxCharacterCount: hn(n, "EPAM.maxCharacterCount", "maxCharacterCount"),
    headingLevel: l,
    contentAlignment: pC(n),
    offsetDirection: mC(n),
    offsetPx: hn(n, "EPAM.offsetPx", "offsetPx"),
    aspectRatioLock: Y(n, "EPAM.aspectRatioLock", "aspectRatioLock") || void 0,
    htmlDefaultContent: Y(n, "EPAM.htmlDefaultContent", "htmlDefaultContent") || void 0,
    htmlAllowUserOverride: jc(n, "EPAM.htmlAllowUserOverride", "htmlAllowUserOverride"),
    allowedAssetIds: Dv(t).map(String),
    allowedAssetCollectionId: Y(n, "EPAM.allowedAssetCollectionId", "allowedAssetCollectionId") || void 0
  };
}
function Mv(e, t) {
  const n = t.properties ?? {}, r = gf(t), o = r[0] != null ? String(r[0]) : void 0;
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
function hC(e, t, n = []) {
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
    channelTypeMA: Ou(
      kt(o, "channelTypeMA", "ChannelTypeMA")[0] ?? "channel",
      Y(r, "EPAM.channelTypeMA", "channelTypeMA") || "Channel"
    ),
    formatPresetMA: Ou(
      kt(o, "formatPresetMA", "FormatPresetMA")[0] ?? "format",
      Y(r, "EPAM.formatPresetMA", "formatPresetMA") || "Format"
    ),
    outputFormatMA: Ou(
      kt(o, "outputFormatMA", "OutputFormatMA")[0] ?? "output",
      Y(r, "EPAM.outputFormatMA", "outputFormatMA") || "Output"
    ),
    templateId: i,
    isRawHtmlOverrideMA: jc(r, "EPAM.isRawHtmlOverrideMA", "isRawHtmlOverrideMA"),
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
function gC(e, t, n = [], r = []) {
  const o = t.properties ?? {};
  return {
    id: String(e),
    brandKitName: Y(o, "EPAM.brandKitName", "brandKitName", "Title") || `Brand kit ${e}`,
    logoAssetUrl: Y(o, "EPAM.logoAssetUrl", "logoAssetUrl"),
    colors: n,
    fonts: r
  };
}
function Iv(e) {
  const t = kt(e.relations, ...rv), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/template.*asset|allowed.*asset/i.test(r) || /collection|zone/i.test(r) || Array.isArray(o) && n.push(...br(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function gf(e) {
  const t = kt(e.relations, ...ov), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/selected.*asset|zonevalue.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...br(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function Dv(e) {
  const t = kt(e.relations, ...nv), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/allowed.*asset|zone.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...br(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function yC(e) {
  return [.../* @__PURE__ */ new Set([
    ...kt(
      e.relations,
      "templateToZone",
      "templateToTemplateZone",
      "TemplateToTemplateZone",
      "EPAM.TemplateToTemplateZone",
      "templateToEPAM.TemplateZone"
    ),
    ...xl(e.relations, /template.*zone/i)
  ])];
}
function Hv(e) {
  return [.../* @__PURE__ */ new Set([
    ...kt(
      e.relations,
      "marketingAssetToZoneValue",
      "MarketingAssetToZoneValue",
      "EPAM.MarketingAssetToZoneValue"
    ),
    ...xl(e.relations, /zonevalue/i)
  ])];
}
function vC(e, t) {
  const n = t.properties ?? {}, r = Y(n, "EPAM.colorUsageType", "colorUsageType") || "Primary";
  return {
    colorName: Y(n, "EPAM.colorName", "colorName") || `Color ${e}`,
    hexValue: Y(n, "EPAM.hexValue", "hexValue") || "#000000",
    colorUsageType: r
  };
}
function wC(e, t) {
  const n = t.properties ?? {}, r = Y(n, "EPAM.fontUsageType", "fontUsageType") || "Body", o = Y(n, "EPAM.fontWeight", "fontWeight") || "Regular";
  return {
    fontFamily: Y(n, "EPAM.fontFamily", "fontFamily") || "sans-serif",
    fontWeight: o,
    fontUsageType: r
  };
}
function TC(e) {
  return kt(
    e.relations,
    "brandKitToColor",
    "BrandKitToColor",
    "brandKitToBrandColor"
  ).concat(xl(e.relations, /color/i));
}
function SC(e) {
  return kt(
    e.relations,
    "brandKitToFont",
    "BrandKitToFont",
    "brandKitToBrandFont"
  ).concat(xl(e.relations, /font/i));
}
function kC(e) {
  return ["Social", "Email", "Newsletter", "Print"].filter((t) => t !== e);
}
function EC(e, t, n, r) {
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
  return e.zoneType === "Heading" && (o.headingLevel = e.headingLevel, o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Text" && (o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Image" && (o.aspectRatioLock = e.aspectRatioLock), e.zoneType === "HTML" && (o.htmlDefaultContent = e.htmlDefaultContent, o.htmlAllowUserOverride = e.htmlAllowUserOverride), r === "Social" ? AC(o, t) : CC(o);
}
function AC(e, t) {
  const n = e.zoneType === "Logo" ? 80 : e.zoneType === "Image" ? 360 : e.zoneType === "Heading" ? 120 : e.zoneType === "CTA Button" ? 72 : 96;
  return {
    ...e,
    positionX: e.positionX ?? 40,
    positionY: e.positionY ?? 40 + t * (n + 24),
    zoneWidth: e.zoneWidth ?? 1e3,
    zoneHeight: n
  };
}
function CC(e) {
  return {
    ...e,
    positionX: void 0,
    positionY: void 0,
    zoneWidth: void 0,
    zoneHeight: void 0
  };
}
function bC(e, t, n) {
  const r = Tv(t), o = Date.now(), i = [...e.zones].sort((s, a) => s.sortOrder - a.sortOrder).map((s, a) => EC(s, a, o, t));
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
function yf(e) {
  const t = wt(e, /allowed.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/^template/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...nv, ...t])];
}
function vf(e) {
  const t = wt(e, /template.*asset|allowed.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/zone/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...rv, ...t])];
}
function NC(e) {
  const t = wt(e, /selected.*asset|zonevalue.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...ov, ...t])];
}
const wf = "/api/content-hub", xC = "/api/render-email-html";
let O = {}, Pl = wf;
function Tf() {
  return Pl.replace(/\/$/, "") !== wf;
}
function PC(e) {
  const t = e.trim().replace(/\/$/, "");
  return !t || t === xC;
}
function LC(e) {
  O = e ?? {};
}
function zC(e) {
  Pl = e.replace(/\/$/, "") || wf;
}
async function Bc(e, t) {
  const n = await fetch(`${Pl}${e}`, {
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
async function _C(e, t, n) {
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
    allowedAssetIds: t.allowedAssetIds && t.allowedAssetIds.length > 0 ? t.allowedAssetIds : Iv(n).map(String)
  };
}
async function OC(e, t) {
  const n = Dv(t);
  if (n.length > 0)
    return { ...e, allowedAssetIds: n.map(String) };
  if (!ot(t.relations, "templateZoneToAllowedAssetCollection"))
    return e;
  const r = await Xt(
    O,
    e.id,
    "templateZoneToAllowedAssetCollection",
    t.relations
  );
  return r[0] != null ? { ...e, allowedAssetCollectionId: String(r[0]) } : e;
}
function Fv(e) {
  const t = wt(e, /template.*zone/i);
  return [.../* @__PURE__ */ new Set([...t, ...Ri])];
}
async function RC(e, t, n) {
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
      const u = l, f = u.systemProperties, c = (f == null ? void 0 : f.id) ?? u.id ?? u.entityId;
      typeof c == "number" && Number.isFinite(c) && a.push(c);
    }
    return a;
  } catch {
    return [];
  }
}
const $C = ["channelType", "ChannelType", "EPAM.ChannelType"], MC = ["formatPreset", "FormatPreset", "EPAM.FormatPreset"];
async function Uv(e) {
  var i, s;
  if (!((i = O == null ? void 0 : O.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating templates.");
  const t = [
    oC(e),
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
  const o = zv(e);
  if (Object.keys(o).length > 0)
    try {
      await Zv(n, o);
    } catch (a) {
      ae(
        "template create",
        `Template ${n} created but optional property update failed: ${a instanceof Error ? a.message : String(a)}`
      );
    }
  return Z("template create", `Created EPAM.Template ${n} (${e.templateName})`), n;
}
async function IC(e, t, n) {
  var i;
  return (await Ll(n)).channelType === t ? n : (i = (await Kv(e)).find((s) => s.channelType === t)) == null ? void 0 : i.id;
}
async function ah(e, t, n, r) {
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
async function jv(e, t, n, r) {
  if (!(n != null && n.trim()))
    return;
  const o = await IC(
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
  await ah(
    e,
    o,
    $C,
    "channelType"
  ), await ah(
    e,
    o,
    MC,
    "formatPreset"
  );
}
async function Bv(e, t) {
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
async function Kv(e) {
  if (!(e != null && e.trim()) || e === tr)
    return [];
  let t = [];
  for (const o of [
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit"
  ])
    if (t = await RC("EPAM.Template", o, e), t.length > 0)
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
  return n.length === 0 ? [] : (await Promise.all(n.map((o) => Ll(String(o))))).sort((o, i) => o.templateName.localeCompare(i.templateName));
}
async function DC(e, t, n) {
  const r = await Ll(e), o = bC(r, t, n), i = await Uv(o);
  o.brandKitId && (await Bv(i, o.brandKitId), await jv(
    i,
    o.channelType,
    o.brandKitId,
    e
  ));
  const s = await Sf({ ...o, id: i }, []);
  return await Gv(s.id, r.allowedAssetIds ?? []), Z(
    "template duplicate",
    `Created template ${s.id} (${s.templateName}) from ${e} as ${t}`
  ), s;
}
async function HC(e, t) {
  var i;
  const n = {
    ...e,
    id: ((i = e.id) == null ? void 0 : i.trim()) || "",
    zones: e.zones ?? []
  }, r = await Uv(n);
  n.brandKitId && (await Bv(r, n.brandKitId), t != null && t.trim() && await jv(
    r,
    n.channelType,
    n.brandKitId,
    t
  ));
  const o = await Sf({ ...n, id: r }, []);
  return await Gv(o.id, n.allowedAssetIds ?? []), Z(
    "template create",
    `Created template ${o.id} (${o.templateName}) with ${o.zones.length} zone(s)`
  ), o;
}
async function FC(e, t) {
  const n = await ne(e), r = [
    "marketingAssetToTemplate",
    "MarketingAssetToTemplate",
    "EPAM.MarketingAssetToTemplate"
  ], o = await Xt(O, e, r[0], n.relations);
  for (const s of o)
    if (String(s) !== t)
      for (const a of r)
        await bo(O, e, s, a, n.relations);
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
async function UC(e, t) {
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
      const l = a, u = l.systemProperties, f = (u == null ? void 0 : u.id) ?? l.id ?? l.entityId;
      typeof f == "number" && Number.isFinite(f) && s.push(f);
    }
    return s;
  } catch {
    return [];
  }
}
async function Ll(e) {
  const t = await ne(e);
  gE(e, t);
  let n = [...new Set(yC(t))];
  if (n.length === 0) {
    const i = Fv(t.relations), s = await Oi(
      O,
      e,
      t.relations,
      i.filter((a) => ot(t.relations, a))
    );
    n = s.ids, s.relationName && Z("template zones", `Found zones via relation ${s.relationName}`);
  }
  if (n.length === 0) {
    const { templateChildRelations: i, zoneParentRelations: s } = await vl(
      O,
      t.relations
    );
    for (const a of s) {
      const l = await UC(e, a);
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
        i.filter((l) => ot(t.relations, l))
      );
      n = a.ids, a.relationName && Z("template zones", `Found zones via relation ${a.relationName}`);
    }
  }
  let r = [];
  if (n.length > 0)
    try {
      const i = await fn(n);
      await bE(O, ne, i), r = await Promise.all(
        i.map(async (s, a) => {
          const l = hf(n[a], s), u = await OC(l, s);
          return mv(O, ne, u, s);
        })
      );
    } catch (i) {
      ae(
        "template zones",
        `Could not load zones for template ${e}: ${i instanceof Error ? i.message : String(i)}`
      ), r = [];
    }
  const o = await _C(
    e,
    $v(e, t, r),
    t
  );
  return r.length > 0 ? (Z("template zones", `Loaded ${r.length} zone(s) for template ${e}`), o) : (Ue(
    "template zones",
    `Template ${e} has no linked zones yet`,
    'This is normal for a new template. Use "Edit Template Zones" to add zones, or link EPAM.TemplateZone entities in Content Hub. Zones link via a Parent relation on EPAM.TemplateZone → EPAM.Template (not on the template entity itself).'
  ), o);
}
async function jC(e) {
  var i;
  const t = await ne(e);
  let n = [...new Set(Hv(t))];
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
          async (a, l) => JC(n[l], Mv(n[l], a), a)
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
  let o = hC(e, t, r);
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
async function BC(e) {
  if (!(e != null && e.trim()) || e === tr)
    return Qn(
      "brand kit",
      "No brand kit id resolved",
      "Link templateToBrandKit on the template or set brandKitId in Configuration."
    ), Qo(pr(e || tr));
  try {
    const t = await ne(e), n = [...new Set(TC(t))], r = [...new Set(SC(t))], [o, i] = await Promise.all([
      fn(n),
      fn(r)
    ]), s = o.map(
      (u, f) => vC(n[f], u)
    ), a = i.map(
      (u, f) => wC(r[f], u)
    ), l = gC(e, t, s, a);
    return !l.logoAssetUrl && s.length === 0 && a.length === 0 ? (Qn(
      "brand kit",
      `Brand kit ${e} (${l.brandKitName}) has no colors, fonts, or logo linked`,
      "Add brandKitToColor / brandKitToFont relations and a logo asset on the brand kit."
    ), Qo(pr(e))) : (s.length === 0 ? Ue("brand kit colors", `Brand kit ${e} has no colors linked`, "Link colors via brandKitToColor.") : Z("brand kit colors", `Loaded ${s.length} color(s) for brand kit ${e}`), a.length === 0 ? Ue("brand kit fonts", `Brand kit ${e} has no fonts linked`, "Link fonts via brandKitToFont.") : Z("brand kit fonts", `Loaded ${a.length} font(s) for brand kit ${e}`), l.logoAssetUrl || Ue("brand kit logo", `Brand kit ${e} has no logo asset`, "Set logoAssetUrl on the brand kit entity."), Qo({
      ...pr(e),
      ...l,
      colors: s.length > 0 ? s : pr(e).colors,
      fonts: a.length > 0 ? a : pr(e).fonts
    }));
  } catch (t) {
    return Qn("brand kit", t, `Could not load brand kit entity ${e}.`), Qo(pr(e));
  }
}
function KC(e, t) {
  const n = $v(e.id, t, e.zones);
  return n.templateName !== e.templateName || n.canvasWidth !== e.canvasWidth || n.canvasHeight !== e.canvasHeight;
}
async function Xi(e, t, n, r) {
  var f;
  if (!((f = O == null ? void 0 : O.raw) != null && f.putAsync))
    throw new Error(`Content Hub client is not available for saving ${n}.`);
  if (Object.keys(t).length === 0)
    return !0;
  const o = await ne(e), i = vE(o, t, r), s = await O.raw.putAsync(`/api/entities/${e}`, i);
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
async function Zv(e, t) {
  return Xi(e, t, "template properties", "EPAM.Template");
}
async function Sf(e, t = []) {
  var l;
  if (!((l = O == null ? void 0 : O.raw) != null && l.postAsync))
    throw new Error("Content Hub client is not available for saving template zones.");
  const n = await ne(e.id);
  KC(e, n) && (await Zv(e.id, zv(e)) ? Z("template properties", `Saved properties on template ${e.id}`) : ae(
    "template properties",
    `Skipped property update on template ${e.id}; continuing with zone save.`
  ));
  const r = await vl(O, n.relations), o = ZC(
    n.relations,
    r.templateChildRelations
  ), i = [], s = /* @__PURE__ */ new Set();
  for (const u of t)
    !e.zones.some((c) => c.id === u.id) && sh(u.id) && s.add(u.id);
  const a = [...e.zones].sort((u, f) => u.sortOrder - f.sortOrder);
  for (const u of a) {
    const f = t.find((v) => v.id === u.id);
    if (!(!f || !uC(u, f))) {
      i.push(u);
      continue;
    }
    if (sh(u.id)) {
      await YC(u.id, u), i.push(u);
      continue;
    }
    const p = await GC(u);
    await VC(
      e.id,
      p,
      o,
      n.relations,
      r
    ), i.push({ ...u, id: p }), Z("template zone", `Created EPAM.TemplateZone ${p} (${u.zoneKey}) and linked to template ${e.id}`);
  }
  for (const u of s)
    await XC(e.id, u, o, n.relations);
  return Z("template zones", `Saved ${i.length} template zone(s) on template ${e.id}`), { ...e, zones: i };
}
function ZC(e, t = []) {
  const n = [
    ...t,
    ...Fv(e)
  ];
  for (const r of n)
    if (ot(e, r))
      return r;
  return t[0] ?? Ri[0];
}
async function VC(e, t, n, r, o) {
  const i = o ?? await vl(O, r);
  let s;
  try {
    const c = await ne(t);
    s = c.relations, yE(t, c);
  } catch {
    s = void 0;
  }
  const a = wt(s, /template/i).filter(
    (c) => !/collection|asset/i.test(c)
  ), l = fi(
    [...a, ...i.zoneParentRelations, ...ba],
    s,
    /zone.*template|template/i
  );
  for (const c of l)
    if (await vo(O, t, e, c, s)) {
      Z("template zone link", `Linked zone ${t} to template ${e} via parent relation ${c}`);
      return;
    }
  const u = fi(
    [n, ...i.templateChildRelations, ...Ri],
    r,
    /template.*zone/i
  ).filter((c) => !!ot(r, c));
  for (const c of u)
    if (await Jt(O, e, t, c, r)) {
      Z("template zone link", `Linked zone ${t} to template ${e} via child relation ${c}`);
      return;
    }
  const f = fi(
    [n, ...i.templateChildRelations, ...Ri],
    r,
    /template.*zone/i
  ).filter((c) => !ot(r, c));
  for (const c of f)
    if (await Jt(O, e, t, c, r)) {
      Z(
        "template zone link",
        `Linked zone ${t} to template ${e} via definition child relation ${c}`
      );
      return;
    }
  throw new Error(
    `Could not link zone ${t} to template ${e}. Tried parent relations: ${l.join(", ") || "(none from definition)"}; child relations: ${[...u, ...f].join(", ") || "(none)"}. Confirm EPAM.TemplateZone has a parent relation to EPAM.Template in Content Hub.`
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
async function Ru(e, t, n) {
  const r = await ne(e), o = hf(e, r);
  return (await mv(O, ne, o, r)).zoneType;
}
async function WC(e, t, n) {
  const r = To(t), o = await $E(O), i = EE(n), s = i || IE(o), a = async () => {
    for (const u of aC(
      r.zoneType,
      o.propertyNames
    ))
      if (await yn(e, u, "template zone type"), await Ru(
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
    const u = await zE(
      O,
      ne,
      e,
      r.zoneType,
      n
    ), f = await Ru(
      e,
      r.zoneKey,
      r.zoneLabel
    );
    if (f === r.zoneType)
      return !0;
    u && ae(
      "template zone type",
      `Relation link reported success for zone ${e} but reload still reads "${f}".`
    );
  }
  if (!i && ME(o) && await a())
    return !0;
  const l = await Ru(
    e,
    r.zoneKey,
    r.zoneLabel
  );
  return ae(
    "template zone type",
    `Zone ${e} (${r.zoneKey}) still reads as "${l}" after save; expected "${r.zoneType}".`
  ), l === r.zoneType;
}
async function Vv(e, t) {
  const n = To(t), r = await ne(e), o = hf(e, r), i = iC(n, o);
  if (Object.keys(i).length > 0 && !await yn(e, i, "template zone identity") && i.zoneLabel != null) {
    const c = n.zoneLabel || n.zoneKey;
    await yn(
      e,
      { Title: { Invariant: c } },
      "template zone title"
    );
  }
  const s = await WC(e, n, r), a = await yn(
    e,
    lC(n, o),
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
  const l = Ov(n, o);
  Object.keys(l).length > 0 && await yn(e, l, "template zone layout");
  const u = Rv(n, o);
  Object.keys(u).length > 0 && await yn(e, u, "template zone optional");
}
async function YC(e, t) {
  try {
    await Vv(e, t);
  } catch (n) {
    throw new Error(
      `Permission denied updating template zone ${e} (${t.zoneKey}). Grant Update on EPAM.TemplateZone. ${n instanceof Error ? n.message : String(n)}`
    );
  }
  Z("template zone", `Updated EPAM.TemplateZone ${e} (${t.zoneKey}, type ${t.zoneType})`);
}
async function GC(e) {
  var i;
  const t = O.raw;
  if (!(t != null && t.postAsync))
    throw new Error("Content Hub client does not support creating template zones.");
  const n = [
    _v(e),
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
    await Vv(r, e);
  } catch (s) {
    ae(
      "template zone create",
      `Zone ${r} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return r;
}
async function XC(e, t, n, r) {
  const o = await vl(O, r);
  let i;
  try {
    i = (await ne(t)).relations;
  } catch {
    i = void 0;
  }
  const s = fi(
    [...o.zoneParentRelations, ...ba],
    i,
    /zone.*template/i
  );
  for (const l of s)
    if (await cv(O, t, e, l, i)) {
      Z("template zone unlink", `Cleared parent ${e} from zone ${t} via ${l}`);
      return;
    }
  const a = fi(
    [n, ...o.templateChildRelations, ...Ri],
    r,
    /template.*zone/i
  ).filter((l) => !!ot(r, l));
  for (const l of a)
    if (await bo(O, e, t, l, r)) {
      Z("template zone unlink", `Removed zone ${t} from template ${e} via ${l}`);
      return;
    }
  Ue(
    "template zone unlink",
    `Could not remove zone ${t} from template ${e}`,
    "The new zone was created and linked, but the previous zone link may need to be removed manually in Content Hub."
  );
}
async function JC(e, t, n) {
  var i;
  const r = gf(n), o = t.imageAssetId || (r[0] != null ? String(r[0]) : void 0);
  if (!o)
    return t;
  if ((i = t.imageAssetUrl) != null && i.trim())
    return { ...t, imageAssetId: o };
  try {
    const s = await ne(o), a = No(o, s);
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
async function Wv(e) {
  const t = await ne(e), n = vf(t.relations), r = await Oi(
    O,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => No(r.ids[s], i)).filter((i) => i != null);
}
async function Yv(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = vf(o.relations);
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
async function QC(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = vf(o.relations);
  for (const s of i)
    if (await bo(
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
async function Gv(e, t = []) {
  const n = [...new Set(t.map((i) => i.trim()).filter(Boolean))];
  if (n.length === 0)
    return;
  const r = await Wv(e), o = new Set(r.map((i) => i.id));
  for (const i of n)
    o.has(i) || await Yv(e, i);
}
async function qC(e) {
  const t = await ne(e);
  return gf(t).map(String);
}
let cr = null;
async function eb(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = NC(o.relations), s = i.filter((c) => !!ot(o.relations, c)), a = cr == null ? void 0 : cr.name, l = [
    ...new Set(
      [
        a,
        ...s,
        // Prefer the known-good name before spraying aliases that 404.
        "zoneValueToSelectedAsset",
        ...i
      ].filter((c) => !!c)
    )
  ].slice(0, a || s.length > 0 ? 3 : 4), u = await qC(n);
  for (const c of u)
    if (c !== r)
      for (const p of l)
        await bo(
          O,
          n,
          c,
          p,
          o.relations
        ), await cv(
          O,
          n,
          c,
          p,
          o.relations
        );
  if (u.includes(r))
    return !0;
  const f = (cr == null ? void 0 : cr.mode) === "child" ? ["child", "parent"] : ["parent", "child"];
  for (const c of f)
    for (const p of l)
      if (c === "parent" ? await vo(
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
        return cr = { name: p, mode: c }, Z(
          "zone value selected asset",
          `Linked asset ${r} to zone value ${n} via ${p} (${c})`
        ), !0;
  return Ue(
    "zone value selected asset",
    `Could not link asset ${r} to zone value ${n}`,
    "Create a relation on EPAM.MarketingAssetZoneValue to M.Asset (e.g. zoneValueToSelectedAsset)."
  ), !1;
}
async function tb(e, t) {
  var n;
  (n = t.imageAssetId) != null && n.trim() && await eb(e, t.imageAssetId);
}
async function nb(e) {
  const t = await ne(e), n = yf(t.relations), r = await Oi(
    O,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => No(r.ids[s], i)).filter((i) => i != null);
}
async function rb(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = yf(o.relations);
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
async function ob(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = yf(o.relations);
  for (const s of i)
    if (await bo(
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
async function Xv(e) {
  const t = await ne(e), n = [
    .../* @__PURE__ */ new Set([
      ...cf,
      ...wt(t.relations, /asset/i)
    ])
  ].filter((i) => ot(t.relations, i)), r = await Oi(
    O,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => No(r.ids[s], i)).filter((i) => i != null);
}
function ib(e) {
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
  return r.length > 0 ? [...new Set(r)] : [...new Set(yl(e))];
}
async function sb(e) {
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
      const s = ib(i.content).slice(0, 48);
      if (s.length === 0)
        continue;
      const l = (await fn(s)).map((u, f) => No(s[f], u)).filter((u) => u != null);
      if (l.length > 0)
        return Z("asset search", `Found ${l.length} Content Hub asset(s) via search`), l;
    } catch {
    }
  return [];
}
async function lh(e) {
  var r, o;
  const t = (r = e == null ? void 0 : e.collectionId) == null ? void 0 : r.trim(), n = e == null ? void 0 : e.query;
  if ((o = O == null ? void 0 : O.raw) != null && o.getAsync)
    try {
      if (t) {
        const i = Bm(await Xv(t), n);
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
        const i = Bm(await sb(n), n);
        if (i.length > 0)
          return i;
      }
    } catch (i) {
      Ue("asset search", i, "Falling back to proxy or demo assets.");
    }
  if (t)
    try {
      const i = await Bc(
        `/assets/search?collectionId=${t}${n ? `&q=${encodeURIComponent(n)}` : ""}`
      );
      if (i.length > 0)
        return i;
    } catch (i) {
      Qn("asset search", i);
    }
  return Qn("asset search", "Using demo asset results"), JA(n);
}
async function ab(e) {
  var r;
  const t = [
    ...new Set(
      e.map((o) => Number(o)).filter((o) => Number.isFinite(o) && o > 0)
    )
  ];
  return t.length === 0 || !((r = O == null ? void 0 : O.raw) != null && r.getAsync) ? [] : (await fn(t)).map((o, i) => No(t[i], o)).filter((o) => o != null);
}
async function lb(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = [
    .../* @__PURE__ */ new Set([
      ...cf,
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
async function ub(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = [
    .../* @__PURE__ */ new Set([
      ...cf,
      ...wt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const s of i)
    if (await bo(
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
async function Jv(e, t) {
  return Xi(e, t, "marketing asset properties", "EPAM.MarketingAsset");
}
const Qv = ["EPAM.MarketingAssetZoneValue", "MarketingAssetZoneValue"];
function cb(e) {
  if (e == null || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.error;
  return typeof n == "string" ? n.trim() : "";
}
function db(e) {
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
async function qv(e, t) {
  const n = await Rc(O, Qv[0]);
  await yn(
    e,
    qA(t),
    "zone value title"
  );
  const r = Lv(t);
  if (Object.keys(r).length > 0) {
    const o = tC(t, n);
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
  await tb(e, t);
}
async function fb(e) {
  var i;
  if (!((i = O == null ? void 0 : O.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating zone values.");
  const t = [
    { Title: { Invariant: e.zoneKey } },
    { Title: e.zoneKey },
    {}
  ];
  let n = null, r = "unknown", o = "";
  for (const s of Qv) {
    for (const a of t) {
      const l = await O.raw.postAsync("/api/entities", {
        entitydefinition: {
          href: `/api/entitydefinitions/${s}`
        },
        properties: a
      }), u = db(l.content);
      if (l.isSuccessStatusCode && u) {
        n = u, Z(
          "zone value create",
          `Created ${s} ${u} for ${e.zoneKey} with keys: ${Object.keys(a).join(", ") || "(none)"}`
        );
        break;
      }
      r = String(l.statusCode ?? "unknown"), o = cb(l.content), ae(
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
    await qv(n, e);
  } catch (s) {
    ae(
      "zone value create",
      `Zone value ${n} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return n;
}
async function pb(e) {
  if (!e.id)
    throw new Error(`Zone value for ${e.zoneKey} has no entity id.`);
  try {
    await qv(e.id, e), Z("zone value", `Updated EPAM.MarketingAssetZoneValue ${e.id} (${e.zoneKey})`);
  } catch (t) {
    throw new Error(
      `Failed to update zone value ${e.id} (${e.zoneKey}). Grant Update on EPAM.MarketingAssetZoneValue. ${t instanceof Error ? t.message : String(t)}`
    );
  }
}
async function mb(e, t, n) {
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
async function hb(e, t) {
  var a;
  const n = await ne(e), r = [...new Set(Hv(n))], o = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const l = await fn(r);
    for (let u = 0; u < r.length; u += 1) {
      const f = Mv(r[u], l[u]);
      o.has(f.zoneKey) || o.set(f.zoneKey, f);
    }
  }
  const i = [], s = /* @__PURE__ */ new Set();
  for (const l of t) {
    if (!((a = l.zoneKey) != null && a.trim()) || s.has(l.zoneKey))
      continue;
    if (!nC(l)) {
      ae("zone value save", `Skipped empty zone value for ${l.zoneKey}`);
      continue;
    }
    s.add(l.zoneKey);
    const u = l.id ? l : o.get(l.zoneKey), f = u != null && u.id ? { ...l, id: u.id } : { ...l, id: void 0 };
    if (f.id) {
      await pb(f), i.push(f);
      continue;
    }
    const c = await fb(f), p = { ...f, id: c };
    await mb(e, c, n.relations), i.push(p);
  }
  return Z("zone values", `Saved ${i.length} EPAM.MarketingAssetZoneValue record(s)`), i;
}
async function gb(e) {
  const t = rC(e);
  if (Object.keys(t).length === 0)
    return e;
  if (!await Jv(e.id, t))
    throw new Error(
      `Could not save marketing asset ${e.id}. Grant Update on EPAM.MarketingAsset and ensure properties such as zoneLayoutJson exist on the definition.`
    );
  return Z("marketing asset properties", `Saved properties on marketing asset ${e.id}`), e;
}
const yb = "designerDocumentJson", vb = "designerInstanceJson", Ls = "EPAM.BuilderTemplate", zs = "EPAM.BuilderMarketingAsset";
function e0(e) {
  return (e == null ? void 0 : e.trim()) || yb;
}
function t0(e) {
  return (e == null ? void 0 : e.trim()) || vb;
}
async function wb(e, t) {
  const r = (await ne(e)).properties ?? {}, o = e0(t), i = [`EPAM.${o}`, o, o.replace(/^./, (s) => s.toUpperCase())];
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
async function Tb(e, t, n) {
  const r = e0(n), o = { [r]: t };
  try {
    if (!await Xi(
      e,
      o,
      "builder template designer document",
      Ls
    ))
      throw new Error(
        `Could not save designer document on ${Ls} ${e}. Ensure property "${r}" exists and your role can Update it.`
      );
  } catch (i) {
    throw i instanceof Error && i.message.includes("Could not save designer document") ? i : new Error(
      `Could not save designer document on ${Ls} ${e}. Ensure property "${r}" exists and your role can Update it. ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return Z(
    "builder template designer document",
    `Saved ${r} on ${Ls} ${e}`
  ), !0;
}
async function Sb(e, t) {
  const r = (await ne(e)).properties ?? {}, o = t0(t), i = [`EPAM.${o}`, o, o.replace(/^./, (s) => s.toUpperCase())];
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
async function kb(e, t, n) {
  const r = t0(n), o = { [r]: t };
  try {
    if (!await Xi(
      e,
      o,
      "builder marketing asset designer instance",
      zs
    ))
      throw new Error(
        `Could not save designer instance on ${zs} ${e}. Ensure property "${r}" exists and your role can Update it.`
      );
  } catch (i) {
    throw i instanceof Error && i.message.includes("Could not save designer instance") ? i : new Error(
      `Could not save designer instance on ${zs} ${e}. Ensure property "${r}" exists and your role can Update it. ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return Z(
    "builder marketing asset designer instance",
    `Saved ${r} on ${zs} ${e}`
  ), !0;
}
const ie = {
  getTemplate: Ll,
  listTemplatesForBrandKit: Kv,
  duplicateTemplate: DC,
  createTemplate: HC,
  linkMarketingAssetToTemplate: FC,
  listTemplates: async (e) => {
    try {
      return await Bc(`/entities/EPAM.Template${e ? `?channelType=${e}` : ""}`);
    } catch (t) {
      return Qn("template list", t), [WA(oh)];
    }
  },
  saveTemplate: Sf,
  getBrandKit: BC,
  getMarketingAsset: jC,
  createMarketingAsset: async (e) => {
    try {
      return await Bc("/entities/EPAM.MarketingAsset", {
        method: "POST",
        body: JSON.stringify(e)
      });
    } catch (t) {
      return Qn("marketing asset create", t), XA("dummy-asset", e.templateId || oh);
    }
  },
  updateMarketingAsset: gb,
  saveMarketingAssetZoneValues: hb,
  updateMarketingAssetProperties: Jv,
  getTemplateDesignerDocument: wb,
  saveTemplateDesignerDocument: Tb,
  getMarketingAssetDesignerInstance: Sb,
  saveMarketingAssetDesignerInstance: kb,
  uploadRenderedOutput: async (e, t, n) => {
    if (!Tf())
      return ae(
        "rendered output upload",
        `Skipped upload for ${n} — no asset upload proxy is configured on this Content Hub instance.`
      ), { skipped: !0, fileName: n, assetId: e };
    try {
      const r = new FormData();
      r.append("file", t, n), r.append("linkToEntity", "EPAM.MarketingAsset"), r.append("linkToEntityId", e), r.append("relationName", "marketingAssetToRenderedOutput");
      const o = await fetch(`${Pl}/assets/upload`, {
        method: "POST",
        body: r
      });
      if (!o.ok)
        throw new Error(`Asset upload failed (${o.status})`);
      return o.json();
    } catch (r) {
      return Qn("rendered output upload", r), { skipped: !0, fileName: n, assetId: e };
    }
  },
  searchAssets: lh,
  searchAssetsInCollection: async (e, t) => lh({ collectionId: e, query: t }),
  getCollectionAssets: Xv,
  getZoneAllowedAssets: nb,
  getTemplateAllowedAssets: Wv,
  getAssetsByIds: ab,
  addAssetToCollection: lb,
  removeAssetFromCollection: ub,
  addAllowedAssetToTemplate: Yv,
  removeAllowedAssetFromTemplate: QC,
  addAllowedAssetToZone: rb,
  removeAllowedAssetFromZone: ob
}, n0 = E.createContext(null);
function Eb({
  brandKitId: e,
  children: t
}) {
  const [n, r] = E.useState(null);
  return E.useEffect(() => {
    let o = !1;
    return ie.getBrandKit(e || tr).then((i) => {
      o || r(i);
    }).catch(() => {
      o || r(pr(e || tr));
    }), () => {
      o = !0;
    };
  }, [e]), n ? /* @__PURE__ */ d(n0.Provider, { value: n, children: t }) : /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading brand kit..." });
}
function Ji() {
  const e = E.useContext(n0);
  if (!e)
    throw new Error("useBrandKit must be used within a BrandKitProvider");
  return e;
}
function kf(e) {
  var n;
  return (n = Ji().colors.find((r) => r.colorUsageType === e)) == null ? void 0 : n.hexValue;
}
function Pa(e) {
  var n;
  return (n = Ji().fonts.find((r) => r.fontUsageType === e)) == null ? void 0 : n.fontFamily;
}
const r0 = E.createContext({});
function Ab({
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
  return /* @__PURE__ */ d(r0.Provider, { value: n, children: t });
}
function Ef() {
  return E.useContext(r0);
}
function o0() {
  const { searchIdentifier: e, search: t } = Ef(), [n, r] = E.useState([]), [o, i] = E.useState("");
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
async function Cb(e, t, n, r) {
  var a;
  const o = oE(t, n, r);
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
    for (const l of eE) {
      const u = await i.raw.getAsync(
        `/api/entities/${s}/relations/${l}`
      );
      if (!u.isSuccessStatusCode || !u.content)
        continue;
      const f = yl(u.content);
      if (f.length > 0)
        return Z("templateId", `Resolved ${f[0]} from ${l} relation API`), { ...o, templateId: String(f[0]) };
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
function Hr(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return e;
  if (typeof e == "string" && e.trim()) {
    const t = Number(e);
    if (Number.isFinite(t))
      return t;
  }
}
function Kc(e) {
  const t = e.positionX, n = e.positionY;
  if (!((t === 0 || t === void 0) && (n === 0 || n === void 0) && (t === 0 || n === 0)))
    return e;
  const o = { ...e };
  return delete o.positionX, delete o.positionY, o;
}
function La(e) {
  return Kc(e);
}
function Di(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return;
  const t = e, n = {}, r = Hr(t.positionX), o = Hr(t.positionY), i = Hr(t.zoneWidth), s = Hr(t.zoneHeight), a = Hr(t.offsetPx), l = Hr(t.sortOrder);
  return r !== void 0 && (n.positionX = r), o !== void 0 && (n.positionY = o), i !== void 0 && (n.zoneWidth = i), s !== void 0 && (n.zoneHeight = s), a !== void 0 && (n.offsetPx = a), l !== void 0 && (n.sortOrder = l), typeof t.contentAlignment == "string" && (n.contentAlignment = xv(t.contentAlignment)), typeof t.offsetDirection == "string" && (n.offsetDirection = Pv(t.offsetDirection)), Object.keys(n).length > 0 ? La(n) : void 0;
}
function uh(e) {
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
function bb(e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (!n.trim() || r == null)
      continue;
    const o = Di(r);
    o && (t[n] = o);
  }
  return JSON.stringify(t, null, 2);
}
function Zc(e) {
  const t = {};
  return typeof e.textValue == "string" && (t.textValue = e.textValue), typeof e.colorValue == "string" && (t.colorValue = e.colorValue), typeof e.htmlValue == "string" && (t.htmlValue = e.htmlValue), typeof e.linkUrl == "string" && (t.linkUrl = e.linkUrl), typeof e.imageAssetId == "string" && (t.imageAssetId = e.imageAssetId), typeof e.imageAssetUrl == "string" && (t.imageAssetUrl = e.imageAssetUrl), Object.keys(t).length > 0 ? t : void 0;
}
function i0(e, t) {
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
    const s = Zc(i);
    s && (r[o] = { zoneKey: o, ...s });
  }
  return Object.keys(r).length === 0 ? JSON.stringify(n, null, 2) : JSON.stringify({ layouts: n, values: r }, null, 2);
}
function za(e) {
  if (!(e != null && e.trim()))
    return { layouts: {}, values: {} };
  try {
    const t = JSON.parse(e);
    if (t == null || typeof t != "object" || Array.isArray(t))
      return { layouts: uh(e), values: {} };
    const n = t;
    if (n.layouts != null && typeof n.layouts == "object" && !Array.isArray(n.layouts)) {
      const i = uh(JSON.stringify(n.layouts)), s = {};
      if (n.values != null && typeof n.values == "object" && !Array.isArray(n.values))
        for (const [a, l] of Object.entries(n.values)) {
          if (!a.trim() || l == null || typeof l != "object")
            continue;
          const u = Zc(l);
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
      const u = Zc(a);
      u && (o[i] = { zoneKey: i, ...u });
    }
    return { layouts: r, values: o };
  } catch {
    return { layouts: {}, values: {} };
  }
}
function _a(e, t, n) {
  var o, i, s, a, l, u;
  const r = Hi(e, t);
  for (const f of e.zones) {
    const c = Lr(f, e.zones), p = n[c] ?? n[f.zoneKey];
    if (!p)
      continue;
    const v = r[f.id];
    r[f.id] = {
      zoneKey: c,
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
function s0(e, t) {
  return Kc(t ? {
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
function Lr(e, t) {
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
    const s = Lr(i, e.zones), a = n.get(s) ?? n.get(i.zoneKey), l = a == null ? void 0 : a.shift();
    l && (r[i.id] = { ...l, zoneKey: s });
  }
  return r;
}
function a0(e, t) {
  return {
    ...e,
    zones: [...e.zones].map((n) => {
      const r = So(n, e.zones), o = r === n.zoneKey ? t[n.zoneKey] : t[r];
      return s0(n, o);
    }).sort((n, r) => n.sortOrder - r.sortOrder || n.id.localeCompare(r.id))
  };
}
function Nb(e) {
  return La({
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
function xb(e) {
  const t = {};
  for (const n of e.zones) {
    const r = So(n, e.zones);
    t[r] = Nb(n);
  }
  return t;
}
function l0(e, t) {
  const n = xb(e);
  for (const r of e.zones) {
    const o = So(r, e.zones), i = o === r.zoneKey ? t[r.zoneKey] : t[o];
    i ? n[o] = La({ ...n[o], ...i }) : n[o] = La(n[o] ?? {});
  }
  return n;
}
function Pb({
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
            value: e.contentAlignment ?? Pr,
            onChange: (o) => t({ contentAlignment: o.target.value }),
            children: bv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
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
            value: e.offsetDirection ?? Nl,
            onChange: (o) => t({ offsetDirection: o.target.value }),
            children: Nv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
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
function Lb(...e) {
  const t = /* @__PURE__ */ new Set(), n = [];
  for (const r of e)
    for (const o of r) {
      const i = o.id || o.previewUrl || o.thumbnailUrl;
      !i || t.has(i) || (t.add(i), n.push(o));
    }
  return n;
}
function zb({
  zoneKey: e,
  zone: t,
  templateId: n,
  selectedAssetId: r,
  selectedUrl: o,
  onChange: i,
  compact: s = !1
}) {
  const { searchIdentifier: a } = Ef(), { resultIds: l, hasSearchIntegration: u } = o0(), [f, c] = E.useState([]), [p, v] = E.useState([]), [k, T] = E.useState([]), [P, m] = E.useState(!1), [h, g] = E.useState(null), [N, C] = E.useState(!1), [b, S] = E.useState("");
  E.useEffect(() => {
    if (!(n != null && n.trim()) || n.startsWith("temp-")) {
      c([]);
      return;
    }
    let H = !1;
    return m(!0), g(null), ie.getTemplateAllowedAssets(n).then((G) => {
      H || c(G);
    }).catch((G) => {
      H || (c([]), g(G instanceof Error ? G.message : "Could not load template images."));
    }).finally(() => {
      H || m(!1);
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
    return ie.getAssetsByIds(H).then((Le) => {
      G || v(Le);
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
    () => Lb(p, f),
    [f, p]
  ), j = E.useMemo(() => z.length > 0 ? z : k, [z, k]), _ = z.length > 0, I = () => {
    const H = b.trim();
    H && (i(e, { imageAssetUrl: H }), C(!1), S(""));
  };
  return !(n != null && n.trim()) || n.startsWith("temp-") ? /* @__PURE__ */ d("p", { className: "image-picker-hint", children: "Template image library is not available yet. Save the template and link assets in template setup." }) : /* @__PURE__ */ A("div", { className: `image-picker${s ? " image-picker-compact" : ""}`, children: [
    _ ? /* @__PURE__ */ A("p", { className: "image-picker-hint", children: [
      "Choose an image from the template library",
      p.length > 0 ? " (zone + template)" : "",
      "."
    ] }) : u ? /* @__PURE__ */ A("p", { className: "image-picker-hint", children: [
      "Run a Content Hub search on this page, then pick an image below.",
      a ? ` (search: ${a})` : ""
    ] }) : /* @__PURE__ */ A("p", { className: "image-picker-hint", children: [
      "Link images on the template in ",
      /* @__PURE__ */ d("strong", { children: "Edit template" }),
      ", or add ",
      /* @__PURE__ */ d("code", { children: "searchIdentifier" }),
      " to this page's external component configuration to pick assets from search."
    ] }),
    P && /* @__PURE__ */ d("div", { className: "image-picker-loading", children: "Loading template images..." }),
    h && /* @__PURE__ */ d("div", { className: "image-picker-error", children: h }),
    o && /* @__PURE__ */ d("div", { className: "image-picker-selected-preview", children: /* @__PURE__ */ d("img", { src: o, alt: "", className: "image-picker-selected-image" }) }),
    /* @__PURE__ */ d("div", { className: "image-picker-grid", role: "radiogroup", "aria-label": "Choose image", children: j.map((H) => {
      const G = r && H.id === r || !r && o && H.previewUrl === o || !r && o && H.thumbnailUrl === o;
      return /* @__PURE__ */ A(
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
    !P && j.length === 0 && !h && /* @__PURE__ */ A("p", { className: "image-picker-hint", children: [
      "No images available yet. In ",
      /* @__PURE__ */ d("strong", { children: "Edit template" }),
      ', use "Template image library" to link assets from Content Hub search.'
    ] }),
    /* @__PURE__ */ d("div", { className: "image-picker-footer", children: /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "image-picker-url-toggle",
        onClick: () => C((H) => !H),
        children: N ? "Hide image URL" : "Use image URL instead"
      }
    ) }),
    N && /* @__PURE__ */ A("div", { className: "image-picker-url-form", children: [
      /* @__PURE__ */ d(
        "input",
        {
          className: "image-picker-url-input",
          placeholder: "https://...",
          value: b,
          onChange: (H) => S(H.target.value)
        }
      ),
      /* @__PURE__ */ d("button", { type: "button", className: "image-picker-url-apply", onClick: I, disabled: !b.trim(), children: "Use image URL" })
    ] })
  ] });
}
function u0({
  zone: e,
  templateId: t,
  value: n,
  onChange: r,
  adminMode: o = !1,
  hideLogoPicker: i = !1,
  layoutMode: s = "canvas"
}) {
  const a = Ji(), l = o || !e.isLocked, u = e.positionX !== void 0 || e.positionY !== void 0, f = s === "stacked" ? { position: "relative", width: "100%" } : u ? {
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
  }, c = HA(e, f, s), p = FA(e), v = s === "stacked" ? " zone-stacked" : "";
  if (Tl(e))
    return /* @__PURE__ */ d(
      _b,
      {
        style: c,
        layoutClass: p,
        stackedClass: v,
        zone: e,
        brandKit: a
      }
    );
  if (e.isLocked && !o)
    return /* @__PURE__ */ d("div", { style: c, className: `zone zone-locked${v} ${p}`, "data-zone-key": e.zoneKey, children: /* @__PURE__ */ d(Ob, { zone: e, brandKit: a, layoutMode: s }) });
  switch (e.zoneType) {
    case "Text":
      return /* @__PURE__ */ d(
        Mb,
        {
          style: c,
          layoutClass: p,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: s
        }
      );
    case "Heading":
      return /* @__PURE__ */ d(
        $b,
        {
          style: c,
          layoutClass: p,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: s
        }
      );
    case "Image":
      return /* @__PURE__ */ d(
        Rb,
        {
          style: c,
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
        Ib,
        {
          style: c,
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
          style: { ...c, backgroundColor: (n == null ? void 0 : n.colorValue) ?? "#ffffff" },
          className: `zone zone-background ${p}`,
          "data-zone-key": e.zoneKey
        }
      );
    case "Divider":
      return /* @__PURE__ */ d(
        "hr",
        {
          style: c,
          className: `zone zone-divider${v} ${p}`,
          "data-zone-key": e.zoneKey
        }
      );
    case "HTML":
      return /* @__PURE__ */ d(Db, { style: c, layoutClass: p, zone: e, value: n, onChange: r });
    default:
      return null;
  }
}
function _b({
  style: e,
  layoutClass: t,
  stackedClass: n,
  zone: r,
  brandKit: o
}) {
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-logo${n} ${t}`, "data-zone-key": r.zoneKey, children: /* @__PURE__ */ d("span", { className: "zone-logo-placeholder", "aria-label": `${o.brandKitName} logo`, children: "Logo" }) });
}
function Ob({
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
function Rb({
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
  const f = !a && !l;
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-image${n} ${t}`, "data-zone-key": r.zoneKey, children: f ? /* @__PURE__ */ d(
    zb,
    {
      zoneKey: r.zoneKey,
      zone: r,
      templateId: o,
      selectedAssetId: i == null ? void 0 : i.imageAssetId,
      selectedUrl: i == null ? void 0 : i.imageAssetUrl,
      compact: n.includes("stacked"),
      onChange: (c, p) => s(c, {
        zoneKey: c,
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
function $b({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = Pa("Heading"), a = kf("Secondary"), l = n.headingLevel ?? bn;
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        ...e,
        fontFamily: s,
        fontSize: DA[l],
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
function Mb({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = Pa("Heading"), a = Pa("Body"), l = kf("Secondary"), u = (n.zoneLabel ?? "").toLowerCase().includes("headline") ? s : a;
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
      onBlur: (f) => {
        const c = f.currentTarget.innerText;
        if (n.maxCharacterCount && c.length > n.maxCharacterCount) {
          f.currentTarget.innerText = (r == null ? void 0 : r.textValue) ?? "";
          return;
        }
        o(n.zoneKey, { zoneKey: n.zoneKey, textValue: c });
      },
      children: (r == null ? void 0 : r.textValue) ?? ""
    }
  );
}
function Ib({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = kf("Accent"), a = Pa("CTA");
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
function Db({
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
function c0({
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
      return s0(v, T);
    }).sort((v, k) => v.sortOrder - k.sortOrder || v.id.localeCompare(k.id)),
    [e.zones, t]
  ), f = E.useMemo(() => bb(t), [t]), c = (v) => {
    const k = s === v.id, T = So(v, e.zones), P = e.zones.find((h) => h.id === v.id) ?? v, m = Lr(P, e.zones);
    return /* @__PURE__ */ A("div", { className: "asset-zone-structure-row", children: [
      /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          className: "asset-zone-structure-header",
          onClick: () => a((h) => h === v.id ? null : v.id),
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
          /* @__PURE__ */ d("code", { children: m })
        ] }),
        /* @__PURE__ */ d(
          u0,
          {
            zone: { ...P, zoneKey: m },
            templateId: e.id,
            value: n[P.id],
            onChange: (h, g) => i(P.id, { ...g, zoneKey: m }),
            layoutMode: "stacked"
          }
        ),
        /* @__PURE__ */ d(
          Pb,
          {
            layout: (T === v.zoneKey ? t[v.zoneKey] : t[T]) ?? {},
            onChange: (h) => o(T, h),
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
    /* @__PURE__ */ d("div", { className: "asset-zone-structure-list", children: u.map(c) }),
    /* @__PURE__ */ A("details", { className: "asset-layout-json-preview", children: [
      /* @__PURE__ */ d("summary", { children: "Layout JSON (saved on marketing asset)" }),
      /* @__PURE__ */ d("pre", { children: f })
    ] })
  ] });
}
function Oa({
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
function Hb(e) {
  var n;
  const t = {};
  for (const r of e.zones) {
    const i = { zoneKey: Lr(r, e.zones) };
    if (Tl(r)) {
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
function Fb(e, t) {
  var o, i, s, a, l, u, f, c;
  const n = Hb(e), r = { ...n };
  for (const p of e.zones) {
    const v = Lr(p, e.zones), k = t[p.id] ?? t[v] ?? t[p.zoneKey];
    if (k) {
      if (Tl(p)) {
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
        imageAssetUrl: (f = k.imageAssetUrl) != null && f.trim() ? k.imageAssetUrl : (c = n[p.id]) == null ? void 0 : c.imageAssetUrl
      };
    }
  }
  return r;
}
const Af = E.forwardRef(function({ template: t, zoneValues: n = {}, layoutMode: r = "stacked" }, o) {
  const i = Ji(), s = E.useMemo(
    () => [...t.zones].sort((p, v) => p.sortOrder - v.sortOrder),
    [t.zones]
  ), a = E.useMemo(
    () => Fb(t, n),
    [t, n]
  ), l = E.useMemo(
    () => Uc(t, a, i),
    [i, a, t]
  ), u = wv(t), f = ff(t), c = Sv(t);
  return s.length === 0 ? /* @__PURE__ */ d("p", { className: "template-admin-preview-empty", children: "Add zones on the left to see a live preview here." }) : t.channelType === "Social" || t.channelType === "Print" || r === "canvas" ? /* @__PURE__ */ A("div", { className: "live-preview-canvas-wrap", children: [
    /* @__PURE__ */ d("p", { className: "live-preview-dimensions-badge", "aria-label": "Template dimensions", children: u }),
    /* @__PURE__ */ d(
      "div",
      {
        ref: o,
        className: "live-preview-canvas social-builder-canvas social-builder-canvas-fill",
        style: {
          width: f,
          height: c,
          position: "relative",
          margin: "0 auto"
        },
        children: s.map((p) => /* @__PURE__ */ d(
          u0,
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
  ] }) : /* @__PURE__ */ A("div", { className: "live-preview-email-wrap", children: [
    /* @__PURE__ */ d("p", { className: "live-preview-dimensions-badge", "aria-label": "Template dimensions", children: u }),
    /* @__PURE__ */ d(
      "iframe",
      {
        title: "Live preview",
        srcDoc: l,
        className: "email-builder-preview-frame email-builder-preview-frame-fill",
        style: { minHeight: c }
      },
      l
    )
  ] });
}), Ub = [
  "Change spotted. Autosave is putting on its running shoes…",
  "Unsaved edits detected. Warming up the Content Hub handshake…",
  "Hold tight — your zones are about to get persisted…",
  "Debouncing brilliance before we commit…"
], jb = [
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
function Bb(e) {
  return e === "pending" ? Ub : jb;
}
function Vc(e, t = "active", n = 2600) {
  const r = Bb(t), [o, i] = E.useState(0);
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
  const r = Vc(e, t);
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
function d0({ marketingAsset: e, userHasOverridePermission: t, onEject: n }) {
  const [r, o] = E.useState(!1), [i, s] = E.useState(""), [a, l] = E.useState(!1);
  return !t || e.isRawHtmlOverrideMA ? null : /* @__PURE__ */ A(tt, { children: [
    /* @__PURE__ */ d("button", { type: "button", className: "eject-button", onClick: () => o(!0), children: "Eject to raw HTML" }),
    r && /* @__PURE__ */ d("div", { className: "eject-modal-backdrop", onClick: () => o(!1), children: /* @__PURE__ */ A("div", { className: "eject-modal", onClick: (u) => u.stopPropagation(), children: [
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
      /* @__PURE__ */ d(xo, { active: a, className: "eject-saving" })
    ] }) })
  ] });
}
async function Kb(e, t, n) {
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
function Zb({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  renderEmailApiUrl: r = "/api/render-email-html",
  onSaved: o
}) {
  const i = Ji(), [s, a] = E.useState(() => {
    const b = za(t.zoneLayoutJson), S = _a(e, t.zoneValues, b.values);
    return Hi(e, S);
  }), [l, u] = E.useState(() => {
    const b = za(t.zoneLayoutJson);
    return l0(e, b.layouts);
  }), [f, c] = E.useState(t.rawHtmlOverrideContent ?? ""), [p, v] = E.useState(!1), [k, T] = E.useState(null), P = E.useMemo(
    () => a0(e, l),
    [e, l]
  ), m = E.useMemo(
    () => Uc(P, s, i),
    [i, P, s]
  ), h = E.useMemo(
    () => Ii(f),
    [f]
  ), g = (b, S) => {
    a((z) => ({ ...z, [b]: S }));
  }, N = (b, S) => {
    u((z) => {
      const j = { ...z[b], ...S };
      for (const _ of Object.keys(S))
        S[_] === void 0 && delete j[_];
      return { ...z, [b]: j };
    });
  }, C = async () => {
    v(!0), T(null);
    try {
      const b = P.zones.map((H) => {
        const G = s[H.id];
        return G ? { ...G, zoneKey: Lr(H, P.zones) } : null;
      }).filter((H) => !!(H != null && H.zoneKey)), S = Object.fromEntries(
        b.map((H) => [H.zoneKey, H])
      ), z = i0(l, S);
      await ie.updateMarketingAsset({
        ...t,
        zoneLayoutJson: z
      }), Z("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const j = await ie.saveMarketingAssetZoneValues(
        t.id,
        b
      ), _ = _a(e, j, S);
      a(Hi(e, _));
      let I = Uc(
        P,
        Object.fromEntries(_.map((H) => [H.zoneKey, H])),
        i
      );
      if (PC(r))
        Z("email HTML", "Generated client-side email HTML.");
      else
        try {
          I = await Kb(r, e.id, t.id), Z("email HTML render", `Rendered via ${r}`);
        } catch (H) {
          ae(
            "email HTML render API",
            H instanceof Error ? H.message : String(H)
          ), ae("email HTML preview", "Using client-side inline-CSS renderer because the render API is unavailable.");
        }
      if (Tf()) {
        const H = new Blob([I], { type: "text/html" });
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
    } catch (b) {
      const S = b instanceof Error ? b.message : "Failed to save and render email HTML.";
      Un("email save/render", b), T(S);
    } finally {
      v(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ d(
    Oa,
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
            onChange: (b) => c(b.target.value),
            onBlur: async (b) => {
              const S = b.target.value;
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
          srcDoc: h,
          className: "email-builder-preview-frame email-builder-preview-frame-fill"
        },
        h
      )
    }
  ) : /* @__PURE__ */ d("div", { className: "email-builder", children: /* @__PURE__ */ d(
    Oa,
    {
      structureTitle: "Email structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ A("div", { className: "email-builder-structure", children: [
        /* @__PURE__ */ d(
          c0,
          {
            template: e,
            zoneLayouts: l,
            zoneValues: s,
            layoutMode: "stacked",
            onLayoutChange: N,
            onZoneValueChange: g
          }
        ),
        /* @__PURE__ */ A("div", { className: "email-builder-actions", children: [
          /* @__PURE__ */ d("button", { type: "button", className: "email-builder-save", onClick: C, disabled: p, children: "Save" }),
          /* @__PURE__ */ d(xo, { active: p }),
          /* @__PURE__ */ d(
            d0,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (b) => {
                await ie.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: b,
                  rawHtmlOverrideContent: m || "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        k && /* @__PURE__ */ d("div", { className: "marketing-builder-error email-builder-error", children: k })
      ] }),
      preview: /* @__PURE__ */ d(
        Af,
        {
          template: P,
          zoneValues: s,
          layoutMode: "stacked"
        }
      )
    }
  ) });
}
function f0(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Vb(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function Wb({ layer: e, selected: t, onSelect: n, onMoveStart: r }) {
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
const Wc = {
  primary: "#00a651",
  secondary: "#000000",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  text: "#000000",
  muted: "#6b716e"
};
function _s(e) {
  return typeof e == "boolean" ? e : void 0;
}
let Yb = 1;
function ei() {
  return `layer-${Date.now().toString(36)}-${Yb++}`;
}
function Yc(e, t) {
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
        fill: Wc.primary,
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
        editableContent: !0,
        objectFit: "cover"
      };
  }
}
function Cf() {
  const e = Yc("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = Wc.secondary;
  const t = Yc("image", { x: 120, y: 140 });
  return t.name = "Logo", t.width = 240, t.height = 80, t.src = "", t.fill = "#ffffff", t.locked = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: Wc.background
    },
    layers: [e, t]
  };
}
function ft(e) {
  return JSON.parse(JSON.stringify(e));
}
function bf(e) {
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
    const u = typeof a.id == "string" ? a.id : ei(), f = typeof a.name == "string" ? a.name : l, c = Number(a.x), p = Number(a.y), v = Number(a.width), k = Number(a.height);
    if (![c, p, v, k].every(Number.isFinite))
      continue;
    const T = {
      id: u,
      type: l,
      name: f,
      x: c,
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
      pinLeft: _s(a.pinLeft),
      pinRight: _s(a.pinRight),
      pinTop: _s(a.pinTop),
      pinBottom: _s(a.pinBottom),
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
function p0(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function Qi(e) {
  return e.locked ? !1 : p0(e);
}
function Po(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function Nf(e, t) {
  return t === "admin" ? !0 : e.visible ? Qi(e) || Po(e) : !1;
}
function Gb(e) {
  return { version: 1, templateId: e, overrides: {} };
}
function Xb(e) {
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
function Jb(e, t) {
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
function Qb(e, t, n) {
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
function qb(e, t) {
  const n = {};
  return Po(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), Qi(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const Bn = 24, ch = 1, m0 = 0.25, h0 = 3, eN = 8;
function Os(e, t) {
  return Math.abs(e - t) <= eN;
}
function Rs(e, t) {
  return e === !0 ? !0 : e === !1 ? !1 : t;
}
function g0(e, t, n) {
  return {
    left: Rs(e.pinLeft, Os(e.x, 0)),
    right: Rs(e.pinRight, Os(e.x + e.width, t)),
    top: Rs(e.pinTop, Os(e.y, 0)),
    bottom: Rs(e.pinBottom, Os(e.y + e.height, n))
  };
}
function dh(e, t, n, r, o, i) {
  const s = e, a = n - e - t;
  if (o && i) {
    const u = s, f = Math.max(Bn, r - s - a);
    return { start: u, size: f };
  }
  if (o)
    return { start: s, size: t };
  if (i) {
    const u = t;
    return { start: Math.max(0, r - a - u), size: u };
  }
  const l = n === 0 ? 1 : r / n;
  return {
    start: e * l,
    size: Math.max(Bn, t * l)
  };
}
function tN(e, t, n) {
  if (t.width === n.width && t.height === n.height)
    return e;
  const r = g0(e, t.width, t.height), o = dh(e.x, e.width, t.width, n.width, r.left, r.right), i = dh(e.y, e.height, t.height, n.height, r.top, r.bottom), s = r.left && r.right && r.top && r.bottom;
  return {
    ...e,
    x: o.start,
    y: i.start,
    width: o.size,
    height: i.size,
    objectFit: e.objectFit ?? (s && e.type === "image" ? "cover" : e.objectFit)
  };
}
function nN(e, t, n, r) {
  const o = { width: e.canvas.width, height: e.canvas.height }, i = { width: t, height: n };
  return {
    ...e,
    canvas: {
      ...e.canvas,
      width: t,
      height: n,
      presetId: r
    },
    layers: e.layers.map((s) => tN(s, o, i))
  };
}
function y0(e, t, n) {
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
const rN = 50, v0 = E.createContext(null);
function oN(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function fh(e, t, n) {
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
function iN({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: o,
  onDocumentChange: i,
  onInstanceChange: s
}) {
  const a = E.useRef(null);
  a.current || (a.current = n ? ft(n) : Cf());
  const l = E.useRef(
    ft(r ?? n ?? a.current)
  ), u = E.useRef(t);
  u.current = t;
  const [f, c] = E.useState(() => ft(a.current)), [p, v] = E.useState([]), [k, T] = E.useState({
    zoom: ch,
    panX: 40,
    panY: 40
  }), P = E.useRef([ft(a.current)]), m = E.useRef(0), [h, g] = E.useState(0), N = E.useRef(p);
  N.current = p;
  const C = E.useRef(f);
  C.current = f;
  const b = E.useRef(i);
  b.current = i;
  const S = E.useRef(s);
  S.current = s;
  const z = E.useRef(o);
  z.current = o;
  const j = E.useCallback(() => g((W) => W + 1), []), _ = E.useCallback((W) => {
    var $, R;
    if (($ = b.current) == null || $.call(b, ft(W)), u.current === "endUser") {
      const w = z.current ?? "";
      (R = S.current) == null || R.call(
        S,
        Qb(l.current, W, w)
      );
    }
  }, []), I = E.useCallback(
    (W) => {
      const $ = P.current.slice(0, m.current + 1);
      for ($.push(ft(W)); $.length > rN; )
        $.shift();
      P.current = $, m.current = $.length - 1, j();
    },
    [j]
  ), H = E.useCallback(
    (W, $) => {
      c(W), C.current = W, $ && I(W), _(W);
    },
    [_, I]
  ), G = E.useCallback(
    (W) => {
      const $ = u.current === "endUser";
      switch (W.type) {
        case "ADD_LAYER": {
          if ($)
            return;
          const R = Yc(W.layerType, W.at);
          c((w) => {
            const L = { ...w, layers: [...w.layers, R] };
            return I(L), _(L), L;
          }), v([R.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const R = W.pushHistory !== !1;
          c((w) => {
            const L = {
              ...w,
              layers: w.layers.map((U) => {
                if (U.id !== W.id)
                  return U;
                const V = $ ? qb(U, W.patch) : W.patch;
                if (Object.keys(V).length === 0)
                  return U;
                const Q = { ...U, ...V };
                return typeof Q.width == "number" && (Q.width = Math.max(Bn, Q.width)), typeof Q.height == "number" && (Q.height = Math.max(Bn, Q.height)), Q;
              })
            };
            return R && I(L), _(L), L;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if ($)
            return;
          const R = new Set(W.ids ?? N.current);
          if (R.size === 0)
            return;
          c((w) => {
            const L = {
              ...w,
              layers: w.layers.filter((U) => !R.has(U.id))
            };
            return I(L), _(L), L;
          }), v((w) => w.filter((L) => !R.has(L)));
          break;
        }
        case "SELECT": {
          v((R) => {
            const w = W.ids.filter((L) => {
              const U = C.current.layers.find((V) => V.id === L);
              return U ? Nf(U, u.current) : !1;
            });
            if (W.additive) {
              const L = new Set(R);
              for (const U of w)
                L.has(U) ? L.delete(U) : L.add(U);
              return Array.from(L);
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
          c((R) => {
            const w = {
              ...R,
              layers: oN(R.layers, W.fromIndex, W.toIndex)
            };
            return I(w), _(w), w;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if ($)
            return;
          c((R) => {
            const w = {
              ...R,
              layers: R.layers.map(
                (L) => L.id === W.id ? { ...L, visible: W.visible } : L
              )
            };
            return I(w), _(w), w;
          });
          break;
        }
        case "BRING_FORWARD": {
          if ($)
            return;
          const R = N.current;
          c((w) => {
            const L = { ...w, layers: fh(w.layers, R, "forward") };
            return I(L), _(L), L;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if ($)
            return;
          const R = N.current;
          c((w) => {
            const L = { ...w, layers: fh(w.layers, R, "backward") };
            return I(L), _(L), L;
          });
          break;
        }
        case "ZOOM_SET": {
          T((R) => ({
            ...R,
            zoom: f0(W.zoom, m0, h0)
          }));
          break;
        }
        case "ZOOM_RESET": {
          T({ zoom: ch, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          T((R) => ({
            ...R,
            panX: W.panX,
            panY: W.panY
          }));
          break;
        }
        case "UNDO": {
          if (m.current <= 0)
            return;
          m.current -= 1;
          const R = ft(P.current[m.current]);
          c(R), C.current = R, v([]), j(), _(R);
          break;
        }
        case "REDO": {
          if (m.current >= P.current.length - 1)
            return;
          m.current += 1;
          const R = ft(P.current[m.current]);
          c(R), C.current = R, v([]), j(), _(R);
          break;
        }
        case "LOAD_DOCUMENT": {
          H(ft(W.document), !0), v([]);
          break;
        }
        case "SET_CANVAS_SIZE": {
          if ($)
            return;
          c((R) => {
            if (R.canvas.width === W.width && R.canvas.height === W.height && W.presetId && R.canvas.presetId === W.presetId)
              return R;
            const w = nN(R, W.width, W.height, W.presetId);
            return I(w), _(w), w;
          });
          break;
        }
        case "COMMIT": {
          c((R) => (I(R), _(R), R));
          break;
        }
      }
    },
    [H, j, _, I]
  ), Le = E.useCallback(() => ft(f), [f]), Je = E.useCallback(
    (W) => {
      if (u.current === "endUser")
        return !1;
      try {
        const $ = bf(JSON.parse(W));
        return $ ? (l.current = ft($), H($, !0), v([]), !0) : !1;
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
      document: f,
      selection: p,
      viewport: k,
      canUndo: m.current > 0,
      canRedo: m.current < P.current.length - 1,
      dispatch: G,
      exportDocument: Le,
      importDocumentJson: Je
    }),
    [t, o, f, p, k, G, Le, Je, h]
  );
  return /* @__PURE__ */ d(v0.Provider, { value: Ee, children: e });
}
function zr() {
  const e = E.useContext(v0);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function xf() {
  return zr().mode;
}
function Pf() {
  return zr().document;
}
function w0() {
  return zr().document.layers;
}
function zl() {
  return zr().selection;
}
function T0() {
  return zr().viewport;
}
function _l() {
  return zr().dispatch;
}
function sN() {
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
const aN = ["nw", "ne", "sw", "se"];
function lN() {
  const e = Pf(), t = zl(), n = T0(), r = _l(), o = xf(), [i, s] = E.useState(null), [a, l] = E.useState(!1), u = E.useRef(n);
  u.current = n;
  const f = E.useRef(o);
  f.current = o, E.useEffect(() => {
    const C = (S) => {
      if (S.code === "Space" && !(S.target instanceof HTMLInputElement) && !(S.target instanceof HTMLTextAreaElement) && (S.preventDefault(), l(!0)), f.current === "admin" && (S.key === "Delete" || S.key === "Backspace") && t.length > 0) {
        const z = S.target.tagName;
        if (z === "INPUT" || z === "TEXTAREA")
          return;
        S.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (S.ctrlKey || S.metaKey) && S.key.toLowerCase() === "z" && !S.shiftKey && (S.preventDefault(), r({ type: "UNDO" })), (S.ctrlKey || S.metaKey) && (S.key.toLowerCase() === "y" || S.key.toLowerCase() === "z" && S.shiftKey) && (S.preventDefault(), r({ type: "REDO" }));
    }, b = (S) => {
      S.code === "Space" && l(!1);
    };
    return window.addEventListener("keydown", C), window.addEventListener("keyup", b), () => {
      window.removeEventListener("keydown", C), window.removeEventListener("keyup", b);
    };
  }, [r, t.length]), E.useEffect(() => {
    if (!i)
      return;
    const C = (S) => {
      const z = u.current.zoom;
      if (i.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: i.origPanX + (S.clientX - i.startX),
          panY: i.origPanY + (S.clientY - i.startY)
        });
        return;
      }
      const { dx: j, dy: _ } = Vb(
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
      let I = i.origX, H = i.origY, G = i.origW, Le = i.origH;
      i.handle.includes("e") && (G = Math.max(Bn, i.origW + j)), i.handle.includes("s") && (Le = Math.max(Bn, i.origH + _)), i.handle.includes("w") && (G = Math.max(Bn, i.origW - j), I = i.origX + (i.origW - G)), i.handle.includes("n") && (Le = Math.max(Bn, i.origH - _), H = i.origY + (i.origH - Le)), r({
        type: "UPDATE_LAYER",
        id: i.id,
        patch: { x: I, y: H, width: G, height: Le },
        pushHistory: !1
      });
    }, b = () => {
      (i.kind === "move" || i.kind === "resize") && r({ type: "COMMIT" }), s(null);
    };
    return window.addEventListener("pointermove", C), window.addEventListener("pointerup", b), () => {
      window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", b);
    };
  }, [i, r]);
  const c = (C) => {
    C.preventDefault();
    const b = f0(n.zoom * (C.deltaY < 0 ? 1.08 : 0.92), m0, h0);
    r({ type: "ZOOM_SET", zoom: b });
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
  }, k = (C, b) => {
    Nf(C, o) && r({
      type: "SELECT",
      ids: [C.id],
      additive: b.shiftKey
    });
  }, T = (C) => o === "admin" ? !C.locked : Po(C), P = (C, b) => {
    if (!T(C) || a)
      return;
    const S = t.includes(C.id) ? t : [C.id];
    t.includes(C.id) || r({ type: "SELECT", ids: [C.id] });
    const z = {};
    for (const j of S) {
      const _ = e.layers.find((I) => I.id === j);
      _ && T(_) && (z[j] = { x: _.x, y: _.y });
    }
    Object.keys(z).length !== 0 && s({
      kind: "move",
      ids: Object.keys(z),
      startX: b.clientX,
      startY: b.clientY,
      origins: z
    });
  }, m = (C, b, S) => {
    S.stopPropagation(), T(C) && (r({ type: "SELECT", ids: [C.id] }), s({
      kind: "resize",
      id: C.id,
      startX: S.clientX,
      startY: S.clientY,
      origX: C.x,
      origY: C.y,
      origW: C.width,
      origH: C.height,
      handle: b
    }));
  }, h = e.layers.filter((C) => t.includes(C.id) && C.visible), g = h.length === 1 ? h[0] : null, N = g ? T(g) : !1;
  return /* @__PURE__ */ A(
    "div",
    {
      className: `chd-viewport${a ? " chd-viewport--panning" : ""}`,
      onWheel: c,
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
                style: {
                  width: e.canvas.width,
                  height: e.canvas.height,
                  background: e.canvas.background || "#eceae4"
                },
                onPointerDown: (C) => {
                  C.button !== 0 || a || (C.stopPropagation(), r({ type: "UNSELECT_ALL" }));
                },
                children: [
                  e.layers.map((C) => /* @__PURE__ */ d(
                    Wb,
                    {
                      layer: C,
                      selected: t.includes(C.id),
                      onSelect: (b) => k(C, b),
                      onMoveStart: (b) => P(C, b)
                    },
                    C.id
                  )),
                  N && g ? /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: g.x,
                        top: g.y,
                        width: g.width,
                        height: g.height
                      },
                      children: aN.map((C) => /* @__PURE__ */ d(
                        "div",
                        {
                          className: `chd-handle chd-handle--${C}`,
                          onPointerDown: (b) => m(g, C, b)
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
                  h.length > 1 ? h.map((C) => /* @__PURE__ */ d(
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
function uN() {
  const e = w0(), t = zl(), n = _l(), r = xf(), o = r === "admin", i = [...e].map((s, a) => ({ layer: s, index: a })).reverse().filter(({ layer: s }) => o || Nf(s, r));
  return /* @__PURE__ */ A("aside", { className: "chd-panel chd-layers-panel", "aria-label": "Layers", children: [
    /* @__PURE__ */ d("div", { className: "chd-panel-header", children: o ? "Layers" : "Editable layers" }),
    /* @__PURE__ */ d("ul", { className: "chd-layer-list", children: i.length === 0 ? /* @__PURE__ */ d("li", { className: "chd-panel-empty", children: "No editable layers" }) : i.map(({ layer: s, index: a }) => {
      const l = t.includes(s.id);
      return /* @__PURE__ */ A(
        "li",
        {
          className: `chd-layer-list-item${l ? " chd-layer-list-item--selected" : ""}`,
          children: [
            /* @__PURE__ */ A(
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
            o ? /* @__PURE__ */ A(tt, { children: [
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
function cN() {
  const e = w0(), t = zl(), n = _l(), r = xf(), o = Pf(), i = r === "admin", s = e.filter((c) => t.includes(c.id)), a = s.length === 1 ? s[0] : null, l = (c) => {
    a && n({ type: "UPDATE_LAYER", id: a.id, patch: c });
  }, u = a ? i ? !a.locked : Po(a) : !1, f = a ? i ? !a.locked : Qi(a) : !1;
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
            onChange: (c) => l({ name: c.target.value })
          }
        )
      ] }) : /* @__PURE__ */ A("div", { className: "chd-field", children: [
        /* @__PURE__ */ d("span", { children: "Layer" }),
        /* @__PURE__ */ d("strong", { children: a.name })
      ] }),
      /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ d(
          Wo,
          {
            label: "X",
            value: Math.round(a.x),
            disabled: !u,
            onChange: (c) => l({ x: c })
          }
        ),
        /* @__PURE__ */ d(
          Wo,
          {
            label: "Y",
            value: Math.round(a.y),
            disabled: !u,
            onChange: (c) => l({ y: c })
          }
        )
      ] }),
      /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ d(
          Wo,
          {
            label: "W",
            value: Math.round(a.width),
            disabled: !u,
            onChange: (c) => l({ width: c })
          }
        ),
        /* @__PURE__ */ d(
          Wo,
          {
            label: "H",
            value: Math.round(a.height),
            disabled: !u,
            onChange: (c) => l({ height: c })
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
            onChange: (c) => l({ fill: c.target.value })
          }
        )
      ] }),
      f && a.type === "text" && /* @__PURE__ */ A(tt, { children: [
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Text" }),
          /* @__PURE__ */ d(
            "textarea",
            {
              rows: 3,
              value: a.text || "",
              onChange: (c) => l({ text: c.target.value })
            }
          )
        ] }),
        i ? /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
          /* @__PURE__ */ d(
            Wo,
            {
              label: "Size",
              value: a.fontSize ?? 16,
              onChange: (c) => l({ fontSize: c })
            }
          ),
          /* @__PURE__ */ A("label", { className: "chd-field", children: [
            /* @__PURE__ */ d("span", { children: "Color" }),
            /* @__PURE__ */ d(
              "input",
              {
                type: "color",
                value: a.color && /^#/.test(a.color) ? a.color : "#1a1a1a",
                onChange: (c) => l({ color: c.target.value })
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
              onChange: (c) => l({ color: c.target.value })
            }
          )
        ] })
      ] }),
      f && a.type === "image" && /* @__PURE__ */ A(tt, { children: [
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Image URL" }),
          /* @__PURE__ */ d(
            "input",
            {
              type: "url",
              placeholder: "https://…",
              value: a.src || "",
              onChange: (c) => l({ src: c.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Fit" }),
          /* @__PURE__ */ A(
            "select",
            {
              value: a.objectFit || "cover",
              onChange: (c) => l({ objectFit: c.target.value }),
              children: [
                /* @__PURE__ */ d("option", { value: "cover", children: "Cover — fill page, keep photo ratio" }),
                /* @__PURE__ */ d("option", { value: "contain", children: "Contain — whole photo, may letterbox" })
              ]
            }
          )
        ] })
      ] }),
      i ? /* @__PURE__ */ A(tt, { children: [
        /* @__PURE__ */ A("div", { className: "chd-field", children: [
          /* @__PURE__ */ d("span", { children: "Pin to page" }),
          /* @__PURE__ */ d("div", { className: "chd-pin-grid", children: ["pinTop", "pinLeft", "pinRight", "pinBottom"].map((c) => {
            const p = g0(a, o.canvas.width, o.canvas.height), v = {
              pinTop: p.top,
              pinLeft: p.left,
              pinRight: p.right,
              pinBottom: p.bottom
            }[c];
            return /* @__PURE__ */ A("label", { className: "chd-field-checkbox", children: [
              /* @__PURE__ */ d(
                "input",
                {
                  type: "checkbox",
                  checked: v,
                  onChange: (T) => l({ [c]: T.target.checked })
                }
              ),
              /* @__PURE__ */ d("span", { children: {
                pinTop: "Top",
                pinLeft: "Left",
                pinRight: "Right",
                pinBottom: "Bottom"
              }[c] })
            ] }, c);
          }) }),
          /* @__PURE__ */ d("p", { className: "chd-field-hint", children: "Top + left + right keeps a full-width strip. All four edges keep a full-page image when you switch portrait/landscape." })
        ] }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => l(y0(a, o.canvas.width, o.canvas.height)),
            children: "Fill page"
          }
        ),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "checkbox",
              checked: !!a.locked,
              onChange: (c) => l({ locked: c.target.checked })
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
              onChange: (c) => l({ allowTransform: c.target.checked })
            }
          ),
          /* @__PURE__ */ d("span", { children: "Allow transform (end user)" })
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "checkbox",
              checked: p0(a),
              onChange: (c) => l({ editableContent: c.target.checked })
            }
          ),
          /* @__PURE__ */ d("span", { children: "Editable content (end user)" })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ d("p", { className: "chd-panel-empty", children: s.length > 1 ? `${s.length} layers selected` : "Select a layer" })
  ] });
}
const dN = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function fN() {
  const e = _l(), t = zl(), n = T0(), r = Pf(), { mode: o, canUndo: i, canRedo: s, exportDocument: a, importDocumentJson: l } = sN(), u = E.useRef(null), f = o === "admin", c = GE(
    r.canvas.width,
    r.canvas.height,
    r.canvas.presetId
  ), p = () => {
    const P = a(), m = new Blob([JSON.stringify(P, null, 2)], { type: "application/json" }), h = URL.createObjectURL(m), g = r.createElement("a");
    g.href = h, g.download = "chdesigner-document.json", g.click(), URL.revokeObjectURL(h);
  }, v = async (P) => {
    if (!P)
      return;
    const m = await P.text();
    l(m) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  }, k = (P) => {
    const m = Dc(P);
    m && e({
      type: "SET_CANVAS_SIZE",
      width: m.width,
      height: m.height,
      presetId: m.id
    });
  }, T = () => {
    const P = r.layers.filter((m) => t.includes(m.id));
    for (const m of P)
      e({
        type: "UPDATE_LAYER",
        id: m.id,
        patch: y0(m, r.canvas.width, r.canvas.height)
      });
  };
  return /* @__PURE__ */ A("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ A("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ d("span", { className: "chd-toolbar-logo-wrap", children: "Logo" }),
      /* @__PURE__ */ d("span", { className: "chd-toolbar-mode", children: f ? "Admin" : "Edit" })
    ] }),
    f ? /* @__PURE__ */ d("div", { className: "chd-toolbar-group", children: dN.map((P) => /* @__PURE__ */ A(
      "button",
      {
        type: "button",
        className: "chd-btn",
        onClick: () => e({ type: "ADD_LAYER", layerType: P.type }),
        children: [
          "+ ",
          P.label
        ]
      },
      P.type
    )) }) : null,
    f ? /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ A("label", { className: "chd-toolbar-field", children: [
        /* @__PURE__ */ d("span", { children: "Page" }),
        /* @__PURE__ */ A(
          "select",
          {
            className: "chd-toolbar-select",
            value: c,
            onChange: (P) => k(P.target.value),
            children: [
              c === "custom" ? /* @__PURE__ */ d("option", { value: "custom", children: "Custom" }) : null,
              YE.map((P) => /* @__PURE__ */ d("optgroup", { label: P.label, children: Cl.filter((m) => m.group === P.id).map((m) => /* @__PURE__ */ d("option", { value: m.id, children: m.label }, m.id)) }, P.id))
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
      /* @__PURE__ */ A("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ZOOM_RESET" }), children: [
        Math.round(n.zoom * 100),
        "%"
      ] }),
      f ? /* @__PURE__ */ A(tt, { children: [
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: p, children: "Export" }),
        /* @__PURE__ */ d("button", { type: "button", className: "chd-btn", onClick: () => {
          var P;
          return (P = u.current) == null ? void 0 : P.click();
        }, children: "Import" }),
        /* @__PURE__ */ d(
          "input",
          {
            ref: u,
            type: "file",
            accept: "application/json,.json",
            className: "chd-file-input",
            onChange: (P) => {
              var m;
              v(((m = P.target.files) == null ? void 0 : m[0]) ?? null), P.target.value = "";
            }
          }
        )
      ] }) : null
    ] })
  ] });
}
function S0({
  mode: e = "admin",
  document: t,
  templateDocument: n,
  templateId: r,
  onDocumentChange: o,
  onInstanceChange: i,
  statusSlot: s,
  statusClassName: a
}) {
  return /* @__PURE__ */ d(iN, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    onDocumentChange: o,
    onInstanceChange: i
  }, children: /* @__PURE__ */ A("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ d(fN, {}),
    s ? /* @__PURE__ */ d("div", { className: `chd-status-bar${a ? ` ${a}` : ""}`, children: s }) : null,
    /* @__PURE__ */ A("div", { className: "chd-main", children: [
      /* @__PURE__ */ d(uN, {}),
      /* @__PURE__ */ d(lN, {}),
      /* @__PURE__ */ d(cN, {})
    ] })
  ] }) });
}
function pN(e) {
  var t;
  if (!((t = e.designerDocumentJson) != null && t.trim()))
    return null;
  try {
    return bf(JSON.parse(e.designerDocumentJson));
  } catch {
    return null;
  }
}
function mN(e, t) {
  var n;
  if ((n = t.designerInstanceJson) != null && n.trim())
    try {
      const r = Xb(JSON.parse(t.designerInstanceJson));
      if (r)
        return r;
    } catch {
    }
  return Gb(e.id);
}
function ph({
  template: e,
  marketingAsset: t,
  designerInstanceProperty: n,
  onSaved: r
}) {
  const o = E.useMemo(() => pN(e), [e]), [i, s] = E.useState(
    () => mN(e, t)
  ), a = E.useRef(i);
  a.current = i;
  const [l, u] = E.useState("idle"), [f, c] = E.useState(null), p = E.useMemo(() => o ? Jb(o, i) : null, [o, i]), v = E.useCallback(async () => {
    u("saving"), c(null);
    try {
      const T = JSON.stringify(a.current);
      await ie.saveMarketingAssetDesignerInstance(
        t.id,
        T,
        n
      );
      const P = { ...t, designerInstanceJson: T };
      r == null || r(P), u("saved");
    } catch (T) {
      c(T instanceof Error ? T.message : "Failed to save designer instance."), u("error");
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
      S0,
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
const hN = 900;
function gN(e) {
  var t;
  if ((t = e.designerDocumentJson) != null && t.trim())
    try {
      const n = bf(JSON.parse(e.designerDocumentJson));
      if (n)
        return n;
    } catch {
    }
  return Cf();
}
function yN({
  template: e,
  designerDocumentProperty: t,
  onTemplateSaved: n
}) {
  const [r, o] = E.useState(() => gN(e)), [i, s] = E.useState("saved"), [a, l] = E.useState(null), u = E.useRef(r), f = E.useRef(null), c = E.useRef(0), p = E.useRef(!0);
  u.current = r;
  const v = E.useCallback(
    async (P) => {
      const m = ++c.current;
      s("saving"), l(null);
      try {
        const h = JSON.stringify(P);
        if (await ie.saveTemplateDesignerDocument(
          e.id,
          h,
          t
        ), m !== c.current)
          return;
        const g = { ...e, designerDocumentJson: h };
        n == null || n(g), s("saved");
      } catch (h) {
        if (m !== c.current)
          return;
        l(h instanceof Error ? h.message : "Failed to save designer template."), s("error");
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
      v(u.current);
    }, hN), () => {
      f.current != null && window.clearTimeout(f.current);
    };
  }, [r, v]);
  const k = i === "error" ? "chd-status-bar--error" : i === "saved" ? "chd-status-bar--saved" : void 0, T = i === "saving" ? "Saving template canvas…" : i === "pending" ? "Unsaved changes…" : i === "error" ? a || "Save failed" : "Saved to template";
  return /* @__PURE__ */ d(
    S0,
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
async function vN(e, t) {
  const n = Cf();
  e.canvasWidth && (n.canvas.width = e.canvasWidth), e.canvasHeight && (n.canvas.height = e.canvasHeight);
  const r = JSON.stringify(n);
  return await ie.saveTemplateDesignerDocument(e.id, r, t), { ...e, designerDocumentJson: r };
}
function wN(e) {
  var t;
  return !!((t = e == null ? void 0 : e.designerDocumentJson) != null && t.trim());
}
const TN = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
let $u = null;
function SN(e) {
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
function kN(e = TN) {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : ($u || ($u = SN(e).then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), $u);
}
function EN({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  html2canvasCdnUrl: r,
  onSaved: o
}) {
  const [i, s] = E.useState(() => {
    const h = za(t.zoneLayoutJson), g = _a(e, t.zoneValues, h.values);
    return Hi(e, g);
  }), [a, l] = E.useState(() => {
    const h = za(t.zoneLayoutJson);
    return l0(e, h.layouts);
  }), [u, f] = E.useState(!1), [c, p] = E.useState(null), v = E.useRef(null), k = E.useMemo(
    () => a0(e, a),
    [e, a]
  ), T = (h, g) => {
    s((N) => ({ ...N, [h]: g }));
  }, P = (h, g) => {
    l((N) => {
      const C = { ...N[h], ...g };
      for (const b of Object.keys(g))
        g[b] === void 0 && delete C[b];
      return { ...N, [h]: C };
    });
  }, m = async () => {
    f(!0), p(null);
    try {
      const h = k.zones.map((S) => {
        const z = i[S.id];
        return z ? { ...z, zoneKey: Lr(S, k.zones) } : null;
      }).filter((S) => !!(S != null && S.zoneKey)), g = Object.fromEntries(
        h.map((S) => [S.zoneKey, S])
      ), N = i0(a, g);
      await ie.updateMarketingAsset({
        ...t,
        zoneLayoutJson: N
      }), Z("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const C = await ie.saveMarketingAssetZoneValues(
        t.id,
        h
      ), b = _a(e, C, g);
      if (s(Hi(e, b)), Tf() && v.current) {
        const z = await (await kN(r))(v.current, {
          useCORS: !0,
          width: ff(e),
          height: Sv(e)
        }), j = ["image", "png"].join("/"), _ = await new Promise(
          (I, H) => z.toBlob((G) => G ? I(G) : H(new Error("Canvas export failed")), j)
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
        zoneValues: b,
        zoneLayoutJson: N
      });
    } catch (h) {
      p(h instanceof Error ? h.message : "Failed to save.");
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
    Oa,
    {
      structureTitle: "Social structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ A("div", { className: "social-builder-structure", children: [
        /* @__PURE__ */ d(
          c0,
          {
            template: e,
            zoneLayouts: a,
            zoneValues: i,
            layoutMode: "canvas",
            onLayoutChange: P,
            onZoneValueChange: T
          }
        ),
        /* @__PURE__ */ A("div", { className: "social-builder-actions", children: [
          /* @__PURE__ */ d("button", { type: "button", className: "social-builder-save", onClick: m, disabled: u, children: "Save" }),
          /* @__PURE__ */ d(xo, { active: u }),
          /* @__PURE__ */ d(
            d0,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (h) => {
                await ie.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: h,
                  rawHtmlOverrideContent: "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        c && /* @__PURE__ */ d("div", { className: "marketing-builder-error social-builder-error", children: c })
      ] }),
      preview: /* @__PURE__ */ d(
        Af,
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
function $s({
  activeTab: e,
  zoneCount: t,
  templateName: n,
  onTabChange: r,
  showAssetTab: o = !0
}) {
  return /* @__PURE__ */ A("div", { className: "marketing-builder-toolbar marketing-builder-tab-bar", children: [
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
    /* @__PURE__ */ A("span", { className: "marketing-builder-toolbar-meta", children: [
      n ? `${n} · ` : "",
      t,
      " zone",
      t === 1 ? "" : "s"
    ] })
  ] });
}
function Mu({
  brandKitId: e,
  currentTemplateId: t,
  marketingAssetId: n,
  onTemplateChange: r,
  refreshKey: o = 0
}) {
  var k;
  const [i, s] = E.useState([]), [a, l] = E.useState(!0), [u, f] = E.useState(!1), [c, p] = E.useState(null);
  E.useEffect(() => {
    let T = !1;
    async function P() {
      l(!0), p(null);
      try {
        const m = await ie.listTemplatesForBrandKit(e);
        if (T)
          return;
        const h = m.some((N) => N.id === t) ? m : [...m, await ie.getTemplate(t)], g = [...new Map(h.map((N) => [N.id, N])).values()];
        g.sort((N, C) => N.templateName.localeCompare(C.templateName)), s(g);
      } catch (m) {
        T || (p(m instanceof Error ? m.message : "Could not load templates."), s([]));
      } finally {
        T || l(!1);
      }
    }
    return P(), () => {
      T = !0;
    };
  }, [e, t, o]);
  const v = async (T) => {
    if (!(!T || T === t)) {
      f(!0), p(null);
      try {
        await ie.linkMarketingAssetToTemplate(n, T);
        const P = i.find((m) => m.id === T) ?? await ie.getTemplate(T);
        r(P);
      } catch (P) {
        p(P instanceof Error ? P.message : "Could not switch template.");
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
    c && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: c })
  ] }) : /* @__PURE__ */ A("div", { className: "template-selector", children: [
    /* @__PURE__ */ A("label", { className: "template-selector-label", children: [
      "Template",
      /* @__PURE__ */ d(
        "select",
        {
          value: t,
          disabled: u,
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
    /* @__PURE__ */ d("p", { className: "template-selector-hint", children: u ? "" : "Choose which template this marketing asset uses." }),
    /* @__PURE__ */ d(xo, { active: u, className: "template-selector-saving" }),
    c && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: c })
  ] });
}
const AN = [
  "Text",
  "Heading",
  "Image",
  "CTA Button",
  "Logo",
  "Background Color",
  "Divider",
  "HTML"
];
function CN(e) {
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
function bN(e) {
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
  }[t] ?? AN.find((r) => r.toLowerCase() === t);
}
function k0(e) {
  var l, u;
  const t = e.trim(), n = t.match(/zone\s*[:=]\s*([a-zA-Z0-9_-]+)/i), r = t.match(/type\s*[:=]\s*([a-zA-Z0-9 _-]+)/i), o = t.match(/label\s*[:=]\s*([^|]+)/i), i = (l = n == null ? void 0 : n[1]) == null ? void 0 : l.trim(), s = r != null && r[1] ? bN(r[1]) : void 0, a = ((u = o == null ? void 0 : o[1]) == null ? void 0 : u.trim()) || void 0;
  return { zoneKey: i, zoneType: s, zoneLabel: a };
}
function NN(e, t) {
  return e.replace(/zone\s*[:=]\s*/gi, "").replace(/type\s*[:=]\s*[a-zA-Z0-9 _-]+/gi, "").replace(/label\s*[:=]\s*[^|]+/gi, "").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase() || t;
}
function mh(e) {
  return (e.fills ?? []).some(
    (t) => t.visible !== !1 && String(t.type ?? "").toUpperCase() === "IMAGE"
  );
}
function E0(e) {
  var o, i;
  const t = k0(e.name ?? "");
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
  if ((mh(e) || r === "RECTANGLE" || r === "ELLIPSE") && mh(e))
    return "Image";
  if (r === "COMPONENT" || r === "INSTANCE") {
    if (/button|cta/i.test(n))
      return "CTA Button";
    if (/logo/i.test(n))
      return "Logo";
  }
}
function A0(e) {
  const t = e.name ?? "";
  return /zone\s*[:=]/i.test(t) || /type\s*[:=]/i.test(t);
}
function xN(e) {
  const t = [], n = (r) => {
    A0(r) && t.push(r);
    for (const o of r.children ?? [])
      n(o);
  };
  return n(e), t.length > 0 ? t : (e.children ?? []).filter((r) => E0(r) != null);
}
function eo(e) {
  if (!(e == null || !Number.isFinite(e)))
    return Math.round(e);
}
function PN(e, t, n, r) {
  const o = k0(e.name ?? ""), i = o.zoneType ?? E0(e) ?? "Text";
  let s = o.zoneKey || NN(e.name ?? "", `zone_${t + 1}`);
  r.has(s) && (s = `${s}_${t + 1}`), r.add(s);
  const a = e.absoluteBoundingBox, l = (a == null ? void 0 : a.x) != null ? eo(a.x - n.x) : void 0, u = (a == null ? void 0 : a.y) != null ? eo(a.y - n.y) : void 0, f = {
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
  if (i === "Heading" && (f.headingLevel = bn), i === "Text" && typeof e.characters == "string" && e.characters.trim()) {
    const c = e.characters.trim().length;
    c > 0 && (f.maxCharacterCount = Math.max(40, Math.ceil(c * 1.25)));
  }
  return f;
}
function LN(e) {
  var u, f, c, p;
  const t = [], n = (e.name ?? "").trim() || "Figma frame", r = eo((u = e.absoluteBoundingBox) == null ? void 0 : u.width), o = eo((f = e.absoluteBoundingBox) == null ? void 0 : f.height), i = {
    x: ((c = e.absoluteBoundingBox) == null ? void 0 : c.x) ?? 0,
    y: ((p = e.absoluteBoundingBox) == null ? void 0 : p.y) ?? 0
  }, s = xN(e);
  if (s.length === 0)
    return t.push(
      'No zone layers found. Name layers like "zone:headline | type:Heading" or place typed content as direct children of the frame.'
    ), { frameName: n, canvasWidth: r, canvasHeight: o, zones: [], warnings: t };
  s.some(A0) || t.push(
    "No explicit zone: / type: names found — inferred zone types from layer names and Figma node types. Rename layers for stable imports."
  );
  const a = /* @__PURE__ */ new Set(), l = s.map((v, k) => PN(v, k, i, a));
  return { frameName: n, canvasWidth: r, canvasHeight: o, zones: l, warnings: t };
}
function C0(e, t) {
  const n = t.replace(/-/g, ":");
  if ((e.id ?? "").replace(/-/g, ":") === n)
    return e;
  for (const r of e.children ?? []) {
    const o = C0(r, n);
    if (o)
      return o;
  }
  return null;
}
function zN(e, t) {
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
    return C0(o, t) ?? o;
  }
  return n.id || n.children || n.type ? n : null;
}
function hh(e, t) {
  return `${e.replace(/\s+/g, " ").trim() || "Figma template"} (${t})`;
}
async function _N(e, t, n) {
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
function ON({
  template: e,
  figmaImportApiUrl: t = "/api/figma/import",
  figmaImportApiToken: n,
  onApplyToCurrent: r,
  onCreatedTemplate: o
}) {
  const [i, s] = E.useState(""), [a, l] = E.useState(null), [u, f] = E.useState(!1), [c, p] = E.useState(!1), [v, k] = E.useState(null), [T, P] = E.useState(null), [m, h] = E.useState(!1), [g, N] = E.useState(""), C = async () => {
    f(!0), k(null), P(null), l(null);
    try {
      const z = CN(i);
      if (!z)
        throw new Error(
          "Paste a full Figma URL that includes node-id (right-click frame → Copy link)."
        );
      const j = await _N(t, n, i), _ = zN(j, z.nodeId);
      if (!_)
        throw new Error("Could not find that frame/node in the Figma response.");
      const I = LN(_);
      l(I), N(hh(I.frameName, e.channelType)), I.zones.length === 0 ? k(I.warnings[0] || "No zones were mapped from this frame.") : P(`Mapped ${I.zones.length} zone(s) from “${I.frameName}”.`);
    } catch (z) {
      k(z instanceof Error ? z.message : "Figma preview failed.");
    } finally {
      f(!1);
    }
  }, b = () => {
    !a || a.zones.length === 0 || (r({
      zones: a.zones,
      canvasWidth: a.canvasWidth,
      canvasHeight: a.canvasHeight,
      frameName: a.frameName
    }), P(
      `Applied ${a.zones.length} zone(s) to “${e.templateName}”. Save/autosave will persist them.`
    ));
  }, S = async () => {
    if (!(!a || a.zones.length === 0)) {
      p(!0), k(null), P(null);
      try {
        const z = e.channelType, j = await ie.createTemplate({
          templateName: g.trim() || hh(a.frameName, z),
          channelType: z,
          formatPreset: e.formatPreset,
          canvasWidth: a.canvasWidth,
          canvasHeight: a.canvasHeight,
          brandKitId: e.brandKitId,
          zones: a.zones,
          allowedAssetIds: e.allowedAssetIds
        }, e.id);
        P(`Created template “${j.templateName}” (${j.id}).`), o == null || o(j);
      } catch (z) {
        k(
          z instanceof Error ? z.message : "Could not create template from Figma."
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
        onClick: () => void C(),
        disabled: u || !i.trim(),
        children: "Preview zones"
      }
    ),
    /* @__PURE__ */ d(xo, { active: u || c, className: "figma-import-saving" }),
    a && a.zones.length > 0 && /* @__PURE__ */ A("div", { className: "figma-import-preview", children: [
      /* @__PURE__ */ A("p", { className: "figma-import-preview-meta", children: [
        "Frame ",
        /* @__PURE__ */ d("strong", { children: a.frameName }),
        a.canvasWidth != null && a.canvasHeight != null ? ` · ${a.canvasWidth}×${a.canvasHeight}` : null
      ] }),
      /* @__PURE__ */ d("ul", { className: "figma-import-zone-list", children: a.zones.map((z) => /* @__PURE__ */ A("li", { children: [
        /* @__PURE__ */ d("code", { children: z.zoneKey }),
        " — ",
        z.zoneType,
        z.zoneWidth != null && z.zoneHeight != null ? ` (${z.zoneWidth}×${z.zoneHeight})` : null
      ] }, z.id)) }),
      a.warnings.map((z) => /* @__PURE__ */ d("p", { className: "figma-import-warning", children: z }, z)),
      /* @__PURE__ */ A("label", { className: "figma-import-checkbox", children: [
        /* @__PURE__ */ d(
          "input",
          {
            type: "checkbox",
            checked: m,
            onChange: (z) => h(z.target.checked)
          }
        ),
        "Create as a new template (instead of replacing zones on this one)"
      ] }),
      m ? /* @__PURE__ */ A(tt, { children: [
        /* @__PURE__ */ A("label", { children: [
          "New template name",
          /* @__PURE__ */ d(
            "input",
            {
              type: "text",
              value: g,
              onChange: (z) => N(z.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "figma-import-button figma-import-button-primary",
            onClick: () => void S(),
            disabled: c || !g.trim(),
            children: "Create template from Figma"
          }
        )
      ] }) : /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "figma-import-button figma-import-button-primary",
          onClick: b,
          children: "Replace zones on this template"
        }
      )
    ] }),
    T && /* @__PURE__ */ d("p", { className: "figma-import-message", children: T }),
    v && /* @__PURE__ */ d("p", { className: "marketing-builder-error figma-import-error", children: v })
  ] });
}
const RN = ["Social", "Email", "Newsletter", "Print"];
function $N({
  template: e,
  onChange: t,
  compact: n = !1
}) {
  const r = Js(e.channelType), o = bl(e.channelType), i = QE(e), s = (l) => {
    l !== e.channelType && t({
      channelType: l,
      ...Tv(l)
    });
  }, a = (l) => {
    const u = qE(e.channelType, l);
    u && t(u);
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
          children: RN.map((l) => /* @__PURE__ */ d("option", { value: l, children: l }, l))
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "template-dimensions-section", children: [
      /* @__PURE__ */ A("div", { className: "template-dimensions-heading", children: [
        /* @__PURE__ */ d("h5", { children: "Dimensions" }),
        /* @__PURE__ */ d("span", { className: "template-dimensions-summary", children: wv(e) })
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
                formatPreset: gh(
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
                formatPreset: gh(
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
function gh(e, t, n) {
  return (e === "Social" || e === "Print") && t != null && n != null ? `${t}x${n}` : e === "Email" && t != null ? `${t}px email` : e === "Newsletter" && t != null ? `${t}px newsletter` : "";
}
function MN({ template: e, onAssetsChange: t }) {
  const n = Ef(), { resultIds: r, fullText: o, hasSearchIntegration: i } = o0(), [s, a] = E.useState([]), [l, u] = E.useState([]), [f, c] = E.useState(!1), [p, v] = E.useState(!1), [k, T] = E.useState(null), [P, m] = E.useState(null), h = E.useMemo(
    () => new Set(s.map((S) => S.id).filter(Boolean)),
    [s]
  ), g = E.useCallback(async () => {
    if (!e.id || e.id.startsWith("temp-")) {
      a([]);
      return;
    }
    c(!0), m(null);
    try {
      const S = await ie.getTemplateAllowedAssets(e.id);
      a(S), t(S.map((z) => z.id).filter(Boolean));
    } catch (S) {
      a([]), m(S instanceof Error ? S.message : "Could not load template assets.");
    } finally {
      c(!1);
    }
  }, [t, e.id]);
  E.useEffect(() => {
    g();
  }, [g]), E.useEffect(() => {
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
  const N = async (S) => {
    var z, j;
    if (!e.id || e.id.startsWith("temp-") || !S.id) {
      m("Save the template first before linking assets.");
      return;
    }
    T(S.id), m(null);
    try {
      if (!await ie.addAllowedAssetToTemplate(e.id, S.id))
        throw new Error(`Could not link ${S.name} to this template.`);
      await g(), (z = n.notifier) == null || z.notifySuccess(`Added "${S.name}" to template assets.`);
    } catch (_) {
      const I = _ instanceof Error ? _.message : "Failed to link asset to template.";
      m(I), (j = n.notifier) == null || j.notifyError(I);
    } finally {
      T(null);
    }
  }, C = async (S) => {
    var z, j;
    if (!(!e.id || !S.id)) {
      T(S.id), m(null);
      try {
        await ie.removeAllowedAssetFromTemplate(e.id, S.id), await g(), (z = n.notifier) == null || z.notifySuccess(`Removed "${S.name}" from template assets.`);
      } catch (_) {
        const I = _ instanceof Error ? _.message : "Failed to remove asset from template.";
        m(I), (j = n.notifier) == null || j.notifyError(I);
      } finally {
        T(null);
      }
    }
  }, b = !e.id || e.id.startsWith("temp-");
  return /* @__PURE__ */ A("div", { className: "template-zone-asset-collection template-allowed-assets", children: [
    /* @__PURE__ */ d("h4", { className: "template-zone-asset-collection-title", children: "Template image library" }),
    /* @__PURE__ */ A("p", { className: "template-zone-asset-collection-intro", children: [
      "Link ",
      /* @__PURE__ */ d("strong", { children: "M.Asset" }),
      " entities on the template via ",
      /* @__PURE__ */ d("code", { children: "templateToAllowedAsset" }),
      ". Every image zone on marketing assets built from this template can pick from these assets. Use the Content Hub search on this page to find images, then click ",
      /* @__PURE__ */ d("strong", { children: "Add" }),
      "."
    ] }),
    b && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-hint", children: "Save the template first so it has a persisted entity ID, then add assets from search." }),
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
              disabled: k === S.id || b,
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
        "Add a Search page component to this page and set ",
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
          const z = S.id ? h.has(S.id) : !1;
          return /* @__PURE__ */ A("div", { className: "template-zone-asset-card", children: [
            /* @__PURE__ */ d("img", { src: S.thumbnailUrl, alt: S.name }),
            /* @__PURE__ */ d("span", { children: S.name }),
            /* @__PURE__ */ d(
              "button",
              {
                type: "button",
                className: "template-zone-asset-add",
                disabled: z || k === S.id || !S.id || b,
                onClick: () => void N(S),
                children: z ? "Linked" : "Add"
              }
            )
          ] }, S.id || S.thumbnailUrl);
        }),
        i && !p && l.length === 0 && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-empty", children: "Run a search on this page to see assets you can link." })
      ] })
    ] }),
    P && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-error", children: P })
  ] });
}
function IN({ zoneLabel: e, onDelete: t, className: n = "" }) {
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
const DN = ["Text", "Heading", "Image", "CTA Button", "Logo", "Background Color", "Divider", "HTML"], HN = 800;
function FN({
  template: e,
  onSaved: t,
  pendingFigmaImport: n = null,
  onPendingFigmaImportApplied: r
}) {
  var R;
  const [o, i] = E.useState(e), [s, a] = E.useState(((R = o.zones[0]) == null ? void 0 : R.id) ?? null), [l, u] = E.useState("saved"), [f, c] = E.useState(null), p = E.useRef(e.zones), v = E.useRef(o), k = E.useRef(null), T = E.useRef(0), P = E.useRef(!0), m = E.useRef(!1);
  v.current = o;
  const h = E.useCallback(
    async (w) => {
      const L = ++T.current;
      u("saving"), c(null);
      try {
        const U = await ie.saveTemplate(w, p.current);
        if (L !== T.current)
          return;
        p.current = U.zones, P.current = !0, i(U), t == null || t(U), u("saved");
      } catch (U) {
        if (L !== T.current)
          return;
        c(U instanceof Error ? U.message : "Failed to save template zones."), u("error");
      }
    },
    [t]
  );
  E.useEffect(() => {
    var w;
    !n || n.zones.length === 0 || (i((L) => ({
      ...L,
      canvasWidth: n.canvasWidth ?? L.canvasWidth,
      canvasHeight: n.canvasHeight ?? L.canvasHeight,
      zones: n.zones.map((U, V) => ({
        ...U,
        sortOrder: V
      }))
    })), a(((w = n.zones[0]) == null ? void 0 : w.id) ?? null), u("pending"), r == null || r());
  }, [n, r]), E.useEffect(() => {
    P.current = !0, p.current = e.zones, i(e), a((w) => {
      var L;
      return w && e.zones.some((U) => U.id === w) ? w : ((L = e.zones[0]) == null ? void 0 : L.id) ?? null;
    }), c(null), u("saved");
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
    if (!m.current) {
      m.current = !0;
      return;
    }
    if (P.current) {
      P.current = !1;
      return;
    }
    return u((w) => w === "saving" ? w : "pending"), k.current != null && window.clearTimeout(k.current), k.current = window.setTimeout(() => {
      h(v.current);
    }, HN), () => {
      k.current != null && window.clearTimeout(k.current);
    };
  }, [o, h]);
  const g = o.zones.find((w) => w.id === s), [N, C] = E.useState(null), [b, S] = E.useState(null), z = [...o.zones].sort((w, L) => w.sortOrder - L.sortOrder), j = (w, L) => {
    w !== L && i((U) => {
      const V = [...U.zones].sort((dt, Lo) => dt.sortOrder - Lo.sortOrder), Q = V.findIndex((dt) => dt.id === w), Re = V.findIndex((dt) => dt.id === L);
      if (Q < 0 || Re < 0)
        return U;
      const $e = [...V], [Me] = $e.splice(Q, 1);
      return $e.splice(Re, 0, Me), {
        ...U,
        zones: $e.map((dt, Lo) => ({ ...dt, sortOrder: Lo }))
      };
    });
  }, _ = (w) => {
    i((L) => ({ ...L, ...w }));
  }, I = (w, L) => {
    i((U) => ({
      ...U,
      zones: U.zones.map((V) => {
        if (V.id !== w)
          return V;
        const Q = { ...V, ...L };
        for (const Re of Object.keys(L))
          L[Re] === void 0 && delete Q[Re];
        return Q;
      })
    }));
  }, H = (w) => {
    if (w.trim() === "")
      return;
    const L = Number(w);
    return Number.isNaN(L) ? void 0 : L;
  }, G = () => {
    const w = new Set(o.zones.map((Q) => Q.zoneKey));
    let L = o.zones.length + 1, U = `newZone${L}`;
    for (; w.has(U); )
      L += 1, U = `newZone${L}`;
    const V = {
      id: `temp-${Date.now()}`,
      zoneKey: U,
      zoneLabel: "New zone",
      zoneType: "Text",
      isLocked: !1,
      sortOrder: o.zones.length
    };
    i((Q) => ({ ...Q, zones: [...Q.zones, V] })), a(V.id);
  }, Le = (w) => {
    var Re, $e;
    const L = [...o.zones].sort((Me, dt) => Me.sortOrder - dt.sortOrder), U = L.findIndex((Me) => Me.id === w), V = L.filter((Me) => Me.id !== w).map((Me, dt) => ({ ...Me, sortOrder: dt })), Q = ((Re = V[U]) == null ? void 0 : Re.id) ?? (($e = V[U - 1]) == null ? void 0 : $e.id) ?? null;
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
    i((L) => ({ ...L, zones: w })), a(w[0].id);
  }, Ee = Vc(l === "pending", "pending"), W = Vc(l === "saving", "active"), $ = l === "pending" ? Ee : l === "saving" ? W : l === "error" ? f ?? "Could not save template." : "All changes saved automatically.";
  return /* @__PURE__ */ d(
    Oa,
    {
      structureTitle: "Template structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ A("div", { className: "template-admin-structure", children: [
        /* @__PURE__ */ d($N, { template: o, onChange: _, compact: !0 }),
        /* @__PURE__ */ d(
          MN,
          {
            template: o,
            onAssetsChange: (w) => i((L) => {
              const U = L.allowedAssetIds ?? [];
              return U.length === w.length && U.every((V, Q) => V === w[Q]) ? L : { ...L, allowedAssetIds: w };
            })
          }
        ),
        /* @__PURE__ */ A("div", { className: "template-admin-structure-grid", children: [
          /* @__PURE__ */ A("div", { className: "template-admin-zone-list", children: [
            /* @__PURE__ */ d("h4", { children: "Zones" }),
            /* @__PURE__ */ d("p", { className: "zone-list-hint", children: "Drag zones to reorder" }),
            z.map((w) => /* @__PURE__ */ A(
              "div",
              {
                tabIndex: 0,
                draggable: !0,
                className: `zone-list-item${w.id === s ? " zone-list-item-active" : ""}${w.id === N ? " zone-list-item-dragging" : ""}${w.id === b ? " zone-list-item-drag-over" : ""}`,
                onClick: () => a(w.id),
                onKeyDown: (L) => {
                  (L.key === "Enter" || L.key === " ") && (L.preventDefault(), a(w.id));
                },
                onDragStart: (L) => {
                  if (L.target.closest(".zone-list-delete")) {
                    L.preventDefault();
                    return;
                  }
                  L.dataTransfer.effectAllowed = "move", L.dataTransfer.setData("text/plain", w.id), C(w.id);
                },
                onDragOver: (L) => {
                  L.preventDefault(), L.dataTransfer.dropEffect = "move", b !== w.id && S(w.id);
                },
                onDragLeave: () => {
                  S((L) => L === w.id ? null : L);
                },
                onDrop: (L) => {
                  L.preventDefault();
                  const U = L.dataTransfer.getData("text/plain");
                  U && j(U, w.id), C(null), S(null);
                },
                onDragEnd: () => {
                  C(null), S(null);
                },
                children: [
                  /* @__PURE__ */ d("span", { className: "zone-list-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }),
                  /* @__PURE__ */ A("span", { className: "zone-list-item-content", children: [
                    /* @__PURE__ */ d("span", { children: w.zoneLabel || w.zoneKey }),
                    /* @__PURE__ */ d("span", { className: "zone-list-item-type", children: w.zoneType === "Heading" ? `Heading · ${w.headingLevel ?? bn}` : w.zoneType }),
                    w.isLocked && /* @__PURE__ */ d("span", { className: "zone-list-item-lock", children: "Locked" })
                  ] }),
                  /* @__PURE__ */ d(
                    IN,
                    {
                      zoneLabel: w.zoneLabel || w.zoneKey,
                      onDelete: () => Le(w.id)
                    }
                  )
                ]
              },
              w.id
            )),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-list-add", onClick: G, children: "+ Add zone" }),
            o.zones.length === 0 && /* @__PURE__ */ d("button", { type: "button", className: "zone-list-add zone-list-starter", onClick: Je, children: "Start with email template zones" })
          ] }),
          /* @__PURE__ */ d("div", { className: "template-admin-properties", children: g ? /* @__PURE__ */ A(tt, { children: [
            /* @__PURE__ */ d("h4", { children: "Zone properties" }),
            /* @__PURE__ */ A("div", { children: [
              /* @__PURE__ */ A("label", { children: [
                "Label",
                /* @__PURE__ */ d(
                  "input",
                  {
                    value: g.zoneLabel,
                    onChange: (w) => I(g.id, { zoneLabel: w.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ A("label", { children: [
                "Zone key",
                /* @__PURE__ */ d(
                  "input",
                  {
                    value: g.zoneKey,
                    onChange: (w) => I(g.id, { zoneKey: w.target.value })
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
                      I(
                        g.id,
                        QA(g, w.target.value)
                      );
                    },
                    children: DN.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                  }
                )
              ] }),
              /* @__PURE__ */ A("label", { className: "checkbox-label", children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "checkbox",
                    checked: g.isLocked,
                    onChange: (w) => I(g.id, { isLocked: w.target.checked })
                  }
                ),
                "Locked (brand element, end user cannot edit)"
              ] }),
              g.zoneType === "Heading" && /* @__PURE__ */ A(tt, { children: [
                /* @__PURE__ */ A("label", { children: [
                  "Heading level",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: g.headingLevel ?? bn,
                      onChange: (w) => I(g.id, {
                        headingLevel: w.target.value
                      }),
                      children: Cv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
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
                      onChange: (w) => I(g.id, { maxCharacterCount: H(w.target.value) })
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
                    onChange: (w) => I(g.id, { maxCharacterCount: H(w.target.value) })
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
                      const L = w.target.value.trim();
                      I(g.id, { aspectRatioLock: L || void 0 });
                    }
                  }
                )
              ] }),
              g.zoneType === "HTML" && /* @__PURE__ */ A(tt, { children: [
                /* @__PURE__ */ A("label", { children: [
                  "Default HTML content",
                  /* @__PURE__ */ d(
                    "textarea",
                    {
                      value: g.htmlDefaultContent ?? "",
                      onChange: (w) => I(g.id, { htmlDefaultContent: w.target.value })
                    }
                  )
                ] }),
                /* @__PURE__ */ A("label", { className: "checkbox-label", children: [
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "checkbox",
                      checked: g.htmlAllowUserOverride ?? !1,
                      onChange: (w) => I(g.id, { htmlAllowUserOverride: w.target.checked })
                    }
                  ),
                  "Allow end user to edit this HTML zone"
                ] })
              ] }),
              Js(o.channelType) && /* @__PURE__ */ A("div", { className: "position-fields", children: [
                /* @__PURE__ */ A("label", { children: [
                  "X",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: g.positionX ?? "",
                      onChange: (w) => I(g.id, { positionX: H(w.target.value) })
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
                      onChange: (w) => I(g.id, { positionY: H(w.target.value) })
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
                      onChange: (w) => I(g.id, { zoneWidth: H(w.target.value) })
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
                      onChange: (w) => I(g.id, { zoneHeight: H(w.target.value) })
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
                      value: g.contentAlignment ?? Pr,
                      onChange: (w) => I(g.id, {
                        contentAlignment: w.target.value
                      }),
                      children: bv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
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
                      onChange: (w) => I(g.id, { offsetPx: Math.max(0, Number(w.target.value) || 0) })
                    }
                  )
                ] }),
                /* @__PURE__ */ A("label", { children: [
                  "Direction",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: g.offsetDirection ?? Nl,
                      onChange: (w) => I(g.id, {
                        offsetDirection: w.target.value
                      }),
                      children: Nv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
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
                      onChange: (w) => I(g.id, { sortOrder: Math.max(0, Number(w.target.value) || 0) })
                    }
                  )
                ] })
              ] }) })
            ] }, `${g.id}-${g.zoneType}`),
            !Js(o.channelType) && /* @__PURE__ */ d("p", { className: "zone-sort-hint", children: "You can also drag zones in the list to reorder." }),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-remove", onClick: () => Le(g.id), children: "Remove zone" })
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
      preview: /* @__PURE__ */ d(Af, { template: o, layoutMode: Js(o.channelType) ? "canvas" : "stacked" })
    }
  );
}
function UN({ template: e, onDuplicated: t }) {
  const n = kC(e.channelType), [r, o] = E.useState(n[0] ?? "Social"), [i, s] = E.useState(`${e.templateName} (${n[0] ?? "Social"})`), [a, l] = E.useState(!1), [u, f] = E.useState(null), [c, p] = E.useState(null);
  if (n.length === 0)
    return null;
  const v = (T) => {
    o(T), s(`${e.templateName} (${T})`);
  }, k = async () => {
    l(!0), p(null), f(null);
    try {
      const T = await ie.duplicateTemplate(e.id, r, i);
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
    /* @__PURE__ */ d(xo, { active: a, className: "template-duplicate-saving" }),
    u && /* @__PURE__ */ d("p", { className: "template-duplicate-message", children: u }),
    c && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-duplicate-error", children: c })
  ] });
}
function jN({
  template: e,
  onTemplateSaved: t,
  onTemplatesChanged: n,
  figmaImportApiUrl: r,
  figmaImportApiToken: o
}) {
  const i = e.zones.length > 0, [s, a] = E.useState(null);
  return /* @__PURE__ */ A("div", { className: "template-setup-panel", children: [
    !i && /* @__PURE__ */ A("div", { className: "template-setup-banner", children: [
      /* @__PURE__ */ d("h3", { children: "Edit template" }),
      /* @__PURE__ */ A("p", { children: [
        "Template ",
        /* @__PURE__ */ d("strong", { children: e.templateName }),
        " (",
        e.id,
        ") has no zones yet. Set template properties and add zones on the left, then save. The preview updates on the right."
      ] }),
      /* @__PURE__ */ d("p", { className: "template-setup-hint", children: "Recommended email zones: Logo (locked), Heading (H1/H2), Hero image, Body copy, CTA button. Or import a Figma frame below." })
    ] }),
    i && /* @__PURE__ */ d("div", { className: "template-setup-banner template-setup-banner-info", children: /* @__PURE__ */ A("p", { children: [
      "Editing ",
      /* @__PURE__ */ d("strong", { children: e.templateName }),
      ". Update template properties and zones on the left; preview on the right. Changes apply to all marketing assets using this template."
    ] }) }),
    /* @__PURE__ */ d(
      ON,
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
      UN,
      {
        template: e,
        onDuplicated: (l) => {
          t(l), n == null || n();
        }
      }
    ),
    /* @__PURE__ */ d(
      FN,
      {
        template: e,
        onSaved: t,
        pendingFigmaImport: s,
        onPendingFigmaImportApplied: () => a(null)
      }
    )
  ] });
}
function BN({
  client: e,
  entity: t,
  options: n,
  config: r,
  contentHubApi: o,
  searchIdentifier: i,
  selectionPoolIdentifier: s
}) {
  const [a, l] = E.useState(null), [u, f] = E.useState(null), [c, p] = E.useState(null), [v, k] = E.useState(!0), [T, P] = E.useState(null), [m, h] = E.useState("asset"), [g, N] = E.useState(0), [C, b] = E.useState(!1), [S, z] = E.useState(null), j = (w) => {
    h(w), !(w !== "asset" || !(u != null && u.id)) && ie.getTemplate(u.id).then((L) => f(L)).catch((L) => {
      Un(
        "template reload",
        L,
        `Could not refresh template ${u.id} when switching to the asset tab.`
      );
    });
  };
  E.useEffect(() => {
    LC(e ?? null);
  }, [e]), E.useEffect(() => {
    let w = !1;
    async function L() {
      const U = await Cb(
        e,
        n ?? (e == null ? void 0 : e.options),
        t,
        r
      );
      w || (l(U), U.allowTemplateZoneEditing && Z("allowTemplateZoneEditing", "Template zone editing enabled from Configuration"));
    }
    return L(), () => {
      w = !0;
    };
  }, [e, r, t, n]), E.useEffect(() => {
    a != null && a.contentHubProxyBase && zC(a.contentHubProxyBase);
  }, [a == null ? void 0 : a.contentHubProxyBase]), E.useEffect(() => {
    if (!a)
      return;
    const w = a;
    let L = !1;
    async function U() {
      if (k(!0), P(null), Jk(), !w.templateId) {
        const V = iE(t, r);
        Un("templateId", V), P(V), k(!1);
        return;
      }
      if (!w.marketingAssetId) {
        const V = "marketingAssetId could not be resolved from context.entity.systemProperties.id.";
        Un("marketingAssetId", V), P(V), k(!1);
        return;
      }
      Z("templateId", `Using template ${w.templateId}`), Z("marketingAssetId", `Using marketing asset ${w.marketingAssetId}`);
      try {
        const V = await ie.getTemplate(w.templateId);
        if (L)
          return;
        f(V);
        const Q = Im(w, V.channelType);
        if (Q === "admin") {
          p(null), zm({
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
        if (L)
          return;
        p(Re);
        const $e = w.brandKitId ?? V.brandKitId;
        zm({
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
        if (L)
          return;
        Un("load", V, "Marketing builder could not load required entities."), P(V instanceof Error ? V.message : "Failed to load marketing builder data.");
      } finally {
        L || k(!1);
      }
    }
    return U(), () => {
      L = !0;
    };
  }, [r, t, a]);
  const _ = Im(a ?? {}, u == null ? void 0 : u.channelType), I = (a == null ? void 0 : a.brandKitId) ?? (u == null ? void 0 : u.brandKitId), H = (a == null ? void 0 : a.userHasOverridePermission) ?? !1, G = i ?? (a == null ? void 0 : a.searchIdentifier), Le = s ?? (a == null ? void 0 : a.selectionPoolIdentifier), Je = {
    searchIdentifier: G,
    selectionPoolIdentifier: Le,
    search: o == null ? void 0 : o.search,
    selection: o == null ? void 0 : o.selection,
    notifier: o == null ? void 0 : o.notifier
  };
  E.useEffect(() => {
    u && u.zones.length === 0 && h("template");
  }, [u == null ? void 0 : u.id, u == null ? void 0 : u.zones.length]);
  const Ee = () => {
    N((w) => w + 1);
  }, W = async (w) => {
    if (f(w), a && l({ ...a, templateId: w.id }), c) {
      const L = await ie.getMarketingAsset(c.id);
      p(L);
    }
    Ee();
  }, $ = async () => {
    if (u) {
      b(!0), z(null);
      try {
        const w = await vN(
          u,
          a == null ? void 0 : a.designerDocumentProperty
        );
        f(w), Ee();
      } catch (w) {
        z(
          w instanceof Error ? w.message : "Could not create canvas template."
        );
      } finally {
        b(!1);
      }
    }
  }, R = wN(u);
  return !a || v ? /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading marketing builder..." }) : T ? /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: T }) : u ? I ? /* @__PURE__ */ d(Ab, { value: Je, children: /* @__PURE__ */ d(Eb, { brandKitId: I, children: /* @__PURE__ */ A("div", { className: "marketing-builder", children: [
    (_ === "admin" || m === "template") && /* @__PURE__ */ A(tt, { children: [
      _ !== "admin" && /* @__PURE__ */ d(
        $s,
        {
          activeTab: m,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: j
        }
      ),
      _ === "admin" && /* @__PURE__ */ d(
        $s,
        {
          activeTab: "template",
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: () => {
          },
          showAssetTab: !1
        }
      ),
      R ? /* @__PURE__ */ d(
        yN,
        {
          template: u,
          designerDocumentProperty: a.designerDocumentProperty,
          onTemplateSaved: (w) => {
            f(w), Ee();
          }
        }
      ) : /* @__PURE__ */ A(tt, { children: [
        /* @__PURE__ */ A("div", { className: "designer-create-banner", children: [
          /* @__PURE__ */ d("p", { children: "This template uses the zone builder. You can also create a canvas designer template (stored as designerDocumentJson on EPAM.BuilderTemplate)." }),
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
          jN,
          {
            template: u,
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
    _ === "social" && c && m === "asset" && /* @__PURE__ */ A(tt, { children: [
      /* @__PURE__ */ d(
        $s,
        {
          activeTab: m,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: j
        }
      ),
      /* @__PURE__ */ d(
        Mu,
        {
          brandKitId: I,
          currentTemplateId: u.id,
          marketingAssetId: c.id,
          refreshKey: g,
          onTemplateChange: W
        }
      ),
      R ? /* @__PURE__ */ d(
        ph,
        {
          template: u,
          marketingAsset: c,
          designerDocumentProperty: a.designerDocumentProperty,
          designerInstanceProperty: a.designerInstanceProperty,
          onSaved: p
        }
      ) : /* @__PURE__ */ d(
        EN,
        {
          template: u,
          marketingAsset: c,
          userHasOverridePermission: H,
          html2canvasCdnUrl: a.html2canvasCdnUrl
        }
      )
    ] }),
    _ === "social" && !c && /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Marketing asset could not be loaded for the social builder." }),
    _ === "email" && c && m === "asset" && /* @__PURE__ */ A(tt, { children: [
      /* @__PURE__ */ d(
        $s,
        {
          activeTab: m,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: j
        }
      ),
      R ? /* @__PURE__ */ A(tt, { children: [
        /* @__PURE__ */ d(
          Mu,
          {
            brandKitId: I,
            currentTemplateId: u.id,
            marketingAssetId: c.id,
            refreshKey: g,
            onTemplateChange: W
          }
        ),
        /* @__PURE__ */ d(
          ph,
          {
            template: u,
            marketingAsset: c,
            designerDocumentProperty: a.designerDocumentProperty,
            designerInstanceProperty: a.designerInstanceProperty,
            onSaved: p
          }
        )
      ] }) : u.zones.length > 0 ? /* @__PURE__ */ A(tt, { children: [
        /* @__PURE__ */ d(
          Mu,
          {
            brandKitId: I,
            currentTemplateId: u.id,
            marketingAssetId: c.id,
            refreshKey: g,
            onTemplateChange: W
          }
        ),
        /* @__PURE__ */ d(
          Zb,
          {
            template: u,
            marketingAsset: c,
            userHasOverridePermission: H,
            renderEmailApiUrl: a.renderEmailApiUrl
          }
        )
      ] }) : /* @__PURE__ */ A("div", { className: "marketing-builder-status template-empty-message", children: [
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
function KN(e) {
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
function ZN(e) {
  const t = Py(e);
  return ae("startup", "CHMarketingBuilder initialised"), {
    async render(n) {
      var i, s, a;
      const r = n.config ? typeof n.config == "string" ? "json-string" : Object.keys(n.config).join(", ") || "(empty object)" : "(none)";
      ae(
        "context",
        `entityId=${((s = (i = n.entity) == null ? void 0 : i.systemProperties) == null ? void 0 : s.id) ?? ((a = n.options) == null ? void 0 : a.entityId) ?? "n/a"}, config=${r}`
      );
      const o = KN(n.config);
      t.render(
        /* @__PURE__ */ d(Wk, { theme: n.theme, children: /* @__PURE__ */ d(
          BN,
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
  ZN as default
};
