(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@font-face{font-display:swap;font-family:Cytiva Aktiv;font-style:normal;font-weight:400;src:url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_rg.woff2) format("woff2"),url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_rg.woff) format("woff")}@font-face{font-display:swap;font-family:Cytiva Aktiv;font-style:normal;font-weight:500;src:url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_md.woff2) format("woff2"),url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_md.woff) format("woff")}@font-face{font-display:swap;font-family:Cytiva Aktiv;font-style:normal;font-weight:700;src:url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_bd.woff2) format("woff2"),url(https://www.cytivalifesciences.com/shared/fonts/cytiva-aktiv/cytiva-aktiv_int_bd.woff) format("woff")}.marketing-builder{--mb-primary: #00755f;--mb-primary-hover: #33a08c;--mb-primary-active: #00614f;--mb-primary-soft: #e4f7f4;--mb-primary-border: #99cfc5;--mb-accent: #ff5900;--mb-text: #18181b;--mb-muted: #717171;--mb-background: #f2f9f8;--mb-surface: #ffffff;--mb-border: #e8e8e8;--mb-font: "Cytiva Aktiv", Arial, Helvetica, sans-serif;font-family:var(--mb-font);color:var(--mb-text)}.marketing-builder-status{padding:16px;font-size:14px;color:#555}.marketing-builder-error{color:#b71c1c}.email-builder-editor{max-width:none;margin:0;border:none;padding:0;background:transparent}.builder-split{display:flex;gap:16px;align-items:stretch;min-height:72vh}.builder-split-panel{flex:1 1 50%;min-width:0;display:flex;flex-direction:column;border:1px solid #e0e0e0;border-radius:6px;background:#fff;overflow:hidden}.builder-split-heading{margin:0;padding:12px 16px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;border-bottom:1px solid #ececec;background:#fafafa}.builder-split-structure-body,.builder-split-preview-body{flex:1;min-height:0;display:flex;flex-direction:column}.builder-split-structure-body{overflow:auto;padding:16px}.builder-split-preview-body{padding:16px;background:var(--mb-background)}.template-admin-structure{display:flex;flex-direction:column;gap:16px;min-height:100%}.template-admin-structure-grid{display:grid;grid-template-columns:minmax(180px,220px) minmax(0,1fr);gap:16px;align-items:start}.template-admin-structure-actions{margin-top:auto;padding-top:12px;border-top:1px solid #ececec}.template-admin-autosave-status{margin:0;font-size:12px;color:#666}.template-admin-autosave-status-saved{color:#2e7d32}.template-admin-autosave-status:not(.template-admin-autosave-status-saved):not(.template-admin-autosave-status-error){color:var(--mb-primary, #00755f);font-style:italic}.template-admin-autosave-status-error{color:#c62828}.saving-status-message{margin:8px 0 0;font-size:12px;line-height:1.45;color:var(--mb-primary, #00755f);font-style:italic;animation:saving-status-fade .35s ease}@keyframes saving-status-fade{0%{opacity:0}to{opacity:1}}.template-properties-form{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-properties-form h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-properties-form label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-properties-form input,.template-properties-form select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-properties-meta{margin:0;font-size:11px;color:#888}.template-dimensions-section{margin-top:4px;padding-top:12px;border-top:1px solid #ececec}.template-dimensions-heading{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:10px}.template-dimensions-heading h5{margin:0;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#666}.template-dimensions-summary{font-size:11px;font-weight:600;color:var(--mb-primary, #00755f);white-space:nowrap}.template-dimension-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.template-dimensions-hint{margin:0 0 4px;font-size:11px;line-height:1.4;color:#888}.live-preview-canvas-wrap,.live-preview-email-wrap{display:flex;flex-direction:column;gap:8px;height:100%}.live-preview-dimensions-badge{margin:0;align-self:center;padding:4px 10px;border-radius:999px;background:var(--mb-primary-soft, #e4f7f4);color:var(--mb-primary, #00755f);font-size:11px;font-weight:600;letter-spacing:.02em}.template-admin-preview-canvas-fill{flex:1;min-height:100%;margin:0}.live-preview-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text,.live-preview-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.live-preview-canvas .zone-text{font-size:16px;line-height:1.5}.live-preview-canvas .zone-text-empty:empty:before,.live-preview-canvas .zone-heading.zone-text-empty:empty:before{color:var(--mb-muted, #717171);font-style:italic}.template-admin-preview-empty{margin:0;padding:24px;text-align:center;color:#888;font-size:13px}.email-builder-structure{display:flex;flex-direction:column;gap:12px}.email-builder-override-structure{display:flex;flex-direction:column;gap:12px;min-height:100%}.email-builder-override-structure .raw-html-editor{flex:1;min-height:420px}.email-builder-zone-row{margin-bottom:12px}.zone-stacked{min-height:48px}.zone-stacked.zone-image{min-height:180px}.asset-zone-structure-content .zone-logo{padding:8px 0}.asset-zone-structure-content .zone-logo-image{display:block;max-width:220px;max-height:72px;width:auto;height:auto;object-fit:contain}.zone-logo-preview-frame{display:inline-block;padding:8px 12px;border-radius:4px}.asset-zone-structure-content .zone-logo-preview-frame .zone-logo-image{margin-top:0}.logo-picker{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.logo-picker-compact{gap:8px}.logo-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.logo-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.logo-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.logo-picker-preview{display:flex;align-items:center;justify-content:center;min-height:56px;padding:8px;border-radius:4px;background:#f7f7f7}.logo-picker-image{display:block;max-width:100%;max-height:48px;width:auto;height:auto;object-fit:contain}.image-picker{display:flex;flex-direction:column;gap:10px}.image-picker-compact .image-picker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.image-picker-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.image-picker-option{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px;border:2px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff;cursor:pointer;text-align:center}.image-picker-option:hover{border-color:var(--mb-primary-border, #99cfc5);background:var(--mb-primary-soft, #e4f7f4)}.image-picker-option-selected{border-color:var(--mb-primary, #00755f);background:var(--mb-primary-soft, #e4f7f4);box-shadow:inset 0 0 0 1px var(--mb-primary, #00755f)}.image-picker-preview{display:flex;align-items:center;justify-content:center;min-height:72px;padding:8px;border-radius:4px;background:#f7f7f7;overflow:hidden}.image-picker-image{max-width:100%;max-height:72px;object-fit:contain}.image-picker-label{font-size:11px;color:#424242;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.image-picker-hint,.image-picker-loading,.image-picker-error{font-size:12px;color:#666}.image-picker-error{color:#c62828}.image-picker-hint,.image-picker-loading{margin:0 0 10px;line-height:1.45}.image-picker-selected-preview{margin-bottom:10px}.image-picker-selected-image{display:block;max-width:100%;max-height:160px;border-radius:6px;border:1px solid #ddd;object-fit:contain}.image-picker-footer{display:flex;justify-content:flex-start}.image-picker-url-toggle,.image-picker-url-apply{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:6px 10px;font-size:12px;cursor:pointer}.image-picker-url-form{display:flex;gap:8px}.image-picker-url-input{flex:1;padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection{display:flex;flex-direction:column;gap:12px;padding:12px;border:1px solid var(--mb-border, #e8e8e8);border-radius:8px;background:#fafafa}.template-zone-asset-collection-title{margin:0;font-size:14px}.template-zone-asset-collection-intro,.template-zone-asset-collection-hint,.template-zone-asset-collection-empty,.template-zone-asset-collection-error{margin:0;font-size:12px;color:#666;line-height:1.45}.template-zone-asset-collection-error{color:#c62828}.template-zone-asset-collection-field{display:flex;flex-direction:column;gap:6px;font-size:12px}.template-zone-asset-collection-field input{padding:8px 10px;border:1px solid var(--mb-border, #e0e0e0);border-radius:4px}.template-zone-asset-collection-section{display:flex;flex-direction:column;gap:8px}.template-zone-asset-collection-section-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.template-zone-asset-collection-section-header h5{margin:0;font-size:13px}.template-zone-asset-collection-status{font-size:11px;color:#888}.template-zone-asset-collection-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px}.template-zone-asset-card{display:flex;flex-direction:column;gap:6px;padding:8px;border:1px solid var(--mb-border, #e8e8e8);border-radius:6px;background:#fff}.template-zone-asset-card img{width:100%;height:72px;object-fit:cover;border-radius:4px;background:#f2f2f2}.template-zone-asset-card span{font-size:11px;color:#424242;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.template-zone-asset-add,.template-zone-asset-remove{border:1px solid var(--mb-border, #e0e0e0);background:#fff;border-radius:4px;padding:5px 8px;font-size:11px;cursor:pointer}.template-zone-asset-add:disabled{opacity:.55;cursor:not-allowed}.zone-image-placeholder{padding:16px;border:1px dashed #ccc;border-radius:6px;color:#888;font-size:12px;text-align:center}.logo-picker-label{font-size:11px;font-weight:600;color:var(--mb-text, #18181b)}.zone-stacked-logo{padding:8px 0;text-align:center}.zone-stacked.zone-text{font-size:18px;line-height:1.4;padding:8px 0}.zone-stacked.zone-heading{line-height:1.25;padding:8px 0}.zone-heading[data-heading-level=H1]{font-size:2rem}.zone-heading[data-heading-level=H2]{font-size:1.75rem}.zone-heading[data-heading-level=H3]{font-size:1.5rem}.zone-heading[data-heading-level=H4]{font-size:1.25rem}.zone-heading[data-heading-level=H5]{font-size:1.125rem}.zone-heading[data-heading-level=H6]{font-size:1rem}.zone-text-empty:empty:before{content:attr(data-placeholder);color:#999}.zone-stacked.zone-cta{padding:12px 0}.template-setup-panel{display:flex;flex-direction:column;gap:16px}.figma-import-panel{margin-bottom:16px;padding:14px 16px;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa}.figma-import-panel h4{margin:0 0 8px;font-size:14px;font-weight:600}.figma-import-hint{margin:0 0 12px;font-size:12px;color:#57606a;line-height:1.45}.figma-import-hint code{font-size:11px}.figma-import-panel label{display:flex;flex-direction:column;gap:4px;margin-bottom:10px;font-size:12px;font-weight:500}.figma-import-panel input[type=text],.figma-import-panel input:not([type]){padding:6px 8px;border:1px solid #d0d7de;border-radius:4px;font-size:13px}.figma-import-button{margin-right:8px;margin-bottom:8px;padding:6px 12px;border:1px solid #d0d7de;border-radius:4px;background:#fff;font-size:13px;cursor:pointer}.figma-import-button:disabled{opacity:.55;cursor:not-allowed}.figma-import-button-primary{background:#1565c0;border-color:#1565c0;color:#fff}.figma-import-preview{margin-top:10px;padding-top:10px;border-top:1px solid #d8dee4}.figma-import-preview-meta{margin:0 0 8px;font-size:12px}.figma-import-zone-list{margin:0 0 10px;padding-left:18px;font-size:12px;line-height:1.5}.figma-import-warning{margin:0 0 8px;font-size:12px;color:#9a3412}.figma-import-checkbox{flex-direction:row!important;align-items:center;gap:8px!important;font-weight:400!important}.figma-import-checkbox input{margin:0}.figma-import-message{margin:8px 0 0;font-size:12px;color:#1a7f37}.figma-import-error{margin-top:8px}.figma-import-saving{margin:8px 0}.template-duplicate-panel{border:1px solid #e8e8e8;border-radius:6px;padding:12px;background:#fcfcfc}.template-duplicate-panel h4{margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.template-duplicate-hint{margin:0 0 12px;font-size:12px;color:#666;line-height:1.45}.template-duplicate-panel label{display:block;margin-bottom:10px;font-size:12px;color:#555}.template-duplicate-panel input,.template-duplicate-panel select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.template-duplicate-button{margin-top:4px;background:var(--mb-primary, #00755f);color:#fff;border:none;padding:8px 14px;border-radius:4px;cursor:pointer;font-size:13px}.template-duplicate-button:disabled{opacity:.6;cursor:not-allowed}.template-duplicate-message{margin:10px 0 0;font-size:12px;color:#2e7d32;line-height:1.4}.template-duplicate-error{margin:8px 0 0;font-size:12px}.template-selector{margin-bottom:16px;padding:12px;border:1px solid #e8e8e8;border-radius:6px;background:#fcfcfc}.template-selector-label{display:block;margin:0;font-size:12px;color:#555}.template-selector-label select{display:block;width:100%;margin-top:6px;padding:8px 10px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px;background:#fff}.template-selector-hint,.template-selector-status{margin:8px 0 0;font-size:12px;color:#666;line-height:1.4}.template-selector-error{margin:8px 0 0;font-size:12px}.template-setup-banner{border:1px solid #ffb74d;background:#fff8e1;border-radius:6px;padding:16px}.template-setup-banner h3{margin:0 0 8px;font-size:16px}.template-setup-banner p{margin:0 0 8px;font-size:14px;line-height:1.5;color:#555}.template-setup-hint{font-size:13px;color:#777}.template-setup-banner-info{border-color:var(--mb-primary-border);background:var(--mb-primary-soft)}.marketing-builder-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;padding:0 4px}.marketing-builder-tab-bar{flex-wrap:wrap}.marketing-builder-tabs{display:inline-flex;border:1px solid #d0d0d0;border-radius:6px;overflow:hidden;background:#fff}.marketing-builder-tab{border:none;background:transparent;color:#555;padding:8px 16px;cursor:pointer;font-size:14px;font-weight:500}.marketing-builder-tab+.marketing-builder-tab{border-left:1px solid #d0d0d0}.marketing-builder-tab:hover{background:#f5f5f5}.marketing-builder-tab-active{background:var(--mb-primary);color:#fff}.marketing-builder-tab-active:hover{background:var(--mb-primary-active)}.template-zone-edit-toggle{background:#fff;color:var(--mb-primary);border:1px solid var(--mb-primary);padding:8px 16px;border-radius:4px;cursor:pointer;font-size:14px;font-weight:500}.template-zone-edit-toggle:hover{background:var(--mb-primary-soft)}.template-zone-edit-toggle-active{background:var(--mb-primary);color:#fff}.template-zone-edit-toggle-active:hover{background:var(--mb-primary-active)}.marketing-builder-toolbar-meta{font-size:13px;color:#666}.template-empty-message{border:1px dashed #d0d0d0;border-radius:6px;background:#fafafa;text-align:center}.template-setup-message code{font-size:12px;background:#f5f5f5;padding:2px 4px;border-radius:3px}.email-builder-error{margin-top:8px;padding:8px 12px}.email-builder-actions{display:flex;gap:12px;margin-top:8px;justify-content:flex-end;flex-wrap:wrap}.email-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.email-builder-save:disabled{opacity:.6;cursor:not-allowed}.email-builder-preview{max-width:600px;margin:24px auto 0}.email-builder-preview-label{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;margin-bottom:8px}.email-builder-preview-frame{width:100%;height:500px;border:1px solid #e0e0e0}.email-builder-preview-frame-fill{width:100%;height:100%;min-height:520px;border:1px solid #e0e0e0;background:#fff}.raw-html-editor{width:100%;min-height:400px;font-family:monospace;font-size:13px;padding:12px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.social-builder-canvas{border:1px solid var(--mb-border, #e8e8e8);background:var(--mb-surface, #ffffff);margin:0 auto;overflow:hidden;font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text,.social-builder-canvas .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.social-builder-canvas .zone-text{font-size:16px;line-height:1.5}.asset-zone-structure-content .zone-text,.asset-zone-structure-content .zone-heading{font-family:var(--mb-font);color:var(--mb-text, #18181b)}.asset-zone-structure-content .zone-text{font-size:16px;line-height:1.5}.social-builder-canvas-fill{width:100%;max-width:100%}.social-builder-structure{display:flex;flex-direction:column;gap:12px}.social-builder-error{margin-top:8px;padding:8px 12px}.asset-structure-panel{display:flex;flex-direction:column;gap:12px}.asset-structure-panel-hint{margin:0;font-size:12px;color:#777;line-height:1.5}.asset-zone-structure-warning{margin:0;padding:8px 10px;font-size:12px;line-height:1.4;color:#9a3412;background:#fff7ed;border:1px solid #fed7aa;border-radius:4px}.asset-zone-structure-key-hint{margin:0 0 8px;font-size:12px;color:#777}.asset-zone-structure-key-hint code{font-size:11px}.asset-zone-structure-list{display:flex;flex-direction:column;gap:8px}.asset-zone-structure-row{border:1px solid #e4e4e4;border-radius:6px;overflow:hidden;background:#fff}.asset-zone-structure-header{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;border:none;background:#fafafa;cursor:pointer;text-align:left}.asset-zone-structure-header:hover{background:#f3f3f3}.asset-zone-structure-title{font-weight:600;font-size:13px;color:#333}.asset-zone-structure-type{font-size:11px;color:#888}.asset-zone-structure-chevron{margin-left:auto;color:#888;font-size:12px}.asset-zone-structure-body{padding:12px;border-top:1px solid #ececec;display:flex;flex-direction:column;gap:12px}.asset-zone-structure-content-label{margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#888}.asset-zone-structure-content .asset-zone-layout-fields{margin-top:12px;padding-top:12px;border-top:1px solid #ececec}.asset-structure-panel .asset-zone-layout-grid,.template-admin-properties .asset-zone-layout-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.asset-zone-layout-fields{padding-top:4px;border-top:1px solid #ececec}.asset-zone-layout-fields label{display:block;margin-bottom:0;font-size:11px;color:#666}.asset-zone-layout-fields input,.asset-zone-layout-fields select{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:12px}.asset-zone-layout-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.asset-zone-layout-grid-position{margin-top:8px;grid-template-columns:repeat(4,minmax(0,1fr))}.asset-layout-json-preview{border:1px dashed #d0d0d0;border-radius:6px;padding:8px 12px;background:#fafafa}.asset-layout-json-preview summary{cursor:pointer;font-size:12px;color:#666}.asset-layout-json-preview pre{margin:10px 0 0;padding:10px;background:#fff;border:1px solid #ececec;border-radius:4px;font-size:11px;line-height:1.4;overflow:auto;max-height:220px}.social-builder-actions{display:flex;gap:12px;margin-top:16px;justify-content:flex-end;flex-wrap:wrap}.social-builder-actions .saving-status-message,.email-builder-actions .saving-status-message{flex-basis:100%;text-align:right;margin-top:0}.social-builder-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.social-builder-save:disabled{opacity:.6;cursor:not-allowed}.override-banner{background:#fff4e5;border:1px solid #ffb74d;color:#7a4a00;padding:8px 12px;border-radius:4px;font-size:13px;margin-bottom:12px}.template-admin-zone-list,.template-admin-properties{border:1px solid #e0e0e0;border-radius:6px;padding:12px}.template-admin-zone-list h4,.template-admin-properties h4{margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888}.zone-list-hint,.zone-sort-hint{margin:-4px 0 10px;font-size:11px;color:#888}.zone-layout-fields{margin:12px 0 0;padding-top:12px;border-top:1px solid #ececec}.zone-layout-fields h5{display:none}.zone-layout-center .zone-image-preview,.zone-layout-center .zone-logo-image{display:block;margin-left:auto;margin-right:auto}.zone-layout-right .zone-image-preview,.zone-layout-right .zone-logo-image{display:block;margin-left:auto;margin-right:0}.zone-layout-center .zone-cta-button,.zone-layout-right .zone-cta-button{display:inline-block}.zone-cta-button{cursor:text}.zone-image-collection-hint{margin:-4px 0 10px;font-size:11px;color:#888;line-height:1.4}.zone-list-item{display:flex;align-items:flex-start;gap:8px;width:100%;text-align:left;background:none;border:1px solid transparent;border-radius:4px;padding:8px;margin-bottom:4px;cursor:pointer;-webkit-user-select:none;user-select:none}.zone-list-delete{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin-top:1px;padding:0;border:none;border-radius:4px;background:transparent;color:#999;cursor:pointer}.zone-list-delete:hover{background:#ffebee;color:#d32f2f}.zone-list-delete:focus-visible{outline:2px solid var(--mb-primary);outline-offset:1px}.zone-list-item:active{cursor:grabbing}.zone-list-item-content{display:flex;flex-direction:column;align-items:flex-start;min-width:0;flex:1}.zone-list-drag-handle{color:#aaa;font-size:12px;line-height:1;padding-top:2px;cursor:grab}.zone-list-item-dragging{opacity:.45}.zone-list-item-drag-over{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item:hover{background:#f5f5f5}.zone-list-item-active{border-color:var(--mb-primary);background:var(--mb-primary-soft)}.zone-list-item-type{font-size:11px;color:#888}.zone-list-item-lock{font-size:10px;color:#d32f2f;text-transform:uppercase}.zone-list-add{width:100%;border:1px dashed #b0b0b0;background:none;padding:8px;border-radius:4px;cursor:pointer;color:#555;margin-bottom:4px}.zone-list-starter{border-color:var(--mb-primary);color:var(--mb-primary)}.template-admin-properties label{display:block;margin-bottom:10px;font-size:12px;color:#555}.zone-image-selected{display:flex;flex-direction:column;gap:8px;width:100%}.zone-image-preview{width:100%;max-height:280px;object-fit:cover;border-radius:4px;border:1px solid #e0e0e0}.social-builder-canvas .zone-image-preview{width:100%;height:100%;max-height:none;object-fit:contain;border-radius:0;border:0}.zone-image-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.zone-image-clear{border:1px solid #d32f2f;background:#fff;color:#d32f2f;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker{position:relative}.asset-picker-compact .asset-picker-trigger{padding:6px 10px;font-size:12px}.asset-picker-mode-tabs{display:flex;gap:4px;margin-bottom:10px}.asset-picker-mode-tab{flex:1;border:1px solid #d0d0d0;background:#fafafa;color:#555;padding:6px 8px;border-radius:4px;cursor:pointer;font-size:12px}.asset-picker-mode-tab-active{border-color:var(--mb-primary);background:var(--mb-primary-soft);color:var(--mb-primary-active)}.asset-picker-url-form label{display:block;margin-bottom:8px;font-size:12px;color:#555}.asset-picker-url-apply{width:100%;border:none;background:var(--mb-primary);color:#fff;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px}.asset-picker-url-apply:disabled{opacity:.6;cursor:not-allowed}.asset-picker-loading,.asset-picker-error{font-size:12px;margin-bottom:8px}.asset-picker-error{color:#b71c1c}.template-admin-properties input,.template-admin-properties select,.template-admin-properties textarea{display:block;width:100%;margin-top:4px;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box;font-size:13px}.checkbox-label{display:flex!important;align-items:center;gap:6px}.checkbox-label input{width:auto!important;margin:0!important}.position-fields{display:grid;grid-template-columns:1fr 1fr;gap:8px}.zone-remove{background:none;border:1px solid #d32f2f;color:#d32f2f;padding:6px 12px;border-radius:4px;cursor:pointer;margin-top:8px}.no-zone-selected{color:#888;font-size:13px}.template-admin-preview-canvas{border:1px solid #eee;background:#fafafa;margin-bottom:12px;overflow:hidden}.template-admin-save{background:var(--mb-primary);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;width:100%;max-width:280px}.template-admin-save:disabled{opacity:.6;cursor:not-allowed}.template-admin-save-error{margin:8px 0 0;font-size:13px}.zone{box-sizing:border-box}.zone-locked{outline:1px dashed transparent}.zone-text{outline:1px dashed transparent;cursor:text}.zone-text:hover{outline-color:#c9c9c9}.zone-text:focus{outline:1px solid var(--mb-primary);outline-offset:2px}.zone-image{background-color:#f5f5f5;display:flex;align-items:center;justify-content:center;overflow:hidden}.zone-cta button{cursor:pointer;font-size:14px}.zone-html-editor{width:100%;min-height:80px;font-family:monospace;font-size:12px;padding:8px;border:1px solid #d0d0d0;border-radius:4px}.zone-html-preview{margin-top:8px;border:1px dashed #d0d0d0;padding:8px}.zone-html-locked{pointer-events:none}.asset-picker-trigger{border:1px dashed #b0b0b0;background:transparent;padding:8px 12px;border-radius:4px;cursor:pointer;font-size:13px;color:#555}.asset-picker-panel{position:absolute;z-index:10;background:#fff;border:1px solid #d0d0d0;border-radius:6px;box-shadow:0 4px 16px #0000001f;padding:12px;width:320px}.asset-picker-search{width:100%;padding:6px 8px;border:1px solid #d0d0d0;border-radius:4px;margin-bottom:8px}.asset-picker-hint{font-size:12px;color:#888;margin-bottom:8px}.asset-picker-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-height:240px;overflow-y:auto}.asset-picker-thumb{border:none;background:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;font-size:11px}.asset-picker-thumb img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px}.asset-picker-empty{font-size:12px;color:#888;padding:8px}.eject-button{background:transparent;border:1px solid #d32f2f;color:#d32f2f;padding:10px 16px;border-radius:4px;cursor:pointer;font-size:13px}.eject-modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;z-index:100}.eject-modal{background:#fff;border-radius:8px;padding:24px;width:420px;max-width:90vw}.eject-modal h3{margin:0 0 8px;font-size:16px;color:#b71c1c}.eject-modal p{font-size:13px;color:#555;line-height:1.5}.eject-modal textarea{width:100%;min-height:70px;margin:12px 0;padding:8px;border:1px solid #d0d0d0;border-radius:4px;box-sizing:border-box}.eject-modal-actions{display:flex;justify-content:flex-end;gap:8px}.eject-confirm{background:#d32f2f;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer}.eject-confirm:disabled{opacity:.5;cursor:not-allowed}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function Jv(e, t) {
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
function qv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rm = { exports: {} }, gs = {}, Um = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi = Symbol.for("react.element"), e0 = Symbol.for("react.portal"), t0 = Symbol.for("react.fragment"), n0 = Symbol.for("react.strict_mode"), r0 = Symbol.for("react.profiler"), o0 = Symbol.for("react.provider"), i0 = Symbol.for("react.context"), a0 = Symbol.for("react.forward_ref"), s0 = Symbol.for("react.suspense"), l0 = Symbol.for("react.memo"), u0 = Symbol.for("react.lazy"), Mf = Symbol.iterator;
function c0(e) {
  return e === null || typeof e != "object" ? null : (e = Mf && e[Mf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Hm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Fm = Object.assign, Bm = {};
function wo(e, t, n) {
  this.props = e, this.context = t, this.refs = Bm, this.updater = n || Hm;
}
wo.prototype.isReactComponent = {};
wo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
wo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Km() {
}
Km.prototype = wo.prototype;
function kc(e, t, n) {
  this.props = e, this.context = t, this.refs = Bm, this.updater = n || Hm;
}
var Ec = kc.prototype = new Km();
Ec.constructor = kc;
Fm(Ec, wo.prototype);
Ec.isPureReactComponent = !0;
var Cf = Array.isArray, Zm = Object.prototype.hasOwnProperty, Nc = { current: null }, Vm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wm(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Zm.call(t, r) && !Vm.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++)
      l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
      o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Pi, type: e, key: i, ref: a, props: o, _owner: Nc.current };
}
function d0(e, t) {
  return { $$typeof: Pi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Mc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pi;
}
function f0(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var zf = /\/+/g;
function zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? f0("" + e.key) : t.toString(36);
}
function wa(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null)
    a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Pi:
          case e0:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + zl(a, 0) : r, Cf(o) ? (n = "", e != null && (n = e.replace(zf, "$&/") + "/"), wa(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Mc(o) && (o = d0(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(zf, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", Cf(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + zl(i, s);
      a += wa(i, t, n, l, o);
    }
  else if (l = c0(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + zl(i, s++), a += wa(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function qi(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return wa(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function p0(e) {
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
var at = { current: null }, Ta = { transition: null }, m0 = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: Ta, ReactCurrentOwner: Nc };
function Ym() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = { map: qi, forEach: function(e, t, n) {
  qi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return qi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return qi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Mc(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Y.Component = wo;
Y.Fragment = t0;
Y.Profiler = r0;
Y.PureComponent = kc;
Y.StrictMode = n0;
Y.Suspense = s0;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m0;
Y.act = Ym;
Y.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Fm({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Nc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      Zm.call(t, l) && !Vm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++)
      s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Pi, type: e.type, key: o, ref: i, props: r, _owner: a };
};
Y.createContext = function(e) {
  return e = { $$typeof: i0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: o0, _context: e }, e.Consumer = e;
};
Y.createElement = Wm;
Y.createFactory = function(e) {
  var t = Wm.bind(null, e);
  return t.type = e, t;
};
Y.createRef = function() {
  return { current: null };
};
Y.forwardRef = function(e) {
  return { $$typeof: a0, render: e };
};
Y.isValidElement = Mc;
Y.lazy = function(e) {
  return { $$typeof: u0, _payload: { _status: -1, _result: e }, _init: p0 };
};
Y.memo = function(e, t) {
  return { $$typeof: l0, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function(e) {
  var t = Ta.transition;
  Ta.transition = {};
  try {
    e();
  } finally {
    Ta.transition = t;
  }
};
Y.unstable_act = Ym;
Y.useCallback = function(e, t) {
  return at.current.useCallback(e, t);
};
Y.useContext = function(e) {
  return at.current.useContext(e);
};
Y.useDebugValue = function() {
};
Y.useDeferredValue = function(e) {
  return at.current.useDeferredValue(e);
};
Y.useEffect = function(e, t) {
  return at.current.useEffect(e, t);
};
Y.useId = function() {
  return at.current.useId();
};
Y.useImperativeHandle = function(e, t, n) {
  return at.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function(e, t) {
  return at.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function(e, t) {
  return at.current.useLayoutEffect(e, t);
};
Y.useMemo = function(e, t) {
  return at.current.useMemo(e, t);
};
Y.useReducer = function(e, t, n) {
  return at.current.useReducer(e, t, n);
};
Y.useRef = function(e) {
  return at.current.useRef(e);
};
Y.useState = function(e) {
  return at.current.useState(e);
};
Y.useSyncExternalStore = function(e, t, n) {
  return at.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function() {
  return at.current.useTransition();
};
Y.version = "18.3.1";
Um.exports = Y;
var N = Um.exports;
const h0 = /* @__PURE__ */ qv(N), gu = /* @__PURE__ */ Jv({
  __proto__: null,
  default: h0
}, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0 = N, y0 = Symbol.for("react.element"), v0 = Symbol.for("react.fragment"), w0 = Object.prototype.hasOwnProperty, T0 = g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qm(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    w0.call(t, r) && !A0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: y0, type: e, key: i, ref: a, props: o, _owner: T0.current };
}
gs.Fragment = v0;
gs.jsx = Qm;
gs.jsxs = Qm;
Rm.exports = gs;
var Cc = Rm.exports;
const on = Cc.Fragment, m = Cc.jsx, C = Cc.jsxs;
var Gm = { exports: {} }, Et = {}, Xm = { exports: {} }, Jm = {};
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
  function t($, Z) {
    var S = $.length;
    $.push(Z);
    e:
      for (; 0 < S; ) {
        var x = S - 1 >>> 1, K = $[x];
        if (0 < o(K, Z))
          $[x] = Z, $[S] = K, S = x;
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
    var Z = $[0], S = $.pop();
    if (S !== Z) {
      $[0] = S;
      e:
        for (var x = 0, K = $.length, ue = K >>> 1; x < ue; ) {
          var fe = 2 * (x + 1) - 1, lt = $[fe], Qe = fe + 1, Oe = $[Qe];
          if (0 > o(lt, S))
            Qe < K && 0 > o(Oe, lt) ? ($[x] = Oe, $[Qe] = S, x = Qe) : ($[x] = lt, $[fe] = S, x = fe);
          else if (Qe < K && 0 > o(Oe, S))
            $[x] = Oe, $[Qe] = S, x = Qe;
          else
            break e;
        }
    }
    return Z;
  }
  function o($, Z) {
    var S = $.sortIndex - Z.sortIndex;
    return S !== 0 ? S : $.id - Z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var a = Date, s = a.now();
    e.unstable_now = function() {
      return a.now() - s;
    };
  }
  var l = [], u = [], f = 1, c = null, d = 3, v = !1, T = !1, w = !1, L = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g($) {
    for (var Z = n(u); Z !== null; ) {
      if (Z.callback === null)
        r(u);
      else if (Z.startTime <= $)
        r(u), Z.sortIndex = Z.expirationTime, t(l, Z);
      else
        break;
      Z = n(u);
    }
  }
  function E($) {
    if (w = !1, g($), !T)
      if (n(l) !== null)
        T = !0, Q(I);
      else {
        var Z = n(u);
        Z !== null && Ct(E, Z.startTime - $);
      }
  }
  function I($, Z) {
    T = !1, w && (w = !1, y(z), z = -1), v = !0;
    var S = d;
    try {
      for (g(Z), c = n(l); c !== null && (!(c.expirationTime > Z) || $ && !U()); ) {
        var x = c.callback;
        if (typeof x == "function") {
          c.callback = null, d = c.priorityLevel;
          var K = x(c.expirationTime <= Z);
          Z = e.unstable_now(), typeof K == "function" ? c.callback = K : c === n(l) && r(l), g(Z);
        } else
          r(l);
        c = n(l);
      }
      if (c !== null)
        var ue = !0;
      else {
        var fe = n(u);
        fe !== null && Ct(E, fe.startTime - Z), ue = !1;
      }
      return ue;
    } finally {
      c = null, d = S, v = !1;
    }
  }
  var M = !1, A = null, z = -1, B = 5, j = -1;
  function U() {
    return !(e.unstable_now() - j < B);
  }
  function b() {
    if (A !== null) {
      var $ = e.unstable_now();
      j = $;
      var Z = !0;
      try {
        Z = A(!0, $);
      } finally {
        Z ? q() : (M = !1, A = null);
      }
    } else
      M = !1;
  }
  var q;
  if (typeof h == "function")
    q = function() {
      h(b);
    };
  else if (typeof MessageChannel < "u") {
    var ee = new MessageChannel(), De = ee.port2;
    ee.port1.onmessage = b, q = function() {
      De.postMessage(null);
    };
  } else
    q = function() {
      L(b, 0);
    };
  function Q($) {
    A = $, M || (M = !0, q());
  }
  function Ct($, Z) {
    z = L(function() {
      $(e.unstable_now());
    }, Z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    T || v || (T = !0, Q(I));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function($) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var Z = 3;
        break;
      default:
        Z = d;
    }
    var S = d;
    d = Z;
    try {
      return $();
    } finally {
      d = S;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function($, Z) {
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
    var S = d;
    d = $;
    try {
      return Z();
    } finally {
      d = S;
    }
  }, e.unstable_scheduleCallback = function($, Z, S) {
    var x = e.unstable_now();
    switch (typeof S == "object" && S !== null ? (S = S.delay, S = typeof S == "number" && 0 < S ? x + S : x) : S = x, $) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = S + K, $ = { id: f++, callback: Z, priorityLevel: $, startTime: S, expirationTime: K, sortIndex: -1 }, S > x ? ($.sortIndex = S, t(u, $), n(l) === null && $ === n(u) && (w ? (y(z), z = -1) : w = !0, Ct(E, S - x))) : ($.sortIndex = K, t(l, $), T || v || (T = !0, Q(I))), $;
  }, e.unstable_shouldYield = U, e.unstable_wrapCallback = function($) {
    var Z = d;
    return function() {
      var S = d;
      d = Z;
      try {
        return $.apply(this, arguments);
      } finally {
        d = S;
      }
    };
  };
})(Jm);
Xm.exports = Jm;
var S0 = Xm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k0 = N, kt = S0;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var qm = /* @__PURE__ */ new Set(), ai = {};
function Er(e, t) {
  ao(e, t), ao(e + "Capture", t);
}
function ao(e, t) {
  for (ai[e] = t, e = 0; e < t.length; e++)
    qm.add(t[e]);
}
var Tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yu = Object.prototype.hasOwnProperty, E0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Lf = {}, If = {};
function N0(e) {
  return yu.call(If, e) ? !0 : yu.call(Lf, e) ? !1 : E0.test(e) ? If[e] = !0 : (Lf[e] = !0, !1);
}
function M0(e, t, n, r) {
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
function C0(e, t, n, r) {
  if (t === null || typeof t > "u" || M0(e, t, n, r))
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
function st(e, t, n, r, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  We[e] = new st(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  We[t] = new st(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  We[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  We[e] = new st(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  We[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  We[e] = new st(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  We[e] = new st(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  We[e] = new st(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  We[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zc = /[\-:]([a-z])/g;
function Lc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    zc,
    Lc
  );
  We[t] = new st(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(zc, Lc);
  We[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(zc, Lc);
  We[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  We[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
We.xlinkHref = new st("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  We[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ic(e, t, n, r) {
  var o = We.hasOwnProperty(t) ? We[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C0(t, n, o, r) && (n = null), r || o === null ? N0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mn = k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ea = Symbol.for("react.element"), jr = Symbol.for("react.portal"), Rr = Symbol.for("react.fragment"), xc = Symbol.for("react.strict_mode"), vu = Symbol.for("react.profiler"), eh = Symbol.for("react.provider"), th = Symbol.for("react.context"), Dc = Symbol.for("react.forward_ref"), wu = Symbol.for("react.suspense"), Tu = Symbol.for("react.suspense_list"), Oc = Symbol.for("react.memo"), Dn = Symbol.for("react.lazy"), nh = Symbol.for("react.offscreen"), xf = Symbol.iterator;
function xo(e) {
  return e === null || typeof e != "object" ? null : (e = xf && e[xf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ge = Object.assign, Ll;
function Bo(e) {
  if (Ll === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ll = t && t[1] || "";
    }
  return `
` + Ll + e;
}
var Il = !1;
function xl(e, t) {
  if (!e || Il)
    return "";
  Il = !0;
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
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if (a--, s--, 0 > s || o[a] !== i[s]) {
                var l = `
` + o[a].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    Il = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Bo(e) : "";
}
function z0(e) {
  switch (e.tag) {
    case 5:
      return Bo(e.type);
    case 16:
      return Bo("Lazy");
    case 13:
      return Bo("Suspense");
    case 19:
      return Bo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = xl(e.type, !1), e;
    case 11:
      return e = xl(e.type.render, !1), e;
    case 1:
      return e = xl(e.type, !0), e;
    default:
      return "";
  }
}
function Au(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Rr:
      return "Fragment";
    case jr:
      return "Portal";
    case vu:
      return "Profiler";
    case xc:
      return "StrictMode";
    case wu:
      return "Suspense";
    case Tu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case th:
        return (e.displayName || "Context") + ".Consumer";
      case eh:
        return (e._context.displayName || "Context") + ".Provider";
      case Dc:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Oc:
        return t = e.displayName || null, t !== null ? t : Au(e.type) || "Memo";
      case Dn:
        t = e._payload, e = e._init;
        try {
          return Au(e(t));
        } catch {
        }
    }
  return null;
}
function L0(e) {
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
      return Au(t);
    case 8:
      return t === xc ? "StrictMode" : "Mode";
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
function Xn(e) {
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
function rh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function I0(e) {
  var t = rh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(a) {
      r = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ta(e) {
  e._valueTracker || (e._valueTracker = I0(e));
}
function oh(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = rh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function _a(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Su(e, t) {
  var n = t.checked;
  return ge({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Df(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Xn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ih(e, t) {
  t = t.checked, t != null && Ic(e, "checked", t, !1);
}
function ku(e, t) {
  ih(e, t);
  var n = Xn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Eu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Eu(e, t.type, Xn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Of(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Eu(e, t, n) {
  (t !== "number" || _a(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ko = Array.isArray;
function Xr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Xn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Nu(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(O(91));
  return ge({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Pf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(O(92));
      if (Ko(n)) {
        if (1 < n.length)
          throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Xn(n) };
}
function ah(e, t) {
  var n = Xn(t.value), r = Xn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function _f(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? sh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var na, lh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (na = na || document.createElement("div"), na.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = na.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function si(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yo = {
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
}, x0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yo).forEach(function(e) {
  x0.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Yo[t] = Yo[e];
  });
});
function uh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Yo.hasOwnProperty(e) && Yo[e] ? ("" + t).trim() : t + "px";
}
function ch(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = uh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var D0 = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Cu(e, t) {
  if (t) {
    if (D0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(O(62));
  }
}
function zu(e, t) {
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
var Lu = null;
function Pc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Iu = null, Jr = null, qr = null;
function bf(e) {
  if (e = $i(e)) {
    if (typeof Iu != "function")
      throw Error(O(280));
    var t = e.stateNode;
    t && (t = As(t), Iu(e.stateNode, e.type, t));
  }
}
function dh(e) {
  Jr ? qr ? qr.push(e) : qr = [e] : Jr = e;
}
function fh() {
  if (Jr) {
    var e = Jr, t = qr;
    if (qr = Jr = null, bf(e), t)
      for (e = 0; e < t.length; e++)
        bf(t[e]);
  }
}
function ph(e, t) {
  return e(t);
}
function mh() {
}
var Dl = !1;
function hh(e, t, n) {
  if (Dl)
    return e(t, n);
  Dl = !0;
  try {
    return ph(e, t, n);
  } finally {
    Dl = !1, (Jr !== null || qr !== null) && (mh(), fh());
  }
}
function li(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = As(n);
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
    throw Error(O(231, t, typeof n));
  return n;
}
var xu = !1;
if (Tn)
  try {
    var Do = {};
    Object.defineProperty(Do, "passive", { get: function() {
      xu = !0;
    } }), window.addEventListener("test", Do, Do), window.removeEventListener("test", Do, Do);
  } catch {
    xu = !1;
  }
function O0(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Qo = !1, ba = null, $a = !1, Du = null, P0 = { onError: function(e) {
  Qo = !0, ba = e;
} };
function _0(e, t, n, r, o, i, a, s, l) {
  Qo = !1, ba = null, O0.apply(P0, arguments);
}
function b0(e, t, n, r, o, i, a, s, l) {
  if (_0.apply(this, arguments), Qo) {
    if (Qo) {
      var u = ba;
      Qo = !1, ba = null;
    } else
      throw Error(O(198));
    $a || ($a = !0, Du = u);
  }
}
function Nr(e) {
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
function gh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function $f(e) {
  if (Nr(e) !== e)
    throw Error(O(188));
}
function $0(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nr(e), t === null)
      throw Error(O(188));
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
          return $f(o), e;
        if (i === r)
          return $f(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          a = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          a = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            a = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            a = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!a)
          throw Error(O(189));
      }
    }
    if (n.alternate !== r)
      throw Error(O(190));
  }
  if (n.tag !== 3)
    throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function yh(e) {
  return e = $0(e), e !== null ? vh(e) : null;
}
function vh(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = vh(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var wh = kt.unstable_scheduleCallback, jf = kt.unstable_cancelCallback, j0 = kt.unstable_shouldYield, R0 = kt.unstable_requestPaint, Ee = kt.unstable_now, U0 = kt.unstable_getCurrentPriorityLevel, _c = kt.unstable_ImmediatePriority, Th = kt.unstable_UserBlockingPriority, ja = kt.unstable_NormalPriority, H0 = kt.unstable_LowPriority, Ah = kt.unstable_IdlePriority, ys = null, ln = null;
function F0(e) {
  if (ln && typeof ln.onCommitFiberRoot == "function")
    try {
      ln.onCommitFiberRoot(ys, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Bt = Math.clz32 ? Math.clz32 : Z0, B0 = Math.log, K0 = Math.LN2;
function Z0(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (B0(e) / K0 | 0) | 0;
}
var ra = 64, oa = 4194304;
function Zo(e) {
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
function Ra(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = Zo(s) : (i &= a, i !== 0 && (r = Zo(i)));
  } else
    a = n & ~o, a !== 0 ? r = Zo(a) : i !== 0 && (r = Zo(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Bt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function V0(e, t) {
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
function W0(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - Bt(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = V0(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Ou(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Sh() {
  var e = ra;
  return ra <<= 1, !(ra & 4194240) && (ra = 64), e;
}
function Ol(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function _i(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Bt(t), e[t] = n;
}
function Y0(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Bt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function bc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Bt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var oe = 0;
function kh(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Eh, $c, Nh, Mh, Ch, Pu = !1, ia = [], Fn = null, Bn = null, Kn = null, ui = /* @__PURE__ */ new Map(), ci = /* @__PURE__ */ new Map(), Pn = [], Q0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Fn = null;
      break;
    case "dragenter":
    case "dragleave":
      Bn = null;
      break;
    case "mouseover":
    case "mouseout":
      Kn = null;
      break;
    case "pointerover":
    case "pointerout":
      ui.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ci.delete(t.pointerId);
  }
}
function Oo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = $i(t), t !== null && $c(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function G0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Fn = Oo(Fn, e, t, n, r, o), !0;
    case "dragenter":
      return Bn = Oo(Bn, e, t, n, r, o), !0;
    case "mouseover":
      return Kn = Oo(Kn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return ui.set(i, Oo(ui.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ci.set(i, Oo(ci.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function zh(e) {
  var t = fr(e.target);
  if (t !== null) {
    var n = Nr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = gh(n), t !== null) {
          e.blockedOn = t, Ch(e.priority, function() {
            Nh(n);
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
function Aa(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _u(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Lu = r, n.target.dispatchEvent(r), Lu = null;
    } else
      return t = $i(n), t !== null && $c(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Uf(e, t, n) {
  Aa(e) && n.delete(t);
}
function X0() {
  Pu = !1, Fn !== null && Aa(Fn) && (Fn = null), Bn !== null && Aa(Bn) && (Bn = null), Kn !== null && Aa(Kn) && (Kn = null), ui.forEach(Uf), ci.forEach(Uf);
}
function Po(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Pu || (Pu = !0, kt.unstable_scheduleCallback(kt.unstable_NormalPriority, X0)));
}
function di(e) {
  function t(o) {
    return Po(o, e);
  }
  if (0 < ia.length) {
    Po(ia[0], e);
    for (var n = 1; n < ia.length; n++) {
      var r = ia[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Fn !== null && Po(Fn, e), Bn !== null && Po(Bn, e), Kn !== null && Po(Kn, e), ui.forEach(t), ci.forEach(t), n = 0; n < Pn.length; n++)
    r = Pn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pn.length && (n = Pn[0], n.blockedOn === null); )
    zh(n), n.blockedOn === null && Pn.shift();
}
var eo = Mn.ReactCurrentBatchConfig, Ua = !0;
function J0(e, t, n, r) {
  var o = oe, i = eo.transition;
  eo.transition = null;
  try {
    oe = 1, jc(e, t, n, r);
  } finally {
    oe = o, eo.transition = i;
  }
}
function q0(e, t, n, r) {
  var o = oe, i = eo.transition;
  eo.transition = null;
  try {
    oe = 4, jc(e, t, n, r);
  } finally {
    oe = o, eo.transition = i;
  }
}
function jc(e, t, n, r) {
  if (Ua) {
    var o = _u(e, t, n, r);
    if (o === null)
      Bl(e, t, r, Ha, n), Rf(e, r);
    else if (G0(o, e, t, n, r))
      r.stopPropagation();
    else if (Rf(e, r), t & 4 && -1 < Q0.indexOf(e)) {
      for (; o !== null; ) {
        var i = $i(o);
        if (i !== null && Eh(i), i = _u(e, t, n, r), i === null && Bl(e, t, r, Ha, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Bl(e, t, r, null, n);
  }
}
var Ha = null;
function _u(e, t, n, r) {
  if (Ha = null, e = Pc(r), e = fr(e), e !== null)
    if (t = Nr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = gh(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ha = e, null;
}
function Lh(e) {
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
      switch (U0()) {
        case _c:
          return 1;
        case Th:
          return 4;
        case ja:
        case H0:
          return 16;
        case Ah:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $n = null, Rc = null, Sa = null;
function Ih() {
  if (Sa)
    return Sa;
  var e, t = Rc, n = t.length, r, o = "value" in $n ? $n.value : $n.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return Sa = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ka(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function aa() {
  return !0;
}
function Hf() {
  return !1;
}
function Nt(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? aa : Hf, this.isPropagationStopped = Hf, this;
  }
  return ge(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = aa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = aa);
  }, persist: function() {
  }, isPersistent: aa }), t;
}
var To = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Uc = Nt(To), bi = ge({}, To, { view: 0, detail: 0 }), ew = Nt(bi), Pl, _l, _o, vs = ge({}, bi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== _o && (_o && e.type === "mousemove" ? (Pl = e.screenX - _o.screenX, _l = e.screenY - _o.screenY) : _l = Pl = 0, _o = e), Pl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : _l;
} }), Ff = Nt(vs), tw = ge({}, vs, { dataTransfer: 0 }), nw = Nt(tw), rw = ge({}, bi, { relatedTarget: 0 }), bl = Nt(rw), ow = ge({}, To, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), iw = Nt(ow), aw = ge({}, To, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), sw = Nt(aw), lw = ge({}, To, { data: 0 }), Bf = Nt(lw), uw = {
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
}, cw = {
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
}, dw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function fw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dw[e]) ? !!t[e] : !1;
}
function Hc() {
  return fw;
}
var pw = ge({}, bi, { key: function(e) {
  if (e.key) {
    var t = uw[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = ka(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cw[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hc, charCode: function(e) {
  return e.type === "keypress" ? ka(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ka(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), mw = Nt(pw), hw = ge({}, vs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Kf = Nt(hw), gw = ge({}, bi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hc }), yw = Nt(gw), vw = ge({}, To, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ww = Nt(vw), Tw = ge({}, vs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Aw = Nt(Tw), Sw = [9, 13, 27, 32], Fc = Tn && "CompositionEvent" in window, Go = null;
Tn && "documentMode" in document && (Go = document.documentMode);
var kw = Tn && "TextEvent" in window && !Go, xh = Tn && (!Fc || Go && 8 < Go && 11 >= Go), Zf = String.fromCharCode(32), Vf = !1;
function Dh(e, t) {
  switch (e) {
    case "keyup":
      return Sw.indexOf(t.keyCode) !== -1;
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
function Oh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ur = !1;
function Ew(e, t) {
  switch (e) {
    case "compositionend":
      return Oh(t);
    case "keypress":
      return t.which !== 32 ? null : (Vf = !0, Zf);
    case "textInput":
      return e = t.data, e === Zf && Vf ? null : e;
    default:
      return null;
  }
}
function Nw(e, t) {
  if (Ur)
    return e === "compositionend" || !Fc && Dh(e, t) ? (e = Ih(), Sa = Rc = $n = null, Ur = !1, e) : null;
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
      return xh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mw = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Wf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mw[e.type] : t === "textarea";
}
function Ph(e, t, n, r) {
  dh(r), t = Fa(t, "onChange"), 0 < t.length && (n = new Uc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Xo = null, fi = null;
function Cw(e) {
  Zh(e, 0);
}
function ws(e) {
  var t = Br(e);
  if (oh(t))
    return e;
}
function zw(e, t) {
  if (e === "change")
    return t;
}
var _h = !1;
if (Tn) {
  var $l;
  if (Tn) {
    var jl = "oninput" in document;
    if (!jl) {
      var Yf = document.createElement("div");
      Yf.setAttribute("oninput", "return;"), jl = typeof Yf.oninput == "function";
    }
    $l = jl;
  } else
    $l = !1;
  _h = $l && (!document.documentMode || 9 < document.documentMode);
}
function Qf() {
  Xo && (Xo.detachEvent("onpropertychange", bh), fi = Xo = null);
}
function bh(e) {
  if (e.propertyName === "value" && ws(fi)) {
    var t = [];
    Ph(t, fi, e, Pc(e)), hh(Cw, t);
  }
}
function Lw(e, t, n) {
  e === "focusin" ? (Qf(), Xo = t, fi = n, Xo.attachEvent("onpropertychange", bh)) : e === "focusout" && Qf();
}
function Iw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ws(fi);
}
function xw(e, t) {
  if (e === "click")
    return ws(t);
}
function Dw(e, t) {
  if (e === "input" || e === "change")
    return ws(t);
}
function Ow(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Zt = typeof Object.is == "function" ? Object.is : Ow;
function pi(e, t) {
  if (Zt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!yu.call(t, o) || !Zt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Gf(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Xf(e, t) {
  var n = Gf(e);
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
    n = Gf(n);
  }
}
function $h(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $h(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function jh() {
  for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = _a(e.document);
  }
  return t;
}
function Bc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Pw(e) {
  var t = jh(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && $h(n.ownerDocument.documentElement, n)) {
    if (r !== null && Bc(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Xf(n, i);
        var a = Xf(
          n,
          r
        );
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var _w = Tn && "documentMode" in document && 11 >= document.documentMode, Hr = null, bu = null, Jo = null, $u = !1;
function Jf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $u || Hr == null || Hr !== _a(r) || (r = Hr, "selectionStart" in r && Bc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jo && pi(Jo, r) || (Jo = r, r = Fa(bu, "onSelect"), 0 < r.length && (t = new Uc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Hr)));
}
function sa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Fr = { animationend: sa("Animation", "AnimationEnd"), animationiteration: sa("Animation", "AnimationIteration"), animationstart: sa("Animation", "AnimationStart"), transitionend: sa("Transition", "TransitionEnd") }, Rl = {}, Rh = {};
Tn && (Rh = document.createElement("div").style, "AnimationEvent" in window || (delete Fr.animationend.animation, delete Fr.animationiteration.animation, delete Fr.animationstart.animation), "TransitionEvent" in window || delete Fr.transitionend.transition);
function Ts(e) {
  if (Rl[e])
    return Rl[e];
  if (!Fr[e])
    return e;
  var t = Fr[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Rh)
      return Rl[e] = t[n];
  return e;
}
var Uh = Ts("animationend"), Hh = Ts("animationiteration"), Fh = Ts("animationstart"), Bh = Ts("transitionend"), Kh = /* @__PURE__ */ new Map(), qf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function tr(e, t) {
  Kh.set(e, t), Er(t, [e]);
}
for (var Ul = 0; Ul < qf.length; Ul++) {
  var Hl = qf[Ul], bw = Hl.toLowerCase(), $w = Hl[0].toUpperCase() + Hl.slice(1);
  tr(bw, "on" + $w);
}
tr(Uh, "onAnimationEnd");
tr(Hh, "onAnimationIteration");
tr(Fh, "onAnimationStart");
tr("dblclick", "onDoubleClick");
tr("focusin", "onFocus");
tr("focusout", "onBlur");
tr(Bh, "onTransitionEnd");
ao("onMouseEnter", ["mouseout", "mouseover"]);
ao("onMouseLeave", ["mouseout", "mouseover"]);
ao("onPointerEnter", ["pointerout", "pointerover"]);
ao("onPointerLeave", ["pointerout", "pointerover"]);
Er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));
function ep(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, b0(r, t, void 0, e), e.currentTarget = null;
}
function Zh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a], l = s.instance, u = s.currentTarget;
          if (s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          ep(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          ep(o, s, u), i = l;
        }
    }
  }
  if ($a)
    throw e = Du, $a = !1, Du = null, e;
}
function ce(e, t) {
  var n = t[Fu];
  n === void 0 && (n = t[Fu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Vh(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), Vh(n, e, r, t);
}
var la = "_reactListening" + Math.random().toString(36).slice(2);
function mi(e) {
  if (!e[la]) {
    e[la] = !0, qm.forEach(function(n) {
      n !== "selectionchange" && (jw.has(n) || Fl(n, !1, e), Fl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[la] || (t[la] = !0, Fl("selectionchange", !1, t));
  }
}
function Vh(e, t, n, r) {
  switch (Lh(t)) {
    case 1:
      var o = J0;
      break;
    case 4:
      o = q0;
      break;
    default:
      o = jc;
  }
  n = o.bind(null, t, n, e), o = void 0, !xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Bl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var l = a.tag;
              if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (a = fr(s), a === null)
              return;
            if (l = a.tag, l === 5 || l === 6) {
              r = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  hh(function() {
    var u = i, f = Pc(n), c = [];
    e: {
      var d = Kh.get(e);
      if (d !== void 0) {
        var v = Uc, T = e;
        switch (e) {
          case "keypress":
            if (ka(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = mw;
            break;
          case "focusin":
            T = "focus", v = bl;
            break;
          case "focusout":
            T = "blur", v = bl;
            break;
          case "beforeblur":
          case "afterblur":
            v = bl;
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
            v = Ff;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = nw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = yw;
            break;
          case Uh:
          case Hh:
          case Fh:
            v = iw;
            break;
          case Bh:
            v = ww;
            break;
          case "scroll":
            v = ew;
            break;
          case "wheel":
            v = Aw;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = sw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Kf;
        }
        var w = (t & 4) !== 0, L = !w && e === "scroll", y = w ? d !== null ? d + "Capture" : null : d;
        w = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var E = g.stateNode;
          if (g.tag === 5 && E !== null && (g = E, y !== null && (E = li(h, y), E != null && w.push(hi(h, E, g)))), L)
            break;
          h = h.return;
        }
        0 < w.length && (d = new v(d, T, null, n, f), c.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", d && n !== Lu && (T = n.relatedTarget || n.fromElement) && (fr(T) || T[An]))
          break e;
        if ((v || d) && (d = f.window === f ? f : (d = f.ownerDocument) ? d.defaultView || d.parentWindow : window, v ? (T = n.relatedTarget || n.toElement, v = u, T = T ? fr(T) : null, T !== null && (L = Nr(T), T !== L || T.tag !== 5 && T.tag !== 6) && (T = null)) : (v = null, T = u), v !== T)) {
          if (w = Ff, E = "onMouseLeave", y = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (w = Kf, E = "onPointerLeave", y = "onPointerEnter", h = "pointer"), L = v == null ? d : Br(v), g = T == null ? d : Br(T), d = new w(E, h + "leave", v, n, f), d.target = L, d.relatedTarget = g, E = null, fr(f) === u && (w = new w(y, h + "enter", T, n, f), w.target = g, w.relatedTarget = L, E = w), L = E, v && T)
            t: {
              for (w = v, y = T, h = 0, g = w; g; g = Or(g))
                h++;
              for (g = 0, E = y; E; E = Or(E))
                g++;
              for (; 0 < h - g; )
                w = Or(w), h--;
              for (; 0 < g - h; )
                y = Or(y), g--;
              for (; h--; ) {
                if (w === y || y !== null && w === y.alternate)
                  break t;
                w = Or(w), y = Or(y);
              }
              w = null;
            }
          else
            w = null;
          v !== null && tp(c, d, v, w, !1), T !== null && L !== null && tp(c, L, T, w, !0);
        }
      }
      e: {
        if (d = u ? Br(u) : window, v = d.nodeName && d.nodeName.toLowerCase(), v === "select" || v === "input" && d.type === "file")
          var I = zw;
        else if (Wf(d))
          if (_h)
            I = Dw;
          else {
            I = Iw;
            var M = Lw;
          }
        else
          (v = d.nodeName) && v.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (I = xw);
        if (I && (I = I(e, u))) {
          Ph(c, I, n, f);
          break e;
        }
        M && M(e, d, u), e === "focusout" && (M = d._wrapperState) && M.controlled && d.type === "number" && Eu(d, "number", d.value);
      }
      switch (M = u ? Br(u) : window, e) {
        case "focusin":
          (Wf(M) || M.contentEditable === "true") && (Hr = M, bu = u, Jo = null);
          break;
        case "focusout":
          Jo = bu = Hr = null;
          break;
        case "mousedown":
          $u = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $u = !1, Jf(c, n, f);
          break;
        case "selectionchange":
          if (_w)
            break;
        case "keydown":
        case "keyup":
          Jf(c, n, f);
      }
      var A;
      if (Fc)
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
        Ur ? Dh(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (xh && n.locale !== "ko" && (Ur || z !== "onCompositionStart" ? z === "onCompositionEnd" && Ur && (A = Ih()) : ($n = f, Rc = "value" in $n ? $n.value : $n.textContent, Ur = !0)), M = Fa(u, z), 0 < M.length && (z = new Bf(z, e, null, n, f), c.push({ event: z, listeners: M }), A ? z.data = A : (A = Oh(n), A !== null && (z.data = A)))), (A = kw ? Ew(e, n) : Nw(e, n)) && (u = Fa(u, "onBeforeInput"), 0 < u.length && (f = new Bf("onBeforeInput", "beforeinput", null, n, f), c.push({ event: f, listeners: u }), f.data = A));
    }
    Zh(c, t);
  });
}
function hi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = li(e, n), i != null && r.unshift(hi(e, i, o)), i = li(e, t), i != null && r.push(hi(e, i, o))), e = e.return;
  }
  return r;
}
function Or(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tp(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = li(n, i), l != null && a.unshift(hi(n, l, s))) : o || (l = li(n, i), l != null && a.push(hi(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Rw = /\r\n?/g, Uw = /\u0000|\uFFFD/g;
function np(e) {
  return (typeof e == "string" ? e : "" + e).replace(Rw, `
`).replace(Uw, "");
}
function ua(e, t, n) {
  if (t = np(t), np(e) !== t && n)
    throw Error(O(425));
}
function Ba() {
}
var ju = null, Ru = null;
function Uu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Hu = typeof setTimeout == "function" ? setTimeout : void 0, Hw = typeof clearTimeout == "function" ? clearTimeout : void 0, rp = typeof Promise == "function" ? Promise : void 0, Fw = typeof queueMicrotask == "function" ? queueMicrotask : typeof rp < "u" ? function(e) {
  return rp.resolve(null).then(e).catch(Bw);
} : Hu;
function Bw(e) {
  setTimeout(function() {
    throw e;
  });
}
function Kl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), di(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  di(t);
}
function Zn(e) {
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
function op(e) {
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
var Ao = Math.random().toString(36).slice(2), an = "__reactFiber$" + Ao, gi = "__reactProps$" + Ao, An = "__reactContainer$" + Ao, Fu = "__reactEvents$" + Ao, Kw = "__reactListeners$" + Ao, Zw = "__reactHandles$" + Ao;
function fr(e) {
  var t = e[an];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[An] || n[an]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = op(e); e !== null; ) {
          if (n = e[an])
            return n;
          e = op(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function $i(e) {
  return e = e[an] || e[An], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Br(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(O(33));
}
function As(e) {
  return e[gi] || null;
}
var Bu = [], Kr = -1;
function nr(e) {
  return { current: e };
}
function de(e) {
  0 > Kr || (e.current = Bu[Kr], Bu[Kr] = null, Kr--);
}
function le(e, t) {
  Kr++, Bu[Kr] = e.current, e.current = t;
}
var Jn = {}, et = nr(Jn), ft = nr(!1), yr = Jn;
function so(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function pt(e) {
  return e = e.childContextTypes, e != null;
}
function Ka() {
  de(ft), de(et);
}
function ip(e, t, n) {
  if (et.current !== Jn)
    throw Error(O(168));
  le(et, t), le(ft, n);
}
function Wh(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(O(108, L0(e) || "Unknown", o));
  return ge({}, n, r);
}
function Za(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, yr = et.current, le(et, e), le(ft, ft.current), !0;
}
function ap(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(O(169));
  n ? (e = Wh(e, t, yr), r.__reactInternalMemoizedMergedChildContext = e, de(ft), de(et), le(et, e)) : de(ft), le(ft, n);
}
var hn = null, Ss = !1, Zl = !1;
function Yh(e) {
  hn === null ? hn = [e] : hn.push(e);
}
function Vw(e) {
  Ss = !0, Yh(e);
}
function rr() {
  if (!Zl && hn !== null) {
    Zl = !0;
    var e = 0, t = oe;
    try {
      var n = hn;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      hn = null, Ss = !1;
    } catch (o) {
      throw hn !== null && (hn = hn.slice(e + 1)), wh(_c, rr), o;
    } finally {
      oe = t, Zl = !1;
    }
  }
  return null;
}
var Zr = [], Vr = 0, Va = null, Wa = 0, Lt = [], It = 0, vr = null, yn = 1, vn = "";
function ur(e, t) {
  Zr[Vr++] = Wa, Zr[Vr++] = Va, Va = e, Wa = t;
}
function Qh(e, t, n) {
  Lt[It++] = yn, Lt[It++] = vn, Lt[It++] = vr, vr = e;
  var r = yn;
  e = vn;
  var o = 32 - Bt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Bt(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, yn = 1 << 32 - Bt(t) + o | n << o | r, vn = i + e;
  } else
    yn = 1 << i | n << o | r, vn = e;
}
function Kc(e) {
  e.return !== null && (ur(e, 1), Qh(e, 1, 0));
}
function Zc(e) {
  for (; e === Va; )
    Va = Zr[--Vr], Zr[Vr] = null, Wa = Zr[--Vr], Zr[Vr] = null;
  for (; e === vr; )
    vr = Lt[--It], Lt[It] = null, vn = Lt[--It], Lt[It] = null, yn = Lt[--It], Lt[It] = null;
}
var At = null, Tt = null, pe = !1, Ht = null;
function Gh(e, t) {
  var n = Dt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function sp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, At = e, Tt = Zn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, At = e, Tt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = vr !== null ? { id: yn, overflow: vn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Dt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, At = e, Tt = null, !0) : !1;
    default:
      return !1;
  }
}
function Ku(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zu(e) {
  if (pe) {
    var t = Tt;
    if (t) {
      var n = t;
      if (!sp(e, t)) {
        if (Ku(e))
          throw Error(O(418));
        t = Zn(n.nextSibling);
        var r = At;
        t && sp(e, t) ? Gh(r, n) : (e.flags = e.flags & -4097 | 2, pe = !1, At = e);
      }
    } else {
      if (Ku(e))
        throw Error(O(418));
      e.flags = e.flags & -4097 | 2, pe = !1, At = e;
    }
  }
}
function lp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  At = e;
}
function ca(e) {
  if (e !== At)
    return !1;
  if (!pe)
    return lp(e), pe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Uu(e.type, e.memoizedProps)), t && (t = Tt)) {
    if (Ku(e))
      throw Xh(), Error(O(418));
    for (; t; )
      Gh(e, t), t = Zn(t.nextSibling);
  }
  if (lp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Tt = Zn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Tt = null;
    }
  } else
    Tt = At ? Zn(e.stateNode.nextSibling) : null;
  return !0;
}
function Xh() {
  for (var e = Tt; e; )
    e = Zn(e.nextSibling);
}
function lo() {
  Tt = At = null, pe = !1;
}
function Vc(e) {
  Ht === null ? Ht = [e] : Ht.push(e);
}
var Ww = Mn.ReactCurrentBatchConfig;
function bo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(O(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(O(284));
    if (!n._owner)
      throw Error(O(290, e));
  }
  return e;
}
function da(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function up(e) {
  var t = e._init;
  return t(e._payload);
}
function Jh(e) {
  function t(y, h) {
    if (e) {
      var g = y.deletions;
      g === null ? (y.deletions = [h], y.flags |= 16) : g.push(h);
    }
  }
  function n(y, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(y, h), h = h.sibling;
    return null;
  }
  function r(y, h) {
    for (y = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), h = h.sibling;
    return y;
  }
  function o(y, h) {
    return y = Qn(y, h), y.index = 0, y.sibling = null, y;
  }
  function i(y, h, g) {
    return y.index = g, e ? (g = y.alternate, g !== null ? (g = g.index, g < h ? (y.flags |= 2, h) : g) : (y.flags |= 2, h)) : (y.flags |= 1048576, h);
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function s(y, h, g, E) {
    return h === null || h.tag !== 6 ? (h = Jl(g, y.mode, E), h.return = y, h) : (h = o(h, g), h.return = y, h);
  }
  function l(y, h, g, E) {
    var I = g.type;
    return I === Rr ? f(y, h, g.props.children, E, g.key) : h !== null && (h.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Dn && up(I) === h.type) ? (E = o(h, g.props), E.ref = bo(y, h, g), E.return = y, E) : (E = Ia(g.type, g.key, g.props, null, y.mode, E), E.ref = bo(y, h, g), E.return = y, E);
  }
  function u(y, h, g, E) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = ql(g, y.mode, E), h.return = y, h) : (h = o(h, g.children || []), h.return = y, h);
  }
  function f(y, h, g, E, I) {
    return h === null || h.tag !== 7 ? (h = gr(g, y.mode, E, I), h.return = y, h) : (h = o(h, g), h.return = y, h);
  }
  function c(y, h, g) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Jl("" + h, y.mode, g), h.return = y, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ea:
          return g = Ia(h.type, h.key, h.props, null, y.mode, g), g.ref = bo(y, null, h), g.return = y, g;
        case jr:
          return h = ql(h, y.mode, g), h.return = y, h;
        case Dn:
          var E = h._init;
          return c(y, E(h._payload), g);
      }
      if (Ko(h) || xo(h))
        return h = gr(h, y.mode, g, null), h.return = y, h;
      da(y, h);
    }
    return null;
  }
  function d(y, h, g, E) {
    var I = h !== null ? h.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return I !== null ? null : s(y, h, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ea:
          return g.key === I ? l(y, h, g, E) : null;
        case jr:
          return g.key === I ? u(y, h, g, E) : null;
        case Dn:
          return I = g._init, d(
            y,
            h,
            I(g._payload),
            E
          );
      }
      if (Ko(g) || xo(g))
        return I !== null ? null : f(y, h, g, E, null);
      da(y, g);
    }
    return null;
  }
  function v(y, h, g, E, I) {
    if (typeof E == "string" && E !== "" || typeof E == "number")
      return y = y.get(g) || null, s(h, y, "" + E, I);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case ea:
          return y = y.get(E.key === null ? g : E.key) || null, l(h, y, E, I);
        case jr:
          return y = y.get(E.key === null ? g : E.key) || null, u(h, y, E, I);
        case Dn:
          var M = E._init;
          return v(y, h, g, M(E._payload), I);
      }
      if (Ko(E) || xo(E))
        return y = y.get(g) || null, f(h, y, E, I, null);
      da(h, E);
    }
    return null;
  }
  function T(y, h, g, E) {
    for (var I = null, M = null, A = h, z = h = 0, B = null; A !== null && z < g.length; z++) {
      A.index > z ? (B = A, A = null) : B = A.sibling;
      var j = d(y, A, g[z], E);
      if (j === null) {
        A === null && (A = B);
        break;
      }
      e && A && j.alternate === null && t(y, A), h = i(j, h, z), M === null ? I = j : M.sibling = j, M = j, A = B;
    }
    if (z === g.length)
      return n(y, A), pe && ur(y, z), I;
    if (A === null) {
      for (; z < g.length; z++)
        A = c(y, g[z], E), A !== null && (h = i(A, h, z), M === null ? I = A : M.sibling = A, M = A);
      return pe && ur(y, z), I;
    }
    for (A = r(y, A); z < g.length; z++)
      B = v(A, y, z, g[z], E), B !== null && (e && B.alternate !== null && A.delete(B.key === null ? z : B.key), h = i(B, h, z), M === null ? I = B : M.sibling = B, M = B);
    return e && A.forEach(function(U) {
      return t(y, U);
    }), pe && ur(y, z), I;
  }
  function w(y, h, g, E) {
    var I = xo(g);
    if (typeof I != "function")
      throw Error(O(150));
    if (g = I.call(g), g == null)
      throw Error(O(151));
    for (var M = I = null, A = h, z = h = 0, B = null, j = g.next(); A !== null && !j.done; z++, j = g.next()) {
      A.index > z ? (B = A, A = null) : B = A.sibling;
      var U = d(y, A, j.value, E);
      if (U === null) {
        A === null && (A = B);
        break;
      }
      e && A && U.alternate === null && t(y, A), h = i(U, h, z), M === null ? I = U : M.sibling = U, M = U, A = B;
    }
    if (j.done)
      return n(
        y,
        A
      ), pe && ur(y, z), I;
    if (A === null) {
      for (; !j.done; z++, j = g.next())
        j = c(y, j.value, E), j !== null && (h = i(j, h, z), M === null ? I = j : M.sibling = j, M = j);
      return pe && ur(y, z), I;
    }
    for (A = r(y, A); !j.done; z++, j = g.next())
      j = v(A, y, z, j.value, E), j !== null && (e && j.alternate !== null && A.delete(j.key === null ? z : j.key), h = i(j, h, z), M === null ? I = j : M.sibling = j, M = j);
    return e && A.forEach(function(b) {
      return t(y, b);
    }), pe && ur(y, z), I;
  }
  function L(y, h, g, E) {
    if (typeof g == "object" && g !== null && g.type === Rr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ea:
          e: {
            for (var I = g.key, M = h; M !== null; ) {
              if (M.key === I) {
                if (I = g.type, I === Rr) {
                  if (M.tag === 7) {
                    n(y, M.sibling), h = o(M, g.props.children), h.return = y, y = h;
                    break e;
                  }
                } else if (M.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Dn && up(I) === M.type) {
                  n(y, M.sibling), h = o(M, g.props), h.ref = bo(y, M, g), h.return = y, y = h;
                  break e;
                }
                n(y, M);
                break;
              } else
                t(y, M);
              M = M.sibling;
            }
            g.type === Rr ? (h = gr(g.props.children, y.mode, E, g.key), h.return = y, y = h) : (E = Ia(g.type, g.key, g.props, null, y.mode, E), E.ref = bo(y, h, g), E.return = y, y = E);
          }
          return a(y);
        case jr:
          e: {
            for (M = g.key; h !== null; ) {
              if (h.key === M)
                if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                  n(y, h.sibling), h = o(h, g.children || []), h.return = y, y = h;
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else
                t(y, h);
              h = h.sibling;
            }
            h = ql(g, y.mode, E), h.return = y, y = h;
          }
          return a(y);
        case Dn:
          return M = g._init, L(y, h, M(g._payload), E);
      }
      if (Ko(g))
        return T(y, h, g, E);
      if (xo(g))
        return w(y, h, g, E);
      da(y, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, h !== null && h.tag === 6 ? (n(y, h.sibling), h = o(h, g), h.return = y, y = h) : (n(y, h), h = Jl(g, y.mode, E), h.return = y, y = h), a(y)) : n(y, h);
  }
  return L;
}
var uo = Jh(!0), qh = Jh(!1), Ya = nr(null), Qa = null, Wr = null, Wc = null;
function Yc() {
  Wc = Wr = Qa = null;
}
function Qc(e) {
  var t = Ya.current;
  de(Ya), e._currentValue = t;
}
function Vu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function to(e, t) {
  Qa = e, Wc = Wr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (dt = !0), e.firstContext = null);
}
function Pt(e) {
  var t = e._currentValue;
  if (Wc !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Wr === null) {
      if (Qa === null)
        throw Error(O(308));
      Wr = e, Qa.dependencies = { lanes: 0, firstContext: e };
    } else
      Wr = Wr.next = e;
  return t;
}
var pr = null;
function Gc(e) {
  pr === null ? pr = [e] : pr.push(e);
}
function eg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Gc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Sn(e, r);
}
function Sn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var On = !1;
function Xc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function tg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function wn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Vn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, J & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Sn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Gc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Sn(e, n);
}
function Ea(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bc(e, n);
  }
}
function cp(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = a : i = i.next = a, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ga(e, t, n, r) {
  var o = e.updateQueue;
  On = !1;
  var i = o.firstBaseUpdate, a = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, a === null ? i = u : a.next = u, a = l;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, s = f.lastBaseUpdate, s !== a && (s === null ? f.firstBaseUpdate = u : s.next = u, f.lastBaseUpdate = l));
  }
  if (i !== null) {
    var c = o.baseState;
    a = 0, f = u = l = null, s = i;
    do {
      var d = s.lane, v = s.eventTime;
      if ((r & d) === d) {
        f !== null && (f = f.next = {
          eventTime: v,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var T = e, w = s;
          switch (d = t, v = n, w.tag) {
            case 1:
              if (T = w.payload, typeof T == "function") {
                c = T.call(v, c, d);
                break e;
              }
              c = T;
              break e;
            case 3:
              T.flags = T.flags & -65537 | 128;
            case 0:
              if (T = w.payload, d = typeof T == "function" ? T.call(v, c, d) : T, d == null)
                break e;
              c = ge({}, c, d);
              break e;
            case 2:
              On = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [s] : d.push(s));
      } else
        v = { eventTime: v, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, f === null ? (u = f = v, l = c) : f = f.next = v, a |= d;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null)
          break;
        d = s, s = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
      }
    } while (1);
    if (f === null && (l = c), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        a |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    Tr |= a, e.lanes = a, e.memoizedState = c;
  }
}
function dp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var ji = {}, un = nr(ji), yi = nr(ji), vi = nr(ji);
function mr(e) {
  if (e === ji)
    throw Error(O(174));
  return e;
}
function Jc(e, t) {
  switch (le(vi, t), le(yi, e), le(un, ji), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Mu(t, e);
  }
  de(un), le(un, t);
}
function co() {
  de(un), de(yi), de(vi);
}
function ng(e) {
  mr(vi.current);
  var t = mr(un.current), n = Mu(t, e.type);
  t !== n && (le(yi, e), le(un, n));
}
function qc(e) {
  yi.current === e && (de(un), de(yi));
}
var me = nr(0);
function Xa(e) {
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
var Vl = [];
function ed() {
  for (var e = 0; e < Vl.length; e++)
    Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var Na = Mn.ReactCurrentDispatcher, Wl = Mn.ReactCurrentBatchConfig, wr = 0, he = null, Ie = null, be = null, Ja = !1, qo = !1, wi = 0, Yw = 0;
function Ge() {
  throw Error(O(321));
}
function td(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Zt(e[n], t[n]))
      return !1;
  return !0;
}
function nd(e, t, n, r, o, i) {
  if (wr = i, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Na.current = e === null || e.memoizedState === null ? Jw : qw, e = n(r, o), qo) {
    i = 0;
    do {
      if (qo = !1, wi = 0, 25 <= i)
        throw Error(O(301));
      i += 1, be = Ie = null, t.updateQueue = null, Na.current = eT, e = n(r, o);
    } while (qo);
  }
  if (Na.current = qa, t = Ie !== null && Ie.next !== null, wr = 0, be = Ie = he = null, Ja = !1, t)
    throw Error(O(300));
  return e;
}
function rd() {
  var e = wi !== 0;
  return wi = 0, e;
}
function tn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return be === null ? he.memoizedState = be = e : be = be.next = e, be;
}
function _t() {
  if (Ie === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Ie.next;
  var t = be === null ? he.memoizedState : be.next;
  if (t !== null)
    be = t, Ie = e;
  else {
    if (e === null)
      throw Error(O(310));
    Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, be === null ? he.memoizedState = be = e : be = be.next = e;
  }
  return be;
}
function Ti(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yl(e) {
  var t = _t(), n = t.queue;
  if (n === null)
    throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Ie, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = i.next, i.next = a;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = a = null, l = null, u = i;
    do {
      var f = u.lane;
      if ((wr & f) === f)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = c, a = r) : l = l.next = c, he.lanes |= f, Tr |= f;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, Zt(r, t.memoizedState) || (dt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, he.lanes |= i, Tr |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ql(e) {
  var t = _t(), n = t.queue;
  if (n === null)
    throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    Zt(i, t.memoizedState) || (dt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function rg() {
}
function og(e, t) {
  var n = he, r = _t(), o = t(), i = !Zt(r.memoizedState, o);
  if (i && (r.memoizedState = o, dt = !0), r = r.queue, od(sg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || be !== null && be.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ai(9, ag.bind(null, n, r, o, t), void 0, null), $e === null)
      throw Error(O(349));
    wr & 30 || ig(n, t, o);
  }
  return o;
}
function ig(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ag(e, t, n, r) {
  t.value = n, t.getSnapshot = r, lg(t) && ug(e);
}
function sg(e, t, n) {
  return n(function() {
    lg(t) && ug(e);
  });
}
function lg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Zt(e, n);
  } catch {
    return !0;
  }
}
function ug(e) {
  var t = Sn(e, 1);
  t !== null && Kt(t, e, 1, -1);
}
function fp(e) {
  var t = tn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ti, lastRenderedState: e }, t.queue = e, e = e.dispatch = Xw.bind(null, he, e), [t.memoizedState, e];
}
function Ai(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function cg() {
  return _t().memoizedState;
}
function Ma(e, t, n, r) {
  var o = tn();
  he.flags |= e, o.memoizedState = Ai(1 | t, n, void 0, r === void 0 ? null : r);
}
function ks(e, t, n, r) {
  var o = _t();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ie !== null) {
    var a = Ie.memoizedState;
    if (i = a.destroy, r !== null && td(r, a.deps)) {
      o.memoizedState = Ai(t, n, i, r);
      return;
    }
  }
  he.flags |= e, o.memoizedState = Ai(1 | t, n, i, r);
}
function pp(e, t) {
  return Ma(8390656, 8, e, t);
}
function od(e, t) {
  return ks(2048, 8, e, t);
}
function dg(e, t) {
  return ks(4, 2, e, t);
}
function fg(e, t) {
  return ks(4, 4, e, t);
}
function pg(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function mg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ks(4, 4, pg.bind(null, t, e), n);
}
function id() {
}
function hg(e, t) {
  var n = _t();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && td(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function gg(e, t) {
  var n = _t();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && td(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function yg(e, t, n) {
  return wr & 21 ? (Zt(n, t) || (n = Sh(), he.lanes |= n, Tr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, dt = !0), e.memoizedState = n);
}
function Qw(e, t) {
  var n = oe;
  oe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    oe = n, Wl.transition = r;
  }
}
function vg() {
  return _t().memoizedState;
}
function Gw(e, t, n) {
  var r = Yn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, wg(e))
    Tg(t, n);
  else if (n = eg(e, t, n, r), n !== null) {
    var o = it();
    Kt(n, e, r, o), Ag(n, t, r);
  }
}
function Xw(e, t, n) {
  var r = Yn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wg(e))
    Tg(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, Zt(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Gc(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = eg(e, t, o, r), n !== null && (o = it(), Kt(n, e, r, o), Ag(n, t, r));
  }
}
function wg(e) {
  var t = e.alternate;
  return e === he || t !== null && t === he;
}
function Tg(e, t) {
  qo = Ja = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ag(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bc(e, n);
  }
}
var qa = { readContext: Pt, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useInsertionEffect: Ge, useLayoutEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useMutableSource: Ge, useSyncExternalStore: Ge, useId: Ge, unstable_isNewReconciler: !1 }, Jw = { readContext: Pt, useCallback: function(e, t) {
  return tn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Pt, useEffect: pp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ma(
    4194308,
    4,
    pg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ma(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ma(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = tn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = tn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gw.bind(null, he, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = tn();
  return e = { current: e }, t.memoizedState = e;
}, useState: fp, useDebugValue: id, useDeferredValue: function(e) {
  return tn().memoizedState = e;
}, useTransition: function() {
  var e = fp(!1), t = e[0];
  return e = Qw.bind(null, e[1]), tn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = he, o = tn();
  if (pe) {
    if (n === void 0)
      throw Error(O(407));
    n = n();
  } else {
    if (n = t(), $e === null)
      throw Error(O(349));
    wr & 30 || ig(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, pp(sg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Ai(9, ag.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = tn(), t = $e.identifierPrefix;
  if (pe) {
    var n = vn, r = yn;
    n = (r & ~(1 << 32 - Bt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Yw++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, qw = {
  readContext: Pt,
  useCallback: hg,
  useContext: Pt,
  useEffect: od,
  useImperativeHandle: mg,
  useInsertionEffect: dg,
  useLayoutEffect: fg,
  useMemo: gg,
  useReducer: Yl,
  useRef: cg,
  useState: function() {
    return Yl(Ti);
  },
  useDebugValue: id,
  useDeferredValue: function(e) {
    var t = _t();
    return yg(t, Ie.memoizedState, e);
  },
  useTransition: function() {
    var e = Yl(Ti)[0], t = _t().memoizedState;
    return [e, t];
  },
  useMutableSource: rg,
  useSyncExternalStore: og,
  useId: vg,
  unstable_isNewReconciler: !1
}, eT = { readContext: Pt, useCallback: hg, useContext: Pt, useEffect: od, useImperativeHandle: mg, useInsertionEffect: dg, useLayoutEffect: fg, useMemo: gg, useReducer: Ql, useRef: cg, useState: function() {
  return Ql(Ti);
}, useDebugValue: id, useDeferredValue: function(e) {
  var t = _t();
  return Ie === null ? t.memoizedState = e : yg(t, Ie.memoizedState, e);
}, useTransition: function() {
  var e = Ql(Ti)[0], t = _t().memoizedState;
  return [e, t];
}, useMutableSource: rg, useSyncExternalStore: og, useId: vg, unstable_isNewReconciler: !1 };
function Rt(e, t) {
  if (e && e.defaultProps) {
    t = ge({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ge({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Es = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = it(), o = Yn(e), i = wn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Vn(e, i, o), t !== null && (Kt(t, e, o, r), Ea(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = it(), o = Yn(e), i = wn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Vn(e, i, o), t !== null && (Kt(t, e, o, r), Ea(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = it(), r = Yn(e), o = wn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Vn(e, o, r), t !== null && (Kt(t, e, r, n), Ea(t, e, r));
} };
function mp(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !pi(n, r) || !pi(o, i) : !0;
}
function Sg(e, t, n) {
  var r = !1, o = Jn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Pt(i) : (o = pt(t) ? yr : et.current, r = t.contextTypes, i = (r = r != null) ? so(e, o) : Jn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Es, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function hp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Es.enqueueReplaceState(t, t.state, null);
}
function Yu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Xc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Pt(i) : (i = pt(t) ? yr : et.current, o.context = so(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Wu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Es.enqueueReplaceState(o, o.state, null), Ga(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function fo(e, t) {
  try {
    var n = "", r = t;
    do
      n += z0(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var tT = typeof WeakMap == "function" ? WeakMap : Map;
function kg(e, t, n) {
  n = wn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ts || (ts = !0, ic = r), Qu(e, t);
  }, n;
}
function Eg(e, t, n) {
  n = wn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Qu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Qu(e, t), typeof r != "function" && (Wn === null ? Wn = /* @__PURE__ */ new Set([this]) : Wn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function gp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tT();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = hT.bind(null, e, t, n), t.then(e, e));
}
function yp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vp(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wn(-1, 1), t.tag = 2, Vn(n, t, 1))), n.lanes |= 1), e);
}
var nT = Mn.ReactCurrentOwner, dt = !1;
function ot(e, t, n, r) {
  t.child = e === null ? qh(t, null, n, r) : uo(t, e.child, n, r);
}
function wp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return to(t, o), r = nd(e, t, n, r, i, o), n = rd(), e !== null && !dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kn(e, t, o)) : (pe && n && Kc(t), t.flags |= 1, ot(e, t, r, o), t.child);
}
function Tp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !pd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ng(e, t, i, r, o)) : (e = Ia(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : pi, n(a, r) && e.ref === t.ref)
      return kn(e, t, o);
  }
  return t.flags |= 1, e = Qn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ng(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (pi(i, r) && e.ref === t.ref)
      if (dt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (dt = !0);
      else
        return t.lanes = e.lanes, kn(e, t, o);
  }
  return Gu(e, t, n, r, o);
}
function Mg(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(Qr, yt), yt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(Qr, yt), yt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, le(Qr, yt), yt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, le(Qr, yt), yt |= r;
  return ot(e, t, o, n), t.child;
}
function Cg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Gu(e, t, n, r, o) {
  var i = pt(n) ? yr : et.current;
  return i = so(t, i), to(t, o), n = nd(e, t, n, r, i, o), r = rd(), e !== null && !dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kn(e, t, o)) : (pe && r && Kc(t), t.flags |= 1, ot(e, t, n, o), t.child);
}
function Ap(e, t, n, r, o) {
  if (pt(n)) {
    var i = !0;
    Za(t);
  } else
    i = !1;
  if (to(t, o), t.stateNode === null)
    Ca(e, t), Sg(t, n, r), Yu(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Pt(u) : (u = pt(n) ? yr : et.current, u = so(t, u));
    var f = n.getDerivedStateFromProps, c = typeof f == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    c || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && hp(t, a, r, u), On = !1;
    var d = t.memoizedState;
    a.state = d, Ga(t, r, a, o), l = t.memoizedState, s !== r || d !== l || ft.current || On ? (typeof f == "function" && (Wu(t, n, f, r), l = t.memoizedState), (s = On || mp(t, n, s, r, d, l, u)) ? (c || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, tg(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Rt(t.type, s), a.props = u, c = t.pendingProps, d = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = Pt(l) : (l = pt(n) ? yr : et.current, l = so(t, l));
    var v = n.getDerivedStateFromProps;
    (f = typeof v == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== c || d !== l) && hp(t, a, r, l), On = !1, d = t.memoizedState, a.state = d, Ga(t, r, a, o);
    var T = t.memoizedState;
    s !== c || d !== T || ft.current || On ? (typeof v == "function" && (Wu(t, n, v, r), T = t.memoizedState), (u = On || mp(t, n, u, r, d, T, l) || !1) ? (f || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, T, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, T, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = T), a.props = r, a.state = T, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Xu(e, t, n, r, i, o);
}
function Xu(e, t, n, r, o, i) {
  Cg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && ap(t, n, !1), kn(e, t, i);
  r = t.stateNode, nT.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = uo(t, e.child, null, i), t.child = uo(t, null, s, i)) : ot(e, t, s, i), t.memoizedState = r.state, o && ap(t, n, !0), t.child;
}
function zg(e) {
  var t = e.stateNode;
  t.pendingContext ? ip(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ip(e, t.context, !1), Jc(e, t.containerInfo);
}
function Sp(e, t, n, r, o) {
  return lo(), Vc(o), t.flags |= 256, ot(e, t, n, r), t.child;
}
var Ju = { dehydrated: null, treeContext: null, retryLane: 0 };
function qu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lg(e, t, n) {
  var r = t.pendingProps, o = me.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), le(me, o & 1), e === null)
    return Zu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Cs(a, r, 0, null), e = gr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = qu(n), t.memoizedState = Ju, e) : ad(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return rT(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Qn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Qn(s, i) : (i = gr(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? qu(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = Ju, r;
  }
  return i = e.child, e = i.sibling, r = Qn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ad(e, t) {
  return t = Cs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function fa(e, t, n, r) {
  return r !== null && Vc(r), uo(t, e.child, null, n), e = ad(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function rT(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Gl(Error(O(422))), fa(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Cs({ mode: "visible", children: r.children }, o, 0, null), i = gr(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && uo(t, e.child, null, a), t.child.memoizedState = qu(a), t.memoizedState = Ju, i);
  if (!(t.mode & 1))
    return fa(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(O(419)), r = Gl(i, r, void 0), fa(e, t, a, r);
  }
  if (s = (a & e.childLanes) !== 0, dt || s) {
    if (r = $e, r !== null) {
      switch (a & -a) {
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
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Sn(e, o), Kt(r, e, o, -1));
    }
    return fd(), r = Gl(Error(O(421))), fa(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gT.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Tt = Zn(o.nextSibling), At = t, pe = !0, Ht = null, e !== null && (Lt[It++] = yn, Lt[It++] = vn, Lt[It++] = vr, yn = e.id, vn = e.overflow, vr = t), t = ad(t, r.children), t.flags |= 4096, t);
}
function kp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vu(e.return, t, n);
}
function Xl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Ig(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ot(e, t, r.children, n), r = me.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && kp(e, n, t);
          else if (e.tag === 19)
            kp(e, n, t);
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
  if (le(me, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Xa(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Xl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Xa(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Xl(t, !0, n, null, i);
        break;
      case "together":
        Xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ca(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Tr |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = Qn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Qn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function oT(e, t, n) {
  switch (t.tag) {
    case 3:
      zg(t), lo();
      break;
    case 5:
      ng(t);
      break;
    case 1:
      pt(t.type) && Za(t);
      break;
    case 4:
      Jc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      le(Ya, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (le(me, me.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Lg(e, t, n) : (le(me, me.current & 1), e = kn(e, t, n), e !== null ? e.sibling : null);
      le(me, me.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Ig(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), le(me, me.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Mg(e, t, n);
  }
  return kn(e, t, n);
}
var xg, ec, Dg, Og;
xg = function(e, t) {
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
ec = function() {
};
Dg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, mr(un.current);
    var i = null;
    switch (n) {
      case "input":
        o = Su(e, o), r = Su(e, r), i = [];
        break;
      case "select":
        o = ge({}, o, { value: void 0 }), r = ge({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Nu(e, o), r = Nu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ba);
    }
    Cu(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ai.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null))
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
            for (a in l)
              l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), n[a] = l[a]);
          } else
            n || (i || (i = []), i.push(
              u,
              n
            )), n = l;
        else
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ai.hasOwnProperty(u) ? (l != null && u === "onScroll" && ce("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Og = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $o(e, t) {
  if (!pe)
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
function Xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function iT(e, t, n) {
  var r = t.pendingProps;
  switch (Zc(t), t.tag) {
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
      return Xe(t), null;
    case 1:
      return pt(t.type) && Ka(), Xe(t), null;
    case 3:
      return r = t.stateNode, co(), de(ft), de(et), ed(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ca(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ht !== null && (lc(Ht), Ht = null))), ec(e, t), Xe(t), null;
    case 5:
      qc(t);
      var o = mr(vi.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Dg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(O(166));
          return Xe(t), null;
        }
        if (e = mr(un.current), ca(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[an] = t, r[gi] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Vo.length; o++)
                ce(Vo[o], r);
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
              Df(r, i), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ce("invalid", r);
              break;
            case "textarea":
              Pf(r, i), ce("invalid", r);
          }
          Cu(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ua(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ua(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : ai.hasOwnProperty(a) && s != null && a === "onScroll" && ce("scroll", r);
            }
          switch (n) {
            case "input":
              ta(r), Of(r, i, !0);
              break;
            case "textarea":
              ta(r), _f(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ba);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = sh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[an] = t, e[gi] = r, xg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = zu(n, r), n) {
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
                for (o = 0; o < Vo.length; o++)
                  ce(Vo[o], e);
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
                Df(e, r), o = Su(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ge({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                Pf(e, r), o = Nu(e, r), ce("invalid", e);
                break;
              default:
                o = r;
            }
            Cu(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? ch(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && lh(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && si(e, l) : typeof l == "number" && si(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ai.hasOwnProperty(i) ? l != null && i === "onScroll" && ce("scroll", e) : l != null && Ic(e, i, l, a));
              }
            switch (n) {
              case "input":
                ta(e), Of(e, r, !1);
                break;
              case "textarea":
                ta(e), _f(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Xr(e, !!r.multiple, i, !1) : r.defaultValue != null && Xr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ba);
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
      return Xe(t), null;
    case 6:
      if (e && t.stateNode != null)
        Og(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(O(166));
        if (n = mr(vi.current), mr(un.current), ca(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[an] = t, (i = r.nodeValue !== n) && (e = At, e !== null))
            switch (e.tag) {
              case 3:
                ua(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ua(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[an] = t, t.stateNode = r;
      }
      return Xe(t), null;
    case 13:
      if (de(me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (pe && Tt !== null && t.mode & 1 && !(t.flags & 128))
          Xh(), lo(), t.flags |= 98560, i = !1;
        else if (i = ca(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(O(317));
            i[an] = t;
          } else
            lo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Xe(t), i = !1;
        } else
          Ht !== null && (lc(Ht), Ht = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || me.current & 1 ? xe === 0 && (xe = 3) : fd())), t.updateQueue !== null && (t.flags |= 4), Xe(t), null);
    case 4:
      return co(), ec(e, t), e === null && mi(t.stateNode.containerInfo), Xe(t), null;
    case 10:
      return Qc(t.type._context), Xe(t), null;
    case 17:
      return pt(t.type) && Ka(), Xe(t), null;
    case 19:
      if (de(me), i = t.memoizedState, i === null)
        return Xe(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          $o(i, !1);
        else {
          if (xe !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Xa(e), a !== null) {
                for (t.flags |= 128, $o(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return le(me, me.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ee() > po && (t.flags |= 128, r = !0, $o(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Xa(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), $o(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !pe)
              return Xe(t), null;
          } else
            2 * Ee() - i.renderingStartTime > po && n !== 1073741824 && (t.flags |= 128, r = !0, $o(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ee(), t.sibling = null, n = me.current, le(me, r ? n & 1 | 2 : n & 1), t) : (Xe(t), null);
    case 22:
    case 23:
      return dd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? yt & 1073741824 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function aT(e, t) {
  switch (Zc(t), t.tag) {
    case 1:
      return pt(t.type) && Ka(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return co(), de(ft), de(et), ed(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return qc(t), null;
    case 13:
      if (de(me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(O(340));
        lo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return de(me), null;
    case 4:
      return co(), null;
    case 10:
      return Qc(t.type._context), null;
    case 22:
    case 23:
      return dd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pa = !1, qe = !1, sT = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function Yr(e, t) {
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
function tc(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var Ep = !1;
function lT(e, t) {
  if (ju = Ua, e = jh(), Bc(e)) {
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
          var a = 0, s = -1, l = -1, u = 0, f = 0, c = e, d = null;
          t:
            for (; ; ) {
              for (var v; c !== n || o !== 0 && c.nodeType !== 3 || (s = a + o), c !== i || r !== 0 && c.nodeType !== 3 || (l = a + r), c.nodeType === 3 && (a += c.nodeValue.length), (v = c.firstChild) !== null; )
                d = c, c = v;
              for (; ; ) {
                if (c === e)
                  break t;
                if (d === n && ++u === o && (s = a), d === i && ++f === r && (l = a), (v = c.nextSibling) !== null)
                  break;
                c = d, d = c.parentNode;
              }
              c = v;
            }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Ru = { focusedElem: e, selectionRange: n }, Ua = !1, R = t; R !== null; )
    if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, R = e;
    else
      for (; R !== null; ) {
        t = R;
        try {
          var T = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (T !== null) {
                  var w = T.memoizedProps, L = T.memoizedState, y = t.stateNode, h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Rt(t.type, w), L);
                  y.__reactInternalSnapshotBeforeUpdate = h;
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
                throw Error(O(163));
            }
        } catch (E) {
          ke(t, t.return, E);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, R = e;
          break;
        }
        R = t.return;
      }
  return T = Ep, Ep = !1, T;
}
function ei(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && tc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ns(e, t) {
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
function nc(e) {
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
function Pg(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Pg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[an], delete t[gi], delete t[Fu], delete t[Kw], delete t[Zw])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function _g(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Np(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || _g(e.return))
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
function rc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ba));
  else if (r !== 4 && (e = e.child, e !== null))
    for (rc(e, t, n), e = e.sibling; e !== null; )
      rc(e, t, n), e = e.sibling;
}
function oc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (oc(e, t, n), e = e.sibling; e !== null; )
      oc(e, t, n), e = e.sibling;
}
var He = null, Ut = !1;
function In(e, t, n) {
  for (n = n.child; n !== null; )
    bg(e, t, n), n = n.sibling;
}
function bg(e, t, n) {
  if (ln && typeof ln.onCommitFiberUnmount == "function")
    try {
      ln.onCommitFiberUnmount(ys, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      qe || Yr(n, t);
    case 6:
      var r = He, o = Ut;
      He = null, In(e, t, n), He = r, Ut = o, He !== null && (Ut ? (e = He, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : He.removeChild(n.stateNode));
      break;
    case 18:
      He !== null && (Ut ? (e = He, n = n.stateNode, e.nodeType === 8 ? Kl(e.parentNode, n) : e.nodeType === 1 && Kl(e, n), di(e)) : Kl(He, n.stateNode));
      break;
    case 4:
      r = He, o = Ut, He = n.stateNode.containerInfo, Ut = !0, In(e, t, n), He = r, Ut = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && tc(n, t, a), o = o.next;
        } while (o !== r);
      }
      In(e, t, n);
      break;
    case 1:
      if (!qe && (Yr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          ke(n, t, s);
        }
      In(e, t, n);
      break;
    case 21:
      In(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (qe = (r = qe) || n.memoizedState !== null, In(e, t, n), qe = r) : In(e, t, n);
      break;
    default:
      In(e, t, n);
  }
}
function Mp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sT()), t.forEach(function(r) {
      var o = yT.bind(null, e, r);
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
        var i = e, a = t, s = a;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                He = s.stateNode, Ut = !1;
                break e;
              case 3:
                He = s.stateNode.containerInfo, Ut = !0;
                break e;
              case 4:
                He = s.stateNode.containerInfo, Ut = !0;
                break e;
            }
            s = s.return;
          }
        if (He === null)
          throw Error(O(160));
        bg(i, a, o), He = null, Ut = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        ke(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      $g(t, e), t = t.sibling;
}
function $g(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (jt(t, e), Gt(e), r & 4) {
        try {
          ei(3, e, e.return), Ns(3, e);
        } catch (w) {
          ke(e, e.return, w);
        }
        try {
          ei(5, e, e.return);
        } catch (w) {
          ke(e, e.return, w);
        }
      }
      break;
    case 1:
      jt(t, e), Gt(e), r & 512 && n !== null && Yr(n, n.return);
      break;
    case 5:
      if (jt(t, e), Gt(e), r & 512 && n !== null && Yr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          si(o, "");
        } catch (w) {
          ke(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && ih(o, i), zu(s, a);
            var u = zu(s, i);
            for (a = 0; a < l.length; a += 2) {
              var f = l[a], c = l[a + 1];
              f === "style" ? ch(o, c) : f === "dangerouslySetInnerHTML" ? lh(o, c) : f === "children" ? si(o, c) : Ic(o, f, c, u);
            }
            switch (s) {
              case "input":
                ku(o, i);
                break;
              case "textarea":
                ah(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null ? Xr(o, !!i.multiple, v, !1) : d !== !!i.multiple && (i.defaultValue != null ? Xr(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Xr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[gi] = i;
          } catch (w) {
            ke(e, e.return, w);
          }
      }
      break;
    case 6:
      if (jt(t, e), Gt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(O(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          ke(e, e.return, w);
        }
      }
      break;
    case 3:
      if (jt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          di(t.containerInfo);
        } catch (w) {
          ke(e, e.return, w);
        }
      break;
    case 4:
      jt(t, e), Gt(e);
      break;
    case 13:
      jt(t, e), Gt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ud = Ee())), r & 4 && Mp(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (qe = (u = qe) || f, jt(t, e), qe = u) : jt(t, e), Gt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
          for (R = e, f = e.child; f !== null; ) {
            for (c = R = f; R !== null; ) {
              switch (d = R, v = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ei(4, d, d.return);
                  break;
                case 1:
                  Yr(d, d.return);
                  var T = d.stateNode;
                  if (typeof T.componentWillUnmount == "function") {
                    r = d, n = d.return;
                    try {
                      t = r, T.props = t.memoizedProps, T.state = t.memoizedState, T.componentWillUnmount();
                    } catch (w) {
                      ke(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Yr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    zp(c);
                    continue;
                  }
              }
              v !== null ? (v.return = d, R = v) : zp(c);
            }
            f = f.sibling;
          }
        e:
          for (f = null, c = e; ; ) {
            if (c.tag === 5) {
              if (f === null) {
                f = c;
                try {
                  o = c.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = c.stateNode, l = c.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = uh("display", a));
                } catch (w) {
                  ke(e, e.return, w);
                }
              }
            } else if (c.tag === 6) {
              if (f === null)
                try {
                  c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                } catch (w) {
                  ke(e, e.return, w);
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
      jt(t, e), Gt(e), r & 4 && Mp(e);
      break;
    case 21:
      break;
    default:
      jt(
        t,
        e
      ), Gt(e);
  }
}
function Gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_g(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (si(o, ""), r.flags &= -33);
          var i = Np(e);
          oc(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = Np(e);
          rc(e, s, a);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      ke(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function uT(e, t, n) {
  R = e, jg(e);
}
function jg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || pa;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || qe;
        s = pa;
        var u = qe;
        if (pa = a, (qe = l) && !u)
          for (R = o; R !== null; )
            a = R, l = a.child, a.tag === 22 && a.memoizedState !== null ? Lp(o) : l !== null ? (l.return = a, R = l) : Lp(o);
        for (; i !== null; )
          R = i, jg(i), i = i.sibling;
        R = o, pa = s, qe = u;
      }
      Cp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, R = i) : Cp(e);
  }
}
function Cp(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || Ns(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !qe)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && dp(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                dp(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                    c !== null && di(c);
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
              throw Error(O(163));
          }
        qe || t.flags & 512 && nc(t);
      } catch (d) {
        ke(t, t.return, d);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function zp(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function Lp(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ns(4, t);
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
            nc(t);
          } catch (l) {
            ke(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            nc(t);
          } catch (l) {
            ke(t, a, l);
          }
      }
    } catch (l) {
      ke(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, R = s;
      break;
    }
    R = t.return;
  }
}
var cT = Math.ceil, es = Mn.ReactCurrentDispatcher, sd = Mn.ReactCurrentOwner, Ot = Mn.ReactCurrentBatchConfig, J = 0, $e = null, ze = null, Ze = 0, yt = 0, Qr = nr(0), xe = 0, Si = null, Tr = 0, Ms = 0, ld = 0, ti = null, ct = null, ud = 0, po = 1 / 0, pn = null, ts = !1, ic = null, Wn = null, ma = !1, jn = null, ns = 0, ni = 0, ac = null, za = -1, La = 0;
function it() {
  return J & 6 ? Ee() : za !== -1 ? za : za = Ee();
}
function Yn(e) {
  return e.mode & 1 ? J & 2 && Ze !== 0 ? Ze & -Ze : Ww.transition !== null ? (La === 0 && (La = Sh()), La) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lh(e.type)), e) : 1;
}
function Kt(e, t, n, r) {
  if (50 < ni)
    throw ni = 0, ac = null, Error(O(185));
  _i(e, n, r), (!(J & 2) || e !== $e) && (e === $e && (!(J & 2) && (Ms |= n), xe === 4 && _n(e, Ze)), mt(e, r), n === 1 && J === 0 && !(t.mode & 1) && (po = Ee() + 500, Ss && rr()));
}
function mt(e, t) {
  var n = e.callbackNode;
  W0(e, t);
  var r = Ra(e, e === $e ? Ze : 0);
  if (r === 0)
    n !== null && jf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && jf(n), t === 1)
      e.tag === 0 ? Vw(Ip.bind(null, e)) : Yh(Ip.bind(null, e)), Fw(function() {
        !(J & 6) && rr();
      }), n = null;
    else {
      switch (kh(r)) {
        case 1:
          n = _c;
          break;
        case 4:
          n = Th;
          break;
        case 16:
          n = ja;
          break;
        case 536870912:
          n = Ah;
          break;
        default:
          n = ja;
      }
      n = Vg(n, Rg.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Rg(e, t) {
  if (za = -1, La = 0, J & 6)
    throw Error(O(327));
  var n = e.callbackNode;
  if (no() && e.callbackNode !== n)
    return null;
  var r = Ra(e, e === $e ? Ze : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = rs(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var i = Hg();
    ($e !== e || Ze !== t) && (pn = null, po = Ee() + 500, hr(e, t));
    do
      try {
        pT();
        break;
      } catch (s) {
        Ug(e, s);
      }
    while (1);
    Yc(), es.current = i, J = o, ze !== null ? t = 0 : ($e = null, Ze = 0, t = xe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Ou(e), o !== 0 && (r = o, t = sc(e, o))), t === 1)
      throw n = Si, hr(e, 0), _n(e, r), mt(e, Ee()), n;
    if (t === 6)
      _n(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !dT(o) && (t = rs(e, r), t === 2 && (i = Ou(e), i !== 0 && (r = i, t = sc(e, i))), t === 1))
        throw n = Si, hr(e, 0), _n(e, r), mt(e, Ee()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          cr(e, ct, pn);
          break;
        case 3:
          if (_n(e, r), (r & 130023424) === r && (t = ud + 500 - Ee(), 10 < t)) {
            if (Ra(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              it(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Hu(cr.bind(null, e, ct, pn), t);
            break;
          }
          cr(e, ct, pn);
          break;
        case 4:
          if (_n(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Bt(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cT(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Hu(cr.bind(null, e, ct, pn), r);
            break;
          }
          cr(e, ct, pn);
          break;
        case 5:
          cr(e, ct, pn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return mt(e, Ee()), e.callbackNode === n ? Rg.bind(null, e) : null;
}
function sc(e, t) {
  var n = ti;
  return e.current.memoizedState.isDehydrated && (hr(e, t).flags |= 256), e = rs(e, t), e !== 2 && (t = ct, ct = n, t !== null && lc(t)), e;
}
function lc(e) {
  ct === null ? ct = e : ct.push.apply(ct, e);
}
function dT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Zt(i(), o))
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
  for (t &= ~ld, t &= ~Ms, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Bt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ip(e) {
  if (J & 6)
    throw Error(O(327));
  no();
  var t = Ra(e, 0);
  if (!(t & 1))
    return mt(e, Ee()), null;
  var n = rs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ou(e);
    r !== 0 && (t = r, n = sc(e, r));
  }
  if (n === 1)
    throw n = Si, hr(e, 0), _n(e, t), mt(e, Ee()), n;
  if (n === 6)
    throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, cr(e, ct, pn), mt(e, Ee()), null;
}
function cd(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    J = n, J === 0 && (po = Ee() + 500, Ss && rr());
  }
}
function Ar(e) {
  jn !== null && jn.tag === 0 && !(J & 6) && no();
  var t = J;
  J |= 1;
  var n = Ot.transition, r = oe;
  try {
    if (Ot.transition = null, oe = 1, e)
      return e();
  } finally {
    oe = r, Ot.transition = n, J = t, !(J & 6) && rr();
  }
}
function dd() {
  yt = Qr.current, de(Qr);
}
function hr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Hw(n)), ze !== null)
    for (n = ze.return; n !== null; ) {
      var r = n;
      switch (Zc(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ka();
          break;
        case 3:
          co(), de(ft), de(et), ed();
          break;
        case 5:
          qc(r);
          break;
        case 4:
          co();
          break;
        case 13:
          de(me);
          break;
        case 19:
          de(me);
          break;
        case 10:
          Qc(r.type._context);
          break;
        case 22:
        case 23:
          dd();
      }
      n = n.return;
    }
  if ($e = e, ze = e = Qn(e.current, null), Ze = yt = t, xe = 0, Si = null, ld = Ms = Tr = 0, ct = ti = null, pr !== null) {
    for (t = 0; t < pr.length; t++)
      if (n = pr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, r.next = a;
        }
        n.pending = r;
      }
    pr = null;
  }
  return e;
}
function Ug(e, t) {
  do {
    var n = ze;
    try {
      if (Yc(), Na.current = qa, Ja) {
        for (var r = he.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ja = !1;
      }
      if (wr = 0, be = Ie = he = null, qo = !1, wi = 0, sd.current = null, n === null || n.return === null) {
        xe = 1, Si = t, ze = null;
        break;
      }
      e: {
        var i = e, a = n.return, s = n, l = t;
        if (t = Ze, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, f = s, c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d ? (f.updateQueue = d.updateQueue, f.memoizedState = d.memoizedState, f.lanes = d.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var v = yp(a);
          if (v !== null) {
            v.flags &= -257, vp(v, a, s, i, t), v.mode & 1 && gp(i, u, t), t = v, l = u;
            var T = t.updateQueue;
            if (T === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(l), t.updateQueue = w;
            } else
              T.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              gp(i, u, t), fd();
              break e;
            }
            l = Error(O(426));
          }
        } else if (pe && s.mode & 1) {
          var L = yp(a);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), vp(L, a, s, i, t), Vc(fo(l, s));
            break e;
          }
        }
        i = l = fo(l, s), xe !== 4 && (xe = 2), ti === null ? ti = [i] : ti.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = kg(i, l, t);
              cp(i, y);
              break e;
            case 1:
              s = l;
              var h = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Wn === null || !Wn.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = Eg(i, s, t);
                cp(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Bg(n);
    } catch (I) {
      t = I, ze === n && n !== null && (ze = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Hg() {
  var e = es.current;
  return es.current = qa, e === null ? qa : e;
}
function fd() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4), $e === null || !(Tr & 268435455) && !(Ms & 268435455) || _n($e, Ze);
}
function rs(e, t) {
  var n = J;
  J |= 2;
  var r = Hg();
  ($e !== e || Ze !== t) && (pn = null, hr(e, t));
  do
    try {
      fT();
      break;
    } catch (o) {
      Ug(e, o);
    }
  while (1);
  if (Yc(), J = n, es.current = r, ze !== null)
    throw Error(O(261));
  return $e = null, Ze = 0, xe;
}
function fT() {
  for (; ze !== null; )
    Fg(ze);
}
function pT() {
  for (; ze !== null && !j0(); )
    Fg(ze);
}
function Fg(e) {
  var t = Zg(e.alternate, e, yt);
  e.memoizedProps = e.pendingProps, t === null ? Bg(e) : ze = t, sd.current = null;
}
function Bg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = aT(n, t), n !== null) {
        n.flags &= 32767, ze = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        xe = 6, ze = null;
        return;
      }
    } else if (n = iT(n, t, yt), n !== null) {
      ze = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ze = t;
      return;
    }
    ze = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function cr(e, t, n) {
  var r = oe, o = Ot.transition;
  try {
    Ot.transition = null, oe = 1, mT(e, t, n, r);
  } finally {
    Ot.transition = o, oe = r;
  }
  return null;
}
function mT(e, t, n, r) {
  do
    no();
  while (jn !== null);
  if (J & 6)
    throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Y0(e, i), e === $e && (ze = $e = null, Ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ma || (ma = !0, Vg(ja, function() {
    return no(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ot.transition, Ot.transition = null;
    var a = oe;
    oe = 1;
    var s = J;
    J |= 4, sd.current = null, lT(e, n), $g(n, e), Pw(Ru), Ua = !!ju, Ru = ju = null, e.current = n, uT(n), R0(), J = s, oe = a, Ot.transition = i;
  } else
    e.current = n;
  if (ma && (ma = !1, jn = e, ns = o), i = e.pendingLanes, i === 0 && (Wn = null), F0(n.stateNode), mt(e, Ee()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ts)
    throw ts = !1, e = ic, ic = null, e;
  return ns & 1 && e.tag !== 0 && no(), i = e.pendingLanes, i & 1 ? e === ac ? ni++ : (ni = 0, ac = e) : ni = 0, rr(), null;
}
function no() {
  if (jn !== null) {
    var e = kh(ns), t = Ot.transition, n = oe;
    try {
      if (Ot.transition = null, oe = 16 > e ? 16 : e, jn === null)
        var r = !1;
      else {
        if (e = jn, jn = null, ns = 0, J & 6)
          throw Error(O(331));
        var o = J;
        for (J |= 4, R = e.current; R !== null; ) {
          var i = R, a = i.child;
          if (R.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (R = u; R !== null; ) {
                  var f = R;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null)
                    c.return = f, R = c;
                  else
                    for (; R !== null; ) {
                      f = R;
                      var d = f.sibling, v = f.return;
                      if (Pg(f), f === u) {
                        R = null;
                        break;
                      }
                      if (d !== null) {
                        d.return = v, R = d;
                        break;
                      }
                      R = v;
                    }
                }
              }
              var T = i.alternate;
              if (T !== null) {
                var w = T.child;
                if (w !== null) {
                  T.child = null;
                  do {
                    var L = w.sibling;
                    w.sibling = null, w = L;
                  } while (w !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, R = a;
          else
            e:
              for (; R !== null; ) {
                if (i = R, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(9, i, i.return);
                  }
                var y = i.sibling;
                if (y !== null) {
                  y.return = i.return, R = y;
                  break e;
                }
                R = i.return;
              }
        }
        var h = e.current;
        for (R = h; R !== null; ) {
          a = R;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null)
            g.return = a, R = g;
          else
            e:
              for (a = h; R !== null; ) {
                if (s = R, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(9, s);
                    }
                  } catch (I) {
                    ke(s, s.return, I);
                  }
                if (s === a) {
                  R = null;
                  break e;
                }
                var E = s.sibling;
                if (E !== null) {
                  E.return = s.return, R = E;
                  break e;
                }
                R = s.return;
              }
        }
        if (J = o, rr(), ln && typeof ln.onPostCommitFiberRoot == "function")
          try {
            ln.onPostCommitFiberRoot(ys, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      oe = n, Ot.transition = t;
    }
  }
  return !1;
}
function xp(e, t, n) {
  t = fo(n, t), t = kg(e, t, 1), e = Vn(e, t, 1), t = it(), e !== null && (_i(e, 1, t), mt(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3)
    xp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wn === null || !Wn.has(r))) {
          e = fo(n, e), e = Eg(t, e, 1), t = Vn(t, e, 1), e = it(), t !== null && (_i(t, 1, e), mt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hT(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = it(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (Ze & n) === n && (xe === 4 || xe === 3 && (Ze & 130023424) === Ze && 500 > Ee() - ud ? hr(e, 0) : ld |= n), mt(e, t);
}
function Kg(e, t) {
  t === 0 && (e.mode & 1 ? (t = oa, oa <<= 1, !(oa & 130023424) && (oa = 4194304)) : t = 1);
  var n = it();
  e = Sn(e, t), e !== null && (_i(e, t, n), mt(e, n));
}
function gT(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Kg(e, n);
}
function yT(e, t) {
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
      throw Error(O(314));
  }
  r !== null && r.delete(t), Kg(e, n);
}
var Zg;
Zg = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ft.current)
      dt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return dt = !1, oT(e, t, n);
      dt = !!(e.flags & 131072);
    }
  else
    dt = !1, pe && t.flags & 1048576 && Qh(t, Wa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ca(e, t), e = t.pendingProps;
      var o = so(t, et.current);
      to(t, n), o = nd(null, t, r, e, o, n);
      var i = rd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pt(r) ? (i = !0, Za(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Xc(t), o.updater = Es, t.stateNode = o, o._reactInternals = t, Yu(t, r, e, n), t = Xu(null, t, r, !0, i, n)) : (t.tag = 0, pe && i && Kc(t), ot(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ca(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = wT(r), e = Rt(r, e), o) {
          case 0:
            t = Gu(null, t, r, e, n);
            break e;
          case 1:
            t = Ap(null, t, r, e, n);
            break e;
          case 11:
            t = wp(null, t, r, e, n);
            break e;
          case 14:
            t = Tp(null, t, r, Rt(r.type, e), n);
            break e;
        }
        throw Error(O(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Rt(r, o), Gu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Rt(r, o), Ap(e, t, r, o, n);
    case 3:
      e: {
        if (zg(t), e === null)
          throw Error(O(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, tg(e, t), Ga(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = fo(Error(O(423)), t), t = Sp(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = fo(Error(O(424)), t), t = Sp(e, t, r, n, o);
            break e;
          } else
            for (Tt = Zn(t.stateNode.containerInfo.firstChild), At = t, pe = !0, Ht = null, n = qh(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (lo(), r === o) {
            t = kn(e, t, n);
            break e;
          }
          ot(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ng(t), e === null && Zu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, Uu(r, o) ? a = null : i !== null && Uu(r, i) && (t.flags |= 32), Cg(e, t), ot(e, t, a, n), t.child;
    case 6:
      return e === null && Zu(t), null;
    case 13:
      return Lg(e, t, n);
    case 4:
      return Jc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = uo(t, null, r, n) : ot(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Rt(r, o), wp(e, t, r, o, n);
    case 7:
      return ot(e, t, t.pendingProps, n), t.child;
    case 8:
      return ot(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ot(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, le(Ya, r._currentValue), r._currentValue = a, i !== null)
          if (Zt(i.value, a)) {
            if (i.children === o.children && !ft.current) {
              t = kn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      l = wn(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? l.next = l : (l.next = f.next, f.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Vu(
                      i.return,
                      n,
                      t
                    ), s.lanes |= n;
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10)
                a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (a = i.return, a === null)
                  throw Error(O(341));
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Vu(a, n, t), a = i.sibling;
              } else
                a = i.child;
              if (a !== null)
                a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (i = a.sibling, i !== null) {
                    i.return = a.return, a = i;
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        ot(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, to(t, n), o = Pt(o), r = r(o), t.flags |= 1, ot(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Rt(r, t.pendingProps), o = Rt(r.type, o), Tp(e, t, r, o, n);
    case 15:
      return Ng(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Rt(r, o), Ca(e, t), t.tag = 1, pt(r) ? (e = !0, Za(t)) : e = !1, to(t, n), Sg(t, r, o), Yu(t, r, o, n), Xu(null, t, r, !0, e, n);
    case 19:
      return Ig(e, t, n);
    case 22:
      return Mg(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Vg(e, t) {
  return wh(e, t);
}
function vT(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Dt(e, t, n, r) {
  return new vT(e, t, n, r);
}
function pd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function wT(e) {
  if (typeof e == "function")
    return pd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Dc)
      return 11;
    if (e === Oc)
      return 14;
  }
  return 2;
}
function Qn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ia(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    pd(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case Rr:
          return gr(n.children, o, i, t);
        case xc:
          a = 8, o |= 8;
          break;
        case vu:
          return e = Dt(12, n, t, o | 2), e.elementType = vu, e.lanes = i, e;
        case wu:
          return e = Dt(13, n, t, o), e.elementType = wu, e.lanes = i, e;
        case Tu:
          return e = Dt(19, n, t, o), e.elementType = Tu, e.lanes = i, e;
        case nh:
          return Cs(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case eh:
                a = 10;
                break e;
              case th:
                a = 9;
                break e;
              case Dc:
                a = 11;
                break e;
              case Oc:
                a = 14;
                break e;
              case Dn:
                a = 16, r = null;
                break e;
            }
          throw Error(O(130, e == null ? e : typeof e, ""));
      }
  return t = Dt(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function gr(e, t, n, r) {
  return e = Dt(7, e, r, t), e.lanes = n, e;
}
function Cs(e, t, n, r) {
  return e = Dt(22, e, r, t), e.elementType = nh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Jl(e, t, n) {
  return e = Dt(6, e, null, t), e.lanes = n, e;
}
function ql(e, t, n) {
  return t = Dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function TT(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ol(0), this.expirationTimes = Ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ol(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function md(e, t, n, r, o, i, a, s, l) {
  return e = new TT(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Dt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xc(i), e;
}
function AT(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Wg(e) {
  if (!e)
    return Jn;
  e = e._reactInternals;
  e: {
    if (Nr(e) !== e || e.tag !== 1)
      throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pt(n))
      return Wh(e, n, t);
  }
  return t;
}
function Yg(e, t, n, r, o, i, a, s, l) {
  return e = md(n, r, !0, e, o, i, a, s, l), e.context = Wg(null), n = e.current, r = it(), o = Yn(n), i = wn(r, o), i.callback = t ?? null, Vn(n, i, o), e.current.lanes = o, _i(e, o, r), mt(e, r), e;
}
function zs(e, t, n, r) {
  var o = t.current, i = it(), a = Yn(o);
  return n = Wg(n), t.context === null ? t.context = n : t.pendingContext = n, t = wn(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vn(o, t, a), e !== null && (Kt(e, o, a, i), Ea(e, o, a)), a;
}
function os(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hd(e, t) {
  Dp(e, t), (e = e.alternate) && Dp(e, t);
}
function ST() {
  return null;
}
var Qg = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function gd(e) {
  this._internalRoot = e;
}
Ls.prototype.render = gd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(O(409));
  zs(e, t, null, null);
};
Ls.prototype.unmount = gd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ar(function() {
      zs(null, e, null, null);
    }), t[An] = null;
  }
};
function Ls(e) {
  this._internalRoot = e;
}
Ls.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Mh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pn.length && t !== 0 && t < Pn[n].priority; n++)
      ;
    Pn.splice(n, 0, e), n === 0 && zh(e);
  }
};
function yd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Is(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Op() {
}
function kT(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = os(a);
        i.call(u);
      };
    }
    var a = Yg(t, r, e, 0, null, !1, !1, "", Op);
    return e._reactRootContainer = a, e[An] = a.current, mi(e.nodeType === 8 ? e.parentNode : e), Ar(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = os(l);
      s.call(u);
    };
  }
  var l = md(e, 0, !1, null, null, !1, !1, "", Op);
  return e._reactRootContainer = l, e[An] = l.current, mi(e.nodeType === 8 ? e.parentNode : e), Ar(function() {
    zs(t, l, n, r);
  }), l;
}
function xs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = os(a);
        s.call(l);
      };
    }
    zs(t, a, e, o);
  } else
    a = kT(n, t, e, o, r);
  return os(a);
}
Eh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zo(t.pendingLanes);
        n !== 0 && (bc(t, n | 1), mt(t, Ee()), !(J & 6) && (po = Ee() + 500, rr()));
      }
      break;
    case 13:
      Ar(function() {
        var r = Sn(e, 1);
        if (r !== null) {
          var o = it();
          Kt(r, e, 1, o);
        }
      }), hd(e, 1);
  }
};
$c = function(e) {
  if (e.tag === 13) {
    var t = Sn(e, 134217728);
    if (t !== null) {
      var n = it();
      Kt(t, e, 134217728, n);
    }
    hd(e, 134217728);
  }
};
Nh = function(e) {
  if (e.tag === 13) {
    var t = Yn(e), n = Sn(e, t);
    if (n !== null) {
      var r = it();
      Kt(n, e, t, r);
    }
    hd(e, t);
  }
};
Mh = function() {
  return oe;
};
Ch = function(e, t) {
  var n = oe;
  try {
    return oe = e, t();
  } finally {
    oe = n;
  }
};
Iu = function(e, t, n) {
  switch (t) {
    case "input":
      if (ku(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = As(r);
            if (!o)
              throw Error(O(90));
            oh(r), ku(r, o);
          }
        }
      }
      break;
    case "textarea":
      ah(e, n);
      break;
    case "select":
      t = n.value, t != null && Xr(e, !!n.multiple, t, !1);
  }
};
ph = cd;
mh = Ar;
var ET = { usingClientEntryPoint: !1, Events: [$i, Br, As, dh, fh, cd] }, jo = { findFiberByHostInstance: fr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, NT = { bundleType: jo.bundleType, version: jo.version, rendererPackageName: jo.rendererPackageName, rendererConfig: jo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Mn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = yh(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jo.findFiberByHostInstance || ST, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ha = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ha.isDisabled && ha.supportsFiber)
    try {
      ys = ha.inject(NT), ln = ha;
    } catch {
    }
}
Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ET;
Et.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!yd(t))
    throw Error(O(200));
  return AT(e, t, null, n);
};
Et.createRoot = function(e, t) {
  if (!yd(e))
    throw Error(O(299));
  var n = !1, r = "", o = Qg;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = md(e, 1, !1, null, null, n, !1, r, o), e[An] = t.current, mi(e.nodeType === 8 ? e.parentNode : e), new gd(t);
};
Et.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = yh(t), e = e === null ? null : e.stateNode, e;
};
Et.flushSync = function(e) {
  return Ar(e);
};
Et.hydrate = function(e, t, n) {
  if (!Is(t))
    throw Error(O(200));
  return xs(null, e, t, !0, n);
};
Et.hydrateRoot = function(e, t, n) {
  if (!yd(e))
    throw Error(O(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = Qg;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Yg(t, null, e, 1, n ?? null, o, !1, i, a), e[An] = t.current, mi(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Ls(t);
};
Et.render = function(e, t, n) {
  if (!Is(t))
    throw Error(O(200));
  return xs(null, e, t, !1, n);
};
Et.unmountComponentAtNode = function(e) {
  if (!Is(e))
    throw Error(O(40));
  return e._reactRootContainer ? (Ar(function() {
    xs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[An] = null;
    });
  }), !0) : !1;
};
Et.unstable_batchedUpdates = cd;
Et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Is(n))
    throw Error(O(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(O(38));
  return xs(e, t, n, !1, r);
};
Et.version = "18.3.1-next-f1338f8080-20240426";
function Gg() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gg);
    } catch (e) {
      console.error(e);
    }
}
Gg(), Gm.exports = Et;
var MT = Gm.exports, Xg, Pp = MT;
Xg = Pp.createRoot, Pp.hydrateRoot;
function CT(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const _p = "$$material";
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
function Ds(e, t) {
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
var zT = !1;
function LT(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function IT(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var xT = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !zT : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(IT(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = LT(o);
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
}(), Je = "-ms-", is = "-moz-", te = "-webkit-", Jg = "comm", vd = "rule", wd = "decl", DT = "@import", qg = "@keyframes", OT = "@layer", PT = Math.abs, Os = String.fromCharCode, _T = Object.assign;
function bT(e, t) {
  return Fe(e, 0) ^ 45 ? (((t << 2 ^ Fe(e, 0)) << 2 ^ Fe(e, 1)) << 2 ^ Fe(e, 2)) << 2 ^ Fe(e, 3) : 0;
}
function ey(e) {
  return e.trim();
}
function $T(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ne(e, t, n) {
  return e.replace(t, n);
}
function uc(e, t) {
  return e.indexOf(t);
}
function Fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function ki(e, t, n) {
  return e.slice(t, n);
}
function nn(e) {
  return e.length;
}
function Td(e) {
  return e.length;
}
function ga(e, t) {
  return t.push(e), e;
}
function jT(e, t) {
  return e.map(t).join("");
}
var Ps = 1, mo = 1, ty = 0, ht = 0, Ce = 0, So = "";
function _s(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ps, column: mo, length: a, return: "" };
}
function Ro(e, t) {
  return _T(_s("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function RT() {
  return Ce;
}
function UT() {
  return Ce = ht > 0 ? Fe(So, --ht) : 0, mo--, Ce === 10 && (mo = 1, Ps--), Ce;
}
function St() {
  return Ce = ht < ty ? Fe(So, ht++) : 0, mo++, Ce === 10 && (mo = 1, Ps++), Ce;
}
function cn() {
  return Fe(So, ht);
}
function xa() {
  return ht;
}
function Ri(e, t) {
  return ki(So, e, t);
}
function Ei(e) {
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
function ny(e) {
  return Ps = mo = 1, ty = nn(So = e), ht = 0, [];
}
function ry(e) {
  return So = "", e;
}
function Da(e) {
  return ey(Ri(ht - 1, cc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function HT(e) {
  for (; (Ce = cn()) && Ce < 33; )
    St();
  return Ei(e) > 2 || Ei(Ce) > 3 ? "" : " ";
}
function FT(e, t) {
  for (; --t && St() && !(Ce < 48 || Ce > 102 || Ce > 57 && Ce < 65 || Ce > 70 && Ce < 97); )
    ;
  return Ri(e, xa() + (t < 6 && cn() == 32 && St() == 32));
}
function cc(e) {
  for (; St(); )
    switch (Ce) {
      case e:
        return ht;
      case 34:
      case 39:
        e !== 34 && e !== 39 && cc(Ce);
        break;
      case 40:
        e === 41 && cc(e);
        break;
      case 92:
        St();
        break;
    }
  return ht;
}
function BT(e, t) {
  for (; St() && e + Ce !== 47 + 10; )
    if (e + Ce === 42 + 42 && cn() === 47)
      break;
  return "/*" + Ri(t, ht - 1) + "*" + Os(e === 47 ? e : St());
}
function KT(e) {
  for (; !Ei(cn()); )
    St();
  return Ri(e, ht);
}
function ZT(e) {
  return ry(Oa("", null, null, null, [""], e = ny(e), 0, [0], e));
}
function Oa(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, f = 0, c = a, d = 0, v = 0, T = 0, w = 1, L = 1, y = 1, h = 0, g = "", E = o, I = i, M = r, A = g; L; )
    switch (T = h, h = St()) {
      case 40:
        if (T != 108 && Fe(A, c - 1) == 58) {
          uc(A += ne(Da(h), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Da(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += HT(T);
        break;
      case 92:
        A += FT(xa() - 1, 7);
        continue;
      case 47:
        switch (cn()) {
          case 42:
          case 47:
            ga(VT(BT(St(), xa()), t, n), l);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * w:
        s[u++] = nn(A) * y;
      case 125 * w:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            L = 0;
          case 59 + f:
            y == -1 && (A = ne(A, /\f/g, "")), v > 0 && nn(A) - c && ga(v > 32 ? $p(A + ";", r, n, c - 1) : $p(ne(A, " ", "") + ";", r, n, c - 2), l);
            break;
          case 59:
            A += ";";
          default:
            if (ga(M = bp(A, t, n, u, f, o, s, g, E = [], I = [], c), i), h === 123)
              if (f === 0)
                Oa(A, t, M, M, E, i, c, s, I);
              else
                switch (d === 99 && Fe(A, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Oa(e, M, M, r && ga(bp(e, M, M, 0, 0, o, s, g, o, E = [], c), I), o, I, c, s, r ? E : I);
                    break;
                  default:
                    Oa(A, M, M, M, [""], I, 0, s, I);
                }
        }
        u = f = v = 0, w = y = 1, g = A = "", c = a;
        break;
      case 58:
        c = 1 + nn(A), v = T;
      default:
        if (w < 1) {
          if (h == 123)
            --w;
          else if (h == 125 && w++ == 0 && UT() == 125)
            continue;
        }
        switch (A += Os(h), h * w) {
          case 38:
            y = f > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            s[u++] = (nn(A) - 1) * y, y = 1;
            break;
          case 64:
            cn() === 45 && (A += Da(St())), d = cn(), f = c = nn(g = A += KT(xa())), h++;
            break;
          case 45:
            T === 45 && nn(A) == 2 && (w = 0);
        }
    }
  return i;
}
function bp(e, t, n, r, o, i, a, s, l, u, f) {
  for (var c = o - 1, d = o === 0 ? i : [""], v = Td(d), T = 0, w = 0, L = 0; T < r; ++T)
    for (var y = 0, h = ki(e, c + 1, c = PT(w = a[T])), g = e; y < v; ++y)
      (g = ey(w > 0 ? d[y] + " " + h : ne(h, /&\f/g, d[y]))) && (l[L++] = g);
  return _s(e, t, n, o === 0 ? vd : s, l, u, f);
}
function VT(e, t, n) {
  return _s(e, t, n, Jg, Os(RT()), ki(e, 2, -2), 0);
}
function $p(e, t, n, r) {
  return _s(e, t, n, wd, ki(e, 0, r), ki(e, r + 1, -1), r);
}
function ro(e, t) {
  for (var n = "", r = Td(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function WT(e, t, n, r) {
  switch (e.type) {
    case OT:
      if (e.children.length)
        break;
    case DT:
    case wd:
      return e.return = e.return || e.value;
    case Jg:
      return "";
    case qg:
      return e.return = e.value + "{" + ro(e.children, r) + "}";
    case vd:
      e.value = e.props.join(",");
  }
  return nn(n = ro(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function YT(e) {
  var t = Td(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function QT(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function oy(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var GT = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = cn(), o === 38 && i === 12 && (n[r] = 1), !Ei(i); )
    St();
  return Ri(t, ht);
}, XT = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ei(o)) {
      case 0:
        o === 38 && cn() === 12 && (n[r] = 1), t[r] += GT(ht - 1, n, r);
        break;
      case 2:
        t[r] += Da(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = cn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Os(o);
    }
  while (o = St());
  return t;
}, JT = function(t, n) {
  return ry(XT(ny(t), n));
}, jp = /* @__PURE__ */ new WeakMap(), qT = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !jp.get(r)) && !o) {
      jp.set(t, !0);
      for (var i = [], a = JT(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var f = 0; f < s.length; f++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[f]) : s[f] + " " + a[l];
    }
  }
}, e1 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function iy(e, t) {
  switch (bT(e, t)) {
    case 5103:
      return te + "print-" + e + e;
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
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + is + e + Je + e + e;
    case 6828:
    case 4268:
      return te + e + Je + e + e;
    case 6165:
      return te + e + Je + "flex-" + e + e;
    case 5187:
      return te + e + ne(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + Je + "flex-$1$2") + e;
    case 5443:
      return te + e + Je + "flex-item-" + ne(e, /flex-|-self/, "") + e;
    case 4675:
      return te + e + Je + "flex-line-pack" + ne(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return te + e + Je + ne(e, "shrink", "negative") + e;
    case 5292:
      return te + e + Je + ne(e, "basis", "preferred-size") + e;
    case 6060:
      return te + "box-" + ne(e, "-grow", "") + te + e + Je + ne(e, "grow", "positive") + e;
    case 4554:
      return te + ne(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return ne(ne(ne(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ne(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return ne(ne(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + Je + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + te + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(e, /(.+)-inline(.+)/, te + "$1$2") + e;
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
      if (nn(e) - 1 - t > 6)
        switch (Fe(e, t + 1)) {
          case 109:
            if (Fe(e, t + 4) !== 45)
              break;
          case 102:
            return ne(e, /(.+:)(.+)-([^]+)/, "$1" + te + "$2-$3$1" + is + (Fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~uc(e, "stretch") ? iy(ne(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Fe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Fe(e, nn(e) - 3 - (~uc(e, "!important") && 10))) {
        case 107:
          return ne(e, ":", ":" + te) + e;
        case 101:
          return ne(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + te + (Fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + te + "$2$3$1" + Je + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Fe(e, t + 11)) {
        case 114:
          return te + e + Je + ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + Je + ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + Je + ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + Je + e + e;
  }
  return e;
}
var t1 = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case wd:
        t.return = iy(t.value, t.length);
        break;
      case qg:
        return ro([Ro(t, {
          value: ne(t.value, "@", "@" + te)
        })], o);
      case vd:
        if (t.length)
          return jT(t.props, function(i) {
            switch ($T(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ro([Ro(t, {
                  props: [ne(i, /:(read-\w+)/, ":" + is + "$1")]
                })], o);
              case "::placeholder":
                return ro([Ro(t, {
                  props: [ne(i, /:(plac\w+)/, ":" + te + "input-$1")]
                }), Ro(t, {
                  props: [ne(i, /:(plac\w+)/, ":" + is + "$1")]
                }), Ro(t, {
                  props: [ne(i, /:(plac\w+)/, Je + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, n1 = [t1], r1 = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(w) {
      var L = w.getAttribute("data-emotion");
      L.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || n1, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(w) {
      for (var L = w.getAttribute("data-emotion").split(" "), y = 1; y < L.length; y++)
        i[L[y]] = !0;
      s.push(w);
    }
  );
  var l, u = [qT, e1];
  {
    var f, c = [WT, QT(function(w) {
      f.insert(w);
    })], d = YT(u.concat(o, c)), v = function(L) {
      return ro(ZT(L), d);
    };
    l = function(L, y, h, g) {
      f = h, v(L ? L + "{" + y.styles + "}" : y.styles), g && (T.inserted[y.name] = !0);
    };
  }
  var T = {
    key: n,
    sheet: new xT({
      key: n,
      container: a,
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
  return T.sheet.hydrate(s), T;
}, ay = { exports: {} }, ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re = typeof Symbol == "function" && Symbol.for, Ad = Re ? Symbol.for("react.element") : 60103, Sd = Re ? Symbol.for("react.portal") : 60106, bs = Re ? Symbol.for("react.fragment") : 60107, $s = Re ? Symbol.for("react.strict_mode") : 60108, js = Re ? Symbol.for("react.profiler") : 60114, Rs = Re ? Symbol.for("react.provider") : 60109, Us = Re ? Symbol.for("react.context") : 60110, kd = Re ? Symbol.for("react.async_mode") : 60111, Hs = Re ? Symbol.for("react.concurrent_mode") : 60111, Fs = Re ? Symbol.for("react.forward_ref") : 60112, Bs = Re ? Symbol.for("react.suspense") : 60113, o1 = Re ? Symbol.for("react.suspense_list") : 60120, Ks = Re ? Symbol.for("react.memo") : 60115, Zs = Re ? Symbol.for("react.lazy") : 60116, i1 = Re ? Symbol.for("react.block") : 60121, a1 = Re ? Symbol.for("react.fundamental") : 60117, s1 = Re ? Symbol.for("react.responder") : 60118, l1 = Re ? Symbol.for("react.scope") : 60119;
function Mt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ad:
        switch (e = e.type, e) {
          case kd:
          case Hs:
          case bs:
          case js:
          case $s:
          case Bs:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Us:
              case Fs:
              case Zs:
              case Ks:
              case Rs:
                return e;
              default:
                return t;
            }
        }
      case Sd:
        return t;
    }
  }
}
function sy(e) {
  return Mt(e) === Hs;
}
ae.AsyncMode = kd;
ae.ConcurrentMode = Hs;
ae.ContextConsumer = Us;
ae.ContextProvider = Rs;
ae.Element = Ad;
ae.ForwardRef = Fs;
ae.Fragment = bs;
ae.Lazy = Zs;
ae.Memo = Ks;
ae.Portal = Sd;
ae.Profiler = js;
ae.StrictMode = $s;
ae.Suspense = Bs;
ae.isAsyncMode = function(e) {
  return sy(e) || Mt(e) === kd;
};
ae.isConcurrentMode = sy;
ae.isContextConsumer = function(e) {
  return Mt(e) === Us;
};
ae.isContextProvider = function(e) {
  return Mt(e) === Rs;
};
ae.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ad;
};
ae.isForwardRef = function(e) {
  return Mt(e) === Fs;
};
ae.isFragment = function(e) {
  return Mt(e) === bs;
};
ae.isLazy = function(e) {
  return Mt(e) === Zs;
};
ae.isMemo = function(e) {
  return Mt(e) === Ks;
};
ae.isPortal = function(e) {
  return Mt(e) === Sd;
};
ae.isProfiler = function(e) {
  return Mt(e) === js;
};
ae.isStrictMode = function(e) {
  return Mt(e) === $s;
};
ae.isSuspense = function(e) {
  return Mt(e) === Bs;
};
ae.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === bs || e === Hs || e === js || e === $s || e === Bs || e === o1 || typeof e == "object" && e !== null && (e.$$typeof === Zs || e.$$typeof === Ks || e.$$typeof === Rs || e.$$typeof === Us || e.$$typeof === Fs || e.$$typeof === a1 || e.$$typeof === s1 || e.$$typeof === l1 || e.$$typeof === i1);
};
ae.typeOf = Mt;
ay.exports = ae;
var u1 = ay.exports, ly = u1, c1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, d1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, uy = {};
uy[ly.ForwardRef] = c1;
uy[ly.Memo] = d1;
var f1 = !0;
function cy(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Ed = function(t, n, r) {
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
  f1 === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Nd = function(t, n, r) {
  Ed(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function p1(e) {
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
var m1 = {
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
}, h1 = !1, g1 = /[A-Z]|^ms/g, y1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, dy = function(t) {
  return t.charCodeAt(1) === 45;
}, Rp = function(t) {
  return t != null && typeof t != "boolean";
}, eu = /* @__PURE__ */ oy(function(e) {
  return dy(e) ? e : e.replace(g1, "-$&").toLowerCase();
}), Up = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(y1, function(r, o, i) {
          return rn = {
            name: o,
            styles: i,
            next: rn
          }, o;
        });
  }
  return m1[t] !== 1 && !dy(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, v1 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ni(e, t, n) {
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
        return rn = {
          name: o.name,
          styles: o.styles,
          next: rn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            rn = {
              name: a.name,
              styles: a.styles,
              next: rn
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return w1(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = rn, u = n(e);
        return rn = l, Ni(e, t, u);
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
function w1(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Ni(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : Rp(s) && (r += eu(i) + ":" + Up(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && h1)
          throw new Error(v1);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            Rp(a[l]) && (r += eu(i) + ":" + Up(i, a[l]) + ";");
        else {
          var u = Ni(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              r += eu(i) + ":" + u + ";";
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
var Hp = /label:\s*([^\s;{]+)\s*(;|$)/g, rn;
function Vs(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  rn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Ni(n, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Ni(n, t, e[s]), r) {
      var l = i;
      o += l[s];
    }
  Hp.lastIndex = 0;
  for (var u = "", f; (f = Hp.exec(o)) !== null; )
    u += "-" + f[1];
  var c = p1(o) + u;
  return {
    name: c,
    styles: o,
    next: rn
  };
}
var T1 = function(t) {
  return t();
}, fy = gu["useInsertionEffect"] ? gu["useInsertionEffect"] : !1, py = fy || T1, Fp = fy || N.useLayoutEffect, A1 = !1, my = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ r1({
    key: "css"
  }) : null
);
my.Provider;
var Md = function(t) {
  return /* @__PURE__ */ N.forwardRef(function(n, r) {
    var o = N.useContext(my);
    return t(n, o, r);
  });
}, Ui = /* @__PURE__ */ N.createContext({}), Cd = {}.hasOwnProperty, dc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", S1 = function(t, n) {
  var r = {};
  for (var o in n)
    Cd.call(n, o) && (r[o] = n[o]);
  return r[dc] = t, r;
}, k1 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Ed(n, r, o), py(function() {
    return Nd(n, r, o);
  }), null;
}, E1 = /* @__PURE__ */ Md(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[dc], i = [r], a = "";
  typeof e.className == "string" ? a = cy(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Vs(i, void 0, N.useContext(Ui));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Cd.call(e, u) && u !== "css" && u !== dc && !A1 && (l[u] = e[u]);
  return l.className = a, n && (l.ref = n), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(k1, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ N.createElement(o, l));
}), N1 = E1, tu = { exports: {} }, Bp;
function M1() {
  return Bp || (Bp = 1, function(e) {
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
M1();
var Kp = function(t, n) {
  var r = arguments;
  if (n == null || !Cd.call(n, "css"))
    return N.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = N1, i[1] = S1(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return N.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Kp || (Kp = {}));
var C1 = /* @__PURE__ */ Md(function(e, t) {
  var n = e.styles, r = Vs([n], void 0, N.useContext(Ui)), o = N.useRef();
  return Fp(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Fp(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Nd(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
}), z1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, L1 = /* @__PURE__ */ oy(
  function(e) {
    return z1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), I1 = !1, x1 = L1, D1 = function(t) {
  return t !== "theme";
}, Zp = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? x1 : D1;
}, Vp = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, O1 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Ed(n, r, o), py(function() {
    return Nd(n, r, o);
  }), null;
}, P1 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = Vp(t, n, r), l = s || Zp(o), u = !l("as");
  return function() {
    var f = arguments, c = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && c.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      c.push.apply(c, f);
    else {
      var d = f[0];
      c.push(d[0]);
      for (var v = f.length, T = 1; T < v; T++)
        c.push(f[T], d[T]);
    }
    var w = Md(function(L, y, h) {
      var g = u && L.as || o, E = "", I = [], M = L;
      if (L.theme == null) {
        M = {};
        for (var A in L)
          M[A] = L[A];
        M.theme = N.useContext(Ui);
      }
      typeof L.className == "string" ? E = cy(y.registered, I, L.className) : L.className != null && (E = L.className + " ");
      var z = Vs(c.concat(I), y.registered, M);
      E += y.key + "-" + z.name, a !== void 0 && (E += " " + a);
      var B = u && s === void 0 ? Zp(g) : l, j = {};
      for (var U in L)
        u && U === "as" || B(U) && (j[U] = L[U]);
      return j.className = E, h && (j.ref = h), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(O1, {
        cache: y,
        serialized: z,
        isStringTag: typeof g == "string"
      }), /* @__PURE__ */ N.createElement(g, j));
    });
    return w.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = o, w.__emotion_styles = c, w.__emotion_forwardProp = s, Object.defineProperty(w, "toString", {
      value: function() {
        return a === void 0 && I1 ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), w.withComponent = function(L, y) {
      var h = e(L, Ve({}, n, y, {
        shouldForwardProp: Vp(w, y, !0)
      }));
      return h.apply(void 0, c);
    }, w;
  };
}, _1 = [
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
], Wp = P1.bind(null);
_1.forEach(function(e) {
  Wp[e] = Wp(e);
});
function b1(e) {
  return e == null || Object.keys(e).length === 0;
}
function $1(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ m(C1, {
    styles: typeof t == "function" ? (o) => t(b1(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Yp = [];
function j1(e) {
  return Yp[0] = e, Vs(Yp);
}
function br(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function hy(e) {
  if (/* @__PURE__ */ N.isValidElement(e) || !br(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = hy(e[n]);
  }), t;
}
function as(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? Ve({}, e) : e;
  return br(e) && br(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ N.isValidElement(t[o]) ? r[o] = t[o] : br(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && br(e[o]) ? r[o] = as(e[o], t[o], n) : n.clone ? r[o] = br(t[o]) ? hy(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const R1 = ["values", "unit", "step"], U1 = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => Ve({}, n, {
    [r.key]: r.val
  }), {});
};
function H1(e) {
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
  } = e, o = Ds(e, R1), i = U1(t), a = Object.keys(i);
  function s(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function u(d, v) {
    const T = a.indexOf(v);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(T !== -1 && typeof t[a[T]] == "number" ? t[a[T]] : v) - r / 100}${n})`;
  }
  function f(d) {
    return a.indexOf(d) + 1 < a.length ? u(d, a[a.indexOf(d) + 1]) : s(d);
  }
  function c(d) {
    const v = a.indexOf(d);
    return v === 0 ? s(a[1]) : v === a.length - 1 ? l(a[v]) : u(d, a[a.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return Ve({
    keys: a,
    values: i,
    up: s,
    down: l,
    between: u,
    only: f,
    not: c,
    unit: n
  }, o);
}
const F1 = {
  borderRadius: 4
}, B1 = F1;
function ri(e, t) {
  return t ? as(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const zd = {
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
}, Qp = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${zd[e]}px)`
};
function En(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Qp;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Qp;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || zd).indexOf(s) !== -1) {
        const l = i.up(s);
        a[l] = n(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function K1(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Gp(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function gy(e) {
  if (typeof e != "string")
    throw new Error(CT(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ws(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function ss(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Ws(e, n) || r, t && (o = t(o, r, e)), o;
}
function Ne(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, u = Ws(l, r) || {};
    return En(a, s, (c) => {
      let d = ss(u, o, c);
      return c === d && typeof c == "string" && (d = ss(u, o, `${t}${c === "default" ? "" : gy(c)}`, c)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Z1(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const V1 = {
  m: "margin",
  p: "padding"
}, W1 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Xp = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Y1 = Z1((e) => {
  if (e.length > 2)
    if (Xp[e])
      e = Xp[e];
    else
      return [e];
  const [t, n] = e.split(""), r = V1[t], o = W1[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Ld = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Id = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Ld, ...Id];
function Hi(e, t, n, r) {
  var o;
  const i = (o = Ws(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : i * a : Array.isArray(i) ? (a) => typeof a == "string" ? a : i[a] : typeof i == "function" ? i : () => {
  };
}
function yy(e) {
  return Hi(e, "spacing", 8);
}
function Fi(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Q1(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Fi(t, n), r), {});
}
function G1(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Y1(n), i = Q1(o, r), a = e[n];
  return En(e, a, i);
}
function vy(e, t) {
  const n = yy(e.theme);
  return Object.keys(e).map((r) => G1(e, t, r, n)).reduce(ri, {});
}
function Ae(e) {
  return vy(e, Ld);
}
Ae.propTypes = {};
Ae.filterProps = Ld;
function Se(e) {
  return vy(e, Id);
}
Se.propTypes = {};
Se.filterProps = Id;
function X1(e = 8) {
  if (e.mui)
    return e;
  const t = yy({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" ");
  return n.mui = !0, n;
}
function Ys(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? ri(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function xt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function bt(e, t) {
  return Ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const J1 = bt("border", xt), q1 = bt("borderTop", xt), eA = bt("borderRight", xt), tA = bt("borderBottom", xt), nA = bt("borderLeft", xt), rA = bt("borderColor"), oA = bt("borderTopColor"), iA = bt("borderRightColor"), aA = bt("borderBottomColor"), sA = bt("borderLeftColor"), lA = bt("outline", xt), uA = bt("outlineColor"), Qs = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Hi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Fi(t, r)
    });
    return En(e, e.borderRadius, n);
  }
  return null;
};
Qs.propTypes = {};
Qs.filterProps = ["borderRadius"];
Ys(J1, q1, eA, tA, nA, rA, oA, iA, aA, sA, Qs, lA, uA);
const Gs = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Hi(e.theme, "spacing", 8), n = (r) => ({
      gap: Fi(t, r)
    });
    return En(e, e.gap, n);
  }
  return null;
};
Gs.propTypes = {};
Gs.filterProps = ["gap"];
const Xs = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Hi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Fi(t, r)
    });
    return En(e, e.columnGap, n);
  }
  return null;
};
Xs.propTypes = {};
Xs.filterProps = ["columnGap"];
const Js = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Hi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Fi(t, r)
    });
    return En(e, e.rowGap, n);
  }
  return null;
};
Js.propTypes = {};
Js.filterProps = ["rowGap"];
const cA = Ne({
  prop: "gridColumn"
}), dA = Ne({
  prop: "gridRow"
}), fA = Ne({
  prop: "gridAutoFlow"
}), pA = Ne({
  prop: "gridAutoColumns"
}), mA = Ne({
  prop: "gridAutoRows"
}), hA = Ne({
  prop: "gridTemplateColumns"
}), gA = Ne({
  prop: "gridTemplateRows"
}), yA = Ne({
  prop: "gridTemplateAreas"
}), vA = Ne({
  prop: "gridArea"
});
Ys(Gs, Xs, Js, cA, dA, fA, pA, mA, hA, gA, yA, vA);
function oo(e, t) {
  return t === "grey" ? t : e;
}
const wA = Ne({
  prop: "color",
  themeKey: "palette",
  transform: oo
}), TA = Ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: oo
}), AA = Ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: oo
});
Ys(wA, TA, AA);
function vt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const SA = Ne({
  prop: "width",
  transform: vt
}), xd = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || zd[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: vt(n)
      };
    };
    return En(e, e.maxWidth, t);
  }
  return null;
};
xd.filterProps = ["maxWidth"];
const kA = Ne({
  prop: "minWidth",
  transform: vt
}), EA = Ne({
  prop: "height",
  transform: vt
}), NA = Ne({
  prop: "maxHeight",
  transform: vt
}), MA = Ne({
  prop: "minHeight",
  transform: vt
});
Ne({
  prop: "size",
  cssProperty: "width",
  transform: vt
});
Ne({
  prop: "size",
  cssProperty: "height",
  transform: vt
});
const CA = Ne({
  prop: "boxSizing"
});
Ys(SA, xd, kA, EA, NA, MA, CA);
const zA = {
  // borders
  border: {
    themeKey: "borders",
    transform: xt
  },
  borderTop: {
    themeKey: "borders",
    transform: xt
  },
  borderRight: {
    themeKey: "borders",
    transform: xt
  },
  borderBottom: {
    themeKey: "borders",
    transform: xt
  },
  borderLeft: {
    themeKey: "borders",
    transform: xt
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
    transform: xt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Qs
  },
  // palette
  color: {
    themeKey: "palette",
    transform: oo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: oo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: oo
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
    style: Ae
  },
  mt: {
    style: Ae
  },
  mr: {
    style: Ae
  },
  mb: {
    style: Ae
  },
  ml: {
    style: Ae
  },
  mx: {
    style: Ae
  },
  my: {
    style: Ae
  },
  margin: {
    style: Ae
  },
  marginTop: {
    style: Ae
  },
  marginRight: {
    style: Ae
  },
  marginBottom: {
    style: Ae
  },
  marginLeft: {
    style: Ae
  },
  marginX: {
    style: Ae
  },
  marginY: {
    style: Ae
  },
  marginInline: {
    style: Ae
  },
  marginInlineStart: {
    style: Ae
  },
  marginInlineEnd: {
    style: Ae
  },
  marginBlock: {
    style: Ae
  },
  marginBlockStart: {
    style: Ae
  },
  marginBlockEnd: {
    style: Ae
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
    style: Gs
  },
  rowGap: {
    style: Js
  },
  columnGap: {
    style: Xs
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
    transform: vt
  },
  maxWidth: {
    style: xd
  },
  minWidth: {
    transform: vt
  },
  height: {
    transform: vt
  },
  maxHeight: {
    transform: vt
  },
  minHeight: {
    transform: vt
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
}, wy = zA;
function LA(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function IA(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xA() {
  function e(n, r, o, i) {
    const a = {
      [n]: r,
      theme: o
    }, s = i[n];
    if (!s)
      return {
        [n]: r
      };
    const {
      cssProperty: l = n,
      themeKey: u,
      transform: f,
      style: c
    } = s;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const d = Ws(o, u) || {};
    return c ? c(a) : En(a, r, (T) => {
      let w = ss(d, f, T);
      return T === w && typeof T == "string" && (w = ss(d, f, `${n}${T === "default" ? "" : gy(T)}`, T)), l === !1 ? w : {
        [l]: w
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {},
      nested: a
    } = n || {};
    if (!o)
      return null;
    const s = (r = i.unstable_sxConfig) != null ? r : wy;
    function l(u) {
      let f = u;
      if (typeof u == "function")
        f = u(i);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const c = K1(i.breakpoints), d = Object.keys(c);
      let v = c;
      return Object.keys(f).forEach((T) => {
        const w = IA(f[T], i);
        if (w != null)
          if (typeof w == "object")
            if (s[T])
              v = ri(v, e(T, w, i, s));
            else {
              const L = En({
                theme: i
              }, w, (y) => ({
                [T]: y
              }));
              LA(L, w) ? v[T] = t({
                sx: w,
                theme: i,
                nested: !0
              }) : v = ri(v, L);
            }
          else
            v = ri(v, e(T, w, i, s));
      }), !a && i.modularCssLayers ? {
        "@layer sx": Gp(d, v)
      } : Gp(d, v);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const Ty = xA();
Ty.filterProps = ["sx"];
const DA = Ty;
function OA(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const PA = ["breakpoints", "palette", "spacing", "shape"];
function _A(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, a = Ds(e, PA), s = H1(n), l = X1(o);
  let u = as({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Ve({
      mode: "light"
    }, r),
    spacing: l,
    shape: Ve({}, B1, i)
  }, a);
  return u.applyStyles = OA, u = t.reduce((f, c) => as(f, c), u), u.unstable_sxConfig = Ve({}, wy, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(c) {
    return DA({
      sx: c,
      theme: this
    });
  }, u;
}
function bA(e) {
  return Object.keys(e).length === 0;
}
function Dd(e = null) {
  const t = N.useContext(Ui);
  return !t || bA(t) ? e : t;
}
const $A = _A();
function jA(e = $A) {
  return Dd(e);
}
function nu(e) {
  const t = j1(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function RA({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = jA(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((a) => nu(typeof a == "function" ? a(o) : a)) : i = nu(i)), /* @__PURE__ */ m($1, {
    styles: i
  });
}
const UA = typeof window < "u" ? N.useLayoutEffect : N.useEffect, HA = UA;
let Jp = 0;
function FA(e) {
  const [t, n] = N.useState(e), r = e || t;
  return N.useEffect(() => {
    t == null && (Jp += 1, n(`mui-${Jp}`));
  }, [t]), r;
}
const qp = gu["useId".toString()];
function BA(e) {
  if (qp !== void 0) {
    const t = qp();
    return e ?? t;
  }
  return FA(e);
}
const KA = /* @__PURE__ */ N.createContext(null), Ay = KA;
function Sy() {
  return N.useContext(Ay);
}
const ZA = typeof Symbol == "function" && Symbol.for, VA = ZA ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function WA(e, t) {
  return typeof t == "function" ? t(e) : Ve({}, e, t);
}
function YA(e) {
  const {
    children: t,
    theme: n
  } = e, r = Sy(), o = N.useMemo(() => {
    const i = r === null ? n : WA(r, n);
    return i != null && (i[VA] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ m(Ay.Provider, {
    value: o,
    children: t
  });
}
const QA = ["value"], GA = /* @__PURE__ */ N.createContext();
function XA(e) {
  let {
    value: t
  } = e, n = Ds(e, QA);
  return /* @__PURE__ */ m(GA.Provider, Ve({
    value: t ?? !0
  }, n));
}
const JA = /* @__PURE__ */ N.createContext(void 0);
function qA({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ m(JA.Provider, {
    value: e,
    children: t
  });
}
function eS(e) {
  const t = Dd(), n = BA() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, HA(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const a = i.firstChild;
    if (o) {
      var s;
      if (a && (s = a.hasAttribute) != null && s.call(a, "data-mui-layer-order") && a.getAttribute("data-mui-layer-order") === n)
        return;
      const u = document.createElement("style");
      u.setAttribute("data-mui-layer-order", n), u.textContent = o, i.prepend(u);
    } else {
      var l;
      (l = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || l.remove();
    }
  }, [o, n]), o ? /* @__PURE__ */ m(RA, {
    styles: o
  }) : null;
}
const em = {};
function tm(e, t, n, r = !1) {
  return N.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), a = e ? Ve({}, t, {
        [e]: i
      }) : i;
      return r ? () => a : a;
    }
    return e ? Ve({}, t, {
      [e]: n
    }) : Ve({}, t, n);
  }, [e, t, n, r]);
}
function tS(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Dd(em), i = Sy() || em, a = tm(r, o, n), s = tm(r, i, n, !0), l = a.direction === "rtl", u = eS(a);
  return /* @__PURE__ */ m(YA, {
    theme: s,
    children: /* @__PURE__ */ m(Ui.Provider, {
      value: a,
      children: /* @__PURE__ */ m(XA, {
        value: l,
        children: /* @__PURE__ */ C(qA, {
          value: a == null ? void 0 : a.components,
          children: [u, t]
        })
      })
    })
  });
}
const nS = ["theme"];
function rS(e) {
  let {
    theme: t
  } = e, n = Ds(e, nS);
  const r = t[_p];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = Ve({}, r, {
    vars: null
  }) : t && !t.vars && (o = Ve({}, t, {
    vars: null
  }))), /* @__PURE__ */ m(tS, Ve({}, n, {
    themeId: r ? _p : void 0,
    theme: o
  }));
}
const fc = "[CHMarketingBuilder]", oS = {
  info: "color:#1565c0;font-weight:bold",
  resolved: "color:#2e7d32;font-weight:bold",
  missing: "color:#e65100;font-weight:bold",
  fallback: "color:#f57c00;font-weight:bold",
  error: "color:#c62828;font-weight:bold"
}, ky = {
  info: "INFO",
  resolved: "OK",
  missing: "MISSING",
  fallback: "FALLBACK",
  error: "ERROR"
};
let oi = [];
function iS(e) {
  return e instanceof Error ? e.message : e == null ? "" : String(e);
}
function aS(e, t, n, r) {
  const o = ky[e], i = oS[e];
  console.log(r ? `%c${fc} %c${o}%c ${t}: ${n}
  → ${r}` : `%c${fc} %c${o}%c ${t}: ${n}`, "font-weight:bold", i, "color:inherit");
}
function sS() {
  oi = [];
}
function Bi(e, t, n, r) {
  const o = iS(n);
  oi.push({ level: e, resource: t, detail: o, hint: r }), aS(e, t, o, r);
}
function ie(e, t) {
  Bi("info", e, t);
}
function F(e, t) {
  Bi("resolved", e, t);
}
function je(e, t, n) {
  Bi("missing", e, t, n);
}
function lS(e, t, n) {
  Bi("fallback", e, t, n);
}
function Rn(e, t, n) {
  Bi("error", e, t, n);
}
function nm(e) {
  const t = oi.filter((n) => n.level !== "resolved" && n.level !== "info");
  console.groupCollapsed(
    `%c${fc} Load summary — ${e.builderMode} builder (${t.length} note${t.length === 1 ? "" : "s"})`,
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
  }), oi.length > 0 && console.table(
    oi.map((n) => ({
      Level: ky[n.level],
      Resource: n.resource,
      Detail: n.detail,
      Hint: n.hint ?? ""
    }))
  ), console.groupEnd();
}
function Sr(e) {
  if (typeof e != "string" || !e.trim())
    return;
  const t = e.match(/\/entities\/(\d+)(?:\?|$|\/)/);
  if (!t)
    return;
  const n = Number(t[1]);
  return Number.isFinite(n) ? n : void 0;
}
function kr(e) {
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
    const o = Sr(r.href) ?? Sr(r.entity);
    o != null && t.push(o);
  }
  return t;
}
function qs(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = t.id ?? t.entityId;
  if (typeof n == "number" && Number.isFinite(n))
    return [n];
  const r = t.parent;
  if (r != null && typeof r == "object") {
    const a = r, s = Sr(a.href) ?? Sr(a.entity);
    if (s != null)
      return [s];
  }
  const o = kr(t.parents);
  if (o.length > 0)
    return o;
  const i = kr(t.children);
  return i.length > 0 ? i : [];
}
function tt(e, t) {
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
function Od(e, ...t) {
  if (!e)
    return [];
  for (const n of t) {
    const r = e[n];
    if (r != null) {
      if (Array.isArray(r)) {
        const o = kr(r);
        if (o.length > 0)
          return o;
        continue;
      }
      if (typeof r == "object") {
        const o = qs(r);
        if (o.length > 0)
          return o;
      }
    }
  }
  return [];
}
function gt(e, t) {
  return e ? Object.keys(e).filter((n) => t.test(n)) : [];
}
async function Vt(e, t, n, r) {
  var a;
  const o = Od(r, n);
  if (o.length > 0)
    return o;
  if (!((a = e == null ? void 0 : e.raw) != null && a.getAsync))
    return [];
  const i = tt(r, n);
  if (!i)
    return [];
  try {
    const s = await e.raw.getAsync(i);
    return !s.isSuccessStatusCode || s.content == null ? [] : qs(s.content);
  } catch {
    return [];
  }
}
async function Mi(e, t, n, r) {
  const o = [...new Set(r)];
  for (const i of o) {
    const a = await Vt(e, t, i, n);
    if (a.length > 0)
      return { ids: a, relationName: i };
  }
  return { ids: [] };
}
function Un(e, t) {
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
  const a = i.values;
  if (a == null || typeof a != "object" || Array.isArray(a))
    return "";
  for (const s of Object.values(a))
    if (typeof s == "string" && s.trim())
      return s.trim();
  return "";
}
const uS = ["social", "email", "admin"], Ci = [
  "templateToZone",
  "templateToTemplateZone",
  "TemplateToZone",
  "TemplateToTemplateZone",
  "EPAM.TemplateToZone",
  "EPAM.TemplateToTemplateZone",
  "templateToEPAM.TemplateZone",
  "EPAM.TemplateZone",
  "TemplateZone"
], ls = [
  "templateZoneToTemplate",
  "zoneToTemplate",
  "TemplateZoneToTemplate",
  "EPAM.TemplateZoneToTemplate",
  "EPAM.TemplateToTemplateZone",
  "templateToTemplate"
], cS = [
  "marketingAssetToTemplate",
  "MarketingAssetToTemplate",
  "EPAM.MarketingAssetToTemplate"
], Ey = [
  "templateZoneToAllowedAsset",
  "TemplateZoneToAllowedAsset",
  "EPAM.TemplateZoneToAllowedAsset",
  "templateZoneToAsset",
  "TemplateZoneToAsset",
  "EPAM.TemplateZoneToAsset"
], Ny = [
  "templateToAllowedAsset",
  "TemplateToAllowedAsset",
  "EPAM.TemplateToAllowedAsset",
  "templateToAsset",
  "TemplateToAsset",
  "EPAM.TemplateToAsset"
], dS = [
  "zoneType",
  "ZoneType",
  "EPAM.ZoneType",
  "templateZoneType",
  "TemplateZoneType",
  "EPAM.TemplateZoneType"
], My = [
  "zoneValueToSelectedAsset",
  "ZoneValueToSelectedAsset",
  "EPAM.MarketingAssetZoneValueToSelectedAsset",
  "marketingAssetZoneValueToSelectedAsset",
  "zoneValueToAsset",
  "ZoneValueToAsset"
];
function rm(e) {
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
function om(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
  if (typeof e == "string")
    return e.trim() || void 0;
}
function fS(e) {
  if (!e || typeof e != "object")
    return;
  const t = e, n = t.systemProperties && typeof t.systemProperties == "object" ? t.systemProperties : null;
  return om(n == null ? void 0 : n.id) || om(t.id);
}
function pS(e, ...t) {
  if (!e || typeof e != "object")
    return;
  const n = e.relations;
  if (!n || typeof n != "object")
    return;
  const r = Od(n, ...t);
  if (r[0] != null)
    return String(r[0]);
}
function im(e) {
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
function am(e) {
  if (typeof e != "string")
    return;
  const t = e.trim().toLowerCase();
  return uS.includes(t) ? t : void 0;
}
function Pd(e, t) {
  if (!(!e || typeof e != "object" || Array.isArray(e)))
    return e[t];
}
function sm(e, t, n) {
  const r = Pd(t, e), o = im(r);
  if (o !== void 0)
    return o;
  const i = Cy(n);
  if (i)
    return im(i[e]);
}
function Cy(e) {
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
function Xt(e, t, n) {
  const r = Pd(t, e), o = rm(r);
  if (o)
    return o;
  const i = Cy(n);
  if (i)
    return rm(i[e]);
}
function mS(e, t, n) {
  const r = am(Pd(e, "builderMode")) ?? am(Xt("builderMode", e, n)), o = Xt("templateId", e, n) || pS(t, "marketingAssetToTemplate"), i = fS(t);
  return {
    builderMode: r,
    brandKitId: Xt("brandKitId", e, n),
    templateId: o,
    marketingAssetId: i,
    userHasOverridePermission: sm("userHasOverridePermission", e, n) ?? !1,
    allowTemplateZoneEditing: sm("allowTemplateZoneEditing", e, n) ?? !1,
    renderEmailApiUrl: Xt("renderEmailApiUrl", e, n) || "/api/render-email-html",
    contentHubProxyBase: Xt("contentHubProxyBase", e, n) || "/api/content-hub",
    html2canvasCdnUrl: Xt("html2canvasCdnUrl", e, n),
    figmaImportApiUrl: Xt("figmaImportApiUrl", e, n) || "/api/figma/import",
    figmaImportApiToken: Xt("figmaImportApiToken", e, n),
    searchIdentifier: Xt("searchIdentifier", e, n),
    selectionPoolIdentifier: Xt("selectionPoolIdentifier", e, n)
  };
}
function hS(e, t) {
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
function lm(e, t) {
  if (e.builderMode)
    return e.builderMode;
  const n = t == null ? void 0 : t.trim().toLowerCase();
  return n === "email" || n === "newsletter" ? "email" : "social";
}
const um = /* @__PURE__ */ new Map(), gS = ["EPAM.Template", "Template"], yS = ["EPAM.TemplateZone", "TemplateZone"];
function vS(e) {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
}
function zy(e) {
  if (e == null || typeof e != "object")
    return null;
  const t = e;
  if (Array.isArray(t.member_groups))
    return t;
  const n = t.content;
  return n != null && typeof n == "object" && !Array.isArray(n) ? n : Array.isArray(t.items) && t.items[0] != null && typeof t.items[0] == "object" ? t.items[0] : t;
}
function wS(e) {
  const t = zy(e);
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
      for (const a of i) {
        if (a == null || typeof a != "object")
          continue;
        const s = a;
        if (s.type === "Relation")
          continue;
        const l = typeof s.name == "string" ? s.name.trim() : "";
        l && n.push({
          name: l,
          type: typeof s.type == "string" ? s.type : "Unknown",
          isMandatory: !!s.is_mandatory
        });
      }
  }
  return n;
}
async function pc(e, t) {
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
      const a = wS(i.content);
      if (a.length > 0)
        return a;
    } catch {
    }
  return [];
}
function TS(e) {
  const t = zy(e);
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
      for (const a of i) {
        if (a == null || typeof a != "object")
          continue;
        const s = a;
        if (s.type !== "Relation")
          continue;
        const l = s.associated_entitydefinition, u = (l == null ? void 0 : l.href) ?? "", f = typeof s.name == "string" ? s.name.trim() : "";
        f && n.push({
          name: f,
          role: typeof s.role == "string" ? s.role : void 0,
          target: u ? vS(u) : void 0
        });
      }
  }
  return n;
}
function AS(e) {
  if (e == null)
    return [];
  const t = Array.isArray(e) ? e : Array.isArray(e.items) ? e.items : Array.isArray(e.content) ? e.content : [], n = [];
  for (const r of t) {
    if (r == null || typeof r != "object")
      continue;
    const o = r, i = o.systemProperties, a = (i == null ? void 0 : i.id) ?? o.id ?? o.entityId;
    typeof a == "number" && Number.isFinite(a) && n.push(a);
  }
  return n;
}
async function SS(e, t) {
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
      const a = TS(i.content);
      if (a.length > 0)
        return a;
    } catch {
    }
  return [];
}
async function kS(e, t) {
  const n = um.get(t);
  if (n)
    return n;
  const r = await SS(e, t);
  return um.set(t, r), r;
}
async function us(e, t) {
  for (const n of t) {
    const r = await kS(e, n);
    if (r.length > 0)
      return r;
  }
  return [];
}
async function ES(e) {
  var r, o;
  if (!((r = e == null ? void 0 : e.raw) != null && r.getAsync))
    return [];
  const t = encodeURIComponent("Definition.Name=='EPAM.TemplateZone'"), n = [
    `/api/entities/query?query=${t}&take=1`,
    `/api/entities/query?query=${t}&pageSize=1`
  ];
  for (const i of n)
    try {
      const a = await e.raw.getAsync(i);
      if (!a.isSuccessStatusCode || a.content == null)
        continue;
      const s = AS(a.content);
      if (s.length === 0)
        continue;
      const l = await e.raw.getAsync(`/api/entities/${s[0]}`);
      if (!l.isSuccessStatusCode || !((o = l.content) != null && o.relations))
        continue;
      return gt(l.content.relations, /template/i).filter(
        (u) => !/collection|asset/i.test(u)
      );
    } catch {
    }
  return [];
}
function mc(e, t) {
  return !!(e && t.test(e));
}
function NS(e) {
  return mc(e, /(^|\.)Template$/i) && !mc(e, /TemplateZone/i);
}
async function el(e, t) {
  const [n, r, o] = await Promise.all([
    us(e, gS),
    us(e, yS),
    ES(e)
  ]), i = n.filter((f) => mc(f.target, /TemplateZone/i)).map((f) => f.name), a = r.filter((f) => NS(f.target)).map((f) => f.name), s = gt(t, /zone/i).filter(
    (f) => !!tt(t, f)
  ), l = [
    .../* @__PURE__ */ new Set([
      ...s,
      ...i,
      ...gt(t, /zone/i)
    ])
  ], u = [
    .../* @__PURE__ */ new Set([
      ...o,
      ...a,
      ...ls
    ])
  ];
  return l.length === 0 && u.length === ls.length ? console.info(
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
function MS(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO template ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function CS(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO zone ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function Ly(e, t) {
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
function zS(e, t, n) {
  return {
    entitydefinition: {
      href: Ly(e, n)
    },
    properties: t
  };
}
function cs(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e;
    if (typeof t.href == "string" && t.href.trim())
      return t.href.trim();
  }
}
function LS(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = [];
  if (Array.isArray(t.children))
    for (const o of t.children) {
      const i = cs(o);
      i && n.push(i);
    }
  const r = cs(t.child);
  return r && n.push(r), n;
}
function IS(e, t) {
  if (e != null && typeof e == "object") {
    const n = cs(e.self);
    if (n)
      return n;
  }
  return t;
}
function Iy(e, t) {
  if (t) {
    const n = t.match(/^(https?:\/\/[^/]+)/i);
    if (n)
      return `${n[1]}/api/entities/${e}`;
  }
  return `/api/entities/${e}`;
}
async function tl(e, t, n, r) {
  var s;
  const o = tt(r, n), i = `/api/entities/${t}/relations/${n}`, a = o ? [.../* @__PURE__ */ new Set([o, i])] : [i];
  if (!((s = e.raw) != null && s.getAsync) || !o)
    return { requestUrls: a, selfHref: o ?? i, childHrefs: [] };
  for (const l of [o])
    try {
      const u = await e.raw.getAsync(l);
      if (!u.isSuccessStatusCode || u.content == null)
        continue;
      const f = LS(u.content), c = IS(u.content, l) ?? l;
      return { requestUrls: a, selfHref: c, childHrefs: f };
    } catch {
    }
  return { requestUrls: a, selfHref: o ?? i, childHrefs: [] };
}
function xy(e, t) {
  return {
    children: t.map((n) => ({ href: n })),
    self: { href: e }
  };
}
async function zi(e, t, n) {
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
async function Wt(e, t, n, r, o) {
  var u;
  const i = await tl(e, t, r, o), a = Iy(n, i.selfHref), s = [...i.childHrefs];
  s.some((f) => Sr(f) === Number(n)) || s.push(a);
  const l = xy(i.selfHref, s);
  if (await zi(e, [...i.requestUrls, i.selfHref], l))
    return !0;
  if ((u = e.raw) != null && u.postAsync)
    for (const f of i.requestUrls)
      try {
        if ((await e.raw.postAsync(f, l)).isSuccessStatusCode || (await e.raw.postAsync(f, { child: { href: a } })).isSuccessStatusCode)
          return !0;
      } catch {
      }
  return !1;
}
async function ko(e, t, n, r, o) {
  const i = await tl(e, t, r, o), a = i.childHrefs.filter(
    (l) => Sr(l) !== Number(n)
  );
  if (a.length === i.childHrefs.length)
    return !0;
  const s = xy(i.selfHref, a);
  return zi(e, [...i.requestUrls, i.selfHref], s);
}
async function ho(e, t, n, r, o) {
  var l;
  const i = await tl(e, t, r, o), a = Iy(n, i.selfHref), s = {
    parent: { href: a },
    self: { href: i.selfHref }
  };
  if (await zi(e, [...i.requestUrls, i.selfHref], s))
    return !0;
  if ((l = e.raw) != null && l.postAsync)
    for (const u of i.requestUrls)
      try {
        if ((await e.raw.postAsync(u, s)).isSuccessStatusCode || (await e.raw.postAsync(u, { parent: { href: a } })).isSuccessStatusCode)
          return !0;
      } catch {
      }
  return !1;
}
async function Dy(e, t, n, r, o) {
  var l;
  const i = await tl(e, t, r, o), a = tt(o, r) ?? i.selfHref;
  if ((l = e.raw) != null && l.getAsync && tt(o, r))
    try {
      const u = await e.raw.getAsync(a);
      if (u.isSuccessStatusCode && u.content != null) {
        const f = cs(
          u.content.parent
        );
        if (!f || Sr(f) !== Number(n))
          return !0;
      }
    } catch {
    }
  const s = {
    parent: null,
    self: { href: i.selfHref }
  };
  return await zi(e, [...i.requestUrls, i.selfHref], s) ? !0 : zi(e, [...i.requestUrls, i.selfHref], {
    self: { href: i.selfHref }
  });
}
function ii(e, t, n) {
  const r = gt(t, n), o = r.filter((i) => !!tt(t, i));
  return [.../* @__PURE__ */ new Set([...o, ...e, ...r])];
}
function nl(e) {
  if (e.zoneType === "Logo")
    return !0;
  const t = (e.zoneKey ?? "").trim().toLowerCase(), n = (e.zoneLabel ?? "").trim().toLowerCase();
  return t === "logo" || n === "logo";
}
function xS(e, t) {
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
function _d(e, t, n) {
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
  return xS(t, n) ?? "Text";
}
const DS = ["EPAM.TemplateZone", "TemplateZone"], Ft = /* @__PURE__ */ new Map();
let cm = !1, dm = !1, Li = [];
function fm(e, ...t) {
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
          for (const a of Object.values(i))
            if (typeof a == "string" && a.trim())
              return a.trim();
        }
      }
    }
  }
  return "";
}
function rl(e) {
  const t = e.properties ?? {}, n = e, r = Object.keys(t), o = fm(
    t,
    "identifier",
    "Identifier",
    "zoneTypeName",
    "ZoneTypeName",
    "Title",
    "Name",
    "Label",
    "label"
  ) || Un(n, "zoneType") || Un(n, "ZoneType");
  if (o)
    return o;
  for (const i of r) {
    const a = fm(t, i);
    if (a)
      return a;
  }
  return "";
}
function ol(e, t) {
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
    const i = n.toLowerCase().replace(/[\s_-]+/g, ""), a = (o = [
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
    ].find(([s]) => s === i)) == null ? void 0 : o[1];
    if (!a)
      return;
    Ft.has(a) || (Ft.set(a, String(t)), ie(
      "template zone type",
      `Mapped taxonomy ${t} → "${a}" (from "${e}")`
    ));
    return;
  }
  Ft.has(r) || (Ft.set(r, String(t)), ie("template zone type", `Mapped taxonomy ${t} → "${r}" (from "${e}")`));
}
function il(e) {
  const t = Li.map((n) => n.name);
  return [
    .../* @__PURE__ */ new Set([
      ...t,
      ...dS,
      ...gt(e, /zone.?type/i)
    ])
  ];
}
function OS(e) {
  return il(e.relations).some(
    (t) => {
      var n;
      return !!((n = e.relations) != null && n[t]);
    }
  );
}
function Oy(e) {
  if (e == null)
    return [];
  const t = Array.isArray(e) ? e : Array.isArray(e.items) ? e.items : Array.isArray(e.content) ? e.content : [], n = [];
  for (const r of t) {
    if (r == null || typeof r != "object")
      continue;
    const o = r, i = o.systemProperties, a = (i == null ? void 0 : i.id) ?? o.id ?? o.entityId;
    typeof a == "number" && Number.isFinite(a) && n.push(a);
  }
  return n;
}
function PS(e) {
  try {
    const n = Ly(e).match(/\/entitydefinitions\/([^/?#]+)/i);
    return n != null && n[1] ? decodeURIComponent(n[1]) : "";
  } catch {
    return "";
  }
}
async function _S(e, t, n) {
  const r = encodeURIComponent(`Definition.Name=='${n}'`), o = [
    `/api/entities/query?query=${r}&take=100`,
    `/api/entities/query?query=${r}&pageSize=100`
  ];
  for (const i of o)
    try {
      const a = await e.raw.getAsync(i);
      if (!a.isSuccessStatusCode || a.content == null)
        continue;
      const s = Oy(a.content);
      for (const l of s) {
        const u = await t(String(l)), f = rl(u);
        f && ol(f, l);
      }
      if (s.length > 0)
        return F(
          "template zone type",
          `Loaded ${s.length} taxonomy item(s) from ${n}; mapped ${Ft.size} zone type(s)`
        ), s.length;
    } catch {
    }
  return 0;
}
async function Py(e, t, n) {
  const r = il(n.relations);
  for (const o of r) {
    const i = await Vt(e, "", o, n.relations);
    if (i[0] == null)
      continue;
    const a = await t(String(i[0])), s = rl(a);
    return s && ol(s, i[0]), PS(a) || void 0;
  }
}
async function bd(e) {
  if (Li.length > 0 || !e)
    return;
  Li = (await us(e, DS)).filter((n) => /zone.?type/i.test(n.name));
}
async function _y(e, t) {
  var o, i;
  if (dm || !((o = e == null ? void 0 : e.raw) != null && o.getAsync) || cm)
    return;
  cm = !0, await bd(e);
  let n = ((i = Li.find((a) => {
    var s;
    return (s = a.target) == null ? void 0 : s.trim();
  })) == null ? void 0 : i.target) ?? "";
  const r = [
    encodeURIComponent("Definition.Name=='EPAM.TemplateZone'"),
    encodeURIComponent("Definition.Name=='TemplateZone'")
  ];
  for (const a of r) {
    for (const s of [
      `/api/entities/query?query=${a}&take=40`,
      `/api/entities/query?query=${a}&pageSize=40`
    ])
      try {
        const l = await e.raw.getAsync(s);
        if (!l.isSuccessStatusCode || l.content == null)
          continue;
        const u = Oy(l.content);
        for (const f of u) {
          const c = await t(String(f)), d = await Py(e, t, c);
          d && !n && (n = d);
        }
        if (u.length > 0)
          break;
      } catch {
      }
    if (Ft.size > 0)
      break;
  }
  n && await _S(e, t, n), dm = !0, ie(
    "template zone type",
    `Taxonomy catalog ready: ${[...Ft.entries()].map(([a, s]) => `${a}=${s}`).join(", ") || "(empty)"}`
  );
}
async function bS(e, t, n) {
  await bd(e);
  for (const r of n)
    await Py(e, t, r);
  Ft.size === 0 && await _y(e, t);
}
async function $S(e, t, n) {
  const r = Ft.get(n);
  return r || (await _y(e, t), Ft.get(n));
}
function jS(e) {
  var r;
  const t = Li.find((o) => o.name === e);
  return ((r = t == null ? void 0 : t.role) == null ? void 0 : r.toLowerCase()) !== "parent";
}
async function pm(e, t, n, r) {
  var l;
  if (!((l = e == null ? void 0 : e.raw) != null && l.getAsync))
    return;
  const o = `/api/entities/${n}/relations/${r}`, i = await Vt(e, n, r, {
    [r]: { href: o }
  });
  if (i[0] == null)
    return;
  const a = await t(String(i[0])), s = rl(a);
  if (s)
    return ol(s, i[0]), _d(s, "", "");
}
async function RS(e, t, n, r, o, i, a) {
  var l;
  const s = jS(
    i
  ) ? [
    {
      label: "parent",
      run: () => ho(e, n, r, i, a.relations)
    },
    {
      label: "child",
      run: () => Wt(e, n, r, i, a.relations)
    }
  ] : [
    {
      label: "child",
      run: () => Wt(e, n, r, i, a.relations)
    },
    {
      label: "parent",
      run: () => ho(e, n, r, i, a.relations)
    }
  ];
  for (const u of s) {
    if (!await u.run())
      continue;
    const c = await pm(
      e,
      t,
      n,
      i
    );
    if (c === o)
      return F(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via ${u.label} ${i}`
      ), !0;
    ie(
      "template zone type",
      `${u.label} write for zone ${n} → taxonomy ${r} returned OK but read-back is "${c ?? "(none)"}" (expected "${o}")`
    );
  }
  if ((l = e == null ? void 0 : e.raw) != null && l.postAsync) {
    const u = { parent: { href: `/api/entities/${r}` } };
    if ((await e.raw.postAsync(
      `/api/entities/${n}/relations/${i}`,
      u
    )).isSuccessStatusCode && await pm(
      e,
      t,
      n,
      i
    ) === o)
      return F(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via POST parent ${i}`
      ), !0;
  }
  return !1;
}
async function US(e, t, n, r) {
  const o = il(r.relations);
  for (const i of o) {
    const a = tt(r.relations, i);
    if (!a)
      continue;
    const s = await Vt(e, n.id, i, {
      [i]: { href: a }
    });
    if (s[0] == null)
      continue;
    const l = await t(String(s[0])), u = rl(l);
    if (u)
      return ol(u, s[0]), _d(u, n.zoneKey, n.zoneLabel);
  }
}
async function by(e, t, n, r) {
  const o = await US(e, t, n, r);
  return o ? { ...n, zoneType: o } : n;
}
async function HS(e, t, n, r, o) {
  await bd(e);
  const i = await $S(e, t, r);
  if (!i) {
    const s = Object.keys(o.relations ?? {}).join(", ") || "(none)", l = [...Ft.keys()].join(", ") || "(none)";
    return ie(
      "template zone type",
      `No taxonomy item found for zone type "${r}" on zone ${n}. Known types: ${l}. Zone relations: ${s}.`
    ), !1;
  }
  const a = il(o.relations);
  for (const s of a)
    if (await RS(
      e,
      t,
      n,
      i,
      r,
      s,
      o
    ))
      return !0;
  return ie(
    "template zone type",
    `Could not link zone ${n} to taxonomy ${i} (${r}). Tried relations: ${a.join(", ") || "(none)"}`
  ), !1;
}
const ru = ["EPAM.TemplateZone", "TemplateZone"];
let ya = null;
function FS(e) {
  return /zone.?type/i.test(e);
}
function BS(e) {
  return /zone.?type/i.test(e);
}
function KS(e) {
  return e.filter((t) => FS(t.name)).map((t) => t.name);
}
async function ZS(e) {
  if (ya)
    return ya;
  const [t, n] = await Promise.all([
    pc(e, ru[0]).then(async (a) => a.length > 0 ? a : pc(e, ru[1])),
    us(e, ru)
  ]), r = KS(t), o = n.filter((a) => BS(a.name)).map((a) => a.name);
  let i = "unknown";
  return r.length > 0 && o.length === 0 ? i = "property" : o.length > 0 && r.length === 0 ? i = "relation" : r.length > 0 && o.length > 0 && (i = "both"), ya = {
    mode: i,
    propertyNames: r.length > 0 ? r : ["zoneType", "ZoneType", "EPAM.zoneType", "zoneTypeMA"],
    relationNames: o
  }, ya;
}
function VS(e) {
  return e.mode === "property" || e.mode === "both" || e.mode === "unknown";
}
function WS(e) {
  return e.mode === "relation" || e.mode === "both";
}
const YS = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], $d = [
  "AssetCollectionToAsset",
  "M.AssetCollectionToAsset",
  "collectionToAsset",
  "assetCollectionToAsset",
  "CollectionToAsset"
];
function QS(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function GS(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  return "Invariant" in t ? t.Invariant : Object.values(t).find((r) => typeof r == "string") ?? e;
}
function XS(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = GS(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function JS(e) {
  var n;
  if (e == null || typeof e != "object")
    return;
  const t = e;
  for (const r of YS) {
    const o = t[r];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const i = QS(((n = o[0]) == null ? void 0 : n.href) ?? o[0]);
    if (i)
      return i;
  }
}
function Eo(e, t) {
  const n = t.properties ?? {}, r = JS(t.renditions);
  if (!r)
    return null;
  const o = XS(n, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${e}`;
  return {
    id: String(e),
    name: o,
    thumbnailUrl: r,
    previewUrl: r
  };
}
function mm(e, t) {
  if (!(t != null && t.trim()))
    return e;
  const n = t.trim().toLowerCase();
  return e.filter(
    (r) => r.name.toLowerCase().includes(n) || r.id.toLowerCase().includes(n)
  );
}
const qS = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg4IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjg4IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iQ3l0aXZhIj4NCiAgPHBhdGggZD0iTTExOC40IDUwLjMzQzExNy4zNjkgNTAuNDAxMSAxMTYuMzQgNTAuMTU5NSAxMTUuNDQ4IDQ5LjYzNjhDMTE0LjU1NiA0OS4xMTQxIDExMy44NDIgNDguMzM0NSAxMTMuNCA0Ny40QzExMi4zNTEgNDQuOTY3MSAxMTEuODcyIDQyLjMyNjQgMTEyIDM5LjY4QzExMS44ODEgMzcuMDM3IDExMi4zOTYgMzQuNDA0IDExMy41IDMyQzExMy45NDkgMzEuMDg4NCAxMTQuNjU2IDMwLjMyODIgMTE1LjUzMiAyOS44MTI5QzExNi40MDcgMjkuMjk3NyAxMTcuNDE1IDI5LjA0OTggMTE4LjQzIDI5LjA5OTlDMTE5LjA1IDI5LjA2MTEgMTE5LjY3MiAyOS4xNTMzIDEyMC4yNTQgMjkuMzcwM0MxMjAuODM2IDI5LjU4NzQgMTIxLjM2NyAyOS45MjQ2IDEyMS44MSAzMC4zNkMxMjIuNjM2IDMxLjMyNTcgMTIzLjE5NSAzMi40OTExIDEyMy40MyAzMy43Mzk5SDEzMy42NkMxMzMuNDg1IDMxLjc1MjMgMTMyLjkwNyAyOS44MjEyIDEzMS45NjEgMjguMDY0MkMxMzEuMDE2IDI2LjMwNzIgMTI5LjcyMiAyNC43NjEgMTI4LjE2IDIzLjUyQzEyNS4zMTMgMjEuNTEyOSAxMjEuODggMjAuNTEwMyAxMTguNCAyMC42Njk5QzExMy4xIDIwLjY2OTkgMTA4Ljg4IDIyLjQxOTkgMTA1Ljg1IDI1Ljg2OTlDMTAyLjgyIDI5LjMyIDEwMS4yOSAzNC4wNyAxMDEuMjkgMzkuOThDMTAxLjI5IDQ1Ljg5IDEwMi43NiA1MC40NyAxMDUuNjcgNTMuOEMxMDguNTggNTcuMTMgMTEyLjc4IDU4LjggMTE4LjE4IDU4LjhDMTIyLjU4IDU4LjggMTI2LjExIDU3LjY4IDEyOC42OSA1NS40N0MxMzEuMjcgNTMuMjYgMTMyLjg3IDUwLjIgMTMzLjY5IDQ2LjA4SDEyMy42OUMxMjMuMzkyIDQ3LjI1NzcgMTIyLjc4MSA0OC4zMzI2IDEyMS45MiA0OS4xOUMxMjAuOTQgNTAuMDEzNSAxMTkuNjc3IDUwLjQyMjQgMTE4LjQgNTAuMzNaIiBmaWxsPSIjRkZGRkZGIi8+DQogIDxwYXRoIGQ9Ik0xOTYuMSA1Ni44MDk5TDE5NC43IDQ5LjEyOTlDMTkzLjg3MiA0OS4zNjQ2IDE5My4wMyA0OS41NTE2IDE5Mi4xOCA0OS42ODk5QzE5MS4yMDggNDkuODQzNSAxOTAuMjI1IDQ5LjkxNzEgMTg5LjI0IDQ5LjkwOTlDMTg2LjI0IDQ5LjkwOTkgMTg0Ljc4IDQ4LjI5OTkgMTg0Ljc4IDQ1LjExOTlWMjkuOTk5OUgxOTUuMjNWMjEuODI5OUgxODQuNzhWMTMuMTg5OUgxNzQuMjdWNDQuODI5OUMxNzQuMjQxIDQ3LjI0MzUgMTc0LjU3OCA0OS42NDc1IDE3NS4yNyA1MS45NTk5QzE3NS44NjMgNTMuOTIgMTc3LjEzMiA1NS42MDY1IDE3OC44NSA1Ni43MTk5QzE4MC41OCA1Ny44NTk5IDE4My4wOSA1OC40Mjk5IDE4Ni4zMyA1OC40Mjk5QzE4OC4wODMgNTguNDQ2MSAxODkuODMzIDU4LjMwNTYgMTkxLjU2IDU4LjAwOTlDMTkzLjEwMSA1Ny43MjIzIDE5NC42MTkgNTcuMzIxMiAxOTYuMSA1Ni44MDk5WiIgZmlsbD0iI0ZGRkZGRiIvPg0KICA8cGF0aCBkPSJNMjAxIDI4LjcxVjU3LjcxSDIxMS41OVYyMS44M0gyMDcuODhDMjA2LjA1NiAyMS44MzI2IDIwNC4zMDggMjIuNTU4MyAyMDMuMDE4IDIzLjg0OEMyMDEuNzI4IDI1LjEzNzcgMjAxLjAwMyAyNi44ODYxIDIwMSAyOC43MVoiIGZpbGw9IiNGRkZGRkYiLz4NCiAgPHBhdGggZD0iTTI0MS42MSAyMS44M0wyMzQuMDggNDcuODFMMjI2LjczIDIxLjgzSDIxNS4zOUwyMjguMjkgNTcuNzRIMjM5LjYyTDI1Mi41NSAyMS44M0gyNDEuNjFaIiBmaWxsPSIjRkZGRkZGIi8+DQogIDxwYXRoIGQ9Ik0xNDUuMTIgMjEuNzdIMTM0LjEyTDE0OC40IDU0LjM1QzE0OC40IDU0LjM1IDE0Ny43OSA1Ni4zNSAxNDcuNSA1Ny4yMUMxNDcuMzY5IDU3Ljc3MSAxNDcuMDM5IDU4LjI2NTEgMTQ2LjU3IDU4LjZMMTQ2LjMxIDU4LjgzQzE0NS40MzQgNTkuNTM5NCAxNDQuMzI1IDU5Ljg5NiAxNDMuMiA1OS44M0MxNDIuNjIxIDU5LjgyODYgMTQyLjA0MyA1OS43ODg1IDE0MS40NyA1OS43MUMxNDAuNzM2IDU5LjU5MDkgMTQwLjAwOCA1OS40MzQgMTM5LjI5IDU5LjI0TDEzNy42OCA2Ni43NUMxNDAuMDA3IDY3LjU1OTcgMTQyLjQ1NyA2Ny45NTg5IDE0NC45MiA2Ny45M0MxNDYuODY2IDY4LjAxMzggMTQ4Ljc5OCA2Ny41NjggMTUwLjUxIDY2LjY0QzE1Mi4wNDQgNjUuNjcwMSAxNTMuMzEzIDY0LjMzMzIgMTU0LjIgNjIuNzVDMTU2LjExIDU5LjU1IDE2OS44MyAyNC4wMiAxNzAuNzEgMjEuNzVIMTYwLjA1TDE1MyA0My45MUwxNDUuMTIgMjEuNzdaIiBmaWxsPSIjRkZGRkZGIi8+DQogIDxwYXRoIGQ9Ik0yNzcuMzE5IDI1LjE3OThMMjc3LjE2OSAyNC45Njk4QzI3Ni4xMjEgMjMuNDU1NSAyNzQuNjUgMjIuMjgzNCAyNzIuOTM5IDIxLjU5OThDMjcxLjU3MiAyMC45OTA3IDI3MC4wODYgMjAuNjkwMyAyNjguNTg5IDIwLjcxOThDMjY4LjMzOSAyMC43MTk4IDI2OC4wODkgMjAuNzE5OCAyNjcuODE5IDIwLjcxOThDMjYzLjgxOCAyMC45ODExIDI2MC4wODEgMjIuODEwMSAyNTcuNDE5IDI1LjgwOThDMjU0LjQxOSAyOS4yNTk4IDI1Mi44NTkgMzQuMDA5OCAyNTIuODU5IDM5LjkxOThDMjUyLjg1OSA0NS44Mjk4IDI1NC4zMzkgNTAuNDA5OCAyNTcuMjM5IDUzLjczOTdDMjU4LjYzMiA1NS4zNDM5IDI2MC4zNzggNTYuNjAzNiAyNjIuMzM5IDU3LjQxOThDMjYzLjgyIDU4LjEwMTIgMjY1LjQyMSA1OC40ODE5IDI2Ny4wNDkgNTguNTM5OEMyNjguMDQ5IDU4LjUzOTggMjY5LjUwOSA1OC4zNjk4IDI2OS41MTkgNTguMzY5OEMyNzIuNTg1IDU3Ljg0NyAyNzUuMzI3IDU2LjE1NDggMjc3LjE2OSA1My42NDk4TDI3Ny4zMTkgNTMuNDQ5N1Y1Ny43MTk4SDI4Ny44OTlWMjEuODI5OEgyNzcuMzE5VjI1LjE3OThaTTI3Ny45MzkgNDAuNTk5OEMyNzcuOTU4IDQyLjA2MTIgMjc3Ljc5MyA0My41MTkyIDI3Ny40NDkgNDQuOTM5OEMyNzcuMTE3IDQ2LjIyNDggMjc2LjQ4NiA0Ny40MTM1IDI3NS42MDkgNDguNDA5OEMyNzUuMDI0IDQ5LjA4MDMgMjc0LjMwNSA0OS42MjE4IDI3My40OTkgNDkuOTk5OEMyNzIuNTkxIDUwLjM5MDYgMjcxLjYwOCA1MC41Nzg0IDI3MC42MTkgNTAuNTQ5OEMyNjkuNjQzIDUwLjU1MTggMjY4LjY4IDUwLjMzMDMgMjY3LjgwMyA0OS45MDIxQzI2Ni45MjYgNDkuNDc0IDI2Ni4xNTggNDguODUwNiAyNjUuNTU5IDQ4LjA3OThDMjY0LjE4OSA0Ni40Mzk4IDI2My40ODkgNDMuNjg5OCAyNjMuNDg5IDM5Ljg4OThDMjYzLjQ4OSAzNi4wODk4IDI2NC4xNzkgMzMuNDY5OCAyNjUuNDg5IDMxLjc0OThDMjY2LjA5OSAzMC45MjU0IDI2Ni44OTggMzAuMjU5MSAyNjcuODE4IDI5LjgwNjhDMjY4LjczOSAyOS4zNTQ0IDI2OS43NTQgMjkuMTI5MSAyNzAuNzc5IDI5LjE0OThDMjcxLjY2NiAyOS4xMTY1IDI3Mi41NDkgMjkuMjc4MyAyNzMuMzY3IDI5LjYyMzlDMjc0LjE4NCAyOS45Njk1IDI3NC45MTUgMzAuNDkwNCAyNzUuNTA5IDMxLjE0OThDMjc2LjMxMiAzMi4xMDE2IDI3Ni45MTEgMzMuMjA3NyAyNzcuMjY5IDM0LjM5OThDMjc3LjczNCAzNi4wMjQ2IDI3Ny45NDkgMzcuNzEwMyAyNzcuOTA5IDM5LjM5OThMMjc3LjkzOSA0MC41OTk4WiIgZmlsbD0iI0ZGRkZGRiIvPg0KICA8cGF0aCBkPSJNMjA2LjMgNi43NzAwM0MyMDUuMDk3IDYuNzY4MDUgMjAzLjkyMSA3LjEyMjk1IDIwMi45MTkgNy43ODk4M0MyMDEuOTE4IDguNDU2NyAyMDEuMTM3IDkuNDA1NTcgMjAwLjY3NiAxMC41MTY0QzIwMC4yMTQgMTEuNjI3MiAyMDAuMDkyIDEyLjg1IDIwMC4zMjYgMTQuMDNDMjAwLjU1OSAxNS4yMTAxIDIwMS4xMzcgMTYuMjk0NCAyMDEuOTg3IDE3LjE0NTdDMjAyLjgzNyAxNy45OTcgMjAzLjkyIDE4LjU3NyAyMDUuMSAxOC44MTI1QzIwNi4yOCAxOS4wNDc5IDIwNy41MDMgMTguOTI4MSAyMDguNjE0IDE4LjQ2ODJDMjA5LjcyNiAxOC4wMDgzIDIxMC42NzYgMTcuMjI5IDIxMS4zNDUgMTYuMjI4OUMyMTIuMDEzIDE1LjIyODkgMjEyLjM3IDE0LjA1MyAyMTIuMzcgMTIuODVDMjEyLjM3IDExLjIzOTIgMjExLjczMSA5LjY5NDI4IDIxMC41OTMgOC41NTQzNUMyMDkuNDU1IDcuNDE0NDEgMjA3LjkxMSA2Ljc3MjY4IDIwNi4zIDYuNzcwMDNaIiBmaWxsPSIjRkZGRkZGIi8+DQogIDxwYXRoIGQ9Ik0tMC4wOTk1NTk4IDM5LjU3Qy0wLjA5OTkwOTggNDcuMjQ5NyAyLjEwMzg2IDU0Ljc2ODEgNi4yNTAwMyA2MS4yMzIzQzEwLjM5NjIgNjcuNjk2NSAxNi4zMTA1IDcyLjgzNDkgMjMuMjkwNiA3Ni4wMzczQzMwLjI3MDcgNzkuMjM5NiAzOC4wMjMzIDgwLjM3MTQgNDUuNjI3NSA3OS4yOTgxQzUzLjIzMTggNzguMjI0OCA2MC4zNjgzIDc0Ljk5MTYgNjYuMTg5NCA2OS45ODI0QzcyLjAxMDQgNjQuOTczMiA3Ni4yNzE2IDU4LjM5ODYgNzguNDY2NiA1MS4wMzk0QzgwLjY2MTcgNDMuNjgwMSA4MC42OTg1IDM1Ljg0NTUgNzguNTcyNyAyOC40NjZDNzYuNDQ2OCAyMS4wODY0IDcyLjI0NzYgMTQuNDcyMSA2Ni40NzM5IDkuNDA4NDRDNjAuNzAwMSA0LjM0NDgxIDUzLjU5NDMgMS4wNDQ3IDQ2LjAwMDQgLTAuMDk5OTc1NkM0Ni4wMDA0IC0wLjA5OTk3NTYgNDYuMDAwNCA1Mi42IDQ2LjAwMDQgNTIuOEM0Ni4wMDA0IDYxLjEzIDM5Ljc0MDQgNjkgMzEuNDEwNCA2OUMyMy4wODA0IDY5IDE2LjIxMDQgNjIuODggMTYuMjEwNCA1NS4zOEMxNi4xNjI0IDUzLjM2NzUgMTYuNTIyMiA1MS4zNjYxIDE3LjI2ODEgNDkuNDk2M0MxOC4wMTM5IDQ3LjYyNjUgMTkuMTMwNSA0NS45MjcgMjAuNTUwNCA0NC41QzI0LjU1MDQgNDAuNTYgMzIuNDAwNCAzNi42MSAzNi42NTA0IDMxLjAzQzM5LjM2MDQgMjcuNDkgNDAuMDkwNCAyNS4xNiA0MC4wOTA0IDIxLjQxQzQwLjExODIgMTkuNDI4MyAzOS43NTUzIDE3LjQ2MDYgMzkuMDIyNSAxNS42MTkxQzM4LjI4OTcgMTMuNzc3NyAzNy4yMDE0IDEyLjA5ODYgMzUuODE5NiAxMC42Nzc5QzM0LjQzNzggOS4yNTcwOCAzMi43ODk3IDguMTIyNDEgMzAuOTY5NCA3LjMzODY2QzI5LjE0OSA2LjU1NDkgMjcuMTkyMSA2LjEzNzQxIDI1LjIxMDQgNi4xMTAwMkMyMS45ODcgNi4xNzU2OSAxOC44MjczIDcuMDE5NjcgMTYuMDAwNCA4LjU3MDAyQzExLjU4MDggMTEuMTA1OCA3LjkyODcgMTQuNzg5IDUuNDMwNDQgMTkuMjNDMS43OTkwMSAyNS4zOTI1IC0wLjExMDgzMyAzMi40MTcyIC0wLjA5OTU1OTggMzkuNTdaIiBmaWxsPSIjMDA4NjZEIi8+DQo8L3N2Zz4NCg==", ek = "https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58", Ii = [
  {
    id: "color",
    label: "Full color",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png",
    previewBackground: "#f7f7f7"
  },
  {
    id: "dark",
    label: "Dark background",
    url: qS,
    previewBackground: "#18181b"
  }
], jd = Ii[0].url, io = "'Cytiva Aktiv', Arial, Helvetica, sans-serif", Hn = {
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
}, $y = [
  { colorName: "Primary", hexValue: Hn.primary, colorUsageType: "Primary" },
  { colorName: "Secondary", hexValue: Hn.secondary, colorUsageType: "Secondary" },
  { colorName: "Accent", hexValue: Hn.accent, colorUsageType: "Accent" },
  { colorName: "Background", hexValue: Hn.background, colorUsageType: "Background" }
], jy = [
  { fontFamily: io, fontWeight: "Bold", fontUsageType: "Heading" },
  { fontFamily: io, fontWeight: "Regular", fontUsageType: "Body" },
  { fontFamily: io, fontWeight: "Medium", fontUsageType: "CTA" }
];
function Ki(e) {
  var r;
  const t = e == null ? void 0 : e.trim();
  if (!t)
    return jd;
  if (t === ek)
    return ((r = Ii.find((o) => o.id === "dark")) == null ? void 0 : r.url) ?? t;
  const n = Ii.find(
    (o) => o.url === t || o.id === t
  );
  return n ? n.url : t;
}
function Ry(e) {
  var n;
  const t = Ki(e);
  return (n = Ii.find((r) => r.url === t)) == null ? void 0 : n.previewBackground;
}
function tk(e) {
  var t;
  return {
    ...e,
    brandKitName: ((t = e.brandKitName) == null ? void 0 : t.trim()) || "Cytiva",
    logoAssetUrl: Ki(e.logoAssetUrl),
    colors: $y,
    fonts: jy
  };
}
function nk(e) {
  return tk({
    id: e,
    brandKitName: "Cytiva",
    logoAssetUrl: jd,
    colors: $y,
    fonts: jy
  });
}
const Rd = [
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
], Uy = [
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
], rk = [
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
function al(e) {
  switch (e) {
    case "Email":
      return Uy;
    case "Newsletter":
      return rk;
    default:
      return Rd;
  }
}
function Hy(e) {
  const t = e.canvasWidth, n = e.canvasHeight;
  return t != null && n != null ? `${t} × ${n} px` : t != null ? `${t} px wide` : "Not set";
}
function ok(e, t) {
  return e.canvasWidth !== t.width ? !1 : t.height != null ? e.canvasHeight === t.height : e.canvasHeight == null || e.canvasHeight === void 0;
}
function ik(e) {
  const t = al(e.channelType), n = t.find((o) => ok(e, o));
  if (n)
    return n.id;
  const r = t.find(
    (o) => o.formatPreset.trim().toLowerCase() === (e.formatPreset ?? "").trim().toLowerCase()
  );
  return r ? r.id : "custom";
}
function ak(e, t) {
  if (t === "custom")
    return null;
  const n = al(e).find((r) => r.id === t);
  return n ? {
    canvasWidth: n.width,
    canvasHeight: n.height,
    formatPreset: n.formatPreset
  } : null;
}
function Fy(e) {
  const t = al(e)[0];
  return {
    canvasWidth: t.width,
    canvasHeight: t.height,
    formatPreset: t.formatPreset
  };
}
function Ud(e) {
  return e.canvasWidth != null && Number.isFinite(e.canvasWidth) ? e.canvasWidth : e.channelType === "Email" || e.channelType === "Newsletter" ? Uy[0].width : Rd[0].width;
}
function By(e) {
  return e.canvasHeight != null && Number.isFinite(e.canvasHeight) ? e.canvasHeight : e.channelType === "Email" || e.channelType === "Newsletter" ? 800 : Rd[0].height ?? 1080;
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function hm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function sk(e) {
  if (Array.isArray(e))
    return e;
}
function lk(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0)
        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0)
          ;
    } catch (f) {
      u = !0, o = f;
    } finally {
      try {
        if (!l && n.return != null && (a = n.return(), Object(a) !== a))
          return;
      } finally {
        if (u)
          throw o;
      }
    }
    return s;
  }
}
function uk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ck(e, t) {
  return sk(e) || lk(e, t) || dk(e, t) || uk();
}
function dk(e, t) {
  if (e) {
    if (typeof e == "string")
      return hm(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hm(e, t) : void 0;
  }
}
const Ky = Object.entries, gm = Object.setPrototypeOf, fk = Object.isFrozen, pk = Object.getPrototypeOf, mk = Object.getOwnPropertyDescriptor;
let Be = Object.freeze, Ye = Object.seal, $r = Object.create, Zy = typeof Reflect < "u" && Reflect, hc = Zy.apply, gc = Zy.construct;
Be || (Be = function(t) {
  return t;
});
Ye || (Ye = function(t) {
  return t;
});
hc || (hc = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    o[i - 2] = arguments[i];
  return t.apply(n, o);
});
gc || (gc = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Uo = Le(Array.prototype.forEach), hk = Le(Array.prototype.lastIndexOf), ym = Le(Array.prototype.pop), Pr = Le(Array.prototype.push), gk = Le(Array.prototype.splice), bn = Array.isArray, Wo = Le(String.prototype.toLowerCase), ou = Le(String.prototype.toString), vm = Le(String.prototype.match), Ho = Le(String.prototype.replace), wm = Le(String.prototype.indexOf), yk = Le(String.prototype.trim), vk = Le(Number.prototype.toString), wk = Le(Boolean.prototype.toString), Tm = typeof BigInt > "u" ? null : Le(BigInt.prototype.toString), Am = typeof Symbol > "u" ? null : Le(Symbol.prototype.toString), _e = Le(Object.prototype.hasOwnProperty), Fo = Le(Object.prototype.toString), Ue = Le(RegExp.prototype.test), ar = Tk(TypeError);
function Le(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return hc(e, t, r);
  };
}
function Tk(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return gc(e, n);
  };
}
function G(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wo;
  if (gm && gm(e, null), !bn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (fk(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function Ak(e) {
  for (let t = 0; t < e.length; t++)
    _e(e, t) || (e[t] = null);
  return e;
}
function rt(e) {
  const t = $r(null);
  for (const r of Ky(e)) {
    var n = ck(r, 2);
    const o = n[0], i = n[1];
    _e(e, o) && (bn(i) ? t[o] = Ak(i) : i && typeof i == "object" && i.constructor === Object ? t[o] = rt(i) : t[o] = i);
  }
  return t;
}
function Sk(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return vk(e);
    case "boolean":
      return wk(e);
    case "bigint":
      return Tm ? Tm(e) : "0";
    case "symbol":
      return Am ? Am(e) : "Symbol()";
    case "undefined":
      return Fo(e);
    case "function":
    case "object": {
      if (e === null)
        return Fo(e);
      const t = e, n = qt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Fo(r);
      }
      return Fo(e);
    }
    default:
      return Fo(e);
  }
}
function qt(e, t) {
  for (; e !== null; ) {
    const r = mk(e, t);
    if (r) {
      if (r.get)
        return Le(r.get);
      if (typeof r.value == "function")
        return Le(r.value);
    }
    e = pk(e);
  }
  function n() {
    return null;
  }
  return n;
}
function kk(e) {
  try {
    return Ue(e, ""), !0;
  } catch {
    return !1;
  }
}
const Sm = Be(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), iu = Be(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), au = Be(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ek = Be(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), su = Be(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nk = Be(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), km = Be(["#text"]), Em = Be(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), lu = Be(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Nm = Be(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), va = Be(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Mk = Ye(/{{[\w\W]*|^[\w\W]*}}/g), Ck = Ye(/<%[\w\W]*|^[\w\W]*%>/g), zk = Ye(/\${[\w\W]*/g), Lk = Ye(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ik = Ye(/^aria-[\-\w]+$/), Mm = Ye(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), xk = Ye(/^(?:\w+script|data):/i), Dk = Ye(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ok = Ye(/^html$/i), Pk = Ye(/^[a-z][.\w]*(-[.\w]+)+$/i), Cm = Ye(/<[/\w!]/g), _k = Ye(/<[/\w]/g), bk = Ye(/<\/no(script|embed|frames)/i), $k = Ye(/\/>/i), Jt = {
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
}, jk = function() {
  return typeof window > "u" ? null : window;
}, Rk = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const o = "data-tt-policy-suffix";
  n && n.hasAttribute(o) && (r = n.getAttribute(o));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(i, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, zm = function() {
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
}, xn = function(t, n, r, o) {
  return _e(t, n) && bn(t[n]) ? G(o.base ? rt(o.base) : {}, t[n], o.transform) : r;
};
function Vy() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jk();
  const t = (_) => Vy(_);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== Jt.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, a = e.Node, s = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, c = e.trustedTypes, d = s.prototype, v = qt(d, "cloneNode"), T = qt(d, "remove"), w = qt(d, "nextSibling"), L = qt(d, "childNodes"), y = qt(d, "parentNode"), h = qt(d, "shadowRoot"), g = qt(d, "attributes"), E = a && a.prototype ? qt(a.prototype, "nodeType") : null, I = a && a.prototype ? qt(a.prototype, "nodeName") : null;
  if (typeof i == "function") {
    const _ = n.createElement("template");
    _.content && _.content.ownerDocument && (n = _.content.ownerDocument);
  }
  let M, A = "", z, B = !1, j = 0;
  const U = function() {
    if (j > 0)
      throw ar('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, b = function(p) {
    U(), j++;
    try {
      return M.createHTML(p);
    } finally {
      j--;
    }
  }, q = function(p) {
    U(), j++;
    try {
      return M.createScriptURL(p);
    } finally {
      j--;
    }
  }, ee = function() {
    return B || (z = Rk(c, o), B = !0), z;
  }, De = n, Q = De.implementation, Ct = De.createNodeIterator, $ = De.createDocumentFragment, Z = De.getElementsByTagName, S = r.importNode;
  let x = zm();
  t.isSupported = typeof Ky == "function" && typeof y == "function" && Q && Q.createHTMLDocument !== void 0;
  const K = Mk, ue = Ck, fe = zk, lt = Lk, Qe = Ik, Oe = xk, ut = Dk, Mo = Pk;
  let ef = Mm, ye = null;
  const tf = G({}, [...Sm, ...iu, ...au, ...su, ...km]);
  let ve = null;
  const nf = G({}, [...Em, ...lu, ...Nm, ...va]);
  let we = Object.seal($r(null, {
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
  })), Co = null, rf = null;
  const Cn = Object.seal($r(null, {
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
  let of = !0, dl = !0, af = !1, sf = !0, zn = !1, zo = !0, or = !1, fl = !1, pl = null, ml = null, hl = !1, zr = !1, Vi = !1, Wi = !1, lf = !0, uf = !1;
  const cf = "user-content-";
  let gl = !0, yl = !1, Lr = {}, Yt = null;
  const vl = G({}, [
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
  let df = null;
  const ff = G({}, ["audio", "video", "img", "source", "image", "track"]);
  let wl = null;
  const pf = G({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Yi = "http://www.w3.org/1998/Math/MathML", Qi = "http://www.w3.org/2000/svg", Qt = "http://www.w3.org/1999/xhtml";
  let Ir = Qt, Tl = !1, Al = null;
  const bv = G({}, [Yi, Qi, Qt], ou), mf = Be(["mi", "mo", "mn", "ms", "mtext"]);
  let Sl = G({}, mf);
  const hf = Be(["annotation-xml"]);
  let kl = G({}, hf);
  const $v = G({}, ["title", "style", "font", "a", "script"]);
  let Lo = null;
  const jv = ["application/xhtml+xml", "text/html"], Rv = "text/html";
  let Te = null, xr = null;
  const Uv = n.createElement("form"), gf = function(p) {
    return p instanceof RegExp || p instanceof Function;
  }, El = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (xr && xr === p)
      return;
    (!p || typeof p != "object") && (p = {}), p = rt(p), Lo = // eslint-disable-next-line unicorn/prefer-includes
    jv.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? Rv : p.PARSER_MEDIA_TYPE, Te = Lo === "application/xhtml+xml" ? ou : Wo, ye = xn(p, "ALLOWED_TAGS", tf, {
      transform: Te
    }), ve = xn(p, "ALLOWED_ATTR", nf, {
      transform: Te
    }), Al = xn(p, "ALLOWED_NAMESPACES", bv, {
      transform: ou
    }), wl = xn(p, "ADD_URI_SAFE_ATTR", pf, {
      transform: Te,
      base: pf
    }), df = xn(p, "ADD_DATA_URI_TAGS", ff, {
      transform: Te,
      base: ff
    }), Yt = xn(p, "FORBID_CONTENTS", vl, {
      transform: Te
    }), Co = xn(p, "FORBID_TAGS", rt({}), {
      transform: Te
    }), rf = xn(p, "FORBID_ATTR", rt({}), {
      transform: Te
    }), Lr = _e(p, "USE_PROFILES") ? p.USE_PROFILES && typeof p.USE_PROFILES == "object" ? rt(p.USE_PROFILES) : p.USE_PROFILES : !1, of = p.ALLOW_ARIA_ATTR !== !1, dl = p.ALLOW_DATA_ATTR !== !1, af = p.ALLOW_UNKNOWN_PROTOCOLS || !1, sf = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, zn = p.SAFE_FOR_TEMPLATES || !1, zo = p.SAFE_FOR_XML !== !1, or = p.WHOLE_DOCUMENT || !1, zr = p.RETURN_DOM || !1, Vi = p.RETURN_DOM_FRAGMENT || !1, Wi = p.RETURN_TRUSTED_TYPE || !1, hl = p.FORCE_BODY || !1, lf = p.SANITIZE_DOM !== !1, uf = p.SANITIZE_NAMED_PROPS || !1, gl = p.KEEP_CONTENT !== !1, yl = p.IN_PLACE || !1, ef = kk(p.ALLOWED_URI_REGEXP) ? p.ALLOWED_URI_REGEXP : Mm, Ir = typeof p.NAMESPACE == "string" ? p.NAMESPACE : Qt, Sl = _e(p, "MATHML_TEXT_INTEGRATION_POINTS") && p.MATHML_TEXT_INTEGRATION_POINTS && typeof p.MATHML_TEXT_INTEGRATION_POINTS == "object" ? rt(p.MATHML_TEXT_INTEGRATION_POINTS) : G({}, mf), kl = _e(p, "HTML_INTEGRATION_POINTS") && p.HTML_INTEGRATION_POINTS && typeof p.HTML_INTEGRATION_POINTS == "object" ? rt(p.HTML_INTEGRATION_POINTS) : G({}, hf);
    const k = _e(p, "CUSTOM_ELEMENT_HANDLING") && p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING == "object" ? rt(p.CUSTOM_ELEMENT_HANDLING) : $r(null);
    if (we = $r(null), _e(k, "tagNameCheck") && gf(k.tagNameCheck) && (we.tagNameCheck = k.tagNameCheck), _e(k, "attributeNameCheck") && gf(k.attributeNameCheck) && (we.attributeNameCheck = k.attributeNameCheck), _e(k, "allowCustomizedBuiltInElements") && typeof k.allowCustomizedBuiltInElements == "boolean" && (we.allowCustomizedBuiltInElements = k.allowCustomizedBuiltInElements), Ye(we), zn && (dl = !1), Vi && (zr = !0), Lr && (ye = G({}, km), ve = $r(null), Lr.html === !0 && (G(ye, Sm), G(ve, Em)), Lr.svg === !0 && (G(ye, iu), G(ve, lu), G(ve, va)), Lr.svgFilters === !0 && (G(ye, au), G(ve, lu), G(ve, va)), Lr.mathMl === !0 && (G(ye, su), G(ve, Nm), G(ve, va))), Cn.tagCheck = null, Cn.attributeCheck = null, _e(p, "ADD_TAGS") && (typeof p.ADD_TAGS == "function" ? Cn.tagCheck = p.ADD_TAGS : bn(p.ADD_TAGS) && (ye === tf && (ye = rt(ye)), G(ye, p.ADD_TAGS, Te))), _e(p, "ADD_ATTR") && (typeof p.ADD_ATTR == "function" ? Cn.attributeCheck = p.ADD_ATTR : bn(p.ADD_ATTR) && (ve === nf && (ve = rt(ve)), G(ve, p.ADD_ATTR, Te))), _e(p, "ADD_URI_SAFE_ATTR") && bn(p.ADD_URI_SAFE_ATTR) && G(wl, p.ADD_URI_SAFE_ATTR, Te), _e(p, "FORBID_CONTENTS") && bn(p.FORBID_CONTENTS) && (Yt === vl && (Yt = rt(Yt)), G(Yt, p.FORBID_CONTENTS, Te)), _e(p, "ADD_FORBID_CONTENTS") && bn(p.ADD_FORBID_CONTENTS) && (Yt === vl && (Yt = rt(Yt)), G(Yt, p.ADD_FORBID_CONTENTS, Te)), gl && (ye["#text"] = !0), or && G(ye, ["html", "head", "body"]), ye.table && (G(ye, ["tbody"]), delete Co.tbody), p.TRUSTED_TYPES_POLICY) {
      if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ar('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ar('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const P = M;
      M = p.TRUSTED_TYPES_POLICY;
      try {
        A = b("");
      } catch (H) {
        throw M = P, H;
      }
    } else
      p.TRUSTED_TYPES_POLICY === null ? (M = void 0, A = "") : (M === void 0 && (M = ee()), M && typeof A == "string" && (A = b("")));
    Be && Be(p), xr = p;
  }, yf = G({}, [...iu, ...au, ...Ek]), vf = G({}, [...su, ...Nk]), Hv = function(p, k, P) {
    return k.namespaceURI === Qt ? p === "svg" : k.namespaceURI === Yi ? p === "svg" && (P === "annotation-xml" || Sl[P]) : !!yf[p];
  }, Fv = function(p, k, P) {
    return k.namespaceURI === Qt ? p === "math" : k.namespaceURI === Qi ? p === "math" && kl[P] : !!vf[p];
  }, Bv = function(p, k, P) {
    return k.namespaceURI === Qi && !kl[P] || k.namespaceURI === Yi && !Sl[P] ? !1 : !vf[p] && ($v[p] || !yf[p]);
  }, Kv = function(p) {
    let k = y(p);
    (!k || !k.tagName) && (k = {
      namespaceURI: Ir,
      tagName: "template"
    });
    const P = Wo(p.tagName), H = Wo(k.tagName);
    return Al[p.namespaceURI] ? p.namespaceURI === Qi ? Hv(P, k, H) : p.namespaceURI === Yi ? Fv(P, k, H) : p.namespaceURI === Qt ? Bv(P, k, H) : !!(Lo === "application/xhtml+xml" && Al[p.namespaceURI]) : !1;
  }, Ln = function(p) {
    Pr(t.removed, {
      element: p
    });
    try {
      y(p).removeChild(p);
    } catch {
      if (T(p), !y(p))
        throw ar("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, wf = function(p) {
    const k = L(p);
    if (k) {
      const H = [];
      Uo(k, (V) => {
        Pr(H, V);
      }), Uo(H, (V) => {
        try {
          T(V);
        } catch {
        }
      });
    }
    const P = g(p);
    if (P)
      for (let H = P.length - 1; H >= 0; --H) {
        const V = P[H], X = V && V.name;
        if (typeof X == "string")
          try {
            p.removeAttribute(X);
          } catch {
          }
      }
  }, ir = function(p, k) {
    try {
      Pr(t.removed, {
        attribute: k.getAttributeNode(p),
        from: k
      });
    } catch {
      Pr(t.removed, {
        attribute: null,
        from: k
      });
    }
    if (k.removeAttribute(p), p === "is")
      if (zr || Vi)
        try {
          Ln(k);
        } catch {
        }
      else
        try {
          k.setAttribute(p, "");
        } catch {
        }
  }, Zv = function(p) {
    const k = g(p);
    if (k)
      for (let P = k.length - 1; P >= 0; --P) {
        const H = k[P], V = H && H.name;
        if (!(typeof V != "string" || ve[Te(V)]))
          try {
            p.removeAttribute(V);
          } catch {
          }
      }
  }, Vv = function(p) {
    const k = [p];
    for (; k.length > 0; ) {
      const P = k.pop();
      (E ? E(P) : P.nodeType) === Jt.element && Zv(P);
      const V = L(P);
      if (V)
        for (let X = V.length - 1; X >= 0; --X)
          k.push(V[X]);
    }
  }, Tf = function(p) {
    let k = null, P = null;
    if (hl)
      p = "<remove></remove>" + p;
    else {
      const X = vm(p, /^[\r\n\t ]+/);
      P = X && X[0];
    }
    Lo === "application/xhtml+xml" && Ir === Qt && (p = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + p + "</body></html>");
    const H = M ? b(p) : p;
    if (Ir === Qt)
      try {
        k = new f().parseFromString(H, Lo);
      } catch {
      }
    if (!k || !k.documentElement) {
      k = Q.createDocument(Ir, "template", null);
      try {
        k.documentElement.innerHTML = Tl ? A : H;
      } catch {
      }
    }
    const V = k.body || k.documentElement;
    return p && P && V.insertBefore(n.createTextNode(P), V.childNodes[0] || null), Ir === Qt ? Z.call(k, or ? "html" : "body")[0] : or ? k.documentElement : V;
  }, Af = function(p) {
    return Ct.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Gi = function(p) {
    return p = Ho(p, K, " "), p = Ho(p, ue, " "), p = Ho(p, fe, " "), p;
  }, Nl = function(p) {
    var k;
    p.normalize();
    const P = Ct.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = P.nextNode();
    for (; H; )
      H.data = Gi(H.data), H = P.nextNode();
    const V = (k = p.querySelectorAll) === null || k === void 0 ? void 0 : k.call(p, "template");
    V && Uo(V, (X) => {
      Dr(X.content) && Nl(X.content);
    });
  }, Xi = function(p) {
    const k = I ? I(p) : null;
    return typeof k != "string" || Te(k) !== "form" ? !1 : typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    p.attributes !== g(p) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    p.nodeType !== E(p) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    p.childNodes !== L(p);
  }, Dr = function(p) {
    if (!E || typeof p != "object" || p === null)
      return !1;
    try {
      return E(p) === Jt.documentFragment;
    } catch {
      return !1;
    }
  }, Io = function(p) {
    if (!E || typeof p != "object" || p === null)
      return !1;
    try {
      return typeof E(p) == "number";
    } catch {
      return !1;
    }
  };
  function fn(_, p, k) {
    _.length !== 0 && Uo(_, (P) => {
      P.call(t, p, k, xr);
    });
  }
  const Wv = function(p, k) {
    return !!(zo && p.hasChildNodes() && !Io(p.firstElementChild) && Ue(Cm, p.textContent) && Ue(Cm, p.innerHTML) || zo && p.namespaceURI === Qt && k === "style" && Io(p.firstElementChild) || p.nodeType === Jt.processingInstruction || zo && p.nodeType === Jt.comment && Ue(_k, p.data));
  }, Yv = function(p, k) {
    if (!Co[k] && Ef(k) && (we.tagNameCheck instanceof RegExp && Ue(we.tagNameCheck, k) || we.tagNameCheck instanceof Function && we.tagNameCheck(k)))
      return !1;
    if (gl && !Yt[k]) {
      const P = y(p), H = L(p);
      if (H && P) {
        const V = H.length;
        for (let X = V - 1; X >= 0; --X) {
          const Pe = yl ? H[X] : v(H[X], !0);
          P.insertBefore(Pe, w(p));
        }
      }
    }
    return Ln(p), !0;
  }, Sf = function(p) {
    if (fn(x.beforeSanitizeElements, p, null), Xi(p))
      return Ln(p), !0;
    const k = Te(I ? I(p) : p.nodeName);
    if (fn(x.uponSanitizeElement, p, {
      tagName: k,
      allowedTags: ye
    }), Wv(p, k))
      return Ln(p), !0;
    if (Co[k] || !(Cn.tagCheck instanceof Function && Cn.tagCheck(k)) && !ye[k])
      return Yv(p, k);
    if ((E ? E(p) : p.nodeType) === Jt.element && !Kv(p) || (k === "noscript" || k === "noembed" || k === "noframes") && Ue(bk, p.innerHTML))
      return Ln(p), !0;
    if (zn && p.nodeType === Jt.text) {
      const H = Gi(p.textContent);
      p.textContent !== H && (Pr(t.removed, {
        element: p.cloneNode()
      }), p.textContent = H);
    }
    return fn(x.afterSanitizeElements, p, null), !1;
  }, kf = function(p, k, P) {
    if (rf[k] || lf && (k === "id" || k === "name") && (P in n || P in Uv))
      return !1;
    const H = ve[k] || Cn.attributeCheck instanceof Function && Cn.attributeCheck(k, p);
    if (!(dl && Ue(lt, k))) {
      if (!(of && Ue(Qe, k))) {
        if (H) {
          if (!wl[k]) {
            if (!Ue(ef, Ho(P, ut, ""))) {
              if (!((k === "src" || k === "xlink:href" || k === "href") && p !== "script" && wm(P, "data:") === 0 && df[p])) {
                if (!(af && !Ue(Oe, Ho(P, ut, "")))) {
                  if (P)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Ef(p) && (we.tagNameCheck instanceof RegExp && Ue(we.tagNameCheck, p) || we.tagNameCheck instanceof Function && we.tagNameCheck(p)) && (we.attributeNameCheck instanceof RegExp && Ue(we.attributeNameCheck, k) || we.attributeNameCheck instanceof Function && we.attributeNameCheck(k, p)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          k === "is" && we.allowCustomizedBuiltInElements && (we.tagNameCheck instanceof RegExp && Ue(we.tagNameCheck, P) || we.tagNameCheck instanceof Function && we.tagNameCheck(P)))
        )
          return !1;
      }
    }
    return !0;
  }, Qv = G({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ef = function(p) {
    return !Qv[Wo(p)] && Ue(Mo, p);
  }, Gv = function(p, k, P, H) {
    if (M && typeof c == "object" && typeof c.getAttributeType == "function" && !P)
      switch (c.getAttributeType(p, k)) {
        case "TrustedHTML":
          return b(H);
        case "TrustedScriptURL":
          return q(H);
      }
    return H;
  }, Xv = function(p, k, P, H) {
    try {
      P ? p.setAttributeNS(P, k, H) : p.setAttribute(k, H), Xi(p) ? Ln(p) : ym(t.removed);
    } catch {
      ir(k, p);
    }
  }, Nf = function(p) {
    fn(x.beforeSanitizeAttributes, p, null);
    const k = p.attributes;
    if (!k || Xi(p))
      return;
    const P = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ve,
      forceKeepAttr: void 0
    };
    let H = k.length;
    const V = Te(p.nodeName);
    for (; H--; ) {
      const X = k[H], Pe = X.name, Me = X.namespaceURI, zt = X.value, $t = Te(Pe), Cl = zt;
      let nt = Pe === "value" ? Cl : yk(Cl);
      if (P.attrName = $t, P.attrValue = nt, P.keepAttr = !0, P.forceKeepAttr = void 0, fn(x.uponSanitizeAttribute, p, P), nt = P.attrValue, uf && ($t === "id" || $t === "name") && wm(nt, cf) !== 0 && (ir(Pe, p), nt = cf + nt), zo && Ue(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, nt)) {
        ir(Pe, p);
        continue;
      }
      if ($t === "attributename" && vm(nt, "href")) {
        ir(Pe, p);
        continue;
      }
      if (!P.forceKeepAttr) {
        if (!P.keepAttr) {
          ir(Pe, p);
          continue;
        }
        if (!sf && Ue($k, nt)) {
          ir(Pe, p);
          continue;
        }
        if (zn && (nt = Gi(nt)), !kf(V, $t, nt)) {
          ir(Pe, p);
          continue;
        }
        nt = Gv(V, $t, Me, nt), nt !== Cl && Xv(p, Pe, Me, nt);
      }
    }
    fn(x.afterSanitizeAttributes, p, null);
  }, Ji = function(p) {
    let k = null;
    const P = Af(p);
    for (fn(x.beforeSanitizeShadowDOM, p, null); k = P.nextNode(); )
      if (fn(x.uponSanitizeShadowNode, k, null), Sf(k), Nf(k), Dr(k.content) && Ji(k.content), (E ? E(k) : k.nodeType) === Jt.element) {
        const V = h(k);
        Dr(V) && (Ml(V), Ji(V));
      }
    fn(x.afterSanitizeShadowDOM, p, null);
  }, Ml = function(p) {
    const k = [{
      node: p,
      shadow: null
    }];
    for (; k.length > 0; ) {
      const P = k.pop();
      if (P.shadow) {
        Ji(P.shadow);
        continue;
      }
      const H = P.node, X = (E ? E(H) : H.nodeType) === Jt.element, Pe = L(H);
      if (Pe)
        for (let Me = Pe.length - 1; Me >= 0; --Me)
          k.push({
            node: Pe[Me],
            shadow: null
          });
      if (X) {
        const Me = I ? I(H) : null;
        if (typeof Me == "string" && Te(Me) === "template") {
          const zt = H.content;
          Dr(zt) && k.push({
            node: zt,
            shadow: null
          });
        }
      }
      if (X) {
        const Me = h(H);
        Dr(Me) && k.push({
          node: null,
          shadow: Me
        }, {
          node: Me,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(_) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k = null, P = null, H = null, V = null;
    if (Tl = !_, Tl && (_ = "<!-->"), typeof _ != "string" && !Io(_) && (_ = Sk(_), typeof _ != "string"))
      throw ar("dirty is not a string, aborting");
    if (!t.isSupported)
      return _;
    fl ? (ye = pl, ve = ml) : El(p), (x.uponSanitizeElement.length > 0 || x.uponSanitizeAttribute.length > 0) && (ye = rt(ye)), x.uponSanitizeAttribute.length > 0 && (ve = rt(ve)), t.removed = [];
    const X = yl && typeof _ != "string" && Io(_);
    if (X) {
      const zt = I ? I(_) : _.nodeName;
      if (typeof zt == "string") {
        const $t = Te(zt);
        if (!ye[$t] || Co[$t])
          throw ar("root node is forbidden and cannot be sanitized in-place");
      }
      if (Xi(_))
        throw ar("root node is clobbered and cannot be sanitized in-place");
      try {
        Ml(_);
      } catch ($t) {
        throw wf(_), $t;
      }
    } else if (Io(_))
      k = Tf("<!---->"), P = k.ownerDocument.importNode(_, !0), P.nodeType === Jt.element && P.nodeName === "BODY" || P.nodeName === "HTML" ? k = P : k.appendChild(P), Ml(P);
    else {
      if (!zr && !zn && !or && // eslint-disable-next-line unicorn/prefer-includes
      _.indexOf("<") === -1)
        return M && Wi ? b(_) : _;
      if (k = Tf(_), !k)
        return zr ? null : Wi ? A : "";
    }
    k && hl && Ln(k.firstChild);
    const Pe = Af(X ? _ : k);
    try {
      for (; H = Pe.nextNode(); )
        Sf(H), Nf(H), Dr(H.content) && Ji(H.content);
    } catch (zt) {
      throw X && wf(_), zt;
    }
    if (X)
      return Uo(t.removed, (zt) => {
        zt.element && Vv(zt.element);
      }), zn && Nl(_), _;
    if (zr) {
      if (zn && Nl(k), Vi)
        for (V = $.call(k.ownerDocument); k.firstChild; )
          V.appendChild(k.firstChild);
      else
        V = k;
      return (ve.shadowroot || ve.shadowrootmode) && (V = S.call(r, V, !0)), V;
    }
    let Me = or ? k.outerHTML : k.innerHTML;
    return or && ye["!doctype"] && k.ownerDocument && k.ownerDocument.doctype && k.ownerDocument.doctype.name && Ue(Ok, k.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + k.ownerDocument.doctype.name + `>
` + Me), zn && (Me = Gi(Me)), M && Wi ? b(Me) : Me;
  }, t.setConfig = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    El(_), fl = !0, pl = ye, ml = ve;
  }, t.clearConfig = function() {
    xr = null, fl = !1, pl = null, ml = null, M = z, A = "";
  }, t.isValidAttribute = function(_, p, k) {
    xr || El({});
    const P = Te(_), H = Te(p);
    return kf(P, H, k);
  }, t.addHook = function(_, p) {
    typeof p == "function" && _e(x, _) && Pr(x[_], p);
  }, t.removeHook = function(_, p) {
    if (_e(x, _)) {
      if (p !== void 0) {
        const k = hk(x[_], p);
        return k === -1 ? void 0 : gk(x[_], k, 1)[0];
      }
      return ym(x[_]);
    }
  }, t.removeHooks = function(_) {
    _e(x, _) && (x[_] = []);
  }, t.removeAllHooks = function() {
    x = zm();
  }, t;
}
var Uk = Vy();
const Hk = [
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
], Fk = ["href", "style", "src", "alt", "width", "height", "align", "colspan", "rowspan", "target", "rel"];
function xi(e) {
  return e != null && e.trim() ? Uk.sanitize(e, {
    ALLOWED_TAGS: [...Hk],
    ALLOWED_ATTR: Fk,
    ALLOW_DATA_ATTR: !1
  }) : "";
}
const Wy = ["H1", "H2", "H3", "H4", "H5", "H6"], Nn = "H2";
function Bk(e) {
  const t = e == null ? void 0 : e.trim().toUpperCase();
  return t && Wy.includes(t) ? t : Nn;
}
const Kk = {
  H1: "32px",
  H2: "28px",
  H3: "24px",
  H4: "20px",
  H5: "18px",
  H6: "16px"
}, Zk = {
  H1: "2rem",
  H2: "1.75rem",
  H3: "1.5rem",
  H4: "1.25rem",
  H5: "1.125rem",
  H6: "1rem"
}, Yy = ["Left", "Center", "Right"], Qy = ["Top", "Right", "Bottom", "Left"], Mr = "Left", sl = "Top";
function Gy(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "center" ? "Center" : t === "right" ? "Right" : "Left";
}
function Xy(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "right" ? "Right" : t === "bottom" ? "Bottom" : t === "left" ? "Left" : "Top";
}
function Vk(e, t = {}, n = "stacked") {
  const r = e.contentAlignment ?? Mr, o = Math.max(0, e.offsetPx ?? 0), i = e.offsetDirection ?? sl, a = {
    ...t,
    textAlign: r.toLowerCase()
  };
  if (n === "stacked" && a.width == null && (a.width = "100%"), o > 0) {
    const s = {
      Top: "marginTop",
      Right: "marginRight",
      Bottom: "marginBottom",
      Left: "marginLeft"
    }[i];
    a[s] = o;
  }
  return a;
}
function Wk(e) {
  return `zone-layout-${(e.contentAlignment ?? Mr).toLowerCase()}`;
}
function Yk(e) {
  const t = { top: 16, right: 24, bottom: 16, left: 24 }, n = Math.max(0, e.offsetPx ?? 0);
  if (n <= 0)
    return t;
  const r = e.offsetDirection ?? sl;
  return r === "Top" && (t.top += n), r === "Right" && (t.right += n), r === "Bottom" && (t.bottom += n), r === "Left" && (t.left += n), t;
}
function uu(e, t = "") {
  const n = (e.contentAlignment ?? Mr).toLowerCase(), r = Yk(e);
  return `padding:${r.top}px ${r.right}px ${r.bottom}px ${r.left}px;text-align:${n};${t}`;
}
function Qk(e) {
  return (e.contentAlignment ?? Mr).toLowerCase();
}
function Gk(e) {
  const t = e.contentAlignment ?? Mr, n = "display:block;width:100%;max-width:552px;height:auto;border:0;";
  return t === "Center" ? `${n}margin:0 auto;` : t === "Right" ? `${n}margin-left:auto;margin-right:0;` : `${n}margin:0;`;
}
function Xk() {
  return "display:inline-block;";
}
function en(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Pa(e, t, n) {
  var r;
  return ((r = e.colors.find((o) => o.colorUsageType === t)) == null ? void 0 : r.hexValue) ?? n;
}
function cu(e, t, n) {
  var r;
  return ((r = e.fonts.find((o) => o.fontUsageType === t)) == null ? void 0 : r.fontFamily) ?? n;
}
function Jk(e) {
  const t = e.zoneKey.toLowerCase(), n = e.zoneLabel.toLowerCase();
  return t.includes("headline") || n.includes("headline");
}
function qk(e, t, n) {
  var i, a, s, l, u, f;
  const r = Qk(e), o = uu(e);
  if (nl(e)) {
    const c = uu(e, "padding-top:24px;padding-bottom:16px;"), d = (t == null ? void 0 : t.imageAssetUrl) ?? n.logoAssetUrl, v = Ki(d), T = Ry(d), w = T ? `background-color:${T};` : "";
    return `<tr>
      <td align="${r}" style="${c}${w}">
        <img src="${en(v)}" alt="${en(n.brandKitName)}" width="200" style="display:inline-block;max-width:200px;height:auto;border:0;" />
      </td>
    </tr>`;
  }
  switch (e.zoneType) {
    case "Text": {
      const c = (i = t == null ? void 0 : t.textValue) == null ? void 0 : i.trim();
      if (!c)
        return "";
      const d = Jk(e), v = cu(n, d ? "Heading" : "Body", io), T = d ? "28px" : "16px", w = d ? "bold" : "normal", L = Pa(n, "Secondary", Hn.secondary);
      return `<tr>
        <td align="${r}" style="${o}font-family:${v};font-size:${T};font-weight:${w};color:${L};line-height:1.5;">
          ${en(c)}
        </td>
      </tr>`;
    }
    case "Heading": {
      const c = (a = t == null ? void 0 : t.textValue) == null ? void 0 : a.trim();
      if (!c)
        return "";
      const d = e.headingLevel ?? Nn, v = cu(n, "Heading", io), T = Kk[d], w = Pa(n, "Secondary", Hn.secondary), L = d.toLowerCase();
      return `<tr>
        <td align="${r}" style="${o}">
          <${L} style="margin:0;font-family:${v};font-size:${T};font-weight:700;color:${w};line-height:1.25;">
            ${en(c)}
          </${L}>
        </td>
      </tr>`;
    }
    case "Image": {
      const c = (s = t == null ? void 0 : t.imageAssetUrl) == null ? void 0 : s.trim();
      if (!c)
        return "";
      const d = `<img src="${en(c)}" alt="${en(e.zoneLabel)}" width="552" style="${Gk(e)}" />`, v = (l = t == null ? void 0 : t.linkUrl) == null ? void 0 : l.trim(), T = v ? `<a href="${en(v)}" target="_blank" rel="noopener noreferrer">${d}</a>` : d;
      return `<tr><td align="${r}" style="${o}">${T}</td></tr>`;
    }
    case "CTA Button": {
      const c = (u = t == null ? void 0 : t.textValue) == null ? void 0 : u.trim();
      if (!c)
        return "";
      const d = ((f = t == null ? void 0 : t.linkUrl) == null ? void 0 : f.trim()) || "#", v = Pa(n, "Accent", Hn.accent), T = cu(n, "CTA", io);
      return `<tr>
        <td align="${r}" style="${uu(e, "padding-bottom:32px;")}">
          <a href="${en(d)}" target="_blank" rel="noopener noreferrer" style="${Xk()}background-color:${v};color:#ffffff;font-family:${T};font-size:16px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:4px;">
            ${en(c)}
          </a>
        </td>
      </tr>`;
    }
    case "HTML": {
      const c = e.isLocked ? e.htmlDefaultContent : (t == null ? void 0 : t.htmlValue) ?? e.htmlDefaultContent, d = xi(c);
      return d ? `<tr><td align="${r}" style="${o}font-family:Arial,sans-serif;font-size:16px;line-height:1.5;color:#333333;">${d}</td></tr>` : "";
    }
    case "Divider":
      return `<tr><td align="${r}" style="${o}"><hr style="border:none;border-top:1px solid #e0e0e0;margin:0;" /></td></tr>`;
    case "Background Color":
      return "";
    default:
      return "";
  }
}
function yc(e, t, n) {
  const r = Pa(n, "Background", Hn.background), o = "#ffffff", i = Ud(e), a = e.zones.sort((s, l) => s.sortOrder - l.sortOrder).map((s) => qk(s, t[s.id] ?? t[s.zoneKey], n)).filter(Boolean).join(`
`);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${en(e.templateName)}</title>
</head>
<body style="margin:0;padding:0;background-color:${r};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${r};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="${i}" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:${i}px;background-color:${o};border-collapse:collapse;">
          ${a}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
const qn = "dummy-brand-kit", Lm = "dummy-template";
function dr(e = qn) {
  return nk(e);
}
function eE(e, t = "Social") {
  return t === "Email" || t === "Newsletter" ? nE(e) : tE(e);
}
function tE(e) {
  return {
    id: e,
    templateName: "Demo Social Template",
    channelType: "Social",
    formatPreset: "1080x1080",
    canvasWidth: 1080,
    canvasHeight: 1080,
    brandKitId: qn,
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
function nE(e) {
  return {
    id: e,
    templateName: "Demo Email Template",
    channelType: "Email",
    formatPreset: "Email.StandardEmail",
    canvasWidth: 600,
    canvasHeight: 800,
    brandKitId: qn,
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
function rE(e, t) {
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
function oE(e) {
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
function Gn(e, t, n) {
  lS(e, t, n);
}
function go(e) {
  return { Invariant: e };
}
function Ke(e, t, n) {
  e[t] = go(n);
}
function Hd(e, t, n) {
  e[t] = n;
}
function sn(e, t, n) {
  Number.isNaN(n) || (e[t] = n);
}
function sr(e) {
  if (!(e == null || Number.isNaN(e)))
    return e;
}
function er(e) {
  const t = e == null ? void 0 : e.trim();
  return t || void 0;
}
function yo(e) {
  const t = {
    ...e,
    sortOrder: sr(e.sortOrder) ?? 0,
    positionX: sr(e.positionX),
    positionY: sr(e.positionY),
    zoneWidth: sr(e.zoneWidth),
    zoneHeight: sr(e.zoneHeight),
    offsetPx: sr(e.offsetPx),
    maxCharacterCount: sr(e.maxCharacterCount),
    aspectRatioLock: er(e.aspectRatioLock),
    htmlDefaultContent: er(e.htmlDefaultContent)
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
function iE(e, t) {
  const n = { zoneType: t };
  return t === "Heading" ? (n.headingLevel = e.headingLevel ?? Nn, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : (n.headingLevel = void 0, t === "Text" ? (n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "Image" ? (n.maxCharacterCount = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n) : t === "HTML" ? (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n) : (n.maxCharacterCount = void 0, n.aspectRatioLock = void 0, n.htmlDefaultContent = void 0, n.htmlAllowUserOverride = void 0, n));
}
function aE(e) {
  return {
    Title: go(e.zoneKey)
  };
}
const sE = {
  textValue: ["textValue", "TextValue", "text", "content", "zoneText", "value"],
  colorValue: ["colorValue", "ColorValue", "color", "hexValue"],
  htmlValue: ["htmlValue", "HtmlValue", "html", "htmlContent"],
  linkUrl: ["linkUrl", "LinkUrl", "url", "href", "link"]
};
function Jy(e) {
  const t = {};
  return e.textValue !== void 0 && Ke(t, "textValue", e.textValue), e.colorValue !== void 0 && Ke(t, "colorValue", e.colorValue), e.htmlValue !== void 0 && Ke(t, "htmlValue", e.htmlValue), e.linkUrl !== void 0 && Ke(t, "linkUrl", e.linkUrl), t;
}
function lE(e, t) {
  if (t.length === 0)
    return Jy(e);
  const n = /* @__PURE__ */ new Map();
  for (const i of t) {
    const a = i.name.includes(".") ? i.name.split(".").pop() ?? i.name : i.name;
    n.set(i.name.toLowerCase(), i.name), n.set(a.toLowerCase(), i.name);
  }
  const r = {}, o = [
    { key: "textValue", value: e.textValue },
    { key: "colorValue", value: e.colorValue },
    { key: "htmlValue", value: e.htmlValue },
    { key: "linkUrl", value: e.linkUrl }
  ];
  for (const i of o)
    if (i.value !== void 0)
      for (const a of sE[i.key]) {
        const s = n.get(a.toLowerCase());
        if (s && !(/^title$/i.test(s) || /\.Title$/i.test(s))) {
          Ke(r, s, i.value);
          break;
        }
      }
  return r;
}
function uE(e) {
  var t, n, r, o, i, a;
  return !!((t = e.textValue) != null && t.trim() || (n = e.htmlValue) != null && n.trim() || (r = e.colorValue) != null && r.trim() || (o = e.linkUrl) != null && o.trim() || (i = e.imageAssetId) != null && i.trim() || (a = e.imageAssetUrl) != null && a.trim());
}
function cE(e) {
  const t = {};
  return e.isRawHtmlOverrideMA !== void 0 && (t.isRawHtmlOverrideMA = e.isRawHtmlOverrideMA), e.rawHtmlOverrideContent !== void 0 && Ke(t, "rawHtmlOverrideContent", e.rawHtmlOverrideContent), e.overrideReasonMA !== void 0 && Ke(t, "overrideReasonMA", e.overrideReasonMA), e.zoneLayoutJson !== void 0 && Ke(t, "zoneLayoutJson", e.zoneLayoutJson), t;
}
function dE(e) {
  return { templateName: go(e.templateName) };
}
function qy(e) {
  const t = {};
  return Ke(t, "templateName", e.templateName), e.canvasWidth !== void 0 && sn(t, "canvasWidth", e.canvasWidth), e.canvasHeight !== void 0 && sn(t, "canvasHeight", e.canvasHeight), t;
}
function ev(e) {
  return {
    zoneKey: go(e.zoneKey),
    zoneLabel: go(e.zoneLabel || e.zoneKey)
  };
}
function fE(e, t) {
  if (!t)
    return ev(e);
  const n = {}, r = er(e.zoneLabel) ?? e.zoneKey, o = er(t.zoneLabel) ?? t.zoneKey;
  return e.zoneKey !== t.zoneKey && Ke(n, "zoneKey", e.zoneKey), r !== o && Ke(n, "zoneLabel", r), n;
}
function pE(e) {
  const t = {};
  return Ke(t, "zoneType", e.zoneType), Hd(t, "isLocked", e.isLocked), sn(t, "sortOrder", e.sortOrder), t;
}
function mE(e, t) {
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
    r.push({ [o]: go(e) }), r.push({ [o]: e });
  return r;
}
function hE(e, t) {
  const n = {};
  return (!t || e.isLocked !== t.isLocked) && Hd(n, "isLocked", e.isLocked), (!t || e.sortOrder !== t.sortOrder) && sn(n, "sortOrder", e.sortOrder), n;
}
function tv(e, t) {
  const n = {};
  return e.positionX !== void 0 && e.positionX !== (t == null ? void 0 : t.positionX) && sn(n, "positionX", e.positionX), e.positionY !== void 0 && e.positionY !== (t == null ? void 0 : t.positionY) && sn(n, "positionY", e.positionY), e.zoneWidth !== void 0 && e.zoneWidth !== (t == null ? void 0 : t.zoneWidth) && sn(n, "zoneWidth", e.zoneWidth), e.zoneHeight !== void 0 && e.zoneHeight !== (t == null ? void 0 : t.zoneHeight) && sn(n, "zoneHeight", e.zoneHeight), e.contentAlignment !== void 0 && e.contentAlignment !== (t == null ? void 0 : t.contentAlignment) && Ke(n, "contentAlignment", e.contentAlignment), e.offsetDirection !== void 0 && e.offsetDirection !== (t == null ? void 0 : t.offsetDirection) && Ke(n, "offsetDirection", e.offsetDirection), e.offsetPx !== void 0 && e.offsetPx !== (t == null ? void 0 : t.offsetPx) && sn(n, "offsetPx", e.offsetPx), n;
}
function nv(e, t) {
  const n = yo(e), r = {};
  return (n.zoneType === "Text" || n.zoneType === "Heading") && n.maxCharacterCount !== void 0 && n.maxCharacterCount !== (t == null ? void 0 : t.maxCharacterCount) && sn(r, "maxCharacterCount", n.maxCharacterCount), n.zoneType === "Heading" && n.headingLevel !== void 0 && n.headingLevel !== (t == null ? void 0 : t.headingLevel) && Ke(r, "headingLevel", n.headingLevel), n.zoneType === "Image" && n.aspectRatioLock !== void 0 && n.aspectRatioLock !== er(t == null ? void 0 : t.aspectRatioLock) && Ke(r, "aspectRatioLock", n.aspectRatioLock), n.zoneType === "HTML" && (n.htmlDefaultContent !== void 0 && n.htmlDefaultContent !== er(t == null ? void 0 : t.htmlDefaultContent) && Ke(r, "htmlDefaultContent", n.htmlDefaultContent), n.htmlAllowUserOverride !== void 0 && n.htmlAllowUserOverride !== (t == null ? void 0 : t.htmlAllowUserOverride) && Hd(r, "htmlAllowUserOverride", n.htmlAllowUserOverride)), r;
}
function Im(e) {
  const t = yo(e);
  return {
    ...pE(t),
    ...tv(t),
    ...nv(t)
  };
}
function gE(e, t) {
  const n = yo(e), r = yo(t), o = er(n.zoneLabel) ?? n.zoneKey, i = er(r.zoneLabel) ?? r.zoneKey;
  return n.zoneKey === r.zoneKey && o === i && JSON.stringify(Im(n)) === JSON.stringify(Im(r));
}
function xm(e) {
  return /^\d+$/.test(e);
}
const yE = ["Social", "Email", "Newsletter"];
function Fd(e) {
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
    const r = Fd(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function mn(e, ...t) {
  if (e)
    for (const n of t) {
      const r = Fd(e[n]);
      if (typeof r == "number" && Number.isFinite(r))
        return r;
      if (typeof r == "string") {
        const o = Number(r);
        if (Number.isFinite(o))
          return o;
      }
    }
}
function vc(e, ...t) {
  if (!e)
    return !1;
  for (const n of t) {
    const r = Fd(e[n]);
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
function wt(e, ...t) {
  const n = Od(e, ...t);
  if (n.length > 0)
    return n;
  if (!e)
    return [];
  for (const r of t) {
    const o = e[r];
    if (!Array.isArray(o))
      continue;
    const i = kr(o);
    if (i.length > 0)
      return i;
  }
  return [];
}
function ll(e, t) {
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
function vE(e) {
  const t = e.trim().toLowerCase();
  return t.includes("email") ? "Email" : t.includes("newsletter") ? "Newsletter" : "Social";
}
function wE(e) {
  const t = W(e, "EPAM.headingLevel", "headingLevel");
  return t ? Bk(t) : void 0;
}
function TE(e) {
  const t = W(e, "EPAM.contentAlignment", "contentAlignment");
  return t ? Gy(t) : void 0;
}
function AE(e) {
  const t = W(e, "EPAM.offsetDirection", "offsetDirection");
  return t ? Xy(t) : void 0;
}
function du(e, t = "") {
  return { id: String(e), name: t || String(e) };
}
function rv(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = t, a = W(r, "EPAM.channelType", "channelType") || W(r, "EPAM.channelTypeMA", "channelTypeMA") || Un(i, "channelType"), s = W(r, "EPAM.brandKitId", "brandKitId"), l = wt(
    o,
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit",
    "marketingTemplateToBrandKit"
  )[0];
  return {
    id: String(e),
    templateName: W(r, "EPAM.templateName", "templateName", "Title") || `Template ${e}`,
    channelType: yE.includes(a) ? a : vE(a),
    formatPreset: W(r, "EPAM.formatPreset", "formatPreset") || Un(i, "formatPreset") || "",
    canvasWidth: mn(r, "EPAM.canvasWidth", "canvasWidth"),
    canvasHeight: mn(r, "EPAM.canvasHeight", "canvasHeight"),
    brandKitId: s || (l != null ? String(l) : ""),
    zones: n,
    allowedAssetIds: iv(t).map(String)
  };
}
function Bd(e, t) {
  const n = t.properties ?? {}, r = t, o = W(n, "EPAM.zoneKey", "zoneKey") || `zone-${e}`, i = W(n, "EPAM.zoneLabel", "zoneLabel", "Title") || `Zone ${e}`, a = W(n, "EPAM.zoneType", "zoneType", "ZoneType", "zoneTypeMA", "ZoneTypeMA") || Un(r, "zoneType") || Un(r, "ZoneType") || Un(r, "EPAM.ZoneType") || Un(r, "zoneTypeMA"), s = _d(a, o, i), l = wE(n) ?? (s === "Heading" ? Nn : void 0);
  return {
    id: String(e),
    zoneKey: o,
    zoneLabel: i,
    zoneType: s,
    isLocked: vc(n, "EPAM.isLocked", "isLocked"),
    sortOrder: mn(n, "EPAM.sortOrder", "sortOrder") ?? 0,
    positionX: mn(n, "EPAM.positionX", "positionX"),
    positionY: mn(n, "EPAM.positionY", "positionY"),
    zoneWidth: mn(n, "EPAM.zoneWidth", "zoneWidth"),
    zoneHeight: mn(n, "EPAM.zoneHeight", "zoneHeight"),
    maxCharacterCount: mn(n, "EPAM.maxCharacterCount", "maxCharacterCount"),
    headingLevel: l,
    contentAlignment: TE(n),
    offsetDirection: AE(n),
    offsetPx: mn(n, "EPAM.offsetPx", "offsetPx"),
    aspectRatioLock: W(n, "EPAM.aspectRatioLock", "aspectRatioLock") || void 0,
    htmlDefaultContent: W(n, "EPAM.htmlDefaultContent", "htmlDefaultContent") || void 0,
    htmlAllowUserOverride: vc(n, "EPAM.htmlAllowUserOverride", "htmlAllowUserOverride"),
    allowedAssetIds: av(t).map(String),
    allowedAssetCollectionId: W(n, "EPAM.allowedAssetCollectionId", "allowedAssetCollectionId") || void 0
  };
}
function ov(e, t) {
  const n = t.properties ?? {}, r = Kd(t), o = r[0] != null ? String(r[0]) : void 0;
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
function SE(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = W(r, "EPAM.templateId", "templateId") || String(
    wt(
      o,
      "marketingAssetToTemplate",
      "MarketingAssetToTemplate",
      "EPAM.MarketingAssetToTemplate"
    )[0] ?? ""
  );
  return {
    id: String(e),
    assetName: W(r, "EPAM.assetName", "assetName", "Title") || `Asset ${e}`,
    channelTypeMA: du(
      wt(o, "channelTypeMA", "ChannelTypeMA")[0] ?? "channel",
      W(r, "EPAM.channelTypeMA", "channelTypeMA") || "Channel"
    ),
    formatPresetMA: du(
      wt(o, "formatPresetMA", "FormatPresetMA")[0] ?? "format",
      W(r, "EPAM.formatPresetMA", "formatPresetMA") || "Format"
    ),
    outputFormatMA: du(
      wt(o, "outputFormatMA", "OutputFormatMA")[0] ?? "output",
      W(r, "EPAM.outputFormatMA", "outputFormatMA") || "Output"
    ),
    templateId: i,
    isRawHtmlOverrideMA: vc(r, "EPAM.isRawHtmlOverrideMA", "isRawHtmlOverrideMA"),
    rawHtmlOverrideContent: W(r, "EPAM.rawHtmlOverrideContent", "rawHtmlOverrideContent") || void 0,
    overrideReasonMA: W(r, "EPAM.overrideReasonMA", "overrideReasonMA") || void 0,
    zoneLayoutJson: W(r, "EPAM.zoneLayoutJson", "zoneLayoutJson", "builderLayoutJson") || void 0,
    zoneValues: n,
    renderedOutputAssetId: W(r, "EPAM.renderedOutputAssetId", "renderedOutputAssetId") || String(wt(o, "marketingAssetToRenderedOutput")[0] ?? "") || void 0
  };
}
function kE(e, t, n = [], r = []) {
  const o = t.properties ?? {};
  return {
    id: String(e),
    brandKitName: W(o, "EPAM.brandKitName", "brandKitName", "Title") || `Brand kit ${e}`,
    logoAssetUrl: W(o, "EPAM.logoAssetUrl", "logoAssetUrl"),
    colors: n,
    fonts: r
  };
}
function iv(e) {
  const t = wt(e.relations, ...Ny), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/template.*asset|allowed.*asset/i.test(r) || /collection|zone/i.test(r) || Array.isArray(o) && n.push(...kr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function Kd(e) {
  const t = wt(e.relations, ...My), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/selected.*asset|zonevalue.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...kr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function av(e) {
  const t = wt(e.relations, ...Ey), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/allowed.*asset|zone.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...kr(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function EE(e) {
  return [.../* @__PURE__ */ new Set([
    ...wt(
      e.relations,
      "templateToZone",
      "templateToTemplateZone",
      "TemplateToTemplateZone",
      "EPAM.TemplateToTemplateZone",
      "templateToEPAM.TemplateZone"
    ),
    ...ll(e.relations, /template.*zone/i)
  ])];
}
function sv(e) {
  return [.../* @__PURE__ */ new Set([
    ...wt(
      e.relations,
      "marketingAssetToZoneValue",
      "MarketingAssetToZoneValue",
      "EPAM.MarketingAssetToZoneValue"
    ),
    ...ll(e.relations, /zonevalue/i)
  ])];
}
function NE(e, t) {
  const n = t.properties ?? {}, r = W(n, "EPAM.colorUsageType", "colorUsageType") || "Primary";
  return {
    colorName: W(n, "EPAM.colorName", "colorName") || `Color ${e}`,
    hexValue: W(n, "EPAM.hexValue", "hexValue") || "#000000",
    colorUsageType: r
  };
}
function ME(e, t) {
  const n = t.properties ?? {}, r = W(n, "EPAM.fontUsageType", "fontUsageType") || "Body", o = W(n, "EPAM.fontWeight", "fontWeight") || "Regular";
  return {
    fontFamily: W(n, "EPAM.fontFamily", "fontFamily") || "sans-serif",
    fontWeight: o,
    fontUsageType: r
  };
}
function CE(e) {
  return wt(
    e.relations,
    "brandKitToColor",
    "BrandKitToColor",
    "brandKitToBrandColor"
  ).concat(ll(e.relations, /color/i));
}
function zE(e) {
  return wt(
    e.relations,
    "brandKitToFont",
    "BrandKitToFont",
    "brandKitToBrandFont"
  ).concat(ll(e.relations, /font/i));
}
function LE(e) {
  return ["Social", "Email", "Newsletter"].filter((t) => t !== e);
}
function IE(e, t, n, r) {
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
  return e.zoneType === "Heading" && (o.headingLevel = e.headingLevel, o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Text" && (o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Image" && (o.aspectRatioLock = e.aspectRatioLock), e.zoneType === "HTML" && (o.htmlDefaultContent = e.htmlDefaultContent, o.htmlAllowUserOverride = e.htmlAllowUserOverride), r === "Social" ? xE(o, t) : DE(o);
}
function xE(e, t) {
  const n = e.zoneType === "Logo" ? 80 : e.zoneType === "Image" ? 360 : e.zoneType === "Heading" ? 120 : e.zoneType === "CTA Button" ? 72 : 96;
  return {
    ...e,
    positionX: e.positionX ?? 40,
    positionY: e.positionY ?? 40 + t * (n + 24),
    zoneWidth: e.zoneWidth ?? 1e3,
    zoneHeight: n
  };
}
function DE(e) {
  return {
    ...e,
    positionX: void 0,
    positionY: void 0,
    zoneWidth: void 0,
    zoneHeight: void 0
  };
}
function OE(e, t, n) {
  const r = Fy(t), o = Date.now(), i = [...e.zones].sort((a, s) => a.sortOrder - s.sortOrder).map((a, s) => IE(a, s, o, t));
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
function Zd(e) {
  const t = gt(e, /allowed.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/^template/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...Ey, ...t])];
}
function Vd(e) {
  const t = gt(e, /template.*asset|allowed.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/zone/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...Ny, ...t])];
}
function PE(e) {
  const t = gt(e, /selected.*asset|zonevalue.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...My, ...t])];
}
const Wd = "/api/content-hub", _E = "/api/render-email-html";
let D = null, ul = Wd;
function Yd() {
  return ul.replace(/\/$/, "") !== Wd;
}
function bE(e) {
  const t = e.trim().replace(/\/$/, "");
  return !t || t === _E;
}
function $E(e) {
  D = e;
}
function jE(e) {
  ul = e.replace(/\/$/, "") || Wd;
}
async function wc(e, t) {
  const n = await fetch(`${ul}${e}`, {
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
async function re(e) {
  var n;
  if (!((n = D == null ? void 0 : D.raw) != null && n.getAsync))
    throw new Error("Content Hub client is not available. This component must run inside Content Hub.");
  const t = await D.raw.getAsync(`/api/entities/${e}`);
  if (!t.isSuccessStatusCode || !t.content)
    throw new Error(`Content Hub API error (${t.statusCode ?? "unknown"}) loading entity ${e}`);
  return t.content;
}
async function dn(e) {
  const t = [...new Set(e.filter((n) => Number.isFinite(n)))];
  return t.length === 0 ? [] : Promise.all(
    t.map(async (n) => {
      try {
        return await re(n);
      } catch (r) {
        return ie(
          "related entity",
          `Skipped entity ${n}: ${r instanceof Error ? r.message : String(r)}`
        ), { properties: {}, relations: {}, systemProperties: { id: n } };
      }
    })
  );
}
async function RE(e, t, n) {
  var o;
  let r = ((o = t.brandKitId) == null ? void 0 : o.trim()) ?? "";
  if (!r) {
    const i = await Vt(
      D,
      e,
      "templateToBrandKit",
      n.relations
    );
    i[0] != null ? (r = String(i[0]), F("brandKitId", `Resolved ${r} from templateToBrandKit on template ${e}`)) : je(
      "brandKitId",
      `No brand kit linked on template ${e}`,
      "Link templateToBrandKit on the template, or set brandKitId in External component Configuration."
    );
  }
  return {
    ...t,
    brandKitId: r,
    allowedAssetIds: t.allowedAssetIds && t.allowedAssetIds.length > 0 ? t.allowedAssetIds : iv(n).map(String)
  };
}
async function UE(e, t) {
  const n = av(t);
  if (n.length > 0)
    return { ...e, allowedAssetIds: n.map(String) };
  if (!tt(t.relations, "templateZoneToAllowedAssetCollection"))
    return e;
  const r = await Vt(
    D,
    e.id,
    "templateZoneToAllowedAssetCollection",
    t.relations
  );
  return r[0] != null ? { ...e, allowedAssetCollectionId: String(r[0]) } : e;
}
function lv(e) {
  const t = gt(e, /template.*zone/i);
  return [.../* @__PURE__ */ new Set([...t, ...Ci])];
}
async function HE(e, t, n) {
  var o;
  if (!((o = D == null ? void 0 : D.raw) != null && o.getAsync))
    return [];
  const r = encodeURIComponent(
    `Definition.Name=='${e}' AND Parent('${t}').Id==${n}`
  );
  try {
    const i = await D.raw.getAsync(
      `/api/entities/query?query=${r}`
    );
    if (!i.isSuccessStatusCode || !i.content)
      return [];
    const a = Array.isArray(i.content) ? i.content : Array.isArray(i.content.items) ? i.content.items : [], s = [];
    for (const l of a) {
      if (l == null || typeof l != "object")
        continue;
      const u = l, f = u.systemProperties, c = (f == null ? void 0 : f.id) ?? u.id ?? u.entityId;
      typeof c == "number" && Number.isFinite(c) && s.push(c);
    }
    return s;
  } catch {
    return [];
  }
}
const FE = ["channelType", "ChannelType", "EPAM.ChannelType"], BE = ["formatPreset", "FormatPreset", "EPAM.FormatPreset"];
async function uv(e) {
  var i, a;
  if (!((i = D == null ? void 0 : D.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating templates.");
  const t = [
    dE(e),
    { Title: { Invariant: e.templateName } },
    { templateName: e.templateName }
  ];
  let n = null, r = "unknown";
  for (const s of t) {
    const l = await D.raw.postAsync("/api/entities", {
      entitydefinition: {
        href: "/api/entitydefinitions/EPAM.Template"
      },
      properties: s
    });
    if (l.isSuccessStatusCode && ((a = l.content) == null ? void 0 : a.id) != null) {
      n = String(l.content.id);
      break;
    }
    r = String(l.statusCode ?? "unknown"), ie("template create", `Create attempt failed (${r}) with keys: ${Object.keys(s).join(", ")}`);
  }
  if (!n)
    throw new Error(
      `Failed to create template "${e.templateName}" (HTTP ${r}). Check Create permission on EPAM.Template and that templateName is a valid property.`
    );
  const o = qy(e);
  if (Object.keys(o).length > 0)
    try {
      await pv(n, o);
    } catch (s) {
      ie(
        "template create",
        `Template ${n} created but optional property update failed: ${s instanceof Error ? s.message : String(s)}`
      );
    }
  return F("template create", `Created EPAM.Template ${n} (${e.templateName})`), n;
}
async function KE(e, t, n) {
  var i;
  return (await cl(n)).channelType === t ? n : (i = (await fv(e)).find((a) => a.channelType === t)) == null ? void 0 : i.id;
}
async function Dm(e, t, n, r) {
  const o = await re(t);
  for (const i of n) {
    const a = await Vt(
      D,
      t,
      i,
      o.relations
    );
    if (a[0] == null)
      continue;
    if (await ho(
      D,
      e,
      String(a[0]),
      n[0]
    )) {
      F("template taxonomy", `Linked ${r} on template ${e} from template ${t}`);
      return;
    }
  }
  je(
    "template taxonomy",
    `Could not link ${r} on template ${e} from reference ${t}`,
    `Set ${r} on the template in Content Hub.`
  );
}
async function cv(e, t, n, r) {
  if (!(n != null && n.trim()))
    return;
  const o = await KE(
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
  await Dm(
    e,
    o,
    FE,
    "channelType"
  ), await Dm(
    e,
    o,
    BE,
    "formatPreset"
  );
}
async function dv(e, t) {
  if (!(t != null && t.trim()))
    return;
  if (await ho(D, e, t, "templateToBrandKit")) {
    F("template brand kit", `Linked template ${e} to brand kit ${t}`);
    return;
  }
  if (await Wt(D, t, e, "brandKitToTemplate")) {
    F("template brand kit", `Linked brand kit ${t} to template ${e}`);
    return;
  }
  je(
    "template brand kit",
    `Could not link template ${e} to brand kit ${t}`,
    "Link templateToBrandKit on the template in Content Hub."
  );
}
async function fv(e) {
  if (!(e != null && e.trim()) || e === qn)
    return [];
  let t = [];
  for (const o of [
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit"
  ])
    if (t = await HE("EPAM.Template", o, e), t.length > 0)
      break;
  if (t.length === 0)
    try {
      const o = await re(e);
      t = await Vt(
        D,
        e,
        "brandKitToTemplate",
        o.relations
      );
    } catch {
      t = [];
    }
  const n = [...new Set(t)];
  return n.length === 0 ? [] : (await Promise.all(n.map((o) => cl(String(o))))).sort((o, i) => o.templateName.localeCompare(i.templateName));
}
async function ZE(e, t, n) {
  const r = await cl(e), o = OE(r, t, n), i = await uv(o);
  o.brandKitId && (await dv(i, o.brandKitId), await cv(
    i,
    o.channelType,
    o.brandKitId,
    e
  ));
  const a = await Gd({ ...o, id: i }, []);
  return await yv(a.id, r.allowedAssetIds ?? []), F(
    "template duplicate",
    `Created template ${a.id} (${a.templateName}) from ${e} as ${t}`
  ), a;
}
async function VE(e, t) {
  var i;
  const n = {
    ...e,
    id: ((i = e.id) == null ? void 0 : i.trim()) || "",
    zones: e.zones ?? []
  }, r = await uv(n);
  n.brandKitId && (await dv(r, n.brandKitId), t != null && t.trim() && await cv(
    r,
    n.channelType,
    n.brandKitId,
    t
  ));
  const o = await Gd({ ...n, id: r }, []);
  return await yv(o.id, n.allowedAssetIds ?? []), F(
    "template create",
    `Created template ${o.id} (${o.templateName}) with ${o.zones.length} zone(s)`
  ), o;
}
async function WE(e, t) {
  const n = await re(e), r = [
    "marketingAssetToTemplate",
    "MarketingAssetToTemplate",
    "EPAM.MarketingAssetToTemplate"
  ], o = await Vt(D, e, r[0], n.relations);
  for (const a of o)
    if (String(a) !== t)
      for (const s of r)
        await ko(D, e, a, s, n.relations);
  let i = !1;
  for (const a of r)
    if (await Wt(D, e, t, a, n.relations)) {
      i = !0;
      break;
    }
  if (!i)
    throw new Error(
      `Could not link template ${t} to marketing asset ${e}. Check marketingAssetToTemplate relation permissions.`
    );
  F("marketing asset template", `Linked marketing asset ${e} to template ${t}`);
}
async function YE(e, t) {
  var r;
  if (!((r = D == null ? void 0 : D.raw) != null && r.getAsync))
    return [];
  const n = encodeURIComponent(
    `Definition.Name=='EPAM.TemplateZone' AND Parent('${t}').Id==${e}`
  );
  try {
    const o = await D.raw.getAsync(
      `/api/entities/query?query=${n}`
    );
    if (!o.isSuccessStatusCode || !o.content)
      return [];
    const i = Array.isArray(o.content) ? o.content : Array.isArray(o.content.items) ? o.content.items : [], a = [];
    for (const s of i) {
      if (s == null || typeof s != "object")
        continue;
      const l = s, u = l.systemProperties, f = (u == null ? void 0 : u.id) ?? l.id ?? l.entityId;
      typeof f == "number" && Number.isFinite(f) && a.push(f);
    }
    return a;
  } catch {
    return [];
  }
}
async function cl(e) {
  const t = await re(e);
  MS(e, t);
  let n = [...new Set(EE(t))];
  if (n.length === 0) {
    const i = lv(t.relations), a = await Mi(
      D,
      e,
      t.relations,
      i.filter((s) => tt(t.relations, s))
    );
    n = a.ids, a.relationName && F("template zones", `Found zones via relation ${a.relationName}`);
  }
  if (n.length === 0) {
    const { templateChildRelations: i, zoneParentRelations: a } = await el(
      D,
      t.relations
    );
    for (const s of a) {
      const l = await YE(e, s);
      if (l.length > 0) {
        n = l, F(
          "template zones",
          `Found ${l.length} zone(s) via parent query on ${s}`
        );
        break;
      }
    }
    if (n.length === 0 && i.length > 0) {
      const s = await Mi(
        D,
        e,
        t.relations,
        i.filter((l) => tt(t.relations, l))
      );
      n = s.ids, s.relationName && F("template zones", `Found zones via relation ${s.relationName}`);
    }
  }
  let r = [];
  if (n.length > 0)
    try {
      const i = await dn(n);
      await bS(D, re, i), r = await Promise.all(
        i.map(async (a, s) => {
          const l = Bd(n[s], a), u = await UE(l, a);
          return by(D, re, u, a);
        })
      );
    } catch (i) {
      ie(
        "template zones",
        `Could not load zones for template ${e}: ${i instanceof Error ? i.message : String(i)}`
      ), r = [];
    }
  const o = await RE(
    e,
    rv(e, t, r),
    t
  );
  return r.length > 0 ? (F("template zones", `Loaded ${r.length} zone(s) for template ${e}`), o) : (je(
    "template zones",
    `Template ${e} has no linked zones yet`,
    'This is normal for a new template. Use "Edit Template Zones" to add zones, or link EPAM.TemplateZone entities in Content Hub. Zones link via a Parent relation on EPAM.TemplateZone → EPAM.Template (not on the template entity itself).'
  ), o);
}
async function QE(e) {
  var i;
  const t = await re(e);
  let n = [...new Set(sv(t))];
  n.length === 0 && (n = await Vt(
    D,
    e,
    "marketingAssetToZoneValue",
    t.relations
  ));
  let r = [];
  if (n.length > 0)
    try {
      const a = await dn(n);
      r = await Promise.all(
        a.map(
          async (s, l) => oN(n[l], ov(n[l], s), s)
        )
      ), F("zone values", `Loaded ${r.length} zone value(s) for asset ${e}`);
    } catch (a) {
      ie(
        "zone values",
        `Could not load zone values for asset ${e}: ${a instanceof Error ? a.message : String(a)}`
      ), r = [];
    }
  else
    je(
      "zone values",
      `Marketing asset ${e} has no marketingAssetToZoneValue relations yet`,
      "Zone values will be created when you click Save and render HTML."
    );
  let o = SE(e, t, r);
  if (!((i = o.templateId) != null && i.trim())) {
    const a = await Vt(
      D,
      e,
      "marketingAssetToTemplate",
      t.relations
    );
    a[0] != null && (o = { ...o, templateId: String(a[0]) });
  }
  return o;
}
async function GE(e) {
  if (!(e != null && e.trim()) || e === qn)
    return Gn(
      "brand kit",
      "No brand kit id resolved",
      "Link templateToBrandKit on the template or set brandKitId in Configuration."
    ), withResolvedBrandKit(dr(e || qn));
  try {
    const t = await re(e), n = [...new Set(CE(t))], r = [...new Set(zE(t))], [o, i] = await Promise.all([
      dn(n),
      dn(r)
    ]), a = o.map(
      (u, f) => NE(n[f], u)
    ), s = i.map(
      (u, f) => ME(r[f], u)
    ), l = kE(e, t, a, s);
    return !l.logoAssetUrl && a.length === 0 && s.length === 0 ? (Gn(
      "brand kit",
      `Brand kit ${e} (${l.brandKitName}) has no colors, fonts, or logo linked`,
      "Add brandKitToColor / brandKitToFont relations and a logo asset on the brand kit."
    ), withResolvedBrandKit(dr(e))) : (a.length === 0 ? je("brand kit colors", `Brand kit ${e} has no colors linked`, "Link colors via brandKitToColor.") : F("brand kit colors", `Loaded ${a.length} color(s) for brand kit ${e}`), s.length === 0 ? je("brand kit fonts", `Brand kit ${e} has no fonts linked`, "Link fonts via brandKitToFont.") : F("brand kit fonts", `Loaded ${s.length} font(s) for brand kit ${e}`), l.logoAssetUrl || je("brand kit logo", `Brand kit ${e} has no logo asset`, "Set logoAssetUrl on the brand kit entity."), withResolvedBrandKit({
      ...dr(e),
      ...l,
      colors: a.length > 0 ? a : dr(e).colors,
      fonts: s.length > 0 ? s : dr(e).fonts
    }));
  } catch (t) {
    return Gn("brand kit", t, `Could not load brand kit entity ${e}.`), withResolvedBrandKit(dr(e));
  }
}
function XE(e, t) {
  const n = rv(e.id, t, e.zones);
  return n.templateName !== e.templateName || n.canvasWidth !== e.canvasWidth || n.canvasHeight !== e.canvasHeight;
}
async function Qd(e, t, n, r) {
  var f;
  if (!((f = D == null ? void 0 : D.raw) != null && f.putAsync))
    throw new Error(`Content Hub client is not available for saving ${n}.`);
  if (Object.keys(t).length === 0)
    return !0;
  const o = await re(e), i = zS(o, t, r), a = await D.raw.putAsync(`/api/entities/${e}`, i);
  if (a.isSuccessStatusCode)
    return !0;
  const s = a.statusCode ?? "unknown", l = a.content != null && typeof a.content == "object" ? String(a.content.Message ?? "") : "", u = l ? `: ${l}` : "";
  if (s === 403 || s === 401)
    return je(
      n,
      `Permission denied (${s}) updating entity ${e}${u}`,
      "Grant update permission on this entity definition for your role."
    ), !1;
  throw new Error(
    `Content Hub API error (${s}) saving ${n} on entity ${e}${u}`
  );
}
async function pv(e, t) {
  return Qd(e, t, "template properties", "EPAM.Template");
}
async function Gd(e, t = []) {
  var l;
  if (!((l = D == null ? void 0 : D.raw) != null && l.postAsync))
    throw new Error("Content Hub client is not available for saving template zones.");
  const n = await re(e.id);
  XE(e, n) && (await pv(e.id, qy(e)) ? F("template properties", `Saved properties on template ${e.id}`) : ie(
    "template properties",
    `Skipped property update on template ${e.id}; continuing with zone save.`
  ));
  const r = await el(D, n.relations), o = JE(
    n.relations,
    r.templateChildRelations
  ), i = [], a = /* @__PURE__ */ new Set();
  for (const u of t)
    !e.zones.some((c) => c.id === u.id) && xm(u.id) && a.add(u.id);
  const s = [...e.zones].sort((u, f) => u.sortOrder - f.sortOrder);
  for (const u of s) {
    const f = t.find((v) => v.id === u.id);
    if (!(!f || !gE(u, f))) {
      i.push(u);
      continue;
    }
    if (xm(u.id)) {
      await tN(u.id, u), i.push(u);
      continue;
    }
    const d = await nN(u);
    await qE(
      e.id,
      d,
      o,
      n.relations,
      r
    ), i.push({ ...u, id: d }), F("template zone", `Created EPAM.TemplateZone ${d} (${u.zoneKey}) and linked to template ${e.id}`);
  }
  for (const u of a)
    await rN(e.id, u, o, n.relations);
  return F("template zones", `Saved ${i.length} template zone(s) on template ${e.id}`), { ...e, zones: i };
}
function JE(e, t = []) {
  const n = [
    ...t,
    ...lv(e)
  ];
  for (const r of n)
    if (tt(e, r))
      return r;
  return t[0] ?? Ci[0];
}
async function qE(e, t, n, r, o) {
  const i = o ?? await el(D, r);
  let a;
  try {
    const c = await re(t);
    a = c.relations, CS(t, c);
  } catch {
    a = void 0;
  }
  const s = gt(a, /template/i).filter(
    (c) => !/collection|asset/i.test(c)
  ), l = ii(
    [...s, ...i.zoneParentRelations, ...ls],
    a,
    /zone.*template|template/i
  );
  for (const c of l)
    if (await ho(D, t, e, c, a)) {
      F("template zone link", `Linked zone ${t} to template ${e} via parent relation ${c}`);
      return;
    }
  const u = ii(
    [n, ...i.templateChildRelations, ...Ci],
    r,
    /template.*zone/i
  ).filter((c) => !!tt(r, c));
  for (const c of u)
    if (await Wt(D, e, t, c, r)) {
      F("template zone link", `Linked zone ${t} to template ${e} via child relation ${c}`);
      return;
    }
  const f = ii(
    [n, ...i.templateChildRelations, ...Ci],
    r,
    /template.*zone/i
  ).filter((c) => !tt(r, c));
  for (const c of f)
    if (await Wt(D, e, t, c, r)) {
      F(
        "template zone link",
        `Linked zone ${t} to template ${e} via definition child relation ${c}`
      );
      return;
    }
  throw new Error(
    `Could not link zone ${t} to template ${e}. Tried parent relations: ${l.join(", ") || "(none from definition)"}; child relations: ${[...u, ...f].join(", ") || "(none)"}. Confirm EPAM.TemplateZone has a parent relation to EPAM.Template in Content Hub.`
  );
}
async function gn(e, t, n) {
  if (Object.keys(t).length === 0)
    return !0;
  try {
    return await Qd(e, t, n);
  } catch (r) {
    return ie(
      n,
      `Optional property update skipped for entity ${e}: ${r instanceof Error ? r.message : String(r)}`
    ), !1;
  }
}
async function fu(e, t, n) {
  const r = await re(e), o = Bd(e, r);
  return (await by(D, re, o, r)).zoneType;
}
async function eN(e, t, n) {
  const r = yo(t), o = await ZS(D), i = OS(n), a = i || WS(o), s = async () => {
    for (const u of mE(
      r.zoneType,
      o.propertyNames
    ))
      if (await gn(e, u, "template zone type"), await fu(
        e,
        r.zoneKey,
        r.zoneLabel
      ) === r.zoneType)
        return F(
          "template zone type",
          `Persisted "${r.zoneType}" on zone ${e} via property ${Object.keys(u).join(", ")}`
        ), !0;
    return !1;
  };
  if (a) {
    const u = await HS(
      D,
      re,
      e,
      r.zoneType,
      n
    ), f = await fu(
      e,
      r.zoneKey,
      r.zoneLabel
    );
    if (f === r.zoneType)
      return !0;
    u && ie(
      "template zone type",
      `Relation link reported success for zone ${e} but reload still reads "${f}".`
    );
  }
  if (!i && VS(o) && await s())
    return !0;
  const l = await fu(
    e,
    r.zoneKey,
    r.zoneLabel
  );
  return ie(
    "template zone type",
    `Zone ${e} (${r.zoneKey}) still reads as "${l}" after save; expected "${r.zoneType}".`
  ), l === r.zoneType;
}
async function mv(e, t) {
  const n = yo(t), r = await re(e), o = Bd(e, r), i = fE(n, o);
  if (Object.keys(i).length > 0 && !await gn(e, i, "template zone identity") && i.zoneLabel != null) {
    const c = n.zoneLabel || n.zoneKey;
    await gn(
      e,
      { Title: { Invariant: c } },
      "template zone title"
    );
  }
  const a = await eN(e, n, r), s = await gn(
    e,
    hE(n, o),
    "template zone flags"
  );
  if (!a && !s)
    throw new Error(
      `Could not save zone type "${n.zoneType}" on template zone ${e} (${n.zoneKey}).`
    );
  a || ie(
    "template zone type",
    `Zone flags saved on ${e}, but zone type "${n.zoneType}" may not have persisted in Content Hub.`
  );
  const l = tv(n, o);
  Object.keys(l).length > 0 && await gn(e, l, "template zone layout");
  const u = nv(n, o);
  Object.keys(u).length > 0 && await gn(e, u, "template zone optional");
}
async function tN(e, t) {
  try {
    await mv(e, t);
  } catch (n) {
    throw new Error(
      `Permission denied updating template zone ${e} (${t.zoneKey}). Grant Update on EPAM.TemplateZone. ${n instanceof Error ? n.message : String(n)}`
    );
  }
  F("template zone", `Updated EPAM.TemplateZone ${e} (${t.zoneKey}, type ${t.zoneType})`);
}
async function nN(e) {
  var o;
  const t = [
    ev(e),
    {
      zoneKey: e.zoneKey,
      zoneLabel: e.zoneLabel || e.zoneKey
    },
    { Title: { Invariant: e.zoneLabel || e.zoneKey } }
  ];
  let n = null, r = "unknown";
  for (const i of t) {
    const a = await D.raw.postAsync("/api/entities", {
      entitydefinition: {
        href: "/api/entitydefinitions/EPAM.TemplateZone"
      },
      properties: i
    });
    if (a.isSuccessStatusCode && ((o = a.content) == null ? void 0 : o.id) != null) {
      n = String(a.content.id);
      break;
    }
    r = String(a.statusCode ?? "unknown"), ie(
      "template zone create",
      `Create attempt failed (${r}) for ${e.zoneKey} with keys: ${Object.keys(i).join(", ")}`
    );
  }
  if (!n)
    throw new Error(
      `Failed to create template zone ${e.zoneKey} (HTTP ${r}). Check Create permission on EPAM.TemplateZone.`
    );
  try {
    await mv(n, e);
  } catch (i) {
    ie(
      "template zone create",
      `Zone ${n} (${e.zoneKey}) created but property update failed: ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return n;
}
async function rN(e, t, n, r) {
  const o = await el(D, r);
  let i;
  try {
    i = (await re(t)).relations;
  } catch {
    i = void 0;
  }
  const a = ii(
    [...o.zoneParentRelations, ...ls],
    i,
    /zone.*template/i
  );
  for (const l of a)
    if (await Dy(D, t, e, l, i)) {
      F("template zone unlink", `Cleared parent ${e} from zone ${t} via ${l}`);
      return;
    }
  const s = ii(
    [n, ...o.templateChildRelations, ...Ci],
    r,
    /template.*zone/i
  ).filter((l) => !!tt(r, l));
  for (const l of s)
    if (await ko(D, e, t, l, r)) {
      F("template zone unlink", `Removed zone ${t} from template ${e} via ${l}`);
      return;
    }
  je(
    "template zone unlink",
    `Could not remove zone ${t} from template ${e}`,
    "The new zone was created and linked, but the previous zone link may need to be removed manually in Content Hub."
  );
}
async function oN(e, t, n) {
  var i;
  const r = Kd(n), o = t.imageAssetId || (r[0] != null ? String(r[0]) : void 0);
  if (!o)
    return t;
  if ((i = t.imageAssetUrl) != null && i.trim())
    return { ...t, imageAssetId: o };
  try {
    const a = await re(o), s = Eo(o, a);
    if (s)
      return {
        ...t,
        imageAssetId: o,
        imageAssetUrl: s.previewUrl ?? s.thumbnailUrl
      };
  } catch {
  }
  return { ...t, imageAssetId: o };
}
async function hv(e) {
  const t = await re(e), n = Vd(t.relations), r = await Mi(
    D,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await dn(r.ids)).map((i, a) => Eo(r.ids[a], i)).filter((i) => i != null);
}
async function gv(e, t) {
  var a;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await re(n), i = Vd(o.relations);
  for (const s of i)
    if (await Wt(
      D,
      n,
      r,
      s,
      o.relations
    ))
      return F(
        "template allowed asset",
        `Linked asset ${r} to template ${n} via ${s}`
      ), !0;
  if ((a = D == null ? void 0 : D.raw) != null && a.postAsync) {
    for (const s of i)
      if ((await D.raw.postAsync(
        `/api/entities/${n}/relations/${s}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return F(
          "template allowed asset",
          `Linked asset ${r} to template ${n} via ${s}`
        ), !0;
  }
  return je(
    "template allowed asset",
    `Could not link asset ${r} to template ${n}`,
    "Create a child relation on EPAM.Template to M.Asset (e.g. templateToAllowedAsset)."
  ), !1;
}
async function iN(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await re(n), i = Vd(o.relations);
  for (const a of i)
    if (await ko(
      D,
      n,
      r,
      a,
      o.relations
    ))
      return F(
        "template allowed asset",
        `Removed asset ${r} from template ${n} via ${a}`
      ), !0;
  return !1;
}
async function yv(e, t = []) {
  const n = [...new Set(t.map((i) => i.trim()).filter(Boolean))];
  if (n.length === 0)
    return;
  const r = await hv(e), o = new Set(r.map((i) => i.id));
  for (const i of n)
    o.has(i) || await gv(e, i);
}
async function aN(e) {
  const t = await re(e);
  return Kd(t).map(String);
}
let lr = null;
async function sN(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await re(n), i = PE(o.relations), a = i.filter((c) => !!tt(o.relations, c)), s = lr == null ? void 0 : lr.name, l = [
    ...new Set(
      [
        s,
        ...a,
        // Prefer the known-good name before spraying aliases that 404.
        "zoneValueToSelectedAsset",
        ...i
      ].filter((c) => !!c)
    )
  ].slice(0, s || a.length > 0 ? 3 : 4), u = await aN(n);
  for (const c of u)
    if (c !== r)
      for (const d of l)
        await ko(
          D,
          n,
          c,
          d,
          o.relations
        ), await Dy(
          D,
          n,
          c,
          d,
          o.relations
        );
  if (u.includes(r))
    return !0;
  const f = (lr == null ? void 0 : lr.mode) === "child" ? ["child", "parent"] : ["parent", "child"];
  for (const c of f)
    for (const d of l)
      if (c === "parent" ? await ho(
        D,
        n,
        r,
        d,
        o.relations
      ) : await Wt(
        D,
        n,
        r,
        d,
        o.relations
      ))
        return lr = { name: d, mode: c }, F(
          "zone value selected asset",
          `Linked asset ${r} to zone value ${n} via ${d} (${c})`
        ), !0;
  return je(
    "zone value selected asset",
    `Could not link asset ${r} to zone value ${n}`,
    "Create a relation on EPAM.MarketingAssetZoneValue to M.Asset (e.g. zoneValueToSelectedAsset)."
  ), !1;
}
async function lN(e, t) {
  var n;
  (n = t.imageAssetId) != null && n.trim() && await sN(e, t.imageAssetId);
}
async function uN(e) {
  const t = await re(e), n = Zd(t.relations), r = await Mi(
    D,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await dn(r.ids)).map((i, a) => Eo(r.ids[a], i)).filter((i) => i != null);
}
async function cN(e, t) {
  var a;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await re(n), i = Zd(o.relations);
  for (const s of i)
    if (await Wt(
      D,
      n,
      r,
      s,
      o.relations
    ))
      return F(
        "zone allowed asset",
        `Linked asset ${r} to zone ${n} via ${s}`
      ), !0;
  if ((a = D == null ? void 0 : D.raw) != null && a.postAsync) {
    for (const s of i)
      if ((await D.raw.postAsync(
        `/api/entities/${n}/relations/${s}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return F(
          "zone allowed asset",
          `Linked asset ${r} to zone ${n} via ${s}`
        ), !0;
  }
  return je(
    "zone allowed asset",
    `Could not link asset ${r} to zone ${n}`,
    "Create a child relation on EPAM.TemplateZone to M.Asset (e.g. templateZoneToAllowedAsset)."
  ), !1;
}
async function dN(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await re(n), i = Zd(o.relations);
  for (const a of i)
    if (await ko(
      D,
      n,
      r,
      a,
      o.relations
    ))
      return F(
        "zone allowed asset",
        `Removed asset ${r} from zone ${n} via ${a}`
      ), !0;
  return !1;
}
async function vv(e) {
  const t = await re(e), n = [
    .../* @__PURE__ */ new Set([
      ...$d,
      ...gt(t.relations, /asset/i)
    ])
  ].filter((i) => tt(t.relations, i)), r = await Mi(
    D,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await dn(r.ids)).map((i, a) => Eo(r.ids[a], i)).filter((i) => i != null);
}
function fN(e) {
  var o;
  if (!e || typeof e != "object")
    return [];
  const t = e, n = [t.items, t.content, t.children, t.results], r = [];
  for (const i of n)
    if (Array.isArray(i))
      for (const a of i) {
        if (typeof a == "number" && Number.isFinite(a)) {
          r.push(a);
          continue;
        }
        if (!a || typeof a != "object")
          continue;
        const s = a, l = (o = s.systemProperties) == null ? void 0 : o.id, u = s.id ?? s.entityId ?? l;
        typeof u == "number" && Number.isFinite(u) && r.push(u);
      }
  return r.length > 0 ? [...new Set(r)] : [...new Set(qs(e))];
}
async function pN(e) {
  var r;
  if (!((r = D == null ? void 0 : D.raw) != null && r.getAsync))
    return [];
  const t = (e == null ? void 0 : e.trim()) || "*", n = [
    `/api/entities/search?query=${encodeURIComponent(t)}&definitionNames=M.Asset&take=48`,
    `/api/entities/search?fullText=${encodeURIComponent(t)}&definitionNames=M.Asset&take=48`
  ];
  for (const o of n)
    try {
      const i = await D.raw.getAsync(o);
      if (!i.isSuccessStatusCode || i.content == null)
        continue;
      const a = fN(i.content).slice(0, 48);
      if (a.length === 0)
        continue;
      const l = (await dn(a)).map((u, f) => Eo(a[f], u)).filter((u) => u != null);
      if (l.length > 0)
        return F("asset search", `Found ${l.length} Content Hub asset(s) via search`), l;
    } catch {
    }
  return [];
}
async function Om(e) {
  var r, o;
  const t = (r = e == null ? void 0 : e.collectionId) == null ? void 0 : r.trim(), n = e == null ? void 0 : e.query;
  if ((o = D == null ? void 0 : D.raw) != null && o.getAsync)
    try {
      if (t) {
        const i = mm(await vv(t), n);
        if (i.length > 0)
          return F(
            "asset search",
            `Loaded ${i.length} asset(s) from collection ${t}`
          ), i;
        je(
          "asset search",
          `No assets found in collection ${t}`,
          "Verify AssetCollectionToAsset links or try Image URL."
        );
      } else {
        const i = mm(await pN(n), n);
        if (i.length > 0)
          return i;
      }
    } catch (i) {
      je("asset search", i, "Falling back to proxy or demo assets.");
    }
  if (t)
    try {
      const i = await wc(
        `/assets/search?collectionId=${t}${n ? `&q=${encodeURIComponent(n)}` : ""}`
      );
      if (i.length > 0)
        return i;
    } catch (i) {
      Gn("asset search", i);
    }
  return Gn("asset search", "Using demo asset results"), oE(n);
}
async function mN(e) {
  var r;
  const t = [
    ...new Set(
      e.map((o) => Number(o)).filter((o) => Number.isFinite(o) && o > 0)
    )
  ];
  return t.length === 0 || !((r = D == null ? void 0 : D.raw) != null && r.getAsync) ? [] : (await dn(t)).map((o, i) => Eo(t[i], o)).filter((o) => o != null);
}
async function hN(e, t) {
  var a;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await re(n), i = [
    .../* @__PURE__ */ new Set([
      ...$d,
      ...gt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const s of i)
    if (await Wt(
      D,
      n,
      r,
      s,
      o.relations
    ))
      return F(
        "asset collection",
        `Linked asset ${r} to collection ${n} via ${s}`
      ), !0;
  if ((a = D == null ? void 0 : D.raw) != null && a.postAsync) {
    for (const s of i)
      if ((await D.raw.postAsync(
        `/api/entities/${n}/relations/${s}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return F(
          "asset collection",
          `Linked asset ${r} to collection ${n} via ${s}`
        ), !0;
  }
  return je(
    "asset collection",
    `Could not add asset ${r} to collection ${n}`,
    "Verify AssetCollectionToAsset exists on the collection definition."
  ), !1;
}
async function gN(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await re(n), i = [
    .../* @__PURE__ */ new Set([
      ...$d,
      ...gt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const a of i)
    if (await ko(
      D,
      n,
      r,
      a,
      o.relations
    ))
      return F(
        "asset collection",
        `Removed asset ${r} from collection ${n} via ${a}`
      ), !0;
  return !1;
}
async function wv(e, t) {
  return Qd(e, t, "marketing asset properties", "EPAM.MarketingAsset");
}
const Tv = ["EPAM.MarketingAssetZoneValue", "MarketingAssetZoneValue"];
function yN(e) {
  if (e == null || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.error;
  return typeof n == "string" ? n.trim() : "";
}
function vN(e) {
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
async function Av(e, t) {
  const n = await pc(D, Tv[0]);
  await gn(
    e,
    aE(t),
    "zone value title"
  );
  const r = Jy(t);
  if (Object.keys(r).length > 0) {
    const o = lE(t, n);
    if (Object.keys(o).length > 0) {
      if (!await gn(e, o, "zone value content")) {
        const a = {};
        for (const [s, l] of Object.entries(o))
          l != null && typeof l == "object" && !Array.isArray(l) && typeof l.Invariant == "string" ? a[s] = l.Invariant : a[s] = l;
        await gn(e, a, "zone value content plain");
      }
    } else
      ie(
        "zone value content",
        `No matching content properties on EPAM.MarketingAssetZoneValue for zone ${t.zoneKey} (definition has: ${n.map((i) => i.name).join(", ") || "(none)"}). Text/html will persist via zoneLayoutJson fallback.`
      );
  }
  await lN(e, t);
}
async function wN(e) {
  var i;
  if (!((i = D == null ? void 0 : D.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating zone values.");
  const t = [
    { Title: { Invariant: e.zoneKey } },
    { Title: e.zoneKey },
    {}
  ];
  let n = null, r = "unknown", o = "";
  for (const a of Tv) {
    for (const s of t) {
      const l = await D.raw.postAsync("/api/entities", {
        entitydefinition: {
          href: `/api/entitydefinitions/${a}`
        },
        properties: s
      }), u = vN(l.content);
      if (l.isSuccessStatusCode && u) {
        n = u, F(
          "zone value create",
          `Created ${a} ${u} for ${e.zoneKey} with keys: ${Object.keys(s).join(", ") || "(none)"}`
        );
        break;
      }
      r = String(l.statusCode ?? "unknown"), o = yN(l.content), ie(
        "zone value create",
        `Create attempt failed (${r}) for ${e.zoneKey} on ${a} with keys: ${Object.keys(s).join(", ") || "(none)"}${o ? ` — ${o}` : ""}`
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
    await Av(n, e);
  } catch (a) {
    ie(
      "zone value create",
      `Zone value ${n} (${e.zoneKey}) created but property update failed: ${a instanceof Error ? a.message : String(a)}`
    );
  }
  return n;
}
async function TN(e) {
  if (!e.id)
    throw new Error(`Zone value for ${e.zoneKey} has no entity id.`);
  try {
    await Av(e.id, e), F("zone value", `Updated EPAM.MarketingAssetZoneValue ${e.id} (${e.zoneKey})`);
  } catch (t) {
    throw new Error(
      `Failed to update zone value ${e.id} (${e.zoneKey}). Grant Update on EPAM.MarketingAssetZoneValue. ${t instanceof Error ? t.message : String(t)}`
    );
  }
}
async function AN(e, t, n) {
  var o;
  const r = [
    ...gt(n, /zonevalue/i),
    "marketingAssetToZoneValue",
    "MarketingAssetToZoneValue",
    "EPAM.MarketingAssetToZoneValue"
  ];
  for (const i of [...new Set(r)])
    if (await Wt(
      D,
      e,
      t,
      i,
      n
    ))
      return;
  if (!((o = D == null ? void 0 : D.raw) != null && o.postAsync))
    throw new Error("Content Hub client is not available for linking zone values.");
  for (const i of [...new Set(r)])
    if ((await D.raw.postAsync(
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
async function SN(e, t) {
  var s;
  const n = await re(e), r = [...new Set(sv(n))], o = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const l = await dn(r);
    for (let u = 0; u < r.length; u += 1) {
      const f = ov(r[u], l[u]);
      o.has(f.zoneKey) || o.set(f.zoneKey, f);
    }
  }
  const i = [], a = /* @__PURE__ */ new Set();
  for (const l of t) {
    if (!((s = l.zoneKey) != null && s.trim()) || a.has(l.zoneKey))
      continue;
    if (!uE(l)) {
      ie("zone value save", `Skipped empty zone value for ${l.zoneKey}`);
      continue;
    }
    a.add(l.zoneKey);
    const u = l.id ? l : o.get(l.zoneKey), f = u != null && u.id ? { ...l, id: u.id } : { ...l, id: void 0 };
    if (f.id) {
      await TN(f), i.push(f);
      continue;
    }
    const c = await wN(f), d = { ...f, id: c };
    await AN(e, c, n.relations), i.push(d);
  }
  return F("zone values", `Saved ${i.length} EPAM.MarketingAssetZoneValue record(s)`), i;
}
async function kN(e) {
  const t = cE(e);
  if (Object.keys(t).length === 0)
    return e;
  if (!await wv(e.id, t))
    throw new Error(
      `Could not save marketing asset ${e.id}. Grant Update on EPAM.MarketingAsset and ensure properties such as zoneLayoutJson exist on the definition.`
    );
  return F("marketing asset properties", `Saved properties on marketing asset ${e.id}`), e;
}
const se = {
  getTemplate: cl,
  listTemplatesForBrandKit: fv,
  duplicateTemplate: ZE,
  createTemplate: VE,
  linkMarketingAssetToTemplate: WE,
  listTemplates: async (e) => {
    try {
      return await wc(`/entities/EPAM.Template${e ? `?channelType=${e}` : ""}`);
    } catch (t) {
      return Gn("template list", t), [eE(Lm)];
    }
  },
  saveTemplate: Gd,
  getBrandKit: GE,
  getMarketingAsset: QE,
  createMarketingAsset: async (e) => {
    try {
      return await wc("/entities/EPAM.MarketingAsset", {
        method: "POST",
        body: JSON.stringify(e)
      });
    } catch (t) {
      return Gn("marketing asset create", t), rE("dummy-asset", e.templateId || Lm);
    }
  },
  updateMarketingAsset: kN,
  saveMarketingAssetZoneValues: SN,
  updateMarketingAssetProperties: wv,
  uploadRenderedOutput: async (e, t, n) => {
    if (!Yd())
      return ie(
        "rendered output upload",
        `Skipped upload for ${n} — no asset upload proxy is configured on this Content Hub instance.`
      ), { skipped: !0, fileName: n, assetId: e };
    try {
      const r = new FormData();
      r.append("file", t, n), r.append("linkToEntity", "EPAM.MarketingAsset"), r.append("linkToEntityId", e), r.append("relationName", "marketingAssetToRenderedOutput");
      const o = await fetch(`${ul}/assets/upload`, {
        method: "POST",
        body: r
      });
      if (!o.ok)
        throw new Error(`Asset upload failed (${o.status})`);
      return o.json();
    } catch (r) {
      return Gn("rendered output upload", r), { skipped: !0, fileName: n, assetId: e };
    }
  },
  searchAssets: Om,
  searchAssetsInCollection: async (e, t) => Om({ collectionId: e, query: t }),
  getCollectionAssets: vv,
  getZoneAllowedAssets: uN,
  getTemplateAllowedAssets: hv,
  getAssetsByIds: mN,
  addAssetToCollection: hN,
  removeAssetFromCollection: gN,
  addAllowedAssetToTemplate: gv,
  removeAllowedAssetFromTemplate: iN,
  addAllowedAssetToZone: cN,
  removeAllowedAssetFromZone: dN
}, Sv = N.createContext(null);
function EN({
  brandKitId: e,
  children: t
}) {
  const [n, r] = N.useState(null);
  return N.useEffect(() => {
    let o = !1;
    return se.getBrandKit(e || qn).then((i) => {
      o || r(i);
    }).catch(() => {
      o || r(dr(e || qn));
    }), () => {
      o = !0;
    };
  }, [e]), n ? /* @__PURE__ */ m(Sv.Provider, { value: n, children: t }) : /* @__PURE__ */ m("div", { className: "marketing-builder-status", children: "Loading brand kit..." });
}
function Zi() {
  const e = N.useContext(Sv);
  if (!e)
    throw new Error("useBrandKit must be used within a BrandKitProvider");
  return e;
}
function Xd(e) {
  var n;
  return (n = Zi().colors.find((r) => r.colorUsageType === e)) == null ? void 0 : n.hexValue;
}
function ds(e) {
  var n;
  return (n = Zi().fonts.find((r) => r.fontUsageType === e)) == null ? void 0 : n.fontFamily;
}
const kv = N.createContext({});
function NN({
  value: e,
  children: t
}) {
  const n = N.useMemo(
    () => e,
    [
      e.searchIdentifier,
      e.selectionPoolIdentifier,
      e.search,
      e.selection,
      e.notifier
    ]
  );
  return /* @__PURE__ */ m(kv.Provider, { value: n, children: t });
}
function Jd() {
  return N.useContext(kv);
}
function Ev() {
  const { searchIdentifier: e, search: t } = Jd(), [n, r] = N.useState([]), [o, i] = N.useState("");
  return N.useEffect(() => {
    if (!e || !(t != null && t.getEventSearchIdentifier)) {
      r([]), i("");
      return;
    }
    const a = t.getEventSearchIdentifier(e), s = (l) => {
      const u = l.detail;
      !u || u.searchIdentifier !== a || (r(Array.isArray(u.ids) ? u.ids : []), i(u.fullText ?? ""));
    };
    return window.addEventListener("SEARCH_FINISHED", s), () => window.removeEventListener("SEARCH_FINISHED", s);
  }, [t, e]), N.useEffect(() => {
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
async function MN(e, t, n, r) {
  var s;
  let o = mS(t, n, r);
  if (o.templateId)
    return F("templateId", `Resolved ${o.templateId} from config or entity relations`), o;
  const i = e, a = o.marketingAssetId;
  if (!((s = i == null ? void 0 : i.raw) != null && s.getAsync) || !a)
    return Rn(
      "templateId",
      "No templateId in config and marketingAssetToTemplate could not be read from context.entity",
      "Set templateId in External component Configuration or link a template to this marketing asset."
    ), o;
  try {
    for (const l of cS) {
      const u = await i.raw.getAsync(
        `/api/entities/${a}/relations/${l}`
      );
      if (!u.isSuccessStatusCode || !u.content)
        continue;
      const f = qs(u.content);
      if (f.length > 0)
        return F("templateId", `Resolved ${f[0]} from ${l} relation API`), { ...o, templateId: String(f[0]) };
    }
  } catch (l) {
    Rn("templateId", l, "Failed to resolve marketingAssetToTemplate via Content Hub API.");
  }
  return Rn(
    "templateId",
    "No templateId in config and no marketingAssetToTemplate relation on this asset",
    "Set templateId in External component Configuration or link a template to this marketing asset."
  ), o;
}
function _r(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return e;
  if (typeof e == "string" && e.trim()) {
    const t = Number(e);
    if (Number.isFinite(t))
      return t;
  }
}
function Tc(e) {
  const t = e.positionX, n = e.positionY;
  if (!((t === 0 || t === void 0) && (n === 0 || n === void 0) && (t === 0 || n === 0)))
    return e;
  const o = { ...e };
  return delete o.positionX, delete o.positionY, o;
}
function fs(e) {
  return Tc(e);
}
function Di(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return;
  const t = e, n = {}, r = _r(t.positionX), o = _r(t.positionY), i = _r(t.zoneWidth), a = _r(t.zoneHeight), s = _r(t.offsetPx), l = _r(t.sortOrder);
  return r !== void 0 && (n.positionX = r), o !== void 0 && (n.positionY = o), i !== void 0 && (n.zoneWidth = i), a !== void 0 && (n.zoneHeight = a), s !== void 0 && (n.offsetPx = s), l !== void 0 && (n.sortOrder = l), typeof t.contentAlignment == "string" && (n.contentAlignment = Gy(t.contentAlignment)), typeof t.offsetDirection == "string" && (n.offsetDirection = Xy(t.offsetDirection)), Object.keys(n).length > 0 ? fs(n) : void 0;
}
function Pm(e) {
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
        const a = Di(o);
        a && (n[i] = a);
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
function CN(e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (!n.trim() || r == null)
      continue;
    const o = Di(r);
    o && (t[n] = o);
  }
  return JSON.stringify(t, null, 2);
}
function Ac(e) {
  const t = {};
  return typeof e.textValue == "string" && (t.textValue = e.textValue), typeof e.colorValue == "string" && (t.colorValue = e.colorValue), typeof e.htmlValue == "string" && (t.htmlValue = e.htmlValue), typeof e.linkUrl == "string" && (t.linkUrl = e.linkUrl), typeof e.imageAssetId == "string" && (t.imageAssetId = e.imageAssetId), typeof e.imageAssetUrl == "string" && (t.imageAssetUrl = e.imageAssetUrl), Object.keys(t).length > 0 ? t : void 0;
}
function Nv(e, t) {
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    if (!o.trim() || i == null)
      continue;
    const a = Di(i);
    a && (n[o] = a);
  }
  const r = {};
  for (const [o, i] of Object.entries(t)) {
    if (!o.trim() || !i)
      continue;
    const a = Ac(i);
    a && (r[o] = { zoneKey: o, ...a });
  }
  return Object.keys(r).length === 0 ? JSON.stringify(n, null, 2) : JSON.stringify({ layouts: n, values: r }, null, 2);
}
function ps(e) {
  if (!(e != null && e.trim()))
    return { layouts: {}, values: {} };
  try {
    const t = JSON.parse(e);
    if (t == null || typeof t != "object" || Array.isArray(t))
      return { layouts: Pm(e), values: {} };
    const n = t;
    if (n.layouts != null && typeof n.layouts == "object" && !Array.isArray(n.layouts)) {
      const i = Pm(JSON.stringify(n.layouts)), a = {};
      if (n.values != null && typeof n.values == "object" && !Array.isArray(n.values))
        for (const [s, l] of Object.entries(n.values)) {
          if (!s.trim() || l == null || typeof l != "object")
            continue;
          const u = Ac(l);
          u && (a[s] = { zoneKey: s, ...u });
        }
      return { layouts: i, values: a };
    }
    const r = {}, o = {};
    for (const [i, a] of Object.entries(n)) {
      if (!i.trim() || a == null || typeof a != "object")
        continue;
      const s = a, l = Di(s);
      l && (r[i] = l);
      const u = Ac(s);
      u && (o[i] = { zoneKey: i, ...u });
    }
    return { layouts: r, values: o };
  } catch {
    return { layouts: {}, values: {} };
  }
}
function ms(e, t, n) {
  var o, i, a, s, l, u;
  const r = Oi(e, t);
  for (const f of e.zones) {
    const c = Cr(f, e.zones), d = n[c] ?? n[f.zoneKey];
    if (!d)
      continue;
    const v = r[f.id];
    r[f.id] = {
      zoneKey: c,
      id: v == null ? void 0 : v.id,
      textValue: (o = v == null ? void 0 : v.textValue) != null && o.trim() ? v.textValue : d.textValue,
      colorValue: (i = v == null ? void 0 : v.colorValue) != null && i.trim() ? v.colorValue : d.colorValue,
      htmlValue: (a = v == null ? void 0 : v.htmlValue) != null && a.trim() ? v.htmlValue : d.htmlValue,
      linkUrl: (s = v == null ? void 0 : v.linkUrl) != null && s.trim() ? v.linkUrl : d.linkUrl,
      imageAssetId: (l = v == null ? void 0 : v.imageAssetId) != null && l.trim() ? v.imageAssetId : d.imageAssetId,
      imageAssetUrl: (u = v == null ? void 0 : v.imageAssetUrl) != null && u.trim() ? v.imageAssetUrl : d.imageAssetUrl
    };
  }
  return Object.values(r);
}
function Mv(e, t) {
  return Tc(t ? {
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
function vo(e, t) {
  return t.filter((r) => r.zoneKey === e.zoneKey).length > 1 ? `${e.zoneKey}__${e.id}` : e.zoneKey;
}
function Cr(e, t) {
  return vo(e, t);
}
function Oi(e, t) {
  var o;
  const n = /* @__PURE__ */ new Map();
  for (const i of t) {
    const a = (o = i.zoneKey) == null ? void 0 : o.trim();
    if (!a)
      continue;
    const s = n.get(a) ?? [];
    s.push(i), n.set(a, s);
  }
  const r = {};
  for (const i of e.zones) {
    const a = Cr(i, e.zones), s = n.get(a) ?? n.get(i.zoneKey), l = s == null ? void 0 : s.shift();
    l && (r[i.id] = { ...l, zoneKey: a });
  }
  return r;
}
function Cv(e, t) {
  return {
    ...e,
    zones: [...e.zones].map((n) => {
      const r = vo(n, e.zones), o = r === n.zoneKey ? t[n.zoneKey] : t[r];
      return Mv(n, o);
    }).sort((n, r) => n.sortOrder - r.sortOrder || n.id.localeCompare(r.id))
  };
}
function zN(e) {
  return fs({
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
function LN(e) {
  const t = {};
  for (const n of e.zones) {
    const r = vo(n, e.zones);
    t[r] = zN(n);
  }
  return t;
}
function zv(e, t) {
  const n = LN(e);
  for (const r of e.zones) {
    const o = vo(r, e.zones), i = o === r.zoneKey ? t[r.zoneKey] : t[o];
    i ? n[o] = fs({ ...n[o], ...i }) : n[o] = fs(n[o] ?? {});
  }
  return n;
}
function IN({
  layout: e,
  onChange: t,
  showPosition: n = !1,
  compact: r = !1
}) {
  return /* @__PURE__ */ C("div", { className: `asset-zone-layout-fields${r ? " asset-zone-layout-fields-compact" : ""}`, children: [
    /* @__PURE__ */ C("div", { className: "asset-zone-layout-grid", children: [
      /* @__PURE__ */ C("label", { children: [
        "Alignment",
        /* @__PURE__ */ m(
          "select",
          {
            value: e.contentAlignment ?? Mr,
            onChange: (o) => t({ contentAlignment: o.target.value }),
            children: Yy.map((o) => /* @__PURE__ */ m("option", { value: o, children: o }, o))
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { children: [
        "Offset (px)",
        /* @__PURE__ */ m(
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
        /* @__PURE__ */ m(
          "select",
          {
            value: e.offsetDirection ?? sl,
            onChange: (o) => t({ offsetDirection: o.target.value }),
            children: Qy.map((o) => /* @__PURE__ */ m("option", { value: o, children: o }, o))
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { children: [
        "Sort order",
        /* @__PURE__ */ m(
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
        /* @__PURE__ */ m(
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
        /* @__PURE__ */ m(
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
        /* @__PURE__ */ m(
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
        /* @__PURE__ */ m(
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
function xN({ zoneKey: e, selectedUrl: t, onChange: n, compact: r = !1 }) {
  const o = Ki(t);
  return /* @__PURE__ */ m("div", { className: `logo-picker${r ? " logo-picker-compact" : ""}`, role: "radiogroup", "aria-label": "Choose logo", children: Ii.map((i) => {
    const a = o === i.url;
    return /* @__PURE__ */ C(
      "button",
      {
        type: "button",
        role: "radio",
        "aria-checked": a,
        className: `logo-picker-option${a ? " logo-picker-option-selected" : ""}`,
        onClick: () => n(e, i.url),
        children: [
          /* @__PURE__ */ m("span", { className: "logo-picker-preview", style: { background: i.previewBackground }, children: /* @__PURE__ */ m("img", { src: i.url, alt: "", className: "logo-picker-image" }) }),
          /* @__PURE__ */ m("span", { className: "logo-picker-label", children: i.label })
        ]
      },
      i.id
    );
  }) });
}
function DN(...e) {
  const t = /* @__PURE__ */ new Set(), n = [];
  for (const r of e)
    for (const o of r) {
      const i = o.id || o.previewUrl || o.thumbnailUrl;
      !i || t.has(i) || (t.add(i), n.push(o));
    }
  return n;
}
function ON({
  zoneKey: e,
  zone: t,
  templateId: n,
  selectedAssetId: r,
  selectedUrl: o,
  onChange: i,
  compact: a = !1
}) {
  const { searchIdentifier: s } = Jd(), { resultIds: l, hasSearchIntegration: u } = Ev(), [f, c] = N.useState([]), [d, v] = N.useState([]), [T, w] = N.useState([]), [L, y] = N.useState(!1), [h, g] = N.useState(null), [E, I] = N.useState(!1), [M, A] = N.useState("");
  N.useEffect(() => {
    if (!(n != null && n.trim()) || n.startsWith("temp-")) {
      c([]);
      return;
    }
    let b = !1;
    return y(!0), g(null), se.getTemplateAllowedAssets(n).then((q) => {
      b || c(q);
    }).catch((q) => {
      b || (c([]), g(q instanceof Error ? q.message : "Could not load template images."));
    }).finally(() => {
      b || y(!1);
    }), () => {
      b = !0;
    };
  }, [n]), N.useEffect(() => {
    const b = (t == null ? void 0 : t.allowedAssetIds) ?? [];
    if (b.length === 0) {
      v([]);
      return;
    }
    let q = !1;
    return se.getAssetsByIds(b).then((ee) => {
      q || v(ee);
    }).catch(() => {
      q || v([]);
    }), () => {
      q = !0;
    };
  }, [t == null ? void 0 : t.allowedAssetIds]), N.useEffect(() => {
    if (l.length === 0) {
      w([]);
      return;
    }
    let b = !1;
    return se.getAssetsByIds(l).then((q) => {
      b || w(q);
    }).catch(() => {
      b || w([]);
    }), () => {
      b = !0;
    };
  }, [l]);
  const z = N.useMemo(
    () => DN(d, f),
    [f, d]
  ), B = N.useMemo(() => z.length > 0 ? z : T, [z, T]), j = z.length > 0, U = () => {
    const b = M.trim();
    b && (i(e, { imageAssetUrl: b }), I(!1), A(""));
  };
  return !(n != null && n.trim()) || n.startsWith("temp-") ? /* @__PURE__ */ m("p", { className: "image-picker-hint", children: "Template image library is not available yet. Save the template and link assets in template setup." }) : /* @__PURE__ */ C("div", { className: `image-picker${a ? " image-picker-compact" : ""}`, children: [
    j ? /* @__PURE__ */ C("p", { className: "image-picker-hint", children: [
      "Choose an image from the template library",
      d.length > 0 ? " (zone + template)" : "",
      "."
    ] }) : u ? /* @__PURE__ */ C("p", { className: "image-picker-hint", children: [
      "Run a Content Hub search on this page, then pick an image below.",
      s ? ` (search: ${s})` : ""
    ] }) : /* @__PURE__ */ C("p", { className: "image-picker-hint", children: [
      "Link images on the template in ",
      /* @__PURE__ */ m("strong", { children: "Edit template" }),
      ", or add ",
      /* @__PURE__ */ m("code", { children: "searchIdentifier" }),
      " to this page's external component configuration to pick assets from search."
    ] }),
    L && /* @__PURE__ */ m("div", { className: "image-picker-loading", children: "Loading template images..." }),
    h && /* @__PURE__ */ m("div", { className: "image-picker-error", children: h }),
    o && /* @__PURE__ */ m("div", { className: "image-picker-selected-preview", children: /* @__PURE__ */ m("img", { src: o, alt: "", className: "image-picker-selected-image" }) }),
    /* @__PURE__ */ m("div", { className: "image-picker-grid", role: "radiogroup", "aria-label": "Choose image", children: B.map((b) => {
      const q = r && b.id === r || !r && o && b.previewUrl === o || !r && o && b.thumbnailUrl === o;
      return /* @__PURE__ */ C(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": q,
          className: `image-picker-option${q ? " image-picker-option-selected" : ""}`,
          onClick: () => i(e, {
            id: b.id || void 0,
            imageAssetUrl: b.previewUrl ?? b.thumbnailUrl
          }),
          children: [
            /* @__PURE__ */ m("span", { className: "image-picker-preview", children: /* @__PURE__ */ m("img", { src: b.thumbnailUrl, alt: "", className: "image-picker-image" }) }),
            /* @__PURE__ */ m("span", { className: "image-picker-label", children: b.name })
          ]
        },
        b.id || b.thumbnailUrl
      );
    }) }),
    !L && B.length === 0 && !h && /* @__PURE__ */ C("p", { className: "image-picker-hint", children: [
      "No images available yet. In ",
      /* @__PURE__ */ m("strong", { children: "Edit template" }),
      ', use "Template image library" to link assets from Content Hub search.'
    ] }),
    /* @__PURE__ */ m("div", { className: "image-picker-footer", children: /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        className: "image-picker-url-toggle",
        onClick: () => I((b) => !b),
        children: E ? "Hide image URL" : "Use image URL instead"
      }
    ) }),
    E && /* @__PURE__ */ C("div", { className: "image-picker-url-form", children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "image-picker-url-input",
          placeholder: "https://...",
          value: M,
          onChange: (b) => A(b.target.value)
        }
      ),
      /* @__PURE__ */ m("button", { type: "button", className: "image-picker-url-apply", onClick: U, disabled: !M.trim(), children: "Use image URL" })
    ] })
  ] });
}
function Lv({
  zone: e,
  templateId: t,
  value: n,
  onChange: r,
  adminMode: o = !1,
  hideLogoPicker: i = !1,
  layoutMode: a = "canvas"
}) {
  const s = Zi(), l = o || !e.isLocked, u = e.positionX !== void 0 || e.positionY !== void 0, f = a === "stacked" ? { position: "relative", width: "100%" } : u ? {
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
  }, c = Vk(e, f, a), d = Wk(e), v = a === "stacked" ? " zone-stacked" : "";
  if (nl(e))
    return /* @__PURE__ */ m(
      PN,
      {
        style: c,
        layoutClass: d,
        stackedClass: v,
        zone: e,
        brandKit: s,
        layoutMode: a,
        value: n,
        onChange: r,
        adminMode: o,
        hideLogoPicker: i
      }
    );
  if (e.isLocked && !o)
    return /* @__PURE__ */ m("div", { style: c, className: `zone zone-locked${v} ${d}`, "data-zone-key": e.zoneKey, children: /* @__PURE__ */ m(_N, { zone: e, brandKit: s, layoutMode: a }) });
  switch (e.zoneType) {
    case "Text":
      return /* @__PURE__ */ m(
        jN,
        {
          style: c,
          layoutClass: d,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: a
        }
      );
    case "Heading":
      return /* @__PURE__ */ m(
        $N,
        {
          style: c,
          layoutClass: d,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: a
        }
      );
    case "Image":
      return /* @__PURE__ */ m(
        bN,
        {
          style: c,
          layoutClass: d,
          stackedClass: v,
          zone: e,
          templateId: t,
          value: n,
          onChange: r,
          adminMode: o,
          hideImagePicker: i,
          layoutMode: a
        }
      );
    case "CTA Button":
      return /* @__PURE__ */ m(
        RN,
        {
          style: c,
          layoutClass: d,
          zone: e,
          value: n,
          onChange: r,
          layoutMode: a
        }
      );
    case "Background Color":
      return a === "stacked" ? null : /* @__PURE__ */ m(
        "div",
        {
          style: { ...c, backgroundColor: (n == null ? void 0 : n.colorValue) ?? "#ffffff" },
          className: `zone zone-background ${d}`,
          "data-zone-key": e.zoneKey
        }
      );
    case "Divider":
      return /* @__PURE__ */ m(
        "hr",
        {
          style: c,
          className: `zone zone-divider${v} ${d}`,
          "data-zone-key": e.zoneKey
        }
      );
    case "HTML":
      return /* @__PURE__ */ m(UN, { style: c, layoutClass: d, zone: e, value: n, onChange: r });
    default:
      return null;
  }
}
function PN({
  style: e,
  layoutClass: t,
  stackedClass: n,
  zone: r,
  brandKit: o,
  layoutMode: i,
  value: a,
  onChange: s,
  adminMode: l,
  hideLogoPicker: u = !1
}) {
  const f = Ki((a == null ? void 0 : a.imageAssetUrl) ?? o.logoAssetUrl), c = Ry((a == null ? void 0 : a.imageAssetUrl) ?? o.logoAssetUrl), d = !l && !u;
  return /* @__PURE__ */ m("div", { style: e, className: `zone zone-logo${n} ${t}`, "data-zone-key": r.zoneKey, children: d ? /* @__PURE__ */ m(
    xN,
    {
      zoneKey: r.zoneKey,
      selectedUrl: a == null ? void 0 : a.imageAssetUrl,
      compact: i === "stacked",
      onChange: (v, T) => s(v, { zoneKey: v, imageAssetUrl: T })
    }
  ) : /* @__PURE__ */ m(
    "span",
    {
      className: "zone-logo-preview-frame",
      style: c ? { background: c } : void 0,
      children: /* @__PURE__ */ m(
        "img",
        {
          src: f,
          alt: `${o.brandKitName} logo`,
          className: "zone-logo-image",
          style: { maxWidth: "100%", height: i === "stacked" ? 64 : "100%", objectFit: "contain" }
        }
      )
    }
  ) });
}
function _N({
  zone: e,
  brandKit: t,
  layoutMode: n
}) {
  var r;
  if (e.zoneType === "Background Color") {
    const o = (r = t.colors.find((i) => i.colorUsageType === "Primary")) == null ? void 0 : r.hexValue;
    return /* @__PURE__ */ m("div", { style: { width: "100%", height: "100%", backgroundColor: o } });
  }
  if (e.zoneType === "HTML") {
    const o = xi(e.htmlDefaultContent);
    return o ? /* @__PURE__ */ m("div", { dangerouslySetInnerHTML: { __html: o } }) : null;
  }
  return e.zoneType === "Image" ? /* @__PURE__ */ m("div", { className: "zone-image-placeholder zone-image-placeholder-locked", children: "Image zone — unlock in template setup to change the image here." }) : null;
}
function bN({
  style: e,
  layoutClass: t,
  stackedClass: n,
  zone: r,
  templateId: o,
  value: i,
  onChange: a,
  adminMode: s,
  hideImagePicker: l = !1,
  layoutMode: u = "canvas"
}) {
  const f = !s && !l;
  return /* @__PURE__ */ m("div", { style: e, className: `zone zone-image${n} ${t}`, "data-zone-key": r.zoneKey, children: f ? /* @__PURE__ */ m(
    ON,
    {
      zoneKey: r.zoneKey,
      zone: r,
      templateId: o,
      selectedAssetId: i == null ? void 0 : i.imageAssetId,
      selectedUrl: i == null ? void 0 : i.imageAssetUrl,
      compact: n.includes("stacked"),
      onChange: (c, d) => a(c, {
        zoneKey: c,
        imageAssetId: d.id,
        imageAssetUrl: d.imageAssetUrl
      })
    }
  ) : i != null && i.imageAssetUrl ? /* @__PURE__ */ m(
    "img",
    {
      src: i.imageAssetUrl,
      alt: r.zoneLabel,
      className: "zone-image-preview",
      style: u === "canvas" || r.zoneHeight != null || r.zoneWidth != null ? { width: "100%", height: "100%", maxHeight: "none", objectFit: "contain" } : void 0
    }
  ) : /* @__PURE__ */ m("div", { className: "zone-image-placeholder", children: r.zoneLabel }) });
}
function $N({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const a = ds("Heading"), s = Xd("Secondary"), l = n.headingLevel ?? Nn;
  return /* @__PURE__ */ m(
    "div",
    {
      style: {
        ...e,
        fontFamily: a,
        fontSize: Zk[l],
        fontWeight: 700,
        lineHeight: 1.25,
        color: s
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
function jN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const a = ds("Heading"), s = ds("Body"), l = Xd("Secondary"), u = (n.zoneLabel ?? "").toLowerCase().includes("headline") ? a : s;
  return /* @__PURE__ */ m(
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
function RN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o,
  layoutMode: i
}) {
  const a = Xd("Accent"), s = ds("CTA");
  return /* @__PURE__ */ m("div", { style: e, className: `zone zone-cta${i === "stacked" ? " zone-stacked" : ""} ${t}`, "data-zone-key": n.zoneKey, children: /* @__PURE__ */ m(
    "button",
    {
      type: "button",
      className: "zone-cta-button",
      style: { backgroundColor: a, fontFamily: s, border: "none", borderRadius: 4, padding: "10px 20px", color: "#fff" },
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onBlur: (l) => o(n.zoneKey, { ...r, zoneKey: n.zoneKey, textValue: l.currentTarget.innerText }),
      children: (r == null ? void 0 : r.textValue) ?? n.zoneLabel
    }
  ) });
}
function UN({
  style: e,
  layoutClass: t,
  zone: n,
  value: r,
  onChange: o
}) {
  return n.htmlAllowUserOverride ? /* @__PURE__ */ C("div", { style: e, className: `zone zone-html ${t}`, children: [
    /* @__PURE__ */ m(
      "textarea",
      {
        className: "zone-html-editor",
        defaultValue: (r == null ? void 0 : r.htmlValue) ?? n.htmlDefaultContent ?? "",
        onBlur: (i) => o(n.zoneKey, { zoneKey: n.zoneKey, htmlValue: i.target.value })
      }
    ),
    /* @__PURE__ */ m(
      "div",
      {
        className: "zone-html-preview",
        dangerouslySetInnerHTML: { __html: xi((r == null ? void 0 : r.htmlValue) ?? n.htmlDefaultContent) }
      }
    )
  ] }) : /* @__PURE__ */ m(
    "div",
    {
      style: e,
      className: `zone zone-html zone-html-locked ${t}`,
      "data-zone-key": n.zoneKey,
      dangerouslySetInnerHTML: { __html: xi(n.htmlDefaultContent) }
    }
  );
}
function Iv({
  template: e,
  zoneLayouts: t,
  zoneValues: n,
  layoutMode: r,
  onLayoutChange: o,
  onZoneValueChange: i
}) {
  var d;
  const [a, s] = N.useState(((d = e.zones[0]) == null ? void 0 : d.id) ?? null), l = N.useMemo(() => {
    const v = /* @__PURE__ */ new Set();
    for (const T of e.zones) {
      if (v.has(T.zoneKey))
        return !0;
      v.add(T.zoneKey);
    }
    return !1;
  }, [e.zones]), u = N.useMemo(
    () => [...e.zones].map((v) => {
      const T = vo(v, e.zones), w = T === v.zoneKey ? t[v.zoneKey] : t[T];
      return Mv(v, w);
    }).sort((v, T) => v.sortOrder - T.sortOrder || v.id.localeCompare(T.id)),
    [e.zones, t]
  ), f = N.useMemo(() => CN(t), [t]), c = (v) => {
    const T = a === v.id, w = vo(v, e.zones), L = e.zones.find((h) => h.id === v.id) ?? v, y = Cr(L, e.zones);
    return /* @__PURE__ */ C("div", { className: "asset-zone-structure-row", children: [
      /* @__PURE__ */ C(
        "button",
        {
          type: "button",
          className: "asset-zone-structure-header",
          onClick: () => s((h) => h === v.id ? null : v.id),
          "aria-expanded": T,
          children: [
            /* @__PURE__ */ m("span", { className: "asset-zone-structure-title", children: v.zoneLabel || v.zoneKey }),
            /* @__PURE__ */ m("span", { className: "asset-zone-structure-type", children: v.zoneType }),
            /* @__PURE__ */ m("span", { className: "asset-zone-structure-chevron", children: T ? "▾" : "▸" })
          ]
        }
      ),
      T && /* @__PURE__ */ m("div", { className: "asset-zone-structure-body", children: /* @__PURE__ */ C("div", { className: "asset-zone-structure-content", children: [
        /* @__PURE__ */ m("p", { className: "asset-zone-structure-content-label", children: "Content" }),
        l && /* @__PURE__ */ C("p", { className: "asset-zone-structure-key-hint", children: [
          "Zone key: ",
          /* @__PURE__ */ m("code", { children: y })
        ] }),
        /* @__PURE__ */ m(
          Lv,
          {
            zone: { ...L, zoneKey: y },
            templateId: e.id,
            value: n[L.id],
            onChange: (h, g) => i(L.id, { ...g, zoneKey: y }),
            layoutMode: "stacked"
          }
        ),
        /* @__PURE__ */ m(
          IN,
          {
            layout: (w === v.zoneKey ? t[v.zoneKey] : t[w]) ?? {},
            onChange: (h) => o(w, h),
            showPosition: r === "canvas"
          },
          w
        )
      ] }) })
    ] }, v.id);
  };
  return /* @__PURE__ */ C("div", { className: "asset-structure-panel", children: [
    /* @__PURE__ */ m("p", { className: "asset-structure-panel-hint", children: "Expand a zone to edit position, alignment, and content. Layout is saved as JSON on this marketing asset." }),
    l && /* @__PURE__ */ m("p", { className: "asset-zone-structure-warning", children: "Some zones share the same zone key. Edit each zone's key in Template setup so content stays independent after save." }),
    /* @__PURE__ */ m("div", { className: "asset-zone-structure-list", children: u.map(c) }),
    /* @__PURE__ */ C("details", { className: "asset-layout-json-preview", children: [
      /* @__PURE__ */ m("summary", { children: "Layout JSON (saved on marketing asset)" }),
      /* @__PURE__ */ m("pre", { children: f })
    ] })
  ] });
}
function hs({
  structure: e,
  preview: t,
  structureTitle: n = "Structure",
  previewTitle: r = "Preview"
}) {
  return /* @__PURE__ */ C("div", { className: "builder-split", children: [
    /* @__PURE__ */ C("section", { className: "builder-split-panel builder-split-structure", "aria-label": n, children: [
      /* @__PURE__ */ m("h3", { className: "builder-split-heading", children: n }),
      /* @__PURE__ */ m("div", { className: "builder-split-structure-body", children: e })
    ] }),
    /* @__PURE__ */ C("section", { className: "builder-split-panel builder-split-preview", "aria-label": r, children: [
      /* @__PURE__ */ m("h3", { className: "builder-split-heading", children: r }),
      /* @__PURE__ */ m("div", { className: "builder-split-preview-body", children: t })
    ] })
  ] });
}
function HN(e) {
  var n;
  const t = {};
  for (const r of e.zones) {
    const i = { zoneKey: Cr(r, e.zones) };
    if (nl(r)) {
      i.imageAssetUrl = jd, t[r.id] = i;
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
function FN(e, t) {
  var o, i, a, s, l, u, f, c;
  const n = HN(e), r = { ...n };
  for (const d of e.zones) {
    const v = Cr(d, e.zones), T = t[d.id] ?? t[v] ?? t[d.zoneKey];
    if (T) {
      if (nl(d)) {
        r[d.id] = {
          zoneKey: v,
          imageAssetUrl: (o = T.imageAssetUrl) != null && o.trim() ? T.imageAssetUrl : (i = n[d.id]) == null ? void 0 : i.imageAssetUrl
        };
        continue;
      }
      r[d.id] = {
        ...n[d.id],
        ...T,
        zoneKey: v,
        textValue: (a = T.textValue) != null && a.trim() ? T.textValue : (s = n[d.id]) == null ? void 0 : s.textValue,
        htmlValue: (l = T.htmlValue) != null && l.trim() ? T.htmlValue : (u = n[d.id]) == null ? void 0 : u.htmlValue,
        imageAssetUrl: (f = T.imageAssetUrl) != null && f.trim() ? T.imageAssetUrl : (c = n[d.id]) == null ? void 0 : c.imageAssetUrl
      };
    }
  }
  return r;
}
const qd = N.forwardRef(function({ template: t, zoneValues: n = {}, layoutMode: r = "stacked" }, o) {
  const i = Zi(), a = N.useMemo(
    () => [...t.zones].sort((d, v) => d.sortOrder - v.sortOrder),
    [t.zones]
  ), s = N.useMemo(
    () => FN(t, n),
    [t, n]
  ), l = N.useMemo(
    () => yc(t, s, i),
    [i, s, t]
  ), u = Hy(t), f = Ud(t), c = By(t);
  return a.length === 0 ? /* @__PURE__ */ m("p", { className: "template-admin-preview-empty", children: "Add zones on the left to see a live preview here." }) : t.channelType === "Social" || r === "canvas" ? /* @__PURE__ */ C("div", { className: "live-preview-canvas-wrap", children: [
    /* @__PURE__ */ m("p", { className: "live-preview-dimensions-badge", "aria-label": "Template dimensions", children: u }),
    /* @__PURE__ */ m(
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
        children: a.map((d) => /* @__PURE__ */ m(
          Lv,
          {
            zone: d,
            templateId: t.id,
            value: s[d.id] ?? s[d.zoneKey],
            onChange: () => {
            },
            layoutMode: "canvas",
            hideLogoPicker: !0,
            adminMode: !0
          },
          `${d.id}-${d.sortOrder}-${d.positionX}-${d.positionY}-${d.contentAlignment}-${d.offsetPx}`
        ))
      }
    )
  ] }) : /* @__PURE__ */ C("div", { className: "live-preview-email-wrap", children: [
    /* @__PURE__ */ m("p", { className: "live-preview-dimensions-badge", "aria-label": "Template dimensions", children: u }),
    /* @__PURE__ */ m(
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
}), BN = [
  "Change spotted. Autosave is putting on its running shoes…",
  "Unsaved edits detected. Warming up the Content Hub handshake…",
  "Hold tight — your zones are about to get persisted…",
  "Debouncing brilliance before we commit…"
], KN = [
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
function ZN(e) {
  return e === "pending" ? BN : KN;
}
function Sc(e, t = "active", n = 2600) {
  const r = ZN(t), [o, i] = N.useState(0);
  return N.useEffect(() => {
    if (!e) {
      i(0);
      return;
    }
    const a = () => {
      i((l) => {
        if (r.length <= 1)
          return 0;
        let u = l;
        for (; u === l; )
          u = Math.floor(Math.random() * r.length);
        return u;
      });
    }, s = window.setInterval(a, n);
    return () => window.clearInterval(s);
  }, [e, n, r.length]), r[o];
}
function No({
  active: e,
  variant: t = "active",
  className: n
}) {
  const r = Sc(e, t);
  return e ? /* @__PURE__ */ m(
    "p",
    {
      className: `saving-status-message${n ? ` ${n}` : ""}`,
      role: "status",
      "aria-live": "polite",
      children: r
    }
  ) : null;
}
function xv({ marketingAsset: e, userHasOverridePermission: t, onEject: n }) {
  const [r, o] = N.useState(!1), [i, a] = N.useState(""), [s, l] = N.useState(!1);
  return !t || e.isRawHtmlOverrideMA ? null : /* @__PURE__ */ C(on, { children: [
    /* @__PURE__ */ m("button", { type: "button", className: "eject-button", onClick: () => o(!0), children: "Eject to raw HTML" }),
    r && /* @__PURE__ */ m("div", { className: "eject-modal-backdrop", onClick: () => o(!1), children: /* @__PURE__ */ C("div", { className: "eject-modal", onClick: (u) => u.stopPropagation(), children: [
      /* @__PURE__ */ m("h3", { children: "This removes brand-lock protection for this asset" }),
      /* @__PURE__ */ m("p", { children: "Locked elements (logo, colours, fonts) can be edited freely once ejected. This applies to this asset only, not the template, and cannot be undone for this asset. A reason is required and will appear on the governance report." }),
      /* @__PURE__ */ m(
        "textarea",
        {
          placeholder: "Why does this asset need raw HTML?",
          value: i,
          onChange: (u) => a(u.target.value),
          autoFocus: !0
        }
      ),
      /* @__PURE__ */ C("div", { className: "eject-modal-actions", children: [
        /* @__PURE__ */ m("button", { type: "button", onClick: () => o(!1), children: "Cancel" }),
        /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: "eject-confirm",
            disabled: !i.trim() || s,
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
      /* @__PURE__ */ m(No, { active: s, className: "eject-saving" })
    ] }) })
  ] });
}
async function VN(e, t, n) {
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
function WN({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  renderEmailApiUrl: r = "/api/render-email-html",
  onSaved: o
}) {
  const i = Zi(), [a, s] = N.useState(() => {
    const M = ps(t.zoneLayoutJson), A = ms(e, t.zoneValues, M.values);
    return Oi(e, A);
  }), [l, u] = N.useState(() => {
    const M = ps(t.zoneLayoutJson);
    return zv(e, M.layouts);
  }), [f, c] = N.useState(t.rawHtmlOverrideContent ?? ""), [d, v] = N.useState(!1), [T, w] = N.useState(null), L = N.useMemo(
    () => Cv(e, l),
    [e, l]
  ), y = N.useMemo(
    () => yc(L, a, i),
    [i, L, a]
  ), h = N.useMemo(
    () => xi(f),
    [f]
  ), g = (M, A) => {
    s((z) => ({ ...z, [M]: A }));
  }, E = (M, A) => {
    u((z) => {
      const B = { ...z[M], ...A };
      for (const j of Object.keys(A))
        A[j] === void 0 && delete B[j];
      return { ...z, [M]: B };
    });
  }, I = async () => {
    v(!0), w(null);
    try {
      const M = L.zones.map((b) => {
        const q = a[b.id];
        return q ? { ...q, zoneKey: Cr(b, L.zones) } : null;
      }).filter((b) => !!(b != null && b.zoneKey)), A = Object.fromEntries(
        M.map((b) => [b.zoneKey, b])
      ), z = Nv(l, A);
      await se.updateMarketingAsset({
        ...t,
        zoneLayoutJson: z
      }), F("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const B = await se.saveMarketingAssetZoneValues(
        t.id,
        M
      ), j = ms(e, B, A);
      s(Oi(e, j));
      let U = yc(
        L,
        Object.fromEntries(j.map((b) => [b.zoneKey, b])),
        i
      );
      if (bE(r))
        F("email HTML", "Generated client-side email HTML.");
      else
        try {
          U = await VN(r, e.id, t.id), F("email HTML render", `Rendered via ${r}`);
        } catch (b) {
          ie(
            "email HTML render API",
            b instanceof Error ? b.message : String(b)
          ), ie("email HTML preview", "Using client-side inline-CSS renderer because the render API is unavailable.");
        }
      if (Yd()) {
        const b = new Blob([U], { type: "text/html" });
        await se.uploadRenderedOutput(t.id, b, `${t.assetName}.html`);
      } else
        ie(
          "rendered output upload",
          "Skipped HTML upload — not required for save on this Content Hub instance."
        );
      o == null || o({
        ...t,
        zoneValues: j,
        zoneLayoutJson: z
      });
    } catch (M) {
      const A = M instanceof Error ? M.message : "Failed to save and render email HTML.";
      Rn("email save/render", M), w(A);
    } finally {
      v(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ m(
    hs,
    {
      structureTitle: "HTML source",
      previewTitle: "Rendered preview",
      structure: /* @__PURE__ */ C("div", { className: "email-builder-override-structure", children: [
        /* @__PURE__ */ C("div", { className: "override-banner", children: [
          "Raw HTML override active. Reason: ",
          t.overrideReasonMA
        ] }),
        /* @__PURE__ */ m(
          "textarea",
          {
            className: "raw-html-editor",
            value: f,
            onChange: (M) => c(M.target.value),
            onBlur: async (M) => {
              const A = M.target.value;
              await se.updateMarketingAsset({
                ...t,
                rawHtmlOverrideContent: A
              });
            }
          }
        )
      ] }),
      preview: /* @__PURE__ */ m(
        "iframe",
        {
          title: "Email preview",
          srcDoc: h,
          className: "email-builder-preview-frame email-builder-preview-frame-fill"
        },
        h
      )
    }
  ) : /* @__PURE__ */ m("div", { className: "email-builder", children: /* @__PURE__ */ m(
    hs,
    {
      structureTitle: "Email structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ C("div", { className: "email-builder-structure", children: [
        /* @__PURE__ */ m(
          Iv,
          {
            template: e,
            zoneLayouts: l,
            zoneValues: a,
            layoutMode: "stacked",
            onLayoutChange: E,
            onZoneValueChange: g
          }
        ),
        /* @__PURE__ */ C("div", { className: "email-builder-actions", children: [
          /* @__PURE__ */ m("button", { type: "button", className: "email-builder-save", onClick: I, disabled: d, children: "Save" }),
          /* @__PURE__ */ m(No, { active: d }),
          /* @__PURE__ */ m(
            xv,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (M) => {
                await se.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: M,
                  rawHtmlOverrideContent: y || "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        T && /* @__PURE__ */ m("div", { className: "marketing-builder-error email-builder-error", children: T })
      ] }),
      preview: /* @__PURE__ */ m(
        qd,
        {
          template: L,
          zoneValues: a,
          layoutMode: "stacked"
        }
      )
    }
  ) });
}
const YN = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
let pu = null;
function QN(e) {
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
function GN(e = YN) {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (pu || (pu = QN(e).then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), pu);
}
function XN({
  template: e,
  marketingAsset: t,
  userHasOverridePermission: n,
  html2canvasCdnUrl: r,
  onSaved: o
}) {
  const [i, a] = N.useState(() => {
    const h = ps(t.zoneLayoutJson), g = ms(e, t.zoneValues, h.values);
    return Oi(e, g);
  }), [s, l] = N.useState(() => {
    const h = ps(t.zoneLayoutJson);
    return zv(e, h.layouts);
  }), [u, f] = N.useState(!1), [c, d] = N.useState(null), v = N.useRef(null), T = N.useMemo(
    () => Cv(e, s),
    [e, s]
  ), w = (h, g) => {
    a((E) => ({ ...E, [h]: g }));
  }, L = (h, g) => {
    l((E) => {
      const I = { ...E[h], ...g };
      for (const M of Object.keys(g))
        g[M] === void 0 && delete I[M];
      return { ...E, [h]: I };
    });
  }, y = async () => {
    f(!0), d(null);
    try {
      const h = T.zones.map((A) => {
        const z = i[A.id];
        return z ? { ...z, zoneKey: Cr(A, T.zones) } : null;
      }).filter((A) => !!(A != null && A.zoneKey)), g = Object.fromEntries(
        h.map((A) => [A.zoneKey, A])
      ), E = Nv(s, g);
      await se.updateMarketingAsset({
        ...t,
        zoneLayoutJson: E
      }), F("zone layout JSON", `Saved layout JSON on marketing asset ${t.id}`);
      const I = await se.saveMarketingAssetZoneValues(
        t.id,
        h
      ), M = ms(e, I, g);
      if (a(Oi(e, M)), Yd() && v.current) {
        const z = await (await GN(r))(v.current, {
          useCORS: !0,
          width: Ud(e),
          height: By(e)
        }), B = ["image", "png"].join("/"), j = await new Promise(
          (U, b) => z.toBlob((q) => q ? U(q) : b(new Error("Canvas export failed")), B)
        );
        await se.uploadRenderedOutput(
          t.id,
          j,
          `${t.assetName}.png`
        );
      } else
        ie(
          "rendered output upload",
          "Skipped PNG upload — not required for save on this Content Hub instance."
        );
      o == null || o({
        ...t,
        zoneValues: M,
        zoneLayoutJson: E
      });
    } catch (h) {
      d(h instanceof Error ? h.message : "Failed to save.");
    } finally {
      f(!1);
    }
  };
  return t.isRawHtmlOverrideMA ? /* @__PURE__ */ C("div", { className: "social-builder social-builder-override", children: [
    /* @__PURE__ */ C("div", { className: "override-banner", children: [
      "Raw HTML override active. Reason: ",
      t.overrideReasonMA
    ] }),
    /* @__PURE__ */ m("div", { dangerouslySetInnerHTML: { __html: t.rawHtmlOverrideContent ?? "" } })
  ] }) : /* @__PURE__ */ m("div", { className: "social-builder", children: /* @__PURE__ */ m(
    hs,
    {
      structureTitle: "Social structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ C("div", { className: "social-builder-structure", children: [
        /* @__PURE__ */ m(
          Iv,
          {
            template: e,
            zoneLayouts: s,
            zoneValues: i,
            layoutMode: "canvas",
            onLayoutChange: L,
            onZoneValueChange: w
          }
        ),
        /* @__PURE__ */ C("div", { className: "social-builder-actions", children: [
          /* @__PURE__ */ m("button", { type: "button", className: "social-builder-save", onClick: y, disabled: u, children: "Save" }),
          /* @__PURE__ */ m(No, { active: u }),
          /* @__PURE__ */ m(
            xv,
            {
              marketingAsset: t,
              userHasOverridePermission: n,
              onEject: async (h) => {
                await se.updateMarketingAsset({
                  ...t,
                  isRawHtmlOverrideMA: !0,
                  overrideReasonMA: h,
                  rawHtmlOverrideContent: "<!-- start building here -->"
                }), window.location.reload();
              }
            }
          )
        ] }),
        c && /* @__PURE__ */ m("div", { className: "marketing-builder-error social-builder-error", children: c })
      ] }),
      preview: /* @__PURE__ */ m(
        qd,
        {
          ref: v,
          template: T,
          zoneValues: i,
          layoutMode: "canvas"
        }
      )
    }
  ) });
}
function mu({
  activeTab: e,
  zoneCount: t,
  templateName: n,
  onTabChange: r,
  showAssetTab: o = !0
}) {
  return /* @__PURE__ */ C("div", { className: "marketing-builder-toolbar marketing-builder-tab-bar", children: [
    /* @__PURE__ */ C("div", { className: "marketing-builder-tabs", role: "tablist", "aria-label": "Marketing builder mode", children: [
      o && /* @__PURE__ */ m(
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
      /* @__PURE__ */ m(
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
function _m({
  brandKitId: e,
  currentTemplateId: t,
  marketingAssetId: n,
  onTemplateChange: r,
  refreshKey: o = 0
}) {
  var T;
  const [i, a] = N.useState([]), [s, l] = N.useState(!0), [u, f] = N.useState(!1), [c, d] = N.useState(null);
  N.useEffect(() => {
    let w = !1;
    async function L() {
      l(!0), d(null);
      try {
        const y = await se.listTemplatesForBrandKit(e);
        if (w)
          return;
        const h = y.some((E) => E.id === t) ? y : [...y, await se.getTemplate(t)], g = [...new Map(h.map((E) => [E.id, E])).values()];
        g.sort((E, I) => E.templateName.localeCompare(I.templateName)), a(g);
      } catch (y) {
        w || (d(y instanceof Error ? y.message : "Could not load templates."), a([]));
      } finally {
        w || l(!1);
      }
    }
    return L(), () => {
      w = !0;
    };
  }, [e, t, o]);
  const v = async (w) => {
    if (!(!w || w === t)) {
      f(!0), d(null);
      try {
        await se.linkMarketingAssetToTemplate(n, w);
        const L = i.find((y) => y.id === w) ?? await se.getTemplate(w);
        r(L);
      } catch (L) {
        d(L instanceof Error ? L.message : "Could not switch template.");
      } finally {
        f(!1);
      }
    }
  };
  return s ? /* @__PURE__ */ m("p", { className: "template-selector-status", children: "Loading templates..." }) : i.length <= 1 ? /* @__PURE__ */ C("div", { className: "template-selector", children: [
    /* @__PURE__ */ C("p", { className: "template-selector-status", children: [
      "Using ",
      /* @__PURE__ */ m("strong", { children: ((T = i[0]) == null ? void 0 : T.templateName) ?? "current template" }),
      i.length === 0 ? " (only template for this brand kit)" : "",
      ". Duplicate this template in Edit template to create another format."
    ] }),
    c && /* @__PURE__ */ m("p", { className: "marketing-builder-error template-selector-error", children: c })
  ] }) : /* @__PURE__ */ C("div", { className: "template-selector", children: [
    /* @__PURE__ */ C("label", { className: "template-selector-label", children: [
      "Template",
      /* @__PURE__ */ m(
        "select",
        {
          value: t,
          disabled: u,
          onChange: (w) => void v(w.target.value),
          children: i.map((w) => /* @__PURE__ */ C("option", { value: w.id, children: [
            w.templateName,
            " (",
            w.channelType,
            ")"
          ] }, w.id))
        }
      )
    ] }),
    /* @__PURE__ */ m("p", { className: "template-selector-hint", children: u ? "" : "Choose which template this marketing asset uses." }),
    /* @__PURE__ */ m(No, { active: u, className: "template-selector-saving" }),
    c && /* @__PURE__ */ m("p", { className: "marketing-builder-error template-selector-error", children: c })
  ] });
}
const JN = [
  "Text",
  "Heading",
  "Image",
  "CTA Button",
  "Logo",
  "Background Color",
  "Divider",
  "HTML"
];
function qN(e) {
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
    const a = decodeURIComponent(i.trim()).replace(/-/g, ":");
    return { fileKey: o, nodeId: a };
  } catch {
    return null;
  }
}
function eM(e) {
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
  }[t] ?? JN.find((r) => r.toLowerCase() === t);
}
function Dv(e) {
  var l, u;
  const t = e.trim(), n = t.match(/zone\s*[:=]\s*([a-zA-Z0-9_-]+)/i), r = t.match(/type\s*[:=]\s*([a-zA-Z0-9 _-]+)/i), o = t.match(/label\s*[:=]\s*([^|]+)/i), i = (l = n == null ? void 0 : n[1]) == null ? void 0 : l.trim(), a = r != null && r[1] ? eM(r[1]) : void 0, s = ((u = o == null ? void 0 : o[1]) == null ? void 0 : u.trim()) || void 0;
  return { zoneKey: i, zoneType: a, zoneLabel: s };
}
function tM(e, t) {
  return e.replace(/zone\s*[:=]\s*/gi, "").replace(/type\s*[:=]\s*[a-zA-Z0-9 _-]+/gi, "").replace(/label\s*[:=]\s*[^|]+/gi, "").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase() || t;
}
function bm(e) {
  return (e.fills ?? []).some(
    (t) => t.visible !== !1 && String(t.type ?? "").toUpperCase() === "IMAGE"
  );
}
function Ov(e) {
  var o, i;
  const t = Dv(e.name ?? "");
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
    const a = ((o = e.style) == null ? void 0 : o.fontSize) ?? 0, s = Number(((i = e.style) == null ? void 0 : i.fontWeight) ?? 0);
    return a >= 28 || s >= 600 || /heading|headline|title/i.test(e.characters ?? "") ? "Heading" : "Text";
  }
  if (r === "LINE")
    return "Divider";
  if ((bm(e) || r === "RECTANGLE" || r === "ELLIPSE") && bm(e))
    return "Image";
  if (r === "COMPONENT" || r === "INSTANCE") {
    if (/button|cta/i.test(n))
      return "CTA Button";
    if (/logo/i.test(n))
      return "Logo";
  }
}
function Pv(e) {
  const t = e.name ?? "";
  return /zone\s*[:=]/i.test(t) || /type\s*[:=]/i.test(t);
}
function nM(e) {
  const t = [], n = (r) => {
    Pv(r) && t.push(r);
    for (const o of r.children ?? [])
      n(o);
  };
  return n(e), t.length > 0 ? t : (e.children ?? []).filter((r) => Ov(r) != null);
}
function Gr(e) {
  if (!(e == null || !Number.isFinite(e)))
    return Math.round(e);
}
function rM(e, t, n, r) {
  const o = Dv(e.name ?? ""), i = o.zoneType ?? Ov(e) ?? "Text";
  let a = o.zoneKey || tM(e.name ?? "", `zone_${t + 1}`);
  r.has(a) && (a = `${a}_${t + 1}`), r.add(a);
  const s = e.absoluteBoundingBox, l = (s == null ? void 0 : s.x) != null ? Gr(s.x - n.x) : void 0, u = (s == null ? void 0 : s.y) != null ? Gr(s.y - n.y) : void 0, f = {
    id: `temp-figma-${Date.now()}-${t}`,
    zoneKey: a,
    zoneLabel: o.zoneLabel || (e.name ?? "").trim() || a,
    zoneType: i,
    isLocked: i === "Logo",
    sortOrder: t,
    positionX: l,
    positionY: u,
    zoneWidth: Gr(s == null ? void 0 : s.width),
    zoneHeight: Gr(s == null ? void 0 : s.height)
  };
  if (i === "Heading" && (f.headingLevel = Nn), i === "Text" && typeof e.characters == "string" && e.characters.trim()) {
    const c = e.characters.trim().length;
    c > 0 && (f.maxCharacterCount = Math.max(40, Math.ceil(c * 1.25)));
  }
  return f;
}
function oM(e) {
  var u, f, c, d;
  const t = [], n = (e.name ?? "").trim() || "Figma frame", r = Gr((u = e.absoluteBoundingBox) == null ? void 0 : u.width), o = Gr((f = e.absoluteBoundingBox) == null ? void 0 : f.height), i = {
    x: ((c = e.absoluteBoundingBox) == null ? void 0 : c.x) ?? 0,
    y: ((d = e.absoluteBoundingBox) == null ? void 0 : d.y) ?? 0
  }, a = nM(e);
  if (a.length === 0)
    return t.push(
      'No zone layers found. Name layers like "zone:headline | type:Heading" or place typed content as direct children of the frame.'
    ), { frameName: n, canvasWidth: r, canvasHeight: o, zones: [], warnings: t };
  a.some(Pv) || t.push(
    "No explicit zone: / type: names found — inferred zone types from layer names and Figma node types. Rename layers for stable imports."
  );
  const s = /* @__PURE__ */ new Set(), l = a.map((v, T) => rM(v, T, i, s));
  return { frameName: n, canvasWidth: r, canvasHeight: o, zones: l, warnings: t };
}
function _v(e, t) {
  const n = t.replace(/-/g, ":");
  if ((e.id ?? "").replace(/-/g, ":") === n)
    return e;
  for (const r of e.children ?? []) {
    const o = _v(r, n);
    if (o)
      return o;
  }
  return null;
}
function iM(e, t) {
  if (e == null || typeof e != "object")
    return null;
  const n = e, r = n.nodes;
  if (r != null && typeof r == "object" && !Array.isArray(r)) {
    const o = r, i = t.replace(/-/g, ":"), a = o[i] ?? o[t] ?? o[i.replace(/:/g, "-")] ?? Object.values(o)[0];
    if (a != null && typeof a == "object") {
      const s = a.document;
      return s != null && typeof s == "object" ? s : a;
    }
  }
  if (n.document != null && typeof n.document == "object") {
    const o = n.document;
    return _v(o, t) ?? o;
  }
  return n.id || n.children || n.type ? n : null;
}
function $m(e, t) {
  return `${e.replace(/\s+/g, " ").trim() || "Figma template"} (${t})`;
}
async function aM(e, t, n) {
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
function sM({
  template: e,
  figmaImportApiUrl: t = "/api/figma/import",
  figmaImportApiToken: n,
  onApplyToCurrent: r,
  onCreatedTemplate: o
}) {
  const [i, a] = N.useState(""), [s, l] = N.useState(null), [u, f] = N.useState(!1), [c, d] = N.useState(!1), [v, T] = N.useState(null), [w, L] = N.useState(null), [y, h] = N.useState(!1), [g, E] = N.useState(""), I = async () => {
    f(!0), T(null), L(null), l(null);
    try {
      const z = qN(i);
      if (!z)
        throw new Error(
          "Paste a full Figma URL that includes node-id (right-click frame → Copy link)."
        );
      const B = await aM(t, n, i), j = iM(B, z.nodeId);
      if (!j)
        throw new Error("Could not find that frame/node in the Figma response.");
      const U = oM(j);
      l(U), E($m(U.frameName, e.channelType)), U.zones.length === 0 ? T(U.warnings[0] || "No zones were mapped from this frame.") : L(`Mapped ${U.zones.length} zone(s) from “${U.frameName}”.`);
    } catch (z) {
      T(z instanceof Error ? z.message : "Figma preview failed.");
    } finally {
      f(!1);
    }
  }, M = () => {
    !s || s.zones.length === 0 || (r({
      zones: s.zones,
      canvasWidth: s.canvasWidth,
      canvasHeight: s.canvasHeight,
      frameName: s.frameName
    }), L(
      `Applied ${s.zones.length} zone(s) to “${e.templateName}”. Save/autosave will persist them.`
    ));
  }, A = async () => {
    if (!(!s || s.zones.length === 0)) {
      d(!0), T(null), L(null);
      try {
        const z = e.channelType, B = await se.createTemplate({
          templateName: g.trim() || $m(s.frameName, z),
          channelType: z,
          formatPreset: e.formatPreset,
          canvasWidth: s.canvasWidth,
          canvasHeight: s.canvasHeight,
          brandKitId: e.brandKitId,
          zones: s.zones,
          allowedAssetIds: e.allowedAssetIds
        }, e.id);
        L(`Created template “${B.templateName}” (${B.id}).`), o == null || o(B);
      } catch (z) {
        T(
          z instanceof Error ? z.message : "Could not create template from Figma."
        );
      } finally {
        d(!1);
      }
    }
  };
  return /* @__PURE__ */ C("div", { className: "figma-import-panel", children: [
    /* @__PURE__ */ m("h4", { children: "Import from Figma" }),
    /* @__PURE__ */ C("p", { className: "figma-import-hint", children: [
      "Copy a frame link from Figma (must include ",
      /* @__PURE__ */ m("code", { children: "node-id" }),
      "). Name layers like",
      " ",
      /* @__PURE__ */ m("code", { children: "zone:headline | type:Heading" }),
      ", ",
      /* @__PURE__ */ m("code", { children: "zone:hero | type:Image" }),
      ",",
      " ",
      /* @__PURE__ */ m("code", { children: "zone:body | type:Text" }),
      "."
    ] }),
    /* @__PURE__ */ C("label", { children: [
      "Figma frame URL",
      /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          value: i,
          onChange: (z) => a(z.target.value),
          placeholder: "https://www.figma.com/design/FILEKEY/Name?node-id=1-2"
        }
      )
    ] }),
    /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        className: "figma-import-button",
        onClick: () => void I(),
        disabled: u || !i.trim(),
        children: "Preview zones"
      }
    ),
    /* @__PURE__ */ m(No, { active: u || c, className: "figma-import-saving" }),
    s && s.zones.length > 0 && /* @__PURE__ */ C("div", { className: "figma-import-preview", children: [
      /* @__PURE__ */ C("p", { className: "figma-import-preview-meta", children: [
        "Frame ",
        /* @__PURE__ */ m("strong", { children: s.frameName }),
        s.canvasWidth != null && s.canvasHeight != null ? ` · ${s.canvasWidth}×${s.canvasHeight}` : null
      ] }),
      /* @__PURE__ */ m("ul", { className: "figma-import-zone-list", children: s.zones.map((z) => /* @__PURE__ */ C("li", { children: [
        /* @__PURE__ */ m("code", { children: z.zoneKey }),
        " — ",
        z.zoneType,
        z.zoneWidth != null && z.zoneHeight != null ? ` (${z.zoneWidth}×${z.zoneHeight})` : null
      ] }, z.id)) }),
      s.warnings.map((z) => /* @__PURE__ */ m("p", { className: "figma-import-warning", children: z }, z)),
      /* @__PURE__ */ C("label", { className: "figma-import-checkbox", children: [
        /* @__PURE__ */ m(
          "input",
          {
            type: "checkbox",
            checked: y,
            onChange: (z) => h(z.target.checked)
          }
        ),
        "Create as a new template (instead of replacing zones on this one)"
      ] }),
      y ? /* @__PURE__ */ C(on, { children: [
        /* @__PURE__ */ C("label", { children: [
          "New template name",
          /* @__PURE__ */ m(
            "input",
            {
              type: "text",
              value: g,
              onChange: (z) => E(z.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: "figma-import-button figma-import-button-primary",
            onClick: () => void A(),
            disabled: c || !g.trim(),
            children: "Create template from Figma"
          }
        )
      ] }) : /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          className: "figma-import-button figma-import-button-primary",
          onClick: M,
          children: "Replace zones on this template"
        }
      )
    ] }),
    w && /* @__PURE__ */ m("p", { className: "figma-import-message", children: w }),
    v && /* @__PURE__ */ m("p", { className: "marketing-builder-error figma-import-error", children: v })
  ] });
}
const lM = ["Social", "Email", "Newsletter"];
function uM({
  template: e,
  onChange: t,
  compact: n = !1
}) {
  const r = e.channelType === "Social", o = al(e.channelType), i = ik(e), a = (l) => {
    l !== e.channelType && t({
      channelType: l,
      ...Fy(l)
    });
  }, s = (l) => {
    const u = ak(e.channelType, l);
    u && t(u);
  };
  return /* @__PURE__ */ C("div", { className: `template-properties-form${n ? " template-properties-form-compact" : ""}`, children: [
    /* @__PURE__ */ m("h4", { children: n ? "Template" : "Template properties" }),
    /* @__PURE__ */ C("label", { children: [
      "Template name",
      /* @__PURE__ */ m(
        "input",
        {
          value: e.templateName,
          onChange: (l) => t({ templateName: l.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ C("label", { children: [
      "Channel type",
      /* @__PURE__ */ m(
        "select",
        {
          value: e.channelType,
          onChange: (l) => a(l.target.value),
          children: lM.map((l) => /* @__PURE__ */ m("option", { value: l, children: l }, l))
        }
      )
    ] }),
    /* @__PURE__ */ C("div", { className: "template-dimensions-section", children: [
      /* @__PURE__ */ C("div", { className: "template-dimensions-heading", children: [
        /* @__PURE__ */ m("h5", { children: "Dimensions" }),
        /* @__PURE__ */ m("span", { className: "template-dimensions-summary", children: Hy(e) })
      ] }),
      /* @__PURE__ */ C("label", { children: [
        "Size preset",
        /* @__PURE__ */ C("select", { value: i, onChange: (l) => s(l.target.value), children: [
          o.map((l) => /* @__PURE__ */ m("option", { value: l.id, children: l.label }, l.id)),
          /* @__PURE__ */ m("option", { value: "custom", children: "Custom" })
        ] })
      ] }),
      /* @__PURE__ */ C("div", { className: "template-dimension-fields", children: [
        /* @__PURE__ */ C("label", { children: [
          r ? "Width (px)" : "Email width (px)",
          /* @__PURE__ */ m(
            "input",
            {
              type: "number",
              min: 1,
              value: e.canvasWidth ?? "",
              onChange: (l) => t({
                canvasWidth: l.target.value ? Number(l.target.value) : void 0,
                formatPreset: jm(
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
          /* @__PURE__ */ m(
            "input",
            {
              type: "number",
              min: 1,
              value: e.canvasHeight ?? "",
              onChange: (l) => t({
                canvasHeight: l.target.value ? Number(l.target.value) : void 0,
                formatPreset: jm(
                  e.channelType,
                  e.canvasWidth,
                  l.target.value ? Number(l.target.value) : void 0
                )
              })
            }
          )
        ] }) : /* @__PURE__ */ C("label", { children: [
          "Preview height (px)",
          /* @__PURE__ */ m(
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
      !r && /* @__PURE__ */ m("p", { className: "template-dimensions-hint", children: "Email and newsletter templates use a fixed content width. Preview height is for the live preview panel only." })
    ] }),
    e.brandKitId && /* @__PURE__ */ C("p", { className: "template-properties-meta", children: [
      "Brand kit: ",
      e.brandKitId
    ] })
  ] });
}
function jm(e, t, n) {
  return e === "Social" && t != null && n != null ? `${t}x${n}` : e === "Email" && t != null ? `${t}px email` : e === "Newsletter" && t != null ? `${t}px newsletter` : "";
}
function cM({ template: e, onAssetsChange: t }) {
  const n = Jd(), { resultIds: r, fullText: o, hasSearchIntegration: i } = Ev(), [a, s] = N.useState([]), [l, u] = N.useState([]), [f, c] = N.useState(!1), [d, v] = N.useState(!1), [T, w] = N.useState(null), [L, y] = N.useState(null), h = N.useMemo(
    () => new Set(a.map((A) => A.id).filter(Boolean)),
    [a]
  ), g = N.useCallback(async () => {
    if (!e.id || e.id.startsWith("temp-")) {
      s([]);
      return;
    }
    c(!0), y(null);
    try {
      const A = await se.getTemplateAllowedAssets(e.id);
      s(A), t(A.map((z) => z.id).filter(Boolean));
    } catch (A) {
      s([]), y(A instanceof Error ? A.message : "Could not load template assets.");
    } finally {
      c(!1);
    }
  }, [t, e.id]);
  N.useEffect(() => {
    g();
  }, [g]), N.useEffect(() => {
    if (r.length === 0) {
      u([]);
      return;
    }
    let A = !1;
    return v(!0), se.getAssetsByIds(r).then((z) => {
      A || u(z);
    }).catch(() => {
      A || u([]);
    }).finally(() => {
      A || v(!1);
    }), () => {
      A = !0;
    };
  }, [r]);
  const E = async (A) => {
    var z, B;
    if (!e.id || e.id.startsWith("temp-") || !A.id) {
      y("Save the template first before linking assets.");
      return;
    }
    w(A.id), y(null);
    try {
      if (!await se.addAllowedAssetToTemplate(e.id, A.id))
        throw new Error(`Could not link ${A.name} to this template.`);
      await g(), (z = n.notifier) == null || z.notifySuccess(`Added "${A.name}" to template assets.`);
    } catch (j) {
      const U = j instanceof Error ? j.message : "Failed to link asset to template.";
      y(U), (B = n.notifier) == null || B.notifyError(U);
    } finally {
      w(null);
    }
  }, I = async (A) => {
    var z, B;
    if (!(!e.id || !A.id)) {
      w(A.id), y(null);
      try {
        await se.removeAllowedAssetFromTemplate(e.id, A.id), await g(), (z = n.notifier) == null || z.notifySuccess(`Removed "${A.name}" from template assets.`);
      } catch (j) {
        const U = j instanceof Error ? j.message : "Failed to remove asset from template.";
        y(U), (B = n.notifier) == null || B.notifyError(U);
      } finally {
        w(null);
      }
    }
  }, M = !e.id || e.id.startsWith("temp-");
  return /* @__PURE__ */ C("div", { className: "template-zone-asset-collection template-allowed-assets", children: [
    /* @__PURE__ */ m("h4", { className: "template-zone-asset-collection-title", children: "Template image library" }),
    /* @__PURE__ */ C("p", { className: "template-zone-asset-collection-intro", children: [
      "Link ",
      /* @__PURE__ */ m("strong", { children: "M.Asset" }),
      " entities on the template via ",
      /* @__PURE__ */ m("code", { children: "templateToAllowedAsset" }),
      ". Every image zone on marketing assets built from this template can pick from these assets. Use the Content Hub search on this page to find images, then click ",
      /* @__PURE__ */ m("strong", { children: "Add" }),
      "."
    ] }),
    M && /* @__PURE__ */ m("p", { className: "template-zone-asset-collection-hint", children: "Save the template first so it has a persisted entity ID, then add assets from search." }),
    /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-section", children: [
      /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-section-header", children: [
        /* @__PURE__ */ C("h5", { children: [
          "On template (",
          a.length,
          ")"
        ] }),
        f && /* @__PURE__ */ m("span", { className: "template-zone-asset-collection-status", children: "Loading..." })
      ] }),
      /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-grid", children: [
        a.map((A) => /* @__PURE__ */ C("div", { className: "template-zone-asset-card", children: [
          /* @__PURE__ */ m("img", { src: A.thumbnailUrl, alt: A.name }),
          /* @__PURE__ */ m("span", { children: A.name }),
          /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              className: "template-zone-asset-remove",
              disabled: T === A.id || M,
              onClick: () => void I(A),
              children: "Remove"
            }
          )
        ] }, A.id || A.thumbnailUrl)),
        !f && a.length === 0 && /* @__PURE__ */ m("p", { className: "template-zone-asset-collection-empty", children: "No assets linked to this template yet." })
      ] })
    ] }),
    /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-section", children: [
      /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-section-header", children: [
        /* @__PURE__ */ m("h5", { children: "From Content Hub search" }),
        d && /* @__PURE__ */ m("span", { className: "template-zone-asset-collection-status", children: "Loading..." })
      ] }),
      !i && /* @__PURE__ */ C("p", { className: "template-zone-asset-collection-hint", children: [
        "Add a Search page component to this page and set ",
        /* @__PURE__ */ m("code", { children: "searchIdentifier" }),
        " in the external component Configuration."
      ] }),
      i && /* @__PURE__ */ C("p", { className: "template-zone-asset-collection-hint", children: [
        "Use the search component on this page",
        o ? ` (current query: "${o}")` : "",
        ", then click",
        " ",
        /* @__PURE__ */ m("strong", { children: "Add" }),
        " to link an asset to the template."
      ] }),
      /* @__PURE__ */ C("div", { className: "template-zone-asset-collection-grid", children: [
        l.map((A) => {
          const z = A.id ? h.has(A.id) : !1;
          return /* @__PURE__ */ C("div", { className: "template-zone-asset-card", children: [
            /* @__PURE__ */ m("img", { src: A.thumbnailUrl, alt: A.name }),
            /* @__PURE__ */ m("span", { children: A.name }),
            /* @__PURE__ */ m(
              "button",
              {
                type: "button",
                className: "template-zone-asset-add",
                disabled: z || T === A.id || !A.id || M,
                onClick: () => void E(A),
                children: z ? "Linked" : "Add"
              }
            )
          ] }, A.id || A.thumbnailUrl);
        }),
        i && !d && l.length === 0 && /* @__PURE__ */ m("p", { className: "template-zone-asset-collection-empty", children: "Run a search on this page to see assets you can link." })
      ] })
    ] }),
    L && /* @__PURE__ */ m("p", { className: "template-zone-asset-collection-error", children: L })
  ] });
}
function dM({ zoneLabel: e, onDelete: t, className: n = "" }) {
  return /* @__PURE__ */ m(
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
      children: /* @__PURE__ */ m("svg", { viewBox: "0 0 24 24", width: "16", height: "16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ m(
        "path",
        {
          fill: "currentColor",
          d: "M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v9h-2V9zm4 0h2v9h-2V9zM7 9h2v9H7V9z"
        }
      ) })
    }
  );
}
const fM = ["Text", "Heading", "Image", "CTA Button", "Logo", "Background Color", "Divider", "HTML"], pM = 800;
function mM({
  template: e,
  onSaved: t,
  pendingFigmaImport: n = null,
  onPendingFigmaImportApplied: r
}) {
  var Z;
  const [o, i] = N.useState(e), [a, s] = N.useState(((Z = o.zones[0]) == null ? void 0 : Z.id) ?? null), [l, u] = N.useState("saved"), [f, c] = N.useState(null), d = N.useRef(e.zones), v = N.useRef(o), T = N.useRef(null), w = N.useRef(0), L = N.useRef(!0), y = N.useRef(!1);
  v.current = o;
  const h = N.useCallback(
    async (S) => {
      const x = ++w.current;
      u("saving"), c(null);
      try {
        const K = await se.saveTemplate(S, d.current);
        if (x !== w.current)
          return;
        d.current = K.zones, L.current = !0, i(K), t == null || t(K), u("saved");
      } catch (K) {
        if (x !== w.current)
          return;
        c(K instanceof Error ? K.message : "Failed to save template zones."), u("error");
      }
    },
    [t]
  );
  N.useEffect(() => {
    var S;
    !n || n.zones.length === 0 || (i((x) => ({
      ...x,
      canvasWidth: n.canvasWidth ?? x.canvasWidth,
      canvasHeight: n.canvasHeight ?? x.canvasHeight,
      zones: n.zones.map((K, ue) => ({
        ...K,
        sortOrder: ue
      }))
    })), s(((S = n.zones[0]) == null ? void 0 : S.id) ?? null), u("pending"), r == null || r());
  }, [n, r]), N.useEffect(() => {
    L.current = !0, d.current = e.zones, i(e), s((S) => {
      var x;
      return S && e.zones.some((K) => K.id === S) ? S : ((x = e.zones[0]) == null ? void 0 : x.id) ?? null;
    }), c(null), u("saved");
  }, [
    e.id,
    e.templateName,
    e.channelType,
    e.canvasWidth,
    e.canvasHeight,
    e.formatPreset,
    e.zones.map(
      (S) => [
        S.id,
        S.zoneKey,
        S.zoneLabel,
        S.zoneType,
        S.isLocked,
        S.sortOrder,
        S.headingLevel ?? "",
        S.maxCharacterCount ?? ""
      ].join(":")
    ).join("|")
  ]), N.useEffect(() => {
    if (!y.current) {
      y.current = !0;
      return;
    }
    if (L.current) {
      L.current = !1;
      return;
    }
    return u((S) => S === "saving" ? S : "pending"), T.current != null && window.clearTimeout(T.current), T.current = window.setTimeout(() => {
      h(v.current);
    }, pM), () => {
      T.current != null && window.clearTimeout(T.current);
    };
  }, [o, h]);
  const g = o.zones.find((S) => S.id === a), [E, I] = N.useState(null), [M, A] = N.useState(null), z = [...o.zones].sort((S, x) => S.sortOrder - x.sortOrder), B = (S, x) => {
    S !== x && i((K) => {
      const ue = [...K.zones].sort((ut, Mo) => ut.sortOrder - Mo.sortOrder), fe = ue.findIndex((ut) => ut.id === S), lt = ue.findIndex((ut) => ut.id === x);
      if (fe < 0 || lt < 0)
        return K;
      const Qe = [...ue], [Oe] = Qe.splice(fe, 1);
      return Qe.splice(lt, 0, Oe), {
        ...K,
        zones: Qe.map((ut, Mo) => ({ ...ut, sortOrder: Mo }))
      };
    });
  }, j = (S) => {
    i((x) => ({ ...x, ...S }));
  }, U = (S, x) => {
    i((K) => ({
      ...K,
      zones: K.zones.map((ue) => {
        if (ue.id !== S)
          return ue;
        const fe = { ...ue, ...x };
        for (const lt of Object.keys(x))
          x[lt] === void 0 && delete fe[lt];
        return fe;
      })
    }));
  }, b = (S) => {
    if (S.trim() === "")
      return;
    const x = Number(S);
    return Number.isNaN(x) ? void 0 : x;
  }, q = () => {
    const S = new Set(o.zones.map((fe) => fe.zoneKey));
    let x = o.zones.length + 1, K = `newZone${x}`;
    for (; S.has(K); )
      x += 1, K = `newZone${x}`;
    const ue = {
      id: `temp-${Date.now()}`,
      zoneKey: K,
      zoneLabel: "New zone",
      zoneType: "Text",
      isLocked: !1,
      sortOrder: o.zones.length
    };
    i((fe) => ({ ...fe, zones: [...fe.zones, ue] })), s(ue.id);
  }, ee = (S) => {
    var lt, Qe;
    const x = [...o.zones].sort((Oe, ut) => Oe.sortOrder - ut.sortOrder), K = x.findIndex((Oe) => Oe.id === S), ue = x.filter((Oe) => Oe.id !== S).map((Oe, ut) => ({ ...Oe, sortOrder: ut })), fe = ((lt = ue[K]) == null ? void 0 : lt.id) ?? ((Qe = ue[K - 1]) == null ? void 0 : Qe.id) ?? null;
    i((Oe) => ({ ...Oe, zones: ue })), s(fe);
  }, De = () => {
    const S = [
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
    i((x) => ({ ...x, zones: S })), s(S[0].id);
  }, Q = Sc(l === "pending", "pending"), Ct = Sc(l === "saving", "active"), $ = l === "pending" ? Q : l === "saving" ? Ct : l === "error" ? f ?? "Could not save template." : "All changes saved automatically.";
  return /* @__PURE__ */ m(
    hs,
    {
      structureTitle: "Template structure",
      previewTitle: "Live preview",
      structure: /* @__PURE__ */ C("div", { className: "template-admin-structure", children: [
        /* @__PURE__ */ m(uM, { template: o, onChange: j, compact: !0 }),
        /* @__PURE__ */ m(
          cM,
          {
            template: o,
            onAssetsChange: (S) => i((x) => {
              const K = x.allowedAssetIds ?? [];
              return K.length === S.length && K.every((ue, fe) => ue === S[fe]) ? x : { ...x, allowedAssetIds: S };
            })
          }
        ),
        /* @__PURE__ */ C("div", { className: "template-admin-structure-grid", children: [
          /* @__PURE__ */ C("div", { className: "template-admin-zone-list", children: [
            /* @__PURE__ */ m("h4", { children: "Zones" }),
            /* @__PURE__ */ m("p", { className: "zone-list-hint", children: "Drag zones to reorder" }),
            z.map((S) => /* @__PURE__ */ C(
              "div",
              {
                tabIndex: 0,
                draggable: !0,
                className: `zone-list-item${S.id === a ? " zone-list-item-active" : ""}${S.id === E ? " zone-list-item-dragging" : ""}${S.id === M ? " zone-list-item-drag-over" : ""}`,
                onClick: () => s(S.id),
                onKeyDown: (x) => {
                  (x.key === "Enter" || x.key === " ") && (x.preventDefault(), s(S.id));
                },
                onDragStart: (x) => {
                  if (x.target.closest(".zone-list-delete")) {
                    x.preventDefault();
                    return;
                  }
                  x.dataTransfer.effectAllowed = "move", x.dataTransfer.setData("text/plain", S.id), I(S.id);
                },
                onDragOver: (x) => {
                  x.preventDefault(), x.dataTransfer.dropEffect = "move", M !== S.id && A(S.id);
                },
                onDragLeave: () => {
                  A((x) => x === S.id ? null : x);
                },
                onDrop: (x) => {
                  x.preventDefault();
                  const K = x.dataTransfer.getData("text/plain");
                  K && B(K, S.id), I(null), A(null);
                },
                onDragEnd: () => {
                  I(null), A(null);
                },
                children: [
                  /* @__PURE__ */ m("span", { className: "zone-list-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }),
                  /* @__PURE__ */ C("span", { className: "zone-list-item-content", children: [
                    /* @__PURE__ */ m("span", { children: S.zoneLabel || S.zoneKey }),
                    /* @__PURE__ */ m("span", { className: "zone-list-item-type", children: S.zoneType === "Heading" ? `Heading · ${S.headingLevel ?? Nn}` : S.zoneType }),
                    S.isLocked && /* @__PURE__ */ m("span", { className: "zone-list-item-lock", children: "Locked" })
                  ] }),
                  /* @__PURE__ */ m(
                    dM,
                    {
                      zoneLabel: S.zoneLabel || S.zoneKey,
                      onDelete: () => ee(S.id)
                    }
                  )
                ]
              },
              S.id
            )),
            /* @__PURE__ */ m("button", { type: "button", className: "zone-list-add", onClick: q, children: "+ Add zone" }),
            o.zones.length === 0 && /* @__PURE__ */ m("button", { type: "button", className: "zone-list-add zone-list-starter", onClick: De, children: "Start with email template zones" })
          ] }),
          /* @__PURE__ */ m("div", { className: "template-admin-properties", children: g ? /* @__PURE__ */ C(on, { children: [
            /* @__PURE__ */ m("h4", { children: "Zone properties" }),
            /* @__PURE__ */ C("div", { children: [
              /* @__PURE__ */ C("label", { children: [
                "Label",
                /* @__PURE__ */ m(
                  "input",
                  {
                    value: g.zoneLabel,
                    onChange: (S) => U(g.id, { zoneLabel: S.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ C("label", { children: [
                "Zone key",
                /* @__PURE__ */ m(
                  "input",
                  {
                    value: g.zoneKey,
                    onChange: (S) => U(g.id, { zoneKey: S.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ C("label", { children: [
                "Type",
                /* @__PURE__ */ m(
                  "select",
                  {
                    value: g.zoneType,
                    onChange: (S) => {
                      U(
                        g.id,
                        iE(g, S.target.value)
                      );
                    },
                    children: fM.map((S) => /* @__PURE__ */ m("option", { value: S, children: S }, S))
                  }
                )
              ] }),
              /* @__PURE__ */ C("label", { className: "checkbox-label", children: [
                /* @__PURE__ */ m(
                  "input",
                  {
                    type: "checkbox",
                    checked: g.isLocked,
                    onChange: (S) => U(g.id, { isLocked: S.target.checked })
                  }
                ),
                "Locked (brand element, end user cannot edit)"
              ] }),
              g.zoneType === "Heading" && /* @__PURE__ */ C(on, { children: [
                /* @__PURE__ */ C("label", { children: [
                  "Heading level",
                  /* @__PURE__ */ m(
                    "select",
                    {
                      value: g.headingLevel ?? Nn,
                      onChange: (S) => U(g.id, {
                        headingLevel: S.target.value
                      }),
                      children: Wy.map((S) => /* @__PURE__ */ m("option", { value: S, children: S }, S))
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Max characters",
                  /* @__PURE__ */ m(
                    "input",
                    {
                      type: "number",
                      value: g.maxCharacterCount ?? "",
                      onChange: (S) => U(g.id, { maxCharacterCount: b(S.target.value) })
                    }
                  )
                ] })
              ] }),
              g.zoneType === "Text" && /* @__PURE__ */ C("label", { children: [
                "Max characters",
                /* @__PURE__ */ m(
                  "input",
                  {
                    type: "number",
                    value: g.maxCharacterCount ?? "",
                    onChange: (S) => U(g.id, { maxCharacterCount: b(S.target.value) })
                  }
                )
              ] }),
              g.zoneType === "Image" && /* @__PURE__ */ C("label", { children: [
                "Aspect ratio lock",
                /* @__PURE__ */ m(
                  "input",
                  {
                    placeholder: "e.g. 1:1",
                    value: g.aspectRatioLock ?? "",
                    onChange: (S) => {
                      const x = S.target.value.trim();
                      U(g.id, { aspectRatioLock: x || void 0 });
                    }
                  }
                )
              ] }),
              g.zoneType === "HTML" && /* @__PURE__ */ C(on, { children: [
                /* @__PURE__ */ C("label", { children: [
                  "Default HTML content",
                  /* @__PURE__ */ m(
                    "textarea",
                    {
                      value: g.htmlDefaultContent ?? "",
                      onChange: (S) => U(g.id, { htmlDefaultContent: S.target.value })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { className: "checkbox-label", children: [
                  /* @__PURE__ */ m(
                    "input",
                    {
                      type: "checkbox",
                      checked: g.htmlAllowUserOverride ?? !1,
                      onChange: (S) => U(g.id, { htmlAllowUserOverride: S.target.checked })
                    }
                  ),
                  "Allow end user to edit this HTML zone"
                ] })
              ] }),
              o.channelType === "Social" && /* @__PURE__ */ C("div", { className: "position-fields", children: [
                /* @__PURE__ */ C("label", { children: [
                  "X",
                  /* @__PURE__ */ m(
                    "input",
                    {
                      type: "number",
                      value: g.positionX ?? "",
                      onChange: (S) => U(g.id, { positionX: b(S.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Y",
                  /* @__PURE__ */ m(
                    "input",
                    {
                      type: "number",
                      value: g.positionY ?? "",
                      onChange: (S) => U(g.id, { positionY: b(S.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Width",
                  /* @__PURE__ */ m(
                    "input",
                    {
                      type: "number",
                      value: g.zoneWidth ?? "",
                      onChange: (S) => U(g.id, { zoneWidth: b(S.target.value) })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Height",
                  /* @__PURE__ */ m(
                    "input",
                    {
                      type: "number",
                      value: g.zoneHeight ?? "",
                      onChange: (S) => U(g.id, { zoneHeight: b(S.target.value) })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ m("div", { className: "zone-layout-fields asset-zone-layout-fields", children: /* @__PURE__ */ C("div", { className: "asset-zone-layout-grid", children: [
                /* @__PURE__ */ C("label", { children: [
                  "Alignment",
                  /* @__PURE__ */ m(
                    "select",
                    {
                      value: g.contentAlignment ?? Mr,
                      onChange: (S) => U(g.id, {
                        contentAlignment: S.target.value
                      }),
                      children: Yy.map((S) => /* @__PURE__ */ m("option", { value: S, children: S }, S))
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Offset (px)",
                  /* @__PURE__ */ m(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      value: g.offsetPx ?? 0,
                      onChange: (S) => U(g.id, { offsetPx: Math.max(0, Number(S.target.value) || 0) })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Direction",
                  /* @__PURE__ */ m(
                    "select",
                    {
                      value: g.offsetDirection ?? sl,
                      onChange: (S) => U(g.id, {
                        offsetDirection: S.target.value
                      }),
                      children: Qy.map((S) => /* @__PURE__ */ m("option", { value: S, children: S }, S))
                    }
                  )
                ] }),
                /* @__PURE__ */ C("label", { children: [
                  "Sort order",
                  /* @__PURE__ */ m(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      value: g.sortOrder ?? 0,
                      onChange: (S) => U(g.id, { sortOrder: Math.max(0, Number(S.target.value) || 0) })
                    }
                  )
                ] })
              ] }) })
            ] }, `${g.id}-${g.zoneType}`),
            o.channelType !== "Social" && /* @__PURE__ */ m("p", { className: "zone-sort-hint", children: "You can also drag zones in the list to reorder." }),
            /* @__PURE__ */ m("button", { type: "button", className: "zone-remove", onClick: () => ee(g.id), children: "Remove zone" })
          ] }) : /* @__PURE__ */ m("p", { className: "no-zone-selected", children: "Select a zone to edit its properties, or add a new one." }) })
        ] }),
        /* @__PURE__ */ m("div", { className: "template-admin-structure-actions", children: /* @__PURE__ */ m(
          "p",
          {
            className: `template-admin-autosave-status${l === "error" ? " template-admin-autosave-status-error" : l === "saved" ? " template-admin-autosave-status-saved" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: $
          }
        ) })
      ] }),
      preview: /* @__PURE__ */ m(qd, { template: o, layoutMode: o.channelType === "Social" ? "canvas" : "stacked" })
    }
  );
}
function hM({ template: e, onDuplicated: t }) {
  const n = LE(e.channelType), [r, o] = N.useState(n[0] ?? "Social"), [i, a] = N.useState(`${e.templateName} (${n[0] ?? "Social"})`), [s, l] = N.useState(!1), [u, f] = N.useState(null), [c, d] = N.useState(null);
  if (n.length === 0)
    return null;
  const v = (w) => {
    o(w), a(`${e.templateName} (${w})`);
  }, T = async () => {
    l(!0), d(null), f(null);
    try {
      const w = await se.duplicateTemplate(e.id, r, i);
      f(
        `Created "${w.templateName}". Open Asset builder and choose it from the template dropdown.`
      ), t == null || t(w);
    } catch (w) {
      d(
        w instanceof Error ? w.message : "Could not duplicate template."
      );
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ C("div", { className: "template-duplicate-panel", children: [
    /* @__PURE__ */ m("h4", { children: "Duplicate template" }),
    /* @__PURE__ */ m("p", { className: "template-duplicate-hint", children: "Copy this template's zones into a new format. The new template is linked to the same brand kit and appears in the Asset builder template list." }),
    /* @__PURE__ */ C("label", { children: [
      "New template name",
      /* @__PURE__ */ m(
        "input",
        {
          value: i,
          onChange: (w) => a(w.target.value),
          placeholder: `${e.templateName} (${r})`
        }
      )
    ] }),
    /* @__PURE__ */ C("label", { children: [
      "Copy to format",
      /* @__PURE__ */ m(
        "select",
        {
          value: r,
          onChange: (w) => v(w.target.value),
          children: n.map((w) => /* @__PURE__ */ m("option", { value: w, children: w }, w))
        }
      )
    ] }),
    /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        className: "template-duplicate-button",
        onClick: () => void T(),
        disabled: s || !i.trim(),
        children: `Duplicate as ${r}`
      }
    ),
    /* @__PURE__ */ m(No, { active: s, className: "template-duplicate-saving" }),
    u && /* @__PURE__ */ m("p", { className: "template-duplicate-message", children: u }),
    c && /* @__PURE__ */ m("p", { className: "marketing-builder-error template-duplicate-error", children: c })
  ] });
}
function hu({
  template: e,
  onTemplateSaved: t,
  onTemplatesChanged: n,
  figmaImportApiUrl: r,
  figmaImportApiToken: o
}) {
  const i = e.zones.length > 0, [a, s] = N.useState(null);
  return /* @__PURE__ */ C("div", { className: "template-setup-panel", children: [
    !i && /* @__PURE__ */ C("div", { className: "template-setup-banner", children: [
      /* @__PURE__ */ m("h3", { children: "Edit template" }),
      /* @__PURE__ */ C("p", { children: [
        "Template ",
        /* @__PURE__ */ m("strong", { children: e.templateName }),
        " (",
        e.id,
        ") has no zones yet. Set template properties and add zones on the left, then save. The preview updates on the right."
      ] }),
      /* @__PURE__ */ m("p", { className: "template-setup-hint", children: "Recommended email zones: Logo (locked), Heading (H1/H2), Hero image, Body copy, CTA button. Or import a Figma frame below." })
    ] }),
    i && /* @__PURE__ */ m("div", { className: "template-setup-banner template-setup-banner-info", children: /* @__PURE__ */ C("p", { children: [
      "Editing ",
      /* @__PURE__ */ m("strong", { children: e.templateName }),
      ". Update template properties and zones on the left; preview on the right. Changes apply to all marketing assets using this template."
    ] }) }),
    /* @__PURE__ */ m(
      sM,
      {
        template: e,
        figmaImportApiUrl: r,
        figmaImportApiToken: o,
        onApplyToCurrent: s,
        onCreatedTemplate: (l) => {
          t(l), n == null || n();
        }
      }
    ),
    /* @__PURE__ */ m(
      hM,
      {
        template: e,
        onDuplicated: (l) => {
          t(l), n == null || n();
        }
      }
    ),
    /* @__PURE__ */ m(
      mM,
      {
        template: e,
        onSaved: t,
        pendingFigmaImport: a,
        onPendingFigmaImportApplied: () => s(null)
      }
    )
  ] });
}
function gM({
  client: e,
  entity: t,
  options: n,
  config: r,
  contentHubApi: o,
  searchIdentifier: i,
  selectionPoolIdentifier: a
}) {
  const [s, l] = N.useState(null), [u, f] = N.useState(null), [c, d] = N.useState(null), [v, T] = N.useState(!0), [w, L] = N.useState(null), [y, h] = N.useState("asset"), [g, E] = N.useState(0), I = (ee) => {
    h(ee), !(ee !== "asset" || !(u != null && u.id)) && se.getTemplate(u.id).then((De) => f(De)).catch((De) => {
      Rn(
        "template reload",
        De,
        `Could not refresh template ${u.id} when switching to the asset tab.`
      );
    });
  };
  N.useEffect(() => {
    $E(e ?? null);
  }, [e]), N.useEffect(() => {
    let ee = !1;
    async function De() {
      const Q = await MN(
        e,
        n ?? (e == null ? void 0 : e.options),
        t,
        r
      );
      ee || (l(Q), Q.allowTemplateZoneEditing && F("allowTemplateZoneEditing", "Template zone editing enabled from Configuration"));
    }
    return De(), () => {
      ee = !0;
    };
  }, [e, r, t, n]), N.useEffect(() => {
    s != null && s.contentHubProxyBase && jE(s.contentHubProxyBase);
  }, [s == null ? void 0 : s.contentHubProxyBase]), N.useEffect(() => {
    if (!s)
      return;
    let ee = !1;
    async function De() {
      if (T(!0), L(null), sS(), !s.templateId) {
        const Q = hS(t, r);
        Rn("templateId", Q), L(Q), T(!1);
        return;
      }
      if (!s.marketingAssetId) {
        const Q = "marketingAssetId could not be resolved from context.entity.systemProperties.id.";
        Rn("marketingAssetId", Q), L(Q), T(!1);
        return;
      }
      F("templateId", `Using template ${s.templateId}`), F("marketingAssetId", `Using marketing asset ${s.marketingAssetId}`);
      try {
        const Q = await se.getTemplate(s.templateId);
        if (ee)
          return;
        f(Q);
        const Ct = lm(s, Q.channelType);
        if (Ct === "admin") {
          d(null), nm({
            builderMode: Ct,
            templateId: Q.id,
            templateName: Q.templateName,
            marketingAssetId: s.marketingAssetId,
            brandKitId: s.brandKitId ?? Q.brandKitId,
            channelType: Q.channelType,
            zoneCount: Q.zones.length
          });
          return;
        }
        const $ = await se.getMarketingAsset(s.marketingAssetId);
        if (ee)
          return;
        d($);
        const Z = s.brandKitId ?? Q.brandKitId;
        nm({
          builderMode: Ct,
          templateId: Q.id,
          templateName: Q.templateName,
          marketingAssetId: $.id,
          brandKitId: Z,
          channelType: Q.channelType,
          zoneCount: Q.zones.length,
          zoneValueCount: $.zoneValues.length
        });
      } catch (Q) {
        if (ee)
          return;
        Rn("load", Q, "Marketing builder could not load required entities."), L(Q instanceof Error ? Q.message : "Failed to load marketing builder data.");
      } finally {
        ee || T(!1);
      }
    }
    return De(), () => {
      ee = !0;
    };
  }, [r, t, s]);
  const M = lm(s ?? {}, u == null ? void 0 : u.channelType), A = (s == null ? void 0 : s.brandKitId) ?? (u == null ? void 0 : u.brandKitId), z = (s == null ? void 0 : s.userHasOverridePermission) ?? !1, B = i ?? (s == null ? void 0 : s.searchIdentifier), j = a ?? (s == null ? void 0 : s.selectionPoolIdentifier), U = {
    searchIdentifier: B,
    selectionPoolIdentifier: j,
    search: o == null ? void 0 : o.search,
    selection: o == null ? void 0 : o.selection,
    notifier: o == null ? void 0 : o.notifier
  };
  N.useEffect(() => {
    u && u.zones.length === 0 && h("template");
  }, [u == null ? void 0 : u.id, u == null ? void 0 : u.zones.length]);
  const b = () => {
    E((ee) => ee + 1);
  }, q = async (ee) => {
    if (f(ee), s && l({ ...s, templateId: ee.id }), c) {
      const De = await se.getMarketingAsset(c.id);
      d(De);
    }
    b();
  };
  return !s || v ? /* @__PURE__ */ m("div", { className: "marketing-builder-status", children: "Loading marketing builder..." }) : w ? /* @__PURE__ */ m("div", { className: "marketing-builder-status marketing-builder-error", children: w }) : u ? A ? /* @__PURE__ */ m(NN, { value: U, children: /* @__PURE__ */ m(EN, { brandKitId: A, children: /* @__PURE__ */ C("div", { className: "marketing-builder", children: [
    M === "admin" && /* @__PURE__ */ C(on, { children: [
      /* @__PURE__ */ m(
        mu,
        {
          activeTab: "template",
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: () => {
          },
          showAssetTab: !1
        }
      ),
      /* @__PURE__ */ m(
        hu,
        {
          template: u,
          figmaImportApiUrl: s.figmaImportApiUrl,
          figmaImportApiToken: s.figmaImportApiToken,
          onTemplateSaved: (ee) => {
            f(ee), b();
          },
          onTemplatesChanged: b
        }
      )
    ] }),
    M === "social" && c && /* @__PURE__ */ C(on, { children: [
      /* @__PURE__ */ m(
        mu,
        {
          activeTab: y,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: I
        }
      ),
      y === "template" ? /* @__PURE__ */ m(
        hu,
        {
          template: u,
          figmaImportApiUrl: s.figmaImportApiUrl,
          figmaImportApiToken: s.figmaImportApiToken,
          onTemplateSaved: (ee) => {
            f(ee), b();
          },
          onTemplatesChanged: b
        }
      ) : /* @__PURE__ */ C(on, { children: [
        /* @__PURE__ */ m(
          _m,
          {
            brandKitId: A,
            currentTemplateId: u.id,
            marketingAssetId: c.id,
            refreshKey: g,
            onTemplateChange: q
          }
        ),
        /* @__PURE__ */ m(
          XN,
          {
            template: u,
            marketingAsset: c,
            userHasOverridePermission: z,
            html2canvasCdnUrl: s.html2canvasCdnUrl
          }
        )
      ] })
    ] }),
    M === "social" && !c && /* @__PURE__ */ m("div", { className: "marketing-builder-status marketing-builder-error", children: "Marketing asset could not be loaded for the social builder." }),
    M === "email" && c && /* @__PURE__ */ C(on, { children: [
      /* @__PURE__ */ m(
        mu,
        {
          activeTab: y,
          zoneCount: u.zones.length,
          templateName: u.templateName,
          onTabChange: I
        }
      ),
      y === "template" ? /* @__PURE__ */ m(
        hu,
        {
          template: u,
          figmaImportApiUrl: s.figmaImportApiUrl,
          figmaImportApiToken: s.figmaImportApiToken,
          onTemplateSaved: (ee) => {
            f(ee), b();
          },
          onTemplatesChanged: b
        }
      ) : u.zones.length > 0 ? /* @__PURE__ */ C(on, { children: [
        /* @__PURE__ */ m(
          _m,
          {
            brandKitId: A,
            currentTemplateId: u.id,
            marketingAssetId: c.id,
            refreshKey: g,
            onTemplateChange: q
          }
        ),
        /* @__PURE__ */ m(
          WN,
          {
            template: u,
            marketingAsset: c,
            userHasOverridePermission: z,
            renderEmailApiUrl: s.renderEmailApiUrl
          }
        )
      ] }) : /* @__PURE__ */ C("div", { className: "marketing-builder-status template-empty-message", children: [
        "Template ",
        /* @__PURE__ */ m("strong", { children: u.templateName }),
        " has no zones yet. Open the",
        " ",
        /* @__PURE__ */ m("strong", { children: "Edit template" }),
        " tab to add zones."
      ] })
    ] })
  ] }) }) }) : /* @__PURE__ */ m("div", { className: "marketing-builder-status marketing-builder-error", children: "brandKitId is not set on this component and could not be resolved from the template. Set brandKitId in Manage > Pages > this detail page > External component > Configuration, or link templateToBrandKit on the template." }) : /* @__PURE__ */ m("div", { className: "marketing-builder-status marketing-builder-error", children: "Template could not be resolved." });
}
function yM(e) {
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
function vM(e) {
  const t = Xg(e);
  return ie("startup", "CHMarketingBuilder initialised"), {
    async render(n) {
      var i, a, s;
      const r = n.config ? typeof n.config == "string" ? "json-string" : Object.keys(n.config).join(", ") || "(empty object)" : "(none)";
      ie(
        "context",
        `entityId=${((a = (i = n.entity) == null ? void 0 : i.systemProperties) == null ? void 0 : a.id) ?? ((s = n.options) == null ? void 0 : s.entityId) ?? "n/a"}, config=${r}`
      );
      const o = yM(n.config);
      t.render(
        /* @__PURE__ */ m(rS, { theme: n.theme, children: /* @__PURE__ */ m(
          gM,
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
  vM as default
};
