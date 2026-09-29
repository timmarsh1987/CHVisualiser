(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:100%;min-height:calc(100dvh - 12px);box-sizing:border-box;position:relative;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:0;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;background:#000000;border-radius:4px;padding:5px 8px;line-height:0}.chd-toolbar-logo{display:block;height:16px;width:auto}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-boot-status,.chd-boot-error{margin:auto;padding:24px;max-width:480px;font-size:13px;line-height:1.45;color:var(--chd-muted)}.chd-boot-error{color:#a32d2d}.chd-save-status{position:absolute;right:12px;bottom:12px;z-index:30;max-width:min(360px,calc(100% - 24px));padding:6px 10px;border-radius:999px;font-size:11px;line-height:1.3;background:rgba(255,255,255,.94);border:.5px solid var(--chd-border);color:var(--chd-muted);box-shadow:0 4px 16px #00000014;pointer-events:none}.chd-save-status--pending{color:#8a6d1d}.chd-save-status--saving,.chd-save-status--loading{color:#355f8a}.chd-save-status--saved{color:#1d6b4f}.chd-save-status--error{color:#a32d2d;pointer-events:auto}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-btn--accent{background:var(--chd-accent);border-color:var(--chd-accent);color:#fff}.chd-btn--accent:hover:not(:disabled){background:#1db86a;border-color:#1db86a;color:#fff}.chd-generate{position:relative;display:flex;align-items:center;gap:8px}.chd-generate-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:40;min-width:180px;padding:4px;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 24px #0000001f}.chd-generate-option{display:flex;flex-direction:column;align-items:flex-start;gap:1px;width:100%;border:none;background:transparent;text-align:left;padding:8px 10px;border-radius:6px;cursor:pointer;color:var(--chd-text);font:inherit}.chd-generate-option span{font-size:11px;color:var(--chd-muted)}.chd-generate-option:hover:not(:disabled){background:#e8f6ee}.chd-generate-error{font-size:11px;color:#a32d2d;white-space:nowrap}.chd-artboard--capturing{overflow:hidden}.chd-artboard--capturing .chd-selection-box,.chd-artboard--capturing .chd-selection-outline,.chd-artboard--capturing .chd-handle,.chd-artboard--capturing .chd-layer-lock,.chd-artboard--capturing .chd-artboard-page{display:none!important}.chd-toolbar-field{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--chd-muted)}.chd-toolbar-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;max-width:180px}.chd-toolbar-size{font-size:11px;color:var(--chd-muted);white-space:nowrap}.chd-field.chd-pin-field{gap:14px}.chd-pin-field .chd-pin-grid{margin-top:0}.chd-pin-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;margin-top:4px}.chd-field-hint{margin:6px 0 0;font-size:11px;color:var(--chd-muted);line-height:1.35}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layers-panel--admin .chd-layer-list-item{grid-template-columns:auto 1fr auto auto auto}.chd-layer-list-item--dragging{opacity:.45}.chd-layer-list-item--drag-over{outline:1px solid var(--chd-accent);background:#e8f6ee}.chd-layer-drag-handle{color:var(--chd-muted);font-size:11px;line-height:1;padding:0 4px;cursor:grab;-webkit-user-select:none;user-select:none}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{display:flex;flex-direction:row;align-items:center;gap:10px;color:var(--chd-text)}.chd-field-checkbox input,.chd-field .chd-field-checkbox input[type=checkbox]{width:16px;height:16px;margin:0;padding:0;border:none;flex:none;accent-color:var(--chd-accent)}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:#cfcbc3;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:visible}.chd-artboard-page{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;box-shadow:0 0 0 1px #00000014}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-lock{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;left:3px;top:3px;z-index:6;display:flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:4px;background:rgba(255,255,255,.92);border:.5px solid var(--chd-border);color:var(--chd-text);pointer-events:auto;cursor:pointer;padding:0;box-shadow:0 1px 2px #0000001f}.chd-layer-lock svg{display:block}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}.chd-image-source{display:flex;flex-direction:column;gap:8px;font-size:11px;color:var(--chd-muted)}.chd-root .asset-picker{position:relative}.chd-root .asset-picker-trigger{width:100%;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:6px 8px;font-size:12px;cursor:pointer}.chd-root .asset-picker-trigger:hover:not(:disabled){background:#fff}.chd-root .asset-picker-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;display:flex;align-items:center;justify-content:center;padding:24px}.chd-root .asset-picker-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;border:none;padding:0;background:rgba(0,0,0,.4);cursor:pointer}.chd-root .asset-picker-panel-overlay{position:relative;z-index:1;width:min(720px,100%);max-height:min(80vh,720px);overflow:auto;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 28px #00000029;padding:12px}.chd-root .asset-picker-panel-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.chd-root .asset-picker-close,.chd-root .asset-picker-mode-tab,.chd-root .asset-picker-url-apply{border:.5px solid var(--chd-border);background:#fff;border-radius:6px;padding:6px 10px;cursor:pointer;font-size:12px;color:var(--chd-text)}.chd-root .asset-picker-mode-tabs{display:flex;gap:4px;margin-bottom:10px}.chd-root .asset-picker-mode-tab{flex:1}.chd-root .asset-picker-mode-tab-active,.chd-root .asset-picker-url-apply{background:var(--chd-accent);border-color:var(--chd-accent);color:#fff}.chd-root .asset-picker-url-apply:disabled{opacity:.6;cursor:not-allowed}.chd-root .asset-picker-url-form label{display:block;margin-bottom:8px;font-size:12px;color:var(--chd-muted)}.chd-root .asset-picker-search{width:100%;padding:6px 8px;border:.5px solid var(--chd-border);border-radius:6px;margin-bottom:8px;font:inherit;color:var(--chd-text);background:#fff}.chd-root .asset-picker-hint,.chd-root .asset-picker-loading,.chd-root .asset-picker-empty{font-size:12px;color:var(--chd-muted);margin-bottom:8px}.chd-root .asset-picker-error{font-size:12px;color:#a32d2d;margin-bottom:8px}.chd-root .asset-picker-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-height:420px;overflow-y:auto}.chd-root .asset-picker-thumb{border:none;background:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;color:var(--chd-text)}.chd-root .asset-picker-thumb img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px;background:#f4f7f5}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function Ry(e, t) {
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
function Qy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dp = { exports: {} }, ga = {}, Bp = { exports: {} }, W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi = Symbol.for("react.element"), Hy = Symbol.for("react.portal"), Uy = Symbol.for("react.fragment"), Fy = Symbol.for("react.strict_mode"), jy = Symbol.for("react.profiler"), Gy = Symbol.for("react.provider"), Yy = Symbol.for("react.context"), Ky = Symbol.for("react.forward_ref"), Zy = Symbol.for("react.suspense"), Xy = Symbol.for("react.memo"), Wy = Symbol.for("react.lazy"), Cd = Symbol.iterator;
function Jy(e) {
  return e === null || typeof e != "object" ? null : (e = Cd && e[Cd] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Op = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Np = Object.assign, Mp = {};
function uo(e, t, n) {
  this.props = e, this.context = t, this.refs = Mp, this.updater = n || Op;
}
uo.prototype.isReactComponent = {};
uo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
uo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xp() {
}
xp.prototype = uo.prototype;
function Cc(e, t, n) {
  this.props = e, this.context = t, this.refs = Mp, this.updater = n || Op;
}
var Tc = Cc.prototype = new xp();
Tc.constructor = Cc;
Np(Tc, uo.prototype);
Tc.isPureReactComponent = !0;
var Td = Array.isArray, bp = Object.prototype.hasOwnProperty, kc = { current: null }, zp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lp(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      bp.call(t, r) && !zp.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Pi, type: e, key: i, ref: s, props: o, _owner: kc.current };
}
function Vy(e, t) {
  return { $$typeof: Pi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Pc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pi;
}
function qy(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var kd = /\/+/g;
function Ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? qy("" + e.key) : t.toString(36);
}
function Cs(e, t, n, r, o) {
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
          case Pi:
          case Hy:
            s = !0;
        }
    }
  if (s)
    return s = e, o = o(s), e = r === "" ? "." + Ol(s, 0) : r, Td(o) ? (n = "", e != null && (n = e.replace(kd, "$&/") + "/"), Cs(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Pc(o) && (o = Vy(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(kd, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Td(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Ol(i, a);
      s += Cs(i, t, n, l, o);
    }
  else if (l = Jy(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, l = r + Ol(i, a++), s += Cs(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Yi(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Cs(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function _y(e) {
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
var et = { current: null }, Ts = { transition: null }, $y = { ReactCurrentDispatcher: et, ReactCurrentBatchConfig: Ts, ReactCurrentOwner: kc };
function Ip() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = { map: Yi, forEach: function(e, t, n) {
  Yi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Yi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Yi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Pc(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
W.Component = uo;
W.Fragment = Uy;
W.Profiler = jy;
W.PureComponent = Cc;
W.StrictMode = Fy;
W.Suspense = Zy;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $y;
W.act = Ip;
W.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Np({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = kc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (l in t)
      bp.call(t, l) && !zp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
  return { $$typeof: Pi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
W.createContext = function(e) {
  return e = { $$typeof: Yy, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Gy, _context: e }, e.Consumer = e;
};
W.createElement = Lp;
W.createFactory = function(e) {
  var t = Lp.bind(null, e);
  return t.type = e, t;
};
W.createRef = function() {
  return { current: null };
};
W.forwardRef = function(e) {
  return { $$typeof: Ky, render: e };
};
W.isValidElement = Pc;
W.lazy = function(e) {
  return { $$typeof: Wy, _payload: { _status: -1, _result: e }, _init: _y };
};
W.memo = function(e, t) {
  return { $$typeof: Xy, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function(e) {
  var t = Ts.transition;
  Ts.transition = {};
  try {
    e();
  } finally {
    Ts.transition = t;
  }
};
W.unstable_act = Ip;
W.useCallback = function(e, t) {
  return et.current.useCallback(e, t);
};
W.useContext = function(e) {
  return et.current.useContext(e);
};
W.useDebugValue = function() {
};
W.useDeferredValue = function(e) {
  return et.current.useDeferredValue(e);
};
W.useEffect = function(e, t) {
  return et.current.useEffect(e, t);
};
W.useId = function() {
  return et.current.useId();
};
W.useImperativeHandle = function(e, t, n) {
  return et.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function(e, t) {
  return et.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function(e, t) {
  return et.current.useLayoutEffect(e, t);
};
W.useMemo = function(e, t) {
  return et.current.useMemo(e, t);
};
W.useReducer = function(e, t, n) {
  return et.current.useReducer(e, t, n);
};
W.useRef = function(e) {
  return et.current.useRef(e);
};
W.useState = function(e) {
  return et.current.useState(e);
};
W.useSyncExternalStore = function(e, t, n) {
  return et.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function() {
  return et.current.useTransition();
};
W.version = "18.3.1";
Bp.exports = W;
var D = Bp.exports;
const ev = /* @__PURE__ */ Qy(D), mu = /* @__PURE__ */ Ry({
  __proto__: null,
  default: ev
}, [D]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tv = D, nv = Symbol.for("react.element"), rv = Symbol.for("react.fragment"), ov = Object.prototype.hasOwnProperty, iv = tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, sv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rp(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    ov.call(t, r) && !sv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: nv, type: e, key: i, ref: s, props: o, _owner: iv.current };
}
ga.Fragment = rv;
ga.jsx = Rp;
ga.jsxs = Rp;
Dp.exports = ga;
var Sc = Dp.exports;
const jr = Sc.Fragment, k = Sc.jsx, H = Sc.jsxs;
function av(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Pd = "$$material";
function Ue() {
  return Ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ue.apply(null, arguments);
}
function ha(e, t) {
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
var lv = !1;
function uv(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function cv(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var fv = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !lv : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(cv(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = uv(o);
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
}(), Ze = "-ms-", Qs = "-moz-", ee = "-webkit-", Qp = "comm", Dc = "rule", Bc = "decl", dv = "@import", Hp = "@keyframes", Av = "@layer", pv = Math.abs, ya = String.fromCharCode, mv = Object.assign;
function gv(e, t) {
  return Qe(e, 0) ^ 45 ? (((t << 2 ^ Qe(e, 0)) << 2 ^ Qe(e, 1)) << 2 ^ Qe(e, 2)) << 2 ^ Qe(e, 3) : 0;
}
function Up(e) {
  return e.trim();
}
function hv(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, n) {
  return e.replace(t, n);
}
function gu(e, t) {
  return e.indexOf(t);
}
function Qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function $o(e, t, n) {
  return e.slice(t, n);
}
function qt(e) {
  return e.length;
}
function Oc(e) {
  return e.length;
}
function Ki(e, t) {
  return t.push(e), e;
}
function yv(e, t) {
  return e.map(t).join("");
}
var va = 1, qr = 1, Fp = 0, at = 0, Te = 0, co = "";
function wa(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: va, column: qr, length: s, return: "" };
}
function Eo(e, t) {
  return mv(wa("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function vv() {
  return Te;
}
function wv() {
  return Te = at > 0 ? Qe(co, --at) : 0, qr--, Te === 10 && (qr = 1, va--), Te;
}
function mt() {
  return Te = at < Fp ? Qe(co, at++) : 0, qr++, Te === 10 && (qr = 1, va++), Te;
}
function en() {
  return Qe(co, at);
}
function ks() {
  return at;
}
function Si(e, t) {
  return $o(co, e, t);
}
function ei(e) {
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
function jp(e) {
  return va = qr = 1, Fp = qt(co = e), at = 0, [];
}
function Gp(e) {
  return co = "", e;
}
function Ps(e) {
  return Up(Si(at - 1, hu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ev(e) {
  for (; (Te = en()) && Te < 33; )
    mt();
  return ei(e) > 2 || ei(Te) > 3 ? "" : " ";
}
function Cv(e, t) {
  for (; --t && mt() && !(Te < 48 || Te > 102 || Te > 57 && Te < 65 || Te > 70 && Te < 97); )
    ;
  return Si(e, ks() + (t < 6 && en() == 32 && mt() == 32));
}
function hu(e) {
  for (; mt(); )
    switch (Te) {
      case e:
        return at;
      case 34:
      case 39:
        e !== 34 && e !== 39 && hu(Te);
        break;
      case 40:
        e === 41 && hu(e);
        break;
      case 92:
        mt();
        break;
    }
  return at;
}
function Tv(e, t) {
  for (; mt() && e + Te !== 47 + 10; )
    if (e + Te === 42 + 42 && en() === 47)
      break;
  return "/*" + Si(t, at - 1) + "*" + ya(e === 47 ? e : mt());
}
function kv(e) {
  for (; !ei(en()); )
    mt();
  return Si(e, at);
}
function Pv(e) {
  return Gp(Ss("", null, null, null, [""], e = jp(e), 0, [0], e));
}
function Ss(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, f = 0, c = s, m = 0, E = 0, w = 0, v = 1, L = 1, p = 1, A = 0, g = "", C = o, h = i, P = r, T = g; L; )
    switch (w = A, A = mt()) {
      case 40:
        if (w != 108 && Qe(T, c - 1) == 58) {
          gu(T += te(Ps(A), "&", "&\f"), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Ps(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Ev(w);
        break;
      case 92:
        T += Cv(ks() - 1, 7);
        continue;
      case 47:
        switch (en()) {
          case 42:
          case 47:
            Ki(Sv(Tv(mt(), ks()), t, n), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * v:
        a[u++] = qt(T) * p;
      case 125 * v:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            L = 0;
          case 59 + f:
            p == -1 && (T = te(T, /\f/g, "")), E > 0 && qt(T) - c && Ki(E > 32 ? Dd(T + ";", r, n, c - 1) : Dd(te(T, " ", "") + ";", r, n, c - 2), l);
            break;
          case 59:
            T += ";";
          default:
            if (Ki(P = Sd(T, t, n, u, f, o, a, g, C = [], h = [], c), i), A === 123)
              if (f === 0)
                Ss(T, t, P, P, C, i, c, a, h);
              else
                switch (m === 99 && Qe(T, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ss(e, P, P, r && Ki(Sd(e, P, P, 0, 0, o, a, g, o, C = [], c), h), o, h, c, a, r ? C : h);
                    break;
                  default:
                    Ss(T, P, P, P, [""], h, 0, a, h);
                }
        }
        u = f = E = 0, v = p = 1, g = T = "", c = s;
        break;
      case 58:
        c = 1 + qt(T), E = w;
      default:
        if (v < 1) {
          if (A == 123)
            --v;
          else if (A == 125 && v++ == 0 && wv() == 125)
            continue;
        }
        switch (T += ya(A), A * v) {
          case 38:
            p = f > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            a[u++] = (qt(T) - 1) * p, p = 1;
            break;
          case 64:
            en() === 45 && (T += Ps(mt())), m = en(), f = c = qt(g = T += kv(ks())), A++;
            break;
          case 45:
            w === 45 && qt(T) == 2 && (v = 0);
        }
    }
  return i;
}
function Sd(e, t, n, r, o, i, s, a, l, u, f) {
  for (var c = o - 1, m = o === 0 ? i : [""], E = Oc(m), w = 0, v = 0, L = 0; w < r; ++w)
    for (var p = 0, A = $o(e, c + 1, c = pv(v = s[w])), g = e; p < E; ++p)
      (g = Up(v > 0 ? m[p] + " " + A : te(A, /&\f/g, m[p]))) && (l[L++] = g);
  return wa(e, t, n, o === 0 ? Dc : a, l, u, f);
}
function Sv(e, t, n) {
  return wa(e, t, n, Qp, ya(vv()), $o(e, 2, -2), 0);
}
function Dd(e, t, n, r) {
  return wa(e, t, n, Bc, $o(e, 0, r), $o(e, r + 1, -1), r);
}
function Gr(e, t) {
  for (var n = "", r = Oc(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Dv(e, t, n, r) {
  switch (e.type) {
    case Av:
      if (e.children.length)
        break;
    case dv:
    case Bc:
      return e.return = e.return || e.value;
    case Qp:
      return "";
    case Hp:
      return e.return = e.value + "{" + Gr(e.children, r) + "}";
    case Dc:
      e.value = e.props.join(",");
  }
  return qt(n = Gr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Bv(e) {
  var t = Oc(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Ov(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Yp(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Nv = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = en(), o === 38 && i === 12 && (n[r] = 1), !ei(i); )
    mt();
  return Si(t, at);
}, Mv = function(t, n) {
  var r = -1, o = 44;
  do
    switch (ei(o)) {
      case 0:
        o === 38 && en() === 12 && (n[r] = 1), t[r] += Nv(at - 1, n, r);
        break;
      case 2:
        t[r] += Ps(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = en() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ya(o);
    }
  while (o = mt());
  return t;
}, xv = function(t, n) {
  return Gp(Mv(jp(t), n));
}, Bd = /* @__PURE__ */ new WeakMap(), bv = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Bd.get(r)) && !o) {
      Bd.set(t, !0);
      for (var i = [], s = xv(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
        for (var f = 0; f < a.length; f++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, a[f]) : a[f] + " " + s[l];
    }
  }
}, zv = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Kp(e, t) {
  switch (gv(e, t)) {
    case 5103:
      return ee + "print-" + e + e;
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
      return ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + Qs + e + Ze + e + e;
    case 6828:
    case 4268:
      return ee + e + Ze + e + e;
    case 6165:
      return ee + e + Ze + "flex-" + e + e;
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + Ze + "flex-$1$2") + e;
    case 5443:
      return ee + e + Ze + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return ee + e + Ze + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ee + e + Ze + te(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + Ze + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + Ze + te(e, "grow", "positive") + e;
    case 4554:
      return ee + te(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return te(te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + Ze + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
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
      if (qt(e) - 1 - t > 6)
        switch (Qe(e, t + 1)) {
          case 109:
            if (Qe(e, t + 4) !== 45)
              break;
          case 102:
            return te(e, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + Qs + (Qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~gu(e, "stretch") ? Kp(te(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Qe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Qe(e, qt(e) - 3 - (~gu(e, "!important") && 10))) {
        case 107:
          return te(e, ":", ":" + ee) + e;
        case 101:
          return te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ee + (Qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + Ze + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Qe(e, t + 11)) {
        case 114:
          return ee + e + Ze + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + Ze + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + Ze + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + Ze + e + e;
  }
  return e;
}
var Lv = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Bc:
        t.return = Kp(t.value, t.length);
        break;
      case Hp:
        return Gr([Eo(t, {
          value: te(t.value, "@", "@" + ee)
        })], o);
      case Dc:
        if (t.length)
          return yv(t.props, function(i) {
            switch (hv(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Gr([Eo(t, {
                  props: [te(i, /:(read-\w+)/, ":" + Qs + "$1")]
                })], o);
              case "::placeholder":
                return Gr([Eo(t, {
                  props: [te(i, /:(plac\w+)/, ":" + ee + "input-$1")]
                }), Eo(t, {
                  props: [te(i, /:(plac\w+)/, ":" + Qs + "$1")]
                }), Eo(t, {
                  props: [te(i, /:(plac\w+)/, Ze + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Iv = [Lv], Rv = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var L = v.getAttribute("data-emotion");
      L.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Iv, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var L = v.getAttribute("data-emotion").split(" "), p = 1; p < L.length; p++)
        i[L[p]] = !0;
      a.push(v);
    }
  );
  var l, u = [bv, zv];
  {
    var f, c = [Dv, Ov(function(v) {
      f.insert(v);
    })], m = Bv(u.concat(o, c)), E = function(L) {
      return Gr(Pv(L), m);
    };
    l = function(L, p, A, g) {
      f = A, E(L ? L + "{" + p.styles + "}" : p.styles), g && (w.inserted[p.name] = !0);
    };
  }
  var w = {
    key: n,
    sheet: new fv({
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
  return w.sheet.hydrate(a), w;
}, Zp = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le = typeof Symbol == "function" && Symbol.for, Nc = Le ? Symbol.for("react.element") : 60103, Mc = Le ? Symbol.for("react.portal") : 60106, Ea = Le ? Symbol.for("react.fragment") : 60107, Ca = Le ? Symbol.for("react.strict_mode") : 60108, Ta = Le ? Symbol.for("react.profiler") : 60114, ka = Le ? Symbol.for("react.provider") : 60109, Pa = Le ? Symbol.for("react.context") : 60110, xc = Le ? Symbol.for("react.async_mode") : 60111, Sa = Le ? Symbol.for("react.concurrent_mode") : 60111, Da = Le ? Symbol.for("react.forward_ref") : 60112, Ba = Le ? Symbol.for("react.suspense") : 60113, Qv = Le ? Symbol.for("react.suspense_list") : 60120, Oa = Le ? Symbol.for("react.memo") : 60115, Na = Le ? Symbol.for("react.lazy") : 60116, Hv = Le ? Symbol.for("react.block") : 60121, Uv = Le ? Symbol.for("react.fundamental") : 60117, Fv = Le ? Symbol.for("react.responder") : 60118, jv = Le ? Symbol.for("react.scope") : 60119;
function yt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Nc:
        switch (e = e.type, e) {
          case xc:
          case Sa:
          case Ea:
          case Ta:
          case Ca:
          case Ba:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Pa:
              case Da:
              case Na:
              case Oa:
              case ka:
                return e;
              default:
                return t;
            }
        }
      case Mc:
        return t;
    }
  }
}
function Xp(e) {
  return yt(e) === Sa;
}
re.AsyncMode = xc;
re.ConcurrentMode = Sa;
re.ContextConsumer = Pa;
re.ContextProvider = ka;
re.Element = Nc;
re.ForwardRef = Da;
re.Fragment = Ea;
re.Lazy = Na;
re.Memo = Oa;
re.Portal = Mc;
re.Profiler = Ta;
re.StrictMode = Ca;
re.Suspense = Ba;
re.isAsyncMode = function(e) {
  return Xp(e) || yt(e) === xc;
};
re.isConcurrentMode = Xp;
re.isContextConsumer = function(e) {
  return yt(e) === Pa;
};
re.isContextProvider = function(e) {
  return yt(e) === ka;
};
re.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Nc;
};
re.isForwardRef = function(e) {
  return yt(e) === Da;
};
re.isFragment = function(e) {
  return yt(e) === Ea;
};
re.isLazy = function(e) {
  return yt(e) === Na;
};
re.isMemo = function(e) {
  return yt(e) === Oa;
};
re.isPortal = function(e) {
  return yt(e) === Mc;
};
re.isProfiler = function(e) {
  return yt(e) === Ta;
};
re.isStrictMode = function(e) {
  return yt(e) === Ca;
};
re.isSuspense = function(e) {
  return yt(e) === Ba;
};
re.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ea || e === Sa || e === Ta || e === Ca || e === Ba || e === Qv || typeof e == "object" && e !== null && (e.$$typeof === Na || e.$$typeof === Oa || e.$$typeof === ka || e.$$typeof === Pa || e.$$typeof === Da || e.$$typeof === Uv || e.$$typeof === Fv || e.$$typeof === jv || e.$$typeof === Hv);
};
re.typeOf = yt;
Zp.exports = re;
var Gv = Zp.exports, Wp = Gv, Yv = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Kv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Jp = {};
Jp[Wp.ForwardRef] = Yv;
Jp[Wp.Memo] = Kv;
var Zv = !0;
function Vp(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var bc = function(t, n, r) {
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
  Zv === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, zc = function(t, n, r) {
  bc(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Xv(e) {
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
var Wv = {
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
}, Jv = !1, Vv = /[A-Z]|^ms/g, qv = /_EMO_([^_]+?)_([^]*?)_EMO_/g, qp = function(t) {
  return t.charCodeAt(1) === 45;
}, Od = function(t) {
  return t != null && typeof t != "boolean";
}, Nl = /* @__PURE__ */ Yp(function(e) {
  return qp(e) ? e : e.replace(Vv, "-$&").toLowerCase();
}), Nd = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(qv, function(r, o, i) {
          return _t = {
            name: o,
            styles: i,
            next: _t
          }, o;
        });
  }
  return Wv[t] !== 1 && !qp(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, _v = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ti(e, t, n) {
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
        return _t = {
          name: o.name,
          styles: o.styles,
          next: _t
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            _t = {
              name: s.name,
              styles: s.styles,
              next: _t
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return $v(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = _t, u = n(e);
        return _t = l, ti(e, t, u);
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
function $v(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += ti(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Od(a) && (r += Nl(i) + ":" + Nd(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Jv)
          throw new Error(_v);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            Od(s[l]) && (r += Nl(i) + ":" + Nd(i, s[l]) + ";");
        else {
          var u = ti(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Nl(i) + ":" + u + ";";
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
var Md = /label:\s*([^\s;{]+)\s*(;|$)/g, _t;
function Ma(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  _t = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += ti(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += ti(n, t, e[a]), r) {
      var l = i;
      o += l[a];
    }
  Md.lastIndex = 0;
  for (var u = "", f; (f = Md.exec(o)) !== null; )
    u += "-" + f[1];
  var c = Xv(o) + u;
  return {
    name: c,
    styles: o,
    next: _t
  };
}
var e0 = function(t) {
  return t();
}, _p = mu["useInsertionEffect"] ? mu["useInsertionEffect"] : !1, $p = _p || e0, xd = _p || D.useLayoutEffect, t0 = !1, em = /* @__PURE__ */ D.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Rv({
    key: "css"
  }) : null
);
em.Provider;
var Lc = function(t) {
  return /* @__PURE__ */ D.forwardRef(function(n, r) {
    var o = D.useContext(em);
    return t(n, o, r);
  });
}, Di = /* @__PURE__ */ D.createContext({}), Ic = {}.hasOwnProperty, yu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", n0 = function(t, n) {
  var r = {};
  for (var o in n)
    Ic.call(n, o) && (r[o] = n[o]);
  return r[yu] = t, r;
}, r0 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return bc(n, r, o), $p(function() {
    return zc(n, r, o);
  }), null;
}, o0 = /* @__PURE__ */ Lc(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[yu], i = [r], s = "";
  typeof e.className == "string" ? s = Vp(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = Ma(i, void 0, D.useContext(Di));
  s += t.key + "-" + a.name;
  var l = {};
  for (var u in e)
    Ic.call(e, u) && u !== "css" && u !== yu && !t0 && (l[u] = e[u]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(r0, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ D.createElement(o, l));
}), i0 = o0, Ml = { exports: {} }, bd;
function s0() {
  return bd || (bd = 1, function(e) {
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
  }(Ml)), Ml.exports;
}
s0();
var zd = function(t, n) {
  var r = arguments;
  if (n == null || !Ic.call(n, "css"))
    return D.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = i0, i[1] = n0(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return D.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(zd || (zd = {}));
var a0 = /* @__PURE__ */ Lc(function(e, t) {
  var n = e.styles, r = Ma([n], void 0, D.useContext(Di)), o = D.useRef();
  return xd(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), xd(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && zc(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
}), l0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, u0 = /* @__PURE__ */ Yp(
  function(e) {
    return l0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), c0 = !1, f0 = u0, d0 = function(t) {
  return t !== "theme";
}, Ld = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? f0 : d0;
}, Id = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, A0 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return bc(n, r, o), $p(function() {
    return zc(n, r, o);
  }), null;
}, p0 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = Id(t, n, r), l = a || Ld(o), u = !l("as");
  return function() {
    var f = arguments, c = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && c.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      c.push.apply(c, f);
    else {
      var m = f[0];
      c.push(m[0]);
      for (var E = f.length, w = 1; w < E; w++)
        c.push(f[w], m[w]);
    }
    var v = Lc(function(L, p, A) {
      var g = u && L.as || o, C = "", h = [], P = L;
      if (L.theme == null) {
        P = {};
        for (var T in L)
          P[T] = L[T];
        P.theme = D.useContext(Di);
      }
      typeof L.className == "string" ? C = Vp(p.registered, h, L.className) : L.className != null && (C = L.className + " ");
      var I = Ma(c.concat(h), p.registered, P);
      C += p.key + "-" + I.name, s !== void 0 && (C += " " + s);
      var G = u && a === void 0 ? Ld(g) : l, R = {};
      for (var K in L)
        u && K === "as" || G(K) && (R[K] = L[K]);
      return R.className = C, A && (R.ref = A), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(A0, {
        cache: p,
        serialized: I,
        isStringTag: typeof g == "string"
      }), /* @__PURE__ */ D.createElement(g, R));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = c, v.__emotion_forwardProp = a, Object.defineProperty(v, "toString", {
      value: function() {
        return s === void 0 && c0 ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), v.withComponent = function(L, p) {
      var A = e(L, Ue({}, n, p, {
        shouldForwardProp: Id(v, p, !0)
      }));
      return A.apply(void 0, c);
    }, v;
  };
}, m0 = [
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
], Rd = p0.bind(null);
m0.forEach(function(e) {
  Rd[e] = Rd(e);
});
function g0(e) {
  return e == null || Object.keys(e).length === 0;
}
function h0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ k(a0, {
    styles: typeof t == "function" ? (o) => t(g0(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Qd = [];
function y0(e) {
  return Qd[0] = e, Ma(Qd);
}
function Dr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function tm(e) {
  if (/* @__PURE__ */ D.isValidElement(e) || !Dr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = tm(e[n]);
  }), t;
}
function Hs(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? Ue({}, e) : e;
  return Dr(e) && Dr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ D.isValidElement(t[o]) ? r[o] = t[o] : Dr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Dr(e[o]) ? r[o] = Hs(e[o], t[o], n) : n.clone ? r[o] = Dr(t[o]) ? tm(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const v0 = ["values", "unit", "step"], w0 = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => Ue({}, n, {
    [r.key]: r.val
  }), {});
};
function E0(e) {
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
  } = e, o = ha(e, v0), i = w0(t), s = Object.keys(i);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function u(m, E) {
    const w = s.indexOf(E);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(w !== -1 && typeof t[s[w]] == "number" ? t[s[w]] : E) - r / 100}${n})`;
  }
  function f(m) {
    return s.indexOf(m) + 1 < s.length ? u(m, s[s.indexOf(m) + 1]) : a(m);
  }
  function c(m) {
    const E = s.indexOf(m);
    return E === 0 ? a(s[1]) : E === s.length - 1 ? l(s[E]) : u(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return Ue({
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
const C0 = {
  borderRadius: 4
}, T0 = C0;
function Fo(e, t) {
  return t ? Hs(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Rc = {
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
}, Hd = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Rc[e]}px)`
};
function pn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Hd;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Hd;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Rc).indexOf(a) !== -1) {
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
function k0(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Ud(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function nm(e) {
  if (typeof e != "string")
    throw new Error(av(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function xa(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Us(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = xa(e, n) || r, t && (o = t(o, r, e)), o;
}
function we(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, u = xa(l, r) || {};
    return pn(s, a, (c) => {
      let m = Us(u, o, c);
      return c === m && typeof c == "string" && (m = Us(u, o, `${t}${c === "default" ? "" : nm(c)}`, c)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function P0(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const S0 = {
  m: "margin",
  p: "padding"
}, D0 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Fd = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, B0 = P0((e) => {
  if (e.length > 2)
    if (Fd[e])
      e = Fd[e];
    else
      return [e];
  const [t, n] = e.split(""), r = S0[t], o = D0[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Qc = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Hc = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Qc, ...Hc];
function Bi(e, t, n, r) {
  var o;
  const i = (o = xa(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function rm(e) {
  return Bi(e, "spacing", 8);
}
function Oi(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function O0(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Oi(t, n), r), {});
}
function N0(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = B0(n), i = O0(o, r), s = e[n];
  return pn(e, s, i);
}
function om(e, t) {
  const n = rm(e.theme);
  return Object.keys(e).map((r) => N0(e, t, r, n)).reduce(Fo, {});
}
function ge(e) {
  return om(e, Qc);
}
ge.propTypes = {};
ge.filterProps = Qc;
function he(e) {
  return om(e, Hc);
}
he.propTypes = {};
he.filterProps = Hc;
function M0(e = 8) {
  if (e.mui)
    return e;
  const t = rm({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function ba(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Fo(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function kt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function xt(e, t) {
  return we({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const x0 = xt("border", kt), b0 = xt("borderTop", kt), z0 = xt("borderRight", kt), L0 = xt("borderBottom", kt), I0 = xt("borderLeft", kt), R0 = xt("borderColor"), Q0 = xt("borderTopColor"), H0 = xt("borderRightColor"), U0 = xt("borderBottomColor"), F0 = xt("borderLeftColor"), j0 = xt("outline", kt), G0 = xt("outlineColor"), za = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Bi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Oi(t, r)
    });
    return pn(e, e.borderRadius, n);
  }
  return null;
};
za.propTypes = {};
za.filterProps = ["borderRadius"];
ba(x0, b0, z0, L0, I0, R0, Q0, H0, U0, F0, za, j0, G0);
const La = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Bi(e.theme, "spacing", 8), n = (r) => ({
      gap: Oi(t, r)
    });
    return pn(e, e.gap, n);
  }
  return null;
};
La.propTypes = {};
La.filterProps = ["gap"];
const Ia = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Bi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Oi(t, r)
    });
    return pn(e, e.columnGap, n);
  }
  return null;
};
Ia.propTypes = {};
Ia.filterProps = ["columnGap"];
const Ra = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Bi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Oi(t, r)
    });
    return pn(e, e.rowGap, n);
  }
  return null;
};
Ra.propTypes = {};
Ra.filterProps = ["rowGap"];
const Y0 = we({
  prop: "gridColumn"
}), K0 = we({
  prop: "gridRow"
}), Z0 = we({
  prop: "gridAutoFlow"
}), X0 = we({
  prop: "gridAutoColumns"
}), W0 = we({
  prop: "gridAutoRows"
}), J0 = we({
  prop: "gridTemplateColumns"
}), V0 = we({
  prop: "gridTemplateRows"
}), q0 = we({
  prop: "gridTemplateAreas"
}), _0 = we({
  prop: "gridArea"
});
ba(La, Ia, Ra, Y0, K0, Z0, X0, W0, J0, V0, q0, _0);
function Yr(e, t) {
  return t === "grey" ? t : e;
}
const $0 = we({
  prop: "color",
  themeKey: "palette",
  transform: Yr
}), ew = we({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Yr
}), tw = we({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Yr
});
ba($0, ew, tw);
function dt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const nw = we({
  prop: "width",
  transform: dt
}), Uc = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Rc[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: dt(n)
      };
    };
    return pn(e, e.maxWidth, t);
  }
  return null;
};
Uc.filterProps = ["maxWidth"];
const rw = we({
  prop: "minWidth",
  transform: dt
}), ow = we({
  prop: "height",
  transform: dt
}), iw = we({
  prop: "maxHeight",
  transform: dt
}), sw = we({
  prop: "minHeight",
  transform: dt
});
we({
  prop: "size",
  cssProperty: "width",
  transform: dt
});
we({
  prop: "size",
  cssProperty: "height",
  transform: dt
});
const aw = we({
  prop: "boxSizing"
});
ba(nw, Uc, rw, ow, iw, sw, aw);
const lw = {
  // borders
  border: {
    themeKey: "borders",
    transform: kt
  },
  borderTop: {
    themeKey: "borders",
    transform: kt
  },
  borderRight: {
    themeKey: "borders",
    transform: kt
  },
  borderBottom: {
    themeKey: "borders",
    transform: kt
  },
  borderLeft: {
    themeKey: "borders",
    transform: kt
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
    transform: kt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: za
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Yr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Yr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Yr
  },
  // spacing
  p: {
    style: he
  },
  pt: {
    style: he
  },
  pr: {
    style: he
  },
  pb: {
    style: he
  },
  pl: {
    style: he
  },
  px: {
    style: he
  },
  py: {
    style: he
  },
  padding: {
    style: he
  },
  paddingTop: {
    style: he
  },
  paddingRight: {
    style: he
  },
  paddingBottom: {
    style: he
  },
  paddingLeft: {
    style: he
  },
  paddingX: {
    style: he
  },
  paddingY: {
    style: he
  },
  paddingInline: {
    style: he
  },
  paddingInlineStart: {
    style: he
  },
  paddingInlineEnd: {
    style: he
  },
  paddingBlock: {
    style: he
  },
  paddingBlockStart: {
    style: he
  },
  paddingBlockEnd: {
    style: he
  },
  m: {
    style: ge
  },
  mt: {
    style: ge
  },
  mr: {
    style: ge
  },
  mb: {
    style: ge
  },
  ml: {
    style: ge
  },
  mx: {
    style: ge
  },
  my: {
    style: ge
  },
  margin: {
    style: ge
  },
  marginTop: {
    style: ge
  },
  marginRight: {
    style: ge
  },
  marginBottom: {
    style: ge
  },
  marginLeft: {
    style: ge
  },
  marginX: {
    style: ge
  },
  marginY: {
    style: ge
  },
  marginInline: {
    style: ge
  },
  marginInlineStart: {
    style: ge
  },
  marginInlineEnd: {
    style: ge
  },
  marginBlock: {
    style: ge
  },
  marginBlockStart: {
    style: ge
  },
  marginBlockEnd: {
    style: ge
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
    style: La
  },
  rowGap: {
    style: Ra
  },
  columnGap: {
    style: Ia
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
    transform: dt
  },
  maxWidth: {
    style: Uc
  },
  minWidth: {
    transform: dt
  },
  height: {
    transform: dt
  },
  maxHeight: {
    transform: dt
  },
  minHeight: {
    transform: dt
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
}, im = lw;
function uw(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function cw(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fw() {
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
    const m = xa(o, u) || {};
    return c ? c(s) : pn(s, r, (w) => {
      let v = Us(m, f, w);
      return w === v && typeof w == "string" && (v = Us(m, f, `${n}${w === "default" ? "" : nm(w)}`, w)), l === !1 ? v : {
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
    const a = (r = i.unstable_sxConfig) != null ? r : im;
    function l(u) {
      let f = u;
      if (typeof u == "function")
        f = u(i);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const c = k0(i.breakpoints), m = Object.keys(c);
      let E = c;
      return Object.keys(f).forEach((w) => {
        const v = cw(f[w], i);
        if (v != null)
          if (typeof v == "object")
            if (a[w])
              E = Fo(E, e(w, v, i, a));
            else {
              const L = pn({
                theme: i
              }, v, (p) => ({
                [w]: p
              }));
              uw(L, v) ? E[w] = t({
                sx: v,
                theme: i,
                nested: !0
              }) : E = Fo(E, L);
            }
          else
            E = Fo(E, e(w, v, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": Ud(m, E)
      } : Ud(m, E);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const sm = fw();
sm.filterProps = ["sx"];
const dw = sm;
function Aw(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const pw = ["breakpoints", "palette", "spacing", "shape"];
function mw(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = ha(e, pw), a = E0(n), l = M0(o);
  let u = Hs({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Ue({
      mode: "light"
    }, r),
    spacing: l,
    shape: Ue({}, T0, i)
  }, s);
  return u.applyStyles = Aw, u = t.reduce((f, c) => Hs(f, c), u), u.unstable_sxConfig = Ue({}, im, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(c) {
    return dw({
      sx: c,
      theme: this
    });
  }, u;
}
function gw(e) {
  return Object.keys(e).length === 0;
}
function Fc(e = null) {
  const t = D.useContext(Di);
  return !t || gw(t) ? e : t;
}
const hw = mw();
function yw(e = hw) {
  return Fc(e);
}
function xl(e) {
  const t = y0(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function vw({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = yw(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => xl(typeof s == "function" ? s(o) : s)) : i = xl(i)), /* @__PURE__ */ k(h0, {
    styles: i
  });
}
const ww = typeof window < "u" ? D.useLayoutEffect : D.useEffect, Ew = ww;
let jd = 0;
function Cw(e) {
  const [t, n] = D.useState(e), r = e || t;
  return D.useEffect(() => {
    t == null && (jd += 1, n(`mui-${jd}`));
  }, [t]), r;
}
const Gd = mu["useId".toString()];
function Tw(e) {
  if (Gd !== void 0) {
    const t = Gd();
    return e ?? t;
  }
  return Cw(e);
}
const kw = /* @__PURE__ */ D.createContext(null), am = kw;
function lm() {
  return D.useContext(am);
}
const Pw = typeof Symbol == "function" && Symbol.for, Sw = Pw ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Dw(e, t) {
  return typeof t == "function" ? t(e) : Ue({}, e, t);
}
function Bw(e) {
  const {
    children: t,
    theme: n
  } = e, r = lm(), o = D.useMemo(() => {
    const i = r === null ? n : Dw(r, n);
    return i != null && (i[Sw] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ k(am.Provider, {
    value: o,
    children: t
  });
}
const Ow = ["value"], Nw = /* @__PURE__ */ D.createContext();
function Mw(e) {
  let {
    value: t
  } = e, n = ha(e, Ow);
  return /* @__PURE__ */ k(Nw.Provider, Ue({
    value: t ?? !0
  }, n));
}
const xw = /* @__PURE__ */ D.createContext(void 0);
function bw({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ k(xw.Provider, {
    value: e,
    children: t
  });
}
function zw(e) {
  const t = Fc(), n = Tw() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Ew(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ k(vw, {
    styles: o
  }) : null;
}
const Yd = {};
function Kd(e, t, n, r = !1) {
  return D.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? Ue({}, t, {
        [e]: i
      }) : i;
      return r ? () => s : s;
    }
    return e ? Ue({}, t, {
      [e]: n
    }) : Ue({}, t, n);
  }, [e, t, n, r]);
}
function Lw(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Fc(Yd), i = lm() || Yd, s = Kd(r, o, n), a = Kd(r, i, n, !0), l = s.direction === "rtl", u = zw(s);
  return /* @__PURE__ */ k(Bw, {
    theme: a,
    children: /* @__PURE__ */ k(Di.Provider, {
      value: s,
      children: /* @__PURE__ */ k(Mw, {
        value: l,
        children: /* @__PURE__ */ H(bw, {
          value: s == null ? void 0 : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const Iw = ["theme"];
function Rw(e) {
  let {
    theme: t
  } = e, n = ha(e, Iw);
  const r = t[Pd];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = Ue({}, r, {
    vars: null
  }) : t && !t.vars && (o = Ue({}, t, {
    vars: null
  }))), /* @__PURE__ */ k(Lw, Ue({}, n, {
    themeId: r ? Pd : void 0,
    theme: o
  }));
}
var um = { exports: {} }, vt = {}, cm = { exports: {} }, fm = {};
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
  function t(O, N) {
    var z = O.length;
    O.push(N);
    e:
      for (; 0 < z; ) {
        var x = z - 1 >>> 1, J = O[x];
        if (0 < o(J, N))
          O[x] = N, O[z] = J, z = x;
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
    var N = O[0], z = O.pop();
    if (z !== N) {
      O[0] = z;
      e:
        for (var x = 0, J = O.length, bt = J >>> 1; x < bt; ) {
          var Oe = 2 * (x + 1) - 1, go = O[Oe], on = Oe + 1, hr = O[on];
          if (0 > o(go, z))
            on < J && 0 > o(hr, go) ? (O[x] = hr, O[on] = z, x = on) : (O[x] = go, O[Oe] = z, x = Oe);
          else if (on < J && 0 > o(hr, z))
            O[x] = hr, O[on] = z, x = on;
          else
            break e;
        }
    }
    return N;
  }
  function o(O, N) {
    var z = O.sortIndex - N.sortIndex;
    return z !== 0 ? z : O.id - N.id;
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
  var l = [], u = [], f = 1, c = null, m = 3, E = !1, w = !1, v = !1, L = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(O) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null)
        r(u);
      else if (N.startTime <= O)
        r(u), N.sortIndex = N.expirationTime, t(l, N);
      else
        break;
      N = n(u);
    }
  }
  function C(O) {
    if (v = !1, g(O), !w)
      if (n(l) !== null)
        w = !0, ut(h);
      else {
        var N = n(u);
        N !== null && Y(C, N.startTime - O);
      }
  }
  function h(O, N) {
    w = !1, v && (v = !1, p(I), I = -1), E = !0;
    var z = m;
    try {
      for (g(N), c = n(l); c !== null && (!(c.expirationTime > N) || O && !K()); ) {
        var x = c.callback;
        if (typeof x == "function") {
          c.callback = null, m = c.priorityLevel;
          var J = x(c.expirationTime <= N);
          N = e.unstable_now(), typeof J == "function" ? c.callback = J : c === n(l) && r(l), g(N);
        } else
          r(l);
        c = n(l);
      }
      if (c !== null)
        var bt = !0;
      else {
        var Oe = n(u);
        Oe !== null && Y(C, Oe.startTime - N), bt = !1;
      }
      return bt;
    } finally {
      c = null, m = z, E = !1;
    }
  }
  var P = !1, T = null, I = -1, G = 5, R = -1;
  function K() {
    return !(e.unstable_now() - R < G);
  }
  function j() {
    if (T !== null) {
      var O = e.unstable_now();
      R = O;
      var N = !0;
      try {
        N = T(!0, O);
      } finally {
        N ? Ee() : (P = !1, T = null);
      }
    } else
      P = !1;
  }
  var Ee;
  if (typeof A == "function")
    Ee = function() {
      A(j);
    };
  else if (typeof MessageChannel < "u") {
    var Et = new MessageChannel(), Ct = Et.port2;
    Et.port1.onmessage = j, Ee = function() {
      Ct.postMessage(null);
    };
  } else
    Ee = function() {
      L(j, 0);
    };
  function ut(O) {
    T = O, P || (P = !0, Ee());
  }
  function Y(O, N) {
    I = L(function() {
      O(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e.unstable_continueExecution = function() {
    w || E || (w = !0, ut(h));
  }, e.unstable_forceFrameRate = function(O) {
    0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < O ? Math.floor(1e3 / O) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(O) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = m;
    }
    var z = m;
    m = N;
    try {
      return O();
    } finally {
      m = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(O, N) {
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
    var z = m;
    m = O;
    try {
      return N();
    } finally {
      m = z;
    }
  }, e.unstable_scheduleCallback = function(O, N, z) {
    var x = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? x + z : x) : z = x, O) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = z + J, O = { id: f++, callback: N, priorityLevel: O, startTime: z, expirationTime: J, sortIndex: -1 }, z > x ? (O.sortIndex = z, t(u, O), n(l) === null && O === n(u) && (v ? (p(I), I = -1) : v = !0, Y(C, z - x))) : (O.sortIndex = J, t(l, O), w || E || (w = !0, ut(h))), O;
  }, e.unstable_shouldYield = K, e.unstable_wrapCallback = function(O) {
    var N = m;
    return function() {
      var z = m;
      m = N;
      try {
        return O.apply(this, arguments);
      } finally {
        m = z;
      }
    };
  };
})(fm);
cm.exports = fm;
var Qw = cm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hw = D, ht = Qw;
function B(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var dm = /* @__PURE__ */ new Set(), ni = {};
function pr(e, t) {
  _r(e, t), _r(e + "Capture", t);
}
function _r(e, t) {
  for (ni[e] = t, e = 0; e < t.length; e++)
    dm.add(t[e]);
}
var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vu = Object.prototype.hasOwnProperty, Uw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zd = {}, Xd = {};
function Fw(e) {
  return vu.call(Xd, e) ? !0 : vu.call(Zd, e) ? !1 : Uw.test(e) ? Xd[e] = !0 : (Zd[e] = !0, !1);
}
function jw(e, t, n, r) {
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
function Gw(e, t, n, r) {
  if (t === null || typeof t > "u" || jw(e, t, n, r))
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
function tt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  je[e] = new tt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  je[t] = new tt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  je[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  je[e] = new tt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  je[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  je[e] = new tt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  je[e] = new tt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  je[e] = new tt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  je[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var jc = /[\-:]([a-z])/g;
function Gc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    jc,
    Gc
  );
  je[t] = new tt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(jc, Gc);
  je[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(jc, Gc);
  je[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  je[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  je[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yc(e, t, n, r) {
  var o = je.hasOwnProperty(t) ? je[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gw(t, n, o, r) && (n = null), r || o === null ? Fw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vn = Hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Zi = Symbol.for("react.element"), Or = Symbol.for("react.portal"), Nr = Symbol.for("react.fragment"), Kc = Symbol.for("react.strict_mode"), wu = Symbol.for("react.profiler"), Am = Symbol.for("react.provider"), pm = Symbol.for("react.context"), Zc = Symbol.for("react.forward_ref"), Eu = Symbol.for("react.suspense"), Cu = Symbol.for("react.suspense_list"), Xc = Symbol.for("react.memo"), Pn = Symbol.for("react.lazy"), mm = Symbol.for("react.offscreen"), Wd = Symbol.iterator;
function Co(e) {
  return e === null || typeof e != "object" ? null : (e = Wd && e[Wd] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, bl;
function zo(e) {
  if (bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      bl = t && t[1] || "";
    }
  return `
` + bl + e;
}
var zl = !1;
function Ll(e, t) {
  if (!e || zl)
    return "";
  zl = !0;
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
    zl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? zo(e) : "";
}
function Yw(e) {
  switch (e.tag) {
    case 5:
      return zo(e.type);
    case 16:
      return zo("Lazy");
    case 13:
      return zo("Suspense");
    case 19:
      return zo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ll(e.type, !1), e;
    case 11:
      return e = Ll(e.type.render, !1), e;
    case 1:
      return e = Ll(e.type, !0), e;
    default:
      return "";
  }
}
function Tu(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Nr:
      return "Fragment";
    case Or:
      return "Portal";
    case wu:
      return "Profiler";
    case Kc:
      return "StrictMode";
    case Eu:
      return "Suspense";
    case Cu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case pm:
        return (e.displayName || "Context") + ".Consumer";
      case Am:
        return (e._context.displayName || "Context") + ".Provider";
      case Zc:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Xc:
        return t = e.displayName || null, t !== null ? t : Tu(e.type) || "Memo";
      case Pn:
        t = e._payload, e = e._init;
        try {
          return Tu(e(t));
        } catch {
        }
    }
  return null;
}
function Kw(e) {
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
      return Tu(t);
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
function Gn(e) {
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
function gm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Zw(e) {
  var t = gm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Xi(e) {
  e._valueTracker || (e._valueTracker = Zw(e));
}
function hm(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = gm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ku(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Jd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Gn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ym(e, t) {
  t = t.checked, t != null && Yc(e, "checked", t, !1);
}
function Pu(e, t) {
  ym(e, t);
  var n = Gn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Su(e, t.type, n) : t.hasOwnProperty("defaultValue") && Su(e, t.type, Gn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Vd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Su(e, t, n) {
  (t !== "number" || Fs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Lo = Array.isArray;
function Kr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Du(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(B(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function qd(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(B(92));
      if (Lo(n)) {
        if (1 < n.length)
          throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Gn(n) };
}
function vm(e, t) {
  var n = Gn(t.value), r = Gn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function _d(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wm(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? wm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Wi, Em = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Wi = Wi || document.createElement("div"), Wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Wi.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function ri(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jo = {
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
}, Xw = ["Webkit", "ms", "Moz", "O"];
Object.keys(jo).forEach(function(e) {
  Xw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), jo[t] = jo[e];
  });
});
function Cm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jo.hasOwnProperty(e) && jo[e] ? ("" + t).trim() : t + "px";
}
function Tm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Cm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Ww = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ou(e, t) {
  if (t) {
    if (Ww[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(B(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(B(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(B(62));
  }
}
function Nu(e, t) {
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
var Mu = null;
function Wc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var xu = null, Zr = null, Xr = null;
function $d(e) {
  if (e = xi(e)) {
    if (typeof xu != "function")
      throw Error(B(280));
    var t = e.stateNode;
    t && (t = ja(t), xu(e.stateNode, e.type, t));
  }
}
function km(e) {
  Zr ? Xr ? Xr.push(e) : Xr = [e] : Zr = e;
}
function Pm() {
  if (Zr) {
    var e = Zr, t = Xr;
    if (Xr = Zr = null, $d(e), t)
      for (e = 0; e < t.length; e++)
        $d(t[e]);
  }
}
function Sm(e, t) {
  return e(t);
}
function Dm() {
}
var Il = !1;
function Bm(e, t, n) {
  if (Il)
    return e(t, n);
  Il = !0;
  try {
    return Sm(e, t, n);
  } finally {
    Il = !1, (Zr !== null || Xr !== null) && (Dm(), Pm());
  }
}
function oi(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ja(n);
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
    throw Error(B(231, t, typeof n));
  return n;
}
var bu = !1;
if (mn)
  try {
    var To = {};
    Object.defineProperty(To, "passive", { get: function() {
      bu = !0;
    } }), window.addEventListener("test", To, To), window.removeEventListener("test", To, To);
  } catch {
    bu = !1;
  }
function Jw(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Go = !1, js = null, Gs = !1, zu = null, Vw = { onError: function(e) {
  Go = !0, js = e;
} };
function qw(e, t, n, r, o, i, s, a, l) {
  Go = !1, js = null, Jw.apply(Vw, arguments);
}
function _w(e, t, n, r, o, i, s, a, l) {
  if (qw.apply(this, arguments), Go) {
    if (Go) {
      var u = js;
      Go = !1, js = null;
    } else
      throw Error(B(198));
    Gs || (Gs = !0, zu = u);
  }
}
function mr(e) {
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
function Om(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function eA(e) {
  if (mr(e) !== e)
    throw Error(B(188));
}
function $w(e) {
  var t = e.alternate;
  if (!t) {
    if (t = mr(e), t === null)
      throw Error(B(188));
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
          return eA(o), e;
        if (i === r)
          return eA(o), t;
        i = i.sibling;
      }
      throw Error(B(188));
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
          throw Error(B(189));
      }
    }
    if (n.alternate !== r)
      throw Error(B(190));
  }
  if (n.tag !== 3)
    throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function Nm(e) {
  return e = $w(e), e !== null ? Mm(e) : null;
}
function Mm(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Mm(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var xm = ht.unstable_scheduleCallback, tA = ht.unstable_cancelCallback, e1 = ht.unstable_shouldYield, t1 = ht.unstable_requestPaint, ve = ht.unstable_now, n1 = ht.unstable_getCurrentPriorityLevel, Jc = ht.unstable_ImmediatePriority, bm = ht.unstable_UserBlockingPriority, Ys = ht.unstable_NormalPriority, r1 = ht.unstable_LowPriority, zm = ht.unstable_IdlePriority, Qa = null, tn = null;
function o1(e) {
  if (tn && typeof tn.onCommitFiberRoot == "function")
    try {
      tn.onCommitFiberRoot(Qa, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Ut = Math.clz32 ? Math.clz32 : a1, i1 = Math.log, s1 = Math.LN2;
function a1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (i1(e) / s1 | 0) | 0;
}
var Ji = 64, Vi = 4194304;
function Io(e) {
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
function Ks(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = Io(a) : (i &= s, i !== 0 && (r = Io(i)));
  } else
    s = n & ~o, s !== 0 ? r = Io(s) : i !== 0 && (r = Io(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Ut(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function l1(e, t) {
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
function u1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Ut(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = l1(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function Lu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Lm() {
  var e = Ji;
  return Ji <<= 1, !(Ji & 4194240) && (Ji = 64), e;
}
function Rl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ni(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ut(t), e[t] = n;
}
function c1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ut(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Vc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ut(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var ne = 0;
function Im(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Rm, qc, Qm, Hm, Um, Iu = !1, qi = [], zn = null, Ln = null, In = null, ii = /* @__PURE__ */ new Map(), si = /* @__PURE__ */ new Map(), Dn = [], f1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function nA(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zn = null;
      break;
    case "dragenter":
    case "dragleave":
      Ln = null;
      break;
    case "mouseover":
    case "mouseout":
      In = null;
      break;
    case "pointerover":
    case "pointerout":
      ii.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      si.delete(t.pointerId);
  }
}
function ko(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = xi(t), t !== null && qc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function d1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return zn = ko(zn, e, t, n, r, o), !0;
    case "dragenter":
      return Ln = ko(Ln, e, t, n, r, o), !0;
    case "mouseover":
      return In = ko(In, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return ii.set(i, ko(ii.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, si.set(i, ko(si.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Fm(e) {
  var t = nr(e.target);
  if (t !== null) {
    var n = mr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Om(n), t !== null) {
          e.blockedOn = t, Um(e.priority, function() {
            Qm(n);
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
    var n = Ru(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Mu = r, n.target.dispatchEvent(r), Mu = null;
    } else
      return t = xi(n), t !== null && qc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function rA(e, t, n) {
  Ds(e) && n.delete(t);
}
function A1() {
  Iu = !1, zn !== null && Ds(zn) && (zn = null), Ln !== null && Ds(Ln) && (Ln = null), In !== null && Ds(In) && (In = null), ii.forEach(rA), si.forEach(rA);
}
function Po(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Iu || (Iu = !0, ht.unstable_scheduleCallback(ht.unstable_NormalPriority, A1)));
}
function ai(e) {
  function t(o) {
    return Po(o, e);
  }
  if (0 < qi.length) {
    Po(qi[0], e);
    for (var n = 1; n < qi.length; n++) {
      var r = qi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (zn !== null && Po(zn, e), Ln !== null && Po(Ln, e), In !== null && Po(In, e), ii.forEach(t), si.forEach(t), n = 0; n < Dn.length; n++)
    r = Dn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dn.length && (n = Dn[0], n.blockedOn === null); )
    Fm(n), n.blockedOn === null && Dn.shift();
}
var Wr = vn.ReactCurrentBatchConfig, Zs = !0;
function p1(e, t, n, r) {
  var o = ne, i = Wr.transition;
  Wr.transition = null;
  try {
    ne = 1, _c(e, t, n, r);
  } finally {
    ne = o, Wr.transition = i;
  }
}
function m1(e, t, n, r) {
  var o = ne, i = Wr.transition;
  Wr.transition = null;
  try {
    ne = 4, _c(e, t, n, r);
  } finally {
    ne = o, Wr.transition = i;
  }
}
function _c(e, t, n, r) {
  if (Zs) {
    var o = Ru(e, t, n, r);
    if (o === null)
      Xl(e, t, r, Xs, n), nA(e, r);
    else if (d1(o, e, t, n, r))
      r.stopPropagation();
    else if (nA(e, r), t & 4 && -1 < f1.indexOf(e)) {
      for (; o !== null; ) {
        var i = xi(o);
        if (i !== null && Rm(i), i = Ru(e, t, n, r), i === null && Xl(e, t, r, Xs, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Xl(e, t, r, null, n);
  }
}
var Xs = null;
function Ru(e, t, n, r) {
  if (Xs = null, e = Wc(r), e = nr(e), e !== null)
    if (t = mr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Om(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Xs = e, null;
}
function jm(e) {
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
      switch (n1()) {
        case Jc:
          return 1;
        case bm:
          return 4;
        case Ys:
        case r1:
          return 16;
        case zm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nn = null, $c = null, Bs = null;
function Gm() {
  if (Bs)
    return Bs;
  var e, t = $c, n = t.length, r, o = "value" in Nn ? Nn.value : Nn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ;
  return Bs = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Os(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _i() {
  return !0;
}
function oA() {
  return !1;
}
function wt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _i : oA, this.isPropagationStopped = oA, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _i);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _i);
  }, persist: function() {
  }, isPersistent: _i }), t;
}
var fo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ef = wt(fo), Mi = ce({}, fo, { view: 0, detail: 0 }), g1 = wt(Mi), Ql, Hl, So, Ha = ce({}, Mi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: tf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== So && (So && e.type === "mousemove" ? (Ql = e.screenX - So.screenX, Hl = e.screenY - So.screenY) : Hl = Ql = 0, So = e), Ql);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Hl;
} }), iA = wt(Ha), h1 = ce({}, Ha, { dataTransfer: 0 }), y1 = wt(h1), v1 = ce({}, Mi, { relatedTarget: 0 }), Ul = wt(v1), w1 = ce({}, fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), E1 = wt(w1), C1 = ce({}, fo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), T1 = wt(C1), k1 = ce({}, fo, { data: 0 }), sA = wt(k1), P1 = {
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
}, S1 = {
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
}, D1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function B1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = D1[e]) ? !!t[e] : !1;
}
function tf() {
  return B1;
}
var O1 = ce({}, Mi, { key: function(e) {
  if (e.key) {
    var t = P1[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Os(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? S1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: tf, charCode: function(e) {
  return e.type === "keypress" ? Os(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Os(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), N1 = wt(O1), M1 = ce({}, Ha, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), aA = wt(M1), x1 = ce({}, Mi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: tf }), b1 = wt(x1), z1 = ce({}, fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), L1 = wt(z1), I1 = ce({}, Ha, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), R1 = wt(I1), Q1 = [9, 13, 27, 32], nf = mn && "CompositionEvent" in window, Yo = null;
mn && "documentMode" in document && (Yo = document.documentMode);
var H1 = mn && "TextEvent" in window && !Yo, Ym = mn && (!nf || Yo && 8 < Yo && 11 >= Yo), lA = String.fromCharCode(32), uA = !1;
function Km(e, t) {
  switch (e) {
    case "keyup":
      return Q1.indexOf(t.keyCode) !== -1;
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
function Zm(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Mr = !1;
function U1(e, t) {
  switch (e) {
    case "compositionend":
      return Zm(t);
    case "keypress":
      return t.which !== 32 ? null : (uA = !0, lA);
    case "textInput":
      return e = t.data, e === lA && uA ? null : e;
    default:
      return null;
  }
}
function F1(e, t) {
  if (Mr)
    return e === "compositionend" || !nf && Km(e, t) ? (e = Gm(), Bs = $c = Nn = null, Mr = !1, e) : null;
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
      return Ym && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var j1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function cA(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!j1[e.type] : t === "textarea";
}
function Xm(e, t, n, r) {
  km(r), t = Ws(t, "onChange"), 0 < t.length && (n = new ef("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ko = null, li = null;
function G1(e) {
  og(e, 0);
}
function Ua(e) {
  var t = zr(e);
  if (hm(t))
    return e;
}
function Y1(e, t) {
  if (e === "change")
    return t;
}
var Wm = !1;
if (mn) {
  var Fl;
  if (mn) {
    var jl = "oninput" in document;
    if (!jl) {
      var fA = document.createElement("div");
      fA.setAttribute("oninput", "return;"), jl = typeof fA.oninput == "function";
    }
    Fl = jl;
  } else
    Fl = !1;
  Wm = Fl && (!document.documentMode || 9 < document.documentMode);
}
function dA() {
  Ko && (Ko.detachEvent("onpropertychange", Jm), li = Ko = null);
}
function Jm(e) {
  if (e.propertyName === "value" && Ua(li)) {
    var t = [];
    Xm(t, li, e, Wc(e)), Bm(G1, t);
  }
}
function K1(e, t, n) {
  e === "focusin" ? (dA(), Ko = t, li = n, Ko.attachEvent("onpropertychange", Jm)) : e === "focusout" && dA();
}
function Z1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ua(li);
}
function X1(e, t) {
  if (e === "click")
    return Ua(t);
}
function W1(e, t) {
  if (e === "input" || e === "change")
    return Ua(t);
}
function J1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jt = typeof Object.is == "function" ? Object.is : J1;
function ui(e, t) {
  if (jt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!vu.call(t, o) || !jt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function AA(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function pA(e, t) {
  var n = AA(e);
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
    n = AA(n);
  }
}
function Vm(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qm() {
  for (var e = window, t = Fs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Fs(e.document);
  }
  return t;
}
function rf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function V1(e) {
  var t = qm(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Vm(n.ownerDocument.documentElement, n)) {
    if (r !== null && rf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = pA(n, i);
        var s = pA(
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
var q1 = mn && "documentMode" in document && 11 >= document.documentMode, xr = null, Qu = null, Zo = null, Hu = !1;
function mA(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hu || xr == null || xr !== Fs(r) || (r = xr, "selectionStart" in r && rf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Zo && ui(Zo, r) || (Zo = r, r = Ws(Qu, "onSelect"), 0 < r.length && (t = new ef("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = xr)));
}
function $i(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var br = { animationend: $i("Animation", "AnimationEnd"), animationiteration: $i("Animation", "AnimationIteration"), animationstart: $i("Animation", "AnimationStart"), transitionend: $i("Transition", "TransitionEnd") }, Gl = {}, _m = {};
mn && (_m = document.createElement("div").style, "AnimationEvent" in window || (delete br.animationend.animation, delete br.animationiteration.animation, delete br.animationstart.animation), "TransitionEvent" in window || delete br.transitionend.transition);
function Fa(e) {
  if (Gl[e])
    return Gl[e];
  if (!br[e])
    return e;
  var t = br[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in _m)
      return Gl[e] = t[n];
  return e;
}
var $m = Fa("animationend"), eg = Fa("animationiteration"), tg = Fa("animationstart"), ng = Fa("transitionend"), rg = /* @__PURE__ */ new Map(), gA = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zn(e, t) {
  rg.set(e, t), pr(t, [e]);
}
for (var Yl = 0; Yl < gA.length; Yl++) {
  var Kl = gA[Yl], _1 = Kl.toLowerCase(), $1 = Kl[0].toUpperCase() + Kl.slice(1);
  Zn(_1, "on" + $1);
}
Zn($m, "onAnimationEnd");
Zn(eg, "onAnimationIteration");
Zn(tg, "onAnimationStart");
Zn("dblclick", "onDoubleClick");
Zn("focusin", "onFocus");
Zn("focusout", "onBlur");
Zn(ng, "onTransitionEnd");
_r("onMouseEnter", ["mouseout", "mouseover"]);
_r("onMouseLeave", ["mouseout", "mouseover"]);
_r("onPointerEnter", ["pointerout", "pointerover"]);
_r("onPointerLeave", ["pointerout", "pointerover"]);
pr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
pr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
pr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
pr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), eE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));
function hA(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, _w(r, t, void 0, e), e.currentTarget = null;
}
function og(e, t) {
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
          hA(o, a, u), i = l;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped())
            break e;
          hA(o, a, u), i = l;
        }
    }
  }
  if (Gs)
    throw e = zu, Gs = !1, zu = null, e;
}
function ie(e, t) {
  var n = t[Yu];
  n === void 0 && (n = t[Yu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ig(t, e, 2, !1), n.add(r));
}
function Zl(e, t, n) {
  var r = 0;
  t && (r |= 4), ig(n, e, r, t);
}
var es = "_reactListening" + Math.random().toString(36).slice(2);
function ci(e) {
  if (!e[es]) {
    e[es] = !0, dm.forEach(function(n) {
      n !== "selectionchange" && (eE.has(n) || Zl(n, !1, e), Zl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[es] || (t[es] = !0, Zl("selectionchange", !1, t));
  }
}
function ig(e, t, n, r) {
  switch (jm(t)) {
    case 1:
      var o = p1;
      break;
    case 4:
      o = m1;
      break;
    default:
      o = _c;
  }
  n = o.bind(null, t, n, e), o = void 0, !bu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, o) {
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
            if (s = nr(a), s === null)
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
  Bm(function() {
    var u = i, f = Wc(n), c = [];
    e: {
      var m = rg.get(e);
      if (m !== void 0) {
        var E = ef, w = e;
        switch (e) {
          case "keypress":
            if (Os(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            E = N1;
            break;
          case "focusin":
            w = "focus", E = Ul;
            break;
          case "focusout":
            w = "blur", E = Ul;
            break;
          case "beforeblur":
          case "afterblur":
            E = Ul;
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
            E = iA;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = y1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = b1;
            break;
          case $m:
          case eg:
          case tg:
            E = E1;
            break;
          case ng:
            E = L1;
            break;
          case "scroll":
            E = g1;
            break;
          case "wheel":
            E = R1;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = T1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = aA;
        }
        var v = (t & 4) !== 0, L = !v && e === "scroll", p = v ? m !== null ? m + "Capture" : null : m;
        v = [];
        for (var A = u, g; A !== null; ) {
          g = A;
          var C = g.stateNode;
          if (g.tag === 5 && C !== null && (g = C, p !== null && (C = oi(A, p), C != null && v.push(fi(A, C, g)))), L)
            break;
          A = A.return;
        }
        0 < v.length && (m = new E(m, w, null, n, f), c.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", m && n !== Mu && (w = n.relatedTarget || n.fromElement) && (nr(w) || w[gn]))
          break e;
        if ((E || m) && (m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window, E ? (w = n.relatedTarget || n.toElement, E = u, w = w ? nr(w) : null, w !== null && (L = mr(w), w !== L || w.tag !== 5 && w.tag !== 6) && (w = null)) : (E = null, w = u), E !== w)) {
          if (v = iA, C = "onMouseLeave", p = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (v = aA, C = "onPointerLeave", p = "onPointerEnter", A = "pointer"), L = E == null ? m : zr(E), g = w == null ? m : zr(w), m = new v(C, A + "leave", E, n, f), m.target = L, m.relatedTarget = g, C = null, nr(f) === u && (v = new v(p, A + "enter", w, n, f), v.target = g, v.relatedTarget = L, C = v), L = C, E && w)
            t: {
              for (v = E, p = w, A = 0, g = v; g; g = Tr(g))
                A++;
              for (g = 0, C = p; C; C = Tr(C))
                g++;
              for (; 0 < A - g; )
                v = Tr(v), A--;
              for (; 0 < g - A; )
                p = Tr(p), g--;
              for (; A--; ) {
                if (v === p || p !== null && v === p.alternate)
                  break t;
                v = Tr(v), p = Tr(p);
              }
              v = null;
            }
          else
            v = null;
          E !== null && yA(c, m, E, v, !1), w !== null && L !== null && yA(c, L, w, v, !0);
        }
      }
      e: {
        if (m = u ? zr(u) : window, E = m.nodeName && m.nodeName.toLowerCase(), E === "select" || E === "input" && m.type === "file")
          var h = Y1;
        else if (cA(m))
          if (Wm)
            h = W1;
          else {
            h = Z1;
            var P = K1;
          }
        else
          (E = m.nodeName) && E.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (h = X1);
        if (h && (h = h(e, u))) {
          Xm(c, h, n, f);
          break e;
        }
        P && P(e, m, u), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && Su(m, "number", m.value);
      }
      switch (P = u ? zr(u) : window, e) {
        case "focusin":
          (cA(P) || P.contentEditable === "true") && (xr = P, Qu = u, Zo = null);
          break;
        case "focusout":
          Zo = Qu = xr = null;
          break;
        case "mousedown":
          Hu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Hu = !1, mA(c, n, f);
          break;
        case "selectionchange":
          if (q1)
            break;
        case "keydown":
        case "keyup":
          mA(c, n, f);
      }
      var T;
      if (nf)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        Mr ? Km(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (Ym && n.locale !== "ko" && (Mr || I !== "onCompositionStart" ? I === "onCompositionEnd" && Mr && (T = Gm()) : (Nn = f, $c = "value" in Nn ? Nn.value : Nn.textContent, Mr = !0)), P = Ws(u, I), 0 < P.length && (I = new sA(I, e, null, n, f), c.push({ event: I, listeners: P }), T ? I.data = T : (T = Zm(n), T !== null && (I.data = T)))), (T = H1 ? U1(e, n) : F1(e, n)) && (u = Ws(u, "onBeforeInput"), 0 < u.length && (f = new sA("onBeforeInput", "beforeinput", null, n, f), c.push({ event: f, listeners: u }), f.data = T));
    }
    og(c, t);
  });
}
function fi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ws(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = oi(e, n), i != null && r.unshift(fi(e, i, o)), i = oi(e, t), i != null && r.push(fi(e, i, o))), e = e.return;
  }
  return r;
}
function Tr(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yA(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r)
      break;
    a.tag === 5 && u !== null && (a = u, o ? (l = oi(n, i), l != null && s.unshift(fi(n, l, a))) : o || (l = oi(n, i), l != null && s.push(fi(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var tE = /\r\n?/g, nE = /\u0000|\uFFFD/g;
function vA(e) {
  return (typeof e == "string" ? e : "" + e).replace(tE, `
`).replace(nE, "");
}
function ts(e, t, n) {
  if (t = vA(t), vA(e) !== t && n)
    throw Error(B(425));
}
function Js() {
}
var Uu = null, Fu = null;
function ju(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Gu = typeof setTimeout == "function" ? setTimeout : void 0, rE = typeof clearTimeout == "function" ? clearTimeout : void 0, wA = typeof Promise == "function" ? Promise : void 0, oE = typeof queueMicrotask == "function" ? queueMicrotask : typeof wA < "u" ? function(e) {
  return wA.resolve(null).then(e).catch(iE);
} : Gu;
function iE(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), ai(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ai(t);
}
function Rn(e) {
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
function EA(e) {
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
var Ao = Math.random().toString(36).slice(2), $t = "__reactFiber$" + Ao, di = "__reactProps$" + Ao, gn = "__reactContainer$" + Ao, Yu = "__reactEvents$" + Ao, sE = "__reactListeners$" + Ao, aE = "__reactHandles$" + Ao;
function nr(e) {
  var t = e[$t];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[gn] || n[$t]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = EA(e); e !== null; ) {
          if (n = e[$t])
            return n;
          e = EA(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function xi(e) {
  return e = e[$t] || e[gn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function zr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(B(33));
}
function ja(e) {
  return e[di] || null;
}
var Ku = [], Lr = -1;
function Xn(e) {
  return { current: e };
}
function se(e) {
  0 > Lr || (e.current = Ku[Lr], Ku[Lr] = null, Lr--);
}
function oe(e, t) {
  Lr++, Ku[Lr] = e.current, e.current = t;
}
var Yn = {}, We = Xn(Yn), ot = Xn(!1), ar = Yn;
function $r(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function it(e) {
  return e = e.childContextTypes, e != null;
}
function Vs() {
  se(ot), se(We);
}
function CA(e, t, n) {
  if (We.current !== Yn)
    throw Error(B(168));
  oe(We, t), oe(ot, n);
}
function sg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(B(108, Kw(e) || "Unknown", o));
  return ce({}, n, r);
}
function qs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yn, ar = We.current, oe(We, e), oe(ot, ot.current), !0;
}
function TA(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(B(169));
  n ? (e = sg(e, t, ar), r.__reactInternalMemoizedMergedChildContext = e, se(ot), se(We), oe(We, e)) : se(ot), oe(ot, n);
}
var un = null, Ga = !1, Jl = !1;
function ag(e) {
  un === null ? un = [e] : un.push(e);
}
function lE(e) {
  Ga = !0, ag(e);
}
function Wn() {
  if (!Jl && un !== null) {
    Jl = !0;
    var e = 0, t = ne;
    try {
      var n = un;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      un = null, Ga = !1;
    } catch (o) {
      throw un !== null && (un = un.slice(e + 1)), xm(Jc, Wn), o;
    } finally {
      ne = t, Jl = !1;
    }
  }
  return null;
}
var Ir = [], Rr = 0, _s = null, $s = 0, Pt = [], St = 0, lr = null, fn = 1, dn = "";
function er(e, t) {
  Ir[Rr++] = $s, Ir[Rr++] = _s, _s = e, $s = t;
}
function lg(e, t, n) {
  Pt[St++] = fn, Pt[St++] = dn, Pt[St++] = lr, lr = e;
  var r = fn;
  e = dn;
  var o = 32 - Ut(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Ut(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, fn = 1 << 32 - Ut(t) + o | n << o | r, dn = i + e;
  } else
    fn = 1 << i | n << o | r, dn = e;
}
function of(e) {
  e.return !== null && (er(e, 1), lg(e, 1, 0));
}
function sf(e) {
  for (; e === _s; )
    _s = Ir[--Rr], Ir[Rr] = null, $s = Ir[--Rr], Ir[Rr] = null;
  for (; e === lr; )
    lr = Pt[--St], Pt[St] = null, dn = Pt[--St], Pt[St] = null, fn = Pt[--St], Pt[St] = null;
}
var gt = null, pt = null, ae = !1, Qt = null;
function ug(e, t) {
  var n = Bt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function kA(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, gt = e, pt = Rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, gt = e, pt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = lr !== null ? { id: fn, overflow: dn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Bt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, gt = e, pt = null, !0) : !1;
    default:
      return !1;
  }
}
function Zu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xu(e) {
  if (ae) {
    var t = pt;
    if (t) {
      var n = t;
      if (!kA(e, t)) {
        if (Zu(e))
          throw Error(B(418));
        t = Rn(n.nextSibling);
        var r = gt;
        t && kA(e, t) ? ug(r, n) : (e.flags = e.flags & -4097 | 2, ae = !1, gt = e);
      }
    } else {
      if (Zu(e))
        throw Error(B(418));
      e.flags = e.flags & -4097 | 2, ae = !1, gt = e;
    }
  }
}
function PA(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gt = e;
}
function ns(e) {
  if (e !== gt)
    return !1;
  if (!ae)
    return PA(e), ae = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ju(e.type, e.memoizedProps)), t && (t = pt)) {
    if (Zu(e))
      throw cg(), Error(B(418));
    for (; t; )
      ug(e, t), t = Rn(t.nextSibling);
  }
  if (PA(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              pt = Rn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      pt = null;
    }
  } else
    pt = gt ? Rn(e.stateNode.nextSibling) : null;
  return !0;
}
function cg() {
  for (var e = pt; e; )
    e = Rn(e.nextSibling);
}
function eo() {
  pt = gt = null, ae = !1;
}
function af(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
var uE = vn.ReactCurrentBatchConfig;
function Do(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(B(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(B(284));
    if (!n._owner)
      throw Error(B(290, e));
  }
  return e;
}
function rs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(B(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function SA(e) {
  var t = e._init;
  return t(e._payload);
}
function fg(e) {
  function t(p, A) {
    if (e) {
      var g = p.deletions;
      g === null ? (p.deletions = [A], p.flags |= 16) : g.push(A);
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
    return p = Fn(p, A), p.index = 0, p.sibling = null, p;
  }
  function i(p, A, g) {
    return p.index = g, e ? (g = p.alternate, g !== null ? (g = g.index, g < A ? (p.flags |= 2, A) : g) : (p.flags |= 2, A)) : (p.flags |= 1048576, A);
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, A, g, C) {
    return A === null || A.tag !== 6 ? (A = nu(g, p.mode, C), A.return = p, A) : (A = o(A, g), A.return = p, A);
  }
  function l(p, A, g, C) {
    var h = g.type;
    return h === Nr ? f(p, A, g.props.children, C, g.key) : A !== null && (A.elementType === h || typeof h == "object" && h !== null && h.$$typeof === Pn && SA(h) === A.type) ? (C = o(A, g.props), C.ref = Do(p, A, g), C.return = p, C) : (C = Is(g.type, g.key, g.props, null, p.mode, C), C.ref = Do(p, A, g), C.return = p, C);
  }
  function u(p, A, g, C) {
    return A === null || A.tag !== 4 || A.stateNode.containerInfo !== g.containerInfo || A.stateNode.implementation !== g.implementation ? (A = ru(g, p.mode, C), A.return = p, A) : (A = o(A, g.children || []), A.return = p, A);
  }
  function f(p, A, g, C, h) {
    return A === null || A.tag !== 7 ? (A = sr(g, p.mode, C, h), A.return = p, A) : (A = o(A, g), A.return = p, A);
  }
  function c(p, A, g) {
    if (typeof A == "string" && A !== "" || typeof A == "number")
      return A = nu("" + A, p.mode, g), A.return = p, A;
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case Zi:
          return g = Is(A.type, A.key, A.props, null, p.mode, g), g.ref = Do(p, null, A), g.return = p, g;
        case Or:
          return A = ru(A, p.mode, g), A.return = p, A;
        case Pn:
          var C = A._init;
          return c(p, C(A._payload), g);
      }
      if (Lo(A) || Co(A))
        return A = sr(A, p.mode, g, null), A.return = p, A;
      rs(p, A);
    }
    return null;
  }
  function m(p, A, g, C) {
    var h = A !== null ? A.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return h !== null ? null : a(p, A, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Zi:
          return g.key === h ? l(p, A, g, C) : null;
        case Or:
          return g.key === h ? u(p, A, g, C) : null;
        case Pn:
          return h = g._init, m(
            p,
            A,
            h(g._payload),
            C
          );
      }
      if (Lo(g) || Co(g))
        return h !== null ? null : f(p, A, g, C, null);
      rs(p, g);
    }
    return null;
  }
  function E(p, A, g, C, h) {
    if (typeof C == "string" && C !== "" || typeof C == "number")
      return p = p.get(g) || null, a(A, p, "" + C, h);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Zi:
          return p = p.get(C.key === null ? g : C.key) || null, l(A, p, C, h);
        case Or:
          return p = p.get(C.key === null ? g : C.key) || null, u(A, p, C, h);
        case Pn:
          var P = C._init;
          return E(p, A, g, P(C._payload), h);
      }
      if (Lo(C) || Co(C))
        return p = p.get(g) || null, f(A, p, C, h, null);
      rs(A, C);
    }
    return null;
  }
  function w(p, A, g, C) {
    for (var h = null, P = null, T = A, I = A = 0, G = null; T !== null && I < g.length; I++) {
      T.index > I ? (G = T, T = null) : G = T.sibling;
      var R = m(p, T, g[I], C);
      if (R === null) {
        T === null && (T = G);
        break;
      }
      e && T && R.alternate === null && t(p, T), A = i(R, A, I), P === null ? h = R : P.sibling = R, P = R, T = G;
    }
    if (I === g.length)
      return n(p, T), ae && er(p, I), h;
    if (T === null) {
      for (; I < g.length; I++)
        T = c(p, g[I], C), T !== null && (A = i(T, A, I), P === null ? h = T : P.sibling = T, P = T);
      return ae && er(p, I), h;
    }
    for (T = r(p, T); I < g.length; I++)
      G = E(T, p, I, g[I], C), G !== null && (e && G.alternate !== null && T.delete(G.key === null ? I : G.key), A = i(G, A, I), P === null ? h = G : P.sibling = G, P = G);
    return e && T.forEach(function(K) {
      return t(p, K);
    }), ae && er(p, I), h;
  }
  function v(p, A, g, C) {
    var h = Co(g);
    if (typeof h != "function")
      throw Error(B(150));
    if (g = h.call(g), g == null)
      throw Error(B(151));
    for (var P = h = null, T = A, I = A = 0, G = null, R = g.next(); T !== null && !R.done; I++, R = g.next()) {
      T.index > I ? (G = T, T = null) : G = T.sibling;
      var K = m(p, T, R.value, C);
      if (K === null) {
        T === null && (T = G);
        break;
      }
      e && T && K.alternate === null && t(p, T), A = i(K, A, I), P === null ? h = K : P.sibling = K, P = K, T = G;
    }
    if (R.done)
      return n(
        p,
        T
      ), ae && er(p, I), h;
    if (T === null) {
      for (; !R.done; I++, R = g.next())
        R = c(p, R.value, C), R !== null && (A = i(R, A, I), P === null ? h = R : P.sibling = R, P = R);
      return ae && er(p, I), h;
    }
    for (T = r(p, T); !R.done; I++, R = g.next())
      R = E(T, p, I, R.value, C), R !== null && (e && R.alternate !== null && T.delete(R.key === null ? I : R.key), A = i(R, A, I), P === null ? h = R : P.sibling = R, P = R);
    return e && T.forEach(function(j) {
      return t(p, j);
    }), ae && er(p, I), h;
  }
  function L(p, A, g, C) {
    if (typeof g == "object" && g !== null && g.type === Nr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Zi:
          e: {
            for (var h = g.key, P = A; P !== null; ) {
              if (P.key === h) {
                if (h = g.type, h === Nr) {
                  if (P.tag === 7) {
                    n(p, P.sibling), A = o(P, g.props.children), A.return = p, p = A;
                    break e;
                  }
                } else if (P.elementType === h || typeof h == "object" && h !== null && h.$$typeof === Pn && SA(h) === P.type) {
                  n(p, P.sibling), A = o(P, g.props), A.ref = Do(p, P, g), A.return = p, p = A;
                  break e;
                }
                n(p, P);
                break;
              } else
                t(p, P);
              P = P.sibling;
            }
            g.type === Nr ? (A = sr(g.props.children, p.mode, C, g.key), A.return = p, p = A) : (C = Is(g.type, g.key, g.props, null, p.mode, C), C.ref = Do(p, A, g), C.return = p, p = C);
          }
          return s(p);
        case Or:
          e: {
            for (P = g.key; A !== null; ) {
              if (A.key === P)
                if (A.tag === 4 && A.stateNode.containerInfo === g.containerInfo && A.stateNode.implementation === g.implementation) {
                  n(p, A.sibling), A = o(A, g.children || []), A.return = p, p = A;
                  break e;
                } else {
                  n(p, A);
                  break;
                }
              else
                t(p, A);
              A = A.sibling;
            }
            A = ru(g, p.mode, C), A.return = p, p = A;
          }
          return s(p);
        case Pn:
          return P = g._init, L(p, A, P(g._payload), C);
      }
      if (Lo(g))
        return w(p, A, g, C);
      if (Co(g))
        return v(p, A, g, C);
      rs(p, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, A !== null && A.tag === 6 ? (n(p, A.sibling), A = o(A, g), A.return = p, p = A) : (n(p, A), A = nu(g, p.mode, C), A.return = p, p = A), s(p)) : n(p, A);
  }
  return L;
}
var to = fg(!0), dg = fg(!1), ea = Xn(null), ta = null, Qr = null, lf = null;
function uf() {
  lf = Qr = ta = null;
}
function cf(e) {
  var t = ea.current;
  se(ea), e._currentValue = t;
}
function Wu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Jr(e, t) {
  ta = e, lf = Qr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (rt = !0), e.firstContext = null);
}
function Nt(e) {
  var t = e._currentValue;
  if (lf !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Qr === null) {
      if (ta === null)
        throw Error(B(308));
      Qr = e, ta.dependencies = { lanes: 0, firstContext: e };
    } else
      Qr = Qr.next = e;
  return t;
}
var rr = null;
function ff(e) {
  rr === null ? rr = [e] : rr.push(e);
}
function Ag(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ff(t)) : (n.next = o.next, o.next = n), t.interleaved = n, hn(e, r);
}
function hn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Sn = !1;
function df(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function pg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function An(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, _ & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, hn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ff(r)) : (t.next = o.next, o.next = t), r.interleaved = t, hn(e, n);
}
function Ns(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vc(e, n);
  }
}
function DA(e, t) {
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
function na(e, t, n, r) {
  var o = e.updateQueue;
  Sn = !1;
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
      var m = a.lane, E = a.eventTime;
      if ((r & m) === m) {
        f !== null && (f = f.next = {
          eventTime: E,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var w = e, v = a;
          switch (m = t, E = n, v.tag) {
            case 1:
              if (w = v.payload, typeof w == "function") {
                c = w.call(E, c, m);
                break e;
              }
              c = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = v.payload, m = typeof w == "function" ? w.call(E, c, m) : w, m == null)
                break e;
              c = ce({}, c, m);
              break e;
            case 2:
              Sn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [a] : m.push(a));
      } else
        E = { eventTime: E, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, f === null ? (u = f = E, l = c) : f = f.next = E, s |= m;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null)
          break;
        m = a, a = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (1);
    if (f === null && (l = c), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    cr |= s, e.lanes = s, e.memoizedState = c;
  }
}
function BA(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(B(191, o));
        o.call(r);
      }
    }
}
var bi = {}, nn = Xn(bi), Ai = Xn(bi), pi = Xn(bi);
function or(e) {
  if (e === bi)
    throw Error(B(174));
  return e;
}
function Af(e, t) {
  switch (oe(pi, t), oe(Ai, e), oe(nn, bi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bu(t, e);
  }
  se(nn), oe(nn, t);
}
function no() {
  se(nn), se(Ai), se(pi);
}
function mg(e) {
  or(pi.current);
  var t = or(nn.current), n = Bu(t, e.type);
  t !== n && (oe(Ai, e), oe(nn, n));
}
function pf(e) {
  Ai.current === e && (se(nn), se(Ai));
}
var le = Xn(0);
function ra(e) {
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
function mf() {
  for (var e = 0; e < Vl.length; e++)
    Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var Ms = vn.ReactCurrentDispatcher, ql = vn.ReactCurrentBatchConfig, ur = 0, ue = null, De = null, xe = null, oa = !1, Xo = !1, mi = 0, cE = 0;
function Ye() {
  throw Error(B(321));
}
function gf(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!jt(e[n], t[n]))
      return !1;
  return !0;
}
function hf(e, t, n, r, o, i) {
  if (ur = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ms.current = e === null || e.memoizedState === null ? pE : mE, e = n(r, o), Xo) {
    i = 0;
    do {
      if (Xo = !1, mi = 0, 25 <= i)
        throw Error(B(301));
      i += 1, xe = De = null, t.updateQueue = null, Ms.current = gE, e = n(r, o);
    } while (Xo);
  }
  if (Ms.current = ia, t = De !== null && De.next !== null, ur = 0, xe = De = ue = null, oa = !1, t)
    throw Error(B(300));
  return e;
}
function yf() {
  var e = mi !== 0;
  return mi = 0, e;
}
function Vt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return xe === null ? ue.memoizedState = xe = e : xe = xe.next = e, xe;
}
function Mt() {
  if (De === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = De.next;
  var t = xe === null ? ue.memoizedState : xe.next;
  if (t !== null)
    xe = t, De = e;
  else {
    if (e === null)
      throw Error(B(310));
    De = e, e = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }, xe === null ? ue.memoizedState = xe = e : xe = xe.next = e;
  }
  return xe;
}
function gi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _l(e) {
  var t = Mt(), n = t.queue;
  if (n === null)
    throw Error(B(311));
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
      var f = u.lane;
      if ((ur & f) === f)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = c, s = r) : l = l.next = c, ue.lanes |= f, cr |= f;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, jt(r, t.memoizedState) || (rt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ue.lanes |= i, cr |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $l(e) {
  var t = Mt(), n = t.queue;
  if (n === null)
    throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    jt(i, t.memoizedState) || (rt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function gg() {
}
function hg(e, t) {
  var n = ue, r = Mt(), o = t(), i = !jt(r.memoizedState, o);
  if (i && (r.memoizedState = o, rt = !0), r = r.queue, vf(wg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || xe !== null && xe.memoizedState.tag & 1) {
    if (n.flags |= 2048, hi(9, vg.bind(null, n, r, o, t), void 0, null), be === null)
      throw Error(B(349));
    ur & 30 || yg(n, t, o);
  }
  return o;
}
function yg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Eg(t) && Cg(e);
}
function wg(e, t, n) {
  return n(function() {
    Eg(t) && Cg(e);
  });
}
function Eg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function Cg(e) {
  var t = hn(e, 1);
  t !== null && Ft(t, e, 1, -1);
}
function OA(e) {
  var t = Vt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: gi, lastRenderedState: e }, t.queue = e, e = e.dispatch = AE.bind(null, ue, e), [t.memoizedState, e];
}
function hi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Tg() {
  return Mt().memoizedState;
}
function xs(e, t, n, r) {
  var o = Vt();
  ue.flags |= e, o.memoizedState = hi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ya(e, t, n, r) {
  var o = Mt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (De !== null) {
    var s = De.memoizedState;
    if (i = s.destroy, r !== null && gf(r, s.deps)) {
      o.memoizedState = hi(t, n, i, r);
      return;
    }
  }
  ue.flags |= e, o.memoizedState = hi(1 | t, n, i, r);
}
function NA(e, t) {
  return xs(8390656, 8, e, t);
}
function vf(e, t) {
  return Ya(2048, 8, e, t);
}
function kg(e, t) {
  return Ya(4, 2, e, t);
}
function Pg(e, t) {
  return Ya(4, 4, e, t);
}
function Sg(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Dg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ya(4, 4, Sg.bind(null, t, e), n);
}
function wf() {
}
function Bg(e, t) {
  var n = Mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Og(e, t) {
  var n = Mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ng(e, t, n) {
  return ur & 21 ? (jt(n, t) || (n = Lm(), ue.lanes |= n, cr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, rt = !0), e.memoizedState = n);
}
function fE(e, t) {
  var n = ne;
  ne = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    ne = n, ql.transition = r;
  }
}
function Mg() {
  return Mt().memoizedState;
}
function dE(e, t, n) {
  var r = Un(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xg(e))
    bg(t, n);
  else if (n = Ag(e, t, n, r), n !== null) {
    var o = $e();
    Ft(n, e, r, o), zg(n, t, r);
  }
}
function AE(e, t, n) {
  var r = Un(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xg(e))
    bg(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var s = t.lastRenderedState, a = i(s, n);
        if (o.hasEagerState = !0, o.eagerState = a, jt(a, s)) {
          var l = t.interleaved;
          l === null ? (o.next = o, ff(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Ag(e, t, o, r), n !== null && (o = $e(), Ft(n, e, r, o), zg(n, t, r));
  }
}
function xg(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function bg(e, t) {
  Xo = oa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function zg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vc(e, n);
  }
}
var ia = { readContext: Nt, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: !1 }, pE = { readContext: Nt, useCallback: function(e, t) {
  return Vt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Nt, useEffect: NA, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xs(
    4194308,
    4,
    Sg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return xs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return xs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Vt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Vt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = dE.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Vt();
  return e = { current: e }, t.memoizedState = e;
}, useState: OA, useDebugValue: wf, useDeferredValue: function(e) {
  return Vt().memoizedState = e;
}, useTransition: function() {
  var e = OA(!1), t = e[0];
  return e = fE.bind(null, e[1]), Vt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, o = Vt();
  if (ae) {
    if (n === void 0)
      throw Error(B(407));
    n = n();
  } else {
    if (n = t(), be === null)
      throw Error(B(349));
    ur & 30 || yg(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, NA(wg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, hi(9, vg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Vt(), t = be.identifierPrefix;
  if (ae) {
    var n = dn, r = fn;
    n = (r & ~(1 << 32 - Ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = mi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = cE++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, mE = {
  readContext: Nt,
  useCallback: Bg,
  useContext: Nt,
  useEffect: vf,
  useImperativeHandle: Dg,
  useInsertionEffect: kg,
  useLayoutEffect: Pg,
  useMemo: Og,
  useReducer: _l,
  useRef: Tg,
  useState: function() {
    return _l(gi);
  },
  useDebugValue: wf,
  useDeferredValue: function(e) {
    var t = Mt();
    return Ng(t, De.memoizedState, e);
  },
  useTransition: function() {
    var e = _l(gi)[0], t = Mt().memoizedState;
    return [e, t];
  },
  useMutableSource: gg,
  useSyncExternalStore: hg,
  useId: Mg,
  unstable_isNewReconciler: !1
}, gE = { readContext: Nt, useCallback: Bg, useContext: Nt, useEffect: vf, useImperativeHandle: Dg, useInsertionEffect: kg, useLayoutEffect: Pg, useMemo: Og, useReducer: $l, useRef: Tg, useState: function() {
  return $l(gi);
}, useDebugValue: wf, useDeferredValue: function(e) {
  var t = Mt();
  return De === null ? t.memoizedState = e : Ng(t, De.memoizedState, e);
}, useTransition: function() {
  var e = $l(gi)[0], t = Mt().memoizedState;
  return [e, t];
}, useMutableSource: gg, useSyncExternalStore: hg, useId: Mg, unstable_isNewReconciler: !1 };
function It(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ju(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ka = { isMounted: function(e) {
  return (e = e._reactInternals) ? mr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Un(e), i = An(r, o);
  i.payload = t, n != null && (i.callback = n), t = Qn(e, i, o), t !== null && (Ft(t, e, o, r), Ns(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Un(e), i = An(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qn(e, i, o), t !== null && (Ft(t, e, o, r), Ns(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = Un(e), o = An(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Qn(e, o, r), t !== null && (Ft(t, e, r, n), Ns(t, e, r));
} };
function MA(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ui(n, r) || !ui(o, i) : !0;
}
function Lg(e, t, n) {
  var r = !1, o = Yn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Nt(i) : (o = it(t) ? ar : We.current, r = t.contextTypes, i = (r = r != null) ? $r(e, o) : Yn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ka, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function xA(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ka.enqueueReplaceState(t, t.state, null);
}
function Vu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, df(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Nt(i) : (i = it(t) ? ar : We.current, o.context = $r(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ju(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ka.enqueueReplaceState(o, o.state, null), na(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ro(e, t) {
  try {
    var n = "", r = t;
    do
      n += Yw(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function eu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var hE = typeof WeakMap == "function" ? WeakMap : Map;
function Ig(e, t, n) {
  n = An(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    aa || (aa = !0, ac = r), qu(e, t);
  }, n;
}
function Rg(e, t, n) {
  n = An(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      qu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    qu(e, t), typeof r != "function" && (Hn === null ? Hn = /* @__PURE__ */ new Set([this]) : Hn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function bA(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new hE();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = ME.bind(null, e, t, n), t.then(e, e));
}
function zA(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function LA(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = An(-1, 1), t.tag = 2, Qn(n, t, 1))), n.lanes |= 1), e);
}
var yE = vn.ReactCurrentOwner, rt = !1;
function _e(e, t, n, r) {
  t.child = e === null ? dg(t, null, n, r) : to(t, e.child, n, r);
}
function IA(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Jr(t, o), r = hf(e, t, n, r, i, o), n = yf(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, yn(e, t, o)) : (ae && n && of(t), t.flags |= 1, _e(e, t, r, o), t.child);
}
function RA(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Bf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Qg(e, t, i, r, o)) : (e = Is(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ui, n(s, r) && e.ref === t.ref)
      return yn(e, t, o);
  }
  return t.flags |= 1, e = Fn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Qg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ui(i, r) && e.ref === t.ref)
      if (rt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (rt = !0);
      else
        return t.lanes = e.lanes, yn(e, t, o);
  }
  return _u(e, t, n, r, o);
}
function Hg(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, oe(Ur, ft), ft |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, oe(Ur, ft), ft |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, oe(Ur, ft), ft |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, oe(Ur, ft), ft |= r;
  return _e(e, t, o, n), t.child;
}
function Ug(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function _u(e, t, n, r, o) {
  var i = it(n) ? ar : We.current;
  return i = $r(t, i), Jr(t, o), n = hf(e, t, n, r, i, o), r = yf(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, yn(e, t, o)) : (ae && r && of(t), t.flags |= 1, _e(e, t, n, o), t.child);
}
function QA(e, t, n, r, o) {
  if (it(n)) {
    var i = !0;
    qs(t);
  } else
    i = !1;
  if (Jr(t, o), t.stateNode === null)
    bs(e, t), Lg(t, n, r), Vu(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Nt(u) : (u = it(n) ? ar : We.current, u = $r(t, u));
    var f = n.getDerivedStateFromProps, c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && xA(t, s, r, u), Sn = !1;
    var m = t.memoizedState;
    s.state = m, na(t, r, s, o), l = t.memoizedState, a !== r || m !== l || ot.current || Sn ? (typeof f == "function" && (Ju(t, n, f, r), l = t.memoizedState), (a = Sn || MA(t, n, a, r, m, l, u)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, pg(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : It(t.type, a), s.props = u, c = t.pendingProps, m = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Nt(l) : (l = it(n) ? ar : We.current, l = $r(t, l));
    var E = n.getDerivedStateFromProps;
    (f = typeof E == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== c || m !== l) && xA(t, s, r, l), Sn = !1, m = t.memoizedState, s.state = m, na(t, r, s, o);
    var w = t.memoizedState;
    a !== c || m !== w || ot.current || Sn ? (typeof E == "function" && (Ju(t, n, E, r), w = t.memoizedState), (u = Sn || MA(t, n, u, r, m, w, l) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return $u(e, t, n, r, i, o);
}
function $u(e, t, n, r, o, i) {
  Ug(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return o && TA(t, n, !1), yn(e, t, i);
  r = t.stateNode, yE.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = to(t, e.child, null, i), t.child = to(t, null, a, i)) : _e(e, t, a, i), t.memoizedState = r.state, o && TA(t, n, !0), t.child;
}
function Fg(e) {
  var t = e.stateNode;
  t.pendingContext ? CA(e, t.pendingContext, t.pendingContext !== t.context) : t.context && CA(e, t.context, !1), Af(e, t.containerInfo);
}
function HA(e, t, n, r, o) {
  return eo(), af(o), t.flags |= 256, _e(e, t, n, r), t.child;
}
var ec = { dehydrated: null, treeContext: null, retryLane: 0 };
function tc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jg(e, t, n) {
  var r = t.pendingProps, o = le.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), oe(le, o & 1), e === null)
    return Xu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Wa(s, r, 0, null), e = sr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = tc(n), t.memoizedState = ec, e) : Ef(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return vE(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Fn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Fn(a, i) : (i = sr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? tc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = ec, r;
  }
  return i = e.child, e = i.sibling, r = Fn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ef(e, t) {
  return t = Wa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function os(e, t, n, r) {
  return r !== null && af(r), to(t, e.child, null, n), e = Ef(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function vE(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = eu(Error(B(422))), os(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Wa({ mode: "visible", children: r.children }, o, 0, null), i = sr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && to(t, e.child, null, s), t.child.memoizedState = tc(s), t.memoizedState = ec, i);
  if (!(t.mode & 1))
    return os(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(B(419)), r = eu(i, r, void 0), os(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, rt || a) {
    if (r = be, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, hn(e, o), Ft(r, e, o, -1));
    }
    return Df(), r = eu(Error(B(421))), os(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = xE.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, pt = Rn(o.nextSibling), gt = t, ae = !0, Qt = null, e !== null && (Pt[St++] = fn, Pt[St++] = dn, Pt[St++] = lr, fn = e.id, dn = e.overflow, lr = t), t = Ef(t, r.children), t.flags |= 4096, t);
}
function UA(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wu(e.return, t, n);
}
function tu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Gg(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (_e(e, t, r.children, n), r = le.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && UA(e, n, t);
          else if (e.tag === 19)
            UA(e, n, t);
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
  if (oe(le, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && ra(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), tu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && ra(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        tu(t, !0, n, null, i);
        break;
      case "together":
        tu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bs(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function yn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), cr |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(B(153));
  if (t.child !== null) {
    for (e = t.child, n = Fn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Fn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function wE(e, t, n) {
  switch (t.tag) {
    case 3:
      Fg(t), eo();
      break;
    case 5:
      mg(t);
      break;
    case 1:
      it(t.type) && qs(t);
      break;
    case 4:
      Af(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      oe(ea, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (oe(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? jg(e, t, n) : (oe(le, le.current & 1), e = yn(e, t, n), e !== null ? e.sibling : null);
      oe(le, le.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Gg(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), oe(le, le.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Hg(e, t, n);
  }
  return yn(e, t, n);
}
var Yg, nc, Kg, Zg;
Yg = function(e, t) {
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
nc = function() {
};
Kg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, or(nn.current);
    var i = null;
    switch (n) {
      case "input":
        o = ku(e, o), r = ku(e, r), i = [];
        break;
      case "select":
        o = ce({}, o, { value: void 0 }), r = ce({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Du(e, o), r = Du(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Js);
    }
    Ou(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a)
            a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ni.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ni.hasOwnProperty(u) ? (l != null && u === "onScroll" && ie("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Zg = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bo(e, t) {
  if (!ae)
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
function Ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function EE(e, t, n) {
  var r = t.pendingProps;
  switch (sf(t), t.tag) {
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
      return Ke(t), null;
    case 1:
      return it(t.type) && Vs(), Ke(t), null;
    case 3:
      return r = t.stateNode, no(), se(ot), se(We), mf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ns(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qt !== null && (cc(Qt), Qt = null))), nc(e, t), Ke(t), null;
    case 5:
      pf(t);
      var o = or(pi.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Kg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(B(166));
          return Ke(t), null;
        }
        if (e = or(nn.current), ns(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[$t] = t, r[di] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ro.length; o++)
                ie(Ro[o], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie(
                "error",
                r
              ), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Jd(r, i), ie("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ie("invalid", r);
              break;
            case "textarea":
              qd(r, i), ie("invalid", r);
          }
          Ou(n, i), o = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && ts(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && ts(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : ni.hasOwnProperty(s) && a != null && s === "onScroll" && ie("scroll", r);
            }
          switch (n) {
            case "input":
              Xi(r), Vd(r, i, !0);
              break;
            case "textarea":
              Xi(r), _d(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Js);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = wm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[$t] = t, e[di] = r, Yg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Nu(n, r), n) {
              case "dialog":
                ie("cancel", e), ie("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ro.length; o++)
                  ie(Ro[o], e);
                o = r;
                break;
              case "source":
                ie("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ie(
                  "error",
                  e
                ), ie("load", e), o = r;
                break;
              case "details":
                ie("toggle", e), o = r;
                break;
              case "input":
                Jd(e, r), o = ku(e, r), ie("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ce({}, r, { value: void 0 }), ie("invalid", e);
                break;
              case "textarea":
                qd(e, r), o = Du(e, r), ie("invalid", e);
                break;
              default:
                o = r;
            }
            Ou(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? Tm(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Em(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ri(e, l) : typeof l == "number" && ri(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ni.hasOwnProperty(i) ? l != null && i === "onScroll" && ie("scroll", e) : l != null && Yc(e, i, l, s));
              }
            switch (n) {
              case "input":
                Xi(e), Vd(e, r, !1);
                break;
              case "textarea":
                Xi(e), _d(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Kr(e, !!r.multiple, i, !1) : r.defaultValue != null && Kr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Js);
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
      return Ke(t), null;
    case 6:
      if (e && t.stateNode != null)
        Zg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(B(166));
        if (n = or(pi.current), or(nn.current), ns(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[$t] = t, (i = r.nodeValue !== n) && (e = gt, e !== null))
            switch (e.tag) {
              case 3:
                ts(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ts(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$t] = t, t.stateNode = r;
      }
      return Ke(t), null;
    case 13:
      if (se(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ae && pt !== null && t.mode & 1 && !(t.flags & 128))
          cg(), eo(), t.flags |= 98560, i = !1;
        else if (i = ns(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(B(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(B(317));
            i[$t] = t;
          } else
            eo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ke(t), i = !1;
        } else
          Qt !== null && (cc(Qt), Qt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? Be === 0 && (Be = 3) : Df())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
    case 4:
      return no(), nc(e, t), e === null && ci(t.stateNode.containerInfo), Ke(t), null;
    case 10:
      return cf(t.type._context), Ke(t), null;
    case 17:
      return it(t.type) && Vs(), Ke(t), null;
    case 19:
      if (se(le), i = t.memoizedState, i === null)
        return Ke(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r)
          Bo(i, !1);
        else {
          if (Be !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = ra(e), s !== null) {
                for (t.flags |= 128, Bo(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return oe(le, le.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && ve() > oo && (t.flags |= 128, r = !0, Bo(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = ra(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Bo(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ae)
              return Ke(t), null;
          } else
            2 * ve() - i.renderingStartTime > oo && n !== 1073741824 && (t.flags |= 128, r = !0, Bo(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ve(), t.sibling = null, n = le.current, oe(le, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
    case 22:
    case 23:
      return Sf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ft & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function CE(e, t) {
  switch (sf(t), t.tag) {
    case 1:
      return it(t.type) && Vs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return no(), se(ot), se(We), mf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return pf(t), null;
    case 13:
      if (se(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(B(340));
        eo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return se(le), null;
    case 4:
      return no(), null;
    case 10:
      return cf(t.type._context), null;
    case 22:
    case 23:
      return Sf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var is = !1, Xe = !1, TE = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
function Hr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else
      n.current = null;
}
function rc(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var FA = !1;
function kE(e, t) {
  if (Uu = Zs, e = qm(), rf(e)) {
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
          var s = 0, a = -1, l = -1, u = 0, f = 0, c = e, m = null;
          t:
            for (; ; ) {
              for (var E; c !== n || o !== 0 && c.nodeType !== 3 || (a = s + o), c !== i || r !== 0 && c.nodeType !== 3 || (l = s + r), c.nodeType === 3 && (s += c.nodeValue.length), (E = c.firstChild) !== null; )
                m = c, c = E;
              for (; ; ) {
                if (c === e)
                  break t;
                if (m === n && ++u === o && (a = s), m === i && ++f === r && (l = s), (E = c.nextSibling) !== null)
                  break;
                c = m, m = c.parentNode;
              }
              c = E;
            }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Fu = { focusedElem: e, selectionRange: n }, Zs = !1, Q = t; Q !== null; )
    if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, Q = e;
    else
      for (; Q !== null; ) {
        t = Q;
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
                  var v = w.memoizedProps, L = w.memoizedState, p = t.stateNode, A = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : It(t.type, v), L);
                  p.__reactInternalSnapshotBeforeUpdate = A;
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
                throw Error(B(163));
            }
        } catch (C) {
          ye(t, t.return, C);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, Q = e;
          break;
        }
        Q = t.return;
      }
  return w = FA, FA = !1, w;
}
function Wo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && rc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Za(e, t) {
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
function oc(e) {
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
function Xg(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Xg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$t], delete t[di], delete t[Yu], delete t[sE], delete t[aE])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Wg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jA(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wg(e.return))
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
function ic(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Js));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ic(e, t, n), e = e.sibling; e !== null; )
      ic(e, t, n), e = e.sibling;
}
function sc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (sc(e, t, n), e = e.sibling; e !== null; )
      sc(e, t, n), e = e.sibling;
}
var Re = null, Rt = !1;
function Tn(e, t, n) {
  for (n = n.child; n !== null; )
    Jg(e, t, n), n = n.sibling;
}
function Jg(e, t, n) {
  if (tn && typeof tn.onCommitFiberUnmount == "function")
    try {
      tn.onCommitFiberUnmount(Qa, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Xe || Hr(n, t);
    case 6:
      var r = Re, o = Rt;
      Re = null, Tn(e, t, n), Re = r, Rt = o, Re !== null && (Rt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null && (Rt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? Wl(e.parentNode, n) : e.nodeType === 1 && Wl(e, n), ai(e)) : Wl(Re, n.stateNode));
      break;
    case 4:
      r = Re, o = Rt, Re = n.stateNode.containerInfo, Rt = !0, Tn(e, t, n), Re = r, Rt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && rc(n, t, s), o = o.next;
        } while (o !== r);
      }
      Tn(e, t, n);
      break;
    case 1:
      if (!Xe && (Hr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          ye(n, t, a);
        }
      Tn(e, t, n);
      break;
    case 21:
      Tn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Xe = (r = Xe) || n.memoizedState !== null, Tn(e, t, n), Xe = r) : Tn(e, t, n);
      break;
    default:
      Tn(e, t, n);
  }
}
function GA(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new TE()), t.forEach(function(r) {
      var o = bE.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Lt(e, t) {
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
                Re = a.stateNode, Rt = !1;
                break e;
              case 3:
                Re = a.stateNode.containerInfo, Rt = !0;
                break e;
              case 4:
                Re = a.stateNode.containerInfo, Rt = !0;
                break e;
            }
            a = a.return;
          }
        if (Re === null)
          throw Error(B(160));
        Jg(i, s, o), Re = null, Rt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        ye(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Vg(t, e), t = t.sibling;
}
function Vg(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Lt(t, e), Xt(e), r & 4) {
        try {
          Wo(3, e, e.return), Za(3, e);
        } catch (v) {
          ye(e, e.return, v);
        }
        try {
          Wo(5, e, e.return);
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      break;
    case 1:
      Lt(t, e), Xt(e), r & 512 && n !== null && Hr(n, n.return);
      break;
    case 5:
      if (Lt(t, e), Xt(e), r & 512 && n !== null && Hr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ri(o, "");
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && ym(o, i), Nu(a, s);
            var u = Nu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var f = l[s], c = l[s + 1];
              f === "style" ? Tm(o, c) : f === "dangerouslySetInnerHTML" ? Em(o, c) : f === "children" ? ri(o, c) : Yc(o, f, c, u);
            }
            switch (a) {
              case "input":
                Pu(o, i);
                break;
              case "textarea":
                vm(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var E = i.value;
                E != null ? Kr(o, !!i.multiple, E, !1) : m !== !!i.multiple && (i.defaultValue != null ? Kr(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Kr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[di] = i;
          } catch (v) {
            ye(e, e.return, v);
          }
      }
      break;
    case 6:
      if (Lt(t, e), Xt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(B(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Lt(t, e), Xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          ai(t.containerInfo);
        } catch (v) {
          ye(e, e.return, v);
        }
      break;
    case 4:
      Lt(t, e), Xt(e);
      break;
    case 13:
      Lt(t, e), Xt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (kf = ve())), r & 4 && GA(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Xe = (u = Xe) || f, Lt(t, e), Xe = u) : Lt(t, e), Xt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
          for (Q = e, f = e.child; f !== null; ) {
            for (c = Q = f; Q !== null; ) {
              switch (m = Q, E = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wo(4, m, m.return);
                  break;
                case 1:
                  Hr(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (v) {
                      ye(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Hr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    KA(c);
                    continue;
                  }
              }
              E !== null ? (E.return = m, Q = E) : KA(c);
            }
            f = f.sibling;
          }
        e:
          for (f = null, c = e; ; ) {
            if (c.tag === 5) {
              if (f === null) {
                f = c;
                try {
                  o = c.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = c.stateNode, l = c.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Cm("display", s));
                } catch (v) {
                  ye(e, e.return, v);
                }
              }
            } else if (c.tag === 6) {
              if (f === null)
                try {
                  c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                } catch (v) {
                  ye(e, e.return, v);
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
      Lt(t, e), Xt(e), r & 4 && GA(e);
      break;
    case 21:
      break;
    default:
      Lt(
        t,
        e
      ), Xt(e);
  }
}
function Xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ri(o, ""), r.flags &= -33);
          var i = jA(e);
          sc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = jA(e);
          ic(e, a, s);
          break;
        default:
          throw Error(B(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function PE(e, t, n) {
  Q = e, qg(e);
}
function qg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Q !== null; ) {
    var o = Q, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || is;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || Xe;
        a = is;
        var u = Xe;
        if (is = s, (Xe = l) && !u)
          for (Q = o; Q !== null; )
            s = Q, l = s.child, s.tag === 22 && s.memoizedState !== null ? ZA(o) : l !== null ? (l.return = s, Q = l) : ZA(o);
        for (; i !== null; )
          Q = i, qg(i), i = i.sibling;
        Q = o, is = a, Xe = u;
      }
      YA(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, Q = i) : YA(e);
  }
}
function YA(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xe || Za(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Xe)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : It(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && BA(t, i, r);
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
                BA(t, s, n);
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
                    c !== null && ai(c);
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
              throw Error(B(163));
          }
        Xe || t.flags & 512 && oc(t);
      } catch (m) {
        ye(t, t.return, m);
      }
    }
    if (t === e) {
      Q = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Q = n;
      break;
    }
    Q = t.return;
  }
}
function KA(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t === e) {
      Q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Q = n;
      break;
    }
    Q = t.return;
  }
}
function ZA(e) {
  for (; Q !== null; ) {
    var t = Q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Za(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, o, l);
            }
          }
          var i = t.return;
          try {
            oc(t);
          } catch (l) {
            ye(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            oc(t);
          } catch (l) {
            ye(t, s, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      Q = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, Q = a;
      break;
    }
    Q = t.return;
  }
}
var SE = Math.ceil, sa = vn.ReactCurrentDispatcher, Cf = vn.ReactCurrentOwner, Ot = vn.ReactCurrentBatchConfig, _ = 0, be = null, ke = null, Fe = 0, ft = 0, Ur = Xn(0), Be = 0, yi = null, cr = 0, Xa = 0, Tf = 0, Jo = null, nt = null, kf = 0, oo = 1 / 0, an = null, aa = !1, ac = null, Hn = null, ss = !1, Mn = null, la = 0, Vo = 0, lc = null, zs = -1, Ls = 0;
function $e() {
  return _ & 6 ? ve() : zs !== -1 ? zs : zs = ve();
}
function Un(e) {
  return e.mode & 1 ? _ & 2 && Fe !== 0 ? Fe & -Fe : uE.transition !== null ? (Ls === 0 && (Ls = Lm()), Ls) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : jm(e.type)), e) : 1;
}
function Ft(e, t, n, r) {
  if (50 < Vo)
    throw Vo = 0, lc = null, Error(B(185));
  Ni(e, n, r), (!(_ & 2) || e !== be) && (e === be && (!(_ & 2) && (Xa |= n), Be === 4 && Bn(e, Fe)), st(e, r), n === 1 && _ === 0 && !(t.mode & 1) && (oo = ve() + 500, Ga && Wn()));
}
function st(e, t) {
  var n = e.callbackNode;
  u1(e, t);
  var r = Ks(e, e === be ? Fe : 0);
  if (r === 0)
    n !== null && tA(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && tA(n), t === 1)
      e.tag === 0 ? lE(XA.bind(null, e)) : ag(XA.bind(null, e)), oE(function() {
        !(_ & 6) && Wn();
      }), n = null;
    else {
      switch (Im(r)) {
        case 1:
          n = Jc;
          break;
        case 4:
          n = bm;
          break;
        case 16:
          n = Ys;
          break;
        case 536870912:
          n = zm;
          break;
        default:
          n = Ys;
      }
      n = ih(n, _g.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function _g(e, t) {
  if (zs = -1, Ls = 0, _ & 6)
    throw Error(B(327));
  var n = e.callbackNode;
  if (Vr() && e.callbackNode !== n)
    return null;
  var r = Ks(e, e === be ? Fe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = ua(e, r);
  else {
    t = r;
    var o = _;
    _ |= 2;
    var i = eh();
    (be !== e || Fe !== t) && (an = null, oo = ve() + 500, ir(e, t));
    do
      try {
        OE();
        break;
      } catch (a) {
        $g(e, a);
      }
    while (1);
    uf(), sa.current = i, _ = o, ke !== null ? t = 0 : (be = null, Fe = 0, t = Be);
  }
  if (t !== 0) {
    if (t === 2 && (o = Lu(e), o !== 0 && (r = o, t = uc(e, o))), t === 1)
      throw n = yi, ir(e, 0), Bn(e, r), st(e, ve()), n;
    if (t === 6)
      Bn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !DE(o) && (t = ua(e, r), t === 2 && (i = Lu(e), i !== 0 && (r = i, t = uc(e, i))), t === 1))
        throw n = yi, ir(e, 0), Bn(e, r), st(e, ve()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          tr(e, nt, an);
          break;
        case 3:
          if (Bn(e, r), (r & 130023424) === r && (t = kf + 500 - ve(), 10 < t)) {
            if (Ks(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Gu(tr.bind(null, e, nt, an), t);
            break;
          }
          tr(e, nt, an);
          break;
        case 4:
          if (Bn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Ut(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = ve() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * SE(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Gu(tr.bind(null, e, nt, an), r);
            break;
          }
          tr(e, nt, an);
          break;
        case 5:
          tr(e, nt, an);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return st(e, ve()), e.callbackNode === n ? _g.bind(null, e) : null;
}
function uc(e, t) {
  var n = Jo;
  return e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256), e = ua(e, t), e !== 2 && (t = nt, nt = n, t !== null && cc(t)), e;
}
function cc(e) {
  nt === null ? nt = e : nt.push.apply(nt, e);
}
function DE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!jt(i(), o))
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
function Bn(e, t) {
  for (t &= ~Tf, t &= ~Xa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ut(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function XA(e) {
  if (_ & 6)
    throw Error(B(327));
  Vr();
  var t = Ks(e, 0);
  if (!(t & 1))
    return st(e, ve()), null;
  var n = ua(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lu(e);
    r !== 0 && (t = r, n = uc(e, r));
  }
  if (n === 1)
    throw n = yi, ir(e, 0), Bn(e, t), st(e, ve()), n;
  if (n === 6)
    throw Error(B(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, tr(e, nt, an), st(e, ve()), null;
}
function Pf(e, t) {
  var n = _;
  _ |= 1;
  try {
    return e(t);
  } finally {
    _ = n, _ === 0 && (oo = ve() + 500, Ga && Wn());
  }
}
function fr(e) {
  Mn !== null && Mn.tag === 0 && !(_ & 6) && Vr();
  var t = _;
  _ |= 1;
  var n = Ot.transition, r = ne;
  try {
    if (Ot.transition = null, ne = 1, e)
      return e();
  } finally {
    ne = r, Ot.transition = n, _ = t, !(_ & 6) && Wn();
  }
}
function Sf() {
  ft = Ur.current, se(Ur);
}
function ir(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, rE(n)), ke !== null)
    for (n = ke.return; n !== null; ) {
      var r = n;
      switch (sf(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Vs();
          break;
        case 3:
          no(), se(ot), se(We), mf();
          break;
        case 5:
          pf(r);
          break;
        case 4:
          no();
          break;
        case 13:
          se(le);
          break;
        case 19:
          se(le);
          break;
        case 10:
          cf(r.type._context);
          break;
        case 22:
        case 23:
          Sf();
      }
      n = n.return;
    }
  if (be = e, ke = e = Fn(e.current, null), Fe = ft = t, Be = 0, yi = null, Tf = Xa = cr = 0, nt = Jo = null, rr !== null) {
    for (t = 0; t < rr.length; t++)
      if (n = rr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = o, r.next = s;
        }
        n.pending = r;
      }
    rr = null;
  }
  return e;
}
function $g(e, t) {
  do {
    var n = ke;
    try {
      if (uf(), Ms.current = ia, oa) {
        for (var r = ue.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        oa = !1;
      }
      if (ur = 0, xe = De = ue = null, Xo = !1, mi = 0, Cf.current = null, n === null || n.return === null) {
        Be = 1, yi = t, ke = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = Fe, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, f = a, c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var m = f.alternate;
            m ? (f.updateQueue = m.updateQueue, f.memoizedState = m.memoizedState, f.lanes = m.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var E = zA(s);
          if (E !== null) {
            E.flags &= -257, LA(E, s, a, i, t), E.mode & 1 && bA(i, u, t), t = E, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else
              w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              bA(i, u, t), Df();
              break e;
            }
            l = Error(B(426));
          }
        } else if (ae && a.mode & 1) {
          var L = zA(s);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), LA(L, s, a, i, t), af(ro(l, a));
            break e;
          }
        }
        i = l = ro(l, a), Be !== 4 && (Be = 2), Jo === null ? Jo = [i] : Jo.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Ig(i, l, t);
              DA(i, p);
              break e;
            case 1:
              a = l;
              var A = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof A.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Hn === null || !Hn.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = Rg(i, a, t);
                DA(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      nh(n);
    } catch (h) {
      t = h, ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function eh() {
  var e = sa.current;
  return sa.current = ia, e === null ? ia : e;
}
function Df() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4), be === null || !(cr & 268435455) && !(Xa & 268435455) || Bn(be, Fe);
}
function ua(e, t) {
  var n = _;
  _ |= 2;
  var r = eh();
  (be !== e || Fe !== t) && (an = null, ir(e, t));
  do
    try {
      BE();
      break;
    } catch (o) {
      $g(e, o);
    }
  while (1);
  if (uf(), _ = n, sa.current = r, ke !== null)
    throw Error(B(261));
  return be = null, Fe = 0, Be;
}
function BE() {
  for (; ke !== null; )
    th(ke);
}
function OE() {
  for (; ke !== null && !e1(); )
    th(ke);
}
function th(e) {
  var t = oh(e.alternate, e, ft);
  e.memoizedProps = e.pendingProps, t === null ? nh(e) : ke = t, Cf.current = null;
}
function nh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = CE(n, t), n !== null) {
        n.flags &= 32767, ke = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Be = 6, ke = null;
        return;
      }
    } else if (n = EE(n, t, ft), n !== null) {
      ke = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}
function tr(e, t, n) {
  var r = ne, o = Ot.transition;
  try {
    Ot.transition = null, ne = 1, NE(e, t, n, r);
  } finally {
    Ot.transition = o, ne = r;
  }
  return null;
}
function NE(e, t, n, r) {
  do
    Vr();
  while (Mn !== null);
  if (_ & 6)
    throw Error(B(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(B(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (c1(e, i), e === be && (ke = be = null, Fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ss || (ss = !0, ih(Ys, function() {
    return Vr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ot.transition, Ot.transition = null;
    var s = ne;
    ne = 1;
    var a = _;
    _ |= 4, Cf.current = null, kE(e, n), Vg(n, e), V1(Fu), Zs = !!Uu, Fu = Uu = null, e.current = n, PE(n), t1(), _ = a, ne = s, Ot.transition = i;
  } else
    e.current = n;
  if (ss && (ss = !1, Mn = e, la = o), i = e.pendingLanes, i === 0 && (Hn = null), o1(n.stateNode), st(e, ve()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (aa)
    throw aa = !1, e = ac, ac = null, e;
  return la & 1 && e.tag !== 0 && Vr(), i = e.pendingLanes, i & 1 ? e === lc ? Vo++ : (Vo = 0, lc = e) : Vo = 0, Wn(), null;
}
function Vr() {
  if (Mn !== null) {
    var e = Im(la), t = Ot.transition, n = ne;
    try {
      if (Ot.transition = null, ne = 16 > e ? 16 : e, Mn === null)
        var r = !1;
      else {
        if (e = Mn, Mn = null, la = 0, _ & 6)
          throw Error(B(331));
        var o = _;
        for (_ |= 4, Q = e.current; Q !== null; ) {
          var i = Q, s = i.child;
          if (Q.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (Q = u; Q !== null; ) {
                  var f = Q;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wo(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null)
                    c.return = f, Q = c;
                  else
                    for (; Q !== null; ) {
                      f = Q;
                      var m = f.sibling, E = f.return;
                      if (Xg(f), f === u) {
                        Q = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = E, Q = m;
                        break;
                      }
                      Q = E;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var L = v.sibling;
                    v.sibling = null, v = L;
                  } while (v !== null);
                }
              }
              Q = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null)
            s.return = i, Q = s;
          else
            e:
              for (; Q !== null; ) {
                if (i = Q, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wo(9, i, i.return);
                  }
                var p = i.sibling;
                if (p !== null) {
                  p.return = i.return, Q = p;
                  break e;
                }
                Q = i.return;
              }
        }
        var A = e.current;
        for (Q = A; Q !== null; ) {
          s = Q;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null)
            g.return = s, Q = g;
          else
            e:
              for (s = A; Q !== null; ) {
                if (a = Q, a.flags & 2048)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Za(9, a);
                    }
                  } catch (h) {
                    ye(a, a.return, h);
                  }
                if (a === s) {
                  Q = null;
                  break e;
                }
                var C = a.sibling;
                if (C !== null) {
                  C.return = a.return, Q = C;
                  break e;
                }
                Q = a.return;
              }
        }
        if (_ = o, Wn(), tn && typeof tn.onPostCommitFiberRoot == "function")
          try {
            tn.onPostCommitFiberRoot(Qa, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      ne = n, Ot.transition = t;
    }
  }
  return !1;
}
function WA(e, t, n) {
  t = ro(n, t), t = Ig(e, t, 1), e = Qn(e, t, 1), t = $e(), e !== null && (Ni(e, 1, t), st(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3)
    WA(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        WA(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Hn === null || !Hn.has(r))) {
          e = ro(n, e), e = Rg(t, e, 1), t = Qn(t, e, 1), e = $e(), t !== null && (Ni(t, 1, e), st(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ME(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, be === e && (Fe & n) === n && (Be === 4 || Be === 3 && (Fe & 130023424) === Fe && 500 > ve() - kf ? ir(e, 0) : Tf |= n), st(e, t);
}
function rh(e, t) {
  t === 0 && (e.mode & 1 ? (t = Vi, Vi <<= 1, !(Vi & 130023424) && (Vi = 4194304)) : t = 1);
  var n = $e();
  e = hn(e, t), e !== null && (Ni(e, t, n), st(e, n));
}
function xE(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), rh(e, n);
}
function bE(e, t) {
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
      throw Error(B(314));
  }
  r !== null && r.delete(t), rh(e, n);
}
var oh;
oh = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ot.current)
      rt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return rt = !1, wE(e, t, n);
      rt = !!(e.flags & 131072);
    }
  else
    rt = !1, ae && t.flags & 1048576 && lg(t, $s, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      bs(e, t), e = t.pendingProps;
      var o = $r(t, We.current);
      Jr(t, n), o = hf(null, t, r, e, o, n);
      var i = yf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, it(r) ? (i = !0, qs(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, df(t), o.updater = Ka, t.stateNode = o, o._reactInternals = t, Vu(t, r, e, n), t = $u(null, t, r, !0, i, n)) : (t.tag = 0, ae && i && of(t), _e(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (bs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = LE(r), e = It(r, e), o) {
          case 0:
            t = _u(null, t, r, e, n);
            break e;
          case 1:
            t = QA(null, t, r, e, n);
            break e;
          case 11:
            t = IA(null, t, r, e, n);
            break e;
          case 14:
            t = RA(null, t, r, It(r.type, e), n);
            break e;
        }
        throw Error(B(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : It(r, o), _u(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : It(r, o), QA(e, t, r, o, n);
    case 3:
      e: {
        if (Fg(t), e === null)
          throw Error(B(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, pg(e, t), na(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ro(Error(B(423)), t), t = HA(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = ro(Error(B(424)), t), t = HA(e, t, r, n, o);
            break e;
          } else
            for (pt = Rn(t.stateNode.containerInfo.firstChild), gt = t, ae = !0, Qt = null, n = dg(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (eo(), r === o) {
            t = yn(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return mg(t), e === null && Xu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, ju(r, o) ? s = null : i !== null && ju(r, i) && (t.flags |= 32), Ug(e, t), _e(e, t, s, n), t.child;
    case 6:
      return e === null && Xu(t), null;
    case 13:
      return jg(e, t, n);
    case 4:
      return Af(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = to(t, null, r, n) : _e(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : It(r, o), IA(e, t, r, o, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, oe(ea, r._currentValue), r._currentValue = s, i !== null)
          if (jt(i.value, s)) {
            if (i.children === o.children && !ot.current) {
              t = yn(e, t, n);
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
                      l = An(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? l.next = l : (l.next = f.next, f.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Wu(
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
                  throw Error(B(341));
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Wu(s, n, t), s = i.sibling;
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
        _e(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Jr(t, n), o = Nt(o), r = r(o), t.flags |= 1, _e(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = It(r, t.pendingProps), o = It(r.type, o), RA(e, t, r, o, n);
    case 15:
      return Qg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : It(r, o), bs(e, t), t.tag = 1, it(r) ? (e = !0, qs(t)) : e = !1, Jr(t, n), Lg(t, r, o), Vu(t, r, o, n), $u(null, t, r, !0, e, n);
    case 19:
      return Gg(e, t, n);
    case 22:
      return Hg(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function ih(e, t) {
  return xm(e, t);
}
function zE(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Bt(e, t, n, r) {
  return new zE(e, t, n, r);
}
function Bf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function LE(e) {
  if (typeof e == "function")
    return Bf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zc)
      return 11;
    if (e === Xc)
      return 14;
  }
  return 2;
}
function Fn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Bt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Is(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function")
    Bf(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case Nr:
          return sr(n.children, o, i, t);
        case Kc:
          s = 8, o |= 8;
          break;
        case wu:
          return e = Bt(12, n, t, o | 2), e.elementType = wu, e.lanes = i, e;
        case Eu:
          return e = Bt(13, n, t, o), e.elementType = Eu, e.lanes = i, e;
        case Cu:
          return e = Bt(19, n, t, o), e.elementType = Cu, e.lanes = i, e;
        case mm:
          return Wa(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Am:
                s = 10;
                break e;
              case pm:
                s = 9;
                break e;
              case Zc:
                s = 11;
                break e;
              case Xc:
                s = 14;
                break e;
              case Pn:
                s = 16, r = null;
                break e;
            }
          throw Error(B(130, e == null ? e : typeof e, ""));
      }
  return t = Bt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function sr(e, t, n, r) {
  return e = Bt(7, e, r, t), e.lanes = n, e;
}
function Wa(e, t, n, r) {
  return e = Bt(22, e, r, t), e.elementType = mm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function nu(e, t, n) {
  return e = Bt(6, e, null, t), e.lanes = n, e;
}
function ru(e, t, n) {
  return t = Bt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function IE(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Rl(0), this.expirationTimes = Rl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Rl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Of(e, t, n, r, o, i, s, a, l) {
  return e = new IE(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Bt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, df(i), e;
}
function RE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Or, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sh(e) {
  if (!e)
    return Yn;
  e = e._reactInternals;
  e: {
    if (mr(e) !== e || e.tag !== 1)
      throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (it(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (it(n))
      return sg(e, n, t);
  }
  return t;
}
function ah(e, t, n, r, o, i, s, a, l) {
  return e = Of(n, r, !0, e, o, i, s, a, l), e.context = sh(null), n = e.current, r = $e(), o = Un(n), i = An(r, o), i.callback = t ?? null, Qn(n, i, o), e.current.lanes = o, Ni(e, o, r), st(e, r), e;
}
function Ja(e, t, n, r) {
  var o = t.current, i = $e(), s = Un(o);
  return n = sh(n), t.context === null ? t.context = n : t.pendingContext = n, t = An(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qn(o, t, s), e !== null && (Ft(e, o, s, i), Ns(e, o, s)), s;
}
function ca(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function JA(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Nf(e, t) {
  JA(e, t), (e = e.alternate) && JA(e, t);
}
function QE() {
  return null;
}
var lh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Mf(e) {
  this._internalRoot = e;
}
Va.prototype.render = Mf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(B(409));
  Ja(e, t, null, null);
};
Va.prototype.unmount = Mf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fr(function() {
      Ja(null, e, null, null);
    }), t[gn] = null;
  }
};
function Va(e) {
  this._internalRoot = e;
}
Va.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dn.length && t !== 0 && t < Dn[n].priority; n++)
      ;
    Dn.splice(n, 0, e), n === 0 && Fm(e);
  }
};
function xf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function qa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function VA() {
}
function HE(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = ca(s);
        i.call(u);
      };
    }
    var s = ah(t, r, e, 0, null, !1, !1, "", VA);
    return e._reactRootContainer = s, e[gn] = s.current, ci(e.nodeType === 8 ? e.parentNode : e), fr(), s;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = ca(l);
      a.call(u);
    };
  }
  var l = Of(e, 0, !1, null, null, !1, !1, "", VA);
  return e._reactRootContainer = l, e[gn] = l.current, ci(e.nodeType === 8 ? e.parentNode : e), fr(function() {
    Ja(t, l, n, r);
  }), l;
}
function _a(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = ca(s);
        a.call(l);
      };
    }
    Ja(t, s, e, o);
  } else
    s = HE(n, t, e, o, r);
  return ca(s);
}
Rm = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Io(t.pendingLanes);
        n !== 0 && (Vc(t, n | 1), st(t, ve()), !(_ & 6) && (oo = ve() + 500, Wn()));
      }
      break;
    case 13:
      fr(function() {
        var r = hn(e, 1);
        if (r !== null) {
          var o = $e();
          Ft(r, e, 1, o);
        }
      }), Nf(e, 1);
  }
};
qc = function(e) {
  if (e.tag === 13) {
    var t = hn(e, 134217728);
    if (t !== null) {
      var n = $e();
      Ft(t, e, 134217728, n);
    }
    Nf(e, 134217728);
  }
};
Qm = function(e) {
  if (e.tag === 13) {
    var t = Un(e), n = hn(e, t);
    if (n !== null) {
      var r = $e();
      Ft(n, e, t, r);
    }
    Nf(e, t);
  }
};
Hm = function() {
  return ne;
};
Um = function(e, t) {
  var n = ne;
  try {
    return ne = e, t();
  } finally {
    ne = n;
  }
};
xu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Pu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ja(r);
            if (!o)
              throw Error(B(90));
            hm(r), Pu(r, o);
          }
        }
      }
      break;
    case "textarea":
      vm(e, n);
      break;
    case "select":
      t = n.value, t != null && Kr(e, !!n.multiple, t, !1);
  }
};
Sm = Pf;
Dm = fr;
var UE = { usingClientEntryPoint: !1, Events: [xi, zr, ja, km, Pm, Pf] }, Oo = { findFiberByHostInstance: nr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, FE = { bundleType: Oo.bundleType, version: Oo.version, rendererPackageName: Oo.rendererPackageName, rendererConfig: Oo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: vn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Nm(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Oo.findFiberByHostInstance || QE, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!as.isDisabled && as.supportsFiber)
    try {
      Qa = as.inject(FE), tn = as;
    } catch {
    }
}
vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = UE;
vt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xf(t))
    throw Error(B(200));
  return RE(e, t, null, n);
};
vt.createRoot = function(e, t) {
  if (!xf(e))
    throw Error(B(299));
  var n = !1, r = "", o = lh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Of(e, 1, !1, null, null, n, !1, r, o), e[gn] = t.current, ci(e.nodeType === 8 ? e.parentNode : e), new Mf(t);
};
vt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(B(188)) : (e = Object.keys(e).join(","), Error(B(268, e)));
  return e = Nm(t), e = e === null ? null : e.stateNode, e;
};
vt.flushSync = function(e) {
  return fr(e);
};
vt.hydrate = function(e, t, n) {
  if (!qa(t))
    throw Error(B(200));
  return _a(null, e, t, !0, n);
};
vt.hydrateRoot = function(e, t, n) {
  if (!xf(e))
    throw Error(B(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = lh;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ah(t, null, e, 1, n ?? null, o, !1, i, s), e[gn] = t.current, ci(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Va(t);
};
vt.render = function(e, t, n) {
  if (!qa(t))
    throw Error(B(200));
  return _a(null, e, t, !1, n);
};
vt.unmountComponentAtNode = function(e) {
  if (!qa(e))
    throw Error(B(40));
  return e._reactRootContainer ? (fr(function() {
    _a(null, null, e, !1, function() {
      e._reactRootContainer = null, e[gn] = null;
    });
  }), !0) : !1;
};
vt.unstable_batchedUpdates = Pf;
vt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!qa(n))
    throw Error(B(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(B(38));
  return _a(e, t, n, !1, r);
};
vt.version = "18.3.1-next-f1338f8080-20240426";
function uh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uh);
    } catch (e) {
      console.error(e);
    }
}
uh(), um.exports = vt;
var jE = um.exports, ch, qA = jE;
ch = qA.createRoot, qA.hydrateRoot;
const _A = "[CHMarketingBuilder]", GE = {
  info: "color:#1565c0;font-weight:bold",
  resolved: "color:#2e7d32;font-weight:bold",
  missing: "color:#e65100;font-weight:bold",
  fallback: "color:#f57c00;font-weight:bold",
  error: "color:#c62828;font-weight:bold"
}, YE = {
  info: "INFO",
  resolved: "OK",
  missing: "MISSING",
  fallback: "FALLBACK",
  error: "ERROR"
};
function KE(e) {
  return e instanceof Error ? e.message : e == null ? "" : String(e);
}
function ZE(e, t, n, r) {
  const o = YE[e], i = GE[e];
  console.log(r ? `%c${_A} %c${o}%c ${t}: ${n}
  → ${r}` : `%c${_A} %c${o}%c ${t}: ${n}`, "font-weight:bold", i, "color:inherit");
}
function $a(e, t, n, r) {
  const o = KE(n);
  ZE(e, t, o, r);
}
function fe(e, t) {
  $a("info", e, t);
}
function F(e, t) {
  $a("resolved", e, t);
}
function ze(e, t, n) {
  $a("missing", e, t, n);
}
function XE(e, t, n) {
  $a("fallback", e, t, n);
}
function dr(e) {
  if (typeof e != "string" || !e.trim())
    return;
  const t = e.match(/\/entities\/(\d+)(?:\?|$|\/)/);
  if (!t)
    return;
  const n = Number(t[1]);
  return Number.isFinite(n) ? n : void 0;
}
function Ar(e) {
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
    const o = dr(r.href) ?? dr(r.entity);
    o != null && t.push(o);
  }
  return t;
}
function bf(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = t.id ?? t.entityId;
  if (typeof n == "number" && Number.isFinite(n))
    return [n];
  const r = t.parent;
  if (r != null && typeof r == "object") {
    const s = r, a = dr(s.href) ?? dr(s.entity);
    if (a != null)
      return [a];
  }
  const o = Ar(t.parents);
  if (o.length > 0)
    return o;
  const i = Ar(t.children);
  return i.length > 0 ? i : [];
}
function Je(e, t) {
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
function fh(e, ...t) {
  if (!e)
    return [];
  for (const n of t) {
    const r = e[n];
    if (r != null) {
      if (Array.isArray(r)) {
        const o = Ar(r);
        if (o.length > 0)
          return o;
        continue;
      }
      if (typeof r == "object") {
        const o = bf(r);
        if (o.length > 0)
          return o;
      }
    }
  }
  return [];
}
function lt(e, t) {
  return e ? Object.keys(e).filter((n) => t.test(n)) : [];
}
async function Gt(e, t, n, r) {
  var s;
  const o = fh(r, n);
  if (o.length > 0)
    return o;
  if (!((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    return [];
  const i = Je(r, n);
  if (!i)
    return [];
  try {
    const a = await e.raw.getAsync(i);
    return !a.isSuccessStatusCode || a.content == null ? [] : bf(a.content);
  } catch {
    return [];
  }
}
async function vi(e, t, n, r) {
  const o = [...new Set(r)];
  for (const i of o) {
    const s = await Gt(e, t, i, n);
    if (s.length > 0)
      return { ids: s, relationName: i };
  }
  return { ids: [] };
}
function xn(e, t) {
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
const wi = [
  "templateToZone",
  "templateToTemplateZone",
  "TemplateToZone",
  "TemplateToTemplateZone",
  "EPAM.TemplateToZone",
  "EPAM.TemplateToTemplateZone",
  "templateToEPAM.TemplateZone",
  "EPAM.TemplateZone",
  "TemplateZone"
], fa = [
  "templateZoneToTemplate",
  "zoneToTemplate",
  "TemplateZoneToTemplate",
  "EPAM.TemplateZoneToTemplate",
  "EPAM.TemplateToTemplateZone",
  "templateToTemplate"
], dh = [
  "templateZoneToAllowedAsset",
  "TemplateZoneToAllowedAsset",
  "EPAM.TemplateZoneToAllowedAsset",
  "templateZoneToAsset",
  "TemplateZoneToAsset",
  "EPAM.TemplateZoneToAsset"
], Ah = [
  "templateToAllowedAsset",
  "TemplateToAllowedAsset",
  "EPAM.TemplateToAllowedAsset",
  "templateToAsset",
  "TemplateToAsset",
  "EPAM.TemplateToAsset"
], WE = [
  "zoneType",
  "ZoneType",
  "EPAM.ZoneType",
  "templateZoneType",
  "TemplateZoneType",
  "EPAM.TemplateZoneType"
], ph = [
  "zoneValueToSelectedAsset",
  "ZoneValueToSelectedAsset",
  "EPAM.MarketingAssetZoneValueToSelectedAsset",
  "marketingAssetZoneValueToSelectedAsset",
  "zoneValueToAsset",
  "ZoneValueToAsset"
];
function JE() {
  return "An entity ID is needed. Save this record in Content Hub first, then reload the page.";
}
const $A = /* @__PURE__ */ new Map(), VE = ["EPAM.Template", "Template"], qE = ["EPAM.TemplateZone", "TemplateZone"];
function _E(e) {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
}
function mh(e) {
  if (e == null || typeof e != "object")
    return null;
  const t = e;
  if (Array.isArray(t.member_groups))
    return t;
  const n = t.content;
  return n != null && typeof n == "object" && !Array.isArray(n) ? n : Array.isArray(t.items) && t.items[0] != null && typeof t.items[0] == "object" ? t.items[0] : t;
}
function $E(e) {
  const t = mh(e);
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
async function da(e, t) {
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
      const s = $E(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
function eC(e) {
  const t = mh(e);
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
          target: u ? _E(u) : void 0
        });
      }
  }
  return n;
}
function tC(e) {
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
async function nC(e, t) {
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
      const s = eC(i.content);
      if (s.length > 0)
        return s;
    } catch {
    }
  return [];
}
async function rC(e, t) {
  const n = $A.get(t);
  if (n)
    return n;
  const r = await nC(e, t);
  return $A.set(t, r), r;
}
async function Aa(e, t) {
  for (const n of t) {
    const r = await rC(e, n);
    if (r.length > 0)
      return r;
  }
  return [];
}
async function oC(e) {
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
      const a = tC(s.content);
      if (a.length === 0)
        continue;
      const l = await e.raw.getAsync(`/api/entities/${a[0]}`);
      if (!l.isSuccessStatusCode || !((o = l.content) != null && o.relations))
        continue;
      return lt(l.content.relations, /template/i).filter(
        (u) => !/collection|asset/i.test(u)
      );
    } catch {
    }
  return [];
}
function fc(e, t) {
  return !!(e && t.test(e));
}
function iC(e) {
  return fc(e, /(^|\.)Template$/i) && !fc(e, /TemplateZone/i);
}
async function el(e, t) {
  const [n, r, o] = await Promise.all([
    Aa(e, VE),
    Aa(e, qE),
    oC(e)
  ]), i = n.filter((f) => fc(f.target, /TemplateZone/i)).map((f) => f.name), s = r.filter((f) => iC(f.target)).map((f) => f.name), a = lt(t, /zone/i).filter(
    (f) => !!Je(t, f)
  ), l = [
    .../* @__PURE__ */ new Set([
      ...a,
      ...i,
      ...lt(t, /zone/i)
    ])
  ], u = [
    .../* @__PURE__ */ new Set([
      ...o,
      ...s,
      ...fa
    ])
  ];
  return l.length === 0 && u.length === fa.length ? console.info(
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
function sC(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO template ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function aC(e, t) {
  const n = Object.keys(t.relations ?? {});
  n.length !== 0 && console.info(
    `%c[CHMarketingBuilder] INFO zone ${e} relations:`,
    "color: #1565c0; font-weight: bold",
    n.join(", ")
  );
}
function zf(e, t) {
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
function lC(e, t, n) {
  return {
    entitydefinition: {
      href: zf(e, n)
    },
    properties: t
  };
}
function pa(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e;
    if (typeof t.href == "string" && t.href.trim())
      return t.href.trim();
  }
}
function uC(e) {
  if (e == null || typeof e != "object")
    return [];
  const t = e, n = [];
  if (Array.isArray(t.children))
    for (const o of t.children) {
      const i = pa(o);
      i && n.push(i);
    }
  const r = pa(t.child);
  return r && n.push(r), n;
}
function cC(e, t) {
  if (e != null && typeof e == "object") {
    const n = pa(e.self);
    if (n)
      return n;
  }
  return t;
}
function gh(e, t) {
  if (t) {
    const n = t.match(/^(https?:\/\/[^/]+)/i);
    if (n)
      return `${n[1]}/api/entities/${e}`;
  }
  return `/api/entities/${e}`;
}
async function tl(e, t, n, r) {
  var a;
  const o = Je(r, n), i = `/api/entities/${t}/relations/${n}`, s = o ? [.../* @__PURE__ */ new Set([o, i])] : [i];
  if (!((a = e.raw) != null && a.getAsync) || !o)
    return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
  for (const l of [o])
    try {
      const u = await e.raw.getAsync(l);
      if (!u.isSuccessStatusCode || u.content == null)
        continue;
      const f = uC(u.content), c = cC(u.content, l) ?? l;
      return { requestUrls: s, selfHref: c, childHrefs: f };
    } catch {
    }
  return { requestUrls: s, selfHref: o ?? i, childHrefs: [] };
}
function hh(e, t) {
  return {
    children: t.map((n) => ({ href: n })),
    self: { href: e }
  };
}
async function Ei(e, t, n) {
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
async function Yt(e, t, n, r, o) {
  var u;
  const i = await tl(e, t, r, o), s = gh(n, i.selfHref), a = [...i.childHrefs];
  a.some((f) => dr(f) === Number(n)) || a.push(s);
  const l = hh(i.selfHref, a);
  if (await Ei(e, [...i.requestUrls, i.selfHref], l))
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
async function po(e, t, n, r, o) {
  const i = await tl(e, t, r, o), s = i.childHrefs.filter(
    (l) => dr(l) !== Number(n)
  );
  if (s.length === i.childHrefs.length)
    return !0;
  const a = hh(i.selfHref, s);
  return Ei(e, [...i.requestUrls, i.selfHref], a);
}
async function io(e, t, n, r, o) {
  var l;
  const i = await tl(e, t, r, o), s = gh(n, i.selfHref), a = {
    parent: { href: s },
    self: { href: i.selfHref }
  };
  if (await Ei(e, [...i.requestUrls, i.selfHref], a))
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
async function yh(e, t, n, r, o) {
  var l;
  const i = await tl(e, t, r, o), s = Je(o, r) ?? i.selfHref;
  if ((l = e.raw) != null && l.getAsync && Je(o, r))
    try {
      const u = await e.raw.getAsync(s);
      if (u.isSuccessStatusCode && u.content != null) {
        const f = pa(
          u.content.parent
        );
        if (!f || dr(f) !== Number(n))
          return !0;
      }
    } catch {
    }
  const a = {
    parent: null,
    self: { href: i.selfHref }
  };
  return await Ei(e, [...i.requestUrls, i.selfHref], a) ? !0 : Ei(e, [...i.requestUrls, i.selfHref], {
    self: { href: i.selfHref }
  });
}
function qo(e, t, n) {
  const r = lt(t, n), o = r.filter((i) => !!Je(t, i));
  return [.../* @__PURE__ */ new Set([...o, ...e, ...r])];
}
function fC(e, t) {
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
function Lf(e, t, n) {
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
  return fC(t, n) ?? "Text";
}
const dC = ["EPAM.TemplateZone", "TemplateZone"], Ht = /* @__PURE__ */ new Map();
let ep = !1, tp = !1, Ci = [];
function np(e, ...t) {
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
function nl(e) {
  const t = e.properties ?? {}, n = e, r = Object.keys(t), o = np(
    t,
    "identifier",
    "Identifier",
    "zoneTypeName",
    "ZoneTypeName",
    "Title",
    "Name",
    "Label",
    "label"
  ) || xn(n, "zoneType") || xn(n, "ZoneType");
  if (o)
    return o;
  for (const i of r) {
    const s = np(t, i);
    if (s)
      return s;
  }
  return "";
}
function rl(e, t) {
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
    Ht.has(s) || (Ht.set(s, String(t)), fe(
      "template zone type",
      `Mapped taxonomy ${t} → "${s}" (from "${e}")`
    ));
    return;
  }
  Ht.has(r) || (Ht.set(r, String(t)), fe("template zone type", `Mapped taxonomy ${t} → "${r}" (from "${e}")`));
}
function ol(e) {
  const t = Ci.map((n) => n.name);
  return [
    .../* @__PURE__ */ new Set([
      ...t,
      ...WE,
      ...lt(e, /zone.?type/i)
    ])
  ];
}
function AC(e) {
  return ol(e.relations).some(
    (t) => {
      var n;
      return !!((n = e.relations) != null && n[t]);
    }
  );
}
function vh(e) {
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
function pC(e) {
  try {
    const n = zf(e).match(/\/entitydefinitions\/([^/?#]+)/i);
    return n != null && n[1] ? decodeURIComponent(n[1]) : "";
  } catch {
    return "";
  }
}
async function mC(e, t, n) {
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
      const l = vh(a.content);
      for (const u of l) {
        const f = await t(String(u)), c = nl(f);
        c && rl(c, u);
      }
      if (l.length > 0)
        return F(
          "template zone type",
          `Loaded ${l.length} taxonomy item(s) from ${n}; mapped ${Ht.size} zone type(s)`
        ), l.length;
    } catch {
    }
  return 0;
}
async function wh(e, t, n) {
  const r = ol(n.relations);
  for (const o of r) {
    const i = await Gt(e, "", o, n.relations);
    if (i[0] == null)
      continue;
    const s = await t(String(i[0])), a = nl(s);
    return a && rl(a, i[0]), pC(s) || void 0;
  }
}
async function If(e) {
  if (Ci.length > 0 || !e)
    return;
  Ci = (await Aa(e, dC)).filter((n) => /zone.?type/i.test(n.name));
}
async function Eh(e, t) {
  var o, i;
  if (tp || !((o = e == null ? void 0 : e.raw) != null && o.getAsync) || ep)
    return;
  ep = !0, await If(e);
  let n = ((i = Ci.find((s) => {
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
        const u = vh(l.content);
        for (const f of u) {
          const c = await t(String(f)), m = await wh(e, t, c);
          m && !n && (n = m);
        }
        if (u.length > 0)
          break;
      } catch {
      }
    if (Ht.size > 0)
      break;
  }
  n && await mC(e, t, n), tp = !0, fe(
    "template zone type",
    `Taxonomy catalog ready: ${[...Ht.entries()].map(([s, a]) => `${s}=${a}`).join(", ") || "(empty)"}`
  );
}
async function gC(e, t, n) {
  await If(e);
  for (const r of n)
    await wh(e, t, r);
  Ht.size === 0 && await Eh(e, t);
}
async function hC(e, t, n) {
  const r = Ht.get(n);
  return r || (await Eh(e, t), Ht.get(n));
}
function yC(e) {
  var r;
  const t = Ci.find((o) => o.name === e);
  return ((r = t == null ? void 0 : t.role) == null ? void 0 : r.toLowerCase()) !== "parent";
}
async function rp(e, t, n, r) {
  var l;
  if (!((l = e == null ? void 0 : e.raw) != null && l.getAsync))
    return;
  const o = `/api/entities/${n}/relations/${r}`, i = await Gt(e, n, r, {
    [r]: { href: o }
  });
  if (i[0] == null)
    return;
  const s = await t(String(i[0])), a = nl(s);
  if (a)
    return rl(a, i[0]), Lf(a, "", "");
}
async function vC(e, t, n, r, o, i, s) {
  var u;
  if (!e)
    return !1;
  const a = e, l = yC(
    i
  ) ? [
    {
      label: "parent",
      run: () => io(a, n, r, i, s.relations)
    },
    {
      label: "child",
      run: () => Yt(a, n, r, i, s.relations)
    }
  ] : [
    {
      label: "child",
      run: () => Yt(a, n, r, i, s.relations)
    },
    {
      label: "parent",
      run: () => io(a, n, r, i, s.relations)
    }
  ];
  for (const f of l) {
    if (!await f.run())
      continue;
    const m = await rp(
      e,
      t,
      n,
      i
    );
    if (m === o)
      return F(
        "template zone type",
        `Linked zone ${n} to taxonomy ${r} (${o}) via ${f.label} ${i}`
      ), !0;
    fe(
      "template zone type",
      `${f.label} write for zone ${n} → taxonomy ${r} returned OK but read-back is "${m ?? "(none)"}" (expected "${o}")`
    );
  }
  if ((u = e == null ? void 0 : e.raw) != null && u.postAsync) {
    const f = { parent: { href: `/api/entities/${r}` } };
    if ((await e.raw.postAsync(
      `/api/entities/${n}/relations/${i}`,
      f
    )).isSuccessStatusCode && await rp(
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
async function wC(e, t, n, r) {
  const o = ol(r.relations);
  for (const i of o) {
    const s = Je(r.relations, i);
    if (!s)
      continue;
    const a = await Gt(e, n.id, i, {
      [i]: { href: s }
    });
    if (a[0] == null)
      continue;
    const l = await t(String(a[0])), u = nl(l);
    if (u)
      return rl(u, a[0]), Lf(u, n.zoneKey, n.zoneLabel);
  }
}
async function Ch(e, t, n, r) {
  const o = await wC(e, t, n, r);
  return o ? { ...n, zoneType: o } : n;
}
async function EC(e, t, n, r, o) {
  await If(e);
  const i = await hC(e, t, r);
  if (!i) {
    const a = Object.keys(o.relations ?? {}).join(", ") || "(none)", l = [...Ht.keys()].join(", ") || "(none)";
    return fe(
      "template zone type",
      `No taxonomy item found for zone type "${r}" on zone ${n}. Known types: ${l}. Zone relations: ${a}.`
    ), !1;
  }
  const s = ol(o.relations);
  for (const a of s)
    if (await vC(
      e,
      t,
      n,
      i,
      r,
      a,
      o
    ))
      return !0;
  return fe(
    "template zone type",
    `Could not link zone ${n} to taxonomy ${i} (${r}). Tried relations: ${s.join(", ") || "(none)"}`
  ), !1;
}
const ou = ["EPAM.TemplateZone", "TemplateZone"];
let ls = null;
function CC(e) {
  return /zone.?type/i.test(e);
}
function TC(e) {
  return /zone.?type/i.test(e);
}
function kC(e) {
  return e.filter((t) => CC(t.name)).map((t) => t.name);
}
async function PC(e) {
  if (ls)
    return ls;
  const [t, n] = await Promise.all([
    da(e, ou[0]).then(async (s) => s.length > 0 ? s : da(e, ou[1])),
    Aa(e, ou)
  ]), r = kC(t), o = n.filter((s) => TC(s.name)).map((s) => s.name);
  let i = "unknown";
  return r.length > 0 && o.length === 0 ? i = "property" : o.length > 0 && r.length === 0 ? i = "relation" : r.length > 0 && o.length > 0 && (i = "both"), ls = {
    mode: i,
    propertyNames: r.length > 0 ? r : ["zoneType", "ZoneType", "EPAM.zoneType", "zoneTypeMA"],
    relationNames: o
  }, ls;
}
function SC(e) {
  return e.mode === "property" || e.mode === "both" || e.mode === "unknown";
}
function DC(e) {
  return e.mode === "relation" || e.mode === "both";
}
const BC = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], Rf = [
  "AssetCollectionToAsset",
  "M.AssetCollectionToAsset",
  "collectionToAsset",
  "assetCollectionToAsset",
  "CollectionToAsset"
];
function Rs(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function OC(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  return "Invariant" in t ? t.Invariant : Object.values(t).find((r) => typeof r == "string") ?? e;
}
function Th(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = OC(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function kh(e) {
  var n;
  if (e == null || typeof e != "object")
    return;
  const t = e;
  for (const r of BC) {
    const o = t[r];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const i = Rs(((n = o[0]) == null ? void 0 : n.href) ?? o[0]);
    if (i)
      return i;
  }
}
function NC(e) {
  var r;
  const t = (r = e.systemProperties) == null ? void 0 : r.id, n = e.id ?? e.entityId ?? t;
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  if (typeof n == "string" && n.trim())
    return n.trim();
}
function MC(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e, n = NC(t);
  if (n == null)
    return null;
  const r = t.properties ?? t.fields, o = kh(t.renditions) ?? Rs(t.thumbnailUrl) ?? Rs(t.previewUrl) ?? Rs(t.thumbnail);
  if (!o)
    return null;
  const i = Th(r, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${n}`;
  return {
    id: String(n),
    name: i,
    thumbnailUrl: o,
    previewUrl: o
  };
}
function mo(e, t) {
  const n = t.properties ?? {}, r = kh(t.renditions);
  if (!r)
    return null;
  const o = Th(n, "FileName", "fileName", "Title", "title", "Name", "name") || `Asset ${e}`;
  return {
    id: String(e),
    name: o,
    thumbnailUrl: r,
    previewUrl: r
  };
}
function op(e, t) {
  if (!(t != null && t.trim()))
    return e;
  const n = t.trim().toLowerCase();
  return e.filter(
    (r) => r.name.toLowerCase().includes(n) || r.id.toLowerCase().includes(n)
  );
}
const dc = "https://ws.overcasthq.com/wp-content/uploads/2025/05/sok_logo.png", xC = "https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58", bC = "https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png", zC = [
  {
    id: "color",
    label: "Full color",
    url: dc,
    previewBackground: "#f7f7f7"
  },
  {
    id: "dark",
    label: "Dark background",
    url: `${dc}#dark`,
    previewBackground: "#000000"
  }
], Ac = dc, iu = "Arial, Helvetica, sans-serif", us = {
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
}, Ph = [
  { colorName: "Primary", hexValue: us.primary, colorUsageType: "Primary" },
  { colorName: "Secondary", hexValue: us.secondary, colorUsageType: "Secondary" },
  { colorName: "Accent", hexValue: us.accent, colorUsageType: "Accent" },
  { colorName: "Background", hexValue: us.background, colorUsageType: "Background" }
], Sh = [
  { fontFamily: iu, fontWeight: "Bold", fontUsageType: "Heading" },
  { fontFamily: iu, fontWeight: "Regular", fontUsageType: "Body" },
  { fontFamily: iu, fontWeight: "Medium", fontUsageType: "CTA" }
];
function LC(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t || t === xC || t === bC || /cytiva/i.test(t))
    return Ac;
  const n = zC.find((r) => r.url === t || r.id === t);
  return n ? n.url : t;
}
function Qo(e) {
  var t;
  return {
    ...e,
    brandKitName: ((t = e.brandKitName) == null ? void 0 : t.trim()) || "SOK",
    logoAssetUrl: LC(e.logoAssetUrl),
    colors: Ph,
    fonts: Sh
  };
}
function IC(e) {
  return Qo({
    id: e,
    brandKitName: "SOK",
    logoAssetUrl: Ac,
    colors: Ph,
    fonts: Sh
  });
}
function il(e, t) {
  return {
    width: Math.round(e / 25.4 * 96),
    height: Math.round(t / 25.4 * 96)
  };
}
function cs(e, t) {
  return {
    width: Math.round(e * 96),
    height: Math.round(t * 96)
  };
}
const fs = il(210, 297), ds = il(297, 420), As = il(148, 210), zi = [
  { id: "a4-portrait", group: "print", label: "A4 portrait", width: fs.width, height: fs.height },
  { id: "a4-landscape", group: "print", label: "A4 landscape", width: fs.height, height: fs.width },
  { id: "a3-portrait", group: "print", label: "A3 portrait", width: ds.width, height: ds.height },
  { id: "a3-landscape", group: "print", label: "A3 landscape", width: ds.height, height: ds.width },
  { id: "a5-portrait", group: "print", label: "A5 portrait", width: As.width, height: As.height },
  { id: "a5-landscape", group: "print", label: "A5 landscape", width: As.height, height: As.width },
  { id: "letter-portrait", group: "print", label: "Letter portrait", ...cs(8.5, 11) },
  { id: "letter-landscape", group: "print", label: "Letter landscape", ...cs(11, 8.5) },
  { id: "tabloid-portrait", group: "print", label: "Tabloid portrait", ...cs(11, 17) },
  { id: "tabloid-landscape", group: "print", label: "Tabloid landscape", ...cs(17, 11) },
  {
    id: "business-card",
    group: "print",
    label: "Business card",
    ...il(85, 55)
  },
  { id: "1080-square", group: "social", label: "Square 1080", width: 1080, height: 1080 },
  { id: "1080-story", group: "social", label: "Story 1080 × 1920", width: 1080, height: 1920 },
  { id: "1080-portrait", group: "social", label: "Portrait 1080 × 1350", width: 1080, height: 1350 },
  { id: "1200-link", group: "social", label: "Link post 1200 × 628", width: 1200, height: 628 }
], RC = [
  { id: "print", label: "Print" },
  { id: "social", label: "Social" }
];
function pc(e) {
  return zi.find((t) => t.id === e);
}
function Dh(e, t, n) {
  if (n && pc(n)) {
    const o = pc(n);
    if (o.width === e && o.height === t)
      return o.id;
  }
  const r = zi.find((o) => o.width === e && o.height === t);
  return (r == null ? void 0 : r.id) ?? "custom";
}
const QC = [
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
], HC = [
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
], UC = [
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
], Bh = zi.filter(
  (e) => e.group === "print"
).map((e) => ({
  id: e.id,
  label: `${e.label} — ${e.width} × ${e.height}`,
  width: e.width,
  height: e.height,
  formatPreset: e.id
}));
function FC(e) {
  switch (e) {
    case "Email":
      return HC;
    case "Newsletter":
      return UC;
    case "Print":
      return Bh;
    default:
      return QC;
  }
}
function jC(e) {
  const t = FC(e)[0];
  return {
    canvasWidth: t.width,
    canvasHeight: t.height,
    formatPreset: t.formatPreset
  };
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function ip(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function GC(e) {
  if (Array.isArray(e))
    return e;
}
function YC(e, t) {
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
function KC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZC(e, t) {
  return GC(e) || YC(e, t) || XC(e, t) || KC();
}
function XC(e, t) {
  if (e) {
    if (typeof e == "string")
      return ip(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ip(e, t) : void 0;
  }
}
const Oh = Object.entries, sp = Object.setPrototypeOf, WC = Object.isFrozen, JC = Object.getPrototypeOf, VC = Object.getOwnPropertyDescriptor;
let He = Object.freeze, Ge = Object.seal, Br = Object.create, Nh = typeof Reflect < "u" && Reflect, mc = Nh.apply, gc = Nh.construct;
He || (He = function(t) {
  return t;
});
Ge || (Ge = function(t) {
  return t;
});
mc || (mc = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    o[i - 2] = arguments[i];
  return t.apply(n, o);
});
gc || (gc = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const No = Se(Array.prototype.forEach), qC = Se(Array.prototype.lastIndexOf), ap = Se(Array.prototype.pop), kr = Se(Array.prototype.push), _C = Se(Array.prototype.splice), On = Array.isArray, Ho = Se(String.prototype.toLowerCase), su = Se(String.prototype.toString), lp = Se(String.prototype.match), Mo = Se(String.prototype.replace), up = Se(String.prototype.indexOf), $C = Se(String.prototype.trim), eT = Se(Number.prototype.toString), tT = Se(Boolean.prototype.toString), cp = typeof BigInt > "u" ? null : Se(BigInt.prototype.toString), fp = typeof Symbol > "u" ? null : Se(Symbol.prototype.toString), Me = Se(Object.prototype.hasOwnProperty), xo = Se(Object.prototype.toString), Ie = Se(RegExp.prototype.test), qn = nT(TypeError);
function Se(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return mc(e, t, r);
  };
}
function nT(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return gc(e, n);
  };
}
function V(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ho;
  if (sp && sp(e, null), !On(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (WC(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function rT(e) {
  for (let t = 0; t < e.length; t++)
    Me(e, t) || (e[t] = null);
  return e;
}
function qe(e) {
  const t = Br(null);
  for (const r of Oh(e)) {
    var n = ZC(r, 2);
    const o = n[0], i = n[1];
    Me(e, o) && (On(i) ? t[o] = rT(i) : i && typeof i == "object" && i.constructor === Object ? t[o] = qe(i) : t[o] = i);
  }
  return t;
}
function oT(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return eT(e);
    case "boolean":
      return tT(e);
    case "bigint":
      return cp ? cp(e) : "0";
    case "symbol":
      return fp ? fp(e) : "Symbol()";
    case "undefined":
      return xo(e);
    case "function":
    case "object": {
      if (e === null)
        return xo(e);
      const t = e, n = Jt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : xo(r);
      }
      return xo(e);
    }
    default:
      return xo(e);
  }
}
function Jt(e, t) {
  for (; e !== null; ) {
    const r = VC(e, t);
    if (r) {
      if (r.get)
        return Se(r.get);
      if (typeof r.value == "function")
        return Se(r.value);
    }
    e = JC(e);
  }
  function n() {
    return null;
  }
  return n;
}
function iT(e) {
  try {
    return Ie(e, ""), !0;
  } catch {
    return !1;
  }
}
const dp = He(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), au = He(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), lu = He(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), sT = He(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), uu = He(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), aT = He(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ap = He(["#text"]), pp = He(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), cu = He(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), mp = He(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ps = He(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), lT = Ge(/{{[\w\W]*|^[\w\W]*}}/g), uT = Ge(/<%[\w\W]*|^[\w\W]*%>/g), cT = Ge(/\${[\w\W]*/g), fT = Ge(/^data-[\-\w.\u00B7-\uFFFF]+$/), dT = Ge(/^aria-[\-\w]+$/), gp = Ge(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), AT = Ge(/^(?:\w+script|data):/i), pT = Ge(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), mT = Ge(/^html$/i), gT = Ge(/^[a-z][.\w]*(-[.\w]+)+$/i), hp = Ge(/<[/\w!]/g), hT = Ge(/<[/\w]/g), yT = Ge(/<\/no(script|embed|frames)/i), vT = Ge(/\/>/i), Wt = {
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
}, wT = function() {
  return typeof window > "u" ? null : window;
}, ET = function(t, n) {
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
}, yp = function() {
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
}, kn = function(t, n, r, o) {
  return Me(t, n) && On(t[n]) ? V(o.base ? qe(o.base) : {}, t[n], o.transform) : r;
};
function Mh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wT();
  const t = (b) => Mh(b);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== Wt.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, s = e.Node, a = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, c = e.trustedTypes, m = a.prototype, E = Jt(m, "cloneNode"), w = Jt(m, "remove"), v = Jt(m, "nextSibling"), L = Jt(m, "childNodes"), p = Jt(m, "parentNode"), A = Jt(m, "shadowRoot"), g = Jt(m, "attributes"), C = s && s.prototype ? Jt(s.prototype, "nodeType") : null, h = s && s.prototype ? Jt(s.prototype, "nodeName") : null;
  if (typeof i == "function") {
    const b = n.createElement("template");
    b.content && b.content.ownerDocument && (n = b.content.ownerDocument);
  }
  let P, T = "", I, G = !1, R = 0;
  const K = function() {
    if (R > 0)
      throw qn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, j = function(d) {
    K(), R++;
    try {
      return P.createHTML(d);
    } finally {
      R--;
    }
  }, Ee = function(d) {
    K(), R++;
    try {
      return P.createScriptURL(d);
    } finally {
      R--;
    }
  }, Et = function() {
    return G || (I = ET(c, o), G = !0), I;
  }, Ct = n, ut = Ct.implementation, Y = Ct.createNodeIterator, O = Ct.createDocumentFragment, N = Ct.getElementsByTagName, z = r.importNode;
  let x = yp();
  t.isSupported = typeof Oh == "function" && typeof p == "function" && ut && ut.createHTMLDocument !== void 0;
  const J = lT, bt = uT, Oe = cT, go = fT, on = dT, hr = AT, Vf = pT, wy = gT;
  let qf = gp, de = null;
  const _f = V({}, [...dp, ...au, ...lu, ...uu, ...Ap]);
  let Ae = null;
  const $f = V({}, [...pp, ...cu, ...mp, ...ps]);
  let pe = Object.seal(Br(null, {
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
  })), ho = null, ed = null;
  const wn = Object.seal(Br(null, {
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
  let td = !0, dl = !0, nd = !1, rd = !0, En = !1, yo = !0, Jn = !1, Al = !1, pl = null, ml = null, gl = !1, yr = !1, Ri = !1, Qi = !1, od = !0, id = !1;
  const sd = "user-content-";
  let hl = !0, yl = !1, vr = {}, Kt = null;
  const vl = V({}, [
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
  let ad = null;
  const ld = V({}, ["audio", "video", "img", "source", "image", "track"]);
  let wl = null;
  const ud = V({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Hi = "http://www.w3.org/1998/Math/MathML", Ui = "http://www.w3.org/2000/svg", Zt = "http://www.w3.org/1999/xhtml";
  let wr = Zt, El = !1, Cl = null;
  const Ey = V({}, [Hi, Ui, Zt], su), cd = He(["mi", "mo", "mn", "ms", "mtext"]);
  let Tl = V({}, cd);
  const fd = He(["annotation-xml"]);
  let kl = V({}, fd);
  const Cy = V({}, ["title", "style", "font", "a", "script"]);
  let vo = null;
  const Ty = ["application/xhtml+xml", "text/html"], ky = "text/html";
  let me = null, Er = null;
  const Py = n.createElement("form"), dd = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, Pl = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Er && Er === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = qe(d), vo = // eslint-disable-next-line unicorn/prefer-includes
    Ty.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? ky : d.PARSER_MEDIA_TYPE, me = vo === "application/xhtml+xml" ? su : Ho, de = kn(d, "ALLOWED_TAGS", _f, {
      transform: me
    }), Ae = kn(d, "ALLOWED_ATTR", $f, {
      transform: me
    }), Cl = kn(d, "ALLOWED_NAMESPACES", Ey, {
      transform: su
    }), wl = kn(d, "ADD_URI_SAFE_ATTR", ud, {
      transform: me,
      base: ud
    }), ad = kn(d, "ADD_DATA_URI_TAGS", ld, {
      transform: me,
      base: ld
    }), Kt = kn(d, "FORBID_CONTENTS", vl, {
      transform: me
    }), ho = kn(d, "FORBID_TAGS", qe({}), {
      transform: me
    }), ed = kn(d, "FORBID_ATTR", qe({}), {
      transform: me
    }), vr = Me(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? qe(d.USE_PROFILES) : d.USE_PROFILES : !1, td = d.ALLOW_ARIA_ATTR !== !1, dl = d.ALLOW_DATA_ATTR !== !1, nd = d.ALLOW_UNKNOWN_PROTOCOLS || !1, rd = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, En = d.SAFE_FOR_TEMPLATES || !1, yo = d.SAFE_FOR_XML !== !1, Jn = d.WHOLE_DOCUMENT || !1, yr = d.RETURN_DOM || !1, Ri = d.RETURN_DOM_FRAGMENT || !1, Qi = d.RETURN_TRUSTED_TYPE || !1, gl = d.FORCE_BODY || !1, od = d.SANITIZE_DOM !== !1, id = d.SANITIZE_NAMED_PROPS || !1, hl = d.KEEP_CONTENT !== !1, yl = d.IN_PLACE || !1, qf = iT(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : gp, wr = typeof d.NAMESPACE == "string" ? d.NAMESPACE : Zt, Tl = Me(d, "MATHML_TEXT_INTEGRATION_POINTS") && d.MATHML_TEXT_INTEGRATION_POINTS && typeof d.MATHML_TEXT_INTEGRATION_POINTS == "object" ? qe(d.MATHML_TEXT_INTEGRATION_POINTS) : V({}, cd), kl = Me(d, "HTML_INTEGRATION_POINTS") && d.HTML_INTEGRATION_POINTS && typeof d.HTML_INTEGRATION_POINTS == "object" ? qe(d.HTML_INTEGRATION_POINTS) : V({}, fd);
    const y = Me(d, "CUSTOM_ELEMENT_HANDLING") && d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING == "object" ? qe(d.CUSTOM_ELEMENT_HANDLING) : Br(null);
    if (pe = Br(null), Me(y, "tagNameCheck") && dd(y.tagNameCheck) && (pe.tagNameCheck = y.tagNameCheck), Me(y, "attributeNameCheck") && dd(y.attributeNameCheck) && (pe.attributeNameCheck = y.attributeNameCheck), Me(y, "allowCustomizedBuiltInElements") && typeof y.allowCustomizedBuiltInElements == "boolean" && (pe.allowCustomizedBuiltInElements = y.allowCustomizedBuiltInElements), Ge(pe), En && (dl = !1), Ri && (yr = !0), vr && (de = V({}, Ap), Ae = Br(null), vr.html === !0 && (V(de, dp), V(Ae, pp)), vr.svg === !0 && (V(de, au), V(Ae, cu), V(Ae, ps)), vr.svgFilters === !0 && (V(de, lu), V(Ae, cu), V(Ae, ps)), vr.mathMl === !0 && (V(de, uu), V(Ae, mp), V(Ae, ps))), wn.tagCheck = null, wn.attributeCheck = null, Me(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? wn.tagCheck = d.ADD_TAGS : On(d.ADD_TAGS) && (de === _f && (de = qe(de)), V(de, d.ADD_TAGS, me))), Me(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? wn.attributeCheck = d.ADD_ATTR : On(d.ADD_ATTR) && (Ae === $f && (Ae = qe(Ae)), V(Ae, d.ADD_ATTR, me))), Me(d, "ADD_URI_SAFE_ATTR") && On(d.ADD_URI_SAFE_ATTR) && V(wl, d.ADD_URI_SAFE_ATTR, me), Me(d, "FORBID_CONTENTS") && On(d.FORBID_CONTENTS) && (Kt === vl && (Kt = qe(Kt)), V(Kt, d.FORBID_CONTENTS, me)), Me(d, "ADD_FORBID_CONTENTS") && On(d.ADD_FORBID_CONTENTS) && (Kt === vl && (Kt = qe(Kt)), V(Kt, d.ADD_FORBID_CONTENTS, me)), hl && (de["#text"] = !0), Jn && V(de, ["html", "head", "body"]), de.table && (V(de, ["tbody"]), delete ho.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const M = P;
      P = d.TRUSTED_TYPES_POLICY;
      try {
        T = j("");
      } catch (U) {
        throw P = M, U;
      }
    } else
      d.TRUSTED_TYPES_POLICY === null ? (P = void 0, T = "") : (P === void 0 && (P = Et()), P && typeof T == "string" && (T = j("")));
    He && He(d), Er = d;
  }, Ad = V({}, [...au, ...lu, ...sT]), pd = V({}, [...uu, ...aT]), Sy = function(d, y, M) {
    return y.namespaceURI === Zt ? d === "svg" : y.namespaceURI === Hi ? d === "svg" && (M === "annotation-xml" || Tl[M]) : !!Ad[d];
  }, Dy = function(d, y, M) {
    return y.namespaceURI === Zt ? d === "math" : y.namespaceURI === Ui ? d === "math" && kl[M] : !!pd[d];
  }, By = function(d, y, M) {
    return y.namespaceURI === Ui && !kl[M] || y.namespaceURI === Hi && !Tl[M] ? !1 : !pd[d] && (Cy[d] || !Ad[d]);
  }, Oy = function(d) {
    let y = p(d);
    (!y || !y.tagName) && (y = {
      namespaceURI: wr,
      tagName: "template"
    });
    const M = Ho(d.tagName), U = Ho(y.tagName);
    return Cl[d.namespaceURI] ? d.namespaceURI === Ui ? Sy(M, y, U) : d.namespaceURI === Hi ? Dy(M, y, U) : d.namespaceURI === Zt ? By(M, y, U) : !!(vo === "application/xhtml+xml" && Cl[d.namespaceURI]) : !1;
  }, Cn = function(d) {
    kr(t.removed, {
      element: d
    });
    try {
      p(d).removeChild(d);
    } catch {
      if (w(d), !p(d))
        throw qn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, md = function(d) {
    const y = L(d);
    if (y) {
      const U = [];
      No(y, (X) => {
        kr(U, X);
      }), No(U, (X) => {
        try {
          w(X);
        } catch {
        }
      });
    }
    const M = g(d);
    if (M)
      for (let U = M.length - 1; U >= 0; --U) {
        const X = M[U], q = X && X.name;
        if (typeof q == "string")
          try {
            d.removeAttribute(q);
          } catch {
          }
      }
  }, Vn = function(d, y) {
    try {
      kr(t.removed, {
        attribute: y.getAttributeNode(d),
        from: y
      });
    } catch {
      kr(t.removed, {
        attribute: null,
        from: y
      });
    }
    if (y.removeAttribute(d), d === "is")
      if (yr || Ri)
        try {
          Cn(y);
        } catch {
        }
      else
        try {
          y.setAttribute(d, "");
        } catch {
        }
  }, Ny = function(d) {
    const y = g(d);
    if (y)
      for (let M = y.length - 1; M >= 0; --M) {
        const U = y[M], X = U && U.name;
        if (!(typeof X != "string" || Ae[me(X)]))
          try {
            d.removeAttribute(X);
          } catch {
          }
      }
  }, My = function(d) {
    const y = [d];
    for (; y.length > 0; ) {
      const M = y.pop();
      (C ? C(M) : M.nodeType) === Wt.element && Ny(M);
      const X = L(M);
      if (X)
        for (let q = X.length - 1; q >= 0; --q)
          y.push(X[q]);
    }
  }, gd = function(d) {
    let y = null, M = null;
    if (gl)
      d = "<remove></remove>" + d;
    else {
      const q = lp(d, /^[\r\n\t ]+/);
      M = q && q[0];
    }
    vo === "application/xhtml+xml" && wr === Zt && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const U = P ? j(d) : d;
    if (wr === Zt)
      try {
        y = new f().parseFromString(U, vo);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = ut.createDocument(wr, "template", null);
      try {
        y.documentElement.innerHTML = El ? T : U;
      } catch {
      }
    }
    const X = y.body || y.documentElement;
    return d && M && X.insertBefore(n.createTextNode(M), X.childNodes[0] || null), wr === Zt ? N.call(y, Jn ? "html" : "body")[0] : Jn ? y.documentElement : X;
  }, hd = function(d) {
    return Y.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Fi = function(d) {
    return d = Mo(d, J, " "), d = Mo(d, bt, " "), d = Mo(d, Oe, " "), d;
  }, Sl = function(d) {
    var y;
    d.normalize();
    const M = Y.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let U = M.nextNode();
    for (; U; )
      U.data = Fi(U.data), U = M.nextNode();
    const X = (y = d.querySelectorAll) === null || y === void 0 ? void 0 : y.call(d, "template");
    X && No(X, (q) => {
      Cr(q.content) && Sl(q.content);
    });
  }, ji = function(d) {
    const y = h ? h(d) : null;
    return typeof y != "string" || me(y) !== "form" ? !1 : typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    d.attributes !== g(d) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    d.nodeType !== C(d) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    d.childNodes !== L(d);
  }, Cr = function(d) {
    if (!C || typeof d != "object" || d === null)
      return !1;
    try {
      return C(d) === Wt.documentFragment;
    } catch {
      return !1;
    }
  }, wo = function(d) {
    if (!C || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof C(d) == "number";
    } catch {
      return !1;
    }
  };
  function sn(b, d, y) {
    b.length !== 0 && No(b, (M) => {
      M.call(t, d, y, Er);
    });
  }
  const xy = function(d, y) {
    return !!(yo && d.hasChildNodes() && !wo(d.firstElementChild) && Ie(hp, d.textContent) && Ie(hp, d.innerHTML) || yo && d.namespaceURI === Zt && y === "style" && wo(d.firstElementChild) || d.nodeType === Wt.processingInstruction || yo && d.nodeType === Wt.comment && Ie(hT, d.data));
  }, by = function(d, y) {
    if (!ho[y] && wd(y) && (pe.tagNameCheck instanceof RegExp && Ie(pe.tagNameCheck, y) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(y)))
      return !1;
    if (hl && !Kt[y]) {
      const M = p(d), U = L(d);
      if (U && M) {
        const X = U.length;
        for (let q = X - 1; q >= 0; --q) {
          const Ne = yl ? U[q] : E(U[q], !0);
          M.insertBefore(Ne, v(d));
        }
      }
    }
    return Cn(d), !0;
  }, yd = function(d) {
    if (sn(x.beforeSanitizeElements, d, null), ji(d))
      return Cn(d), !0;
    const y = me(h ? h(d) : d.nodeName);
    if (sn(x.uponSanitizeElement, d, {
      tagName: y,
      allowedTags: de
    }), xy(d, y))
      return Cn(d), !0;
    if (ho[y] || !(wn.tagCheck instanceof Function && wn.tagCheck(y)) && !de[y])
      return by(d, y);
    if ((C ? C(d) : d.nodeType) === Wt.element && !Oy(d) || (y === "noscript" || y === "noembed" || y === "noframes") && Ie(yT, d.innerHTML))
      return Cn(d), !0;
    if (En && d.nodeType === Wt.text) {
      const U = Fi(d.textContent);
      d.textContent !== U && (kr(t.removed, {
        element: d.cloneNode()
      }), d.textContent = U);
    }
    return sn(x.afterSanitizeElements, d, null), !1;
  }, vd = function(d, y, M) {
    if (ed[y] || od && (y === "id" || y === "name") && (M in n || M in Py))
      return !1;
    const U = Ae[y] || wn.attributeCheck instanceof Function && wn.attributeCheck(y, d);
    if (!(dl && Ie(go, y))) {
      if (!(td && Ie(on, y))) {
        if (U) {
          if (!wl[y]) {
            if (!Ie(qf, Mo(M, Vf, ""))) {
              if (!((y === "src" || y === "xlink:href" || y === "href") && d !== "script" && up(M, "data:") === 0 && ad[d])) {
                if (!(nd && !Ie(hr, Mo(M, Vf, "")))) {
                  if (M)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(wd(d) && (pe.tagNameCheck instanceof RegExp && Ie(pe.tagNameCheck, d) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(d)) && (pe.attributeNameCheck instanceof RegExp && Ie(pe.attributeNameCheck, y) || pe.attributeNameCheck instanceof Function && pe.attributeNameCheck(y, d)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          y === "is" && pe.allowCustomizedBuiltInElements && (pe.tagNameCheck instanceof RegExp && Ie(pe.tagNameCheck, M) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(M)))
        )
          return !1;
      }
    }
    return !0;
  }, zy = V({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), wd = function(d) {
    return !zy[Ho(d)] && Ie(wy, d);
  }, Ly = function(d, y, M, U) {
    if (P && typeof c == "object" && typeof c.getAttributeType == "function" && !M)
      switch (c.getAttributeType(d, y)) {
        case "TrustedHTML":
          return j(U);
        case "TrustedScriptURL":
          return Ee(U);
      }
    return U;
  }, Iy = function(d, y, M, U) {
    try {
      M ? d.setAttributeNS(M, y, U) : d.setAttribute(y, U), ji(d) ? Cn(d) : ap(t.removed);
    } catch {
      Vn(y, d);
    }
  }, Ed = function(d) {
    sn(x.beforeSanitizeAttributes, d, null);
    const y = d.attributes;
    if (!y || ji(d))
      return;
    const M = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ae,
      forceKeepAttr: void 0
    };
    let U = y.length;
    const X = me(d.nodeName);
    for (; U--; ) {
      const q = y[U], Ne = q.name, Ce = q.namespaceURI, Tt = q.value, zt = me(Ne), Bl = Tt;
      let Ve = Ne === "value" ? Bl : $C(Bl);
      if (M.attrName = zt, M.attrValue = Ve, M.keepAttr = !0, M.forceKeepAttr = void 0, sn(x.uponSanitizeAttribute, d, M), Ve = M.attrValue, id && (zt === "id" || zt === "name") && up(Ve, sd) !== 0 && (Vn(Ne, d), Ve = sd + Ve), yo && Ie(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ve)) {
        Vn(Ne, d);
        continue;
      }
      if (zt === "attributename" && lp(Ve, "href")) {
        Vn(Ne, d);
        continue;
      }
      if (!M.forceKeepAttr) {
        if (!M.keepAttr) {
          Vn(Ne, d);
          continue;
        }
        if (!rd && Ie(vT, Ve)) {
          Vn(Ne, d);
          continue;
        }
        if (En && (Ve = Fi(Ve)), !vd(X, zt, Ve)) {
          Vn(Ne, d);
          continue;
        }
        Ve = Ly(X, zt, Ce, Ve), Ve !== Bl && Iy(d, Ne, Ce, Ve);
      }
    }
    sn(x.afterSanitizeAttributes, d, null);
  }, Gi = function(d) {
    let y = null;
    const M = hd(d);
    for (sn(x.beforeSanitizeShadowDOM, d, null); y = M.nextNode(); )
      if (sn(x.uponSanitizeShadowNode, y, null), yd(y), Ed(y), Cr(y.content) && Gi(y.content), (C ? C(y) : y.nodeType) === Wt.element) {
        const X = A(y);
        Cr(X) && (Dl(X), Gi(X));
      }
    sn(x.afterSanitizeShadowDOM, d, null);
  }, Dl = function(d) {
    const y = [{
      node: d,
      shadow: null
    }];
    for (; y.length > 0; ) {
      const M = y.pop();
      if (M.shadow) {
        Gi(M.shadow);
        continue;
      }
      const U = M.node, q = (C ? C(U) : U.nodeType) === Wt.element, Ne = L(U);
      if (Ne)
        for (let Ce = Ne.length - 1; Ce >= 0; --Ce)
          y.push({
            node: Ne[Ce],
            shadow: null
          });
      if (q) {
        const Ce = h ? h(U) : null;
        if (typeof Ce == "string" && me(Ce) === "template") {
          const Tt = U.content;
          Cr(Tt) && y.push({
            node: Tt,
            shadow: null
          });
        }
      }
      if (q) {
        const Ce = A(U);
        Cr(Ce) && y.push({
          node: null,
          shadow: Ce
        }, {
          node: Ce,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(b) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, M = null, U = null, X = null;
    if (El = !b, El && (b = "<!-->"), typeof b != "string" && !wo(b) && (b = oT(b), typeof b != "string"))
      throw qn("dirty is not a string, aborting");
    if (!t.isSupported)
      return b;
    Al ? (de = pl, Ae = ml) : Pl(d), (x.uponSanitizeElement.length > 0 || x.uponSanitizeAttribute.length > 0) && (de = qe(de)), x.uponSanitizeAttribute.length > 0 && (Ae = qe(Ae)), t.removed = [];
    const q = yl && typeof b != "string" && wo(b);
    if (q) {
      const Tt = h ? h(b) : b.nodeName;
      if (typeof Tt == "string") {
        const zt = me(Tt);
        if (!de[zt] || ho[zt])
          throw qn("root node is forbidden and cannot be sanitized in-place");
      }
      if (ji(b))
        throw qn("root node is clobbered and cannot be sanitized in-place");
      try {
        Dl(b);
      } catch (zt) {
        throw md(b), zt;
      }
    } else if (wo(b))
      y = gd("<!---->"), M = y.ownerDocument.importNode(b, !0), M.nodeType === Wt.element && M.nodeName === "BODY" || M.nodeName === "HTML" ? y = M : y.appendChild(M), Dl(M);
    else {
      if (!yr && !En && !Jn && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return P && Qi ? j(b) : b;
      if (y = gd(b), !y)
        return yr ? null : Qi ? T : "";
    }
    y && gl && Cn(y.firstChild);
    const Ne = hd(q ? b : y);
    try {
      for (; U = Ne.nextNode(); )
        yd(U), Ed(U), Cr(U.content) && Gi(U.content);
    } catch (Tt) {
      throw q && md(b), Tt;
    }
    if (q)
      return No(t.removed, (Tt) => {
        Tt.element && My(Tt.element);
      }), En && Sl(b), b;
    if (yr) {
      if (En && Sl(y), Ri)
        for (X = O.call(y.ownerDocument); y.firstChild; )
          X.appendChild(y.firstChild);
      else
        X = y;
      return (Ae.shadowroot || Ae.shadowrootmode) && (X = z.call(r, X, !0)), X;
    }
    let Ce = Jn ? y.outerHTML : y.innerHTML;
    return Jn && de["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && Ie(mT, y.ownerDocument.doctype.name) && (Ce = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + Ce), En && (Ce = Fi(Ce)), P && Qi ? j(Ce) : Ce;
  }, t.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pl(b), Al = !0, pl = de, ml = Ae;
  }, t.clearConfig = function() {
    Er = null, Al = !1, pl = null, ml = null, P = I, T = "";
  }, t.isValidAttribute = function(b, d, y) {
    Er || Pl({});
    const M = me(b), U = me(d);
    return vd(M, U, y);
  }, t.addHook = function(b, d) {
    typeof d == "function" && Me(x, b) && kr(x[b], d);
  }, t.removeHook = function(b, d) {
    if (Me(x, b)) {
      if (d !== void 0) {
        const y = qC(x[b], d);
        return y === -1 ? void 0 : _C(x[b], y, 1)[0];
      }
      return ap(x[b]);
    }
  }, t.removeHooks = function(b) {
    Me(x, b) && (x[b] = []);
  }, t.removeAllHooks = function() {
    x = yp();
  }, t;
}
Mh();
const CT = ["H1", "H2", "H3", "H4", "H5", "H6"], Qf = "H2";
function TT(e) {
  const t = e == null ? void 0 : e.trim().toUpperCase();
  return t && CT.includes(t) ? t : Qf;
}
function kT(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "center" ? "Center" : t === "right" ? "Right" : "Left";
}
function PT(e) {
  const t = e == null ? void 0 : e.trim().toLowerCase();
  return t === "right" ? "Right" : t === "bottom" ? "Bottom" : t === "left" ? "Left" : "Top";
}
const so = "dummy-brand-kit", vp = "dummy-template";
function Pr(e = so) {
  return IC(e);
}
function ST(e, t = "Social") {
  return t === "Email" || t === "Newsletter" ? BT(e) : DT(e, t);
}
function DT(e, t = "Social") {
  const n = t === "Print" ? Bh[0] : null;
  return {
    id: e,
    templateName: n ? "Demo Print Template" : "Demo Social Template",
    channelType: t,
    formatPreset: (n == null ? void 0 : n.formatPreset) ?? "1080x1080",
    canvasWidth: (n == null ? void 0 : n.width) ?? 1080,
    canvasHeight: (n == null ? void 0 : n.height) ?? 1080,
    brandKitId: so,
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
function BT(e) {
  return {
    id: e,
    templateName: "Demo Email Template",
    channelType: "Email",
    formatPreset: "Email.StandardEmail",
    canvasWidth: 600,
    canvasHeight: 800,
    brandKitId: so,
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
function OT(e, t) {
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
function NT(e) {
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
function jn(e, t, n) {
  XE(e, t, n);
}
function ao(e) {
  return { Invariant: e };
}
function Pe(e, t, n) {
  e[t] = ao(n);
}
function Hf(e, t, n) {
  e[t] = n;
}
function Dt(e, t, n) {
  Number.isNaN(n) || (e[t] = n);
}
function _n(e) {
  if (!(e == null || Number.isNaN(e)))
    return e;
}
function Kn(e) {
  const t = e == null ? void 0 : e.trim();
  return t || void 0;
}
function lo(e) {
  const t = {
    ...e,
    sortOrder: _n(e.sortOrder) ?? 0,
    positionX: _n(e.positionX),
    positionY: _n(e.positionY),
    zoneWidth: _n(e.zoneWidth),
    zoneHeight: _n(e.zoneHeight),
    offsetPx: _n(e.offsetPx),
    maxCharacterCount: _n(e.maxCharacterCount),
    aspectRatioLock: Kn(e.aspectRatioLock),
    htmlDefaultContent: Kn(e.htmlDefaultContent)
  };
  switch (t.zoneType) {
    case "Text":
      t.headingLevel = void 0, t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0;
      break;
    case "Heading":
      t.aspectRatioLock = void 0, t.htmlDefaultContent = void 0, t.htmlAllowUserOverride = void 0, t.headingLevel || (t.headingLevel = Qf);
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
function MT(e) {
  return {
    Title: ao(e.zoneKey)
  };
}
const xT = {
  textValue: ["textValue", "TextValue", "text", "content", "zoneText", "value"],
  colorValue: ["colorValue", "ColorValue", "color", "hexValue"],
  htmlValue: ["htmlValue", "HtmlValue", "html", "htmlContent"],
  linkUrl: ["linkUrl", "LinkUrl", "url", "href", "link"]
};
function xh(e) {
  const t = {};
  return e.textValue !== void 0 && Pe(t, "textValue", e.textValue), e.colorValue !== void 0 && Pe(t, "colorValue", e.colorValue), e.htmlValue !== void 0 && Pe(t, "htmlValue", e.htmlValue), e.linkUrl !== void 0 && Pe(t, "linkUrl", e.linkUrl), t;
}
function bT(e, t) {
  if (t.length === 0)
    return xh(e);
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
      for (const s of xT[i.key]) {
        const a = n.get(s.toLowerCase());
        if (a && !(/^title$/i.test(a) || /\.Title$/i.test(a))) {
          Pe(r, a, i.value);
          break;
        }
      }
  return r;
}
function zT(e) {
  var t, n, r, o, i, s;
  return !!((t = e.textValue) != null && t.trim() || (n = e.htmlValue) != null && n.trim() || (r = e.colorValue) != null && r.trim() || (o = e.linkUrl) != null && o.trim() || (i = e.imageAssetId) != null && i.trim() || (s = e.imageAssetUrl) != null && s.trim());
}
function LT(e) {
  const t = {};
  return e.isRawHtmlOverrideMA !== void 0 && (t.isRawHtmlOverrideMA = e.isRawHtmlOverrideMA), e.rawHtmlOverrideContent !== void 0 && Pe(t, "rawHtmlOverrideContent", e.rawHtmlOverrideContent), e.overrideReasonMA !== void 0 && Pe(t, "overrideReasonMA", e.overrideReasonMA), e.zoneLayoutJson !== void 0 && Pe(t, "zoneLayoutJson", e.zoneLayoutJson), e.designerInstanceJson !== void 0 && Pe(t, "designerInstanceJson", e.designerInstanceJson), t;
}
function IT(e) {
  return { templateName: ao(e.templateName) };
}
function bh(e) {
  const t = {};
  return Pe(t, "templateName", e.templateName), e.canvasWidth !== void 0 && Dt(t, "canvasWidth", e.canvasWidth), e.canvasHeight !== void 0 && Dt(t, "canvasHeight", e.canvasHeight), e.designerDocumentJson !== void 0 && Pe(t, "designerDocumentJson", e.designerDocumentJson), t;
}
function RT(e, t, n = "designerDocumentJson") {
  const r = {};
  return Pe(r, n, e), (t == null ? void 0 : t.width) != null && Dt(r, "canvasWidth", t.width), (t == null ? void 0 : t.height) != null && Dt(r, "canvasHeight", t.height), r;
}
function zh(e) {
  return {
    zoneKey: ao(e.zoneKey),
    zoneLabel: ao(e.zoneLabel || e.zoneKey)
  };
}
function QT(e, t) {
  if (!t)
    return zh(e);
  const n = {}, r = Kn(e.zoneLabel) ?? e.zoneKey, o = Kn(t.zoneLabel) ?? t.zoneKey;
  return e.zoneKey !== t.zoneKey && Pe(n, "zoneKey", e.zoneKey), r !== o && Pe(n, "zoneLabel", r), n;
}
function HT(e) {
  const t = {};
  return Pe(t, "zoneType", e.zoneType), Hf(t, "isLocked", e.isLocked), Dt(t, "sortOrder", e.sortOrder), t;
}
function UT(e, t) {
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
    r.push({ [o]: ao(e) }), r.push({ [o]: e });
  return r;
}
function FT(e, t) {
  const n = {};
  return (!t || e.isLocked !== t.isLocked) && Hf(n, "isLocked", e.isLocked), (!t || e.sortOrder !== t.sortOrder) && Dt(n, "sortOrder", e.sortOrder), n;
}
function Lh(e, t) {
  const n = {};
  return e.positionX !== void 0 && e.positionX !== (t == null ? void 0 : t.positionX) && Dt(n, "positionX", e.positionX), e.positionY !== void 0 && e.positionY !== (t == null ? void 0 : t.positionY) && Dt(n, "positionY", e.positionY), e.zoneWidth !== void 0 && e.zoneWidth !== (t == null ? void 0 : t.zoneWidth) && Dt(n, "zoneWidth", e.zoneWidth), e.zoneHeight !== void 0 && e.zoneHeight !== (t == null ? void 0 : t.zoneHeight) && Dt(n, "zoneHeight", e.zoneHeight), e.contentAlignment !== void 0 && e.contentAlignment !== (t == null ? void 0 : t.contentAlignment) && Pe(n, "contentAlignment", e.contentAlignment), e.offsetDirection !== void 0 && e.offsetDirection !== (t == null ? void 0 : t.offsetDirection) && Pe(n, "offsetDirection", e.offsetDirection), e.offsetPx !== void 0 && e.offsetPx !== (t == null ? void 0 : t.offsetPx) && Dt(n, "offsetPx", e.offsetPx), n;
}
function Ih(e, t) {
  const n = lo(e), r = {};
  return (n.zoneType === "Text" || n.zoneType === "Heading") && n.maxCharacterCount !== void 0 && n.maxCharacterCount !== (t == null ? void 0 : t.maxCharacterCount) && Dt(r, "maxCharacterCount", n.maxCharacterCount), n.zoneType === "Heading" && n.headingLevel !== void 0 && n.headingLevel !== (t == null ? void 0 : t.headingLevel) && Pe(r, "headingLevel", n.headingLevel), n.zoneType === "Image" && n.aspectRatioLock !== void 0 && n.aspectRatioLock !== Kn(t == null ? void 0 : t.aspectRatioLock) && Pe(r, "aspectRatioLock", n.aspectRatioLock), n.zoneType === "HTML" && (n.htmlDefaultContent !== void 0 && n.htmlDefaultContent !== Kn(t == null ? void 0 : t.htmlDefaultContent) && Pe(r, "htmlDefaultContent", n.htmlDefaultContent), n.htmlAllowUserOverride !== void 0 && n.htmlAllowUserOverride !== (t == null ? void 0 : t.htmlAllowUserOverride) && Hf(r, "htmlAllowUserOverride", n.htmlAllowUserOverride)), r;
}
function wp(e) {
  const t = lo(e);
  return {
    ...HT(t),
    ...Lh(t),
    ...Ih(t)
  };
}
function jT(e, t) {
  const n = lo(e), r = lo(t), o = Kn(n.zoneLabel) ?? n.zoneKey, i = Kn(r.zoneLabel) ?? r.zoneKey;
  return n.zoneKey === r.zoneKey && o === i && JSON.stringify(wp(n)) === JSON.stringify(wp(r));
}
function hc(e) {
  return /^\d+$/.test(e);
}
const GT = ["Social", "Email", "Newsletter", "Print"];
function Uf(e) {
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
function Z(e, ...t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = Uf(e[n]);
    if (r == null)
      continue;
    const o = String(r).trim();
    if (o)
      return o;
  }
  return "";
}
function ln(e, ...t) {
  if (e)
    for (const n of t) {
      const r = Uf(e[n]);
      if (typeof r == "number" && Number.isFinite(r))
        return r;
      if (typeof r == "string") {
        const o = Number(r);
        if (Number.isFinite(o))
          return o;
      }
    }
}
function yc(e, ...t) {
  if (!e)
    return !1;
  for (const n of t) {
    const r = Uf(e[n]);
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
function At(e, ...t) {
  const n = fh(e, ...t);
  if (n.length > 0)
    return n;
  if (!e)
    return [];
  for (const r of t) {
    const o = e[r];
    if (!Array.isArray(o))
      continue;
    const i = Ar(o);
    if (i.length > 0)
      return i;
  }
  return [];
}
function sl(e, t) {
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
function YT(e) {
  const t = e.trim().toLowerCase();
  return t.includes("email") ? "Email" : t.includes("newsletter") ? "Newsletter" : t.includes("print") || t.includes("poster") || /\ba4\b/.test(t) ? "Print" : "Social";
}
function KT(e) {
  const t = Z(e, "EPAM.headingLevel", "headingLevel");
  return t ? TT(t) : void 0;
}
function ZT(e) {
  const t = Z(e, "EPAM.contentAlignment", "contentAlignment");
  return t ? kT(t) : void 0;
}
function XT(e) {
  const t = Z(e, "EPAM.offsetDirection", "offsetDirection");
  return t ? PT(t) : void 0;
}
function fu(e, t = "") {
  return { id: String(e), name: t || String(e) };
}
function Rh(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = t, s = Z(r, "EPAM.channelType", "channelType") || Z(r, "EPAM.channelTypeMA", "channelTypeMA") || xn(i, "channelType"), a = Z(r, "EPAM.brandKitId", "brandKitId"), l = At(
    o,
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit",
    "marketingTemplateToBrandKit"
  )[0];
  return {
    id: String(e),
    templateName: Z(r, "EPAM.templateName", "templateName", "Title") || `Template ${e}`,
    channelType: GT.includes(s) ? s : YT(s),
    formatPreset: Z(r, "EPAM.formatPreset", "formatPreset") || xn(i, "formatPreset") || "",
    canvasWidth: ln(r, "EPAM.canvasWidth", "canvasWidth"),
    canvasHeight: ln(r, "EPAM.canvasHeight", "canvasHeight"),
    brandKitId: a || (l != null ? String(l) : ""),
    zones: n,
    allowedAssetIds: Hh(t).map(String),
    designerDocumentJson: Z(
      r,
      "EPAM.designerDocumentJson",
      "designerDocumentJson",
      "DesignerDocumentJson"
    ) || void 0
  };
}
function Ff(e, t) {
  const n = t.properties ?? {}, r = t, o = Z(n, "EPAM.zoneKey", "zoneKey") || `zone-${e}`, i = Z(n, "EPAM.zoneLabel", "zoneLabel", "Title") || `Zone ${e}`, s = Z(n, "EPAM.zoneType", "zoneType", "ZoneType", "zoneTypeMA", "ZoneTypeMA") || xn(r, "zoneType") || xn(r, "ZoneType") || xn(r, "EPAM.ZoneType") || xn(r, "zoneTypeMA"), a = Lf(s, o, i), l = KT(n) ?? (a === "Heading" ? Qf : void 0);
  return {
    id: String(e),
    zoneKey: o,
    zoneLabel: i,
    zoneType: a,
    isLocked: yc(n, "EPAM.isLocked", "isLocked"),
    sortOrder: ln(n, "EPAM.sortOrder", "sortOrder") ?? 0,
    positionX: ln(n, "EPAM.positionX", "positionX"),
    positionY: ln(n, "EPAM.positionY", "positionY"),
    zoneWidth: ln(n, "EPAM.zoneWidth", "zoneWidth"),
    zoneHeight: ln(n, "EPAM.zoneHeight", "zoneHeight"),
    maxCharacterCount: ln(n, "EPAM.maxCharacterCount", "maxCharacterCount"),
    headingLevel: l,
    contentAlignment: ZT(n),
    offsetDirection: XT(n),
    offsetPx: ln(n, "EPAM.offsetPx", "offsetPx"),
    aspectRatioLock: Z(n, "EPAM.aspectRatioLock", "aspectRatioLock") || void 0,
    htmlDefaultContent: Z(n, "EPAM.htmlDefaultContent", "htmlDefaultContent") || void 0,
    htmlAllowUserOverride: yc(n, "EPAM.htmlAllowUserOverride", "htmlAllowUserOverride"),
    allowedAssetIds: Uh(t).map(String),
    allowedAssetCollectionId: Z(n, "EPAM.allowedAssetCollectionId", "allowedAssetCollectionId") || void 0
  };
}
function Qh(e, t) {
  const n = t.properties ?? {}, r = jf(t), o = r[0] != null ? String(r[0]) : void 0;
  return {
    id: String(e),
    zoneKey: Z(n, "EPAM.zoneKey", "zoneKey", "Title") || `zone-${e}`,
    textValue: Z(n, "EPAM.textValue", "textValue") || void 0,
    colorValue: Z(n, "EPAM.colorValue", "colorValue") || void 0,
    htmlValue: Z(n, "EPAM.htmlValue", "htmlValue") || void 0,
    imageAssetId: Z(n, "EPAM.imageAssetId", "imageAssetId") || o || void 0,
    imageAssetUrl: Z(n, "EPAM.imageAssetUrl", "imageAssetUrl") || void 0,
    linkUrl: Z(n, "EPAM.linkUrl", "linkUrl") || void 0
  };
}
function WT(e, t, n = []) {
  const r = t.properties ?? {}, o = t.relations ?? {}, i = Z(r, "EPAM.templateId", "templateId") || String(
    At(
      o,
      "marketingAssetToTemplate",
      "MarketingAssetToTemplate",
      "EPAM.MarketingAssetToTemplate"
    )[0] ?? ""
  );
  return {
    id: String(e),
    assetName: Z(r, "EPAM.assetName", "assetName", "Title") || `Asset ${e}`,
    channelTypeMA: fu(
      At(o, "channelTypeMA", "ChannelTypeMA")[0] ?? "channel",
      Z(r, "EPAM.channelTypeMA", "channelTypeMA") || "Channel"
    ),
    formatPresetMA: fu(
      At(o, "formatPresetMA", "FormatPresetMA")[0] ?? "format",
      Z(r, "EPAM.formatPresetMA", "formatPresetMA") || "Format"
    ),
    outputFormatMA: fu(
      At(o, "outputFormatMA", "OutputFormatMA")[0] ?? "output",
      Z(r, "EPAM.outputFormatMA", "outputFormatMA") || "Output"
    ),
    templateId: i,
    isRawHtmlOverrideMA: yc(r, "EPAM.isRawHtmlOverrideMA", "isRawHtmlOverrideMA"),
    rawHtmlOverrideContent: Z(r, "EPAM.rawHtmlOverrideContent", "rawHtmlOverrideContent") || void 0,
    overrideReasonMA: Z(r, "EPAM.overrideReasonMA", "overrideReasonMA") || void 0,
    zoneLayoutJson: Z(r, "EPAM.zoneLayoutJson", "zoneLayoutJson", "builderLayoutJson") || void 0,
    designerInstanceJson: Z(
      r,
      "EPAM.designerInstanceJson",
      "designerInstanceJson",
      "DesignerInstanceJson"
    ) || void 0,
    zoneValues: n,
    renderedOutputAssetId: Z(r, "EPAM.renderedOutputAssetId", "renderedOutputAssetId") || String(At(o, "marketingAssetToRenderedOutput")[0] ?? "") || void 0
  };
}
function JT(e, t, n = [], r = []) {
  const o = t.properties ?? {};
  return {
    id: String(e),
    brandKitName: Z(o, "EPAM.brandKitName", "brandKitName", "Title") || `Brand kit ${e}`,
    logoAssetUrl: Z(o, "EPAM.logoAssetUrl", "logoAssetUrl"),
    colors: n,
    fonts: r
  };
}
function Hh(e) {
  const t = At(e.relations, ...Ah), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/template.*asset|allowed.*asset/i.test(r) || /collection|zone/i.test(r) || Array.isArray(o) && n.push(...Ar(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function jf(e) {
  const t = At(e.relations, ...ph), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/selected.*asset|zonevalue.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Ar(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function Uh(e) {
  const t = At(e.relations, ...dh), n = [];
  if (e.relations)
    for (const [r, o] of Object.entries(e.relations))
      !/allowed.*asset|zone.*asset/i.test(r) || /collection/i.test(r) || Array.isArray(o) && n.push(...Ar(o));
  return [.../* @__PURE__ */ new Set([...t, ...n])];
}
function VT(e) {
  return [.../* @__PURE__ */ new Set([
    ...At(
      e.relations,
      "templateToZone",
      "templateToTemplateZone",
      "TemplateToTemplateZone",
      "EPAM.TemplateToTemplateZone",
      "templateToEPAM.TemplateZone"
    ),
    ...sl(e.relations, /template.*zone/i)
  ])];
}
function Fh(e) {
  return [.../* @__PURE__ */ new Set([
    ...At(
      e.relations,
      "marketingAssetToZoneValue",
      "MarketingAssetToZoneValue",
      "EPAM.MarketingAssetToZoneValue"
    ),
    ...sl(e.relations, /zonevalue/i)
  ])];
}
function qT(e, t) {
  const n = t.properties ?? {}, r = Z(n, "EPAM.colorUsageType", "colorUsageType") || "Primary";
  return {
    colorName: Z(n, "EPAM.colorName", "colorName") || `Color ${e}`,
    hexValue: Z(n, "EPAM.hexValue", "hexValue") || "#000000",
    colorUsageType: r
  };
}
function _T(e, t) {
  const n = t.properties ?? {}, r = Z(n, "EPAM.fontUsageType", "fontUsageType") || "Body", o = Z(n, "EPAM.fontWeight", "fontWeight") || "Regular";
  return {
    fontFamily: Z(n, "EPAM.fontFamily", "fontFamily") || "sans-serif",
    fontWeight: o,
    fontUsageType: r
  };
}
function $T(e) {
  return At(
    e.relations,
    "brandKitToColor",
    "BrandKitToColor",
    "brandKitToBrandColor"
  ).concat(sl(e.relations, /color/i));
}
function ek(e) {
  return At(
    e.relations,
    "brandKitToFont",
    "BrandKitToFont",
    "brandKitToBrandFont"
  ).concat(sl(e.relations, /font/i));
}
function tk(e, t, n, r) {
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
  return e.zoneType === "Heading" && (o.headingLevel = e.headingLevel, o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Text" && (o.maxCharacterCount = e.maxCharacterCount), e.zoneType === "Image" && (o.aspectRatioLock = e.aspectRatioLock), e.zoneType === "HTML" && (o.htmlDefaultContent = e.htmlDefaultContent, o.htmlAllowUserOverride = e.htmlAllowUserOverride), r === "Social" ? nk(o, t) : rk(o);
}
function nk(e, t) {
  const n = e.zoneType === "Logo" ? 80 : e.zoneType === "Image" ? 360 : e.zoneType === "Heading" ? 120 : e.zoneType === "CTA Button" ? 72 : 96;
  return {
    ...e,
    positionX: e.positionX ?? 40,
    positionY: e.positionY ?? 40 + t * (n + 24),
    zoneWidth: e.zoneWidth ?? 1e3,
    zoneHeight: n
  };
}
function rk(e) {
  return {
    ...e,
    positionX: void 0,
    positionY: void 0,
    zoneWidth: void 0,
    zoneHeight: void 0
  };
}
function ok(e, t, n) {
  const r = jC(t), o = Date.now(), i = [...e.zones].sort((s, a) => s.sortOrder - a.sortOrder).map((s, a) => tk(s, a, o, t));
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
function Gf(e) {
  const t = lt(e, /allowed.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/^template/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...dh, ...t])];
}
function Yf(e) {
  const t = lt(e, /template.*asset|allowed.*asset/i).filter(
    (n) => !/collection/i.test(n) && !/zone/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...Ah, ...t])];
}
function ik(e) {
  const t = lt(e, /selected.*asset|zonevalue.*asset|zone.*asset/i).filter(
    (n) => !/collection/i.test(n)
  );
  return [.../* @__PURE__ */ new Set([...ph, ...t])];
}
const jh = "/api/content-hub";
let S = {}, Kf = jh;
function sk() {
  return Kf.replace(/\/$/, "") !== jh;
}
function ak(e) {
  S = e ?? {};
}
async function vc(e, t) {
  const n = await fetch(`${Kf}${e}`, {
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
async function $(e) {
  var n;
  if (!((n = S == null ? void 0 : S.raw) != null && n.getAsync))
    throw new Error("Content Hub client is not available. This component must run inside Content Hub.");
  const t = await S.raw.getAsync(`/api/entities/${e}`);
  if (!t.isSuccessStatusCode || !t.content)
    throw new Error(`Content Hub API error (${t.statusCode ?? "unknown"}) loading entity ${e}`);
  return t.content;
}
async function rn(e) {
  const t = [...new Set(e.filter((n) => Number.isFinite(n)))];
  return t.length === 0 ? [] : Promise.all(
    t.map(async (n) => {
      try {
        return await $(n);
      } catch (r) {
        return fe(
          "related entity",
          `Skipped entity ${n}: ${r instanceof Error ? r.message : String(r)}`
        ), { properties: {}, relations: {}, systemProperties: { id: n } };
      }
    })
  );
}
async function lk(e, t, n) {
  var o;
  let r = ((o = t.brandKitId) == null ? void 0 : o.trim()) ?? "";
  if (!r) {
    const i = await Gt(
      S,
      e,
      "templateToBrandKit",
      n.relations
    );
    i[0] != null ? (r = String(i[0]), F("brandKitId", `Resolved ${r} from templateToBrandKit on template ${e}`)) : ze(
      "brandKitId",
      `No brand kit linked on template ${e}`,
      "Link templateToBrandKit on the template, or set brandKitId in External component Configuration."
    );
  }
  return {
    ...t,
    brandKitId: r,
    allowedAssetIds: t.allowedAssetIds && t.allowedAssetIds.length > 0 ? t.allowedAssetIds : Hh(n).map(String)
  };
}
async function uk(e, t) {
  const n = Uh(t);
  if (n.length > 0)
    return { ...e, allowedAssetIds: n.map(String) };
  if (!Je(t.relations, "templateZoneToAllowedAssetCollection"))
    return e;
  const r = await Gt(
    S,
    e.id,
    "templateZoneToAllowedAssetCollection",
    t.relations
  );
  return r[0] != null ? { ...e, allowedAssetCollectionId: String(r[0]) } : e;
}
function Gh(e) {
  const t = lt(e, /template.*zone/i);
  return [.../* @__PURE__ */ new Set([...t, ...wi])];
}
async function ck(e, t, n) {
  var o;
  if (!((o = S == null ? void 0 : S.raw) != null && o.getAsync))
    return [];
  const r = encodeURIComponent(
    `Definition.Name=='${e}' AND Parent('${t}').Id==${n}`
  );
  try {
    const i = await S.raw.getAsync(
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
const fk = ["channelType", "ChannelType", "EPAM.ChannelType"], dk = ["formatPreset", "FormatPreset", "EPAM.FormatPreset"];
async function Yh(e) {
  var i, s;
  if (!((i = S == null ? void 0 : S.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating templates.");
  const t = [
    IT(e),
    { Title: { Invariant: e.templateName } },
    { templateName: e.templateName }
  ];
  let n = null, r = "unknown";
  for (const a of t) {
    const l = await S.raw.postAsync("/api/entities", {
      entitydefinition: {
        href: "/api/entitydefinitions/EPAM.Template"
      },
      properties: a
    });
    if (l.isSuccessStatusCode && ((s = l.content) == null ? void 0 : s.id) != null) {
      n = String(l.content.id);
      break;
    }
    r = String(l.statusCode ?? "unknown"), fe("template create", `Create attempt failed (${r}) with keys: ${Object.keys(a).join(", ")}`);
  }
  if (!n)
    throw new Error(
      `Failed to create template "${e.templateName}" (HTTP ${r}). Check Create permission on EPAM.Template and that templateName is a valid property.`
    );
  const o = bh(e);
  if (Object.keys(o).length > 0)
    try {
      await Wh(n, o);
    } catch (a) {
      fe(
        "template create",
        `Template ${n} created but optional property update failed: ${a instanceof Error ? a.message : String(a)}`
      );
    }
  return F("template create", `Created EPAM.Template ${n} (${e.templateName})`), n;
}
async function Ak(e, t, n) {
  var i;
  return (await al(n)).channelType === t ? n : (i = (await Xh(e)).find((s) => s.channelType === t)) == null ? void 0 : i.id;
}
async function Ep(e, t, n, r) {
  const o = await $(t);
  for (const i of n) {
    const s = await Gt(
      S,
      t,
      i,
      o.relations
    );
    if (s[0] == null)
      continue;
    if (await io(
      S,
      e,
      String(s[0]),
      n[0]
    )) {
      F("template taxonomy", `Linked ${r} on template ${e} from template ${t}`);
      return;
    }
  }
  ze(
    "template taxonomy",
    `Could not link ${r} on template ${e} from reference ${t}`,
    `Set ${r} on the template in Content Hub.`
  );
}
async function Kh(e, t, n, r) {
  if (!(n != null && n.trim()))
    return;
  const o = await Ak(
    n,
    t,
    r
  );
  if (!o) {
    ze(
      "template taxonomy",
      `No ${t} template in brand kit ${n} to copy channelType/formatPreset from`,
      "Link channelType and formatPreset on the new template in Content Hub."
    );
    return;
  }
  await Ep(
    e,
    o,
    fk,
    "channelType"
  ), await Ep(
    e,
    o,
    dk,
    "formatPreset"
  );
}
async function Zh(e, t) {
  if (!(t != null && t.trim()))
    return;
  if (await io(S, e, t, "templateToBrandKit")) {
    F("template brand kit", `Linked template ${e} to brand kit ${t}`);
    return;
  }
  if (await Yt(S, t, e, "brandKitToTemplate")) {
    F("template brand kit", `Linked brand kit ${t} to template ${e}`);
    return;
  }
  ze(
    "template brand kit",
    `Could not link template ${e} to brand kit ${t}`,
    "Link templateToBrandKit on the template in Content Hub."
  );
}
async function Xh(e) {
  if (!(e != null && e.trim()) || e === so)
    return [];
  let t = [];
  for (const o of [
    "templateToBrandKit",
    "TemplateToBrandKit",
    "EPAM.TemplateToBrandKit"
  ])
    if (t = await ck("EPAM.Template", o, e), t.length > 0)
      break;
  if (t.length === 0)
    try {
      const o = await $(e);
      t = await Gt(
        S,
        e,
        "brandKitToTemplate",
        o.relations
      );
    } catch {
      t = [];
    }
  const n = [...new Set(t)];
  return n.length === 0 ? [] : (await Promise.all(n.map((o) => al(String(o))))).sort((o, i) => o.templateName.localeCompare(i.templateName));
}
async function pk(e, t, n) {
  const r = await al(e), o = ok(r, t, n), i = await Yh(o);
  o.brandKitId && (await Zh(i, o.brandKitId), await Kh(
    i,
    o.channelType,
    o.brandKitId,
    e
  ));
  const s = await Zf({ ...o, id: i }, []);
  return await _h(s.id, r.allowedAssetIds ?? []), F(
    "template duplicate",
    `Created template ${s.id} (${s.templateName}) from ${e} as ${t}`
  ), s;
}
async function mk(e, t) {
  var i;
  const n = {
    ...e,
    id: ((i = e.id) == null ? void 0 : i.trim()) || "",
    zones: e.zones ?? []
  }, r = await Yh(n);
  n.brandKitId && (await Zh(r, n.brandKitId), t != null && t.trim() && await Kh(
    r,
    n.channelType,
    n.brandKitId,
    t
  ));
  const o = await Zf({ ...n, id: r }, []);
  return await _h(o.id, n.allowedAssetIds ?? []), F(
    "template create",
    `Created template ${o.id} (${o.templateName}) with ${o.zones.length} zone(s)`
  ), o;
}
async function gk(e, t) {
  const n = await $(e), r = [
    "marketingAssetToTemplate",
    "MarketingAssetToTemplate",
    "EPAM.MarketingAssetToTemplate"
  ], o = await Gt(S, e, r[0], n.relations);
  for (const s of o)
    if (String(s) !== t)
      for (const a of r)
        await po(S, e, s, a, n.relations);
  let i = !1;
  for (const s of r)
    if (await Yt(S, e, t, s, n.relations)) {
      i = !0;
      break;
    }
  if (!i)
    throw new Error(
      `Could not link template ${t} to marketing asset ${e}. Check marketingAssetToTemplate relation permissions.`
    );
  F("marketing asset template", `Linked marketing asset ${e} to template ${t}`);
}
async function hk(e, t) {
  var r;
  if (!((r = S == null ? void 0 : S.raw) != null && r.getAsync))
    return [];
  const n = encodeURIComponent(
    `Definition.Name=='EPAM.TemplateZone' AND Parent('${t}').Id==${e}`
  );
  try {
    const o = await S.raw.getAsync(
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
async function al(e) {
  const t = await $(e);
  sC(e, t);
  let n = [...new Set(VT(t))];
  if (n.length === 0) {
    const i = Gh(t.relations), s = await vi(
      S,
      e,
      t.relations,
      i.filter((a) => Je(t.relations, a))
    );
    n = s.ids, s.relationName && F("template zones", `Found zones via relation ${s.relationName}`);
  }
  if (n.length === 0) {
    const { templateChildRelations: i, zoneParentRelations: s } = await el(
      S,
      t.relations
    );
    for (const a of s) {
      const l = await hk(e, a);
      if (l.length > 0) {
        n = l, F(
          "template zones",
          `Found ${l.length} zone(s) via parent query on ${a}`
        );
        break;
      }
    }
    if (n.length === 0 && i.length > 0) {
      const a = await vi(
        S,
        e,
        t.relations,
        i.filter((l) => Je(t.relations, l))
      );
      n = a.ids, a.relationName && F("template zones", `Found zones via relation ${a.relationName}`);
    }
  }
  let r = [];
  if (n.length > 0)
    try {
      const i = await rn(n);
      await gC(S, $, i), r = await Promise.all(
        i.map(async (s, a) => {
          const l = Ff(n[a], s), u = await uk(l, s);
          return Ch(S, $, u, s);
        })
      );
    } catch (i) {
      fe(
        "template zones",
        `Could not load zones for template ${e}: ${i instanceof Error ? i.message : String(i)}`
      ), r = [];
    }
  const o = await lk(
    e,
    Rh(e, t, r),
    t
  );
  return r.length > 0 ? (F("template zones", `Loaded ${r.length} zone(s) for template ${e}`), o) : (ze(
    "template zones",
    `Template ${e} has no linked zones yet`,
    'This is normal for a new template. Use "Edit Template Zones" to add zones, or link EPAM.TemplateZone entities in Content Hub. Zones link via a Parent relation on EPAM.TemplateZone → EPAM.Template (not on the template entity itself).'
  ), o);
}
async function yk(e) {
  var i;
  const t = await $(e);
  let n = [...new Set(Fh(t))];
  n.length === 0 && (n = await Gt(
    S,
    e,
    "marketingAssetToZoneValue",
    t.relations
  ));
  let r = [];
  if (n.length > 0)
    try {
      const s = await rn(n);
      r = await Promise.all(
        s.map(
          async (a, l) => Dk(n[l], Qh(n[l], a), a)
        )
      ), F("zone values", `Loaded ${r.length} zone value(s) for asset ${e}`);
    } catch (s) {
      fe(
        "zone values",
        `Could not load zone values for asset ${e}: ${s instanceof Error ? s.message : String(s)}`
      ), r = [];
    }
  else
    ze(
      "zone values",
      `Marketing asset ${e} has no marketingAssetToZoneValue relations yet`,
      "Zone values will be created when you click Save and render HTML."
    );
  let o = WT(e, t, r);
  if (!((i = o.templateId) != null && i.trim())) {
    const s = await Gt(
      S,
      e,
      "marketingAssetToTemplate",
      t.relations
    );
    s[0] != null && (o = { ...o, templateId: String(s[0]) });
  }
  return o;
}
async function vk(e) {
  if (!(e != null && e.trim()) || e === so)
    return jn(
      "brand kit",
      "No brand kit id resolved",
      "Link templateToBrandKit on the template or set brandKitId in Configuration."
    ), Qo(Pr(e || so));
  try {
    const t = await $(e), n = [...new Set($T(t))], r = [...new Set(ek(t))], [o, i] = await Promise.all([
      rn(n),
      rn(r)
    ]), s = o.map(
      (u, f) => qT(n[f], u)
    ), a = i.map(
      (u, f) => _T(r[f], u)
    ), l = JT(e, t, s, a);
    return !l.logoAssetUrl && s.length === 0 && a.length === 0 ? (jn(
      "brand kit",
      `Brand kit ${e} (${l.brandKitName}) has no colors, fonts, or logo linked`,
      "Add brandKitToColor / brandKitToFont relations and a logo asset on the brand kit."
    ), Qo(Pr(e))) : (s.length === 0 ? ze("brand kit colors", `Brand kit ${e} has no colors linked`, "Link colors via brandKitToColor.") : F("brand kit colors", `Loaded ${s.length} color(s) for brand kit ${e}`), a.length === 0 ? ze("brand kit fonts", `Brand kit ${e} has no fonts linked`, "Link fonts via brandKitToFont.") : F("brand kit fonts", `Loaded ${a.length} font(s) for brand kit ${e}`), l.logoAssetUrl || ze("brand kit logo", `Brand kit ${e} has no logo asset`, "Set logoAssetUrl on the brand kit entity."), Qo({
      ...Pr(e),
      ...l,
      colors: s.length > 0 ? s : Pr(e).colors,
      fonts: a.length > 0 ? a : Pr(e).fonts
    }));
  } catch (t) {
    return jn("brand kit", t, `Could not load brand kit entity ${e}.`), Qo(Pr(e));
  }
}
function wk(e, t) {
  const n = Rh(e.id, t, e.zones);
  return n.templateName !== e.templateName || n.canvasWidth !== e.canvasWidth || n.canvasHeight !== e.canvasHeight || n.designerDocumentJson !== e.designerDocumentJson;
}
async function Li(e, t, n, r) {
  var f;
  if (!((f = S == null ? void 0 : S.raw) != null && f.putAsync))
    throw new Error(`Content Hub client is not available for saving ${n}.`);
  if (Object.keys(t).length === 0)
    return !0;
  const o = await $(e), i = lC(o, t, r), s = await S.raw.putAsync(`/api/entities/${e}`, i);
  if (s.isSuccessStatusCode)
    return !0;
  const a = s.statusCode ?? "unknown", l = s.content != null && typeof s.content == "object" ? String(s.content.Message ?? "") : "", u = l ? `: ${l}` : "";
  if (a === 403 || a === 401)
    return ze(
      n,
      `Permission denied (${a}) updating entity ${e}${u}`,
      "Grant update permission on this entity definition for your role."
    ), !1;
  throw new Error(
    `Content Hub API error (${a}) saving ${n} on entity ${e}${u}`
  );
}
async function Wh(e, t) {
  return Li(e, t, "template properties", "EPAM.Template");
}
async function Zf(e, t = []) {
  var l;
  if (!((l = S == null ? void 0 : S.raw) != null && l.postAsync))
    throw new Error("Content Hub client is not available for saving template zones.");
  const n = await $(e.id);
  wk(e, n) && (await Wh(e.id, bh(e)) ? F("template properties", `Saved properties on template ${e.id}`) : fe(
    "template properties",
    `Skipped property update on template ${e.id}; continuing with zone save.`
  ));
  const r = await el(S, n.relations), o = Ek(
    n.relations,
    r.templateChildRelations
  ), i = [], s = /* @__PURE__ */ new Set();
  for (const u of t)
    !e.zones.some((c) => c.id === u.id) && hc(u.id) && s.add(u.id);
  const a = [...e.zones].sort((u, f) => u.sortOrder - f.sortOrder);
  for (const u of a) {
    const f = t.find((E) => E.id === u.id);
    if (!(!f || !jT(u, f))) {
      i.push(u);
      continue;
    }
    if (hc(u.id)) {
      await kk(u.id, u), i.push(u);
      continue;
    }
    const m = await Pk(u);
    await Ck(
      e.id,
      m,
      o,
      n.relations,
      r
    ), i.push({ ...u, id: m }), F("template zone", `Created EPAM.TemplateZone ${m} (${u.zoneKey}) and linked to template ${e.id}`);
  }
  for (const u of s)
    await Sk(e.id, u, o, n.relations);
  return F("template zones", `Saved ${i.length} template zone(s) on template ${e.id}`), { ...e, zones: i };
}
function Ek(e, t = []) {
  const n = [
    ...t,
    ...Gh(e)
  ];
  for (const r of n)
    if (Je(e, r))
      return r;
  return t[0] ?? wi[0];
}
async function Ck(e, t, n, r, o) {
  const i = o ?? await el(S, r);
  let s;
  try {
    const c = await $(t);
    s = c.relations, aC(t, c);
  } catch {
    s = void 0;
  }
  const a = lt(s, /template/i).filter(
    (c) => !/collection|asset/i.test(c)
  ), l = qo(
    [...a, ...i.zoneParentRelations, ...fa],
    s,
    /zone.*template|template/i
  );
  for (const c of l)
    if (await io(S, t, e, c, s)) {
      F("template zone link", `Linked zone ${t} to template ${e} via parent relation ${c}`);
      return;
    }
  const u = qo(
    [n, ...i.templateChildRelations, ...wi],
    r,
    /template.*zone/i
  ).filter((c) => !!Je(r, c));
  for (const c of u)
    if (await Yt(S, e, t, c, r)) {
      F("template zone link", `Linked zone ${t} to template ${e} via child relation ${c}`);
      return;
    }
  const f = qo(
    [n, ...i.templateChildRelations, ...wi],
    r,
    /template.*zone/i
  ).filter((c) => !Je(r, c));
  for (const c of f)
    if (await Yt(S, e, t, c, r)) {
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
async function cn(e, t, n) {
  if (Object.keys(t).length === 0)
    return !0;
  try {
    return await Li(e, t, n);
  } catch (r) {
    return fe(
      n,
      `Optional property update skipped for entity ${e}: ${r instanceof Error ? r.message : String(r)}`
    ), !1;
  }
}
async function du(e, t, n) {
  const r = await $(e), o = Ff(e, r);
  return (await Ch(S, $, o, r)).zoneType;
}
async function Tk(e, t, n) {
  const r = lo(t), o = await PC(S), i = AC(n), s = i || DC(o), a = async () => {
    for (const u of UT(
      r.zoneType,
      o.propertyNames
    ))
      if (await cn(e, u, "template zone type"), await du(
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
  if (s) {
    const u = await EC(
      S,
      $,
      e,
      r.zoneType,
      n
    ), f = await du(
      e,
      r.zoneKey,
      r.zoneLabel
    );
    if (f === r.zoneType)
      return !0;
    u && fe(
      "template zone type",
      `Relation link reported success for zone ${e} but reload still reads "${f}".`
    );
  }
  if (!i && SC(o) && await a())
    return !0;
  const l = await du(
    e,
    r.zoneKey,
    r.zoneLabel
  );
  return fe(
    "template zone type",
    `Zone ${e} (${r.zoneKey}) still reads as "${l}" after save; expected "${r.zoneType}".`
  ), l === r.zoneType;
}
async function Jh(e, t) {
  const n = lo(t), r = await $(e), o = Ff(e, r), i = QT(n, o);
  if (Object.keys(i).length > 0 && !await cn(e, i, "template zone identity") && i.zoneLabel != null) {
    const c = n.zoneLabel || n.zoneKey;
    await cn(
      e,
      { Title: { Invariant: c } },
      "template zone title"
    );
  }
  const s = await Tk(e, n, r), a = await cn(
    e,
    FT(n, o),
    "template zone flags"
  );
  if (!s && !a)
    throw new Error(
      `Could not save zone type "${n.zoneType}" on template zone ${e} (${n.zoneKey}).`
    );
  s || fe(
    "template zone type",
    `Zone flags saved on ${e}, but zone type "${n.zoneType}" may not have persisted in Content Hub.`
  );
  const l = Lh(n, o);
  Object.keys(l).length > 0 && await cn(e, l, "template zone layout");
  const u = Ih(n, o);
  Object.keys(u).length > 0 && await cn(e, u, "template zone optional");
}
async function kk(e, t) {
  try {
    await Jh(e, t);
  } catch (n) {
    throw new Error(
      `Permission denied updating template zone ${e} (${t.zoneKey}). Grant Update on EPAM.TemplateZone. ${n instanceof Error ? n.message : String(n)}`
    );
  }
  F("template zone", `Updated EPAM.TemplateZone ${e} (${t.zoneKey}, type ${t.zoneType})`);
}
async function Pk(e) {
  var i;
  const t = S.raw;
  if (!(t != null && t.postAsync))
    throw new Error("Content Hub client does not support creating template zones.");
  const n = [
    zh(e),
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
    o = String(a.statusCode ?? "unknown"), fe(
      "template zone create",
      `Create attempt failed (${o}) for ${e.zoneKey} with keys: ${Object.keys(s).join(", ")}`
    );
  }
  if (!r)
    throw new Error(
      `Failed to create template zone ${e.zoneKey} (HTTP ${o}). Check Create permission on EPAM.TemplateZone.`
    );
  try {
    await Jh(r, e);
  } catch (s) {
    fe(
      "template zone create",
      `Zone ${r} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return r;
}
async function Sk(e, t, n, r) {
  const o = await el(S, r);
  let i;
  try {
    i = (await $(t)).relations;
  } catch {
    i = void 0;
  }
  const s = qo(
    [...o.zoneParentRelations, ...fa],
    i,
    /zone.*template/i
  );
  for (const l of s)
    if (await yh(S, t, e, l, i)) {
      F("template zone unlink", `Cleared parent ${e} from zone ${t} via ${l}`);
      return;
    }
  const a = qo(
    [n, ...o.templateChildRelations, ...wi],
    r,
    /template.*zone/i
  ).filter((l) => !!Je(r, l));
  for (const l of a)
    if (await po(S, e, t, l, r)) {
      F("template zone unlink", `Removed zone ${t} from template ${e} via ${l}`);
      return;
    }
  ze(
    "template zone unlink",
    `Could not remove zone ${t} from template ${e}`,
    "The new zone was created and linked, but the previous zone link may need to be removed manually in Content Hub."
  );
}
async function Dk(e, t, n) {
  var i;
  const r = jf(n), o = t.imageAssetId || (r[0] != null ? String(r[0]) : void 0);
  if (!o)
    return t;
  if ((i = t.imageAssetUrl) != null && i.trim())
    return { ...t, imageAssetId: o };
  try {
    const s = await $(o), a = mo(o, s);
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
async function Vh(e) {
  const t = await $(e), n = Yf(t.relations), r = await vi(
    S,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await rn(r.ids)).map((i, s) => mo(r.ids[s], i)).filter((i) => i != null);
}
async function qh(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await $(n), i = Yf(o.relations);
  for (const a of i)
    if (await Yt(
      S,
      n,
      r,
      a,
      o.relations
    ))
      return F(
        "template allowed asset",
        `Linked asset ${r} to template ${n} via ${a}`
      ), !0;
  if ((s = S == null ? void 0 : S.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await S.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return F(
          "template allowed asset",
          `Linked asset ${r} to template ${n} via ${a}`
        ), !0;
  }
  return ze(
    "template allowed asset",
    `Could not link asset ${r} to template ${n}`,
    "Create a child relation on EPAM.Template to M.Asset (e.g. templateToAllowedAsset)."
  ), !1;
}
async function Bk(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await $(n), i = Yf(o.relations);
  for (const s of i)
    if (await po(
      S,
      n,
      r,
      s,
      o.relations
    ))
      return F(
        "template allowed asset",
        `Removed asset ${r} from template ${n} via ${s}`
      ), !0;
  return !1;
}
async function _h(e, t = []) {
  const n = [...new Set(t.map((i) => i.trim()).filter(Boolean))];
  if (n.length === 0)
    return;
  const r = await Vh(e), o = new Set(r.map((i) => i.id));
  for (const i of n)
    o.has(i) || await qh(e, i);
}
async function Ok(e) {
  const t = await $(e);
  return jf(t).map(String);
}
let $n = null;
async function Nk(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await $(n), i = ik(o.relations), s = i.filter((c) => !!Je(o.relations, c)), a = $n == null ? void 0 : $n.name, l = [
    ...new Set(
      [
        a,
        ...s,
        // Prefer the known-good name before spraying aliases that 404.
        "zoneValueToSelectedAsset",
        ...i
      ].filter((c) => !!c)
    )
  ].slice(0, a || s.length > 0 ? 3 : 4), u = await Ok(n);
  for (const c of u)
    if (c !== r)
      for (const m of l)
        await po(
          S,
          n,
          c,
          m,
          o.relations
        ), await yh(
          S,
          n,
          c,
          m,
          o.relations
        );
  if (u.includes(r))
    return !0;
  const f = ($n == null ? void 0 : $n.mode) === "child" ? ["child", "parent"] : ["parent", "child"];
  for (const c of f)
    for (const m of l)
      if (c === "parent" ? await io(
        S,
        n,
        r,
        m,
        o.relations
      ) : await Yt(
        S,
        n,
        r,
        m,
        o.relations
      ))
        return $n = { name: m, mode: c }, F(
          "zone value selected asset",
          `Linked asset ${r} to zone value ${n} via ${m} (${c})`
        ), !0;
  return ze(
    "zone value selected asset",
    `Could not link asset ${r} to zone value ${n}`,
    "Create a relation on EPAM.MarketingAssetZoneValue to M.Asset (e.g. zoneValueToSelectedAsset)."
  ), !1;
}
async function Mk(e, t) {
  var n;
  (n = t.imageAssetId) != null && n.trim() && await Nk(e, t.imageAssetId);
}
async function xk(e) {
  const t = await $(e), n = Gf(t.relations), r = await vi(
    S,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await rn(r.ids)).map((i, s) => mo(r.ids[s], i)).filter((i) => i != null);
}
async function bk(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await $(n), i = Gf(o.relations);
  for (const a of i)
    if (await Yt(
      S,
      n,
      r,
      a,
      o.relations
    ))
      return F(
        "zone allowed asset",
        `Linked asset ${r} to zone ${n} via ${a}`
      ), !0;
  if ((s = S == null ? void 0 : S.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await S.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return F(
          "zone allowed asset",
          `Linked asset ${r} to zone ${n} via ${a}`
        ), !0;
  }
  return ze(
    "zone allowed asset",
    `Could not link asset ${r} to zone ${n}`,
    "Create a child relation on EPAM.TemplateZone to M.Asset (e.g. templateZoneToAllowedAsset)."
  ), !1;
}
async function zk(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await $(n), i = Gf(o.relations);
  for (const s of i)
    if (await po(
      S,
      n,
      r,
      s,
      o.relations
    ))
      return F(
        "zone allowed asset",
        `Removed asset ${r} from zone ${n} via ${s}`
      ), !0;
  return !1;
}
async function $h(e) {
  const t = await $(e), n = [
    .../* @__PURE__ */ new Set([
      ...Rf,
      ...lt(t.relations, /asset/i)
    ])
  ].filter((i) => Je(t.relations, i)), r = await vi(
    S,
    e,
    t.relations,
    n
  );
  return r.ids.length === 0 ? [] : (await rn(r.ids)).map((i, s) => mo(r.ids[s], i)).filter((i) => i != null);
}
function ey(e) {
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
function Lk(e) {
  var n;
  const t = [];
  for (const r of ey(e)) {
    if (typeof r == "number" && Number.isFinite(r)) {
      t.push(r);
      continue;
    }
    if (!r || typeof r != "object")
      continue;
    const o = r, i = (n = o.systemProperties) == null ? void 0 : n.id, s = o.id ?? o.entityId ?? i;
    typeof s == "number" && Number.isFinite(s) ? t.push(s) : typeof s == "string" && /^\d+$/.test(s.trim()) && t.push(Number(s.trim()));
  }
  return t.length > 0 ? [...new Set(t)] : [...new Set(bf(e))];
}
function Ik(e, t) {
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
async function ty(e) {
  const n = ey(e).map((i) => MC(i)).filter((i) => i != null);
  if (n.length > 0)
    return n;
  const r = Lk(e).slice(0, 48);
  return r.length === 0 ? [] : (await rn(r)).map((i, s) => mo(r[s], i)).filter((i) => i != null);
}
async function Rk(e) {
  var n;
  if (!((n = S == null ? void 0 : S.raw) != null && n.postAsync))
    return [];
  const t = [9815, void 0];
  for (const r of t)
    try {
      const o = await S.raw.postAsync(
        "/api/search",
        Ik(e, r)
      );
      if (!o.isSuccessStatusCode || o.content == null)
        continue;
      const i = await ty(o.content);
      if (i.length > 0)
        return F(
          "asset search",
          `Found ${i.length} approved asset(s) via /api/search${r != null ? ` (component ${r})` : ""}`
        ), i;
    } catch {
    }
  return [];
}
async function Qk(e) {
  var o;
  const t = await Rk(e);
  if (t.length > 0)
    return t;
  if (!((o = S == null ? void 0 : S.raw) != null && o.getAsync))
    return [];
  const n = (e == null ? void 0 : e.trim()) || "*", r = [
    `/api/entities/search?query=${encodeURIComponent(n)}&definitionNames=M.Asset&take=48`,
    `/api/entities/search?fullText=${encodeURIComponent(n)}&definitionNames=M.Asset&take=48`
  ];
  for (const i of r)
    try {
      const s = await S.raw.getAsync(i);
      if (!s.isSuccessStatusCode || s.content == null)
        continue;
      const a = await ty(s.content);
      if (a.length > 0)
        return F("asset search", `Found ${a.length} Content Hub asset(s) via entity search`), a;
    } catch {
    }
  return [];
}
async function Cp(e) {
  var r, o;
  const t = (r = e == null ? void 0 : e.collectionId) == null ? void 0 : r.trim(), n = e == null ? void 0 : e.query;
  if ((o = S == null ? void 0 : S.raw) != null && o.getAsync)
    try {
      if (t) {
        const i = op(await $h(t), n);
        if (i.length > 0)
          return F(
            "asset search",
            `Loaded ${i.length} asset(s) from collection ${t}`
          ), i;
        ze(
          "asset search",
          `No assets found in collection ${t}`,
          "Verify AssetCollectionToAsset links or try Image URL."
        );
      } else {
        const i = op(await Qk(n), n);
        if (i.length > 0)
          return i;
      }
    } catch (i) {
      ze("asset search", i, "Falling back to proxy or demo assets.");
    }
  if (t)
    try {
      const i = await vc(
        `/assets/search?collectionId=${t}${n ? `&q=${encodeURIComponent(n)}` : ""}`
      );
      if (i.length > 0)
        return i;
    } catch (i) {
      jn("asset search", i);
    }
  return jn("asset search", "Using demo asset results"), NT(n);
}
async function Hk(e) {
  var r;
  const t = [
    ...new Set(
      e.map((o) => Number(o)).filter((o) => Number.isFinite(o) && o > 0)
    )
  ];
  return t.length === 0 || !((r = S == null ? void 0 : S.raw) != null && r.getAsync) ? [] : (await rn(t)).map((o, i) => mo(t[i], o)).filter((o) => o != null);
}
async function Uk(e, t) {
  var s;
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await $(n), i = [
    .../* @__PURE__ */ new Set([
      ...Rf,
      ...lt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const a of i)
    if (await Yt(
      S,
      n,
      r,
      a,
      o.relations
    ))
      return F(
        "asset collection",
        `Linked asset ${r} to collection ${n} via ${a}`
      ), !0;
  if ((s = S == null ? void 0 : S.raw) != null && s.postAsync) {
    for (const a of i)
      if ((await S.raw.postAsync(
        `/api/entities/${n}/relations/${a}`,
        { child: { href: `/api/entities/${r}` } }
      )).isSuccessStatusCode)
        return F(
          "asset collection",
          `Linked asset ${r} to collection ${n} via ${a}`
        ), !0;
  }
  return ze(
    "asset collection",
    `Could not add asset ${r} to collection ${n}`,
    "Verify AssetCollectionToAsset exists on the collection definition."
  ), !1;
}
async function Fk(e, t) {
  const n = e.trim(), r = t.trim();
  if (!n || !r)
    return !1;
  const o = await $(n), i = [
    .../* @__PURE__ */ new Set([
      ...Rf,
      ...lt(o.relations, /asset/i),
      "AssetCollectionToAsset",
      "M.AssetCollectionToAsset"
    ])
  ];
  for (const s of i)
    if (await po(
      S,
      n,
      r,
      s,
      o.relations
    ))
      return F(
        "asset collection",
        `Removed asset ${r} from collection ${n} via ${s}`
      ), !0;
  return !1;
}
async function ny(e, t) {
  return Li(e, t, "marketing asset properties", "EPAM.MarketingAsset");
}
const ry = ["EPAM.MarketingAssetZoneValue", "MarketingAssetZoneValue"];
function jk(e) {
  if (e == null || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.error;
  return typeof n == "string" ? n.trim() : "";
}
function Gk(e) {
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
async function oy(e, t) {
  const n = await da(S, ry[0]);
  await cn(
    e,
    MT(t),
    "zone value title"
  );
  const r = xh(t);
  if (Object.keys(r).length > 0) {
    const o = bT(t, n);
    if (Object.keys(o).length > 0) {
      if (!await cn(e, o, "zone value content")) {
        const s = {};
        for (const [a, l] of Object.entries(o))
          l != null && typeof l == "object" && !Array.isArray(l) && typeof l.Invariant == "string" ? s[a] = l.Invariant : s[a] = l;
        await cn(e, s, "zone value content plain");
      }
    } else
      fe(
        "zone value content",
        `No matching content properties on EPAM.MarketingAssetZoneValue for zone ${t.zoneKey} (definition has: ${n.map((i) => i.name).join(", ") || "(none)"}). Text/html will persist via zoneLayoutJson fallback.`
      );
  }
  await Mk(e, t);
}
async function Yk(e) {
  var i;
  if (!((i = S == null ? void 0 : S.raw) != null && i.postAsync))
    throw new Error("Content Hub client is not available for creating zone values.");
  const t = [
    { Title: { Invariant: e.zoneKey } },
    { Title: e.zoneKey },
    {}
  ];
  let n = null, r = "unknown", o = "";
  for (const s of ry) {
    for (const a of t) {
      const l = await S.raw.postAsync("/api/entities", {
        entitydefinition: {
          href: `/api/entitydefinitions/${s}`
        },
        properties: a
      }), u = Gk(l.content);
      if (l.isSuccessStatusCode && u) {
        n = u, F(
          "zone value create",
          `Created ${s} ${u} for ${e.zoneKey} with keys: ${Object.keys(a).join(", ") || "(none)"}`
        );
        break;
      }
      r = String(l.statusCode ?? "unknown"), o = jk(l.content), fe(
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
    await oy(n, e);
  } catch (s) {
    fe(
      "zone value create",
      `Zone value ${n} (${e.zoneKey}) created but property update failed: ${s instanceof Error ? s.message : String(s)}`
    );
  }
  return n;
}
async function Kk(e) {
  if (!e.id)
    throw new Error(`Zone value for ${e.zoneKey} has no entity id.`);
  try {
    await oy(e.id, e), F("zone value", `Updated EPAM.MarketingAssetZoneValue ${e.id} (${e.zoneKey})`);
  } catch (t) {
    throw new Error(
      `Failed to update zone value ${e.id} (${e.zoneKey}). Grant Update on EPAM.MarketingAssetZoneValue. ${t instanceof Error ? t.message : String(t)}`
    );
  }
}
async function Zk(e, t, n) {
  var o;
  const r = [
    ...lt(n, /zonevalue/i),
    "marketingAssetToZoneValue",
    "MarketingAssetToZoneValue",
    "EPAM.MarketingAssetToZoneValue"
  ];
  for (const i of [...new Set(r)])
    if (await Yt(
      S,
      e,
      t,
      i,
      n
    ))
      return;
  if (!((o = S == null ? void 0 : S.raw) != null && o.postAsync))
    throw new Error("Content Hub client is not available for linking zone values.");
  for (const i of [...new Set(r)])
    if ((await S.raw.postAsync(
      `/api/entities/${e}/relations/${i}`,
      {
        child: { href: `/api/entities/${t}` }
      }
    )).isSuccessStatusCode)
      return;
  ze(
    "marketingAssetToZoneValue link",
    `Could not link zone value ${t} to asset ${e}`,
    "The zone value entity was saved but the relation link may need to be created manually."
  );
}
async function Xk(e, t) {
  var a;
  const n = await $(e), r = [...new Set(Fh(n))], o = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const l = await rn(r);
    for (let u = 0; u < r.length; u += 1) {
      const f = Qh(r[u], l[u]);
      o.has(f.zoneKey) || o.set(f.zoneKey, f);
    }
  }
  const i = [], s = /* @__PURE__ */ new Set();
  for (const l of t) {
    if (!((a = l.zoneKey) != null && a.trim()) || s.has(l.zoneKey))
      continue;
    if (!zT(l)) {
      fe("zone value save", `Skipped empty zone value for ${l.zoneKey}`);
      continue;
    }
    s.add(l.zoneKey);
    const u = l.id ? l : o.get(l.zoneKey), f = u != null && u.id ? { ...l, id: u.id } : { ...l, id: void 0 };
    if (f.id) {
      await Kk(f), i.push(f);
      continue;
    }
    const c = await Yk(f), m = { ...f, id: c };
    await Zk(e, c, n.relations), i.push(m);
  }
  return F("zone values", `Saved ${i.length} EPAM.MarketingAssetZoneValue record(s)`), i;
}
async function Wk(e) {
  const t = LT(e);
  if (Object.keys(t).length === 0)
    return e;
  if (!await ny(e.id, t))
    throw new Error(
      `Could not save marketing asset ${e.id}. Grant Update on EPAM.MarketingAsset and ensure properties such as zoneLayoutJson exist on the definition.`
    );
  return F("marketing asset properties", `Saved properties on marketing asset ${e.id}`), e;
}
const Jk = "designerDocumentJson", Vk = "designerInstanceJson", Fr = "EPAM.Template", ms = "EPAM.BuilderMarketingAsset";
function iy(e) {
  return (e == null ? void 0 : e.trim()) || Vk;
}
function qk(e) {
  const t = e.split("/").filter(Boolean);
  return decodeURIComponent(t[t.length - 1] ?? Fr);
}
function _k(e, t) {
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
async function sy(e, t) {
  if (t != null && t.trim())
    return t.trim().replace(/^EPAM\./, "");
  const n = e.properties ?? {};
  for (const r of Object.keys(n))
    if (/designerDocumentJson/i.test(r))
      return r.replace(/^EPAM\./, "");
  try {
    const r = zf(e, Fr), o = qk(r), s = (await da(S, o)).find((a) => /designerDocumentJson/i.test(a.name));
    if (s)
      return s.name.replace(/^EPAM\./, "");
  } catch {
  }
  return Jk;
}
async function $k(e, t) {
  const n = await $(e), r = n.properties ?? {}, o = await sy(n, t);
  return _k(r, o);
}
async function eP(e, t, n, r) {
  if (!(e != null && e.trim()) || !hc(e.trim()))
    throw new Error(JE());
  const o = await $(e), i = await sy(o, n), s = RT(t, r, i);
  try {
    if (!await Li(
      e,
      s,
      "template designer document",
      Fr
    ))
      throw new Error(
        `Could not save designer document on ${Fr} ${e}. Ensure property "${i}" exists on the template definition and your role can Update it.`
      );
  } catch (a) {
    throw a instanceof Error && a.message.includes("Could not save designer document") ? a : new Error(
      `Could not save designer document on ${Fr} ${e}. Ensure property "${i}" exists on EPAM.Template and your role can Update it. ${a instanceof Error ? a.message : String(a)}`
    );
  }
  return F(
    "template designer document",
    `Saved ${i} on ${Fr} ${e}`
  ), !0;
}
async function tP(e, t) {
  const r = (await $(e)).properties ?? {}, o = iy(t), i = [`EPAM.${o}`, o, o.replace(/^./, (s) => s.toUpperCase())];
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
async function nP(e, t, n) {
  const r = iy(n), o = { [r]: t };
  try {
    if (!await Li(
      e,
      o,
      "builder marketing asset designer instance",
      ms
    ))
      throw new Error(
        `Could not save designer instance on ${ms} ${e}. Ensure property "${r}" exists and your role can Update it.`
      );
  } catch (i) {
    throw i instanceof Error && i.message.includes("Could not save designer instance") ? i : new Error(
      `Could not save designer instance on ${ms} ${e}. Ensure property "${r}" exists and your role can Update it. ${i instanceof Error ? i.message : String(i)}`
    );
  }
  return F(
    "builder marketing asset designer instance",
    `Saved ${r} on ${ms} ${e}`
  ), !0;
}
const rP = {
  getTemplate: al,
  listTemplatesForBrandKit: Xh,
  duplicateTemplate: pk,
  createTemplate: mk,
  linkMarketingAssetToTemplate: gk,
  listTemplates: async (e) => {
    try {
      return await vc(`/entities/EPAM.Template${e ? `?channelType=${e}` : ""}`);
    } catch (t) {
      return jn("template list", t), [ST(vp)];
    }
  },
  saveTemplate: Zf,
  getBrandKit: vk,
  getMarketingAsset: yk,
  createMarketingAsset: async (e) => {
    try {
      return await vc("/entities/EPAM.MarketingAsset", {
        method: "POST",
        body: JSON.stringify(e)
      });
    } catch (t) {
      return jn("marketing asset create", t), OT("dummy-asset", e.templateId || vp);
    }
  },
  updateMarketingAsset: Wk,
  saveMarketingAssetZoneValues: Xk,
  updateMarketingAssetProperties: ny,
  getTemplateDesignerDocument: $k,
  saveTemplateDesignerDocument: eP,
  getMarketingAssetDesignerInstance: tP,
  saveMarketingAssetDesignerInstance: nP,
  uploadRenderedOutput: async (e, t, n) => {
    if (!sk())
      return fe(
        "rendered output upload",
        `Skipped upload for ${n} — no asset upload proxy is configured on this Content Hub instance.`
      ), { skipped: !0, fileName: n, assetId: e };
    try {
      const r = new FormData();
      r.append("file", t, n), r.append("linkToEntity", "EPAM.MarketingAsset"), r.append("linkToEntityId", e), r.append("relationName", "marketingAssetToRenderedOutput");
      const o = await fetch(`${Kf}/assets/upload`, {
        method: "POST",
        body: r
      });
      if (!o.ok)
        throw new Error(`Asset upload failed (${o.status})`);
      return o.json();
    } catch (r) {
      return jn("rendered output upload", r), { skipped: !0, fileName: n, assetId: e };
    }
  },
  searchAssets: Cp,
  searchAssetsInCollection: async (e, t) => Cp({ collectionId: e, query: t }),
  getCollectionAssets: $h,
  getZoneAllowedAssets: xk,
  getTemplateAllowedAssets: Vh,
  getAssetsByIds: Hk,
  addAssetToCollection: Uk,
  removeAssetFromCollection: Fk,
  addAllowedAssetToTemplate: qh,
  removeAllowedAssetFromTemplate: Bk,
  addAllowedAssetToZone: bk,
  removeAllowedAssetFromZone: zk
};
function ay(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function oP(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function iP({
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
      s = /* @__PURE__ */ k(
        "div",
        {
          className: "chd-layer-frame",
          style: { background: e.fill || "#ffffff" }
        }
      );
      break;
    case "rect":
      s = /* @__PURE__ */ k(
        "div",
        {
          className: "chd-layer-rect",
          style: { background: e.fill || "#888780" }
        }
      );
      break;
    case "text":
      s = /* @__PURE__ */ k(
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
      s = e.src ? /* @__PURE__ */ k(
        "img",
        {
          className: `chd-layer-image${e.objectFit === "contain" || /logo/i.test(e.name) ? " chd-layer-image--contain" : ""}`,
          style: { background: e.fill || "transparent" },
          src: e.src,
          alt: e.name,
          draggable: !1
        }
      ) : /* @__PURE__ */ k("div", { className: "chd-layer-image-placeholder", style: { background: e.fill || "#e8e6e1" }, children: e.name || "Image" });
      break;
  }
  return /* @__PURE__ */ H(
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
        e.locked ? /* @__PURE__ */ k(
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
            children: /* @__PURE__ */ H("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: [
              /* @__PURE__ */ k("rect", { x: "2", y: "5.5", width: "8", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.3" }),
              /* @__PURE__ */ k(
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
const sP = "data:image/png;base64,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", wc = {
  primary: "#00a651",
  secondary: "#000000",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  text: "#000000",
  muted: "#6b716e"
};
function gs(e) {
  return typeof e == "boolean" ? e : void 0;
}
function hs(e) {
  return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function aP(e) {
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
let lP = 1;
function Uo() {
  return `layer-${Date.now().toString(36)}-${lP++}`;
}
function Ec(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: Uo(),
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
        id: Uo(),
        type: e,
        name: "Rectangle",
        x: n,
        y: r,
        width: 160,
        height: 100,
        visible: !0,
        fill: wc.primary,
        locked: !1,
        allowTransform: !1,
        editableContent: !1
      };
    case "text":
      return {
        id: Uo(),
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
        id: Uo(),
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
function ly() {
  const e = Ec("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = wc.secondary;
  const t = Ec("image", { x: 120, y: 140 });
  return t.name = "Logo", t.width = 240, t.height = 80, t.src = sP, t.objectFit = "contain", t.fill = "#ffffff", t.locked = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: wc.background
    },
    layers: [e, t]
  };
}
function ct(e) {
  return JSON.parse(JSON.stringify(e));
}
function uy(e) {
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
    const u = typeof a.id == "string" ? a.id : Uo(), f = typeof a.name == "string" ? a.name : l, c = Number(a.x), m = Number(a.y), E = Number(a.width), w = Number(a.height);
    if (![c, m, E, w].every(Number.isFinite))
      continue;
    const v = {
      id: u,
      type: l,
      name: f,
      x: c,
      y: m,
      width: E,
      height: w,
      rotation: typeof a.rotation == "number" ? a.rotation : void 0,
      visible: a.visible !== !1,
      locked: !!a.locked,
      allowTransform: !!a.allowTransform,
      fill: typeof a.fill == "string" ? a.fill : void 0,
      text: typeof a.text == "string" ? a.text : void 0,
      fontSize: typeof a.fontSize == "number" ? a.fontSize : void 0,
      color: typeof a.color == "string" ? a.color : void 0,
      src: typeof a.src == "string" ? a.src : void 0,
      pinLeft: gs(a.pinLeft),
      pinRight: gs(a.pinRight),
      pinTop: gs(a.pinTop),
      pinBottom: gs(a.pinBottom),
      marginTop: hs(a.marginTop),
      marginRight: hs(a.marginRight),
      marginBottom: hs(a.marginBottom),
      marginLeft: hs(a.marginLeft),
      pageLayouts: aP(a.pageLayouts),
      objectFit: a.objectFit === "contain" || a.objectFit === "cover" ? a.objectFit : void 0
    };
    typeof a.editableContent == "boolean" ? v.editableContent = a.editableContent : v.editableContent = l === "text" || l === "image", i.push(v);
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
function cy(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function ll(e) {
  return e.locked ? !1 : cy(e);
}
function Ii(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function Xf(e, t) {
  return t === "admin" ? !0 : e.visible ? ll(e) || Ii(e) : !1;
}
function uP(e, t, n) {
  const r = {}, o = new Map(e.layers.map((i) => [i.id, i]));
  for (const i of t.layers) {
    const s = o.get(i.id);
    if (!s)
      continue;
    const a = {};
    Ii(s) && (i.x !== s.x && (a.x = i.x), i.y !== s.y && (a.y = i.y), i.width !== s.width && (a.width = i.width), i.height !== s.height && (a.height = i.height)), ll(s) && ((i.text ?? "") !== (s.text ?? "") && (a.text = i.text), (i.fill ?? "") !== (s.fill ?? "") && (a.fill = i.fill), (i.color ?? "") !== (s.color ?? "") && (a.color = i.color), (i.src ?? "") !== (s.src ?? "") && (a.src = i.src)), Object.keys(a).length > 0 && (r[i.id] = a);
  }
  return { version: 1, templateId: n, overrides: r };
}
function cP(e, t) {
  const n = {};
  return Ii(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), ll(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const bn = 24, Tp = 1, fy = 0.25, dy = 3, fP = 8;
function ys(e, t) {
  return Math.abs(e - t) <= fP;
}
function vs(e, t) {
  return e === !0 ? !0 : e === !1 ? !1 : t;
}
function Wf(e) {
  return typeof e.pinLeft == "boolean" || typeof e.pinRight == "boolean" || typeof e.pinTop == "boolean" || typeof e.pinBottom == "boolean";
}
function dP(e, t, n) {
  return Wf(e) ? {
    left: e.pinLeft === !0,
    right: e.pinRight === !0,
    top: e.pinTop === !0,
    bottom: e.pinBottom === !0
  } : {
    left: vs(e.pinLeft, ys(e.x, 0)),
    right: vs(e.pinRight, ys(e.x + e.width, t)),
    top: vs(e.pinTop, ys(e.y, 0)),
    bottom: vs(e.pinBottom, ys(e.y + e.height, n))
  };
}
function ws(e, t) {
  const n = e[t];
  return typeof n == "number" && Number.isFinite(n) ? Math.max(0, n) : 0;
}
function Ti(e, t, n) {
  const r = dP(e, t, n), o = ws(e, "marginTop"), i = ws(e, "marginRight"), s = ws(e, "marginBottom"), a = ws(e, "marginLeft");
  let l = e.x, u = e.y, f = e.width, c = e.height;
  return r.left && r.right ? (l = a, f = Math.max(bn, t - a - i)) : r.left ? l = a : r.right && (l = t - i - f), r.top && r.bottom ? (u = o, c = Math.max(bn, n - o - s)) : r.top ? u = o : r.bottom && (u = n - s - c), { x: l, y: u, width: f, height: c };
}
function Ay(e, t, n) {
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
function ki(e) {
  const t = Dh(e.width, e.height, e.presetId);
  return t !== "custom" ? t : `${Math.round(e.width)}x${Math.round(e.height)}`;
}
function Es(e, t) {
  const n = e[t];
  return typeof n == "number" && Number.isFinite(n) ? Math.max(0, n) : 0;
}
function ma(e) {
  return {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    pinLeft: e.pinLeft === !0,
    pinRight: e.pinRight === !0,
    pinTop: e.pinTop === !0,
    pinBottom: e.pinBottom === !0,
    marginTop: Es(e, "marginTop"),
    marginRight: Es(e, "marginRight"),
    marginBottom: Es(e, "marginBottom"),
    marginLeft: Es(e, "marginLeft")
  };
}
function AP(e) {
  return { ...e };
}
function pP(e, t) {
  const n = ki(t);
  return {
    ...e,
    pageLayouts: {
      ...e.pageLayouts,
      [n]: ma(e)
    }
  };
}
function mP(e, t) {
  return pP(e, t);
}
function gP(e, t, n, r, o) {
  const i = {
    pinTop: e.pinTop === !0,
    pinLeft: e.pinLeft === !0,
    pinRight: e.pinRight === !0,
    pinBottom: e.pinBottom === !0,
    [t]: n
  }, s = { ...e, ...i };
  return {
    ...i,
    ...Ti(s, r, o)
  };
}
function hP(e, t, n, r, o) {
  const i = Math.max(0, Number.isFinite(n) ? n : 0), s = { ...e, [t]: i };
  return Wf(s) ? {
    [t]: i,
    ...Ti(s, r, o)
  } : { [t]: i };
}
function py(e, t, n) {
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
function yP(e, t) {
  const n = ma(e), r = { ...e.pageLayouts ?? {} };
  r[ki(t)] = n;
  const o = [
    ...zi.map((a) => ({
      key: a.id,
      width: a.width,
      height: a.height
    })),
    { key: ki(t), width: t.width, height: t.height }
  ], i = /* @__PURE__ */ new Set();
  for (const a of o) {
    if (i.has(a.key))
      continue;
    i.add(a.key);
    const l = Ti({ ...e, ...n }, a.width, a.height);
    r[a.key] = {
      ...n,
      ...l
    };
  }
  const s = Ti({ ...e, ...n }, t.width, t.height);
  return {
    ...n,
    ...s,
    pageLayouts: r
  };
}
function vP(e, t, n, r) {
  const o = e.canvas;
  if (o.width === t && o.height === n && (!r || o.presetId === r))
    return e;
  const i = ki(o), s = {
    ...o,
    width: t,
    height: n,
    presetId: r
  }, a = ki(s);
  return {
    ...e,
    canvas: s,
    layers: e.layers.map((l) => {
      const u = {
        ...l.pageLayouts,
        [i]: ma(l)
      }, f = u[a];
      if (f)
        return {
          ...l,
          ...AP(f),
          pageLayouts: u
        };
      const c = Wf(l) ? { ...l, ...Ti(l, t, n) } : l;
      return u[a] = ma(c), { ...c, pageLayouts: u };
    })
  };
}
const wP = 50, my = D.createContext(null);
function EP(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function kp(e, t, n) {
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
function CP({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: o,
  onDocumentChange: i,
  onInstanceChange: s
}) {
  const a = D.useRef(null);
  a.current || (a.current = n ? ct(n) : ly());
  const l = D.useRef(
    ct(r ?? n ?? a.current)
  ), u = D.useRef(t);
  u.current = t;
  const [f, c] = D.useState(() => ct(a.current)), [m, E] = D.useState([]), [w, v] = D.useState({
    zoom: Tp,
    panX: 40,
    panY: 40
  }), L = D.useRef([ct(a.current)]), p = D.useRef(0), [A, g] = D.useState(0), C = D.useRef(m);
  C.current = m;
  const h = D.useRef(f);
  h.current = f;
  const P = D.useRef(i);
  P.current = i;
  const T = D.useRef(s);
  T.current = s;
  const I = D.useRef(o);
  I.current = o;
  const G = D.useCallback(() => g((Y) => Y + 1), []), R = D.useCallback((Y) => {
    var O, N;
    if ((O = P.current) == null || O.call(P, ct(Y)), u.current === "endUser") {
      const z = I.current ?? "";
      (N = T.current) == null || N.call(
        T,
        uP(l.current, Y, z)
      );
    }
  }, []), K = D.useCallback(
    (Y) => {
      const O = L.current.slice(0, p.current + 1);
      for (O.push(ct(Y)); O.length > wP; )
        O.shift();
      L.current = O, p.current = O.length - 1, G();
    },
    [G]
  ), j = D.useCallback(
    (Y, O) => {
      c(Y), h.current = Y, O && K(Y), R(Y);
    },
    [R, K]
  ), Ee = D.useCallback(
    (Y) => {
      const O = u.current === "endUser";
      switch (Y.type) {
        case "ADD_LAYER": {
          if (O)
            return;
          const N = Ec(Y.layerType, Y.at);
          c((z) => {
            const x = { ...z, layers: [...z.layers, N] };
            return K(x), R(x), x;
          }), E([N.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const N = Y.pushHistory !== !1;
          c((z) => {
            const x = {
              ...z,
              layers: z.layers.map((J) => {
                if (J.id !== Y.id)
                  return J;
                const bt = O ? cP(J, Y.patch) : Y.patch;
                if (Object.keys(bt).length === 0)
                  return J;
                const Oe = { ...J, ...bt };
                return typeof Oe.width == "number" && (Oe.width = Math.max(bn, Oe.width)), typeof Oe.height == "number" && (Oe.height = Math.max(bn, Oe.height)), O ? Oe : mP(Oe, z.canvas);
              })
            };
            return N && K(x), R(x), x;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if (O)
            return;
          const N = new Set(Y.ids ?? C.current);
          if (N.size === 0)
            return;
          c((z) => {
            const x = {
              ...z,
              layers: z.layers.filter((J) => !N.has(J.id))
            };
            return K(x), R(x), x;
          }), E((z) => z.filter((x) => !N.has(x)));
          break;
        }
        case "SELECT": {
          E((N) => {
            const z = Y.ids.filter((x) => {
              const J = h.current.layers.find((bt) => bt.id === x);
              return J ? Xf(J, u.current) : !1;
            });
            if (Y.additive) {
              const x = new Set(N);
              for (const J of z)
                x.has(J) ? x.delete(J) : x.add(J);
              return Array.from(x);
            }
            return z;
          });
          break;
        }
        case "UNSELECT_ALL": {
          E([]);
          break;
        }
        case "REORDER": {
          if (O)
            return;
          c((N) => {
            const z = {
              ...N,
              layers: EP(N.layers, Y.fromIndex, Y.toIndex)
            };
            return K(z), R(z), z;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if (O)
            return;
          c((N) => {
            const z = {
              ...N,
              layers: N.layers.map(
                (x) => x.id === Y.id ? { ...x, visible: Y.visible } : x
              )
            };
            return K(z), R(z), z;
          });
          break;
        }
        case "BRING_FORWARD": {
          if (O)
            return;
          const N = C.current;
          c((z) => {
            const x = { ...z, layers: kp(z.layers, N, "forward") };
            return K(x), R(x), x;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if (O)
            return;
          const N = C.current;
          c((z) => {
            const x = { ...z, layers: kp(z.layers, N, "backward") };
            return K(x), R(x), x;
          });
          break;
        }
        case "ZOOM_SET": {
          v((N) => ({
            ...N,
            zoom: ay(Y.zoom, fy, dy)
          }));
          break;
        }
        case "ZOOM_RESET": {
          v({ zoom: Tp, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          v((N) => ({
            ...N,
            panX: Y.panX,
            panY: Y.panY
          }));
          break;
        }
        case "UNDO": {
          if (p.current <= 0)
            return;
          p.current -= 1;
          const N = ct(L.current[p.current]);
          c(N), h.current = N, E([]), G(), R(N);
          break;
        }
        case "REDO": {
          if (p.current >= L.current.length - 1)
            return;
          p.current += 1;
          const N = ct(L.current[p.current]);
          c(N), h.current = N, E([]), G(), R(N);
          break;
        }
        case "LOAD_DOCUMENT": {
          j(ct(Y.document), !0), E([]);
          break;
        }
        case "SET_CANVAS_SIZE": {
          if (O)
            return;
          c((N) => {
            const z = vP(N, Y.width, Y.height, Y.presetId);
            return z === N ? N : (K(z), R(z), z);
          });
          break;
        }
        case "PUSH_LAYER_TO_ALL_PAGES": {
          if (O)
            return;
          c((N) => {
            const z = {
              ...N,
              layers: N.layers.map((x) => x.id !== Y.id ? x : { ...x, ...yP(x, N.canvas) })
            };
            return K(z), R(z), z;
          });
          break;
        }
        case "COMMIT": {
          c((N) => (K(N), R(N), N));
          break;
        }
      }
    },
    [j, G, R, K]
  ), Et = D.useCallback(() => ct(f), [f]), Ct = D.useCallback(
    (Y) => {
      if (u.current === "endUser")
        return !1;
      try {
        const O = uy(JSON.parse(Y));
        return O ? (l.current = ct(O), j(O, !0), E([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [j]
  );
  D.useEffect(() => {
    t === "admin" && n && (l.current = ct(n)), t === "endUser" && r && (l.current = ct(r));
  }, [n, r, t]);
  const ut = D.useMemo(
    () => ({
      mode: t,
      templateId: o,
      document: f,
      selection: m,
      viewport: w,
      canUndo: p.current > 0,
      canRedo: p.current < L.current.length - 1,
      dispatch: Ee,
      exportDocument: Et,
      importDocumentJson: Ct
    }),
    [t, o, f, m, w, Ee, Et, Ct, A]
  );
  return /* @__PURE__ */ k(my.Provider, { value: ut, children: e });
}
function gr() {
  const e = D.useContext(my);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function Jf() {
  return gr().mode;
}
function ul() {
  return gr().document;
}
function gy() {
  return gr().document.layers;
}
function cl() {
  return gr().selection;
}
function hy() {
  return gr().viewport;
}
function fl() {
  return gr().dispatch;
}
function TP() {
  const e = gr();
  return {
    mode: e.mode,
    canUndo: e.canUndo,
    canRedo: e.canRedo,
    exportDocument: e.exportDocument,
    importDocumentJson: e.importDocumentJson,
    dispatch: e.dispatch
  };
}
const kP = ["nw", "ne", "sw", "se"];
function PP() {
  const e = ul(), t = cl(), n = hy(), r = fl(), o = Jf(), [i, s] = D.useState(null), [a, l] = D.useState(!1), u = D.useRef(n);
  u.current = n;
  const f = D.useRef(o);
  f.current = o, D.useEffect(() => {
    const h = (T) => {
      if (T.code === "Space" && !(T.target instanceof HTMLInputElement) && !(T.target instanceof HTMLTextAreaElement) && (T.preventDefault(), l(!0)), f.current === "admin" && (T.key === "Delete" || T.key === "Backspace") && t.length > 0) {
        const I = T.target.tagName;
        if (I === "INPUT" || I === "TEXTAREA")
          return;
        T.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (T.ctrlKey || T.metaKey) && T.key.toLowerCase() === "z" && !T.shiftKey && (T.preventDefault(), r({ type: "UNDO" })), (T.ctrlKey || T.metaKey) && (T.key.toLowerCase() === "y" || T.key.toLowerCase() === "z" && T.shiftKey) && (T.preventDefault(), r({ type: "REDO" }));
    }, P = (T) => {
      T.code === "Space" && l(!1);
    };
    return window.addEventListener("keydown", h), window.addEventListener("keyup", P), () => {
      window.removeEventListener("keydown", h), window.removeEventListener("keyup", P);
    };
  }, [r, t.length]), D.useEffect(() => {
    if (!i)
      return;
    const h = (T) => {
      const I = u.current.zoom;
      if (i.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: i.origPanX + (T.clientX - i.startX),
          panY: i.origPanY + (T.clientY - i.startY)
        });
        return;
      }
      const { dx: G, dy: R } = oP(
        T.clientX - i.startX,
        T.clientY - i.startY,
        I
      );
      if (i.kind === "move") {
        for (const Ct of i.ids) {
          const ut = i.origins[Ct];
          ut && r({
            type: "UPDATE_LAYER",
            id: Ct,
            patch: { x: ut.x + G, y: ut.y + R },
            pushHistory: !1
          });
        }
        return;
      }
      let K = i.origX, j = i.origY, Ee = i.origW, Et = i.origH;
      i.handle.includes("e") && (Ee = Math.max(bn, i.origW + G)), i.handle.includes("s") && (Et = Math.max(bn, i.origH + R)), i.handle.includes("w") && (Ee = Math.max(bn, i.origW - G), K = i.origX + (i.origW - Ee)), i.handle.includes("n") && (Et = Math.max(bn, i.origH - R), j = i.origY + (i.origH - Et)), r({
        type: "UPDATE_LAYER",
        id: i.id,
        patch: { x: K, y: j, width: Ee, height: Et },
        pushHistory: !1
      });
    }, P = () => {
      (i.kind === "move" || i.kind === "resize") && r({ type: "COMMIT" }), s(null);
    };
    return window.addEventListener("pointermove", h), window.addEventListener("pointerup", P), () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", P);
    };
  }, [i, r]);
  const c = (h) => {
    h.preventDefault();
    const P = ay(n.zoom * (h.deltaY < 0 ? 1.08 : 0.92), fy, dy);
    r({ type: "ZOOM_SET", zoom: P });
  }, m = (h) => {
    s({
      kind: "pan",
      startX: h.clientX,
      startY: h.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, E = (h) => {
    if (h.button === 1 || h.button === 0 && a) {
      h.preventDefault(), m(h);
      return;
    }
    h.button === 0 && r({ type: "UNSELECT_ALL" });
  }, w = (h, P) => {
    Xf(h, o) && r({
      type: "SELECT",
      ids: [h.id],
      additive: P.shiftKey
    });
  }, v = (h) => o === "admin" ? !h.locked : Ii(h), L = (h, P) => {
    if (!v(h) || a)
      return;
    const T = t.includes(h.id) ? t : [h.id];
    t.includes(h.id) || r({ type: "SELECT", ids: [h.id] });
    const I = {};
    for (const G of T) {
      const R = e.layers.find((K) => K.id === G);
      R && v(R) && (I[G] = { x: R.x, y: R.y });
    }
    Object.keys(I).length !== 0 && s({
      kind: "move",
      ids: Object.keys(I),
      startX: P.clientX,
      startY: P.clientY,
      origins: I
    });
  }, p = (h, P, T) => {
    T.stopPropagation(), v(h) && (r({ type: "SELECT", ids: [h.id] }), s({
      kind: "resize",
      id: h.id,
      startX: T.clientX,
      startY: T.clientY,
      origX: h.x,
      origY: h.y,
      origW: h.width,
      origH: h.height,
      handle: P
    }));
  }, A = e.layers.filter((h) => t.includes(h.id) && h.visible), g = A.length === 1 ? A[0] : null, C = g ? v(g) : !1;
  return /* @__PURE__ */ H(
    "div",
    {
      className: `chd-viewport${a ? " chd-viewport--panning" : ""}`,
      onWheel: c,
      onPointerDown: E,
      children: [
        /* @__PURE__ */ k(
          "div",
          {
            className: "chd-world",
            style: {
              transform: `translate(${n.panX}px, ${n.panY}px) scale(${n.zoom})`
            },
            children: /* @__PURE__ */ H(
              "div",
              {
                className: "chd-artboard",
                "data-chd-artboard": "true",
                style: {
                  width: e.canvas.width,
                  height: e.canvas.height,
                  background: e.canvas.background || "#eceae4"
                },
                onPointerDown: (h) => {
                  h.button !== 0 || a || (h.stopPropagation(), r({ type: "UNSELECT_ALL" }));
                },
                children: [
                  /* @__PURE__ */ k("div", { className: "chd-artboard-page" }),
                  e.layers.map((h) => /* @__PURE__ */ k(
                    iP,
                    {
                      layer: h,
                      selected: t.includes(h.id),
                      onSelect: (P) => w(h, P),
                      onMoveStart: (P) => L(h, P),
                      onUnlock: o === "admin" ? () => r({ type: "UPDATE_LAYER", id: h.id, patch: { locked: !1 } }) : void 0
                    },
                    h.id
                  )),
                  C && g ? /* @__PURE__ */ k(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: g.x,
                        top: g.y,
                        width: g.width,
                        height: g.height
                      },
                      children: kP.map((h) => /* @__PURE__ */ k(
                        "div",
                        {
                          className: `chd-handle chd-handle--${h}`,
                          onPointerDown: (P) => p(g, h, P)
                        },
                        h
                      ))
                    }
                  ) : g ? /* @__PURE__ */ k(
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
                  A.length > 1 ? A.map((h) => /* @__PURE__ */ k(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: h.x,
                        top: h.y,
                        width: h.width,
                        height: h.height
                      }
                    },
                    `sel-${h.id}`
                  )) : null
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ k("div", { className: "chd-viewport-hint", children: "Scroll to zoom · Space+drag to pan · Shift+click multi-select" })
      ]
    }
  );
}
function SP() {
  const e = gy(), t = cl(), n = fl(), r = Jf(), o = r === "admin", [i, s] = D.useState(null), [a, l] = D.useState(null), u = [...e].map((c, m) => ({ layer: c, index: m })).reverse().filter(({ layer: c }) => o || Xf(c, r)), f = (c, m) => {
    if (c === m)
      return;
    const E = e.findIndex((v) => v.id === c), w = e.findIndex((v) => v.id === m);
    E < 0 || w < 0 || n({ type: "REORDER", fromIndex: E, toIndex: w });
  };
  return /* @__PURE__ */ H(
    "aside",
    {
      className: `chd-panel chd-layers-panel${o ? " chd-layers-panel--admin" : ""}`,
      "aria-label": "Layers",
      children: [
        /* @__PURE__ */ k("div", { className: "chd-panel-header", children: o ? "Layers" : "Editable layers" }),
        /* @__PURE__ */ k("ul", { className: "chd-layer-list", children: u.length === 0 ? /* @__PURE__ */ k("li", { className: "chd-panel-empty", children: "No editable layers" }) : u.map(({ layer: c, index: m }) => {
          const E = t.includes(c.id);
          return /* @__PURE__ */ H(
            "li",
            {
              draggable: o,
              className: `chd-layer-list-item${E ? " chd-layer-list-item--selected" : ""}${i === c.id ? " chd-layer-list-item--dragging" : ""}${a === c.id ? " chd-layer-list-item--drag-over" : ""}`,
              onDragStart: (w) => {
                if (o) {
                  if (w.target.closest("button")) {
                    w.preventDefault();
                    return;
                  }
                  w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("text/plain", c.id), s(c.id);
                }
              },
              onDragOver: (w) => {
                o && (w.preventDefault(), w.dataTransfer.dropEffect = "move", a !== c.id && l(c.id));
              },
              onDragLeave: () => {
                l((w) => w === c.id ? null : w);
              },
              onDrop: (w) => {
                w.preventDefault();
                const v = w.dataTransfer.getData("text/plain");
                v && f(v, c.id), s(null), l(null);
              },
              onDragEnd: () => {
                s(null), l(null);
              },
              children: [
                o ? /* @__PURE__ */ k("span", { className: "chd-layer-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }) : null,
                /* @__PURE__ */ H(
                  "button",
                  {
                    type: "button",
                    className: "chd-layer-list-select",
                    onClick: (w) => n({
                      type: "SELECT",
                      ids: [c.id],
                      additive: w.shiftKey
                    }),
                    children: [
                      /* @__PURE__ */ k("span", { className: "chd-layer-list-type", children: c.type }),
                      /* @__PURE__ */ k("span", { className: "chd-layer-list-name", children: c.name })
                    ]
                  }
                ),
                o ? /* @__PURE__ */ H(jr, { children: [
                  /* @__PURE__ */ k(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: c.visible ? "Hide" : "Show",
                      onClick: () => n({
                        type: "SET_VISIBILITY",
                        id: c.id,
                        visible: !c.visible
                      }),
                      children: c.visible ? "◉" : "○"
                    }
                  ),
                  /* @__PURE__ */ k(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: "Move up (forward)",
                      disabled: m >= e.length - 1,
                      onClick: () => n({ type: "REORDER", fromIndex: m, toIndex: m + 1 }),
                      children: "↑"
                    }
                  ),
                  /* @__PURE__ */ k(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: "Move down (back)",
                      disabled: m <= 0,
                      onClick: () => n({ type: "REORDER", fromIndex: m, toIndex: m - 1 }),
                      children: "↓"
                    }
                  )
                ] }) : null
              ]
            },
            c.id
          );
        }) })
      ]
    }
  );
}
function DP({
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
  const [u, f] = D.useState(!1), [c, m] = D.useState("content-hub"), [E, w] = D.useState(""), [v, L] = D.useState(""), [p, A] = D.useState(""), [g, C] = D.useState([]), [h, P] = D.useState(!1), [T, I] = D.useState(null);
  D.useEffect(() => {
    const j = window.setTimeout(() => L(E), 250);
    return () => window.clearTimeout(j);
  }, [E]), D.useEffect(() => {
    u && m("content-hub");
  }, [u]), D.useEffect(() => {
    if (!u || c !== "content-hub")
      return;
    let j = !1;
    return P(!0), I(null), rP.searchAssets({ collectionId: e, query: v }).then((Ee) => {
      j || C(Ee);
    }).catch((Ee) => {
      j || (C([]), I(Ee instanceof Error ? Ee.message : "Could not search Content Hub assets."));
    }).finally(() => {
      j || P(!1);
    }), () => {
      j = !0;
    };
  }, [u, c, e, v]);
  const G = () => {
    f(!1), A("");
  }, R = () => {
    const j = p.trim();
    j && (l == null || l(j), a({
      id: "",
      name: "Image URL",
      thumbnailUrl: j,
      previewUrl: j
    }), G());
  }, K = u ? /* @__PURE__ */ H("div", { className: `asset-picker-panel${o ? " asset-picker-panel-overlay" : ""}`, children: [
    /* @__PURE__ */ H("div", { className: "asset-picker-panel-header", children: [
      /* @__PURE__ */ k("strong", { children: "Approved assets" }),
      /* @__PURE__ */ k("button", { type: "button", className: "asset-picker-close", onClick: G, "aria-label": "Close asset picker", children: "Close" })
    ] }),
    i && /* @__PURE__ */ H("div", { className: "asset-picker-mode-tabs", children: [
      /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: `asset-picker-mode-tab${c === "content-hub" ? " asset-picker-mode-tab-active" : ""}`,
          onClick: () => m("content-hub"),
          children: "Content Hub"
        }
      ),
      /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: `asset-picker-mode-tab${c === "url" ? " asset-picker-mode-tab-active" : ""}`,
          onClick: () => m("url"),
          children: "Image URL"
        }
      )
    ] }),
    c === "content-hub" && /* @__PURE__ */ H(jr, { children: [
      /* @__PURE__ */ k(
        "input",
        {
          className: "asset-picker-search",
          placeholder: e ? "Search approved assets" : "Search approved Content Hub assets",
          value: E,
          onChange: (j) => w(j.target.value),
          autoFocus: !0
        }
      ),
      e ? /* @__PURE__ */ H("div", { className: "asset-picker-hint", children: [
        "Collection ",
        e
      ] }) : /* @__PURE__ */ k("div", { className: "asset-picker-hint", children: "Searching approved assets via Content Hub SearchConfiguration" }),
      t && /* @__PURE__ */ H("div", { className: "asset-picker-hint", children: [
        "Recommended aspect ratio: ",
        t
      ] }),
      h && /* @__PURE__ */ k("div", { className: "asset-picker-loading", children: "Searching..." }),
      T && /* @__PURE__ */ k("div", { className: "asset-picker-error", children: T }),
      /* @__PURE__ */ H("div", { className: "asset-picker-grid", children: [
        g.map((j) => /* @__PURE__ */ H(
          "button",
          {
            type: "button",
            className: "asset-picker-thumb",
            onClick: () => {
              a(j), G();
            },
            children: [
              /* @__PURE__ */ k("img", { src: j.thumbnailUrl, alt: j.name }),
              /* @__PURE__ */ k("span", { children: j.name })
            ]
          },
          j.id || j.thumbnailUrl
        )),
        !h && !T && g.length === 0 && /* @__PURE__ */ k("div", { className: "asset-picker-empty", children: i ? "No assets found. Try Image URL instead." : "No assets found. Try a different search." })
      ] })
    ] }),
    c === "url" && i && /* @__PURE__ */ H("div", { className: "asset-picker-url-form", children: [
      /* @__PURE__ */ H("label", { children: [
        "Image URL",
        /* @__PURE__ */ k(
          "input",
          {
            className: "asset-picker-search",
            placeholder: "https://...",
            value: p,
            onChange: (j) => A(j.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ k("button", { type: "button", className: "asset-picker-url-apply", onClick: R, disabled: !p.trim(), children: "Use image URL" })
    ] })
  ] }) : null;
  return /* @__PURE__ */ H("div", { className: `asset-picker${r ? " asset-picker-compact" : ""}`, children: [
    /* @__PURE__ */ k(
      "button",
      {
        type: "button",
        className: "asset-picker-trigger",
        disabled: s,
        onClick: () => f((j) => !j),
        children: n
      }
    ),
    u && o ? /* @__PURE__ */ H("div", { className: "asset-picker-modal", role: "dialog", "aria-modal": "true", "aria-label": "Approved assets", children: [
      /* @__PURE__ */ k("button", { type: "button", className: "asset-picker-backdrop", "aria-label": "Close asset picker", onClick: G }),
      K
    ] }) : K
  ] });
}
function Sr({
  label: e,
  value: t,
  onChange: n,
  disabled: r
}) {
  return /* @__PURE__ */ H("label", { className: "chd-field", children: [
    /* @__PURE__ */ k("span", { children: e }),
    /* @__PURE__ */ k(
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
function BP() {
  const e = gy(), t = cl(), n = fl(), r = Jf(), o = ul(), i = r === "admin", s = e.filter((c) => t.includes(c.id)), a = s.length === 1 ? s[0] : null, l = (c) => {
    a && n({ type: "UPDATE_LAYER", id: a.id, patch: c });
  }, u = a ? i ? !a.locked : Ii(a) : !1, f = a ? i ? !a.locked : ll(a) : !1;
  return /* @__PURE__ */ H("aside", { className: "chd-panel chd-properties-panel", "aria-label": "Properties", children: [
    /* @__PURE__ */ k("div", { className: "chd-panel-header", children: "Properties" }),
    a ? /* @__PURE__ */ H("div", { className: "chd-properties-body", children: [
      i ? /* @__PURE__ */ H("label", { className: "chd-field", children: [
        /* @__PURE__ */ k("span", { children: "Name" }),
        /* @__PURE__ */ k(
          "input",
          {
            type: "text",
            value: a.name,
            onChange: (c) => l({ name: c.target.value })
          }
        )
      ] }) : /* @__PURE__ */ H("div", { className: "chd-field", children: [
        /* @__PURE__ */ k("span", { children: "Layer" }),
        /* @__PURE__ */ k("strong", { children: a.name })
      ] }),
      /* @__PURE__ */ H("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ k(
          Sr,
          {
            label: "X",
            value: Math.round(a.x),
            disabled: !u,
            onChange: (c) => l({ x: c })
          }
        ),
        /* @__PURE__ */ k(
          Sr,
          {
            label: "Y",
            value: Math.round(a.y),
            disabled: !u,
            onChange: (c) => l({ y: c })
          }
        )
      ] }),
      /* @__PURE__ */ H("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ k(
          Sr,
          {
            label: "W",
            value: Math.round(a.width),
            disabled: !u,
            onChange: (c) => l({ width: c })
          }
        ),
        /* @__PURE__ */ k(
          Sr,
          {
            label: "H",
            value: Math.round(a.height),
            disabled: !u,
            onChange: (c) => l({ height: c })
          }
        )
      ] }),
      f && (a.type === "frame" || a.type === "rect" || a.type === "image") && /* @__PURE__ */ H("label", { className: "chd-field", children: [
        /* @__PURE__ */ k("span", { children: "Fill" }),
        /* @__PURE__ */ k(
          "input",
          {
            type: "color",
            value: a.fill && /^#/.test(a.fill) ? a.fill : "#888780",
            onChange: (c) => l({ fill: c.target.value })
          }
        )
      ] }),
      f && a.type === "text" && /* @__PURE__ */ H(jr, { children: [
        /* @__PURE__ */ H("label", { className: "chd-field", children: [
          /* @__PURE__ */ k("span", { children: "Text" }),
          /* @__PURE__ */ k(
            "textarea",
            {
              rows: 3,
              value: a.text || "",
              onChange: (c) => l({ text: c.target.value })
            }
          )
        ] }),
        i ? /* @__PURE__ */ H("div", { className: "chd-field-row", children: [
          /* @__PURE__ */ k(
            Sr,
            {
              label: "Size",
              value: a.fontSize ?? 16,
              onChange: (c) => l({ fontSize: c })
            }
          ),
          /* @__PURE__ */ H("label", { className: "chd-field", children: [
            /* @__PURE__ */ k("span", { children: "Color" }),
            /* @__PURE__ */ k(
              "input",
              {
                type: "color",
                value: a.color && /^#/.test(a.color) ? a.color : "#1a1a1a",
                onChange: (c) => l({ color: c.target.value })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ H("label", { className: "chd-field", children: [
          /* @__PURE__ */ k("span", { children: "Color" }),
          /* @__PURE__ */ k(
            "input",
            {
              type: "color",
              value: a.color && /^#/.test(a.color) ? a.color : "#1a1a1a",
              onChange: (c) => l({ color: c.target.value })
            }
          )
        ] })
      ] }),
      f && a.type === "image" && /* @__PURE__ */ H(jr, { children: [
        /* @__PURE__ */ H("div", { className: "chd-image-source", children: [
          /* @__PURE__ */ k("span", { children: "Image" }),
          /* @__PURE__ */ k(
            DP,
            {
              overlay: !0,
              compact: !0,
              triggerLabel: a.src ? "Choose from Content Hub" : "Choose image",
              onSelect: (c) => {
                const m = c.previewUrl || c.thumbnailUrl;
                m && l({ src: m });
              }
            }
          )
        ] }),
        /* @__PURE__ */ H("label", { className: "chd-field", children: [
          /* @__PURE__ */ k("span", { children: "Image URL" }),
          /* @__PURE__ */ k(
            "input",
            {
              type: "url",
              placeholder: "https://…",
              value: a.src || "",
              onChange: (c) => l({ src: c.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ H("label", { className: "chd-field", children: [
          /* @__PURE__ */ k("span", { children: "Fit" }),
          /* @__PURE__ */ H(
            "select",
            {
              value: a.objectFit || "cover",
              onChange: (c) => l({ objectFit: c.target.value }),
              children: [
                /* @__PURE__ */ k("option", { value: "cover", children: "Cover — fill page, keep photo ratio" }),
                /* @__PURE__ */ k("option", { value: "contain", children: "Contain — whole photo, may letterbox" })
              ]
            }
          )
        ] })
      ] }),
      i ? /* @__PURE__ */ H(jr, { children: [
        /* @__PURE__ */ H("div", { className: "chd-field chd-pin-field", children: [
          /* @__PURE__ */ k("span", { children: "Pin to page" }),
          /* @__PURE__ */ k("div", { className: "chd-pin-grid", children: ["pinTop", "pinLeft", "pinRight", "pinBottom"].map((c) => {
            const m = {
              pinTop: "Top",
              pinLeft: "Left",
              pinRight: "Right",
              pinBottom: "Bottom"
            };
            return /* @__PURE__ */ H("label", { className: "chd-field-checkbox", children: [
              /* @__PURE__ */ k(
                "input",
                {
                  type: "checkbox",
                  checked: a[c] === !0,
                  onChange: (E) => l(
                    gP(
                      a,
                      c,
                      E.target.checked,
                      o.canvas.width,
                      o.canvas.height
                    )
                  )
                }
              ),
              /* @__PURE__ */ k("span", { children: m[c] })
            ] }, c);
          }) }),
          /* @__PURE__ */ k("p", { className: "chd-field-hint", children: "Pinning a side moves this block to that edge using the margin. Pin left and right together to stretch width; pin top and bottom to stretch height." })
        ] }),
        /* @__PURE__ */ H("div", { className: "chd-field", children: [
          /* @__PURE__ */ k("span", { children: "Margins" }),
          /* @__PURE__ */ k("div", { className: "chd-pin-grid", children: [
            ["marginTop", "Top"],
            ["marginLeft", "Left"],
            ["marginRight", "Right"],
            ["marginBottom", "Bottom"]
          ].map(([c, m]) => /* @__PURE__ */ k(
            Sr,
            {
              label: m,
              value: Math.round(typeof a[c] == "number" ? a[c] : 0),
              onChange: (E) => l(
                hP(
                  a,
                  c,
                  E,
                  o.canvas.width,
                  o.canvas.height
                )
              )
            },
            c
          )) }),
          /* @__PURE__ */ k("p", { className: "chd-field-hint", children: "Margins are stored per page size. Change page, then adjust; use Push to all pages to copy this layout to every preset." })
        ] }),
        /* @__PURE__ */ k(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => l(py(a, o.canvas.width, o.canvas.height)),
            children: "Pin in place"
          }
        ),
        /* @__PURE__ */ k(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => n({ type: "PUSH_LAYER_TO_ALL_PAGES", id: a.id }),
            children: "Push to all pages"
          }
        ),
        /* @__PURE__ */ k(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => l(Ay(a, o.canvas.width, o.canvas.height)),
            children: "Fill page"
          }
        ),
        /* @__PURE__ */ H("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ k(
            "input",
            {
              type: "checkbox",
              checked: !!a.locked,
              onChange: (c) => l({ locked: c.target.checked })
            }
          ),
          /* @__PURE__ */ k("span", { children: "Locked" })
        ] }),
        /* @__PURE__ */ H("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ k(
            "input",
            {
              type: "checkbox",
              checked: !!a.allowTransform,
              onChange: (c) => l({ allowTransform: c.target.checked })
            }
          ),
          /* @__PURE__ */ k("span", { children: "Allow transform (end user)" })
        ] }),
        /* @__PURE__ */ H("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ k(
            "input",
            {
              type: "checkbox",
              checked: cy(a),
              onChange: (c) => l({ editableContent: c.target.checked })
            }
          ),
          /* @__PURE__ */ k("span", { children: "Editable content (end user)" })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ k("p", { className: "chd-panel-empty", children: s.length > 1 ? `${s.length} layers selected` : "Select a layer" })
  ] });
}
const OP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAFoCAYAAADJgokTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAJa/SURBVHhe7f0HtFVVlr4Pd4XRXVXdNSr+a1QCVECRVCgIiqAICkpUEAoQBQEFQUQMCIgIIogJFbXMCCigoCiCBANBJVggjSBFjoIEkQxW/7q6v2+8lrN6nln7XC7cvfbaa5/3GeOOs88+5549V17zXelf/oUQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQgqZ06dLfLVWq1HeK+sN37P8RQgghJD/Shtr7JB7YPyGEEEL+5V/+pXLlyj9v0KBB5Xbt2l1yww03tLnllluuHTJkSJ8HH3zwrj/96U/3P//884+++OKLj7/00ktPv/baa+OmT58+edq0aZOK+sN33nzzzQmTJk0aM378+GfHjh375LPPPjvyscceG4rfHThw4I19+vTp2KlTp6bNmjWrde6555Y59dRT/9XaRsjxKFeu3A/PP//8spdffnnt6667ruVtt93WZfDgwTffd999/UaOHDl41KhRw5544on78Pfoo4/e89BDDw0aOnTobQMGDOjRq1evq6655prGjRs3rnH22Wf/xv42SSeVKlX6GeqMyy67rHqbNm0u6ty5c4ubb775GtQr99577+3Dhw+/45FHHhny5JNPjkC6P/7448Pxive4lvfyGe7jD/kD+Qa/gd/q3bv31V26dLn8j3/8Y/1LL730rFq1apVGfWntIaQ4nHPOOb9HXdOtW7crUU8NGzasL/LfCy+88BjaySlTpryMtvOtt9569fXXX38J90aPHj0K7fD9998/oH///t1RZ11xxRV1ateufZr9/ULmtNNO+7cLLrjg9JYtW9ZFHCGuEGeIO8Qh4hJxirhFHyUqfvv169ftxhtvbI8+yXnnnXfq73//e/sYQgghJDyqV6/+WzhJcIzgnC9YsGDOp59+umTNmjUrd+zYse3gwYP7jx07dvT/55i//vWvXx85cuTwl19+uXvLli0b8PxPPvlk0bvvvjsNdg0aNOgmdOzh3NkwkMIGnTx01J555pmH3n///beXLVu2+C9/+cun27Zt27Rv3769yFc2v1n+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", NP = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js", MP = "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
function yy(e, t) {
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
let Au = null, pu = null;
function xP() {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : (Au || (Au = yy(NP, "chd-html2canvas").then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), Au);
}
function bP() {
  var e;
  return (e = window.jspdf) != null && e.jsPDF ? Promise.resolve(window.jspdf.jsPDF) : (pu || (pu = yy(MP, "chd-jspdf").then(() => {
    var n;
    const t = (n = window.jspdf) == null ? void 0 : n.jsPDF;
    if (!t)
      throw new Error("jsPDF did not register on window");
    return t;
  })), pu);
}
const Pp = 96;
function zP(e, t) {
  const n = URL.createObjectURL(e), r = window.document.createElement("a");
  r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
function LP(e) {
  const t = e.closest(".chd-root"), n = t == null ? void 0 : t.querySelector("[data-chd-artboard]");
  if (!n)
    throw new Error("Could not find the designer page to export.");
  return n;
}
async function IP(e) {
  const t = LP(e), n = await xP();
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
async function RP(e, t) {
  const n = await new Promise((r, o) => {
    e.toBlob((i) => {
      i ? r(i) : o(new Error("Could not create PNG."));
    }, "image/png");
  });
  zP(n, t);
}
async function QP(e, t, n, r) {
  const o = await bP(), i = n * 25.4 / Pp, s = r * 25.4 / Pp, a = new o({
    orientation: i >= s ? "landscape" : "portrait",
    unit: "mm",
    format: [i, s],
    compress: !0
  });
  a.addImage(e.toDataURL("image/png"), "PNG", 0, 0, i, s), a.save(t);
}
async function HP(e, t, n) {
  const r = await IP(e);
  if (t === "png") {
    await RP(r, "design.png");
    return;
  }
  await QP(r, "design.pdf", n.width, n.height);
}
const UP = [
  { format: "pdf", label: "PDF", hint: "Print-ready page" },
  { format: "png", label: "PNG", hint: "Image of the page" }
];
function FP() {
  const e = ul(), t = D.useRef(null), [n, r] = D.useState(!1), [o, i] = D.useState(!1), [s, a] = D.useState(null);
  D.useEffect(() => {
    if (!n)
      return;
    const u = (f) => {
      t.current && !t.current.contains(f.target) && r(!1);
    };
    return window.addEventListener("pointerdown", u), () => window.removeEventListener("pointerdown", u);
  }, [n]);
  const l = async (u) => {
    const f = t.current;
    if (!(!f || o)) {
      r(!1), i(!0), a(null);
      try {
        await HP(f, u, {
          width: e.canvas.width,
          height: e.canvas.height
        });
      } catch (c) {
        a(c instanceof Error ? c.message : "Generate failed.");
      } finally {
        i(!1);
      }
    }
  };
  return /* @__PURE__ */ H("div", { className: "chd-generate", ref: t, children: [
    /* @__PURE__ */ k(
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
    n ? /* @__PURE__ */ k("div", { className: "chd-generate-menu", role: "menu", children: UP.map((u) => /* @__PURE__ */ H(
      "button",
      {
        type: "button",
        role: "menuitem",
        className: "chd-generate-option",
        disabled: o,
        onClick: () => void l(u.format),
        children: [
          /* @__PURE__ */ k("strong", { children: u.label }),
          /* @__PURE__ */ k("span", { children: u.hint })
        ]
      },
      u.format
    )) }) : null,
    s ? /* @__PURE__ */ k("span", { className: "chd-generate-error", children: s }) : null
  ] });
}
const jP = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function GP() {
  const e = fl(), t = cl(), n = hy(), r = ul(), { mode: o, canUndo: i, canRedo: s, exportDocument: a, importDocumentJson: l } = TP(), u = D.useRef(null), f = o === "admin", c = Dh(
    r.canvas.width,
    r.canvas.height,
    r.canvas.presetId
  ), m = () => {
    const p = a(), A = new Blob([JSON.stringify(p, null, 2)], { type: "application/json" }), g = URL.createObjectURL(A), C = window.document.createElement("a");
    C.href = g, C.download = "chdesigner-document.json", C.click(), URL.revokeObjectURL(g);
  }, E = async (p) => {
    if (!p)
      return;
    const A = await p.text();
    l(A) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  }, w = (p) => {
    const A = pc(p);
    A && e({
      type: "SET_CANVAS_SIZE",
      width: A.width,
      height: A.height,
      presetId: A.id
    });
  }, v = () => {
    const p = r.layers.filter((A) => t.includes(A.id));
    for (const A of p)
      e({
        type: "UPDATE_LAYER",
        id: A.id,
        patch: py(A, r.canvas.width, r.canvas.height)
      });
  }, L = () => {
    const p = r.layers.filter((A) => t.includes(A.id));
    for (const A of p)
      e({
        type: "UPDATE_LAYER",
        id: A.id,
        patch: Ay(A, r.canvas.width, r.canvas.height)
      });
  };
  return /* @__PURE__ */ H("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ H("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ k("span", { className: "chd-toolbar-logo-wrap", children: /* @__PURE__ */ k("img", { className: "chd-toolbar-logo", src: OP, alt: "EPAM" }) }),
      /* @__PURE__ */ k("span", { className: "chd-toolbar-mode", children: f ? "Admin" : "Edit" })
    ] }),
    f ? /* @__PURE__ */ k("div", { className: "chd-toolbar-group", children: jP.map((p) => /* @__PURE__ */ H(
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
    f ? /* @__PURE__ */ H("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ H("label", { className: "chd-toolbar-field", children: [
        /* @__PURE__ */ k("span", { children: "Page" }),
        /* @__PURE__ */ H(
          "select",
          {
            className: "chd-toolbar-select",
            value: c,
            onChange: (p) => w(p.target.value),
            children: [
              c === "custom" ? /* @__PURE__ */ k("option", { value: "custom", children: "Custom" }) : null,
              RC.map((p) => /* @__PURE__ */ k("optgroup", { label: p.label, children: zi.filter((A) => A.group === p.id).map((A) => /* @__PURE__ */ k("option", { value: A.id, children: A.label }, A.id)) }, p.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ H("span", { className: "chd-toolbar-size", children: [
        Math.round(r.canvas.width),
        " × ",
        Math.round(r.canvas.height)
      ] }),
      /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: v,
          children: "Pin to page"
        }
      ),
      /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: L,
          children: "Fill page"
        }
      )
    ] }) : null,
    f ? /* @__PURE__ */ H("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "DELETE_LAYERS" }),
          children: "Delete"
        }
      ),
      /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "BRING_FORWARD" }),
          children: "Forward"
        }
      ),
      /* @__PURE__ */ k(
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
    /* @__PURE__ */ H("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !i,
          onClick: () => e({ type: "UNDO" }),
          children: "Undo"
        }
      ),
      /* @__PURE__ */ k(
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
    /* @__PURE__ */ H("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ k(FP, {}),
      /* @__PURE__ */ H("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ZOOM_RESET" }), children: [
        Math.round(n.zoom * 100),
        "%"
      ] }),
      f ? /* @__PURE__ */ H(jr, { children: [
        /* @__PURE__ */ k("button", { type: "button", className: "chd-btn", onClick: m, children: "Export JSON" }),
        /* @__PURE__ */ k("button", { type: "button", className: "chd-btn", onClick: () => {
          var p;
          return (p = u.current) == null ? void 0 : p.click();
        }, children: "Import" }),
        /* @__PURE__ */ k(
          "input",
          {
            ref: u,
            type: "file",
            accept: "application/json,.json",
            className: "chd-file-input",
            onChange: (p) => {
              var A;
              E(((A = p.target.files) == null ? void 0 : A[0]) ?? null), p.target.value = "";
            }
          }
        )
      ] }) : null
    ] })
  ] });
}
function YP({
  mode: e = "admin",
  document: t,
  templateDocument: n,
  templateId: r,
  onDocumentChange: o,
  onInstanceChange: i,
  statusSlot: s,
  statusClassName: a,
  saveStatus: l
}) {
  return /* @__PURE__ */ k(CP, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    onDocumentChange: o,
    onInstanceChange: i
  }, children: /* @__PURE__ */ H("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ k(GP, {}),
    s ? /* @__PURE__ */ k("div", { className: `chd-status-bar${a ? ` ${a}` : ""}`, children: s }) : null,
    /* @__PURE__ */ H("div", { className: "chd-main", children: [
      /* @__PURE__ */ k(SP, {}),
      /* @__PURE__ */ k(PP, {}),
      /* @__PURE__ */ k(BP, {})
    ] }),
    l
  ] }) });
}
const KP = "EPAM.BuilderTemplate", _o = "designerDocumentJson";
function bo(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
  if (typeof e == "string" && e.trim())
    return e.trim();
}
function ZP(e, t) {
  const n = t && typeof t == "object" && !Array.isArray(t) ? t : {}, r = bo(n.templateId) || bo(n.entityId) || bo(n.builderTemplateId);
  if (r)
    return r;
  if (!e || typeof e != "object")
    return;
  const o = e, i = o.systemProperties && typeof o.systemProperties == "object" ? o.systemProperties : void 0;
  return bo(i == null ? void 0 : i.id) || bo(o.id);
}
function XP(e) {
  if (!e || typeof e != "object")
    return {};
  const t = e;
  if (t.properties && typeof t.properties == "object")
    return t;
  const n = t.content;
  return n && typeof n == "object" ? n : t;
}
function WP(e) {
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
function JP(e) {
  if (e)
    for (const t of [_o, `EPAM.${_o}`]) {
      const n = WP(e[t]);
      if (n)
        return n;
    }
}
function VP(e) {
  if (!(e != null && e.trim()))
    return null;
  try {
    return uy(JSON.parse(e));
  } catch {
    return null;
  }
}
function qP(e) {
  var n, r;
  const t = ((n = e.entitydefinition) == null ? void 0 : n.href) || ((r = e.entityDefinition) == null ? void 0 : r.href);
  return typeof t == "string" && t.trim() ? t.trim() : `/api/entitydefinitions/${KP}`;
}
function _P(e) {
  if (!e || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.title;
  return typeof n == "string" && n.trim() ? `: ${n}` : "";
}
async function vy(e, t) {
  var r;
  if (!((r = e.raw) != null && r.getAsync))
    throw new Error("Content Hub client is not available. Open this designer on an EPAM.BuilderTemplate page.");
  const n = await e.raw.getAsync(`/api/entities/${t}`);
  if (!n.isSuccessStatusCode || n.content == null)
    throw new Error(
      `Could not load EPAM.BuilderTemplate ${t} (${n.statusCode ?? "unknown"}).`
    );
  return XP(n.content);
}
async function $P(e, t) {
  const n = await vy(e, t), r = VP(JP(n.properties));
  return r ? { document: r, createdDefault: !1 } : { document: ly(), createdDefault: !0 };
}
async function Sp(e, t, n) {
  var l;
  if (!((l = e.raw) != null && l.putAsync))
    throw new Error("Content Hub client is not available for saving EPAM.BuilderTemplate.");
  const r = await vy(e, t), o = JSON.stringify(n), i = qP(r), s = [
    { label: "invariant", properties: { [_o]: { Invariant: o } } },
    { label: "plain", properties: { [_o]: o } },
    {
      label: "epam-invariant",
      properties: { [`EPAM.${_o}`]: { Invariant: o } }
    }
  ], a = [];
  for (const u of s) {
    const f = await e.raw.putAsync(`/api/entities/${t}`, {
      entitydefinition: { href: i },
      properties: u.properties
    });
    if (f.isSuccessStatusCode)
      return;
    a.push(`${u.label} → HTTP ${f.statusCode ?? "unknown"}${_P(f.content)}`);
  }
  throw new Error(
    `Could not save designerDocumentJson on EPAM.BuilderTemplate ${t}. ${a.join("; ")}`
  );
}
const eS = 5e3;
function tS({ client: e, entity: t, options: n }) {
  const r = ZP(t, n), [o, i] = D.useState(null), [s, a] = D.useState("loading"), [l, u] = D.useState(null), [f, c] = D.useState(null), m = D.useRef(null), E = D.useRef(null), w = D.useRef(0), v = D.useRef(!0);
  m.current = o, D.useEffect(() => {
    ak(e ?? null);
  }, [e]);
  const L = D.useCallback(
    async (g) => {
      if (!e || !r)
        return;
      const C = ++w.current;
      a("saving"), u(null);
      try {
        if (await Sp(e, r, g), C !== w.current)
          return;
        a("saved");
      } catch (h) {
        if (C !== w.current)
          return;
        u(h instanceof Error ? h.message : "Failed to save template."), a("error");
      }
    },
    [e, r]
  );
  D.useEffect(() => {
    if (!r) {
      c(
        "An entity ID is needed. Open CHDesigner on an EPAM.BuilderTemplate detail page, or set templateId in the component configuration."
      ), a("error");
      return;
    }
    if (!e) {
      c("Content Hub client is not available. This component must run inside Content Hub."), a("error");
      return;
    }
    let g = !1;
    return a("loading"), c(null), (async () => {
      try {
        const C = await $P(e, r);
        if (g)
          return;
        if (v.current = !0, i(C.document), C.createdDefault) {
          a("saving");
          try {
            await Sp(e, r, C.document), g || a("saved");
          } catch (h) {
            if (g)
              return;
            u(h instanceof Error ? h.message : "Could not create the default template JSON."), a("error");
          }
        } else
          a("saved");
      } catch (C) {
        if (g)
          return;
        c(C instanceof Error ? C.message : "Could not load EPAM.BuilderTemplate."), a("error");
      }
    })(), () => {
      g = !0;
    };
  }, [e, r]), D.useEffect(() => {
    if (o) {
      if (v.current) {
        v.current = !1;
        return;
      }
      return a("pending"), E.current != null && window.clearTimeout(E.current), E.current = window.setTimeout(() => {
        const g = m.current;
        g && L(g);
      }, eS), () => {
        E.current != null && window.clearTimeout(E.current);
      };
    }
  }, [o, L]);
  const p = D.useCallback((g) => {
    i(g);
  }, []), A = s === "loading" ? "Loading template…" : s === "pending" ? "Unsaved changes" : s === "saving" ? "Saving…" : s === "error" ? l || "Save failed" : "Saved";
  return !r || f ? /* @__PURE__ */ k("div", { className: "chd-root", children: /* @__PURE__ */ k("div", { className: "chd-boot-error", children: f || "An entity ID is needed." }) }) : o ? /* @__PURE__ */ k(
    YP,
    {
      mode: "admin",
      document: o,
      templateDocument: o,
      templateId: r,
      onDocumentChange: p,
      saveStatus: /* @__PURE__ */ k("div", { className: `chd-save-status chd-save-status--${s}`, title: l || A, children: A })
    },
    r
  ) : /* @__PURE__ */ k("div", { className: "chd-root", children: /* @__PURE__ */ H("div", { className: "chd-boot-status", children: [
    "Loading EPAM.BuilderTemplate ",
    r,
    "…"
  ] }) });
}
function nS(e) {
  const t = ch(e);
  return {
    render(n) {
      t.render(
        /* @__PURE__ */ k(Rw, { theme: n.theme, children: /* @__PURE__ */ k(
          tS,
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
  nS as default
};
