(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".chd-root{--chd-bg: #f4f7f5;--chd-panel: #ffffff;--chd-border: #e2e8e4;--chd-text: #000000;--chd-muted: #6b716e;--chd-accent: #00a651;--chd-selected: #00a651;display:flex;flex-direction:column;width:100%;height:min(80vh,720px);min-height:520px;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:10px;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px;display:flex;align-items:center;gap:8px}.chd-toolbar-logo-wrap{display:inline-flex;align-items:center;justify-content:center;min-width:56px;background:#000000;color:#fff;border-radius:4px;padding:5px 10px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.chd-toolbar-mode{font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:var(--chd-muted);border:.5px solid var(--chd-border);border-radius:999px;padding:2px 7px}.chd-status-bar{padding:4px 12px;font-size:11px;color:var(--chd-muted);border-bottom:.5px solid var(--chd-border);background:#faf9f6}.chd-status-bar--error{color:#a32d2d}.chd-status-bar--saved{color:#1d6b4f}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-file-input{display:none}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr auto auto auto;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{flex-direction:row;align-items:center;gap:8px;color:var(--chd-text)}.chd-field-checkbox input{width:auto}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:linear-gradient(45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,linear-gradient(-45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,#f0eee8;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:hidden}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image--contain{object-fit:contain}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function Jd(e, t) {
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
function bd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oc = { exports: {} }, eo = {}, ic = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir = Symbol.for("react.element"), qd = Symbol.for("react.portal"), ep = Symbol.for("react.fragment"), tp = Symbol.for("react.strict_mode"), np = Symbol.for("react.profiler"), rp = Symbol.for("react.provider"), lp = Symbol.for("react.context"), op = Symbol.for("react.forward_ref"), ip = Symbol.for("react.suspense"), up = Symbol.for("react.memo"), sp = Symbol.for("react.lazy"), Ts = Symbol.iterator;
function ap(e) {
  return e === null || typeof e != "object" ? null : (e = Ts && e[Ts] || e["@@iterator"], typeof e == "function" ? e : null);
}
var uc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, sc = Object.assign, ac = {};
function Bn(e, t, n) {
  this.props = e, this.context = t, this.refs = ac, this.updater = n || uc;
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
function cc() {
}
cc.prototype = Bn.prototype;
function hu(e, t, n) {
  this.props = e, this.context = t, this.refs = ac, this.updater = n || uc;
}
var yu = hu.prototype = new cc();
yu.constructor = hu;
sc(yu, Bn.prototype);
yu.isPureReactComponent = !0;
var Ns = Array.isArray, fc = Object.prototype.hasOwnProperty, gu = { current: null }, dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function pc(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      fc.call(t, r) && !dc.hasOwnProperty(r) && (l[r] = t[r]);
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
  return { $$typeof: Ir, type: e, key: o, ref: i, props: l, _owner: gu.current };
}
function cp(e, t) {
  return { $$typeof: Ir, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function vu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ir;
}
function fp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Rs = /\/+/g;
function Ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? fp("" + e.key) : t.toString(36);
}
function fl(e, t, n, r, l) {
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
          case qd:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Ho(i, 0) : r, Ns(l) ? (n = "", e != null && (n = e.replace(Rs, "$&/") + "/"), fl(l, t, n, "", function(a) {
      return a;
    })) : l != null && (vu(l) && (l = cp(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Rs, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ns(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ho(o, u);
      i += fl(o, t, n, s, l);
    }
  else if (s = ap(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Ho(o, u++), i += fl(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Qr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return fl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function dp(e) {
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
var Ee = { current: null }, dl = { transition: null }, pp = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: dl, ReactCurrentOwner: gu };
function mc() {
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
  if (!vu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = Bn;
M.Fragment = ep;
M.Profiler = np;
M.PureComponent = hu;
M.StrictMode = tp;
M.Suspense = ip;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
M.act = mc;
M.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = sc({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = gu.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      fc.call(t, s) && !dc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
M.createContext = function(e) {
  return e = { $$typeof: lp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: rp, _context: e }, e.Consumer = e;
};
M.createElement = pc;
M.createFactory = function(e) {
  var t = pc.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: op, render: e };
};
M.isValidElement = vu;
M.lazy = function(e) {
  return { $$typeof: sp, _payload: { _status: -1, _result: e }, _init: dp };
};
M.memo = function(e, t) {
  return { $$typeof: up, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = dl.transition;
  dl.transition = {};
  try {
    e();
  } finally {
    dl.transition = t;
  }
};
M.unstable_act = mc;
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
ic.exports = M;
var R = ic.exports;
const mp = /* @__PURE__ */ bd(R), gi = /* @__PURE__ */ Jd({
  __proto__: null,
  default: mp
}, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hp = R, yp = Symbol.for("react.element"), gp = Symbol.for("react.fragment"), vp = Object.prototype.hasOwnProperty, wp = hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    vp.call(t, r) && !Sp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: yp, type: e, key: o, ref: i, props: l, _owner: wp.current };
}
eo.Fragment = gp;
eo.jsx = hc;
eo.jsxs = hc;
oc.exports = eo;
var wu = oc.exports;
const Pl = wu.Fragment, P = wu.jsx, A = wu.jsxs;
function kp(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ls = "$$material";
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
function to(e, t) {
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
var xp = !1;
function Ep(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Cp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var _p = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(l) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(l, o), r.tags.push(l);
    }, this.isSpeedy = n.speedy === void 0 ? !xp : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Cp(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = Ep(l);
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
}(), ge = "-ms-", Tl = "-moz-", B = "-webkit-", yc = "comm", Su = "rule", ku = "decl", Pp = "@import", gc = "@keyframes", Tp = "@layer", Np = Math.abs, no = String.fromCharCode, Rp = Object.assign;
function Lp(e, t) {
  return fe(e, 0) ^ 45 ? (((t << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0;
}
function vc(e) {
  return e.trim();
}
function Op(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, n) {
  return e.replace(t, n);
}
function vi(e, t) {
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
function xu(e) {
  return e.length;
}
function Xr(e, t) {
  return t.push(e), e;
}
function zp(e, t) {
  return e.map(t).join("");
}
var ro = 1, $n = 1, wc = 0, Le = 0, re = 0, Hn = "";
function lo(e, t, n, r, l, o, i) {
  return { value: e, root: t, parent: n, type: r, props: l, children: o, line: ro, column: $n, length: i, return: "" };
}
function Kn(e, t) {
  return Rp(lo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function $p() {
  return re;
}
function Mp() {
  return re = Le > 0 ? fe(Hn, --Le) : 0, $n--, re === 10 && ($n = 1, ro--), re;
}
function Ae() {
  return re = Le < wc ? fe(Hn, Le++) : 0, $n++, re === 10 && ($n = 1, ro++), re;
}
function ct() {
  return fe(Hn, Le);
}
function pl() {
  return Le;
}
function Ar(e, t) {
  return yr(Hn, e, t);
}
function gr(e) {
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
function Sc(e) {
  return ro = $n = 1, wc = ut(Hn = e), Le = 0, [];
}
function kc(e) {
  return Hn = "", e;
}
function ml(e) {
  return vc(Ar(Le - 1, wi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Dp(e) {
  for (; (re = ct()) && re < 33; )
    Ae();
  return gr(e) > 2 || gr(re) > 3 ? "" : " ";
}
function Ip(e, t) {
  for (; --t && Ae() && !(re < 48 || re > 102 || re > 57 && re < 65 || re > 70 && re < 97); )
    ;
  return Ar(e, pl() + (t < 6 && ct() == 32 && Ae() == 32));
}
function wi(e) {
  for (; Ae(); )
    switch (re) {
      case e:
        return Le;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wi(re);
        break;
      case 40:
        e === 41 && wi(e);
        break;
      case 92:
        Ae();
        break;
    }
  return Le;
}
function Ap(e, t) {
  for (; Ae() && e + re !== 47 + 10; )
    if (e + re === 42 + 42 && ct() === 47)
      break;
  return "/*" + Ar(t, Le - 1) + "*" + no(e === 47 ? e : Ae());
}
function Fp(e) {
  for (; !gr(ct()); )
    Ae();
  return Ar(e, Le);
}
function jp(e) {
  return kc(hl("", null, null, null, [""], e = Sc(e), 0, [0], e));
}
function hl(e, t, n, r, l, o, i, u, s) {
  for (var a = 0, d = 0, h = i, m = 0, v = 0, S = 0, g = 1, L = 1, f = 1, c = 0, p = "", k = l, y = o, x = r, w = p; L; )
    switch (S = c, c = Ae()) {
      case 40:
        if (S != 108 && fe(w, h - 1) == 58) {
          vi(w += H(ml(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += ml(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += Dp(S);
        break;
      case 92:
        w += Ip(pl() - 1, 7);
        continue;
      case 47:
        switch (ct()) {
          case 42:
          case 47:
            Xr(Up(Ap(Ae(), pl()), t, n), s);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * g:
        u[a++] = ut(w) * f;
      case 125 * g:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            L = 0;
          case 59 + d:
            f == -1 && (w = H(w, /\f/g, "")), v > 0 && ut(w) - h && Xr(v > 32 ? zs(w + ";", r, n, h - 1) : zs(H(w, " ", "") + ";", r, n, h - 2), s);
            break;
          case 59:
            w += ";";
          default:
            if (Xr(x = Os(w, t, n, a, d, l, u, p, k = [], y = [], h), o), c === 123)
              if (d === 0)
                hl(w, t, x, x, k, o, h, u, y);
              else
                switch (m === 99 && fe(w, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    hl(e, x, x, r && Xr(Os(e, x, x, 0, 0, l, u, p, l, k = [], h), y), l, y, h, u, r ? k : y);
                    break;
                  default:
                    hl(w, x, x, x, [""], y, 0, u, y);
                }
        }
        a = d = v = 0, g = f = 1, p = w = "", h = i;
        break;
      case 58:
        h = 1 + ut(w), v = S;
      default:
        if (g < 1) {
          if (c == 123)
            --g;
          else if (c == 125 && g++ == 0 && Mp() == 125)
            continue;
        }
        switch (w += no(c), c * g) {
          case 38:
            f = d > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            u[a++] = (ut(w) - 1) * f, f = 1;
            break;
          case 64:
            ct() === 45 && (w += ml(Ae())), m = ct(), d = h = ut(p = w += Fp(pl())), c++;
            break;
          case 45:
            S === 45 && ut(w) == 2 && (g = 0);
        }
    }
  return o;
}
function Os(e, t, n, r, l, o, i, u, s, a, d) {
  for (var h = l - 1, m = l === 0 ? o : [""], v = xu(m), S = 0, g = 0, L = 0; S < r; ++S)
    for (var f = 0, c = yr(e, h + 1, h = Np(g = i[S])), p = e; f < v; ++f)
      (p = vc(g > 0 ? m[f] + " " + c : H(c, /&\f/g, m[f]))) && (s[L++] = p);
  return lo(e, t, n, l === 0 ? Su : u, s, a, d);
}
function Up(e, t, n) {
  return lo(e, t, n, yc, no($p()), yr(e, 2, -2), 0);
}
function zs(e, t, n, r) {
  return lo(e, t, n, ku, yr(e, 0, r), yr(e, r + 1, -1), r);
}
function _n(e, t) {
  for (var n = "", r = xu(e), l = 0; l < r; l++)
    n += t(e[l], l, e, t) || "";
  return n;
}
function Bp(e, t, n, r) {
  switch (e.type) {
    case Tp:
      if (e.children.length)
        break;
    case Pp:
    case ku:
      return e.return = e.return || e.value;
    case yc:
      return "";
    case gc:
      return e.return = e.value + "{" + _n(e.children, r) + "}";
    case Su:
      e.value = e.props.join(",");
  }
  return ut(n = _n(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Hp(e) {
  var t = xu(e);
  return function(n, r, l, o) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, l, o) || "";
    return i;
  };
}
function Wp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function xc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Vp = function(t, n, r) {
  for (var l = 0, o = 0; l = o, o = ct(), l === 38 && o === 12 && (n[r] = 1), !gr(o); )
    Ae();
  return Ar(t, Le);
}, Kp = function(t, n) {
  var r = -1, l = 44;
  do
    switch (gr(l)) {
      case 0:
        l === 38 && ct() === 12 && (n[r] = 1), t[r] += Vp(Le - 1, n, r);
        break;
      case 2:
        t[r] += ml(l);
        break;
      case 4:
        if (l === 44) {
          t[++r] = ct() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += no(l);
    }
  while (l = Ae());
  return t;
}, Yp = function(t, n) {
  return kc(Kp(Sc(t), n));
}, $s = /* @__PURE__ */ new WeakMap(), Qp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, l = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !$s.get(r)) && !l) {
      $s.set(t, !0);
      for (var o = [], i = Yp(n, o), u = r.props, s = 0, a = 0; s < i.length; s++)
        for (var d = 0; d < u.length; d++, a++)
          t.props[a] = o[s] ? i[s].replace(/&\f/g, u[d]) : u[d] + " " + i[s];
    }
  }
}, Xp = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ec(e, t) {
  switch (Lp(e, t)) {
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
      return B + e + Tl + e + ge + e + e;
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
            return H(e, /(.+:)(.+)-([^]+)/, "$1" + B + "$2-$3$1" + Tl + (fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~vi(e, "stretch") ? Ec(H(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (fe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (fe(e, ut(e) - 3 - (~vi(e, "!important") && 10))) {
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
var Gp = function(t, n, r, l) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ku:
        t.return = Ec(t.value, t.length);
        break;
      case gc:
        return _n([Kn(t, {
          value: H(t.value, "@", "@" + B)
        })], l);
      case Su:
        if (t.length)
          return zp(t.props, function(o) {
            switch (Op(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return _n([Kn(t, {
                  props: [H(o, /:(read-\w+)/, ":" + Tl + "$1")]
                })], l);
              case "::placeholder":
                return _n([Kn(t, {
                  props: [H(o, /:(plac\w+)/, ":" + B + "input-$1")]
                }), Kn(t, {
                  props: [H(o, /:(plac\w+)/, ":" + Tl + "$1")]
                }), Kn(t, {
                  props: [H(o, /:(plac\w+)/, ge + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, Zp = [Gp], Jp = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var L = g.getAttribute("data-emotion");
      L.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var l = t.stylisPlugins || Zp, o = {}, i, u = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var L = g.getAttribute("data-emotion").split(" "), f = 1; f < L.length; f++)
        o[L[f]] = !0;
      u.push(g);
    }
  );
  var s, a = [Qp, Xp];
  {
    var d, h = [Bp, Wp(function(g) {
      d.insert(g);
    })], m = Hp(a.concat(l, h)), v = function(L) {
      return _n(jp(L), m);
    };
    s = function(L, f, c, p) {
      d = c, v(L ? L + "{" + f.styles + "}" : f.styles), p && (S.inserted[f.name] = !0);
    };
  }
  var S = {
    key: n,
    sheet: new _p({
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
}, Cc = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae = typeof Symbol == "function" && Symbol.for, Eu = ae ? Symbol.for("react.element") : 60103, Cu = ae ? Symbol.for("react.portal") : 60106, oo = ae ? Symbol.for("react.fragment") : 60107, io = ae ? Symbol.for("react.strict_mode") : 60108, uo = ae ? Symbol.for("react.profiler") : 60114, so = ae ? Symbol.for("react.provider") : 60109, ao = ae ? Symbol.for("react.context") : 60110, _u = ae ? Symbol.for("react.async_mode") : 60111, co = ae ? Symbol.for("react.concurrent_mode") : 60111, fo = ae ? Symbol.for("react.forward_ref") : 60112, po = ae ? Symbol.for("react.suspense") : 60113, bp = ae ? Symbol.for("react.suspense_list") : 60120, mo = ae ? Symbol.for("react.memo") : 60115, ho = ae ? Symbol.for("react.lazy") : 60116, qp = ae ? Symbol.for("react.block") : 60121, em = ae ? Symbol.for("react.fundamental") : 60117, tm = ae ? Symbol.for("react.responder") : 60118, nm = ae ? Symbol.for("react.scope") : 60119;
function Ue(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Eu:
        switch (e = e.type, e) {
          case _u:
          case co:
          case oo:
          case uo:
          case io:
          case po:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ao:
              case fo:
              case ho:
              case mo:
              case so:
                return e;
              default:
                return t;
            }
        }
      case Cu:
        return t;
    }
  }
}
function _c(e) {
  return Ue(e) === co;
}
V.AsyncMode = _u;
V.ConcurrentMode = co;
V.ContextConsumer = ao;
V.ContextProvider = so;
V.Element = Eu;
V.ForwardRef = fo;
V.Fragment = oo;
V.Lazy = ho;
V.Memo = mo;
V.Portal = Cu;
V.Profiler = uo;
V.StrictMode = io;
V.Suspense = po;
V.isAsyncMode = function(e) {
  return _c(e) || Ue(e) === _u;
};
V.isConcurrentMode = _c;
V.isContextConsumer = function(e) {
  return Ue(e) === ao;
};
V.isContextProvider = function(e) {
  return Ue(e) === so;
};
V.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Eu;
};
V.isForwardRef = function(e) {
  return Ue(e) === fo;
};
V.isFragment = function(e) {
  return Ue(e) === oo;
};
V.isLazy = function(e) {
  return Ue(e) === ho;
};
V.isMemo = function(e) {
  return Ue(e) === mo;
};
V.isPortal = function(e) {
  return Ue(e) === Cu;
};
V.isProfiler = function(e) {
  return Ue(e) === uo;
};
V.isStrictMode = function(e) {
  return Ue(e) === io;
};
V.isSuspense = function(e) {
  return Ue(e) === po;
};
V.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === oo || e === co || e === uo || e === io || e === po || e === bp || typeof e == "object" && e !== null && (e.$$typeof === ho || e.$$typeof === mo || e.$$typeof === so || e.$$typeof === ao || e.$$typeof === fo || e.$$typeof === em || e.$$typeof === tm || e.$$typeof === nm || e.$$typeof === qp);
};
V.typeOf = Ue;
Cc.exports = V;
var rm = Cc.exports, Pc = rm, lm = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, om = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Tc = {};
Tc[Pc.ForwardRef] = lm;
Tc[Pc.Memo] = om;
var im = !0;
function Nc(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(l) {
    e[l] !== void 0 ? t.push(e[l] + ";") : l && (r += l + " ");
  }), r;
}
var Pu = function(t, n, r) {
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
  im === !1) && t.registered[l] === void 0 && (t.registered[l] = n.styles);
}, Tu = function(t, n, r) {
  Pu(t, n, r);
  var l = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + l : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function um(e) {
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
var sm = {
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
}, am = !1, cm = /[A-Z]|^ms/g, fm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Rc = function(t) {
  return t.charCodeAt(1) === 45;
}, Ms = function(t) {
  return t != null && typeof t != "boolean";
}, Wo = /* @__PURE__ */ xc(function(e) {
  return Rc(e) ? e : e.replace(cm, "-$&").toLowerCase();
}), Ds = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(fm, function(r, l, o) {
          return st = {
            name: l,
            styles: o,
            next: st
          }, l;
        });
  }
  return sm[t] !== 1 && !Rc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, dm = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function vr(e, t, n) {
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
      return pm(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = st, a = n(e);
        return st = s, vr(e, t, a);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var h = t[d];
  return h !== void 0 ? h : d;
}
function pm(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var l = 0; l < n.length; l++)
      r += vr(e, t, n[l]) + ";";
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += o + "{" + t[u] + "}" : Ms(u) && (r += Wo(o) + ":" + Ds(o, u) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && am)
          throw new Error(dm);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Ms(i[s]) && (r += Wo(o) + ":" + Ds(o, i[s]) + ";");
        else {
          var a = vr(e, t, i);
          switch (o) {
            case "animation":
            case "animationName": {
              r += Wo(o) + ":" + a + ";";
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
var Is = /label:\s*([^\s;{]+)\s*(;|$)/g, st;
function yo(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, l = "";
  st = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, l += vr(n, t, o);
  else {
    var i = o;
    l += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (l += vr(n, t, e[u]), r) {
      var s = o;
      l += s[u];
    }
  Is.lastIndex = 0;
  for (var a = "", d; (d = Is.exec(l)) !== null; )
    a += "-" + d[1];
  var h = um(l) + a;
  return {
    name: h,
    styles: l,
    next: st
  };
}
var mm = function(t) {
  return t();
}, Lc = gi["useInsertionEffect"] ? gi["useInsertionEffect"] : !1, Oc = Lc || mm, As = Lc || R.useLayoutEffect, hm = !1, zc = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Jp({
    key: "css"
  }) : null
);
zc.Provider;
var Nu = function(t) {
  return /* @__PURE__ */ R.forwardRef(function(n, r) {
    var l = R.useContext(zc);
    return t(n, l, r);
  });
}, Fr = /* @__PURE__ */ R.createContext({}), Ru = {}.hasOwnProperty, Si = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ym = function(t, n) {
  var r = {};
  for (var l in n)
    Ru.call(n, l) && (r[l] = n[l]);
  return r[Si] = t, r;
}, gm = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return Pu(n, r, l), Oc(function() {
    return Tu(n, r, l);
  }), null;
}, vm = /* @__PURE__ */ Nu(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var l = e[Si], o = [r], i = "";
  typeof e.className == "string" ? i = Nc(t.registered, o, e.className) : e.className != null && (i = e.className + " ");
  var u = yo(o, void 0, R.useContext(Fr));
  i += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    Ru.call(e, a) && a !== "css" && a !== Si && !hm && (s[a] = e[a]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(gm, {
    cache: t,
    serialized: u,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ R.createElement(l, s));
}), wm = vm, Vo = { exports: {} }, Fs;
function Sm() {
  return Fs || (Fs = 1, function(e) {
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
  }(Vo)), Vo.exports;
}
Sm();
var js = function(t, n) {
  var r = arguments;
  if (n == null || !Ru.call(n, "css"))
    return R.createElement.apply(void 0, r);
  var l = r.length, o = new Array(l);
  o[0] = wm, o[1] = ym(t, n);
  for (var i = 2; i < l; i++)
    o[i] = r[i];
  return R.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(js || (js = {}));
var km = /* @__PURE__ */ Nu(function(e, t) {
  var n = e.styles, r = yo([n], void 0, R.useContext(Fr)), l = R.useRef();
  return As(function() {
    var o = t.key + "-global", i = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", o), i.hydrate([s])), l.current = [i, u], function() {
      i.flush();
    };
  }, [t]), As(function() {
    var o = l.current, i = o[0], u = o[1];
    if (u) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && Tu(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), xm = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Em = /* @__PURE__ */ xc(
  function(e) {
    return xm.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Cm = !1, _m = Em, Pm = function(t) {
  return t !== "theme";
}, Us = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? _m : Pm;
}, Bs = function(t, n, r) {
  var l;
  if (n) {
    var o = n.shouldForwardProp;
    l = t.__emotion_forwardProp && o ? function(i) {
      return t.__emotion_forwardProp(i) && o(i);
    } : o;
  }
  return typeof l != "function" && r && (l = t.__emotion_forwardProp), l;
}, Tm = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return Pu(n, r, l), Oc(function() {
    return Tu(n, r, l);
  }), null;
}, Nm = function e(t, n) {
  var r = t.__emotion_real === t, l = r && t.__emotion_base || t, o, i;
  n !== void 0 && (o = n.label, i = n.target);
  var u = Bs(t, n, r), s = u || Us(l), a = !s("as");
  return function() {
    var d = arguments, h = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && h.push("label:" + o + ";"), d[0] == null || d[0].raw === void 0)
      h.push.apply(h, d);
    else {
      var m = d[0];
      h.push(m[0]);
      for (var v = d.length, S = 1; S < v; S++)
        h.push(d[S], m[S]);
    }
    var g = Nu(function(L, f, c) {
      var p = a && L.as || l, k = "", y = [], x = L;
      if (L.theme == null) {
        x = {};
        for (var w in L)
          x[w] = L[w];
        x.theme = R.useContext(Fr);
      }
      typeof L.className == "string" ? k = Nc(f.registered, y, L.className) : L.className != null && (k = L.className + " ");
      var T = yo(h.concat(y), f.registered, x);
      k += f.key + "-" + T.name, i !== void 0 && (k += " " + i);
      var D = a && u === void 0 ? Us(p) : s, z = {};
      for (var F in L)
        a && F === "as" || D(F) && (z[F] = L[F]);
      return z.className = k, c && (z.ref = c), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Tm, {
        cache: f,
        serialized: T,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ R.createElement(p, z));
    });
    return g.displayName = o !== void 0 ? o : "Styled(" + (typeof l == "string" ? l : l.displayName || l.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = l, g.__emotion_styles = h, g.__emotion_forwardProp = u, Object.defineProperty(g, "toString", {
      value: function() {
        return i === void 0 && Cm ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), g.withComponent = function(L, f) {
      var c = e(L, de({}, n, f, {
        shouldForwardProp: Bs(g, f, !0)
      }));
      return c.apply(void 0, h);
    }, g;
  };
}, Rm = [
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
], Hs = Nm.bind(null);
Rm.forEach(function(e) {
  Hs[e] = Hs(e);
});
function Lm(e) {
  return e == null || Object.keys(e).length === 0;
}
function Om(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ P(km, {
    styles: typeof t == "function" ? (l) => t(Lm(l) ? n : l) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Ws = [];
function zm(e) {
  return Ws[0] = e, yo(Ws);
}
function fn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function $c(e) {
  if (/* @__PURE__ */ R.isValidElement(e) || !fn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = $c(e[n]);
  }), t;
}
function Nl(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? de({}, e) : e;
  return fn(e) && fn(t) && Object.keys(t).forEach((l) => {
    /* @__PURE__ */ R.isValidElement(t[l]) ? r[l] = t[l] : fn(t[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, l) && fn(e[l]) ? r[l] = Nl(e[l], t[l], n) : n.clone ? r[l] = fn(t[l]) ? $c(t[l]) : t[l] : r[l] = t[l];
  }), r;
}
const $m = ["values", "unit", "step"], Mm = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => de({}, n, {
    [r.key]: r.val
  }), {});
};
function Dm(e) {
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
  } = e, l = to(e, $m), o = Mm(t), i = Object.keys(o);
  function u(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function s(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function a(m, v) {
    const S = i.indexOf(v);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(S !== -1 && typeof t[i[S]] == "number" ? t[i[S]] : v) - r / 100}${n})`;
  }
  function d(m) {
    return i.indexOf(m) + 1 < i.length ? a(m, i[i.indexOf(m) + 1]) : u(m);
  }
  function h(m) {
    const v = i.indexOf(m);
    return v === 0 ? u(i[1]) : v === i.length - 1 ? s(i[v]) : a(m, i[i.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return de({
    keys: i,
    values: o,
    up: u,
    down: s,
    between: a,
    only: d,
    not: h,
    unit: n
  }, l);
}
const Im = {
  borderRadius: 4
}, Am = Im;
function ir(e, t) {
  return t ? Nl(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Lu = {
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
}, Vs = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Lu[e]}px)`
};
function St(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Vs;
    return t.reduce((i, u, s) => (i[o.up(o.keys[s])] = n(t[s]), i), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Vs;
    return Object.keys(t).reduce((i, u) => {
      if (Object.keys(o.values || Lu).indexOf(u) !== -1) {
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
function Fm(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, l) => {
    const o = e.up(l);
    return r[o] = {}, r;
  }, {})) || {};
}
function Ks(e, t) {
  return e.reduce((n, r) => {
    const l = n[r];
    return (!l || Object.keys(l).length === 0) && delete n[r], n;
  }, t);
}
function Mc(e) {
  if (typeof e != "string")
    throw new Error(kp(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function go(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((l, o) => l && l[o] ? l[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, l) => r && r[l] != null ? r[l] : null, e);
}
function Rl(e, t, n, r = n) {
  let l;
  return typeof e == "function" ? l = e(n) : Array.isArray(e) ? l = e[n] || r : l = go(e, n) || r, t && (l = t(l, r, e)), l;
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
    const u = i[t], s = i.theme, a = go(s, r) || {};
    return St(i, u, (h) => {
      let m = Rl(a, l, h);
      return h === m && typeof h == "string" && (m = Rl(a, l, `${t}${h === "default" ? "" : Mc(h)}`, h)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function jm(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Um = {
  m: "margin",
  p: "padding"
}, Bm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ys = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Hm = jm((e) => {
  if (e.length > 2)
    if (Ys[e])
      e = Ys[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Um[t], l = Bm[n] || "";
  return Array.isArray(l) ? l.map((o) => r + o) : [r + l];
}), Ou = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], zu = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Ou, ...zu];
function jr(e, t, n, r) {
  var l;
  const o = (l = go(e, t, !1)) != null ? l : n;
  return typeof o == "number" ? (i) => typeof i == "string" ? i : o * i : Array.isArray(o) ? (i) => typeof i == "string" ? i : o[i] : typeof o == "function" ? o : () => {
  };
}
function Dc(e) {
  return jr(e, "spacing", 8);
}
function Ur(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Wm(e, t) {
  return (n) => e.reduce((r, l) => (r[l] = Ur(t, n), r), {});
}
function Vm(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const l = Hm(n), o = Wm(l, r), i = e[n];
  return St(e, i, o);
}
function Ic(e, t) {
  const n = Dc(e.theme);
  return Object.keys(e).map((r) => Vm(e, t, r, n)).reduce(ir, {});
}
function b(e) {
  return Ic(e, Ou);
}
b.propTypes = {};
b.filterProps = Ou;
function q(e) {
  return Ic(e, zu);
}
q.propTypes = {};
q.filterProps = zu;
function Km(e = 8) {
  if (e.mui)
    return e;
  const t = Dc({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((o) => {
    const i = t(o);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function vo(...e) {
  const t = e.reduce((r, l) => (l.filterProps.forEach((o) => {
    r[o] = l;
  }), r), {}), n = (r) => Object.keys(r).reduce((l, o) => t[o] ? ir(l, t[o](r)) : l, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, l) => r.concat(l.filterProps), []), n;
}
function We(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ze(e, t) {
  return ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ym = Ze("border", We), Qm = Ze("borderTop", We), Xm = Ze("borderRight", We), Gm = Ze("borderBottom", We), Zm = Ze("borderLeft", We), Jm = Ze("borderColor"), bm = Ze("borderTopColor"), qm = Ze("borderRightColor"), eh = Ze("borderBottomColor"), th = Ze("borderLeftColor"), nh = Ze("outline", We), rh = Ze("outlineColor"), wo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = jr(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Ur(t, r)
    });
    return St(e, e.borderRadius, n);
  }
  return null;
};
wo.propTypes = {};
wo.filterProps = ["borderRadius"];
vo(Ym, Qm, Xm, Gm, Zm, Jm, bm, qm, eh, th, wo, nh, rh);
const So = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = jr(e.theme, "spacing", 8), n = (r) => ({
      gap: Ur(t, r)
    });
    return St(e, e.gap, n);
  }
  return null;
};
So.propTypes = {};
So.filterProps = ["gap"];
const ko = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = jr(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Ur(t, r)
    });
    return St(e, e.columnGap, n);
  }
  return null;
};
ko.propTypes = {};
ko.filterProps = ["columnGap"];
const xo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = jr(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Ur(t, r)
    });
    return St(e, e.rowGap, n);
  }
  return null;
};
xo.propTypes = {};
xo.filterProps = ["rowGap"];
const lh = ne({
  prop: "gridColumn"
}), oh = ne({
  prop: "gridRow"
}), ih = ne({
  prop: "gridAutoFlow"
}), uh = ne({
  prop: "gridAutoColumns"
}), sh = ne({
  prop: "gridAutoRows"
}), ah = ne({
  prop: "gridTemplateColumns"
}), ch = ne({
  prop: "gridTemplateRows"
}), fh = ne({
  prop: "gridTemplateAreas"
}), dh = ne({
  prop: "gridArea"
});
vo(So, ko, xo, lh, oh, ih, uh, sh, ah, ch, fh, dh);
function Pn(e, t) {
  return t === "grey" ? t : e;
}
const ph = ne({
  prop: "color",
  themeKey: "palette",
  transform: Pn
}), mh = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Pn
}), hh = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Pn
});
vo(ph, mh, hh);
function De(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const yh = ne({
  prop: "width",
  transform: De
}), $u = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, l;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Lu[n];
      return o ? ((l = e.theme) == null || (l = l.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: De(n)
      };
    };
    return St(e, e.maxWidth, t);
  }
  return null;
};
$u.filterProps = ["maxWidth"];
const gh = ne({
  prop: "minWidth",
  transform: De
}), vh = ne({
  prop: "height",
  transform: De
}), wh = ne({
  prop: "maxHeight",
  transform: De
}), Sh = ne({
  prop: "minHeight",
  transform: De
});
ne({
  prop: "size",
  cssProperty: "width",
  transform: De
});
ne({
  prop: "size",
  cssProperty: "height",
  transform: De
});
const kh = ne({
  prop: "boxSizing"
});
vo(yh, $u, gh, vh, wh, Sh, kh);
const xh = {
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
    style: wo
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
    style: b
  },
  mt: {
    style: b
  },
  mr: {
    style: b
  },
  mb: {
    style: b
  },
  ml: {
    style: b
  },
  mx: {
    style: b
  },
  my: {
    style: b
  },
  margin: {
    style: b
  },
  marginTop: {
    style: b
  },
  marginRight: {
    style: b
  },
  marginBottom: {
    style: b
  },
  marginLeft: {
    style: b
  },
  marginX: {
    style: b
  },
  marginY: {
    style: b
  },
  marginInline: {
    style: b
  },
  marginInlineStart: {
    style: b
  },
  marginInlineEnd: {
    style: b
  },
  marginBlock: {
    style: b
  },
  marginBlockStart: {
    style: b
  },
  marginBlockEnd: {
    style: b
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
    style: So
  },
  rowGap: {
    style: xo
  },
  columnGap: {
    style: ko
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
    style: $u
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
}, Ac = xh;
function Eh(...e) {
  const t = e.reduce((r, l) => r.concat(Object.keys(l)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Ch(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _h() {
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
      transform: d,
      style: h
    } = u;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = go(l, a) || {};
    return h ? h(i) : St(i, r, (S) => {
      let g = Rl(m, d, S);
      return S === g && typeof S == "string" && (g = Rl(m, d, `${n}${S === "default" ? "" : Mc(S)}`, S)), s === !1 ? g : {
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
    const u = (r = o.unstable_sxConfig) != null ? r : Ac;
    function s(a) {
      let d = a;
      if (typeof a == "function")
        d = a(o);
      else if (typeof a != "object")
        return a;
      if (!d)
        return null;
      const h = Fm(o.breakpoints), m = Object.keys(h);
      let v = h;
      return Object.keys(d).forEach((S) => {
        const g = Ch(d[S], o);
        if (g != null)
          if (typeof g == "object")
            if (u[S])
              v = ir(v, e(S, g, o, u));
            else {
              const L = St({
                theme: o
              }, g, (f) => ({
                [S]: f
              }));
              Eh(L, g) ? v[S] = t({
                sx: g,
                theme: o,
                nested: !0
              }) : v = ir(v, L);
            }
          else
            v = ir(v, e(S, g, o, u));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Ks(m, v)
      } : Ks(m, v);
    }
    return Array.isArray(l) ? l.map(s) : s(l);
  }
  return t;
}
const Fc = _h();
Fc.filterProps = ["sx"];
const Ph = Fc;
function Th(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Nh = ["breakpoints", "palette", "spacing", "shape"];
function Rh(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: l,
    shape: o = {}
  } = e, i = to(e, Nh), u = Dm(n), s = Km(l);
  let a = Nl({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: de({
      mode: "light"
    }, r),
    spacing: s,
    shape: de({}, Am, o)
  }, i);
  return a.applyStyles = Th, a = t.reduce((d, h) => Nl(d, h), a), a.unstable_sxConfig = de({}, Ac, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(h) {
    return Ph({
      sx: h,
      theme: this
    });
  }, a;
}
function Lh(e) {
  return Object.keys(e).length === 0;
}
function Mu(e = null) {
  const t = R.useContext(Fr);
  return !t || Lh(t) ? e : t;
}
const Oh = Rh();
function zh(e = Oh) {
  return Mu(e);
}
function Ko(e) {
  const t = zm(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function $h({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = zh(n), l = t && r[t] || r;
  let o = typeof e == "function" ? e(l) : e;
  return l.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => Ko(typeof i == "function" ? i(l) : i)) : o = Ko(o)), /* @__PURE__ */ P(Om, {
    styles: o
  });
}
const Mh = typeof window < "u" ? R.useLayoutEffect : R.useEffect, Dh = Mh;
let Qs = 0;
function Ih(e) {
  const [t, n] = R.useState(e), r = e || t;
  return R.useEffect(() => {
    t == null && (Qs += 1, n(`mui-${Qs}`));
  }, [t]), r;
}
const Xs = gi["useId".toString()];
function Ah(e) {
  if (Xs !== void 0) {
    const t = Xs();
    return e ?? t;
  }
  return Ih(e);
}
const Fh = /* @__PURE__ */ R.createContext(null), jc = Fh;
function Uc() {
  return R.useContext(jc);
}
const jh = typeof Symbol == "function" && Symbol.for, Uh = jh ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Bh(e, t) {
  return typeof t == "function" ? t(e) : de({}, e, t);
}
function Hh(e) {
  const {
    children: t,
    theme: n
  } = e, r = Uc(), l = R.useMemo(() => {
    const o = r === null ? n : Bh(r, n);
    return o != null && (o[Uh] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ P(jc.Provider, {
    value: l,
    children: t
  });
}
const Wh = ["value"], Vh = /* @__PURE__ */ R.createContext();
function Kh(e) {
  let {
    value: t
  } = e, n = to(e, Wh);
  return /* @__PURE__ */ P(Vh.Provider, de({
    value: t ?? !0
  }, n));
}
const Yh = /* @__PURE__ */ R.createContext(void 0);
function Qh({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ P(Yh.Provider, {
    value: e,
    children: t
  });
}
function Xh(e) {
  const t = Mu(), n = Ah() || "", {
    modularCssLayers: r
  } = e;
  let l = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? l = "" : typeof r == "string" ? l = r.replace(/mui(?!\.)/g, l) : l = `@layer ${l};`, Dh(() => {
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
  }, [l, n]), l ? /* @__PURE__ */ P($h, {
    styles: l
  }) : null;
}
const Gs = {};
function Zs(e, t, n, r = !1) {
  return R.useMemo(() => {
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
function Gh(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, l = Mu(Gs), o = Uc() || Gs, i = Zs(r, l, n), u = Zs(r, o, n, !0), s = i.direction === "rtl", a = Xh(i);
  return /* @__PURE__ */ P(Hh, {
    theme: u,
    children: /* @__PURE__ */ P(Fr.Provider, {
      value: i,
      children: /* @__PURE__ */ P(Kh, {
        value: s,
        children: /* @__PURE__ */ A(Qh, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const Zh = ["theme"];
function Jh(e) {
  let {
    theme: t
  } = e, n = to(e, Zh);
  const r = t[Ls];
  let l = r || t;
  return typeof t != "function" && (r && !r.vars ? l = de({}, r, {
    vars: null
  }) : t && !t.vars && (l = de({}, t, {
    vars: null
  }))), /* @__PURE__ */ P(Gh, de({}, n, {
    themeId: r ? Ls : void 0,
    theme: l
  }));
}
var Bc = { exports: {} }, Be = {}, Hc = { exports: {} }, Wc = {};
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
  function t(C, _) {
    var N = C.length;
    C.push(_);
    e:
      for (; 0 < N; ) {
        var $ = N - 1 >>> 1, j = C[$];
        if (0 < l(j, _))
          C[$] = _, C[N] = j, N = $;
        else
          break e;
      }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0)
      return null;
    var _ = C[0], N = C.pop();
    if (N !== _) {
      C[0] = N;
      e:
        for (var $ = 0, j = C.length, mt = j >>> 1; $ < mt; ) {
          var Se = 2 * ($ + 1) - 1, Bo = C[Se], Qt = Se + 1, Yr = C[Qt];
          if (0 > l(Bo, N))
            Qt < j && 0 > l(Yr, Bo) ? (C[$] = Yr, C[Qt] = N, $ = Qt) : (C[$] = Bo, C[Se] = N, $ = Se);
          else if (Qt < j && 0 > l(Yr, N))
            C[$] = Yr, C[Qt] = N, $ = Qt;
          else
            break e;
        }
    }
    return _;
  }
  function l(C, _) {
    var N = C.sortIndex - _.sortIndex;
    return N !== 0 ? N : C.id - _.id;
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
  var s = [], a = [], d = 1, h = null, m = 3, v = !1, S = !1, g = !1, L = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var _ = n(a); _ !== null; ) {
      if (_.callback === null)
        r(a);
      else if (_.startTime <= C)
        r(a), _.sortIndex = _.expirationTime, t(s, _);
      else
        break;
      _ = n(a);
    }
  }
  function k(C) {
    if (g = !1, p(C), !S)
      if (n(s) !== null)
        S = !0, pt(y);
      else {
        var _ = n(a);
        _ !== null && I(k, _.startTime - C);
      }
  }
  function y(C, _) {
    S = !1, g && (g = !1, f(T), T = -1), v = !0;
    var N = m;
    try {
      for (p(_), h = n(s); h !== null && (!(h.expirationTime > _) || C && !F()); ) {
        var $ = h.callback;
        if (typeof $ == "function") {
          h.callback = null, m = h.priorityLevel;
          var j = $(h.expirationTime <= _);
          _ = e.unstable_now(), typeof j == "function" ? h.callback = j : h === n(s) && r(s), p(_);
        } else
          r(s);
        h = n(s);
      }
      if (h !== null)
        var mt = !0;
      else {
        var Se = n(a);
        Se !== null && I(k, Se.startTime - _), mt = !1;
      }
      return mt;
    } finally {
      h = null, m = N, v = !1;
    }
  }
  var x = !1, w = null, T = -1, D = 5, z = -1;
  function F() {
    return !(e.unstable_now() - z < D);
  }
  function Oe() {
    if (w !== null) {
      var C = e.unstable_now();
      z = C;
      var _ = !0;
      try {
        _ = w(!0, C);
      } finally {
        _ ? ze() : (x = !1, w = null);
      }
    } else
      x = !1;
  }
  var ze;
  if (typeof c == "function")
    ze = function() {
      c(Oe);
    };
  else if (typeof MessageChannel < "u") {
    var lt = new MessageChannel(), Yt = lt.port2;
    lt.port1.onmessage = Oe, ze = function() {
      Yt.postMessage(null);
    };
  } else
    ze = function() {
      L(Oe, 0);
    };
  function pt(C) {
    w = C, x || (x = !0, ze());
  }
  function I(C, _) {
    T = L(function() {
      C(e.unstable_now());
    }, _);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    S || v || (S = !0, pt(y));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(C) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var _ = 3;
        break;
      default:
        _ = m;
    }
    var N = m;
    m = _;
    try {
      return C();
    } finally {
      m = N;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, _) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var N = m;
    m = C;
    try {
      return _();
    } finally {
      m = N;
    }
  }, e.unstable_scheduleCallback = function(C, _, N) {
    var $ = e.unstable_now();
    switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? $ + N : $) : N = $, C) {
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
    return j = N + j, C = { id: d++, callback: _, priorityLevel: C, startTime: N, expirationTime: j, sortIndex: -1 }, N > $ ? (C.sortIndex = N, t(a, C), n(s) === null && C === n(a) && (g ? (f(T), T = -1) : g = !0, I(k, N - $))) : (C.sortIndex = j, t(s, C), S || v || (S = !0, pt(y))), C;
  }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(C) {
    var _ = m;
    return function() {
      var N = m;
      m = _;
      try {
        return C.apply(this, arguments);
      } finally {
        m = N;
      }
    };
  };
})(Wc);
Hc.exports = Wc;
var bh = Hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qh = R, je = bh;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Vc = /* @__PURE__ */ new Set(), wr = {};
function un(e, t) {
  Mn(e, t), Mn(e + "Capture", t);
}
function Mn(e, t) {
  for (wr[e] = t, e = 0; e < t.length; e++)
    Vc.add(t[e]);
}
var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ki = Object.prototype.hasOwnProperty, ey = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Js = {}, bs = {};
function ty(e) {
  return ki.call(bs, e) ? !0 : ki.call(Js, e) ? !1 : ey.test(e) ? bs[e] = !0 : (Js[e] = !0, !1);
}
function ny(e, t, n, r) {
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
function ry(e, t, n, r) {
  if (t === null || typeof t > "u" || ny(e, t, n, r))
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
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  me[e] = new Ce(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  me[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  me[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  me[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  me[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  me[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  me[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  me[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  me[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Du = /[\-:]([a-z])/g;
function Iu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Du,
    Iu
  );
  me[t] = new Ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Du, Iu);
  me[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Du, Iu);
  me[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  me[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  me[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Au(e, t, n, r) {
  var l = me.hasOwnProperty(t) ? me[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ry(t, n, l, r) && (n = null), r || l === null ? ty(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Gr = Symbol.for("react.element"), dn = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), Fu = Symbol.for("react.strict_mode"), xi = Symbol.for("react.profiler"), Kc = Symbol.for("react.provider"), Yc = Symbol.for("react.context"), ju = Symbol.for("react.forward_ref"), Ei = Symbol.for("react.suspense"), Ci = Symbol.for("react.suspense_list"), Uu = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), Qc = Symbol.for("react.offscreen"), qs = Symbol.iterator;
function Yn(e) {
  return e === null || typeof e != "object" ? null : (e = qs && e[qs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var J = Object.assign, Yo;
function tr(e) {
  if (Yo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yo = t && t[1] || "";
    }
  return `
` + Yo + e;
}
var Qo = !1;
function Xo(e, t) {
  if (!e || Qo)
    return "";
  Qo = !0;
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
    Qo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? tr(e) : "";
}
function ly(e) {
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
      return e = Xo(e.type, !1), e;
    case 11:
      return e = Xo(e.type.render, !1), e;
    case 1:
      return e = Xo(e.type, !0), e;
    default:
      return "";
  }
}
function _i(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case pn:
      return "Fragment";
    case dn:
      return "Portal";
    case xi:
      return "Profiler";
    case Fu:
      return "StrictMode";
    case Ei:
      return "Suspense";
    case Ci:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yc:
        return (e.displayName || "Context") + ".Consumer";
      case Kc:
        return (e._context.displayName || "Context") + ".Provider";
      case ju:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Uu:
        return t = e.displayName || null, t !== null ? t : _i(e.type) || "Memo";
      case Tt:
        t = e._payload, e = e._init;
        try {
          return _i(e(t));
        } catch {
        }
    }
  return null;
}
function oy(e) {
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
      return _i(t);
    case 8:
      return t === Fu ? "StrictMode" : "Mode";
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
function Bt(e) {
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
function Xc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function iy(e) {
  var t = Xc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = iy(e));
}
function Gc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Xc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ll(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pi(e, t) {
  var n = t.checked;
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ea(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Bt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Zc(e, t) {
  t = t.checked, t != null && Au(e, "checked", t, !1);
}
function Ti(e, t) {
  Zc(e, t);
  var n = Bt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ni(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ni(e, t.type, Bt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ta(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ni(e, t, n) {
  (t !== "number" || Ll(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
    for (n = "" + Bt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ri(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(E(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function na(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(E(92));
      if (nr(n)) {
        if (1 < n.length)
          throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Bt(n) };
}
function Jc(e, t) {
  var n = Bt(t.value), r = Bt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ra(e) {
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
function Li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? bc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Jr, qc = function(e) {
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
function Sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ur = {
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
}, uy = ["Webkit", "ms", "Moz", "O"];
Object.keys(ur).forEach(function(e) {
  uy.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ur[t] = ur[e];
  });
});
function ef(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ur.hasOwnProperty(e) && ur[e] ? ("" + t).trim() : t + "px";
}
function tf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = ef(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var sy = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Oi(e, t) {
  if (t) {
    if (sy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(E(62));
  }
}
function zi(e, t) {
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
var $i = null;
function Bu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Mi = null, Nn = null, Rn = null;
function la(e) {
  if (e = Wr(e)) {
    if (typeof Mi != "function")
      throw Error(E(280));
    var t = e.stateNode;
    t && (t = To(t), Mi(e.stateNode, e.type, t));
  }
}
function nf(e) {
  Nn ? Rn ? Rn.push(e) : Rn = [e] : Nn = e;
}
function rf() {
  if (Nn) {
    var e = Nn, t = Rn;
    if (Rn = Nn = null, la(e), t)
      for (e = 0; e < t.length; e++)
        la(t[e]);
  }
}
function lf(e, t) {
  return e(t);
}
function of() {
}
var Go = !1;
function uf(e, t, n) {
  if (Go)
    return e(t, n);
  Go = !0;
  try {
    return lf(e, t, n);
  } finally {
    Go = !1, (Nn !== null || Rn !== null) && (of(), rf());
  }
}
function kr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = To(n);
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
    throw Error(E(231, t, typeof n));
  return n;
}
var Di = !1;
if (kt)
  try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", { get: function() {
      Di = !0;
    } }), window.addEventListener("test", Qn, Qn), window.removeEventListener("test", Qn, Qn);
  } catch {
    Di = !1;
  }
function ay(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var sr = !1, Ol = null, zl = !1, Ii = null, cy = { onError: function(e) {
  sr = !0, Ol = e;
} };
function fy(e, t, n, r, l, o, i, u, s) {
  sr = !1, Ol = null, ay.apply(cy, arguments);
}
function dy(e, t, n, r, l, o, i, u, s) {
  if (fy.apply(this, arguments), sr) {
    if (sr) {
      var a = Ol;
      sr = !1, Ol = null;
    } else
      throw Error(E(198));
    zl || (zl = !0, Ii = a);
  }
}
function sn(e) {
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
function sf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function oa(e) {
  if (sn(e) !== e)
    throw Error(E(188));
}
function py(e) {
  var t = e.alternate;
  if (!t) {
    if (t = sn(e), t === null)
      throw Error(E(188));
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
          return oa(l), e;
        if (o === r)
          return oa(l), t;
        o = o.sibling;
      }
      throw Error(E(188));
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
          throw Error(E(189));
      }
    }
    if (n.alternate !== r)
      throw Error(E(190));
  }
  if (n.tag !== 3)
    throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function af(e) {
  return e = py(e), e !== null ? cf(e) : null;
}
function cf(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = cf(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var ff = je.unstable_scheduleCallback, ia = je.unstable_cancelCallback, my = je.unstable_shouldYield, hy = je.unstable_requestPaint, te = je.unstable_now, yy = je.unstable_getCurrentPriorityLevel, Hu = je.unstable_ImmediatePriority, df = je.unstable_UserBlockingPriority, $l = je.unstable_NormalPriority, gy = je.unstable_LowPriority, pf = je.unstable_IdlePriority, Eo = null, ft = null;
function vy(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var tt = Math.clz32 ? Math.clz32 : ky, wy = Math.log, Sy = Math.LN2;
function ky(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (wy(e) / Sy | 0) | 0;
}
var br = 64, qr = 4194304;
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
function Ml(e, t) {
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
function xy(e, t) {
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
function Ey(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - tt(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = xy(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ai(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function mf() {
  var e = br;
  return br <<= 1, !(br & 4194240) && (br = 64), e;
}
function Zo(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Br(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n;
}
function Cy(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - tt(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Wu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var W = 0;
function hf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var yf, Vu, gf, vf, wf, Fi = !1, el = [], $t = null, Mt = null, Dt = null, xr = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Map(), Rt = [], _y = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ua(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $t = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Er.delete(t.pointerId);
  }
}
function Xn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Wr(t), t !== null && Vu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Py(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return $t = Xn($t, e, t, n, r, l), !0;
    case "dragenter":
      return Mt = Xn(Mt, e, t, n, r, l), !0;
    case "mouseover":
      return Dt = Xn(Dt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return xr.set(o, Xn(xr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Er.set(o, Xn(Er.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Sf(e) {
  var t = Zt(e.target);
  if (t !== null) {
    var n = sn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = sf(n), t !== null) {
          e.blockedOn = t, wf(e.priority, function() {
            gf(n);
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
function yl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      $i = r, n.target.dispatchEvent(r), $i = null;
    } else
      return t = Wr(n), t !== null && Vu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function sa(e, t, n) {
  yl(e) && n.delete(t);
}
function Ty() {
  Fi = !1, $t !== null && yl($t) && ($t = null), Mt !== null && yl(Mt) && (Mt = null), Dt !== null && yl(Dt) && (Dt = null), xr.forEach(sa), Er.forEach(sa);
}
function Gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Fi || (Fi = !0, je.unstable_scheduleCallback(je.unstable_NormalPriority, Ty)));
}
function Cr(e) {
  function t(l) {
    return Gn(l, e);
  }
  if (0 < el.length) {
    Gn(el[0], e);
    for (var n = 1; n < el.length; n++) {
      var r = el[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for ($t !== null && Gn($t, e), Mt !== null && Gn(Mt, e), Dt !== null && Gn(Dt, e), xr.forEach(t), Er.forEach(t), n = 0; n < Rt.length; n++)
    r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null); )
    Sf(n), n.blockedOn === null && Rt.shift();
}
var Ln = _t.ReactCurrentBatchConfig, Dl = !0;
function Ny(e, t, n, r) {
  var l = W, o = Ln.transition;
  Ln.transition = null;
  try {
    W = 1, Ku(e, t, n, r);
  } finally {
    W = l, Ln.transition = o;
  }
}
function Ry(e, t, n, r) {
  var l = W, o = Ln.transition;
  Ln.transition = null;
  try {
    W = 4, Ku(e, t, n, r);
  } finally {
    W = l, Ln.transition = o;
  }
}
function Ku(e, t, n, r) {
  if (Dl) {
    var l = ji(e, t, n, r);
    if (l === null)
      ii(e, t, r, Il, n), ua(e, r);
    else if (Py(l, e, t, n, r))
      r.stopPropagation();
    else if (ua(e, r), t & 4 && -1 < _y.indexOf(e)) {
      for (; l !== null; ) {
        var o = Wr(l);
        if (o !== null && yf(o), o = ji(e, t, n, r), o === null && ii(e, t, r, Il, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      ii(e, t, r, null, n);
  }
}
var Il = null;
function ji(e, t, n, r) {
  if (Il = null, e = Bu(r), e = Zt(e), e !== null)
    if (t = sn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = sf(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Il = e, null;
}
function kf(e) {
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
      switch (yy()) {
        case Hu:
          return 1;
        case df:
          return 4;
        case $l:
        case gy:
          return 16;
        case pf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ot = null, Yu = null, gl = null;
function xf() {
  if (gl)
    return gl;
  var e, t = Yu, n = t.length, r, l = "value" in Ot ? Ot.value : Ot.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return gl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function vl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function tl() {
  return !0;
}
function aa() {
  return !1;
}
function He(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? tl : aa, this.isPropagationStopped = aa, this;
  }
  return J(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = tl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = tl);
  }, persist: function() {
  }, isPersistent: tl }), t;
}
var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Qu = He(Wn), Hr = J({}, Wn, { view: 0, detail: 0 }), Ly = He(Hr), Jo, bo, Zn, Co = J({}, Hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Zn && (Zn && e.type === "mousemove" ? (Jo = e.screenX - Zn.screenX, bo = e.screenY - Zn.screenY) : bo = Jo = 0, Zn = e), Jo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : bo;
} }), ca = He(Co), Oy = J({}, Co, { dataTransfer: 0 }), zy = He(Oy), $y = J({}, Hr, { relatedTarget: 0 }), qo = He($y), My = J({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dy = He(My), Iy = J({}, Wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ay = He(Iy), Fy = J({}, Wn, { data: 0 }), fa = He(Fy), jy = {
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
}, Uy = {
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
}, By = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Hy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = By[e]) ? !!t[e] : !1;
}
function Xu() {
  return Hy;
}
var Wy = J({}, Hr, { key: function(e) {
  if (e.key) {
    var t = jy[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = vl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Uy[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xu, charCode: function(e) {
  return e.type === "keypress" ? vl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? vl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Vy = He(Wy), Ky = J({}, Co, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), da = He(Ky), Yy = J({}, Hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xu }), Qy = He(Yy), Xy = J({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gy = He(Xy), Zy = J({}, Co, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Jy = He(Zy), by = [9, 13, 27, 32], Gu = kt && "CompositionEvent" in window, ar = null;
kt && "documentMode" in document && (ar = document.documentMode);
var qy = kt && "TextEvent" in window && !ar, Ef = kt && (!Gu || ar && 8 < ar && 11 >= ar), pa = String.fromCharCode(32), ma = !1;
function Cf(e, t) {
  switch (e) {
    case "keyup":
      return by.indexOf(t.keyCode) !== -1;
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
function _f(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mn = !1;
function eg(e, t) {
  switch (e) {
    case "compositionend":
      return _f(t);
    case "keypress":
      return t.which !== 32 ? null : (ma = !0, pa);
    case "textInput":
      return e = t.data, e === pa && ma ? null : e;
    default:
      return null;
  }
}
function tg(e, t) {
  if (mn)
    return e === "compositionend" || !Gu && Cf(e, t) ? (e = xf(), gl = Yu = Ot = null, mn = !1, e) : null;
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
var ng = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ha(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ng[e.type] : t === "textarea";
}
function Pf(e, t, n, r) {
  nf(r), t = Al(t, "onChange"), 0 < t.length && (n = new Qu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var cr = null, _r = null;
function rg(e) {
  Af(e, 0);
}
function _o(e) {
  var t = gn(e);
  if (Gc(t))
    return e;
}
function lg(e, t) {
  if (e === "change")
    return t;
}
var Tf = !1;
if (kt) {
  var ei;
  if (kt) {
    var ti = "oninput" in document;
    if (!ti) {
      var ya = document.createElement("div");
      ya.setAttribute("oninput", "return;"), ti = typeof ya.oninput == "function";
    }
    ei = ti;
  } else
    ei = !1;
  Tf = ei && (!document.documentMode || 9 < document.documentMode);
}
function ga() {
  cr && (cr.detachEvent("onpropertychange", Nf), _r = cr = null);
}
function Nf(e) {
  if (e.propertyName === "value" && _o(_r)) {
    var t = [];
    Pf(t, _r, e, Bu(e)), uf(rg, t);
  }
}
function og(e, t, n) {
  e === "focusin" ? (ga(), cr = t, _r = n, cr.attachEvent("onpropertychange", Nf)) : e === "focusout" && ga();
}
function ig(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _o(_r);
}
function ug(e, t) {
  if (e === "click")
    return _o(t);
}
function sg(e, t) {
  if (e === "input" || e === "change")
    return _o(t);
}
function ag(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var rt = typeof Object.is == "function" ? Object.is : ag;
function Pr(e, t) {
  if (rt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ki.call(t, l) || !rt(e[l], t[l]))
      return !1;
  }
  return !0;
}
function va(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function wa(e, t) {
  var n = va(e);
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
    n = va(n);
  }
}
function Rf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Lf() {
  for (var e = window, t = Ll(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Ll(e.document);
  }
  return t;
}
function Zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function cg(e) {
  var t = Lf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Rf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Zu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = wa(n, o);
        var i = wa(
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
var fg = kt && "documentMode" in document && 11 >= document.documentMode, hn = null, Ui = null, fr = null, Bi = !1;
function Sa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bi || hn == null || hn !== Ll(r) || (r = hn, "selectionStart" in r && Zu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fr && Pr(fr, r) || (fr = r, r = Al(Ui, "onSelect"), 0 < r.length && (t = new Qu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = hn)));
}
function nl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var yn = { animationend: nl("Animation", "AnimationEnd"), animationiteration: nl("Animation", "AnimationIteration"), animationstart: nl("Animation", "AnimationStart"), transitionend: nl("Transition", "TransitionEnd") }, ni = {}, Of = {};
kt && (Of = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
function Po(e) {
  if (ni[e])
    return ni[e];
  if (!yn[e])
    return e;
  var t = yn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Of)
      return ni[e] = t[n];
  return e;
}
var zf = Po("animationend"), $f = Po("animationiteration"), Mf = Po("animationstart"), Df = Po("transitionend"), If = /* @__PURE__ */ new Map(), ka = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wt(e, t) {
  If.set(e, t), un(t, [e]);
}
for (var ri = 0; ri < ka.length; ri++) {
  var li = ka[ri], dg = li.toLowerCase(), pg = li[0].toUpperCase() + li.slice(1);
  Wt(dg, "on" + pg);
}
Wt(zf, "onAnimationEnd");
Wt($f, "onAnimationIteration");
Wt(Mf, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Df, "onTransitionEnd");
Mn("onMouseEnter", ["mouseout", "mouseover"]);
Mn("onMouseLeave", ["mouseout", "mouseover"]);
Mn("onPointerEnter", ["pointerout", "pointerover"]);
Mn("onPointerLeave", ["pointerout", "pointerover"]);
un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mg = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function xa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, dy(r, t, void 0, e), e.currentTarget = null;
}
function Af(e, t) {
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
          xa(l, u, a), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          xa(l, u, a), o = s;
        }
    }
  }
  if (zl)
    throw e = Ii, zl = !1, Ii = null, e;
}
function Y(e, t) {
  var n = t[Yi];
  n === void 0 && (n = t[Yi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ff(t, e, 2, !1), n.add(r));
}
function oi(e, t, n) {
  var r = 0;
  t && (r |= 4), Ff(n, e, r, t);
}
var rl = "_reactListening" + Math.random().toString(36).slice(2);
function Tr(e) {
  if (!e[rl]) {
    e[rl] = !0, Vc.forEach(function(n) {
      n !== "selectionchange" && (mg.has(n) || oi(n, !1, e), oi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[rl] || (t[rl] = !0, oi("selectionchange", !1, t));
  }
}
function Ff(e, t, n, r) {
  switch (kf(t)) {
    case 1:
      var l = Ny;
      break;
    case 4:
      l = Ry;
      break;
    default:
      l = Ku;
  }
  n = l.bind(null, t, n, e), l = void 0, !Di || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ii(e, t, n, r, l) {
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
  uf(function() {
    var a = o, d = Bu(n), h = [];
    e: {
      var m = If.get(e);
      if (m !== void 0) {
        var v = Qu, S = e;
        switch (e) {
          case "keypress":
            if (vl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = Vy;
            break;
          case "focusin":
            S = "focus", v = qo;
            break;
          case "focusout":
            S = "blur", v = qo;
            break;
          case "beforeblur":
          case "afterblur":
            v = qo;
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
            v = ca;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = zy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Qy;
            break;
          case zf:
          case $f:
          case Mf:
            v = Dy;
            break;
          case Df:
            v = Gy;
            break;
          case "scroll":
            v = Ly;
            break;
          case "wheel":
            v = Jy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ay;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = da;
        }
        var g = (t & 4) !== 0, L = !g && e === "scroll", f = g ? m !== null ? m + "Capture" : null : m;
        g = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var k = p.stateNode;
          if (p.tag === 5 && k !== null && (p = k, f !== null && (k = kr(c, f), k != null && g.push(Nr(c, k, p)))), L)
            break;
          c = c.return;
        }
        0 < g.length && (m = new v(m, S, null, n, d), h.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== $i && (S = n.relatedTarget || n.fromElement) && (Zt(S) || S[xt]))
          break e;
        if ((v || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (S = n.relatedTarget || n.toElement, v = a, S = S ? Zt(S) : null, S !== null && (L = sn(S), S !== L || S.tag !== 5 && S.tag !== 6) && (S = null)) : (v = null, S = a), v !== S)) {
          if (g = ca, k = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (g = da, k = "onPointerLeave", f = "onPointerEnter", c = "pointer"), L = v == null ? m : gn(v), p = S == null ? m : gn(S), m = new g(k, c + "leave", v, n, d), m.target = L, m.relatedTarget = p, k = null, Zt(d) === a && (g = new g(f, c + "enter", S, n, d), g.target = p, g.relatedTarget = L, k = g), L = k, v && S)
            t: {
              for (g = v, f = S, c = 0, p = g; p; p = cn(p))
                c++;
              for (p = 0, k = f; k; k = cn(k))
                p++;
              for (; 0 < c - p; )
                g = cn(g), c--;
              for (; 0 < p - c; )
                f = cn(f), p--;
              for (; c--; ) {
                if (g === f || f !== null && g === f.alternate)
                  break t;
                g = cn(g), f = cn(f);
              }
              g = null;
            }
          else
            g = null;
          v !== null && Ea(h, m, v, g, !1), S !== null && L !== null && Ea(h, L, S, g, !0);
        }
      }
      e: {
        if (m = a ? gn(a) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file")
          var y = lg;
        else if (ha(m))
          if (Tf)
            y = sg;
          else {
            y = ig;
            var x = og;
          }
        else
          (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (y = ug);
        if (y && (y = y(e, a))) {
          Pf(h, y, n, d);
          break e;
        }
        x && x(e, m, a), e === "focusout" && (x = m._wrapperState) && x.controlled && m.type === "number" && Ni(m, "number", m.value);
      }
      switch (x = a ? gn(a) : window, e) {
        case "focusin":
          (ha(x) || x.contentEditable === "true") && (hn = x, Ui = a, fr = null);
          break;
        case "focusout":
          fr = Ui = hn = null;
          break;
        case "mousedown":
          Bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Bi = !1, Sa(h, n, d);
          break;
        case "selectionchange":
          if (fg)
            break;
        case "keydown":
        case "keyup":
          Sa(h, n, d);
      }
      var w;
      if (Gu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        mn ? Cf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Ef && n.locale !== "ko" && (mn || T !== "onCompositionStart" ? T === "onCompositionEnd" && mn && (w = xf()) : (Ot = d, Yu = "value" in Ot ? Ot.value : Ot.textContent, mn = !0)), x = Al(a, T), 0 < x.length && (T = new fa(T, e, null, n, d), h.push({ event: T, listeners: x }), w ? T.data = w : (w = _f(n), w !== null && (T.data = w)))), (w = qy ? eg(e, n) : tg(e, n)) && (a = Al(a, "onBeforeInput"), 0 < a.length && (d = new fa("onBeforeInput", "beforeinput", null, n, d), h.push({ event: d, listeners: a }), d.data = w));
    }
    Af(h, t);
  });
}
function Nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Al(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = kr(e, n), o != null && r.unshift(Nr(e, o, l)), o = kr(e, t), o != null && r.push(Nr(e, o, l))), e = e.return;
  }
  return r;
}
function cn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ea(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, l ? (s = kr(n, o), s != null && i.unshift(Nr(n, s, u))) : l || (s = kr(n, o), s != null && i.push(Nr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var hg = /\r\n?/g, yg = /\u0000|\uFFFD/g;
function Ca(e) {
  return (typeof e == "string" ? e : "" + e).replace(hg, `
`).replace(yg, "");
}
function ll(e, t, n) {
  if (t = Ca(t), Ca(e) !== t && n)
    throw Error(E(425));
}
function Fl() {
}
var Hi = null, Wi = null;
function Vi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ki = typeof setTimeout == "function" ? setTimeout : void 0, gg = typeof clearTimeout == "function" ? clearTimeout : void 0, _a = typeof Promise == "function" ? Promise : void 0, vg = typeof queueMicrotask == "function" ? queueMicrotask : typeof _a < "u" ? function(e) {
  return _a.resolve(null).then(e).catch(wg);
} : Ki;
function wg(e) {
  setTimeout(function() {
    throw e;
  });
}
function ui(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Cr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Cr(t);
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
function Pa(e) {
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
var Vn = Math.random().toString(36).slice(2), at = "__reactFiber$" + Vn, Rr = "__reactProps$" + Vn, xt = "__reactContainer$" + Vn, Yi = "__reactEvents$" + Vn, Sg = "__reactListeners$" + Vn, kg = "__reactHandles$" + Vn;
function Zt(e) {
  var t = e[at];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[xt] || n[at]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Pa(e); e !== null; ) {
          if (n = e[at])
            return n;
          e = Pa(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Wr(e) {
  return e = e[at] || e[xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function gn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(E(33));
}
function To(e) {
  return e[Rr] || null;
}
var Qi = [], vn = -1;
function Vt(e) {
  return { current: e };
}
function Q(e) {
  0 > vn || (e.current = Qi[vn], Qi[vn] = null, vn--);
}
function K(e, t) {
  vn++, Qi[vn] = e.current, e.current = t;
}
var Ht = {}, we = Vt(Ht), Te = Vt(!1), tn = Ht;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Ht;
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
function jl() {
  Q(Te), Q(we);
}
function Ta(e, t, n) {
  if (we.current !== Ht)
    throw Error(E(168));
  K(we, t), K(Te, n);
}
function jf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(E(108, oy(e) || "Unknown", l));
  return J({}, n, r);
}
function Ul(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, tn = we.current, K(we, e), K(Te, Te.current), !0;
}
function Na(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(E(169));
  n ? (e = jf(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, Q(Te), Q(we), K(we, e)) : Q(Te), K(Te, n);
}
var yt = null, No = !1, si = !1;
function Uf(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function xg(e) {
  No = !0, Uf(e);
}
function Kt() {
  if (!si && yt !== null) {
    si = !0;
    var e = 0, t = W;
    try {
      var n = yt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yt = null, No = !1;
    } catch (l) {
      throw yt !== null && (yt = yt.slice(e + 1)), ff(Hu, Kt), l;
    } finally {
      W = t, si = !1;
    }
  }
  return null;
}
var wn = [], Sn = 0, Bl = null, Hl = 0, Ve = [], Ke = 0, nn = null, gt = 1, vt = "";
function Xt(e, t) {
  wn[Sn++] = Hl, wn[Sn++] = Bl, Bl = e, Hl = t;
}
function Bf(e, t, n) {
  Ve[Ke++] = gt, Ve[Ke++] = vt, Ve[Ke++] = nn, nn = e;
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
function Ju(e) {
  e.return !== null && (Xt(e, 1), Bf(e, 1, 0));
}
function bu(e) {
  for (; e === Bl; )
    Bl = wn[--Sn], wn[Sn] = null, Hl = wn[--Sn], wn[Sn] = null;
  for (; e === nn; )
    nn = Ve[--Ke], Ve[Ke] = null, vt = Ve[--Ke], Ve[Ke] = null, gt = Ve[--Ke], Ve[Ke] = null;
}
var Fe = null, Ie = null, X = !1, et = null;
function Hf(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ra(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fe = e, Ie = It(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fe = e, Ie = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nn !== null ? { id: gt, overflow: vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fe = e, Ie = null, !0) : !1;
    default:
      return !1;
  }
}
function Xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gi(e) {
  if (X) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!Ra(e, t)) {
        if (Xi(e))
          throw Error(E(418));
        t = It(n.nextSibling);
        var r = Fe;
        t && Ra(e, t) ? Hf(r, n) : (e.flags = e.flags & -4097 | 2, X = !1, Fe = e);
      }
    } else {
      if (Xi(e))
        throw Error(E(418));
      e.flags = e.flags & -4097 | 2, X = !1, Fe = e;
    }
  }
}
function La(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function ol(e) {
  if (e !== Fe)
    return !1;
  if (!X)
    return La(e), X = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Vi(e.type, e.memoizedProps)), t && (t = Ie)) {
    if (Xi(e))
      throw Wf(), Error(E(418));
    for (; t; )
      Hf(e, t), t = It(t.nextSibling);
  }
  if (La(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = It(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else
    Ie = Fe ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function Wf() {
  for (var e = Ie; e; )
    e = It(e.nextSibling);
}
function In() {
  Ie = Fe = null, X = !1;
}
function qu(e) {
  et === null ? et = [e] : et.push(e);
}
var Eg = _t.ReactCurrentBatchConfig;
function Jn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(E(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(E(284));
    if (!n._owner)
      throw Error(E(290, e));
  }
  return e;
}
function il(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Oa(e) {
  var t = e._init;
  return t(e._payload);
}
function Vf(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c);
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
  function l(f, c) {
    return f = Ut(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, k) {
    return c === null || c.tag !== 6 ? (c = hi(p, f.mode, k), c.return = f, c) : (c = l(c, p), c.return = f, c);
  }
  function s(f, c, p, k) {
    var y = p.type;
    return y === pn ? d(f, c, p.props.children, k, p.key) : c !== null && (c.elementType === y || typeof y == "object" && y !== null && y.$$typeof === Tt && Oa(y) === c.type) ? (k = l(c, p.props), k.ref = Jn(f, c, p), k.return = f, k) : (k = _l(p.type, p.key, p.props, null, f.mode, k), k.ref = Jn(f, c, p), k.return = f, k);
  }
  function a(f, c, p, k) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = yi(p, f.mode, k), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c);
  }
  function d(f, c, p, k, y) {
    return c === null || c.tag !== 7 ? (c = en(p, f.mode, k, y), c.return = f, c) : (c = l(c, p), c.return = f, c);
  }
  function h(f, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = hi("" + c, f.mode, p), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Gr:
          return p = _l(c.type, c.key, c.props, null, f.mode, p), p.ref = Jn(f, null, c), p.return = f, p;
        case dn:
          return c = yi(c, f.mode, p), c.return = f, c;
        case Tt:
          var k = c._init;
          return h(f, k(c._payload), p);
      }
      if (nr(c) || Yn(c))
        return c = en(c, f.mode, p, null), c.return = f, c;
      il(f, c);
    }
    return null;
  }
  function m(f, c, p, k) {
    var y = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return y !== null ? null : u(f, c, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Gr:
          return p.key === y ? s(f, c, p, k) : null;
        case dn:
          return p.key === y ? a(f, c, p, k) : null;
        case Tt:
          return y = p._init, m(
            f,
            c,
            y(p._payload),
            k
          );
      }
      if (nr(p) || Yn(p))
        return y !== null ? null : d(f, c, p, k, null);
      il(f, p);
    }
    return null;
  }
  function v(f, c, p, k, y) {
    if (typeof k == "string" && k !== "" || typeof k == "number")
      return f = f.get(p) || null, u(c, f, "" + k, y);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Gr:
          return f = f.get(k.key === null ? p : k.key) || null, s(c, f, k, y);
        case dn:
          return f = f.get(k.key === null ? p : k.key) || null, a(c, f, k, y);
        case Tt:
          var x = k._init;
          return v(f, c, p, x(k._payload), y);
      }
      if (nr(k) || Yn(k))
        return f = f.get(p) || null, d(c, f, k, y, null);
      il(c, k);
    }
    return null;
  }
  function S(f, c, p, k) {
    for (var y = null, x = null, w = c, T = c = 0, D = null; w !== null && T < p.length; T++) {
      w.index > T ? (D = w, w = null) : D = w.sibling;
      var z = m(f, w, p[T], k);
      if (z === null) {
        w === null && (w = D);
        break;
      }
      e && w && z.alternate === null && t(f, w), c = o(z, c, T), x === null ? y = z : x.sibling = z, x = z, w = D;
    }
    if (T === p.length)
      return n(f, w), X && Xt(f, T), y;
    if (w === null) {
      for (; T < p.length; T++)
        w = h(f, p[T], k), w !== null && (c = o(w, c, T), x === null ? y = w : x.sibling = w, x = w);
      return X && Xt(f, T), y;
    }
    for (w = r(f, w); T < p.length; T++)
      D = v(w, f, T, p[T], k), D !== null && (e && D.alternate !== null && w.delete(D.key === null ? T : D.key), c = o(D, c, T), x === null ? y = D : x.sibling = D, x = D);
    return e && w.forEach(function(F) {
      return t(f, F);
    }), X && Xt(f, T), y;
  }
  function g(f, c, p, k) {
    var y = Yn(p);
    if (typeof y != "function")
      throw Error(E(150));
    if (p = y.call(p), p == null)
      throw Error(E(151));
    for (var x = y = null, w = c, T = c = 0, D = null, z = p.next(); w !== null && !z.done; T++, z = p.next()) {
      w.index > T ? (D = w, w = null) : D = w.sibling;
      var F = m(f, w, z.value, k);
      if (F === null) {
        w === null && (w = D);
        break;
      }
      e && w && F.alternate === null && t(f, w), c = o(F, c, T), x === null ? y = F : x.sibling = F, x = F, w = D;
    }
    if (z.done)
      return n(
        f,
        w
      ), X && Xt(f, T), y;
    if (w === null) {
      for (; !z.done; T++, z = p.next())
        z = h(f, z.value, k), z !== null && (c = o(z, c, T), x === null ? y = z : x.sibling = z, x = z);
      return X && Xt(f, T), y;
    }
    for (w = r(f, w); !z.done; T++, z = p.next())
      z = v(w, f, T, z.value, k), z !== null && (e && z.alternate !== null && w.delete(z.key === null ? T : z.key), c = o(z, c, T), x === null ? y = z : x.sibling = z, x = z);
    return e && w.forEach(function(Oe) {
      return t(f, Oe);
    }), X && Xt(f, T), y;
  }
  function L(f, c, p, k) {
    if (typeof p == "object" && p !== null && p.type === pn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Gr:
          e: {
            for (var y = p.key, x = c; x !== null; ) {
              if (x.key === y) {
                if (y = p.type, y === pn) {
                  if (x.tag === 7) {
                    n(f, x.sibling), c = l(x, p.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (x.elementType === y || typeof y == "object" && y !== null && y.$$typeof === Tt && Oa(y) === x.type) {
                  n(f, x.sibling), c = l(x, p.props), c.ref = Jn(f, x, p), c.return = f, f = c;
                  break e;
                }
                n(f, x);
                break;
              } else
                t(f, x);
              x = x.sibling;
            }
            p.type === pn ? (c = en(p.props.children, f.mode, k, p.key), c.return = f, f = c) : (k = _l(p.type, p.key, p.props, null, f.mode, k), k.ref = Jn(f, c, p), k.return = f, f = k);
          }
          return i(f);
        case dn:
          e: {
            for (x = p.key; c !== null; ) {
              if (c.key === x)
                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                  n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = yi(p, f.mode, k), c.return = f, f = c;
          }
          return i(f);
        case Tt:
          return x = p._init, L(f, c, x(p._payload), k);
      }
      if (nr(p))
        return S(f, c, p, k);
      if (Yn(p))
        return g(f, c, p, k);
      il(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = hi(p, f.mode, k), c.return = f, f = c), i(f)) : n(f, c);
  }
  return L;
}
var An = Vf(!0), Kf = Vf(!1), Wl = Vt(null), Vl = null, kn = null, es = null;
function ts() {
  es = kn = Vl = null;
}
function ns(e) {
  var t = Wl.current;
  Q(Wl), e._currentValue = t;
}
function Zi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function On(e, t) {
  Vl = e, es = kn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function Xe(e) {
  var t = e._currentValue;
  if (es !== e)
    if (e = { context: e, memoizedValue: t, next: null }, kn === null) {
      if (Vl === null)
        throw Error(E(308));
      kn = e, Vl.dependencies = { lanes: 0, firstContext: e };
    } else
      kn = kn.next = e;
  return t;
}
var Jt = null;
function rs(e) {
  Jt === null ? Jt = [e] : Jt.push(e);
}
function Yf(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, rs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Et(e, r);
}
function Et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nt = !1;
function ls(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Qf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function wt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function At(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, U & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Et(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, rs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Et(e, n);
}
function wl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wu(e, n);
  }
}
function za(e, t) {
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
function Kl(e, t, n, r) {
  var l = e.updateQueue;
  Nt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, u = d.lastBaseUpdate, u !== i && (u === null ? d.firstBaseUpdate = a : u.next = a, d.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, d = a = s = null, u = o;
    do {
      var m = u.lane, v = u.eventTime;
      if ((r & m) === m) {
        d !== null && (d = d.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, g = u;
          switch (m = t, v = n, g.tag) {
            case 1:
              if (S = g.payload, typeof S == "function") {
                h = S.call(v, h, m);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = g.payload, m = typeof S == "function" ? S.call(v, h, m) : S, m == null)
                break e;
              h = J({}, h, m);
              break e;
            case 2:
              Nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else
        v = { eventTime: v, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, d === null ? (a = d = v, s = h) : d = d.next = v, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (1);
    if (d === null && (s = h), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = d, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    ln |= i, e.lanes = i, e.memoizedState = h;
  }
}
function $a(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var Vr = {}, dt = Vt(Vr), Lr = Vt(Vr), Or = Vt(Vr);
function bt(e) {
  if (e === Vr)
    throw Error(E(174));
  return e;
}
function os(e, t) {
  switch (K(Or, t), K(Lr, e), K(dt, Vr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Li(t, e);
  }
  Q(dt), K(dt, t);
}
function Fn() {
  Q(dt), Q(Lr), Q(Or);
}
function Xf(e) {
  bt(Or.current);
  var t = bt(dt.current), n = Li(t, e.type);
  t !== n && (K(Lr, e), K(dt, n));
}
function is(e) {
  Lr.current === e && (Q(dt), Q(Lr));
}
var G = Vt(0);
function Yl(e) {
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
var ai = [];
function us() {
  for (var e = 0; e < ai.length; e++)
    ai[e]._workInProgressVersionPrimary = null;
  ai.length = 0;
}
var Sl = _t.ReactCurrentDispatcher, ci = _t.ReactCurrentBatchConfig, rn = 0, Z = null, oe = null, ue = null, Ql = !1, dr = !1, zr = 0, Cg = 0;
function he() {
  throw Error(E(321));
}
function ss(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n]))
      return !1;
  return !0;
}
function as(e, t, n, r, l, o) {
  if (rn = o, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Sl.current = e === null || e.memoizedState === null ? Ng : Rg, e = n(r, l), dr) {
    o = 0;
    do {
      if (dr = !1, zr = 0, 25 <= o)
        throw Error(E(301));
      o += 1, ue = oe = null, t.updateQueue = null, Sl.current = Lg, e = n(r, l);
    } while (dr);
  }
  if (Sl.current = Xl, t = oe !== null && oe.next !== null, rn = 0, ue = oe = Z = null, Ql = !1, t)
    throw Error(E(300));
  return e;
}
function cs() {
  var e = zr !== 0;
  return zr = 0, e;
}
function it() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ue === null ? Z.memoizedState = ue = e : ue = ue.next = e, ue;
}
function Ge() {
  if (oe === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = oe.next;
  var t = ue === null ? Z.memoizedState : ue.next;
  if (t !== null)
    ue = t, oe = e;
  else {
    if (e === null)
      throw Error(E(310));
    oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ue === null ? Z.memoizedState = ue = e : ue = ue.next = e;
  }
  return ue;
}
function $r(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fi(e) {
  var t = Ge(), n = t.queue;
  if (n === null)
    throw Error(E(311));
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
      var d = a.lane;
      if ((rn & d) === d)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var h = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, Z.lanes |= d, ln |= d;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, rt(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Z.lanes |= o, ln |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function di(e) {
  var t = Ge(), n = t.queue;
  if (n === null)
    throw Error(E(311));
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
function Gf() {
}
function Zf(e, t) {
  var n = Z, r = Ge(), l = t(), o = !rt(r.memoizedState, l);
  if (o && (r.memoizedState = l, Pe = !0), r = r.queue, fs(qf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ue !== null && ue.memoizedState.tag & 1) {
    if (n.flags |= 2048, Mr(9, bf.bind(null, n, r, l, t), void 0, null), se === null)
      throw Error(E(349));
    rn & 30 || Jf(n, t, l);
  }
  return l;
}
function Jf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function bf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ed(t) && td(e);
}
function qf(e, t, n) {
  return n(function() {
    ed(t) && td(e);
  });
}
function ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function td(e) {
  var t = Et(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function Ma(e) {
  var t = it();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $r, lastRenderedState: e }, t.queue = e, e = e.dispatch = Tg.bind(null, Z, e), [t.memoizedState, e];
}
function Mr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function nd() {
  return Ge().memoizedState;
}
function kl(e, t, n, r) {
  var l = it();
  Z.flags |= e, l.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ro(e, t, n, r) {
  var l = Ge();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (oe !== null) {
    var i = oe.memoizedState;
    if (o = i.destroy, r !== null && ss(r, i.deps)) {
      l.memoizedState = Mr(t, n, o, r);
      return;
    }
  }
  Z.flags |= e, l.memoizedState = Mr(1 | t, n, o, r);
}
function Da(e, t) {
  return kl(8390656, 8, e, t);
}
function fs(e, t) {
  return Ro(2048, 8, e, t);
}
function rd(e, t) {
  return Ro(4, 2, e, t);
}
function ld(e, t) {
  return Ro(4, 4, e, t);
}
function od(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function id(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ro(4, 4, od.bind(null, t, e), n);
}
function ds() {
}
function ud(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ss(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function sd(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ss(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ad(e, t, n) {
  return rn & 21 ? (rt(n, t) || (n = mf(), Z.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function _g(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ci.transition;
  ci.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, ci.transition = r;
  }
}
function cd() {
  return Ge().memoizedState;
}
function Pg(e, t, n) {
  var r = jt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, fd(e))
    dd(t, n);
  else if (n = Yf(e, t, n, r), n !== null) {
    var l = xe();
    nt(n, e, r, l), pd(n, t, r);
  }
}
function Tg(e, t, n) {
  var r = jt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fd(e))
    dd(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, rt(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, rs(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = Yf(e, t, l, r), n !== null && (l = xe(), nt(n, e, r, l), pd(n, t, r));
  }
}
function fd(e) {
  var t = e.alternate;
  return e === Z || t !== null && t === Z;
}
function dd(e, t) {
  dr = Ql = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function pd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wu(e, n);
  }
}
var Xl = { readContext: Xe, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, Ng = { readContext: Xe, useCallback: function(e, t) {
  return it().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Xe, useEffect: Da, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, kl(
    4194308,
    4,
    od.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return kl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return kl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = it();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = it();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Pg.bind(null, Z, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = it();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ma, useDebugValue: ds, useDeferredValue: function(e) {
  return it().memoizedState = e;
}, useTransition: function() {
  var e = Ma(!1), t = e[0];
  return e = _g.bind(null, e[1]), it().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Z, l = it();
  if (X) {
    if (n === void 0)
      throw Error(E(407));
    n = n();
  } else {
    if (n = t(), se === null)
      throw Error(E(349));
    rn & 30 || Jf(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Da(qf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Mr(9, bf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = it(), t = se.identifierPrefix;
  if (X) {
    var n = vt, r = gt;
    n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Cg++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Rg = {
  readContext: Xe,
  useCallback: ud,
  useContext: Xe,
  useEffect: fs,
  useImperativeHandle: id,
  useInsertionEffect: rd,
  useLayoutEffect: ld,
  useMemo: sd,
  useReducer: fi,
  useRef: nd,
  useState: function() {
    return fi($r);
  },
  useDebugValue: ds,
  useDeferredValue: function(e) {
    var t = Ge();
    return ad(t, oe.memoizedState, e);
  },
  useTransition: function() {
    var e = fi($r)[0], t = Ge().memoizedState;
    return [e, t];
  },
  useMutableSource: Gf,
  useSyncExternalStore: Zf,
  useId: cd,
  unstable_isNewReconciler: !1
}, Lg = { readContext: Xe, useCallback: ud, useContext: Xe, useEffect: fs, useImperativeHandle: id, useInsertionEffect: rd, useLayoutEffect: ld, useMemo: sd, useReducer: di, useRef: nd, useState: function() {
  return di($r);
}, useDebugValue: ds, useDeferredValue: function(e) {
  var t = Ge();
  return oe === null ? t.memoizedState = e : ad(t, oe.memoizedState, e);
}, useTransition: function() {
  var e = di($r)[0], t = Ge().memoizedState;
  return [e, t];
}, useMutableSource: Gf, useSyncExternalStore: Zf, useId: cd, unstable_isNewReconciler: !1 };
function be(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ji(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lo = { isMounted: function(e) {
  return (e = e._reactInternals) ? sn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), l = jt(e), o = wt(r, l);
  o.payload = t, n != null && (o.callback = n), t = At(e, o, l), t !== null && (nt(t, e, l, r), wl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), l = jt(e), o = wt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = At(e, o, l), t !== null && (nt(t, e, l, r), wl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = xe(), r = jt(e), l = wt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = At(e, l, r), t !== null && (nt(t, e, r, n), wl(t, e, r));
} };
function Ia(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(l, o) : !0;
}
function md(e, t, n) {
  var r = !1, l = Ht, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Xe(o) : (l = Ne(t) ? tn : we.current, r = t.contextTypes, o = (r = r != null) ? Dn(e, l) : Ht), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Lo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Aa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
}
function bi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ls(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Xe(o) : (o = Ne(t) ? tn : we.current, l.context = Dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ji(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Lo.enqueueReplaceState(l, l.state, null), Kl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t) {
  try {
    var n = "", r = t;
    do
      n += ly(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function pi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Og = typeof WeakMap == "function" ? WeakMap : Map;
function hd(e, t, n) {
  n = wt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Zl || (Zl = !0, au = r), qi(e, t);
  }, n;
}
function yd(e, t, n) {
  n = wt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      qi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    qi(e, t), typeof r != "function" && (Ft === null ? Ft = /* @__PURE__ */ new Set([this]) : Ft.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Fa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Og();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Kg.bind(null, e, t, n), t.then(e, e));
}
function ja(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ua(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e);
}
var zg = _t.ReactCurrentOwner, Pe = !1;
function ke(e, t, n, r) {
  t.child = e === null ? Kf(t, null, n, r) : An(t, e.child, n, r);
}
function Ba(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return On(t, l), r = as(e, t, n, r, o, l), n = cs(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ct(e, t, l)) : (X && n && Ju(t), t.flags |= 1, ke(e, t, r, l), t.child);
}
function Ha(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ss(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, gd(e, t, o, r, l)) : (e = _l(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pr, n(i, r) && e.ref === t.ref)
      return Ct(e, t, l);
  }
  return t.flags |= 1, e = Ut(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function gd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref)
      if (Pe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (Pe = !0);
      else
        return t.lanes = e.lanes, Ct(e, t, l);
  }
  return eu(e, t, n, r, l);
}
function vd(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(En, Me), Me |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(En, Me), Me |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, K(En, Me), Me |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, K(En, Me), Me |= r;
  return ke(e, t, l, n), t.child;
}
function wd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function eu(e, t, n, r, l) {
  var o = Ne(n) ? tn : we.current;
  return o = Dn(t, o), On(t, l), n = as(e, t, n, r, o, l), r = cs(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ct(e, t, l)) : (X && r && Ju(t), t.flags |= 1, ke(e, t, n, l), t.child);
}
function Wa(e, t, n, r, l) {
  if (Ne(n)) {
    var o = !0;
    Ul(t);
  } else
    o = !1;
  if (On(t, l), t.stateNode === null)
    xl(e, t), md(t, n, r), bi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Xe(a) : (a = Ne(n) ? tn : we.current, a = Dn(t, a));
    var d = n.getDerivedStateFromProps, h = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && Aa(t, i, r, a), Nt = !1;
    var m = t.memoizedState;
    i.state = m, Kl(t, r, i, l), s = t.memoizedState, u !== r || m !== s || Te.current || Nt ? (typeof d == "function" && (Ji(t, n, d, r), s = t.memoizedState), (u = Nt || Ia(t, n, u, r, m, s, a)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Qf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : be(t.type, u), i.props = a, h = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Xe(s) : (s = Ne(n) ? tn : we.current, s = Dn(t, s));
    var v = n.getDerivedStateFromProps;
    (d = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== s) && Aa(t, i, r, s), Nt = !1, m = t.memoizedState, i.state = m, Kl(t, r, i, l);
    var S = t.memoizedState;
    u !== h || m !== S || Te.current || Nt ? (typeof v == "function" && (Ji(t, n, v, r), S = t.memoizedState), (a = Nt || Ia(t, n, a, r, m, S, s) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return tu(e, t, n, r, o, l);
}
function tu(e, t, n, r, l, o) {
  wd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Na(t, n, !1), Ct(e, t, o);
  r = t.stateNode, zg.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = An(t, e.child, null, o), t.child = An(t, null, u, o)) : ke(e, t, u, o), t.memoizedState = r.state, l && Na(t, n, !0), t.child;
}
function Sd(e) {
  var t = e.stateNode;
  t.pendingContext ? Ta(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ta(e, t.context, !1), os(e, t.containerInfo);
}
function Va(e, t, n, r, l) {
  return In(), qu(l), t.flags |= 256, ke(e, t, n, r), t.child;
}
var nu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ru(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kd(e, t, n) {
  var r = t.pendingProps, l = G.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), K(G, l & 1), e === null)
    return Gi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = $o(i, r, 0, null), e = en(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ru(n), t.memoizedState = nu, e) : ps(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return $g(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Ut(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Ut(u, o) : (o = en(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ru(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = nu, r;
  }
  return o = e.child, e = o.sibling, r = Ut(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ps(e, t) {
  return t = $o({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ul(e, t, n, r) {
  return r !== null && qu(r), An(t, e.child, null, n), e = ps(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function $g(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = pi(Error(E(422))), ul(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = $o({ mode: "visible", children: r.children }, l, 0, null), o = en(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && An(t, e.child, null, i), t.child.memoizedState = ru(i), t.memoizedState = nu, o);
  if (!(t.mode & 1))
    return ul(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(E(419)), r = pi(o, r, void 0), ul(e, t, i, r);
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
    return ws(), r = pi(Error(E(421))), ul(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Yg.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ie = It(l.nextSibling), Fe = t, X = !0, et = null, e !== null && (Ve[Ke++] = gt, Ve[Ke++] = vt, Ve[Ke++] = nn, gt = e.id, vt = e.overflow, nn = t), t = ps(t, r.children), t.flags |= 4096, t);
}
function Ka(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zi(e.return, t, n);
}
function mi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function xd(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ke(e, t, r.children, n), r = G.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ka(e, n, t);
          else if (e.tag === 19)
            Ka(e, n, t);
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
  if (K(G, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Yl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), mi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Yl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        mi(t, !0, n, null, o);
        break;
      case "together":
        mi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ct(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Mg(e, t, n) {
  switch (t.tag) {
    case 3:
      Sd(t), In();
      break;
    case 5:
      Xf(t);
      break;
    case 1:
      Ne(t.type) && Ul(t);
      break;
    case 4:
      os(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      K(Wl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? kd(e, t, n) : (K(G, G.current & 1), e = Ct(e, t, n), e !== null ? e.sibling : null);
      K(G, G.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return xd(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), K(G, G.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, vd(e, t, n);
  }
  return Ct(e, t, n);
}
var Ed, lu, Cd, _d;
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
lu = function() {
};
Cd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, bt(dt.current);
    var o = null;
    switch (n) {
      case "input":
        l = Pi(e, l), r = Pi(e, r), o = [];
        break;
      case "select":
        l = J({}, l, { value: void 0 }), r = J({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Ri(e, l), r = Ri(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fl);
    }
    Oi(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (wr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (wr.hasOwnProperty(a) ? (s != null && a === "onScroll" && Y("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
_d = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function bn(e, t) {
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
function Dg(e, t, n) {
  var r = t.pendingProps;
  switch (bu(t), t.tag) {
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
      return Ne(t.type) && jl(), ye(t), null;
    case 3:
      return r = t.stateNode, Fn(), Q(Te), Q(we), us(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ol(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, et !== null && (du(et), et = null))), lu(e, t), ye(t), null;
    case 5:
      is(t);
      var l = bt(Or.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Cd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(E(166));
          return ye(t), null;
        }
        if (e = bt(dt.current), ol(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[at] = t, r[Rr] = o, e = (t.mode & 1) !== 0, n) {
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
              ea(r, o), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Y("invalid", r);
              break;
            case "textarea":
              na(r, o), Y("invalid", r);
          }
          Oi(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ll(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ll(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : wr.hasOwnProperty(i) && u != null && i === "onScroll" && Y("scroll", r);
            }
          switch (n) {
            case "input":
              Zr(r), ta(r, o, !0);
              break;
            case "textarea":
              Zr(r), ra(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Fl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = bc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[at] = t, e[Rr] = r, Ed(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = zi(n, r), n) {
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
                ea(e, r), l = Pi(e, r), Y("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = J({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                na(e, r), l = Ri(e, r), Y("invalid", e);
                break;
              default:
                l = r;
            }
            Oi(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? tf(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && qc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Sr(e, s) : typeof s == "number" && Sr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (wr.hasOwnProperty(o) ? s != null && o === "onScroll" && Y("scroll", e) : s != null && Au(e, o, s, i));
              }
            switch (n) {
              case "input":
                Zr(e), ta(e, r, !1);
                break;
              case "textarea":
                Zr(e), ra(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bt(r.value));
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
                typeof l.onClick == "function" && (e.onclick = Fl);
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
        _d(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(E(166));
        if (n = bt(Or.current), bt(dt.current), ol(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (o = r.nodeValue !== n) && (e = Fe, e !== null))
            switch (e.tag) {
              case 3:
                ll(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ll(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r;
      }
      return ye(t), null;
    case 13:
      if (Q(G), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (X && Ie !== null && t.mode & 1 && !(t.flags & 128))
          Wf(), In(), t.flags |= 98560, o = !1;
        else if (o = ol(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(E(317));
            o[at] = t;
          } else
            In(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ye(t), o = !1;
        } else
          et !== null && (du(et), et = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? ie === 0 && (ie = 3) : ws())), t.updateQueue !== null && (t.flags |= 4), ye(t), null);
    case 4:
      return Fn(), lu(e, t), e === null && Tr(t.stateNode.containerInfo), ye(t), null;
    case 10:
      return ns(t.type._context), ye(t), null;
    case 17:
      return Ne(t.type) && jl(), ye(t), null;
    case 19:
      if (Q(G), o = t.memoizedState, o === null)
        return ye(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          bn(o, !1);
        else {
          if (ie !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Yl(e), i !== null) {
                for (t.flags |= 128, bn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return K(G, G.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && te() > Un && (t.flags |= 128, r = !0, bn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Yl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), bn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !X)
              return ye(t), null;
          } else
            2 * te() - o.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = !0, bn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = te(), t.sibling = null, n = G.current, K(G, r ? n & 1 | 2 : n & 1), t) : (ye(t), null);
    case 22:
    case 23:
      return vs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Me & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Ig(e, t) {
  switch (bu(t), t.tag) {
    case 1:
      return Ne(t.type) && jl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Fn(), Q(Te), Q(we), us(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return is(t), null;
    case 13:
      if (Q(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(E(340));
        In();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Q(G), null;
    case 4:
      return Fn(), null;
    case 10:
      return ns(t.type._context), null;
    case 22:
    case 23:
      return vs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var sl = !1, ve = !1, Ag = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function xn(e, t) {
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
function ou(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var Ya = !1;
function Fg(e, t) {
  if (Hi = Dl, e = Lf(), Zu(e)) {
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
          var i = 0, u = -1, s = -1, a = 0, d = 0, h = e, m = null;
          t:
            for (; ; ) {
              for (var v; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (v = h.firstChild) !== null; )
                m = h, h = v;
              for (; ; ) {
                if (h === e)
                  break t;
                if (m === n && ++a === l && (u = i), m === o && ++d === r && (s = i), (v = h.nextSibling) !== null)
                  break;
                h = m, m = h.parentNode;
              }
              h = v;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Wi = { focusedElem: e, selectionRange: n }, Dl = !1, O = t; O !== null; )
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
                  var g = S.memoizedProps, L = S.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? g : be(t.type, g), L);
                  f.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(E(163));
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
  return S = Ya, Ya = !1, S;
}
function pr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && ou(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Oo(e, t) {
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
function iu(e) {
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
function Pd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Pd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[Rr], delete t[Yi], delete t[Sg], delete t[kg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Td(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qa(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Td(e.return))
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
function uu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Fl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (uu(e, t, n), e = e.sibling; e !== null; )
      uu(e, t, n), e = e.sibling;
}
function su(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (su(e, t, n), e = e.sibling; e !== null; )
      su(e, t, n), e = e.sibling;
}
var ce = null, qe = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; )
    Nd(e, t, n), n = n.sibling;
}
function Nd(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(Eo, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ve || xn(n, t);
    case 6:
      var r = ce, l = qe;
      ce = null, Pt(e, t, n), ce = r, qe = l, ce !== null && (qe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null && (qe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? ui(e.parentNode, n) : e.nodeType === 1 && ui(e, n), Cr(e)) : ui(ce, n.stateNode));
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
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && ou(n, t, i), l = l.next;
        } while (l !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (!ve && (xn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
function Xa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ag()), t.forEach(function(r) {
      var l = Qg.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Je(e, t) {
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
          throw Error(E(160));
        Nd(o, i, l), ce = null, qe = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        ee(l, t, a);
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
      if (Je(t, e), ot(e), r & 4) {
        try {
          pr(3, e, e.return), Oo(3, e);
        } catch (g) {
          ee(e, e.return, g);
        }
        try {
          pr(5, e, e.return);
        } catch (g) {
          ee(e, e.return, g);
        }
      }
      break;
    case 1:
      Je(t, e), ot(e), r & 512 && n !== null && xn(n, n.return);
      break;
    case 5:
      if (Je(t, e), ot(e), r & 512 && n !== null && xn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Sr(l, "");
        } catch (g) {
          ee(e, e.return, g);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Zc(l, o), zi(u, i);
            var a = zi(u, o);
            for (i = 0; i < s.length; i += 2) {
              var d = s[i], h = s[i + 1];
              d === "style" ? tf(l, h) : d === "dangerouslySetInnerHTML" ? qc(l, h) : d === "children" ? Sr(l, h) : Au(l, d, h, a);
            }
            switch (u) {
              case "input":
                Ti(l, o);
                break;
              case "textarea":
                Jc(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null ? Tn(l, !!o.multiple, v, !1) : m !== !!o.multiple && (o.defaultValue != null ? Tn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Tn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Rr] = o;
          } catch (g) {
            ee(e, e.return, g);
          }
      }
      break;
    case 6:
      if (Je(t, e), ot(e), r & 4) {
        if (e.stateNode === null)
          throw Error(E(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (g) {
          ee(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Je(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Cr(t.containerInfo);
        } catch (g) {
          ee(e, e.return, g);
        }
      break;
    case 4:
      Je(t, e), ot(e);
      break;
    case 13:
      Je(t, e), ot(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ys = te())), r & 4 && Xa(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (ve = (a = ve) || d, Je(t, e), ve = a) : Je(t, e), ot(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1)
          for (O = e, d = e.child; d !== null; ) {
            for (h = O = d; O !== null; ) {
              switch (m = O, v = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, m, m.return);
                  break;
                case 1:
                  xn(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                    } catch (g) {
                      ee(r, n, g);
                    }
                  }
                  break;
                case 5:
                  xn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Za(h);
                    continue;
                  }
              }
              v !== null ? (v.return = m, O = v) : Za(h);
            }
            d = d.sibling;
          }
        e:
          for (d = null, h = e; ; ) {
            if (h.tag === 5) {
              if (d === null) {
                d = h;
                try {
                  l = h.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ef("display", i));
                } catch (g) {
                  ee(e, e.return, g);
                }
              }
            } else if (h.tag === 6) {
              if (d === null)
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (g) {
                  ee(e, e.return, g);
                }
            } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
            if (h === e)
              break e;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === e)
                break e;
              d === h && (d = null), h = h.return;
            }
            d === h && (d = null), h.sibling.return = h.return, h = h.sibling;
          }
      }
      break;
    case 19:
      Je(t, e), ot(e), r & 4 && Xa(e);
      break;
    case 21:
      break;
    default:
      Je(
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
          if (Td(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Sr(l, ""), r.flags &= -33);
          var o = Qa(e);
          su(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Qa(e);
          uu(e, u, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      ee(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jg(e, t, n) {
  O = e, Ld(e);
}
function Ld(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || sl;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ve;
        u = sl;
        var a = ve;
        if (sl = i, (ve = s) && !a)
          for (O = l; O !== null; )
            i = O, s = i.child, i.tag === 22 && i.memoizedState !== null ? Ja(l) : s !== null ? (s.return = i, O = s) : Ja(l);
        for (; o !== null; )
          O = o, Ld(o), o = o.sibling;
        O = l, sl = u, ve = a;
      }
      Ga(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, O = o) : Ga(e);
  }
}
function Ga(e) {
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
              ve || Oo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && $a(t, o, r);
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
                $a(t, i, n);
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
                  var d = a.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && Cr(h);
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
              throw Error(E(163));
          }
        ve || t.flags & 512 && iu(t);
      } catch (m) {
        ee(t, t.return, m);
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
function Za(e) {
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
function Ja(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Oo(4, t);
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
            iu(t);
          } catch (s) {
            ee(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            iu(t);
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
var Ug = Math.ceil, Gl = _t.ReactCurrentDispatcher, ms = _t.ReactCurrentOwner, Qe = _t.ReactCurrentBatchConfig, U = 0, se = null, le = null, pe = 0, Me = 0, En = Vt(0), ie = 0, Dr = null, ln = 0, zo = 0, hs = 0, mr = null, _e = null, ys = 0, Un = 1 / 0, ht = null, Zl = !1, au = null, Ft = null, al = !1, zt = null, Jl = 0, hr = 0, cu = null, El = -1, Cl = 0;
function xe() {
  return U & 6 ? te() : El !== -1 ? El : El = te();
}
function jt(e) {
  return e.mode & 1 ? U & 2 && pe !== 0 ? pe & -pe : Eg.transition !== null ? (Cl === 0 && (Cl = mf()), Cl) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : kf(e.type)), e) : 1;
}
function nt(e, t, n, r) {
  if (50 < hr)
    throw hr = 0, cu = null, Error(E(185));
  Br(e, n, r), (!(U & 2) || e !== se) && (e === se && (!(U & 2) && (zo |= n), ie === 4 && Lt(e, pe)), Re(e, r), n === 1 && U === 0 && !(t.mode & 1) && (Un = te() + 500, No && Kt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Ey(e, t);
  var r = Ml(e, e === se ? pe : 0);
  if (r === 0)
    n !== null && ia(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ia(n), t === 1)
      e.tag === 0 ? xg(ba.bind(null, e)) : Uf(ba.bind(null, e)), vg(function() {
        !(U & 6) && Kt();
      }), n = null;
    else {
      switch (hf(r)) {
        case 1:
          n = Hu;
          break;
        case 4:
          n = df;
          break;
        case 16:
          n = $l;
          break;
        case 536870912:
          n = pf;
          break;
        default:
          n = $l;
      }
      n = Fd(n, Od.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Od(e, t) {
  if (El = -1, Cl = 0, U & 6)
    throw Error(E(327));
  var n = e.callbackNode;
  if (zn() && e.callbackNode !== n)
    return null;
  var r = Ml(e, e === se ? pe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = bl(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var o = $d();
    (se !== e || pe !== t) && (ht = null, Un = te() + 500, qt(e, t));
    do
      try {
        Wg();
        break;
      } catch (u) {
        zd(e, u);
      }
    while (1);
    ts(), Gl.current = o, U = l, le !== null ? t = 0 : (se = null, pe = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ai(e), l !== 0 && (r = l, t = fu(e, l))), t === 1)
      throw n = Dr, qt(e, 0), Lt(e, r), Re(e, te()), n;
    if (t === 6)
      Lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Bg(l) && (t = bl(e, r), t === 2 && (o = Ai(e), o !== 0 && (r = o, t = fu(e, o))), t === 1))
        throw n = Dr, qt(e, 0), Lt(e, r), Re(e, te()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Gt(e, _e, ht);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = ys + 500 - te(), 10 < t)) {
            if (Ml(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              xe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ki(Gt.bind(null, e, _e, ht), t);
            break;
          }
          Gt(e, _e, ht);
          break;
        case 4:
          if (Lt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - tt(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ug(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ki(Gt.bind(null, e, _e, ht), r);
            break;
          }
          Gt(e, _e, ht);
          break;
        case 5:
          Gt(e, _e, ht);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Re(e, te()), e.callbackNode === n ? Od.bind(null, e) : null;
}
function fu(e, t) {
  var n = mr;
  return e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256), e = bl(e, t), e !== 2 && (t = _e, _e = n, t !== null && du(t)), e;
}
function du(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function Bg(e) {
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
  for (t &= ~hs, t &= ~zo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - tt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ba(e) {
  if (U & 6)
    throw Error(E(327));
  zn();
  var t = Ml(e, 0);
  if (!(t & 1))
    return Re(e, te()), null;
  var n = bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ai(e);
    r !== 0 && (t = r, n = fu(e, r));
  }
  if (n === 1)
    throw n = Dr, qt(e, 0), Lt(e, t), Re(e, te()), n;
  if (n === 6)
    throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, _e, ht), Re(e, te()), null;
}
function gs(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (Un = te() + 500, No && Kt());
  }
}
function on(e) {
  zt !== null && zt.tag === 0 && !(U & 6) && zn();
  var t = U;
  U |= 1;
  var n = Qe.transition, r = W;
  try {
    if (Qe.transition = null, W = 1, e)
      return e();
  } finally {
    W = r, Qe.transition = n, U = t, !(U & 6) && Kt();
  }
}
function vs() {
  Me = En.current, Q(En);
}
function qt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, gg(n)), le !== null)
    for (n = le.return; n !== null; ) {
      var r = n;
      switch (bu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && jl();
          break;
        case 3:
          Fn(), Q(Te), Q(we), us();
          break;
        case 5:
          is(r);
          break;
        case 4:
          Fn();
          break;
        case 13:
          Q(G);
          break;
        case 19:
          Q(G);
          break;
        case 10:
          ns(r.type._context);
          break;
        case 22:
        case 23:
          vs();
      }
      n = n.return;
    }
  if (se = e, le = e = Ut(e.current, null), pe = Me = t, ie = 0, Dr = null, hs = zo = ln = 0, _e = mr = null, Jt !== null) {
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
function zd(e, t) {
  do {
    var n = le;
    try {
      if (ts(), Sl.current = Xl, Ql) {
        for (var r = Z.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Ql = !1;
      }
      if (rn = 0, ue = oe = Z = null, dr = !1, zr = 0, ms.current = null, n === null || n.return === null) {
        ie = 1, Dr = t, le = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = pe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, d = u, h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = d.alternate;
            m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var v = ja(i);
          if (v !== null) {
            v.flags &= -257, Ua(v, i, u, o, t), v.mode & 1 && Fa(o, a, t), t = v, s = a;
            var S = t.updateQueue;
            if (S === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else
              S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Fa(o, a, t), ws();
              break e;
            }
            s = Error(E(426));
          }
        } else if (X && u.mode & 1) {
          var L = ja(i);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), Ua(L, i, u, o, t), qu(jn(s, u));
            break e;
          }
        }
        o = s = jn(s, u), ie !== 4 && (ie = 2), mr === null ? mr = [o] : mr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = hd(o, s, t);
              za(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ft === null || !Ft.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var k = yd(o, u, t);
                za(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Dd(n);
    } catch (y) {
      t = y, le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function $d() {
  var e = Gl.current;
  return Gl.current = Xl, e === null ? Xl : e;
}
function ws() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), se === null || !(ln & 268435455) && !(zo & 268435455) || Lt(se, pe);
}
function bl(e, t) {
  var n = U;
  U |= 2;
  var r = $d();
  (se !== e || pe !== t) && (ht = null, qt(e, t));
  do
    try {
      Hg();
      break;
    } catch (l) {
      zd(e, l);
    }
  while (1);
  if (ts(), U = n, Gl.current = r, le !== null)
    throw Error(E(261));
  return se = null, pe = 0, ie;
}
function Hg() {
  for (; le !== null; )
    Md(le);
}
function Wg() {
  for (; le !== null && !my(); )
    Md(le);
}
function Md(e) {
  var t = Ad(e.alternate, e, Me);
  e.memoizedProps = e.pendingProps, t === null ? Dd(e) : le = t, ms.current = null;
}
function Dd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ig(n, t), n !== null) {
        n.flags &= 32767, le = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, le = null;
        return;
      }
    } else if (n = Dg(n, t, Me), n !== null) {
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
    Qe.transition = null, W = 1, Vg(e, t, n, r);
  } finally {
    Qe.transition = l, W = r;
  }
  return null;
}
function Vg(e, t, n, r) {
  do
    zn();
  while (zt !== null);
  if (U & 6)
    throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Cy(e, o), e === se && (le = se = null, pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || al || (al = !0, Fd($l, function() {
    return zn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Qe.transition, Qe.transition = null;
    var i = W;
    W = 1;
    var u = U;
    U |= 4, ms.current = null, Fg(e, n), Rd(n, e), cg(Wi), Dl = !!Hi, Wi = Hi = null, e.current = n, jg(n), hy(), U = u, W = i, Qe.transition = o;
  } else
    e.current = n;
  if (al && (al = !1, zt = e, Jl = l), o = e.pendingLanes, o === 0 && (Ft = null), vy(n.stateNode), Re(e, te()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Zl)
    throw Zl = !1, e = au, au = null, e;
  return Jl & 1 && e.tag !== 0 && zn(), o = e.pendingLanes, o & 1 ? e === cu ? hr++ : (hr = 0, cu = e) : hr = 0, Kt(), null;
}
function zn() {
  if (zt !== null) {
    var e = hf(Jl), t = Qe.transition, n = W;
    try {
      if (Qe.transition = null, W = 16 > e ? 16 : e, zt === null)
        var r = !1;
      else {
        if (e = zt, zt = null, Jl = 0, U & 6)
          throw Error(E(331));
        var l = U;
        for (U |= 4, O = e.current; O !== null; ) {
          var o = O, i = o.child;
          if (O.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (O = a; O !== null; ) {
                  var d = O;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(8, d, o);
                  }
                  var h = d.child;
                  if (h !== null)
                    h.return = d, O = h;
                  else
                    for (; O !== null; ) {
                      d = O;
                      var m = d.sibling, v = d.return;
                      if (Pd(d), d === a) {
                        O = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = v, O = m;
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
                    var L = g.sibling;
                    g.sibling = null, g = L;
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
                      pr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, O = f;
                  break e;
                }
                O = o.return;
              }
        }
        var c = e.current;
        for (O = c; O !== null; ) {
          i = O;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null)
            p.return = i, O = p;
          else
            e:
              for (i = c; O !== null; ) {
                if (u = O, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oo(9, u);
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
        if (U = l, Kt(), ft && typeof ft.onPostCommitFiberRoot == "function")
          try {
            ft.onPostCommitFiberRoot(Eo, e);
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
function qa(e, t, n) {
  t = jn(n, t), t = hd(e, t, 1), e = At(e, t, 1), t = xe(), e !== null && (Br(e, 1, t), Re(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3)
    qa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        qa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
          e = jn(n, e), e = yd(t, e, 1), t = At(t, e, 1), e = xe(), t !== null && (Br(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Kg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, se === e && (pe & n) === n && (ie === 4 || ie === 3 && (pe & 130023424) === pe && 500 > te() - ys ? qt(e, 0) : hs |= n), Re(e, t);
}
function Id(e, t) {
  t === 0 && (e.mode & 1 ? (t = qr, qr <<= 1, !(qr & 130023424) && (qr = 4194304)) : t = 1);
  var n = xe();
  e = Et(e, t), e !== null && (Br(e, t, n), Re(e, n));
}
function Yg(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Id(e, n);
}
function Qg(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), Id(e, n);
}
var Ad;
Ad = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current)
      Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Pe = !1, Mg(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else
    Pe = !1, X && t.flags & 1048576 && Bf(t, Hl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      xl(e, t), e = t.pendingProps;
      var l = Dn(t, we.current);
      On(t, n), l = as(null, t, r, e, l, n);
      var o = cs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (o = !0, Ul(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ls(t), l.updater = Lo, t.stateNode = l, l._reactInternals = t, bi(t, r, e, n), t = tu(null, t, r, !0, o, n)) : (t.tag = 0, X && o && Ju(t), ke(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (xl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Gg(r), e = be(r, e), l) {
          case 0:
            t = eu(null, t, r, e, n);
            break e;
          case 1:
            t = Wa(null, t, r, e, n);
            break e;
          case 11:
            t = Ba(null, t, r, e, n);
            break e;
          case 14:
            t = Ha(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(E(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), eu(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), Wa(e, t, r, l, n);
    case 3:
      e: {
        if (Sd(t), e === null)
          throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Qf(e, t), Kl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = jn(Error(E(423)), t), t = Va(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = jn(Error(E(424)), t), t = Va(e, t, r, n, l);
            break e;
          } else
            for (Ie = It(t.stateNode.containerInfo.firstChild), Fe = t, X = !0, et = null, n = Kf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (In(), r === l) {
            t = Ct(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Xf(t), e === null && Gi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Vi(r, l) ? i = null : o !== null && Vi(r, o) && (t.flags |= 32), wd(e, t), ke(e, t, i, n), t.child;
    case 6:
      return e === null && Gi(t), null;
    case 13:
      return kd(e, t, n);
    case 4:
      return os(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = An(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), Ba(e, t, r, l, n);
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, K(Wl, r._currentValue), r._currentValue = i, o !== null)
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
                        var d = a.pending;
                        d === null ? s.next = s : (s.next = d.next, d.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Zi(
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
                  throw Error(E(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Zi(i, n, t), i = o.sibling;
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
      return r = t.type, l = be(r, t.pendingProps), l = be(r.type, l), Ha(e, t, r, l, n);
    case 15:
      return gd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : be(r, l), xl(e, t), t.tag = 1, Ne(r) ? (e = !0, Ul(t)) : e = !1, On(t, n), md(t, r, l), bi(t, r, l, n), tu(null, t, r, !0, e, n);
    case 19:
      return xd(e, t, n);
    case 22:
      return vd(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Fd(e, t) {
  return ff(e, t);
}
function Xg(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new Xg(e, t, n, r);
}
function Ss(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Gg(e) {
  if (typeof e == "function")
    return Ss(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ju)
      return 11;
    if (e === Uu)
      return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function _l(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Ss(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case pn:
          return en(n.children, l, o, t);
        case Fu:
          i = 8, l |= 8;
          break;
        case xi:
          return e = Ye(12, n, t, l | 2), e.elementType = xi, e.lanes = o, e;
        case Ei:
          return e = Ye(13, n, t, l), e.elementType = Ei, e.lanes = o, e;
        case Ci:
          return e = Ye(19, n, t, l), e.elementType = Ci, e.lanes = o, e;
        case Qc:
          return $o(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Kc:
                i = 10;
                break e;
              case Yc:
                i = 9;
                break e;
              case ju:
                i = 11;
                break e;
              case Uu:
                i = 14;
                break e;
              case Tt:
                i = 16, r = null;
                break e;
            }
          throw Error(E(130, e == null ? e : typeof e, ""));
      }
  return t = Ye(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function en(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function $o(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = Qc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function hi(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function yi(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Zg(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zo(0), this.expirationTimes = Zo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ks(e, t, n, r, l, o, i, u, s) {
  return e = new Zg(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ye(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ls(o), e;
}
function Jg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function jd(e) {
  if (!e)
    return Ht;
  e = e._reactInternals;
  e: {
    if (sn(e) !== e || e.tag !== 1)
      throw Error(E(170));
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
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n))
      return jf(e, n, t);
  }
  return t;
}
function Ud(e, t, n, r, l, o, i, u, s) {
  return e = ks(n, r, !0, e, l, o, i, u, s), e.context = jd(null), n = e.current, r = xe(), l = jt(n), o = wt(r, l), o.callback = t ?? null, At(n, o, l), e.current.lanes = l, Br(e, l, r), Re(e, r), e;
}
function Mo(e, t, n, r) {
  var l = t.current, o = xe(), i = jt(l);
  return n = jd(n), t.context === null ? t.context = n : t.pendingContext = n, t = wt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(l, t, i), e !== null && (nt(e, l, i, o), wl(e, l, i)), i;
}
function ql(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ec(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xs(e, t) {
  ec(e, t), (e = e.alternate) && ec(e, t);
}
function bg() {
  return null;
}
var Bd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Es(e) {
  this._internalRoot = e;
}
Do.prototype.render = Es.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(E(409));
  Mo(e, t, null, null);
};
Do.prototype.unmount = Es.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    on(function() {
      Mo(null, e, null, null);
    }), t[xt] = null;
  }
};
function Do(e) {
  this._internalRoot = e;
}
Do.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = vf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++)
      ;
    Rt.splice(n, 0, e), n === 0 && Sf(e);
  }
};
function Cs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Io(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function tc() {
}
function qg(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = ql(i);
        o.call(a);
      };
    }
    var i = Ud(t, r, e, 0, null, !1, !1, "", tc);
    return e._reactRootContainer = i, e[xt] = i.current, Tr(e.nodeType === 8 ? e.parentNode : e), on(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = ql(s);
      u.call(a);
    };
  }
  var s = ks(e, 0, !1, null, null, !1, !1, "", tc);
  return e._reactRootContainer = s, e[xt] = s.current, Tr(e.nodeType === 8 ? e.parentNode : e), on(function() {
    Mo(t, s, n, r);
  }), s;
}
function Ao(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = ql(i);
        u.call(s);
      };
    }
    Mo(t, i, e, l);
  } else
    i = qg(n, t, e, l, r);
  return ql(i);
}
yf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = rr(t.pendingLanes);
        n !== 0 && (Wu(t, n | 1), Re(t, te()), !(U & 6) && (Un = te() + 500, Kt()));
      }
      break;
    case 13:
      on(function() {
        var r = Et(e, 1);
        if (r !== null) {
          var l = xe();
          nt(r, e, 1, l);
        }
      }), xs(e, 1);
  }
};
Vu = function(e) {
  if (e.tag === 13) {
    var t = Et(e, 134217728);
    if (t !== null) {
      var n = xe();
      nt(t, e, 134217728, n);
    }
    xs(e, 134217728);
  }
};
gf = function(e) {
  if (e.tag === 13) {
    var t = jt(e), n = Et(e, t);
    if (n !== null) {
      var r = xe();
      nt(n, e, t, r);
    }
    xs(e, t);
  }
};
vf = function() {
  return W;
};
wf = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
Mi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ti(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = To(r);
            if (!l)
              throw Error(E(90));
            Gc(r), Ti(r, l);
          }
        }
      }
      break;
    case "textarea":
      Jc(e, n);
      break;
    case "select":
      t = n.value, t != null && Tn(e, !!n.multiple, t, !1);
  }
};
lf = gs;
of = on;
var ev = { usingClientEntryPoint: !1, Events: [Wr, gn, To, nf, rf, gs] }, qn = { findFiberByHostInstance: Zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, tv = { bundleType: qn.bundleType, version: qn.version, rendererPackageName: qn.rendererPackageName, rendererConfig: qn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = af(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: qn.findFiberByHostInstance || bg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cl.isDisabled && cl.supportsFiber)
    try {
      Eo = cl.inject(tv), ft = cl;
    } catch {
    }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ev;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cs(t))
    throw Error(E(200));
  return Jg(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!Cs(e))
    throw Error(E(299));
  var n = !1, r = "", l = Bd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ks(e, 1, !1, null, null, n, !1, r, l), e[xt] = t.current, Tr(e.nodeType === 8 ? e.parentNode : e), new Es(t);
};
Be.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = af(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return on(e);
};
Be.hydrate = function(e, t, n) {
  if (!Io(t))
    throw Error(E(200));
  return Ao(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!Cs(e))
    throw Error(E(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Bd;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ud(t, null, e, 1, n ?? null, l, !1, o, i), e[xt] = t.current, Tr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new Do(t);
};
Be.render = function(e, t, n) {
  if (!Io(t))
    throw Error(E(200));
  return Ao(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!Io(e))
    throw Error(E(40));
  return e._reactRootContainer ? (on(function() {
    Ao(null, null, e, !1, function() {
      e._reactRootContainer = null, e[xt] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = gs;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Io(n))
    throw Error(E(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(E(38));
  return Ao(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function Hd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hd);
    } catch (e) {
      console.error(e);
    }
}
Hd(), Bc.exports = Be;
var nv = Bc.exports, Wd, nc = nv;
Wd = nc.createRoot, nc.hydrateRoot;
function Vd(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function rv(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function lv({ layer: e, selected: t, onSelect: n, onMoveStart: r }) {
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
      o = /* @__PURE__ */ P(
        "div",
        {
          className: "chd-layer-frame",
          style: { background: e.fill || "#ffffff" }
        }
      );
      break;
    case "rect":
      o = /* @__PURE__ */ P(
        "div",
        {
          className: "chd-layer-rect",
          style: { background: e.fill || "#888780" }
        }
      );
      break;
    case "text":
      o = /* @__PURE__ */ P(
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
      o = e.src ? /* @__PURE__ */ P(
        "img",
        {
          className: `chd-layer-image${/logo/i.test(e.name) ? " chd-layer-image--contain" : ""}`,
          src: e.src,
          alt: e.name,
          draggable: !1
        }
      ) : /* @__PURE__ */ P("div", { className: "chd-layer-image-placeholder", style: { background: e.fill || "#e8e6e1" }, children: e.name || "Image" });
      break;
  }
  return /* @__PURE__ */ P(
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
const pu = {
  primary: "#00a651",
  secondary: "#000000",
  background: "#f4f7f5",
  surface: "#ffffff",
  border: "#e2e8e4",
  text: "#000000",
  muted: "#6b716e"
};
let ov = 1;
function or() {
  return `layer-${Date.now().toString(36)}-${ov++}`;
}
function mu(e, t) {
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
        fill: pu.primary,
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
        editableContent: !0
      };
  }
}
function iv() {
  const e = mu("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = pu.secondary;
  const t = mu("image", { x: 120, y: 140 });
  return t.name = "Logo", t.width = 240, t.height = 80, t.src = "", t.fill = "#ffffff", t.locked = !0, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: pu.background
    },
    layers: [e, t]
  };
}
function $e(e) {
  return JSON.parse(JSON.stringify(e));
}
function uv(e) {
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
    const a = typeof u.id == "string" ? u.id : or(), d = typeof u.name == "string" ? u.name : s, h = Number(u.x), m = Number(u.y), v = Number(u.width), S = Number(u.height);
    if (![h, m, v, S].every(Number.isFinite))
      continue;
    const g = {
      id: a,
      type: s,
      name: d,
      x: h,
      y: m,
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
      src: typeof u.src == "string" ? u.src : void 0
    };
    typeof u.editableContent == "boolean" ? g.editableContent = u.editableContent : g.editableContent = s === "text" || s === "image", o.push(g);
  }
  return {
    version: 1,
    canvas: {
      width: r,
      height: l,
      background: typeof n.background == "string" ? n.background : void 0
    },
    layers: o
  };
}
function Kd(e) {
  return typeof e.editableContent == "boolean" ? e.editableContent : e.type === "text" || e.type === "image";
}
function Fo(e) {
  return e.locked ? !1 : Kd(e);
}
function Kr(e) {
  return e.locked ? !1 : !!e.allowTransform;
}
function _s(e, t) {
  return t === "admin" ? !0 : e.visible ? Fo(e) || Kr(e) : !1;
}
function sv(e, t, n) {
  const r = {}, l = new Map(e.layers.map((o) => [o.id, o]));
  for (const o of t.layers) {
    const i = l.get(o.id);
    if (!i)
      continue;
    const u = {};
    Kr(i) && (o.x !== i.x && (u.x = o.x), o.y !== i.y && (u.y = o.y), o.width !== i.width && (u.width = o.width), o.height !== i.height && (u.height = o.height)), Fo(i) && ((o.text ?? "") !== (i.text ?? "") && (u.text = o.text), (o.fill ?? "") !== (i.fill ?? "") && (u.fill = o.fill), (o.color ?? "") !== (i.color ?? "") && (u.color = o.color), (o.src ?? "") !== (i.src ?? "") && (u.src = o.src)), Object.keys(u).length > 0 && (r[o.id] = u);
  }
  return { version: 1, templateId: n, overrides: r };
}
function av(e, t) {
  const n = {};
  return Kr(e) && (t.x !== void 0 && (n.x = t.x), t.y !== void 0 && (n.y = t.y), t.width !== void 0 && (n.width = t.width), t.height !== void 0 && (n.height = t.height)), Fo(e) && (t.text !== void 0 && (n.text = t.text), t.fill !== void 0 && (n.fill = t.fill), t.color !== void 0 && (n.color = t.color), t.src !== void 0 && (n.src = t.src)), n;
}
const Cn = 24, rc = 1, Yd = 0.25, Qd = 3, cv = 50, Xd = R.createContext(null);
function fv(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [l] = r.splice(t, 1);
  return r.splice(n, 0, l), r;
}
function lc(e, t, n) {
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
function dv({
  children: e,
  mode: t = "admin",
  initialDocument: n,
  templateDocument: r,
  templateId: l,
  onDocumentChange: o,
  onInstanceChange: i
}) {
  const u = R.useRef(null);
  u.current || (u.current = n ? $e(n) : iv());
  const s = R.useRef(
    $e(r ?? n ?? u.current)
  ), a = R.useRef(t);
  a.current = t;
  const [d, h] = R.useState(() => $e(u.current)), [m, v] = R.useState([]), [S, g] = R.useState({
    zoom: rc,
    panX: 40,
    panY: 40
  }), L = R.useRef([$e(u.current)]), f = R.useRef(0), [c, p] = R.useState(0), k = R.useRef(m);
  k.current = m;
  const y = R.useRef(d);
  y.current = d;
  const x = R.useRef(o);
  x.current = o;
  const w = R.useRef(i);
  w.current = i;
  const T = R.useRef(l);
  T.current = l;
  const D = R.useCallback(() => p((I) => I + 1), []), z = R.useCallback((I) => {
    var C, _;
    if ((C = x.current) == null || C.call(x, $e(I)), a.current === "endUser") {
      const N = T.current ?? "";
      (_ = w.current) == null || _.call(
        w,
        sv(s.current, I, N)
      );
    }
  }, []), F = R.useCallback(
    (I) => {
      const C = L.current.slice(0, f.current + 1);
      for (C.push($e(I)); C.length > cv; )
        C.shift();
      L.current = C, f.current = C.length - 1, D();
    },
    [D]
  ), Oe = R.useCallback(
    (I, C) => {
      h(I), y.current = I, C && F(I), z(I);
    },
    [z, F]
  ), ze = R.useCallback(
    (I) => {
      const C = a.current === "endUser";
      switch (I.type) {
        case "ADD_LAYER": {
          if (C)
            return;
          const _ = mu(I.layerType, I.at);
          h((N) => {
            const $ = { ...N, layers: [...N.layers, _] };
            return F($), z($), $;
          }), v([_.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const _ = I.pushHistory !== !1;
          h((N) => {
            const $ = {
              ...N,
              layers: N.layers.map((j) => {
                if (j.id !== I.id)
                  return j;
                const mt = C ? av(j, I.patch) : I.patch;
                if (Object.keys(mt).length === 0)
                  return j;
                const Se = { ...j, ...mt };
                return typeof Se.width == "number" && (Se.width = Math.max(Cn, Se.width)), typeof Se.height == "number" && (Se.height = Math.max(Cn, Se.height)), Se;
              })
            };
            return _ && F($), z($), $;
          });
          break;
        }
        case "DELETE_LAYERS": {
          if (C)
            return;
          const _ = new Set(I.ids ?? k.current);
          if (_.size === 0)
            return;
          h((N) => {
            const $ = {
              ...N,
              layers: N.layers.filter((j) => !_.has(j.id))
            };
            return F($), z($), $;
          }), v((N) => N.filter(($) => !_.has($)));
          break;
        }
        case "SELECT": {
          v((_) => {
            const N = I.ids.filter(($) => {
              const j = y.current.layers.find((mt) => mt.id === $);
              return j ? _s(j, a.current) : !1;
            });
            if (I.additive) {
              const $ = new Set(_);
              for (const j of N)
                $.has(j) ? $.delete(j) : $.add(j);
              return Array.from($);
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
          if (C)
            return;
          h((_) => {
            const N = {
              ..._,
              layers: fv(_.layers, I.fromIndex, I.toIndex)
            };
            return F(N), z(N), N;
          });
          break;
        }
        case "SET_VISIBILITY": {
          if (C)
            return;
          h((_) => {
            const N = {
              ..._,
              layers: _.layers.map(
                ($) => $.id === I.id ? { ...$, visible: I.visible } : $
              )
            };
            return F(N), z(N), N;
          });
          break;
        }
        case "BRING_FORWARD": {
          if (C)
            return;
          const _ = k.current;
          h((N) => {
            const $ = { ...N, layers: lc(N.layers, _, "forward") };
            return F($), z($), $;
          });
          break;
        }
        case "SEND_BACKWARD": {
          if (C)
            return;
          const _ = k.current;
          h((N) => {
            const $ = { ...N, layers: lc(N.layers, _, "backward") };
            return F($), z($), $;
          });
          break;
        }
        case "ZOOM_SET": {
          g((_) => ({
            ..._,
            zoom: Vd(I.zoom, Yd, Qd)
          }));
          break;
        }
        case "ZOOM_RESET": {
          g({ zoom: rc, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          g((_) => ({
            ..._,
            panX: I.panX,
            panY: I.panY
          }));
          break;
        }
        case "UNDO": {
          if (f.current <= 0)
            return;
          f.current -= 1;
          const _ = $e(L.current[f.current]);
          h(_), y.current = _, v([]), D(), z(_);
          break;
        }
        case "REDO": {
          if (f.current >= L.current.length - 1)
            return;
          f.current += 1;
          const _ = $e(L.current[f.current]);
          h(_), y.current = _, v([]), D(), z(_);
          break;
        }
        case "LOAD_DOCUMENT": {
          Oe($e(I.document), !0), v([]);
          break;
        }
        case "COMMIT": {
          h((_) => (F(_), z(_), _));
          break;
        }
      }
    },
    [Oe, D, z, F]
  ), lt = R.useCallback(() => $e(d), [d]), Yt = R.useCallback(
    (I) => {
      if (a.current === "endUser")
        return !1;
      try {
        const C = uv(JSON.parse(I));
        return C ? (s.current = $e(C), Oe(C, !0), v([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [Oe]
  );
  R.useEffect(() => {
    t === "admin" && n && (s.current = $e(n)), t === "endUser" && r && (s.current = $e(r));
  }, [n, r, t]);
  const pt = R.useMemo(
    () => ({
      mode: t,
      templateId: l,
      document: d,
      selection: m,
      viewport: S,
      canUndo: f.current > 0,
      canRedo: f.current < L.current.length - 1,
      dispatch: ze,
      exportDocument: lt,
      importDocumentJson: Yt
    }),
    [t, l, d, m, S, ze, lt, Yt, c]
  );
  return /* @__PURE__ */ P(Xd.Provider, { value: pt, children: e });
}
function an() {
  const e = R.useContext(Xd);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function Ps() {
  return an().mode;
}
function pv() {
  return an().document;
}
function Gd() {
  return an().document.layers;
}
function jo() {
  return an().selection;
}
function Zd() {
  return an().viewport;
}
function Uo() {
  return an().dispatch;
}
function mv() {
  const e = an();
  return {
    mode: e.mode,
    canUndo: e.canUndo,
    canRedo: e.canRedo,
    exportDocument: e.exportDocument,
    importDocumentJson: e.importDocumentJson,
    dispatch: e.dispatch
  };
}
const hv = ["nw", "ne", "sw", "se"];
function yv() {
  const e = pv(), t = jo(), n = Zd(), r = Uo(), l = Ps(), [o, i] = R.useState(null), [u, s] = R.useState(!1), a = R.useRef(n);
  a.current = n;
  const d = R.useRef(l);
  d.current = l, R.useEffect(() => {
    const y = (w) => {
      if (w.code === "Space" && !(w.target instanceof HTMLInputElement) && !(w.target instanceof HTMLTextAreaElement) && (w.preventDefault(), s(!0)), d.current === "admin" && (w.key === "Delete" || w.key === "Backspace") && t.length > 0) {
        const T = w.target.tagName;
        if (T === "INPUT" || T === "TEXTAREA")
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
  }, [r, t.length]), R.useEffect(() => {
    if (!o)
      return;
    const y = (w) => {
      const T = a.current.zoom;
      if (o.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: o.origPanX + (w.clientX - o.startX),
          panY: o.origPanY + (w.clientY - o.startY)
        });
        return;
      }
      const { dx: D, dy: z } = rv(
        w.clientX - o.startX,
        w.clientY - o.startY,
        T
      );
      if (o.kind === "move") {
        for (const Yt of o.ids) {
          const pt = o.origins[Yt];
          pt && r({
            type: "UPDATE_LAYER",
            id: Yt,
            patch: { x: pt.x + D, y: pt.y + z },
            pushHistory: !1
          });
        }
        return;
      }
      let F = o.origX, Oe = o.origY, ze = o.origW, lt = o.origH;
      o.handle.includes("e") && (ze = Math.max(Cn, o.origW + D)), o.handle.includes("s") && (lt = Math.max(Cn, o.origH + z)), o.handle.includes("w") && (ze = Math.max(Cn, o.origW - D), F = o.origX + (o.origW - ze)), o.handle.includes("n") && (lt = Math.max(Cn, o.origH - z), Oe = o.origY + (o.origH - lt)), r({
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
  const h = (y) => {
    y.preventDefault();
    const x = Vd(n.zoom * (y.deltaY < 0 ? 1.08 : 0.92), Yd, Qd);
    r({ type: "ZOOM_SET", zoom: x });
  }, m = (y) => {
    i({
      kind: "pan",
      startX: y.clientX,
      startY: y.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, v = (y) => {
    if (y.button === 1 || y.button === 0 && u) {
      y.preventDefault(), m(y);
      return;
    }
    y.button === 0 && r({ type: "UNSELECT_ALL" });
  }, S = (y, x) => {
    _s(y, l) && r({
      type: "SELECT",
      ids: [y.id],
      additive: x.shiftKey
    });
  }, g = (y) => l === "admin" ? !y.locked : Kr(y), L = (y, x) => {
    if (!g(y) || u)
      return;
    const w = t.includes(y.id) ? t : [y.id];
    t.includes(y.id) || r({ type: "SELECT", ids: [y.id] });
    const T = {};
    for (const D of w) {
      const z = e.layers.find((F) => F.id === D);
      z && g(z) && (T[D] = { x: z.x, y: z.y });
    }
    Object.keys(T).length !== 0 && i({
      kind: "move",
      ids: Object.keys(T),
      startX: x.clientX,
      startY: x.clientY,
      origins: T
    });
  }, f = (y, x, w) => {
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
  }, c = e.layers.filter((y) => t.includes(y.id) && y.visible), p = c.length === 1 ? c[0] : null, k = p ? g(p) : !1;
  return /* @__PURE__ */ A(
    "div",
    {
      className: `chd-viewport${u ? " chd-viewport--panning" : ""}`,
      onWheel: h,
      onPointerDown: v,
      children: [
        /* @__PURE__ */ P(
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
                  e.layers.map((y) => /* @__PURE__ */ P(
                    lv,
                    {
                      layer: y,
                      selected: t.includes(y.id),
                      onSelect: (x) => S(y, x),
                      onMoveStart: (x) => L(y, x)
                    },
                    y.id
                  )),
                  k && p ? /* @__PURE__ */ P(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: p.x,
                        top: p.y,
                        width: p.width,
                        height: p.height
                      },
                      children: hv.map((y) => /* @__PURE__ */ P(
                        "div",
                        {
                          className: `chd-handle chd-handle--${y}`,
                          onPointerDown: (x) => f(p, y, x)
                        },
                        y
                      ))
                    }
                  ) : p ? /* @__PURE__ */ P(
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
                  c.length > 1 ? c.map((y) => /* @__PURE__ */ P(
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
        /* @__PURE__ */ P("div", { className: "chd-viewport-hint", children: "Scroll to zoom · Space+drag to pan · Shift+click multi-select" })
      ]
    }
  );
}
function gv() {
  const e = Gd(), t = jo(), n = Uo(), r = Ps(), l = r === "admin", o = [...e].map((i, u) => ({ layer: i, index: u })).reverse().filter(({ layer: i }) => l || _s(i, r));
  return /* @__PURE__ */ A("aside", { className: "chd-panel chd-layers-panel", "aria-label": "Layers", children: [
    /* @__PURE__ */ P("div", { className: "chd-panel-header", children: l ? "Layers" : "Editable layers" }),
    /* @__PURE__ */ P("ul", { className: "chd-layer-list", children: o.length === 0 ? /* @__PURE__ */ P("li", { className: "chd-panel-empty", children: "No editable layers" }) : o.map(({ layer: i, index: u }) => {
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
                  /* @__PURE__ */ P("span", { className: "chd-layer-list-type", children: i.type }),
                  /* @__PURE__ */ P("span", { className: "chd-layer-list-name", children: i.name })
                ]
              }
            ),
            l ? /* @__PURE__ */ A(Pl, { children: [
              /* @__PURE__ */ P(
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
              /* @__PURE__ */ P(
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
              /* @__PURE__ */ P(
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
    /* @__PURE__ */ P("span", { children: e }),
    /* @__PURE__ */ P(
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
function vv() {
  const e = Gd(), t = jo(), n = Uo(), l = Ps() === "admin", o = e.filter((d) => t.includes(d.id)), i = o.length === 1 ? o[0] : null, u = (d) => {
    i && n({ type: "UPDATE_LAYER", id: i.id, patch: d });
  }, s = i ? l ? !i.locked : Kr(i) : !1, a = i ? l ? !i.locked : Fo(i) : !1;
  return /* @__PURE__ */ A("aside", { className: "chd-panel chd-properties-panel", "aria-label": "Properties", children: [
    /* @__PURE__ */ P("div", { className: "chd-panel-header", children: "Properties" }),
    i ? /* @__PURE__ */ A("div", { className: "chd-properties-body", children: [
      l ? /* @__PURE__ */ A("label", { className: "chd-field", children: [
        /* @__PURE__ */ P("span", { children: "Name" }),
        /* @__PURE__ */ P(
          "input",
          {
            type: "text",
            value: i.name,
            onChange: (d) => u({ name: d.target.value })
          }
        )
      ] }) : /* @__PURE__ */ A("div", { className: "chd-field", children: [
        /* @__PURE__ */ P("span", { children: "Layer" }),
        /* @__PURE__ */ P("strong", { children: i.name })
      ] }),
      /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ P(
          er,
          {
            label: "X",
            value: Math.round(i.x),
            disabled: !s,
            onChange: (d) => u({ x: d })
          }
        ),
        /* @__PURE__ */ P(
          er,
          {
            label: "Y",
            value: Math.round(i.y),
            disabled: !s,
            onChange: (d) => u({ y: d })
          }
        )
      ] }),
      /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ P(
          er,
          {
            label: "W",
            value: Math.round(i.width),
            disabled: !s,
            onChange: (d) => u({ width: d })
          }
        ),
        /* @__PURE__ */ P(
          er,
          {
            label: "H",
            value: Math.round(i.height),
            disabled: !s,
            onChange: (d) => u({ height: d })
          }
        )
      ] }),
      a && (i.type === "frame" || i.type === "rect" || i.type === "image") && /* @__PURE__ */ A("label", { className: "chd-field", children: [
        /* @__PURE__ */ P("span", { children: "Fill" }),
        /* @__PURE__ */ P(
          "input",
          {
            type: "color",
            value: i.fill && /^#/.test(i.fill) ? i.fill : "#888780",
            onChange: (d) => u({ fill: d.target.value })
          }
        )
      ] }),
      a && i.type === "text" && /* @__PURE__ */ A(Pl, { children: [
        /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ P("span", { children: "Text" }),
          /* @__PURE__ */ P(
            "textarea",
            {
              rows: 3,
              value: i.text || "",
              onChange: (d) => u({ text: d.target.value })
            }
          )
        ] }),
        l ? /* @__PURE__ */ A("div", { className: "chd-field-row", children: [
          /* @__PURE__ */ P(
            er,
            {
              label: "Size",
              value: i.fontSize ?? 16,
              onChange: (d) => u({ fontSize: d })
            }
          ),
          /* @__PURE__ */ A("label", { className: "chd-field", children: [
            /* @__PURE__ */ P("span", { children: "Color" }),
            /* @__PURE__ */ P(
              "input",
              {
                type: "color",
                value: i.color && /^#/.test(i.color) ? i.color : "#1a1a1a",
                onChange: (d) => u({ color: d.target.value })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ A("label", { className: "chd-field", children: [
          /* @__PURE__ */ P("span", { children: "Color" }),
          /* @__PURE__ */ P(
            "input",
            {
              type: "color",
              value: i.color && /^#/.test(i.color) ? i.color : "#1a1a1a",
              onChange: (d) => u({ color: d.target.value })
            }
          )
        ] })
      ] }),
      a && i.type === "image" && /* @__PURE__ */ A("label", { className: "chd-field", children: [
        /* @__PURE__ */ P("span", { children: "Image URL" }),
        /* @__PURE__ */ P(
          "input",
          {
            type: "url",
            placeholder: "https://…",
            value: i.src || "",
            onChange: (d) => u({ src: d.target.value })
          }
        )
      ] }),
      l ? /* @__PURE__ */ A(Pl, { children: [
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ P(
            "input",
            {
              type: "checkbox",
              checked: !!i.locked,
              onChange: (d) => u({ locked: d.target.checked })
            }
          ),
          /* @__PURE__ */ P("span", { children: "Locked" })
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ P(
            "input",
            {
              type: "checkbox",
              checked: !!i.allowTransform,
              onChange: (d) => u({ allowTransform: d.target.checked })
            }
          ),
          /* @__PURE__ */ P("span", { children: "Allow transform (end user)" })
        ] }),
        /* @__PURE__ */ A("label", { className: "chd-field chd-field-checkbox", children: [
          /* @__PURE__ */ P(
            "input",
            {
              type: "checkbox",
              checked: Kd(i),
              onChange: (d) => u({ editableContent: d.target.checked })
            }
          ),
          /* @__PURE__ */ P("span", { children: "Editable content (end user)" })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ P("p", { className: "chd-panel-empty", children: o.length > 1 ? `${o.length} layers selected` : "Select a layer" })
  ] });
}
const wv = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function Sv() {
  const e = Uo(), t = jo(), n = Zd(), { mode: r, canUndo: l, canRedo: o, exportDocument: i, importDocumentJson: u } = mv(), s = R.useRef(null), a = r === "admin", d = () => {
    const m = i(), v = new Blob([JSON.stringify(m, null, 2)], { type: "application/json" }), S = URL.createObjectURL(v), g = document.createElement("a");
    g.href = S, g.download = "chdesigner-document.json", g.click(), URL.revokeObjectURL(S);
  }, h = async (m) => {
    if (!m)
      return;
    const v = await m.text();
    u(v) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  };
  return /* @__PURE__ */ A("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ A("div", { className: "chd-toolbar-brand", children: [
      /* @__PURE__ */ P("span", { className: "chd-toolbar-logo-wrap", children: "Logo" }),
      /* @__PURE__ */ P("span", { className: "chd-toolbar-mode", children: a ? "Admin" : "Edit" })
    ] }),
    a ? /* @__PURE__ */ P("div", { className: "chd-toolbar-group", children: wv.map((m) => /* @__PURE__ */ A(
      "button",
      {
        type: "button",
        className: "chd-btn",
        onClick: () => e({ type: "ADD_LAYER", layerType: m.type }),
        children: [
          "+ ",
          m.label
        ]
      },
      m.type
    )) }) : null,
    a ? /* @__PURE__ */ A("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ P(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "DELETE_LAYERS" }),
          children: "Delete"
        }
      ),
      /* @__PURE__ */ P(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "BRING_FORWARD" }),
          children: "Forward"
        }
      ),
      /* @__PURE__ */ P(
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
      /* @__PURE__ */ P(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !l,
          onClick: () => e({ type: "UNDO" }),
          children: "Undo"
        }
      ),
      /* @__PURE__ */ P(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !o,
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
      a ? /* @__PURE__ */ A(Pl, { children: [
        /* @__PURE__ */ P("button", { type: "button", className: "chd-btn", onClick: d, children: "Export" }),
        /* @__PURE__ */ P("button", { type: "button", className: "chd-btn", onClick: () => {
          var m;
          return (m = s.current) == null ? void 0 : m.click();
        }, children: "Import" }),
        /* @__PURE__ */ P(
          "input",
          {
            ref: s,
            type: "file",
            accept: "application/json,.json",
            className: "chd-file-input",
            onChange: (m) => {
              var v;
              h(((v = m.target.files) == null ? void 0 : v[0]) ?? null), m.target.value = "";
            }
          }
        )
      ] }) : null
    ] })
  ] });
}
function kv({
  mode: e = "admin",
  document: t,
  templateDocument: n,
  templateId: r,
  onDocumentChange: l,
  onInstanceChange: o,
  statusSlot: i,
  statusClassName: u
}) {
  return /* @__PURE__ */ P(dv, { ...{
    mode: e,
    initialDocument: t,
    templateDocument: n,
    templateId: r,
    onDocumentChange: l,
    onInstanceChange: o
  }, children: /* @__PURE__ */ A("div", { className: `chd-root${e === "endUser" ? " chd-root--end-user" : ""}`, children: [
    /* @__PURE__ */ P(Sv, {}),
    i ? /* @__PURE__ */ P("div", { className: `chd-status-bar${u ? ` ${u}` : ""}`, children: i }) : null,
    /* @__PURE__ */ A("div", { className: "chd-main", children: [
      /* @__PURE__ */ P(gv, {}),
      /* @__PURE__ */ P(yv, {}),
      /* @__PURE__ */ P(vv, {})
    ] })
  ] }) });
}
function xv(e) {
  const t = Wd(e);
  return {
    render(n) {
      t.render(
        /* @__PURE__ */ P(Jh, { theme: n.theme, children: /* @__PURE__ */ P(kv, {}) })
      );
    },
    unmount() {
      t.unmount();
    }
  };
}
export {
  xv as default
};
