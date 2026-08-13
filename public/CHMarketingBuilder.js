(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@font-face{font-display:swap;font-family:Cytiva Aktiv;font-style:normal;font-weight:400;src:url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_rg.woff2) format("woff2"),url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_rg.woff) format("woff")}@font-face{font-display:swap;font-family:Cytiva Aktiv;font-style:normal;font-weight:500;src:url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_md.woff2) format("woff2"),url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_md.woff) format("woff")}@font-face{font-display:swap;font-family:Cytiva Aktiv;font-style:normal;font-weight:700;src:url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_bd.woff2) format("woff2"),url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_bd.woff) format("woff")}.marketing-builder{--mb-primary: #00755f;--mb-primary-hover: #33a08c;--mb-primary-active: #00614f;--mb-primary-soft: #e4f7f4;--mb-primary-border: #99cfc5;--mb-accent: #ff5900;--mb-text: #18181b;--mb-muted: #717171;--mb-background: #f2f9f8;--mb-surface: #ffffff;--mb-border: #e8e8e8;--mb-font: "Cytiva Aktiv", Arial, Helvetica, sans-serif;font-family:var(--mb-font);color:var(--mb-text)}.marketing-builder-status{padding:16px;font-size:14px;color:#555}.marketing-builder-error{color:#b71c1c}.email-builder-editor{max-width:none;margin:0;border:none;padding:0;background:transparent}.builder-split{display:flex;gap:16px;align-items:stretch;min-height:72vh}.builder-split-panel{flex:1 1 50%;min-width:0;display:flex;flex-direction:column;border:1px solid #e0e0e0;border-radius:6px;background:#fff;overflow:hidden}.builder-split-heading{margin:0;padding:12px 16px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;border-bottom:1px solid #ececec;background:#fafafa}.builder-split-structure-body,.builder-split-preview-body{flex:1;min-height:0;display:flex;flex-direction:column}.builder-split-structure-body{overflow:auto;padding:16px}.builder-split-preview-body{padding:16px;background:var(--mb-background)}.template-admin-structure{display:flex;flex-direction:column;gap:16px;min-height:100%}.template-admin-structure-grid{display:grid;grid-template-columns:minmax(180px,220px) minmax(0,1fr);gap:16px;align-items:start}.template-admin-structure-actions{margin-top:auto;padding-top:12px;border-top:1px solid #ececec}.template-admin-autosave-status{margin:0;font-size:12px;color:#666}.template-admin-autosave-status-saved{color:#2e7d32}.template-admin-autosave-status:not(.template-admin-autosave-status-saved):not(.template-admin-autosave-status-error){color:var(--mb-primary, #00755f);font-style:italic}.template-admin-autosave-status-error{color:#c62828}.saving-status-message{margin:8px 0 0;font-size:12px;line-height:1.45;color:var(--mb-primary, #00755f);font-style:italic;animation:saving-status-fade .35s ease}@keyframes saving-status-fade{0%{opacity:0}to{opacity:1}}.template-properties-form{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-properties-form h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-properties-form label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-properties-form input,.template-properties-form select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-properties-meta{margin:0;font-size:11px;color:#888}.template-dimensions-section{margin-top:4px;padding-top:12px;border-top:1px solid #ececec}.template-dimensions-heading{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:10px}.template-dimensions-heading h5{margin:0;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#666}.template-dimensions-summary{font-size:11px;font-weight:600;color:var(--mb-primary, #00755f);white-space:nowrap}.template-dimension-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.template-dimensions-hint{margin:0 0 4px;font-size:11px;line-height:1.4;color:#888}.live-preview-canvas-wrap,.live-preview-email-wrap{display:flex;flex-direction:column;gap:8px;height:100%}.live-preview-dimensions-badge{margin:0;align-self:center;padding:4px 10px;border-radius:999px;background:var(--mb-primary-soft, #e4f7f4);color:var(--mb-primary, #00755f);font-size:11px;font-weight:600;letter-spacing:.02em}.template-admin-preview-canvas-fill{flex:1;min-height:100%;margin:0}.live-preview-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text,.live-preview-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text{font-size:16px;line-height:1.5}.live-preview-canvas .zone-text-empty:empty:before,.live-preview-canvas .zone-heading.zone-text-empty:empty:before{color:var(--mb-muted, #717171);font-style:italic}.template-admin-preview-empty{margin:0;padding:24px;text-align:center;color:#888;font-size:13px}.email-builder-structure{display:flex;flex-direction:column;gap:12px}.email-builder-override-structure{display:flex;flex-direction:column;gap:12px;min-height:100%}.email-builder-override-structure .raw-html-editor{flex:1;min-height:420px}.email-builder-zone-row{margin-bottom:12px}.zone-stacked{min-height:48px}.zone-stacked.zone-image{min-height:180px}.asset-zone-structure-content .zone-logo{padding:8px 0}.asset-zone-structure-content .zone-logo-image{display:block;max-width:220px;max-height:72px;width:auto;height:auto;object-fit:contain}.zone-logo-preview-frame{display:inline-block;padding:8px 12px;border-radius:4px}.asset-zone-structure-content .zone-logo-preview-frame .zone-logo-image{margin-top:0}.logo-picker{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.logo-picker-compact{gap:8px}.logo-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.logo-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.logo-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.logo-picker-preview{display:flex;align-items:center;justify-content:center;min-height:56px;padding:8px;border-radius:4px;background:#f7f7f7}.logo-picker-image{display:block;max-width:100%;max-height:48px;width:auto;height:auto;object-fit:contain}.image-picker{display:flex;flex-direction:column;gap:10px}.image-picker-compact .image-picker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.image-picker-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.image-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.image-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.image-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.image-picker-preview{display:flex;align-items:center;justify-content:center;min-height:72px;padding:8px;border-radius:4px;background:#f7f7f7;overflow:hidden}.image-picker-image{max-width:100%;max-height:72px;object-fit:contain}.image-picker-label{font-size:11px;color:#424242;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.image-picker-hint,.image-picker-loading,.image-picker-error{font-size:12px;color:#666}.image-picker-error{color:#c62828}.image-picker-hint,.image-picker-loading{margin:0 0 10px;line-height:1.45}.image-picker-selected-preview{margin-bottom:10px}.image-picker-selected-image{display:block;max-width:100%;max-height:160px;border-radius:6px;border:1px solid #ddd;object-fit:contain}.image-picker-footer{display:flex;justify-content:flex-start}.image-picker-url-toggle,.image-picker-url-apply{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:6px 10px;font-size:12px;cursor:pointer}.image-picker-url-form{display:flex;gap:8px}.image-picker-url-input{flex:1;padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection{display:flex;flex-direction:column;gap:12px;padding:12px;border:1px solid var(--mb-border, #e8e8e8);border-radius:8px;background:#fafafa}.template-zone-asset-collection-title{margin:0;font-size:14px}.template-zone-asset-collection-intro,.template-zone-asset-collection-hint,.template-zone-asset-collection-empty,.template-zone-asset-collection-error{margin:0;font-size:12px;color:#666;line-height:1.45}.template-zone-asset-collection-error{color:#c62828}.template-zone-asset-collection-field{display:flex;flex-direction:column;gap:6px;font-size:12px}.template-zone-asset-collection-field input{padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection-section{display:flex;flex-direction:column;gap:8px}.template-zone-asset-collection-section-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.template-zone-asset-collection-section-header h5{margin:0;font-size:13px}.template-zone-asset-collection-status{font-size:11px;color:#888}.template-zone-asset-collection-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px}.template-zone-asset-card{display:flex;flex-direction:column;gap:6px;padding:8px;border:1px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff}.template-zone-asset-card img{width:100%;height:72px;object-fit:cover;border-radius:4px;background:#f2f2f2}.template-zone-asset-card span{font-size:11px;color:#424242;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.template-zone-asset-add,.template-zone-asset-remove{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:5px 8px;font-size:11px;cursor:pointer}.template-zone-asset-add:disabled{opacity:.55;cursor:not-allowed}.zone-image-placeholder{padding:16px;border:1px dashed #ccc;border-radius:6px;color:#888;font-size:12px;text-align:center}.logo-picker-label{font-size:11px;font-weight:600;color:var(--mb-text, #18181b)}.zone-stacked-logo{padding:8px 0;text-align:center}.zone-stacked.zone-text{font-size:18px;line-height:1.4;padding:8px 0}.zone-stacked.zone-heading{line-height:1.25;padding:8px 0}.zone-heading[data-heading-level=H1]{font-size:2rem}.zone-heading[data-heading-level=H2]{font-size:1.75rem}.zone-heading[data-heading-level=H3]{font-size:1.5rem}.zone-heading[data-heading-level=H4]{font-size:1.25rem}.zone-heading[data-heading-level=H5]{font-size:1.125rem}.zone-heading[data-heading-level=H6]{font-size:1rem}.zone-text-empty:empty:before{content:attr(data-placeholder);color:#999}.zone-stacked.zone-cta{padding:12px 0}.template-setup-panel{display:flex;flex-direction:column;gap:16px}.figma-import-panel{margin-bottom:16px;padding:14px 16px;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa}.figma-import-panel h4{margin:0 0 8px;font-size:14px;font-weight:600}.figma-import-hint{margin:0 0 12px;font-size:12px;color:#57606a;line-height:1.45}.figma-import-hint code{font-size:11px}.figma-import-panel label{display:flex;flex-direction:column;gap:4px;margin-bottom:10px;font-size:12px;font-weight:500}.figma-import-panel input[type=text],.figma-import-panel input:not([type]){padding:6px 8px;border:1px solid #d0d7de;border-radius:4px;font-size:13px}.figma-import-button{margin-right:8px;margin-bottom:8px;padding:6px 12px;border:1px solid #d0d7de;border-radius:4px;background:#fff;font-size:13px;cursor:pointer}.figma-import-button:disabled{opacity:.55;cursor:not-allowed}.figma-import-button-primary{background:#1565c0;border-color:#1565c0;color:#fff}.figma-import-preview{margin-top:10px;padding-top:10px;border-top:1px solid #d8dee4}.figma-import-preview-meta{margin:0 0 8px;font-size:12px}.figma-import-zone-list{margin:0 0 10px;padding-left:18px;font-size:12px;line-height:1.5}.figma-import-warning{margin:0 0 8px;font-size:12px;color:#9a3412}.figma-import-checkbox{flex-direction:row!important;align-items:center;gap:8px!important;font-weight:400!important}.figma-import-checkbox input{margin:0}.figma-import-message{margin:8px 0 0;font-size:12px;color:#1a7f37}.figma-import-error{margin-top:8px}.figma-import-saving{margin:8px 0}.template-duplicate-panel{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-duplicate-panel h4{margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-duplicate-hint{margin:0 0 12px;font-size:12px;color:#666;line-height:1.45}.template-duplicate-panel label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-duplicate-panel input,.template-duplicate-panel select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-duplicate-button{margin-top:4px;background:var(--mb-primary, #00755f);color:#fff;border:none;padding:8px 14px;border-radius:4px;cursor:pointer;font-size:13px}.template-duplicate-button:disabled{opacity:.6;cursor:not-allowed}.template-duplicate-message{margin:10px 0 0;font-size:12px;color:#2e7d32;line-height:1.4}.template-duplicate-error{margin:8px 0 0;font-size:12px}.template-selector{margin-bottom:16px;padding:12px;border:1px solid #e8e8e8;border-radius:6px;background:#fcfcfc}.template-selector-label{display:block;margin:0;font-size:12px;color:#555}.template-selector-label select{display:block;width:100%;margin-top:6px;padding:8px 10px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px;background:#fff}.template-selector-hint,.template-selector-status{margin:8px 0 0;font-size:12px;color:#666;line-height:1.4}.template-selector-error{margin:8px 0 0;font-size:12px}.template-setup-banner{border:1px solid #ffb74d;background:#fff8e1;border-radius:6px;padding:16px}.template-setup-banner h3{margin:0 0 8px;font-size:16px}.template-setup-banner p{margin:0 0 8px;font-size:14px;line-height:1.5;color:#555}.template-setup-hint{font-size:13px;color:#777}.template-setup-banner-info{border-color:var(--mb-primary-border);background:var(--mb-primary-soft)}.marketing-builder-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;padding:0 4px}.marketing-builder-tab-bar{flex-wrap:wrap}.marketing-builder-tabs{display:inline-flex;border:1px solid #d0d0d0;border-radius:6px;overflow:hidden;background:#fff}.marketing-builder-tab{border:none;background:transparent;color:#555;padding:8px 16px;cursor:pointer;font-size:14px;font-weight:500}.marketing-builder-tab+.marketing-builder-tab{border-left:1px solid #d0d0d0}.marketing-builder-tab:hover{background:#f5f5f5}.marketing-builder-tab-active{background:var(--mb-primary);color:#fff}.marketing-builder-tab-active:hover{background:var(--mb-primary-active)}.template-zone-edit-toggle{background:#fff;color:var(--mb-primary);border:1px solid var(--mb-primary);padding:8px 16px;border-radius:4px;cursor:pointer;font-size:14px;font-weight:500}.template-zone-edit-toggle:hover{background:var(--mb-primary-soft)}.template-zone-edit-toggle-active{background:var(--mb-primary);color:#fff}.template-zone-edit-toggle-active:hover{background:var(--mb-primary-active)}.marketing-builder-toolbar-meta{font-size:13px;color:#666}.template-empty-message{border:1px dashed #d0d0d0;border-radius:6px;background:#fafafa;text-align:center}.template-setup-message code{font-size:12px;background:#f5f5f5;padding:2px 4px;border-radius:3px}.email-builder-error{margin-top:8px;padding:8px 12px}.email-builder-actions{display:flex;gap:12px;margin-top:8px;justify-content:flex-end;flex-wrap:wrap}.email-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.email-builder-save:disabled{opacity:.6;cursor:not-allowed}.email-builder-preview{max-width:600px;margin:24px auto 0}.email-builder-preview-label{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;margin-bottom:8px}.email-builder-preview-frame{width:100%;height:500px;border:1px solid #e0e0e0}.email-builder-preview-frame-fill{width:100%;height:100%;min-height:520px;border:1px solid #e0e0e0;background:#fff}.raw-html-editor{width:100%;min-height:400px;font-family:monospace;font-size:13px;padding:12px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.social-builder-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);margin:0 auto;overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text,.social-builder-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text{font-size:16px;line-height:1.5}.asset-zone-structure-content .zone-text,.asset-zone-structure-content .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.asset-zone-structure-content .zone-text{font-size:16px;line-height:1.5}.social-builder-canvas-fill{width:100%;max-width:100%}.social-builder-structure{display:flex;flex-direction:column;gap:12px}.social-builder-error{margin-top:8px;padding:8px 12px}.asset-structure-panel{display:flex;flex-direction:column;gap:12px}.asset-structure-panel-hint{margin:0;font-size:12px;color:#777;line-height:1.5}.asset-zone-structure-warning{margin:0;padding:8px 10px;font-size:12px;line-height:1.4;color:#9a3412;background:#fff7ed;border:1px solid #fed7aa;border-radius:4px}.asset-zone-structure-key-hint{margin:0 0 8px;font-size:12px;color:#777}.asset-zone-structure-key-hint code{font-size:11px}.asset-zone-structure-list{display:flex;flex-direction:column;gap:8px}.asset-zone-structure-row{border:1px solid #e4e4e4;border-radius:6px;overflow:hidden;background:#fff}.asset-zone-structure-header{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;border:none;background:#fafafa;cursor:pointer;text-align:left}.asset-zone-structure-header:hover{background:#f3f3f3}.asset-zone-structure-title{font-weight:600;font-size:13px;color:#333}.asset-zone-structure-type{font-size:11px;color:#888}.asset-zone-structure-chevron{margin-left:auto;color:#888;font-size:12px}.asset-zone-structure-body{padding:12px;border-top:1px solid #ececec;display:flex;flex-direction:column;gap:12px}.asset-zone-structure-content-label{margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#888}.asset-zone-structure-content .asset-zone-layout-fields{margin-top:12px;padding-top:12px;border-top:1px solid #ececec}.asset-structure-panel .asset-zone-layout-grid,.template-admin-properties .asset-zone-layout-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.asset-zone-layout-fields{padding-top:4px;border-top:1px solid #ececec}.asset-zone-layout-fields label{display:block;margin-bottom:0;font-size:11px;color:#666}.asset-zone-layout-fields input,.asset-zone-layout-fields select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:12px}.asset-zone-layout-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.asset-zone-layout-grid-position{margin-top:8px;grid-template-columns:repeat(4,minmax(0,1fr))}.asset-layout-json-preview{border:1px dashed #d0d0d0;border-radius:6px;padding:8px 12px;background:#fafafa}.asset-layout-json-preview summary{cursor:pointer;font-size:12px;color:#666}.asset-layout-json-preview pre{margin:10px 0 0;padding:10px;background:#fff;border:1px solid #ececec;border-radius:4px;font-size:11px;line-height:1.4;overflow:auto;max-height:220px}.social-builder-actions{display:flex;gap:12px;margin-top:16px;justify-content:flex-end;flex-wrap:wrap}.social-builder-actions .saving-status-message,.email-builder-actions .saving-status-message{flex-basis:100%;text-align:right;margin-top:0}.social-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.social-builder-save:disabled{opacity:.6;cursor:not-allowed}.override-banner{background:#fff4e5;border:1px solid #ffb74d;color:#7a4a00;padding:8px 12px;border-radius:4px;font-size:13px;margin-bottom:12px}.template-admin-zone-list,.template-admin-properties{border:1px solid #e0e0e0;border-radius:6px;padding:12px}.template-admin-zone-list h4,.template-admin-properties h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.zone-list-hint,.zone-sort-hint{margin:-4px 0 10px;font-size:11px;color:#888}.zone-layout-fields{margin:12px 0 0;padding-top:12px;border-top:1px solid #ececec}.zone-layout-fields h5{display:none}.zone-layout-center .zone-image-preview,.zone-layout-center .zone-logo-image{display:block;margin-left:auto;margin-right:auto}.zone-layout-right .zone-image-preview,.zone-layout-right .zone-logo-image{display:block;margin-left:auto;margin-right:0}.zone-layout-center .zone-cta-button,.zone-layout-right .zone-cta-button{display:inline-block}.zone-cta-button{cursor:text}.zone-image-collection-hint{margin:-4px 0 10px;font-size:11px;color:#888;line-height:1.4}.zone-list-item{display:flex;align-items:flex-start;gap:8px;width:100%;text-align:left;background:none;border:1px solid transparent;border-radius:4px;padding:8px;margin-bottom:4px;cursor:pointer;-webkit-user-select:none;user-select:none}.zone-list-delete{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin-top:1px;padding:0;border:none;border-radius:4px;background:transparent;color:#999;cursor:pointer}.zone-list-delete:hover{background:#ffebee;color:#d32f2f}.zone-list-delete:focus-visible{outline:2px solid var(--mb-primary);outline-offset:1px}.zone-list-item:active{cursor:grabbing}.zone-list-item-content{display:flex;flex-direction:column;align-items:flex-start;min-width:0;flex:1}.zone-list-drag-handle{color:#aaa;font-size:12px;line-height:1;padding-top:2px;cursor:grab}.zone-list-item-dragging{opacity:.45}.zone-list-item-drag-over{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item:hover{background:#f5f5f5}.zone-list-item-active{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item-type{font-size:11px;color:#888}.zone-list-item-lock{font-size:10px;color:#d32f2f;text-transform:uppercase}.zone-list-add{width:100%;border:1px dashed #b0b0b0;background:none;padding:8px;border-radius:4px;cursor:pointer;color:#555;margin-bottom:4px}.zone-list-starter{border-color:var(--mb-primary);color:var(--mb-primary)}.template-admin-properties label{display:block;margin-bottom:10px;font-size:12px;color:#555}.zone-image-selected{display:flex;flex-direction:column;gap:8px;width:100%}.zone-image-preview{width:100%;max-height:280px;object-fit:cover;border-radius:4px;border:1px solid #e0e0e0}.social-builder-canvas .zone-image-preview{width:100%;height:100%;max-height:none;object-fit:contain;border-radius:0;border:0}.zone-image-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.zone-image-clear{border:1px solid #d32f2f;background:#fff;color:#d32f2f;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker{position:relative}.asset-picker-compact .asset-picker-trigger{padding:6px 10px;font-size:12px}.asset-picker-mode-tabs{display:flex;gap:4px;margin-bottom:10px}.asset-picker-mode-tab{flex:1;border:1px solid #d0d0d0;background:#fafafa;color:#555;padding:6px 8px;border-radius:4px;cursor:pointer;font-size:12px}.asset-picker-mode-tab-active{border-color:var(--mb-primary);background:var(--mb-primary-soft);color:var(--mb-primary-active)}.asset-picker-url-form label{display:block;margin-bottom:8px;font-size:12px;color:#555}.asset-picker-url-apply{width:100%;border:none;background:var(--mb-primary);color:#fff;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker-url-apply:disabled{opacity:.6;cursor:not-allowed}.asset-picker-loading,.asset-picker-error{font-size:12px;margin-bottom:8px}.asset-picker-error{color:#b71c1c}.template-admin-properties input,.template-admin-properties select,.template-admin-properties textarea{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.checkbox-label{display:flex!important;align-items:center;gap:6px}.checkbox-label input{width:auto!important;margin:0!important}.position-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.zone-remove{background:none;border:1px solid #d32f2f;color:#d32f2f;padding:6px 12px;border-radius:4px;cursor:pointer;margin-top:8px}.no-zone-selected{color:#888;font-size:13px}.template-admin-preview-canvas{border:1px solid #eee;background:#fafafa;margin-bottom:12px;overflow:hidden}.template-admin-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;width:100%;max-width:280px}.template-admin-save:disabled{opacity:.6;cursor:not-allowed}.template-admin-save-error{margin:8px 0 0;font-size:13px}.zone{box-sizing:border-box}.zone-locked{outline:1px dashed transparent}.zone-text{outline:1px dashed transparent;cursor:text}.zone-text:hover{outline-color:#c9c9c9}.zone-text:focus{outline:1px solid var(--mb-primary);outline-offset:2px}.zone-image{background-color:#f5f5f5;display:flex;align-items:center;justify-content:center;overflow:hidden}.zone-cta button{cursor:pointer;font-size:14px}.zone-html-editor{width:100%;min-height:80px;font-family:monospace;font-size:12px;padding:8px;border:1px solid #d0d0d0;border-radius:4px}.zone-html-preview{margin-top:8px;border:1px dashed #d0d0d0;padding:8px}.zone-html-locked{pointer-events:none}.asset-picker-trigger{border:1px dashed #b0b0b0;background:transparent;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px;color:#555}.asset-picker-panel{position:absolute;z-index:10;background:#fff;border:1px solid #d0d0d0;border-radius:6px;box-shadow:0 4px 16px #0000001f;padding:12px;width:320px}.asset-picker-search{width:100%;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;margin-bottom:8px}.asset-picker-hint{font-size:12px;color:#888;margin-bottom:8px}.asset-picker-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-height:240px;overflow-y:auto}.asset-picker-thumb{border:none;background:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;font-size:11px}.asset-picker-thumb img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px}.asset-picker-empty{font-size:12px;color:#888;padding:8px}.eject-button{background:transparent;border:1px solid #d32f2f;color:#d32f2f;padding:10px 16px;border-radius:4px;cursor:pointer;font-size:13px}.eject-modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;z-index:100}.eject-modal{background:#fff;border-radius:8px;padding:24px;width:420px;max-width:90vw}.eject-modal h3{margin:0 0 8px;font-size:16px;color:#b71c1c}.eject-modal p{font-size:13px;color:#555;line-height:1.5}.eject-modal textarea{width:100%;min-height:70px;margin:12px 0;padding:8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.eject-modal-actions{display:flex;justify-content:flex-end;gap:8px}.eject-confirm{background:#d32f2f;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer}.eject-confirm:disabled{opacity:.5;cursor:not-allowed}.designer-create-banner{margin:12px 0 16px;padding:12px 14px;border:.5px solid #d3d1c7;border-radius:8px;background:#f8f7f4;display:flex;flex-direction:column;gap:10px;align-items:flex-start}.designer-create-banner p{margin:0;font-size:13px;color:#2c2c2a}.designer-asset-builder{display:flex;flex-direction:column;gap:8px}.designer-asset-builder-actions{display:flex;align-items:center;gap:10px}.chd-root{--chd-bg: #f8f7f4;--chd-panel: #ffffff;--chd-border: #d3d1c7;--chd-text: #2c2c2a;--chd-muted: #888780;--chd-accent: #1d4e89;--chd-selected: #3b82f6;display:flex;flex-direction:column;width:100%;height:min(80vh,720px);min-height:520px;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:10px;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-file-input{display:none}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr auto auto auto;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{flex-direction:row;align-items:center;gap:8px;color:var(--chd-text)}.chd-field-checkbox input{width:auto}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:linear-gradient(45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,linear-gradient(-45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,#f0eee8;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:hidden}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function M0(e, t) {
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
function C0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rh = { exports: {} }, za = {}, oh = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ui = Symbol.for("react.element"), z0 = Symbol.for("react.portal"), L0 = Symbol.for("react.fragment"), x0 = Symbol.for("react.strict_mode"), D0 = Symbol.for("react.profiler"), b0 = Symbol.for("react.provider"), I0 = Symbol.for("react.context"), O0 = Symbol.for("react.forward_ref"), P0 = Symbol.for("react.suspense"), _0 = Symbol.for("react.memo"), R0 = Symbol.for("react.lazy"), Ff = Symbol.iterator;
function $0(e) {
  return e === null || typeof e != "object" ? null : (e = Ff && e[Ff] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ih = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, sh = Object.assign, ah = {};
function So(e, t, n) {
  this.props = e, this.context = t, this.refs = ah, this.updater = n || ih;
}
So.prototype.isReactComponent = {};
So.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
So.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lh() {
}
lh.prototype = So.prototype;
function _c(e, t, n) {
  this.props = e, this.context = t, this.refs = ah, this.updater = n || ih;
}
var Rc = _c.prototype = new lh();
Rc.constructor = _c;
sh(Rc, So.prototype);
Rc.isPureReactComponent = !0;
var Bf = Array.isArray, uh = Object.prototype.hasOwnProperty, $c = { current: null }, ch = { key: !0, ref: !0, __self: !0, __source: !0 };
function dh(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      uh.call(t, r) && !ch.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Ui, type: e, key: i, ref: s, props: o, _owner: $c.current };
}
function j0(e, t) {
  return { $$typeof: Ui, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function jc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ui;
}
function U0(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Kf = /\/+/g;
function Fl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? U0("" + e.key) : t.toString(36);
}
function xs(e, t, n, r, o) {
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
          case Ui:
          case z0:
            s = !0;
        }
    }
  if (s)
    return s = e, o = o(s), e = r === "" ? "." + Fl(s, 0) : r, Bf(o) ? (n = "", e != null && (n = e.replace(Kf, "$&/") + "/"), xs(o, t, n, "", function(u) {
      return u;
    })) : o != null && (jc(o) && (o = j0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Kf, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Bf(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Fl(i, a);
      s += xs(i, t, n, l, o);
    }
  else if (l = $0(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, l = r + Fl(i, a++), s += xs(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function as(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return xs(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function H0(e) {
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
var ut = { current: null }, Ds = { transition: null }, F0 = { ReactCurrentDispatcher: ut, ReactCurrentBatchConfig: Ds, ReactCurrentOwner: $c };
function fh() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: as, forEach: function(e, t, n) {
  as(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return as(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return as(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!jc(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = So;
G.Fragment = L0;
G.Profiler = D0;
G.PureComponent = _c;
G.StrictMode = x0;
G.Suspense = P0;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F0;
G.act = fh;
G.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = sh({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = $c.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (l in t)
      uh.call(t, l) && !ch.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
  return { $$typeof: Ui, type: e.type, key: o, ref: i, props: r, _owner: s };
};
G.createContext = function(e) {
  return e = { $$typeof: I0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: b0, _context: e }, e.Consumer = e;
};
G.createElement = dh;
G.createFactory = function(e) {
  var t = dh.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: O0, render: e };
};
G.isValidElement = jc;
G.lazy = function(e) {
  return { $$typeof: R0, _payload: { _status: -1, _result: e }, _init: H0 };
};
G.memo = function(e, t) {
  return { $$typeof: _0, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = Ds.transition;
  Ds.transition = {};
  try {
    e();
  } finally {
    Ds.transition = t;
  }
};
G.unstable_act = fh;
G.useCallback = function(e, t) {
  return ut.current.useCallback(e, t);
};
G.useContext = function(e) {
  return ut.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return ut.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return ut.current.useEffect(e, t);
};
G.useId = function() {
  return ut.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return ut.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return ut.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return ut.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return ut.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return ut.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return ut.current.useRef(e);
};
G.useState = function(e) {
  return ut.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return ut.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return ut.current.useTransition();
};
G.version = "18.3.1";
oh.exports = G;
var k = oh.exports;
const B0 = /* @__PURE__ */ C0(k), Lu = /* @__PURE__ */ M0({
  __proto__: null,
  default: B0
}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K0 = k, Z0 = Symbol.for("react.element"), V0 = Symbol.for("react.fragment"), W0 = Object.prototype.hasOwnProperty, Y0 = K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Q0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ph(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    W0.call(t, r) && !Q0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Z0, type: e, key: i, ref: s, props: o, _owner: Y0.current };
}
za.Fragment = V0;
za.jsx = ph;
za.jsxs = ph;
rh.exports = za;
var Uc = rh.exports;
const at = Uc.Fragment, d = Uc.jsx, N = Uc.jsxs;
var mh = { exports: {} }, Ct = {}, hh = { exports: {} }, gh = {};
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
  function t(O, R) {
    var w = O.length;
    O.push(R);
    e:
      for (; 0 < w; ) {
        var L = w - 1 >>> 1, _ = O[L];
        if (0 < o(_, R))
          O[L] = R, O[w] = _, w = L;
        else
          break e;
      }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0)
      return null;
    var R = O[0], w = O.pop();
    if (w !== R) {
      O[0] = w;
      e:
        for (var L = 0, _ = O.length, J = _ >>> 1; L < J; ) {
          var X = 2 * (L + 1) - 1, Ge = O[X], Xe = X + 1, Oe = O[Xe];
          if (0 > o(Ge, w))
            Xe < _ && 0 > o(Oe, Ge) ? (O[L] = Oe, O[Xe] = w, L = Xe) : (O[L] = Ge, O[X] = w, L = X);
          else if (Xe < _ && 0 > o(Oe, w))
            O[L] = Oe, O[Xe] = w, L = Xe;
          else
            break e;
        }
    }
    return R;
  }
  function o(O, R) {
    var w = O.sortIndex - R.sortIndex;
    return w !== 0 ? w : O.id - R.id;
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
  var l = [], u = [], c = 1, f = null, p = 3, v = !1, S = !1, T = !1, D = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null)
        r(u);
      else if (R.startTime <= O)
        r(u), R.sortIndex = R.expirationTime, t(l, R);
      else
        break;
      R = n(u);
    }
  }
  function C(O) {
    if (T = !1, h(O), !S)
      if (n(l) !== null)
        S = !0, ke(E);
      else {
        var R = n(u);
        R !== null && V(C, R.startTime - O);
      }
  }
  function E(O, R) {
    S = !1, T && (T = !1, y(x), x = -1), v = !0;
    var w = p;
    try {
      for (h(R), f = n(l); f !== null && (!(f.expirationTime > R) || O && !j()); ) {
        var L = f.callback;
        if (typeof L == "function") {
          f.callback = null, p = f.priorityLevel;
          var _ = L(f.expirationTime <= R);
          R = e.unstable_now(), typeof _ == "function" ? f.callback = _ : f === n(l) && r(l), h(R);
        } else
          r(l);
        f = n(l);
      }
      if (f !== null)
        var J = !0;
      else {
        var X = n(u);
        X !== null && V(C, X.startTime - R), J = !1;
      }
      return J;
    } finally {
      f = null, p = w, v = !1;
    }
  }
  var M = !1, A = null, x = -1, F = 5, b = -1;
  function j() {
    return !(e.unstable_now() - b < F);
  }
  function U() {
    if (A !== null) {
      var O = e.unstable_now();
      b = O;
      var R = !0;
      try {
        R = A(!0, O);
      } finally {
        R ? Y() : (M = !1, A = null);
      }
    } else
      M = !1;
  }
  var Y;
  if (typeof m == "function")
    Y = function() {
      m(U);
    };
  else if (typeof MessageChannel < "u") {
    var xe = new MessageChannel(), Qe = xe.port2;
    xe.port1.onmessage = U, Y = function() {
      Qe.postMessage(null);
    };
  } else
    Y = function() {
      D(U, 0);
    };
  function ke(O) {
    A = O, M || (M = !0, Y());
  }
  function V(O, R) {
    x = D(function() {
      O(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e.unstable_continueExecution = function() {
    S || v || (S = !0, ke(E));
  }, e.unstable_forceFrameRate = function(O) {
    0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < O ? Math.floor(1e3 / O) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(O) {
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
      return O();
    } finally {
      p = w;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(O, R) {
    switch (O) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        O = 3;
    }
    var w = p;
    p = O;
    try {
      return R();
    } finally {
      p = w;
    }
  }, e.unstable_scheduleCallback = function(O, R, w) {
    var L = e.unstable_now();
    switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? L + w : L) : w = L, O) {
      case 1:
        var _ = -1;
        break;
      case 2:
        _ = 250;
        break;
      case 5:
        _ = 1073741823;
        break;
      case 4:
        _ = 1e4;
        break;
      default:
        _ = 5e3;
    }
    return _ = w + _, O = { id: c++, callback: R, priorityLevel: O, startTime: w, expirationTime: _, sortIndex: -1 }, w > L ? (O.sortIndex = w, t(u, O), n(l) === null && O === n(u) && (T ? (y(x), x = -1) : T = !0, V(C, w - L))) : (O.sortIndex = _, t(l, O), S || v || (S = !0, ke(E))), O;
  }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function(O) {
    var R = p;
    return function() {
      var w = p;
      p = R;
      try {
        return O.apply(this, arguments);
      } finally {
        p = w;
      }
    };
  };
})(gh);
hh.exports = gh;
var G0 = hh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X0 = k, Mt = G0;
function P(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yh = /* @__PURE__ */ new Set(), fi = {};
function Nr(e, t) {
  uo(e, t), uo(e + "Capture", t);
}
function uo(e, t) {
  for (fi[e] = t, e = 0; e < t.length; e++)
    yh.add(t[e]);
}
var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xu = Object.prototype.hasOwnProperty, J0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zf = {}, Vf = {};
function q0(e) {
  return xu.call(Vf, e) ? !0 : xu.call(Zf, e) ? !1 : J0.test(e) ? Vf[e] = !0 : (Zf[e] = !0, !1);
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
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  We[e] = new ct(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  We[t] = new ct(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  We[e] = new ct(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  We[e] = new ct(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  We[e] = new ct(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  We[e] = new ct(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  We[e] = new ct(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  We[e] = new ct(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  We[e] = new ct(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hc = /[\-:]([a-z])/g;
function Fc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Hc,
    Fc
  );
  We[t] = new ct(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Hc, Fc);
  We[t] = new ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Hc, Fc);
  We[t] = new ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  We[e] = new ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
We.xlinkHref = new ct("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  We[e] = new ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bc(e, t, n, r) {
  var o = We.hasOwnProperty(t) ? We[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tw(t, n, o, r) && (n = null), r || o === null ? q0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Cn = X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ls = Symbol.for("react.element"), Ur = Symbol.for("react.portal"), Hr = Symbol.for("react.fragment"), Kc = Symbol.for("react.strict_mode"), Du = Symbol.for("react.profiler"), vh = Symbol.for("react.provider"), wh = Symbol.for("react.context"), Zc = Symbol.for("react.forward_ref"), bu = Symbol.for("react.suspense"), Iu = Symbol.for("react.suspense_list"), Vc = Symbol.for("react.memo"), In = Symbol.for("react.lazy"), Th = Symbol.for("react.offscreen"), Wf = Symbol.iterator;
function Po(e) {
  return e === null || typeof e != "object" ? null : (e = Wf && e[Wf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, Bl;
function Yo(e) {
  if (Bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bl = t && t[1] || "";
    }
  return `
` + Bl + e;
}
var Kl = !1;
function Zl(e, t) {
  if (!e || Kl)
    return "";
  Kl = !0;
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
    Kl = !1, Error.prepareStackTrace = n;
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
      return e = Zl(e.type, !1), e;
    case 11:
      return e = Zl(e.type.render, !1), e;
    case 1:
      return e = Zl(e.type, !0), e;
    default:
      return "";
  }
}
function Ou(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Hr:
      return "Fragment";
    case Ur:
      return "Portal";
    case Du:
      return "Profiler";
    case Kc:
      return "StrictMode";
    case bu:
      return "Suspense";
    case Iu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case wh:
        return (e.displayName || "Context") + ".Consumer";
      case vh:
        return (e._context.displayName || "Context") + ".Provider";
      case Zc:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Vc:
        return t = e.displayName || null, t !== null ? t : Ou(e.type) || "Memo";
      case In:
        t = e._payload, e = e._init;
        try {
          return Ou(e(t));
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
      return Ou(t);
    case 8:
      return t === Kc ? "StrictMode" : "Mode";
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
function Jn(e) {
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
function Ah(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ow(e) {
  var t = Ah(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function us(e) {
  e._valueTracker || (e._valueTracker = ow(e));
}
function Sh(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ah(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ws(e) {
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
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Yf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Jn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function kh(e, t) {
  t = t.checked, t != null && Bc(e, "checked", t, !1);
}
function _u(e, t) {
  kh(e, t);
  var n = Jn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ru(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ru(e, t.type, Jn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Qf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ru(e, t, n) {
  (t !== "number" || Ws(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qo = Array.isArray;
function eo(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function $u(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(P(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Gf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(P(92));
      if (Qo(n)) {
        if (1 < n.length)
          throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Jn(n) };
}
function Eh(e, t) {
  var n = Jn(t.value), r = Jn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Xf(e) {
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
function ju(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Nh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var cs, Mh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (cs = cs || document.createElement("div"), cs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = cs.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function pi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ei = {
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
Object.keys(ei).forEach(function(e) {
  iw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ei[t] = ei[e];
  });
});
function Ch(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ei.hasOwnProperty(e) && ei[e] ? ("" + t).trim() : t + "px";
}
function zh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Ch(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var sw = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Uu(e, t) {
  if (t) {
    if (sw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(P(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(P(62));
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
function Wc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Bu = null, to = null, no = null;
function Jf(e) {
  if (e = Bi(e)) {
    if (typeof Bu != "function")
      throw Error(P(280));
    var t = e.stateNode;
    t && (t = Ia(t), Bu(e.stateNode, e.type, t));
  }
}
function Lh(e) {
  to ? no ? no.push(e) : no = [e] : to = e;
}
function xh() {
  if (to) {
    var e = to, t = no;
    if (no = to = null, Jf(e), t)
      for (e = 0; e < t.length; e++)
        Jf(t[e]);
  }
}
function Dh(e, t) {
  return e(t);
}
function bh() {
}
var Vl = !1;
function Ih(e, t, n) {
  if (Vl)
    return e(t, n);
  Vl = !0;
  try {
    return Dh(e, t, n);
  } finally {
    Vl = !1, (to !== null || no !== null) && (bh(), xh());
  }
}
function mi(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Ia(n);
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
    throw Error(P(231, t, typeof n));
  return n;
}
var Ku = !1;
if (An)
  try {
    var _o = {};
    Object.defineProperty(_o, "passive", { get: function() {
      Ku = !0;
    } }), window.addEventListener("test", _o, _o), window.removeEventListener("test", _o, _o);
  } catch {
    Ku = !1;
  }
function aw(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ti = !1, Ys = null, Qs = !1, Zu = null, lw = { onError: function(e) {
  ti = !0, Ys = e;
} };
function uw(e, t, n, r, o, i, s, a, l) {
  ti = !1, Ys = null, aw.apply(lw, arguments);
}
function cw(e, t, n, r, o, i, s, a, l) {
  if (uw.apply(this, arguments), ti) {
    if (ti) {
      var u = Ys;
      ti = !1, Ys = null;
    } else
      throw Error(P(198));
    Qs || (Qs = !0, Zu = u);
  }
}
function Mr(e) {
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
function Oh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function qf(e) {
  if (Mr(e) !== e)
    throw Error(P(188));
}
function dw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mr(e), t === null)
      throw Error(P(188));
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
          return qf(o), e;
        if (i === r)
          return qf(o), t;
        i = i.sibling;
      }
      throw Error(P(188));
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
          throw Error(P(189));
      }
    }
    if (n.alternate !== r)
      throw Error(P(190));
  }
  if (n.tag !== 3)
    throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Ph(e) {
  return e = dw(e), e !== null ? _h(e) : null;
}
function _h(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = _h(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Rh = Mt.unstable_scheduleCallback, ep = Mt.unstable_cancelCallback, fw = Mt.unstable_shouldYield, pw = Mt.unstable_requestPaint, Ee = Mt.unstable_now, mw = Mt.unstable_getCurrentPriorityLevel, Yc = Mt.unstable_ImmediatePriority, $h = Mt.unstable_UserBlockingPriority, Gs = Mt.unstable_NormalPriority, hw = Mt.unstable_LowPriority, jh = Mt.unstable_IdlePriority, La = null, un = null;
function gw(e) {
  if (un && typeof un.onCommitFiberRoot == "function")
    try {
      un.onCommitFiberRoot(La, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Vt = Math.clz32 ? Math.clz32 : ww, yw = Math.log, vw = Math.LN2;
function ww(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (yw(e) / vw | 0) | 0;
}
var ds = 64, fs = 4194304;
function Go(e) {
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
function Xs(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = Go(a) : (i &= s, i !== 0 && (r = Go(i)));
  } else
    s = n & ~o, s !== 0 ? r = Go(s) : i !== 0 && (r = Go(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Vt(t), o = 1 << n, r |= e[n], t &= ~o;
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
function Aw(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Vt(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = Tw(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function Vu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Uh() {
  var e = ds;
  return ds <<= 1, !(ds & 4194240) && (ds = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Hi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Vt(t), e[t] = n;
}
function Sw(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Vt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Qc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Vt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var se = 0;
function Hh(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fh, Gc, Bh, Kh, Zh, Wu = !1, ps = [], Bn = null, Kn = null, Zn = null, hi = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map(), Pn = [], kw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function tp(e, t) {
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
      hi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gi.delete(t.pointerId);
  }
}
function Ro(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Bi(t), t !== null && Gc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Ew(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Bn = Ro(Bn, e, t, n, r, o), !0;
    case "dragenter":
      return Kn = Ro(Kn, e, t, n, r, o), !0;
    case "mouseover":
      return Zn = Ro(Zn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return hi.set(i, Ro(hi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, gi.set(i, Ro(gi.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Vh(e) {
  var t = pr(e.target);
  if (t !== null) {
    var n = Mr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Oh(n), t !== null) {
          e.blockedOn = t, Zh(e.priority, function() {
            Bh(n);
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
function bs(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Yu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Fu = r, n.target.dispatchEvent(r), Fu = null;
    } else
      return t = Bi(n), t !== null && Gc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function np(e, t, n) {
  bs(e) && n.delete(t);
}
function Nw() {
  Wu = !1, Bn !== null && bs(Bn) && (Bn = null), Kn !== null && bs(Kn) && (Kn = null), Zn !== null && bs(Zn) && (Zn = null), hi.forEach(np), gi.forEach(np);
}
function $o(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Wu || (Wu = !0, Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority, Nw)));
}
function yi(e) {
  function t(o) {
    return $o(o, e);
  }
  if (0 < ps.length) {
    $o(ps[0], e);
    for (var n = 1; n < ps.length; n++) {
      var r = ps[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Bn !== null && $o(Bn, e), Kn !== null && $o(Kn, e), Zn !== null && $o(Zn, e), hi.forEach(t), gi.forEach(t), n = 0; n < Pn.length; n++)
    r = Pn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pn.length && (n = Pn[0], n.blockedOn === null); )
    Vh(n), n.blockedOn === null && Pn.shift();
}
var ro = Cn.ReactCurrentBatchConfig, Js = !0;
function Mw(e, t, n, r) {
  var o = se, i = ro.transition;
  ro.transition = null;
  try {
    se = 1, Xc(e, t, n, r);
  } finally {
    se = o, ro.transition = i;
  }
}
function Cw(e, t, n, r) {
  var o = se, i = ro.transition;
  ro.transition = null;
  try {
    se = 4, Xc(e, t, n, r);
  } finally {
    se = o, ro.transition = i;
  }
}
function Xc(e, t, n, r) {
  if (Js) {
    var o = Yu(e, t, n, r);
    if (o === null)
      ru(e, t, r, qs, n), tp(e, r);
    else if (Ew(o, e, t, n, r))
      r.stopPropagation();
    else if (tp(e, r), t & 4 && -1 < kw.indexOf(e)) {
      for (; o !== null; ) {
        var i = Bi(o);
        if (i !== null && Fh(i), i = Yu(e, t, n, r), i === null && ru(e, t, r, qs, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      ru(e, t, r, null, n);
  }
}
var qs = null;
function Yu(e, t, n, r) {
  if (qs = null, e = Wc(r), e = pr(e), e !== null)
    if (t = Mr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Oh(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return qs = e, null;
}
function Wh(e) {
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
        case Yc:
          return 1;
        case $h:
          return 4;
        case Gs:
        case hw:
          return 16;
        case jh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $n = null, Jc = null, Is = null;
function Yh() {
  if (Is)
    return Is;
  var e, t = Jc, n = t.length, r, o = "value" in $n ? $n.value : $n.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ;
  return Is = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Os(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ms() {
  return !0;
}
function rp() {
  return !1;
}
function zt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ms : rp, this.isPropagationStopped = rp, this;
  }
  return he(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ms);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ms);
  }, persist: function() {
  }, isPersistent: ms }), t;
}
var ko = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, qc = zt(ko), Fi = he({}, ko, { view: 0, detail: 0 }), zw = zt(Fi), Yl, Ql, jo, xa = he({}, Fi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ed, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== jo && (jo && e.type === "mousemove" ? (Yl = e.screenX - jo.screenX, Ql = e.screenY - jo.screenY) : Ql = Yl = 0, jo = e), Yl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ql;
} }), op = zt(xa), Lw = he({}, xa, { dataTransfer: 0 }), xw = zt(Lw), Dw = he({}, Fi, { relatedTarget: 0 }), Gl = zt(Dw), bw = he({}, ko, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Iw = zt(bw), Ow = he({}, ko, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Pw = zt(Ow), _w = he({}, ko, { data: 0 }), ip = zt(_w), Rw = {
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
}, $w = {
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
}, jw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Uw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jw[e]) ? !!t[e] : !1;
}
function ed() {
  return Uw;
}
var Hw = he({}, Fi, { key: function(e) {
  if (e.key) {
    var t = Rw[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Os(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $w[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ed, charCode: function(e) {
  return e.type === "keypress" ? Os(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Os(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Fw = zt(Hw), Bw = he({}, xa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sp = zt(Bw), Kw = he({}, Fi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ed }), Zw = zt(Kw), Vw = he({}, ko, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ww = zt(Vw), Yw = he({}, xa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Qw = zt(Yw), Gw = [9, 13, 27, 32], td = An && "CompositionEvent" in window, ni = null;
An && "documentMode" in document && (ni = document.documentMode);
var Xw = An && "TextEvent" in window && !ni, Qh = An && (!td || ni && 8 < ni && 11 >= ni), ap = String.fromCharCode(32), lp = !1;
function Gh(e, t) {
  switch (e) {
    case "keyup":
      return Gw.indexOf(t.keyCode) !== -1;
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
function Xh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Fr = !1;
function Jw(e, t) {
  switch (e) {
    case "compositionend":
      return Xh(t);
    case "keypress":
      return t.which !== 32 ? null : (lp = !0, ap);
    case "textInput":
      return e = t.data, e === ap && lp ? null : e;
    default:
      return null;
  }
}
function qw(e, t) {
  if (Fr)
    return e === "compositionend" || !td && Gh(e, t) ? (e = Yh(), Is = Jc = $n = null, Fr = !1, e) : null;
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
      return Qh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var eT = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function up(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!eT[e.type] : t === "textarea";
}
function Jh(e, t, n, r) {
  Lh(r), t = ea(t, "onChange"), 0 < t.length && (n = new qc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ri = null, vi = null;
function tT(e) {
  ug(e, 0);
}
function Da(e) {
  var t = Zr(e);
  if (Sh(t))
    return e;
}
function nT(e, t) {
  if (e === "change")
    return t;
}
var qh = !1;
if (An) {
  var Xl;
  if (An) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var cp = document.createElement("div");
      cp.setAttribute("oninput", "return;"), Jl = typeof cp.oninput == "function";
    }
    Xl = Jl;
  } else
    Xl = !1;
  qh = Xl && (!document.documentMode || 9 < document.documentMode);
}
function dp() {
  ri && (ri.detachEvent("onpropertychange", eg), vi = ri = null);
}
function eg(e) {
  if (e.propertyName === "value" && Da(vi)) {
    var t = [];
    Jh(t, vi, e, Wc(e)), Ih(tT, t);
  }
}
function rT(e, t, n) {
  e === "focusin" ? (dp(), ri = t, vi = n, ri.attachEvent("onpropertychange", eg)) : e === "focusout" && dp();
}
function oT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Da(vi);
}
function iT(e, t) {
  if (e === "click")
    return Da(t);
}
function sT(e, t) {
  if (e === "input" || e === "change")
    return Da(t);
}
function aT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Yt = typeof Object.is == "function" ? Object.is : aT;
function wi(e, t) {
  if (Yt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!xu.call(t, o) || !Yt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function fp(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function pp(e, t) {
  var n = fp(e);
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
    n = fp(n);
  }
}
function tg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? tg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ng() {
  for (var e = window, t = Ws(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Ws(e.document);
  }
  return t;
}
function nd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function lT(e) {
  var t = ng(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && tg(n.ownerDocument.documentElement, n)) {
    if (r !== null && nd(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = pp(n, i);
        var s = pp(
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
var uT = An && "documentMode" in document && 11 >= document.documentMode, Br = null, Qu = null, oi = null, Gu = !1;
function mp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gu || Br == null || Br !== Ws(r) || (r = Br, "selectionStart" in r && nd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), oi && wi(oi, r) || (oi = r, r = ea(Qu, "onSelect"), 0 < r.length && (t = new qc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Br)));
}
function hs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Kr = { animationend: hs("Animation", "AnimationEnd"), animationiteration: hs("Animation", "AnimationIteration"), animationstart: hs("Animation", "AnimationStart"), transitionend: hs("Transition", "TransitionEnd") }, ql = {}, rg = {};
An && (rg = document.createElement("div").style, "AnimationEvent" in window || (delete Kr.animationend.animation, delete Kr.animationiteration.animation, delete Kr.animationstart.animation), "TransitionEvent" in window || delete Kr.transitionend.transition);
function ba(e) {
  if (ql[e])
    return ql[e];
  if (!Kr[e])
    return e;
  var t = Kr[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in rg)
      return ql[e] = t[n];
  return e;
}
var og = ba("animationend"), ig = ba("animationiteration"), sg = ba("animationstart"), ag = ba("transitionend"), lg = /* @__PURE__ */ new Map(), hp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function nr(e, t) {
  lg.set(e, t), Nr(t, [e]);
}
for (var eu = 0; eu < hp.length; eu++) {
  var tu = hp[eu], cT = tu.toLowerCase(), dT = tu[0].toUpperCase() + tu.slice(1);
  nr(cT, "on" + dT);
}
nr(og, "onAnimationEnd");
nr(ig, "onAnimationIteration");
nr(sg, "onAnimationStart");
nr("dblclick", "onDoubleClick");
nr("focusin", "onFocus");
nr("focusout", "onBlur");
nr(ag, "onTransitionEnd");
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
var Xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fT = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));
function gp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, cw(r, t, void 0, e), e.currentTarget = null;
}
function ug(e, t) {
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
          gp(o, a, u), i = l;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped())
            break e;
          gp(o, a, u), i = l;
        }
    }
  }
  if (Qs)
    throw e = Zu, Qs = !1, Zu = null, e;
}
function ce(e, t) {
  var n = t[tc];
  n === void 0 && (n = t[tc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (cg(t, e, 2, !1), n.add(r));
}
function nu(e, t, n) {
  var r = 0;
  t && (r |= 4), cg(n, e, r, t);
}
var gs = "_reactListening" + Math.random().toString(36).slice(2);
function Ti(e) {
  if (!e[gs]) {
    e[gs] = !0, yh.forEach(function(n) {
      n !== "selectionchange" && (fT.has(n) || nu(n, !1, e), nu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gs] || (t[gs] = !0, nu("selectionchange", !1, t));
  }
}
function cg(e, t, n, r) {
  switch (Wh(t)) {
    case 1:
      var o = Mw;
      break;
    case 4:
      o = Cw;
      break;
    default:
      o = Xc;
  }
  n = o.bind(null, t, n, e), o = void 0, !Ku || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function ru(e, t, n, r, o) {
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
  Ih(function() {
    var u = i, c = Wc(n), f = [];
    e: {
      var p = lg.get(e);
      if (p !== void 0) {
        var v = qc, S = e;
        switch (e) {
          case "keypress":
            if (Os(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = Fw;
            break;
          case "focusin":
            S = "focus", v = Gl;
            break;
          case "focusout":
            S = "blur", v = Gl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Gl;
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
            v = op;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = xw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Zw;
            break;
          case og:
          case ig:
          case sg:
            v = Iw;
            break;
          case ag:
            v = Ww;
            break;
          case "scroll":
            v = zw;
            break;
          case "wheel":
            v = Qw;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Pw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = sp;
        }
        var T = (t & 4) !== 0, D = !T && e === "scroll", y = T ? p !== null ? p + "Capture" : null : p;
        T = [];
        for (var m = u, h; m !== null; ) {
          h = m;
          var C = h.stateNode;
          if (h.tag === 5 && C !== null && (h = C, y !== null && (C = mi(m, y), C != null && T.push(Ai(m, C, h)))), D)
            break;
          m = m.return;
        }
        0 < T.length && (p = new v(p, S, null, n, c), f.push({ event: p, listeners: T }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== Fu && (S = n.relatedTarget || n.fromElement) && (pr(S) || S[Sn]))
          break e;
        if ((v || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (S = n.relatedTarget || n.toElement, v = u, S = S ? pr(S) : null, S !== null && (D = Mr(S), S !== D || S.tag !== 5 && S.tag !== 6) && (S = null)) : (v = null, S = u), v !== S)) {
          if (T = op, C = "onMouseLeave", y = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (T = sp, C = "onPointerLeave", y = "onPointerEnter", m = "pointer"), D = v == null ? p : Zr(v), h = S == null ? p : Zr(S), p = new T(C, m + "leave", v, n, c), p.target = D, p.relatedTarget = h, C = null, pr(c) === u && (T = new T(y, m + "enter", S, n, c), T.target = h, T.relatedTarget = D, C = T), D = C, v && S)
            t: {
              for (T = v, y = S, m = 0, h = T; h; h = Pr(h))
                m++;
              for (h = 0, C = y; C; C = Pr(C))
                h++;
              for (; 0 < m - h; )
                T = Pr(T), m--;
              for (; 0 < h - m; )
                y = Pr(y), h--;
              for (; m--; ) {
                if (T === y || y !== null && T === y.alternate)
                  break t;
                T = Pr(T), y = Pr(y);
              }
              T = null;
            }
          else
            T = null;
          v !== null && yp(f, p, v, T, !1), S !== null && D !== null && yp(f, D, S, T, !0);
        }
      }
      e: {
        if (p = u ? Zr(u) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var E = nT;
        else if (up(p))
          if (qh)
            E = sT;
          else {
            E = oT;
            var M = rT;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = iT);
        if (E && (E = E(e, u))) {
          Jh(f, E, n, c);
          break e;
        }
        M && M(e, p, u), e === "focusout" && (M = p._wrapperState) && M.controlled && p.type === "number" && Ru(p, "number", p.value);
      }
      switch (M = u ? Zr(u) : window, e) {
        case "focusin":
          (up(M) || M.contentEditable === "true") && (Br = M, Qu = u, oi = null);
          break;
        case "focusout":
          oi = Qu = Br = null;
          break;
        case "mousedown":
          Gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gu = !1, mp(f, n, c);
          break;
        case "selectionchange":
          if (uT)
            break;
        case "keydown":
        case "keyup":
          mp(f, n, c);
      }
      var A;
      if (td)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        Fr ? Gh(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x && (Qh && n.locale !== "ko" && (Fr || x !== "onCompositionStart" ? x === "onCompositionEnd" && Fr && (A = Yh()) : ($n = c, Jc = "value" in $n ? $n.value : $n.textContent, Fr = !0)), M = ea(u, x), 0 < M.length && (x = new ip(x, e, null, n, c), f.push({ event: x, listeners: M }), A ? x.data = A : (A = Xh(n), A !== null && (x.data = A)))), (A = Xw ? Jw(e, n) : qw(e, n)) && (u = ea(u, "onBeforeInput"), 0 < u.length && (c = new ip("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = A));
    }
    ug(f, t);
  });
}
function Ai(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ea(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = mi(e, n), i != null && r.unshift(Ai(e, i, o)), i = mi(e, t), i != null && r.push(Ai(e, i, o))), e = e.return;
  }
  return r;
}
function Pr(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r)
      break;
    a.tag === 5 && u !== null && (a = u, o ? (l = mi(n, i), l != null && s.unshift(Ai(n, l, a))) : o || (l = mi(n, i), l != null && s.push(Ai(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var pT = /\r\n?/g, mT = /\u0000|\uFFFD/g;
function vp(e) {
  return (typeof e == "string" ? e : "" + e).replace(pT, `
`).replace(mT, "");
}
function ys(e, t, n) {
  if (t = vp(t), vp(e) !== t && n)
    throw Error(P(425));
}
function ta() {
}
var Xu = null, Ju = null;
function qu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ec = typeof setTimeout == "function" ? setTimeout : void 0, hT = typeof clearTimeout == "function" ? clearTimeout : void 0, wp = typeof Promise == "function" ? Promise : void 0, gT = typeof queueMicrotask == "function" ? queueMicrotask : typeof wp < "u" ? function(e) {
  return wp.resolve(null).then(e).catch(yT);
} : ec;
function yT(e) {
  setTimeout(function() {
    throw e;
  });
}
function ou(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), yi(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  yi(t);
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
function Tp(e) {
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
var Eo = Math.random().toString(36).slice(2), an = "__reactFiber$" + Eo, Si = "__reactProps$" + Eo, Sn = "__reactContainer$" + Eo, tc = "__reactEvents$" + Eo, vT = "__reactListeners$" + Eo, wT = "__reactHandles$" + Eo;
function pr(e) {
  var t = e[an];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Sn] || n[an]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Tp(e); e !== null; ) {
          if (n = e[an])
            return n;
          e = Tp(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Bi(e) {
  return e = e[an] || e[Sn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Zr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(P(33));
}
function Ia(e) {
  return e[Si] || null;
}
var nc = [], Vr = -1;
function rr(e) {
  return { current: e };
}
function de(e) {
  0 > Vr || (e.current = nc[Vr], nc[Vr] = null, Vr--);
}
function ue(e, t) {
  Vr++, nc[Vr] = e.current, e.current = t;
}
var qn = {}, nt = rr(qn), ht = rr(!1), vr = qn;
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
function na() {
  de(ht), de(nt);
}
function Ap(e, t, n) {
  if (nt.current !== qn)
    throw Error(P(168));
  ue(nt, t), ue(ht, n);
}
function dg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(P(108, rw(e) || "Unknown", o));
  return he({}, n, r);
}
function ra(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qn, vr = nt.current, ue(nt, e), ue(ht, ht.current), !0;
}
function Sp(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(P(169));
  n ? (e = dg(e, t, vr), r.__reactInternalMemoizedMergedChildContext = e, de(ht), de(nt), ue(nt, e)) : de(ht), ue(ht, n);
}
var gn = null, Oa = !1, iu = !1;
function fg(e) {
  gn === null ? gn = [e] : gn.push(e);
}
function TT(e) {
  Oa = !0, fg(e);
}
function or() {
  if (!iu && gn !== null) {
    iu = !0;
    var e = 0, t = se;
    try {
      var n = gn;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      gn = null, Oa = !1;
    } catch (o) {
      throw gn !== null && (gn = gn.slice(e + 1)), Rh(Yc, or), o;
    } finally {
      se = t, iu = !1;
    }
  }
  return null;
}
var Wr = [], Yr = 0, oa = null, ia = 0, bt = [], It = 0, wr = null, vn = 1, wn = "";
function cr(e, t) {
  Wr[Yr++] = ia, Wr[Yr++] = oa, oa = e, ia = t;
}
function pg(e, t, n) {
  bt[It++] = vn, bt[It++] = wn, bt[It++] = wr, wr = e;
  var r = vn;
  e = wn;
  var o = 32 - Vt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Vt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, vn = 1 << 32 - Vt(t) + o | n << o | r, wn = i + e;
  } else
    vn = 1 << i | n << o | r, wn = e;
}
function rd(e) {
  e.return !== null && (cr(e, 1), pg(e, 1, 0));
}
function od(e) {
  for (; e === oa; )
    oa = Wr[--Yr], Wr[Yr] = null, ia = Wr[--Yr], Wr[Yr] = null;
  for (; e === wr; )
    wr = bt[--It], bt[It] = null, wn = bt[--It], bt[It] = null, vn = bt[--It], bt[It] = null;
}
var Et = null, kt = null, fe = !1, Kt = null;
function mg(e, t) {
  var n = Pt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function kp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Et = e, kt = Vn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Et = e, kt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = wr !== null ? { id: vn, overflow: wn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Et = e, kt = null, !0) : !1;
    default:
      return !1;
  }
}
function rc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function oc(e) {
  if (fe) {
    var t = kt;
    if (t) {
      var n = t;
      if (!kp(e, t)) {
        if (rc(e))
          throw Error(P(418));
        t = Vn(n.nextSibling);
        var r = Et;
        t && kp(e, t) ? mg(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, Et = e);
      }
    } else {
      if (rc(e))
        throw Error(P(418));
      e.flags = e.flags & -4097 | 2, fe = !1, Et = e;
    }
  }
}
function Ep(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Et = e;
}
function vs(e) {
  if (e !== Et)
    return !1;
  if (!fe)
    return Ep(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qu(e.type, e.memoizedProps)), t && (t = kt)) {
    if (rc(e))
      throw hg(), Error(P(418));
    for (; t; )
      mg(e, t), t = Vn(t.nextSibling);
  }
  if (Ep(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              kt = Vn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      kt = null;
    }
  } else
    kt = Et ? Vn(e.stateNode.nextSibling) : null;
  return !0;
}
function hg() {
  for (var e = kt; e; )
    e = Vn(e.nextSibling);
}
function fo() {
  kt = Et = null, fe = !1;
}
function id(e) {
  Kt === null ? Kt = [e] : Kt.push(e);
}
var AT = Cn.ReactCurrentBatchConfig;
function Uo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(P(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(P(284));
    if (!n._owner)
      throw Error(P(290, e));
  }
  return e;
}
function ws(e, t) {
  throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Np(e) {
  var t = e._init;
  return t(e._payload);
}
function gg(e) {
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
    return y = Gn(y, m), y.index = 0, y.sibling = null, y;
  }
  function i(y, m, h) {
    return y.index = h, e ? (h = y.alternate, h !== null ? (h = h.index, h < m ? (y.flags |= 2, m) : h) : (y.flags |= 2, m)) : (y.flags |= 1048576, m);
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, m, h, C) {
    return m === null || m.tag !== 6 ? (m = fu(h, y.mode, C), m.return = y, m) : (m = o(m, h), m.return = y, m);
  }
  function l(y, m, h, C) {
    var E = h.type;
    return E === Hr ? c(y, m, h.props.children, C, h.key) : m !== null && (m.elementType === E || typeof E == "object" && E !== null && E.$$typeof === In && Np(E) === m.type) ? (C = o(m, h.props), C.ref = Uo(y, m, h), C.return = y, C) : (C = Hs(h.type, h.key, h.props, null, y.mode, C), C.ref = Uo(y, m, h), C.return = y, C);
  }
  function u(y, m, h, C) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== h.containerInfo || m.stateNode.implementation !== h.implementation ? (m = pu(h, y.mode, C), m.return = y, m) : (m = o(m, h.children || []), m.return = y, m);
  }
  function c(y, m, h, C, E) {
    return m === null || m.tag !== 7 ? (m = yr(h, y.mode, C, E), m.return = y, m) : (m = o(m, h), m.return = y, m);
  }
  function f(y, m, h) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = fu("" + m, y.mode, h), m.return = y, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ls:
          return h = Hs(m.type, m.key, m.props, null, y.mode, h), h.ref = Uo(y, null, m), h.return = y, h;
        case Ur:
          return m = pu(m, y.mode, h), m.return = y, m;
        case In:
          var C = m._init;
          return f(y, C(m._payload), h);
      }
      if (Qo(m) || Po(m))
        return m = yr(m, y.mode, h, null), m.return = y, m;
      ws(y, m);
    }
    return null;
  }
  function p(y, m, h, C) {
    var E = m !== null ? m.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return E !== null ? null : a(y, m, "" + h, C);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ls:
          return h.key === E ? l(y, m, h, C) : null;
        case Ur:
          return h.key === E ? u(y, m, h, C) : null;
        case In:
          return E = h._init, p(
            y,
            m,
            E(h._payload),
            C
          );
      }
      if (Qo(h) || Po(h))
        return E !== null ? null : c(y, m, h, C, null);
      ws(y, h);
    }
    return null;
  }
  function v(y, m, h, C, E) {
    if (typeof C == "string" && C !== "" || typeof C == "number")
      return y = y.get(h) || null, a(m, y, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ls:
          return y = y.get(C.key === null ? h : C.key) || null, l(m, y, C, E);
        case Ur:
          return y = y.get(C.key === null ? h : C.key) || null, u(m, y, C, E);
        case In:
          var M = C._init;
          return v(y, m, h, M(C._payload), E);
      }
      if (Qo(C) || Po(C))
        return y = y.get(h) || null, c(m, y, C, E, null);
      ws(m, C);
    }
    return null;
  }
  function S(y, m, h, C) {
    for (var E = null, M = null, A = m, x = m = 0, F = null; A !== null && x < h.length; x++) {
      A.index > x ? (F = A, A = null) : F = A.sibling;
      var b = p(y, A, h[x], C);
      if (b === null) {
        A === null && (A = F);
        break;
      }
      e && A && b.alternate === null && t(y, A), m = i(b, m, x), M === null ? E = b : M.sibling = b, M = b, A = F;
    }
    if (x === h.length)
      return n(y, A), fe && cr(y, x), E;
    if (A === null) {
      for (; x < h.length; x++)
        A = f(y, h[x], C), A !== null && (m = i(A, m, x), M === null ? E = A : M.sibling = A, M = A);
      return fe && cr(y, x), E;
    }
    for (A = r(y, A); x < h.length; x++)
      F = v(A, y, x, h[x], C), F !== null && (e && F.alternate !== null && A.delete(F.key === null ? x : F.key), m = i(F, m, x), M === null ? E = F : M.sibling = F, M = F);
    return e && A.forEach(function(j) {
      return t(y, j);
    }), fe && cr(y, x), E;
  }
  function T(y, m, h, C) {
    var E = Po(h);
    if (typeof E != "function")
      throw Error(P(150));
    if (h = E.call(h), h == null)
      throw Error(P(151));
    for (var M = E = null, A = m, x = m = 0, F = null, b = h.next(); A !== null && !b.done; x++, b = h.next()) {
      A.index > x ? (F = A, A = null) : F = A.sibling;
      var j = p(y, A, b.value, C);
      if (j === null) {
        A === null && (A = F);
        break;
      }
      e && A && j.alternate === null && t(y, A), m = i(j, m, x), M === null ? E = j : M.sibling = j, M = j, A = F;
    }
    if (b.done)
      return n(
        y,
        A
      ), fe && cr(y, x), E;
    if (A === null) {
      for (; !b.done; x++, b = h.next())
        b = f(y, b.value, C), b !== null && (m = i(b, m, x), M === null ? E = b : M.sibling = b, M = b);
      return fe && cr(y, x), E;
    }
    for (A = r(y, A); !b.done; x++, b = h.next())
      b = v(A, y, x, b.value, C), b !== null && (e && b.alternate !== null && A.delete(b.key === null ? x : b.key), m = i(b, m, x), M === null ? E = b : M.sibling = b, M = b);
    return e && A.forEach(function(U) {
      return t(y, U);
    }), fe && cr(y, x), E;
  }
  function D(y, m, h, C) {
    if (typeof h == "object" && h !== null && h.type === Hr && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ls:
          e: {
            for (var E = h.key, M = m; M !== null; ) {
              if (M.key === E) {
                if (E = h.type, E === Hr) {
                  if (M.tag === 7) {
                    n(y, M.sibling), m = o(M, h.props.children), m.return = y, y = m;
                    break e;
                  }
                } else if (M.elementType === E || typeof E == "object" && E !== null && E.$$typeof === In && Np(E) === M.type) {
                  n(y, M.sibling), m = o(M, h.props), m.ref = Uo(y, M, h), m.return = y, y = m;
                  break e;
                }
                n(y, M);
                break;
              } else
                t(y, M);
              M = M.sibling;
            }
            h.type === Hr ? (m = yr(h.props.children, y.mode, C, h.key), m.return = y, y = m) : (C = Hs(h.type, h.key, h.props, null, y.mode, C), C.ref = Uo(y, m, h), C.return = y, y = C);
          }
          return s(y);
        case Ur:
          e: {
            for (M = h.key; m !== null; ) {
              if (m.key === M)
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
            m = pu(h, y.mode, C), m.return = y, y = m;
          }
          return s(y);
        case In:
          return M = h._init, D(y, m, M(h._payload), C);
      }
      if (Qo(h))
        return S(y, m, h, C);
      if (Po(h))
        return T(y, m, h, C);
      ws(y, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, m !== null && m.tag === 6 ? (n(y, m.sibling), m = o(m, h), m.return = y, y = m) : (n(y, m), m = fu(h, y.mode, C), m.return = y, y = m), s(y)) : n(y, m);
  }
  return D;
}
var po = gg(!0), yg = gg(!1), sa = rr(null), aa = null, Qr = null, sd = null;
function ad() {
  sd = Qr = aa = null;
}
function ld(e) {
  var t = sa.current;
  de(sa), e._currentValue = t;
}
function ic(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function oo(e, t) {
  aa = e, sd = Qr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (mt = !0), e.firstContext = null);
}
function Rt(e) {
  var t = e._currentValue;
  if (sd !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Qr === null) {
      if (aa === null)
        throw Error(P(308));
      Qr = e, aa.dependencies = { lanes: 0, firstContext: e };
    } else
      Qr = Qr.next = e;
  return t;
}
var mr = null;
function ud(e) {
  mr === null ? mr = [e] : mr.push(e);
}
function vg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ud(t)) : (n.next = o.next, o.next = n), t.interleaved = n, kn(e, r);
}
function kn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var On = !1;
function cd(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wg(e, t) {
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
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, kn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ud(r)) : (t.next = o.next, o.next = t), r.interleaved = t, kn(e, n);
}
function Ps(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Qc(e, n);
  }
}
function Mp(e, t) {
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
function la(e, t, n, r) {
  var o = e.updateQueue;
  On = !1;
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
          var S = e, T = a;
          switch (p = t, v = n, T.tag) {
            case 1:
              if (S = T.payload, typeof S == "function") {
                f = S.call(v, f, p);
                break e;
              }
              f = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = T.payload, p = typeof S == "function" ? S.call(v, f, p) : S, p == null)
                break e;
              f = he({}, f, p);
              break e;
            case 2:
              On = !0;
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
    Ar |= s, e.lanes = s, e.memoizedState = f;
  }
}
function Cp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(P(191, o));
        o.call(r);
      }
    }
}
var Ki = {}, cn = rr(Ki), ki = rr(Ki), Ei = rr(Ki);
function hr(e) {
  if (e === Ki)
    throw Error(P(174));
  return e;
}
function dd(e, t) {
  switch (ue(Ei, t), ue(ki, e), ue(cn, Ki), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ju(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ju(t, e);
  }
  de(cn), ue(cn, t);
}
function mo() {
  de(cn), de(ki), de(Ei);
}
function Tg(e) {
  hr(Ei.current);
  var t = hr(cn.current), n = ju(t, e.type);
  t !== n && (ue(ki, e), ue(cn, n));
}
function fd(e) {
  ki.current === e && (de(cn), de(ki));
}
var pe = rr(0);
function ua(e) {
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
var su = [];
function pd() {
  for (var e = 0; e < su.length; e++)
    su[e]._workInProgressVersionPrimary = null;
  su.length = 0;
}
var _s = Cn.ReactCurrentDispatcher, au = Cn.ReactCurrentBatchConfig, Tr = 0, me = null, De = null, Re = null, ca = !1, ii = !1, Ni = 0, ST = 0;
function Je() {
  throw Error(P(321));
}
function md(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Yt(e[n], t[n]))
      return !1;
  return !0;
}
function hd(e, t, n, r, o, i) {
  if (Tr = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _s.current = e === null || e.memoizedState === null ? MT : CT, e = n(r, o), ii) {
    i = 0;
    do {
      if (ii = !1, Ni = 0, 25 <= i)
        throw Error(P(301));
      i += 1, Re = De = null, t.updateQueue = null, _s.current = zT, e = n(r, o);
    } while (ii);
  }
  if (_s.current = da, t = De !== null && De.next !== null, Tr = 0, Re = De = me = null, ca = !1, t)
    throw Error(P(300));
  return e;
}
function gd() {
  var e = Ni !== 0;
  return Ni = 0, e;
}
function rn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? me.memoizedState = Re = e : Re = Re.next = e, Re;
}
function $t() {
  if (De === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = De.next;
  var t = Re === null ? me.memoizedState : Re.next;
  if (t !== null)
    Re = t, De = e;
  else {
    if (e === null)
      throw Error(P(310));
    De = e, e = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }, Re === null ? me.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function Mi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lu(e) {
  var t = $t(), n = t.queue;
  if (n === null)
    throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = De, o = r.baseQueue, i = n.pending;
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
      if ((Tr & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = f, s = r) : l = l.next = f, me.lanes |= c, Ar |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, Yt(r, t.memoizedState) || (mt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
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
function uu(e) {
  var t = $t(), n = t.queue;
  if (n === null)
    throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Yt(i, t.memoizedState) || (mt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ag() {
}
function Sg(e, t) {
  var n = me, r = $t(), o = t(), i = !Yt(r.memoizedState, o);
  if (i && (r.memoizedState = o, mt = !0), r = r.queue, yd(Ng.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ci(9, Eg.bind(null, n, r, o, t), void 0, null), $e === null)
      throw Error(P(349));
    Tr & 30 || kg(n, t, o);
  }
  return o;
}
function kg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Eg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Mg(t) && Cg(e);
}
function Ng(e, t, n) {
  return n(function() {
    Mg(t) && Cg(e);
  });
}
function Mg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Yt(e, n);
  } catch {
    return !0;
  }
}
function Cg(e) {
  var t = kn(e, 1);
  t !== null && Wt(t, e, 1, -1);
}
function zp(e) {
  var t = rn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Mi, lastRenderedState: e }, t.queue = e, e = e.dispatch = NT.bind(null, me, e), [t.memoizedState, e];
}
function Ci(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function zg() {
  return $t().memoizedState;
}
function Rs(e, t, n, r) {
  var o = rn();
  me.flags |= e, o.memoizedState = Ci(1 | t, n, void 0, r === void 0 ? null : r);
}
function Pa(e, t, n, r) {
  var o = $t();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (De !== null) {
    var s = De.memoizedState;
    if (i = s.destroy, r !== null && md(r, s.deps)) {
      o.memoizedState = Ci(t, n, i, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = Ci(1 | t, n, i, r);
}
function Lp(e, t) {
  return Rs(8390656, 8, e, t);
}
function yd(e, t) {
  return Pa(2048, 8, e, t);
}
function Lg(e, t) {
  return Pa(4, 2, e, t);
}
function xg(e, t) {
  return Pa(4, 4, e, t);
}
function Dg(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function bg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pa(4, 4, Dg.bind(null, t, e), n);
}
function vd() {
}
function Ig(e, t) {
  var n = $t();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && md(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Og(e, t) {
  var n = $t();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && md(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Pg(e, t, n) {
  return Tr & 21 ? (Yt(n, t) || (n = Uh(), me.lanes |= n, Ar |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, mt = !0), e.memoizedState = n);
}
function kT(e, t) {
  var n = se;
  se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = au.transition;
  au.transition = {};
  try {
    e(!1), t();
  } finally {
    se = n, au.transition = r;
  }
}
function _g() {
  return $t().memoizedState;
}
function ET(e, t, n) {
  var r = Qn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Rg(e))
    $g(t, n);
  else if (n = vg(e, t, n, r), n !== null) {
    var o = lt();
    Wt(n, e, r, o), jg(n, t, r);
  }
}
function NT(e, t, n) {
  var r = Qn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rg(e))
    $g(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var s = t.lastRenderedState, a = i(s, n);
        if (o.hasEagerState = !0, o.eagerState = a, Yt(a, s)) {
          var l = t.interleaved;
          l === null ? (o.next = o, ud(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = vg(e, t, o, r), n !== null && (o = lt(), Wt(n, e, r, o), jg(n, t, r));
  }
}
function Rg(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function $g(e, t) {
  ii = ca = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function jg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Qc(e, n);
  }
}
var da = { readContext: Rt, useCallback: Je, useContext: Je, useEffect: Je, useImperativeHandle: Je, useInsertionEffect: Je, useLayoutEffect: Je, useMemo: Je, useReducer: Je, useRef: Je, useState: Je, useDebugValue: Je, useDeferredValue: Je, useTransition: Je, useMutableSource: Je, useSyncExternalStore: Je, useId: Je, unstable_isNewReconciler: !1 }, MT = { readContext: Rt, useCallback: function(e, t) {
  return rn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Rt, useEffect: Lp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Rs(
    4194308,
    4,
    Dg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Rs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Rs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = rn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = rn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ET.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = rn();
  return e = { current: e }, t.memoizedState = e;
}, useState: zp, useDebugValue: vd, useDeferredValue: function(e) {
  return rn().memoizedState = e;
}, useTransition: function() {
  var e = zp(!1), t = e[0];
  return e = kT.bind(null, e[1]), rn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = me, o = rn();
  if (fe) {
    if (n === void 0)
      throw Error(P(407));
    n = n();
  } else {
    if (n = t(), $e === null)
      throw Error(P(349));
    Tr & 30 || kg(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Lp(Ng.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Ci(9, Eg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = rn(), t = $e.identifierPrefix;
  if (fe) {
    var n = wn, r = vn;
    n = (r & ~(1 << 32 - Vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ni++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = ST++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, CT = {
  readContext: Rt,
  useCallback: Ig,
  useContext: Rt,
  useEffect: yd,
  useImperativeHandle: bg,
  useInsertionEffect: Lg,
  useLayoutEffect: xg,
  useMemo: Og,
  useReducer: lu,
  useRef: zg,
  useState: function() {
    return lu(Mi);
  },
  useDebugValue: vd,
  useDeferredValue: function(e) {
    var t = $t();
    return Pg(t, De.memoizedState, e);
  },
  useTransition: function() {
    var e = lu(Mi)[0], t = $t().memoizedState;
    return [e, t];
  },
  useMutableSource: Ag,
  useSyncExternalStore: Sg,
  useId: _g,
  unstable_isNewReconciler: !1
}, zT = { readContext: Rt, useCallback: Ig, useContext: Rt, useEffect: yd, useImperativeHandle: bg, useInsertionEffect: Lg, useLayoutEffect: xg, useMemo: Og, useReducer: uu, useRef: zg, useState: function() {
  return uu(Mi);
}, useDebugValue: vd, useDeferredValue: function(e) {
  var t = $t();
  return De === null ? t.memoizedState = e : Pg(t, De.memoizedState, e);
}, useTransition: function() {
  var e = uu(Mi)[0], t = $t().memoizedState;
  return [e, t];
}, useMutableSource: Ag, useSyncExternalStore: Sg, useId: _g, unstable_isNewReconciler: !1 };
function Ft(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function sc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _a = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = lt(), o = Qn(e), i = Tn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Wn(e, i, o), t !== null && (Wt(t, e, o, r), Ps(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = lt(), o = Qn(e), i = Tn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Wn(e, i, o), t !== null && (Wt(t, e, o, r), Ps(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = lt(), r = Qn(e), o = Tn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Wn(e, o, r), t !== null && (Wt(t, e, r, n), Ps(t, e, r));
} };
function xp(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !wi(n, r) || !wi(o, i) : !0;
}
function Ug(e, t, n) {
  var r = !1, o = qn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Rt(i) : (o = gt(t) ? vr : nt.current, r = t.contextTypes, i = (r = r != null) ? co(e, o) : qn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _a, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Dp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _a.enqueueReplaceState(t, t.state, null);
}
function ac(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, cd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Rt(i) : (i = gt(t) ? vr : nt.current, o.context = co(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (sc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && _a.enqueueReplaceState(o, o.state, null), la(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
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
function cu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function lc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var LT = typeof WeakMap == "function" ? WeakMap : Map;
function Hg(e, t, n) {
  n = Tn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    pa || (pa = !0, vc = r), lc(e, t);
  }, n;
}
function Fg(e, t, n) {
  n = Tn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      lc(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    lc(e, t), typeof r != "function" && (Yn === null ? Yn = /* @__PURE__ */ new Set([this]) : Yn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function bp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new LT();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = BT.bind(null, e, t, n), t.then(e, e));
}
function Ip(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Op(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tn(-1, 1), t.tag = 2, Wn(n, t, 1))), n.lanes |= 1), e);
}
var xT = Cn.ReactCurrentOwner, mt = !1;
function st(e, t, n, r) {
  t.child = e === null ? yg(t, null, n, r) : po(t, e.child, n, r);
}
function Pp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return oo(t, o), r = hd(e, t, n, r, i, o), n = gd(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, En(e, t, o)) : (fe && n && rd(t), t.flags |= 1, st(e, t, r, o), t.child);
}
function _p(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Md(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Bg(e, t, i, r, o)) : (e = Hs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : wi, n(s, r) && e.ref === t.ref)
      return En(e, t, o);
  }
  return t.flags |= 1, e = Gn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Bg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (wi(i, r) && e.ref === t.ref)
      if (mt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (mt = !0);
      else
        return t.lanes = e.lanes, En(e, t, o);
  }
  return uc(e, t, n, r, o);
}
function Kg(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(Xr, Tt), Tt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ue(Xr, Tt), Tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ue(Xr, Tt), Tt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ue(Xr, Tt), Tt |= r;
  return st(e, t, o, n), t.child;
}
function Zg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function uc(e, t, n, r, o) {
  var i = gt(n) ? vr : nt.current;
  return i = co(t, i), oo(t, o), n = hd(e, t, n, r, i, o), r = gd(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, En(e, t, o)) : (fe && r && rd(t), t.flags |= 1, st(e, t, n, o), t.child);
}
function Rp(e, t, n, r, o) {
  if (gt(n)) {
    var i = !0;
    ra(t);
  } else
    i = !1;
  if (oo(t, o), t.stateNode === null)
    $s(e, t), Ug(t, n, r), ac(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Rt(u) : (u = gt(n) ? vr : nt.current, u = co(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Dp(t, s, r, u), On = !1;
    var p = t.memoizedState;
    s.state = p, la(t, r, s, o), l = t.memoizedState, a !== r || p !== l || ht.current || On ? (typeof c == "function" && (sc(t, n, c, r), l = t.memoizedState), (a = On || xp(t, n, a, r, p, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, wg(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Ft(t.type, a), s.props = u, f = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Rt(l) : (l = gt(n) ? vr : nt.current, l = co(t, l));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || p !== l) && Dp(t, s, r, l), On = !1, p = t.memoizedState, s.state = p, la(t, r, s, o);
    var S = t.memoizedState;
    a !== f || p !== S || ht.current || On ? (typeof v == "function" && (sc(t, n, v, r), S = t.memoizedState), (u = On || xp(t, n, u, r, p, S, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return cc(e, t, n, r, i, o);
}
function cc(e, t, n, r, o, i) {
  Zg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return o && Sp(t, n, !1), En(e, t, i);
  r = t.stateNode, xT.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = po(t, e.child, null, i), t.child = po(t, null, a, i)) : st(e, t, a, i), t.memoizedState = r.state, o && Sp(t, n, !0), t.child;
}
function Vg(e) {
  var t = e.stateNode;
  t.pendingContext ? Ap(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ap(e, t.context, !1), dd(e, t.containerInfo);
}
function $p(e, t, n, r, o) {
  return fo(), id(o), t.flags |= 256, st(e, t, n, r), t.child;
}
var dc = { dehydrated: null, treeContext: null, retryLane: 0 };
function fc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wg(e, t, n) {
  var r = t.pendingProps, o = pe.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ue(pe, o & 1), e === null)
    return oc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = ja(s, r, 0, null), e = yr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = fc(n), t.memoizedState = dc, e) : wd(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return DT(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Gn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Gn(a, i) : (i = yr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? fc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = dc, r;
  }
  return i = e.child, e = i.sibling, r = Gn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function wd(e, t) {
  return t = ja({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ts(e, t, n, r) {
  return r !== null && id(r), po(t, e.child, null, n), e = wd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function DT(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = cu(Error(P(422))), Ts(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ja({ mode: "visible", children: r.children }, o, 0, null), i = yr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && po(t, e.child, null, s), t.child.memoizedState = fc(s), t.memoizedState = dc, i);
  if (!(t.mode & 1))
    return Ts(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(P(419)), r = cu(i, r, void 0), Ts(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, mt || a) {
    if (r = $e, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, kn(e, o), Wt(r, e, o, -1));
    }
    return Nd(), r = cu(Error(P(421))), Ts(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = KT.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, kt = Vn(o.nextSibling), Et = t, fe = !0, Kt = null, e !== null && (bt[It++] = vn, bt[It++] = wn, bt[It++] = wr, vn = e.id, wn = e.overflow, wr = t), t = wd(t, r.children), t.flags |= 4096, t);
}
function jp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ic(e.return, t, n);
}
function du(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Yg(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (st(e, t, r.children, n), r = pe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && jp(e, n, t);
          else if (e.tag === 19)
            jp(e, n, t);
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
          e = n.alternate, e !== null && ua(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), du(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && ua(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        du(t, !0, n, null, i);
        break;
      case "together":
        du(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $s(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function En(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ar |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(P(153));
  if (t.child !== null) {
    for (e = t.child, n = Gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Gn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function bT(e, t, n) {
  switch (t.tag) {
    case 3:
      Vg(t), fo();
      break;
    case 5:
      Tg(t);
      break;
    case 1:
      gt(t.type) && ra(t);
      break;
    case 4:
      dd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ue(sa, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ue(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wg(e, t, n) : (ue(pe, pe.current & 1), e = En(e, t, n), e !== null ? e.sibling : null);
      ue(pe, pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Yg(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ue(pe, pe.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Kg(e, t, n);
  }
  return En(e, t, n);
}
var Qg, pc, Gg, Xg;
Qg = function(e, t) {
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
pc = function() {
};
Gg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, hr(cn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Pu(e, o), r = Pu(e, r), i = [];
        break;
      case "select":
        o = he({}, o, { value: void 0 }), r = he({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = $u(e, o), r = $u(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ta);
    }
    Uu(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a)
            a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (fi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (fi.hasOwnProperty(u) ? (l != null && u === "onScroll" && ce("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Xg = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ho(e, t) {
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
function IT(e, t, n) {
  var r = t.pendingProps;
  switch (od(t), t.tag) {
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
      return gt(t.type) && na(), qe(t), null;
    case 3:
      return r = t.stateNode, mo(), de(ht), de(nt), pd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Kt !== null && (Ac(Kt), Kt = null))), pc(e, t), qe(t), null;
    case 5:
      fd(t);
      var o = hr(Ei.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Gg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(P(166));
          return qe(t), null;
        }
        if (e = hr(cn.current), vs(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[an] = t, r[Si] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Xo.length; o++)
                ce(Xo[o], r);
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
              Yf(r, i), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ce("invalid", r);
              break;
            case "textarea":
              Gf(r, i), ce("invalid", r);
          }
          Uu(n, i), o = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && ys(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && ys(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : fi.hasOwnProperty(s) && a != null && s === "onScroll" && ce("scroll", r);
            }
          switch (n) {
            case "input":
              us(r), Qf(r, i, !0);
              break;
            case "textarea":
              us(r), Xf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ta);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Nh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[an] = t, e[Si] = r, Qg(e, t, !1, !1), t.stateNode = e;
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
                for (o = 0; o < Xo.length; o++)
                  ce(Xo[o], e);
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
                Yf(e, r), o = Pu(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = he({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                Gf(e, r), o = $u(e, r), ce("invalid", e);
                break;
              default:
                o = r;
            }
            Uu(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? zh(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Mh(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && pi(e, l) : typeof l == "number" && pi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (fi.hasOwnProperty(i) ? l != null && i === "onScroll" && ce("scroll", e) : l != null && Bc(e, i, l, s));
              }
            switch (n) {
              case "input":
                us(e), Qf(e, r, !1);
                break;
              case "textarea":
                us(e), Xf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? eo(e, !!r.multiple, i, !1) : r.defaultValue != null && eo(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ta);
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
        Xg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(P(166));
        if (n = hr(Ei.current), hr(cn.current), vs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[an] = t, (i = r.nodeValue !== n) && (e = Et, e !== null))
            switch (e.tag) {
              case 3:
                ys(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ys(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[an] = t, t.stateNode = r;
      }
      return qe(t), null;
    case 13:
      if (de(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && kt !== null && t.mode & 1 && !(t.flags & 128))
          hg(), fo(), t.flags |= 98560, i = !1;
        else if (i = vs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(P(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(P(317));
            i[an] = t;
          } else
            fo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          qe(t), i = !1;
        } else
          Kt !== null && (Ac(Kt), Kt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? be === 0 && (be = 3) : Nd())), t.updateQueue !== null && (t.flags |= 4), qe(t), null);
    case 4:
      return mo(), pc(e, t), e === null && Ti(t.stateNode.containerInfo), qe(t), null;
    case 10:
      return ld(t.type._context), qe(t), null;
    case 17:
      return gt(t.type) && na(), qe(t), null;
    case 19:
      if (de(pe), i = t.memoizedState, i === null)
        return qe(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r)
          Ho(i, !1);
        else {
          if (be !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = ua(e), s !== null) {
                for (t.flags |= 128, Ho(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ue(pe, pe.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ee() > go && (t.flags |= 128, r = !0, Ho(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = ua(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ho(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !fe)
              return qe(t), null;
          } else
            2 * Ee() - i.renderingStartTime > go && n !== 1073741824 && (t.flags |= 128, r = !0, Ho(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ee(), t.sibling = null, n = pe.current, ue(pe, r ? n & 1 | 2 : n & 1), t) : (qe(t), null);
    case 22:
    case 23:
      return Ed(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Tt & 1073741824 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function OT(e, t) {
  switch (od(t), t.tag) {
    case 1:
      return gt(t.type) && na(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mo(), de(ht), de(nt), pd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return fd(t), null;
    case 13:
      if (de(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(P(340));
        fo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return de(pe), null;
    case 4:
      return mo(), null;
    case 10:
      return ld(t.type._context), null;
    case 22:
    case 23:
      return Ed(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var As = !1, tt = !1, PT = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Gr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else
      n.current = null;
}
function mc(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var Up = !1;
function _T(e, t) {
  if (Xu = Js, e = ng(), nd(e)) {
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
  for (Ju = { focusedElem: e, selectionRange: n }, Js = !1, B = t; B !== null; )
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
                  var T = S.memoizedProps, D = S.memoizedState, y = t.stateNode, m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? T : Ft(t.type, T), D);
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
                throw Error(P(163));
            }
        } catch (C) {
          Se(t, t.return, C);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, B = e;
          break;
        }
        B = t.return;
      }
  return S = Up, Up = !1, S;
}
function si(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && mc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ra(e, t) {
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
function hc(e) {
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
function Jg(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Jg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[an], delete t[Si], delete t[tc], delete t[vT], delete t[wT])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function qg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hp(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qg(e.return))
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
function gc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ta));
  else if (r !== 4 && (e = e.child, e !== null))
    for (gc(e, t, n), e = e.sibling; e !== null; )
      gc(e, t, n), e = e.sibling;
}
function yc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (yc(e, t, n), e = e.sibling; e !== null; )
      yc(e, t, n), e = e.sibling;
}
var Fe = null, Bt = !1;
function Dn(e, t, n) {
  for (n = n.child; n !== null; )
    ey(e, t, n), n = n.sibling;
}
function ey(e, t, n) {
  if (un && typeof un.onCommitFiberUnmount == "function")
    try {
      un.onCommitFiberUnmount(La, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      tt || Gr(n, t);
    case 6:
      var r = Fe, o = Bt;
      Fe = null, Dn(e, t, n), Fe = r, Bt = o, Fe !== null && (Bt ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Fe.removeChild(n.stateNode));
      break;
    case 18:
      Fe !== null && (Bt ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? ou(e.parentNode, n) : e.nodeType === 1 && ou(e, n), yi(e)) : ou(Fe, n.stateNode));
      break;
    case 4:
      r = Fe, o = Bt, Fe = n.stateNode.containerInfo, Bt = !0, Dn(e, t, n), Fe = r, Bt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!tt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && mc(n, t, s), o = o.next;
        } while (o !== r);
      }
      Dn(e, t, n);
      break;
    case 1:
      if (!tt && (Gr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Se(n, t, a);
        }
      Dn(e, t, n);
      break;
    case 21:
      Dn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (tt = (r = tt) || n.memoizedState !== null, Dn(e, t, n), tt = r) : Dn(e, t, n);
      break;
    default:
      Dn(e, t, n);
  }
}
function Fp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new PT()), t.forEach(function(r) {
      var o = ZT.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ht(e, t) {
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
                Fe = a.stateNode, Bt = !1;
                break e;
              case 3:
                Fe = a.stateNode.containerInfo, Bt = !0;
                break e;
              case 4:
                Fe = a.stateNode.containerInfo, Bt = !0;
                break e;
            }
            a = a.return;
          }
        if (Fe === null)
          throw Error(P(160));
        ey(i, s, o), Fe = null, Bt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        Se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ty(t, e), t = t.sibling;
}
function ty(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ht(t, e), qt(e), r & 4) {
        try {
          si(3, e, e.return), Ra(3, e);
        } catch (T) {
          Se(e, e.return, T);
        }
        try {
          si(5, e, e.return);
        } catch (T) {
          Se(e, e.return, T);
        }
      }
      break;
    case 1:
      Ht(t, e), qt(e), r & 512 && n !== null && Gr(n, n.return);
      break;
    case 5:
      if (Ht(t, e), qt(e), r & 512 && n !== null && Gr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          pi(o, "");
        } catch (T) {
          Se(e, e.return, T);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && kh(o, i), Hu(a, s);
            var u = Hu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s], f = l[s + 1];
              c === "style" ? zh(o, f) : c === "dangerouslySetInnerHTML" ? Mh(o, f) : c === "children" ? pi(o, f) : Bc(o, c, f, u);
            }
            switch (a) {
              case "input":
                _u(o, i);
                break;
              case "textarea":
                Eh(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null ? eo(o, !!i.multiple, v, !1) : p !== !!i.multiple && (i.defaultValue != null ? eo(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : eo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Si] = i;
          } catch (T) {
            Se(e, e.return, T);
          }
      }
      break;
    case 6:
      if (Ht(t, e), qt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(P(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (T) {
          Se(e, e.return, T);
        }
      }
      break;
    case 3:
      if (Ht(t, e), qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          yi(t.containerInfo);
        } catch (T) {
          Se(e, e.return, T);
        }
      break;
    case 4:
      Ht(t, e), qt(e);
      break;
    case 13:
      Ht(t, e), qt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Sd = Ee())), r & 4 && Fp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (tt = (u = tt) || c, Ht(t, e), tt = u) : Ht(t, e), qt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (B = e, c = e.child; c !== null; ) {
            for (f = B = c; B !== null; ) {
              switch (p = B, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  si(4, p, p.return);
                  break;
                case 1:
                  Gr(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                    } catch (T) {
                      Se(r, n, T);
                    }
                  }
                  break;
                case 5:
                  Gr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Kp(f);
                    continue;
                  }
              }
              v !== null ? (v.return = p, B = v) : Kp(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Ch("display", s));
                } catch (T) {
                  Se(e, e.return, T);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (T) {
                  Se(e, e.return, T);
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
      Ht(t, e), qt(e), r & 4 && Fp(e);
      break;
    case 21:
      break;
    default:
      Ht(
        t,
        e
      ), qt(e);
  }
}
function qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (pi(o, ""), r.flags &= -33);
          var i = Hp(e);
          yc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Hp(e);
          gc(e, a, s);
          break;
        default:
          throw Error(P(161));
      }
    } catch (l) {
      Se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function RT(e, t, n) {
  B = e, ny(e);
}
function ny(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || As;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || tt;
        a = As;
        var u = tt;
        if (As = s, (tt = l) && !u)
          for (B = o; B !== null; )
            s = B, l = s.child, s.tag === 22 && s.memoizedState !== null ? Zp(o) : l !== null ? (l.return = s, B = l) : Zp(o);
        for (; i !== null; )
          B = i, ny(i), i = i.sibling;
        B = o, As = a, tt = u;
      }
      Bp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : Bp(e);
  }
}
function Bp(e) {
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
              tt || Ra(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !tt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Cp(t, i, r);
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
                Cp(t, s, n);
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
                    f !== null && yi(f);
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
              throw Error(P(163));
          }
        tt || t.flags & 512 && hc(t);
      } catch (p) {
        Se(t, t.return, p);
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
function Kp(e) {
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
function Zp(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ra(4, t);
          } catch (l) {
            Se(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Se(t, o, l);
            }
          }
          var i = t.return;
          try {
            hc(t);
          } catch (l) {
            Se(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            hc(t);
          } catch (l) {
            Se(t, s, l);
          }
      }
    } catch (l) {
      Se(t, t.return, l);
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
var $T = Math.ceil, fa = Cn.ReactCurrentDispatcher, Td = Cn.ReactCurrentOwner, _t = Cn.ReactCurrentBatchConfig, te = 0, $e = null, ze = null, Ze = 0, Tt = 0, Xr = rr(0), be = 0, zi = null, Ar = 0, $a = 0, Ad = 0, ai = null, pt = null, Sd = 0, go = 1 / 0, mn = null, pa = !1, vc = null, Yn = null, Ss = !1, jn = null, ma = 0, li = 0, wc = null, js = -1, Us = 0;
function lt() {
  return te & 6 ? Ee() : js !== -1 ? js : js = Ee();
}
function Qn(e) {
  return e.mode & 1 ? te & 2 && Ze !== 0 ? Ze & -Ze : AT.transition !== null ? (Us === 0 && (Us = Uh()), Us) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wh(e.type)), e) : 1;
}
function Wt(e, t, n, r) {
  if (50 < li)
    throw li = 0, wc = null, Error(P(185));
  Hi(e, n, r), (!(te & 2) || e !== $e) && (e === $e && (!(te & 2) && ($a |= n), be === 4 && _n(e, Ze)), yt(e, r), n === 1 && te === 0 && !(t.mode & 1) && (go = Ee() + 500, Oa && or()));
}
function yt(e, t) {
  var n = e.callbackNode;
  Aw(e, t);
  var r = Xs(e, e === $e ? Ze : 0);
  if (r === 0)
    n !== null && ep(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ep(n), t === 1)
      e.tag === 0 ? TT(Vp.bind(null, e)) : fg(Vp.bind(null, e)), gT(function() {
        !(te & 6) && or();
      }), n = null;
    else {
      switch (Hh(r)) {
        case 1:
          n = Yc;
          break;
        case 4:
          n = $h;
          break;
        case 16:
          n = Gs;
          break;
        case 536870912:
          n = jh;
          break;
        default:
          n = Gs;
      }
      n = cy(n, ry.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ry(e, t) {
  if (js = -1, Us = 0, te & 6)
    throw Error(P(327));
  var n = e.callbackNode;
  if (io() && e.callbackNode !== n)
    return null;
  var r = Xs(e, e === $e ? Ze : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = ha(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var i = iy();
    ($e !== e || Ze !== t) && (mn = null, go = Ee() + 500, gr(e, t));
    do
      try {
        HT();
        break;
      } catch (a) {
        oy(e, a);
      }
    while (1);
    ad(), fa.current = i, te = o, ze !== null ? t = 0 : ($e = null, Ze = 0, t = be);
  }
  if (t !== 0) {
    if (t === 2 && (o = Vu(e), o !== 0 && (r = o, t = Tc(e, o))), t === 1)
      throw n = zi, gr(e, 0), _n(e, r), yt(e, Ee()), n;
    if (t === 6)
      _n(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !jT(o) && (t = ha(e, r), t === 2 && (i = Vu(e), i !== 0 && (r = i, t = Tc(e, i))), t === 1))
        throw n = zi, gr(e, 0), _n(e, r), yt(e, Ee()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          dr(e, pt, mn);
          break;
        case 3:
          if (_n(e, r), (r & 130023424) === r && (t = Sd + 500 - Ee(), 10 < t)) {
            if (Xs(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              lt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ec(dr.bind(null, e, pt, mn), t);
            break;
          }
          dr(e, pt, mn);
          break;
        case 4:
          if (_n(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Vt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $T(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ec(dr.bind(null, e, pt, mn), r);
            break;
          }
          dr(e, pt, mn);
          break;
        case 5:
          dr(e, pt, mn);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return yt(e, Ee()), e.callbackNode === n ? ry.bind(null, e) : null;
}
function Tc(e, t) {
  var n = ai;
  return e.current.memoizedState.isDehydrated && (gr(e, t).flags |= 256), e = ha(e, t), e !== 2 && (t = pt, pt = n, t !== null && Ac(t)), e;
}
function Ac(e) {
  pt === null ? pt = e : pt.push.apply(pt, e);
}
function jT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Yt(i(), o))
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
function _n(e, t) {
  for (t &= ~Ad, t &= ~$a, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Vt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Vp(e) {
  if (te & 6)
    throw Error(P(327));
  io();
  var t = Xs(e, 0);
  if (!(t & 1))
    return yt(e, Ee()), null;
  var n = ha(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vu(e);
    r !== 0 && (t = r, n = Tc(e, r));
  }
  if (n === 1)
    throw n = zi, gr(e, 0), _n(e, t), yt(e, Ee()), n;
  if (n === 6)
    throw Error(P(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, dr(e, pt, mn), yt(e, Ee()), null;
}
function kd(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = n, te === 0 && (go = Ee() + 500, Oa && or());
  }
}
function Sr(e) {
  jn !== null && jn.tag === 0 && !(te & 6) && io();
  var t = te;
  te |= 1;
  var n = _t.transition, r = se;
  try {
    if (_t.transition = null, se = 1, e)
      return e();
  } finally {
    se = r, _t.transition = n, te = t, !(te & 6) && or();
  }
}
function Ed() {
  Tt = Xr.current, de(Xr);
}
function gr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, hT(n)), ze !== null)
    for (n = ze.return; n !== null; ) {
      var r = n;
      switch (od(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && na();
          break;
        case 3:
          mo(), de(ht), de(nt), pd();
          break;
        case 5:
          fd(r);
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
          ld(r.type._context);
          break;
        case 22:
        case 23:
          Ed();
      }
      n = n.return;
    }
  if ($e = e, ze = e = Gn(e.current, null), Ze = Tt = t, be = 0, zi = null, Ad = $a = Ar = 0, pt = ai = null, mr !== null) {
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
function oy(e, t) {
  do {
    var n = ze;
    try {
      if (ad(), _s.current = da, ca) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ca = !1;
      }
      if (Tr = 0, Re = De = me = null, ii = !1, Ni = 0, Td.current = null, n === null || n.return === null) {
        be = 1, zi = t, ze = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = Ze, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = Ip(s);
          if (v !== null) {
            v.flags &= -257, Op(v, s, a, i, t), v.mode & 1 && bp(i, u, t), t = v, l = u;
            var S = t.updateQueue;
            if (S === null) {
              var T = /* @__PURE__ */ new Set();
              T.add(l), t.updateQueue = T;
            } else
              S.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              bp(i, u, t), Nd();
              break e;
            }
            l = Error(P(426));
          }
        } else if (fe && a.mode & 1) {
          var D = Ip(s);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), Op(D, s, a, i, t), id(ho(l, a));
            break e;
          }
        }
        i = l = ho(l, a), be !== 4 && (be = 2), ai === null ? ai = [i] : ai.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = Hg(i, l, t);
              Mp(i, y);
              break e;
            case 1:
              a = l;
              var m = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Yn === null || !Yn.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = Fg(i, a, t);
                Mp(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ay(n);
    } catch (E) {
      t = E, ze === n && n !== null && (ze = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function iy() {
  var e = fa.current;
  return fa.current = da, e === null ? da : e;
}
function Nd() {
  (be === 0 || be === 3 || be === 2) && (be = 4), $e === null || !(Ar & 268435455) && !($a & 268435455) || _n($e, Ze);
}
function ha(e, t) {
  var n = te;
  te |= 2;
  var r = iy();
  ($e !== e || Ze !== t) && (mn = null, gr(e, t));
  do
    try {
      UT();
      break;
    } catch (o) {
      oy(e, o);
    }
  while (1);
  if (ad(), te = n, fa.current = r, ze !== null)
    throw Error(P(261));
  return $e = null, Ze = 0, be;
}
function UT() {
  for (; ze !== null; )
    sy(ze);
}
function HT() {
  for (; ze !== null && !fw(); )
    sy(ze);
}
function sy(e) {
  var t = uy(e.alternate, e, Tt);
  e.memoizedProps = e.pendingProps, t === null ? ay(e) : ze = t, Td.current = null;
}
function ay(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = OT(n, t), n !== null) {
        n.flags &= 32767, ze = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        be = 6, ze = null;
        return;
      }
    } else if (n = IT(n, t, Tt), n !== null) {
      ze = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ze = t;
      return;
    }
    ze = t = e;
  } while (t !== null);
  be === 0 && (be = 5);
}
function dr(e, t, n) {
  var r = se, o = _t.transition;
  try {
    _t.transition = null, se = 1, FT(e, t, n, r);
  } finally {
    _t.transition = o, se = r;
  }
  return null;
}
function FT(e, t, n, r) {
  do
    io();
  while (jn !== null);
  if (te & 6)
    throw Error(P(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(P(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Sw(e, i), e === $e && (ze = $e = null, Ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ss || (Ss = !0, cy(Gs, function() {
    return io(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = _t.transition, _t.transition = null;
    var s = se;
    se = 1;
    var a = te;
    te |= 4, Td.current = null, _T(e, n), ty(n, e), lT(Ju), Js = !!Xu, Ju = Xu = null, e.current = n, RT(n), pw(), te = a, se = s, _t.transition = i;
  } else
    e.current = n;
  if (Ss && (Ss = !1, jn = e, ma = o), i = e.pendingLanes, i === 0 && (Yn = null), gw(n.stateNode), yt(e, Ee()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (pa)
    throw pa = !1, e = vc, vc = null, e;
  return ma & 1 && e.tag !== 0 && io(), i = e.pendingLanes, i & 1 ? e === wc ? li++ : (li = 0, wc = e) : li = 0, or(), null;
}
function io() {
  if (jn !== null) {
    var e = Hh(ma), t = _t.transition, n = se;
    try {
      if (_t.transition = null, se = 16 > e ? 16 : e, jn === null)
        var r = !1;
      else {
        if (e = jn, jn = null, ma = 0, te & 6)
          throw Error(P(331));
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
                      si(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, B = f;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var p = c.sibling, v = c.return;
                      if (Jg(c), c === u) {
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
                    var D = T.sibling;
                    T.sibling = null, T = D;
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
                      si(9, i, i.return);
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
                        Ra(9, a);
                    }
                  } catch (E) {
                    Se(a, a.return, E);
                  }
                if (a === s) {
                  B = null;
                  break e;
                }
                var C = a.sibling;
                if (C !== null) {
                  C.return = a.return, B = C;
                  break e;
                }
                B = a.return;
              }
        }
        if (te = o, or(), un && typeof un.onPostCommitFiberRoot == "function")
          try {
            un.onPostCommitFiberRoot(La, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      se = n, _t.transition = t;
    }
  }
  return !1;
}
function Wp(e, t, n) {
  t = ho(n, t), t = Hg(e, t, 1), e = Wn(e, t, 1), t = lt(), e !== null && (Hi(e, 1, t), yt(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3)
    Wp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yn === null || !Yn.has(r))) {
          e = ho(n, e), e = Fg(t, e, 1), t = Wn(t, e, 1), e = lt(), t !== null && (Hi(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function BT(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = lt(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (Ze & n) === n && (be === 4 || be === 3 && (Ze & 130023424) === Ze && 500 > Ee() - Sd ? gr(e, 0) : Ad |= n), yt(e, t);
}
function ly(e, t) {
  t === 0 && (e.mode & 1 ? (t = fs, fs <<= 1, !(fs & 130023424) && (fs = 4194304)) : t = 1);
  var n = lt();
  e = kn(e, t), e !== null && (Hi(e, t, n), yt(e, n));
}
function KT(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ly(e, n);
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
      throw Error(P(314));
  }
  r !== null && r.delete(t), ly(e, n);
}
var uy;
uy = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ht.current)
      mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return mt = !1, bT(e, t, n);
      mt = !!(e.flags & 131072);
    }
  else
    mt = !1, fe && t.flags & 1048576 && pg(t, ia, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $s(e, t), e = t.pendingProps;
      var o = co(t, nt.current);
      oo(t, n), o = hd(null, t, r, e, o, n);
      var i = gd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gt(r) ? (i = !0, ra(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, cd(t), o.updater = _a, t.stateNode = o, o._reactInternals = t, ac(t, r, e, n), t = cc(null, t, r, !0, i, n)) : (t.tag = 0, fe && i && rd(t), st(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($s(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = WT(r), e = Ft(r, e), o) {
          case 0:
            t = uc(null, t, r, e, n);
            break e;
          case 1:
            t = Rp(null, t, r, e, n);
            break e;
          case 11:
            t = Pp(null, t, r, e, n);
            break e;
          case 14:
            t = _p(null, t, r, Ft(r.type, e), n);
            break e;
        }
        throw Error(P(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), uc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), Rp(e, t, r, o, n);
    case 3:
      e: {
        if (Vg(t), e === null)
          throw Error(P(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, wg(e, t), la(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ho(Error(P(423)), t), t = $p(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = ho(Error(P(424)), t), t = $p(e, t, r, n, o);
            break e;
          } else
            for (kt = Vn(t.stateNode.containerInfo.firstChild), Et = t, fe = !0, Kt = null, n = yg(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fo(), r === o) {
            t = En(e, t, n);
            break e;
          }
          st(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Tg(t), e === null && oc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, qu(r, o) ? s = null : i !== null && qu(r, i) && (t.flags |= 32), Zg(e, t), st(e, t, s, n), t.child;
    case 6:
      return e === null && oc(t), null;
    case 13:
      return Wg(e, t, n);
    case 4:
      return dd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = po(t, null, r, n) : st(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), Pp(e, t, r, o, n);
    case 7:
      return st(e, t, t.pendingProps, n), t.child;
    case 8:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ue(sa, r._currentValue), r._currentValue = s, i !== null)
          if (Yt(i.value, s)) {
            if (i.children === o.children && !ht.current) {
              t = En(e, t, n);
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
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), ic(
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
                  throw Error(P(341));
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), ic(s, n, t), s = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, oo(t, n), o = Rt(o), r = r(o), t.flags |= 1, st(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Ft(r, t.pendingProps), o = Ft(r.type, o), _p(e, t, r, o, n);
    case 15:
      return Bg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ft(r, o), $s(e, t), t.tag = 1, gt(r) ? (e = !0, ra(t)) : e = !1, oo(t, n), Ug(t, r, o), ac(t, r, o, n), cc(null, t, r, !0, e, n);
    case 19:
      return Yg(e, t, n);
    case 22:
      return Kg(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function cy(e, t) {
  return Rh(e, t);
}
function VT(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pt(e, t, n, r) {
  return new VT(e, t, n, r);
}
function Md(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function WT(e) {
  if (typeof e == "function")
    return Md(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zc)
      return 11;
    if (e === Vc)
      return 14;
  }
  return 2;
}
function Gn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Hs(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function")
    Md(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case Hr:
          return yr(n.children, o, i, t);
        case Kc:
          s = 8, o |= 8;
          break;
        case Du:
          return e = Pt(12, n, t, o | 2), e.elementType = Du, e.lanes = i, e;
        case bu:
          return e = Pt(13, n, t, o), e.elementType = bu, e.lanes = i, e;
        case Iu:
          return e = Pt(19, n, t, o), e.elementType = Iu, e.lanes = i, e;
        case Th:
          return ja(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case vh:
                s = 10;
                break e;
              case wh:
                s = 9;
                break e;
              case Zc:
                s = 11;
                break e;
              case Vc:
                s = 14;
                break e;
              case In:
                s = 16, r = null;
                break e;
            }
          throw Error(P(130, e == null ? e : typeof e, ""));
      }
  return t = Pt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function yr(e, t, n, r) {
  return e = Pt(7, e, r, t), e.lanes = n, e;
}
function ja(e, t, n, r) {
  return e = Pt(22, e, r, t), e.elementType = Th, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function fu(e, t, n) {
  return e = Pt(6, e, null, t), e.lanes = n, e;
}
function pu(e, t, n) {
  return t = Pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function YT(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Cd(e, t, n, r, o, i, s, a, l) {
  return e = new YT(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Pt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cd(i), e;
}
function QT(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ur, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function dy(e) {
  if (!e)
    return qn;
  e = e._reactInternals;
  e: {
    if (Mr(e) !== e || e.tag !== 1)
      throw Error(P(170));
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
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (gt(n))
      return dg(e, n, t);
  }
  return t;
}
function fy(e, t, n, r, o, i, s, a, l) {
  return e = Cd(n, r, !0, e, o, i, s, a, l), e.context = dy(null), n = e.current, r = lt(), o = Qn(n), i = Tn(r, o), i.callback = t ?? null, Wn(n, i, o), e.current.lanes = o, Hi(e, o, r), yt(e, r), e;
}
function Ua(e, t, n, r) {
  var o = t.current, i = lt(), s = Qn(o);
  return n = dy(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Wn(o, t, s), e !== null && (Wt(e, o, s, i), Ps(e, o, s)), s;
}
function ga(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zd(e, t) {
  Yp(e, t), (e = e.alternate) && Yp(e, t);
}
function GT() {
  return null;
}
var py = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ld(e) {
  this._internalRoot = e;
}
Ha.prototype.render = Ld.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(P(409));
  Ua(e, t, null, null);
};
Ha.prototype.unmount = Ld.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sr(function() {
      Ua(null, e, null, null);
    }), t[Sn] = null;
  }
};
function Ha(e) {
  this._internalRoot = e;
}
Ha.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Kh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pn.length && t !== 0 && t < Pn[n].priority; n++)
      ;
    Pn.splice(n, 0, e), n === 0 && Vh(e);
  }
};
function xd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Fa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Qp() {
}
function XT(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = ga(s);
        i.call(u);
      };
    }
    var s = fy(t, r, e, 0, null, !1, !1, "", Qp);
    return e._reactRootContainer = s, e[Sn] = s.current, Ti(e.nodeType === 8 ? e.parentNode : e), Sr(), s;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = ga(l);
      a.call(u);
    };
  }
  var l = Cd(e, 0, !1, null, null, !1, !1, "", Qp);
  return e._reactRootContainer = l, e[Sn] = l.current, Ti(e.nodeType === 8 ? e.parentNode : e), Sr(function() {
    Ua(t, l, n, r);
  }), l;
}
function Ba(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = ga(s);
        a.call(l);
      };
    }
    Ua(t, s, e, o);
  } else
    s = XT(n, t, e, o, r);
  return ga(s);
}
Fh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Go(t.pendingLanes);
        n !== 0 && (Qc(t, n | 1), yt(t, Ee()), !(te & 6) && (go = Ee() + 500, or()));
      }
      break;
    case 13:
      Sr(function() {
        var r = kn(e, 1);
        if (r !== null) {
          var o = lt();
          Wt(r, e, 1, o);
        }
      }), zd(e, 1);
  }
};
Gc = function(e) {
  if (e.tag === 13) {
    var t = kn(e, 134217728);
    if (t !== null) {
      var n = lt();
      Wt(t, e, 134217728, n);
    }
    zd(e, 134217728);
  }
};
Bh = function(e) {
  if (e.tag === 13) {
    var t = Qn(e), n = kn(e, t);
    if (n !== null) {
      var r = lt();
      Wt(n, e, t, r);
    }
    zd(e, t);
  }
};
Kh = function() {
  return se;
};
Zh = function(e, t) {
  var n = se;
  try {
    return se = e, t();
  } finally {
    se = n;
  }
};
Bu = function(e, t, n) {
  switch (t) {
    case "input":
      if (_u(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ia(r);
            if (!o)
              throw Error(P(90));
            Sh(r), _u(r, o);
          }
        }
      }
      break;
    case "textarea":
      Eh(e, n);
      break;
    case "select":
      t = n.value, t != null && eo(e, !!n.multiple, t, !1);
  }
};
Dh = kd;
bh = Sr;
var JT = { usingClientEntryPoint: !1, Events: [Bi, Zr, Ia, Lh, xh, kd] }, Fo = { findFiberByHostInstance: pr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qT = { bundleType: Fo.bundleType, version: Fo.version, rendererPackageName: Fo.rendererPackageName, rendererConfig: Fo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Cn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ph(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Fo.findFiberByHostInstance || GT, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ks.isDisabled && ks.supportsFiber)
    try {
      La = ks.inject(qT), un = ks;
    } catch {
    }
}
Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JT;
Ct.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xd(t))
    throw Error(P(200));
  return QT(e, t, null, n);
};
Ct.createRoot = function(e, t) {
  if (!xd(e))
    throw Error(P(299));
  var n = !1, r = "", o = py;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Cd(e, 1, !1, null, null, n, !1, r, o), e[Sn] = t.current, Ti(e.nodeType === 8 ? e.parentNode : e), new Ld(t);
};
Ct.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
  return e = Ph(t), e = e === null ? null : e.stateNode, e;
};
Ct.flushSync = function(e) {
  return Sr(e);
};
Ct.hydrate = function(e, t, n) {
  if (!Fa(t))
    throw Error(P(200));
  return Ba(null, e, t, !0, n);
};
Ct.hydrateRoot = function(e, t, n) {
  if (!xd(e))
    throw Error(P(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = py;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = fy(t, null, e, 1, n ?? null, o, !1, i, s), e[Sn] = t.current, Ti(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Ha(t);
};
Ct.render = function(e, t, n) {
  if (!Fa(t))
    throw Error(P(200));
  return Ba(null, e, t, !1, n);
};
Ct.unmountComponentAtNode = function(e) {
  if (!Fa(e))
    throw Error(P(40));
  return e._reactRootContainer ? (Sr(function() {
    Ba(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Sn] = null;
    });
  }), !0) : !1;
};
Ct.unstable_batchedUpdates = kd;
Ct.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Fa(n))
    throw Error(P(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(P(38));
  return Ba(e, t, n, !1, r);
};
Ct.version = "18.3.1-next-f1338f8080-20240426";
function my() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(my);
    } catch (e) {
      console.error(e);
    }
}
my(), mh.exports = Ct;
var e1 = mh.exports, hy, Gp = e1;
hy = Gp.createRoot, Gp.hydrateRoot;
function t1(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Xp = "$$material";
function Ve() {
  return Ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ve.apply(null, arguments);
}
function Ka(e, t) {
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
}(), et = "-ms-", ya = "-moz-", re = "-webkit-", gy = "comm", Dd = "rule", bd = "decl", s1 = "@import", yy = "@keyframes", a1 = "@layer", l1 = Math.abs, Za = String.fromCharCode, u1 = Object.assign;
function c1(e, t) {
  return Be(e, 0) ^ 45 ? (((t << 2 ^ Be(e, 0)) << 2 ^ Be(e, 1)) << 2 ^ Be(e, 2)) << 2 ^ Be(e, 3) : 0;
}
function vy(e) {
  return e.trim();
}
function d1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, n) {
  return e.replace(t, n);
}
function Sc(e, t) {
  return e.indexOf(t);
}
function Be(e, t) {
  return e.charCodeAt(t) | 0;
}
function Li(e, t, n) {
  return e.slice(t, n);
}
function on(e) {
  return e.length;
}
function Id(e) {
  return e.length;
}
function Es(e, t) {
  return t.push(e), e;
}
function f1(e, t) {
  return e.map(t).join("");
}
var Va = 1, yo = 1, wy = 0, vt = 0, Ce = 0, No = "";
function Wa(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Va, column: yo, length: s, return: "" };
}
function Bo(e, t) {
  return u1(Wa("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function p1() {
  return Ce;
}
function m1() {
  return Ce = vt > 0 ? Be(No, --vt) : 0, yo--, Ce === 10 && (yo = 1, Va--), Ce;
}
function Nt() {
  return Ce = vt < wy ? Be(No, vt++) : 0, yo++, Ce === 10 && (yo = 1, Va++), Ce;
}
function dn() {
  return Be(No, vt);
}
function Fs() {
  return vt;
}
function Zi(e, t) {
  return Li(No, e, t);
}
function xi(e) {
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
function Ty(e) {
  return Va = yo = 1, wy = on(No = e), vt = 0, [];
}
function Ay(e) {
  return No = "", e;
}
function Bs(e) {
  return vy(Zi(vt - 1, kc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function h1(e) {
  for (; (Ce = dn()) && Ce < 33; )
    Nt();
  return xi(e) > 2 || xi(Ce) > 3 ? "" : " ";
}
function g1(e, t) {
  for (; --t && Nt() && !(Ce < 48 || Ce > 102 || Ce > 57 && Ce < 65 || Ce > 70 && Ce < 97); )
    ;
  return Zi(e, Fs() + (t < 6 && dn() == 32 && Nt() == 32));
}
function kc(e) {
  for (; Nt(); )
    switch (Ce) {
      case e:
        return vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && kc(Ce);
        break;
      case 40:
        e === 41 && kc(e);
        break;
      case 92:
        Nt();
        break;
    }
  return vt;
}
function y1(e, t) {
  for (; Nt() && e + Ce !== 47 + 10; )
    if (e + Ce === 42 + 42 && dn() === 47)
      break;
  return "/*" + Zi(t, vt - 1) + "*" + Za(e === 47 ? e : Nt());
}
function v1(e) {
  for (; !xi(dn()); )
    Nt();
  return Zi(e, vt);
}
function w1(e) {
  return Ay(Ks("", null, null, null, [""], e = Ty(e), 0, [0], e));
}
function Ks(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, c = 0, f = s, p = 0, v = 0, S = 0, T = 1, D = 1, y = 1, m = 0, h = "", C = o, E = i, M = r, A = h; D; )
    switch (S = m, m = Nt()) {
      case 40:
        if (S != 108 && Be(A, f - 1) == 58) {
          Sc(A += oe(Bs(m), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Bs(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += h1(S);
        break;
      case 92:
        A += g1(Fs() - 1, 7);
        continue;
      case 47:
        switch (dn()) {
          case 42:
          case 47:
            Es(T1(y1(Nt(), Fs()), t, n), l);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * T:
        a[u++] = on(A) * y;
      case 125 * T:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            D = 0;
          case 59 + c:
            y == -1 && (A = oe(A, /\f/g, "")), v > 0 && on(A) - f && Es(v > 32 ? qp(A + ";", r, n, f - 1) : qp(oe(A, " ", "") + ";", r, n, f - 2), l);
            break;
          case 59:
            A += ";";
          default:
            if (Es(M = Jp(A, t, n, u, c, o, a, h, C = [], E = [], f), i), m === 123)
              if (c === 0)
                Ks(A, t, M, M, C, i, f, a, E);
              else
                switch (p === 99 && Be(A, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ks(e, M, M, r && Es(Jp(e, M, M, 0, 0, o, a, h, o, C = [], f), E), o, E, f, a, r ? C : E);
                    break;
                  default:
                    Ks(A, M, M, M, [""], E, 0, a, E);
                }
        }
        u = c = v = 0, T = y = 1, h = A = "", f = s;
        break;
      case 58:
        f = 1 + on(A), v = S;
      default:
        if (T < 1) {
          if (m == 123)
            --T;
          else if (m == 125 && T++ == 0 && m1() == 125)
            continue;
        }
        switch (A += Za(m), m * T) {
          case 38:
            y = c > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            a[u++] = (on(A) - 1) * y, y = 1;
            break;
          case 64:
            dn() === 45 && (A += Bs(Nt())), p = dn(), c = f = on(h = A += v1(Fs())), m++;
            break;
          case 45:
            S === 45 && on(A) == 2 && (T = 0);
        }
    }
  return i;
}
function Jp(e, t, n, r, o, i, s, a, l, u, c) {
  for (var f = o - 1, p = o === 0 ? i : [""], v = Id(p), S = 0, T = 0, D = 0; S < r; ++S)
    for (var y = 0, m = Li(e, f + 1, f = l1(T = s[S])), h = e; y < v; ++y)
      (h = vy(T > 0 ? p[y] + " " + m : oe(m, /&\f/g, p[y]))) && (l[D++] = h);
  return Wa(e, t, n, o === 0 ? Dd : a, l, u, c);
}
function T1(e, t, n) {
  return Wa(e, t, n, gy, Za(p1()), Li(e, 2, -2), 0);
}
function qp(e, t, n, r) {
  return Wa(e, t, n, bd, Li(e, 0, r), Li(e, r + 1, -1), r);
}
function so(e, t) {
  for (var n = "", r = Id(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function A1(e, t, n, r) {
  switch (e.type) {
    case a1:
      if (e.children.length)
        break;
    case s1:
    case bd:
      return e.return = e.return || e.value;
    case gy:
      return "";
    case yy:
      return e.return = e.value + "{" + so(e.children, r) + "}";
    case Dd:
      e.value = e.props.join(",");
  }
  return on(n = so(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function S1(e) {
  var t = Id(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function k1(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Sy(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var E1 = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = dn(), o === 38 && i === 12 && (n[r] = 1), !xi(i); )
    Nt();
  return Zi(t, vt);
}, N1 = function(t, n) {
  var r = -1, o = 44;
  do
    switch (xi(o)) {
      case 0:
        o === 38 && dn() === 12 && (n[r] = 1), t[r] += E1(vt - 1, n, r);
        break;
      case 2:
        t[r] += Bs(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = dn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Za(o);
    }
  while (o = Nt());
  return t;
}, M1 = function(t, n) {
  return Ay(N1(Ty(t), n));
}, em = /* @__PURE__ */ new WeakMap(), C1 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !em.get(r)) && !o) {
      em.set(t, !0);
      for (var i = [], s = M1(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
        for (var c = 0; c < a.length; c++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
    }
  }
}, z1 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ky(e, t) {
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
      return re + e + ya + e + et + e + e;
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
        switch (Be(e, t + 1)) {
          case 109:
            if (Be(e, t + 4) !== 45)
              break;
          case 102:
            return oe(e, /(.+:)(.+)-([^]+)/, "$1" + re + "$2-$3$1" + ya + (Be(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Sc(e, "stretch") ? ky(oe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Be(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Be(e, on(e) - 3 - (~Sc(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + re) + e;
        case 101:
          return oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + re + (Be(e, 14) === 45 ? "inline-" : "") + "box$3$1" + re + "$2$3$1" + et + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Be(e, t + 11)) {
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
var L1 = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case bd:
        t.return = ky(t.value, t.length);
        break;
      case yy:
        return so([Bo(t, {
          value: oe(t.value, "@", "@" + re)
        })], o);
      case Dd:
        if (t.length)
          return f1(t.props, function(i) {
            switch (d1(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return so([Bo(t, {
                  props: [oe(i, /:(read-\w+)/, ":" + ya + "$1")]
                })], o);
              case "::placeholder":
                return so([Bo(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + re + "input-$1")]
                }), Bo(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + ya + "$1")]
                }), Bo(t, {
                  props: [oe(i, /:(plac\w+)/, et + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, x1 = [L1], D1 = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(T) {
      var D = T.getAttribute("data-emotion");
      D.indexOf(" ") !== -1 && (document.head.appendChild(T), T.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || x1, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(T) {
      for (var D = T.getAttribute("data-emotion").split(" "), y = 1; y < D.length; y++)
        i[D[y]] = !0;
      a.push(T);
    }
  );
  var l, u = [C1, z1];
  {
    var c, f = [A1, k1(function(T) {
      c.insert(T);
    })], p = S1(u.concat(o, f)), v = function(D) {
      return so(w1(D), p);
    };
    l = function(D, y, m, h) {
      c = m, v(D ? D + "{" + y.styles + "}" : y.styles), h && (S.inserted[y.name] = !0);
    };
  }
  var S = {
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
  return S.sheet.hydrate(a), S;
}, Ey = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue = typeof Symbol == "function" && Symbol.for, Od = Ue ? Symbol.for("react.element") : 60103, Pd = Ue ? Symbol.for("react.portal") : 60106, Ya = Ue ? Symbol.for("react.fragment") : 60107, Qa = Ue ? Symbol.for("react.strict_mode") : 60108, Ga = Ue ? Symbol.for("react.profiler") : 60114, Xa = Ue ? Symbol.for("react.provider") : 60109, Ja = Ue ? Symbol.for("react.context") : 60110, _d = Ue ? Symbol.for("react.async_mode") : 60111, qa = Ue ? Symbol.for("react.concurrent_mode") : 60111, el = Ue ? Symbol.for("react.forward_ref") : 60112, tl = Ue ? Symbol.for("react.suspense") : 60113, b1 = Ue ? Symbol.for("react.suspense_list") : 60120, nl = Ue ? Symbol.for("react.memo") : 60115, rl = Ue ? Symbol.for("react.lazy") : 60116, I1 = Ue ? Symbol.for("react.block") : 60121, O1 = Ue ? Symbol.for("react.fundamental") : 60117, P1 = Ue ? Symbol.for("react.responder") : 60118, _1 = Ue ? Symbol.for("react.scope") : 60119;
function Lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Od:
        switch (e = e.type, e) {
          case _d:
          case qa:
          case Ya:
          case Ga:
          case Qa:
          case tl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ja:
              case el:
              case rl:
              case nl:
              case Xa:
                return e;
              default:
                return t;
            }
        }
      case Pd:
        return t;
    }
  }
}
function Ny(e) {
  return Lt(e) === qa;
}
le.AsyncMode = _d;
le.ConcurrentMode = qa;
le.ContextConsumer = Ja;
le.ContextProvider = Xa;
le.Element = Od;
le.ForwardRef = el;
le.Fragment = Ya;
le.Lazy = rl;
le.Memo = nl;
le.Portal = Pd;
le.Profiler = Ga;
le.StrictMode = Qa;
le.Suspense = tl;
le.isAsyncMode = function(e) {
  return Ny(e) || Lt(e) === _d;
};
le.isConcurrentMode = Ny;
le.isContextConsumer = function(e) {
  return Lt(e) === Ja;
};
le.isContextProvider = function(e) {
  return Lt(e) === Xa;
};
le.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Od;
};
le.isForwardRef = function(e) {
  return Lt(e) === el;
};
le.isFragment = function(e) {
  return Lt(e) === Ya;
};
le.isLazy = function(e) {
  return Lt(e) === rl;
};
le.isMemo = function(e) {
  return Lt(e) === nl;
};
le.isPortal = function(e) {
  return Lt(e) === Pd;
};
le.isProfiler = function(e) {
  return Lt(e) === Ga;
};
le.isStrictMode = function(e) {
  return Lt(e) === Qa;
};
le.isSuspense = function(e) {
  return Lt(e) === tl;
};
le.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ya || e === qa || e === Ga || e === Qa || e === tl || e === b1 || typeof e == "object" && e !== null && (e.$$typeof === rl || e.$$typeof === nl || e.$$typeof === Xa || e.$$typeof === Ja || e.$$typeof === el || e.$$typeof === O1 || e.$$typeof === P1 || e.$$typeof === _1 || e.$$typeof === I1);
};
le.typeOf = Lt;
Ey.exports = le;
var R1 = Ey.exports, My = R1, $1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, j1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Cy = {};
Cy[My.ForwardRef] = $1;
Cy[My.Memo] = j1;
var U1 = !0;
function zy(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Rd = function(t, n, r) {
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
  U1 === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, $d = function(t, n, r) {
  Rd(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function H1(e) {
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
var F1 = {
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
}, B1 = !1, K1 = /[A-Z]|^ms/g, Z1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ly = function(t) {
  return t.charCodeAt(1) === 45;
}, tm = function(t) {
  return t != null && typeof t != "boolean";
}, mu = /* @__PURE__ */ Sy(function(e) {
  return Ly(e) ? e : e.replace(K1, "-$&").toLowerCase();
}), nm = function(t, n) {
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
  return F1[t] !== 1 && !Ly(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, V1 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Di(e, t, n) {
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
        return sn = l, Di(e, t, u);
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
      r += Di(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : tm(a) && (r += mu(i) + ":" + nm(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && B1)
          throw new Error(V1);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            tm(s[l]) && (r += mu(i) + ":" + nm(i, s[l]) + ";");
        else {
          var u = Di(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += mu(i) + ":" + u + ";";
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
var rm = /label:\s*([^\s;{]+)\s*(;|$)/g, sn;
function ol(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  sn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Di(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Di(n, t, e[a]), r) {
      var l = i;
      o += l[a];
    }
  rm.lastIndex = 0;
  for (var u = "", c; (c = rm.exec(o)) !== null; )
    u += "-" + c[1];
  var f = H1(o) + u;
  return {
    name: f,
    styles: o,
    next: sn
  };
}
var Y1 = function(t) {
  return t();
}, xy = Lu["useInsertionEffect"] ? Lu["useInsertionEffect"] : !1, Dy = xy || Y1, om = xy || k.useLayoutEffect, Q1 = !1, by = /* @__PURE__ */ k.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ D1({
    key: "css"
  }) : null
);
by.Provider;
var jd = function(t) {
  return /* @__PURE__ */ k.forwardRef(function(n, r) {
    var o = k.useContext(by);
    return t(n, o, r);
  });
}, Vi = /* @__PURE__ */ k.createContext({}), Ud = {}.hasOwnProperty, Ec = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", G1 = function(t, n) {
  var r = {};
  for (var o in n)
    Ud.call(n, o) && (r[o] = n[o]);
  return r[Ec] = t, r;
}, X1 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Rd(n, r, o), Dy(function() {
    return $d(n, r, o);
  }), null;
}, J1 = /* @__PURE__ */ jd(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Ec], i = [r], s = "";
  typeof e.className == "string" ? s = zy(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = ol(i, void 0, k.useContext(Vi));
  s += t.key + "-" + a.name;
  var l = {};
  for (var u in e)
    Ud.call(e, u) && u !== "css" && u !== Ec && !Q1 && (l[u] = e[u]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(X1, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ k.createElement(o, l));
}), q1 = J1, hu = { exports: {} }, im;
function eA() {
  return im || (im = 1, function(e) {
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
  }(hu)), hu.exports;
}
eA();
var sm = function(t, n) {
  var r = arguments;
  if (n == null || !Ud.call(n, "css"))
    return k.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = q1, i[1] = G1(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return k.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(sm || (sm = {}));
var tA = /* @__PURE__ */ jd(function(e, t) {
  var n = e.styles, r = ol([n], void 0, k.useContext(Vi)), o = k.useRef();
  return om(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), om(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && $d(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
}), nA = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, rA = /* @__PURE__ */ Sy(
  function(e) {
    return nA.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), oA = !1, iA = rA, sA = function(t) {
  return t !== "theme";
}, am = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? iA : sA;
}, lm = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, aA = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Rd(n, r, o), Dy(function() {
    return $d(n, r, o);
  }), null;
}, lA = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = lm(t, n, r), l = a || am(o), u = !l("as");
  return function() {
    var c = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      f.push.apply(f, c);
    else {
      var p = c[0];
      f.push(p[0]);
      for (var v = c.length, S = 1; S < v; S++)
        f.push(c[S], p[S]);
    }
    var T = jd(function(D, y, m) {
      var h = u && D.as || o, C = "", E = [], M = D;
      if (D.theme == null) {
        M = {};
        for (var A in D)
          M[A] = D[A];
        M.theme = k.useContext(Vi);
      }
      typeof D.className == "string" ? C = zy(y.registered, E, D.className) : D.className != null && (C = D.className + " ");
      var x = ol(f.concat(E), y.registered, M);
      C += y.key + "-" + x.name, s !== void 0 && (C += " " + s);
      var F = u && a === void 0 ? am(h) : l, b = {};
      for (var j in D)
        u && j === "as" || F(j) && (b[j] = D[j]);
      return b.className = C, m && (b.ref = m), /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(aA, {
        cache: y,
        serialized: x,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ k.createElement(h, b));
    });
    return T.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", T.defaultProps = t.defaultProps, T.__emotion_real = T, T.__emotion_base = o, T.__emotion_styles = f, T.__emotion_forwardProp = a, Object.defineProperty(T, "toString", {
      value: function() {
        return s === void 0 && oA ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), T.withComponent = function(D, y) {
      var m = e(D, Ve({}, n, y, {
        shouldForwardProp: lm(T, y, !0)
      }));
      return m.apply(void 0, f);
    }, T;
  };
}, uA = [
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
], um = lA.bind(null);
uA.forEach(function(e) {
  um[e] = um(e);
});
function cA(e) {
  return e == null || Object.keys(e).length === 0;
}
function dA(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ d(tA, {
    styles: typeof t == "function" ? (o) => t(cA(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const cm = [];
function fA(e) {
  return cm[0] = e, ol(cm);
}
function $r(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Iy(e) {
  if (/* @__PURE__ */ k.isValidElement(e) || !$r(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Iy(e[n]);
  }), t;
}
function va(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? Ve({}, e) : e;
  return $r(e) && $r(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ k.isValidElement(t[o]) ? r[o] = t[o] : $r(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && $r(e[o]) ? r[o] = va(e[o], t[o], n) : n.clone ? r[o] = $r(t[o]) ? Iy(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const pA = ["values", "unit", "step"], mA = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => Ve({}, n, {
    [r.key]: r.val
  }), {});
};
function hA(e) {
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
  } = e, o = Ka(e, pA), i = mA(t), s = Object.keys(i);
  function a(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, v) {
    const S = s.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(S !== -1 && typeof t[s[S]] == "number" ? t[s[S]] : v) - r / 100}${n})`;
  }
  function c(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : a(p);
  }
  function f(p) {
    const v = s.indexOf(p);
    return v === 0 ? a(s[1]) : v === s.length - 1 ? l(s[v]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return Ve({
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
const gA = {
  borderRadius: 4
}, yA = gA;
function ui(e, t) {
  return t ? va(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Hd = {
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
}, dm = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Hd[e]}px)`
};
function Nn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || dm;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || dm;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Hd).indexOf(a) !== -1) {
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
function vA(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function fm(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Oy(e) {
  if (typeof e != "string")
    throw new Error(t1(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function il(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function wa(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = il(e, n) || r, t && (o = t(o, r, e)), o;
}
function Ne(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, u = il(l, r) || {};
    return Nn(s, a, (f) => {
      let p = wa(u, o, f);
      return f === p && typeof f == "string" && (p = wa(u, o, `${t}${f === "default" ? "" : Oy(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function wA(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const TA = {
  m: "margin",
  p: "padding"
}, AA = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, pm = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, SA = wA((e) => {
  if (e.length > 2)
    if (pm[e])
      e = pm[e];
    else
      return [e];
  const [t, n] = e.split(""), r = TA[t], o = AA[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Fd = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Bd = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Fd, ...Bd];
function Wi(e, t, n, r) {
  var o;
  const i = (o = il(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function Py(e) {
  return Wi(e, "spacing", 8);
}
function Yi(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function kA(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Yi(t, n), r), {});
}
function EA(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = SA(n), i = kA(o, r), s = e[n];
  return Nn(e, s, i);
}
function _y(e, t) {
  const n = Py(e.theme);
  return Object.keys(e).map((r) => EA(e, t, r, n)).reduce(ui, {});
}
function Te(e) {
  return _y(e, Fd);
}
Te.propTypes = {};
Te.filterProps = Fd;
function Ae(e) {
  return _y(e, Bd);
}
Ae.propTypes = {};
Ae.filterProps = Bd;
function NA(e = 8) {
  if (e.mui)
    return e;
  const t = Py({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function sl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? ui(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Ot(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function jt(e, t) {
  return Ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const MA = jt("border", Ot), CA = jt("borderTop", Ot), zA = jt("borderRight", Ot), LA = jt("borderBottom", Ot), xA = jt("borderLeft", Ot), DA = jt("borderColor"), bA = jt("borderTopColor"), IA = jt("borderRightColor"), OA = jt("borderBottomColor"), PA = jt("borderLeftColor"), _A = jt("outline", Ot), RA = jt("outlineColor"), al = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Wi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Yi(t, r)
    });
    return Nn(e, e.borderRadius, n);
  }
  return null;
};
al.propTypes = {};
al.filterProps = ["borderRadius"];
sl(MA, CA, zA, LA, xA, DA, bA, IA, OA, PA, al, _A, RA);
const ll = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Wi(e.theme, "spacing", 8), n = (r) => ({
      gap: Yi(t, r)
    });
    return Nn(e, e.gap, n);
  }
  return null;
};
ll.propTypes = {};
ll.filterProps = ["gap"];
const ul = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Wi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Yi(t, r)
    });
    return Nn(e, e.columnGap, n);
  }
  return null;
};
ul.propTypes = {};
ul.filterProps = ["columnGap"];
const cl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Wi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Yi(t, r)
    });
    return Nn(e, e.rowGap, n);
  }
  return null;
};
cl.propTypes = {};
cl.filterProps = ["rowGap"];
const $A = Ne({
  prop: "gridColumn"
}), jA = Ne({
  prop: "gridRow"
}), UA = Ne({
  prop: "gridAutoFlow"
}), HA = Ne({
  prop: "gridAutoColumns"
}), FA = Ne({
  prop: "gridAutoRows"
}), BA = Ne({
  prop: "gridTemplateColumns"
}), KA = Ne({
  prop: "gridTemplateRows"
}), ZA = Ne({
  prop: "gridTemplateAreas"
}), VA = Ne({
  prop: "gridArea"
});
sl(ll, ul, cl, $A, jA, UA, HA, FA, BA, KA, ZA, VA);
function ao(e, t) {
  return t === "grey" ? t : e;
}
const WA = Ne({
  prop: "color",
  themeKey: "palette",
  transform: ao
}), YA = Ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ao
}), QA = Ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ao
});
sl(WA, YA, QA);
function At(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const GA = Ne({
  prop: "width",
  transform: At
}), Kd = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Hd[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: At(n)
      };
    };
    return Nn(e, e.maxWidth, t);
  }
  return null;
};
Kd.filterProps = ["maxWidth"];
const XA = Ne({
  prop: "minWidth",
  transform: At
}), JA = Ne({
  prop: "height",
  transform: At
}), qA = Ne({
  prop: "maxHeight",
  transform: At
}), eS = Ne({
  prop: "minHeight",
  transform: At
});
Ne({
  prop: "size",
  cssProperty: "width",
  transform: At
});
Ne({
  prop: "size",
  cssProperty: "height",
  transform: At
});
const tS = Ne({
  prop: "boxSizing"
});
sl(GA, Kd, XA, JA, qA, eS, tS);
const nS = {
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
    style: al
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ao
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ao
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ao
  },
  // spacing
  p: {
    style: Ae
  },
  pt: {
    style: Ae
  },
  pr: {
    style: Ae
  },
  pb: {
    style: Ae
  },
  pl: {
    style: Ae
  },
  px: {
    style: Ae
  },
  py: {
    style: Ae
  },
  padding: {
    style: Ae
  },
  paddingTop: {
    style: Ae
  },
  paddingRight: {
    style: Ae
  },
  paddingBottom: {
    style: Ae
  },
  paddingLeft: {
    style: Ae
  },
  paddingX: {
    style: Ae
  },
  paddingY: {
    style: Ae
  },
  paddingInline: {
    style: Ae
  },
  paddingInlineStart: {
    style: Ae
  },
  paddingInlineEnd: {
    style: Ae
  },
  paddingBlock: {
    style: Ae
  },
  paddingBlockStart: {
    style: Ae
  },
  paddingBlockEnd: {
    style: Ae
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
    style: ll
  },
  rowGap: {
    style: cl
  },
  columnGap: {
    style: ul
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
    transform: At
  },
  maxWidth: {
    style: Kd
  },
  minWidth: {
    transform: At
  },
  height: {
    transform: At
  },
  maxHeight: {
    transform: At
  },
  minHeight: {
    transform: At
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
}, Ry = nS;
function rS(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function oS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function iS() {
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
    const p = il(o, u) || {};
    return f ? f(s) : Nn(s, r, (S) => {
      let T = wa(p, c, S);
      return S === T && typeof S == "string" && (T = wa(p, c, `${n}${S === "default" ? "" : Oy(S)}`, S)), l === !1 ? T : {
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
    const a = (r = i.unstable_sxConfig) != null ? r : Ry;
    function l(u) {
      let c = u;
      if (typeof u == "function")
        c = u(i);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const f = vA(i.breakpoints), p = Object.keys(f);
      let v = f;
      return Object.keys(c).forEach((S) => {
        const T = oS(c[S], i);
        if (T != null)
          if (typeof T == "object")
            if (a[S])
              v = ui(v, e(S, T, i, a));
            else {
              const D = Nn({
                theme: i
              }, T, (y) => ({
                [S]: y
              }));
              rS(D, T) ? v[S] = t({
                sx: T,
                theme: i,
                nested: !0
              }) : v = ui(v, D);
            }
          else
            v = ui(v, e(S, T, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": fm(p, v)
      } : fm(p, v);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const $y = iS();
$y.filterProps = ["sx"];
const sS = $y;
function aS(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const lS = ["breakpoints", "palette", "spacing", "shape"];
function uS(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = Ka(e, lS), a = hA(n), l = NA(o);
  let u = va({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Ve({
      mode: "light"
    }, r),
    spacing: l,
    shape: Ve({}, yA, i)
  }, s);
  return u.applyStyles = aS, u = t.reduce((c, f) => va(c, f), u), u.unstable_sxConfig = Ve({}, Ry, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return sS({
      sx: f,
      theme: this
    });
  }, u;
}
function cS(e) {
  return Object.keys(e).length === 0;
}
function Zd(e = null) {
  const t = k.useContext(Vi);
  return !t || cS(t) ? e : t;
}
const dS = uS();
function fS(e = dS) {
  return Zd(e);
}
function gu(e) {
  const t = fA(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function pS({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = fS(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => gu(typeof s == "function" ? s(o) : s)) : i = gu(i)), /* @__PURE__ */ d(dA, {
    styles: i
  });
}
const mS = typeof window < "u" ? k.useLayoutEffect : k.useEffect, hS = mS;
let mm = 0;
function gS(e) {
  const [t, n] = k.useState(e), r = e || t;
  return k.useEffect(() => {
    t == null && (mm += 1, n(`mui-${mm}`));
  }, [t]), r;
}
const hm = Lu["useId".toString()];
function yS(e) {
  if (hm !== void 0) {
    const t = hm();
    return e ?? t;
  }
  return gS(e);
}
const vS = /* @__PURE__ */ k.createContext(null), jy = vS;
function Uy() {
  return k.useContext(jy);
}
const wS = typeof Symbol == "function" && Symbol.for, TS = wS ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function AS(e, t) {
  return typeof t == "function" ? t(e) : Ve({}, e, t);
}
function SS(e) {
  const {
    children: t,
    theme: n
  } = e, r = Uy(), o = k.useMemo(() => {
    const i = r === null ? n : AS(r, n);
    return i != null && (i[TS] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ d(jy.Provider, {
    value: o,
    children: t
  });
}
const kS = ["value"], ES = /* @__PURE__ */ k.createContext();
function NS(e) {
  let {
    value: t
  } = e, n = Ka(e, kS);
  return /* @__PURE__ */ d(ES.Provider, Ve({
    value: t ?? !0
  }, n));
}
const MS = /* @__PURE__ */ k.createContext(void 0);
function CS({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ d(MS.Provider, {
    value: e,
    children: t
  });
}
function zS(e) {
  const t = Zd(), n = yS() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, hS(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ d(pS, {
    styles: o
  }) : null;
}
const gm = {};
function ym(e, t, n, r = !1) {
  return k.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? Ve({}, t, {
        [e]: i
      }) : i;
      return r ? () => s : s;
    }
    return e ? Ve({}, t, {
      [e]: n
    }) : Ve({}, t, n);
  }, [e, t, n, r]);
}
function LS(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Zd(gm), i = Uy() || gm, s = ym(r, o, n), a = ym(r, i, n, !0), l = s.direction === "rtl", u = zS(s);
  return /* @__PURE__ */ d(SS, {
    theme: a,
    children: /* @__PURE__ */ d(Vi.Provider, {
      value: s,
      children: /* @__PURE__ */ d(NS, {
        value: l,
        children: /* @__PURE__ */ N(CS, {
          value: s == null ? void 0 : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const xS = ["theme"];
function DS(e) {
  let {
    theme: t
  } = e, n = Ka(e, xS);
  const r = t[Xp];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = Ve({}, r, {
    vars: null
  }) : t && !t.vars && (o = Ve({}, t, {
    vars: null
  }))), /* @__PURE__ */ d(LS, Ve({}, n, {
    themeId: r ? Xp : void 0,
    theme: o
  }));
}
const Nc = "[CHMarketingBuilder]", bS = {
  info: "color:#1565c0;font-weight:bold",
  resolved: "color:#2e7d32;font-weight:bold",
  missing: "color:#e65100;font-weight:bold",
  fallback: "color:#f57c00;font-weight:bold",
  error: "color:#c62828;font-weight:bold"
}, Hy = {
  info: "INFO",
  resolved: "OK",
  missing: "MISSING",
  fallback: "FALLBACK",
  error: "ERROR"
};
let ci = [];
function IS(e) {
  return e instanceof Error ? e.message : e == null ? "" : String(e);
}
function OS(e, t, n, r) {
  const o = Hy[e], i = bS[e];
  console.log(r ? `%c${Nc} %c${o}%c ${t}: ${n}
  → ${r}` : `%c${Nc} %c${o}%c ${t}: ${n}`, "font-weight:bold", i, "color:inherit");
}
function PS() {
  ci = [];
}
function Qi(e, t, n, r) {
  const o = IS(n);
  ci.push({ level: e, resource: t, detail: o, hint: r }), OS(e, t, o, r);
}
function ae(e, t) {
  Qi("info", e, t);
}
function Z(e, t) {
  Qi("resolved", e, t);
}
function je(e, t, n) {
  Qi("missing", e, t, n);
}
function _S(e, t, n) {
  Qi("fallback", e, t, n);
}
function Un(e, t, n) {
  Qi("error", e, t, n);
}
function vm(e) {
  const t = ci.filter((n) => n.level !== "resolved" && n.level !== "info");
  console.groupCollapsed(
    `%c${Nc} Load summary — ${e.builderMode} builder (${t.length} note${t.length === 1 ? "" : "s"})`,
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
  }), ci.length > 0 && console.table(
    ci.map((n) => ({
      Level: Hy[n.level],
      Resource: n.resource,
      Detail: n.detail,
      Hint: n.hint ?? ""
    }))
  ), console.groupEnd();
}
function kr(e) {
  if (typeof e != "string" || !e.trim())
    return;
  const t = e.match(/\/entities\/(\d+)(?:\?|$|\/)/);
  if (!t)
    return;
  const n = Number(t[1]);
  return Number.isFinite(n) ? n : void 0;
}
function Er(e) {
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
    const o = kr(r.href) ?? kr(r.entity);
    o != null && t.push(o);
  }
  return t;
}
function dl(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = t.id ?? t.entityId;
  if (typeof n == "number" && Number.isFinite(n))
    return [n];
  const r = t.parent;
  if (r != null && typeof r == "object") {
    const s = r, a = kr(s.href) ?? kr(s.entity);
    if (a != null)
      return [a];
  }
  const o = Er(t.parents);
  if (o.length > 0)
    return o;
  const i = Er(t.children);
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
function Vd(e, ...t) {
  if (!e)
    return [];
  for (const n of t) {
    const r = e[n];
    if (r != null) {
      if (Array.isArray(r)) {
        const o = Er(r);
        if (o.length > 0)
          return o;
        continue;
      }
      if (typeof r == "object") {
        const o = dl(r);
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
async function Qt(e, t, n, r) {
  var s;
  const o = Vd(r, n);
  if (o.length > 0)
    return o;
  if (!((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    return [];
  const i = rt(r, n);
  if (!i)
    return [];
  try {
    const a = await e.raw.getAsync(i);
    return !a.isSuccessStatusCode || a.content == null ? [] : dl(a.content);
  } catch {
    return [];
  }
}
async function bi(e, t, n, r) {
  const o = [...new Set(r)];
  for (const i of o) {
    const s = await Qt(e, t, i, n);
    if (s.length > 0)
      return { ids: s, relationName: i };
  }
  return { ids: [] };
}
function Hn(e, t) {
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
const RS = ["social", "email", "admin"], Ii = [
  "templateToZone",
  "templateToTemplateZone",
  "TemplateToZone",
  "TemplateToTemplateZone",
  "EPAM.TemplateToZone",
  "EPAM.TemplateToTemplateZone",
  "templateToEPAM.TemplateZone",
  "EPAM.TemplateZone",
  "TemplateZone"
], Ta = [
  "templateZoneToTemplate",
  "zoneToTemplate",
  "TemplateZoneToTemplate",
  "EPAM.TemplateZoneToTemplate",
  "EPAM.TemplateToTemplateZone",
  "templateToTemplate"
], $S = [
  "marketingAssetToTemplate",
  "MarketingAssetToTemplate",
  "EPAM.MarketingAssetToTemplate"
], Fy = [
  "templateZoneToAllowedAsset",
  "TemplateZoneToAllowedAsset",
  "EPAM.TemplateZoneToAllowedAsset",
  "templateZoneToAsset",
  "TemplateZoneToAsset",
  "EPAM.TemplateZoneToAsset"
], By = [
  "templateToAllowedAsset",
  "TemplateToAllowedAsset",
  "EPAM.TemplateToAllowedAsset",
  "templateToAsset",
  "TemplateToAsset",
  "EPAM.TemplateToAsset"
], jS = [
  "zoneType",
  "ZoneType",
  "EPAM.ZoneType",
  "templateZoneType",
  "TemplateZoneType",
  "EPAM.TemplateZoneType"
], Ky = [
  "zoneValueToSelectedAsset",
  "ZoneValueToSelectedAsset",
  "EPAM.MarketingAssetZoneValueToSelectedAsset",
  "marketingAssetZoneValueToSelectedAsset",
  "zoneValueToAsset",
  "ZoneValueToAsset"
];
function wm(e) {
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
function Tm(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
  if (typeof e == "string")
    return e.trim() || void 0;
}
function US(e) {
  if (!e || typeof e != "object")
    return;
  const t = e, n = t.systemProperties && typeof t.systemProperties == "object" ? t.systemProperties : null;
  return Tm(n == null ? void 0 : n.id) || Tm(t.id);
}
function HS(e, ...t) {
  if (!e || typeof e != "object")
    return;
  const n = e.relations;
  if (!n || typeof n != "object")
    return;
  const r = Vd(n, ...t);
  if (r[0] != null)
    return String(r[0]);
}
function Am(e) {
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
function Sm(e) {
  if (typeof e != "string")
    return;
  const t = e.trim().toLowerCase();
  return RS.includes(t) ? t : void 0;
}
function Wd(e, t) {
  if (!(!e || typeof e != "object" || Array.isArray(e)))
    return e[t];
}
function km(e, t, n) {
  const r = Wd(t, e), o = Am(r);
  if (o !== void 0)
    return o;
  const i = Zy(n);
  if (i)
    return Am(i[e]);
}
function Zy(e) {
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
function Dt(e, t, n) {
  const r = Wd(t, e), o = wm(r);
  if (o)
    return o;
  const i = Zy(n);
  if (i)
    return wm(i[e]);
}
function FS(e, t, n) {
  const r = Sm(Wd(e, "builderMode")) ?? Sm(Dt("builderMode", e, n)), o = Dt("templateId", e, n) || HS(t, "marketingAssetToTemplate"), i = US(t);
  return {
    builderMode: r,
    brandKitId: Dt("brandKitId", e, n),
    templateId: o,
    marketingAssetId: i,
    userHasOverridePermission: km("userHasOverridePermission", e, n) ?? !1,
    allowTemplateZoneEditing: km("allowTemplateZoneEditing", e, n) ?? !1,
    renderEmailApiUrl: Dt("renderEmailApiUrl", e, n) || "/api/render-email-html",
    contentHubProxyBase: Dt("contentHubProxyBase", e, n) || "/api/content-hub",
    html2canvasCdnUrl: Dt("html2canvasCdnUrl", e, n),
    figmaImportApiUrl: Dt("figmaImportApiUrl", e, n) || "/api/figma/import",
    figmaImportApiToken: Dt("figmaImportApiToken", e, n),
    designerDocumentProperty: Dt("designerDocumentProperty", e, n),
    designerInstanceProperty: Dt("designerInstanceProperty", e, n),
    searchIdentifier: Dt("searchIdentifier", e, n),
    selectionPoolIdentifier: Dt("selectionPoolIdentifier", e, n)
  };
}
function BS(e, t) {
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
function Em(e, t) {
  if (e.builderMode)
    return e.builderMode;
  const n = t == null ? void 0 : t.trim().toLowerCase();
  return n === "email" || n === "newsletter" ? "email" : "social";
}
const Nm = /* @__PURE__ */ new Map(), KS = ["EPAM.Template", "Template"], ZS = ["EPAM.TemplateZone", "TemplateZone"];
function VS(e) {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
}
function Vy(e) {
  if (e == null || typeof e != "object")
    return null;
  const t = e;
  if (Array.isArray(t.member_groups))
    return t;
  const n = t.content;
  return n != null && typeof n == "object" && !Array.isArray(n) ? n : Array.isArray(t.items) && t.items[0] != null && typeof t.items[0] == "object" ? t.items[0] : t;
}
function WS(e) {
  const t = Vy(e);
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
async function Mc(e, t) {
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
      const s = WS(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
function YS(e) {
  const t = Vy(e);
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
          target: u ? VS(u) : void 0
        });
      }
  }
  return n;
}
function QS(e) {
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
async function GS(e, t) {
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
      const s = YS(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
async function XS(e, t) {
  const n = Nm.get(t);
  if (n)
    return n;
  const r = await GS(e, t);
  return Nm.set(t, r), r;
}
async function Aa(e, t) {
  for (const n of t) {
    const r = await XS(e, n);
    if (r.length > 0)
      return r;
  }
  return [];
}
async function JS(e) {
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
      const a = QS(s.content);
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
function qS(e) {
  return Cc(e, /(^|\.)Template$/i) && !Cc(e, /TemplateZone/i);
}
async function fl(e, t) {
  const [n, r, o] = await Promise.all([
    Aa(e, KS),
    Aa(e, ZS),
    JS(e)
  ]), i = n.filter((c) => Cc(c.target, /TemplateZone/i)).map((c) => c.name), s = r.filter((c) => qS(c.target)).map((c) => c.name), a = wt(t, /zone/i).filter(
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
      ...Ta
    ])
  ];
  return l.length === 0 && u.length === Ta.length ? console.info(
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
function ek(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO template ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function tk(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO zone ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function Wy(e, t) {
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
function nk(e, t, n) {
  return {
    entitydefinition: {
      href: Wy(e, n)
    },
    properties: t
  };
}
function Sa(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e;
    if (typeof t.href == "string" && t.href.trim())
      return t.href.trim();
  }
}
function rk(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = [];
  if (Array.isArray(t.children))
    for (const o of t.children) {
      const i = Sa(o);
      i && n.push(i);
    }
  const r = Sa(t.child);
  return r && n.push(r), n;
}
function ok(e, t) {
  if (e != null && typeof e == "object") {
    const n = Sa(e.self);
    if (n)
      return n;
  }
  return t;
}
function Yy(e, t) {
  if (t) {
    const n = t.match(/^(https?:\/\/[^/]+)/i);
    if (n)
      return `${n[1]}/api/entities/${e}`;
  }
  return `/api/entities/${e}`;
}
async function pl(e, t, n, r) {
  var a;
  const o = rt(r, n), i = `/api/entities/${t}/relations/${n}`, s = o ? [.../* @__PURE__ */ new Set([o, i])] : [i];
  if (!((a = e.raw) != null && a.getAsync) || !o)
    return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
  for (const l of [o])
    try {
      const u = await e.raw.getAsync(l);
      if (!u.isSuccessStatusCode || u.content == null)
        continue;
      const c = rk(u.content), f = ok(u.content, l) ?? l;
      return { requestUrls: s, selfHref: f, childHrefs: c };
    } catch {
    }
  return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
}
function Qy(e, t) {
  return {
    children: t.map((n) => ({ href: n })),
    self: { href: e }
  };
}
async function Oi(e, t, n) {
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
async function Gt(e, t, n, r, o) {
  var u;
  const i = await pl(e, t, r, o), s = Yy(n, i.selfHref), a = [...i.childHrefs];
  a.some((c) => kr(c) === Number(n)) || a.push(s);
  const l = Qy(i.selfHref, a);
  if (await Oi(e, [...i.requestUrls, i.selfHref], l))
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
async function Mo(e, t, n, r, o) {
  const i = await pl(e, t, r, o), s = i.childHrefs.filter(
    (l) => kr(l) !== Number(n)
  );
  if (s.length === i.childHrefs.length)
    return !0;
  const a = Qy(i.selfHref, s);
  return Oi(e, [...i.requestUrls, i.selfHref], a);
}
async function vo(e, t, n, r, o) {
  var l;
  const i = await pl(e, t, r, o), s = Yy(n, i.selfHref), a = {
    parent: { href: s },
    self: { href: i.selfHref }
  };
  if (await Oi(e, [...i.requestUrls, i.selfHref], a))
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
async function Gy(e, t, n, r, o) {
  var l;
  const i = await pl(e, t, r, o), s = rt(o, r) ?? i.selfHref;
  if ((l = e.raw) != null && l.getAsync && rt(o, r))
    try {
      const u = await e.raw.getAsync(s);
      if (u.isSuccessStatusCode && u.content != null) {
        const c = Sa(
          u.content.parent
        );
        if (!c || kr(c) !== Number(n))
          return !0;
      }
    } catch {
    }
  const a = {
    parent: null,
    self: { href: i.selfHref }
  };
  return await Oi(e, [...i.requestUrls, i.selfHref], a) ? !0 : Oi(e, [...i.requestUrls, i.selfHref], {
    self: { href: i.selfHref }
  });
}
function di(e, t, n) {
  const r = wt(t, n), o = r.filter((i) => !!rt(t, i));
  return [.../* @__PURE__ */ new Set([...o, ...e, ...r])];
}
function ml(e) {
  if (e.zoneType === "Logo")
    return !0;
  const t = (e.zoneKey ?? "").trim().toLowerCase(), n = (e.zoneLabel ?? "").trim().toLowerCase();
  return t === "logo" || n === "logo";
}
function ik(e, t) {
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
function Yd(e, t, n) {
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
  return ik(t, n) ?? "Text";
}
const sk = ["EPAM.TemplateZone", "TemplateZone"], Zt = /* @__PURE__ */ new Map();
let Mm = !1, Cm = !1, Pi = [];
function zm(e, ...t) {
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
function hl(e) {
  const t = e.properties ?? {}, n = e, r = Object.keys(t), o = zm(
    t,
    "identifier",
    "Identifier",
    "zoneTypeName",
    "ZoneTypeName",
    "Title",
    "Name",
    "Label",
    "label"
  ) || Hn(n, "zoneType") || Hn(n, "ZoneType");
  if (o)
    return o;
  for (const i of r) {
    const s = zm(t, i);
    if (s)
      return s;
  }
  return "";
}
function gl(e, t) {
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
    Zt.has(s) || (Zt.set(s, String(t)), ae(
      "template zone type",
      `Mapped taxonomy ${t} → "${s}" (from "${e}")`
    ));
    return;
  }
  Zt.has(r) || (Zt.set(r, String(t)), ae("template zone type", `Mapped taxonomy ${t} → "${r}" (from "${e}")`));
}
function yl(e) {
  const t = Pi.map((n) => n.name);
  return [
    .../* @__PURE__ */ new Set([
      ...t,
      ...jS,
      ...wt(e, /zone.?type/i)
    ])
  ];
}
function ak(e) {
  return yl(e.relations).some(
    (t) => {
      var n;
      return !!((n = e.relations) != null && n[t]);
    }
  );
}
function Xy(e) {
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
function lk(e) {
  try {
    const n = Wy(e).match(/\/entitydefinitions\/([^/?#]+)/i);
    return n != null && n[1] ? decodeURIComponent(n[1]) : "";
  } catch {
    return "";
  }
}
async function uk(e, t, n) {
  const r = encodeURIComponent(`Definition.Name=='${n}'`), o = [
    `/api/entities/query?query=${r}&take=100`,
    `/api/entities/query?query=${r}&pageSize=100`
  ];
  for (const i of o)
    try {
      const s = await e.raw.getAsync(i);
      if (!s.isSuccessStatusCode || s.content == null)
        continue;
      const a = Xy(s.content);
      for (const l of a) {
        const u = await t(String(l)), c = hl(u);
        c && gl(c, l);
      }
      if (a.length > 0)
        return Z(
          "template zone type",
          `Loaded ${a.length} taxonomy item(s) from ${n}; mapped ${Zt.size} zone type(s)`
        ), a.length;
    } catch {
    }
  return 0;
}
async function Jy(e, t, n) {
  const r = yl(n.relations);
  for (const o of r) {
    const i = await Qt(e, "", o, n.relations);
    if (i[0] == null)
      continue;
    const s = await t(String(i[0])), a = hl(s);
    return a && gl(a, i[0]), lk(s) || void 0;
  }
}
async function Qd(e) {
  if (Pi.length > 0 || !e)
    return;
  Pi = (await Aa(e, sk)).filter((n) => /zone.?type/i.test(n.name));
}
async function qy(e, t) {
  var o, i;
  if (Cm || !((o = e == null ? void 0 : e.raw) != null && o.getAsync) || Mm)
    return;
  Mm = !0, await Qd(e);
  let n = ((i = Pi.find((s) => {
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
        const u = Xy(l.content);
        for (const c of u) {
          const f = await t(String(c)), p = await Jy(e, t, f);
          p && !n && (n = p);
        }
        if (u.length > 0)
          break;
      } catch {
      }
    if (Zt.size > 0)
      break;
  }
  n && await uk(e, t, n), Cm = !0, ae(
    "template zone type",
    `Taxonomy catalog ready: ${[...Zt.entries()].map(([s, a]) => `${s}=${a}`).join(", ") || "(empty)"}`
  );
}
async function ck(e, t, n) {
  await Qd(e);
  for (const r of n)
    await Jy(e, t, r);
  Zt.size === 0 && await qy(e, t);
}
async function dk(e, t, n) {
  const r = Zt.get(n);
  return r || (await qy(e, t), Zt.get(n));
}
function fk(e) {
  var r;
  const t = Pi.find((o) => o.name === e);
  return ((r = t == null ? void 0 : t.role) == null ? void 0 : r.toLowerCase()) !== "parent";
}
async function Lm(e, t, n, r) {
  var l;
  if (!((l = e == null ? void 0 : e.raw) != null && l.getAsync))
    return;
  const o = `/api/entities/${n}/relations/${r}`, i = await Qt(e, n, r, {
    [r]: { href: o }
  });
  if (i[0] == null)
    return;
  const s = await t(String(i[0])), a = hl(s);
  if (a)
    return gl(a, i[0]), Yd(a, "", "");
}
async function pk(e, t, n, r, o, i, s) {
  var l;
  const a = fk(
    i
  ) ? [
    {
      label: "parent",
      run: () => vo(e, n, r, i, s.relations)
    },
    {
      label: "child",
      run: () => Gt(e, n, r, i, s.relations)
    }
  ] : [
    {
      label: "child",
      run: () => Gt(e, n, r, i, s.relations)
    },
    {
      label: "parent",
      run: () => vo(e, n, r, i, s.relations)
    }
  ];
  for (const u of a) {
    if (!await u.run())
      continue;
    const f = await Lm(
      e,
      t,
      n,
      i
    );
    if (f === o)
      return Z(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via ${u.label} ${i}`
      ), !0;
    ae(
      "template zone type",
      `${u.label} write for zone ${n} → taxonomy ${r} returned OK but read-back is "${f ?? "(none)"}" (expected "${o}")`
    );
  }
  if ((l = e == null ? void 0 : e.raw) != null && l.postAsync) {
    const u = { parent: { href: `/api/entities/${r}` } };
    if ((await e.raw.postAsync(
      `/api/entities/${n}/relations/${i}`,
      u
    )).isSuccessStatusCode && await Lm(
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
async function mk(e, t, n, r) {
  const o = yl(r.relations);
  for (const i of o) {
    const s = rt(r.relations, i);
    if (!s)
      continue;
    const a = await Qt(e, n.id, i, {
      [i]: { href: s }
    });
    if (a[0] == null)
      continue;
    const l = await t(String(a[0])), u = hl(l);
    if (u)
      return gl(u, a[0]), Yd(u, n.zoneKey, n.zoneLabel);
  }
}
async function ev(e, t, n, r) {
  const o = await mk(e, t, n, r);
  return o ? { ...n, zoneType: o } : n;
}
async function hk(e, t, n, r, o) {
  await Qd(e);
  const i = await dk(e, t, r);
  if (!i) {
    const a = Object.keys(o.relations ?? {}).join(", ") || "(none)", l = [...Zt.keys()].join(", ") || "(none)";
    return ae(
      "template zone type",
      `No taxonomy item found for zone type "${r}" on zone ${n}. Known types: ${l}. Zone relations: ${a}.`
    ), !1;
  }
  const s = yl(o.relations);
  for (const a of s)
    if (await pk(
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
const yu = ["EPAM.TemplateZone", "TemplateZone"];
let Ns = null;
function gk(e) {
  return /zone.?type/i.test(e);
}
function yk(e) {
  return /zone.?type/i.test(e);
}
function vk(e) {
  return e.filter((t) => gk(t.name)).map((t) => t.name);
}
async function wk(e) {
  if (Ns)
    return Ns;
  const [t, n] = await Promise.all([
    Mc(e, yu[0]).then(async (s) => s.length > 0 ? s : Mc(e, yu[1])),
    Aa(e, yu)
  ]), r = vk(t), o = n.filter((s) => yk(s.name)).map((s) => s.name);
  let i = "unknown";
  return r.length > 0 && o.length === 0 ? i = "property" : o.length > 0 && r.length === 0 ? i = "relation" : r.length > 0 && o.length > 0 && (i = "both"), Ns = {
    mode: i,
    propertyNames: r.length > 0 ? r : ["zoneType", "ZoneType", "EPAM.zoneType", "zoneTypeMA"],
    relationNames: o
  }, Ns;
}
function Tk(e) {
  return e.mode === "property" || e.mode === "both" || e.mode === "unknown";
}
function Ak(e) {
  return e.mode === "relation" || e.mode === "both";
}
const Sk = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], Gd = [
  "AssetCollectionToAsset",
  "M.AssetCollectionToAsset",
  "collectionToAsset",
  "assetCollectionToAsset",
  "CollectionToAsset"
];
function kk(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function Ek(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  return "Invariant" in t ? t.Invariant : Object.values(t).find((r) => typeof r == "string") ?? e;
}
function Nk(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = Ek(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function Mk(e) {
  var n;
  if (e == null || typeof e != "object")
    return;
  const t = e;
  for (const r of Sk) {
    const o = t[r];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const i = kk(((n = o[0]) == null ? void 0 : n.href) ?? o[0]);
    if (i)
      return i;
  }
}
function Co(e, t) {
  const n = t.properties ?? {}, r = Mk(t.renditions);
  if (!r)
    return null;
  const o = Nk(n, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${e}`;
  return {
    id: String(e),
    name: o,
    thumbnailUrl: r,
    previewUrl: r
  };
}
function xm(e, t) {
  if (!(t != null && t.trim()))
    return e;
  const n = t.trim().toLowerCase();
  return e.filter(
    (r) => r.name.toLowerCase().includes(n) || r.id.toLowerCase().includes(n)
  );
}
const Ck = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg4IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjg4IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iQ3l0aXZhIj4NCiAgPHBhdGggZD0iTTExOC40IDUwLjMzQzExNy4zNjkgNTAuNDAxMSAxMTYuMzQgNTAuMTU5NSAxMTUuNDQ4IDQ5LjYzNjhDMTE0LjU1NiA0OS4xMTQxIDExMy44NDIgNDguMzM0NSAxMTMuNCA0Ny40QzExMi4zNTEgNDQuOTY3MSAxMTEuODcyIDQyLjMyNjQgMTEyIDM5LjY4QzExMS44ODEgMzcuMDM3IDExMi4zOTYgMzQuNDA0IDExMy41IDMyQzExMy45NDkgMzEuMDg4NCAxMTQuNjU2IDMwLjMyODIgMTE1LjUzMiAyOS44MTI5QzExNi40MDcgMjkuMjk3NyAxMTcuNDE1IDI5LjA0OTggMTE4LjQzIDI5LjA5OTlDMTE5LjA1IDI5LjA2MTEgMTE5LjY3MiAyOS4xNTMzIDEyMC4yNTQgMjkuMzcwM0MxMjAuODM2IDI5LjU4NzQgMTIxLjM2NyAyOS45MjQ2IDEyMS44MSAzMC4zNkMxMjIuNjM2IDMxLjMyNTcgMTIzLjE5NSAzMi40OTExIDEyMy40MyAzMy43Mzk5SDEzMy42NkMxMzMuNDg1IDMxLjc1MjMgMTMyLjkwNyAyOS44MjEyIDEzMS45NjEgMjguMDY0MkMxMzEuMDE2IDI2LjMwNzIgMTI5LjcyMiAyNC43NjEgMTI4LjE2IDIzLjUyQzEyNS4zMTMgMjEuNTEyOSAxMjEuODggMjAuNTEwMyAxMTguNCAyMC42Njk5QzExMy4xIDIwLjY2OTkgMTA4Ljg4IDIyLjQxOTkgMTA1Ljg1IDI1Ljg2OTlDMTAyLjgyIDI5LjMyIDEwMS4yOSAzNC4wNyAxMDEuMjkgMzkuOThDMTAxLjI5IDQ1Ljg5IDEwMi43NiA1MC40NyAxMDUuNjcgNTMuOEMxMDguNTggNTcuMTMgMTEyLjc4IDU4LjggMTE4LjE4IDU4LjhDMTIyLjU4IDU4LjggMTI2LjExIDU3LjY4IDEyOC42OSA1NS40N0MxMzEuMjcgNTMuMjYgMTMyLjg3IDUwLjIgMTMzLjY5IDQ2LjA4SDEyMy42OUMxMjMuMzkyIDQ3LjI1NzcgMTIyLjc4MSA0OC4zMzI2IDEyMS45MiA0OS4xOUMxMjAuOTQgNTAuMDEzNSAxMTkuNjc3IDUwLjQyMjQgMTE4LjQgNTAuMzNaIiBmaWxsPSIjRkZGRkZGIi8+DQogIDxwYXRoIGQ9Ik0xOTYuMSA1Ni44MDk5TDE5NC43IDQ5LjEyOTlDMTkzLjg3MiA0OS4zNjQ2IDE5My4wMyA0OS41NTE2IDE5Mi4xOCA0OS42ODk5QzE5MS4yMDggNDkuODQzNSAxOTAuMjI1IDQ5LjkxNzEgMTg5LjI0IDQ5LjkwOTlDMTg2LjI0IDQ5LjkwOTkgMTg0Ljc4IDQ4LjI5OTkgMTg0Ljc4IDQ1LjExOTlWMjkuOTk5OUgxOTUuMjNWMjEuODI5OUgxODQuNzhWMTMuMTg5OUgxNzQuMjdWNDQuODI5OUMxNzQuMjQxIDQ3LjI0MzUgMTc0LjU3OCA0OS42NDc1IDE3NS4yNyA1MS45NTk5QzE3NS44NjMgNTMuOTIgMTc3LjEzMiA1NS42MDY1IDE3OC44NSA1Ni43MTk5QzE4MC41OCA1Ny44NTk5IDE4My4wOSA1OC40Mjk5IDE4Ni4zMyA1OC40Mjk5QzE4OC4wODMgNTguNDQ2MSAxODkuODMzIDU4LjMwNTYgMTkxLjU2IDU4LjAwOTlDMTkzLjEwMSA1Ny43MjIzIDE5NC42MTkgNTcuMzIxMiAxOTYuMSA1Ni44MDk5WiIgZmlsbD0iI0ZGRkZGRiIvPg0KICA8cGF0aCBkPSJNMjAxIDI4LjcxVjU3LjcxSDIxMS41OVYyMS44M0gyMDcuODhDMjA2LjA1NiAyMS44MzI2IDIwNC4zMDggMjIuNTU4MyAyMDMuMDE4IDIzLjg0OEMyMDEuNzI4IDI1LjEzNzcgMjAxLjAwMyAyNi44ODYxIDIwMSAyOC43MVoiIGZpbGw9IiNGRkZGRkYiLz4NCiAgPHBhdGggZD0iTTI0MS42MSAyMS44M0wyMzQuMDggNDcuODFMMjI2LjczIDIxLjgzSDIxNS4zOUwyMjguMjkgNTcuNzRIMjM5LjYyTDI1Mi41NSAyMS44M0gyNDEuNjFaIiBmaWxsPSIjRkZGRkZGIi8+DQogIDxwYXRoIGQ9Ik0xNDUuMTIgMjEuNzdIMTM0LjEyTDE0OC40IDU0LjM1QzE0OC40IDU0LjM1IDE0Ny43OSA1Ni4zNSAxNDcuNSA1Ny4yMUMxNDcuMzY5IDU3Ljc3MSAxNDcuMDM5IDU4LjI2NTEgMTQ2LjU3IDU4LjZMMTQ2LjMxIDU4LjgzQzE0NS40MzQgNTkuNTM5NCAxNDQuMzI1IDU5Ljg5NiAxNDMuMiA1OS44M0MxNDIuNjIxIDU5LjgyODYgMTQyLjA0MyA1OS43ODg1IDE0MS40NyA1OS43MUMxNDAuNzM2IDU5LjU5MDkgMTQwLjAwOCA1OS40MzQgMTM5LjI5IDU5LjI0TDEzNy42OCA2Ni43NUMxNDAuMDA3IDY3LjU1OTcgMTQyLjQ1NyA2Ny45NTg5IDE0NC45MiA2Ny45M0MxNDYuODY2IDY4LjAxMzggMTQ4Ljc5OCA2Ny41NjggMTUwLjUxIDY2LjY0QzE1Mi4wNDQgNjUuNjcwMSAxNTMuMzEzIDY0LjMzMzIgMTU0LjIgNjIuNzVDMTU2LjExIDU5LjU1IDE2OS44MyAyNC4wMiAxNzAuNzEgMjEuNzVIMTYwLjA1TDE1MyA0My45MUwxNDUuMTIgMjEuNzdaIiBmaWxsPSIjRkZGRkZGIi8+DQogIDxwYXRoIGQ9Ik0yNzcuMzE5IDI1LjE3OThMMjc3LjE2OSAyNC45Njk4QzI3Ni4xMjEgMjMuNDU1NSAyNzQuNjUgMjIuMjgzNCAyNzIuOTM5IDIxLjU5OThDMjcxLjU3MiAyMC45OTA3IDI3MC4wODYgMjAuNjkwMyAyNjguNTg5IDIwLjcxOThDMjY4LjMzOSAyMC43MTk4IDI2OC4wODkgMjAuNzE5OCAyNjcuODE5IDIwLjcxOThDMjYzLjgxOCAyMC45ODExIDI2MC4wODEgMjIuODEwMSAyNTcuNDE5IDI1LjgwOThDMjU0LjQxOSAyOS4yNTk4IDI1Mi44NTkgMzQuMDA5OCAyNTIuODU5IDM5LjkxOThDMjUyLjg1OSA0NS44Mjk4IDI1NC4zMzkgNTAuNDA5OCAyNTcuMjM5IDUzLjczOTdDMjU4LjYzMiA1NS4zNDM5IDI2MC4zNzggNTYuNjAzNiAyNjIuMzM5IDU3LjQxOThDMjYzLjgyIDU4LjEwMTIgMjY1LjQyMSA1OC40ODE5IDI2Ny4wNDkgNTguNTM5OEMyNjguMDQ5IDU4LjUzOTggMjY5LjUwOSA1OC4zNjk4IDI2OS41MTkgNTguMzY5OEMyNzIuNTg1IDU3Ljg0NyAyNzUuMzI3IDU2LjE1NDggMjc3LjE2OSA1My42NDk4TDI3Ny4zMTkgNTMuNDQ5N1Y1Ny43MTk4SDI4Ny44OTlWMjEuODI5OEgyNzcuMzE5VjI1LjE3OThaTTI3Ny45MzkgNDAuNTk5OEMyNzcuOTU4IDQyLjA2MTIgMjc3Ljc5MyA0My41MTkyIDI3Ny40NDkgNDQuOTM5OEMyNzcuMTE3IDQ2LjIyNDggMjc2LjQ4NiA0Ny40MTM1IDI3NS42MDkgNDguNDA5OEMyNzUuMDI0IDQ5LjA4MDMgMjc0LjMwNSA0OS42MjE4IDI3My40OTkgNDkuOTk5OEMyNzIuNTkxIDUwLjM5MDYgMjcxLjYwOCA1MC41Nzg0IDI3MC42MTkgNTAuNTQ5OEMyNjkuNjQzIDUwLjU1MTggMjY4LjY4IDUwLjMzMDMgMjY3LjgwMyA0OS45MDIxQzI2Ni45MjYgNDkuNDc0IDI2Ni4xNTggNDguODUwNiAyNjUuNTU5IDQ4LjA3OThDMjY0LjE4OSA0Ni40Mzk4IDI2My40ODkgNDMuNjg5OCAyNjMuNDg5IDM5Ljg4OThDMjYzLjQ4OSAzNi4wODk4IDI2NC4xNzkgMzMuNDY5OCAyNjUuNDg5IDMxLjc0OThDMjY2LjA5OSAzMC45MjU0IDI2Ni44OTggMzAuMjU5MSAyNjcuODE4IDI5LjgwNjhDMjY4LjczOSAyOS4zNTQ0IDI2OS43NTQgMjkuMTI5MSAyNzAuNzc5IDI5LjE0OThDMjcxLjY2NiAyOS4xMTY1IDI3Mi41NDkgMjkuMjc4MyAyNzMuMzY3IDI5LjYyMzlDMjc0LjE4NCAyOS45Njk1IDI3NC45MTUgMzAuNDkwNCAyNzUuNTA5IDMxLjE0OThDMjc2LjMxMiAzMi4xMDE2IDI3Ni45MTEgMzMuMjA3NyAyNzcuMjY5IDM0LjM5OThDMjc3LjczNCAzNi4wMjQ2IDI3Ny45NDkgMzcuNzEwMyAyNzcuOTA5IDM5LjM5OThMMjc3LjkzOSA0MC41OTk4WiIgZmlsbD0iI0ZGRkZGRiIvPg0KICA8cGF0aCBkPSJNMjA2LjMgNi43NzAwM0MyMDUuMDk3IDYuNzY4MDUgMjAzLjkyMSA3LjEyMjk1IDIwMi45MTkgNy43ODk4M0MyMDEuOTE4IDguNDU2NyAyMDEuMTM3IDkuNDA1NTcgMjAwLjY3NiAxMC41MTY0QzIwMC4yMTQgMTEuNjI3MiAyMDAuMDkyIDEyLjg1IDIwMC4zMjYgMTQuMDNDMjAwLjU1OSAxNS4yMTAxIDIwMS4xMzcgMTYuMjk0NCAyMDEuOTg3IDE3LjE0NTdDMjAyLjgzNyAxNy45OTcgMjAzLjkyIDE4LjU3NyAyMDUuMSAxOC44MTI1QzIwNi4yOCAxOS4wNDc5IDIwNy41MDMgMTguOTI4MSAyMDguNjE0IDE4LjQ2ODJDMjA5LjcyNiAxOC4wMDgzIDIxMC42NzYgMTcuMjI5IDIxMS4zNDUgMTYuMjI4OUMyMTIuMDEzIDE1LjIyODkgMjEyLjM3IDE0LjA1MyAyMTIuMzcgMTIuODVDMjEyLjM3IDExLjIzOTIgMjExLjczMSA5LjY5NDI4IDIxMC41OTMgOC41NTQzNUMyMDkuNDU1IDcuNDE0NDEgMjA3LjkxMSA2Ljc3MjY4IDIwNi4zIDYuNzcwMDNaIiBmaWxsPSIjRkZGRkZGIi8+DQogIDxwYXRoIGQ9Ik0tMC4wOTk1NTk4IDM5LjU3Qy0wLjA5OTkwOTggNDcuMjQ5NyAyLjEwMzg2IDU0Ljc2ODEgNi4yNTAwMyA2MS4yMzIzQzEwLjM5NjIgNjcuNjk2NSAxNi4zMTA1IDcyLjgzNDkgMjMuMjkwNiA3Ni4wMzczQzMwLjI3MDcgNzkuMjM5NiAzOC4wMjMzIDgwLjM3MTQgNDUuNjI3NSA3OS4yOTgxQzUzLjIzMTggNzguMjI0OCA2MC4zNjgzIDc0Ljk5MTYgNjYuMTg5NCA2OS45ODI0QzcyLjAxMDQgNjQuOTczMiA3Ni4yNzE2IDU4LjM5ODYgNzguNDY2NiA1MS4wMzk0QzgwLjY2MTcgNDMuNjgwMSA4MC42OTg1IDM1Ljg0NTUgNzguNTcyNyAyOC40NjZDNzYuNDQ2OCAyMS4wODY0IDcyLjI0NzYgMTQuNDcyMSA2Ni40NzM5IDkuNDA4NDRDNjAuNzAwMSA0LjM0NDgxIDUzLjU5NDMgMS4wNDQ3IDQ2LjAwMDQgLTAuMDk5OTc1NkM0Ni4wMDA0IC0wLjA5OTk3NTYgNDYuMDAwNCA1Mi42IDQ2LjAwMDQgNTIuOEM0Ni4wMDA0IDYxLjEzIDM5Ljc0MDQgNjkgMzEuNDEwNCA2OUMyMy4wODA0IDY5IDE2LjIxMDQgNjIuODggMTYuMjEwNCA1NS4zOEMxNi4xNjI0IDUzLjM2NzUgMTYuNTIyMiA1MS4zNjYxIDE3LjI2ODEgNDkuNDk2M0MxOC4wMTM5IDQ3LjYyNjUgMTkuMTMwNSA0NS45MjcgMjAuNTUwNCA0NC41QzI0LjU1MDQgNDAuNTYgMzIuNDAwNCAzNi42MSAzNi42NTA0IDMxLjAzQzM5LjM2MDQgMjcuNDkgNDAuMDkwNCAyNS4xNiA0MC4wOTA0IDIxLjQxQzQwLjExODIgMTkuNDI4MyAzOS43NTUzIDE3LjQ2MDYgMzkuMDIyNSAxNS42MTkxQzM4LjI4OTcgMTMuNzc3NyAzNy4yMDE0IDEyLjA5ODYgMzUuODE5NiAxMC42Nzc5QzM0LjQzNzggOS4yNTcwOCAzMi43ODk3IDguMTIyNDEgMzAuOTY5NCA3LjMzODY2QzI5LjE0OSA2LjU1NDkgMjcuMTkyMSA2LjEzNzQxIDI1LjIxMDQgNi4xMTAwMkMyMS45ODcgNi4xNzU2OSAxOC44MjczIDcuMDE5NjcgMTYuMDAwNCA4LjU3MDAyQzExLjU4MDggMTEuMTA1OCA3LjkyODcgMTQuNzg5IDUuNDMwNDQgMTkuMjNDMS43OTkwMSAyNS4zOTI1IC0wLjExMDgzMyAzMi40MTcyIC0wLjA5OTU1OTggMzkuNTdaIiBmaWxsPSIjMDA4NjZEIi8+DQo8L3N2Zz4NCg==", zk = "https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58", _i = [
  {
    id: "color",
    label: "Full color",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png",
    previewBackground: "#f7f7f7"
  },
  {
    id: "dark",
    label: "Dark background",
    url: Ck,
    previewBackground: "#18181b"
  }
], Xd = _i[0].url, lo = "'Cytiva Aktiv', Arial, Helvetica, sans-serif", Fn = {
  primary: "#00755f",
  primaryHover: "#33a08c",
  primaryActive: "#00614f",
  secondary: "#18181b",
  accent: "#ff5900",
  background: "#f2f9f8",
  surface: "#ffffff",
  border: "#e8e8e8",
  muted: "#717171",
  primarySoft: "#e4f7f4",
  primaryBorder: "#99cfc5"
}, tv = [
  { colorName: "Primary", hexValue: Fn.primary, colorUsageType: "Primary" },
  { colorName: "Secondary", hexValue: Fn.secondary, colorUsageType: "Secondary" },
  { colorName: "Accent", hexValue: Fn.accent, colorUsageType: "Accent" },
  { colorName: "Background", hexValue: Fn.background, colorUsageType: "Background" }
], nv = [
  { fontFamily: lo, fontWeight: "Bold", fontUsageType: "Heading" },
  { fontFamily: lo, fontWeight: "Regular", fontUsageType: "Body" },
  { fontFamily: lo, fontWeight: "Medium", fontUsageType: "CTA" }
];
function Gi(e) {
  var r;
  const t = e == null ? void 0 : e.trim();
  if (!t)
    return Xd;
  if (t === zk)
    return ((r = _i.find((o) => o.id === "dark")) == null ? void 0 : r.url) ?? t;
  const n = _i.find(
    (o) => o.url === t || o.id === t
  );
  return n ? n.url : t;
}
function rv(e) {
  var n;
  const t = Gi(e);
  return (n = _i.find((r) => r.url === t)) == null ? void 0 : n.previewBackground;
}
function Lk(e) {
  var t;
  return {
    ...e,
    brandKitName: ((t = e.brandKitName) == null ? void 0 : t.trim()) || "Cytiva",
    logoAssetUrl: Gi(e.logoAssetUrl),
    colors: tv,
    fonts: nv
  };
}
function xk(e) {
  return Lk({
    id: e,
    brandKitName: "Cytiva",
    logoAssetUrl: Xd,
    colors: tv,
    fonts: nv
  });
}
const Jd = [
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
], Dk = [
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
function vl(e) {
  switch (e) {
    case "Email":
      return ov;
    case "Newsletter":
      return Dk;
    default:
      return Jd;
  }
}
function iv(e) {
  const t = e.canvasWidth, n = e.canvasHeight;
  return t != null && n != null ? `${t} × ${n} px` : t != null ? `${t} px wide` : "Not set";
}
function bk(e, t) {
  return e.canvasWidth !== t.width ? !1 : t.height != null ? e.canvasHeight === t.height : e.canvasHeight == null || e.canvasHeight === void 0;
}
function Ik(e) {
  const t = vl(e.channelType), n = t.find((o) => bk(e, o));
  if (n)
    return n.id;
  const r = t.find(
    (o) => o.formatPreset.trim().toLowerCase() === (e.formatPreset ?? "").trim().toLowerCase()
  );
  return r ? r.id : "custom";
}
function Ok(e, t) {
  if (t === "custom")
    return null;
  const n = vl(e).find((r) => r.id === t);
  return n ? {
    canvasWidth: n.width,
    canvasHeight: n.height,
    formatPreset: n.formatPreset
  } : null;
}
function sv(e) {
  const t = vl(e)[0];
  return {
    canvasWidth: t.width,
    canvasHeight: t.height,
    formatPreset: t.formatPreset
  };
}
function qd(e) {
  return e.canvasWidth != null && Number.isFinite(e.canvasWidth) ? e.canvasWidth : e.channelType === "Email" || e.channelType === "Newsletter" ? ov[0].width : Jd[0].width;
}
function av(e) {
  return e.canvasHeight != null && Number.isFinite(e.canvasHeight) ? e.canvasHeight : e.channelType === "Email" || e.channelType === "Newsletter" ? 800 : Jd[0].height ?? 1080;
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function Dm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Pk(e) {
  if (Array.isArray(e))
    return e;
}
function _k(e, t) {
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
function Rk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $k(e, t) {
  return Pk(e) || _k(e, t) || jk(e, t) || Rk();
}
function jk(e, t) {
  if (e) {
    if (typeof e == "string")
      return Dm(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Dm(e, t) : void 0;
  }
}
const lv = Object.entries, bm = Object.setPrototypeOf, Uk = Object.isFrozen, Hk = Object.getPrototypeOf, Fk = Object.getOwnPropertyDescriptor;
let Ke = Object.freeze, Ye = Object.seal, jr = Object.create, uv = typeof Reflect < "u" && Reflect, zc = uv.apply, Lc = uv.construct;
Ke || (Ke = function(t) {
  return t;
});
Ye || (Ye = function(t) {
  return t;
});
zc || (zc = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    o[i - 2] = arguments[i];
  return t.apply(n, o);
});
Lc || (Lc = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Ko = Le(Array.prototype.forEach), Bk = Le(Array.prototype.lastIndexOf), Im = Le(Array.prototype.pop), _r = Le(Array.prototype.push), Kk = Le(Array.prototype.splice), Rn = Array.isArray, Jo = Le(String.prototype.toLowerCase), vu = Le(String.prototype.toString), Om = Le(String.prototype.match), Zo = Le(String.prototype.replace), Pm = Le(String.prototype.indexOf), Zk = Le(String.prototype.trim), Vk = Le(Number.prototype.toString), Wk = Le(Boolean.prototype.toString), _m = typeof BigInt > "u" ? null : Le(BigInt.prototype.toString), Rm = typeof Symbol > "u" ? null : Le(Symbol.prototype.toString), _e = Le(Object.prototype.hasOwnProperty), Vo = Le(Object.prototype.toString), He = Le(RegExp.prototype.test), ar = Yk(TypeError);
function Le(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return zc(e, t, r);
  };
}
function Yk(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Lc(e, n);
  };
}
function q(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Jo;
  if (bm && bm(e, null), !Rn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (Uk(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function Qk(e) {
  for (let t = 0; t < e.length; t++)
    _e(e, t) || (e[t] = null);
  return e;
}
function it(e) {
  const t = jr(null);
  for (const r of lv(e)) {
    var n = $k(r, 2);
    const o = n[0], i = n[1];
    _e(e, o) && (Rn(i) ? t[o] = Qk(i) : i && typeof i == "object" && i.constructor === Object ? t[o] = it(i) : t[o] = i);
  }
  return t;
}
function Gk(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Vk(e);
    case "boolean":
      return Wk(e);
    case "bigint":
      return _m ? _m(e) : "0";
    case "symbol":
      return Rm ? Rm(e) : "Symbol()";
    case "undefined":
      return Vo(e);
    case "function":
    case "object": {
      if (e === null)
        return Vo(e);
      const t = e, n = tn(t, "toString");
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
function tn(e, t) {
  for (; e !== null; ) {
    const r = Fk(e, t);
    if (r) {
      if (r.get)
        return Le(r.get);
      if (typeof r.value == "function")
        return Le(r.value);
    }
    e = Hk(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Xk(e) {
  try {
    return He(e, ""), !0;
  } catch {
    return !1;
  }
}
const $m = Ke(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), wu = Ke(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Tu = Ke(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Jk = Ke(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Au = Ke(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), qk = Ke(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), jm = Ke(["#text"]), Um = Ke(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Su = Ke(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Hm = Ke(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ms = Ke(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), eE = Ye(/{{[\w\W]*|^[\w\W]*}}/g), tE = Ye(/<%[\w\W]*|^[\w\W]*%>/g), nE = Ye(/\${[\w\W]*/g), rE = Ye(/^data-[\-\w.\u00B7-\uFFFF]+$/), oE = Ye(/^aria-[\-\w]+$/), Fm = Ye(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), iE = Ye(/^(?:\w+script|data):/i), sE = Ye(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), aE = Ye(/^html$/i), lE = Ye(/^[a-z][.\w]*(-[.\w]+)+$/i), Bm = Ye(/<[/\w!]/g), uE = Ye(/<[/\w]/g), cE = Ye(/<\/no(script|embed|frames)/i), dE = Ye(/\/>/i), en = {
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
}, fE = function() {
  return typeof window > "u" ? null : window;
}, pE = function(t, n) {
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
}, Km = function() {
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
}, bn = function(t, n, r, o) {
  return _e(t, n) && Rn(t[n]) ? q(o.base ? it(o.base) : {}, t[n], o.transform) : r;
};
function cv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fE();
  const t = (H) => cv(H);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== en.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, s = e.Node, a = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, p = a.prototype, v = tn(p, "cloneNode"), S = tn(p, "remove"), T = tn(p, "nextSibling"), D = tn(p, "childNodes"), y = tn(p, "parentNode"), m = tn(p, "shadowRoot"), h = tn(p, "attributes"), C = s && s.prototype ? tn(s.prototype, "nodeType") : null, E = s && s.prototype ? tn(s.prototype, "nodeName") : null;
  if (typeof i == "function") {
    const H = n.createElement("template");
    H.content && H.content.ownerDocument && (n = H.content.ownerDocument);
  }
  let M, A = "", x, F = !1, b = 0;
  const j = function() {
    if (b > 0)
      throw ar('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(g) {
    j(), b++;
    try {
      return M.createHTML(g);
    } finally {
      b--;
    }
  }, Y = function(g) {
    j(), b++;
    try {
      return M.createScriptURL(g);
    } finally {
      b--;
    }
  }, xe = function() {
    return F || (x = pE(f, o), F = !0), x;
  }, Qe = n, ke = Qe.implementation, V = Qe.createNodeIterator, O = Qe.createDocumentFragment, R = Qe.getElementsByTagName, w = r.importNode;
  let L = Km();
  t.isSupported = typeof lv == "function" && typeof y == "function" && ke && ke.createHTMLDocument !== void 0;
  const _ = eE, J = tE, X = nE, Ge = rE, Xe = oE, Oe = iE, dt = sE, xo = lE;
  let yf = Fm, ge = null;
  const vf = q({}, [...$m, ...wu, ...Tu, ...Au, ...jm]);
  let ye = null;
  const wf = q({}, [...Um, ...Su, ...Hm, ...Ms]);
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
  })), Do = null, Tf = null;
  const zn = Object.seal(jr(null, {
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
  let Af = !0, Nl = !0, Sf = !1, kf = !0, Ln = !1, bo = !0, ir = !1, Ml = !1, Cl = null, zl = null, Ll = !1, xr = !1, es = !1, ts = !1, Ef = !0, Nf = !1;
  const Mf = "user-content-";
  let xl = !0, Dl = !1, Dr = {}, Xt = null;
  const bl = q({}, [
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
  let Cf = null;
  const zf = q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Il = null;
  const Lf = q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ns = "http://www.w3.org/1998/Math/MathML", rs = "http://www.w3.org/2000/svg", Jt = "http://www.w3.org/1999/xhtml";
  let br = Jt, Ol = !1, Pl = null;
  const c0 = q({}, [ns, rs, Jt], vu), xf = Ke(["mi", "mo", "mn", "ms", "mtext"]);
  let _l = q({}, xf);
  const Df = Ke(["annotation-xml"]);
  let Rl = q({}, Df);
  const d0 = q({}, ["title", "style", "font", "a", "script"]);
  let Io = null;
  const f0 = ["application/xhtml+xml", "text/html"], p0 = "text/html";
  let we = null, Ir = null;
  const m0 = n.createElement("form"), bf = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, $l = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ir && Ir === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = it(g), Io = // eslint-disable-next-line unicorn/prefer-includes
    f0.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? p0 : g.PARSER_MEDIA_TYPE, we = Io === "application/xhtml+xml" ? vu : Jo, ge = bn(g, "ALLOWED_TAGS", vf, {
      transform: we
    }), ye = bn(g, "ALLOWED_ATTR", wf, {
      transform: we
    }), Pl = bn(g, "ALLOWED_NAMESPACES", c0, {
      transform: vu
    }), Il = bn(g, "ADD_URI_SAFE_ATTR", Lf, {
      transform: we,
      base: Lf
    }), Cf = bn(g, "ADD_DATA_URI_TAGS", zf, {
      transform: we,
      base: zf
    }), Xt = bn(g, "FORBID_CONTENTS", bl, {
      transform: we
    }), Do = bn(g, "FORBID_TAGS", it({}), {
      transform: we
    }), Tf = bn(g, "FORBID_ATTR", it({}), {
      transform: we
    }), Dr = _e(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? it(g.USE_PROFILES) : g.USE_PROFILES : !1, Af = g.ALLOW_ARIA_ATTR !== !1, Nl = g.ALLOW_DATA_ATTR !== !1, Sf = g.ALLOW_UNKNOWN_PROTOCOLS || !1, kf = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ln = g.SAFE_FOR_TEMPLATES || !1, bo = g.SAFE_FOR_XML !== !1, ir = g.WHOLE_DOCUMENT || !1, xr = g.RETURN_DOM || !1, es = g.RETURN_DOM_FRAGMENT || !1, ts = g.RETURN_TRUSTED_TYPE || !1, Ll = g.FORCE_BODY || !1, Ef = g.SANITIZE_DOM !== !1, Nf = g.SANITIZE_NAMED_PROPS || !1, xl = g.KEEP_CONTENT !== !1, Dl = g.IN_PLACE || !1, yf = Xk(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : Fm, br = typeof g.NAMESPACE == "string" ? g.NAMESPACE : Jt, _l = _e(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? it(g.MATHML_TEXT_INTEGRATION_POINTS) : q({}, xf), Rl = _e(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? it(g.HTML_INTEGRATION_POINTS) : q({}, Df);
    const z = _e(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? it(g.CUSTOM_ELEMENT_HANDLING) : jr(null);
    if (ve = jr(null), _e(z, "tagNameCheck") && bf(z.tagNameCheck) && (ve.tagNameCheck = z.tagNameCheck), _e(z, "attributeNameCheck") && bf(z.attributeNameCheck) && (ve.attributeNameCheck = z.attributeNameCheck), _e(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), Ye(ve), Ln && (Nl = !1), es && (xr = !0), Dr && (ge = q({}, jm), ye = jr(null), Dr.html === !0 && (q(ge, $m), q(ye, Um)), Dr.svg === !0 && (q(ge, wu), q(ye, Su), q(ye, Ms)), Dr.svgFilters === !0 && (q(ge, Tu), q(ye, Su), q(ye, Ms)), Dr.mathMl === !0 && (q(ge, Au), q(ye, Hm), q(ye, Ms))), zn.tagCheck = null, zn.attributeCheck = null, _e(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? zn.tagCheck = g.ADD_TAGS : Rn(g.ADD_TAGS) && (ge === vf && (ge = it(ge)), q(ge, g.ADD_TAGS, we))), _e(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? zn.attributeCheck = g.ADD_ATTR : Rn(g.ADD_ATTR) && (ye === wf && (ye = it(ye)), q(ye, g.ADD_ATTR, we))), _e(g, "ADD_URI_SAFE_ATTR") && Rn(g.ADD_URI_SAFE_ATTR) && q(Il, g.ADD_URI_SAFE_ATTR, we), _e(g, "FORBID_CONTENTS") && Rn(g.FORBID_CONTENTS) && (Xt === bl && (Xt = it(Xt)), q(Xt, g.FORBID_CONTENTS, we)), _e(g, "ADD_FORBID_CONTENTS") && Rn(g.ADD_FORBID_CONTENTS) && (Xt === bl && (Xt = it(Xt)), q(Xt, g.ADD_FORBID_CONTENTS, we)), xl && (ge["#text"] = !0), ir && q(ge, ["html", "head", "body"]), ge.table && (q(ge, ["tbody"]), delete Do.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ar('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ar('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const $ = M;
      M = g.TRUSTED_TYPES_POLICY;
      try {
        A = U("");
      } catch (K) {
        throw M = $, K;
      }
    } else
      g.TRUSTED_TYPES_POLICY === null ? (M = void 0, A = "") : (M === void 0 && (M = xe()), M && typeof A == "string" && (A = U("")));
    Ke && Ke(g), Ir = g;
  }, If = q({}, [...wu, ...Tu, ...Jk]), Of = q({}, [...Au, ...qk]), h0 = function(g, z, $) {
    return z.namespaceURI === Jt ? g === "svg" : z.namespaceURI === ns ? g === "svg" && ($ === "annotation-xml" || _l[$]) : !!If[g];
  }, g0 = function(g, z, $) {
    return z.namespaceURI === Jt ? g === "math" : z.namespaceURI === rs ? g === "math" && Rl[$] : !!Of[g];
  }, y0 = function(g, z, $) {
    return z.namespaceURI === rs && !Rl[$] || z.namespaceURI === ns && !_l[$] ? !1 : !Of[g] && (d0[g] || !If[g]);
  }, v0 = function(g) {
    let z = y(g);
    (!z || !z.tagName) && (z = {
      namespaceURI: br,
      tagName: "template"
    });
    const $ = Jo(g.tagName), K = Jo(z.tagName);
    return Pl[g.namespaceURI] ? g.namespaceURI === rs ? h0($, z, K) : g.namespaceURI === ns ? g0($, z, K) : g.namespaceURI === Jt ? y0($, z, K) : !!(Io === "application/xhtml+xml" && Pl[g.namespaceURI]) : !1;
  }, xn = function(g) {
    _r(t.removed, {
      element: g
    });
    try {
      y(g).removeChild(g);
    } catch {
      if (S(g), !y(g))
        throw ar("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Pf = function(g) {
    const z = D(g);
    if (z) {
      const K = [];
      Ko(z, (Q) => {
        _r(K, Q);
      }), Ko(K, (Q) => {
        try {
          S(Q);
        } catch {
        }
      });
    }
    const $ = h(g);
    if ($)
      for (let K = $.length - 1; K >= 0; --K) {
        const Q = $[K], ee = Q && Q.name;
        if (typeof ee == "string")
          try {
            g.removeAttribute(ee);
          } catch {
          }
      }
  }, sr = function(g, z) {
    try {
      _r(t.removed, {
        attribute: z.getAttributeNode(g),
        from: z
      });
    } catch {
      _r(t.removed, {
        attribute: null,
        from: z
      });
    }
    if (z.removeAttribute(g), g === "is")
      if (xr || es)
        try {
          xn(z);
        } catch {
        }
      else
        try {
          z.setAttribute(g, "");
        } catch {
        }
  }, w0 = function(g) {
    const z = h(g);
    if (z)
      for (let $ = z.length - 1; $ >= 0; --$) {
        const K = z[$], Q = K && K.name;
        if (!(typeof Q != "string" || ye[we(Q)]))
          try {
            g.removeAttribute(Q);
          } catch {
          }
      }
  }, T0 = function(g) {
    const z = [g];
    for (; z.length > 0; ) {
      const $ = z.pop();
      (C ? C($) : $.nodeType) === en.element && w0($);
      const Q = D($);
      if (Q)
        for (let ee = Q.length - 1; ee >= 0; --ee)
          z.push(Q[ee]);
    }
  }, _f = function(g) {
    let z = null, $ = null;
    if (Ll)
      g = "<remove></remove>" + g;
    else {
      const ee = Om(g, /^[\r\n\t ]+/);
      $ = ee && ee[0];
    }
    Io === "application/xhtml+xml" && br === Jt && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const K = M ? U(g) : g;
    if (br === Jt)
      try {
        z = new c().parseFromString(K, Io);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = ke.createDocument(br, "template", null);
      try {
        z.documentElement.innerHTML = Ol ? A : K;
      } catch {
      }
    }
    const Q = z.body || z.documentElement;
    return g && $ && Q.insertBefore(n.createTextNode($), Q.childNodes[0] || null), br === Jt ? R.call(z, ir ? "html" : "body")[0] : ir ? z.documentElement : Q;
  }, Rf = function(g) {
    return V.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, os = function(g) {
    return g = Zo(g, _, " "), g = Zo(g, J, " "), g = Zo(g, X, " "), g;
  }, jl = function(g) {
    var z;
    g.normalize();
    const $ = V.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let K = $.nextNode();
    for (; K; )
      K.data = os(K.data), K = $.nextNode();
    const Q = (z = g.querySelectorAll) === null || z === void 0 ? void 0 : z.call(g, "template");
    Q && Ko(Q, (ee) => {
      Or(ee.content) && jl(ee.content);
    });
  }, is = function(g) {
    const z = E ? E(g) : null;
    return typeof z != "string" || we(z) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    g.nodeType !== C(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    g.childNodes !== D(g);
  }, Or = function(g) {
    if (!C || typeof g != "object" || g === null)
      return !1;
    try {
      return C(g) === en.documentFragment;
    } catch {
      return !1;
    }
  }, Oo = function(g) {
    if (!C || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof C(g) == "number";
    } catch {
      return !1;
    }
  };
  function pn(H, g, z) {
    H.length !== 0 && Ko(H, ($) => {
      $.call(t, g, z, Ir);
    });
  }
  const A0 = function(g, z) {
    return !!(bo && g.hasChildNodes() && !Oo(g.firstElementChild) && He(Bm, g.textContent) && He(Bm, g.innerHTML) || bo && g.namespaceURI === Jt && z === "style" && Oo(g.firstElementChild) || g.nodeType === en.processingInstruction || bo && g.nodeType === en.comment && He(uE, g.data));
  }, S0 = function(g, z) {
    if (!Do[z] && Uf(z) && (ve.tagNameCheck instanceof RegExp && He(ve.tagNameCheck, z) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(z)))
      return !1;
    if (xl && !Xt[z]) {
      const $ = y(g), K = D(g);
      if (K && $) {
        const Q = K.length;
        for (let ee = Q - 1; ee >= 0; --ee) {
          const Pe = Dl ? K[ee] : v(K[ee], !0);
          $.insertBefore(Pe, T(g));
        }
      }
    }
    return xn(g), !0;
  }, $f = function(g) {
    if (pn(L.beforeSanitizeElements, g, null), is(g))
      return xn(g), !0;
    const z = we(E ? E(g) : g.nodeName);
    if (pn(L.uponSanitizeElement, g, {
      tagName: z,
      allowedTags: ge
    }), A0(g, z))
      return xn(g), !0;
    if (Do[z] || !(zn.tagCheck instanceof Function && zn.tagCheck(z)) && !ge[z])
      return S0(g, z);
    if ((C ? C(g) : g.nodeType) === en.element && !v0(g) || (z === "noscript" || z === "noembed" || z === "noframes") && He(cE, g.innerHTML))
      return xn(g), !0;
    if (Ln && g.nodeType === en.text) {
      const K = os(g.textContent);
      g.textContent !== K && (_r(t.removed, {
        element: g.cloneNode()
      }), g.textContent = K);
    }
    return pn(L.afterSanitizeElements, g, null), !1;
  }, jf = function(g, z, $) {
    if (Tf[z] || Ef && (z === "id" || z === "name") && ($ in n || $ in m0))
      return !1;
    const K = ye[z] || zn.attributeCheck instanceof Function && zn.attributeCheck(z, g);
    if (!(Nl && He(Ge, z))) {
      if (!(Af && He(Xe, z))) {
        if (K) {
          if (!Il[z]) {
            if (!He(yf, Zo($, dt, ""))) {
              if (!((z === "src" || z === "xlink:href" || z === "href") && g !== "script" && Pm($, "data:") === 0 && Cf[g])) {
                if (!(Sf && !He(Oe, Zo($, dt, "")))) {
                  if ($)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Uf(g) && (ve.tagNameCheck instanceof RegExp && He(ve.tagNameCheck, g) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(g)) && (ve.attributeNameCheck instanceof RegExp && He(ve.attributeNameCheck, z) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(z, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          z === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && He(ve.tagNameCheck, $) || ve.tagNameCheck instanceof Function && ve.tagNameCheck($)))
        )
          return !1;
      }
    }
    return !0;
  }, k0 = q({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Uf = function(g) {
    return !k0[Jo(g)] && He(xo, g);
  }, E0 = function(g, z, $, K) {
    if (M && typeof f == "object" && typeof f.getAttributeType == "function" && !$)
      switch (f.getAttributeType(g, z)) {
        case "TrustedHTML":
          return U(K);
        case "TrustedScriptURL":
          return Y(K);
      }
    return K;
  }, N0 = function(g, z, $, K) {
    try {
      $ ? g.setAttributeNS($, z, K) : g.setAttribute(z, K), is(g) ? xn(g) : Im(t.removed);
    } catch {
      sr(z, g);
    }
  }, Hf = function(g) {
    pn(L.beforeSanitizeAttributes, g, null);
    const z = g.attributes;
    if (!z || is(g))
      return;
    const $ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let K = z.length;
    const Q = we(g.nodeName);
    for (; K--; ) {
      const ee = z[K], Pe = ee.name, Me = ee.namespaceURI, xt = ee.value, Ut = we(Pe), Hl = xt;
      let ot = Pe === "value" ? Hl : Zk(Hl);
      if ($.attrName = Ut, $.attrValue = ot, $.keepAttr = !0, $.forceKeepAttr = void 0, pn(L.uponSanitizeAttribute, g, $), ot = $.attrValue, Nf && (Ut === "id" || Ut === "name") && Pm(ot, Mf) !== 0 && (sr(Pe, g), ot = Mf + ot), bo && He(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ot)) {
        sr(Pe, g);
        continue;
      }
      if (Ut === "attributename" && Om(ot, "href")) {
        sr(Pe, g);
        continue;
      }
      if (!$.forceKeepAttr) {
        if (!$.keepAttr) {
          sr(Pe, g);
          continue;
        }
        if (!kf && He(dE, ot)) {
          sr(Pe, g);
          continue;
        }
        if (Ln && (ot = os(ot)), !jf(Q, Ut, ot)) {
          sr(Pe, g);
          continue;
        }
        ot = E0(Q, Ut, Me, ot), ot !== Hl && N0(g, Pe, Me, ot);
      }
    }
    pn(L.afterSanitizeAttributes, g, null);
  }, ss = function(g) {
    let z = null;
    const $ = Rf(g);
    for (pn(L.beforeSanitizeShadowDOM, g, null); z = $.nextNode(); )
      if (pn(L.uponSanitizeShadowNode, z, null), $f(z), Hf(z), Or(z.content) && ss(z.content), (C ? C(z) : z.nodeType) === en.element) {
        const Q = m(z);
        Or(Q) && (Ul(Q), ss(Q));
      }
    pn(L.afterSanitizeShadowDOM, g, null);
  }, Ul = function(g) {
    const z = [{
      node: g,
      shadow: null
    }];
    for (; z.length > 0; ) {
      const $ = z.pop();
      if ($.shadow) {
        ss($.shadow);
        continue;
      }
      const K = $.node, ee = (C ? C(K) : K.nodeType) === en.element, Pe = D(K);
      if (Pe)
        for (let Me = Pe.length - 1; Me >= 0; --Me)
          z.push({
            node: Pe[Me],
            shadow: null
          });
      if (ee) {
        const Me = E ? E(K) : null;
        if (typeof Me == "string" && we(Me) === "template") {
          const xt = K.content;
          Or(xt) && z.push({
            node: xt,
            shadow: null
          });
        }
      }
      if (ee) {
        const Me = m(K);
        Or(Me) && z.push({
          node: null,
          shadow: Me
        }, {
          node: Me,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(H) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, $ = null, K = null, Q = null;
    if (Ol = !H, Ol && (H = "<!-->"), typeof H != "string" && !Oo(H) && (H = Gk(H), typeof H != "string"))
      throw ar("dirty is not a string, aborting");
    if (!t.isSupported)
      return H;
    Ml ? (ge = Cl, ye = zl) : $l(g), (L.uponSanitizeElement.length > 0 || L.uponSanitizeAttribute.length > 0) && (ge = it(ge)), L.uponSanitizeAttribute.length > 0 && (ye = it(ye)), t.removed = [];
    const ee = Dl && typeof H != "string" && Oo(H);
    if (ee) {
      const xt = E ? E(H) : H.nodeName;
      if (typeof xt == "string") {
        const Ut = we(xt);
        if (!ge[Ut] || Do[Ut])
          throw ar("root node is forbidden and cannot be sanitized in-place");
      }
      if (is(H))
        throw ar("root node is clobbered and cannot be sanitized in-place");
      try {
        Ul(H);
      } catch (Ut) {
        throw Pf(H), Ut;
      }
    } else if (Oo(H))
      z = _f("<!---->"), $ = z.ownerDocument.importNode(H, !0), $.nodeType === en.element && $.nodeName === "BODY" || $.nodeName === "HTML" ? z = $ : z.appendChild($), Ul($);
    else {
      if (!xr && !Ln && !ir && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return M && ts ? U(H) : H;
      if (z = _f(H), !z)
        return xr ? null : ts ? A : "";
    }
    z && Ll && xn(z.firstChild);
    const Pe = Rf(ee ? H : z);
    try {
      for (; K = Pe.nextNode(); )
        $f(K), Hf(K), Or(K.content) && ss(K.content);
    } catch (xt) {
      throw ee && Pf(H), xt;
    }
    if (ee)
      return Ko(t.removed, (xt) => {
        xt.element && T0(xt.element);
      }), Ln && jl(H), H;
    if (xr) {
      if (Ln && jl(z), es)
        for (Q = O.call(z.ownerDocument); z.firstChild; )
          Q.appendChild(z.firstChild);
      else
        Q = z;
      return (ye.shadowroot || ye.shadowrootmode) && (Q = w.call(r, Q, !0)), Q;
    }
    let Me = ir ? z.outerHTML : z.innerHTML;
    return ir && ge["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && He(aE, z.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + Me), Ln && (Me = os(Me)), M && ts ? U(Me) : Me;
  }, t.setConfig = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    $l(H), Ml = !0, Cl = ge, zl = ye;
  }, t.clearConfig = function() {
    Ir = null, Ml = !1, Cl = null, zl = null, M = x, A = "";
  }, t.isValidAttribute = function(H, g, z) {
    Ir || $l({});
    const $ = we(H), K = we(g);
    return jf($, K, z);
  }, t.addHook = function(H, g) {
    typeof g == "function" && _e(L, H) && _r(L[H], g);
  }, t.removeHook = function(H, g) {
    if (_e(L, H)) {
      if (g !== void 0) {
        const z = Bk(L[H], g);
        return z === -1 ? void 0 : Kk(L[H], z, 1)[0];
      }
      return Im(L[H]);
    }
  }, t.removeHooks = function(H) {
    _e(L, H) && (L[H] = []);
  }, t.removeAllHooks = function() {
    L = Km();
  }, t;
}
var mE = cv();
const hE = [
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
], gE = ["href", "style", "src", "alt", "width", "height", "align", "colspan", "rowspan", "target", "rel"];
function Ri(e) {
  return e != null && e.trim() ? mE.sanitize(e, {
    ALLOWED_TAGS: [...hE],
    ALLOWED_ATTR: gE,
    ALLOW_DATA_ATTR: !1
  }) : "";
}
const dv = ["H1", "H2", "H3", "H4", "H5", "H6"], Mn = "H2";
function yE(e) {
  const t = e == null ? void 0 : e.trim().toUpperCase();
  return t && dv.includes(t) ? t : Mn;
}
const vE = {
  H1: "32px",
  H2: "28px",
  H3: "24px",
  H4: "20px",
  H5: "18px",
  H6: "16px"
}, wE = {
  H1: "2rem",
  H2: "1.75rem",
  H3: "1.5rem",
  H4: "1.25rem",
  H5: "1.125rem",
  H6: "1rem"
}, fv = ["Left", "Center", "Right"], pv = ["Top", "Right", "Bottom", "Left"], Cr = "Left", wl = "Top";
function mv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "center" ? "Center" : t === "right" ? "Right" : "Left";
}
function hv(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "right" ? "Right" : t === "bottom" ? "Bottom" : t === "left" ? "Left" : "Top";
}
function TE(e, t = {}, n = "stacked") {
  const r = e.contentAlignment ?? Cr, o = Math.max(0, e.offsetPx ?? 0), i = e.offsetDirection ?? wl, s = {
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
    s[a] = o;
  }
  return s;
}
function AE(e) {
  return `zone-layout-${(e.contentAlignment ?? Cr).toLowerCase()}`;
}
function SE(e) {
  const t = { top: 16, right: 24, bottom: 16, left: 24 }, n = Math.max(0, e.offsetPx ?? 0);
  if (n <= 0)
    return t;
  const r = e.offsetDirection ?? wl;
  return r === "Top" && (t.top += n), r === "Right" && (t.right += n), r === "Bottom" && (t.bottom += n), r === "Left" && (t.left += n), t;
}
function ku(e, t = "") {
  const n = (e.contentAlignment ?? Cr).toLowerCase(), r = SE(e);
  return `padding:${r.top}px ${r.right}px ${r.bottom}px ${r.left}px;text-align:${n};${t}`;
}
function kE(e) {
  return (e.contentAlignment ?? Cr).toLowerCase();
}
function EE(e) {
  const t = e.contentAlignment ?? Cr, n = "display:block;width:100%;max-width:552px;height:auto;border:0;";
  return t === "Center" ? `${n}margin:0 auto;` : t === "Right" ? `${n}margin-left:auto;margin-right:0;` : `${n}margin:0;`;
}
function NE() {
  return "display:inline-block;";
}
function nn(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Zs(e, t, n) {
  var r;
  return ((r = e.colors.find((o) => o.colorUsageType === t)) == null ? void 0 : r.hexValue) ?? n;
}
function Eu(e, t, n) {
  var r;
  return ((r = e.fonts.find((o) => o.fontUsageType === t)) == null ? void 0 : r.fontFamily) ?? n;
}
function ME(e) {
  const t = e.zoneKey.toLowerCase(), n = e.zoneLabel.toLowerCase();
  return t.includes("headline") || n.includes("headline");
}
function CE(e, t, n) {
  var i, s, a, l, u, c;
  const r = kE(e), o = ku(e);
  if (ml(e)) {
    const f = ku(e, "padding-top:24px;padding-bottom:16px;"), p = (t == null ? void 0 : t.imageAssetUrl) ?? n.logoAssetUrl, v = Gi(p), S = rv(p), T = S ? `background-color:${S};` : "";
    return `<tr>
      <td align="${r}" style="${f}${T}">
        <img src="${nn(v)}" alt="${nn(n.brandKitName)}" width="200" style="display:inline-block;max-width:200px;height:auto;border:0;" />
      </td>
    </tr>`;
  }
  switch (e.zoneType) {
    case "Text": {
      const f = (i = t == null ? void 0 : t.textValue) == null ? void 0 : i.trim();
      if (!f)
        return "";
      const p = ME(e), v = Eu(n, p ? "Heading" : "Body", lo), S = p ? "28px" : "16px", T = p ? "bold" : "normal", D = Zs(n, "Secondary", Fn.secondary);
      return `<tr>
        <td align="${r}" style="${o}font-family:${v};font-size:${S};font-weight:${T};color:${D};line-height:1.5;">
          ${nn(f)}
        </td>
      </tr>`;
    }
    case "Heading": {
      const f = (s = t == null ? void 0 : t.textValue) == null ? void 0 : s.trim();
      if (!f)
        return "";
      const p = e.headingLevel ?? Mn, v = Eu(n, "Heading", lo), S = vE[p], T = Zs(n, "Secondary", Fn.secondary), D = p.toLowerCase();
      return `<tr>
        <td align="${r}" style="${o}">
          <${D} style="margin:0;font-family:${v};font-size:${S};font-weight:700;color:${T};line-height:1.25;">
            ${nn(f)}
          </${D}>
        </td>
      </tr>`;
    }
    case "Image": {
      const f = (a = t == null ? void 0 : t.imageAssetUrl) == null ? void 0 : a.trim();
      if (!f)
        return "";
      const p = `<img src="${nn(f)}" alt="${nn(e.zoneLabel)}" width="552" style="${EE(e)}" />`, v = (l = t == null ? void 0 : t.linkUrl) == null ? void 0 : l.trim(), S = v ? `<a href="${nn(v)}" target="_blank" rel="noopener noreferrer">${p}</a>` : p;
      return `<tr><td align="${r}" style="${o}">${S}</td></tr>`;
    }
    case "CTA Button": {
      const f = (u = t == null ? void 0 : t.textValue) == null ? void 0 : u.trim();
      if (!f)
        return "";
      const p = ((c = t == null ? void 0 : t.linkUrl) == null ? void 0 : c.trim()) || "#", v = Zs(n, "Accent", Fn.accent), S = Eu(n, "CTA", lo);
      return `<tr>
        <td align="${r}" style="${ku(e, "padding-bottom:32px;")}">
          <a href="${nn(p)}" target="_blank" rel="noopener noreferrer" style="${NE()}background-color:${v};color:#ffffff;font-family:${S};font-size:16px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:4px;">
            ${nn(f)}
          </a>
        </td>
      </tr>`;
    }
    case "HTML": {
      const f = e.isLocked ? e.htmlDefaultContent : (t == null ? void 0 : t.htmlValue) ?? e.htmlDefaultContent, p = Ri(f);
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
function xc(e, t, n) {
  const r = Zs(n, "Background", Fn.background), o = "#ffffff", i = qd(e), s = e.zones.sort((a, l) => a.sortOrder - l.sortOrder).map((a) => CE(a, t[a.id] ?? t[a.zoneKey], n)).filter(Boolean).join(`
`);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${nn(e.templateName)}</title>
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
const er = "dummy-brand-kit", Zm = "dummy-template";
function fr(e = er) {
  return xk(e);
}
function zE(e, t = "Social") {
  return t === "Email" || t === "Newsletter" ? xE(e) : LE(e);
}
function LE(e) {
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
function xE(e) {
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
function DE(e, t) {
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
function bE(e) {
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
function Xn(e, t, n) {
  _S(e, t, n);
}
function wo(e) {
  return { Invariant: e };
}
function Ie(e, t, n) {
  e[t] = wo(n);
}
function ef(e, t, n) {
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
      t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0, t.headingLevel || (t.headingLevel = Mn);
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
function IE(e, t) {
  const n = { zoneType: t };
  return t === "Heading" ? (n.headingLevel = e.headingLevel ?? Mn, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : (n.headingLevel = void 0, t === "Text" ? (n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "Image" ? (n.maxCharacterCount = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "HTML" ? (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n) : (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n));
}
function OE(e) {
  return {
    Title: wo(e.zoneKey)
  };
}
const PE = {
  textValue: ["textValue", "TextValue", "text", "content", "zoneText", "value"],
  colorValue: ["colorValue", "ColorValue", "color", "hexValue"],
  htmlValue: ["htmlValue", "HtmlValue", "html", "htmlContent"],
  linkUrl: ["linkUrl", "LinkUrl", "url", "href", "link"]
};
function gv(e) {
  const t = {};
  return e.textValue !== void 0 && Ie(t, "textValue", e.textValue), e.colorValue !== void 0 && Ie(t, "colorValue", e.colorValue), e.htmlValue !== void 0 && Ie(t, "htmlValue", e.htmlValue), e.linkUrl !== void 0 && Ie(t, "linkUrl", e.linkUrl), t;
}
function _E(e, t) {
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
      for (const s of PE[i.key]) {
        const a = n.get(s.toLowerCase());
        if (a && !(/^title$/i.test(a) || /\.Title$/i.test(a))) {
          Ie(r, a, i.value);
          break;
        }
      }
  return r;
}
function RE(e) {
  var t, n, r, o, i, s;
  return !!((t = e.textValue) != null && t.trim() || (n = e.htmlValue) != null && n.trim() || (r = e.colorValue) != null && r.trim() || (o = e.linkUrl) != null && o.trim() || (i = e.imageAssetId) != null && i.trim() || (s = e.imageAssetUrl) != null && s.trim());
}
function $E(e) {
  const t = {};
  return e.isRawHtmlOverrideMA !== void 0 && (t.isRawHtmlOverrideMA = e.isRawHtmlOverrideMA), e.rawHtmlOverrideContent !== void 0 && Ie(t, "rawHtmlOverrideContent", e.rawHtmlOverrideContent), e.overrideReasonMA !== void 0 && Ie(t, "overrideReasonMA", e.overrideReasonMA), e.zoneLayoutJson !== void 0 && Ie(t, "zoneLayoutJson", e.zoneLayoutJson), e.designerInstanceJson !== void 0 && Ie(t, "designerInstanceJson", e.designerInstanceJson), t;
}
function jE(e) {
  return { templateName: wo(e.templateName) };
}
function yv(e) {
  const t = {};
  return Ie(t, "templateName", e.templateName), e.canvasWidth !== void 0 && ln(t, "canvasWidth", e.canvasWidth), e.canvasHeight !== void 0 && ln(t, "canvasHeight", e.canvasHeight), e.designerDocumentJson !== void 0 && Ie(t, "designerDocumentJson", e.designerDocumentJson), t;
}
function vv(e) {
  return {
    zoneKey: wo(e.zoneKey),
    zoneLabel: wo(e.zoneLabel || e.zoneKey)
  };
}
function UE(e, t) {
  if (!t)
    return vv(e);
  const n = {}, r = tr(e.zoneLabel) ?? e.zoneKey, o = tr(t.zoneLabel) ?? t.zoneKey;
  return e.zoneKey !== t.zoneKey && Ie(n, "zoneKey", e.zoneKey), r !== o && Ie(n, "zoneLabel", r), n;
}
function HE(e) {
  const t = {};
  return Ie(t, "zoneType", e.zoneType), ef(t, "isLocked", e.isLocked), ln(t, "sortOrder", e.sortOrder), t;
}
function FE(e, t) {
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
function BE(e, t) {
  const n = {};
  return (!t || e.isLocked !== t.isLocked) && ef(n, "isLocked", e.isLocked), (!t || e.sortOrder !== t.sortOrder) && ln(n, "sortOrder", e.sortOrder), n;
}
function wv(e, t) {
  const n = {};
  return e.positionX !== void 0 && e.positionX !== (t == null ? void 0 : t.positionX) && ln(n, "positionX", e.positionX), e.positionY !== void 0 && e.positionY !== (t == null ? void 0 : t.positionY) && ln(n, "positionY", e.positionY), e.zoneWidth !== void 0 && e.zoneWidth !== (t == null ? void 0 : t.zoneWidth) && ln(n, "zoneWidth", e.zoneWidth), e.zoneHeight !== void 0 && e.zoneHeight !== (t == null ? void 0 : t.zoneHeight) && ln(n, "zoneHeight", e.zoneHeight), e.contentAlignment !== void 0 && e.contentAlignment !== (t == null ? void 0 : t.contentAlignment) && Ie(n, "contentAlignment", e.contentAlignment), e.offsetDirection !== void 0 && e.offsetDirection !== (t == null ? void 0 : t.offsetDirection) && Ie(n, "offsetDirection", e.offsetDirection), e.offsetPx !== void 0 && e.offsetPx !== (t == null ? void 0 : t.offsetPx) && ln(n, "offsetPx", e.offsetPx), n;
}
function Tv(e, t) {
  const n = To(e), r = {};
  return (n.zoneType === "Text" || n.zoneType === "Heading") && n.maxCharacterCount !== void 0 && n.maxCharacterCount !== (t == null ? void 0 : t.maxCharacterCount) && ln(r, "maxCharacterCount", n.maxCharacterCount), n.zoneType === "Heading" && n.headingLevel !== void 0 && n.headingLevel !== (t == null ? void 0 : t.headingLevel) && Ie(r, "headingLevel", n.headingLevel), n.zoneType === "Image" && n.aspectRatioLock !== void 0 && n.aspectRatioLock !== tr(t == null ? void 0 : t.aspectRatioLock) && Ie(r, "aspectRatioLock", n.aspectRatioLock), n.zoneType === "HTML" && (n.htmlDefaultContent !== void 0 && n.htmlDefaultContent !== tr(t == null ? void 0 : t.htmlDefaultContent) && Ie(r, "htmlDefaultContent", n.htmlDefaultContent), n.htmlAllowUserOverride !== void 0 && n.htmlAllowUserOverride !== (t == null ? void 0 : t.htmlAllowUserOverride) && ef(r, "htmlAllowUserOverride", n.htmlAllowUserOverride)), r;
}
function Vm(e) {
  const t = To(e);
  return {
    ...HE(t),
    ...wv(t),
    ...Tv(t)
  };
}
function KE(e, t) {
  const n = To(e), r = To(t), o = tr(n.zoneLabel) ?? n.zoneKey, i = tr(r.zoneLabel) ?? r.zoneKey;
  return n.zoneKey === r.zoneKey && o === i && JSON.stringify(Vm(n)) === JSON.stringify(Vm(r));
}
function Wm(e) {
  return /^\d+$/.test(e);
}
const ZE = ["Social", "Email", "Newsletter"];
function tf(e) {
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
function W(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = tf(e[n]);
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
      const r = tf(e[n]);
      if (typeof r == "number" && Number.isFinite(r))
        return r;
      if (typeof r == "string") {
        const o = Number(r);
        if (Number.isFinite(o))
          return o;
      }
    }
}
function Dc(e, ...t) {
  if (!e)
    return !1;
  for (const n of t) {
    const r = tf(e[n]);
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
function St(e, ...t) {
  const n = Vd(e, ...t);
  if (n.length > 0)
    return n;
  if (!e)
    return [];
  for (const r of t) {
    const o = e[r];
    if (!Array.isArray(o))
      continue;
    const i = Er(o);
    if (i.length > 0)
      return i;
  }
  return [];
}
function Tl(e, t) {
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
function VE(e) {
  const t = e.trim().toLowerCase();
  return t.includes("email") ? "Email" : t.includes("newsletter") ? "Newsletter" : "Social";
}
function WE(e) {
  const t = W(e, "EPAM.headingLevel", "headingLevel");
  return t ? yE(t) : void 0;
}
function YE(e) {
  const t = W(e, "EPAM.contentAlignment", "contentAlignment");
  return t ? mv(t) : void 0;
}
function QE(e) {
  const t = W(e, "EPAM.offsetDirection", "offsetDirection");
  return t ? hv(t) : void 0;
}
function Nu(e, t = "") {
  return { id: String(e), name: t || String(e) };
}
function Av(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = t, s = W(r, "EPAM.channelType", "channelType") || W(r, "EPAM.channelTypeMA", "channelTypeMA") || Hn(i, "channelType"), a = W(r, "EPAM.brandKitId", "brandKitId"), l = St(
    o,
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit",
    "marketingTemplateToBrandKit"
  )[0];
  return {
    id: String(e),
    templateName: W(r, "EPAM.templateName", "templateName", "Title") || `Template ${e}`,
    channelType: ZE.includes(s) ? s : VE(s),
    formatPreset: W(r, "EPAM.formatPreset", "formatPreset") || Hn(i, "formatPreset") || "",
    canvasWidth: hn(r, "EPAM.canvasWidth", "canvasWidth"),
    canvasHeight: hn(r, "EPAM.canvasHeight", "canvasHeight"),
    brandKitId: a || (l != null ? String(l) : ""),
    zones: n,
    allowedAssetIds: kv(t).map(String),
    designerDocumentJson: W(
      r,
      "EPAM.designerDocumentJson",
      "designerDocumentJson",
      "DesignerDocumentJson"
    ) || void 0
  };
}
function nf(e, t) {
  const n = t.properties ?? {}, r = t, o = W(n, "EPAM.zoneKey", "zoneKey") || `zone-${e}`, i = W(n, "EPAM.zoneLabel", "zoneLabel", "Title") || `Zone ${e}`, s = W(n, "EPAM.zoneType", "zoneType", "ZoneType", "zoneTypeMA", "ZoneTypeMA") || Hn(r, "zoneType") || Hn(r, "ZoneType") || Hn(r, "EPAM.ZoneType") || Hn(r, "zoneTypeMA"), a = Yd(s, o, i), l = WE(n) ?? (a === "Heading" ? Mn : void 0);
  return {
    id: String(e),
    zoneKey: o,
    zoneLabel: i,
    zoneType: a,
    isLocked: Dc(n, "EPAM.isLocked", "isLocked"),
    sortOrder: hn(n, "EPAM.sortOrder", "sortOrder") ?? 0,
    positionX: hn(n, "EPAM.positionX", "positionX"),
    positionY: hn(n, "EPAM.positionY", "positionY"),
    zoneWidth: hn(n, "EPAM.zoneWidth", "zoneWidth"),
    zoneHeight: hn(n, "EPAM.zoneHeight", "zoneHeight"),
    maxCharacterCount: hn(n, "EPAM.maxCharacterCount", "maxCharacterCount"),
    headingLevel: l,
    contentAlignment: YE(n),
    offsetDirection: QE(n),
    offsetPx: hn(n, "EPAM.offsetPx", "offsetPx"),
    aspectRatioLock: W(n, "EPAM.aspectRatioLock", "aspectRatioLock") || void 0,
    htmlDefaultContent: W(n, "EPAM.htmlDefaultContent", "htmlDefaultContent") || void 0,
    htmlAllowUserOverride: Dc(n, "EPAM.htmlAllowUserOverride", "htmlAllowUserOverride"),
    allowedAssetIds: Ev(t).map(String),
    allowedAssetCollectionId: W(n, "EPAM.allowedAssetCollectionId", "allowedAssetCollectionId") || void 0
  };
}
function Sv(e, t) {
  const n = t.properties ?? {}, r = rf(t), o = r[0] != null ? String(r[0]) : void 0;
  return {
    id: String(e),
    zoneKey: W(n, "EPAM.zoneKey", "zoneKey", "Title") || `zone-${e}`,
    textValue: W(n, "EPAM.textValue", "textValue") || void 0,
    colorValue: W(n, "EPAM.colorValue", "colorValue") || void 0,
    htmlValue: W(n, "EPAM.htmlValue", "htmlValue") || void 0,
    imageAssetId: W(n, "EPAM.imageAssetId", "imageAssetId") || o || void 0,
    imageAssetUrl: W(n, "EPAM.imageAssetUrl", "imageAssetUrl") || void 0,
    linkUrl: W(n, "EPAM.linkUrl", "linkUrl") || void 0
  };
}
function GE(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = W(r, "EPAM.templateId", "templateId") || String(
    St(
      o,
      "marketingAssetToTemplate",
      "MarketingAssetToTemplate",
      "EPAM.MarketingAssetToTemplate"
    )[0] ?? ""
  );
  return {
    id: String(e),
    assetName: W(r, "EPAM.assetName", "assetName", "Title") || `Asset ${e}`,
    channelTypeMA: Nu(
      St(o, "channelTypeMA", "ChannelTypeMA")[0] ?? "channel",
      W(r, "EPAM.channelTypeMA", "channelTypeMA") || "Channel"
    ),
    formatPresetMA: Nu(
      St(o, "formatPresetMA", "FormatPresetMA")[0] ?? "format",
      W(r, "EPAM.formatPresetMA", "formatPresetMA") || "Format"
    ),
    outputFormatMA: Nu(
      St(o, "outputFormatMA", "OutputFormatMA")[0] ?? "output",
      W(r, "EPAM.outputFormatMA", "outputFormatMA") || "Output"
    ),
    templateId: i,
    isRawHtmlOverrideMA: Dc(r, "EPAM.isRawHtmlOverrideMA", "isRawHtmlOverrideMA"),
    rawHtmlOverrideContent: W(r, "EPAM.rawHtmlOverrideContent", "rawHtmlOverrideContent") || void 0,
    overrideReasonMA: W(r, "EPAM.overrideReasonMA", "overrideReasonMA") || void 0,
    zoneLayoutJson: W(r, "EPAM.zoneLayoutJson", "zoneLayoutJson", "builderLayoutJson") || void 0,
    designerInstanceJson: W(
      r,
      "EPAM.designerInstanceJson",
      "designerInstanceJson",
      "DesignerInstanceJson"
    ) || void 0,
    zoneValues: n,
    renderedOutputAssetId: W(r, "EPAM.renderedOutputAssetId", "renderedOutputAssetId") || String(St(o, "marketingAssetToRenderedOutput")[0] ?? "") || void 0
  };
}
function XE(e, t, n = [], r = []) {
  const o = t.properties ?? {};
  return {
    id: String(e),
    brandKitName: W(o, "EPAM.brandKitName", "brandKitName", "Title") || `Brand kit ${e}`,
    logoAssetUrl: W(o, "EPAM.logoAssetUrl", "logoAssetUrl"),
    colors: n,
    fonts: r
  };
}
function kv(e) {
  const t = St(e.relations, ...By), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/template.*asset|allowed.*asset/i.test(r) || /collection|zone/i.test(r) || Array.isArray(o) && n.push(...Er(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function rf(e) {
  const t = St(e.relations, ...Ky), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/selected.*asset|zonevalue.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Er(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function Ev(e) {
  const t = St(e.relations, ...Fy), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/allowed.*asset|zone.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Er(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function JE(e) {
  return [.../* @__PURE__ */ new Set([
    ...St(
      e.relations,
      "templateToZone",
      "templateToTemplateZone",
      "TemplateToTemplateZone",
      "EPAM.TemplateToTemplateZone",
      "templateToEPAM.TemplateZone"
    ),
    ...Tl(e.relations, /template.*zone/i)
  ])];
}
function Nv(e) {
  return [.../* @__PURE__ */ new Set([
    ...St(
      e.relations,
      "marketingAssetToZoneValue",
      "MarketingAssetToZoneValue",
      "EPAM.MarketingAssetToZoneValue"
    ),
    ...Tl(e.relations, /zonevalue/i)
  ])];
}
function qE(e, t) {
  const n = t.properties ?? {}, r = W(n, "EPAM.colorUsageType", "colorUsageType") || "Primary";
  return {
    colorName: W(n, "EPAM.colorName", "colorName") || `Color ${e}`,
    hexValue: W(n, "EPAM.hexValue", "hexValue") || "#000000",
    colorUsageType: r
  };
}
function eN(e, t) {
  const n = t.properties ?? {}, r = W(n, "EPAM.fontUsageType", "fontUsageType") || "Body", o = W(n, "EPAM.fontWeight", "fontWeight") || "Regular";
  return {
    fontFamily: W(n, "EPAM.fontFamily", "fontFamily") || "sans-serif",
    fontWeight: o,
    fontUsageType: r
  };
}
function tN(e) {
  return St(
    e.relations,
    "brandKitToColor",
    "BrandKitToColor",
    "brandKitToBrandColor"
  ).concat(Tl(e.relations, /color/i));
}
function nN(e) {
  return St(
    e.relations,
    "brandKitToFont",
    "BrandKitToFont",
    "brandKitToBrandFont"
  ).concat(Tl(e.relations, /font/i));
}
function rN(e) {
  return ["Social", "Email", "Newsletter"].filter((t) => t !== e);
}
function oN(e, t, n, r) {
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
  return e.zoneType === "Heading" && (o.headingLevel = e.headingLevel, o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Text" && (o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Image" && (o.aspectRatioLock = e.aspectRatioLock), e.zoneType === "HTML" && (o.htmlDefaultContent = e.htmlDefaultContent, o.htmlAllowUserOverride = e.htmlAllowUserOverride), r === "Social" ? iN(o, t) : sN(o);
}
function iN(e, t) {
  const n = e.zoneType === "Logo" ? 80 : e.zoneType === "Image" ? 360 : e.zoneType === "Heading" ? 120 : e.zoneType === "CTA Button" ? 72 : 96;
  return {
    ...e,
    positionX: e.positionX ?? 40,
    positionY: e.positionY ?? 40 + t * (n + 24),
    zoneWidth: e.zoneWidth ?? 1e3,
    zoneHeight: n
  };
}
function sN(e) {
  return {
    ...e,
    positionX: void 0,
    positionY: void 0,
    zoneWidth: void 0,
    zoneHeight: void 0
  };
}
function aN(e, t, n) {
  const r = sv(t), o = Date.now(), i = [...e.zones].sort((s, a) => s.sortOrder - a.sortOrder).map((s, a) => oN(s, a, o, t));
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
function of(e) {
  const t = wt(e, /allowed.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/^template/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...Fy, ...t])];
}
function sf(e) {
  const t = wt(e, /template.*asset|allowed.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/zone/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...By, ...t])];
}
function lN(e) {
  const t = wt(e, /selected.*asset|zonevalue.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...Ky, ...t])];
}
const af = "/api/content-hub", uN = "/api/render-email-html";
let I = null, Al = af;
function lf() {
  return Al.replace(/\/$/, "") !== af;
}
function cN(e) {
  const t = e.trim().replace(/\/$/, "");
  return !t || t === uN;
}
function dN(e) {
  I = e;
}
function fN(e) {
  Al = e.replace(/\/$/, "") || af;
}
async function bc(e, t) {
  const n = await fetch(`${Al}${e}`, {
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
  if (!((n = I == null ? void 0 : I.raw) != null && n.getAsync))
    throw new Error("Content Hub client is not available. This component must run inside Content Hub.");
  const t = await I.raw.getAsync(`/api/entities/${e}`);
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
async function pN(e, t, n) {
  var o;
  let r = ((o = t.brandKitId) == null ? void 0 : o.trim()) ?? "";
  if (!r) {
    const i = await Qt(
      I,
      e,
      "templateToBrandKit",
      n.relations
    );
    i[0] != null ? (r = String(i[0]), Z("brandKitId", `Resolved ${r} from templateToBrandKit on template ${e}`)) : je(
      "brandKitId",
      `No brand kit linked on template ${e}`,
      "Link templateToBrandKit on the template, or set brandKitId in External component Configuration."
    );
  }
  return {
    ...t,
    brandKitId: r,
    allowedAssetIds: t.allowedAssetIds && t.allowedAssetIds.length > 0 ? t.allowedAssetIds : kv(n).map(String)
  };
}
async function mN(e, t) {
  const n = Ev(t);
  if (n.length > 0)
    return { ...e, allowedAssetIds: n.map(String) };
  if (!rt(t.relations, "templateZoneToAllowedAssetCollection"))
    return e;
  const r = await Qt(
    I,
    e.id,
    "templateZoneToAllowedAssetCollection",
    t.relations
  );
  return r[0] != null ? { ...e, allowedAssetCollectionId: String(r[0]) } : e;
}
function Mv(e) {
  const t = wt(e, /template.*zone/i);
  return [.../* @__PURE__ */ new Set([...t, ...Ii])];
}
async function hN(e, t, n) {
  var o;
  if (!((o = I == null ? void 0 : I.raw) != null && o.getAsync))
    return [];
  const r = encodeURIComponent(
    `Definition.Name=='${e}' AND Parent('${t}').Id==${n}`
  );
  try {
    const i = await I.raw.getAsync(
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
const gN = ["channelType", "ChannelType", "EPAM.ChannelType"], yN = ["formatPreset", "FormatPreset", "EPAM.FormatPreset"];
async function Cv(e) {
  var i, s;
  if (!((i = I == null ? void 0 : I.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating templates.");
  const t = [
    jE(e),
    { Title: { Invariant: e.templateName } },
    { templateName: e.templateName }
  ];
  let n = null, r = "unknown";
  for (const a of t) {
    const l = await I.raw.postAsync("/api/entities", {
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
      await Dv(n, o);
    } catch (a) {
      ae(
        "template create",
        `Template ${n} created but optional property update failed: ${a instanceof Error ? a.message : String(a)}`
      );
    }
  return Z("template create", `Created EPAM.Template ${n} (${e.templateName})`), n;
}
async function vN(e, t, n) {
  var i;
  return (await Sl(n)).channelType === t ? n : (i = (await xv(e)).find((s) => s.channelType === t)) == null ? void 0 : i.id;
}
async function Ym(e, t, n, r) {
  const o = await ne(t);
  for (const i of n) {
    const s = await Qt(
      I,
      t,
      i,
      o.relations
    );
    if (s[0] == null)
      continue;
    if (await vo(
      I,
      e,
      String(s[0]),
      n[0]
    )) {
      Z("template taxonomy", `Linked ${r} on template ${e} from template ${t}`);
      return;
    }
  }
  je(
    "template taxonomy",
    `Could not link ${r} on template ${e} from reference ${t}`,
    `Set ${r} on the template in Content Hub.`
  );
}
async function zv(e, t, n, r) {
  if (!(n != null && n.trim()))
    return;
  const o = await vN(
    n,
    t,
    r
  );
  if (!o) {
    je(
      "template taxonomy",
      `No ${t} template in brand kit ${n} to copy channelType/formatPreset from`,
      "Link channelType and formatPreset on the new template in Content Hub."
    );
    return;
  }
  await Ym(
    e,
    o,
    gN,
    "channelType"
  ), await Ym(
    e,
    o,
    yN,
    "formatPreset"
  );
}
async function Lv(e, t) {
  if (!(t != null && t.trim()))
    return;
  if (await vo(I, e, t, "templateToBrandKit")) {
    Z("template brand kit", `Linked template ${e} to brand kit ${t}`);
    return;
  }
  if (await Gt(I, t, e, "brandKitToTemplate")) {
    Z("template brand kit", `Linked brand kit ${t} to template ${e}`);
    return;
  }
  je(
    "template brand kit",
    `Could not link template ${e} to brand kit ${t}`,
    "Link templateToBrandKit on the template in Content Hub."
  );
}
async function xv(e) {
  if (!(e != null && e.trim()) || e === er)
    return [];
  let t = [];
  for (const o of [
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit"
  ])
    if (t = await hN("EPAM.Template", o, e), t.length > 0)
      break;
  if (t.length === 0)
    try {
      const o = await ne(e);
      t = await Qt(
        I,
        e,
        "brandKitToTemplate",
        o.relations
      );
    } catch {
      t = [];
    }
  const n = [...new Set(t)];
  return n.length === 0 ? [] : (await Promise.all(n.map((o) => Sl(String(o))))).sort((o, i) => o.templateName.localeCompare(i.templateName));
}
async function wN(e, t, n) {
  const r = await Sl(e), o = aN(r, t, n), i = await Cv(o);
  o.brandKitId && (await Lv(i, o.brandKitId), await zv(
    i,
    o.channelType,
    o.brandKitId,
    e
  ));
  const s = await uf({ ...o, id: i }, []);
  return await Pv(s.id, r.allowedAssetIds ?? []), Z(
    "template duplicate",
    `Created template ${s.id} (${s.templateName}) from ${e} as ${t}`
  ), s;
}
async function TN(e, t) {
  var i;
  const n = {
    ...e,
    id: ((i = e.id) == null ? void 0 : i.trim()) || "",
    zones: e.zones ?? []
  }, r = await Cv(n);
  n.brandKitId && (await Lv(r, n.brandKitId), t != null && t.trim() && await zv(
    r,
    n.channelType,
    n.brandKitId,
    t
  ));
  const o = await uf({ ...n, id: r }, []);
  return await Pv(o.id, n.allowedAssetIds ?? []), Z(
    "template create",
    `Created template ${o.id} (${o.templateName}) with ${o.zones.length} zone(s)`
  ), o;
}
async function AN(e, t) {
  const n = await ne(e), r = [
    "marketingAssetToTemplate",
    "MarketingAssetToTemplate",
    "EPAM.MarketingAssetToTemplate"
  ], o = await Qt(I, e, r[0], n.relations);
  for (const s of o)
    if (String(s) !== t)
      for (const a of r)
        await Mo(I, e, s, a, n.relations);
  let i = !1;
  for (const s of r)
    if (await Gt(I, e, t, s, n.relations)) {
      i = !0;
      break;
    }
  if (!i)
    throw new Error(
      `Could not link template ${t} to marketing asset ${e}. Check marketingAssetToTemplate relation permissions.`
    );
  Z("marketing asset template", `Linked marketing asset ${e} to template ${t}`);
}
async function SN(e, t) {
  var r;
  if (!((r = I == null ? void 0 : I.raw) != null && r.getAsync))
    return [];
  const n = encodeURIComponent(
    `Definition.Name=='EPAM.TemplateZone' AND Parent('${t}').Id==${e}`
  );
  try {
    const o = await I.raw.getAsync(
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
async function Sl(e) {
  const t = await ne(e);
  ek(e, t);
  let n = [...new Set(JE(t))];
  if (n.length === 0) {
    const i = Mv(t.relations), s = await bi(
      I,
      e,
      t.relations,
      i.filter((a) => rt(t.relations, a))
    );
    n = s.ids, s.relationName && Z("template zones", `Found zones via relation ${s.relationName}`);
  }
  if (n.length === 0) {
    const { templateChildRelations: i, zoneParentRelations: s } = await fl(
      I,
      t.relations
    );
    for (const a of s) {
      const l = await SN(e, a);
      if (l.length > 0) {
        n = l, Z(
          "template zones",
          `Found ${l.length} zone(s) via parent query on ${a}`
        );
        break;
      }
    }
    if (n.length === 0 && i.length > 0) {
      const a = await bi(
        I,
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
      await ck(I, ne, i), r = await Promise.all(
        i.map(async (s, a) => {
          const l = nf(n[a], s), u = await mN(l, s);
          return ev(I, ne, u, s);
        })
      );
    } catch (i) {
      ae(
        "template zones",
        `Could not load zones for template ${e}: ${i instanceof Error ? i.message : String(i)}`
      ), r = [];
    }
  const o = await pN(
    e,
    Av(e, t, r),
    t
  );
  return r.length > 0 ? (Z("template zones", `Loaded ${r.length} zone(s) for template ${e}`), o) : (je(
    "template zones",
    `Template ${e} has no linked zones yet`,
    'This is normal for a new template. Use "Edit Template Zones" to add zones, or link EPAM.TemplateZone entities in Content Hub. Zones link via a Parent relation on EPAM.TemplateZone → EPAM.Template (not on the template entity itself).'
  ), o);
}
async function kN(e) {
  var i;
  const t = await ne(e);
  let n = [...new Set(Nv(t))];
  n.length === 0 && (n = await Qt(
    I,
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
          async (a, l) => bN(n[l], Sv(n[l], a), a)
        )
      ), Z("zone values", `Loaded ${r.length} zone value(s) for asset ${e}`);
    } catch (s) {
      ae(
        "zone values",
        `Could not load zone values for asset ${e}: ${s instanceof Error ? s.message : String(s)}`
      ), r = [];
    }
  else
    je(
      "zone values",
      `Marketing asset ${e} has no marketingAssetToZoneValue relations yet`,
      "Zone values will be created when you click Save and render HTML."
    );
  let o = GE(e, t, r);
  if (!((i = o.templateId) != null && i.trim())) {
    const s = await Qt(
      I,
      e,
      "marketingAssetToTemplate",
      t.relations
    );
    s[0] != null && (o = { ...o, templateId: String(s[0]) });
  }
  return o;
}
async function EN(e) {
  if (!(e != null && e.trim()) || e === er)
    return Xn(
      "brand kit",
      "No brand kit id resolved",
      "Link templateToBrandKit on the template or set brandKitId in Configuration."
    ), withResolvedBrandKit(fr(e || er));
  try {
    const t = await ne(e), n = [...new Set(tN(t))], r = [...new Set(nN(t))], [o, i] = await Promise.all([
      fn(n),
      fn(r)
    ]), s = o.map(
      (u, c) => qE(n[c], u)
    ), a = i.map(
      (u, c) => eN(r[c], u)
    ), l = XE(e, t, s, a);
    return !l.logoAssetUrl && s.length === 0 && a.length === 0 ? (Xn(
      "brand kit",
      `Brand kit ${e} (${l.brandKitName}) has no colors, fonts, or logo linked`,
      "Add brandKitToColor / brandKitToFont relations and a logo asset on the brand kit."
    ), withResolvedBrandKit(fr(e))) : (s.length === 0 ? je("brand kit colors", `Brand kit ${e} has no colors linked`, "Link colors via brandKitToColor.") : Z("brand kit colors", `Loaded ${s.length} color(s) for brand kit ${e}`), a.length === 0 ? je("brand kit fonts", `Brand kit ${e} has no fonts linked`, "Link fonts via brandKitToFont.") : Z("brand kit fonts", `Loaded ${a.length} font(s) for brand kit ${e}`), l.logoAssetUrl || je("brand kit logo", `Brand kit ${e} has no logo asset`, "Set logoAssetUrl on the brand kit entity."), withResolvedBrandKit({
      ...fr(e),
      ...l,
      colors: s.length > 0 ? s : fr(e).colors,
      fonts: a.length > 0 ? a : fr(e).fonts
    }));
  } catch (t) {
    return Xn("brand kit", t, `Could not load brand kit entity ${e}.`), withResolvedBrandKit(fr(e));
  }
}
function NN(e, t) {
  const n = Av(e.id, t, e.zones);
  return n.templateName !== e.templateName || n.canvasWidth !== e.canvasWidth || n.canvasHeight !== e.canvasHeight;
}
async function Xi(e, t, n, r) {
  var c;
  if (!((c = I == null ? void 0 : I.raw) != null && c.putAsync))
    throw new Error(`Content Hub client is not available for saving ${n}.`);
  if (Object.keys(t).length === 0)
    return !0;
  const o = await ne(e), i = nk(o, t, r), s = await I.raw.putAsync(`/api/entities/${e}`, i);
  if (s.isSuccessStatusCode)
    return !0;
  const a = s.statusCode ?? "unknown", l = s.content != null && typeof s.content == "object" ? String(s.content.Message ?? "") : "", u = l ? `: ${l}` : "";
  if (a === 403 || a === 401)
    return je(
      n,
      `Permission denied (${a}) updating entity ${e}${u}`,
      "Grant update permission on this entity definition for your role."
    ), !1;
  throw new Error(
    `Content Hub API error (${a}) saving ${n} on entity ${e}${u}`
  );
}
async function Dv(e, t) {
  return Xi(e, t, "template properties", "EPAM.Template");
}
async function uf(e, t = []) {
  var l;
  if (!((l = I == null ? void 0 : I.raw) != null && l.postAsync))
    throw new Error("Content Hub client is not available for saving template zones.");
  const n = await ne(e.id);
  NN(e, n) && (await Dv(e.id, yv(e)) ? Z("template properties", `Saved properties on template ${e.id}`) : ae(
    "template properties",
    `Skipped property update on template ${e.id}; continuing with zone save.`
  ));
  const r = await fl(I, n.relations), o = MN(
    n.relations,
    r.templateChildRelations
  ), i = [], s = /* @__PURE__ */ new Set();
  for (const u of t)
    !e.zones.some((f) => f.id === u.id) && Wm(u.id) && s.add(u.id);
  const a = [...e.zones].sort((u, c) => u.sortOrder - c.sortOrder);
  for (const u of a) {
    const c = t.find((v) => v.id === u.id);
    if (!(!c || !KE(u, c))) {
      i.push(u);
      continue;
    }
    if (Wm(u.id)) {
      await LN(u.id, u), i.push(u);
      continue;
    }
    const p = await xN(u);
    await CN(
      e.id,
      p,
      o,
      n.relations,
      r
    ), i.push({ ...u, id: p }), Z("template zone", `Created EPAM.TemplateZone ${p} (${u.zoneKey}) and linked to template ${e.id}`);
  }
  for (const u of s)
    await DN(e.id, u, o, n.relations);
  return Z("template zones", `Saved ${i.length} template zone(s) on template ${e.id}`), { ...e, zones: i };
}
function MN(e, t = []) {
  const n = [
    ...t,
    ...Mv(e)
  ];
  for (const r of n)
    if (rt(e, r))
      return r;
  return t[0] ?? Ii[0];
}
async function CN(e, t, n, r, o) {
  const i = o ?? await fl(I, r);
  let s;
  try {
    const f = await ne(t);
    s = f.relations, tk(t, f);
  } catch {
    s = void 0;
  }
  const a = wt(s, /template/i).filter(
    (f) => !/collection|asset/i.test(f)
  ), l = di(
    [...a, ...i.zoneParentRelations, ...Ta],
    s,
    /zone.*template|template/i
  );
  for (const f of l)
    if (await vo(I, t, e, f, s)) {
      Z("template zone link", `Linked zone ${t} to template ${e} via parent relation ${f}`);
      return;
    }
  const u = di(
    [n, ...i.templateChildRelations, ...Ii],
    r,
    /template.*zone/i
  ).filter((f) => !!rt(r, f));
  for (const f of u)
    if (await Gt(I, e, t, f, r)) {
      Z("template zone link", `Linked zone ${t} to template ${e} via child relation ${f}`);
      return;
    }
  const c = di(
    [n, ...i.templateChildRelations, ...Ii],
    r,
    /template.*zone/i
  ).filter((f) => !rt(r, f));
  for (const f of c)
    if (await Gt(I, e, t, f, r)) {
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
async function Mu(e, t, n) {
  const r = await ne(e), o = nf(e, r);
  return (await ev(I, ne, o, r)).zoneType;
}
async function zN(e, t, n) {
  const r = To(t), o = await wk(I), i = ak(n), s = i || Ak(o), a = async () => {
    for (const u of FE(
      r.zoneType,
      o.propertyNames
    ))
      if (await yn(e, u, "template zone type"), await Mu(
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
    const u = await hk(
      I,
      ne,
      e,
      r.zoneType,
      n
    ), c = await Mu(
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
  if (!i && Tk(o) && await a())
    return !0;
  const l = await Mu(
    e,
    r.zoneKey,
    r.zoneLabel
  );
  return ae(
    "template zone type",
    `Zone ${e} (${r.zoneKey}) still reads as "${l}" after save; expected "${r.zoneType}".`
  ), l === r.zoneType;
}
async function bv(e, t) {
  const n = To(t), r = await ne(e), o = nf(e, r), i = UE(n, o);
  if (Object.keys(i).length > 0 && !await yn(e, i, "template zone identity") && i.zoneLabel != null) {
    const f = n.zoneLabel || n.zoneKey;
    await yn(
      e,
      { Title: { Invariant: f } },
      "template zone title"
    );
  }
  const s = await zN(e, n, r), a = await yn(
    e,
    BE(n, o),
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
async function LN(e, t) {
  try {
    await bv(e, t);
  } catch (n) {
    throw new Error(
      `Permission denied updating template zone ${e} (${t.zoneKey}). Grant Update on EPAM.TemplateZone. ${n instanceof Error ? n.message : String(n)}`
    );
  }
  Z("template zone", `Updated EPAM.TemplateZone ${e} (${t.zoneKey}, type ${t.zoneType})`);
}
async function xN(e) {
  var o;
  const t = [
    vv(e),
    {
      zoneKey: e.zoneKey,
      zoneLabel: e.zoneLabel || e.zoneKey
    },
    { Title: { Invariant: e.zoneLabel || e.zoneKey } }
  ];
  let n = null, r = "unknown";
  for (const i of t) {
    const s = await I.raw.postAsync("/api/entities", {
      entitydefinition: {
        href: "/api/entitydefinitions/EPAM.TemplateZone"
      },
      properties: i
    });
    if (s.isSuccessStatusCode && ((o = s.content) == null ? void 0 : o.id) != null) {
      n = String(s.content.id);
      break;
    }
    r = String(s.statusCode ?? "unknown"), ae(
      "template zone create",
      `Create attempt failed (${r}) for ${e.zoneKey} with keys: ${Object.keys(i).join(", ")}`
    );
  }
  if (!n)
    throw new Error(
      `Failed to create template zone ${e.zoneKey} (HTTP ${r}). Check Create permission on EPAM.TemplateZone.`
    );
  try {
    await bv(n, e);
  } catch (i) {
    ae(
      "template zone create",
      `Zone ${n} (${e.zoneKey}) created but property update failed: ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return n;
}
async function DN(e, t, n, r) {
  const o = await fl(I, r);
  let i;
  try {
    i = (await ne(t)).relations;
  } catch {
    i = void 0;
  }
  const s = di(
    [...o.zoneParentRelations, ...Ta],
    i,
    /zone.*template/i
  );
  for (const l of s)
    if (await Gy(I, t, e, l, i)) {
      Z("template zone unlink", `Cleared parent ${e} from zone ${t} via ${l}`);
      return;
    }
  const a = di(
    [n, ...o.templateChildRelations, ...Ii],
    r,
    /template.*zone/i
  ).filter((l) => !!rt(r, l));
  for (const l of a)
    if (await Mo(I, e, t, l, r)) {
      Z("template zone unlink", `Removed zone ${t} from template ${e} via ${l}`);
      return;
    }
  je(
    "template zone unlink",
    `Could not remove zone ${t} from template ${e}`,
    "The new zone was created and linked, but the previous zone link may need to be removed manually in Content Hub."
  );
}
async function bN(e, t, n) {
  var i;
  const r = rf(n), o = t.imageAssetId || (r[0] != null ? String(r[0]) : void 0);
  if (!o)
    return t;
  if ((i = t.imageAssetUrl) != null && i.trim())
    return { ...t, imageAssetId: o };
  try {
    const s = await ne(o), a = Co(o, s);
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
async function Iv(e) {
  const t = await ne(e), n = sf(t.relations), r = await bi(
    I,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => Co(r.ids[s], i)).filter((i) => i != null);
}
async function Ov(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = sf(o.relations);
  for (const a of i)
    if (await Gt(
      I,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "template allowed asset",
        `Linked asset ${r} to template ${n} via ${a}`
      ), !0;
  if ((s = I == null ? void 0 : I.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await I.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return Z(
          "template allowed asset",
          `Linked asset ${r} to template ${n} via ${a}`
        ), !0;
  }
  return je(
    "template allowed asset",
    `Could not link asset ${r} to template ${n}`,
    "Create a child relation on EPAM.Template to M.Asset (e.g. templateToAllowedAsset)."
  ), !1;
}
async function IN(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = sf(o.relations);
  for (const s of i)
    if (await Mo(
      I,
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
async function Pv(e, t = []) {
  const n = [...new Set(t.map((i) => i.trim()).filter(Boolean))];
  if (n.length === 0)
    return;
  const r = await Iv(e), o = new Set(r.map((i) => i.id));
  for (const i of n)
    o.has(i) || await Ov(e, i);
}
async function ON(e) {
  const t = await ne(e);
  return rf(t).map(String);
}
let ur = null;
async function PN(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = lN(o.relations), s = i.filter((f) => !!rt(o.relations, f)), a = ur == null ? void 0 : ur.name, l = [
    ...new Set(
      [
        a,
        ...s,
        // Prefer the known-good name before spraying aliases that 404.
        "zoneValueToSelectedAsset",
        ...i
      ].filter((f) => !!f)
    )
  ].slice(0, a || s.length > 0 ? 3 : 4), u = await ON(n);
  for (const f of u)
    if (f !== r)
      for (const p of l)
        await Mo(
          I,
          n,
          f,
          p,
          o.relations
        ), await Gy(
          I,
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
        I,
        n,
        r,
        p,
        o.relations
      ) : await Gt(
        I,
        n,
        r,
        p,
        o.relations
      ))
        return ur = { name: p, mode: f }, Z(
          "zone value selected asset",
          `Linked asset ${r} to zone value ${n} via ${p} (${f})`
        ), !0;
  return je(
    "zone value selected asset",
    `Could not link asset ${r} to zone value ${n}`,
    "Create a relation on EPAM.MarketingAssetZoneValue to M.Asset (e.g. zoneValueToSelectedAsset)."
  ), !1;
}
async function _N(e, t) {
  var n;
  (n = t.imageAssetId) != null && n.trim() && await PN(e, t.imageAssetId);
}
async function RN(e) {
  const t = await ne(e), n = of(t.relations), r = await bi(
    I,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => Co(r.ids[s], i)).filter((i) => i != null);
}
async function $N(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = of(o.relations);
  for (const a of i)
    if (await Gt(
      I,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "zone allowed asset",
        `Linked asset ${r} to zone ${n} via ${a}`
      ), !0;
  if ((s = I == null ? void 0 : I.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await I.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return Z(
          "zone allowed asset",
          `Linked asset ${r} to zone ${n} via ${a}`
        ), !0;
  }
  return je(
    "zone allowed asset",
    `Could not link asset ${r} to zone ${n}`,
    "Create a child relation on EPAM.TemplateZone to M.Asset (e.g. templateZoneToAllowedAsset)."
  ), !1;
}
async function jN(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = of(o.relations);
  for (const s of i)
    if (await Mo(
      I,
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
async function _v(e) {
  const t = await ne(e), n = [
    .../* @__PURE__ */ new Set([
      ...Gd,
      ...wt(t.relations, /asset/i)
    ])
  ].filter((i) => rt(t.relations, i)), r = await bi(
    I,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await fn(r.ids)).map((i, s) => Co(r.ids[s], i)).filter((i) => i != null);
}
function UN(e) {
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
  return r.length > 0 ? [...new Set(r)] : [...new Set(dl(e))];
}
async function HN(e) {
  var r;
  if (!((r = I == null ? void 0 : I.raw) != null && r.getAsync))
    return [];
  const t = (e == null ? void 0 : e.trim()) || "*", n = [
    `/api/entities/search?query=${encodeURIComponent(t)}&definitionNames=M.Asset&take=48`,
    `/api/entities/search?fullText=${encodeURIComponent(t)}&definitionNames=M.Asset&take=48`
  ];
  for (const o of n)
    try {
      const i = await I.raw.getAsync(o);
      if (!i.isSuccessStatusCode || i.content == null)
        continue;
      const s = UN(i.content).slice(0, 48);
      if (s.length === 0)
        continue;
      const l = (await fn(s)).map((u, c) => Co(s[c], u)).filter((u) => u != null);
      if (l.length > 0)
        return Z("asset search", `Found ${l.length} Content Hub asset(s) via search`), l;
    } catch {
    }
  return [];
}
async function Qm(e) {
  var r, o;
  const t = (r = e == null ? void 0 : e.collectionId) == null ? void 0 : r.trim(), n = e == null ? void 0 : e.query;
  if ((o = I == null ? void 0 : I.raw) != null && o.getAsync)
    try {
      if (t) {
        const i = xm(await _v(t), n);
        if (i.length > 0)
          return Z(
            "asset search",
            `Loaded ${i.length} asset(s) from collection ${t}`
          ), i;
        je(
          "asset search",
          `No assets found in collection ${t}`,
          "Verify AssetCollectionToAsset links or try Image URL."
        );
      } else {
        const i = xm(await HN(n), n);
        if (i.length > 0)
          return i;
      }
    } catch (i) {
      je("asset search", i, "Falling back to proxy or demo assets.");
    }
  if (t)
    try {
      const i = await bc(
        `/assets/search?collectionId=${t}${n ? `&q=${encodeURIComponent(n)}` : ""}`
      );
      if (i.length > 0)
        return i;
    } catch (i) {
      Xn("asset search", i);
    }
  return Xn("asset search", "Using demo asset results"), bE(n);
}
async function FN(e) {
  var r;
  const t = [
    ...new Set(
      e.map((o) => Number(o)).filter((o) => Number.isFinite(o) && o > 0)
    )
  ];
  return t.length === 0 || !((r = I == null ? void 0 : I.raw) != null && r.getAsync) ? [] : (await fn(t)).map((o, i) => Co(t[i], o)).filter((o) => o != null);
}
async function BN(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = [
    .../* @__PURE__ */ new Set([
      ...Gd,
      ...wt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const a of i)
    if (await Gt(
      I,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "asset collection",
        `Linked asset ${r} to collection ${n} via ${a}`
      ), !0;
  if ((s = I == null ? void 0 : I.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await I.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return Z(
          "asset collection",
          `Linked asset ${r} to collection ${n} via ${a}`
        ), !0;
  }
  return je(
    "asset collection",
    `Could not add asset ${r} to collection ${n}`,
    "Verify AssetCollectionToAsset exists on the collection definition."
  ), !1;
}
async function KN(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ne(n), i = [
    .../* @__PURE__ */ new Set([
      ...Gd,
      ...wt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const s of i)
    if (await Mo(
      I,
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
async function Rv(e, t) {
  return Xi(e, t, "marketing asset properties", "EPAM.MarketingAsset");
}
const $v = ["EPAM.MarketingAssetZoneValue", "MarketingAssetZoneValue"];
function ZN(e) {
  if (e == null || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.error;
  return typeof n == "string" ? n.trim() : "";
}
function VN(e) {
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
async function jv(e, t) {
  const n = await Mc(I, $v[0]);
  await yn(
    e,
    OE(t),
    "zone value title"
  );
  const r = gv(t);
  if (Object.keys(r).length > 0) {
    const o = _E(t, n);
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
  await _N(e, t);
}
async function WN(e) {
  var i;
  if (!((i = I == null ? void 0 : I.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating zone values.");
  const t = [
    { Title: { Invariant: e.zoneKey } },
    { Title: e.zoneKey },
    {}
  ];
  let n = null, r = "unknown", o = "";
  for (const s of $v) {
    for (const a of t) {
      const l = await I.raw.postAsync("/api/entities", {
        entitydefinition: {
          href: `/api/entitydefinitions/${s}`
        },
        properties: a
      }), u = VN(l.content);
      if (l.isSuccessStatusCode && u) {
        n = u, Z(
          "zone value create",
          `Created ${s} ${u} for ${e.zoneKey} with keys: ${Object.keys(a).join(", ") || "(none)"}`
        );
        break;
      }
      r = String(l.statusCode ?? "unknown"), o = ZN(l.content), ae(
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
    await jv(n, e);
  } catch (s) {
    ae(
      "zone value create",
      `Zone value ${n} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return n;
}
async function YN(e) {
  if (!e.id)
    throw new Error(`Zone value for ${e.zoneKey} has no entity id.`);
  try {
    await jv(e.id, e), Z("zone value", `Updated EPAM.MarketingAssetZoneValue ${e.id} (${e.zoneKey})`);
  } catch (t) {
    throw new Error(
      `Failed to update zone value ${e.id} (${e.zoneKey}). Grant Update on EPAM.MarketingAssetZoneValue. ${t instanceof Error ? t.message : String(t)}`
    );
  }
}
async function QN(e, t, n) {
  var o;
  const r = [
    ...wt(n, /zonevalue/i),
    "marketingAssetToZoneValue",
    "MarketingAssetToZoneValue",
    "EPAM.MarketingAssetToZoneValue"
  ];
  for (const i of [...new Set(r)])
    if (await Gt(
      I,
      e,
      t,
      i,
      n
    ))
      return;
  if (!((o = I == null ? void 0 : I.raw) != null && o.postAsync))
    throw new Error("Content Hub client is not available for linking zone values.");
  for (const i of [...new Set(r)])
    if ((await I.raw.postAsync(
      `/api/entities/${e}/relations/${i}`,
      {
        child: { href: `/api/entities/${t}` }
      }
    )).isSuccessStatusCode)
      return;
  je(
    "marketingAssetToZoneValue link",
    `Could not link zone value ${t} to asset ${e}`,
    "The zone value entity was saved but the relation link may need to be created manually."
  );
}
async function GN(e, t) {
  var a;
  const n = await ne(e), r = [...new Set(Nv(n))], o = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const l = await fn(r);
    for (let u = 0; u < r.length; u += 1) {
      const c = Sv(r[u], l[u]);
      o.has(c.zoneKey) || o.set(c.zoneKey, c);
    }
  }
  const i = [], s = /* @__PURE__ */ new Set();
  for (const l of t) {
    if (!((a = l.zoneKey) != null && a.trim()) || s.has(l.zoneKey))
      continue;
    if (!RE(l)) {
      ae("zone value save", `Skipped empty zone value for ${l.zoneKey}`);
      continue;
    }
    s.add(l.zoneKey);
    const u = l.id ? l : o.get(l.zoneKey), c = u != null && u.id ? { ...l, id: u.id } : { ...l, id: void 0 };
    if (c.id) {
      await YN(c), i.push(c);
      continue;
    }
    const f = await WN(c), p = { ...c, id: f };
    await QN(e, f, n.relations), i.push(p);
  }
  return Z("zone values", `Saved ${i.length} EPAM.MarketingAssetZoneValue record(s)`), i;
}
async function XN(e) {
  const t = $E(e);
  if (Object.keys(t).length === 0)
    return e;
  if (!await Rv(e.id, t))
    throw new Error(
      `Could not save marketing asset ${e.id}. Grant Update on EPAM.MarketingAsset and ensure properties such as zoneLayoutJson exist on the definition.`
    );
  return Z("marketing asset properties", `Saved properties on marketing asset ${e.id}`), e;
}
const JN = "designerDocumentJson", qN = "designerInstanceJson", Cs = "EPAM.BuilderTemplate", zs = "EPAM.BuilderMarketingAsset";
function Uv(e) {
  return (e == null ? void 0 : e.trim()) || JN;
}
function Hv(e) {
  return (e == null ? void 0 : e.trim()) || qN;
}
async function eM(e, t) {
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
async function tM(e, t, n) {
  const r = Uv(n), o = { [r]: t };
  try {
    if (!await Xi(
      e,
      o,
      "builder template designer document",
      Cs
    ))
      throw new Error(
        `Could not save designer document on ${Cs} ${e}. Ensure property "${r}" exists and your role can Update it.`
      );
  } catch (i) {
    throw i instanceof Error && i.message.includes("Could not save designer document") ? i : new Error(
      `Could not save designer document on ${Cs} ${e}. Ensure property "${r}" exists and your role can Update it. ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return Z(
    "builder template designer document",
    `Saved ${r} on ${Cs} ${e}`
  ), !0;
}
async function nM(e, t) {
  const r = (await ne(e)).properties ?? {}, o = Hv(t), i = [`EPAM.${o}`, o, o.replace(/^./, (s) => s.toUpperCase())];
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
async function rM(e, t, n) {
  const r = Hv(n), o = { [r]: t };
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
  getTemplate: Sl,
  listTemplatesForBrandKit: xv,
  duplicateTemplate: wN,
  createTemplate: TN,
  linkMarketingAssetToTemplate: AN,
  listTemplates: async (e) => {
    try {
      return await bc(`/entities/EPAM.Template${e ? `?channelType=${e}` : ""}`);
    } catch (t) {
      return Xn("template list", t), [zE(Zm)];
    }
  },
  saveTemplate: uf,
  getBrandKit: EN,
  getMarketingAsset: kN,
  createMarketingAsset: async (e) => {
    try {
      return await bc("/entities/EPAM.MarketingAsset", {
        method: "POST",
        body: JSON.stringify(e)
      });
    } catch (t) {
      return Xn("marketing asset create", t), DE("dummy-asset", e.templateId || Zm);
    }
  },
  updateMarketingAsset: XN,
  saveMarketingAssetZoneValues: GN,
  updateMarketingAssetProperties: Rv,
  getTemplateDesignerDocument: eM,
  saveTemplateDesignerDocument: tM,
  getMarketingAssetDesignerInstance: nM,
  saveMarketingAssetDesignerInstance: rM,
  uploadRenderedOutput: async (e, t, n) => {
    if (!lf())
      return ae(
        "rendered output upload",
        `Skipped upload for ${n} — no asset upload proxy is configured on this Content Hub instance.`
      ), { skipped: !0, fileName: n, assetId: e };
    try {
      const r = new FormData();
      r.append("file", t, n), r.append("linkToEntity", "EPAM.MarketingAsset"), r.append("linkToEntityId", e), r.append("relationName", "marketingAssetToRenderedOutput");
      const o = await fetch(`${Al}/assets/upload`, {
        method: "POST",
        body: r
      });
      if (!o.ok)
        throw new Error(`Asset upload failed (${o.status})`);
      return o.json();
    } catch (r) {
      return Xn("rendered output upload", r), { skipped: !0, fileName: n, assetId: e };
    }
  },
  searchAssets: Qm,
  searchAssetsInCollection: async (e, t) => Qm({ collectionId: e, query: t }),
  getCollectionAssets: _v,
  getZoneAllowedAssets: RN,
  getTemplateAllowedAssets: Iv,
  getAssetsByIds: FN,
  addAssetToCollection: BN,
  removeAssetFromCollection: KN,
  addAllowedAssetToTemplate: Ov,
  removeAllowedAssetFromTemplate: IN,
  addAllowedAssetToZone: $N,
  removeAllowedAssetFromZone: jN
}, Fv = k.createContext(null);
function oM({
  brandKitId: e,
  children: t
}) {
  const [n, r] = k.useState(null);
  return k.useEffect(() => {
    let o = !1;
    return ie.getBrandKit(e || er).then((i) => {
      o || r(i);
    }).catch(() => {
      o || r(fr(e || er));
    }), () => {
      o = !0;
    };
  }, [e]), n ? /* @__PURE__ */ d(Fv.Provider, { value: n, children: t }) : /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading brand kit..." });
}
function Ji() {
  const e = k.useContext(Fv);
  if (!e)
    throw new Error("useBrandKit must be used within a BrandKitProvider");
  return e;
}
function cf(e) {
  var n;
  return (n = Ji().colors.find((r) => r.colorUsageType === e)) == null ? void 0 : n.hexValue;
}
function ka(e) {
  var n;
  return (n = Ji().fonts.find((r) => r.fontUsageType === e)) == null ? void 0 : n.fontFamily;
}
const Bv = k.createContext({});
function iM({
  value: e,
  children: t
}) {
  const n = k.useMemo(
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
function df() {
  return k.useContext(Bv);
}
function Kv() {
  const { searchIdentifier: e, search: t } = df(), [n, r] = k.useState([]), [o, i] = k.useState("");
  return k.useEffect(() => {
    if (!e || !(t != null && t.getEventSearchIdentifier)) {
      r([]), i("");
      return;
    }
    const s = t.getEventSearchIdentifier(e), a = (l) => {
      const u = l.detail;
      !u || u.searchIdentifier !== s || (r(Array.isArray(u.ids) ? u.ids : []), i(u.fullText ?? ""));
    };
    return window.addEventListener("SEARCH_FINISHED", a), () => window.removeEventListener("SEARCH_FINISHED", a);
  }, [t, e]), k.useEffect(() => {
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
async function sM(e, t, n, r) {
  var a;
  let o = FS(t, n, r);
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
    for (const l of $S) {
      const u = await i.raw.getAsync(
        `/api/entities/${s}/relations/${l}`
      );
      if (!u.isSuccessStatusCode || !u.content)
        continue;
      const c = dl(u.content);
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
function Rr(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return e;
  if (typeof e == "string" && e.trim()) {
    const t = Number(e);
    if (Number.isFinite(t))
      return t;
  }
}
function Ic(e) {
  const t = e.positionX, n = e.positionY;
  if (!((t === 0 || t === void 0) && (n === 0 || n === void 0) && (t === 0 || n === 0)))
    return e;
  const o = { ...e };
  return delete o.positionX, delete o.positionY, o;
}
function Ea(e) {
  return Ic(e);
}
function $i(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return;
  const t = e, n = {}, r = Rr(t.positionX), o = Rr(t.positionY), i = Rr(t.zoneWidth), s = Rr(t.zoneHeight), a = Rr(t.offsetPx), l = Rr(t.sortOrder);
  return r !== void 0 && (n.positionX = r), o !== void 0 && (n.positionY = o), i !== void 0 && (n.zoneWidth = i), s !== void 0 && (n.zoneHeight = s), a !== void 0 && (n.offsetPx = a), l !== void 0 && (n.sortOrder = l), typeof t.contentAlignment == "string" && (n.contentAlignment = mv(t.contentAlignment)), typeof t.offsetDirection == "string" && (n.offsetDirection = hv(t.offsetDirection)), Object.keys(n).length > 0 ? Ea(n) : void 0;
}
function Gm(e) {
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
        const s = $i(o);
        s && (n[i] = s);
      }
      return n;
    }
    if (typeof t == "object") {
      const n = {};
      for (const [r, o] of Object.entries(t)) {
        const i = $i(o);
        i && (n[r] = i);
      }
      return n;
    }
  } catch {
    return {};
  }
  return {};
}
function aM(e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (!n.trim() || r == null)
      continue;
    const o = $i(r);
    o && (t[n] = o);
  }
  return JSON.stringify(t, null, 2);
}
function Oc(e) {
  const t = {};
  return typeof e.textValue == "string" && (t.textValue = e.textValue), typeof e.colorValue == "string" && (t.colorValue = e.colorValue), typeof e.htmlValue == "string" && (t.htmlValue = e.htmlValue), typeof e.linkUrl == "string" && (t.linkUrl = e.linkUrl), typeof e.imageAssetId == "string" && (t.imageAssetId = e.imageAssetId), typeof e.imageAssetUrl == "string" && (t.imageAssetUrl = e.imageAssetUrl), Object.keys(t).length > 0 ? t : void 0;
}
function Zv(e, t) {
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    if (!o.trim() || i == null)
      continue;
    const s = $i(i);
    s && (n[o] = s);
  }
  const r = {};
  for (const [o, i] of Object.entries(t)) {
    if (!o.trim() || !i)
      continue;
    const s = Oc(i);
    s && (r[o] = { zoneKey: o, ...s });
  }
  return Object.keys(r).length === 0 ? JSON.stringify(n, null, 2) : JSON.stringify({ layouts: n, values: r }, null, 2);
}
function Na(e) {
  if (!(e != null && e.trim()))
    return { layouts: {}, values: {} };
  try {
    const t = JSON.parse(e);
    if (t == null || typeof t != "object" || Array.isArray(t))
      return { layouts: Gm(e), values: {} };
    const n = t;
    if (n.layouts != null && typeof n.layouts == "object" && !Array.isArray(n.layouts)) {
      const i = Gm(JSON.stringify(n.layouts)), s = {};
      if (n.values != null && typeof n.values == "object" && !Array.isArray(n.values))
        for (const [a, l] of Object.entries(n.values)) {
          if (!a.trim() || l == null || typeof l != "object")
            continue;
          const u = Oc(l);
          u && (s[a] = { zoneKey: a, ...u });
        }
      return { layouts: i, values: s };
    }
    const r = {}, o = {};
    for (const [i, s] of Object.entries(n)) {
      if (!i.trim() || s == null || typeof s != "object")
        continue;
      const a = s, l = $i(a);
      l && (r[i] = l);
      const u = Oc(a);
      u && (o[i] = { zoneKey: i, ...u });
    }
    return { layouts: r, values: o };
  } catch {
    return { layouts: {}, values: {} };
  }
}
function Ma(e, t, n) {
  var o, i, s, a, l, u;
  const r = ji(e, t);
  for (const c of e.zones) {
    const f = zr(c, e.zones), p = n[f] ?? n[c.zoneKey];
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
  return Ic(t ? {
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
function zr(e, t) {
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
    const s = zr(i, e.zones), a = n.get(s) ?? n.get(i.zoneKey), l = a == null ? void 0 : a.shift();
    l && (r[i.id] = { ...l, zoneKey: s });
  }
  return r;
}
function Wv(e, t) {
  return {
    ...e,
    zones: [...e.zones].map((n) => {
      const r = Ao(n, e.zones), o = r === n.zoneKey ? t[n.zoneKey] : t[r];
      return Vv(n, o);
    }).sort((n, r) => n.sortOrder - r.sortOrder || n.id.localeCompare(r.id))
  };
}
function lM(e) {
  return Ea({
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
function uM(e) {
  const t = {};
  for (const n of e.zones) {
    const r = Ao(n, e.zones);
    t[r] = lM(n);
  }
  return t;
}
function Yv(e, t) {
  const n = uM(e);
  for (const r of e.zones) {
    const o = Ao(r, e.zones), i = o === r.zoneKey ? t[r.zoneKey] : t[o];
    i ? n[o] = Ea({ ...n[o], ...i }) : n[o] = Ea(n[o] ?? {});
  }
  return n;
}
function cM({
  layout: e,
  onChange: t,
  showPosition: n = !1,
  compact: r = !1
}) {
  return /* @__PURE__ */ N("div", { className: `asset-zone-layout-fields${r ? " asset-zone-layout-fields-compact" : ""}`, children: [
    /* @__PURE__ */ N("div", { className: "asset-zone-layout-grid", children: [
      /* @__PURE__ */ N("label", { children: [
        "Alignment",
        /* @__PURE__ */ d(
          "select",
          {
            value: e.contentAlignment ?? Cr,
            onChange: (o) => t({ contentAlignment: o.target.value }),
            children: fv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
          }
        )
      ] }),
      /* @__PURE__ */ N("label", { children: [
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
      /* @__PURE__ */ N("label", { children: [
        "Direction",
        /* @__PURE__ */ d(
          "select",
          {
            value: e.offsetDirection ?? wl,
            onChange: (o) => t({ offsetDirection: o.target.value }),
            children: pv.map((o) => /* @__PURE__ */ d("option", { value: o, children: o }, o))
          }
        )
      ] }),
      /* @__PURE__ */ N("label", { children: [
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
    n && /* @__PURE__ */ N("div", { className: "asset-zone-layout-grid asset-zone-layout-grid-position", children: [
      /* @__PURE__ */ N("label", { children: [
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
      /* @__PURE__ */ N("label", { children: [
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
      /* @__PURE__ */ N("label", { children: [
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
      /* @__PURE__ */ N("label", { children: [
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
function dM({ zoneKey: e, selectedUrl: t, onChange: n, compact: r = !1 }) {
  const o = Gi(t);
  return /* @__PURE__ */ d("div", { className: `logo-picker${r ? " logo-picker-compact" : ""}`, role: "radiogroup", "aria-label": "Choose logo", children: _i.map((i) => {
    const s = o === i.url;
    return /* @__PURE__ */ N(
      "button",
      {
        type: "button",
        role: "radio",
        "aria-checked": s,
        className: `logo-picker-option${s ? " logo-picker-option-selected" : ""}`,
        onClick: () => n(e, i.url),
        children: [
          /* @__PURE__ */ d("span", { className: "logo-picker-preview", style: { background: i.previewBackground }, children: /* @__PURE__ */ d("img", { src: i.url, alt: "", className: "logo-picker-image" }) }),
          /* @__PURE__ */ d("span", { className: "logo-picker-label", children: i.label })
        ]
      },
      i.id
    );
  }) });
}
function fM(...e) {
  const t = /* @__PURE__ */ new Set(), n = [];
  for (const r of e)
    for (const o of r) {
      const i = o.id || o.previewUrl || o.thumbnailUrl;
      !i || t.has(i) || (t.add(i), n.push(o));
    }
  return n;
}
function pM({
  zoneKey: e,
  zone: t,
  templateId: n,
  selectedAssetId: r,
  selectedUrl: o,
  onChange: i,
  compact: s = !1
}) {
  const { searchIdentifier: a } = df(), { resultIds: l, hasSearchIntegration: u } = Kv(), [c, f] = k.useState([]), [p, v] = k.useState([]), [S, T] = k.useState([]), [D, y] = k.useState(!1), [m, h] = k.useState(null), [C, E] = k.useState(!1), [M, A] = k.useState("");
  k.useEffect(() => {
    if (!(n != null && n.trim()) || n.startsWith("temp-")) {
      f([]);
      return;
    }
    let U = !1;
    return y(!0), h(null), ie.getTemplateAllowedAssets(n).then((Y) => {
      U || f(Y);
    }).catch((Y) => {
      U || (f([]), h(Y instanceof Error ? Y.message : "Could not load template images."));
    }).finally(() => {
      U || y(!1);
    }), () => {
      U = !0;
    };
  }, [n]), k.useEffect(() => {
    const U = (t == null ? void 0 : t.allowedAssetIds) ?? [];
    if (U.length === 0) {
      v([]);
      return;
    }
    let Y = !1;
    return ie.getAssetsByIds(U).then((xe) => {
      Y || v(xe);
    }).catch(() => {
      Y || v([]);
    }), () => {
      Y = !0;
    };
  }, [t == null ? void 0 : t.allowedAssetIds]), k.useEffect(() => {
    if (l.length === 0) {
      T([]);
      return;
    }
    let U = !1;
    return ie.getAssetsByIds(l).then((Y) => {
      U || T(Y);
    }).catch(() => {
      U || T([]);
    }), () => {
      U = !0;
    };
  }, [l]);
  const x = k.useMemo(
    () => fM(p, c),
    [c, p]
  ), F = k.useMemo(() => x.length > 0 ? x : S, [x, S]), b = x.length > 0, j = () => {
    const U = M.trim();
    U && (i(e, { imageAssetUrl: U }), E(!1), A(""));
  };
  return !(n != null && n.trim()) || n.startsWith("temp-") ? /* @__PURE__ */ d("p", { className: "image-picker-hint", children: "Template image library is not available yet. Save the template and link assets in template setup." }) : /* @__PURE__ */ N("div", { className: `image-picker${s ? " image-picker-compact" : ""}`, children: [
    b ? /* @__PURE__ */ N("p", { className: "image-picker-hint", children: [
      "Choose an image from the template library",
      p.length > 0 ? " (zone + template)" : "",
      "."
    ] }) : u ? /* @__PURE__ */ N("p", { className: "image-picker-hint", children: [
      "Run a Content Hub search on this page, then pick an image below.",
      a ? ` (search: ${a})` : ""
    ] }) : /* @__PURE__ */ N("p", { className: "image-picker-hint", children: [
      "Link images on the template in ",
      /* @__PURE__ */ d("strong", { children: "Edit template" }),
      ", or add ",
      /* @__PURE__ */ d("code", { children: "searchIdentifier" }),
      " to this page's external component configuration to pick assets from search."
    ] }),
    D && /* @__PURE__ */ d("div", { className: "image-picker-loading", children: "Loading template images..." }),
    m && /* @__PURE__ */ d("div", { className: "image-picker-error", children: m }),
    o && /* @__PURE__ */ d("div", { className: "image-picker-selected-preview", children: /* @__PURE__ */ d("img", { src: o, alt: "", className: "image-picker-selected-image" }) }),
    /* @__PURE__ */ d("div", { className: "image-picker-grid", role: "radiogroup", "aria-label": "Choose image", children: F.map((U) => {
      const Y = r && U.id === r || !r && o && U.previewUrl === o || !r && o && U.thumbnailUrl === o;
      return /* @__PURE__ */ N(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": Y,
          className: `image-picker-option${Y ? " image-picker-option-selected" : ""}`,
          onClick: () => i(e, {
            id: U.id || void 0,
            imageAssetUrl: U.previewUrl ?? U.thumbnailUrl
          }),
          children: [
            /* @__PURE__ */ d("span", { className: "image-picker-preview", children: /* @__PURE__ */ d("img", { src: U.thumbnailUrl, alt: "", className: "image-picker-image" }) }),
            /* @__PURE__ */ d("span", { className: "image-picker-label", children: U.name })
          ]
        },
        U.id || U.thumbnailUrl
      );
    }) }),
    !D && F.length === 0 && !m && /* @__PURE__ */ N("p", { className: "image-picker-hint", children: [
      "No images available yet. In ",
      /* @__PURE__ */ d("strong", { children: "Edit template" }),
      ', use "Template image library" to link assets from Content Hub search.'
    ] }),
    /* @__PURE__ */ d("div", { className: "image-picker-footer", children: /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "image-picker-url-toggle",
        onClick: () => E((U) => !U),
        children: C ? "Hide image URL" : "Use image URL instead"
      }
    ) }),
    C && /* @__PURE__ */ N("div", { className: "image-picker-url-form", children: [
      /* @__PURE__ */ d(
        "input",
        {
          className: "image-picker-url-input",
          placeholder: "https://...",
          value: M,
          onChange: (U) => A(U.target.value)
        }
      ),
      /* @__PURE__ */ d("button", { type: "button", className: "image-picker-url-apply", onClick: j, disabled: !M.trim(), children: "Use image URL" })
    ] })
  ] });
}
function Qv({
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
  }, f = TE(e, c, s), p = AE(e), v = s === "stacked" ? " zone-stacked" : "";
  if (ml(e))
    return /* @__PURE__ */ d(
      mM,
      {
        style: f,
        layoutClass: p,
        stackedClass: v,
        zone: e,
        brandKit: a,
        layoutMode: s,
        value: n,
        onChange: r,
        adminMode: o,
        hideLogoPicker: i
      }
    );
  if (e.isLocked && !o)
    return /* @__PURE__ */ d("div", { style: f, className: `zone zone-locked${v} ${p}`, "data-zone-key": e.zoneKey, children: /* @__PURE__ */ d(hM, { zone: e, brandKit: a, layoutMode: s }) });
  switch (e.zoneType) {
    case "Text":
      return /* @__PURE__ */ d(
        vM,
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
        yM,
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
        gM,
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
        wM,
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
      return /* @__PURE__ */ d(TM, { style: f, layoutClass: p, zone: e, value: n, onChange: r });
    default:
      return null;
  }
}
function mM({
  style: e,
  layoutClass: t,
  stackedClass: n,
  zone: r,
  brandKit: o,
  layoutMode: i,
  value: s,
  onChange: a,
  adminMode: l,
  hideLogoPicker: u = !1
}) {
  const c = Gi((s == null ? void 0 : s.imageAssetUrl) ?? o.logoAssetUrl), f = rv((s == null ? void 0 : s.imageAssetUrl) ?? o.logoAssetUrl), p = !l && !u;
  return /* @__PURE__ */ d("div", { style: e, className: `zone zone-logo${n} ${t}`, "data-zone-key": r.zoneKey, children: p ? /* @__PURE__ */ d(
    dM,
    {
      zoneKey: r.zoneKey,
      selectedUrl: s == null ? void 0 : s.imageAssetUrl,
      compact: i === "stacked",
      onChange: (v, S) => a(v, { zoneKey: v, imageAssetUrl: S })
    }
  ) : /* @__PURE__ */ d(
    "span",
    {
      className: "zone-logo-preview-frame",
      style: f ? { background: f } : void 0,
      children: /* @__PURE__ */ d(
        "img",
        {
          src: c,
          alt: `${o.brandKitName} logo`,
          className: "zone-logo-image",
          style: { maxWidth: "100%", height: i === "stacked" ? 64 : "100%", objectFit: "contain" }
        }
      )
    }
  ) });
}
function hM({
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
    const o = Ri(e.htmlDefaultContent);
    return o ? /* @__PURE__ */ d("div", { dangerouslySetInnerHTML: { __html: o } }) : null;
  }
  return e.zoneType === "Image" ? /* @__PURE__ */ d("div", { className: "zone-image-placeholder zone-image-placeholder-locked", children: "Image zone — unlock in template setup to change the image here." }) : null;
}
function gM({
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
    pM,
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
function yM({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = ka("Heading"), a = cf("Secondary"), l = n.headingLevel ?? Mn;
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        ...e,
        fontFamily: s,
        fontSize: wE[l],
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
function vM({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = ka("Heading"), a = ka("Body"), l = cf("Secondary"), u = (n.zoneLabel ?? "").toLowerCase().includes("headline") ? s : a;
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
function wM({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const s = cf("Accent"), a = ka("CTA");
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
function TM({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o
}) {
  return n.htmlAllowUserOverride ? /* @__PURE__ */ N("div", { style: e, className: `zone zone-html ${t}`, children: [
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
        dangerouslySetInnerHTML: { __html: Ri((r == null ? void 0 : r.htmlValue) ?? n.htmlDefaultContent) }
      }
    )
  ] }) : /* @__PURE__ */ d(
    "div",
    {
      style: e,
      className: `zone zone-html zone-html-locked ${t}`,
      "data-zone-key": n.zoneKey,
      dangerouslySetInnerHTML: { __html: Ri(n.htmlDefaultContent) }
    }
  );
}
function Gv({
  template: e,
  zoneLayouts: t,
  zoneValues: n,
  layoutMode: r,
  onLayoutChange: o,
  onZoneValueChange: i
}) {
  var p;
  const [s, a] = k.useState(((p = e.zones[0]) == null ? void 0 : p.id) ?? null), l = k.useMemo(() => {
    const v = /* @__PURE__ */ new Set();
    for (const S of e.zones) {
      if (v.has(S.zoneKey))
        return !0;
      v.add(S.zoneKey);
    }
    return !1;
  }, [e.zones]), u = k.useMemo(
    () => [...e.zones].map((v) => {
      const S = Ao(v, e.zones), T = S === v.zoneKey ? t[v.zoneKey] : t[S];
      return Vv(v, T);
    }).sort((v, S) => v.sortOrder - S.sortOrder || v.id.localeCompare(S.id)),
    [e.zones, t]
  ), c = k.useMemo(() => aM(t), [t]), f = (v) => {
    const S = s === v.id, T = Ao(v, e.zones), D = e.zones.find((m) => m.id === v.id) ?? v, y = zr(D, e.zones);
    return /* @__PURE__ */ N("div", { className: "asset-zone-structure-row", children: [
      /* @__PURE__ */ N(
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
      S && /* @__PURE__ */ d("div", { className: "asset-zone-structure-body", children: /* @__PURE__ */ N("div", { className: "asset-zone-structure-content", children: [
        /* @__PURE__ */ d("p", { className: "asset-zone-structure-content-label", children: "Content" }),
        l && /* @__PURE__ */ N("p", { className: "asset-zone-structure-key-hint", children: [
          "Zone key: ",
          /* @__PURE__ */ d("code", { children: y })
        ] }),
        /* @__PURE__ */ d(
          Qv,
          {
            zone: { ...D, zoneKey: y },
            templateId: e.id,
            value: n[D.id],
            onChange: (m, h) => i(D.id, { ...h, zoneKey: y }),
            layoutMode: "stacked"
          }
        ),
        /* @__PURE__ */ d(
          cM,
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
  return /* @__PURE__ */ N("div", { className: "asset-structure-panel", children: [
    /* @__PURE__ */ d("p", { className: "asset-structure-panel-hint", children: "Expand a zone to edit position, alignment, and content. Layout is saved as JSON on this marketing asset." }),
    l && /* @__PURE__ */ d("p", { className: "asset-zone-structure-warning", children: "Some zones share the same zone key. Edit each zone's key in Template setup so content stays independent after save." }),
    /* @__PURE__ */ d("div", { className: "asset-zone-structure-list", children: u.map(f) }),
    /* @__PURE__ */ N("details", { className: "asset-layout-json-preview", children: [
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
  return /* @__PURE__ */ N("div", { className: "builder-split", children: [
    /* @__PURE__ */ N("section", { className: "builder-split-panel builder-split-structure", "aria-label": n, children: [
      /* @__PURE__ */ d("h3", { className: "builder-split-heading", children: n }),
      /* @__PURE__ */ d("div", { className: "builder-split-structure-body", children: e })
    ] }),
    /* @__PURE__ */ N("section", { className: "builder-split-panel builder-split-preview", "aria-label": r, children: [
      /* @__PURE__ */ d("h3", { className: "builder-split-heading", children: r }),
      /* @__PURE__ */ d("div", { className: "builder-split-preview-body", children: t })
    ] })
  ] });
}
function AM(e) {
  var n;
  const t = {};
  for (const r of e.zones) {
    const i = { zoneKey: zr(r, e.zones) };
    if (ml(r)) {
      i.imageAssetUrl = Xd, t[r.id] = i;
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
function SM(e, t) {
  var o, i, s, a, l, u, c, f;
  const n = AM(e), r = { ...n };
  for (const p of e.zones) {
    const v = zr(p, e.zones), S = t[p.id] ?? t[v] ?? t[p.zoneKey];
    if (S) {
      if (ml(p)) {
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
        htmlValue: (l = S.htmlValue) != null && l.trim() ? S.htmlValue : (u = n[p.id]) == null ? void 0 : u.htmlValue,
        imageAssetUrl: (c = S.imageAssetUrl) != null && c.trim() ? S.imageAssetUrl : (f = n[p.id]) == null ? void 0 : f.imageAssetUrl
      };
    }
  }
  return r;
}
const ff = k.forwardRef(function({ template: t, zoneValues: n = {}, layoutMode: r = "stacked" }, o) {
  const i = Ji(), s = k.useMemo(
    () => [...t.zones].sort((p, v) => p.sortOrder - v.sortOrder),
    [t.zones]
  ), a = k.useMemo(
    () => SM(t, n),
    [t, n]
  ), l = k.useMemo(
    () => xc(t, a, i),
    [i, a, t]
  ), u = iv(t), c = qd(t), f = av(t);
  return s.length === 0 ? /* @__PURE__ */ d("p", { className: "template-admin-preview-empty", children: "Add zones on the left to see a live preview here." }) : t.channelType === "Social" || r === "canvas" ? /* @__PURE__ */ N("div", { className: "live-preview-canvas-wrap", children: [
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
          Qv,
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
  ] }) : /* @__PURE__ */ N("div", { className: "live-preview-email-wrap", children: [
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
}), kM = [
  "Change spotted. Autosave is putting on its running shoes…",
  "Unsaved edits detected. Warming up the Content Hub handshake…",
  "Hold tight — your zones are about to get persisted…",
  "Debouncing brilliance before we commit…"
], EM = [
  "Convincing pixels to stay in their zones…",
  "Teaching the logo not to be shy…",
  "Negotiating with Content Hub (politely, with JSON)…",
  "Herding zones into the right template…",
  "Adding just enough whitespace to look intentional…",
  "Making sure the CTA button feels confident…",
  "Aligning everything left (unless you said otherwise)…",
  "Checking brand guidelines — Cytiva green: approved…",
  "Saving your masterpiece one property at a time…",
  "Linking relations without tangling the graph…",
  "Duplicating templates across dimensions (the fun kind)…",
  "Rendering HTML that even Outlook might tolerate…",
  "Exporting PNGs before anyone moves a zone…",
  "Persuading EPAM.TemplateZone entities to exist…",
  "Almost there — the bits are aligning…"
];
function NM(e) {
  return e === "pending" ? kM : EM;
}
function Pc(e, t = "active", n = 2600) {
  const r = NM(t), [o, i] = k.useState(0);
  return k.useEffect(() => {
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
function zo({
  active: e,
  variant: t = "active",
  className: n
}) {
  const r = Pc(e, t);
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
function Xv({ marketingAsset: e, userHasOverridePermission: t, onEject: n }) {
  const [r, o] = k.useState(!1), [i, s] = k.useState(""), [a, l] = k.useState(!1);
  return !t || e.isRawHtmlOverrideMA ? null : /* @__PURE__ */ N(at, { children: [
    /* @__PURE__ */ d("button", { type: "button", className: "eject-button", onClick: () => o(!0), children: "Eject to raw HTML" }),
    r && /* @__PURE__ */ d("div", { className: "eject-modal-backdrop", onClick: () => o(!1), children: /* @__PURE__ */ N("div", { className: "eject-modal", onClick: (u) => u.stopPropagation(), children: [
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
      /* @__PURE__ */ N("div", { className: "eject-modal-actions", children: [
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
      /* @__PURE__ */ d(zo, { active: a, className: "eject-saving" })
    ] }) })
  ] });
}
async function MM(e, t, n) {
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
function CM({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  renderEmailApiUrl: r = "/api/render-email-html",
  onSaved: o
}) {
  const i = Ji(), [s, a] = k.useState(() => {
    const M = Na(t.zoneLayoutJson), A = Ma(e, t.zoneValues, M.values);
    return ji(e, A);
  }), [l, u] = k.useState(() => {
    const M = Na(t.zoneLayoutJson);
    return Yv(e, M.layouts);
  }), [c, f] = k.useState(t.rawHtmlOverrideContent ?? ""), [p, v] = k.useState(!1), [S, T] = k.useState(null), D = k.useMemo(
    () => Wv(e, l),
    [e, l]
  ), y = k.useMemo(
    () => xc(D, s, i),
    [i, D, s]
  ), m = k.useMemo(
    () => Ri(c),
    [c]
  ), h = (M, A) => {
    a((x) => ({ ...x, [M]: A }));
  }, C = (M, A) => {
    u((x) => {
      const F = { ...x[M], ...A };
      for (const b of Object.keys(A))
        A[b] === void 0 && delete F[b];
      return { ...x, [M]: F };
    });
  }, E = async () => {
    v(!0), T(null);
    try {
      const M = D.zones.map((U) => {
        const Y = s[U.id];
        return Y ? { ...Y, zoneKey: zr(U, D.zones) } : null;
      }).filter((U) => !!(U != null && U.zoneKey)), A = Object.fromEntries(
        M.map((U) => [U.zoneKey, U])
      ), x = Zv(l, A);
      await ie.updateMarketingAsset({
        ...t,
        zoneLayoutJson: x
      }), Z("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const F = await ie.saveMarketingAssetZoneValues(
        t.id,
        M
      ), b = Ma(e, F, A);
      a(ji(e, b));
      let j = xc(
        D,
        Object.fromEntries(b.map((U) => [U.zoneKey, U])),
        i
      );
      if (cN(r))
        Z("email HTML", "Generated client-side email HTML.");
      else
        try {
          j = await MM(r, e.id, t.id), Z("email HTML render", `Rendered via ${r}`);
        } catch (U) {
          ae(
            "email HTML render API",
            U instanceof Error ? U.message : String(U)
          ), ae("email HTML preview", "Using client-side inline-CSS renderer because the render API is unavailable.");
        }
      if (lf()) {
        const U = new Blob([j], { type: "text/html" });
        await ie.uploadRenderedOutput(t.id, U, `${t.assetName}.html`);
      } else
        ae(
          "rendered output upload",
          "Skipped HTML upload — not required for save on this Content Hub instance."
        );
      o == null || o({
        ...t,
        zoneValues: b,
        zoneLayoutJson: x
      });
    } catch (M) {
      const A = M instanceof Error ? M.message : "Failed to save and render email HTML.";
      Un("email save/render", M), T(A);
    } finally {
      v(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ d(
    Ca,
    {
      structureTitle: "HTML source",
      previewTitle: "Rendered preview",
      structure: /* @__PURE__ */ N("div", { className: "email-builder-override-structure", children: [
        /* @__PURE__ */ N("div", { className: "override-banner", children: [
          "Raw HTML override active. Reason: ",
          t.overrideReasonMA
        ] }),
        /* @__PURE__ */ d(
          "textarea",
          {
            className: "raw-html-editor",
            value: c,
            onChange: (M) => f(M.target.value),
            onBlur: async (M) => {
              const A = M.target.value;
              await ie.updateMarketingAsset({
                ...t,
                rawHtmlOverrideContent: A
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
      structure: /* @__PURE__ */ N("div", { className: "email-builder-structure", children: [
        /* @__PURE__ */ d(
          Gv,
          {
            template: e,
            zoneLayouts: l,
            zoneValues: s,
            layoutMode: "stacked",
            onLayoutChange: C,
            onZoneValueChange: h
          }
        ),
        /* @__PURE__ */ N("div", { className: "email-builder-actions", children: [
          /* @__PURE__ */ d("button", { type: "button", className: "email-builder-save", onClick: E, disabled: p, children: "Save" }),
          /* @__PURE__ */ d(zo, { active: p }),
          /* @__PURE__ */ d(
            Xv,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (M) => {
                await ie.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: M,
                  rawHtmlOverrideContent: y || "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        S && /* @__PURE__ */ d("div", { className: "marketing-builder-error email-builder-error", children: S })
      ] }),
      preview: /* @__PURE__ */ d(
        ff,
        {
          template: D,
          zoneValues: s,
          layoutMode: "stacked"
        }
      )
    }
  ) });
}
function Jv(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function zM(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function LM({ layer: e, selected: t, onSelect: n, onMoveStart: r }) {
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
      i = e.src ? /* @__PURE__ */ d("img", { className: "chd-layer-image", src: e.src, alt: e.name, draggable: !1 }) : /* @__PURE__ */ d("div", { className: "chd-layer-image-placeholder", style: { background: e.fill || "#e8e6e1" }, children: "Image" });
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
let xM = 1;
function qo() {
  return `layer-${Date.now().toString(36)}-${xM++}`;
}
function Vs(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: qo(),
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
        id: qo(),
        type: e,
        name: "Rectangle",
        x: n,
        y: r,
        width: 160,
        height: 100,
        visible: !0,
        fill: "#3d5a80",
        locked: !1,
        allowTransform: !1,
        editableContent: !1
      };
    case "text":
      return {
        id: qo(),
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
        id: qo(),
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
function pf() {
  const e = Vs("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = "#f7f6f3";
  const t = Vs("rect", { x: 100, y: 120 });
  t.fill = "#2c2c2a", t.width = 140, t.height = 90;
  const n = Vs("text", { x: 100, y: 240 });
  return n.text = "CHDesigner", n.fontSize = 28, n.color = "#2c2c2a", n.width = 280, n.height = 40, n.editableContent = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: "#eceae4"
    },
    layers: [e, t, n]
  };
}
function ft(e) {
  return JSON.parse(JSON.stringify(e));
}
function mf(e) {
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
    const u = typeof a.id == "string" ? a.id : qo(), c = typeof a.name == "string" ? a.name : l, f = Number(a.x), p = Number(a.y), v = Number(a.width), S = Number(a.height);
    if (![f, p, v, S].every(Number.isFinite))
      continue;
    const T = {
      id: u,
      type: l,
      name: c,
      x: f,
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
function qi(e) {
  return e.locked ? !1 : qv(e);
}
function Lo(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function hf(e, t) {
  return t === "admin" ? !0 : e.visible ? qi(e) || Lo(e) : !1;
}
function DM(e) {
  return { version: 1, templateId: e, overrides: {} };
}
function bM(e) {
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
function IM(e, t) {
  const n = ft(e);
  return t != null && t.overrides ? {
    ...n,
    layers: n.layers.map((r) => {
      const o = t.overrides[r.id];
      if (!o)
        return r;
      const i = { ...r };
      return Lo(r) && (typeof o.x == "number" && (i.x = o.x), typeof o.y == "number" && (i.y = o.y), typeof o.width == "number" && (i.width = o.width), typeof o.height == "number" && (i.height = o.height)), qi(r) && (typeof o.text == "string" && (i.text = o.text), typeof o.fill == "string" && (i.fill = o.fill), typeof o.color == "string" && (i.color = o.color), typeof o.src == "string" && (i.src = o.src)), i;
    })
  } : n;
}
function OM(e, t, n) {
  const r = {}, o = new Map(e.layers.map((i) => [i.id, i]));
  for (const i of t.layers) {
    const s = o.get(i.id);
    if (!s)
      continue;
    const a = {};
    Lo(s) && (i.x !== s.x && (a.x = i.x), i.y !== s.y && (a.y = i.y), i.width !== s.width && (a.width = i.width), i.height !== s.height && (a.height = i.height)), qi(s) && ((i.text ?? "") !== (s.text ?? "") && (a.text = i.text), (i.fill ?? "") !== (s.fill ?? "") && (a.fill = i.fill), (i.color ?? "") !== (s.color ?? "") && (a.color = i.color), (i.src ?? "") !== (s.src ?? "") && (a.src = i.src)), Object.keys(a).length > 0 && (r[i.id] = a);
  }
  return { version: 1, templateId: n, overrides: r };
}
function PM(e, t) {
  const n = {};
  return Lo(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), qi(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const Jr = 24, Xm = 1, e0 = 0.25, t0 = 3, _M = 50, n0 = k.createContext(null);
function RM(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function Jm(e, t, n) {
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
function $M({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: o,
  onDocumentChange: i,
  onInstanceChange: s
}) {
  const a = k.useRef(null);
  a.current || (a.current = n ? ft(n) : pf());
  const l = k.useRef(
    ft(r ?? n ?? a.current)
  ), u = k.useRef(t);
  u.current = t;
  const [c, f] = k.useState(() => ft(a.current)), [p, v] = k.useState([]), [S, T] = k.useState({
    zoom: Xm,
    panX: 40,
    panY: 40
  }), D = k.useRef([ft(a.current)]), y = k.useRef(0), [m, h] = k.useState(0), C = k.useRef(p);
  C.current = p;
  const E = k.useRef(c);
  E.current = c;
  const M = k.useRef(i);
  M.current = i;
  const A = k.useRef(s);
  A.current = s;
  const x = k.useRef(o);
  x.current = o;
  const F = k.useCallback(() => h((V) => V + 1), []), b = k.useCallback((V) => {
    var O, R;
    if ((O = M.current) == null || O.call(M, ft(V)), u.current === "endUser") {
      const w = x.current ?? "";
      (R = A.current) == null || R.call(
        A,
        OM(l.current, V, w)
      );
    }
  }, []), j = k.useCallback(
    (V) => {
      const O = D.current.slice(0, y.current + 1);
      for (O.push(ft(V)); O.length > _M; )
        O.shift();
      D.current = O, y.current = O.length - 1, F();
    },
    [F]
  ), U = k.useCallback(
    (V, O) => {
      f(V), E.current = V, O && j(V), b(V);
    },
    [b, j]
  ), Y = k.useCallback(
    (V) => {
      const O = u.current === "endUser";
      switch (V.type) {
        case "ADD_LAYER": {
          if (O)
            return;
          const R = Vs(V.layerType, V.at);
          f((w) => {
            const L = { ...w, layers: [...w.layers, R] };
            return j(L), b(L), L;
          }), v([R.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const R = V.pushHistory !== !1;
          f((w) => {
            const L = {
              ...w,
              layers: w.layers.map((_) => {
                if (_.id !== V.id)
                  return _;
                const J = O ? PM(_, V.patch) : V.patch;
                if (Object.keys(J).length === 0)
                  return _;
                const X = { ..._, ...J };
                return typeof X.width == "number" && (X.width = Math.max(Jr, X.width)), typeof X.height == "number" && (X.height = Math.max(Jr, X.height)), X;
              })
            };
            return R && j(L), b(L), L;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if (O)
            return;
          const R = new Set(V.ids ?? C.current);
          if (R.size === 0)
            return;
          f((w) => {
            const L = {
              ...w,
              layers: w.layers.filter((_) => !R.has(_.id))
            };
            return j(L), b(L), L;
          }), v((w) => w.filter((L) => !R.has(L)));
          break;
        }
        case "SELECT": {
          v((R) => {
            const w = V.ids.filter((L) => {
              const _ = E.current.layers.find((J) => J.id === L);
              return _ ? hf(_, u.current) : !1;
            });
            if (V.additive) {
              const L = new Set(R);
              for (const _ of w)
                L.has(_) ? L.delete(_) : L.add(_);
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
          if (O)
            return;
          f((R) => {
            const w = {
              ...R,
              layers: RM(R.layers, V.fromIndex, V.toIndex)
            };
            return j(w), b(w), w;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if (O)
            return;
          f((R) => {
            const w = {
              ...R,
              layers: R.layers.map(
                (L) => L.id === V.id ? { ...L, visible: V.visible } : L
              )
            };
            return j(w), b(w), w;
          });
          break;
        }
        case "BRING_FORWARD": {
          if (O)
            return;
          const R = C.current;
          f((w) => {
            const L = { ...w, layers: Jm(w.layers, R, "forward") };
            return j(L), b(L), L;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if (O)
            return;
          const R = C.current;
          f((w) => {
            const L = { ...w, layers: Jm(w.layers, R, "backward") };
            return j(L), b(L), L;
          });
          break;
        }
        case "ZOOM_SET": {
          T((R) => ({
            ...R,
            zoom: Jv(V.zoom, e0, t0)
          }));
          break;
        }
        case "ZOOM_RESET": {
          T({ zoom: Xm, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          T((R) => ({
            ...R,
            panX: V.panX,
            panY: V.panY
          }));
          break;
        }
        case "UNDO": {
          if (y.current <= 0)
            return;
          y.current -= 1;
          const R = ft(D.current[y.current]);
          f(R), E.current = R, v([]), F(), b(R);
          break;
        }
        case "REDO": {
          if (y.current >= D.current.length - 1)
            return;
          y.current += 1;
          const R = ft(D.current[y.current]);
          f(R), E.current = R, v([]), F(), b(R);
          break;
        }
        case "LOAD_DOCUMENT": {
          U(ft(V.document), !0), v([]);
          break;
        }
        case "COMMIT": {
          f((R) => (j(R), b(R), R));
          break;
        }
      }
    },
    [U, F, b, j]
  ), xe = k.useCallback(() => ft(c), [c]), Qe = k.useCallback(
    (V) => {
      if (u.current === "endUser")
        return !1;
      try {
        const O = mf(JSON.parse(V));
        return O ? (l.current = ft(O), U(O, !0), v([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [U]
  );
  k.useEffect(() => {
    t === "admin" && n && (l.current = ft(n)), t === "endUser" && r && (l.current = ft(r));
  }, [n, r, t]);
  const ke = k.useMemo(
    () => ({
      mode: t,
      templateId: o,
      document: c,
      selection: p,
      viewport: S,
      canUndo: y.current > 0,
      canRedo: y.current < D.current.length - 1,
      dispatch: Y,
      exportDocument: xe,
      importDocumentJson: Qe
    }),
    [t, o, c, p, S, Y, xe, Qe, m]
  );
  return /* @__PURE__ */ d(n0.Provider, { value: ke, children: e });
}
function Lr() {
  const e = k.useContext(n0);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function gf() {
  return Lr().mode;
}
function jM() {
  return Lr().document;
}
function r0() {
  return Lr().document.layers;
}
function kl() {
  return Lr().selection;
}
function o0() {
  return Lr().viewport;
}
function El() {
  return Lr().dispatch;
}
function UM() {
  const e = Lr();
  return {
    mode: e.mode,
    canUndo: e.canUndo,
    canRedo: e.canRedo,
    exportDocument: e.exportDocument,
    importDocumentJson: e.importDocumentJson,
    dispatch: e.dispatch
  };
}
const HM = ["nw", "ne", "sw", "se"];
function FM() {
  const e = jM(), t = kl(), n = o0(), r = El(), o = gf(), [i, s] = k.useState(null), [a, l] = k.useState(!1), u = k.useRef(n);
  u.current = n;
  const c = k.useRef(o);
  c.current = o, k.useEffect(() => {
    const E = (A) => {
      if (A.code === "Space" && !(A.target instanceof HTMLInputElement) && !(A.target instanceof HTMLTextAreaElement) && (A.preventDefault(), l(!0)), c.current === "admin" && (A.key === "Delete" || A.key === "Backspace") && t.length > 0) {
        const x = A.target.tagName;
        if (x === "INPUT" || x === "TEXTAREA")
          return;
        A.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (A.ctrlKey || A.metaKey) && A.key.toLowerCase() === "z" && !A.shiftKey && (A.preventDefault(), r({ type: "UNDO" })), (A.ctrlKey || A.metaKey) && (A.key.toLowerCase() === "y" || A.key.toLowerCase() === "z" && A.shiftKey) && (A.preventDefault(), r({ type: "REDO" }));
    }, M = (A) => {
      A.code === "Space" && l(!1);
    };
    return window.addEventListener("keydown", E), window.addEventListener("keyup", M), () => {
      window.removeEventListener("keydown", E), window.removeEventListener("keyup", M);
    };
  }, [r, t.length]), k.useEffect(() => {
    if (!i)
      return;
    const E = (A) => {
      const x = u.current.zoom;
      if (i.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: i.origPanX + (A.clientX - i.startX),
          panY: i.origPanY + (A.clientY - i.startY)
        });
        return;
      }
      const { dx: F, dy: b } = zM(
        A.clientX - i.startX,
        A.clientY - i.startY,
        x
      );
      if (i.kind === "move") {
        for (const Qe of i.ids) {
          const ke = i.origins[Qe];
          ke && r({
            type: "UPDATE_LAYER",
            id: Qe,
            patch: { x: ke.x + F, y: ke.y + b },
            pushHistory: !1
          });
        }
        return;
      }
      let j = i.origX, U = i.origY, Y = i.origW, xe = i.origH;
      i.handle.includes("e") && (Y = Math.max(Jr, i.origW + F)), i.handle.includes("s") && (xe = Math.max(Jr, i.origH + b)), i.handle.includes("w") && (Y = Math.max(Jr, i.origW - F), j = i.origX + (i.origW - Y)), i.handle.includes("n") && (xe = Math.max(Jr, i.origH - b), U = i.origY + (i.origH - xe)), r({
        type: "UPDATE_LAYER",
        id: i.id,
        patch: { x: j, y: U, width: Y, height: xe },
        pushHistory: !1
      });
    }, M = () => {
      (i.kind === "move" || i.kind === "resize") && r({ type: "COMMIT" }), s(null);
    };
    return window.addEventListener("pointermove", E), window.addEventListener("pointerup", M), () => {
      window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", M);
    };
  }, [i, r]);
  const f = (E) => {
    E.preventDefault();
    const M = Jv(n.zoom * (E.deltaY < 0 ? 1.08 : 0.92), e0, t0);
    r({ type: "ZOOM_SET", zoom: M });
  }, p = (E) => {
    s({
      kind: "pan",
      startX: E.clientX,
      startY: E.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, v = (E) => {
    if (E.button === 1 || E.button === 0 && a) {
      E.preventDefault(), p(E);
      return;
    }
    E.button === 0 && r({ type: "UNSELECT_ALL" });
  }, S = (E, M) => {
    hf(E, o) && r({
      type: "SELECT",
      ids: [E.id],
      additive: M.shiftKey
    });
  }, T = (E) => o === "admin" ? !E.locked : Lo(E), D = (E, M) => {
    if (!T(E) || a)
      return;
    const A = t.includes(E.id) ? t : [E.id];
    t.includes(E.id) || r({ type: "SELECT", ids: [E.id] });
    const x = {};
    for (const F of A) {
      const b = e.layers.find((j) => j.id === F);
      b && T(b) && (x[F] = { x: b.x, y: b.y });
    }
    Object.keys(x).length !== 0 && s({
      kind: "move",
      ids: Object.keys(x),
      startX: M.clientX,
      startY: M.clientY,
      origins: x
    });
  }, y = (E, M, A) => {
    A.stopPropagation(), T(E) && (r({ type: "SELECT", ids: [E.id] }), s({
      kind: "resize",
      id: E.id,
      startX: A.clientX,
      startY: A.clientY,
      origX: E.x,
      origY: E.y,
      origW: E.width,
      origH: E.height,
      handle: M
    }));
  }, m = e.layers.filter((E) => t.includes(E.id) && E.visible), h = m.length === 1 ? m[0] : null, C = h ? T(h) : !1;
  return /* @__PURE__ */ N(
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
            children: /* @__PURE__ */ N(
              "div",
              {
                className: "chd-artboard",
                style: {
                  width: e.canvas.width,
                  height: e.canvas.height,
                  background: e.canvas.background || "#eceae4"
                },
                onPointerDown: (E) => {
                  E.button !== 0 || a || (E.stopPropagation(), r({ type: "UNSELECT_ALL" }));
                },
                children: [
                  e.layers.map((E) => /* @__PURE__ */ d(
                    LM,
                    {
                      layer: E,
                      selected: t.includes(E.id),
                      onSelect: (M) => S(E, M),
                      onMoveStart: (M) => D(E, M)
                    },
                    E.id
                  )),
                  C && h ? /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: h.x,
                        top: h.y,
                        width: h.width,
                        height: h.height
                      },
                      children: HM.map((E) => /* @__PURE__ */ d(
                        "div",
                        {
                          className: `chd-handle chd-handle--${E}`,
                          onPointerDown: (M) => y(h, E, M)
                        },
                        E
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
                  m.length > 1 ? m.map((E) => /* @__PURE__ */ d(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: E.x,
                        top: E.y,
                        width: E.width,
                        height: E.height
                      }
                    },
                    `sel-${E.id}`
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
function BM() {
  const e = r0(), t = kl(), n = El(), r = gf(), o = r === "admin", i = [...e].map((s, a) => ({ layer: s, index: a })).reverse().filter(({ layer: s }) => o || hf(s, r));
  return /* @__PURE__ */ N("aside", { className: "chd-panel chd-layers-panel", "aria-label": "Layers", children: [
    /* @__PURE__ */ d("div", { className: "chd-panel-header", children: o ? "Layers" : "Editable layers" }),
    /* @__PURE__ */ d("ul", { className: "chd-layer-list", children: i.length === 0 ? /* @__PURE__ */ d("li", { className: "chd-panel-empty", children: "No editable layers" }) : i.map(({ layer: s, index: a }) => {
      const l = t.includes(s.id);
      return /* @__PURE__ */ N(
        "li",
        {
          className: `chd-layer-list-item${l ? " chd-layer-list-item--selected" : ""}`,
          children: [
            /* @__PURE__ */ N(
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
            o ? /* @__PURE__ */ N(at, { children: [
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
  return /* @__PURE__ */ N("label", { className: "chd-field", children: [
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
function KM() {
  const e = r0(), t = kl(), n = El(), o = gf() === "admin", i = e.filter((c) => t.includes(c.id)), s = i.length === 1 ? i[0] : null, a = (c) => {
    s && n({ type: "UPDATE_LAYER", id: s.id, patch: c });
  }, l = s ? o ? !s.locked : Lo(s) : !1, u = s ? o ? !s.locked : qi(s) : !1;
  return /* @__PURE__ */ N("aside", { className: "chd-panel chd-properties-panel", "aria-label": "Properties", children: [
    /* @__PURE__ */ d("div", { className: "chd-panel-header", children: "Properties" }),
    s ? /* @__PURE__ */ N("div", { className: "chd-properties-body", children: [
      o ? /* @__PURE__ */ N("label", { className: "chd-field", children: [
        /* @__PURE__ */ d("span", { children: "Name" }),
        /* @__PURE__ */ d(
          "input",
          {
            type: "text",
            value: s.name,
            onChange: (c) => a({ name: c.target.value })
          }
        )
      ] }) : /* @__PURE__ */ N("div", { className: "chd-field", children: [
        /* @__PURE__ */ d("span", { children: "Layer" }),
        /* @__PURE__ */ d("strong", { children: s.name })
      ] }),
      /* @__PURE__ */ N("div", { className: "chd-field-row", children: [
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
      /* @__PURE__ */ N("div", { className: "chd-field-row", children: [
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
      u && (s.type === "frame" || s.type === "rect" || s.type === "image") && /* @__PURE__ */ N("label", { className: "chd-field", children: [
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
      u && s.type === "text" && /* @__PURE__ */ N(at, { children: [
        /* @__PURE__ */ N("label", { className: "chd-field", children: [
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
        o ? /* @__PURE__ */ N("div", { className: "chd-field-row", children: [
          /* @__PURE__ */ d(
            Wo,
            {
              label: "Size",
              value: s.fontSize ?? 16,
              onChange: (c) => a({ fontSize: c })
            }
          ),
          /* @__PURE__ */ N("label", { className: "chd-field", children: [
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
        ] }) : /* @__PURE__ */ N("label", { className: "chd-field", children: [
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
      u && s.type === "image" && /* @__PURE__ */ N("label", { className: "chd-field", children: [
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
      o ? /* @__PURE__ */ N(at, { children: [
        /* @__PURE__ */ N("label", { className: "chd-field chd-field-checkbox", children: [
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
        /* @__PURE__ */ N("label", { className: "chd-field chd-field-checkbox", children: [
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
        /* @__PURE__ */ N("label", { className: "chd-field chd-field-checkbox", children: [
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
const ZM = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function VM() {
  const e = El(), t = kl(), n = o0(), { mode: r, canUndo: o, canRedo: i, exportDocument: s, importDocumentJson: a } = UM(), l = k.useRef(null), u = r === "admin", c = () => {
    const p = s(), v = new Blob([JSON.stringify(p, null, 2)], { type: "application/json" }), S = URL.createObjectURL(v), T = document.createElement("a");
    T.href = S, T.download = "chdesigner-document.json", T.click(), URL.revokeObjectURL(S);
  }, f = async (p) => {
    if (!p)
      return;
    const v = await p.text();
    a(v) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  };
  return /* @__PURE__ */ N("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ N("div", { className: "chd-toolbar-brand", children: [
      "CHDesigner",
      /* @__PURE__ */ d("span", { className: "chd-toolbar-mode", children: u ? "Admin" : "Edit" })
    ] }),
    u ? /* @__PURE__ */ d("div", { className: "chd-toolbar-group", children: ZM.map((p) => /* @__PURE__ */ N(
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
    u ? /* @__PURE__ */ N("div", { className: "chd-toolbar-group", children: [
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
    /* @__PURE__ */ N("div", { className: "chd-toolbar-group", children: [
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
    /* @__PURE__ */ N("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ N("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ZOOM_RESET" }), children: [
        Math.round(n.zoom * 100),
        "%"
      ] }),
      u ? /* @__PURE__ */ N(at, { children: [
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
  return /* @__PURE__ */ d($M, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    onDocumentChange: o,
    onInstanceChange: i
  }, children: /* @__PURE__ */ N("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ d(VM, {}),
    s ? /* @__PURE__ */ d("div", { className: `chd-status-bar${a ? ` ${a}` : ""}`, children: s }) : null,
    /* @__PURE__ */ N("div", { className: "chd-main", children: [
      /* @__PURE__ */ d(BM, {}),
      /* @__PURE__ */ d(FM, {}),
      /* @__PURE__ */ d(KM, {})
    ] })
  ] }) });
}
function WM(e) {
  var t;
  if (!((t = e.designerDocumentJson) != null && t.trim()))
    return null;
  try {
    return mf(JSON.parse(e.designerDocumentJson));
  } catch {
    return null;
  }
}
function YM(e, t) {
  var n;
  if ((n = t.designerInstanceJson) != null && n.trim())
    try {
      const r = bM(JSON.parse(t.designerInstanceJson));
      if (r)
        return r;
    } catch {
    }
  return DM(e.id);
}
function qm({
  template: e,
  marketingAsset: t,
  designerInstanceProperty: n,
  onSaved: r
}) {
  const o = k.useMemo(() => WM(e), [e]), [i, s] = k.useState(
    () => YM(e, t)
  ), a = k.useRef(i);
  a.current = i;
  const [l, u] = k.useState("idle"), [c, f] = k.useState(null), p = k.useMemo(() => o ? IM(o, i) : null, [o, i]), v = k.useCallback(async () => {
    u("saving"), f(null);
    try {
      const T = JSON.stringify(a.current);
      await ie.saveMarketingAssetDesignerInstance(
        t.id,
        T,
        n
      );
      const D = { ...t, designerInstanceJson: T };
      r == null || r(D), u("saved");
    } catch (T) {
      f(T instanceof Error ? T.message : "Failed to save designer instance."), u("error");
    }
  }, [n, t, r]);
  return !o || !p ? /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Template designer document is missing or invalid. Open Edit template and create a canvas template first." }) : /* @__PURE__ */ N("div", { className: "designer-asset-builder", children: [
    /* @__PURE__ */ N("div", { className: "designer-asset-builder-actions", children: [
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
const QM = 900;
function GM(e) {
  var t;
  if ((t = e.designerDocumentJson) != null && t.trim())
    try {
      const n = mf(JSON.parse(e.designerDocumentJson));
      if (n)
        return n;
    } catch {
    }
  return pf();
}
function XM({
  template: e,
  designerDocumentProperty: t,
  onTemplateSaved: n
}) {
  const [r, o] = k.useState(() => GM(e)), [i, s] = k.useState("saved"), [a, l] = k.useState(null), u = k.useRef(r), c = k.useRef(null), f = k.useRef(0), p = k.useRef(!0);
  u.current = r;
  const v = k.useCallback(
    async (D) => {
      const y = ++f.current;
      s("saving"), l(null);
      try {
        const m = JSON.stringify(D);
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
  k.useEffect(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    return s("pending"), c.current != null && window.clearTimeout(c.current), c.current = window.setTimeout(() => {
      v(u.current);
    }, QM), () => {
      c.current != null && window.clearTimeout(c.current);
    };
  }, [r, v]);
  const S = i === "error" ? "chd-status-bar--error" : i === "saved" ? "chd-status-bar--saved" : void 0, T = i === "saving" ? "Saving template canvas…" : i === "pending" ? "Unsaved changes…" : i === "error" ? a || "Save failed" : "Saved to template";
  return /* @__PURE__ */ d(
    i0,
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
  );
}
async function JM(e, t) {
  const n = pf();
  e.canvasWidth && (n.canvas.width = e.canvasWidth), e.canvasHeight && (n.canvas.height = e.canvasHeight);
  const r = JSON.stringify(n);
  return await ie.saveTemplateDesignerDocument(e.id, r, t), { ...e, designerDocumentJson: r };
}
function qM(e) {
  var t;
  return !!((t = e == null ? void 0 : e.designerDocumentJson) != null && t.trim());
}
const eC = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
let Cu = null;
function tC(e) {
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
function nC(e = eC) {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (Cu || (Cu = tC(e).then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), Cu);
}
function rC({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  html2canvasCdnUrl: r,
  onSaved: o
}) {
  const [i, s] = k.useState(() => {
    const m = Na(t.zoneLayoutJson), h = Ma(e, t.zoneValues, m.values);
    return ji(e, h);
  }), [a, l] = k.useState(() => {
    const m = Na(t.zoneLayoutJson);
    return Yv(e, m.layouts);
  }), [u, c] = k.useState(!1), [f, p] = k.useState(null), v = k.useRef(null), S = k.useMemo(
    () => Wv(e, a),
    [e, a]
  ), T = (m, h) => {
    s((C) => ({ ...C, [m]: h }));
  }, D = (m, h) => {
    l((C) => {
      const E = { ...C[m], ...h };
      for (const M of Object.keys(h))
        h[M] === void 0 && delete E[M];
      return { ...C, [m]: E };
    });
  }, y = async () => {
    c(!0), p(null);
    try {
      const m = S.zones.map((A) => {
        const x = i[A.id];
        return x ? { ...x, zoneKey: zr(A, S.zones) } : null;
      }).filter((A) => !!(A != null && A.zoneKey)), h = Object.fromEntries(
        m.map((A) => [A.zoneKey, A])
      ), C = Zv(a, h);
      await ie.updateMarketingAsset({
        ...t,
        zoneLayoutJson: C
      }), Z("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const E = await ie.saveMarketingAssetZoneValues(
        t.id,
        m
      ), M = Ma(e, E, h);
      if (s(ji(e, M)), lf() && v.current) {
        const x = await (await nC(r))(v.current, {
          useCORS: !0,
          width: qd(e),
          height: av(e)
        }), F = ["image", "png"].join("/"), b = await new Promise(
          (j, U) => x.toBlob((Y) => Y ? j(Y) : U(new Error("Canvas export failed")), F)
        );
        await ie.uploadRenderedOutput(
          t.id,
          b,
          `${t.assetName}.png`
        );
      } else
        ae(
          "rendered output upload",
          "Skipped PNG upload — not required for save on this Content Hub instance."
        );
      o == null || o({
        ...t,
        zoneValues: M,
        zoneLayoutJson: C
      });
    } catch (m) {
      p(m instanceof Error ? m.message : "Failed to save.");
    } finally {
      c(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ N("div", { className: "social-builder social-builder-override", children: [
    /* @__PURE__ */ N("div", { className: "override-banner", children: [
      "Raw HTML override active. Reason: ",
      t.overrideReasonMA
    ] }),
    /* @__PURE__ */ d("div", { dangerouslySetInnerHTML: { __html: t.rawHtmlOverrideContent ?? "" } })
  ] }) : /* @__PURE__ */ d("div", { className: "social-builder", children: /* @__PURE__ */ d(
    Ca,
    {
      structureTitle: "Social structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ N("div", { className: "social-builder-structure", children: [
        /* @__PURE__ */ d(
          Gv,
          {
            template: e,
            zoneLayouts: a,
            zoneValues: i,
            layoutMode: "canvas",
            onLayoutChange: D,
            onZoneValueChange: T
          }
        ),
        /* @__PURE__ */ N("div", { className: "social-builder-actions", children: [
          /* @__PURE__ */ d("button", { type: "button", className: "social-builder-save", onClick: y, disabled: u, children: "Save" }),
          /* @__PURE__ */ d(zo, { active: u }),
          /* @__PURE__ */ d(
            Xv,
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
        ff,
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
function Ls({
  activeTab: e,
  zoneCount: t,
  templateName: n,
  onTabChange: r,
  showAssetTab: o = !0
}) {
  return /* @__PURE__ */ N("div", { className: "marketing-builder-toolbar marketing-builder-tab-bar", children: [
    /* @__PURE__ */ N("div", { className: "marketing-builder-tabs", role: "tablist", "aria-label": "Marketing builder mode", children: [
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
    /* @__PURE__ */ N("span", { className: "marketing-builder-toolbar-meta", children: [
      n ? `${n} · ` : "",
      t,
      " zone",
      t === 1 ? "" : "s"
    ] })
  ] });
}
function zu({
  brandKitId: e,
  currentTemplateId: t,
  marketingAssetId: n,
  onTemplateChange: r,
  refreshKey: o = 0
}) {
  var S;
  const [i, s] = k.useState([]), [a, l] = k.useState(!0), [u, c] = k.useState(!1), [f, p] = k.useState(null);
  k.useEffect(() => {
    let T = !1;
    async function D() {
      l(!0), p(null);
      try {
        const y = await ie.listTemplatesForBrandKit(e);
        if (T)
          return;
        const m = y.some((C) => C.id === t) ? y : [...y, await ie.getTemplate(t)], h = [...new Map(m.map((C) => [C.id, C])).values()];
        h.sort((C, E) => C.templateName.localeCompare(E.templateName)), s(h);
      } catch (y) {
        T || (p(y instanceof Error ? y.message : "Could not load templates."), s([]));
      } finally {
        T || l(!1);
      }
    }
    return D(), () => {
      T = !0;
    };
  }, [e, t, o]);
  const v = async (T) => {
    if (!(!T || T === t)) {
      c(!0), p(null);
      try {
        await ie.linkMarketingAssetToTemplate(n, T);
        const D = i.find((y) => y.id === T) ?? await ie.getTemplate(T);
        r(D);
      } catch (D) {
        p(D instanceof Error ? D.message : "Could not switch template.");
      } finally {
        c(!1);
      }
    }
  };
  return a ? /* @__PURE__ */ d("p", { className: "template-selector-status", children: "Loading templates..." }) : i.length <= 1 ? /* @__PURE__ */ N("div", { className: "template-selector", children: [
    /* @__PURE__ */ N("p", { className: "template-selector-status", children: [
      "Using ",
      /* @__PURE__ */ d("strong", { children: ((S = i[0]) == null ? void 0 : S.templateName) ?? "current template" }),
      i.length === 0 ? " (only template for this brand kit)" : "",
      ". Duplicate this template in Edit template to create another format."
    ] }),
    f && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: f })
  ] }) : /* @__PURE__ */ N("div", { className: "template-selector", children: [
    /* @__PURE__ */ N("label", { className: "template-selector-label", children: [
      "Template",
      /* @__PURE__ */ d(
        "select",
        {
          value: t,
          disabled: u,
          onChange: (T) => void v(T.target.value),
          children: i.map((T) => /* @__PURE__ */ N("option", { value: T.id, children: [
            T.templateName,
            " (",
            T.channelType,
            ")"
          ] }, T.id))
        }
      )
    ] }),
    /* @__PURE__ */ d("p", { className: "template-selector-hint", children: u ? "" : "Choose which template this marketing asset uses." }),
    /* @__PURE__ */ d(zo, { active: u, className: "template-selector-saving" }),
    f && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-selector-error", children: f })
  ] });
}
const oC = [
  "Text",
  "Heading",
  "Image",
  "CTA Button",
  "Logo",
  "Background Color",
  "Divider",
  "HTML"
];
function iC(e) {
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
function sC(e) {
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
  }[t] ?? oC.find((r) => r.toLowerCase() === t);
}
function s0(e) {
  var l, u;
  const t = e.trim(), n = t.match(/zone\s*[:=]\s*([a-zA-Z0-9_-]+)/i), r = t.match(/type\s*[:=]\s*([a-zA-Z0-9 _-]+)/i), o = t.match(/label\s*[:=]\s*([^|]+)/i), i = (l = n == null ? void 0 : n[1]) == null ? void 0 : l.trim(), s = r != null && r[1] ? sC(r[1]) : void 0, a = ((u = o == null ? void 0 : o[1]) == null ? void 0 : u.trim()) || void 0;
  return { zoneKey: i, zoneType: s, zoneLabel: a };
}
function aC(e, t) {
  return e.replace(/zone\s*[:=]\s*/gi, "").replace(/type\s*[:=]\s*[a-zA-Z0-9 _-]+/gi, "").replace(/label\s*[:=]\s*[^|]+/gi, "").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase() || t;
}
function eh(e) {
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
  if ((eh(e) || r === "RECTANGLE" || r === "ELLIPSE") && eh(e))
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
function lC(e) {
  const t = [], n = (r) => {
    l0(r) && t.push(r);
    for (const o of r.children ?? [])
      n(o);
  };
  return n(e), t.length > 0 ? t : (e.children ?? []).filter((r) => a0(r) != null);
}
function qr(e) {
  if (!(e == null || !Number.isFinite(e)))
    return Math.round(e);
}
function uC(e, t, n, r) {
  const o = s0(e.name ?? ""), i = o.zoneType ?? a0(e) ?? "Text";
  let s = o.zoneKey || aC(e.name ?? "", `zone_${t + 1}`);
  r.has(s) && (s = `${s}_${t + 1}`), r.add(s);
  const a = e.absoluteBoundingBox, l = (a == null ? void 0 : a.x) != null ? qr(a.x - n.x) : void 0, u = (a == null ? void 0 : a.y) != null ? qr(a.y - n.y) : void 0, c = {
    id: `temp-figma-${Date.now()}-${t}`,
    zoneKey: s,
    zoneLabel: o.zoneLabel || (e.name ?? "").trim() || s,
    zoneType: i,
    isLocked: i === "Logo",
    sortOrder: t,
    positionX: l,
    positionY: u,
    zoneWidth: qr(a == null ? void 0 : a.width),
    zoneHeight: qr(a == null ? void 0 : a.height)
  };
  if (i === "Heading" && (c.headingLevel = Mn), i === "Text" && typeof e.characters == "string" && e.characters.trim()) {
    const f = e.characters.trim().length;
    f > 0 && (c.maxCharacterCount = Math.max(40, Math.ceil(f * 1.25)));
  }
  return c;
}
function cC(e) {
  var u, c, f, p;
  const t = [], n = (e.name ?? "").trim() || "Figma frame", r = qr((u = e.absoluteBoundingBox) == null ? void 0 : u.width), o = qr((c = e.absoluteBoundingBox) == null ? void 0 : c.height), i = {
    x: ((f = e.absoluteBoundingBox) == null ? void 0 : f.x) ?? 0,
    y: ((p = e.absoluteBoundingBox) == null ? void 0 : p.y) ?? 0
  }, s = lC(e);
  if (s.length === 0)
    return t.push(
      'No zone layers found. Name layers like "zone:headline | type:Heading" or place typed content as direct children of the frame.'
    ), { frameName: n, canvasWidth: r, canvasHeight: o, zones: [], warnings: t };
  s.some(l0) || t.push(
    "No explicit zone: / type: names found — inferred zone types from layer names and Figma node types. Rename layers for stable imports."
  );
  const a = /* @__PURE__ */ new Set(), l = s.map((v, S) => uC(v, S, i, a));
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
function dC(e, t) {
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
function th(e, t) {
  return `${e.replace(/\s+/g, " ").trim() || "Figma template"} (${t})`;
}
async function fC(e, t, n) {
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
function pC({
  template: e,
  figmaImportApiUrl: t = "/api/figma/import",
  figmaImportApiToken: n,
  onApplyToCurrent: r,
  onCreatedTemplate: o
}) {
  const [i, s] = k.useState(""), [a, l] = k.useState(null), [u, c] = k.useState(!1), [f, p] = k.useState(!1), [v, S] = k.useState(null), [T, D] = k.useState(null), [y, m] = k.useState(!1), [h, C] = k.useState(""), E = async () => {
    c(!0), S(null), D(null), l(null);
    try {
      const x = iC(i);
      if (!x)
        throw new Error(
          "Paste a full Figma URL that includes node-id (right-click frame → Copy link)."
        );
      const F = await fC(t, n, i), b = dC(F, x.nodeId);
      if (!b)
        throw new Error("Could not find that frame/node in the Figma response.");
      const j = cC(b);
      l(j), C(th(j.frameName, e.channelType)), j.zones.length === 0 ? S(j.warnings[0] || "No zones were mapped from this frame.") : D(`Mapped ${j.zones.length} zone(s) from “${j.frameName}”.`);
    } catch (x) {
      S(x instanceof Error ? x.message : "Figma preview failed.");
    } finally {
      c(!1);
    }
  }, M = () => {
    !a || a.zones.length === 0 || (r({
      zones: a.zones,
      canvasWidth: a.canvasWidth,
      canvasHeight: a.canvasHeight,
      frameName: a.frameName
    }), D(
      `Applied ${a.zones.length} zone(s) to “${e.templateName}”. Save/autosave will persist them.`
    ));
  }, A = async () => {
    if (!(!a || a.zones.length === 0)) {
      p(!0), S(null), D(null);
      try {
        const x = e.channelType, F = await ie.createTemplate({
          templateName: h.trim() || th(a.frameName, x),
          channelType: x,
          formatPreset: e.formatPreset,
          canvasWidth: a.canvasWidth,
          canvasHeight: a.canvasHeight,
          brandKitId: e.brandKitId,
          zones: a.zones,
          allowedAssetIds: e.allowedAssetIds
        }, e.id);
        D(`Created template “${F.templateName}” (${F.id}).`), o == null || o(F);
      } catch (x) {
        S(
          x instanceof Error ? x.message : "Could not create template from Figma."
        );
      } finally {
        p(!1);
      }
    }
  };
  return /* @__PURE__ */ N("div", { className: "figma-import-panel", children: [
    /* @__PURE__ */ d("h4", { children: "Import from Figma" }),
    /* @__PURE__ */ N("p", { className: "figma-import-hint", children: [
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
    /* @__PURE__ */ N("label", { children: [
      "Figma frame URL",
      /* @__PURE__ */ d(
        "input",
        {
          type: "text",
          value: i,
          onChange: (x) => s(x.target.value),
          placeholder: "https://www.figma.com/design/FILEKEY/Name?node-id=1-2"
        }
      )
    ] }),
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "figma-import-button",
        onClick: () => void E(),
        disabled: u || !i.trim(),
        children: "Preview zones"
      }
    ),
    /* @__PURE__ */ d(zo, { active: u || f, className: "figma-import-saving" }),
    a && a.zones.length > 0 && /* @__PURE__ */ N("div", { className: "figma-import-preview", children: [
      /* @__PURE__ */ N("p", { className: "figma-import-preview-meta", children: [
        "Frame ",
        /* @__PURE__ */ d("strong", { children: a.frameName }),
        a.canvasWidth != null && a.canvasHeight != null ? ` · ${a.canvasWidth}×${a.canvasHeight}` : null
      ] }),
      /* @__PURE__ */ d("ul", { className: "figma-import-zone-list", children: a.zones.map((x) => /* @__PURE__ */ N("li", { children: [
        /* @__PURE__ */ d("code", { children: x.zoneKey }),
        " — ",
        x.zoneType,
        x.zoneWidth != null && x.zoneHeight != null ? ` (${x.zoneWidth}×${x.zoneHeight})` : null
      ] }, x.id)) }),
      a.warnings.map((x) => /* @__PURE__ */ d("p", { className: "figma-import-warning", children: x }, x)),
      /* @__PURE__ */ N("label", { className: "figma-import-checkbox", children: [
        /* @__PURE__ */ d(
          "input",
          {
            type: "checkbox",
            checked: y,
            onChange: (x) => m(x.target.checked)
          }
        ),
        "Create as a new template (instead of replacing zones on this one)"
      ] }),
      y ? /* @__PURE__ */ N(at, { children: [
        /* @__PURE__ */ N("label", { children: [
          "New template name",
          /* @__PURE__ */ d(
            "input",
            {
              type: "text",
              value: h,
              onChange: (x) => C(x.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: "figma-import-button figma-import-button-primary",
            onClick: () => void A(),
            disabled: f || !h.trim(),
            children: "Create template from Figma"
          }
        )
      ] }) : /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "figma-import-button figma-import-button-primary",
          onClick: M,
          children: "Replace zones on this template"
        }
      )
    ] }),
    T && /* @__PURE__ */ d("p", { className: "figma-import-message", children: T }),
    v && /* @__PURE__ */ d("p", { className: "marketing-builder-error figma-import-error", children: v })
  ] });
}
const mC = ["Social", "Email", "Newsletter"];
function hC({
  template: e,
  onChange: t,
  compact: n = !1
}) {
  const r = e.channelType === "Social", o = vl(e.channelType), i = Ik(e), s = (l) => {
    l !== e.channelType && t({
      channelType: l,
      ...sv(l)
    });
  }, a = (l) => {
    const u = Ok(e.channelType, l);
    u && t(u);
  };
  return /* @__PURE__ */ N("div", { className: `template-properties-form${n ? " template-properties-form-compact" : ""}`, children: [
    /* @__PURE__ */ d("h4", { children: n ? "Template" : "Template properties" }),
    /* @__PURE__ */ N("label", { children: [
      "Template name",
      /* @__PURE__ */ d(
        "input",
        {
          value: e.templateName,
          onChange: (l) => t({ templateName: l.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ N("label", { children: [
      "Channel type",
      /* @__PURE__ */ d(
        "select",
        {
          value: e.channelType,
          onChange: (l) => s(l.target.value),
          children: mC.map((l) => /* @__PURE__ */ d("option", { value: l, children: l }, l))
        }
      )
    ] }),
    /* @__PURE__ */ N("div", { className: "template-dimensions-section", children: [
      /* @__PURE__ */ N("div", { className: "template-dimensions-heading", children: [
        /* @__PURE__ */ d("h5", { children: "Dimensions" }),
        /* @__PURE__ */ d("span", { className: "template-dimensions-summary", children: iv(e) })
      ] }),
      /* @__PURE__ */ N("label", { children: [
        "Size preset",
        /* @__PURE__ */ N("select", { value: i, onChange: (l) => a(l.target.value), children: [
          o.map((l) => /* @__PURE__ */ d("option", { value: l.id, children: l.label }, l.id)),
          /* @__PURE__ */ d("option", { value: "custom", children: "Custom" })
        ] })
      ] }),
      /* @__PURE__ */ N("div", { className: "template-dimension-fields", children: [
        /* @__PURE__ */ N("label", { children: [
          r ? "Width (px)" : "Email width (px)",
          /* @__PURE__ */ d(
            "input",
            {
              type: "number",
              min: 1,
              value: e.canvasWidth ?? "",
              onChange: (l) => t({
                canvasWidth: l.target.value ? Number(l.target.value) : void 0,
                formatPreset: nh(
                  e.channelType,
                  l.target.value ? Number(l.target.value) : void 0,
                  e.canvasHeight
                )
              })
            }
          )
        ] }),
        r ? /* @__PURE__ */ N("label", { children: [
          "Height (px)",
          /* @__PURE__ */ d(
            "input",
            {
              type: "number",
              min: 1,
              value: e.canvasHeight ?? "",
              onChange: (l) => t({
                canvasHeight: l.target.value ? Number(l.target.value) : void 0,
                formatPreset: nh(
                  e.channelType,
                  e.canvasWidth,
                  l.target.value ? Number(l.target.value) : void 0
                )
              })
            }
          )
        ] }) : /* @__PURE__ */ N("label", { children: [
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
    e.brandKitId && /* @__PURE__ */ N("p", { className: "template-properties-meta", children: [
      "Brand kit: ",
      e.brandKitId
    ] })
  ] });
}
function nh(e, t, n) {
  return e === "Social" && t != null && n != null ? `${t}x${n}` : e === "Email" && t != null ? `${t}px email` : e === "Newsletter" && t != null ? `${t}px newsletter` : "";
}
function gC({ template: e, onAssetsChange: t }) {
  const n = df(), { resultIds: r, fullText: o, hasSearchIntegration: i } = Kv(), [s, a] = k.useState([]), [l, u] = k.useState([]), [c, f] = k.useState(!1), [p, v] = k.useState(!1), [S, T] = k.useState(null), [D, y] = k.useState(null), m = k.useMemo(
    () => new Set(s.map((A) => A.id).filter(Boolean)),
    [s]
  ), h = k.useCallback(async () => {
    if (!e.id || e.id.startsWith("temp-")) {
      a([]);
      return;
    }
    f(!0), y(null);
    try {
      const A = await ie.getTemplateAllowedAssets(e.id);
      a(A), t(A.map((x) => x.id).filter(Boolean));
    } catch (A) {
      a([]), y(A instanceof Error ? A.message : "Could not load template assets.");
    } finally {
      f(!1);
    }
  }, [t, e.id]);
  k.useEffect(() => {
    h();
  }, [h]), k.useEffect(() => {
    if (r.length === 0) {
      u([]);
      return;
    }
    let A = !1;
    return v(!0), ie.getAssetsByIds(r).then((x) => {
      A || u(x);
    }).catch(() => {
      A || u([]);
    }).finally(() => {
      A || v(!1);
    }), () => {
      A = !0;
    };
  }, [r]);
  const C = async (A) => {
    var x, F;
    if (!e.id || e.id.startsWith("temp-") || !A.id) {
      y("Save the template first before linking assets.");
      return;
    }
    T(A.id), y(null);
    try {
      if (!await ie.addAllowedAssetToTemplate(e.id, A.id))
        throw new Error(`Could not link ${A.name} to this template.`);
      await h(), (x = n.notifier) == null || x.notifySuccess(`Added "${A.name}" to template assets.`);
    } catch (b) {
      const j = b instanceof Error ? b.message : "Failed to link asset to template.";
      y(j), (F = n.notifier) == null || F.notifyError(j);
    } finally {
      T(null);
    }
  }, E = async (A) => {
    var x, F;
    if (!(!e.id || !A.id)) {
      T(A.id), y(null);
      try {
        await ie.removeAllowedAssetFromTemplate(e.id, A.id), await h(), (x = n.notifier) == null || x.notifySuccess(`Removed "${A.name}" from template assets.`);
      } catch (b) {
        const j = b instanceof Error ? b.message : "Failed to remove asset from template.";
        y(j), (F = n.notifier) == null || F.notifyError(j);
      } finally {
        T(null);
      }
    }
  }, M = !e.id || e.id.startsWith("temp-");
  return /* @__PURE__ */ N("div", { className: "template-zone-asset-collection template-allowed-assets", children: [
    /* @__PURE__ */ d("h4", { className: "template-zone-asset-collection-title", children: "Template image library" }),
    /* @__PURE__ */ N("p", { className: "template-zone-asset-collection-intro", children: [
      "Link ",
      /* @__PURE__ */ d("strong", { children: "M.Asset" }),
      " entities on the template via ",
      /* @__PURE__ */ d("code", { children: "templateToAllowedAsset" }),
      ". Every image zone on marketing assets built from this template can pick from these assets. Use the Content Hub search on this page to find images, then click ",
      /* @__PURE__ */ d("strong", { children: "Add" }),
      "."
    ] }),
    M && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-hint", children: "Save the template first so it has a persisted entity ID, then add assets from search." }),
    /* @__PURE__ */ N("div", { className: "template-zone-asset-collection-section", children: [
      /* @__PURE__ */ N("div", { className: "template-zone-asset-collection-section-header", children: [
        /* @__PURE__ */ N("h5", { children: [
          "On template (",
          s.length,
          ")"
        ] }),
        c && /* @__PURE__ */ d("span", { className: "template-zone-asset-collection-status", children: "Loading..." })
      ] }),
      /* @__PURE__ */ N("div", { className: "template-zone-asset-collection-grid", children: [
        s.map((A) => /* @__PURE__ */ N("div", { className: "template-zone-asset-card", children: [
          /* @__PURE__ */ d("img", { src: A.thumbnailUrl, alt: A.name }),
          /* @__PURE__ */ d("span", { children: A.name }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "template-zone-asset-remove",
              disabled: S === A.id || M,
              onClick: () => void E(A),
              children: "Remove"
            }
          )
        ] }, A.id || A.thumbnailUrl)),
        !c && s.length === 0 && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-empty", children: "No assets linked to this template yet." })
      ] })
    ] }),
    /* @__PURE__ */ N("div", { className: "template-zone-asset-collection-section", children: [
      /* @__PURE__ */ N("div", { className: "template-zone-asset-collection-section-header", children: [
        /* @__PURE__ */ d("h5", { children: "From Content Hub search" }),
        p && /* @__PURE__ */ d("span", { className: "template-zone-asset-collection-status", children: "Loading..." })
      ] }),
      !i && /* @__PURE__ */ N("p", { className: "template-zone-asset-collection-hint", children: [
        "Add a Search page component to this page and set ",
        /* @__PURE__ */ d("code", { children: "searchIdentifier" }),
        " in the external component Configuration."
      ] }),
      i && /* @__PURE__ */ N("p", { className: "template-zone-asset-collection-hint", children: [
        "Use the search component on this page",
        o ? ` (current query: "${o}")` : "",
        ", then click",
        " ",
        /* @__PURE__ */ d("strong", { children: "Add" }),
        " to link an asset to the template."
      ] }),
      /* @__PURE__ */ N("div", { className: "template-zone-asset-collection-grid", children: [
        l.map((A) => {
          const x = A.id ? m.has(A.id) : !1;
          return /* @__PURE__ */ N("div", { className: "template-zone-asset-card", children: [
            /* @__PURE__ */ d("img", { src: A.thumbnailUrl, alt: A.name }),
            /* @__PURE__ */ d("span", { children: A.name }),
            /* @__PURE__ */ d(
              "button",
              {
                type: "button",
                className: "template-zone-asset-add",
                disabled: x || S === A.id || !A.id || M,
                onClick: () => void C(A),
                children: x ? "Linked" : "Add"
              }
            )
          ] }, A.id || A.thumbnailUrl);
        }),
        i && !p && l.length === 0 && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-empty", children: "Run a search on this page to see assets you can link." })
      ] })
    ] }),
    D && /* @__PURE__ */ d("p", { className: "template-zone-asset-collection-error", children: D })
  ] });
}
function yC({ zoneLabel: e, onDelete: t, className: n = "" }) {
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
const vC = ["Text", "Heading", "Image", "CTA Button", "Logo", "Background Color", "Divider", "HTML"], wC = 800;
function TC({
  template: e,
  onSaved: t,
  pendingFigmaImport: n = null,
  onPendingFigmaImportApplied: r
}) {
  var R;
  const [o, i] = k.useState(e), [s, a] = k.useState(((R = o.zones[0]) == null ? void 0 : R.id) ?? null), [l, u] = k.useState("saved"), [c, f] = k.useState(null), p = k.useRef(e.zones), v = k.useRef(o), S = k.useRef(null), T = k.useRef(0), D = k.useRef(!0), y = k.useRef(!1);
  v.current = o;
  const m = k.useCallback(
    async (w) => {
      const L = ++T.current;
      u("saving"), f(null);
      try {
        const _ = await ie.saveTemplate(w, p.current);
        if (L !== T.current)
          return;
        p.current = _.zones, D.current = !0, i(_), t == null || t(_), u("saved");
      } catch (_) {
        if (L !== T.current)
          return;
        f(_ instanceof Error ? _.message : "Failed to save template zones."), u("error");
      }
    },
    [t]
  );
  k.useEffect(() => {
    var w;
    !n || n.zones.length === 0 || (i((L) => ({
      ...L,
      canvasWidth: n.canvasWidth ?? L.canvasWidth,
      canvasHeight: n.canvasHeight ?? L.canvasHeight,
      zones: n.zones.map((_, J) => ({
        ..._,
        sortOrder: J
      }))
    })), a(((w = n.zones[0]) == null ? void 0 : w.id) ?? null), u("pending"), r == null || r());
  }, [n, r]), k.useEffect(() => {
    D.current = !0, p.current = e.zones, i(e), a((w) => {
      var L;
      return w && e.zones.some((_) => _.id === w) ? w : ((L = e.zones[0]) == null ? void 0 : L.id) ?? null;
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
  ]), k.useEffect(() => {
    if (!y.current) {
      y.current = !0;
      return;
    }
    if (D.current) {
      D.current = !1;
      return;
    }
    return u((w) => w === "saving" ? w : "pending"), S.current != null && window.clearTimeout(S.current), S.current = window.setTimeout(() => {
      m(v.current);
    }, wC), () => {
      S.current != null && window.clearTimeout(S.current);
    };
  }, [o, m]);
  const h = o.zones.find((w) => w.id === s), [C, E] = k.useState(null), [M, A] = k.useState(null), x = [...o.zones].sort((w, L) => w.sortOrder - L.sortOrder), F = (w, L) => {
    w !== L && i((_) => {
      const J = [..._.zones].sort((dt, xo) => dt.sortOrder - xo.sortOrder), X = J.findIndex((dt) => dt.id === w), Ge = J.findIndex((dt) => dt.id === L);
      if (X < 0 || Ge < 0)
        return _;
      const Xe = [...J], [Oe] = Xe.splice(X, 1);
      return Xe.splice(Ge, 0, Oe), {
        ..._,
        zones: Xe.map((dt, xo) => ({ ...dt, sortOrder: xo }))
      };
    });
  }, b = (w) => {
    i((L) => ({ ...L, ...w }));
  }, j = (w, L) => {
    i((_) => ({
      ..._,
      zones: _.zones.map((J) => {
        if (J.id !== w)
          return J;
        const X = { ...J, ...L };
        for (const Ge of Object.keys(L))
          L[Ge] === void 0 && delete X[Ge];
        return X;
      })
    }));
  }, U = (w) => {
    if (w.trim() === "")
      return;
    const L = Number(w);
    return Number.isNaN(L) ? void 0 : L;
  }, Y = () => {
    const w = new Set(o.zones.map((X) => X.zoneKey));
    let L = o.zones.length + 1, _ = `newZone${L}`;
    for (; w.has(_); )
      L += 1, _ = `newZone${L}`;
    const J = {
      id: `temp-${Date.now()}`,
      zoneKey: _,
      zoneLabel: "New zone",
      zoneType: "Text",
      isLocked: !1,
      sortOrder: o.zones.length
    };
    i((X) => ({ ...X, zones: [...X.zones, J] })), a(J.id);
  }, xe = (w) => {
    var Ge, Xe;
    const L = [...o.zones].sort((Oe, dt) => Oe.sortOrder - dt.sortOrder), _ = L.findIndex((Oe) => Oe.id === w), J = L.filter((Oe) => Oe.id !== w).map((Oe, dt) => ({ ...Oe, sortOrder: dt })), X = ((Ge = J[_]) == null ? void 0 : Ge.id) ?? ((Xe = J[_ - 1]) == null ? void 0 : Xe.id) ?? null;
    i((Oe) => ({ ...Oe, zones: J })), a(X);
  }, Qe = () => {
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
  }, ke = Pc(l === "pending", "pending"), V = Pc(l === "saving", "active"), O = l === "pending" ? ke : l === "saving" ? V : l === "error" ? c ?? "Could not save template." : "All changes saved automatically.";
  return /* @__PURE__ */ d(
    Ca,
    {
      structureTitle: "Template structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ N("div", { className: "template-admin-structure", children: [
        /* @__PURE__ */ d(hC, { template: o, onChange: b, compact: !0 }),
        /* @__PURE__ */ d(
          gC,
          {
            template: o,
            onAssetsChange: (w) => i((L) => {
              const _ = L.allowedAssetIds ?? [];
              return _.length === w.length && _.every((J, X) => J === w[X]) ? L : { ...L, allowedAssetIds: w };
            })
          }
        ),
        /* @__PURE__ */ N("div", { className: "template-admin-structure-grid", children: [
          /* @__PURE__ */ N("div", { className: "template-admin-zone-list", children: [
            /* @__PURE__ */ d("h4", { children: "Zones" }),
            /* @__PURE__ */ d("p", { className: "zone-list-hint", children: "Drag zones to reorder" }),
            x.map((w) => /* @__PURE__ */ N(
              "div",
              {
                tabIndex: 0,
                draggable: !0,
                className: `zone-list-item${w.id === s ? " zone-list-item-active" : ""}${w.id === C ? " zone-list-item-dragging" : ""}${w.id === M ? " zone-list-item-drag-over" : ""}`,
                onClick: () => a(w.id),
                onKeyDown: (L) => {
                  (L.key === "Enter" || L.key === " ") && (L.preventDefault(), a(w.id));
                },
                onDragStart: (L) => {
                  if (L.target.closest(".zone-list-delete")) {
                    L.preventDefault();
                    return;
                  }
                  L.dataTransfer.effectAllowed = "move", L.dataTransfer.setData("text/plain", w.id), E(w.id);
                },
                onDragOver: (L) => {
                  L.preventDefault(), L.dataTransfer.dropEffect = "move", M !== w.id && A(w.id);
                },
                onDragLeave: () => {
                  A((L) => L === w.id ? null : L);
                },
                onDrop: (L) => {
                  L.preventDefault();
                  const _ = L.dataTransfer.getData("text/plain");
                  _ && F(_, w.id), E(null), A(null);
                },
                onDragEnd: () => {
                  E(null), A(null);
                },
                children: [
                  /* @__PURE__ */ d("span", { className: "zone-list-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }),
                  /* @__PURE__ */ N("span", { className: "zone-list-item-content", children: [
                    /* @__PURE__ */ d("span", { children: w.zoneLabel || w.zoneKey }),
                    /* @__PURE__ */ d("span", { className: "zone-list-item-type", children: w.zoneType === "Heading" ? `Heading · ${w.headingLevel ?? Mn}` : w.zoneType }),
                    w.isLocked && /* @__PURE__ */ d("span", { className: "zone-list-item-lock", children: "Locked" })
                  ] }),
                  /* @__PURE__ */ d(
                    yC,
                    {
                      zoneLabel: w.zoneLabel || w.zoneKey,
                      onDelete: () => xe(w.id)
                    }
                  )
                ]
              },
              w.id
            )),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-list-add", onClick: Y, children: "+ Add zone" }),
            o.zones.length === 0 && /* @__PURE__ */ d("button", { type: "button", className: "zone-list-add zone-list-starter", onClick: Qe, children: "Start with email template zones" })
          ] }),
          /* @__PURE__ */ d("div", { className: "template-admin-properties", children: h ? /* @__PURE__ */ N(at, { children: [
            /* @__PURE__ */ d("h4", { children: "Zone properties" }),
            /* @__PURE__ */ N("div", { children: [
              /* @__PURE__ */ N("label", { children: [
                "Label",
                /* @__PURE__ */ d(
                  "input",
                  {
                    value: h.zoneLabel,
                    onChange: (w) => j(h.id, { zoneLabel: w.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ N("label", { children: [
                "Zone key",
                /* @__PURE__ */ d(
                  "input",
                  {
                    value: h.zoneKey,
                    onChange: (w) => j(h.id, { zoneKey: w.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ N("label", { children: [
                "Type",
                /* @__PURE__ */ d(
                  "select",
                  {
                    value: h.zoneType,
                    onChange: (w) => {
                      j(
                        h.id,
                        IE(h, w.target.value)
                      );
                    },
                    children: vC.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                  }
                )
              ] }),
              /* @__PURE__ */ N("label", { className: "checkbox-label", children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "checkbox",
                    checked: h.isLocked,
                    onChange: (w) => j(h.id, { isLocked: w.target.checked })
                  }
                ),
                "Locked (brand element, end user cannot edit)"
              ] }),
              h.zoneType === "Heading" && /* @__PURE__ */ N(at, { children: [
                /* @__PURE__ */ N("label", { children: [
                  "Heading level",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: h.headingLevel ?? Mn,
                      onChange: (w) => j(h.id, {
                        headingLevel: w.target.value
                      }),
                      children: dv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                    }
                  )
                ] }),
                /* @__PURE__ */ N("label", { children: [
                  "Max characters",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.maxCharacterCount ?? "",
                      onChange: (w) => j(h.id, { maxCharacterCount: U(w.target.value) })
                    }
                  )
                ] })
              ] }),
              h.zoneType === "Text" && /* @__PURE__ */ N("label", { children: [
                "Max characters",
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "number",
                    value: h.maxCharacterCount ?? "",
                    onChange: (w) => j(h.id, { maxCharacterCount: U(w.target.value) })
                  }
                )
              ] }),
              h.zoneType === "Image" && /* @__PURE__ */ N("label", { children: [
                "Aspect ratio lock",
                /* @__PURE__ */ d(
                  "input",
                  {
                    placeholder: "e.g. 1:1",
                    value: h.aspectRatioLock ?? "",
                    onChange: (w) => {
                      const L = w.target.value.trim();
                      j(h.id, { aspectRatioLock: L || void 0 });
                    }
                  }
                )
              ] }),
              h.zoneType === "HTML" && /* @__PURE__ */ N(at, { children: [
                /* @__PURE__ */ N("label", { children: [
                  "Default HTML content",
                  /* @__PURE__ */ d(
                    "textarea",
                    {
                      value: h.htmlDefaultContent ?? "",
                      onChange: (w) => j(h.id, { htmlDefaultContent: w.target.value })
                    }
                  )
                ] }),
                /* @__PURE__ */ N("label", { className: "checkbox-label", children: [
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "checkbox",
                      checked: h.htmlAllowUserOverride ?? !1,
                      onChange: (w) => j(h.id, { htmlAllowUserOverride: w.target.checked })
                    }
                  ),
                  "Allow end user to edit this HTML zone"
                ] })
              ] }),
              o.channelType === "Social" && /* @__PURE__ */ N("div", { className: "position-fields", children: [
                /* @__PURE__ */ N("label", { children: [
                  "X",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.positionX ?? "",
                      onChange: (w) => j(h.id, { positionX: U(w.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ N("label", { children: [
                  "Y",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.positionY ?? "",
                      onChange: (w) => j(h.id, { positionY: U(w.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ N("label", { children: [
                  "Width",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.zoneWidth ?? "",
                      onChange: (w) => j(h.id, { zoneWidth: U(w.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ N("label", { children: [
                  "Height",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      value: h.zoneHeight ?? "",
                      onChange: (w) => j(h.id, { zoneHeight: U(w.target.value) })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "zone-layout-fields asset-zone-layout-fields", children: /* @__PURE__ */ N("div", { className: "asset-zone-layout-grid", children: [
                /* @__PURE__ */ N("label", { children: [
                  "Alignment",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: h.contentAlignment ?? Cr,
                      onChange: (w) => j(h.id, {
                        contentAlignment: w.target.value
                      }),
                      children: fv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                    }
                  )
                ] }),
                /* @__PURE__ */ N("label", { children: [
                  "Offset (px)",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      value: h.offsetPx ?? 0,
                      onChange: (w) => j(h.id, { offsetPx: Math.max(0, Number(w.target.value) || 0) })
                    }
                  )
                ] }),
                /* @__PURE__ */ N("label", { children: [
                  "Direction",
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: h.offsetDirection ?? wl,
                      onChange: (w) => j(h.id, {
                        offsetDirection: w.target.value
                      }),
                      children: pv.map((w) => /* @__PURE__ */ d("option", { value: w, children: w }, w))
                    }
                  )
                ] }),
                /* @__PURE__ */ N("label", { children: [
                  "Sort order",
                  /* @__PURE__ */ d(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      value: h.sortOrder ?? 0,
                      onChange: (w) => j(h.id, { sortOrder: Math.max(0, Number(w.target.value) || 0) })
                    }
                  )
                ] })
              ] }) })
            ] }, `${h.id}-${h.zoneType}`),
            o.channelType !== "Social" && /* @__PURE__ */ d("p", { className: "zone-sort-hint", children: "You can also drag zones in the list to reorder." }),
            /* @__PURE__ */ d("button", { type: "button", className: "zone-remove", onClick: () => xe(h.id), children: "Remove zone" })
          ] }) : /* @__PURE__ */ d("p", { className: "no-zone-selected", children: "Select a zone to edit its properties, or add a new one." }) })
        ] }),
        /* @__PURE__ */ d("div", { className: "template-admin-structure-actions", children: /* @__PURE__ */ d(
          "p",
          {
            className: `template-admin-autosave-status${l === "error" ? " template-admin-autosave-status-error" : l === "saved" ? " template-admin-autosave-status-saved" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: O
          }
        ) })
      ] }),
      preview: /* @__PURE__ */ d(ff, { template: o, layoutMode: o.channelType === "Social" ? "canvas" : "stacked" })
    }
  );
}
function AC({ template: e, onDuplicated: t }) {
  const n = rN(e.channelType), [r, o] = k.useState(n[0] ?? "Social"), [i, s] = k.useState(`${e.templateName} (${n[0] ?? "Social"})`), [a, l] = k.useState(!1), [u, c] = k.useState(null), [f, p] = k.useState(null);
  if (n.length === 0)
    return null;
  const v = (T) => {
    o(T), s(`${e.templateName} (${T})`);
  }, S = async () => {
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
  return /* @__PURE__ */ N("div", { className: "template-duplicate-panel", children: [
    /* @__PURE__ */ d("h4", { children: "Duplicate template" }),
    /* @__PURE__ */ d("p", { className: "template-duplicate-hint", children: "Copy this template's zones into a new format. The new template is linked to the same brand kit and appears in the Asset builder template list." }),
    /* @__PURE__ */ N("label", { children: [
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
    /* @__PURE__ */ N("label", { children: [
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
    /* @__PURE__ */ d(zo, { active: a, className: "template-duplicate-saving" }),
    u && /* @__PURE__ */ d("p", { className: "template-duplicate-message", children: u }),
    f && /* @__PURE__ */ d("p", { className: "marketing-builder-error template-duplicate-error", children: f })
  ] });
}
function SC({
  template: e,
  onTemplateSaved: t,
  onTemplatesChanged: n,
  figmaImportApiUrl: r,
  figmaImportApiToken: o
}) {
  const i = e.zones.length > 0, [s, a] = k.useState(null);
  return /* @__PURE__ */ N("div", { className: "template-setup-panel", children: [
    !i && /* @__PURE__ */ N("div", { className: "template-setup-banner", children: [
      /* @__PURE__ */ d("h3", { children: "Edit template" }),
      /* @__PURE__ */ N("p", { children: [
        "Template ",
        /* @__PURE__ */ d("strong", { children: e.templateName }),
        " (",
        e.id,
        ") has no zones yet. Set template properties and add zones on the left, then save. The preview updates on the right."
      ] }),
      /* @__PURE__ */ d("p", { className: "template-setup-hint", children: "Recommended email zones: Logo (locked), Heading (H1/H2), Hero image, Body copy, CTA button. Or import a Figma frame below." })
    ] }),
    i && /* @__PURE__ */ d("div", { className: "template-setup-banner template-setup-banner-info", children: /* @__PURE__ */ N("p", { children: [
      "Editing ",
      /* @__PURE__ */ d("strong", { children: e.templateName }),
      ". Update template properties and zones on the left; preview on the right. Changes apply to all marketing assets using this template."
    ] }) }),
    /* @__PURE__ */ d(
      pC,
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
      AC,
      {
        template: e,
        onDuplicated: (l) => {
          t(l), n == null || n();
        }
      }
    ),
    /* @__PURE__ */ d(
      TC,
      {
        template: e,
        onSaved: t,
        pendingFigmaImport: s,
        onPendingFigmaImportApplied: () => a(null)
      }
    )
  ] });
}
function kC({
  client: e,
  entity: t,
  options: n,
  config: r,
  contentHubApi: o,
  searchIdentifier: i,
  selectionPoolIdentifier: s
}) {
  const [a, l] = k.useState(null), [u, c] = k.useState(null), [f, p] = k.useState(null), [v, S] = k.useState(!0), [T, D] = k.useState(null), [y, m] = k.useState("asset"), [h, C] = k.useState(0), [E, M] = k.useState(!1), [A, x] = k.useState(null), F = (w) => {
    m(w), !(w !== "asset" || !(u != null && u.id)) && ie.getTemplate(u.id).then((L) => c(L)).catch((L) => {
      Un(
        "template reload",
        L,
        `Could not refresh template ${u.id} when switching to the asset tab.`
      );
    });
  };
  k.useEffect(() => {
    dN(e ?? null);
  }, [e]), k.useEffect(() => {
    let w = !1;
    async function L() {
      const _ = await sM(
        e,
        n ?? (e == null ? void 0 : e.options),
        t,
        r
      );
      w || (l(_), _.allowTemplateZoneEditing && Z("allowTemplateZoneEditing", "Template zone editing enabled from Configuration"));
    }
    return L(), () => {
      w = !0;
    };
  }, [e, r, t, n]), k.useEffect(() => {
    a != null && a.contentHubProxyBase && fN(a.contentHubProxyBase);
  }, [a == null ? void 0 : a.contentHubProxyBase]), k.useEffect(() => {
    if (!a)
      return;
    let w = !1;
    async function L() {
      if (S(!0), D(null), PS(), !a.templateId) {
        const _ = BS(t, r);
        Un("templateId", _), D(_), S(!1);
        return;
      }
      if (!a.marketingAssetId) {
        const _ = "marketingAssetId could not be resolved from context.entity.systemProperties.id.";
        Un("marketingAssetId", _), D(_), S(!1);
        return;
      }
      Z("templateId", `Using template ${a.templateId}`), Z("marketingAssetId", `Using marketing asset ${a.marketingAssetId}`);
      try {
        const _ = await ie.getTemplate(a.templateId);
        if (w)
          return;
        c(_);
        const J = Em(a, _.channelType);
        if (J === "admin") {
          p(null), vm({
            builderMode: J,
            templateId: _.id,
            templateName: _.templateName,
            marketingAssetId: a.marketingAssetId,
            brandKitId: a.brandKitId ?? _.brandKitId,
            channelType: _.channelType,
            zoneCount: _.zones.length
          });
          return;
        }
        const X = await ie.getMarketingAsset(a.marketingAssetId);
        if (w)
          return;
        p(X);
        const Ge = a.brandKitId ?? _.brandKitId;
        vm({
          builderMode: J,
          templateId: _.id,
          templateName: _.templateName,
          marketingAssetId: X.id,
          brandKitId: Ge,
          channelType: _.channelType,
          zoneCount: _.zones.length,
          zoneValueCount: X.zoneValues.length
        });
      } catch (_) {
        if (w)
          return;
        Un("load", _, "Marketing builder could not load required entities."), D(_ instanceof Error ? _.message : "Failed to load marketing builder data.");
      } finally {
        w || S(!1);
      }
    }
    return L(), () => {
      w = !0;
    };
  }, [r, t, a]);
  const b = Em(a ?? {}, u == null ? void 0 : u.channelType), j = (a == null ? void 0 : a.brandKitId) ?? (u == null ? void 0 : u.brandKitId), U = (a == null ? void 0 : a.userHasOverridePermission) ?? !1, Y = i ?? (a == null ? void 0 : a.searchIdentifier), xe = s ?? (a == null ? void 0 : a.selectionPoolIdentifier), Qe = {
    searchIdentifier: Y,
    selectionPoolIdentifier: xe,
    search: o == null ? void 0 : o.search,
    selection: o == null ? void 0 : o.selection,
    notifier: o == null ? void 0 : o.notifier
  };
  k.useEffect(() => {
    u && u.zones.length === 0 && m("template");
  }, [u == null ? void 0 : u.id, u == null ? void 0 : u.zones.length]);
  const ke = () => {
    C((w) => w + 1);
  }, V = async (w) => {
    if (c(w), a && l({ ...a, templateId: w.id }), f) {
      const L = await ie.getMarketingAsset(f.id);
      p(L);
    }
    ke();
  }, O = async () => {
    if (u) {
      M(!0), x(null);
      try {
        const w = await JM(
          u,
          a == null ? void 0 : a.designerDocumentProperty
        );
        c(w), ke();
      } catch (w) {
        x(
          w instanceof Error ? w.message : "Could not create canvas template."
        );
      } finally {
        M(!1);
      }
    }
  }, R = qM(u);
  return !a || v ? /* @__PURE__ */ d("div", { className: "marketing-builder-status", children: "Loading marketing builder..." }) : T ? /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: T }) : u ? j ? /* @__PURE__ */ d(iM, { value: Qe, children: /* @__PURE__ */ d(oM, { brandKitId: j, children: /* @__PURE__ */ N("div", { className: "marketing-builder", children: [
    (b === "admin" || b !== "admin" && y === "template") && /* @__PURE__ */ N(at, { children: [
      b !== "admin" && /* @__PURE__ */ d(
        Ls,
        {
          activeTab: y,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: F
        }
      ),
      b === "admin" && /* @__PURE__ */ d(
        Ls,
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
        XM,
        {
          template: u,
          designerDocumentProperty: a.designerDocumentProperty,
          onTemplateSaved: (w) => {
            c(w), ke();
          }
        }
      ) : /* @__PURE__ */ N(at, { children: [
        /* @__PURE__ */ N("div", { className: "designer-create-banner", children: [
          /* @__PURE__ */ d("p", { children: "This template uses the zone builder. You can also create a canvas designer template (stored as designerDocumentJson on EPAM.BuilderTemplate)." }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: "chd-btn",
              disabled: E,
              onClick: () => void O(),
              children: E ? "Creating…" : "Create canvas template"
            }
          ),
          A ? /* @__PURE__ */ d("div", { className: "marketing-builder-error", children: A }) : null
        ] }),
        /* @__PURE__ */ d(
          SC,
          {
            template: u,
            figmaImportApiUrl: a.figmaImportApiUrl,
            figmaImportApiToken: a.figmaImportApiToken,
            onTemplateSaved: (w) => {
              c(w), ke();
            },
            onTemplatesChanged: ke
          }
        )
      ] })
    ] }),
    b === "social" && f && y === "asset" && /* @__PURE__ */ N(at, { children: [
      /* @__PURE__ */ d(
        Ls,
        {
          activeTab: y,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: F
        }
      ),
      /* @__PURE__ */ d(
        zu,
        {
          brandKitId: j,
          currentTemplateId: u.id,
          marketingAssetId: f.id,
          refreshKey: h,
          onTemplateChange: V
        }
      ),
      R ? /* @__PURE__ */ d(
        qm,
        {
          template: u,
          marketingAsset: f,
          designerDocumentProperty: a.designerDocumentProperty,
          designerInstanceProperty: a.designerInstanceProperty,
          onSaved: p
        }
      ) : /* @__PURE__ */ d(
        rC,
        {
          template: u,
          marketingAsset: f,
          userHasOverridePermission: U,
          html2canvasCdnUrl: a.html2canvasCdnUrl
        }
      )
    ] }),
    b === "social" && !f && /* @__PURE__ */ d("div", { className: "marketing-builder-status marketing-builder-error", children: "Marketing asset could not be loaded for the social builder." }),
    b === "email" && f && y === "asset" && /* @__PURE__ */ N(at, { children: [
      /* @__PURE__ */ d(
        Ls,
        {
          activeTab: y,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: F
        }
      ),
      R ? /* @__PURE__ */ N(at, { children: [
        /* @__PURE__ */ d(
          zu,
          {
            brandKitId: j,
            currentTemplateId: u.id,
            marketingAssetId: f.id,
            refreshKey: h,
            onTemplateChange: V
          }
        ),
        /* @__PURE__ */ d(
          qm,
          {
            template: u,
            marketingAsset: f,
            designerDocumentProperty: a.designerDocumentProperty,
            designerInstanceProperty: a.designerInstanceProperty,
            onSaved: p
          }
        )
      ] }) : u.zones.length > 0 ? /* @__PURE__ */ N(at, { children: [
        /* @__PURE__ */ d(
          zu,
          {
            brandKitId: j,
            currentTemplateId: u.id,
            marketingAssetId: f.id,
            refreshKey: h,
            onTemplateChange: V
          }
        ),
        /* @__PURE__ */ d(
          CM,
          {
            template: u,
            marketingAsset: f,
            userHasOverridePermission: U,
            renderEmailApiUrl: a.renderEmailApiUrl
          }
        )
      ] }) : /* @__PURE__ */ N("div", { className: "marketing-builder-status template-empty-message", children: [
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
function EC(e) {
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
function NC(e) {
  const t = hy(e);
  return ae("startup", "CHMarketingBuilder initialised"), {
    async render(n) {
      var i, s, a;
      const r = n.config ? typeof n.config == "string" ? "json-string" : Object.keys(n.config).join(", ") || "(empty object)" : "(none)";
      ae(
        "context",
        `entityId=${((s = (i = n.entity) == null ? void 0 : i.systemProperties) == null ? void 0 : s.id) ?? ((a = n.options) == null ? void 0 : a.entityId) ?? "n/a"}, config=${r}`
      );
      const o = EC(n.config);
      t.render(
        /* @__PURE__ */ d(DS, { theme: n.theme, children: /* @__PURE__ */ d(
          kC,
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
  NC as default
};
