(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ch-visualiser{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ch-visualiser .visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.ch-visualiser .empty-search{margin:8px 0 0;font-size:12px;color:#68738d}.ch-visualiser .retry-button{margin-top:16px;background:#2c5aa0;color:#fff;border:none;padding:8px 16px;border-radius:6px;font-size:14px;cursor:pointer}.ch-visualiser .retry-button:hover{background:#1a4480}.ch-visualiser .contentful-layout{display:flex;height:80vh;background-color:#f7f9fa;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px #0000001a;position:relative}.ch-visualiser .contentful-layout.three-column .sidebar{width:15%;min-width:280px}.ch-visualiser .contentful-layout.three-column .main-content{width:60%;flex:none}.ch-visualiser .contentful-layout.three-column .detail-panel{width:25%;min-width:300px}.ch-visualiser .sidebar{background:white;border-right:1px solid #e5e8eb;display:flex;flex-direction:column;z-index:1}.ch-visualiser .sidebar-header{padding:20px;border-bottom:1px solid #e5e8eb;background:#fafbfc}.ch-visualiser .sidebar-title-section{margin-bottom:16px}.ch-visualiser .sidebar-title-section h3{margin:0 0 12px;font-size:18px;font-weight:600;color:#2c5aa0}.ch-visualiser .color-legend{display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.ch-visualiser .legend-item{display:flex;align-items:center;gap:8px;font-size:12px;color:#68738d}.ch-visualiser .legend-color{width:12px;height:12px;border-radius:50%;border:1px solid rgba(0,0,0,.1)}.ch-visualiser .search-container{margin-bottom:12px}.ch-visualiser .search-input{width:100%;padding:8px 12px;border:1px solid #d3dce6;border-radius:4px;font-size:14px;box-sizing:border-box}.ch-visualiser .search-input:focus{outline:none;border-color:#2c5aa0;box-shadow:0 0 0 3px #2c5aa01a}.ch-visualiser .entity-count{font-size:12px;color:#68738d;margin-bottom:12px}.ch-visualiser .sort-controls{display:flex;align-items:center;gap:8px}.ch-visualiser .sort-label{font-size:12px;color:#68738d;font-weight:500}.ch-visualiser .sort-select{font-size:12px;padding:4px 8px;border:1px solid #d3dce6;border-radius:4px;background:white;color:#2c5aa0;cursor:pointer}.ch-visualiser .sort-select:focus{outline:none;border-color:#2c5aa0;box-shadow:0 0 0 2px #2c5aa01a}.ch-visualiser .entity-list{flex:1;overflow-y:auto;padding:8px 0}.ch-visualiser .entity-item{display:flex;align-items:center;padding:12px 20px;cursor:pointer;border-bottom:1px solid #f1f3f4;transition:background-color .2s ease}.ch-visualiser .entity-item:hover{background-color:#f7f9fa}.ch-visualiser .entity-item.selected{background-color:#e8f4fd;border-right:3px solid #2c5aa0}.ch-visualiser .entity-icon{font-size:16px;margin-right:12px;color:#68738d}.ch-visualiser .entity-icon-circle{width:16px;height:16px;border-radius:50%;margin-right:12px;flex-shrink:0;border:1px solid rgba(0,0,0,.1)}.ch-visualiser .entity-info{flex:1;min-width:0}.ch-visualiser .entity-name{font-size:14px;font-weight:500;color:#2c5aa0;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ch-visualiser .entity-meta{font-size:12px;color:#68738d;display:flex;gap:8px}.ch-visualiser .entity-type-label{font-weight:500}.ch-visualiser .main-content{background:white;display:flex;flex-direction:column;overflow:hidden;border-right:1px solid #e5e8eb}.ch-visualiser .content-header{padding:24px 32px;border-bottom:1px solid #e5e8eb;background:white;display:flex;justify-content:space-between;align-items:center}.ch-visualiser .content-header h2{margin:0;font-size:24px;font-weight:600;color:#2c5aa0}.ch-visualiser .header-controls{display:flex;align-items:center;gap:24px}.ch-visualiser .view-toggle{display:flex;background:#f1f3f4;border-radius:6px;padding:2px}.ch-visualiser .view-button{background:none;border:none;padding:8px 16px;border-radius:4px;font-size:14px;font-weight:500;color:#68738d;cursor:pointer;transition:all .2s ease}.ch-visualiser .view-button:hover{color:#2c5aa0}.ch-visualiser .view-button.active{background:white;color:#2c5aa0;box-shadow:0 1px 3px #0000001a}.ch-visualiser .header-info{font-size:14px;color:#68738d}.ch-visualiser .entity-grid{flex:1;padding:24px;overflow-y:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;grid-auto-rows:minmax(120px,auto)}.ch-visualiser .grid-entity-node{background:white;border:2px solid #e5e8eb;border-radius:8px;padding:16px;cursor:pointer;transition:all .2s ease;position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;text-align:center}.ch-visualiser .grid-entity-node:hover{border-color:#2c5aa0;transform:translateY(-2px);box-shadow:0 4px 12px #2c5aa026}.ch-visualiser .grid-entity-node.selected{border-color:#2c5aa0;background:linear-gradient(135deg,#f8fafc 0%,#e8f4fd 100%);box-shadow:0 4px 12px #2c5aa033}.ch-visualiser .grid-entity-node .entity-icon{font-size:24px;margin-bottom:8px;color:#2c5aa0}.ch-visualiser .grid-entity-node .entity-name{font-size:14px;font-weight:600;color:#2c5aa0;margin-bottom:4px;word-break:break-word;line-height:1.2}.ch-visualiser .entity-connections{font-size:12px;color:#68738d;margin-top:auto}.ch-visualiser .connection-indicator{position:absolute;width:8px;height:8px;background:#2c5aa0;border-radius:50%;opacity:.6}.ch-visualiser .connection-0{top:8px;right:8px}.ch-visualiser .connection-1{top:8px;right:20px}.ch-visualiser .connection-2{top:8px;right:32px}.ch-visualiser .graph-loading{display:flex;flex-direction:column;justify-content:center;align-items:center;height:80vh;font-size:1.1em;color:#68738d;background:#f7f9fa}.ch-visualiser .loading-progress{margin-top:20px;width:300px}.ch-visualiser .progress-bar{width:100%;height:8px;background:#e5e8eb;border-radius:4px;overflow:hidden;margin-bottom:8px}.ch-visualiser .progress-fill{height:100%;background:linear-gradient(90deg,#2c5aa0,#4a90e2);transition:width .3s ease}.ch-visualiser .progress-text{text-align:center;font-size:14px;color:#68738d}.ch-visualiser .graph-error{display:flex;justify-content:center;align-items:center;height:80vh;color:#d32f2f;font-size:1.1em;background-color:#ffebee;border:1px solid #ffcdd2;border-radius:4px;margin:20px;text-align:center;padding:20px}.ch-visualiser .detail-panel{background:white;display:flex;flex-direction:column;overflow:hidden;z-index:1}.ch-visualiser .detail-header{padding:24px;border-bottom:1px solid #e5e8eb;background:#fafbfc;display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.ch-visualiser .detail-title-section{flex:1;min-width:0}.ch-visualiser .detail-title-section h3{margin:0;font-size:20px;font-weight:600;color:#2c5aa0;word-break:break-word}.ch-visualiser .taxonomy-badge{background:#fff3e0;color:#ef6c00;padding:3px 8px;border-radius:12px;font-size:11px;font-weight:500;text-transform:uppercase;white-space:nowrap;display:inline-block;margin-bottom:8px}.ch-visualiser .detail-header-actions{display:flex;align-items:center;gap:12px;margin-left:16px;flex-shrink:0}.ch-visualiser .built-in-badge{background:#e8f5e8;color:#2e7d32;padding:4px 8px;border-radius:12px;font-size:12px;font-weight:500;text-transform:uppercase;white-space:nowrap}.ch-visualiser .custom-badge{background:#ffebee;color:#d32f2f;padding:4px 8px;border-radius:12px;font-size:12px;font-weight:500;text-transform:uppercase;white-space:nowrap}.ch-visualiser .edit-button{background:#2c5aa0;color:#fff;border:none;padding:8px 16px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:all .2s ease;display:flex;align-items:center;gap:6px}.ch-visualiser .edit-button:hover{background:#1a4480;transform:translateY(-1px);box-shadow:0 2px 8px #2c5aa04d}.ch-visualiser .close-button{background:none;border:none;font-size:24px;color:#68738d;cursor:pointer;padding:4px 8px;border-radius:4px;transition:background-color .2s ease}.ch-visualiser .close-button:hover{background-color:#f1f3f4}.ch-visualiser .detail-content{flex:1;padding:24px;overflow-y:auto}.ch-visualiser .detail-section{margin-bottom:32px}.ch-visualiser .detail-section h4{margin:0 0 16px;font-size:16px;font-weight:600;color:#2c5aa0;border-bottom:2px solid #e8f4fd;padding-bottom:8px}.ch-visualiser .info-grid{display:grid;gap:12px}.ch-visualiser .info-item{display:grid;grid-template-columns:100px 1fr;align-items:center;padding:8px 0;border-bottom:1px solid #f1f3f4}.ch-visualiser .info-item label{font-weight:600;color:#68738d;font-size:14px}.ch-visualiser .info-item span{color:#2c5aa0;font-size:14px}.ch-visualiser .properties-list{display:grid;gap:8px}.ch-visualiser .property-item{display:flex;justify-content:space-between;align-items:center;padding:12px;background:#f8fafc;border-radius:6px;border-left:4px solid #2c5aa0}.ch-visualiser .property-name{font-weight:500;color:#2c5aa0;display:flex;align-items:center;gap:6px}.ch-visualiser .system-owned-icon{font-size:12px;opacity:.7}.ch-visualiser .property-type{font-size:12px;color:#68738d;background:#e8f4fd;padding:2px 8px;border-radius:12px}.ch-visualiser .relations-list{display:grid;gap:8px}.ch-visualiser .relation-item{display:flex;align-items:center;padding:12px;background:white;border-radius:6px;border:1px solid #e5e8eb}.ch-visualiser .relation-type{background:#e8f4fd;color:#2c5aa0;padding:4px 8px;border-radius:12px;font-size:12px;font-weight:500;margin-right:12px}.ch-visualiser .relation-arrow{color:#68738d;margin:0 8px;font-weight:700}.ch-visualiser .relation-target{color:#2c5aa0;font-weight:500;flex:1}.ch-visualiser .relation-name{color:#68738d;font-style:italic;margin-left:8px}.ch-visualiser .network-view{flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative}.ch-visualiser .network-controls{padding:16px 24px;background:#f8fafc;border-bottom:1px solid #e5e8eb;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}.ch-visualiser .network-info{font-size:14px;color:#68738d}.ch-visualiser .focused-info{color:#2c5aa0;font-weight:600}.ch-visualiser .network-zoom-controls{display:flex;align-items:center;gap:8px;background:white;border:1px solid #e5e8eb;border-radius:6px;padding:4px}.ch-visualiser .zoom-btn{background:none;border:none;width:32px;height:32px;border-radius:4px;cursor:pointer;font-size:18px;font-weight:700;color:#68738d;display:flex;align-items:center;justify-content:center;transition:all .2s ease}.ch-visualiser .zoom-btn:hover{background:#f1f3f4;color:#2c5aa0}.ch-visualiser .zoom-level{font-size:12px;color:#68738d;min-width:40px;text-align:center;font-weight:500}.ch-visualiser .reset-btn{background:none;border:none;padding:6px 12px;border-radius:4px;cursor:pointer;font-size:12px;color:#68738d;transition:all .2s ease;margin-left:8px}.ch-visualiser .reset-btn:hover{background:#f1f3f4;color:#2c5aa0}.ch-visualiser .performance-warning{font-size:12px;color:#f57c00;background:#fff3e0;padding:4px 8px;border-radius:4px;border:1px solid #ffcc02}.ch-visualiser .network-container{flex:1;overflow:hidden;cursor:grab;position:relative;-webkit-user-select:none;user-select:none}.ch-visualiser .network-container:active,.ch-visualiser .network-container.dragging{cursor:grabbing}.ch-visualiser .network-svg{width:100%;height:100%;background:linear-gradient(90deg,#f8fafc 0%,transparent 10%),linear-gradient(180deg,#f8fafc 0%,transparent 10%);background-size:40px 40px;background-position:0 0,0 0;pointer-events:all;position:relative;z-index:1}.ch-visualiser .network-node-group{cursor:pointer}.ch-visualiser .network-node{transition:all .2s ease;filter:drop-shadow(0 2px 4px rgba(44,90,160,.1));cursor:grab}.ch-visualiser .network-node:hover{filter:drop-shadow(0 4px 8px rgba(44,90,160,.2))}.ch-visualiser .network-node.selected{filter:drop-shadow(0 6px 12px rgba(44,90,160,.4))}.ch-visualiser .network-node.connected-to-selected{filter:drop-shadow(0 4px 8px rgba(44,90,160,.3))}.ch-visualiser .network-node.focused{filter:drop-shadow(0 8px 16px rgba(255,107,53,.4));animation:pulse 2s infinite}.ch-visualiser .network-node.dimmed{opacity:.3;filter:none}.ch-visualiser .network-node.hidden{display:none}.ch-visualiser .network-node:active,.ch-visualiser .network-node.dragging{cursor:grabbing}@keyframes pulse{0%{filter:drop-shadow(0 8px 16px rgba(255,107,53,.4))}50%{filter:drop-shadow(0 12px 24px rgba(255,107,53,.6))}to{filter:drop-shadow(0 8px 16px rgba(255,107,53,.4))}}.ch-visualiser .network-label{font-size:11px;font-weight:500;cursor:pointer;-webkit-user-select:none;user-select:none;dominant-baseline:middle}.ch-visualiser .network-label.dimmed{opacity:.5}.ch-visualiser .network-label.hidden{display:none}.ch-visualiser .network-count{font-size:12px;font-weight:700;cursor:pointer;-webkit-user-select:none;user-select:none;dominant-baseline:middle}.ch-visualiser .network-count.dimmed{opacity:.5}.ch-visualiser .network-count.hidden{display:none}.ch-visualiser .connection-line{transition:all .2s ease}.ch-visualiser .connection-line:hover{stroke:#2c5aa0;stroke-width:2;stroke-opacity:.7}.ch-visualiser .connection-line.highlighted{stroke:#ff6b35;stroke-width:4;stroke-opacity:.9;animation:flow 1.5s infinite}.ch-visualiser .connection-line.dimmed{stroke:#e0e0e0;stroke-opacity:.1}.ch-visualiser .connection-line.hidden{display:none}@keyframes flow{0%{stroke-dasharray:0 20}to{stroke-dasharray:20 0}}@media (max-width: 768px){.ch-visualiser .network-svg{min-height:400px}.ch-visualiser .network-label{font-size:10px}.ch-visualiser .network-count{font-size:12px}.ch-visualiser .header-controls{flex-direction:column;gap:12px;align-items:flex-start}}.ch-visualiser .relation-badge{font-size:10px;padding:2px 6px;border-radius:8px;margin-left:8px;font-weight:500;text-transform:uppercase}.ch-visualiser .relation-badge.taxonomy{background:#e8f5e8;color:#2e7d32}.ch-visualiser .relation-badge.path{background:#fff3e0;color:#ef6c00}.ch-visualiser .relation-badge.reverse{background:#f3e5f5;color:#7b1fa2}.ch-visualiser .connected-entities-list{display:grid;gap:8px}.ch-visualiser .connected-entity-item{display:flex;align-items:center;padding:12px;background:#f8fafc;border-radius:6px;cursor:pointer;transition:background-color .2s ease;border:1px solid #e8f4fd}.ch-visualiser .connected-entity-item:hover{background:#e8f4fd}.ch-visualiser .connected-entity-item .entity-icon{margin-right:12px;color:#2c5aa0}.ch-visualiser .connected-entity-item .entity-icon-circle{width:16px;height:16px;border-radius:50%;margin-right:12px;flex-shrink:0;border:1px solid rgba(0,0,0,.1)}.ch-visualiser .no-connections{text-align:center;color:#68738d;font-style:italic;padding:24px}.ch-visualiser .no-selection{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;color:#68738d}.ch-visualiser .no-selection-icon{font-size:48px;margin-bottom:16px;opacity:.5}.ch-visualiser .no-selection p{font-size:16px;margin:0;line-height:1.4}@media (max-width: 1200px){.ch-visualiser .contentful-layout.three-column .sidebar{width:30%}.ch-visualiser .contentful-layout.three-column .main-content{width:40%}.ch-visualiser .contentful-layout.three-column .detail-panel{width:30%}}@media (max-width: 768px){.ch-visualiser .contentful-layout{flex-direction:column;height:auto;min-height:80vh}.ch-visualiser .contentful-layout.three-column .sidebar{width:100%;max-height:300px}.ch-visualiser .contentful-layout.three-column .main-content{width:100%;flex:1}.ch-visualiser .contentful-layout.three-column .detail-panel{width:100%;min-height:400px}.ch-visualiser .entity-grid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;padding:16px}.ch-visualiser .content-header{flex-direction:column;align-items:flex-start;gap:12px;padding:16px}.ch-visualiser .color-legend{flex-direction:row;flex-wrap:wrap;gap:12px}}.ch-visualiser .entity-list::-webkit-scrollbar,.ch-visualiser .entity-grid::-webkit-scrollbar,.ch-visualiser .detail-content::-webkit-scrollbar{width:6px}.ch-visualiser .entity-list::-webkit-scrollbar-track,.ch-visualiser .entity-grid::-webkit-scrollbar-track,.ch-visualiser .detail-content::-webkit-scrollbar-track{background:#f1f3f4}.ch-visualiser .entity-list::-webkit-scrollbar-thumb,.ch-visualiser .entity-grid::-webkit-scrollbar-thumb,.ch-visualiser .detail-content::-webkit-scrollbar-thumb{background:#d3dce6;border-radius:3px}.ch-visualiser .entity-list::-webkit-scrollbar-thumb:hover,.ch-visualiser .entity-grid::-webkit-scrollbar-thumb:hover,.ch-visualiser .detail-content::-webkit-scrollbar-thumb:hover{background:#68738d}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
function Kd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l && Object.defineProperty(e, o, l.get ? l : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Qd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lc = { exports: {} }, sl = {}, ic = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr = Symbol.for("react.element"), Yd = Symbol.for("react.portal"), Xd = Symbol.for("react.fragment"), Gd = Symbol.for("react.strict_mode"), Zd = Symbol.for("react.profiler"), Jd = Symbol.for("react.provider"), qd = Symbol.for("react.context"), bd = Symbol.for("react.forward_ref"), ep = Symbol.for("react.suspense"), tp = Symbol.for("react.memo"), np = Symbol.for("react.lazy"), Tu = Symbol.iterator;
function rp(e) {
  return e === null || typeof e != "object" ? null : (e = Tu && e[Tu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var sc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, uc = Object.assign, ac = {};
function Jn(e, t, n) {
  this.props = e, this.context = t, this.refs = ac, this.updater = n || sc;
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cc() {
}
cc.prototype = Jn.prototype;
function vs(e, t, n) {
  this.props = e, this.context = t, this.refs = ac, this.updater = n || sc;
}
var ws = vs.prototype = new cc();
ws.constructor = vs;
uc(ws, Jn.prototype);
ws.isPureReactComponent = !0;
var Ru = Array.isArray, fc = Object.prototype.hasOwnProperty, Ss = { current: null }, dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function pc(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)
      fc.call(t, r) && !dc.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++)
      u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
      o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Kr, type: e, key: l, ref: i, props: o, _owner: Ss.current };
}
function op(e, t) {
  return { $$typeof: Kr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ks(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kr;
}
function lp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ou = /\/+/g;
function Ql(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? lp("" + e.key) : t.toString(36);
}
function wo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kr:
          case Yd:
            i = !0;
        }
    }
  if (i)
    return i = e, o = o(i), e = r === "" ? "." + Ql(i, 0) : r, Ru(o) ? (n = "", e != null && (n = e.replace(Ou, "$&/") + "/"), wo(o, t, n, "", function(a) {
      return a;
    })) : o != null && (ks(o) && (o = op(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Ou, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ru(e))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var u = r + Ql(l, s);
      i += wo(l, t, n, u, o);
    }
  else if (u = rp(e), typeof u == "function")
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      l = l.value, u = r + Ql(l, s++), i += wo(l, t, n, u, o);
  else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function eo(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return wo(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function ip(e) {
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
var Me = { current: null }, So = { transition: null }, sp = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: So, ReactCurrentOwner: Ss };
function mc() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = { map: eo, forEach: function(e, t, n) {
  eo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return eo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return eo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ks(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
A.Component = Jn;
A.Fragment = Xd;
A.Profiler = Zd;
A.PureComponent = vs;
A.StrictMode = Gd;
A.Suspense = ep;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sp;
A.act = mc;
A.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = uc({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = Ss.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (u in t)
      fc.call(t, u) && !dc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1)
    r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++)
      s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Kr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function(e) {
  return e = { $$typeof: qd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Jd, _context: e }, e.Consumer = e;
};
A.createElement = pc;
A.createFactory = function(e) {
  var t = pc.bind(null, e);
  return t.type = e, t;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(e) {
  return { $$typeof: bd, render: e };
};
A.isValidElement = ks;
A.lazy = function(e) {
  return { $$typeof: np, _payload: { _status: -1, _result: e }, _init: ip };
};
A.memo = function(e, t) {
  return { $$typeof: tp, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function(e) {
  var t = So.transition;
  So.transition = {};
  try {
    e();
  } finally {
    So.transition = t;
  }
};
A.unstable_act = mc;
A.useCallback = function(e, t) {
  return Me.current.useCallback(e, t);
};
A.useContext = function(e) {
  return Me.current.useContext(e);
};
A.useDebugValue = function() {
};
A.useDeferredValue = function(e) {
  return Me.current.useDeferredValue(e);
};
A.useEffect = function(e, t) {
  return Me.current.useEffect(e, t);
};
A.useId = function() {
  return Me.current.useId();
};
A.useImperativeHandle = function(e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function(e, t) {
  return Me.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function(e, t) {
  return Me.current.useLayoutEffect(e, t);
};
A.useMemo = function(e, t) {
  return Me.current.useMemo(e, t);
};
A.useReducer = function(e, t, n) {
  return Me.current.useReducer(e, t, n);
};
A.useRef = function(e) {
  return Me.current.useRef(e);
};
A.useState = function(e) {
  return Me.current.useState(e);
};
A.useSyncExternalStore = function(e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function() {
  return Me.current.useTransition();
};
A.version = "18.3.1";
ic.exports = A;
var O = ic.exports;
const up = /* @__PURE__ */ Qd(O), ki = /* @__PURE__ */ Kd({
  __proto__: null,
  default: up
}, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap = O, cp = Symbol.for("react.element"), fp = Symbol.for("react.fragment"), dp = Object.prototype.hasOwnProperty, pp = ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, mp = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    dp.call(t, r) && !mp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: cp, type: e, key: l, ref: i, props: o, _owner: pp.current };
}
sl.Fragment = fp;
sl.jsx = hc;
sl.jsxs = hc;
lc.exports = sl;
var xs = lc.exports;
const hp = xs.Fragment, k = xs.jsx, R = xs.jsxs, yp = /* @__PURE__ */ new Set([
  "M.Tag",
  "M.ContentType",
  "M.AssetType",
  "M.AssetUsage",
  "M.AssetPurpose",
  "M.ContentStatus",
  "M.DRM",
  "M.Country",
  "M.Region",
  "M.Language",
  "M.Category",
  "M.Classification"
]), gp = /* @__PURE__ */ new Set([
  "M.AssetCollection",
  "M.Portals",
  "M.Portal",
  "M.UserGroup",
  "M.User",
  "M.Comment",
  "M.Annotation",
  "M.FinalLifeCycleStatus",
  "M.ContentRepository",
  "M.RenditionLink",
  "M.PublicLink"
]), vp = /(Type|Status|Tag|Category|Classification|Taxonomy|Brand|Region|Language|Country|Purpose|Usage|LifeCycle|DRM)/i, wp = {
  asset: "#378ADD",
  product: "#1D9E75",
  content: "#D85A30",
  taxonomy: "#7F77DD",
  unknown: "#888780"
}, Sp = {
  asset: "Asset",
  product: "Product",
  content: "Content",
  taxonomy: "Taxonomy",
  unknown: "Other"
};
function kp(e) {
  var r, o, l;
  if (e.definitionName)
    return e.definitionName;
  const t = e, n = t == null ? void 0 : t.definition;
  return (n == null ? void 0 : n.name) ?? ((r = t == null ? void 0 : t.entityDefinition) == null ? void 0 : r.name) ?? ((o = t == null ? void 0 : t.entitydefinition) == null ? void 0 : o.name) ?? ((l = t == null ? void 0 : t.systemProperties) == null ? void 0 : l.definitionName) ?? "";
}
function xp(e) {
  return !!(e.startsWith("PCM.") || e === "M.Product" || /\.Product(\.|$)/i.test(e) || /\bProduct\b/i.test(e) && !/ProductType|Taxonomy/i.test(e));
}
function Cp(e) {
  return e ? e === "M.Asset" ? "asset" : xp(e) ? "product" : e.startsWith("CMP.") ? "content" : gp.has(e) ? "unknown" : yp.has(e) || e.startsWith("M.Taxonomy") || e.startsWith("Taxonomy") || e.startsWith("M.") && vp.test(e) ? "taxonomy" : "unknown" : "unknown";
}
const st = 1200, ht = 800, Cs = 30, Ep = 25, _p = 500, Pp = 100;
function Np() {
  try {
    return localStorage.getItem("ch-visualiser-debug") === "1";
  } catch {
    return !1;
  }
}
function xi(...e) {
  Np() && console.log("[CHVisualiser]", ...e);
}
function Mp(e) {
  const t = e;
  return t.baseUrl ? t.baseUrl.replace(/\/$/, "") : t.url ? t.url.replace(/\/$/, "") : window.location.origin;
}
function Tp(e) {
  if (Array.isArray(e))
    return e;
  if (e && typeof e == "object") {
    const t = e;
    if (Array.isArray(t.items))
      return t.items;
    if (Array.isArray(t.content))
      return t.content;
  }
  return [];
}
function Rp(e, t) {
  if (!e || typeof e != "object")
    return t;
  const n = e, r = n.totalItems ?? n.total ?? n.count ?? n.totalCount ?? n.total_items;
  return typeof r == "number" ? r : t;
}
async function Op(e, t = {}) {
  var u, a, d;
  const n = t.pageSize ?? Ep, r = Mp(e), o = [];
  let l = 0, i = 0, s = !0;
  for (; s && l < _p; ) {
    if ((u = t.signal) != null && u.aborted)
      throw new DOMException("Aborted", "AbortError");
    (a = t.onProgress) == null || a.call(t, {
      current: o.length,
      total: i || o.length + n
    });
    const p = new URLSearchParams({
      skip: String(l * n),
      take: String(n)
    }), m = `${r}/api/entitydefinitions?${p.toString()}`;
    xi("Fetching", m);
    const v = await fetch(m, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      signal: t.signal
    });
    if (!v.ok)
      throw new Error(`Entity definitions request failed (${v.status})`);
    const w = await v.json(), y = Tp(w);
    (l === 0 || i === 0) && (i = Rp(w, 0)), y.length === 0 ? s = !1 : (o.push(...y), s = !(i > 0 && o.length >= i) && y.length === n), l++, (d = t.onProgress) == null || d.call(t, {
      current: o.length,
      total: i || o.length
    });
  }
  return xi(`Fetched ${o.length} entity definition records`), o;
}
function $p(e, t) {
  if (t != null && t.definitionEditPath)
    return t.definitionEditPath.replace("{id}", String(e));
  const n = window.location.pathname.match(/^\/([a-z]{2}-[a-z]{2})\//i);
  return `/${(n == null ? void 0 : n[1]) ?? "en-us"}/admin/definitionmgmt/detail/${e}`;
}
function wt(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  return e.relations.forEach((o) => {
    const l = t.find(
      (i) => i.name === o.target || i.id.toString() === o.target
    );
    l && !r.has(l.name) && (n.push(l), r.add(l.name));
  }), t.forEach((o) => {
    o.relations.forEach((l) => {
      (l.target === e.name || l.target === e.id.toString()) && !r.has(o.name) && (n.push(o), r.add(o.name));
    });
  }), n;
}
function zp(e, t, n, r) {
  const o = t.toLowerCase();
  let l = e.filter(
    (i) => i.name.toLowerCase().includes(o)
  );
  switch (n) {
    case "name":
      l = [...l].sort((i, s) => i.name.localeCompare(s.name));
      break;
    case "connections":
      l = [...l].sort((i, s) => {
        const u = wt(i, r).length;
        return wt(s, r).length - u;
      });
      break;
  }
  return l;
}
function yc(e) {
  return e.is_taxonomy_item_definition ? "taxonomy" : Cp(e.name);
}
function Er(e) {
  return e.is_built_in && !e.is_taxonomy_item_definition ? "#28a745" : wp[yc(e)];
}
function Lp(e) {
  return e.is_taxonomy_item_definition ? "Taxonomy" : e.is_built_in ? "Built-in" : Sp[yc(e)];
}
const Ip = ({
  definitions: e,
  selectedEntity: t,
  options: n,
  onEntityClick: r
}) => /* @__PURE__ */ R("div", { className: "detail-panel", children: [
  /* @__PURE__ */ R("div", { className: "detail-header", children: [
    /* @__PURE__ */ R("div", { className: "detail-title-section", children: [
      (t == null ? void 0 : t.is_taxonomy_item_definition) && /* @__PURE__ */ k("span", { className: "taxonomy-badge", children: "Taxonomy" }),
      /* @__PURE__ */ k("h3", { children: t ? t.name : "Select an entity definition" })
    ] }),
    /* @__PURE__ */ R("div", { className: "detail-header-actions", children: [
      (t == null ? void 0 : t.is_built_in) && /* @__PURE__ */ k("span", { className: "built-in-badge", children: "Built-in" }),
      t && !t.is_built_in && /* @__PURE__ */ k("span", { className: "custom-badge", children: "Custom" }),
      t && /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: "edit-button",
          onClick: () => {
            window.open($p(t.id, n), "_blank");
          },
          title: "Edit entity definition",
          "aria-label": "Edit entity definition",
          children: "Edit"
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ k("div", { className: "detail-content", children: t ? /* @__PURE__ */ R(hp, { children: [
    /* @__PURE__ */ R("div", { className: "detail-section", children: [
      /* @__PURE__ */ k("h4", { children: "Basic information" }),
      /* @__PURE__ */ R("div", { className: "info-grid", children: [
        /* @__PURE__ */ R("div", { className: "info-item", children: [
          /* @__PURE__ */ k("label", { children: "ID" }),
          /* @__PURE__ */ k("span", { children: t.id })
        ] }),
        /* @__PURE__ */ R("div", { className: "info-item", children: [
          /* @__PURE__ */ k("label", { children: "Name" }),
          /* @__PURE__ */ k("span", { children: t.name })
        ] }),
        t.description && /* @__PURE__ */ R("div", { className: "info-item", children: [
          /* @__PURE__ */ k("label", { children: "Description" }),
          /* @__PURE__ */ k("span", { children: t.description })
        ] })
      ] })
    ] }),
    t.properties && t.properties.length > 0 && /* @__PURE__ */ R("div", { className: "detail-section", children: [
      /* @__PURE__ */ R("h4", { children: [
        "Properties (",
        t.properties.length,
        ")"
      ] }),
      /* @__PURE__ */ k("div", { className: "properties-list", children: t.properties.map((o) => /* @__PURE__ */ R("div", { className: "property-item", children: [
        /* @__PURE__ */ R("span", { className: "property-name", children: [
          o.name,
          o.is_system_owned && /* @__PURE__ */ k("span", { className: "system-owned-icon", title: "System owned", children: "*" })
        ] }),
        /* @__PURE__ */ k("span", { className: "property-type", children: o.type })
      ] }, o.name)) })
    ] }),
    t.relations.length > 0 && /* @__PURE__ */ R("div", { className: "detail-section", children: [
      /* @__PURE__ */ R("h4", { children: [
        "Relations (",
        t.relations.length,
        ")"
      ] }),
      /* @__PURE__ */ k("div", { className: "relations-list", children: t.relations.map((o, l) => /* @__PURE__ */ R("div", { className: "relation-item", children: [
        /* @__PURE__ */ k("span", { className: "relation-type", children: o.role && o.cardinality ? `${o.role} (${o.cardinality})` : o.type }),
        o.role === "Parent" && /* @__PURE__ */ k("span", { className: "relation-badge parent", title: "Parent", children: "Parent" }),
        o.role === "Child" && /* @__PURE__ */ k("span", { className: "relation-badge child", title: "Child", children: "Child" }),
        o.target === t.name && /* @__PURE__ */ k("span", { className: "relation-badge recursive", title: "Recursive", children: "Recursive" }),
        /* @__PURE__ */ k("span", { className: "relation-arrow", "aria-hidden": "true", children: "→" }),
        /* @__PURE__ */ k("span", { className: "relation-target", children: o.target }),
        o.name && /* @__PURE__ */ R("span", { className: "relation-name", children: [
          "(",
          o.name,
          ")"
        ] }),
        o.isTaxonomy && /* @__PURE__ */ k("span", { className: "relation-badge taxonomy", children: "Taxonomy" }),
        o.isPath && /* @__PURE__ */ k("span", { className: "relation-badge path", children: "Path" }),
        o.isReverse && /* @__PURE__ */ k("span", { className: "relation-badge reverse", children: "Inferred" })
      ] }, `${o.name ?? o.target}-${l}`)) })
    ] }),
    /* @__PURE__ */ R("div", { className: "detail-section", children: [
      /* @__PURE__ */ k("h4", { children: "Connected definitions" }),
      /* @__PURE__ */ R("div", { className: "connected-entities-list", children: [
        wt(t, e).map((o) => /* @__PURE__ */ R(
          "div",
          {
            className: "connected-entity-item",
            onClick: () => r(o),
            onKeyDown: (l) => {
              (l.key === "Enter" || l.key === " ") && (l.preventDefault(), r(o));
            },
            role: "button",
            tabIndex: 0,
            children: [
              /* @__PURE__ */ k(
                "div",
                {
                  className: "entity-icon-circle",
                  style: { backgroundColor: Er(o) }
                }
              ),
              /* @__PURE__ */ k("span", { children: o.name })
            ]
          },
          o.id
        )),
        wt(t, e).length === 0 && /* @__PURE__ */ k("div", { className: "no-connections", children: "No connected definitions found" })
      ] })
    ] })
  ] }) : /* @__PURE__ */ R("div", { className: "no-selection", children: [
    /* @__PURE__ */ k("div", { className: "no-selection-icon", "aria-hidden": "true", children: "◇" }),
    /* @__PURE__ */ k("p", { children: "Select a definition from the list or network view to see its details." })
  ] }) })
] }), Ap = ({
  definitions: e,
  allDefinitions: t,
  selectedEntity: n,
  onEntityClick: r
}) => /* @__PURE__ */ k("div", { className: "entity-grid", children: e.map((o) => {
  const l = wt(o, t), i = Er(o);
  return /* @__PURE__ */ R(
    "div",
    {
      className: `grid-entity-node ${(n == null ? void 0 : n.id) === o.id ? "selected" : ""}`,
      onClick: (s) => {
        s.stopPropagation(), r(o);
      },
      onKeyDown: (s) => {
        (s.key === "Enter" || s.key === " ") && (s.preventDefault(), r(o));
      },
      role: "button",
      tabIndex: 0,
      style: { borderColor: i },
      children: [
        /* @__PURE__ */ k("div", { className: "entity-icon", style: { color: i }, "aria-hidden": "true", children: "◇" }),
        /* @__PURE__ */ k("div", { className: "entity-name", children: o.name }),
        /* @__PURE__ */ R("div", { className: "entity-connections", children: [
          l.length,
          " connection",
          l.length === 1 ? "" : "s"
        ] })
      ]
    },
    o.id
  );
}) }), Dp = ({
  definitions: e,
  filteredDefinitions: t,
  selectedEntity: n,
  searchTerm: r,
  sortOrder: o,
  onSearchChange: l,
  onSortChange: i,
  onEntityClick: s
}) => /* @__PURE__ */ R("div", { className: "sidebar", children: [
  /* @__PURE__ */ R("div", { className: "sidebar-header", children: [
    /* @__PURE__ */ R("div", { className: "sidebar-title-section", children: [
      /* @__PURE__ */ k("h3", { children: "Entity definitions" }),
      /* @__PURE__ */ R("div", { className: "color-legend", "aria-label": "Entity type legend", children: [
        /* @__PURE__ */ R("div", { className: "legend-item", children: [
          /* @__PURE__ */ k("span", { className: "legend-color", style: { backgroundColor: "#28a745" } }),
          /* @__PURE__ */ k("span", { children: "Built-in" })
        ] }),
        /* @__PURE__ */ R("div", { className: "legend-item", children: [
          /* @__PURE__ */ k("span", { className: "legend-color", style: { backgroundColor: "#dc3545" } }),
          /* @__PURE__ */ k("span", { children: "Custom" })
        ] }),
        /* @__PURE__ */ R("div", { className: "legend-item", children: [
          /* @__PURE__ */ k("span", { className: "legend-color", style: { backgroundColor: "#7F77DD" } }),
          /* @__PURE__ */ k("span", { children: "Taxonomy" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ R("div", { className: "search-container", children: [
      /* @__PURE__ */ k("label", { className: "visually-hidden", htmlFor: "ch-visualiser-search", children: "Search entity definitions" }),
      /* @__PURE__ */ k(
        "input",
        {
          id: "ch-visualiser-search",
          type: "search",
          placeholder: "Search definitions",
          value: r,
          onChange: (u) => l(u.target.value),
          className: "search-input"
        }
      )
    ] }),
    /* @__PURE__ */ R("div", { className: "entity-count", children: [
      t.length,
      " of ",
      e.length,
      " definitions"
    ] }),
    /* @__PURE__ */ R("div", { className: "sort-controls", children: [
      /* @__PURE__ */ k("label", { className: "sort-label", htmlFor: "ch-visualiser-sort", children: "Sort by" }),
      /* @__PURE__ */ R(
        "select",
        {
          id: "ch-visualiser-sort",
          value: o,
          onChange: (u) => i(u.target.value),
          className: "sort-select",
          children: [
            /* @__PURE__ */ k("option", { value: "none", children: "Default" }),
            /* @__PURE__ */ k("option", { value: "name", children: "Name (A-Z)" }),
            /* @__PURE__ */ k("option", { value: "connections", children: "Connections (most first)" })
          ]
        }
      )
    ] }),
    t.length === 0 && e.length > 0 && /* @__PURE__ */ k("p", { className: "empty-search", role: "status", children: "No definitions match your search." })
  ] }),
  /* @__PURE__ */ k("div", { className: "entity-list", role: "listbox", "aria-label": "Entity definitions", children: t.map((u) => /* @__PURE__ */ R(
    "div",
    {
      "data-entity-id": u.id,
      role: "option",
      "aria-selected": (n == null ? void 0 : n.id) === u.id,
      className: `entity-item ${(n == null ? void 0 : n.id) === u.id ? "selected" : ""}`,
      onClick: () => s(u),
      onKeyDown: (a) => {
        (a.key === "Enter" || a.key === " ") && (a.preventDefault(), s(u));
      },
      tabIndex: 0,
      children: [
        /* @__PURE__ */ k(
          "div",
          {
            className: "entity-icon-circle",
            style: { backgroundColor: Er(u) }
          }
        ),
        /* @__PURE__ */ R("div", { className: "entity-info", children: [
          /* @__PURE__ */ k("div", { className: "entity-name", children: u.name }),
          /* @__PURE__ */ R("div", { className: "entity-meta", children: [
            /* @__PURE__ */ R("span", { children: [
              u.relations.length,
              " relations"
            ] }),
            /* @__PURE__ */ k("span", { className: "entity-type-label", style: { color: Er(u) }, children: Lp(u) })
          ] })
        ] })
      ]
    },
    u.id
  )) })
] }), ln = Cs * 2.8;
function Fp(e, t) {
  const n = t.findIndex((s) => s.id === e.id), r = t.length, o = Cs * 2.5;
  if (r === 1)
    return { x: st / 2, y: ht / 2 };
  let l;
  if (n < r * 0.6) {
    const s = 80 + n * 20, u = n * 0.8;
    l = {
      x: st / 2 + s * Math.cos(u),
      y: ht / 2 + s * Math.sin(u)
    };
  } else if (n < r * 0.9) {
    const s = n - Math.floor(r * 0.6), u = Math.ceil(Math.sqrt(r * 0.4)), a = s % u, d = Math.floor(s / u), p = Math.max(o * 1.3, 200);
    l = {
      x: 150 + a * p,
      y: 150 + d * p
    };
  } else {
    const s = n - Math.floor(r * 0.9), u = [
      { x: 100, y: 100 },
      { x: st - 100, y: 100 },
      { x: 100, y: ht - 100 },
      { x: st - 100, y: ht - 100 }
    ], a = u[s % u.length], d = Math.floor(s / u.length) * 80;
    l = {
      x: a.x + (s % 2 === 0 ? d : -d),
      y: a.y + (s % 2 === 1 ? d : -d)
    };
  }
  l.x = Math.max(100, Math.min(st - 100, l.x)), l.y = Math.max(100, Math.min(ht - 100, l.y));
  const i = 15;
  return l.x += (Math.random() - 0.5) * i, l.y += (Math.random() - 0.5) * i, l.x = Math.max(100, Math.min(st - 100, l.x)), l.y = Math.max(100, Math.min(ht - 100, l.y)), l;
}
function jp(e) {
  const t = new Map(e);
  let n = !0, r = 0;
  const o = 30;
  for (; n && r < o; ) {
    n = !1, r++;
    for (const [l, i] of t.entries())
      for (const [s, u] of t.entries()) {
        if (l >= s)
          continue;
        const a = i.x - u.x, d = i.y - u.y, p = Math.sqrt(a * a + d * d);
        if (p < ln) {
          n = !0;
          const m = Math.atan2(d, a), v = (ln - p) / 2 + 15, w = {
            x: Math.max(80, Math.min(1120, i.x + Math.cos(m) * v)),
            y: Math.max(80, Math.min(720, i.y + Math.sin(m) * v))
          }, y = {
            x: Math.max(80, Math.min(1120, u.x - Math.cos(m) * v)),
            y: Math.max(80, Math.min(720, u.y - Math.sin(m) * v))
          };
          t.set(l, w), t.set(s, y);
        }
      }
  }
  return t;
}
function sn(e, t, n) {
  const r = n.get(e.id);
  if (r)
    return r;
  const o = t.findIndex((f) => f.id === e.id), l = t.length;
  if (l === 1)
    return { x: st / 2, y: ht / 2 };
  const i = Math.ceil(Math.sqrt(l * 1.8)), s = o % i, u = Math.floor(o / i), a = Math.min(180, Math.max(120, st / i)), d = 150, p = 150, m = d + s * a, v = p + u * a, w = e.id % 1e3, y = w % 60 - 30, N = w * 7 % 60 - 30;
  return {
    x: Math.max(80, Math.min(st - 80, m + y)),
    y: Math.max(80, Math.min(ht - 80, v + N))
  };
}
function Up(e, t, n) {
  const r = new Map(n);
  r.set(t, e);
  const o = [];
  for (const [s, u] of r.entries()) {
    if (s === t)
      continue;
    const a = e.x - u.x, d = e.y - u.y, p = Math.sqrt(a * a + d * d);
    p < ln && o.push({ id: s, pos: u, distance: p });
  }
  o.forEach(({ id: s, pos: u, distance: a }) => {
    const d = u.x - e.x, p = u.y - e.y;
    if (a === 0) {
      const w = Math.random() * Math.PI * 2, y = ln + 20;
      r.set(s, {
        x: Math.max(80, Math.min(1120, e.x + Math.cos(w) * y)),
        y: Math.max(80, Math.min(720, e.y + Math.sin(w) * y))
      });
      return;
    }
    const m = Math.atan2(p, d), v = ln - a + 25;
    r.set(s, {
      x: Math.max(80, Math.min(1120, u.x + Math.cos(m) * v)),
      y: Math.max(80, Math.min(720, u.y + Math.sin(m) * v))
    });
  });
  let l = !0, i = 0;
  for (; l && i < 20; ) {
    l = !1, i++;
    for (const s of o.map((u) => u.id)) {
      const u = r.get(s);
      if (u)
        for (const [a, d] of r.entries()) {
          if (a === s || a === t)
            continue;
          const p = u.x - d.x, m = u.y - d.y, v = Math.sqrt(p * p + m * m);
          if (v < ln) {
            const w = Math.atan2(-m, -p), y = ln - v + 20;
            r.set(a, {
              x: Math.max(80, Math.min(1120, d.x + Math.cos(w) * y)),
              y: Math.max(80, Math.min(720, d.y + Math.sin(w) * y))
            }), l = !0;
          }
        }
    }
  }
  return r;
}
function Bp(e, t, n, r) {
  const o = new Map(r), l = t.length;
  if (l === 0)
    return o;
  const s = 160 + Math.max(0, l - 8) * 20, u = 40, a = st - 40, d = 40, p = ht - 40, m = -Math.PI / 2, v = Cs * 2.8, w = t.map((f, c) => {
    const h = m + 2 * Math.PI * c / l;
    return {
      entity: f,
      x: Math.max(u, Math.min(a, n.x + s * Math.cos(h))),
      y: Math.max(d, Math.min(p, n.y + s * Math.sin(h)))
    };
  });
  let y = !0, N = 0;
  for (; y && N < 15; ) {
    y = !1, N++;
    for (let f = 0; f < w.length; f++)
      for (let c = f + 1; c < w.length; c++) {
        const h = w[f], g = w[c], E = h.x - g.x, C = h.y - g.y, S = Math.sqrt(E * E + C * C);
        if (S < v) {
          y = !0;
          const P = Math.atan2(C, E), I = (v - S) / 2 + 10;
          h.x = Math.max(u, Math.min(a, h.x + Math.cos(P) * I)), h.y = Math.max(d, Math.min(p, h.y + Math.sin(P) * I)), g.x = Math.max(u, Math.min(a, g.x - Math.cos(P) * I)), g.y = Math.max(d, Math.min(p, g.y - Math.sin(P) * I));
        }
      }
  }
  return w.forEach(({ entity: f, x: c, y: h }) => {
    o.set(f.id, { x: c, y: h });
  }), o;
}
function Wp(e, t) {
  const n = t ? "-highlight" : "";
  switch (e) {
    case "OneToOne":
      return { start: "", end: "" };
    case "OneToMany":
      return { start: "", end: `url(#arrowhead${n})` };
    case "ManyToOne":
      return { start: `url(#arrowhead-reverse${n})`, end: "" };
    case "ManyToMany":
      return {
        start: `url(#arrowhead-reverse${n})`,
        end: `url(#arrowhead${n})`
      };
    default:
      return { start: "", end: `url(#arrowhead${n})` };
  }
}
const Hp = ({
  filteredDefinitions: e,
  allDefinitions: t,
  selectedEntity: n,
  focusedNode: r,
  highlightedPaths: o,
  networkTransform: l,
  nodePositions: i,
  isDragging: s,
  draggedNode: u,
  onEntityClick: a,
  onReset: d,
  onZoomIn: p,
  onZoomOut: m,
  onWheel: v,
  onMouseDown: w,
  onMouseMove: y,
  onMouseUp: N,
  onNodeMouseDown: f
}) => {
  const c = O.useMemo(
    () => e.reduce(
      (g, E) => g + wt(E, t).length,
      0
    ),
    [e, t]
  ), h = O.useMemo(() => {
    const g = /* @__PURE__ */ new Set(), E = [], C = 30;
    return e.forEach((S) => {
      const P = wt(S, t), I = sn(S, e, i);
      P.forEach(($) => {
        const V = `${S.id}->${$.id}`, Se = `${$.id}->${S.id}`, B = S.relations.find(
          (T) => T.target === $.name || T.target === $.id.toString()
        ), dt = (B == null ? void 0 : B.cardinality) === "ManyToMany";
        if (!dt && (g.has(V) || g.has(Se)) || (dt || g.add(V), !e.some((T) => T.id === $.id)))
          return;
        const Ke = sn($, e, i), nt = Ke.x - I.x, ce = Ke.y - I.y, _ = Math.sqrt(nt * nt + ce * ce);
        if (_ < 20)
          return;
        const z = (_ - C) / _, L = I.x + nt * C / _, K = I.y + ce * C / _, b = I.x + nt * z, It = I.y + ce * z, Qe = `${S.id}-${$.id}`, nn = !!(r && (S.id === r.id || $.id === r.id)), rt = !!(n && (S.id === n.id || $.id === n.id));
        if (r && !nn)
          return;
        const Ct = o.has(Qe) || rt;
        E.push({
          key: Qe,
          x1: L,
          y1: K,
          x2: b,
          y2: It,
          highlighted: Ct,
          arrows: Wp(B == null ? void 0 : B.cardinality, Ct)
        });
      });
    }), E;
  }, [
    e,
    t,
    i,
    r,
    n,
    o
  ]);
  return /* @__PURE__ */ R("div", { className: "network-view", children: [
    /* @__PURE__ */ R("div", { className: "network-controls", children: [
      /* @__PURE__ */ R("div", { className: "network-info", children: [
        "Network view: ",
        e.length,
        " nodes, ",
        c,
        " connections",
        r && /* @__PURE__ */ R("span", { className: "focused-info", children: [
          " | Focused: ",
          r.name
        ] })
      ] }),
      /* @__PURE__ */ R("div", { className: "network-zoom-controls", children: [
        /* @__PURE__ */ k(
          "button",
          {
            type: "button",
            className: "zoom-btn",
            onClick: m,
            title: "Zoom out",
            "aria-label": "Zoom out",
            children: "−"
          }
        ),
        /* @__PURE__ */ R("span", { className: "zoom-level", children: [
          Math.round(l.scale * 100),
          "%"
        ] }),
        /* @__PURE__ */ k(
          "button",
          {
            type: "button",
            className: "zoom-btn",
            onClick: p,
            title: "Zoom in",
            "aria-label": "Zoom in",
            children: "+"
          }
        ),
        /* @__PURE__ */ k(
          "button",
          {
            type: "button",
            className: "reset-btn",
            onClick: d,
            title: "Reset view",
            "aria-label": "Reset view",
            children: "Reset"
          }
        )
      ] }),
      e.length > Pp && /* @__PURE__ */ R("div", { className: "performance-warning", role: "status", children: [
        "Large network (",
        e.length,
        " nodes) — use search to filter for better performance"
      ] })
    ] }),
    /* @__PURE__ */ k(
      "div",
      {
        className: `network-container ${s || u ? "dragging" : ""}`,
        onWheel: v,
        onMouseDown: w,
        onMouseMove: y,
        onMouseUp: N,
        onMouseLeave: N,
        children: /* @__PURE__ */ R(
          "svg",
          {
            className: "network-svg",
            width: "100%",
            height: "100%",
            viewBox: `0 0 ${st} ${ht}`,
            role: "img",
            "aria-label": "Entity definition relationship network",
            children: [
              /* @__PURE__ */ R("defs", { children: [
                /* @__PURE__ */ k("marker", { id: "arrowhead", markerWidth: "10", markerHeight: "7", refX: "9", refY: "3.5", orient: "auto", children: /* @__PURE__ */ k("polygon", { points: "0 0, 10 3.5, 0 7", fill: "#b0bec5" }) }),
                /* @__PURE__ */ k(
                  "marker",
                  {
                    id: "arrowhead-highlight",
                    markerWidth: "10",
                    markerHeight: "7",
                    refX: "9",
                    refY: "3.5",
                    orient: "auto",
                    children: /* @__PURE__ */ k("polygon", { points: "0 0, 10 3.5, 0 7", fill: "#2c5aa0" })
                  }
                ),
                /* @__PURE__ */ k(
                  "marker",
                  {
                    id: "arrowhead-reverse",
                    markerWidth: "10",
                    markerHeight: "7",
                    refX: "1",
                    refY: "3.5",
                    orient: "auto",
                    children: /* @__PURE__ */ k("polygon", { points: "10 0, 0 3.5, 10 7", fill: "#b0bec5" })
                  }
                ),
                /* @__PURE__ */ k(
                  "marker",
                  {
                    id: "arrowhead-reverse-highlight",
                    markerWidth: "10",
                    markerHeight: "7",
                    refX: "1",
                    refY: "3.5",
                    orient: "auto",
                    children: /* @__PURE__ */ k("polygon", { points: "10 0, 0 3.5, 10 7", fill: "#2c5aa0" })
                  }
                )
              ] }),
              /* @__PURE__ */ R(
                "g",
                {
                  transform: `translate(${l.x}, ${l.y}) scale(${l.scale})`,
                  children: [
                    h.map((g) => /* @__PURE__ */ k(
                      "line",
                      {
                        x1: g.x1,
                        y1: g.y1,
                        x2: g.x2,
                        y2: g.y2,
                        className: `connection-line ${g.highlighted ? "highlighted" : ""}`,
                        strokeWidth: g.highlighted ? "3" : "1",
                        stroke: g.highlighted ? "#2c5aa0" : "#b0bec5",
                        strokeOpacity: g.highlighted ? "0.8" : "0.3",
                        markerStart: g.arrows.start,
                        markerEnd: g.arrows.end
                      },
                      g.key
                    )),
                    e.map((g) => {
                      const E = wt(g, t), C = sn(g, e, i), S = 20 + Math.min(E.length, 10), P = Er(g), I = (r == null ? void 0 : r.id) === g.id, $ = (n == null ? void 0 : n.id) === g.id, V = !!(r && wt(r, t).some((B) => B.id === g.id)), Se = !!(r && !I && !V);
                      return /* @__PURE__ */ R("g", { className: "network-node-group", children: [
                        /* @__PURE__ */ k(
                          "circle",
                          {
                            cx: C.x,
                            cy: C.y,
                            r: S,
                            className: `network-node ${$ ? "selected" : ""} ${I ? "focused" : ""} ${Se ? "hidden" : ""}`,
                            fill: $ ? P : "white",
                            stroke: P,
                            strokeWidth: $ ? 4 : 2.5,
                            onClick: (B) => {
                              B.stopPropagation(), a(g);
                            },
                            onMouseDown: (B) => f(B, g),
                            style: { cursor: (u == null ? void 0 : u.id) === g.id ? "grabbing" : "grab" }
                          }
                        ),
                        /* @__PURE__ */ k(
                          "text",
                          {
                            x: C.x,
                            y: C.y + 3,
                            className: `network-count ${Se ? "hidden" : ""}`,
                            textAnchor: "middle",
                            fill: $ ? "white" : P,
                            style: { pointerEvents: "none" },
                            children: E.length
                          }
                        ),
                        /* @__PURE__ */ k(
                          "text",
                          {
                            x: C.x,
                            y: C.y + S + 12,
                            className: `network-label ${Se ? "hidden" : ""}`,
                            textAnchor: "middle",
                            fill: P,
                            style: { pointerEvents: "none" },
                            children: g.name.length > 12 ? `${g.name.substring(0, 9)}...` : g.name
                          }
                        )
                      ] }, g.id);
                    })
                  ]
                }
              )
            ]
          }
        )
      }
    )
  ] });
};
function Vp(e) {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
}
function Kp(e) {
  const t = [];
  return e.forEach((n, r) => {
    if (!n || typeof n != "object")
      return;
    const o = n, l = {
      id: o.id ?? o.Id ?? r,
      name: o.name ?? o.Name ?? o.identifier ?? o.Identifier ?? `Definition ${o.id ?? r}`,
      is_built_in: !!o.is_built_in,
      is_taxonomy_item_definition: !!o.is_taxonomy_item_definition,
      relations: [],
      properties: [],
      description: o.description ?? o.Description ?? ""
    }, i = o.member_groups;
    Array.isArray(i) && i.forEach((s) => {
      if (!s || typeof s != "object")
        return;
      const u = s.members;
      Array.isArray(u) && u.forEach((a) => {
        var p;
        if (!a || typeof a != "object")
          return;
        const d = a;
        if (d.type === "Relation" && d.associated_entitydefinition) {
          const v = d.associated_entitydefinition.href ?? "", y = {
            target: v ? Vp(v) : "",
            type: `${d.role ?? "unknown"}-${d.cardinality ?? "unknown"}`,
            name: d.name,
            role: d.role,
            cardinality: d.cardinality,
            isTaxonomy: !!d.is_taxonomy_relation,
            isPath: !!d.is_path_relation,
            allowNavigation: !!d.allow_navigation,
            labels: d.labels ?? {}
          };
          l.relations.push(y);
        } else if (d.type !== "Relation") {
          const m = {
            name: d.name,
            type: d.type,
            contentType: d.content_type,
            isMandatory: !!d.is_mandatory,
            isMultilanguage: !!d.is_multilanguage,
            isMultivalue: !!d.is_multivalue,
            is_system_owned: !!d.is_system_owned,
            labels: d.labels ?? {},
            helptext: d.helptext ?? {}
          };
          (p = l.properties) == null || p.push(m);
        }
      });
    }), t.push(l);
  }), t.forEach((n) => {
    n.relations.forEach((r) => {
      const o = t.find(
        (l) => l.name === r.target || l.name.endsWith(r.target) || r.target.endsWith(l.name)
      );
      o && (r.target = o.name);
    });
  }), xi(`Parsed ${t.length} entity definitions`), t;
}
const Qp = ({ client: e, options: t, entity: n }) => {
  const [r, o] = O.useState([]), [l, i] = O.useState(!0), [s, u] = O.useState(null), [a, d] = O.useState(null), [p, m] = O.useState(""), [v, w] = O.useState({ current: 0, total: 0 }), [y, N] = O.useState("network"), [f, c] = O.useState({
    x: 0,
    y: 0,
    scale: 1
  }), [h, g] = O.useState(/* @__PURE__ */ new Set()), [E, C] = O.useState(null), [S, P] = O.useState("none"), [I, $] = O.useState(!1), [V, Se] = O.useState({ x: 0, y: 0 }), [B, dt] = O.useState(
    /* @__PURE__ */ new Map()
  ), [Ke, nt] = O.useState(null), ce = O.useMemo(
    () => zp(r, p, S, r),
    [r, p, S]
  );
  O.useEffect(() => {
    const T = new AbortController();
    let F = !0;
    return (async () => {
      i(!0), u(null);
      try {
        const le = await Op(e, {
          pageSize: t.pageSize,
          signal: T.signal,
          onProgress: (Sn) => {
            F && w(Sn);
          }
        });
        if (!F)
          return;
        const Ye = Kp(le);
        if (Ye.length === 0)
          throw new Error("No entity definitions found");
        o(Ye), i(!1);
      } catch (le) {
        if (!F || le instanceof DOMException && le.name === "AbortError")
          return;
        u(
          `Failed to load entity definitions: ${le instanceof Error ? le.message : String(le)}`
        ), i(!1);
      }
    })(), () => {
      F = !1, T.abort();
    };
  }, [e, t.pageSize]), O.useEffect(() => {
    if (r.length === 0 || B.size > 0)
      return;
    const T = /* @__PURE__ */ new Map();
    r.forEach((F) => {
      T.set(
        F.id,
        Fp(F, r)
      );
    }), dt(jp(T));
  }, [r, B.size]);
  const _ = O.useCallback(
    (T) => {
      T && (d(T), K(T.id));
    },
    []
  );
  O.useEffect(() => {
    if (r.length === 0)
      return;
    const T = t.entityId ?? (n == null ? void 0 : n.id);
    if (typeof T == "number") {
      const F = r.find((fe) => fe.id === T);
      if (F) {
        _(F);
        return;
      }
    }
    if (n) {
      const F = kp(n), fe = r.find((le) => le.name === F);
      fe && _(fe);
    }
  }, [r, t.entityId, n, _]);
  const z = O.useCallback(
    (T) => {
      if (y !== "network")
        return;
      const F = sn(T, ce, B);
      c((fe) => ({
        ...fe,
        x: 600 - F.x * fe.scale,
        y: 400 - F.y * fe.scale
      }));
    },
    [y, ce, B]
  ), L = O.useCallback(
    (T) => {
      if ((a == null ? void 0 : a.id) === T.id) {
        d(null), C(null), g(/* @__PURE__ */ new Set());
        return;
      }
      if (d(T), K(T.id), y === "network") {
        C(T);
        const F = wt(T, r), fe = /* @__PURE__ */ new Set();
        F.forEach((Ye) => {
          fe.add(`${T.id}-${Ye.id}`), fe.add(`${Ye.id}-${T.id}`);
        }), g(fe);
        const le = sn(T, ce, B);
        dt(
          (Ye) => Bp(T, F, le, Ye)
        ), setTimeout(() => z(T), 50);
      }
    },
    [
      a,
      y,
      r,
      ce,
      B,
      z
    ]
  ), K = (T) => {
    setTimeout(() => {
      const F = document.querySelector(`[data-entity-id="${T}"]`);
      F == null || F.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }, b = () => {
    c({ x: 0, y: 0, scale: 1 }), C(null), g(/* @__PURE__ */ new Set()), d(null);
  }, It = (T) => {
    T.preventDefault();
    const F = T.deltaY > 0 ? 0.9 : 1.1, fe = T.currentTarget.getBoundingClientRect(), le = T.clientX - fe.left, Ye = T.clientY - fe.top, Sn = (le - f.x) / f.scale, Vl = (Ye - f.y) / f.scale, Kl = Math.max(0.3, Math.min(3, f.scale * F));
    c({
      x: le - Sn * Kl,
      y: Ye - Vl * Kl,
      scale: Kl
    });
  }, Qe = (T) => {
    const F = T.target;
    (F.tagName === "svg" || F.classList.contains("network-svg")) && ($(!0), Se({ x: T.clientX, y: T.clientY }), T.preventDefault());
  }, nn = (T) => {
    if (Ke) {
      const le = (T.clientX - V.x) / f.scale, Ye = (T.clientY - V.y) / f.scale, Sn = sn(Ke, ce, B);
      dt(
        (Vl) => new Map(Vl).set(Ke.id, {
          x: Sn.x + le,
          y: Sn.y + Ye
        })
      ), Se({ x: T.clientX, y: T.clientY });
      return;
    }
    if (!I)
      return;
    const F = T.clientX - V.x, fe = T.clientY - V.y;
    c((le) => ({
      ...le,
      x: le.x + F,
      y: le.y + fe
    })), Se({ x: T.clientX, y: T.clientY }), T.preventDefault();
  }, rt = () => {
    if (Ke) {
      const T = sn(Ke, ce, B);
      dt(Up(T, Ke.id, B));
    }
    $(!1), nt(null);
  }, Ct = (T, F) => {
    T.stopPropagation(), nt(F), Se({ x: T.clientX, y: T.clientY });
  };
  return l ? /* @__PURE__ */ k("div", { className: "ch-visualiser", children: /* @__PURE__ */ R("div", { className: "graph-loading", children: [
    /* @__PURE__ */ k("div", { children: "Loading entity definitions…" }),
    v.total > 0 && /* @__PURE__ */ R("div", { className: "loading-progress", children: [
      /* @__PURE__ */ k("div", { className: "progress-bar", children: /* @__PURE__ */ k(
        "div",
        {
          className: "progress-fill",
          style: {
            width: `${v.current / v.total * 100}%`
          }
        }
      ) }),
      /* @__PURE__ */ R("div", { className: "progress-text", children: [
        v.current,
        " of ",
        v.total,
        " loaded"
      ] })
    ] })
  ] }) }) : s ? /* @__PURE__ */ k("div", { className: "ch-visualiser", children: /* @__PURE__ */ R("div", { className: "graph-error", role: "alert", children: [
    /* @__PURE__ */ k("p", { children: s }),
    /* @__PURE__ */ k(
      "button",
      {
        type: "button",
        className: "retry-button",
        onClick: () => window.location.reload(),
        children: "Retry"
      }
    )
  ] }) }) : /* @__PURE__ */ k("div", { className: "ch-visualiser", children: /* @__PURE__ */ R("div", { className: "contentful-layout three-column", children: [
    /* @__PURE__ */ k(
      Dp,
      {
        definitions: r,
        filteredDefinitions: ce,
        selectedEntity: a,
        searchTerm: p,
        sortOrder: S,
        onSearchChange: m,
        onSortChange: P,
        onEntityClick: L
      }
    ),
    /* @__PURE__ */ R("div", { className: "main-content", children: [
      /* @__PURE__ */ R("div", { className: "content-header", children: [
        /* @__PURE__ */ k("h2", { children: "Entity relationship map" }),
        /* @__PURE__ */ R("div", { className: "header-controls", children: [
          /* @__PURE__ */ R("div", { className: "view-toggle", role: "tablist", "aria-label": "View mode", children: [
            /* @__PURE__ */ k(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": y === "grid",
                className: `view-button ${y === "grid" ? "active" : ""}`,
                onClick: () => N("grid"),
                children: "Grid"
              }
            ),
            /* @__PURE__ */ k(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": y === "network",
                className: `view-button ${y === "network" ? "active" : ""}`,
                onClick: () => N("network"),
                children: "Network"
              }
            )
          ] }),
          /* @__PURE__ */ R("div", { className: "header-info", children: [
            r.length,
            " definitions loaded"
          ] })
        ] })
      ] }),
      y === "grid" ? /* @__PURE__ */ k(
        Ap,
        {
          definitions: ce,
          allDefinitions: r,
          selectedEntity: a,
          onEntityClick: L
        }
      ) : /* @__PURE__ */ k(
        Hp,
        {
          filteredDefinitions: ce,
          allDefinitions: r,
          selectedEntity: a,
          focusedNode: E,
          highlightedPaths: h,
          networkTransform: f,
          nodePositions: B,
          isDragging: I,
          draggedNode: Ke,
          onEntityClick: L,
          onReset: b,
          onZoomIn: () => c((T) => ({
            ...T,
            scale: Math.min(T.scale * 1.3, 3)
          })),
          onZoomOut: () => c((T) => ({
            ...T,
            scale: Math.max(T.scale / 1.3, 0.3)
          })),
          onWheel: It,
          onMouseDown: Qe,
          onMouseMove: nn,
          onMouseUp: rt,
          onNodeMouseDown: Ct
        }
      )
    ] }),
    /* @__PURE__ */ k(
      Ip,
      {
        definitions: r,
        selectedEntity: a,
        options: t,
        onEntityClick: L
      }
    )
  ] }) });
};
function Yp(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const $u = "$$material";
function ge() {
  return ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ge.apply(null, arguments);
}
function ul(e, t) {
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
var Xp = !1;
function Gp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Zp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Jp = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var l;
      r.tags.length === 0 ? r.insertionPoint ? l = r.insertionPoint.nextSibling : r.prepend ? l = r.container.firstChild : l = r.before : l = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, l), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !Xp : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Zp(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = Gp(o);
      try {
        l.insertRule(r, l.cssRules.length);
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
}(), Ce = "-ms-", Lo = "-moz-", j = "-webkit-", gc = "comm", Es = "rule", _s = "decl", qp = "@import", vc = "@keyframes", bp = "@layer", em = Math.abs, al = String.fromCharCode, tm = Object.assign;
function nm(e, t) {
  return ye(e, 0) ^ 45 ? (((t << 2 ^ ye(e, 0)) << 2 ^ ye(e, 1)) << 2 ^ ye(e, 2)) << 2 ^ ye(e, 3) : 0;
}
function wc(e) {
  return e.trim();
}
function rm(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function U(e, t, n) {
  return e.replace(t, n);
}
function Ci(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function _r(e, t, n) {
  return e.slice(t, n);
}
function yt(e) {
  return e.length;
}
function Ps(e) {
  return e.length;
}
function to(e, t) {
  return t.push(e), e;
}
function om(e, t) {
  return e.map(t).join("");
}
var cl = 1, Hn = 1, Sc = 0, Ie = 0, ie = 0, qn = "";
function fl(e, t, n, r, o, l, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: l, line: cl, column: Hn, length: i, return: "" };
}
function tr(e, t) {
  return tm(fl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function lm() {
  return ie;
}
function im() {
  return ie = Ie > 0 ? ye(qn, --Ie) : 0, Hn--, ie === 10 && (Hn = 1, cl--), ie;
}
function je() {
  return ie = Ie < Sc ? ye(qn, Ie++) : 0, Hn++, ie === 10 && (Hn = 1, cl++), ie;
}
function St() {
  return ye(qn, Ie);
}
function ko() {
  return Ie;
}
function Qr(e, t) {
  return _r(qn, e, t);
}
function Pr(e) {
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
function kc(e) {
  return cl = Hn = 1, Sc = yt(qn = e), Ie = 0, [];
}
function xc(e) {
  return qn = "", e;
}
function xo(e) {
  return wc(Qr(Ie - 1, Ei(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sm(e) {
  for (; (ie = St()) && ie < 33; )
    je();
  return Pr(e) > 2 || Pr(ie) > 3 ? "" : " ";
}
function um(e, t) {
  for (; --t && je() && !(ie < 48 || ie > 102 || ie > 57 && ie < 65 || ie > 70 && ie < 97); )
    ;
  return Qr(e, ko() + (t < 6 && St() == 32 && je() == 32));
}
function Ei(e) {
  for (; je(); )
    switch (ie) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ei(ie);
        break;
      case 40:
        e === 41 && Ei(e);
        break;
      case 92:
        je();
        break;
    }
  return Ie;
}
function am(e, t) {
  for (; je() && e + ie !== 47 + 10; )
    if (e + ie === 42 + 42 && St() === 47)
      break;
  return "/*" + Qr(t, Ie - 1) + "*" + al(e === 47 ? e : je());
}
function cm(e) {
  for (; !Pr(St()); )
    je();
  return Qr(e, Ie);
}
function fm(e) {
  return xc(Co("", null, null, null, [""], e = kc(e), 0, [0], e));
}
function Co(e, t, n, r, o, l, i, s, u) {
  for (var a = 0, d = 0, p = i, m = 0, v = 0, w = 0, y = 1, N = 1, f = 1, c = 0, h = "", g = o, E = l, C = r, S = h; N; )
    switch (w = c, c = je()) {
      case 40:
        if (w != 108 && ye(S, p - 1) == 58) {
          Ci(S += U(xo(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += xo(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += sm(w);
        break;
      case 92:
        S += um(ko() - 1, 7);
        continue;
      case 47:
        switch (St()) {
          case 42:
          case 47:
            to(dm(am(je(), ko()), t, n), u);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * y:
        s[a++] = yt(S) * f;
      case 125 * y:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            N = 0;
          case 59 + d:
            f == -1 && (S = U(S, /\f/g, "")), v > 0 && yt(S) - p && to(v > 32 ? Lu(S + ";", r, n, p - 1) : Lu(U(S, " ", "") + ";", r, n, p - 2), u);
            break;
          case 59:
            S += ";";
          default:
            if (to(C = zu(S, t, n, a, d, o, s, h, g = [], E = [], p), l), c === 123)
              if (d === 0)
                Co(S, t, C, C, g, l, p, s, E);
              else
                switch (m === 99 && ye(S, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Co(e, C, C, r && to(zu(e, C, C, 0, 0, o, s, h, o, g = [], p), E), o, E, p, s, r ? g : E);
                    break;
                  default:
                    Co(S, C, C, C, [""], E, 0, s, E);
                }
        }
        a = d = v = 0, y = f = 1, h = S = "", p = i;
        break;
      case 58:
        p = 1 + yt(S), v = w;
      default:
        if (y < 1) {
          if (c == 123)
            --y;
          else if (c == 125 && y++ == 0 && im() == 125)
            continue;
        }
        switch (S += al(c), c * y) {
          case 38:
            f = d > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            s[a++] = (yt(S) - 1) * f, f = 1;
            break;
          case 64:
            St() === 45 && (S += xo(je())), m = St(), d = p = yt(h = S += cm(ko())), c++;
            break;
          case 45:
            w === 45 && yt(S) == 2 && (y = 0);
        }
    }
  return l;
}
function zu(e, t, n, r, o, l, i, s, u, a, d) {
  for (var p = o - 1, m = o === 0 ? l : [""], v = Ps(m), w = 0, y = 0, N = 0; w < r; ++w)
    for (var f = 0, c = _r(e, p + 1, p = em(y = i[w])), h = e; f < v; ++f)
      (h = wc(y > 0 ? m[f] + " " + c : U(c, /&\f/g, m[f]))) && (u[N++] = h);
  return fl(e, t, n, o === 0 ? Es : s, u, a, d);
}
function dm(e, t, n) {
  return fl(e, t, n, gc, al(lm()), _r(e, 2, -2), 0);
}
function Lu(e, t, n, r) {
  return fl(e, t, n, _s, _r(e, 0, r), _r(e, r + 1, -1), r);
}
function In(e, t) {
  for (var n = "", r = Ps(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function pm(e, t, n, r) {
  switch (e.type) {
    case bp:
      if (e.children.length)
        break;
    case qp:
    case _s:
      return e.return = e.return || e.value;
    case gc:
      return "";
    case vc:
      return e.return = e.value + "{" + In(e.children, r) + "}";
    case Es:
      e.value = e.props.join(",");
  }
  return yt(n = In(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function mm(e) {
  var t = Ps(e);
  return function(n, r, o, l) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](n, r, o, l) || "";
    return i;
  };
}
function hm(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Cc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ym = function(t, n, r) {
  for (var o = 0, l = 0; o = l, l = St(), o === 38 && l === 12 && (n[r] = 1), !Pr(l); )
    je();
  return Qr(t, Ie);
}, gm = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Pr(o)) {
      case 0:
        o === 38 && St() === 12 && (n[r] = 1), t[r] += ym(Ie - 1, n, r);
        break;
      case 2:
        t[r] += xo(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = St() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += al(o);
    }
  while (o = je());
  return t;
}, vm = function(t, n) {
  return xc(gm(kc(t), n));
}, Iu = /* @__PURE__ */ new WeakMap(), wm = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Iu.get(r)) && !o) {
      Iu.set(t, !0);
      for (var l = [], i = vm(n, l), s = r.props, u = 0, a = 0; u < i.length; u++)
        for (var d = 0; d < s.length; d++, a++)
          t.props[a] = l[u] ? i[u].replace(/&\f/g, s[d]) : s[d] + " " + i[u];
    }
  }
}, Sm = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ec(e, t) {
  switch (nm(e, t)) {
    case 5103:
      return j + "print-" + e + e;
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
      return j + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return j + e + Lo + e + Ce + e + e;
    case 6828:
    case 4268:
      return j + e + Ce + e + e;
    case 6165:
      return j + e + Ce + "flex-" + e + e;
    case 5187:
      return j + e + U(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + Ce + "flex-$1$2") + e;
    case 5443:
      return j + e + Ce + "flex-item-" + U(e, /flex-|-self/, "") + e;
    case 4675:
      return j + e + Ce + "flex-line-pack" + U(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return j + e + Ce + U(e, "shrink", "negative") + e;
    case 5292:
      return j + e + Ce + U(e, "basis", "preferred-size") + e;
    case 6060:
      return j + "box-" + U(e, "-grow", "") + j + e + Ce + U(e, "grow", "positive") + e;
    case 4554:
      return j + U(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
    case 6187:
      return U(U(U(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, j + "$1$`$1");
    case 4968:
      return U(U(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + Ce + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, j + "$1$2") + e;
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
      if (yt(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45)
              break;
          case 102:
            return U(e, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + Lo + (ye(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ci(e, "stretch") ? Ec(U(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ye(e, yt(e) - 3 - (~Ci(e, "!important") && 10))) {
        case 107:
          return U(e, ":", ":" + j) + e;
        case 101:
          return U(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + j + (ye(e, 14) === 45 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + Ce + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ye(e, t + 11)) {
        case 114:
          return j + e + Ce + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return j + e + Ce + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return j + e + Ce + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return j + e + Ce + e + e;
  }
  return e;
}
var km = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case _s:
        t.return = Ec(t.value, t.length);
        break;
      case vc:
        return In([tr(t, {
          value: U(t.value, "@", "@" + j)
        })], o);
      case Es:
        if (t.length)
          return om(t.props, function(l) {
            switch (rm(l, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return In([tr(t, {
                  props: [U(l, /:(read-\w+)/, ":" + Lo + "$1")]
                })], o);
              case "::placeholder":
                return In([tr(t, {
                  props: [U(l, /:(plac\w+)/, ":" + j + "input-$1")]
                }), tr(t, {
                  props: [U(l, /:(plac\w+)/, ":" + Lo + "$1")]
                }), tr(t, {
                  props: [U(l, /:(plac\w+)/, Ce + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, xm = [km], Cm = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var N = y.getAttribute("data-emotion");
      N.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || xm, l = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var N = y.getAttribute("data-emotion").split(" "), f = 1; f < N.length; f++)
        l[N[f]] = !0;
      s.push(y);
    }
  );
  var u, a = [wm, Sm];
  {
    var d, p = [pm, hm(function(y) {
      d.insert(y);
    })], m = mm(a.concat(o, p)), v = function(N) {
      return In(fm(N), m);
    };
    u = function(N, f, c, h) {
      d = c, v(N ? N + "{" + f.styles + "}" : f.styles), h && (w.inserted[f.name] = !0);
    };
  }
  var w = {
    key: n,
    sheet: new Jp({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: l,
    registered: {},
    insert: u
  };
  return w.sheet.hydrate(s), w;
}, _c = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me = typeof Symbol == "function" && Symbol.for, Ns = me ? Symbol.for("react.element") : 60103, Ms = me ? Symbol.for("react.portal") : 60106, dl = me ? Symbol.for("react.fragment") : 60107, pl = me ? Symbol.for("react.strict_mode") : 60108, ml = me ? Symbol.for("react.profiler") : 60114, hl = me ? Symbol.for("react.provider") : 60109, yl = me ? Symbol.for("react.context") : 60110, Ts = me ? Symbol.for("react.async_mode") : 60111, gl = me ? Symbol.for("react.concurrent_mode") : 60111, vl = me ? Symbol.for("react.forward_ref") : 60112, wl = me ? Symbol.for("react.suspense") : 60113, Em = me ? Symbol.for("react.suspense_list") : 60120, Sl = me ? Symbol.for("react.memo") : 60115, kl = me ? Symbol.for("react.lazy") : 60116, _m = me ? Symbol.for("react.block") : 60121, Pm = me ? Symbol.for("react.fundamental") : 60117, Nm = me ? Symbol.for("react.responder") : 60118, Mm = me ? Symbol.for("react.scope") : 60119;
function We(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ns:
        switch (e = e.type, e) {
          case Ts:
          case gl:
          case dl:
          case ml:
          case pl:
          case wl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case yl:
              case vl:
              case kl:
              case Sl:
              case hl:
                return e;
              default:
                return t;
            }
        }
      case Ms:
        return t;
    }
  }
}
function Pc(e) {
  return We(e) === gl;
}
H.AsyncMode = Ts;
H.ConcurrentMode = gl;
H.ContextConsumer = yl;
H.ContextProvider = hl;
H.Element = Ns;
H.ForwardRef = vl;
H.Fragment = dl;
H.Lazy = kl;
H.Memo = Sl;
H.Portal = Ms;
H.Profiler = ml;
H.StrictMode = pl;
H.Suspense = wl;
H.isAsyncMode = function(e) {
  return Pc(e) || We(e) === Ts;
};
H.isConcurrentMode = Pc;
H.isContextConsumer = function(e) {
  return We(e) === yl;
};
H.isContextProvider = function(e) {
  return We(e) === hl;
};
H.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ns;
};
H.isForwardRef = function(e) {
  return We(e) === vl;
};
H.isFragment = function(e) {
  return We(e) === dl;
};
H.isLazy = function(e) {
  return We(e) === kl;
};
H.isMemo = function(e) {
  return We(e) === Sl;
};
H.isPortal = function(e) {
  return We(e) === Ms;
};
H.isProfiler = function(e) {
  return We(e) === ml;
};
H.isStrictMode = function(e) {
  return We(e) === pl;
};
H.isSuspense = function(e) {
  return We(e) === wl;
};
H.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === dl || e === gl || e === ml || e === pl || e === wl || e === Em || typeof e == "object" && e !== null && (e.$$typeof === kl || e.$$typeof === Sl || e.$$typeof === hl || e.$$typeof === yl || e.$$typeof === vl || e.$$typeof === Pm || e.$$typeof === Nm || e.$$typeof === Mm || e.$$typeof === _m);
};
H.typeOf = We;
_c.exports = H;
var Tm = _c.exports, Nc = Tm, Rm = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Om = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Mc = {};
Mc[Nc.ForwardRef] = Rm;
Mc[Nc.Memo] = Om;
var $m = !0;
function Tc(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Rs = function(t, n, r) {
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
  $m === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Os = function(t, n, r) {
  Rs(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var l = n;
    do
      t.insert(n === l ? "." + o : "", l, t.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function zm(e) {
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
var Lm = {
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
}, Im = !1, Am = /[A-Z]|^ms/g, Dm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Rc = function(t) {
  return t.charCodeAt(1) === 45;
}, Au = function(t) {
  return t != null && typeof t != "boolean";
}, Yl = /* @__PURE__ */ Cc(function(e) {
  return Rc(e) ? e : e.replace(Am, "-$&").toLowerCase();
}), Du = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Dm, function(r, o, l) {
          return gt = {
            name: o,
            styles: l,
            next: gt
          }, o;
        });
  }
  return Lm[t] !== 1 && !Rc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Fm = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Nr(e, t, n) {
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
        return gt = {
          name: o.name,
          styles: o.styles,
          next: gt
        }, o.name;
      var l = n;
      if (l.styles !== void 0) {
        var i = l.next;
        if (i !== void 0)
          for (; i !== void 0; )
            gt = {
              name: i.name,
              styles: i.styles,
              next: gt
            }, i = i.next;
        var s = l.styles + ";";
        return s;
      }
      return jm(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var u = gt, a = n(e);
        return gt = u, Nr(e, t, a);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function jm(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Nr(e, t, n[o]) + ";";
  else
    for (var l in n) {
      var i = n[l];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0 ? r += l + "{" + t[s] + "}" : Au(s) && (r += Yl(l) + ":" + Du(l, s) + ";");
      } else {
        if (l === "NO_COMPONENT_SELECTOR" && Im)
          throw new Error(Fm);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var u = 0; u < i.length; u++)
            Au(i[u]) && (r += Yl(l) + ":" + Du(l, i[u]) + ";");
        else {
          var a = Nr(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              r += Yl(l) + ":" + a + ";";
              break;
            }
            default:
              r += l + "{" + a + "}";
          }
        }
      }
    }
  return r;
}
var Fu = /label:\s*([^\s;{]+)\s*(;|$)/g, gt;
function xl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  gt = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    r = !1, o += Nr(n, t, l);
  else {
    var i = l;
    o += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Nr(n, t, e[s]), r) {
      var u = l;
      o += u[s];
    }
  Fu.lastIndex = 0;
  for (var a = "", d; (d = Fu.exec(o)) !== null; )
    a += "-" + d[1];
  var p = zm(o) + a;
  return {
    name: p,
    styles: o,
    next: gt
  };
}
var Um = function(t) {
  return t();
}, Oc = ki["useInsertionEffect"] ? ki["useInsertionEffect"] : !1, $c = Oc || Um, ju = Oc || O.useLayoutEffect, Bm = !1, zc = /* @__PURE__ */ O.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Cm({
    key: "css"
  }) : null
);
zc.Provider;
var $s = function(t) {
  return /* @__PURE__ */ O.forwardRef(function(n, r) {
    var o = O.useContext(zc);
    return t(n, o, r);
  });
}, Yr = /* @__PURE__ */ O.createContext({}), zs = {}.hasOwnProperty, _i = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Wm = function(t, n) {
  var r = {};
  for (var o in n)
    zs.call(n, o) && (r[o] = n[o]);
  return r[_i] = t, r;
}, Hm = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Rs(n, r, o), $c(function() {
    return Os(n, r, o);
  }), null;
}, Vm = /* @__PURE__ */ $s(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[_i], l = [r], i = "";
  typeof e.className == "string" ? i = Tc(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var s = xl(l, void 0, O.useContext(Yr));
  i += t.key + "-" + s.name;
  var u = {};
  for (var a in e)
    zs.call(e, a) && a !== "css" && a !== _i && !Bm && (u[a] = e[a]);
  return u.className = i, n && (u.ref = n), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(Hm, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ O.createElement(o, u));
}), Km = Vm, Xl = { exports: {} }, Uu;
function Qm() {
  return Uu || (Uu = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var o = arguments[r];
          for (var l in o)
            ({}).hasOwnProperty.call(o, l) && (n[l] = o[l]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Xl)), Xl.exports;
}
Qm();
var Bu = function(t, n) {
  var r = arguments;
  if (n == null || !zs.call(n, "css"))
    return O.createElement.apply(void 0, r);
  var o = r.length, l = new Array(o);
  l[0] = Km, l[1] = Wm(t, n);
  for (var i = 2; i < o; i++)
    l[i] = r[i];
  return O.createElement.apply(null, l);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Bu || (Bu = {}));
var Ym = /* @__PURE__ */ $s(function(e, t) {
  var n = e.styles, r = xl([n], void 0, O.useContext(Yr)), o = O.useRef();
  return ju(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({
      key: l,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, u = document.querySelector('style[data-emotion="' + l + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), u !== null && (s = !0, u.setAttribute("data-emotion", l), i.hydrate([u])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), ju(function() {
    var l = o.current, i = l[0], s = l[1];
    if (s) {
      l[1] = !1;
      return;
    }
    if (r.next !== void 0 && Os(t, r.next, !0), i.tags.length) {
      var u = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = u, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), Xm = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gm = /* @__PURE__ */ Cc(
  function(e) {
    return Xm.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Zm = !1, Jm = Gm, qm = function(t) {
  return t !== "theme";
}, Wu = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Jm : qm;
}, Hu = function(t, n, r) {
  var o;
  if (n) {
    var l = n.shouldForwardProp;
    o = t.__emotion_forwardProp && l ? function(i) {
      return t.__emotion_forwardProp(i) && l(i);
    } : l;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, bm = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Rs(n, r, o), $c(function() {
    return Os(n, r, o);
  }), null;
}, eh = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, l, i;
  n !== void 0 && (l = n.label, i = n.target);
  var s = Hu(t, n, r), u = s || Wu(o), a = !u("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (l !== void 0 && p.push("label:" + l + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      var m = d[0];
      p.push(m[0]);
      for (var v = d.length, w = 1; w < v; w++)
        p.push(d[w], m[w]);
    }
    var y = $s(function(N, f, c) {
      var h = a && N.as || o, g = "", E = [], C = N;
      if (N.theme == null) {
        C = {};
        for (var S in N)
          C[S] = N[S];
        C.theme = O.useContext(Yr);
      }
      typeof N.className == "string" ? g = Tc(f.registered, E, N.className) : N.className != null && (g = N.className + " ");
      var P = xl(p.concat(E), f.registered, C);
      g += f.key + "-" + P.name, i !== void 0 && (g += " " + i);
      var I = a && s === void 0 ? Wu(h) : u, $ = {};
      for (var V in N)
        a && V === "as" || I(V) && ($[V] = N[V]);
      return $.className = g, c && ($.ref = c), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(bm, {
        cache: f,
        serialized: P,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ O.createElement(h, $));
    });
    return y.displayName = l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = p, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
      value: function() {
        return i === void 0 && Zm ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), y.withComponent = function(N, f) {
      var c = e(N, ge({}, n, f, {
        shouldForwardProp: Hu(y, f, !0)
      }));
      return c.apply(void 0, p);
    }, y;
  };
}, th = [
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
], Vu = eh.bind(null);
th.forEach(function(e) {
  Vu[e] = Vu(e);
});
function nh(e) {
  return e == null || Object.keys(e).length === 0;
}
function rh(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ k(Ym, {
    styles: typeof t == "function" ? (o) => t(nh(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Ku = [];
function oh(e) {
  return Ku[0] = e, xl(Ku);
}
function xn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Lc(e) {
  if (/* @__PURE__ */ O.isValidElement(e) || !xn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Lc(e[n]);
  }), t;
}
function Io(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? ge({}, e) : e;
  return xn(e) && xn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ O.isValidElement(t[o]) ? r[o] = t[o] : xn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && xn(e[o]) ? r[o] = Io(e[o], t[o], n) : n.clone ? r[o] = xn(t[o]) ? Lc(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const lh = ["values", "unit", "step"], ih = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ge({}, n, {
    [r.key]: r.val
  }), {});
};
function sh(e) {
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
  } = e, o = ul(e, lh), l = ih(t), i = Object.keys(l);
  function s(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function u(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function a(m, v) {
    const w = i.indexOf(v);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(w !== -1 && typeof t[i[w]] == "number" ? t[i[w]] : v) - r / 100}${n})`;
  }
  function d(m) {
    return i.indexOf(m) + 1 < i.length ? a(m, i[i.indexOf(m) + 1]) : s(m);
  }
  function p(m) {
    const v = i.indexOf(m);
    return v === 0 ? s(i[1]) : v === i.length - 1 ? u(i[v]) : a(m, i[i.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return ge({
    keys: i,
    values: l,
    up: s,
    down: u,
    between: a,
    only: d,
    not: p,
    unit: n
  }, o);
}
const uh = {
  borderRadius: 4
}, ah = uh;
function mr(e, t) {
  return t ? Io(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ls = {
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
}, Qu = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ls[e]}px)`
};
function Tt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const l = r.breakpoints || Qu;
    return t.reduce((i, s, u) => (i[l.up(l.keys[u])] = n(t[u]), i), {});
  }
  if (typeof t == "object") {
    const l = r.breakpoints || Qu;
    return Object.keys(t).reduce((i, s) => {
      if (Object.keys(l.values || Ls).indexOf(s) !== -1) {
        const u = l.up(s);
        i[u] = n(t[s], s);
      } else {
        const u = s;
        i[u] = t[u];
      }
      return i;
    }, {});
  }
  return n(t);
}
function ch(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const l = e.up(o);
    return r[l] = {}, r;
  }, {})) || {};
}
function Yu(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Ic(e) {
  if (typeof e != "string")
    throw new Error(Yp(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Cl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, l) => o && o[l] ? o[l] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Ao(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Cl(e, n) || r, t && (o = t(o, r, e)), o;
}
function oe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, l = (i) => {
    if (i[t] == null)
      return null;
    const s = i[t], u = i.theme, a = Cl(u, r) || {};
    return Tt(i, s, (p) => {
      let m = Ao(a, o, p);
      return p === m && typeof p == "string" && (m = Ao(a, o, `${t}${p === "default" ? "" : Ic(p)}`, p)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return l.propTypes = {}, l.filterProps = [t], l;
}
function fh(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const dh = {
  m: "margin",
  p: "padding"
}, ph = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Xu = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, mh = fh((e) => {
  if (e.length > 2)
    if (Xu[e])
      e = Xu[e];
    else
      return [e];
  const [t, n] = e.split(""), r = dh[t], o = ph[n] || "";
  return Array.isArray(o) ? o.map((l) => r + l) : [r + o];
}), Is = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], As = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Is, ...As];
function Xr(e, t, n, r) {
  var o;
  const l = (o = Cl(e, t, !1)) != null ? o : n;
  return typeof l == "number" ? (i) => typeof i == "string" ? i : l * i : Array.isArray(l) ? (i) => typeof i == "string" ? i : l[i] : typeof l == "function" ? l : () => {
  };
}
function Ac(e) {
  return Xr(e, "spacing", 8);
}
function Gr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function hh(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Gr(t, n), r), {});
}
function yh(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = mh(n), l = hh(o, r), i = e[n];
  return Tt(e, i, l);
}
function Dc(e, t) {
  const n = Ac(e.theme);
  return Object.keys(e).map((r) => yh(e, t, r, n)).reduce(mr, {});
}
function ee(e) {
  return Dc(e, Is);
}
ee.propTypes = {};
ee.filterProps = Is;
function te(e) {
  return Dc(e, As);
}
te.propTypes = {};
te.filterProps = As;
function gh(e = 8) {
  if (e.mui)
    return e;
  const t = Ac({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((l) => {
    const i = t(l);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function El(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((l) => {
    r[l] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, l) => t[l] ? mr(o, t[l](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Xe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function tt(e, t) {
  return oe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const vh = tt("border", Xe), wh = tt("borderTop", Xe), Sh = tt("borderRight", Xe), kh = tt("borderBottom", Xe), xh = tt("borderLeft", Xe), Ch = tt("borderColor"), Eh = tt("borderTopColor"), _h = tt("borderRightColor"), Ph = tt("borderBottomColor"), Nh = tt("borderLeftColor"), Mh = tt("outline", Xe), Th = tt("outlineColor"), _l = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Xr(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Gr(t, r)
    });
    return Tt(e, e.borderRadius, n);
  }
  return null;
};
_l.propTypes = {};
_l.filterProps = ["borderRadius"];
El(vh, wh, Sh, kh, xh, Ch, Eh, _h, Ph, Nh, _l, Mh, Th);
const Pl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Xr(e.theme, "spacing", 8), n = (r) => ({
      gap: Gr(t, r)
    });
    return Tt(e, e.gap, n);
  }
  return null;
};
Pl.propTypes = {};
Pl.filterProps = ["gap"];
const Nl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Xr(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Gr(t, r)
    });
    return Tt(e, e.columnGap, n);
  }
  return null;
};
Nl.propTypes = {};
Nl.filterProps = ["columnGap"];
const Ml = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Xr(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Gr(t, r)
    });
    return Tt(e, e.rowGap, n);
  }
  return null;
};
Ml.propTypes = {};
Ml.filterProps = ["rowGap"];
const Rh = oe({
  prop: "gridColumn"
}), Oh = oe({
  prop: "gridRow"
}), $h = oe({
  prop: "gridAutoFlow"
}), zh = oe({
  prop: "gridAutoColumns"
}), Lh = oe({
  prop: "gridAutoRows"
}), Ih = oe({
  prop: "gridTemplateColumns"
}), Ah = oe({
  prop: "gridTemplateRows"
}), Dh = oe({
  prop: "gridTemplateAreas"
}), Fh = oe({
  prop: "gridArea"
});
El(Pl, Nl, Ml, Rh, Oh, $h, zh, Lh, Ih, Ah, Dh, Fh);
function An(e, t) {
  return t === "grey" ? t : e;
}
const jh = oe({
  prop: "color",
  themeKey: "palette",
  transform: An
}), Uh = oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: An
}), Bh = oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: An
});
El(jh, Uh, Bh);
function De(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Wh = oe({
  prop: "width",
  transform: De
}), Ds = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const l = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Ls[n];
      return l ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${l}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: l
      } : {
        maxWidth: De(n)
      };
    };
    return Tt(e, e.maxWidth, t);
  }
  return null;
};
Ds.filterProps = ["maxWidth"];
const Hh = oe({
  prop: "minWidth",
  transform: De
}), Vh = oe({
  prop: "height",
  transform: De
}), Kh = oe({
  prop: "maxHeight",
  transform: De
}), Qh = oe({
  prop: "minHeight",
  transform: De
});
oe({
  prop: "size",
  cssProperty: "width",
  transform: De
});
oe({
  prop: "size",
  cssProperty: "height",
  transform: De
});
const Yh = oe({
  prop: "boxSizing"
});
El(Wh, Ds, Hh, Vh, Kh, Qh, Yh);
const Xh = {
  // borders
  border: {
    themeKey: "borders",
    transform: Xe
  },
  borderTop: {
    themeKey: "borders",
    transform: Xe
  },
  borderRight: {
    themeKey: "borders",
    transform: Xe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Xe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Xe
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
    transform: Xe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: _l
  },
  // palette
  color: {
    themeKey: "palette",
    transform: An
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: An
  },
  backgroundColor: {
    themeKey: "palette",
    transform: An
  },
  // spacing
  p: {
    style: te
  },
  pt: {
    style: te
  },
  pr: {
    style: te
  },
  pb: {
    style: te
  },
  pl: {
    style: te
  },
  px: {
    style: te
  },
  py: {
    style: te
  },
  padding: {
    style: te
  },
  paddingTop: {
    style: te
  },
  paddingRight: {
    style: te
  },
  paddingBottom: {
    style: te
  },
  paddingLeft: {
    style: te
  },
  paddingX: {
    style: te
  },
  paddingY: {
    style: te
  },
  paddingInline: {
    style: te
  },
  paddingInlineStart: {
    style: te
  },
  paddingInlineEnd: {
    style: te
  },
  paddingBlock: {
    style: te
  },
  paddingBlockStart: {
    style: te
  },
  paddingBlockEnd: {
    style: te
  },
  m: {
    style: ee
  },
  mt: {
    style: ee
  },
  mr: {
    style: ee
  },
  mb: {
    style: ee
  },
  ml: {
    style: ee
  },
  mx: {
    style: ee
  },
  my: {
    style: ee
  },
  margin: {
    style: ee
  },
  marginTop: {
    style: ee
  },
  marginRight: {
    style: ee
  },
  marginBottom: {
    style: ee
  },
  marginLeft: {
    style: ee
  },
  marginX: {
    style: ee
  },
  marginY: {
    style: ee
  },
  marginInline: {
    style: ee
  },
  marginInlineStart: {
    style: ee
  },
  marginInlineEnd: {
    style: ee
  },
  marginBlock: {
    style: ee
  },
  marginBlockStart: {
    style: ee
  },
  marginBlockEnd: {
    style: ee
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
    style: Pl
  },
  rowGap: {
    style: Ml
  },
  columnGap: {
    style: Nl
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
    transform: De
  },
  maxWidth: {
    style: Ds
  },
  minWidth: {
    transform: De
  },
  height: {
    transform: De
  },
  maxHeight: {
    transform: De
  },
  minHeight: {
    transform: De
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
}, Fc = Xh;
function Gh(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Zh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jh() {
  function e(n, r, o, l) {
    const i = {
      [n]: r,
      theme: o
    }, s = l[n];
    if (!s)
      return {
        [n]: r
      };
    const {
      cssProperty: u = n,
      themeKey: a,
      transform: d,
      style: p
    } = s;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Cl(o, a) || {};
    return p ? p(i) : Tt(i, r, (w) => {
      let y = Ao(m, d, w);
      return w === y && typeof w == "string" && (y = Ao(m, d, `${n}${w === "default" ? "" : Ic(w)}`, w)), u === !1 ? y : {
        [u]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: l = {},
      nested: i
    } = n || {};
    if (!o)
      return null;
    const s = (r = l.unstable_sxConfig) != null ? r : Fc;
    function u(a) {
      let d = a;
      if (typeof a == "function")
        d = a(l);
      else if (typeof a != "object")
        return a;
      if (!d)
        return null;
      const p = ch(l.breakpoints), m = Object.keys(p);
      let v = p;
      return Object.keys(d).forEach((w) => {
        const y = Zh(d[w], l);
        if (y != null)
          if (typeof y == "object")
            if (s[w])
              v = mr(v, e(w, y, l, s));
            else {
              const N = Tt({
                theme: l
              }, y, (f) => ({
                [w]: f
              }));
              Gh(N, y) ? v[w] = t({
                sx: y,
                theme: l,
                nested: !0
              }) : v = mr(v, N);
            }
          else
            v = mr(v, e(w, y, l, s));
      }), !i && l.modularCssLayers ? {
        "@layer sx": Yu(m, v)
      } : Yu(m, v);
    }
    return Array.isArray(o) ? o.map(u) : u(o);
  }
  return t;
}
const jc = Jh();
jc.filterProps = ["sx"];
const qh = jc;
function bh(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const ey = ["breakpoints", "palette", "spacing", "shape"];
function ty(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: l = {}
  } = e, i = ul(e, ey), s = sh(n), u = gh(o);
  let a = Io({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: ge({
      mode: "light"
    }, r),
    spacing: u,
    shape: ge({}, ah, l)
  }, i);
  return a.applyStyles = bh, a = t.reduce((d, p) => Io(d, p), a), a.unstable_sxConfig = ge({}, Fc, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(p) {
    return qh({
      sx: p,
      theme: this
    });
  }, a;
}
function ny(e) {
  return Object.keys(e).length === 0;
}
function Fs(e = null) {
  const t = O.useContext(Yr);
  return !t || ny(t) ? e : t;
}
const ry = ty();
function oy(e = ry) {
  return Fs(e);
}
function Gl(e) {
  const t = oh(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function ly({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = oy(n), o = t && r[t] || r;
  let l = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(l) ? l = l.map((i) => Gl(typeof i == "function" ? i(o) : i)) : l = Gl(l)), /* @__PURE__ */ k(rh, {
    styles: l
  });
}
const iy = typeof window < "u" ? O.useLayoutEffect : O.useEffect, sy = iy;
let Gu = 0;
function uy(e) {
  const [t, n] = O.useState(e), r = e || t;
  return O.useEffect(() => {
    t == null && (Gu += 1, n(`mui-${Gu}`));
  }, [t]), r;
}
const Zu = ki["useId".toString()];
function ay(e) {
  if (Zu !== void 0) {
    const t = Zu();
    return e ?? t;
  }
  return uy(e);
}
const cy = /* @__PURE__ */ O.createContext(null), Uc = cy;
function Bc() {
  return O.useContext(Uc);
}
const fy = typeof Symbol == "function" && Symbol.for, dy = fy ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function py(e, t) {
  return typeof t == "function" ? t(e) : ge({}, e, t);
}
function my(e) {
  const {
    children: t,
    theme: n
  } = e, r = Bc(), o = O.useMemo(() => {
    const l = r === null ? n : py(r, n);
    return l != null && (l[dy] = r !== null), l;
  }, [n, r]);
  return /* @__PURE__ */ k(Uc.Provider, {
    value: o,
    children: t
  });
}
const hy = ["value"], yy = /* @__PURE__ */ O.createContext();
function gy(e) {
  let {
    value: t
  } = e, n = ul(e, hy);
  return /* @__PURE__ */ k(yy.Provider, ge({
    value: t ?? !0
  }, n));
}
const vy = /* @__PURE__ */ O.createContext(void 0);
function wy({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ k(vy.Provider, {
    value: e,
    children: t
  });
}
function Sy(e) {
  const t = Fs(), n = ay() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, sy(() => {
    const l = document.querySelector("head");
    if (!l)
      return;
    const i = l.firstChild;
    if (o) {
      var s;
      if (i && (s = i.hasAttribute) != null && s.call(i, "data-mui-layer-order") && i.getAttribute("data-mui-layer-order") === n)
        return;
      const a = document.createElement("style");
      a.setAttribute("data-mui-layer-order", n), a.textContent = o, l.prepend(a);
    } else {
      var u;
      (u = l.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || u.remove();
    }
  }, [o, n]), o ? /* @__PURE__ */ k(ly, {
    styles: o
  }) : null;
}
const Ju = {};
function qu(e, t, n, r = !1) {
  return O.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const l = n(o), i = e ? ge({}, t, {
        [e]: l
      }) : l;
      return r ? () => i : i;
    }
    return e ? ge({}, t, {
      [e]: n
    }) : ge({}, t, n);
  }, [e, t, n, r]);
}
function ky(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Fs(Ju), l = Bc() || Ju, i = qu(r, o, n), s = qu(r, l, n, !0), u = i.direction === "rtl", a = Sy(i);
  return /* @__PURE__ */ k(my, {
    theme: s,
    children: /* @__PURE__ */ k(Yr.Provider, {
      value: i,
      children: /* @__PURE__ */ k(gy, {
        value: u,
        children: /* @__PURE__ */ R(wy, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const xy = ["theme"];
function Cy(e) {
  let {
    theme: t
  } = e, n = ul(e, xy);
  const r = t[$u];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = ge({}, r, {
    vars: null
  }) : t && !t.vars && (o = ge({}, t, {
    vars: null
  }))), /* @__PURE__ */ k(ky, ge({}, n, {
    themeId: r ? $u : void 0,
    theme: o
  }));
}
var Wc = { exports: {} }, He = {}, Hc = { exports: {} }, Vc = {};
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
  function t(_, z) {
    var L = _.length;
    _.push(z);
    e:
      for (; 0 < L; ) {
        var K = L - 1 >>> 1, b = _[K];
        if (0 < o(b, z))
          _[K] = z, _[L] = b, L = K;
        else
          break e;
      }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0)
      return null;
    var z = _[0], L = _.pop();
    if (L !== z) {
      _[0] = L;
      e:
        for (var K = 0, b = _.length, It = b >>> 1; K < It; ) {
          var Qe = 2 * (K + 1) - 1, nn = _[Qe], rt = Qe + 1, Ct = _[rt];
          if (0 > o(nn, L))
            rt < b && 0 > o(Ct, nn) ? (_[K] = Ct, _[rt] = L, K = rt) : (_[K] = nn, _[Qe] = L, K = Qe);
          else if (rt < b && 0 > o(Ct, L))
            _[K] = Ct, _[rt] = L, K = rt;
          else
            break e;
        }
    }
    return z;
  }
  function o(_, z) {
    var L = _.sortIndex - z.sortIndex;
    return L !== 0 ? L : _.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var i = Date, s = i.now();
    e.unstable_now = function() {
      return i.now() - s;
    };
  }
  var u = [], a = [], d = 1, p = null, m = 3, v = !1, w = !1, y = !1, N = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(_) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null)
        r(a);
      else if (z.startTime <= _)
        r(a), z.sortIndex = z.expirationTime, t(u, z);
      else
        break;
      z = n(a);
    }
  }
  function g(_) {
    if (y = !1, h(_), !w)
      if (n(u) !== null)
        w = !0, nt(E);
      else {
        var z = n(a);
        z !== null && ce(g, z.startTime - _);
      }
  }
  function E(_, z) {
    w = !1, y && (y = !1, f(P), P = -1), v = !0;
    var L = m;
    try {
      for (h(z), p = n(u); p !== null && (!(p.expirationTime > z) || _ && !V()); ) {
        var K = p.callback;
        if (typeof K == "function") {
          p.callback = null, m = p.priorityLevel;
          var b = K(p.expirationTime <= z);
          z = e.unstable_now(), typeof b == "function" ? p.callback = b : p === n(u) && r(u), h(z);
        } else
          r(u);
        p = n(u);
      }
      if (p !== null)
        var It = !0;
      else {
        var Qe = n(a);
        Qe !== null && ce(g, Qe.startTime - z), It = !1;
      }
      return It;
    } finally {
      p = null, m = L, v = !1;
    }
  }
  var C = !1, S = null, P = -1, I = 5, $ = -1;
  function V() {
    return !(e.unstable_now() - $ < I);
  }
  function Se() {
    if (S !== null) {
      var _ = e.unstable_now();
      $ = _;
      var z = !0;
      try {
        z = S(!0, _);
      } finally {
        z ? B() : (C = !1, S = null);
      }
    } else
      C = !1;
  }
  var B;
  if (typeof c == "function")
    B = function() {
      c(Se);
    };
  else if (typeof MessageChannel < "u") {
    var dt = new MessageChannel(), Ke = dt.port2;
    dt.port1.onmessage = Se, B = function() {
      Ke.postMessage(null);
    };
  } else
    B = function() {
      N(Se, 0);
    };
  function nt(_) {
    S = _, C || (C = !0, B());
  }
  function ce(_, z) {
    P = N(function() {
      _(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    w || v || (w = !0, nt(E));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(_) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var L = m;
    m = z;
    try {
      return _();
    } finally {
      m = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, z) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var L = m;
    m = _;
    try {
      return z();
    } finally {
      m = L;
    }
  }, e.unstable_scheduleCallback = function(_, z, L) {
    var K = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? K + L : K) : L = K, _) {
      case 1:
        var b = -1;
        break;
      case 2:
        b = 250;
        break;
      case 5:
        b = 1073741823;
        break;
      case 4:
        b = 1e4;
        break;
      default:
        b = 5e3;
    }
    return b = L + b, _ = { id: d++, callback: z, priorityLevel: _, startTime: L, expirationTime: b, sortIndex: -1 }, L > K ? (_.sortIndex = L, t(a, _), n(u) === null && _ === n(a) && (y ? (f(P), P = -1) : y = !0, ce(g, L - K))) : (_.sortIndex = b, t(u, _), w || v || (w = !0, nt(E))), _;
  }, e.unstable_shouldYield = V, e.unstable_wrapCallback = function(_) {
    var z = m;
    return function() {
      var L = m;
      m = z;
      try {
        return _.apply(this, arguments);
      } finally {
        m = L;
      }
    };
  };
})(Vc);
Hc.exports = Vc;
var Ey = Hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _y = O, Be = Ey;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Kc = /* @__PURE__ */ new Set(), Mr = {};
function vn(e, t) {
  Vn(e, t), Vn(e + "Capture", t);
}
function Vn(e, t) {
  for (Mr[e] = t, e = 0; e < t.length; e++)
    Kc.add(t[e]);
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pi = Object.prototype.hasOwnProperty, Py = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bu = {}, ea = {};
function Ny(e) {
  return Pi.call(ea, e) ? !0 : Pi.call(bu, e) ? !1 : Py.test(e) ? ea[e] = !0 : (bu[e] = !0, !1);
}
function My(e, t, n, r) {
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
function Ty(e, t, n, r) {
  if (t === null || typeof t > "u" || My(e, t, n, r))
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
function Te(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  we[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  we[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  we[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  we[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  we[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  we[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  we[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  we[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  we[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var js = /[\-:]([a-z])/g;
function Us(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    js,
    Us
  );
  we[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(js, Us);
  we[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(js, Us);
  we[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  we[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  we[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bs(e, t, n, r) {
  var o = we.hasOwnProperty(t) ? we[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ty(t, n, o, r) && (n = null), r || o === null ? Ny(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = _y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, no = Symbol.for("react.element"), Cn = Symbol.for("react.portal"), En = Symbol.for("react.fragment"), Ws = Symbol.for("react.strict_mode"), Ni = Symbol.for("react.profiler"), Qc = Symbol.for("react.provider"), Yc = Symbol.for("react.context"), Hs = Symbol.for("react.forward_ref"), Mi = Symbol.for("react.suspense"), Ti = Symbol.for("react.suspense_list"), Vs = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Xc = Symbol.for("react.offscreen"), ta = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object" ? null : (e = ta && e[ta] || e["@@iterator"], typeof e == "function" ? e : null);
}
var q = Object.assign, Zl;
function cr(e) {
  if (Zl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zl = t && t[1] || "";
    }
  return `
` + Zl + e;
}
var Jl = !1;
function ql(e, t) {
  if (!e || Jl)
    return "";
  Jl = !0;
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
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var o = a.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, s = l.length - 1; 1 <= i && 0 <= s && o[i] !== l[s]; )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if (i--, s--, 0 > s || o[i] !== l[s]) {
                var u = `
` + o[i].replace(" at new ", " at ");
                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    Jl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function Ry(e) {
  switch (e.tag) {
    case 5:
      return cr(e.type);
    case 16:
      return cr("Lazy");
    case 13:
      return cr("Suspense");
    case 19:
      return cr("SuspenseList");
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
function Ri(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case En:
      return "Fragment";
    case Cn:
      return "Portal";
    case Ni:
      return "Profiler";
    case Ws:
      return "StrictMode";
    case Mi:
      return "Suspense";
    case Ti:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yc:
        return (e.displayName || "Context") + ".Consumer";
      case Qc:
        return (e._context.displayName || "Context") + ".Provider";
      case Hs:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Vs:
        return t = e.displayName || null, t !== null ? t : Ri(e.type) || "Memo";
      case Dt:
        t = e._payload, e = e._init;
        try {
          return Ri(e(t));
        } catch {
        }
    }
  return null;
}
function Oy(e) {
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
      return Ri(t);
    case 8:
      return t === Ws ? "StrictMode" : "Mode";
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
function Jt(e) {
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
function Gc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function $y(e) {
  var t = Gc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, l.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ro(e) {
  e._valueTracker || (e._valueTracker = $y(e));
}
function Zc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Gc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Do(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oi(e, t) {
  var n = t.checked;
  return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function na(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Jt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Jc(e, t) {
  t = t.checked, t != null && Bs(e, "checked", t, !1);
}
function $i(e, t) {
  Jc(e, t);
  var n = Jt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? zi(e, t.type, n) : t.hasOwnProperty("defaultValue") && zi(e, t.type, Jt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ra(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function zi(e, t, n) {
  (t !== "number" || Do(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Dn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Li(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(x(91));
  return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function oa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(x(92));
      if (fr(n)) {
        if (1 < n.length)
          throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function qc(e, t) {
  var n = Jt(t.value), r = Jt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function la(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? bc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var oo, ef = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (oo = oo || document.createElement("div"), oo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = oo.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Tr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hr = {
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
}, zy = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function(e) {
  zy.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), hr[t] = hr[e];
  });
});
function tf(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hr.hasOwnProperty(e) && hr[e] ? ("" + t).trim() : t + "px";
}
function nf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = tf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Ly = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ai(e, t) {
  if (t) {
    if (Ly[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(x(62));
  }
}
function Di(e, t) {
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
var Fi = null;
function Ks(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ji = null, Fn = null, jn = null;
function ia(e) {
  if (e = qr(e)) {
    if (typeof ji != "function")
      throw Error(x(280));
    var t = e.stateNode;
    t && (t = zl(t), ji(e.stateNode, e.type, t));
  }
}
function rf(e) {
  Fn ? jn ? jn.push(e) : jn = [e] : Fn = e;
}
function of() {
  if (Fn) {
    var e = Fn, t = jn;
    if (jn = Fn = null, ia(e), t)
      for (e = 0; e < t.length; e++)
        ia(t[e]);
  }
}
function lf(e, t) {
  return e(t);
}
function sf() {
}
var bl = !1;
function uf(e, t, n) {
  if (bl)
    return e(t, n);
  bl = !0;
  try {
    return lf(e, t, n);
  } finally {
    bl = !1, (Fn !== null || jn !== null) && (sf(), of());
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = zl(n);
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
    throw Error(x(231, t, typeof n));
  return n;
}
var Ui = !1;
if (Rt)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      Ui = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    Ui = !1;
  }
function Iy(e, t, n, r, o, l, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var yr = !1, Fo = null, jo = !1, Bi = null, Ay = { onError: function(e) {
  yr = !0, Fo = e;
} };
function Dy(e, t, n, r, o, l, i, s, u) {
  yr = !1, Fo = null, Iy.apply(Ay, arguments);
}
function Fy(e, t, n, r, o, l, i, s, u) {
  if (Dy.apply(this, arguments), yr) {
    if (yr) {
      var a = Fo;
      yr = !1, Fo = null;
    } else
      throw Error(x(198));
    jo || (jo = !0, Bi = a);
  }
}
function wn(e) {
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
function af(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function sa(e) {
  if (wn(e) !== e)
    throw Error(x(188));
}
function jy(e) {
  var t = e.alternate;
  if (!t) {
    if (t = wn(e), t === null)
      throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n)
          return sa(o), e;
        if (l === r)
          return sa(o), t;
        l = l.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return)
      n = o, r = l;
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          i = !0, n = o, r = l;
          break;
        }
        if (s === r) {
          i = !0, r = o, n = l;
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (s === r) {
            i = !0, r = l, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!i)
          throw Error(x(189));
      }
    }
    if (n.alternate !== r)
      throw Error(x(190));
  }
  if (n.tag !== 3)
    throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function cf(e) {
  return e = jy(e), e !== null ? ff(e) : null;
}
function ff(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = ff(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var df = Be.unstable_scheduleCallback, ua = Be.unstable_cancelCallback, Uy = Be.unstable_shouldYield, By = Be.unstable_requestPaint, re = Be.unstable_now, Wy = Be.unstable_getCurrentPriorityLevel, Qs = Be.unstable_ImmediatePriority, pf = Be.unstable_UserBlockingPriority, Uo = Be.unstable_NormalPriority, Hy = Be.unstable_LowPriority, mf = Be.unstable_IdlePriority, Tl = null, kt = null;
function Vy(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(Tl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var at = Math.clz32 ? Math.clz32 : Yy, Ky = Math.log, Qy = Math.LN2;
function Yy(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ky(e) / Qy | 0) | 0;
}
var lo = 64, io = 4194304;
function dr(e) {
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
function Bo(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? r = dr(s) : (l &= i, l !== 0 && (r = dr(l)));
  } else
    i = n & ~o, i !== 0 ? r = dr(i) : l !== 0 && (r = dr(l));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - at(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Xy(e, t) {
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
function Gy(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - at(l), s = 1 << i, u = o[i];
    u === -1 ? (!(s & n) || s & r) && (o[i] = Xy(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s;
  }
}
function Wi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function hf() {
  var e = lo;
  return lo <<= 1, !(lo & 4194240) && (lo = 64), e;
}
function ei(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Zr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
}
function Zy(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - at(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function Ys(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var W = 0;
function yf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var gf, Xs, vf, wf, Sf, Hi = !1, so = [], Ht = null, Vt = null, Kt = null, Or = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), jt = [], Jy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function aa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      Or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $r.delete(t.pointerId);
  }
}
function or(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = qr(t), t !== null && Xs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function qy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Ht = or(Ht, e, t, n, r, o), !0;
    case "dragenter":
      return Vt = or(Vt, e, t, n, r, o), !0;
    case "mouseover":
      return Kt = or(Kt, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return Or.set(l, or(Or.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, $r.set(l, or($r.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function kf(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = af(n), t !== null) {
          e.blockedOn = t, Sf(e.priority, function() {
            vf(n);
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
function Eo(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Fi = r, n.target.dispatchEvent(r), Fi = null;
    } else
      return t = qr(n), t !== null && Xs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ca(e, t, n) {
  Eo(e) && n.delete(t);
}
function by() {
  Hi = !1, Ht !== null && Eo(Ht) && (Ht = null), Vt !== null && Eo(Vt) && (Vt = null), Kt !== null && Eo(Kt) && (Kt = null), Or.forEach(ca), $r.forEach(ca);
}
function lr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Hi || (Hi = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, by)));
}
function zr(e) {
  function t(o) {
    return lr(o, e);
  }
  if (0 < so.length) {
    lr(so[0], e);
    for (var n = 1; n < so.length; n++) {
      var r = so[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ht !== null && lr(Ht, e), Vt !== null && lr(Vt, e), Kt !== null && lr(Kt, e), Or.forEach(t), $r.forEach(t), n = 0; n < jt.length; n++)
    r = jt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jt.length && (n = jt[0], n.blockedOn === null); )
    kf(n), n.blockedOn === null && jt.shift();
}
var Un = Lt.ReactCurrentBatchConfig, Wo = !0;
function eg(e, t, n, r) {
  var o = W, l = Un.transition;
  Un.transition = null;
  try {
    W = 1, Gs(e, t, n, r);
  } finally {
    W = o, Un.transition = l;
  }
}
function tg(e, t, n, r) {
  var o = W, l = Un.transition;
  Un.transition = null;
  try {
    W = 4, Gs(e, t, n, r);
  } finally {
    W = o, Un.transition = l;
  }
}
function Gs(e, t, n, r) {
  if (Wo) {
    var o = Vi(e, t, n, r);
    if (o === null)
      ci(e, t, r, Ho, n), aa(e, r);
    else if (qy(o, e, t, n, r))
      r.stopPropagation();
    else if (aa(e, r), t & 4 && -1 < Jy.indexOf(e)) {
      for (; o !== null; ) {
        var l = qr(o);
        if (l !== null && gf(l), l = Vi(e, t, n, r), l === null && ci(e, t, r, Ho, n), l === o)
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else
      ci(e, t, r, null, n);
  }
}
var Ho = null;
function Vi(e, t, n, r) {
  if (Ho = null, e = Ks(r), e = un(e), e !== null)
    if (t = wn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = af(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ho = e, null;
}
function xf(e) {
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
      switch (Wy()) {
        case Qs:
          return 1;
        case pf:
          return 4;
        case Uo:
        case Hy:
          return 16;
        case mf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null, Zs = null, _o = null;
function Cf() {
  if (_o)
    return _o;
  var e, t = Zs, n = t.length, r, o = "value" in Bt ? Bt.value : Bt.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++)
    ;
  return _o = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Po(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function uo() {
  return !0;
}
function fa() {
  return !1;
}
function Ve(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? uo : fa, this.isPropagationStopped = fa, this;
  }
  return q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = uo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = uo);
  }, persist: function() {
  }, isPersistent: uo }), t;
}
var bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Js = Ve(bn), Jr = q({}, bn, { view: 0, detail: 0 }), ng = Ve(Jr), ti, ni, ir, Rl = q({}, Jr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ir && (ir && e.type === "mousemove" ? (ti = e.screenX - ir.screenX, ni = e.screenY - ir.screenY) : ni = ti = 0, ir = e), ti);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ni;
} }), da = Ve(Rl), rg = q({}, Rl, { dataTransfer: 0 }), og = Ve(rg), lg = q({}, Jr, { relatedTarget: 0 }), ri = Ve(lg), ig = q({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sg = Ve(ig), ug = q({}, bn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ag = Ve(ug), cg = q({}, bn, { data: 0 }), pa = Ve(cg), fg = {
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
}, dg = {
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
}, pg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function mg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pg[e]) ? !!t[e] : !1;
}
function qs() {
  return mg;
}
var hg = q({}, Jr, { key: function(e) {
  if (e.key) {
    var t = fg[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Po(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dg[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qs, charCode: function(e) {
  return e.type === "keypress" ? Po(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Po(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), yg = Ve(hg), gg = q({}, Rl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ma = Ve(gg), vg = q({}, Jr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qs }), wg = Ve(vg), Sg = q({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), kg = Ve(Sg), xg = q({}, Rl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Cg = Ve(xg), Eg = [9, 13, 27, 32], bs = Rt && "CompositionEvent" in window, gr = null;
Rt && "documentMode" in document && (gr = document.documentMode);
var _g = Rt && "TextEvent" in window && !gr, Ef = Rt && (!bs || gr && 8 < gr && 11 >= gr), ha = String.fromCharCode(32), ya = !1;
function _f(e, t) {
  switch (e) {
    case "keyup":
      return Eg.indexOf(t.keyCode) !== -1;
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
function Pf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var _n = !1;
function Pg(e, t) {
  switch (e) {
    case "compositionend":
      return Pf(t);
    case "keypress":
      return t.which !== 32 ? null : (ya = !0, ha);
    case "textInput":
      return e = t.data, e === ha && ya ? null : e;
    default:
      return null;
  }
}
function Ng(e, t) {
  if (_n)
    return e === "compositionend" || !bs && _f(e, t) ? (e = Cf(), _o = Zs = Bt = null, _n = !1, e) : null;
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
      return Ef && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mg[e.type] : t === "textarea";
}
function Nf(e, t, n, r) {
  rf(r), t = Vo(t, "onChange"), 0 < t.length && (n = new Js("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var vr = null, Lr = null;
function Tg(e) {
  Ff(e, 0);
}
function Ol(e) {
  var t = Mn(e);
  if (Zc(t))
    return e;
}
function Rg(e, t) {
  if (e === "change")
    return t;
}
var Mf = !1;
if (Rt) {
  var oi;
  if (Rt) {
    var li = "oninput" in document;
    if (!li) {
      var va = document.createElement("div");
      va.setAttribute("oninput", "return;"), li = typeof va.oninput == "function";
    }
    oi = li;
  } else
    oi = !1;
  Mf = oi && (!document.documentMode || 9 < document.documentMode);
}
function wa() {
  vr && (vr.detachEvent("onpropertychange", Tf), Lr = vr = null);
}
function Tf(e) {
  if (e.propertyName === "value" && Ol(Lr)) {
    var t = [];
    Nf(t, Lr, e, Ks(e)), uf(Tg, t);
  }
}
function Og(e, t, n) {
  e === "focusin" ? (wa(), vr = t, Lr = n, vr.attachEvent("onpropertychange", Tf)) : e === "focusout" && wa();
}
function $g(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ol(Lr);
}
function zg(e, t) {
  if (e === "click")
    return Ol(t);
}
function Lg(e, t) {
  if (e === "input" || e === "change")
    return Ol(t);
}
function Ig(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ft = typeof Object.is == "function" ? Object.is : Ig;
function Ir(e, t) {
  if (ft(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Pi.call(t, o) || !ft(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Sa(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ka(e, t) {
  var n = Sa(e);
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
    n = Sa(n);
  }
}
function Rf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Of() {
  for (var e = window, t = Do(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Do(e.document);
  }
  return t;
}
function eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ag(e) {
  var t = Of(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Rf(n.ownerDocument.documentElement, n)) {
    if (r !== null && eu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = ka(n, l);
        var i = ka(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Dg = Rt && "documentMode" in document && 11 >= document.documentMode, Pn = null, Ki = null, wr = null, Qi = !1;
function xa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qi || Pn == null || Pn !== Do(r) || (r = Pn, "selectionStart" in r && eu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), wr && Ir(wr, r) || (wr = r, r = Vo(Ki, "onSelect"), 0 < r.length && (t = new Js("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Pn)));
}
function ao(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Nn = { animationend: ao("Animation", "AnimationEnd"), animationiteration: ao("Animation", "AnimationIteration"), animationstart: ao("Animation", "AnimationStart"), transitionend: ao("Transition", "TransitionEnd") }, ii = {}, $f = {};
Rt && ($f = document.createElement("div").style, "AnimationEvent" in window || (delete Nn.animationend.animation, delete Nn.animationiteration.animation, delete Nn.animationstart.animation), "TransitionEvent" in window || delete Nn.transitionend.transition);
function $l(e) {
  if (ii[e])
    return ii[e];
  if (!Nn[e])
    return e;
  var t = Nn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in $f)
      return ii[e] = t[n];
  return e;
}
var zf = $l("animationend"), Lf = $l("animationiteration"), If = $l("animationstart"), Af = $l("transitionend"), Df = /* @__PURE__ */ new Map(), Ca = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function bt(e, t) {
  Df.set(e, t), vn(t, [e]);
}
for (var si = 0; si < Ca.length; si++) {
  var ui = Ca[si], Fg = ui.toLowerCase(), jg = ui[0].toUpperCase() + ui.slice(1);
  bt(Fg, "on" + jg);
}
bt(zf, "onAnimationEnd");
bt(Lf, "onAnimationIteration");
bt(If, "onAnimationStart");
bt("dblclick", "onDoubleClick");
bt("focusin", "onFocus");
bt("focusout", "onBlur");
bt(Af, "onTransitionEnd");
Vn("onMouseEnter", ["mouseout", "mouseover"]);
Vn("onMouseLeave", ["mouseout", "mouseover"]);
Vn("onPointerEnter", ["pointerout", "pointerover"]);
Vn("onPointerLeave", ["pointerout", "pointerover"]);
vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ug = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function Ea(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Fy(r, t, void 0, e), e.currentTarget = null;
}
function Ff(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i], u = s.instance, a = s.currentTarget;
          if (s = s.listener, u !== l && o.isPropagationStopped())
            break e;
          Ea(o, s, a), l = u;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (s = r[i], u = s.instance, a = s.currentTarget, s = s.listener, u !== l && o.isPropagationStopped())
            break e;
          Ea(o, s, a), l = u;
        }
    }
  }
  if (jo)
    throw e = Bi, jo = !1, Bi = null, e;
}
function Y(e, t) {
  var n = t[Ji];
  n === void 0 && (n = t[Ji] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (jf(t, e, 2, !1), n.add(r));
}
function ai(e, t, n) {
  var r = 0;
  t && (r |= 4), jf(n, e, r, t);
}
var co = "_reactListening" + Math.random().toString(36).slice(2);
function Ar(e) {
  if (!e[co]) {
    e[co] = !0, Kc.forEach(function(n) {
      n !== "selectionchange" && (Ug.has(n) || ai(n, !1, e), ai(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[co] || (t[co] = !0, ai("selectionchange", !1, t));
  }
}
function jf(e, t, n, r) {
  switch (xf(t)) {
    case 1:
      var o = eg;
      break;
    case 4:
      o = tg;
      break;
    default:
      o = Gs;
  }
  n = o.bind(null, t, n, e), o = void 0, !Ui || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function ci(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var u = i.tag;
              if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o))
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (i = un(s), i === null)
              return;
            if (u = i.tag, u === 5 || u === 6) {
              r = l = i;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  uf(function() {
    var a = l, d = Ks(n), p = [];
    e: {
      var m = Df.get(e);
      if (m !== void 0) {
        var v = Js, w = e;
        switch (e) {
          case "keypress":
            if (Po(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = yg;
            break;
          case "focusin":
            w = "focus", v = ri;
            break;
          case "focusout":
            w = "blur", v = ri;
            break;
          case "beforeblur":
          case "afterblur":
            v = ri;
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
            v = da;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = og;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = wg;
            break;
          case zf:
          case Lf:
          case If:
            v = sg;
            break;
          case Af:
            v = kg;
            break;
          case "scroll":
            v = ng;
            break;
          case "wheel":
            v = Cg;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ag;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ma;
        }
        var y = (t & 4) !== 0, N = !y && e === "scroll", f = y ? m !== null ? m + "Capture" : null : m;
        y = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var g = h.stateNode;
          if (h.tag === 5 && g !== null && (h = g, f !== null && (g = Rr(c, f), g != null && y.push(Dr(c, g, h)))), N)
            break;
          c = c.return;
        }
        0 < y.length && (m = new v(m, w, null, n, d), p.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== Fi && (w = n.relatedTarget || n.fromElement) && (un(w) || w[Ot]))
          break e;
        if ((v || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (w = n.relatedTarget || n.toElement, v = a, w = w ? un(w) : null, w !== null && (N = wn(w), w !== N || w.tag !== 5 && w.tag !== 6) && (w = null)) : (v = null, w = a), v !== w)) {
          if (y = da, g = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = ma, g = "onPointerLeave", f = "onPointerEnter", c = "pointer"), N = v == null ? m : Mn(v), h = w == null ? m : Mn(w), m = new y(g, c + "leave", v, n, d), m.target = N, m.relatedTarget = h, g = null, un(d) === a && (y = new y(f, c + "enter", w, n, d), y.target = h, y.relatedTarget = N, g = y), N = g, v && w)
            t: {
              for (y = v, f = w, c = 0, h = y; h; h = kn(h))
                c++;
              for (h = 0, g = f; g; g = kn(g))
                h++;
              for (; 0 < c - h; )
                y = kn(y), c--;
              for (; 0 < h - c; )
                f = kn(f), h--;
              for (; c--; ) {
                if (y === f || f !== null && y === f.alternate)
                  break t;
                y = kn(y), f = kn(f);
              }
              y = null;
            }
          else
            y = null;
          v !== null && _a(p, m, v, y, !1), w !== null && N !== null && _a(p, N, w, y, !0);
        }
      }
      e: {
        if (m = a ? Mn(a) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file")
          var E = Rg;
        else if (ga(m))
          if (Mf)
            E = Lg;
          else {
            E = $g;
            var C = Og;
          }
        else
          (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = zg);
        if (E && (E = E(e, a))) {
          Nf(p, E, n, d);
          break e;
        }
        C && C(e, m, a), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && zi(m, "number", m.value);
      }
      switch (C = a ? Mn(a) : window, e) {
        case "focusin":
          (ga(C) || C.contentEditable === "true") && (Pn = C, Ki = a, wr = null);
          break;
        case "focusout":
          wr = Ki = Pn = null;
          break;
        case "mousedown":
          Qi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Qi = !1, xa(p, n, d);
          break;
        case "selectionchange":
          if (Dg)
            break;
        case "keydown":
        case "keyup":
          xa(p, n, d);
      }
      var S;
      if (bs)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        _n ? _f(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Ef && n.locale !== "ko" && (_n || P !== "onCompositionStart" ? P === "onCompositionEnd" && _n && (S = Cf()) : (Bt = d, Zs = "value" in Bt ? Bt.value : Bt.textContent, _n = !0)), C = Vo(a, P), 0 < C.length && (P = new pa(P, e, null, n, d), p.push({ event: P, listeners: C }), S ? P.data = S : (S = Pf(n), S !== null && (P.data = S)))), (S = _g ? Pg(e, n) : Ng(e, n)) && (a = Vo(a, "onBeforeInput"), 0 < a.length && (d = new pa("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: a }), d.data = S));
    }
    Ff(p, t);
  });
}
function Dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = Rr(e, n), l != null && r.unshift(Dr(e, l, o)), l = Rr(e, t), l != null && r.push(Dr(e, l, o))), e = e.return;
  }
  return r;
}
function kn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _a(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n, u = s.alternate, a = s.stateNode;
    if (u !== null && u === r)
      break;
    s.tag === 5 && a !== null && (s = a, o ? (u = Rr(n, l), u != null && i.unshift(Dr(n, u, s))) : o || (u = Rr(n, l), u != null && i.push(Dr(n, u, s)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Bg = /\r\n?/g, Wg = /\u0000|\uFFFD/g;
function Pa(e) {
  return (typeof e == "string" ? e : "" + e).replace(Bg, `
`).replace(Wg, "");
}
function fo(e, t, n) {
  if (t = Pa(t), Pa(e) !== t && n)
    throw Error(x(425));
}
function Ko() {
}
var Yi = null, Xi = null;
function Gi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Zi = typeof setTimeout == "function" ? setTimeout : void 0, Hg = typeof clearTimeout == "function" ? clearTimeout : void 0, Na = typeof Promise == "function" ? Promise : void 0, Vg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Na < "u" ? function(e) {
  return Na.resolve(null).then(e).catch(Kg);
} : Zi;
function Kg(e) {
  setTimeout(function() {
    throw e;
  });
}
function fi(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), zr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  zr(t);
}
function Qt(e) {
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
function Ma(e) {
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
var er = Math.random().toString(36).slice(2), vt = "__reactFiber$" + er, Fr = "__reactProps$" + er, Ot = "__reactContainer$" + er, Ji = "__reactEvents$" + er, Qg = "__reactListeners$" + er, Yg = "__reactHandles$" + er;
function un(e) {
  var t = e[vt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ot] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Ma(e); e !== null; ) {
          if (n = e[vt])
            return n;
          e = Ma(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function qr(e) {
  return e = e[vt] || e[Ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Mn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(x(33));
}
function zl(e) {
  return e[Fr] || null;
}
var qi = [], Tn = -1;
function en(e) {
  return { current: e };
}
function X(e) {
  0 > Tn || (e.current = qi[Tn], qi[Tn] = null, Tn--);
}
function Q(e, t) {
  Tn++, qi[Tn] = e.current, e.current = t;
}
var qt = {}, _e = en(qt), $e = en(!1), pn = qt;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n)
    o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function ze(e) {
  return e = e.childContextTypes, e != null;
}
function Qo() {
  X($e), X(_e);
}
function Ta(e, t, n) {
  if (_e.current !== qt)
    throw Error(x(168));
  Q(_e, t), Q($e, n);
}
function Uf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(x(108, Oy(e) || "Unknown", o));
  return q({}, n, r);
}
function Yo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qt, pn = _e.current, Q(_e, e), Q($e, $e.current), !0;
}
function Ra(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(x(169));
  n ? (e = Uf(e, t, pn), r.__reactInternalMemoizedMergedChildContext = e, X($e), X(_e), Q(_e, e)) : X($e), Q($e, n);
}
var _t = null, Ll = !1, di = !1;
function Bf(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function Xg(e) {
  Ll = !0, Bf(e);
}
function tn() {
  if (!di && _t !== null) {
    di = !0;
    var e = 0, t = W;
    try {
      var n = _t;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      _t = null, Ll = !1;
    } catch (o) {
      throw _t !== null && (_t = _t.slice(e + 1)), df(Qs, tn), o;
    } finally {
      W = t, di = !1;
    }
  }
  return null;
}
var Rn = [], On = 0, Xo = null, Go = 0, Ge = [], Ze = 0, mn = null, Pt = 1, Nt = "";
function rn(e, t) {
  Rn[On++] = Go, Rn[On++] = Xo, Xo = e, Go = t;
}
function Wf(e, t, n) {
  Ge[Ze++] = Pt, Ge[Ze++] = Nt, Ge[Ze++] = mn, mn = e;
  var r = Pt;
  e = Nt;
  var o = 32 - at(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - at(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Pt = 1 << 32 - at(t) + o | n << o | r, Nt = l + e;
  } else
    Pt = 1 << l | n << o | r, Nt = e;
}
function tu(e) {
  e.return !== null && (rn(e, 1), Wf(e, 1, 0));
}
function nu(e) {
  for (; e === Xo; )
    Xo = Rn[--On], Rn[On] = null, Go = Rn[--On], Rn[On] = null;
  for (; e === mn; )
    mn = Ge[--Ze], Ge[Ze] = null, Nt = Ge[--Ze], Ge[Ze] = null, Pt = Ge[--Ze], Ge[Ze] = null;
}
var Ue = null, Fe = null, G = !1, ut = null;
function Hf(e, t) {
  var n = Je(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Oa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, Fe = Qt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, Fe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mn !== null ? { id: Pt, overflow: Nt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, Fe = null, !0) : !1;
    default:
      return !1;
  }
}
function bi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function es(e) {
  if (G) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!Oa(e, t)) {
        if (bi(e))
          throw Error(x(418));
        t = Qt(n.nextSibling);
        var r = Ue;
        t && Oa(e, t) ? Hf(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, Ue = e);
      }
    } else {
      if (bi(e))
        throw Error(x(418));
      e.flags = e.flags & -4097 | 2, G = !1, Ue = e;
    }
  }
}
function $a(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function po(e) {
  if (e !== Ue)
    return !1;
  if (!G)
    return $a(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Gi(e.type, e.memoizedProps)), t && (t = Fe)) {
    if (bi(e))
      throw Vf(), Error(x(418));
    for (; t; )
      Hf(e, t), t = Qt(t.nextSibling);
  }
  if ($a(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else
    Fe = Ue ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function Vf() {
  for (var e = Fe; e; )
    e = Qt(e.nextSibling);
}
function Qn() {
  Fe = Ue = null, G = !1;
}
function ru(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var Gg = Lt.ReactCurrentBatchConfig;
function sr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(x(147, e));
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var s = o.refs;
        i === null ? delete s[l] : s[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string")
      throw Error(x(284));
    if (!n._owner)
      throw Error(x(290, e));
  }
  return e;
}
function mo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function za(e) {
  var t = e._init;
  return t(e._payload);
}
function Kf(e) {
  function t(f, c) {
    if (e) {
      var h = f.deletions;
      h === null ? (f.deletions = [c], f.flags |= 16) : h.push(c);
    }
  }
  function n(f, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function o(f, c) {
    return f = Zt(f, c), f.index = 0, f.sibling = null, f;
  }
  function l(f, c, h) {
    return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < c ? (f.flags |= 2, c) : h) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, h, g) {
    return c === null || c.tag !== 6 ? (c = wi(h, f.mode, g), c.return = f, c) : (c = o(c, h), c.return = f, c);
  }
  function u(f, c, h, g) {
    var E = h.type;
    return E === En ? d(f, c, h.props.children, g, h.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Dt && za(E) === c.type) ? (g = o(c, h.props), g.ref = sr(f, c, h), g.return = f, g) : (g = zo(h.type, h.key, h.props, null, f.mode, g), g.ref = sr(f, c, h), g.return = f, g);
  }
  function a(f, c, h, g) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Si(h, f.mode, g), c.return = f, c) : (c = o(c, h.children || []), c.return = f, c);
  }
  function d(f, c, h, g, E) {
    return c === null || c.tag !== 7 ? (c = dn(h, f.mode, g, E), c.return = f, c) : (c = o(c, h), c.return = f, c);
  }
  function p(f, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = wi("" + c, f.mode, h), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case no:
          return h = zo(c.type, c.key, c.props, null, f.mode, h), h.ref = sr(f, null, c), h.return = f, h;
        case Cn:
          return c = Si(c, f.mode, h), c.return = f, c;
        case Dt:
          var g = c._init;
          return p(f, g(c._payload), h);
      }
      if (fr(c) || nr(c))
        return c = dn(c, f.mode, h, null), c.return = f, c;
      mo(f, c);
    }
    return null;
  }
  function m(f, c, h, g) {
    var E = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return E !== null ? null : s(f, c, "" + h, g);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case no:
          return h.key === E ? u(f, c, h, g) : null;
        case Cn:
          return h.key === E ? a(f, c, h, g) : null;
        case Dt:
          return E = h._init, m(
            f,
            c,
            E(h._payload),
            g
          );
      }
      if (fr(h) || nr(h))
        return E !== null ? null : d(f, c, h, g, null);
      mo(f, h);
    }
    return null;
  }
  function v(f, c, h, g, E) {
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return f = f.get(h) || null, s(c, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case no:
          return f = f.get(g.key === null ? h : g.key) || null, u(c, f, g, E);
        case Cn:
          return f = f.get(g.key === null ? h : g.key) || null, a(c, f, g, E);
        case Dt:
          var C = g._init;
          return v(f, c, h, C(g._payload), E);
      }
      if (fr(g) || nr(g))
        return f = f.get(h) || null, d(c, f, g, E, null);
      mo(c, g);
    }
    return null;
  }
  function w(f, c, h, g) {
    for (var E = null, C = null, S = c, P = c = 0, I = null; S !== null && P < h.length; P++) {
      S.index > P ? (I = S, S = null) : I = S.sibling;
      var $ = m(f, S, h[P], g);
      if ($ === null) {
        S === null && (S = I);
        break;
      }
      e && S && $.alternate === null && t(f, S), c = l($, c, P), C === null ? E = $ : C.sibling = $, C = $, S = I;
    }
    if (P === h.length)
      return n(f, S), G && rn(f, P), E;
    if (S === null) {
      for (; P < h.length; P++)
        S = p(f, h[P], g), S !== null && (c = l(S, c, P), C === null ? E = S : C.sibling = S, C = S);
      return G && rn(f, P), E;
    }
    for (S = r(f, S); P < h.length; P++)
      I = v(S, f, P, h[P], g), I !== null && (e && I.alternate !== null && S.delete(I.key === null ? P : I.key), c = l(I, c, P), C === null ? E = I : C.sibling = I, C = I);
    return e && S.forEach(function(V) {
      return t(f, V);
    }), G && rn(f, P), E;
  }
  function y(f, c, h, g) {
    var E = nr(h);
    if (typeof E != "function")
      throw Error(x(150));
    if (h = E.call(h), h == null)
      throw Error(x(151));
    for (var C = E = null, S = c, P = c = 0, I = null, $ = h.next(); S !== null && !$.done; P++, $ = h.next()) {
      S.index > P ? (I = S, S = null) : I = S.sibling;
      var V = m(f, S, $.value, g);
      if (V === null) {
        S === null && (S = I);
        break;
      }
      e && S && V.alternate === null && t(f, S), c = l(V, c, P), C === null ? E = V : C.sibling = V, C = V, S = I;
    }
    if ($.done)
      return n(
        f,
        S
      ), G && rn(f, P), E;
    if (S === null) {
      for (; !$.done; P++, $ = h.next())
        $ = p(f, $.value, g), $ !== null && (c = l($, c, P), C === null ? E = $ : C.sibling = $, C = $);
      return G && rn(f, P), E;
    }
    for (S = r(f, S); !$.done; P++, $ = h.next())
      $ = v(S, f, P, $.value, g), $ !== null && (e && $.alternate !== null && S.delete($.key === null ? P : $.key), c = l($, c, P), C === null ? E = $ : C.sibling = $, C = $);
    return e && S.forEach(function(Se) {
      return t(f, Se);
    }), G && rn(f, P), E;
  }
  function N(f, c, h, g) {
    if (typeof h == "object" && h !== null && h.type === En && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case no:
          e: {
            for (var E = h.key, C = c; C !== null; ) {
              if (C.key === E) {
                if (E = h.type, E === En) {
                  if (C.tag === 7) {
                    n(f, C.sibling), c = o(C, h.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Dt && za(E) === C.type) {
                  n(f, C.sibling), c = o(C, h.props), c.ref = sr(f, C, h), c.return = f, f = c;
                  break e;
                }
                n(f, C);
                break;
              } else
                t(f, C);
              C = C.sibling;
            }
            h.type === En ? (c = dn(h.props.children, f.mode, g, h.key), c.return = f, f = c) : (g = zo(h.type, h.key, h.props, null, f.mode, g), g.ref = sr(f, c, h), g.return = f, f = g);
          }
          return i(f);
        case Cn:
          e: {
            for (C = h.key; c !== null; ) {
              if (c.key === C)
                if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                  n(f, c.sibling), c = o(c, h.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = Si(h, f.mode, g), c.return = f, f = c;
          }
          return i(f);
        case Dt:
          return C = h._init, N(f, c, C(h._payload), g);
      }
      if (fr(h))
        return w(f, c, h, g);
      if (nr(h))
        return y(f, c, h, g);
      mo(f, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, h), c.return = f, f = c) : (n(f, c), c = wi(h, f.mode, g), c.return = f, f = c), i(f)) : n(f, c);
  }
  return N;
}
var Yn = Kf(!0), Qf = Kf(!1), Zo = en(null), Jo = null, $n = null, ou = null;
function lu() {
  ou = $n = Jo = null;
}
function iu(e) {
  var t = Zo.current;
  X(Zo), e._currentValue = t;
}
function ts(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Bn(e, t) {
  Jo = e, ou = $n = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0), e.firstContext = null);
}
function be(e) {
  var t = e._currentValue;
  if (ou !== e)
    if (e = { context: e, memoizedValue: t, next: null }, $n === null) {
      if (Jo === null)
        throw Error(x(308));
      $n = e, Jo.dependencies = { lanes: 0, firstContext: e };
    } else
      $n = $n.next = e;
  return t;
}
var an = null;
function su(e) {
  an === null ? an = [e] : an.push(e);
}
function Yf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, su(t)) : (n.next = o.next, o.next = n), t.interleaved = n, $t(e, r);
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ft = !1;
function uu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Xf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Mt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, D & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, $t(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, su(r)) : (t.next = o.next, o.next = t), r.interleaved = t, $t(e, n);
}
function No(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ys(e, n);
  }
}
function La(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? o = l = i : l = l.next = i, n = n.next;
      } while (n !== null);
      l === null ? o = l = t : l = l.next = t;
    } else
      o = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function qo(e, t, n, r) {
  var o = e.updateQueue;
  Ft = !1;
  var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s, a = u.next;
    u.next = null, i === null ? l = a : i.next = a, i = u;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, s = d.lastBaseUpdate, s !== i && (s === null ? d.firstBaseUpdate = a : s.next = a, d.lastBaseUpdate = u));
  }
  if (l !== null) {
    var p = o.baseState;
    i = 0, d = a = u = null, s = l;
    do {
      var m = s.lane, v = s.eventTime;
      if ((r & m) === m) {
        d !== null && (d = d.next = {
          eventTime: v,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var w = e, y = s;
          switch (m = t, v = n, y.tag) {
            case 1:
              if (w = y.payload, typeof w == "function") {
                p = w.call(v, p, m);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = y.payload, m = typeof w == "function" ? w.call(v, p, m) : w, m == null)
                break e;
              p = q({}, p, m);
              break e;
            case 2:
              Ft = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [s] : m.push(s));
      } else
        v = { eventTime: v, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, d === null ? (a = d = v, u = p) : d = d.next = v, i |= m;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null)
          break;
        m = s, s = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (1);
    if (d === null && (u = p), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else
      l === null && (o.shared.lanes = 0);
    yn |= i, e.lanes = i, e.memoizedState = p;
  }
}
function Ia(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(x(191, o));
        o.call(r);
      }
    }
}
var br = {}, xt = en(br), jr = en(br), Ur = en(br);
function cn(e) {
  if (e === br)
    throw Error(x(174));
  return e;
}
function au(e, t) {
  switch (Q(Ur, t), Q(jr, e), Q(xt, br), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ii(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ii(t, e);
  }
  X(xt), Q(xt, t);
}
function Xn() {
  X(xt), X(jr), X(Ur);
}
function Gf(e) {
  cn(Ur.current);
  var t = cn(xt.current), n = Ii(t, e.type);
  t !== n && (Q(jr, e), Q(xt, n));
}
function cu(e) {
  jr.current === e && (X(xt), X(jr));
}
var Z = en(0);
function bo(e) {
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
var pi = [];
function fu() {
  for (var e = 0; e < pi.length; e++)
    pi[e]._workInProgressVersionPrimary = null;
  pi.length = 0;
}
var Mo = Lt.ReactCurrentDispatcher, mi = Lt.ReactCurrentBatchConfig, hn = 0, J = null, ue = null, de = null, el = !1, Sr = !1, Br = 0, Zg = 0;
function ke() {
  throw Error(x(321));
}
function du(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ft(e[n], t[n]))
      return !1;
  return !0;
}
function pu(e, t, n, r, o, l) {
  if (hn = l, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Mo.current = e === null || e.memoizedState === null ? e0 : t0, e = n(r, o), Sr) {
    l = 0;
    do {
      if (Sr = !1, Br = 0, 25 <= l)
        throw Error(x(301));
      l += 1, de = ue = null, t.updateQueue = null, Mo.current = n0, e = n(r, o);
    } while (Sr);
  }
  if (Mo.current = tl, t = ue !== null && ue.next !== null, hn = 0, de = ue = J = null, el = !1, t)
    throw Error(x(300));
  return e;
}
function mu() {
  var e = Br !== 0;
  return Br = 0, e;
}
function mt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? J.memoizedState = de = e : de = de.next = e, de;
}
function et() {
  if (ue === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ue.next;
  var t = de === null ? J.memoizedState : de.next;
  if (t !== null)
    de = t, ue = e;
  else {
    if (e === null)
      throw Error(x(310));
    ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, de === null ? J.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function Wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hi(e) {
  var t = et(), n = t.queue;
  if (n === null)
    throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = ue, o = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = l.next, l.next = i;
    }
    r.baseQueue = o = l, n.pending = null;
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var s = i = null, u = null, a = l;
    do {
      var d = a.lane;
      if ((hn & d) === d)
        u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (s = u = p, i = r) : u = u.next = p, J.lanes |= d, yn |= d;
      }
      a = a.next;
    } while (a !== null && a !== l);
    u === null ? i = r : u.next = s, ft(r, t.memoizedState) || (Oe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, J.lanes |= l, yn |= l, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function yi(e) {
  var t = et(), n = t.queue;
  if (n === null)
    throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    ft(l, t.memoizedState) || (Oe = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function Zf() {
}
function Jf(e, t) {
  var n = J, r = et(), o = t(), l = !ft(r.memoizedState, o);
  if (l && (r.memoizedState = o, Oe = !0), r = r.queue, hu(ed.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, Hr(9, bf.bind(null, n, r, o, t), void 0, null), pe === null)
      throw Error(x(349));
    hn & 30 || qf(n, t, o);
  }
  return o;
}
function qf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function bf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, td(t) && nd(e);
}
function ed(e, t, n) {
  return n(function() {
    td(t) && nd(e);
  });
}
function td(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function nd(e) {
  var t = $t(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function Aa(e) {
  var t = mt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Wr, lastRenderedState: e }, t.queue = e, e = e.dispatch = bg.bind(null, J, e), [t.memoizedState, e];
}
function Hr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function rd() {
  return et().memoizedState;
}
function To(e, t, n, r) {
  var o = mt();
  J.flags |= e, o.memoizedState = Hr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Il(e, t, n, r) {
  var o = et();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ue !== null) {
    var i = ue.memoizedState;
    if (l = i.destroy, r !== null && du(r, i.deps)) {
      o.memoizedState = Hr(t, n, l, r);
      return;
    }
  }
  J.flags |= e, o.memoizedState = Hr(1 | t, n, l, r);
}
function Da(e, t) {
  return To(8390656, 8, e, t);
}
function hu(e, t) {
  return Il(2048, 8, e, t);
}
function od(e, t) {
  return Il(4, 2, e, t);
}
function ld(e, t) {
  return Il(4, 4, e, t);
}
function id(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function sd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Il(4, 4, id.bind(null, t, e), n);
}
function yu() {
}
function ud(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && du(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ad(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && du(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function cd(e, t, n) {
  return hn & 21 ? (ft(n, t) || (n = hf(), J.lanes |= n, yn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = n);
}
function Jg(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = mi.transition;
  mi.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, mi.transition = r;
  }
}
function fd() {
  return et().memoizedState;
}
function qg(e, t, n) {
  var r = Gt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dd(e))
    pd(t, n);
  else if (n = Yf(e, t, n, r), n !== null) {
    var o = Ne();
    ct(n, e, r, o), md(n, t, r);
  }
}
function bg(e, t, n) {
  var r = Gt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dd(e))
    pd(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
      try {
        var i = t.lastRenderedState, s = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = s, ft(s, i)) {
          var u = t.interleaved;
          u === null ? (o.next = o, su(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Yf(e, t, o, r), n !== null && (o = Ne(), ct(n, e, r, o), md(n, t, r));
  }
}
function dd(e) {
  var t = e.alternate;
  return e === J || t !== null && t === J;
}
function pd(e, t) {
  Sr = el = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function md(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ys(e, n);
  }
}
var tl = { readContext: be, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, e0 = { readContext: be, useCallback: function(e, t) {
  return mt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: be, useEffect: Da, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, To(
    4194308,
    4,
    id.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return To(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return To(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = mt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = mt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = qg.bind(null, J, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = mt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Aa, useDebugValue: yu, useDeferredValue: function(e) {
  return mt().memoizedState = e;
}, useTransition: function() {
  var e = Aa(!1), t = e[0];
  return e = Jg.bind(null, e[1]), mt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = J, o = mt();
  if (G) {
    if (n === void 0)
      throw Error(x(407));
    n = n();
  } else {
    if (n = t(), pe === null)
      throw Error(x(349));
    hn & 30 || qf(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, Da(ed.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Hr(9, bf.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = mt(), t = pe.identifierPrefix;
  if (G) {
    var n = Nt, r = Pt;
    n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Br++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Zg++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, t0 = {
  readContext: be,
  useCallback: ud,
  useContext: be,
  useEffect: hu,
  useImperativeHandle: sd,
  useInsertionEffect: od,
  useLayoutEffect: ld,
  useMemo: ad,
  useReducer: hi,
  useRef: rd,
  useState: function() {
    return hi(Wr);
  },
  useDebugValue: yu,
  useDeferredValue: function(e) {
    var t = et();
    return cd(t, ue.memoizedState, e);
  },
  useTransition: function() {
    var e = hi(Wr)[0], t = et().memoizedState;
    return [e, t];
  },
  useMutableSource: Zf,
  useSyncExternalStore: Jf,
  useId: fd,
  unstable_isNewReconciler: !1
}, n0 = { readContext: be, useCallback: ud, useContext: be, useEffect: hu, useImperativeHandle: sd, useInsertionEffect: od, useLayoutEffect: ld, useMemo: ad, useReducer: yi, useRef: rd, useState: function() {
  return yi(Wr);
}, useDebugValue: yu, useDeferredValue: function(e) {
  var t = et();
  return ue === null ? t.memoizedState = e : cd(t, ue.memoizedState, e);
}, useTransition: function() {
  var e = yi(Wr)[0], t = et().memoizedState;
  return [e, t];
}, useMutableSource: Zf, useSyncExternalStore: Jf, useId: fd, unstable_isNewReconciler: !1 };
function lt(e, t) {
  if (e && e.defaultProps) {
    t = q({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ns(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Al = { isMounted: function(e) {
  return (e = e._reactInternals) ? wn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), o = Gt(e), l = Mt(r, o);
  l.payload = t, n != null && (l.callback = n), t = Yt(e, l, o), t !== null && (ct(t, e, o, r), No(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), o = Gt(e), l = Mt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Yt(e, l, o), t !== null && (ct(t, e, o, r), No(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ne(), r = Gt(e), o = Mt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Yt(e, o, r), t !== null && (ct(t, e, r, n), No(t, e, r));
} };
function Fa(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(o, l) : !0;
}
function hd(e, t, n) {
  var r = !1, o = qt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = be(l) : (o = ze(t) ? pn : _e.current, r = t.contextTypes, l = (r = r != null) ? Kn(e, o) : qt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function ja(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Al.enqueueReplaceState(t, t.state, null);
}
function rs(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, uu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = be(l) : (l = ze(t) ? pn : _e.current, o.context = Kn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (ns(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Al.enqueueReplaceState(o, o.state, null), qo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ry(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function gi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function os(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var r0 = typeof WeakMap == "function" ? WeakMap : Map;
function yd(e, t, n) {
  n = Mt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    rl || (rl = !0, ms = r), os(e, t);
  }, n;
}
function gd(e, t, n) {
  n = Mt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      os(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    os(e, t), typeof r != "function" && (Xt === null ? Xt = /* @__PURE__ */ new Set([this]) : Xt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ua(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new r0();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = g0.bind(null, e, t, n), t.then(e, e));
}
function Ba(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wa(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mt(-1, 1), t.tag = 2, Yt(n, t, 1))), n.lanes |= 1), e);
}
var o0 = Lt.ReactCurrentOwner, Oe = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? Qf(t, null, n, r) : Yn(t, e.child, n, r);
}
function Ha(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Bn(t, o), r = pu(e, t, n, r, l, o), n = mu(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, zt(e, t, o)) : (G && n && tu(t), t.flags |= 1, Pe(e, t, r, o), t.child);
}
function Va(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Eu(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, vd(e, t, l, r, o)) : (e = zo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ir, n(i, r) && e.ref === t.ref)
      return zt(e, t, o);
  }
  return t.flags |= 1, e = Zt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function vd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Ir(l, r) && e.ref === t.ref)
      if (Oe = !1, t.pendingProps = r = l, (e.lanes & o) !== 0)
        e.flags & 131072 && (Oe = !0);
      else
        return t.lanes = e.lanes, zt(e, t, o);
  }
  return ls(e, t, n, r, o);
}
function wd(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Q(Ln, Ae), Ae |= n;
    else {
      if (!(n & 1073741824))
        return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Q(Ln, Ae), Ae |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, Q(Ln, Ae), Ae |= r;
    }
  else
    l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, Q(Ln, Ae), Ae |= r;
  return Pe(e, t, o, n), t.child;
}
function Sd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ls(e, t, n, r, o) {
  var l = ze(n) ? pn : _e.current;
  return l = Kn(t, l), Bn(t, o), n = pu(e, t, n, r, l, o), r = mu(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, zt(e, t, o)) : (G && r && tu(t), t.flags |= 1, Pe(e, t, n, o), t.child);
}
function Ka(e, t, n, r, o) {
  if (ze(n)) {
    var l = !0;
    Yo(t);
  } else
    l = !1;
  if (Bn(t, o), t.stateNode === null)
    Ro(e, t), hd(t, n, r), rs(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, s = t.memoizedProps;
    i.props = s;
    var u = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = be(a) : (a = ze(n) ? pn : _e.current, a = Kn(t, a));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== a) && ja(t, i, r, a), Ft = !1;
    var m = t.memoizedState;
    i.state = m, qo(t, r, i, o), u = t.memoizedState, s !== r || m !== u || $e.current || Ft ? (typeof d == "function" && (ns(t, n, d, r), u = t.memoizedState), (s = Ft || Fa(t, n, s, r, m, u, a)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Xf(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : lt(t.type, s), i.props = a, p = t.pendingProps, m = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = be(u) : (u = ze(n) ? pn : _e.current, u = Kn(t, u));
    var v = n.getDerivedStateFromProps;
    (d = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== p || m !== u) && ja(t, i, r, u), Ft = !1, m = t.memoizedState, i.state = m, qo(t, r, i, o);
    var w = t.memoizedState;
    s !== p || m !== w || $e.current || Ft ? (typeof v == "function" && (ns(t, n, v, r), w = t.memoizedState), (a = Ft || Fa(t, n, a, r, m, w, u) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = u, r = a) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return is(e, t, n, r, l, o);
}
function is(e, t, n, r, o, l) {
  Sd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return o && Ra(t, n, !1), zt(e, t, l);
  r = t.stateNode, o0.current = t;
  var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Yn(t, e.child, null, l), t.child = Yn(t, null, s, l)) : Pe(e, t, s, l), t.memoizedState = r.state, o && Ra(t, n, !0), t.child;
}
function kd(e) {
  var t = e.stateNode;
  t.pendingContext ? Ta(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ta(e, t.context, !1), au(e, t.containerInfo);
}
function Qa(e, t, n, r, o) {
  return Qn(), ru(o), t.flags |= 256, Pe(e, t, n, r), t.child;
}
var ss = { dehydrated: null, treeContext: null, retryLane: 0 };
function us(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xd(e, t, n) {
  var r = t.pendingProps, o = Z.current, l = !1, i = (t.flags & 128) !== 0, s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Q(Z, o & 1), e === null)
    return es(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = jl(i, r, 0, null), e = dn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = us(n), t.memoizedState = ss, e) : gu(t, i));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return l0(e, t, i, r, s, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Zt(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Zt(s, l) : (l = dn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? us(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = ss, r;
  }
  return l = e.child, e = l.sibling, r = Zt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function gu(e, t) {
  return t = jl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ho(e, t, n, r) {
  return r !== null && ru(r), Yn(t, e.child, null, n), e = gu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function l0(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = gi(Error(x(422))), ho(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = jl({ mode: "visible", children: r.children }, o, 0, null), l = dn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Yn(t, e.child, null, i), t.child.memoizedState = us(i), t.memoizedState = ss, l);
  if (!(t.mode & 1))
    return ho(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, l = Error(x(419)), r = gi(l, r, void 0), ho(e, t, i, r);
  }
  if (s = (i & e.childLanes) !== 0, Oe || s) {
    if (r = pe, r !== null) {
      switch (i & -i) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, $t(e, o), ct(r, e, o, -1));
    }
    return Cu(), r = gi(Error(x(421))), ho(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = v0.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Fe = Qt(o.nextSibling), Ue = t, G = !0, ut = null, e !== null && (Ge[Ze++] = Pt, Ge[Ze++] = Nt, Ge[Ze++] = mn, Pt = e.id, Nt = e.overflow, mn = t), t = gu(t, r.children), t.flags |= 4096, t);
}
function Ya(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ts(e.return, t, n);
}
function vi(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function Cd(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (Pe(e, t, r.children, n), r = Z.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ya(e, n, t);
          else if (e.tag === 19)
            Ya(e, n, t);
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
  if (Q(Z, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && bo(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), vi(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && bo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        vi(t, !0, n, null, l);
        break;
      case "together":
        vi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ro(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function zt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), yn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Zt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function i0(e, t, n) {
  switch (t.tag) {
    case 3:
      kd(t), Qn();
      break;
    case 5:
      Gf(t);
      break;
    case 1:
      ze(t.type) && Yo(t);
      break;
    case 4:
      au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Q(Zo, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Q(Z, Z.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? xd(e, t, n) : (Q(Z, Z.current & 1), e = zt(e, t, n), e !== null ? e.sibling : null);
      Q(Z, Z.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Cd(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Q(Z, Z.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, wd(e, t, n);
  }
  return zt(e, t, n);
}
var Ed, as, _d, Pd;
Ed = function(e, t) {
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
as = function() {
};
_d = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, cn(xt.current);
    var l = null;
    switch (n) {
      case "input":
        o = Oi(e, o), r = Oi(e, r), l = [];
        break;
      case "select":
        o = q({}, o, { value: void 0 }), r = q({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Li(e, o), r = Li(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ko);
    }
    Ai(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var s = o[a];
          for (i in s)
            s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Mr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (s = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null))
        if (a === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in u)
              u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
          } else
            n || (l || (l = []), l.push(
              a,
              n
            )), n = u;
        else
          a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Mr.hasOwnProperty(a) ? (u != null && a === "onScroll" && Y("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Pd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!G)
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
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function s0(e, t, n) {
  var r = t.pendingProps;
  switch (nu(t), t.tag) {
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
      return xe(t), null;
    case 1:
      return ze(t.type) && Qo(), xe(t), null;
    case 3:
      return r = t.stateNode, Xn(), X($e), X(_e), fu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (po(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && (gs(ut), ut = null))), as(e, t), xe(t), null;
    case 5:
      cu(t);
      var o = cn(Ur.current);
      if (n = t.type, e !== null && t.stateNode != null)
        _d(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(x(166));
          return xe(t), null;
        }
        if (e = cn(xt.current), po(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[vt] = t, r[Fr] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < pr.length; o++)
                Y(pr[o], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y(
                "error",
                r
              ), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              na(r, l), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, Y("invalid", r);
              break;
            case "textarea":
              oa(r, l), Y("invalid", r);
          }
          Ai(n, l), o = null;
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && fo(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && fo(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Mr.hasOwnProperty(i) && s != null && i === "onScroll" && Y("scroll", r);
            }
          switch (n) {
            case "input":
              ro(r), ra(r, l, !0);
              break;
            case "textarea":
              ro(r), la(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Ko);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = bc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[vt] = t, e[Fr] = r, Ed(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Di(n, r), n) {
              case "dialog":
                Y("cancel", e), Y("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < pr.length; o++)
                  Y(pr[o], e);
                o = r;
                break;
              case "source":
                Y("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  e
                ), Y("load", e), o = r;
                break;
              case "details":
                Y("toggle", e), o = r;
                break;
              case "input":
                na(e, r), o = Oi(e, r), Y("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = q({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                oa(e, r), o = Li(e, r), Y("invalid", e);
                break;
              default:
                o = r;
            }
            Ai(n, o), s = o;
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l];
                l === "style" ? nf(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ef(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Tr(e, u) : typeof u == "number" && Tr(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Mr.hasOwnProperty(l) ? u != null && l === "onScroll" && Y("scroll", e) : u != null && Bs(e, l, u, i));
              }
            switch (n) {
              case "input":
                ro(e), ra(e, r, !1);
                break;
              case "textarea":
                ro(e), la(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? Dn(e, !!r.multiple, l, !1) : r.defaultValue != null && Dn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ko);
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null)
        Pd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(x(166));
        if (n = cn(Ur.current), cn(xt.current), po(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (l = r.nodeValue !== n) && (e = Ue, e !== null))
            switch (e.tag) {
              case 3:
                fo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && fo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (X(Z), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && Fe !== null && t.mode & 1 && !(t.flags & 128))
          Vf(), Qn(), t.flags |= 98560, l = !1;
        else if (l = po(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l)
              throw Error(x(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(x(317));
            l[vt] = t;
          } else
            Qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), l = !1;
        } else
          ut !== null && (gs(ut), ut = null), l = !0;
        if (!l)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Z.current & 1 ? ae === 0 && (ae = 3) : Cu())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return Xn(), as(e, t), e === null && Ar(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return iu(t.type._context), xe(t), null;
    case 17:
      return ze(t.type) && Qo(), xe(t), null;
    case 19:
      if (X(Z), l = t.memoizedState, l === null)
        return xe(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
        if (r)
          ur(l, !1);
        else {
          if (ae !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = bo(e), i !== null) {
                for (t.flags |= 128, ur(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Q(Z, Z.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && re() > Zn && (t.flags |= 128, r = !0, ur(l, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = bo(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ur(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !G)
              return xe(t), null;
          } else
            2 * re() - l.renderingStartTime > Zn && n !== 1073741824 && (t.flags |= 128, r = !0, ur(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = re(), t.sibling = null, n = Z.current, Q(Z, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return xu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function u0(e, t) {
  switch (nu(t), t.tag) {
    case 1:
      return ze(t.type) && Qo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xn(), X($e), X(_e), fu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return cu(t), null;
    case 13:
      if (X(Z), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(x(340));
        Qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return X(Z), null;
    case 4:
      return Xn(), null;
    case 10:
      return iu(t.type._context), null;
    case 22:
    case 23:
      return xu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yo = !1, Ee = !1, a0 = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else
      n.current = null;
}
function cs(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Xa = !1;
function c0(e, t) {
  if (Yi = Wo, e = Of(), eu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, s = -1, u = -1, a = 0, d = 0, p = e, m = null;
          t:
            for (; ; ) {
              for (var v; p !== n || o !== 0 && p.nodeType !== 3 || (s = i + o), p !== l || r !== 0 && p.nodeType !== 3 || (u = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (v = p.firstChild) !== null; )
                m = p, p = v;
              for (; ; ) {
                if (p === e)
                  break t;
                if (m === n && ++a === o && (s = i), m === l && ++d === r && (u = i), (v = p.nextSibling) !== null)
                  break;
                p = m, m = p.parentNode;
              }
              p = v;
            }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Xi = { focusedElem: e, selectionRange: n }, Wo = !1, M = t; M !== null; )
    if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, M = e;
    else
      for (; M !== null; ) {
        t = M;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps, N = w.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : lt(t.type, y), N);
                  f.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(x(163));
            }
        } catch (g) {
          ne(t, t.return, g);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, M = e;
          break;
        }
        M = t.return;
      }
  return w = Xa, Xa = !1, w;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && cs(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Dl(e, t) {
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
function fs(e) {
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
function Nd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Nd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[Fr], delete t[Ji], delete t[Qg], delete t[Yg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Md(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ga(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Md(e.return))
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
function ds(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ko));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ds(e, t, n), e = e.sibling; e !== null; )
      ds(e, t, n), e = e.sibling;
}
function ps(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (ps(e, t, n), e = e.sibling; e !== null; )
      ps(e, t, n), e = e.sibling;
}
var he = null, it = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; )
    Td(e, t, n), n = n.sibling;
}
function Td(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(Tl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ee || zn(n, t);
    case 6:
      var r = he, o = it;
      he = null, At(e, t, n), he = r, it = o, he !== null && (it ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null && (it ? (e = he, n = n.stateNode, e.nodeType === 8 ? fi(e.parentNode, n) : e.nodeType === 1 && fi(e, n), zr(e)) : fi(he, n.stateNode));
      break;
    case 4:
      r = he, o = it, he = n.stateNode.containerInfo, it = !0, At(e, t, n), he = r, it = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && cs(n, t, i), o = o.next;
        } while (o !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (!Ee && (zn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          ne(n, t, s);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, At(e, t, n), Ee = r) : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function Za(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new a0()), t.forEach(function(r) {
      var o = w0.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e, i = t, s = i;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                he = s.stateNode, it = !1;
                break e;
              case 3:
                he = s.stateNode.containerInfo, it = !0;
                break e;
              case 4:
                he = s.stateNode.containerInfo, it = !0;
                break e;
            }
            s = s.return;
          }
        if (he === null)
          throw Error(x(160));
        Td(l, i, o), he = null, it = !1;
        var u = o.alternate;
        u !== null && (u.return = null), o.return = null;
      } catch (a) {
        ne(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Rd(t, e), t = t.sibling;
}
function Rd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ot(t, e), pt(e), r & 4) {
        try {
          kr(3, e, e.return), Dl(3, e);
        } catch (y) {
          ne(e, e.return, y);
        }
        try {
          kr(5, e, e.return);
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 1:
      ot(t, e), pt(e), r & 512 && n !== null && zn(n, n.return);
      break;
    case 5:
      if (ot(t, e), pt(e), r & 512 && n !== null && zn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Tr(o, "");
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null)
          try {
            s === "input" && l.type === "radio" && l.name != null && Jc(o, l), Di(s, i);
            var a = Di(s, l);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i], p = u[i + 1];
              d === "style" ? nf(o, p) : d === "dangerouslySetInnerHTML" ? ef(o, p) : d === "children" ? Tr(o, p) : Bs(o, d, p, a);
            }
            switch (s) {
              case "input":
                $i(o, l);
                break;
              case "textarea":
                qc(o, l);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null ? Dn(o, !!l.multiple, v, !1) : m !== !!l.multiple && (l.defaultValue != null ? Dn(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : Dn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Fr] = l;
          } catch (y) {
            ne(e, e.return, y);
          }
      }
      break;
    case 6:
      if (ot(t, e), pt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(x(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 3:
      if (ot(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          zr(t.containerInfo);
        } catch (y) {
          ne(e, e.return, y);
        }
      break;
    case 4:
      ot(t, e), pt(e);
      break;
    case 13:
      ot(t, e), pt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Su = re())), r & 4 && Za(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (a = Ee) || d, ot(t, e), Ee = a) : ot(t, e), pt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1)
          for (M = e, d = e.child; d !== null; ) {
            for (p = M = d; M !== null; ) {
              switch (m = M, v = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, m, m.return);
                  break;
                case 1:
                  zn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (y) {
                      ne(r, n, y);
                    }
                  }
                  break;
                case 5:
                  zn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    qa(p);
                    continue;
                  }
              }
              v !== null ? (v.return = m, M = v) : qa(p);
            }
            d = d.sibling;
          }
        e:
          for (d = null, p = e; ; ) {
            if (p.tag === 5) {
              if (d === null) {
                d = p;
                try {
                  o = p.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = p.stateNode, u = p.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = tf("display", i));
                } catch (y) {
                  ne(e, e.return, y);
                }
              }
            } else if (p.tag === 6) {
              if (d === null)
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (y) {
                  ne(e, e.return, y);
                }
            } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
            if (p === e)
              break e;
            for (; p.sibling === null; ) {
              if (p.return === null || p.return === e)
                break e;
              d === p && (d = null), p = p.return;
            }
            d === p && (d = null), p.sibling.return = p.return, p = p.sibling;
          }
      }
      break;
    case 19:
      ot(t, e), pt(e), r & 4 && Za(e);
      break;
    case 21:
      break;
    default:
      ot(
        t,
        e
      ), pt(e);
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Md(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Tr(o, ""), r.flags &= -33);
          var l = Ga(e);
          ps(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, s = Ga(e);
          ds(e, s, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (u) {
      ne(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function f0(e, t, n) {
  M = e, Od(e);
}
function Od(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || yo;
      if (!i) {
        var s = o.alternate, u = s !== null && s.memoizedState !== null || Ee;
        s = yo;
        var a = Ee;
        if (yo = i, (Ee = u) && !a)
          for (M = o; M !== null; )
            i = M, u = i.child, i.tag === 22 && i.memoizedState !== null ? ba(o) : u !== null ? (u.return = i, M = u) : ba(o);
        for (; l !== null; )
          M = l, Od(l), l = l.sibling;
        M = o, yo = s, Ee = a;
      }
      Ja(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? (l.return = o, M = l) : Ja(e);
  }
}
function Ja(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || Dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var l = t.updateQueue;
              l !== null && Ia(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ia(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && zr(p);
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
              throw Error(x(163));
          }
        Ee || t.flags & 512 && fs(t);
      } catch (m) {
        ne(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function qa(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function ba(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Dl(4, t);
          } catch (u) {
            ne(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ne(t, o, u);
            }
          }
          var l = t.return;
          try {
            fs(t);
          } catch (u) {
            ne(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            fs(t);
          } catch (u) {
            ne(t, i, u);
          }
      }
    } catch (u) {
      ne(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, M = s;
      break;
    }
    M = t.return;
  }
}
var d0 = Math.ceil, nl = Lt.ReactCurrentDispatcher, vu = Lt.ReactCurrentOwner, qe = Lt.ReactCurrentBatchConfig, D = 0, pe = null, se = null, ve = 0, Ae = 0, Ln = en(0), ae = 0, Vr = null, yn = 0, Fl = 0, wu = 0, xr = null, Re = null, Su = 0, Zn = 1 / 0, Et = null, rl = !1, ms = null, Xt = null, go = !1, Wt = null, ol = 0, Cr = 0, hs = null, Oo = -1, $o = 0;
function Ne() {
  return D & 6 ? re() : Oo !== -1 ? Oo : Oo = re();
}
function Gt(e) {
  return e.mode & 1 ? D & 2 && ve !== 0 ? ve & -ve : Gg.transition !== null ? ($o === 0 && ($o = hf()), $o) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : xf(e.type)), e) : 1;
}
function ct(e, t, n, r) {
  if (50 < Cr)
    throw Cr = 0, hs = null, Error(x(185));
  Zr(e, n, r), (!(D & 2) || e !== pe) && (e === pe && (!(D & 2) && (Fl |= n), ae === 4 && Ut(e, ve)), Le(e, r), n === 1 && D === 0 && !(t.mode & 1) && (Zn = re() + 500, Ll && tn()));
}
function Le(e, t) {
  var n = e.callbackNode;
  Gy(e, t);
  var r = Bo(e, e === pe ? ve : 0);
  if (r === 0)
    n !== null && ua(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ua(n), t === 1)
      e.tag === 0 ? Xg(ec.bind(null, e)) : Bf(ec.bind(null, e)), Vg(function() {
        !(D & 6) && tn();
      }), n = null;
    else {
      switch (yf(r)) {
        case 1:
          n = Qs;
          break;
        case 4:
          n = pf;
          break;
        case 16:
          n = Uo;
          break;
        case 536870912:
          n = mf;
          break;
        default:
          n = Uo;
      }
      n = jd(n, $d.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function $d(e, t) {
  if (Oo = -1, $o = 0, D & 6)
    throw Error(x(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n)
    return null;
  var r = Bo(e, e === pe ? ve : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = ll(e, r);
  else {
    t = r;
    var o = D;
    D |= 2;
    var l = Ld();
    (pe !== e || ve !== t) && (Et = null, Zn = re() + 500, fn(e, t));
    do
      try {
        h0();
        break;
      } catch (s) {
        zd(e, s);
      }
    while (1);
    lu(), nl.current = l, D = o, se !== null ? t = 0 : (pe = null, ve = 0, t = ae);
  }
  if (t !== 0) {
    if (t === 2 && (o = Wi(e), o !== 0 && (r = o, t = ys(e, o))), t === 1)
      throw n = Vr, fn(e, 0), Ut(e, r), Le(e, re()), n;
    if (t === 6)
      Ut(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !p0(o) && (t = ll(e, r), t === 2 && (l = Wi(e), l !== 0 && (r = l, t = ys(e, l))), t === 1))
        throw n = Vr, fn(e, 0), Ut(e, r), Le(e, re()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          on(e, Re, Et);
          break;
        case 3:
          if (Ut(e, r), (r & 130023424) === r && (t = Su + 500 - re(), 10 < t)) {
            if (Bo(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ne(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Zi(on.bind(null, e, Re, Et), t);
            break;
          }
          on(e, Re, Et);
          break;
        case 4:
          if (Ut(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - at(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * d0(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Zi(on.bind(null, e, Re, Et), r);
            break;
          }
          on(e, Re, Et);
          break;
        case 5:
          on(e, Re, Et);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Le(e, re()), e.callbackNode === n ? $d.bind(null, e) : null;
}
function ys(e, t) {
  var n = xr;
  return e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256), e = ll(e, t), e !== 2 && (t = Re, Re = n, t !== null && gs(t)), e;
}
function gs(e) {
  Re === null ? Re = e : Re.push.apply(Re, e);
}
function p0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], l = o.getSnapshot;
          o = o.value;
          try {
            if (!ft(l(), o))
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
function Ut(e, t) {
  for (t &= ~wu, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - at(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ec(e) {
  if (D & 6)
    throw Error(x(327));
  Wn();
  var t = Bo(e, 0);
  if (!(t & 1))
    return Le(e, re()), null;
  var n = ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wi(e);
    r !== 0 && (t = r, n = ys(e, r));
  }
  if (n === 1)
    throw n = Vr, fn(e, 0), Ut(e, t), Le(e, re()), n;
  if (n === 6)
    throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, on(e, Re, Et), Le(e, re()), null;
}
function ku(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (Zn = re() + 500, Ll && tn());
  }
}
function gn(e) {
  Wt !== null && Wt.tag === 0 && !(D & 6) && Wn();
  var t = D;
  D |= 1;
  var n = qe.transition, r = W;
  try {
    if (qe.transition = null, W = 1, e)
      return e();
  } finally {
    W = r, qe.transition = n, D = t, !(D & 6) && tn();
  }
}
function xu() {
  Ae = Ln.current, X(Ln);
}
function fn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Hg(n)), se !== null)
    for (n = se.return; n !== null; ) {
      var r = n;
      switch (nu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qo();
          break;
        case 3:
          Xn(), X($e), X(_e), fu();
          break;
        case 5:
          cu(r);
          break;
        case 4:
          Xn();
          break;
        case 13:
          X(Z);
          break;
        case 19:
          X(Z);
          break;
        case 10:
          iu(r.type._context);
          break;
        case 22:
        case 23:
          xu();
      }
      n = n.return;
    }
  if (pe = e, se = e = Zt(e.current, null), ve = Ae = t, ae = 0, Vr = null, wu = Fl = yn = 0, Re = xr = null, an !== null) {
    for (t = 0; t < an.length; t++)
      if (n = an[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i;
        }
        n.pending = r;
      }
    an = null;
  }
  return e;
}
function zd(e, t) {
  do {
    var n = se;
    try {
      if (lu(), Mo.current = tl, el) {
        for (var r = J.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        el = !1;
      }
      if (hn = 0, de = ue = J = null, Sr = !1, Br = 0, vu.current = null, n === null || n.return === null) {
        ae = 1, Vr = t, se = null;
        break;
      }
      e: {
        var l = e, i = n.return, s = n, u = t;
        if (t = ve, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, d = s, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = d.alternate;
            m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var v = Ba(i);
          if (v !== null) {
            v.flags &= -257, Wa(v, i, s, l, t), v.mode & 1 && Ua(l, a, t), t = v, u = a;
            var w = t.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(u), t.updateQueue = y;
            } else
              w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ua(l, a, t), Cu();
              break e;
            }
            u = Error(x(426));
          }
        } else if (G && s.mode & 1) {
          var N = Ba(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256), Wa(N, i, s, l, t), ru(Gn(u, s));
            break e;
          }
        }
        l = u = Gn(u, s), ae !== 4 && (ae = 2), xr === null ? xr = [l] : xr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var f = yd(l, u, t);
              La(l, f);
              break e;
            case 1:
              s = u;
              var c = l.type, h = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Xt === null || !Xt.has(h)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var g = gd(l, s, t);
                La(l, g);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Ad(n);
    } catch (E) {
      t = E, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ld() {
  var e = nl.current;
  return nl.current = tl, e === null ? tl : e;
}
function Cu() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4), pe === null || !(yn & 268435455) && !(Fl & 268435455) || Ut(pe, ve);
}
function ll(e, t) {
  var n = D;
  D |= 2;
  var r = Ld();
  (pe !== e || ve !== t) && (Et = null, fn(e, t));
  do
    try {
      m0();
      break;
    } catch (o) {
      zd(e, o);
    }
  while (1);
  if (lu(), D = n, nl.current = r, se !== null)
    throw Error(x(261));
  return pe = null, ve = 0, ae;
}
function m0() {
  for (; se !== null; )
    Id(se);
}
function h0() {
  for (; se !== null && !Uy(); )
    Id(se);
}
function Id(e) {
  var t = Fd(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? Ad(e) : se = t, vu.current = null;
}
function Ad(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = u0(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ae = 6, se = null;
        return;
      }
    } else if (n = s0(n, t, Ae), n !== null) {
      se = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function on(e, t, n) {
  var r = W, o = qe.transition;
  try {
    qe.transition = null, W = 1, y0(e, t, n, r);
  } finally {
    qe.transition = o, W = r;
  }
  return null;
}
function y0(e, t, n, r) {
  do
    Wn();
  while (Wt !== null);
  if (D & 6)
    throw Error(x(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (Zy(e, l), e === pe && (se = pe = null, ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || go || (go = !0, jd(Uo, function() {
    return Wn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = qe.transition, qe.transition = null;
    var i = W;
    W = 1;
    var s = D;
    D |= 4, vu.current = null, c0(e, n), Rd(n, e), Ag(Xi), Wo = !!Yi, Xi = Yi = null, e.current = n, f0(n), By(), D = s, W = i, qe.transition = l;
  } else
    e.current = n;
  if (go && (go = !1, Wt = e, ol = o), l = e.pendingLanes, l === 0 && (Xt = null), Vy(n.stateNode), Le(e, re()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (rl)
    throw rl = !1, e = ms, ms = null, e;
  return ol & 1 && e.tag !== 0 && Wn(), l = e.pendingLanes, l & 1 ? e === hs ? Cr++ : (Cr = 0, hs = e) : Cr = 0, tn(), null;
}
function Wn() {
  if (Wt !== null) {
    var e = yf(ol), t = qe.transition, n = W;
    try {
      if (qe.transition = null, W = 16 > e ? 16 : e, Wt === null)
        var r = !1;
      else {
        if (e = Wt, Wt = null, ol = 0, D & 6)
          throw Error(x(331));
        var o = D;
        for (D |= 4, M = e.current; M !== null; ) {
          var l = M, i = l.child;
          if (M.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (M = a; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, d, l);
                  }
                  var p = d.child;
                  if (p !== null)
                    p.return = d, M = p;
                  else
                    for (; M !== null; ) {
                      d = M;
                      var m = d.sibling, v = d.return;
                      if (Nd(d), d === a) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = v, M = m;
                        break;
                      }
                      M = v;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var N = y.sibling;
                    y.sibling = null, y = N;
                  } while (y !== null);
                }
              }
              M = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null)
            i.return = l, M = i;
          else
            e:
              for (; M !== null; ) {
                if (l = M, l.flags & 2048)
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(9, l, l.return);
                  }
                var f = l.sibling;
                if (f !== null) {
                  f.return = l.return, M = f;
                  break e;
                }
                M = l.return;
              }
        }
        var c = e.current;
        for (M = c; M !== null; ) {
          i = M;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null)
            h.return = i, M = h;
          else
            e:
              for (i = c; M !== null; ) {
                if (s = M, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Dl(9, s);
                    }
                  } catch (E) {
                    ne(s, s.return, E);
                  }
                if (s === i) {
                  M = null;
                  break e;
                }
                var g = s.sibling;
                if (g !== null) {
                  g.return = s.return, M = g;
                  break e;
                }
                M = s.return;
              }
        }
        if (D = o, tn(), kt && typeof kt.onPostCommitFiberRoot == "function")
          try {
            kt.onPostCommitFiberRoot(Tl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      W = n, qe.transition = t;
    }
  }
  return !1;
}
function tc(e, t, n) {
  t = Gn(n, t), t = yd(e, t, 1), e = Yt(e, t, 1), t = Ne(), e !== null && (Zr(e, 1, t), Le(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3)
    tc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        tc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xt === null || !Xt.has(r))) {
          e = Gn(n, e), e = gd(t, e, 1), t = Yt(t, e, 1), e = Ne(), t !== null && (Zr(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function g0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (ve & n) === n && (ae === 4 || ae === 3 && (ve & 130023424) === ve && 500 > re() - Su ? fn(e, 0) : wu |= n), Le(e, t);
}
function Dd(e, t) {
  t === 0 && (e.mode & 1 ? (t = io, io <<= 1, !(io & 130023424) && (io = 4194304)) : t = 1);
  var n = Ne();
  e = $t(e, t), e !== null && (Zr(e, t, n), Le(e, n));
}
function v0(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Dd(e, n);
}
function w0(e, t) {
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
      throw Error(x(314));
  }
  r !== null && r.delete(t), Dd(e, n);
}
var Fd;
Fd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current)
      Oe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Oe = !1, i0(e, t, n);
      Oe = !!(e.flags & 131072);
    }
  else
    Oe = !1, G && t.flags & 1048576 && Wf(t, Go, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ro(e, t), e = t.pendingProps;
      var o = Kn(t, _e.current);
      Bn(t, n), o = pu(null, t, r, e, o, n);
      var l = mu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ze(r) ? (l = !0, Yo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, uu(t), o.updater = Al, t.stateNode = o, o._reactInternals = t, rs(t, r, e, n), t = is(null, t, r, !0, l, n)) : (t.tag = 0, G && l && tu(t), Pe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ro(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = k0(r), e = lt(r, e), o) {
          case 0:
            t = ls(null, t, r, e, n);
            break e;
          case 1:
            t = Ka(null, t, r, e, n);
            break e;
          case 11:
            t = Ha(null, t, r, e, n);
            break e;
          case 14:
            t = Va(null, t, r, lt(r.type, e), n);
            break e;
        }
        throw Error(x(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), ls(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), Ka(e, t, r, o, n);
    case 3:
      e: {
        if (kd(t), e === null)
          throw Error(x(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, Xf(e, t), qo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated)
          if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = Gn(Error(x(423)), t), t = Qa(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Gn(Error(x(424)), t), t = Qa(e, t, r, n, o);
            break e;
          } else
            for (Fe = Qt(t.stateNode.containerInfo.firstChild), Ue = t, G = !0, ut = null, n = Qf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Qn(), r === o) {
            t = zt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Gf(t), e === null && es(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Gi(r, o) ? i = null : l !== null && Gi(r, l) && (t.flags |= 32), Sd(e, t), Pe(e, t, i, n), t.child;
    case 6:
      return e === null && es(t), null;
    case 13:
      return xd(e, t, n);
    case 4:
      return au(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Yn(t, null, r, n) : Pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), Ha(e, t, r, o, n);
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, Q(Zo, r._currentValue), r._currentValue = i, l !== null)
          if (ft(l.value, i)) {
            if (l.children === o.children && !$e.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      u = Mt(-1, n & -n), u.tag = 2;
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null ? u.next = u : (u.next = d.next, d.next = u), a.pending = u;
                      }
                    }
                    l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), ts(
                      l.return,
                      n,
                      t
                    ), s.lanes |= n;
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10)
                i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (i = l.return, i === null)
                  throw Error(x(341));
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), ts(i, n, t), i = l.sibling;
              } else
                i = l.child;
              if (i !== null)
                i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (l = i.sibling, l !== null) {
                    l.return = i.return, i = l;
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Pe(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Bn(t, n), o = be(o), r = r(o), t.flags |= 1, Pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = lt(r, t.pendingProps), o = lt(r.type, o), Va(e, t, r, o, n);
    case 15:
      return vd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), Ro(e, t), t.tag = 1, ze(r) ? (e = !0, Yo(t)) : e = !1, Bn(t, n), hd(t, r, o), rs(t, r, o, n), is(null, t, r, !0, e, n);
    case 19:
      return Cd(e, t, n);
    case 22:
      return wd(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function jd(e, t) {
  return df(e, t);
}
function S0(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Je(e, t, n, r) {
  return new S0(e, t, n, r);
}
function Eu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function k0(e) {
  if (typeof e == "function")
    return Eu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Hs)
      return 11;
    if (e === Vs)
      return 14;
  }
  return 2;
}
function Zt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function zo(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function")
    Eu(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case En:
          return dn(n.children, o, l, t);
        case Ws:
          i = 8, o |= 8;
          break;
        case Ni:
          return e = Je(12, n, t, o | 2), e.elementType = Ni, e.lanes = l, e;
        case Mi:
          return e = Je(13, n, t, o), e.elementType = Mi, e.lanes = l, e;
        case Ti:
          return e = Je(19, n, t, o), e.elementType = Ti, e.lanes = l, e;
        case Xc:
          return jl(n, o, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Qc:
                i = 10;
                break e;
              case Yc:
                i = 9;
                break e;
              case Hs:
                i = 11;
                break e;
              case Vs:
                i = 14;
                break e;
              case Dt:
                i = 16, r = null;
                break e;
            }
          throw Error(x(130, e == null ? e : typeof e, ""));
      }
  return t = Je(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function dn(e, t, n, r) {
  return e = Je(7, e, r, t), e.lanes = n, e;
}
function jl(e, t, n, r) {
  return e = Je(22, e, r, t), e.elementType = Xc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function wi(e, t, n) {
  return e = Je(6, e, null, t), e.lanes = n, e;
}
function Si(e, t, n) {
  return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function x0(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ei(0), this.expirationTimes = ei(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ei(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function _u(e, t, n, r, o, l, i, s, u) {
  return e = new x0(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Je(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, uu(l), e;
}
function C0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Cn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ud(e) {
  if (!e)
    return qt;
  e = e._reactInternals;
  e: {
    if (wn(e) !== e || e.tag !== 1)
      throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n))
      return Uf(e, n, t);
  }
  return t;
}
function Bd(e, t, n, r, o, l, i, s, u) {
  return e = _u(n, r, !0, e, o, l, i, s, u), e.context = Ud(null), n = e.current, r = Ne(), o = Gt(n), l = Mt(r, o), l.callback = t ?? null, Yt(n, l, o), e.current.lanes = o, Zr(e, o, r), Le(e, r), e;
}
function Ul(e, t, n, r) {
  var o = t.current, l = Ne(), i = Gt(o);
  return n = Ud(n), t.context === null ? t.context = n : t.pendingContext = n, t = Mt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Yt(o, t, i), e !== null && (ct(e, o, i, l), No(e, o, i)), i;
}
function il(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function nc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pu(e, t) {
  nc(e, t), (e = e.alternate) && nc(e, t);
}
function E0() {
  return null;
}
var Wd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Nu(e) {
  this._internalRoot = e;
}
Bl.prototype.render = Nu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(x(409));
  Ul(e, t, null, null);
};
Bl.prototype.unmount = Nu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function() {
      Ul(null, e, null, null);
    }), t[Ot] = null;
  }
};
function Bl(e) {
  this._internalRoot = e;
}
Bl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = wf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++)
      ;
    jt.splice(n, 0, e), n === 0 && kf(e);
  }
};
function Mu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Wl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function rc() {
}
function _0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var a = il(i);
        l.call(a);
      };
    }
    var i = Bd(t, r, e, 0, null, !1, !1, "", rc);
    return e._reactRootContainer = i, e[Ot] = i.current, Ar(e.nodeType === 8 ? e.parentNode : e), gn(), i;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = il(u);
      s.call(a);
    };
  }
  var u = _u(e, 0, !1, null, null, !1, !1, "", rc);
  return e._reactRootContainer = u, e[Ot] = u.current, Ar(e.nodeType === 8 ? e.parentNode : e), gn(function() {
    Ul(t, u, n, r);
  }), u;
}
function Hl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var u = il(i);
        s.call(u);
      };
    }
    Ul(t, i, e, o);
  } else
    i = _0(n, t, e, o, r);
  return il(i);
}
gf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 && (Ys(t, n | 1), Le(t, re()), !(D & 6) && (Zn = re() + 500, tn()));
      }
      break;
    case 13:
      gn(function() {
        var r = $t(e, 1);
        if (r !== null) {
          var o = Ne();
          ct(r, e, 1, o);
        }
      }), Pu(e, 1);
  }
};
Xs = function(e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = Ne();
      ct(t, e, 134217728, n);
    }
    Pu(e, 134217728);
  }
};
vf = function(e) {
  if (e.tag === 13) {
    var t = Gt(e), n = $t(e, t);
    if (n !== null) {
      var r = Ne();
      ct(n, e, t, r);
    }
    Pu(e, t);
  }
};
wf = function() {
  return W;
};
Sf = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
ji = function(e, t, n) {
  switch (t) {
    case "input":
      if ($i(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = zl(r);
            if (!o)
              throw Error(x(90));
            Zc(r), $i(r, o);
          }
        }
      }
      break;
    case "textarea":
      qc(e, n);
      break;
    case "select":
      t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
  }
};
lf = ku;
sf = gn;
var P0 = { usingClientEntryPoint: !1, Events: [qr, Mn, zl, rf, of, ku] }, ar = { findFiberByHostInstance: un, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, N0 = { bundleType: ar.bundleType, version: ar.version, rendererPackageName: ar.rendererPackageName, rendererConfig: ar.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = cf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ar.findFiberByHostInstance || E0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vo.isDisabled && vo.supportsFiber)
    try {
      Tl = vo.inject(N0), kt = vo;
    } catch {
    }
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P0;
He.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mu(t))
    throw Error(x(200));
  return C0(e, t, null, n);
};
He.createRoot = function(e, t) {
  if (!Mu(e))
    throw Error(x(299));
  var n = !1, r = "", o = Wd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _u(e, 1, !1, null, null, n, !1, r, o), e[Ot] = t.current, Ar(e.nodeType === 8 ? e.parentNode : e), new Nu(t);
};
He.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = cf(t), e = e === null ? null : e.stateNode, e;
};
He.flushSync = function(e) {
  return gn(e);
};
He.hydrate = function(e, t, n) {
  if (!Wl(t))
    throw Error(x(200));
  return Hl(null, e, t, !0, n);
};
He.hydrateRoot = function(e, t, n) {
  if (!Mu(e))
    throw Error(x(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Wd;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Bd(t, null, e, 1, n ?? null, o, !1, l, i), e[Ot] = t.current, Ar(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Bl(t);
};
He.render = function(e, t, n) {
  if (!Wl(t))
    throw Error(x(200));
  return Hl(null, e, t, !1, n);
};
He.unmountComponentAtNode = function(e) {
  if (!Wl(e))
    throw Error(x(40));
  return e._reactRootContainer ? (gn(function() {
    Hl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ot] = null;
    });
  }), !0) : !1;
};
He.unstable_batchedUpdates = ku;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Wl(n))
    throw Error(x(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(x(38));
  return Hl(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function Hd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hd);
    } catch (e) {
      console.error(e);
    }
}
Hd(), Wc.exports = He;
var M0 = Wc.exports, Vd, oc = M0;
Vd = oc.createRoot, oc.hydrateRoot;
function T0(e) {
  const t = Vd(e);
  return {
    render(n) {
      t.render(
        /* @__PURE__ */ k(Cy, { theme: n.theme, children: /* @__PURE__ */ k(
          Qp,
          {
            client: n.client,
            options: n.options ?? {},
            entity: n.entity
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
  T0 as default
};
