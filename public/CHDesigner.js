(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:min(80vh,720px);min-height:520px;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:10px;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;min-width:56px;background:#000000;color:#fff;border-radius:4px;padding:5px 10px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-toolbar-field{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--chd-muted)}.chd-toolbar-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;max-width:180px}.chd-toolbar-size{font-size:11px;color:var(--chd-muted);white-space:nowrap}.chd-pin-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 8px;margin-top:4px}.chd-field-hint{margin:6px 0 0;font-size:11px;color:var(--chd-muted);line-height:1.35}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layers-panel--admin .chd-layer-list-item{grid-template-columns:auto 1fr auto auto auto}.chd-layer-list-item--dragging{opacity:.45}.chd-layer-list-item--drag-over{outline:1px solid var(--chd-accent);background:#e8f6ee}.chd-layer-drag-handle{color:var(--chd-muted);font-size:11px;line-height:1;padding:0 4px;cursor:grab;-webkit-user-select:none;user-select:none}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{flex-direction:row;align-items:center;gap:8px;color:var(--chd-text)}.chd-field-checkbox input{width:auto}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:linear-gradient(45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,linear-gradient(-45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,#f0eee8;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:hidden}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function dp(e, t) {
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
function pp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yc = { exports: {} }, si = {}, vc = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r = Symbol.for("react.element"), hp = Symbol.for("react.portal"), mp = Symbol.for("react.fragment"), gp = Symbol.for("react.strict_mode"), yp = Symbol.for("react.profiler"), vp = Symbol.for("react.provider"), wp = Symbol.for("react.context"), Sp = Symbol.for("react.forward_ref"), kp = Symbol.for("react.suspense"), xp = Symbol.for("react.memo"), Ep = Symbol.for("react.lazy"), Fs = Symbol.iterator;
function Cp(e) {
  return e === null || typeof e != "object" ? null : (e = Fs && e[Fs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var wc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Sc = Object.assign, kc = {};
function Bn(e, t, n) {
  this.props = e, this.context = t, this.refs = kc, this.updater = n || wc;
}
Bn.prototype.isReactComponent = {};
Bn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xc() {
}
xc.prototype = Bn.prototype;
function Cu(e, t, n) {
  this.props = e, this.context = t, this.refs = kc, this.updater = n || wc;
}
var _u = Cu.prototype = new xc();
_u.constructor = Cu;
Sc(_u, Bn.prototype);
_u.isPureReactComponent = !0;
var js = Array.isArray, Ec = Object.prototype.hasOwnProperty, Pu = { current: null }, Cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function _c(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Ec.call(t, r) && !Cc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    o.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++)
      s[c] = arguments[c + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: $r, type: e, key: i, ref: l, props: o, _owner: Pu.current };
}
function _p(e, t) {
  return { $$typeof: $r, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Tu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $r;
}
function Pp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Us = /\/+/g;
function Gi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Pp("" + e.key) : t.toString(36);
}
function So(e, t, n, r, o) {
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
          case $r:
          case hp:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + Gi(l, 0) : r, js(o) ? (n = "", e != null && (n = e.replace(Us, "$&/") + "/"), So(o, t, n, "", function(c) {
      return c;
    })) : o != null && (Tu(o) && (o = _p(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Us, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", js(e))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Gi(i, u);
      l += So(i, t, n, s, o);
    }
  else if (s = Cp(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      i = i.value, s = r + Gi(i, u++), l += So(i, t, n, s, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Qr(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return So(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Tp(e) {
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
var Ee = { current: null }, ko = { transition: null }, Np = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: ko, ReactCurrentOwner: Pu };
function Pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: Qr, forEach: function(e, t, n) {
  Qr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Qr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Qr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Tu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = Bn;
M.Fragment = mp;
M.Profiler = yp;
M.PureComponent = Cu;
M.StrictMode = gp;
M.Suspense = kp;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Np;
M.act = Pc;
M.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Sc({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Pu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      Ec.call(t, s) && !Cc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++)
      u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: $r, type: e.type, key: o, ref: i, props: r, _owner: l };
};
M.createContext = function(e) {
  return e = { $$typeof: wp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vp, _context: e }, e.Consumer = e;
};
M.createElement = _c;
M.createFactory = function(e) {
  var t = _c.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: Sp, render: e };
};
M.isValidElement = Tu;
M.lazy = function(e) {
  return { $$typeof: Ep, _payload: { _status: -1, _result: e }, _init: Tp };
};
M.memo = function(e, t) {
  return { $$typeof: xp, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = ko.transition;
  ko.transition = {};
  try {
    e();
  } finally {
    ko.transition = t;
  }
};
M.unstable_act = Pc;
M.useCallback = function(e, t) {
  return Ee.current.useCallback(e, t);
};
M.useContext = function(e) {
  return Ee.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return Ee.current.useDeferredValue(e);
};
M.useEffect = function(e, t) {
  return Ee.current.useEffect(e, t);
};
M.useId = function() {
  return Ee.current.useId();
};
M.useImperativeHandle = function(e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function(e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function(e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return Ee.current.useMemo(e, t);
};
M.useReducer = function(e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
M.useRef = function(e) {
  return Ee.current.useRef(e);
};
M.useState = function(e) {
  return Ee.current.useState(e);
};
M.useSyncExternalStore = function(e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function() {
  return Ee.current.useTransition();
};
M.version = "18.3.1";
vc.exports = M;
var N = vc.exports;
const Rp = /* @__PURE__ */ pp(N), _l = /* @__PURE__ */ dp({
  __proto__: null,
  default: Rp
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
var Lp = N, Op = Symbol.for("react.element"), zp = Symbol.for("react.fragment"), Dp = Object.prototype.hasOwnProperty, Ap = Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tc(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    Dp.call(t, r) && !Ip.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Op, type: e, key: i, ref: l, props: o, _owner: Ap.current };
}
si.Fragment = zp;
si.jsx = Tc;
si.jsxs = Tc;
yc.exports = si;
var Nu = yc.exports;
const lr = Nu.Fragment, E = Nu.jsx, A = Nu.jsxs;
function Mp(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Bs = "$$material";
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
function ai(e, t) {
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
var $p = !1;
function Fp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function jp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Up = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !$p : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jp(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Fp(o);
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
}(), ye = "-ms-", Io = "-moz-", B = "-webkit-", Nc = "comm", Ru = "rule", Lu = "decl", Bp = "@import", Rc = "@keyframes", Hp = "@layer", Wp = Math.abs, ci = String.fromCharCode, Vp = Object.assign;
function Kp(e, t) {
  return fe(e, 0) ^ 45 ? (((t << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0;
}
function Lc(e) {
  return e.trim();
}
function Yp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, n) {
  return e.replace(t, n);
}
function Pl(e, t) {
  return e.indexOf(t);
}
function fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function yr(e, t, n) {
  return e.slice(t, n);
}
function ut(e) {
  return e.length;
}
function Ou(e) {
  return e.length;
}
function Xr(e, t) {
  return t.push(e), e;
}
function bp(e, t) {
  return e.map(t).join("");
}
var fi = 1, Dn = 1, Oc = 0, Le = 0, re = 0, Hn = "";
function di(e, t, n, r, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: fi, column: Dn, length: l, return: "" };
}
function Kn(e, t) {
  return Vp(di("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Qp() {
  return re;
}
function Xp() {
  return re = Le > 0 ? fe(Hn, --Le) : 0, Dn--, re === 10 && (Dn = 1, fi--), re;
}
function $e() {
  return re = Le < Oc ? fe(Hn, Le++) : 0, Dn++, re === 10 && (Dn = 1, fi++), re;
}
function ct() {
  return fe(Hn, Le);
}
function xo() {
  return Le;
}
function Fr(e, t) {
  return yr(Hn, e, t);
}
function vr(e) {
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
function zc(e) {
  return fi = Dn = 1, Oc = ut(Hn = e), Le = 0, [];
}
function Dc(e) {
  return Hn = "", e;
}
function Eo(e) {
  return Lc(Fr(Le - 1, Tl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Gp(e) {
  for (; (re = ct()) && re < 33; )
    $e();
  return vr(e) > 2 || vr(re) > 3 ? "" : " ";
}
function Zp(e, t) {
  for (; --t && $e() && !(re < 48 || re > 102 || re > 57 && re < 65 || re > 70 && re < 97); )
    ;
  return Fr(e, xo() + (t < 6 && ct() == 32 && $e() == 32));
}
function Tl(e) {
  for (; $e(); )
    switch (re) {
      case e:
        return Le;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Tl(re);
        break;
      case 40:
        e === 41 && Tl(e);
        break;
      case 92:
        $e();
        break;
    }
  return Le;
}
function Jp(e, t) {
  for (; $e() && e + re !== 47 + 10; )
    if (e + re === 42 + 42 && ct() === 47)
      break;
  return "/*" + Fr(t, Le - 1) + "*" + ci(e === 47 ? e : $e());
}
function qp(e) {
  for (; !vr(ct()); )
    $e();
  return Fr(e, Le);
}
function eh(e) {
  return Dc(Co("", null, null, null, [""], e = zc(e), 0, [0], e));
}
function Co(e, t, n, r, o, i, l, u, s) {
  for (var c = 0, m = 0, f = l, h = 0, w = 0, g = 0, v = 1, R = 1, d = 1, a = 0, p = "", k = o, y = i, x = r, S = p; R; )
    switch (g = a, a = $e()) {
      case 40:
        if (g != 108 && fe(S, f - 1) == 58) {
          Pl(S += H(Eo(a), "&", "&\f"), "&\f") != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Eo(a);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Gp(g);
        break;
      case 92:
        S += Zp(xo() - 1, 7);
        continue;
      case 47:
        switch (ct()) {
          case 42:
          case 47:
            Xr(th(Jp($e(), xo()), t, n), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * v:
        u[c++] = ut(S) * d;
      case 125 * v:
      case 59:
      case 0:
        switch (a) {
          case 0:
          case 125:
            R = 0;
          case 59 + m:
            d == -1 && (S = H(S, /\f/g, "")), w > 0 && ut(S) - f && Xr(w > 32 ? Ws(S + ";", r, n, f - 1) : Ws(H(S, " ", "") + ";", r, n, f - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if (Xr(x = Hs(S, t, n, c, m, o, u, p, k = [], y = [], f), i), a === 123)
              if (m === 0)
                Co(S, t, x, x, k, i, f, u, y);
              else
                switch (h === 99 && fe(S, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Co(e, x, x, r && Xr(Hs(e, x, x, 0, 0, o, u, p, o, k = [], f), y), o, y, f, u, r ? k : y);
                    break;
                  default:
                    Co(S, x, x, x, [""], y, 0, u, y);
                }
        }
        c = m = w = 0, v = d = 1, p = S = "", f = l;
        break;
      case 58:
        f = 1 + ut(S), w = g;
      default:
        if (v < 1) {
          if (a == 123)
            --v;
          else if (a == 125 && v++ == 0 && Xp() == 125)
            continue;
        }
        switch (S += ci(a), a * v) {
          case 38:
            d = m > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            u[c++] = (ut(S) - 1) * d, d = 1;
            break;
          case 64:
            ct() === 45 && (S += Eo($e())), h = ct(), m = f = ut(p = S += qp(xo())), a++;
            break;
          case 45:
            g === 45 && ut(S) == 2 && (v = 0);
        }
    }
  return i;
}
function Hs(e, t, n, r, o, i, l, u, s, c, m) {
  for (var f = o - 1, h = o === 0 ? i : [""], w = Ou(h), g = 0, v = 0, R = 0; g < r; ++g)
    for (var d = 0, a = yr(e, f + 1, f = Wp(v = l[g])), p = e; d < w; ++d)
      (p = Lc(v > 0 ? h[d] + " " + a : H(a, /&\f/g, h[d]))) && (s[R++] = p);
  return di(e, t, n, o === 0 ? Ru : u, s, c, m);
}
function th(e, t, n) {
  return di(e, t, n, Nc, ci(Qp()), yr(e, 2, -2), 0);
}
function Ws(e, t, n, r) {
  return di(e, t, n, Lu, yr(e, 0, r), yr(e, r + 1, -1), r);
}
function _n(e, t) {
  for (var n = "", r = Ou(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function nh(e, t, n, r) {
  switch (e.type) {
    case Hp:
      if (e.children.length)
        break;
    case Bp:
    case Lu:
      return e.return = e.return || e.value;
    case Nc:
      return "";
    case Rc:
      return e.return = e.value + "{" + _n(e.children, r) + "}";
    case Ru:
      e.value = e.props.join(",");
  }
  return ut(n = _n(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function rh(e) {
  var t = Ou(e);
  return function(n, r, o, i) {
    for (var l = "", u = 0; u < t; u++)
      l += e[u](n, r, o, i) || "";
    return l;
  };
}
function oh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ac(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ih = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = ct(), o === 38 && i === 12 && (n[r] = 1), !vr(i); )
    $e();
  return Fr(t, Le);
}, lh = function(t, n) {
  var r = -1, o = 44;
  do
    switch (vr(o)) {
      case 0:
        o === 38 && ct() === 12 && (n[r] = 1), t[r] += ih(Le - 1, n, r);
        break;
      case 2:
        t[r] += Eo(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = ct() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ci(o);
    }
  while (o = $e());
  return t;
}, uh = function(t, n) {
  return Dc(lh(zc(t), n));
}, Vs = /* @__PURE__ */ new WeakMap(), sh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Vs.get(r)) && !o) {
      Vs.set(t, !0);
      for (var i = [], l = uh(n, i), u = r.props, s = 0, c = 0; s < l.length; s++)
        for (var m = 0; m < u.length; m++, c++)
          t.props[c] = i[s] ? l[s].replace(/&\f/g, u[m]) : u[m] + " " + l[s];
    }
  }
}, ah = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ic(e, t) {
  switch (Kp(e, t)) {
    case 5103:
      return B + "print-" + e + e;
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
      return B + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + e + Io + e + ye + e + e;
    case 6828:
    case 4268:
      return B + e + ye + e + e;
    case 6165:
      return B + e + ye + "flex-" + e + e;
    case 5187:
      return B + e + H(e, /(\w+).+(:[^]+)/, B + "box-$1$2" + ye + "flex-$1$2") + e;
    case 5443:
      return B + e + ye + "flex-item-" + H(e, /flex-|-self/, "") + e;
    case 4675:
      return B + e + ye + "flex-line-pack" + H(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return B + e + ye + H(e, "shrink", "negative") + e;
    case 5292:
      return B + e + ye + H(e, "basis", "preferred-size") + e;
    case 6060:
      return B + "box-" + H(e, "-grow", "") + B + e + ye + H(e, "grow", "positive") + e;
    case 4554:
      return B + H(e, /([^-])(transform)/g, "$1" + B + "$2") + e;
    case 6187:
      return H(H(H(e, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, B + "$1$`$1");
    case 4968:
      return H(H(e, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + B + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e, /(.+)-inline(.+)/, B + "$1$2") + e;
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
            return H(e, /(.+:)(.+)-([^]+)/, "$1" + B + "$2-$3$1" + Io + (fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Pl(e, "stretch") ? Ic(H(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (fe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (fe(e, ut(e) - 3 - (~Pl(e, "!important") && 10))) {
        case 107:
          return H(e, ":", ":" + B) + e;
        case 101:
          return H(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + B + (fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + B + "$2$3$1" + ye + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (fe(e, t + 11)) {
        case 114:
          return B + e + ye + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return B + e + ye + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return B + e + ye + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return B + e + ye + e + e;
  }
  return e;
}
var ch = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Lu:
        t.return = Ic(t.value, t.length);
        break;
      case Rc:
        return _n([Kn(t, {
          value: H(t.value, "@", "@" + B)
        })], o);
      case Ru:
        if (t.length)
          return bp(t.props, function(i) {
            switch (Yp(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return _n([Kn(t, {
                  props: [H(i, /:(read-\w+)/, ":" + Io + "$1")]
                })], o);
              case "::placeholder":
                return _n([Kn(t, {
                  props: [H(i, /:(plac\w+)/, ":" + B + "input-$1")]
                }), Kn(t, {
                  props: [H(i, /:(plac\w+)/, ":" + Io + "$1")]
                }), Kn(t, {
                  props: [H(i, /:(plac\w+)/, ye + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, fh = [ch], dh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var R = v.getAttribute("data-emotion");
      R.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || fh, i = {}, l, u = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var R = v.getAttribute("data-emotion").split(" "), d = 1; d < R.length; d++)
        i[R[d]] = !0;
      u.push(v);
    }
  );
  var s, c = [sh, ah];
  {
    var m, f = [nh, oh(function(v) {
      m.insert(v);
    })], h = rh(c.concat(o, f)), w = function(R) {
      return _n(eh(R), h);
    };
    s = function(R, d, a, p) {
      m = a, w(R ? R + "{" + d.styles + "}" : d.styles), p && (g.inserted[d.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new Up({
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
  return g.sheet.hydrate(u), g;
}, Mc = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae = typeof Symbol == "function" && Symbol.for, zu = ae ? Symbol.for("react.element") : 60103, Du = ae ? Symbol.for("react.portal") : 60106, pi = ae ? Symbol.for("react.fragment") : 60107, hi = ae ? Symbol.for("react.strict_mode") : 60108, mi = ae ? Symbol.for("react.profiler") : 60114, gi = ae ? Symbol.for("react.provider") : 60109, yi = ae ? Symbol.for("react.context") : 60110, Au = ae ? Symbol.for("react.async_mode") : 60111, vi = ae ? Symbol.for("react.concurrent_mode") : 60111, wi = ae ? Symbol.for("react.forward_ref") : 60112, Si = ae ? Symbol.for("react.suspense") : 60113, ph = ae ? Symbol.for("react.suspense_list") : 60120, ki = ae ? Symbol.for("react.memo") : 60115, xi = ae ? Symbol.for("react.lazy") : 60116, hh = ae ? Symbol.for("react.block") : 60121, mh = ae ? Symbol.for("react.fundamental") : 60117, gh = ae ? Symbol.for("react.responder") : 60118, yh = ae ? Symbol.for("react.scope") : 60119;
function Ue(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case zu:
        switch (e = e.type, e) {
          case Au:
          case vi:
          case pi:
          case mi:
          case hi:
          case Si:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case yi:
              case wi:
              case xi:
              case ki:
              case gi:
                return e;
              default:
                return t;
            }
        }
      case Du:
        return t;
    }
  }
}
function $c(e) {
  return Ue(e) === vi;
}
V.AsyncMode = Au;
V.ConcurrentMode = vi;
V.ContextConsumer = yi;
V.ContextProvider = gi;
V.Element = zu;
V.ForwardRef = wi;
V.Fragment = pi;
V.Lazy = xi;
V.Memo = ki;
V.Portal = Du;
V.Profiler = mi;
V.StrictMode = hi;
V.Suspense = Si;
V.isAsyncMode = function(e) {
  return $c(e) || Ue(e) === Au;
};
V.isConcurrentMode = $c;
V.isContextConsumer = function(e) {
  return Ue(e) === yi;
};
V.isContextProvider = function(e) {
  return Ue(e) === gi;
};
V.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zu;
};
V.isForwardRef = function(e) {
  return Ue(e) === wi;
};
V.isFragment = function(e) {
  return Ue(e) === pi;
};
V.isLazy = function(e) {
  return Ue(e) === xi;
};
V.isMemo = function(e) {
  return Ue(e) === ki;
};
V.isPortal = function(e) {
  return Ue(e) === Du;
};
V.isProfiler = function(e) {
  return Ue(e) === mi;
};
V.isStrictMode = function(e) {
  return Ue(e) === hi;
};
V.isSuspense = function(e) {
  return Ue(e) === Si;
};
V.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === pi || e === vi || e === mi || e === hi || e === Si || e === ph || typeof e == "object" && e !== null && (e.$$typeof === xi || e.$$typeof === ki || e.$$typeof === gi || e.$$typeof === yi || e.$$typeof === wi || e.$$typeof === mh || e.$$typeof === gh || e.$$typeof === yh || e.$$typeof === hh);
};
V.typeOf = Ue;
Mc.exports = V;
var vh = Mc.exports, Fc = vh, wh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Sh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, jc = {};
jc[Fc.ForwardRef] = wh;
jc[Fc.Memo] = Sh;
var kh = !0;
function Uc(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Iu = function(t, n, r) {
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
  kh === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Mu = function(t, n, r) {
  Iu(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function xh(e) {
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
var Eh = {
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
}, Ch = !1, _h = /[A-Z]|^ms/g, Ph = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Bc = function(t) {
  return t.charCodeAt(1) === 45;
}, Ks = function(t) {
  return t != null && typeof t != "boolean";
}, Zi = /* @__PURE__ */ Ac(function(e) {
  return Bc(e) ? e : e.replace(_h, "-$&").toLowerCase();
}), Ys = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ph, function(r, o, i) {
          return st = {
            name: o,
            styles: i,
            next: st
          }, o;
        });
  }
  return Eh[t] !== 1 && !Bc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Th = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function wr(e, t, n) {
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
      return Nh(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = st, c = n(e);
        return st = s, wr(e, t, c);
      }
      break;
    }
  }
  var m = n;
  if (t == null)
    return m;
  var f = t[m];
  return f !== void 0 ? f : m;
}
function Nh(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += wr(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object") {
        var u = l;
        t != null && t[u] !== void 0 ? r += i + "{" + t[u] + "}" : Ks(u) && (r += Zi(i) + ":" + Ys(i, u) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Ch)
          throw new Error(Th);
        if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
          for (var s = 0; s < l.length; s++)
            Ks(l[s]) && (r += Zi(i) + ":" + Ys(i, l[s]) + ";");
        else {
          var c = wr(e, t, l);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Zi(i) + ":" + c + ";";
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
var bs = /label:\s*([^\s;{]+)\s*(;|$)/g, st;
function Ei(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  st = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += wr(n, t, i);
  else {
    var l = i;
    o += l[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += wr(n, t, e[u]), r) {
      var s = i;
      o += s[u];
    }
  bs.lastIndex = 0;
  for (var c = "", m; (m = bs.exec(o)) !== null; )
    c += "-" + m[1];
  var f = xh(o) + c;
  return {
    name: f,
    styles: o,
    next: st
  };
}
var Rh = function(t) {
  return t();
}, Hc = _l["useInsertionEffect"] ? _l["useInsertionEffect"] : !1, Wc = Hc || Rh, Qs = Hc || N.useLayoutEffect, Lh = !1, Vc = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ dh({
    key: "css"
  }) : null
);
Vc.Provider;
var $u = function(t) {
  return /* @__PURE__ */ N.forwardRef(function(n, r) {
    var o = N.useContext(Vc);
    return t(n, o, r);
  });
}, jr = /* @__PURE__ */ N.createContext({}), Fu = {}.hasOwnProperty, Nl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Oh = function(t, n) {
  var r = {};
  for (var o in n)
    Fu.call(n, o) && (r[o] = n[o]);
  return r[Nl] = t, r;
}, zh = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Iu(n, r, o), Wc(function() {
    return Mu(n, r, o);
  }), null;
}, Dh = /* @__PURE__ */ $u(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Nl], i = [r], l = "";
  typeof e.className == "string" ? l = Uc(t.registered, i, e.className) : e.className != null && (l = e.className + " ");
  var u = Ei(i, void 0, N.useContext(jr));
  l += t.key + "-" + u.name;
  var s = {};
  for (var c in e)
    Fu.call(e, c) && c !== "css" && c !== Nl && !Lh && (s[c] = e[c]);
  return s.className = l, n && (s.ref = n), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(zh, {
    cache: t,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ N.createElement(o, s));
}), Ah = Dh, Ji = { exports: {} }, Xs;
function Ih() {
  return Xs || (Xs = 1, function(e) {
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
  }(Ji)), Ji.exports;
}
Ih();
var Gs = function(t, n) {
  var r = arguments;
  if (n == null || !Fu.call(n, "css"))
    return N.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Ah, i[1] = Oh(t, n);
  for (var l = 2; l < o; l++)
    i[l] = r[l];
  return N.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Gs || (Gs = {}));
var Mh = /* @__PURE__ */ $u(function(e, t) {
  var n = e.styles, r = Ei([n], void 0, N.useContext(jr)), o = N.useRef();
  return Qs(function() {
    var i = t.key + "-global", l = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", i), l.hydrate([s])), o.current = [l, u], function() {
      l.flush();
    };
  }, [t]), Qs(function() {
    var i = o.current, l = i[0], u = i[1];
    if (u) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Mu(t, r.next, !0), l.tags.length) {
      var s = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = s, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
}), $h = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fh = /* @__PURE__ */ Ac(
  function(e) {
    return $h.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), jh = !1, Uh = Fh, Bh = function(t) {
  return t !== "theme";
}, Zs = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Uh : Bh;
}, Js = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Hh = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Iu(n, r, o), Wc(function() {
    return Mu(n, r, o);
  }), null;
}, Wh = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var u = Js(t, n, r), s = u || Zs(o), c = !s("as");
  return function() {
    var m = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      f.push.apply(f, m);
    else {
      var h = m[0];
      f.push(h[0]);
      for (var w = m.length, g = 1; g < w; g++)
        f.push(m[g], h[g]);
    }
    var v = $u(function(R, d, a) {
      var p = c && R.as || o, k = "", y = [], x = R;
      if (R.theme == null) {
        x = {};
        for (var S in R)
          x[S] = R[S];
        x.theme = N.useContext(jr);
      }
      typeof R.className == "string" ? k = Uc(d.registered, y, R.className) : R.className != null && (k = R.className + " ");
      var L = Ei(f.concat(y), d.registered, x);
      k += d.key + "-" + L.name, l !== void 0 && (k += " " + l);
      var $ = c && u === void 0 ? Zs(p) : s, z = {};
      for (var F in R)
        c && F === "as" || $(F) && (z[F] = R[F]);
      return z.className = k, a && (z.ref = a), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Hh, {
        cache: d,
        serialized: L,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ N.createElement(p, z));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = f, v.__emotion_forwardProp = u, Object.defineProperty(v, "toString", {
      value: function() {
        return l === void 0 && jh ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), v.withComponent = function(R, d) {
      var a = e(R, de({}, n, d, {
        shouldForwardProp: Js(v, d, !0)
      }));
      return a.apply(void 0, f);
    }, v;
  };
}, Vh = [
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
], qs = Wh.bind(null);
Vh.forEach(function(e) {
  qs[e] = qs(e);
});
function Kh(e) {
  return e == null || Object.keys(e).length === 0;
}
function Yh(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ E(Mh, {
    styles: typeof t == "function" ? (o) => t(Kh(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ea = [];
function bh(e) {
  return ea[0] = e, Ei(ea);
}
function dn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Kc(e) {
  if (/* @__PURE__ */ N.isValidElement(e) || !dn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Kc(e[n]);
  }), t;
}
function Mo(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? de({}, e) : e;
  return dn(e) && dn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ N.isValidElement(t[o]) ? r[o] = t[o] : dn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && dn(e[o]) ? r[o] = Mo(e[o], t[o], n) : n.clone ? r[o] = dn(t[o]) ? Kc(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Qh = ["values", "unit", "step"], Xh = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => de({}, n, {
    [r.key]: r.val
  }), {});
};
function Gh(e) {
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
  } = e, o = ai(e, Qh), i = Xh(t), l = Object.keys(i);
  function u(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function s(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function c(h, w) {
    const g = l.indexOf(w);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(g !== -1 && typeof t[l[g]] == "number" ? t[l[g]] : w) - r / 100}${n})`;
  }
  function m(h) {
    return l.indexOf(h) + 1 < l.length ? c(h, l[l.indexOf(h) + 1]) : u(h);
  }
  function f(h) {
    const w = l.indexOf(h);
    return w === 0 ? u(l[1]) : w === l.length - 1 ? s(l[w]) : c(h, l[l.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return de({
    keys: l,
    values: i,
    up: u,
    down: s,
    between: c,
    only: m,
    not: f,
    unit: n
  }, o);
}
const Zh = {
  borderRadius: 4
}, Jh = Zh;
function ur(e, t) {
  return t ? Mo(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ju = {
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
}, ta = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ju[e]}px)`
};
function St(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || ta;
    return t.reduce((l, u, s) => (l[i.up(i.keys[s])] = n(t[s]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || ta;
    return Object.keys(t).reduce((l, u) => {
      if (Object.keys(i.values || ju).indexOf(u) !== -1) {
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
function qh(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function na(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Yc(e) {
  if (typeof e != "string")
    throw new Error(Mp(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ci(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function $o(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Ci(e, n) || r, t && (o = t(o, r, e)), o;
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
    const u = l[t], s = l.theme, c = Ci(s, r) || {};
    return St(l, u, (f) => {
      let h = $o(c, o, f);
      return f === h && typeof f == "string" && (h = $o(c, o, `${t}${f === "default" ? "" : Yc(f)}`, f)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function em(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const tm = {
  m: "margin",
  p: "padding"
}, nm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ra = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, rm = em((e) => {
  if (e.length > 2)
    if (ra[e])
      e = ra[e];
    else
      return [e];
  const [t, n] = e.split(""), r = tm[t], o = nm[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Uu = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Bu = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Uu, ...Bu];
function Ur(e, t, n, r) {
  var o;
  const i = (o = Ci(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (l) => typeof l == "string" ? l : i * l : Array.isArray(i) ? (l) => typeof l == "string" ? l : i[l] : typeof i == "function" ? i : () => {
  };
}
function bc(e) {
  return Ur(e, "spacing", 8);
}
function Br(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function om(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Br(t, n), r), {});
}
function im(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = rm(n), i = om(o, r), l = e[n];
  return St(e, l, i);
}
function Qc(e, t) {
  const n = bc(e.theme);
  return Object.keys(e).map((r) => im(e, t, r, n)).reduce(ur, {});
}
function J(e) {
  return Qc(e, Uu);
}
J.propTypes = {};
J.filterProps = Uu;
function q(e) {
  return Qc(e, Bu);
}
q.propTypes = {};
q.filterProps = Bu;
function lm(e = 8) {
  if (e.mui)
    return e;
  const t = bc({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const l = t(i);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = !0, n;
}
function _i(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? ur(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function We(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ge(e, t) {
  return ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const um = Ge("border", We), sm = Ge("borderTop", We), am = Ge("borderRight", We), cm = Ge("borderBottom", We), fm = Ge("borderLeft", We), dm = Ge("borderColor"), pm = Ge("borderTopColor"), hm = Ge("borderRightColor"), mm = Ge("borderBottomColor"), gm = Ge("borderLeftColor"), ym = Ge("outline", We), vm = Ge("outlineColor"), Pi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ur(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Br(t, r)
    });
    return St(e, e.borderRadius, n);
  }
  return null;
};
Pi.propTypes = {};
Pi.filterProps = ["borderRadius"];
_i(um, sm, am, cm, fm, dm, pm, hm, mm, gm, Pi, ym, vm);
const Ti = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      gap: Br(t, r)
    });
    return St(e, e.gap, n);
  }
  return null;
};
Ti.propTypes = {};
Ti.filterProps = ["gap"];
const Ni = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Br(t, r)
    });
    return St(e, e.columnGap, n);
  }
  return null;
};
Ni.propTypes = {};
Ni.filterProps = ["columnGap"];
const Ri = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Br(t, r)
    });
    return St(e, e.rowGap, n);
  }
  return null;
};
Ri.propTypes = {};
Ri.filterProps = ["rowGap"];
const wm = ne({
  prop: "gridColumn"
}), Sm = ne({
  prop: "gridRow"
}), km = ne({
  prop: "gridAutoFlow"
}), xm = ne({
  prop: "gridAutoColumns"
}), Em = ne({
  prop: "gridAutoRows"
}), Cm = ne({
  prop: "gridTemplateColumns"
}), _m = ne({
  prop: "gridTemplateRows"
}), Pm = ne({
  prop: "gridTemplateAreas"
}), Tm = ne({
  prop: "gridArea"
});
_i(Ti, Ni, Ri, wm, Sm, km, xm, Em, Cm, _m, Pm, Tm);
function Pn(e, t) {
  return t === "grey" ? t : e;
}
const Nm = ne({
  prop: "color",
  themeKey: "palette",
  transform: Pn
}), Rm = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Pn
}), Lm = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Pn
});
_i(Nm, Rm, Lm);
function Ie(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Om = ne({
  prop: "width",
  transform: Ie
}), Hu = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ju[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Ie(n)
      };
    };
    return St(e, e.maxWidth, t);
  }
  return null;
};
Hu.filterProps = ["maxWidth"];
const zm = ne({
  prop: "minWidth",
  transform: Ie
}), Dm = ne({
  prop: "height",
  transform: Ie
}), Am = ne({
  prop: "maxHeight",
  transform: Ie
}), Im = ne({
  prop: "minHeight",
  transform: Ie
});
ne({
  prop: "size",
  cssProperty: "width",
  transform: Ie
});
ne({
  prop: "size",
  cssProperty: "height",
  transform: Ie
});
const Mm = ne({
  prop: "boxSizing"
});
_i(Om, Hu, zm, Dm, Am, Im, Mm);
const $m = {
  // borders
  border: {
    themeKey: "borders",
    transform: We
  },
  borderTop: {
    themeKey: "borders",
    transform: We
  },
  borderRight: {
    themeKey: "borders",
    transform: We
  },
  borderBottom: {
    themeKey: "borders",
    transform: We
  },
  borderLeft: {
    themeKey: "borders",
    transform: We
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
    transform: We
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Pi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Pn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Pn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Pn
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
    style: Ti
  },
  rowGap: {
    style: Ri
  },
  columnGap: {
    style: Ni
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
    transform: Ie
  },
  maxWidth: {
    style: Hu
  },
  minWidth: {
    transform: Ie
  },
  height: {
    transform: Ie
  },
  maxHeight: {
    transform: Ie
  },
  minHeight: {
    transform: Ie
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
}, Xc = $m;
function Fm(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function jm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Um() {
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
      themeKey: c,
      transform: m,
      style: f
    } = u;
    if (r == null)
      return null;
    if (c === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = Ci(o, c) || {};
    return f ? f(l) : St(l, r, (g) => {
      let v = $o(h, m, g);
      return g === v && typeof g == "string" && (v = $o(h, m, `${n}${g === "default" ? "" : Yc(g)}`, g)), s === !1 ? v : {
        [s]: v
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
    const u = (r = i.unstable_sxConfig) != null ? r : Xc;
    function s(c) {
      let m = c;
      if (typeof c == "function")
        m = c(i);
      else if (typeof c != "object")
        return c;
      if (!m)
        return null;
      const f = qh(i.breakpoints), h = Object.keys(f);
      let w = f;
      return Object.keys(m).forEach((g) => {
        const v = jm(m[g], i);
        if (v != null)
          if (typeof v == "object")
            if (u[g])
              w = ur(w, e(g, v, i, u));
            else {
              const R = St({
                theme: i
              }, v, (d) => ({
                [g]: d
              }));
              Fm(R, v) ? w[g] = t({
                sx: v,
                theme: i,
                nested: !0
              }) : w = ur(w, R);
            }
          else
            w = ur(w, e(g, v, i, u));
      }), !l && i.modularCssLayers ? {
        "@layer sx": na(h, w)
      } : na(h, w);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Gc = Um();
Gc.filterProps = ["sx"];
const Bm = Gc;
function Hm(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Wm = ["breakpoints", "palette", "spacing", "shape"];
function Vm(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, l = ai(e, Wm), u = Gh(n), s = lm(o);
  let c = Mo({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: de({
      mode: "light"
    }, r),
    spacing: s,
    shape: de({}, Jh, i)
  }, l);
  return c.applyStyles = Hm, c = t.reduce((m, f) => Mo(m, f), c), c.unstable_sxConfig = de({}, Xc, l == null ? void 0 : l.unstable_sxConfig), c.unstable_sx = function(f) {
    return Bm({
      sx: f,
      theme: this
    });
  }, c;
}
function Km(e) {
  return Object.keys(e).length === 0;
}
function Wu(e = null) {
  const t = N.useContext(jr);
  return !t || Km(t) ? e : t;
}
const Ym = Vm();
function bm(e = Ym) {
  return Wu(e);
}
function qi(e) {
  const t = bh(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Qm({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = bm(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((l) => qi(typeof l == "function" ? l(o) : l)) : i = qi(i)), /* @__PURE__ */ E(Yh, {
    styles: i
  });
}
const Xm = typeof window < "u" ? N.useLayoutEffect : N.useEffect, Gm = Xm;
let oa = 0;
function Zm(e) {
  const [t, n] = N.useState(e), r = e || t;
  return N.useEffect(() => {
    t == null && (oa += 1, n(`mui-${oa}`));
  }, [t]), r;
}
const ia = _l["useId".toString()];
function Jm(e) {
  if (ia !== void 0) {
    const t = ia();
    return e ?? t;
  }
  return Zm(e);
}
const qm = /* @__PURE__ */ N.createContext(null), Zc = qm;
function Jc() {
  return N.useContext(Zc);
}
const eg = typeof Symbol == "function" && Symbol.for, tg = eg ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ng(e, t) {
  return typeof t == "function" ? t(e) : de({}, e, t);
}
function rg(e) {
  const {
    children: t,
    theme: n
  } = e, r = Jc(), o = N.useMemo(() => {
    const i = r === null ? n : ng(r, n);
    return i != null && (i[tg] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ E(Zc.Provider, {
    value: o,
    children: t
  });
}
const og = ["value"], ig = /* @__PURE__ */ N.createContext();
function lg(e) {
  let {
    value: t
  } = e, n = ai(e, og);
  return /* @__PURE__ */ E(ig.Provider, de({
    value: t ?? !0
  }, n));
}
const ug = /* @__PURE__ */ N.createContext(void 0);
function sg({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ E(ug.Provider, {
    value: e,
    children: t
  });
}
function ag(e) {
  const t = Wu(), n = Jm() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Gm(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const l = i.firstChild;
    if (o) {
      var u;
      if (l && (u = l.hasAttribute) != null && u.call(l, "data-mui-layer-order") && l.getAttribute("data-mui-layer-order") === n)
        return;
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", n), c.textContent = o, i.prepend(c);
    } else {
      var s;
      (s = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || s.remove();
    }
  }, [o, n]), o ? /* @__PURE__ */ E(Qm, {
    styles: o
  }) : null;
}
const la = {};
function ua(e, t, n, r = !1) {
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
function cg(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Wu(la), i = Jc() || la, l = ua(r, o, n), u = ua(r, i, n, !0), s = l.direction === "rtl", c = ag(l);
  return /* @__PURE__ */ E(rg, {
    theme: u,
    children: /* @__PURE__ */ E(jr.Provider, {
      value: l,
      children: /* @__PURE__ */ E(lg, {
        value: s,
        children: /* @__PURE__ */ A(sg, {
          value: l == null ? void 0 : l.components,
          children: [c, t]
        })
      })
    })
  });
}
const fg = ["theme"];
function dg(e) {
  let {
    theme: t
  } = e, n = ai(e, fg);
  const r = t[Bs];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = de({}, r, {
    vars: null
  }) : t && !t.vars && (o = de({}, t, {
    vars: null
  }))), /* @__PURE__ */ E(cg, de({}, n, {
    themeId: r ? Bs : void 0,
    theme: o
  }));
}
var qc = { exports: {} }, Be = {}, ef = { exports: {} }, tf = {};
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
  function t(_, P) {
    var T = _.length;
    _.push(P);
    e:
      for (; 0 < T; ) {
        var D = T - 1 >>> 1, j = _[D];
        if (0 < o(j, P))
          _[D] = P, _[T] = j, T = D;
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
    var P = _[0], T = _.pop();
    if (T !== P) {
      _[0] = T;
      e:
        for (var D = 0, j = _.length, ht = j >>> 1; D < ht; ) {
          var Se = 2 * (D + 1) - 1, Xi = _[Se], Qt = Se + 1, br = _[Qt];
          if (0 > o(Xi, T))
            Qt < j && 0 > o(br, Xi) ? (_[D] = br, _[Qt] = T, D = Qt) : (_[D] = Xi, _[Se] = T, D = Se);
          else if (Qt < j && 0 > o(br, T))
            _[D] = br, _[Qt] = T, D = Qt;
          else
            break e;
        }
    }
    return P;
  }
  function o(_, P) {
    var T = _.sortIndex - P.sortIndex;
    return T !== 0 ? T : _.id - P.id;
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
  var s = [], c = [], m = 1, f = null, h = 3, w = !1, g = !1, v = !1, R = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null)
        r(c);
      else if (P.startTime <= _)
        r(c), P.sortIndex = P.expirationTime, t(s, P);
      else
        break;
      P = n(c);
    }
  }
  function k(_) {
    if (v = !1, p(_), !g)
      if (n(s) !== null)
        g = !0, pt(y);
      else {
        var P = n(c);
        P !== null && I(k, P.startTime - _);
      }
  }
  function y(_, P) {
    g = !1, v && (v = !1, d(L), L = -1), w = !0;
    var T = h;
    try {
      for (p(P), f = n(s); f !== null && (!(f.expirationTime > P) || _ && !F()); ) {
        var D = f.callback;
        if (typeof D == "function") {
          f.callback = null, h = f.priorityLevel;
          var j = D(f.expirationTime <= P);
          P = e.unstable_now(), typeof j == "function" ? f.callback = j : f === n(s) && r(s), p(P);
        } else
          r(s);
        f = n(s);
      }
      if (f !== null)
        var ht = !0;
      else {
        var Se = n(c);
        Se !== null && I(k, Se.startTime - P), ht = !1;
      }
      return ht;
    } finally {
      f = null, h = T, w = !1;
    }
  }
  var x = !1, S = null, L = -1, $ = 5, z = -1;
  function F() {
    return !(e.unstable_now() - z < $);
  }
  function Oe() {
    if (S !== null) {
      var _ = e.unstable_now();
      z = _;
      var P = !0;
      try {
        P = S(!0, _);
      } finally {
        P ? ze() : (x = !1, S = null);
      }
    } else
      x = !1;
  }
  var ze;
  if (typeof a == "function")
    ze = function() {
      a(Oe);
    };
  else if (typeof MessageChannel < "u") {
    var ot = new MessageChannel(), bt = ot.port2;
    ot.port1.onmessage = Oe, ze = function() {
      bt.postMessage(null);
    };
  } else
    ze = function() {
      R(Oe, 0);
    };
  function pt(_) {
    S = _, x || (x = !0, ze());
  }
  function I(_, P) {
    L = R(function() {
      _(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    g || w || (g = !0, pt(y));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = h;
    }
    var T = h;
    h = P;
    try {
      return _();
    } finally {
      h = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, P) {
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
    var T = h;
    h = _;
    try {
      return P();
    } finally {
      h = T;
    }
  }, e.unstable_scheduleCallback = function(_, P, T) {
    var D = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? D + T : D) : T = D, _) {
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
    return j = T + j, _ = { id: m++, callback: P, priorityLevel: _, startTime: T, expirationTime: j, sortIndex: -1 }, T > D ? (_.sortIndex = T, t(c, _), n(s) === null && _ === n(c) && (v ? (d(L), L = -1) : v = !0, I(k, T - D))) : (_.sortIndex = j, t(s, _), g || w || (g = !0, pt(y))), _;
  }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(_) {
    var P = h;
    return function() {
      var T = h;
      h = P;
      try {
        return _.apply(this, arguments);
      } finally {
        h = T;
      }
    };
  };
})(tf);
ef.exports = tf;
var pg = ef.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hg = N, je = pg;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var nf = /* @__PURE__ */ new Set(), Sr = {};
function sn(e, t) {
  An(e, t), An(e + "Capture", t);
}
function An(e, t) {
  for (Sr[e] = t, e = 0; e < t.length; e++)
    nf.add(t[e]);
}
var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Rl = Object.prototype.hasOwnProperty, mg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, sa = {}, aa = {};
function gg(e) {
  return Rl.call(aa, e) ? !0 : Rl.call(sa, e) ? !1 : mg.test(e) ? aa[e] = !0 : (sa[e] = !0, !1);
}
function yg(e, t, n, r) {
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
function vg(e, t, n, r) {
  if (t === null || typeof t > "u" || yg(e, t, n, r))
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
var Vu = /[\-:]([a-z])/g;
function Ku(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Vu,
    Ku
  );
  he[t] = new Ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Vu, Ku);
  he[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Vu, Ku);
  he[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  he[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  he[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yu(e, t, n, r) {
  var o = he.hasOwnProperty(t) ? he[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vg(t, n, o, r) && (n = null), r || o === null ? gg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Gr = Symbol.for("react.element"), pn = Symbol.for("react.portal"), hn = Symbol.for("react.fragment"), bu = Symbol.for("react.strict_mode"), Ll = Symbol.for("react.profiler"), rf = Symbol.for("react.provider"), of = Symbol.for("react.context"), Qu = Symbol.for("react.forward_ref"), Ol = Symbol.for("react.suspense"), zl = Symbol.for("react.suspense_list"), Xu = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), lf = Symbol.for("react.offscreen"), ca = Symbol.iterator;
function Yn(e) {
  return e === null || typeof e != "object" ? null : (e = ca && e[ca] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Z = Object.assign, el;
function tr(e) {
  if (el === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      el = t && t[1] || "";
    }
  return `
` + el + e;
}
var tl = !1;
function nl(e, t) {
  if (!e || tl)
    return "";
  tl = !0;
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
    tl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? tr(e) : "";
}
function wg(e) {
  switch (e.tag) {
    case 5:
      return tr(e.type);
    case 16:
      return tr("Lazy");
    case 13:
      return tr("Suspense");
    case 19:
      return tr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = nl(e.type, !1), e;
    case 11:
      return e = nl(e.type.render, !1), e;
    case 1:
      return e = nl(e.type, !0), e;
    default:
      return "";
  }
}
function Dl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case hn:
      return "Fragment";
    case pn:
      return "Portal";
    case Ll:
      return "Profiler";
    case bu:
      return "StrictMode";
    case Ol:
      return "Suspense";
    case zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case of:
        return (e.displayName || "Context") + ".Consumer";
      case rf:
        return (e._context.displayName || "Context") + ".Provider";
      case Qu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Xu:
        return t = e.displayName || null, t !== null ? t : Dl(e.type) || "Memo";
      case Tt:
        t = e._payload, e = e._init;
        try {
          return Dl(e(t));
        } catch {
        }
    }
  return null;
}
function Sg(e) {
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
      return Dl(t);
    case 8:
      return t === bu ? "StrictMode" : "Mode";
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
function Ht(e) {
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
function uf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function kg(e) {
  var t = uf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Zr(e) {
  e._valueTracker || (e._valueTracker = kg(e));
}
function sf(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = uf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Al(e, t) {
  var n = t.checked;
  return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function fa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function af(e, t) {
  t = t.checked, t != null && Yu(e, "checked", t, !1);
}
function Il(e, t) {
  af(e, t);
  var n = Ht(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ml(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ml(e, t.type, Ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function da(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ml(e, t, n) {
  (t !== "number" || Fo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var nr = Array.isArray;
function Tn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ht(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function $l(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(C(91));
  return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function pa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(C(92));
      if (nr(n)) {
        if (1 < n.length)
          throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function cf(e, t) {
  var n = Ht(t.value), r = Ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ha(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ff(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ff(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Jr, df = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Jr = Jr || document.createElement("div"), Jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Jr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var sr = {
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
}, xg = ["Webkit", "ms", "Moz", "O"];
Object.keys(sr).forEach(function(e) {
  xg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), sr[t] = sr[e];
  });
});
function pf(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || sr.hasOwnProperty(e) && sr[e] ? ("" + t).trim() : t + "px";
}
function hf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = pf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Eg = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function jl(e, t) {
  if (t) {
    if (Eg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ul(e, t) {
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
var Bl = null;
function Gu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hl = null, Nn = null, Rn = null;
function ma(e) {
  if (e = Vr(e)) {
    if (typeof Hl != "function")
      throw Error(C(280));
    var t = e.stateNode;
    t && (t = Ai(t), Hl(e.stateNode, e.type, t));
  }
}
function mf(e) {
  Nn ? Rn ? Rn.push(e) : Rn = [e] : Nn = e;
}
function gf() {
  if (Nn) {
    var e = Nn, t = Rn;
    if (Rn = Nn = null, ma(e), t)
      for (e = 0; e < t.length; e++)
        ma(t[e]);
  }
}
function yf(e, t) {
  return e(t);
}
function vf() {
}
var rl = !1;
function wf(e, t, n) {
  if (rl)
    return e(t, n);
  rl = !0;
  try {
    return yf(e, t, n);
  } finally {
    rl = !1, (Nn !== null || Rn !== null) && (vf(), gf());
  }
}
function xr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Ai(n);
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
var Wl = !1;
if (kt)
  try {
    var bn = {};
    Object.defineProperty(bn, "passive", { get: function() {
      Wl = !0;
    } }), window.addEventListener("test", bn, bn), window.removeEventListener("test", bn, bn);
  } catch {
    Wl = !1;
  }
function Cg(e, t, n, r, o, i, l, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var ar = !1, jo = null, Uo = !1, Vl = null, _g = { onError: function(e) {
  ar = !0, jo = e;
} };
function Pg(e, t, n, r, o, i, l, u, s) {
  ar = !1, jo = null, Cg.apply(_g, arguments);
}
function Tg(e, t, n, r, o, i, l, u, s) {
  if (Pg.apply(this, arguments), ar) {
    if (ar) {
      var c = jo;
      ar = !1, jo = null;
    } else
      throw Error(C(198));
    Uo || (Uo = !0, Vl = c);
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
function Sf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function ga(e) {
  if (an(e) !== e)
    throw Error(C(188));
}
function Ng(e) {
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
          return ga(o), e;
        if (i === r)
          return ga(o), t;
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
function kf(e) {
  return e = Ng(e), e !== null ? xf(e) : null;
}
function xf(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = xf(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Ef = je.unstable_scheduleCallback, ya = je.unstable_cancelCallback, Rg = je.unstable_shouldYield, Lg = je.unstable_requestPaint, te = je.unstable_now, Og = je.unstable_getCurrentPriorityLevel, Zu = je.unstable_ImmediatePriority, Cf = je.unstable_UserBlockingPriority, Bo = je.unstable_NormalPriority, zg = je.unstable_LowPriority, _f = je.unstable_IdlePriority, Li = null, ft = null;
function Dg(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(Li, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var tt = Math.clz32 ? Math.clz32 : Mg, Ag = Math.log, Ig = Math.LN2;
function Mg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ag(e) / Ig | 0) | 0;
}
var qr = 64, eo = 4194304;
function rr(e) {
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
function Ho(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = rr(u) : (i &= l, i !== 0 && (r = rr(i)));
  } else
    l = n & ~o, l !== 0 ? r = rr(l) : i !== 0 && (r = rr(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - tt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function $g(e, t) {
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
function Fg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - tt(i), u = 1 << l, s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = $g(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Kl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Pf() {
  var e = qr;
  return qr <<= 1, !(qr & 4194240) && (qr = 64), e;
}
function ol(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n;
}
function jg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - tt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Ju(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var W = 0;
function Tf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Nf, qu, Rf, Lf, Of, Yl = !1, to = [], At = null, It = null, Mt = null, Er = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), Rt = [], Ug = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function va(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      At = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      Mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Er.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Cr.delete(t.pointerId);
  }
}
function Qn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Vr(t), t !== null && qu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Bg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return At = Qn(At, e, t, n, r, o), !0;
    case "dragenter":
      return It = Qn(It, e, t, n, r, o), !0;
    case "mouseover":
      return Mt = Qn(Mt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Er.set(i, Qn(Er.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Cr.set(i, Qn(Cr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function zf(e) {
  var t = Zt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Sf(n), t !== null) {
          e.blockedOn = t, Of(e.priority, function() {
            Rf(n);
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
function _o(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Bl = r, n.target.dispatchEvent(r), Bl = null;
    } else
      return t = Vr(n), t !== null && qu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function wa(e, t, n) {
  _o(e) && n.delete(t);
}
function Hg() {
  Yl = !1, At !== null && _o(At) && (At = null), It !== null && _o(It) && (It = null), Mt !== null && _o(Mt) && (Mt = null), Er.forEach(wa), Cr.forEach(wa);
}
function Xn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Yl || (Yl = !0, je.unstable_scheduleCallback(je.unstable_NormalPriority, Hg)));
}
function _r(e) {
  function t(o) {
    return Xn(o, e);
  }
  if (0 < to.length) {
    Xn(to[0], e);
    for (var n = 1; n < to.length; n++) {
      var r = to[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (At !== null && Xn(At, e), It !== null && Xn(It, e), Mt !== null && Xn(Mt, e), Er.forEach(t), Cr.forEach(t), n = 0; n < Rt.length; n++)
    r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null); )
    zf(n), n.blockedOn === null && Rt.shift();
}
var Ln = _t.ReactCurrentBatchConfig, Wo = !0;
function Wg(e, t, n, r) {
  var o = W, i = Ln.transition;
  Ln.transition = null;
  try {
    W = 1, es(e, t, n, r);
  } finally {
    W = o, Ln.transition = i;
  }
}
function Vg(e, t, n, r) {
  var o = W, i = Ln.transition;
  Ln.transition = null;
  try {
    W = 4, es(e, t, n, r);
  } finally {
    W = o, Ln.transition = i;
  }
}
function es(e, t, n, r) {
  if (Wo) {
    var o = bl(e, t, n, r);
    if (o === null)
      hl(e, t, r, Vo, n), va(e, r);
    else if (Bg(o, e, t, n, r))
      r.stopPropagation();
    else if (va(e, r), t & 4 && -1 < Ug.indexOf(e)) {
      for (; o !== null; ) {
        var i = Vr(o);
        if (i !== null && Nf(i), i = bl(e, t, n, r), i === null && hl(e, t, r, Vo, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      hl(e, t, r, null, n);
  }
}
var Vo = null;
function bl(e, t, n, r) {
  if (Vo = null, e = Gu(r), e = Zt(e), e !== null)
    if (t = an(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Sf(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Vo = e, null;
}
function Df(e) {
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
      switch (Og()) {
        case Zu:
          return 1;
        case Cf:
          return 4;
        case Bo:
        case zg:
          return 16;
        case _f:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ot = null, ts = null, Po = null;
function Af() {
  if (Po)
    return Po;
  var e, t = ts, n = t.length, r, o = "value" in Ot ? Ot.value : Ot.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return Po = o.slice(e, 1 < r ? 1 - r : void 0);
}
function To(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function no() {
  return !0;
}
function Sa() {
  return !1;
}
function He(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? no : Sa, this.isPropagationStopped = Sa, this;
  }
  return Z(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = no);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = no);
  }, persist: function() {
  }, isPersistent: no }), t;
}
var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ns = He(Wn), Wr = Z({}, Wn, { view: 0, detail: 0 }), Kg = He(Wr), il, ll, Gn, Oi = Z({}, Wr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Gn && (Gn && e.type === "mousemove" ? (il = e.screenX - Gn.screenX, ll = e.screenY - Gn.screenY) : ll = il = 0, Gn = e), il);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ll;
} }), ka = He(Oi), Yg = Z({}, Oi, { dataTransfer: 0 }), bg = He(Yg), Qg = Z({}, Wr, { relatedTarget: 0 }), ul = He(Qg), Xg = Z({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gg = He(Xg), Zg = Z({}, Wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Jg = He(Zg), qg = Z({}, Wn, { data: 0 }), xa = He(qg), ey = {
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
}, ty = {
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
}, ny = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ry(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ny[e]) ? !!t[e] : !1;
}
function rs() {
  return ry;
}
var oy = Z({}, Wr, { key: function(e) {
  if (e.key) {
    var t = ey[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = To(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ty[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rs, charCode: function(e) {
  return e.type === "keypress" ? To(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? To(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), iy = He(oy), ly = Z({}, Oi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ea = He(ly), uy = Z({}, Wr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rs }), sy = He(uy), ay = Z({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cy = He(ay), fy = Z({}, Oi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), dy = He(fy), py = [9, 13, 27, 32], os = kt && "CompositionEvent" in window, cr = null;
kt && "documentMode" in document && (cr = document.documentMode);
var hy = kt && "TextEvent" in window && !cr, If = kt && (!os || cr && 8 < cr && 11 >= cr), Ca = String.fromCharCode(32), _a = !1;
function Mf(e, t) {
  switch (e) {
    case "keyup":
      return py.indexOf(t.keyCode) !== -1;
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
function $f(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mn = !1;
function my(e, t) {
  switch (e) {
    case "compositionend":
      return $f(t);
    case "keypress":
      return t.which !== 32 ? null : (_a = !0, Ca);
    case "textInput":
      return e = t.data, e === Ca && _a ? null : e;
    default:
      return null;
  }
}
function gy(e, t) {
  if (mn)
    return e === "compositionend" || !os && Mf(e, t) ? (e = Af(), Po = ts = Ot = null, mn = !1, e) : null;
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
      return If && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Pa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yy[e.type] : t === "textarea";
}
function Ff(e, t, n, r) {
  mf(r), t = Ko(t, "onChange"), 0 < t.length && (n = new ns("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var fr = null, Pr = null;
function vy(e) {
  Xf(e, 0);
}
function zi(e) {
  var t = vn(e);
  if (sf(t))
    return e;
}
function wy(e, t) {
  if (e === "change")
    return t;
}
var jf = !1;
if (kt) {
  var sl;
  if (kt) {
    var al = "oninput" in document;
    if (!al) {
      var Ta = document.createElement("div");
      Ta.setAttribute("oninput", "return;"), al = typeof Ta.oninput == "function";
    }
    sl = al;
  } else
    sl = !1;
  jf = sl && (!document.documentMode || 9 < document.documentMode);
}
function Na() {
  fr && (fr.detachEvent("onpropertychange", Uf), Pr = fr = null);
}
function Uf(e) {
  if (e.propertyName === "value" && zi(Pr)) {
    var t = [];
    Ff(t, Pr, e, Gu(e)), wf(vy, t);
  }
}
function Sy(e, t, n) {
  e === "focusin" ? (Na(), fr = t, Pr = n, fr.attachEvent("onpropertychange", Uf)) : e === "focusout" && Na();
}
function ky(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zi(Pr);
}
function xy(e, t) {
  if (e === "click")
    return zi(t);
}
function Ey(e, t) {
  if (e === "input" || e === "change")
    return zi(t);
}
function Cy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var rt = typeof Object.is == "function" ? Object.is : Cy;
function Tr(e, t) {
  if (rt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Rl.call(t, o) || !rt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Ra(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function La(e, t) {
  var n = Ra(e);
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
    n = Ra(n);
  }
}
function Bf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Hf() {
  for (var e = window, t = Fo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Fo(e.document);
  }
  return t;
}
function is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function _y(e) {
  var t = Hf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Bf(n.ownerDocument.documentElement, n)) {
    if (r !== null && is(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = La(n, i);
        var l = La(
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
var Py = kt && "documentMode" in document && 11 >= document.documentMode, gn = null, Ql = null, dr = null, Xl = !1;
function Oa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xl || gn == null || gn !== Fo(r) || (r = gn, "selectionStart" in r && is(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), dr && Tr(dr, r) || (dr = r, r = Ko(Ql, "onSelect"), 0 < r.length && (t = new ns("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gn)));
}
function ro(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var yn = { animationend: ro("Animation", "AnimationEnd"), animationiteration: ro("Animation", "AnimationIteration"), animationstart: ro("Animation", "AnimationStart"), transitionend: ro("Transition", "TransitionEnd") }, cl = {}, Wf = {};
kt && (Wf = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
function Di(e) {
  if (cl[e])
    return cl[e];
  if (!yn[e])
    return e;
  var t = yn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Wf)
      return cl[e] = t[n];
  return e;
}
var Vf = Di("animationend"), Kf = Di("animationiteration"), Yf = Di("animationstart"), bf = Di("transitionend"), Qf = /* @__PURE__ */ new Map(), za = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vt(e, t) {
  Qf.set(e, t), sn(t, [e]);
}
for (var fl = 0; fl < za.length; fl++) {
  var dl = za[fl], Ty = dl.toLowerCase(), Ny = dl[0].toUpperCase() + dl.slice(1);
  Vt(Ty, "on" + Ny);
}
Vt(Vf, "onAnimationEnd");
Vt(Kf, "onAnimationIteration");
Vt(Yf, "onAnimationStart");
Vt("dblclick", "onDoubleClick");
Vt("focusin", "onFocus");
Vt("focusout", "onBlur");
Vt(bf, "onTransitionEnd");
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
var or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(or));
function Da(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Tg(r, t, void 0, e), e.currentTarget = null;
}
function Xf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l], s = u.instance, c = u.currentTarget;
          if (u = u.listener, s !== i && o.isPropagationStopped())
            break e;
          Da(o, u, c), i = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (u = r[l], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped())
            break e;
          Da(o, u, c), i = s;
        }
    }
  }
  if (Uo)
    throw e = Vl, Uo = !1, Vl = null, e;
}
function Y(e, t) {
  var n = t[eu];
  n === void 0 && (n = t[eu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Gf(t, e, 2, !1), n.add(r));
}
function pl(e, t, n) {
  var r = 0;
  t && (r |= 4), Gf(n, e, r, t);
}
var oo = "_reactListening" + Math.random().toString(36).slice(2);
function Nr(e) {
  if (!e[oo]) {
    e[oo] = !0, nf.forEach(function(n) {
      n !== "selectionchange" && (Ry.has(n) || pl(n, !1, e), pl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oo] || (t[oo] = !0, pl("selectionchange", !1, t));
  }
}
function Gf(e, t, n, r) {
  switch (Df(t)) {
    case 1:
      var o = Wg;
      break;
    case 4:
      o = Vg;
      break;
    default:
      o = es;
  }
  n = o.bind(null, t, n, e), o = void 0, !Wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function hl(e, t, n, r, o) {
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
  wf(function() {
    var c = i, m = Gu(n), f = [];
    e: {
      var h = Qf.get(e);
      if (h !== void 0) {
        var w = ns, g = e;
        switch (e) {
          case "keypress":
            if (To(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            w = iy;
            break;
          case "focusin":
            g = "focus", w = ul;
            break;
          case "focusout":
            g = "blur", w = ul;
            break;
          case "beforeblur":
          case "afterblur":
            w = ul;
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
            w = ka;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = bg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = sy;
            break;
          case Vf:
          case Kf:
          case Yf:
            w = Gg;
            break;
          case bf:
            w = cy;
            break;
          case "scroll":
            w = Kg;
            break;
          case "wheel":
            w = dy;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Jg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ea;
        }
        var v = (t & 4) !== 0, R = !v && e === "scroll", d = v ? h !== null ? h + "Capture" : null : h;
        v = [];
        for (var a = c, p; a !== null; ) {
          p = a;
          var k = p.stateNode;
          if (p.tag === 5 && k !== null && (p = k, d !== null && (k = xr(a, d), k != null && v.push(Rr(a, k, p)))), R)
            break;
          a = a.return;
        }
        0 < v.length && (h = new w(h, g, null, n, m), f.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", h && n !== Bl && (g = n.relatedTarget || n.fromElement) && (Zt(g) || g[xt]))
          break e;
        if ((w || h) && (h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window, w ? (g = n.relatedTarget || n.toElement, w = c, g = g ? Zt(g) : null, g !== null && (R = an(g), g !== R || g.tag !== 5 && g.tag !== 6) && (g = null)) : (w = null, g = c), w !== g)) {
          if (v = ka, k = "onMouseLeave", d = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (v = Ea, k = "onPointerLeave", d = "onPointerEnter", a = "pointer"), R = w == null ? h : vn(w), p = g == null ? h : vn(g), h = new v(k, a + "leave", w, n, m), h.target = R, h.relatedTarget = p, k = null, Zt(m) === c && (v = new v(d, a + "enter", g, n, m), v.target = p, v.relatedTarget = R, k = v), R = k, w && g)
            t: {
              for (v = w, d = g, a = 0, p = v; p; p = fn(p))
                a++;
              for (p = 0, k = d; k; k = fn(k))
                p++;
              for (; 0 < a - p; )
                v = fn(v), a--;
              for (; 0 < p - a; )
                d = fn(d), p--;
              for (; a--; ) {
                if (v === d || d !== null && v === d.alternate)
                  break t;
                v = fn(v), d = fn(d);
              }
              v = null;
            }
          else
            v = null;
          w !== null && Aa(f, h, w, v, !1), g !== null && R !== null && Aa(f, R, g, v, !0);
        }
      }
      e: {
        if (h = c ? vn(c) : window, w = h.nodeName && h.nodeName.toLowerCase(), w === "select" || w === "input" && h.type === "file")
          var y = wy;
        else if (Pa(h))
          if (jf)
            y = Ey;
          else {
            y = ky;
            var x = Sy;
          }
        else
          (w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (y = xy);
        if (y && (y = y(e, c))) {
          Ff(f, y, n, m);
          break e;
        }
        x && x(e, h, c), e === "focusout" && (x = h._wrapperState) && x.controlled && h.type === "number" && Ml(h, "number", h.value);
      }
      switch (x = c ? vn(c) : window, e) {
        case "focusin":
          (Pa(x) || x.contentEditable === "true") && (gn = x, Ql = c, dr = null);
          break;
        case "focusout":
          dr = Ql = gn = null;
          break;
        case "mousedown":
          Xl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Xl = !1, Oa(f, n, m);
          break;
        case "selectionchange":
          if (Py)
            break;
        case "keydown":
        case "keyup":
          Oa(f, n, m);
      }
      var S;
      if (os)
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
        mn ? Mf(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (If && n.locale !== "ko" && (mn || L !== "onCompositionStart" ? L === "onCompositionEnd" && mn && (S = Af()) : (Ot = m, ts = "value" in Ot ? Ot.value : Ot.textContent, mn = !0)), x = Ko(c, L), 0 < x.length && (L = new xa(L, e, null, n, m), f.push({ event: L, listeners: x }), S ? L.data = S : (S = $f(n), S !== null && (L.data = S)))), (S = hy ? my(e, n) : gy(e, n)) && (c = Ko(c, "onBeforeInput"), 0 < c.length && (m = new xa("onBeforeInput", "beforeinput", null, n, m), f.push({ event: m, listeners: c }), m.data = S));
    }
    Xf(f, t);
  });
}
function Rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ko(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = xr(e, n), i != null && r.unshift(Rr(e, i, o)), i = xr(e, t), i != null && r.push(Rr(e, i, o))), e = e.return;
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
function Aa(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && c !== null && (u = c, o ? (s = xr(n, i), s != null && l.unshift(Rr(n, s, u))) : o || (s = xr(n, i), s != null && l.push(Rr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ly = /\r\n?/g, Oy = /\u0000|\uFFFD/g;
function Ia(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ly, `
`).replace(Oy, "");
}
function io(e, t, n) {
  if (t = Ia(t), Ia(e) !== t && n)
    throw Error(C(425));
}
function Yo() {
}
var Gl = null, Zl = null;
function Jl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ql = typeof setTimeout == "function" ? setTimeout : void 0, zy = typeof clearTimeout == "function" ? clearTimeout : void 0, Ma = typeof Promise == "function" ? Promise : void 0, Dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ma < "u" ? function(e) {
  return Ma.resolve(null).then(e).catch(Ay);
} : ql;
function Ay(e) {
  setTimeout(function() {
    throw e;
  });
}
function ml(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), _r(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  _r(t);
}
function $t(e) {
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
function $a(e) {
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
var Vn = Math.random().toString(36).slice(2), at = "__reactFiber$" + Vn, Lr = "__reactProps$" + Vn, xt = "__reactContainer$" + Vn, eu = "__reactEvents$" + Vn, Iy = "__reactListeners$" + Vn, My = "__reactHandles$" + Vn;
function Zt(e) {
  var t = e[at];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[xt] || n[at]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = $a(e); e !== null; ) {
          if (n = e[at])
            return n;
          e = $a(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Vr(e) {
  return e = e[at] || e[xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function vn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(C(33));
}
function Ai(e) {
  return e[Lr] || null;
}
var tu = [], wn = -1;
function Kt(e) {
  return { current: e };
}
function b(e) {
  0 > wn || (e.current = tu[wn], tu[wn] = null, wn--);
}
function K(e, t) {
  wn++, tu[wn] = e.current, e.current = t;
}
var Wt = {}, we = Kt(Wt), Te = Kt(!1), nn = Wt;
function In(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function bo() {
  b(Te), b(we);
}
function Fa(e, t, n) {
  if (we.current !== Wt)
    throw Error(C(168));
  K(we, t), K(Te, n);
}
function Zf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(C(108, Sg(e) || "Unknown", o));
  return Z({}, n, r);
}
function Qo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt, nn = we.current, K(we, e), K(Te, Te.current), !0;
}
function ja(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(C(169));
  n ? (e = Zf(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, b(Te), b(we), K(we, e)) : b(Te), K(Te, n);
}
var gt = null, Ii = !1, gl = !1;
function Jf(e) {
  gt === null ? gt = [e] : gt.push(e);
}
function $y(e) {
  Ii = !0, Jf(e);
}
function Yt() {
  if (!gl && gt !== null) {
    gl = !0;
    var e = 0, t = W;
    try {
      var n = gt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      gt = null, Ii = !1;
    } catch (o) {
      throw gt !== null && (gt = gt.slice(e + 1)), Ef(Zu, Yt), o;
    } finally {
      W = t, gl = !1;
    }
  }
  return null;
}
var Sn = [], kn = 0, Xo = null, Go = 0, Ve = [], Ke = 0, rn = null, yt = 1, vt = "";
function Xt(e, t) {
  Sn[kn++] = Go, Sn[kn++] = Xo, Xo = e, Go = t;
}
function qf(e, t, n) {
  Ve[Ke++] = yt, Ve[Ke++] = vt, Ve[Ke++] = rn, rn = e;
  var r = yt;
  e = vt;
  var o = 32 - tt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - tt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, yt = 1 << 32 - tt(t) + o | n << o | r, vt = i + e;
  } else
    yt = 1 << i | n << o | r, vt = e;
}
function ls(e) {
  e.return !== null && (Xt(e, 1), qf(e, 1, 0));
}
function us(e) {
  for (; e === Xo; )
    Xo = Sn[--kn], Sn[kn] = null, Go = Sn[--kn], Sn[kn] = null;
  for (; e === rn; )
    rn = Ve[--Ke], Ve[Ke] = null, vt = Ve[--Ke], Ve[Ke] = null, yt = Ve[--Ke], Ve[Ke] = null;
}
var Fe = null, Me = null, Q = !1, et = null;
function ed(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ua(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fe = e, Me = $t(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fe = e, Me = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: yt, overflow: vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fe = e, Me = null, !0) : !1;
    default:
      return !1;
  }
}
function nu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ru(e) {
  if (Q) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Ua(e, t)) {
        if (nu(e))
          throw Error(C(418));
        t = $t(n.nextSibling);
        var r = Fe;
        t && Ua(e, t) ? ed(r, n) : (e.flags = e.flags & -4097 | 2, Q = !1, Fe = e);
      }
    } else {
      if (nu(e))
        throw Error(C(418));
      e.flags = e.flags & -4097 | 2, Q = !1, Fe = e;
    }
  }
}
function Ba(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function lo(e) {
  if (e !== Fe)
    return !1;
  if (!Q)
    return Ba(e), Q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Jl(e.type, e.memoizedProps)), t && (t = Me)) {
    if (nu(e))
      throw td(), Error(C(418));
    for (; t; )
      ed(e, t), t = $t(t.nextSibling);
  }
  if (Ba(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = $t(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else
    Me = Fe ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function td() {
  for (var e = Me; e; )
    e = $t(e.nextSibling);
}
function Mn() {
  Me = Fe = null, Q = !1;
}
function ss(e) {
  et === null ? et = [e] : et.push(e);
}
var Fy = _t.ReactCurrentBatchConfig;
function Zn(e, t, n) {
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
function uo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ha(e) {
  var t = e._init;
  return t(e._payload);
}
function nd(e) {
  function t(d, a) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [a], d.flags |= 16) : p.push(a);
    }
  }
  function n(d, a) {
    if (!e)
      return null;
    for (; a !== null; )
      t(d, a), a = a.sibling;
    return null;
  }
  function r(d, a) {
    for (d = /* @__PURE__ */ new Map(); a !== null; )
      a.key !== null ? d.set(a.key, a) : d.set(a.index, a), a = a.sibling;
    return d;
  }
  function o(d, a) {
    return d = Bt(d, a), d.index = 0, d.sibling = null, d;
  }
  function i(d, a, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < a ? (d.flags |= 2, a) : p) : (d.flags |= 2, a)) : (d.flags |= 1048576, a);
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, a, p, k) {
    return a === null || a.tag !== 6 ? (a = El(p, d.mode, k), a.return = d, a) : (a = o(a, p), a.return = d, a);
  }
  function s(d, a, p, k) {
    var y = p.type;
    return y === hn ? m(d, a, p.props.children, k, p.key) : a !== null && (a.elementType === y || typeof y == "object" && y !== null && y.$$typeof === Tt && Ha(y) === a.type) ? (k = o(a, p.props), k.ref = Zn(d, a, p), k.return = d, k) : (k = Ao(p.type, p.key, p.props, null, d.mode, k), k.ref = Zn(d, a, p), k.return = d, k);
  }
  function c(d, a, p, k) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== p.containerInfo || a.stateNode.implementation !== p.implementation ? (a = Cl(p, d.mode, k), a.return = d, a) : (a = o(a, p.children || []), a.return = d, a);
  }
  function m(d, a, p, k, y) {
    return a === null || a.tag !== 7 ? (a = tn(p, d.mode, k, y), a.return = d, a) : (a = o(a, p), a.return = d, a);
  }
  function f(d, a, p) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = El("" + a, d.mode, p), a.return = d, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case Gr:
          return p = Ao(a.type, a.key, a.props, null, d.mode, p), p.ref = Zn(d, null, a), p.return = d, p;
        case pn:
          return a = Cl(a, d.mode, p), a.return = d, a;
        case Tt:
          var k = a._init;
          return f(d, k(a._payload), p);
      }
      if (nr(a) || Yn(a))
        return a = tn(a, d.mode, p, null), a.return = d, a;
      uo(d, a);
    }
    return null;
  }
  function h(d, a, p, k) {
    var y = a !== null ? a.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return y !== null ? null : u(d, a, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Gr:
          return p.key === y ? s(d, a, p, k) : null;
        case pn:
          return p.key === y ? c(d, a, p, k) : null;
        case Tt:
          return y = p._init, h(
            d,
            a,
            y(p._payload),
            k
          );
      }
      if (nr(p) || Yn(p))
        return y !== null ? null : m(d, a, p, k, null);
      uo(d, p);
    }
    return null;
  }
  function w(d, a, p, k, y) {
    if (typeof k == "string" && k !== "" || typeof k == "number")
      return d = d.get(p) || null, u(a, d, "" + k, y);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Gr:
          return d = d.get(k.key === null ? p : k.key) || null, s(a, d, k, y);
        case pn:
          return d = d.get(k.key === null ? p : k.key) || null, c(a, d, k, y);
        case Tt:
          var x = k._init;
          return w(d, a, p, x(k._payload), y);
      }
      if (nr(k) || Yn(k))
        return d = d.get(p) || null, m(a, d, k, y, null);
      uo(a, k);
    }
    return null;
  }
  function g(d, a, p, k) {
    for (var y = null, x = null, S = a, L = a = 0, $ = null; S !== null && L < p.length; L++) {
      S.index > L ? ($ = S, S = null) : $ = S.sibling;
      var z = h(d, S, p[L], k);
      if (z === null) {
        S === null && (S = $);
        break;
      }
      e && S && z.alternate === null && t(d, S), a = i(z, a, L), x === null ? y = z : x.sibling = z, x = z, S = $;
    }
    if (L === p.length)
      return n(d, S), Q && Xt(d, L), y;
    if (S === null) {
      for (; L < p.length; L++)
        S = f(d, p[L], k), S !== null && (a = i(S, a, L), x === null ? y = S : x.sibling = S, x = S);
      return Q && Xt(d, L), y;
    }
    for (S = r(d, S); L < p.length; L++)
      $ = w(S, d, L, p[L], k), $ !== null && (e && $.alternate !== null && S.delete($.key === null ? L : $.key), a = i($, a, L), x === null ? y = $ : x.sibling = $, x = $);
    return e && S.forEach(function(F) {
      return t(d, F);
    }), Q && Xt(d, L), y;
  }
  function v(d, a, p, k) {
    var y = Yn(p);
    if (typeof y != "function")
      throw Error(C(150));
    if (p = y.call(p), p == null)
      throw Error(C(151));
    for (var x = y = null, S = a, L = a = 0, $ = null, z = p.next(); S !== null && !z.done; L++, z = p.next()) {
      S.index > L ? ($ = S, S = null) : $ = S.sibling;
      var F = h(d, S, z.value, k);
      if (F === null) {
        S === null && (S = $);
        break;
      }
      e && S && F.alternate === null && t(d, S), a = i(F, a, L), x === null ? y = F : x.sibling = F, x = F, S = $;
    }
    if (z.done)
      return n(
        d,
        S
      ), Q && Xt(d, L), y;
    if (S === null) {
      for (; !z.done; L++, z = p.next())
        z = f(d, z.value, k), z !== null && (a = i(z, a, L), x === null ? y = z : x.sibling = z, x = z);
      return Q && Xt(d, L), y;
    }
    for (S = r(d, S); !z.done; L++, z = p.next())
      z = w(S, d, L, z.value, k), z !== null && (e && z.alternate !== null && S.delete(z.key === null ? L : z.key), a = i(z, a, L), x === null ? y = z : x.sibling = z, x = z);
    return e && S.forEach(function(Oe) {
      return t(d, Oe);
    }), Q && Xt(d, L), y;
  }
  function R(d, a, p, k) {
    if (typeof p == "object" && p !== null && p.type === hn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Gr:
          e: {
            for (var y = p.key, x = a; x !== null; ) {
              if (x.key === y) {
                if (y = p.type, y === hn) {
                  if (x.tag === 7) {
                    n(d, x.sibling), a = o(x, p.props.children), a.return = d, d = a;
                    break e;
                  }
                } else if (x.elementType === y || typeof y == "object" && y !== null && y.$$typeof === Tt && Ha(y) === x.type) {
                  n(d, x.sibling), a = o(x, p.props), a.ref = Zn(d, x, p), a.return = d, d = a;
                  break e;
                }
                n(d, x);
                break;
              } else
                t(d, x);
              x = x.sibling;
            }
            p.type === hn ? (a = tn(p.props.children, d.mode, k, p.key), a.return = d, d = a) : (k = Ao(p.type, p.key, p.props, null, d.mode, k), k.ref = Zn(d, a, p), k.return = d, d = k);
          }
          return l(d);
        case pn:
          e: {
            for (x = p.key; a !== null; ) {
              if (a.key === x)
                if (a.tag === 4 && a.stateNode.containerInfo === p.containerInfo && a.stateNode.implementation === p.implementation) {
                  n(d, a.sibling), a = o(a, p.children || []), a.return = d, d = a;
                  break e;
                } else {
                  n(d, a);
                  break;
                }
              else
                t(d, a);
              a = a.sibling;
            }
            a = Cl(p, d.mode, k), a.return = d, d = a;
          }
          return l(d);
        case Tt:
          return x = p._init, R(d, a, x(p._payload), k);
      }
      if (nr(p))
        return g(d, a, p, k);
      if (Yn(p))
        return v(d, a, p, k);
      uo(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, a !== null && a.tag === 6 ? (n(d, a.sibling), a = o(a, p), a.return = d, d = a) : (n(d, a), a = El(p, d.mode, k), a.return = d, d = a), l(d)) : n(d, a);
  }
  return R;
}
var $n = nd(!0), rd = nd(!1), Zo = Kt(null), Jo = null, xn = null, as = null;
function cs() {
  as = xn = Jo = null;
}
function fs(e) {
  var t = Zo.current;
  b(Zo), e._currentValue = t;
}
function ou(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function On(e, t) {
  Jo = e, as = xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (as !== e)
    if (e = { context: e, memoizedValue: t, next: null }, xn === null) {
      if (Jo === null)
        throw Error(C(308));
      xn = e, Jo.dependencies = { lanes: 0, firstContext: e };
    } else
      xn = xn.next = e;
  return t;
}
var Jt = null;
function ds(e) {
  Jt === null ? Jt = [e] : Jt.push(e);
}
function od(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ds(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Et(e, r);
}
function Et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nt = !1;
function ps(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function id(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function wt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, U & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Et(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ds(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Et(e, n);
}
function No(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ju(e, n);
  }
}
function Wa(e, t) {
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
function qo(e, t, n, r) {
  var o = e.updateQueue;
  Nt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, l === null ? i = c : l.next = c, l = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== l && (u === null ? m.firstBaseUpdate = c : u.next = c, m.lastBaseUpdate = s));
  }
  if (i !== null) {
    var f = o.baseState;
    l = 0, m = c = s = null, u = i;
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
          var g = e, v = u;
          switch (h = t, w = n, v.tag) {
            case 1:
              if (g = v.payload, typeof g == "function") {
                f = g.call(w, f, h);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = v.payload, h = typeof g == "function" ? g.call(w, f, h) : g, h == null)
                break e;
              f = Z({}, f, h);
              break e;
            case 2:
              Nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [u] : h.push(u));
      } else
        w = { eventTime: w, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (c = m = w, s = f) : m = m.next = w, l |= h;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null)
          break;
        h = u, u = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
      }
    } while (1);
    if (m === null && (s = f), o.baseState = s, o.firstBaseUpdate = c, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    ln |= l, e.lanes = l, e.memoizedState = f;
  }
}
function Va(e, t, n) {
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
var Kr = {}, dt = Kt(Kr), Or = Kt(Kr), zr = Kt(Kr);
function qt(e) {
  if (e === Kr)
    throw Error(C(174));
  return e;
}
function hs(e, t) {
  switch (K(zr, t), K(Or, e), K(dt, Kr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fl(t, e);
  }
  b(dt), K(dt, t);
}
function Fn() {
  b(dt), b(Or), b(zr);
}
function ld(e) {
  qt(zr.current);
  var t = qt(dt.current), n = Fl(t, e.type);
  t !== n && (K(Or, e), K(dt, n));
}
function ms(e) {
  Or.current === e && (b(dt), b(Or));
}
var X = Kt(0);
function ei(e) {
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
var yl = [];
function gs() {
  for (var e = 0; e < yl.length; e++)
    yl[e]._workInProgressVersionPrimary = null;
  yl.length = 0;
}
var Ro = _t.ReactCurrentDispatcher, vl = _t.ReactCurrentBatchConfig, on = 0, G = null, ie = null, ue = null, ti = !1, pr = !1, Dr = 0, jy = 0;
function me() {
  throw Error(C(321));
}
function ys(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n]))
      return !1;
  return !0;
}
function vs(e, t, n, r, o, i) {
  if (on = i, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ro.current = e === null || e.memoizedState === null ? Wy : Vy, e = n(r, o), pr) {
    i = 0;
    do {
      if (pr = !1, Dr = 0, 25 <= i)
        throw Error(C(301));
      i += 1, ue = ie = null, t.updateQueue = null, Ro.current = Ky, e = n(r, o);
    } while (pr);
  }
  if (Ro.current = ni, t = ie !== null && ie.next !== null, on = 0, ue = ie = G = null, ti = !1, t)
    throw Error(C(300));
  return e;
}
function ws() {
  var e = Dr !== 0;
  return Dr = 0, e;
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
function Ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wl(e) {
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
    var u = l = null, s = null, c = i;
    do {
      var m = c.lane;
      if ((on & m) === m)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var f = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = f, l = r) : s = s.next = f, G.lanes |= m, ln |= m;
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? l = r : s.next = u, rt(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
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
function Sl(e) {
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
    rt(i, t.memoizedState) || (Pe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ud() {
}
function sd(e, t) {
  var n = G, r = Xe(), o = t(), i = !rt(r.memoizedState, o);
  if (i && (r.memoizedState = o, Pe = !0), r = r.queue, Ss(fd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ue !== null && ue.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ir(9, cd.bind(null, n, r, o, t), void 0, null), se === null)
      throw Error(C(349));
    on & 30 || ad(n, t, o);
  }
  return o;
}
function ad(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function cd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, dd(t) && pd(e);
}
function fd(e, t, n) {
  return n(function() {
    dd(t) && pd(e);
  });
}
function dd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function pd(e) {
  var t = Et(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function Ka(e) {
  var t = lt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ar, lastRenderedState: e }, t.queue = e, e = e.dispatch = Hy.bind(null, G, e), [t.memoizedState, e];
}
function Ir(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function hd() {
  return Xe().memoizedState;
}
function Lo(e, t, n, r) {
  var o = lt();
  G.flags |= e, o.memoizedState = Ir(1 | t, n, void 0, r === void 0 ? null : r);
}
function Mi(e, t, n, r) {
  var o = Xe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ie !== null) {
    var l = ie.memoizedState;
    if (i = l.destroy, r !== null && ys(r, l.deps)) {
      o.memoizedState = Ir(t, n, i, r);
      return;
    }
  }
  G.flags |= e, o.memoizedState = Ir(1 | t, n, i, r);
}
function Ya(e, t) {
  return Lo(8390656, 8, e, t);
}
function Ss(e, t) {
  return Mi(2048, 8, e, t);
}
function md(e, t) {
  return Mi(4, 2, e, t);
}
function gd(e, t) {
  return Mi(4, 4, e, t);
}
function yd(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function vd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Mi(4, 4, yd.bind(null, t, e), n);
}
function ks() {
}
function wd(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ys(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Sd(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ys(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function kd(e, t, n) {
  return on & 21 ? (rt(n, t) || (n = Pf(), G.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function Uy(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = vl.transition;
  vl.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, vl.transition = r;
  }
}
function xd() {
  return Xe().memoizedState;
}
function By(e, t, n) {
  var r = Ut(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ed(e))
    Cd(t, n);
  else if (n = od(e, t, n, r), n !== null) {
    var o = xe();
    nt(n, e, r, o), _d(n, t, r);
  }
}
function Hy(e, t, n) {
  var r = Ut(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ed(e))
    Cd(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, u = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = u, rt(u, l)) {
          var s = t.interleaved;
          s === null ? (o.next = o, ds(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = od(e, t, o, r), n !== null && (o = xe(), nt(n, e, r, o), _d(n, t, r));
  }
}
function Ed(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G;
}
function Cd(e, t) {
  pr = ti = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function _d(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ju(e, n);
  }
}
var ni = { readContext: Qe, useCallback: me, useContext: me, useEffect: me, useImperativeHandle: me, useInsertionEffect: me, useLayoutEffect: me, useMemo: me, useReducer: me, useRef: me, useState: me, useDebugValue: me, useDeferredValue: me, useTransition: me, useMutableSource: me, useSyncExternalStore: me, useId: me, unstable_isNewReconciler: !1 }, Wy = { readContext: Qe, useCallback: function(e, t) {
  return lt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: Ya, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Lo(
    4194308,
    4,
    yd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Lo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Lo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = lt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = lt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = By.bind(null, G, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = lt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ka, useDebugValue: ks, useDeferredValue: function(e) {
  return lt().memoizedState = e;
}, useTransition: function() {
  var e = Ka(!1), t = e[0];
  return e = Uy.bind(null, e[1]), lt().memoizedState = e, [t, e];
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
    on & 30 || ad(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Ya(fd.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Ir(9, cd.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = lt(), t = se.identifierPrefix;
  if (Q) {
    var n = vt, r = yt;
    n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = jy++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Vy = {
  readContext: Qe,
  useCallback: wd,
  useContext: Qe,
  useEffect: Ss,
  useImperativeHandle: vd,
  useInsertionEffect: md,
  useLayoutEffect: gd,
  useMemo: Sd,
  useReducer: wl,
  useRef: hd,
  useState: function() {
    return wl(Ar);
  },
  useDebugValue: ks,
  useDeferredValue: function(e) {
    var t = Xe();
    return kd(t, ie.memoizedState, e);
  },
  useTransition: function() {
    var e = wl(Ar)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: ud,
  useSyncExternalStore: sd,
  useId: xd,
  unstable_isNewReconciler: !1
}, Ky = { readContext: Qe, useCallback: wd, useContext: Qe, useEffect: Ss, useImperativeHandle: vd, useInsertionEffect: md, useLayoutEffect: gd, useMemo: Sd, useReducer: Sl, useRef: hd, useState: function() {
  return Sl(Ar);
}, useDebugValue: ks, useDeferredValue: function(e) {
  var t = Xe();
  return ie === null ? t.memoizedState = e : kd(t, ie.memoizedState, e);
}, useTransition: function() {
  var e = Sl(Ar)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: ud, useSyncExternalStore: sd, useId: xd, unstable_isNewReconciler: !1 };
function Je(e, t) {
  if (e && e.defaultProps) {
    t = Z({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function iu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $i = { isMounted: function(e) {
  return (e = e._reactInternals) ? an(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), o = Ut(e), i = wt(r, o);
  i.payload = t, n != null && (i.callback = n), t = Ft(e, i, o), t !== null && (nt(t, e, o, r), No(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), o = Ut(e), i = wt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ft(e, i, o), t !== null && (nt(t, e, o, r), No(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = xe(), r = Ut(e), o = wt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Ft(e, o, r), t !== null && (nt(t, e, r, n), No(t, e, r));
} };
function ba(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Tr(n, r) || !Tr(o, i) : !0;
}
function Pd(e, t, n) {
  var r = !1, o = Wt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Qe(i) : (o = Ne(t) ? nn : we.current, r = t.contextTypes, i = (r = r != null) ? In(e, o) : Wt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = $i, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Qa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && $i.enqueueReplaceState(t, t.state, null);
}
function lu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ps(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Qe(i) : (i = Ne(t) ? nn : we.current, o.context = In(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (iu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && $i.enqueueReplaceState(o, o.state, null), qo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t) {
  try {
    var n = "", r = t;
    do
      n += wg(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function uu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Yy = typeof WeakMap == "function" ? WeakMap : Map;
function Td(e, t, n) {
  n = wt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    oi || (oi = !0, yu = r), uu(e, t);
  }, n;
}
function Nd(e, t, n) {
  n = wt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      uu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    uu(e, t), typeof r != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Xa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yy();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = lv.bind(null, e, t, n), t.then(e, e));
}
function Ga(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Za(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wt(-1, 1), t.tag = 2, Ft(n, t, 1))), n.lanes |= 1), e);
}
var by = _t.ReactCurrentOwner, Pe = !1;
function ke(e, t, n, r) {
  t.child = e === null ? rd(t, null, n, r) : $n(t, e.child, n, r);
}
function Ja(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return On(t, o), r = vs(e, t, n, r, i, o), n = ws(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ct(e, t, o)) : (Q && n && ls(t), t.flags |= 1, ke(e, t, r, o), t.child);
}
function qa(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Rs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Rd(e, t, i, r, o)) : (e = Ao(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Tr, n(l, r) && e.ref === t.ref)
      return Ct(e, t, o);
  }
  return t.flags |= 1, e = Bt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Rd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Tr(i, r) && e.ref === t.ref)
      if (Pe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (Pe = !0);
      else
        return t.lanes = e.lanes, Ct(e, t, o);
  }
  return su(e, t, n, r, o);
}
function Ld(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Cn, Ae), Ae |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Cn, Ae), Ae |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, K(Cn, Ae), Ae |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, K(Cn, Ae), Ae |= r;
  return ke(e, t, o, n), t.child;
}
function Od(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function su(e, t, n, r, o) {
  var i = Ne(n) ? nn : we.current;
  return i = In(t, i), On(t, o), n = vs(e, t, n, r, i, o), r = ws(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ct(e, t, o)) : (Q && r && ls(t), t.flags |= 1, ke(e, t, n, o), t.child);
}
function ec(e, t, n, r, o) {
  if (Ne(n)) {
    var i = !0;
    Qo(t);
  } else
    i = !1;
  if (On(t, o), t.stateNode === null)
    Oo(e, t), Pd(t, n, r), lu(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Qe(c) : (c = Ne(n) ? nn : we.current, c = In(t, c));
    var m = n.getDerivedStateFromProps, f = typeof m == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== c) && Qa(t, l, r, c), Nt = !1;
    var h = t.memoizedState;
    l.state = h, qo(t, r, l, o), s = t.memoizedState, u !== r || h !== s || Te.current || Nt ? (typeof m == "function" && (iu(t, n, m, r), s = t.memoizedState), (u = Nt || ba(t, n, u, r, h, s, c)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = c, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, id(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Je(t.type, u), l.props = c, f = t.pendingProps, h = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Qe(s) : (s = Ne(n) ? nn : we.current, s = In(t, s));
    var w = n.getDerivedStateFromProps;
    (m = typeof w == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== f || h !== s) && Qa(t, l, r, s), Nt = !1, h = t.memoizedState, l.state = h, qo(t, r, l, o);
    var g = t.memoizedState;
    u !== f || h !== g || Te.current || Nt ? (typeof w == "function" && (iu(t, n, w, r), g = t.memoizedState), (c = Nt || ba(t, n, c, r, h, g, s) || !1) ? (m || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = s, r = c) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return au(e, t, n, r, i, o);
}
function au(e, t, n, r, o, i) {
  Od(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && ja(t, n, !1), Ct(e, t, i);
  r = t.stateNode, by.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = $n(t, e.child, null, i), t.child = $n(t, null, u, i)) : ke(e, t, u, i), t.memoizedState = r.state, o && ja(t, n, !0), t.child;
}
function zd(e) {
  var t = e.stateNode;
  t.pendingContext ? Fa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fa(e, t.context, !1), hs(e, t.containerInfo);
}
function tc(e, t, n, r, o) {
  return Mn(), ss(o), t.flags |= 256, ke(e, t, n, r), t.child;
}
var cu = { dehydrated: null, treeContext: null, retryLane: 0 };
function fu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dd(e, t, n) {
  var r = t.pendingProps, o = X.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(X, o & 1), e === null)
    return ru(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Ui(l, r, 0, null), e = tn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = fu(n), t.memoizedState = cu, e) : xs(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return Qy(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Bt(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = Bt(u, i) : (i = tn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? fu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = cu, r;
  }
  return i = e.child, e = i.sibling, r = Bt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function xs(e, t) {
  return t = Ui({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function so(e, t, n, r) {
  return r !== null && ss(r), $n(t, e.child, null, n), e = xs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Qy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = kl(Error(C(422))), so(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ui({ mode: "visible", children: r.children }, o, 0, null), i = tn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && $n(t, e.child, null, l), t.child.memoizedState = fu(l), t.memoizedState = cu, i);
  if (!(t.mode & 1))
    return so(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, i = Error(C(419)), r = kl(i, r, void 0), so(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Pe || u) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Et(e, o), nt(r, e, o, -1));
    }
    return Ns(), r = kl(Error(C(421))), so(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = uv.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Me = $t(o.nextSibling), Fe = t, Q = !0, et = null, e !== null && (Ve[Ke++] = yt, Ve[Ke++] = vt, Ve[Ke++] = rn, yt = e.id, vt = e.overflow, rn = t), t = xs(t, r.children), t.flags |= 4096, t);
}
function nc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ou(e.return, t, n);
}
function xl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Ad(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ke(e, t, r.children, n), r = X.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && nc(e, n, t);
          else if (e.tag === 19)
            nc(e, n, t);
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
  if (K(X, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && ei(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), xl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && ei(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        xl(t, !0, n, null, i);
        break;
      case "together":
        xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Oo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ct(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Bt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Xy(e, t, n) {
  switch (t.tag) {
    case 3:
      zd(t), Mn();
      break;
    case 5:
      ld(t);
      break;
    case 1:
      Ne(t.type) && Qo(t);
      break;
    case 4:
      hs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      K(Zo, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Dd(e, t, n) : (K(X, X.current & 1), e = Ct(e, t, n), e !== null ? e.sibling : null);
      K(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Ad(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(X, X.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ld(e, t, n);
  }
  return Ct(e, t, n);
}
var Id, du, Md, $d;
Id = function(e, t) {
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
du = function() {
};
Md = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, qt(dt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Al(e, o), r = Al(e, r), i = [];
        break;
      case "select":
        o = Z({}, o, { value: void 0 }), r = Z({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = $l(e, o), r = $l(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yo);
    }
    jl(n, r);
    var l;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var u = o[c];
          for (l in u)
            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Sr.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = o != null ? o[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null))
        if (c === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in s)
              s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
          } else
            n || (i || (i = []), i.push(
              c,
              n
            )), n = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Sr.hasOwnProperty(c) ? (s != null && c === "onScroll" && Y("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
$d = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jn(e, t) {
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
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Gy(e, t, n) {
  var r = t.pendingProps;
  switch (us(t), t.tag) {
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
      return ge(t), null;
    case 1:
      return Ne(t.type) && bo(), ge(t), null;
    case 3:
      return r = t.stateNode, Fn(), b(Te), b(we), gs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (lo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, et !== null && (Su(et), et = null))), du(e, t), ge(t), null;
    case 5:
      ms(t);
      var o = qt(zr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Md(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(C(166));
          return ge(t), null;
        }
        if (e = qt(dt.current), lo(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[at] = t, r[Lr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < or.length; o++)
                Y(or[o], r);
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
              fa(r, i), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Y("invalid", r);
              break;
            case "textarea":
              pa(r, i), Y("invalid", r);
          }
          jl(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && io(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && io(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : Sr.hasOwnProperty(l) && u != null && l === "onScroll" && Y("scroll", r);
            }
          switch (n) {
            case "input":
              Zr(r), da(r, i, !0);
              break;
            case "textarea":
              Zr(r), ha(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Yo);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ff(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[at] = t, e[Lr] = r, Id(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Ul(n, r), n) {
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
                for (o = 0; o < or.length; o++)
                  Y(or[o], e);
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
                fa(e, r), o = Al(e, r), Y("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Z({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                pa(e, r), o = $l(e, r), Y("invalid", e);
                break;
              default:
                o = r;
            }
            jl(n, o), u = o;
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style" ? hf(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && df(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && kr(e, s) : typeof s == "number" && kr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Sr.hasOwnProperty(i) ? s != null && i === "onScroll" && Y("scroll", e) : s != null && Yu(e, i, s, l));
              }
            switch (n) {
              case "input":
                Zr(e), da(e, r, !1);
                break;
              case "textarea":
                Zr(e), ha(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
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
                typeof o.onClick == "function" && (e.onclick = Yo);
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
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null)
        $d(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(C(166));
        if (n = qt(zr.current), qt(dt.current), lo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (i = r.nodeValue !== n) && (e = Fe, e !== null))
            switch (e.tag) {
              case 3:
                io(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && io(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r;
      }
      return ge(t), null;
    case 13:
      if (b(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Q && Me !== null && t.mode & 1 && !(t.flags & 128))
          td(), Mn(), t.flags |= 98560, i = !1;
        else if (i = lo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(C(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(C(317));
            i[at] = t;
          } else
            Mn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ge(t), i = !1;
        } else
          et !== null && (Su(et), et = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? le === 0 && (le = 3) : Ns())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
    case 4:
      return Fn(), du(e, t), e === null && Nr(t.stateNode.containerInfo), ge(t), null;
    case 10:
      return fs(t.type._context), ge(t), null;
    case 17:
      return Ne(t.type) && bo(), ge(t), null;
    case 19:
      if (b(X), i = t.memoizedState, i === null)
        return ge(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          Jn(i, !1);
        else {
          if (le !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = ei(e), l !== null) {
                for (t.flags |= 128, Jn(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return K(X, X.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && te() > Un && (t.flags |= 128, r = !0, Jn(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = ei(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Jn(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Q)
              return ge(t), null;
          } else
            2 * te() - i.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = !0, Jn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = te(), t.sibling = null, n = X.current, K(X, r ? n & 1 | 2 : n & 1), t) : (ge(t), null);
    case 22:
    case 23:
      return Ts(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Zy(e, t) {
  switch (us(t), t.tag) {
    case 1:
      return Ne(t.type) && bo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Fn(), b(Te), b(we), gs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ms(t), null;
    case 13:
      if (b(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(C(340));
        Mn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return b(X), null;
    case 4:
      return Fn(), null;
    case 10:
      return fs(t.type._context), null;
    case 22:
    case 23:
      return Ts(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ao = !1, ve = !1, Jy = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function En(e, t) {
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
function pu(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var rc = !1;
function qy(e, t) {
  if (Gl = Wo, e = Hf(), is(e)) {
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
          var l = 0, u = -1, s = -1, c = 0, m = 0, f = e, h = null;
          t:
            for (; ; ) {
              for (var w; f !== n || o !== 0 && f.nodeType !== 3 || (u = l + o), f !== i || r !== 0 && f.nodeType !== 3 || (s = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (w = f.firstChild) !== null; )
                h = f, f = w;
              for (; ; ) {
                if (f === e)
                  break t;
                if (h === n && ++c === o && (u = l), h === i && ++m === r && (s = l), (w = f.nextSibling) !== null)
                  break;
                f = h, h = f.parentNode;
              }
              f = w;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Zl = { focusedElem: e, selectionRange: n }, Wo = !1, O = t; O !== null; )
    if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, O = e;
    else
      for (; O !== null; ) {
        t = O;
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
                  var v = g.memoizedProps, R = g.memoizedState, d = t.stateNode, a = d.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Je(t.type, v), R);
                  d.__reactInternalSnapshotBeforeUpdate = a;
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
        } catch (k) {
          ee(t, t.return, k);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, O = e;
          break;
        }
        O = t.return;
      }
  return g = rc, rc = !1, g;
}
function hr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && pu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Fi(e, t) {
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
function hu(e) {
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
function Fd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[Lr], delete t[eu], delete t[Iy], delete t[My])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function jd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function oc(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jd(e.return))
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
function mu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yo));
  else if (r !== 4 && (e = e.child, e !== null))
    for (mu(e, t, n), e = e.sibling; e !== null; )
      mu(e, t, n), e = e.sibling;
}
function gu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (gu(e, t, n), e = e.sibling; e !== null; )
      gu(e, t, n), e = e.sibling;
}
var ce = null, qe = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; )
    Ud(e, t, n), n = n.sibling;
}
function Ud(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(Li, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ve || En(n, t);
    case 6:
      var r = ce, o = qe;
      ce = null, Pt(e, t, n), ce = r, qe = o, ce !== null && (qe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null && (qe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? ml(e.parentNode, n) : e.nodeType === 1 && ml(e, n), _r(e)) : ml(ce, n.stateNode));
      break;
    case 4:
      r = ce, o = qe, ce = n.stateNode.containerInfo, qe = !0, Pt(e, t, n), ce = r, qe = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && pu(n, t, l), o = o.next;
        } while (o !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (!ve && (En(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ee(n, t, u);
        }
      Pt(e, t, n);
      break;
    case 21:
      Pt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ve = (r = ve) || n.memoizedState !== null, Pt(e, t, n), ve = r) : Pt(e, t, n);
      break;
    default:
      Pt(e, t, n);
  }
}
function ic(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jy()), t.forEach(function(r) {
      var o = sv.bind(null, e, r);
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
        Ud(i, l, o), ce = null, qe = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (c) {
        ee(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Bd(t, e), t = t.sibling;
}
function Bd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ze(t, e), it(e), r & 4) {
        try {
          hr(3, e, e.return), Fi(3, e);
        } catch (v) {
          ee(e, e.return, v);
        }
        try {
          hr(5, e, e.return);
        } catch (v) {
          ee(e, e.return, v);
        }
      }
      break;
    case 1:
      Ze(t, e), it(e), r & 512 && n !== null && En(n, n.return);
      break;
    case 5:
      if (Ze(t, e), it(e), r & 512 && n !== null && En(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          kr(o, "");
        } catch (v) {
          ee(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && i.type === "radio" && i.name != null && af(o, i), Ul(u, l);
            var c = Ul(u, i);
            for (l = 0; l < s.length; l += 2) {
              var m = s[l], f = s[l + 1];
              m === "style" ? hf(o, f) : m === "dangerouslySetInnerHTML" ? df(o, f) : m === "children" ? kr(o, f) : Yu(o, m, f, c);
            }
            switch (u) {
              case "input":
                Il(o, i);
                break;
              case "textarea":
                cf(o, i);
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
            o[Lr] = i;
          } catch (v) {
            ee(e, e.return, v);
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
        } catch (v) {
          ee(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Ze(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          _r(t.containerInfo);
        } catch (v) {
          ee(e, e.return, v);
        }
      break;
    case 4:
      Ze(t, e), it(e);
      break;
    case 13:
      Ze(t, e), it(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (_s = te())), r & 4 && ic(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ve = (c = ve) || m, Ze(t, e), ve = c) : Ze(t, e), it(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1)
          for (O = e, m = e.child; m !== null; ) {
            for (f = O = m; O !== null; ) {
              switch (h = O, w = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hr(4, h, h.return);
                  break;
                case 1:
                  En(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (v) {
                      ee(r, n, v);
                    }
                  }
                  break;
                case 5:
                  En(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    uc(f);
                    continue;
                  }
              }
              w !== null ? (w.return = h, O = w) : uc(f);
            }
            m = m.sibling;
          }
        e:
          for (m = null, f = e; ; ) {
            if (f.tag === 5) {
              if (m === null) {
                m = f;
                try {
                  o = f.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = f.stateNode, s = f.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = pf("display", l));
                } catch (v) {
                  ee(e, e.return, v);
                }
              }
            } else if (f.tag === 6) {
              if (m === null)
                try {
                  f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                } catch (v) {
                  ee(e, e.return, v);
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
              m === f && (m = null), f = f.return;
            }
            m === f && (m = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      Ze(t, e), it(e), r & 4 && ic(e);
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
          if (jd(n)) {
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
          r.flags & 32 && (kr(o, ""), r.flags &= -33);
          var i = oc(e);
          gu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = oc(e);
          mu(e, u, l);
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
function ev(e, t, n) {
  O = e, Hd(e);
}
function Hd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ao;
      if (!l) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || ve;
        u = ao;
        var c = ve;
        if (ao = l, (ve = s) && !c)
          for (O = o; O !== null; )
            l = O, s = l.child, l.tag === 22 && l.memoizedState !== null ? sc(o) : s !== null ? (s.return = l, O = s) : sc(o);
        for (; i !== null; )
          O = i, Hd(i), i = i.sibling;
        O = o, ao = u, ve = c;
      }
      lc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, O = i) : lc(e);
  }
}
function lc(e) {
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
              ve || Fi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Va(t, i, r);
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
                Va(t, l, n);
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
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var f = m.dehydrated;
                    f !== null && _r(f);
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
        ve || t.flags & 512 && hu(t);
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
function uc(e) {
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
function sc(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fi(4, t);
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
            hu(t);
          } catch (s) {
            ee(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            hu(t);
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
var tv = Math.ceil, ri = _t.ReactCurrentDispatcher, Es = _t.ReactCurrentOwner, be = _t.ReactCurrentBatchConfig, U = 0, se = null, oe = null, pe = 0, Ae = 0, Cn = Kt(0), le = 0, Mr = null, ln = 0, ji = 0, Cs = 0, mr = null, _e = null, _s = 0, Un = 1 / 0, mt = null, oi = !1, yu = null, jt = null, co = !1, zt = null, ii = 0, gr = 0, vu = null, zo = -1, Do = 0;
function xe() {
  return U & 6 ? te() : zo !== -1 ? zo : zo = te();
}
function Ut(e) {
  return e.mode & 1 ? U & 2 && pe !== 0 ? pe & -pe : Fy.transition !== null ? (Do === 0 && (Do = Pf()), Do) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Df(e.type)), e) : 1;
}
function nt(e, t, n, r) {
  if (50 < gr)
    throw gr = 0, vu = null, Error(C(185));
  Hr(e, n, r), (!(U & 2) || e !== se) && (e === se && (!(U & 2) && (ji |= n), le === 4 && Lt(e, pe)), Re(e, r), n === 1 && U === 0 && !(t.mode & 1) && (Un = te() + 500, Ii && Yt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Fg(e, t);
  var r = Ho(e, e === se ? pe : 0);
  if (r === 0)
    n !== null && ya(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ya(n), t === 1)
      e.tag === 0 ? $y(ac.bind(null, e)) : Jf(ac.bind(null, e)), Dy(function() {
        !(U & 6) && Yt();
      }), n = null;
    else {
      switch (Tf(r)) {
        case 1:
          n = Zu;
          break;
        case 4:
          n = Cf;
          break;
        case 16:
          n = Bo;
          break;
        case 536870912:
          n = _f;
          break;
        default:
          n = Bo;
      }
      n = Gd(n, Wd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Wd(e, t) {
  if (zo = -1, Do = 0, U & 6)
    throw Error(C(327));
  var n = e.callbackNode;
  if (zn() && e.callbackNode !== n)
    return null;
  var r = Ho(e, e === se ? pe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = li(e, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var i = Kd();
    (se !== e || pe !== t) && (mt = null, Un = te() + 500, en(e, t));
    do
      try {
        ov();
        break;
      } catch (u) {
        Vd(e, u);
      }
    while (1);
    cs(), ri.current = i, U = o, oe !== null ? t = 0 : (se = null, pe = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (o = Kl(e), o !== 0 && (r = o, t = wu(e, o))), t === 1)
      throw n = Mr, en(e, 0), Lt(e, r), Re(e, te()), n;
    if (t === 6)
      Lt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !nv(o) && (t = li(e, r), t === 2 && (i = Kl(e), i !== 0 && (r = i, t = wu(e, i))), t === 1))
        throw n = Mr, en(e, 0), Lt(e, r), Re(e, te()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Gt(e, _e, mt);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = _s + 500 - te(), 10 < t)) {
            if (Ho(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              xe(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ql(Gt.bind(null, e, _e, mt), t);
            break;
          }
          Gt(e, _e, mt);
          break;
        case 4:
          if (Lt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - tt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tv(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ql(Gt.bind(null, e, _e, mt), r);
            break;
          }
          Gt(e, _e, mt);
          break;
        case 5:
          Gt(e, _e, mt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Re(e, te()), e.callbackNode === n ? Wd.bind(null, e) : null;
}
function wu(e, t) {
  var n = mr;
  return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256), e = li(e, t), e !== 2 && (t = _e, _e = n, t !== null && Su(t)), e;
}
function Su(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function nv(e) {
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
function Lt(e, t) {
  for (t &= ~Cs, t &= ~ji, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - tt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ac(e) {
  if (U & 6)
    throw Error(C(327));
  zn();
  var t = Ho(e, 0);
  if (!(t & 1))
    return Re(e, te()), null;
  var n = li(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Kl(e);
    r !== 0 && (t = r, n = wu(e, r));
  }
  if (n === 1)
    throw n = Mr, en(e, 0), Lt(e, t), Re(e, te()), n;
  if (n === 6)
    throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, _e, mt), Re(e, te()), null;
}
function Ps(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (Un = te() + 500, Ii && Yt());
  }
}
function un(e) {
  zt !== null && zt.tag === 0 && !(U & 6) && zn();
  var t = U;
  U |= 1;
  var n = be.transition, r = W;
  try {
    if (be.transition = null, W = 1, e)
      return e();
  } finally {
    W = r, be.transition = n, U = t, !(U & 6) && Yt();
  }
}
function Ts() {
  Ae = Cn.current, b(Cn);
}
function en(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, zy(n)), oe !== null)
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch (us(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && bo();
          break;
        case 3:
          Fn(), b(Te), b(we), gs();
          break;
        case 5:
          ms(r);
          break;
        case 4:
          Fn();
          break;
        case 13:
          b(X);
          break;
        case 19:
          b(X);
          break;
        case 10:
          fs(r.type._context);
          break;
        case 22:
        case 23:
          Ts();
      }
      n = n.return;
    }
  if (se = e, oe = e = Bt(e.current, null), pe = Ae = t, le = 0, Mr = null, Cs = ji = ln = 0, _e = mr = null, Jt !== null) {
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
function Vd(e, t) {
  do {
    var n = oe;
    try {
      if (cs(), Ro.current = ni, ti) {
        for (var r = G.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ti = !1;
      }
      if (on = 0, ue = ie = G = null, pr = !1, Dr = 0, Es.current = null, n === null || n.return === null) {
        le = 1, Mr = t, oe = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = pe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = u, f = m.tag;
          if (!(m.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = m.alternate;
            h ? (m.updateQueue = h.updateQueue, m.memoizedState = h.memoizedState, m.lanes = h.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var w = Ga(l);
          if (w !== null) {
            w.flags &= -257, Za(w, l, u, i, t), w.mode & 1 && Xa(i, c, t), t = w, s = c;
            var g = t.updateQueue;
            if (g === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(s), t.updateQueue = v;
            } else
              g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Xa(i, c, t), Ns();
              break e;
            }
            s = Error(C(426));
          }
        } else if (Q && u.mode & 1) {
          var R = Ga(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), Za(R, l, u, i, t), ss(jn(s, u));
            break e;
          }
        }
        i = s = jn(s, u), le !== 4 && (le = 2), mr === null ? mr = [i] : mr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Td(i, s, t);
              Wa(i, d);
              break e;
            case 1:
              u = s;
              var a = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (jt === null || !jt.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var k = Nd(i, u, t);
                Wa(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      bd(n);
    } catch (y) {
      t = y, oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Kd() {
  var e = ri.current;
  return ri.current = ni, e === null ? ni : e;
}
function Ns() {
  (le === 0 || le === 3 || le === 2) && (le = 4), se === null || !(ln & 268435455) && !(ji & 268435455) || Lt(se, pe);
}
function li(e, t) {
  var n = U;
  U |= 2;
  var r = Kd();
  (se !== e || pe !== t) && (mt = null, en(e, t));
  do
    try {
      rv();
      break;
    } catch (o) {
      Vd(e, o);
    }
  while (1);
  if (cs(), U = n, ri.current = r, oe !== null)
    throw Error(C(261));
  return se = null, pe = 0, le;
}
function rv() {
  for (; oe !== null; )
    Yd(oe);
}
function ov() {
  for (; oe !== null && !Rg(); )
    Yd(oe);
}
function Yd(e) {
  var t = Xd(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? bd(e) : oe = t, Es.current = null;
}
function bd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Zy(n, t), n !== null) {
        n.flags &= 32767, oe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, oe = null;
        return;
      }
    } else if (n = Gy(n, t, Ae), n !== null) {
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
  var r = W, o = be.transition;
  try {
    be.transition = null, W = 1, iv(e, t, n, r);
  } finally {
    be.transition = o, W = r;
  }
  return null;
}
function iv(e, t, n, r) {
  do
    zn();
  while (zt !== null);
  if (U & 6)
    throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (jg(e, i), e === se && (oe = se = null, pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || co || (co = !0, Gd(Bo, function() {
    return zn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = be.transition, be.transition = null;
    var l = W;
    W = 1;
    var u = U;
    U |= 4, Es.current = null, qy(e, n), Bd(n, e), _y(Zl), Wo = !!Gl, Zl = Gl = null, e.current = n, ev(n), Lg(), U = u, W = l, be.transition = i;
  } else
    e.current = n;
  if (co && (co = !1, zt = e, ii = o), i = e.pendingLanes, i === 0 && (jt = null), Dg(n.stateNode), Re(e, te()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (oi)
    throw oi = !1, e = yu, yu = null, e;
  return ii & 1 && e.tag !== 0 && zn(), i = e.pendingLanes, i & 1 ? e === vu ? gr++ : (gr = 0, vu = e) : gr = 0, Yt(), null;
}
function zn() {
  if (zt !== null) {
    var e = Tf(ii), t = be.transition, n = W;
    try {
      if (be.transition = null, W = 16 > e ? 16 : e, zt === null)
        var r = !1;
      else {
        if (e = zt, zt = null, ii = 0, U & 6)
          throw Error(C(331));
        var o = U;
        for (U |= 4, O = e.current; O !== null; ) {
          var i = O, l = i.child;
          if (O.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (O = c; O !== null; ) {
                  var m = O;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(8, m, i);
                  }
                  var f = m.child;
                  if (f !== null)
                    f.return = m, O = f;
                  else
                    for (; O !== null; ) {
                      m = O;
                      var h = m.sibling, w = m.return;
                      if (Fd(m), m === c) {
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
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var R = v.sibling;
                    v.sibling = null, v = R;
                  } while (v !== null);
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
                      hr(9, i, i.return);
                  }
                var d = i.sibling;
                if (d !== null) {
                  d.return = i.return, O = d;
                  break e;
                }
                O = i.return;
              }
        }
        var a = e.current;
        for (O = a; O !== null; ) {
          l = O;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null)
            p.return = l, O = p;
          else
            e:
              for (l = a; O !== null; ) {
                if (u = O, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fi(9, u);
                    }
                  } catch (y) {
                    ee(u, u.return, y);
                  }
                if (u === l) {
                  O = null;
                  break e;
                }
                var k = u.sibling;
                if (k !== null) {
                  k.return = u.return, O = k;
                  break e;
                }
                O = u.return;
              }
        }
        if (U = o, Yt(), ft && typeof ft.onPostCommitFiberRoot == "function")
          try {
            ft.onPostCommitFiberRoot(Li, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      W = n, be.transition = t;
    }
  }
  return !1;
}
function cc(e, t, n) {
  t = jn(n, t), t = Td(e, t, 1), e = Ft(e, t, 1), t = xe(), e !== null && (Hr(e, 1, t), Re(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3)
    cc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        cc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
          e = jn(n, e), e = Nd(t, e, 1), t = Ft(t, e, 1), e = xe(), t !== null && (Hr(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function lv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, se === e && (pe & n) === n && (le === 4 || le === 3 && (pe & 130023424) === pe && 500 > te() - _s ? en(e, 0) : Cs |= n), Re(e, t);
}
function Qd(e, t) {
  t === 0 && (e.mode & 1 ? (t = eo, eo <<= 1, !(eo & 130023424) && (eo = 4194304)) : t = 1);
  var n = xe();
  e = Et(e, t), e !== null && (Hr(e, t, n), Re(e, n));
}
function uv(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Qd(e, n);
}
function sv(e, t) {
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
  r !== null && r.delete(t), Qd(e, n);
}
var Xd;
Xd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current)
      Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Pe = !1, Xy(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else
    Pe = !1, Q && t.flags & 1048576 && qf(t, Go, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Oo(e, t), e = t.pendingProps;
      var o = In(t, we.current);
      On(t, n), o = vs(null, t, r, e, o, n);
      var i = ws();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (i = !0, Qo(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ps(t), o.updater = $i, t.stateNode = o, o._reactInternals = t, lu(t, r, e, n), t = au(null, t, r, !0, i, n)) : (t.tag = 0, Q && i && ls(t), ke(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Oo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = cv(r), e = Je(r, e), o) {
          case 0:
            t = su(null, t, r, e, n);
            break e;
          case 1:
            t = ec(null, t, r, e, n);
            break e;
          case 11:
            t = Ja(null, t, r, e, n);
            break e;
          case 14:
            t = qa(null, t, r, Je(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), su(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), ec(e, t, r, o, n);
    case 3:
      e: {
        if (zd(t), e === null)
          throw Error(C(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, id(e, t), qo(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = jn(Error(C(423)), t), t = tc(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = jn(Error(C(424)), t), t = tc(e, t, r, n, o);
            break e;
          } else
            for (Me = $t(t.stateNode.containerInfo.firstChild), Fe = t, Q = !0, et = null, n = rd(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Mn(), r === o) {
            t = Ct(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ld(t), e === null && ru(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Jl(r, o) ? l = null : i !== null && Jl(r, i) && (t.flags |= 32), Od(e, t), ke(e, t, l, n), t.child;
    case 6:
      return e === null && ru(t), null;
    case 13:
      return Dd(e, t, n);
    case 4:
      return hs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $n(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), Ja(e, t, r, o, n);
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, K(Zo, r._currentValue), r._currentValue = l, i !== null)
          if (rt(i.value, l)) {
            if (i.children === o.children && !Te.current) {
              t = Ct(e, t, n);
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
                      s = wt(-1, n & -n), s.tag = 2;
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
                      }
                    }
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), ou(
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
                l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), ou(l, n, t), l = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, On(t, n), o = Qe(o), r = r(o), t.flags |= 1, ke(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Je(r, t.pendingProps), o = Je(r.type, o), qa(e, t, r, o, n);
    case 15:
      return Rd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), Oo(e, t), t.tag = 1, Ne(r) ? (e = !0, Qo(t)) : e = !1, On(t, n), Pd(t, r, o), lu(t, r, o, n), au(null, t, r, !0, e, n);
    case 19:
      return Ad(e, t, n);
    case 22:
      return Ld(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Gd(e, t) {
  return Ef(e, t);
}
function av(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new av(e, t, n, r);
}
function Rs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function cv(e) {
  if (typeof e == "function")
    return Rs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Qu)
      return 11;
    if (e === Xu)
      return 14;
  }
  return 2;
}
function Bt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ao(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    Rs(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case hn:
          return tn(n.children, o, i, t);
        case bu:
          l = 8, o |= 8;
          break;
        case Ll:
          return e = Ye(12, n, t, o | 2), e.elementType = Ll, e.lanes = i, e;
        case Ol:
          return e = Ye(13, n, t, o), e.elementType = Ol, e.lanes = i, e;
        case zl:
          return e = Ye(19, n, t, o), e.elementType = zl, e.lanes = i, e;
        case lf:
          return Ui(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case rf:
                l = 10;
                break e;
              case of:
                l = 9;
                break e;
              case Qu:
                l = 11;
                break e;
              case Xu:
                l = 14;
                break e;
              case Tt:
                l = 16, r = null;
                break e;
            }
          throw Error(C(130, e == null ? e : typeof e, ""));
      }
  return t = Ye(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function tn(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function Ui(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = lf, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function El(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function Cl(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function fv(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ol(0), this.expirationTimes = ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ol(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Ls(e, t, n, r, o, i, l, u, s) {
  return e = new fv(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ye(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ps(i), e;
}
function dv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: pn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Zd(e) {
  if (!e)
    return Wt;
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
          if (Ne(t.type)) {
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
    if (Ne(n))
      return Zf(e, n, t);
  }
  return t;
}
function Jd(e, t, n, r, o, i, l, u, s) {
  return e = Ls(n, r, !0, e, o, i, l, u, s), e.context = Zd(null), n = e.current, r = xe(), o = Ut(n), i = wt(r, o), i.callback = t ?? null, Ft(n, i, o), e.current.lanes = o, Hr(e, o, r), Re(e, r), e;
}
function Bi(e, t, n, r) {
  var o = t.current, i = xe(), l = Ut(o);
  return n = Zd(n), t.context === null ? t.context = n : t.pendingContext = n, t = wt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ft(o, t, l), e !== null && (nt(e, o, l, i), No(e, o, l)), l;
}
function ui(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Os(e, t) {
  fc(e, t), (e = e.alternate) && fc(e, t);
}
function pv() {
  return null;
}
var qd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function zs(e) {
  this._internalRoot = e;
}
Hi.prototype.render = zs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(C(409));
  Bi(e, t, null, null);
};
Hi.prototype.unmount = zs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      Bi(null, e, null, null);
    }), t[xt] = null;
  }
};
function Hi(e) {
  this._internalRoot = e;
}
Hi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Lf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++)
      ;
    Rt.splice(n, 0, e), n === 0 && zf(e);
  }
};
function Ds(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Wi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function dc() {
}
function hv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = ui(l);
        i.call(c);
      };
    }
    var l = Jd(t, r, e, 0, null, !1, !1, "", dc);
    return e._reactRootContainer = l, e[xt] = l.current, Nr(e.nodeType === 8 ? e.parentNode : e), un(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = ui(s);
      u.call(c);
    };
  }
  var s = Ls(e, 0, !1, null, null, !1, !1, "", dc);
  return e._reactRootContainer = s, e[xt] = s.current, Nr(e.nodeType === 8 ? e.parentNode : e), un(function() {
    Bi(t, s, n, r);
  }), s;
}
function Vi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = ui(l);
        u.call(s);
      };
    }
    Bi(t, l, e, o);
  } else
    l = hv(n, t, e, o, r);
  return ui(l);
}
Nf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = rr(t.pendingLanes);
        n !== 0 && (Ju(t, n | 1), Re(t, te()), !(U & 6) && (Un = te() + 500, Yt()));
      }
      break;
    case 13:
      un(function() {
        var r = Et(e, 1);
        if (r !== null) {
          var o = xe();
          nt(r, e, 1, o);
        }
      }), Os(e, 1);
  }
};
qu = function(e) {
  if (e.tag === 13) {
    var t = Et(e, 134217728);
    if (t !== null) {
      var n = xe();
      nt(t, e, 134217728, n);
    }
    Os(e, 134217728);
  }
};
Rf = function(e) {
  if (e.tag === 13) {
    var t = Ut(e), n = Et(e, t);
    if (n !== null) {
      var r = xe();
      nt(n, e, t, r);
    }
    Os(e, t);
  }
};
Lf = function() {
  return W;
};
Of = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
Hl = function(e, t, n) {
  switch (t) {
    case "input":
      if (Il(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ai(r);
            if (!o)
              throw Error(C(90));
            sf(r), Il(r, o);
          }
        }
      }
      break;
    case "textarea":
      cf(e, n);
      break;
    case "select":
      t = n.value, t != null && Tn(e, !!n.multiple, t, !1);
  }
};
yf = Ps;
vf = un;
var mv = { usingClientEntryPoint: !1, Events: [Vr, vn, Ai, mf, gf, Ps] }, qn = { findFiberByHostInstance: Zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gv = { bundleType: qn.bundleType, version: qn.version, rendererPackageName: qn.rendererPackageName, rendererConfig: qn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = kf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: qn.findFiberByHostInstance || pv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fo.isDisabled && fo.supportsFiber)
    try {
      Li = fo.inject(gv), ft = fo;
    } catch {
    }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mv;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ds(t))
    throw Error(C(200));
  return dv(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!Ds(e))
    throw Error(C(299));
  var n = !1, r = "", o = qd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ls(e, 1, !1, null, null, n, !1, r, o), e[xt] = t.current, Nr(e.nodeType === 8 ? e.parentNode : e), new zs(t);
};
Be.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = kf(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return un(e);
};
Be.hydrate = function(e, t, n) {
  if (!Wi(t))
    throw Error(C(200));
  return Vi(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!Ds(e))
    throw Error(C(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = qd;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Jd(t, null, e, 1, n ?? null, o, !1, i, l), e[xt] = t.current, Nr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Hi(t);
};
Be.render = function(e, t, n) {
  if (!Wi(t))
    throw Error(C(200));
  return Vi(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!Wi(e))
    throw Error(C(40));
  return e._reactRootContainer ? (un(function() {
    Vi(null, null, e, !1, function() {
      e._reactRootContainer = null, e[xt] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = Ps;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Wi(n))
    throw Error(C(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(C(38));
  return Vi(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function ep() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ep);
    } catch (e) {
      console.error(e);
    }
}
ep(), qc.exports = Be;
var yv = qc.exports, tp, pc = yv;
tp = pc.createRoot, pc.hydrateRoot;
function np(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function vv(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function wv({ layer: e, selected: t, onSelect: n, onMoveStart: r }) {
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
      i = /* @__PURE__ */ E(
        "div",
        {
          className: "chd-layer-frame",
          style: { background: e.fill || "#ffffff" }
        }
      );
      break;
    case "rect":
      i = /* @__PURE__ */ E(
        "div",
        {
          className: "chd-layer-rect",
          style: { background: e.fill || "#888780" }
        }
      );
      break;
    case "text":
      i = /* @__PURE__ */ E(
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
      i = e.src ? /* @__PURE__ */ E(
        "img",
        {
          className: `chd-layer-image${e.objectFit === "contain" || /logo/i.test(e.name) ? " chd-layer-image--contain" : ""}`,
          src: e.src,
          alt: e.name,
          draggable: !1
        }
      ) : /* @__PURE__ */ E("div", { className: "chd-layer-image-placeholder", style: { background: e.fill || "#e8e6e1" }, children: e.name || "Image" });
      break;
  }
  return /* @__PURE__ */ E(
    "div",
    {
      className: `chd-layer${t ? " chd-layer--selected" : ""}${e.locked ? " chd-layer--locked" : ""}`,
      style: o,
      "data-layer-id": e.id,
      onPointerDown: (l) => {
        l.button === 0 && (l.stopPropagation(), n(l), e.locked || r(l));
      },
      children: i
    }
  );
}
const ku = {
  primary: "#00a651",
  secondary: "#000000",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  text: "#000000",
  muted: "#6b716e"
};
function po(e) {
  return typeof e == "boolean" ? e : void 0;
}
let Sv = 1;
function ir() {
  return `layer-${Date.now().toString(36)}-${Sv++}`;
}
function xu(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: ir(),
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
        id: ir(),
        type: e,
        name: "Rectangle",
        x: n,
        y: r,
        width: 160,
        height: 100,
        visible: !0,
        fill: ku.primary,
        locked: !1,
        allowTransform: !1,
        editableContent: !1
      };
    case "text":
      return {
        id: ir(),
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
        id: ir(),
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
function kv() {
  const e = xu("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = ku.secondary;
  const t = xu("image", { x: 120, y: 140 });
  return t.name = "Logo", t.width = 240, t.height = 80, t.src = "", t.fill = "#ffffff", t.locked = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: ku.background
    },
    layers: [e, t]
  };
}
function De(e) {
  return JSON.parse(JSON.stringify(e));
}
function xv(e) {
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
    const c = typeof u.id == "string" ? u.id : ir(), m = typeof u.name == "string" ? u.name : s, f = Number(u.x), h = Number(u.y), w = Number(u.width), g = Number(u.height);
    if (![f, h, w, g].every(Number.isFinite))
      continue;
    const v = {
      id: c,
      type: s,
      name: m,
      x: f,
      y: h,
      width: w,
      height: g,
      rotation: typeof u.rotation == "number" ? u.rotation : void 0,
      visible: u.visible !== !1,
      locked: !!u.locked,
      allowTransform: !!u.allowTransform,
      fill: typeof u.fill == "string" ? u.fill : void 0,
      text: typeof u.text == "string" ? u.text : void 0,
      fontSize: typeof u.fontSize == "number" ? u.fontSize : void 0,
      color: typeof u.color == "string" ? u.color : void 0,
      src: typeof u.src == "string" ? u.src : void 0,
      pinLeft: po(u.pinLeft),
      pinRight: po(u.pinRight),
      pinTop: po(u.pinTop),
      pinBottom: po(u.pinBottom),
      objectFit: u.objectFit === "contain" || u.objectFit === "cover" ? u.objectFit : void 0
    };
    typeof u.editableContent == "boolean" ? v.editableContent = u.editableContent : v.editableContent = s === "text" || s === "image", i.push(v);
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
function rp(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function Ki(e) {
  return e.locked ? !1 : rp(e);
}
function Yr(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function As(e, t) {
  return t === "admin" ? !0 : e.visible ? Ki(e) || Yr(e) : !1;
}
function Ev(e, t, n) {
  const r = {}, o = new Map(e.layers.map((i) => [i.id, i]));
  for (const i of t.layers) {
    const l = o.get(i.id);
    if (!l)
      continue;
    const u = {};
    Yr(l) && (i.x !== l.x && (u.x = i.x), i.y !== l.y && (u.y = i.y), i.width !== l.width && (u.width = i.width), i.height !== l.height && (u.height = i.height)), Ki(l) && ((i.text ?? "") !== (l.text ?? "") && (u.text = i.text), (i.fill ?? "") !== (l.fill ?? "") && (u.fill = i.fill), (i.color ?? "") !== (l.color ?? "") && (u.color = i.color), (i.src ?? "") !== (l.src ?? "") && (u.src = i.src)), Object.keys(u).length > 0 && (r[i.id] = u);
  }
  return { version: 1, templateId: n, overrides: r };
}
function Cv(e, t) {
  const n = {};
  return Yr(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), Ki(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const Dt = 24, hc = 1, op = 0.25, ip = 3, _v = 8;
function ho(e, t) {
  return Math.abs(e - t) <= _v;
}
function mo(e, t) {
  return e === !0 ? !0 : e === !1 ? !1 : t;
}
function Pv(e) {
  return typeof e.pinLeft == "boolean" || typeof e.pinRight == "boolean" || typeof e.pinTop == "boolean" || typeof e.pinBottom == "boolean";
}
function lp(e, t, n) {
  return Pv(e) ? {
    left: e.pinLeft === !0,
    right: e.pinRight === !0,
    top: e.pinTop === !0,
    bottom: e.pinBottom === !0
  } : {
    left: mo(e.pinLeft, ho(e.x, 0)),
    right: mo(e.pinRight, ho(e.x + e.width, t)),
    top: mo(e.pinTop, ho(e.y, 0)),
    bottom: mo(e.pinBottom, ho(e.y + e.height, n))
  };
}
function up() {
  return {
    pinLeft: !0,
    pinTop: !0,
    pinRight: !1,
    pinBottom: !1
  };
}
function mc(e, t, n, r, o, i) {
  const l = e, u = n - e - t;
  if (o && i) {
    const c = l, m = Math.max(Dt, r - l - u);
    return { start: c, size: m };
  }
  if (o)
    return { start: l, size: t };
  if (i) {
    const c = t;
    return { start: Math.max(0, r - u - c), size: c };
  }
  const s = n === 0 ? 1 : r / n;
  return {
    start: e * s,
    size: Math.max(Dt, t * s)
  };
}
function Tv(e, t, n) {
  if (t.width === n.width && t.height === n.height)
    return e;
  const r = lp(e, t.width, t.height), o = mc(e.x, e.width, t.width, n.width, r.left, r.right), i = mc(e.y, e.height, t.height, n.height, r.top, r.bottom), l = r.left && r.right && r.top && r.bottom;
  return {
    ...e,
    x: o.start,
    y: i.start,
    width: o.size,
    height: i.size,
    objectFit: e.objectFit ?? (l && e.type === "image" ? "cover" : e.objectFit)
  };
}
function Nv(e, t, n, r) {
  const o = { width: e.canvas.width, height: e.canvas.height }, i = { width: t, height: n };
  return {
    ...e,
    canvas: {
      ...e.canvas,
      width: t,
      height: n,
      presetId: r
    },
    layers: e.layers.map((l) => Tv(l, o, i))
  };
}
function sp(e, t, n) {
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
const Rv = 50, ap = N.createContext(null);
function Lv(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function gc(e, t, n) {
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
function Ov({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: o,
  onDocumentChange: i,
  onInstanceChange: l
}) {
  const u = N.useRef(null);
  u.current || (u.current = n ? De(n) : kv());
  const s = N.useRef(
    De(r ?? n ?? u.current)
  ), c = N.useRef(t);
  c.current = t;
  const [m, f] = N.useState(() => De(u.current)), [h, w] = N.useState([]), [g, v] = N.useState({
    zoom: hc,
    panX: 40,
    panY: 40
  }), R = N.useRef([De(u.current)]), d = N.useRef(0), [a, p] = N.useState(0), k = N.useRef(h);
  k.current = h;
  const y = N.useRef(m);
  y.current = m;
  const x = N.useRef(i);
  x.current = i;
  const S = N.useRef(l);
  S.current = l;
  const L = N.useRef(o);
  L.current = o;
  const $ = N.useCallback(() => p((I) => I + 1), []), z = N.useCallback((I) => {
    var _, P;
    if ((_ = x.current) == null || _.call(x, De(I)), c.current === "endUser") {
      const T = L.current ?? "";
      (P = S.current) == null || P.call(
        S,
        Ev(s.current, I, T)
      );
    }
  }, []), F = N.useCallback(
    (I) => {
      const _ = R.current.slice(0, d.current + 1);
      for (_.push(De(I)); _.length > Rv; )
        _.shift();
      R.current = _, d.current = _.length - 1, $();
    },
    [$]
  ), Oe = N.useCallback(
    (I, _) => {
      f(I), y.current = I, _ && F(I), z(I);
    },
    [z, F]
  ), ze = N.useCallback(
    (I) => {
      const _ = c.current === "endUser";
      switch (I.type) {
        case "ADD_LAYER": {
          if (_)
            return;
          const P = xu(I.layerType, I.at);
          f((T) => {
            const D = { ...T, layers: [...T.layers, P] };
            return F(D), z(D), D;
          }), w([P.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const P = I.pushHistory !== !1;
          f((T) => {
            const D = {
              ...T,
              layers: T.layers.map((j) => {
                if (j.id !== I.id)
                  return j;
                const ht = _ ? Cv(j, I.patch) : I.patch;
                if (Object.keys(ht).length === 0)
                  return j;
                const Se = { ...j, ...ht };
                return typeof Se.width == "number" && (Se.width = Math.max(Dt, Se.width)), typeof Se.height == "number" && (Se.height = Math.max(Dt, Se.height)), Se;
              })
            };
            return P && F(D), z(D), D;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if (_)
            return;
          const P = new Set(I.ids ?? k.current);
          if (P.size === 0)
            return;
          f((T) => {
            const D = {
              ...T,
              layers: T.layers.filter((j) => !P.has(j.id))
            };
            return F(D), z(D), D;
          }), w((T) => T.filter((D) => !P.has(D)));
          break;
        }
        case "SELECT": {
          w((P) => {
            const T = I.ids.filter((D) => {
              const j = y.current.layers.find((ht) => ht.id === D);
              return j ? As(j, c.current) : !1;
            });
            if (I.additive) {
              const D = new Set(P);
              for (const j of T)
                D.has(j) ? D.delete(j) : D.add(j);
              return Array.from(D);
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
          if (_)
            return;
          f((P) => {
            const T = {
              ...P,
              layers: Lv(P.layers, I.fromIndex, I.toIndex)
            };
            return F(T), z(T), T;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if (_)
            return;
          f((P) => {
            const T = {
              ...P,
              layers: P.layers.map(
                (D) => D.id === I.id ? { ...D, visible: I.visible } : D
              )
            };
            return F(T), z(T), T;
          });
          break;
        }
        case "BRING_FORWARD": {
          if (_)
            return;
          const P = k.current;
          f((T) => {
            const D = { ...T, layers: gc(T.layers, P, "forward") };
            return F(D), z(D), D;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if (_)
            return;
          const P = k.current;
          f((T) => {
            const D = { ...T, layers: gc(T.layers, P, "backward") };
            return F(D), z(D), D;
          });
          break;
        }
        case "ZOOM_SET": {
          v((P) => ({
            ...P,
            zoom: np(I.zoom, op, ip)
          }));
          break;
        }
        case "ZOOM_RESET": {
          v({ zoom: hc, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          v((P) => ({
            ...P,
            panX: I.panX,
            panY: I.panY
          }));
          break;
        }
        case "UNDO": {
          if (d.current <= 0)
            return;
          d.current -= 1;
          const P = De(R.current[d.current]);
          f(P), y.current = P, w([]), $(), z(P);
          break;
        }
        case "REDO": {
          if (d.current >= R.current.length - 1)
            return;
          d.current += 1;
          const P = De(R.current[d.current]);
          f(P), y.current = P, w([]), $(), z(P);
          break;
        }
        case "LOAD_DOCUMENT": {
          Oe(De(I.document), !0), w([]);
          break;
        }
        case "SET_CANVAS_SIZE": {
          if (_)
            return;
          f((P) => {
            if (P.canvas.width === I.width && P.canvas.height === I.height && I.presetId && P.canvas.presetId === I.presetId)
              return P;
            const T = Nv(P, I.width, I.height, I.presetId);
            return F(T), z(T), T;
          });
          break;
        }
        case "COMMIT": {
          f((P) => (F(P), z(P), P));
          break;
        }
      }
    },
    [Oe, $, z, F]
  ), ot = N.useCallback(() => De(m), [m]), bt = N.useCallback(
    (I) => {
      if (c.current === "endUser")
        return !1;
      try {
        const _ = xv(JSON.parse(I));
        return _ ? (s.current = De(_), Oe(_, !0), w([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [Oe]
  );
  N.useEffect(() => {
    t === "admin" && n && (s.current = De(n)), t === "endUser" && r && (s.current = De(r));
  }, [n, r, t]);
  const pt = N.useMemo(
    () => ({
      mode: t,
      templateId: o,
      document: m,
      selection: h,
      viewport: g,
      canUndo: d.current > 0,
      canRedo: d.current < R.current.length - 1,
      dispatch: ze,
      exportDocument: ot,
      importDocumentJson: bt
    }),
    [t, o, m, h, g, ze, ot, bt, a]
  );
  return /* @__PURE__ */ E(ap.Provider, { value: pt, children: e });
}
function cn() {
  const e = N.useContext(ap);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function Is() {
  return cn().mode;
}
function Ms() {
  return cn().document;
}
function cp() {
  return cn().document.layers;
}
function Yi() {
  return cn().selection;
}
function fp() {
  return cn().viewport;
}
function bi() {
  return cn().dispatch;
}
function zv() {
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
const Dv = ["nw", "ne", "sw", "se"];
function Av() {
  const e = Ms(), t = Yi(), n = fp(), r = bi(), o = Is(), [i, l] = N.useState(null), [u, s] = N.useState(!1), c = N.useRef(n);
  c.current = n;
  const m = N.useRef(o);
  m.current = o, N.useEffect(() => {
    const y = (S) => {
      if (S.code === "Space" && !(S.target instanceof HTMLInputElement) && !(S.target instanceof HTMLTextAreaElement) && (S.preventDefault(), s(!0)), m.current === "admin" && (S.key === "Delete" || S.key === "Backspace") && t.length > 0) {
        const L = S.target.tagName;
        if (L === "INPUT" || L === "TEXTAREA")
          return;
        S.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (S.ctrlKey || S.metaKey) && S.key.toLowerCase() === "z" && !S.shiftKey && (S.preventDefault(), r({ type: "UNDO" })), (S.ctrlKey || S.metaKey) && (S.key.toLowerCase() === "y" || S.key.toLowerCase() === "z" && S.shiftKey) && (S.preventDefault(), r({ type: "REDO" }));
    }, x = (S) => {
      S.code === "Space" && s(!1);
    };
    return window.addEventListener("keydown", y), window.addEventListener("keyup", x), () => {
      window.removeEventListener("keydown", y), window.removeEventListener("keyup", x);
    };
  }, [r, t.length]), N.useEffect(() => {
    if (!i)
      return;
    const y = (S) => {
      const L = c.current.zoom;
      if (i.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: i.origPanX + (S.clientX - i.startX),
          panY: i.origPanY + (S.clientY - i.startY)
        });
        return;
      }
      const { dx: $, dy: z } = vv(
        S.clientX - i.startX,
        S.clientY - i.startY,
        L
      );
      if (i.kind === "move") {
        for (const bt of i.ids) {
          const pt = i.origins[bt];
          pt && r({
            type: "UPDATE_LAYER",
            id: bt,
            patch: { x: pt.x + $, y: pt.y + z },
            pushHistory: !1
          });
        }
        return;
      }
      let F = i.origX, Oe = i.origY, ze = i.origW, ot = i.origH;
      i.handle.includes("e") && (ze = Math.max(Dt, i.origW + $)), i.handle.includes("s") && (ot = Math.max(Dt, i.origH + z)), i.handle.includes("w") && (ze = Math.max(Dt, i.origW - $), F = i.origX + (i.origW - ze)), i.handle.includes("n") && (ot = Math.max(Dt, i.origH - z), Oe = i.origY + (i.origH - ot)), r({
        type: "UPDATE_LAYER",
        id: i.id,
        patch: { x: F, y: Oe, width: ze, height: ot },
        pushHistory: !1
      });
    }, x = () => {
      (i.kind === "move" || i.kind === "resize") && r({ type: "COMMIT" }), l(null);
    };
    return window.addEventListener("pointermove", y), window.addEventListener("pointerup", x), () => {
      window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", x);
    };
  }, [i, r]);
  const f = (y) => {
    y.preventDefault();
    const x = np(n.zoom * (y.deltaY < 0 ? 1.08 : 0.92), op, ip);
    r({ type: "ZOOM_SET", zoom: x });
  }, h = (y) => {
    l({
      kind: "pan",
      startX: y.clientX,
      startY: y.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, w = (y) => {
    if (y.button === 1 || y.button === 0 && u) {
      y.preventDefault(), h(y);
      return;
    }
    y.button === 0 && r({ type: "UNSELECT_ALL" });
  }, g = (y, x) => {
    As(y, o) && r({
      type: "SELECT",
      ids: [y.id],
      additive: x.shiftKey
    });
  }, v = (y) => o === "admin" ? !y.locked : Yr(y), R = (y, x) => {
    if (!v(y) || u)
      return;
    const S = t.includes(y.id) ? t : [y.id];
    t.includes(y.id) || r({ type: "SELECT", ids: [y.id] });
    const L = {};
    for (const $ of S) {
      const z = e.layers.find((F) => F.id === $);
      z && v(z) && (L[$] = { x: z.x, y: z.y });
    }
    Object.keys(L).length !== 0 && l({
      kind: "move",
      ids: Object.keys(L),
      startX: x.clientX,
      startY: x.clientY,
      origins: L
    });
  }, d = (y, x, S) => {
    S.stopPropagation(), v(y) && (r({ type: "SELECT", ids: [y.id] }), l({
      kind: "resize",
      id: y.id,
      startX: S.clientX,
      startY: S.clientY,
      origX: y.x,
      origY: y.y,
      origW: y.width,
      origH: y.height,
      handle: x
    }));
  }, a = e.layers.filter((y) => t.includes(y.id) && y.visible), p = a.length === 1 ? a[0] : null, k = p ? v(p) : !1;
  return /* @__PURE__ */ A(
    "div",
    {
      className: `chd-viewport${u ? " chd-viewport--panning" : ""}`,
      onWheel: f,
      onPointerDown: w,
      children: [
        /* @__PURE__ */ E(
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
                onPointerDown: (y) => {
                  y.button !== 0 || u || (y.stopPropagation(), r({ type: "UNSELECT_ALL" }));
                },
                children: [
                  e.layers.map((y) => /* @__PURE__ */ E(
                    wv,
                    {
                      layer: y,
                      selected: t.includes(y.id),
                      onSelect: (x) => g(y, x),
                      onMoveStart: (x) => R(y, x)
                    },
                    y.id
                  )),
                  k && p ? /* @__PURE__ */ E(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: p.x,
                        top: p.y,
                        width: p.width,
                        height: p.height
                      },
                      children: Dv.map((y) => /* @__PURE__ */ E(
                        "div",
                        {
                          className: `chd-handle chd-handle--${y}`,
                          onPointerDown: (x) => d(p, y, x)
                        },
                        y
                      ))
                    }
                  ) : p ? /* @__PURE__ */ E(
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
                  a.length > 1 ? a.map((y) => /* @__PURE__ */ E(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: y.x,
                        top: y.y,
                        width: y.width,
                        height: y.height
                      }
                    },
                    `sel-${y.id}`
                  )) : null
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ E("div", { className: "chd-viewport-hint", children: "Scroll to zoom · Space+drag to pan · Shift+click multi-select" })
      ]
    }
  );
}
function Iv() {
  const e = cp(), t = Yi(), n = bi(), r = Is(), o = r === "admin", [i, l] = N.useState(null), [u, s] = N.useState(null), c = [...e].map((f, h) => ({ layer: f, index: h })).reverse().filter(({ layer: f }) => o || As(f, r)), m = (f, h) => {
    if (f === h)
      return;
    const w = e.findIndex((v) => v.id === f), g = e.findIndex((v) => v.id === h);
    w < 0 || g < 0 || n({ type: "REORDER", fromIndex: w, toIndex: g });
  };
  return /* @__PURE__ */ A(
    "aside",
    {
      className: `chd-panel chd-layers-panel${o ? " chd-layers-panel--admin" : ""}`,
      "aria-label": "Layers",
      children: [
        /* @__PURE__ */ E("div", { className: "chd-panel-header", children: o ? "Layers" : "Editable layers" }),
        /* @__PURE__ */ E("ul", { className: "chd-layer-list", children: c.length === 0 ? /* @__PURE__ */ E("li", { className: "chd-panel-empty", children: "No editable layers" }) : c.map(({ layer: f, index: h }) => {
          const w = t.includes(f.id);
          return /* @__PURE__ */ A(
            "li",
            {
              draggable: o,
              className: `chd-layer-list-item${w ? " chd-layer-list-item--selected" : ""}${i === f.id ? " chd-layer-list-item--dragging" : ""}${u === f.id ? " chd-layer-list-item--drag-over" : ""}`,
              onDragStart: (g) => {
                if (o) {
                  if (g.target.closest("button")) {
                    g.preventDefault();
                    return;
                  }
                  g.dataTransfer.effectAllowed = "move", g.dataTransfer.setData("text/plain", f.id), l(f.id);
                }
              },
              onDragOver: (g) => {
                o && (g.preventDefault(), g.dataTransfer.dropEffect = "move", u !== f.id && s(f.id));
              },
              onDragLeave: () => {
                s((g) => g === f.id ? null : g);
              },
              onDrop: (g) => {
                g.preventDefault();
                const v = g.dataTransfer.getData("text/plain");
                v && m(v, f.id), l(null), s(null);
              },
              onDragEnd: () => {
                l(null), s(null);
              },
              children: [
                o ? /* @__PURE__ */ E("span", { className: "chd-layer-drag-handle", "aria-hidden": "true", title: "Drag to reorder", children: "⋮⋮" }) : null,
                /* @__PURE__ */ A(
                  "button",
                  {
                    type: "button",
                    className: "chd-layer-list-select",
                    onClick: (g) => n({
                      type: "SELECT",
                      ids: [f.id],
                      additive: g.shiftKey
                    }),
                    children: [
                      /* @__PURE__ */ E("span", { className: "chd-layer-list-type", children: f.type }),
                      /* @__PURE__ */ E("span", { className: "chd-layer-list-name", children: f.name })
                    ]
                  }
                ),
                o ? /* @__PURE__ */ A(lr, { children: [
                  /* @__PURE__ */ E(
                    "button",
                    {
                      type: "button",
                      className: "chd-icon-btn",
                      title: f.visible ? "Hide" : "Show",
                      onClick: () => n({
                        type: "SET_VISIBILITY",
                        id: f.id,
                        visible: !f.visible
                      }),
                      children: f.visible ? "◉" : "○"
                    }
                  ),
                  /* @__PURE__ */ E(
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
                  /* @__PURE__ */ E(
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
            f.id
          );
        }) })
      ]
    }
  );
}
function er({
  label: e,
  value: t,
  onChange: n,
  disabled: r
}) {
  return /* @__PURE__ */ A("label", { className: "chd-field", children: [
    /* @__PURE__ */ E("span", { children: e }),
    /* @__PURE__ */ E(
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
function Mv() {
  const e = cp(), t = Yi(), n = bi(), r = Is(), o = Ms(), i = r === "admin", l = e.filter((f) => t.includes(f.id)), u = l.length === 1 ? l[0] : null, s = (f) => {
    u && n({ type: "UPDATE_LAYER", id: u.id, patch: f });
  }, c = u ? i ? !u.locked : Yr(u) : !1, m = u ? i ? !u.locked : Ki(u) : !1;
  return /* @__PURE__ */ A("aside", { className: "chd-panel chd-properties-panel", "aria-label": "Properties", children: [
    /* @__PURE__ */ E("div", { className: "chd-panel-header", children: "Properties" }),
    u ? /* @__PURE__ */ A("div", { className: "chd-properties-body", children: [
      i ? /* @__PURE__ */ A("label", { className: "chd-field", children: [
        /* @__PURE__ */ E("span", { children: "Name" }),
        /* @__PURE__ */ E(
          "input",
          {
            type: "text",
            value: u.name,
            onChange: (f) => s({ name: f.target.value })
          }
        )
      ] }) : /* @__PURE__ */ A("div", { className: "chd-field", children: [
        /* @__PURE__ */ E("span", { children: "Layer" }),
        /* @__PURE__ */ E("strong", { children: u.name })
      ] }),
      /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ E(
          er,
          {
            label: "X",
            value: Math.round(u.x),
            disabled: !c,
            onChange: (f) => s({ x: f })
          }
        ),
        /* @__PURE__ */ E(
          er,
          {
            label: "Y",
            value: Math.round(u.y),
            disabled: !c,
            onChange: (f) => s({ y: f })
          }
        )
      ] }),
      /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ E(
          er,
          {
            label: "W",
            value: Math.round(u.width),
            disabled: !c,
            onChange: (f) => s({ width: f })
          }
        ),
        /* @__PURE__ */ E(
          er,
          {
            label: "H",
            value: Math.round(u.height),
            disabled: !c,
            onChange: (f) => s({ height: f })
          }
        )
      ] }),
      m && (u.type === "frame" || u.type === "rect" || u.type === "image") && /* @__PURE__ */ A("label", { className: "chd-field", children: [
        /* @__PURE__ */ E("span", { children: "Fill" }),
        /* @__PURE__ */ E(
          "input",
          {
            type: "color",
            value: u.fill && /^#/.test(u.fill) ? u.fill : "#888780",
            onChange: (f) => s({ fill: f.target.value })
          }
        )
      ] }),
      m && u.type === "text" && /* @__PURE__ */ A(lr, { children: [
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ E("span", { children: "Text" }),
          /* @__PURE__ */ E(
            "textarea",
            {
              rows: 3,
              value: u.text || "",
              onChange: (f) => s({ text: f.target.value })
            }
          )
        ] }),
        i ? /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
          /* @__PURE__ */ E(
            er,
            {
              label: "Size",
              value: u.fontSize ?? 16,
              onChange: (f) => s({ fontSize: f })
            }
          ),
          /* @__PURE__ */ A("label", { className: "chd-field", children: [
            /* @__PURE__ */ E("span", { children: "Color" }),
            /* @__PURE__ */ E(
              "input",
              {
                type: "color",
                value: u.color && /^#/.test(u.color) ? u.color : "#1a1a1a",
                onChange: (f) => s({ color: f.target.value })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ E("span", { children: "Color" }),
          /* @__PURE__ */ E(
            "input",
            {
              type: "color",
              value: u.color && /^#/.test(u.color) ? u.color : "#1a1a1a",
              onChange: (f) => s({ color: f.target.value })
            }
          )
        ] })
      ] }),
      m && u.type === "image" && /* @__PURE__ */ A(lr, { children: [
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ E("span", { children: "Image URL" }),
          /* @__PURE__ */ E(
            "input",
            {
              type: "url",
              placeholder: "https://…",
              value: u.src || "",
              onChange: (f) => s({ src: f.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ E("span", { children: "Fit" }),
          /* @__PURE__ */ A(
            "select",
            {
              value: u.objectFit || "cover",
              onChange: (f) => s({ objectFit: f.target.value }),
              children: [
                /* @__PURE__ */ E("option", { value: "cover", children: "Cover — fill page, keep photo ratio" }),
                /* @__PURE__ */ E("option", { value: "contain", children: "Contain — whole photo, may letterbox" })
              ]
            }
          )
        ] })
      ] }),
      i ? /* @__PURE__ */ A(lr, { children: [
        /* @__PURE__ */ A("div", { className: "chd-field", children: [
          /* @__PURE__ */ E("span", { children: "Pin to page" }),
          /* @__PURE__ */ E("div", { className: "chd-pin-grid", children: ["pinTop", "pinLeft", "pinRight", "pinBottom"].map((f) => {
            const h = lp(u, o.canvas.width, o.canvas.height), w = {
              pinTop: h.top,
              pinLeft: h.left,
              pinRight: h.right,
              pinBottom: h.bottom
            }[f], g = u[f];
            return /* @__PURE__ */ A("label", { className: "chd-field-checkbox", children: [
              /* @__PURE__ */ E(
                "input",
                {
                  type: "checkbox",
                  checked: g === !0 || g === void 0 && w,
                  onChange: (d) => {
                    const a = d.target.checked;
                    if (g === void 0 && w && !a) {
                      s({ [f]: !0 });
                      return;
                    }
                    s({ [f]: a });
                  }
                }
              ),
              /* @__PURE__ */ E("span", { children: {
                pinTop: "Top",
                pinLeft: "Left",
                pinRight: "Right",
                pinBottom: "Bottom"
              }[f] })
            ] }, f);
          }) }),
          /* @__PURE__ */ E("p", { className: "chd-field-hint", children: "Pin in place keeps this block at its current X/Y and size when you change page size. Pinning opposite edges stretches the block to keep those insets." })
        ] }),
        /* @__PURE__ */ E("button", { type: "button", className: "chd-btn", onClick: () => s(up()), children: "Pin in place" }),
        /* @__PURE__ */ E(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => s(sp(u, o.canvas.width, o.canvas.height)),
            children: "Fill page"
          }
        ),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ E(
            "input",
            {
              type: "checkbox",
              checked: !!u.locked,
              onChange: (f) => s({ locked: f.target.checked })
            }
          ),
          /* @__PURE__ */ E("span", { children: "Locked" })
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ E(
            "input",
            {
              type: "checkbox",
              checked: !!u.allowTransform,
              onChange: (f) => s({ allowTransform: f.target.checked })
            }
          ),
          /* @__PURE__ */ E("span", { children: "Allow transform (end user)" })
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ E(
            "input",
            {
              type: "checkbox",
              checked: rp(u),
              onChange: (f) => s({ editableContent: f.target.checked })
            }
          ),
          /* @__PURE__ */ E("span", { children: "Editable content (end user)" })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ E("p", { className: "chd-panel-empty", children: l.length > 1 ? `${l.length} layers selected` : "Select a layer" })
  ] });
}
function Qi(e, t) {
  return {
    width: Math.round(e / 25.4 * 96),
    height: Math.round(t / 25.4 * 96)
  };
}
function go(e, t) {
  return {
    width: Math.round(e * 96),
    height: Math.round(t * 96)
  };
}
const yo = Qi(210, 297), vo = Qi(297, 420), wo = Qi(148, 210), $s = [
  { id: "a4-portrait", group: "print", label: "A4 portrait", width: yo.width, height: yo.height },
  { id: "a4-landscape", group: "print", label: "A4 landscape", width: yo.height, height: yo.width },
  { id: "a3-portrait", group: "print", label: "A3 portrait", width: vo.width, height: vo.height },
  { id: "a3-landscape", group: "print", label: "A3 landscape", width: vo.height, height: vo.width },
  { id: "a5-portrait", group: "print", label: "A5 portrait", width: wo.width, height: wo.height },
  { id: "a5-landscape", group: "print", label: "A5 landscape", width: wo.height, height: wo.width },
  { id: "letter-portrait", group: "print", label: "Letter portrait", ...go(8.5, 11) },
  { id: "letter-landscape", group: "print", label: "Letter landscape", ...go(11, 8.5) },
  { id: "tabloid-portrait", group: "print", label: "Tabloid portrait", ...go(11, 17) },
  { id: "tabloid-landscape", group: "print", label: "Tabloid landscape", ...go(17, 11) },
  {
    id: "business-card",
    group: "print",
    label: "Business card",
    ...Qi(85, 55)
  },
  { id: "1080-square", group: "social", label: "Square 1080", width: 1080, height: 1080 },
  { id: "1080-story", group: "social", label: "Story 1080 × 1920", width: 1080, height: 1920 },
  { id: "1080-portrait", group: "social", label: "Portrait 1080 × 1350", width: 1080, height: 1350 },
  { id: "1200-link", group: "social", label: "Link post 1200 × 628", width: 1200, height: 628 }
], $v = [
  { id: "print", label: "Print" },
  { id: "social", label: "Social" }
];
function Eu(e) {
  return $s.find((t) => t.id === e);
}
function Fv(e, t, n) {
  if (n && Eu(n)) {
    const o = Eu(n);
    if (o.width === e && o.height === t)
      return o.id;
  }
  const r = $s.find((o) => o.width === e && o.height === t);
  return (r == null ? void 0 : r.id) ?? "custom";
}
const jv = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function Uv() {
  const e = bi(), t = Yi(), n = fp(), r = Ms(), { mode: o, canUndo: i, canRedo: l, exportDocument: u, importDocumentJson: s } = zv(), c = N.useRef(null), m = o === "admin", f = Fv(
    r.canvas.width,
    r.canvas.height,
    r.canvas.presetId
  ), h = () => {
    const d = u(), a = new Blob([JSON.stringify(d, null, 2)], { type: "application/json" }), p = URL.createObjectURL(a), k = window.document.createElement("a");
    k.href = p, k.download = "chdesigner-document.json", k.click(), URL.revokeObjectURL(p);
  }, w = async (d) => {
    if (!d)
      return;
    const a = await d.text();
    s(a) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  }, g = (d) => {
    const a = Eu(d);
    a && e({
      type: "SET_CANVAS_SIZE",
      width: a.width,
      height: a.height,
      presetId: a.id
    });
  }, v = () => {
    const d = r.layers.filter((a) => t.includes(a.id));
    for (const a of d)
      e({
        type: "UPDATE_LAYER",
        id: a.id,
        patch: up()
      });
  }, R = () => {
    const d = r.layers.filter((a) => t.includes(a.id));
    for (const a of d)
      e({
        type: "UPDATE_LAYER",
        id: a.id,
        patch: sp(a, r.canvas.width, r.canvas.height)
      });
  };
  return /* @__PURE__ */ A("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ A("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ E("span", { className: "chd-toolbar-logo-wrap", children: "Logo" }),
      /* @__PURE__ */ E("span", { className: "chd-toolbar-mode", children: m ? "Admin" : "Edit" })
    ] }),
    m ? /* @__PURE__ */ E("div", { className: "chd-toolbar-group", children: jv.map((d) => /* @__PURE__ */ A(
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
    m ? /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ A("label", { className: "chd-toolbar-field", children: [
        /* @__PURE__ */ E("span", { children: "Page" }),
        /* @__PURE__ */ A(
          "select",
          {
            className: "chd-toolbar-select",
            value: f,
            onChange: (d) => g(d.target.value),
            children: [
              f === "custom" ? /* @__PURE__ */ E("option", { value: "custom", children: "Custom" }) : null,
              $v.map((d) => /* @__PURE__ */ E("optgroup", { label: d.label, children: $s.filter((a) => a.group === d.id).map((a) => /* @__PURE__ */ E("option", { value: a.id, children: a.label }, a.id)) }, d.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ A("span", { className: "chd-toolbar-size", children: [
        Math.round(r.canvas.width),
        " × ",
        Math.round(r.canvas.height)
      ] }),
      /* @__PURE__ */ E(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: v,
          children: "Pin to page"
        }
      ),
      /* @__PURE__ */ E(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: R,
          children: "Fill page"
        }
      )
    ] }) : null,
    m ? /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ E(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "DELETE_LAYERS" }),
          children: "Delete"
        }
      ),
      /* @__PURE__ */ E(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "BRING_FORWARD" }),
          children: "Forward"
        }
      ),
      /* @__PURE__ */ E(
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
      /* @__PURE__ */ E(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !i,
          onClick: () => e({ type: "UNDO" }),
          children: "Undo"
        }
      ),
      /* @__PURE__ */ E(
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
    /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ A("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ZOOM_RESET" }), children: [
        Math.round(n.zoom * 100),
        "%"
      ] }),
      m ? /* @__PURE__ */ A(lr, { children: [
        /* @__PURE__ */ E("button", { type: "button", className: "chd-btn", onClick: h, children: "Export" }),
        /* @__PURE__ */ E("button", { type: "button", className: "chd-btn", onClick: () => {
          var d;
          return (d = c.current) == null ? void 0 : d.click();
        }, children: "Import" }),
        /* @__PURE__ */ E(
          "input",
          {
            ref: c,
            type: "file",
            accept: "application/json,.json",
            className: "chd-file-input",
            onChange: (d) => {
              var a;
              w(((a = d.target.files) == null ? void 0 : a[0]) ?? null), d.target.value = "";
            }
          }
        )
      ] }) : null
    ] })
  ] });
}
function Bv({
  mode: e = "admin",
  document: t,
  templateDocument: n,
  templateId: r,
  onDocumentChange: o,
  onInstanceChange: i,
  statusSlot: l,
  statusClassName: u
}) {
  return /* @__PURE__ */ E(Ov, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    onDocumentChange: o,
    onInstanceChange: i
  }, children: /* @__PURE__ */ A("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ E(Uv, {}),
    l ? /* @__PURE__ */ E("div", { className: `chd-status-bar${u ? ` ${u}` : ""}`, children: l }) : null,
    /* @__PURE__ */ A("div", { className: "chd-main", children: [
      /* @__PURE__ */ E(Iv, {}),
      /* @__PURE__ */ E(Av, {}),
      /* @__PURE__ */ E(Mv, {})
    ] })
  ] }) });
}
function Hv(e) {
  const t = tp(e);
  return {
    render(n) {
      t.render(
        /* @__PURE__ */ E(dg, { theme: n.theme, children: /* @__PURE__ */ E(Bv, {}) })
      );
    },
    unmount() {
      t.unmount();
    }
  };
}
export {
  Hv as default
};
