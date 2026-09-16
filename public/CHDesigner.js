(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:min(80vh,720px);min-height:520px;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:10px;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;min-width:56px;background:#000000;color:#fff;border-radius:4px;padding:5px 10px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-toolbar-field{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--chd-muted)}.chd-toolbar-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;max-width:180px}.chd-toolbar-size{font-size:11px;color:var(--chd-muted);white-space:nowrap}.chd-pin-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 8px;margin-top:4px}.chd-field-hint{margin:6px 0 0;font-size:11px;color:var(--chd-muted);line-height:1.35}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr auto auto auto;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{flex-direction:row;align-items:center;gap:8px;color:var(--chd-text)}.chd-field-checkbox input{width:auto}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:linear-gradient(45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,linear-gradient(-45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,#f0eee8;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:hidden}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function fp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o && Object.defineProperty(e, l, o.get ? o : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function dp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gc = { exports: {} }, uo = {}, vc = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir = Symbol.for("react.element"), pp = Symbol.for("react.portal"), hp = Symbol.for("react.fragment"), mp = Symbol.for("react.strict_mode"), yp = Symbol.for("react.profiler"), gp = Symbol.for("react.provider"), vp = Symbol.for("react.context"), wp = Symbol.for("react.forward_ref"), Sp = Symbol.for("react.suspense"), kp = Symbol.for("react.memo"), xp = Symbol.for("react.lazy"), Fs = Symbol.iterator;
function Ep(e) {
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
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      Ec.call(t, r) && !Cc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++)
      s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Ir, type: e, key: o, ref: i, props: l, _owner: Pu.current };
}
function Cp(e, t) {
  return { $$typeof: Ir, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Tu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ir;
}
function _p(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Us = /\/+/g;
function Go(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? _p("" + e.key) : t.toString(36);
}
function wl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ir:
          case pp:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Go(i, 0) : r, js(l) ? (n = "", e != null && (n = e.replace(Us, "$&/") + "/"), wl(l, t, n, "", function(a) {
      return a;
    })) : l != null && (Tu(l) && (l = Cp(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Us, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", js(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Go(o, u);
      i += wl(o, t, n, s, l);
    }
  else if (s = Ep(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Go(o, u++), i += wl(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Xr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return wl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Pp(e) {
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
var Ee = { current: null }, Sl = { transition: null }, Tp = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: Sl, ReactCurrentOwner: Pu };
function Pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = { map: Xr, forEach: function(e, t, n) {
  Xr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Xr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Xr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Tu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
D.Component = Bn;
D.Fragment = hp;
D.Profiler = yp;
D.PureComponent = Cu;
D.StrictMode = mp;
D.Suspense = Sp;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tp;
D.act = Pc;
D.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Sc({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Pu.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      Ec.call(t, s) && !Cc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Ir, type: e.type, key: l, ref: o, props: r, _owner: i };
};
D.createContext = function(e) {
  return e = { $$typeof: vp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: gp, _context: e }, e.Consumer = e;
};
D.createElement = _c;
D.createFactory = function(e) {
  var t = _c.bind(null, e);
  return t.type = e, t;
};
D.createRef = function() {
  return { current: null };
};
D.forwardRef = function(e) {
  return { $$typeof: wp, render: e };
};
D.isValidElement = Tu;
D.lazy = function(e) {
  return { $$typeof: xp, _payload: { _status: -1, _result: e }, _init: Pp };
};
D.memo = function(e, t) {
  return { $$typeof: kp, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function(e) {
  var t = Sl.transition;
  Sl.transition = {};
  try {
    e();
  } finally {
    Sl.transition = t;
  }
};
D.unstable_act = Pc;
D.useCallback = function(e, t) {
  return Ee.current.useCallback(e, t);
};
D.useContext = function(e) {
  return Ee.current.useContext(e);
};
D.useDebugValue = function() {
};
D.useDeferredValue = function(e) {
  return Ee.current.useDeferredValue(e);
};
D.useEffect = function(e, t) {
  return Ee.current.useEffect(e, t);
};
D.useId = function() {
  return Ee.current.useId();
};
D.useImperativeHandle = function(e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function(e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function(e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
D.useMemo = function(e, t) {
  return Ee.current.useMemo(e, t);
};
D.useReducer = function(e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
D.useRef = function(e) {
  return Ee.current.useRef(e);
};
D.useState = function(e) {
  return Ee.current.useState(e);
};
D.useSyncExternalStore = function(e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function() {
  return Ee.current.useTransition();
};
D.version = "18.3.1";
vc.exports = D;
var L = vc.exports;
const Np = /* @__PURE__ */ dp(L), _i = /* @__PURE__ */ fp({
  __proto__: null,
  default: Np
}, [L]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rp = L, Lp = Symbol.for("react.element"), Op = Symbol.for("react.fragment"), zp = Object.prototype.hasOwnProperty, Mp = Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    zp.call(t, r) && !Ap.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Lp, type: e, key: o, ref: i, props: l, _owner: Mp.current };
}
uo.Fragment = Op;
uo.jsx = Tc;
uo.jsxs = Tc;
gc.exports = uo;
var Nu = gc.exports;
const ir = Nu.Fragment, E = Nu.jsx, A = Nu.jsxs;
function $p(e) {
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
function so(e, t) {
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
var Dp = !1;
function Ip(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Fp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var jp = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(l) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(l, o), r.tags.push(l);
    }, this.isSpeedy = n.speedy === void 0 ? !Dp : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Fp(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = Ip(l);
      try {
        o.insertRule(r, o.cssRules.length);
      } catch {
      }
    } else
      l.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var l;
      return (l = r.parentNode) == null ? void 0 : l.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ge = "-ms-", Al = "-moz-", B = "-webkit-", Nc = "comm", Ru = "rule", Lu = "decl", Up = "@import", Rc = "@keyframes", Bp = "@layer", Hp = Math.abs, ao = String.fromCharCode, Wp = Object.assign;
function Vp(e, t) {
  return fe(e, 0) ^ 45 ? (((t << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0;
}
function Lc(e) {
  return e.trim();
}
function Kp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, n) {
  return e.replace(t, n);
}
function Pi(e, t) {
  return e.indexOf(t);
}
function fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function gr(e, t, n) {
  return e.slice(t, n);
}
function ut(e) {
  return e.length;
}
function Ou(e) {
  return e.length;
}
function br(e, t) {
  return t.push(e), e;
}
function Yp(e, t) {
  return e.map(t).join("");
}
var co = 1, Mn = 1, Oc = 0, Le = 0, re = 0, Hn = "";
function fo(e, t, n, r, l, o, i) {
  return { value: e, root: t, parent: n, type: r, props: l, children: o, line: co, column: Mn, length: i, return: "" };
}
function Kn(e, t) {
  return Wp(fo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Qp() {
  return re;
}
function Xp() {
  return re = Le > 0 ? fe(Hn, --Le) : 0, Mn--, re === 10 && (Mn = 1, co--), re;
}
function Ie() {
  return re = Le < Oc ? fe(Hn, Le++) : 0, Mn++, re === 10 && (Mn = 1, co++), re;
}
function ct() {
  return fe(Hn, Le);
}
function kl() {
  return Le;
}
function Fr(e, t) {
  return gr(Hn, e, t);
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
  return co = Mn = 1, Oc = ut(Hn = e), Le = 0, [];
}
function Mc(e) {
  return Hn = "", e;
}
function xl(e) {
  return Lc(Fr(Le - 1, Ti(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function bp(e) {
  for (; (re = ct()) && re < 33; )
    Ie();
  return vr(e) > 2 || vr(re) > 3 ? "" : " ";
}
function Gp(e, t) {
  for (; --t && Ie() && !(re < 48 || re > 102 || re > 57 && re < 65 || re > 70 && re < 97); )
    ;
  return Fr(e, kl() + (t < 6 && ct() == 32 && Ie() == 32));
}
function Ti(e) {
  for (; Ie(); )
    switch (re) {
      case e:
        return Le;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ti(re);
        break;
      case 40:
        e === 41 && Ti(e);
        break;
      case 92:
        Ie();
        break;
    }
  return Le;
}
function Zp(e, t) {
  for (; Ie() && e + re !== 47 + 10; )
    if (e + re === 42 + 42 && ct() === 47)
      break;
  return "/*" + Fr(t, Le - 1) + "*" + ao(e === 47 ? e : Ie());
}
function Jp(e) {
  for (; !vr(ct()); )
    Ie();
  return Fr(e, Le);
}
function qp(e) {
  return Mc(El("", null, null, null, [""], e = zc(e), 0, [0], e));
}
function El(e, t, n, r, l, o, i, u, s) {
  for (var a = 0, m = 0, d = i, h = 0, v = 0, S = 0, g = 1, _ = 1, c = 1, f = 0, p = "", k = l, y = o, x = r, w = p; _; )
    switch (S = f, f = Ie()) {
      case 40:
        if (S != 108 && fe(w, d - 1) == 58) {
          Pi(w += H(xl(f), "&", "&\f"), "&\f") != -1 && (c = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += xl(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += bp(S);
        break;
      case 92:
        w += Gp(kl() - 1, 7);
        continue;
      case 47:
        switch (ct()) {
          case 42:
          case 47:
            br(eh(Zp(Ie(), kl()), t, n), s);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * g:
        u[a++] = ut(w) * c;
      case 125 * g:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            _ = 0;
          case 59 + m:
            c == -1 && (w = H(w, /\f/g, "")), v > 0 && ut(w) - d && br(v > 32 ? Ws(w + ";", r, n, d - 1) : Ws(H(w, " ", "") + ";", r, n, d - 2), s);
            break;
          case 59:
            w += ";";
          default:
            if (br(x = Hs(w, t, n, a, m, l, u, p, k = [], y = [], d), o), f === 123)
              if (m === 0)
                El(w, t, x, x, k, o, d, u, y);
              else
                switch (h === 99 && fe(w, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    El(e, x, x, r && br(Hs(e, x, x, 0, 0, l, u, p, l, k = [], d), y), l, y, d, u, r ? k : y);
                    break;
                  default:
                    El(w, x, x, x, [""], y, 0, u, y);
                }
        }
        a = m = v = 0, g = c = 1, p = w = "", d = i;
        break;
      case 58:
        d = 1 + ut(w), v = S;
      default:
        if (g < 1) {
          if (f == 123)
            --g;
          else if (f == 125 && g++ == 0 && Xp() == 125)
            continue;
        }
        switch (w += ao(f), f * g) {
          case 38:
            c = m > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            u[a++] = (ut(w) - 1) * c, c = 1;
            break;
          case 64:
            ct() === 45 && (w += xl(Ie())), h = ct(), m = d = ut(p = w += Jp(kl())), f++;
            break;
          case 45:
            S === 45 && ut(w) == 2 && (g = 0);
        }
    }
  return o;
}
function Hs(e, t, n, r, l, o, i, u, s, a, m) {
  for (var d = l - 1, h = l === 0 ? o : [""], v = Ou(h), S = 0, g = 0, _ = 0; S < r; ++S)
    for (var c = 0, f = gr(e, d + 1, d = Hp(g = i[S])), p = e; c < v; ++c)
      (p = Lc(g > 0 ? h[c] + " " + f : H(f, /&\f/g, h[c]))) && (s[_++] = p);
  return fo(e, t, n, l === 0 ? Ru : u, s, a, m);
}
function eh(e, t, n) {
  return fo(e, t, n, Nc, ao(Qp()), gr(e, 2, -2), 0);
}
function Ws(e, t, n, r) {
  return fo(e, t, n, Lu, gr(e, 0, r), gr(e, r + 1, -1), r);
}
function _n(e, t) {
  for (var n = "", r = Ou(e), l = 0; l < r; l++)
    n += t(e[l], l, e, t) || "";
  return n;
}
function th(e, t, n, r) {
  switch (e.type) {
    case Bp:
      if (e.children.length)
        break;
    case Up:
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
function nh(e) {
  var t = Ou(e);
  return function(n, r, l, o) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, l, o) || "";
    return i;
  };
}
function rh(e) {
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
var lh = function(t, n, r) {
  for (var l = 0, o = 0; l = o, o = ct(), l === 38 && o === 12 && (n[r] = 1), !vr(o); )
    Ie();
  return Fr(t, Le);
}, oh = function(t, n) {
  var r = -1, l = 44;
  do
    switch (vr(l)) {
      case 0:
        l === 38 && ct() === 12 && (n[r] = 1), t[r] += lh(Le - 1, n, r);
        break;
      case 2:
        t[r] += xl(l);
        break;
      case 4:
        if (l === 44) {
          t[++r] = ct() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ao(l);
    }
  while (l = Ie());
  return t;
}, ih = function(t, n) {
  return Mc(oh(zc(t), n));
}, Vs = /* @__PURE__ */ new WeakMap(), uh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, l = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Vs.get(r)) && !l) {
      Vs.set(t, !0);
      for (var o = [], i = ih(n, o), u = r.props, s = 0, a = 0; s < i.length; s++)
        for (var m = 0; m < u.length; m++, a++)
          t.props[a] = o[s] ? i[s].replace(/&\f/g, u[m]) : u[m] + " " + i[s];
    }
  }
}, sh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function $c(e, t) {
  switch (Vp(e, t)) {
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
      return B + e + Al + e + ge + e + e;
    case 6828:
    case 4268:
      return B + e + ge + e + e;
    case 6165:
      return B + e + ge + "flex-" + e + e;
    case 5187:
      return B + e + H(e, /(\w+).+(:[^]+)/, B + "box-$1$2" + ge + "flex-$1$2") + e;
    case 5443:
      return B + e + ge + "flex-item-" + H(e, /flex-|-self/, "") + e;
    case 4675:
      return B + e + ge + "flex-line-pack" + H(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return B + e + ge + H(e, "shrink", "negative") + e;
    case 5292:
      return B + e + ge + H(e, "basis", "preferred-size") + e;
    case 6060:
      return B + "box-" + H(e, "-grow", "") + B + e + ge + H(e, "grow", "positive") + e;
    case 4554:
      return B + H(e, /([^-])(transform)/g, "$1" + B + "$2") + e;
    case 6187:
      return H(H(H(e, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, B + "$1$`$1");
    case 4968:
      return H(H(e, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + ge + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + B + e + e;
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
            return H(e, /(.+:)(.+)-([^]+)/, "$1" + B + "$2-$3$1" + Al + (fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Pi(e, "stretch") ? $c(H(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (fe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (fe(e, ut(e) - 3 - (~Pi(e, "!important") && 10))) {
        case 107:
          return H(e, ":", ":" + B) + e;
        case 101:
          return H(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + B + (fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + B + "$2$3$1" + ge + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (fe(e, t + 11)) {
        case 114:
          return B + e + ge + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return B + e + ge + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return B + e + ge + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return B + e + ge + e + e;
  }
  return e;
}
var ah = function(t, n, r, l) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Lu:
        t.return = $c(t.value, t.length);
        break;
      case Rc:
        return _n([Kn(t, {
          value: H(t.value, "@", "@" + B)
        })], l);
      case Ru:
        if (t.length)
          return Yp(t.props, function(o) {
            switch (Kp(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return _n([Kn(t, {
                  props: [H(o, /:(read-\w+)/, ":" + Al + "$1")]
                })], l);
              case "::placeholder":
                return _n([Kn(t, {
                  props: [H(o, /:(plac\w+)/, ":" + B + "input-$1")]
                }), Kn(t, {
                  props: [H(o, /:(plac\w+)/, ":" + Al + "$1")]
                }), Kn(t, {
                  props: [H(o, /:(plac\w+)/, ge + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, ch = [ah], fh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var _ = g.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var l = t.stylisPlugins || ch, o = {}, i, u = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var _ = g.getAttribute("data-emotion").split(" "), c = 1; c < _.length; c++)
        o[_[c]] = !0;
      u.push(g);
    }
  );
  var s, a = [uh, sh];
  {
    var m, d = [th, rh(function(g) {
      m.insert(g);
    })], h = nh(a.concat(l, d)), v = function(_) {
      return _n(qp(_), h);
    };
    s = function(_, c, f, p) {
      m = f, v(_ ? _ + "{" + c.styles + "}" : c.styles), p && (S.inserted[c.name] = !0);
    };
  }
  var S = {
    key: n,
    sheet: new jp({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: s
  };
  return S.sheet.hydrate(u), S;
}, Dc = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae = typeof Symbol == "function" && Symbol.for, zu = ae ? Symbol.for("react.element") : 60103, Mu = ae ? Symbol.for("react.portal") : 60106, po = ae ? Symbol.for("react.fragment") : 60107, ho = ae ? Symbol.for("react.strict_mode") : 60108, mo = ae ? Symbol.for("react.profiler") : 60114, yo = ae ? Symbol.for("react.provider") : 60109, go = ae ? Symbol.for("react.context") : 60110, Au = ae ? Symbol.for("react.async_mode") : 60111, vo = ae ? Symbol.for("react.concurrent_mode") : 60111, wo = ae ? Symbol.for("react.forward_ref") : 60112, So = ae ? Symbol.for("react.suspense") : 60113, dh = ae ? Symbol.for("react.suspense_list") : 60120, ko = ae ? Symbol.for("react.memo") : 60115, xo = ae ? Symbol.for("react.lazy") : 60116, ph = ae ? Symbol.for("react.block") : 60121, hh = ae ? Symbol.for("react.fundamental") : 60117, mh = ae ? Symbol.for("react.responder") : 60118, yh = ae ? Symbol.for("react.scope") : 60119;
function Ue(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case zu:
        switch (e = e.type, e) {
          case Au:
          case vo:
          case po:
          case mo:
          case ho:
          case So:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case go:
              case wo:
              case xo:
              case ko:
              case yo:
                return e;
              default:
                return t;
            }
        }
      case Mu:
        return t;
    }
  }
}
function Ic(e) {
  return Ue(e) === vo;
}
V.AsyncMode = Au;
V.ConcurrentMode = vo;
V.ContextConsumer = go;
V.ContextProvider = yo;
V.Element = zu;
V.ForwardRef = wo;
V.Fragment = po;
V.Lazy = xo;
V.Memo = ko;
V.Portal = Mu;
V.Profiler = mo;
V.StrictMode = ho;
V.Suspense = So;
V.isAsyncMode = function(e) {
  return Ic(e) || Ue(e) === Au;
};
V.isConcurrentMode = Ic;
V.isContextConsumer = function(e) {
  return Ue(e) === go;
};
V.isContextProvider = function(e) {
  return Ue(e) === yo;
};
V.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zu;
};
V.isForwardRef = function(e) {
  return Ue(e) === wo;
};
V.isFragment = function(e) {
  return Ue(e) === po;
};
V.isLazy = function(e) {
  return Ue(e) === xo;
};
V.isMemo = function(e) {
  return Ue(e) === ko;
};
V.isPortal = function(e) {
  return Ue(e) === Mu;
};
V.isProfiler = function(e) {
  return Ue(e) === mo;
};
V.isStrictMode = function(e) {
  return Ue(e) === ho;
};
V.isSuspense = function(e) {
  return Ue(e) === So;
};
V.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === po || e === vo || e === mo || e === ho || e === So || e === dh || typeof e == "object" && e !== null && (e.$$typeof === xo || e.$$typeof === ko || e.$$typeof === yo || e.$$typeof === go || e.$$typeof === wo || e.$$typeof === hh || e.$$typeof === mh || e.$$typeof === yh || e.$$typeof === ph);
};
V.typeOf = Ue;
Dc.exports = V;
var gh = Dc.exports, Fc = gh, vh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, jc = {};
jc[Fc.ForwardRef] = vh;
jc[Fc.Memo] = wh;
var Sh = !0;
function Uc(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(l) {
    e[l] !== void 0 ? t.push(e[l] + ";") : l && (r += l + " ");
  }), r;
}
var $u = function(t, n, r) {
  var l = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Sh === !1) && t.registered[l] === void 0 && (t.registered[l] = n.styles);
}, Du = function(t, n, r) {
  $u(t, n, r);
  var l = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + l : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function kh(e) {
  for (var t = 0, n, r = 0, l = e.length; l >= 4; ++r, l -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (l) {
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
var xh = {
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
}, Eh = !1, Ch = /[A-Z]|^ms/g, _h = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Bc = function(t) {
  return t.charCodeAt(1) === 45;
}, Ks = function(t) {
  return t != null && typeof t != "boolean";
}, Zo = /* @__PURE__ */ Ac(function(e) {
  return Bc(e) ? e : e.replace(Ch, "-$&").toLowerCase();
}), Ys = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(_h, function(r, l, o) {
          return st = {
            name: l,
            styles: o,
            next: st
          }, l;
        });
  }
  return xh[t] !== 1 && !Bc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Ph = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      var l = n;
      if (l.anim === 1)
        return st = {
          name: l.name,
          styles: l.styles,
          next: st
        }, l.name;
      var o = n;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            st = {
              name: i.name,
              styles: i.styles,
              next: st
            }, i = i.next;
        var u = o.styles + ";";
        return u;
      }
      return Th(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = st, a = n(e);
        return st = s, wr(e, t, a);
      }
      break;
    }
  }
  var m = n;
  if (t == null)
    return m;
  var d = t[m];
  return d !== void 0 ? d : m;
}
function Th(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var l = 0; l < n.length; l++)
      r += wr(e, t, n[l]) + ";";
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += o + "{" + t[u] + "}" : Ks(u) && (r += Zo(o) + ":" + Ys(o, u) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && Eh)
          throw new Error(Ph);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Ks(i[s]) && (r += Zo(o) + ":" + Ys(o, i[s]) + ";");
        else {
          var a = wr(e, t, i);
          switch (o) {
            case "animation":
            case "animationName": {
              r += Zo(o) + ":" + a + ";";
              break;
            }
            default:
              r += o + "{" + a + "}";
          }
        }
      }
    }
  return r;
}
var Qs = /label:\s*([^\s;{]+)\s*(;|$)/g, st;
function Eo(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, l = "";
  st = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, l += wr(n, t, o);
  else {
    var i = o;
    l += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (l += wr(n, t, e[u]), r) {
      var s = o;
      l += s[u];
    }
  Qs.lastIndex = 0;
  for (var a = "", m; (m = Qs.exec(l)) !== null; )
    a += "-" + m[1];
  var d = kh(l) + a;
  return {
    name: d,
    styles: l,
    next: st
  };
}
var Nh = function(t) {
  return t();
}, Hc = _i["useInsertionEffect"] ? _i["useInsertionEffect"] : !1, Wc = Hc || Nh, Xs = Hc || L.useLayoutEffect, Rh = !1, Vc = /* @__PURE__ */ L.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ fh({
    key: "css"
  }) : null
);
Vc.Provider;
var Iu = function(t) {
  return /* @__PURE__ */ L.forwardRef(function(n, r) {
    var l = L.useContext(Vc);
    return t(n, l, r);
  });
}, jr = /* @__PURE__ */ L.createContext({}), Fu = {}.hasOwnProperty, Ni = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Lh = function(t, n) {
  var r = {};
  for (var l in n)
    Fu.call(n, l) && (r[l] = n[l]);
  return r[Ni] = t, r;
}, Oh = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return $u(n, r, l), Wc(function() {
    return Du(n, r, l);
  }), null;
}, zh = /* @__PURE__ */ Iu(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var l = e[Ni], o = [r], i = "";
  typeof e.className == "string" ? i = Uc(t.registered, o, e.className) : e.className != null && (i = e.className + " ");
  var u = Eo(o, void 0, L.useContext(jr));
  i += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    Fu.call(e, a) && a !== "css" && a !== Ni && !Rh && (s[a] = e[a]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(Oh, {
    cache: t,
    serialized: u,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ L.createElement(l, s));
}), Mh = zh, Jo = { exports: {} }, bs;
function Ah() {
  return bs || (bs = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var l = arguments[r];
          for (var o in l)
            ({}).hasOwnProperty.call(l, o) && (n[o] = l[o]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Jo)), Jo.exports;
}
Ah();
var Gs = function(t, n) {
  var r = arguments;
  if (n == null || !Fu.call(n, "css"))
    return L.createElement.apply(void 0, r);
  var l = r.length, o = new Array(l);
  o[0] = Mh, o[1] = Lh(t, n);
  for (var i = 2; i < l; i++)
    o[i] = r[i];
  return L.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Gs || (Gs = {}));
var $h = /* @__PURE__ */ Iu(function(e, t) {
  var n = e.styles, r = Eo([n], void 0, L.useContext(jr)), l = L.useRef();
  return Xs(function() {
    var o = t.key + "-global", i = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", o), i.hydrate([s])), l.current = [i, u], function() {
      i.flush();
    };
  }, [t]), Xs(function() {
    var o = l.current, i = o[0], u = o[1];
    if (u) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && Du(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), Dh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ih = /* @__PURE__ */ Ac(
  function(e) {
    return Dh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Fh = !1, jh = Ih, Uh = function(t) {
  return t !== "theme";
}, Zs = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? jh : Uh;
}, Js = function(t, n, r) {
  var l;
  if (n) {
    var o = n.shouldForwardProp;
    l = t.__emotion_forwardProp && o ? function(i) {
      return t.__emotion_forwardProp(i) && o(i);
    } : o;
  }
  return typeof l != "function" && r && (l = t.__emotion_forwardProp), l;
}, Bh = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return $u(n, r, l), Wc(function() {
    return Du(n, r, l);
  }), null;
}, Hh = function e(t, n) {
  var r = t.__emotion_real === t, l = r && t.__emotion_base || t, o, i;
  n !== void 0 && (o = n.label, i = n.target);
  var u = Js(t, n, r), s = u || Zs(l), a = !s("as");
  return function() {
    var m = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && d.push("label:" + o + ";"), m[0] == null || m[0].raw === void 0)
      d.push.apply(d, m);
    else {
      var h = m[0];
      d.push(h[0]);
      for (var v = m.length, S = 1; S < v; S++)
        d.push(m[S], h[S]);
    }
    var g = Iu(function(_, c, f) {
      var p = a && _.as || l, k = "", y = [], x = _;
      if (_.theme == null) {
        x = {};
        for (var w in _)
          x[w] = _[w];
        x.theme = L.useContext(jr);
      }
      typeof _.className == "string" ? k = Uc(c.registered, y, _.className) : _.className != null && (k = _.className + " ");
      var R = Eo(d.concat(y), c.registered, x);
      k += c.key + "-" + R.name, i !== void 0 && (k += " " + i);
      var I = a && u === void 0 ? Zs(p) : s, z = {};
      for (var F in _)
        a && F === "as" || I(F) && (z[F] = _[F]);
      return z.className = k, f && (z.ref = f), /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(Bh, {
        cache: c,
        serialized: R,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ L.createElement(p, z));
    });
    return g.displayName = o !== void 0 ? o : "Styled(" + (typeof l == "string" ? l : l.displayName || l.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = l, g.__emotion_styles = d, g.__emotion_forwardProp = u, Object.defineProperty(g, "toString", {
      value: function() {
        return i === void 0 && Fh ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), g.withComponent = function(_, c) {
      var f = e(_, de({}, n, c, {
        shouldForwardProp: Js(g, c, !0)
      }));
      return f.apply(void 0, d);
    }, g;
  };
}, Wh = [
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
], qs = Hh.bind(null);
Wh.forEach(function(e) {
  qs[e] = qs(e);
});
function Vh(e) {
  return e == null || Object.keys(e).length === 0;
}
function Kh(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ E($h, {
    styles: typeof t == "function" ? (l) => t(Vh(l) ? n : l) : t
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
function Yh(e) {
  return ea[0] = e, Eo(ea);
}
function dn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Kc(e) {
  if (/* @__PURE__ */ L.isValidElement(e) || !dn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Kc(e[n]);
  }), t;
}
function $l(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? de({}, e) : e;
  return dn(e) && dn(t) && Object.keys(t).forEach((l) => {
    /* @__PURE__ */ L.isValidElement(t[l]) ? r[l] = t[l] : dn(t[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, l) && dn(e[l]) ? r[l] = $l(e[l], t[l], n) : n.clone ? r[l] = dn(t[l]) ? Kc(t[l]) : t[l] : r[l] = t[l];
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
function bh(e) {
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
  } = e, l = so(e, Qh), o = Xh(t), i = Object.keys(o);
  function u(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function s(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function a(h, v) {
    const S = i.indexOf(v);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(S !== -1 && typeof t[i[S]] == "number" ? t[i[S]] : v) - r / 100}${n})`;
  }
  function m(h) {
    return i.indexOf(h) + 1 < i.length ? a(h, i[i.indexOf(h) + 1]) : u(h);
  }
  function d(h) {
    const v = i.indexOf(h);
    return v === 0 ? u(i[1]) : v === i.length - 1 ? s(i[v]) : a(h, i[i.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return de({
    keys: i,
    values: o,
    up: u,
    down: s,
    between: a,
    only: m,
    not: d,
    unit: n
  }, l);
}
const Gh = {
  borderRadius: 4
}, Zh = Gh;
function ur(e, t) {
  return t ? $l(e, t, {
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
    const o = r.breakpoints || ta;
    return t.reduce((i, u, s) => (i[o.up(o.keys[s])] = n(t[s]), i), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || ta;
    return Object.keys(t).reduce((i, u) => {
      if (Object.keys(o.values || ju).indexOf(u) !== -1) {
        const s = o.up(u);
        i[s] = n(t[u], u);
      } else {
        const s = u;
        i[s] = t[s];
      }
      return i;
    }, {});
  }
  return n(t);
}
function Jh(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, l) => {
    const o = e.up(l);
    return r[o] = {}, r;
  }, {})) || {};
}
function na(e, t) {
  return e.reduce((n, r) => {
    const l = n[r];
    return (!l || Object.keys(l).length === 0) && delete n[r], n;
  }, t);
}
function Yc(e) {
  if (typeof e != "string")
    throw new Error($p(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Co(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((l, o) => l && l[o] ? l[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, l) => r && r[l] != null ? r[l] : null, e);
}
function Dl(e, t, n, r = n) {
  let l;
  return typeof e == "function" ? l = e(n) : Array.isArray(e) ? l = e[n] || r : l = Co(e, n) || r, t && (l = t(l, r, e)), l;
}
function ne(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: l
  } = e, o = (i) => {
    if (i[t] == null)
      return null;
    const u = i[t], s = i.theme, a = Co(s, r) || {};
    return St(i, u, (d) => {
      let h = Dl(a, l, d);
      return d === h && typeof d == "string" && (h = Dl(a, l, `${t}${d === "default" ? "" : Yc(d)}`, d)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function qh(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const em = {
  m: "margin",
  p: "padding"
}, tm = {
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
}, nm = qh((e) => {
  if (e.length > 2)
    if (ra[e])
      e = ra[e];
    else
      return [e];
  const [t, n] = e.split(""), r = em[t], l = tm[n] || "";
  return Array.isArray(l) ? l.map((o) => r + o) : [r + l];
}), Uu = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Bu = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Uu, ...Bu];
function Ur(e, t, n, r) {
  var l;
  const o = (l = Co(e, t, !1)) != null ? l : n;
  return typeof o == "number" ? (i) => typeof i == "string" ? i : o * i : Array.isArray(o) ? (i) => typeof i == "string" ? i : o[i] : typeof o == "function" ? o : () => {
  };
}
function Qc(e) {
  return Ur(e, "spacing", 8);
}
function Br(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function rm(e, t) {
  return (n) => e.reduce((r, l) => (r[l] = Br(t, n), r), {});
}
function lm(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const l = nm(n), o = rm(l, r), i = e[n];
  return St(e, i, o);
}
function Xc(e, t) {
  const n = Qc(e.theme);
  return Object.keys(e).map((r) => lm(e, t, r, n)).reduce(ur, {});
}
function J(e) {
  return Xc(e, Uu);
}
J.propTypes = {};
J.filterProps = Uu;
function q(e) {
  return Xc(e, Bu);
}
q.propTypes = {};
q.filterProps = Bu;
function om(e = 8) {
  if (e.mui)
    return e;
  const t = Qc({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((o) => {
    const i = t(o);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function _o(...e) {
  const t = e.reduce((r, l) => (l.filterProps.forEach((o) => {
    r[o] = l;
  }), r), {}), n = (r) => Object.keys(r).reduce((l, o) => t[o] ? ur(l, t[o](r)) : l, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, l) => r.concat(l.filterProps), []), n;
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
const im = Ge("border", We), um = Ge("borderTop", We), sm = Ge("borderRight", We), am = Ge("borderBottom", We), cm = Ge("borderLeft", We), fm = Ge("borderColor"), dm = Ge("borderTopColor"), pm = Ge("borderRightColor"), hm = Ge("borderBottomColor"), mm = Ge("borderLeftColor"), ym = Ge("outline", We), gm = Ge("outlineColor"), Po = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ur(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Br(t, r)
    });
    return St(e, e.borderRadius, n);
  }
  return null;
};
Po.propTypes = {};
Po.filterProps = ["borderRadius"];
_o(im, um, sm, am, cm, fm, dm, pm, hm, mm, Po, ym, gm);
const To = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      gap: Br(t, r)
    });
    return St(e, e.gap, n);
  }
  return null;
};
To.propTypes = {};
To.filterProps = ["gap"];
const No = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Br(t, r)
    });
    return St(e, e.columnGap, n);
  }
  return null;
};
No.propTypes = {};
No.filterProps = ["columnGap"];
const Ro = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Br(t, r)
    });
    return St(e, e.rowGap, n);
  }
  return null;
};
Ro.propTypes = {};
Ro.filterProps = ["rowGap"];
const vm = ne({
  prop: "gridColumn"
}), wm = ne({
  prop: "gridRow"
}), Sm = ne({
  prop: "gridAutoFlow"
}), km = ne({
  prop: "gridAutoColumns"
}), xm = ne({
  prop: "gridAutoRows"
}), Em = ne({
  prop: "gridTemplateColumns"
}), Cm = ne({
  prop: "gridTemplateRows"
}), _m = ne({
  prop: "gridTemplateAreas"
}), Pm = ne({
  prop: "gridArea"
});
_o(To, No, Ro, vm, wm, Sm, km, xm, Em, Cm, _m, Pm);
function Pn(e, t) {
  return t === "grey" ? t : e;
}
const Tm = ne({
  prop: "color",
  themeKey: "palette",
  transform: Pn
}), Nm = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Pn
}), Rm = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Pn
});
_o(Tm, Nm, Rm);
function $e(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Lm = ne({
  prop: "width",
  transform: $e
}), Hu = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, l;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ju[n];
      return o ? ((l = e.theme) == null || (l = l.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: $e(n)
      };
    };
    return St(e, e.maxWidth, t);
  }
  return null;
};
Hu.filterProps = ["maxWidth"];
const Om = ne({
  prop: "minWidth",
  transform: $e
}), zm = ne({
  prop: "height",
  transform: $e
}), Mm = ne({
  prop: "maxHeight",
  transform: $e
}), Am = ne({
  prop: "minHeight",
  transform: $e
});
ne({
  prop: "size",
  cssProperty: "width",
  transform: $e
});
ne({
  prop: "size",
  cssProperty: "height",
  transform: $e
});
const $m = ne({
  prop: "boxSizing"
});
_o(Lm, Hu, Om, zm, Mm, Am, $m);
const Dm = {
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
    style: Po
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
    style: To
  },
  rowGap: {
    style: Ro
  },
  columnGap: {
    style: No
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
    transform: $e
  },
  maxWidth: {
    style: Hu
  },
  minWidth: {
    transform: $e
  },
  height: {
    transform: $e
  },
  maxHeight: {
    transform: $e
  },
  minHeight: {
    transform: $e
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
}, bc = Dm;
function Im(...e) {
  const t = e.reduce((r, l) => r.concat(Object.keys(l)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Fm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jm() {
  function e(n, r, l, o) {
    const i = {
      [n]: r,
      theme: l
    }, u = o[n];
    if (!u)
      return {
        [n]: r
      };
    const {
      cssProperty: s = n,
      themeKey: a,
      transform: m,
      style: d
    } = u;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = Co(l, a) || {};
    return d ? d(i) : St(i, r, (S) => {
      let g = Dl(h, m, S);
      return S === g && typeof S == "string" && (g = Dl(h, m, `${n}${S === "default" ? "" : Yc(S)}`, S)), s === !1 ? g : {
        [s]: g
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: l,
      theme: o = {},
      nested: i
    } = n || {};
    if (!l)
      return null;
    const u = (r = o.unstable_sxConfig) != null ? r : bc;
    function s(a) {
      let m = a;
      if (typeof a == "function")
        m = a(o);
      else if (typeof a != "object")
        return a;
      if (!m)
        return null;
      const d = Jh(o.breakpoints), h = Object.keys(d);
      let v = d;
      return Object.keys(m).forEach((S) => {
        const g = Fm(m[S], o);
        if (g != null)
          if (typeof g == "object")
            if (u[S])
              v = ur(v, e(S, g, o, u));
            else {
              const _ = St({
                theme: o
              }, g, (c) => ({
                [S]: c
              }));
              Im(_, g) ? v[S] = t({
                sx: g,
                theme: o,
                nested: !0
              }) : v = ur(v, _);
            }
          else
            v = ur(v, e(S, g, o, u));
      }), !i && o.modularCssLayers ? {
        "@layer sx": na(h, v)
      } : na(h, v);
    }
    return Array.isArray(l) ? l.map(s) : s(l);
  }
  return t;
}
const Gc = jm();
Gc.filterProps = ["sx"];
const Um = Gc;
function Bm(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Hm = ["breakpoints", "palette", "spacing", "shape"];
function Wm(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: l,
    shape: o = {}
  } = e, i = so(e, Hm), u = bh(n), s = om(l);
  let a = $l({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: de({
      mode: "light"
    }, r),
    spacing: s,
    shape: de({}, Zh, o)
  }, i);
  return a.applyStyles = Bm, a = t.reduce((m, d) => $l(m, d), a), a.unstable_sxConfig = de({}, bc, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(d) {
    return Um({
      sx: d,
      theme: this
    });
  }, a;
}
function Vm(e) {
  return Object.keys(e).length === 0;
}
function Wu(e = null) {
  const t = L.useContext(jr);
  return !t || Vm(t) ? e : t;
}
const Km = Wm();
function Ym(e = Km) {
  return Wu(e);
}
function qo(e) {
  const t = Yh(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Qm({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Ym(n), l = t && r[t] || r;
  let o = typeof e == "function" ? e(l) : e;
  return l.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => qo(typeof i == "function" ? i(l) : i)) : o = qo(o)), /* @__PURE__ */ E(Kh, {
    styles: o
  });
}
const Xm = typeof window < "u" ? L.useLayoutEffect : L.useEffect, bm = Xm;
let la = 0;
function Gm(e) {
  const [t, n] = L.useState(e), r = e || t;
  return L.useEffect(() => {
    t == null && (la += 1, n(`mui-${la}`));
  }, [t]), r;
}
const oa = _i["useId".toString()];
function Zm(e) {
  if (oa !== void 0) {
    const t = oa();
    return e ?? t;
  }
  return Gm(e);
}
const Jm = /* @__PURE__ */ L.createContext(null), Zc = Jm;
function Jc() {
  return L.useContext(Zc);
}
const qm = typeof Symbol == "function" && Symbol.for, ey = qm ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ty(e, t) {
  return typeof t == "function" ? t(e) : de({}, e, t);
}
function ny(e) {
  const {
    children: t,
    theme: n
  } = e, r = Jc(), l = L.useMemo(() => {
    const o = r === null ? n : ty(r, n);
    return o != null && (o[ey] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ E(Zc.Provider, {
    value: l,
    children: t
  });
}
const ry = ["value"], ly = /* @__PURE__ */ L.createContext();
function oy(e) {
  let {
    value: t
  } = e, n = so(e, ry);
  return /* @__PURE__ */ E(ly.Provider, de({
    value: t ?? !0
  }, n));
}
const iy = /* @__PURE__ */ L.createContext(void 0);
function uy({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ E(iy.Provider, {
    value: e,
    children: t
  });
}
function sy(e) {
  const t = Wu(), n = Zm() || "", {
    modularCssLayers: r
  } = e;
  let l = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? l = "" : typeof r == "string" ? l = r.replace(/mui(?!\.)/g, l) : l = `@layer ${l};`, bm(() => {
    const o = document.querySelector("head");
    if (!o)
      return;
    const i = o.firstChild;
    if (l) {
      var u;
      if (i && (u = i.hasAttribute) != null && u.call(i, "data-mui-layer-order") && i.getAttribute("data-mui-layer-order") === n)
        return;
      const a = document.createElement("style");
      a.setAttribute("data-mui-layer-order", n), a.textContent = l, o.prepend(a);
    } else {
      var s;
      (s = o.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || s.remove();
    }
  }, [l, n]), l ? /* @__PURE__ */ E(Qm, {
    styles: l
  }) : null;
}
const ia = {};
function ua(e, t, n, r = !1) {
  return L.useMemo(() => {
    const l = e && t[e] || t;
    if (typeof n == "function") {
      const o = n(l), i = e ? de({}, t, {
        [e]: o
      }) : o;
      return r ? () => i : i;
    }
    return e ? de({}, t, {
      [e]: n
    }) : de({}, t, n);
  }, [e, t, n, r]);
}
function ay(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, l = Wu(ia), o = Jc() || ia, i = ua(r, l, n), u = ua(r, o, n, !0), s = i.direction === "rtl", a = sy(i);
  return /* @__PURE__ */ E(ny, {
    theme: u,
    children: /* @__PURE__ */ E(jr.Provider, {
      value: i,
      children: /* @__PURE__ */ E(oy, {
        value: s,
        children: /* @__PURE__ */ A(uy, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const cy = ["theme"];
function fy(e) {
  let {
    theme: t
  } = e, n = so(e, cy);
  const r = t[Bs];
  let l = r || t;
  return typeof t != "function" && (r && !r.vars ? l = de({}, r, {
    vars: null
  }) : t && !t.vars && (l = de({}, t, {
    vars: null
  }))), /* @__PURE__ */ E(ay, de({}, n, {
    themeId: r ? Bs : void 0,
    theme: l
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
  function t(P, T) {
    var N = P.length;
    P.push(T);
    e:
      for (; 0 < N; ) {
        var M = N - 1 >>> 1, j = P[M];
        if (0 < l(j, T))
          P[M] = T, P[N] = j, N = M;
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
    var T = P[0], N = P.pop();
    if (N !== T) {
      P[0] = N;
      e:
        for (var M = 0, j = P.length, ht = j >>> 1; M < ht; ) {
          var Se = 2 * (M + 1) - 1, bo = P[Se], Xt = Se + 1, Qr = P[Xt];
          if (0 > l(bo, N))
            Xt < j && 0 > l(Qr, bo) ? (P[M] = Qr, P[Xt] = N, M = Xt) : (P[M] = bo, P[Se] = N, M = Se);
          else if (Xt < j && 0 > l(Qr, N))
            P[M] = Qr, P[Xt] = N, M = Xt;
          else
            break e;
        }
    }
    return T;
  }
  function l(P, T) {
    var N = P.sortIndex - T.sortIndex;
    return N !== 0 ? N : P.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], a = [], m = 1, d = null, h = 3, v = !1, S = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var T = n(a); T !== null; ) {
      if (T.callback === null)
        r(a);
      else if (T.startTime <= P)
        r(a), T.sortIndex = T.expirationTime, t(s, T);
      else
        break;
      T = n(a);
    }
  }
  function k(P) {
    if (g = !1, p(P), !S)
      if (n(s) !== null)
        S = !0, pt(y);
      else {
        var T = n(a);
        T !== null && $(k, T.startTime - P);
      }
  }
  function y(P, T) {
    S = !1, g && (g = !1, c(R), R = -1), v = !0;
    var N = h;
    try {
      for (p(T), d = n(s); d !== null && (!(d.expirationTime > T) || P && !F()); ) {
        var M = d.callback;
        if (typeof M == "function") {
          d.callback = null, h = d.priorityLevel;
          var j = M(d.expirationTime <= T);
          T = e.unstable_now(), typeof j == "function" ? d.callback = j : d === n(s) && r(s), p(T);
        } else
          r(s);
        d = n(s);
      }
      if (d !== null)
        var ht = !0;
      else {
        var Se = n(a);
        Se !== null && $(k, Se.startTime - T), ht = !1;
      }
      return ht;
    } finally {
      d = null, h = N, v = !1;
    }
  }
  var x = !1, w = null, R = -1, I = 5, z = -1;
  function F() {
    return !(e.unstable_now() - z < I);
  }
  function Oe() {
    if (w !== null) {
      var P = e.unstable_now();
      z = P;
      var T = !0;
      try {
        T = w(!0, P);
      } finally {
        T ? ze() : (x = !1, w = null);
      }
    } else
      x = !1;
  }
  var ze;
  if (typeof f == "function")
    ze = function() {
      f(Oe);
    };
  else if (typeof MessageChannel < "u") {
    var lt = new MessageChannel(), Qt = lt.port2;
    lt.port1.onmessage = Oe, ze = function() {
      Qt.postMessage(null);
    };
  } else
    ze = function() {
      _(Oe, 0);
    };
  function pt(P) {
    w = P, x || (x = !0, ze());
  }
  function $(P, T) {
    R = _(function() {
      P(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    S || v || (S = !0, pt(y));
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
        var T = 3;
        break;
      default:
        T = h;
    }
    var N = h;
    h = T;
    try {
      return P();
    } finally {
      h = N;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, T) {
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
    var N = h;
    h = P;
    try {
      return T();
    } finally {
      h = N;
    }
  }, e.unstable_scheduleCallback = function(P, T, N) {
    var M = e.unstable_now();
    switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? M + N : M) : N = M, P) {
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
    return j = N + j, P = { id: m++, callback: T, priorityLevel: P, startTime: N, expirationTime: j, sortIndex: -1 }, N > M ? (P.sortIndex = N, t(a, P), n(s) === null && P === n(a) && (g ? (c(R), R = -1) : g = !0, $(k, N - M))) : (P.sortIndex = j, t(s, P), S || v || (S = !0, pt(y))), P;
  }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(P) {
    var T = h;
    return function() {
      var N = h;
      h = T;
      try {
        return P.apply(this, arguments);
      } finally {
        h = N;
      }
    };
  };
})(tf);
ef.exports = tf;
var dy = ef.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var py = L, je = dy;
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
var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ri = Object.prototype.hasOwnProperty, hy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, sa = {}, aa = {};
function my(e) {
  return Ri.call(aa, e) ? !0 : Ri.call(sa, e) ? !1 : hy.test(e) ? aa[e] = !0 : (sa[e] = !0, !1);
}
function yy(e, t, n, r) {
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
function gy(e, t, n, r) {
  if (t === null || typeof t > "u" || yy(e, t, n, r))
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
function Ce(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
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
  var l = he.hasOwnProperty(t) ? he[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gy(t, n, l, r) && (n = null), r || l === null ? my(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Gr = Symbol.for("react.element"), pn = Symbol.for("react.portal"), hn = Symbol.for("react.fragment"), Qu = Symbol.for("react.strict_mode"), Li = Symbol.for("react.profiler"), rf = Symbol.for("react.provider"), lf = Symbol.for("react.context"), Xu = Symbol.for("react.forward_ref"), Oi = Symbol.for("react.suspense"), zi = Symbol.for("react.suspense_list"), bu = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), of = Symbol.for("react.offscreen"), ca = Symbol.iterator;
function Yn(e) {
  return e === null || typeof e != "object" ? null : (e = ca && e[ca] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Z = Object.assign, ei;
function tr(e) {
  if (ei === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ei = t && t[1] || "";
    }
  return `
` + ei + e;
}
var ti = !1;
function ni(e, t) {
  if (!e || ti)
    return "";
  ti = !0;
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
      for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    ti = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? tr(e) : "";
}
function vy(e) {
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
      return e = ni(e.type, !1), e;
    case 11:
      return e = ni(e.type.render, !1), e;
    case 1:
      return e = ni(e.type, !0), e;
    default:
      return "";
  }
}
function Mi(e) {
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
    case Li:
      return "Profiler";
    case Qu:
      return "StrictMode";
    case Oi:
      return "Suspense";
    case zi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case lf:
        return (e.displayName || "Context") + ".Consumer";
      case rf:
        return (e._context.displayName || "Context") + ".Provider";
      case Xu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case bu:
        return t = e.displayName || null, t !== null ? t : Mi(e.type) || "Memo";
      case Tt:
        t = e._payload, e = e._init;
        try {
          return Mi(e(t));
        } catch {
        }
    }
  return null;
}
function wy(e) {
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
      return Mi(t);
    case 8:
      return t === Qu ? "StrictMode" : "Mode";
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
function Sy(e) {
  var t = uf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Zr(e) {
  e._valueTracker || (e._valueTracker = Sy(e));
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
function Il(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ai(e, t) {
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
function $i(e, t) {
  af(e, t);
  var n = Ht(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Di(e, t.type, n) : t.hasOwnProperty("defaultValue") && Di(e, t.type, Ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
function Di(e, t, n) {
  (t !== "number" || Il(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var nr = Array.isArray;
function Tn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ii(e, t) {
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
function Fi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ff(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Jr, df = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
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
}, ky = ["Webkit", "ms", "Moz", "O"];
Object.keys(sr).forEach(function(e) {
  ky.forEach(function(t) {
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
      var r = n.indexOf("--") === 0, l = pf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var xy = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ji(e, t) {
  if (t) {
    if (xy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ui(e, t) {
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
var Bi = null;
function Gu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hi = null, Nn = null, Rn = null;
function ma(e) {
  if (e = Vr(e)) {
    if (typeof Hi != "function")
      throw Error(C(280));
    var t = e.stateNode;
    t && (t = Ao(t), Hi(e.stateNode, e.type, t));
  }
}
function mf(e) {
  Nn ? Rn ? Rn.push(e) : Rn = [e] : Nn = e;
}
function yf() {
  if (Nn) {
    var e = Nn, t = Rn;
    if (Rn = Nn = null, ma(e), t)
      for (e = 0; e < t.length; e++)
        ma(t[e]);
  }
}
function gf(e, t) {
  return e(t);
}
function vf() {
}
var ri = !1;
function wf(e, t, n) {
  if (ri)
    return e(t, n);
  ri = !0;
  try {
    return gf(e, t, n);
  } finally {
    ri = !1, (Nn !== null || Rn !== null) && (vf(), yf());
  }
}
function xr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Ao(n);
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
var Wi = !1;
if (kt)
  try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", { get: function() {
      Wi = !0;
    } }), window.addEventListener("test", Qn, Qn), window.removeEventListener("test", Qn, Qn);
  } catch {
    Wi = !1;
  }
function Ey(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var ar = !1, Fl = null, jl = !1, Vi = null, Cy = { onError: function(e) {
  ar = !0, Fl = e;
} };
function _y(e, t, n, r, l, o, i, u, s) {
  ar = !1, Fl = null, Ey.apply(Cy, arguments);
}
function Py(e, t, n, r, l, o, i, u, s) {
  if (_y.apply(this, arguments), ar) {
    if (ar) {
      var a = Fl;
      ar = !1, Fl = null;
    } else
      throw Error(C(198));
    jl || (jl = !0, Vi = a);
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
function ya(e) {
  if (an(e) !== e)
    throw Error(C(188));
}
function Ty(e) {
  var t = e.alternate;
  if (!t) {
    if (t = an(e), t === null)
      throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n)
          return ya(l), e;
        if (o === r)
          return ya(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return)
      n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
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
  return e = Ty(e), e !== null ? xf(e) : null;
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
var Ef = je.unstable_scheduleCallback, ga = je.unstable_cancelCallback, Ny = je.unstable_shouldYield, Ry = je.unstable_requestPaint, te = je.unstable_now, Ly = je.unstable_getCurrentPriorityLevel, Zu = je.unstable_ImmediatePriority, Cf = je.unstable_UserBlockingPriority, Ul = je.unstable_NormalPriority, Oy = je.unstable_LowPriority, _f = je.unstable_IdlePriority, Lo = null, ft = null;
function zy(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(Lo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var tt = Math.clz32 ? Math.clz32 : $y, My = Math.log, Ay = Math.LN2;
function $y(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (My(e) / Ay | 0) | 0;
}
var qr = 64, el = 4194304;
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
function Bl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = rr(u) : (o &= i, o !== 0 && (r = rr(o)));
  } else
    i = n & ~l, i !== 0 ? r = rr(i) : o !== 0 && (r = rr(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - tt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Dy(e, t) {
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
function Iy(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - tt(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Dy(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ki(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Pf() {
  var e = qr;
  return qr <<= 1, !(qr & 4194240) && (qr = 64), e;
}
function li(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n;
}
function Fy(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - tt(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Ju(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var W = 0;
function Tf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Nf, qu, Rf, Lf, Of, Yi = !1, tl = [], At = null, $t = null, Dt = null, Er = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), Rt = [], jy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function va(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      At = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
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
function Xn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Vr(t), t !== null && qu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Uy(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return At = Xn(At, e, t, n, r, l), !0;
    case "dragenter":
      return $t = Xn($t, e, t, n, r, l), !0;
    case "mouseover":
      return Dt = Xn(Dt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Er.set(o, Xn(Er.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Cr.set(o, Xn(Cr.get(o) || null, e, t, n, r, l)), !0;
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
function Cl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Bi = r, n.target.dispatchEvent(r), Bi = null;
    } else
      return t = Vr(n), t !== null && qu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function wa(e, t, n) {
  Cl(e) && n.delete(t);
}
function By() {
  Yi = !1, At !== null && Cl(At) && (At = null), $t !== null && Cl($t) && ($t = null), Dt !== null && Cl(Dt) && (Dt = null), Er.forEach(wa), Cr.forEach(wa);
}
function bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Yi || (Yi = !0, je.unstable_scheduleCallback(je.unstable_NormalPriority, By)));
}
function _r(e) {
  function t(l) {
    return bn(l, e);
  }
  if (0 < tl.length) {
    bn(tl[0], e);
    for (var n = 1; n < tl.length; n++) {
      var r = tl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (At !== null && bn(At, e), $t !== null && bn($t, e), Dt !== null && bn(Dt, e), Er.forEach(t), Cr.forEach(t), n = 0; n < Rt.length; n++)
    r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null); )
    zf(n), n.blockedOn === null && Rt.shift();
}
var Ln = _t.ReactCurrentBatchConfig, Hl = !0;
function Hy(e, t, n, r) {
  var l = W, o = Ln.transition;
  Ln.transition = null;
  try {
    W = 1, es(e, t, n, r);
  } finally {
    W = l, Ln.transition = o;
  }
}
function Wy(e, t, n, r) {
  var l = W, o = Ln.transition;
  Ln.transition = null;
  try {
    W = 4, es(e, t, n, r);
  } finally {
    W = l, Ln.transition = o;
  }
}
function es(e, t, n, r) {
  if (Hl) {
    var l = Qi(e, t, n, r);
    if (l === null)
      hi(e, t, r, Wl, n), va(e, r);
    else if (Uy(l, e, t, n, r))
      r.stopPropagation();
    else if (va(e, r), t & 4 && -1 < jy.indexOf(e)) {
      for (; l !== null; ) {
        var o = Vr(l);
        if (o !== null && Nf(o), o = Qi(e, t, n, r), o === null && hi(e, t, r, Wl, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      hi(e, t, r, null, n);
  }
}
var Wl = null;
function Qi(e, t, n, r) {
  if (Wl = null, e = Gu(r), e = Zt(e), e !== null)
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
  return Wl = e, null;
}
function Mf(e) {
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
      switch (Ly()) {
        case Zu:
          return 1;
        case Cf:
          return 4;
        case Ul:
        case Oy:
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
var Ot = null, ts = null, _l = null;
function Af() {
  if (_l)
    return _l;
  var e, t = ts, n = t.length, r, l = "value" in Ot ? Ot.value : Ot.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return _l = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Pl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function nl() {
  return !0;
}
function Sa() {
  return !1;
}
function He(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? nl : Sa, this.isPropagationStopped = Sa, this;
  }
  return Z(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = nl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = nl);
  }, persist: function() {
  }, isPersistent: nl }), t;
}
var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ns = He(Wn), Wr = Z({}, Wn, { view: 0, detail: 0 }), Vy = He(Wr), oi, ii, Gn, Oo = Z({}, Wr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Gn && (Gn && e.type === "mousemove" ? (oi = e.screenX - Gn.screenX, ii = e.screenY - Gn.screenY) : ii = oi = 0, Gn = e), oi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ii;
} }), ka = He(Oo), Ky = Z({}, Oo, { dataTransfer: 0 }), Yy = He(Ky), Qy = Z({}, Wr, { relatedTarget: 0 }), ui = He(Qy), Xy = Z({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), by = He(Xy), Gy = Z({}, Wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Zy = He(Gy), Jy = Z({}, Wn, { data: 0 }), xa = He(Jy), qy = {
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
}, eg = {
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
}, tg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ng(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tg[e]) ? !!t[e] : !1;
}
function rs() {
  return ng;
}
var rg = Z({}, Wr, { key: function(e) {
  if (e.key) {
    var t = qy[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Pl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? eg[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rs, charCode: function(e) {
  return e.type === "keypress" ? Pl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), lg = He(rg), og = Z({}, Oo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ea = He(og), ig = Z({}, Wr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rs }), ug = He(ig), sg = Z({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ag = He(sg), cg = Z({}, Oo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), fg = He(cg), dg = [9, 13, 27, 32], ls = kt && "CompositionEvent" in window, cr = null;
kt && "documentMode" in document && (cr = document.documentMode);
var pg = kt && "TextEvent" in window && !cr, $f = kt && (!ls || cr && 8 < cr && 11 >= cr), Ca = String.fromCharCode(32), _a = !1;
function Df(e, t) {
  switch (e) {
    case "keyup":
      return dg.indexOf(t.keyCode) !== -1;
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
function If(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mn = !1;
function hg(e, t) {
  switch (e) {
    case "compositionend":
      return If(t);
    case "keypress":
      return t.which !== 32 ? null : (_a = !0, Ca);
    case "textInput":
      return e = t.data, e === Ca && _a ? null : e;
    default:
      return null;
  }
}
function mg(e, t) {
  if (mn)
    return e === "compositionend" || !ls && Df(e, t) ? (e = Af(), _l = ts = Ot = null, mn = !1, e) : null;
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
      return $f && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Pa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yg[e.type] : t === "textarea";
}
function Ff(e, t, n, r) {
  mf(r), t = Vl(t, "onChange"), 0 < t.length && (n = new ns("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var fr = null, Pr = null;
function gg(e) {
  bf(e, 0);
}
function zo(e) {
  var t = vn(e);
  if (sf(t))
    return e;
}
function vg(e, t) {
  if (e === "change")
    return t;
}
var jf = !1;
if (kt) {
  var si;
  if (kt) {
    var ai = "oninput" in document;
    if (!ai) {
      var Ta = document.createElement("div");
      Ta.setAttribute("oninput", "return;"), ai = typeof Ta.oninput == "function";
    }
    si = ai;
  } else
    si = !1;
  jf = si && (!document.documentMode || 9 < document.documentMode);
}
function Na() {
  fr && (fr.detachEvent("onpropertychange", Uf), Pr = fr = null);
}
function Uf(e) {
  if (e.propertyName === "value" && zo(Pr)) {
    var t = [];
    Ff(t, Pr, e, Gu(e)), wf(gg, t);
  }
}
function wg(e, t, n) {
  e === "focusin" ? (Na(), fr = t, Pr = n, fr.attachEvent("onpropertychange", Uf)) : e === "focusout" && Na();
}
function Sg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zo(Pr);
}
function kg(e, t) {
  if (e === "click")
    return zo(t);
}
function xg(e, t) {
  if (e === "input" || e === "change")
    return zo(t);
}
function Eg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var rt = typeof Object.is == "function" ? Object.is : Eg;
function Tr(e, t) {
  if (rt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ri.call(t, l) || !rt(e[l], t[l]))
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
  for (var e = window, t = Il(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Il(e.document);
  }
  return t;
}
function os(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Cg(e) {
  var t = Hf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Bf(n.ownerDocument.documentElement, n)) {
    if (r !== null && os(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = La(n, o);
        var i = La(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var _g = kt && "documentMode" in document && 11 >= document.documentMode, yn = null, Xi = null, dr = null, bi = !1;
function Oa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bi || yn == null || yn !== Il(r) || (r = yn, "selectionStart" in r && os(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), dr && Tr(dr, r) || (dr = r, r = Vl(Xi, "onSelect"), 0 < r.length && (t = new ns("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yn)));
}
function rl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var gn = { animationend: rl("Animation", "AnimationEnd"), animationiteration: rl("Animation", "AnimationIteration"), animationstart: rl("Animation", "AnimationStart"), transitionend: rl("Transition", "TransitionEnd") }, ci = {}, Wf = {};
kt && (Wf = document.createElement("div").style, "AnimationEvent" in window || (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation), "TransitionEvent" in window || delete gn.transitionend.transition);
function Mo(e) {
  if (ci[e])
    return ci[e];
  if (!gn[e])
    return e;
  var t = gn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Wf)
      return ci[e] = t[n];
  return e;
}
var Vf = Mo("animationend"), Kf = Mo("animationiteration"), Yf = Mo("animationstart"), Qf = Mo("transitionend"), Xf = /* @__PURE__ */ new Map(), za = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vt(e, t) {
  Xf.set(e, t), sn(t, [e]);
}
for (var fi = 0; fi < za.length; fi++) {
  var di = za[fi], Pg = di.toLowerCase(), Tg = di[0].toUpperCase() + di.slice(1);
  Vt(Pg, "on" + Tg);
}
Vt(Vf, "onAnimationEnd");
Vt(Kf, "onAnimationIteration");
Vt(Yf, "onAnimationStart");
Vt("dblclick", "onDoubleClick");
Vt("focusin", "onFocus");
Vt("focusout", "onBlur");
Vt(Qf, "onTransitionEnd");
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
var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ng = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function Ma(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Py(r, t, void 0, e), e.currentTarget = null;
}
function bf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Ma(l, u, a), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Ma(l, u, a), o = s;
        }
    }
  }
  if (jl)
    throw e = Vi, jl = !1, Vi = null, e;
}
function Y(e, t) {
  var n = t[eu];
  n === void 0 && (n = t[eu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Gf(t, e, 2, !1), n.add(r));
}
function pi(e, t, n) {
  var r = 0;
  t && (r |= 4), Gf(n, e, r, t);
}
var ll = "_reactListening" + Math.random().toString(36).slice(2);
function Nr(e) {
  if (!e[ll]) {
    e[ll] = !0, nf.forEach(function(n) {
      n !== "selectionchange" && (Ng.has(n) || pi(n, !1, e), pi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ll] || (t[ll] = !0, pi("selectionchange", !1, t));
  }
}
function Gf(e, t, n, r) {
  switch (Mf(t)) {
    case 1:
      var l = Hy;
      break;
    case 4:
      l = Wy;
      break;
    default:
      l = es;
  }
  n = l.bind(null, t, n, e), l = void 0, !Wi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function hi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = Zt(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  wf(function() {
    var a = o, m = Gu(n), d = [];
    e: {
      var h = Xf.get(e);
      if (h !== void 0) {
        var v = ns, S = e;
        switch (e) {
          case "keypress":
            if (Pl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = lg;
            break;
          case "focusin":
            S = "focus", v = ui;
            break;
          case "focusout":
            S = "blur", v = ui;
            break;
          case "beforeblur":
          case "afterblur":
            v = ui;
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
            v = ka;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Yy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ug;
            break;
          case Vf:
          case Kf:
          case Yf:
            v = by;
            break;
          case Qf:
            v = ag;
            break;
          case "scroll":
            v = Vy;
            break;
          case "wheel":
            v = fg;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Zy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ea;
        }
        var g = (t & 4) !== 0, _ = !g && e === "scroll", c = g ? h !== null ? h + "Capture" : null : h;
        g = [];
        for (var f = a, p; f !== null; ) {
          p = f;
          var k = p.stateNode;
          if (p.tag === 5 && k !== null && (p = k, c !== null && (k = xr(f, c), k != null && g.push(Rr(f, k, p)))), _)
            break;
          f = f.return;
        }
        0 < g.length && (h = new v(h, S, null, n, m), d.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== Bi && (S = n.relatedTarget || n.fromElement) && (Zt(S) || S[xt]))
          break e;
        if ((v || h) && (h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (S = n.relatedTarget || n.toElement, v = a, S = S ? Zt(S) : null, S !== null && (_ = an(S), S !== _ || S.tag !== 5 && S.tag !== 6) && (S = null)) : (v = null, S = a), v !== S)) {
          if (g = ka, k = "onMouseLeave", c = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (g = Ea, k = "onPointerLeave", c = "onPointerEnter", f = "pointer"), _ = v == null ? h : vn(v), p = S == null ? h : vn(S), h = new g(k, f + "leave", v, n, m), h.target = _, h.relatedTarget = p, k = null, Zt(m) === a && (g = new g(c, f + "enter", S, n, m), g.target = p, g.relatedTarget = _, k = g), _ = k, v && S)
            t: {
              for (g = v, c = S, f = 0, p = g; p; p = fn(p))
                f++;
              for (p = 0, k = c; k; k = fn(k))
                p++;
              for (; 0 < f - p; )
                g = fn(g), f--;
              for (; 0 < p - f; )
                c = fn(c), p--;
              for (; f--; ) {
                if (g === c || c !== null && g === c.alternate)
                  break t;
                g = fn(g), c = fn(c);
              }
              g = null;
            }
          else
            g = null;
          v !== null && Aa(d, h, v, g, !1), S !== null && _ !== null && Aa(d, _, S, g, !0);
        }
      }
      e: {
        if (h = a ? vn(a) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file")
          var y = vg;
        else if (Pa(h))
          if (jf)
            y = xg;
          else {
            y = Sg;
            var x = wg;
          }
        else
          (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (y = kg);
        if (y && (y = y(e, a))) {
          Ff(d, y, n, m);
          break e;
        }
        x && x(e, h, a), e === "focusout" && (x = h._wrapperState) && x.controlled && h.type === "number" && Di(h, "number", h.value);
      }
      switch (x = a ? vn(a) : window, e) {
        case "focusin":
          (Pa(x) || x.contentEditable === "true") && (yn = x, Xi = a, dr = null);
          break;
        case "focusout":
          dr = Xi = yn = null;
          break;
        case "mousedown":
          bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          bi = !1, Oa(d, n, m);
          break;
        case "selectionchange":
          if (_g)
            break;
        case "keydown":
        case "keyup":
          Oa(d, n, m);
      }
      var w;
      if (ls)
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
        mn ? Df(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && ($f && n.locale !== "ko" && (mn || R !== "onCompositionStart" ? R === "onCompositionEnd" && mn && (w = Af()) : (Ot = m, ts = "value" in Ot ? Ot.value : Ot.textContent, mn = !0)), x = Vl(a, R), 0 < x.length && (R = new xa(R, e, null, n, m), d.push({ event: R, listeners: x }), w ? R.data = w : (w = If(n), w !== null && (R.data = w)))), (w = pg ? hg(e, n) : mg(e, n)) && (a = Vl(a, "onBeforeInput"), 0 < a.length && (m = new xa("onBeforeInput", "beforeinput", null, n, m), d.push({ event: m, listeners: a }), m.data = w));
    }
    bf(d, t);
  });
}
function Rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = xr(e, n), o != null && r.unshift(Rr(e, o, l)), o = xr(e, t), o != null && r.push(Rr(e, o, l))), e = e.return;
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
function Aa(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, l ? (s = xr(n, o), s != null && i.unshift(Rr(n, s, u))) : l || (s = xr(n, o), s != null && i.push(Rr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Rg = /\r\n?/g, Lg = /\u0000|\uFFFD/g;
function $a(e) {
  return (typeof e == "string" ? e : "" + e).replace(Rg, `
`).replace(Lg, "");
}
function ol(e, t, n) {
  if (t = $a(t), $a(e) !== t && n)
    throw Error(C(425));
}
function Kl() {
}
var Gi = null, Zi = null;
function Ji(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qi = typeof setTimeout == "function" ? setTimeout : void 0, Og = typeof clearTimeout == "function" ? clearTimeout : void 0, Da = typeof Promise == "function" ? Promise : void 0, zg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Da < "u" ? function(e) {
  return Da.resolve(null).then(e).catch(Mg);
} : qi;
function Mg(e) {
  setTimeout(function() {
    throw e;
  });
}
function mi(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), _r(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  _r(t);
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
function Ia(e) {
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
var Vn = Math.random().toString(36).slice(2), at = "__reactFiber$" + Vn, Lr = "__reactProps$" + Vn, xt = "__reactContainer$" + Vn, eu = "__reactEvents$" + Vn, Ag = "__reactListeners$" + Vn, $g = "__reactHandles$" + Vn;
function Zt(e) {
  var t = e[at];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[xt] || n[at]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Ia(e); e !== null; ) {
          if (n = e[at])
            return n;
          e = Ia(e);
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
function Ao(e) {
  return e[Lr] || null;
}
var tu = [], wn = -1;
function Kt(e) {
  return { current: e };
}
function Q(e) {
  0 > wn || (e.current = tu[wn], tu[wn] = null, wn--);
}
function K(e, t) {
  wn++, tu[wn] = e.current, e.current = t;
}
var Wt = {}, we = Kt(Wt), Te = Kt(!1), nn = Wt;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function Yl() {
  Q(Te), Q(we);
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
  for (var l in r)
    if (!(l in t))
      throw Error(C(108, wy(e) || "Unknown", l));
  return Z({}, n, r);
}
function Ql(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt, nn = we.current, K(we, e), K(Te, Te.current), !0;
}
function ja(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(C(169));
  n ? (e = Zf(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, Q(Te), Q(we), K(we, e)) : Q(Te), K(Te, n);
}
var yt = null, $o = !1, yi = !1;
function Jf(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function Dg(e) {
  $o = !0, Jf(e);
}
function Yt() {
  if (!yi && yt !== null) {
    yi = !0;
    var e = 0, t = W;
    try {
      var n = yt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yt = null, $o = !1;
    } catch (l) {
      throw yt !== null && (yt = yt.slice(e + 1)), Ef(Zu, Yt), l;
    } finally {
      W = t, yi = !1;
    }
  }
  return null;
}
var Sn = [], kn = 0, Xl = null, bl = 0, Ve = [], Ke = 0, rn = null, gt = 1, vt = "";
function bt(e, t) {
  Sn[kn++] = bl, Sn[kn++] = Xl, Xl = e, bl = t;
}
function qf(e, t, n) {
  Ve[Ke++] = gt, Ve[Ke++] = vt, Ve[Ke++] = rn, rn = e;
  var r = gt;
  e = vt;
  var l = 32 - tt(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - tt(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, gt = 1 << 32 - tt(t) + l | n << l | r, vt = o + e;
  } else
    gt = 1 << o | n << l | r, vt = e;
}
function is(e) {
  e.return !== null && (bt(e, 1), qf(e, 1, 0));
}
function us(e) {
  for (; e === Xl; )
    Xl = Sn[--kn], Sn[kn] = null, bl = Sn[--kn], Sn[kn] = null;
  for (; e === rn; )
    rn = Ve[--Ke], Ve[Ke] = null, vt = Ve[--Ke], Ve[Ke] = null, gt = Ve[--Ke], Ve[Ke] = null;
}
var Fe = null, De = null, X = !1, et = null;
function ed(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ua(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fe = e, De = It(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fe = e, De = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: gt, overflow: vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fe = e, De = null, !0) : !1;
    default:
      return !1;
  }
}
function nu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ru(e) {
  if (X) {
    var t = De;
    if (t) {
      var n = t;
      if (!Ua(e, t)) {
        if (nu(e))
          throw Error(C(418));
        t = It(n.nextSibling);
        var r = Fe;
        t && Ua(e, t) ? ed(r, n) : (e.flags = e.flags & -4097 | 2, X = !1, Fe = e);
      }
    } else {
      if (nu(e))
        throw Error(C(418));
      e.flags = e.flags & -4097 | 2, X = !1, Fe = e;
    }
  }
}
function Ba(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function il(e) {
  if (e !== Fe)
    return !1;
  if (!X)
    return Ba(e), X = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ji(e.type, e.memoizedProps)), t && (t = De)) {
    if (nu(e))
      throw td(), Error(C(418));
    for (; t; )
      ed(e, t), t = It(t.nextSibling);
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
              De = It(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else
    De = Fe ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function td() {
  for (var e = De; e; )
    e = It(e.nextSibling);
}
function Dn() {
  De = Fe = null, X = !1;
}
function ss(e) {
  et === null ? et = [e] : et.push(e);
}
var Ig = _t.ReactCurrentBatchConfig;
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
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(C(284));
    if (!n._owner)
      throw Error(C(290, e));
  }
  return e;
}
function ul(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ha(e) {
  var t = e._init;
  return t(e._payload);
}
function nd(e) {
  function t(c, f) {
    if (e) {
      var p = c.deletions;
      p === null ? (c.deletions = [f], c.flags |= 16) : p.push(f);
    }
  }
  function n(c, f) {
    if (!e)
      return null;
    for (; f !== null; )
      t(c, f), f = f.sibling;
    return null;
  }
  function r(c, f) {
    for (c = /* @__PURE__ */ new Map(); f !== null; )
      f.key !== null ? c.set(f.key, f) : c.set(f.index, f), f = f.sibling;
    return c;
  }
  function l(c, f) {
    return c = Bt(c, f), c.index = 0, c.sibling = null, c;
  }
  function o(c, f, p) {
    return c.index = p, e ? (p = c.alternate, p !== null ? (p = p.index, p < f ? (c.flags |= 2, f) : p) : (c.flags |= 2, f)) : (c.flags |= 1048576, f);
  }
  function i(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, f, p, k) {
    return f === null || f.tag !== 6 ? (f = Ei(p, c.mode, k), f.return = c, f) : (f = l(f, p), f.return = c, f);
  }
  function s(c, f, p, k) {
    var y = p.type;
    return y === hn ? m(c, f, p.props.children, k, p.key) : f !== null && (f.elementType === y || typeof y == "object" && y !== null && y.$$typeof === Tt && Ha(y) === f.type) ? (k = l(f, p.props), k.ref = Zn(c, f, p), k.return = c, k) : (k = Ml(p.type, p.key, p.props, null, c.mode, k), k.ref = Zn(c, f, p), k.return = c, k);
  }
  function a(c, f, p, k) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = Ci(p, c.mode, k), f.return = c, f) : (f = l(f, p.children || []), f.return = c, f);
  }
  function m(c, f, p, k, y) {
    return f === null || f.tag !== 7 ? (f = tn(p, c.mode, k, y), f.return = c, f) : (f = l(f, p), f.return = c, f);
  }
  function d(c, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return f = Ei("" + f, c.mode, p), f.return = c, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Gr:
          return p = Ml(f.type, f.key, f.props, null, c.mode, p), p.ref = Zn(c, null, f), p.return = c, p;
        case pn:
          return f = Ci(f, c.mode, p), f.return = c, f;
        case Tt:
          var k = f._init;
          return d(c, k(f._payload), p);
      }
      if (nr(f) || Yn(f))
        return f = tn(f, c.mode, p, null), f.return = c, f;
      ul(c, f);
    }
    return null;
  }
  function h(c, f, p, k) {
    var y = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return y !== null ? null : u(c, f, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Gr:
          return p.key === y ? s(c, f, p, k) : null;
        case pn:
          return p.key === y ? a(c, f, p, k) : null;
        case Tt:
          return y = p._init, h(
            c,
            f,
            y(p._payload),
            k
          );
      }
      if (nr(p) || Yn(p))
        return y !== null ? null : m(c, f, p, k, null);
      ul(c, p);
    }
    return null;
  }
  function v(c, f, p, k, y) {
    if (typeof k == "string" && k !== "" || typeof k == "number")
      return c = c.get(p) || null, u(f, c, "" + k, y);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Gr:
          return c = c.get(k.key === null ? p : k.key) || null, s(f, c, k, y);
        case pn:
          return c = c.get(k.key === null ? p : k.key) || null, a(f, c, k, y);
        case Tt:
          var x = k._init;
          return v(c, f, p, x(k._payload), y);
      }
      if (nr(k) || Yn(k))
        return c = c.get(p) || null, m(f, c, k, y, null);
      ul(f, k);
    }
    return null;
  }
  function S(c, f, p, k) {
    for (var y = null, x = null, w = f, R = f = 0, I = null; w !== null && R < p.length; R++) {
      w.index > R ? (I = w, w = null) : I = w.sibling;
      var z = h(c, w, p[R], k);
      if (z === null) {
        w === null && (w = I);
        break;
      }
      e && w && z.alternate === null && t(c, w), f = o(z, f, R), x === null ? y = z : x.sibling = z, x = z, w = I;
    }
    if (R === p.length)
      return n(c, w), X && bt(c, R), y;
    if (w === null) {
      for (; R < p.length; R++)
        w = d(c, p[R], k), w !== null && (f = o(w, f, R), x === null ? y = w : x.sibling = w, x = w);
      return X && bt(c, R), y;
    }
    for (w = r(c, w); R < p.length; R++)
      I = v(w, c, R, p[R], k), I !== null && (e && I.alternate !== null && w.delete(I.key === null ? R : I.key), f = o(I, f, R), x === null ? y = I : x.sibling = I, x = I);
    return e && w.forEach(function(F) {
      return t(c, F);
    }), X && bt(c, R), y;
  }
  function g(c, f, p, k) {
    var y = Yn(p);
    if (typeof y != "function")
      throw Error(C(150));
    if (p = y.call(p), p == null)
      throw Error(C(151));
    for (var x = y = null, w = f, R = f = 0, I = null, z = p.next(); w !== null && !z.done; R++, z = p.next()) {
      w.index > R ? (I = w, w = null) : I = w.sibling;
      var F = h(c, w, z.value, k);
      if (F === null) {
        w === null && (w = I);
        break;
      }
      e && w && F.alternate === null && t(c, w), f = o(F, f, R), x === null ? y = F : x.sibling = F, x = F, w = I;
    }
    if (z.done)
      return n(
        c,
        w
      ), X && bt(c, R), y;
    if (w === null) {
      for (; !z.done; R++, z = p.next())
        z = d(c, z.value, k), z !== null && (f = o(z, f, R), x === null ? y = z : x.sibling = z, x = z);
      return X && bt(c, R), y;
    }
    for (w = r(c, w); !z.done; R++, z = p.next())
      z = v(w, c, R, z.value, k), z !== null && (e && z.alternate !== null && w.delete(z.key === null ? R : z.key), f = o(z, f, R), x === null ? y = z : x.sibling = z, x = z);
    return e && w.forEach(function(Oe) {
      return t(c, Oe);
    }), X && bt(c, R), y;
  }
  function _(c, f, p, k) {
    if (typeof p == "object" && p !== null && p.type === hn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Gr:
          e: {
            for (var y = p.key, x = f; x !== null; ) {
              if (x.key === y) {
                if (y = p.type, y === hn) {
                  if (x.tag === 7) {
                    n(c, x.sibling), f = l(x, p.props.children), f.return = c, c = f;
                    break e;
                  }
                } else if (x.elementType === y || typeof y == "object" && y !== null && y.$$typeof === Tt && Ha(y) === x.type) {
                  n(c, x.sibling), f = l(x, p.props), f.ref = Zn(c, x, p), f.return = c, c = f;
                  break e;
                }
                n(c, x);
                break;
              } else
                t(c, x);
              x = x.sibling;
            }
            p.type === hn ? (f = tn(p.props.children, c.mode, k, p.key), f.return = c, c = f) : (k = Ml(p.type, p.key, p.props, null, c.mode, k), k.ref = Zn(c, f, p), k.return = c, c = k);
          }
          return i(c);
        case pn:
          e: {
            for (x = p.key; f !== null; ) {
              if (f.key === x)
                if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                  n(c, f.sibling), f = l(f, p.children || []), f.return = c, c = f;
                  break e;
                } else {
                  n(c, f);
                  break;
                }
              else
                t(c, f);
              f = f.sibling;
            }
            f = Ci(p, c.mode, k), f.return = c, c = f;
          }
          return i(c);
        case Tt:
          return x = p._init, _(c, f, x(p._payload), k);
      }
      if (nr(p))
        return S(c, f, p, k);
      if (Yn(p))
        return g(c, f, p, k);
      ul(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(c, f.sibling), f = l(f, p), f.return = c, c = f) : (n(c, f), f = Ei(p, c.mode, k), f.return = c, c = f), i(c)) : n(c, f);
  }
  return _;
}
var In = nd(!0), rd = nd(!1), Gl = Kt(null), Zl = null, xn = null, as = null;
function cs() {
  as = xn = Zl = null;
}
function fs(e) {
  var t = Gl.current;
  Q(Gl), e._currentValue = t;
}
function lu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function On(e, t) {
  Zl = e, as = xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function Xe(e) {
  var t = e._currentValue;
  if (as !== e)
    if (e = { context: e, memoizedValue: t, next: null }, xn === null) {
      if (Zl === null)
        throw Error(C(308));
      xn = e, Zl.dependencies = { lanes: 0, firstContext: e };
    } else
      xn = xn.next = e;
  return t;
}
var Jt = null;
function ds(e) {
  Jt === null ? Jt = [e] : Jt.push(e);
}
function ld(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ds(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Et(e, r);
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
function od(e, t) {
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
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Et(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ds(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Et(e, n);
}
function Tl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ju(e, n);
  }
}
function Wa(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else
      l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Jl(e, t, n, r) {
  var l = e.updateQueue;
  Nt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== i && (u === null ? m.firstBaseUpdate = a : u.next = a, m.lastBaseUpdate = s));
  }
  if (o !== null) {
    var d = l.baseState;
    i = 0, m = a = s = null, u = o;
    do {
      var h = u.lane, v = u.eventTime;
      if ((r & h) === h) {
        m !== null && (m = m.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, g = u;
          switch (h = t, v = n, g.tag) {
            case 1:
              if (S = g.payload, typeof S == "function") {
                d = S.call(v, d, h);
                break e;
              }
              d = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = g.payload, h = typeof S == "function" ? S.call(v, d, h) : S, h == null)
                break e;
              d = Z({}, d, h);
              break e;
            case 2:
              Nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
      } else
        v = { eventTime: v, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (a = m = v, s = d) : m = m.next = v, i |= h;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (1);
    if (m === null && (s = d), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    on |= i, e.lanes = i, e.memoizedState = d;
  }
}
function Va(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(C(191, l));
        l.call(r);
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
      t = (t = t.documentElement) ? t.namespaceURI : Fi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fi(t, e);
  }
  Q(dt), K(dt, t);
}
function Fn() {
  Q(dt), Q(Or), Q(zr);
}
function id(e) {
  qt(zr.current);
  var t = qt(dt.current), n = Fi(t, e.type);
  t !== n && (K(Or, e), K(dt, n));
}
function ms(e) {
  Or.current === e && (Q(dt), Q(Or));
}
var b = Kt(0);
function ql(e) {
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
var gi = [];
function ys() {
  for (var e = 0; e < gi.length; e++)
    gi[e]._workInProgressVersionPrimary = null;
  gi.length = 0;
}
var Nl = _t.ReactCurrentDispatcher, vi = _t.ReactCurrentBatchConfig, ln = 0, G = null, oe = null, ue = null, eo = !1, pr = !1, Mr = 0, Fg = 0;
function me() {
  throw Error(C(321));
}
function gs(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n]))
      return !1;
  return !0;
}
function vs(e, t, n, r, l, o) {
  if (ln = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Nl.current = e === null || e.memoizedState === null ? Hg : Wg, e = n(r, l), pr) {
    o = 0;
    do {
      if (pr = !1, Mr = 0, 25 <= o)
        throw Error(C(301));
      o += 1, ue = oe = null, t.updateQueue = null, Nl.current = Vg, e = n(r, l);
    } while (pr);
  }
  if (Nl.current = to, t = oe !== null && oe.next !== null, ln = 0, ue = oe = G = null, eo = !1, t)
    throw Error(C(300));
  return e;
}
function ws() {
  var e = Mr !== 0;
  return Mr = 0, e;
}
function it() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ue === null ? G.memoizedState = ue = e : ue = ue.next = e, ue;
}
function be() {
  if (oe === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = oe.next;
  var t = ue === null ? G.memoizedState : ue.next;
  if (t !== null)
    ue = t, oe = e;
  else {
    if (e === null)
      throw Error(C(310));
    oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ue === null ? G.memoizedState = ue = e : ue = ue.next = e;
  }
  return ue;
}
function Ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wi(e) {
  var t = be(), n = t.queue;
  if (n === null)
    throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = oe, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, a = o;
    do {
      var m = a.lane;
      if ((ln & m) === m)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var d = {
          lane: m,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = d, i = r) : s = s.next = d, G.lanes |= m, on |= m;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, rt(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, G.lanes |= o, on |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Si(e) {
  var t = be(), n = t.queue;
  if (n === null)
    throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    rt(o, t.memoizedState) || (Pe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function ud() {
}
function sd(e, t) {
  var n = G, r = be(), l = t(), o = !rt(r.memoizedState, l);
  if (o && (r.memoizedState = l, Pe = !0), r = r.queue, Ss(fd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ue !== null && ue.memoizedState.tag & 1) {
    if (n.flags |= 2048, $r(9, cd.bind(null, n, r, l, t), void 0, null), se === null)
      throw Error(C(349));
    ln & 30 || ad(n, t, l);
  }
  return l;
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
  var t = it();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ar, lastRenderedState: e }, t.queue = e, e = e.dispatch = Bg.bind(null, G, e), [t.memoizedState, e];
}
function $r(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function hd() {
  return be().memoizedState;
}
function Rl(e, t, n, r) {
  var l = it();
  G.flags |= e, l.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r);
}
function Do(e, t, n, r) {
  var l = be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (oe !== null) {
    var i = oe.memoizedState;
    if (o = i.destroy, r !== null && gs(r, i.deps)) {
      l.memoizedState = $r(t, n, o, r);
      return;
    }
  }
  G.flags |= e, l.memoizedState = $r(1 | t, n, o, r);
}
function Ya(e, t) {
  return Rl(8390656, 8, e, t);
}
function Ss(e, t) {
  return Do(2048, 8, e, t);
}
function md(e, t) {
  return Do(4, 2, e, t);
}
function yd(e, t) {
  return Do(4, 4, e, t);
}
function gd(e, t) {
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
  return n = n != null ? n.concat([e]) : null, Do(4, 4, gd.bind(null, t, e), n);
}
function ks() {
}
function wd(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Sd(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function kd(e, t, n) {
  return ln & 21 ? (rt(n, t) || (n = Pf(), G.lanes |= n, on |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function jg(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = vi.transition;
  vi.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, vi.transition = r;
  }
}
function xd() {
  return be().memoizedState;
}
function Ug(e, t, n) {
  var r = Ut(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ed(e))
    Cd(t, n);
  else if (n = ld(e, t, n, r), n !== null) {
    var l = xe();
    nt(n, e, r, l), _d(n, t, r);
  }
}
function Bg(e, t, n) {
  var r = Ut(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ed(e))
    Cd(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, rt(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, ds(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = ld(e, t, l, r), n !== null && (l = xe(), nt(n, e, r, l), _d(n, t, r));
  }
}
function Ed(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G;
}
function Cd(e, t) {
  pr = eo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function _d(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ju(e, n);
  }
}
var to = { readContext: Xe, useCallback: me, useContext: me, useEffect: me, useImperativeHandle: me, useInsertionEffect: me, useLayoutEffect: me, useMemo: me, useReducer: me, useRef: me, useState: me, useDebugValue: me, useDeferredValue: me, useTransition: me, useMutableSource: me, useSyncExternalStore: me, useId: me, unstable_isNewReconciler: !1 }, Hg = { readContext: Xe, useCallback: function(e, t) {
  return it().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Xe, useEffect: Ya, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Rl(
    4194308,
    4,
    gd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Rl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Rl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = it();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = it();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ug.bind(null, G, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = it();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ka, useDebugValue: ks, useDeferredValue: function(e) {
  return it().memoizedState = e;
}, useTransition: function() {
  var e = Ka(!1), t = e[0];
  return e = jg.bind(null, e[1]), it().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = G, l = it();
  if (X) {
    if (n === void 0)
      throw Error(C(407));
    n = n();
  } else {
    if (n = t(), se === null)
      throw Error(C(349));
    ln & 30 || ad(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Ya(fd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, $r(9, cd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = it(), t = se.identifierPrefix;
  if (X) {
    var n = vt, r = gt;
    n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Mr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Fg++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Wg = {
  readContext: Xe,
  useCallback: wd,
  useContext: Xe,
  useEffect: Ss,
  useImperativeHandle: vd,
  useInsertionEffect: md,
  useLayoutEffect: yd,
  useMemo: Sd,
  useReducer: wi,
  useRef: hd,
  useState: function() {
    return wi(Ar);
  },
  useDebugValue: ks,
  useDeferredValue: function(e) {
    var t = be();
    return kd(t, oe.memoizedState, e);
  },
  useTransition: function() {
    var e = wi(Ar)[0], t = be().memoizedState;
    return [e, t];
  },
  useMutableSource: ud,
  useSyncExternalStore: sd,
  useId: xd,
  unstable_isNewReconciler: !1
}, Vg = { readContext: Xe, useCallback: wd, useContext: Xe, useEffect: Ss, useImperativeHandle: vd, useInsertionEffect: md, useLayoutEffect: yd, useMemo: Sd, useReducer: Si, useRef: hd, useState: function() {
  return Si(Ar);
}, useDebugValue: ks, useDeferredValue: function(e) {
  var t = be();
  return oe === null ? t.memoizedState = e : kd(t, oe.memoizedState, e);
}, useTransition: function() {
  var e = Si(Ar)[0], t = be().memoizedState;
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
function ou(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Io = { isMounted: function(e) {
  return (e = e._reactInternals) ? an(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), l = Ut(e), o = wt(r, l);
  o.payload = t, n != null && (o.callback = n), t = Ft(e, o, l), t !== null && (nt(t, e, l, r), Tl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), l = Ut(e), o = wt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Ft(e, o, l), t !== null && (nt(t, e, l, r), Tl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = xe(), r = Ut(e), l = wt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ft(e, l, r), t !== null && (nt(t, e, r, n), Tl(t, e, r));
} };
function Qa(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Tr(n, r) || !Tr(l, o) : !0;
}
function Pd(e, t, n) {
  var r = !1, l = Wt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Xe(o) : (l = Ne(t) ? nn : we.current, r = t.contextTypes, o = (r = r != null) ? $n(e, l) : Wt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Io, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Xa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Io.enqueueReplaceState(t, t.state, null);
}
function iu(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ps(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Xe(o) : (o = Ne(t) ? nn : we.current, l.context = $n(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ou(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Io.enqueueReplaceState(l, l.state, null), Jl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t) {
  try {
    var n = "", r = t;
    do
      n += vy(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ki(e, t, n) {
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
var Kg = typeof WeakMap == "function" ? WeakMap : Map;
function Td(e, t, n) {
  n = wt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ro || (ro = !0, gu = r), uu(e, t);
  }, n;
}
function Nd(e, t, n) {
  n = wt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      uu(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    uu(e, t), typeof r != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function ba(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Kg();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = ov.bind(null, e, t, n), t.then(e, e));
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
function Za(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wt(-1, 1), t.tag = 2, Ft(n, t, 1))), n.lanes |= 1), e);
}
var Yg = _t.ReactCurrentOwner, Pe = !1;
function ke(e, t, n, r) {
  t.child = e === null ? rd(t, null, n, r) : In(t, e.child, n, r);
}
function Ja(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return On(t, l), r = vs(e, t, n, r, o, l), n = ws(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ct(e, t, l)) : (X && n && is(t), t.flags |= 1, ke(e, t, r, l), t.child);
}
function qa(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Rs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Rd(e, t, o, r, l)) : (e = Ml(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Tr, n(i, r) && e.ref === t.ref)
      return Ct(e, t, l);
  }
  return t.flags |= 1, e = Bt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Rd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Tr(o, r) && e.ref === t.ref)
      if (Pe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (Pe = !0);
      else
        return t.lanes = e.lanes, Ct(e, t, l);
  }
  return su(e, t, n, r, l);
}
function Ld(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Cn, Ae), Ae |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Cn, Ae), Ae |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, K(Cn, Ae), Ae |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, K(Cn, Ae), Ae |= r;
  return ke(e, t, l, n), t.child;
}
function Od(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function su(e, t, n, r, l) {
  var o = Ne(n) ? nn : we.current;
  return o = $n(t, o), On(t, l), n = vs(e, t, n, r, o, l), r = ws(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ct(e, t, l)) : (X && r && is(t), t.flags |= 1, ke(e, t, n, l), t.child);
}
function ec(e, t, n, r, l) {
  if (Ne(n)) {
    var o = !0;
    Ql(t);
  } else
    o = !1;
  if (On(t, l), t.stateNode === null)
    Ll(e, t), Pd(t, n, r), iu(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Xe(a) : (a = Ne(n) ? nn : we.current, a = $n(t, a));
    var m = n.getDerivedStateFromProps, d = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && Xa(t, i, r, a), Nt = !1;
    var h = t.memoizedState;
    i.state = h, Jl(t, r, i, l), s = t.memoizedState, u !== r || h !== s || Te.current || Nt ? (typeof m == "function" && (ou(t, n, m, r), s = t.memoizedState), (u = Nt || Qa(t, n, u, r, h, s, a)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, od(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Je(t.type, u), i.props = a, d = t.pendingProps, h = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Xe(s) : (s = Ne(n) ? nn : we.current, s = $n(t, s));
    var v = n.getDerivedStateFromProps;
    (m = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== d || h !== s) && Xa(t, i, r, s), Nt = !1, h = t.memoizedState, i.state = h, Jl(t, r, i, l);
    var S = t.memoizedState;
    u !== d || h !== S || Te.current || Nt ? (typeof v == "function" && (ou(t, n, v, r), S = t.memoizedState), (a = Nt || Qa(t, n, a, r, h, S, s) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return au(e, t, n, r, o, l);
}
function au(e, t, n, r, l, o) {
  Od(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && ja(t, n, !1), Ct(e, t, o);
  r = t.stateNode, Yg.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = In(t, e.child, null, o), t.child = In(t, null, u, o)) : ke(e, t, u, o), t.memoizedState = r.state, l && ja(t, n, !0), t.child;
}
function zd(e) {
  var t = e.stateNode;
  t.pendingContext ? Fa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fa(e, t.context, !1), hs(e, t.containerInfo);
}
function tc(e, t, n, r, l) {
  return Dn(), ss(l), t.flags |= 256, ke(e, t, n, r), t.child;
}
var cu = { dehydrated: null, treeContext: null, retryLane: 0 };
function fu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Md(e, t, n) {
  var r = t.pendingProps, l = b.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), K(b, l & 1), e === null)
    return ru(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Uo(i, r, 0, null), e = tn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = fu(n), t.memoizedState = cu, e) : xs(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Qg(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Bt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Bt(u, o) : (o = tn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? fu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = cu, r;
  }
  return o = e.child, e = o.sibling, r = Bt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function xs(e, t) {
  return t = Uo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function sl(e, t, n, r) {
  return r !== null && ss(r), In(t, e.child, null, n), e = xs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Qg(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ki(Error(C(422))), sl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Uo({ mode: "visible", children: r.children }, l, 0, null), o = tn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && In(t, e.child, null, i), t.child.memoizedState = fu(i), t.memoizedState = cu, o);
  if (!(t.mode & 1))
    return sl(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(C(419)), r = ki(o, r, void 0), sl(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Pe || u) {
    if (r = se, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Et(e, l), nt(r, e, l, -1));
    }
    return Ns(), r = ki(Error(C(421))), sl(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = iv.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, De = It(l.nextSibling), Fe = t, X = !0, et = null, e !== null && (Ve[Ke++] = gt, Ve[Ke++] = vt, Ve[Ke++] = rn, gt = e.id, vt = e.overflow, rn = t), t = xs(t, r.children), t.flags |= 4096, t);
}
function nc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), lu(e.return, t, n);
}
function xi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Ad(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ke(e, t, r.children, n), r = b.current, r & 2)
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
  if (K(b, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && ql(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), xi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && ql(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        xi(t, !0, n, null, o);
        break;
      case "together":
        xi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ll(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ct(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), on |= t.lanes, !(n & t.childLanes))
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
function Xg(e, t, n) {
  switch (t.tag) {
    case 3:
      zd(t), Dn();
      break;
    case 5:
      id(t);
      break;
    case 1:
      Ne(t.type) && Ql(t);
      break;
    case 4:
      hs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      K(Gl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(b, b.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Md(e, t, n) : (K(b, b.current & 1), e = Ct(e, t, n), e !== null ? e.sibling : null);
      K(b, b.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Ad(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), K(b, b.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ld(e, t, n);
  }
  return Ct(e, t, n);
}
var $d, du, Dd, Id;
$d = function(e, t) {
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
Dd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, qt(dt.current);
    var o = null;
    switch (n) {
      case "input":
        l = Ai(e, l), r = Ai(e, r), o = [];
        break;
      case "select":
        l = Z({}, l, { value: void 0 }), r = Z({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Ii(e, l), r = Ii(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kl);
    }
    ji(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Sr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (o || (o = []), o.push(
              a,
              n
            )), n = s;
        else
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Sr.hasOwnProperty(a) ? (s != null && a === "onScroll" && Y("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Id = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jn(e, t) {
  if (!X)
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
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function bg(e, t, n) {
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
      return ye(t), null;
    case 1:
      return Ne(t.type) && Yl(), ye(t), null;
    case 3:
      return r = t.stateNode, Fn(), Q(Te), Q(we), ys(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (il(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, et !== null && (Su(et), et = null))), du(e, t), ye(t), null;
    case 5:
      ms(t);
      var l = qt(zr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Dd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(C(166));
          return ye(t), null;
        }
        if (e = qt(dt.current), il(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[at] = t, r[Lr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < lr.length; l++)
                Y(lr[l], r);
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
              fa(r, o), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Y("invalid", r);
              break;
            case "textarea":
              pa(r, o), Y("invalid", r);
          }
          ji(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ol(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ol(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Sr.hasOwnProperty(i) && u != null && i === "onScroll" && Y("scroll", r);
            }
          switch (n) {
            case "input":
              Zr(r), da(r, o, !0);
              break;
            case "textarea":
              Zr(r), ha(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Kl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ff(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[at] = t, e[Lr] = r, $d(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ui(n, r), n) {
              case "dialog":
                Y("cancel", e), Y("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < lr.length; l++)
                  Y(lr[l], e);
                l = r;
                break;
              case "source":
                Y("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  e
                ), Y("load", e), l = r;
                break;
              case "details":
                Y("toggle", e), l = r;
                break;
              case "input":
                fa(e, r), l = Ai(e, r), Y("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Z({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                pa(e, r), l = Ii(e, r), Y("invalid", e);
                break;
              default:
                l = r;
            }
            ji(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? hf(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && df(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && kr(e, s) : typeof s == "number" && kr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Sr.hasOwnProperty(o) ? s != null && o === "onScroll" && Y("scroll", e) : s != null && Yu(e, o, s, i));
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
                e.multiple = !!r.multiple, o = r.value, o != null ? Tn(e, !!r.multiple, o, !1) : r.defaultValue != null && Tn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Kl);
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
        Id(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(C(166));
        if (n = qt(zr.current), qt(dt.current), il(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (o = r.nodeValue !== n) && (e = Fe, e !== null))
            switch (e.tag) {
              case 3:
                ol(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ol(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r;
      }
      return ye(t), null;
    case 13:
      if (Q(b), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (X && De !== null && t.mode & 1 && !(t.flags & 128))
          td(), Dn(), t.flags |= 98560, o = !1;
        else if (o = il(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(C(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(C(317));
            o[at] = t;
          } else
            Dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ye(t), o = !1;
        } else
          et !== null && (Su(et), et = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || b.current & 1 ? ie === 0 && (ie = 3) : Ns())), t.updateQueue !== null && (t.flags |= 4), ye(t), null);
    case 4:
      return Fn(), du(e, t), e === null && Nr(t.stateNode.containerInfo), ye(t), null;
    case 10:
      return fs(t.type._context), ye(t), null;
    case 17:
      return Ne(t.type) && Yl(), ye(t), null;
    case 19:
      if (Q(b), o = t.memoizedState, o === null)
        return ye(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          Jn(o, !1);
        else {
          if (ie !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = ql(e), i !== null) {
                for (t.flags |= 128, Jn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return K(b, b.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && te() > Un && (t.flags |= 128, r = !0, Jn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = ql(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Jn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !X)
              return ye(t), null;
          } else
            2 * te() - o.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = !0, Jn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = te(), t.sibling = null, n = b.current, K(b, r ? n & 1 | 2 : n & 1), t) : (ye(t), null);
    case 22:
    case 23:
      return Ts(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Gg(e, t) {
  switch (us(t), t.tag) {
    case 1:
      return Ne(t.type) && Yl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Fn(), Q(Te), Q(we), ys(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ms(t), null;
    case 13:
      if (Q(b), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(C(340));
        Dn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Q(b), null;
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
var al = !1, ve = !1, Zg = typeof WeakSet == "function" ? WeakSet : Set, O = null;
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
function Jg(e, t) {
  if (Gi = Hl, e = Hf(), os(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, s = -1, a = 0, m = 0, d = e, h = null;
          t:
            for (; ; ) {
              for (var v; d !== n || l !== 0 && d.nodeType !== 3 || (u = i + l), d !== o || r !== 0 && d.nodeType !== 3 || (s = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (v = d.firstChild) !== null; )
                h = d, d = v;
              for (; ; ) {
                if (d === e)
                  break t;
                if (h === n && ++a === l && (u = i), h === o && ++m === r && (s = i), (v = d.nextSibling) !== null)
                  break;
                d = h, h = d.parentNode;
              }
              d = v;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Zi = { focusedElem: e, selectionRange: n }, Hl = !1, O = t; O !== null; )
    if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, O = e;
    else
      for (; O !== null; ) {
        t = O;
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
                  var g = S.memoizedProps, _ = S.memoizedState, c = t.stateNode, f = c.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Je(t.type, g), _);
                  c.__reactInternalSnapshotBeforeUpdate = f;
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
  return S = rc, rc = !1, S;
}
function hr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && pu(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Fo(e, t) {
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
  t !== null && (e.alternate = null, Fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[Lr], delete t[eu], delete t[Ag], delete t[$g])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function jd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lc(e) {
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
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (mu(e, t, n), e = e.sibling; e !== null; )
      mu(e, t, n), e = e.sibling;
}
function yu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (yu(e, t, n), e = e.sibling; e !== null; )
      yu(e, t, n), e = e.sibling;
}
var ce = null, qe = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; )
    Ud(e, t, n), n = n.sibling;
}
function Ud(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(Lo, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ve || En(n, t);
    case 6:
      var r = ce, l = qe;
      ce = null, Pt(e, t, n), ce = r, qe = l, ce !== null && (qe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null && (qe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? mi(e.parentNode, n) : e.nodeType === 1 && mi(e, n), _r(e)) : mi(ce, n.stateNode));
      break;
    case 4:
      r = ce, l = qe, ce = n.stateNode.containerInfo, qe = !0, Pt(e, t, n), ce = r, qe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && pu(n, t, i), l = l.next;
        } while (l !== r);
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
function oc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Zg()), t.forEach(function(r) {
      var l = uv.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
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
        Ud(o, i, l), ce = null, qe = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        ee(l, t, a);
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
      if (Ze(t, e), ot(e), r & 4) {
        try {
          hr(3, e, e.return), Fo(3, e);
        } catch (g) {
          ee(e, e.return, g);
        }
        try {
          hr(5, e, e.return);
        } catch (g) {
          ee(e, e.return, g);
        }
      }
      break;
    case 1:
      Ze(t, e), ot(e), r & 512 && n !== null && En(n, n.return);
      break;
    case 5:
      if (Ze(t, e), ot(e), r & 512 && n !== null && En(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          kr(l, "");
        } catch (g) {
          ee(e, e.return, g);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && af(l, o), Ui(u, i);
            var a = Ui(u, o);
            for (i = 0; i < s.length; i += 2) {
              var m = s[i], d = s[i + 1];
              m === "style" ? hf(l, d) : m === "dangerouslySetInnerHTML" ? df(l, d) : m === "children" ? kr(l, d) : Yu(l, m, d, a);
            }
            switch (u) {
              case "input":
                $i(l, o);
                break;
              case "textarea":
                cf(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null ? Tn(l, !!o.multiple, v, !1) : h !== !!o.multiple && (o.defaultValue != null ? Tn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Tn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Lr] = o;
          } catch (g) {
            ee(e, e.return, g);
          }
      }
      break;
    case 6:
      if (Ze(t, e), ot(e), r & 4) {
        if (e.stateNode === null)
          throw Error(C(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (g) {
          ee(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Ze(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          _r(t.containerInfo);
        } catch (g) {
          ee(e, e.return, g);
        }
      break;
    case 4:
      Ze(t, e), ot(e);
      break;
    case 13:
      Ze(t, e), ot(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (_s = te())), r & 4 && oc(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ve = (a = ve) || m, Ze(t, e), ve = a) : Ze(t, e), ot(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !m && e.mode & 1)
          for (O = e, m = e.child; m !== null; ) {
            for (d = O = m; O !== null; ) {
              switch (h = O, v = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hr(4, h, h.return);
                  break;
                case 1:
                  En(h, h.return);
                  var S = h.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                    } catch (g) {
                      ee(r, n, g);
                    }
                  }
                  break;
                case 5:
                  En(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    uc(d);
                    continue;
                  }
              }
              v !== null ? (v.return = h, O = v) : uc(d);
            }
            m = m.sibling;
          }
        e:
          for (m = null, d = e; ; ) {
            if (d.tag === 5) {
              if (m === null) {
                m = d;
                try {
                  l = d.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = d.stateNode, s = d.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = pf("display", i));
                } catch (g) {
                  ee(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (m === null)
                try {
                  d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                } catch (g) {
                  ee(e, e.return, g);
                }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e)
              break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e)
                break e;
              m === d && (m = null), d = d.return;
            }
            m === d && (m = null), d.sibling.return = d.return, d = d.sibling;
          }
      }
      break;
    case 19:
      Ze(t, e), ot(e), r & 4 && oc(e);
      break;
    case 21:
      break;
    default:
      Ze(
        t,
        e
      ), ot(e);
  }
}
function ot(e) {
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
          var l = r.stateNode;
          r.flags & 32 && (kr(l, ""), r.flags &= -33);
          var o = lc(e);
          yu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = lc(e);
          mu(e, u, i);
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
function qg(e, t, n) {
  O = e, Hd(e);
}
function Hd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || al;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ve;
        u = al;
        var a = ve;
        if (al = i, (ve = s) && !a)
          for (O = l; O !== null; )
            i = O, s = i.child, i.tag === 22 && i.memoizedState !== null ? sc(l) : s !== null ? (s.return = i, O = s) : sc(l);
        for (; o !== null; )
          O = o, Hd(o), o = o.sibling;
        O = l, al = u, ve = a;
      }
      ic(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, O = o) : ic(e);
  }
}
function ic(e) {
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
              ve || Fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Va(t, o, r);
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
                Va(t, i, n);
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
                    var d = m.dehydrated;
                    d !== null && _r(d);
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
            Fo(4, t);
          } catch (s) {
            ee(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ee(t, l, s);
            }
          }
          var o = t.return;
          try {
            hu(t);
          } catch (s) {
            ee(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            hu(t);
          } catch (s) {
            ee(t, i, s);
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
var ev = Math.ceil, no = _t.ReactCurrentDispatcher, Es = _t.ReactCurrentOwner, Qe = _t.ReactCurrentBatchConfig, U = 0, se = null, le = null, pe = 0, Ae = 0, Cn = Kt(0), ie = 0, Dr = null, on = 0, jo = 0, Cs = 0, mr = null, _e = null, _s = 0, Un = 1 / 0, mt = null, ro = !1, gu = null, jt = null, cl = !1, zt = null, lo = 0, yr = 0, vu = null, Ol = -1, zl = 0;
function xe() {
  return U & 6 ? te() : Ol !== -1 ? Ol : Ol = te();
}
function Ut(e) {
  return e.mode & 1 ? U & 2 && pe !== 0 ? pe & -pe : Ig.transition !== null ? (zl === 0 && (zl = Pf()), zl) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Mf(e.type)), e) : 1;
}
function nt(e, t, n, r) {
  if (50 < yr)
    throw yr = 0, vu = null, Error(C(185));
  Hr(e, n, r), (!(U & 2) || e !== se) && (e === se && (!(U & 2) && (jo |= n), ie === 4 && Lt(e, pe)), Re(e, r), n === 1 && U === 0 && !(t.mode & 1) && (Un = te() + 500, $o && Yt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Iy(e, t);
  var r = Bl(e, e === se ? pe : 0);
  if (r === 0)
    n !== null && ga(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ga(n), t === 1)
      e.tag === 0 ? Dg(ac.bind(null, e)) : Jf(ac.bind(null, e)), zg(function() {
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
          n = Ul;
          break;
        case 536870912:
          n = _f;
          break;
        default:
          n = Ul;
      }
      n = Gd(n, Wd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Wd(e, t) {
  if (Ol = -1, zl = 0, U & 6)
    throw Error(C(327));
  var n = e.callbackNode;
  if (zn() && e.callbackNode !== n)
    return null;
  var r = Bl(e, e === se ? pe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = oo(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var o = Kd();
    (se !== e || pe !== t) && (mt = null, Un = te() + 500, en(e, t));
    do
      try {
        rv();
        break;
      } catch (u) {
        Vd(e, u);
      }
    while (1);
    cs(), no.current = o, U = l, le !== null ? t = 0 : (se = null, pe = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ki(e), l !== 0 && (r = l, t = wu(e, l))), t === 1)
      throw n = Dr, en(e, 0), Lt(e, r), Re(e, te()), n;
    if (t === 6)
      Lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !tv(l) && (t = oo(e, r), t === 2 && (o = Ki(e), o !== 0 && (r = o, t = wu(e, o))), t === 1))
        throw n = Dr, en(e, 0), Lt(e, r), Re(e, te()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Gt(e, _e, mt);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = _s + 500 - te(), 10 < t)) {
            if (Bl(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              xe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = qi(Gt.bind(null, e, _e, mt), t);
            break;
          }
          Gt(e, _e, mt);
          break;
        case 4:
          if (Lt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - tt(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ev(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qi(Gt.bind(null, e, _e, mt), r);
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
  return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256), e = oo(e, t), e !== 2 && (t = _e, _e = n, t !== null && Su(t)), e;
}
function Su(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function tv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!rt(o(), l))
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
  for (t &= ~Cs, t &= ~jo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - tt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ac(e) {
  if (U & 6)
    throw Error(C(327));
  zn();
  var t = Bl(e, 0);
  if (!(t & 1))
    return Re(e, te()), null;
  var n = oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ki(e);
    r !== 0 && (t = r, n = wu(e, r));
  }
  if (n === 1)
    throw n = Dr, en(e, 0), Lt(e, t), Re(e, te()), n;
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
    U = n, U === 0 && (Un = te() + 500, $o && Yt());
  }
}
function un(e) {
  zt !== null && zt.tag === 0 && !(U & 6) && zn();
  var t = U;
  U |= 1;
  var n = Qe.transition, r = W;
  try {
    if (Qe.transition = null, W = 1, e)
      return e();
  } finally {
    W = r, Qe.transition = n, U = t, !(U & 6) && Yt();
  }
}
function Ts() {
  Ae = Cn.current, Q(Cn);
}
function en(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Og(n)), le !== null)
    for (n = le.return; n !== null; ) {
      var r = n;
      switch (us(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Yl();
          break;
        case 3:
          Fn(), Q(Te), Q(we), ys();
          break;
        case 5:
          ms(r);
          break;
        case 4:
          Fn();
          break;
        case 13:
          Q(b);
          break;
        case 19:
          Q(b);
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
  if (se = e, le = e = Bt(e.current, null), pe = Ae = t, ie = 0, Dr = null, Cs = jo = on = 0, _e = mr = null, Jt !== null) {
    for (t = 0; t < Jt.length; t++)
      if (n = Jt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    Jt = null;
  }
  return e;
}
function Vd(e, t) {
  do {
    var n = le;
    try {
      if (cs(), Nl.current = to, eo) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        eo = !1;
      }
      if (ln = 0, ue = oe = G = null, pr = !1, Mr = 0, Es.current = null, n === null || n.return === null) {
        ie = 1, Dr = t, le = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = pe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, m = u, d = m.tag;
          if (!(m.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = m.alternate;
            h ? (m.updateQueue = h.updateQueue, m.memoizedState = h.memoizedState, m.lanes = h.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var v = Ga(i);
          if (v !== null) {
            v.flags &= -257, Za(v, i, u, o, t), v.mode & 1 && ba(o, a, t), t = v, s = a;
            var S = t.updateQueue;
            if (S === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else
              S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ba(o, a, t), Ns();
              break e;
            }
            s = Error(C(426));
          }
        } else if (X && u.mode & 1) {
          var _ = Ga(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), Za(_, i, u, o, t), ss(jn(s, u));
            break e;
          }
        }
        o = s = jn(s, u), ie !== 4 && (ie = 2), mr === null ? mr = [o] : mr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var c = Td(o, s, t);
              Wa(o, c);
              break e;
            case 1:
              u = s;
              var f = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (jt === null || !jt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var k = Nd(o, u, t);
                Wa(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Qd(n);
    } catch (y) {
      t = y, le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Kd() {
  var e = no.current;
  return no.current = to, e === null ? to : e;
}
function Ns() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), se === null || !(on & 268435455) && !(jo & 268435455) || Lt(se, pe);
}
function oo(e, t) {
  var n = U;
  U |= 2;
  var r = Kd();
  (se !== e || pe !== t) && (mt = null, en(e, t));
  do
    try {
      nv();
      break;
    } catch (l) {
      Vd(e, l);
    }
  while (1);
  if (cs(), U = n, no.current = r, le !== null)
    throw Error(C(261));
  return se = null, pe = 0, ie;
}
function nv() {
  for (; le !== null; )
    Yd(le);
}
function rv() {
  for (; le !== null && !Ny(); )
    Yd(le);
}
function Yd(e) {
  var t = bd(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? Qd(e) : le = t, Es.current = null;
}
function Qd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Gg(n, t), n !== null) {
        n.flags &= 32767, le = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, le = null;
        return;
      }
    } else if (n = bg(n, t, Ae), n !== null) {
      le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Gt(e, t, n) {
  var r = W, l = Qe.transition;
  try {
    Qe.transition = null, W = 1, lv(e, t, n, r);
  } finally {
    Qe.transition = l, W = r;
  }
  return null;
}
function lv(e, t, n, r) {
  do
    zn();
  while (zt !== null);
  if (U & 6)
    throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Fy(e, o), e === se && (le = se = null, pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || cl || (cl = !0, Gd(Ul, function() {
    return zn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Qe.transition, Qe.transition = null;
    var i = W;
    W = 1;
    var u = U;
    U |= 4, Es.current = null, Jg(e, n), Bd(n, e), Cg(Zi), Hl = !!Gi, Zi = Gi = null, e.current = n, qg(n), Ry(), U = u, W = i, Qe.transition = o;
  } else
    e.current = n;
  if (cl && (cl = !1, zt = e, lo = l), o = e.pendingLanes, o === 0 && (jt = null), zy(n.stateNode), Re(e, te()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ro)
    throw ro = !1, e = gu, gu = null, e;
  return lo & 1 && e.tag !== 0 && zn(), o = e.pendingLanes, o & 1 ? e === vu ? yr++ : (yr = 0, vu = e) : yr = 0, Yt(), null;
}
function zn() {
  if (zt !== null) {
    var e = Tf(lo), t = Qe.transition, n = W;
    try {
      if (Qe.transition = null, W = 16 > e ? 16 : e, zt === null)
        var r = !1;
      else {
        if (e = zt, zt = null, lo = 0, U & 6)
          throw Error(C(331));
        var l = U;
        for (U |= 4, O = e.current; O !== null; ) {
          var o = O, i = o.child;
          if (O.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (O = a; O !== null; ) {
                  var m = O;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(8, m, o);
                  }
                  var d = m.child;
                  if (d !== null)
                    d.return = m, O = d;
                  else
                    for (; O !== null; ) {
                      m = O;
                      var h = m.sibling, v = m.return;
                      if (Fd(m), m === a) {
                        O = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = v, O = h;
                        break;
                      }
                      O = v;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var g = S.child;
                if (g !== null) {
                  S.child = null;
                  do {
                    var _ = g.sibling;
                    g.sibling = null, g = _;
                  } while (g !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, O = i;
          else
            e:
              for (; O !== null; ) {
                if (o = O, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(9, o, o.return);
                  }
                var c = o.sibling;
                if (c !== null) {
                  c.return = o.return, O = c;
                  break e;
                }
                O = o.return;
              }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          i = O;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null)
            p.return = i, O = p;
          else
            e:
              for (i = f; O !== null; ) {
                if (u = O, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fo(9, u);
                    }
                  } catch (y) {
                    ee(u, u.return, y);
                  }
                if (u === i) {
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
        if (U = l, Yt(), ft && typeof ft.onPostCommitFiberRoot == "function")
          try {
            ft.onPostCommitFiberRoot(Lo, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      W = n, Qe.transition = t;
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
function ov(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, se === e && (pe & n) === n && (ie === 4 || ie === 3 && (pe & 130023424) === pe && 500 > te() - _s ? en(e, 0) : Cs |= n), Re(e, t);
}
function Xd(e, t) {
  t === 0 && (e.mode & 1 ? (t = el, el <<= 1, !(el & 130023424) && (el = 4194304)) : t = 1);
  var n = xe();
  e = Et(e, t), e !== null && (Hr(e, t, n), Re(e, n));
}
function iv(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Xd(e, n);
}
function uv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Xd(e, n);
}
var bd;
bd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current)
      Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Pe = !1, Xg(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else
    Pe = !1, X && t.flags & 1048576 && qf(t, bl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ll(e, t), e = t.pendingProps;
      var l = $n(t, we.current);
      On(t, n), l = vs(null, t, r, e, l, n);
      var o = ws();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (o = !0, Ql(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ps(t), l.updater = Io, t.stateNode = l, l._reactInternals = t, iu(t, r, e, n), t = au(null, t, r, !0, o, n)) : (t.tag = 0, X && o && is(t), ke(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ll(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = av(r), e = Je(r, e), l) {
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Je(r, l), su(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Je(r, l), ec(e, t, r, l, n);
    case 3:
      e: {
        if (zd(t), e === null)
          throw Error(C(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, od(e, t), Jl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = jn(Error(C(423)), t), t = tc(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = jn(Error(C(424)), t), t = tc(e, t, r, n, l);
            break e;
          } else
            for (De = It(t.stateNode.containerInfo.firstChild), Fe = t, X = !0, et = null, n = rd(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Dn(), r === l) {
            t = Ct(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return id(t), e === null && ru(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Ji(r, l) ? i = null : o !== null && Ji(r, o) && (t.flags |= 32), Od(e, t), ke(e, t, i, n), t.child;
    case 6:
      return e === null && ru(t), null;
    case 13:
      return Md(e, t, n);
    case 4:
      return hs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = In(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Je(r, l), Ja(e, t, r, l, n);
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, K(Gl, r._currentValue), r._currentValue = i, o !== null)
          if (rt(o.value, i)) {
            if (o.children === l.children && !Te.current) {
              t = Ct(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = wt(-1, n & -n), s.tag = 2;
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var m = a.pending;
                        m === null ? s.next = s : (s.next = m.next, m.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), lu(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(C(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), lu(i, n, t), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ke(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, On(t, n), l = Xe(l), r = r(l), t.flags |= 1, ke(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Je(r, t.pendingProps), l = Je(r.type, l), qa(e, t, r, l, n);
    case 15:
      return Rd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Je(r, l), Ll(e, t), t.tag = 1, Ne(r) ? (e = !0, Ql(t)) : e = !1, On(t, n), Pd(t, r, l), iu(t, r, l, n), au(null, t, r, !0, e, n);
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
function sv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new sv(e, t, n, r);
}
function Rs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function av(e) {
  if (typeof e == "function")
    return Rs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Xu)
      return 11;
    if (e === bu)
      return 14;
  }
  return 2;
}
function Bt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ml(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Rs(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case hn:
          return tn(n.children, l, o, t);
        case Qu:
          i = 8, l |= 8;
          break;
        case Li:
          return e = Ye(12, n, t, l | 2), e.elementType = Li, e.lanes = o, e;
        case Oi:
          return e = Ye(13, n, t, l), e.elementType = Oi, e.lanes = o, e;
        case zi:
          return e = Ye(19, n, t, l), e.elementType = zi, e.lanes = o, e;
        case of:
          return Uo(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case rf:
                i = 10;
                break e;
              case lf:
                i = 9;
                break e;
              case Xu:
                i = 11;
                break e;
              case bu:
                i = 14;
                break e;
              case Tt:
                i = 16, r = null;
                break e;
            }
          throw Error(C(130, e == null ? e : typeof e, ""));
      }
  return t = Ye(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function tn(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function Uo(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = of, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ei(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function Ci(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function cv(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = li(0), this.expirationTimes = li(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = li(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ls(e, t, n, r, l, o, i, u, s) {
  return e = new cv(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ye(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ps(o), e;
}
function fv(e, t, n) {
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
function Jd(e, t, n, r, l, o, i, u, s) {
  return e = Ls(n, r, !0, e, l, o, i, u, s), e.context = Zd(null), n = e.current, r = xe(), l = Ut(n), o = wt(r, l), o.callback = t ?? null, Ft(n, o, l), e.current.lanes = l, Hr(e, l, r), Re(e, r), e;
}
function Bo(e, t, n, r) {
  var l = t.current, o = xe(), i = Ut(l);
  return n = Zd(n), t.context === null ? t.context = n : t.pendingContext = n, t = wt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ft(l, t, i), e !== null && (nt(e, l, i, o), Tl(e, l, i)), i;
}
function io(e) {
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
function dv() {
  return null;
}
var qd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function zs(e) {
  this._internalRoot = e;
}
Ho.prototype.render = zs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(C(409));
  Bo(e, t, null, null);
};
Ho.prototype.unmount = zs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      Bo(null, e, null, null);
    }), t[xt] = null;
  }
};
function Ho(e) {
  this._internalRoot = e;
}
Ho.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Lf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++)
      ;
    Rt.splice(n, 0, e), n === 0 && zf(e);
  }
};
function Ms(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Wo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function dc() {
}
function pv(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = io(i);
        o.call(a);
      };
    }
    var i = Jd(t, r, e, 0, null, !1, !1, "", dc);
    return e._reactRootContainer = i, e[xt] = i.current, Nr(e.nodeType === 8 ? e.parentNode : e), un(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = io(s);
      u.call(a);
    };
  }
  var s = Ls(e, 0, !1, null, null, !1, !1, "", dc);
  return e._reactRootContainer = s, e[xt] = s.current, Nr(e.nodeType === 8 ? e.parentNode : e), un(function() {
    Bo(t, s, n, r);
  }), s;
}
function Vo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = io(i);
        u.call(s);
      };
    }
    Bo(t, i, e, l);
  } else
    i = pv(n, t, e, l, r);
  return io(i);
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
          var l = xe();
          nt(r, e, 1, l);
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
Hi = function(e, t, n) {
  switch (t) {
    case "input":
      if ($i(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ao(r);
            if (!l)
              throw Error(C(90));
            sf(r), $i(r, l);
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
gf = Ps;
vf = un;
var hv = { usingClientEntryPoint: !1, Events: [Vr, vn, Ao, mf, yf, Ps] }, qn = { findFiberByHostInstance: Zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mv = { bundleType: qn.bundleType, version: qn.version, rendererPackageName: qn.rendererPackageName, rendererConfig: qn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = kf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: qn.findFiberByHostInstance || dv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fl.isDisabled && fl.supportsFiber)
    try {
      Lo = fl.inject(mv), ft = fl;
    } catch {
    }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hv;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ms(t))
    throw Error(C(200));
  return fv(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!Ms(e))
    throw Error(C(299));
  var n = !1, r = "", l = qd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ls(e, 1, !1, null, null, n, !1, r, l), e[xt] = t.current, Nr(e.nodeType === 8 ? e.parentNode : e), new zs(t);
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
  if (!Wo(t))
    throw Error(C(200));
  return Vo(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!Ms(e))
    throw Error(C(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = qd;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Jd(t, null, e, 1, n ?? null, l, !1, o, i), e[xt] = t.current, Nr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new Ho(t);
};
Be.render = function(e, t, n) {
  if (!Wo(t))
    throw Error(C(200));
  return Vo(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!Wo(e))
    throw Error(C(40));
  return e._reactRootContainer ? (un(function() {
    Vo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[xt] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = Ps;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Wo(n))
    throw Error(C(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(C(38));
  return Vo(e, t, n, !1, r);
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
function gv(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function vv({ layer: e, selected: t, onSelect: n, onMoveStart: r }) {
  if (!e.visible)
    return null;
  const l = {
    left: e.x,
    top: e.y,
    width: e.width,
    height: e.height,
    transform: e.rotation ? `rotate(${e.rotation}deg)` : void 0
  };
  let o = null;
  switch (e.type) {
    case "frame":
      o = /* @__PURE__ */ E(
        "div",
        {
          className: "chd-layer-frame",
          style: { background: e.fill || "#ffffff" }
        }
      );
      break;
    case "rect":
      o = /* @__PURE__ */ E(
        "div",
        {
          className: "chd-layer-rect",
          style: { background: e.fill || "#888780" }
        }
      );
      break;
    case "text":
      o = /* @__PURE__ */ E(
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
      o = e.src ? /* @__PURE__ */ E(
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
      style: l,
      "data-layer-id": e.id,
      onPointerDown: (i) => {
        i.button === 0 && (i.stopPropagation(), n(i), e.locked || r(i));
      },
      children: o
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
function dl(e) {
  return typeof e == "boolean" ? e : void 0;
}
let wv = 1;
function or() {
  return `layer-${Date.now().toString(36)}-${wv++}`;
}
function xu(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: or(),
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
        id: or(),
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
        id: or(),
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
        id: or(),
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
function Sv() {
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
function Me(e) {
  return JSON.parse(JSON.stringify(e));
}
function kv(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e;
  if (t.version !== 1 || !t.canvas || typeof t.canvas != "object" || !Array.isArray(t.layers))
    return null;
  const n = t.canvas, r = Number(n.width), l = Number(n.height);
  if (!Number.isFinite(r) || !Number.isFinite(l))
    return null;
  const o = [];
  for (const i of t.layers) {
    if (!i || typeof i != "object")
      continue;
    const u = i, s = u.type;
    if (s !== "frame" && s !== "rect" && s !== "text" && s !== "image")
      continue;
    const a = typeof u.id == "string" ? u.id : or(), m = typeof u.name == "string" ? u.name : s, d = Number(u.x), h = Number(u.y), v = Number(u.width), S = Number(u.height);
    if (![d, h, v, S].every(Number.isFinite))
      continue;
    const g = {
      id: a,
      type: s,
      name: m,
      x: d,
      y: h,
      width: v,
      height: S,
      rotation: typeof u.rotation == "number" ? u.rotation : void 0,
      visible: u.visible !== !1,
      locked: !!u.locked,
      allowTransform: !!u.allowTransform,
      fill: typeof u.fill == "string" ? u.fill : void 0,
      text: typeof u.text == "string" ? u.text : void 0,
      fontSize: typeof u.fontSize == "number" ? u.fontSize : void 0,
      color: typeof u.color == "string" ? u.color : void 0,
      src: typeof u.src == "string" ? u.src : void 0,
      pinLeft: dl(u.pinLeft),
      pinRight: dl(u.pinRight),
      pinTop: dl(u.pinTop),
      pinBottom: dl(u.pinBottom),
      objectFit: u.objectFit === "contain" || u.objectFit === "cover" ? u.objectFit : void 0
    };
    typeof u.editableContent == "boolean" ? g.editableContent = u.editableContent : g.editableContent = s === "text" || s === "image", o.push(g);
  }
  return {
    version: 1,
    canvas: {
      width: r,
      height: l,
      background: typeof n.background == "string" ? n.background : void 0,
      presetId: typeof n.presetId == "string" ? n.presetId : void 0
    },
    layers: o
  };
}
function rp(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function Ko(e) {
  return e.locked ? !1 : rp(e);
}
function Yr(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function As(e, t) {
  return t === "admin" ? !0 : e.visible ? Ko(e) || Yr(e) : !1;
}
function xv(e, t, n) {
  const r = {}, l = new Map(e.layers.map((o) => [o.id, o]));
  for (const o of t.layers) {
    const i = l.get(o.id);
    if (!i)
      continue;
    const u = {};
    Yr(i) && (o.x !== i.x && (u.x = o.x), o.y !== i.y && (u.y = o.y), o.width !== i.width && (u.width = o.width), o.height !== i.height && (u.height = o.height)), Ko(i) && ((o.text ?? "") !== (i.text ?? "") && (u.text = o.text), (o.fill ?? "") !== (i.fill ?? "") && (u.fill = o.fill), (o.color ?? "") !== (i.color ?? "") && (u.color = o.color), (o.src ?? "") !== (i.src ?? "") && (u.src = o.src)), Object.keys(u).length > 0 && (r[o.id] = u);
  }
  return { version: 1, templateId: n, overrides: r };
}
function Ev(e, t) {
  const n = {};
  return Yr(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), Ko(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const Mt = 24, hc = 1, lp = 0.25, op = 3, Cv = 8;
function pl(e, t) {
  return Math.abs(e - t) <= Cv;
}
function hl(e, t) {
  return e === !0 ? !0 : e === !1 ? !1 : t;
}
function ip(e, t, n) {
  return {
    left: hl(e.pinLeft, pl(e.x, 0)),
    right: hl(e.pinRight, pl(e.x + e.width, t)),
    top: hl(e.pinTop, pl(e.y, 0)),
    bottom: hl(e.pinBottom, pl(e.y + e.height, n))
  };
}
function mc(e, t, n, r, l, o) {
  const i = e, u = n - e - t;
  if (l && o) {
    const a = i, m = Math.max(Mt, r - i - u);
    return { start: a, size: m };
  }
  if (l)
    return { start: i, size: t };
  if (o) {
    const a = t;
    return { start: Math.max(0, r - u - a), size: a };
  }
  const s = n === 0 ? 1 : r / n;
  return {
    start: e * s,
    size: Math.max(Mt, t * s)
  };
}
function _v(e, t, n) {
  if (t.width === n.width && t.height === n.height)
    return e;
  const r = ip(e, t.width, t.height), l = mc(e.x, e.width, t.width, n.width, r.left, r.right), o = mc(e.y, e.height, t.height, n.height, r.top, r.bottom), i = r.left && r.right && r.top && r.bottom;
  return {
    ...e,
    x: l.start,
    y: o.start,
    width: l.size,
    height: o.size,
    objectFit: e.objectFit ?? (i && e.type === "image" ? "cover" : e.objectFit)
  };
}
function Pv(e, t, n, r) {
  const l = { width: e.canvas.width, height: e.canvas.height }, o = { width: t, height: n };
  return {
    ...e,
    canvas: {
      ...e.canvas,
      width: t,
      height: n,
      presetId: r
    },
    layers: e.layers.map((i) => _v(i, l, o))
  };
}
function up(e, t, n) {
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
const Tv = 50, sp = L.createContext(null);
function Nv(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [l] = r.splice(t, 1);
  return r.splice(n, 0, l), r;
}
function yc(e, t, n) {
  if (t.length === 0)
    return e;
  const r = new Set(t), l = [...e];
  if (n === "forward") {
    for (let o = l.length - 2; o >= 0; o -= 1)
      if (r.has(l[o].id) && !r.has(l[o + 1].id)) {
        const i = l[o];
        l[o] = l[o + 1], l[o + 1] = i;
      }
  } else
    for (let o = 1; o < l.length; o += 1)
      if (r.has(l[o].id) && !r.has(l[o - 1].id)) {
        const i = l[o];
        l[o] = l[o - 1], l[o - 1] = i;
      }
  return l;
}
function Rv({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: l,
  onDocumentChange: o,
  onInstanceChange: i
}) {
  const u = L.useRef(null);
  u.current || (u.current = n ? Me(n) : Sv());
  const s = L.useRef(
    Me(r ?? n ?? u.current)
  ), a = L.useRef(t);
  a.current = t;
  const [m, d] = L.useState(() => Me(u.current)), [h, v] = L.useState([]), [S, g] = L.useState({
    zoom: hc,
    panX: 40,
    panY: 40
  }), _ = L.useRef([Me(u.current)]), c = L.useRef(0), [f, p] = L.useState(0), k = L.useRef(h);
  k.current = h;
  const y = L.useRef(m);
  y.current = m;
  const x = L.useRef(o);
  x.current = o;
  const w = L.useRef(i);
  w.current = i;
  const R = L.useRef(l);
  R.current = l;
  const I = L.useCallback(() => p(($) => $ + 1), []), z = L.useCallback(($) => {
    var P, T;
    if ((P = x.current) == null || P.call(x, Me($)), a.current === "endUser") {
      const N = R.current ?? "";
      (T = w.current) == null || T.call(
        w,
        xv(s.current, $, N)
      );
    }
  }, []), F = L.useCallback(
    ($) => {
      const P = _.current.slice(0, c.current + 1);
      for (P.push(Me($)); P.length > Tv; )
        P.shift();
      _.current = P, c.current = P.length - 1, I();
    },
    [I]
  ), Oe = L.useCallback(
    ($, P) => {
      d($), y.current = $, P && F($), z($);
    },
    [z, F]
  ), ze = L.useCallback(
    ($) => {
      const P = a.current === "endUser";
      switch ($.type) {
        case "ADD_LAYER": {
          if (P)
            return;
          const T = xu($.layerType, $.at);
          d((N) => {
            const M = { ...N, layers: [...N.layers, T] };
            return F(M), z(M), M;
          }), v([T.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const T = $.pushHistory !== !1;
          d((N) => {
            const M = {
              ...N,
              layers: N.layers.map((j) => {
                if (j.id !== $.id)
                  return j;
                const ht = P ? Ev(j, $.patch) : $.patch;
                if (Object.keys(ht).length === 0)
                  return j;
                const Se = { ...j, ...ht };
                return typeof Se.width == "number" && (Se.width = Math.max(Mt, Se.width)), typeof Se.height == "number" && (Se.height = Math.max(Mt, Se.height)), Se;
              })
            };
            return T && F(M), z(M), M;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if (P)
            return;
          const T = new Set($.ids ?? k.current);
          if (T.size === 0)
            return;
          d((N) => {
            const M = {
              ...N,
              layers: N.layers.filter((j) => !T.has(j.id))
            };
            return F(M), z(M), M;
          }), v((N) => N.filter((M) => !T.has(M)));
          break;
        }
        case "SELECT": {
          v((T) => {
            const N = $.ids.filter((M) => {
              const j = y.current.layers.find((ht) => ht.id === M);
              return j ? As(j, a.current) : !1;
            });
            if ($.additive) {
              const M = new Set(T);
              for (const j of N)
                M.has(j) ? M.delete(j) : M.add(j);
              return Array.from(M);
            }
            return N;
          });
          break;
        }
        case "UNSELECT_ALL": {
          v([]);
          break;
        }
        case "REORDER": {
          if (P)
            return;
          d((T) => {
            const N = {
              ...T,
              layers: Nv(T.layers, $.fromIndex, $.toIndex)
            };
            return F(N), z(N), N;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if (P)
            return;
          d((T) => {
            const N = {
              ...T,
              layers: T.layers.map(
                (M) => M.id === $.id ? { ...M, visible: $.visible } : M
              )
            };
            return F(N), z(N), N;
          });
          break;
        }
        case "BRING_FORWARD": {
          if (P)
            return;
          const T = k.current;
          d((N) => {
            const M = { ...N, layers: yc(N.layers, T, "forward") };
            return F(M), z(M), M;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if (P)
            return;
          const T = k.current;
          d((N) => {
            const M = { ...N, layers: yc(N.layers, T, "backward") };
            return F(M), z(M), M;
          });
          break;
        }
        case "ZOOM_SET": {
          g((T) => ({
            ...T,
            zoom: np($.zoom, lp, op)
          }));
          break;
        }
        case "ZOOM_RESET": {
          g({ zoom: hc, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          g((T) => ({
            ...T,
            panX: $.panX,
            panY: $.panY
          }));
          break;
        }
        case "UNDO": {
          if (c.current <= 0)
            return;
          c.current -= 1;
          const T = Me(_.current[c.current]);
          d(T), y.current = T, v([]), I(), z(T);
          break;
        }
        case "REDO": {
          if (c.current >= _.current.length - 1)
            return;
          c.current += 1;
          const T = Me(_.current[c.current]);
          d(T), y.current = T, v([]), I(), z(T);
          break;
        }
        case "LOAD_DOCUMENT": {
          Oe(Me($.document), !0), v([]);
          break;
        }
        case "SET_CANVAS_SIZE": {
          if (P)
            return;
          d((T) => {
            if (T.canvas.width === $.width && T.canvas.height === $.height && $.presetId && T.canvas.presetId === $.presetId)
              return T;
            const N = Pv(T, $.width, $.height, $.presetId);
            return F(N), z(N), N;
          });
          break;
        }
        case "COMMIT": {
          d((T) => (F(T), z(T), T));
          break;
        }
      }
    },
    [Oe, I, z, F]
  ), lt = L.useCallback(() => Me(m), [m]), Qt = L.useCallback(
    ($) => {
      if (a.current === "endUser")
        return !1;
      try {
        const P = kv(JSON.parse($));
        return P ? (s.current = Me(P), Oe(P, !0), v([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [Oe]
  );
  L.useEffect(() => {
    t === "admin" && n && (s.current = Me(n)), t === "endUser" && r && (s.current = Me(r));
  }, [n, r, t]);
  const pt = L.useMemo(
    () => ({
      mode: t,
      templateId: l,
      document: m,
      selection: h,
      viewport: S,
      canUndo: c.current > 0,
      canRedo: c.current < _.current.length - 1,
      dispatch: ze,
      exportDocument: lt,
      importDocumentJson: Qt
    }),
    [t, l, m, h, S, ze, lt, Qt, f]
  );
  return /* @__PURE__ */ E(sp.Provider, { value: pt, children: e });
}
function cn() {
  const e = L.useContext(sp);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function $s() {
  return cn().mode;
}
function Ds() {
  return cn().document;
}
function ap() {
  return cn().document.layers;
}
function Yo() {
  return cn().selection;
}
function cp() {
  return cn().viewport;
}
function Qo() {
  return cn().dispatch;
}
function Lv() {
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
const Ov = ["nw", "ne", "sw", "se"];
function zv() {
  const e = Ds(), t = Yo(), n = cp(), r = Qo(), l = $s(), [o, i] = L.useState(null), [u, s] = L.useState(!1), a = L.useRef(n);
  a.current = n;
  const m = L.useRef(l);
  m.current = l, L.useEffect(() => {
    const y = (w) => {
      if (w.code === "Space" && !(w.target instanceof HTMLInputElement) && !(w.target instanceof HTMLTextAreaElement) && (w.preventDefault(), s(!0)), m.current === "admin" && (w.key === "Delete" || w.key === "Backspace") && t.length > 0) {
        const R = w.target.tagName;
        if (R === "INPUT" || R === "TEXTAREA")
          return;
        w.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (w.ctrlKey || w.metaKey) && w.key.toLowerCase() === "z" && !w.shiftKey && (w.preventDefault(), r({ type: "UNDO" })), (w.ctrlKey || w.metaKey) && (w.key.toLowerCase() === "y" || w.key.toLowerCase() === "z" && w.shiftKey) && (w.preventDefault(), r({ type: "REDO" }));
    }, x = (w) => {
      w.code === "Space" && s(!1);
    };
    return window.addEventListener("keydown", y), window.addEventListener("keyup", x), () => {
      window.removeEventListener("keydown", y), window.removeEventListener("keyup", x);
    };
  }, [r, t.length]), L.useEffect(() => {
    if (!o)
      return;
    const y = (w) => {
      const R = a.current.zoom;
      if (o.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: o.origPanX + (w.clientX - o.startX),
          panY: o.origPanY + (w.clientY - o.startY)
        });
        return;
      }
      const { dx: I, dy: z } = gv(
        w.clientX - o.startX,
        w.clientY - o.startY,
        R
      );
      if (o.kind === "move") {
        for (const Qt of o.ids) {
          const pt = o.origins[Qt];
          pt && r({
            type: "UPDATE_LAYER",
            id: Qt,
            patch: { x: pt.x + I, y: pt.y + z },
            pushHistory: !1
          });
        }
        return;
      }
      let F = o.origX, Oe = o.origY, ze = o.origW, lt = o.origH;
      o.handle.includes("e") && (ze = Math.max(Mt, o.origW + I)), o.handle.includes("s") && (lt = Math.max(Mt, o.origH + z)), o.handle.includes("w") && (ze = Math.max(Mt, o.origW - I), F = o.origX + (o.origW - ze)), o.handle.includes("n") && (lt = Math.max(Mt, o.origH - z), Oe = o.origY + (o.origH - lt)), r({
        type: "UPDATE_LAYER",
        id: o.id,
        patch: { x: F, y: Oe, width: ze, height: lt },
        pushHistory: !1
      });
    }, x = () => {
      (o.kind === "move" || o.kind === "resize") && r({ type: "COMMIT" }), i(null);
    };
    return window.addEventListener("pointermove", y), window.addEventListener("pointerup", x), () => {
      window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", x);
    };
  }, [o, r]);
  const d = (y) => {
    y.preventDefault();
    const x = np(n.zoom * (y.deltaY < 0 ? 1.08 : 0.92), lp, op);
    r({ type: "ZOOM_SET", zoom: x });
  }, h = (y) => {
    i({
      kind: "pan",
      startX: y.clientX,
      startY: y.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, v = (y) => {
    if (y.button === 1 || y.button === 0 && u) {
      y.preventDefault(), h(y);
      return;
    }
    y.button === 0 && r({ type: "UNSELECT_ALL" });
  }, S = (y, x) => {
    As(y, l) && r({
      type: "SELECT",
      ids: [y.id],
      additive: x.shiftKey
    });
  }, g = (y) => l === "admin" ? !y.locked : Yr(y), _ = (y, x) => {
    if (!g(y) || u)
      return;
    const w = t.includes(y.id) ? t : [y.id];
    t.includes(y.id) || r({ type: "SELECT", ids: [y.id] });
    const R = {};
    for (const I of w) {
      const z = e.layers.find((F) => F.id === I);
      z && g(z) && (R[I] = { x: z.x, y: z.y });
    }
    Object.keys(R).length !== 0 && i({
      kind: "move",
      ids: Object.keys(R),
      startX: x.clientX,
      startY: x.clientY,
      origins: R
    });
  }, c = (y, x, w) => {
    w.stopPropagation(), g(y) && (r({ type: "SELECT", ids: [y.id] }), i({
      kind: "resize",
      id: y.id,
      startX: w.clientX,
      startY: w.clientY,
      origX: y.x,
      origY: y.y,
      origW: y.width,
      origH: y.height,
      handle: x
    }));
  }, f = e.layers.filter((y) => t.includes(y.id) && y.visible), p = f.length === 1 ? f[0] : null, k = p ? g(p) : !1;
  return /* @__PURE__ */ A(
    "div",
    {
      className: `chd-viewport${u ? " chd-viewport--panning" : ""}`,
      onWheel: d,
      onPointerDown: v,
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
                    vv,
                    {
                      layer: y,
                      selected: t.includes(y.id),
                      onSelect: (x) => S(y, x),
                      onMoveStart: (x) => _(y, x)
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
                      children: Ov.map((y) => /* @__PURE__ */ E(
                        "div",
                        {
                          className: `chd-handle chd-handle--${y}`,
                          onPointerDown: (x) => c(p, y, x)
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
                  f.length > 1 ? f.map((y) => /* @__PURE__ */ E(
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
function Mv() {
  const e = ap(), t = Yo(), n = Qo(), r = $s(), l = r === "admin", o = [...e].map((i, u) => ({ layer: i, index: u })).reverse().filter(({ layer: i }) => l || As(i, r));
  return /* @__PURE__ */ A("aside", { className: "chd-panel chd-layers-panel", "aria-label": "Layers", children: [
    /* @__PURE__ */ E("div", { className: "chd-panel-header", children: l ? "Layers" : "Editable layers" }),
    /* @__PURE__ */ E("ul", { className: "chd-layer-list", children: o.length === 0 ? /* @__PURE__ */ E("li", { className: "chd-panel-empty", children: "No editable layers" }) : o.map(({ layer: i, index: u }) => {
      const s = t.includes(i.id);
      return /* @__PURE__ */ A(
        "li",
        {
          className: `chd-layer-list-item${s ? " chd-layer-list-item--selected" : ""}`,
          children: [
            /* @__PURE__ */ A(
              "button",
              {
                type: "button",
                className: "chd-layer-list-select",
                onClick: (a) => n({
                  type: "SELECT",
                  ids: [i.id],
                  additive: a.shiftKey
                }),
                children: [
                  /* @__PURE__ */ E("span", { className: "chd-layer-list-type", children: i.type }),
                  /* @__PURE__ */ E("span", { className: "chd-layer-list-name", children: i.name })
                ]
              }
            ),
            l ? /* @__PURE__ */ A(ir, { children: [
              /* @__PURE__ */ E(
                "button",
                {
                  type: "button",
                  className: "chd-icon-btn",
                  title: i.visible ? "Hide" : "Show",
                  onClick: () => n({
                    type: "SET_VISIBILITY",
                    id: i.id,
                    visible: !i.visible
                  }),
                  children: i.visible ? "◉" : "○"
                }
              ),
              /* @__PURE__ */ E(
                "button",
                {
                  type: "button",
                  className: "chd-icon-btn",
                  title: "Move up (forward)",
                  disabled: u >= e.length - 1,
                  onClick: () => n({ type: "REORDER", fromIndex: u, toIndex: u + 1 }),
                  children: "↑"
                }
              ),
              /* @__PURE__ */ E(
                "button",
                {
                  type: "button",
                  className: "chd-icon-btn",
                  title: "Move down (back)",
                  disabled: u <= 0,
                  onClick: () => n({ type: "REORDER", fromIndex: u, toIndex: u - 1 }),
                  children: "↓"
                }
              )
            ] }) : null
          ]
        },
        i.id
      );
    }) })
  ] });
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
        onChange: (l) => n(Number(l.target.value))
      }
    )
  ] });
}
function Av() {
  const e = ap(), t = Yo(), n = Qo(), r = $s(), l = Ds(), o = r === "admin", i = e.filter((d) => t.includes(d.id)), u = i.length === 1 ? i[0] : null, s = (d) => {
    u && n({ type: "UPDATE_LAYER", id: u.id, patch: d });
  }, a = u ? o ? !u.locked : Yr(u) : !1, m = u ? o ? !u.locked : Ko(u) : !1;
  return /* @__PURE__ */ A("aside", { className: "chd-panel chd-properties-panel", "aria-label": "Properties", children: [
    /* @__PURE__ */ E("div", { className: "chd-panel-header", children: "Properties" }),
    u ? /* @__PURE__ */ A("div", { className: "chd-properties-body", children: [
      o ? /* @__PURE__ */ A("label", { className: "chd-field", children: [
        /* @__PURE__ */ E("span", { children: "Name" }),
        /* @__PURE__ */ E(
          "input",
          {
            type: "text",
            value: u.name,
            onChange: (d) => s({ name: d.target.value })
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
            disabled: !a,
            onChange: (d) => s({ x: d })
          }
        ),
        /* @__PURE__ */ E(
          er,
          {
            label: "Y",
            value: Math.round(u.y),
            disabled: !a,
            onChange: (d) => s({ y: d })
          }
        )
      ] }),
      /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ E(
          er,
          {
            label: "W",
            value: Math.round(u.width),
            disabled: !a,
            onChange: (d) => s({ width: d })
          }
        ),
        /* @__PURE__ */ E(
          er,
          {
            label: "H",
            value: Math.round(u.height),
            disabled: !a,
            onChange: (d) => s({ height: d })
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
            onChange: (d) => s({ fill: d.target.value })
          }
        )
      ] }),
      m && u.type === "text" && /* @__PURE__ */ A(ir, { children: [
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ E("span", { children: "Text" }),
          /* @__PURE__ */ E(
            "textarea",
            {
              rows: 3,
              value: u.text || "",
              onChange: (d) => s({ text: d.target.value })
            }
          )
        ] }),
        o ? /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
          /* @__PURE__ */ E(
            er,
            {
              label: "Size",
              value: u.fontSize ?? 16,
              onChange: (d) => s({ fontSize: d })
            }
          ),
          /* @__PURE__ */ A("label", { className: "chd-field", children: [
            /* @__PURE__ */ E("span", { children: "Color" }),
            /* @__PURE__ */ E(
              "input",
              {
                type: "color",
                value: u.color && /^#/.test(u.color) ? u.color : "#1a1a1a",
                onChange: (d) => s({ color: d.target.value })
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
              onChange: (d) => s({ color: d.target.value })
            }
          )
        ] })
      ] }),
      m && u.type === "image" && /* @__PURE__ */ A(ir, { children: [
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ E("span", { children: "Image URL" }),
          /* @__PURE__ */ E(
            "input",
            {
              type: "url",
              placeholder: "https://…",
              value: u.src || "",
              onChange: (d) => s({ src: d.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ E("span", { children: "Fit" }),
          /* @__PURE__ */ A(
            "select",
            {
              value: u.objectFit || "cover",
              onChange: (d) => s({ objectFit: d.target.value }),
              children: [
                /* @__PURE__ */ E("option", { value: "cover", children: "Cover — fill page, keep photo ratio" }),
                /* @__PURE__ */ E("option", { value: "contain", children: "Contain — whole photo, may letterbox" })
              ]
            }
          )
        ] })
      ] }),
      o ? /* @__PURE__ */ A(ir, { children: [
        /* @__PURE__ */ A("div", { className: "chd-field", children: [
          /* @__PURE__ */ E("span", { children: "Pin to page" }),
          /* @__PURE__ */ E("div", { className: "chd-pin-grid", children: ["pinTop", "pinLeft", "pinRight", "pinBottom"].map((d) => {
            const h = ip(u, l.canvas.width, l.canvas.height), v = {
              pinTop: h.top,
              pinLeft: h.left,
              pinRight: h.right,
              pinBottom: h.bottom
            }[d];
            return /* @__PURE__ */ A("label", { className: "chd-field-checkbox", children: [
              /* @__PURE__ */ E(
                "input",
                {
                  type: "checkbox",
                  checked: v,
                  onChange: (g) => s({ [d]: g.target.checked })
                }
              ),
              /* @__PURE__ */ E("span", { children: {
                pinTop: "Top",
                pinLeft: "Left",
                pinRight: "Right",
                pinBottom: "Bottom"
              }[d] })
            ] }, d);
          }) }),
          /* @__PURE__ */ E("p", { className: "chd-field-hint", children: "Top + left + right keeps a full-width strip. All four edges keep a full-page image when you switch portrait/landscape." })
        ] }),
        /* @__PURE__ */ E(
          "button",
          {
            type: "button",
            className: "chd-btn",
            onClick: () => s(up(u, l.canvas.width, l.canvas.height)),
            children: "Fill page"
          }
        ),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ E(
            "input",
            {
              type: "checkbox",
              checked: !!u.locked,
              onChange: (d) => s({ locked: d.target.checked })
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
              onChange: (d) => s({ allowTransform: d.target.checked })
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
              onChange: (d) => s({ editableContent: d.target.checked })
            }
          ),
          /* @__PURE__ */ E("span", { children: "Editable content (end user)" })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ E("p", { className: "chd-panel-empty", children: i.length > 1 ? `${i.length} layers selected` : "Select a layer" })
  ] });
}
function Xo(e, t) {
  return {
    width: Math.round(e / 25.4 * 96),
    height: Math.round(t / 25.4 * 96)
  };
}
function ml(e, t) {
  return {
    width: Math.round(e * 96),
    height: Math.round(t * 96)
  };
}
const yl = Xo(210, 297), gl = Xo(297, 420), vl = Xo(148, 210), Is = [
  { id: "a4-portrait", group: "print", label: "A4 portrait", width: yl.width, height: yl.height },
  { id: "a4-landscape", group: "print", label: "A4 landscape", width: yl.height, height: yl.width },
  { id: "a3-portrait", group: "print", label: "A3 portrait", width: gl.width, height: gl.height },
  { id: "a3-landscape", group: "print", label: "A3 landscape", width: gl.height, height: gl.width },
  { id: "a5-portrait", group: "print", label: "A5 portrait", width: vl.width, height: vl.height },
  { id: "a5-landscape", group: "print", label: "A5 landscape", width: vl.height, height: vl.width },
  { id: "letter-portrait", group: "print", label: "Letter portrait", ...ml(8.5, 11) },
  { id: "letter-landscape", group: "print", label: "Letter landscape", ...ml(11, 8.5) },
  { id: "tabloid-portrait", group: "print", label: "Tabloid portrait", ...ml(11, 17) },
  { id: "tabloid-landscape", group: "print", label: "Tabloid landscape", ...ml(17, 11) },
  {
    id: "business-card",
    group: "print",
    label: "Business card",
    ...Xo(85, 55)
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
  return Is.find((t) => t.id === e);
}
function Dv(e, t, n) {
  if (n && Eu(n)) {
    const l = Eu(n);
    if (l.width === e && l.height === t)
      return l.id;
  }
  const r = Is.find((l) => l.width === e && l.height === t);
  return (r == null ? void 0 : r.id) ?? "custom";
}
const Iv = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function Fv() {
  const e = Qo(), t = Yo(), n = cp(), r = Ds(), { mode: l, canUndo: o, canRedo: i, exportDocument: u, importDocumentJson: s } = Lv(), a = L.useRef(null), m = l === "admin", d = Dv(
    r.canvas.width,
    r.canvas.height,
    r.canvas.presetId
  ), h = () => {
    const _ = u(), c = new Blob([JSON.stringify(_, null, 2)], { type: "application/json" }), f = URL.createObjectURL(c), p = r.createElement("a");
    p.href = f, p.download = "chdesigner-document.json", p.click(), URL.revokeObjectURL(f);
  }, v = async (_) => {
    if (!_)
      return;
    const c = await _.text();
    s(c) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  }, S = (_) => {
    const c = Eu(_);
    c && e({
      type: "SET_CANVAS_SIZE",
      width: c.width,
      height: c.height,
      presetId: c.id
    });
  }, g = () => {
    const _ = r.layers.filter((c) => t.includes(c.id));
    for (const c of _)
      e({
        type: "UPDATE_LAYER",
        id: c.id,
        patch: up(c, r.canvas.width, r.canvas.height)
      });
  };
  return /* @__PURE__ */ A("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ A("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ E("span", { className: "chd-toolbar-logo-wrap", children: "Logo" }),
      /* @__PURE__ */ E("span", { className: "chd-toolbar-mode", children: m ? "Admin" : "Edit" })
    ] }),
    m ? /* @__PURE__ */ E("div", { className: "chd-toolbar-group", children: Iv.map((_) => /* @__PURE__ */ A(
      "button",
      {
        type: "button",
        className: "chd-btn",
        onClick: () => e({ type: "ADD_LAYER", layerType: _.type }),
        children: [
          "+ ",
          _.label
        ]
      },
      _.type
    )) }) : null,
    m ? /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ A("label", { className: "chd-toolbar-field", children: [
        /* @__PURE__ */ E("span", { children: "Page" }),
        /* @__PURE__ */ A(
          "select",
          {
            className: "chd-toolbar-select",
            value: d,
            onChange: (_) => S(_.target.value),
            children: [
              d === "custom" ? /* @__PURE__ */ E("option", { value: "custom", children: "Custom" }) : null,
              $v.map((_) => /* @__PURE__ */ E("optgroup", { label: _.label, children: Is.filter((c) => c.group === _.id).map((c) => /* @__PURE__ */ E("option", { value: c.id, children: c.label }, c.id)) }, _.id))
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
          onClick: g,
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
          disabled: !o,
          onClick: () => e({ type: "UNDO" }),
          children: "Undo"
        }
      ),
      /* @__PURE__ */ E(
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
    /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ A("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ZOOM_RESET" }), children: [
        Math.round(n.zoom * 100),
        "%"
      ] }),
      m ? /* @__PURE__ */ A(ir, { children: [
        /* @__PURE__ */ E("button", { type: "button", className: "chd-btn", onClick: h, children: "Export" }),
        /* @__PURE__ */ E("button", { type: "button", className: "chd-btn", onClick: () => {
          var _;
          return (_ = a.current) == null ? void 0 : _.click();
        }, children: "Import" }),
        /* @__PURE__ */ E(
          "input",
          {
            ref: a,
            type: "file",
            accept: "application/json,.json",
            className: "chd-file-input",
            onChange: (_) => {
              var c;
              v(((c = _.target.files) == null ? void 0 : c[0]) ?? null), _.target.value = "";
            }
          }
        )
      ] }) : null
    ] })
  ] });
}
function jv({
  mode: e = "admin",
  document: t,
  templateDocument: n,
  templateId: r,
  onDocumentChange: l,
  onInstanceChange: o,
  statusSlot: i,
  statusClassName: u
}) {
  return /* @__PURE__ */ E(Rv, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    onDocumentChange: l,
    onInstanceChange: o
  }, children: /* @__PURE__ */ A("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ E(Fv, {}),
    i ? /* @__PURE__ */ E("div", { className: `chd-status-bar${u ? ` ${u}` : ""}`, children: i }) : null,
    /* @__PURE__ */ A("div", { className: "chd-main", children: [
      /* @__PURE__ */ E(Mv, {}),
      /* @__PURE__ */ E(zv, {}),
      /* @__PURE__ */ E(Av, {})
    ] })
  ] }) });
}
function Uv(e) {
  const t = tp(e);
  return {
    render(n) {
      t.render(
        /* @__PURE__ */ E(fy, { theme: n.theme, children: /* @__PURE__ */ E(jv, {}) })
      );
    },
    unmount() {
      t.unmount();
    }
  };
}
export {
  Uv as default
};
