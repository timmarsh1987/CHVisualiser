(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:100%;min-height:calc(100dvh - 12px);box-sizing:border-box;position:relative;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:0;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;background:#000000;border-radius:4px;padding:5px 8px;line-height:0}.chd-toolbar-logo{display:block;height:16px;width:auto}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-boot-status,.chd-boot-error{margin:auto;padding:24px;max-width:480px;font-size:13px;line-height:1.45;color:var(--chd-muted)}.chd-boot-error{color:#a32d2d}.chd-save-status{position:absolute;right:12px;bottom:12px;z-index:30;max-width:min(360px,calc(100% - 24px));padding:6px 10px;border-radius:999px;font-size:11px;line-height:1.3;background:rgba(255,255,255,.94);border:.5px solid var(--chd-border);color:var(--chd-muted);box-shadow:0 4px 16px #00000014;pointer-events:none}.chd-save-status--pending{color:#8a6d1d}.chd-save-status--saving,.chd-save-status--loading{color:#355f8a}.chd-save-status--saved{color:#1d6b4f}.chd-save-status--error{color:#a32d2d;pointer-events:auto}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-btn--accent{background:var(--chd-accent);border-color:var(--chd-accent);color:#fff}.chd-btn--accent:hover:not(:disabled){background:#1db86a;border-color:#1db86a;color:#fff}.chd-generate{position:relative;display:flex;align-items:center;gap:8px}.chd-generate-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:40;min-width:180px;padding:4px;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 24px #0000001f}.chd-generate-option{display:flex;flex-direction:column;align-items:flex-start;gap:1px;width:100%;border:none;background:transparent;text-align:left;padding:8px 10px;border-radius:6px;cursor:pointer;color:var(--chd-text);font:inherit}.chd-generate-option span{font-size:11px;color:var(--chd-muted)}.chd-generate-option:hover:not(:disabled){background:#e8f6ee}.chd-batch{position:relative}.chd-batch-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:40;width:280px;display:flex;flex-direction:column;align-items:stretch;gap:8px;padding:10px;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 24px #0000001f}.chd-batch-stage{position:fixed;left:-20000px;top:0;pointer-events:none}.chd-generate-error{font-size:11px;color:#a32d2d;white-space:nowrap}.chd-artboard--capturing{overflow:hidden}.chd-artboard--capturing .chd-selection-box,.chd-artboard--capturing .chd-selection-outline,.chd-artboard--capturing .chd-handle,.chd-artboard--capturing .chd-layer-lock,.chd-artboard--capturing .chd-artboard-page{display:none!important}.chd-toolbar-field{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--chd-muted)}.chd-toolbar-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;max-width:220px}.chd-file-input{display:none}.chd-toolbar-size{font-size:11px;color:var(--chd-muted);white-space:nowrap}.chd-field.chd-pin-field{gap:14px}.chd-pin-field .chd-pin-grid{margin-top:0}.chd-pin-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;margin-top:4px}.chd-field-hint{margin:6px 0 0;font-size:11px;color:var(--chd-muted);line-height:1.35}.chd-main{display:grid;grid-template-columns:var(--chd-layers-width, 220px) minmax(0,1fr) var(--chd-properties-width, 260px);flex:1;min-height:0}.chd-panel-slot{position:relative;display:flex;flex-direction:column;min-width:0;min-height:0}.chd-panel-slot>.chd-panel{flex:1;min-height:0}.chd-panel-resizer{position:absolute;top:0;bottom:0;width:6px;z-index:4;cursor:col-resize;touch-action:none}.chd-panel-resizer--end{right:-3px}.chd-panel-resizer--start{left:-3px}.chd-panel-resizer:hover,.chd-panel-resizer--active{background:var(--chd-accent)}.chd-stage{display:flex;flex-direction:column;min-width:0;min-height:0}.chd-stage .chd-viewport{flex:1}.chd-panel-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:#fff;color:var(--chd-text);border-radius:6px;width:22px;height:22px;padding:0;line-height:1;cursor:pointer;flex:none}.chd-panel-toggle:hover{background:#f4f7f5}.chd-panel--collapsed .chd-panel-header{flex-direction:column;justify-content:flex-start;height:100%;padding:8px 4px;border-bottom:none}.chd-panel-rail-label{writing-mode:vertical-rl;transform:rotate(180deg);font-size:11px;letter-spacing:.04em}.chd-page-strip{display:flex;gap:8px;overflow-x:auto;flex:none;padding:8px 10px;background:#fff;border-top:.5px solid var(--chd-border)}.chd-page-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;flex-direction:column;align-items:center;gap:4px;border:.5px solid transparent;background:transparent;border-radius:6px;padding:4px;cursor:pointer;color:var(--chd-muted);font:inherit;flex:none}.chd-page-thumb--active{border-color:var(--chd-accent);color:var(--chd-text);background:#e8f6ee}.chd-page-thumb-frame{position:relative;overflow:hidden;background:#fff;box-shadow:0 0 0 1px #0000001f}.chd-page-thumb-art{position:absolute;left:0;top:0;transform-origin:top left;pointer-events:none}.chd-page-thumb-name{max-width:104px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4;flex:none}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layers-panel--admin .chd-layer-list-item{grid-template-columns:auto 1fr auto auto auto}.chd-layer-list-item--dragging{opacity:.45}.chd-layer-list-item--drag-over{outline:1px solid var(--chd-accent);background:#e8f6ee}.chd-layer-drag-handle{color:var(--chd-muted);font-size:11px;line-height:1;padding:0 4px;cursor:grab;-webkit-user-select:none;user-select:none}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{display:flex;flex-direction:column;overflow:auto;flex:1}.chd-prop-section{display:flex;flex-direction:column;gap:8px;padding:10px 12px;border-bottom:.5px solid var(--chd-border)}.chd-prop-section-title{margin:0;font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--chd-muted)}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{display:flex;flex-direction:row;align-items:center;gap:10px;color:var(--chd-text)}.chd-field-checkbox input,.chd-field .chd-field-checkbox input[type=checkbox]{width:16px;height:16px;margin:0;padding:0;border:none;flex:none;accent-color:var(--chd-accent)}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:#cfcbc3;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:visible}.chd-artboard-page{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;box-shadow:0 0 0 1px #00000014}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-lock{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;left:3px;top:3px;z-index:6;display:flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:4px;background:rgba(255,255,255,.92);border:.5px solid var(--chd-border);color:var(--chd-text);pointer-events:auto;cursor:pointer;padding:0;box-shadow:0 1px 2px #0000001f}.chd-layer-lock svg{display:block}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-text--rtl{text-align:right}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main,.chd-main--layers-collapsed,.chd-main--properties-collapsed,.chd-main--layers-collapsed.chd-main--properties-collapsed{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-main--layers-collapsed,.chd-main--layers-collapsed.chd-main--properties-collapsed{grid-template-rows:36px minmax(280px,1fr) 200px}.chd-main--properties-collapsed{grid-template-rows:160px minmax(280px,1fr) 36px}.chd-main--layers-collapsed.chd-main--properties-collapsed{grid-template-rows:36px minmax(280px,1fr) 36px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}.chd-panel-resizer{display:none}}.chd-image-source{display:flex;flex-direction:column;gap:8px;font-size:11px;color:var(--chd-muted)}.chd-root .asset-picker{position:relative}.chd-root .asset-picker-trigger{width:100%;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:6px 8px;font-size:12px;cursor:pointer}.chd-root .asset-picker-trigger:hover:not(:disabled){background:#fff}.chd-root .asset-picker-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;display:flex;align-items:center;justify-content:center;padding:24px}.chd-root .asset-picker-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;border:none;padding:0;background:rgba(0,0,0,.4);cursor:pointer}.chd-root .asset-picker-panel-overlay{position:relative;z-index:1;width:min(720px,100%);max-height:min(80vh,720px);overflow:auto;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 28px #00000029;padding:12px}.chd-root .asset-picker-panel-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.chd-root .asset-picker-close,.chd-root .asset-picker-mode-tab,.chd-root .asset-picker-url-apply{border:.5px solid var(--chd-border);background:#fff;border-radius:6px;padding:6px 10px;cursor:pointer;font-size:12px;color:var(--chd-text)}.chd-root .asset-picker-mode-tabs{display:flex;gap:4px;margin-bottom:10px}.chd-root .asset-picker-mode-tab{flex:1}.chd-root .asset-picker-mode-tab-active,.chd-root .asset-picker-url-apply{background:var(--chd-accent);border-color:var(--chd-accent);color:#fff}.chd-root .asset-picker-url-apply:disabled{opacity:.6;cursor:not-allowed}.chd-root .asset-picker-url-form label{display:block;margin-bottom:8px;font-size:12px;color:var(--chd-muted)}.chd-root .asset-picker-search{width:100%;padding:6px 8px;border:.5px solid var(--chd-border);border-radius:6px;margin-bottom:8px;font:inherit;color:var(--chd-text);background:#fff}.chd-root .asset-picker-hint,.chd-root .asset-picker-loading,.chd-root .asset-picker-empty{font-size:12px;color:var(--chd-muted);margin-bottom:8px}.chd-root .asset-picker-error{font-size:12px;color:#a32d2d;margin-bottom:8px}.chd-root .asset-picker-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-height:420px;overflow-y:auto}.chd-root .asset-picker-thumb{border:none;background:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;color:var(--chd-text)}.chd-root .asset-picker-thumb img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px;background:#f4f7f5}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function Ov(e, t) {
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
function bv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mm = { exports: {} }, Fa = {}, hm = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xi = Symbol.for("react.element"), Nv = Symbol.for("react.portal"), xv = Symbol.for("react.fragment"), Mv = Symbol.for("react.strict_mode"), Iv = Symbol.for("react.profiler"), Lv = Symbol.for("react.provider"), zv = Symbol.for("react.context"), Rv = Symbol.for("react.forward_ref"), Qv = Symbol.for("react.suspense"), Hv = Symbol.for("react.memo"), Fv = Symbol.for("react.lazy"), eA = Symbol.iterator;
function Uv(e) {
  return e === null || typeof e != "object" ? null : (e = eA && e[eA] || e["@@iterator"], typeof e == "function" ? e : null);
}
var gm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ym = Object.assign, vm = {};
function Oo(e, t, n) {
  this.props = e, this.context = t, this.refs = vm, this.updater = n || gm;
}
Oo.prototype.isReactComponent = {};
Oo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Oo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wm() {
}
wm.prototype = Oo.prototype;
function nf(e, t, n) {
  this.props = e, this.context = t, this.refs = vm, this.updater = n || gm;
}
var rf = nf.prototype = new wm();
rf.constructor = nf;
ym(rf, Oo.prototype);
rf.isPureReactComponent = !0;
var tA = Array.isArray, Em = Object.prototype.hasOwnProperty, of = { current: null }, Tm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cm(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Em.call(t, r) && !Tm.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Xi, type: e, key: i, ref: s, props: o, _owner: of.current };
}
function jv(e, t) {
  return { $$typeof: Xi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function sf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xi;
}
function Gv(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var nA = /\/+/g;
function _l(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Gv("" + e.key) : t.toString(36);
}
function Ys(e, t, n, r, o) {
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
          case Xi:
          case Nv:
            s = !0;
        }
    }
  if (s)
    return s = e, o = o(s), e = r === "" ? "." + _l(s, 0) : r, tA(o) ? (n = "", e != null && (n = e.replace(nA, "$&/") + "/"), Ys(o, t, n, "", function(u) {
      return u;
    })) : o != null && (sf(o) && (o = jv(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(nA, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", tA(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + _l(i, a);
      s += Ys(i, t, n, l, o);
    }
  else if (l = Uv(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, l = r + _l(i, a++), s += Ys(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function ds(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ys(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Yv(e) {
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
var dt = { current: null }, Ks = { transition: null }, Kv = { ReactCurrentDispatcher: dt, ReactCurrentBatchConfig: Ks, ReactCurrentOwner: of };
function Pm() {
  throw Error("act(...) is not supported in production builds of React.");
}
te.Children = { map: ds, forEach: function(e, t, n) {
  ds(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ds(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ds(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!sf(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
te.Component = Oo;
te.Fragment = xv;
te.Profiler = Iv;
te.PureComponent = nf;
te.StrictMode = Mv;
te.Suspense = Qv;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kv;
te.act = Pm;
te.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ym({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = of.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (l in t)
      Em.call(t, l) && !Tm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
  return { $$typeof: Xi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
te.createContext = function(e) {
  return e = { $$typeof: zv, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Lv, _context: e }, e.Consumer = e;
};
te.createElement = Cm;
te.createFactory = function(e) {
  var t = Cm.bind(null, e);
  return t.type = e, t;
};
te.createRef = function() {
  return { current: null };
};
te.forwardRef = function(e) {
  return { $$typeof: Rv, render: e };
};
te.isValidElement = sf;
te.lazy = function(e) {
  return { $$typeof: Fv, _payload: { _status: -1, _result: e }, _init: Yv };
};
te.memo = function(e, t) {
  return { $$typeof: Hv, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function(e) {
  var t = Ks.transition;
  Ks.transition = {};
  try {
    e();
  } finally {
    Ks.transition = t;
  }
};
te.unstable_act = Pm;
te.useCallback = function(e, t) {
  return dt.current.useCallback(e, t);
};
te.useContext = function(e) {
  return dt.current.useContext(e);
};
te.useDebugValue = function() {
};
te.useDeferredValue = function(e) {
  return dt.current.useDeferredValue(e);
};
te.useEffect = function(e, t) {
  return dt.current.useEffect(e, t);
};
te.useId = function() {
  return dt.current.useId();
};
te.useImperativeHandle = function(e, t, n) {
  return dt.current.useImperativeHandle(e, t, n);
};
te.useInsertionEffect = function(e, t) {
  return dt.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function(e, t) {
  return dt.current.useLayoutEffect(e, t);
};
te.useMemo = function(e, t) {
  return dt.current.useMemo(e, t);
};
te.useReducer = function(e, t, n) {
  return dt.current.useReducer(e, t, n);
};
te.useRef = function(e) {
  return dt.current.useRef(e);
};
te.useState = function(e) {
  return dt.current.useState(e);
};
te.useSyncExternalStore = function(e, t, n) {
  return dt.current.useSyncExternalStore(e, t, n);
};
te.useTransition = function() {
  return dt.current.useTransition();
};
te.version = "18.3.1";
hm.exports = te;
var S = hm.exports;
const Xv = /* @__PURE__ */ bv(S), ju = /* @__PURE__ */ Ov({
  __proto__: null,
  default: Xv
}, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zv = S, Wv = Symbol.for("react.element"), Vv = Symbol.for("react.fragment"), Jv = Object.prototype.hasOwnProperty, qv = Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _v = { key: !0, ref: !0, __self: !0, __source: !0 };
function km(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Jv.call(t, r) && !_v.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Wv, type: e, key: i, ref: s, props: o, _owner: qv.current };
}
Fa.Fragment = Vv;
Fa.jsx = km;
Fa.jsxs = km;
mm.exports = Fa;
var af = mm.exports;
const gr = af.Fragment, y = af.jsx, x = af.jsxs;
function $v(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const rA = "$$material";
function qe() {
  return qe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qe.apply(null, arguments);
}
function Ua(e, t) {
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
var e0 = !1;
function t0(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function n0(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var r0 = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !e0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(n0(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = t0(o);
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
}(), rt = "-ms-", aa = "-moz-", ce = "-webkit-", Sm = "comm", lf = "rule", uf = "decl", o0 = "@import", Dm = "@keyframes", i0 = "@layer", s0 = Math.abs, ja = String.fromCharCode, a0 = Object.assign;
function l0(e, t) {
  return Ve(e, 0) ^ 45 ? (((t << 2 ^ Ve(e, 0)) << 2 ^ Ve(e, 1)) << 2 ^ Ve(e, 2)) << 2 ^ Ve(e, 3) : 0;
}
function Bm(e) {
  return e.trim();
}
function u0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function fe(e, t, n) {
  return e.replace(t, n);
}
function Gu(e, t) {
  return e.indexOf(t);
}
function Ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function yi(e, t, n) {
  return e.slice(t, n);
}
function dn(e) {
  return e.length;
}
function cf(e) {
  return e.length;
}
function As(e, t) {
  return t.push(e), e;
}
function c0(e, t) {
  return e.map(t).join("");
}
var Ga = 1, ho = 1, Om = 0, vt = 0, Ie = 0, bo = "";
function Ya(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ga, column: ho, length: s, return: "" };
}
function Ho(e, t) {
  return a0(Ya("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function f0() {
  return Ie;
}
function d0() {
  return Ie = vt > 0 ? Ve(bo, --vt) : 0, ho--, Ie === 10 && (ho = 1, Ga--), Ie;
}
function kt() {
  return Ie = vt < Om ? Ve(bo, vt++) : 0, ho++, Ie === 10 && (ho = 1, Ga++), Ie;
}
function mn() {
  return Ve(bo, vt);
}
function Xs() {
  return vt;
}
function Zi(e, t) {
  return yi(bo, e, t);
}
function vi(e) {
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
function bm(e) {
  return Ga = ho = 1, Om = dn(bo = e), vt = 0, [];
}
function Nm(e) {
  return bo = "", e;
}
function Zs(e) {
  return Bm(Zi(vt - 1, Yu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function A0(e) {
  for (; (Ie = mn()) && Ie < 33; )
    kt();
  return vi(e) > 2 || vi(Ie) > 3 ? "" : " ";
}
function p0(e, t) {
  for (; --t && kt() && !(Ie < 48 || Ie > 102 || Ie > 57 && Ie < 65 || Ie > 70 && Ie < 97); )
    ;
  return Zi(e, Xs() + (t < 6 && mn() == 32 && kt() == 32));
}
function Yu(e) {
  for (; kt(); )
    switch (Ie) {
      case e:
        return vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yu(Ie);
        break;
      case 40:
        e === 41 && Yu(e);
        break;
      case 92:
        kt();
        break;
    }
  return vt;
}
function m0(e, t) {
  for (; kt() && e + Ie !== 47 + 10; )
    if (e + Ie === 42 + 42 && mn() === 47)
      break;
  return "/*" + Zi(t, vt - 1) + "*" + ja(e === 47 ? e : kt());
}
function h0(e) {
  for (; !vi(mn()); )
    kt();
  return Zi(e, vt);
}
function g0(e) {
  return Nm(Ws("", null, null, null, [""], e = bm(e), 0, [0], e));
}
function Ws(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, c = 0, f = s, A = 0, E = 0, g = 0, v = 1, B = 1, d = 1, p = 0, h = "", T = o, O = i, w = r, C = h; B; )
    switch (g = p, p = kt()) {
      case 40:
        if (g != 108 && Ve(C, f - 1) == 58) {
          Gu(C += fe(Zs(p), "&", "&\f"), "&\f") != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Zs(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += A0(g);
        break;
      case 92:
        C += p0(Xs() - 1, 7);
        continue;
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            As(y0(m0(kt(), Xs()), t, n), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * v:
        a[u++] = dn(C) * d;
      case 125 * v:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            B = 0;
          case 59 + c:
            d == -1 && (C = fe(C, /\f/g, "")), E > 0 && dn(C) - f && As(E > 32 ? iA(C + ";", r, n, f - 1) : iA(fe(C, " ", "") + ";", r, n, f - 2), l);
            break;
          case 59:
            C += ";";
          default:
            if (As(w = oA(C, t, n, u, c, o, a, h, T = [], O = [], f), i), p === 123)
              if (c === 0)
                Ws(C, t, w, w, T, i, f, a, O);
              else
                switch (A === 99 && Ve(C, 3) === 110 ? 100 : A) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ws(e, w, w, r && As(oA(e, w, w, 0, 0, o, a, h, o, T = [], f), O), o, O, f, a, r ? T : O);
                    break;
                  default:
                    Ws(C, w, w, w, [""], O, 0, a, O);
                }
        }
        u = c = E = 0, v = d = 1, h = C = "", f = s;
        break;
      case 58:
        f = 1 + dn(C), E = g;
      default:
        if (v < 1) {
          if (p == 123)
            --v;
          else if (p == 125 && v++ == 0 && d0() == 125)
            continue;
        }
        switch (C += ja(p), p * v) {
          case 38:
            d = c > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            a[u++] = (dn(C) - 1) * d, d = 1;
            break;
          case 64:
            mn() === 45 && (C += Zs(kt())), A = mn(), c = f = dn(h = C += h0(Xs())), p++;
            break;
          case 45:
            g === 45 && dn(C) == 2 && (v = 0);
        }
    }
  return i;
}
function oA(e, t, n, r, o, i, s, a, l, u, c) {
  for (var f = o - 1, A = o === 0 ? i : [""], E = cf(A), g = 0, v = 0, B = 0; g < r; ++g)
    for (var d = 0, p = yi(e, f + 1, f = s0(v = s[g])), h = e; d < E; ++d)
      (h = Bm(v > 0 ? A[d] + " " + p : fe(p, /&\f/g, A[d]))) && (l[B++] = h);
  return Ya(e, t, n, o === 0 ? lf : a, l, u, c);
}
function y0(e, t, n) {
  return Ya(e, t, n, Sm, ja(f0()), yi(e, 2, -2), 0);
}
function iA(e, t, n, r) {
  return Ya(e, t, n, uf, yi(e, 0, r), yi(e, r + 1, -1), r);
}
function ao(e, t) {
  for (var n = "", r = cf(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function v0(e, t, n, r) {
  switch (e.type) {
    case i0:
      if (e.children.length)
        break;
    case o0:
    case uf:
      return e.return = e.return || e.value;
    case Sm:
      return "";
    case Dm:
      return e.return = e.value + "{" + ao(e.children, r) + "}";
    case lf:
      e.value = e.props.join(",");
  }
  return dn(n = ao(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function w0(e) {
  var t = cf(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function E0(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function xm(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var T0 = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = mn(), o === 38 && i === 12 && (n[r] = 1), !vi(i); )
    kt();
  return Zi(t, vt);
}, C0 = function(t, n) {
  var r = -1, o = 44;
  do
    switch (vi(o)) {
      case 0:
        o === 38 && mn() === 12 && (n[r] = 1), t[r] += T0(vt - 1, n, r);
        break;
      case 2:
        t[r] += Zs(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = mn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ja(o);
    }
  while (o = kt());
  return t;
}, P0 = function(t, n) {
  return Nm(C0(bm(t), n));
}, sA = /* @__PURE__ */ new WeakMap(), k0 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !sA.get(r)) && !o) {
      sA.set(t, !0);
      for (var i = [], s = P0(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
        for (var c = 0; c < a.length; c++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
    }
  }
}, S0 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Mm(e, t) {
  switch (l0(e, t)) {
    case 5103:
      return ce + "print-" + e + e;
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
      return ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ce + e + aa + e + rt + e + e;
    case 6828:
    case 4268:
      return ce + e + rt + e + e;
    case 6165:
      return ce + e + rt + "flex-" + e + e;
    case 5187:
      return ce + e + fe(e, /(\w+).+(:[^]+)/, ce + "box-$1$2" + rt + "flex-$1$2") + e;
    case 5443:
      return ce + e + rt + "flex-item-" + fe(e, /flex-|-self/, "") + e;
    case 4675:
      return ce + e + rt + "flex-line-pack" + fe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ce + e + rt + fe(e, "shrink", "negative") + e;
    case 5292:
      return ce + e + rt + fe(e, "basis", "preferred-size") + e;
    case 6060:
      return ce + "box-" + fe(e, "-grow", "") + ce + e + rt + fe(e, "grow", "positive") + e;
    case 4554:
      return ce + fe(e, /([^-])(transform)/g, "$1" + ce + "$2") + e;
    case 6187:
      return fe(fe(fe(e, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return fe(e, /(image-set\([^]*)/, ce + "$1$`$1");
    case 4968:
      return fe(fe(e, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + rt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ce + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return fe(e, /(.+)-inline(.+)/, ce + "$1$2") + e;
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
      if (dn(e) - 1 - t > 6)
        switch (Ve(e, t + 1)) {
          case 109:
            if (Ve(e, t + 4) !== 45)
              break;
          case 102:
            return fe(e, /(.+:)(.+)-([^]+)/, "$1" + ce + "$2-$3$1" + aa + (Ve(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Gu(e, "stretch") ? Mm(fe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ve(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ve(e, dn(e) - 3 - (~Gu(e, "!important") && 10))) {
        case 107:
          return fe(e, ":", ":" + ce) + e;
        case 101:
          return fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ce + (Ve(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ce + "$2$3$1" + rt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ve(e, t + 11)) {
        case 114:
          return ce + e + rt + fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ce + e + rt + fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ce + e + rt + fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ce + e + rt + e + e;
  }
  return e;
}
var D0 = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case uf:
        t.return = Mm(t.value, t.length);
        break;
      case Dm:
        return ao([Ho(t, {
          value: fe(t.value, "@", "@" + ce)
        })], o);
      case lf:
        if (t.length)
          return c0(t.props, function(i) {
            switch (u0(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ao([Ho(t, {
                  props: [fe(i, /:(read-\w+)/, ":" + aa + "$1")]
                })], o);
              case "::placeholder":
                return ao([Ho(t, {
                  props: [fe(i, /:(plac\w+)/, ":" + ce + "input-$1")]
                }), Ho(t, {
                  props: [fe(i, /:(plac\w+)/, ":" + aa + "$1")]
                }), Ho(t, {
                  props: [fe(i, /:(plac\w+)/, rt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, B0 = [D0], O0 = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var B = v.getAttribute("data-emotion");
      B.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || B0, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var B = v.getAttribute("data-emotion").split(" "), d = 1; d < B.length; d++)
        i[B[d]] = !0;
      a.push(v);
    }
  );
  var l, u = [k0, S0];
  {
    var c, f = [v0, E0(function(v) {
      c.insert(v);
    })], A = w0(u.concat(o, f)), E = function(B) {
      return ao(g0(B), A);
    };
    l = function(B, d, p, h) {
      c = p, E(B ? B + "{" + d.styles + "}" : d.styles), h && (g.inserted[d.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new r0({
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
}, Im = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke = typeof Symbol == "function" && Symbol.for, ff = Ke ? Symbol.for("react.element") : 60103, df = Ke ? Symbol.for("react.portal") : 60106, Ka = Ke ? Symbol.for("react.fragment") : 60107, Xa = Ke ? Symbol.for("react.strict_mode") : 60108, Za = Ke ? Symbol.for("react.profiler") : 60114, Wa = Ke ? Symbol.for("react.provider") : 60109, Va = Ke ? Symbol.for("react.context") : 60110, Af = Ke ? Symbol.for("react.async_mode") : 60111, Ja = Ke ? Symbol.for("react.concurrent_mode") : 60111, qa = Ke ? Symbol.for("react.forward_ref") : 60112, _a = Ke ? Symbol.for("react.suspense") : 60113, b0 = Ke ? Symbol.for("react.suspense_list") : 60120, $a = Ke ? Symbol.for("react.memo") : 60115, el = Ke ? Symbol.for("react.lazy") : 60116, N0 = Ke ? Symbol.for("react.block") : 60121, x0 = Ke ? Symbol.for("react.fundamental") : 60117, M0 = Ke ? Symbol.for("react.responder") : 60118, I0 = Ke ? Symbol.for("react.scope") : 60119;
function Bt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ff:
        switch (e = e.type, e) {
          case Af:
          case Ja:
          case Ka:
          case Za:
          case Xa:
          case _a:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Va:
              case qa:
              case el:
              case $a:
              case Wa:
                return e;
              default:
                return t;
            }
        }
      case df:
        return t;
    }
  }
}
function Lm(e) {
  return Bt(e) === Ja;
}
pe.AsyncMode = Af;
pe.ConcurrentMode = Ja;
pe.ContextConsumer = Va;
pe.ContextProvider = Wa;
pe.Element = ff;
pe.ForwardRef = qa;
pe.Fragment = Ka;
pe.Lazy = el;
pe.Memo = $a;
pe.Portal = df;
pe.Profiler = Za;
pe.StrictMode = Xa;
pe.Suspense = _a;
pe.isAsyncMode = function(e) {
  return Lm(e) || Bt(e) === Af;
};
pe.isConcurrentMode = Lm;
pe.isContextConsumer = function(e) {
  return Bt(e) === Va;
};
pe.isContextProvider = function(e) {
  return Bt(e) === Wa;
};
pe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ff;
};
pe.isForwardRef = function(e) {
  return Bt(e) === qa;
};
pe.isFragment = function(e) {
  return Bt(e) === Ka;
};
pe.isLazy = function(e) {
  return Bt(e) === el;
};
pe.isMemo = function(e) {
  return Bt(e) === $a;
};
pe.isPortal = function(e) {
  return Bt(e) === df;
};
pe.isProfiler = function(e) {
  return Bt(e) === Za;
};
pe.isStrictMode = function(e) {
  return Bt(e) === Xa;
};
pe.isSuspense = function(e) {
  return Bt(e) === _a;
};
pe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ka || e === Ja || e === Za || e === Xa || e === _a || e === b0 || typeof e == "object" && e !== null && (e.$$typeof === el || e.$$typeof === $a || e.$$typeof === Wa || e.$$typeof === Va || e.$$typeof === qa || e.$$typeof === x0 || e.$$typeof === M0 || e.$$typeof === I0 || e.$$typeof === N0);
};
pe.typeOf = Bt;
Im.exports = pe;
var L0 = Im.exports, zm = L0, z0 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, R0 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Rm = {};
Rm[zm.ForwardRef] = z0;
Rm[zm.Memo] = R0;
var Q0 = !0;
function Qm(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var pf = function(t, n, r) {
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
  Q0 === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, mf = function(t, n, r) {
  pf(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function H0(e) {
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
var F0 = {
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
}, U0 = !1, j0 = /[A-Z]|^ms/g, G0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Hm = function(t) {
  return t.charCodeAt(1) === 45;
}, aA = function(t) {
  return t != null && typeof t != "boolean";
}, $l = /* @__PURE__ */ xm(function(e) {
  return Hm(e) ? e : e.replace(j0, "-$&").toLowerCase();
}), lA = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(G0, function(r, o, i) {
          return An = {
            name: o,
            styles: i,
            next: An
          }, o;
        });
  }
  return F0[t] !== 1 && !Hm(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Y0 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function wi(e, t, n) {
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
        return An = {
          name: o.name,
          styles: o.styles,
          next: An
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            An = {
              name: s.name,
              styles: s.styles,
              next: An
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return K0(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = An, u = n(e);
        return An = l, wi(e, t, u);
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
function K0(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += wi(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : aA(a) && (r += $l(i) + ":" + lA(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && U0)
          throw new Error(Y0);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            aA(s[l]) && (r += $l(i) + ":" + lA(i, s[l]) + ";");
        else {
          var u = wi(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += $l(i) + ":" + u + ";";
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
var uA = /label:\s*([^\s;{]+)\s*(;|$)/g, An;
function tl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  An = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += wi(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += wi(n, t, e[a]), r) {
      var l = i;
      o += l[a];
    }
  uA.lastIndex = 0;
  for (var u = "", c; (c = uA.exec(o)) !== null; )
    u += "-" + c[1];
  var f = H0(o) + u;
  return {
    name: f,
    styles: o,
    next: An
  };
}
var X0 = function(t) {
  return t();
}, Fm = ju["useInsertionEffect"] ? ju["useInsertionEffect"] : !1, Um = Fm || X0, cA = Fm || S.useLayoutEffect, Z0 = !1, jm = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ O0({
    key: "css"
  }) : null
);
jm.Provider;
var hf = function(t) {
  return /* @__PURE__ */ S.forwardRef(function(n, r) {
    var o = S.useContext(jm);
    return t(n, o, r);
  });
}, Wi = /* @__PURE__ */ S.createContext({}), gf = {}.hasOwnProperty, Ku = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", W0 = function(t, n) {
  var r = {};
  for (var o in n)
    gf.call(n, o) && (r[o] = n[o]);
  return r[Ku] = t, r;
}, V0 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return pf(n, r, o), Um(function() {
    return mf(n, r, o);
  }), null;
}, J0 = /* @__PURE__ */ hf(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Ku], i = [r], s = "";
  typeof e.className == "string" ? s = Qm(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = tl(i, void 0, S.useContext(Wi));
  s += t.key + "-" + a.name;
  var l = {};
  for (var u in e)
    gf.call(e, u) && u !== "css" && u !== Ku && !Z0 && (l[u] = e[u]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(V0, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ S.createElement(o, l));
}), q0 = J0, eu = { exports: {} }, fA;
function _0() {
  return fA || (fA = 1, function(e) {
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
  }(eu)), eu.exports;
}
_0();
var dA = function(t, n) {
  var r = arguments;
  if (n == null || !gf.call(n, "css"))
    return S.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = q0, i[1] = W0(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return S.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(dA || (dA = {}));
var $0 = /* @__PURE__ */ hf(function(e, t) {
  var n = e.styles, r = tl([n], void 0, S.useContext(Wi)), o = S.useRef();
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
    if (r.next !== void 0 && mf(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
}), ew = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, tw = /* @__PURE__ */ xm(
  function(e) {
    return ew.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), nw = !1, rw = tw, ow = function(t) {
  return t !== "theme";
}, AA = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? rw : ow;
}, pA = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, iw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return pf(n, r, o), Um(function() {
    return mf(n, r, o);
  }), null;
}, sw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = pA(t, n, r), l = a || AA(o), u = !l("as");
  return function() {
    var c = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      f.push.apply(f, c);
    else {
      var A = c[0];
      f.push(A[0]);
      for (var E = c.length, g = 1; g < E; g++)
        f.push(c[g], A[g]);
    }
    var v = hf(function(B, d, p) {
      var h = u && B.as || o, T = "", O = [], w = B;
      if (B.theme == null) {
        w = {};
        for (var C in B)
          w[C] = B[C];
        w.theme = S.useContext(Wi);
      }
      typeof B.className == "string" ? T = Qm(d.registered, O, B.className) : B.className != null && (T = B.className + " ");
      var D = tl(f.concat(O), d.registered, w);
      T += d.key + "-" + D.name, s !== void 0 && (T += " " + s);
      var H = u && a === void 0 ? AA(h) : l, k = {};
      for (var F in B)
        u && F === "as" || H(F) && (k[F] = B[F]);
      return k.className = T, p && (k.ref = p), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(iw, {
        cache: d,
        serialized: D,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ S.createElement(h, k));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = f, v.__emotion_forwardProp = a, Object.defineProperty(v, "toString", {
      value: function() {
        return s === void 0 && nw ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), v.withComponent = function(B, d) {
      var p = e(B, qe({}, n, d, {
        shouldForwardProp: pA(v, d, !0)
      }));
      return p.apply(void 0, f);
    }, v;
  };
}, aw = [
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
], mA = sw.bind(null);
aw.forEach(function(e) {
  mA[e] = mA(e);
});
function lw(e) {
  return e == null || Object.keys(e).length === 0;
}
function uw(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ y($0, {
    styles: typeof t == "function" ? (o) => t(lw(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const hA = [];
function cw(e) {
  return hA[0] = e, tl(hA);
}
function Xr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Gm(e) {
  if (/* @__PURE__ */ S.isValidElement(e) || !Xr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Gm(e[n]);
  }), t;
}
function la(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? qe({}, e) : e;
  return Xr(e) && Xr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ S.isValidElement(t[o]) ? r[o] = t[o] : Xr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Xr(e[o]) ? r[o] = la(e[o], t[o], n) : n.clone ? r[o] = Xr(t[o]) ? Gm(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const fw = ["values", "unit", "step"], dw = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => qe({}, n, {
    [r.key]: r.val
  }), {});
};
function Aw(e) {
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
  } = e, o = Ua(e, fw), i = dw(t), s = Object.keys(i);
  function a(A) {
    return `@media (min-width:${typeof t[A] == "number" ? t[A] : A}${n})`;
  }
  function l(A) {
    return `@media (max-width:${(typeof t[A] == "number" ? t[A] : A) - r / 100}${n})`;
  }
  function u(A, E) {
    const g = s.indexOf(E);
    return `@media (min-width:${typeof t[A] == "number" ? t[A] : A}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : E) - r / 100}${n})`;
  }
  function c(A) {
    return s.indexOf(A) + 1 < s.length ? u(A, s[s.indexOf(A) + 1]) : a(A);
  }
  function f(A) {
    const E = s.indexOf(A);
    return E === 0 ? a(s[1]) : E === s.length - 1 ? l(s[E]) : u(A, s[s.indexOf(A) + 1]).replace("@media", "@media not all and");
  }
  return qe({
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
const pw = {
  borderRadius: 4
}, mw = pw;
function si(e, t) {
  return t ? la(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const yf = {
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
}, gA = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${yf[e]}px)`
};
function Dn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || gA;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || gA;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || yf).indexOf(a) !== -1) {
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
function hw(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function yA(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Ym(e) {
  if (typeof e != "string")
    throw new Error($v(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function nl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function ua(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = nl(e, n) || r, t && (o = t(o, r, e)), o;
}
function xe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, u = nl(l, r) || {};
    return Dn(s, a, (f) => {
      let A = ua(u, o, f);
      return f === A && typeof f == "string" && (A = ua(u, o, `${t}${f === "default" ? "" : Ym(f)}`, f)), n === !1 ? A : {
        [n]: A
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function gw(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const yw = {
  m: "margin",
  p: "padding"
}, vw = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, vA = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ww = gw((e) => {
  if (e.length > 2)
    if (vA[e])
      e = vA[e];
    else
      return [e];
  const [t, n] = e.split(""), r = yw[t], o = vw[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), vf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], wf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...vf, ...wf];
function Vi(e, t, n, r) {
  var o;
  const i = (o = nl(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function Km(e) {
  return Vi(e, "spacing", 8);
}
function Ji(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ew(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Ji(t, n), r), {});
}
function Tw(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = ww(n), i = Ew(o, r), s = e[n];
  return Dn(e, s, i);
}
function Xm(e, t) {
  const n = Km(e.theme);
  return Object.keys(e).map((r) => Tw(e, t, r, n)).reduce(si, {});
}
function De(e) {
  return Xm(e, vf);
}
De.propTypes = {};
De.filterProps = vf;
function Be(e) {
  return Xm(e, wf);
}
Be.propTypes = {};
Be.filterProps = wf;
function Cw(e = 8) {
  if (e.mui)
    return e;
  const t = Km({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function rl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? si(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function xt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function jt(e, t) {
  return xe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Pw = jt("border", xt), kw = jt("borderTop", xt), Sw = jt("borderRight", xt), Dw = jt("borderBottom", xt), Bw = jt("borderLeft", xt), Ow = jt("borderColor"), bw = jt("borderTopColor"), Nw = jt("borderRightColor"), xw = jt("borderBottomColor"), Mw = jt("borderLeftColor"), Iw = jt("outline", xt), Lw = jt("outlineColor"), ol = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Vi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Ji(t, r)
    });
    return Dn(e, e.borderRadius, n);
  }
  return null;
};
ol.propTypes = {};
ol.filterProps = ["borderRadius"];
rl(Pw, kw, Sw, Dw, Bw, Ow, bw, Nw, xw, Mw, ol, Iw, Lw);
const il = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Vi(e.theme, "spacing", 8), n = (r) => ({
      gap: Ji(t, r)
    });
    return Dn(e, e.gap, n);
  }
  return null;
};
il.propTypes = {};
il.filterProps = ["gap"];
const sl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Vi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Ji(t, r)
    });
    return Dn(e, e.columnGap, n);
  }
  return null;
};
sl.propTypes = {};
sl.filterProps = ["columnGap"];
const al = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Vi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Ji(t, r)
    });
    return Dn(e, e.rowGap, n);
  }
  return null;
};
al.propTypes = {};
al.filterProps = ["rowGap"];
const zw = xe({
  prop: "gridColumn"
}), Rw = xe({
  prop: "gridRow"
}), Qw = xe({
  prop: "gridAutoFlow"
}), Hw = xe({
  prop: "gridAutoColumns"
}), Fw = xe({
  prop: "gridAutoRows"
}), Uw = xe({
  prop: "gridTemplateColumns"
}), jw = xe({
  prop: "gridTemplateRows"
}), Gw = xe({
  prop: "gridTemplateAreas"
}), Yw = xe({
  prop: "gridArea"
});
rl(il, sl, al, zw, Rw, Qw, Hw, Fw, Uw, jw, Gw, Yw);
function lo(e, t) {
  return t === "grey" ? t : e;
}
const Kw = xe({
  prop: "color",
  themeKey: "palette",
  transform: lo
}), Xw = xe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: lo
}), Zw = xe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: lo
});
rl(Kw, Xw, Zw);
function Tt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ww = xe({
  prop: "width",
  transform: Tt
}), Ef = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || yf[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Tt(n)
      };
    };
    return Dn(e, e.maxWidth, t);
  }
  return null;
};
Ef.filterProps = ["maxWidth"];
const Vw = xe({
  prop: "minWidth",
  transform: Tt
}), Jw = xe({
  prop: "height",
  transform: Tt
}), qw = xe({
  prop: "maxHeight",
  transform: Tt
}), _w = xe({
  prop: "minHeight",
  transform: Tt
});
xe({
  prop: "size",
  cssProperty: "width",
  transform: Tt
});
xe({
  prop: "size",
  cssProperty: "height",
  transform: Tt
});
const $w = xe({
  prop: "boxSizing"
});
rl(Ww, Ef, Vw, Jw, qw, _w, $w);
const e1 = {
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
    style: ol
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
    style: Be
  },
  pt: {
    style: Be
  },
  pr: {
    style: Be
  },
  pb: {
    style: Be
  },
  pl: {
    style: Be
  },
  px: {
    style: Be
  },
  py: {
    style: Be
  },
  padding: {
    style: Be
  },
  paddingTop: {
    style: Be
  },
  paddingRight: {
    style: Be
  },
  paddingBottom: {
    style: Be
  },
  paddingLeft: {
    style: Be
  },
  paddingX: {
    style: Be
  },
  paddingY: {
    style: Be
  },
  paddingInline: {
    style: Be
  },
  paddingInlineStart: {
    style: Be
  },
  paddingInlineEnd: {
    style: Be
  },
  paddingBlock: {
    style: Be
  },
  paddingBlockStart: {
    style: Be
  },
  paddingBlockEnd: {
    style: Be
  },
  m: {
    style: De
  },
  mt: {
    style: De
  },
  mr: {
    style: De
  },
  mb: {
    style: De
  },
  ml: {
    style: De
  },
  mx: {
    style: De
  },
  my: {
    style: De
  },
  margin: {
    style: De
  },
  marginTop: {
    style: De
  },
  marginRight: {
    style: De
  },
  marginBottom: {
    style: De
  },
  marginLeft: {
    style: De
  },
  marginX: {
    style: De
  },
  marginY: {
    style: De
  },
  marginInline: {
    style: De
  },
  marginInlineStart: {
    style: De
  },
  marginInlineEnd: {
    style: De
  },
  marginBlock: {
    style: De
  },
  marginBlockStart: {
    style: De
  },
  marginBlockEnd: {
    style: De
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
    style: il
  },
  rowGap: {
    style: al
  },
  columnGap: {
    style: sl
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
    transform: Tt
  },
  maxWidth: {
    style: Ef
  },
  minWidth: {
    transform: Tt
  },
  height: {
    transform: Tt
  },
  maxHeight: {
    transform: Tt
  },
  minHeight: {
    transform: Tt
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
}, Zm = e1;
function t1(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function n1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function r1() {
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
    const A = nl(o, u) || {};
    return f ? f(s) : Dn(s, r, (g) => {
      let v = ua(A, c, g);
      return g === v && typeof g == "string" && (v = ua(A, c, `${n}${g === "default" ? "" : Ym(g)}`, g)), l === !1 ? v : {
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
    const a = (r = i.unstable_sxConfig) != null ? r : Zm;
    function l(u) {
      let c = u;
      if (typeof u == "function")
        c = u(i);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const f = hw(i.breakpoints), A = Object.keys(f);
      let E = f;
      return Object.keys(c).forEach((g) => {
        const v = n1(c[g], i);
        if (v != null)
          if (typeof v == "object")
            if (a[g])
              E = si(E, e(g, v, i, a));
            else {
              const B = Dn({
                theme: i
              }, v, (d) => ({
                [g]: d
              }));
              t1(B, v) ? E[g] = t({
                sx: v,
                theme: i,
                nested: !0
              }) : E = si(E, B);
            }
          else
            E = si(E, e(g, v, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": yA(A, E)
      } : yA(A, E);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const Wm = r1();
Wm.filterProps = ["sx"];
const o1 = Wm;
function i1(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const s1 = ["breakpoints", "palette", "spacing", "shape"];
function a1(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = Ua(e, s1), a = Aw(n), l = Cw(o);
  let u = la({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: qe({
      mode: "light"
    }, r),
    spacing: l,
    shape: qe({}, mw, i)
  }, s);
  return u.applyStyles = i1, u = t.reduce((c, f) => la(c, f), u), u.unstable_sxConfig = qe({}, Zm, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return o1({
      sx: f,
      theme: this
    });
  }, u;
}
function l1(e) {
  return Object.keys(e).length === 0;
}
function Tf(e = null) {
  const t = S.useContext(Wi);
  return !t || l1(t) ? e : t;
}
const u1 = a1();
function c1(e = u1) {
  return Tf(e);
}
function tu(e) {
  const t = cw(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function f1({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = c1(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => tu(typeof s == "function" ? s(o) : s)) : i = tu(i)), /* @__PURE__ */ y(uw, {
    styles: i
  });
}
const d1 = typeof window < "u" ? S.useLayoutEffect : S.useEffect, A1 = d1;
let wA = 0;
function p1(e) {
  const [t, n] = S.useState(e), r = e || t;
  return S.useEffect(() => {
    t == null && (wA += 1, n(`mui-${wA}`));
  }, [t]), r;
}
const EA = ju["useId".toString()];
function m1(e) {
  if (EA !== void 0) {
    const t = EA();
    return e ?? t;
  }
  return p1(e);
}
const h1 = /* @__PURE__ */ S.createContext(null), Vm = h1;
function Jm() {
  return S.useContext(Vm);
}
const g1 = typeof Symbol == "function" && Symbol.for, y1 = g1 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function v1(e, t) {
  return typeof t == "function" ? t(e) : qe({}, e, t);
}
function w1(e) {
  const {
    children: t,
    theme: n
  } = e, r = Jm(), o = S.useMemo(() => {
    const i = r === null ? n : v1(r, n);
    return i != null && (i[y1] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ y(Vm.Provider, {
    value: o,
    children: t
  });
}
const E1 = ["value"], T1 = /* @__PURE__ */ S.createContext();
function C1(e) {
  let {
    value: t
  } = e, n = Ua(e, E1);
  return /* @__PURE__ */ y(T1.Provider, qe({
    value: t ?? !0
  }, n));
}
const P1 = /* @__PURE__ */ S.createContext(void 0);
function k1({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ y(P1.Provider, {
    value: e,
    children: t
  });
}
function S1(e) {
  const t = Tf(), n = m1() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, A1(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ y(f1, {
    styles: o
  }) : null;
}
const TA = {};
function CA(e, t, n, r = !1) {
  return S.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? qe({}, t, {
        [e]: i
      }) : i;
      return r ? () => s : s;
    }
    return e ? qe({}, t, {
      [e]: n
    }) : qe({}, t, n);
  }, [e, t, n, r]);
}
function D1(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Tf(TA), i = Jm() || TA, s = CA(r, o, n), a = CA(r, i, n, !0), l = s.direction === "rtl", u = S1(s);
  return /* @__PURE__ */ y(w1, {
    theme: a,
    children: /* @__PURE__ */ y(Wi.Provider, {
      value: s,
      children: /* @__PURE__ */ y(C1, {
        value: l,
        children: /* @__PURE__ */ x(k1, {
          value: s == null ? void 0 : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const B1 = ["theme"];
function O1(e) {
  let {
    theme: t
  } = e, n = Ua(e, B1);
  const r = t[rA];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = qe({}, r, {
    vars: null
  }) : t && !t.vars && (o = qe({}, t, {
    vars: null
  }))), /* @__PURE__ */ y(D1, qe({}, n, {
    themeId: r ? rA : void 0,
    theme: o
  }));
}
var qm = { exports: {} }, Ot = {}, _m = { exports: {} }, $m = {};
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
  function t(Q, K) {
    var V = Q.length;
    Q.push(K);
    e:
      for (; 0 < V; ) {
        var X = V - 1 >>> 1, Ee = Q[X];
        if (0 < o(Ee, K))
          Q[X] = K, Q[V] = Ee, V = X;
        else
          break e;
      }
  }
  function n(Q) {
    return Q.length === 0 ? null : Q[0];
  }
  function r(Q) {
    if (Q.length === 0)
      return null;
    var K = Q[0], V = Q.pop();
    if (V !== K) {
      Q[0] = V;
      e:
        for (var X = 0, Ee = Q.length, In = Ee >>> 1; X < In; ) {
          var R = 2 * (X + 1) - 1, q = Q[R], Xe = R + 1, M = Q[Xe];
          if (0 > o(q, V))
            Xe < Ee && 0 > o(M, q) ? (Q[X] = M, Q[Xe] = V, X = Xe) : (Q[X] = q, Q[R] = V, X = R);
          else if (Xe < Ee && 0 > o(M, V))
            Q[X] = M, Q[Xe] = V, X = Xe;
          else
            break e;
        }
    }
    return K;
  }
  function o(Q, K) {
    var V = Q.sortIndex - K.sortIndex;
    return V !== 0 ? V : Q.id - K.id;
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
  var l = [], u = [], c = 1, f = null, A = 3, E = !1, g = !1, v = !1, B = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(Q) {
    for (var K = n(u); K !== null; ) {
      if (K.callback === null)
        r(u);
      else if (K.startTime <= Q)
        r(u), K.sortIndex = K.expirationTime, t(l, K);
      else
        break;
      K = n(u);
    }
  }
  function T(Q) {
    if (v = !1, h(Q), !g)
      if (n(l) !== null)
        g = !0, ne(O);
      else {
        var K = n(u);
        K !== null && de(T, K.startTime - Q);
      }
  }
  function O(Q, K) {
    g = !1, v && (v = !1, d(D), D = -1), E = !0;
    var V = A;
    try {
      for (h(K), f = n(l); f !== null && (!(f.expirationTime > K) || Q && !F()); ) {
        var X = f.callback;
        if (typeof X == "function") {
          f.callback = null, A = f.priorityLevel;
          var Ee = X(f.expirationTime <= K);
          K = e.unstable_now(), typeof Ee == "function" ? f.callback = Ee : f === n(l) && r(l), h(K);
        } else
          r(l);
        f = n(l);
      }
      if (f !== null)
        var In = !0;
      else {
        var R = n(u);
        R !== null && de(T, R.startTime - K), In = !1;
      }
      return In;
    } finally {
      f = null, A = V, E = !1;
    }
  }
  var w = !1, C = null, D = -1, H = 5, k = -1;
  function F() {
    return !(e.unstable_now() - k < H);
  }
  function N() {
    if (C !== null) {
      var Q = e.unstable_now();
      k = Q;
      var K = !0;
      try {
        K = C(!0, Q);
      } finally {
        K ? W() : (w = !1, C = null);
      }
    } else
      w = !1;
  }
  var W;
  if (typeof p == "function")
    W = function() {
      p(N);
    };
  else if (typeof MessageChannel < "u") {
    var be = new MessageChannel(), ue = be.port2;
    be.port1.onmessage = N, W = function() {
      ue.postMessage(null);
    };
  } else
    W = function() {
      B(N, 0);
    };
  function ne(Q) {
    C = Q, w || (w = !0, W());
  }
  function de(Q, K) {
    D = B(function() {
      Q(e.unstable_now());
    }, K);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(Q) {
    Q.callback = null;
  }, e.unstable_continueExecution = function() {
    g || E || (g = !0, ne(O));
  }, e.unstable_forceFrameRate = function(Q) {
    0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < Q ? Math.floor(1e3 / Q) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return A;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(Q) {
    switch (A) {
      case 1:
      case 2:
      case 3:
        var K = 3;
        break;
      default:
        K = A;
    }
    var V = A;
    A = K;
    try {
      return Q();
    } finally {
      A = V;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(Q, K) {
    switch (Q) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        Q = 3;
    }
    var V = A;
    A = Q;
    try {
      return K();
    } finally {
      A = V;
    }
  }, e.unstable_scheduleCallback = function(Q, K, V) {
    var X = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? X + V : X) : V = X, Q) {
      case 1:
        var Ee = -1;
        break;
      case 2:
        Ee = 250;
        break;
      case 5:
        Ee = 1073741823;
        break;
      case 4:
        Ee = 1e4;
        break;
      default:
        Ee = 5e3;
    }
    return Ee = V + Ee, Q = { id: c++, callback: K, priorityLevel: Q, startTime: V, expirationTime: Ee, sortIndex: -1 }, V > X ? (Q.sortIndex = V, t(u, Q), n(l) === null && Q === n(u) && (v ? (d(D), D = -1) : v = !0, de(T, V - X))) : (Q.sortIndex = Ee, t(l, Q), g || E || (g = !0, ne(O))), Q;
  }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(Q) {
    var K = A;
    return function() {
      var V = A;
      A = K;
      try {
        return Q.apply(this, arguments);
      } finally {
        A = V;
      }
    };
  };
})($m);
_m.exports = $m;
var b1 = _m.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N1 = S, Dt = b1;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var eh = /* @__PURE__ */ new Set(), Ei = {};
function Nr(e, t) {
  go(e, t), go(e + "Capture", t);
}
function go(e, t) {
  for (Ei[e] = t, e = 0; e < t.length; e++)
    eh.add(t[e]);
}
var Bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = Object.prototype.hasOwnProperty, x1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, PA = {}, kA = {};
function M1(e) {
  return Xu.call(kA, e) ? !0 : Xu.call(PA, e) ? !1 : x1.test(e) ? kA[e] = !0 : (PA[e] = !0, !1);
}
function I1(e, t, n, r) {
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
function L1(e, t, n, r) {
  if (t === null || typeof t > "u" || I1(e, t, n, r))
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
function At(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  $e[e] = new At(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  $e[t] = new At(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  $e[e] = new At(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  $e[e] = new At(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  $e[e] = new At(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  $e[e] = new At(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  $e[e] = new At(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  $e[e] = new At(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  $e[e] = new At(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cf = /[\-:]([a-z])/g;
function Pf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Cf,
    Pf
  );
  $e[t] = new At(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Cf, Pf);
  $e[t] = new At(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Cf, Pf);
  $e[t] = new At(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  $e[e] = new At(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new At("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  $e[e] = new At(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kf(e, t, n, r) {
  var o = $e.hasOwnProperty(t) ? $e[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L1(t, n, o, r) && (n = null), r || o === null ? M1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xn = N1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ps = Symbol.for("react.element"), Wr = Symbol.for("react.portal"), Vr = Symbol.for("react.fragment"), Sf = Symbol.for("react.strict_mode"), Zu = Symbol.for("react.profiler"), th = Symbol.for("react.provider"), nh = Symbol.for("react.context"), Df = Symbol.for("react.forward_ref"), Wu = Symbol.for("react.suspense"), Vu = Symbol.for("react.suspense_list"), Bf = Symbol.for("react.memo"), Hn = Symbol.for("react.lazy"), rh = Symbol.for("react.offscreen"), SA = Symbol.iterator;
function Fo(e) {
  return e === null || typeof e != "object" ? null : (e = SA && e[SA] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Pe = Object.assign, nu;
function $o(e) {
  if (nu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      nu = t && t[1] || "";
    }
  return `
` + nu + e;
}
var ru = !1;
function ou(e, t) {
  if (!e || ru)
    return "";
  ru = !0;
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
    ru = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? $o(e) : "";
}
function z1(e) {
  switch (e.tag) {
    case 5:
      return $o(e.type);
    case 16:
      return $o("Lazy");
    case 13:
      return $o("Suspense");
    case 19:
      return $o("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ou(e.type, !1), e;
    case 11:
      return e = ou(e.type.render, !1), e;
    case 1:
      return e = ou(e.type, !0), e;
    default:
      return "";
  }
}
function Ju(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Vr:
      return "Fragment";
    case Wr:
      return "Portal";
    case Zu:
      return "Profiler";
    case Sf:
      return "StrictMode";
    case Wu:
      return "Suspense";
    case Vu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case nh:
        return (e.displayName || "Context") + ".Consumer";
      case th:
        return (e._context.displayName || "Context") + ".Provider";
      case Df:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Bf:
        return t = e.displayName || null, t !== null ? t : Ju(e.type) || "Memo";
      case Hn:
        t = e._payload, e = e._init;
        try {
          return Ju(e(t));
        } catch {
        }
    }
  return null;
}
function R1(e) {
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
      return Ju(t);
    case 8:
      return t === Sf ? "StrictMode" : "Mode";
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
function or(e) {
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
function oh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Q1(e) {
  var t = oh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Q1(e));
}
function ih(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = oh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ca(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qu(e, t) {
  var n = t.checked;
  return Pe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function DA(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = or(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function sh(e, t) {
  t = t.checked, t != null && kf(e, "checked", t, !1);
}
function _u(e, t) {
  sh(e, t);
  var n = or(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? $u(e, t.type, n) : t.hasOwnProperty("defaultValue") && $u(e, t.type, or(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function BA(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function $u(e, t, n) {
  (t !== "number" || ca(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ei = Array.isArray;
function uo(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + or(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ec(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(I(91));
  return Pe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function OA(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(I(92));
      if (ei(n)) {
        if (1 < n.length)
          throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: or(n) };
}
function ah(e, t) {
  var n = or(t.value), r = or(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function bA(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function lh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function tc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? lh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hs, uh = function(e) {
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
function Ti(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ai = {
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
}, H1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ai).forEach(function(e) {
  H1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ai[t] = ai[e];
  });
});
function ch(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ai.hasOwnProperty(e) && ai[e] ? ("" + t).trim() : t + "px";
}
function fh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = ch(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var F1 = Pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function nc(e, t) {
  if (t) {
    if (F1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function rc(e, t) {
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
var oc = null;
function Of(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ic = null, co = null, fo = null;
function NA(e) {
  if (e = $i(e)) {
    if (typeof ic != "function")
      throw Error(I(280));
    var t = e.stateNode;
    t && (t = dl(t), ic(e.stateNode, e.type, t));
  }
}
function dh(e) {
  co ? fo ? fo.push(e) : fo = [e] : co = e;
}
function Ah() {
  if (co) {
    var e = co, t = fo;
    if (fo = co = null, NA(e), t)
      for (e = 0; e < t.length; e++)
        NA(t[e]);
  }
}
function ph(e, t) {
  return e(t);
}
function mh() {
}
var iu = !1;
function hh(e, t, n) {
  if (iu)
    return e(t, n);
  iu = !0;
  try {
    return ph(e, t, n);
  } finally {
    iu = !1, (co !== null || fo !== null) && (mh(), Ah());
  }
}
function Ci(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = dl(n);
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
var sc = !1;
if (Bn)
  try {
    var Uo = {};
    Object.defineProperty(Uo, "passive", { get: function() {
      sc = !0;
    } }), window.addEventListener("test", Uo, Uo), window.removeEventListener("test", Uo, Uo);
  } catch {
    sc = !1;
  }
function U1(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var li = !1, fa = null, da = !1, ac = null, j1 = { onError: function(e) {
  li = !0, fa = e;
} };
function G1(e, t, n, r, o, i, s, a, l) {
  li = !1, fa = null, U1.apply(j1, arguments);
}
function Y1(e, t, n, r, o, i, s, a, l) {
  if (G1.apply(this, arguments), li) {
    if (li) {
      var u = fa;
      li = !1, fa = null;
    } else
      throw Error(I(198));
    da || (da = !0, ac = u);
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
function gh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function xA(e) {
  if (xr(e) !== e)
    throw Error(I(188));
}
function K1(e) {
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
          return xA(o), e;
        if (i === r)
          return xA(o), t;
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
function yh(e) {
  return e = K1(e), e !== null ? vh(e) : null;
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
var wh = Dt.unstable_scheduleCallback, MA = Dt.unstable_cancelCallback, X1 = Dt.unstable_shouldYield, Z1 = Dt.unstable_requestPaint, Ne = Dt.unstable_now, W1 = Dt.unstable_getCurrentPriorityLevel, bf = Dt.unstable_ImmediatePriority, Eh = Dt.unstable_UserBlockingPriority, Aa = Dt.unstable_NormalPriority, V1 = Dt.unstable_LowPriority, Th = Dt.unstable_IdlePriority, ll = null, hn = null;
function J1(e) {
  if (hn && typeof hn.onCommitFiberRoot == "function")
    try {
      hn.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var $t = Math.clz32 ? Math.clz32 : $1, q1 = Math.log, _1 = Math.LN2;
function $1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (q1(e) / _1 | 0) | 0;
}
var gs = 64, ys = 4194304;
function ti(e) {
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
function pa(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = ti(a) : (i &= s, i !== 0 && (r = ti(i)));
  } else
    s = n & ~o, s !== 0 ? r = ti(s) : i !== 0 && (r = ti(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - $t(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function eE(e, t) {
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
function tE(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - $t(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = eE(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function lc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ch() {
  var e = gs;
  return gs <<= 1, !(gs & 4194240) && (gs = 64), e;
}
function su(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function qi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $t(t), e[t] = n;
}
function nE(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $t(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Nf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ae = 0;
function Ph(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var kh, xf, Sh, Dh, Bh, uc = !1, vs = [], Vn = null, Jn = null, qn = null, Pi = /* @__PURE__ */ new Map(), ki = /* @__PURE__ */ new Map(), Un = [], rE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function IA(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vn = null;
      break;
    case "dragenter":
    case "dragleave":
      Jn = null;
      break;
    case "mouseover":
    case "mouseout":
      qn = null;
      break;
    case "pointerover":
    case "pointerout":
      Pi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ki.delete(t.pointerId);
  }
}
function jo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = $i(t), t !== null && xf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function oE(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Vn = jo(Vn, e, t, n, r, o), !0;
    case "dragenter":
      return Jn = jo(Jn, e, t, n, r, o), !0;
    case "mouseover":
      return qn = jo(qn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Pi.set(i, jo(Pi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ki.set(i, jo(ki.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Oh(e) {
  var t = yr(e.target);
  if (t !== null) {
    var n = xr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = gh(n), t !== null) {
          e.blockedOn = t, Bh(e.priority, function() {
            Sh(n);
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
function Vs(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = cc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      oc = r, n.target.dispatchEvent(r), oc = null;
    } else
      return t = $i(n), t !== null && xf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function LA(e, t, n) {
  Vs(e) && n.delete(t);
}
function iE() {
  uc = !1, Vn !== null && Vs(Vn) && (Vn = null), Jn !== null && Vs(Jn) && (Jn = null), qn !== null && Vs(qn) && (qn = null), Pi.forEach(LA), ki.forEach(LA);
}
function Go(e, t) {
  e.blockedOn === t && (e.blockedOn = null, uc || (uc = !0, Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, iE)));
}
function Si(e) {
  function t(o) {
    return Go(o, e);
  }
  if (0 < vs.length) {
    Go(vs[0], e);
    for (var n = 1; n < vs.length; n++) {
      var r = vs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Vn !== null && Go(Vn, e), Jn !== null && Go(Jn, e), qn !== null && Go(qn, e), Pi.forEach(t), ki.forEach(t), n = 0; n < Un.length; n++)
    r = Un[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); )
    Oh(n), n.blockedOn === null && Un.shift();
}
var Ao = xn.ReactCurrentBatchConfig, ma = !0;
function sE(e, t, n, r) {
  var o = Ae, i = Ao.transition;
  Ao.transition = null;
  try {
    Ae = 1, Mf(e, t, n, r);
  } finally {
    Ae = o, Ao.transition = i;
  }
}
function aE(e, t, n, r) {
  var o = Ae, i = Ao.transition;
  Ao.transition = null;
  try {
    Ae = 4, Mf(e, t, n, r);
  } finally {
    Ae = o, Ao.transition = i;
  }
}
function Mf(e, t, n, r) {
  if (ma) {
    var o = cc(e, t, n, r);
    if (o === null)
      hu(e, t, r, ha, n), IA(e, r);
    else if (oE(o, e, t, n, r))
      r.stopPropagation();
    else if (IA(e, r), t & 4 && -1 < rE.indexOf(e)) {
      for (; o !== null; ) {
        var i = $i(o);
        if (i !== null && kh(i), i = cc(e, t, n, r), i === null && hu(e, t, r, ha, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      hu(e, t, r, null, n);
  }
}
var ha = null;
function cc(e, t, n, r) {
  if (ha = null, e = Of(r), e = yr(e), e !== null)
    if (t = xr(e), t === null)
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
  return ha = e, null;
}
function bh(e) {
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
      switch (W1()) {
        case bf:
          return 1;
        case Eh:
          return 4;
        case Aa:
        case V1:
          return 16;
        case Th:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yn = null, If = null, Js = null;
function Nh() {
  if (Js)
    return Js;
  var e, t = If, n = t.length, r, o = "value" in Yn ? Yn.value : Yn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ;
  return Js = o.slice(e, 1 < r ? 1 - r : void 0);
}
function qs(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ws() {
  return !0;
}
function zA() {
  return !1;
}
function bt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ws : zA, this.isPropagationStopped = zA, this;
  }
  return Pe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ws);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ws);
  }, persist: function() {
  }, isPersistent: ws }), t;
}
var No = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Lf = bt(No), _i = Pe({}, No, { view: 0, detail: 0 }), lE = bt(_i), au, lu, Yo, ul = Pe({}, _i, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Yo && (Yo && e.type === "mousemove" ? (au = e.screenX - Yo.screenX, lu = e.screenY - Yo.screenY) : lu = au = 0, Yo = e), au);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : lu;
} }), RA = bt(ul), uE = Pe({}, ul, { dataTransfer: 0 }), cE = bt(uE), fE = Pe({}, _i, { relatedTarget: 0 }), uu = bt(fE), dE = Pe({}, No, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), AE = bt(dE), pE = Pe({}, No, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mE = bt(pE), hE = Pe({}, No, { data: 0 }), QA = bt(hE), gE = {
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
}, yE = {
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
}, vE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function wE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vE[e]) ? !!t[e] : !1;
}
function zf() {
  return wE;
}
var EE = Pe({}, _i, { key: function(e) {
  if (e.key) {
    var t = gE[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = qs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yE[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zf, charCode: function(e) {
  return e.type === "keypress" ? qs(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? qs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), TE = bt(EE), CE = Pe({}, ul, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), HA = bt(CE), PE = Pe({}, _i, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zf }), kE = bt(PE), SE = Pe({}, No, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), DE = bt(SE), BE = Pe({}, ul, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), OE = bt(BE), bE = [9, 13, 27, 32], Rf = Bn && "CompositionEvent" in window, ui = null;
Bn && "documentMode" in document && (ui = document.documentMode);
var NE = Bn && "TextEvent" in window && !ui, xh = Bn && (!Rf || ui && 8 < ui && 11 >= ui), FA = String.fromCharCode(32), UA = !1;
function Mh(e, t) {
  switch (e) {
    case "keyup":
      return bE.indexOf(t.keyCode) !== -1;
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
function Ih(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Jr = !1;
function xE(e, t) {
  switch (e) {
    case "compositionend":
      return Ih(t);
    case "keypress":
      return t.which !== 32 ? null : (UA = !0, FA);
    case "textInput":
      return e = t.data, e === FA && UA ? null : e;
    default:
      return null;
  }
}
function ME(e, t) {
  if (Jr)
    return e === "compositionend" || !Rf && Mh(e, t) ? (e = Nh(), Js = If = Yn = null, Jr = !1, e) : null;
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
var IE = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function jA(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!IE[e.type] : t === "textarea";
}
function Lh(e, t, n, r) {
  dh(r), t = ga(t, "onChange"), 0 < t.length && (n = new Lf("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ci = null, Di = null;
function LE(e) {
  Xh(e, 0);
}
function cl(e) {
  var t = $r(e);
  if (ih(t))
    return e;
}
function zE(e, t) {
  if (e === "change")
    return t;
}
var zh = !1;
if (Bn) {
  var cu;
  if (Bn) {
    var fu = "oninput" in document;
    if (!fu) {
      var GA = document.createElement("div");
      GA.setAttribute("oninput", "return;"), fu = typeof GA.oninput == "function";
    }
    cu = fu;
  } else
    cu = !1;
  zh = cu && (!document.documentMode || 9 < document.documentMode);
}
function YA() {
  ci && (ci.detachEvent("onpropertychange", Rh), Di = ci = null);
}
function Rh(e) {
  if (e.propertyName === "value" && cl(Di)) {
    var t = [];
    Lh(t, Di, e, Of(e)), hh(LE, t);
  }
}
function RE(e, t, n) {
  e === "focusin" ? (YA(), ci = t, Di = n, ci.attachEvent("onpropertychange", Rh)) : e === "focusout" && YA();
}
function QE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cl(Di);
}
function HE(e, t) {
  if (e === "click")
    return cl(t);
}
function FE(e, t) {
  if (e === "input" || e === "change")
    return cl(t);
}
function UE(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var tn = typeof Object.is == "function" ? Object.is : UE;
function Bi(e, t) {
  if (tn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Xu.call(t, o) || !tn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function KA(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function XA(e, t) {
  var n = KA(e);
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
    n = KA(n);
  }
}
function Qh(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Hh() {
  for (var e = window, t = ca(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = ca(e.document);
  }
  return t;
}
function Qf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function jE(e) {
  var t = Hh(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qh(n.ownerDocument.documentElement, n)) {
    if (r !== null && Qf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = XA(n, i);
        var s = XA(
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
var GE = Bn && "documentMode" in document && 11 >= document.documentMode, qr = null, fc = null, fi = null, dc = !1;
function ZA(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  dc || qr == null || qr !== ca(r) || (r = qr, "selectionStart" in r && Qf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fi && Bi(fi, r) || (fi = r, r = ga(fc, "onSelect"), 0 < r.length && (t = new Lf("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = qr)));
}
function Es(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var _r = { animationend: Es("Animation", "AnimationEnd"), animationiteration: Es("Animation", "AnimationIteration"), animationstart: Es("Animation", "AnimationStart"), transitionend: Es("Transition", "TransitionEnd") }, du = {}, Fh = {};
Bn && (Fh = document.createElement("div").style, "AnimationEvent" in window || (delete _r.animationend.animation, delete _r.animationiteration.animation, delete _r.animationstart.animation), "TransitionEvent" in window || delete _r.transitionend.transition);
function fl(e) {
  if (du[e])
    return du[e];
  if (!_r[e])
    return e;
  var t = _r[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Fh)
      return du[e] = t[n];
  return e;
}
var Uh = fl("animationend"), jh = fl("animationiteration"), Gh = fl("animationstart"), Yh = fl("transitionend"), Kh = /* @__PURE__ */ new Map(), WA = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ar(e, t) {
  Kh.set(e, t), Nr(t, [e]);
}
for (var Au = 0; Au < WA.length; Au++) {
  var pu = WA[Au], YE = pu.toLowerCase(), KE = pu[0].toUpperCase() + pu.slice(1);
  ar(YE, "on" + KE);
}
ar(Uh, "onAnimationEnd");
ar(jh, "onAnimationIteration");
ar(Gh, "onAnimationStart");
ar("dblclick", "onDoubleClick");
ar("focusin", "onFocus");
ar("focusout", "onBlur");
ar(Yh, "onTransitionEnd");
go("onMouseEnter", ["mouseout", "mouseover"]);
go("onMouseLeave", ["mouseout", "mouseover"]);
go("onPointerEnter", ["pointerout", "pointerover"]);
go("onPointerLeave", ["pointerout", "pointerover"]);
Nr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Nr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Nr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Nr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), XE = new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));
function VA(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Y1(r, t, void 0, e), e.currentTarget = null;
}
function Xh(e, t) {
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
          VA(o, a, u), i = l;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped())
            break e;
          VA(o, a, u), i = l;
        }
    }
  }
  if (da)
    throw e = ac, da = !1, ac = null, e;
}
function ye(e, t) {
  var n = t[gc];
  n === void 0 && (n = t[gc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Zh(t, e, 2, !1), n.add(r));
}
function mu(e, t, n) {
  var r = 0;
  t && (r |= 4), Zh(n, e, r, t);
}
var Ts = "_reactListening" + Math.random().toString(36).slice(2);
function Oi(e) {
  if (!e[Ts]) {
    e[Ts] = !0, eh.forEach(function(n) {
      n !== "selectionchange" && (XE.has(n) || mu(n, !1, e), mu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ts] || (t[Ts] = !0, mu("selectionchange", !1, t));
  }
}
function Zh(e, t, n, r) {
  switch (bh(t)) {
    case 1:
      var o = sE;
      break;
    case 4:
      o = aE;
      break;
    default:
      o = Mf;
  }
  n = o.bind(null, t, n, e), o = void 0, !sc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function hu(e, t, n, r, o) {
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
            if (s = yr(a), s === null)
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
  hh(function() {
    var u = i, c = Of(n), f = [];
    e: {
      var A = Kh.get(e);
      if (A !== void 0) {
        var E = Lf, g = e;
        switch (e) {
          case "keypress":
            if (qs(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            E = TE;
            break;
          case "focusin":
            g = "focus", E = uu;
            break;
          case "focusout":
            g = "blur", E = uu;
            break;
          case "beforeblur":
          case "afterblur":
            E = uu;
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
            E = RA;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = cE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = kE;
            break;
          case Uh:
          case jh:
          case Gh:
            E = AE;
            break;
          case Yh:
            E = DE;
            break;
          case "scroll":
            E = lE;
            break;
          case "wheel":
            E = OE;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = mE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = HA;
        }
        var v = (t & 4) !== 0, B = !v && e === "scroll", d = v ? A !== null ? A + "Capture" : null : A;
        v = [];
        for (var p = u, h; p !== null; ) {
          h = p;
          var T = h.stateNode;
          if (h.tag === 5 && T !== null && (h = T, d !== null && (T = Ci(p, d), T != null && v.push(bi(p, T, h)))), B)
            break;
          p = p.return;
        }
        0 < v.length && (A = new E(A, g, null, n, c), f.push({ event: A, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (A = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", A && n !== oc && (g = n.relatedTarget || n.fromElement) && (yr(g) || g[On]))
          break e;
        if ((E || A) && (A = c.window === c ? c : (A = c.ownerDocument) ? A.defaultView || A.parentWindow : window, E ? (g = n.relatedTarget || n.toElement, E = u, g = g ? yr(g) : null, g !== null && (B = xr(g), g !== B || g.tag !== 5 && g.tag !== 6) && (g = null)) : (E = null, g = u), E !== g)) {
          if (v = RA, T = "onMouseLeave", d = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = HA, T = "onPointerLeave", d = "onPointerEnter", p = "pointer"), B = E == null ? A : $r(E), h = g == null ? A : $r(g), A = new v(T, p + "leave", E, n, c), A.target = B, A.relatedTarget = h, T = null, yr(c) === u && (v = new v(d, p + "enter", g, n, c), v.target = h, v.relatedTarget = B, T = v), B = T, E && g)
            t: {
              for (v = E, d = g, p = 0, h = v; h; h = Ur(h))
                p++;
              for (h = 0, T = d; T; T = Ur(T))
                h++;
              for (; 0 < p - h; )
                v = Ur(v), p--;
              for (; 0 < h - p; )
                d = Ur(d), h--;
              for (; p--; ) {
                if (v === d || d !== null && v === d.alternate)
                  break t;
                v = Ur(v), d = Ur(d);
              }
              v = null;
            }
          else
            v = null;
          E !== null && JA(f, A, E, v, !1), g !== null && B !== null && JA(f, B, g, v, !0);
        }
      }
      e: {
        if (A = u ? $r(u) : window, E = A.nodeName && A.nodeName.toLowerCase(), E === "select" || E === "input" && A.type === "file")
          var O = zE;
        else if (jA(A))
          if (zh)
            O = FE;
          else {
            O = QE;
            var w = RE;
          }
        else
          (E = A.nodeName) && E.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (O = HE);
        if (O && (O = O(e, u))) {
          Lh(f, O, n, c);
          break e;
        }
        w && w(e, A, u), e === "focusout" && (w = A._wrapperState) && w.controlled && A.type === "number" && $u(A, "number", A.value);
      }
      switch (w = u ? $r(u) : window, e) {
        case "focusin":
          (jA(w) || w.contentEditable === "true") && (qr = w, fc = u, fi = null);
          break;
        case "focusout":
          fi = fc = qr = null;
          break;
        case "mousedown":
          dc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          dc = !1, ZA(f, n, c);
          break;
        case "selectionchange":
          if (GE)
            break;
        case "keydown":
        case "keyup":
          ZA(f, n, c);
      }
      var C;
      if (Rf)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        Jr ? Mh(e, n) && (D = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D && (xh && n.locale !== "ko" && (Jr || D !== "onCompositionStart" ? D === "onCompositionEnd" && Jr && (C = Nh()) : (Yn = c, If = "value" in Yn ? Yn.value : Yn.textContent, Jr = !0)), w = ga(u, D), 0 < w.length && (D = new QA(D, e, null, n, c), f.push({ event: D, listeners: w }), C ? D.data = C : (C = Ih(n), C !== null && (D.data = C)))), (C = NE ? xE(e, n) : ME(e, n)) && (u = ga(u, "onBeforeInput"), 0 < u.length && (c = new QA("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = C));
    }
    Xh(f, t);
  });
}
function bi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ga(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ci(e, n), i != null && r.unshift(bi(e, i, o)), i = Ci(e, t), i != null && r.push(bi(e, i, o))), e = e.return;
  }
  return r;
}
function Ur(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function JA(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r)
      break;
    a.tag === 5 && u !== null && (a = u, o ? (l = Ci(n, i), l != null && s.unshift(bi(n, l, a))) : o || (l = Ci(n, i), l != null && s.push(bi(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ZE = /\r\n?/g, WE = /\u0000|\uFFFD/g;
function qA(e) {
  return (typeof e == "string" ? e : "" + e).replace(ZE, `
`).replace(WE, "");
}
function Cs(e, t, n) {
  if (t = qA(t), qA(e) !== t && n)
    throw Error(I(425));
}
function ya() {
}
var Ac = null, pc = null;
function mc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var hc = typeof setTimeout == "function" ? setTimeout : void 0, VE = typeof clearTimeout == "function" ? clearTimeout : void 0, _A = typeof Promise == "function" ? Promise : void 0, JE = typeof queueMicrotask == "function" ? queueMicrotask : typeof _A < "u" ? function(e) {
  return _A.resolve(null).then(e).catch(qE);
} : hc;
function qE(e) {
  setTimeout(function() {
    throw e;
  });
}
function gu(e, t) {
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
function _n(e) {
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
function $A(e) {
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
var xo = Math.random().toString(36).slice(2), pn = "__reactFiber$" + xo, Ni = "__reactProps$" + xo, On = "__reactContainer$" + xo, gc = "__reactEvents$" + xo, _E = "__reactListeners$" + xo, $E = "__reactHandles$" + xo;
function yr(e) {
  var t = e[pn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[On] || n[pn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = $A(e); e !== null; ) {
          if (n = e[pn])
            return n;
          e = $A(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function $i(e) {
  return e = e[pn] || e[On], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function $r(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(I(33));
}
function dl(e) {
  return e[Ni] || null;
}
var yc = [], eo = -1;
function lr(e) {
  return { current: e };
}
function ve(e) {
  0 > eo || (e.current = yc[eo], yc[eo] = null, eo--);
}
function ge(e, t) {
  eo++, yc[eo] = e.current, e.current = t;
}
var ir = {}, it = lr(ir), ht = lr(!1), Pr = ir;
function yo(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return ir;
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
function va() {
  ve(ht), ve(it);
}
function ep(e, t, n) {
  if (it.current !== ir)
    throw Error(I(168));
  ge(it, t), ge(ht, n);
}
function Wh(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(I(108, R1(e) || "Unknown", o));
  return Pe({}, n, r);
}
function wa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ir, Pr = it.current, ge(it, e), ge(ht, ht.current), !0;
}
function tp(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(I(169));
  n ? (e = Wh(e, t, Pr), r.__reactInternalMemoizedMergedChildContext = e, ve(ht), ve(it), ge(it, e)) : ve(ht), ge(ht, n);
}
var Tn = null, Al = !1, yu = !1;
function Vh(e) {
  Tn === null ? Tn = [e] : Tn.push(e);
}
function eT(e) {
  Al = !0, Vh(e);
}
function ur() {
  if (!yu && Tn !== null) {
    yu = !0;
    var e = 0, t = Ae;
    try {
      var n = Tn;
      for (Ae = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Tn = null, Al = !1;
    } catch (o) {
      throw Tn !== null && (Tn = Tn.slice(e + 1)), wh(bf, ur), o;
    } finally {
      Ae = t, yu = !1;
    }
  }
  return null;
}
var to = [], no = 0, Ea = null, Ta = 0, Mt = [], It = 0, kr = null, Pn = 1, kn = "";
function mr(e, t) {
  to[no++] = Ta, to[no++] = Ea, Ea = e, Ta = t;
}
function Jh(e, t, n) {
  Mt[It++] = Pn, Mt[It++] = kn, Mt[It++] = kr, kr = e;
  var r = Pn;
  e = kn;
  var o = 32 - $t(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - $t(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Pn = 1 << 32 - $t(t) + o | n << o | r, kn = i + e;
  } else
    Pn = 1 << i | n << o | r, kn = e;
}
function Hf(e) {
  e.return !== null && (mr(e, 1), Jh(e, 1, 0));
}
function Ff(e) {
  for (; e === Ea; )
    Ea = to[--no], to[no] = null, Ta = to[--no], to[no] = null;
  for (; e === kr; )
    kr = Mt[--It], Mt[It] = null, kn = Mt[--It], Mt[It] = null, Pn = Mt[--It], Mt[It] = null;
}
var St = null, Pt = null, we = !1, Jt = null;
function qh(e, t) {
  var n = Rt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function np(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, St = e, Pt = _n(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, St = e, Pt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = kr !== null ? { id: Pn, overflow: kn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, St = e, Pt = null, !0) : !1;
    default:
      return !1;
  }
}
function vc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wc(e) {
  if (we) {
    var t = Pt;
    if (t) {
      var n = t;
      if (!np(e, t)) {
        if (vc(e))
          throw Error(I(418));
        t = _n(n.nextSibling);
        var r = St;
        t && np(e, t) ? qh(r, n) : (e.flags = e.flags & -4097 | 2, we = !1, St = e);
      }
    } else {
      if (vc(e))
        throw Error(I(418));
      e.flags = e.flags & -4097 | 2, we = !1, St = e;
    }
  }
}
function rp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  St = e;
}
function Ps(e) {
  if (e !== St)
    return !1;
  if (!we)
    return rp(e), we = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !mc(e.type, e.memoizedProps)), t && (t = Pt)) {
    if (vc(e))
      throw _h(), Error(I(418));
    for (; t; )
      qh(e, t), t = _n(t.nextSibling);
  }
  if (rp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pt = _n(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Pt = null;
    }
  } else
    Pt = St ? _n(e.stateNode.nextSibling) : null;
  return !0;
}
function _h() {
  for (var e = Pt; e; )
    e = _n(e.nextSibling);
}
function vo() {
  Pt = St = null, we = !1;
}
function Uf(e) {
  Jt === null ? Jt = [e] : Jt.push(e);
}
var tT = xn.ReactCurrentBatchConfig;
function Ko(e, t, n) {
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
function ks(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function op(e) {
  var t = e._init;
  return t(e._payload);
}
function $h(e) {
  function t(d, p) {
    if (e) {
      var h = d.deletions;
      h === null ? (d.deletions = [p], d.flags |= 16) : h.push(p);
    }
  }
  function n(d, p) {
    if (!e)
      return null;
    for (; p !== null; )
      t(d, p), p = p.sibling;
    return null;
  }
  function r(d, p) {
    for (d = /* @__PURE__ */ new Map(); p !== null; )
      p.key !== null ? d.set(p.key, p) : d.set(p.index, p), p = p.sibling;
    return d;
  }
  function o(d, p) {
    return d = nr(d, p), d.index = 0, d.sibling = null, d;
  }
  function i(d, p, h) {
    return d.index = h, e ? (h = d.alternate, h !== null ? (h = h.index, h < p ? (d.flags |= 2, p) : h) : (d.flags |= 2, p)) : (d.flags |= 1048576, p);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, p, h, T) {
    return p === null || p.tag !== 6 ? (p = ku(h, d.mode, T), p.return = d, p) : (p = o(p, h), p.return = d, p);
  }
  function l(d, p, h, T) {
    var O = h.type;
    return O === Vr ? c(d, p, h.props.children, T, h.key) : p !== null && (p.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Hn && op(O) === p.type) ? (T = o(p, h.props), T.ref = Ko(d, p, h), T.return = d, T) : (T = oa(h.type, h.key, h.props, null, d.mode, T), T.ref = Ko(d, p, h), T.return = d, T);
  }
  function u(d, p, h, T) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation ? (p = Su(h, d.mode, T), p.return = d, p) : (p = o(p, h.children || []), p.return = d, p);
  }
  function c(d, p, h, T, O) {
    return p === null || p.tag !== 7 ? (p = Tr(h, d.mode, T, O), p.return = d, p) : (p = o(p, h), p.return = d, p);
  }
  function f(d, p, h) {
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return p = ku("" + p, d.mode, h), p.return = d, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ps:
          return h = oa(p.type, p.key, p.props, null, d.mode, h), h.ref = Ko(d, null, p), h.return = d, h;
        case Wr:
          return p = Su(p, d.mode, h), p.return = d, p;
        case Hn:
          var T = p._init;
          return f(d, T(p._payload), h);
      }
      if (ei(p) || Fo(p))
        return p = Tr(p, d.mode, h, null), p.return = d, p;
      ks(d, p);
    }
    return null;
  }
  function A(d, p, h, T) {
    var O = p !== null ? p.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return O !== null ? null : a(d, p, "" + h, T);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ps:
          return h.key === O ? l(d, p, h, T) : null;
        case Wr:
          return h.key === O ? u(d, p, h, T) : null;
        case Hn:
          return O = h._init, A(
            d,
            p,
            O(h._payload),
            T
          );
      }
      if (ei(h) || Fo(h))
        return O !== null ? null : c(d, p, h, T, null);
      ks(d, h);
    }
    return null;
  }
  function E(d, p, h, T, O) {
    if (typeof T == "string" && T !== "" || typeof T == "number")
      return d = d.get(h) || null, a(p, d, "" + T, O);
    if (typeof T == "object" && T !== null) {
      switch (T.$$typeof) {
        case ps:
          return d = d.get(T.key === null ? h : T.key) || null, l(p, d, T, O);
        case Wr:
          return d = d.get(T.key === null ? h : T.key) || null, u(p, d, T, O);
        case Hn:
          var w = T._init;
          return E(d, p, h, w(T._payload), O);
      }
      if (ei(T) || Fo(T))
        return d = d.get(h) || null, c(p, d, T, O, null);
      ks(p, T);
    }
    return null;
  }
  function g(d, p, h, T) {
    for (var O = null, w = null, C = p, D = p = 0, H = null; C !== null && D < h.length; D++) {
      C.index > D ? (H = C, C = null) : H = C.sibling;
      var k = A(d, C, h[D], T);
      if (k === null) {
        C === null && (C = H);
        break;
      }
      e && C && k.alternate === null && t(d, C), p = i(k, p, D), w === null ? O = k : w.sibling = k, w = k, C = H;
    }
    if (D === h.length)
      return n(d, C), we && mr(d, D), O;
    if (C === null) {
      for (; D < h.length; D++)
        C = f(d, h[D], T), C !== null && (p = i(C, p, D), w === null ? O = C : w.sibling = C, w = C);
      return we && mr(d, D), O;
    }
    for (C = r(d, C); D < h.length; D++)
      H = E(C, d, D, h[D], T), H !== null && (e && H.alternate !== null && C.delete(H.key === null ? D : H.key), p = i(H, p, D), w === null ? O = H : w.sibling = H, w = H);
    return e && C.forEach(function(F) {
      return t(d, F);
    }), we && mr(d, D), O;
  }
  function v(d, p, h, T) {
    var O = Fo(h);
    if (typeof O != "function")
      throw Error(I(150));
    if (h = O.call(h), h == null)
      throw Error(I(151));
    for (var w = O = null, C = p, D = p = 0, H = null, k = h.next(); C !== null && !k.done; D++, k = h.next()) {
      C.index > D ? (H = C, C = null) : H = C.sibling;
      var F = A(d, C, k.value, T);
      if (F === null) {
        C === null && (C = H);
        break;
      }
      e && C && F.alternate === null && t(d, C), p = i(F, p, D), w === null ? O = F : w.sibling = F, w = F, C = H;
    }
    if (k.done)
      return n(
        d,
        C
      ), we && mr(d, D), O;
    if (C === null) {
      for (; !k.done; D++, k = h.next())
        k = f(d, k.value, T), k !== null && (p = i(k, p, D), w === null ? O = k : w.sibling = k, w = k);
      return we && mr(d, D), O;
    }
    for (C = r(d, C); !k.done; D++, k = h.next())
      k = E(C, d, D, k.value, T), k !== null && (e && k.alternate !== null && C.delete(k.key === null ? D : k.key), p = i(k, p, D), w === null ? O = k : w.sibling = k, w = k);
    return e && C.forEach(function(N) {
      return t(d, N);
    }), we && mr(d, D), O;
  }
  function B(d, p, h, T) {
    if (typeof h == "object" && h !== null && h.type === Vr && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ps:
          e: {
            for (var O = h.key, w = p; w !== null; ) {
              if (w.key === O) {
                if (O = h.type, O === Vr) {
                  if (w.tag === 7) {
                    n(d, w.sibling), p = o(w, h.props.children), p.return = d, d = p;
                    break e;
                  }
                } else if (w.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Hn && op(O) === w.type) {
                  n(d, w.sibling), p = o(w, h.props), p.ref = Ko(d, w, h), p.return = d, d = p;
                  break e;
                }
                n(d, w);
                break;
              } else
                t(d, w);
              w = w.sibling;
            }
            h.type === Vr ? (p = Tr(h.props.children, d.mode, T, h.key), p.return = d, d = p) : (T = oa(h.type, h.key, h.props, null, d.mode, T), T.ref = Ko(d, p, h), T.return = d, d = T);
          }
          return s(d);
        case Wr:
          e: {
            for (w = h.key; p !== null; ) {
              if (p.key === w)
                if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) {
                  n(d, p.sibling), p = o(p, h.children || []), p.return = d, d = p;
                  break e;
                } else {
                  n(d, p);
                  break;
                }
              else
                t(d, p);
              p = p.sibling;
            }
            p = Su(h, d.mode, T), p.return = d, d = p;
          }
          return s(d);
        case Hn:
          return w = h._init, B(d, p, w(h._payload), T);
      }
      if (ei(h))
        return g(d, p, h, T);
      if (Fo(h))
        return v(d, p, h, T);
      ks(d, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, p !== null && p.tag === 6 ? (n(d, p.sibling), p = o(p, h), p.return = d, d = p) : (n(d, p), p = ku(h, d.mode, T), p.return = d, d = p), s(d)) : n(d, p);
  }
  return B;
}
var wo = $h(!0), eg = $h(!1), Ca = lr(null), Pa = null, ro = null, jf = null;
function Gf() {
  jf = ro = Pa = null;
}
function Yf(e) {
  var t = Ca.current;
  ve(Ca), e._currentValue = t;
}
function Ec(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function po(e, t) {
  Pa = e, jf = ro = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (mt = !0), e.firstContext = null);
}
function Ft(e) {
  var t = e._currentValue;
  if (jf !== e)
    if (e = { context: e, memoizedValue: t, next: null }, ro === null) {
      if (Pa === null)
        throw Error(I(308));
      ro = e, Pa.dependencies = { lanes: 0, firstContext: e };
    } else
      ro = ro.next = e;
  return t;
}
var vr = null;
function Kf(e) {
  vr === null ? vr = [e] : vr.push(e);
}
function tg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Kf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, bn(e, r);
}
function bn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Fn = !1;
function Xf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ng(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Sn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function $n(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, se & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, bn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Kf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, bn(e, n);
}
function _s(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Nf(e, n);
  }
}
function ip(e, t) {
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
function ka(e, t, n, r) {
  var o = e.updateQueue;
  Fn = !1;
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
      var A = a.lane, E = a.eventTime;
      if ((r & A) === A) {
        c !== null && (c = c.next = {
          eventTime: E,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var g = e, v = a;
          switch (A = t, E = n, v.tag) {
            case 1:
              if (g = v.payload, typeof g == "function") {
                f = g.call(E, f, A);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = v.payload, A = typeof g == "function" ? g.call(E, f, A) : g, A == null)
                break e;
              f = Pe({}, f, A);
              break e;
            case 2:
              Fn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, A = o.effects, A === null ? o.effects = [a] : A.push(a));
      } else
        E = { eventTime: E, lane: A, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = E, l = f) : c = c.next = E, s |= A;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null)
          break;
        A = a, a = A.next, A.next = null, o.lastBaseUpdate = A, o.shared.pending = null;
      }
    } while (1);
    if (c === null && (l = f), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    Dr |= s, e.lanes = s, e.memoizedState = f;
  }
}
function sp(e, t, n) {
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
var es = {}, gn = lr(es), xi = lr(es), Mi = lr(es);
function wr(e) {
  if (e === es)
    throw Error(I(174));
  return e;
}
function Zf(e, t) {
  switch (ge(Mi, t), ge(xi, e), ge(gn, es), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = tc(t, e);
  }
  ve(gn), ge(gn, t);
}
function Eo() {
  ve(gn), ve(xi), ve(Mi);
}
function rg(e) {
  wr(Mi.current);
  var t = wr(gn.current), n = tc(t, e.type);
  t !== n && (ge(xi, e), ge(gn, n));
}
function Wf(e) {
  xi.current === e && (ve(gn), ve(xi));
}
var Te = lr(0);
function Sa(e) {
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
var vu = [];
function Vf() {
  for (var e = 0; e < vu.length; e++)
    vu[e]._workInProgressVersionPrimary = null;
  vu.length = 0;
}
var $s = xn.ReactCurrentDispatcher, wu = xn.ReactCurrentBatchConfig, Sr = 0, Ce = null, Qe = null, je = null, Da = !1, di = !1, Ii = 0, nT = 0;
function tt() {
  throw Error(I(321));
}
function Jf(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!tn(e[n], t[n]))
      return !1;
  return !0;
}
function qf(e, t, n, r, o, i) {
  if (Sr = i, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $s.current = e === null || e.memoizedState === null ? sT : aT, e = n(r, o), di) {
    i = 0;
    do {
      if (di = !1, Ii = 0, 25 <= i)
        throw Error(I(301));
      i += 1, je = Qe = null, t.updateQueue = null, $s.current = lT, e = n(r, o);
    } while (di);
  }
  if ($s.current = Ba, t = Qe !== null && Qe.next !== null, Sr = 0, je = Qe = Ce = null, Da = !1, t)
    throw Error(I(300));
  return e;
}
function _f() {
  var e = Ii !== 0;
  return Ii = 0, e;
}
function fn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return je === null ? Ce.memoizedState = je = e : je = je.next = e, je;
}
function Ut() {
  if (Qe === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Qe.next;
  var t = je === null ? Ce.memoizedState : je.next;
  if (t !== null)
    je = t, Qe = e;
  else {
    if (e === null)
      throw Error(I(310));
    Qe = e, e = { memoizedState: Qe.memoizedState, baseState: Qe.baseState, baseQueue: Qe.baseQueue, queue: Qe.queue, next: null }, je === null ? Ce.memoizedState = je = e : je = je.next = e;
  }
  return je;
}
function Li(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Eu(e) {
  var t = Ut(), n = t.queue;
  if (n === null)
    throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Qe, o = r.baseQueue, i = n.pending;
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
        l === null ? (a = l = f, s = r) : l = l.next = f, Ce.lanes |= c, Dr |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, tn(r, t.memoizedState) || (mt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ce.lanes |= i, Dr |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Tu(e) {
  var t = Ut(), n = t.queue;
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
    tn(i, t.memoizedState) || (mt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function og() {
}
function ig(e, t) {
  var n = Ce, r = Ut(), o = t(), i = !tn(r.memoizedState, o);
  if (i && (r.memoizedState = o, mt = !0), r = r.queue, $f(lg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || je !== null && je.memoizedState.tag & 1) {
    if (n.flags |= 2048, zi(9, ag.bind(null, n, r, o, t), void 0, null), Ge === null)
      throw Error(I(349));
    Sr & 30 || sg(n, t, o);
  }
  return o;
}
function sg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ag(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ug(t) && cg(e);
}
function lg(e, t, n) {
  return n(function() {
    ug(t) && cg(e);
  });
}
function ug(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tn(e, n);
  } catch {
    return !0;
  }
}
function cg(e) {
  var t = bn(e, 1);
  t !== null && en(t, e, 1, -1);
}
function ap(e) {
  var t = fn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Li, lastRenderedState: e }, t.queue = e, e = e.dispatch = iT.bind(null, Ce, e), [t.memoizedState, e];
}
function zi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fg() {
  return Ut().memoizedState;
}
function ea(e, t, n, r) {
  var o = fn();
  Ce.flags |= e, o.memoizedState = zi(1 | t, n, void 0, r === void 0 ? null : r);
}
function pl(e, t, n, r) {
  var o = Ut();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Qe !== null) {
    var s = Qe.memoizedState;
    if (i = s.destroy, r !== null && Jf(r, s.deps)) {
      o.memoizedState = zi(t, n, i, r);
      return;
    }
  }
  Ce.flags |= e, o.memoizedState = zi(1 | t, n, i, r);
}
function lp(e, t) {
  return ea(8390656, 8, e, t);
}
function $f(e, t) {
  return pl(2048, 8, e, t);
}
function dg(e, t) {
  return pl(4, 2, e, t);
}
function Ag(e, t) {
  return pl(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, pl(4, 4, pg.bind(null, t, e), n);
}
function ed() {
}
function hg(e, t) {
  var n = Ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function gg(e, t) {
  var n = Ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function yg(e, t, n) {
  return Sr & 21 ? (tn(n, t) || (n = Ch(), Ce.lanes |= n, Dr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, mt = !0), e.memoizedState = n);
}
function rT(e, t) {
  var n = Ae;
  Ae = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = wu.transition;
  wu.transition = {};
  try {
    e(!1), t();
  } finally {
    Ae = n, wu.transition = r;
  }
}
function vg() {
  return Ut().memoizedState;
}
function oT(e, t, n) {
  var r = tr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, wg(e))
    Eg(t, n);
  else if (n = tg(e, t, n, r), n !== null) {
    var o = ft();
    en(n, e, r, o), Tg(n, t, r);
  }
}
function iT(e, t, n) {
  var r = tr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wg(e))
    Eg(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var s = t.lastRenderedState, a = i(s, n);
        if (o.hasEagerState = !0, o.eagerState = a, tn(a, s)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Kf(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = tg(e, t, o, r), n !== null && (o = ft(), en(n, e, r, o), Tg(n, t, r));
  }
}
function wg(e) {
  var t = e.alternate;
  return e === Ce || t !== null && t === Ce;
}
function Eg(e, t) {
  di = Da = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Tg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Nf(e, n);
  }
}
var Ba = { readContext: Ft, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, sT = { readContext: Ft, useCallback: function(e, t) {
  return fn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ft, useEffect: lp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ea(
    4194308,
    4,
    pg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ea(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ea(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = fn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = fn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = oT.bind(null, Ce, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = fn();
  return e = { current: e }, t.memoizedState = e;
}, useState: ap, useDebugValue: ed, useDeferredValue: function(e) {
  return fn().memoizedState = e;
}, useTransition: function() {
  var e = ap(!1), t = e[0];
  return e = rT.bind(null, e[1]), fn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ce, o = fn();
  if (we) {
    if (n === void 0)
      throw Error(I(407));
    n = n();
  } else {
    if (n = t(), Ge === null)
      throw Error(I(349));
    Sr & 30 || sg(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, lp(lg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, zi(9, ag.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = fn(), t = Ge.identifierPrefix;
  if (we) {
    var n = kn, r = Pn;
    n = (r & ~(1 << 32 - $t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ii++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = nT++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, aT = {
  readContext: Ft,
  useCallback: hg,
  useContext: Ft,
  useEffect: $f,
  useImperativeHandle: mg,
  useInsertionEffect: dg,
  useLayoutEffect: Ag,
  useMemo: gg,
  useReducer: Eu,
  useRef: fg,
  useState: function() {
    return Eu(Li);
  },
  useDebugValue: ed,
  useDeferredValue: function(e) {
    var t = Ut();
    return yg(t, Qe.memoizedState, e);
  },
  useTransition: function() {
    var e = Eu(Li)[0], t = Ut().memoizedState;
    return [e, t];
  },
  useMutableSource: og,
  useSyncExternalStore: ig,
  useId: vg,
  unstable_isNewReconciler: !1
}, lT = { readContext: Ft, useCallback: hg, useContext: Ft, useEffect: $f, useImperativeHandle: mg, useInsertionEffect: dg, useLayoutEffect: Ag, useMemo: gg, useReducer: Tu, useRef: fg, useState: function() {
  return Tu(Li);
}, useDebugValue: ed, useDeferredValue: function(e) {
  var t = Ut();
  return Qe === null ? t.memoizedState = e : yg(t, Qe.memoizedState, e);
}, useTransition: function() {
  var e = Tu(Li)[0], t = Ut().memoizedState;
  return [e, t];
}, useMutableSource: og, useSyncExternalStore: ig, useId: vg, unstable_isNewReconciler: !1 };
function Wt(e, t) {
  if (e && e.defaultProps) {
    t = Pe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Tc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Pe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ml = { isMounted: function(e) {
  return (e = e._reactInternals) ? xr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ft(), o = tr(e), i = Sn(r, o);
  i.payload = t, n != null && (i.callback = n), t = $n(e, i, o), t !== null && (en(t, e, o, r), _s(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ft(), o = tr(e), i = Sn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = $n(e, i, o), t !== null && (en(t, e, o, r), _s(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ft(), r = tr(e), o = Sn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = $n(e, o, r), t !== null && (en(t, e, r, n), _s(t, e, r));
} };
function up(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Bi(n, r) || !Bi(o, i) : !0;
}
function Cg(e, t, n) {
  var r = !1, o = ir, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ft(i) : (o = gt(t) ? Pr : it.current, r = t.contextTypes, i = (r = r != null) ? yo(e, o) : ir), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ml, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function cp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ml.enqueueReplaceState(t, t.state, null);
}
function Cc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Xf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Ft(i) : (i = gt(t) ? Pr : it.current, o.context = yo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Tc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ml.enqueueReplaceState(o, o.state, null), ka(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function To(e, t) {
  try {
    var n = "", r = t;
    do
      n += z1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Cu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var uT = typeof WeakMap == "function" ? WeakMap : Map;
function Pg(e, t, n) {
  n = Sn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ba || (ba = !0, Ic = r), Pc(e, t);
  }, n;
}
function kg(e, t, n) {
  n = Sn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Pc(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Pc(e, t), typeof r != "function" && (er === null ? er = /* @__PURE__ */ new Set([this]) : er.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function fp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uT();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = CT.bind(null, e, t, n), t.then(e, e));
}
function dp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ap(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Sn(-1, 1), t.tag = 2, $n(n, t, 1))), n.lanes |= 1), e);
}
var cT = xn.ReactCurrentOwner, mt = !1;
function ct(e, t, n, r) {
  t.child = e === null ? eg(t, null, n, r) : wo(t, e.child, n, r);
}
function pp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return po(t, o), r = qf(e, t, n, r, i, o), n = _f(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nn(e, t, o)) : (we && n && Hf(t), t.flags |= 1, ct(e, t, r, o), t.child);
}
function mp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ld(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Sg(e, t, i, r, o)) : (e = oa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Bi, n(s, r) && e.ref === t.ref)
      return Nn(e, t, o);
  }
  return t.flags |= 1, e = nr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Sg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bi(i, r) && e.ref === t.ref)
      if (mt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (mt = !0);
      else
        return t.lanes = e.lanes, Nn(e, t, o);
  }
  return kc(e, t, n, r, o);
}
function Dg(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ge(io, Et), Et |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ge(io, Et), Et |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ge(io, Et), Et |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ge(io, Et), Et |= r;
  return ct(e, t, o, n), t.child;
}
function Bg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function kc(e, t, n, r, o) {
  var i = gt(n) ? Pr : it.current;
  return i = yo(t, i), po(t, o), n = qf(e, t, n, r, i, o), r = _f(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nn(e, t, o)) : (we && r && Hf(t), t.flags |= 1, ct(e, t, n, o), t.child);
}
function hp(e, t, n, r, o) {
  if (gt(n)) {
    var i = !0;
    wa(t);
  } else
    i = !1;
  if (po(t, o), t.stateNode === null)
    ta(e, t), Cg(t, n, r), Cc(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Ft(u) : (u = gt(n) ? Pr : it.current, u = yo(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && cp(t, s, r, u), Fn = !1;
    var A = t.memoizedState;
    s.state = A, ka(t, r, s, o), l = t.memoizedState, a !== r || A !== l || ht.current || Fn ? (typeof c == "function" && (Tc(t, n, c, r), l = t.memoizedState), (a = Fn || up(t, n, a, r, A, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, ng(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Wt(t.type, a), s.props = u, f = t.pendingProps, A = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Ft(l) : (l = gt(n) ? Pr : it.current, l = yo(t, l));
    var E = n.getDerivedStateFromProps;
    (c = typeof E == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || A !== l) && cp(t, s, r, l), Fn = !1, A = t.memoizedState, s.state = A, ka(t, r, s, o);
    var g = t.memoizedState;
    a !== f || A !== g || ht.current || Fn ? (typeof E == "function" && (Tc(t, n, E, r), g = t.memoizedState), (u = Fn || up(t, n, u, r, A, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Sc(e, t, n, r, i, o);
}
function Sc(e, t, n, r, o, i) {
  Bg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return o && tp(t, n, !1), Nn(e, t, i);
  r = t.stateNode, cT.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = wo(t, e.child, null, i), t.child = wo(t, null, a, i)) : ct(e, t, a, i), t.memoizedState = r.state, o && tp(t, n, !0), t.child;
}
function Og(e) {
  var t = e.stateNode;
  t.pendingContext ? ep(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ep(e, t.context, !1), Zf(e, t.containerInfo);
}
function gp(e, t, n, r, o) {
  return vo(), Uf(o), t.flags |= 256, ct(e, t, n, r), t.child;
}
var Dc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bg(e, t, n) {
  var r = t.pendingProps, o = Te.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ge(Te, o & 1), e === null)
    return wc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = yl(s, r, 0, null), e = Tr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Bc(n), t.memoizedState = Dc, e) : td(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return fT(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = nr(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = nr(a, i) : (i = Tr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Bc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Dc, r;
  }
  return i = e.child, e = i.sibling, r = nr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function td(e, t) {
  return t = yl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ss(e, t, n, r) {
  return r !== null && Uf(r), wo(t, e.child, null, n), e = td(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function fT(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Cu(Error(I(422))), Ss(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = yl({ mode: "visible", children: r.children }, o, 0, null), i = Tr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && wo(t, e.child, null, s), t.child.memoizedState = Bc(s), t.memoizedState = Dc, i);
  if (!(t.mode & 1))
    return Ss(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(I(419)), r = Cu(i, r, void 0), Ss(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, mt || a) {
    if (r = Ge, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, bn(e, o), en(r, e, o, -1));
    }
    return ad(), r = Cu(Error(I(421))), Ss(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = PT.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Pt = _n(o.nextSibling), St = t, we = !0, Jt = null, e !== null && (Mt[It++] = Pn, Mt[It++] = kn, Mt[It++] = kr, Pn = e.id, kn = e.overflow, kr = t), t = td(t, r.children), t.flags |= 4096, t);
}
function yp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ec(e.return, t, n);
}
function Pu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Ng(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ct(e, t, r.children, n), r = Te.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && yp(e, n, t);
          else if (e.tag === 19)
            yp(e, n, t);
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
  if (ge(Te, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Sa(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Pu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Sa(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Pu(t, !0, n, null, i);
        break;
      case "together":
        Pu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ta(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Nn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Dr |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, n = nr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = nr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function dT(e, t, n) {
  switch (t.tag) {
    case 3:
      Og(t), vo();
      break;
    case 5:
      rg(t);
      break;
    case 1:
      gt(t.type) && wa(t);
      break;
    case 4:
      Zf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ge(Ca, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ge(Te, Te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bg(e, t, n) : (ge(Te, Te.current & 1), e = Nn(e, t, n), e !== null ? e.sibling : null);
      ge(Te, Te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Ng(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ge(Te, Te.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dg(e, t, n);
  }
  return Nn(e, t, n);
}
var xg, Oc, Mg, Ig;
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
Oc = function() {
};
Mg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, wr(gn.current);
    var i = null;
    switch (n) {
      case "input":
        o = qu(e, o), r = qu(e, r), i = [];
        break;
      case "select":
        o = Pe({}, o, { value: void 0 }), r = Pe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ec(e, o), r = ec(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ya);
    }
    nc(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a)
            a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ei.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ei.hasOwnProperty(u) ? (l != null && u === "onScroll" && ye("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ig = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xo(e, t) {
  if (!we)
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
function nt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function AT(e, t, n) {
  var r = t.pendingProps;
  switch (Ff(t), t.tag) {
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
      return nt(t), null;
    case 1:
      return gt(t.type) && va(), nt(t), null;
    case 3:
      return r = t.stateNode, Eo(), ve(ht), ve(it), Vf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ps(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Jt !== null && (Rc(Jt), Jt = null))), Oc(e, t), nt(t), null;
    case 5:
      Wf(t);
      var o = wr(Mi.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Mg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(I(166));
          return nt(t), null;
        }
        if (e = wr(gn.current), Ps(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[pn] = t, r[Ni] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ye("cancel", r), ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ni.length; o++)
                ye(ni[o], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ye(
                "error",
                r
              ), ye("load", r);
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              DA(r, i), ye("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ye("invalid", r);
              break;
            case "textarea":
              OA(r, i), ye("invalid", r);
          }
          nc(n, i), o = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Cs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Cs(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : Ei.hasOwnProperty(s) && a != null && s === "onScroll" && ye("scroll", r);
            }
          switch (n) {
            case "input":
              ms(r), BA(r, i, !0);
              break;
            case "textarea":
              ms(r), bA(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ya);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = lh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[pn] = t, e[Ni] = r, xg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = rc(n, r), n) {
              case "dialog":
                ye("cancel", e), ye("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ni.length; o++)
                  ye(ni[o], e);
                o = r;
                break;
              case "source":
                ye("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ye(
                  "error",
                  e
                ), ye("load", e), o = r;
                break;
              case "details":
                ye("toggle", e), o = r;
                break;
              case "input":
                DA(e, r), o = qu(e, r), ye("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Pe({}, r, { value: void 0 }), ye("invalid", e);
                break;
              case "textarea":
                OA(e, r), o = ec(e, r), ye("invalid", e);
                break;
              default:
                o = r;
            }
            nc(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? fh(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && uh(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ti(e, l) : typeof l == "number" && Ti(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ei.hasOwnProperty(i) ? l != null && i === "onScroll" && ye("scroll", e) : l != null && kf(e, i, l, s));
              }
            switch (n) {
              case "input":
                ms(e), BA(e, r, !1);
                break;
              case "textarea":
                ms(e), bA(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + or(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? uo(e, !!r.multiple, i, !1) : r.defaultValue != null && uo(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ya);
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
      return nt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Ig(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(I(166));
        if (n = wr(Mi.current), wr(gn.current), Ps(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[pn] = t, (i = r.nodeValue !== n) && (e = St, e !== null))
            switch (e.tag) {
              case 3:
                Cs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Cs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[pn] = t, t.stateNode = r;
      }
      return nt(t), null;
    case 13:
      if (ve(Te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (we && Pt !== null && t.mode & 1 && !(t.flags & 128))
          _h(), vo(), t.flags |= 98560, i = !1;
        else if (i = Ps(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(I(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(I(317));
            i[pn] = t;
          } else
            vo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          nt(t), i = !1;
        } else
          Jt !== null && (Rc(Jt), Jt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Te.current & 1 ? He === 0 && (He = 3) : ad())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
    case 4:
      return Eo(), Oc(e, t), e === null && Oi(t.stateNode.containerInfo), nt(t), null;
    case 10:
      return Yf(t.type._context), nt(t), null;
    case 17:
      return gt(t.type) && va(), nt(t), null;
    case 19:
      if (ve(Te), i = t.memoizedState, i === null)
        return nt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r)
          Xo(i, !1);
        else {
          if (He !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = Sa(e), s !== null) {
                for (t.flags |= 128, Xo(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ge(Te, Te.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ne() > Co && (t.flags |= 128, r = !0, Xo(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Sa(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Xo(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !we)
              return nt(t), null;
          } else
            2 * Ne() - i.renderingStartTime > Co && n !== 1073741824 && (t.flags |= 128, r = !0, Xo(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ne(), t.sibling = null, n = Te.current, ge(Te, r ? n & 1 | 2 : n & 1), t) : (nt(t), null);
    case 22:
    case 23:
      return sd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Et & 1073741824 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function pT(e, t) {
  switch (Ff(t), t.tag) {
    case 1:
      return gt(t.type) && va(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Eo(), ve(ht), ve(it), Vf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Wf(t), null;
    case 13:
      if (ve(Te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(I(340));
        vo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ve(Te), null;
    case 4:
      return Eo(), null;
    case 10:
      return Yf(t.type._context), null;
    case 22:
    case 23:
      return sd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ds = !1, ot = !1, mT = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function oo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Oe(e, t, r);
      }
    else
      n.current = null;
}
function bc(e, t, n) {
  try {
    n();
  } catch (r) {
    Oe(e, t, r);
  }
}
var vp = !1;
function hT(e, t) {
  if (Ac = ma, e = Hh(), Qf(e)) {
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
          var s = 0, a = -1, l = -1, u = 0, c = 0, f = e, A = null;
          t:
            for (; ; ) {
              for (var E; f !== n || o !== 0 && f.nodeType !== 3 || (a = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (E = f.firstChild) !== null; )
                A = f, f = E;
              for (; ; ) {
                if (f === e)
                  break t;
                if (A === n && ++u === o && (a = s), A === i && ++c === r && (l = s), (E = f.nextSibling) !== null)
                  break;
                f = A, A = f.parentNode;
              }
              f = E;
            }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (pc = { focusedElem: e, selectionRange: n }, ma = !1, j = t; j !== null; )
    if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, j = e;
    else
      for (; j !== null; ) {
        t = j;
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
                  var v = g.memoizedProps, B = g.memoizedState, d = t.stateNode, p = d.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Wt(t.type, v), B);
                  d.__reactInternalSnapshotBeforeUpdate = p;
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
                throw Error(I(163));
            }
        } catch (T) {
          Oe(t, t.return, T);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, j = e;
          break;
        }
        j = t.return;
      }
  return g = vp, vp = !1, g;
}
function Ai(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && bc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function hl(e, t) {
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
function Nc(e) {
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
function Lg(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Lg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[pn], delete t[Ni], delete t[gc], delete t[_E], delete t[$E])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function zg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wp(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || zg(e.return))
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
function xc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ya));
  else if (r !== 4 && (e = e.child, e !== null))
    for (xc(e, t, n), e = e.sibling; e !== null; )
      xc(e, t, n), e = e.sibling;
}
function Mc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Mc(e, t, n), e = e.sibling; e !== null; )
      Mc(e, t, n), e = e.sibling;
}
var We = null, Vt = !1;
function Rn(e, t, n) {
  for (n = n.child; n !== null; )
    Rg(e, t, n), n = n.sibling;
}
function Rg(e, t, n) {
  if (hn && typeof hn.onCommitFiberUnmount == "function")
    try {
      hn.onCommitFiberUnmount(ll, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ot || oo(n, t);
    case 6:
      var r = We, o = Vt;
      We = null, Rn(e, t, n), We = r, Vt = o, We !== null && (Vt ? (e = We, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : We.removeChild(n.stateNode));
      break;
    case 18:
      We !== null && (Vt ? (e = We, n = n.stateNode, e.nodeType === 8 ? gu(e.parentNode, n) : e.nodeType === 1 && gu(e, n), Si(e)) : gu(We, n.stateNode));
      break;
    case 4:
      r = We, o = Vt, We = n.stateNode.containerInfo, Vt = !0, Rn(e, t, n), We = r, Vt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ot && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && bc(n, t, s), o = o.next;
        } while (o !== r);
      }
      Rn(e, t, n);
      break;
    case 1:
      if (!ot && (oo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Oe(n, t, a);
        }
      Rn(e, t, n);
      break;
    case 21:
      Rn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ot = (r = ot) || n.memoizedState !== null, Rn(e, t, n), ot = r) : Rn(e, t, n);
      break;
    default:
      Rn(e, t, n);
  }
}
function Ep(e) {
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
function Xt(e, t) {
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
                We = a.stateNode, Vt = !1;
                break e;
              case 3:
                We = a.stateNode.containerInfo, Vt = !0;
                break e;
              case 4:
                We = a.stateNode.containerInfo, Vt = !0;
                break e;
            }
            a = a.return;
          }
        if (We === null)
          throw Error(I(160));
        Rg(i, s, o), We = null, Vt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        Oe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Qg(t, e), t = t.sibling;
}
function Qg(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xt(t, e), ln(e), r & 4) {
        try {
          Ai(3, e, e.return), hl(3, e);
        } catch (v) {
          Oe(e, e.return, v);
        }
        try {
          Ai(5, e, e.return);
        } catch (v) {
          Oe(e, e.return, v);
        }
      }
      break;
    case 1:
      Xt(t, e), ln(e), r & 512 && n !== null && oo(n, n.return);
      break;
    case 5:
      if (Xt(t, e), ln(e), r & 512 && n !== null && oo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ti(o, "");
        } catch (v) {
          Oe(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && sh(o, i), rc(a, s);
            var u = rc(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s], f = l[s + 1];
              c === "style" ? fh(o, f) : c === "dangerouslySetInnerHTML" ? uh(o, f) : c === "children" ? Ti(o, f) : kf(o, c, f, u);
            }
            switch (a) {
              case "input":
                _u(o, i);
                break;
              case "textarea":
                ah(o, i);
                break;
              case "select":
                var A = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var E = i.value;
                E != null ? uo(o, !!i.multiple, E, !1) : A !== !!i.multiple && (i.defaultValue != null ? uo(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : uo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ni] = i;
          } catch (v) {
            Oe(e, e.return, v);
          }
      }
      break;
    case 6:
      if (Xt(t, e), ln(e), r & 4) {
        if (e.stateNode === null)
          throw Error(I(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          Oe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Xt(t, e), ln(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Si(t.containerInfo);
        } catch (v) {
          Oe(e, e.return, v);
        }
      break;
    case 4:
      Xt(t, e), ln(e);
      break;
    case 13:
      Xt(t, e), ln(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (od = Ne())), r & 4 && Ep(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ot = (u = ot) || c, Xt(t, e), ot = u) : Xt(t, e), ln(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (j = e, c = e.child; c !== null; ) {
            for (f = j = c; j !== null; ) {
              switch (A = j, E = A.child, A.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ai(4, A, A.return);
                  break;
                case 1:
                  oo(A, A.return);
                  var g = A.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = A, n = A.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (v) {
                      Oe(r, n, v);
                    }
                  }
                  break;
                case 5:
                  oo(A, A.return);
                  break;
                case 22:
                  if (A.memoizedState !== null) {
                    Cp(f);
                    continue;
                  }
              }
              E !== null ? (E.return = A, j = E) : Cp(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = ch("display", s));
                } catch (v) {
                  Oe(e, e.return, v);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (v) {
                  Oe(e, e.return, v);
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
      Xt(t, e), ln(e), r & 4 && Ep(e);
      break;
    case 21:
      break;
    default:
      Xt(
        t,
        e
      ), ln(e);
  }
}
function ln(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zg(n)) {
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
          r.flags & 32 && (Ti(o, ""), r.flags &= -33);
          var i = wp(e);
          Mc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = wp(e);
          xc(e, a, s);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      Oe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gT(e, t, n) {
  j = e, Hg(e);
}
function Hg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ds;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || ot;
        a = Ds;
        var u = ot;
        if (Ds = s, (ot = l) && !u)
          for (j = o; j !== null; )
            s = j, l = s.child, s.tag === 22 && s.memoizedState !== null ? Pp(o) : l !== null ? (l.return = s, j = l) : Pp(o);
        for (; i !== null; )
          j = i, Hg(i), i = i.sibling;
        j = o, Ds = a, ot = u;
      }
      Tp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, j = i) : Tp(e);
  }
}
function Tp(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ot || hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ot)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && sp(t, i, r);
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
                sp(t, s, n);
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
                    f !== null && Si(f);
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
        ot || t.flags & 512 && Nc(t);
      } catch (A) {
        Oe(t, t.return, A);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function Cp(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function Pp(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hl(4, t);
          } catch (l) {
            Oe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Oe(t, o, l);
            }
          }
          var i = t.return;
          try {
            Nc(t);
          } catch (l) {
            Oe(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Nc(t);
          } catch (l) {
            Oe(t, s, l);
          }
      }
    } catch (l) {
      Oe(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, j = a;
      break;
    }
    j = t.return;
  }
}
var yT = Math.ceil, Oa = xn.ReactCurrentDispatcher, nd = xn.ReactCurrentOwner, Ht = xn.ReactCurrentBatchConfig, se = 0, Ge = null, Le = null, _e = 0, Et = 0, io = lr(0), He = 0, Ri = null, Dr = 0, gl = 0, rd = 0, pi = null, pt = null, od = 0, Co = 1 / 0, wn = null, ba = !1, Ic = null, er = null, Bs = !1, Kn = null, Na = 0, mi = 0, Lc = null, na = -1, ra = 0;
function ft() {
  return se & 6 ? Ne() : na !== -1 ? na : na = Ne();
}
function tr(e) {
  return e.mode & 1 ? se & 2 && _e !== 0 ? _e & -_e : tT.transition !== null ? (ra === 0 && (ra = Ch()), ra) : (e = Ae, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bh(e.type)), e) : 1;
}
function en(e, t, n, r) {
  if (50 < mi)
    throw mi = 0, Lc = null, Error(I(185));
  qi(e, n, r), (!(se & 2) || e !== Ge) && (e === Ge && (!(se & 2) && (gl |= n), He === 4 && jn(e, _e)), yt(e, r), n === 1 && se === 0 && !(t.mode & 1) && (Co = Ne() + 500, Al && ur()));
}
function yt(e, t) {
  var n = e.callbackNode;
  tE(e, t);
  var r = pa(e, e === Ge ? _e : 0);
  if (r === 0)
    n !== null && MA(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && MA(n), t === 1)
      e.tag === 0 ? eT(kp.bind(null, e)) : Vh(kp.bind(null, e)), JE(function() {
        !(se & 6) && ur();
      }), n = null;
    else {
      switch (Ph(r)) {
        case 1:
          n = bf;
          break;
        case 4:
          n = Eh;
          break;
        case 16:
          n = Aa;
          break;
        case 536870912:
          n = Th;
          break;
        default:
          n = Aa;
      }
      n = Zg(n, Fg.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Fg(e, t) {
  if (na = -1, ra = 0, se & 6)
    throw Error(I(327));
  var n = e.callbackNode;
  if (mo() && e.callbackNode !== n)
    return null;
  var r = pa(e, e === Ge ? _e : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = xa(e, r);
  else {
    t = r;
    var o = se;
    se |= 2;
    var i = jg();
    (Ge !== e || _e !== t) && (wn = null, Co = Ne() + 500, Er(e, t));
    do
      try {
        ET();
        break;
      } catch (a) {
        Ug(e, a);
      }
    while (1);
    Gf(), Oa.current = i, se = o, Le !== null ? t = 0 : (Ge = null, _e = 0, t = He);
  }
  if (t !== 0) {
    if (t === 2 && (o = lc(e), o !== 0 && (r = o, t = zc(e, o))), t === 1)
      throw n = Ri, Er(e, 0), jn(e, r), yt(e, Ne()), n;
    if (t === 6)
      jn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !vT(o) && (t = xa(e, r), t === 2 && (i = lc(e), i !== 0 && (r = i, t = zc(e, i))), t === 1))
        throw n = Ri, Er(e, 0), jn(e, r), yt(e, Ne()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          hr(e, pt, wn);
          break;
        case 3:
          if (jn(e, r), (r & 130023424) === r && (t = od + 500 - Ne(), 10 < t)) {
            if (pa(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ft(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = hc(hr.bind(null, e, pt, wn), t);
            break;
          }
          hr(e, pt, wn);
          break;
        case 4:
          if (jn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - $t(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yT(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = hc(hr.bind(null, e, pt, wn), r);
            break;
          }
          hr(e, pt, wn);
          break;
        case 5:
          hr(e, pt, wn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return yt(e, Ne()), e.callbackNode === n ? Fg.bind(null, e) : null;
}
function zc(e, t) {
  var n = pi;
  return e.current.memoizedState.isDehydrated && (Er(e, t).flags |= 256), e = xa(e, t), e !== 2 && (t = pt, pt = n, t !== null && Rc(t)), e;
}
function Rc(e) {
  pt === null ? pt = e : pt.push.apply(pt, e);
}
function vT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!tn(i(), o))
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
function jn(e, t) {
  for (t &= ~rd, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $t(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function kp(e) {
  if (se & 6)
    throw Error(I(327));
  mo();
  var t = pa(e, 0);
  if (!(t & 1))
    return yt(e, Ne()), null;
  var n = xa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = lc(e);
    r !== 0 && (t = r, n = zc(e, r));
  }
  if (n === 1)
    throw n = Ri, Er(e, 0), jn(e, t), yt(e, Ne()), n;
  if (n === 6)
    throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, hr(e, pt, wn), yt(e, Ne()), null;
}
function id(e, t) {
  var n = se;
  se |= 1;
  try {
    return e(t);
  } finally {
    se = n, se === 0 && (Co = Ne() + 500, Al && ur());
  }
}
function Br(e) {
  Kn !== null && Kn.tag === 0 && !(se & 6) && mo();
  var t = se;
  se |= 1;
  var n = Ht.transition, r = Ae;
  try {
    if (Ht.transition = null, Ae = 1, e)
      return e();
  } finally {
    Ae = r, Ht.transition = n, se = t, !(se & 6) && ur();
  }
}
function sd() {
  Et = io.current, ve(io);
}
function Er(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, VE(n)), Le !== null)
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch (Ff(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && va();
          break;
        case 3:
          Eo(), ve(ht), ve(it), Vf();
          break;
        case 5:
          Wf(r);
          break;
        case 4:
          Eo();
          break;
        case 13:
          ve(Te);
          break;
        case 19:
          ve(Te);
          break;
        case 10:
          Yf(r.type._context);
          break;
        case 22:
        case 23:
          sd();
      }
      n = n.return;
    }
  if (Ge = e, Le = e = nr(e.current, null), _e = Et = t, He = 0, Ri = null, rd = gl = Dr = 0, pt = pi = null, vr !== null) {
    for (t = 0; t < vr.length; t++)
      if (n = vr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = o, r.next = s;
        }
        n.pending = r;
      }
    vr = null;
  }
  return e;
}
function Ug(e, t) {
  do {
    var n = Le;
    try {
      if (Gf(), $s.current = Ba, Da) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Da = !1;
      }
      if (Sr = 0, je = Qe = Ce = null, di = !1, Ii = 0, nd.current = null, n === null || n.return === null) {
        He = 1, Ri = t, Le = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = _e, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var A = c.alternate;
            A ? (c.updateQueue = A.updateQueue, c.memoizedState = A.memoizedState, c.lanes = A.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var E = dp(s);
          if (E !== null) {
            E.flags &= -257, Ap(E, s, a, i, t), E.mode & 1 && fp(i, u, t), t = E, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else
              g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              fp(i, u, t), ad();
              break e;
            }
            l = Error(I(426));
          }
        } else if (we && a.mode & 1) {
          var B = dp(s);
          if (B !== null) {
            !(B.flags & 65536) && (B.flags |= 256), Ap(B, s, a, i, t), Uf(To(l, a));
            break e;
          }
        }
        i = l = To(l, a), He !== 4 && (He = 2), pi === null ? pi = [i] : pi.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Pg(i, l, t);
              ip(i, d);
              break e;
            case 1:
              a = l;
              var p = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (er === null || !er.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var T = kg(i, a, t);
                ip(i, T);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Yg(n);
    } catch (O) {
      t = O, Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function jg() {
  var e = Oa.current;
  return Oa.current = Ba, e === null ? Ba : e;
}
function ad() {
  (He === 0 || He === 3 || He === 2) && (He = 4), Ge === null || !(Dr & 268435455) && !(gl & 268435455) || jn(Ge, _e);
}
function xa(e, t) {
  var n = se;
  se |= 2;
  var r = jg();
  (Ge !== e || _e !== t) && (wn = null, Er(e, t));
  do
    try {
      wT();
      break;
    } catch (o) {
      Ug(e, o);
    }
  while (1);
  if (Gf(), se = n, Oa.current = r, Le !== null)
    throw Error(I(261));
  return Ge = null, _e = 0, He;
}
function wT() {
  for (; Le !== null; )
    Gg(Le);
}
function ET() {
  for (; Le !== null && !X1(); )
    Gg(Le);
}
function Gg(e) {
  var t = Xg(e.alternate, e, Et);
  e.memoizedProps = e.pendingProps, t === null ? Yg(e) : Le = t, nd.current = null;
}
function Yg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = pT(n, t), n !== null) {
        n.flags &= 32767, Le = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        He = 6, Le = null;
        return;
      }
    } else if (n = AT(n, t, Et), n !== null) {
      Le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  He === 0 && (He = 5);
}
function hr(e, t, n) {
  var r = Ae, o = Ht.transition;
  try {
    Ht.transition = null, Ae = 1, TT(e, t, n, r);
  } finally {
    Ht.transition = o, Ae = r;
  }
  return null;
}
function TT(e, t, n, r) {
  do
    mo();
  while (Kn !== null);
  if (se & 6)
    throw Error(I(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (nE(e, i), e === Ge && (Le = Ge = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bs || (Bs = !0, Zg(Aa, function() {
    return mo(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ht.transition, Ht.transition = null;
    var s = Ae;
    Ae = 1;
    var a = se;
    se |= 4, nd.current = null, hT(e, n), Qg(n, e), jE(pc), ma = !!Ac, pc = Ac = null, e.current = n, gT(n), Z1(), se = a, Ae = s, Ht.transition = i;
  } else
    e.current = n;
  if (Bs && (Bs = !1, Kn = e, Na = o), i = e.pendingLanes, i === 0 && (er = null), J1(n.stateNode), yt(e, Ne()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ba)
    throw ba = !1, e = Ic, Ic = null, e;
  return Na & 1 && e.tag !== 0 && mo(), i = e.pendingLanes, i & 1 ? e === Lc ? mi++ : (mi = 0, Lc = e) : mi = 0, ur(), null;
}
function mo() {
  if (Kn !== null) {
    var e = Ph(Na), t = Ht.transition, n = Ae;
    try {
      if (Ht.transition = null, Ae = 16 > e ? 16 : e, Kn === null)
        var r = !1;
      else {
        if (e = Kn, Kn = null, Na = 0, se & 6)
          throw Error(I(331));
        var o = se;
        for (se |= 4, j = e.current; j !== null; ) {
          var i = j, s = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ai(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, j = f;
                  else
                    for (; j !== null; ) {
                      c = j;
                      var A = c.sibling, E = c.return;
                      if (Lg(c), c === u) {
                        j = null;
                        break;
                      }
                      if (A !== null) {
                        A.return = E, j = A;
                        break;
                      }
                      j = E;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var B = v.sibling;
                    v.sibling = null, v = B;
                  } while (v !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null)
            s.return = i, j = s;
          else
            e:
              for (; j !== null; ) {
                if (i = j, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ai(9, i, i.return);
                  }
                var d = i.sibling;
                if (d !== null) {
                  d.return = i.return, j = d;
                  break e;
                }
                j = i.return;
              }
        }
        var p = e.current;
        for (j = p; j !== null; ) {
          s = j;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null)
            h.return = s, j = h;
          else
            e:
              for (s = p; j !== null; ) {
                if (a = j, a.flags & 2048)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hl(9, a);
                    }
                  } catch (O) {
                    Oe(a, a.return, O);
                  }
                if (a === s) {
                  j = null;
                  break e;
                }
                var T = a.sibling;
                if (T !== null) {
                  T.return = a.return, j = T;
                  break e;
                }
                j = a.return;
              }
        }
        if (se = o, ur(), hn && typeof hn.onPostCommitFiberRoot == "function")
          try {
            hn.onPostCommitFiberRoot(ll, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      Ae = n, Ht.transition = t;
    }
  }
  return !1;
}
function Sp(e, t, n) {
  t = To(n, t), t = Pg(e, t, 1), e = $n(e, t, 1), t = ft(), e !== null && (qi(e, 1, t), yt(e, t));
}
function Oe(e, t, n) {
  if (e.tag === 3)
    Sp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (er === null || !er.has(r))) {
          e = To(n, e), e = kg(t, e, 1), t = $n(t, e, 1), e = ft(), t !== null && (qi(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function CT(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & n, Ge === e && (_e & n) === n && (He === 4 || He === 3 && (_e & 130023424) === _e && 500 > Ne() - od ? Er(e, 0) : rd |= n), yt(e, t);
}
function Kg(e, t) {
  t === 0 && (e.mode & 1 ? (t = ys, ys <<= 1, !(ys & 130023424) && (ys = 4194304)) : t = 1);
  var n = ft();
  e = bn(e, t), e !== null && (qi(e, t, n), yt(e, n));
}
function PT(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Kg(e, n);
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
      throw Error(I(314));
  }
  r !== null && r.delete(t), Kg(e, n);
}
var Xg;
Xg = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ht.current)
      mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return mt = !1, dT(e, t, n);
      mt = !!(e.flags & 131072);
    }
  else
    mt = !1, we && t.flags & 1048576 && Jh(t, Ta, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ta(e, t), e = t.pendingProps;
      var o = yo(t, it.current);
      po(t, n), o = qf(null, t, r, e, o, n);
      var i = _f();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gt(r) ? (i = !0, wa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Xf(t), o.updater = ml, t.stateNode = o, o._reactInternals = t, Cc(t, r, e, n), t = Sc(null, t, r, !0, i, n)) : (t.tag = 0, we && i && Hf(t), ct(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ta(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = DT(r), e = Wt(r, e), o) {
          case 0:
            t = kc(null, t, r, e, n);
            break e;
          case 1:
            t = hp(null, t, r, e, n);
            break e;
          case 11:
            t = pp(null, t, r, e, n);
            break e;
          case 14:
            t = mp(null, t, r, Wt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Wt(r, o), kc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Wt(r, o), hp(e, t, r, o, n);
    case 3:
      e: {
        if (Og(t), e === null)
          throw Error(I(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, ng(e, t), ka(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = To(Error(I(423)), t), t = gp(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = To(Error(I(424)), t), t = gp(e, t, r, n, o);
            break e;
          } else
            for (Pt = _n(t.stateNode.containerInfo.firstChild), St = t, we = !0, Jt = null, n = eg(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (vo(), r === o) {
            t = Nn(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return rg(t), e === null && wc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, mc(r, o) ? s = null : i !== null && mc(r, i) && (t.flags |= 32), Bg(e, t), ct(e, t, s, n), t.child;
    case 6:
      return e === null && wc(t), null;
    case 13:
      return bg(e, t, n);
    case 4:
      return Zf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wo(t, null, r, n) : ct(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Wt(r, o), pp(e, t, r, o, n);
    case 7:
      return ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ge(Ca, r._currentValue), r._currentValue = s, i !== null)
          if (tn(i.value, s)) {
            if (i.children === o.children && !ht.current) {
              t = Nn(e, t, n);
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
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Ec(
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
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Ec(s, n, t), s = i.sibling;
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
        ct(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, po(t, n), o = Ft(o), r = r(o), t.flags |= 1, ct(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Wt(r, t.pendingProps), o = Wt(r.type, o), mp(e, t, r, o, n);
    case 15:
      return Sg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Wt(r, o), ta(e, t), t.tag = 1, gt(r) ? (e = !0, wa(t)) : e = !1, po(t, n), Cg(t, r, o), Cc(t, r, o, n), Sc(null, t, r, !0, e, n);
    case 19:
      return Ng(e, t, n);
    case 22:
      return Dg(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Zg(e, t) {
  return wh(e, t);
}
function ST(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Rt(e, t, n, r) {
  return new ST(e, t, n, r);
}
function ld(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function DT(e) {
  if (typeof e == "function")
    return ld(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Df)
      return 11;
    if (e === Bf)
      return 14;
  }
  return 2;
}
function nr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function oa(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function")
    ld(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case Vr:
          return Tr(n.children, o, i, t);
        case Sf:
          s = 8, o |= 8;
          break;
        case Zu:
          return e = Rt(12, n, t, o | 2), e.elementType = Zu, e.lanes = i, e;
        case Wu:
          return e = Rt(13, n, t, o), e.elementType = Wu, e.lanes = i, e;
        case Vu:
          return e = Rt(19, n, t, o), e.elementType = Vu, e.lanes = i, e;
        case rh:
          return yl(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case th:
                s = 10;
                break e;
              case nh:
                s = 9;
                break e;
              case Df:
                s = 11;
                break e;
              case Bf:
                s = 14;
                break e;
              case Hn:
                s = 16, r = null;
                break e;
            }
          throw Error(I(130, e == null ? e : typeof e, ""));
      }
  return t = Rt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Tr(e, t, n, r) {
  return e = Rt(7, e, r, t), e.lanes = n, e;
}
function yl(e, t, n, r) {
  return e = Rt(22, e, r, t), e.elementType = rh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ku(e, t, n) {
  return e = Rt(6, e, null, t), e.lanes = n, e;
}
function Su(e, t, n) {
  return t = Rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function BT(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = su(0), this.expirationTimes = su(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = su(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ud(e, t, n, r, o, i, s, a, l) {
  return e = new BT(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Rt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xf(i), e;
}
function OT(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Wr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Wg(e) {
  if (!e)
    return ir;
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
          if (gt(t.type)) {
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
    if (gt(n))
      return Wh(e, n, t);
  }
  return t;
}
function Vg(e, t, n, r, o, i, s, a, l) {
  return e = ud(n, r, !0, e, o, i, s, a, l), e.context = Wg(null), n = e.current, r = ft(), o = tr(n), i = Sn(r, o), i.callback = t ?? null, $n(n, i, o), e.current.lanes = o, qi(e, o, r), yt(e, r), e;
}
function vl(e, t, n, r) {
  var o = t.current, i = ft(), s = tr(o);
  return n = Wg(n), t.context === null ? t.context = n : t.pendingContext = n, t = Sn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $n(o, t, s), e !== null && (en(e, o, s, i), _s(e, o, s)), s;
}
function Ma(e) {
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
function cd(e, t) {
  Dp(e, t), (e = e.alternate) && Dp(e, t);
}
function bT() {
  return null;
}
var Jg = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function fd(e) {
  this._internalRoot = e;
}
wl.prototype.render = fd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(I(409));
  vl(e, t, null, null);
};
wl.prototype.unmount = fd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Br(function() {
      vl(null, e, null, null);
    }), t[On] = null;
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++)
      ;
    Un.splice(n, 0, e), n === 0 && Oh(e);
  }
};
function dd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function El(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Bp() {
}
function NT(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Ma(s);
        i.call(u);
      };
    }
    var s = Vg(t, r, e, 0, null, !1, !1, "", Bp);
    return e._reactRootContainer = s, e[On] = s.current, Oi(e.nodeType === 8 ? e.parentNode : e), Br(), s;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Ma(l);
      a.call(u);
    };
  }
  var l = ud(e, 0, !1, null, null, !1, !1, "", Bp);
  return e._reactRootContainer = l, e[On] = l.current, Oi(e.nodeType === 8 ? e.parentNode : e), Br(function() {
    vl(t, l, n, r);
  }), l;
}
function Tl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = Ma(s);
        a.call(l);
      };
    }
    vl(t, s, e, o);
  } else
    s = NT(n, t, e, o, r);
  return Ma(s);
}
kh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ti(t.pendingLanes);
        n !== 0 && (Nf(t, n | 1), yt(t, Ne()), !(se & 6) && (Co = Ne() + 500, ur()));
      }
      break;
    case 13:
      Br(function() {
        var r = bn(e, 1);
        if (r !== null) {
          var o = ft();
          en(r, e, 1, o);
        }
      }), cd(e, 1);
  }
};
xf = function(e) {
  if (e.tag === 13) {
    var t = bn(e, 134217728);
    if (t !== null) {
      var n = ft();
      en(t, e, 134217728, n);
    }
    cd(e, 134217728);
  }
};
Sh = function(e) {
  if (e.tag === 13) {
    var t = tr(e), n = bn(e, t);
    if (n !== null) {
      var r = ft();
      en(n, e, t, r);
    }
    cd(e, t);
  }
};
Dh = function() {
  return Ae;
};
Bh = function(e, t) {
  var n = Ae;
  try {
    return Ae = e, t();
  } finally {
    Ae = n;
  }
};
ic = function(e, t, n) {
  switch (t) {
    case "input":
      if (_u(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = dl(r);
            if (!o)
              throw Error(I(90));
            ih(r), _u(r, o);
          }
        }
      }
      break;
    case "textarea":
      ah(e, n);
      break;
    case "select":
      t = n.value, t != null && uo(e, !!n.multiple, t, !1);
  }
};
ph = id;
mh = Br;
var xT = { usingClientEntryPoint: !1, Events: [$i, $r, dl, dh, Ah, id] }, Zo = { findFiberByHostInstance: yr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, MT = { bundleType: Zo.bundleType, version: Zo.version, rendererPackageName: Zo.rendererPackageName, rendererConfig: Zo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = yh(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Zo.findFiberByHostInstance || bT, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Os.isDisabled && Os.supportsFiber)
    try {
      ll = Os.inject(MT), hn = Os;
    } catch {
    }
}
Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xT;
Ot.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dd(t))
    throw Error(I(200));
  return OT(e, t, null, n);
};
Ot.createRoot = function(e, t) {
  if (!dd(e))
    throw Error(I(299));
  var n = !1, r = "", o = Jg;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ud(e, 1, !1, null, null, n, !1, r, o), e[On] = t.current, Oi(e.nodeType === 8 ? e.parentNode : e), new fd(t);
};
Ot.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = yh(t), e = e === null ? null : e.stateNode, e;
};
Ot.flushSync = function(e) {
  return Br(e);
};
Ot.hydrate = function(e, t, n) {
  if (!El(t))
    throw Error(I(200));
  return Tl(null, e, t, !0, n);
};
Ot.hydrateRoot = function(e, t, n) {
  if (!dd(e))
    throw Error(I(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Jg;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Vg(t, null, e, 1, n ?? null, o, !1, i, s), e[On] = t.current, Oi(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new wl(t);
};
Ot.render = function(e, t, n) {
  if (!El(t))
    throw Error(I(200));
  return Tl(null, e, t, !1, n);
};
Ot.unmountComponentAtNode = function(e) {
  if (!El(e))
    throw Error(I(40));
  return e._reactRootContainer ? (Br(function() {
    Tl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[On] = null;
    });
  }), !0) : !1;
};
Ot.unstable_batchedUpdates = id;
Ot.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!El(n))
    throw Error(I(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(I(38));
  return Tl(e, t, n, !1, r);
};
Ot.version = "18.3.1-next-f1338f8080-20240426";
function qg() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qg);
    } catch (e) {
      console.error(e);
    }
}
qg(), qm.exports = Ot;
var IT = qm.exports, _g, Op = IT;
_g = Op.createRoot, Op.hydrateRoot;
const bp = "[CHMarketingBuilder]", LT = {
  info: "color:#1565c0;font-weight:bold",
  resolved: "color:#2e7d32;font-weight:bold",
  missing: "color:#e65100;font-weight:bold",
  fallback: "color:#f57c00;font-weight:bold",
  error: "color:#c62828;font-weight:bold"
}, zT = {
  info: "INFO",
  resolved: "OK",
  missing: "MISSING",
  fallback: "FALLBACK",
  error: "ERROR"
};
function RT(e) {
  return e instanceof Error ? e.message : e == null ? "" : String(e);
}
function QT(e, t, n, r) {
  const o = zT[e], i = LT[e];
  console.log(r ? `%c${bp} %c${o}%c ${t}: ${n}
  → ${r}` : `%c${bp} %c${o}%c ${t}: ${n}`, "font-weight:bold", i, "color:inherit");
}
function Cl(e, t, n, r) {
  const o = RT(n);
  QT(e, t, o, r);
}
function ke(e, t) {
  Cl("info", e, t);
}
function Z(e, t) {
  Cl("resolved", e, t);
}
function Ye(e, t, n) {
  Cl("missing", e, t, n);
}
function HT(e, t, n) {
  Cl("fallback", e, t, n);
}
function Or(e) {
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
    const o = Or(r.href) ?? Or(r.entity);
    o != null && t.push(o);
  }
  return t;
}
function Ad(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = t.id ?? t.entityId;
  if (typeof n == "number" && Number.isFinite(n))
    return [n];
  const r = t.parent;
  if (r != null && typeof r == "object") {
    const s = r, a = Or(s.href) ?? Or(s.entity);
    if (a != null)
      return [a];
  }
  const o = br(t.parents);
  if (o.length > 0)
    return o;
  const i = br(t.children);
  return i.length > 0 ? i : [];
}
function st(e, t) {
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
function $g(e, ...t) {
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
        const o = Ad(r);
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
async function nn(e, t, n, r) {
  var s;
  const o = $g(r, n);
  if (o.length > 0)
    return o;
  if (!((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    return [];
  const i = st(r, n);
  if (!i)
    return [];
  try {
    const a = await e.raw.getAsync(i);
    return !a.isSuccessStatusCode || a.content == null ? [] : Ad(a.content);
  } catch {
    return [];
  }
}
async function Qi(e, t, n, r) {
  const o = [...new Set(r)];
  for (const i of o) {
    const s = await nn(e, t, i, n);
    if (s.length > 0)
      return { ids: s, relationName: i };
  }
  return { ids: [] };
}
function Xn(e, t) {
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
const Hi = [
  "templateToZone",
  "templateToTemplateZone",
  "TemplateToZone",
  "TemplateToTemplateZone",
  "EPAM.TemplateToZone",
  "EPAM.TemplateToTemplateZone",
  "templateToEPAM.TemplateZone",
  "EPAM.TemplateZone",
  "TemplateZone"
], Ia = [
  "templateZoneToTemplate",
  "zoneToTemplate",
  "TemplateZoneToTemplate",
  "EPAM.TemplateZoneToTemplate",
  "EPAM.TemplateToTemplateZone",
  "templateToTemplate"
], ey = [
  "templateZoneToAllowedAsset",
  "TemplateZoneToAllowedAsset",
  "EPAM.TemplateZoneToAllowedAsset",
  "templateZoneToAsset",
  "TemplateZoneToAsset",
  "EPAM.TemplateZoneToAsset"
], ty = [
  "templateToAllowedAsset",
  "TemplateToAllowedAsset",
  "EPAM.TemplateToAllowedAsset",
  "templateToAsset",
  "TemplateToAsset",
  "EPAM.TemplateToAsset"
], FT = [
  "zoneType",
  "ZoneType",
  "EPAM.ZoneType",
  "templateZoneType",
  "TemplateZoneType",
  "EPAM.TemplateZoneType"
], ny = [
  "zoneValueToSelectedAsset",
  "ZoneValueToSelectedAsset",
  "EPAM.MarketingAssetZoneValueToSelectedAsset",
  "marketingAssetZoneValueToSelectedAsset",
  "zoneValueToAsset",
  "ZoneValueToAsset"
];
function UT() {
  return "An entity ID is needed. Save this record in Content Hub first, then reload the page.";
}
const Np = /* @__PURE__ */ new Map(), jT = ["EPAM.Template", "Template"], GT = ["EPAM.TemplateZone", "TemplateZone"];
function YT(e) {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
}
function ry(e) {
  if (e == null || typeof e != "object")
    return null;
  const t = e;
  if (Array.isArray(t.member_groups))
    return t;
  const n = t.content;
  return n != null && typeof n == "object" && !Array.isArray(n) ? n : Array.isArray(t.items) && t.items[0] != null && typeof t.items[0] == "object" ? t.items[0] : t;
}
function KT(e) {
  const t = ry(e);
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
      const s = KT(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
function XT(e) {
  const t = ry(e);
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
          target: u ? YT(u) : void 0
        });
      }
  }
  return n;
}
function ZT(e) {
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
async function WT(e, t) {
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
      const s = XT(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
async function VT(e, t) {
  const n = Np.get(t);
  if (n)
    return n;
  const r = await WT(e, t);
  return Np.set(t, r), r;
}
async function za(e, t) {
  for (const n of t) {
    const r = await VT(e, n);
    if (r.length > 0)
      return r;
  }
  return [];
}
async function JT(e) {
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
      const a = ZT(s.content);
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
function Qc(e, t) {
  return !!(e && t.test(e));
}
function qT(e) {
  return Qc(e, /(^|\.)Template$/i) && !Qc(e, /TemplateZone/i);
}
async function Pl(e, t) {
  const [n, r, o] = await Promise.all([
    za(e, jT),
    za(e, GT),
    JT(e)
  ]), i = n.filter((c) => Qc(c.target, /TemplateZone/i)).map((c) => c.name), s = r.filter((c) => qT(c.target)).map((c) => c.name), a = wt(t, /zone/i).filter(
    (c) => !!st(t, c)
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
      ...Ia
    ])
  ];
  return l.length === 0 && u.length === Ia.length ? console.info(
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
function _T(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO template ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function $T(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO zone ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function pd(e, t) {
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
function eC(e, t, n) {
  return {
    entitydefinition: {
      href: pd(e, n)
    },
    properties: t
  };
}
function Ra(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e;
    if (typeof t.href == "string" && t.href.trim())
      return t.href.trim();
  }
}
function tC(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = [];
  if (Array.isArray(t.children))
    for (const o of t.children) {
      const i = Ra(o);
      i && n.push(i);
    }
  const r = Ra(t.child);
  return r && n.push(r), n;
}
function nC(e, t) {
  if (e != null && typeof e == "object") {
    const n = Ra(e.self);
    if (n)
      return n;
  }
  return t;
}
function oy(e, t) {
  if (t) {
    const n = t.match(/^(https?:\/\/[^/]+)/i);
    if (n)
      return `${n[1]}/api/entities/${e}`;
  }
  return `/api/entities/${e}`;
}
async function kl(e, t, n, r) {
  var a;
  const o = st(r, n), i = `/api/entities/${t}/relations/${n}`, s = o ? [.../* @__PURE__ */ new Set([o, i])] : [i];
  if (!((a = e.raw) != null && a.getAsync) || !o)
    return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
  for (const l of [o])
    try {
      const u = await e.raw.getAsync(l);
      if (!u.isSuccessStatusCode || u.content == null)
        continue;
      const c = tC(u.content), f = nC(u.content, l) ?? l;
      return { requestUrls: s, selfHref: f, childHrefs: c };
    } catch {
    }
  return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
}
function iy(e, t) {
  return {
    children: t.map((n) => ({ href: n })),
    self: { href: e }
  };
}
async function Fi(e, t, n) {
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
async function rn(e, t, n, r, o) {
  var u;
  const i = await kl(e, t, r, o), s = oy(n, i.selfHref), a = [...i.childHrefs];
  a.some((c) => Or(c) === Number(n)) || a.push(s);
  const l = iy(i.selfHref, a);
  if (await Fi(e, [...i.requestUrls, i.selfHref], l))
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
  const i = await kl(e, t, r, o), s = i.childHrefs.filter(
    (l) => Or(l) !== Number(n)
  );
  if (s.length === i.childHrefs.length)
    return !0;
  const a = iy(i.selfHref, s);
  return Fi(e, [...i.requestUrls, i.selfHref], a);
}
async function Po(e, t, n, r, o) {
  var l;
  const i = await kl(e, t, r, o), s = oy(n, i.selfHref), a = {
    parent: { href: s },
    self: { href: i.selfHref }
  };
  if (await Fi(e, [...i.requestUrls, i.selfHref], a))
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
async function sy(e, t, n, r, o) {
  var l;
  const i = await kl(e, t, r, o), s = st(o, r) ?? i.selfHref;
  if ((l = e.raw) != null && l.getAsync && st(o, r))
    try {
      const u = await e.raw.getAsync(s);
      if (u.isSuccessStatusCode && u.content != null) {
        const c = Ra(
          u.content.parent
        );
        if (!c || Or(c) !== Number(n))
          return !0;
      }
    } catch {
    }
  const a = {
    parent: null,
    self: { href: i.selfHref }
  };
  return await Fi(e, [...i.requestUrls, i.selfHref], a) ? !0 : Fi(e, [...i.requestUrls, i.selfHref], {
    self: { href: i.selfHref }
  });
}
function hi(e, t, n) {
  const r = wt(t, n), o = r.filter((i) => !!st(t, i));
  return [.../* @__PURE__ */ new Set([...o, ...e, ...r])];
}
function rC(e, t) {
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
function md(e, t, n) {
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
  return rC(t, n) ?? "Text";
}
const oC = ["EPAM.TemplateZone", "TemplateZone"], qt = /* @__PURE__ */ new Map();
let xp = !1, Mp = !1, Ui = [];
function Ip(e, ...t) {
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
  const t = e.properties ?? {}, n = e, r = Object.keys(t), o = Ip(
    t,
    "identifier",
    "Identifier",
    "zoneTypeName",
    "ZoneTypeName",
    "Title",
    "Name",
    "Label",
    "label"
  ) || Xn(n, "zoneType") || Xn(n, "ZoneType");
  if (o)
    return o;
  for (const i of r) {
    const s = Ip(t, i);
    if (s)
      return s;
  }
  return "";
}
function Dl(e, t) {
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
    qt.has(s) || (qt.set(s, String(t)), ke(
      "template zone type",
      `Mapped taxonomy ${t} → "${s}" (from "${e}")`
    ));
    return;
  }
  qt.has(r) || (qt.set(r, String(t)), ke("template zone type", `Mapped taxonomy ${t} → "${r}" (from "${e}")`));
}
function Bl(e) {
  const t = Ui.map((n) => n.name);
  return [
    .../* @__PURE__ */ new Set([
      ...t,
      ...FT,
      ...wt(e, /zone.?type/i)
    ])
  ];
}
function iC(e) {
  return Bl(e.relations).some(
    (t) => {
      var n;
      return !!((n = e.relations) != null && n[t]);
    }
  );
}
function ay(e) {
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
function sC(e) {
  try {
    const n = pd(e).match(/\/entitydefinitions\/([^/?#]+)/i);
    return n != null && n[1] ? decodeURIComponent(n[1]) : "";
  } catch {
    return "";
  }
}
async function aC(e, t, n) {
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
      const l = ay(a.content);
      for (const u of l) {
        const c = await t(String(u)), f = Sl(c);
        f && Dl(f, u);
      }
      if (l.length > 0)
        return Z(
          "template zone type",
          `Loaded ${l.length} taxonomy item(s) from ${n}; mapped ${qt.size} zone type(s)`
        ), l.length;
    } catch {
    }
  return 0;
}
async function ly(e, t, n) {
  const r = Bl(n.relations);
  for (const o of r) {
    const i = await nn(e, "", o, n.relations);
    if (i[0] == null)
      continue;
    const s = await t(String(i[0])), a = Sl(s);
    return a && Dl(a, i[0]), sC(s) || void 0;
  }
}
async function hd(e) {
  if (Ui.length > 0 || !e)
    return;
  Ui = (await za(e, oC)).filter((n) => /zone.?type/i.test(n.name));
}
async function uy(e, t) {
  var o, i;
  if (Mp || !((o = e == null ? void 0 : e.raw) != null && o.getAsync) || xp)
    return;
  xp = !0, await hd(e);
  let n = ((i = Ui.find((s) => {
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
        const u = ay(l.content);
        for (const c of u) {
          const f = await t(String(c)), A = await ly(e, t, f);
          A && !n && (n = A);
        }
        if (u.length > 0)
          break;
      } catch {
      }
    if (qt.size > 0)
      break;
  }
  n && await aC(e, t, n), Mp = !0, ke(
    "template zone type",
    `Taxonomy catalog ready: ${[...qt.entries()].map(([s, a]) => `${s}=${a}`).join(", ") || "(empty)"}`
  );
}
async function lC(e, t, n) {
  await hd(e);
  for (const r of n)
    await ly(e, t, r);
  qt.size === 0 && await uy(e, t);
}
async function uC(e, t, n) {
  const r = qt.get(n);
  return r || (await uy(e, t), qt.get(n));
}
function cC(e) {
  var r;
  const t = Ui.find((o) => o.name === e);
  return ((r = t == null ? void 0 : t.role) == null ? void 0 : r.toLowerCase()) !== "parent";
}
async function Lp(e, t, n, r) {
  var l;
  if (!((l = e == null ? void 0 : e.raw) != null && l.getAsync))
    return;
  const o = `/api/entities/${n}/relations/${r}`, i = await nn(e, n, r, {
    [r]: { href: o }
  });
  if (i[0] == null)
    return;
  const s = await t(String(i[0])), a = Sl(s);
  if (a)
    return Dl(a, i[0]), md(a, "", "");
}
async function fC(e, t, n, r, o, i, s) {
  var u;
  if (!e)
    return !1;
  const a = e, l = cC(
    i
  ) ? [
    {
      label: "parent",
      run: () => Po(a, n, r, i, s.relations)
    },
    {
      label: "child",
      run: () => rn(a, n, r, i, s.relations)
    }
  ] : [
    {
      label: "child",
      run: () => rn(a, n, r, i, s.relations)
    },
    {
      label: "parent",
      run: () => Po(a, n, r, i, s.relations)
    }
  ];
  for (const c of l) {
    if (!await c.run())
      continue;
    const A = await Lp(
      e,
      t,
      n,
      i
    );
    if (A === o)
      return Z(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via ${c.label} ${i}`
      ), !0;
    ke(
      "template zone type",
      `${c.label} write for zone ${n} → taxonomy ${r} returned OK but read-back is "${A ?? "(none)"}" (expected "${o}")`
    );
  }
  if ((u = e == null ? void 0 : e.raw) != null && u.postAsync) {
    const c = { parent: { href: `/api/entities/${r}` } };
    if ((await e.raw.postAsync(
      `/api/entities/${n}/relations/${i}`,
      c
    )).isSuccessStatusCode && await Lp(
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
async function dC(e, t, n, r) {
  const o = Bl(r.relations);
  for (const i of o) {
    const s = st(r.relations, i);
    if (!s)
      continue;
    const a = await nn(e, n.id, i, {
      [i]: { href: s }
    });
    if (a[0] == null)
      continue;
    const l = await t(String(a[0])), u = Sl(l);
    if (u)
      return Dl(u, a[0]), md(u, n.zoneKey, n.zoneLabel);
  }
}
async function cy(e, t, n, r) {
  const o = await dC(e, t, n, r);
  return o ? { ...n, zoneType: o } : n;
}
async function AC(e, t, n, r, o) {
  await hd(e);
  const i = await uC(e, t, r);
  if (!i) {
    const a = Object.keys(o.relations ?? {}).join(", ") || "(none)", l = [...qt.keys()].join(", ") || "(none)";
    return ke(
      "template zone type",
      `No taxonomy item found for zone type "${r}" on zone ${n}. Known types: ${l}. Zone relations: ${a}.`
    ), !1;
  }
  const s = Bl(o.relations);
  for (const a of s)
    if (await fC(
      e,
      t,
      n,
      i,
      r,
      a,
      o
    ))
      return !0;
  return ke(
    "template zone type",
    `Could not link zone ${n} to taxonomy ${i} (${r}). Tried relations: ${s.join(", ") || "(none)"}`
  ), !1;
}
const Du = ["EPAM.TemplateZone", "TemplateZone"];
let bs = null;
function pC(e) {
  return /zone.?type/i.test(e);
}
function mC(e) {
  return /zone.?type/i.test(e);
}
function hC(e) {
  return e.filter((t) => pC(t.name)).map((t) => t.name);
}
async function gC(e) {
  if (bs)
    return bs;
  const [t, n] = await Promise.all([
    La(e, Du[0]).then(async (s) => s.length > 0 ? s : La(e, Du[1])),
    za(e, Du)
  ]), r = hC(t), o = n.filter((s) => mC(s.name)).map((s) => s.name);
  let i = "unknown";
  return r.length > 0 && o.length === 0 ? i = "property" : o.length > 0 && r.length === 0 ? i = "relation" : r.length > 0 && o.length > 0 && (i = "both"), bs = {
    mode: i,
    propertyNames: r.length > 0 ? r : ["zoneType", "ZoneType", "EPAM.zoneType", "zoneTypeMA"],
    relationNames: o
  }, bs;
}
function yC(e) {
  return e.mode === "property" || e.mode === "both" || e.mode === "unknown";
}
function vC(e) {
  return e.mode === "relation" || e.mode === "both";
}
const wC = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], gd = [
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
function EC(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  return "Invariant" in t ? t.Invariant : Object.values(t).find((r) => typeof r == "string") ?? e;
}
function fy(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = EC(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function dy(e) {
  var n;
  if (e == null || typeof e != "object")
    return;
  const t = e;
  for (const r of wC) {
    const o = t[r];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const i = ia(((n = o[0]) == null ? void 0 : n.href) ?? o[0]);
    if (i)
      return i;
  }
}
function TC(e) {
  var r;
  const t = (r = e.systemProperties) == null ? void 0 : r.id, n = e.id ?? e.entityId ?? t;
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  if (typeof n == "string" && n.trim())
    return n.trim();
}
function CC(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e, n = TC(t);
  if (n == null)
    return null;
  const r = t.properties ?? t.fields, o = dy(t.renditions) ?? ia(t.thumbnailUrl) ?? ia(t.previewUrl) ?? ia(t.thumbnail);
  if (!o)
    return null;
  const i = fy(r, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${n}`;
  return {
    id: String(n),
    name: i,
    thumbnailUrl: o,
    previewUrl: o
  };
}
function Io(e, t) {
  const n = t.properties ?? {}, r = dy(t.renditions);
  if (!r)
    return null;
  const o = fy(n, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${e}`;
  return {
    id: String(e),
    name: o,
    thumbnailUrl: r,
    previewUrl: r
  };
}
function zp(e, t) {
  if (!(t != null && t.trim()))
    return e;
  const n = t.trim().toLowerCase();
  return e.filter(
    (r) => r.name.toLowerCase().includes(n) || r.id.toLowerCase().includes(n)
  );
}
const Hc = "https://ws.overcasthq.com/wp-content/uploads/2025/05/sok_logo.png", PC = "https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58", kC = "https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png", SC = [
  {
    id: "color",
    label: "Full color",
    url: Hc,
    previewBackground: "#f7f7f7"
  },
  {
    id: "dark",
    label: "Dark background",
    url: `${Hc}#dark`,
    previewBackground: "#000000"
  }
], Fc = Hc, Bu = "Arial, Helvetica, sans-serif", Ns = {
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
}, Ay = [
  { colorName: "Primary", hexValue: Ns.primary, colorUsageType: "Primary" },
  { colorName: "Secondary", hexValue: Ns.secondary, colorUsageType: "Secondary" },
  { colorName: "Accent", hexValue: Ns.accent, colorUsageType: "Accent" },
  { colorName: "Background", hexValue: Ns.background, colorUsageType: "Background" }
], py = [
  { fontFamily: Bu, fontWeight: "Bold", fontUsageType: "Heading" },
  { fontFamily: Bu, fontWeight: "Regular", fontUsageType: "Body" },
  { fontFamily: Bu, fontWeight: "Medium", fontUsageType: "CTA" }
];
function DC(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t || t === PC || t === kC || /cytiva/i.test(t))
    return Fc;
  const n = SC.find((r) => r.url === t || r.id === t);
  return n ? n.url : t;
}
function ri(e) {
  var t;
  return {
    ...e,
    brandKitName: ((t = e.brandKitName) == null ? void 0 : t.trim()) || "SOK",
    logoAssetUrl: DC(e.logoAssetUrl),
    colors: Ay,
    fonts: py
  };
}
function BC(e) {
  return ri({
    id: e,
    brandKitName: "SOK",
    logoAssetUrl: Fc,
    colors: Ay,
    fonts: py
  });
}
function Ol(e, t) {
  return {
    width: Math.round(e / 25.4 * 96),
    height: Math.round(t / 25.4 * 96)
  };
}
function xs(e, t) {
  return {
    width: Math.round(e * 96),
    height: Math.round(t * 96)
  };
}
const Ms = Ol(210, 297), Is = Ol(297, 420), Ls = Ol(148, 210), ts = [
  { id: "a4-portrait", group: "print", label: "A4 portrait", width: Ms.width, height: Ms.height },
  { id: "a4-landscape", group: "print", label: "A4 landscape", width: Ms.height, height: Ms.width },
  { id: "a3-portrait", group: "print", label: "A3 portrait", width: Is.width, height: Is.height },
  { id: "a3-landscape", group: "print", label: "A3 landscape", width: Is.height, height: Is.width },
  { id: "a5-portrait", group: "print", label: "A5 portrait", width: Ls.width, height: Ls.height },
  { id: "a5-landscape", group: "print", label: "A5 landscape", width: Ls.height, height: Ls.width },
  { id: "letter-portrait", group: "print", label: "Letter portrait", ...xs(8.5, 11) },
  { id: "letter-landscape", group: "print", label: "Letter landscape", ...xs(11, 8.5) },
  { id: "tabloid-portrait", group: "print", label: "Tabloid portrait", ...xs(11, 17) },
  { id: "tabloid-landscape", group: "print", label: "Tabloid landscape", ...xs(17, 11) },
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
], OC = [
  { id: "print", label: "Print" },
  { id: "social", label: "Social" }
];
function Uc(e) {
  return ts.find((t) => t.id === e);
}
function Lo(e, t, n) {
  if (n && Uc(n)) {
    const o = Uc(n);
    if (o.width === e && o.height === t)
      return o.id;
  }
  const r = ts.find((o) => o.width === e && o.height === t);
  return (r == null ? void 0 : r.id) ?? "custom";
}
const bC = [
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
], NC = [
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
], xC = [
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
], my = ts.filter(
  (e) => e.group === "print"
).map((e) => ({
  id: e.id,
  label: `${e.label} — ${e.width} × ${e.height}`,
  width: e.width,
  height: e.height,
  formatPreset: e.id
}));
function MC(e) {
  switch (e) {
    case "Email":
      return NC;
    case "Newsletter":
      return xC;
    case "Print":
      return my;
    default:
      return bC;
  }
}
function IC(e) {
  const t = MC(e)[0];
  return {
    canvasWidth: t.width,
    canvasHeight: t.height,
    formatPreset: t.formatPreset
  };
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function Rp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function LC(e) {
  if (Array.isArray(e))
    return e;
}
function zC(e, t) {
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
function RC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QC(e, t) {
  return LC(e) || zC(e, t) || HC(e, t) || RC();
}
function HC(e, t) {
  if (e) {
    if (typeof e == "string")
      return Rp(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rp(e, t) : void 0;
  }
}
const hy = Object.entries, Qp = Object.setPrototypeOf, FC = Object.isFrozen, UC = Object.getPrototypeOf, jC = Object.getOwnPropertyDescriptor;
let Je = Object.freeze, et = Object.seal, Zr = Object.create, gy = typeof Reflect < "u" && Reflect, jc = gy.apply, Gc = gy.construct;
Je || (Je = function(t) {
  return t;
});
et || (et = function(t) {
  return t;
});
jc || (jc = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    o[i - 2] = arguments[i];
  return t.apply(n, o);
});
Gc || (Gc = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Wo = Re(Array.prototype.forEach), GC = Re(Array.prototype.lastIndexOf), Hp = Re(Array.prototype.pop), jr = Re(Array.prototype.push), YC = Re(Array.prototype.splice), Gn = Array.isArray, oi = Re(String.prototype.toLowerCase), Ou = Re(String.prototype.toString), Fp = Re(String.prototype.match), Vo = Re(String.prototype.replace), Up = Re(String.prototype.indexOf), KC = Re(String.prototype.trim), XC = Re(Number.prototype.toString), ZC = Re(Boolean.prototype.toString), jp = typeof BigInt > "u" ? null : Re(BigInt.prototype.toString), Gp = typeof Symbol > "u" ? null : Re(Symbol.prototype.toString), Ue = Re(Object.prototype.hasOwnProperty), Jo = Re(Object.prototype.toString), Ze = Re(RegExp.prototype.test), dr = WC(TypeError);
function Re(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return jc(e, t, r);
  };
}
function WC(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Gc(e, n);
  };
}
function oe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : oi;
  if (Qp && Qp(e, null), !Gn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (FC(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function VC(e) {
  for (let t = 0; t < e.length; t++)
    Ue(e, t) || (e[t] = null);
  return e;
}
function lt(e) {
  const t = Zr(null);
  for (const r of hy(e)) {
    var n = QC(r, 2);
    const o = n[0], i = n[1];
    Ue(e, o) && (Gn(i) ? t[o] = VC(i) : i && typeof i == "object" && i.constructor === Object ? t[o] = lt(i) : t[o] = i);
  }
  return t;
}
function JC(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return XC(e);
    case "boolean":
      return ZC(e);
    case "bigint":
      return jp ? jp(e) : "0";
    case "symbol":
      return Gp ? Gp(e) : "Symbol()";
    case "undefined":
      return Jo(e);
    case "function":
    case "object": {
      if (e === null)
        return Jo(e);
      const t = e, n = cn(t, "toString");
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
function cn(e, t) {
  for (; e !== null; ) {
    const r = jC(e, t);
    if (r) {
      if (r.get)
        return Re(r.get);
      if (typeof r.value == "function")
        return Re(r.value);
    }
    e = UC(e);
  }
  function n() {
    return null;
  }
  return n;
}
function qC(e) {
  try {
    return Ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const Yp = Je(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), bu = Je(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Nu = Je(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _C = Je(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xu = Je(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), $C = Je(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Kp = Je(["#text"]), Xp = Je(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Mu = Je(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Zp = Je(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), zs = Je(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), eP = et(/{{[\w\W]*|^[\w\W]*}}/g), tP = et(/<%[\w\W]*|^[\w\W]*%>/g), nP = et(/\${[\w\W]*/g), rP = et(/^data-[\-\w.\u00B7-\uFFFF]+$/), oP = et(/^aria-[\-\w]+$/), Wp = et(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), iP = et(/^(?:\w+script|data):/i), sP = et(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), aP = et(/^html$/i), lP = et(/^[a-z][.\w]*(-[.\w]+)+$/i), Vp = et(/<[/\w!]/g), uP = et(/<[/\w]/g), cP = et(/<\/no(script|embed|frames)/i), fP = et(/\/>/i), un = {
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
}, dP = function() {
  return typeof window > "u" ? null : window;
}, AP = function(t, n) {
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
}, Jp = function() {
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
}, Qn = function(t, n, r, o) {
  return Ue(t, n) && Gn(t[n]) ? oe(o.base ? lt(o.base) : {}, t[n], o.transform) : r;
};
function yy() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dP();
  const t = (z) => yy(z);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== un.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, s = e.Node, a = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, A = a.prototype, E = cn(A, "cloneNode"), g = cn(A, "remove"), v = cn(A, "nextSibling"), B = cn(A, "childNodes"), d = cn(A, "parentNode"), p = cn(A, "shadowRoot"), h = cn(A, "attributes"), T = s && s.prototype ? cn(s.prototype, "nodeType") : null, O = s && s.prototype ? cn(s.prototype, "nodeName") : null;
  if (typeof i == "function") {
    const z = n.createElement("template");
    z.content && z.content.ownerDocument && (n = z.content.ownerDocument);
  }
  let w, C = "", D, H = !1, k = 0;
  const F = function() {
    if (k > 0)
      throw dr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, N = function(m) {
    F(), k++;
    try {
      return w.createHTML(m);
    } finally {
      k--;
    }
  }, W = function(m) {
    F(), k++;
    try {
      return w.createScriptURL(m);
    } finally {
      k--;
    }
  }, be = function() {
    return H || (D = AP(f, o), H = !0), D;
  }, ue = n, ne = ue.implementation, de = ue.createNodeIterator, Q = ue.createDocumentFragment, K = ue.getElementsByTagName, V = r.importNode;
  let X = Jp();
  t.isSupported = typeof hy == "function" && typeof d == "function" && ne && ne.createHTMLDocument !== void 0;
  const Ee = eP, In = tP, R = nP, q = rP, Xe = oP, M = iP, U = sP, G = lP;
  let le = Wp, J = null;
  const he = oe({}, [...Yp, ...bu, ...Nu, ...xu, ...Kp]);
  let _ = null;
  const Gt = oe({}, [...Xp, ...Mu, ...Zp, ...zs]);
  let me = Object.seal(Zr(null, {
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
  })), re = null, Ir = null;
  const Yt = Object.seal(Zr(null, {
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
  let on = !0, Lr = !0, Id = !1, Ld = !0, Ln = !1, zo = !0, cr = !1, zl = !1, Rl = null, Ql = null, Hl = !1, zr = !1, is = !1, ss = !1, zd = !0, Rd = !1;
  const Qd = "user-content-";
  let Fl = !0, Ul = !1, Rr = {}, sn = null;
  const jl = oe({}, [
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
  let Hd = null;
  const Fd = oe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Gl = null;
  const Ud = oe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), as = "http://www.w3.org/1998/Math/MathML", ls = "http://www.w3.org/2000/svg", an = "http://www.w3.org/1999/xhtml";
  let Qr = an, Yl = !1, Kl = null;
  const Av = oe({}, [as, ls, an], Ou), jd = Je(["mi", "mo", "mn", "ms", "mtext"]);
  let Xl = oe({}, jd);
  const Gd = Je(["annotation-xml"]);
  let Zl = oe({}, Gd);
  const pv = oe({}, ["title", "style", "font", "a", "script"]);
  let Ro = null;
  const mv = ["application/xhtml+xml", "text/html"], hv = "text/html";
  let Se = null, Hr = null;
  const gv = n.createElement("form"), Yd = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Wl = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Hr && Hr === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = lt(m), Ro = // eslint-disable-next-line unicorn/prefer-includes
    mv.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? hv : m.PARSER_MEDIA_TYPE, Se = Ro === "application/xhtml+xml" ? Ou : oi, J = Qn(m, "ALLOWED_TAGS", he, {
      transform: Se
    }), _ = Qn(m, "ALLOWED_ATTR", Gt, {
      transform: Se
    }), Kl = Qn(m, "ALLOWED_NAMESPACES", Av, {
      transform: Ou
    }), Gl = Qn(m, "ADD_URI_SAFE_ATTR", Ud, {
      transform: Se,
      base: Ud
    }), Hd = Qn(m, "ADD_DATA_URI_TAGS", Fd, {
      transform: Se,
      base: Fd
    }), sn = Qn(m, "FORBID_CONTENTS", jl, {
      transform: Se
    }), re = Qn(m, "FORBID_TAGS", lt({}), {
      transform: Se
    }), Ir = Qn(m, "FORBID_ATTR", lt({}), {
      transform: Se
    }), Rr = Ue(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? lt(m.USE_PROFILES) : m.USE_PROFILES : !1, on = m.ALLOW_ARIA_ATTR !== !1, Lr = m.ALLOW_DATA_ATTR !== !1, Id = m.ALLOW_UNKNOWN_PROTOCOLS || !1, Ld = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ln = m.SAFE_FOR_TEMPLATES || !1, zo = m.SAFE_FOR_XML !== !1, cr = m.WHOLE_DOCUMENT || !1, zr = m.RETURN_DOM || !1, is = m.RETURN_DOM_FRAGMENT || !1, ss = m.RETURN_TRUSTED_TYPE || !1, Hl = m.FORCE_BODY || !1, zd = m.SANITIZE_DOM !== !1, Rd = m.SANITIZE_NAMED_PROPS || !1, Fl = m.KEEP_CONTENT !== !1, Ul = m.IN_PLACE || !1, le = qC(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Wp, Qr = typeof m.NAMESPACE == "string" ? m.NAMESPACE : an, Xl = Ue(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? lt(m.MATHML_TEXT_INTEGRATION_POINTS) : oe({}, jd), Zl = Ue(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? lt(m.HTML_INTEGRATION_POINTS) : oe({}, Gd);
    const P = Ue(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? lt(m.CUSTOM_ELEMENT_HANDLING) : Zr(null);
    if (me = Zr(null), Ue(P, "tagNameCheck") && Yd(P.tagNameCheck) && (me.tagNameCheck = P.tagNameCheck), Ue(P, "attributeNameCheck") && Yd(P.attributeNameCheck) && (me.attributeNameCheck = P.attributeNameCheck), Ue(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (me.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), et(me), Ln && (Lr = !1), is && (zr = !0), Rr && (J = oe({}, Kp), _ = Zr(null), Rr.html === !0 && (oe(J, Yp), oe(_, Xp)), Rr.svg === !0 && (oe(J, bu), oe(_, Mu), oe(_, zs)), Rr.svgFilters === !0 && (oe(J, Nu), oe(_, Mu), oe(_, zs)), Rr.mathMl === !0 && (oe(J, xu), oe(_, Zp), oe(_, zs))), Yt.tagCheck = null, Yt.attributeCheck = null, Ue(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Yt.tagCheck = m.ADD_TAGS : Gn(m.ADD_TAGS) && (J === he && (J = lt(J)), oe(J, m.ADD_TAGS, Se))), Ue(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Yt.attributeCheck = m.ADD_ATTR : Gn(m.ADD_ATTR) && (_ === Gt && (_ = lt(_)), oe(_, m.ADD_ATTR, Se))), Ue(m, "ADD_URI_SAFE_ATTR") && Gn(m.ADD_URI_SAFE_ATTR) && oe(Gl, m.ADD_URI_SAFE_ATTR, Se), Ue(m, "FORBID_CONTENTS") && Gn(m.FORBID_CONTENTS) && (sn === jl && (sn = lt(sn)), oe(sn, m.FORBID_CONTENTS, Se)), Ue(m, "ADD_FORBID_CONTENTS") && Gn(m.ADD_FORBID_CONTENTS) && (sn === jl && (sn = lt(sn)), oe(sn, m.ADD_FORBID_CONTENTS, Se)), Fl && (J["#text"] = !0), cr && oe(J, ["html", "head", "body"]), J.table && (oe(J, ["tbody"]), delete re.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw dr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw dr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const L = w;
      w = m.TRUSTED_TYPES_POLICY;
      try {
        C = N("");
      } catch (Y) {
        throw w = L, Y;
      }
    } else
      m.TRUSTED_TYPES_POLICY === null ? (w = void 0, C = "") : (w === void 0 && (w = be()), w && typeof C == "string" && (C = N("")));
    Je && Je(m), Hr = m;
  }, Kd = oe({}, [...bu, ...Nu, ..._C]), Xd = oe({}, [...xu, ...$C]), yv = function(m, P, L) {
    return P.namespaceURI === an ? m === "svg" : P.namespaceURI === as ? m === "svg" && (L === "annotation-xml" || Xl[L]) : !!Kd[m];
  }, vv = function(m, P, L) {
    return P.namespaceURI === an ? m === "math" : P.namespaceURI === ls ? m === "math" && Zl[L] : !!Xd[m];
  }, wv = function(m, P, L) {
    return P.namespaceURI === ls && !Zl[L] || P.namespaceURI === as && !Xl[L] ? !1 : !Xd[m] && (pv[m] || !Kd[m]);
  }, Ev = function(m) {
    let P = d(m);
    (!P || !P.tagName) && (P = {
      namespaceURI: Qr,
      tagName: "template"
    });
    const L = oi(m.tagName), Y = oi(P.tagName);
    return Kl[m.namespaceURI] ? m.namespaceURI === ls ? yv(L, P, Y) : m.namespaceURI === as ? vv(L, P, Y) : m.namespaceURI === an ? wv(L, P, Y) : !!(Ro === "application/xhtml+xml" && Kl[m.namespaceURI]) : !1;
  }, zn = function(m) {
    jr(t.removed, {
      element: m
    });
    try {
      d(m).removeChild(m);
    } catch {
      if (g(m), !d(m))
        throw dr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Zd = function(m) {
    const P = B(m);
    if (P) {
      const Y = [];
      Wo(P, (ee) => {
        jr(Y, ee);
      }), Wo(Y, (ee) => {
        try {
          g(ee);
        } catch {
        }
      });
    }
    const L = h(m);
    if (L)
      for (let Y = L.length - 1; Y >= 0; --Y) {
        const ee = L[Y], ie = ee && ee.name;
        if (typeof ie == "string")
          try {
            m.removeAttribute(ie);
          } catch {
          }
      }
  }, fr = function(m, P) {
    try {
      jr(t.removed, {
        attribute: P.getAttributeNode(m),
        from: P
      });
    } catch {
      jr(t.removed, {
        attribute: null,
        from: P
      });
    }
    if (P.removeAttribute(m), m === "is")
      if (zr || is)
        try {
          zn(P);
        } catch {
        }
      else
        try {
          P.setAttribute(m, "");
        } catch {
        }
  }, Tv = function(m) {
    const P = h(m);
    if (P)
      for (let L = P.length - 1; L >= 0; --L) {
        const Y = P[L], ee = Y && Y.name;
        if (!(typeof ee != "string" || _[Se(ee)]))
          try {
            m.removeAttribute(ee);
          } catch {
          }
      }
  }, Cv = function(m) {
    const P = [m];
    for (; P.length > 0; ) {
      const L = P.pop();
      (T ? T(L) : L.nodeType) === un.element && Tv(L);
      const ee = B(L);
      if (ee)
        for (let ie = ee.length - 1; ie >= 0; --ie)
          P.push(ee[ie]);
    }
  }, Wd = function(m) {
    let P = null, L = null;
    if (Hl)
      m = "<remove></remove>" + m;
    else {
      const ie = Fp(m, /^[\r\n\t ]+/);
      L = ie && ie[0];
    }
    Ro === "application/xhtml+xml" && Qr === an && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const Y = w ? N(m) : m;
    if (Qr === an)
      try {
        P = new c().parseFromString(Y, Ro);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = ne.createDocument(Qr, "template", null);
      try {
        P.documentElement.innerHTML = Yl ? C : Y;
      } catch {
      }
    }
    const ee = P.body || P.documentElement;
    return m && L && ee.insertBefore(n.createTextNode(L), ee.childNodes[0] || null), Qr === an ? K.call(P, cr ? "html" : "body")[0] : cr ? P.documentElement : ee;
  }, Vd = function(m) {
    return de.call(
      m.ownerDocument || m,
      m,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, us = function(m) {
    return m = Vo(m, Ee, " "), m = Vo(m, In, " "), m = Vo(m, R, " "), m;
  }, Vl = function(m) {
    var P;
    m.normalize();
    const L = de.call(
      m.ownerDocument || m,
      m,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = L.nextNode();
    for (; Y; )
      Y.data = us(Y.data), Y = L.nextNode();
    const ee = (P = m.querySelectorAll) === null || P === void 0 ? void 0 : P.call(m, "template");
    ee && Wo(ee, (ie) => {
      Fr(ie.content) && Vl(ie.content);
    });
  }, cs = function(m) {
    const P = O ? O(m) : null;
    return typeof P != "string" || Se(P) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    m.attributes !== h(m) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    m.nodeType !== T(m) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    m.childNodes !== B(m);
  }, Fr = function(m) {
    if (!T || typeof m != "object" || m === null)
      return !1;
    try {
      return T(m) === un.documentFragment;
    } catch {
      return !1;
    }
  }, Qo = function(m) {
    if (!T || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof T(m) == "number";
    } catch {
      return !1;
    }
  };
  function vn(z, m, P) {
    z.length !== 0 && Wo(z, (L) => {
      L.call(t, m, P, Hr);
    });
  }
  const Pv = function(m, P) {
    return !!(zo && m.hasChildNodes() && !Qo(m.firstElementChild) && Ze(Vp, m.textContent) && Ze(Vp, m.innerHTML) || zo && m.namespaceURI === an && P === "style" && Qo(m.firstElementChild) || m.nodeType === un.processingInstruction || zo && m.nodeType === un.comment && Ze(uP, m.data));
  }, kv = function(m, P) {
    if (!re[P] && _d(P) && (me.tagNameCheck instanceof RegExp && Ze(me.tagNameCheck, P) || me.tagNameCheck instanceof Function && me.tagNameCheck(P)))
      return !1;
    if (Fl && !sn[P]) {
      const L = d(m), Y = B(m);
      if (Y && L) {
        const ee = Y.length;
        for (let ie = ee - 1; ie >= 0; --ie) {
          const Fe = Ul ? Y[ie] : E(Y[ie], !0);
          L.insertBefore(Fe, v(m));
        }
      }
    }
    return zn(m), !0;
  }, Jd = function(m) {
    if (vn(X.beforeSanitizeElements, m, null), cs(m))
      return zn(m), !0;
    const P = Se(O ? O(m) : m.nodeName);
    if (vn(X.uponSanitizeElement, m, {
      tagName: P,
      allowedTags: J
    }), Pv(m, P))
      return zn(m), !0;
    if (re[P] || !(Yt.tagCheck instanceof Function && Yt.tagCheck(P)) && !J[P])
      return kv(m, P);
    if ((T ? T(m) : m.nodeType) === un.element && !Ev(m) || (P === "noscript" || P === "noembed" || P === "noframes") && Ze(cP, m.innerHTML))
      return zn(m), !0;
    if (Ln && m.nodeType === un.text) {
      const Y = us(m.textContent);
      m.textContent !== Y && (jr(t.removed, {
        element: m.cloneNode()
      }), m.textContent = Y);
    }
    return vn(X.afterSanitizeElements, m, null), !1;
  }, qd = function(m, P, L) {
    if (Ir[P] || zd && (P === "id" || P === "name") && (L in n || L in gv))
      return !1;
    const Y = _[P] || Yt.attributeCheck instanceof Function && Yt.attributeCheck(P, m);
    if (!(Lr && Ze(q, P))) {
      if (!(on && Ze(Xe, P))) {
        if (Y) {
          if (!Gl[P]) {
            if (!Ze(le, Vo(L, U, ""))) {
              if (!((P === "src" || P === "xlink:href" || P === "href") && m !== "script" && Up(L, "data:") === 0 && Hd[m])) {
                if (!(Id && !Ze(M, Vo(L, U, "")))) {
                  if (L)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(_d(m) && (me.tagNameCheck instanceof RegExp && Ze(me.tagNameCheck, m) || me.tagNameCheck instanceof Function && me.tagNameCheck(m)) && (me.attributeNameCheck instanceof RegExp && Ze(me.attributeNameCheck, P) || me.attributeNameCheck instanceof Function && me.attributeNameCheck(P, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          P === "is" && me.allowCustomizedBuiltInElements && (me.tagNameCheck instanceof RegExp && Ze(me.tagNameCheck, L) || me.tagNameCheck instanceof Function && me.tagNameCheck(L)))
        )
          return !1;
      }
    }
    return !0;
  }, Sv = oe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), _d = function(m) {
    return !Sv[oi(m)] && Ze(G, m);
  }, Dv = function(m, P, L, Y) {
    if (w && typeof f == "object" && typeof f.getAttributeType == "function" && !L)
      switch (f.getAttributeType(m, P)) {
        case "TrustedHTML":
          return N(Y);
        case "TrustedScriptURL":
          return W(Y);
      }
    return Y;
  }, Bv = function(m, P, L, Y) {
    try {
      L ? m.setAttributeNS(L, P, Y) : m.setAttribute(P, Y), cs(m) ? zn(m) : Hp(t.removed);
    } catch {
      fr(P, m);
    }
  }, $d = function(m) {
    vn(X.beforeSanitizeAttributes, m, null);
    const P = m.attributes;
    if (!P || cs(m))
      return;
    const L = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let Y = P.length;
    const ee = Se(m.nodeName);
    for (; Y--; ) {
      const ie = P[Y], Fe = ie.name, Me = ie.namespaceURI, Nt = ie.value, Kt = Se(Fe), ql = Nt;
      let at = Fe === "value" ? ql : KC(ql);
      if (L.attrName = Kt, L.attrValue = at, L.keepAttr = !0, L.forceKeepAttr = void 0, vn(X.uponSanitizeAttribute, m, L), at = L.attrValue, Rd && (Kt === "id" || Kt === "name") && Up(at, Qd) !== 0 && (fr(Fe, m), at = Qd + at), zo && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, at)) {
        fr(Fe, m);
        continue;
      }
      if (Kt === "attributename" && Fp(at, "href")) {
        fr(Fe, m);
        continue;
      }
      if (!L.forceKeepAttr) {
        if (!L.keepAttr) {
          fr(Fe, m);
          continue;
        }
        if (!Ld && Ze(fP, at)) {
          fr(Fe, m);
          continue;
        }
        if (Ln && (at = us(at)), !qd(ee, Kt, at)) {
          fr(Fe, m);
          continue;
        }
        at = Dv(ee, Kt, Me, at), at !== ql && Bv(m, Fe, Me, at);
      }
    }
    vn(X.afterSanitizeAttributes, m, null);
  }, fs = function(m) {
    let P = null;
    const L = Vd(m);
    for (vn(X.beforeSanitizeShadowDOM, m, null); P = L.nextNode(); )
      if (vn(X.uponSanitizeShadowNode, P, null), Jd(P), $d(P), Fr(P.content) && fs(P.content), (T ? T(P) : P.nodeType) === un.element) {
        const ee = p(P);
        Fr(ee) && (Jl(ee), fs(ee));
      }
    vn(X.afterSanitizeShadowDOM, m, null);
  }, Jl = function(m) {
    const P = [{
      node: m,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const L = P.pop();
      if (L.shadow) {
        fs(L.shadow);
        continue;
      }
      const Y = L.node, ie = (T ? T(Y) : Y.nodeType) === un.element, Fe = B(Y);
      if (Fe)
        for (let Me = Fe.length - 1; Me >= 0; --Me)
          P.push({
            node: Fe[Me],
            shadow: null
          });
      if (ie) {
        const Me = O ? O(Y) : null;
        if (typeof Me == "string" && Se(Me) === "template") {
          const Nt = Y.content;
          Fr(Nt) && P.push({
            node: Nt,
            shadow: null
          });
        }
      }
      if (ie) {
        const Me = p(Y);
        Fr(Me) && P.push({
          node: null,
          shadow: Me
        }, {
          node: Me,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(z) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, L = null, Y = null, ee = null;
    if (Yl = !z, Yl && (z = "<!-->"), typeof z != "string" && !Qo(z) && (z = JC(z), typeof z != "string"))
      throw dr("dirty is not a string, aborting");
    if (!t.isSupported)
      return z;
    zl ? (J = Rl, _ = Ql) : Wl(m), (X.uponSanitizeElement.length > 0 || X.uponSanitizeAttribute.length > 0) && (J = lt(J)), X.uponSanitizeAttribute.length > 0 && (_ = lt(_)), t.removed = [];
    const ie = Ul && typeof z != "string" && Qo(z);
    if (ie) {
      const Nt = O ? O(z) : z.nodeName;
      if (typeof Nt == "string") {
        const Kt = Se(Nt);
        if (!J[Kt] || re[Kt])
          throw dr("root node is forbidden and cannot be sanitized in-place");
      }
      if (cs(z))
        throw dr("root node is clobbered and cannot be sanitized in-place");
      try {
        Jl(z);
      } catch (Kt) {
        throw Zd(z), Kt;
      }
    } else if (Qo(z))
      P = Wd("<!---->"), L = P.ownerDocument.importNode(z, !0), L.nodeType === un.element && L.nodeName === "BODY" || L.nodeName === "HTML" ? P = L : P.appendChild(L), Jl(L);
    else {
      if (!zr && !Ln && !cr && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return w && ss ? N(z) : z;
      if (P = Wd(z), !P)
        return zr ? null : ss ? C : "";
    }
    P && Hl && zn(P.firstChild);
    const Fe = Vd(ie ? z : P);
    try {
      for (; Y = Fe.nextNode(); )
        Jd(Y), $d(Y), Fr(Y.content) && fs(Y.content);
    } catch (Nt) {
      throw ie && Zd(z), Nt;
    }
    if (ie)
      return Wo(t.removed, (Nt) => {
        Nt.element && Cv(Nt.element);
      }), Ln && Vl(z), z;
    if (zr) {
      if (Ln && Vl(P), is)
        for (ee = Q.call(P.ownerDocument); P.firstChild; )
          ee.appendChild(P.firstChild);
      else
        ee = P;
      return (_.shadowroot || _.shadowrootmode) && (ee = V.call(r, ee, !0)), ee;
    }
    let Me = cr ? P.outerHTML : P.innerHTML;
    return cr && J["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Ze(aP, P.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + Me), Ln && (Me = us(Me)), w && ss ? N(Me) : Me;
  }, t.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wl(z), zl = !0, Rl = J, Ql = _;
  }, t.clearConfig = function() {
    Hr = null, zl = !1, Rl = null, Ql = null, w = D, C = "";
  }, t.isValidAttribute = function(z, m, P) {
    Hr || Wl({});
    const L = Se(z), Y = Se(m);
    return qd(L, Y, P);
  }, t.addHook = function(z, m) {
    typeof m == "function" && Ue(X, z) && jr(X[z], m);
  }, t.removeHook = function(z, m) {
    if (Ue(X, z)) {
      if (m !== void 0) {
        const P = GC(X[z], m);
        return P === -1 ? void 0 : YC(X[z], P, 1)[0];
      }
      return Hp(X[z]);
    }
  }, t.removeHooks = function(z) {
    Ue(X, z) && (X[z] = []);
  }, t.removeAllHooks = function() {
    X = Jp();
  }, t;
}
yy();
const pP = ["H1", "H2", "H3", "H4", "H5", "H6"], yd = "H2";
function mP(e) {
  const t = e == null ? void 0 : e.trim().toUpperCase();
  return t && pP.includes(t) ? t : yd;
}
function hP(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "center" ? "Center" : t === "right" ? "Right" : "Left";
}
function gP(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "right" ? "Right" : t === "bottom" ? "Bottom" : t === "left" ? "Left" : "Top";
}
const ko = "dummy-brand-kit", qp = "dummy-template";
function Gr(e = ko) {
  return BC(e);
}
function yP(e, t = "Social") {
  return t === "Email" || t === "Newsletter" ? wP(e) : vP(e, t);
}
function vP(e, t = "Social") {
  const n = t === "Print" ? my[0] : null;
  return {
    id: e,
    templateName: n ? "Demo Print Template" : "Demo Social Template",
    channelType: t,
    formatPreset: (n == null ? void 0 : n.formatPreset) ?? "1080x1080",
    canvasWidth: (n == null ? void 0 : n.width) ?? 1080,
    canvasHeight: (n == null ? void 0 : n.height) ?? 1080,
    brandKitId: ko,
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
function wP(e) {
  return {
    id: e,
    templateName: "Demo Email Template",
    channelType: "Email",
    formatPreset: "Email.StandardEmail",
    canvasWidth: 600,
    canvasHeight: 800,
    brandKitId: ko,
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
function EP(e, t) {
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
function TP(e) {
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
function rr(e, t, n) {
  HT(e, t, n);
}
function So(e) {
  return { Invariant: e };
}
function ze(e, t, n) {
  e[t] = So(n);
}
function vd(e, t, n) {
  e[t] = n;
}
function Lt(e, t, n) {
  Number.isNaN(n) || (e[t] = n);
}
function Ar(e) {
  if (!(e == null || Number.isNaN(e)))
    return e;
}
function sr(e) {
  const t = e == null ? void 0 : e.trim();
  return t || void 0;
}
function Do(e) {
  const t = {
    ...e,
    sortOrder: Ar(e.sortOrder) ?? 0,
    positionX: Ar(e.positionX),
    positionY: Ar(e.positionY),
    zoneWidth: Ar(e.zoneWidth),
    zoneHeight: Ar(e.zoneHeight),
    offsetPx: Ar(e.offsetPx),
    maxCharacterCount: Ar(e.maxCharacterCount),
    aspectRatioLock: sr(e.aspectRatioLock),
    htmlDefaultContent: sr(e.htmlDefaultContent)
  };
  switch (t.zoneType) {
    case "Text":
      t.headingLevel = void 0, t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0;
      break;
    case "Heading":
      t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0, t.headingLevel || (t.headingLevel = yd);
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
function CP(e) {
  return {
    Title: So(e.zoneKey)
  };
}
const PP = {
  textValue: ["textValue", "TextValue", "text", "content", "zoneText", "value"],
  colorValue: ["colorValue", "ColorValue", "color", "hexValue"],
  htmlValue: ["htmlValue", "HtmlValue", "html", "htmlContent"],
  linkUrl: ["linkUrl", "LinkUrl", "url", "href", "link"]
};
function vy(e) {
  const t = {};
  return e.textValue !== void 0 && ze(t, "textValue", e.textValue), e.colorValue !== void 0 && ze(t, "colorValue", e.colorValue), e.htmlValue !== void 0 && ze(t, "htmlValue", e.htmlValue), e.linkUrl !== void 0 && ze(t, "linkUrl", e.linkUrl), t;
}
function kP(e, t) {
  if (t.length === 0)
    return vy(e);
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
      for (const s of PP[i.key]) {
        const a = n.get(s.toLowerCase());
        if (a && !(/^title$/i.test(a) || /\.Title$/i.test(a))) {
          ze(r, a, i.value);
          break;
        }
      }
  return r;
}
function SP(e) {
  var t, n, r, o, i, s;
  return !!((t = e.textValue) != null && t.trim() || (n = e.htmlValue) != null && n.trim() || (r = e.colorValue) != null && r.trim() || (o = e.linkUrl) != null && o.trim() || (i = e.imageAssetId) != null && i.trim() || (s = e.imageAssetUrl) != null && s.trim());
}
function DP(e) {
  const t = {};
  return e.isRawHtmlOverrideMA !== void 0 && (t.isRawHtmlOverrideMA = e.isRawHtmlOverrideMA), e.rawHtmlOverrideContent !== void 0 && ze(t, "rawHtmlOverrideContent", e.rawHtmlOverrideContent), e.overrideReasonMA !== void 0 && ze(t, "overrideReasonMA", e.overrideReasonMA), e.zoneLayoutJson !== void 0 && ze(t, "zoneLayoutJson", e.zoneLayoutJson), e.designerInstanceJson !== void 0 && ze(t, "designerInstanceJson", e.designerInstanceJson), t;
}
function BP(e) {
  return { templateName: So(e.templateName) };
}
function wy(e) {
  const t = {};
  return ze(t, "templateName", e.templateName), e.canvasWidth !== void 0 && Lt(t, "canvasWidth", e.canvasWidth), e.canvasHeight !== void 0 && Lt(t, "canvasHeight", e.canvasHeight), e.designerDocumentJson !== void 0 && ze(t, "designerDocumentJson", e.designerDocumentJson), t;
}
function OP(e, t, n = "designerDocumentJson") {
  const r = {};
  return ze(r, n, e), (t == null ? void 0 : t.width) != null && Lt(r, "canvasWidth", t.width), (t == null ? void 0 : t.height) != null && Lt(r, "canvasHeight", t.height), r;
}
function Ey(e) {
  return {
    zoneKey: So(e.zoneKey),
    zoneLabel: So(e.zoneLabel || e.zoneKey)
  };
}
function bP(e, t) {
  if (!t)
    return Ey(e);
  const n = {}, r = sr(e.zoneLabel) ?? e.zoneKey, o = sr(t.zoneLabel) ?? t.zoneKey;
  return e.zoneKey !== t.zoneKey && ze(n, "zoneKey", e.zoneKey), r !== o && ze(n, "zoneLabel", r), n;
}
function NP(e) {
  const t = {};
  return ze(t, "zoneType", e.zoneType), vd(t, "isLocked", e.isLocked), Lt(t, "sortOrder", e.sortOrder), t;
}
function xP(e, t) {
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
function MP(e, t) {
  const n = {};
  return (!t || e.isLocked !== t.isLocked) && vd(n, "isLocked", e.isLocked), (!t || e.sortOrder !== t.sortOrder) && Lt(n, "sortOrder", e.sortOrder), n;
}
function Ty(e, t) {
  const n = {};
  return e.positionX !== void 0 && e.positionX !== (t == null ? void 0 : t.positionX) && Lt(n, "positionX", e.positionX), e.positionY !== void 0 && e.positionY !== (t == null ? void 0 : t.positionY) && Lt(n, "positionY", e.positionY), e.zoneWidth !== void 0 && e.zoneWidth !== (t == null ? void 0 : t.zoneWidth) && Lt(n, "zoneWidth", e.zoneWidth), e.zoneHeight !== void 0 && e.zoneHeight !== (t == null ? void 0 : t.zoneHeight) && Lt(n, "zoneHeight", e.zoneHeight), e.contentAlignment !== void 0 && e.contentAlignment !== (t == null ? void 0 : t.contentAlignment) && ze(n, "contentAlignment", e.contentAlignment), e.offsetDirection !== void 0 && e.offsetDirection !== (t == null ? void 0 : t.offsetDirection) && ze(n, "offsetDirection", e.offsetDirection), e.offsetPx !== void 0 && e.offsetPx !== (t == null ? void 0 : t.offsetPx) && Lt(n, "offsetPx", e.offsetPx), n;
}
function Cy(e, t) {
  const n = Do(e), r = {};
  return (n.zoneType === "Text" || n.zoneType === "Heading") && n.maxCharacterCount !== void 0 && n.maxCharacterCount !== (t == null ? void 0 : t.maxCharacterCount) && Lt(r, "maxCharacterCount", n.maxCharacterCount), n.zoneType === "Heading" && n.headingLevel !== void 0 && n.headingLevel !== (t == null ? void 0 : t.headingLevel) && ze(r, "headingLevel", n.headingLevel), n.zoneType === "Image" && n.aspectRatioLock !== void 0 && n.aspectRatioLock !== sr(t == null ? void 0 : t.aspectRatioLock) && ze(r, "aspectRatioLock", n.aspectRatioLock), n.zoneType === "HTML" && (n.htmlDefaultContent !== void 0 && n.htmlDefaultContent !== sr(t == null ? void 0 : t.htmlDefaultContent) && ze(r, "htmlDefaultContent", n.htmlDefaultContent), n.htmlAllowUserOverride !== void 0 && n.htmlAllowUserOverride !== (t == null ? void 0 : t.htmlAllowUserOverride) && vd(r, "htmlAllowUserOverride", n.htmlAllowUserOverride)), r;
}
function _p(e) {
  const t = Do(e);
  return {
    ...NP(t),
    ...Ty(t),
    ...Cy(t)
  };
}
function IP(e, t) {
  const n = Do(e), r = Do(t), o = sr(n.zoneLabel) ?? n.zoneKey, i = sr(r.zoneLabel) ?? r.zoneKey;
  return n.zoneKey === r.zoneKey && o === i && JSON.stringify(_p(n)) === JSON.stringify(_p(r));
}
function Yc(e) {
  return /^\d+$/.test(e);
}
const LP = ["Social", "Email", "Newsletter", "Print"];
function wd(e) {
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
function $(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = wd(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function En(e, ...t) {
  if (e)
    for (const n of t) {
      const r = wd(e[n]);
      if (typeof r == "number" && Number.isFinite(r))
        return r;
      if (typeof r == "string") {
        const o = Number(r);
        if (Number.isFinite(o))
          return o;
      }
    }
}
function Kc(e, ...t) {
  if (!e)
    return !1;
  for (const n of t) {
    const r = wd(e[n]);
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
function Ct(e, ...t) {
  const n = $g(e, ...t);
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
function bl(e, t) {
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
function zP(e) {
  const t = e.trim().toLowerCase();
  return t.includes("email") ? "Email" : t.includes("newsletter") ? "Newsletter" : t.includes("print") || t.includes("poster") || /\ba4\b/.test(t) ? "Print" : "Social";
}
function RP(e) {
  const t = $(e, "EPAM.headingLevel", "headingLevel");
  return t ? mP(t) : void 0;
}
function QP(e) {
  const t = $(e, "EPAM.contentAlignment", "contentAlignment");
  return t ? hP(t) : void 0;
}
function HP(e) {
  const t = $(e, "EPAM.offsetDirection", "offsetDirection");
  return t ? gP(t) : void 0;
}
function Iu(e, t = "") {
  return { id: String(e), name: t || String(e) };
}
function Py(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = t, s = $(r, "EPAM.channelType", "channelType") || $(r, "EPAM.channelTypeMA", "channelTypeMA") || Xn(i, "channelType"), a = $(r, "EPAM.brandKitId", "brandKitId"), l = Ct(
    o,
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit",
    "marketingTemplateToBrandKit"
  )[0];
  return {
    id: String(e),
    templateName: $(r, "EPAM.templateName", "templateName", "Title") || `Template ${e}`,
    channelType: LP.includes(s) ? s : zP(s),
    formatPreset: $(r, "EPAM.formatPreset", "formatPreset") || Xn(i, "formatPreset") || "",
    canvasWidth: En(r, "EPAM.canvasWidth", "canvasWidth"),
    canvasHeight: En(r, "EPAM.canvasHeight", "canvasHeight"),
    brandKitId: a || (l != null ? String(l) : ""),
    zones: n,
    allowedAssetIds: Sy(t).map(String),
    designerDocumentJson: $(
      r,
      "EPAM.designerDocumentJson",
      "designerDocumentJson",
      "DesignerDocumentJson"
    ) || void 0
  };
}
function Ed(e, t) {
  const n = t.properties ?? {}, r = t, o = $(n, "EPAM.zoneKey", "zoneKey") || `zone-${e}`, i = $(n, "EPAM.zoneLabel", "zoneLabel", "Title") || `Zone ${e}`, s = $(n, "EPAM.zoneType", "zoneType", "ZoneType", "zoneTypeMA", "ZoneTypeMA") || Xn(r, "zoneType") || Xn(r, "ZoneType") || Xn(r, "EPAM.ZoneType") || Xn(r, "zoneTypeMA"), a = md(s, o, i), l = RP(n) ?? (a === "Heading" ? yd : void 0);
  return {
    id: String(e),
    zoneKey: o,
    zoneLabel: i,
    zoneType: a,
    isLocked: Kc(n, "EPAM.isLocked", "isLocked"),
    sortOrder: En(n, "EPAM.sortOrder", "sortOrder") ?? 0,
    positionX: En(n, "EPAM.positionX", "positionX"),
    positionY: En(n, "EPAM.positionY", "positionY"),
    zoneWidth: En(n, "EPAM.zoneWidth", "zoneWidth"),
    zoneHeight: En(n, "EPAM.zoneHeight", "zoneHeight"),
    maxCharacterCount: En(n, "EPAM.maxCharacterCount", "maxCharacterCount"),
    headingLevel: l,
    contentAlignment: QP(n),
    offsetDirection: HP(n),
    offsetPx: En(n, "EPAM.offsetPx", "offsetPx"),
    aspectRatioLock: $(n, "EPAM.aspectRatioLock", "aspectRatioLock") || void 0,
    htmlDefaultContent: $(n, "EPAM.htmlDefaultContent", "htmlDefaultContent") || void 0,
    htmlAllowUserOverride: Kc(n, "EPAM.htmlAllowUserOverride", "htmlAllowUserOverride"),
    allowedAssetIds: Dy(t).map(String),
    allowedAssetCollectionId: $(n, "EPAM.allowedAssetCollectionId", "allowedAssetCollectionId") || void 0
  };
}
function ky(e, t) {
  const n = t.properties ?? {}, r = Td(t), o = r[0] != null ? String(r[0]) : void 0;
  return {
    id: String(e),
    zoneKey: $(n, "EPAM.zoneKey", "zoneKey", "Title") || `zone-${e}`,
    textValue: $(n, "EPAM.textValue", "textValue") || void 0,
    colorValue: $(n, "EPAM.colorValue", "colorValue") || void 0,
    htmlValue: $(n, "EPAM.htmlValue", "htmlValue") || void 0,
    imageAssetId: $(n, "EPAM.imageAssetId", "imageAssetId") || o || void 0,
    imageAssetUrl: $(n, "EPAM.imageAssetUrl", "imageAssetUrl") || void 0,
    linkUrl: $(n, "EPAM.linkUrl", "linkUrl") || void 0
  };
}
function FP(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = $(r, "EPAM.templateId", "templateId") || String(
    Ct(
      o,
      "marketingAssetToTemplate",
      "MarketingAssetToTemplate",
      "EPAM.MarketingAssetToTemplate"
    )[0] ?? ""
  );
  return {
    id: String(e),
    assetName: $(r, "EPAM.assetName", "assetName", "Title") || `Asset ${e}`,
    channelTypeMA: Iu(
      Ct(o, "channelTypeMA", "ChannelTypeMA")[0] ?? "channel",
      $(r, "EPAM.channelTypeMA", "channelTypeMA") || "Channel"
    ),
    formatPresetMA: Iu(
      Ct(o, "formatPresetMA", "FormatPresetMA")[0] ?? "format",
      $(r, "EPAM.formatPresetMA", "formatPresetMA") || "Format"
    ),
    outputFormatMA: Iu(
      Ct(o, "outputFormatMA", "OutputFormatMA")[0] ?? "output",
      $(r, "EPAM.outputFormatMA", "outputFormatMA") || "Output"
    ),
    templateId: i,
    isRawHtmlOverrideMA: Kc(r, "EPAM.isRawHtmlOverrideMA", "isRawHtmlOverrideMA"),
    rawHtmlOverrideContent: $(r, "EPAM.rawHtmlOverrideContent", "rawHtmlOverrideContent") || void 0,
    overrideReasonMA: $(r, "EPAM.overrideReasonMA", "overrideReasonMA") || void 0,
    zoneLayoutJson: $(r, "EPAM.zoneLayoutJson", "zoneLayoutJson", "builderLayoutJson") || void 0,
    designerInstanceJson: $(
      r,
      "EPAM.designerInstanceJson",
      "designerInstanceJson",
      "DesignerInstanceJson"
    ) || void 0,
    zoneValues: n,
    renderedOutputAssetId: $(r, "EPAM.renderedOutputAssetId", "renderedOutputAssetId") || String(Ct(o, "marketingAssetToRenderedOutput")[0] ?? "") || void 0
  };
}
function UP(e, t, n = [], r = []) {
  const o = t.properties ?? {};
  return {
    id: String(e),
    brandKitName: $(o, "EPAM.brandKitName", "brandKitName", "Title") || `Brand kit ${e}`,
    logoAssetUrl: $(o, "EPAM.logoAssetUrl", "logoAssetUrl"),
    colors: n,
    fonts: r
  };
}
function Sy(e) {
  const t = Ct(e.relations, ...ty), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/template.*asset|allowed.*asset/i.test(r) || /collection|zone/i.test(r) || Array.isArray(o) && n.push(...br(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function Td(e) {
  const t = Ct(e.relations, ...ny), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/selected.*asset|zonevalue.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...br(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function Dy(e) {
  const t = Ct(e.relations, ...ey), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/allowed.*asset|zone.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...br(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function jP(e) {
  return [.../* @__PURE__ */ new Set([
    ...Ct(
      e.relations,
      "templateToZone",
      "templateToTemplateZone",
      "TemplateToTemplateZone",
      "EPAM.TemplateToTemplateZone",
      "templateToEPAM.TemplateZone"
    ),
    ...bl(e.relations, /template.*zone/i)
  ])];
}
function By(e) {
  return [.../* @__PURE__ */ new Set([
    ...Ct(
      e.relations,
      "marketingAssetToZoneValue",
      "MarketingAssetToZoneValue",
      "EPAM.MarketingAssetToZoneValue"
    ),
    ...bl(e.relations, /zonevalue/i)
  ])];
}
function GP(e, t) {
  const n = t.properties ?? {}, r = $(n, "EPAM.colorUsageType", "colorUsageType") || "Primary";
  return {
    colorName: $(n, "EPAM.colorName", "colorName") || `Color ${e}`,
    hexValue: $(n, "EPAM.hexValue", "hexValue") || "#000000",
    colorUsageType: r
  };
}
function YP(e, t) {
  const n = t.properties ?? {}, r = $(n, "EPAM.fontUsageType", "fontUsageType") || "Body", o = $(n, "EPAM.fontWeight", "fontWeight") || "Regular";
  return {
    fontFamily: $(n, "EPAM.fontFamily", "fontFamily") || "sans-serif",
    fontWeight: o,
    fontUsageType: r
  };
}
function KP(e) {
  return Ct(
    e.relations,
    "brandKitToColor",
    "BrandKitToColor",
    "brandKitToBrandColor"
  ).concat(bl(e.relations, /color/i));
}
function XP(e) {
  return Ct(
    e.relations,
    "brandKitToFont",
    "BrandKitToFont",
    "brandKitToBrandFont"
  ).concat(bl(e.relations, /font/i));
}
function ZP(e, t, n, r) {
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
  return e.zoneType === "Heading" && (o.headingLevel = e.headingLevel, o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Text" && (o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Image" && (o.aspectRatioLock = e.aspectRatioLock), e.zoneType === "HTML" && (o.htmlDefaultContent = e.htmlDefaultContent, o.htmlAllowUserOverride = e.htmlAllowUserOverride), r === "Social" ? WP(o, t) : VP(o);
}
function WP(e, t) {
  const n = e.zoneType === "Logo" ? 80 : e.zoneType === "Image" ? 360 : e.zoneType === "Heading" ? 120 : e.zoneType === "CTA Button" ? 72 : 96;
  return {
    ...e,
    positionX: e.positionX ?? 40,
    positionY: e.positionY ?? 40 + t * (n + 24),
    zoneWidth: e.zoneWidth ?? 1e3,
    zoneHeight: n
  };
}
function VP(e) {
  return {
    ...e,
    positionX: void 0,
    positionY: void 0,
    zoneWidth: void 0,
    zoneHeight: void 0
  };
}
function JP(e, t, n) {
  const r = IC(t), o = Date.now(), i = [...e.zones].sort((s, a) => s.sortOrder - a.sortOrder).map((s, a) => ZP(s, a, o, t));
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
function Cd(e) {
  const t = wt(e, /allowed.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/^template/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...ey, ...t])];
}
function Pd(e) {
  const t = wt(e, /template.*asset|allowed.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/zone/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...ty, ...t])];
}
function qP(e) {
  const t = wt(e, /selected.*asset|zonevalue.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...ny, ...t])];
}
const Oy = "/api/content-hub";
let b = {}, kd = Oy;
function _P() {
  return kd.replace(/\/$/, "") !== Oy;
}
function $P(e) {
  b = e ?? {};
}
async function Xc(e, t) {
  const n = await fetch(`${kd}${e}`, {
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
async function ae(e) {
  var n;
  if (!((n = b == null ? void 0 : b.raw) != null && n.getAsync))
    throw new Error("Content Hub client is not available. This component must run inside Content Hub.");
  const t = await b.raw.getAsync(`/api/entities/${e}`);
  if (!t.isSuccessStatusCode || !t.content)
    throw new Error(`Content Hub API error (${t.statusCode ?? "unknown"}) loading entity ${e}`);
  return t.content;
}
async function yn(e) {
  const t = [...new Set(e.filter((n) => Number.isFinite(n)))];
  return t.length === 0 ? [] : Promise.all(
    t.map(async (n) => {
      try {
        return await ae(n);
      } catch (r) {
        return ke(
          "related entity",
          `Skipped entity ${n}: ${r instanceof Error ? r.message : String(r)}`
        ), { properties: {}, relations: {}, systemProperties: { id: n } };
      }
    })
  );
}
async function ek(e, t, n) {
  var o;
  let r = ((o = t.brandKitId) == null ? void 0 : o.trim()) ?? "";
  if (!r) {
    const i = await nn(
      b,
      e,
      "templateToBrandKit",
      n.relations
    );
    i[0] != null ? (r = String(i[0]), Z("brandKitId", `Resolved ${r} from templateToBrandKit on template ${e}`)) : Ye(
      "brandKitId",
      `No brand kit linked on template ${e}`,
      "Link templateToBrandKit on the template, or set brandKitId in External component Configuration."
    );
  }
  return {
    ...t,
    brandKitId: r,
    allowedAssetIds: t.allowedAssetIds && t.allowedAssetIds.length > 0 ? t.allowedAssetIds : Sy(n).map(String)
  };
}
async function tk(e, t) {
  const n = Dy(t);
  if (n.length > 0)
    return { ...e, allowedAssetIds: n.map(String) };
  if (!st(t.relations, "templateZoneToAllowedAssetCollection"))
    return e;
  const r = await nn(
    b,
    e.id,
    "templateZoneToAllowedAssetCollection",
    t.relations
  );
  return r[0] != null ? { ...e, allowedAssetCollectionId: String(r[0]) } : e;
}
function by(e) {
  const t = wt(e, /template.*zone/i);
  return [.../* @__PURE__ */ new Set([...t, ...Hi])];
}
async function nk(e, t, n) {
  var o;
  if (!((o = b == null ? void 0 : b.raw) != null && o.getAsync))
    return [];
  const r = encodeURIComponent(
    `Definition.Name=='${e}' AND Parent('${t}').Id==${n}`
  );
  try {
    const i = await b.raw.getAsync(
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
const rk = ["channelType", "ChannelType", "EPAM.ChannelType"], ok = ["formatPreset", "FormatPreset", "EPAM.FormatPreset"];
async function Ny(e) {
  var i, s;
  if (!((i = b == null ? void 0 : b.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating templates.");
  const t = [
    BP(e),
    { Title: { Invariant: e.templateName } },
    { templateName: e.templateName }
  ];
  let n = null, r = "unknown";
  for (const a of t) {
    const l = await b.raw.postAsync("/api/entities", {
      entitydefinition: {
        href: "/api/entitydefinitions/EPAM.Template"
      },
      properties: a
    });
    if (l.isSuccessStatusCode && ((s = l.content) == null ? void 0 : s.id) != null) {
      n = String(l.content.id);
      break;
    }
    r = String(l.statusCode ?? "unknown"), ke("template create", `Create attempt failed (${r}) with keys: ${Object.keys(a).join(", ")}`);
  }
  if (!n)
    throw new Error(
      `Failed to create template "${e.templateName}" (HTTP ${r}). Check Create permission on EPAM.Template and that templateName is a valid property.`
    );
  const o = wy(e);
  if (Object.keys(o).length > 0)
    try {
      await Ly(n, o);
    } catch (a) {
      ke(
        "template create",
        `Template ${n} created but optional property update failed: ${a instanceof Error ? a.message : String(a)}`
      );
    }
  return Z("template create", `Created EPAM.Template ${n} (${e.templateName})`), n;
}
async function ik(e, t, n) {
  var i;
  return (await Nl(n)).channelType === t ? n : (i = (await Iy(e)).find((s) => s.channelType === t)) == null ? void 0 : i.id;
}
async function $p(e, t, n, r) {
  const o = await ae(t);
  for (const i of n) {
    const s = await nn(
      b,
      t,
      i,
      o.relations
    );
    if (s[0] == null)
      continue;
    if (await Po(
      b,
      e,
      String(s[0]),
      n[0]
    )) {
      Z("template taxonomy", `Linked ${r} on template ${e} from template ${t}`);
      return;
    }
  }
  Ye(
    "template taxonomy",
    `Could not link ${r} on template ${e} from reference ${t}`,
    `Set ${r} on the template in Content Hub.`
  );
}
async function xy(e, t, n, r) {
  if (!(n != null && n.trim()))
    return;
  const o = await ik(
    n,
    t,
    r
  );
  if (!o) {
    Ye(
      "template taxonomy",
      `No ${t} template in brand kit ${n} to copy channelType/formatPreset from`,
      "Link channelType and formatPreset on the new template in Content Hub."
    );
    return;
  }
  await $p(
    e,
    o,
    rk,
    "channelType"
  ), await $p(
    e,
    o,
    ok,
    "formatPreset"
  );
}
async function My(e, t) {
  if (!(t != null && t.trim()))
    return;
  if (await Po(b, e, t, "templateToBrandKit")) {
    Z("template brand kit", `Linked template ${e} to brand kit ${t}`);
    return;
  }
  if (await rn(b, t, e, "brandKitToTemplate")) {
    Z("template brand kit", `Linked brand kit ${t} to template ${e}`);
    return;
  }
  Ye(
    "template brand kit",
    `Could not link template ${e} to brand kit ${t}`,
    "Link templateToBrandKit on the template in Content Hub."
  );
}
async function Iy(e) {
  if (!(e != null && e.trim()) || e === ko)
    return [];
  let t = [];
  for (const o of [
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit"
  ])
    if (t = await nk("EPAM.Template", o, e), t.length > 0)
      break;
  if (t.length === 0)
    try {
      const o = await ae(e);
      t = await nn(
        b,
        e,
        "brandKitToTemplate",
        o.relations
      );
    } catch {
      t = [];
    }
  const n = [...new Set(t)];
  return n.length === 0 ? [] : (await Promise.all(n.map((o) => Nl(String(o))))).sort((o, i) => o.templateName.localeCompare(i.templateName));
}
async function sk(e, t, n) {
  const r = await Nl(e), o = JP(r, t, n), i = await Ny(o);
  o.brandKitId && (await My(i, o.brandKitId), await xy(
    i,
    o.channelType,
    o.brandKitId,
    e
  ));
  const s = await Sd({ ...o, id: i }, []);
  return await Hy(s.id, r.allowedAssetIds ?? []), Z(
    "template duplicate",
    `Created template ${s.id} (${s.templateName}) from ${e} as ${t}`
  ), s;
}
async function ak(e, t) {
  var i;
  const n = {
    ...e,
    id: ((i = e.id) == null ? void 0 : i.trim()) || "",
    zones: e.zones ?? []
  }, r = await Ny(n);
  n.brandKitId && (await My(r, n.brandKitId), t != null && t.trim() && await xy(
    r,
    n.channelType,
    n.brandKitId,
    t
  ));
  const o = await Sd({ ...n, id: r }, []);
  return await Hy(o.id, n.allowedAssetIds ?? []), Z(
    "template create",
    `Created template ${o.id} (${o.templateName}) with ${o.zones.length} zone(s)`
  ), o;
}
async function lk(e, t) {
  const n = await ae(e), r = [
    "marketingAssetToTemplate",
    "MarketingAssetToTemplate",
    "EPAM.MarketingAssetToTemplate"
  ], o = await nn(b, e, r[0], n.relations);
  for (const s of o)
    if (String(s) !== t)
      for (const a of r)
        await Mo(b, e, s, a, n.relations);
  let i = !1;
  for (const s of r)
    if (await rn(b, e, t, s, n.relations)) {
      i = !0;
      break;
    }
  if (!i)
    throw new Error(
      `Could not link template ${t} to marketing asset ${e}. Check marketingAssetToTemplate relation permissions.`
    );
  Z("marketing asset template", `Linked marketing asset ${e} to template ${t}`);
}
async function uk(e, t) {
  var r;
  if (!((r = b == null ? void 0 : b.raw) != null && r.getAsync))
    return [];
  const n = encodeURIComponent(
    `Definition.Name=='EPAM.TemplateZone' AND Parent('${t}').Id==${e}`
  );
  try {
    const o = await b.raw.getAsync(
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
async function Nl(e) {
  const t = await ae(e);
  _T(e, t);
  let n = [...new Set(jP(t))];
  if (n.length === 0) {
    const i = by(t.relations), s = await Qi(
      b,
      e,
      t.relations,
      i.filter((a) => st(t.relations, a))
    );
    n = s.ids, s.relationName && Z("template zones", `Found zones via relation ${s.relationName}`);
  }
  if (n.length === 0) {
    const { templateChildRelations: i, zoneParentRelations: s } = await Pl(
      b,
      t.relations
    );
    for (const a of s) {
      const l = await uk(e, a);
      if (l.length > 0) {
        n = l, Z(
          "template zones",
          `Found ${l.length} zone(s) via parent query on ${a}`
        );
        break;
      }
    }
    if (n.length === 0 && i.length > 0) {
      const a = await Qi(
        b,
        e,
        t.relations,
        i.filter((l) => st(t.relations, l))
      );
      n = a.ids, a.relationName && Z("template zones", `Found zones via relation ${a.relationName}`);
    }
  }
  let r = [];
  if (n.length > 0)
    try {
      const i = await yn(n);
      await lC(b, ae, i), r = await Promise.all(
        i.map(async (s, a) => {
          const l = Ed(n[a], s), u = await tk(l, s);
          return cy(b, ae, u, s);
        })
      );
    } catch (i) {
      ke(
        "template zones",
        `Could not load zones for template ${e}: ${i instanceof Error ? i.message : String(i)}`
      ), r = [];
    }
  const o = await ek(
    e,
    Py(e, t, r),
    t
  );
  return r.length > 0 ? (Z("template zones", `Loaded ${r.length} zone(s) for template ${e}`), o) : (Ye(
    "template zones",
    `Template ${e} has no linked zones yet`,
    'This is normal for a new template. Use "Edit Template Zones" to add zones, or link EPAM.TemplateZone entities in Content Hub. Zones link via a Parent relation on EPAM.TemplateZone → EPAM.Template (not on the template entity itself).'
  ), o);
}
async function ck(e) {
  var i;
  const t = await ae(e);
  let n = [...new Set(By(t))];
  n.length === 0 && (n = await nn(
    b,
    e,
    "marketingAssetToZoneValue",
    t.relations
  ));
  let r = [];
  if (n.length > 0)
    try {
      const s = await yn(n);
      r = await Promise.all(
        s.map(
          async (a, l) => vk(n[l], ky(n[l], a), a)
        )
      ), Z("zone values", `Loaded ${r.length} zone value(s) for asset ${e}`);
    } catch (s) {
      ke(
        "zone values",
        `Could not load zone values for asset ${e}: ${s instanceof Error ? s.message : String(s)}`
      ), r = [];
    }
  else
    Ye(
      "zone values",
      `Marketing asset ${e} has no marketingAssetToZoneValue relations yet`,
      "Zone values will be created when you click Save and render HTML."
    );
  let o = FP(e, t, r);
  if (!((i = o.templateId) != null && i.trim())) {
    const s = await nn(
      b,
      e,
      "marketingAssetToTemplate",
      t.relations
    );
    s[0] != null && (o = { ...o, templateId: String(s[0]) });
  }
  return o;
}
async function fk(e) {
  if (!(e != null && e.trim()) || e === ko)
    return rr(
      "brand kit",
      "No brand kit id resolved",
      "Link templateToBrandKit on the template or set brandKitId in Configuration."
    ), ri(Gr(e || ko));
  try {
    const t = await ae(e), n = [...new Set(KP(t))], r = [...new Set(XP(t))], [o, i] = await Promise.all([
      yn(n),
      yn(r)
    ]), s = o.map(
      (u, c) => GP(n[c], u)
    ), a = i.map(
      (u, c) => YP(r[c], u)
    ), l = UP(e, t, s, a);
    return !l.logoAssetUrl && s.length === 0 && a.length === 0 ? (rr(
      "brand kit",
      `Brand kit ${e} (${l.brandKitName}) has no colors, fonts, or logo linked`,
      "Add brandKitToColor / brandKitToFont relations and a logo asset on the brand kit."
    ), ri(Gr(e))) : (s.length === 0 ? Ye("brand kit colors", `Brand kit ${e} has no colors linked`, "Link colors via brandKitToColor.") : Z("brand kit colors", `Loaded ${s.length} color(s) for brand kit ${e}`), a.length === 0 ? Ye("brand kit fonts", `Brand kit ${e} has no fonts linked`, "Link fonts via brandKitToFont.") : Z("brand kit fonts", `Loaded ${a.length} font(s) for brand kit ${e}`), l.logoAssetUrl || Ye("brand kit logo", `Brand kit ${e} has no logo asset`, "Set logoAssetUrl on the brand kit entity."), ri({
      ...Gr(e),
      ...l,
      colors: s.length > 0 ? s : Gr(e).colors,
      fonts: a.length > 0 ? a : Gr(e).fonts
    }));
  } catch (t) {
    return rr("brand kit", t, `Could not load brand kit entity ${e}.`), ri(Gr(e));
  }
}
function dk(e, t) {
  const n = Py(e.id, t, e.zones);
  return n.templateName !== e.templateName || n.canvasWidth !== e.canvasWidth || n.canvasHeight !== e.canvasHeight || n.designerDocumentJson !== e.designerDocumentJson;
}
async function ns(e, t, n, r) {
  var c;
  if (!((c = b == null ? void 0 : b.raw) != null && c.putAsync))
    throw new Error(`Content Hub client is not available for saving ${n}.`);
  if (Object.keys(t).length === 0)
    return !0;
  const o = await ae(e), i = eC(o, t, r), s = await b.raw.putAsync(`/api/entities/${e}`, i);
  if (s.isSuccessStatusCode)
    return !0;
  const a = s.statusCode ?? "unknown", l = s.content != null && typeof s.content == "object" ? String(s.content.Message ?? "") : "", u = l ? `: ${l}` : "";
  if (a === 403 || a === 401)
    return Ye(
      n,
      `Permission denied (${a}) updating entity ${e}${u}`,
      "Grant update permission on this entity definition for your role."
    ), !1;
  throw new Error(
    `Content Hub API error (${a}) saving ${n} on entity ${e}${u}`
  );
}
async function Ly(e, t) {
  return ns(e, t, "template properties", "EPAM.Template");
}
async function Sd(e, t = []) {
  var l;
  if (!((l = b == null ? void 0 : b.raw) != null && l.postAsync))
    throw new Error("Content Hub client is not available for saving template zones.");
  const n = await ae(e.id);
  dk(e, n) && (await Ly(e.id, wy(e)) ? Z("template properties", `Saved properties on template ${e.id}`) : ke(
    "template properties",
    `Skipped property update on template ${e.id}; continuing with zone save.`
  ));
  const r = await Pl(b, n.relations), o = Ak(
    n.relations,
    r.templateChildRelations
  ), i = [], s = /* @__PURE__ */ new Set();
  for (const u of t)
    !e.zones.some((f) => f.id === u.id) && Yc(u.id) && s.add(u.id);
  const a = [...e.zones].sort((u, c) => u.sortOrder - c.sortOrder);
  for (const u of a) {
    const c = t.find((E) => E.id === u.id);
    if (!(!c || !IP(u, c))) {
      i.push(u);
      continue;
    }
    if (Yc(u.id)) {
      await hk(u.id, u), i.push(u);
      continue;
    }
    const A = await gk(u);
    await pk(
      e.id,
      A,
      o,
      n.relations,
      r
    ), i.push({ ...u, id: A }), Z("template zone", `Created EPAM.TemplateZone ${A} (${u.zoneKey}) and linked to template ${e.id}`);
  }
  for (const u of s)
    await yk(e.id, u, o, n.relations);
  return Z("template zones", `Saved ${i.length} template zone(s) on template ${e.id}`), { ...e, zones: i };
}
function Ak(e, t = []) {
  const n = [
    ...t,
    ...by(e)
  ];
  for (const r of n)
    if (st(e, r))
      return r;
  return t[0] ?? Hi[0];
}
async function pk(e, t, n, r, o) {
  const i = o ?? await Pl(b, r);
  let s;
  try {
    const f = await ae(t);
    s = f.relations, $T(t, f);
  } catch {
    s = void 0;
  }
  const a = wt(s, /template/i).filter(
    (f) => !/collection|asset/i.test(f)
  ), l = hi(
    [...a, ...i.zoneParentRelations, ...Ia],
    s,
    /zone.*template|template/i
  );
  for (const f of l)
    if (await Po(b, t, e, f, s)) {
      Z("template zone link", `Linked zone ${t} to template ${e} via parent relation ${f}`);
      return;
    }
  const u = hi(
    [n, ...i.templateChildRelations, ...Hi],
    r,
    /template.*zone/i
  ).filter((f) => !!st(r, f));
  for (const f of u)
    if (await rn(b, e, t, f, r)) {
      Z("template zone link", `Linked zone ${t} to template ${e} via child relation ${f}`);
      return;
    }
  const c = hi(
    [n, ...i.templateChildRelations, ...Hi],
    r,
    /template.*zone/i
  ).filter((f) => !st(r, f));
  for (const f of c)
    if (await rn(b, e, t, f, r)) {
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
async function Cn(e, t, n) {
  if (Object.keys(t).length === 0)
    return !0;
  try {
    return await ns(e, t, n);
  } catch (r) {
    return ke(
      n,
      `Optional property update skipped for entity ${e}: ${r instanceof Error ? r.message : String(r)}`
    ), !1;
  }
}
async function Lu(e, t, n) {
  const r = await ae(e), o = Ed(e, r);
  return (await cy(b, ae, o, r)).zoneType;
}
async function mk(e, t, n) {
  const r = Do(t), o = await gC(b), i = iC(n), s = i || vC(o), a = async () => {
    for (const u of xP(
      r.zoneType,
      o.propertyNames
    ))
      if (await Cn(e, u, "template zone type"), await Lu(
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
    const u = await AC(
      b,
      ae,
      e,
      r.zoneType,
      n
    ), c = await Lu(
      e,
      r.zoneKey,
      r.zoneLabel
    );
    if (c === r.zoneType)
      return !0;
    u && ke(
      "template zone type",
      `Relation link reported success for zone ${e} but reload still reads "${c}".`
    );
  }
  if (!i && yC(o) && await a())
    return !0;
  const l = await Lu(
    e,
    r.zoneKey,
    r.zoneLabel
  );
  return ke(
    "template zone type",
    `Zone ${e} (${r.zoneKey}) still reads as "${l}" after save; expected "${r.zoneType}".`
  ), l === r.zoneType;
}
async function zy(e, t) {
  const n = Do(t), r = await ae(e), o = Ed(e, r), i = bP(n, o);
  if (Object.keys(i).length > 0 && !await Cn(e, i, "template zone identity") && i.zoneLabel != null) {
    const f = n.zoneLabel || n.zoneKey;
    await Cn(
      e,
      { Title: { Invariant: f } },
      "template zone title"
    );
  }
  const s = await mk(e, n, r), a = await Cn(
    e,
    MP(n, o),
    "template zone flags"
  );
  if (!s && !a)
    throw new Error(
      `Could not save zone type "${n.zoneType}" on template zone ${e} (${n.zoneKey}).`
    );
  s || ke(
    "template zone type",
    `Zone flags saved on ${e}, but zone type "${n.zoneType}" may not have persisted in Content Hub.`
  );
  const l = Ty(n, o);
  Object.keys(l).length > 0 && await Cn(e, l, "template zone layout");
  const u = Cy(n, o);
  Object.keys(u).length > 0 && await Cn(e, u, "template zone optional");
}
async function hk(e, t) {
  try {
    await zy(e, t);
  } catch (n) {
    throw new Error(
      `Permission denied updating template zone ${e} (${t.zoneKey}). Grant Update on EPAM.TemplateZone. ${n instanceof Error ? n.message : String(n)}`
    );
  }
  Z("template zone", `Updated EPAM.TemplateZone ${e} (${t.zoneKey}, type ${t.zoneType})`);
}
async function gk(e) {
  var i;
  const t = b.raw;
  if (!(t != null && t.postAsync))
    throw new Error("Content Hub client does not support creating template zones.");
  const n = [
    Ey(e),
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
    o = String(a.statusCode ?? "unknown"), ke(
      "template zone create",
      `Create attempt failed (${o}) for ${e.zoneKey} with keys: ${Object.keys(s).join(", ")}`
    );
  }
  if (!r)
    throw new Error(
      `Failed to create template zone ${e.zoneKey} (HTTP ${o}). Check Create permission on EPAM.TemplateZone.`
    );
  try {
    await zy(r, e);
  } catch (s) {
    ke(
      "template zone create",
      `Zone ${r} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return r;
}
async function yk(e, t, n, r) {
  const o = await Pl(b, r);
  let i;
  try {
    i = (await ae(t)).relations;
  } catch {
    i = void 0;
  }
  const s = hi(
    [...o.zoneParentRelations, ...Ia],
    i,
    /zone.*template/i
  );
  for (const l of s)
    if (await sy(b, t, e, l, i)) {
      Z("template zone unlink", `Cleared parent ${e} from zone ${t} via ${l}`);
      return;
    }
  const a = hi(
    [n, ...o.templateChildRelations, ...Hi],
    r,
    /template.*zone/i
  ).filter((l) => !!st(r, l));
  for (const l of a)
    if (await Mo(b, e, t, l, r)) {
      Z("template zone unlink", `Removed zone ${t} from template ${e} via ${l}`);
      return;
    }
  Ye(
    "template zone unlink",
    `Could not remove zone ${t} from template ${e}`,
    "The new zone was created and linked, but the previous zone link may need to be removed manually in Content Hub."
  );
}
async function vk(e, t, n) {
  var i;
  const r = Td(n), o = t.imageAssetId || (r[0] != null ? String(r[0]) : void 0);
  if (!o)
    return t;
  if ((i = t.imageAssetUrl) != null && i.trim())
    return { ...t, imageAssetId: o };
  try {
    const s = await ae(o), a = Io(o, s);
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
async function Ry(e) {
  const t = await ae(e), n = Pd(t.relations), r = await Qi(
    b,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await yn(r.ids)).map((i, s) => Io(r.ids[s], i)).filter((i) => i != null);
}
async function Qy(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ae(n), i = Pd(o.relations);
  for (const a of i)
    if (await rn(
      b,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "template allowed asset",
        `Linked asset ${r} to template ${n} via ${a}`
      ), !0;
  if ((s = b == null ? void 0 : b.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await b.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return Z(
          "template allowed asset",
          `Linked asset ${r} to template ${n} via ${a}`
        ), !0;
  }
  return Ye(
    "template allowed asset",
    `Could not link asset ${r} to template ${n}`,
    "Create a child relation on EPAM.Template to M.Asset (e.g. templateToAllowedAsset)."
  ), !1;
}
async function wk(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ae(n), i = Pd(o.relations);
  for (const s of i)
    if (await Mo(
      b,
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
async function Hy(e, t = []) {
  const n = [...new Set(t.map((i) => i.trim()).filter(Boolean))];
  if (n.length === 0)
    return;
  const r = await Ry(e), o = new Set(r.map((i) => i.id));
  for (const i of n)
    o.has(i) || await Qy(e, i);
}
async function Ek(e) {
  const t = await ae(e);
  return Td(t).map(String);
}
let pr = null;
async function Tk(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ae(n), i = qP(o.relations), s = i.filter((f) => !!st(o.relations, f)), a = pr == null ? void 0 : pr.name, l = [
    ...new Set(
      [
        a,
        ...s,
        // Prefer the known-good name before spraying aliases that 404.
        "zoneValueToSelectedAsset",
        ...i
      ].filter((f) => !!f)
    )
  ].slice(0, a || s.length > 0 ? 3 : 4), u = await Ek(n);
  for (const f of u)
    if (f !== r)
      for (const A of l)
        await Mo(
          b,
          n,
          f,
          A,
          o.relations
        ), await sy(
          b,
          n,
          f,
          A,
          o.relations
        );
  if (u.includes(r))
    return !0;
  const c = (pr == null ? void 0 : pr.mode) === "child" ? ["child", "parent"] : ["parent", "child"];
  for (const f of c)
    for (const A of l)
      if (f === "parent" ? await Po(
        b,
        n,
        r,
        A,
        o.relations
      ) : await rn(
        b,
        n,
        r,
        A,
        o.relations
      ))
        return pr = { name: A, mode: f }, Z(
          "zone value selected asset",
          `Linked asset ${r} to zone value ${n} via ${A} (${f})`
        ), !0;
  return Ye(
    "zone value selected asset",
    `Could not link asset ${r} to zone value ${n}`,
    "Create a relation on EPAM.MarketingAssetZoneValue to M.Asset (e.g. zoneValueToSelectedAsset)."
  ), !1;
}
async function Ck(e, t) {
  var n;
  (n = t.imageAssetId) != null && n.trim() && await Tk(e, t.imageAssetId);
}
async function Pk(e) {
  const t = await ae(e), n = Cd(t.relations), r = await Qi(
    b,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await yn(r.ids)).map((i, s) => Io(r.ids[s], i)).filter((i) => i != null);
}
async function kk(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ae(n), i = Cd(o.relations);
  for (const a of i)
    if (await rn(
      b,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "zone allowed asset",
        `Linked asset ${r} to zone ${n} via ${a}`
      ), !0;
  if ((s = b == null ? void 0 : b.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await b.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return Z(
          "zone allowed asset",
          `Linked asset ${r} to zone ${n} via ${a}`
        ), !0;
  }
  return Ye(
    "zone allowed asset",
    `Could not link asset ${r} to zone ${n}`,
    "Create a child relation on EPAM.TemplateZone to M.Asset (e.g. templateZoneToAllowedAsset)."
  ), !1;
}
async function Sk(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ae(n), i = Cd(o.relations);
  for (const s of i)
    if (await Mo(
      b,
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
async function Fy(e) {
  const t = await ae(e), n = [
    .../* @__PURE__ */ new Set([
      ...gd,
      ...wt(t.relations, /asset/i)
    ])
  ].filter((i) => st(t.relations, i)), r = await Qi(
    b,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await yn(r.ids)).map((i, s) => Io(r.ids[s], i)).filter((i) => i != null);
}
function Uy(e) {
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
function Dk(e) {
  var n;
  const t = [];
  for (const r of Uy(e)) {
    if (typeof r == "number" && Number.isFinite(r)) {
      t.push(r);
      continue;
    }
    if (!r || typeof r != "object")
      continue;
    const o = r, i = (n = o.systemProperties) == null ? void 0 : n.id, s = o.id ?? o.entityId ?? i;
    typeof s == "number" && Number.isFinite(s) ? t.push(s) : typeof s == "string" && /^\d+$/.test(s.trim()) && t.push(Number(s.trim()));
  }
  return t.length > 0 ? [...new Set(t)] : [...new Set(Ad(e))];
}
function Bk(e, t) {
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
async function jy(e) {
  const n = Uy(e).map((i) => CC(i)).filter((i) => i != null);
  if (n.length > 0)
    return n;
  const r = Dk(e).slice(0, 48);
  return r.length === 0 ? [] : (await yn(r)).map((i, s) => Io(r[s], i)).filter((i) => i != null);
}
async function Ok(e) {
  var n;
  if (!((n = b == null ? void 0 : b.raw) != null && n.postAsync))
    return [];
  const t = [9815, void 0];
  for (const r of t)
    try {
      const o = await b.raw.postAsync(
        "/api/search",
        Bk(e, r)
      );
      if (!o.isSuccessStatusCode || o.content == null)
        continue;
      const i = await jy(o.content);
      if (i.length > 0)
        return Z(
          "asset search",
          `Found ${i.length} approved asset(s) via /api/search${r != null ? ` (component ${r})` : ""}`
        ), i;
    } catch {
    }
  return [];
}
async function bk(e) {
  var o;
  const t = await Ok(e);
  if (t.length > 0)
    return t;
  if (!((o = b == null ? void 0 : b.raw) != null && o.getAsync))
    return [];
  const n = (e == null ? void 0 : e.trim()) || "*", r = [
    `/api/entities/search?query=${encodeURIComponent(n)}&definitionNames=M.Asset&take=48`,
    `/api/entities/search?fullText=${encodeURIComponent(n)}&definitionNames=M.Asset&take=48`
  ];
  for (const i of r)
    try {
      const s = await b.raw.getAsync(i);
      if (!s.isSuccessStatusCode || s.content == null)
        continue;
      const a = await jy(s.content);
      if (a.length > 0)
        return Z("asset search", `Found ${a.length} Content Hub asset(s) via entity search`), a;
    } catch {
    }
  return [];
}
async function em(e) {
  var r, o;
  const t = (r = e == null ? void 0 : e.collectionId) == null ? void 0 : r.trim(), n = e == null ? void 0 : e.query;
  if ((o = b == null ? void 0 : b.raw) != null && o.getAsync)
    try {
      if (t) {
        const i = zp(await Fy(t), n);
        if (i.length > 0)
          return Z(
            "asset search",
            `Loaded ${i.length} asset(s) from collection ${t}`
          ), i;
        Ye(
          "asset search",
          `No assets found in collection ${t}`,
          "Verify AssetCollectionToAsset links or try Image URL."
        );
      } else {
        const i = zp(await bk(n), n);
        if (i.length > 0)
          return i;
      }
    } catch (i) {
      Ye("asset search", i, "Falling back to proxy or demo assets.");
    }
  if (t)
    try {
      const i = await Xc(
        `/assets/search?collectionId=${t}${n ? `&q=${encodeURIComponent(n)}` : ""}`
      );
      if (i.length > 0)
        return i;
    } catch (i) {
      rr("asset search", i);
    }
  return rr("asset search", "Using demo asset results"), TP(n);
}
async function Nk(e) {
  var r;
  const t = [
    ...new Set(
      e.map((o) => Number(o)).filter((o) => Number.isFinite(o) && o > 0)
    )
  ];
  return t.length === 0 || !((r = b == null ? void 0 : b.raw) != null && r.getAsync) ? [] : (await yn(t)).map((o, i) => Io(t[i], o)).filter((o) => o != null);
}
async function xk(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ae(n), i = [
    .../* @__PURE__ */ new Set([
      ...gd,
      ...wt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const a of i)
    if (await rn(
      b,
      n,
      r,
      a,
      o.relations
    ))
      return Z(
        "asset collection",
        `Linked asset ${r} to collection ${n} via ${a}`
      ), !0;
  if ((s = b == null ? void 0 : b.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await b.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return Z(
          "asset collection",
          `Linked asset ${r} to collection ${n} via ${a}`
        ), !0;
  }
  return Ye(
    "asset collection",
    `Could not add asset ${r} to collection ${n}`,
    "Verify AssetCollectionToAsset exists on the collection definition."
  ), !1;
}
async function Mk(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await ae(n), i = [
    .../* @__PURE__ */ new Set([
      ...gd,
      ...wt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const s of i)
    if (await Mo(
      b,
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
async function Gy(e, t) {
  return ns(e, t, "marketing asset properties", "EPAM.MarketingAsset");
}
const Yy = ["EPAM.MarketingAssetZoneValue", "MarketingAssetZoneValue"];
function Ik(e) {
  if (e == null || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.error;
  return typeof n == "string" ? n.trim() : "";
}
function Lk(e) {
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
async function Ky(e, t) {
  const n = await La(b, Yy[0]);
  await Cn(
    e,
    CP(t),
    "zone value title"
  );
  const r = vy(t);
  if (Object.keys(r).length > 0) {
    const o = kP(t, n);
    if (Object.keys(o).length > 0) {
      if (!await Cn(e, o, "zone value content")) {
        const s = {};
        for (const [a, l] of Object.entries(o))
          l != null && typeof l == "object" && !Array.isArray(l) && typeof l.Invariant == "string" ? s[a] = l.Invariant : s[a] = l;
        await Cn(e, s, "zone value content plain");
      }
    } else
      ke(
        "zone value content",
        `No matching content properties on EPAM.MarketingAssetZoneValue for zone ${t.zoneKey} (definition has: ${n.map((i) => i.name).join(", ") || "(none)"}). Text/html will persist via zoneLayoutJson fallback.`
      );
  }
  await Ck(e, t);
}
async function zk(e) {
  var i;
  if (!((i = b == null ? void 0 : b.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating zone values.");
  const t = [
    { Title: { Invariant: e.zoneKey } },
    { Title: e.zoneKey },
    {}
  ];
  let n = null, r = "unknown", o = "";
  for (const s of Yy) {
    for (const a of t) {
      const l = await b.raw.postAsync("/api/entities", {
        entitydefinition: {
          href: `/api/entitydefinitions/${s}`
        },
        properties: a
      }), u = Lk(l.content);
      if (l.isSuccessStatusCode && u) {
        n = u, Z(
          "zone value create",
          `Created ${s} ${u} for ${e.zoneKey} with keys: ${Object.keys(a).join(", ") || "(none)"}`
        );
        break;
      }
      r = String(l.statusCode ?? "unknown"), o = Ik(l.content), ke(
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
    await Ky(n, e);
  } catch (s) {
    ke(
      "zone value create",
      `Zone value ${n} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return n;
}
async function Rk(e) {
  if (!e.id)
    throw new Error(`Zone value for ${e.zoneKey} has no entity id.`);
  try {
    await Ky(e.id, e), Z("zone value", `Updated EPAM.MarketingAssetZoneValue ${e.id} (${e.zoneKey})`);
  } catch (t) {
    throw new Error(
      `Failed to update zone value ${e.id} (${e.zoneKey}). Grant Update on EPAM.MarketingAssetZoneValue. ${t instanceof Error ? t.message : String(t)}`
    );
  }
}
async function Qk(e, t, n) {
  var o;
  const r = [
    ...wt(n, /zonevalue/i),
    "marketingAssetToZoneValue",
    "MarketingAssetToZoneValue",
    "EPAM.MarketingAssetToZoneValue"
  ];
  for (const i of [...new Set(r)])
    if (await rn(
      b,
      e,
      t,
      i,
      n
    ))
      return;
  if (!((o = b == null ? void 0 : b.raw) != null && o.postAsync))
    throw new Error("Content Hub client is not available for linking zone values.");
  for (const i of [...new Set(r)])
    if ((await b.raw.postAsync(
      `/api/entities/${e}/relations/${i}`,
      {
        child: { href: `/api/entities/${t}` }
      }
    )).isSuccessStatusCode)
      return;
  Ye(
    "marketingAssetToZoneValue link",
    `Could not link zone value ${t} to asset ${e}`,
    "The zone value entity was saved but the relation link may need to be created manually."
  );
}
async function Hk(e, t) {
  var a;
  const n = await ae(e), r = [...new Set(By(n))], o = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const l = await yn(r);
    for (let u = 0; u < r.length; u += 1) {
      const c = ky(r[u], l[u]);
      o.has(c.zoneKey) || o.set(c.zoneKey, c);
    }
  }
  const i = [], s = /* @__PURE__ */ new Set();
  for (const l of t) {
    if (!((a = l.zoneKey) != null && a.trim()) || s.has(l.zoneKey))
      continue;
    if (!SP(l)) {
      ke("zone value save", `Skipped empty zone value for ${l.zoneKey}`);
      continue;
    }
    s.add(l.zoneKey);
    const u = l.id ? l : o.get(l.zoneKey), c = u != null && u.id ? { ...l, id: u.id } : { ...l, id: void 0 };
    if (c.id) {
      await Rk(c), i.push(c);
      continue;
    }
    const f = await zk(c), A = { ...c, id: f };
    await Qk(e, f, n.relations), i.push(A);
  }
  return Z("zone values", `Saved ${i.length} EPAM.MarketingAssetZoneValue record(s)`), i;
}
async function Fk(e) {
  const t = DP(e);
  if (Object.keys(t).length === 0)
    return e;
  if (!await Gy(e.id, t))
    throw new Error(
      `Could not save marketing asset ${e.id}. Grant Update on EPAM.MarketingAsset and ensure properties such as zoneLayoutJson exist on the definition.`
    );
  return Z("marketing asset properties", `Saved properties on marketing asset ${e.id}`), e;
}
const Uk = "designerDocumentJson", jk = "designerInstanceJson", so = "EPAM.Template", Rs = "EPAM.BuilderMarketingAsset";
function Xy(e) {
  return (e == null ? void 0 : e.trim()) || jk;
}
function Gk(e) {
  const t = e.split("/").filter(Boolean);
  return decodeURIComponent(t[t.length - 1] ?? so);
}
function Yk(e, t) {
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
async function Zy(e, t) {
  if (t != null && t.trim())
    return t.trim().replace(/^EPAM\./, "");
  const n = e.properties ?? {};
  for (const r of Object.keys(n))
    if (/designerDocumentJson/i.test(r))
      return r.replace(/^EPAM\./, "");
  try {
    const r = pd(e, so), o = Gk(r), s = (await La(b, o)).find((a) => /designerDocumentJson/i.test(a.name));
    if (s)
      return s.name.replace(/^EPAM\./, "");
  } catch {
  }
  return Uk;
}
async function Kk(e, t) {
  const n = await ae(e), r = n.properties ?? {}, o = await Zy(n, t);
  return Yk(r, o);
}
async function Xk(e, t, n, r) {
  if (!(e != null && e.trim()) || !Yc(e.trim()))
    throw new Error(UT());
  const o = await ae(e), i = await Zy(o, n), s = OP(t, r, i);
  try {
    if (!await ns(
      e,
      s,
      "template designer document",
      so
    ))
      throw new Error(
        `Could not save designer document on ${so} ${e}. Ensure property "${i}" exists on the template definition and your role can Update it.`
      );
  } catch (a) {
    throw a instanceof Error && a.message.includes("Could not save designer document") ? a : new Error(
      `Could not save designer document on ${so} ${e}. Ensure property "${i}" exists on EPAM.Template and your role can Update it. ${a instanceof Error ? a.message : String(a)}`
    );
  }
  return Z(
    "template designer document",
    `Saved ${i} on ${so} ${e}`
  ), !0;
}
async function Zk(e, t) {
  const r = (await ae(e)).properties ?? {}, o = Xy(t), i = [`EPAM.${o}`, o, o.replace(/^./, (s) => s.toUpperCase())];
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
async function Wk(e, t, n) {
  const r = Xy(n), o = { [r]: t };
  try {
    if (!await ns(
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
  return Z(
    "builder marketing asset designer instance",
    `Saved ${r} on ${Rs} ${e}`
  ), !0;
}
const Vk = {
  getTemplate: Nl,
  listTemplatesForBrandKit: Iy,
  duplicateTemplate: sk,
  createTemplate: ak,
  linkMarketingAssetToTemplate: lk,
  listTemplates: async (e) => {
    try {
      return await Xc(`/entities/EPAM.Template${e ? `?channelType=${e}` : ""}`);
    } catch (t) {
      return rr("template list", t), [yP(qp)];
    }
  },
  saveTemplate: Sd,
  getBrandKit: fk,
  getMarketingAsset: ck,
  createMarketingAsset: async (e) => {
    try {
      return await Xc("/entities/EPAM.MarketingAsset", {
        method: "POST",
        body: JSON.stringify(e)
      });
    } catch (t) {
      return rr("marketing asset create", t), EP("dummy-asset", e.templateId || qp);
    }
  },
  updateMarketingAsset: Fk,
  saveMarketingAssetZoneValues: Hk,
  updateMarketingAssetProperties: Gy,
  getTemplateDesignerDocument: Kk,
  saveTemplateDesignerDocument: Xk,
  getMarketingAssetDesignerInstance: Zk,
  saveMarketingAssetDesignerInstance: Wk,
  uploadRenderedOutput: async (e, t, n) => {
    if (!_P())
      return ke(
        "rendered output upload",
        `Skipped upload for ${n} — no asset upload proxy is configured on this Content Hub instance.`
      ), { skipped: !0, fileName: n, assetId: e };
    try {
      const r = new FormData();
      r.append("file", t, n), r.append("linkToEntity", "EPAM.MarketingAsset"), r.append("linkToEntityId", e), r.append("relationName", "marketingAssetToRenderedOutput");
      const o = await fetch(`${kd}/assets/upload`, {
        method: "POST",
        body: r
      });
      if (!o.ok)
        throw new Error(`Asset upload failed (${o.status})`);
      return o.json();
    } catch (r) {
      return rr("rendered output upload", r), { skipped: !0, fileName: n, assetId: e };
    }
  },
  searchAssets: em,
  searchAssetsInCollection: async (e, t) => em({ collectionId: e, query: t }),
  getCollectionAssets: Fy,
  getZoneAllowedAssets: Pk,
  getTemplateAllowedAssets: Ry,
  getAssetsByIds: Nk,
  addAssetToCollection: xk,
  removeAssetFromCollection: Mk,
  addAllowedAssetToTemplate: Qy,
  removeAllowedAssetFromTemplate: wk,
  addAllowedAssetToZone: kk,
  removeAllowedAssetFromZone: Sk
}, Zn = 24, Jk = 1, ji = 0.05, Qa = 8, Wy = 48;
function Gi(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function qk(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function tm(e, t, n, r, o = Wy) {
  const i = Math.max(1, n - o * 2), s = Math.max(1, r - o * 2), a = Gi(
    Math.min(i / Math.max(e, 1), s / Math.max(t, 1)),
    ji,
    Qa
  );
  return {
    zoom: a,
    panX: (n - e * a) / 2,
    panY: (r - t * a) / 2
  };
}
function _k(e, t, n, r, o = Wy) {
  const i = Math.max(1, n - o * 2), s = Math.max(1, r - o * 2);
  let a = t.zoom;
  if ((e.width * a > i || e.height * a > s) && (a = Gi(
    Math.min(i / Math.max(e.width, 1), s / Math.max(e.height, 1)),
    ji,
    t.zoom
  )), a !== t.zoom)
    return {
      zoom: a,
      panX: (n - e.width * a) / 2 - e.x * a,
      panY: (r - e.height * a) / 2 - e.y * a
    };
  let l = t.panX, u = t.panY;
  const c = l + e.x * a, f = u + e.y * a, A = c + e.width * a, E = f + e.height * a;
  return c < o ? l += o - c : A > n - o && (l -= A - (n - o)), f < o ? u += o - f : E > r - o && (u -= E - (r - o)), { zoom: a, panX: l, panY: u };
}
const $k = "data:image/png;base64,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", Zc = {
  primary: "#00a651",
  secondary: "#000000",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  text: "#000000",
  muted: "#6b716e"
};
function Yr(e) {
  return typeof e == "boolean" ? e : void 0;
}
function Qs(e) {
  return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function eS(e) {
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
let tS = 1;
function Qt() {
  return `layer-${Date.now().toString(36)}-${tS++}`;
}
function Wc(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: Qt(),
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
        id: Qt(),
        type: e,
        name: "Rectangle",
        x: n,
        y: r,
        width: 160,
        height: 100,
        visible: !0,
        fill: Zc.primary,
        locked: !1,
        allowTransform: !1,
        editableContent: !1
      };
    case "text":
      return {
        id: Qt(),
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
        id: Qt(),
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
function Vy() {
  const e = Wc("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = Zc.secondary;
  const t = Wc("image", { x: 120, y: 140 });
  return t.name = "Logo", t.width = 240, t.height = 80, t.src = $k, t.objectFit = "contain", t.fill = "#ffffff", t.locked = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: Zc.background
    },
    layers: [e, t]
  };
}
function ut(e) {
  return JSON.parse(JSON.stringify(e));
}
const nS = /* @__PURE__ */ new Set(["static", "text", "brand", "picker", "hidden"]), rS = /* @__PURE__ */ new Set(["lhs", "rhs", "image", "logo", "partnerLogo"]);
function oS(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e, n = t.type;
  if (n !== "frame" && n !== "rect" && n !== "text" && n !== "image")
    return null;
  const r = typeof t.id == "string" ? t.id : Qt(), o = typeof t.name == "string" ? t.name : n, i = Number(t.x), s = Number(t.y), a = Number(t.width), l = Number(t.height);
  if (![i, s, a, l].every(Number.isFinite))
    return null;
  const u = {
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
    flowOverflow: Yr(t.flowOverflow),
    continuesFrom: typeof t.continuesFrom == "string" ? t.continuesFrom : void 0,
    fontSize: typeof t.fontSize == "number" ? t.fontSize : void 0,
    dynamicSize: Yr(t.dynamicSize),
    color: typeof t.color == "string" ? t.color : void 0,
    src: typeof t.src == "string" ? t.src : void 0,
    pinLeft: Yr(t.pinLeft),
    pinRight: Yr(t.pinRight),
    pinTop: Yr(t.pinTop),
    pinBottom: Yr(t.pinBottom),
    marginTop: Qs(t.marginTop),
    marginRight: Qs(t.marginRight),
    marginBottom: Qs(t.marginBottom),
    marginLeft: Qs(t.marginLeft),
    pageLayouts: eS(t.pageLayouts),
    objectFit: t.objectFit === "contain" || t.objectFit === "cover" ? t.objectFit : void 0,
    sourceLayerId: typeof t.sourceLayerId == "string" ? t.sourceLayerId : void 0,
    sourceLayerName: typeof t.sourceLayerName == "string" ? t.sourceLayerName : void 0,
    role: typeof t.role == "string" && nS.has(t.role) ? t.role : void 0,
    slot: typeof t.slot == "string" && rS.has(t.slot) ? t.slot : void 0,
    option: typeof t.option == "string" ? t.option : void 0,
    direction: t.direction === "rtl" || t.direction === "ltr" ? t.direction : void 0,
    fieldId: typeof t.fieldId == "string" && t.fieldId ? t.fieldId : void 0
  };
  return typeof t.editableContent == "boolean" ? u.editableContent = t.editableContent : u.editableContent = n === "text" || n === "image", u;
}
function Jy(e) {
  if (!Array.isArray(e))
    return [];
  const t = [];
  for (const n of e) {
    const r = oS(n);
    r && t.push(r);
  }
  return t;
}
function iS(e) {
  if (!Array.isArray(e))
    return;
  const t = [];
  for (const n of e) {
    if (!n || typeof n != "object")
      continue;
    const r = n, o = Number(r.width), i = Number(r.height);
    if (!Number.isFinite(o) || !Number.isFinite(i))
      continue;
    const s = typeof r.id == "string" && r.id ? r.id : Qt(), a = typeof r.name == "string" && r.name ? r.name : `Page ${t.length + 1}`;
    t.push({ id: s, name: a, width: o, height: i, layers: Jy(r.layers) });
  }
  return t.length > 0 ? t : void 0;
}
function sS(e) {
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
function aS(e) {
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
function qy(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e;
  if (t.version !== 1 || !t.canvas || typeof t.canvas != "object" || !Array.isArray(t.layers))
    return null;
  const n = t.canvas;
  let r = Number(n.width), o = Number(n.height);
  if (!Number.isFinite(r) || !Number.isFinite(o))
    return null;
  const i = Jy(t.layers), s = iS(t.pages);
  let a = typeof t.activePageId == "string" ? t.activePageId : void 0;
  if (s != null && s.length) {
    (!a || !s.some((A) => A.id === a)) && (a = s[0].id);
    const f = s.find((A) => A.id === a);
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
  const u = sS(t.settings);
  u && (l.settings = u);
  const c = aS(t.fields);
  return c && (l.fields = c), l;
}
function lS(e) {
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
function uS(e, t) {
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
function Cr(e, t) {
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
function _y(e) {
  let t = 0;
  for (const n of e) {
    const r = /^Page (\d+)$/.exec(n.name.trim());
    r && (t = Math.max(t, Number(r[1])));
  }
  return `Page ${Math.max(t + 1, e.length + 1)}`;
}
function $y(e) {
  var r;
  const t = zt(e);
  if ((r = t.pages) != null && r.length && t.activePageId)
    return t;
  const n = Qt();
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
function cS(e) {
  const t = $y(e), n = t.pages ?? [], r = {
    id: Qt(),
    name: _y(n),
    width: t.canvas.width,
    height: t.canvas.height,
    layers: []
  };
  return { ...t, pages: [...n, r] };
}
function fS(e) {
  const t = $y(e), n = t.pages ?? [], r = {
    id: Qt(),
    name: _y(n),
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
      presetId: Lo(r.width, r.height)
    },
    layers: []
  };
}
function dS(e) {
  const t = zt(e);
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
      presetId: Lo(o.width, o.height)
    },
    layers: o.layers.map((i) => ({ ...i }))
  };
}
function zt(e) {
  var t;
  return !((t = e.pages) != null && t.length) || !e.activePageId ? e : {
    ...e,
    pages: e.pages.map(
      (n) => n.id === e.activePageId ? { ...n, width: e.canvas.width, height: e.canvas.height, layers: e.layers } : n
    )
  };
}
function AS(e) {
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
function pS(e) {
  const t = {}, n = {};
  for (const r of e)
    r.role !== "brand" || r.slot !== "lhs" && r.slot !== "rhs" || !r.option || (n[r.slot] || (n[r.slot] = r.option), r.visible && (t[r.slot] = r.option));
  for (const [r, o] of Object.entries(n))
    t[r] || (t[r] = o);
  return t;
}
const mS = 12;
function hS(e, t) {
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
function gS(e, t, n) {
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
function yS(e) {
  return e.flowText !== void 0 ? e.flowText : e.text || "";
}
function Vc(e, t) {
  var A, E;
  if (typeof document > "u" || typeof document.createElement != "function")
    return e;
  const n = zt(e), r = ((A = n.pages) == null ? void 0 : A.length) ?? 0, o = r > 0 ? n : vS(n), i = o.pages.map((g) => ({
    ...g,
    layers: g.layers.map((v) => ({ ...v }))
  })), s = o.activePageId || i[0].id, a = nm(i, t);
  if (!a || a.layer.type !== "text")
    return e;
  const l = a.layer.continuesFrom || a.layer.id, u = nm(i, l);
  if (!u || u.layer.type !== "text")
    return e;
  const c = u.layer;
  if (!c.flowOverflow)
    return c.flowText = void 0, wS(i, c.id), zu(o, i, s, r);
  const f = TS();
  try {
    let g = c.text || "";
    const v = Ru(f, g, c);
    c.flowText = v.rest ? v.fit : void 0, g = v.rest;
    const B = i.findIndex((h) => h.layers.some((T) => T.id === c.id));
    let d = B, p = 0;
    for (; g && p < mS; ) {
      p += 1;
      const h = d + 1;
      if (h >= i.length) {
        const D = cS(zu(o, i, s, i.length)), H = (E = D.pages) == null ? void 0 : E[D.pages.length - 1];
        if (!H)
          break;
        i.push({ ...H, layers: [] });
      }
      const T = i[h];
      if (!T)
        break;
      const O = T.layers.find((D) => D.continuesFrom === c.id), w = O ?? ES(c, T);
      O || (T.layers = [...T.layers, w]), w.fontSize = c.fontSize, w.color = c.color, w.direction = c.direction;
      let C = Ru(f, g, w);
      if (!C.fit && w.height < T.height - 48 && (w.height = Math.max(w.height, T.height - w.y - 24), C = Ru(f, g, w)), !C.fit) {
        T.layers = T.layers.filter((D) => D.id !== w.id);
        break;
      }
      w.flowText = C.fit, w.text = C.fit, g = C.rest, d = h;
    }
    for (let h = 0; h < i.length; h += 1)
      (h <= B || h > d) && (i[h].layers = i[h].layers.filter((T) => T.continuesFrom !== c.id));
  } finally {
    f.remove();
  }
  for (; i.length > Math.max(r, 1) && i[i.length - 1].layers.length === 0; )
    i.pop();
  return zu(o, i, s, r);
}
function vS(e) {
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
function zu(e, t, n, r) {
  const o = t.find((s) => s.id === n) ?? t[0], i = {
    ...e,
    layers: (o == null ? void 0 : o.layers) ?? e.layers
  };
  return r > 0 || t.length > 1 ? (i.pages = t, i.activePageId = (o == null ? void 0 : o.id) ?? n) : (delete i.pages, delete i.activePageId), i;
}
function nm(e, t) {
  for (const n of e) {
    const r = n.layers.find((o) => o.id === t);
    if (r)
      return { page: n, layer: r };
  }
  return null;
}
function wS(e, t) {
  for (const n of e)
    n.layers = n.layers.filter((r) => r.continuesFrom !== t);
}
function ES(e, t) {
  const r = Math.max(48, t.height - 24 - 24);
  return {
    id: Qt(),
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
function TS() {
  const e = document.createElement("div");
  return e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.left = "-10000px", e.style.top = "0", e.style.visibility = "hidden", e.style.boxSizing = "border-box", e.style.height = "auto", e.style.padding = "4px 6px", e.style.whiteSpace = "pre-wrap", e.style.wordBreak = "break-word", e.style.lineHeight = "1.25", e.style.fontFamily = "Georgia, 'Times New Roman', serif", document.body.appendChild(e), e;
}
function Ru(e, t, n) {
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
function Dd({
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
      a = /* @__PURE__ */ y(
        "div",
        {
          className: "chd-layer-frame",
          style: { background: e.fill || "#ffffff" }
        }
      );
      break;
    case "rect":
      a = /* @__PURE__ */ y(
        "div",
        {
          className: "chd-layer-rect",
          style: { background: e.fill || "#888780" }
        }
      );
      break;
    case "text":
      a = /* @__PURE__ */ y(
        "div",
        {
          className: `chd-layer-text${e.direction === "rtl" ? " chd-layer-text--rtl" : ""}`,
          style: {
            color: e.color || "#1a1a1a",
            fontSize: e.fontSize || 16,
            direction: e.direction === "rtl" ? "rtl" : void 0
          },
          children: yS(e)
        }
      );
      break;
    case "image":
      a = e.src ? /* @__PURE__ */ y(
        "img",
        {
          className: `chd-layer-image${e.objectFit === "contain" || /logo/i.test(e.name) ? " chd-layer-image--contain" : ""}`,
          style: { background: e.fill || "transparent" },
          src: e.src,
          alt: e.name,
          draggable: !1
        }
      ) : /* @__PURE__ */ y("div", { className: "chd-layer-image-placeholder", style: { background: e.fill || "#e8e6e1" }, children: e.name || "Image" });
      break;
  }
  return i ? /* @__PURE__ */ y("div", { className: "chd-layer", style: s, "data-layer-id": e.id, children: a }) : /* @__PURE__ */ x(
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
        e.locked ? /* @__PURE__ */ y(
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
            children: /* @__PURE__ */ x("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: [
              /* @__PURE__ */ y("rect", { x: "2", y: "5.5", width: "8", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.3" }),
              /* @__PURE__ */ y(
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
function ev(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function xl(e) {
  return e.locked ? !1 : ev(e);
}
function rs(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function Bd(e, t, n) {
  return Cr(e, n) ? t === "admin" ? !0 : xl(e) || rs(e) : !1;
}
function CS(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return;
  const t = {};
  for (const [n, r] of Object.entries(e))
    typeof r == "string" && r.trim() && (t[n] = r);
  return Object.keys(t).length > 0 ? t : void 0;
}
function rm(e) {
  var n;
  const t = zt(e);
  return (n = t.pages) != null && n.length ? t.pages.flatMap((r) => r.layers) : t.layers;
}
function PS(e, t, n, r) {
  const o = {}, i = new Map(rm(e).map((a) => [a.id, a]));
  for (const a of rm(t)) {
    const l = i.get(a.id);
    if (!l)
      continue;
    const u = {};
    rs(l) && (a.x !== l.x && (u.x = a.x), a.y !== l.y && (u.y = a.y), a.width !== l.width && (u.width = a.width), a.height !== l.height && (u.height = a.height)), xl(l) && (!l.fieldId && (a.text ?? "") !== (l.text ?? "") && (u.text = a.text), (a.fill ?? "") !== (l.fill ?? "") && (u.fill = a.fill), (a.color ?? "") !== (l.color ?? "") && (u.color = a.color), (a.src ?? "") !== (l.src ?? "") && (u.src = a.src)), Object.keys(u).length > 0 && (o[a.id] = u);
  }
  const s = CS(r);
  return s ? { version: 1, templateId: n, overrides: o, fields: s } : { version: 1, templateId: n, overrides: o };
}
function kS(e, t) {
  const n = {};
  return rs(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), xl(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const SS = 8;
function Hs(e, t) {
  return Math.abs(e - t) <= SS;
}
function Fs(e, t) {
  return e === !0 ? !0 : e === !1 ? !1 : t;
}
function Od(e) {
  return typeof e.pinLeft == "boolean" || typeof e.pinRight == "boolean" || typeof e.pinTop == "boolean" || typeof e.pinBottom == "boolean";
}
function DS(e, t, n) {
  return Od(e) ? {
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
function Yi(e, t, n) {
  const r = DS(e, t, n), o = Us(e, "marginTop"), i = Us(e, "marginRight"), s = Us(e, "marginBottom"), a = Us(e, "marginLeft");
  let l = e.x, u = e.y, c = e.width, f = e.height;
  return r.left && r.right ? (l = a, c = Math.max(Zn, t - a - i)) : r.left ? l = a : r.right && (l = t - i - c), r.top && r.bottom ? (u = o, f = Math.max(Zn, n - o - s)) : r.top ? u = o : r.bottom && (u = n - s - f), { x: l, y: u, width: c, height: f };
}
function tv(e, t, n) {
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
  const t = Lo(e.width, e.height, e.presetId);
  return t !== "custom" ? t : `${Math.round(e.width)}x${Math.round(e.height)}`;
}
function js(e, t) {
  const n = e[t];
  return typeof n == "number" && Number.isFinite(n) ? Math.max(0, n) : 0;
}
function Ha(e) {
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
function BS(e) {
  return { ...e };
}
function OS(e, t) {
  const n = Ki(t);
  return {
    ...e,
    pageLayouts: {
      ...e.pageLayouts,
      [n]: Ha(e)
    }
  };
}
function bS(e, t) {
  return OS(e, t);
}
function NS(e, t, n, r, o) {
  const i = {
    pinTop: e.pinTop === !0,
    pinLeft: e.pinLeft === !0,
    pinRight: e.pinRight === !0,
    pinBottom: e.pinBottom === !0,
    [t]: n
  }, s = { ...e, ...i };
  return {
    ...i,
    ...Yi(s, r, o)
  };
}
function xS(e, t, n, r, o) {
  const i = Math.max(0, Number.isFinite(n) ? n : 0), s = { ...e, [t]: i };
  return Od(s) ? {
    [t]: i,
    ...Yi(s, r, o)
  } : { [t]: i };
}
function nv(e, t, n) {
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
function MS(e, t) {
  const n = Ha(e), r = { ...e.pageLayouts ?? {} };
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
    const l = Yi({ ...e, ...n }, a.width, a.height);
    r[a.key] = {
      ...n,
      ...l
    };
  }
  const s = Yi({ ...e, ...n }, t.width, t.height);
  return {
    ...n,
    ...s,
    pageLayouts: r
  };
}
function IS(e, t, n, r) {
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
      const u = {
        ...l.pageLayouts,
        [i]: Ha(l)
      }, c = u[a];
      if (c)
        return {
          ...l,
          ...BS(c),
          pageLayouts: u
        };
      const f = Od(l) ? { ...l, ...Yi(l, t, n) } : l;
      return u[a] = Ha(f), { ...f, pageLayouts: u };
    })
  };
}
function ii(e) {
  return `{{${e.key}}}`;
}
function LS(e, t = "Text") {
  const r = (e ?? "").split(`
`).map((o) => o.trim()).find(Boolean) || t.trim() || "Text";
  return r.length > 40 ? `${r.slice(0, 40)}…` : r;
}
function zS(e) {
  return e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 40) || "text";
}
function RS(e, t) {
  if (!t.has(e))
    return t.add(e), e;
  let n = 2;
  for (; t.has(`${e}_${n}`); )
    n += 1;
  const r = `${e}_${n}`;
  return t.add(r), r;
}
function om(e) {
  return !(e.type !== "text" || e.continuesFrom || e.fieldId || e.role === "static" || e.role === "brand" || e.role === "hidden" || e.role === "picker" || e.locked || e.editableContent === !1);
}
function Jc(e) {
  var t;
  return (t = e.pages) != null && t.length ? e.pages.map((n) => n.layers) : [e.layers];
}
function rv(e) {
  const t = zt(e);
  if (!Jc(t).some((s) => s.some(om)))
    return e;
  const r = zt(ut(e)), o = [...r.fields ?? []], i = new Set(o.map((s) => s.key));
  for (const s of Jc(r))
    for (const a of s) {
      if (!om(a))
        continue;
      const l = LS(a.text, a.name), u = RS(zS(l), i), c = { id: `field-${Qt()}`, key: u, label: l };
      o.push(c), a.fieldId = c.id;
    }
  return r.fields = o, r;
}
function QS(e) {
  if (!e)
    return null;
  const t = {};
  for (const [n, r] of Object.entries(e))
    typeof r == "string" && r.trim() && (t[n] = r);
  return Object.keys(t).length > 0 ? t : null;
}
function qc(e, t) {
  const n = QS(t);
  if (!n)
    return e;
  const r = zt(ut(e)), o = [];
  for (const s of Jc(r))
    for (const a of s) {
      if (!a.fieldId || a.continuesFrom)
        continue;
      const l = n[a.fieldId];
      l === void 0 || (a.text || "") === l || (a.text = l, o.push(a.id));
    }
  let i = r;
  for (const s of o)
    i = Vc(i, s);
  return i;
}
function HS(e) {
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
function FS(e, t) {
  const n = HS(e);
  if (n.length === 0)
    return { rows: [], unmatched: [] };
  const r = n[0].map((a) => a.trim()), o = [], i = [];
  return r.forEach((a, l) => {
    if (!a)
      return;
    const u = a.toLowerCase(), c = t.find(
      (f) => f.label.toLowerCase() === u || f.key.toLowerCase() === u || ii(f).toLowerCase() === u
    );
    c ? i.push({ index: l, fieldId: c.id }) : o.push(a);
  }), { rows: n.slice(1).map((a) => {
    const l = {};
    for (const u of i) {
      const c = a[u.index] ?? "";
      c.trim() && (l[u.fieldId] = c);
    }
    return l;
  }), unmatched: o };
}
const US = 50, ov = S.createContext(null);
function jS(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function im(e, t, n) {
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
function GS({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: o,
  initialFieldValues: i,
  onDocumentChange: s,
  onInstanceChange: a
}) {
  const l = S.useRef(null);
  l.current || (l.current = n ? ut(n) : Vy());
  const u = S.useRef(
    ut(r ?? n ?? l.current)
  ), c = S.useRef(t);
  c.current = t;
  const [f, A] = S.useState(() => ut(l.current)), [E, g] = S.useState(() => ({ ...i ?? {} })), [v, B] = S.useState(null), [d, p] = S.useState([]), [h, T] = S.useState({
    zoom: Jk,
    panX: 40,
    panY: 40,
    fitNonce: 0
  }), O = S.useRef([ut(l.current)]), w = S.useRef(0), [C, D] = S.useState(0), H = S.useRef(d);
  H.current = d;
  const k = S.useRef(f);
  k.current = f;
  const F = S.useRef(E);
  F.current = E;
  const N = S.useRef(s);
  N.current = s;
  const W = S.useRef(a);
  W.current = a;
  const be = S.useRef(o);
  be.current = o;
  const ue = S.useCallback(() => D((R) => R + 1), []), ne = S.useCallback((R) => {
    var q, Xe;
    if ((q = N.current) == null || q.call(N, ut(zt(R))), c.current === "endUser") {
      const M = be.current ?? "";
      (Xe = W.current) == null || Xe.call(
        W,
        PS(u.current, R, M, F.current)
      );
    }
  }, []), de = S.useCallback(
    (R) => {
      const q = O.current.slice(0, w.current + 1);
      for (q.push(ut(R)); q.length > US; )
        q.shift();
      O.current = q, w.current = q.length - 1, ue();
    },
    [ue]
  ), Q = S.useCallback(
    (R, q) => {
      A(R), k.current = R, q && de(R), ne(R);
    },
    [ne, de]
  ), K = S.useCallback(
    (R) => {
      var Xe;
      const q = c.current === "endUser";
      switch (R.type) {
        case "ADD_LAYER": {
          if (q)
            return;
          const M = Wc(R.layerType, R.at);
          A((U) => {
            let G = { ...U, layers: [...U.layers, M] };
            return M.type === "text" && M.flowOverflow && (G = Vc(G, M.id)), de(G), ne(G), G;
          }), p([M.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const M = R.pushHistory !== !1;
          A((U) => {
            var me;
            const G = (re, Ir) => {
              if (re.id !== R.id)
                return re;
              const Yt = q ? kS(re, R.patch) : R.patch;
              if (Object.keys(Yt).length === 0)
                return re;
              const on = { ...re, ...Yt };
              typeof on.width == "number" && (on.width = Math.max(Zn, on.width)), typeof on.height == "number" && (on.height = Math.max(Zn, on.height));
              const Lr = gS(re, on, R.patch);
              return q || !Ir ? Lr : bS(Lr, U.canvas);
            }, le = U.layers.map((re) => G(re, !0)), J = (me = U.pages) == null ? void 0 : me.map((re) => ({
              ...re,
              layers: re.id === U.activePageId ? le : re.layers.map((Ir) => G(Ir, !1))
            }));
            let he = J ? { ...U, layers: le, pages: J } : { ...U, layers: le };
            const _ = le.find((re) => re.id === R.id) || (J == null ? void 0 : J.flatMap((re) => re.layers).find((re) => re.id === R.id));
            return (_ == null ? void 0 : _.type) === "text" && (!!_.flowOverflow || !!_.continuesFrom || R.patch.flowOverflow === !1) && _ && (he = Vc(he, _.continuesFrom || _.id)), M && de(he), ne(he), he;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if (q)
            return;
          const M = new Set(R.ids ?? H.current);
          if (M.size === 0)
            return;
          A((U) => {
            var me;
            const G = zt(U), le = new Set(M), J = ((me = G.pages) == null ? void 0 : me.flatMap((re) => re.layers)) ?? G.layers;
            for (const re of J)
              re.continuesFrom && le.has(re.continuesFrom) && le.add(re.id);
            const he = (re) => !le.has(re.id), _ = G.layers.filter(he), Gt = G.pages ? {
              ...G,
              layers: _,
              pages: G.pages.map((re) => ({
                ...re,
                layers: re.id === G.activePageId ? _ : re.layers.filter(he)
              }))
            } : { ...G, layers: _ };
            return de(Gt), ne(Gt), Gt;
          }), p((U) => U.filter((G) => !M.has(G)));
          break;
        }
        case "SELECT": {
          p((M) => {
            const U = R.ids.filter((G) => {
              const le = k.current.layers.find((J) => J.id === G);
              return le ? Bd(le, c.current, k.current.settings) : !1;
            });
            if (R.additive) {
              const G = new Set(M);
              for (const le of U)
                G.has(le) ? G.delete(le) : G.add(le);
              return Array.from(G);
            }
            return U;
          });
          break;
        }
        case "UNSELECT_ALL": {
          p([]);
          break;
        }
        case "REORDER": {
          if (q)
            return;
          A((M) => {
            const U = {
              ...M,
              layers: jS(M.layers, R.fromIndex, R.toIndex)
            };
            return de(U), ne(U), U;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if (q)
            return;
          A((M) => {
            const U = {
              ...M,
              layers: M.layers.map(
                (G) => G.id === R.id ? { ...G, visible: R.visible } : G
              )
            };
            return de(U), ne(U), U;
          });
          break;
        }
        case "BRING_FORWARD": {
          if (q)
            return;
          const M = H.current;
          A((U) => {
            const G = { ...U, layers: im(U.layers, M, "forward") };
            return de(G), ne(G), G;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if (q)
            return;
          const M = H.current;
          A((U) => {
            const G = { ...U, layers: im(U.layers, M, "backward") };
            return de(G), ne(G), G;
          });
          break;
        }
        case "ZOOM_SET": {
          T((M) => ({
            ...M,
            zoom: Gi(R.zoom, ji, Qa)
          }));
          break;
        }
        case "ZOOM_RESET": {
          T((M) => ({ ...M, fitNonce: M.fitNonce + 1 }));
          break;
        }
        case "VIEWPORT_SET": {
          T((M) => ({
            ...M,
            zoom: Gi(R.zoom, ji, Qa),
            panX: R.panX,
            panY: R.panY
          }));
          break;
        }
        case "PAN_SET": {
          T((M) => ({
            ...M,
            panX: R.panX,
            panY: R.panY
          }));
          break;
        }
        case "UNDO": {
          if (w.current <= 0)
            return;
          w.current -= 1;
          const M = ut(O.current[w.current]);
          A(M), k.current = M, p([]), ue(), ne(M);
          break;
        }
        case "REDO": {
          if (w.current >= O.current.length - 1)
            return;
          w.current += 1;
          const M = ut(O.current[w.current]);
          A(M), k.current = M, p([]), ue(), ne(M);
          break;
        }
        case "LOAD_DOCUMENT": {
          Q(ut(R.document), !0), p([]);
          break;
        }
        case "SET_CANVAS_SIZE": {
          if (q)
            return;
          A((M) => {
            const U = IS(M, R.width, R.height, R.presetId);
            return U === M ? M : (de(U), ne(U), U);
          });
          break;
        }
        case "SET_TEMPLATE_PAGE": {
          if (!((Xe = zt(k.current).pages) == null ? void 0 : Xe.find((G) => G.id === R.pageId))) {
            B(R.pageId), p([]);
            break;
          }
          B(null), A((G) => {
            var _;
            const le = zt(G), J = (_ = le.pages) == null ? void 0 : _.find((Gt) => Gt.id === R.pageId);
            if (!J || J.id === G.activePageId)
              return G;
            const he = {
              ...le,
              activePageId: J.id,
              canvas: {
                ...le.canvas,
                width: J.width,
                height: J.height,
                presetId: Lo(J.width, J.height)
              },
              layers: J.layers.map((Gt) => ({ ...Gt }))
            };
            return de(he), ne(he), he;
          }), p([]);
          break;
        }
        case "ADD_TEMPLATE_PAGE": {
          if (q)
            return;
          A((M) => {
            const U = fS(M);
            return de(U), ne(U), U;
          }), p([]);
          break;
        }
        case "REMOVE_TEMPLATE_PAGE": {
          if (q)
            return;
          A((M) => {
            const U = dS(M);
            return U ? (de(U), ne(U), U) : M;
          }), p([]);
          break;
        }
        case "SET_BRAND_OPTION": {
          A((M) => {
            var G;
            const U = {
              ...M,
              settings: {
                brands: { ...(G = M.settings) == null ? void 0 : G.brands, [R.slot]: R.option }
              }
            };
            return de(U), ne(U), U;
          }), p([]);
          break;
        }
        case "PUSH_LAYER_TO_ALL_PAGES": {
          if (q)
            return;
          A((M) => {
            const U = {
              ...M,
              layers: M.layers.map((G) => G.id !== R.id ? G : { ...G, ...MS(G, M.canvas) })
            };
            return de(U), ne(U), U;
          });
          break;
        }
        case "SET_FIELD_VALUE": {
          if (!q)
            return;
          const M = { ...F.current };
          R.value.trim() ? M[R.fieldId] = R.value : delete M[R.fieldId], F.current = M, g(M), ne(k.current);
          break;
        }
        case "SET_FIELD_LABEL": {
          if (q || !R.label.trim())
            return;
          A((M) => {
            var G;
            if (!((G = M.fields) != null && G.some((le) => le.id === R.fieldId)))
              return M;
            const U = {
              ...M,
              fields: M.fields.map(
                (le) => le.id === R.fieldId ? { ...le, label: R.label } : le
              )
            };
            return de(U), ne(U), U;
          });
          break;
        }
        case "SET_LAYER_FIELD": {
          if (q)
            return;
          A((M) => {
            var J;
            if (R.fieldId && !((J = M.fields) != null && J.some((he) => he.id === R.fieldId)))
              return M;
            const U = (he) => {
              if (he.id !== R.layerId || he.continuesFrom)
                return he;
              if (!R.fieldId) {
                const _ = { ...he };
                return delete _.fieldId, _;
              }
              return { ...he, fieldId: R.fieldId };
            }, G = M.layers.map(U), le = M.pages ? {
              ...M,
              layers: G,
              pages: M.pages.map((he) => ({
                ...he,
                layers: he.id === M.activePageId ? G : he.layers.map(U)
              }))
            } : { ...M, layers: G };
            return de(le), ne(le), le;
          });
          break;
        }
        case "ADD_MAGIC_STRINGS": {
          if (q)
            return;
          A((M) => {
            const U = rv(M);
            return U === M ? M : (de(U), ne(U), U);
          });
          break;
        }
        case "COMMIT": {
          A((M) => (de(M), ne(M), M));
          break;
        }
      }
    },
    [Q, ue, ne, de]
  ), V = S.useCallback(
    () => ut(zt(f)),
    [f]
  ), X = S.useCallback(
    (R) => {
      if (c.current === "endUser")
        return !1;
      try {
        const q = qy(JSON.parse(R));
        return q ? (u.current = ut(q), Q(q, !0), p([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [Q]
  );
  S.useEffect(() => {
    t === "admin" && n && (u.current = ut(n)), t === "endUser" && r && (u.current = ut(r));
  }, [n, r, t]);
  const Ee = S.useMemo(() => {
    const R = t === "endUser" ? qc(f, E) : f;
    if (t !== "endUser" || !v || !R.pages)
      return R;
    const q = R.pages.find((Xe) => Xe.id === v);
    return q ? {
      ...R,
      activePageId: q.id,
      layers: q.layers,
      canvas: { ...R.canvas, width: q.width, height: q.height }
    } : R;
  }, [t, f, E, v]), In = S.useMemo(
    () => ({
      mode: t,
      templateId: o,
      document: f,
      outputDocument: Ee,
      fieldValues: E,
      selection: d,
      viewport: h,
      canUndo: w.current > 0,
      canRedo: w.current < O.current.length - 1,
      dispatch: K,
      exportDocument: V,
      importDocumentJson: X
    }),
    [
      t,
      o,
      f,
      Ee,
      E,
      d,
      h,
      K,
      V,
      X,
      C
    ]
  );
  return /* @__PURE__ */ y(ov.Provider, { value: In, children: e });
}
function Mn() {
  const e = S.useContext(ov);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function bd() {
  return Mn().mode;
}
function Ml() {
  return Mn().document;
}
function Il() {
  return Mn().outputDocument;
}
function YS() {
  return Mn().fieldValues;
}
function iv() {
  return Mn().document.layers;
}
function Ll() {
  return Mn().selection;
}
function sv() {
  return Mn().viewport;
}
function os() {
  return Mn().dispatch;
}
function KS() {
  const e = Mn();
  return {
    mode: e.mode,
    canUndo: e.canUndo,
    canRedo: e.canRedo,
    exportDocument: e.exportDocument,
    importDocumentJson: e.importDocumentJson,
    dispatch: e.dispatch
  };
}
const XS = ["nw", "ne", "sw", "se"];
function ZS() {
  const e = Il(), t = Ll(), n = sv(), r = os(), o = bd(), [i, s] = S.useState(null), [a, l] = S.useState(!1), u = S.useRef(n);
  u.current = n;
  const c = S.useRef(o);
  c.current = o;
  const f = S.useRef(null), A = S.useRef(null);
  A.current = i;
  const E = S.useRef(!1), g = (k) => {
    const F = u.current;
    Math.abs(F.zoom - k.zoom) < 1e-3 && Math.abs(F.panX - k.panX) < 0.5 && Math.abs(F.panY - k.panY) < 0.5 || r({ type: "VIEWPORT_SET", ...k });
  };
  S.useEffect(() => {
    const k = f.current;
    if (!k)
      return;
    const F = () => {
      if (A.current)
        return;
      const W = k.getBoundingClientRect();
      W.width < 8 || W.height < 8 || g(tm(e.canvas.width, e.canvas.height, W.width, W.height));
    };
    E.current = !0, F();
    const N = new ResizeObserver(F);
    return N.observe(k), () => N.disconnect();
  }, [e.canvas.width, e.canvas.height, e.activePageId, n.fitNonce, r]);
  const v = t.join(`
`);
  S.useEffect(() => {
    const k = E.current;
    if (E.current = !1, A.current || t.length === 0)
      return;
    const F = f.current;
    if (!F)
      return;
    const N = e.layers.filter(
      (ue) => t.includes(ue.id) && Cr(ue, e.settings)
    );
    if (N.length === 0)
      return;
    const W = F.getBoundingClientRect();
    if (W.width < 8 || W.height < 8)
      return;
    const be = k ? tm(e.canvas.width, e.canvas.height, W.width, W.height) : u.current;
    g(_k(WS(N), be, W.width, W.height));
  }, [v]), S.useEffect(() => {
    const k = (N) => {
      if (N.code === "Space" && !(N.target instanceof HTMLInputElement) && !(N.target instanceof HTMLTextAreaElement) && (N.preventDefault(), l(!0)), c.current === "admin" && (N.key === "Delete" || N.key === "Backspace") && t.length > 0) {
        const W = N.target.tagName;
        if (W === "INPUT" || W === "TEXTAREA")
          return;
        N.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (N.ctrlKey || N.metaKey) && N.key.toLowerCase() === "z" && !N.shiftKey && (N.preventDefault(), r({ type: "UNDO" })), (N.ctrlKey || N.metaKey) && (N.key.toLowerCase() === "y" || N.key.toLowerCase() === "z" && N.shiftKey) && (N.preventDefault(), r({ type: "REDO" }));
    }, F = (N) => {
      N.code === "Space" && l(!1);
    };
    return window.addEventListener("keydown", k), window.addEventListener("keyup", F), () => {
      window.removeEventListener("keydown", k), window.removeEventListener("keyup", F);
    };
  }, [r, t.length]), S.useEffect(() => {
    if (!i)
      return;
    const k = (N) => {
      const W = u.current.zoom;
      if (i.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: i.origPanX + (N.clientX - i.startX),
          panY: i.origPanY + (N.clientY - i.startY)
        });
        return;
      }
      const { dx: be, dy: ue } = qk(
        N.clientX - i.startX,
        N.clientY - i.startY,
        W
      );
      if (i.kind === "move") {
        for (const V of i.ids) {
          const X = i.origins[V];
          X && r({
            type: "UPDATE_LAYER",
            id: V,
            patch: { x: X.x + be, y: X.y + ue },
            pushHistory: !1
          });
        }
        return;
      }
      let ne = i.origX, de = i.origY, Q = i.origW, K = i.origH;
      i.handle.includes("e") && (Q = Math.max(Zn, i.origW + be)), i.handle.includes("s") && (K = Math.max(Zn, i.origH + ue)), i.handle.includes("w") && (Q = Math.max(Zn, i.origW - be), ne = i.origX + (i.origW - Q)), i.handle.includes("n") && (K = Math.max(Zn, i.origH - ue), de = i.origY + (i.origH - K)), r({
        type: "UPDATE_LAYER",
        id: i.id,
        patch: { x: ne, y: de, width: Q, height: K },
        pushHistory: !1
      });
    }, F = () => {
      (i.kind === "move" || i.kind === "resize") && r({ type: "COMMIT" }), s(null);
    };
    return window.addEventListener("pointermove", k), window.addEventListener("pointerup", F), () => {
      window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", F);
    };
  }, [i, r]);
  const B = (k) => {
    k.preventDefault();
    const F = Gi(n.zoom * (k.deltaY < 0 ? 1.08 : 0.92), ji, Qa);
    r({ type: "ZOOM_SET", zoom: F });
  }, d = (k) => {
    s({
      kind: "pan",
      startX: k.clientX,
      startY: k.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, p = (k) => {
    if (k.button === 1 || k.button === 0 && a) {
      k.preventDefault(), d(k);
      return;
    }
    k.button === 0 && r({ type: "UNSELECT_ALL" });
  }, h = (k, F) => {
    Bd(k, o, e.settings) && r({
      type: "SELECT",
      ids: [k.id],
      additive: F.shiftKey
    });
  }, T = (k) => o === "admin" ? !k.locked : rs(k), O = (k, F) => {
    if (!T(k) || a)
      return;
    const N = t.includes(k.id) ? t : [k.id];
    t.includes(k.id) || r({ type: "SELECT", ids: [k.id] });
    const W = {};
    for (const be of N) {
      const ue = e.layers.find((ne) => ne.id === be);
      ue && T(ue) && (W[be] = { x: ue.x, y: ue.y });
    }
    Object.keys(W).length !== 0 && s({
      kind: "move",
      ids: Object.keys(W),
      startX: F.clientX,
      startY: F.clientY,
      origins: W
    });
  }, w = (k, F, N) => {
    N.stopPropagation(), T(k) && (r({ type: "SELECT", ids: [k.id] }), s({
      kind: "resize",
      id: k.id,
      startX: N.clientX,
      startY: N.clientY,
      origX: k.x,
      origY: k.y,
      origW: k.width,
      origH: k.height,
      handle: F
    }));
  }, C = e.layers.filter(
    (k) => t.includes(k.id) && Cr(k, e.settings)
  ), D = C.length === 1 ? C[0] : null, H = D ? T(D) : !1;
  return /* @__PURE__ */ x(
    "div",
    {
      ref: f,
      className: `chd-viewport${a ? " chd-viewport--panning" : ""}`,
      onWheel: B,
      onPointerDown: p,
      children: [
        /* @__PURE__ */ y(
          "div",
          {
            className: "chd-world",
            style: {
              transform: `translate(${n.panX}px, ${n.panY}px) scale(${n.zoom})`
            },
            children: /* @__PURE__ */ x(
              "div",
              {
                className: "chd-artboard",
                "data-chd-artboard": "true",
                style: {
                  width: e.canvas.width,
                  height: e.canvas.height,
                  background: e.canvas.background || "#eceae4"
                },
                onPointerDown: (k) => {
                  k.button !== 0 || a || (k.stopPropagation(), r({ type: "UNSELECT_ALL" }));
                },
                children: [
                  /* @__PURE__ */ y("div", { className: "chd-artboard-page" }),
                  e.layers.filter((k) => Cr(k, e.settings)).map((k) => /* @__PURE__ */ y(
                    Dd,
                    {
                      layer: k,
                      selected: t.includes(k.id),
                      onSelect: (F) => h(k, F),
                      onMoveStart: (F) => O(k, F),
                      onUnlock: o === "admin" ? () => r({ type: "UPDATE_LAYER", id: k.id, patch: { locked: !1 } }) : void 0
                    },
                    k.id
                  )),
                  H && D ? /* @__PURE__ */ y(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: D.x,
                        top: D.y,
                        width: D.width,
                        height: D.height
                      },
                      children: XS.map((k) => /* @__PURE__ */ y(
                        "div",
                        {
                          className: `chd-handle chd-handle--${k}`,
                          onPointerDown: (F) => w(D, k, F)
                        },
                        k
                      ))
                    }
                  ) : D ? /* @__PURE__ */ y(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: D.x,
                        top: D.y,
                        width: D.width,
                        height: D.height
                      }
                    }
                  ) : null,
                  C.length > 1 ? C.map((k) => /* @__PURE__ */ y(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: k.x,
                        top: k.y,
                        width: k.width,
                        height: k.height
                      }
                    },
                    `sel-${k.id}`
                  )) : null
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ y("div", { className: "chd-viewport-hint", children: "Scroll to zoom · Space+drag to pan · Shift+click multi-select" })
      ]
    }
  );
}
function WS(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (const i of e)
    t = Math.min(t, i.x), n = Math.min(n, i.y), r = Math.max(r, i.x + i.width), o = Math.max(o, i.y + i.height);
  return { x: t, y: n, width: Math.max(1, r - t), height: Math.max(1, o - n) };
}
function VS({
  collapsed: e = !1,
  onToggleCollapse: t
}) {
  const n = iv(), r = Ml(), o = Ll(), i = os(), s = bd(), a = s === "admin", [l, u] = S.useState(null), [c, f] = S.useState(null), A = [...n].map((g, v) => ({ layer: g, index: v })).reverse().filter(
    ({ layer: g }) => Cr(g, r.settings) && (a || Bd(g, s, r.settings))
  ), E = (g, v) => {
    if (g === v)
      return;
    const B = n.findIndex((p) => p.id === g), d = n.findIndex((p) => p.id === v);
    B < 0 || d < 0 || i({ type: "REORDER", fromIndex: B, toIndex: d });
  };
  return /* @__PURE__ */ x(
    "aside",
    {
      className: `chd-panel chd-layers-panel${a ? " chd-layers-panel--admin" : ""}${e ? " chd-panel--collapsed" : ""}`,
      "aria-label": "Layers",
      children: [
        /* @__PURE__ */ x("div", { className: "chd-panel-header", children: [
          e ? /* @__PURE__ */ y("span", { className: "chd-panel-rail-label", children: a ? "Layers" : "Editable" }) : /* @__PURE__ */ y("span", { children: a ? "Layers" : "Editable layers" }),
          t ? /* @__PURE__ */ y(
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
        e ? null : /* @__PURE__ */ y("ul", { className: "chd-layer-list", children: A.length === 0 ? /* @__PURE__ */ y("li", { className: "chd-panel-empty", children: "No editable layers" }) : A.map(({ layer: g, index: v }) => {
          const B = o.includes(g.id);
          return /* @__PURE__ */ x(
            "li",
            {
              draggable: a,
              className: `chd-layer-list-item${B ? " chd-layer-list-item--selected" : ""}${l === g.id ? " chd-layer-list-item--dragging" : ""}${c === g.id ? " chd-layer-list-item--drag-over" : ""}`,
              onDragStart: (d) => {
                if (a) {
                  if (d.target.closest("button")) {
                    d.preventDefault();
                    return;
                  }
                  d.dataTransfer.effectAllowed = "move", d.dataTransfer.setData("text/plain", g.id), u(g.id);
                }
              },
              onDragOver: (d) => {
                a && (d.preventDefault(), d.dataTransfer.dropEffect = "move", c !== g.id && f(g.id));
              },
              onDragLeave: () => {
                f((d) => d === g.id ? null : d);
              },
              onDrop: (d) => {
                d.preventDefault();
                const p = d.dataTransfer.getData("text/plain");
                p && E(p, g.id), u(null), f(null);
              },
              onDragEnd: () => {
                u(null), f(null);
              },
              children: [
                a ? /* @__PURE__ */ y("span", { className: "chd-layer-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }) : null,
                /* @__PURE__ */ x(
                  "button",
                  {
                    type: "button",
                    className: "chd-layer-list-select",
                    onClick: (d) => i({
                      type: "SELECT",
                      ids: [g.id],
                      additive: d.shiftKey
                    }),
                    children: [
                      /* @__PURE__ */ y("span", { className: "chd-layer-list-type", children: g.type }),
                      /* @__PURE__ */ y("span", { className: "chd-layer-list-name", children: g.name })
                    ]
                  }
                ),
                a ? /* @__PURE__ */ x(gr, { children: [
                  /* @__PURE__ */ y(
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
                  /* @__PURE__ */ y(
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
                  /* @__PURE__ */ y(
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
const JS = 104, qS = 72;
function _S(e) {
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
function $S({
  page: e,
  selected: t,
  onSelect: n
}) {
  const r = Il(), o = Math.min(JS / e.width, qS / e.height), i = e.layers.filter((s) => Cr(s, r.settings));
  return /* @__PURE__ */ x(
    "button",
    {
      type: "button",
      className: `chd-page-thumb${t ? " chd-page-thumb--active" : ""}`,
      "aria-pressed": t,
      onClick: n,
      children: [
        /* @__PURE__ */ y(
          "span",
          {
            className: "chd-page-thumb-frame",
            style: { width: Math.round(e.width * o), height: Math.round(e.height * o) },
            children: /* @__PURE__ */ y(
              "span",
              {
                className: "chd-page-thumb-art",
                style: {
                  width: e.width,
                  height: e.height,
                  transform: `scale(${o})`,
                  background: r.canvas.background || "#ffffff"
                },
                children: i.map((s) => /* @__PURE__ */ y(
                  Dd,
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
        /* @__PURE__ */ y("span", { className: "chd-page-thumb-name", children: e.name })
      ]
    }
  );
}
function eD() {
  var o;
  const e = Il(), t = os(), n = _S(e), r = e.activePageId || ((o = n[0]) == null ? void 0 : o.id);
  return /* @__PURE__ */ y("div", { className: "chd-page-strip", role: "tablist", "aria-label": "Pages", children: n.map((i) => /* @__PURE__ */ y(
    $S,
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
function tD({
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
  const [u, c] = S.useState(!1), [f, A] = S.useState("content-hub"), [E, g] = S.useState(""), [v, B] = S.useState(""), [d, p] = S.useState(""), [h, T] = S.useState([]), [O, w] = S.useState(!1), [C, D] = S.useState(null);
  S.useEffect(() => {
    const N = window.setTimeout(() => B(E), 250);
    return () => window.clearTimeout(N);
  }, [E]), S.useEffect(() => {
    u && A("content-hub");
  }, [u]), S.useEffect(() => {
    if (!u || f !== "content-hub")
      return;
    let N = !1;
    return w(!0), D(null), Vk.searchAssets({ collectionId: e, query: v }).then((W) => {
      N || T(W);
    }).catch((W) => {
      N || (T([]), D(W instanceof Error ? W.message : "Could not search Content Hub assets."));
    }).finally(() => {
      N || w(!1);
    }), () => {
      N = !0;
    };
  }, [u, f, e, v]);
  const H = () => {
    c(!1), p("");
  }, k = () => {
    const N = d.trim();
    N && (l == null || l(N), a({
      id: "",
      name: "Image URL",
      thumbnailUrl: N,
      previewUrl: N
    }), H());
  }, F = u ? /* @__PURE__ */ x("div", { className: `asset-picker-panel${o ? " asset-picker-panel-overlay" : ""}`, children: [
    /* @__PURE__ */ x("div", { className: "asset-picker-panel-header", children: [
      /* @__PURE__ */ y("strong", { children: "Approved assets" }),
      /* @__PURE__ */ y("button", { type: "button", className: "asset-picker-close", onClick: H, "aria-label": "Close asset picker", children: "Close" })
    ] }),
    i && /* @__PURE__ */ x("div", { className: "asset-picker-mode-tabs", children: [
      /* @__PURE__ */ y(
        "button",
        {
          type: "button",
          className: `asset-picker-mode-tab${f === "content-hub" ? " asset-picker-mode-tab-active" : ""}`,
          onClick: () => A("content-hub"),
          children: "Content Hub"
        }
      ),
      /* @__PURE__ */ y(
        "button",
        {
          type: "button",
          className: `asset-picker-mode-tab${f === "url" ? " asset-picker-mode-tab-active" : ""}`,
          onClick: () => A("url"),
          children: "Image URL"
        }
      )
    ] }),
    f === "content-hub" && /* @__PURE__ */ x(gr, { children: [
      /* @__PURE__ */ y(
        "input",
        {
          className: "asset-picker-search",
          placeholder: e ? "Search approved assets" : "Search approved Content Hub assets",
          value: E,
          onChange: (N) => g(N.target.value),
          autoFocus: !0
        }
      ),
      e ? /* @__PURE__ */ x("div", { className: "asset-picker-hint", children: [
        "Collection ",
        e
      ] }) : /* @__PURE__ */ y("div", { className: "asset-picker-hint", children: "Searching approved assets via Content Hub SearchConfiguration" }),
      t && /* @__PURE__ */ x("div", { className: "asset-picker-hint", children: [
        "Recommended aspect ratio: ",
        t
      ] }),
      O && /* @__PURE__ */ y("div", { className: "asset-picker-loading", children: "Searching..." }),
      C && /* @__PURE__ */ y("div", { className: "asset-picker-error", children: C }),
      /* @__PURE__ */ x("div", { className: "asset-picker-grid", children: [
        h.map((N) => /* @__PURE__ */ x(
          "button",
          {
            type: "button",
            className: "asset-picker-thumb",
            onClick: () => {
              a(N), H();
            },
            children: [
              /* @__PURE__ */ y("img", { src: N.thumbnailUrl, alt: N.name }),
              /* @__PURE__ */ y("span", { children: N.name })
            ]
          },
          N.id || N.thumbnailUrl
        )),
        !O && !C && h.length === 0 && /* @__PURE__ */ y("div", { className: "asset-picker-empty", children: i ? "No assets found. Try Image URL instead." : "No assets found. Try a different search." })
      ] })
    ] }),
    f === "url" && i && /* @__PURE__ */ x("div", { className: "asset-picker-url-form", children: [
      /* @__PURE__ */ x("label", { children: [
        "Image URL",
        /* @__PURE__ */ y(
          "input",
          {
            className: "asset-picker-search",
            placeholder: "https://...",
            value: d,
            onChange: (N) => p(N.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ y("button", { type: "button", className: "asset-picker-url-apply", onClick: k, disabled: !d.trim(), children: "Use image URL" })
    ] })
  ] }) : null;
  return /* @__PURE__ */ x("div", { className: `asset-picker${r ? " asset-picker-compact" : ""}`, children: [
    /* @__PURE__ */ y(
      "button",
      {
        type: "button",
        className: "asset-picker-trigger",
        disabled: s,
        onClick: () => c((N) => !N),
        children: n
      }
    ),
    u && o ? /* @__PURE__ */ x("div", { className: "asset-picker-modal", role: "dialog", "aria-modal": "true", "aria-label": "Approved assets", children: [
      /* @__PURE__ */ y("button", { type: "button", className: "asset-picker-backdrop", "aria-label": "Close asset picker", onClick: H }),
      F
    ] }) : F
  ] });
}
function Kr({
  label: e,
  value: t,
  onChange: n,
  disabled: r
}) {
  return /* @__PURE__ */ x("label", { className: "chd-field", children: [
    /* @__PURE__ */ y("span", { children: e }),
    /* @__PURE__ */ y(
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
function Zt({ title: e, children: t }) {
  return /* @__PURE__ */ x("section", { className: "chd-prop-section", children: [
    /* @__PURE__ */ y("h3", { className: "chd-prop-section-title", children: e }),
    t
  ] });
}
function nD({
  collapsed: e = !1,
  onToggleCollapse: t
}) {
  var B;
  const n = iv(), r = YS(), o = Ll(), i = os(), s = bd(), a = Ml(), l = s === "admin", u = n.filter((d) => o.includes(d.id)), c = u.length === 1 ? u[0] : null, f = (d) => {
    c && i({ type: "UPDATE_LAYER", id: c.id, patch: d });
  }, A = c ? l ? !c.locked : rs(c) : !1, E = c ? l ? !c.locked : xl(c) : !1, g = (c == null ? void 0 : c.type) === "text" ? hS(a, c) : null, v = g != null && g.fieldId ? (B = a.fields) == null ? void 0 : B.find((d) => d.id === g.fieldId) : void 0;
  return /* @__PURE__ */ x(
    "aside",
    {
      className: `chd-panel chd-properties-panel${e ? " chd-panel--collapsed" : ""}`,
      "aria-label": "Properties",
      children: [
        /* @__PURE__ */ x("div", { className: "chd-panel-header", children: [
          e ? /* @__PURE__ */ y("span", { className: "chd-panel-rail-label", children: "Properties" }) : /* @__PURE__ */ y("span", { children: "Properties" }),
          t ? /* @__PURE__ */ y(
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
        e ? null : c ? /* @__PURE__ */ x("div", { className: "chd-properties-body", children: [
          /* @__PURE__ */ x(Zt, { title: "Name", children: [
            /* @__PURE__ */ x("div", { className: l && c.type === "text" ? "chd-field-row" : void 0, children: [
              l ? /* @__PURE__ */ x("label", { className: "chd-field", children: [
                /* @__PURE__ */ y("span", { children: "Name" }),
                /* @__PURE__ */ y(
                  "input",
                  {
                    type: "text",
                    value: c.name,
                    onChange: (d) => f({ name: d.target.value })
                  }
                )
              ] }) : /* @__PURE__ */ x("div", { className: "chd-field", children: [
                /* @__PURE__ */ y("span", { children: "Layer" }),
                /* @__PURE__ */ y("strong", { children: c.name })
              ] }),
              l && c.type === "text" ? /* @__PURE__ */ y(
                Kr,
                {
                  label: "Size",
                  value: c.fontSize ?? 16,
                  disabled: !E,
                  onChange: (d) => f({ fontSize: d })
                }
              ) : null
            ] }),
            l && c.type === "text" ? /* @__PURE__ */ x(gr, { children: [
              /* @__PURE__ */ x("label", { className: "chd-field chd-field-checkbox", children: [
                /* @__PURE__ */ y(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!c.dynamicSize,
                    onChange: (d) => f({ dynamicSize: d.target.checked })
                  }
                ),
                /* @__PURE__ */ y("span", { children: "Dynamic size" })
              ] }),
              /* @__PURE__ */ y("p", { className: "chd-field-hint", children: "Type grows and shrinks when this box is scaled." })
            ] }) : null,
            l ? /* @__PURE__ */ x("label", { className: "chd-field chd-field-checkbox", children: [
              /* @__PURE__ */ y(
                "input",
                {
                  type: "checkbox",
                  checked: !!c.locked,
                  onChange: (d) => f({ locked: d.target.checked })
                }
              ),
              /* @__PURE__ */ y("span", { children: "Locked" })
            ] }) : null
          ] }),
          /* @__PURE__ */ y(Zt, { title: "Placement", children: /* @__PURE__ */ x("div", { className: "chd-field-row", children: [
            /* @__PURE__ */ y(
              Kr,
              {
                label: "X",
                value: Math.round(c.x),
                disabled: !A,
                onChange: (d) => f({ x: d })
              }
            ),
            /* @__PURE__ */ y(
              Kr,
              {
                label: "Y",
                value: Math.round(c.y),
                disabled: !A,
                onChange: (d) => f({ y: d })
              }
            )
          ] }) }),
          /* @__PURE__ */ y(Zt, { title: "Dimensions", children: /* @__PURE__ */ x("div", { className: "chd-field-row", children: [
            /* @__PURE__ */ y(
              Kr,
              {
                label: "W",
                value: Math.round(c.width),
                disabled: !A,
                onChange: (d) => f({ width: d })
              }
            ),
            /* @__PURE__ */ y(
              Kr,
              {
                label: "H",
                value: Math.round(c.height),
                disabled: !A,
                onChange: (d) => f({ height: d })
              }
            )
          ] }) }),
          E && (c.type === "frame" || c.type === "rect" || c.type === "image") && /* @__PURE__ */ y(Zt, { title: "Fill", children: /* @__PURE__ */ x("label", { className: "chd-field", children: [
            /* @__PURE__ */ y("span", { children: "Fill" }),
            /* @__PURE__ */ y(
              "input",
              {
                type: "color",
                value: c.fill && /^#/.test(c.fill) ? c.fill : "#888780",
                onChange: (d) => f({ fill: d.target.value })
              }
            )
          ] }) }),
          l && c.type === "text" && /* @__PURE__ */ x(Zt, { title: "Text", children: [
            /* @__PURE__ */ x("label", { className: "chd-field", children: [
              /* @__PURE__ */ y("span", { children: "Text" }),
              /* @__PURE__ */ y(
                "textarea",
                {
                  rows: 4,
                  value: (g == null ? void 0 : g.text) || "",
                  onChange: (d) => i({
                    type: "UPDATE_LAYER",
                    id: (g == null ? void 0 : g.id) || c.id,
                    patch: { text: d.target.value }
                  })
                }
              )
            ] }),
            /* @__PURE__ */ x("label", { className: "chd-field chd-field-checkbox", children: [
              /* @__PURE__ */ y(
                "input",
                {
                  type: "checkbox",
                  checked: !!(g != null && g.flowOverflow),
                  onChange: (d) => i({
                    type: "UPDATE_LAYER",
                    id: (g == null ? void 0 : g.id) || c.id,
                    patch: { flowOverflow: d.target.checked }
                  })
                }
              ),
              /* @__PURE__ */ y("span", { children: "Continue on next page" })
            ] }),
            /* @__PURE__ */ y("p", { className: "chd-field-hint", children: c.continuesFrom ? "This frame continues the story from the previous page." : "Text that does not fit this box continues at the top of the next page." }),
            /* @__PURE__ */ x("label", { className: "chd-field", children: [
              /* @__PURE__ */ y("span", { children: "Color" }),
              /* @__PURE__ */ y(
                "input",
                {
                  type: "color",
                  value: c.color && /^#/.test(c.color) ? c.color : "#1a1a1a",
                  onChange: (d) => f({ color: d.target.value })
                }
              )
            ] })
          ] }),
          l && c.type === "text" && /* @__PURE__ */ y(Zt, { title: "Magic string", children: c.continuesFrom ? /* @__PURE__ */ y("p", { className: "chd-field-hint", children: v ? `This frame continues ${ii(v)}.` : "This frame continues the story from the previous page." }) : /* @__PURE__ */ x(gr, { children: [
            /* @__PURE__ */ x("label", { className: "chd-field", children: [
              /* @__PURE__ */ y("span", { children: "Field" }),
              /* @__PURE__ */ x(
                "select",
                {
                  value: (g == null ? void 0 : g.fieldId) || "",
                  onChange: (d) => i({
                    type: "SET_LAYER_FIELD",
                    layerId: (g == null ? void 0 : g.id) || c.id,
                    fieldId: d.target.value || null
                  }),
                  children: [
                    /* @__PURE__ */ y("option", { value: "", children: "None" }),
                    (a.fields ?? []).map((d) => /* @__PURE__ */ x("option", { value: d.id, children: [
                      d.label,
                      " (",
                      ii(d),
                      ")"
                    ] }, d.id))
                  ]
                }
              )
            ] }),
            v ? /* @__PURE__ */ x(gr, { children: [
              /* @__PURE__ */ x("label", { className: "chd-field", children: [
                /* @__PURE__ */ y("span", { children: "Label" }),
                /* @__PURE__ */ y(
                  "input",
                  {
                    type: "text",
                    value: v.label,
                    onChange: (d) => i({
                      type: "SET_FIELD_LABEL",
                      fieldId: v.id,
                      label: d.target.value
                    })
                  }
                )
              ] }),
              /* @__PURE__ */ x("label", { className: "chd-field", children: [
                /* @__PURE__ */ y("span", { children: "Magic string" }),
                /* @__PURE__ */ y("input", { type: "text", readOnly: !0, value: ii(v) })
              ] })
            ] }) : /* @__PURE__ */ y("p", { className: "chd-field-hint", children: "Use Add magic strings to create a field. The sample copy stays on the page." })
          ] }) }),
          !l && E && c.type === "text" && v && /* @__PURE__ */ x(Zt, { title: "Text", children: [
            /* @__PURE__ */ x("label", { className: "chd-field", children: [
              /* @__PURE__ */ y("span", { children: v.label }),
              /* @__PURE__ */ y(
                "textarea",
                {
                  rows: 4,
                  value: r[v.id] ?? "",
                  placeholder: (g == null ? void 0 : g.text) || "",
                  onChange: (d) => i({
                    type: "SET_FIELD_VALUE",
                    fieldId: v.id,
                    value: d.target.value
                  })
                }
              )
            ] }),
            /* @__PURE__ */ x("p", { className: "chd-field-hint", children: [
              ii(v),
              ". Leave this empty to keep the sample copy."
            ] }),
            /* @__PURE__ */ x("label", { className: "chd-field", children: [
              /* @__PURE__ */ y("span", { children: "Color" }),
              /* @__PURE__ */ y(
                "input",
                {
                  type: "color",
                  value: c.color && /^#/.test(c.color) ? c.color : "#1a1a1a",
                  onChange: (d) => f({ color: d.target.value })
                }
              )
            ] })
          ] }),
          !l && E && c.type === "text" && !v && /* @__PURE__ */ x(Zt, { title: "Text", children: [
            /* @__PURE__ */ x("label", { className: "chd-field", children: [
              /* @__PURE__ */ y("span", { children: "Text" }),
              /* @__PURE__ */ y(
                "textarea",
                {
                  rows: 4,
                  value: (g == null ? void 0 : g.text) || "",
                  onChange: (d) => i({
                    type: "UPDATE_LAYER",
                    id: (g == null ? void 0 : g.id) || c.id,
                    patch: { text: d.target.value }
                  })
                }
              )
            ] }),
            /* @__PURE__ */ x("label", { className: "chd-field", children: [
              /* @__PURE__ */ y("span", { children: "Color" }),
              /* @__PURE__ */ y(
                "input",
                {
                  type: "color",
                  value: c.color && /^#/.test(c.color) ? c.color : "#1a1a1a",
                  onChange: (d) => f({ color: d.target.value })
                }
              )
            ] })
          ] }),
          E && c.type === "image" && /* @__PURE__ */ x(Zt, { title: "Image", children: [
            /* @__PURE__ */ x("div", { className: "chd-image-source", children: [
              /* @__PURE__ */ y("span", { children: "Image" }),
              /* @__PURE__ */ y(
                tD,
                {
                  overlay: !0,
                  compact: !0,
                  triggerLabel: c.src ? "Choose from Content Hub" : "Choose image",
                  onSelect: (d) => {
                    const p = d.previewUrl || d.thumbnailUrl;
                    p && f({ src: p });
                  }
                }
              )
            ] }),
            /* @__PURE__ */ x("label", { className: "chd-field", children: [
              /* @__PURE__ */ y("span", { children: "Image URL" }),
              /* @__PURE__ */ y(
                "input",
                {
                  type: "url",
                  placeholder: "https://…",
                  value: c.src || "",
                  onChange: (d) => f({ src: d.target.value })
                }
              )
            ] }),
            /* @__PURE__ */ x("label", { className: "chd-field", children: [
              /* @__PURE__ */ y("span", { children: "Fit" }),
              /* @__PURE__ */ x(
                "select",
                {
                  value: c.objectFit || "cover",
                  onChange: (d) => f({ objectFit: d.target.value }),
                  children: [
                    /* @__PURE__ */ y("option", { value: "cover", children: "Cover — fill page, keep photo ratio" }),
                    /* @__PURE__ */ y("option", { value: "contain", children: "Contain — whole photo, may letterbox" })
                  ]
                }
              )
            ] })
          ] }),
          l ? /* @__PURE__ */ x(gr, { children: [
            /* @__PURE__ */ x(Zt, { title: "Page", children: [
              /* @__PURE__ */ x("div", { className: "chd-field chd-pin-field", children: [
                /* @__PURE__ */ y("span", { children: "Pin to page" }),
                /* @__PURE__ */ y("div", { className: "chd-pin-grid", children: ["pinTop", "pinLeft", "pinRight", "pinBottom"].map((d) => {
                  const p = {
                    pinTop: "Top",
                    pinLeft: "Left",
                    pinRight: "Right",
                    pinBottom: "Bottom"
                  };
                  return /* @__PURE__ */ x("label", { className: "chd-field-checkbox", children: [
                    /* @__PURE__ */ y(
                      "input",
                      {
                        type: "checkbox",
                        checked: c[d] === !0,
                        onChange: (h) => f(
                          NS(
                            c,
                            d,
                            h.target.checked,
                            a.canvas.width,
                            a.canvas.height
                          )
                        )
                      }
                    ),
                    /* @__PURE__ */ y("span", { children: p[d] })
                  ] }, d);
                }) }),
                /* @__PURE__ */ y("p", { className: "chd-field-hint", children: "Pinning a side moves this block to that edge using the margin. Pin left and right together to stretch width; pin top and bottom to stretch height." })
              ] }),
              /* @__PURE__ */ x("div", { className: "chd-field", children: [
                /* @__PURE__ */ y("span", { children: "Margins" }),
                /* @__PURE__ */ y("div", { className: "chd-pin-grid", children: [
                  ["marginTop", "Top"],
                  ["marginLeft", "Left"],
                  ["marginRight", "Right"],
                  ["marginBottom", "Bottom"]
                ].map(([d, p]) => /* @__PURE__ */ y(
                  Kr,
                  {
                    label: p,
                    value: Math.round(typeof c[d] == "number" ? c[d] : 0),
                    onChange: (h) => f(
                      xS(
                        c,
                        d,
                        h,
                        a.canvas.width,
                        a.canvas.height
                      )
                    )
                  },
                  d
                )) }),
                /* @__PURE__ */ y("p", { className: "chd-field-hint", children: "Margins are stored per page size. Change page, then adjust; use Push to all pages to copy this layout to every preset." })
              ] }),
              /* @__PURE__ */ y(
                "button",
                {
                  type: "button",
                  className: "chd-btn",
                  onClick: () => f(nv(c, a.canvas.width, a.canvas.height)),
                  children: "Pin in place"
                }
              ),
              /* @__PURE__ */ y(
                "button",
                {
                  type: "button",
                  className: "chd-btn",
                  onClick: () => i({ type: "PUSH_LAYER_TO_ALL_PAGES", id: c.id }),
                  children: "Push to all pages"
                }
              ),
              /* @__PURE__ */ y(
                "button",
                {
                  type: "button",
                  className: "chd-btn",
                  onClick: () => f(tv(c, a.canvas.width, a.canvas.height)),
                  children: "Fill page"
                }
              )
            ] }),
            /* @__PURE__ */ x(Zt, { title: "End user", children: [
              /* @__PURE__ */ x("label", { className: "chd-field chd-field-checkbox", children: [
                /* @__PURE__ */ y(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!c.allowTransform,
                    onChange: (d) => f({ allowTransform: d.target.checked })
                  }
                ),
                /* @__PURE__ */ y("span", { children: "Allow transform (end user)" })
              ] }),
              /* @__PURE__ */ x("label", { className: "chd-field chd-field-checkbox", children: [
                /* @__PURE__ */ y(
                  "input",
                  {
                    type: "checkbox",
                    checked: ev(c),
                    onChange: (d) => f({ editableContent: d.target.checked })
                  }
                ),
                /* @__PURE__ */ y("span", { children: "Editable content (end user)" })
              ] })
            ] })
          ] }) : null
        ] }) : /* @__PURE__ */ y("p", { className: "chd-panel-empty", children: u.length > 1 ? `${u.length} layers selected` : "Select a layer" })
      ]
    }
  );
}
const rD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAFoCAYAAADJgokTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAJa/SURBVHhe7f0HtFVVlr4Pd4XRXVXdNSr+a1QCVECRVCgIiqAICkpUEAoQBQEFQUQMCIgIIogJFbXMCCigoCiCBANBJVggjSBFjoIEkQxW/7q6v2+8lrN6nln7XC7cvfbaa5/3GeOOs88+5549V17zXelf/oUQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQgqZ06dLfLVWq1HeK+sN37P8RQgghJD/Shtr7JB7YPyGEEEL+5V/+pXLlyj9v0KBB5Xbt2l1yww03tLnllluuHTJkSJ8HH3zwrj/96U/3P//884+++OKLj7/00ktPv/baa+OmT58+edq0aZOK+sN33nzzzQmTJk0aM378+GfHjh375LPPPjvyscceG4rfHThw4I19+vTp2KlTp6bNmjWrde6555Y59dRT/9XaRsjxKFeu3A/PP//8spdffnnt6667ruVtt93WZfDgwTffd999/UaOHDl41KhRw5544on78Pfoo4/e89BDDw0aOnTobQMGDOjRq1evq6655prGjRs3rnH22Wf/xv42SSeVKlX6GeqMyy67rHqbNm0u6ty5c4ubb775GtQr99577+3Dhw+/45FHHhny5JNPjkC6P/7448Pxive4lvfyGe7jD/kD+Qa/gd/q3bv31V26dLn8j3/8Y/1LL730rFq1apVGfWntIaQ4nHPOOb9HXdOtW7crUU8NGzasL/LfCy+88BjaySlTpryMtvOtt9569fXXX38J90aPHj0K7fD9998/oH///t1RZ11xxRV1ateufZr9/ULmtNNO+7cLLrjg9JYtW9ZFHCGuEGeIO8Qh4hJxirhFHyUqfvv169ftxhtvbI8+yXnnnXfq73//e/sYQgghJDyqV6/+WzhJcIzgnC9YsGDOp59+umTNmjUrd+zYse3gwYP7jx07dvT/55i//vWvXx85cuTwl19+uXvLli0b8PxPPvlk0bvvvjsNdg0aNOgmdOzh3NkwkMIGnTx01J555pmH3n///beXLVu2+C9/+cun27Zt27Rv3769yFc2v1n+93//93+RBw8cOLBv9+7dXyAPrly5ctkHH3zwzowZM14fMWJE/w4dOlyKTqV9PkmWmjVrloITDqd+4sSJz8+bN2/W8uXL//zZZ5/954YNG9ag3kK6Hz169Mj/+3//77/+53/+539sep8oyB/4LeSlr7766ssvvvji802bNq1btWrV8v/8z//8eP78+bNfeeWVF5BPUJ9CjLB2E3LJJZdUveeee26dOXPmlEWLFs1DXbV169aNhw4dOvD1118fQz6zeU/AZ8jL8h28/td//ddfkSd37dq1A2Xgo48+en/q1KkT77rrrl4Q8e3zswxEwK5du14B5x3xu3Tp0oXr169fjfoAcYS40nGn4zLqno7f7du3b0X8fvzxxx+88847U1H3NGrUqJq1gRBCCEktGOGE4o1GDR0POPho5OLoKMeB7QShEf7v//7v/4ate/fu3bN27drPMIMAox42bKQwuPrqqy+DY75nz56dyLtw9nT+zXd9MuD/pSN4+PDhQytWrFiK0WCKUcnwhz/84f+78847e0Lckfpq//79X8EhR/r87W9/+5utMwSkXUnTH4hzEPVbuIf6CdfIJ7ANNsJW2Iy8Uq1atV/ZcJHCAGLVrFmz3oCwiDyCOgT1lc5DUUJVVJ629/AeeU/fx29BTEC5gEgFkeyiiy6qaO3KAhdeeOEZzz333CMQbDF4ABFX4kXXCzaO5Dv6fdQ9iV99D2Vb0g/Cy9tvv/1a69at61nbCCGEEK9UqVLlF3fcccf1ixcvni+NGDoIco2GUq6l4URnRDq9tgF0ge78RHW0tQ16pAQO4Ny5c2d27NixSfny5X9kw541sFYRo4yYFYEpi5MnTx6LaaJYiuHyT56DV3kvr5gyae10wbXXXtscTj9G6XW+OF7ese+jkP8TUAZ0B1L/hr7GKB6ml1pbSclo0aLFeRD5MIsD8azrJNtJTyM2L+EeBFcsm0LYbHizCkZKk6ifjveH5Wd4xbIza6MLsBQF9TNEQ6S/br90/QFnXbe/mhPJ6/gNOL/y2/p58hubN29ej2nwoe8ngBlfWM4Dp1/HgUb6LsWNv+OB+BXBEeg0lJkFECAeeOCBgWeeeeZPrM2EEEJIImD9co8ePdrCOYbDJA2ibrjQqKHxwrV0NuJqMEuKtkfsRgOs7cN7bT+m5mL6I9b/VqxY8ac2TrIAlmxgBFriQKenS2y+kPd4hQhj7YwD7AEBZwlrsdG50qKVPNvapdF5x35WHOR/7TPwXvIdwDVG92DnxRdfXMWGgxyf008//d9btWp1AZZxbNy4ca2kne50W/AdEWoESTNJN5t2JUHnJ41+blHPw/fkGmHEXirYSwBTl218ZIWFCxfOzY0FP0jco65yteEb9oPA1HssXZN8izwhNiBvFOXw5yMqTx0vb0u+lPdSVnCNWXSYJl+/fv1KNgxppU6dOuVuvfXWzljioOteYN9bbBoUFW/C8b6H39Qii+6boK3CXgLYe8CGgxBCCHECNj57+umnH0QHE40RRgXsCH6+hs3el06tvucKGcm1NkSRrxMlIyCYnofZDtjXoEmTJufYOAoZTIfG2kY7GiEdFlcgvu17PBvXGNm0dpYEiDd9+/a9DlMr0VmVMOp01us5JZ/q/IPXE8m7yH/iyMlvaGx85376dwcDYEroyy+//Ezz5s3PteEi/ww69hglxt4jO3fu3C7xiTiWPCfvJU3tdN6o9EgabQ+upY4Sm/PlSzgLqKuwCSVGjW38hI6IlX+vNfwh8Y36JO4RcGwQh80jsf8EnhE12q/THPZIfSHks1e+r9/LPclXAL+h3+vvioOMz3W+xN4D2BA1zXsFYCNizDDD7AUJF8KTL16jwq8/y1e/W/R35VpA/NnvA2sLRGEIAVyqSAghxBlXXnnlhZhyiA4lGh9xaKQx0o2UNFS4rxszXNsp1WkGtqJDg1c7IivX69atW4Vp6lnpXJ911lm/xmZEEj7pnMj7pNB5CpssWTtPBoz4wxmE04DZHPpZmn8YkadzDCRedH4vLvY37XtBz0AR5LuYuo5px5wOGk29evUqYG0yhEqkj47jfB1smw561E3SOSqPuECeo/MX7M6XH6xNUVO04UBiR3LsNm7jK1SWLFmywIbdF7AjztlKWFePzeawIaT8vjwrqv1Ffi1qRks+JK/Z+xbJj3KNZ+m6L+o38B3sE4CTLmz4fCL7JkBQFTvFZl2m7OCGIHFRnLgrzneisOkp6Y3nyn3cQ/xinwIbRkIIIeSkwW7Ts2fPflOr4rpRFKc+qoHDvajOtv2u7kQkRVSjjHDka/CBDouOD4DTDLA8IPRjfDADAFNMESbEj3Q0JL5cIfEr1zodPv/88y3WzhMFO6dDrMHvyUZO+lqnpc7PeJXOtnT45Hsngw6vRjt6Frkvp2WIHciDEORwxJcNbyGDET2kq2ykpcutdVisEyXf19/L51RJWkal54lyvN9BeORzqXPlM7mv86fNqzIyi9/BH4QAG28h8uc///lDiQOfSB7BmvySzgDASSDjxo17Stb3Iy218BNVT9h7+L52GPVnJ4MuQ7ZNl7yobZRNAuVzfIblGmhfbHiTBMuAIHBr+6QNiCpTQMqbbp/iRqeVnn0m93K+bMB3YR8EPhwdasNMCCGEnBCYNgoHA42MNEK6YYpy/KVDpN/Ld+33oq5dEdV4W1v1fduBBlENsXxX3kMIwJnwNi5DAetM9WaONt1couNbxylGwKydxQUbOmGfCvyOdQSj0lOTL3/g/6LyU1EU57s6rvV1lJ2684rfhtOb5bXexWHAgAE9bH0l8ajjMF8+s+jv5csLLpFnFve51l65jgq71G9DhgzpU1KH1SdYsy1hSwM4HtLaeCJgXx2M6OrftOknZV9fy/ei8oq9p7JV5Hft/ah7AM+2YgC+p+9pxxavOGEH+1LYcLsGs16mT58+Wepua5+ED6/56uGisPGTL86i7kfdA9rWb5urnPTFtcSr3Ef9d9ttt3Wx4SeEEEKOS9OmTWuK00SKj+6o4Xz3EDfpwQgNzh3PDVkySCfGdnhPRgCAkHH//fcPwChazkMyDNa5h7TxVlzgiKwPP/zwveON+Bc6WrCVeMGsEoyi+3DK4kBmAKQBjNye7CaADRs2/ANmkInDKU5hVvKvDgeOKcSpQTYOXFCjRo3fDRs2rC/SRc/8so60XIeKzjcQobBnROizEQkhhCRE2bJlf4C1enqzLJCVTohLJI50XGHzOqw5t/GcZrIgAGC6PwQY+b0sdPCOhzi92Myqa9euV9g4ySLY0wFHVmKzMTnBAfGgO/p2hLKQ0eVKLylA3MFBwtFnNo7TTpoEAIATcayNRQEnDQ4q9qoQJw6vUe1JFkB5RJiwZAInctj4iBMsjZK2zI7kZ00AAFLX4RXxiz1QypQp8z0bL4QQQsg/OOecc36Pc4xl7aBMN8u3/pX8MzJqA6Tjtn///q/mzJkzw/fax+ISugDw6quvjtYb/NmOX5aReMPu0JgOb+MmS9SsWbPUe++9N/3vk5Bzp/RKPCDvFFL6Hw87M0I7PqjnMRsA+3+kedd2S1oEAFn/jrJnbcwHjtKdNm3aJJm5Iuh0QTplQQRAGGxZRJy52LwOG4Big9RDhw4dwDOtCGjzvr4OFRu3EmbMjDqZGSmEEEIKAOwkvmrVquVR06Wz0DgmhY4r3SCjc42d7DHN08Z92ghVAMCU/y1btmyQjrj8hh4NzjJ23SqciqyuBcWxV5jpoMNvN876Vodj3aWIcsLgKOjpw3hFOWrTps1FNt7TSFoEAAG7yhfH4UIe1vtV6ON0kQ5ZcPo1VtTQG5riOF0bPyfLTTfd1MHWDQKehfxu6wX7PmSQh3R40KfDaQc2ngghhBQ4GPmXEVM4qtJ46I4ilHS5JtHYDhs6GvbILjiyV111VSObBmkiRAGgU6dOTSGw5PudLHXwisKKAHht27ZtAxtfIYO0FsdJO/nWwdBxYctmIaLjSZcLGzfyPZxn37FjxyY2/tNG2gQAtKXHm3Z977333o7v6inb+jeQBrotzlL9hbDYmShoJ3v37n21jacTAXH+/PPPP6oFYHmWzeNCVP4PGZmtKYKSXCOcIS7vIYQQ4ohrrrmmMTp6dhqtblC4BKB4yOiCrEUWtCKPa4xOlLSz45LQBIBBgwbdhGm3kn8Rx/L/uLbpkVX06KEuyxhpa9KkyTk23kKkV69eV2FmA8IYdZSjhB+vWerYx4HOE1EOpa6nxAGF8Dtw4MAbbTqkibQIAIg/AAEg3+ZrFStW/CnWZeP7kmd1uiDObb7NkpOqy6kW6ADKdbNmzWrZOCsOEDnliFcQVR9YcD/fZyEieURmVgBp+/AZ9qa49dZbO9u4I4QQUmBg12ecG2sbEVGMdeMYJQ6QXGx8ofEV8QSf6YZ527Ztm9K6UVtIAsDYsWOfxI7H9n/A8RyeLII4QMdawo48iLBjGiimHNv4C4k777yzJ/bTQLh02oojIXWXio6c/QAKHanTbVnA+6JEXpQvnKZh0yMtpEUAEJBHrY2gdu3ap3388ccfIL/qtgBIfrbpk8X8K+FB2HT7iFeI4ziuz8ZdPnDs6d13390byy7wu7afosVg3a+JqiuyjIT1L3/5y6eXXXZZdRuPhBBCCoRGjRpVw67Ddoq6bkClwdSfk6KJGsEButMjDgtOWujSpcvlNm18E4IAgN3f582bN8vmX0E6lvg8Kj2yiB1Rk7Iso2HY3C2UjSgtcP4xgoVwWAcJr9aBtY5AoeSB46HjDtc6z0gcyXf0d5GHMG3dpksaSJMAgDjEDABrI2bgwLnVm/3ptkIcU7m29Z9Oi1CRMNiyKp9JXsTpLTb+osC+RZMnTx4LMcXGnY2z45V/W1+EiA4Drm0cyDXaARuXhBBCCgA4T5gupxuILDSAaQdxbTsiGC1K2/RsnwKARo+KaQEAaz2XLFmyQK93ZP49PnDixo0b91Ruaqcf7JnBPUj8c/Dgwf09evRoa9PHN2kSAFAPYcaEtg8z7fIJlSQXqcsfffTRe3QcWqpVq/arzz//fEuUmECi0UvEXJy8QAghJOVMnTp1IhpZcZqsU0rcoMUWEV8Q9+jAYiNGm06+SIsAIPGFOBIBoEKFCj/GsVnyHTr+JwacOOySbdM8rWDaNGYqFcpJDmkG5XDt2rWfXX755bVtOvkkLQKA7AGAmSqnnXbav8E2nEMve1bY75N/RpxUCLyYpWjTGnTu3LkFBBX5rrSn9rdINIgv5FHUrTZuCSGEZJQRI0b0l4ZARiXYeCaHxLWdrj1hwoTnypYt+wObXj7wLQBYQQpxhk3+sN7zrbfeetV+hrhkHi4e6PwtWrRoHqbP2nRPI++8885UW1aIP1A2Z8+e/Waa8k9aBACAeggiG4TK/v37d5f9SShUHh9b7z/11FMP6HQuVarUd7AXBdoCLQ5H/S+JRjYFRJ3KowEJIaRAgHKOBsCelw3YgCaDnbKIdMAaRoxwDhgwoIdNMx+kTQAA6FTPmDHjdVzr86PpHBYfPQ151KhRw2y6p40xY8Y8EWU78YMeccXmmza9fJEWAeDbSV3f1OePP/74cDmWFBtw2u+SaKR9xCs29mvatGlNSecXX3zxcZxYJN9F/S/xnfMjpEikHO/Zs2dnu3btLsktTYQQQjIF1swtXbp0ISr+fMdnEfeg0yKdHHSktbOLs83PPffcMjbtksa3ACDilHSocS2dFsSXxJkWsaygRfKDuESnOc0bAnbv3r21Ps/bhoH4BXVXz54929l080FaBACpz1EXyWZ/dE5LxrvvvjutdOnS3124cOFc21fRdb79jESj61IMBr3yyisvYGaFLVOEEEIyAjZ9QYOpR6DpNCWLjW89LRTpAscMmzPatEsaXwKAdvzlnu6w6LyLjrXEH0eHiwfiS8+YwFGUNu3TAmzT+cDOnCF+kDwkZc+mmw/SIgBodJ0kR3HmfoPkQ8+YQLzBudftAMQVLQLT+S8esleCFtOxRIXHAhJCSEZp0aLFebIWEUgjoJ0BdlDck8+hsR2YoUOH3mbTMEl8CwC6sxc1+ivOBz7j2toTR/IbHJO0nUABMColtqKOisoDJHlkdFveo+x99NFH79v0S5q0CABSF7FOOnmi6nTkOTr68YH41f2P4524QAghJFCwa7p2mvAqHTnb2BJ32Di3aSHvsRTA5/Rs3wKAjFTgWpwOgGuJI7v2n/n4+Ng4wijlggUL5tj09wnW/OJ4L9gnaS7X2naSPJIWcB4kPbZv3761U6dOTW06JklaBABB4kbnX1I8JL5kponc13Gq96KwbSopGp0fJc5QhsuXL/8jW64IIYQETPv27RtyinQ4SFphAzSblknhSwAgbpGOs+5YY6MtnFNu84AvJk+ePFY7Adp+4h/tgAFM14YDjnXaNi2TIm0CACFpRNenWghAeb7hhhva2HJFCCEkYHBu8z9aABIEaJyxQ2/z5s3PtemZBBQAso124CA4peVEgAYNGlTG3g56tF+vV5V7xA962jCcCXEoMGPp2muvbW7TMykoABByYqBeRT0rZXrx4sXzbbkihBASKN26dbsSlTs7z2EgaxyRXtjoyNfaPAoA2UU71zLbBFPu69WrV8Hmg6R56623XtW22mUexD96Kra+P3fu3Jk2PZOCAgAhxUNEuyhh9bTTTvs3W7YIISSzwNlp2LDhH+z9LLB58+b13D07LPQ0vU2bNq3zcSwgBYDsovOXXOO1a9euV9h8kCSVKlX6GWzRx6ZxCUD6gGikhRl9bjs2m7XpmgQUAAg5Pt9spBOx0S42g8XrHXfccb0tW6GBWWRoS+x9QgjJoXr16r/FObO33nprZ/tZ6KBDLyN8drSGpBc4QHqzrbvuuquXTVvXUADILroTKNfIb5MmTRpj80GSYDNCsVF3TuWas5jShYgzOl1mzpw5xaZrElAAIOT4WEEVZRf1v9z/9NNPl9iyFRq33HLLtejT16pVq7T9jBBCvqFKlSq/QKcToxm9evW6yn4eOtOnT58syi6n0oaH7LS9fv361TZtXUMBIJtYIRAdP3HgIBaeeuqp/2rzQhKUKVPme7BB6iu9aakIFMps4omo2SOCiEkVKlT4sU1f11AAIKR46PoUr7puPXDgwD5btkKjd+/eVyMsH3zwwTs+Zk8SQlJO1apVf/nOO+9MlQrwtttu62K/EzL169evtG7dulW64ifpR/KjdtQg3lxyySVVbRq7hAJAtrGngmDvCdzztenknDlzZuip5NIplXvW2ST+sCKSvffGG2+Mt+nrGgoAhBQP9CdsHwPg3qFDhw60atXqAlu+QuL222/vKrMaUC/UrFmzlP0OIaSA0R0GVBZQDe13QubBBx+8C2GTjj73AQgDcXzE4RG1/pNPPllk09glFACyiXT6rIMtJJ3PhI0bN64VG/I5/bbDSvxgRxAlXb6dAPDNtU1f11AAIKR46Lpfyqvubzz++OPDbfkKiZtvvvkaCSPEDgyEnXLKKd+33yOEFBjly5f/UVRnAZWG/W6onH766f8+a9asNxAu3UGTStEnuvMo7/W1fS/X+l5R2DDqKc5ArvFduSfX1uHwgbYLtkr64axtm84uCVUAKCoNJW6j0j6KqPwkSH7T9yS95HP7v/b7sFXu2e/6Ap1Cmxdc06NHj7b79+//ytriC52HdJ6RNNLprJE8IUR9Lq9SL0V9X/+2fFfeW/B5lC2+EFuTPlM8qk0PETmazd4H+fKdxuadfL9lBWa5h/d6uaDOe0Xlw1AoKn7kM/sdWx9E/Z9+r7+jf0uuZQRe7kl8pyF+YfN777033ZavkMBsXhsmHIWN/b7sdwkhBULdunXL46giqRjQ2ZXKFxuH2O+HCnZBxbnM0gjpytA3uuGTI++A3vk7ym58345W5gP/q50ruSf///du1P+B7xbV8UoaiSNL3759r7Np7YpQBQAhKk3lWnfAbF6T/CDv5ftRe2jI/xaVb/B7mIWjO9z6t+T/o37fF3Xq1Cln84NLXn311dEIv413X6Ce0Oklr/oar/iOXkqRr9yeCPoZOj7w25JH9MidvII05CEpd4sWLZpn09klWREANFIX6Xylmq0cpzOq3tJI/o1qQ+1yIEE/Rz8rSxQ3XPie7q9oJJ7k2v5m1D1g26c0lF+Asvv73//eFrFgwGxeKQuIe4nXpUuXLkTf2H6fEJJxLr744irvv//+21Ix2Mq2T58+He3/hEq/fv26IUzaCS6qc5AkiHdpLIG+FrQzgM8x+r179+4vNmzYsGb16tUrjveHow+/+uqrL6WjrOMBaLEh6vm+EVvlVWxcuXLlMpvWrghdACgOkjfkvb5GHtSOu3zfduZwbdes4/+i8pXuJMr/pqVcal5++eVnbH5wBTaMS5PzFtVRj8LmG2yehfKCXfBff/31l0aPHj3q0UcfvWfEiBH9hw8ffgdesSzr/vvvH4BrvI4cOXLwU0899QAEEAjTy5cv/zPqOfld7ZjZ9kqjBYs0AEcJSzrOOOOM/7Dp7Yo05aGS8nd38p+dRvs+CqlTouqfKLQTiv/TIrl+3on8ZpqROtyGReLN9j1sucqXNhrp4+A7ugzjOkpswXejhBkfwJa//OUvn4a8ed5NN93UAWHR+VreY2PApPdTIoR45Jxzzvk9OldSKevOlFS8WRIA0JnUDVxaGpfjATuxCzgU6FGjRg3r0qXL5bVr1z4NHUks3cA6rrJly/6gqD98BzuZw7FAujdr1qwWzrZ98803J8g6Y8kHthOfY4wnbKdLrmEzNuhJaoftrAgAtlOH+NUOu3xHd+qQByEi4SghOGgDBgzogbzYunXrek2aNDmnYcOGf8Df5ZdfXhtHbQ4ePPjm8ePHP4vOxdGjR4/oNNRlzzpxeKa+Zz/3AWyHE2rzgyu6d+/eet++fXvxbJ0mvhFbJP/gWtL1Wx/gm3054Mi3adPmoooVK/60JOtMS5Uq9R0s3UK5Qx6DSIDyJ/nHdma1jUK+EcokkbhCmmIzLhtOV2RJACgKpD/QdQyu5f3WrVs3YqRz2rRpk1566aWnn3/++UdffPHFx6dMmfIyBkAwFVrSSPIP/ldO37DY5+R+mg2KCpeUdXwH8YZ2AeX+7bfffm3cuHFPPffcc4+MHTv2SfQvEL8YpNBtjfxOPsdfrtNQ9wPYtHPnzu1//OMf69syFgqYzYuwWAFV6lLUq1wOQEgBcNppp/0bGj3baEplJxVvVgQAdETREdSOh1SEtsPoA6SB7qhK/C9ZsmQBnAEbnrg566yzfj158uSxcNS0TWkRAMSOKHsQbwMHDrzRhskFoQoA1pnX6I4yQLnAe3HmMEJ74YUXnmHj4kTBbCN0uvVorpS9qI6g2JSG8gkgNNkwueKuu+7qhWdKOlhbkgZlzNqhyyLiBqP7Z5999m9sWFxQqVKln8HJ0MKSFrDwmiaBVzsyzz777EgbHldkVQD41v/8R30m6Y7327dv34rZJtdff32rE51t0ahRo2pjxox5QtdR8rv6ecj7aRCWXGHbCpnBBUFky5YtG1555ZUXIP6eeeaZP7FxWBQQ8TCTas+ePTv186Jmlcl1VJvvA8yQTFK8ixv05VEP6TwsYZP8jaOVMWBk/5cQkhGg8qGg6w4dKgYgDavcx7Qh+/8h0q5du0skTNIxlApQh9c3sG3Hjh3bMP31oosuqmjDkQT9+/fvjiUDeklAWtAjf9KQ4RXxZcPhglAFAA3yvZR1xJ10CrA8ZNWqVcsRlxjBh0howx8HWEfZs2fPdh999NH7hw8fPqQ7Ivra1kW+QXmoVq3ar2x4XAChJG3hB8grWqzZtGnTOoz4Va5c+ec2DEkAIeCZZ555CCOQYlNRs0t8grwNMCpqw+GKrAgAKAcyWqnLBGZUYCADcXrrrbd2PlGHtCiwAfLixYvni6OPOtKOnuI1TULTySJ505YX7JmEqe8zZsx4HfGL8mbj6WRBG/Dxxx9/oOPPOv76vW+Q7zCzyYYjFDADQLevkq+1KAAwWwMDQvb/CSGBg80+MO1fCnxRjRcqvKycAoCpyFL5IczWgbRhTxrYhIoYO81iCrW1P2mgAg8bNqwvRlOsrb5AOknnTzoHknZY3pHEBj2hCgC606yvke927dq147XXXhuHDllSSykEbEyEDib2s4A9thOahrIJJM5QJmwY4gbrTCHGyLOLqqOTQmyQeEDnESeqtG3btoG13wcYuZUTXrSd1qHxheRjOJAY/UxqvW2WBAC5xig0jjCbNGnSGMyOw5I2G+64QDt477333g6hy9qi2yL5LFRs/EJUmThx4vMQgtHm2XiJC8zMfOCBBwbKjAu9H0DaxE+U4SeffHKEDUMoYPZCVJ6Vezre0cfBjD37G4SQQLn00kvPWrhw4VypzKQCQGWgK1v5DPdCnvKkQYca4ZFwaucxDaDRfeihhwaVK1fuh9Z2n1x55ZUXYjaAtdcH0mghDSXtRAjAGs8kGqxQBQCb1/EenTyMaNSrV6+CDWeSnH/++WWxTtTOOElbBxBMnTp1orU/brCPAp6Vb/2xbzDtHqPuZcqU+Z613SelS5f+7sMPP3y3xFvUshKf6M73dddd19La74KsCAAA6Yl1/NhbBHWGDatLOnfu3AKbzcIO6S/ZOjV0IOohvwwaNOgm7DFk48Al7du3b6j3IsJrGoUV7B1hbQ8FzOCQPKv7+PpVrvE5fAX4DPZ3CCGBUatWrdJoPFGw9TTqqFcNKg37W6GBaYE2XEljnVa5h1fcxxmt1u60gE28sJGb2KrDkJZGGk4JRpOt7XGTdgGgqBFP+eyLL774fOjQobfFOV22pGD2xpw5c2bAPpSLNIx6RwGhwtoeN9hoCs+SshVVL7sAzwH2ufo98lDaR8GGDBnSR6aL2zD6wo643Xjjje2t3S5IkwCgnQwdHza/ST7U6Qfn+4Ybbmhjw5ckHTp0uBQz4kR0FtvSIFR+M7IRMYgDZLmXfE8+0/+DfAKRw4Y5SZo3b34uZqPBHj0olZY+BvIjZp1Yu0MBfXkbJl3m9KvMkoXPAN/B/hYhJBCwlhfTbKXQS4UKRT1foyFkQQDo1KlTUxuupJG4jRqVuvPOO3tam9NGlSpVfrFmzZqV1naQhgYaNmDjNGt33KRZAJCRTyvO6LWz2AE7znWccYMOh4QnTQ4cQBmeP3/+bGtz3GATMnlmUmWrKOEIiBOBpTbW3jSCUypgN0Y1jxe2pJC6H2k6YcKE56zNLkiTAGBFELzXfRH9KmCWUo8ePdracPkCwqm2D+g+lE90/CIeozYplO9I3QpBI03xi3XqsvxJixYmGF5A3GGviSSWGrqgKAEAIJ51HSX34TvgBCn7e4SQlIMN/7Cphy7kci1IBymrAgDWN9twJY3Eu26U4bBhJ2trb1pp3LhxDYwe6/BE5SdfYFqytTlu0ioAIB1Qfm2HGvfR2cOGe9iB2YYnbWBWAtbb6jopql7yAWzCqRzW5rjBGnE7IpMUeJ4u08hHYsOnn366xNqaVjBrCTNKko6/otB7z2Cj1yT220iLACDlWTsWRYlbyGvDhw+/I21L4gDqUrTdEqY0CEzHWy6k4xpLrbCTP5ZS2LClgZkzZ06BvWmq+wFswT4joe6SX5QAEJWHdTuAwR+Xe20QQmIGR3dhV29Upuh86BE1rbRL4xBV2WZBAMD6cBsuH9gRTayxOtFjinyDTdBsZ8OGyxcYncSZ4dbmOEmrAKDRjTka7jQvL4miV69eV+3fv/8r2I+8VZSjkCToEGHzsRo1avzO2hwneBbSUOrjJEU2xLUVAPCKM7CTOuIvLurXr18JgqsdVfbhWMjzdF5OYmptWgQAQddNuEZb8s00gG/jBYMVWGddt27d8jYsaQHlQOyNcpx8IbMqcI38JrN2cC330Rd64okn7ksi750sWAKF+saGzydSfjEDLE1L506EogQAXS/p+lL7DfAlsNmq/V1CSMq47LLLquMIG1u4hSinP6pTlAUBAGdU23D5BiNAOKfY2hoCspxEn8GdBjCq4XpDuzQLAFKm8Yp0eeutt14977zzTrVhCIF33nlnqpwMkAbEKcZu1diwytobJ3iOrrOTEABsGyEOhLwfOHDgjdbOEHjkkUeG6HAJIgII9vO40WVT7iWxkV2aBAAc+YlXnbe0I42R3zScgFMcsBZc6lkbTh/oGXn5RAnMhGzWrFktG5Y0Akdb7E5DHIsNOLYwqaNg46YoAUBf27ZAs2LFiqXYGNr+NiEkJdSsWbMUptChIMuUczQMUR1J3YhFVbShCwDoZB04cGCfDVfSSNzLyB6O+7O2hkLHjh2bRIXNJ4jTgwcP7nc9zT2tAoDu9MFxTmI/BJf069evG8JhZy75QvI4RC/YZu2Ni4suuqiiroeTCntU3S9hxiwSHE1obQ0FOwNA863//09hdwmeh7hNwtlNkwAA0N+QNlDyF/ooLsuUCzC7REbXk84/+dDtsNiEuN63b99enDoR0tp1HD8oYcknaPgAR2iHOhW+KAEAr1GOv/gN+Bz1KNICs3RcD7QQQk4CTE/CcSoyTVsaBTuipBsLIaohC10AwM7BMvKQFrDJTejHK8LZRmMgHTobxqRB3kVHsmXLlnWtrXGSVgEA4Uc6YBZEVhT6NMYz8vt9993Xz9oaF48//vhw+zz93jV4nm4b0OnD8aTWzpAYMGBADwlXVBsXdc8Fup6ELQ8++OBd1ta4SZMAgDBLHEgfZNGiRfPKly//I2t3CKCuRViSyj/HQ+8vJKIXZlJVrFjxp9b2ENi7d++enACmgM8+++w/07x8oiiKEgA01j+wbRD+BzPhQp0JQUgmwdmtWKNqC7UuzFEFW6uA8pkQugCAzqsOsy905wdrqUJS46OAgGHD6BvEsevp2WkVABB2HFGX5rWzJ4ps3pmG8gtk5PKBBx4YaG2NC71hq3aWcgxxgH6GtAO4h70YXJcp10AUF7Eyqo1LAjzXtr3YA8baGjdpEQB0+OGobtu2bdO99957u7U3JP70pz/d7ys/WSRuRejCEsO77767t7U5JLCE1TqfvpB0hgCAGbbW1hAoSgCQVztQqL+n8xheIdBgJox9DiEkYa644oo6mPYvBVYX1OJWolGNWegCwPTp0ycn0YEuDhK/L7/88jPWzhCxjUcacL1W2acAYPOxlGtME584ceLzoW3SdjzQuUhqCnxxQRq4HLnVo8TFrbfjAGVYyrG2IZRj/44H1pdLOHU5smXKFVHpillU1s64SZMAIK8QKlu0aHGetTU02rRpc1FS+ed46LL77rvvTgtlrX9RYBmbDlsagACQxSUAxUXyu7xiPyjXsy4JIUXQunXrerIxG7COf3ELedT3QhcAsNbehsknSJMsdH4AOhpRecYHYgemUFs74ySNAgBGacuUKfM9a2sW0OFMA64FAHmOdsiTwnbu8HxsdmZtDBGchBHlhCeFTk95xTRta2fcpEUAAIhz7MeTlfXDzZs3PzctG+Hq/IyZoNbWEIGjnTYBuFAFAPmetA26LkWcwAexzyOEOAZK7+rVq1dIYbTrDPF6ooVcE7oAgGmWNkw+gbNmbQyVPn36dIzKMz4QO2bMmPG6tTNOfAoA1oGQaxyZZO3MCmk6CQAkJQBosSeJMqafIc/G6Sk4ktHaGCIYpcLU86g2MSkxQD9Hrq2dcZMmAQBxjzxlbQyVBg0aVN61a9cOG05fyB4A1s6QgcBiw+mTQhcA9Pe1OAMfJAuzTggJBkz53b59+1YUQDSudoTjRDs2UZVByALAGWec8R9Lly5daMPkC6QPGhBrZ6jgqEmEKyrfJI107FeuXLmsVKlS37G2xoVPAUCw8Y31ntbOrIARaB1W3yQlAFiR5x8GOELaDjxL2g20LVmZWdKwYcM/YN25bhMlXu3MGlfo5xSiAACwbjj0/W8ErAXHCRk2jL6xdoYMNptLqnwWh0IVAATUW9bPkN9Ae5G1ZYiEpJJGjRpVQ8c/qnKMGmkoDlGVQcgCQI0aNX6Hc0ttmHyAuAVZWf8P6tSpUw6jDlH5JmmkHKARKl269HetrXHhSwAoyiHM8gwA7G1yInWYa1wLADZt7XtXSPnR7UmWhCWIglOnTp2ow6w7sklh09PaGTdpEQCkDO/Zs2dnVgQAbC6Jjeqi+mBJI/kKo7LWzpDBptZpiF+hkAUAKcNIj6g2GffRZsA3sc8mhMQEzg/evHnzeil4KMSyQ7Ud+T+RNVRRlUHIAgAqok2bNq2zYfKBdDa7det2pbUzVKpWrfpLvWu5T0Rg+fLLL3dnXQBAQ4v38pplAeC00077t9yY8ItLAaBy5co/zze6kgT22VnLV48++ug9CJu0lxLWJOJYnmHLsesZFmkRACTOMaXb2hgqZcuW/QE2NEyLgypH/1k7Q2bt2rWf2XD6pFAFALQH2pcQEUDu69+BbwIfxT6fEFJCULBwjBwK3tdff33MNj54L/dOtAMZ9d2QBYAOHTpcmpazZEWUydLZqRjJwUaANqy+QP796quvvjzllFO+b22NC18CgEbKqZT1rDlqFht+n7gUALA5KH5f0lfqjKh62QVWAMCpMtbGkMGRsAgb4jhqrxzX6HSUa9cbtqVFAACYLZbEyQdJAXHynXfemWrD6QvJx9bOkMEMABtOnxSqACDIQCOubb2J9/BJ0HbAR6EIQEiMYPfcjRs3rtWFDqBQ6lF/Qe4Vd6pjVGUQsgDQs2fPdhhxiIobHyAdrI2hM378+GfTEr8AAgA6ZtbOuPApAEiDq0cTATaisnZmCdvR8IlLAaB79+6t8QwpT/bVJTpPyfPeeuutV62NIYN0s2WouG1jHOhnyWia605yWgQAiXcI8q5nPSQF2hk5XjItJHGyRJJgT5+ofqkvClUA0G2Rbo+L8jHgq2TlxA9CvFKrVq3Sn3/++RYUrKiRhDiI+q2QBYBBgwbdZCssnxw+fPiQtTF0HnjggYE2nD6B4JNVASBKece9L7744nNrZ5bIiQTPuBQAUNfqGQB4TbLu+lZP+gbUm4MHD77Z2hgy999//wAbvzYOXCJpKVO18b53795XWzvjJC0CgACBNit7AKRtBoBg7QwZfbx1GihUAaA46N+Sa/gs8F2sLYSQYtK0adOa2MEYBQodM+mg6cIXB1GVQcgCwNChQ2+z4fFJlqY/CiNGjOhvw+kTCgDZIycSPONSAJD6yjr9UfWya/DMvn37XmdtDBmfAgCeJemq226I1NbOOKEA4A4KAO6hABAfrgUAwfoo8F2wma+1hxByHFBwZNq/nmaDa9tRLClRlUHIAkCanFPELTo/1sbQGTZsWN+482FJoACQPXIiwTMuBYCnn376QTxDO4vyPscIB0Q9o3Pnzi2sjSHjUwDQ6OeijbJ2xgkFAHdQAHAPBYD4SEIAQP1q/RS84nQA7MllbSKE5KFNmzYXoQKUQoUNNlCY9G6ccRbgqN8KWQB4+OGH70aYosKVNLABZ9paG0OHAkBySD62ziEFgORwKQBMmDDhOXlO0nWWfR7C2aRJk3OsjSGTBgFAnilL07AxobUzTigAuIMCgHsoAMSHawFA/5b4KPBZZLAS/ZSsicqEOKFu3brl169fvxqFyDpYUrh0ZyYOon4rZAFg1KhRw771//8pXEkDG7J0rrYAAcCG1ScUALJHTiR4xqUAMHny5LE6bW297xLtFAM8u06dOuWsjSHjUwCQtNSveD6OJrR2xgkFAHdQAHAPBYD4SEIAkPot6vjxY8eOHd2zZ89OnHZjbSOEfAuOBsJosS5I2DjIdvxRoORalbOTJup3QhYAnnrqqQdseHyCtVDWxtAZPnz4HTacPqEAkD1yIsEzLgWAV199dbQ9ii+qTnaFOP/y/txzzy1jbQwZnwKAfabE9ciRIwdbO+OEAoA7KAC4hwJAfLgUAOR34JPo30R9K5ueyv0DBw7sa9y4cQ1rHyEFT8eOHZvA+deFSG8ahPvoJEYdKVRSoiqDkAWAZ5555qGoMPli69atG62NocMZAMkheZkCgD9cCgCvvPLKC0hPO1qcFPZ555133qnWxpDxKQBYJJ25B0C4UABwDwWA+HApAGgfRPwT/dvyufgy6KddffXVl1kbCSlYunXrduX27du3SsHRTj6whRXv//rXv36t75UE+/sgZAEAm2rZisgnW7Zs2WBtDJ177733dhtOn1AAyB45keAZ1wIAnmEFXeuYu8I+BzPRrI0h41sAiHoeBYBwoQDgHgoA8eFSAADwRezv6fcyEwBACICv071799bWTkIKDmyOIbv9S0csnxDgClt4QcgCwJ/+9Kf784XLB6jwrI2hwxkAyUEBwD8uBQDZBFDXV77qLoTz/PPPL2ttDBnfAoBGnv3AAw8MtHbGCQUAd1AAcA8FgPhwLQAUhfgwtg8Dn4cbA5KCpnXr1vXQiZeCIYVDK2ZJEFUZUACIDwoA7qEAkD1yIsEzFADChQKAfygAuMfaGTIUAOLDpwAgiE+j/Rz0X1q2bFnX2ktI5sFRS4cPHz4kBSRqtD/qnguiKgMKAPFBAcA9FACyR04keIYCQLhQAPAPBQD3WDtDhgJAfPgUAKJ8GH3v0KFDB5o1a1bL2kxIZmnbtm0DWe+JV92xjyowromqDCgAxAcFAPdQAMgeOZHgGQoA4UIBwD8UANxj7QwZCgDx4VMA0GjfBvWx+EAYCG3Xrt0l1m5CMgc2/MO58NbxB/r4pySFgKjKgAJAfFAAcA8FgOyREwmeoQAQLhQA/EMBwD3WzpChABAfvgUAvQ+APtlM7mF5wM6dO7ffcMMNbazthGQGHPWHHeGlI4/CILvV41oXDhSKpApp1HMoAMQHBQD3UADIHjmR4BkKAOFCAcA/FADcY+0MGQoA8eFTABAHX96Ln4P78H1kFgDq53Xr1q3q2rXrFdZ+QoKnVatWF3z55Ze7pSDIMX7a6Y9Sx/R7V0Q9hwJAfFAAcA8FgOyREwmeoQAQLhQA/EMBwD3WzpChABAfvgUA/T7K39HH3+7Zs2cnfCUbBkKCRW/4J8oXrvXUGLs+Rq6TwBZSQAEgPigAuIcCQPbIiQTPUAAIFwoA/qEA4B5rZ8hQAIgPnwKAoPsuMutZ3uNaxAC8wldq3759QxsOQoLj2muvbS7Of5T6lSZQMEWIuO2227rYsIQCBQD3UABIDgoA/qEAEC4UAPxDAcA91s6QoQAQHzfffPM1CAPqHunfJz3IWBRRfhFmBdx0000dbFgICYbrrruu5ebNm9cjQ+vRft0ZSQOwzToXnAEQHxQA3EMBIHvkRIJnKACECwUA/1AAcI+1M2QoAMRHnz59Ouq+g6zDzw2hP8QnkvfiK+3atWvHLbfccq0NDyGpBxv+Ybd/ZGSs94/qxOtp/76QDTqkUhD7br/99q42TKFAAcA9FACSI6ruoACQLBQAwoUCgH8oALjH2hkyFADi44477rgeYUD/Xp8+pjfn84X2gXQ/R/ZIw54AEDBsmAhJLW3btm1w4MCBfcjQAjKzLnw+OyGafHb06NGjrQ1XKFAAcA8FgOTQDaO+RwEgOSgAhAsFAP9QAHCPtTNkKADEx4033tjehgfo/kQagD12pjSuv/7662M9e/ZsZ8NFSOrAmv/9+/d/hYxrp9lI5tYj7WlA7IRNct27d++rbdhCgQKAeygAJAcFAP9QAAgXCgD+oQDgHmtnyFAAiA/05REGvdu+vvaN9jvsrGipLzEjoFOnTk1t2AhJDRg1l066vCJjI/PqjC2ZXaa5+ERXBGIXHIvGjRvXsOELBQoA7qEAkBwUAPxDASBcKAD4hwKAe6ydIUMBID4aNWpUbdOmTesQjjTUgRq9BFnuoa7Ws6XlHl65MSBJJVhn8+WXX+6OWtOiQcbW01zs50ljK4StW7duDH3jDQoA7qEAkBwUAPxDASBcKAD4hwKAe6ydIUMBIF5uuOGGNqtWrVou4dF9CZ+I449XiAG2bsZ7sRW+0+7du7/o169fNxs+QrzRq1evq6zzLyPryLy2sCFTp20KDl63bdu2KQtrbSgAuIcCQHJQAPAPBYBwoQDgHwoA7rF2hgwFgPhp3759ww0bNqxBeOzyZJ9oX0jX0dpGPVsaGwOGPkhJMkL37t1bHzt27Cgypu6g27UsvtBCBF51oUIhkwK3c+fO7V27dr3Chi9EKAC4hwJAclAA8A8FgHChAOAfCgDusXaGDAUAN3Tu3LkF+voIk64Tgd4LDK9pGaTUvpTYBp8LvpcNHyGJ0a1btyuPHDlyGBkS01dQgHx2LvIhBUi/aiEAihoqBhu+UKEA4B4KAMlBAcA/FADChQKAfygAuMfaGTIUANzRpUuXy9Hnl7DBF4jyEXT40wDqTlkqgPfwvbgnAPECdtaUkX+7wV8aOhqCTJ0RNU+fRIDXLVu2bMiS8w8oALiHAkByUADwDwWAcKEA4B8KAO6xdoYMBQC3oM+Pvj/CJr6A+AbiK6Rhk3JdV+tBS7mGD8blACRR+vfv3/3gwYP7kQGhRlnnGiDj6g67b8QWUdFwvXr16hVXX331ZTZ8oUMBwD0UAJKDAoB/KACECwUA/1AAcI+1M2QoALjnmmuuaQwfAOHTA5dp81t0fa1FCj0T4M477+xpw0dI7PTt2/c6WUNjOxKSIW2mTQtQ9ESsWLdu3aq2bds2sOHLAhQA3EMBIDmiGmYKAMlCASBcKAD4hwKAe6ydIUMBIBngA8AXQBjhG6Rh1N+COlP6PuJj6c/A3r1793A5AHEKdsi3GRDKmZ6aAqQQ+exoCF9//fUxuRZ7duzYsa1du3aX2PBlBQoA7qEAkBwUAPxDASBcKAD4hwKAe6ydIUMBIDngC8AnQDh13ah9B1+IPVaYEL9L+kR4BTfeeGN7Gz5CSsx1113XEtNPvhWc/ukYP9zTGRJYscAXemkCZi9gExAbvixBAcA9FACSgwKAfygAhAsFAP9QAHCPtTNkKAAkC3wCmdkM0rIJoPahUIfrpQqCFipwPWTIkD42fIScNNjwD5lLO/gy6m9H/wUrEPhCCgvshCOatQ3/oqAA4B4KAMlBAcA/FADChQKAfygAuMfaGTIUAJIHvgH6quLT+KwnNfl8KTvgqr83ePDgm234CDlhBgwY0EOUMevs22kpPpBCKrZoxUyreOvXr1+d5Wn/GgoA7qEAkBwUAPxDASBcKAD4hwKAe6ydIUMBwA/wEeArSLijZjSLo60/84XYYE83+/LLL3e7aq9JgdCnT5+Ou3fv/kIylnW20wJ2wcSrdv6lIKCAbN68eX2hOP+AAoB7KAAkBwUA/1AACBcKAP6hAOAea2fIUADwB3wF+AzS34AvIQ621F+yHNrGU9KInxO1ZGHXrl07uByAnBS33357V8lIKAh6esnxpv8nic34sBMFU+5j9gKO+7DhyzIUANxDASA5KAD4hwJAuFAA8A8FAPdYO0OGAoBf4DPAd4haDnDo0KED9p5vxO/BNQZopa+E16FDh95mw0dIXu65555bdebWjr4WAtJSAKRAWuAgFMKafwsFAPdQAEgOCgD+oQAQLhQA/EMBwD3WzpChAOAf+A4YRZc4QN0l9Vc+nyNpbJ9IrjEbWj6DzzZw4MAbbfgI+ScwZUQykp32oknD6L8GmVwyPOzetm3bpkJ0/gEFAPdQAEgOCgD+oQAQLhQA/EMBwD3WzpChAJAOOnXq1HTdunWr7ExjLQb4xNpl/TI9YIuBXRs+Qv7Bfffd1+/w4cOH9Fp6XOv1//q+fu8LvR+BZH5s4tG6det6NnyFAgUA91AASA4KAP6hABAuFAD8QwHAPdbOkKEAkB6aN29+7vLly/8scaH7IWlA2yP+Gq7tzG0cEUgRgERy77333n7s2LGjkmGgLNmMjve4b1Umn9jMvmnTpnWFtOFfFBQA3EMBIDkoAPiHAkC4UADwDwUA91g7Q4YCQLpo2LDhH0QE0BuM23jyAezI55PhMzj+8h4+HkUAkoM4M1Gj6QBOvx7xl0bcTj/xBewBOPqiffv2DW34Cg0KAO6hAJAcFAD8QwEgXCgA+IcCgHusnSFDASB9XHbZZdW3bNmyAfGRlpPQxAfT9XvU4K0gSwIoApBvwA6ROrPgWt777ChYpMDBJrFPRAmIFXD+r7vuupY2fIUIBQD3pEUAkDTGUZhly5b9gbUzLigAJE9OJHgmCQFAk29EI26Qj+y5zhQA3EEBIHwoALiHAkA6adGixXk4IhBxgjpVfBBdv6ZFHAC676T7T7jm6QAFDtb8S2bV0/+FpDphJ4ouYMjIKJAdO3ZsYsNXqFAAcE/aBADsSssZANkiJxI841IA6NmzZzuIAK+88soLEydOfF6uJ02aNAbXLv/wHPy99tpr48aNG/cU/ipUqPBja2PIUADwDwUA91g7Q4YCQHq5/PLLay9btmyxjp80Of2aKB9OfD3YPHz48Dts+EgB8NBDDw3av3//V8gIWCMS1clOA7BLbMLUFrETGRv3V6xYsbRNmzYX2fAVMhQA3JMWAUA4ePDg/lNOOeX71s64oACQPDmR4BmXAgBxCwUA/1AAcI+1M2QoAKQb7AmwcuXKZahXxclG3RY1JT8tSP8Jdsm+AFg6iv3fbPhIhkGCY8qwZAbJqHqdf1rW9wO98aBW2rApB6bk2PAVOhQA3JM2AQBiXpkyZb5n7YwLCgDJkxMJnqEAEC4UAPxDAcA91s6QoQCQfho3blxDnw4gvgl8lbT5T3ItPp74fWgXMCPg0UcfvceGj2SQu+66qxcyAI7705kE6AyclmP+BGRiychYs7lt27ZNzZo1q2XDRygAJEGaBACk8759+/aWLl36u9bOuKAAkDw5keAZCgDhQgHAPxQA3GPtDBkKAGEAHwS+iOwjo/2UtKCPBoxaqgDb8ffSSy89bcNHMsTdd9/dWyc8OgXIELpjDaIyiS+sbShcO3fu3A71zYaP/B0KAO5JkwAAKABkj5xI8AwFgHChAOAfCgDusXaGDAWAcIAvAp/EOv7Wd/GJ9enE99P3wOjRo0fZ8JEMgGn/SGAoQaIG2VF+qEB604ioDSSSRtsA+9asWbPy4osvrmLDR/4PCgDuSZsAwCUA2SMnEjxDASBcKAD4hwKAe6ydIUMBICzgk8A3kZkAIG3+E661fYI+TQ3XY8aMecLliVIkYdAB0Bv9AT2dPqqDHZVRfIGMCRux3qZRo0bVbPhILhQA3JM2AeDAgQP7KABki5xI8AwFgHChAOAfCgDusXaGDAWA8IBvAh8FdVwanH9B+3LSh4KNesAXr/IZ+pLPPffcI6VKlfqODSMJjGeffXYkGh8krJ2i4rMjoLGFRTIi7JXrVatWLW/QoEFlGz7yz1AAcE+aBACkM2YA8BSAbJETCZ6hABAm2CRXnLU0dEwpAIQPBQD3UAAIE/go8FUQZ2gzdX2rp9ynpW9uER8Rp0q9+OKLj9vwkYB44YUXHtPTOyTT2an/aUAXFLt2Bg5kvXr1KtjwkWgoALiHAkByUADwDwWAcDj11FP/dfDgwTfv3bt3j21LBV99AAoA4UMBwD0UAMIFvgr6vIg3EQF0PawHNtMA6mTdHogvhnvwIW34SABgMwftAEatTfE9GgBwBAVeYSsQBUps37Bhw5qmTZvWtOEj+aEA4B4KAMlBAcA/FADSTcWKFX/auXPnFrNnz35TOnNSXvCK0SfpA+C9r7aBAkD4UABwDwWAsIHPAt9Fx6Hsxi8+Thr8L2kTtC2wU+ppvHJjwIBAIzN27NgnpRNgp/1r9cl+5gtrh9j3ySefLOJRfycOBQD3UABIDgoA/qEAkD5q1KjxOzj948ePf/bzzz/fottRlA+9v08Utt1NAgoA4UMBwD0UAMIHvsvixYvnI/6k3pM610fdG4U4/tJe6M/ERviS8CmzUn9lFmza8Pzzzz969OjRI5Jwkph2in1RHQMfHDly5DBeYRsy4tKlSxdy5P/koADgHgoAyUEBwD8UANIBnK8OHTpcig7ZsmXLFstGTkW16fpz36NOFADChwKAeygAZIOGDRv+4dNPP12i+y7il+Wrr32g7bOzAfAKnxIbA2alDssk48aNewqOtE5MGfG3ipNVe3yhbUOBwPXatWs/q1OnTjkbPlI8KAC4hwJAclAA8A8FAL9gh2lsygTHALs063TR6aT3+pH3+nPfIgAFgPChAOAeCgDZ4YILLjgdRwTCt5H6z9ceLFFYW0QwtqcHwLeEj2nDR1IA1mnoXSZxbR1ASVR7Py0g423dunXjJZdcUtWGjxQfCgDuoQCQHBQA/EMBwA/YzG/dunWrJA0kPXCsr1yjrdfvBV3/R7X9VjxIAgoA4UMBwD0UALIFfJotW7ZskPhEPeij/o1CbNHHAmq0QIC2hnsCpAzs1IjEkYTU6zpsAmrsrAAf6A7J5s2b1+PYIhs+cmJQAHAPBYDkoADgHwoAyVC1atVfYl3/9OnTJ0dtFqU3aJJ0kWugnfx89T/+x1fbTwEgfCgAuIcCQPbATAAcERjlZPtCtx9yjTrazhDHZ/q7PB0gBaAiHjNmzBOyfj5tG0wIOsPLSIXtuMC5wHoZG0Zy4qRJAIANO3fu3G5tDJ3hw4ffYcPqCwoA2SQnEjxDAcAd2MzvhhtuaIO2HB1/vSTOpkPoUAAIHwoA7qEAkE3q1q1b/qOPPnrfDtKCtPpvwNoGnxPtVdmyZX9gw0gSABv+YVMGvR5QkEyVhowUNYoBdGceG/5hjaMNIzk50iQAgG3btm2yNoYOBIC0xC8FgGySEwmeoQAQL6VLl/5u+/btG2JN5ZIlSxYcOnTogI3zLEIBIHwoALiHAkB2qVmzZqkPPvjgHcQr6kP4SOIf6WXc1mfyQVFiNHxPiAAVKlT4sQ0jcYxs+CeJo3eW1FM5bKL5AJlIZ2wtTCxfvvzPXPMfL2kSALLqqGEJgJ3F4gsKANkkJxI8QwEgHtDWYTM/rOtHmdVtIfK0tN+6U5glKACEDwUA91AAyDbnnntumfnz589G3Eo9L9Pu4culpe7XfS+51svQcDrAlClTXnbZ9yQGdCAkcaSzIAmmM04aHBRtD+zUTun69etXc+Q/ftIkAIAdO3ZsszaGzpAhQ/rYcPqCAkA2yYkEz1AAKBl9+vTpuGHDhjW6I2XjNy2dPpdQAAgfCgDuoQCQfWrVqlXa9qn0fm12Hb4PdJ/L+nL6M4gANnwkZtCAYPMFSQg7xd92kNMgAEiDr21GJt+0adO6xo0b17BhJCUnTQIAbMAmgBj5QoWH9a54Pe+8806FCorrNP/BTtiMaVuwF9cIC6Y+pSF+AQWAbJITCZ6hAHBiVK9e/bfXXntt81deeeWFY8eOHUUc6s4d7iEP2zYcoK1MQ+fPBRQAwocCgHsoABQGtWvXPg2zwQ4fPnxI4lrPlvaNFayjfErx7d5+++3XbPhITKBzj+MXJNIx9UIiX0YPdGciqmPhCzvF5cMPP3wPm2HYMJJ4SJMAIBUG1rju2bNnJ5atoDO0a9euHbi3b9++vWn+g2MNe3GNNU/yHuUvDfELKABkk5xI8AwFgONTrVq1X3Xr1u1KiIPY7VnPeJN22sargLbRLgfI/UY2oAAQPhQA3EMBoHA4++yzf7Nw4cK5Or7T5L9Zv1L7nLpdwytmAiA8NoykBFSpUuUXkyZNGrN37949iGhpRO2UeptI9r4PJPOIPbNnz34TI6s2jCQ+0iQAwAZJe61sFtUZTis6LGmCAkA2yYkEz1AAiAZOXdu2bRtgZh42s4XIKW2ern/1ukmpQ6QDpaL5G9Jaz8QBBYDwoQDgHgoAhQXi9t13351mne3cVPAD2qIoW3T7hs/RR0Aff8KECc+deeaZP7FhJCfJ1KlTJ8qIv0T2P1LhW5BI0nHQAoH9ng8OHjy4H69QuTCN2oaPxEuaBABx2iQvinKoP0s7+mxtAbbbe76gAJBNciLBMxQAcqlXr16FZ5555qGNGzeuRdmLctjzOfJR7TK+a/N37jeyAQWA8KEA4B4KAIUHlpkuWrRoHupIvVzMJ1rM1j5m1OdyD7bPnDlzig0fOQnmzJkz4+uvvz4mkWsj2zewJapDA3TmWLFixVKO/CdDmgQA4h4KANkkJxI8QwHg79x0000dVq9evQJxkpZOWkhQAAgfCgDuoQBQmMBHgq8k9WRRvlWa+vfWFvis8F1t+MgJItOm0QHTo6hpzgBQiKSzjk4SNrmg858cFAAKCwoA2SQnEjxTqAJA1apVf3nVVVc1wmZ+sgQPbVpWN+lzDQWA8KEA4B4KAIULfCX4TCIw61mzIE39etgi0//xXl9DBLBhIyeIRLReQ5gm7CiIzFaQ6SLY8A9TW2y4iDsoABQWFACySU4keKaQBIBy5cr9sEuXLpc//fTTD6Ijrpff6fbOtn3k+FAACB8KAO6hAFDYwGeC74T6Upx/OxM8Te2P1Ot41eJ46dKlv2vDRk6AqJEGieyo9YU+kIypO+gAm1rQ+U8eCgCFBQWAbJITCZ4pBAGgQYMGlZ988skRixcvnr9jx45tEnbphCEOcM169eShABA+FADcQwGAwHeCD6XTQY+u6/u+EHui2kX4rjZM5ATREWqngkSJA76Qs45hI+CGf/6gAFBYUADIJjmR4JksCwB//OMf66OjhWNJ9YafWH5nR1l0HkyLAB8SFADChwKAeygAEAAfCr6U+FVIC/G10oDeo0Av/RZseMgJIpEsCksanTo7RRKVRfXq1X9rw0KSgQJAYUEBIJvkRIJnsigAdO3a9Yo1a9asFCcfDr/twADktajODTlxKACEDwUA91AAIAJ8KcS/FqO1z5UWtI8qwoANCzlBJGJ1RKMjgs6Kve+bI0eOHF65cuWyunXrlrfhIMlBAaCwQDpTAMgeOZHgmawIAGXKlPlev379umEnf5lBF1VP4l7U8Z+kZEh8UgAIFwoA7qEAQDTwqeBbwceyaeMbEc51WynXpUqV+o4NCzkBdGTq6RZpGY0QmzBC8sEHH7xTo0aN39kwkGShAFBYUADIJjmR4JnQBYAKFSr8eODAgTdifb/uROk2VdeXNq+xLo0HCgDhQwHAPRQAiAW+FXwsWXqW74jApJG2EnW72CZtpg0DOUFsZCeNKDuSyFHCAzakeO+996bXqVOnnLWfJA8FgMIC6UwBIHvkRIJnQhYA+vTp03HJkiUL9NrJtHSeCg0KAOFDAcA9FABIFJgJAF9L77mmX+2RfCYZE4czAEqIjVBfYJqH3fRI3i9dunTh2Wef/RtrO/EDBYDCggJANsmJBM+EKADUrl37NDiC+/bt26vDIqMT+h5JBgoA4UMBwD0UAEg+sCcAjgjUm8DrWQHWT/MJBYASYiM0afId8ScbUnzyySeLqlWr9itrN/EHBYDCggJANsmJBM+EJgAMHTr0NnSEdCcJbZbkJXyWpo5SoUABIHwoALiHAgApijPPPPMn8+fPn420EV9Mt2e27fMFBYASYiPUB5KRcEySzmSYVlmrVq3S1mbiFwoAhQUFgGySEwmeCUUAuOyyy6pLx0jslmvWh/6hABA+FADcQwGAHI+qVav+Usoh/DLUrZipbdPOJxQASoiN0KSRdST6CAoIAtiMgtP+0wkFgMKCAkA2yYkEz4QgANx6662dt23btgn2Hj58+FBUGABH//1BASB8KAC4hwIAKQ6nn376v0+ZMuVlSSfpI6Vh9B9QACghNkJ9oDeTwOYTqPy52396oQBQWFAAyCY5keCZtAsA6AQdOHBgn53yD7v1xkjELxQAwocCgHsoAJDighNuJk+ePFbavrQ4/4ACQAmxEZo0eqQEHSo0rGedddavrZ0kPVAAKCwoAGSTnEjwTJoFgNWrV6+Qs4hh69GjR49Y+wWZBYD8w1kAyUMBIHwoALiHAgA5EcqXL/8jbAwIHy1q1rYvKACUEBuhPsBGgMhUaFS54V/6oQBQWFAAyCY5keCZNAoAlStX/vnnn3++BfYhP+iZapJXxOHXYSH+oAAQPhQA3EMBgJwocLZR76G9S8ssAAoAJcRGqA/QaM+dO3cmpppY+0j6oABQWFAAyCY5keCZtAkA559/ftlPP/10ibWzEMDMBVsW9KtcR50DHfXdJKEAED4UANxDAYCcDNgTYN68ebNklptNx6ShAFBCbIQmDToRb7311qsunQsSLxQACgsKANkkJxI8kyYBAOcgL1++/M+FMLIvzj6wSxbEwcdoj67r8V3t/NvP5Z5+nxQUAMKHAoB7KACQk6VcuXI/nD59+mRfdbyGAkAJsRGaNMuWLVuMzr+1i6QXCgCFBQWAbJITCZ5JkwCwcuXKZWno3PgCYY9a7iDX+v3Bgwf3YwkfrrWA4Es8oQAQPhQA3EMBgJQEiOQrVqxYatMxaSgAlBAboUmDDZVGjhw52NpF0gsFgMKCAkA2yYkEz6RFAPjkk08W2RHuLCOj9xJmWwZECJH40HX+U0899cB555136tNPP/1gvmMR7T3XUAAIHwoA7qEAQEpC3759r0Of0KZj0lAAKCE2Qn3x0EMPDbK2kXRCAaCwoACQTXIiwTNpEAAmTpz4vLWr0EC+h7OvR/NxNC9ed+/e/QUc3379+nXT8TZs2LC+Unb0LtE+oAAQPhQA3EMBgJwsvXv3vtqmny8oAJQQG6E+GT58+B3WPpI+KAAUFhQAsklOJHjGtwDQpUuXy+FESR6wo+FZBnldsPcPHDiwb8OGDWtefvnlZ1q2bFnXxhsYMWJEf7t/APCxjIICQPhQAHAPBQByMtx33339kF5Y9hVV5ycNBYASYiM0aaTBRmcBIw2PPvroPdZGki4oABQWFACySU4keManAFCzZs1SS5YsWSC2FFK9psOqz3XeunXrxmnTpk265ZZbrj3rrLN+beNMA+FeOoNIRx+Ov0ABIHwoALiHAgA5UTBL2/cMLwsFgBJiI9QHOkPt3bt3z3PPPfcIEza9UAAoLCgAZJOcSPCMTwHg8ccfHy52iCPr04lNGt3+rlmzZiWm9OMYRBtP+ZAZAHbGhI+OIgWA8KEA4B4KAOREgPOPfV70Ui+bhj6gn1hCbIQmjTTY0vHC61//+tevX3vttXHWVpIOKAAUFhQAsklOJHjGlwBw8cUXV8FO9tZ5BWmY4hgFbNV1r30v9+Rah0N/T4/aL1y4cG6HDh0utfFTHO6///4B2gZrS5JQAAgfCgDuoQBAisuzzz47Epu1o24FUW2lLygAlBAboUljOw2SuY4cOXKYIkA6oQBQWCCdKQBkj5xI8IwvAeD1119/SZ4vr9LRsTb6oih7rKMvexfI/+j/0yL7oUOHDmBTP9TltWvXPs3Gy4lAAcA/FADcY+0MGQoApDi8+OKLj9vd/tNQzwsUAEqIjVBf6E6LHrEYO3bsk6eeeuq/WruJPygAFBZIZwoA2SMnEjzjQwDANHeZ6m9HNex7n0i7GHXf3otC2lNM29yyZcsGOFfYyTkuh5ECgH8oALjH2hkyFABIUZQvX/5HON5V2keZmW3TzTcUAEqIjdCkkc4JGm7d6UJmw3tkwPHjxz/r0vkgJwYFgMKCAkA2yYkEz/gQAD755JNF8mxrD/Cxhr04SFsJsBuz/kyL5xIufGfRokXzhgwZ0gdLHmw8lBQKAP6hAOAea2fIUAAg+cCA6+jRo0fpfXD0mn+0MT7reA0FgBJiI9QntgOOV2Q8ZMTp06dPtrYTP1AAKCwoAGSTnEjwTNICQMOGDf9gRWe8B1qUzjHSA9YGa7OAe9r5h3iBI/zGjBnzROvWreuVLl36uzYO4oICgH8oALjH2hkyFABIPp5//vlHZdp/VF2epr1xKACUEBuhPtAdGnRcrMKEEQy8/+CDD96x9pPkoQBQWCCdKQBkj5xI8EzSAoCM/uvny3VadjgGx6tj9ecyY2HHjh3b7rnnnlttmF1BAcA/FADcY+0MGQoAJIqXXnrpaalD0Z7gWkAdr2fF+aznBQoAJcRGaNIgE4nTH/WZ7pgdO3bs6Pz582e7dETI8aEAUFggnSkAZI+cSPBMkgJA2bJlf/D5559v0c+2HZs01m3aJlxjZhxsR7u4c+fO7bNnz36zY8eOTWx4XUMBwD8UANxj7QwZCgDE8v77778t6RFVh9t2MQ1L5CgAlBAbob5AxpJOhJ2CqTvm+GzWrFlvVK9e/bc2LCQZKAAUFkhnCgDZIycSPJOkAPDkk0+O0O2MXuuor9NUvyF+dP6EndjJf8GCBXPggGNDQxvOpKAA4B8KAO6xdoYMBQAiVKxY8adYYo10sHU33kc5+vZ7vqAAUEIkImU0QRI2akTeJ7BHMiLsnDlz5pQaNWr8zoaHuCdNAoDdxRs2SWc5DfaFjsThvn379pYrV+6HNi/EBQWA5MmJBM8kKQC8/fbbr6WpbtD5Tne25L5ti3ft2rVjwoQJz3Xq1KlpGjpAFAD8QwHAPdbOkKEAQEClSpV+huPWjx49ekTSIqo/5AuxRQvzuj204SEnCKYPSmTqzoe+75Mo9Qkgw86bN28W1CsbJuKWNAkAABXVyJEjBw8bNqzvfffd1w8dUjgTDz300KDhw4ffwb+T/xsxYkR/xOvAgQNvtPkgTigAJE9OJHgmKQGgefPm527evHm9rG+0dvggKv/JkUvYj0DbiaOZLrnkkqo2XD6hAOAfCgDusXaGDAUAgvpi2rRpk44cOXJYp4U42GkQAIA4/zJILffRhmelzvOGRKRWVdJ43qMeDdH2LV++/M82TMQtaRMAIFZZG0lYUABInpxI8ExSAsDtt9/e1T7bN2h/RZDI1w7PmTNnBvYusOFJAxQA/EMBwD3WzpChAEBQh8kAK9qdtDn+QOzTbQrslI16XZ5uUxDoHY9twtv3PrHTIIFkjhUrViw9++yzf2PDRtyQNgEAWBtJWFAASJ6cSPBMUgIAZgWlwVEVpF3DSTd4RTzo6Y5bt27dOGDAgB42HGmCAoB/KAC4x9oZMhQAChcsG1u1atVyXU9rsdln/Z0PaSe1v4p2Mg1L4IIGEak7vhLRyAS6I+KLfEsAgO64L1u2bPEFF1xwug0fiZ80CQCSX62NJCwoACRPTiR4JgkBoGrVqr9EHkuTsA2iOjewccqUKS9feOGFZ9hwpA0KAP6hAOAea2fIUAAoTKpVq/YrbBwrDn9UXS3tY9RnPhAfUM9UF/tt+MgJsnHjxrU6kpH4+jonJTwjtgHpcGiRAkcE1q9fv5INI4mXNAkAkg+sjSQsKAAkT04keCYJAaBu3brl7XPTgJ7SiPYM7RscWJebbsYJBQD/UABwj7UzZCgAFB6I3xkzZrwucS5tjbxHO1TUgKsPomZ+i8+3YcOGNTaM5AS57LLLqqPwoeGUxtNutuAbZILjdSpkF8slS5Ys4BGBbkmTACBYG0lYUABInpxI8EwSAsCll156Fp4lnYo0dHZsnjt8+PCh3r17X21tTzMUAPxDAcA91s6QoQBQWGCz9A8++OAd7JeVb483XW9rf9A32hbxTbdt27apRYsW59lwkpMAU+fXrFmzEhEsIxFRyosvtC2604ZMYRUsvCJzYLqnDSeJhzQJAGKDtZGEBQWA5MmJBM8kIQDccccd18vz0lB3adDuov269957b7d2px0KAP6hAOAea2fIUAAoLDDTW/dv7PJufKY/T4M4DqJs2rFjx7bLL7+8tg0jKQGNGzeusXbt2s90Q24jXieGXq/oE9gaJVbgrGQuB3BDmgQAgPxpbSRhQQEgeXIiwTNJCADYJwZ1RZKOKp5hn6PvSZ5Dhwxr/q3NIUABwD8UANxj7QwZCgCFATZHh/Nv2xuQFiff7n2D1yifE2FAvm3atGlNG04SA1BVNm3atA7TRCQRrKOvzyW2KpJPYJNMbZFMs3r16hVY4mDDSUpG2gQA2GFtJGFBASB5ciLBM0kIALp9iBK6XfKtzx/5PLSpEN9PP/30f7c2hwAFAP9QAHCPtTNkKABkH+x5s3Tp0oWIX6mf07T8DYgPCduifE19jTX/bdq0uciGk8TIxRdfXAWFEZFup97rhr046/KTQGdkrRpJxlq+fPmfmzVrVsuGk5w8aRMAgLWRhAUFgOTJiQTPJCEA2GcmWX/lEwCkzWrSpMk51t5QoADgHwoA7rF2hgwFgGxTp06dcosXL55v62J5b/05X8AG7WfivV3WDV8Og7mNGjWqZsNJHIA9AT766KP3kQC6U6yd/rQoSEAykO5kScbBe4yutGrV6gIbTnJyUAAgcUMBIHlyIsEzSQgAtnORBPnqSNyX/DZnzpwZ1taQoADgHwoA7rF2hgwFgOyCo2NlY3e0d7rN07O2fdbTGrEP9mgxQNpHhAWzGWw4iUNq1apV+uOPP/5AEkISBtdJd6KOh87kdmrnN4rA//7v/x44cGAfZwLEAwUAEjcUAJInJxI841oAuOKKK+pIOic5e83uTxP1XGtraFAA8A8FAPdYO0OGAkA2qVGjxu/27NmzU/weHcfyPi2j/xrYJP0vtJlyvWLFiqUNGzb8gw0nSYCLLrqooogAGlGRbOfGB+L4a1uwXiQqkx88eHA/15CUHAoAJG4oACRPTiR4xrUA8NRTTz0g6RvVOXKFfg6udR4Ds2bNesPaGhoUAPxDAcA91s6QoQCQPc4777xT9+/f/5WOV/GP9Hp6aYd81tOC+G1R+8nB98TRvTacJEGQALIcAImUtikkulOX73xLPTsAO2J26dLlchtOUnzSKACUL1/+R9ZOEg4UAJInJxI841oA+PTTT5f4nrlm60t0yrKwNI0CgH8oALjH2hkyFACyRcuWLeuuW7duFeISTrXdEF2ufdbNUWh7tH8Jn5POf0o499xzyyxatGgeEibfVHufWPVId0R0ARC1CXsCdO3a9QobTlI80igAnHXWWb+2dpJwoACQPDmR4BnXAoDU/VoE8Fl/oYMGp6127dqnWVtDgwKAfygAuMfaGTIUALIDRGQI3F9//fUxxKX0Y/Taerknr2mYvQ20bWIvfE34nDacxCMVK1b8qVTKklB63QbAiIa8zzcanzQiDtjRny1btmzo0aNHWxtOcnzSJgAgz7HCCBsKAMmTEwmecS0A2DT2VXfh+dL5evrppx+0doYIBQD/UABwj7UzZCgAZIN27dpdsmbNmpU6LqV9SYuTr30vvZec/o68nz9//uxKlSr9zIaTpACcUzx37tyZaGR1h8omZlHrOnwhmRA2yXqYw4cPH+JMgBOHAgCJGwoAyZMTCZ5xLQDoZyVZb0W1j3L/nnvuudXaGSIUAPxDAcA91s6QoQAQPjgWD+Ue8Qf/Rs/OxqvPelgQH7AoW8TuZcuWLcYmhjacJEVgJgDWZyDRtKOPP8l4esOJtKDFCN0hw7SZG264oY0NJ8kPBQASNxQAkicnEjzjWgDA70sbEOWQuyTKMUYb2a9fv27WzhChAOAfCgDusXaGDAWAsMGafwxgSvzpNi0tI/+Ctg1+o92QEK8LFiyYgz6gDSdJIRUqVPjx+++//zYSDplNd6DTlvm0PTojojMotu/cuXN7nz59OtpwkmgoAJC4oQCQPDmR4BnXAgCeYZeBJY12kvfu3bsnK5vRUgDwDwUA91g7Q4YCQLh07NixybZt2zahPcNSa3GoUffpPkzSQnc+xA7rH8qeBfPmzZuFgWUbTpJiIAJMnz59snSqohx/nx0BjbYNNkXZBRHgjjvuuN6Gk/wzFABI3FAASJ6cSPBMEgKAJl87EDdRz8A9THfMysalFAD8QwHAPdbOkKEAECaYrbx69eoVUcur7QBn7qd+EJu0D4ZruT9jxozXy5Ur90MbThIAp5xyyvcnTZo0BgmpO1RJda6KS9SSBGRA3JfP8H7fvn17hwwZ0seGk+RCAYDEDQWA5MmJBM8kJQCIYJ1k3YVnWQd51qxZb1gbQ4UCgH8oALjH2hkyFADCo3Pnzi0wUCltGEb/ozZbRx0Ydd8nYo9uI2bOnDkF+8rZcJKAQKPz5ptvTpBE1UpPGlQoO+0T73VHH3yjVnybMWH/XXfd1cuGk/wfFABI3FAASJ6cSPCMawFA0thHm4RnI3x6udy0adMmWRtDhQKAfygAuMfaGTIUAMICu/0jnvLNuMZ76/RbP8cH2v/CtdTPb7/99mt0/jPCqaee+q9YDoAMJ5nOZydAE9Xxkw6ZvJfPpFDhs3vvvfd2G07ydygAkLihAJA8OZHgGZcCQK1atUrLc5Cukt62E+UC+wx59tSpUydaO0OFAoB/KAC4x9oZMhQAwqF79+6tpW+Sr57VfRfb5vhGz7qDnXD+edRfxsByAMwE0JlSZ1TbufbZSYjCHqGBBnXUqFHDbDgJBQASPxQAkicnEjzjUgA4//zzy9rnJY1u8/BKAcAN8mwKAOFCAcA9FADCAJuTb9++fSviSOo2PVBp49EHum0Depa1Xn6N6ylTprzMNf8ZpXTp0t995ZVXXjhy5MhhSXRkBD0NRI/Ep0Gpso6/ZteuXTtcdyRChAIAiRsKAMmTEwmeoQAQLhQA/EMBwD3WzpChAJB+7r777t5bt27dKHFkfZUonyVptG+nnX3t5+E72PH/1VdfHY2BYhtOkiHKlCnzvRdffPFxiADi4EvnJ23Ov0bvTAk7pSOBszaffvrpB204CxkKACRuKAAkT04keIYCQLhQAPAPBQD3WDtDhgJAuhk0aNBNBw4c2Ie4QZ0WtZF5WnwoXe8L4uuJ7RMnTnweA8Q2nCSjjB079klkALsJnyYNGVh3VrQ9smGFfP7SSy89bcNYqFAAIHFDASB5ciLBMxQAwoUCgH8oALjH2hkyFADSS//+/btrX0T3S3CdhpF/oShbIALAj8L+cDaMpAB4+eWXn5EMIgoWGmjZrbKozJMUuuMCrCghNuI7o0ePHoUZDjachQYFABI3FACSJycSPEMBIFwoAPiHAoB7rJ0hQwEgnfTr168b4gN+iK1H9S76afCdNPoEAvH1EIYJEyY8R5+pgBk3btxT+/fv/0pnlqJmBfjArleR5QC6U4NrLAd4/vnnHy1btuwPbDgLCQoAJG4oACRPTiR4hgJAuFAA8A8FAPdYO0OGAkD6uPPOO3vu27dvr64/4UzjPerXfHup+Ubsw7XYePTo0SNYCm7DSAqQZ599diQUInGqkUHwmpZMjExblCiBQih2Hzx4cP8zzzzzkA1jIUEBgMQNBYDkyYkEz1AACBcKAP6hAOAea2fIUABIF2j7EA96JN3Wo9I/0fuV+UbPmJY2Dv5SoftIxDBy5MjBcjoAMk1anH8pSMi4etNC+VyutUiAQjp79uw3bRgLBQoAJG4oACRPTiR4hgJAuFAA8A8FAPdYO0OGAkB6kAFS7JQv8SF9kaiBSe2T2M98IUsW8Pr4448Pt2Ek5F8efvjhu6EORa2zt/fSRNTpBSisy5YtW2zDWAhQACBxQwEgeXIiwTNZFgCiHOM33nhjvLUzVCgA+IcCgHusnSFDASAdYF8xcfzFodcj/TaekkbbIDMPbP2O+/I9LJG2YSTkH4waNWqY7mgj09sMhfdpmSEAtL36OA7MaMBMgEI73oICQDKgQ1epUqWfVa1a9Zf4q1Klyi/gKOO1cuXKP8e1fObqD8/Ca40aNX5n7YsTCgDJkxMJnqEAEC4UAPxDAcA91s6QoQDgnyeeeOI+cf51/Rl15J9PogZtxW+T+1jzj/DYMBLyTwwbNqwvNtSTzCQZH5lKO/4+OxIa7RiICibvYfOrr746unz58j+y4cwqFACS4brrrmu5evXqFRs2bFgjf5s2bVq3cePGtevXr1+NV9d/eB5sWLp06cJTTjnl+9bGuKAAkDw5keAZCgDhQgHAPxQA3GPtDBkKAP7ArvhPPvnkCFkSjTorajp/GgZBdV0Oe+S9FgQOHDiwD22ADScheRk0aNBNugDojCYdcd0h90mUfaKA4RXvZ86cOaVQRAAKAMkwdOjQ244dO3YUlW1UHsSr3HeFfp7LmS4UAJInJxI8QwEgXCgA+IcCgHusnSFDAcAfmPaPfh3qTOnbIQ7wXu8DYEfdfWD7mfY+nH/0U20YCTkugwcPvnnPnj07kZGgLsnUl7Q4/hoURq3S6cIA2/HZJ598ssiGMYtQAEgGiGRoKHzGM/I18j4aJpfHX1IASJ6cSPAMBYBwoQDgHwoA7rF2hgwFAD+8+eabE7Dhnwx+anT/I2pGgC9Qp8psBPQF0SfFNab9DxkypI8NIyHFBiIAVCRkKK1+pYUo1UujCyoKx9q1az+zYcwaFACSAZUrKtmojrW+5xJ5HpbsUADIFjmR4BkKAOFCAcA/FADcY+0MGQoAyYP9wvSoPnwHDHrKIIuOj7TtAyDIMYUQMHCymw0jIScMppB8+eWXuyWToTORhvUvwBZMgE4GbNQOg1yjMC9cuHDu2Wef/RsbzqxAASAZZAaADW+SSDmEOFeuXLkfWhvjggJA8uREgmcoAIQLBQD/UABwj7UzZCgAJAeWTr711luvwnmW/hTqS+tb4J4sKdb3faKFCLGXa/5J7Nx99929ZTkA8NmJsOjCCru0bXJfCi1e4bTNmzdvFjqeNpxZgAJAMtxzzz236hkAvjrZaJSQpykAZIucSPAMBYBwoQDgHwoA7rF2hgwFgGQ444wz/mPq1KkTDx06dEDCKk617ndoMUDuW4EgDezdu3cPfDUbTkJKTO/eva9GQ2YVMHmfxgIB7DIAvMJhwp4Aro9P8wEFgGTAEgC9B4CO76TjHkIEOmbWxrigAJA8OZHgGQoA4UIBwD8UANxj7QwZCgDuwW7/WPMvS5wx+m99m7QQZZdsdC7vMUv7tttu62LDSUhs3HDDDW327du3V3coNHoNiv3MF7rw6CkzsBFHqEEFtOEMGQoAyUABIBkoAPiHAkC4UADwDwUA91g7Q4YCgHs+/PDD9/S+ZrZ/EeV0+0BshD1ybQdbIWJggNaGkZDY6dmzZzs0aMh4Mrqu10Lrdckqj3pDF2Rc24KNM9uzNBOAAkAyUABIBgoA/qEAEC4UAPxDAcA91s6QoQDglqVLly7UTjQGLuU9Xn3WkRrp81ifBYjvhQ2g+/bte50NIyHO6NWr11U7d+7crjOikKYdMkXJs86DLeRwburXr1/JhjNEKAAkAwWAZKAA4B8KAOFCAcA/FADcY+0MGQoAbqhcufLP586dO1PCFTXt3773ia6r7QkFeMWaf077J17o0aNH223btm2STKkzphUFfAN7tE22YOGzlStXLmvWrFktG87QoACQDBQAkoECgH8oAIQLBQD/UABwj7UzZCgAxE/FihV/unjx4vkYMUeYohx96xfkfpo8tq7Wp69t3759K6f9E69cf/31rTZt2rQOGdIWKNkPwCfaJmtfFHByLr744io2nCFBASAZKAAkAwUA/1AACBcKAP6hAOAea2fIUACIF/Rf3n333WkHDx7cb8OGGcsyI9hn3RiFDFraY9fh/F977bXNbTgJSRyIADt27NimM2laClKUigfbcF8+k0ImDgZmNdSsWbOUDWcoUABIBgoAySBxSQHAHxQAwoUCgH8oALjH2hkyFADiZdmyZYt1eHQdGDUwaB1un4h/Ij7L5s2b13fv3r21DSMh3ujUqVPT3bt3f4HCJI61z46GBjZZ50FfA+kgyfduvvnma2wYQ4ECQDJQAEgGiUtbhikAJAcFgHChAOAfCgDusXaGDAWA+MAGeTY82keROknvBxAlCvhEr/kP2TchGeaaa65pjE65zby686GdcZ8dEU2UHbfeemtnG75QSJMAIGmdpVMWBAoAyaDrDn2PAkByUAAIFwoA/qEA4B5rZ8hQAIgP9OVteHzWgRpth/aNgJ6lDLZs2bKBzj9JNR06dLh09erVK+RYwKI2A0zLaQFRlQEFgHihAOAWCgDZIycSPEMBIFwoAPiHAoB7rJ0hQwEgPtIsAOhlyOIrwTbtG2EvNeSHNm3aXGTDRkjq+OMf/1gfahUyr3TaZU0N3sNZ+UcJSAFRlQEFgHipVatWaWtn6FAASAYKAP6hABAuFAD8QwHAPdbOkKEAEB9pFgAE9COtryQ2Ii+0b9++oQ0XIamlSZMm56xdu/YzZGBRufAqmToto/8gqjKgABAPsAEV24UXXniGtTN0KAAkAwUA/1AACBcKAP6hAOAea2fIUACIj7QLAHIsIRC/SHylDRs2rGndunU9GyZCUk+zZs1q6YoMmVt34tMiAkRVBhQA4kFsaNq0aU1rZ+hQAEgGCgD+oQAQLhQA/EMBwD3WzpChABAfaRYA9MxovVwaAgCO+uvYsWMTGx5CguGKK66os27dulXI1FLokOnTUgBBlC0UAOIli1OYKAAkAwUA/1AACBcKAP6hAOAea2fIUACIjzQLAAB1swyGil3wma666qpGNiyEBEfdunXLi/Og1/9zBoAb0igA4JhIa2foUABIBgoA/qEAEC4UAPxDAcA91s6QoQAQH2kWAPRgKDb7w+uKFSuWNmjQoLINByHBUr9+/UoLFiyYgwxe1MkAPoiqDCgAxIM4bRQA3EIBIHvkRIJnKACECwUA/1AAcI+1M2QoAMRHmgUAQXyihQsXzr3ooosq2jAQEjzI2FC3sL5FOvOyQaCshdGFIalCGvUcCgDxIDZ07ty5hbUzdCgAJAMFAP9QAAgXCgD+oQDgHmtnyFAAiA+fAoD0WWzfJep1+fLlf65Tp045az8hmaF69eq/lT0B9BIAOysgyeUBUZUBBYB4EBsoALiFAkD2yIkEz1AACBcKAP6hAOAea2fIUACID58CgMZu8qc/w4lpjRs3rmFtJyRz4Ez4JUuWLEDG146+zAKQ16REgKjKgAJAPFAASAYKANkjJxI8QwEgXCgA+IcCgHusnSFDASA+fAoAeA5APxHvIQLIs8XPwcg/lkhbuwnJLFWqVPnFvHnzZkkhMeXmnxQyl0Q9nwJAPIgNFADcQgEge+REgmcoAIQLBQD/UABwj7UzZCgAxIdPAcAudRbk+fPnz58NX8jaTEjmqVat2q8++OCDd1BIZAdMeQV2WYAroioDCgDxQAEgGSgAZI+cSPAMBYBwoQDgHwoA7rF2hgwFgPjwKQBEISehvfvuu9POOuusX1t7CSkYsCfAhx9++B4KhEyJQWdFsIXHBVGVAQWAeKAAkAwUALJHTiR4hgJAuFAA8A8FAPdYO0OGAkB8+BYA9ACngIHPmjVrlrK2ElJwlCtX7oeLFy+ej0KpTwhIiqjKgAJAPFAASAYKANkjJxI8QwEgXCgA+IcCgHusnSFDASA+fAsA8izMaP7666+PrVq1anmocUmIE84888yfQBVDQZGOvj4a0CVRlQEFgHigAJAMFACyR04keIYCQLhQAPAPBQD3WDtDhgJAfPgUAPAcvf4fs51DjUdCnFK2bNkfvPXWW69KYZEdM6Xj//dFAf98nmZJifodCgDxIJXftdde29zaGTpDhw69DSdV5NvgJSnwfNhRpkyZ71kb44ICQPLkRIJnsiwAAOQn7SBPnTp1orUzVCgA+IcCgHusnSFDASA+XAoAtk9i7+t7U6ZMedllH42Q4Dn99NP/fcaMGa/bNTMCCpbMDIirEEf9DgWAeBAbOnXq1NTaGTqPPfbYUIhUuhGQMCcZ93g+ysspp5zyfWtjXFAASJ4k89DxoAAQLhQA/EMBwD3WzpChABAfSQgA6H/pGcv69zE7c9q0aZMqVar0M2sbIcQAlWzOnDkzUHj0CKsWBXBfrktKVGVAASA+UElmcQnAs88+OzIqjrUzkQR4FtaWcQlAtkhqCVRxoAAQLhQA/EMBwD3WzpChABAfLgUAoPsl4qvg93ENFi1aNO/UU0/9V2sXIaQIpk+fPlkXKiHujkzU71AAiA+kX58+fTpaO0Nn9OjRo2xYtSORBPKsI0eOHMYSGmtjXFAASJ6cSPAMBYBwoQDgHwoA7rF2hgwFgPhwKQDIUeV6JqiepYx9zej8E3ISoOBMnjx5rBQ2KVQy+i+Fr6REVQYUAOLlkUceGWLtDJ2XXnrpaRvOpJE03r9//1cUALJFTiR4hgJAuFAA8A8FAPdYO0OGAkB8JCEAyCCl7qNgPzP0m6w9hJATYMKECc9h+r92+OOcHhtVGVAAiJcsdaiF8ePHP2vD6Ys9e/bs5BKAbKHD6xsKAOFCAcA/FADcY+0MGQoA8eFSAAB6OTL8Eqz5f/nll5+xdhBCTgI0OGPHjn1SVDYUMgoA+UmTACBOzCeffLLI2hk6MjtFOw8+wLN37NixjZsAZoeKFSv+NM59TkoKBYBwoQDgHwoA7rF2hgwFgPhwLQDIWn95j5mhLgdjCCk40Hi++uqro6XA4TWuDnJUZUABIB7Eadu8efN6a2fozJo16w2ETTsPQtQ9V+A527Zt2+TyiBkKAMnSokWL83IiwTMUAMKFAoB/KAC4x9oZMhQA4sOlACCzkmVA8rXXXhvnsh9GSEHzxhtvjEdnRpz/KBEAAoHu0B2PqO+FLACMHDlycFSYfII0sXaGTJ06dcqhUbThTBpxitetW7fKZQfTpwCgHX8R/5C/t2/fvtXamRXQkUjbEgBXTptvAUA7x7gG2IDW2hkqI0aM6K/bSV2GdDwkAQWA8KEA4B4KAPFREgHAfg91p133L9cYELLPJoTEDJYDoBBKAcQr1t3ogir37b0obCEHIQsAGKmLCpMPxA7s4fDHP/6xvrU1VLp27XqFPpbSFxK/H3744XvWxjjxKQDovCxlGk7arl27dlg7s8Lhw4cP5USCRxD/iO+HH374bmtnHPgUALTzr9uLLM0AQHtgwwfi2kT3RKAAED4UANxDASA+SiIACHrJsa039+7duwcDk/a5hBBHPPnkkyPsXgD6KI6omQH5iKoMQhYAhg0b1jcqTD6Q9MDrmDFjnrC2hkr//v27pyWOgeu4TYsAIPkJ9w4cOLDP2pkVEMYTqcNc8s0Cx7/97W8PPfTQIGtnHPgWAMQx1m3J/PnzZ2dlKifaA4QJZQYgvL7yFgWA8KEA4B4KAPFRUgFAD/ToehP+Bo5ffvHFFx+3zySEOAZHy8UxChtVGYQsANx55509UTlFhcsH4rQtWbJkgbU1RNCRwxEvNpw+kDQeMGBAD2tnnPgUAPTIpc7TcNigvGdtw53mzZufG0e9FhfiJLty2nwKAEAcfy0uYXlJ69at61lbQwQzAOwpOhLWpKEAED4UANxDASA+SioA6FliQK7RbowaNWqYfR4hJCGee+65R44dO3YUBVIcBeno2Kk6+YiqDEIWAHr06NEWU4ijwuUDSZedO3dub9asWS1rb2jUqFHjd1B+bTh9gXzeoUOHS62dceJTALANsGXx4sXzQ+2cRIHp5zaMvkH8u3LafAsAqJ9sBw/cfvvtXa2toYGTQeS0EgmbtItFlSlXUAAIHwoA7qEAEB8lEQCk7yoj/yIW4/WFF154zD6LEJIwjz322NCvv/76GAqmdN5OZIQjqjIIWQBo1arVBdgh3YbJB3oJAEahsHTD2hsaAwcOvBFhKq7A5BoIYNg13toZJz4FAIuUcX0PmyA2bdq0prU7RFatWrUcYfI1TVujR8Wxm7y1NQ58CgCSj+wrcBXepKhXr14FvVGp3bzKlqEkkGdSAAgXCgDuoQAQHyURAHQfT1+PHj16lH0OIcQTWJ+6b9++vcUt2Jqo/wlZAKhdu/ZpaWlAtAMB4ERiBN3aHBKYyWDD6RPk+yZNmpxj7YwTXwJAVNkEcl87yfv37/8Ky1/Kly//I2t/KPTs2bNdmvKXlF8IrIMHD77Z2hsHPgUAvbzEisbvv//+2xUrVvyptTftIP9DvJCZccCeApCvXLmGAkD4UABwT1r6b0KhCgAa1KEHDx7cj1nH9hmEEM8MGTKkDzYGkynDxS3kUd8LWQA488wzf7J06dKFNky+0Jtr4dqVI5EE2An9RPKWa5DXsV65YcOGf7C2xokvASDf+n/Nt3vU/eN72J/BdXy44r333puOMFhn1BcS5xBXXE2J9ykAaGSER+Ie70NbsgQBCUtixPm36/51OfEBBYDwoQDgHgoA8VESAQDfk/20cNIYfAz7+4SQlDB8+PA7Dh06dEAX8KjOtHbioiqDkAUAgE6gDZMPELd2lG3Tpk3rQpwFgCm1svY/qY605NOoPApwH2nteqTSlwBQHPQyE7mHDtTQoUNvs+FIM506dWoqm/+JiKnD6ZPNmzevdzXLBHkLz0jLkhrNzJkzp1h708jZZ5/9G5wEInu/pGH5SBSSpykAhAsFAPdQAIiP4wkAepaqFUzxir4efIp77733dvvbhJCUgc6F3ehId4j0iLT+jiZ0AQANdJTw4Qs4NhLvqFBnzZr1hrU57Xz66adLYL/krSR2ai/K+QeIyySOoUmzAKAbbZRznc+WL1/+Z9huw5M2qlat+stdu3btgN2Sr4pK9yRB/G7cuHHt6aef/u/W7rjQgod99QlsqF69+m+tvWkCQhdmvom9YntSIuWJQAEgfCgAuIcCQHwUJQBIH9kukdLXmE3l6ghcQogDMFUHU3Z0Z1I7xPp9VEczdAEAo0E2TD6IGsmUCnbkyJGDrd1p5dlnnx2JddBaFdZhcoWNOwvsSWKkO80CANIiXzyJOIAjQ13PkigJWG+u7dbrt32DOFy2bNlia3Oc6LpZrtMyIwDOm7U3DbRv377hhg0b1kjnFfGW1pF/gQJA+FAAcA8FgPg4ngCg25m/Lyb8v74dBhOysHE1IQUHzkbfu3fvHjkhIKrAgyjnIXQBoHfv3lfrcPskX6cUaXHPPffcam1PGzhHG5u/IBzSOOQLU9LAUbztttu6WJvjJq0CgC67dhTZztDASQEjRozoX6tWrdI2fL5AvE6aNGmMrpfsDKU0AIHC2h4n+llFCbNJI+V92rRpk6zNvrjmmmsaIz0gcIudyDtaREkrFADChwKAeygAxEdRAoBgB3RQl+7Zs2cn+gv29wghgdC3b9/rZGotnCUUfNvBtpUBCF0AgJODTocNly9QoQJd0SLeYePYsWOfrFSp0s9sGHxTpkyZ72Hk/8svv9wdNUJpGw0fbNu2bVPz5s3PtbbHTVoFAAF5Sav6cl/KuogBeL969eoV2Mn3kksuqWrDmSQNGjSojDXm2l5dF0XVS77A5oTW/jjBM6LWX/pG7EBnELOqrN1JUbly5Z/379+/+9y5c2dCjIRNiC87XVWXASuApQEKAOFDAcA9FADioygBQNocEeDlPY7RdrXpLSEkQdBxEhFA0KMnUR3t0AUAgI1LbLiSxnbqAeJbd1yxfnXhwoVz07Rze6tWrS6wa/5llC0tzgniccmSJQuS6FimWQBAelhhCY6+Tid7DXbs2LHtww8/fK9Xr15XJRGHGtQv2AxT26brIRsmnyDfv/HGG+NtGOJEnqOfmWNECoDjPXXq1InlypX7obXfFZdeeulZEEgx1R/HfYotdnaXzjtpng1AASB8KAC4hwJAfBQlAAArlO7evfsLzB62v0MICZRBgwbdlM8hzqoAkJajAKUzrx0aWeNsldjx48c/a8ORJJiJMG7cuKdkMzmxuajRZR/AHoDp4zYMLkirAGAdRT0KKp/Le31f4k/SF7unw7lr3LhxDRv2OGnRosV52FBP7BAb5Vqv59bf8Qnsu/HGG9vbsMSJLUtpET+kntL5CsvKrr322uY2DHFRqlSp70C0lvX9VszS5LsPe9MShxqJQwoA4UIBwD0UAOLjeAKAXs6JcnrXXXf1sr9BCAkcrIvHVE4p/Na502RBALj77rt723AljcSxvNrTGKKcHxy19/LLLz/TqFGjaqVLl/6uDVfcoEODZ2GkTXbT1oiNkk/ydbqTQpxXkNQatbQKAEAceZsu2gHSn0V9F+B3kNYY6Z09e/abN910U4dzzz23DEShk+28n3nmmT+54IILTr/vvvv6bdmyZQOeE/VsbauMSKTBgZM4gVNqwxYnUu6soJMGJB1sukFg7dat25UlPSXgjDPO+I/LLrus+rBhw/riSE8rjkY9Wz7TdVIa484i9lIACBcKAO6hABAfRQkAun+KQQBsHm7/nxCSETByg/U9UhHokSfpQGF6Zb9+/brZ/w2NKlWq/ELChw6i7kTqzmXaEOcW9sLpxKwAbHTXpk2bi7Buu2bNmqWwozuOJYNAcLyOFT4vX778jxAf+F8sNcBGWrfccsu1EBow1V/iScdLGuLIig9AbMWMFpz/bcPrgjQLAC5BxwD1xYIFC+YgH+I4IIzO9uzZs13nzp1bXH311Ze1bdu2Af7wHqIBhDfsMTB9+vTJW7du3ahnHqUtf1mk3GnHEsulbH6IG5RDeb61Ke1s3759K/ZywGahyBfIC5jp0aRJk3Pwh1klzZo1q3XllVde2LFjxyY333zzNXCAsafARx999D7+X3dI5TrEuDgeEiYKAOFCAcA9FADiA9P5o5b86joXywGzMOhHCDkO6KijYy4VApQ/uRYwW8D+X4hgAzsbtrTzjfevjmnEK2YHIJ3QWcbZ7ug4z58/f/bbb7/9GnbofvPNNyfgD9O433rrrVfxh2v8zZgx4/U5c+bMWLRo0bwVK1Ys3bx583qMOOpnyHP0KFpaOuCiUutjLSECYIqwTW9XFKoAIEietPfg3OPPnjQi+cqu1Q5FhNOsX79+tc0PcdOuXbtL8CyJExtvoYD0xQg+HD4IRzt37tyOziVeUedgdoee2WFneYSSJ04WCR8FgHChAOAeCgDxAcFVwiGDJ9K+oD6CL9ChQ4dL7f8RQjIKRu7QQdNTgMT5QycOo8P2f0Lk0UcfvUdG9EAo00QF7TDJZ3bpQHHA/9l7Gvu5PF/f8wFsiAor4gWjzDa9XVGoAoDNf+D/cuf/5Y/i5BV8R8qi/cwnNiz6PuxNYjbUKaec8n3kcz3dPsqmUNBiom5bBIRNtzd6v5EsI2lKASBcKAC4hwJAfNxxxx3Xo46NOroZA0rXX399K/s/hJCMg4KvR8h1BwxTOe33QwTrj/9R2wXUsbZOCdImXwdZvmvDJfe+GY7N48ihEw7ss+xv+ULsFocCjgJsw0iiTWuXFKoAYMmXz6LymOQj3E9TntJom2zY5NrmBVfIM/OV8zSTLw8I8pn9Dq5RrvU9+a1//HOGkDxFASBcKAC4hwJAfGBZng0P2L9//1cuN3MlhKQcrAXHFE3piKFiwDUqDfvdEMHmXatWrVquKz50wuyIVNoQZ0QcXvs50sjuHH6iRP2u5nifJ4HEg3Ug0SDbtHZJoQoAUXkA95D/jueoihNnf0PSVN/zhXU08V7bhg05bV5whYzQ4Plpr58EG39yT8Q6+9nxiCrrWULCRQEgXCgAuIcCQHxg/yjZWFfaXsz+xdIA+11CSIHRvHnzc9etW7cKFQQ6vHhNYtprUgwePPhmhCn0juXJOE4yuiYOm+2wy+dRv50WJwR2izMBm/Ae+1jYdHZJoQoAICpvCPKZOH12NkkURf1e0tjyYO168cUXH7d5wRVTpkx5WYsq1ra0E5WuUvfYsEh+kToZyHv9vawh8UMBIFwoALiHAkB89OjRoy3CgLoH9e6mTZvWcdo/IeQfYOfmZcuWLUZFgY5YVvYAABdffHGVffv27ZVKUCr1qDVRaQSVdpR4IY67viedaUF/Jp9HXcv7tHXCxXEQAQBphqMsK1So8GObzi4pZAEAIG+II2fzTRTIQzrP6v+33/VJvrDgPkZNLrroooo2L7jiqquuaqTjLC0CXFHkq2csxf2eJk31UFxIHFAACBcKAO6hABAf6MtLOJYsWbIAG87a7xBCChwc07R27drPUFFg2pD9PGTeeOON8eJEhtax1J1nvEaJAfmwTpj+P7mOcuqi7vlAp5WkH86Ut+nrmkIVABD/+Zx2myft58cj3+/6AGHQ9kBowq716OzbvOAKHM+pn/8P4wLGprGNZ6mTbL2k32cJCRcFgHChAOAeCgDxcfvtt3dFvYOlsDhK2n5OCCHf0KpVqwuwMSAqDftZyOCMUxxPZSt2kn60c4m82bJly7o2fV1TqAJAIaBH2vUShhEjRvS3+cAlNWrU+B3WZsrzT0ZUIemGAkD4UABwDwWA+MBg3q5du3a0bt26nv2MEEJyqF+/fiVMR7X3Q6Zy5co/X7x48XxU5uiEYRQqhCm2hY6MFspmiGPGjHnCpm0SUADIJuJkoy7QGyXhvo8O0zPPPPNQGpdKkHigABA+FADcQwEgPjp27NgEA3v2PiGEFAwDBw68Ue+0bSt5kl7gkO3du3dPp06dmtp0TQIKANnFzgxC3fD++++/ffbZZ//G5gPX9O3b9zrY8PXXXx/TNpFsQAEgfCgAuIcCACGEkFjZtm3bpm+XmFIACAA4/jJT4913351m0zMpKABkF6kLIA5i5B15buTIkYNtHkgC7AMgnV/OAsgeFADChwKAeygAEEIIiZWrr776MqnUs7LRViGA6dnnn39+WZueSUEBIJvIEgC9FGDjxo1ra9WqVdrmgaRIo3NB4oECQPhQAHAPBQBCCCGxM2/evFm2gifpBZ1mnJFu0zFJKABkExllx6sIgrNmzXrDpn+SDBs2rC+XAGQTCgDhQwHAPRQACCGExA522963b99ebgKYfuCYbdq0aZ1Nw6ShAJBN7IZ7mGlSvXr139r0TxrMQsi1lGQBCgDhQwHAPRQACCGEOOGuu+7qxVG29HP06NEjXbp0udymX9JQAMgm4pDJEoDRo0ePsmnvg3Hjxj1FgTJ7UAAIHwoA7qEAQAghxAnlypX74dtvv/2aTPvVnW09LVg3AsQN+rxz2aAR6YH7TzzxxH027XzgSwAQh0HnRZsv5Tv6VY60K3QkP+Fal3EcKynXEp+7d+/+wqa7L8qUKfM92KTLhrWX5CLprPO+3ANWUPERj2IPBYBwoQDgHgoAhBBCnNGgQYPKGzZsWIOOYJQTZRsBEj8S9xLfemNG7NVw1lln/dqmmw98CQCCFUnwqh0dxCO+Y6e0k9xRfqDLto6rli1b1rXp7pN77733dtiFWTBiowgXuswUMoiDqPob8YS0/vLLL3evXbv2M0lnvPrc/FXsowAQLhQA3EMBgBBCiFNuuOGGNnCkpIMoHTS816OExA0S7xid087Y+vXrV3fo0OFSm16+8C0AaCdH3qNT/fDDD9+db7Sf+ff/EEcR1/poSYD4e//9999Oo4Oyf//+r8ROXT7o/P8zSFOd5/fu3bsHdQiOdIwS0HyUDwoA4UMBwD0UAAghhDjnvvvu62cdUJIcx44dO4pXif9Dhw4duPXWWzvbdPKJLwFAj2wKeA+H5osvvvgctkEEQJzpPS18ODdpJMpRtve2bdu2qVGjRtVsmqeBbt26XQmBQtdPuLbT2QsVGc1H3Ej8IL6Qph07dmyCOBwyZEgf3E9DnFEACB8KAO6hAEAIISQRsNZcOpH5RlRJ/Ein/MiRI4fl9f777x9g08c3vgUAQUYycX/Hjh3bxL7+/ft3l9FiTBmPWjteqOjyrK8hmuBvwIABPXJTOz2ccsop37fOBsoMHF+bNwoREcVERASrV69egeVdEoejRo0aBkFML5/wtQyAAkD4UABwDwUAQgghiTFmzJgn9Ciqr05iIYKOMZzWoUOH3mbTJQ2kRQDQo5gyA0DAchYRUgBntPydokbMX3/99Zd0HKYROLM4ChMOLOuk/CC/z507d2b9+vUr6fiDs60FAvmuD5GMAkD4UABwDwUAQgghiTJhwoTntBNF3CKdcAgvAwcOvNGmR1rwJQAALQJop0XPABAuuOCC0/fs2bPzH/9c4OilEBKP4gyuW7dulY2/tIJ17Dos+QSNQkPSFDM74JThdBcbdyNGjOgv39dxSAEgOSgAuMfaGTIUAAghhCTOSy+99DScBI6gJsPhw4cPYZquTYc04VMA0DvX6zy5ffv2rdZOAFuXLl26kPsA/B2JB8SdxGOajvwrLgsXLpwblQ8KHcyKeO2118bZ+BIwq0i+J//jK/4oAIQPBQD3UAAghBDiBYwaYSTVTsEG0nmUz/CqnYtCBY6q7lhjlFLe68265HNcHzhwYN+gQYNusvGfNnwKAFFOH+7ZJQCaihUr/nT8+PHPQsjCd6NGO+We/V1fztHJovMZQBgEuY/vSDzihInq1av/1sZZCCxfvvzP+YQdCbN+n/uNdII0svWGzHDQe15EfXfnzp3bb7zxxvY2njTYUwT/I7/hM17k2RQAwoUCgHsoABBCCPFG165dr1i5cuUycV6lM4pXO7VYdyptJzXrID60gxklBMh9vMpniNurrrqqkY33NBKaACD07dv3Oji8+B+J/3ybXNp8nO97aQXhi1ojr/f1+PTTT5c0bNjwDzaeQqFUqVLfQRgkPOLY4lUvC7Br3tOKzG6RMNjPBbvkAWmKoxvr1atXwcaRhQKAfygAuMfaGTIUAAghhHjl/PPPL4vppdIB1SOJ1mFCJzNqpDXL6I51FPKZ7sBDPJk0adKYCy+88Awb32klVAEAYBO5N998cwL+T9LB5lv9DOtspRnYC6dfx00+AQq7w9epU6ecjZ/QQJ00f/782VZQ09dIz5DqIpsfJQ0F3BehEaddPPbYY0PLly//Ixs3UVAA8A8FAPdYO0OGAgAhhJBUcMstt1yrR0RlhE2mH6NjpzviwGdHM2kQVjj22nmUDrv+Hqbs3nnnnT1Lly79XRvHaSZkAUDo169ft7179+7J5yTa/BvSDACERcITVe5WrFixtEKFCj+2cRIqWOIh+RFlDmUP6ZdveUBaQR6T9LLCjc6ncm/Xrl07WrZsWdfGR1FQAPAPBQD3WDtDhgIAIYSQ1HDGGWf8x4IFC+bIumrdQOiOKzqyoXXES4LtuNu4kbhAI1q7du3TbLyGQBYEAIC17x9++OF7cBq1s4xXEbO0sxQCUUITQHjgYL766qujbTxkBaSlFW4QbsyKCCkNNd8oOSrPI20PHjy4/4UXXnjMhr84UADwDwUA91g7Q4YCACGEkNRx/fXXt1q8ePF8TEXVa45lJC636SgspPOOTjviA2t1sWb59ttv72rjMSSyIgAIvXr1ugpOAo68jHKIou6lETtiLO8Rro0bN67t3bv31TbsWePRRx+9BzNrZBaAFQTSDuoK1KN69hDyH8KBTUJnzJjx+iWXXFLVhru4UADwDwUA91g7Q4YCACGEkFRy+umn//ttt93WBUdz4Ugx22CAqA3JsoZ2NnQHHiN2aDTvvvvu3pUqVfqZjb/QyJoAAMqWLfsDbBI4b968WTLdXxylfKPqaQXOr4QBotO4ceOeuuCCC063Yc4ql19+eW04JUePHj0i6WfjKI3AXrnW9Qem+iM82IjVhvVEoQDgHwoA7rF2hgwFAEIIIakGnYGrr776Mmyyhk4OGgsZ/baNSFZBp1Y6tlge8dFHH71/0003dYBIYuMrVLIoAAhnnnnmT3r06NEWG8vJ74c0k0WcXcTP7Nmz32zTps1FNoyFAE4IwF4l27Zt2yTxYeMqjSD9xFaM+KMuxekgZcqU+Z4N48lAAcA/FADcY+0MGQoAhBBCgqFWrVql//SnP92/Z8+endJwRHU2IQ6IQIDOb9R3tFNtkWm+xeng5/sNId9z9O8XNRos38GI/8SJE5+/9NJLz7LxkgWyLABosMHa3LlzZ+rn6vxh88rx3sNme89i86D9vuxNoO8JUo6WLl26sGPHjk1seAoROFoDBw68cd++fXsRN7aOiSrL+eLfpoXcE6SeON735J5OR20HZm9MmTLl5UaNGlWz4SkpI0eOHBwlyEbdixsR0iQOJPyPPPLIEGtnnGDZVRLhOx4SbuRFa2OoQADAEZT56qSkkXS2doYMlm9F1VNJI3ELQeK888471dpJCCGE5NC6det6OD4QU1kxKo6GxG7MpTto6EzYjrp8R4+QWXQnO4qo78qzbAMbZYPc0+/RWcfUXYzWYXf1Pn36dMToo42DLFEoAoBQo0aN3z355JMjsLzl0KFDB2weyJdP7D19LcKX/l5Rzn0U+F8pS7Br1apVy6+77rqW1n7yd4YNG9Z3zZo1KxF32BdB0jGf0y7ge3oJk9QdRf0PwOc2H1hHVJZr4PfR0R80aNBNxT3S72TA70s9fPjw4UMYjcYr3iMPufxDPYl4//LLL3fjFe9xEgeWRlk740SWg1h7kv6TMK9du/azU0455fvWzhA59dRT//WNN94Yn4b4lfzlsi3wATZblj6Gzz+J5zlz5sxAm2jtJIQQQiJBp+eaa65pjB2ssdYaDgucKlmvnK9DbR1vAd/P58BHId8vjpNlbdHTwNEIbtiwYc3HH3/8AUbq4PRXq1btVza8WaXQBAANlriMHz/+WWx8ienl2jG0zp4G9+VoyKjv2HuSV3V4dR5HHkSYP/nkk0UPP/zw3S5Gi7MKZke8/vrrLyHuduzYsU3iWKcB4hrppe/ZNBJwXwQdEXWKEhXwGZzw9evXr16yZMmCxx57bGjTpk1rWjtdgCUumJmE/ILXiy++uAr+6tWrV0GuXf3hGdjAsH79+pUuu+yy6g0bNvwDwg2brJ1xgunKCK+1J+k/hBthztrMMMQv0tWGN+m/Bg0aVEY6I46tjSGDY05RRqpWrfpLn39VqlT5xdlnn/0b2GNtJIQQQooNlgmgMz548OCbsVwAO1yjQwzHJmrddVEO1omA34jq7EcJAxgdw4gN1oTD8XvwwQfv6t69e2t0NrI+0p+PQhYABKR9s2bNat1xxx3XP/fcc4+8++6707D7PBxz7VCKM2jDIKKVOIpAjw7bfI7P4KwuWrRo3ksvvfT0nXfe2RNOlLWLFB90atu2bdsASwRQthG3mzZtWoeNE3XcI520SCmOvk1Xwd7H/2IEbeXKlcuwph8nFWDT1Kw5KoQQQgghhJwQmPp61lln/RojJa1atboA05nROcf06wkTJjyHWQMYecUmNOiow+nDekp02G2nOx/ouGOaIKaebt++feu6detWLV++/M8YzUfnHM4VNsrC0XBwDuBk1axZs1SWNvErKRQA/pkKFSr8GIJWixYtzsOMEIzqYnYIBK3PP/98C/aFsAKWOP7yHuA7mBWD0empU6dORN7H6QSYOVOnTp1yWThFIq2cccYZ/1G3bt3y7dq1uwRpiM3pXnnllRdQ72BfBcz4wMg9REHJf6hPkLa4j89RN2HfiEmTJo0ZNWrUMAhE7du3b4iRSYyUZmXqNyGEEEIIIV4p1NF4H1AAODmwkzuEgurVq/+2du3ap51//vllzz333DIQmOAcMg8TQgghhBBCCEkVFAAIIYQQQgghhJACgAIAIYQQQgghhBBSAFAAIIQQQgghhBBCCgAKAIQQQgghhBBCSAFAAYAQQgghhBBCCCkAKAAQQgghhBBCCCEFAAUAQgghhBBCCCGkAKAAQAghhBBCCCGEFAAUAAghhBBCCCGEkAKAAgAhhBBCCCGEEFIAUAAghBBCCCGEEEIKAAoAhBBCCCGEEEJIAUABgBBCCCGEEEIIKQAoABBCCCGEEEIIIQUABQBCCCGEEEIIIaQAoABACCGEEEIIIYQUABQACCGEEEIIIYSQAoACACGEEEIIIYQQUgBQACCEEEIIIYQQQgoACgCEEEIIIYQQQkgBQAGAEEIIIYQQQggpACgAEEIIIYQQQgghBQAFAEIIIYQQQgghpACgAEAIIYQQQgghhBQAFAAIIYQQQgghhJACgAIAIYQQQgghhBBSAFAAIIQQQgghhBBCCgAKAIQQQgghhBBCSAFAAYAQQgghhBBCCCkAKAAQQgghhBBCCCEFAAUAQgghhBBCCCGkAKAAQAghhBBCCCGEFAAUAAghhBBCCCGEkAKAAgAhhBBCCCGEEFIAUAAghBBCCCGEEEIKAAoAhBBCCCGEEEJIAUABgBBCCCGEEEIIKQAoABBCCCGEEEIIIQUABQBCCCGEEEIIIaQAoABACCGEEEIIIYQUABQACCGEEEIIIYSQAoACACGEEEIIIYQQUgBQACCEEEIIIYQQQgoACgCEEEIIIYQQQkgBQAGAEEIIIYQQQggpACgAEEIIIYQQQgghBQAFAEIIIYQQQgghpACgAEAIIYQQQgghhBQAFAAIIYQQQgghhJACgAIAIYQQQgghhBBSAFAAIIQQQgghhBBCCgAKAIQQQgghhBBCSAFAAYAQQgghhBBCCCkAKAAQQgghhBBCCCEFAAUAQgghhBBCCCGkAKAAQAghhBBCCCGEFAAUAAghhBBCCCGEkAKAAgAhhBBCCCGEEFIAUAAghBBCCCGEEEIKAAoAhBBCCCGEEEJIAUABgBBCCCGEEEIIKQAoABBCCCGEEEIIIQUABQBCCCGEEEIIIaQAoABACCGEEEIIIYQUABQACCGEEEIIIYSQAoACACGEEEIIIYQQUgBUq1btVxAA/va3v/1NO+VJgef993//93/Lc//6179+vXv37i+snYQQQgghhBBCCCkhjRs3rnHFFVfUufzyy2tfeeWVF7Zo0eK8li1b1nX916pVqwvwh2fjtU2bNhfh+tJLLz3L2kgIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQpLg/w8U9cepJYrEzwAAAABJRU5ErkJggg==", _t = 96 / 72, Wn = "Could not read this IDML file.", Nd = /* @__PURE__ */ new Set(["TextFrame", "Rectangle", "Oval", "Polygon", "Group"]), av = /* @__PURE__ */ new Set(["Image", "EPS", "PDF", "WMF", "PICT", "SVG"]), sa = { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 };
async function oD(e) {
  const t = await ED(e), n = qo(t, "designmap.xml");
  if (!n)
    throw new Error(Wn);
  const r = Gs(n, "Spread"), o = Gs(n, "MasterSpread"), i = Gs(n, "Story"), s = Gs(n, "Graphic");
  if (r.length === 0)
    throw new Error(Wn);
  const a = /* @__PURE__ */ new Map();
  pD(a);
  for (const v of s) {
    const B = qo(t, v);
    B && lm(B, a);
  }
  lm(n, a);
  const l = /* @__PURE__ */ new Map();
  for (const v of i) {
    const B = qo(t, v);
    if (B)
      for (const d of Mr(B, "Story")) {
        const p = d.getAttribute("Self");
        p && l.set(p, d);
      }
  }
  const u = /* @__PURE__ */ new Map();
  for (const v of o) {
    const B = qo(t, v);
    if (!B)
      continue;
    const d = Hu(B, "MasterSpread"), p = d == null ? void 0 : d.getAttribute("Self");
    p && u.set(p, B);
  }
  const c = iD(n), f = [];
  for (const v of r) {
    const B = qo(t, v);
    if (!B)
      continue;
    const d = Hu(B, "Spread");
    if (!d)
      continue;
    const p = tf(d, "Page");
    for (const h of p) {
      const T = am(h), O = [], w = h.getAttribute("AppliedMaster");
      if (w && w !== "n") {
        const k = u.get(w), F = k ? Hu(k, "MasterSpread") : void 0, N = F ? tf(F, "Page")[0] : void 0;
        if (F && N) {
          const W = am(N), be = gD(h);
          sm(N, sa, W, l, a, be, O, c);
        }
      }
      sm(h, sa, T, l, a, /* @__PURE__ */ new Set(), O, c);
      for (const k of Bo(d))
        k.localName === "Page" || !Nd.has(k.localName || "") || xd(k, sa, T, l, a, /* @__PURE__ */ new Set(), O, !0, c);
      const C = Math.max(1, Math.round(T.width * _t)), D = Math.max(1, Math.round(T.height * _t)), H = f.length + 1;
      f.push({
        id: h.getAttribute("Self") || `page-${H}`,
        name: sD(h, H),
        width: C,
        height: D,
        layers: O
      });
    }
  }
  if (f.length === 0)
    throw new Error(Wn);
  const A = f[0], E = pS([...c.values()]), g = {
    version: 1,
    canvas: {
      width: A.width,
      height: A.height,
      background: "#ffffff",
      presetId: Lo(A.width, A.height)
    },
    layers: A.layers,
    pages: f,
    activePageId: A.id
  };
  return Object.keys(E).length > 0 && (g.settings = { brands: E }), { document: rv(g), pageCount: f.length };
}
function iD(e) {
  var n;
  const t = /* @__PURE__ */ new Map();
  for (const r of Mr(e, "Layer")) {
    const o = r.getAttribute("Self"), i = (n = r.getAttribute("Name")) == null ? void 0 : n.trim();
    !o || !i || t.set(o, {
      id: o,
      name: i,
      visible: r.getAttribute("Visible") !== "false",
      ...lS(i)
    });
  }
  return t;
}
function sD(e, t) {
  var r;
  const n = (r = e.getAttribute("Name")) == null ? void 0 : r.trim();
  return n && !/^\d+$/.test(n) ? n : `Page ${t}`;
}
function sm(e, t, n, r, o, i, s, a) {
  for (const l of Bo(e))
    Nd.has(l.localName || "") && xd(l, t, n, r, o, i, s, !1, a);
}
function xd(e, t, n, r, o, i, s, a, l, u = "") {
  const c = e.getAttribute("Self");
  if (c && i.has(c) || e.getAttribute("Visible") === "false")
    return;
  const f = e.getAttribute("ItemLayer") || u, A = vD(t, lv(e.getAttribute("ItemTransform")));
  if (e.localName === "Group") {
    for (const v of Bo(e))
      Nd.has(v.localName || "") && xd(
        v,
        A,
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
  const E = aD(e, A, n, r, o);
  if (!E || a && !lD(E, n))
    return;
  const g = f ? l.get(f) : void 0;
  g && uS(E, g), s.push(E);
}
function aD(e, t, n, r, o) {
  const i = cD(e);
  if (i.length < 2)
    return null;
  const s = uD(i, t, n);
  if (s.width < 1 || s.height < 1)
    return null;
  const a = fD(e);
  if (a) {
    const c = Mr(a, "Link")[0], f = (c == null ? void 0 : c.getAttribute("LinkResourceURI")) || "", A = Qu("image", s);
    A.name = yD(f) || "Image", A.src = /^https?:\/\//i.test(f) ? f : "", A.objectFit = "contain";
    const E = _c(e.getAttribute("FillColor"), e.getAttribute("FillTint"), o);
    return E && (A.fill = E), A;
  }
  if (e.localName === "TextFrame") {
    const c = r.get(e.getAttribute("ParentStory") || ""), f = c ? dD(c, o) : { text: "", fontSize: void 0, color: void 0 }, A = Qu("text", s);
    return A.name = AD(f.text), A.text = f.text, A.fontSize = f.fontSize ? Math.max(1, Math.round(f.fontSize * _t)) : 16, A.color = f.color || "#000000", A;
  }
  const l = Qu("rect", s);
  l.name = e.localName === "Oval" ? "Oval" : e.localName === "Polygon" ? "Polygon" : "Rectangle";
  const u = _c(e.getAttribute("FillColor"), e.getAttribute("FillTint"), o);
  return l.fill = u || "transparent", l;
}
function Qu(e, t) {
  return {
    id: Qt(),
    type: e,
    name: e,
    x: Math.round(t.x * _t),
    y: Math.round(t.y * _t),
    width: Math.max(1, Math.round(t.width * _t)),
    height: Math.max(1, Math.round(t.height * _t)),
    rotation: Math.abs(t.rotation) > 0.5 ? Math.round(t.rotation * 10) / 10 : void 0,
    visible: !0,
    locked: !1,
    allowTransform: !1,
    editableContent: e === "text" || e === "image"
  };
}
function lD(e, t) {
  const n = e.x / _t, r = e.y / _t, o = e.width / _t, i = e.height / _t;
  return n + o > 0 && r + i > 0 && n < t.width && r < t.height;
}
function am(e) {
  const [t, n, r, o] = Md(e.getAttribute("GeometricBounds"), [0, 0, 792, 612]), i = lv(e.getAttribute("ItemTransform")), s = ef(i, n, t);
  return {
    width: Math.abs(o - n),
    height: Math.abs(r - t),
    originX: s.x,
    originY: s.y
  };
}
function uD(e, t, n) {
  const r = e.map((g) => g.x), o = e.map((g) => g.y), i = Math.max(...r) - Math.min(...r), s = Math.max(...o) - Math.min(...o), a = Math.hypot(t.a, t.b) || 1, l = Math.hypot(t.c, t.d) || 1, u = Math.atan2(t.c, t.a) * 180 / Math.PI;
  if (!(Math.abs(um(u)) > 0.5)) {
    const g = e.map((h) => ef(t, h.x, h.y)), v = g.map((h) => h.x), B = g.map((h) => h.y), d = Math.min(...v), p = Math.min(...B);
    return {
      x: d - n.originX,
      y: p - n.originY,
      width: Math.max(...v) - d,
      height: Math.max(...B) - p,
      rotation: 0
    };
  }
  const f = ef(
    t,
    (Math.min(...r) + Math.max(...r)) / 2,
    (Math.min(...o) + Math.max(...o)) / 2
  ), A = i * a, E = s * l;
  return {
    x: f.x - A / 2 - n.originX,
    y: f.y - E / 2 - n.originY,
    width: A,
    height: E,
    rotation: um(u)
  };
}
function cD(e) {
  const t = [];
  for (const n of Mr(e, "PathPointType")) {
    if (n.parentElement && av.has(n.parentElement.localName || ""))
      continue;
    const [r, o] = Md(n.getAttribute("Anchor"), []);
    r == null || o == null || t.push({ x: r, y: o });
  }
  return t;
}
function fD(e) {
  for (const t of e.getElementsByTagName("*"))
    if (av.has(t.localName || ""))
      return t;
}
function dD(e, t) {
  const n = tf(e, "ParagraphStyleRange"), r = n.length > 0 ? n : [e];
  let o = "", i, s;
  return r.forEach((a, l) => {
    l > 0 && (o += `
`);
    for (const u of Bo(a)) {
      if (u.localName === "Br") {
        o += `
`;
        continue;
      }
      if (u.localName === "CharacterStyleRange") {
        if (i == null) {
          const c = Number(u.getAttribute("PointSize"));
          Number.isFinite(c) && c > 0 && (i = c);
        }
        s || (s = _c(u.getAttribute("FillColor"), u.getAttribute("FillTint"), t) || void 0);
        for (const c of Bo(u))
          c.localName === "Br" && (o += `
`), c.localName === "Content" && (o += c.textContent || "");
      }
    }
  }), { text: o.replace(/\u2028/g, `
`), fontSize: i, color: s };
}
function AD(e) {
  const t = e.split(`
`).map((n) => n.trim()).find(Boolean);
  return t ? t.length > 40 ? `${t.slice(0, 40)}…` : t : "Text";
}
function _c(e, t, n) {
  if (!e || e === "Swatch/None" || e === "Color/None")
    return null;
  const r = n.get(e);
  if (!r)
    return null;
  if (t == null || t.trim() === "" || t.trim() === "-1")
    return r;
  const o = Number(t);
  return !Number.isFinite(o) || o >= 100 ? r : hD(r, Math.max(0, o) / 100);
}
function lm(e, t) {
  for (const n of Mr(e, "Color")) {
    const r = n.getAttribute("Self"), o = mD(n.getAttribute("Space"), n.getAttribute("ColorValue"));
    r && o && t.set(r, o);
  }
}
function pD(e) {
  e.set("Color/Black", "#000000"), e.set("Color/Paper", "#ffffff"), e.set("Color/Registration", "#000000");
}
function mD(e, t) {
  const n = (t || "").trim().split(/\s+/).map(Number).filter((o) => Number.isFinite(o)), r = (e || "").toUpperCase();
  if (r === "RGB" && n.length >= 3)
    return $c(n[0], n[1], n[2]);
  if ((r === "CMYK" || n.length >= 4) && n.length >= 4) {
    const o = n[0] / 100, i = n[1] / 100, s = n[2] / 100, a = n[3] / 100;
    return $c(255 * (1 - o) * (1 - a), 255 * (1 - i) * (1 - a), 255 * (1 - s) * (1 - a));
  }
  return null;
}
function $c(e, t, n) {
  const r = (o) => Math.max(0, Math.min(255, Math.round(o))).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function hD(e, t) {
  const n = Number.parseInt(e.slice(1, 3), 16), r = Number.parseInt(e.slice(3, 5), 16), o = Number.parseInt(e.slice(5, 7), 16);
  return $c(n * t + 255 * (1 - t), r * t + 255 * (1 - t), o * t + 255 * (1 - t));
}
function gD(e) {
  const t = (e.getAttribute("OverrideList") || "").trim().split(/\s+/).filter(Boolean), n = /* @__PURE__ */ new Set();
  for (let r = 0; r < t.length; r += 2)
    n.add(t[r]);
  return n;
}
function Gs(e, t) {
  return Mr(e, t).map((n) => n.getAttribute("src")).filter((n) => !!n);
}
function yD(e) {
  const t = e.split("?")[0];
  try {
    const r = decodeURIComponent(t).split(/[/\\]/).filter(Boolean);
    return r[r.length - 1] || "";
  } catch {
    const n = t.split(/[/\\]/).filter(Boolean);
    return n[n.length - 1] || "";
  }
}
function lv(e) {
  const t = Md(e, []);
  return t.length < 6 ? sa : { a: t[0], b: t[1], c: t[2], d: t[3], tx: t[4], ty: t[5] };
}
function vD(e, t) {
  return {
    a: e.a * t.a + e.b * t.c,
    b: e.a * t.b + e.b * t.d,
    c: e.c * t.a + e.d * t.c,
    d: e.c * t.b + e.d * t.d,
    tx: e.a * t.tx + e.b * t.ty + e.tx,
    ty: e.c * t.tx + e.d * t.ty + e.ty
  };
}
function ef(e, t, n) {
  return {
    x: e.a * t + e.b * n + e.tx,
    y: e.c * t + e.d * n + e.ty
  };
}
function um(e) {
  let t = e % 360;
  return t > 180 && (t -= 360), t < -180 && (t += 360), t;
}
function Md(e, t) {
  if (!e || !e.trim())
    return t;
  const n = e.trim().split(/\s+/).map(Number);
  return n.some((r) => !Number.isFinite(r)) ? t : n;
}
function Hu(e, t) {
  const n = Mr(e, t);
  return n.find((r) => r.hasAttribute("Self")) || n[0];
}
function Mr(e, t) {
  const n = [], r = e.getElementsByTagName("*");
  for (let o = 0; o < r.length; o += 1) {
    const i = r[o];
    i.localName === t && n.push(i);
  }
  return n;
}
function Bo(e) {
  return Array.from(e.children);
}
function tf(e, t) {
  return Bo(e).filter((n) => n.localName === t);
}
function qo(e, t) {
  const n = wD(e, t);
  if (!n)
    return null;
  const r = new TextDecoder("utf-8").decode(n).replace(/^\uFEFF/, ""), o = new DOMParser().parseFromString(r, "application/xml");
  return o.getElementsByTagName("parsererror").length > 0 ? null : o;
}
function wD(e, t) {
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
async function ED(e) {
  const t = new DataView(e), n = new Uint8Array(e);
  if (n.length < 22 || t.getUint32(0, !0) !== 67324752)
    throw new Error(Wn);
  let r = -1;
  const o = Math.max(0, n.length - 22 - 65535);
  for (let u = n.length - 22; u >= o; u -= 1)
    if (t.getUint32(u, !0) === 101010256) {
      r = u;
      break;
    }
  if (r < 0)
    throw new Error(Wn);
  const i = t.getUint16(r + 10, !0), s = t.getUint32(r + 16, !0), a = /* @__PURE__ */ new Map();
  let l = s;
  for (let u = 0; u < i; u += 1) {
    if (l + 46 > n.length || t.getUint32(l, !0) !== 33639248)
      throw new Error(Wn);
    const c = t.getUint16(l + 10, !0), f = t.getUint32(l + 20, !0), A = t.getUint16(l + 28, !0), E = t.getUint16(l + 30, !0), g = t.getUint16(l + 32, !0), v = t.getUint32(l + 42, !0), B = new TextDecoder("utf-8").decode(n.subarray(l + 46, l + 46 + A)).replace(/\\/g, "/");
    if (l += 46 + A + E + g, !B || B.endsWith("/"))
      continue;
    if (v + 30 > n.length)
      throw new Error(Wn);
    const d = t.getUint16(v + 26, !0), p = t.getUint16(v + 28, !0), h = v + 30 + d + p, T = n.subarray(h, h + f);
    c === 0 ? a.set(B, T) : c === 8 && a.set(B, await TD(T));
  }
  return a;
}
async function TD(e) {
  if (typeof DecompressionStream != "function")
    throw new Error(Wn);
  const t = new Blob([e]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(t).arrayBuffer());
}
const CD = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js", PD = "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
function uv(e, t) {
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
let Fu = null, Uu = null;
function kD() {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (Fu || (Fu = uv(CD, "chd-html2canvas").then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), Fu);
}
function SD() {
  var e;
  return (e = window.jspdf) != null && e.jsPDF ? Promise.resolve(window.jspdf.jsPDF) : (Uu || (Uu = uv(PD, "chd-jspdf").then(() => {
    var n;
    const t = (n = window.jspdf) == null ? void 0 : n.jsPDF;
    if (!t)
      throw new Error("jsPDF did not register on window");
    return t;
  })), Uu);
}
const cm = 96;
function DD(e, t) {
  const n = URL.createObjectURL(e), r = window.document.createElement("a");
  r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
function BD(e) {
  const t = e.closest(".chd-root"), n = t == null ? void 0 : t.querySelector("[data-chd-artboard]");
  if (!n)
    throw new Error("Could not find the designer page to export.");
  return n;
}
async function cv(e) {
  const t = await kD();
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
async function OD(e) {
  return cv(BD(e));
}
function bD(e, t) {
  return {
    widthMm: e * 25.4 / cm,
    heightMm: t * 25.4 / cm
  };
}
async function fv() {
  const e = await SD();
  let t = null;
  return {
    addPageImage(n, r, o) {
      const { widthMm: i, heightMm: s } = bD(r, o), a = i >= s ? "landscape" : "portrait";
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
async function ND(e, t) {
  const n = await new Promise((r, o) => {
    e.toBlob((i) => {
      i ? r(i) : o(new Error("Could not create PNG."));
    }, "image/png");
  });
  DD(n, t);
}
async function xD(e, t, n, r) {
  const o = await fv();
  o.addPageImage(e, n, r), o.save(t);
}
async function MD(e, t, n) {
  const r = await OD(e);
  if (t === "png") {
    await ND(r, "design.png");
    return;
  }
  await xD(r, "design.pdf", n.width, n.height);
}
function fm(e) {
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
function ID() {
  const e = Ml(), t = e.fields ?? [], n = S.useRef(null), r = S.useRef(null), o = S.useRef(null), i = S.useRef([]), s = S.useRef([]), a = S.useRef(0), [l, u] = S.useState(!1), [c, f] = S.useState([]), [A, E] = S.useState(0), [g, v] = S.useState(null), [B, d] = S.useState(null), [p, h] = S.useState(null), [T, O] = S.useState(null);
  if (S.useEffect(() => {
    if (!g || !B)
      return;
    const D = a.current + 1;
    a.current = D;
    let H = !0;
    const k = () => {
      var be;
      if (!H || a.current !== D)
        return;
      const F = g.row, N = g.page, W = i.current.length;
      if (N + 1 < s.current.length) {
        d(s.current[N + 1]), v({ row: F, page: N + 1 });
        return;
      }
      if (F + 1 < W) {
        const ue = F + 1;
        s.current = fm(qc(e, i.current[ue] ?? {})), h(`Capturing row ${ue + 1} of ${W}`), d(s.current[0] ?? null), v({ row: ue, page: 0 });
        return;
      }
      try {
        (be = o.current) == null || be.save("batch.pdf"), h(`Downloaded ${W} output${W === 1 ? "" : "s"}.`);
      } catch (ue) {
        O(ue instanceof Error ? ue.message : "Could not download the batch.");
      }
      o.current = null, d(null), v(null);
    };
    return (async () => {
      var F;
      if (await new Promise((N) => requestAnimationFrame(() => requestAnimationFrame(N))), !(!H || a.current !== D || !r.current))
        try {
          const N = await cv(r.current);
          if (!H || a.current !== D)
            return;
          (F = o.current) == null || F.addPageImage(N, B.width, B.height), k();
        } catch (N) {
          if (!H || a.current !== D)
            return;
          O(N instanceof Error ? N.message : "Could not capture a batch page."), o.current = null, d(null), v(null);
        }
    })(), () => {
      H = !1;
    };
  }, [g, B, e]), t.length === 0)
    return null;
  const w = async (D) => {
    if (!D)
      return;
    const H = FS(await D.text(), t);
    i.current = H.rows, f(H.unmatched), E(H.rows.length), O(null);
    const k = `${H.rows.length} ${H.rows.length === 1 ? "row" : "rows"}`;
    h(H.rows.length === 0 ? "The CSV has no data rows." : `${k} ready.`);
  }, C = async () => {
    if (!(g || i.current.length === 0)) {
      O(null);
      try {
        if (o.current = await fv(), s.current = fm(qc(e, i.current[0] ?? {})), !s.current[0]) {
          O("This template has no pages to capture."), o.current = null;
          return;
        }
        h(`Capturing row 1 of ${i.current.length}`), d(s.current[0]), v({ row: 0, page: 0 });
      } catch (D) {
        O(D instanceof Error ? D.message : "Could not start the batch."), o.current = null;
      }
    }
  };
  return /* @__PURE__ */ x("div", { className: "chd-batch", children: [
    /* @__PURE__ */ y(
      "button",
      {
        type: "button",
        className: "chd-btn",
        "aria-expanded": l,
        disabled: !!g,
        onClick: () => u((D) => !D),
        children: g ? "Batching…" : "Batch"
      }
    ),
    l ? /* @__PURE__ */ x("div", { className: "chd-batch-menu", children: [
      /* @__PURE__ */ y("p", { className: "chd-field-hint", children: "Upload a CSV. The header row matches field labels or magic strings. Each following row is one output. An empty cell keeps the sample copy." }),
      /* @__PURE__ */ y("button", { type: "button", className: "chd-btn", onClick: () => {
        var D;
        return (D = n.current) == null ? void 0 : D.click();
      }, children: "Choose CSV" }),
      /* @__PURE__ */ y(
        "input",
        {
          ref: n,
          type: "file",
          accept: ".csv,text/csv",
          className: "chd-file-input",
          onChange: (D) => {
            var H;
            w(((H = D.target.files) == null ? void 0 : H[0]) ?? null), D.target.value = "";
          }
        }
      ),
      A > 0 ? /* @__PURE__ */ y("p", { className: "chd-field-hint", children: A === 1 ? "1 row" : `${A} rows` }) : null,
      c.length > 0 ? /* @__PURE__ */ x("p", { className: "chd-field-hint", children: [
        "Ignored columns: ",
        c.join(", ")
      ] }) : null,
      p ? /* @__PURE__ */ y("p", { className: "chd-field-hint", children: p }) : null,
      T ? /* @__PURE__ */ y("p", { className: "chd-generate-error", children: T }) : null,
      /* @__PURE__ */ y(
        "button",
        {
          type: "button",
          className: "chd-btn chd-btn--accent",
          disabled: !!g || A === 0,
          onClick: () => void C(),
          children: "Download PDF"
        }
      )
    ] }) : null,
    /* @__PURE__ */ y("div", { className: "chd-batch-stage", "aria-hidden": "true", children: B ? /* @__PURE__ */ y(
      "div",
      {
        ref: r,
        className: "chd-artboard",
        style: {
          width: B.width,
          height: B.height,
          background: e.canvas.background || "#ffffff"
        },
        children: B.layers.filter((D) => Cr(D, e.settings)).map((D) => /* @__PURE__ */ y(
          Dd,
          {
            layer: D,
            selected: !1,
            preview: !0,
            onSelect: () => {
            },
            onMoveStart: () => {
            }
          },
          D.id
        ))
      }
    ) : null })
  ] });
}
const LD = [
  { format: "pdf", label: "PDF", hint: "Print-ready page" },
  { format: "png", label: "PNG", hint: "Image of the page" }
];
function zD() {
  const e = Il(), t = S.useRef(null), [n, r] = S.useState(!1), [o, i] = S.useState(!1), [s, a] = S.useState(null);
  S.useEffect(() => {
    if (!n)
      return;
    const u = (c) => {
      t.current && !t.current.contains(c.target) && r(!1);
    };
    return window.addEventListener("pointerdown", u), () => window.removeEventListener("pointerdown", u);
  }, [n]);
  const l = async (u) => {
    const c = t.current;
    if (!(!c || o)) {
      r(!1), i(!0), a(null);
      try {
        await MD(c, u, {
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
  return /* @__PURE__ */ x("div", { className: "chd-generate", ref: t, children: [
    /* @__PURE__ */ y(
      "button",
      {
        type: "button",
        className: "chd-btn chd-btn--accent",
        disabled: o,
        "aria-expanded": n,
        "aria-haspopup": "menu",
        onClick: () => r((u) => !u),
        children: o ? "Generating…" : "Generate"
      }
    ),
    n ? /* @__PURE__ */ y("div", { className: "chd-generate-menu", role: "menu", children: LD.map((u) => /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        role: "menuitem",
        className: "chd-generate-option",
        disabled: o,
        onClick: () => void l(u.format),
        children: [
          /* @__PURE__ */ y("strong", { children: u.label }),
          /* @__PURE__ */ y("span", { children: u.hint })
        ]
      },
      u.format
    )) }) : null,
    s ? /* @__PURE__ */ y("span", { className: "chd-generate-error", children: s }) : null
  ] });
}
const RD = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function QD() {
  const e = os(), t = Ll(), n = sv(), r = Ml(), { mode: o, canUndo: i, canRedo: s, exportDocument: a, importDocumentJson: l } = KS(), u = S.useRef(null), c = S.useRef(null), f = o === "admin", A = Lo(
    r.canvas.width,
    r.canvas.height,
    r.canvas.presetId
  ), E = r.pages ?? [], g = AS(r), v = E.length > 1 || g.length > 0, B = () => {
    const w = a(), C = new Blob([JSON.stringify(w, null, 2)], { type: "application/json" }), D = URL.createObjectURL(C), H = window.document.createElement("a");
    H.href = D, H.download = "chdesigner-document.json", H.click(), URL.revokeObjectURL(D);
  }, d = async (w) => {
    if (!w)
      return;
    const C = await w.text();
    l(C) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  }, p = async (w) => {
    if (!w)
      return;
    const C = w.name.toLowerCase();
    if (C.endsWith(".indd")) {
      window.alert(
        "InDesign’s native .indd file can’t be read here. In InDesign, choose File → Save As and pick InDesign CS4 or later (IDML), then import that file."
      );
      return;
    }
    if (!C.endsWith(".idml")) {
      window.alert("Could not read this IDML file.");
      return;
    }
    try {
      const D = await oD(await w.arrayBuffer());
      l(JSON.stringify(D.document)) || window.alert("Could not read this IDML file.");
    } catch (D) {
      window.alert(D instanceof Error ? D.message : "Could not read this IDML file.");
    }
  }, h = (w) => {
    const C = Uc(w);
    C && e({
      type: "SET_CANVAS_SIZE",
      width: C.width,
      height: C.height,
      presetId: C.id
    });
  }, T = () => {
    const w = r.layers.filter((C) => t.includes(C.id));
    for (const C of w)
      e({
        type: "UPDATE_LAYER",
        id: C.id,
        patch: nv(C, r.canvas.width, r.canvas.height)
      });
  }, O = () => {
    const w = r.layers.filter((C) => t.includes(C.id));
    for (const C of w)
      e({
        type: "UPDATE_LAYER",
        id: C.id,
        patch: tv(C, r.canvas.width, r.canvas.height)
      });
  };
  return /* @__PURE__ */ x("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ x("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ y("span", { className: "chd-toolbar-logo-wrap", children: /* @__PURE__ */ y("img", { className: "chd-toolbar-logo", src: rD, alt: "EPAM" }) }),
      /* @__PURE__ */ y("span", { className: "chd-toolbar-mode", children: f ? "Admin" : "Edit" })
    ] }),
    v ? /* @__PURE__ */ x("div", { className: "chd-toolbar-group", children: [
      E.length > 1 ? /* @__PURE__ */ x("label", { className: "chd-toolbar-field", children: [
        /* @__PURE__ */ y("span", { children: "Page" }),
        /* @__PURE__ */ y(
          "select",
          {
            className: "chd-toolbar-select",
            value: r.activePageId || E[0].id,
            onChange: (w) => e({ type: "SET_TEMPLATE_PAGE", pageId: w.target.value }),
            children: E.map((w) => /* @__PURE__ */ y("option", { value: w.id, children: w.name }, w.id))
          }
        )
      ] }) : null,
      g.map((w) => {
        var C, D;
        return /* @__PURE__ */ x("label", { className: "chd-toolbar-field", children: [
          /* @__PURE__ */ y("span", { children: w.label }),
          /* @__PURE__ */ y(
            "select",
            {
              className: "chd-toolbar-select",
              value: ((D = (C = r.settings) == null ? void 0 : C.brands) == null ? void 0 : D[w.slot]) || w.options[0],
              onChange: (H) => e({
                type: "SET_BRAND_OPTION",
                slot: w.slot,
                option: H.target.value
              }),
              children: w.options.map((H) => /* @__PURE__ */ y("option", { value: H, children: H }, H))
            }
          )
        ] }, w.slot);
      })
    ] }) : null,
    f ? /* @__PURE__ */ y("div", { className: "chd-toolbar-group", children: RD.map((w) => /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        className: "chd-btn",
        onClick: () => e({ type: "ADD_LAYER", layerType: w.type }),
        children: [
          "+ ",
          w.label
        ]
      },
      w.type
    )) }) : null,
    f ? /* @__PURE__ */ x("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ x("label", { className: "chd-toolbar-field", children: [
        /* @__PURE__ */ y("span", { children: E.length > 1 ? "Size" : "Page" }),
        /* @__PURE__ */ x(
          "select",
          {
            className: "chd-toolbar-select",
            value: A,
            onChange: (w) => h(w.target.value),
            children: [
              A === "custom" ? /* @__PURE__ */ y("option", { value: "custom", children: "Custom" }) : null,
              OC.map((w) => /* @__PURE__ */ y("optgroup", { label: w.label, children: ts.filter((C) => C.group === w.id).map((C) => /* @__PURE__ */ y("option", { value: C.id, children: C.label }, C.id)) }, w.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ x("span", { className: "chd-toolbar-size", children: [
        Math.round(r.canvas.width),
        " × ",
        Math.round(r.canvas.height)
      ] }),
      /* @__PURE__ */ y("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ADD_TEMPLATE_PAGE" }), children: "Add page" }),
      /* @__PURE__ */ y(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: E.length < 2,
          onClick: () => e({ type: "REMOVE_TEMPLATE_PAGE" }),
          children: "Remove page"
        }
      ),
      /* @__PURE__ */ y(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: T,
          children: "Pin to page"
        }
      ),
      /* @__PURE__ */ y(
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
    f ? /* @__PURE__ */ x("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ y(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "DELETE_LAYERS" }),
          children: "Delete"
        }
      ),
      /* @__PURE__ */ y(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "BRING_FORWARD" }),
          children: "Forward"
        }
      ),
      /* @__PURE__ */ y(
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
    /* @__PURE__ */ x("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ y(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !i,
          onClick: () => e({ type: "UNDO" }),
          children: "Undo"
        }
      ),
      /* @__PURE__ */ y(
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
    /* @__PURE__ */ x("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ y(zD, {}),
      /* @__PURE__ */ y(ID, {}),
      /* @__PURE__ */ x(
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
      f ? /* @__PURE__ */ x(gr, { children: [
        /* @__PURE__ */ y("button", { type: "button", className: "chd-btn", onClick: B, children: "Export JSON" }),
        /* @__PURE__ */ y("button", { type: "button", className: "chd-btn", onClick: () => {
          var w;
          return (w = u.current) == null ? void 0 : w.click();
        }, children: "Import" }),
        /* @__PURE__ */ y("button", { type: "button", className: "chd-btn", onClick: () => {
          var w;
          return (w = c.current) == null ? void 0 : w.click();
        }, children: "Import InDesign" }),
        /* @__PURE__ */ y("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ADD_MAGIC_STRINGS" }), children: "Add magic strings" }),
        /* @__PURE__ */ y(
          "input",
          {
            ref: u,
            type: "file",
            accept: "application/json,.json",
            className: "chd-file-input",
            onChange: (w) => {
              var C;
              d(((C = w.target.files) == null ? void 0 : C[0]) ?? null), w.target.value = "";
            }
          }
        ),
        /* @__PURE__ */ y(
          "input",
          {
            ref: c,
            type: "file",
            accept: ".idml,.indd",
            className: "chd-file-input",
            onChange: (w) => {
              var C;
              p(((C = w.target.files) == null ? void 0 : C[0]) ?? null), w.target.value = "";
            }
          }
        )
      ] }) : null
    ] })
  ] });
}
const dm = 36, HD = 180, FD = 480;
function UD(e) {
  return Math.min(FD, Math.max(HD, Math.round(e)));
}
function Am(e, t, n, r) {
  e.preventDefault();
  const o = e.currentTarget, i = e.clientX;
  o.classList.add("chd-panel-resizer--active");
  try {
    o.setPointerCapture(e.pointerId);
  } catch {
  }
  const s = (l) => {
    r(UD(t + n * (l.clientX - i)));
  }, a = () => {
    o.classList.remove("chd-panel-resizer--active"), o.removeEventListener("pointermove", s), o.removeEventListener("pointerup", a), o.removeEventListener("pointercancel", a);
  };
  o.addEventListener("pointermove", s), o.addEventListener("pointerup", a), o.addEventListener("pointercancel", a);
}
function jD({
  mode: e = "admin",
  document: t,
  templateDocument: n,
  templateId: r,
  fieldValues: o,
  onDocumentChange: i,
  onInstanceChange: s,
  statusSlot: a,
  statusClassName: l,
  saveStatus: u
}) {
  const [c, f] = S.useState(!0), [A, E] = S.useState(!0), [g, v] = S.useState(220), [B, d] = S.useState(260);
  return /* @__PURE__ */ y(GS, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    initialFieldValues: o,
    onDocumentChange: i,
    onInstanceChange: s
  }, children: /* @__PURE__ */ x("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ y(QD, {}),
    a ? /* @__PURE__ */ y("div", { className: `chd-status-bar${l ? ` ${l}` : ""}`, children: a }) : null,
    /* @__PURE__ */ x(
      "div",
      {
        className: `chd-main${c ? "" : " chd-main--layers-collapsed"}${A ? "" : " chd-main--properties-collapsed"}`,
        style: {
          "--chd-layers-width": `${c ? g : dm}px`,
          "--chd-properties-width": `${A ? B : dm}px`
        },
        children: [
          /* @__PURE__ */ x("div", { className: "chd-panel-slot", children: [
            /* @__PURE__ */ y(VS, { collapsed: !c, onToggleCollapse: () => f((h) => !h) }),
            c ? /* @__PURE__ */ y(
              "div",
              {
                className: "chd-panel-resizer chd-panel-resizer--end",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": "Resize layers",
                onPointerDown: (h) => Am(h, g, 1, v)
              }
            ) : null
          ] }),
          /* @__PURE__ */ x("div", { className: "chd-stage", children: [
            /* @__PURE__ */ y(ZS, {}),
            /* @__PURE__ */ y(eD, {})
          ] }),
          /* @__PURE__ */ x("div", { className: "chd-panel-slot", children: [
            /* @__PURE__ */ y(
              nD,
              {
                collapsed: !A,
                onToggleCollapse: () => E((h) => !h)
              }
            ),
            A ? /* @__PURE__ */ y(
              "div",
              {
                className: "chd-panel-resizer chd-panel-resizer--start",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": "Resize properties",
                onPointerDown: (h) => Am(h, B, -1, d)
              }
            ) : null
          ] })
        ]
      }
    ),
    u
  ] }) });
}
const GD = "EPAM.BuilderTemplate", gi = "designerDocumentJson";
function _o(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
  if (typeof e == "string" && e.trim())
    return e.trim();
}
function YD(e, t) {
  const n = t && typeof t == "object" && !Array.isArray(t) ? t : {}, r = _o(n.templateId) || _o(n.entityId) || _o(n.builderTemplateId);
  if (r)
    return r;
  if (!e || typeof e != "object")
    return;
  const o = e, i = o.systemProperties && typeof o.systemProperties == "object" ? o.systemProperties : void 0;
  return _o(i == null ? void 0 : i.id) || _o(o.id);
}
function KD(e) {
  if (!e || typeof e != "object")
    return {};
  const t = e;
  if (t.properties && typeof t.properties == "object")
    return t;
  const n = t.content;
  return n && typeof n == "object" ? n : t;
}
function XD(e) {
  if (typeof e == "string" && e.trim())
    return e;
  if (!e || typeof e != "object")
    return;
  const t = e;
  for (const n of ["Invariant", "invariant", "value", "Value", "en-US", "en-us"]) {
    const r = t[n];
    if (typeof r == "string" && r.trim())
      return r;
  }
}
function ZD(e) {
  if (e)
    for (const t of [gi, `EPAM.${gi}`]) {
      const n = XD(e[t]);
      if (n)
        return n;
    }
}
function WD(e) {
  if (!(e != null && e.trim()))
    return null;
  try {
    return qy(JSON.parse(e));
  } catch {
    return null;
  }
}
function VD(e) {
  var n, r;
  const t = ((n = e.entitydefinition) == null ? void 0 : n.href) || ((r = e.entityDefinition) == null ? void 0 : r.href);
  return typeof t == "string" && t.trim() ? t.trim() : `/api/entitydefinitions/${GD}`;
}
function JD(e) {
  if (!e || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.title;
  return typeof n == "string" && n.trim() ? `: ${n}` : "";
}
async function dv(e, t) {
  var r;
  if (!((r = e.raw) != null && r.getAsync))
    throw new Error("Content Hub client is not available. Open this designer on an EPAM.BuilderTemplate page.");
  const n = await e.raw.getAsync(`/api/entities/${t}`);
  if (!n.isSuccessStatusCode || n.content == null)
    throw new Error(
      `Could not load EPAM.BuilderTemplate ${t} (${n.statusCode ?? "unknown"}).`
    );
  return KD(n.content);
}
async function qD(e, t) {
  const n = await dv(e, t), r = WD(ZD(n.properties));
  return r ? { document: r, createdDefault: !1 } : { document: Vy(), createdDefault: !0 };
}
async function pm(e, t, n) {
  var l;
  if (!((l = e.raw) != null && l.putAsync))
    throw new Error("Content Hub client is not available for saving EPAM.BuilderTemplate.");
  const r = await dv(e, t), o = JSON.stringify(n), i = VD(r), s = [
    { label: "invariant", properties: { [gi]: { Invariant: o } } },
    { label: "plain", properties: { [gi]: o } },
    {
      label: "epam-invariant",
      properties: { [`EPAM.${gi}`]: { Invariant: o } }
    }
  ], a = [];
  for (const u of s) {
    const c = await e.raw.putAsync(`/api/entities/${t}`, {
      entitydefinition: { href: i },
      properties: u.properties
    });
    if (c.isSuccessStatusCode)
      return;
    a.push(`${u.label} → HTTP ${c.statusCode ?? "unknown"}${JD(c.content)}`);
  }
  throw new Error(
    `Could not save designerDocumentJson on EPAM.BuilderTemplate ${t}. ${a.join("; ")}`
  );
}
const _D = 5e3;
function $D({ client: e, entity: t, options: n }) {
  const r = YD(t, n), [o, i] = S.useState(null), [s, a] = S.useState("loading"), [l, u] = S.useState(null), [c, f] = S.useState(null), A = S.useRef(null), E = S.useRef(null), g = S.useRef(0), v = S.useRef(!0);
  A.current = o, S.useEffect(() => {
    $P(e ?? null);
  }, [e]);
  const B = S.useCallback(
    async (h) => {
      if (!e || !r)
        return;
      const T = ++g.current;
      a("saving"), u(null);
      try {
        if (await pm(e, r, h), T !== g.current)
          return;
        a("saved");
      } catch (O) {
        if (T !== g.current)
          return;
        u(O instanceof Error ? O.message : "Failed to save template."), a("error");
      }
    },
    [e, r]
  );
  S.useEffect(() => {
    if (!r) {
      f(
        "An entity ID is needed. Open CHDesigner on an EPAM.BuilderTemplate detail page, or set templateId in the component configuration."
      ), a("error");
      return;
    }
    if (!e) {
      f("Content Hub client is not available. This component must run inside Content Hub."), a("error");
      return;
    }
    let h = !1;
    return a("loading"), f(null), (async () => {
      try {
        const T = await qD(e, r);
        if (h)
          return;
        if (v.current = !0, i(T.document), T.createdDefault) {
          a("saving");
          try {
            await pm(e, r, T.document), h || a("saved");
          } catch (O) {
            if (h)
              return;
            u(O instanceof Error ? O.message : "Could not create the default template JSON."), a("error");
          }
        } else
          a("saved");
      } catch (T) {
        if (h)
          return;
        f(T instanceof Error ? T.message : "Could not load EPAM.BuilderTemplate."), a("error");
      }
    })(), () => {
      h = !0;
    };
  }, [e, r]), S.useEffect(() => {
    if (o) {
      if (v.current) {
        v.current = !1;
        return;
      }
      return a("pending"), E.current != null && window.clearTimeout(E.current), E.current = window.setTimeout(() => {
        const h = A.current;
        h && B(h);
      }, _D), () => {
        E.current != null && window.clearTimeout(E.current);
      };
    }
  }, [o, B]);
  const d = S.useCallback((h) => {
    i(h);
  }, []), p = s === "loading" ? "Loading template…" : s === "pending" ? "Unsaved changes" : s === "saving" ? "Saving…" : s === "error" ? l || "Save failed" : "Saved";
  return !r || c ? /* @__PURE__ */ y("div", { className: "chd-root", children: /* @__PURE__ */ y("div", { className: "chd-boot-error", children: c || "An entity ID is needed." }) }) : o ? /* @__PURE__ */ y(
    jD,
    {
      mode: "admin",
      document: o,
      templateDocument: o,
      templateId: r,
      onDocumentChange: d,
      saveStatus: /* @__PURE__ */ y("div", { className: `chd-save-status chd-save-status--${s}`, title: l || p, children: p })
    },
    r
  ) : /* @__PURE__ */ y("div", { className: "chd-root", children: /* @__PURE__ */ x("div", { className: "chd-boot-status", children: [
    "Loading EPAM.BuilderTemplate ",
    r,
    "…"
  ] }) });
}
function eB(e) {
  const t = _g(e);
  return {
    render(n) {
      t.render(
        /* @__PURE__ */ y(O1, { theme: n.theme, children: /* @__PURE__ */ y(
          $D,
          {
            client: n.client,
            entity: n.entity,
            options: n.options
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
  eB as default
};
