(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:100%;min-height:calc(100dvh - 12px);box-sizing:border-box;position:relative;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:0;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;min-width:56px;background:#000000;color:#fff;border-radius:4px;padding:5px 10px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-boot-status,.chd-boot-error{margin:auto;padding:24px;max-width:480px;font-size:13px;line-height:1.45;color:var(--chd-muted)}.chd-boot-error{color:#a32d2d}.chd-save-status{position:absolute;right:12px;bottom:12px;z-index:30;max-width:min(360px,calc(100% - 24px));padding:6px 10px;border-radius:999px;font-size:11px;line-height:1.3;background:rgba(255,255,255,.94);border:.5px solid var(--chd-border);color:var(--chd-muted);box-shadow:0 4px 16px #00000014;pointer-events:none}.chd-save-status--pending{color:#8a6d1d}.chd-save-status--saving,.chd-save-status--loading{color:#355f8a}.chd-save-status--saved{color:#1d6b4f}.chd-save-status--error{color:#a32d2d;pointer-events:auto}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-btn--accent{background:var(--chd-accent);border-color:var(--chd-accent);color:#fff}.chd-btn--accent:hover:not(:disabled){background:#1db86a;border-color:#1db86a;color:#fff}.chd-generate{position:relative;display:flex;align-items:center;gap:8px}.chd-generate-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:40;min-width:180px;padding:4px;background:#fff;border:.5px solid var(--chd-border);border-radius:8px;box-shadow:0 8px 24px #0000001f}.chd-generate-option{display:flex;flex-direction:column;align-items:flex-start;gap:1px;width:100%;border:none;background:transparent;text-align:left;padding:8px 10px;border-radius:6px;cursor:pointer;color:var(--chd-text);font:inherit}.chd-generate-option span{font-size:11px;color:var(--chd-muted)}.chd-generate-option:hover:not(:disabled){background:#e8f6ee}.chd-generate-error{font-size:11px;color:#a32d2d;white-space:nowrap}.chd-artboard--capturing{overflow:hidden}.chd-artboard--capturing .chd-selection-box,.chd-artboard--capturing .chd-selection-outline,.chd-artboard--capturing .chd-handle,.chd-artboard--capturing .chd-layer-lock,.chd-artboard--capturing .chd-artboard-page{display:none!important}.chd-toolbar-field{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--chd-muted)}.chd-toolbar-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;max-width:180px}.chd-toolbar-size{font-size:11px;color:var(--chd-muted);white-space:nowrap}.chd-pin-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 8px;margin-top:4px}.chd-field-hint{margin:6px 0 0;font-size:11px;color:var(--chd-muted);line-height:1.35}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layers-panel--admin .chd-layer-list-item{grid-template-columns:auto 1fr auto auto auto}.chd-layer-list-item--dragging{opacity:.45}.chd-layer-list-item--drag-over{outline:1px solid var(--chd-accent);background:#e8f6ee}.chd-layer-drag-handle{color:var(--chd-muted);font-size:11px;line-height:1;padding:0 4px;cursor:grab;-webkit-user-select:none;user-select:none}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{flex-direction:row;align-items:center;gap:8px;color:var(--chd-text)}.chd-field-checkbox input{width:auto}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:linear-gradient(45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,linear-gradient(-45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,#f0eee8;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:visible}.chd-artboard-page{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;box-shadow:0 0 0 1px #00000014}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-lock{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;left:3px;top:3px;z-index:6;display:flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:4px;background:rgba(255,255,255,.92);border:.5px solid var(--chd-border);color:var(--chd-text);pointer-events:auto;cursor:pointer;padding:0;box-shadow:0 1px 2px #0000001f}.chd-layer-lock svg{display:block}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function Rp(e, t) {
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
function Op(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rc = { exports: {} }, gi = {}, Oc = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur = Symbol.for("react.element"), Dp = Symbol.for("react.portal"), zp = Symbol.for("react.fragment"), Mp = Symbol.for("react.strict_mode"), Ap = Symbol.for("react.profiler"), $p = Symbol.for("react.provider"), Ip = Symbol.for("react.context"), jp = Symbol.for("react.forward_ref"), Fp = Symbol.for("react.suspense"), Bp = Symbol.for("react.memo"), Up = Symbol.for("react.lazy"), Xs = Symbol.iterator;
function bp(e) {
  return e === null || typeof e != "object" ? null : (e = Xs && e[Xs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Dc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, zc = Object.assign, Mc = {};
function Hn(e, t, n) {
  this.props = e, this.context = t, this.refs = Mc, this.updater = n || Dc;
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ac() {
}
Ac.prototype = Hn.prototype;
function Iu(e, t, n) {
  this.props = e, this.context = t, this.refs = Mc, this.updater = n || Dc;
}
var ju = Iu.prototype = new Ac();
ju.constructor = Iu;
zc(ju, Hn.prototype);
ju.isPureReactComponent = !0;
var Gs = Array.isArray, $c = Object.prototype.hasOwnProperty, Fu = { current: null }, Ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function jc(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      $c.call(t, r) && !Ic.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++)
      s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: Ur, type: e, key: i, ref: l, props: o, _owner: Fu.current };
}
function Hp(e, t) {
  return { $$typeof: Ur, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Bu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ur;
}
function Wp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Zs = /\/+/g;
function ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Wp("" + e.key) : t.toString(36);
}
function No(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null)
    l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ur:
          case Dp:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + ul(l, 0) : r, Gs(o) ? (n = "", e != null && (n = e.replace(Zs, "$&/") + "/"), No(o, t, n, "", function(a) {
      return a;
    })) : o != null && (Bu(o) && (o = Hp(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Zs, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Gs(e))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + ul(i, u);
      l += No(i, t, n, s, o);
    }
  else if (s = bp(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      i = i.value, s = r + ul(i, u++), l += No(i, t, n, s, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Jr(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return No(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Vp(e) {
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
var Ee = { current: null }, To = { transition: null }, Kp = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: To, ReactCurrentOwner: Fu };
function Fc() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: Jr, forEach: function(e, t, n) {
  Jr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Jr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Jr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Bu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = Hn;
$.Fragment = zp;
$.Profiler = Ap;
$.PureComponent = Iu;
$.StrictMode = Mp;
$.Suspense = Fp;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kp;
$.act = Fc;
$.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = zc({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Fu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      $c.call(t, s) && !Ic.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++)
      u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Ur, type: e.type, key: o, ref: i, props: r, _owner: l };
};
$.createContext = function(e) {
  return e = { $$typeof: Ip, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: $p, _context: e }, e.Consumer = e;
};
$.createElement = jc;
$.createFactory = function(e) {
  var t = jc.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: jp, render: e };
};
$.isValidElement = Bu;
$.lazy = function(e) {
  return { $$typeof: Up, _payload: { _status: -1, _result: e }, _init: Vp };
};
$.memo = function(e, t) {
  return { $$typeof: Bp, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = To.transition;
  To.transition = {};
  try {
    e();
  } finally {
    To.transition = t;
  }
};
$.unstable_act = Fc;
$.useCallback = function(e, t) {
  return Ee.current.useCallback(e, t);
};
$.useContext = function(e) {
  return Ee.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return Ee.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return Ee.current.useEffect(e, t);
};
$.useId = function() {
  return Ee.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return Ee.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
$.useRef = function(e) {
  return Ee.current.useRef(e);
};
$.useState = function(e) {
  return Ee.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
  return Ee.current.useTransition();
};
$.version = "18.3.1";
Oc.exports = $;
var N = Oc.exports;
const Yp = /* @__PURE__ */ Op(N), jl = /* @__PURE__ */ Rp({
  __proto__: null,
  default: Yp
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
var Qp = N, Xp = Symbol.for("react.element"), Gp = Symbol.for("react.fragment"), Zp = Object.prototype.hasOwnProperty, Jp = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bc(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    Zp.call(t, r) && !qp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Xp, type: e, key: i, ref: l, props: o, _owner: Jp.current };
}
gi.Fragment = Gp;
gi.jsx = Bc;
gi.jsxs = Bc;
Rc.exports = gi;
var Uu = Rc.exports;
const sr = Uu.Fragment, x = Uu.jsx, M = Uu.jsxs;
function eh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Js = "$$material";
function de() {
  return de = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, de.apply(null, arguments);
}
function yi(e, t) {
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
var th = !1;
function nh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function rh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var oh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !th : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(rh(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = nh(o);
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
}(), ve = "-ms-", bo = "-moz-", U = "-webkit-", Uc = "comm", bu = "rule", Hu = "decl", ih = "@import", bc = "@keyframes", lh = "@layer", uh = Math.abs, vi = String.fromCharCode, sh = Object.assign;
function ah(e, t) {
  return fe(e, 0) ^ 45 ? (((t << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0;
}
function Hc(e) {
  return e.trim();
}
function ch(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function b(e, t, n) {
  return e.replace(t, n);
}
function Fl(e, t) {
  return e.indexOf(t);
}
function fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Sr(e, t, n) {
  return e.slice(t, n);
}
function ut(e) {
  return e.length;
}
function Wu(e) {
  return e.length;
}
function qr(e, t) {
  return t.push(e), e;
}
function fh(e, t) {
  return e.map(t).join("");
}
var wi = 1, Mn = 1, Wc = 0, Re = 0, re = 0, Wn = "";
function Si(e, t, n, r, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wi, column: Mn, length: l, return: "" };
}
function Yn(e, t) {
  return sh(Si("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function dh() {
  return re;
}
function ph() {
  return re = Re > 0 ? fe(Wn, --Re) : 0, Mn--, re === 10 && (Mn = 1, wi--), re;
}
function Ie() {
  return re = Re < Wc ? fe(Wn, Re++) : 0, Mn++, re === 10 && (Mn = 1, wi++), re;
}
function ft() {
  return fe(Wn, Re);
}
function Lo() {
  return Re;
}
function br(e, t) {
  return Sr(Wn, e, t);
}
function kr(e) {
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
function Vc(e) {
  return wi = Mn = 1, Wc = ut(Wn = e), Re = 0, [];
}
function Kc(e) {
  return Wn = "", e;
}
function Ro(e) {
  return Hc(br(Re - 1, Bl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hh(e) {
  for (; (re = ft()) && re < 33; )
    Ie();
  return kr(e) > 2 || kr(re) > 3 ? "" : " ";
}
function mh(e, t) {
  for (; --t && Ie() && !(re < 48 || re > 102 || re > 57 && re < 65 || re > 70 && re < 97); )
    ;
  return br(e, Lo() + (t < 6 && ft() == 32 && Ie() == 32));
}
function Bl(e) {
  for (; Ie(); )
    switch (re) {
      case e:
        return Re;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Bl(re);
        break;
      case 40:
        e === 41 && Bl(e);
        break;
      case 92:
        Ie();
        break;
    }
  return Re;
}
function gh(e, t) {
  for (; Ie() && e + re !== 47 + 10; )
    if (e + re === 42 + 42 && ft() === 47)
      break;
  return "/*" + br(t, Re - 1) + "*" + vi(e === 47 ? e : Ie());
}
function yh(e) {
  for (; !kr(ft()); )
    Ie();
  return br(e, Re);
}
function vh(e) {
  return Kc(Oo("", null, null, null, [""], e = Vc(e), 0, [0], e));
}
function Oo(e, t, n, r, o, i, l, u, s) {
  for (var a = 0, m = 0, c = l, h = 0, w = 0, v = 0, y = 1, L = 1, d = 1, f = 0, p = "", S = o, g = i, E = r, k = p; L; )
    switch (v = f, f = Ie()) {
      case 40:
        if (v != 108 && fe(k, c - 1) == 58) {
          Fl(k += b(Ro(f), "&", "&\f"), "&\f") != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Ro(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += hh(v);
        break;
      case 92:
        k += mh(Lo() - 1, 7);
        continue;
      case 47:
        switch (ft()) {
          case 42:
          case 47:
            qr(wh(gh(Ie(), Lo()), t, n), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        u[a++] = ut(k) * d;
      case 125 * y:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            L = 0;
          case 59 + m:
            d == -1 && (k = b(k, /\f/g, "")), w > 0 && ut(k) - c && qr(w > 32 ? ea(k + ";", r, n, c - 1) : ea(b(k, " ", "") + ";", r, n, c - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (qr(E = qs(k, t, n, a, m, o, u, p, S = [], g = [], c), i), f === 123)
              if (m === 0)
                Oo(k, t, E, E, S, i, c, u, g);
              else
                switch (h === 99 && fe(k, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Oo(e, E, E, r && qr(qs(e, E, E, 0, 0, o, u, p, o, S = [], c), g), o, g, c, u, r ? S : g);
                    break;
                  default:
                    Oo(k, E, E, E, [""], g, 0, u, g);
                }
        }
        a = m = w = 0, y = d = 1, p = k = "", c = l;
        break;
      case 58:
        c = 1 + ut(k), w = v;
      default:
        if (y < 1) {
          if (f == 123)
            --y;
          else if (f == 125 && y++ == 0 && ph() == 125)
            continue;
        }
        switch (k += vi(f), f * y) {
          case 38:
            d = m > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[a++] = (ut(k) - 1) * d, d = 1;
            break;
          case 64:
            ft() === 45 && (k += Ro(Ie())), h = ft(), m = c = ut(p = k += yh(Lo())), f++;
            break;
          case 45:
            v === 45 && ut(k) == 2 && (y = 0);
        }
    }
  return i;
}
function qs(e, t, n, r, o, i, l, u, s, a, m) {
  for (var c = o - 1, h = o === 0 ? i : [""], w = Wu(h), v = 0, y = 0, L = 0; v < r; ++v)
    for (var d = 0, f = Sr(e, c + 1, c = uh(y = l[v])), p = e; d < w; ++d)
      (p = Hc(y > 0 ? h[d] + " " + f : b(f, /&\f/g, h[d]))) && (s[L++] = p);
  return Si(e, t, n, o === 0 ? bu : u, s, a, m);
}
function wh(e, t, n) {
  return Si(e, t, n, Uc, vi(dh()), Sr(e, 2, -2), 0);
}
function ea(e, t, n, r) {
  return Si(e, t, n, Hu, Sr(e, 0, r), Sr(e, r + 1, -1), r);
}
function _n(e, t) {
  for (var n = "", r = Wu(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Sh(e, t, n, r) {
  switch (e.type) {
    case lh:
      if (e.children.length)
        break;
    case ih:
    case Hu:
      return e.return = e.return || e.value;
    case Uc:
      return "";
    case bc:
      return e.return = e.value + "{" + _n(e.children, r) + "}";
    case bu:
      e.value = e.props.join(",");
  }
  return ut(n = _n(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function kh(e) {
  var t = Wu(e);
  return function(n, r, o, i) {
    for (var l = "", u = 0; u < t; u++)
      l += e[u](n, r, o, i) || "";
    return l;
  };
}
function xh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Yc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Eh = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = ft(), o === 38 && i === 12 && (n[r] = 1), !kr(i); )
    Ie();
  return br(t, Re);
}, Ch = function(t, n) {
  var r = -1, o = 44;
  do
    switch (kr(o)) {
      case 0:
        o === 38 && ft() === 12 && (n[r] = 1), t[r] += Eh(Re - 1, n, r);
        break;
      case 2:
        t[r] += Ro(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = ft() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += vi(o);
    }
  while (o = Ie());
  return t;
}, Ph = function(t, n) {
  return Kc(Ch(Vc(t), n));
}, ta = /* @__PURE__ */ new WeakMap(), _h = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ta.get(r)) && !o) {
      ta.set(t, !0);
      for (var i = [], l = Ph(n, i), u = r.props, s = 0, a = 0; s < l.length; s++)
        for (var m = 0; m < u.length; m++, a++)
          t.props[a] = i[s] ? l[s].replace(/&\f/g, u[m]) : u[m] + " " + l[s];
    }
  }
}, Nh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Qc(e, t) {
  switch (ah(e, t)) {
    case 5103:
      return U + "print-" + e + e;
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
      return U + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + bo + e + ve + e + e;
    case 6828:
    case 4268:
      return U + e + ve + e + e;
    case 6165:
      return U + e + ve + "flex-" + e + e;
    case 5187:
      return U + e + b(e, /(\w+).+(:[^]+)/, U + "box-$1$2" + ve + "flex-$1$2") + e;
    case 5443:
      return U + e + ve + "flex-item-" + b(e, /flex-|-self/, "") + e;
    case 4675:
      return U + e + ve + "flex-line-pack" + b(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return U + e + ve + b(e, "shrink", "negative") + e;
    case 5292:
      return U + e + ve + b(e, "basis", "preferred-size") + e;
    case 6060:
      return U + "box-" + b(e, "-grow", "") + U + e + ve + b(e, "grow", "positive") + e;
    case 4554:
      return U + b(e, /([^-])(transform)/g, "$1" + U + "$2") + e;
    case 6187:
      return b(b(b(e, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return b(e, /(image-set\([^]*)/, U + "$1$`$1");
    case 4968:
      return b(b(e, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return b(e, /(.+)-inline(.+)/, U + "$1$2") + e;
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
      if (ut(e) - 1 - t > 6)
        switch (fe(e, t + 1)) {
          case 109:
            if (fe(e, t + 4) !== 45)
              break;
          case 102:
            return b(e, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + bo + (fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Fl(e, "stretch") ? Qc(b(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (fe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (fe(e, ut(e) - 3 - (~Fl(e, "!important") && 10))) {
        case 107:
          return b(e, ":", ":" + U) + e;
        case 101:
          return b(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + U + (fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + ve + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (fe(e, t + 11)) {
        case 114:
          return U + e + ve + b(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return U + e + ve + b(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return U + e + ve + b(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return U + e + ve + e + e;
  }
  return e;
}
var Th = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Hu:
        t.return = Qc(t.value, t.length);
        break;
      case bc:
        return _n([Yn(t, {
          value: b(t.value, "@", "@" + U)
        })], o);
      case bu:
        if (t.length)
          return fh(t.props, function(i) {
            switch (ch(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return _n([Yn(t, {
                  props: [b(i, /:(read-\w+)/, ":" + bo + "$1")]
                })], o);
              case "::placeholder":
                return _n([Yn(t, {
                  props: [b(i, /:(plac\w+)/, ":" + U + "input-$1")]
                }), Yn(t, {
                  props: [b(i, /:(plac\w+)/, ":" + bo + "$1")]
                }), Yn(t, {
                  props: [b(i, /:(plac\w+)/, ve + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Lh = [Th], Rh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var L = y.getAttribute("data-emotion");
      L.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Lh, i = {}, l, u = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var L = y.getAttribute("data-emotion").split(" "), d = 1; d < L.length; d++)
        i[L[d]] = !0;
      u.push(y);
    }
  );
  var s, a = [_h, Nh];
  {
    var m, c = [Sh, xh(function(y) {
      m.insert(y);
    })], h = kh(a.concat(o, c)), w = function(L) {
      return _n(vh(L), h);
    };
    s = function(L, d, f, p) {
      m = f, w(L ? L + "{" + d.styles + "}" : d.styles), p && (v.inserted[d.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new oh({
      key: n,
      container: l,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: s
  };
  return v.sheet.hydrate(u), v;
}, Xc = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae = typeof Symbol == "function" && Symbol.for, Vu = ae ? Symbol.for("react.element") : 60103, Ku = ae ? Symbol.for("react.portal") : 60106, ki = ae ? Symbol.for("react.fragment") : 60107, xi = ae ? Symbol.for("react.strict_mode") : 60108, Ei = ae ? Symbol.for("react.profiler") : 60114, Ci = ae ? Symbol.for("react.provider") : 60109, Pi = ae ? Symbol.for("react.context") : 60110, Yu = ae ? Symbol.for("react.async_mode") : 60111, _i = ae ? Symbol.for("react.concurrent_mode") : 60111, Ni = ae ? Symbol.for("react.forward_ref") : 60112, Ti = ae ? Symbol.for("react.suspense") : 60113, Oh = ae ? Symbol.for("react.suspense_list") : 60120, Li = ae ? Symbol.for("react.memo") : 60115, Ri = ae ? Symbol.for("react.lazy") : 60116, Dh = ae ? Symbol.for("react.block") : 60121, zh = ae ? Symbol.for("react.fundamental") : 60117, Mh = ae ? Symbol.for("react.responder") : 60118, Ah = ae ? Symbol.for("react.scope") : 60119;
function Be(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Vu:
        switch (e = e.type, e) {
          case Yu:
          case _i:
          case ki:
          case Ei:
          case xi:
          case Ti:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Pi:
              case Ni:
              case Ri:
              case Li:
              case Ci:
                return e;
              default:
                return t;
            }
        }
      case Ku:
        return t;
    }
  }
}
function Gc(e) {
  return Be(e) === _i;
}
W.AsyncMode = Yu;
W.ConcurrentMode = _i;
W.ContextConsumer = Pi;
W.ContextProvider = Ci;
W.Element = Vu;
W.ForwardRef = Ni;
W.Fragment = ki;
W.Lazy = Ri;
W.Memo = Li;
W.Portal = Ku;
W.Profiler = Ei;
W.StrictMode = xi;
W.Suspense = Ti;
W.isAsyncMode = function(e) {
  return Gc(e) || Be(e) === Yu;
};
W.isConcurrentMode = Gc;
W.isContextConsumer = function(e) {
  return Be(e) === Pi;
};
W.isContextProvider = function(e) {
  return Be(e) === Ci;
};
W.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vu;
};
W.isForwardRef = function(e) {
  return Be(e) === Ni;
};
W.isFragment = function(e) {
  return Be(e) === ki;
};
W.isLazy = function(e) {
  return Be(e) === Ri;
};
W.isMemo = function(e) {
  return Be(e) === Li;
};
W.isPortal = function(e) {
  return Be(e) === Ku;
};
W.isProfiler = function(e) {
  return Be(e) === Ei;
};
W.isStrictMode = function(e) {
  return Be(e) === xi;
};
W.isSuspense = function(e) {
  return Be(e) === Ti;
};
W.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ki || e === _i || e === Ei || e === xi || e === Ti || e === Oh || typeof e == "object" && e !== null && (e.$$typeof === Ri || e.$$typeof === Li || e.$$typeof === Ci || e.$$typeof === Pi || e.$$typeof === Ni || e.$$typeof === zh || e.$$typeof === Mh || e.$$typeof === Ah || e.$$typeof === Dh);
};
W.typeOf = Be;
Xc.exports = W;
var $h = Xc.exports, Zc = $h, Ih = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, jh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Jc = {};
Jc[Zc.ForwardRef] = Ih;
Jc[Zc.Memo] = jh;
var Fh = !0;
function qc(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Qu = function(t, n, r) {
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
  Fh === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Xu = function(t, n, r) {
  Qu(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Bh(e) {
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
var Uh = {
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
}, bh = !1, Hh = /[A-Z]|^ms/g, Wh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ef = function(t) {
  return t.charCodeAt(1) === 45;
}, na = function(t) {
  return t != null && typeof t != "boolean";
}, sl = /* @__PURE__ */ Yc(function(e) {
  return ef(e) ? e : e.replace(Hh, "-$&").toLowerCase();
}), ra = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Wh, function(r, o, i) {
          return st = {
            name: o,
            styles: i,
            next: st
          }, o;
        });
  }
  return Uh[t] !== 1 && !ef(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Vh = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function xr(e, t, n) {
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
        return st = {
          name: o.name,
          styles: o.styles,
          next: st
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var l = i.next;
        if (l !== void 0)
          for (; l !== void 0; )
            st = {
              name: l.name,
              styles: l.styles,
              next: st
            }, l = l.next;
        var u = i.styles + ";";
        return u;
      }
      return Kh(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = st, a = n(e);
        return st = s, xr(e, t, a);
      }
      break;
    }
  }
  var m = n;
  if (t == null)
    return m;
  var c = t[m];
  return c !== void 0 ? c : m;
}
function Kh(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += xr(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object") {
        var u = l;
        t != null && t[u] !== void 0 ? r += i + "{" + t[u] + "}" : na(u) && (r += sl(i) + ":" + ra(i, u) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && bh)
          throw new Error(Vh);
        if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
          for (var s = 0; s < l.length; s++)
            na(l[s]) && (r += sl(i) + ":" + ra(i, l[s]) + ";");
        else {
          var a = xr(e, t, l);
          switch (i) {
            case "animation":
            case "animationName": {
              r += sl(i) + ":" + a + ";";
              break;
            }
            default:
              r += i + "{" + a + "}";
          }
        }
      }
    }
  return r;
}
var oa = /label:\s*([^\s;{]+)\s*(;|$)/g, st;
function Oi(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  st = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += xr(n, t, i);
  else {
    var l = i;
    o += l[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += xr(n, t, e[u]), r) {
      var s = i;
      o += s[u];
    }
  oa.lastIndex = 0;
  for (var a = "", m; (m = oa.exec(o)) !== null; )
    a += "-" + m[1];
  var c = Bh(o) + a;
  return {
    name: c,
    styles: o,
    next: st
  };
}
var Yh = function(t) {
  return t();
}, tf = jl["useInsertionEffect"] ? jl["useInsertionEffect"] : !1, nf = tf || Yh, ia = tf || N.useLayoutEffect, Qh = !1, rf = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Rh({
    key: "css"
  }) : null
);
rf.Provider;
var Gu = function(t) {
  return /* @__PURE__ */ N.forwardRef(function(n, r) {
    var o = N.useContext(rf);
    return t(n, o, r);
  });
}, Hr = /* @__PURE__ */ N.createContext({}), Zu = {}.hasOwnProperty, Ul = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Xh = function(t, n) {
  var r = {};
  for (var o in n)
    Zu.call(n, o) && (r[o] = n[o]);
  return r[Ul] = t, r;
}, Gh = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Qu(n, r, o), nf(function() {
    return Xu(n, r, o);
  }), null;
}, Zh = /* @__PURE__ */ Gu(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Ul], i = [r], l = "";
  typeof e.className == "string" ? l = qc(t.registered, i, e.className) : e.className != null && (l = e.className + " ");
  var u = Oi(i, void 0, N.useContext(Hr));
  l += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    Zu.call(e, a) && a !== "css" && a !== Ul && !Qh && (s[a] = e[a]);
  return s.className = l, n && (s.ref = n), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Gh, {
    cache: t,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ N.createElement(o, s));
}), Jh = Zh, al = { exports: {} }, la;
function qh() {
  return la || (la = 1, function(e) {
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
  }(al)), al.exports;
}
qh();
var ua = function(t, n) {
  var r = arguments;
  if (n == null || !Zu.call(n, "css"))
    return N.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Jh, i[1] = Xh(t, n);
  for (var l = 2; l < o; l++)
    i[l] = r[l];
  return N.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ua || (ua = {}));
var em = /* @__PURE__ */ Gu(function(e, t) {
  var n = e.styles, r = Oi([n], void 0, N.useContext(Hr)), o = N.useRef();
  return ia(function() {
    var i = t.key + "-global", l = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", i), l.hydrate([s])), o.current = [l, u], function() {
      l.flush();
    };
  }, [t]), ia(function() {
    var i = o.current, l = i[0], u = i[1];
    if (u) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Xu(t, r.next, !0), l.tags.length) {
      var s = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = s, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
}), tm = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, nm = /* @__PURE__ */ Yc(
  function(e) {
    return tm.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), rm = !1, om = nm, im = function(t) {
  return t !== "theme";
}, sa = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? om : im;
}, aa = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, lm = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Qu(n, r, o), nf(function() {
    return Xu(n, r, o);
  }), null;
}, um = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var u = aa(t, n, r), s = u || sa(o), a = !s("as");
  return function() {
    var m = arguments, c = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && c.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      c.push.apply(c, m);
    else {
      var h = m[0];
      c.push(h[0]);
      for (var w = m.length, v = 1; v < w; v++)
        c.push(m[v], h[v]);
    }
    var y = Gu(function(L, d, f) {
      var p = a && L.as || o, S = "", g = [], E = L;
      if (L.theme == null) {
        E = {};
        for (var k in L)
          E[k] = L[k];
        E.theme = N.useContext(Hr);
      }
      typeof L.className == "string" ? S = qc(d.registered, g, L.className) : L.className != null && (S = L.className + " ");
      var R = Oi(c.concat(g), d.registered, E);
      S += d.key + "-" + R.name, l !== void 0 && (S += " " + l);
      var I = a && u === void 0 ? sa(p) : s, D = {};
      for (var j in L)
        a && j === "as" || I(j) && (D[j] = L[j]);
      return D.className = S, f && (D.ref = f), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(lm, {
        cache: d,
        serialized: R,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ N.createElement(p, D));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = c, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return l === void 0 && rm ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), y.withComponent = function(L, d) {
      var f = e(L, de({}, n, d, {
        shouldForwardProp: aa(y, d, !0)
      }));
      return f.apply(void 0, c);
    }, y;
  };
}, sm = [
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
], ca = um.bind(null);
sm.forEach(function(e) {
  ca[e] = ca(e);
});
function am(e) {
  return e == null || Object.keys(e).length === 0;
}
function cm(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ x(em, {
    styles: typeof t == "function" ? (o) => t(am(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const fa = [];
function fm(e) {
  return fa[0] = e, Oi(fa);
}
function pn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function of(e) {
  if (/* @__PURE__ */ N.isValidElement(e) || !pn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = of(e[n]);
  }), t;
}
function Ho(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? de({}, e) : e;
  return pn(e) && pn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ N.isValidElement(t[o]) ? r[o] = t[o] : pn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && pn(e[o]) ? r[o] = Ho(e[o], t[o], n) : n.clone ? r[o] = pn(t[o]) ? of(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const dm = ["values", "unit", "step"], pm = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => de({}, n, {
    [r.key]: r.val
  }), {});
};
function hm(e) {
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
  } = e, o = yi(e, dm), i = pm(t), l = Object.keys(i);
  function u(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function s(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function a(h, w) {
    const v = l.indexOf(w);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(v !== -1 && typeof t[l[v]] == "number" ? t[l[v]] : w) - r / 100}${n})`;
  }
  function m(h) {
    return l.indexOf(h) + 1 < l.length ? a(h, l[l.indexOf(h) + 1]) : u(h);
  }
  function c(h) {
    const w = l.indexOf(h);
    return w === 0 ? u(l[1]) : w === l.length - 1 ? s(l[w]) : a(h, l[l.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return de({
    keys: l,
    values: i,
    up: u,
    down: s,
    between: a,
    only: m,
    not: c,
    unit: n
  }, o);
}
const mm = {
  borderRadius: 4
}, gm = mm;
function ar(e, t) {
  return t ? Ho(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ju = {
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
}, da = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ju[e]}px)`
};
function kt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || da;
    return t.reduce((l, u, s) => (l[i.up(i.keys[s])] = n(t[s]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || da;
    return Object.keys(t).reduce((l, u) => {
      if (Object.keys(i.values || Ju).indexOf(u) !== -1) {
        const s = i.up(u);
        l[s] = n(t[u], u);
      } else {
        const s = u;
        l[s] = t[s];
      }
      return l;
    }, {});
  }
  return n(t);
}
function ym(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function pa(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function lf(e) {
  if (typeof e != "string")
    throw new Error(eh(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Di(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Wo(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Di(e, n) || r, t && (o = t(o, r, e)), o;
}
function ne(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (l) => {
    if (l[t] == null)
      return null;
    const u = l[t], s = l.theme, a = Di(s, r) || {};
    return kt(l, u, (c) => {
      let h = Wo(a, o, c);
      return c === h && typeof c == "string" && (h = Wo(a, o, `${t}${c === "default" ? "" : lf(c)}`, c)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function vm(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const wm = {
  m: "margin",
  p: "padding"
}, Sm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ha = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, km = vm((e) => {
  if (e.length > 2)
    if (ha[e])
      e = ha[e];
    else
      return [e];
  const [t, n] = e.split(""), r = wm[t], o = Sm[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), qu = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], es = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...qu, ...es];
function Wr(e, t, n, r) {
  var o;
  const i = (o = Di(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (l) => typeof l == "string" ? l : i * l : Array.isArray(i) ? (l) => typeof l == "string" ? l : i[l] : typeof i == "function" ? i : () => {
  };
}
function uf(e) {
  return Wr(e, "spacing", 8);
}
function Vr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function xm(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Vr(t, n), r), {});
}
function Em(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = km(n), i = xm(o, r), l = e[n];
  return kt(e, l, i);
}
function sf(e, t) {
  const n = uf(e.theme);
  return Object.keys(e).map((r) => Em(e, t, r, n)).reduce(ar, {});
}
function J(e) {
  return sf(e, qu);
}
J.propTypes = {};
J.filterProps = qu;
function q(e) {
  return sf(e, es);
}
q.propTypes = {};
q.filterProps = es;
function Cm(e = 8) {
  if (e.mui)
    return e;
  const t = uf({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const l = t(i);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = !0, n;
}
function zi(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? ar(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function He(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ge(e, t) {
  return ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Pm = Ge("border", He), _m = Ge("borderTop", He), Nm = Ge("borderRight", He), Tm = Ge("borderBottom", He), Lm = Ge("borderLeft", He), Rm = Ge("borderColor"), Om = Ge("borderTopColor"), Dm = Ge("borderRightColor"), zm = Ge("borderBottomColor"), Mm = Ge("borderLeftColor"), Am = Ge("outline", He), $m = Ge("outlineColor"), Mi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Wr(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Vr(t, r)
    });
    return kt(e, e.borderRadius, n);
  }
  return null;
};
Mi.propTypes = {};
Mi.filterProps = ["borderRadius"];
zi(Pm, _m, Nm, Tm, Lm, Rm, Om, Dm, zm, Mm, Mi, Am, $m);
const Ai = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Wr(e.theme, "spacing", 8), n = (r) => ({
      gap: Vr(t, r)
    });
    return kt(e, e.gap, n);
  }
  return null;
};
Ai.propTypes = {};
Ai.filterProps = ["gap"];
const $i = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Wr(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Vr(t, r)
    });
    return kt(e, e.columnGap, n);
  }
  return null;
};
$i.propTypes = {};
$i.filterProps = ["columnGap"];
const Ii = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Wr(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Vr(t, r)
    });
    return kt(e, e.rowGap, n);
  }
  return null;
};
Ii.propTypes = {};
Ii.filterProps = ["rowGap"];
const Im = ne({
  prop: "gridColumn"
}), jm = ne({
  prop: "gridRow"
}), Fm = ne({
  prop: "gridAutoFlow"
}), Bm = ne({
  prop: "gridAutoColumns"
}), Um = ne({
  prop: "gridAutoRows"
}), bm = ne({
  prop: "gridTemplateColumns"
}), Hm = ne({
  prop: "gridTemplateRows"
}), Wm = ne({
  prop: "gridTemplateAreas"
}), Vm = ne({
  prop: "gridArea"
});
zi(Ai, $i, Ii, Im, jm, Fm, Bm, Um, bm, Hm, Wm, Vm);
function Nn(e, t) {
  return t === "grey" ? t : e;
}
const Km = ne({
  prop: "color",
  themeKey: "palette",
  transform: Nn
}), Ym = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Nn
}), Qm = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Nn
});
zi(Km, Ym, Qm);
function Ae(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Xm = ne({
  prop: "width",
  transform: Ae
}), ts = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Ju[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Ae(n)
      };
    };
    return kt(e, e.maxWidth, t);
  }
  return null;
};
ts.filterProps = ["maxWidth"];
const Gm = ne({
  prop: "minWidth",
  transform: Ae
}), Zm = ne({
  prop: "height",
  transform: Ae
}), Jm = ne({
  prop: "maxHeight",
  transform: Ae
}), qm = ne({
  prop: "minHeight",
  transform: Ae
});
ne({
  prop: "size",
  cssProperty: "width",
  transform: Ae
});
ne({
  prop: "size",
  cssProperty: "height",
  transform: Ae
});
const eg = ne({
  prop: "boxSizing"
});
zi(Xm, ts, Gm, Zm, Jm, qm, eg);
const tg = {
  // borders
  border: {
    themeKey: "borders",
    transform: He
  },
  borderTop: {
    themeKey: "borders",
    transform: He
  },
  borderRight: {
    themeKey: "borders",
    transform: He
  },
  borderBottom: {
    themeKey: "borders",
    transform: He
  },
  borderLeft: {
    themeKey: "borders",
    transform: He
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
    transform: He
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Mi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Nn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Nn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Nn
  },
  // spacing
  p: {
    style: q
  },
  pt: {
    style: q
  },
  pr: {
    style: q
  },
  pb: {
    style: q
  },
  pl: {
    style: q
  },
  px: {
    style: q
  },
  py: {
    style: q
  },
  padding: {
    style: q
  },
  paddingTop: {
    style: q
  },
  paddingRight: {
    style: q
  },
  paddingBottom: {
    style: q
  },
  paddingLeft: {
    style: q
  },
  paddingX: {
    style: q
  },
  paddingY: {
    style: q
  },
  paddingInline: {
    style: q
  },
  paddingInlineStart: {
    style: q
  },
  paddingInlineEnd: {
    style: q
  },
  paddingBlock: {
    style: q
  },
  paddingBlockStart: {
    style: q
  },
  paddingBlockEnd: {
    style: q
  },
  m: {
    style: J
  },
  mt: {
    style: J
  },
  mr: {
    style: J
  },
  mb: {
    style: J
  },
  ml: {
    style: J
  },
  mx: {
    style: J
  },
  my: {
    style: J
  },
  margin: {
    style: J
  },
  marginTop: {
    style: J
  },
  marginRight: {
    style: J
  },
  marginBottom: {
    style: J
  },
  marginLeft: {
    style: J
  },
  marginX: {
    style: J
  },
  marginY: {
    style: J
  },
  marginInline: {
    style: J
  },
  marginInlineStart: {
    style: J
  },
  marginInlineEnd: {
    style: J
  },
  marginBlock: {
    style: J
  },
  marginBlockStart: {
    style: J
  },
  marginBlockEnd: {
    style: J
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
    style: Ai
  },
  rowGap: {
    style: Ii
  },
  columnGap: {
    style: $i
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
    transform: Ae
  },
  maxWidth: {
    style: ts
  },
  minWidth: {
    transform: Ae
  },
  height: {
    transform: Ae
  },
  maxHeight: {
    transform: Ae
  },
  minHeight: {
    transform: Ae
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
}, af = tg;
function ng(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function rg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function og() {
  function e(n, r, o, i) {
    const l = {
      [n]: r,
      theme: o
    }, u = i[n];
    if (!u)
      return {
        [n]: r
      };
    const {
      cssProperty: s = n,
      themeKey: a,
      transform: m,
      style: c
    } = u;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = Di(o, a) || {};
    return c ? c(l) : kt(l, r, (v) => {
      let y = Wo(h, m, v);
      return v === y && typeof v == "string" && (y = Wo(h, m, `${n}${v === "default" ? "" : lf(v)}`, v)), s === !1 ? y : {
        [s]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {},
      nested: l
    } = n || {};
    if (!o)
      return null;
    const u = (r = i.unstable_sxConfig) != null ? r : af;
    function s(a) {
      let m = a;
      if (typeof a == "function")
        m = a(i);
      else if (typeof a != "object")
        return a;
      if (!m)
        return null;
      const c = ym(i.breakpoints), h = Object.keys(c);
      let w = c;
      return Object.keys(m).forEach((v) => {
        const y = rg(m[v], i);
        if (y != null)
          if (typeof y == "object")
            if (u[v])
              w = ar(w, e(v, y, i, u));
            else {
              const L = kt({
                theme: i
              }, y, (d) => ({
                [v]: d
              }));
              ng(L, y) ? w[v] = t({
                sx: y,
                theme: i,
                nested: !0
              }) : w = ar(w, L);
            }
          else
            w = ar(w, e(v, y, i, u));
      }), !l && i.modularCssLayers ? {
        "@layer sx": pa(h, w)
      } : pa(h, w);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const cf = og();
cf.filterProps = ["sx"];
const ig = cf;
function lg(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const ug = ["breakpoints", "palette", "spacing", "shape"];
function sg(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, l = yi(e, ug), u = hm(n), s = Cm(o);
  let a = Ho({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: de({
      mode: "light"
    }, r),
    spacing: s,
    shape: de({}, gm, i)
  }, l);
  return a.applyStyles = lg, a = t.reduce((m, c) => Ho(m, c), a), a.unstable_sxConfig = de({}, af, l == null ? void 0 : l.unstable_sxConfig), a.unstable_sx = function(c) {
    return ig({
      sx: c,
      theme: this
    });
  }, a;
}
function ag(e) {
  return Object.keys(e).length === 0;
}
function ns(e = null) {
  const t = N.useContext(Hr);
  return !t || ag(t) ? e : t;
}
const cg = sg();
function fg(e = cg) {
  return ns(e);
}
function cl(e) {
  const t = fm(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function dg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = fg(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((l) => cl(typeof l == "function" ? l(o) : l)) : i = cl(i)), /* @__PURE__ */ x(cm, {
    styles: i
  });
}
const pg = typeof window < "u" ? N.useLayoutEffect : N.useEffect, hg = pg;
let ma = 0;
function mg(e) {
  const [t, n] = N.useState(e), r = e || t;
  return N.useEffect(() => {
    t == null && (ma += 1, n(`mui-${ma}`));
  }, [t]), r;
}
const ga = jl["useId".toString()];
function gg(e) {
  if (ga !== void 0) {
    const t = ga();
    return e ?? t;
  }
  return mg(e);
}
const yg = /* @__PURE__ */ N.createContext(null), ff = yg;
function df() {
  return N.useContext(ff);
}
const vg = typeof Symbol == "function" && Symbol.for, wg = vg ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Sg(e, t) {
  return typeof t == "function" ? t(e) : de({}, e, t);
}
function kg(e) {
  const {
    children: t,
    theme: n
  } = e, r = df(), o = N.useMemo(() => {
    const i = r === null ? n : Sg(r, n);
    return i != null && (i[wg] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ x(ff.Provider, {
    value: o,
    children: t
  });
}
const xg = ["value"], Eg = /* @__PURE__ */ N.createContext();
function Cg(e) {
  let {
    value: t
  } = e, n = yi(e, xg);
  return /* @__PURE__ */ x(Eg.Provider, de({
    value: t ?? !0
  }, n));
}
const Pg = /* @__PURE__ */ N.createContext(void 0);
function _g({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ x(Pg.Provider, {
    value: e,
    children: t
  });
}
function Ng(e) {
  const t = ns(), n = gg() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, hg(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const l = i.firstChild;
    if (o) {
      var u;
      if (l && (u = l.hasAttribute) != null && u.call(l, "data-mui-layer-order") && l.getAttribute("data-mui-layer-order") === n)
        return;
      const a = document.createElement("style");
      a.setAttribute("data-mui-layer-order", n), a.textContent = o, i.prepend(a);
    } else {
      var s;
      (s = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || s.remove();
    }
  }, [o, n]), o ? /* @__PURE__ */ x(dg, {
    styles: o
  }) : null;
}
const ya = {};
function va(e, t, n, r = !1) {
  return N.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), l = e ? de({}, t, {
        [e]: i
      }) : i;
      return r ? () => l : l;
    }
    return e ? de({}, t, {
      [e]: n
    }) : de({}, t, n);
  }, [e, t, n, r]);
}
function Tg(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = ns(ya), i = df() || ya, l = va(r, o, n), u = va(r, i, n, !0), s = l.direction === "rtl", a = Ng(l);
  return /* @__PURE__ */ x(kg, {
    theme: u,
    children: /* @__PURE__ */ x(Hr.Provider, {
      value: l,
      children: /* @__PURE__ */ x(Cg, {
        value: s,
        children: /* @__PURE__ */ M(_g, {
          value: l == null ? void 0 : l.components,
          children: [a, t]
        })
      })
    })
  });
}
const Lg = ["theme"];
function Rg(e) {
  let {
    theme: t
  } = e, n = yi(e, Lg);
  const r = t[Js];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = de({}, r, {
    vars: null
  }) : t && !t.vars && (o = de({}, t, {
    vars: null
  }))), /* @__PURE__ */ x(Tg, de({}, n, {
    themeId: r ? Js : void 0,
    theme: o
  }));
}
var pf = { exports: {} }, Ue = {}, hf = { exports: {} }, mf = {};
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
  function t(P, _) {
    var T = P.length;
    P.push(_);
    e:
      for (; 0 < T; ) {
        var z = T - 1 >>> 1, F = P[z];
        if (0 < o(F, _))
          P[z] = _, P[T] = F, T = z;
        else
          break e;
      }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0)
      return null;
    var _ = P[0], T = P.pop();
    if (T !== _) {
      P[0] = T;
      e:
        for (var z = 0, F = P.length, mt = F >>> 1; z < mt; ) {
          var me = 2 * (z + 1) - 1, ll = P[me], Qt = me + 1, Zr = P[Qt];
          if (0 > o(ll, T))
            Qt < F && 0 > o(Zr, ll) ? (P[z] = Zr, P[Qt] = T, z = Qt) : (P[z] = ll, P[me] = T, z = me);
          else if (Qt < F && 0 > o(Zr, T))
            P[z] = Zr, P[Qt] = T, z = Qt;
          else
            break e;
        }
    }
    return _;
  }
  function o(P, _) {
    var T = P.sortIndex - _.sortIndex;
    return T !== 0 ? T : P.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var s = [], a = [], m = 1, c = null, h = 3, w = !1, v = !1, y = !1, L = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var _ = n(a); _ !== null; ) {
      if (_.callback === null)
        r(a);
      else if (_.startTime <= P)
        r(a), _.sortIndex = _.expirationTime, t(s, _);
      else
        break;
      _ = n(a);
    }
  }
  function S(P) {
    if (y = !1, p(P), !v)
      if (n(s) !== null)
        v = !0, ht(g);
      else {
        var _ = n(a);
        _ !== null && A(S, _.startTime - P);
      }
  }
  function g(P, _) {
    v = !1, y && (y = !1, d(R), R = -1), w = !0;
    var T = h;
    try {
      for (p(_), c = n(s); c !== null && (!(c.expirationTime > _) || P && !j()); ) {
        var z = c.callback;
        if (typeof z == "function") {
          c.callback = null, h = c.priorityLevel;
          var F = z(c.expirationTime <= _);
          _ = e.unstable_now(), typeof F == "function" ? c.callback = F : c === n(s) && r(s), p(_);
        } else
          r(s);
        c = n(s);
      }
      if (c !== null)
        var mt = !0;
      else {
        var me = n(a);
        me !== null && A(S, me.startTime - _), mt = !1;
      }
      return mt;
    } finally {
      c = null, h = T, w = !1;
    }
  }
  var E = !1, k = null, R = -1, I = 5, D = -1;
  function j() {
    return !(e.unstable_now() - D < I);
  }
  function Oe() {
    if (k !== null) {
      var P = e.unstable_now();
      D = P;
      var _ = !0;
      try {
        _ = k(!0, P);
      } finally {
        _ ? De() : (E = !1, k = null);
      }
    } else
      E = !1;
  }
  var De;
  if (typeof f == "function")
    De = function() {
      f(Oe);
    };
  else if (typeof MessageChannel < "u") {
    var ot = new MessageChannel(), Yt = ot.port2;
    ot.port1.onmessage = Oe, De = function() {
      Yt.postMessage(null);
    };
  } else
    De = function() {
      L(Oe, 0);
    };
  function ht(P) {
    k = P, E || (E = !0, De());
  }
  function A(P, _) {
    R = L(function() {
      P(e.unstable_now());
    }, _);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    v || w || (v = !0, ht(g));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var _ = 3;
        break;
      default:
        _ = h;
    }
    var T = h;
    h = _;
    try {
      return P();
    } finally {
      h = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, _) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var T = h;
    h = P;
    try {
      return _();
    } finally {
      h = T;
    }
  }, e.unstable_scheduleCallback = function(P, _, T) {
    var z = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? z + T : z) : T = z, P) {
      case 1:
        var F = -1;
        break;
      case 2:
        F = 250;
        break;
      case 5:
        F = 1073741823;
        break;
      case 4:
        F = 1e4;
        break;
      default:
        F = 5e3;
    }
    return F = T + F, P = { id: m++, callback: _, priorityLevel: P, startTime: T, expirationTime: F, sortIndex: -1 }, T > z ? (P.sortIndex = T, t(a, P), n(s) === null && P === n(a) && (y ? (d(R), R = -1) : y = !0, A(S, T - z))) : (P.sortIndex = F, t(s, P), v || w || (v = !0, ht(g))), P;
  }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function(P) {
    var _ = h;
    return function() {
      var T = h;
      h = _;
      try {
        return P.apply(this, arguments);
      } finally {
        h = T;
      }
    };
  };
})(mf);
hf.exports = mf;
var Og = hf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dg = N, Fe = Og;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var gf = /* @__PURE__ */ new Set(), Er = {};
function sn(e, t) {
  An(e, t), An(e + "Capture", t);
}
function An(e, t) {
  for (Er[e] = t, e = 0; e < t.length; e++)
    gf.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bl = Object.prototype.hasOwnProperty, zg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wa = {}, Sa = {};
function Mg(e) {
  return bl.call(Sa, e) ? !0 : bl.call(wa, e) ? !1 : zg.test(e) ? Sa[e] = !0 : (wa[e] = !0, !1);
}
function Ag(e, t, n, r) {
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
function $g(e, t, n, r) {
  if (t === null || typeof t > "u" || Ag(e, t, n, r))
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
function Ce(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  he[e] = new Ce(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  he[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  he[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  he[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  he[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  he[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  he[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  he[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  he[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var rs = /[\-:]([a-z])/g;
function os(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    rs,
    os
  );
  he[t] = new Ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(rs, os);
  he[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(rs, os);
  he[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  he[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  he[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function is(e, t, n, r) {
  var o = he.hasOwnProperty(t) ? he[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($g(t, n, o, r) && (n = null), r || o === null ? Mg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = Dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, eo = Symbol.for("react.element"), hn = Symbol.for("react.portal"), mn = Symbol.for("react.fragment"), ls = Symbol.for("react.strict_mode"), Hl = Symbol.for("react.profiler"), yf = Symbol.for("react.provider"), vf = Symbol.for("react.context"), us = Symbol.for("react.forward_ref"), Wl = Symbol.for("react.suspense"), Vl = Symbol.for("react.suspense_list"), ss = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), wf = Symbol.for("react.offscreen"), ka = Symbol.iterator;
function Qn(e) {
  return e === null || typeof e != "object" ? null : (e = ka && e[ka] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Z = Object.assign, fl;
function rr(e) {
  if (fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      fl = t && t[1] || "";
    }
  return `
` + fl + e;
}
var dl = !1;
function pl(e, t) {
  if (!e || dl)
    return "";
  dl = !0;
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
`), i = r.stack.split(`
`), l = o.length - 1, u = i.length - 1; 1 <= l && 0 <= u && o[l] !== i[u]; )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if (l--, u--, 0 > u || o[l] !== i[u]) {
                var s = `
` + o[l].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    dl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? rr(e) : "";
}
function Ig(e) {
  switch (e.tag) {
    case 5:
      return rr(e.type);
    case 16:
      return rr("Lazy");
    case 13:
      return rr("Suspense");
    case 19:
      return rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = pl(e.type, !1), e;
    case 11:
      return e = pl(e.type.render, !1), e;
    case 1:
      return e = pl(e.type, !0), e;
    default:
      return "";
  }
}
function Kl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case mn:
      return "Fragment";
    case hn:
      return "Portal";
    case Hl:
      return "Profiler";
    case ls:
      return "StrictMode";
    case Wl:
      return "Suspense";
    case Vl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vf:
        return (e.displayName || "Context") + ".Consumer";
      case yf:
        return (e._context.displayName || "Context") + ".Provider";
      case us:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ss:
        return t = e.displayName || null, t !== null ? t : Kl(e.type) || "Memo";
      case Tt:
        t = e._payload, e = e._init;
        try {
          return Kl(e(t));
        } catch {
        }
    }
  return null;
}
function jg(e) {
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
      return Kl(t);
    case 8:
      return t === ls ? "StrictMode" : "Mode";
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
function bt(e) {
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
function Sf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Fg(e) {
  var t = Sf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function to(e) {
  e._valueTracker || (e._valueTracker = Fg(e));
}
function kf(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Sf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Vo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yl(e, t) {
  var n = t.checked;
  return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function xa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = bt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function xf(e, t) {
  t = t.checked, t != null && is(e, "checked", t, !1);
}
function Ql(e, t) {
  xf(e, t);
  var n = bt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Xl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xl(e, t.type, bt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ea(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Xl(e, t, n) {
  (t !== "number" || Vo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var or = Array.isArray;
function Tn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + bt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Gl(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(C(91));
  return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ca(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(C(92));
      if (or(n)) {
        if (1 < n.length)
          throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: bt(n) };
}
function Ef(e, t) {
  var n = bt(t.value), r = bt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Pa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Cf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var no, Pf = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (no = no || document.createElement("div"), no.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = no.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var cr = {
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
}, Bg = ["Webkit", "ms", "Moz", "O"];
Object.keys(cr).forEach(function(e) {
  Bg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), cr[t] = cr[e];
  });
});
function _f(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + t).trim() : t + "px";
}
function Nf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = _f(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Ug = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Jl(e, t) {
  if (t) {
    if (Ug[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(C(62));
  }
}
function ql(e, t) {
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
var eu = null;
function as(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var tu = null, Ln = null, Rn = null;
function _a(e) {
  if (e = Qr(e)) {
    if (typeof tu != "function")
      throw Error(C(280));
    var t = e.stateNode;
    t && (t = bi(t), tu(e.stateNode, e.type, t));
  }
}
function Tf(e) {
  Ln ? Rn ? Rn.push(e) : Rn = [e] : Ln = e;
}
function Lf() {
  if (Ln) {
    var e = Ln, t = Rn;
    if (Rn = Ln = null, _a(e), t)
      for (e = 0; e < t.length; e++)
        _a(t[e]);
  }
}
function Rf(e, t) {
  return e(t);
}
function Of() {
}
var hl = !1;
function Df(e, t, n) {
  if (hl)
    return e(t, n);
  hl = !0;
  try {
    return Rf(e, t, n);
  } finally {
    hl = !1, (Ln !== null || Rn !== null) && (Of(), Lf());
  }
}
function Pr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = bi(n);
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
    throw Error(C(231, t, typeof n));
  return n;
}
var nu = !1;
if (xt)
  try {
    var Xn = {};
    Object.defineProperty(Xn, "passive", { get: function() {
      nu = !0;
    } }), window.addEventListener("test", Xn, Xn), window.removeEventListener("test", Xn, Xn);
  } catch {
    nu = !1;
  }
function bg(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var fr = !1, Ko = null, Yo = !1, ru = null, Hg = { onError: function(e) {
  fr = !0, Ko = e;
} };
function Wg(e, t, n, r, o, i, l, u, s) {
  fr = !1, Ko = null, bg.apply(Hg, arguments);
}
function Vg(e, t, n, r, o, i, l, u, s) {
  if (Wg.apply(this, arguments), fr) {
    if (fr) {
      var a = Ko;
      fr = !1, Ko = null;
    } else
      throw Error(C(198));
    Yo || (Yo = !0, ru = a);
  }
}
function an(e) {
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
function zf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Na(e) {
  if (an(e) !== e)
    throw Error(C(188));
}
function Kg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = an(e), t === null)
      throw Error(C(188));
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
          return Na(o), e;
        if (i === r)
          return Na(o), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (u === r) {
          l = !0, r = o, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (u === r) {
            l = !0, r = i, n = o;
            break;
          }
          u = u.sibling;
        }
        if (!l)
          throw Error(C(189));
      }
    }
    if (n.alternate !== r)
      throw Error(C(190));
  }
  if (n.tag !== 3)
    throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Mf(e) {
  return e = Kg(e), e !== null ? Af(e) : null;
}
function Af(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Af(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var $f = Fe.unstable_scheduleCallback, Ta = Fe.unstable_cancelCallback, Yg = Fe.unstable_shouldYield, Qg = Fe.unstable_requestPaint, te = Fe.unstable_now, Xg = Fe.unstable_getCurrentPriorityLevel, cs = Fe.unstable_ImmediatePriority, If = Fe.unstable_UserBlockingPriority, Qo = Fe.unstable_NormalPriority, Gg = Fe.unstable_LowPriority, jf = Fe.unstable_IdlePriority, ji = null, dt = null;
function Zg(e) {
  if (dt && typeof dt.onCommitFiberRoot == "function")
    try {
      dt.onCommitFiberRoot(ji, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var tt = Math.clz32 ? Math.clz32 : ey, Jg = Math.log, qg = Math.LN2;
function ey(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Jg(e) / qg | 0) | 0;
}
var ro = 64, oo = 4194304;
function ir(e) {
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
function Xo(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = ir(u) : (i &= l, i !== 0 && (r = ir(i)));
  } else
    l = n & ~o, l !== 0 ? r = ir(l) : i !== 0 && (r = ir(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - tt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function ty(e, t) {
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
function ny(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - tt(i), u = 1 << l, s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = ty(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function ou(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ff() {
  var e = ro;
  return ro <<= 1, !(ro & 4194240) && (ro = 64), e;
}
function ml(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Kr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n;
}
function ry(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - tt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function fs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var H = 0;
function Bf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Uf, ds, bf, Hf, Wf, iu = !1, io = [], Mt = null, At = null, $t = null, _r = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), Rt = [], oy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function La(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      $t = null;
      break;
    case "pointerover":
    case "pointerout":
      _r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Nr.delete(t.pointerId);
  }
}
function Gn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Qr(t), t !== null && ds(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function iy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Mt = Gn(Mt, e, t, n, r, o), !0;
    case "dragenter":
      return At = Gn(At, e, t, n, r, o), !0;
    case "mouseover":
      return $t = Gn($t, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return _r.set(i, Gn(_r.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Nr.set(i, Gn(Nr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Vf(e) {
  var t = Zt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = zf(n), t !== null) {
          e.blockedOn = t, Wf(e.priority, function() {
            bf(n);
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
function Do(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = lu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      eu = r, n.target.dispatchEvent(r), eu = null;
    } else
      return t = Qr(n), t !== null && ds(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ra(e, t, n) {
  Do(e) && n.delete(t);
}
function ly() {
  iu = !1, Mt !== null && Do(Mt) && (Mt = null), At !== null && Do(At) && (At = null), $t !== null && Do($t) && ($t = null), _r.forEach(Ra), Nr.forEach(Ra);
}
function Zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, iu || (iu = !0, Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, ly)));
}
function Tr(e) {
  function t(o) {
    return Zn(o, e);
  }
  if (0 < io.length) {
    Zn(io[0], e);
    for (var n = 1; n < io.length; n++) {
      var r = io[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Mt !== null && Zn(Mt, e), At !== null && Zn(At, e), $t !== null && Zn($t, e), _r.forEach(t), Nr.forEach(t), n = 0; n < Rt.length; n++)
    r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null); )
    Vf(n), n.blockedOn === null && Rt.shift();
}
var On = _t.ReactCurrentBatchConfig, Go = !0;
function uy(e, t, n, r) {
  var o = H, i = On.transition;
  On.transition = null;
  try {
    H = 1, ps(e, t, n, r);
  } finally {
    H = o, On.transition = i;
  }
}
function sy(e, t, n, r) {
  var o = H, i = On.transition;
  On.transition = null;
  try {
    H = 4, ps(e, t, n, r);
  } finally {
    H = o, On.transition = i;
  }
}
function ps(e, t, n, r) {
  if (Go) {
    var o = lu(e, t, n, r);
    if (o === null)
      Pl(e, t, r, Zo, n), La(e, r);
    else if (iy(o, e, t, n, r))
      r.stopPropagation();
    else if (La(e, r), t & 4 && -1 < oy.indexOf(e)) {
      for (; o !== null; ) {
        var i = Qr(o);
        if (i !== null && Uf(i), i = lu(e, t, n, r), i === null && Pl(e, t, r, Zo, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Pl(e, t, r, null, n);
  }
}
var Zo = null;
function lu(e, t, n, r) {
  if (Zo = null, e = as(r), e = Zt(e), e !== null)
    if (t = an(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = zf(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Zo = e, null;
}
function Kf(e) {
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
      switch (Xg()) {
        case cs:
          return 1;
        case If:
          return 4;
        case Qo:
        case Gg:
          return 16;
        case jf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null, hs = null, zo = null;
function Yf() {
  if (zo)
    return zo;
  var e, t = hs, n = t.length, r, o = "value" in Dt ? Dt.value : Dt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return zo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Mo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function lo() {
  return !0;
}
function Oa() {
  return !1;
}
function be(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? lo : Oa, this.isPropagationStopped = Oa, this;
  }
  return Z(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = lo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = lo);
  }, persist: function() {
  }, isPersistent: lo }), t;
}
var Vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ms = be(Vn), Yr = Z({}, Vn, { view: 0, detail: 0 }), ay = be(Yr), gl, yl, Jn, Fi = Z({}, Yr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Jn && (Jn && e.type === "mousemove" ? (gl = e.screenX - Jn.screenX, yl = e.screenY - Jn.screenY) : yl = gl = 0, Jn = e), gl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : yl;
} }), Da = be(Fi), cy = Z({}, Fi, { dataTransfer: 0 }), fy = be(cy), dy = Z({}, Yr, { relatedTarget: 0 }), vl = be(dy), py = Z({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hy = be(py), my = Z({}, Vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), gy = be(my), yy = Z({}, Vn, { data: 0 }), za = be(yy), vy = {
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
}, wy = {
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
}, Sy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ky(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sy[e]) ? !!t[e] : !1;
}
function gs() {
  return ky;
}
var xy = Z({}, Yr, { key: function(e) {
  if (e.key) {
    var t = vy[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Mo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wy[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gs, charCode: function(e) {
  return e.type === "keypress" ? Mo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ey = be(xy), Cy = Z({}, Fi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ma = be(Cy), Py = Z({}, Yr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gs }), _y = be(Py), Ny = Z({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ty = be(Ny), Ly = Z({}, Fi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ry = be(Ly), Oy = [9, 13, 27, 32], ys = xt && "CompositionEvent" in window, dr = null;
xt && "documentMode" in document && (dr = document.documentMode);
var Dy = xt && "TextEvent" in window && !dr, Qf = xt && (!ys || dr && 8 < dr && 11 >= dr), Aa = String.fromCharCode(32), $a = !1;
function Xf(e, t) {
  switch (e) {
    case "keyup":
      return Oy.indexOf(t.keyCode) !== -1;
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
function Gf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var gn = !1;
function zy(e, t) {
  switch (e) {
    case "compositionend":
      return Gf(t);
    case "keypress":
      return t.which !== 32 ? null : ($a = !0, Aa);
    case "textInput":
      return e = t.data, e === Aa && $a ? null : e;
    default:
      return null;
  }
}
function My(e, t) {
  if (gn)
    return e === "compositionend" || !ys && Xf(e, t) ? (e = Yf(), zo = hs = Dt = null, gn = !1, e) : null;
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
      return Qf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ay = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ay[e.type] : t === "textarea";
}
function Zf(e, t, n, r) {
  Tf(r), t = Jo(t, "onChange"), 0 < t.length && (n = new ms("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var pr = null, Lr = null;
function $y(e) {
  sd(e, 0);
}
function Bi(e) {
  var t = wn(e);
  if (kf(t))
    return e;
}
function Iy(e, t) {
  if (e === "change")
    return t;
}
var Jf = !1;
if (xt) {
  var wl;
  if (xt) {
    var Sl = "oninput" in document;
    if (!Sl) {
      var ja = document.createElement("div");
      ja.setAttribute("oninput", "return;"), Sl = typeof ja.oninput == "function";
    }
    wl = Sl;
  } else
    wl = !1;
  Jf = wl && (!document.documentMode || 9 < document.documentMode);
}
function Fa() {
  pr && (pr.detachEvent("onpropertychange", qf), Lr = pr = null);
}
function qf(e) {
  if (e.propertyName === "value" && Bi(Lr)) {
    var t = [];
    Zf(t, Lr, e, as(e)), Df($y, t);
  }
}
function jy(e, t, n) {
  e === "focusin" ? (Fa(), pr = t, Lr = n, pr.attachEvent("onpropertychange", qf)) : e === "focusout" && Fa();
}
function Fy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Bi(Lr);
}
function By(e, t) {
  if (e === "click")
    return Bi(t);
}
function Uy(e, t) {
  if (e === "input" || e === "change")
    return Bi(t);
}
function by(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var rt = typeof Object.is == "function" ? Object.is : by;
function Rr(e, t) {
  if (rt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!bl.call(t, o) || !rt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Ba(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Ua(e, t) {
  var n = Ba(e);
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
    n = Ba(n);
  }
}
function ed(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ed(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function td() {
  for (var e = window, t = Vo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Vo(e.document);
  }
  return t;
}
function vs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Hy(e) {
  var t = td(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ed(n.ownerDocument.documentElement, n)) {
    if (r !== null && vs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Ua(n, i);
        var l = Ua(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Wy = xt && "documentMode" in document && 11 >= document.documentMode, yn = null, uu = null, hr = null, su = !1;
function ba(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  su || yn == null || yn !== Vo(r) || (r = yn, "selectionStart" in r && vs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), hr && Rr(hr, r) || (hr = r, r = Jo(uu, "onSelect"), 0 < r.length && (t = new ms("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yn)));
}
function uo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var vn = { animationend: uo("Animation", "AnimationEnd"), animationiteration: uo("Animation", "AnimationIteration"), animationstart: uo("Animation", "AnimationStart"), transitionend: uo("Transition", "TransitionEnd") }, kl = {}, nd = {};
xt && (nd = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
function Ui(e) {
  if (kl[e])
    return kl[e];
  if (!vn[e])
    return e;
  var t = vn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in nd)
      return kl[e] = t[n];
  return e;
}
var rd = Ui("animationend"), od = Ui("animationiteration"), id = Ui("animationstart"), ld = Ui("transitionend"), ud = /* @__PURE__ */ new Map(), Ha = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wt(e, t) {
  ud.set(e, t), sn(t, [e]);
}
for (var xl = 0; xl < Ha.length; xl++) {
  var El = Ha[xl], Vy = El.toLowerCase(), Ky = El[0].toUpperCase() + El.slice(1);
  Wt(Vy, "on" + Ky);
}
Wt(rd, "onAnimationEnd");
Wt(od, "onAnimationIteration");
Wt(id, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(ld, "onTransitionEnd");
An("onMouseEnter", ["mouseout", "mouseover"]);
An("onMouseLeave", ["mouseout", "mouseover"]);
An("onPointerEnter", ["pointerout", "pointerover"]);
An("onPointerLeave", ["pointerout", "pointerover"]);
sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yy = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function Wa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Vg(r, t, void 0, e), e.currentTarget = null;
}
function sd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== i && o.isPropagationStopped())
            break e;
          Wa(o, u, a), i = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped())
            break e;
          Wa(o, u, a), i = s;
        }
    }
  }
  if (Yo)
    throw e = ru, Yo = !1, ru = null, e;
}
function K(e, t) {
  var n = t[pu];
  n === void 0 && (n = t[pu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ad(t, e, 2, !1), n.add(r));
}
function Cl(e, t, n) {
  var r = 0;
  t && (r |= 4), ad(n, e, r, t);
}
var so = "_reactListening" + Math.random().toString(36).slice(2);
function Or(e) {
  if (!e[so]) {
    e[so] = !0, gf.forEach(function(n) {
      n !== "selectionchange" && (Yy.has(n) || Cl(n, !1, e), Cl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[so] || (t[so] = !0, Cl("selectionchange", !1, t));
  }
}
function ad(e, t, n, r) {
  switch (Kf(t)) {
    case 1:
      var o = uy;
      break;
    case 4:
      o = sy;
      break;
    default:
      o = ps;
  }
  n = o.bind(null, t, n, e), o = void 0, !nu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Pl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var u = r.stateNode.containerInfo;
          if (u === o || u.nodeType === 8 && u.parentNode === o)
            break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var s = l.tag;
              if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === o || s.nodeType === 8 && s.parentNode === o))
                return;
              l = l.return;
            }
          for (; u !== null; ) {
            if (l = Zt(u), l === null)
              return;
            if (s = l.tag, s === 5 || s === 6) {
              r = i = l;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Df(function() {
    var a = i, m = as(n), c = [];
    e: {
      var h = ud.get(e);
      if (h !== void 0) {
        var w = ms, v = e;
        switch (e) {
          case "keypress":
            if (Mo(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            w = Ey;
            break;
          case "focusin":
            v = "focus", w = vl;
            break;
          case "focusout":
            v = "blur", w = vl;
            break;
          case "beforeblur":
          case "afterblur":
            w = vl;
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
            w = Da;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = fy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = _y;
            break;
          case rd:
          case od:
          case id:
            w = hy;
            break;
          case ld:
            w = Ty;
            break;
          case "scroll":
            w = ay;
            break;
          case "wheel":
            w = Ry;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = gy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ma;
        }
        var y = (t & 4) !== 0, L = !y && e === "scroll", d = y ? h !== null ? h + "Capture" : null : h;
        y = [];
        for (var f = a, p; f !== null; ) {
          p = f;
          var S = p.stateNode;
          if (p.tag === 5 && S !== null && (p = S, d !== null && (S = Pr(f, d), S != null && y.push(Dr(f, S, p)))), L)
            break;
          f = f.return;
        }
        0 < y.length && (h = new w(h, v, null, n, m), c.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", h && n !== eu && (v = n.relatedTarget || n.fromElement) && (Zt(v) || v[Et]))
          break e;
        if ((w || h) && (h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window, w ? (v = n.relatedTarget || n.toElement, w = a, v = v ? Zt(v) : null, v !== null && (L = an(v), v !== L || v.tag !== 5 && v.tag !== 6) && (v = null)) : (w = null, v = a), w !== v)) {
          if (y = Da, S = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ma, S = "onPointerLeave", d = "onPointerEnter", f = "pointer"), L = w == null ? h : wn(w), p = v == null ? h : wn(v), h = new y(S, f + "leave", w, n, m), h.target = L, h.relatedTarget = p, S = null, Zt(m) === a && (y = new y(d, f + "enter", v, n, m), y.target = p, y.relatedTarget = L, S = y), L = S, w && v)
            t: {
              for (y = w, d = v, f = 0, p = y; p; p = fn(p))
                f++;
              for (p = 0, S = d; S; S = fn(S))
                p++;
              for (; 0 < f - p; )
                y = fn(y), f--;
              for (; 0 < p - f; )
                d = fn(d), p--;
              for (; f--; ) {
                if (y === d || d !== null && y === d.alternate)
                  break t;
                y = fn(y), d = fn(d);
              }
              y = null;
            }
          else
            y = null;
          w !== null && Va(c, h, w, y, !1), v !== null && L !== null && Va(c, L, v, y, !0);
        }
      }
      e: {
        if (h = a ? wn(a) : window, w = h.nodeName && h.nodeName.toLowerCase(), w === "select" || w === "input" && h.type === "file")
          var g = Iy;
        else if (Ia(h))
          if (Jf)
            g = Uy;
          else {
            g = Fy;
            var E = jy;
          }
        else
          (w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (g = By);
        if (g && (g = g(e, a))) {
          Zf(c, g, n, m);
          break e;
        }
        E && E(e, h, a), e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && Xl(h, "number", h.value);
      }
      switch (E = a ? wn(a) : window, e) {
        case "focusin":
          (Ia(E) || E.contentEditable === "true") && (yn = E, uu = a, hr = null);
          break;
        case "focusout":
          hr = uu = yn = null;
          break;
        case "mousedown":
          su = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          su = !1, ba(c, n, m);
          break;
        case "selectionchange":
          if (Wy)
            break;
        case "keydown":
        case "keyup":
          ba(c, n, m);
      }
      var k;
      if (ys)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        gn ? Xf(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (Qf && n.locale !== "ko" && (gn || R !== "onCompositionStart" ? R === "onCompositionEnd" && gn && (k = Yf()) : (Dt = m, hs = "value" in Dt ? Dt.value : Dt.textContent, gn = !0)), E = Jo(a, R), 0 < E.length && (R = new za(R, e, null, n, m), c.push({ event: R, listeners: E }), k ? R.data = k : (k = Gf(n), k !== null && (R.data = k)))), (k = Dy ? zy(e, n) : My(e, n)) && (a = Jo(a, "onBeforeInput"), 0 < a.length && (m = new za("onBeforeInput", "beforeinput", null, n, m), c.push({ event: m, listeners: a }), m.data = k));
    }
    sd(c, t);
  });
}
function Dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Pr(e, n), i != null && r.unshift(Dr(e, i, o)), i = Pr(e, t), i != null && r.push(Dr(e, i, o))), e = e.return;
  }
  return r;
}
function fn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Va(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, o ? (s = Pr(n, i), s != null && l.unshift(Dr(n, s, u))) : o || (s = Pr(n, i), s != null && l.push(Dr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Qy = /\r\n?/g, Xy = /\u0000|\uFFFD/g;
function Ka(e) {
  return (typeof e == "string" ? e : "" + e).replace(Qy, `
`).replace(Xy, "");
}
function ao(e, t, n) {
  if (t = Ka(t), Ka(e) !== t && n)
    throw Error(C(425));
}
function qo() {
}
var au = null, cu = null;
function fu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var du = typeof setTimeout == "function" ? setTimeout : void 0, Gy = typeof clearTimeout == "function" ? clearTimeout : void 0, Ya = typeof Promise == "function" ? Promise : void 0, Zy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ya < "u" ? function(e) {
  return Ya.resolve(null).then(e).catch(Jy);
} : du;
function Jy(e) {
  setTimeout(function() {
    throw e;
  });
}
function _l(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Tr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Tr(t);
}
function It(e) {
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
function Qa(e) {
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
var Kn = Math.random().toString(36).slice(2), at = "__reactFiber$" + Kn, zr = "__reactProps$" + Kn, Et = "__reactContainer$" + Kn, pu = "__reactEvents$" + Kn, qy = "__reactListeners$" + Kn, ev = "__reactHandles$" + Kn;
function Zt(e) {
  var t = e[at];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Et] || n[at]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Qa(e); e !== null; ) {
          if (n = e[at])
            return n;
          e = Qa(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Qr(e) {
  return e = e[at] || e[Et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function wn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(C(33));
}
function bi(e) {
  return e[zr] || null;
}
var hu = [], Sn = -1;
function Vt(e) {
  return { current: e };
}
function Y(e) {
  0 > Sn || (e.current = hu[Sn], hu[Sn] = null, Sn--);
}
function V(e, t) {
  Sn++, hu[Sn] = e.current, e.current = t;
}
var Ht = {}, Se = Vt(Ht), Ne = Vt(!1), nn = Ht;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Te(e) {
  return e = e.childContextTypes, e != null;
}
function ei() {
  Y(Ne), Y(Se);
}
function Xa(e, t, n) {
  if (Se.current !== Ht)
    throw Error(C(168));
  V(Se, t), V(Ne, n);
}
function cd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(C(108, jg(e) || "Unknown", o));
  return Z({}, n, r);
}
function ti(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, nn = Se.current, V(Se, e), V(Ne, Ne.current), !0;
}
function Ga(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(C(169));
  n ? (e = cd(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, Y(Ne), Y(Se), V(Se, e)) : Y(Ne), V(Ne, n);
}
var yt = null, Hi = !1, Nl = !1;
function fd(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function tv(e) {
  Hi = !0, fd(e);
}
function Kt() {
  if (!Nl && yt !== null) {
    Nl = !0;
    var e = 0, t = H;
    try {
      var n = yt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yt = null, Hi = !1;
    } catch (o) {
      throw yt !== null && (yt = yt.slice(e + 1)), $f(cs, Kt), o;
    } finally {
      H = t, Nl = !1;
    }
  }
  return null;
}
var kn = [], xn = 0, ni = null, ri = 0, We = [], Ve = 0, rn = null, vt = 1, wt = "";
function Xt(e, t) {
  kn[xn++] = ri, kn[xn++] = ni, ni = e, ri = t;
}
function dd(e, t, n) {
  We[Ve++] = vt, We[Ve++] = wt, We[Ve++] = rn, rn = e;
  var r = vt;
  e = wt;
  var o = 32 - tt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - tt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, vt = 1 << 32 - tt(t) + o | n << o | r, wt = i + e;
  } else
    vt = 1 << i | n << o | r, wt = e;
}
function ws(e) {
  e.return !== null && (Xt(e, 1), dd(e, 1, 0));
}
function Ss(e) {
  for (; e === ni; )
    ni = kn[--xn], kn[xn] = null, ri = kn[--xn], kn[xn] = null;
  for (; e === rn; )
    rn = We[--Ve], We[Ve] = null, wt = We[--Ve], We[Ve] = null, vt = We[--Ve], We[Ve] = null;
}
var je = null, $e = null, Q = !1, et = null;
function pd(e, t) {
  var n = Ke(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Za(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, $e = It(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: vt, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ke(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function mu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gu(e) {
  if (Q) {
    var t = $e;
    if (t) {
      var n = t;
      if (!Za(e, t)) {
        if (mu(e))
          throw Error(C(418));
        t = It(n.nextSibling);
        var r = je;
        t && Za(e, t) ? pd(r, n) : (e.flags = e.flags & -4097 | 2, Q = !1, je = e);
      }
    } else {
      if (mu(e))
        throw Error(C(418));
      e.flags = e.flags & -4097 | 2, Q = !1, je = e;
    }
  }
}
function Ja(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function co(e) {
  if (e !== je)
    return !1;
  if (!Q)
    return Ja(e), Q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fu(e.type, e.memoizedProps)), t && (t = $e)) {
    if (mu(e))
      throw hd(), Error(C(418));
    for (; t; )
      pd(e, t), t = It(t.nextSibling);
  }
  if (Ja(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = It(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else
    $e = je ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function hd() {
  for (var e = $e; e; )
    e = It(e.nextSibling);
}
function In() {
  $e = je = null, Q = !1;
}
function ks(e) {
  et === null ? et = [e] : et.push(e);
}
var nv = _t.ReactCurrentBatchConfig;
function qn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(C(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = o.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(C(284));
    if (!n._owner)
      throw Error(C(290, e));
  }
  return e;
}
function fo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function qa(e) {
  var t = e._init;
  return t(e._payload);
}
function md(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [f], d.flags |= 16) : p.push(f);
    }
  }
  function n(d, f) {
    if (!e)
      return null;
    for (; f !== null; )
      t(d, f), f = f.sibling;
    return null;
  }
  function r(d, f) {
    for (d = /* @__PURE__ */ new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
    return d;
  }
  function o(d, f) {
    return d = Ut(d, f), d.index = 0, d.sibling = null, d;
  }
  function i(d, f, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < f ? (d.flags |= 2, f) : p) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, p, S) {
    return f === null || f.tag !== 6 ? (f = Ml(p, d.mode, S), f.return = d, f) : (f = o(f, p), f.return = d, f);
  }
  function s(d, f, p, S) {
    var g = p.type;
    return g === mn ? m(d, f, p.props.children, S, p.key) : f !== null && (f.elementType === g || typeof g == "object" && g !== null && g.$$typeof === Tt && qa(g) === f.type) ? (S = o(f, p.props), S.ref = qn(d, f, p), S.return = d, S) : (S = Uo(p.type, p.key, p.props, null, d.mode, S), S.ref = qn(d, f, p), S.return = d, S);
  }
  function a(d, f, p, S) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = Al(p, d.mode, S), f.return = d, f) : (f = o(f, p.children || []), f.return = d, f);
  }
  function m(d, f, p, S, g) {
    return f === null || f.tag !== 7 ? (f = tn(p, d.mode, S, g), f.return = d, f) : (f = o(f, p), f.return = d, f);
  }
  function c(d, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return f = Ml("" + f, d.mode, p), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case eo:
          return p = Uo(f.type, f.key, f.props, null, d.mode, p), p.ref = qn(d, null, f), p.return = d, p;
        case hn:
          return f = Al(f, d.mode, p), f.return = d, f;
        case Tt:
          var S = f._init;
          return c(d, S(f._payload), p);
      }
      if (or(f) || Qn(f))
        return f = tn(f, d.mode, p, null), f.return = d, f;
      fo(d, f);
    }
    return null;
  }
  function h(d, f, p, S) {
    var g = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return g !== null ? null : u(d, f, "" + p, S);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case eo:
          return p.key === g ? s(d, f, p, S) : null;
        case hn:
          return p.key === g ? a(d, f, p, S) : null;
        case Tt:
          return g = p._init, h(
            d,
            f,
            g(p._payload),
            S
          );
      }
      if (or(p) || Qn(p))
        return g !== null ? null : m(d, f, p, S, null);
      fo(d, p);
    }
    return null;
  }
  function w(d, f, p, S, g) {
    if (typeof S == "string" && S !== "" || typeof S == "number")
      return d = d.get(p) || null, u(f, d, "" + S, g);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case eo:
          return d = d.get(S.key === null ? p : S.key) || null, s(f, d, S, g);
        case hn:
          return d = d.get(S.key === null ? p : S.key) || null, a(f, d, S, g);
        case Tt:
          var E = S._init;
          return w(d, f, p, E(S._payload), g);
      }
      if (or(S) || Qn(S))
        return d = d.get(p) || null, m(f, d, S, g, null);
      fo(f, S);
    }
    return null;
  }
  function v(d, f, p, S) {
    for (var g = null, E = null, k = f, R = f = 0, I = null; k !== null && R < p.length; R++) {
      k.index > R ? (I = k, k = null) : I = k.sibling;
      var D = h(d, k, p[R], S);
      if (D === null) {
        k === null && (k = I);
        break;
      }
      e && k && D.alternate === null && t(d, k), f = i(D, f, R), E === null ? g = D : E.sibling = D, E = D, k = I;
    }
    if (R === p.length)
      return n(d, k), Q && Xt(d, R), g;
    if (k === null) {
      for (; R < p.length; R++)
        k = c(d, p[R], S), k !== null && (f = i(k, f, R), E === null ? g = k : E.sibling = k, E = k);
      return Q && Xt(d, R), g;
    }
    for (k = r(d, k); R < p.length; R++)
      I = w(k, d, R, p[R], S), I !== null && (e && I.alternate !== null && k.delete(I.key === null ? R : I.key), f = i(I, f, R), E === null ? g = I : E.sibling = I, E = I);
    return e && k.forEach(function(j) {
      return t(d, j);
    }), Q && Xt(d, R), g;
  }
  function y(d, f, p, S) {
    var g = Qn(p);
    if (typeof g != "function")
      throw Error(C(150));
    if (p = g.call(p), p == null)
      throw Error(C(151));
    for (var E = g = null, k = f, R = f = 0, I = null, D = p.next(); k !== null && !D.done; R++, D = p.next()) {
      k.index > R ? (I = k, k = null) : I = k.sibling;
      var j = h(d, k, D.value, S);
      if (j === null) {
        k === null && (k = I);
        break;
      }
      e && k && j.alternate === null && t(d, k), f = i(j, f, R), E === null ? g = j : E.sibling = j, E = j, k = I;
    }
    if (D.done)
      return n(
        d,
        k
      ), Q && Xt(d, R), g;
    if (k === null) {
      for (; !D.done; R++, D = p.next())
        D = c(d, D.value, S), D !== null && (f = i(D, f, R), E === null ? g = D : E.sibling = D, E = D);
      return Q && Xt(d, R), g;
    }
    for (k = r(d, k); !D.done; R++, D = p.next())
      D = w(k, d, R, D.value, S), D !== null && (e && D.alternate !== null && k.delete(D.key === null ? R : D.key), f = i(D, f, R), E === null ? g = D : E.sibling = D, E = D);
    return e && k.forEach(function(Oe) {
      return t(d, Oe);
    }), Q && Xt(d, R), g;
  }
  function L(d, f, p, S) {
    if (typeof p == "object" && p !== null && p.type === mn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case eo:
          e: {
            for (var g = p.key, E = f; E !== null; ) {
              if (E.key === g) {
                if (g = p.type, g === mn) {
                  if (E.tag === 7) {
                    n(d, E.sibling), f = o(E, p.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (E.elementType === g || typeof g == "object" && g !== null && g.$$typeof === Tt && qa(g) === E.type) {
                  n(d, E.sibling), f = o(E, p.props), f.ref = qn(d, E, p), f.return = d, d = f;
                  break e;
                }
                n(d, E);
                break;
              } else
                t(d, E);
              E = E.sibling;
            }
            p.type === mn ? (f = tn(p.props.children, d.mode, S, p.key), f.return = d, d = f) : (S = Uo(p.type, p.key, p.props, null, d.mode, S), S.ref = qn(d, f, p), S.return = d, d = S);
          }
          return l(d);
        case hn:
          e: {
            for (E = p.key; f !== null; ) {
              if (f.key === E)
                if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                  n(d, f.sibling), f = o(f, p.children || []), f.return = d, d = f;
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else
                t(d, f);
              f = f.sibling;
            }
            f = Al(p, d.mode, S), f.return = d, d = f;
          }
          return l(d);
        case Tt:
          return E = p._init, L(d, f, E(p._payload), S);
      }
      if (or(p))
        return v(d, f, p, S);
      if (Qn(p))
        return y(d, f, p, S);
      fo(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(d, f.sibling), f = o(f, p), f.return = d, d = f) : (n(d, f), f = Ml(p, d.mode, S), f.return = d, d = f), l(d)) : n(d, f);
  }
  return L;
}
var jn = md(!0), gd = md(!1), oi = Vt(null), ii = null, En = null, xs = null;
function Es() {
  xs = En = ii = null;
}
function Cs(e) {
  var t = oi.current;
  Y(oi), e._currentValue = t;
}
function yu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Dn(e, t) {
  ii = e, xs = En = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (xs !== e)
    if (e = { context: e, memoizedValue: t, next: null }, En === null) {
      if (ii === null)
        throw Error(C(308));
      En = e, ii.dependencies = { lanes: 0, firstContext: e };
    } else
      En = En.next = e;
  return t;
}
var Jt = null;
function Ps(e) {
  Jt === null ? Jt = [e] : Jt.push(e);
}
function yd(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Ps(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ct(e, r);
}
function Ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function _s(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function vd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function St(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, B & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ct(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Ps(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ct(e, n);
}
function Ao(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fs(e, n);
  }
}
function ec(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function li(e, t, n, r) {
  var o = e.updateQueue;
  Lt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, l === null ? i = a : l.next = a, l = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== l && (u === null ? m.firstBaseUpdate = a : u.next = a, m.lastBaseUpdate = s));
  }
  if (i !== null) {
    var c = o.baseState;
    l = 0, m = a = s = null, u = i;
    do {
      var h = u.lane, w = u.eventTime;
      if ((r & h) === h) {
        m !== null && (m = m.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var v = e, y = u;
          switch (h = t, w = n, y.tag) {
            case 1:
              if (v = y.payload, typeof v == "function") {
                c = v.call(w, c, h);
                break e;
              }
              c = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = y.payload, h = typeof v == "function" ? v.call(w, c, h) : v, h == null)
                break e;
              c = Z({}, c, h);
              break e;
            case 2:
              Lt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [u] : h.push(u));
      } else
        w = { eventTime: w, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (a = m = w, s = c) : m = m.next = w, l |= h;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null)
          break;
        h = u, u = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
      }
    } while (1);
    if (m === null && (s = c), o.baseState = s, o.firstBaseUpdate = a, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    ln |= l, e.lanes = l, e.memoizedState = c;
  }
}
function tc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(C(191, o));
        o.call(r);
      }
    }
}
var Xr = {}, pt = Vt(Xr), Mr = Vt(Xr), Ar = Vt(Xr);
function qt(e) {
  if (e === Xr)
    throw Error(C(174));
  return e;
}
function Ns(e, t) {
  switch (V(Ar, t), V(Mr, e), V(pt, Xr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zl(t, e);
  }
  Y(pt), V(pt, t);
}
function Fn() {
  Y(pt), Y(Mr), Y(Ar);
}
function wd(e) {
  qt(Ar.current);
  var t = qt(pt.current), n = Zl(t, e.type);
  t !== n && (V(Mr, e), V(pt, n));
}
function Ts(e) {
  Mr.current === e && (Y(pt), Y(Mr));
}
var X = Vt(0);
function ui(e) {
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
var Tl = [];
function Ls() {
  for (var e = 0; e < Tl.length; e++)
    Tl[e]._workInProgressVersionPrimary = null;
  Tl.length = 0;
}
var $o = _t.ReactCurrentDispatcher, Ll = _t.ReactCurrentBatchConfig, on = 0, G = null, ie = null, ue = null, si = !1, mr = !1, $r = 0, rv = 0;
function ge() {
  throw Error(C(321));
}
function Rs(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n]))
      return !1;
  return !0;
}
function Os(e, t, n, r, o, i) {
  if (on = i, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $o.current = e === null || e.memoizedState === null ? uv : sv, e = n(r, o), mr) {
    i = 0;
    do {
      if (mr = !1, $r = 0, 25 <= i)
        throw Error(C(301));
      i += 1, ue = ie = null, t.updateQueue = null, $o.current = av, e = n(r, o);
    } while (mr);
  }
  if ($o.current = ai, t = ie !== null && ie.next !== null, on = 0, ue = ie = G = null, si = !1, t)
    throw Error(C(300));
  return e;
}
function Ds() {
  var e = $r !== 0;
  return $r = 0, e;
}
function lt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ue === null ? G.memoizedState = ue = e : ue = ue.next = e, ue;
}
function Xe() {
  if (ie === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ie.next;
  var t = ue === null ? G.memoizedState : ue.next;
  if (t !== null)
    ue = t, ie = e;
  else {
    if (e === null)
      throw Error(C(310));
    ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, ue === null ? G.memoizedState = ue = e : ue = ue.next = e;
  }
  return ue;
}
function Ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Rl(e) {
  var t = Xe(), n = t.queue;
  if (n === null)
    throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ie, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var u = l = null, s = null, a = i;
    do {
      var m = a.lane;
      if ((on & m) === m)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var c = {
          lane: m,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = c, l = r) : s = s.next = c, G.lanes |= m, ln |= m;
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? l = r : s.next = u, rt(r, t.memoizedState) || (_e = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, G.lanes |= i, ln |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ol(e) {
  var t = Xe(), n = t.queue;
  if (n === null)
    throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    rt(i, t.memoizedState) || (_e = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Sd() {
}
function kd(e, t) {
  var n = G, r = Xe(), o = t(), i = !rt(r.memoizedState, o);
  if (i && (r.memoizedState = o, _e = !0), r = r.queue, zs(Cd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ue !== null && ue.memoizedState.tag & 1) {
    if (n.flags |= 2048, jr(9, Ed.bind(null, n, r, o, t), void 0, null), se === null)
      throw Error(C(349));
    on & 30 || xd(n, t, o);
  }
  return o;
}
function xd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ed(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Pd(t) && _d(e);
}
function Cd(e, t, n) {
  return n(function() {
    Pd(t) && _d(e);
  });
}
function Pd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function _d(e) {
  var t = Ct(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function nc(e) {
  var t = lt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = lv.bind(null, G, e), [t.memoizedState, e];
}
function jr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Nd() {
  return Xe().memoizedState;
}
function Io(e, t, n, r) {
  var o = lt();
  G.flags |= e, o.memoizedState = jr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Wi(e, t, n, r) {
  var o = Xe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ie !== null) {
    var l = ie.memoizedState;
    if (i = l.destroy, r !== null && Rs(r, l.deps)) {
      o.memoizedState = jr(t, n, i, r);
      return;
    }
  }
  G.flags |= e, o.memoizedState = jr(1 | t, n, i, r);
}
function rc(e, t) {
  return Io(8390656, 8, e, t);
}
function zs(e, t) {
  return Wi(2048, 8, e, t);
}
function Td(e, t) {
  return Wi(4, 2, e, t);
}
function Ld(e, t) {
  return Wi(4, 4, e, t);
}
function Rd(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Od(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wi(4, 4, Rd.bind(null, t, e), n);
}
function Ms() {
}
function Dd(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function zd(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Md(e, t, n) {
  return on & 21 ? (rt(n, t) || (n = Ff(), G.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = n);
}
function ov(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ll.transition;
  Ll.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, Ll.transition = r;
  }
}
function Ad() {
  return Xe().memoizedState;
}
function iv(e, t, n) {
  var r = Bt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $d(e))
    Id(t, n);
  else if (n = yd(e, t, n, r), n !== null) {
    var o = xe();
    nt(n, e, r, o), jd(n, t, r);
  }
}
function lv(e, t, n) {
  var r = Bt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($d(e))
    Id(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, u = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = u, rt(u, l)) {
          var s = t.interleaved;
          s === null ? (o.next = o, Ps(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = yd(e, t, o, r), n !== null && (o = xe(), nt(n, e, r, o), jd(n, t, r));
  }
}
function $d(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G;
}
function Id(e, t) {
  mr = si = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function jd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fs(e, n);
  }
}
var ai = { readContext: Qe, useCallback: ge, useContext: ge, useEffect: ge, useImperativeHandle: ge, useInsertionEffect: ge, useLayoutEffect: ge, useMemo: ge, useReducer: ge, useRef: ge, useState: ge, useDebugValue: ge, useDeferredValue: ge, useTransition: ge, useMutableSource: ge, useSyncExternalStore: ge, useId: ge, unstable_isNewReconciler: !1 }, uv = { readContext: Qe, useCallback: function(e, t) {
  return lt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: rc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Io(
    4194308,
    4,
    Rd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Io(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Io(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = lt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = lt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = iv.bind(null, G, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = lt();
  return e = { current: e }, t.memoizedState = e;
}, useState: nc, useDebugValue: Ms, useDeferredValue: function(e) {
  return lt().memoizedState = e;
}, useTransition: function() {
  var e = nc(!1), t = e[0];
  return e = ov.bind(null, e[1]), lt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = G, o = lt();
  if (Q) {
    if (n === void 0)
      throw Error(C(407));
    n = n();
  } else {
    if (n = t(), se === null)
      throw Error(C(349));
    on & 30 || xd(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, rc(Cd.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, jr(9, Ed.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = lt(), t = se.identifierPrefix;
  if (Q) {
    var n = wt, r = vt;
    n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = rv++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, sv = {
  readContext: Qe,
  useCallback: Dd,
  useContext: Qe,
  useEffect: zs,
  useImperativeHandle: Od,
  useInsertionEffect: Td,
  useLayoutEffect: Ld,
  useMemo: zd,
  useReducer: Rl,
  useRef: Nd,
  useState: function() {
    return Rl(Ir);
  },
  useDebugValue: Ms,
  useDeferredValue: function(e) {
    var t = Xe();
    return Md(t, ie.memoizedState, e);
  },
  useTransition: function() {
    var e = Rl(Ir)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: Sd,
  useSyncExternalStore: kd,
  useId: Ad,
  unstable_isNewReconciler: !1
}, av = { readContext: Qe, useCallback: Dd, useContext: Qe, useEffect: zs, useImperativeHandle: Od, useInsertionEffect: Td, useLayoutEffect: Ld, useMemo: zd, useReducer: Ol, useRef: Nd, useState: function() {
  return Ol(Ir);
}, useDebugValue: Ms, useDeferredValue: function(e) {
  var t = Xe();
  return ie === null ? t.memoizedState = e : Md(t, ie.memoizedState, e);
}, useTransition: function() {
  var e = Ol(Ir)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: Sd, useSyncExternalStore: kd, useId: Ad, unstable_isNewReconciler: !1 };
function Je(e, t) {
  if (e && e.defaultProps) {
    t = Z({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function vu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vi = { isMounted: function(e) {
  return (e = e._reactInternals) ? an(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), o = Bt(e), i = St(r, o);
  i.payload = t, n != null && (i.callback = n), t = jt(e, i, o), t !== null && (nt(t, e, o, r), Ao(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), o = Bt(e), i = St(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = jt(e, i, o), t !== null && (nt(t, e, o, r), Ao(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = xe(), r = Bt(e), o = St(n, r);
  o.tag = 2, t != null && (o.callback = t), t = jt(e, o, r), t !== null && (nt(t, e, r, n), Ao(t, e, r));
} };
function oc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Rr(n, r) || !Rr(o, i) : !0;
}
function Fd(e, t, n) {
  var r = !1, o = Ht, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Qe(i) : (o = Te(t) ? nn : Se.current, r = t.contextTypes, i = (r = r != null) ? $n(e, o) : Ht), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Vi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ic(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vi.enqueueReplaceState(t, t.state, null);
}
function wu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, _s(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Qe(i) : (i = Te(t) ? nn : Se.current, o.context = $n(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (vu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Vi.enqueueReplaceState(o, o.state, null), li(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Bn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ig(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Dl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Su(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cv = typeof WeakMap == "function" ? WeakMap : Map;
function Bd(e, t, n) {
  n = St(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    fi || (fi = !0, Ru = r), Su(e, t);
  }, n;
}
function Ud(e, t, n) {
  n = St(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Su(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Su(e, t), typeof r != "function" && (Ft === null ? Ft = /* @__PURE__ */ new Set([this]) : Ft.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function lc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cv();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Cv.bind(null, e, t, n), t.then(e, e));
}
function uc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = St(-1, 1), t.tag = 2, jt(n, t, 1))), n.lanes |= 1), e);
}
var fv = _t.ReactCurrentOwner, _e = !1;
function ke(e, t, n, r) {
  t.child = e === null ? gd(t, null, n, r) : jn(t, e.child, n, r);
}
function ac(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Dn(t, o), r = Os(e, t, n, r, i, o), n = Ds(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pt(e, t, o)) : (Q && n && ws(t), t.flags |= 1, ke(e, t, r, o), t.child);
}
function cc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !bs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, bd(e, t, i, r, o)) : (e = Uo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Rr, n(l, r) && e.ref === t.ref)
      return Pt(e, t, o);
  }
  return t.flags |= 1, e = Ut(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function bd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Rr(i, r) && e.ref === t.ref)
      if (_e = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (_e = !0);
      else
        return t.lanes = e.lanes, Pt(e, t, o);
  }
  return ku(e, t, n, r, o);
}
function Hd(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, V(Pn, Me), Me |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, V(Pn, Me), Me |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, V(Pn, Me), Me |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, V(Pn, Me), Me |= r;
  return ke(e, t, o, n), t.child;
}
function Wd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ku(e, t, n, r, o) {
  var i = Te(n) ? nn : Se.current;
  return i = $n(t, i), Dn(t, o), n = Os(e, t, n, r, i, o), r = Ds(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pt(e, t, o)) : (Q && r && ws(t), t.flags |= 1, ke(e, t, n, o), t.child);
}
function fc(e, t, n, r, o) {
  if (Te(n)) {
    var i = !0;
    ti(t);
  } else
    i = !1;
  if (Dn(t, o), t.stateNode === null)
    jo(e, t), Fd(t, n, r), wu(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Qe(a) : (a = Te(n) ? nn : Se.current, a = $n(t, a));
    var m = n.getDerivedStateFromProps, c = typeof m == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    c || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && ic(t, l, r, a), Lt = !1;
    var h = t.memoizedState;
    l.state = h, li(t, r, l, o), s = t.memoizedState, u !== r || h !== s || Ne.current || Lt ? (typeof m == "function" && (vu(t, n, m, r), s = t.memoizedState), (u = Lt || oc(t, n, u, r, h, s, a)) ? (c || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, vd(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Je(t.type, u), l.props = a, c = t.pendingProps, h = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Qe(s) : (s = Te(n) ? nn : Se.current, s = $n(t, s));
    var w = n.getDerivedStateFromProps;
    (m = typeof w == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== c || h !== s) && ic(t, l, r, s), Lt = !1, h = t.memoizedState, l.state = h, li(t, r, l, o);
    var v = t.memoizedState;
    u !== c || h !== v || Ne.current || Lt ? (typeof w == "function" && (vu(t, n, w, r), v = t.memoizedState), (a = Lt || oc(t, n, a, r, h, v, s) || !1) ? (m || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), l.props = r, l.state = v, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return xu(e, t, n, r, i, o);
}
function xu(e, t, n, r, o, i) {
  Wd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && Ga(t, n, !1), Pt(e, t, i);
  r = t.stateNode, fv.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = jn(t, e.child, null, i), t.child = jn(t, null, u, i)) : ke(e, t, u, i), t.memoizedState = r.state, o && Ga(t, n, !0), t.child;
}
function Vd(e) {
  var t = e.stateNode;
  t.pendingContext ? Xa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xa(e, t.context, !1), Ns(e, t.containerInfo);
}
function dc(e, t, n, r, o) {
  return In(), ks(o), t.flags |= 256, ke(e, t, n, r), t.child;
}
var Eu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kd(e, t, n) {
  var r = t.pendingProps, o = X.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), V(X, o & 1), e === null)
    return gu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Qi(l, r, 0, null), e = tn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Cu(n), t.memoizedState = Eu, e) : As(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return dv(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Ut(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = Ut(u, i) : (i = tn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Cu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Eu, r;
  }
  return i = e.child, e = i.sibling, r = Ut(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function As(e, t) {
  return t = Qi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function po(e, t, n, r) {
  return r !== null && ks(r), jn(t, e.child, null, n), e = As(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dv(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Dl(Error(C(422))), po(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Qi({ mode: "visible", children: r.children }, o, 0, null), i = tn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && jn(t, e.child, null, l), t.child.memoizedState = Cu(l), t.memoizedState = Eu, i);
  if (!(t.mode & 1))
    return po(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, i = Error(C(419)), r = Dl(i, r, void 0), po(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, _e || u) {
    if (r = se, r !== null) {
      switch (l & -l) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Ct(e, o), nt(r, e, o, -1));
    }
    return Us(), r = Dl(Error(C(421))), po(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Pv.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, $e = It(o.nextSibling), je = t, Q = !0, et = null, e !== null && (We[Ve++] = vt, We[Ve++] = wt, We[Ve++] = rn, vt = e.id, wt = e.overflow, rn = t), t = As(t, r.children), t.flags |= 4096, t);
}
function pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yu(e.return, t, n);
}
function zl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Yd(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ke(e, t, r.children, n), r = X.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && pc(e, n, t);
          else if (e.tag === 19)
            pc(e, n, t);
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
  if (V(X, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && ui(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), zl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && ui(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        zl(t, !0, n, null, i);
        break;
      case "together":
        zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function jo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Pt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function pv(e, t, n) {
  switch (t.tag) {
    case 3:
      Vd(t), In();
      break;
    case 5:
      wd(t);
      break;
    case 1:
      Te(t.type) && ti(t);
      break;
    case 4:
      Ns(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      V(oi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (V(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Kd(e, t, n) : (V(X, X.current & 1), e = Pt(e, t, n), e !== null ? e.sibling : null);
      V(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Yd(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), V(X, X.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Hd(e, t, n);
  }
  return Pt(e, t, n);
}
var Qd, Pu, Xd, Gd;
Qd = function(e, t) {
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
Xd = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, qt(pt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Yl(e, o), r = Yl(e, r), i = [];
        break;
      case "select":
        o = Z({}, o, { value: void 0 }), r = Z({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Gl(e, o), r = Gl(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qo);
    }
    Jl(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (l in u)
            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Er.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = o != null ? o[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
        if (a === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in s)
              s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
          } else
            n || (i || (i = []), i.push(
              a,
              n
            )), n = s;
        else
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Er.hasOwnProperty(a) ? (s != null && a === "onScroll" && K("scroll", e), i || u === s || (i = [])) : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Gd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function er(e, t) {
  if (!Q)
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
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function hv(e, t, n) {
  var r = t.pendingProps;
  switch (Ss(t), t.tag) {
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
      return ye(t), null;
    case 1:
      return Te(t.type) && ei(), ye(t), null;
    case 3:
      return r = t.stateNode, Fn(), Y(Ne), Y(Se), Ls(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (co(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, et !== null && (zu(et), et = null))), Pu(e, t), ye(t), null;
    case 5:
      Ts(t);
      var o = qt(Ar.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Xd(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(C(166));
          return ye(t), null;
        }
        if (e = qt(pt.current), co(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[at] = t, r[zr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < lr.length; o++)
                K(lr[o], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K(
                "error",
                r
              ), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              xa(r, i), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, K("invalid", r);
              break;
            case "textarea":
              Ca(r, i), K("invalid", r);
          }
          Jl(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && ao(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && ao(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : Er.hasOwnProperty(l) && u != null && l === "onScroll" && K("scroll", r);
            }
          switch (n) {
            case "input":
              to(r), Ea(r, i, !0);
              break;
            case "textarea":
              to(r), Pa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = qo);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Cf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[at] = t, e[zr] = r, Qd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = ql(n, r), n) {
              case "dialog":
                K("cancel", e), K("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < lr.length; o++)
                  K(lr[o], e);
                o = r;
                break;
              case "source":
                K("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  e
                ), K("load", e), o = r;
                break;
              case "details":
                K("toggle", e), o = r;
                break;
              case "input":
                xa(e, r), o = Yl(e, r), K("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Z({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                Ca(e, r), o = Gl(e, r), K("invalid", e);
                break;
              default:
                o = r;
            }
            Jl(n, o), u = o;
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style" ? Nf(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Pf(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Cr(e, s) : typeof s == "number" && Cr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Er.hasOwnProperty(i) ? s != null && i === "onScroll" && K("scroll", e) : s != null && is(e, i, s, l));
              }
            switch (n) {
              case "input":
                to(e), Ea(e, r, !1);
                break;
              case "textarea":
                to(e), Pa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + bt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Tn(e, !!r.multiple, i, !1) : r.defaultValue != null && Tn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = qo);
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
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null)
        Gd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(C(166));
        if (n = qt(Ar.current), qt(pt.current), co(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (i = r.nodeValue !== n) && (e = je, e !== null))
            switch (e.tag) {
              case 3:
                ao(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ao(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r;
      }
      return ye(t), null;
    case 13:
      if (Y(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Q && $e !== null && t.mode & 1 && !(t.flags & 128))
          hd(), In(), t.flags |= 98560, i = !1;
        else if (i = co(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(C(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(C(317));
            i[at] = t;
          } else
            In(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ye(t), i = !1;
        } else
          et !== null && (zu(et), et = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? le === 0 && (le = 3) : Us())), t.updateQueue !== null && (t.flags |= 4), ye(t), null);
    case 4:
      return Fn(), Pu(e, t), e === null && Or(t.stateNode.containerInfo), ye(t), null;
    case 10:
      return Cs(t.type._context), ye(t), null;
    case 17:
      return Te(t.type) && ei(), ye(t), null;
    case 19:
      if (Y(X), i = t.memoizedState, i === null)
        return ye(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          er(i, !1);
        else {
          if (le !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = ui(e), l !== null) {
                for (t.flags |= 128, er(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return V(X, X.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && te() > Un && (t.flags |= 128, r = !0, er(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = ui(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), er(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Q)
              return ye(t), null;
          } else
            2 * te() - i.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = !0, er(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = te(), t.sibling = null, n = X.current, V(X, r ? n & 1 | 2 : n & 1), t) : (ye(t), null);
    case 22:
    case 23:
      return Bs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Me & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function mv(e, t) {
  switch (Ss(t), t.tag) {
    case 1:
      return Te(t.type) && ei(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Fn(), Y(Ne), Y(Se), Ls(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ts(t), null;
    case 13:
      if (Y(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(C(340));
        In();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Y(X), null;
    case 4:
      return Fn(), null;
    case 10:
      return Cs(t.type._context), null;
    case 22:
    case 23:
      return Bs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ho = !1, we = !1, gv = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function Cn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ee(e, t, r);
      }
    else
      n.current = null;
}
function _u(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var hc = !1;
function yv(e, t) {
  if (au = Go, e = td(), vs(e)) {
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
          var l = 0, u = -1, s = -1, a = 0, m = 0, c = e, h = null;
          t:
            for (; ; ) {
              for (var w; c !== n || o !== 0 && c.nodeType !== 3 || (u = l + o), c !== i || r !== 0 && c.nodeType !== 3 || (s = l + r), c.nodeType === 3 && (l += c.nodeValue.length), (w = c.firstChild) !== null; )
                h = c, c = w;
              for (; ; ) {
                if (c === e)
                  break t;
                if (h === n && ++a === o && (u = l), h === i && ++m === r && (s = l), (w = c.nextSibling) !== null)
                  break;
                c = h, h = c.parentNode;
              }
              c = w;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (cu = { focusedElem: e, selectionRange: n }, Go = !1, O = t; O !== null; )
    if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, O = e;
    else
      for (; O !== null; ) {
        t = O;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps, L = v.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Je(t.type, y), L);
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (S) {
          ee(t, t.return, S);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, O = e;
          break;
        }
        O = t.return;
      }
  return v = hc, hc = !1, v;
}
function gr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && _u(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ki(e, t) {
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
function Nu(e) {
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
function Zd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Zd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[zr], delete t[pu], delete t[qy], delete t[ev])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Jd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mc(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jd(e.return))
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
function Tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = qo));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Tu(e, t, n), e = e.sibling; e !== null; )
      Tu(e, t, n), e = e.sibling;
}
function Lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Lu(e, t, n), e = e.sibling; e !== null; )
      Lu(e, t, n), e = e.sibling;
}
var ce = null, qe = !1;
function Nt(e, t, n) {
  for (n = n.child; n !== null; )
    qd(e, t, n), n = n.sibling;
}
function qd(e, t, n) {
  if (dt && typeof dt.onCommitFiberUnmount == "function")
    try {
      dt.onCommitFiberUnmount(ji, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      we || Cn(n, t);
    case 6:
      var r = ce, o = qe;
      ce = null, Nt(e, t, n), ce = r, qe = o, ce !== null && (qe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null && (qe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? _l(e.parentNode, n) : e.nodeType === 1 && _l(e, n), Tr(e)) : _l(ce, n.stateNode));
      break;
    case 4:
      r = ce, o = qe, ce = n.stateNode.containerInfo, qe = !0, Nt(e, t, n), ce = r, qe = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!we && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && _u(n, t, l), o = o.next;
        } while (o !== r);
      }
      Nt(e, t, n);
      break;
    case 1:
      if (!we && (Cn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ee(n, t, u);
        }
      Nt(e, t, n);
      break;
    case 21:
      Nt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (we = (r = we) || n.memoizedState !== null, Nt(e, t, n), we = r) : Nt(e, t, n);
      break;
    default:
      Nt(e, t, n);
  }
}
function gc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gv()), t.forEach(function(r) {
      var o = _v.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, l = t, u = l;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ce = u.stateNode, qe = !1;
                break e;
              case 3:
                ce = u.stateNode.containerInfo, qe = !0;
                break e;
              case 4:
                ce = u.stateNode.containerInfo, qe = !0;
                break e;
            }
            u = u.return;
          }
        if (ce === null)
          throw Error(C(160));
        qd(i, l, o), ce = null, qe = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (a) {
        ee(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ep(t, e), t = t.sibling;
}
function ep(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ze(t, e), it(e), r & 4) {
        try {
          gr(3, e, e.return), Ki(3, e);
        } catch (y) {
          ee(e, e.return, y);
        }
        try {
          gr(5, e, e.return);
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      break;
    case 1:
      Ze(t, e), it(e), r & 512 && n !== null && Cn(n, n.return);
      break;
    case 5:
      if (Ze(t, e), it(e), r & 512 && n !== null && Cn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Cr(o, "");
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && i.type === "radio" && i.name != null && xf(o, i), ql(u, l);
            var a = ql(u, i);
            for (l = 0; l < s.length; l += 2) {
              var m = s[l], c = s[l + 1];
              m === "style" ? Nf(o, c) : m === "dangerouslySetInnerHTML" ? Pf(o, c) : m === "children" ? Cr(o, c) : is(o, m, c, a);
            }
            switch (u) {
              case "input":
                Ql(o, i);
                break;
              case "textarea":
                Ef(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null ? Tn(o, !!i.multiple, w, !1) : h !== !!i.multiple && (i.defaultValue != null ? Tn(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Tn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[zr] = i;
          } catch (y) {
            ee(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Ze(t, e), it(e), r & 4) {
        if (e.stateNode === null)
          throw Error(C(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ze(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Tr(t.containerInfo);
        } catch (y) {
          ee(e, e.return, y);
        }
      break;
    case 4:
      Ze(t, e), it(e);
      break;
    case 13:
      Ze(t, e), it(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (js = te())), r & 4 && gc(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (we = (a = we) || m, Ze(t, e), we = a) : Ze(t, e), it(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !m && e.mode & 1)
          for (O = e, m = e.child; m !== null; ) {
            for (c = O = m; O !== null; ) {
              switch (h = O, w = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gr(4, h, h.return);
                  break;
                case 1:
                  Cn(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                    } catch (y) {
                      ee(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Cn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    vc(c);
                    continue;
                  }
              }
              w !== null ? (w.return = h, O = w) : vc(c);
            }
            m = m.sibling;
          }
        e:
          for (m = null, c = e; ; ) {
            if (c.tag === 5) {
              if (m === null) {
                m = c;
                try {
                  o = c.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = c.stateNode, s = c.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = _f("display", l));
                } catch (y) {
                  ee(e, e.return, y);
                }
              }
            } else if (c.tag === 6) {
              if (m === null)
                try {
                  c.stateNode.nodeValue = a ? "" : c.memoizedProps;
                } catch (y) {
                  ee(e, e.return, y);
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
              m === c && (m = null), c = c.return;
            }
            m === c && (m = null), c.sibling.return = c.return, c = c.sibling;
          }
      }
      break;
    case 19:
      Ze(t, e), it(e), r & 4 && gc(e);
      break;
    case 21:
      break;
    default:
      Ze(
        t,
        e
      ), it(e);
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Cr(o, ""), r.flags &= -33);
          var i = mc(e);
          Lu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = mc(e);
          Tu(e, u, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (s) {
      ee(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vv(e, t, n) {
  O = e, tp(e);
}
function tp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ho;
      if (!l) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || we;
        u = ho;
        var a = we;
        if (ho = l, (we = s) && !a)
          for (O = o; O !== null; )
            l = O, s = l.child, l.tag === 22 && l.memoizedState !== null ? wc(o) : s !== null ? (s.return = l, O = s) : wc(o);
        for (; i !== null; )
          O = i, tp(i), i = i.sibling;
        O = o, ho = u, we = a;
      }
      yc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, O = i) : yc(e);
  }
}
function yc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || Ki(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && tc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                tc(t, l, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                  var m = a.memoizedState;
                  if (m !== null) {
                    var c = m.dehydrated;
                    c !== null && Tr(c);
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
              throw Error(C(163));
          }
        we || t.flags & 512 && Nu(t);
      } catch (h) {
        ee(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function vc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function wc(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ki(4, t);
          } catch (s) {
            ee(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ee(t, o, s);
            }
          }
          var i = t.return;
          try {
            Nu(t);
          } catch (s) {
            ee(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Nu(t);
          } catch (s) {
            ee(t, l, s);
          }
      }
    } catch (s) {
      ee(t, t.return, s);
    }
    if (t === e) {
      O = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, O = u;
      break;
    }
    O = t.return;
  }
}
var wv = Math.ceil, ci = _t.ReactCurrentDispatcher, $s = _t.ReactCurrentOwner, Ye = _t.ReactCurrentBatchConfig, B = 0, se = null, oe = null, pe = 0, Me = 0, Pn = Vt(0), le = 0, Fr = null, ln = 0, Yi = 0, Is = 0, yr = null, Pe = null, js = 0, Un = 1 / 0, gt = null, fi = !1, Ru = null, Ft = null, mo = !1, zt = null, di = 0, vr = 0, Ou = null, Fo = -1, Bo = 0;
function xe() {
  return B & 6 ? te() : Fo !== -1 ? Fo : Fo = te();
}
function Bt(e) {
  return e.mode & 1 ? B & 2 && pe !== 0 ? pe & -pe : nv.transition !== null ? (Bo === 0 && (Bo = Ff()), Bo) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Kf(e.type)), e) : 1;
}
function nt(e, t, n, r) {
  if (50 < vr)
    throw vr = 0, Ou = null, Error(C(185));
  Kr(e, n, r), (!(B & 2) || e !== se) && (e === se && (!(B & 2) && (Yi |= n), le === 4 && Ot(e, pe)), Le(e, r), n === 1 && B === 0 && !(t.mode & 1) && (Un = te() + 500, Hi && Kt()));
}
function Le(e, t) {
  var n = e.callbackNode;
  ny(e, t);
  var r = Xo(e, e === se ? pe : 0);
  if (r === 0)
    n !== null && Ta(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ta(n), t === 1)
      e.tag === 0 ? tv(Sc.bind(null, e)) : fd(Sc.bind(null, e)), Zy(function() {
        !(B & 6) && Kt();
      }), n = null;
    else {
      switch (Bf(r)) {
        case 1:
          n = cs;
          break;
        case 4:
          n = If;
          break;
        case 16:
          n = Qo;
          break;
        case 536870912:
          n = jf;
          break;
        default:
          n = Qo;
      }
      n = ap(n, np.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function np(e, t) {
  if (Fo = -1, Bo = 0, B & 6)
    throw Error(C(327));
  var n = e.callbackNode;
  if (zn() && e.callbackNode !== n)
    return null;
  var r = Xo(e, e === se ? pe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = pi(e, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var i = op();
    (se !== e || pe !== t) && (gt = null, Un = te() + 500, en(e, t));
    do
      try {
        xv();
        break;
      } catch (u) {
        rp(e, u);
      }
    while (1);
    Es(), ci.current = i, B = o, oe !== null ? t = 0 : (se = null, pe = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (o = ou(e), o !== 0 && (r = o, t = Du(e, o))), t === 1)
      throw n = Fr, en(e, 0), Ot(e, r), Le(e, te()), n;
    if (t === 6)
      Ot(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Sv(o) && (t = pi(e, r), t === 2 && (i = ou(e), i !== 0 && (r = i, t = Du(e, i))), t === 1))
        throw n = Fr, en(e, 0), Ot(e, r), Le(e, te()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Gt(e, Pe, gt);
          break;
        case 3:
          if (Ot(e, r), (r & 130023424) === r && (t = js + 500 - te(), 10 < t)) {
            if (Xo(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              xe(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = du(Gt.bind(null, e, Pe, gt), t);
            break;
          }
          Gt(e, Pe, gt);
          break;
        case 4:
          if (Ot(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - tt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wv(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = du(Gt.bind(null, e, Pe, gt), r);
            break;
          }
          Gt(e, Pe, gt);
          break;
        case 5:
          Gt(e, Pe, gt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Le(e, te()), e.callbackNode === n ? np.bind(null, e) : null;
}
function Du(e, t) {
  var n = yr;
  return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256), e = pi(e, t), e !== 2 && (t = Pe, Pe = n, t !== null && zu(t)), e;
}
function zu(e) {
  Pe === null ? Pe = e : Pe.push.apply(Pe, e);
}
function Sv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!rt(i(), o))
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
function Ot(e, t) {
  for (t &= ~Is, t &= ~Yi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - tt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Sc(e) {
  if (B & 6)
    throw Error(C(327));
  zn();
  var t = Xo(e, 0);
  if (!(t & 1))
    return Le(e, te()), null;
  var n = pi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ou(e);
    r !== 0 && (t = r, n = Du(e, r));
  }
  if (n === 1)
    throw n = Fr, en(e, 0), Ot(e, t), Le(e, te()), n;
  if (n === 6)
    throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, Pe, gt), Le(e, te()), null;
}
function Fs(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    B = n, B === 0 && (Un = te() + 500, Hi && Kt());
  }
}
function un(e) {
  zt !== null && zt.tag === 0 && !(B & 6) && zn();
  var t = B;
  B |= 1;
  var n = Ye.transition, r = H;
  try {
    if (Ye.transition = null, H = 1, e)
      return e();
  } finally {
    H = r, Ye.transition = n, B = t, !(B & 6) && Kt();
  }
}
function Bs() {
  Me = Pn.current, Y(Pn);
}
function en(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Gy(n)), oe !== null)
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch (Ss(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ei();
          break;
        case 3:
          Fn(), Y(Ne), Y(Se), Ls();
          break;
        case 5:
          Ts(r);
          break;
        case 4:
          Fn();
          break;
        case 13:
          Y(X);
          break;
        case 19:
          Y(X);
          break;
        case 10:
          Cs(r.type._context);
          break;
        case 22:
        case 23:
          Bs();
      }
      n = n.return;
    }
  if (se = e, oe = e = Ut(e.current, null), pe = Me = t, le = 0, Fr = null, Is = Yi = ln = 0, Pe = yr = null, Jt !== null) {
    for (t = 0; t < Jt.length; t++)
      if (n = Jt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var l = i.next;
          i.next = o, r.next = l;
        }
        n.pending = r;
      }
    Jt = null;
  }
  return e;
}
function rp(e, t) {
  do {
    var n = oe;
    try {
      if (Es(), $o.current = ai, si) {
        for (var r = G.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        si = !1;
      }
      if (on = 0, ue = ie = G = null, mr = !1, $r = 0, $s.current = null, n === null || n.return === null) {
        le = 1, Fr = t, oe = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = pe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, m = u, c = m.tag;
          if (!(m.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var h = m.alternate;
            h ? (m.updateQueue = h.updateQueue, m.memoizedState = h.memoizedState, m.lanes = h.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var w = uc(l);
          if (w !== null) {
            w.flags &= -257, sc(w, l, u, i, t), w.mode & 1 && lc(i, a, t), t = w, s = a;
            var v = t.updateQueue;
            if (v === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              lc(i, a, t), Us();
              break e;
            }
            s = Error(C(426));
          }
        } else if (Q && u.mode & 1) {
          var L = uc(l);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), sc(L, l, u, i, t), ks(Bn(s, u));
            break e;
          }
        }
        i = s = Bn(s, u), le !== 4 && (le = 2), yr === null ? yr = [i] : yr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Bd(i, s, t);
              ec(i, d);
              break e;
            case 1:
              u = s;
              var f = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ft === null || !Ft.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Ud(i, u, t);
                ec(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      lp(n);
    } catch (g) {
      t = g, oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function op() {
  var e = ci.current;
  return ci.current = ai, e === null ? ai : e;
}
function Us() {
  (le === 0 || le === 3 || le === 2) && (le = 4), se === null || !(ln & 268435455) && !(Yi & 268435455) || Ot(se, pe);
}
function pi(e, t) {
  var n = B;
  B |= 2;
  var r = op();
  (se !== e || pe !== t) && (gt = null, en(e, t));
  do
    try {
      kv();
      break;
    } catch (o) {
      rp(e, o);
    }
  while (1);
  if (Es(), B = n, ci.current = r, oe !== null)
    throw Error(C(261));
  return se = null, pe = 0, le;
}
function kv() {
  for (; oe !== null; )
    ip(oe);
}
function xv() {
  for (; oe !== null && !Yg(); )
    ip(oe);
}
function ip(e) {
  var t = sp(e.alternate, e, Me);
  e.memoizedProps = e.pendingProps, t === null ? lp(e) : oe = t, $s.current = null;
}
function lp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = mv(n, t), n !== null) {
        n.flags &= 32767, oe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, oe = null;
        return;
      }
    } else if (n = hv(n, t, Me), n !== null) {
      oe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Gt(e, t, n) {
  var r = H, o = Ye.transition;
  try {
    Ye.transition = null, H = 1, Ev(e, t, n, r);
  } finally {
    Ye.transition = o, H = r;
  }
  return null;
}
function Ev(e, t, n, r) {
  do
    zn();
  while (zt !== null);
  if (B & 6)
    throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (ry(e, i), e === se && (oe = se = null, pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || mo || (mo = !0, ap(Qo, function() {
    return zn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ye.transition, Ye.transition = null;
    var l = H;
    H = 1;
    var u = B;
    B |= 4, $s.current = null, yv(e, n), ep(n, e), Hy(cu), Go = !!au, cu = au = null, e.current = n, vv(n), Qg(), B = u, H = l, Ye.transition = i;
  } else
    e.current = n;
  if (mo && (mo = !1, zt = e, di = o), i = e.pendingLanes, i === 0 && (Ft = null), Zg(n.stateNode), Le(e, te()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (fi)
    throw fi = !1, e = Ru, Ru = null, e;
  return di & 1 && e.tag !== 0 && zn(), i = e.pendingLanes, i & 1 ? e === Ou ? vr++ : (vr = 0, Ou = e) : vr = 0, Kt(), null;
}
function zn() {
  if (zt !== null) {
    var e = Bf(di), t = Ye.transition, n = H;
    try {
      if (Ye.transition = null, H = 16 > e ? 16 : e, zt === null)
        var r = !1;
      else {
        if (e = zt, zt = null, di = 0, B & 6)
          throw Error(C(331));
        var o = B;
        for (B |= 4, O = e.current; O !== null; ) {
          var i = O, l = i.child;
          if (O.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (O = a; O !== null; ) {
                  var m = O;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(8, m, i);
                  }
                  var c = m.child;
                  if (c !== null)
                    c.return = m, O = c;
                  else
                    for (; O !== null; ) {
                      m = O;
                      var h = m.sibling, w = m.return;
                      if (Zd(m), m === a) {
                        O = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = w, O = h;
                        break;
                      }
                      O = w;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var L = y.sibling;
                    y.sibling = null, y = L;
                  } while (y !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null)
            l.return = i, O = l;
          else
            e:
              for (; O !== null; ) {
                if (i = O, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(9, i, i.return);
                  }
                var d = i.sibling;
                if (d !== null) {
                  d.return = i.return, O = d;
                  break e;
                }
                O = i.return;
              }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          l = O;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null)
            p.return = l, O = p;
          else
            e:
              for (l = f; O !== null; ) {
                if (u = O, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ki(9, u);
                    }
                  } catch (g) {
                    ee(u, u.return, g);
                  }
                if (u === l) {
                  O = null;
                  break e;
                }
                var S = u.sibling;
                if (S !== null) {
                  S.return = u.return, O = S;
                  break e;
                }
                O = u.return;
              }
        }
        if (B = o, Kt(), dt && typeof dt.onPostCommitFiberRoot == "function")
          try {
            dt.onPostCommitFiberRoot(ji, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      H = n, Ye.transition = t;
    }
  }
  return !1;
}
function kc(e, t, n) {
  t = Bn(n, t), t = Bd(e, t, 1), e = jt(e, t, 1), t = xe(), e !== null && (Kr(e, 1, t), Le(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3)
    kc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
          e = Bn(n, e), e = Ud(t, e, 1), t = jt(t, e, 1), e = xe(), t !== null && (Kr(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Cv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, se === e && (pe & n) === n && (le === 4 || le === 3 && (pe & 130023424) === pe && 500 > te() - js ? en(e, 0) : Is |= n), Le(e, t);
}
function up(e, t) {
  t === 0 && (e.mode & 1 ? (t = oo, oo <<= 1, !(oo & 130023424) && (oo = 4194304)) : t = 1);
  var n = xe();
  e = Ct(e, t), e !== null && (Kr(e, t, n), Le(e, n));
}
function Pv(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), up(e, n);
}
function _v(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), up(e, n);
}
var sp;
sp = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current)
      _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return _e = !1, pv(e, t, n);
      _e = !!(e.flags & 131072);
    }
  else
    _e = !1, Q && t.flags & 1048576 && dd(t, ri, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      jo(e, t), e = t.pendingProps;
      var o = $n(t, Se.current);
      Dn(t, n), o = Os(null, t, r, e, o, n);
      var i = Ds();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (i = !0, ti(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, _s(t), o.updater = Vi, t.stateNode = o, o._reactInternals = t, wu(t, r, e, n), t = xu(null, t, r, !0, i, n)) : (t.tag = 0, Q && i && ws(t), ke(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (jo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Tv(r), e = Je(r, e), o) {
          case 0:
            t = ku(null, t, r, e, n);
            break e;
          case 1:
            t = fc(null, t, r, e, n);
            break e;
          case 11:
            t = ac(null, t, r, e, n);
            break e;
          case 14:
            t = cc(null, t, r, Je(r.type, e), n);
            break e;
        }
        throw Error(C(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), ku(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), fc(e, t, r, o, n);
    case 3:
      e: {
        if (Vd(t), e === null)
          throw Error(C(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, vd(e, t), li(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Bn(Error(C(423)), t), t = dc(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Bn(Error(C(424)), t), t = dc(e, t, r, n, o);
            break e;
          } else
            for ($e = It(t.stateNode.containerInfo.firstChild), je = t, Q = !0, et = null, n = gd(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (In(), r === o) {
            t = Pt(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return wd(t), e === null && gu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, fu(r, o) ? l = null : i !== null && fu(r, i) && (t.flags |= 32), Wd(e, t), ke(e, t, l, n), t.child;
    case 6:
      return e === null && gu(t), null;
    case 13:
      return Kd(e, t, n);
    case 4:
      return Ns(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = jn(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), ac(e, t, r, o, n);
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, V(oi, r._currentValue), r._currentValue = l, i !== null)
          if (rt(i.value, l)) {
            if (i.children === o.children && !Ne.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                l = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      s = St(-1, n & -n), s.tag = 2;
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var m = a.pending;
                        m === null ? s.next = s : (s.next = m.next, m.next = s), a.pending = s;
                      }
                    }
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), yu(
                      i.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10)
                l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (l = i.return, l === null)
                  throw Error(C(341));
                l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), yu(l, n, t), l = i.sibling;
              } else
                l = i.child;
              if (l !== null)
                l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (i = l.sibling, i !== null) {
                    i.return = l.return, l = i;
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ke(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Dn(t, n), o = Qe(o), r = r(o), t.flags |= 1, ke(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Je(r, t.pendingProps), o = Je(r.type, o), cc(e, t, r, o, n);
    case 15:
      return bd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), jo(e, t), t.tag = 1, Te(r) ? (e = !0, ti(t)) : e = !1, Dn(t, n), Fd(t, r, o), wu(t, r, o, n), xu(null, t, r, !0, e, n);
    case 19:
      return Yd(e, t, n);
    case 22:
      return Hd(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function ap(e, t) {
  return $f(e, t);
}
function Nv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ke(e, t, n, r) {
  return new Nv(e, t, n, r);
}
function bs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Tv(e) {
  if (typeof e == "function")
    return bs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === us)
      return 11;
    if (e === ss)
      return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ke(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Uo(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    bs(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case mn:
          return tn(n.children, o, i, t);
        case ls:
          l = 8, o |= 8;
          break;
        case Hl:
          return e = Ke(12, n, t, o | 2), e.elementType = Hl, e.lanes = i, e;
        case Wl:
          return e = Ke(13, n, t, o), e.elementType = Wl, e.lanes = i, e;
        case Vl:
          return e = Ke(19, n, t, o), e.elementType = Vl, e.lanes = i, e;
        case wf:
          return Qi(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case yf:
                l = 10;
                break e;
              case vf:
                l = 9;
                break e;
              case us:
                l = 11;
                break e;
              case ss:
                l = 14;
                break e;
              case Tt:
                l = 16, r = null;
                break e;
            }
          throw Error(C(130, e == null ? e : typeof e, ""));
      }
  return t = Ke(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function tn(e, t, n, r) {
  return e = Ke(7, e, r, t), e.lanes = n, e;
}
function Qi(e, t, n, r) {
  return e = Ke(22, e, r, t), e.elementType = wf, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ml(e, t, n) {
  return e = Ke(6, e, null, t), e.lanes = n, e;
}
function Al(e, t, n) {
  return t = Ke(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Lv(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ml(0), this.expirationTimes = ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ml(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Hs(e, t, n, r, o, i, l, u, s) {
  return e = new Lv(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ke(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _s(i), e;
}
function Rv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function cp(e) {
  if (!e)
    return Ht;
  e = e._reactInternals;
  e: {
    if (an(e) !== e || e.tag !== 1)
      throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n))
      return cd(e, n, t);
  }
  return t;
}
function fp(e, t, n, r, o, i, l, u, s) {
  return e = Hs(n, r, !0, e, o, i, l, u, s), e.context = cp(null), n = e.current, r = xe(), o = Bt(n), i = St(r, o), i.callback = t ?? null, jt(n, i, o), e.current.lanes = o, Kr(e, o, r), Le(e, r), e;
}
function Xi(e, t, n, r) {
  var o = t.current, i = xe(), l = Bt(o);
  return n = cp(n), t.context === null ? t.context = n : t.pendingContext = n, t = St(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = jt(o, t, l), e !== null && (nt(e, o, l, i), Ao(e, o, l)), l;
}
function hi(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ws(e, t) {
  xc(e, t), (e = e.alternate) && xc(e, t);
}
function Ov() {
  return null;
}
var dp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vs(e) {
  this._internalRoot = e;
}
Gi.prototype.render = Vs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(C(409));
  Xi(e, t, null, null);
};
Gi.prototype.unmount = Vs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      Xi(null, e, null, null);
    }), t[Et] = null;
  }
};
function Gi(e) {
  this._internalRoot = e;
}
Gi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++)
      ;
    Rt.splice(n, 0, e), n === 0 && Vf(e);
  }
};
function Ks(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Zi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ec() {
}
function Dv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = hi(l);
        i.call(a);
      };
    }
    var l = fp(t, r, e, 0, null, !1, !1, "", Ec);
    return e._reactRootContainer = l, e[Et] = l.current, Or(e.nodeType === 8 ? e.parentNode : e), un(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = hi(s);
      u.call(a);
    };
  }
  var s = Hs(e, 0, !1, null, null, !1, !1, "", Ec);
  return e._reactRootContainer = s, e[Et] = s.current, Or(e.nodeType === 8 ? e.parentNode : e), un(function() {
    Xi(t, s, n, r);
  }), s;
}
function Ji(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = hi(l);
        u.call(s);
      };
    }
    Xi(t, l, e, o);
  } else
    l = Dv(n, t, e, o, r);
  return hi(l);
}
Uf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ir(t.pendingLanes);
        n !== 0 && (fs(t, n | 1), Le(t, te()), !(B & 6) && (Un = te() + 500, Kt()));
      }
      break;
    case 13:
      un(function() {
        var r = Ct(e, 1);
        if (r !== null) {
          var o = xe();
          nt(r, e, 1, o);
        }
      }), Ws(e, 1);
  }
};
ds = function(e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = xe();
      nt(t, e, 134217728, n);
    }
    Ws(e, 134217728);
  }
};
bf = function(e) {
  if (e.tag === 13) {
    var t = Bt(e), n = Ct(e, t);
    if (n !== null) {
      var r = xe();
      nt(n, e, t, r);
    }
    Ws(e, t);
  }
};
Hf = function() {
  return H;
};
Wf = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
tu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ql(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = bi(r);
            if (!o)
              throw Error(C(90));
            kf(r), Ql(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ef(e, n);
      break;
    case "select":
      t = n.value, t != null && Tn(e, !!n.multiple, t, !1);
  }
};
Rf = Fs;
Of = un;
var zv = { usingClientEntryPoint: !1, Events: [Qr, wn, bi, Tf, Lf, Fs] }, tr = { findFiberByHostInstance: Zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mv = { bundleType: tr.bundleType, version: tr.version, rendererPackageName: tr.rendererPackageName, rendererConfig: tr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Mf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: tr.findFiberByHostInstance || Ov, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!go.isDisabled && go.supportsFiber)
    try {
      ji = go.inject(Mv), dt = go;
    } catch {
    }
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zv;
Ue.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ks(t))
    throw Error(C(200));
  return Rv(e, t, null, n);
};
Ue.createRoot = function(e, t) {
  if (!Ks(e))
    throw Error(C(299));
  var n = !1, r = "", o = dp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Hs(e, 1, !1, null, null, n, !1, r, o), e[Et] = t.current, Or(e.nodeType === 8 ? e.parentNode : e), new Vs(t);
};
Ue.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = Mf(t), e = e === null ? null : e.stateNode, e;
};
Ue.flushSync = function(e) {
  return un(e);
};
Ue.hydrate = function(e, t, n) {
  if (!Zi(t))
    throw Error(C(200));
  return Ji(null, e, t, !0, n);
};
Ue.hydrateRoot = function(e, t, n) {
  if (!Ks(e))
    throw Error(C(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = dp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = fp(t, null, e, 1, n ?? null, o, !1, i, l), e[Et] = t.current, Or(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Gi(t);
};
Ue.render = function(e, t, n) {
  if (!Zi(t))
    throw Error(C(200));
  return Ji(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function(e) {
  if (!Zi(e))
    throw Error(C(40));
  return e._reactRootContainer ? (un(function() {
    Ji(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Et] = null;
    });
  }), !0) : !1;
};
Ue.unstable_batchedUpdates = Fs;
Ue.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Zi(n))
    throw Error(C(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(C(38));
  return Ji(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function pp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pp);
    } catch (e) {
      console.error(e);
    }
}
pp(), pf.exports = Ue;
var Av = pf.exports, hp, Cc = Av;
hp = Cc.createRoot, Cc.hydrateRoot;
function mp(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function $v(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function Iv({
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
  let l = null;
  switch (e.type) {
    case "frame":
      l = /* @__PURE__ */ x(
        "div",
        {
          className: "chd-layer-frame",
          style: { background: e.fill || "#ffffff" }
        }
      );
      break;
    case "rect":
      l = /* @__PURE__ */ x(
        "div",
        {
          className: "chd-layer-rect",
          style: { background: e.fill || "#888780" }
        }
      );
      break;
    case "text":
      l = /* @__PURE__ */ x(
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
      l = e.src ? /* @__PURE__ */ x(
        "img",
        {
          className: `chd-layer-image${e.objectFit === "contain" || /logo/i.test(e.name) ? " chd-layer-image--contain" : ""}`,
          src: e.src,
          alt: e.name,
          draggable: !1
        }
      ) : /* @__PURE__ */ x("div", { className: "chd-layer-image-placeholder", style: { background: e.fill || "#e8e6e1" }, children: e.name || "Image" });
      break;
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: `chd-layer${t ? " chd-layer--selected" : ""}${e.locked ? " chd-layer--locked" : ""}`,
      style: i,
      "data-layer-id": e.id,
      onPointerDown: (u) => {
        u.button === 0 && (u.stopPropagation(), n(u), e.locked || r(u));
      },
      children: [
        l,
        e.locked ? /* @__PURE__ */ x(
          "button",
          {
            type: "button",
            className: "chd-layer-lock",
            title: "Double-click to unlock",
            "aria-label": "Locked. Double-click to unlock",
            onPointerDown: (u) => {
              u.stopPropagation();
            },
            onDoubleClick: (u) => {
              u.preventDefault(), u.stopPropagation(), o == null || o();
            },
            children: /* @__PURE__ */ M("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: [
              /* @__PURE__ */ x("rect", { x: "2", y: "5.5", width: "8", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.3" }),
              /* @__PURE__ */ x(
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
const Mu = {
  primary: "#00a651",
  secondary: "#000000",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  text: "#000000",
  muted: "#6b716e"
};
function yo(e) {
  return typeof e == "boolean" ? e : void 0;
}
function vo(e) {
  return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function jv(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (!r || typeof r != "object")
      continue;
    const o = r, i = Number(o.x), l = Number(o.y), u = Number(o.width), s = Number(o.height);
    [i, l, u, s].every(Number.isFinite) && (t[n] = {
      x: i,
      y: l,
      width: u,
      height: s,
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
let Fv = 1;
function ur() {
  return `layer-${Date.now().toString(36)}-${Fv++}`;
}
function Au(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: ur(),
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
        id: ur(),
        type: e,
        name: "Rectangle",
        x: n,
        y: r,
        width: 160,
        height: 100,
        visible: !0,
        fill: Mu.primary,
        locked: !1,
        allowTransform: !1,
        editableContent: !1
      };
    case "text":
      return {
        id: ur(),
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
        id: ur(),
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
function gp() {
  const e = Au("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = Mu.secondary;
  const t = Au("image", { x: 120, y: 140 });
  return t.name = "Logo", t.width = 240, t.height = 80, t.src = "", t.fill = "#ffffff", t.locked = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: Mu.background
    },
    layers: [e, t]
  };
}
function ze(e) {
  return JSON.parse(JSON.stringify(e));
}
function yp(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e;
  if (t.version !== 1 || !t.canvas || typeof t.canvas != "object" || !Array.isArray(t.layers))
    return null;
  const n = t.canvas, r = Number(n.width), o = Number(n.height);
  if (!Number.isFinite(r) || !Number.isFinite(o))
    return null;
  const i = [];
  for (const l of t.layers) {
    if (!l || typeof l != "object")
      continue;
    const u = l, s = u.type;
    if (s !== "frame" && s !== "rect" && s !== "text" && s !== "image")
      continue;
    const a = typeof u.id == "string" ? u.id : ur(), m = typeof u.name == "string" ? u.name : s, c = Number(u.x), h = Number(u.y), w = Number(u.width), v = Number(u.height);
    if (![c, h, w, v].every(Number.isFinite))
      continue;
    const y = {
      id: a,
      type: s,
      name: m,
      x: c,
      y: h,
      width: w,
      height: v,
      rotation: typeof u.rotation == "number" ? u.rotation : void 0,
      visible: u.visible !== !1,
      locked: !!u.locked,
      allowTransform: !!u.allowTransform,
      fill: typeof u.fill == "string" ? u.fill : void 0,
      text: typeof u.text == "string" ? u.text : void 0,
      fontSize: typeof u.fontSize == "number" ? u.fontSize : void 0,
      color: typeof u.color == "string" ? u.color : void 0,
      src: typeof u.src == "string" ? u.src : void 0,
      pinLeft: yo(u.pinLeft),
      pinRight: yo(u.pinRight),
      pinTop: yo(u.pinTop),
      pinBottom: yo(u.pinBottom),
      marginTop: vo(u.marginTop),
      marginRight: vo(u.marginRight),
      marginBottom: vo(u.marginBottom),
      marginLeft: vo(u.marginLeft),
      pageLayouts: jv(u.pageLayouts),
      objectFit: u.objectFit === "contain" || u.objectFit === "cover" ? u.objectFit : void 0
    };
    typeof u.editableContent == "boolean" ? y.editableContent = u.editableContent : y.editableContent = s === "text" || s === "image", i.push(y);
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
function vp(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function qi(e) {
  return e.locked ? !1 : vp(e);
}
function Gr(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function Ys(e, t) {
  return t === "admin" ? !0 : e.visible ? qi(e) || Gr(e) : !1;
}
function Bv(e, t, n) {
  const r = {}, o = new Map(e.layers.map((i) => [i.id, i]));
  for (const i of t.layers) {
    const l = o.get(i.id);
    if (!l)
      continue;
    const u = {};
    Gr(l) && (i.x !== l.x && (u.x = i.x), i.y !== l.y && (u.y = i.y), i.width !== l.width && (u.width = i.width), i.height !== l.height && (u.height = i.height)), qi(l) && ((i.text ?? "") !== (l.text ?? "") && (u.text = i.text), (i.fill ?? "") !== (l.fill ?? "") && (u.fill = i.fill), (i.color ?? "") !== (l.color ?? "") && (u.color = i.color), (i.src ?? "") !== (l.src ?? "") && (u.src = i.src)), Object.keys(u).length > 0 && (r[i.id] = u);
  }
  return { version: 1, templateId: n, overrides: r };
}
function Uv(e, t) {
  const n = {};
  return Gr(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), qi(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
function el(e, t) {
  return {
    width: Math.round(e / 25.4 * 96),
    height: Math.round(t / 25.4 * 96)
  };
}
function wo(e, t) {
  return {
    width: Math.round(e * 96),
    height: Math.round(t * 96)
  };
}
const So = el(210, 297), ko = el(297, 420), xo = el(148, 210), tl = [
  { id: "a4-portrait", group: "print", label: "A4 portrait", width: So.width, height: So.height },
  { id: "a4-landscape", group: "print", label: "A4 landscape", width: So.height, height: So.width },
  { id: "a3-portrait", group: "print", label: "A3 portrait", width: ko.width, height: ko.height },
  { id: "a3-landscape", group: "print", label: "A3 landscape", width: ko.height, height: ko.width },
  { id: "a5-portrait", group: "print", label: "A5 portrait", width: xo.width, height: xo.height },
  { id: "a5-landscape", group: "print", label: "A5 landscape", width: xo.height, height: xo.width },
  { id: "letter-portrait", group: "print", label: "Letter portrait", ...wo(8.5, 11) },
  { id: "letter-landscape", group: "print", label: "Letter landscape", ...wo(11, 8.5) },
  { id: "tabloid-portrait", group: "print", label: "Tabloid portrait", ...wo(11, 17) },
  { id: "tabloid-landscape", group: "print", label: "Tabloid landscape", ...wo(17, 11) },
  {
    id: "business-card",
    group: "print",
    label: "Business card",
    ...el(85, 55)
  },
  { id: "1080-square", group: "social", label: "Square 1080", width: 1080, height: 1080 },
  { id: "1080-story", group: "social", label: "Story 1080 × 1920", width: 1080, height: 1920 },
  { id: "1080-portrait", group: "social", label: "Portrait 1080 × 1350", width: 1080, height: 1350 },
  { id: "1200-link", group: "social", label: "Link post 1200 × 628", width: 1200, height: 628 }
], bv = [
  { id: "print", label: "Print" },
  { id: "social", label: "Social" }
];
function $u(e) {
  return tl.find((t) => t.id === e);
}
function wp(e, t, n) {
  if (n && $u(n)) {
    const o = $u(n);
    if (o.width === e && o.height === t)
      return o.id;
  }
  const r = tl.find((o) => o.width === e && o.height === t);
  return (r == null ? void 0 : r.id) ?? "custom";
}
const ct = 24, Pc = 1, Sp = 0.25, kp = 3, Hv = 8;
function Eo(e, t) {
  return Math.abs(e - t) <= Hv;
}
function Co(e, t) {
  return e === !0 ? !0 : e === !1 ? !1 : t;
}
function nl(e) {
  return typeof e.pinLeft == "boolean" || typeof e.pinRight == "boolean" || typeof e.pinTop == "boolean" || typeof e.pinBottom == "boolean";
}
function xp(e, t, n) {
  return nl(e) ? {
    left: e.pinLeft === !0,
    right: e.pinRight === !0,
    top: e.pinTop === !0,
    bottom: e.pinBottom === !0
  } : {
    left: Co(e.pinLeft, Eo(e.x, 0)),
    right: Co(e.pinRight, Eo(e.x + e.width, t)),
    top: Co(e.pinTop, Eo(e.y, 0)),
    bottom: Co(e.pinBottom, Eo(e.y + e.height, n))
  };
}
function Po(e, t) {
  const n = e[t];
  return typeof n == "number" && Number.isFinite(n) ? Math.max(0, n) : 0;
}
function bn(e, t, n) {
  const r = xp(e, t, n), o = Po(e, "marginTop"), i = Po(e, "marginRight"), l = Po(e, "marginBottom"), u = Po(e, "marginLeft");
  let s = e.x, a = e.y, m = e.width, c = e.height;
  return r.left && r.right ? (s = u, m = Math.max(ct, t - u - i)) : r.left ? s = u : r.right && (s = t - i - m), r.top && r.bottom ? (a = o, c = Math.max(ct, n - o - l)) : r.top ? a = o : r.bottom && (a = n - l - c), { x: s, y: a, width: m, height: c };
}
function _c(e, t, n, r, o, i) {
  const l = e, u = n - e - t;
  if (o && i) {
    const a = l, m = Math.max(ct, r - l - u);
    return { start: a, size: m };
  }
  if (o)
    return { start: l, size: t };
  if (i) {
    const a = t;
    return { start: Math.max(0, r - u - a), size: a };
  }
  const s = n === 0 ? 1 : r / n;
  return {
    start: e * s,
    size: Math.max(ct, t * s)
  };
}
function Wv(e, t, n) {
  if (t.width === n.width && t.height === n.height)
    return e;
  if (nl(e))
    return {
      ...e,
      ...bn(e, n.width, n.height)
    };
  const r = xp(e, t.width, t.height), o = _c(e.x, e.width, t.width, n.width, r.left, r.right), i = _c(e.y, e.height, t.height, n.height, r.top, r.bottom), l = r.left && r.right && r.top && r.bottom;
  return {
    ...e,
    x: o.start,
    y: i.start,
    width: o.size,
    height: i.size,
    objectFit: e.objectFit ?? (l && e.type === "image" ? "cover" : e.objectFit)
  };
}
function Ep(e, t, n) {
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
function Br(e) {
  const t = wp(e.width, e.height, e.presetId);
  return t !== "custom" ? t : `${Math.round(e.width)}x${Math.round(e.height)}`;
}
function _o(e, t) {
  const n = e[t];
  return typeof n == "number" && Number.isFinite(n) ? Math.max(0, n) : 0;
}
function mi(e) {
  return {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    pinLeft: e.pinLeft === !0,
    pinRight: e.pinRight === !0,
    pinTop: e.pinTop === !0,
    pinBottom: e.pinBottom === !0,
    marginTop: _o(e, "marginTop"),
    marginRight: _o(e, "marginRight"),
    marginBottom: _o(e, "marginBottom"),
    marginLeft: _o(e, "marginLeft")
  };
}
function Vv(e) {
  return { ...e };
}
function Kv(e, t) {
  const n = Br(t);
  return {
    ...e,
    pageLayouts: {
      ...e.pageLayouts,
      [n]: mi(e)
    }
  };
}
function Yv(e, t) {
  return Kv(e, t);
}
function Qv(e, t, n, r, o) {
  const i = {
    pinTop: e.pinTop === !0,
    pinLeft: e.pinLeft === !0,
    pinRight: e.pinRight === !0,
    pinBottom: e.pinBottom === !0,
    [t]: n
  }, l = { ...e, ...i };
  return {
    ...i,
    ...bn(l, r, o)
  };
}
function Xv(e, t, n, r, o) {
  const i = Math.max(0, Number.isFinite(n) ? n : 0), l = { ...e, [t]: i };
  return nl(l) ? {
    [t]: i,
    ...bn(l, r, o)
  } : { [t]: i };
}
function Cp(e, t, n) {
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
function Gv(e, t) {
  const n = mi(e), r = { ...e.pageLayouts ?? {} };
  r[Br(t)] = n;
  const o = [
    ...tl.map((u) => ({
      key: u.id,
      width: u.width,
      height: u.height
    })),
    { key: Br(t), width: t.width, height: t.height }
  ], i = /* @__PURE__ */ new Set();
  for (const u of o) {
    if (i.has(u.key))
      continue;
    i.add(u.key);
    const s = bn({ ...e, ...n }, u.width, u.height);
    r[u.key] = {
      ...n,
      ...s
    };
  }
  const l = bn({ ...e, ...n }, t.width, t.height);
  return {
    ...n,
    ...l,
    pageLayouts: r
  };
}
function Zv(e, t, n, r) {
  const o = e.canvas;
  if (o.width === t && o.height === n && (!r || o.presetId === r))
    return e;
  const i = Br(o), l = {
    ...o,
    width: t,
    height: n,
    presetId: r
  }, u = Br(l);
  return {
    ...e,
    canvas: l,
    layers: e.layers.map((s) => {
      const a = {
        ...s.pageLayouts,
        [i]: mi(s)
      }, m = a[u];
      if (m)
        return {
          ...s,
          ...Vv(m),
          pageLayouts: a
        };
      const c = nl(s) ? { ...s, ...bn(s, t, n) } : Wv(s, o, { width: t, height: n });
      return a[u] = mi(c), { ...c, pageLayouts: a };
    })
  };
}
const Jv = 50, Pp = N.createContext(null);
function qv(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function Nc(e, t, n) {
  if (t.length === 0)
    return e;
  const r = new Set(t), o = [...e];
  if (n === "forward") {
    for (let i = o.length - 2; i >= 0; i -= 1)
      if (r.has(o[i].id) && !r.has(o[i + 1].id)) {
        const l = o[i];
        o[i] = o[i + 1], o[i + 1] = l;
      }
  } else
    for (let i = 1; i < o.length; i += 1)
      if (r.has(o[i].id) && !r.has(o[i - 1].id)) {
        const l = o[i];
        o[i] = o[i - 1], o[i - 1] = l;
      }
  return o;
}
function e0({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: o,
  onDocumentChange: i,
  onInstanceChange: l
}) {
  const u = N.useRef(null);
  u.current || (u.current = n ? ze(n) : gp());
  const s = N.useRef(
    ze(r ?? n ?? u.current)
  ), a = N.useRef(t);
  a.current = t;
  const [m, c] = N.useState(() => ze(u.current)), [h, w] = N.useState([]), [v, y] = N.useState({
    zoom: Pc,
    panX: 40,
    panY: 40
  }), L = N.useRef([ze(u.current)]), d = N.useRef(0), [f, p] = N.useState(0), S = N.useRef(h);
  S.current = h;
  const g = N.useRef(m);
  g.current = m;
  const E = N.useRef(i);
  E.current = i;
  const k = N.useRef(l);
  k.current = l;
  const R = N.useRef(o);
  R.current = o;
  const I = N.useCallback(() => p((A) => A + 1), []), D = N.useCallback((A) => {
    var P, _;
    if ((P = E.current) == null || P.call(E, ze(A)), a.current === "endUser") {
      const T = R.current ?? "";
      (_ = k.current) == null || _.call(
        k,
        Bv(s.current, A, T)
      );
    }
  }, []), j = N.useCallback(
    (A) => {
      const P = L.current.slice(0, d.current + 1);
      for (P.push(ze(A)); P.length > Jv; )
        P.shift();
      L.current = P, d.current = P.length - 1, I();
    },
    [I]
  ), Oe = N.useCallback(
    (A, P) => {
      c(A), g.current = A, P && j(A), D(A);
    },
    [D, j]
  ), De = N.useCallback(
    (A) => {
      const P = a.current === "endUser";
      switch (A.type) {
        case "ADD_LAYER": {
          if (P)
            return;
          const _ = Au(A.layerType, A.at);
          c((T) => {
            const z = { ...T, layers: [...T.layers, _] };
            return j(z), D(z), z;
          }), w([_.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const _ = A.pushHistory !== !1;
          c((T) => {
            const z = {
              ...T,
              layers: T.layers.map((F) => {
                if (F.id !== A.id)
                  return F;
                const mt = P ? Uv(F, A.patch) : A.patch;
                if (Object.keys(mt).length === 0)
                  return F;
                const me = { ...F, ...mt };
                return typeof me.width == "number" && (me.width = Math.max(ct, me.width)), typeof me.height == "number" && (me.height = Math.max(ct, me.height)), P ? me : Yv(me, T.canvas);
              })
            };
            return _ && j(z), D(z), z;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if (P)
            return;
          const _ = new Set(A.ids ?? S.current);
          if (_.size === 0)
            return;
          c((T) => {
            const z = {
              ...T,
              layers: T.layers.filter((F) => !_.has(F.id))
            };
            return j(z), D(z), z;
          }), w((T) => T.filter((z) => !_.has(z)));
          break;
        }
        case "SELECT": {
          w((_) => {
            const T = A.ids.filter((z) => {
              const F = g.current.layers.find((mt) => mt.id === z);
              return F ? Ys(F, a.current) : !1;
            });
            if (A.additive) {
              const z = new Set(_);
              for (const F of T)
                z.has(F) ? z.delete(F) : z.add(F);
              return Array.from(z);
            }
            return T;
          });
          break;
        }
        case "UNSELECT_ALL": {
          w([]);
          break;
        }
        case "REORDER": {
          if (P)
            return;
          c((_) => {
            const T = {
              ..._,
              layers: qv(_.layers, A.fromIndex, A.toIndex)
            };
            return j(T), D(T), T;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if (P)
            return;
          c((_) => {
            const T = {
              ..._,
              layers: _.layers.map(
                (z) => z.id === A.id ? { ...z, visible: A.visible } : z
              )
            };
            return j(T), D(T), T;
          });
          break;
        }
        case "BRING_FORWARD": {
          if (P)
            return;
          const _ = S.current;
          c((T) => {
            const z = { ...T, layers: Nc(T.layers, _, "forward") };
            return j(z), D(z), z;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if (P)
            return;
          const _ = S.current;
          c((T) => {
            const z = { ...T, layers: Nc(T.layers, _, "backward") };
            return j(z), D(z), z;
          });
          break;
        }
        case "ZOOM_SET": {
          y((_) => ({
            ..._,
            zoom: mp(A.zoom, Sp, kp)
          }));
          break;
        }
        case "ZOOM_RESET": {
          y({ zoom: Pc, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          y((_) => ({
            ..._,
            panX: A.panX,
            panY: A.panY
          }));
          break;
        }
        case "UNDO": {
          if (d.current <= 0)
            return;
          d.current -= 1;
          const _ = ze(L.current[d.current]);
          c(_), g.current = _, w([]), I(), D(_);
          break;
        }
        case "REDO": {
          if (d.current >= L.current.length - 1)
            return;
          d.current += 1;
          const _ = ze(L.current[d.current]);
          c(_), g.current = _, w([]), I(), D(_);
          break;
        }
        case "LOAD_DOCUMENT": {
          Oe(ze(A.document), !0), w([]);
          break;
        }
        case "SET_CANVAS_SIZE": {
          if (P)
            return;
          c((_) => {
            const T = Zv(_, A.width, A.height, A.presetId);
            return T === _ ? _ : (j(T), D(T), T);
          });
          break;
        }
        case "PUSH_LAYER_TO_ALL_PAGES": {
          if (P)
            return;
          c((_) => {
            const T = {
              ..._,
              layers: _.layers.map((z) => z.id !== A.id ? z : { ...z, ...Gv(z, _.canvas) })
            };
            return j(T), D(T), T;
          });
          break;
        }
        case "COMMIT": {
          c((_) => (j(_), D(_), _));
          break;
        }
      }
    },
    [Oe, I, D, j]
  ), ot = N.useCallback(() => ze(m), [m]), Yt = N.useCallback(
    (A) => {
      if (a.current === "endUser")
        return !1;
      try {
        const P = yp(JSON.parse(A));
        return P ? (s.current = ze(P), Oe(P, !0), w([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [Oe]
  );
  N.useEffect(() => {
    t === "admin" && n && (s.current = ze(n)), t === "endUser" && r && (s.current = ze(r));
  }, [n, r, t]);
  const ht = N.useMemo(
    () => ({
      mode: t,
      templateId: o,
      document: m,
      selection: h,
      viewport: v,
      canUndo: d.current > 0,
      canRedo: d.current < L.current.length - 1,
      dispatch: De,
      exportDocument: ot,
      importDocumentJson: Yt
    }),
    [t, o, m, h, v, De, ot, Yt, f]
  );
  return /* @__PURE__ */ x(Pp.Provider, { value: ht, children: e });
}
function cn() {
  const e = N.useContext(Pp);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function Qs() {
  return cn().mode;
}
function rl() {
  return cn().document;
}
function _p() {
  return cn().document.layers;
}
function ol() {
  return cn().selection;
}
function Np() {
  return cn().viewport;
}
function il() {
  return cn().dispatch;
}
function t0() {
  const e = cn();
  return {
    mode: e.mode,
    canUndo: e.canUndo,
    canRedo: e.canRedo,
    exportDocument: e.exportDocument,
    importDocumentJson: e.importDocumentJson,
    dispatch: e.dispatch
  };
}
const n0 = ["nw", "ne", "sw", "se"];
function r0() {
  const e = rl(), t = ol(), n = Np(), r = il(), o = Qs(), [i, l] = N.useState(null), [u, s] = N.useState(!1), a = N.useRef(n);
  a.current = n;
  const m = N.useRef(o);
  m.current = o, N.useEffect(() => {
    const g = (k) => {
      if (k.code === "Space" && !(k.target instanceof HTMLInputElement) && !(k.target instanceof HTMLTextAreaElement) && (k.preventDefault(), s(!0)), m.current === "admin" && (k.key === "Delete" || k.key === "Backspace") && t.length > 0) {
        const R = k.target.tagName;
        if (R === "INPUT" || R === "TEXTAREA")
          return;
        k.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (k.ctrlKey || k.metaKey) && k.key.toLowerCase() === "z" && !k.shiftKey && (k.preventDefault(), r({ type: "UNDO" })), (k.ctrlKey || k.metaKey) && (k.key.toLowerCase() === "y" || k.key.toLowerCase() === "z" && k.shiftKey) && (k.preventDefault(), r({ type: "REDO" }));
    }, E = (k) => {
      k.code === "Space" && s(!1);
    };
    return window.addEventListener("keydown", g), window.addEventListener("keyup", E), () => {
      window.removeEventListener("keydown", g), window.removeEventListener("keyup", E);
    };
  }, [r, t.length]), N.useEffect(() => {
    if (!i)
      return;
    const g = (k) => {
      const R = a.current.zoom;
      if (i.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: i.origPanX + (k.clientX - i.startX),
          panY: i.origPanY + (k.clientY - i.startY)
        });
        return;
      }
      const { dx: I, dy: D } = $v(
        k.clientX - i.startX,
        k.clientY - i.startY,
        R
      );
      if (i.kind === "move") {
        for (const Yt of i.ids) {
          const ht = i.origins[Yt];
          ht && r({
            type: "UPDATE_LAYER",
            id: Yt,
            patch: { x: ht.x + I, y: ht.y + D },
            pushHistory: !1
          });
        }
        return;
      }
      let j = i.origX, Oe = i.origY, De = i.origW, ot = i.origH;
      i.handle.includes("e") && (De = Math.max(ct, i.origW + I)), i.handle.includes("s") && (ot = Math.max(ct, i.origH + D)), i.handle.includes("w") && (De = Math.max(ct, i.origW - I), j = i.origX + (i.origW - De)), i.handle.includes("n") && (ot = Math.max(ct, i.origH - D), Oe = i.origY + (i.origH - ot)), r({
        type: "UPDATE_LAYER",
        id: i.id,
        patch: { x: j, y: Oe, width: De, height: ot },
        pushHistory: !1
      });
    }, E = () => {
      (i.kind === "move" || i.kind === "resize") && r({ type: "COMMIT" }), l(null);
    };
    return window.addEventListener("pointermove", g), window.addEventListener("pointerup", E), () => {
      window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", E);
    };
  }, [i, r]);
  const c = (g) => {
    g.preventDefault();
    const E = mp(n.zoom * (g.deltaY < 0 ? 1.08 : 0.92), Sp, kp);
    r({ type: "ZOOM_SET", zoom: E });
  }, h = (g) => {
    l({
      kind: "pan",
      startX: g.clientX,
      startY: g.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, w = (g) => {
    if (g.button === 1 || g.button === 0 && u) {
      g.preventDefault(), h(g);
      return;
    }
    g.button === 0 && r({ type: "UNSELECT_ALL" });
  }, v = (g, E) => {
    Ys(g, o) && r({
      type: "SELECT",
      ids: [g.id],
      additive: E.shiftKey
    });
  }, y = (g) => o === "admin" ? !g.locked : Gr(g), L = (g, E) => {
    if (!y(g) || u)
      return;
    const k = t.includes(g.id) ? t : [g.id];
    t.includes(g.id) || r({ type: "SELECT", ids: [g.id] });
    const R = {};
    for (const I of k) {
      const D = e.layers.find((j) => j.id === I);
      D && y(D) && (R[I] = { x: D.x, y: D.y });
    }
    Object.keys(R).length !== 0 && l({
      kind: "move",
      ids: Object.keys(R),
      startX: E.clientX,
      startY: E.clientY,
      origins: R
    });
  }, d = (g, E, k) => {
    k.stopPropagation(), y(g) && (r({ type: "SELECT", ids: [g.id] }), l({
      kind: "resize",
      id: g.id,
      startX: k.clientX,
      startY: k.clientY,
      origX: g.x,
      origY: g.y,
      origW: g.width,
      origH: g.height,
      handle: E
    }));
  }, f = e.layers.filter((g) => t.includes(g.id) && g.visible), p = f.length === 1 ? f[0] : null, S = p ? y(p) : !1;
  return /* @__PURE__ */ M(
    "div",
    {
      className: `chd-viewport${u ? " chd-viewport--panning" : ""}`,
      onWheel: c,
      onPointerDown: w,
      children: [
        /* @__PURE__ */ x(
          "div",
          {
            className: "chd-world",
            style: {
              transform: `translate(${n.panX}px, ${n.panY}px) scale(${n.zoom})`
            },
            children: /* @__PURE__ */ M(
              "div",
              {
                className: "chd-artboard",
                "data-chd-artboard": "true",
                style: {
                  width: e.canvas.width,
                  height: e.canvas.height,
                  background: e.canvas.background || "#eceae4"
                },
                onPointerDown: (g) => {
                  g.button !== 0 || u || (g.stopPropagation(), r({ type: "UNSELECT_ALL" }));
                },
                children: [
                  /* @__PURE__ */ x("div", { className: "chd-artboard-page" }),
                  e.layers.map((g) => /* @__PURE__ */ x(
                    Iv,
                    {
                      layer: g,
                      selected: t.includes(g.id),
                      onSelect: (E) => v(g, E),
                      onMoveStart: (E) => L(g, E),
                      onUnlock: o === "admin" ? () => r({ type: "UPDATE_LAYER", id: g.id, patch: { locked: !1 } }) : void 0
                    },
                    g.id
                  )),
                  S && p ? /* @__PURE__ */ x(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: p.x,
                        top: p.y,
                        width: p.width,
                        height: p.height
                      },
                      children: n0.map((g) => /* @__PURE__ */ x(
                        "div",
                        {
                          className: `chd-handle chd-handle--${g}`,
                          onPointerDown: (E) => d(p, g, E)
                        },
                        g
                      ))
                    }
                  ) : p ? /* @__PURE__ */ x(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: p.x,
                        top: p.y,
                        width: p.width,
                        height: p.height
                      }
                    }
                  ) : null,
                  f.length > 1 ? f.map((g) => /* @__PURE__ */ x(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: g.x,
                        top: g.y,
                        width: g.width,
                        height: g.height
                      }
                    },
                    `sel-${g.id}`
                  )) : null
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ x("div", { className: "chd-viewport-hint", children: "Scroll to zoom · Space+drag to pan · Shift+click multi-select" })
      ]
    }
  );
}
function o0() {
  const e = _p(), t = ol(), n = il(), r = Qs(), o = r === "admin", [i, l] = N.useState(null), [u, s] = N.useState(null), a = [...e].map((c, h) => ({ layer: c, index: h })).reverse().filter(({ layer: c }) => o || Ys(c, r)), m = (c, h) => {
    if (c === h)
      return;
    const w = e.findIndex((y) => y.id === c), v = e.findIndex((y) => y.id === h);
    w < 0 || v < 0 || n({ type: "REORDER", fromIndex: w, toIndex: v });
  };
  return /* @__PURE__ */ M(
    "aside",
    {
      className: `chd-panel chd-layers-panel${o ? " chd-layers-panel--admin" : ""}`,
      "aria-label": "Layers",
      children: [
        /* @__PURE__ */ x("div", { className: "chd-panel-header", children: o ? "Layers" : "Editable layers" }),
        /* @__PURE__ */ x("ul", { className: "chd-layer-list", children: a.length === 0 ? /* @__PURE__ */ x("li", { className: "chd-panel-empty", children: "No editable layers" }) : a.map(({ layer: c, index: h }) => {
          const w = t.includes(c.id);
          return /* @__PURE__ */ M(
            "li",
            {
              draggable: o,
              className: `chd-layer-list-item${w ? " chd-layer-list-item--selected" : ""}${i === c.id ? " chd-layer-list-item--dragging" : ""}${u === c.id ? " chd-layer-list-item--drag-over" : ""}`,
              onDragStart: (v) => {
                if (o) {
                  if (v.target.closest("button")) {
                    v.preventDefault();
                    return;
                  }
                  v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", c.id), l(c.id);
                }
              },
              onDragOver: (v) => {
                o && (v.preventDefault(), v.dataTransfer.dropEffect = "move", u !== c.id && s(c.id));
              },
              onDragLeave: () => {
                s((v) => v === c.id ? null : v);
              },
              onDrop: (v) => {
                v.preventDefault();
                const y = v.dataTransfer.getData("text/plain");
                y && m(y, c.id), l(null), s(null);
              },
              onDragEnd: () => {
                l(null), s(null);
              },
              children: [
                o ? /* @__PURE__ */ x("span", { className: "chd-layer-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }) : null,
                /* @__PURE__ */ M(
                  "button",
                  {
                    type: "button",
                    className: "chd-layer-list-select",
                    onClick: (v) => n({
                      type: "SELECT",
                      ids: [c.id],
                      additive: v.shiftKey
                    }),
                    children: [
                      /* @__PURE__ */ x("span", { className: "chd-layer-list-type", children: c.type }),
                      /* @__PURE__ */ x("span", { className: "chd-layer-list-name", children: c.name })
                    ]
                  }
                ),
                o ? /* @__PURE__ */ M(sr, { children: [
                  /* @__PURE__ */ x(
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
                  /* @__PURE__ */ x(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: "Move up (forward)",
                      disabled: h >= e.length - 1,
                      onClick: () => n({ type: "REORDER", fromIndex: h, toIndex: h + 1 }),
                      children: "↑"
                    }
                  ),
                  /* @__PURE__ */ x(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: "Move down (back)",
                      disabled: h <= 0,
                      onClick: () => n({ type: "REORDER", fromIndex: h, toIndex: h - 1 }),
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
function dn({
  label: e,
  value: t,
  onChange: n,
  disabled: r
}) {
  return /* @__PURE__ */ M("label", { className: "chd-field", children: [
    /* @__PURE__ */ x("span", { children: e }),
    /* @__PURE__ */ x(
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
function i0() {
  const e = _p(), t = ol(), n = il(), r = Qs(), o = rl(), i = r === "admin", l = e.filter((c) => t.includes(c.id)), u = l.length === 1 ? l[0] : null, s = (c) => {
    u && n({ type: "UPDATE_LAYER", id: u.id, patch: c });
  }, a = u ? i ? !u.locked : Gr(u) : !1, m = u ? i ? !u.locked : qi(u) : !1;
  return /* @__PURE__ */ M("aside", { className: "chd-panel chd-properties-panel", "aria-label": "Properties", children: [
    /* @__PURE__ */ x("div", { className: "chd-panel-header", children: "Properties" }),
    u ? /* @__PURE__ */ M("div", { className: "chd-properties-body", children: [
      i ? /* @__PURE__ */ M("label", { className: "chd-field", children: [
        /* @__PURE__ */ x("span", { children: "Name" }),
        /* @__PURE__ */ x(
          "input",
          {
            type: "text",
            value: u.name,
            onChange: (c) => s({ name: c.target.value })
          }
        )
      ] }) : /* @__PURE__ */ M("div", { className: "chd-field", children: [
        /* @__PURE__ */ x("span", { children: "Layer" }),
        /* @__PURE__ */ x("strong", { children: u.name })
      ] }),
      /* @__PURE__ */ M("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ x(
          dn,
          {
            label: "X",
            value: Math.round(u.x),
            disabled: !a,
            onChange: (c) => s({ x: c })
          }
        ),
        /* @__PURE__ */ x(
          dn,
          {
            label: "Y",
            value: Math.round(u.y),
            disabled: !a,
            onChange: (c) => s({ y: c })
          }
        )
      ] }),
      /* @__PURE__ */ M("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ x(
          dn,
          {
            label: "W",
            value: Math.round(u.width),
            disabled: !a,
            onChange: (c) => s({ width: c })
          }
        ),
        /* @__PURE__ */ x(
          dn,
          {
            label: "H",
            value: Math.round(u.height),
            disabled: !a,
            onChange: (c) => s({ height: c })
          }
        )
      ] }),
      m && (u.type === "frame" || u.type === "rect" || u.type === "image") && /* @__PURE__ */ M("label", { className: "chd-field", children: [
        /* @__PURE__ */ x("span", { children: "Fill" }),
        /* @__PURE__ */ x(
          "input",
          {
            type: "color",
            value: u.fill && /^#/.test(u.fill) ? u.fill : "#888780",
            onChange: (c) => s({ fill: c.target.value })
          }
        )
      ] }),
      m && u.type === "text" && /* @__PURE__ */ M(sr, { children: [
        /* @__PURE__ */ M("label", { className: "chd-field", children: [
          /* @__PURE__ */ x("span", { children: "Text" }),
          /* @__PURE__ */ x(
            "textarea",
            {
              rows: 3,
              value: u.text || "",
              onChange: (c) => s({ text: c.target.value })
            }
          )
        ] }),
        i ? /* @__PURE__ */ M("div", { className: "chd-field-row", children: [
          /* @__PURE__ */ x(
            dn,
            {
              label: "Size",
              value: u.fontSize ?? 16,
              onChange: (c) => s({ fontSize: c })
            }
          ),
          /* @__PURE__ */ M("label", { className: "chd-field", children: [
            /* @__PURE__ */ x("span", { children: "Color" }),
            /* @__PURE__ */ x(
              "input",
              {
                type: "color",
                value: u.color && /^#/.test(u.color) ? u.color : "#1a1a1a",
                onChange: (c) => s({ color: c.target.value })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ M("label", { className: "chd-field", children: [
          /* @__PURE__ */ x("span", { children: "Color" }),
          /* @__PURE__ */ x(
            "input",
            {
              type: "color",
              value: u.color && /^#/.test(u.color) ? u.color : "#1a1a1a",
              onChange: (c) => s({ color: c.target.value })
            }
          )
        ] })
      ] }),
      m && u.type === "image" && /* @__PURE__ */ M(sr, { children: [
        /* @__PURE__ */ M("label", { className: "chd-field", children: [
          /* @__PURE__ */ x("span", { children: "Image URL" }),
          /* @__PURE__ */ x(
            "input",
            {
              type: "url",
              placeholder: "https://…",
              value: u.src || "",
              onChange: (c) => s({ src: c.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ M("label", { className: "chd-field", children: [
          /* @__PURE__ */ x("span", { children: "Fit" }),
          /* @__PURE__ */ M(
            "select",
            {
              value: u.objectFit || "cover",
              onChange: (c) => s({ objectFit: c.target.value }),
              children: [
                /* @__PURE__ */ x("option", { value: "cover", children: "Cover — fill page, keep photo ratio" }),
                /* @__PURE__ */ x("option", { value: "contain", children: "Contain — whole photo, may letterbox" })
              ]
            }
          )
        ] })
      ] }),
      i ? /* @__PURE__ */ M(sr, { children: [
        /* @__PURE__ */ M("div", { className: "chd-field", children: [
          /* @__PURE__ */ x("span", { children: "Pin to page" }),
          /* @__PURE__ */ x("div", { className: "chd-pin-grid", children: ["pinTop", "pinLeft", "pinRight", "pinBottom"].map((c) => {
            const h = {
              pinTop: "Top",
              pinLeft: "Left",
              pinRight: "Right",
              pinBottom: "Bottom"
            };
            return /* @__PURE__ */ M("label", { className: "chd-field-checkbox", children: [
              /* @__PURE__ */ x(
                "input",
                {
                  type: "checkbox",
                  checked: u[c] === !0,
                  onChange: (w) => s(
                    Qv(
                      u,
                      c,
                      w.target.checked,
                      o.canvas.width,
                      o.canvas.height
                    )
                  )
                }
              ),
              /* @__PURE__ */ x("span", { children: h[c] })
            ] }, c);
          }) }),
          /* @__PURE__ */ x("p", { className: "chd-field-hint", children: "Pinning a side moves this block to that edge using the margin. Pin left and right together to stretch width; pin top and bottom to stretch height." })
        ] }),
        /* @__PURE__ */ M("div", { className: "chd-field", children: [
          /* @__PURE__ */ x("span", { children: "Margins" }),
          /* @__PURE__ */ x("div", { className: "chd-pin-grid", children: [
            ["marginTop", "Top"],
            ["marginLeft", "Left"],
            ["marginRight", "Right"],
            ["marginBottom", "Bottom"]
          ].map(([c, h]) => /* @__PURE__ */ x(
            dn,
            {
              label: h,
              value: Math.round(typeof u[c] == "number" ? u[c] : 0),
              onChange: (w) => s(
                Xv(
                  u,
                  c,
                  w,
                  o.canvas.width,
                  o.canvas.height
                )
              )
            },
            c
          )) }),
          /* @__PURE__ */ x("p", { className: "chd-field-hint", children: "Margins are stored per page size. Change page, then adjust; use Push to all pages to copy this layout to every preset." })
        ] }),
        /* @__PURE__ */ x(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => s(Cp(u, o.canvas.width, o.canvas.height)),
            children: "Pin in place"
          }
        ),
        /* @__PURE__ */ x(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => n({ type: "PUSH_LAYER_TO_ALL_PAGES", id: u.id }),
            children: "Push to all pages"
          }
        ),
        /* @__PURE__ */ x(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => s(Ep(u, o.canvas.width, o.canvas.height)),
            children: "Fill page"
          }
        ),
        /* @__PURE__ */ M("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ x(
            "input",
            {
              type: "checkbox",
              checked: !!u.locked,
              onChange: (c) => s({ locked: c.target.checked })
            }
          ),
          /* @__PURE__ */ x("span", { children: "Locked" })
        ] }),
        /* @__PURE__ */ M("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ x(
            "input",
            {
              type: "checkbox",
              checked: !!u.allowTransform,
              onChange: (c) => s({ allowTransform: c.target.checked })
            }
          ),
          /* @__PURE__ */ x("span", { children: "Allow transform (end user)" })
        ] }),
        /* @__PURE__ */ M("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ x(
            "input",
            {
              type: "checkbox",
              checked: vp(u),
              onChange: (c) => s({ editableContent: c.target.checked })
            }
          ),
          /* @__PURE__ */ x("span", { children: "Editable content (end user)" })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ x("p", { className: "chd-panel-empty", children: l.length > 1 ? `${l.length} layers selected` : "Select a layer" })
  ] });
}
const l0 = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js", u0 = "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
function Tp(e, t) {
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
let $l = null, Il = null;
function s0() {
  return window.html2canvas ? Promise.resolve(window.html2canvas) : ($l || ($l = Tp(l0, "chd-html2canvas").then(() => {
    if (!window.html2canvas)
      throw new Error("html2canvas did not register on window");
    return window.html2canvas;
  })), $l);
}
function a0() {
  var e;
  return (e = window.jspdf) != null && e.jsPDF ? Promise.resolve(window.jspdf.jsPDF) : (Il || (Il = Tp(u0, "chd-jspdf").then(() => {
    var n;
    const t = (n = window.jspdf) == null ? void 0 : n.jsPDF;
    if (!t)
      throw new Error("jsPDF did not register on window");
    return t;
  })), Il);
}
const Tc = 96;
function c0(e, t) {
  const n = URL.createObjectURL(e), r = window.document.createElement("a");
  r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
function f0(e) {
  const t = e.closest(".chd-root"), n = t == null ? void 0 : t.querySelector("[data-chd-artboard]");
  if (!n)
    throw new Error("Could not find the designer page to export.");
  return n;
}
async function d0(e) {
  const t = f0(e), n = await s0();
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
async function p0(e, t) {
  const n = await new Promise((r, o) => {
    e.toBlob((i) => {
      i ? r(i) : o(new Error("Could not create PNG."));
    }, "image/png");
  });
  c0(n, t);
}
async function h0(e, t, n, r) {
  const o = await a0(), i = n * 25.4 / Tc, l = r * 25.4 / Tc, u = new o({
    orientation: i >= l ? "landscape" : "portrait",
    unit: "mm",
    format: [i, l],
    compress: !0
  });
  u.addImage(e.toDataURL("image/png"), "PNG", 0, 0, i, l), u.save(t);
}
async function m0(e, t, n) {
  const r = await d0(e);
  if (t === "png") {
    await p0(r, "design.png");
    return;
  }
  await h0(r, "design.pdf", n.width, n.height);
}
const g0 = [
  { format: "pdf", label: "PDF", hint: "Print-ready page" },
  { format: "png", label: "PNG", hint: "Image of the page" }
];
function y0() {
  const e = rl(), t = N.useRef(null), [n, r] = N.useState(!1), [o, i] = N.useState(!1), [l, u] = N.useState(null);
  N.useEffect(() => {
    if (!n)
      return;
    const a = (m) => {
      t.current && !t.current.contains(m.target) && r(!1);
    };
    return window.addEventListener("pointerdown", a), () => window.removeEventListener("pointerdown", a);
  }, [n]);
  const s = async (a) => {
    const m = t.current;
    if (!(!m || o)) {
      r(!1), i(!0), u(null);
      try {
        await m0(m, a, {
          width: e.canvas.width,
          height: e.canvas.height
        });
      } catch (c) {
        u(c instanceof Error ? c.message : "Generate failed.");
      } finally {
        i(!1);
      }
    }
  };
  return /* @__PURE__ */ M("div", { className: "chd-generate", ref: t, children: [
    /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        className: "chd-btn chd-btn--accent",
        disabled: o,
        "aria-expanded": n,
        "aria-haspopup": "menu",
        onClick: () => r((a) => !a),
        children: o ? "Generating…" : "Generate"
      }
    ),
    n ? /* @__PURE__ */ x("div", { className: "chd-generate-menu", role: "menu", children: g0.map((a) => /* @__PURE__ */ M(
      "button",
      {
        type: "button",
        role: "menuitem",
        className: "chd-generate-option",
        disabled: o,
        onClick: () => void s(a.format),
        children: [
          /* @__PURE__ */ x("strong", { children: a.label }),
          /* @__PURE__ */ x("span", { children: a.hint })
        ]
      },
      a.format
    )) }) : null,
    l ? /* @__PURE__ */ x("span", { className: "chd-generate-error", children: l }) : null
  ] });
}
const v0 = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function w0() {
  const e = il(), t = ol(), n = Np(), r = rl(), { mode: o, canUndo: i, canRedo: l, exportDocument: u, importDocumentJson: s } = t0(), a = N.useRef(null), m = o === "admin", c = wp(
    r.canvas.width,
    r.canvas.height,
    r.canvas.presetId
  ), h = () => {
    const d = u(), f = new Blob([JSON.stringify(d, null, 2)], { type: "application/json" }), p = URL.createObjectURL(f), S = window.document.createElement("a");
    S.href = p, S.download = "chdesigner-document.json", S.click(), URL.revokeObjectURL(p);
  }, w = async (d) => {
    if (!d)
      return;
    const f = await d.text();
    s(f) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  }, v = (d) => {
    const f = $u(d);
    f && e({
      type: "SET_CANVAS_SIZE",
      width: f.width,
      height: f.height,
      presetId: f.id
    });
  }, y = () => {
    const d = r.layers.filter((f) => t.includes(f.id));
    for (const f of d)
      e({
        type: "UPDATE_LAYER",
        id: f.id,
        patch: Cp(f, r.canvas.width, r.canvas.height)
      });
  }, L = () => {
    const d = r.layers.filter((f) => t.includes(f.id));
    for (const f of d)
      e({
        type: "UPDATE_LAYER",
        id: f.id,
        patch: Ep(f, r.canvas.width, r.canvas.height)
      });
  };
  return /* @__PURE__ */ M("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ M("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ x("span", { className: "chd-toolbar-logo-wrap", children: "Logo" }),
      /* @__PURE__ */ x("span", { className: "chd-toolbar-mode", children: m ? "Admin" : "Edit" })
    ] }),
    m ? /* @__PURE__ */ x("div", { className: "chd-toolbar-group", children: v0.map((d) => /* @__PURE__ */ M(
      "button",
      {
        type: "button",
        className: "chd-btn",
        onClick: () => e({ type: "ADD_LAYER", layerType: d.type }),
        children: [
          "+ ",
          d.label
        ]
      },
      d.type
    )) }) : null,
    m ? /* @__PURE__ */ M("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ M("label", { className: "chd-toolbar-field", children: [
        /* @__PURE__ */ x("span", { children: "Page" }),
        /* @__PURE__ */ M(
          "select",
          {
            className: "chd-toolbar-select",
            value: c,
            onChange: (d) => v(d.target.value),
            children: [
              c === "custom" ? /* @__PURE__ */ x("option", { value: "custom", children: "Custom" }) : null,
              bv.map((d) => /* @__PURE__ */ x("optgroup", { label: d.label, children: tl.filter((f) => f.group === d.id).map((f) => /* @__PURE__ */ x("option", { value: f.id, children: f.label }, f.id)) }, d.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ M("span", { className: "chd-toolbar-size", children: [
        Math.round(r.canvas.width),
        " × ",
        Math.round(r.canvas.height)
      ] }),
      /* @__PURE__ */ x(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: y,
          children: "Pin to page"
        }
      ),
      /* @__PURE__ */ x(
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
    m ? /* @__PURE__ */ M("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ x(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "DELETE_LAYERS" }),
          children: "Delete"
        }
      ),
      /* @__PURE__ */ x(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "BRING_FORWARD" }),
          children: "Forward"
        }
      ),
      /* @__PURE__ */ x(
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
    /* @__PURE__ */ M("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ x(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !i,
          onClick: () => e({ type: "UNDO" }),
          children: "Undo"
        }
      ),
      /* @__PURE__ */ x(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !l,
          onClick: () => e({ type: "REDO" }),
          children: "Redo"
        }
      )
    ] }),
    /* @__PURE__ */ M("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ x(y0, {}),
      /* @__PURE__ */ M("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ZOOM_RESET" }), children: [
        Math.round(n.zoom * 100),
        "%"
      ] }),
      m ? /* @__PURE__ */ M(sr, { children: [
        /* @__PURE__ */ x("button", { type: "button", className: "chd-btn", onClick: h, children: "Export JSON" }),
        /* @__PURE__ */ x("button", { type: "button", className: "chd-btn", onClick: () => {
          var d;
          return (d = a.current) == null ? void 0 : d.click();
        }, children: "Import" }),
        /* @__PURE__ */ x(
          "input",
          {
            ref: a,
            type: "file",
            accept: "application/json,.json",
            className: "chd-file-input",
            onChange: (d) => {
              var f;
              w(((f = d.target.files) == null ? void 0 : f[0]) ?? null), d.target.value = "";
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
  statusSlot: l,
  statusClassName: u,
  saveStatus: s
}) {
  return /* @__PURE__ */ x(e0, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    onDocumentChange: o,
    onInstanceChange: i
  }, children: /* @__PURE__ */ M("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ x(w0, {}),
    l ? /* @__PURE__ */ x("div", { className: `chd-status-bar${u ? ` ${u}` : ""}`, children: l }) : null,
    /* @__PURE__ */ M("div", { className: "chd-main", children: [
      /* @__PURE__ */ x(o0, {}),
      /* @__PURE__ */ x(r0, {}),
      /* @__PURE__ */ x(i0, {})
    ] }),
    s
  ] }) });
}
const k0 = "EPAM.BuilderTemplate", wr = "designerDocumentJson";
function nr(e) {
  if (typeof e == "number" && Number.isFinite(e))
    return String(e);
  if (typeof e == "string" && e.trim())
    return e.trim();
}
function x0(e, t) {
  const n = t && typeof t == "object" && !Array.isArray(t) ? t : {}, r = nr(n.templateId) || nr(n.entityId) || nr(n.builderTemplateId);
  if (r)
    return r;
  if (!e || typeof e != "object")
    return;
  const o = e, i = o.systemProperties && typeof o.systemProperties == "object" ? o.systemProperties : void 0;
  return nr(i == null ? void 0 : i.id) || nr(o.id);
}
function E0(e) {
  if (!e || typeof e != "object")
    return {};
  const t = e;
  if (t.properties && typeof t.properties == "object")
    return t;
  const n = t.content;
  return n && typeof n == "object" ? n : t;
}
function C0(e) {
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
function P0(e) {
  if (e)
    for (const t of [wr, `EPAM.${wr}`]) {
      const n = C0(e[t]);
      if (n)
        return n;
    }
}
function _0(e) {
  if (!(e != null && e.trim()))
    return null;
  try {
    return yp(JSON.parse(e));
  } catch {
    return null;
  }
}
function N0(e) {
  var n, r;
  const t = ((n = e.entitydefinition) == null ? void 0 : n.href) || ((r = e.entityDefinition) == null ? void 0 : r.href);
  return typeof t == "string" && t.trim() ? t.trim() : `/api/entitydefinitions/${k0}`;
}
function T0(e) {
  if (!e || typeof e != "object")
    return "";
  const t = e, n = t.Message ?? t.message ?? t.title;
  return typeof n == "string" && n.trim() ? `: ${n}` : "";
}
async function Lp(e, t) {
  var r;
  if (!((r = e.raw) != null && r.getAsync))
    throw new Error("Content Hub client is not available. Open this designer on an EPAM.BuilderTemplate page.");
  const n = await e.raw.getAsync(`/api/entities/${t}`);
  if (!n.isSuccessStatusCode || n.content == null)
    throw new Error(
      `Could not load EPAM.BuilderTemplate ${t} (${n.statusCode ?? "unknown"}).`
    );
  return E0(n.content);
}
async function L0(e, t) {
  const n = await Lp(e, t), r = _0(P0(n.properties));
  return r ? { document: r, createdDefault: !1 } : { document: gp(), createdDefault: !0 };
}
async function Lc(e, t, n) {
  var s;
  if (!((s = e.raw) != null && s.putAsync))
    throw new Error("Content Hub client is not available for saving EPAM.BuilderTemplate.");
  const r = await Lp(e, t), o = JSON.stringify(n), i = N0(r), l = [
    { label: "invariant", properties: { [wr]: { Invariant: o } } },
    { label: "plain", properties: { [wr]: o } },
    {
      label: "epam-invariant",
      properties: { [`EPAM.${wr}`]: { Invariant: o } }
    }
  ], u = [];
  for (const a of l) {
    const m = await e.raw.putAsync(`/api/entities/${t}`, {
      entitydefinition: { href: i },
      properties: a.properties
    });
    if (m.isSuccessStatusCode)
      return;
    u.push(`${a.label} → HTTP ${m.statusCode ?? "unknown"}${T0(m.content)}`);
  }
  throw new Error(
    `Could not save designerDocumentJson on EPAM.BuilderTemplate ${t}. ${u.join("; ")}`
  );
}
const R0 = 5e3;
function O0({ client: e, entity: t, options: n }) {
  const r = x0(t, n), [o, i] = N.useState(null), [l, u] = N.useState("loading"), [s, a] = N.useState(null), [m, c] = N.useState(null), h = N.useRef(null), w = N.useRef(null), v = N.useRef(0), y = N.useRef(!0);
  h.current = o;
  const L = N.useCallback(
    async (p) => {
      if (!e || !r)
        return;
      const S = ++v.current;
      u("saving"), a(null);
      try {
        if (await Lc(e, r, p), S !== v.current)
          return;
        u("saved");
      } catch (g) {
        if (S !== v.current)
          return;
        a(g instanceof Error ? g.message : "Failed to save template."), u("error");
      }
    },
    [e, r]
  );
  N.useEffect(() => {
    if (!r) {
      c(
        "An entity ID is needed. Open CHDesigner on an EPAM.BuilderTemplate detail page, or set templateId in the component configuration."
      ), u("error");
      return;
    }
    if (!e) {
      c("Content Hub client is not available. This component must run inside Content Hub."), u("error");
      return;
    }
    let p = !1;
    return u("loading"), c(null), (async () => {
      try {
        const S = await L0(e, r);
        if (p)
          return;
        if (y.current = !0, i(S.document), S.createdDefault) {
          u("saving");
          try {
            await Lc(e, r, S.document), p || u("saved");
          } catch (g) {
            if (p)
              return;
            a(g instanceof Error ? g.message : "Could not create the default template JSON."), u("error");
          }
        } else
          u("saved");
      } catch (S) {
        if (p)
          return;
        c(S instanceof Error ? S.message : "Could not load EPAM.BuilderTemplate."), u("error");
      }
    })(), () => {
      p = !0;
    };
  }, [e, r]), N.useEffect(() => {
    if (o) {
      if (y.current) {
        y.current = !1;
        return;
      }
      return u("pending"), w.current != null && window.clearTimeout(w.current), w.current = window.setTimeout(() => {
        const p = h.current;
        p && L(p);
      }, R0), () => {
        w.current != null && window.clearTimeout(w.current);
      };
    }
  }, [o, L]);
  const d = N.useCallback((p) => {
    i(p);
  }, []), f = l === "loading" ? "Loading template…" : l === "pending" ? "Unsaved changes" : l === "saving" ? "Saving…" : l === "error" ? s || "Save failed" : "Saved";
  return !r || m ? /* @__PURE__ */ x("div", { className: "chd-root", children: /* @__PURE__ */ x("div", { className: "chd-boot-error", children: m || "An entity ID is needed." }) }) : o ? /* @__PURE__ */ x(
    S0,
    {
      mode: "admin",
      document: o,
      templateDocument: o,
      templateId: r,
      onDocumentChange: d,
      saveStatus: /* @__PURE__ */ x("div", { className: `chd-save-status chd-save-status--${l}`, title: s || f, children: f })
    },
    r
  ) : /* @__PURE__ */ x("div", { className: "chd-root", children: /* @__PURE__ */ M("div", { className: "chd-boot-status", children: [
    "Loading EPAM.BuilderTemplate ",
    r,
    "…"
  ] }) });
}
function D0(e) {
  const t = hp(e);
  return {
    render(n) {
      t.render(
        /* @__PURE__ */ x(Rg, { theme: n.theme, children: /* @__PURE__ */ x(
          O0,
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
  D0 as default
};
